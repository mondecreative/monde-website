import { Comparison } from "@/components/Comparison";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ForWhom } from "@/components/ForWhom";
import { FreeSampleCTA } from "@/components/FreeSampleCTA";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Solution } from "@/components/Solution";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <ForWhom />
      <Comparison />
      <Portfolio />
      <Process />
      <FreeSampleCTA />
      <Contact />
      <Footer />
    </main>
  );
}
