import Image from "next/image";
import articleImage from "../../public/images/article_image_1.png";
import avatarImage from "../../public/images/avatar_3d.png";
import styles from "./BlogCutout.module.css";

const BlogCutout = () => {
  return (
    <a 
      href="https://africaphilanthropynetwork.org/food-insecurity-in-higher-education-institutions-and-the-role-of-philanthropy-in-enabling-quality-education/"
      target="_blank" rel="noopener"
      className={styles.container}
    >
      <div aria-hidden="true" className={styles.articleImage}>
        <Image src={articleImage} alt="The article display image"/>
      </div>

      <div className={styles.articleTitles}>
        <h2>
          Food Insecurity In Higher Education Institutions And
          The Role Of Philanthropy In Enabling Quality Education
        </h2>
        <p>
          Learn how we are solving this problem through our aid programs
        </p>
      </div>

      <div>
        <div className={styles.articleAuthor}>
          <div aria-hidden="true" className={styles.articleAuthorAvatar}>
            <Image src={avatarImage} alt="An avatar of the article's author"/>
          </div>
          <p>Hope Philip</p>
        </div>

        <div className={styles.articleInfo}>
          <span>Nov 9, 2023</span>
          <span>&#8226;</span>
          <span>2 mins read</span>
        </div>
      </div>
    </a>
  );
}
 
export default BlogCutout;