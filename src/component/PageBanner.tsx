import { StaticImageData } from "next/image";
import Link from "next/link";

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
                            <Link href="tel:+11234567890" className="btn btn-lg btn-icon btn-primary radius-xl btn-shadow mb-3 mb-sm-0">
                                <span className="left-icon"> <i className="feather icon-phone-call" /> </span> +1 123 456 7890
                            </Link>
                        </div>
                    </div>
                </div>
                <span className="text-vertical">24/7 EMERGENCY SERVICE</span>
                <ul className="dz-social">
                    <li><Link href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></Link></li>
                    <li><Link href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></Link></li>
                    <li><Link href="#" aria-label="X"><i className="fa-brands fa-x-twitter" /></Link></li>
                    <li><Link href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></Link></li>
                </ul>
            </div>
        </>
    )
}
export default PageBanner;