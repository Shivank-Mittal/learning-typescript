import ransomeFunction  from "./ransome";
import validPranthesesFunction from './valid_paranthes';

const ransome = () =>
     executeWithGenerator( (pram: [string, string]) => ransomeFunction(pram[0], pram[1]), 3, ransomePrams);

const validPrantheses = () =>
    executeWithGenerator( (pram: [string]) => validPranthesesFunction(pram[0]), 0, validPranthesesPrams);



const ransomePrams = [
    ["aa", "aab"],
    ["a", "b"],
    ["aa", "ab"]
]

const validPranthesesPrams = [
    ["()"],
    ["()[]{}"],
    ["(]"],
    ["([])"],
]


export {
    ransome,
    validPrantheses
}