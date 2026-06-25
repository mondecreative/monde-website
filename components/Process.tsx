import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui";

const steps = [
  "Wysyłasz produkt, link lub zdjęcia",
  "Analizujemy styl marki i cel kreacji",
  "Tworzymy pierwsze warianty",
  "Dopasowujemy detale",
  "Otrzymujesz gotowe materiały do reklam, social media lub strony",
];

export function Process() {
  return (
    <section id="proces" className="section scroll-mt-20">
      <div className="shell">
        <Reveal>
          <SectionTitle
            eyebrow="Proces"
            title="Prosto od briefu do gotowych materiałów."
            copy="Bez wielodniowej organizacji. Pracujemy sprawnie, transparentnie i w rytmie Twojej marki."
          />
        </Reveal>

        <Reveal className="mt-14 lg:ml-auto lg:max-w-4xl">
          <div>
            {steps.map((step, index) => (
              <div key={step} className="grid grid-cols-[44px_1fr] gap-3 border-t border-white/10 py-7 last:border-b sm:grid-cols-[80px_1fr] sm:py-9">
                <span className="text-xs text-white/30">0{index + 1}</span>
                <h3 className="text-xl font-semibold tracking-[-0.025em] text-white/[0.86] sm:text-3xl">{step}</h3>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
