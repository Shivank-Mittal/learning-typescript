// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


export function mergeSortedArray(numsA: number[], numsB:number[], a:number, b:number): number[] {

    let pointerA = a - 1 ;
    let pointerB = 0;

    while(numsB.length) {
        if(pointerA <= 0) {
            numsA.splice(numsA.length, 0, numsB[0])
            numsB.shift()
        }
        if(numsA[pointerA] <= numsB[pointerB]) {
            numsA.splice(pointerA + 1, 0, numsB[pointerB])
            numsB.shift()
            pointerA--;
            pointerB++
        }
        else {
            pointerA--
        }
        
    }
    return numsA
}


export function mergeSortedArrayWithSorting(numsA: number[], numsB:number[], a:number, b:number): number[] {
    numsA.length = numsA.length - b;

    const c = numsA.concat(numsB)
    return mergeSort(c)
}

function mergeSort(c: number[]): number[] {
    let mid = Math.floor(c.length/2);
    let left = c.slice(0, mid)
    let right = c.slice(mid, c.length);

    let computedArrayLeft = left.length > 1 ? mergeSort(left): left;
    let computedArrayRight = right.length > 1 ? mergeSort(right): right;

    const sorted = (leftC: number[], rightC: number[]) => {
        const sorted:number[] =  []
        while(leftC.length && rightC.length) {
            leftC[0] < rightC[0] ? sorted.push(leftC.shift()!): sorted.push(rightC.shift()!);
        }
        return [...sorted, ...leftC, ...rightC];
    }

    return sorted(computedArrayLeft, computedArrayRight);
}