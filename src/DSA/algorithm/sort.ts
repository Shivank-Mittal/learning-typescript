// Bubble sort
function bubbleSortSelf(unsortedArray: number[]) {

    let counter = unsortedArray.length
    let isSorted = false

    while(counter && !isSorted) {
        isSorted = true
        for (let pointer = 0; pointer < unsortedArray.length -1; pointer++) {
            const firstValue = unsortedArray[pointer]
            const SecondValue = unsortedArray[pointer + 1];
            if(firstValue > SecondValue) {
                unsortedArray[pointer] = SecondValue;
                unsortedArray[pointer + 1] = firstValue;
                isSorted = false
            }
        } 
        --counter
    }
    return unsortedArray;
}


// Merge sort
function mergeSortSelf(unsortedArray: number[]) {

    const mergeSort = (unsortedArray: number[]) => {
        const midValue  = Math.floor((unsortedArray.length ) / 2)
        const leftArray = unsortedArray.slice(0, midValue)
        const rightArray = unsortedArray.slice(midValue)

        const leftSortedArray: number[] = leftArray.length > 1 ?  mergeSortSelf(leftArray) : leftArray
        const rightSortedArray: number[] = rightArray.length > 1 ?  mergeSortSelf(rightArray) : rightArray
        return merge(leftSortedArray, rightSortedArray)
    }
    
    
    const merge = (left: number[], right: number[]) => {
        const sortedArray = [] as number[];
        while(left.length && right.length) {
            left[0] < right[0] ? sortedArray.push(left.shift()) : sortedArray.push(right.shift())
        }

        return [...sortedArray, ...left, ...right];
    }

    return mergeSort(unsortedArray)
}



export {
    bubbleSortSelf as bubbleSort,
    mergeSortSelf as mergeSort
}