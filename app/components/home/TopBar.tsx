import { memo } from "react";
import { BrandLogo } from "./BrandLogo";

function TopBarComponent({
  navigationLinks = [],
}) {
  return (
    <>
      <header className="sticky top-0 z-50 flex flex-col bg-white shadow-sm transition-colors duration-500 border-b border-slate-200">
        {/* Barra superior con logo y acciones */}
        <div className="flex h-[4.75rem] items-center justify-between gap-6 px-6 py-4 md:px-12 lg:px-16">
          <a
            href="/"
            aria-label="Inicio Guerrero de Troya"
            className="group flex items-center gap-4 rounded-2xl border border-transparent px-1.5 py-1 transition hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/5"
          >
            <BrandLogo
              variant="primary"
              className="h-11 w-auto rounded-xl shadow-lg shadow-brand-900/10 transition duration-300 group-hover:scale-[1.04]"
            />
            <span className="font-display text-lg uppercase tracking-[0.35em] text-fire font-bold">
              Guerrero de Troya
            </span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden items-center gap-4 text-sm font-semibold lg:flex">
              <a
                href="/login"
                className="relative text-slate-600 transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
              >
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">
                  Iniciar sesión
                </span>
              </a>
              <a
                href="/registro"
                className="relative text-slate-600 transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
              >
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">
                  Inscripción
                </span>
              </a>
            </nav>
            <a
              href="/registro-usuario"
              className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 lg:inline-flex"
            >
              Registro
            </a>
          </div>
        </div>
        
        {/* Barra de navegación horizontal */}
        <nav className="border-t border-slate-100 bg-slate-50/50 px-6 md:px-12 lg:px-16">
          <div className="flex justify-center gap-6 overflow-x-auto py-4 scrollbar-hide">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative whitespace-nowrap text-sm font-semibold text-slate-600 transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
              >
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

export const TopBar = memo(TopBarComponent);

