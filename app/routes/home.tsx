import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { HeroSection } from "../components/home/HeroSection";
import { InfoSections } from "../components/home/InfoSections";
import { MediaGallery } from "../components/home/MediaGallery";
import { ContactSection } from "../components/home/ContactSection";
import { SponsorsSection } from "../components/home/SponsorsSection";
import { TopBar } from "../components/home/TopBar";
import { Footer } from "../components/home/Footer";
import {
  landingContentSections,
  landingPhotoResources,
  landingVideoResources,
} from "../../src/data/content";
import { landingNavigationLinks } from "../../src/data/navigation";

export function meta() {
  return [
    { title: "Guerrero de Troya | Organización de OCR" },
    {
      name: "description",
      content:
        "Landing page oficial de Guerrero de Troya, organizadora de eventos deportivos OCR.",
    },
  ];
}

export default function Home() {
  const location = useLocation();

  // Manejar scroll cuando se carga la página con un hash
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      setTimeout(() => {
        if (targetId === "inicio") {
          // Buscar primero el HeroSection que tiene id="inicio"
          const heroSection = document.getElementById("inicio");
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            // Si no existe, hacer scroll al inicio del main
            const mainElement = document.querySelector("main");
            if (mainElement) {
              mainElement.scrollTo({ top: 0, behavior: "smooth" });
            }
          }
        } else {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <TopBar navigationLinks={landingNavigationLinks} />
      <main className="relative overflow-y-auto px-6 py-10 md:px-12 lg:px-16">
        <HeroSection />
        <InfoSections sections={landingContentSections} />
        <MediaGallery
          photos={landingPhotoResources}
          videos={landingVideoResources}
        />
        <ContactSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}

