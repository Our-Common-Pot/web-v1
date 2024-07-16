import { useRouter } from "next/router";
import styles from "./CtaButton.module.css";

const CtaButton = () => {

  const router = useRouter();
  const clickToDonate = () => {
    router.push("/donate#donating");
  }

  return (
    <button
     className={styles.topCtaButton}
     onClick={clickToDonate}
    >
      Donate To Combat Hunger Among Students
    </button>
  );
}

export default CtaButton;