import styles from "./Newsletter.module.css";
import { useState } from "react";

const Newsletter_Signup = () => {

  const [emailInput, setEmailInput] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className={styles.layout}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Want news and updates about our Organization?<br />
          Sign up for our newsletter.
        </h2>
        <p className={styles.details}>
          We have successfully conducted fund raising campaigns in the last 2 months
          and used the funds meticulously to provide meals for students at the University of Ibadan.
        </p>
        <form
          className={styles.mainForm}
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="email" name="newsletter-email" id="newsletter-email"
            placeholder="Enter your email" className={styles.emailInput} required
            value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
          />
          <button type="submit" className={styles.submitBtn}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter_Signup;