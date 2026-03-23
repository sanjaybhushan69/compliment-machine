const compliments = [
  "NAME, you have the kind of energy that makes every room feel warmer the moment you walk in.",
  "Honestly NAME, your brain is operating on a level most people can only dream about.",
  "NAME, you are the human equivalent of a perfectly brewed cup of chai on a rainy evening.",
  "The world is genuinely a better place because NAME decided to exist in it. That's just facts.",
  "NAME, your smile could solve problems that world leaders have been arguing about for years.",
  "If confidence had a name, it would absolutely be NAME. No coincidence there.",
  "NAME, you radiate main character energy and honestly it's very inspiring to witness.",
  "Scientists have yet to discover anything as impressive as NAME simply being NAME.",
  "NAME, you make being awesome look so effortless it's almost unfair to everyone else.",
  "Not everyone can light up a room just by existing — but NAME absolutely can.",
  "NAME, if kindness were currency, you'd be the richest person alive without even trying.",
  "The stars aligned on the day NAME decided to show up. A true cosmic event.",
  "NAME, your vibe is so good it should honestly come with a health warning.",
  "NAME, you are 100% that person everyone is genuinely glad to know.",
  "If there were an award for being effortlessly wonderful, NAME would win every single time."
];

let lastIndex = -1;
let count = 0;
let currentCompliment = '';

function generate() {
  const raw = document.getElementById('nameInput').value.trim();
  const name = raw || 'You';

  // Pick a random compliment (never repeat the same one twice in a row)
  let idx;
  do {
    idx = Math.floor(Math.random() * compliments.length);
  } while (idx === lastIndex && compliments.length > 1);
  lastIndex = idx;
  count++;

  // Personalise with the name
  currentCompliment = compliments[idx].replace(/NAME/g, name);

  // Grab elements
  const quoteEl      = document.getElementById('quote');
  const forNameEl    = document.getElementById('forName');
  const placeholderEl= document.getElementById('placeholder');
  const dividerEl    = document.getElementById('divider');
  const copyBtn      = document.getElementById('copyBtn');

  // Hide placeholder, reset animation
  placeholderEl.style.display = 'none';
  quoteEl.classList.remove('show');
  forNameEl.classList.remove('show');

  // Show new compliment with fade-in
  setTimeout(() => {
    quoteEl.textContent  = '\u201C' + currentCompliment + '\u201D';
    forNameEl.textContent = '\u2014 especially for ' + name + ' \u2728';
    quoteEl.classList.add('show');
    forNameEl.classList.add('show');
    dividerEl.classList.add('visible');
    copyBtn.classList.add('visible');
  }, 100);

  // Update counter
  document.getElementById('counter').textContent =
    count + ' compliment' + (count === 1 ? '' : 's') + ' delivered today';
}

function copyIt() {
  if (!currentCompliment) return;
  navigator.clipboard.writeText(currentCompliment).catch(() => {});
  const btn = document.getElementById('copyBtn');
  btn.textContent = 'Copied! 🎉';
  setTimeout(() => { btn.textContent = 'Copy compliment 📋'; }, 2000);
}

// Allow pressing Enter to generate
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nameInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') generate();
  });
});
