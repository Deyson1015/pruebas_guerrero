import { memo, useMemo } from "react";
import { GlowCard } from "./GlowCard";

const paymentStatusStyles = {
  idle:
    "border border-slate-200 bg-white text-slate-600",
  loading:
    "border border-brand-200 bg-brand-50 text-brand-700",
  success:
    "border border-brand-200 bg-brand-50 text-brand-700",
  error:
    "border border-rose-200 bg-rose-50 text-rose-700",
};

function PaymentFormComponent({
  status,
  onSubmit,
  sectionId = "pago",
}) {
  const statusClassName = useMemo(
    () => paymentStatusStyles[status.state],
    [status],
  );

  return (
    <GlowCard variant="emerald">
      <section
        id={sectionId}
        className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 px-8 py-10 shadow-md"
        aria-labelledby="payment-title"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-100 rounded-full -mr-20 -mt-20 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-50 rounded-full -ml-16 -mb-16 opacity-40 blur-2xl" />
        <div className="relative space-y-6">
          <div className="pb-6 border-b border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Inscripción y pago</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Completa tus datos para participar</p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-50 to-brand-100 border border-brand-200 px-4 py-2 text-xs font-bold text-brand-700 uppercase tracking-wider shadow-sm">
                <svg className="h-4 w-4 mr-1.5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Seguro
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Método de pago</p>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 border border-blue-600 shadow-md shadow-blue-500/20">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M2 10h20M7 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="17" cy="14" r="1.5" fill="currentColor"/>
                  </svg>
                  <span className="text-xs font-bold text-white">PSE OFICIAL</span>
                </div>
              </div>
            </div>
          </div>
          <form
            className="space-y-6"
            onSubmit={onSubmit}
            data-form-state={status.state}
          >
            <div className="space-y-2">
              <label
                htmlFor="payment-name"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Nombre completo
              </label>
              <input
                id="payment-name"
                name="nombre"
                type="text"
                required
                minLength={3}
                autoComplete="name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:shadow-sm"
                placeholder="Nombre y apellidos"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="payment-email"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Correo electrónico
              </label>
              <input
                id="payment-email"
                name="correo"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:shadow-sm"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="payment-amount"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Monto a pagar (COP)
              </label>
              <input
                id="payment-amount"
                name="monto"
                type="number"
                min={0}
                step="1"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:shadow-sm"
                placeholder="150000"
              />
            </div>
            <div className="space-y-4 pt-2">
              <p className="text-xs text-slate-500 flex items-center gap-2 text-center justify-center">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Serás redirigido a PSE para completar el pago
              </p>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-all hover:from-brand-600 hover:to-brand-700 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando pago...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Continuar con PSE oficial
                  </span>
                )}
              </button>
            </div>
            {status.message ? (
              <div
                className={`rounded-xl px-4 py-3 text-sm font-medium ${statusClassName}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            ) : null}
          </form>
        </div>
      </section>
    </GlowCard>
  );
}

export const PaymentForm = memo(PaymentFormComponent);

