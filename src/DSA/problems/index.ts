import {isPalindrome as palindromeChecker} from './palidrome'

import { executeWithGenerator} from '../../executor'    

const isPalindrome = () =>  
    executeWithGenerator((palindromeCheckerPram: number) => palindromeChecker(palindromeCheckerPram), 0, palindromeCheckerSample );

const palindromeCheckerSample = [121, 134431, 1345431, 11, 123324]

export {
    isPalindrome
}