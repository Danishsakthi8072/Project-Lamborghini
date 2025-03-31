document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides img");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let index = 0;
    const totalSlides = slides.length;

    // Function to show the active slide
    function showSlide(i) {
        slides.forEach((img, idx) => {
            img.classList.toggle("active", idx === i); // Show current slide, hide others
        });

        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === i); // Highlight active dot
        });

        index = i; // Update the current index
    }

    // Move to the next slide
    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide(index);
    }

    // Move to the previous slide
    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide(index);
    }

    // Event listeners for next/previous buttons
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Event listener for clicking on dots (to navigate to specific slide)
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            showSlide(i);
        });
    });

    // Initialize the slideshow
    showSlide(index);

    // Automatic slide change every 2 seconds
    setInterval(nextSlide, 2000); // Change slide every 2000 milliseconds (2 seconds)
});