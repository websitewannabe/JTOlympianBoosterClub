import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./ui/mobile-menu";
import logoImage from "../assets/olympian-logo.png";
import DonationPopup from "./DonationPopup";
import OptimizedImage from "./ui/optimized-image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("/");
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);

  useEffect(() => {
    setActiveTab(location);
  }, [location]);

  const openDonationPopup = () => {
    setIsDonationPopupOpen(true);
  };

  const closeDonationPopup = () => {
    setIsDonationPopupOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-30 w-full">
      <div className="w-full max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <OptimizedImage 
            src={logoImage}
            alt="Olympian Booster Club Logo"
            width={200}
            height={100}
            quality={90}
            format="auto"
            fit="contain"
            className="h-16 w-16"
          />
          <div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-6 text-white">
            <Link 
              href="/" 
              className={`font-montserrat font-semibold hover:text-[#023FA6] transition-colors ${activeTab === "/" ? "active-tab" : ""}`}
              aria-label="Home"
            >
              <i className="fas fa-home text-lg"></i>
            </Link>

            <div className="dropdown relative">
              <Link 
                href="/cheer" 
                className={`font-montserrat font-semibold hover:text-[#023FA6] transition-colors flex items-center ${activeTab === "/cheer" ? "active-tab" : ""}`}
              >
                CHEER
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </Link>
              <div className="dropdown-menu hidden absolute bg-white shadow-lg rounded mt-1 py-2 w-48 z-20">
                <Link href="/competition-cheer" className="block px-4 py-2 text-primary hover:text-[#023FA6]">
                  Competition Cheer
                </Link>
                <Link href="/sideline-cheer" className="block px-4 py-2 text-primary hover:text-[#023FA6]">
                  Sideline Cheer
                </Link>
              </div>
            </div>

            <Link 
              href="/cross-country" 
              className={`font-montserrat font-semibold hover:text-[#023FA6] transition-colors ${activeTab === "/cross-country" ? "active-tab" : ""}`}
            >
              CROSS COUNTRY
            </Link>

            <Link 
              href="/football" 
              className={`font-montserrat font-semibold hover:text-[#023FA6] transition-colors ${activeTab === "/football" ? "active-tab" : ""}`}
            >
              FOOTBALL
            </Link>

            <Link 
              href="/girls-volleyball" 
              className={`font-montserrat font-semibold hover:text-[#023FA6] transition-colors ${activeTab === "/girls-volleyball" ? "active-tab" : ""}`}
            >
              GIRLS VOLLEYBALL
            </Link>

            <Link 
              href="/wrestling" 
              className={`font-montserrat font-semibold hover:text-[#023FA6] transition-colors ${activeTab === "/wrestling" ? "active-tab" : ""}`}
            >
              WRESTLING
            </Link>

            <Link 
              href="/contact-us" 
              className={`font-montserrat font-semibold hover:text-[#023FA6] transition-colors ${activeTab === "/contact-us" ? "active-tab" : ""}`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Donate Button */}
          <button 
            onClick={openDonationPopup}
            className="ml-6 bg-[#023FA6] text-white font-montserrat font-bold px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center"
            aria-label="Donate now"
          >
            <i className="fas fa-heart mr-2"></i>
            DONATE
          </button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={openDonationPopup}
            className="text-secondary"
            aria-label="Donate now"
          >
            <i className="fas fa-heart text-2xl text-[#0094ff]"></i>
          </button>

          <button 
            onClick={() => setIsOpen(true)} 
            className="text-white"
            aria-label="Open mobile menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} onDonateClick={openDonationPopup} />
      {/* Donation Popup */}
      <DonationPopup isOpen={isDonationPopupOpen} onClose={closeDonationPopup} />
    </header>
  );
};

export default Header;