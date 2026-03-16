import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { IMAGES } from "@/constant/theme";
import Clientswiper1 from "@/component/Clientswiper1";
import PageBanner from "@/component/PageBanner";
import Schedule from "@/component/Schedule";
import StayInformed from "@/component/StayInformed";
import { worldclasslistdata } from "@/constant/alldata";
import Image from "next/image";

function PatientInfo() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Patient Info" bnrimage={IMAGES.bnr3.src} />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row g-3 g-lg-4 align-items-center">
                            <div className="col-lg-5">
                                <div className="section-head style-1 mb-0">
                                    <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Your First Visit</h2>
                                    <h3 className="font-24 text-primary m-b20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">We Welcome New Clients &amp; Families</h3>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">We warmly welcome new clients of all ages and their families to Sheba&apos;s Home Care. During your first visit, you will have the chance to meet our care team and discuss your or your loved one&apos;s needs. We are committed to understanding your situation and addressing any questions or concerns you may have about in-home care.</p>
                                    <p className="m-b0 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">Our goal is to provide the highest standard of compassionate home care. Thank you for considering us. We look forward to meeting you and helping you or your loved one remain safe and comfortable at home.</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="dz-media radius-lg height-sm ms-xl-4 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <Image src={IMAGES.about7} alt="Patient intake and first visit" className="object-fit-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Clientswiper1 />
                <Schedule />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5 m-b30">
                                <div className="dz-media radius-md height-lg me-xl-4 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <Image src={IMAGES.about6} alt="Care consultation visit" className="object-fit-cover" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 m-b30">
                                <div className="section-head style-1 mb-0">
                                    <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Your first visit with <br /> us may include</h2>
                                    <p className="m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Many clients and families find us through their primary care provider, hospital discharge planner, or by searching for home care in Lynn and the North Shore. We work closely with doctors, nurses, and family members to create a care plan that fits your needs.</p>
                                    <h3 className="font-24 m-b15 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">Our Services Include:</h3>
                                    <ul className="list-check text-secondary grid-2 fw-medium m-b30 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                        {worldclasslistdata.map((item, i) => (
                                            <li key={i}>{item.title}</li>
                                        ))}
                                    </ul>
                                    <p className="m-b0 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">We stay in touch with your healthcare providers and family to keep care coordinated. During your visit, we will answer all of your questions about our services and what to expect. We also offer a clear discussion of options and pricing so you can plan care with confidence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <StayInformed />
            </main>
            <Footer />            
        </>
    );
}
export default PatientInfo;