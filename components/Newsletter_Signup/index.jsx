import axios from "axios";
import styles from "./Newsletter.module.css";
import { useState } from "react";
import { sheetLink } from "@/utils/data";

const NewsletterSignup = () => {

  const [emailInput, setEmailInput] = useState("");
  const [emailSent, sendEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(sheetLink, {
        email: emailInput
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      setLoading(false);
      if (data) {
        sendEmail(true);
      }
      setTimeout(() => {
        sendEmail(false)
      }, 2000);
    } catch (error) {
      setLoading(false);
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false)
      }, 2000);
    }
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

        {loading && <p className={styles.validationText}>Adding to the mailing list...</p>}
        {emailSent && <p className={styles.validationText}>Your email has been added to the mailing list</p>}
        {emailError && <p className={styles.errorText}>Subscription was unsuccessful. Please try again later.</p>}
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

export default NewsletterSignup;