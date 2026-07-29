import { Link } from "wouter";
import { AlertCircle, ArrowLeft, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-slate-50 py-20 px-4 text-center">
      <div className="max-w-md bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
          <AlertCircle className="h-10 w-10" />
        </div>

        <h1 className="text-3xl font-bold text-primary mb-4">Page not found</h1>

        <p className="text-slate-600 mb-8 leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
          If you're looking for a specific service or medicine, our pharmacists can help.
        </p>

        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary text-base font-medium text-white shadow-sm hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <PhoneCall className="mr-2 h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
