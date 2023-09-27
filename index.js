const container = document.querySelector('#grid-container');
console.log(container);
let gridLength = 16;
let gridWidth = 16;

window.addEventListener('load', () => {
    drawGrid();
})

const resizeButton = document.querySelector('#resize-grid');
resizeButton.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    let newLength = prompt('Please enter a new length for the grid') ?? 16;

    if (newLength > 100)
        newLength = 100;

    let newWidth = prompt('Please enter a new width for the grid') ?? 16;

    if (newWidth > 100)
        newWidth = 100;

    gridLength = newLength;
    gridWidth = newWidth;
    drawGrid();
});

const clearButton = document.querySelector('#clear-grid');
clearButton.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    drawGrid();
});

function drawGrid() {
    for(let i = 0; i < gridLength; i++){
        let row = document.createElement('div');
        row.classList.add('grid-row');
        for(let j = 0; j < gridWidth; j++){
            let cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.addEventListener('mouseover', () => {
                cell.classList.add('grid-cell-hover')
            })
            row.appendChild(cell);
        }
    
        container.appendChild(row);
    }
}

