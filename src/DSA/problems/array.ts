// Second largest sum
function secondLargestSome(values: number[]) {
    if(values.length <= 1) return -1

    let largest = values[0]
    let secondLargest = -1

    for (let index = 1; index < values.length; index++) {
        const currentValue = values[index]
        if(currentValue > largest) {
            secondLargest = largest;
            largest = currentValue;
            continue
        }
        
        if(currentValue > secondLargest ) secondLargest = currentValue
    }

    return secondLargest;
}

// Rotate the array for n steps
function rotateArray(values:number[], stepsToRotate: number):number[] {
    while (stepsToRotate) {
        const removedValue = values.pop(); 
        values.unshift(removedValue)
        --stepsToRotate
    }
    return values
}

// Rotate the array for n steps raw code
function rotateArrayRaw(arrayToRotate:number[], stepsToRotate: number):number[] {
    
    const rotate = (values:number[], stepsToRotateLocal: number): number[] => {
        if(!stepsToRotate) return values;
        const lastValue = values[values.length - 1]
        values.length = values.length - 1
        return rotate([lastValue, ...values], --stepsToRotate)
    }
    return rotate(arrayToRotate, stepsToRotate)
}

// Rotate the array for n steps raw code more Optimal
function rotateArrayOptimal(arrayToRotate:number[], stepsToRotate: number):number[] {
    const arrayToReverse = arrayToRotate.slice((arrayToRotate.length - stepsToRotate ))
    arrayToRotate.length = arrayToRotate.length - stepsToRotate 
    return [...arrayToReverse, ...arrayToRotate ]
    
}



export {
    secondLargestSome,
    rotateArray,
    rotateArrayRaw,
    rotateArrayOptimal
}