"use client"
import { useState } from "react";
import Link from "next/link";
import { mapdata } from "../constant/alldata";

function Connect() {
    const [active, setactive] = useState(1)
    return (
        <>
            <div className="col-xl-7 pe-xl-4 m-b10">
                <div className="section-head style-1 m-b30">
                    <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Connect with Us for <br /> Your Home Care Needs</h2>
                    <p className="small wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Reach out to learn more about our home care services or to schedule a consultation. Fill out the form, and we'll promptly assist you and help you find the right care solution for your loved ones.</p>
                </div>
                <div className="row">
                    {mapdata.map((data, i) => (
                        <div className="col-md-6 m-b20 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                            <div className={`icon-bx-wraper style-8 box-hover ${active === data.id ? 'active' : ''}`} onMouseEnter={() => setactive(data.id)}>
                                <div className="icon-bx">
                                    <span className="icon-cell"> {data.icon} </span>
                                </div>
                                <div className="icon-content">
                                    <h4 className="dz-title">{data.title}</h4>
                                    {data.para}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Connect;