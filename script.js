const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// slides er nu at array af elementer
const slides = document.querySelectorAll(".slide");

console.log(slides);
let currentIndex = 0;

function displayImageNumber(displayNumber) {
  currentIndex = displayNumber;
  // Skjuler alle billeder
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  const numberOfImages = slides.length; // hvor mange elementer er der
  console.log("hvor mange billeder er der?", numberOfImages);

  if (currentIndex > numberOfImages - 1) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = numberOfImages - 1;
  }

  slides[currentIndex].style.display = "block";
}

displayImageNumber(0);

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

btnNext.addEventListener("click", () => {
  displayImageNumber(currentIndex + 1);
});
btnPrev.addEventListener("click", () => {
  displayImageNumber(currentIndex - 1);
});

// Skjuler det slide der ligger på positionen currentIndex ved at sætte CSS display til "none"
slides[currentIndex].computedStyleMap.display = "none";
// Skjuler slide nummer 2 i listen (index 1)
slides[1].computedStyleMap.display = "none";
// Skjuler slide nummer 3 i listen ved at sætte display til "none"
slides[2].computedStyleMap.display = "none";
