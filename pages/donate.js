import Head from "next/head";
import CtaButton from "@/components/CtaButton";
import sharedStyles from "@/styles/shared.module.css";
import styles from "@/styles/Donate.module.css";
import donateVolunteersImage from "../public/images/donate_volunteers.jpg";
import readingStudentsImage from "../public/images/donate_students_reading.jpg";
import Image from "next/image";
import { IoChevronForward, IoCloseCircleOutline, IoCopyOutline } from "react-icons/io5";
import boxIcon from "../public/images/donate_list_image.svg";
import starIcon from "../public/images/star.svg";
import bankLogo from "../public/images/donate_bank.svg";
import flutterwaveLogo from "../public/images/donate_flutterwave.svg";
import donateMidImage from "../public/images/about_end.png";
import Info from "@/components/Info";
import testimonialVideoImage from "../public/images/testimonial_video.jpg";
import { donationsInfos, accountDetails } from "@/utils/data";
import { useRouter } from "next/router";
import { useState } from "react";

const Donate = () => {

  const [popupOut, setPopup] = useState(false);
  const router = useRouter();

  const openPopup = () => {
    setPopup(true);
  }
  const closePopup = () => {
    setPopup(false)
  }
  const copyToClipboard = (txt) => {
    navigator.clipboard.writeText(txt);
  }

  const clickToDonate = () => {
    router.push("/donate#donating");
  }
  const clickToGetInvolved = () => {
    router.push("/contact#volunteerApplication");
  }

  return (
    <>
      <Head>
        <title>Donations | Our Common Pot</title>
        <link rel="canonical" href="https://www.ourcommonpot.org/donate/"></link>
        <meta property="og:title" 
              content="Donations | Our Common Pot"
        />
        <meta property="og:url" content="https://www.ourcommonpot.org/donate/" />
        <meta name="twitter:title" content="Donations | Our Common Pot" />
      </Head>
      <main className={styles.donateLayout}>
        <section className={sharedStyles.heroLayout}>
          <div className={sharedStyles.heroContainer}>
            <CtaButton />

            <div className={sharedStyles.heroWords}>
              <h1><span>Donate</span> For A Cause</h1>
              <p>
                Make a difference by supporting our mission to combat food insecurity
                among students. Your contribution helps provide essential food assistance
                programs and support services. Donate now and help us nourish student
                success and well-being.
              </p>
              <div className={sharedStyles.heroButtons}>
                <button
                 className={sharedStyles.heroButton1}
                 onClick={clickToDonate}
                >
                  Donate Now
                </button>
                <button
                 className={sharedStyles.heroButton2}
                 onClick={clickToGetInvolved}
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>

          <div className={sharedStyles.heroImage} aria-hidden="true">
            <Image src={donateVolunteersImage} alt="An image of volunteers collaborating together in harmony" priority/>
          </div>
        </section>

        <section className={styles.secondLayout} id="donating">
          <div className={styles.donateIntro}>
            {popupOut && (
              <div className={styles.popoutContainer}>
                <button onClick={closePopup}>
                  <IoCloseCircleOutline size={35}/>
                </button>
                <h2>Donate to us via:</h2>
                <div className={styles.popoutAccount}>
                  <div className={styles.accountNumberContainer}>
                    <p>{accountDetails.accountNumber}</p>
                    <button onClick={copyToClipboard(accountDetails.accountNumber)}>
                      <IoCopyOutline size={30}/>
                    </button>
                  </div>
                  <p>{accountDetails.bankName}</p>
                  <p>{accountDetails.accountName}</p>
                </div>
                <p className={styles.popoutThanks}>
                  Thanks to your support, we&apos;re one step closer to ending hunger for Nigerian
                  university students. Thank you
                </p>
                <div className={styles.popoutInfo}>
                  <p>
                    Note - Enquiry or receipt for confirmation of payment can be sent
                    to <a href="mailto:info@ourcommonpot.org">info@ourcommonpot.org</a>
                  </p>
                </div>
              </div>
            )}
            <h2>Make a Difference with Your Donations</h2>
            <p>
              Your generous donations directly support our NGO&apos;s causes and have
              a significant impact on the lives of those in need.
            </p>

            <div className={styles.donateBanksContainer}>
              <div className={styles.donateBank}>
                <div className={styles.donateBankImage} aria-hidden="true">
                  <Image src={bankLogo} alt="The logo of our bank provider"/>
                </div>
                <p>
                  By donating to our organization, you are making a direct impact on the
                  lives of individuals in need.
                </p>
                <button onClick={openPopup}>
                  <p>Donate</p>
                  <IoChevronForward />
                </button>
              </div>
              <div className={styles.donateBank}>
                <div className={styles.donateBankImage} aria-hidden="true">
                  <Image src={flutterwaveLogo} alt="The logo of our payments provider"/>
                </div>
                <p>
                  Your contributions help us provide essential resources, and create
                  sustainable solutions for communities.
                </p>
                <button onClick={openPopup}>
                  <p>Donate</p>
                  <IoChevronForward />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.donateIntroImage} aria-hidden="true">
            <Image src={readingStudentsImage} alt="An image of undergraduate students reading"/>
          </div>
        </section>

        <section className={styles.thirdLayout}>
          <div className={styles.impactIntro}>
            <h2>Supporting Students Through Impactful Projects And Initiatives.</h2>
            <p>Discover how our NGO is making a difference in the lives of those in need.</p>
            <div className={styles.impactListsContainer}>
              <div className={styles.impactList}>
                <div className={styles.impactListIcon} aria-hidden="true">
                  <Image src={boxIcon} alt="An icon to illustrate the lists"/>
                </div>
                <p>Provided nutritious meals to thousands of students</p>
              </div>
              <div className={styles.impactList}>
                <div className={styles.impactListIcon} aria-hidden="true">
                  <Image src={boxIcon} alt="An icon to illustrate the lists"/>
                </div>
                <p>Successfully established collaborative partnerships with institutions</p>
              </div>
              <div className={styles.impactList}>
                <div className={styles.impactListIcon} aria-hidden="true">
                  <Image src={boxIcon} alt="An icon to illustrate the lists"/>
                </div>
                <p>Raised awareness and advocated for change</p>
              </div>
            </div>
          </div>

          <div className={styles.impactImage} aria-hidden="true">
            <Image src={donateMidImage} alt="An image of undergraduates sharing a laugh"/>
          </div>
        </section>

        <section className={styles.fourthLayout}>
          <div className={styles.founderIntro}>
            <div className={styles.starsContainer} aria-hidden="true">
              <div className={styles.starIcon}>
                <Image src={starIcon} alt="A star icon"/>
              </div>
              <div className={styles.starIcon}>
                <Image src={starIcon} alt="A star icon"/>
              </div>
              <div className={styles.starIcon}>
                <Image src={starIcon} alt="A star icon"/>
              </div>
              <div className={styles.starIcon}>
                <Image src={starIcon} alt="A star icon"/>
              </div>
              <div className={styles.starIcon}>
                <Image src={starIcon} alt="A star icon"/>
              </div>
            </div>

            <div className={styles.founderArticle}>
              <h3>
                The work done by this NGO has truly changed my life.
                I am forever grateful for their support and dedication.
              </h3>
              <div className={styles.founderTitle}>
                <p>Hope Philip</p>
                <p>Founder, Our Common Pot</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonialVideoContainer}>
            <a href="https://www.instagram.com/reel/C33n8s1oSAU/" target="_blank" rel="noopener">
              <Image 
                src={testimonialVideoImage} 
                alt="Click to watch a video of Our Common Pot's Founder
                     talking about the foundation and his own personal experiences"
              />
            </a>
          </div>
        </section>

        <section className={styles.fifthLayout}>
          <div className={styles.inviteContainer}>
            <h2>A Call For Volunteers</h2>
            <p>
              Join us in our mission to provide meals for students in the school <br />
              Apply to be a volunteer today!
            </p>
            <div className={sharedStyles.heroButtons}>
              <button
               className={styles.donateButton1}
               onClick={clickToDonate}
              >
                Donate Today
              </button>
              <button
               className={styles.donateButton2}
               onClick={clickToGetInvolved}
              >
                Volunteer
              </button>
            </div>
          </div>
          <div className={styles.blurredFix}></div>
        </section>

        <section className={styles.lastLayout} id="donationsfaq">
          <h2>Frequently Asked Questions About Donations</h2>
          <div className={styles.donationInfoContainer}>
            {donationsInfos.map(donationInfo => (
              <Info info={donationInfo} key={donationInfo.title}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
 
export default Donate;