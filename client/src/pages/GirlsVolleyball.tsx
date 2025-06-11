import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet";
import SportsRegistrationSection from "@/components/SportsRegistrationSection";
import OptimizedImage from "@/components/ui/optimized-image";
import girlsVolleyballImage from "../assets/girls_volleyball.webp";

const GirlsVolleyball = () => {
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
        <link
          rel="canonical"
          href="https://olympianboosterclub.com/girls-volleyball"
        />
        <title>
          Girls Volleyball | Olympian Booster Club Youth Volleyball in Carbon
          County, PA
        </title>
        <meta
          name="description"
          content="Serving up excellence through teamwork, skill development, and competitive spirit on the court with Olympian Booster Club's girls volleyball program in Carbon County, PA."
        />
        <meta
          name="keywords"
          content="girls volleyball, youth volleyball, Carbon County volleyball, youth sports, volleyball league, competitive volleyball, Olympian Booster Club"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Olympian Booster Club Girls Volleyball | Youth Volleyball in Carbon County"
        />
        <meta
          property="og:description"
          content="Join Olympian Booster Club's girls volleyball program for youth athletes looking to learn, grow, and compete in Carbon County, PA."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://olympianboosterclub.com/girls-volleyball"
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
            url: "https://olympianboosterclub.com/girls-volleyball",
            image: "https://olympianboosterclub.com/images/home_hero.webp",
            logo: "https://olympianboosterclub.com/images/olympian-logo.png",
            description:
              "Olympian Booster Club's girls volleyball program promotes teamwork, athletic skill, and competitive fun for youth in Carbon County, PA.",
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
              name: "Olympian Booster Club Girls Volleyball Program",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Youth Girls Volleyball",
                    description:
                      "A skill-building volleyball program with coaching, drills, and local competition for youth athletes.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: "60.00",
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
          src={girlsVolleyballImage}
          alt="Olympian High School Girls Volleyball"
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
            GIRLS VOLLEYBALL
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Serving up excellence through teamwork, skill development, and
            competitive spirit on the court.
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

export default GirlsVolleyball;
