export function createGrid(container: HTMLElement, customClass = '', gridSize:number = 15, gap:number = 0): string[][] {
    const grid: string[][] = []
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.width = 'fit-content'; // Adjust the width as needed
    container.style.height = '100%'; // Adjust the height as needed
    container.style.gap =  `${gap}px` 


    for (let row = 0; row < gridSize; row++) {
        grid[row] = []
        for(let column = 0; column < gridSize; column++) {
            grid[row][column] = 'white'
            const cell = document.createElement('div');
            cell.setAttribute('row', row.toString());
            cell.setAttribute('column', column.toString());
            cell.style.backgroundColor = 'white';
            cell.style.border = '1px solid black';
            cell.style.width = '20px'
            cell.style.height = '20px';
            customClass && cell.classList.add(customClass);
            container.appendChild(cell);
        }
    }
    return grid;
}
