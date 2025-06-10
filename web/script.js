let slideIndex = 0;

function moveSlide(step) {
  const images = document.querySelectorAll(".gallery-images img");
  const totalImages = images.length;
  slideIndex += step;

  if (slideIndex >= totalImages) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = totalImages - 1;
  }

  const offset = -slideIndex * 100;
  document.querySelector(".gallery-images").style.transform = `translateX(${offset}%)`;
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
}
