import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Sales OS",
  description: "Daily operating system for prospecting, selling and delivering websites.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
