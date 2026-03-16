"use client"
import { useState } from "react";
import { IMAGES } from "../constant/theme";
import Image from "next/image";

interface Testimonial {
    name: string;
    fullText: string;
    shortText: string;
}

const KATIE_TESTIMONIAL_FULL =
    "Azeb cared for my mom during the last three years of her battle with ALS, and I cannot recommend her highly enough. She handled every aspect of my mom's care with remarkable skill and compassion, from assisting with daily activities like bathing, washing and braiding hair, dressing, and feeding to managing complex needs such as mobility support (out and into bed, wheelchair, and bathroom) and respiratory care. Azeb was attentive to my mom's comfort and dignity, using her knowledge and patience to ease the challenges of ALS. Beyond her exceptional caregiving abilities, Azeb brought positivity and warmth into our home every day. Her genuine kindness and unwavering compassion provided emotional support not only to my mom but to our entire family. I am deeply grateful for her dedication and heart.";

const KATIE_SHORT =
    "Azeb cared for my mom during the last three years of her battle with ALS. Her genuine kindness and unwavering compassion provided emotional support to our entire family. I am deeply grateful for her dedication and heart.";

const LETTA_TESTIMONIAL_FULL = `Recently a friend of mine, Barbara Hooper, a resident of the Reminiscence floor at Sunrise of Lynnfield, was signed into the All Care Hospice program.

I visit Barbara every day for several hours and must tell you how thankful and pleased I am to see the care and comfort given to her by Azeb Legose.

To me, Azeb is the perfect role model for All Care Hospice. She adapts to any situation or problem. Her ability to know the needs of her patients enables her to earn their trust and love. She is devoted, kind, and hardworking.

All Care, thank you – you are to be commended for your good work.`;

const LETTA_SHORT =
    "I visit my friend Barbara every day and am deeply thankful for the care and comfort Azeb provides through All Care Hospice. Her devotion, kindness, and hard work earn the trust and love of her patients.";

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Katie Drinkwater",
        fullText: KATIE_TESTIMONIAL_FULL,
        shortText: KATIE_SHORT,
    },
    {
        name: "M. Letta Kallay",
        fullText: LETTA_TESTIMONIAL_FULL,
        shortText: LETTA_SHORT,
    },
];

const PREVIEW_LENGTH = 220;

function RealPatient() {
    const [expanded, setExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeTestimonial = TESTIMONIALS[activeIndex];
    const preview = activeTestimonial.fullText.slice(0, PREVIEW_LENGTH).trim() + "...";
    const displayText = expanded ? activeTestimonial.fullText : preview;

    function handleNext() {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        setExpanded(false);
    }

    function handlePrev() {
        setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
        setExpanded(false);
    }

    return (
        <>
            <div className="container">
                <div className="row content-wrapper style-2">
                    <div className="col-xl-6">
                        <div className="content-media">
                            <div className="dz-media">
                                <Image src={IMAGES.testimonialSection} alt="Family testimonial about home care" />
                            </div>
                            <div className="circle-wrapper" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                                <span className="circle1">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="circle2">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div className="item1" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)" style={{ display: 'none' }}>
                                <div className="info-widget style-1 move-3">
                                    <div className="avatar-group">
                                        <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar1} alt="Patient avatar" />
                                        <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar2} alt="Patient avatar" />
                                        <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar3} alt="Patient avatar" />
                                        <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar4} alt="Patient avatar" />
                                    </div>
                                    <div className="clearfix ms-2">
                                        <span className="number text-primary">150k</span>
                                        <span>Patient recovers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item2" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                                <div className="info-widget style-3 move-1">
                                    <div className="widget-head">
                                        <div className="widget-content">
                                            <h6 className="title">{activeTestimonial.name}</h6>
                                            <ul className="star-list">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>“{activeTestimonial.shortText}”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10 align-self-center m-b30">
                        <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                            <h2 className="title text-white m-b0">Here&apos;s What Our Customers Say About Us</h2>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                            <div className="testimonial-1 shadow-md">
                                <div className="testimonial-detail">
                                    <div className="d-flex align-items-center">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-light rounded-pill px-3 d-flex align-items-center justify-content-center"
                                            onClick={handlePrev}
                                            aria-label="Previous testimonial"
                                        >
                                            <i className="fa fa-chevron-left" />
                                        </button>
                                        <div className="testimonial-text flex-grow-1 mx-3">
                                            <p className="m-b0" style={{ whiteSpace: "pre-line" }}>“{displayText}”</p>
                                            <div className="d-flex align-items-center justify-content-between m-t20">
                                            <div>
                                                <h6 className="m-b0">{activeTestimonial.name}</h6>
                                            </div>
                                                <ul className="star-list m-b0">
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                </ul>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-primary rounded-pill m-t20 px-4"
                                                onClick={() => setExpanded((e) => !e)}
                                                aria-expanded={expanded}
                                            >
                                                {expanded ? "Read less" : "Read more"}
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-light rounded-pill px-3 d-flex align-items-center justify-content-center"
                                            onClick={handleNext}
                                            aria-label="Next testimonial"
                                        >
                                            <i className="fa fa-chevron-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RealPatient;