// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Example 1:
// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.


// Example 2:
// Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]


export function findPath(graph: number[][], position = 0, visited = new Set<number>()): number[][]{

    const neighbors = graph[position];
    if(!neighbors.length || position === graph.length - 1) {
       return [[position]]
    }

    visited.add(position)
    const paths: number[][] = []
    for (let index = 0; index < neighbors.length; index++) {
        const neighbor = neighbors[index];
        const returnedValues = findPath(graph, neighbor, visited)
        returnedValues.forEach(returnedValue => {
            if(returnedValue.includes(graph.length - 1)) {
                returnedValue.unshift(position)
                paths.push( returnedValue)
            }
        })
       
    }

    return paths
}


export function findPathWithEdges(n: number, edges: number[][], source: number, destination: number): boolean {

    const queue:number[] = [source];
    const visited = new Set<number>();

    const graph = new Map<number, Array<number>>();
    for(const [src, dest] of edges){
        if(!graph.has(src))
        graph.set(src, []);
        if(!graph.has(dest))
        graph.set(dest, []);
        
        graph.get(src).push(dest);
        graph.get(dest).push(src);
    }
        
    function searchBFS(): boolean{
        if(!queue.length) return false;
        const node = queue.shift();
        if(node === destination) return true;
   
        const neighbours = graph.get(node)
        
        neighbours.forEach(neighbour => {
            if(visited.has(neighbour)) return;
            visited.add(neighbour)
            queue.push(neighbour)
        });

        return searchBFS()
    }

    return searchBFS()
}