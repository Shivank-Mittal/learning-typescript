//Anagram
function isAnagramSelf(letter1: string, letter2: string) {
    if(letter1.length === 0 || (letter1.length !== letter2.length) ) return false;

    const sorted1 = letter1.split('').sort().join('')
    const sorted2 = letter2.split('').sort().join('')
    return sorted1 === sorted2;
}

//Group Anagrams

//// Example 1:
//// Input: strs = ["eat","tea","tan","ate","nat","bat"]
//// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

//// Example 2:
//// Input: strs = [""]
//// Output: [[""]]

//// Example 3:
//// Input: strs = ["a"]
//// Output: [["a"]]


function groupAnagram(strs: string[]){
    const anagramMap: Map<string, string[]>= new Map()
    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('')
       if(anagramMap.has(sortedStr)) {
        anagramMap.get(sortedStr)!.push(str)
       }else {
        anagramMap.set(sortedStr,[str])
       }
    })
    
    return anagramMap.values()
}

export {
    isAnagramSelf as isAnagram,
    groupAnagram
}