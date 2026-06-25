"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const links = [
  ["Co robimy", "#uslugi"],
  ["Dla kogo", "#dla-kogo"],
  ["Portfolio", "#portfolio"],
  ["Proces", "#proces"],
  ["Kontakt", "#kontakt"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black/65 backdrop-blur-2xl">
      <div className="shell flex h-16 items-center justify-between lg:h-[76px]">
        <a href="#" className="flex h-10 items-center" aria-label="Monde - strona glowna">
          <Image
            src="/images/logo-monde.png"
            alt="Monde"
            width={541}
            height={80}
            priority
            className="h-7 w-auto max-w-[168px] object-contain opacity-95 sm:h-8 sm:max-w-[190px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-white/[0.56] transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a href="#sample" className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-[#e8e5dd] sm:block">
          Darmowy sample
        </a>

        <button className="p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Otworz menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="shell flex flex-col gap-5 border-t border-white/10 bg-black py-6 lg:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-lg text-white/[0.72]">
              {label}
            </a>
          ))}
          <a href="#sample" onClick={() => setOpen(false)} className="button-primary mt-2">
            Darmowy sample
          </a>
        </nav>
      )}
    </header>
  );
}
