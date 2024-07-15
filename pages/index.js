import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import mobileHeroImage from "../public/images/mobile_home_hero_image.svg";
import transistorLogo from "../public/images/transistor_logo.svg";
import reformLogo from "../public/images/reform_logo.svg";
import tupleLogo from "../public/images/tuple_logo.svg";
import statamicLogo from "../public/images/statamic_logo.svg";
import savvycalLogo from "../public/images/savvycal_logo.svg";
import collaborationImage from "../public/images/mobile_home_collaborate_image.svg";
import hand3dImage from "../public/images/hands_up_3d.svg";
import vouchersImage from "../public/images/vouchers_3d.svg";
import mealCalcImage from "../public/images/food_calculation_3d.svg";
import shakeImage from "../public/images/handshake_3d.svg";
import infographicsImage from "../public/images/benefits_infographic_mobile.svg";
import testimonialVideoImage from "../public/images/testimonial_video.jpg";
import BlogCutout from "@/components/BlogCutout";
import TestimonialSmall from "@/components/TestimonialSmall";
import CtaButton from "@/components/CtaButton";
import { testimonials } from "@/utils/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Common Pot - Alleviating Food Insecurity Among Undergraduates</title>
        <link rel="canonical" href="https://www.ourcommonpot.org/"></link>
        <meta property="og:title"
          content="Our Common Pot - Alleviating Food Insecurity Among Nigerian Undergraduates"
        />
        <meta property="og:url" content="https://www.ourcommonpot.org/" />
        <meta name="twitter:title" content="Our Common Pot - Alleviating Food Insecurity Among Undergraduates" />
      </Head>
      <main className={styles.main}>
        <section className={styles.firstLayout}>
          <div className={styles.heroContainer}>
            <div className={styles.heroTop}>
              <div>
                <CtaButton />

                <div className={styles.heroWords}>
                  <h1>Welcome To <span>Our Common Pot</span></h1>
                  <p>
                    At Our Common Pot, we believe in a future where every student in higher
                    education institutions has reliable access to healthy meals, empowering
                    them to focus on their academic and personal growth.
                    Join us in our mission to combat hunger among University Students.
                  </p>
                  <div className={styles.heroButtons}>
                    <button className={styles.heroButton1}>Donate Now</button>
                    <button className={styles.heroButton2}>Get Involved</button>
                  </div>
                </div>
              </div>

              <div className={styles.mobileHeroImage}>
                <Image
                  src={mobileHeroImage} alt="A volunteer at the pantry"
                  priority
                />
              </div>
            </div>

            <div className={styles.sponsorContainer}>
              <div className={styles.sponsorLogo}>
                <Image src={transistorLogo} alt="Transistor. One of Our Common Pot's sponsors" />
              </div>
              <div className={styles.sponsorLogo}>
                <Image src={reformLogo} alt="Reform. One of Our Common Pot's sponsors" />
              </div>
              <div className={styles.sponsorLogo}>
                <Image src={tupleLogo} alt="Tuple. One of Our Common Pot's sponsors" />
              </div>
              <div className={styles.sponsorLogo}>
                <Image src={statamicLogo} alt="Statamic. One of Our Common Pot's sponsors" />
              </div>
              <div className={styles.sponsorLogo}>
                <Image src={savvycalLogo} alt="SavvyCal. One of Our Common Pot's sponsors" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.secondLayout}>
          <div className={styles.secondLayoutArticle}>
            <h2>Transforming Lives Through Education and Support</h2>
            <p>
              Our program provides free and accessible food to students, empowering
              them to focus on their education. By supporting students, we are creating
              a stronger and more vibrant community.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.secondLayoutBtn1}>Donate Now</button>
              <button className={styles.secondLayoutBtn2}>Volunteer</button>
            </div>
          </div>

          <div className={styles.collaborationImage}>
            <Image src={collaborationImage} alt="Undergraduates learning" />
          </div>
        </section>

        <section className={styles.thirdLayout}>
          <div className={styles.thirdLayoutArticle}>
            <h2>What We Do</h2>
            <p>
              A future where all students in higher education institutions have
              reliable access to healthy meals, empowering them to focus on their
              academic and personal growth without the burden of hunger and food insecurity.
            </p>
          </div>
          <div className={styles.infoLayout}>
            <div className={styles.infoContainer}>
              <div className={styles.infoImage}>
                <Image src={hand3dImage} alt="An illustration of hands helping out" />
              </div>
              <p>
                Accessible and on-campus food pantries
              </p>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoImage}>
                <Image src={vouchersImage} alt="Meal vouchers" />
              </div>
              <p>
                Discreet meal vouchers for students in need.
              </p>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoImage}>
                <Image src={mealCalcImage} alt="An illustration of calculations for meal" />
              </div>
              <p>
                Provision of stigma free food resources and advocacy for systemic change.
              </p>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoImage}>
                <Image src={shakeImage} alt="An illustration of an handshake" />
              </div>
              <p>
                Collaboration with local businesses, foodbanks and educational institutions.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.fourthLayout}>
          <article className={styles.bigScreenArticle}>
            Hidden article
          </article>
          <div className={styles.infographicImage}>
            <Image src={infographicsImage} alt="An infographic detailing the data for Our Common Pot"/>
          </div>
        </section>

        <section className={styles.fifthLayout}>
          <div className={styles.inviteContainer}>
            <h2>Help Sponsor Students With Us</h2>
            <p>
              We invite you to join our mission of providing free and easily
              accessible food to students who are facing food insecurity and hunger.
              Your support will make a meaningful impact on the lives of those in need.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.sponsorButton1}>Donate Now</button>
              <button className={styles.sponsorButton2}>Get Involved</button>
            </div>
          </div>
          <div className={styles.blurredFix}></div>
        </section>

        <section className={styles.sixthLayout}>
          <div className={styles.testimonialIntro}>
            <h2>Beneficiary Testimonials</h2>
            <p>Here is what our beneficiaries have to say</p>
          </div>
          <div className={styles.testimonialsContainer}>
            {testimonials.map(testimonial => (
              <TestimonialSmall testimonialDetails={testimonial} key={testimonial.author}/>
            ))}
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

        <section className={styles.lastLayout}>
          <h2>From The Blog</h2>
          <p>
            Explore the latest insights, stories, and updates from Our Common Pot on our blog.
            Stay informed about our initiatives, community impact, and ways you can get
            involved in combating food insecurity among students.
          </p>
          <div className={styles.blogCutoutContainer}>
            <BlogCutout />
          </div>
        </section>
      </main>
    </>
  );
}
