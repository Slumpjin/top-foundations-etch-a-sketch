const MAX_SIDE_LENGTH = 100;
const DEFAULT_SIDE_LENGTH = 16;
let userDefinedSideLength = 0;

const canvasDiv = document.querySelector('.canvas');
canvasDiv.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
});
createGrid(DEFAULT_SIDE_LENGTH);

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    userDefinedSideLength = Number(prompt(`Enter the number of blocks you'd like a side of the grid to have`));
    if (userDefinedSideLength > 0 && userDefinedSideLength <= MAX_SIDE_LENGTH) {
        while (canvasDiv.firstChild) canvasDiv.removeChild(canvasDiv.firstChild);
        createGrid(userDefinedSideLength);
    }
})

function createGrid(sideLength) {
    for (let i = 0; i < sideLength; i++) {
        const gridRow = document.createElement('div');
        gridRow.setAttribute('style', 'display: flex; flex-grow: 1;')
        for (let i = 0; i < sideLength; i++) {
            const gridItem = document.createElement('div');
            gridItem.setAttribute('style', 'flex-grow: 1; border: 1px solid black');
            
            gridRow.appendChild(gridItem);
        }
        canvasDiv.appendChild(gridRow);
    }
};