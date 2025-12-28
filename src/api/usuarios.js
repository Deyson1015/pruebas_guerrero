/**
 * Usuarios API endpoints
 * Maneja todas las peticiones relacionadas con usuarios
 */

import { getApiBaseUrl, isApiConfigured, ERROR_MESSAGE_VALUE, MetodoHttpPost, HeaderContentTypeJson, BodyJson } from "./config.js";

const ERROR_MESSAGE_REGISTRO_VALUE = "No fue posible registrar al usuario en este momento.";


export async function registrarUsuario(userData) {
  if (!isApiConfigured()) {
    throw new Error(
      ERROR_MESSAGE_VALUE
    );
  }

  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/usuarios/registro`, { // Puede ser diferente en la API
    method: MetodoHttpPost,
    headers: HeaderContentTypeJson,
    body: BodyJson(userData),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      errorBody || ERROR_MESSAGE_REGISTRO_VALUE
    );
  }

  return response;
}

