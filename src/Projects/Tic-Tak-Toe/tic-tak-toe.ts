import './tic-tak-toe.css';

enum PLAYER {
    PLAYER1 = 'p1', 
    PLAYER2 = 'p2'
}

const winningConditions: {[key: string]: number[]} = {
    lineOneV: [1,2,3],
    lineTwoV: [4,5,6],
    lineThreeV: [7,8,9],
    lineOneH: [1,4,7],
    lineTwoH:[2,5,8],
    lineThreeH:[3,6,9],
    lineOneD:[1,5,9],
    lineTwoD:[3,5,7],
}

const gamePlayerPositions: string[][] = []

const board = document.getElementById('Board') as HTMLDivElement
const square = () => {
    const c = document.createElement('div')
    c.classList.add('square')
    return c
}
const circle = () => {
    const e = document.createElement('div')
    e.classList.add('circle')
    return e
}


const getPlayerSymbol = {
    [PLAYER.PLAYER1]: square,
    [PLAYER.PLAYER2]: circle,
}

let currentPlayer: PLAYER = PLAYER.PLAYER1;

const eventToAdd = addValue.bind(this)
board.addEventListener('click', eventToAdd)

function addValue(event: Event){
    const target = event.target as HTMLDivElement;
    if(target.id !== 'grid' || target.children.length > 0) return;
    const symbolToDraw = getPlayerSymbol[currentPlayer]();
    symbolToDraw.classList.add(currentPlayer)
    target.appendChild(symbolToDraw)
    const playerPositions = getPlayerPositions(currentPlayer)
    const won = checkWinningLogic(playerPositions);

    if(won)  {
        const gameFinished = document.createElement('p')
        gameFinished.innerText = currentPlayer + ' won '
        board.after(gameFinished)
        board.removeEventListener('click', eventToAdd)
        return
    }
    currentPlayer = currentPlayer === PLAYER.PLAYER1 ? PLAYER.PLAYER2 : PLAYER.PLAYER1 
}

function checkWinningLogic(playerPositions: number[]): boolean {
    if(playerPositions.length < 3) return;
    for (const conditionArray in winningConditions) {
        const currentCheckingLine =  winningConditions[conditionArray]
        const result = currentCheckingLine.every(wp => playerPositions.includes(wp)) 

        if(result) return result
    }
    return false
}

function getPlayerPositions(player: PLAYER){
    let playerMovesPosition: number[] = []
    const boardState = board.children
    for (let index = 0; index < boardState.length; index++) {
        const playerSymbol = boardState.item(index).children[0];
        if(playerSymbol?.classList.contains(player)) playerMovesPosition.push(index+1)
    }
    return playerMovesPosition
}
function play() {

}




export default play