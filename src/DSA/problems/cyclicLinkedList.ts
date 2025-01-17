import {LinkListNode} from "../DS/node";

function isLinkedListIsCyclic(ls: LinkListNode<number>) {
    const store = new Map();
    let currentNode = ls

    while (currentNode.next) {
        if(store.get(currentNode)) return true;
        
        store.set(currentNode, 1);
        currentNode = currentNode.next
    }
    return false
}


// By Tortoise & Hore algorithm
function isLinkedListIsCyclicTH(head: LinkListNode<number>): boolean {
    let fast = head.next
    let slow = head
    if(!fast || !fast.next || !slow || !slow.next) return false;
    while(fast.next && fast.next.next) {
        if(fast === slow) return true;
        fast = fast.next.next
        slow = slow.next!
    }
    return false
}

export {
    isLinkedListIsCyclicTH as isLinkedListIsCyclic
}