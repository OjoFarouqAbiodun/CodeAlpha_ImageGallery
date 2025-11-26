const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

let currentIndex = 0;

// Open Lightbox
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
setTimeout(() => lightbox.style.opacity = "1", 10);
;
    });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.opacity = "0";
setTimeout(() => {
    lightbox.style.display = "none";
}, 300);
;
});

// Navigate Images
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage();
});

function showImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
}
