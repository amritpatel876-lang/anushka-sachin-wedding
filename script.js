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
const weddingDate = new Date("February 15, 2027 19:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);




function openInvitation() {
    const envelope = document.getElementById("envelope");
    const monogram = document.getElementById("monogramReveal");

    if (envelope) {
        envelope.classList.add("opening");

        setTimeout(function() {
            envelope.classList.add("hide-envelope");
        }, 1200);
    }

    if (monogram) {
        setTimeout(function() {
            monogram.classList.add("show");
        }, 1400);
    }
}

// 🎵 Wedding Music Toggle

const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicToggle");

if (music && musicButton) {

    musicButton.addEventListener("click", function () {

        if (music.paused) {
            music.play();
            musicButton.innerHTML = "🔊 Music On";
        } else {
            music.pause();
            musicButton.innerHTML = "🔇 Music Off";
        }

    });

}

// 💌 Luxury Envelope Opening

const envelopeScreen = document.getElementById("envelope");

if (envelopeScreen) {
    envelopeScreen.addEventListener("click", function(e) {

        if (e.target.closest("button")) {
            envelopeScreen.classList.add("opening");

            setTimeout(function() {
                envelopeScreen.classList.add("hide-envelope");
            }, 1200);
        }

    });
}
