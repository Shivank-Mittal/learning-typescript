import { findSum as sumFinder} from './sum-tree';
import BST from '../../DS/binary-search-tree'
import { findPath as pathFinder } from './find-path-directed-graph'
import { findIslands as islandFinder, findConnectedIslandsWithObjectInput as connectedIslandCountFinder, findBiggestIsland as findBiggestIslandFinder }  from './connected-island'

import { executeWithGenerator } from '../../../executor';


function treeGenerator(num: number[]) {
    const bt = new BST<number>();
    bt.addMany(num)
    return bt
}

export const sumOfTree = () => {
    executeWithGenerator( (v: BST<number>) => sumFinder(v), 0, mergeSortedArrayCases)
}

export const findPath = () => {
    executeWithGenerator( (v: number[][]) => pathFinder(v), 0, findPathCases)
}

export const findIslands = () => {
    executeWithGenerator( (v: number[][]) => islandFinder(v), 0, findConnectedIsland)
}

export const connectedIslandCount = () => {
    executeWithGenerator( (v: {[key: string]:number[]}) => connectedIslandCountFinder(v), 0, connectedIslandCountCases)
}

export const findBiggestIsland = () => {
    executeWithGenerator( (v: number[][]) => findBiggestIslandFinder(v), 0, findConnectedIsland)
}




const mergeSortedArrayCases = [
    treeGenerator([3, 5, 4, 6, 7, 2, 1])
]


const findPathCases = [
    [[1,2],[3],[3],[]],
    [[4,3,1],[3,2,4],[3],[4],[]]
]

const findConnectedIsland = [
    [
        [1,0,0,1],
        [1,0,0,1],
        [1,1,0,1],
    ],
    [
        [1,1,1,1,0],
        [1,1,0,1,0],
        [1,1,0,0,0],
        [0,0,0,0,0]
    ],
    [
        [1,1,0,0,0],
        [1,1,0,0,0],
        [0,0,1,0,0],
        [0,0,0,1,1]
      ]
]


const connectedIslandCountCases: {[key: string]:number[]}[] = [
    {
        1: [2, 3],
        2: [1, 3],
        3: [1, 2],
        4: [5, 6, 7, 8 ],
        5: [4, 6, 7, 8 ],
        6: [4, 5, 7, 8 ],
        7: [4, 5, 6, 8 ],
        8: [4, 5, 6, 7 ],
        9: [],
    }
]