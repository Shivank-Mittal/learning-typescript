import {
    binarySearch, 
    binarySearchSortAgnostic,
    trinarySearch
   } from './binanry-search';

import {
    bubbleSort,
    mergeSort
   } from './sort';

import {pascalTree} from './pascal-tree'
import floodFill from './flood-fill'
import { getArray, getRandomArray } from '../../utilities/array_generator'    

function testValues() { 
    return {
        pascalTreeCase: [ 5, 0, 3, 10],
        sortCases: [
            [3, 4, 9, 7, 5],
            [3, 5, 13, 2, 20],
            [5, 4, 3, 2, 1],
            [3],
            []
         ],
        search: [
            [[-5, 2, 4, 6, 10], 10],
            [[-5, 2, 4, 6, 10], 6],
            [[-5, 2, 4, 6, 10], 20],
            [getArray(1000000), 1000000],
            [getArray(100, -100), 0],
            [getArray(100, -100), -10],
            [getArray(1000000), 0],
            [getArray(10000, -1000), 5000],
            [getArray(0), 500000],
        ]}
}

export {
   binarySearch,
   binarySearchSortAgnostic,
   trinarySearch,
   bubbleSort,
   mergeSort,
   pascalTree,
   floodFill,
   testValues
}