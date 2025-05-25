import { useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";

const AccessibilityStatement = () => {
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
        <title>Accessibility Statement - Olympian Booster Club</title>
        <meta name="description" content="Olympian Booster Club is committed to ensuring digital accessibility for people with disabilities." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        {/* Background Image - using a gradient as background */}
        <div 
          className="absolute inset-0 bg-center bg-cover bg-primary" 
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4444] to-[#023FA6] opacity-70 z-10"></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl pt-[50px]">
          <h1 className="old-sport-font text-6xl md:text-8xl mb-2 text-white drop-shadow-lg">
            ACCESSIBILITY
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Our commitment to digital accessibility for all users
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2>Our Commitment to Accessibility</h2>
            <p>
              Olympian Booster Club is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
            </p>
            
            <h2>Conformance Status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Olympian Booster Club is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
            </p>
            
            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of the Olympian Booster Club website. Please let us know if you encounter accessibility barriers:
            </p>
            <ul>
              <li>Email: <a href="mailto:olympianbooster@gmail.com">olympianbooster@gmail.com</a></li>
            </ul>
            <p>
              We try to respond to feedback within 3 business days.
            </p>
            
            <h2>Assessment</h2>
            <p>
              Olympian Booster Club assessed the accessibility of this website by self-evaluation and manual testing with assistive technologies.
            </p>
            
            <h2>Date</h2>
            <p>
              This statement was created on May 25, 2025.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessibilityStatement;