// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3



export function findIslands(graph: number[][]): number {
    const visited = new Set();
    let islandCount = 0;

    function dfs(rowI = 0, columnI = 0, diary: {[key:string]: boolean} = {}) {
        if(rowI < 0 || columnI < 0 || !graph[rowI] || !graph[rowI][columnI] ) return false;
        const cell = graph[rowI][columnI];
        if (cell === 0) return false
        if(visited.has(`${rowI}-${columnI}`)) return  visited.has(`${rowI}-${columnI}`);
        visited.add(`${rowI}-${columnI}`)
        dfs(rowI, columnI+ 1, diary)
        dfs(rowI, columnI - 1, diary)
        dfs(rowI -1, columnI, diary)
        dfs(rowI + 1, columnI, diary)
    }


    for (let rowI = 0; rowI < graph.length; rowI++) {
        const row = graph[rowI];
        for (let columnI = 0;columnI < row.length; columnI++) { 
            if(visited.has(`${rowI}-${columnI}`) || graph[rowI][columnI] === 0) continue
            dfs(rowI, columnI)
            islandCount ++
        }
    }

    return islandCount
}

export function findConnectedIslandsWithObjectInput(list:{[key: number]:number[]}) {

    const visited = new Set<number>();
    let islandCount = 0;


    function dfs(path: number[]) {
        for (let index = 0; index < path.length; index++) {
            const node = path[index];
            if(visited.has(node)) continue;
            visited.add(node);
            dfs(list[node])
        }
    }

    for (let l in list) {
        if(!visited.has(+l)) {
            dfs(list[l])
            islandCount++
        }
    }

    return islandCount
}


export function findBiggestIsland(graph: number[][]): number {
    const visited = new Set();
    let islandCount = 0;
    let maxArea = Number.NEGATIVE_INFINITY;

    function dfs(rowI = 0, columnI = 0, diary: {[key:string]: boolean} = {}): number{
        if(rowI < 0 || columnI < 0 || !graph[rowI] || !graph[rowI][columnI] ) return 0;
        const cell = graph[rowI][columnI];
        if (cell === 0) return 0
        if(visited.has(`${rowI}-${columnI}`)) return  0
        visited.add(`${rowI}-${columnI}`)
        
        const right = dfs(rowI, columnI+ 1, diary)
        const left = dfs(rowI, columnI - 1, diary)
        const top = dfs(rowI -1, columnI, diary)
        const bottom = dfs(rowI + 1, columnI, diary)

        return  right + left + top + bottom + 1;
    }


    for (let rowI = 0; rowI < graph.length; rowI++) {
        const row = graph[rowI];
        for (let columnI = 0;columnI < row.length; columnI++) { 
            if(visited.has(`${rowI}-${columnI}`) || graph[rowI][columnI] === 0) continue
            maxArea = Math.max(dfs(rowI, columnI), maxArea)
            islandCount ++
        }
    }

    return maxArea
}