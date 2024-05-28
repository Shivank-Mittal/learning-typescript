// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.


export function sumOfNumbersInList(candidates: number[], target: number, path:number[] = [], store = new Set<string>()): Set<string> | null {
    
    if(target === 0) {
        path.sort()
        const pathS = path.join(',') 
        store.add(pathS)
        return 
    }
    if(target === 1 || target < 0) return;

    for (let index = 0; index < candidates.length; index++) {
        const required:number = target - candidates[index];
        sumOfNumbersInList(candidates, required, [...path,candidates[index] ], store);
    }

    return store
}