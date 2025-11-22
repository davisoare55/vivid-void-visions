// Script para capturar dados antes do pagamento
document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta-button');
  
  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      // Coletar dados do usuário antes do pagamento
      const email = prompt('Para agilizar seu agendamento, digite seu email:') || '';
      const name = prompt('Seu nome:') || '';
      
      if (email && name) {
        // Salvar dados para usar após o pagamento
        saveUserDataBeforePayment(email, name);
        
        // Adicionar parâmetros ao link do Mercado Pago
        const baseUrl = 'https://mpago.li/26LHPRS';
        const successUrl = window.location.origin + '/reuniao/success.html';
        const paymentLink = `${baseUrl}?success_url=${encodeURIComponent(successUrl)}`;
        
        // Atualizar href do botão
        this.href = paymentLink;
      }
    });
  }
});

// Função para salvar dados do usuário
function saveUserDataBeforePayment(email, name) {
  const userData = {
    email: email,
    name: name,
    timestamp: new Date().toISOString()
  };
  sessionStorage.setItem('userData', JSON.stringify(userData));
  localStorage.setItem('userData', JSON.stringify(userData)); // Backup
}

// Função para obter dados salvos
function getUserData() {
  return JSON.parse(sessionStorage.getItem('userData') || '{}');
}
