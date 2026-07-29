import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, PhoneCall } from "lucide-react";
import { Link } from "wouter";

const FAQS = [
  {
    q: "What are your opening hours?",
    a: "We are open Monday through Saturday from 7:30 AM to 9:30 PM. We are closed on Sundays. For urgent needs outside these hours, please contact us via WhatsApp and we will assist if possible."
  },
  {
    q: "Do I need a prescription for all medicines?",
    a: "No. We stock a wide range of Over-the-Counter (OTC) medicines that do not require a prescription. Our pharmacist can advise you on what is appropriate for your needs."
  },
  {
    q: "Where is Fidelite Pharmacy located?",
    a: "We are located at 253 Murtala Mohammed Way, by 8 Miles, Ikot Omin, Calabar, Cross River State, Nigeria. We are easily accessible for residents in and around the Calabar area."
  },
  {
    q: "Do you offer home delivery?",
    a: "Yes, we offer home delivery within selected areas of Calabar. Delivery times and availability depend on your location. Please contact us on WhatsApp or call 07039104175 to confirm if we deliver to your area."
  },
  {
    q: "Are your medicines genuine?",
    a: "Absolutely. We source all our medicines from verified, reliable suppliers and authorized distributors. We never compromise on quality, and all products are properly stored according to pharmaceutical standards."
  },
  {
    q: "Can I consult with a pharmacist?",
    a: "Yes, our qualified pharmacist is available during business hours for consultation. You can visit us in person, call us at 07039104175, or reach out via WhatsApp for professional advice."
  },
  {
    q: "Do you accept health insurance?",
    a: "We are working towards partnering with major health insurance providers. Please contact us to confirm if your specific insurance plan is currently accepted."
  },
  {
    q: "What is the ART Refill Programme?",
    a: "Our ART Refill Programme supports patients on Antiretroviral Therapy by providing consistent, confidential medication refills and adherence counseling to help maintain viral suppression and improve quality of life."
  },
  {
    q: "Do you sell baby care products?",
    a: "Yes, we stock a range of baby care essentials including baby formula, diapers, wipes, skincare products, and feeding accessories from trusted brands."
  },
  {
    q: "How can I contact Fidelite Pharmacy?",
    a: "You can reach us via phone at 07039104175, WhatsApp (same number), or email at lamlepharma@gmail.com. You can also visit our contact page to send a message directly."
  }
];

export default function FAQ() {
  return (
    <div className="w-full flex flex-col bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Find quick answers to common questions about our services and policies.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 data-[state=open]:bg-slate-50 transition-colors">
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">Still have questions?</h3>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2347039104175"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-base font-medium text-white shadow-sm hover:bg-secondary/90 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Ask on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-primary text-primary bg-white px-8 text-base font-medium hover:bg-slate-50 transition-colors"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Go to Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
