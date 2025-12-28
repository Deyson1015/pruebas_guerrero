import { memo } from "react";
import { GlowCard } from "./GlowCard";
import { landingSponsors, sponsorsSectionHeader } from "../../../src/data/content";

function SponsorsSectionComponent() {
  const variantColors = [
    { bg: "bg-green-50", border: "border-green-200", text: "text-green-600", icon: "bg-gradient-to-br from-green-500 to-green-600" },
    { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", icon: "bg-gradient-to-br from-emerald-500 to-emerald-600" },
    { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-600", icon: "bg-gradient-to-br from-teal-500 to-teal-600" },
    { bg: "bg-lime-50", border: "border-lime-200", text: "text-lime-600", icon: "bg-gradient-to-br from-lime-500 to-lime-600" },
  ];

  return (
    <section
      id="patrocinadores"
      className="mt-24 space-y-16"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50/50 to-white px-8 py-12 shadow-lg transition-colors duration-500 sm:px-10">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full -mr-32 -mt-32 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-100 rounded-full -ml-24 -mb-24 opacity-25 blur-3xl" />
        
        <header className="relative space-y-4 text-left">
          <span className="section-eyebrow inline-flex shadow-sm">{sponsorsSectionHeader.eyebrow}</span>
          <h2 className="font-display text-4xl font-bold text-slate-900 tracking-tight">
            {sponsorsSectionHeader.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            {sponsorsSectionHeader.description}
          </p>
        </header>
        <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {landingSponsors.map((sponsor, index) => {
            const variants = ["green", "emerald", "teal", "green"];
            const variant = variants[index % variants.length];
            const colors = variantColors[index % variantColors.length];

            return (
              <GlowCard key={sponsor.id} variant={variant} className="p-[1px]">
                <div className="group relative h-full overflow-hidden rounded-[22px] bg-white border border-slate-200 px-6 py-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-500/10">
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors.bg} blur-xl -z-10`} />
                  
                  <div className="flex flex-col items-center space-y-5 relative z-10">
                    <div className={`relative flex h-24 w-24 items-center justify-center rounded-2xl ${colors.icon} shadow-lg shadow-brand-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`}>
                      <div className="text-3xl font-bold text-white drop-shadow-sm">
                        {sponsor.name.charAt(0)}
                      </div>
                      {/* Decorative ring */}
                      <div className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-600 transition-colors duration-300">
                        {sponsor.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                        {sponsor.description}
                      </p>
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

export const SponsorsSection = memo(SponsorsSectionComponent);

