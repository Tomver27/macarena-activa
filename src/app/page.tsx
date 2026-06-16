"use client";

import { useState } from "react";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import ExposicionSection from "@/components/landing/ExposicionSection";
import ActividadesSection from "@/components/landing/ActividadesSection";
import PlanosSection from "@/components/landing/PlanosSection";
import LoteSection from "@/components/landing/LoteSection";
import ProblematicaSection from "@/components/landing/ProblematicaSection";
import StatsSection from "@/components/landing/StatsSection";
import AvancesSection from "@/components/landing/AvancesSection";
import EquipoSection from "@/components/landing/EquipoSection";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <Navbar />
      <main>
        <HeroSection />
        <ExposicionSection />
        <ActividadesSection />
        <PlanosSection />
        <LoteSection />
        <ProblematicaSection />
        <StatsSection />
        <AvancesSection />
        <EquipoSection />
      </main>
      <Footer />
    </>
  );
}
