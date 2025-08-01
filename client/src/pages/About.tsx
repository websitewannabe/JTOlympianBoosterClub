import { useEffect } from "react";
import { useLocation } from "wouter";
import MissionSection from "@/components/MissionSection";
import BoardMembersSection from "@/components/BoardMembersSection";
import { Helmet } from "react-helmet";

const About = () => {
  const [location, setLocation] = useLocation();

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
        <link rel="canonical" href="https://olympianboosterclub.com/about" />
        <title>About Us | Olympian Booster Club - Supporting Youth Athletics Since 1985</title>
        <meta name="description" content="Learn about the Olympian Booster Club's mission, board members, and 40-year history supporting youth athletics in Jim Thorpe and Carbon County, PA since 1985." />
        <meta name="keywords" content="Olympian Booster Club about, youth sports history, Carbon County booster club, athletic support organization, board members" />
        
        {/* Open Graph metadata */}
        <meta property="og:title" content="About Us | Olympian Booster Club - Supporting Youth Athletics Since 1985" />
        <meta property="og:description" content="Learn about the Olympian Booster Club's mission, board members, and 40-year history supporting youth athletics in Jim Thorpe and Carbon County, PA since 1985." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://olympianboosterclub.com/about" />
        <meta property="og:image" content="https://olympianboosterclub.com/olympian-logo.png" />
      </Helmet>
      
      <div className="pt-10 bg-lightgray">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-montserrat font-bold text-4xl text-primary mb-4 text-center">ABOUT US</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-10"></div>
        </div>
      </div>
      
      <MissionSection />
      
      <section id="bylaws" className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-primary mb-2">BYLAWS & POLICIES</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <p className="mb-6">The Olympian Booster Club operates under a set of bylaws and policies that guide our organization's activities and governance. These documents ensure transparency, accountability, and fairness in all our operations.</p>
            
            <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Our Bylaws Include:</h3>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Organization purpose and mission</li>
              <li>Membership eligibility and dues</li>
              <li>Board structure and responsibilities</li>
              <li>Election procedures for officers</li>
              <li>Financial management and reporting</li>
              <li>Meeting schedules and procedures</li>
              <li>Amendment processes</li>
            </ul>
            
            <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Key Policies:</h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Conflict of interest policy</li>
              <li>Financial controls and expenditure approvals</li>
              <li>Fundraising guidelines</li>
              <li>Communication protocols</li>
              <li>Code of conduct for members and board</li>
            </ul>
            
            <div className="mt-8 text-center">
              <a 
                href="#download-bylaws" 
                className="inline-block bg-primary text-white font-montserrat font-semibold py-2 px-6 rounded-md hover:bg-darkblue transition-colors"
              >
                DOWNLOAD BYLAWS
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <BoardMembersSection />
      
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-primary mb-2">OUR HISTORY</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <p className="mb-6">The Olympian Booster Club was established in 1985 by a dedicated group of parents who recognized the need for additional support for the athletic programs at Olympian High School.</p>
            
            <p className="mb-6">Over the past decades, our organization has grown from a small group of volunteers to a robust network of parents, alumni, and community members all committed to enhancing the athletic experience for our student-athletes.</p>
            
            <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Key Milestones:</h3>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>1985: Founding of the Olympian Booster Club</li>
              <li>1990: First annual fundraising golf tournament</li>
              <li>1998: Established scholarship program for graduating athletes</li>
              <li>2005: Helped fund major renovation of athletic facilities</li>
              <li>2010: Celebrated 25th anniversary with alumni reunion event</li>
              <li>2015: Launched online membership platform</li>
              <li>2020: Adapted to virtual support during pandemic challenges</li>
              <li>2023: Continuing our tradition of excellence and support</li>
            </ul>
            
            <p>Throughout our history, the Olympian Booster Club has raised over $1.5 million to support athletic programs, provided hundreds of scholarships, and fostered a strong sense of community and school spirit that extends beyond the playing fields.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
