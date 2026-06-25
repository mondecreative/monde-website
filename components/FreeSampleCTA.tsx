import { Reveal } from "./Reveal";

export function FreeSampleCTA() {
  return (
    <section id="sample" className="section scroll-mt-20">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#e8e5dd] px-8 py-20 text-center text-black sm:px-14 sm:py-28 lg:px-16 lg:py-32">
            <div className="absolute inset-x-0 top-0 h-px bg-white/80" />
            <div className="relative mx-auto max-w-3xl">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/[0.45]">Pierwszy krok jest po naszej stronie</p>
              <h2 className="text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl">
                Zobacz, jak wyglądałaby kreacja dla Twojej marki.
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-black/[0.58] sm:text-lg">
                Przygotujemy przykładową kreację na bazie Twojego produktu. Bez zobowiązań. Jeśli efekt będzie pasował do marki, możemy stworzyć pełny pakiet materiałów.
              </p>
              <div className="mt-10">
                <a href="#kontakt" className="inline-flex min-h-14 items-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black/[0.78]">
                  Chcę darmowy sample
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
