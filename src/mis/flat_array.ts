// Flat the array



export function flatArray(arrayOfNumbers:  any[]) {

    function getDepth(inputArray: any[], getMaxDepth = 0): number {
        inputArray.forEach( v => {
            const vType = typeof v; 
            if(vType !== 'number') {
                getMaxDepth = getDepth(v, ++getMaxDepth)
            }
        })

        return getMaxDepth
    }

    const getMaxDepth: number = getDepth(arrayOfNumbers);

    return arrayOfNumbers.flat(getMaxDepth)
}