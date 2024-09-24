import BlogSection from "~/components/Section/About/BlogSection";
import BrandSection from "~/components/Section/About/BrandSection";
import FactSection from "~/components/Section/About/FactSection";
import ProjectSection from "~/components/Section/About/ProjectSection";
import ServiceSection from "~/components/Section/About/ServiceSection";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import AboutSection from "~/components/Section/About/AboutSection";
import Header, { HeaderFour } from "~/components/Section/Common/Header";
import Team from "~/components/Section/Common/Team";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";

const AboutPage = () => {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <Header />
        <PageHeader title="About Us" />
        <AboutSection />

        <FooterThree />
      </div>
    </div>
  );
};

export default AboutPage;
