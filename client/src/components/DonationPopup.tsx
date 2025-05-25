import { useState, useEffect } from "react";

interface DonationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationPopup = ({ isOpen, onClose }: DonationPopupProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-70" 
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-[90%] h-[90%] md:w-[80%] md:h-[80%] z-10 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-montserrat font-bold text-xl text-primary">Donate to Olympian Booster Club</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close donation form"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Body */}
        <div className="overflow-auto p-0 flex-grow">
          <div className="relative w-full h-full" style={{ minHeight: "600px" }}>
            <iframe 
              title="Donation form powered by Zeffy" 
              style={{ position: "absolute", border: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%" }} 
              src="https://www.zeffy.com/embed/donation-form/15cc4e43-f24c-488a-aea2-5415ae2921e9" 
              allow="payment"
              frameBorder={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup;