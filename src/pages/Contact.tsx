import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Prescription Question",
  "Product Availability",
  "Home Delivery",
  "Health Consultation",
  "Feedback"
];

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    // Construct pre-filled message for WhatsApp
    const text = `Hello Fidelite Pharmacy,\n\nI have an inquiry from your website:\n\n*Name:* ${data.fullName}\n*Email:* ${data.email}\n*Phone:* ${data.phone || 'Not provided'}\n*Subject:* ${data.subject}\n\n*Message:*\n${data.message}`;

    const encodedText = encodeURIComponent(text);
    const phoneNumber = "1234567890"; // Easy-to-replace placeholder phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Show success UI
    setIsSuccess(true);
    form.reset();

    // Reset success message after a few seconds
    setTimeout(() => setIsSuccess(false), 8000);
  }

  return (
    <div className="w-full flex flex-col bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            We're here to help. Reach out to our pharmacy team for inquiries, prescriptions, or advice.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

            {/* Info Side (Col 1-5) */}
            <div className="lg:col-span-5 space-y-6">

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Visit Us</h3>
                <p className="text-slate-600 mb-4">
                  253 Murtala Mohammed Way, by 8 Miles,<br />
                  Ikot Omin, Calabar, Cross River State, 540001
                </p>
                <a
                  href="https://maps.google.com/?q=253+Murtala+Mohammed+Way+Calabar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 mt-auto"
                >
                  Get directions <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </a>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
                <p className="text-slate-600 mb-4 text-lg">0703 910 4175</p>
                <p className="text-sm text-slate-500 mt-auto">
                  Mon–Sat: 7:30 AM – 9:30 PM
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#25D366]/10 p-8 rounded-3xl border border-[#25D366]/20 flex flex-col items-center text-center">
                  <MessageCircle className="h-8 w-8 text-[#25D366] mb-4" />
                  <h3 className="font-bold text-[#128C7E] mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/2347039104175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#128C7E] hover:underline"
                  >
                    Chat now (fastest response)
                  </a>
                </div>

                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 flex flex-col items-center text-center">
                  <Mail className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-primary mb-2">Email</h3>
                  <a
                    href="mailto:lamlepharma@gmail.com"
                    className="text-sm font-medium text-primary hover:underline break-all"
                  >
                    lamlepharma@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Form Side (Col 6-12) */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-primary mb-8">Send us a message</h2>

              {isSuccess ? (
                <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8 text-center flex flex-col items-center">
                  <CheckCircle2 className="h-16 w-16 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Redirecting to WhatsApp...</h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    We have opened WhatsApp in a new tab with your message pre-filled. If it didn't open, please use the direct chat link or contact us directly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-medium text-primary hover:text-secondary underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="h-12 bg-slate-50 border-slate-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" className="h-12 bg-slate-50 border-slate-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="0801 234 5678" className="h-12 bg-slate-50 border-slate-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Subject *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-slate-50 border-slate-200">
                                  <SelectValue placeholder="Select a topic" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {SUBJECT_OPTIONS.map((opt) => (
                                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help you today?"
                              className="min-h-[150px] resize-y bg-slate-50 border-slate-200"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
                    >
                      Send via WhatsApp
                    </button>

                    <p className="text-center text-xs text-slate-500 pt-4">
                      By submitting this form, you agree to our <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                    </p>
                  </form>
                </Form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] relative border-t border-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.2415174092476!2d8.3516629!3d4.9702521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067873b3133ffef%3A0xe54be003fb716cb7!2s253%20Murtala%20Muhammed%20Hwy%2C%20540101%2C%20Calabar!5e0!3m2!1sen!2sng!4v1710500000000!5m2!1sen!2sng"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Fidelite Pharmacy Google Maps Location"
        ></iframe>
      </section>

    </div>
  );
}
