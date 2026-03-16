import Link from "next/link"
import { IMAGES, SVGICONS } from "./theme"
import Image, { StaticImageData } from "next/image"

// layout 
// header 
export const headerinfo = [
    { image: IMAGES.svgicon1, title: 'Contact Us', paragraph: <Link href="tel:+17812345678" className="text-secondary">+1 781 234 5678</Link>, },
    { image: IMAGES.svgicon2, title: 'Email Support', paragraph: <Link href="mailto:info@shebahomecare.com" className="text-secondary">info@shebahomecare.com</Link>, },
    { image: IMAGES.svgicon3, title: 'Schedule A Meeting', paragraph: <Link href="/appointment" className="text-secondary">Book Now<i className="feather icon-arrow-right" /></Link>, },
    { image: IMAGES.svgicon4, title: '24/7 Support', paragraph: 'Available Anytime', },
]



export type HeaderContentItem = {
  title: string;
  to: string;
  image?: string | StaticImageData;
};

export type HeaderItem = {
  title: string;
  to?: string;
  classChange?: string;
  content?: HeaderContentItem[];
};


export const headerdata : HeaderItem[] = [
    {
        title: "Home",
        to: "/",
    },
    {
        title: "About Us",
        to: "/about-us",
    },
    {
        title: "Services",
        to: "/service-detail",
    },
    { title: "Contact Us", to: "/contact-us", },
]
// footer 
export const footerdata1 = [
    { delay: '0.4s', icon: <i className="feather icon-phone" />, title: 'Call Us', paragraph: <Link href="tel:+17812345678" className="text-body">+1 781 234 5678</Link>, },
    { delay: '0.6s', icon: <i className="feather icon-mail" />, title: 'Send us a Mail', paragraph: <Link href="mailto:info@shebahomecare.com" className="text-body">info@shebahomecare.com</Link>, },
    { delay: '0.8s', icon: <i className="feather icon-clock" />, title: 'Available', paragraph: "24/7 Home Care Services", },
]
export const footerdata2 = [
    {
        title: 'Our Services', span1: 'Personal Care', span2: 'Companionship', span3: 'Meal Preparation', span4: 'Medication Reminders', span5: 'Live-In Care',
        link1: '/appointment', link2: '/appointment', link3: '/appointment', link4: '/appointment', link5: '/appointment', delay: '0.4s',
    },
    {
        title: 'Useful Links', span1: 'Privacy Policy', span2: 'Terms & Conditions', span3: 'Contact Us', span4: 'About Us',
        link1: '#', link2: '#', link3: '/contact-us', link4: '/about-us', delay: '0.6s',
    },
    {
        title: 'Care Services', span1: 'Respite Care', span2: 'Alzheimer\'s/Dementia', span3: 'Housekeeping', span4: 'Mobility Assistance', span5: 'Bathing/Dressing',
        link1: '/appointment', link2: '/appointment', link3: '/appointment', link4: '/appointment', link5: '/appointment', delay: '0.8s',
    },
    {
        title: 'Quick Links', span1: 'About Us', span2: 'Appointment', span3: 'Contact Us', span4: 'Home',
        link1: '/about-us', link2: '/appointment', link3: '/contact-us', link4: '/', delay: '1.0s',
    },
]
// pages 
// testimonial 
export const testidata = [
    {treat:"Exceptional Home Care", delay: '0.2s', title: 'Sarah Johnson', position: 'Family Member', image: IMAGES.testimonial2 },
    {treat:"Compassionate Care", delay: '0.4s', title: 'Michael Chen', position: 'Client', image: IMAGES.testimonial3 },
    {treat:"Professional Service", delay: '0.6s', title: 'Patricia Williams', position: 'Family Member', image: IMAGES.testimonial4 },
    {treat:"Trusted Caregivers", delay: '0.8s', title: 'Robert Martinez', position: 'Client', image: IMAGES.testimonial5 },
]
export const testiswipeerdata2 = [
    { image: IMAGES.testimonialsmall1 , name:"Sarah Johnson"},
    { image: IMAGES.testimonialsmall2 , name:"Michael Chen"},
    { image: IMAGES.testimonialsmall3 , name:"Patricia Williams"},
]


export interface BlogItem {
  image: any;
  dealy: string;
  title: string;
}

// bloggrid 
export const blogdata : BlogItem[]= [
    { image: IMAGES.blogoverlaylarge1, dealy: '0.1s', title: 'The Art of Managing Business and Patient Care.', }, 
    { image: IMAGES.blogoverlaylarge2, dealy: '0.2s', title: 'Successful Transitional Rehab: More Than Just Exercise', },
    { image: IMAGES.blogoverlaylarge3, dealy: '0.3s', title: 'What is Respite Care and Why is it Important?', },
    { image: IMAGES.blogoverlaylarge4, dealy: '0.4s', title: 'The Art of Managing Business and Patient Care', },
    { image: IMAGES.blogoverlaylarge5, dealy: '0.5s', title: 'Three Years Post Injury: Persistence and Progress', },
    { image: IMAGES.blogoverlaylarge6, dealy: '0.6s', title: 'How Transitional Rehabilitation Aids in Stroke Recovery', },
]
export const blogdata2 = [
    { image: IMAGES.bloggrid1, dealy: '0.1s', title: 'The Art of Managing Business and Patient Care.', }, 
    { image: IMAGES.bloggrid2, dealy: '0.2s', title: 'Successful Transitional Rehab: More Than Just Exercise', },
    { image: IMAGES.bloggrid3, dealy: '0.3s', title: 'What is Respite Care and Why is it Important?', },
    { image: IMAGES.bloggrid4, dealy: '0.4s', title: 'The Art of Managing Business and Patient Care', },
    { image: IMAGES.bloggrid5, dealy: '0.5s', title: 'Three Years Post Injury: Persistence and Progress', },
    { image: IMAGES.bloggrid6, dealy: '0.6s', title: 'How Transitional Rehabilitation Aids in Stroke Recovery', },
]
// servicedetails (Sheba Home Care services - used on service-detail page sidebar + detail sections)
export const servicedetails = [
    { id: 'personal-care', columnstand: 'active', title: 'Personal Care', content: 'Our personal care services help with daily activities that maintain dignity and independence. We assist with bathing, grooming, oral care, and dressing, tailored to your comfort level. Our licensed caregivers are trained to support mobility and toileting needs with respect and discretion. We work with you and your family to create a routine that keeps you feeling clean, comfortable, and confident at home.' },
    { id: 'companionship', title: 'Companionship', content: 'Companionship care focuses on emotional and social well-being. Our caregivers provide conversation, accompany you on walks or outings, play games, read, or help with hobbies. We can join you for meals, assist with light errands, and offer a friendly, consistent presence. Reducing loneliness and keeping you engaged supports overall health and quality of life.' },
    { id: 'live-in-care', title: 'Live-In Care', content: 'Live-in care means a caregiver stays in your home around the clock. They assist with morning and evening routines, meals, medication, mobility, and safety through the night. This option is ideal when family cannot be there 24/7 but you prefer to stay in your own home. We match you with a caregiver who fits your routine and personality for continuity and trust.' },
    { id: 'medication-reminders', title: 'Medication Reminders', content: 'We help ensure medications are taken on time and as prescribed. Our caregivers provide reminders, help open containers, and can coordinate with your pharmacy or family. We do not administer medications but support adherence and can note any side effects or concerns to report to family or healthcare providers. This reduces missed doses and keeps you safer at home.' },
    { id: 'bathing-dressing', title: 'Bathing & Dressing', content: 'We assist with bathing, showering, and getting dressed in a way that respects your privacy and preferences. Our caregivers help with choosing clothes, fastening buttons and zippers, and putting on shoes or compression stockings. We adapt to your routine and any mobility or balance concerns to make daily grooming safe and comfortable.' },
    { id: 'alzheimers-dementia-care', title: 'Alzheimer\'s & Dementia Care', content: 'We provide specialized care for individuals with Alzheimer\'s and other forms of dementia. Our caregivers are trained in communication, routine-based care, and safety for memory-related conditions. We support activities of daily living, reduce agitation with calm and familiar routines, and offer respite for family caregivers. Our goal is to keep your loved one safe, engaged, and at home for as long as possible.' },
    { id: 'meal-preparation', title: 'Meal Preparation', content: 'Our caregivers help plan and prepare meals according to your diet, preferences, and any restrictions. We can grocery shop, cook, and set up meals, and we encourage eating together when it helps with appetite and socialization. We also assist with feeding when needed. Good nutrition supports strength, energy, and overall health at home.' },
    { id: 'respite-care', title: 'Respite Care', content: 'Respite care gives family caregivers a break while your loved one is in good hands. We provide short-term or scheduled care so you can rest, run errands, or tend to your own health. Our caregivers follow your care plan and keep you updated. Taking time to recharge helps you continue caring for your loved one over the long term.' },
]
// teamdetail
export const empolydata = [
    { id: 1, delay: '0.2s', image: IMAGES.team1, title: "Nashid Martines", position: "Personal Care" },
    { id: 2, delay: '0.4s', image: IMAGES.team2, title: "Emilio Duarte", position: "Companion Care" },
    { id: 3, delay: '0.6s', image: IMAGES.team3, title: "Rihana Roy", position: "Respite Care" },
    { id: 5, delay: '1.0s', image: IMAGES.team4, title: "Santiago Rivas", position: "Personal Care" },
    { id: 6, delay: '1.2s', image: IMAGES.team2, title: "Danial Frankie", position: "Companion Care" },
    { id: 4, delay: '0.8s', image: IMAGES.team4, title: "Esteban Serrano", position: "Memory Care" },
    { id: 7, delay: '1.4s', image: IMAGES.team3, title: "Roman Petrov", position: "Respite Care" },
    { id: 8, delay: '1.6s', image: IMAGES.team4, title: "Kenneth Fong", position: "Memory Care" },
]
// component 
// alllocation
export const locationdata = [
    { delay: '0.2s', title: 'Lynn, MA', },
];
// awards 
export const awardswiperdata = [
    { image: IMAGES.logo1 },
    { image: IMAGES.logo2 },
    { image: IMAGES.logo3 },
    { image: IMAGES.logo1 },
    { image: IMAGES.logo2 },
    { image: IMAGES.logo3 },
]
export const awarddata = [
    { delay: '0.5s', title: '2024', },
    { delay: '0.6s', title: '2023', },
    { delay: '0.7s', title: '2022', },
    { delay: '0.8s', title: '2021', },
    { delay: '0.9s', title: '2020', },
    { delay: '1.0s', title: '2019', },
    { delay: '1.1s', title: 'View All', },
]
// clientswiper1 
export const clientswiperdata1 = [
    { image: IMAGES.logomiddle1, delay: '0.1s', },
    { image: IMAGES.logomiddle2, delay: '0.2s', },
    { image: IMAGES.logomiddle3, delay: '0.3s', },
    { image: IMAGES.logomiddle4, delay: '0.4s', },
    { image: IMAGES.logomiddle1, delay: '0.5s', },
    { image: IMAGES.logomiddle2, delay: '0.6s', },
    { image: IMAGES.logomiddle3, delay: '0.7s', },
    { image: IMAGES.logomiddle4, delay: '0.8s', },
]
// clientswiper2 
export const clientswiperdata2 = [
    { image: IMAGES.logosmall1, delay: '0.1s', },
    { image: IMAGES.logosmall2, delay: '0.2s', },
    { image: IMAGES.logosmall3, delay: '0.3s', },
    { image: IMAGES.logosmall4, delay: '0.4s', },
    { image: IMAGES.logosmall5, delay: '0.5s', },
    { image: IMAGES.logosmall6, delay: '0.6s', },
    { image: IMAGES.logosmall1, delay: '0.7s', },
    { image: IMAGES.logosmall2, delay: '0.8s', },
    { image: IMAGES.logosmall3, delay: '0.9s', },
    { image: IMAGES.logosmall4, delay: '1.0s', },
    { image: IMAGES.logosmall5, delay: '1.1s', },
    { image: IMAGES.logosmall6, delay: '1.2s', },
]
// counter 
export const countupdata = [
    { title: 'Clients Supported', delay: '0.4s', countup: 100, span: '+', },
    { title: 'Families Served', delay: '0.6s', countup: 150,  span: '+', },
    { title: 'Years Experience', delay: '0.8s', countup: 10, span: '+', },
]
// frequently 
export const accordiondata = [
    { delay: '0.5s', key: "0", title: 'How much do you charge for pedicure ?' },
    { delay: '0.6s', key: "1", title: 'What types of treatments do you offer?' },
    { delay: '0.7s', key: "2", title: 'How do i book my appointment ?' },
    { delay: '0.8s', key: "3", title: 'Can i cancel my appointment ?' },
]

// Service detail page FAQ accordion (title + content for each section)
export const serviceDetailAccordionData = [
    { delay: '0.5s', key: '0', title: 'How do I get started with home care?', content: 'Contact us by phone or through our website to schedule a free consultation. We\'ll discuss your or your loved one\'s needs, daily routine, and preferences. From there we create a personalized care plan and match you with a licensed caregiver. We serve Lynn and the North Shore area and are available 24/7 to answer your questions.' },
    { delay: '0.6s', key: '1', title: 'What services do you provide?', content: 'We offer personal care (bathing, dressing, grooming), companionship, live-in care, medication reminders, meal preparation, respite care for family caregivers, and specialized support for Alzheimer\'s and dementia. Our caregivers can help with mobility, light housekeeping, and running errands so seniors can stay safe and comfortable at home.' },
    { delay: '0.7s', key: '2', title: 'Are your caregivers licensed and trained?', content: 'Yes. Our caregivers are licensed, background-checked, and trained in senior care best practices. We match each client with a caregiver whose skills and personality fit your needs. You can expect consistent, compassionate care from someone you and your family can trust.' },
    { delay: '0.8s', key: '3', title: 'Do you offer 24/7 or live-in care?', content: 'We do. For families who need around-the-clock support, we offer live-in care and 24/7 options. Our team can help with overnight care, morning and evening routines, and peace of mind so your loved one is never alone when they need assistance.' },
]
// howitwork 
export const howitworkdata = [
    { delay: '0.2s', icon: <i className="feather icon-clock" />, title: 'Book an Appointment', },
    { delay: '0.4s', icon: <i className="flaticon-list" />, title: 'Conduct Checkup', },
    { delay: '0.6s', icon: <i className="flaticon-stethoscope" />, title: 'Perform Treatment', },
    { delay: '0.8s', icon: <i className="flaticon-hand-holding-usd" />, title: 'Prescribe & Payment', },
]
// inspirational 
export const inspirationaldata = [
    { columnstand: 'm-r25', delay: '0.2s', title: 'Mission', svg: SVGICONS.mission },
    { columnstand: 'm-l25', delay: '0.4s', title: 'Vision', svg: SVGICONS.vision },
    { columnstand: 'm-r25', delay: '0.6s', title: 'Values', svg: SVGICONS.values },
]
// mapwraper
export const mapdata = [
    { id: 1, delay: '0.2s', icon: <i className="feather icon-map-pin" />, title: "Address", para: <p>41 Brimblecom St, Lynn, MA 01902</p>, },
    { id: 2, delay: '0.4s', icon: <i className="feather icon-phone" />, title: "Call Us", para: <p><Link href="tel:+17812345678">+1 781 234 5678</Link></p>, },
    { id: 3, delay: '0.6s', icon: <i className="feather icon-mail" />, title: "Send us a Mail", para: <p><Link href="mailto:info@shebahomecare.com">info@shebahomecare.com</Link></p>, },
    { id: 4, delay: '0.8s', icon: <i className="feather icon-clock" />, title: "Opening Time", para: <p>24/7 Available <br /> Anytime You Need Us</p>, },
]
// meetdr 
export const meetdrdata1 = [
    { title: 'Skilled Homecare (CNA)', },
    { title: 'Home Hospice (Palliative Care)', },
    { title: 'Relief & Respite Care', },
    { title: 'Care in Facilities', },
    { title: 'End-of-Life & Memory Care', },
    { title: 'ALS, Parkinson’s, Paraplegia & Quadriplegia Care', },
]
export const meetdrdata2 = [
    { image: IMAGES.logo1 },
    { image: IMAGES.logo2 },
]
// pricing 
export const pricingdata1 = [
    { title: 'Cardiovascular Services', },
    { title: 'Weight Management', },
    { title: 'Dental Services', },
    { title: 'Women\'s Health', },
    { title: 'Emergency Medicine', },
    { title: 'Family Medicine', },
    { title: '24/7 customer support', },
    { title: 'Video Call Support', },
]
export const pricingdata2 = [
    {
        delay: '0.4s', title: <h2 className="pricingtable-bx">Free<small>/ Lifetime</small></h2>,
        feature: <ul className="pricingtable-features">
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
        </ul>,
    },
    {
        delay: '0.6s', coloumnstand: 'active', title: <h2 className="pricingtable-bx">$25<small>/ Month</small></h2>,
        feature: <ul className="pricingtable-features">
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
        </ul>,
    },
    {
        delay: '0.8s', title: <h2 className="pricingtable-bx">$40<small>/ Month</small></h2>,
        feature: <ul className="pricingtable-features">
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
        </ul>,
    },
]
// raelpatient 
export const testiswipeerdata = [
    { image: IMAGES.testimonial1 , name:"Tariq Najeeb"},
    { image: IMAGES.testimonial2 , name:"Nasir Qadiri"},
    { image: IMAGES.testimonial3 , name:"Faisal Darwish"},
]
// servicebox
export const serviceboxdata = [    
    { id: 1, delay: '0.1s', title: 'Personal Care', svg1: SVGICONS.iconcell1, svg2: SVGICONS.iconbg1, },
    { id: 2, delay: '0.2s', title: 'Companionship', svg1: SVGICONS.iconcell2, svg2: SVGICONS.iconbg2, },
    // Live-In Care appears in the third card (replaces Meal Preparation) and uses the eye icon from Bathing/Dressing
    { id: 3, delay: '0.3s', title: 'Live-In Care', svg1: SVGICONS.iconcell5, svg2: SVGICONS.iconbg5, },
    // Medication Reminders uses the Respite Care medicine cap icon
    { id: 4, delay: '0.4s', title: 'Medication Reminders', svg1: SVGICONS.iconcell8, svg2: SVGICONS.iconbg8, },
    { id: 5, delay: '0.5s', title: 'Bathing/Dressing', svg1: SVGICONS.iconcell5, svg2: SVGICONS.iconbg5, },
    { id: 6, delay: '0.6s', title: 'Alzheimer\'s/Dementia Care', svg1: SVGICONS.iconcell6, svg2: SVGICONS.iconbg6, },
    // Meal Preparation moves down to the seventh position
    { id: 7, delay: '0.7s', title: 'Meal Preparation', svg1: SVGICONS.iconcell3, svg2: SVGICONS.iconbg3, },
    { id: 8, delay: '0.8s', title: 'Respite Care', svg1: SVGICONS.iconcell8, svg2: SVGICONS.iconbg8, },
]
// sidebar 
export const tagdata = [
    { title: 'Acupressure', num: '(10)', },
    { title: 'Allgemein', num: '(5)', },
    { title: 'Blood', num: '(17)', },
    { title: 'Food', num: '(13)', },
    { title: 'Health', num: '(06)', },
    { title: 'Mental Health', num: '(17)', },
    { title: 'Therapy', num: '(13)', },
    { title: 'Walking', num: '(06)', },
]
export const sidebarpostdata = [
    { date:"10 June 2025", image: IMAGES.blogsmall1, title:"The Art of Managing Business and Patient Care"},
    { date:"13 June 2025", image: IMAGES.blogsmall2, title:"The New Face of Care Blending Empathy with Expertise"},
    { date:"17 June 2025", image: IMAGES.blogsmall3, title:"Here Care Expertise Elevating the Patient Experience"},
]
// whychoose 
export const whychoosedata = [
    { delay: '0.4s', title: 'Compassionate Care', },
    { delay: '0.6s', title: 'Experienced Caregivers', },
    { delay: '0.8s', title: 'Personalized Service', },
    { delay: '1.0s', title: '24/7 Availability', },
]
// worldclass
export const worldclasslistdata = [
    { title: 'Laundry', },
    { title: 'Live-In Care', },
    { title: 'Meal Preparation', },
    { title: 'Medication Reminders', },
    { title: 'Mobility Assistance', },
    { title: 'Personal Care', },
    { title: 'Respite Care', },
    { title: 'Companionship', },
    { title: 'Housekeeping', },
    { title: 'Transfer Assistance', },
]

