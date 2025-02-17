import { BinaryTree } from "../DSA/DS/binary-tree";

export default function(prams: any) {
    const value = [1, 4, 5, 8, 9, 0 ,2  , 8, 0]
    return minSubArrayLen(7, [2,3,1,2,4,3]);
}

function findFirst(pram: number[], value: number): number {
    if(pram.length <= 1) {
        return pram[0] === value ?  0 : -1;
    }

    if(Number(pram[0] === value)) {
        return 0;
    }
    const returnedValue = findFirst(pram.slice(1), value);
    return Number(returnedValue > -1) + returnedValue;
}

const store = new Map<number, number>([])

function fibonacci(value: number): number {
    if(value === 0) return 0;
    if(value === 1) return 1;

    const valueMinusOne = store.get(value - 1) || fibonacci(value - 1);
    const valueMinusTwo = store.get(value - 2) || fibonacci(value - 2);
    const total = valueMinusOne + valueMinusTwo;
    store.set(value, total)
    return total;
}

function fibonacciWithSum(value: number): number {
    if(value === 0) return 0;
    if(value === 1 || value === 2 ) return 1;

    var pointer = 3 

    function fib(previousSome: number, previousValue: number) {
        if(pointer === value) {
            return previousValue;
        }

        ++pointer
        return fib(previousValue, (previousSome + previousValue))
    }

    return fib(1, 2)
}


function powerOFANumber(value: number, power: number): number {
    if(power === 1) return value;

    return powerOFANumber(value, --power) * value;
}


function sumOfNNumbers( value: number): number {
    if(value === 1) return 1;
    return value + sumOfNNumbers(value - 1)
}


function gcdWithBruteforce(numOne: number, numTwo: number) {
    const divisibleOFOne : number[] = [];
    const divisibleOFTwo : number[] = [];

    for(let i = 2; i <= numOne; i++) {
        if(numOne % i === 0) divisibleOFOne.push(i);
    }

    for(let i = 2; i <= numTwo; i++) {
        if(numTwo % i === 0) divisibleOFTwo.push(i);
    }

    for (let index = divisibleOFOne.length - 1; index >= 2; index--) {
        const element = divisibleOFOne[index];
        if(divisibleOFTwo.some((elementTwo) => elementTwo === element)) {
            return element
        }
    }
    return 0
}


function minSubArrayLen(target: number, nums: number[]): number {
    let maxArraySize = 0;
    let sum = 0;
    let start = 0;

    for(let index = 0; index <= nums.length; index++) {
        sum = sum + nums[index];
    
        while(start <= index && sum >= target) {
            maxArraySize = updateMaxArray(start, index + 1, maxArraySize);
            sum = sum - nums[start++];
        }
    }

    return maxArraySize  
};

function updateMaxArray(start: number, finish: number, oldArrayLength:number): number {
    const newLength = finish - start;
    if(!oldArrayLength) return newLength;

    return oldArrayLength > newLength ? newLength: oldArrayLength
}



function treePractice() {
 const binaryTree = new BinaryTree(5);
 binaryTree.left = new BinaryTree(3)
}
