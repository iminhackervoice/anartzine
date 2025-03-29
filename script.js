// script.js

// Select all images inside the gallery
const images = document.querySelectorAll(".gallery img");

// Loop through each image and add a click event
images.forEach(image => {
    image.addEventListener("click", () => {
        // Create a new element for the overlay
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        // Create an enlarged version of the image
        const enlargedImg = document.createElement("img");
        enlargedImg.src = image.src; // Set source to the clicked image
        enlargedImg.classList.add("enlarged");

        // Append the enlarged image to the overlay
        overlay.appendChild(enlargedImg);

        // Close overlay when clicked
        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        // Add overlay to the body
        document.body.appendChild(overlay);
    });
});
