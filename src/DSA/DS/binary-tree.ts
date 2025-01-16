import { Tree } from './node';
import { QueueWithArray as Queue} from './queue'

export class BinaryTree<T> extends Tree<T> {
    declare children: BinaryTree<T>[];

    constructor(value:T) {
        super(value);
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

    find(value: T): BinaryTree<T> {
        if(this.value === value ) return this;
        let node = undefined;
        this.breathFirstSearch((nodeValue: T) => {
            if(nodeValue === value) node = nodeValue
        }, 'value' )
        return node
    }

    print(value: T){
        this.breathFirstSearch((nodeValue: T) => console.log(value), 'value' )
    }

    /** This function do a breath first search and execute callback function on each node.
     * @param callback: Takes a callback function which is called on each node. This call back can take value or node depend on type pram
     * @param type: specify which type of parameter will be passed to the callback function. Option are node value or node. Default is value
    */
    private breathFirstSearch(
        callback: Function, type: 'value' | 'node' = 'value') {
        const queue: Queue<BinaryTree<T>> = new Queue();
        queue.enqueue(this);

        while(queue.size) {
            const currentNode = queue.dequeue();
            const pram = type === 'value' ? currentNode.value : currentNode;
            callback(pram)
            for (let index = 0; index < this.children.length; index++) {
                const node = this.children[index];
                queue.enqueue(node);
            }
        }
    }

}