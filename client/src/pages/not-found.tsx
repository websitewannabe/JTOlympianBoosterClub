import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet";
import heroImage from "../assets/home_hero.webp";

export default function NotFound() {
  const [location] = useLocation();

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

  return (
    <>
      <Helmet>
        <title>Page Not Found - Olympian Booster Club</title>
        <meta name="description" content="The page you're looking for doesn't exist. Please check the URL or navigate back to the homepage." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ 
            backgroundImage: `url('${heroImage}')` 
          }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4444] to-[#023FA6] opacity-70 z-10"></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl pt-[50px]">
          <h1 className="old-sport-font text-6xl md:text-8xl mb-2 text-white drop-shadow-lg">
            404
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <Link 
              href="/" 
              className="bg-red-500 text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-red-600 transition-colors text-center"
            >
              Back to Home
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-white hover:text-red-600 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#023FA6] mb-6">Looking for something?</h2>
            <p className="text-lg text-gray-700 mb-8">
              The page you requested could not be found. It might have been removed, renamed, or didn't exist in the first place.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold text-[#023FA6] mb-2">Sports Programs</h3>
                <ul className="text-left">
                  <li className="mb-2"><Link href="/cross-country" className="text-gray-700 hover:text-[#023FA6]">Cross Country</Link></li>
                  <li className="mb-2"><Link href="/football" className="text-gray-700 hover:text-[#023FA6]">Football</Link></li>
                  <li className="mb-2"><Link href="/girls-volleyball" className="text-gray-700 hover:text-[#023FA6]">Girls Volleyball</Link></li>
                  <li className="mb-2"><Link href="/wrestling" className="text-gray-700 hover:text-[#023FA6]">Wrestling</Link></li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold text-[#023FA6] mb-2">Quick Links</h3>
                <ul className="text-left">
                  <li className="mb-2"><Link href="/" className="text-gray-700 hover:text-[#023FA6]">Home</Link></li>
                  <li className="mb-2"><Link href="/contact" className="text-gray-700 hover:text-[#023FA6]">Contact</Link></li>
                  <li className="mb-2"><Link href="/privacy" className="text-gray-700 hover:text-[#023FA6]">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
