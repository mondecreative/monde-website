import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui";

const points = [
  "Pierwsze materiały w 24–48h",
  "Wiele wariantów jednej kampanii",
  "Realistyczne, dopracowane wizuale",
  "Kreacje gotowe do testów Meta Ads",
  "Content do social media",
  "Styl dopasowany do identyfikacji marki",
  "Szybkie iteracje bez nowej sesji",
];

export function Solution() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1b1b1c] via-[#101011] to-[#090909] p-7 sm:p-12 lg:p-16">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <SectionTitle
                eyebrow="Rozwiązanie"
                title="Monde pozwala tworzyć więcej kreacji, szybciej i z mniejszym ryzykiem."
                copy="Zamiast inwestować cały budżet w jedną sesję, budujesz elastyczny system contentu, który nadąża za kampaniami, sezonami i wynikami reklam."
              />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-3 border-b border-white/[0.075] pb-3 text-sm text-white/[0.72]">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#e8e5dd] text-black">
                      <Check size={13} />
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
