"use client"
import { useRef, useState } from "react";
import { IMAGES } from "../constant/theme";
import { useEmailService } from "@/constant/useEmailService";

function Getintouch() {
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
            <div className="col-xl-5 m-b30" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                <div className="form-wrapper style-1">
                    <div className="form-body bg-primary background-blend-burn" 
                        style={{ backgroundImage: `url(${IMAGES.bg2png.src})`, backgroundSize: 'cover' }} 
                    >
                        <div className="section-head style-1 m-b30">
                            <h2 className="title text-white m-b0">Get in Touch</h2>
                            <p className="text-white m-b0 fw-medium">You can react us anytime</p>
                        </div>
                        <form ref={form} onSubmit={handleSubmit} className="dzForm" aria-describedby="get-in-touch-status">
                            <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                            <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                            <div className="dzFormMsg"></div>
                            <div className="row">
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzFirstName" type="text" className="form-control" id="inputFirstName" placeholder="First Name" required />
                                        <label htmlFor="inputFirstName">First Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzLastName" type="text" className="form-control" id="inputLastName" placeholder="Last Name" required />
                                        <label htmlFor="inputLastName">Last Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzEmail" type="email" className="form-control" id="inputYourEmail" placeholder="Your Email" required />
                                        <label htmlFor="inputYourEmail">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzPhoneNumber" type="tel" className="form-control dz-number" id="inputPhoneNumber" placeholder="Phone Number" required />
                                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button type="submit" name="submit" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow" disabled={isSubmitting}>
                                        Submit <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p
                            id="get-in-touch-status"
                            className={`m-t10 ${statusMessage ? (isSuccess ? "text-success" : "text-danger") : "visually-hidden"}`}
                            aria-live="polite"
                        >
                            {statusMessage}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Getintouch;