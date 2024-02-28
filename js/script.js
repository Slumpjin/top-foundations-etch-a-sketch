const canvasDiv = document.querySelector('.canvas');

for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');
    gridRow.setAttribute('style', 'display: flex; flex-grow: 1;')
    for (let i = 0; i < 16; i++) {
        const gridItem = document.createElement('div');
        gridItem.setAttribute('style', 'flex-grow: 1; border: 1px solid black');
        
        gridRow.appendChild(gridItem);
    }
    canvasDiv.appendChild(gridRow);
}
