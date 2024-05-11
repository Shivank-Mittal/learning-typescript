
export function binarySearch( input: number[], target:number){
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



