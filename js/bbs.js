const images = document.querySelectorAll(".bbs-image");

const overlay = document.createElement("div");
overlay.className = "image-overlay";
overlay.innerHTML = `<img src="" alt="拡大画像">`;
document.body.appendChild(overlay);

const overlayImg = overlay.querySelector("img");

images.forEach(img => {
    img.addEventListener("click", () => {
        overlayImg.src = img.src;
        overlay.classList.add("active");
    });
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    overlayImg.src = "";
});

document.addEventListener("keydown", e => {
    if(e.key === "Escape"){
        overlay.classList.remove("active");
        overlayImg.src = "";
    }
});
