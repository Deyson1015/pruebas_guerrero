import { useState } from "react";
import { TopBar } from "../components/home/TopBar";
import { UserRegistrationForm } from "../components/home/UserRegistrationForm";
import { Footer } from "../components/home/Footer";
import { landingNavigationLinks } from "../../src/data/navigation";
import { registrarUsuario } from "../../src/api/usuarios";

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
    { title: "Guerrero de Troya | Registro de usuarios" },
    {
      name: "description",
      content:
        "Crea tu cuenta para participar en los eventos OCR organizados por Guerrero de Troya.",
    },
  ];
}

export default function RegistroUsuarioRoute() {
  const [status, setStatus] = useState(defaultFormStatus);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const primerNombreRaw = formData.get("primerNombre");
    const segundoNombreRaw = formData.get("segundoNombre");
    const primerApellidoRaw = formData.get("primerApellido");
    const segundoApellidoRaw = formData.get("segundoApellido");
    const tipoDocumento = formData.get("tipoDocumento");
    const numeroDocumento = formData.get("numeroDocumento");
    const correo = formData.get("correo");
    const telefono = formData.get("telefono");
    const contrasena = formData.get("contrasena");
    const confirmacionContrasena = formData.get("confirmacionContrasena");
    const edad = formData.get("edad");
    const genero = formData.get("genero");
    const categoria = formData.get("categoria");
    const talla = formData.get("talla");
    const ciudadOrigen = formData.get("ciudadOrigen");
    const eps = formData.get("eps");
    const terminosCondiciones = formData.get("terminosCondiciones");

    const primerNombre = typeof primerNombreRaw === "string" ? formalizeName(primerNombreRaw) : primerNombreRaw;
    const segundoNombre = typeof segundoNombreRaw === "string" ? formalizeName(segundoNombreRaw) : segundoNombreRaw;
    const primerApellido = typeof primerApellidoRaw === "string" ? formalizeName(primerApellidoRaw) : primerApellidoRaw;
    const segundoApellido = typeof segundoApellidoRaw === "string" ? formalizeName(segundoApellidoRaw) : segundoApellidoRaw;

    if (
      typeof primerNombre !== "string" ||
      typeof primerApellido !== "string" ||
      typeof tipoDocumento !== "string" ||
      typeof numeroDocumento !== "string" ||
      typeof correo !== "string" ||
      typeof telefono !== "string" ||
      typeof contrasena !== "string" ||
      typeof confirmacionContrasena !== "string" ||
      typeof edad !== "string" ||
      typeof genero !== "string" ||
      typeof categoria !== "string" ||
      typeof talla !== "string" ||
      typeof eps !== "string" ||
      terminosCondiciones !== "on"
    ) {
      setStatus({
        state: "error",
        message: "Completa todos los campos obligatorios antes de continuar.",
      });
      return;
    }

    const edadNumero = Number.parseInt(edad, 10);
    if (Number.isNaN(edadNumero) || edadNumero < 1 || edadNumero > 120) {
      setStatus({
        state: "error",
        message: "Por favor ingresa una edad válida.",
      });
      return;
    }

    const ciudadOrigenFormalizada = typeof ciudadOrigen === "string" && ciudadOrigen.trim() 
      ? formalizeName(ciudadOrigen) 
      : ciudadOrigen;

    if (contrasena !== confirmacionContrasena) {
      setStatus({
        state: "error",
        message: "Las contraseñas no coinciden. Verifica e intenta nuevamente.",
      });
      return;
    }

    setStatus({
      state: "loading",
      message: "Creando cuenta en la plataforma...",
    });

    try {
      await registrarUsuario({
        primerNombre,
        segundoNombre:
          typeof segundoNombre === "string" && segundoNombre.trim() ? segundoNombre : undefined,
        primerApellido,
        segundoApellido:
          typeof segundoApellido === "string" && segundoApellido.trim() ? segundoApellido : undefined,
        tipoDocumento,
        numeroDocumento,
        correo,
        telefono,
        contrasena,
        edad: edadNumero,
        genero,
        categoria,
        talla,
        ciudadOrigen:
          typeof ciudadOrigenFormalizada === "string" && ciudadOrigenFormalizada.trim()
            ? ciudadOrigenFormalizada
            : undefined,
        eps,
      });

      setStatus({
        state: "success",
        message:
          "Cuenta creada correctamente. Revisa tu correo para activar el acceso.",
      });
      event.currentTarget.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado durante el registro.";
      setStatus({ state: "error", message: errorMessage });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <TopBar navigationLinks={landingNavigationLinks} />
      <main className="relative overflow-y-auto bg-white px-6 py-12 md:px-12 lg:px-16 pt-24">
        <div className="mx-auto max-w-5xl space-y-8">
            <header className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg shadow-brand-500/25 mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Crear cuenta
              </h1>
              <p className="text-sm text-slate-600">
                Completa tus datos para registrarte
              </p>
            </header>
          <UserRegistrationForm status={status} onSubmit={handleSubmit} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

