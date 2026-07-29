import { Pill, MessageCircle, HeartPulse, Baby, Stethoscope, BriefcaseMedical, PhoneCall, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const SERVICES = [
  {
    title: "Prescription Medicines",
    desc: "We dispense genuine, properly stored prescription medicines sourced from verified suppliers. Our qualified pharmacists review every prescription for accuracy, drug interactions, and patient suitability.",
    features: ["Accurate dispensing", "Drug interaction checks", "Dosage guidance", "Refill reminders"],
    icon: Pill
  },
  {
    title: "Over-the-Counter (OTC) Medicines",
    desc: "From pain relief to cough and cold remedies, we stock a wide range of OTC medicines for everyday health concerns. Our pharmacists are available to help you choose the right product.",
    features: ["Pain management", "Allergy relief", "Digestive health", "Cold & flu remedies"],
    icon: BriefcaseMedical
  },
  {
    title: "Vitamins & Supplements",
    desc: "Trusted vitamins, minerals, and supplements to support your wellness routine. We carry reputable brands and can advise on the right supplements for your specific health needs.",
    features: ["Multivitamins", "Immune support", "Energy & vitality", "Bone health"],
    icon: HeartPulse
  },
  {
    title: "Baby Care Products",
    desc: "Gentle, dependable essentials for your baby's daily care. From diapers and wipes to baby formula and skincare, we stock products from trusted brands.",
    features: ["Baby formula", "Diapers & wipes", "Baby skincare", "Feeding accessories"],
    icon: Baby
  },
  {
    title: "Medical Devices",
    desc: "Blood pressure monitors, glucometers, thermometers, nebulizers, and more. We help you select the right device and provide basic guidance on proper use.",
    features: ["BP monitors", "Blood glucose meters", "Thermometers", "Nebulizers"],
    icon: Stethoscope
  },
  {
    title: "Personal Care Products",
    desc: "Quality personal hygiene and wellness products to keep you feeling your best every day.",
    features: ["Oral care", "Skin care", "Hair care", "Hygiene products"],
    icon: ShieldCheck
  },
  {
    title: "Cosmetics",
    desc: "Trusted, friendly cosmetics sourced responsibly. We select products that meet safety standards and suit various skin types.",
    features: [],
    icon: ShieldCheck
  },
  {
    title: "First Aid Products",
    desc: "Dressings, antiseptics, bandages, and emergency essentials for home, office, and travel. We can help you assemble a complete first aid kit.",
    features: ["Bandages & dressings", "Antiseptics", "First aid kits", "Burn care"],
    icon: BriefcaseMedical
  },
  {
    title: "Health Screening Services",
    desc: "Basic health checks including blood pressure measurement, blood sugar testing, and BMI assessment. Early detection leads to better outcomes.",
    features: ["BP checks", "Blood sugar testing", "BMI assessment"],
    icon: ActivityIcon
  },
  {
    title: "Home Delivery",
    desc: "We deliver genuine medicines and health products to your doorstep within selected areas of Calabar. Contact us on WhatsApp or by phone to confirm delivery to your area.",
    features: ["Selected areas of Calabar", "WhatsApp/phone confirmation"],
    icon: TruckIcon
  },
  {
    title: "ART Refill Programme",
    desc: "We support patients on Antiretroviral Therapy (ART) with consistent, confidential medication refills and adherence counseling to help maintain viral suppression and improve quality of life.",
    features: [],
    icon: ShieldCheck
  },
  {
    title: "TB Track & Trace Referrals",
    desc: "We support TB Track & Trace referral efforts, helping connect patients to the right care and follow-up for tuberculosis treatment and monitoring.",
    features: [],
    icon: ShieldCheck
  },
  {
    title: "Pharmacist Consultation",
    desc: "Our qualified pharmacist is available for professional consultation on medications, dosages, interactions, and general health questions.",
    features: [],
    icon: Stethoscope
  }
];

// Fallback icons for ones not directly imported above
function ActivityIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  );
}
function TruckIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><path d="M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
  );
}


export default function Services() {
  return (
    <div className="w-full flex flex-col bg-slate-50">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive pharmaceutical care for you and your family.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
                  <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    {service.desc}
                  </p>

                  {service.features && service.features.length > 0 && (
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2 mt-2">
                        {service.features.map((feature) => (
                          <span key={feature} className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <a
                      href={`https://wa.me/2347039104175?text=Hi, I would like to inquire about your ${service.title} service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 border-t border-slate-200 text-center">
         <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Need something specific?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Our pharmacists are always ready to help you find the right medication, device, or care plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2347039104175"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-secondary px-8 text-lg font-medium text-white shadow-lg hover:bg-secondary/90 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary/20 bg-white px-8 text-lg font-medium text-primary hover:bg-slate-50 transition-colors"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
