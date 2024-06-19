import { sumOfCoin as sumOfCoinFinder, sumOfCoinPath as sumOfCoinPathFinder} from './sumOfCoin';

import { executeWithGenerator } from '../../../executor';


export const sumOfCoin = () => {
    executeWithGenerator( (v:{a: number[], v:number}) => sumOfCoinFinder(v.a, v.v), 0, removeElementCases)
}

export const sumOfCoinPath = () => {
    executeWithGenerator( (v:{a: number[], v:number}) => sumOfCoinPathFinder(v.a, v.v), 0, removeElementCases)
}


const removeElementCases = [
    {a : [5, 1, 2], v: 11},
    {a: [2], v:3},
    {a: [2, 3, 5], v: 15},
]