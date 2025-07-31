import { Link } from "wouter";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import OptimizedImage from "./ui/optimized-image";
import olympianLogo from "../assets/olympian-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadAccessibilityTools = () => {
    // Check if already loaded to prevent multiple loads
    if (window.interdeal && document.querySelector('script[src*="accessibility.js"]')) {
      // If already loaded, just open the panel
      if (window.interdeal.open) {
        window.interdeal.open();
      }
      return;
    }

    // Configure EqualWeb settings
    window.interdeal = {
      get sitekey() { return "01c6d0d9029914e951f8fe7cf7bab245" },
      get domains() {
        return {
          "js": "https://cdn.equalweb.com/",
          "acc": "https://access.equalweb.com/"
        }
      },
      "Position": "left",
      "Menulang": "EN",
      "draggable": true,
      "btnStyle": {
        "vPosition": [
          "80%",
          "80%"
        ],
        "margin": [
          "0",
          "0"
        ],
        "scale": [
          "0.5",
          "0.5"
        ],
        "color": {
          "main": "#e6051f",
          "second": "#ffffff"
        },
        "icon": {
          "outline": false,
          "outlineColor": "#ffffff",
          "type": 12,
          "shape": "semicircle"
        }
      },
      "showTooltip": true
    };

    // Dynamically load the EqualWeb script
    const script = document.createElement('script');
    script.src = window.interdeal.domains.js + 'core/5.1.15/accessibility.js';
    script.defer = true;
    script.integrity = 'sha512-IuFBhiBlQSJQU8muh9DCDRAPPfo0jqX3OXD7fBvmzPt7K0InWtrkQ662YgJWeG5zSu94WoonZn61uUUDII00eA==';
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-cfasync', 'true');
    
    // Add event listener to open panel once script loads
    script.onload = () => {
      // Small delay to ensure the widget is fully initialized
      setTimeout(() => {
        if (window.interdeal && window.interdeal.open) {
          window.interdeal.open();
        }
      }, 500);
    };

    document.body.appendChild(script);
  };
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await apiRequest('POST', '/api/subscribe', { email });
      toast({
        title: "Success!",
        description: "You have been subscribed to our newsletter",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 w-48 px-4">
              <Link href="/" onClick={() => window.scrollTo(0, 0)}>
                <OptimizedImage 
                  src={olympianLogo} 
                  alt="Olympian Booster Club Logo" 
                  width={192}
                  height={120}
                  quality={90}
                  format="webp"
                  fit="contain"
                  className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" 
                />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#FF4444] transition-colors">Home</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#FF4444] transition-colors">Contact</Link></li>
              <li>
                <button 
                  onClick={() => {
                    // Load and initialize EqualWeb accessibility tools on-demand
                    loadAccessibilityTools();
                  }}
                  className="flex items-center hover:text-[#FF4444] transition-colors text-left"
                >
                  <i className="fas fa-universal-access mr-2"></i>
                  Accessibility Tools
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">SPORTS</h3>
            <ul className="space-y-2">
              <li><Link href="/football" className="hover:text-[#FF4444] transition-colors">Football</Link></li>
              <li><Link href="/cross-country" className="hover:text-[#FF4444] transition-colors">Cross Country</Link></li>
              <li><Link href="/girls-volleyball" className="hover:text-[#FF4444] transition-colors">Girls Volleyball</Link></li>
              <li><Link href="/wrestling" className="hover:text-[#FF4444] transition-colors">Wrestling</Link></li>
              <li><Link href="/competition-cheer" className="hover:text-[#FF4444] transition-colors">Competition Cheer</Link></li>
              <li><Link href="/sideline-cheer" className="hover:text-[#FF4444] transition-colors">Sideline Cheer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">CONTACT INFO</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2"></i>
                <span>olympianbooster@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lightblue pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Olympian Booster Club. All rights reserved.</p>
          <p className="mt-2">
            <a href="/sitemap.xml" className="hover:text-[#FF4444] transition-colors">Sitemap</a> | 
            <Link href="/privacy-policy" className="hover:text-[#FF4444] transition-colors"> Privacy Policy</Link> | 
            <Link href="/accessibility-statement" className="hover:text-[#FF4444] transition-colors"> Accessibility Statement</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;