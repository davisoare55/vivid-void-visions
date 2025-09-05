// Configuração da API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.exemplo.com';
const API_KEY = import.meta.env.VITE_API_KEY;

// Função para fazer requisições
export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Exemplos de funções específicas
export const getPortfolioData = () => {
  return apiClient('/portfolio');
};

export const sendContactForm = (data: any) => {
  return apiClient('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const getAnalytics = () => {
  return apiClient('/analytics');
};
