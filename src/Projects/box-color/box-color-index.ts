import Canvas from '../../utilities/canvas';
import {createGrid} from '../../utilities/grid';
import { COLORS } from '../colors';


const clickedBoxes: HTMLDivElement[] = []
function boxColorLauncher() {
    const canvasObject = new Canvas();
    canvasObject.newCanvas();
    canvasObject.title = 'Box Colors'
    const canvas = canvasObject.canvas;

    const grid = createGrid(canvas, '', 3, 10);
    canvas.addEventListener('click', async (e) => {
        const target = e.target as HTMLDivElement;
        const cellRow = target.getAttribute('row');
        const cellColumn = target.getAttribute('column');
        if(!cellRow || !cellColumn || (cellRow === '1' && cellColumn === '1') || (cellRow === '1' && cellColumn === '2')) return;

        clickedBoxes.unshift(target);
        target.style.backgroundColor = COLORS.green

        if(clickedBoxes.length === 7) {
            for (let index = 0; index < clickedBoxes.length; index++) {
                const b = clickedBoxes[index];
                const p = new Promise<void>(res => {
                    setTimeout(() => {
                        b.style.backgroundColor = 'white'
                        res();
                    }, 1000)
                })
                await p
            }
            clickedBoxes.length = 0
        }
    })
    createDesign(canvas);
}

function createDesign(canvas: HTMLElement) {
    const cells:NodeListOf<HTMLElement> = canvas.querySelectorAll('[row]')
    cells.forEach(cell => {
        cell.style.width = '60px'
        cell.style.height = '60px'
    })
    const row2:NodeListOf<HTMLElement> = canvas.querySelectorAll('[row = "1"]')
    row2.item(1).style.border = 'none'
    row2.item(2).style.border = 'none'
}


export {
    boxColorLauncher
}




