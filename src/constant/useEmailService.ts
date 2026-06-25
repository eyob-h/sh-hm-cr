import emailjs from '@emailjs/browser';

export const useEmailService = () => {
  const sendEmail = async (form: HTMLFormElement) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Gracefully handle missing EmailJS configuration
    if (!serviceID || !templateID || !publicKey) {
      console.warn('EmailJS configuration is missing. Form submissions will not be sent.');
      return { 
        success: false, 
        message: 'Email service is not configured. Please contact us directly.' 
      };
    }

    try {
      await emailjs.sendForm(serviceID, templateID, form, { publicKey });
      return {
        success: true,
        message: "Your request has been submitted successfully. We'll contact you shortly.",
      };
    } catch (error: unknown) {
      const err = error as Record<string, unknown>;
      const message =
        typeof err?.text === "string"
          ? err.text
          : typeof err?.message === "string"
            ? err.message
            : typeof err?.statusText === "string"
              ? err.statusText
              : err?.status
                ? `Request failed with status ${err.status}`
                : "Failed to send message. Please try again or contact us directly.";
      console.error("EmailJS error:", message, err);
      return { success: false, message };
    }
  };

  return { sendEmail };
};