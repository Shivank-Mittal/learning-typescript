// Maximum ways to travel from top left position to right bottom when you can only travel only down or right.
// Solving with dynamic programming.




export function findPathIn2DArray(row:number, column:number, state = new Map<string, number>()): number {
    if(row === 0 || column ===0) return 0
    if(row === 1 && column === 1) return 1

    const key = row + ',' + column;

    const visited = state.get(key)
    if(visited) return visited
    
    const left = findPathIn2DArray(row -1, column, state);
    const right = findPathIn2DArray(row , column - 1, state);
    state.set(key, left + right)
    return state.get(key)
}


// Without memoised function the time Complexity  = O(2^m+n)
// Without memoised function the time Complexity  = O(2^m+n)
// Space complexity in both the conditions is = O(m+n)