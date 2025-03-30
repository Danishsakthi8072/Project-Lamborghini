document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides img");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let index = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(i) {
        slides.forEach(img => img.style.opacity = "0");
        slides[i].style.opacity = "1";

        dots.forEach(dot => dot.classList.remove("active"));
        dots[i].classList.add("active");

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

    // Arrow button click events
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

    // Dots click event
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            stopSlideShow();
            showSlide(i);
            startSlideShow();
        });
    });

    showSlide(index);
    startSlideShow();
});
