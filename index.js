document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    const dots = document.querySelectorAll(".dot");
    
    let index = 0;
    const totalSlides = images.length;

    function showSlide(i) {
        images.forEach((img, idx) => {
            img.style.display = idx === i ? "block" : "none";
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

    let slideInterval = setInterval(nextSlide, 3000);

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            clearInterval(slideInterval);
            showSlide(i);
            slideInterval = setInterval(nextSlide, 3000);
        });
    });

    showSlide(index);
});