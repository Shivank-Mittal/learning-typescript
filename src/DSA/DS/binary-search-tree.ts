import { BinaryTree}  from './binary-tree'
import { QueueWithObject as Queue}  from './queue'

export default class BinarySearchTree<T> {
    private _rootNode: BinaryTree<T> | null;

    get root(){
        return this._rootNode;
    }

    constructor( value: T | null = null) {
        if(value) {
            this._rootNode = new BinaryTree(value);;
        }   
    }

    addMany(values: T[]) {
        values.forEach(this.add.bind(this))
    }

    add(value: T) {
        const newNode = new BinaryTree(value);
        if(this.isEmpty) {
            this._rootNode = newNode;
            return;
        }

        this._rootNode && this.insertNode(this._rootNode, newNode)
    }

    contains(value:T):boolean {
        if(this.isEmpty) return false
        return this.searchNode(this._rootNode, value);
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

    levelOrder() {
        const queue = new Queue<BinaryTree<T>>();
        queue.enqueue(this.root);
        while(queue.size()){
            const removedElement = queue.dequeue();
            console.log(removedElement.value);

            if(removedElement.left) queue.enqueue(removedElement.left)
            if(removedElement.right) queue.enqueue(removedElement.right)
        }
    } 

    private searchNode(rootNode: BinaryTree<T> | null, valueToSearch: T): boolean {
        if(!rootNode) return false
        if(valueToSearch === rootNode.value)  return true;
        return valueToSearch < rootNode.value ? this.searchNode(rootNode.left, valueToSearch): this.searchNode(rootNode.right, valueToSearch)
    }

    private insertNode(rootNode: BinaryTree<T>, newNode: BinaryTree<T>) {
        if(newNode.value < rootNode.value) {
            if(rootNode.left === null){
                rootNode.left = newNode
            }else this.insertNode(rootNode.left, newNode);            
        } 

        if(newNode.value > rootNode.value) {
            if(rootNode.right === null){
                rootNode.right = newNode
            }else this.insertNode(rootNode.right, newNode);            
        } 
    }

    isTreeBST(node: BinaryTree<T>): boolean {
        if(!node) return

        if(node.left && node.left.value > node.value) return false;
        if(node.right && node.right.value < node.value ) return false;

        const isLeftTree = this.isTreeBST(node.left)
        const isRightTree = this.isTreeBST(node.right)

        return isLeftTree && isRightTree
    }

    get isEmpty(): boolean {
        return !this._rootNode
    }
}


export class BinarySearchTreeModified<T> extends BinaryTree<T> {
    private _rootNode: BinaryTree<T> | null;

    get root(){
        return this._rootNode;
    }

    constructor( value: T | null = null) {
        super(value);
        if(value) {
            this._rootNode = new BinaryTree(value);;
        }   
    }

    addMany(values: T[]) {
        values.forEach(this.add.bind(this))
    }

    add(value: T) {
        const newNode = new BinaryTree(value);
        if(this.isEmpty) {
            this._rootNode = newNode;
            return;
        }

        this._rootNode && this.insertNode(this._rootNode, newNode)
    }

    contains(value:T):boolean {
        if(this.isEmpty) return false
        return this.searchNode(this._rootNode, value);
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

    levelOrder() {
        const queue = new Queue<BinaryTree<T>>();
        queue.enqueue(this.root);
        while(queue.size()){
            const removedElement = queue.dequeue();
            console.log(removedElement.value);

            if(removedElement.left) queue.enqueue(removedElement.left)
            if(removedElement.right) queue.enqueue(removedElement.right)
        }
    } 

    private searchNode(rootNode: BinaryTree<T> | null, valueToSearch: T): boolean {
        if(!rootNode) return false
        if(valueToSearch === rootNode.value)  return true;
        return valueToSearch < rootNode.value ? this.searchNode(rootNode.left, valueToSearch): this.searchNode(rootNode.right, valueToSearch)
    }

    private insertNode(rootNode: BinaryTree<T>, newNode: BinaryTree<T>) {
        if(newNode.value < rootNode.value) {
            if(rootNode.left === null){
                rootNode.left = newNode
            }else this.insertNode(rootNode.left, newNode);            
        } 

        if(newNode.value > rootNode.value) {
            if(rootNode.right === null){
                rootNode.right = newNode
            }else this.insertNode(rootNode.right, newNode);            
        } 
    }

    isTreeBST(node: BinaryTree<T>): boolean {
        if(!node) return

        if(node.left && node.left.value > node.value) return false;
        if(node.right && node.right.value < node.value ) return false;

        const isLeftTree = this.isTreeBST(node.left)
        const isRightTree = this.isTreeBST(node.right)

        return isLeftTree && isRightTree
    }

    get isEmpty(): boolean {
        return !this._rootNode
    }
}