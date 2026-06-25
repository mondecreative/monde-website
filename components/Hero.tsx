import Image from "next/image";
import { ArrowButton } from "./ui";

const heroImages = [
  { src: "/hero-01-final.png.png", alt: "Realistyczna kreacja produktowa beauty" },
  { src: "/outdoor-replace.png.jpg", alt: "Dynamiczna kreacja outdoorowa" },
  { src: "/hero-03-final.png.png", alt: "Premium visual do kampanii wnetrzarskiej" },
  { src: "/hero-03-final.png.png", alt: "Kreacja lifestyle dla marki modowej" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 lg:min-h-screen lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/20" />
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="hero-reveal">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-medium text-white/[0.62] backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d8d2c4]" />
              Realizacja w 24–48h
            </div>
            <h1 className="text-balance text-[2.65rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.15rem]">
              Premium kreacje reklamowe dla marek produktowych <span className="text-white/[0.36]">— bez kosztów klasycznej produkcji.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/[0.58] sm:text-xl">
              Tworzymy realistyczne zdjęcia produktowe, kampanie reklamowe i kreacje pod social media w 24–48h. Bez studia, modeli, lokacji i wielodniowej logistyki.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ArrowButton href="#sample">Zamów darmowy sample</ArrowButton>
              <ArrowButton href="#portfolio" secondary>
                Zobacz przykłady
              </ArrowButton>
            </div>
          </div>

          <div className="hero-reveal-delay mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="glass relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <div className="grid h-[460px] grid-cols-2 grid-rows-2 gap-3 sm:h-[520px] lg:h-[560px]">
                {heroImages.map((image, index) => (
                  <figure
                    key={image.src}
                    className="group relative overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#0d0d0d] shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-500 hover:border-white/20"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 45vw, 260px"
                      priority={index < 2}
                      className="object-contain p-1.5 transition duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-white/[0.04]" />
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-white/[0.62] backdrop-blur-md">
                      0{index + 1}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
