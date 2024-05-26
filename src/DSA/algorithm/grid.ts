export function createGrid(gridContainer: HTMLElement, customClass = ''): string[][] {
    const tempGrid :string[][] = []
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = 'repeat(15, 1fr)';
    gridContainer.style.gridTemplateRows = 'repeat(15, 1fr)';
    gridContainer.style.width = 'fit-content'; // Adjust the width as needed
    gridContainer.style.height = '100%'; // Adjust the height as needed

    gridContainer.style.marginTop = '20px'

    for (let row = 0; row < 15; row++) {
        tempGrid[row] = []
        for(let column = 0; column < 15; column++) {
            tempGrid[row][column] = 'white'
            const cell = document.createElement('div');
            cell.setAttribute('row', row.toString());
            cell.setAttribute('column', column.toString());
            cell.style.backgroundColor = 'white';
            cell.style.border = '1px solid black';
            cell.style.width = '20px'
            cell.style.height = '20px';
            cell.classList.add(customClass)
            gridContainer.appendChild(cell);
        }
    }

    document.body.appendChild(gridContainer);
    return tempGrid;
}