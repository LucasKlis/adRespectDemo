let slideIndex = 1;
showSlides(slideIndex);

setInterval(function() {
  plusSlides(1); 
}, 3000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}

const searchIcon = document.querySelector('.inline');
const searchInput = document.querySelector('input');

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('hidden');
  searchInput.focus();
});

document.addEventListener('DOMContentLoaded', function() {
  const showMoreButton = document.getElementById('showMoreButton');
  const hiddenImages = document.querySelectorAll('.hidden');

  showMoreButton.addEventListener('click', function() {
    hiddenImages.forEach(image => {
      image.classList.remove('hidden');
    });

    showMoreButton.style.display = 'none';
  });
});

const showMoreButton = document.getElementById('showMoreButton');
const hiddenImages = document.querySelectorAll('.hidden');

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-image");
  const popup = document.createElement("div");
  popup.classList.add("image-popup");
  document.body.appendChild(popup);

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const clonedImage = image.cloneNode();
      popup.innerHTML = "";
      popup.appendChild(clonedImage);
      popup.style.display = "flex";
    });
  });

  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});