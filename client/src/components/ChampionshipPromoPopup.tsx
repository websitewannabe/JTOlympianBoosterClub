import { useEffect } from "react";
import OptimizedImage from "./ui/optimized-image";
import champsImage from "../assets/JT Football Images/209-champs_54081763157_o.jpg";

interface ChampionshipPromoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onDonateClick: () => void;
}

const ChampionshipPromoPopup = ({ isOpen, onClose, onDonateClick }: ChampionshipPromoPopupProps) => {

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

  const handleDonateClick = () => {
    onClose(); // Close the promo popup first
    // Wait a brief moment for the promo popup to close, then open donation popup
    setTimeout(() => {
      onDonateClick();
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-80" 
          onClick={onClose}
        ></div>
        
        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 z-10 overflow-hidden">
          {/* Close button */}
          <button 
            onClick={onClose} 
            className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full w-8 h-8 flex items-center justify-center transition-colors shadow-lg"
            aria-label="Close popup"
          >
            <i className="fas fa-times text-sm"></i>
          </button>
          
          {/* Championship Image */}
          <div className="w-full overflow-hidden pt-2.5">
            <OptimizedImage
              src={champsImage}
              alt="Olympian Football Champions"
              width={500}
              height={350}
              quality={90}
              format="webp"
              fit="contain"
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
          
          {/* Content */}
          <div className="p-6 text-center">
            <h3 className="old-sport-font text-2xl sm:text-3xl text-primary mb-4">
              2024 CHAMPIONS
            </h3>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl font-montserrat font-semibold text-gray-800 mb-6 leading-tight">
              Help us continue our excellence and donate now
            </p>
            
            {/* Donate Button */}
            <button 
              onClick={handleDonateClick}
              className="w-full bg-[#023FA6] text-white font-montserrat font-bold px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center text-lg"
              aria-label="Donate now"
            >
              <i className="fas fa-heart mr-3"></i>
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChampionshipPromoPopup;