import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui";

const categories = [
  {
    title: "Beauty & Cosmetics",
    description: "Selektywne koncepty beauty z naciskiem na fakturę produktu, światło, opakowanie i premium detal.",
    images: [
      { src: "/images/portfolio/beauty/beauty-01.jpg", alt: "Beauty & Cosmetics concept visual 01" },
      { src: "/images/portfolio/beauty/beauty-02.jpg", alt: "Beauty & Cosmetics concept visual 02" },
      { src: "/beauty-03-replace.png.png", alt: "Beauty & Cosmetics concept visual 03" },
      { src: "/beauty-04-replace.png.png", alt: "Beauty & Cosmetics concept visual 04" },
    ],
  },
  {
    title: "Fashion & Lifestyle",
    description: "Editorialowe kadry, akcesoria i lifestyle visuals budujące elegancki świat marki.",
    images: [
      { src: "/fashion-replace-final.png", alt: "Fashion & Lifestyle concept visual 01" },
      { src: "/images/portfolio/fashion/fashion-02.jpg", alt: "Fashion & Lifestyle concept visual 02" },
      { src: "/images/portfolio/fashion/fashion-03.jpg", alt: "Fashion & Lifestyle concept visual 03" },
      { src: "/images/portfolio/fashion/fashion-04.jpg", alt: "Fashion & Lifestyle concept visual 04" },
    ],
  },
  {
    title: "Furniture & Interiors",
    description: "Spokojne sceny wnętrzarskie, miękkie światło i kompozycje pokazujące produkt w premium kontekście.",
    images: [
      { src: "/interior-replace-final.png", alt: "Furniture & Interiors concept visual 01" },
      { src: "/images/portfolio/interiors/interior-02.jpg", alt: "Furniture & Interiors concept visual 02" },
      { src: "/images/portfolio/interiors/interior-03.jpg", alt: "Furniture & Interiors concept visual 03" },
      { src: "/images/portfolio/interiors/interior-04.jpg", alt: "Furniture & Interiors concept visual 04" },
    ],
  },
  {
    title: "Outdoor & Sport",
    description: "Dynamiczne sceny outdoorowe z energią kampanii sportowych, gotowe do selektywnej prezentacji.",
    images: [
      { src: "/outdoor-replace-final.png", alt: "Outdoor & Sport concept visual 01" },
      { src: "/images/portfolio/outdoor/outdoor-02.jpg", alt: "Outdoor & Sport concept visual 02" },
      { src: "/images/portfolio/outdoor/outdoor-03.jpg", alt: "Outdoor & Sport concept visual 03" },
      { src: "/images/portfolio/outdoor/outdoor-04.jpg", alt: "Outdoor & Sport concept visual 04" },
    ],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section scroll-mt-20">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="Portfolio" title="Kompaktowe miejsce na przyszłe sample visuals." />
            <p className="text-xs uppercase tracking-[0.18em] text-white/[0.32]">Sample visuals / concept work</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {categories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 60}>
              <article className="glass rounded-[1.75rem] p-4 sm:p-5">
                <div className="mb-5 px-1 pt-1">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/[0.25]">0{categoryIndex + 1}</span>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">{category.title}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.images
                    ? category.images.map((image, imageIndex) => (
                        <figure
                          key={image.src}
                          className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d] shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition duration-300 hover:border-white/20"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 45vw, 260px"
                            className="object-contain p-1.5 transition duration-700 ease-out group-hover:scale-[1.02]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-white/[0.04]" />
                          <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-white/[0.62] backdrop-blur-md">
                            0{imageIndex + 1}
                          </figcaption>
                        </figure>
                      ))
                    : [1, 2, 3, 4].map((number) => (
                        <div key={number} className="placeholder-sheen placeholder-grid relative aspect-square overflow-hidden rounded-2xl border border-white/[0.08]">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/30" />
                        </div>
                      ))}
                </div>

                <p className="px-1 pt-5 text-sm leading-relaxed text-white/[0.45]">{category.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
