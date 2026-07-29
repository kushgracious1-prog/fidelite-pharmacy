import { Disclaimer } from "@/components/Disclaimer";
import { ArrowRight } from "lucide-react";
import healthTipStorageImg from "@assets/generated_images/health-tip-storage.jpg";
import healthTipVitaminsImg from "@assets/generated_images/health-tip-vitamins.jpg";
import healthTipBpImg from "@assets/generated_images/health-tip-bp.jpg";
import healthTipBabyImg from "@assets/generated_images/health-tip-baby.jpg";
import healthTipFirstaidImg from "@assets/generated_images/health-tip-firstaid.jpg";
import healthTipDiabetesImg from "@assets/generated_images/health-tip-diabetes.jpg";

const TIPS = [
  {
    title: "How to Store Your Medicines Properly",
    body: "Heat, humidity, and light can degrade medicines quickly. We recommend cool, dry, out-of-reach storage suited to Calabar's tropical climate—never in the bathroom or near a window.",
    image: healthTipStorageImg
  },
  {
    title: "Getting the Most from Your Vitamins & Supplements",
    body: "Take your supplements consistently, often with food to improve absorption. Remember that supplements are designed to support, not replace, a healthy and balanced diet.",
    image: healthTipVitaminsImg
  },
  {
    title: "Why Regular Blood Pressure Checks Matter",
    body: "Routine blood pressure checks are vital, especially for adults over 40 or those with a family history of hypertension. Early detection helps prevent serious long-term health issues.",
    image: healthTipBpImg
  },
  {
    title: "Caring for Your Baby's Health Essentials",
    body: "Choose gentle, hypoallergenic baby care products. Maintain proper hygiene with essentials, and always know when to seek professional pediatric advice for common baby ailments.",
    image: healthTipBabyImg
  },
  {
    title: "Building a Simple First Aid Kit at Home",
    body: "Every household should keep key items on hand for minor injuries. Essential supplies include sterile dressings, antiseptics, bandages, and basic pain relievers.",
    image: healthTipFirstaidImg
  },
  {
    title: "Understanding Diabetes Monitoring at Home",
    body: "Learn the basics of using a glucometer and tracking your readings. Consistent monitoring helps manage diabetes effectively, but always consult a pharmacist or doctor for guidance.",
    image: healthTipDiabetesImg
  }
];

export default function HealthInfo() {
  return (
    <div className="w-full flex flex-col bg-slate-50">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Health Tips</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            General wellness information and practical tips for you and your family.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <Disclaimer />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TIPS.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full group hover:shadow-md transition-all">
                <div className="h-56 w-full overflow-hidden bg-slate-200">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">{tip.title}</h3>
                  <p className="text-slate-600 mb-6 flex-1">
                    {tip.body}
                  </p>
                  <div className="pt-6 border-t border-slate-100 mt-auto">
                    <p className="text-sm font-medium text-slate-800 mb-3">
                      Speak with our pharmacist for personalized advice.
                    </p>
                    <a
                      href="https://wa.me/2347039104175"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Chat on WhatsApp <ArrowRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
