"use client"
import { useRef, useState } from "react";
import { IMAGES } from "../constant/theme";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";

function AppointmentData() {
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
            <section className="content-inner-2 bg-white z-2" style={{ backgroundImage: `url(${IMAGES.bg5png.src})` }}>
                <div className="container">
                    <div className="section-head style-1 text-end m-b50">
                        <h2 className="title m-b10">Schedule Your Free Care Consultation</h2>
                        <p className="m-b0">Get in touch today. We&apos;ll discuss your needs and help you find the right care for your family.</p>
                    </div>
                    <div className="row align-items-end content-wrapper style-8">
                        <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <Image src={IMAGES.about3png} alt="Care appointment consultation" />
                        </div>
                        <div className="col-lg-6" data-bottom-top="transform: translateY(100px)" data-top-bottom="transform: translateY(-10px)">
                            <div className="form-wrapper style-1 text-vr-wrapper">
                                <div className="text-vertical">Book an appointment now</div>
                                <div className="form-body bg-primary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg2png.src})`, backgroundSize: 'cover' }}>
                                    <div className="title-head">
                                        <h2 className="form-title m-b0">Book <span>now</span></h2>
                                    </div>
                                    <form ref={form} onSubmit={handleSubmit} className="dzForm" method="POST" aria-describedby="appointment-status">
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
                                                    Book Now
                                                    <span className="right-icon">
                                                        <i className="feather icon-arrow-right" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <p
                                        id="appointment-status"
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
        </>
    );
}
export default AppointmentData;