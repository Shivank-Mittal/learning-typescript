function isAnagramSelf(letter1: string, letter2: string) {
    if(letter1.length === 0 || (letter1.length !== letter2.length) ) return false;

    const sorted1 = letter1.split('').sort().join('')
    const sorted2 = letter2.split('').sort().join('')
    return sorted1 === sorted2;
}


export {
    isAnagramSelf as isAnagram
}