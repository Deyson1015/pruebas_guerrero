import { memo, useMemo, useState } from "react";
import { GlowCard } from "./GlowCard";

const registrationStatusStyles = {
  idle: "border border-slate-200 bg-white text-slate-600",
  loading: "border border-brand-200 bg-brand-50 text-brand-700",
  success: "border border-brand-200 bg-brand-50 text-brand-700",
  error: "border border-rose-200 bg-rose-50 text-rose-700",
};

function UserRegistrationFormComponent({
  status,
  onSubmit,
  sectionId = "registro-usuario",
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const statusClassName = useMemo(
    () => registrationStatusStyles[status.state],
    [status],
  );

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <GlowCard variant="green">
      <section
        id={sectionId}
        className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 px-8 py-10 shadow-md"
        aria-labelledby="registro-usuario-title"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-100 rounded-full -mr-20 -mt-20 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-50 rounded-full -ml-16 -mb-16 opacity-40 blur-2xl" />
        <div className="relative space-y-6">
          <div className="pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Nueva cuenta</h3>
            </div>
            <p className="text-sm text-slate-500 ml-[52px]">Completa tu información personal</p>
          </div>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1">Información personal</p>
            </div>
            <fieldset className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <InputField
                id="primer-nombre"
                name="primerNombre"
                label="Primer nombre"
                placeholder="María"
                autoComplete="given-name"
                required
              />
              <InputField
                id="segundo-nombre"
                name="segundoNombre"
                label="Segundo nombre (opcional)"
                placeholder="Camila"
                autoComplete="additional-name"
              />
              <InputField
                id="primer-apellido"
                name="primerApellido"
                label="Primer apellido"
                placeholder="Gómez"
                autoComplete="family-name"
                required
              />
              <InputField
                id="segundo-apellido"
                name="segundoApellido"
                label="Segundo apellido (opcional)"
                placeholder="Torres"
                autoComplete="family-name"
              />
            </fieldset>
            <div className="space-y-1 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1">Documentación</p>
            </div>
            <fieldset className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="tipo-documento"
                  className="text-sm font-medium text-slate-700"
                >
                  Tipo de documento
                </label>
                <select
                  id="tipo-documento"
                  name="tipoDocumento"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:shadow-sm"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="CC">Cédula de ciudadanía</option>
                  <option value="TI">Tarjeta de identidad</option>
                  <option value="CE">Cédula de extranjería</option>
                  <option value="PAS">Pasaporte</option>
                </select>
              </div>
              <InputField
                id="numero-documento"
                name="numeroDocumento"
                label="Número de documento"
                placeholder="1012345678"
                inputMode="numeric"
                required
              />
            </fieldset>
            <div className="space-y-1 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1">Contacto</p>
            </div>
            <fieldset className="grid gap-5 md:grid-cols-2">
              <InputField
                id="correo"
                name="correo"
                label="Correo electrónico"
                placeholder="correo@ejemplo.com"
                type="email"
                autoComplete="email"
                required
              />
              <InputField
                id="telefono"
                name="telefono"
                label="Número de Celular"
                placeholder="+57 300 000 0000"
                inputMode="tel"
                autoComplete="tel"
                required
              />
            </fieldset>
            <div className="space-y-1 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1">Información del evento</p>
            </div>
            <fieldset className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <InputField
                id="edad"
                name="edad"
                label="Edad"
                placeholder="25"
                type="number"
                inputMode="numeric"
                required
              />
              <div className="space-y-2">
                <label
                  htmlFor="genero"
                  className="text-sm font-medium text-slate-700"
                >
                  Género
                </label>
                <select
                  id="genero"
                  name="genero"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:shadow-sm"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="categoria"
                  className="text-sm font-medium text-slate-700"
                >
                  Categoría
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:shadow-sm"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="MUJER_ELITE">Mujer - ELITE</option>
                  <option value="HOMBRE_ELITE">Hombre - ELITE</option>
                  <option value="PRINCIPIANTE_MUJER">PRINCIPIANTE - MUJER</option>
                  <option value="PRINCIPIANTE_HOMBRE">PRINCIPIANTE - HOMBRE</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="talla"
                  className="text-sm font-medium text-slate-700"
                >
                  Talla
                </label>
                <select
                  id="talla"
                  name="talla"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:shadow-sm"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="SIN_CAMISETA">SIN CAMISETA</option>
                </select>
              </div>
            </fieldset>
            <div className="space-y-1 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1">Información adicional</p>
            </div>
            <fieldset className="grid gap-5 md:grid-cols-2">
              <InputField
                id="ciudad-origen"
                name="ciudadOrigen"
                label="Ciudad de Origen"
                placeholder="Villavicencio"
              />
              <InputField
                id="eps"
                name="eps"
                label="EPS"
                placeholder="Sura, Coomeva, etc."
                required
              />
            </fieldset>
            <div className="space-y-1 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1">Seguridad</p>
            </div>
            <fieldset className="grid gap-5 md:grid-cols-2">
              <InputField
                id="contrasena"
                name="contrasena"
                label="Contraseña"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                placeholder="Mínimo 8 caracteres"
              />
              <InputField
                id="confirmacion-contrasena"
                name="confirmacionContrasena"
                label="Confirmar contraseña"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                placeholder="Repite tu contraseña"
              />
            </fieldset>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <input
                  id="terminos-condiciones"
                  name="terminosCondiciones"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-2 focus:ring-brand-500"
                />
                <label
                  htmlFor="terminos-condiciones"
                  className="text-sm text-slate-700 leading-relaxed"
                >
                  <span className="font-semibold">Acepto </span>
                  <a
                    href="#"
                    onClick={handleOpenModal}
                    className="font-semibold text-brand-600 hover:text-brand-700 underline transition-colors"
                  >
                    Términos y Condiciones
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creando cuenta...
                  </span>
                ) : (
                  "Crear cuenta"
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
      {isModalOpen && (
        <TermsModal onClose={handleCloseModal} />
      )}
    </GlowCard>
  );
}

function TermsModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h2
            id="terms-modal-title"
            className="text-xl font-bold text-slate-900"
          >
            Términos y Condiciones
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Cerrar modal"
          >
            <svg
              className="h-5 w-5 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-6">
          <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
            <p className="text-base leading-relaxed">
              Al participar en nuestro evento de pruebas físicas, reconoces y aceptas los riesgos asociados. 
              Disfruta de una competencia emocionante dividida en dos etapas: clasificación y prueba final contra el tiempo.
            </p>
            <p className="text-base leading-relaxed">
              Comprendes los posibles riesgos, como lesiones o fatiga, pero estás dispuesto(a) a superar tus límites en un entorno seguro. 
              Los organizadores han tomado medidas para tu seguridad, pero asumes la responsabilidad de tu bienestar.
            </p>
            <p className="text-base leading-relaxed">
              Eximes a los organizadores de cualquier responsabilidad por lesiones o pérdidas durante el evento. 
              Te comprometes a seguir las instrucciones y afirmas estar en condiciones físicas adecuadas.
            </p>
            <p className="text-base leading-relaxed font-semibold">
              Al aceptar esta exoneración, confirmas tu participación voluntaria y liberas a todas las partes involucradas de cualquier reclamo.
            </p>
            <p className="text-base leading-relaxed text-brand-600 font-medium">
              ¡Prepárate para desafiar tus límites y disfrutar de una experiencia inolvidable!
            </p>
          </div>
        </div>
        <div className="sticky bottom-0 bg-white border-t border-slate-200 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-brand-500 text-white font-semibold text-sm hover:bg-brand-600 transition-colors shadow-sm"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}

function InputField(props) {
  const {
    id,
    name,
    label,
    placeholder,
    type,
    required,
    autoComplete,
    inputMode,
    minLength,
  } = props;
  const inputType = type ?? "text";
  const isRequired = required ?? false;

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={inputType}
        required={isRequired}
        autoComplete={autoComplete}
        inputMode={inputMode}
        minLength={minLength}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:shadow-sm"
      />
    </div>
  );
}

export const UserRegistrationForm = memo(UserRegistrationFormComponent);

