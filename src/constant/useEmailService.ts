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
      const result = await emailjs.sendForm(serviceID, templateID, form, { publicKey });
      return { success: true, message: result.text };
    } catch (error: any) {
      console.error('EmailJS error:', error);
      return { 
        success: false, 
        message: error.text || 'Failed to send message. Please try again or contact us directly.' 
      };
    }
  };

  return { sendEmail };
};