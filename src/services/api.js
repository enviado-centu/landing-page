const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Convierte el "detail" de un error de FastAPI en un mensaje legible.
 * Los 422 traen un array de errores de validación ({loc, msg, ...}); el resto, un string.
 */
export function formatApiError(detail, status) {
  if (Array.isArray(detail)) {
    const mensajes = detail
      .map((e) => (typeof e?.msg === 'string' ? e.msg.replace(/^Value error, /, '') : null))
      .filter(Boolean);
    if (mensajes.length > 0) return [...new Set(mensajes)].join('. ');
  }
  if (typeof detail === 'string' && detail) return detail;
  return status ? `Error ${status} en la petición` : 'Error en la petición';
}

class ApiService {
  constructor() {
    this.token = localStorage.getItem('auth_token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return !!this.token;
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const conSesion = !!this.token;
    if (conSesion) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    let response;
    try {
      response = await fetch(url, { ...options, headers });
    } catch {
      throw new Error('No se pudo conectar con el servidor. Revisá tu conexión e intentá de nuevo.');
    }

    if (!response.ok) {
      const cuerpo = await response.json().catch(() => null);
      // Un 401 en el login es clave incorrecta, no sesión vencida
      if (response.status === 401 && conSesion && endpoint !== '/auth/login') {
        this.setToken(null);
        throw new Error('Tu sesión venció. Volvé a iniciar sesión.');
      }
      throw new Error(formatApiError(cuerpo?.detail, response.status));
    }

    return await response.json();
  }

  // Auth endpoints
  async register(email, password) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    return response;
  }

  async login(email, password) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (response.access_token) {
      this.setToken(response.access_token);
    }
    return response;
  }

  async getMe() {
    return await this.request('/auth/me');
  }

  // Scan endpoints
  async createScan(pageData) {
    return await this.request('/scans', {
      method: 'POST',
      body: JSON.stringify({ page_data: pageData }),
    });
  }

  async getScans(limit = 50, offset = 0) {
    return await this.request(`/scans?limit=${limit}&offset=${offset}`);
  }

  async getScan(scanId) {
    return await this.request(`/scans/${scanId}`);
  }

  // Health endpoints
  async healthCheck() {
    return await this.request('/health');
  }

  async kevHealth() {
    return await this.request('/health/kev');
  }

  async mlHealth() {
    return await this.request('/health/ml');
  }
}

export const apiService = new ApiService();
export default apiService;
