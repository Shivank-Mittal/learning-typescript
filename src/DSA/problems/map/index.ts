import ransomeFunction  from "./ransome";


const ransome = () =>
     executeWithGenerator( (pram: [string, string]) => ransomeFunction(pram[0], pram[1]), 3, prams)



const prams = [
    ["aa", "aab"],
    ["a", "b"],
    ["aa", "ab"]
]


export {
    ransome
}