"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const CERTIFICATIONS = [
  {
    title: "PHCAST Enhanced Personal Caregiver (Massachusetts Council)",
    description:
      "State-supported Personal and Home Care Aide State Training (PHCAST) program that prepares caregivers with core skills for in‑home personal care, safety, communication, and supporting daily living needs.",
  },
  {
    title: "CPR/AED & Emergency First Aid Certification",
    description:
      "Nationally recognized training in life‑saving response, including CPR, use of an AED, and emergency first aid for choking, injuries, medical events, and other urgent situations in the home.",
  },
  {
    title: "Nurse Aid Training – Spectrum Healthcare",
    description:
      "Formal nurse aide (CNA) preparation through Spectrum Healthcare, covering vital signs, personal care, infection control, and hands‑on skills needed to support clients safely in clinical and home settings.",
  },
  {
    title: "Home Health Aid Training – Spectrum Healthcare",
    description:
      "Specialized training focused on assisting clients at home with daily activities, monitoring changes in condition, and working as part of the healthcare team to deliver consistent, reliable home support.",
  },
  {
    title: "High School Diploma – Operation Bootstrap",
    description:
      "Adult education program in Lynn, MA (now Pathways Adult Education & Training) that provides a high school equivalency foundation in reading, writing, math, and career readiness for community members.",
  },
];

function Awards() {
  return (
    <>
      <section className="content-inner-1 bg-light overflow-hidden">
        <div className="container-left">
          <div className="row g-0 align-items-center">
            <div className="col-xxl-3">
              <div className="section-head style-1 m-b20">
                <h2
                  className="title wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  Certifications
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="0.8s"
                >
                  Training and certifications that support safe, high‑quality
                  homecare for every client we serve.
                </p>
              </div>
            </div>
            <div className="col-xxl-9">
              <Swiper
                className="swiper awards-swiper wow fadeInUp"
                data-wow-delay="0.4s"
                data-wow-duration="0.8s"
                loop
                slidesPerView={4.5}
                autoplay={{
                  delay: 3000,
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 4.5,
                  },
                  991: {
                    slidesPerView: 4,
                  },
                  767: {
                    slidesPerView: 3,
                  },
                  575: {
                    slidesPerView: 2.5,
                  },
                  320: {
                    slidesPerView: 1.5,
                  },
                }}
                modules={[Autoplay]}
              >
                {CERTIFICATIONS.map((certification) => (
                  <SwiperSlide key={certification.title}>
                    <div className="dz-img-box style-1 box-lg grid-bx text-center">
                      <div className="dz-content">
                        <h3 className="title">{certification.title}</h3>
                        <p className="m-b0 text-secondary small">
                          {certification.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Awards;

