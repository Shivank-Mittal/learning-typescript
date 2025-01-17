// Find the sum of the tree

import BST from '../../DS/binary-search-tree';
import {BinaryTree} from '../../DS/binary-tree'


export function findSum (bt:  BST<number> ): number {
    return findSumBFS(bt)
}


function findSumDFT(bt: BST<number>) {

    let sum = 0
    if(!bt.root) return 0
    
    function traverse(node: BinaryTree<number>): number{
        const isLeafNode = !node.left && !node.right
        if(isLeafNode) return node.value
        let leftValue = 0
        let rightValue = 0
        if(node.left) {
            leftValue = traverse(node.left)
        }
        if(node.right) {
            rightValue = traverse(node.right)
        }
        const lastValue = leftValue + rightValue + node.value;
        return lastValue
    }

    let v = traverse(bt.root)
    return v
}


function findSumBFS(bt: BST<number>): number {
    const queue: BinaryTree<number>[] = [];

    let sum = 0
    function traverse(){ 
        if(!queue.length) return
        const removedValue = queue.shift()!;
        sum = sum + removedValue.value
        if(removedValue.left) queue.push(removedValue.left)
        if(removedValue.right) queue.push(removedValue.right)

       traverse()
    }

    queue.push(bt.root)
    traverse()
    return sum
}