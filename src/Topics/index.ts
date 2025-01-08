import * as promise from './promise/index'
import Calculator from './calculator'
import calculateTicketTime from './ticket-time-calculate'
import {lengthOfLastWord}  from './string'
import {nonWritableObject} from './objects';
import {testEvent} from './events';
import {executeMemoiseFunction, executeGeneratorMemoiseFn, memoizeFn} from './memoization/memoization';
import  closure from './closures';
import {testGeneratorFunction} from './generator';


export {
    promise,
    Calculator,
    calculateTicketTime,
    lengthOfLastWord,
    nonWritableObject,
    testEvent,
    executeMemoiseFunction, 
    executeGeneratorMemoiseFn, 
    memoizeFn,
    closure,
    testGeneratorFunction
}