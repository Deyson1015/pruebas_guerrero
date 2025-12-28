import { useState } from "react";
import { LoginForm } from "../components/home/LoginForm";
import { TopBar } from "../components/home/TopBar";
import { Footer } from "../components/home/Footer";
import { landingNavigationLinks } from "../../src/data/navigation";
import { login } from "../../src/api/auth";

const defaultFormStatus = { state: "idle", message: "" };

export function meta() {
  return [
    { title: "Guerrero de Troya | Acceso a la plataforma" },
    {
      name: "description",
      content:
        "Inicia sesión en la plataforma de Guerrero de Troya para gestionar equipos, estadísticas y patrocinios.",
    },
  ];
}

export default function LoginRoute() {
  const [status, setStatus] = useState(defaultFormStatus);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const emailEntry = formData.get("email");
    const passwordEntry = formData.get("password");

    if (typeof emailEntry !== "string" || typeof passwordEntry !== "string") {
      setStatus({
        state: "error",
        message: "Completa los campos obligatorios antes de continuar.",
      });
      return;
    }

    setStatus({ state: "loading", message: "Validando credenciales..." });

    try {
      await login(emailEntry, passwordEntry);
      setStatus({
        state: "success",
        message: "Inicio de sesión exitoso. Redirigiendo al panel...",
      });
      event.currentTarget.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado al iniciar sesión.";
      setStatus({ state: "error", message: errorMessage });
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Iniciar sesión
              </h1>
              <p className="text-sm text-slate-600">
                Accede a tu cuenta para continuar
              </p>
            </header>
          <LoginForm status={status} onSubmit={handleSubmit} sectionId="login" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

