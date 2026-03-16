import Image from "next/image";
import { inspirationaldata } from "../constant/alldata";
import { IMAGES, SVGICONS } from "../constant/theme";

function Inspirational() {
    return (
        <>
            <section className="content-inner bg-light gradient-top-light">
                <div className="container">
                    <div className="row g-lg-5 align-items-center">
                        <div className="col-lg-7 m-b10">
                            <div className="section-head style-1 m-b30 max-w600">
                                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Our Mission &amp; Vision</h2>
                                <p className="small wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    At Sheba Homecare, we are dedicated to providing respectful, compassionate care in the comfort of home.
                                </p>
                            </div>
                            {inspirationaldata.map((item, i) => (
                                <div className={`icon-bx-wraper style-9 m-b20 ${item.columnstand} wow fadeInUp`} data-wow-delay={item.delay} data-wow-duration="0.8s" key={i}>
                                    <div className="icon-bx">                                        
                                        <svg viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            dangerouslySetInnerHTML={{__html : item.svg}} 
                                        >                                            
                                        </svg>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="dz-title">{item.title} </h3>
                                        <p>
                                            {item.title === 'Mission' &&
                                                "To provide respectful and compassionate care to our clients in the comfort of their homes, ensuring their well-being alongside their families."}
                                            {item.title === 'Vision' &&
                                                "To expand our services and reach more clients, delivering care wherever it is needed."}
                                            {item.title === 'Values' &&
                                                "We are guided by respect, love, dignity, and excellence. We treat every person like family and build meaningful relationships through trust, compassion, and professionalism."}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-5 m-b30" data-bottom-top="transform: translateY(100px)" data-top-bottom="transform: translateY(-100px)">
                            <div className="dz-media radius-md height-lg">
                                <Image src={IMAGES.vision} alt="Our commitment to care - vision and mission" className="object-fit-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Inspirational;