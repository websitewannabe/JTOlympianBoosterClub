import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet";
import SportsRegistrationSection from "@/components/SportsRegistrationSection";
import OptimizedImage from "@/components/ui/optimized-image";
import wrestlingImage from "../assets/wrestling.webp";

const Wrestling = () => {
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
          href="https://olympianboosterclub.com/wrestling"
        />
        <title>
          Wrestling | Olympian Booster Club Youth Wrestling in Carbon County, PA
        </title>
        <meta
          name="description"
          content="Building strength, discipline, and mental toughness through youth wrestling at Olympian Booster Club in Carbon County, PA. Join our wrestling program today."
        />
        <meta
          name="keywords"
          content="youth wrestling, kids wrestling, Carbon County wrestling, wrestling program, youth grappling, PA wrestling club, Olympian Booster Club"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Olympian Booster Club Wrestling | Youth Wrestling in Carbon County, PA"
        />
        <meta
          property="og:description"
          content="Train with Olympian Booster Club’s youth wrestling program and develop strength, discipline, and competition skills in Carbon County, PA."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://olympianboosterclub.com/wrestling"
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
            url: "https://olympianboosterclub.com/wrestling",
            image: "https://olympianboosterclub.com/images/home_hero.webp",
            logo: "https://olympianboosterclub.com/images/olympian-logo.png",
            description:
              "Olympian Booster Club’s wrestling program helps young athletes in Carbon County build strength, agility, and discipline through training and competition.",
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
              name: "Olympian Booster Club Wrestling Program",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Youth Wrestling",
                    description:
                      "Wrestling training and competitions for young athletes to build strength and discipline.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: "70.00",
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
          src={wrestlingImage}
          alt="Olympian High School Wrestling"
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
            WRESTLING
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Building strength, discipline, and mental toughness through the art
            of wrestling.
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

export default Wrestling;
