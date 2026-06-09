export const CONTACT_PHONE = "+1 781-244-6847";
export const CONTACT_PHONE_TEL = "tel:+17812446847";
export const CONTACT_EMAIL = "info@shebahomecare.com";
export const CONTACT_ADDRESS = "41 Brimblecom St, Lynn, MA 01902";

export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=41+Brimblecom+St,+Lynn,+MA+01902&hl=en&z=16&output=embed";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=41+Brimblecom+St,+Lynn,+MA+01902";

export type SocialLink = {
  href: string;
  label: string;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/profile.php?id=61590170868003",
    label: "Facebook",
    icon: "fa-brands fa-facebook-f",
  },
  {
    href: "https://www.instagram.com/shebahomecares/",
    label: "Instagram",
    icon: "fa-brands fa-instagram",
  },
  {
    href: "https://x.com/shebahomecares",
    label: "X",
    icon: "fa-brands fa-x-twitter",
  },
  {
    href: "https://www.tiktok.com/@shebahomecare_boston",
    label: "TikTok",
    icon: "fa-brands fa-tiktok",
  },
];
