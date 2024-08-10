document.querySelector('.mobile-menu').addEventListener('click', function() {
    this.classList.toggle('open');
});

let slideIndex = 0;
showSlide(slideIndex);
autoSlide(); // Start auto-slide

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.querySelectorAll('.carousel img');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}

function autoSlide() {
    setInterval(() => {
        changeSlide(1);
    }, 6000); // Change slide every 3 seconds
}