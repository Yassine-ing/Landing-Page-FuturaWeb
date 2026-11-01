export function initModal() {
  const modal = document.getElementById('modal');
  const modalKey = 'futurawebModalClosed';
  
  const toggleModal = (show) => {
    modal.classList.toggle('open', show);
    modal.setAttribute('aria-hidden', !show);
    document.body.style.overflow = show ? 'hidden' : '';
  };

  document.getElementById('open-modal').addEventListener('click', () => {
    if (!localStorage.getItem(modalKey)) toggleModal(true);
    else document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('modal-close').addEventListener('click', () => toggleModal(false));
  document.getElementById('modal-overlay').addEventListener('click', () => toggleModal(false));
  document.getElementById('modal-cta').addEventListener('click', () => toggleModal(false));

  window.addEventListener('load', () => {
    if (!localStorage.getItem(modalKey)) setTimeout(() => toggleModal(true), 3000);
  });
}