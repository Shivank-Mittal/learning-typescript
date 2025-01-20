
export function binarySearch( input: number[], target:number){
    let stepsTakenToFindTheTarge = 0;
    
    function findValue(start: number, end: number): number {

        if(start > end) {
            return -1;
        }

        const midIndex = Math.floor((start + end)/2)
        const midValue = input[midIndex];
        stepsTakenToFindTheTarge += 1
        if(midValue === target ) {
            return midIndex;
        }
        let nextStart, nextEnd
        
        if(midValue > target) {
            nextStart = start
            nextEnd = midIndex - 1
        }else {
            nextStart = midIndex + 1
            nextEnd = end
        } 
        return findValue(nextStart, nextEnd)
    } 
    
    return findValue(0, input.length -1)
}

export function binarySearchSortAgnostic(input: number[], target:number) {
    let stepsTakenToFindTheTarge = 0;
    
    function findValue(inputToScan: number[]) {
        if(inputToScan.length <= 1 ) return;
        const midIndex = Math.floor((inputToScan.length - 1)/2)
        const midValue = inputToScan[midIndex];
        stepsTakenToFindTheTarge += 1
        if(midValue === target ) {
            return;
        }
        const nextArrayToScan = midValue > target ? inputToScan.slice(0, midIndex) : inputToScan.slice(midIndex + 1);
        findValue(nextArrayToScan)

    } 
    findValue(input)
    return stepsTakenToFindTheTarge
}


export function trinarySearch(input: number[], target:number) {
    let stepsTakenToFindTheTarge = 0;
    
    function findValue( input: number[]) {
        if(input.length <= 1) {
            return
        }
        stepsTakenToFindTheTarge += 1

        const mid1 = Math.floor((input.length - 1)/3);
        const mid2 = Math.floor(mid1 * 2);

        if(input[mid1] === target || input[mid2] === target) return;

        if(input[mid1] > target ) {
            findValue(input.slice(0, mid1 -1))
        }
        else if(input[mid2] < target ) {
            findValue(input.slice(mid2 + 1))
        }
        else {
            findValue(input.slice(mid1, mid2))
        }

    }

    findValue(input);
    
    return stepsTakenToFindTheTarge
}


