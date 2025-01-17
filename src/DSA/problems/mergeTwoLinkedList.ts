import LinkedList from "../DS/linked-list";
import {LinkListNode as ListNode} from "../DS/node";

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]



function concatSortedLinkedList(list1: ListNode<number> | null, list2: ListNode<number>| null): ListNode<number> | null {

    let currentOfListOne = list1;
    let currentOfListTwo = list2;

    let newNode: ListNode<number> | null = new ListNode(-1);
    let lastElement: ListNode<number> = newNode;

    const moveFirstList = (currentOfListOne: ListNode<number> | null):  ListNode<number> | null =>{
        lastElement.next = currentOfListOne;
        lastElement = lastElement.next!;
        return currentOfListOne && currentOfListOne.next

    }

    const moveSecondList = (currentOfListTwo: ListNode<number> | null):  ListNode<number> | null =>{
        lastElement.next = currentOfListTwo;
        lastElement = lastElement.next!;
        return currentOfListTwo && currentOfListTwo.next
    }

    while(currentOfListOne && currentOfListTwo) {
        if(currentOfListOne.value < currentOfListTwo.value) {
            currentOfListOne = moveFirstList(currentOfListOne)
        }
        else if(currentOfListOne.value > currentOfListTwo.value) {
            currentOfListTwo = moveSecondList(currentOfListTwo)
        }
        else if(currentOfListOne.value === currentOfListTwo.value) {
            currentOfListOne = moveFirstList(currentOfListOne)
            currentOfListTwo = moveSecondList(currentOfListTwo)
        }
    } 

    while(currentOfListOne) {
        currentOfListOne = moveFirstList(currentOfListOne)
    }

    while(currentOfListTwo) {
        currentOfListTwo = moveSecondList(currentOfListTwo)
    }

    newNode = newNode.next
    return newNode

}

export {
    concatSortedLinkedList
}