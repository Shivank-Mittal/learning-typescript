import { isSubsequence as isSubSequenceFinder} from './isSubSequence'
import { longestValidParentheses as longestValidParanthesesFinder} from './longestValidParantheses'

import { executeWithGenerator } from '../../../executor';


export const isSubsequence = () => {
    executeWithGenerator( (v: {s:string, t:string}) => isSubSequenceFinder(v.s, v.t), 0, mergeSortedArrayCases)
}

export const longestValidParantheses = () => {
    executeWithGenerator( (v: string) => longestValidParanthesesFinder(v), 0, longestValidParanthesesCases)
}

const mergeSortedArrayCases = [
    {s: "abc", t:"ahbgdc"}
]


const longestValidParanthesesCases = ['(()', ')()())', '', '()(())'];
