const slogans = [
  "Faites confiance à SIP, votre partenaire de proximité en solutions informatique professionnelle.",
  "SIP accompagne les entreprises avec des solutions de support informatique fiables et efficaces.",
  "Accélérez votre transformation digitale avec l’expertise informatique de SIP.",
  "Le support informatique de qualité, pensé pour les professionnels."
];

let index = 0;
const taglineEl = document.querySelector(".tagline");

function rotateSlogan() {
  taglineEl.innerHTML = slogans[index];
  index = (index + 1) % slogans.length;
}

setInterval(rotateSlogan, 4000); // Changement toutes les 4 secondes