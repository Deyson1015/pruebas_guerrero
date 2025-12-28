/**
 * Pagos API endpoints
 * Maneja todas las peticiones relacionadas con pagos
 */

import { getApiBaseUrl, isApiConfigured, ERROR_MESSAGE_VALUE, MetodoHttpPost, HeaderContentTypeJson, BodyJson } from "./config.js";

const ERROR_MESSAGE_ORDEN_PAGO_VALUE = "No fue posible registrar la orden de pago. Intenta nuevamente.";

export async function crearOrdenPago(paymentData) {
  if (!isApiConfigured()) {
    throw new Error(
      ERROR_MESSAGE_VALUE
    );
  }

  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/pagos/ordenes`, { // Puede ser diferente en la API
    method: MetodoHttpPost,
    headers: HeaderContentTypeJson,
    body: BodyJson(paymentData),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      errorBody || ERROR_MESSAGE_ORDEN_PAGO_VALUE
    );
  }

  return response;
}
