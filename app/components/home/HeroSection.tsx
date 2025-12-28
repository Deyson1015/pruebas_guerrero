import { memo } from "react";
import { BrandLogo } from "./BrandLogo";

function HeroSectionComponent() {
  return (
    <section
      id="inicio"
      className="group relative isolate flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-slate-200 shadow-sm transition-colors duration-500 hover:shadow-md"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/fondo.webp"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/60" />
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-between px-8 py-12 lg:flex-row lg:items-center lg:px-12 lg:py-16">
        <div className="relative max-w-2xl space-y-6">
        <span className="badge-soft border-brand-200 bg-brand-50 text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-brand-600">
          OCR • Latinoamérica
        </span>
        <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-white md:text-5xl">
          Vive la próxima batalla de resistencia con Guerrero de Troya
        </h1>
        <p className="max-w-xl text-lg text-slate-200">
          Diseñamos carreras de obstáculos que mezclan estrategia, fuerza y
          espíritu de equipo. Eleva la energía de tu comunidad con eventos
          pensados para trascender cada terreno extremo.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/registro"
            className="rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
          >
            Reservar cupo
          </a>
          <a
            href="#fotos"
            className="rounded-full border border-brand-500 bg-brand-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:border-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
          >
            Ver experiencias
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}

export const HeroSection = memo(HeroSectionComponent);

