// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

 

// Example 1:

// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:

// Input: n = 25
// Output: 1389537

const memoize: {[key: number]: number} = {}
export function tribonacci(n: number): number {
    if(n <= 0) return 0;
    if(n === 1 || n === 2) return 1;

    if(memoize[n]) { return memoize[n]}
    const valueOfCurrentN = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    memoize[n] = valueOfCurrentN
    return valueOfCurrentN
}