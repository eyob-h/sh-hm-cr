import { StaticImageData } from "next/image";
import Link from "next/link";
import SocialLinks from "@/component/SocialLinks";

interface Props{
    title : string,
    bnrimage : string | StaticImageData,
    backgroundPosition?: string
}

function PageBanner({ title, bnrimage, backgroundPosition = "center center" } : Props) {
    return (
        <>
            <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md" style={{ backgroundImage: `url(${bnrimage})`, backgroundPosition, backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry d-table-cell">
                        <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{title}</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" style={{ color: '#fff' }}>
                            <ul className="breadcrumb mb-0" style={{ color: '#fff' }}>
                                <li className="breadcrumb-item" style={{ color: '#fff' }}><Link href="/" className="text-white" style={{ color: '#fff' }}>Home</Link></li>
                                <li className="breadcrumb-item text-white" style={{ color: '#fff' }}>{title}</li>
                            </ul>
                        </nav>
                        <div className="dz-btn">
                            <Link href="tel:+17812446847" className="btn btn-lg btn-icon btn-primary radius-xl btn-shadow mb-3 mb-sm-0">
                                <span className="left-icon"> <i className="feather icon-phone-call" /> </span> +1 781-244-6847
                            </Link>
                        </div>
                    </div>
                </div>
                <span className="text-vertical">24/7 EMERGENCY SERVICE</span>
                <SocialLinks ulClassName="dz-social" />
            </div>
        </>
    )
}
export default PageBanner;