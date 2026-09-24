const ESQUEMA = /^[a-z][a-z0-9+.-]*:\/\//i;

/**
 * Deja la dirección lista para el backend: sin espacios y con https:// si no tiene esquema.
 * Lanza un Error con un mensaje para el usuario si no es una dirección web válida.
 */
export function normalizarUrl(texto) {
  const limpio = (texto || "").trim();
  if (!limpio) {
    throw new Error("Escribí o pegá una dirección para analizar.");
  }
  const conEsquema = ESQUEMA.test(limpio) ? limpio : `https://${limpio}`;
  let url;
  try {
    url = new URL(conEsquema);
  } catch {
    throw new Error("Esa dirección no parece válida. Revisá que esté bien escrita.");
  }
  if (!["http:", "https:"].includes(url.protocol) || !url.hostname.includes(".")) {
    throw new Error("Esa dirección no parece válida. Revisá que esté bien escrita.");
  }
  return conEsquema;
}
