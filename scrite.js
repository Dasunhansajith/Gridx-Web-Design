const menu = document.querySelector('.menu-toggle');
const navL = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    navL.classList.toggle('active');
    const icon = menu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && navL.classList.contains('active')) {
        navL.classList.remove('active');
        const icon = menu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    }
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
const prev = document.querySelector('.pre');
const next = document.querySelector('.next');

let currentslide = 0;
let autoslideIntervel;

function showslide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (index >= slides.length) currentslide = 0;
    if (index < 0) currentslide = slides.length - 1;

    slides[currentslide].classList.add('active');
    dots[currentslide].classList.add('active');
}

function nextSlide() {
    currentslide++;
    showslide(currentslide);
}

function prevSlide() {
    currentslide--;
    showslide(currentslide);
}

function startAutoSlide() {
    stopAutoSlide();
    autoslideIntervel = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    if (autoslideIntervel) {
        clearInterval(autoslideIntervel);
    }
}

// Event Listeners
next.addEventListener('click', () => {
    nextSlide();
    startAutoSlide();
});

prev.addEventListener('click', () => {
    prevSlide();
    startAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentslide = index;
        showslide(currentslide);
        startAutoSlide();
    });
});

// Show the first slide on load
showslide(0);

// Start auto-slide
startAutoSlide();
