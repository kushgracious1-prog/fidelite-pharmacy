import { Link } from "wouter";
import { MessageCircle, Phone, ArrowRight, CheckCircle2, MapPin, Clock, ArrowUpRight } from "lucide-react";
import heroPharmacistImg from "@assets/generated_images/hero-pharmacist.jpg";
import pharmacistPortraitImg from "@assets/generated_images/pharmacist-portrait.jpg";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden bg-primary py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 z-10 mix-blend-multiply"></div>
          <img
            src={heroPharmacistImg}
            alt="Pharmacist consulting customer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/10 px-3 py-1 text-sm text-secondary-foreground font-medium backdrop-blur-sm">
              Genuine medicine · Pharmacist-led care
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              A haven of genuine medicine in <span className="text-secondary">Calabar</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
              A Haven of Genuine and Good Quality Medicine from Reliable Sources. Every customer is special to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/2347039104175"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-base font-medium text-white shadow-lg hover:bg-secondary/90 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+2347039104175"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 0703 910 4175
              </a>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row gap-6 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                Mon–Sat: 7:30 AM – 9:30 PM
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                253 Murtala Mohammed Way, Calabar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="bg-white border-b py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center space-y-3 px-4 pt-4 md:pt-0">
              <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg text-primary">Genuine medicine</h3>
              <p className="text-muted-foreground">Sourced from verified, reliable suppliers — no shortcuts.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 px-4 pt-8 md:pt-0">
              <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg text-primary">Reliable sourcing</h3>
              <p className="text-muted-foreground">Careful procurement and correct storage every step of the way.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 px-4 pt-8 md:pt-0">
              <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg text-primary">Pharmacist-led care</h3>
              <p className="text-muted-foreground">Qualified pharmacists guide every prescription and question.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-16">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">What we offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Everyday pharmacy, delivered with care</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From daily essentials to specialist support, we're here to help you and your family stay well.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Prescription Medicines", desc: "Genuine, properly stored prescription medicines dispensed by qualified pharmacists." },
              { title: "Over-the-Counter Medicines", desc: "Everyday relief for common concerns — pain, cough, allergies and more." },
              { title: "Vitamins & Supplements", desc: "Trusted vitamins, minerals and supplements to support your wellness routine." },
              { title: "Baby Care Products", desc: "Gentle, dependable essentials for your baby's daily care." },
              { title: "Medical Devices", desc: "Blood pressure monitors, glucometers, thermometers, and more." },
              { title: "Personal Care Products", desc: "Quality personal hygiene and wellness products." },
              { title: "Cosmetics", desc: "Trusted, friendly cosmetics sourced responsibly." },
              { title: "First Aid Products", desc: "Dressings, antiseptics and emergency essentials." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <h3 className="font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors">
              View all our services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
               <img
                src={pharmacistPortraitImg}
                alt="Pharmacist portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Your trusted partner in health</h2>
              <ul className="space-y-5">
                {[
                  "Genuine medicines from trusted suppliers",
                  "Friendly and qualified pharmacist",
                  "Personalized pharmaceutical care",
                  "Affordable healthcare products",
                  "Professional medication counseling",
                  "Fast customer support via WhatsApp and phone",
                  "Convenient location in Calabar"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mr-4" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision Banner */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Our Mission</h3>
              <p className="text-lg text-slate-200 leading-relaxed font-medium">
                "To improve the health and well-being of our community by providing safe, genuine medicines and professional pharmaceutical care with integrity, compassion, and excellence."
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Our Vision</h3>
              <p className="text-lg text-slate-200 leading-relaxed font-medium">
                "To become one of the most trusted community pharmacies in Cross River State, recognized for quality healthcare services and exceptional customer care."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Location */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-primary">Visit our pharmacy</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      253 Murtala Mohammed Way, by 8 Miles,<br />
                      Ikot Omin, Calabar, Cross River State, 540001,<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Hours</h4>
                    <p className="text-muted-foreground">
                      Monday–Saturday: 7:30 AM – 9:30 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://wa.me/2347039104175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-secondary/90 transition-colors"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+2347039104175"
                  className="inline-flex items-center justify-center rounded-full border border-primary text-primary px-6 py-3 text-sm font-medium hover:bg-primary/5 transition-colors"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  Contact Page
                </Link>
              </div>
            </div>

            <div className="bg-slate-100 min-h-[400px] relative">
               <a
                  href="https://maps.google.com/?q=253+Murtala+Mohammed+Way+Calabar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 hover:bg-slate-200 transition-colors group"
                >
                  <MapPin className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-lg text-primary flex items-center gap-2">
                    Open in Google Maps <ArrowUpRight className="h-5 w-5" />
                  </span>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Closing CTA Banner */}
      <section className="bg-primary py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Health is Our Priority.</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Reach out to our pharmacists today for genuine medicines, professional advice, and care that puts you first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2347039104175"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-secondary px-8 text-lg font-medium text-white shadow-lg hover:bg-secondary/90 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+2347039104175"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-8 text-lg font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
