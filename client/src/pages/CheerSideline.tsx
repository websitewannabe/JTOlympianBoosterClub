import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet";
import SportsRegistrationSection from "@/components/SportsRegistrationSection";
import CheerImageGallery from "@/components/CheerImageGallery";
import OptimizedImage from "@/components/ui/optimized-image";
// Use specific cheer image from the gallery
const sidelineCheerImage = "/assets/JT Sideline Cheer Images/dsc08405_54082120920_o.jpg";

const CheerSideline = () => {
  const [location] = useLocation();
  const [isDownloading, setIsDownloading] = useState(false);

  // Handle anchor links
  useEffect(() => {
    const hash = location.split("#")[1];
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleDownloadGallery = async () => {
    setIsDownloading(true);
    try {
      // Direct download of pre-built zip file
      const zipUrl = '/assets/JT-Sideline-Cheer-Gallery-2024.zip';
      const response = await fetch(zipUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'JT-Sideline-Cheer-Gallery-2024.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download zip file:', error);
      alert('Failed to download gallery. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://olympianboosterclub.com/sideline-cheer"
        />
        <title>
          Sideline Cheer | Olympian Booster Club Youth Sideline Cheerleading in Carbon County, PA
        </title>
        <meta
          name="description"
          content="Support your team with school spirit and energy through our youth sideline cheerleading program in Carbon County, PA. Join Olympian Booster Club's sideline cheer team today."
        />
        <meta
          name="keywords"
          content="youth cheerleading, cheer program, Carbon County cheer, sideline cheer, competition cheer, PA youth athletics, cheer team registration"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Olympian Booster Club Cheer Program | Carbon County Youth Cheerleading"
        />
        <meta
          property="og:description"
          content="Support and join cheerleading programs with the Olympian Booster Club. Competitive and sideline cheer available for youth in Carbon County, PA."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://olympianboosterclub.com/sideline-cheer"
        />
        <meta
          property="og:image"
          content="https://olympianboosterclub.com/sideline_cheer.webp"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Olympian Booster Club",
            url: "https://olympianboosterclub.com/sideline-cheer",
            image: "https://olympianboosterclub.com/images/home_hero.webp",
            logo: "https://olympianboosterclub.com/images/olympian-logo.png",
            description:
              "Olympian Booster Club offers competitive and sideline cheerleading programs for youth across Carbon County, Pennsylvania. Register to support and grow through athletics.",
            openingHours: "Mo-Fr 09:00-17:00",
            areaServed: {
              "@type": "Place",
              name: [
                "Jim Thorpe",
                "Lehighton",
                "Nesquehoning",
                "Palmerton",
                "Weatherly",
                "Summit Hill",
                "Lansford",
                "Beaver Meadows",
              ],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Olympian Booster Club Cheer Programs",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Sideline Cheer",
                    description:
                      "Support youth football games with spirited sideline cheer routines.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: "65.00",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Competition Cheer",
                    description:
                      "Train and compete in regional youth cheerleading competitions.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: "85.00",
                    },
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <OptimizedImage
          src={sidelineCheerImage}
          alt="Olympian High School Sideline Cheerleading"
          width={1920}
          height={1080}
          quality={85}
          format="webp"
          fit="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4444] to-[#023FA6] opacity-70 z-10"></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl pt-[50px]">
          <h1 className="old-sport-font text-6xl md:text-8xl mb-2 text-white drop-shadow-lg">
            SIDELINE CHEER
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            School spirit, team support, and community pride through our
            sideline cheer program.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <a
              href="#sports-registration"
              className="bg-red-500 text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-red-600 transition-colors text-center"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("sports-registration");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Register
            </a>
            <Link
              href="/contact-us"
              className="bg-transparent text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-white hover:text-red-600 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Championship Spirit Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="old-sport-font text-4xl md:text-5xl text-primary mb-6">
              SPIRIT & EXCELLENCE
            </h2>
            <div className="w-32 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Celebrating the energy, dedication, and team spirit that defines Olympian sideline cheer.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <OptimizedImage
                src={sidelineCheerImage}
                alt="Olympian Sideline Cheer Spirit"
                width={1200}
                height={800}
                quality={90}
                format="webp"
                fit="contain"
                className="w-full h-auto max-h-[500px] md:max-h-[600px] object-contain"
              />
            </div>
            
            {/* Download Gallery Button */}
            <div className="text-center mt-8">
              <button
                onClick={handleDownloadGallery}
                disabled={isDownloading}
                className="bg-primary hover:bg-primary/90 disabled:bg-gray-400 text-white font-montserrat font-bold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center mx-auto space-x-2"
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Downloading Gallery...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download Our Sideline Cheer Gallery</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sideline Cheer Image Gallery */}
      <CheerImageGallery />
      
      {/* Sports Registration Section */}
      <SportsRegistrationSection />
    </>
  );
};

export default CheerSideline;
