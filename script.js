const homeButton = document.getElementsByClassName('home-button');

function checkPositionOfHome() {
    let buttonShow = 100;
    let windowY = window.scrollY;
    if (windowY > buttonShow) {
        homeButton[0].classList.remove('hidden');
        homeButton[0].classList.add('visible');
    } else {
        homeButton[0].classList.add('hidden');
        homeButton[0].classList.remove('visible');
    }
}

window.addEventListener('scroll', checkPositionOfHome);