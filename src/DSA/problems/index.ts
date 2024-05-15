import {isPalindrome as palindromeChecker, isLinkedListPalindrome as isLinkedListPalindromeChecker } from './palidrome'
import {getFibonacciNumber as getFibonacciNumberFinder} from './fabonachi'
import {isAnagram as isAnagramChecker} from './anagram'
import {getSumOfNumbers as getSumOfNumbersFinder} from './get_sum_of_numbers'
import {getMaxProfit as getMaxProfitFinder} from './max_profit'
import {secondLargestSome as secondLargestSomeFinder, rotateArrayOptimal as rotateArrayChecker} from './array'

import LinkedList from '../DS/linked-list'

import { executeWithGenerator} from '../../executor'    
import { values } from 'lodash'

const isPalindrome = () =>  
    executeWithGenerator((prams: number) => palindromeChecker(prams), 0, palindromeCases);

const isLinkedListPalindrome = () => {
    executeWithGenerator((prams: LinkedList<number>) => isLinkedListPalindromeChecker(prams), 0, linkedListPalindromeCases());
}

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
const linkedListPalindromeCases = () => {
    return palindromeCases.map(value => {
        const ls = new LinkedList<number>()
        let numbers = [...value.toString()].map(v => +v)
        ls.add(numbers)
        return ls
    })
}
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
    rotateArray,
    isLinkedListPalindrome
}