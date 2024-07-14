import styles from "./CtaButton.module.css";

const CtaButton = () => {
  return (
    <button className={styles.topCtaButton}>
      Donate To Combat Hunger Among Students
      <span>
        Donate Now
      </span>
    </button>
  );
}

export default CtaButton;