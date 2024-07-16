import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo_contrast.svg";
import cancel_menu from "../../../public/images/cancel_mobilemenu.svg";
import parentStyles from "../Header.module.css";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({handleMobileMenuClick}) => {
  return (
    <main className={styles.layout}>
      <div className={parentStyles.container}>
        <div className={parentStyles.imageLinkContainer}>
          <Link href="/" onClick={handleMobileMenuClick}>
            <Image alt="Our Common Pot's Logo" src={logo}/>
          </Link>
        </div>

        <button 
          className={parentStyles.hamburgerButton}
          onClick={handleMobileMenuClick}
        >
          <Image src={cancel_menu} alt="Click to close the mobile menu"/>
        </button>
      </div>

      <ul className={styles.linkContainer}>
        <li className={styles.linkItem}>
          <Link href="/" onClick={handleMobileMenuClick}>Home</Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="/about" onClick={handleMobileMenuClick}>About Us</Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="/contact" onClick={handleMobileMenuClick}>Contact Us</Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="/donate" onClick={handleMobileMenuClick}>Donate</Link>
        </li>
      </ul>
    </main>
  );
}
 
export default MobileMenu;