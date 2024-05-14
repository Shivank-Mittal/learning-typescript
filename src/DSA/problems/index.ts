import {isPalindrome as palindromeChecker} from './palidrome'
import {getFibonacciNumber as getFibonacciNumberFinder} from './fabonachi'
import {isAnagram as isAnagramChecker} from './anagram'
import {getSumOfNumbers as getSumOfNumbersFinder} from './get_sum_of_numbers'
import {getMaxProfit as getMaxProfitFinder} from './max_profit'
import {
    secondLargestSome as secondLargestSomeFinder,
    rotateArrayOptimal as rotateArrayChecker

} from './array'

import { executeWithGenerator} from '../../executor'    

const isPalindrome = () =>  
    executeWithGenerator((prams: number) => palindromeChecker(prams), 0, palindromeCases);

const getFibonacciNumber = () =>  
    executeWithGenerator((prams: number) => getFibonacciNumberFinder(prams), 0, fibonacciCases);

const isAnagram = () =>  
    executeWithGenerator( (prams:[string, string]) => isAnagramChecker(prams[0], prams[1]), 0, anagramCases);

const getSumOfNumbers = () =>  
    executeWithGenerator( (prams:[number[], number]) => getSumOfNumbersFinder(prams[0], prams[1]), 0, getSumOfNumbersCases);

const getMaxProfit = () =>  
    executeWithGenerator( (prams:number[]) => getMaxProfitFinder(prams), 0, getMaxProfitCases);

const secondLargestSome = () =>  
    executeWithGenerator( (prams:number[]) => secondLargestSomeFinder(prams), 0, getMaxProfitCases); 

const rotateArray = () =>  
    executeWithGenerator( (prams:[number[], number]) => rotateArrayChecker(prams[0], prams[1]), 0, rotateCases); 

const palindromeCases = [121, 134431, 1345431, 11, 123324]
const fibonacciCases = [1, 2 , 3, 5, 8, 121]
const anagramCases = [
    ['abc', 'acb'],
    ['ccaaab', 'bccaaa'],
    ['abc', 'cds']
] 

const getSumOfNumbersCases = [
    [[1, 2, 3, 4], 7],
    [[1, 2, 3, 4], 5],
    [[1, 2, 3, 4, 5], 9],
]

const rotateCases = [
    [[1, 2, 3, 4], 2],
    [[1, 2, 3, 4], 1],
    [[1, 2, 3, 4, 5], 8],
]

const getMaxProfitCases = [
    [2,4,1],
    [1, 2, 3, 4],
    [4, 1, 3, 8],
    [4, 1, 3, 8],
    [8, 5, 1, 3, 7],
]



export {
    isPalindrome,
    getFibonacciNumber,
    isAnagram,
    getSumOfNumbers,
    getMaxProfit,
    secondLargestSome,
    rotateArray
}