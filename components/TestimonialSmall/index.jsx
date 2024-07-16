import Image from "next/image";
import avatarImage from "../../public/images/avatar_3d.svg";
import styles from "./TestimonialSmall.module.css";

const defaultTestimonialDetails = {
  text: "Forget Agege bread for breakfast! Our Common Pot gave me proper breakfast for a whole week. \
         Now I can analyze these novels with a full stomach and a clear head. Big ups to them!",
  author: "Emeka",
  authorDetails: "Literature, Univerity of Ibadan",
}

const TestimonialSmall = ({testimonialDetails}) => {
  return (
    <div className={styles.container}>
      <p className={styles.testimonialText}>
        {testimonialDetails ? testimonialDetails.text : defaultTestimonialDetails.text}
      </p>
      <div className={styles.testimonialAuthor}>
        <div className={styles.testimonialAvatar}>
          <Image src={avatarImage} alt="An illustration of the article author avatar"/>
        </div>
        <div className={styles.testimonialAuthorDetails}>
          <p>{testimonialDetails ? testimonialDetails.author : defaultTestimonialDetails.author}</p>
          <p>{testimonialDetails ? testimonialDetails.authorDetails : defaultTestimonialDetails.authorDetails}</p>
        </div>
      </div>
    </div>
  );
}
 
export default TestimonialSmall;