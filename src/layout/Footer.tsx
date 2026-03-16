"use client"
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { footerdata1, footerdata2 } from "../constant/alldata";
import { useRef, useState } from "react";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";


function Footer() {
    let year =  new Date().getFullYear();
    const form = useRef<HTMLFormElement | null>(null);
    const { sendEmail } = useEmailService();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        setIsSubmitting(true);
        setStatusMessage(null);
        setIsSuccess(null);
        const result = await sendEmail(form.current);
        setIsSuccess(result.success);
        setStatusMessage(result.message);
        if (result.success) form.current.reset();
        setIsSubmitting(false);
    };
    return (
        <>
            <footer className="site-footer style-1 overlay-primary-light" style={{ backgroundImage: `url(${IMAGES.bg4.src})` }} >
                <div className="footer-head">
                    <div className="container">
                        <div className="fh-inner">
                            <div className="row g-3 align-items-center">
                                <div className="col-xl-3 col-md-12 col-sm-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h3 className="title">Get in Touch with us</h3>
                                    <p className="text">We're here to help you find the right care solution</p>
                                </div>
                                {footerdata1.map((data, i) => (
                                    <div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                        <div className="icon-bx-wraper style-1">
                                            <div className="icon-bx bg-secondary">
                                                <span className="icon-cell">
                                                    {data.icon}
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dz-title">{data.title}</h5>
                                                <p>{data.paragraph}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-sm-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="widget widget_about me-2">
                                    <div className="footer-logo logo-white">
                                        <Link href="/"><Image src={IMAGES.logo} alt="Sheba's Home Care logo" /></Link>
                                    </div>
                                    <p><span className="text-primary">Sheba's Home Care</span> provides professional, compassionate home healthcare services. We offer personalized medical care, nursing services, and support for patients in the comfort of their homes. Your health and well-being are our top priorities.</p>
                                </div>
                            </div>
                            {footerdata2.map((data, i) => (
                                <div className="col-xl-2 col-md-3 col-6 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                    <div className="widget widget_services">
                                        <h2 className="footer-title">{data.title} </h2>
                                        <ul className="list-hover1">
                                            {[1, 2, 3, 4, 5].map((i) => {
                                                const link = data[`link${i}` as keyof typeof data];
                                                const span = data[`span${i}` as keyof typeof data];
                                                if (link == null || span == null) return null;
                                                return (
                                                    <li key={i}><Link href={String(link)}><span>{String(span)}</span></Link></li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="container">
                        <div className="fm-inner">
                            <div className="row align-items-center g-lg-5 g-4">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title">Stay Informed About Home Care</h2>
                                    <p>Get our latest updates and care tips right into your inbox</p>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <form className="dzSubscribe style-1" ref={form} onSubmit={handleSubmit} aria-describedby="footer-newsletter-status">
                                        <div className="dzSubscribeMsg"></div>
                                        <div className="form-group">
                                            <div className="input-group mb-0">
                                                <input name="dzEmail" required type="email" className="form-control" placeholder="Your Email Address" aria-label="Email address" />
                                                <div className="input-group-addon">
                                                    <button name="submit" value="Submit" type="submit" className="btn btn-primary btn-hover1" disabled={isSubmitting} aria-label="Subscribe to newsletter">
                                                        <span className="btn-text">Subscribe Now</span>
                                                        <span className="btn-icon">
                                                            <i className="fa-solid fa-paper-plane" />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <p
                                        id="footer-newsletter-status"
                                        className={`m-t10 ${statusMessage ? (isSuccess ? "text-success" : "text-danger") : "visually-hidden"}`}
                                        aria-live="polite"
                                    >
                                        {statusMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="fb-inner">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <p className="copyright-text m-0">© <span className="current-year">{year}</span> Sheba&apos;s Home Care. All Rights Reserved. Website by <Link href="https://www.MomonaTech.com" target="_blank" rel="noopener noreferrer">MomonaTech</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item1">
                    <div className="info-widget style-4">
                        <div className="widget-media">
                            <Image src={IMAGES.avtarmiddle1} alt="Have a question? Contact Sheba Home Care" />
                        </div>
                        <div className="widget-content">
                            <h6 className="title">Have a Question?</h6>
                            <Link href="mailto:info@shebahomecare.com">info@shebahomecare.com</Link>
                            <span className="text">Sheba Home Care</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;