import { memo, useMemo } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { GlowCard } from "./GlowCard";

const statusStyles = {
  idle:
    "border border-slate-200 bg-white text-slate-600",
  loading:
    "border border-brand-200 bg-brand-50 text-brand-700",
  success:
    "border border-brand-200 bg-brand-50 text-brand-700",
  error:
    "border border-rose-200 bg-rose-50 text-rose-700",
};

function LoginFormComponent({
  status,
  onSubmit,
  sectionId = "login",
}) {
  const statusClassName = useMemo(() => statusStyles[status.state], [status]);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log('Google Login Success - Token:', tokenResponse.access_token);
        // Aquí enviarás el token a tu backend:
        // const response = await fetch('/api/auth/google', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ token: tokenResponse.access_token })
        // });
        alert('Login con Google exitoso! (Backend pendiente)');
      } catch (error) {
        console.error('Error al procesar login de Google:', error);
        alert('Error al procesar login con Google');
      }
    },
    onError: (error) => {
      console.error('Google Login Failed:', error);
      alert('Error al iniciar sesión con Google');
    },
  });

  return (
    <GlowCard variant="emerald">
      <section
        id={sectionId}
        className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 px-8 py-10 shadow-md"
        aria-labelledby="login-title"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-50 rounded-full -ml-12 -mb-12 opacity-40 blur-2xl" />
        <div className="relative space-y-6">
          <div className="pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Acceso</h3>
            </div>
            <p className="text-sm text-slate-500 ml-[52px]">Ingresa tus credenciales para continuar</p>
          </div>
          <form
            className="space-y-6"
            onSubmit={onSubmit}
            data-form-state={status.state}
          >
            <div className="space-y-2">
              <label
                htmlFor="login-email"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Correo electrónico
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:shadow-sm"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="login-password"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Contraseña
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="current-password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:shadow-sm"
                placeholder="••••••••"
              />
              <div className="flex justify-end pt-1">
                <a
                  href="/recuperar-contrasena"
                  className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div className="space-y-4 pt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Conectando...
                  </span>
                ) : (
                  "Iniciar sesión"
                )}
              </button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-500">O continúa con</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleGoogleLogin()}
                className="w-full flex items-center justify-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continuar con Google
              </button>
              <p className="text-center text-sm text-slate-600">
                ¿No tienes cuenta?{" "}
                <a
                  href="/registro-usuario"
                  className="font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Regístrate aquí
                </a>
              </p>
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

export const LoginForm = memo(LoginFormComponent);

