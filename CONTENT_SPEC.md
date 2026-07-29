# Fidelite Pharmacy — Content & Structure Spec

Static brochure website for a community pharmacy in Calabar, Nigeria. No backend, no database, no auth. This file is the single source of truth for business facts, copy, and page structure — follow it precisely. You have full creative freedom over visual execution (layout details, typography, spacing, motion, exact component choices) as long as the content below is present and the brand palette is respected.

## Business facts (use verbatim, never invent or alter)

- Name: Fidelite Pharmacy
- Address: 253 Murtala Mohammed Way, by 8 Miles, Ikot Omin, Calabar, Cross River State, 540001, Nigeria
- Phone (display): 0703 910 4175 — (tel link): +2347039104175
- WhatsApp link: https://wa.me/2347039104175
- Email: lamlepharma@gmail.com
- Hours: Monday–Saturday 7:30 AM – 9:30 PM · Sunday: Closed
- Tagline: "A Haven of Genuine and Good Quality Medicine from Reliable Sources."
- Mission: "To improve the health and well-being of our community by providing safe, genuine medicines and professional pharmaceutical care with integrity, compassion, and excellence."
- Vision: "To become one of the most trusted community pharmacies in Cross River State, recognized for quality healthcare services and exceptional customer care."
- Core values: Integrity, Trust, Compassion, Professionalism, Quality, Customer Satisfaction
- Logo concept (no logo file provided — design/generate a simple mark inspired by this, or use a clean wordmark if you prefer): a stylized dove in flight carrying an olive branch, beside a globe icon. Deep blue + green/teal palette.

## Brand palette (use as the base; you may refine exact shades but keep this direction — deep blue + teal, on white/light neutral backgrounds)

- Primary deep blue: #1e3a5f (headings, brand), navy #0f172a (darkest sections/footer)
- Primary bright blue: #2563eb / #3b82f6 (buttons, links, accents)
- Secondary teal/green: #0d9488 / #14b8a6 (WhatsApp CTA, success, secondary accents)
- Neutrals: near-black #111827 text, gray #374151 body text, light gray #f3f4f6/#f9fafb backgrounds
- Font: Inter (400/500/600/700)

## Global elements (every page)

- Header: logo/wordmark (links to home), nav links (Home, About, Services, Health Info, FAQ, Contact), a phone button (tel:+2347039104175) and a WhatsApp button (https://wa.me/2347039104175) on desktop; collapse into a mobile menu below `md` breakpoint.
- Footer (dark navy): brand blurb + tagline, Quick Links (About, Services, Health Info, FAQ, Contact, Privacy Policy, Terms of Service), Our Services list (Prescription Medicines, OTC Medicines, Health Screening, Home Delivery, ART Refill, TB Track & Trace), Visit & Contact (address, phone, email, hours). Bottom bar: "© 2026 Fidelite Pharmacy. All rights reserved."
- A floating WhatsApp button, fixed bottom-right, on every page, linking to https://wa.me/2347039104175.
- All health-related content must carry a short disclaimer that it is educational, not medical advice.
- Generate real, professional-looking images (pharmacist consultations, pharmacy interior, health-tip imagery) with the image generation tool — no placeholder/lorem content, no external stock URLs.

## Pages

### `/` Home
Sections, in order (content only — you decide exact visual treatment):
1. Hero: eyebrow "Genuine medicine · Pharmacist-led care", headline "A haven of genuine medicine in Calabar." (Calabar can be visually emphasized), subheadline: the tagline sentence + "Every customer is special to us.", primary CTA "Chat on WhatsApp" (wa.me link), secondary CTA "Call 0703 910 4175" (tel link), plus hours and address as small meta info. Include a generated hero image of a pharmacist consulting a customer.
2. Trust strip (3 items): Genuine medicine — "Sourced from verified, reliable suppliers — no shortcuts."; Reliable sourcing — "Careful procurement and correct storage every step of the way."; Pharmacist-led care — "Qualified pharmacists guide every prescription and question."
3. Services overview — eyebrow "What we offer", title "Everyday pharmacy, delivered with care", subtitle "From daily essentials to specialist support, we're here to help you and your family stay well." Grid of these 8 services (title — one-liner):
   - Prescription Medicines — "Genuine, properly stored prescription medicines dispensed by qualified pharmacists."
   - Over-the-Counter Medicines — "Everyday relief for common concerns — pain, cough, allergies and more."
   - Vitamins & Supplements — "Trusted vitamins, minerals and supplements to support your wellness routine."
   - Baby Care Products — "Gentle, dependable essentials for your baby's daily care."
   - Medical Devices — "Blood pressure monitors, glucometers, thermometers, and more."
   - Personal Care Products — "Quality personal hygiene and wellness products."
   - Cosmetics — "Trusted, friendly cosmetics sourced responsibly."
   - First Aid Products — "Dressings, antiseptics and emergency essentials."
   Link below grid to `/services`.
4. Why choose us — title "Your trusted partner in health", checklist: Genuine medicines from trusted suppliers; Friendly and qualified pharmacist; Personalized pharmaceutical care; Affordable healthcare products; Professional medication counseling; Fast customer support via WhatsApp and phone; Convenient location in Calabar. Include a generated image of a pharmacist.
5. Mission & Vision banner (dark section) — show the Mission and Vision statements verbatim.
6. Location — address, hours, CTAs (WhatsApp, call, "Contact page" → `/contact`), and an embedded Google Map (use an `<iframe>` with a Calabar-area Google Maps embed src, or a static "Open in Google Maps" link to `https://maps.google.com/?q=253+Murtala+Mohammed+Way+Calabar` if you prefer not to hardcode a fragile embed URL — a linked static map preview is acceptable).
7. Closing CTA banner — "Your Health is Our Priority." + supporting line encouraging contact, WhatsApp and Call CTAs.

### `/about`
- Hero: "About Fidelite Pharmacy"
- Our Story (use these three paragraphs verbatim):
  1. "Fidelite Pharmacy is a community pharmacy committed to providing genuine, high-quality medicines and professional pharmaceutical care to individuals and families in Calabar. As a growing pharmacy, we believe that every customer deserves personalized attention, trusted healthcare advice, and affordable access to quality medications."
  2. "Our mission is to promote healthier communities through reliable pharmaceutical services, patient education, and compassionate care. We understand that health is personal, and we treat every customer with the dignity and attention they deserve."
  3. "Located at 253 Murtala Mohammed Way, by 8 Miles, Ikot Omin, we are easily accessible to residents across Calabar and surrounding areas. Our qualified pharmacists are always available to answer your questions, review your prescriptions, and guide you toward better health outcomes."
  Include a generated image of the pharmacy interior.
- Mission / Vision / Values — three cards using the Mission, Vision statements and the six core values as small tags.
- Meet Our Pharmacist — a card: "Lead Pharmacist", role "Registered Pharmacist & Founder", bio "With years of experience in community pharmacy practice, our lead pharmacist is dedicated to ensuring every patient receives accurate, compassionate, and personalized care.", qualifications "B.Pharm, PCN Certified".

### `/services`
Hero: "Our Services" / "Comprehensive pharmaceutical care for you and your family". Then a detailed grid covering all of the following (title — description — feature tags where given):
1. Prescription Medicines — "We dispense genuine, properly stored prescription medicines sourced from verified suppliers. Our qualified pharmacists review every prescription for accuracy, drug interactions, and patient suitability." Features: Accurate dispensing, Drug interaction checks, Dosage guidance, Refill reminders.
2. Over-the-Counter (OTC) Medicines — "From pain relief to cough and cold remedies, we stock a wide range of OTC medicines for everyday health concerns. Our pharmacists are available to help you choose the right product." Features: Pain management, Allergy relief, Digestive health, Cold & flu remedies.
3. Vitamins & Supplements — "Trusted vitamins, minerals, and supplements to support your wellness routine. We carry reputable brands and can advise on the right supplements for your specific health needs." Features: Multivitamins, Immune support, Energy & vitality, Bone health.
4. Baby Care Products — "Gentle, dependable essentials for your baby's daily care. From diapers and wipes to baby formula and skincare, we stock products from trusted brands." Features: Baby formula, Diapers & wipes, Baby skincare, Feeding accessories.
5. Medical Devices — "Blood pressure monitors, glucometers, thermometers, nebulizers, and more. We help you select the right device and provide basic guidance on proper use." Features: BP monitors, Blood glucose meters, Thermometers, Nebulizers.
6. Personal Care Products — "Quality personal hygiene and wellness products to keep you feeling your best every day." Features: Oral care, Skin care, Hair care, Hygiene products.
7. Cosmetics — "Trusted, friendly cosmetics sourced responsibly. We select products that meet safety standards and suit various skin types."
8. First Aid Products — "Dressings, antiseptics, bandages, and emergency essentials for home, office, and travel. We can help you assemble a complete first aid kit." Features: Bandages & dressings, Antiseptics, First aid kits, Burn care.
9. Health Screening Services — "Basic health checks including blood pressure measurement, blood sugar testing, and BMI assessment. Early detection leads to better outcomes." Features: BP checks, Blood sugar testing, BMI assessment.
10. Home Delivery — "We deliver genuine medicines and health products to your doorstep within selected areas of Calabar. Contact us on WhatsApp or by phone to confirm delivery to your area." Features: Selected areas of Calabar, WhatsApp/phone confirmation.
11. ART Refill Programme — "We support patients on Antiretroviral Therapy (ART) with consistent, confidential medication refills and adherence counseling to help maintain viral suppression and improve quality of life."
12. TB Track & Trace Referrals — "We support TB Track & Trace referral efforts, helping connect patients to the right care and follow-up for tuberculosis treatment and monitoring."
13. Pharmacist Consultation — "Our qualified pharmacist is available for professional consultation on medications, dosages, interactions, and general health questions."
Each card should have a WhatsApp inquiry link. End with a CTA to contact/WhatsApp.

### `/health-info`
Hero: "Health Tips" / educational content, framed as general wellness information (not medical advice — include a disclaimer). Build a grid of 6 short health-tip articles/cards (title + a short 2-4 sentence body each, generated supporting image per card):
1. "How to Store Your Medicines Properly" — heat, humidity and light can degrade medicines; recommend cool, dry, out-of-reach storage suited to Calabar's tropical climate.
2. "Getting the Most from Your Vitamins & Supplements" — tips on taking supplements consistently, with food where appropriate, and not replacing a balanced diet.
3. "Why Regular Blood Pressure Checks Matter" — encourage routine BP checks, especially for adults over 40 or with a family history of hypertension.
4. "Caring for Your Baby's Health Essentials" — basics of choosing baby care products, hygiene, and when to seek pediatric advice.
5. "Building a Simple First Aid Kit at Home" — key items every household should keep on hand for minor injuries.
6. "Understanding Diabetes Monitoring at Home" — basics of using a glucometer, tracking readings, and when to consult a pharmacist or doctor.
Each card should end with a line inviting the reader to speak with the pharmacist for personalized advice, and link to WhatsApp/contact.

### `/faq`
Hero: "Frequently Asked Questions". Build an accordion with these Q&As (verbatim):
- Q: What are your opening hours? A: We are open Monday through Saturday from 7:30 AM to 9:30 PM. We are closed on Sundays. For urgent needs outside these hours, please contact us via WhatsApp and we will assist if possible.
- Q: Do I need a prescription for all medicines? A: No. We stock a wide range of Over-the-Counter (OTC) medicines that do not require a prescription. Our pharmacist can advise you on what is appropriate for your needs.
- Q: Where is Fidelite Pharmacy located? A: We are located at 253 Murtala Mohammed Way, by 8 Miles, Ikot Omin, Calabar, Cross River State, Nigeria. We are easily accessible for residents in and around the Calabar area.
- Q: Do you offer home delivery? A: Yes, we offer home delivery within selected areas of Calabar. Delivery times and availability depend on your location. Please contact us on WhatsApp or call 07039104175 to confirm if we deliver to your area.
- Q: Are your medicines genuine? A: Absolutely. We source all our medicines from verified, reliable suppliers and authorized distributors. We never compromise on quality, and all products are properly stored according to pharmaceutical standards.
- Q: Can I consult with a pharmacist? A: Yes, our qualified pharmacist is available during business hours for consultation. You can visit us in person, call us at 07039104175, or reach out via WhatsApp for professional advice.
- Q: Do you accept health insurance? A: We are working towards partnering with major health insurance providers. Please contact us to confirm if your specific insurance plan is currently accepted.
- Q: What is the ART Refill Programme? A: Our ART Refill Programme supports patients on Antiretroviral Therapy by providing consistent, confidential medication refills and adherence counseling to help maintain viral suppression and improve quality of life.
- Q: Do you sell baby care products? A: Yes, we stock a range of baby care essentials including baby formula, diapers, wipes, skincare products, and feeding accessories from trusted brands.
- Q: How can I contact Fidelite Pharmacy? A: You can reach us via phone at 07039104175, WhatsApp (same number), or email at lamlepharma@gmail.com. You can also visit our contact page to send a message directly.
End with a "Still have questions?" prompt linking to Contact and WhatsApp.

### `/contact`
Hero: "Contact Us". Two-column layout:
- Info side: four contact cards — Visit Us (address + "Get directions" link to `https://maps.google.com/?q=253+Murtala+Mohammed+Way+Calabar`), Call Us (phone + hours), WhatsApp (wa.me link + "fastest response" note), Email (mailto link).
- Form side: a contact form with fields — Full Name (required), Email Address (required, valid email), Phone Number (optional), Subject (select: General Inquiry, Prescription Question, Product Availability, Home Delivery, Health Consultation, Feedback), Message (required, min 10 chars). **Important: there is no backend/API and no Formspree account configured for this build.** Implement the form so that on submit, it validates client-side, then opens the user's email client via a `mailto:lamlepharma@gmail.com?subject=...&body=...` link pre-filled with the form data (encode the fields into the mailto body/subject), and show a success confirmation message in the UI. Do not call any external form API. Add a small privacy note below the form linking to `/privacy`.
- Below: a location section (map embed or a static "Open in Google Maps" card, consistent with the homepage location section).

### `/privacy`
Long-form static policy page (prose styling, sectioned headings), covering: Introduction; Information We Collect (contact form data, basic usage/analytics data); How We Use Your Information (respond to inquiries, improve the site); Data Protection (we do not sell or share personal data); Cookies (minimal cookies for site functionality only); Third-Party Services (Google Maps, WhatsApp); Your Rights (access, correction, deletion requests via email); Contact (privacy questions to lamlepharma@gmail.com). Show "Last updated: January 2026".

### `/terms`
Long-form static terms page, covering: Acceptance of Terms; Medical Disclaimer (all health/wellness content on this site is educational only, not medical advice, and does not replace consultation with a qualified healthcare professional or pharmacist); Prescription Requirements (a valid prescription is required for prescription-only medicines); Product Information (descriptions provided in good faith and to the best of our knowledge); Limitation of Liability; Changes to Terms; Governing Law (laws of Nigeria, Cross River State); Contact Information. Show "Last updated: January 2026".

### 404 / not found
A simple, on-brand "Page not found" state with a link back home and a link to `/contact`. (The scaffold already has a `not-found` page/route wired in `App.tsx` — restyle it to match the brand rather than replacing the routing.)

## Non-goals (do not build)

- No login, accounts, or admin area.
- No database, no backend API calls, no payment/checkout flow.
- No CMS — all content is hardcoded from this spec.
