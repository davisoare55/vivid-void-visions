const CALENDLY_URL = '[URL_DO_CALENDLY]';
const MP_PUBLIC_KEY = 'SUA_PUBLIC_KEY_MERCADO_PAGO'; // TODO: Insira aqui a Public Key do Mercado Pago
const MP_PREFERENCE_ID = 'SUA_PREFERENCE_ID_R150'; // TODO: Preferência configurada para o valor de R$150

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
  window.location.assign(CALENDLY_URL);
};

const createMercadoPagoWallet = async () => {
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

  walletContainer.classList.add('is-visible');

  walletBrickController = await bricksBuilder.create('wallet', 'walletContainer', {
    initialization: {
      preferenceId: MP_PREFERENCE_ID,
    },
    callbacks: {
      onReady: () => {
        toggleButtonState(false, 'Garantir Minha Vaga por R$150');
        setFeedback('Selecione o método de pagamento preferido para liberar o calendário.');
      },
      onSubmit: ({ formData }) => {
        isProcessing = true;
        toggleButtonState(true, 'Processando...');
        setFeedback('Processando seu pagamento com segurança...');

        return new Promise((resolve) => {
          // TODO: Realize aqui a validação do pagamento (ex.: webhook ou backend)
          setTimeout(() => {
            isProcessing = false;
            toggleButtonState(false, 'Garantir Minha Vaga por R$150');
            setFeedback('Pagamento confirmado! Redirecionando para o calendário...', false);
            redirectToCalendly();
            resolve();
          }, 1500);
        });
      },
      onError: (error) => {
        console.error('Mercado Pago error:', error);
        isProcessing = false;
        toggleButtonState(false, 'Garantir Minha Vaga por R$150');
        setFeedback('Não conseguimos processar seu pagamento. Tente novamente.', true);
      },
    },
  });
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
    toggleButtonState(false, 'Garantir Minha Vaga por R$47');
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
