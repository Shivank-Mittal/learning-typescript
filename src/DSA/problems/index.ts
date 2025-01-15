import {isPalindrome as palindromeChecker, isLinkedListPalindrome as isLinkedListPalindromeChecker } from './palidrome'
import {getFibonacciNumber as getFibonacciNumberFinder} from './fabonachi'
import {isAnagram as isAnagramChecker, groupAnagram as groupAnagramChecker} from './anagram'
import {getSumOfNumbers as getSumOfNumbersFinder} from './get_sum_of_numbers'
import {getMaxProfit as getMaxProfitFinder} from './max_profit'
import {secondLargestSome as secondLargestSomeFinder, rotateArrayOptimal as rotateArrayChecker} from './array'
import { isLinkedListIsCyclic as isLinkedListIsCyclicChecker } from './cyclicLinkedList';
import { concatSortedLinkedList as concatSortedLinkedListTester } from './mergeTwoLinkedList';
import { productOfSumExceptSelf as productOfSumExceptSelfGetter } from './product-of-sum';
import { findPathIn2DArray as findPathIn2DArrayFinder } from './gridTraveler';
import { sumOfNumbersInList as sumOfNumbersInListFinder, sumOfTwoNumbers as sumOfTwoNumbersFinder } from './sum_of_numbers';
import { tribonacci as tribonacciFinder } from './tribonacci';
import * as arrays from './array/array_index'
import * as string from './string/string-index'
import * as treeAndGraph from './tree-and-graph/tree-index'
import * as dp from './dynamic-programing/dp-index'
import * as map from './map/index'

import getLinkedList from '../../utilities/linked_list_generator'
import LinkedList from '../DS/linked-list'

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

const isCyclicLinkedList = () => 
    executeWithGenerator((ls: LinkedList<number>) => isLinkedListIsCyclicChecker(ls.findAt(0)), 0, cyclicLinkedListCases)

const concatSortedLinkedList = () => 
    executeWithGenerator(
        (ls: [LinkedList<number>, LinkedList<number>]) => concatSortedLinkedListTester(ls[0].head, ls[1].head), 0, linkedListSorted)

const groupAnagram = () => {
    executeWithGenerator((ls: string[]) => groupAnagramChecker(ls), 0, anagramGroupCases)
}

const productOfSumExceptSelf = () => {
    executeWithGenerator((nums :number[]) => productOfSumExceptSelfGetter(nums),0 , [[1,2,3,4], [-1,1,0,-3,3]] )
}

const tribonacci = () => {
    executeWithGenerator((nums :number) => tribonacciFinder(nums), 0, tribonacciCases )
}

const sumOfNumbersInList = () => {
    executeWithGenerator((nums :number[]) => JSON.stringify(sumOfNumbersInListFinder([2, 3, 5, 7], 7)), 5 )
}

const sumOfTwoNumbers = () => {
    executeWithGenerator((v :{n: number[], t: number}) => JSON.stringify(sumOfTwoNumbersFinder(v.n, v.t)), 0, sum_of_numbersCases )
}


const findPathIn2DArray = () => {
    executeWithGenerator((nums :number[]) => findPathIn2DArrayFinder(nums[0], nums[1]), 0, findPathIn2DArrayCases )
}

const palindromeCases = [121, 134431, 1345431, 11, 123324]
const linkedListPalindromeCases = () => {
    return palindromeCases.map(value => {
        const ls = new LinkedList<number>()
        let numbers = [...value.toString()].map(v => +v)
        ls.add(numbers)
        return ls
    })
}
const fibonacciCases = [1, 2 , 3, 5, 8, 121];
const anagramCases = [ ['abc', 'acb'], ['ccaaab', 'bccaaa'], ['abc', 'cds'] ];
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
const cyclicLinkedListCases = [
    (() => {
        let ls = new LinkedList<number>();
        ls.add([1, 1, 1, 1])
        let lastElement = ls.findAt(ls.size - 1)
        lastElement.next = ls.findAt(0);
        return ls
    })(),
    (() => {
        let ls = new LinkedList<number>();
        ls.add([1, 4, 3, 4, 5, 8])
        let thirdElement = ls.findAt(3)
        let lastElement = ls.findAt(ls.size - 1)
        lastElement.next = thirdElement
        return ls
    })(),
   
]
const sum_of_numbersCases = [
    {n: [2, 7, 11, 15], t: 9},
    {n: [2,3,4], t: 6},
    {n: [-1,0], t: -1},
    {n: [0,0,3,4], t: 0 }
]

const linkedListSorted = [
    [getLinkedList([-8,-6,-6,-3,0,4,4,8]), getLinkedList([-7,-4,-3,0,5])],
    [getLinkedList([1,2,4]), getLinkedList([1,3,4])],
    [getLinkedList([]), getLinkedList([0])],
]

const anagramGroupCases  = [["eat","tea","tan","ate","nat","bat"], [""], ["a"]]

const findPathIn2DArrayCases = [
    [2, 3],
    [5, 6],
    [3, 2],
    [18, 18],
]

const tribonacciCases = [4, 25]


export {
    isPalindrome,
    getFibonacciNumber,
    isAnagram,
    getSumOfNumbers,
    getMaxProfit,
    secondLargestSome,
    rotateArray,
    isLinkedListPalindrome,
    isCyclicLinkedList,
    concatSortedLinkedList,
    groupAnagram,
    productOfSumExceptSelf,
    findPathIn2DArray,
    sumOfNumbersInList,
    sumOfTwoNumbers,
    tribonacci,
    arrays,
    string,
    treeAndGraph,
    dp,
    map
}