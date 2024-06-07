import { isSubsequence as isSubSequenceFinder} from './isSubSequence';
import { longestValidParentheses as longestValidParanthesesFinder} from './longestValidParantheses';
import { matchCamelCase as matchCamelCaseFinder} from './camel-case-patter';
import { convertCameToKebabCase as convertCameToKebabCaseConverter} from './camerCase_to-kebab-case'

import { executeWithGenerator } from '../../../executor';


export const isSubsequence = () => {
    executeWithGenerator( (v: {s:string, t:string}) => isSubSequenceFinder(v.s, v.t), 0, mergeSortedArrayCases)
}

export const longestValidParantheses = () => {
    executeWithGenerator( (v: string) => longestValidParanthesesFinder(v), 0, longestValidParanthesesCases)
}

export const matchCamelCase = () => {
    executeWithGenerator((v:{queries: string[], pattern: string}) => matchCamelCaseFinder(v.queries, v.pattern), 0, matchCamelCaseCase)
}

export const convertCameToKebabCase = () => {
    executeWithGenerator((v:string) => convertCameToKebabCaseConverter(v), 0, camelCase)
}

const mergeSortedArrayCases = [
    {s: "abc", t:"ahbgdc"}
]
const longestValidParanthesesCases = ['(()', ')()())', '', '()(())'];

const matchCamelCaseCase = [
    {queries: ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern: 'FB'}
]

const camelCase = [
    'testCamelCase'
]
