import { mergeSortedArray as mergeSortedArrayFn, mergeSortedArrayWithSorting} from './merge_sorted_array';
import { removeElement as removeElementFn } from './remove_element';
import { minimumSumLength as minimumSumLengthFinder} from './minimum_sum_length';


export const mergeSortedArray = () => {
    executeWithGenerator( (v:{numsA: number[], numsB:number[], a:number, b:number}) => mergeSortedArrayWithSorting(v.numsA, v.numsB, v.a, v.b), 0, mergeSortedArrayCases)
}

export const removeElement = () => {
    executeWithGenerator( (v:{a:number[], v:number }) => removeElementFn(v.a, v.v), 0, removeElementCases)
}

export const minimumSumLength = () => {
    executeWithGenerator( (v:{a:number[], v:number }) => minimumSumLengthFinder(v.a, v.v), 0, removeElementCases)
}

const mergeSortedArrayCases = [{numsA:  [1,2,3,0,0,0], numsB: [2,5,6], a: 3, b: 3},
    {
        numsA:[-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        numsB: [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9],
        a: 55,
        b: 99
    }
]

const removeElementCases = [
    {a : [3,2,2,3], v: 3 },
    {a: [0,1,2,2,3,0,4,2], v:2}
    
]