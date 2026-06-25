import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui";

const industries = ["Beauty & cosmetics", "Fashion", "E-commerce", "Furniture & interiors", "Sport & outdoor", "Premium DTC brands"];

export function ForWhom() {
  return (
    <section id="dla-kogo" className="section scroll-mt-20">
      <div className="shell">
        <Reveal>
          <SectionTitle eyebrow="Dla kogo" title="Dla marek, które chcą wyglądać premium i działać szybciej." />
        </Reveal>

        <Reveal className="mt-12">
          <div className="border-t border-white/10">
            {industries.map((name, index) => (
              <div key={name} className="group flex items-center justify-between border-b border-white/10 py-6 sm:py-8">
                <span className="text-2xl font-semibold tracking-[-0.035em] text-white/70 transition duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-4xl">
                  {name}
                </span>
                <span className="text-xs text-white/25">0{index + 1}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
