import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
} from "@/constant/site";
import { isValidPhone, PHONE_ERROR_MESSAGE } from "@/constant/phone";

export const runtime = "nodejs";

const BLOCKED_FIELDS = new Set([
  "submit",
  "reCaptchaEnable",
  "to_email",
  "website_url",
  "dzCardNumber",
  "dzExpiryDate",
  "dzCVV",
  "Methods1",
  "stepRadio",
]);

const FIELD_LABELS: Record<string, string> = {
  dzToDo: "Form type",
  dzName: "Name",
  dzFirstName: "First name",
  dzLastName: "Last name",
  dzEmail: "Email",
  dzPhoneNumber: "Phone",
  author: "Author",
  email: "Email",
  comment: "Comment",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function parseRecipients(value: string | undefined, fallback: string) {
  const recipients = (value || fallback)
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  return recipients.length > 0 ? recipients : [fallback];
}

function buildRows(fields: Record<string, string>) {
  return Object.entries(fields)
    .map(([key, value]) => {
      const label = FIELD_LABELS[key] ?? key;
      return `<tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; vertical-align: top;"><strong>${escapeHtml(label)}</strong></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(value)}</td>
      </tr>`;
    })
    .join("");
}

function buildEmailHtml(formType: string, fields: Record<string, string>) {
  return `<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #212121;">
  <div style="max-width: 600px; margin: auto;">
    <div style="text-align: center; background-color: #13555a; padding: 32px 16px; border-radius: 32px 32px 0 0;">
      <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600;">Sheba's Home Care</p>
    </div>
    <div style="padding: 24px;">
      <h1 style="font-size: 26px; margin-bottom: 8px; color: #13555a;">New website form submission</h1>
      <p style="margin-bottom: 24px; color: #555;">Someone submitted the <strong>${escapeHtml(formType)}</strong> form on your website.</p>
      <table style="width: 100%; border-collapse: collapse;">
        ${buildRows(fields)}
      </table>
    </div>
    <div style="text-align: center; background-color: #13555a; padding: 16px; border-radius: 0 0 32px 32px; color: #ffffff;">
      <p style="margin: 0 0 8px 0;">Sheba's Home Care</p>
      <p style="margin: 0 0 4px 0;">${escapeHtml(CONTACT_ADDRESS)}</p>
      <p style="margin: 0 0 4px 0;">${escapeHtml(CONTACT_PHONE)}</p>
      <p style="margin: 0;">${escapeHtml(CONTACT_EMAIL)}</p>
    </div>
  </div>
</div>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      {
        success: false,
        message:
          "Email service is not configured. Please contact us directly.",
      },
      { status: 500 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid form submission." },
      { status: 400 }
    );
  }

  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (BLOCKED_FIELDS.has(key) || typeof value !== "string") continue;
    const trimmed = value.trim();
    if (!trimmed) continue;
    fields[key] = trimmed;
  }

  const email =
    getString(formData, "dzEmail") || getString(formData, "email");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: "A valid email address is required." },
      { status: 400 }
    );
  }

  const phone = getString(formData, "dzPhoneNumber");
  if (phone && !isValidPhone(phone)) {
    return NextResponse.json(
      { success: false, message: PHONE_ERROR_MESSAGE },
      { status: 400 }
    );
  }

  const formType =
    getString(formData, "dzToDo") ||
    (fields.comment
      ? "Comment"
      : fields.dzName || fields.dzFirstName
        ? "Contact"
        : "Newsletter");

  const name =
    getString(formData, "dzName") ||
    [getString(formData, "dzFirstName"), getString(formData, "dzLastName")]
      .filter(Boolean)
      .join(" ") ||
    getString(formData, "author") ||
    "Website visitor";

  const from =
    process.env.RESEND_FROM_EMAIL ||
    "Sheba's Home Care <onboarding@resend.dev>";
  const to = parseRecipients(process.env.RESEND_TO_EMAIL, CONTACT_EMAIL);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Sheba's Home Care] ${formType} from ${name}`,
      html: buildEmailHtml(formType, fields),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          message:
            "Failed to send message. Please try again or contact us directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your request has been submitted successfully. We'll contact you shortly.",
    });
  } catch (error) {
    console.error("Resend exception:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send message. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
