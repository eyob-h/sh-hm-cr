"use client"
import { useRef, useState } from "react";
import { useEmailService } from "@/constant/useEmailService";

const AppointForm = () => {
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
            <form
                ref={form}
                onSubmit={handleSubmit}
                className="dzForm"
                method="POST"
                aria-describedby="appointment-form-status"
            >
                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
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
                        <button
                            type="submit"
                            name="submit"
                            value="submit"
                            className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow"
                            disabled={isSubmitting}
                        >
                            Appointment <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                        </button>
                    </div>
                </div>
            </form>
            <p
                id="appointment-form-status"
                className={`m-t10 ${statusMessage ? (isSuccess ? "text-success" : "text-danger") : "visually-hidden"}`}
                aria-live="polite"
            >
                {statusMessage}
            </p>
        </>
    );
};
export default AppointForm;
