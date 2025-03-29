document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides img");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    
    let index = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(i) {
        slides.forEach((img, idx) => {
            img.style.opacity = idx === i ? "1" : "0";
            img.style.display = "block";
        });
        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === i);
        });
        index = i;
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide(index);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            stopSlideShow();
            showSlide(i);
            startSlideShow();
        });
    });

    if (prevButton && nextButton) {
        prevButton.style.background = "transparent";
        nextButton.style.background = "transparent";
        prevButton.addEventListener("click", () => {
            stopSlideShow();
            prevSlide();
            startSlideShow();
        });
    
        nextButton.addEventListener("click", () => {
            stopSlideShow();
            nextSlide();
            startSlideShow();
        });
    }

    showSlide(index);
    startSlideShow();
});
