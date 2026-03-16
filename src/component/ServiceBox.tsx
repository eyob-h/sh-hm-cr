"use client"
import { useState } from "react";
import Link from "next/link";
import { serviceboxdata } from "../constant/alldata";

function ServiceBox() {
    const [active, setActive] = useState(1);
    return (
        <>
            <div className="row">
                {serviceboxdata.slice(0, 4).map((data, i) => (
                    <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                        <div className={`icon-bx-wraper style-3 box-hover ${active === data.id ? 'active' : ''}`} onMouseEnter={() => setActive(data.id)}>
                            <div className="icon-bx-head">
                                <div className="icon-bx"> 
                                    <span className="icon-cell" dangerouslySetInnerHTML={{__html : data.svg1}}>  
                                    </span> 
                                </div>
                                <span className="icon-bg" 
                                    dangerouslySetInnerHTML={{__html : data.svg2}}> 
                                </span>
                                <div className="icon-content">
                                    <h3 className="dz-title">{data.title}</h3>
                                    <p>Professional, compassionate care services designed to help seniors maintain independence and quality of life in the comfort of their own home.</p>
                                </div>
                            </div>
                            <div className="icon-bx-footer">
                                <span className="text-badge"><i className="fa fa-circle text-primary" /> Licensed Caregivers</span>
                                <Link href="/service-detail" className="btn btn-square btn-primary rounded-circle">
                                    <i className="feather icon-arrow-up-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center m-t10">
                <Link
                    href="/service-detail"
                    className="btn btn-lg btn-icon btn-primary m-t10"
                >
                    View All Services
                    <span className="right-icon">
                        <i className="feather icon-arrow-right" />
                    </span>
                </Link>
            </div>
        </>
    )
} 
export default ServiceBox;