// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency of at least one of the chosen numbers is different.

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
        return null
    }
    if(target === 1 || target < 0) return null;

    for (let index = 0; index < candidates.length; index++) {
        const required:number = target - candidates[index];
        sumOfNumbersInList(candidates, required, [...path,candidates[index] ], store);
    }

    return store;
}
//---------------------------------------------------------------------------------------------------------------


// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].


//Because it is a sorted array we can use two pointer approach;
export function sumOfTwoNumbers(array: number[], target: number) {
    let low = 0;
    let high = array.length - 1;
    while(low < high) {
        const currentLow = array[low]
        const currentHigh = array[high]
        const currentTotal = currentLow + currentHigh 
        if(currentTotal === target) return [low, high]
        if(currentTotal < target) low++;
        if(currentTotal > target) high--;
    }
    return []
}