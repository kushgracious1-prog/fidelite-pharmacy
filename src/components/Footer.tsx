import { Link } from "wouter";
import { Pill, Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white mb-6 inline-flex hover:opacity-90 transition-opacity">
              <Pill className="h-7 w-7 text-secondary" />
              <span className="font-bold text-2xl tracking-tight">Fidelite Pharmacy</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              "A Haven of Genuine and Good Quality Medicine from Reliable Sources."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/health-info", label: "Health Info" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Prescription Medicines",
                "OTC Medicines",
                "Health Screening",
                "Home Delivery",
                "ART Refill",
                "TB Track & Trace"
              ].map((service) => (
                <li key={service} className="text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Visit & Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Visit & Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>253 Murtala Mohammed Way, by 8 Miles, Ikot Omin, Calabar, Cross River State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+2347039104175" className="hover:text-white transition-colors">0703 910 4175</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:lamlepharma@gmail.com" className="hover:text-white transition-colors">lamlepharma@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>Monday–Saturday: 7:30 AM – 9:30 PM<br/>Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-sm text-slate-500">
          <p>© 2026 Fidelite Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
