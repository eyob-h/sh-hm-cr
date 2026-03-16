import Link from "next/link";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import PageBanner from "@/component/PageBanner";
import { servicedetails, worldclasslistdata, serviceDetailAccordionData } from "@/constant/alldata";
import Image from "next/image";
import AccordionBlog from "./_components/AccordionBlog";
import SurgeryBlog from "./_components/SurgeryBlog";

function ServiceDetail() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Our Services" bnrimage={IMAGES.about5.src} />
                <section className="content-inner service-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 single-inner order-lg-1">
                                <div className="single-media dz-media single-media height-sm radius-lg wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.7s">
                                    <Image src={IMAGES.about3png} alt="Sheba Home Care services" className="object-fit-cover" />
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                                    <h2>Our Home Care Services</h2>
                                    <p>Sheba&apos;s Home Care provides compassionate, professional in-home care for seniors in Lynn and the North Shore. We help families keep their loved ones safe and comfortable at home with personalized care plans and licensed caregivers.</p>
                                    <p>From personal care and companionship to medication reminders, meal preparation, and specialized dementia care, we offer a full range of services tailored to each client. Our team is available 24/7 to support you and your family.</p>
                                </div>
                                {servicedetails.map((item, i) => (
                                    <div key={item.id} id={item.id} className="content-item wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                ))}
                                <div className="content-item wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.7s">
                                    <h3>What We Offer</h3>
                                    <ul className="list-check text-secondary grid-2 m-b30">
                                        {worldclasslistdata.map((item, i) => (
                                            <li key={i}>{item.title}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                                    <h3>Our Care Team</h3>
                                    <SurgeryBlog />
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">
                                    <h3>Frequently asked questions</h3>
                                    <AccordionBlog items={serviceDetailAccordionData} />
                                </div>
                            </div>
                            <div className="col-lg-4 m-b30">
                                <aside className="side-bar sticky-top left">
                                    <div className="widget service_menu_nav bg-secondary wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                                        <div className="widget-title">
                                            <h4 className="title">All Services</h4>
                                        </div>
                                        <ul>
                                            {servicedetails.map((item, i) => (
                                                <li key={i} className={item.columnstand}><Link href={`#${item.id}`}>{item.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="widget_contact wow fadeInUp bg-primary" data-wow-delay="0.4s" data-wow-duration="0.7s">
                                        <div className="widget-content">
                                            <div className="widget-media text-white mb-3">
                                                <i className="feather icon-phone-call dz-ring-effect" style={{ fontSize: '2.5rem' }} aria-hidden />
                                            </div>
                                            <h4 className="title text-white">Do you need any help?</h4>
                                            <div className="phone-number">
                                                <Link href="tel:+17812345678" className="text-white">+1 781 234 5678</Link>
                                            </div>
                                            <div className="email">
                                                <Link href="mailto:info@shebahomecare.com" className="text-white">info@shebahomecare.com</Link>
                                            </div>
                                            <div className="link-btn">
                                                <Link href="/contact-us" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                                                    Contact Us <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
export default ServiceDetail;