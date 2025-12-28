import { useState } from "react";
import { PaymentForm } from "../components/home/PaymentForm";
import { TopBar } from "../components/home/TopBar";
import { Footer } from "../components/home/Footer";
import { landingNavigationLinks } from "../../src/data/navigation";
import { crearOrdenPago } from "../../src/api/pagos";

const defaultFormStatus = { state: "idle", message: "" };

/**
 * Formaliza un nombre o apellido capitalizando correctamente.
 * Convierte la primera letra de cada palabra a mayúscula y el resto a minúscula.
 */
function formalizeName(text) {
  if (!text || typeof text !== "string") {
    return text;
  }
  
  const trimmed = text.trim().replace(/\s+/g, " ");
  
  return trimmed
    .split(" ")
    .map((word) => {
      if (!word) return word;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export function meta() {
  return [
    { title: "Guerrero de Troya | Inscripción y pagos" },
    {
      name: "description",
      content:
        "Registra tu inscripción y gestiona los pagos de tus eventos OCR con Guerrero de Troya.",
    },
  ];
}

export default function Registro() {
  const [paymentStatus, setPaymentStatus] = useState(defaultFormStatus);

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nombreEntryRaw = formData.get("nombre");
    const correoEntry = formData.get("correo");
    const montoEntry = formData.get("monto");

    const nombreEntry = typeof nombreEntryRaw === "string" ? formalizeName(nombreEntryRaw) : nombreEntryRaw;

    if (
      typeof nombreEntry !== "string" ||
      typeof correoEntry !== "string" ||
      typeof montoEntry !== "string"
    ) {
      setPaymentStatus({
        state: "error",
        message: "Completa todos los campos para procesar el pago.",
      });
      return;
    }

    setPaymentStatus({
      state: "loading",
      message: "Generando orden de pago con PSE...",
    });

    try {
      await crearOrdenPago({
        nombreCompleto: nombreEntry,
        correo: correoEntry,
        monto: Number.parseFloat(montoEntry),
      });

      setPaymentStatus({
        state: "success",
        message:
          "Orden generada. Serás redirigido a PSE para completar el pago de forma segura.",
      });
      event.currentTarget.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado al procesar el pago.";
      setPaymentStatus({ state: "error", message: errorMessage });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <TopBar navigationLinks={landingNavigationLinks} />
      <main className="relative overflow-y-auto bg-white px-6 py-12 md:px-12 lg:px-16 pt-24">
        <div className="mx-auto max-w-md space-y-8">
            <header className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg shadow-brand-500/25 mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Inscripción
              </h1>
              <p className="text-sm text-slate-600">
                Completa tus datos y paga de forma segura con PSE
              </p>
            </header>
          <PaymentForm
            status={paymentStatus}
            onSubmit={handlePaymentSubmit}
            sectionId="pago"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

