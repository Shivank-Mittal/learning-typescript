import { ISearchTree } from '../Behaviour/search/tree-search';
import { Tree } from './node';
import { QueueWithArray as Queue} from './queue'

export class BinaryTree<T> extends Tree<T> {
    declare children: BinaryTree<T>[];

    constructor(value:T, searchBehavior: ISearchTree<T>) {
        super(value, searchBehavior);
        this.children = []
    }

    get left(): BinaryTree<T> {
        return this.children[0];
    }

    get right(): BinaryTree<T> {
        return this.children[1];
    }

    set left(t: BinaryTree<T>) {
        this.children[0] = t;
    }

    set right(t: BinaryTree<T>) {
        this.children[1] = t;
    }

    /** Find function finds the node of specific value:
    * @return Returns the binary tree with specific value If not found, it returns undefined.
    */

    // find(value: T): BinaryTree<T> {
    //     if(this.value === value ) return this;
    //     let node = undefined;
    //     this.breathFirstSearch((nodeValue: T) => {
    //         if(nodeValue === value) node = nodeValue
    //     }, 'value' )
    //     return node
    // }

    print() {
       this.printInOrder(this)
    }

    printPreOrder(root: BinaryTree<T> ) {
        if(root) {
            console.log(root.value)
            this.printPreOrder(root.left)
            this.printPreOrder(root.right)
        }
    }

    printInOrder(root: BinaryTree<T>) {
        if(root) {
            this.printInOrder(root.left);
            console.log(root.value);
            this.printInOrder(root.right)
        }
    }

    printPostOrder(root: BinaryTree<T>) {
        if(root) {
            this.printPostOrder(root.left);
            this.printPostOrder(root.right);
            console.log(root.value)
        }
    }

}