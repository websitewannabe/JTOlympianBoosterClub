
import { useState } from "react";
import DonationPopup from "./DonationPopup";
import americanLegionLogo from "../assets/american_legion.webp";
import valleyAthleticSupplyLogo from "../assets/valley_athletic_supply.webp";
import pennForestLogo1 from "../assets/penn_forest_plaza1.webp";
import pennForestLogo2 from "../assets/penn_forest_plaza2.webp";
import scoopsLogo from "../assets/903_scoops.webp";

const SponsorsSection = () => {
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);

  const openDonationPopup = () => {
    setIsDonationPopupOpen(true);
  };

  const closeDonationPopup = () => {
    setIsDonationPopupOpen(false);
  };

  const sponsors = [
    {
      name: "American Legion Post 304",
      logo: americanLegionLogo,
      url: "http://glenrocklegion.org/"
    },
    {
      name: "Valley Athletic Supply", 
      logo: valleyAthleticSupplyLogo,
      url: "http://www.valleyathleticsupply.com/"
    },
    {
      name: "Penn Forest Service Plaza",
      logo: pennForestLogo1,
      url: "https://www.facebook.com/p/Penn-Forest-Plaza-100071003231597/?paipv=0&eav=AfaRoy1euOZfi0Lp2S0pRQXWbU2d7AmyUJssPabavz0FRoMQb0JIS-iK2AjR2C77-hE&_rdr"
    },
    {
      name: "903 Scoops",
      logo: scoopsLogo,
      url: "http://www.903scoops.com/"
    }
  ];

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="old-sport-font text-4xl md:text-5xl text-[#FF4444] mb-4">
              OUR SPONSORS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              A Special Thank You To Our Sponsors! Please visit our sponsors by clicking on their logos!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto justify-items-center">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <a 
                  href={sponsor.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full h-40 rounded-lg mb-3 hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="w-full h-full object-contain p-3"
                  />
                </a>
                <h3 className="font-montserrat font-semibold text-[#FF4444] text-base">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <DonationPopup isOpen={isDonationPopupOpen} onClose={closeDonationPopup} />
    </>
  );
};

export default SponsorsSection;
