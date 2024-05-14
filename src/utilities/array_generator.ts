export function getArray( value = 100000, starting = 0){
    value = value + 1;
    
    const returnArray = [] as number[]
    for (starting ; starting < value; starting++) {
        returnArray.push(starting);
    }
    return returnArray;
}

export function getRandomArray( value = 100000, starting = 0){
    value = value + 1;
    
    const returnArray = [] as number[]
    for (starting ; starting < value; starting++) {
        returnArray.push(Math.floor(Math.random() * value));
    }
    return returnArray;
}