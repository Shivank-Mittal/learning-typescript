
import {memoizeFn} from  './memoization2'

type calculationValues = {
    first: number,
    second: number
}

const values: calculationValues[] =  [
    {first: 100, second:200},
    {first: 200, second:300},
    {first: 100, second:200},
    {first: 200, second:300},
    {first: 50, second:50},
    {first: 50, second:50},
    {first: 100, second:200},
    {first: 200, second:300},

]

const store= {} as {[property:string]: number};

function memoizationSum(prams: calculationValues) { 
    const key = `${prams.first}-${prams.second}`
    if (key in store) {
        return store[key];
    }

    function getFactorial(n:number, value = 0) {
        value += n;
        if(n === 1) {
            return value
        }
        return getFactorial(--n, value)
    }
    const factorialOfFirst = getFactorial(prams.first)
    const factorialOfSecond = getFactorial(prams.second)
    
    const result =factorialOfFirst + factorialOfSecond;
    store[key] = result

    return result;
}

export function executeMemoiseFunction() {
    values.forEach(prams => {
        const startTime = performance.now()
         memoizationSum(prams)
         const endTime = performance.now()
         const timeTake = endTime - startTime
         console.log(`Total time taken for  ${prams.first}-${prams.second} is ${timeTake.toPrecision(5)} `)
        }
    )
}

export function* executeGeneratorMemoiseFn() {

    function execute(prams: calculationValues) {
        const startTime = performance.now()
        memoizationSum(prams)
        const endTime = performance.now()
        return endTime - startTime
    }

    for (let index = 0; index < values.length; index++) {
       yield execute(values[0])
    }
}


export {
    memoizeFn
}