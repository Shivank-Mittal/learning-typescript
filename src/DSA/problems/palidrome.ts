export function isPalindrome(value: number) {
    const valueInArray = [...value.toString()]
    const palindromeLength =  valueInArray.length - 1;
    const loopLength = Math.floor(valueInArray.length/2);

    for (let index = 0; index < loopLength; index++) {
        const firstElement = valueInArray[index];
        const lastElement = valueInArray[palindromeLength - index]

        if(firstElement !== lastElement) {
            return false
        }
        
    }
    return true
}

