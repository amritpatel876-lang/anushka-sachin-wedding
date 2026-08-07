const button = document.getElementById("openBtn");

button.addEventListener("click", () => {

    document.body.style.transition = "1s";

    document.body.style.background = "#111";

    button.innerHTML = "Welcome ❤️";

    setTimeout(() => {
        alert("Welcome to Anushka ❤️ Sachin's Wedding");
    },500);

});
