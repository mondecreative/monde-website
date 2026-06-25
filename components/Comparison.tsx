import { Check, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui";

const rows = [
  ["Studio / ekipa / modele", "Bez fizycznej produkcji"],
  ["Kilka dni lub tygodni", "24–48h"],
  ["Wysoki koszt", "Niższy budżet"],
  ["Mało wariantów", "Wiele wersji do testowania"],
  ["Trudne poprawki", "Szybkie iteracje"],
  ["Jedna sesja", "Stały dopływ contentu"],
];

export function Comparison() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <SectionTitle eyebrow="Porównanie" title="Mniej logistyki. Więcej materiałów, które możesz wykorzystać." />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/[0.22]">
            <div className="grid grid-cols-2 bg-white/[0.045] text-[10px] font-semibold uppercase tracking-[0.16em] text-white/[0.42] sm:text-xs">
              <div className="p-4 sm:p-7">Tradycyjna produkcja</div>
              <div className="border-l border-white/10 p-4 text-white/[0.82] sm:p-7">Monde</div>
            </div>

            {rows.map(([oldWay, monde]) => (
              <div key={oldWay} className="grid grid-cols-2 border-t border-white/10 text-sm sm:text-base">
                <div className="flex items-center gap-3 p-4 text-white/[0.38] sm:p-7">
                  <Minus className="hidden shrink-0 sm:block" size={16} />
                  {oldWay}
                </div>
                <div className="flex items-center gap-3 border-l border-white/10 bg-white/[0.03] p-4 font-semibold text-white/[0.82] sm:p-7">
                  <Check className="hidden shrink-0 text-[#d8d2c4] sm:block" size={16} />
                  {monde}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
