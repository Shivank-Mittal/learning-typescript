import LinkedList from "../DS/linked-list";

function isPalindromeSelf(value: number) {
    const valueInArray = [...value.toString()]
    const palindromeLength =  valueInArray.length - 1;
    const loopLength = Math.floor(valueInArray.length/2);

    for (let index = 0; index < loopLength; index++) {
        const firstElement = valueInArray[index];
        const lastElement = valueInArray[palindromeLength - index]

        if(firstElement !== lastElement) {
            return false
        }
        
    }
    return true
}

function isPalindromeLearned(value: number) {
    return value < 0 ? false: value === +value.toString().split("").reverse().join("")
}

function isLinkedListPalindrome(linkedList: LinkedList<number>) {
    const linkedListString = linkedList.toString();
    const reversedLinkedList = linkedList.reverse().toString()
    return linkedListString === reversedLinkedList
}

export {
    isPalindromeLearned as isPalindrome,
    isLinkedListPalindrome
}


