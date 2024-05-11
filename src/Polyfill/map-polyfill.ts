Object.defineProperty(Array, 'myMap', {enumerable: true, configurable: true, writable: true})
debugger
Array.prototype.map = function(callbackFn: Function) {
    const inputArray = this;
    const returnArray:any = [];

    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        const computedValue = callbackFn(element, index, inputArray);
        console.log(computedValue)
        returnArray.push(computedValue ?? undefined);
    }

    return returnArray 
} 

const a = [1, 3, 5].map((e) => {
    return e * 2
})

console.log(a)

