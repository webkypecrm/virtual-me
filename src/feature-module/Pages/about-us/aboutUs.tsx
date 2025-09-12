import Breadcrumb from "../../../core/common/Breadcrumb/breadcrumb";
import AboutSection from "./section/aboutSection";
import Benefits from "./section/benefits";
import Institution from "./section/institution";
import Counter from "./section/counter";
import Testimonials from "./section/testimonials";
import Faq from "./section/faq";
import Footer from "../../HomePages/home-four/footer";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb title="About Us" />
      <AboutSection />
      <Benefits />
      <Institution />
      <Counter />
      <Testimonials />
      <Faq />
      {/* <Footer /> */}
    </>
  );
};

export default AboutUs;
