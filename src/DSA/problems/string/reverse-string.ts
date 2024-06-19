// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"


export function reversString(st: string, k:number): string {
    let s = [...st]
    let length = s.length; 

    let toConvert = true

    const convertor = (st:string[]):string[] => {
        if(st.length <=1) return [...st]
        const itemRemoved = st[0];
        return [...convertor(st.slice(1)), itemRemoved]
    }

    for(let index = 0; index < length;) {
        const countToConvert = index + k > length ? length - index : k
        if(!toConvert)  {
            index = index + countToConvert
            toConvert = !toConvert
            continue
            };
        toConvert = !toConvert
        const convertedStringArray = convertor(s.slice(index, index+countToConvert))
        s.splice(index, countToConvert, ...convertedStringArray)
        index = index + countToConvert
    }

    return s.join('')
}