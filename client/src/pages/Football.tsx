
import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet";
import SportsRegistrationSection from "@/components/SportsRegistrationSection";
import footballImage from "../assets/football.webp";

const Football = () => {
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
        <title>Football - Olympian Booster Club</title>
        <meta name="description" content="Join our football program for competitive play, teamwork, and athletic excellence. Register today!" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ 
            backgroundImage: `url('${footballImage}')` 
          }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4444] to-[#023FA6] opacity-70 z-10"></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl pt-[50px]">
          <h1 className="old-sport-font text-6xl md:text-8xl mb-2 text-white drop-shadow-lg">
            FOOTBALL
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Building champions through teamwork, discipline, and competitive excellence on the gridiron.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <a 
              href="#sports-registration" 
              className="bg-red-500 text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-red-600 transition-colors text-center"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('sports-registration');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
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

export default Football;
