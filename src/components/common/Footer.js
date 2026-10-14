import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <p className="copy-text">©codeit - 2023</p>
        <ul className="footer-menu">
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
        <ul className="footer-social">
          <li>
            <Link href="/">
              <Image
                src="/images/icons/icon-facebook.png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/images/icons/icon-twitter.png"
                alt="Twitter"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/images/icons/icon-youtube.png"
                alt="YouTube"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/images/icons/icon-instagram.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
