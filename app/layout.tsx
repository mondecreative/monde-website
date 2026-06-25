import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monde — Premium kreacje reklamowe dla marek produktowych",
  description: "Realistyczne zdjęcia produktowe, kampanie reklamowe i kreacje social media w 24–48h bez klasycznej produkcji.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
