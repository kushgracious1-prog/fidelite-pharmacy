import pharmacyInteriorImg from "@assets/generated_images/pharmacy-interior.jpg";

export default function About() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Fidelite Pharmacy</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Your trusted community pharmacy in Calabar, dedicated to genuine medicine and compassionate care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-primary mb-8">Our Story</h2>
              <p>
                Fidelite Pharmacy is a community pharmacy committed to providing genuine, high-quality medicines and professional pharmaceutical care to individuals and families in Calabar. As a growing pharmacy, we believe that every customer deserves personalized attention, trusted healthcare advice, and affordable access to quality medications.
              </p>
              <p>
                Our mission is to promote healthier communities through reliable pharmaceutical services, patient education, and compassionate care. We understand that health is personal, and we treat every customer with the dignity and attention they deserve.
              </p>
              <p>
                Located at 253 Murtala Mohammed Way, by 8 Miles, Ikot Omin, we are easily accessible to residents across Calabar and surrounding areas. Our qualified pharmacists are always available to answer your questions, review your prescriptions, and guide you toward better health outcomes.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
              <img
                src={pharmacyInteriorImg}
                alt="Pharmacy Interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                   1
                </span>
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed flex-1">
                "To improve the health and well-being of our community by providing safe, genuine medicines and professional pharmaceutical care with integrity, compassion, and excellence."
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
               <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                   2
                </span>
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed flex-1">
                "To become one of the most trusted community pharmacies in Cross River State, recognized for quality healthcare services and exceptional customer care."
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
               <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                   3
                </span>
                Core Values
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Integrity", "Trust", "Compassion", "Professionalism", "Quality", "Customer Satisfaction"].map((value) => (
                  <span key={value} className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Pharmacist */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-primary text-white rounded-3xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row gap-8 items-center">
              <div className="h-32 w-32 md:h-40 md:w-40 bg-white/10 rounded-full flex items-center justify-center shrink-0 border-4 border-white/20 text-4xl font-bold text-white shadow-inner">
                LP
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary-foreground mb-2">
                  Lead Pharmacist
                </div>
                <h2 className="text-3xl font-bold">Registered Pharmacist & Founder</h2>
                <p className="text-lg text-slate-200 leading-relaxed">
                  With years of experience in community pharmacy practice, our lead pharmacist is dedicated to ensuring every patient receives accurate, compassionate, and personalized care.
                </p>
                <div className="pt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                   <span className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-sm font-semibold text-white">
                    B.Pharm
                  </span>
                  <span className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-sm font-semibold text-white">
                    PCN Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
