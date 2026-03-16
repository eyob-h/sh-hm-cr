import Link from "next/link";
import { locationdata } from "../constant/alldata";
// import GoogleMap from "./GoogleMap";

function Alllocation() {
    return (
        <>
            <section className="content-inner bg-light bg-opacity-50">
                <div className="container">
                    <div className="section-head style-3">
                        <h2 className="title m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">All Locations</h2>
                    </div>
                    <div className="row content-wrapper">
                        {locationdata.map((data, i) => (
                            <div className="col-xl-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                <div className="content-bx style-6 shadow-sm">
                                    <div className="dz-media">                                                                                                                   
                                        <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin"                         
                                            style={{ border: 0 , height: '100%', width: '100%'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                        />  
                                    </div>
                                    <div className="dz-info">
                                        <div className="clearfix">
                                            <h3 className="title m-b20">{data.title}</h3>
                                            <div className="m-b15">
                                                <h4 className="m-b5 font-16">Address:</h4>
                                                <p>41 Brimblecom St, Lynn, MA 01902</p>
                                            </div>
                                            <div className="m-b15">
                                                <h4 className="m-b5 font-16">Service Hours:</h4>
                                                <p>24/7 Available - Anytime You Need Us</p>
                                            </div>
                                        </div>
                                        <div className="dz-footer">
                                            <Link href="https://www.google.com/maps/" target="_blank" rel="noopener noreferrer" className="icon-link-hover-end" aria-label="Open Google Maps for directions">
                                                Get Directions <i className="feather icon-arrow-up-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Alllocation;