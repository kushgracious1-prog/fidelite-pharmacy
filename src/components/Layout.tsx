import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col flex-auto w-full">
      <Header />
      <main className="flex-1 w-full flex flex-col">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
