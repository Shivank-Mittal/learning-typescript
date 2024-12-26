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



//Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


function reverseStringWords(st: string) {
    let s = st.trim();
    s = s.split('').filter(word => word.length).reverse().join(' '); 

}
