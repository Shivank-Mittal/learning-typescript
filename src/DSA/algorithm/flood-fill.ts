import {createGrid} from '../../utilities/grid'
import Canvas from '../../utilities/canvas'

const canvasObj = new Canvas();
canvasObj.newCanvas()
const canvas = canvasObj.canvas
canvasObj.title = 'Flood FIll'

const fillBoard = document.getElementById('flood-fill');
canvas.append(fillBoard)
const grid = createGrid(fillBoard, 'grid')

fillBoard.addEventListener('click', (event) => {
    const target = event.target as HTMLDivElement;
    if(!target.classList.contains('grid')) return;
    const cellRow = target.getAttribute('row');
    const cellColumn = target.getAttribute('column');
    floodFillBFS(findNode(+cellRow, +cellColumn), +cellRow, +cellColumn, true)
    // floodFill(target, )

})

const cellList = fillBoard.children 

function findNode (row: number, column: number): HTMLDivElement {
    for (let index = 0; index < cellList.length; index++) {
       const cellRow = cellList[index].getAttribute('row');
       const cellColumn = cellList[index].getAttribute('column');
       if(row === +cellRow && column === +cellColumn) {
        return cellList[index] as HTMLDivElement;
       }
    }
}

export default function floodFillAlgorithm() {
    floodFillDFS(findNode(0, 0), 0, 0)
}
 
function floodFillDFS(cell: HTMLDivElement, row: number, column: number) {
    if(!cell) return
    // const cellRow = cell.getAttribute('row')
    // const cellColumn = cell.getAttribute('column')

    //Base Conditions 
    for( row; row < 15; row++) {
        for( column; column < 15; column++) {
            let currentGridCell = grid[row][column]
            if(row < 0 || row >= 15 || column < 0 || column >= 15 || currentGridCell !== 'white') return;
            cell.style.backgroundColor = 'red';
            grid[row][column] = 'red';
            floodFillDFS(findNode(row, column - 1), row, column - 1);
            floodFillDFS(findNode(row, column + 1), row, column + 1);
            floodFillDFS(findNode(row + 1, column), row + 1, column);
            floodFillDFS(findNode(row - 1, column), row - 1, column);
        }
    }
}

async function floodFillBFS(cell: HTMLDivElement, row: number, column: number, star: boolean = false) {
    if(!cell) return;
    type t= {cell: HTMLDivElement, row: number; column: number};
    const bfsQ:t[] = []
    if(star) {
        bfsQ.push({cell, row, column});
        star = false;
    }
    while(bfsQ.length) {
        await new Promise<void>(res => setTimeout(res, 20))
        let currentNode = bfsQ[0];
        row = currentNode.row;
        column = currentNode.column;

        if(grid[row][column] === 'red' ) {
            bfsQ.shift();
            continue;
        }
        
        executeFn(currentNode.cell, row, column);
        bfsQ.shift();

        if(row >= 0 && row < 15){
            findNode(row, column - 1) && bfsQ.push({ cell: findNode(row, column - 1), row, column: column - 1});
            findNode(row, column + 1) && bfsQ.push({ cell: findNode(row, column + 1), row, column: column + 1});
        }
        if(column >= 0 && column < 15){
            findNode(row + 1, column) && bfsQ.push({ cell : findNode(row + 1, column), row: row + 1, column});
            findNode(row - 1, column) && bfsQ.push({ cell: findNode(row - 1, column), row: row - 1, column});
        }
    }

    function executeFn(cell: HTMLDivElement, row: number, column:number){
        const checkCell = findNode(row, column)
        const backgroundColor = checkCell.style.backgroundColor === 'red' ? 'green' : 'red'
        cell.style.backgroundColor = backgroundColor;
        grid[row][column] = 'red';
    }

}
