"use client"
import { useState } from "react";
import Link from "next/link";
import { empolydata } from "../constant/alldata";
import Image from "next/image";
import SocialLinks from "@/component/SocialLinks";

function EmpolyBlog() {
    const [active, setActive] = useState(1);
    return (
        <>
            <div className="row">
                {empolydata.slice(0, empolydata.length - 4).map((data, i) => (
                    <div className="col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                        <div className={`dz-team style-1 box-hover ${active === data.id ? 'active' : ''}`} onMouseEnter={() => setActive(data.id)}>
                            <div className="dz-media">
                                <Image src={data.image} alt={data.title} />
                                <Link href="/appointment" className="btn btn-primary">
                                    <i className="feather icon-calendar m-r5" /> Appointment Now
                                </Link>
                            </div>
                            <div className="dz-content">
                                <div className="clearfix">
                                    <h3 className="dz-name">{data.title}</h3>
                                    <span className="dz-position">{data.position}</span>
                                </div>
                            </div>
                            <SocialLinks ulClassName="dz-social" />
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}
export default EmpolyBlog;