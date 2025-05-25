import React, { useState } from "react";
import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onDonateClick?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, onDonateClick }) => {
  const [showCheerSubmenu, setShowCheerSubmenu] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setShowCheerSubmenu(false);
  };
  
  const handleDonateClick = () => {
    closeMenu();
    if (onDonateClick) {
      onDonateClick();
    }
  };

  return (
    <div
      className={`mobile-menu fixed inset-0 z-40 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeMenu} />
      <div className="absolute right-0 top-0 h-full w-64 bg-primary overflow-y-auto">
        <div className="p-4">
          <button
            onClick={closeMenu}
            className="mb-6 text-white hover:text-[#FF4444]"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          
          <div className="flex flex-col space-y-3 text-white">
            <Link
              href="/"
              className="font-montserrat font-semibold hover:text-[#FF4444] transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
              aria-label="Home"
            >
              <i className="fas fa-home text-lg mr-2"></i>
              HOME
            </Link>
            
            <div className="py-2 border-b border-lightblue">
              <button
                onClick={() => setShowCheerSubmenu(!showCheerSubmenu)}
                className="font-montserrat font-semibold hover:text-[#FF4444] transition-colors flex items-center justify-between w-full"
              >
                <span>CHEER</span>
                <i className={`fas fa-chevron-${showCheerSubmenu ? 'up' : 'down'} text-sm`}></i>
              </button>
              
              {showCheerSubmenu && (
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  <Link href="/competition-cheer" className="text-white hover:text-[#FF4444]" onClick={closeMenu}>
                    Competition Cheer
                  </Link>
                  <Link href="/sideline-cheer" className="text-white hover:text-[#FF4444]" onClick={closeMenu}>
                    Sideline Cheer
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="/cross-country"
              className="font-montserrat font-semibold hover:text-[#FF4444] transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
            >
              CROSS COUNTRY
            </Link>
            
            <Link
              href="/football"
              className="font-montserrat font-semibold hover:text-[#FF4444] transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
            >
              FOOTBALL
            </Link>
            
            <Link
              href="/girls-volleyball"
              className="font-montserrat font-semibold hover:text-[#FF4444] transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
            >
              GIRLS VOLLEYBALL
            </Link>
            
            <Link
              href="/wrestling"
              className="font-montserrat font-semibold hover:text-[#FF4444] transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
            >
              WRESTLING
            </Link>
            
            <Link
              href="/contact"
              className="font-montserrat font-semibold hover:text-[#023FA6] transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
            >
              CONTACT
            </Link>
            
            {/* Donate Button */}
            <button
              onClick={handleDonateClick}
              className="font-montserrat font-semibold text-[#EF4444] hover:text-white transition-colors py-2 mt-4 flex items-center"
            >
              <i className="fas fa-heart mr-2"></i>
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
