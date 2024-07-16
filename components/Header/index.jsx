import styles from "./Header.module.css";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuState] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuState(!mobileMenuOpen);
  }


  return (
    <header className={styles.container}>
      <div className={styles.imageLinkContainer}>
        <Link href="/">
          <Image src={logo} alt="The logo of Our Common Pot"/>
        </Link>
      </div>

      <button 
        className={styles.hamburgerButton}
        onClick={handleMobileMenuClick}
      >
        <FaBars size={24}/>
      </button>

      {mobileMenuOpen && <MobileMenu handleMobileMenuClick={handleMobileMenuClick}/>}
    </header>
  );
}

export default Header;