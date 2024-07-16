import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsletterSignup from "@/components/Newsletter_Signup";

const GeneralLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <NewsletterSignup />
      <Footer />
    </>
  );
}
 
export default GeneralLayout;