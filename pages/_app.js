import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" 
              content="Our Common Pot is a nonprofit organization focused on 
                       alleviating food insecurity among undergraduates in Nigerian universities.
                       Join us in making a difference."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:description" 
              content="Our Common Pot is a nonprofit organization focused on alleviating 
                      food insecurity among undergraduates in Nigerian universities. 
                      Join us in making a difference."
        />
        <meta property="og:image" content="https://www.ourcommonpot.org/banner_image.jpeg" />
        <meta property="og:type" content="website"></meta>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" 
              content="Our Common Pot is a nonprofit organization focused on alleviating 
                      food insecurity among undergraduates in Nigerian universities. 
                      Join us in making a difference."
        />
        <meta name="twitter:image" content="https://www.ourcommonpot.org/banner_image.jpeg" />
        <meta name="twitter:image:alt" content="An image of the Our Common Pot Logo" />
        <meta name="author" content="Sodiq 'Ade' Sanusi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
