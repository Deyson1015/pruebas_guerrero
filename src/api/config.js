/**
 * API Configuration
 * Centraliza la configuración de la API base
 */

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "";

/**
 * Obtiene la URL base de la API
 * @returns {string} La URL base de la API
 */
export function getApiBaseUrl() {
  return apiBaseUrl;
}

/**
 * Verifica si la API está configurada
 * @returns {boolean} true si la API está configurada
 */
export function isApiConfigured() {
  return apiBaseUrl !== "";
}


// Mensaje de error cuando la API no está configurada
export const ERROR_MESSAGE_VALUE = "La API no está configurada correctamente.";

// Mensaje de error cuando no hay datos para enviar
const ERROR_MESSAGE_BODY_VALUE = "No hay datos para enviar.";

// Método HTTP para peticiones POST
export const MetodoHttpPost = "POST" 

// Header para el contenido tipo JSON
export const HeaderContentTypeJson = { "Content-Type": "application/json" }

// Función para convertir los datos a JSON
export const BodyJson = (data) => {
  if (!data) {
    throw new Error(ERROR_MESSAGE_BODY_VALUE);
  };
  return JSON.stringify(data);
}
