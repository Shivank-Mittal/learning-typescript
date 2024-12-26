// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


export function productOfSumExceptSelf(nums: number[]): number[] {
    const left = new Array(nums.length).fill(1)
    const right = new Array(nums.length).fill(1)
    const answer = new Array(nums.length).fill(1)

    for(let index = 1; index < nums.length; index ++) {
        right[index] = nums[index - 1] * right[index - 1]; 
    }

    for(let index = nums.length - 2; index >= 0; index --) {
        left[index] = nums[index + 1] * left[index + 1]
    }

    for(let index = 0; index < left.length; index++) {
        answer[index] = right[index] * left[index]
    }

    return answer
}