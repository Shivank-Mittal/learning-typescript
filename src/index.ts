import {execute, executeWithGenerator} from './executor'
import provider from './provider'

// provider.testEvent()
const getArray = ( value = 100000, starting = 0) => {
    value = value + 1;
    
    const returnArray = [] as number[]
    for (starting ; starting < value; starting++) {
        returnArray.push(starting);
    }
    return returnArray;
}

const arrayToProvide = getArray();

const prams = [
    [getArray(1000000), 1000000],
    [getArray(100, -100), 0],
    [getArray(100, -100), -10],
    [getArray(1000000), 0],
    [getArray(10000, -1000), 5000],
    [getArray(0), 500000],
]

debugger
executeWithGenerator(provider.algo.binarySearchSortAgnostic, 0, prams)

// execute(() => provider.algo.binarySearch(arrayToProvide, value), 'OnClick')
// execute(() => provider.algo.binarySearch(arrayToProvide, 500000), 'OnClick')


