import { Link } from "wouter";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import olympianLogo from "../assets/olympian-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
              <img src={olympianLogo} alt="Olympian Booster Club Logo" className="w-full h-auto" />
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#FF4444] transition-colors">Home</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF4444] transition-colors">Contact</Link></li>
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
            <Link href="/privacy" className="hover:text-[#FF4444] transition-colors">Privacy Policy</Link> | 
            <Link href="/accessibility-statement" className="hover:text-[#FF4444] transition-colors"> Accessibility Statement</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;