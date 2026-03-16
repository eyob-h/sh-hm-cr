"use client"
import { empolydata } from "@/constant/alldata";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SurgeryBlog = () =>{
    const [active, setActive] = useState(1);
    return(
        <div className="row">
            {empolydata.slice(0, empolydata.length - 5).map((item, i) => (
                <div className="col-xxl-4 col-sm-6" key={i}>
                    <div className={`dz-team style-1 box-hover ${active === item.id ? 'active' : ''}`} onMouseEnter={() => setActive(item.id)}>
                        <div className="dz-media">
                            <Image src={item.image} alt={item.title} />
                            <Link href="/appointment" className="btn btn-primary">
                                <i className="feather icon-calendar m-r5" /> Appointment Now
                            </Link>
                        </div>
                        <div className="dz-content">
                            <div className="clearfix">
                                <h3 className="dz-name"><Link href="/team-detail">{item.title}</Link></h3>
                                <span className="dz-position">{item.position}</span>
                            </div>
                            <Link href="/team-detail" className="btn btn-square btn-secondary">
                                <i className="feather icon-arrow-right" />
                            </Link>
                        </div>
                        <ul className="dz-social">
                            <li><Link href="#" aria-label="LinkedIn"> <i className="fa-brands fa-linkedin" /></Link></li>
                            <li><Link href="#" aria-label="Instagram"> <i className="fa-brands fa-instagram" /></Link></li>
                            <li><Link href="#" aria-label="Facebook"> <i className="fa-brands fa-facebook-f" /></Link></li>
                            <li><Link href="#" aria-label="X"> <i className="fa-brands fa-x-twitter" /></Link></li>
                            <li><Link href="#" aria-label="YouTube"> <i className="fa-brands fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default SurgeryBlog;