import { memo } from "react";
import { BrandLogo } from "./BrandLogo";
import {
  landingSocialLinks,
  landingFooterLinks,
  footerContent,
} from "../../../src/data/content";

function FooterComponent({ className = "" }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t border-slate-200 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo
                variant="primary"
                className="h-10 w-auto rounded-lg"
              />
              <span className="font-display text-lg font-semibold uppercase tracking-wide text-slate-900">
                {footerContent.companyName}
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-xs">
              {footerContent.companyDescription}
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
              {footerContent.quickLinksTitle}
            </h3>
            <ul className="space-y-3">
              {landingFooterLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-slate-400 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contacto@guerrerodetroya.com"
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  contacto@guerrerodetroya.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-slate-400 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+573001234567"
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-slate-400 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-slate-600">
                  Villavicencio, Meta, Colombia
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Síguenos
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {landingSocialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                    aria-label={`Síguenos en ${social.name}`}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox={social.viewBox}
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={social.iconPath} fill="currentColor" />
                    </svg>
                  </a>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Mantente al día con nuestros eventos y novedades
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">
              © {currentYear} Guerrero de Troya. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/terminos"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Términos y Condiciones
              </a>
              <a
                href="/privacidad"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);

