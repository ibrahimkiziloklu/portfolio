document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = modal ? modal.querySelector('.close') : null;
  // Support the flat `.gallery-img`/`.gallery-image` markup and the `.gallery-item > img` grid markup.
  const galleryImages = document.querySelectorAll('.gallery-img, .gallery-image, .gallery-item img');

  if (!modal || !modalImg || !closeBtn || galleryImages.length === 0) {
    return;
  }

  let lastFocused = null;

  const showModal = (src, alt) => {
    lastFocused = document.activeElement;
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const hideModal = () => {
    if (!modal.classList.contains('is-open')) {
      return;
    }
    modal.classList.remove('is-open');
    modalImg.removeAttribute('src');
    modalImg.setAttribute('alt', '');
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  };

  galleryImages.forEach((image) => {
    // Make each thumbnail reachable and activatable by keyboard.
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');

    image.addEventListener('click', () => {
      showModal(image.currentSrc || image.src, image.alt);
    });

    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showModal(image.currentSrc || image.src, image.alt);
      }
    });
  });

  closeBtn.addEventListener('click', hideModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      hideModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hideModal();
    }
  });
});
