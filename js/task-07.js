const sliderInput = document.querySelector('#font-size-control');
const textChangeFont = document.querySelector('#text');

sliderInput.addEventListener('input', () => {
    const fontSizeEl = sliderInput.value;
    textChangeFont.style.fontSize = `${fontSizeEl}px`
});
