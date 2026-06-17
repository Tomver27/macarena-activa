import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CursorFollower from "@/components/ui/CursorFollower";
import Grain from "@/components/ui/Grain";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Macarena En Movimiento — Centro Cultural Comunitario",
  description:
    "Centro de Desarrollo Comunitario en el barrio La Macarena, Bogotá. Arte, cultura y encuentro para la comunidad.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Grain />
        <CursorFollower />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
