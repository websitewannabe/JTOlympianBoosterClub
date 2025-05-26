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
        <title>Accessibility Statement - Olympian Booster Club</title>
        <meta name="description" content="Olympian Booster Club is committed to ensuring digital accessibility for people with disabilities." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[50vh] flex items-center justify-center">
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
            <h2>Declaration of Accessibility Introduction</h2>
            <p>
              The Internet constitutes the largest resource supporting freedom of information today for the user community in general and for users with disabilities in particular. For that reason we place emphasis on granting equal service to people with disabilities who use information displayed on the website, and on improving their browsing experience. We seek to ensure that our digital services will be accessible to people with disabilities, and accordingly, we have invested in the website.
            </p>
            
            <h3>Using the EqualWeb website accessibility tool</h3>
            <p>
              This website employs the Nagich By Click accessibility software and is connected through a special accessibility server. The software complies with Israeli standard SI 5568 at AA level. The software is subject to the manufacturer's Terms of Use. The website owners and/or agents bear the responsibility for the usage and implementation on the website, including the content displayed on the website under the Terms of Use of the Software.
            </p>
            
            <h3>How does the site's accessibility work?</h3>
            <p>
              The website features an accessibility menu. A click on the menu makes accessibility buttons available. After selecting a menu item, the user should wait for the page to be loaded.
            </p>
            
            <h3>What are the mean items?</h3>
            <ul>
              <li>Option for keyboard-based navigation</li>
              <li>Adaptation of the website for NVDA assistive technology</li>
              <li>Enlargement of the font on the website to 4 levels of magnification</li>
              <li>Immobilization of moving elements, and stoppage of blinking</li>
              <li>Altered color contrast against dark background</li>
              <li>Altered color contrast against light background</li>
              <li>Adaptation for color-blind users</li>
              <li>Change of font for better readability</li>
              <li>Enlarged cursor, and change of color to black or white</li>
              <li>Enlargement of display to ~200%</li>
              <li>Emphasizing links on the website</li>
              <li>Emphasizing headings on the website</li>
              <li>Presentation of alt text to graphics</li>
              <li>Declaration of accessibility</li>
              <li>Sending of accessibility feedback</li>
            </ul>
            
            <h3>Clarification</h3>
            <p>
              Despite our efforts to apply accessibility to browsing on every webpage, it may be discovered that some of webpages have not yet received accessibility or are not suitable for any available accessibility solution.
            </p>
            <p>
              We are continuing the effort to improve the website's accessibility to the full extent possible, guided by our belief, and by our moral commitment, that the website should be usable by the entire population, including people with disabilities.
            </p>
            
            <h3>Measures to support accessibility</h3>
            <ul>
              <li>Include accessibility as a requirement for all web content. Content must meet WCAG 2.1 AA, and should meet AAA as feasible.</li>
              <li>Assign clear accessibility goals and responsibilities.</li>
              <li>Ensure content authors have access to accessibility knowledge and skills.</li>
              <li>Include accessibility as part of our technology mission.</li>
              <li>Include accessibility throughout our website-related internal policies.</li>
            </ul>
            
            <h3>Conformance status</h3>
            <p>
              The Web Content Accessibility Guidelines (WCAG) standard defines requirements to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. "Fully conforms" means that the content meets all of the WCAG requirements at the specified Level without exceptions. We strive to be/remain fully compliant with an annual review of our website.
            </p>
            
            <h3>Feedback</h3>
            <p>
              We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers.
            </p>
            
            <h3>Compatibility with browsers and assistive technology</h3>
            <p>
              Our website is designed to be compatible with assistive technologies and the last two versions of major browsers.
            </p>
            <p>
              In Internet Explorer 10, 11, and older browsers, some aspects of the website may not display optimally. The website is not designed for Internet Explorer 9 and earlier versions.
            </p>
            
            <h3>Technical specifications</h3>
            <p>
              Our website relies upon the following technologies for conformance with WCAG 2.1:
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SVG</li>
            </ul>
            <p>
              The following technologies are used to improve accessibility and the user experience for everyone:
            </p>
            <ul>
              <li>JavaScript</li>
            </ul>
            
            <h3>Limitations and alternatives</h3>
            <p>
              Several videos on our website use YouTube. As an alternative, the videos are provided as MP4 files on our server.
            </p>
            
            <h3>Assessment approach</h3>
            <p>
              We assess the accessibility of our website by self-evaluation and annual review.
            </p>
            
            <h3>Formal approval of this accessibility statement</h3>
            <p>
              This Accessibility Statement is approved by Chris Tierney, Website Wannabe Technology Support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessibilityStatement;