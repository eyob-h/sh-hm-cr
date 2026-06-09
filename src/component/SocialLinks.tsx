import Link from "next/link";
import { socialLinks } from "@/constant/site";

type SocialLinksProps = {
  ulClassName?: string;
  wrapperClassName?: string;
};

function SocialLinks({ ulClassName, wrapperClassName }: SocialLinksProps) {
  const list = (
    <ul className={ulClassName}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <i className={link.icon} />
          </Link>
        </li>
      ))}
    </ul>
  );

  if (wrapperClassName) {
    return <div className={wrapperClassName}>{list}</div>;
  }

  return list;
}

export default SocialLinks;
