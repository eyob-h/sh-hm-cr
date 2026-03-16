"use client"
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { IMAGES } from "@/constant/theme";

import PageBanner from "@/component/PageBanner";
import WorldClass from "@/component/WorldClass";
import Whychoose from "@/component/WhyChoose";
import MeetDr from "@/component/MeetDr";
import Empoly from "@/component/EmpolyBlog";
import RealPatient from "@/component/RealPatient";
import Schedule from "@/component/Schedule";
import Clientswiper1 from "@/component/Clientswiper1";
import Connect from "@/component/Connect";
import Inspirational from "@/component/Inspirational";
import { useEmailService } from "@/constant/useEmailService";


function AboutUs() {
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
                <PageBanner title="About Us" bnrimage={IMAGES.aboutContactBanner.src} backgroundPosition="top center" />
                <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg1png.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                    <div className="container">
                        <WorldClass />
                    </div>
                </section>
                <Inspirational />
                <section className="content-inner">
                    <div className="container">
                        <div className="row g-lg-5 align-items-center">
                            <div className="col-lg-5 m-b30">
                                <div className="dz-media radius-md height-lg">
                                    <Image src={IMAGES.azeb} alt="Caregiver Azeb Legese providing home care" className="object-fit-cover" />
                                </div>
                            </div>
                            <div className="col-lg-7 m-b30">
                                <div className="section-head style-1 m-b20">
                                    <h2 className="title m-b10">Meet the Caregiver – Azeb Legese</h2>
                                </div>
                                <p className="m-b15">
                                    Azeb Legese is a Certified Nursing Assistant (CNA) with over 13 years of experience providing compassionate one-on-one care for seniors at home and in facilities. Her strengths include personal hygiene support, meal preparation, medication reminders, mobility assistance, and transportation coordination.
                                </p>
                                <h4 className="m-b10">Experience Highlights</h4>
                                <ul className="list-check text-secondary fw-medium m-b15">
                                    <li>2012–2025: Enhanced Personal Homecare Provider (homes &amp; facilities)</li>
                                    <li>2010–Present: Health Team Member at Operation Bootstrap (Lynn, MA)</li>
                                    <li>1993–2001: Nanny &amp; Housekeeper for a family of 7 children</li>
                                </ul>
                                <h4 className="m-b10">Training &amp; Certifications</h4>
                                <ul className="list-check text-secondary fw-medium">
                                    <li>PHCAST Enhanced Personal Caregiver (Massachusetts Council)</li>
                                    <li>CPR/AED &amp; Emergency First Aid Certification</li>
                                    <li>Nurse Aid Training – Spectrum Healthcare</li>
                                    <li>Home Health Aid Training – Spectrum Healthcare</li>
                                    <li>High School Diploma – Operation Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden" style={{ backgroundImage: `URL(${IMAGES.bg1.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center' }}>
                    <div className="container">
                        <Whychoose />
                    </div>
                </section>
                <MeetDr />
                {/* Our Experienced Care Team section hidden per client request */}
                <section className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg3.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: 'cover' }}>
                    <RealPatient />
                </section>
                <section className="content-inner ">
                    <div className="container">
                        <div className="row g-xl-4 align-items-center">
                            <Connect />
                            <div className="col-xl-5 m-b30" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                                <div className="form-wrapper style-1">
                                    <div className="form-body bg-primary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg2png.src})` }}>
                                        <div className="title-head">
                                            <h2 className="form-title m-b0">Schedule A <span>Meeting</span> <br /> Request Home Care Services</h2>
                                        </div>
                                        <form ref={form} onSubmit={handleSubmit} className="dzForm" aria-describedby="about-us-status">
                                            <input type="hidden" className="form-control" name="dzToDo" value="Appointment" />
                                            <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                            <div className="dzFormMsg"></div>
                                            <div className="row">
                                                <div className="col-sm-6 m-b30">
                                                    <div className="form-floating floating-underline input-light">
                                                        <input name="dzName" type="text" className="form-control" id="inputYourName" placeholder="Your Name" required />
                                                        <label htmlFor="inputYourName">Your Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 m-b30">
                                                    <div className="form-floating floating-underline input-light">
                                                        <input name="dzEmail" type="email" className="form-control" id="inputYourEmail" placeholder="Your Email" required />
                                                        <label htmlFor="inputYourEmail">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 m-b30">
                                                    <div className="form-floating floating-underline input-light">
                                                        <input name="dzPhoneNumber" type="tel" className="form-control dz-number" id="inputPhoneNumber" placeholder="Phone Number" required />
                                                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <button type="submit" name="submit" value="submit" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow" disabled={isSubmitting}>
                                                        Schedule A Meeting <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <p
                                            id="about-us-status"
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
                </section>
                <Schedule />
                <Clientswiper1 />
            </main>
        </>
    );
}
export default AboutUs;