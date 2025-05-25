import { Link } from "wouter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

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
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">OLYMPIAN BOOSTER CLUB</h3>
            <p className="mb-4">Supporting Olympian High School Athletics since 1985.</p>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/membership" className="hover:text-secondary transition-colors">Membership</Link></li>
              <li><Link href="/events" className="hover:text-secondary transition-colors">Events</Link></li>
              <li><Link href="/news" className="hover:text-secondary transition-colors">News</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">CONTACT INFO</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2"></i>
                <span>olympianbooster@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span>Jim Thorpe, PA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-lightblue pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Olympian Booster Club. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-secondary transition-colors"> Accessibility Statement</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
