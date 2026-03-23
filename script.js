const compliments = [
    "NAME, you have the kind of energy that makes rooms feel warmer.",
    "Honestly NAME, your brain is operating on another level.",
    "NAME, you are the human equivalent of a perfect sunny day.",
    "The world is genuinely better because NAME exists in it.",
    "NAME, your smile could fix almost anything."
];

function generate() {
    // 1. Get the name from the input box
    const name = document.getElementById('nameInput').value || 'You';

    // 2. Pick a random compliment
    const random = Math.floor(Math.random() * compliments.length);
    const text = compliments[random].replace('NAME', name);

    // 3. Show it in the card
    document.getElementById('compliment').textContent = text;
}