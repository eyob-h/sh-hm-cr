import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import "../../public/assets/css/style.css"
import ScrolltoTop from "@/component/ScrolltoTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Sheba's Home Care - Professional Home Healthcare Services",
  description: "Sheba's Home Care provides professional, compassionate home healthcare services. We offer personalized medical care, nursing services, and support for patients in the comfort of their homes.",
  keywords: "home care, home healthcare, senior care, Lynn MA, home care services, personal care, companionship, medication reminders, live-in care",
  authors: [{ name: "Sheba's Home Care" }],
  openGraph: {
    title: "Sheba's Home Care - Professional Home Healthcare Services",
    description: "Professional, compassionate home healthcare services in Lynn, MA. Personalized care for seniors in the comfort of their homes.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: '/assets/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme-color="skin-1" suppressHydrationWarning>
      <body className={poppins.className} suppressHydrationWarning>
        {children}
        <ScrolltoTop />
      </body>
    </html>
  );
}
