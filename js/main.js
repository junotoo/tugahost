
const titlePhrases = [
    "Hosting de qualidade para a sua empresa",
    "Servidores confiáveis na Tugahost",
    "Planos acessíveis de hospedagem VPS"
];

const titleElement = document.getElementById('title');
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let deleting = false;

function changeTitle() {
    const currentPhrase = titlePhrases[currentPhraseIndex];
    if (deleting) {
      titleElement.textContent = currentPhrase.slice(0, currentCharIndex);
      currentCharIndex--;
      if (currentCharIndex < 0) {
        deleting = false;

          currentPhraseIndex = (currentPhraseIndex + 1) % titlePhrases.length;

      }
    } else {
      titleElement.textContent = currentPhrase.slice(0, currentCharIndex + 1);
      currentCharIndex++;
      if (currentCharIndex >= currentPhrase.length) {
        setTimeout(() => {
        deleting = true;
      }, 1000);
      }
    }
  }

setInterval(changeTitle, 100);
const slides = document.querySelectorAll(".slider-slide");
const dots = document.querySelectorAll(".slider-dot");

let currentSlideIndex = 0;
let interval;

function showSlide(n) {
    slides.forEach((slide, index) => {
        const offset = (index - n) * 100;
        slide.style.transform = `translateX(${offset}%)`;
    });

    dots.forEach((dot, index) => {
        if (index === n) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    currentSlideIndex = n;

    // Clear the existing interval and start a new one
    clearInterval(interval);
    interval = setInterval(nextSlide, 2000);
}

function currentSlide(n) {
    showSlide(n);
}

function nextSlide() {
    const next = (currentSlideIndex + 1) % slides.length;
    showSlide(next);
}

interval = setInterval(nextSlide, 2000);

showSlide(currentSlideIndex);

