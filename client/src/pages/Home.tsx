import HeroBanner from "@/components/HeroBanner";
import SponsorsSection from "@/components/SponsorsSection";
import SportsRegistrationSection from "@/components/SportsRegistrationSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://olympianboosterclub.com/" />
        <title>
          Olympian Booster Club | Youth Sports & Community in Jim Thorpe, PA
        </title>
        <meta
          name="description"
          content="The Olympian Booster Club supports youth athletics in Jim Thorpe, PA, offering programs in football, cheerleading, wrestling, volleyball, and cross country for grades K–6."
        />
        <meta
          name="keywords"
          content="youth sports, Jim Thorpe PA, football, cheerleading, wrestling, volleyball, cross country, booster club, community sports, youth athletics"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            name: "Olympian Booster Club",
            url: "https://olympianboosterclub.com",
            logo: "https://olympianboosterclub.com/logo.png",
            description:
              "The Olympian Booster Club supports youth athletics in Jim Thorpe, PA, offering programs in football, cheerleading, wrestling, volleyball, and cross country for grades K–6.",
            email: "olympianbooster@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jim Thorpe",
              addressRegion: "PA",
              postalCode: "18229",
              addressCountry: "US",
            },
            foundingDate: "1985",
            areaServed: {
              "@type": "Place",
              name: "Jim Thorpe, PA",
            },
            sport: [
              "Football",
              "Cheerleading",
              "Wrestling",
              "Volleyball",
              "Cross Country",
            ],
          })}
        </script>
      </Helmet>

      <HeroBanner />
      <SponsorsSection />
      <SportsRegistrationSection />
    </>
  );
};

export default Home;
