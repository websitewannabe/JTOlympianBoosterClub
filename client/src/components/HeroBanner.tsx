import { Link } from "wouter";
import { useState } from "react";
import DonationPopup from "./DonationPopup";
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
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: `url('${heroImage}')` 
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF4444] to-[#0094FF] opacity-50 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-5xl">
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
            <Link 
              href="#sports-registration" 
              className="bg-red-500 text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-red-600 transition-colors text-center"
            >
              Sports Registration
            </Link>
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
