// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


export function twoSum(nums: number[], target: number) {
    const numsLength =nums.length;
    const record = new Map<number, number>();
    record.set(nums[0], 0);
    for (let index = 1; index < numsLength; index++) {
        const remaingValue = target - nums[index];
        if(record.has(remaingValue)) {
            
        }
    }
}