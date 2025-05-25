import { useEffect } from "react";
import { useLocation } from "wouter";
import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet";
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
        <title>Contact Us - Olympian Booster Club</title>
        <meta name="description" content="Contact the Olympian Booster Club with your questions or to get involved. Reach out to us by phone, email, or using our contact form." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ 
            backgroundImage: `url('${heroImage}')` 
          }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4444] to-[#0094FF] opacity-70 z-10"></div>

        <div className="relative z-20 text-center text-white px-4">
          <h1 className="old-sport-font text-6xl md:text-8xl mb-6 text-white drop-shadow-lg">
            CONTACT US
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Please feel free to fill out our contact form below and one of our volunteers will reach back out to you as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
      
      
    </>
  );
};

export default Contact;