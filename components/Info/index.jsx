import styles from "./Info.module.css";
import infoImage from "../../public/images/list_image.svg";
import Image from "next/image";

const defaultInfo = {
  title: "How can I become a volunteer with Our Common Pot?",
  details: "To become a volunteer with Our Common Pot, you can visit our website and fill out the volunteer application form. Alternatively, you can contact us directly via email or phone to express your interest in volunteering. We'll provide you with more information on available opportunities and next steps in the volunteer onboarding process."
}

const Info = ({info}) => {

  if (!info) {
    info = defaultInfo;
  }

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoIcon} aria-hidden="true">
        <Image src={infoImage} alt="An icon illustrating the information"/>
      </div>

      <article className={styles.infoDetails}>
        <h3>{info.title}</h3>
        <p>{info.details}</p>
      </article>
    </div>
  );
}
 
export default Info;