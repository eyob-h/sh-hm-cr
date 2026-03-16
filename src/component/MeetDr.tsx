"use client"
import CountUp from "react-countup";
import { IMAGES } from "../constant/theme";
import Link from "next/link";
import { meetdrdata1, meetdrdata2 } from "../constant/alldata";
import Image from "next/image";

function MeetDr() {
    return (
        <>
            <section className="clearfix overlay-primary-dark overlay-opacity-95 p-t50 bg-img-fix" style={{ backgroundImage: `url(${IMAGES.bg1})`, }}>
                <div className="container">
                    <div className="row content-wrapper style-6 align-items-end">
                        <div className="col-xl-6 col-lg-5 wow fadeInLeft" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="content-media">
                                <div className="dz-media">
                                    <Image src={IMAGES.about1png} alt="Caregiver with patient" />
                                </div>
                                <div className="item1" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                    <div className="info-widget style-10 move-3">
                                        <span className="content-text text-primary"><span className="counter"> 
                                            <CountUp start={0} end={20} duration={5} /></span>+</span>
                                        <h3 className="title m-b0">Years <br /> Experienced</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 m-b30 align-self-center">
                            <div className="section-head style-1 m-b30">
                                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">About Sheba Homecare</h2>
                                <p className="fw-normal wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <strong className="text-secondary fw-semibold">Sheba Homecare</strong> is inspired by the legendary Queen of Sheba of the ancient Axumite Empire in northern Ethiopia, known for her wisdom, grace, and her journey to test King Solomon’s leadership and learn from his extraordinary insight. At Sheba Homecare, we carry that legacy by offering high-quality care rooted in love, respect, and dignity. We build real relationships, serve with compassion, and go above and beyond for those who trust us with their care.
                                </p>
                            </div>
                            <h3 className="text-primary title-dashed-separator wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">Care Services We Offer</h3>
                            <ul className="list-check-circle text-secondary fw-medium grid-2 m-b30 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                {meetdrdata1.map((data, i) => (
                                    <li key={i}>{data.title}</li>
                                ))}
                            </ul>
                            <div className="row m-b30 g-3">
                                {meetdrdata2.map((data, i) => (
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay={i * 0.2} data-wow-duration="0.8s" key={i}>
                                        <div className="dz-img-box style-1">
                                            <div className="dz-media">
                                                <Image src={data.image} alt="Sheba's Home Care service highlight" />
                                            </div>
                                            <div className="dz-content">
                                                <h3 className="title">Sheba's Home Care 2024</h3>
                                                <p>Licensed & Certified Home Care Provider</p>
                                                <Link href={"/appointment"} scroll={false} className="btn-link">Schedule A Meeting</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MeetDr;