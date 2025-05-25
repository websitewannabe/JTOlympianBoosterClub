import HeroBanner from "@/components/HeroBanner";
import SponsorsSection from "@/components/SponsorsSection";
import SportsRegistrationSection from "@/components/SportsRegistrationSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Olympian Booster Club - Supporting Student Athletes Since 1985</title>
        <meta name="description" content="The Olympian Booster Club supports and enhances the athletic experience for all Olympian High School student-athletes through fundraising, volunteerism, and community engagement." />
      </Helmet>

      <HeroBanner />
      <SponsorsSection />
      <SportsRegistrationSection />
    </>
  );
};

export default Home;