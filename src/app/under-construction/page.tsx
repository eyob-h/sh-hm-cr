"use client"
import Link from "next/link";
import { IMAGES, SVGICONS } from "../../constant/theme";
import { useRef, useState } from "react";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";

function UnderConstruction() {
    let year = new Date().getFullYear();

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
            <main className="page-content">
                <section className="under-construct-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="under-construct-logo">
                                <Link href="/"><Image src={IMAGES.logo} alt="Sheba's Home Care logo" /></Link>
                            </div>
                            <div className="dz-content">
                                <h2 className="dz-title">Our website is <span className="text-primary">under construction</span></h2>
                                <p>We’re working hard to bring you a better experience! Our website is under construction, but we’ll be back soon. Stay tuned!</p>
                                <form className="dzSubscribe style-3" ref={form} onSubmit={handleSubmit} aria-describedby="under-construction-status">
                                    <div className="dzSubscribeMsg"></div>
                                    <div className="form-group">
                                        <div className="input-group mb-0">
                                            <input name="dzEmail" required type="email" className="form-control" placeholder="Your Email Address" aria-label="Email address" />
                                            <div className="input-group-addon">
                                                <button name="submit" value="Submit" type="submit" className="btn btn-primary btn-hover1" disabled={isSubmitting} aria-label="Subscribe to updates">
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
                                    id="under-construction-status"
                                    className={`m-t10 ${statusMessage ? (isSuccess ? "text-success" : "text-danger") : "visually-hidden"}`}
                                    aria-live="polite"
                                >
                                    {statusMessage}
                                </p>
                                <div className="dz-social-icon style-4">
                                    <ul>
                                        <li><Link href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></Link></li>
                                        <li><Link href="#" aria-label="X"><i className="fa-brands fa-twitter" /></Link></li>
                                        <li><Link href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></Link></li>
                                        <li><Link href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="construct-media">
                                <span dangerouslySetInnerHTML={{__html :  SVGICONS.underconstruction}} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="site-footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="fb-inner text-center border-0">
                            <p className="copyright-text">© <span className="current-year">{year}</span> Sheba&apos;s Home Care. All Rights Reserved. Website by <Link href="https://www.MomonaTech.com" target="_blank" rel="noopener noreferrer">MomonaTech</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default UnderConstruction;