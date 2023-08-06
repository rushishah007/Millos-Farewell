const lightbox = document.getElementById('lightbox');
const lightboxSlides = document.querySelector('.lightbox-slides');
const imageWrappers = document.querySelectorAll('.image-wrapper');
let currentSlideIndex = 0;

function openLightbox(slideIndex) {
  currentSlideIndex = slideIndex;
  lightboxSlides.innerHTML = '';

  for (let i = 0; i < imageWrappers.length; i++) {
    const imageSrc = imageWrappers[i].querySelector('img').src;
    const slide = document.createElement('div');
    slide.classList.add('lightbox-slide');
    slide.innerHTML = `<img src="${imageSrc}" alt="Image ${i + 1}">`;
    lightboxSlides.appendChild(slide);
  }

  lightbox.style.display = 'block';
  showSlide(currentSlideIndex);
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeSlide(n) {
  showSlide(currentSlideIndex + n);
}

function showSlide(slideIndex) {
  const slides = document.querySelectorAll('.lightbox-slide');

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  currentSlideIndex = slideIndex;
}

// Add event listeners for the image wrappers to open the lightbox
imageWrappers.forEach((wrapper, index) => {
  wrapper.addEventListener('click', () => {
    openLightbox(index);
  });
});

// ... (Your existing code)
