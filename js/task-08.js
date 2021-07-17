const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
const inputElem = document.querySelector('input[type="number"]');

let startSize = 30;

const buttonRenderClick = () => {
    const amount = + inputElem.value;
    createBoxes(amount);
};

const createBoxes = (amount) => {
    const boxCollection = [];
   
    for (let i = 0; i < amount; i += 1) {
        const newDiv = document.createElement('div');
        newDiv.style.marginBottom = "5px";
        newDiv.style.width = startSize + 'px';
        newDiv.style.height = startSize + 'px';
        startSize += 10;
        newDiv.style.backgroundColor = randomColor();
        boxCollection.push(newDiv);
    }
    boxes.append(...boxCollection);
};

 const randomColor = () => {
            const r = Math.round(Math.random() * (255 - 1) + 1);
            const g = Math.round(Math.random() * (255 - 1) + 1);
            const b = Math.round(Math.random() * (255 - 1) + 1);
            return `rgb(${r},${g},${b})`;
};
        
const destroyBoxes = () => {
    boxes.innerHTML = "";
    startSize = 30;
    inputElem.value = '';
};
    
renderBtn.addEventListener('click', buttonRenderClick);
destroyBtn.addEventListener('click', destroyBoxes);