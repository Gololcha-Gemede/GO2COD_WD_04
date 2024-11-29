document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeBtn");
  
    document.querySelectorAll(".image-item img").forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });
  
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
      }
    });
  });
  