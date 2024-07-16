import Head from "next/head";
import sharedStyles from "../styles/shared.module.css";
import styles from "../styles/Contact.module.css";
import CtaButton from "@/components/CtaButton";
import contactVolunteerImage from "../public/images/contact_volunteer.jpg";
import studentsLibraryImage from "../public/images/contact_students_in_library.png";
import infoIcon from "../public/images/list_image.svg";
import mealAssistantImage from "../public/images/contact_meal_distribution.png";
import pantryOrganizerImage from "../public/images/contact_pantry_organizer.png";
import educationOrganizerImage from "../public/images/contact_education_facilitator.png";
import fundraisingImage from "../public/images/contact_fundraising.png";
import Image from "next/image";
import { IoCall, IoLocationSharp, IoLogoWhatsapp, IoMailSharp } from "react-icons/io5";
import Info from "@/components/Info";
import { beneficiaryLink, volunteerInfos, volunteerLink } from "@/utils/data";
import { useRouter } from "next/router";

const Contact = () => {

  const router = useRouter();

  const clickToDonate = () => {
    router.push("/donate#donating");
  }
  const clickToGetInvolved = () => {
    router.push("/contact#volunteerApplication");
  }
  const clickToGetDirections = () => {
    router.push("https://maps.app.goo.gl/NsTT5mhd8FGnDtdq5");
  }
  const clickToApplyAsBeneficiary = () => {
    router.push(beneficiaryLink);
  }

  return (
    <>
      <Head>
        <title>Contact Us | Our Common Pot</title>
        <link rel="canonical" href="https://www.ourcommonpot.org/contact/"></link>
        <meta property="og:title" 
              content="Contact Us | Our Common Pot"
        />
        <meta property="og:url" content="https://www.ourcommonpot.org/contact/" />
        <meta name="twitter:title" content="Contact Us | Our Common Pot" />
      </Head>
      <main className={styles.contactLayout}>
        <section className={sharedStyles.heroLayout}>
          <div className={sharedStyles.heroContainer}>
            <CtaButton />

            <div className={sharedStyles.heroWords}>
              <h1>Get In Touch With Us</h1>
              <p>
                Get in touch with us to share your questions, feedback, or ideas.
                Our team is here to listen, support, and collaborate with you.
                Reach out today and let&apos;s work together towards a brighter future for all.
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
            <Image src={contactVolunteerImage} alt="An image of volunteers collaborating together in harmony"/>
          </div>
        </section>

        <section className={styles.secondLayout}>
          <div className={styles.contactIntro}>
            <h2>Get in touch</h2>
            <p>Have a Question or need assistance? We are here to help!</p>
          </div>

          <div className={styles.contactDetailsContainer}>
            <div className={styles.contactDetails}>
              <IoLocationSharp size={24}/>
              <p>Location</p>
              <p>Visit our office for in-person meetings and consultation</p>
              <a href="https://maps.app.goo.gl/NsTT5mhd8FGnDtdq5" target="_blank" rel="noopener">
                University of Ibadan, Oyo Road, Ibadan, Nigeria
              </a>
            </div>
            <div className={styles.contactDetails}>
              <IoCall size={24}/>
              <p>Call</p>
              <p>Call us and speak directly with our representatives</p>
              <a href="tel:+2348154689567">+234 815 468 9567</a>
            </div>
            <div className={styles.contactDetails}>
              <IoMailSharp size={24}/>
              <p>Email</p>
              <p>Send us an email and we will respond as soon as possible</p>
              <a href="mailto:info@ourcommonpot.org">info@ourcommonpot.org</a>
            </div>
            <div className={styles.contactDetails}>
              <IoLogoWhatsapp size={24}/>
              <p>Chat</p>
              <p>Chat with our team in real time for immediate response</p>
              <a href="https://wa.me/7088296120" target="_blank" rel="noopener">Start a chat</a>
            </div>
          </div>
        </section>

        <section className={styles.thirdLayout}>
          <div className={styles.hoursIntro}>
            <h2>Visit Our Office!</h2>
            <p>
              Come visit our office and see firsthand the heart behind Our Common Pot.
              Our doors are always open, and we&apos;d love to welcome you into our space.
            </p>
            <button
             className={styles.directionsButton}
             onClick={clickToGetDirections}
            >
              Get Directions
            </button>
          </div>

          <div className={styles.hoursDetails}>
            <p>Hours</p>

            <div className={styles.dailyHour}>
              <p>Monday &mdash; Friday</p>
              <p>9am &mdash; 5pm</p>
            </div>
            <div className={styles.dailyHour}>
              <p>Saturdays</p>
              <p>11am &mdash; 3pm</p>
            </div>
            <div className={styles.dailyHour}>
              <p>Sunday</p>
              <p>2pm &mdash; 5pm</p>
            </div>
          </div>
        </section>

        <section className={styles.fourthLayout} id="beneficiaryApplication">
          <h2>Apply to be a Beneficiary</h2>
          <p>
            Our application process is simple and confidential. We prioritize your
            well-being and respect your privacy every step of the way.
          </p>

          <div className={styles.eligibilityCheckContainer}>
            <div className={styles.eligibilityCheck}>
              <p>1</p>
              <div className={styles.eligibilityCheckDetails}>
                <p>Ensure that you meet the eligibility criteria for assistance from Our Common Pot.</p>
              </div>
            </div>
            <div className={styles.eligibilityCheck}>
              <p>2</p>
              <div className={styles.eligibilityCheckDetails}>
                <p>Collect the necessary documentation to support your application.</p>
              </div>
            </div>
            <div className={styles.eligibilityCheck}>
              <p>3</p>
              <div className={styles.eligibilityCheckDetails}>
                <p>Fill out the online application form provided on our website.</p>
              </div>
            </div>
            <div className={styles.eligibilityCheck}>
              <p>4</p>
              <div className={styles.eligibilityCheckDetails}>
                <p>Our team will review your application and documentation to determine eligibility for assistance.</p>
              </div>
            </div>
            <div className={styles.eligibilityCheck}>
              <p>5</p>
              <div className={styles.eligibilityCheckDetails}>
                <p>
                  If your application is approved, you will receive assistance
                  from Our Common Pot according to the program(s) for which you are eligible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.fifthLayout}>
          <div className={styles.libraryImage} aria-hidden="true">
            <Image src={studentsLibraryImage} alt="Students in a library"/>
          </div>

          <div className={styles.criteriaContainer}>
            <div className={styles.criteriaIntro}>
              <h2>Eligibility Criteria. What You Need to Know.</h2>
              <p>
                Our eligibility criteria are designed to ensure that we can effectively
                support our beneficiaries. By meeting these requirements, you can take
                advantage of our programs and services.
              </p>
              <button onClick={clickToApplyAsBeneficiary}>
                Apply Here
              </button>
            </div>

            <div className={styles.criteriaDetailsContainer}>
              <div className={styles.criteriaDetail}>
                <div className={styles.criteriaIcon} aria-hidden="true">
                  <Image src={infoIcon} alt="list icon"/>
                </div>
                <p>Applicants must be currently enrolled as students at a recognized tertiary institution.</p>
              </div>
              <div className={styles.criteriaDetail}>
                <div className={styles.criteriaIcon} aria-hidden="true">
                  <Image src={infoIcon} alt="list icon"/>
                </div>
                <p>
                  Applicants must demonstrate financial need, such as experiencing difficulty
                  affording food due to limited income or financial hardship.
                </p>
              </div>
              <div className={styles.criteriaDetail}>
                <div className={styles.criteriaIcon} aria-hidden="true">
                  <Image src={infoIcon} alt="list icon"/>
                </div>
                <p>
                  Applicants must be residents of the area served by Our Common Pot,
                  or must attend a tertiary institution located within the organization&apos;s service area.
                </p>
              </div>
              <div className={styles.criteriaDetail}>
                <div className={styles.criteriaIcon} aria-hidden="true">
                  <Image src={infoIcon} alt="list icon"/>
                </div>
                <p>
                  Applicants may be limited to one application per academic term or semester,
                  to ensure fair distribution of assistance resources.
                </p>
              </div>
              <div className={styles.criteriaDetail}>
                <div className={styles.criteriaIcon} aria-hidden="true">
                  <Image src={infoIcon} alt="list icon"/>
                </div>
                <p>
                  Applicants may be required to provide documentation to verify eligibility,
                  such as student ID or enrollment verification and proof of residency.
                </p>
              </div>
              <div className={styles.criteriaDetail}>
                <div className={styles.criteriaIcon} aria-hidden="true">
                  <Image src={infoIcon} alt="list icon"/>
                </div>
                <p>
                  Applicants must be in good academic standing with their tertiary institution,
                  as determined by the institution&apos;s policies and guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sixthLayout} id="volunteerApplication">
          <h2>Join Our Team Of Volunteers</h2>
          <p>
            Ready to make a difference in your community? Become a volunteer with Our
            Common Pot and help us support students facing food insecurity.
            Whether you&apos;re passionate about organizing events, assisting with meal
            distributions, or providing administrative support, there&apos;s a role for you on our team.
          </p>

          <div className={styles.volunteerPositionContainer}>
            <div className={styles.volunteerPosition}>
              <div className={styles.volunteerImage} aria-hidden="true">
                <Image src={mealAssistantImage} alt="A volunteer position"/>
              </div>
              <article className={styles.volunteerDetails}>
                <h3>Meal Distribution Assistant</h3>
                <p>
                  Help organize and distribute meals to students in need during meal
                  distribution events on campus or at community locations. Assist with
                  setup, coordination, and logistics to ensure smooth operations and
                  an efficient distribution process.
                </p>
                <a href={volunteerLink} target="_blank" rel="noopener">
                  Apply now
                </a>
              </article>
            </div>
            <div className={styles.volunteerPosition}>
              <div className={styles.volunteerImage} aria-hidden="true">
                <Image src={pantryOrganizerImage} alt="A volunteer position"/>
              </div>
              <article className={styles.volunteerDetails}>
                <h3>Pantry Organizer</h3>
                <p>
                  Volunteer to help organize and stock food pantries with essential food
                  items, such as grains, canned goods, and fresh produce. Assist in
                  inventory management, shelving, and ensuring that pantry shelves are
                  well-stocked and organized for easy access by students.
                </p>
                <a href={volunteerLink} target="_blank" rel="noopener">
                  Apply now
                </a>
              </article>
            </div>
            <div className={styles.volunteerPosition}>
              <div className={styles.volunteerImage} aria-hidden="true">
                <Image src={educationOrganizerImage} alt="A volunteer position"/>
              </div>
              <article className={styles.volunteerDetails}>
                <h3>Educational Workshop Facilitator</h3>
                <p>
                  Share your knowledge and skills by volunteering to facilitate
                  educational workshops on topics such as nutrition, cooking skills,
                  budgeting, and food sustainability. Lead engaging and informative
                  sessions that empower students with valuable information and resources.
                </p>
                <a href={volunteerLink} target="_blank" rel="noopener">
                  Apply now
                </a>
              </article>
            </div>
            <div className={styles.volunteerPosition}>
              <div className={styles.volunteerImage} aria-hidden="true">
                <Image src={fundraisingImage} alt="A volunteer position"/>
              </div>
              <article className={styles.volunteerDetails}>
                <h3>Fundraising and Event Planning Support</h3>
                <p>
                  Volunteer to assist with fundraising efforts and event planning
                  activities to support the mission of Our Common Pot. Help organize
                  fundraising events, campaigns, or initiatives to raise funds and awareness
                  for food assistance programs.
                </p>
                <a href={volunteerLink} target="_blank" rel="noopener">
                  Apply now
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.lastLayout}>
          <h2>Frequently Asked Questions About Volunteering</h2>

          <div className={styles.infoContainer}>
            {volunteerInfos.map(volunteerInfo => (
              <Info info={volunteerInfo} key={volunteerInfo.title}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
 
export default Contact;