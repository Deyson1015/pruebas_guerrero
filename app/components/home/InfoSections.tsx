import { memo } from "react";
import { GlowCard } from "./GlowCard";

const cardVariants = ["green", "emerald", "teal"];

function InfoSectionsComponent({ sections }) {
  return (
    <>
      {sections.map((section, index) => {
        const variant = cardVariants[index % cardVariants.length];

        return (
          <section
            key={section.id}
            id={section.id}
            className="mt-24 mb-24 space-y-8 min-h-[400px] scroll-mt-24"
          >
            <GlowCard variant={variant} className="p-[1px]">
              <article className="group relative h-full overflow-hidden rounded-[22px] bg-white border border-slate-200 px-10 py-12 text-left shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-md">
                <div className="relative space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-xl font-semibold text-brand-600 shadow-sm">
                      {section.title.slice(0, 1)}
                    </span>
                    <h3 className="text-3xl font-semibold text-slate-900">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-slate-700">
                      {section.description}
                    </p>
                  </div>
                  {section.highlights ? (
                    <div className="pt-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                        Aspectos clave
                      </h4>
                      <ul className="space-y-3">
                        {section.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4 text-base text-slate-700 transition duration-300 hover:border-brand-300 hover:bg-brand-100"
                          >
                            <span className="mt-1.5 inline-flex h-2 w-2 flex-none rounded-full bg-brand-500" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </article>
            </GlowCard>
          </section>
        );
      })}
    </>
  );
}

export const InfoSections = memo(InfoSectionsComponent);

