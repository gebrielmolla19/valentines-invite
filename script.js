const yesBtnWrapper = document.querySelector('.yesBtn');
const noBtnWrapper = document.querySelector('.noBtn');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const container = document.querySelector('.container');

// Center the buttons initially (horizontally & vertically towards the bottom)
function centerButtons() {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const buttonWidth = yesButton.offsetWidth;
    const buttonHeight = yesButton.offsetHeight;
    const spaceBetweenButtons = 20;

    const totalButtonWidth = buttonWidth * 2 + spaceBetweenButtons;

    const initialTop = containerHeight - buttonHeight - 30; 

    yesBtnWrapper.style.left = `${(containerWidth - totalButtonWidth) / 2}px`;
    yesBtnWrapper.style.top = `${initialTop}px`;

    noBtnWrapper.style.left = `${(containerWidth - totalButtonWidth) / 2 + buttonWidth + spaceBetweenButtons}px`;
    noBtnWrapper.style.top = `${initialTop}px`;
}

function yesButtonClicked() {
    container.innerHTML = 
    `
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        <div><p>YAY!!!! I loveeeee uuuuuu my munchkinnnn ❤️❤️❤️</p></div>
    `;
}

function moveNoButton() {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBtnWrapper.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtnWrapper.style.left = `${randomX}px`;
    noBtnWrapper.style.top = `${randomY}px`;
}

yesButton.addEventListener('click', yesButtonClicked);
noBtnWrapper.addEventListener('mouseover', moveNoButton);

// Center buttons when the page loads
window.addEventListener('load', centerButtons);
window.addEventListener('resize', centerButtons);