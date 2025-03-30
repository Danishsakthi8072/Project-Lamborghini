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
            img.style.transition = "opacity 1s ease-in-out";
        });

        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === i);
        });

        index = i;
    }

    function nextSlide() {
        showSlide((index + 1) % totalSlides);
    }

    function prevSlide() {
        showSlide((index - 1 + totalSlides) % totalSlides);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    prevButton.addEventListener("click", function () {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    nextButton.addEventListener("click", function () {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            stopSlideShow();
            showSlide(i);
            startSlideShow();
        });
    });

    showSlide(index);
    startSlideShow();

    // Ensure mobile responsiveness adjustments
    function adjustAuthButtons() {
        const authContainer = document.querySelector(".auth");
        if (window.innerWidth <= 600) {
            authContainer.style.flexDirection = "column";
            authContainer.style.alignItems = "center";
        } else {
            authContainer.style.flexDirection = "row";
        }
    }

    window.addEventListener("resize", adjustAuthButtons);
    adjustAuthButtons();
});