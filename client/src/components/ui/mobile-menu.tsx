import React, { useState } from "react";
import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onDonateClick?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, onDonateClick }) => {
  const [showAboutSubmenu, setShowAboutSubmenu] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setShowAboutSubmenu(false);
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
            className="mb-6 text-white hover:text-secondary"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          
          <div className="flex flex-col space-y-3 text-white">
            <Link
              href="/"
              className="font-montserrat font-semibold hover:text-secondary transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
            >
              HOME
            </Link>
            
            <div className="py-2 border-b border-lightblue">
              <button
                onClick={() => setShowAboutSubmenu(!showAboutSubmenu)}
                className="font-montserrat font-semibold hover:text-secondary transition-colors flex items-center justify-between w-full"
              >
                <span>ABOUT</span>
                <i className={`fas fa-chevron-${showAboutSubmenu ? 'up' : 'down'} text-sm`}></i>
              </button>
              
              {showAboutSubmenu && (
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  <Link href="/about#mission" className="text-white hover:text-secondary" onClick={closeMenu}>
                    Mission & Vision
                  </Link>
                  <Link href="/about#board" className="text-white hover:text-secondary" onClick={closeMenu}>
                    Board Members
                  </Link>
                  <Link href="/about#bylaws" className="text-white hover:text-secondary" onClick={closeMenu}>
                    Bylaws & Policies
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="/membership"
              className="font-montserrat font-semibold hover:text-secondary transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
            >
              MEMBERSHIP
            </Link>
            
            <Link
              href="/events"
              className="font-montserrat font-semibold hover:text-secondary transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
            >
              EVENTS
            </Link>
            
            <Link
              href="/news"
              className="font-montserrat font-semibold hover:text-secondary transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
            >
              NEWS
            </Link>
            
            <Link
              href="/gallery"
              className="font-montserrat font-semibold hover:text-secondary transition-colors py-2 border-b border-lightblue"
              onClick={closeMenu}
            >
              GALLERY
            </Link>
            
            <Link
              href="/contact"
              className="font-montserrat font-semibold hover:text-secondary transition-colors py-2 border-b border-lightblue"
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
