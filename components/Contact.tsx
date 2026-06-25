"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui";

const fields = [
  { label: "Imię", type: "text", name: "name" },
  { label: "Marka", type: "text", name: "brand" },
  { label: "E-mail lub Instagram", type: "text", name: "contact" },
  { label: "Link do produktu / strony", type: "url", name: "url" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Zapytanie do Monde: ${data.get("brand") || "nowa marka"}`);
    const body = encodeURIComponent(
      `Imię: ${data.get("name")}\nMarka: ${data.get("brand")}\nE-mail lub Instagram: ${data.get("contact")}\nLink do produktu / strony: ${data.get("url")}\nWiadomość: ${data.get("message")}`,
    );
    setSent(true);
    window.location.href = `mailto:mondee011@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="kontakt" className="section scroll-mt-20">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="Kontakt"
                title="Porozmawiajmy o Twojej marce."
                copy="Podeślij produkt lub stronę. Wrócimy z pomysłem na pierwszy kierunek kreacji."
              />
              <div className="mt-10 space-y-3 text-sm text-white/[0.38]">
                <a href="mailto:mondee011@gmail.com" className="block transition hover:text-white">
                  mondee011@gmail.com
                </a>
                <a href="https://www.instagram.com/monde_monde011/" className="block transition hover:text-white" target="_blank" rel="noreferrer">
                  @monde_monde011
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form onSubmit={handleSubmit} className="glass rounded-[2rem] p-6 sm:p-9">
              <div className="grid gap-6 sm:grid-cols-2">
                {fields.map((field) => (
                  <label key={field.name} className="text-xs font-medium text-white/[0.48]">
                    {field.label}
                    <input
                      required
                      type={field.type}
                      name={field.name}
                      className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition placeholder:text-white/20 focus:border-white/[0.55]"
                    />
                  </label>
                ))}
              </div>

              <label className="mt-7 block text-xs font-medium text-white/[0.48]">
                Wiadomość
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition focus:border-white/[0.55]"
                />
              </label>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button type="submit" className="button-primary">
                  Wyślij zapytanie
                  <ArrowUpRight size={16} />
                </button>
                {sent && (
                  <p role="status" className="text-sm text-[#d8d2c4]">
                    Wiadomość jest gotowa w Twojej poczcie.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
