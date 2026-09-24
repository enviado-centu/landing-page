const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

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

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: 'Error en la petición' }));
        throw new Error(error.detail || `Error ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
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
