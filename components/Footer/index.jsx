import Image from "next/image";
import logo from "../../public/images/logo.svg";
import styles from "./Footer.module.css";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const presentYear = new Date().getFullYear();

const Footer = () => {

  return (
    <footer className={styles.layout}>
      <div className={styles.mainFooter}>
        <div className={styles.mainFooterStart}>
          <div className={styles.footerLogo}>
            <Image src={logo} alt="Our Common Pot's Logo" />
          </div>
          <p className={styles.footerIntro}>
            A future where all students in higher education institutions
            have reliable access to healthy meals.
          </p>
          <ul className={styles.footerImageLinkList}>
            <li>
              <a href="https://www.instagram.com/ourcommonpot/"
                target="_blank" rel="noopener"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram size={20}/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/OurCommonPot/"
                target="_blank" rel="noopener"
                aria-label="Visit our Twitter page"
              >
                <FaXTwitter size={20}/>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/people/Our-Common-Pot/100084765077542/"
                target="_blank" rel="noopener"
                aria-label="Visit our Facebook page"
              >
                <FiFacebook size={20}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/our-common-pot/"
                target="_blank" rel="noopener"
                aria-label="Visit our LinkedIn page"
              >
                <FiLinkedin size={20}/>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.mainFooterMid}>
          <ul className={styles.footerLinkList}>
            <li>
              <Link href="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/donate">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/contact#beneficiaryApplication">
                Become a Beneficiary
              </Link>
            </li>
          </ul>
          <ul className={styles.footerLinkList}>
            <li>
              <Link href="/donate#donationsfaq">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact#volunteerApplication">
                Volunteer
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.mainFooterEnd}>
          <p>University of Ibadan, Oyo Road, Ibadan, Nigeria</p>
          <a href="mailto:info@ourcommonpot.org">info@ourcommonpot.org</a>
          <a href="tel:+2348154689567">+234 815 468 9567</a>
        </div>
      </div>

      <div className={styles.footerNotes}>
        <span className={styles.footerNotesDivider}></span>

        <p className={styles.footerNotesCopyright}>
          &#169; {presentYear} Our Common Pot, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;