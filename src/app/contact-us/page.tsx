import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Connect from "@/component/Connect";
import Getintouch from "@/component/Getintouch";
import Alllocation from "@/component/Alllocation";
import Image from "next/image";
import { GOOGLE_MAPS_URL, MAP_EMBED_URL } from "@/constant/site";

function Contactus() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Contact Us" bnrimage={IMAGES.aboutContactBanner.src} backgroundPosition=" center" />
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 m-b30 text-center">
                            <h2 className="title m-b10">Let’s Talk</h2>
                            <p className="m-b0">Let’s talk about how we can support you or your loved one.</p>
                        </div>
                        <div className="row g-xl-4 align-items-center">
                            <Connect />
                            <Getintouch />
                        </div>
                    </div>
                </section>
                <Alllocation />
                <div className="clearfix">
                    <div className="map-wrapper style-2">
                        <iframe 
                        src={MAP_EMBED_URL}                         
                            style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        />                            
                        
                        <div className="container">
                            <div className="content-bx style-5 position-absolute wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                                <div className="content-logo">
                                    <Image src={IMAGES.logo} alt="Sheba's Home Care logo" />
                                </div>
                                <div className="content-text">
                                    <p className="m-b0">41 Brimblecom St, Lynn, MA 01902</p>
                                </div>
                                <div className="dz-footer">
                                    <Link href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="icon-link-hover-end" aria-label="Open Google Maps">
                                        Open Google Map 
                                        <i className="feather icon-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />            
        </>
    );
}
export default Contactus;