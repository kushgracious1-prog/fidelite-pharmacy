import { Link, useLocation } from "wouter";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/health-info", label: "Health Info" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
  href="/"
  className="flex items-center gap-3 hover:opacity-90 transition-opacity"
>
  <img
    src="/images/fidelite-logo.png"
    alt="Fidelite Pharmacy Logo"
    className="h-12 w-auto"
  />

  <span className="font-bold text-xl tracking-tight text-primary">
    Fidelite Pharmacy
  </span>
</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+2347039104175"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>0703 910 4175</span>
          </a>
          <a
            href="https://wa.me/2347039104175"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col py-4 px-4 space-y-4 shadow-lg pb-6">
            {NAV_LINKS.map((link) => (
               <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block text-base font-medium py-2 border-b border-muted/50",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
               <a
                href="tel:+2347039104175"
                className="flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-full font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/2347039104175"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
