import { Link } from "wouter";
import { useState } from "react";
import DonationPopup from "./DonationPopup";
import OptimizedImage from "./ui/optimized-image";
import heroImage from "../assets/home_hero.webp";

const HeroBanner = () => {
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);

  const openDonationPopup = () => {
    setIsDonationPopupOpen(true);
  };

  const closeDonationPopup = () => {
    setIsDonationPopupOpen(false);
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF4444] to-[#023FA6] opacity-50 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero Title */}
          <h1 className="old-sport-font text-6xl md:text-8xl mb-6 text-white drop-shadow-lg">
            OLYMPIAN<br/>BOOSTER CLUB
          </h1>
          
          {/* Subtitle/Tagline */}
          <p className="text-lg md:text-xl mb-10 text-white max-w-2xl">
            Supporting Our Young Athletes Through Friendly Competition, Community, Fundraising, and Team Spirit.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
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
              Sports Registration
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-white hover:text-red-600 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Donation Popup */}
      <DonationPopup isOpen={isDonationPopupOpen} onClose={closeDonationPopup} />
    </section>
  );
};

export default HeroBanner;
