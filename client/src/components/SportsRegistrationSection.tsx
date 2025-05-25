import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const sportsRegistrationSchema = z.object({
  sport: z.string().min(1, { message: "Please select a sport." }),
});

type SportsRegistrationData = z.infer<typeof sportsRegistrationSchema>;

const SportsRegistrationSection = () => {
  const [step, setStep] = useState(1);

  const form = useForm<SportsRegistrationData>({
    resolver: zodResolver(sportsRegistrationSchema),
    defaultValues: {
      sport: "",
    },
  });

  const sports = [
    "Competition Cheer (OBC Elite)",
    "Sideline Cheer",
    "Cross Country",
    "Football",
    "Girls Volleyball", 
    "Wrestling"
  ];

  const onSubmit = (data: SportsRegistrationData) => {
    console.log("Sports registration data:", data);
    // Handle form submission here
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleSaveAndContinue = () => {
    // Handle save and continue later
    console.log("Saved for later");
  };

  return (
    <section className="py-16 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="old-sport-font text-4xl md:text-5xl text-primary mb-8">
              SPORTS<br/>REGISTRATION
            </h2>
            
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-gray-700 text-lg mb-6">
                We are currently accepting registration for Football & Cheer, all other registrations are currently closed. You can register for Football or Cheer below or contact us for information on any other sport registration.
              </p>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScFeMHw-NItJz6_hFOvl4YtcCbIViKKX7WAR5tnniMn_6KMlg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FF4444] hover:bg-red-600 text-white font-montserrat font-bold py-3 px-8 rounded-md transition-colors"
              >
                Register for 2025 Football & Cheer
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default SportsRegistrationSection;