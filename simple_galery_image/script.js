const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', (e) => {
    // cek apakah yang diklik thumb
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach((thumb) => {
            if (thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            }
        });
        e.target.classList.add('active');
    }

});