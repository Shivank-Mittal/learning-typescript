function getSumOfNumbers(numbArray:number[], target: number): number[] {
    if(numbArray.length === 0) return [-1];
    
    const mem = new Map<number, number>();

    const search = (value: number, index: number): number[]  => {
        if(value === target) [index]
        const toFind = target - value;
        const isValuePresent = mem.get(toFind)

        if(isValuePresent) return [mem.get(toFind)!, index]
        mem.set(value, index) ;
        return search(numbArray[index + 1], index + 1)
        
    }

    return search(numbArray[0], 0);
}

export {
    getSumOfNumbers
}