import { useState } from "react";
import DonationPopup from "./DonationPopup";

const DonateSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openDonationPopup = () => {
    setIsPopupOpen(true);
  };

  const closeDonationPopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section id="donate" className="py-16 bg-darkblue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-montserrat font-bold text-3xl mb-4">SUPPORT OUR ATHLETES</h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Your donations directly support our student-athletes through equipment purchases, facility improvements, team travel, and scholarships.
        </p>
        <button 
          onClick={openDonationPopup}
          className="inline-block bg-secondary text-primary font-montserrat font-bold py-3 px-8 rounded-md text-xl hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
        >
          DONATE NOW
        </button>
      </div>

      {/* Donation Popup */}
      <DonationPopup isOpen={isPopupOpen} onClose={closeDonationPopup} />
    </section>
  );
};

export default DonateSection;
