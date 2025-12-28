import { memo } from "react";
import { GlowCard } from "./GlowCard";
import { landingContactItems, contactSectionHeader } from "../../../src/data/content";

function ContactSectionComponent() {
  return (
    <section
      id="contactanos"
      className="mt-24 space-y-16"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50/50 to-white px-8 py-12 shadow-lg transition-colors duration-500 sm:px-10">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-100 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-100 rounded-full -mr-24 -mb-24 opacity-25 blur-3xl" />
        
        <header className="relative space-y-4 text-left">
          <span className="section-eyebrow inline-flex shadow-sm">{contactSectionHeader.eyebrow}</span>
          <h2 className="font-display text-4xl font-bold text-slate-900 tracking-tight">
            {contactSectionHeader.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            {contactSectionHeader.description}
          </p>
        </header>
        <div className="relative mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {landingContactItems.map((item) => {
            const contentElement = item.href ? (
              <a
                href={item.href}
                className={`text-base font-medium text-slate-600 ${item.hoverColor} transition-all duration-300 inline-flex items-center gap-2 group-hover:gap-3`}
              >
                <span>{item.content}</span>
                <svg
                  className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            ) : (
              <p className="text-base leading-relaxed text-slate-600 whitespace-pre-line">
                {item.content}
              </p>
            );

            return (
              <GlowCard key={item.id} variant={item.variant} className="p-[1px]">
                <div className="group relative h-full overflow-hidden rounded-[22px] bg-white border border-slate-200 px-8 py-10 text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-500/10">
                  {/* Hover background glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-slate-50 to-white blur-xl -z-10" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconHover} text-white shadow-lg ${item.iconShadow} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`}>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox={item.iconPath.viewBox}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={item.iconPath.d}
                          />
                        </svg>
                        {/* Decorative ring on hover */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-brand-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <div className="pt-2">
                      {contentElement}
                    </div>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const ContactSection = memo(ContactSectionComponent);

