// Simple fade-in animations only - no Mercado Pago integration
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
