import { Banknote, Building2, Clock3, MapPin, RefreshCw, Shirt, Sparkles, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui";

const items = [
  { icon: Building2, title: "Studio", text: "Rezerwacje, terminy i przestrzeń, którą trzeba opłacić zanim powstanie pierwszy kadr." },
  { icon: Users, title: "Ekipa", text: "Fotograf, produkcja, asysta, retusz i koordynacja wielu osób po jednej stronie briefu." },
  { icon: Shirt, title: "Modele", text: "Casting, dostępność, licencje i dodatkowe koszty przy każdej kolejnej wersji kampanii." },
  { icon: MapPin, title: "Lokacje", text: "Transport, pogoda, pozwolenia i logistyka, które potrafią zatrzymać start kampanii." },
  { icon: Clock3, title: "Długi czas organizacji", text: "Dni lub tygodnie zanim marka zobaczy materiał gotowy do publikacji." },
  { icon: Banknote, title: "Wysoki koszt", text: "Duży budżet produkcyjny jeszcze zanim kreacja zacznie generować wynik." },
  { icon: Sparkles, title: "Mało wariantów", text: "Jedna sesja rzadko daje tyle wersji, ile potrzeba do regularnego testowania reklam." },
  { icon: RefreshCw, title: "Trudne poprawki", text: "Zmiana kadru, tła lub komunikatu często oznacza dodatkową produkcję." },
];

export function Problem() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <SectionTitle eyebrow="Problem" title="Klasyczna produkcja reklamowa jest droga, wolna i trudna do skalowania." />
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 40}>
              <article className="glass group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.075]">
                <Icon className="mb-9 text-white/[0.46] transition group-hover:text-white/[0.72]" size={22} />
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/[0.46]">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
