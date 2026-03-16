"use client"
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { headerdata, headerinfo,  HeaderItem  } from "../constant/alldata";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";


function Header() {
    const [show, setShow] = useState<number | null>(null);
    const handleclick = (index : number) => {
        setShow(index)
    };
    const [isActive, setIsActive] = useState<number | null>(null);
    function menuHandler(index : number) {
        setIsActive((prev) => (prev === index ? null : index));       
    }
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    function scrollHandler() {
        if (window.scrollY >= 90) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    // email
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
            <header className="site-header header style-1">
                <div className="header-info-bar header-info-bar--compact d-none d-xxl-block">
                    <div className="container-fluid">
                        <div className="row">
                            {headerinfo.map((data, i) => (
                                <div className="col" key={i}>
                                    <div className="icon-bx-wraper style-5">
                                        <div className="icon-bx">
                                            <span className="icon-cell">
                                                <Image src={data.image} alt={data.title} />
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h2 className="dz-title text-primary">{data.title}</h2>
                                            <p>{data.paragraph}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`sticky-header main-bar-wraper ${scroll ? 'is-fixed' : ''}`}>
                    <div className="main-bar clearfix bg-secondary text-white">
                        <div className="container-fluid clearfix inner-bar">
                            <div className="logo-header logo-dark">
                                <Link href="/"><Image src={IMAGES.logowhite} alt="Sheba's Home Care logo" /></Link>
                            </div>
                            <button onClick={() => handleclick(2)} className={`w3menu-toggler navicon ${show ? 'open' : ''}`} type="button" data-target="#W3Menu" aria-label="Open main menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div onClick={() => setShow(null)} className="menu-close fade-overlay"></div>
                            <div className={`header-nav w3menu w3menu-end mo-left ${show === 2 ? 'show' : ''}`} id="W3Menu">
                                <div className="logo-header logo-dark">
                                    <Link href="/"><Image src={IMAGES.logo} alt="Sheba's Home Care logo" /></Link>
                                </div>
                                <ul className="nav navbar-nav">
                                    {headerdata.map((data :HeaderItem, i: number) => {
                                        let menuClassName = data.classChange;
                                        if (menuClassName === 'has-mega-menu') {
                                            return (
                                                <li key={i} className={`has-mega-menu sub-menu-down auto-width menu-left ${i == isActive ? 'open' : ''}`} >
                                                    <Link href={"#"} onClick={() => menuHandler(i)}> <span>{data.title}</span> <i className="fas fa-chevron-down tabIndex" /> </Link>
                                                    <div className="mega-menu">
                                                        <ul className="demo-menu">
                                                            {data.content?.map((item, index) => (
                                                                <li key={index}>
                                                                    <Link href={item.to}> <Image src={item.image as string} alt={item.title} /> 
                                                                        <span className="menu-title">{item.title}</span> 
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        else if (menuClassName === 'sub-menu-down') {
                                            return (
                                                <li key={i} className={`sub-menu-down ${i == isActive ? 'open' : ''}`} onClick={() => menuHandler(i)}>
                                                    <Link href={"#"}> <span>{data.title}</span> <i className="fas fa-chevron-down tabIndex" /> </Link>
                                                    <ul className="sub-menu">
                                                        {data.content?.map((item, index) => (
                                                            <li key={index}> <Link href={item.to}>{item.title}</Link> </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li key={i}><Link href={data.to as string}><span>{data.title}</span></Link></li>
                                            )
                                        }
                                    })}
                                </ul>
                                <div className="dz-social-icon">
                                    <ul>
                                    <li> <Link href="#" aria-label="Facebook"> <i className="fa-brands fa-facebook-f" /> </Link> </li>
                                        <li> <Link href="#" aria-label="X"> <i className="fa-brands fa-x-twitter" /> </Link> </li>
                                        <li> <Link href="#" aria-label="LinkedIn"> <i className="fa-brands fa-linkedin" /> </Link> </li>
                                        <li> <Link href="#" aria-label="Instagram"> <i className="fa-brands fa-instagram" /> </Link> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`extra-nav ${scroll ? 'active' : ''}`}>
                                <div className="extra-cell">
                                    <ul className="header-right">
                                        <li className="nav-item">
                                            <Link href="/appointment" className="btn btn-primary btn-hover1"> Appointment </Link>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={() => handleclick(1)} type="button" className="toggle-nav-btn" data-bs-toggle="offcanvas" data-bs-target="#headerSidebar" aria-controls="offcanvasLeft" aria-label="Open contact sidebar">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`offcanvas dz-offcanvas offcanvas offcanvas-end ${show === 1 ? 'show' : ''}`} tabIndex={-1} id="headerSidebar">
                    <button onClick={() => setShow(null)} type="button" className="btn-close m-t10 m-l10" data-bs-dismiss="offcanvas" aria-label="Close sidebar"></button>
                    <div className="offcanvas-body">
                        <div className="widget">
                            <div className="sidebar-header m-b20">
                                <Link href="/"><Image src={IMAGES.logo} alt="Sheba's Home Care logo" /></Link>
                            </div>
                            <p>Sheba's Home Care provides professional, compassionate home healthcare services. We offer personalized medical care, nursing services, and support for patients in the comfort of their homes.</p>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4 className="title">Contact Us</h4>
                            </div>
                            <ul className="list-check">
                                <li>41 Brimblecom St, Lynn, MA 01902</li>
                                <li><Link href="mailto:info@shebahomecare.com" className="text-body">info@shebahomecare.com</Link></li>
                                <li><Link href="tel:+17812345678" className="text-body">+1 781 234 5678</Link></li>
                            </ul>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4 className="title">Newsletter</h4>
                            </div>
                            <form className="dzSubscribe style-2" ref={form} onSubmit={handleSubmit} aria-describedby="newsletter-status">
                                <div className="dzSubscribeMsg"></div>
                                <div className="form-group">
                                    <div className="input-group mb-0">
                                        <input name="dzEmail" required type="email" className="form-control" placeholder="Your Email Address" aria-label="Email address" />
                                        <div className="input-group-addon">
                                            <button name="submit" value="Submit" type="submit" className="btn text-primary btn-transparent p-2" disabled={isSubmitting} aria-label="Subscribe to newsletter">
                                                <i className="fa-solid fa-paper-plane" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p
                                id="newsletter-status"
                                className={`m-t10 ${statusMessage ? (isSuccess ? "text-success" : "text-danger") : "visually-hidden"}`}
                                aria-live="polite"
                            >
                                {statusMessage}
                            </p>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4 className="title">Follow Us</h4>
                            </div>
                            <div className="dz-social-icon style-1">
                                <ul>
                                    <li><Link href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></Link> </li>
                                    <li><Link href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></Link> </li>
                                    <li><Link href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></Link> </li>
                                    <li><Link href="#" aria-label="X"><i className="fa-brands fa-x-twitter" /></Link> </li>
                                    <li><Link href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;