import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="shell flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Image
            src="/images/logo-monde.png"
            alt="Monde"
            width={541}
            height={80}
            className="h-8 w-auto max-w-[190px] object-contain opacity-95 sm:h-9 sm:max-w-[214px]"
          />
          <p className="mt-3 text-sm text-white/[0.38]">Premium creative advertising studio</p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/[0.48]">
          <a href="mailto:mondee011@gmail.com" className="transition hover:text-white">
            mondee011@gmail.com
          </a>
          <a href="https://www.instagram.com/monde_monde011/" className="transition hover:text-white" target="_blank" rel="noreferrer">
            @monde_monde011
          </a>
        </div>

        <p className="text-xs text-white/[0.24]">© {new Date().getFullYear()} Monde</p>
      </div>
    </footer>
  );
}
