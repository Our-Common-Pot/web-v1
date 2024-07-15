import CtaButton from "@/components/CtaButton";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import sharedStyles from "@/styles/shared.module.css";
import { testimonials } from "./index";
import Image from "next/image";
import aboutMobileHeroImage from "../public/images/about_us_image.png";
import aboutUsImage1 from "../public/images/about_us_main.png";
import aboutUsImage2 from "../public/images/about_us_2.png";
import giveFoodImage from "../public/images/give_food.png";
import studentsLaughing from "../public/images/about_end.png";
import hopeHeadshot from "../public/images/hope_philip.png";
import jerryHeadshot from "../public/images/jeremiah_philip.jpg";
import adeHeadshot from "../public/images/sodiq_sanusi.png";
import TeamMember from "@/components/TeamMember";
import TestimonialSmall from "@/components/TestimonialSmall";
import { IoCheckboxOutline, IoEarthOutline, IoRocketOutline } from "react-icons/io5";

const teamMates = [
  {
    headshot: hopeHeadshot,
    name: "Hope Philip",
    role: "Founder",
    location: "Ibadan, Nigeria"
  },
  {
    headshot: jerryHeadshot,
    name: "Jeremiah Philip",
    role: "Secretary",
    location: "Lagos, Nigeria"
  },
  {
    headshot: adeHeadshot,
    name: 'Sodiq "Ade" Sanusi',
    role: "Technical Partner",
    location: "Lagos, Nigeria"
  }
]

const About = () => {
  return (
    <>
      <Head>
        <title>Learn More About What We Do | Our Common Pot</title>
        <link rel="canonical" href="https://www.ourcommonpot.org/about/"></link>
        <meta property="og:title"
          content="Learn More About What We Do | Our Common Pot"
        />
        <meta property="og:url" content="https://www.ourcommonpot.org/about/" />
        <meta name="twitter:title" content="Learn More About What We Do | Our Common Pot" />
      </Head>
      <main className={styles.aboutLayout}>
        <section className={sharedStyles.heroLayout}>
          <div className={sharedStyles.heroContainer}>
            <CtaButton />

            <div className={sharedStyles.heroWords}>
              <h1>Learn About <span>Our Common Pot</span></h1>
              <p>
                Discover our story, mission, and commitment to addressing food insecurity
                among students. Learn how we&apos;re making a difference in the lives of
                students and building a supportive community. Join us in our journey to
                create a future where every student has access to nutritious meals and support services.
              </p>
              <div className={sharedStyles.heroButtons}>
                <button className={sharedStyles.heroButton1}>Donate Now</button>
                <button className={sharedStyles.heroButton2}>Get Involved</button>
              </div>
            </div>
          </div>

          <div className={sharedStyles.heroImage} aria-hidden="true">
            <Image src={aboutMobileHeroImage} alt="An image of volunteers collaborating together in harmony"/>
          </div>
        </section>

        <section className={styles.secondLayout}>
          <div className={styles.common}>
            <article className={styles.commonStatement}>
              <h2>Our Mission</h2>
              <p>
                We aim to combat hunger and food insecurity among university students
                through semester long feeding for selected students, digital access to
                resources without stigmatization, emergency food assistance and resources
                to help students make healthy meal choices on a budget.
              </p>
            </article>

            <div className={styles.commonImage} aria-hidden="true">
              <Image src={aboutUsImage1} alt="A group of university undergraduates in a picture"/>
            </div>
          </div>

          <div className={styles.common}>
            <article className={styles.commonStatement}>
              <h2>Our Vision</h2>
              <p>
                A world where every university student in Nigeria thrives,
                free from the burden of food insecurity.
              </p>
            </article>

            <div className={styles.commonImage} aria-hidden="true">
              <Image src={aboutUsImage2} alt="A group of university undergraduates in a picture"/>
            </div>
          </div>
        </section>

        <section className={styles.thirdLayout}>
          <div className={styles.teamIntro}>
            <h2>Meet our team</h2>
            <p>
              We&apos;re a dynamic group of individuals who are passionate about what we do.
            </p>
          </div>

          <div className={styles.teamMembers}>
            {teamMates.map(teamMember => (
                <TeamMember teamMember={teamMember} key={teamMember.name}/>
              ))}
          </div>
        </section>

        <section className={styles.fourthLayout}>
          <div className={styles.metricIntro}>
            <h2>Making a Difference in Higher Institutions</h2>
            <p>
              Our NGO has achieved significant milestones in improving the lives
              of individuals and communities. Through our dedicated efforts, we have
              positively impacted the lives of thousands of people, providing them with
              access to education, healthcare, and basic necessities. We are proud of
              the progress we have made and remain committed to creating a better future for all.
            </p>
            <button>Donate Now</button>
          </div>

          <div className={styles.metricsContainer}>
            <div className={styles.metric}>
              <span></span>
              <div className={styles.metricDetails}>
                <p>5000+</p>
                <p>Students benefited</p>
              </div>
            </div>
            <div className={styles.metric}>
              <span></span>
              <div className={styles.metricDetails}>
                <p>319+</p>
                <p>Volunteers</p>
              </div>
            </div>
            <div className={styles.metric}>
              <span></span>
              <div className={styles.metricDetails}>
                <p>75+</p>
                <p>Campus Partners</p>
              </div>
            </div>
            <div className={styles.metric}>
              <span></span>
              <div className={styles.metricDetails}>
                <p>8000+</p>
                <p>Meals Served</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.fifthLayout}>
          <div className={styles.testimonialIntro}>
            <h2>Beneficiary Testimonials</h2>
            <p>Here is what our beneficiaries have to say</p>
          </div>
          <div className={styles.testimonialsContainer}>
            {testimonials.map(testimonial => (
              <TestimonialSmall testimonialDetails={testimonial} key={testimonial.author} />
            ))}
          </div>
        </section>

        <section className={styles.sixthLayout}>
          <div className={styles.partnerIntro}>
            <h2>Why Partner With Us?</h2>
            <p>
              Partnerships with tertiary institutions are crucial in combating food
              insecurity among students. These collaborations not only address immediate
              needs but also foster a supportive environment that promotes student
              well-being and academic success. Together, we can create a campus community
              where every student has the opportunity to thrive.
            </p>
          </div>

          <div className={styles.partnerImage} aria-hidden="true">
            <Image src={giveFoodImage} alt="An image of a volunteer handing food out"/>
          </div>
        </section>

        <section className={styles.seventhLayout}>
          <div className={styles.goalDetails}>
            <IoRocketOutline size={30}/>
            <h2>Expanded Reach and Impact</h2>
            <p>
              This expanded reach enables campuses to make a meaningful difference in
              the lives of their students and contribute to the broader community&apos;s well-being.
            </p>
          </div>
          <div className={styles.goalDetails}>
            <IoCheckboxOutline size={30}/>
            <h2>Enhanced Student Support Services</h2>
            <p>
              By working together, tertiary institutions can offer a comprehensive
              meal distributions, pantry services, educational workshops, to address
              the diverse needs of students.
            </p>
          </div>
          <div className={styles.goalDetails}>
            <IoEarthOutline size={30}/>
            <h2>Resource Sharing and Efficiency</h2>
            <p>
              Collaboration with the NGO enables tertiary institutions to share resources,
              expertise, and best practices in addressing food insecurity.
            </p>
          </div>
        </section>

        <section className={styles.eightLayout}>
          <div className={styles.inviteContainer}>
            <h2>Get Involved Today By Joining Our List Of Campus Partners</h2>
            <p>Join Us Today In Combating Hunger And Food Insecurity Among University Students.</p>
            <div className={sharedStyles.heroButtons}>
              <button className={styles.getInvolvedButton}>Get Involved</button>
            </div>
          </div>
          <div className={styles.blurredFix}></div>
        </section>

        <section className={styles.lastLayout}>
          <article className={styles.focusIntro}>
            <h2>Transforming Lives Through Education and Support</h2>
            <p>
              Our program provides free and accessible food to students, empowering
              them to focus on their education. By supporting students, we are
              creating a stronger and more vibrant community.
            </p>
            <div className={sharedStyles.heroButtons}>
              <button className={sharedStyles.heroButton1}>Donate Now</button>
              <button className={styles.focusButton2}>Volunteer</button>
            </div>
          </article>

          <div className={styles.focusImage} aria-hidden="true">
            <Image src={studentsLaughing} alt="A group of undergraduates laughing"/>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;