import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet";
import SportsRegistrationSection from "@/components/SportsRegistrationSection";
import OptimizedImage from "@/components/ui/optimized-image";
import competitionCheerImage from "../assets/competition_cheer.webp";

const Cheer = () => {
  const [location] = useLocation();

  // Handle anchor links
  useEffect(() => {
    const hash = location.split("#")[1];
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://olympianboosterclub.com/cheer" />
        <title>
          Cheerleading | Olympian Booster Club Youth Cheer in Carbon County, PA
        </title>
        <meta
          name="description"
          content="Spreading spirit, pride, and athletic excellence through youth cheerleading in Carbon County, PA. Join the Olympian Booster Club's cheer program today."
        />
        <meta
          name="keywords"
          content="youth cheerleading, cheer program, Carbon County cheer, sideline cheer, competition cheer, PA youth athletics, cheer team registration"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Olympian Booster Club Cheer Program | Carbon County Youth Cheerleading"
        />
        <meta
          property="og:description"
          content="Support and join cheerleading programs with the Olympian Booster Club. Competitive and sideline cheer available for youth in Carbon County, PA."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://olympianboosterclub.com/cheer"
        />
        <meta
          property="og:image"
          content="https://olympianboosterclub.com/images/home_hero.webp"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Olympian Booster Club",
            url: "https://olympianboosterclub.com/cheer",
            image: "https://olympianboosterclub.com/images/home_hero.webp",
            logo: "https://olympianboosterclub.com/images/olympian-logo.png",
            description:
              "Olympian Booster Club offers competitive and sideline cheerleading programs for youth across Carbon County, Pennsylvania. Register to support and grow through athletics.",
            openingHours: "Mo-Fr 09:00-17:00",
            areaServed: {
              "@type": "Place",
              name: [
                "Jim Thorpe",
                "Lehighton",
                "Nesquehoning",
                "Palmerton",
                "Weatherly",
                "Summit Hill",
                "Lansford",
                "Beaver Meadows",
              ],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Olympian Booster Club Cheer Programs",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Sideline Cheer",
                    description:
                      "Support youth football games with spirited sideline cheer routines.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: "65.00",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Competition Cheer",
                    description:
                      "Train and compete in regional youth cheerleading competitions.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: "85.00",
                    },
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <OptimizedImage
          src={competitionCheerImage}
          alt="Olympian High School Cheerleading"
          width={1920}
          height={1080}
          quality={85}
          format="webp"
          fit="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4444] to-[#023FA6] opacity-70 z-10"></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl pt-[50px]">
          <h1 className="old-sport-font text-6xl md:text-8xl mb-2 text-white drop-shadow-lg">
            CHEER
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Spreading spirit, pride, and athletic excellence through
            cheerleading and performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <a
              href="#sports-registration"
              className="bg-red-500 text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-red-600 transition-colors text-center"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("sports-registration");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Register
            </a>
            <Link
              href="/contact"
              className="bg-transparent text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-white hover:text-red-600 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Sports Registration Section */}
      <SportsRegistrationSection />
    </>
  );
};

export default Cheer;
