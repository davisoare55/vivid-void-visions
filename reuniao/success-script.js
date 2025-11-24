// Script para página de sucesso pós-pagamento
document.addEventListener('DOMContentLoaded', function() {
  // Obter parâmetros da URL
  const urlParams = new URLSearchParams(window.location.search);
  const paymentId = urlParams.get('payment_id') || 'MP-' + Date.now();
  
  // Tentar obter dados do localStorage ou sessionStorage
  const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
  
  // Dados padrão caso não encontre
  const email = userData.email || prompt('Para enviar o link do Calendly, digite seu email:') || 'cliente@example.com';
  const name = userData.name || email.split('@')[0];
  
  // Enviar dados e redirecionar
  sendCalendlyLink(email, name, paymentId);
});

async function sendCalendlyLink(email, name, paymentId) {
  try {
    const response = await fetch('/.netlify/functions/payment-success-simple', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        name: name,
        paymentId: paymentId
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('Processado com sucesso!');
      
      // Mostrar notificação
      showNotification('Redirecionando para Calendly...', 'success');
      
      // Redirecionar para Calendly após 3 segundos
      setTimeout(() => {
        window.open(result.calendlyLink, '_blank');
      }, 3000);
      
      // Também mostrar link manualmente
      showCalendlyLink(result.calendlyLink);
      
    } else {
      console.error('Erro:', result.error);
      showNotification('Erro ao processar. Clique no botão abaixo.', 'error');
    }
  } catch (error) {
    console.error('Erro:', error);
    showNotification('Erro ao processar. Use o botão abaixo.', 'error');
  }
}

function showCalendlyLink(link) {
  // Criar container para o link
  const linkContainer = document.createElement('div');
  linkContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #d4af37, #f7c948, #e7981a);
    padding: 15px 25px;
    border-radius: 50px;
    color: #000;
    font-weight: bold;
    z-index: 10000;
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  `;
  
  linkContainer.innerHTML = `
    <p style="margin: 0 0 10px 0; text-align: center;">📅 Agende sua reunião:</p>
    <a href="${link}" target="_blank" style="color: #000; text-decoration: none; font-weight: 900;">
      ABRIR CALENDLY
    </a>
  `;
  
  document.body.appendChild(linkContainer);
}

function showNotification(message, type) {
  // Criar elemento de notificação
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    z-index: 10000;
    max-width: 300px;
    word-wrap: break-word;
    ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remover após 5 segundos
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 5000);
}

// Salvar dados antes do redirecionamento (na página principal)
function saveUserDataBeforePayment(email, name) {
  const userData = {
    email: email,
    name: name,
    timestamp: new Date().toISOString()
  };
  sessionStorage.setItem('userData', JSON.stringify(userData));
  localStorage.setItem('userData', JSON.stringify(userData)); // Backup
}
