"use client"
import { useEmailService } from '@/constant/useEmailService';
import { useRef, useState } from "react";

const CommentForm = () =>{
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
    return(
        <form ref={form} onSubmit={handleSubmit} method="post" id="comments_form" className="comment-form" noValidate aria-describedby="comment-status">
            <p className="comment-form-author">
                <input id="name" placeholder="Author" name="author" type="text" />
            </p>
            <p className="comment-form-email">
                <input id="email" required placeholder="Email" name="email" type="email" />
            </p>
            <p className="comment-form-comment">
                <textarea id="comments" placeholder="Type Comment Here" className="form-control4" name="comment" 
                    cols={45} rows={3} required></textarea>
            </p>
            <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                <button id="submit" type="submit" className="submit btn btn-primary btn-lg filled" disabled={isSubmitting}>Submit Now</button>
            </p>
            <p
                id="comment-status"
                className={`m-t10 ${statusMessage ? (isSuccess ? "text-success" : "text-danger") : "visually-hidden"}`}
                aria-live="polite"
            >
                {statusMessage}
            </p>
        </form>
    )
}
export default CommentForm;
