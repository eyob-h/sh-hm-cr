import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "../constant/theme";
import { worldclasslistdata } from "../constant/alldata";

function WorldClass() {
    return (
        <>
            <div className="row content-wrapper style-1 align-items-center">
                <div className="col-xl-6 m-b30">
                    <div className="content-media">
                        <div className="dz-media">
                            <Image src={IMAGES.about1} alt="Caregiver assisting a senior at home" />
                        </div>
                        <div className="item1" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                            <div className="info-widget style-7">
                                <div className="widget-content bg-secondary">
                                    Video Call Support
                                </div>
                                <div className="widget-media">
                                    <Image src={IMAGES.azeb} alt="Video call support from Sheba Homecare caregiver Azeb" />
                                    <div className="call-widget">
                                        <Link href={"#"} scroll={false}> <Image src={IMAGES.camerasvg} alt="" /> </Link>
                                        <Link href={"#"} scroll={false}> <Image src={IMAGES.massagesvg} alt="" /> </Link>
                                        <Link href={"#"} scroll={false} className="active"> <Image src={IMAGES.callsvg} alt="" /> </Link>
                                        <Link href={"#"} scroll={false}> <Image src={IMAGES.mikesvg} alt="" /> </Link>
                                        <Link href={"#"} scroll={false}> <Image src={IMAGES.videosvg} alt="" /> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item2" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                            <div className="info-widget style-6 bg-primary">
                                <div className="info-icon bg-secondary">
                                    <Image src={IMAGES.clocksvg} alt="Clock icon" />
                                </div>
                                <div className="widget-content">
                                    <h4 className="title">Open Hours</h4>
                                    <ul>
                                        <li>Monday <strong>09:30 - 07:30</strong></li>
                                        <li>Tuesday <strong>09:30 - 07:30</strong></li>
                                        <li>Wednesday <strong>09:30 - 07:30</strong></li>
                                        <li>Thursday <strong>09:30 - 07:30</strong></li>
                                        <li>Friday <strong>09:30 - 07:30</strong></li>
                                        <li>Saturday <strong>09:30 - 07:30</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 m-b30">
                    <div className="section-head style-1 m-b30">
                        <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Comprehensive Home Care Services in Lynn, MA</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            At Sheba Homecare, we serve our clients with respect, love, and dignity. We are committed to offering high-quality services and building strong, meaningful relationships with our clients—going above and beyond expectations. Inspired by the legacy of the Queen of Sheba, we bring wisdom, compassion, and cultural warmth to every home we serve.
                        </p>
                    </div>
                    {/* Mobile: modern service cards */}
                    <div className="d-lg-none m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                        <div className="row g-3">
                            {worldclasslistdata.map((data, i) => (
                                <div className="col-6" key={i}>
                                    <div className="d-flex align-items-center gap-2 gap-sm-3 p-2 p-sm-3 rounded-3 border bg-white shadow-sm h-100">
                                        <span
                                            className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light text-primary"
                                            style={{ width: 32, height: 32, flex: "0 0 32px" }}
                                        >
                                            <i className="feather icon-check" aria-hidden="true" />
                                        </span>
                                        <span className="fw-semibold text-secondary" style={{ fontSize: 14, lineHeight: 1.25 }}>
                                            {data.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: keep template list style */}
                    <ul className="d-none d-lg-block list-check text-secondary grid-2 fw-medium m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                        {worldclasslistdata.map((data, i) => (
                            <li key={i}>{data.title}</li>
                        ))}
                    </ul>
                    <div className="d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                        <Link href="/appointment" className="btn btn-lg btn-icon btn-secondary btn-shadow m-r30 mb-3 mb-sm-0">
                            Appointment
                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                        </Link>
                        <div className="info-widget style-5">
                            <div className="widget-media text-primary">
                                <i className="feather icon-phone-call dz-ring-effect" />
                            </div>
                            <div className="widget-content">
                                <h6 className="title">Contact us</h6>
                                <Link href="tel:+17812345678" className="text-secondary">+1 781 234 5678</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} export default WorldClass;