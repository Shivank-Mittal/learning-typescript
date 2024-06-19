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
    if(nums.length === 1) return nums;
    const productArray: number[] = []

    const productOfAll = nums.reduce((prev, curr) => {
        return prev ? prev*curr: prev
    }, 1)

    nums.forEach(v => productArray.push(productOfAll/v))

    return nums
}