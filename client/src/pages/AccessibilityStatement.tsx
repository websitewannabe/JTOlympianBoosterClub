import { useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import heroImage from "../assets/home_hero.webp";

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
        <link rel="canonical" href="https://olympianboosterclub.com/accessibility-statement/" />
        <title>Accessibility Statement | Olympian Booster Club - Digital Accessibility Commitment</title>
        <meta name="description" content="Olympian Booster Club's commitment to digital accessibility, WCAG 2.1 compliance, and ensuring our website is usable by people with disabilities." />
        <meta name="keywords" content="accessibility statement, digital accessibility, WCAG compliance, disability access, inclusive design, web accessibility" />
        
        {/* Open Graph metadata */}
        <meta property="og:title" content="Accessibility Statement | Olympian Booster Club - Digital Accessibility Commitment" />
        <meta property="og:description" content="Olympian Booster Club's commitment to digital accessibility, WCAG 2.1 compliance, and ensuring our website is usable by people with disabilities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://olympianboosterclub.com/accessibility-statement/" />
        <meta property="og:image" content="https://olympianboosterclub.com/olympian-logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Accessibility Statement",
            "description": "Olympian Booster Club's commitment to digital accessibility, WCAG 2.1 compliance, and ensuring our website is usable by people with disabilities.",
            "url": "https://olympianboosterclub.com/accessibility-statement/",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Olympian Booster Club",
              "url": "https://olympianboosterclub.com"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[50vh] flex items-center justify-center">
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
            <h2>Our Commitment</h2>
            <p>
              Olympian Booster Club is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to guarantee we provide equal access to all users.
            </p>

            <h3>Conformance Status</h3>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Our website strives to conform to WCAG 2.1 Level AA. We conduct regular reviews and updates to maintain and improve compliance.
            </p>

            <h3>Accessibility Features</h3>
            <p>
              Our website includes the following accessibility features:
            </p>
            <ul>
              <li>Keyboard navigation support throughout the site</li>
              <li>Screen reader compatibility with ARIA landmarks and labels</li>
              <li>Sufficient color contrast ratios for text and interactive elements</li>
              <li>Resizable text without loss of content or functionality</li>
              <li>Alternative text for all meaningful images</li>
              <li>Consistent and predictable navigation</li>
              <li>Focus indicators for interactive elements</li>
              <li>An on-site accessibility tools widget for personalized adjustments</li>
            </ul>

            <h3>Measures to Support Accessibility</h3>
            <ul>
              <li>Include accessibility as a requirement for all web content</li>
              <li>Assign clear accessibility goals and responsibilities</li>
              <li>Ensure content authors have access to accessibility knowledge and skills</li>
              <li>Include accessibility as part of our technology mission</li>
              <li>Conduct regular accessibility audits and testing</li>
            </ul>

            <h3>Compatibility with Browsers and Assistive Technology</h3>
            <p>
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul>
              <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>Speech recognition software</li>
              <li>Screen magnification software</li>
              <li>Alternative input devices</li>
            </ul>
            <p>
              Our website is compatible with the last two versions of major browsers including Chrome, Firefox, Safari, and Edge.
            </p>

            <h3>Technical Specifications</h3>
            <p>
              Our website relies upon the following technologies for conformance with WCAG 2.1:
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>WAI-ARIA</li>
              <li>SVG</li>
            </ul>

            <h3>Limitations and Alternatives</h3>
            <p>
              Despite our best efforts to ensure the accessibility of our website, there may be some limitations. We are always working to identify and fix issues as they arise. If you encounter any content that is not accessible, please contact us so we can provide the information in an alternative format.
            </p>

            <h3>Feedback</h3>
            <p>
              We welcome your feedback on the accessibility of the Olympian Booster Club website. Please let us know if you encounter accessibility barriers:
            </p>
            <ul>
              <li>Email: <a href="mailto:support@websitewannabe.com">support@websitewannabe.com</a></li>
            </ul>
            <p>
              We try to respond to accessibility feedback within 2 business days.
            </p>

            <h3>Assessment Approach</h3>
            <p>
              We assess the accessibility of our website through self-evaluation, automated testing tools, and annual review.
            </p>

            <h3>Formal Approval of This Accessibility Statement</h3>
            <p>
              This Accessibility Statement is formally approved by Website Wannabe on behalf of Olympian Booster Club.
            </p>
            <p>
              Last updated: March 31, 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessibilityStatement;