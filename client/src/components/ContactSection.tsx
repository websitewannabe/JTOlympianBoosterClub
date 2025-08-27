import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    let formatted = '';
    if (digits.length > 0) {
      formatted = `(${digits.slice(0, 3)}`;
      if (digits.length >= 4) {
        formatted += `) ${digits.slice(3, 6)}`;
        if (digits.length >= 7) {
          formatted += `-${digits.slice(6, 10)}`;
        }
      }
    }
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatPhoneNumber(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Don't prevent default - let Netlify handle the submission
    setIsSubmitting(true);
    
    // The form will submit naturally to Netlify
    // We'll show success message after a brief delay
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll respond as soon as possible.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
          <p className="text-sm text-gray-500">
            "*" indicates required fields
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700 mb-4">
                  Thank you for contacting the Olympian Booster Club. We've received your message and will respond as soon as possible.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#023FA6] hover:bg-[#012f84] text-white"
                >
                  Send Another Message
                </Button>
              </div>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6" 
              data-netlify="true" 
              name="contact-form" 
              method="POST"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name *<br />
                    <span className="text-sm font-normal">First</span>
                  </label>
                  <input 
                    type="text"
                    name="firstName"
                    placeholder="First"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <br />
                    <span className="text-sm font-normal">Last</span>
                  </label>
                  <input 
                    type="text"
                    name="lastName"
                    placeholder="Last"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input 
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input 
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  maxLength={14}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Which Sport Are You Inquiring About? *</label>
                <select 
                  name="sport"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a sport</option>
                  <option value="football">Football</option>
                  <option value="cheer">Cheer</option>
                  <option value="cross-country">Cross Country</option>
                  <option value="girls-volleyball">Girls Volleyball</option>
                  <option value="wrestling">Wrestling</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Comments *</label>
                <textarea 
                  name="message"
                  placeholder="Please let us know what's on your mind. Have a question for us? Ask away."
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                ></textarea>
                <div className="text-sm text-gray-500 mt-1">
                  0 of 600 max characters
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-2 rounded-md transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;