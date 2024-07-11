import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newsletter_Signup from "@/components/Newsletter_Signup";

const GeneralLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Newsletter_Signup />
      <Footer />
    </>
  );
}
 
export default GeneralLayout;