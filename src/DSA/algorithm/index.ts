import {
     binarySearch as binarySearchAlgo, 
     binarySearchSortAgnostic as binaryAgnostic,
     trinarySearch as trinarySearchAlgo
    } from './binanry-search';

import { executeWithGenerator} from '../../executor'    
import { getArray } from '../../utilities/array_generator'    


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


const binarySearch = () =>  
    executeWithGenerator((algoInput: [number[], number]) => binarySearchAlgo(algoInput[0], algoInput[1]), 0, prams);
const binarySearchSortAgnostic = () => 
    executeWithGenerator((algoInput: [number[], number]) => binaryAgnostic(algoInput[0], algoInput[1]), 0, prams);
const trinarySearch = () => 
    executeWithGenerator((algoInput: [number[], number]) => trinarySearchAlgo(algoInput[0], algoInput[1]), 0, prams);

export {
    binarySearch,
    binarySearchSortAgnostic,
    trinarySearch
}