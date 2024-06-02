function findString(array: string[]) {

}

function bruteForce(array: string[], str: string) {
    array.forEach((v, i) => {
        if(v === str) return i 
    })
}

/**
 * Performs a binary search on a sorted array of strings to find the index of a specified string.
 * 
 * @param {string[]} array - The sorted array of strings to search.
 * @param {string} str - The string to search for within the array.
 * @param {number} [start=0] - The starting index of the search range.
 * @param {number} [end=array.length] - The ending index of the search range.
 * @returns {number | undefined} The index of the string if found, otherwise undefined.
 */
function binarySearch(array: string[], str: string, start: number = 0, end: number = array.length): number | undefined {
    const mid = Math.floor((end - start) / 2 + start);
    const midValue = array[mid];
    if (midValue === str) return mid;
    if (start >= end) return undefined;

    if (str < midValue) {
        return binarySearch(array, str, start, mid - 1);
    } else {
        return binarySearch(array, str, mid + 1, end);
    }
}
