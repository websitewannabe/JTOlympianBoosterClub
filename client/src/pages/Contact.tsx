import { useEffect } from "react";
import { useLocation } from "wouter";
import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet";
import OptimizedImage from "@/components/ui/optimized-image";
import heroImage from "../assets/home_hero.webp";

const Contact = () => {
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
        <link rel="canonical" href="https://olympianboosterclub.com/contact-us" />
        <title>Contact Us | Olympian Booster Club in Carbon County, PA</title>
        <meta
          name="description"
          content="Have a question or want to get involved? Reach out to Olympian Booster Club in Carbon County, PA. Use our contact form and our team will respond promptly."
        />
        <meta
          name="keywords"
          content="Olympian Booster Club contact, Carbon County youth sports contact, get involved booster club, cheer football volleyball wrestling contact"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Contact Olympian Booster Club | Youth Sports in Carbon County, PA"
        />
        <meta
          property="og:description"
          content="Send us a message and learn more about youth sports programs with the Olympian Booster Club. We're here to help!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://olympianboosterclub.com/contact-us"
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
            url: "https://olympianboosterclub.com/contact-us",
            image: "https://olympianboosterclub.com/images/home_hero.webp",
            logo: "https://olympianboosterclub.com/images/olympian-logo.png",
            description:
              "Contact the Olympian Booster Club with questions or to learn how to get involved in youth sports across Carbon County, PA.",
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
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              email: "olympianbooster@gmail.com",
              availableLanguage: "English",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <OptimizedImage
          src={heroImage}
          alt="Olympian High School Athletics"
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
          <h1 className="old-sport-font text-6xl md:text-8xl mb-6 text-white drop-shadow-lg">
            CONTACT US
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Please feel free to fill out our contact form below and one of our
            volunteers will reach back out to you as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </>
  );
};

export default Contact;
