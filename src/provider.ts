import * as promiseTypes from './Topics/promises'
import Calculator from './Topics/calculator'
import calculateTicketTime from './Topics/ticket-time-calculate'
import {lengthOfLastWord}  from './Topics/string'
import ChangeColor  from './Projects/asyncProjects/change_background_color/change-background-color'
import {addCircle} from './Projects/circle-generator';
import {nonWritableObject} from './Topics/objects';
import {testEvent} from './Topics/events';
import {executeMemoiseFunction} from './Topics/memoization';
import  closure from './Topics/closures';
import {testGeneratorFunction} from './Topics/generator';


export const provider = {
    promise: promiseTypes,
    Calculator,
    calculateTicketTime,
    lengthOfLastWord,
    ChangeColor,
    addCircle,
    nonWritableObject,
    testEvent,
    executeMemoiseFunction,
    closure,
    testGeneratorFunction
}