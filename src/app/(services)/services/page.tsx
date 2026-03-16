import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import ServiceBox from "@/component/ServiceBox";
import Whychoose from "@/component/WhyChoose";
import Pricing from "@/component/Pricing";
import RealPatient from "@/component/RealPatient";
import Frequently from "@/component/Frequently";

function Services() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Services" bnrimage={IMAGES.bnr2.src} />
                <section className="content-inner bg-light" style={{ backgroundImage: `url(${IMAGES.bg5png.src})` }}>
                    <div className="container">
                        <div className="section-head style-1 m-b30 text-center">
                            <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Our Services</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                                We offer professional and personalized care, including:
                            </p>
                        </div>
                        <div className="row justify-content-center m-b20">
                            <div className="col-xl-8">
                                <ul className="list-check text-secondary fw-medium grid-2">
                                    <li>Skilled Homecare (CNA)</li>
                                    <li>Home Hospice (Palliative Care)</li>
                                    <li>Relief &amp; Respite Care</li>
                                    <li>Care in Facilities</li>
                                    <li>End-of-Life &amp; Memory Care</li>
                                    <li>ALS, Parkinson’s, Paraplegia &amp; Quadriplegia Care</li>
                                    <li>Post-Rehabilitation Care</li>
                                    <li>Medication Pickup</li>
                                    <li>Meal Preparation</li>
                                    <li>Light Housekeeping</li>
                                </ul>
                            </div>
                        </div>
                        <ServiceBox />
                    </div>
                </section>
                <section className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden" style={{ backgroundImage: `URL(${IMAGES.bg1.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center' }}>
                    <div className="container">
                        <Whychoose />
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Choose Your Optimal Plan</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <Pricing />
                    </div>
                </section>
                <section className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg3.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: 'cover' }}>
                    <RealPatient />
                </section>
                <Frequently />
            </main>
            <Footer />            
        </>
    );
}
export default Services;