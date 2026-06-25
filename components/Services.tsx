import { Aperture, Image, Megaphone, Play, ShoppingBag, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui";

const services = [
  { icon: Image, title: "Zdjęcia produktowe", text: "Packshoty, ujęcia hero i realistyczne kompozycje do sklepu, kampanii oraz landing page'y." },
  { icon: Aperture, title: "Kampanie reklamowe", text: "Spójne key visuale i serie materiałów dopasowane do sezonu, launchu lub promocji." },
  { icon: Megaphone, title: "Kreacje pod Meta Ads", text: "Warianty komunikatów, formatów i kadrów przygotowane do szybkiego testowania." },
  { icon: Smartphone, title: "Content do social media", text: "Regularny dopływ eleganckich kreacji do organicznych kanałów marki." },
  { icon: ShoppingBag, title: "Wizuale lifestyle", text: "Produkt w naturalnych, premium scenach bez wynajmu lokacji i rozbudowanej produkcji." },
  { icon: Play, title: "Krótkie filmy / UGC", text: "Mobile-first formaty wideo i koncepty UGC tworzone szybciej niż klasyczna produkcja." },
];

export function Services() {
  return (
    <section id="uslugi" className="section scroll-mt-20">
      <div className="shell">
        <Reveal>
          <SectionTitle eyebrow="Co robimy" title="Od pojedynczego produktu do pełnej biblioteki kreacji." />
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 45}>
              <article className="glass group h-full rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                <span className="mb-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-white/[0.58] transition group-hover:border-white/20 group-hover:text-white">
                  <Icon size={19} />
                </span>
                <h3 className="text-xl font-semibold tracking-[-0.025em]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/[0.48]">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
