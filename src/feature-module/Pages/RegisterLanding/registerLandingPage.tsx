// import AboutSection from "../about-us/section/aboutSection";
import Aboutsection from "../../HomePages/home-four/section/aboutsection";
import RegisterBanner from "./registerBanner";
import RegisterFeatureIntstruction from "./RegisterFeatureIntstruction";
import RegisterHeader from "./RegisterHeader";

const RegisterLandingPage = () => {
  return (
    <>
      {/* <Breadcrumb title="Professionals" /> */}
      <RegisterHeader />
      <RegisterBanner />
      {/* <Aboutsection /> */}
      <RegisterFeatureIntstruction />
    </>
  );
};

export default RegisterLandingPage;
