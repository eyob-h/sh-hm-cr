"use client"
import Image from "next/image";
import { countupdata } from "../constant/alldata";
import { IMAGES } from "../constant/theme";
import CountUp from "react-countup"

function Counter() {
    return (
        <>
            <section className="content-inner-3 bg-secondary">
                <div className="container">
                    <div className="row align-items-sm-center">
                        <div className="col-lg-3 col-12 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="text-white font-20 m-b5 fw-medium">Compassionate home care, close to home</h2>
                            <p className="text-white opacity-75 m-b0">
                                Licensed caregivers supporting seniors in Lynn and the North Shore.
                            </p>
                        </div>
                        {countupdata.map((data, i) => (
                            <div className="col-lg-3 col-4 m-b30 d-flex wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                <div className="content-bx style-1 mx-auto">
                                    <span className="content-text text-white">
                                        <CountUp end={data.countup} duration={5} />                                        
                                        {data.span}
                                    </span>
                                    <h3 className="title text-white m-b0">{data.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Counter;