export default function Privacy() {
  return (
    <div className="w-full flex flex-col bg-slate-50 min-h-screen">
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-300">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-secondary/80">
            <h2>Introduction</h2>
            <p>
              At Fidelite Pharmacy, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with us.
            </p>

            <h2>Information We Collect</h2>
            <p>
              As a static brochure website, we collect very limited information:
            </p>
            <ul>
              <li><strong>Contact Form Data:</strong> If you use our contact form to send us an email, the information you provide (such as your name, email address, phone number, and message content) is transferred to your local email client and sent directly to us. We do not store this data in any web database.</li>
              <li><strong>Basic Usage Data:</strong> We may use basic analytics to understand how visitors interact with our site, which includes non-personally identifiable information such as browser type, device type, and pages visited.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect solely to:
            </p>
            <ul>
              <li>Respond to your inquiries, questions, or requests for professional advice.</li>
              <li>Improve our website functionality and user experience.</li>
              <li>Provide customer service and support.</li>
            </ul>

            <h2>Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or disclosure. <strong>We do not sell, trade, or otherwise transfer your personal information to outside parties.</strong>
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use minimal cookies necessary for site functionality. We do not use intrusive tracking cookies or third-party advertising cookies.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Our website includes links to third-party services, such as:
            </p>
            <ul>
              <li><strong>Google Maps:</strong> Used to provide location directions.</li>
              <li><strong>WhatsApp:</strong> Used for direct messaging and fast customer support.</li>
            </ul>
            <p>
              Please note that when you use these third-party links, you are governed by their respective privacy policies. We are not responsible for the privacy practices of these external sites.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal data you have provided to us via email. To exercise these rights, please contact us at the email address provided below.
            </p>

            <h2>Contact</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at: <a href="mailto:lamlepharma@gmail.com">lamlepharma@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
