const loader = document.querySelector(".loader");
const button = document.getElementById("openBtn");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 2500);
});

button.addEventListener("click", () => {

    button.innerHTML = "❤️ Welcome ❤️";

    button.style.background = "#fff";
    button.style.color = "#000";

    document.querySelector(".content").style.transform = "scale(1.05)";
    document.querySelector(".content").style.transition = ".8s";

    setTimeout(() => {

        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    },800);

});
