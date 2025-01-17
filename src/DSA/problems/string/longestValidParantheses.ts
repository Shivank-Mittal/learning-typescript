// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
// substring
// .

 

// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:
// Input: s = ")()())"

// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:
// Input: s = ""
// Output: 0


export function longestValidParentheses(s: string) {
    if(s === '') return 0
    let startCounting = false;
    const counterMap = new Map<string, number>();
    counterMap.set('(', 0);
    counterMap.set(')', 0);

    let sArray = s.split('');

    for (let i = 0; i < sArray.length; i++) {
        let currentValue = counterMap.get(sArray[i])!
        if(sArray[i] === '(') startCounting = true;
        startCounting && counterMap.set(sArray[i], ++currentValue)
    }

    const totalStart = counterMap.get('(')!
    const totalEnd = counterMap.get(')')!
    const valueToReturn = totalStart < totalEnd ? totalStart: totalEnd;
    return valueToReturn * 2
}