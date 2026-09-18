import { isValidPhone, PHONE_ERROR_MESSAGE } from "@/constant/phone";

export const useEmailService = () => {
  const sendEmail = async (form: HTMLFormElement) => {
    const phoneInput = form.elements.namedItem("dzPhoneNumber");
    if (phoneInput instanceof HTMLInputElement) {
      const phone = phoneInput.value.trim();
      if (!isValidPhone(phone)) {
        phoneInput.setCustomValidity(PHONE_ERROR_MESSAGE);
        phoneInput.reportValidity();
        return { success: false, message: PHONE_ERROR_MESSAGE };
      }
      phoneInput.setCustomValidity("");
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      const data = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !data?.success) {
        return {
          success: false,
          message:
            data?.message ||
            "Failed to send message. Please try again or contact us directly.",
        };
      }

      return {
        success: true,
        message:
          data.message ||
          "Your request has been submitted successfully. We'll contact you shortly.",
      };
    } catch (error) {
      console.error("Contact form error:", error);
      return {
        success: false,
        message:
          "Failed to send message. Please try again or contact us directly.",
      };
    }
  };

  return { sendEmail };
};
