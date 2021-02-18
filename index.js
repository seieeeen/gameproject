

const slice = document.getElementById('easyMode');
const camenbert = document.getElementById('normalMode');
const bleu = document.getElementById('hardMode');
const cheeses = document.querySelectorAll('.cheeseimg')
let isAudioPlaying = false;

cheeses.forEach((eachCheese) => {
    eachCheese.onclick = function () {
        if (isAudioPlaying === true) return;
        isAudioPlaying = true;
        const currentSound = eachCheese.getAttribute("data-sound");
        const nextStep = eachCheese.parentElement.getAttribute('data-next-step');
        const audio = new Audio(`./music/${currentSound}.mp3`);
        audio.play();
        audio.addEventListener("ended", () => {
            window.location = nextStep;
        });
    }
})