
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      sport: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      
      // Create form data for Netlify
      const formData = new FormData();
      formData.append('form-name', 'contact-form');
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      if (data.phone) formData.append('phone', data.phone);
      formData.append('sport', data.sport);
      formData.append('message', data.message);
      
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll respond as soon as possible.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="old-sport-font text-4xl md:text-5xl text-primary mb-4">CONTACT FORM</h2>
          <p className="text-sm text-gray-600 mb-8">
            "*" indicates required fields
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-netlify="true" name="contact-form" method="POST">
              <input type="hidden" name="form-name" value="contact-form" />
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">
                        Name *<br />
                        <span className="text-sm font-normal">First</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="First" 
                          {...field} 
                          name="firstName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">
                        <br />
                        <span className="text-sm font-normal">Last</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Last" 
                          {...field} 
                          name="lastName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Email *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="Email" 
                          {...field} 
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Phone</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Phone" 
                          {...field} 
                          name="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="sport"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Which Sport Are You Inquiring About? *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} name="sport">
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                          <SelectValue placeholder="Select a sport" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="football">Football</SelectItem>
                        <SelectItem value="cheer">Cheer</SelectItem>
                        <SelectItem value="cross-country">Cross Country</SelectItem>
                        <SelectItem value="girls-volleyball">Girls Volleyball</SelectItem>
                        <SelectItem value="wrestling">Wrestling</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Comments *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please let us know what's on your mind. Have a question for us? Ask away."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <div className="text-sm text-gray-500 mt-1">
                      0 of 600 max characters
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
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
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
