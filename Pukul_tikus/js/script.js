const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const start = document.querySelector('.start');
const papanScore = document.querySelector('.papanScore');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let score;

start.addEventListener('click', gameStart);

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];

  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }

  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function tikusMuncul() {
  const tRandom = randomTanah(tanah);
  const waktuRandom = randomWaktu(500, 1000);
  tRandom.classList.add('muncul');
  setTimeout(() => {
    tRandom.classList.remove('muncul')
    if (!selesai) {
      tikusMuncul();
    }
  }, waktuRandom);
}

function gameStart() {
  selesai = false;
  score = 0;
  papanScore.textContent = 0;
  tikusMuncul();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukulTikus() {
  score++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanScore.textContent = score;
}

tikus.forEach(t => {
  t.addEventListener('click', pukulTikus);
});

