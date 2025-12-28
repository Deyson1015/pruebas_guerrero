/**
 * Auth API endpoints
 * Maneja todas las peticiones relacionadas con autenticación
 */

import { getApiBaseUrl, isApiConfigured, ERROR_MESSAGE_VALUE, MetodoHttpPost, HeaderContentTypeJson, BodyJson } from "./config.js";

// Claves para localStorage
const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_usuario";

const ERROR_MESSAGE_LOGIN_VALUE = "No fue posible iniciar sesión en este momento.";

export async function login(email, password) {
  if (!isApiConfigured()) {
    throw new Error(
      ERROR_MESSAGE_VALUE
    );
  }

  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/auth/login`, { // Puede ser diferente en la API
    method: MetodoHttpPost,
    headers: HeaderContentTypeJson,
    body: BodyJson({
      email,
      password,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    
    // Manejo de errores por código HTTP
    switch (response.status) {
      case 401:
        throw new Error("Email o contraseña incorrectos.");
      case 403:
        throw new Error("No tienes permiso para acceder.");
      case 404:
        throw new Error("Usuario no encontrado.");
      case 500:
        throw new Error("Error del servidor. Intenta más tarde.");
      default:
        throw new Error(
          errorBody || ERROR_MESSAGE_LOGIN_VALUE
        );
    }
  }

  // Almacenar token y datos del usuario en localStorage
  const data = await response.json();
  
  if (data.token) {
    localStorage.setItem(TOKEN_KEY, data.token);
  }
  
  if (data.user) {
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
  }

  return data;

}

// funciones para obtener token y usuario del localStorage

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  const userStr = localStorage.getItem(USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
}

export function isAuthenticated() {
  return !!getToken(); 
}
