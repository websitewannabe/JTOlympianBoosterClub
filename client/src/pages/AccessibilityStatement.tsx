
import { useEffect } from "react";
import { useLocation, Link } from "wouter";
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
        <meta name="description" content="Accessibility Statement for Olympian Booster Club website, including our commitment to digital accessibility and conformance standards." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-[#FF4444] to-[#0094FF]">
        <div className="relative z-20 text-center text-white px-4 max-w-4xl pt-[50px]">
          <h1 className="old-sport-font text-6xl md:text-8xl mb-2 text-white drop-shadow-lg">
            ACCESSIBILITY STATEMENT
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Our commitment to ensuring digital accessibility for all users
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-red-500 text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-red-600 transition-colors text-center"
            >
              Contact Us
            </Link>
            <Link 
              href="/" 
              className="bg-transparent text-white border-2 border-white font-montserrat font-bold py-3 px-8 rounded hover:bg-white hover:text-red-600 transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Declaration of Accessibility Introduction</h2>
              <p className="mb-4">The Internet constitutes the largest resource supporting freedom of information today for the user community in general and for users with disabilities in particular. For that reason we place emphasis on granting equal service to people with disabilities who use information displayed on the website, and on improving their browsing experience. We seek to ensure that our digital services will be accessible to people with disabilities, and accordingly, we have invested in the website's ease of use for people with disabilities, and continue to improve our web pages as needed.</p>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Using the EqualWeb website accessibility tool</h2>
              <p className="mb-4">This website employs the Nagich By Click accessibility software and is connected through a special accessibility server. The software complies with Israeli standard SI 5568 at AA level. The software is subject to the manufacturer's Terms of Use. The website owners and/or agents bear the responsibility for the usage and implementation on the website, including the content displayed on the website under the Terms of Use of the Software.</p>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">How does the site's accessibility work?</h2>
              <p className="mb-4">The website features an accessibility menu. A click on the menu makes accessibility buttons available. After selecting a menu item, the user should wait for the page to be loaded.</p>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">What are the menu items?</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
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
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Clarification</h2>
              <p className="mb-4">Despite our efforts to apply accessibility to browsing on every webpage, it may be discovered that some of webpages have not yet received accessibility or are not suitable for any available accessibility solution.</p>
              <p className="mb-4">We are continuing the effort to improve the website's accessibility to the full extent possible, guided by our belief, and by our moral commitment, that the website should be usable by the entire population, including people with disabilities.</p>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Measures to support accessibility</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Include accessibility as a requirement for all web content. Content must meet WCAG 2.1 AA, and should meet AAA as feasible.</li>
                <li>Assign clear accessibility goals and responsibilities.</li>
                <li>Ensure content authors have access to accessibility knowledge and skills.</li>
                <li>Include accessibility as part of our technology mission.</li>
                <li>Include accessibility throughout our website-related internal policies.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Conformance status</h2>
              <p className="mb-4">The Web Content Accessibility Guidelines (WCAG) standard defines requirements to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. "Fully conforms" means that the content meets all of the WCAG requirements at the specified Level without exceptions. We strive to be/remain fully compliant with an annual review of our website.</p>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Feedback</h2>
              <p className="mb-4">We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers.</p>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Compatibility with browsers and assistive technology</h2>
              <p className="mb-4">Our website is designed to be compatible with assistive technologies and the last two versions of major browsers.</p>
              <p className="mb-4">In Internet Explorer 10, 11, and older browsers, some aspects of the website may not display optimally. The website is not designed for Internet Explorer 9 and earlier versions.</p>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Technical specifications</h2>
              <p className="mb-4">Our website relies upon the following technologies for conformance with WCAG 2.1:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
              <p className="mb-4">The following technologies are used to improve accessibility and the user experience for everyone:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>JavaScript</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Limitations and alternatives</h2>
              <p className="mb-4">Several videos on our website use YouTube. As an alternative, the videos are provided as MP4 files on our server.</p>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Assessment approach</h2>
              <p className="mb-4">Lightbody assesses the accessibility of our website by self-evaluation and annual review.</p>
            </div>

            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Formal approval of this accessibility statement</h2>
              <p className="mb-4">This Accessibility Statement is approved by Chris Tierney, Website Wannabe Technology Support.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AccessibilityStatement;
