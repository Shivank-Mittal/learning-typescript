// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
// A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.

 

// Example 1:

// Input: board = [                [
//     ["X","X","X","X"],  output  ["X","X","X","X"],
//     ["X","O","O","X"],    =>    ["X","X","X","X"],
//     ["X","X","O","X"],          ["X","X","X","X"],
//     ["X","O","X","X"]           ["X","O","X","X"]
// ]                               ]


// Explanation:
// In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

// Example 2:
// Input: board = [["X"]]
// Output: [["X"]]



export function captureIsland(graph: string[][]) {

    const rows = graph.length;
    const columns = graph[0].length
    const visited = new Set();

    const islandsToCapture: number[][][] = []

    function getCaptureLand (rowIndex = 0, columnIndex = 0): number[][] {

        if(
            rowIndex < 1 || 
            columnIndex < 1 || 
            rowIndex >= rows - 1 || 
            columnIndex >= columns -1  || 
            graph[rowIndex][columnIndex] === 'X' ||
            visited.has(rowIndex + ',' + columnIndex)
        ) return [[]]

        visited.add(rowIndex + ',' + columnIndex);

        const top = getCaptureLand(rowIndex - 1, columnIndex)
        const bottom = getCaptureLand(rowIndex + 1, columnIndex)
        const left = getCaptureLand(rowIndex , columnIndex - 1)
        const right = getCaptureLand(rowIndex, columnIndex + 1)

        return [...top, ...bottom, ...left, ...right, [rowIndex, columnIndex]]
    }

    for (let rowIndex = 0; rowIndex < graph.length; rowIndex++) {
        const row = graph[rowIndex];
        for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
            if(visited.has(rowIndex + ',' + columnIndex) && graph[rowIndex][columnIndex] === 'O') continue;
            const coordinates = getCaptureLand(rowIndex, columnIndex).filter(a => a.length)
            if(coordinates.length) islandsToCapture.push(coordinates);
        }
    }

    for (let islandIndex = 0; islandIndex < islandsToCapture.length; islandIndex++) {
        const island = islandsToCapture[islandIndex];
        island.forEach(coordinates => {
            graph[coordinates[0]][coordinates[1]] = 'X'
        })
    }

    console.log(graph)

}