import {
     binarySearch as binarySearchAlgo, 
     binarySearchSortAgnostic as binaryAgnostic,
     trinarySearch as trinarySearchAlgo
    } from './binanry-search';

import {
     bubbleSort as bubbleSorting,
     mergeSort as mergeSorting
    } from './sort';

import {pascalTree as pascalTreeGenerator} from './pascal-tree'
import floodFillFinder from './flood-fill'
import { getArray, getRandomArray } from '../../utilities/array_generator'    


const binarySearch = () =>  
    executeWithGenerator((algoInput: [number[], number]) => binarySearchAlgo(algoInput[0], algoInput[1]), 0, prams);

const binarySearchSortAgnostic = () => 
    executeWithGenerator((algoInput: [number[], number]) => binaryAgnostic(algoInput[0], algoInput[1]), 0, prams);

const trinarySearch = () => 
    executeWithGenerator((algoInput: [number[], number]) => trinarySearchAlgo(algoInput[0], algoInput[1]), 0, prams);

const bubbleSort = () => 
    executeWithGenerator((algoInput: number[]) => bubbleSorting(algoInput), 0, [getRandomArray(100)]);

const mergeSort = () => 
    executeWithGenerator((algoInput: number[]) => mergeSorting(algoInput), 0, sortCases);

const pascalTree = () => {
    executeWithGenerator((numRows: number) => pascalTreeGenerator(numRows), 0, [[1,2,3,4]]);
}

const floodFill = () => {
    executeWithGenerator((numRows: number) => floodFillFinder(), 0, [[1,2,3,4]]);
}


const pascalTreeCase = [
    5, 0, 3, 10
]
const prams = [
    [[-5, 2, 4, 6, 10], 10],
    [[-5, 2, 4, 6, 10], 6],
    [[-5, 2, 4, 6, 10], 20],
    [getArray(1000000), 1000000],
    [getArray(100, -100), 0],
    [getArray(100, -100), -10],
    [getArray(1000000), 0],
    [getArray(10000, -1000), 5000],
    [getArray(0), 500000],
]
const sortCases = [
    [3, 4, 9, 7, 5],
    [3, 5, 13, 2, 20],
    [5, 4, 3, 2, 1],
    [3],
    []
]

export {
    binarySearch,
    binarySearchSortAgnostic,
    trinarySearch,
    bubbleSort,
    mergeSort,
    pascalTree,
    floodFill
}