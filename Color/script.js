// Membuat Tombol Toggle Change Background
const tombolWarna = document.querySelector('#tombolUbahWarna');
const body = document.querySelector('body');
const h1 = document.querySelector('h1')

tombolWarna.addEventListener('click', function () {
    body.classList.toggle('warna');
    h1.classList.toggle('h1');
});

// Membuat Random Warna
const randomWarna = document.createElement('button');
randomWarna.style.marginLeft = '10px';
const textBtn = document.createTextNode('Acak Warna');
randomWarna.appendChild(textBtn);
randomWarna.setAttribute('type', 'button');
tombolWarna.after(randomWarna);

randomWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    console.log(r);
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});




const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sHijau.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sBiru.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});