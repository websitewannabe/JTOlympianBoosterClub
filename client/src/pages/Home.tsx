import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroBanner";
import SponsorsSection from "@/components/SponsorsSection";
import SportsRegistrationSection from "@/components/SportsRegistrationSection";
import OptimizedImage from "@/components/ui/optimized-image";
import ChampionshipPromoPopup from "@/components/ChampionshipPromoPopup";
import DonationPopup from "@/components/DonationPopup";
import { Helmet } from "react-helmet";
import champsImage from "../assets/JT Football Images/209-champs_54081763157_o.jpg";

const Home = () => {
  const [isPromoPopupOpen, setIsPromoPopupOpen] = useState(false);
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);

  // Show promo popup after 7 seconds, but only once per visit
  useEffect(() => {
    // Check if popup has already been shown during this session
    const hasShownPromoPopup = sessionStorage.getItem('olympian-promo-popup-shown');
    
    if (!hasShownPromoPopup) {
      const timer = setTimeout(() => {
        setIsPromoPopupOpen(true);
        // Mark popup as shown for this session
        sessionStorage.setItem('olympian-promo-popup-shown', 'true');
      }, 7000); // 7 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const closePromoPopup = () => {
    setIsPromoPopupOpen(false);
    // Mark popup as shown for this session when manually closed
    sessionStorage.setItem('olympian-promo-popup-shown', 'true');
  };

  const openDonationPopup = () => {
    setIsDonationPopupOpen(true);
  };

  const closeDonationPopup = () => {
    setIsDonationPopupOpen(false);
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://olympianboosterclub.com/" />
        <title>
          Olympian Booster Club | Youth Sports & Community in Jim Thorpe, PA
        </title>
        <meta
          name="description"
          content="Supporting youth athletics in Jim Thorpe, PA with programs in football, cheerleading, wrestling, volleyball, and cross country for grades K–6."
        />
        <meta
          name="keywords"
          content="youth sports, Jim Thorpe PA, football, cheerleading, wrestling, volleyball, cross country, booster club, community sports, youth athletics"
        />
        
        {/* Open Graph metadata */}
        <meta property="og:title" content="Olympian Booster Club | Youth Sports & Community in Jim Thorpe, PA" />
        <meta property="og:description" content="Supporting youth athletics in Jim Thorpe, PA with programs in football, cheerleading, wrestling, volleyball, and cross country for grades K–6." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://olympianboosterclub.com/" />
        <meta property="og:image" content="https://olympianboosterclub.com/og-home.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Olympian Booster Club - Youth Sports in Jim Thorpe, PA" />
        <meta property="og:site_name" content="Olympian Booster Club" />
        
        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Olympian Booster Club | Youth Sports & Community in Jim Thorpe, PA" />
        <meta name="twitter:description" content="Supporting youth athletics in Jim Thorpe, PA with programs in football, cheerleading, wrestling, volleyball, and cross country for grades K–6." />
        <meta name="twitter:image" content="https://olympianboosterclub.com/og-home.png" />
        <meta name="twitter:image:alt" content="Olympian Booster Club - Youth Sports in Jim Thorpe, PA" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            name: "Olympian Booster Club",
            url: "https://olympianboosterclub.com",
            logo: "https://olympianboosterclub.com/logo.png",
            description:
              "The Olympian Booster Club supports youth athletics in Jim Thorpe, PA, offering programs in football, cheerleading, wrestling, volleyball, and cross country for grades K–6.",
            email: "olympianbooster@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jim Thorpe",
              addressRegion: "PA",
              postalCode: "18229",
              addressCountry: "US",
            },
            foundingDate: "1985",
            areaServed: {
              "@type": "Place",
              name: "Jim Thorpe, PA",
            },
            sport: [
              "Football",
              "Cheerleading",
              "Wrestling",
              "Volleyball",
              "Cross Country",
            ],
          })}
        </script>
      </Helmet>

      <HeroBanner />
      
      {/* Championship Hero Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="old-sport-font text-4xl md:text-5xl text-primary mb-6">
              2024 CHAMPIONS
            </h2>
            <div className="w-32 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Celebrating our champions and the spirit of excellence that defines Olympian football.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <OptimizedImage
                src={champsImage}
                alt="Olympian Football Champions"
                width={1200}
                height={800}
                quality={90}
                format="webp"
                fit="contain"
                className="w-full h-auto max-h-[500px] md:max-h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      
      <SponsorsSection />
      <SportsRegistrationSection />
      
      {/* Championship Promo Popup */}
      <ChampionshipPromoPopup isOpen={isPromoPopupOpen} onClose={closePromoPopup} onDonateClick={openDonationPopup} />
      
      {/* Donation Popup */}
      <DonationPopup isOpen={isDonationPopupOpen} onClose={closeDonationPopup} />
    </>
  );
};

export default Home;
