// Membuat efek hati biru
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "💙";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "10";

    document.body.appendChild(heart);

    let position = -30;
    let opacity = 1;

    const speed = 1 + Math.random() * 2;

    const animation = setInterval(() => {
        position += speed;
        opacity -= 0.003;

        heart.style.bottom = position + "px";
        heart.style.opacity = opacity;

        if (position > window.innerHeight || opacity <= 0) {
            clearInterval(animation);
            heart.remove();
        }
    }, 20);
}