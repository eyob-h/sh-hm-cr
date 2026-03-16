"use client"
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import Countdown from 'react-countdown';
import { useEffect, useRef, useState } from "react";
import type { CountdownRenderProps } from 'react-countdown';
import { useEmailService } from "@/constant/useEmailService";

function ComingSoon() {
    const [targetDate, setTargetDate] = useState<Date | null>(null);
    useEffect(() => {
        const now = new Date();
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 28, 23, 59, 59);
        setTargetDate(nextMonth);
    }, []);    
    // const targetDate = new Date('2025-12-31T23:59:59');
    const renderer = ({ days, hours, minutes, seconds, completed } : CountdownRenderProps) => {
        if (completed) {
            return <span>Time's up!</span>;
        } else {
            return (
                <div className="d-flex">
                    <div className="date">
                        <span className="time" id="day">{days}</span>
                        <span className="text"> Days</span>
                    </div>
                    <div className="date">
                        <span className="time" id="hour">{hours}</span>
                        <span className="text">Hours</span>
                    </div>
                    <div className="date">
                        <span className="time" id="min">{minutes}</span>
                        <span className="text">Minutes</span>
                    </div>
                    <div className="date">
                        <div className="time lost" id="second">{seconds}</div>
                        <span className="text">Seconds</span>
                    </div>
                </div>
            );
        }
    };
    
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
            <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 px-0">
                    <div className="dz-coming-bx">
                        <div className="top-wrapper">
                            <div className="coming-soon-logo">
                                <Link href="/"><Image src={IMAGES.logo} alt="Sheba's Home Care logo" /></Link>
                            </div>
                            <div className="dz-content">
                                <h2 className="dz-title pe-xl-4">We Are <br /> Coming Soon</h2>
                                <div className="countdown">                                    
                                    {targetDate && <Countdown date={targetDate} renderer={renderer} />}
                                </div>
                                <p>Big things are coming! Sheba's Home Care will be opening its doors soon. Be the first to experience something special!</p>
                                <form className="dzSubscribe style-3" ref={form} onSubmit={handleSubmit} method="post" aria-describedby="coming-soon-status">
                                    <div className="dzSubscribeMsg"></div>
                                    <div className="form-group">
                                        <div className="input-group mb-0">
                                            <input name="dzEmail" required type="email" className="form-control" placeholder="enter Your Email Address" aria-label="Email address" />
                                            <div className="input-group-addon">
                                                <button name="submit" value="Submit" type="submit" className="btn btn-primary btn-hover1" disabled={isSubmitting} aria-label="Subscribe to launch updates">
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
                                    id="coming-soon-status"
                                    className={`m-t10 ${statusMessage ? (isSuccess ? "text-success" : "text-danger") : "visually-hidden"}`}
                                    aria-live="polite"
                                >
                                    {statusMessage}
                                </p>
                            </div>
                        </div>
                        <div className="bottom-wrapper">
                            <div className="dz-social-icon style-4 m-b20">
                                <ul>
                                    <li><Link href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link href="#" aria-label="X"><i className="fa-brands fa-twitter" /></Link></li>
                                    <li><Link href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></Link></li>
                                    <li><Link href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></Link></li>
                                </ul>
                            </div>
                            <p className="copyright-text m-0">© <span className="current-year">2025</span> Sheba&apos;s Home Care. All Rights Reserved. Website by <Link href="https://www.MomonaTech.com" target="_blank" rel="noopener noreferrer">MomonaTech</Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 px-0">
                    <div className="dz-coming-media">
                        <Image src={IMAGES.comingsoon} alt="coming" />
                    </div>
                </div>
            </div>               
        </>
    );
}
export default ComingSoon;