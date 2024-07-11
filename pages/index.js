import Head from "next/head";
// import Image from "next/image";
import styles from "@/styles/Home.module.css";


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
        HomePage
      </main>
    </>
  );
}
