import styles from "./Header.module.css";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import logo from "../../public/images/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.imageLinkContainer}>
        <Link href="/">
          <Image src={logo} alt="The logo of Our Common Pot"/>
        </Link>
      </div>

      <button className={styles.hamburgerButton}>
        <FaBars size={24}/>
      </button>
    </header>
  );
}

export default Header;