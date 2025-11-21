const MP_PUBLIC_KEY = 'APP_USR-8fc405f8-33c6-4d0a-9309-5ade3f6ab470'; // TODO: Replace with your real Mercado Pago public key

// Wait for Mercado Pago SDK to load
const waitForMercadoPago = () => {
  return new Promise((resolve, reject) => {
    if (window.MercadoPago) {
      resolve();
      return;
    }

    const timeout = setTimeout(() => {
      reject(new Error('Mercado Pago SDK failed to load'));
    }, 10000);

    const checkInterval = setInterval(() => {
      if (window.MercadoPago) {
        clearTimeout(timeout);
        clearInterval(checkInterval);
        resolve();
      }
    }, 100);
  });
};

const ctaButton = document.getElementById('ctaButton');
const feedbackMessage = document.getElementById('feedbackMessage');
const walletContainer = document.getElementById('walletContainer');

let mercadoPagoInstance = null;
let walletBrickController = null;
let isProcessing = false;

const setFeedback = (message, isError = false) => {
  feedbackMessage.textContent = message;
  feedbackMessage.classList.toggle('feedback--error', isError);
  feedbackMessage.classList.toggle('feedback--success', !isError && message);
};

const toggleButtonState = (shouldDisable, label) => {
  ctaButton.disabled = shouldDisable;
  ctaButton.textContent = label;
};

const redirectToCalendly = () => {
  // This function is no longer needed as we use Mercado Pago redirects
  console.log('Payment flow handled by Mercado Pago');
};

const createMercadoPagoPreference = async (formData) => {
  try {
    const response = await fetch('/.netlify/functions/mp/create-preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        phone: formData.phone
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to create payment preference');
    }

    return data;
  } catch (error) {
    console.error('Error creating preference:', error);
    throw error;
  }
};

const createMercadoPagoWallet = async () => {
  try {
    // Wait for SDK to be available
    await waitForMercadoPago();
    
    if (!window.MercadoPago) {
      throw new Error('SDK do Mercado Pago não carregou.');
    }

    if (!mercadoPagoInstance) {
      mercadoPagoInstance = new window.MercadoPago(MP_PUBLIC_KEY, {
        locale: 'pt-BR',
      });
    }

  const bricksBuilder = mercadoPagoInstance.bricks();

  if (walletBrickController) {
    walletBrickController.unmount();
  }

  // Get form data
  const email = document.getElementById('email')?.value || '';
  const name = document.getElementById('name')?.value || '';
  const phone = document.getElementById('phone')?.value || '';

  if (!email || !name) {
    throw new Error('Por favor, preencha nome e email para continuar.');
  }

  try {
    // Create payment preference dynamically
    const preferenceData = await createMercadoPagoPreference({ email, name, phone });
    
    walletContainer.classList.add('is-visible');

    walletBrickController = await bricksBuilder.create('wallet', 'walletContainer', {
      initialization: {
        preferenceId: preferenceData.preference_id,
      },
      callbacks: {
        onReady: () => {
          toggleButtonState(false, 'Garantir Minha Vaga - R$37');
          setFeedback('Selecione o método de pagamento para garantir sua vaga exclusiva.');
        },
        onSubmit: async (formData) => {
          isProcessing = true;
          toggleButtonState(true, 'Processando...');
          setFeedback('Processando seu pagamento com segurança...');

          // Payment will be handled by Mercado Pago redirect
          // The success/pending/failure pages will handle the rest
          return Promise.resolve();
        },
        onError: (error) => {
          console.error('Mercado Pago error:', error);
          isProcessing = false;
          toggleButtonState(false, 'Garantir Minha Vaga - R$37');
          setFeedback('Não conseguimos processar seu pagamento. Tente novamente.', true);
        },
      },
    });
  } catch (error) {
    console.error('Error creating preference:', error);
    throw error;
  }
};

window.initMercadoPago = async () => {
  if (isProcessing) {
    return;
  }

  setFeedback('Iniciando checkout seguro...');
  toggleButtonState(true, 'Carregando...');

  try {
    await createMercadoPagoWallet();
  } catch (error) {
    console.error(error);
    toggleButtonState(false, 'Garantir Minha Vaga por R$37');
    setFeedback('Erro ao inicializar o Mercado Pago. Verifique sua conexão e tente novamente.', true);
  }
};

const handleFadeInOnScroll = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  document.querySelectorAll('.fade-section').forEach((section) => {
    observer.observe(section);
  });
};

const init = () => {
  handleFadeInOnScroll();
};

window.addEventListener('DOMContentLoaded', init);
