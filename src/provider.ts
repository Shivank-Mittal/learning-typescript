import promiseTypes from './Topics/promises'
import Calculator from './Topics/calculator'
import calculateTicketTime from './Topics/ticket-time-calculate'
import {lengthOfLastWord}  from './Topics/string'
import ChangeColor  from './Projects/asyncProjects/change_background_color/change-background-color'


export const provider = {
    promise: promiseTypes,
    Calculator,
    calculateTicketTime,
    lengthOfLastWord,
    ChangeColor
}