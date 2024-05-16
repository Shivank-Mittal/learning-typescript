import { TreeNode}  from './node'
import { QueueWithObjet as Queue}  from './queue'

export default class BinarySearchTree<T> {
    private _rootNode: TreeNode<T> | null;

    get root(){
        return this._rootNode;
    }

    constructor( value: T | null = null) {
        if(value) {
            const newNode = new TreeNode(value);
            this._rootNode = newNode;
        }
        
    }

    addMany(values: T[]) {
        values.forEach(this.add.bind(this))
    }

    add(value: T) {
        const newNode = new TreeNode(value);
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

    preOrder(root: TreeNode<T> ) {
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root: TreeNode<T>) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root: TreeNode<T>) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value)
        }
    }

    levelOrder() {
        const queue = new Queue<TreeNode<T>>();
        queue.enqueue(this.root);
        while(queue.size()){
            const removedElement = queue.dequeue();
            console.log(removedElement.value);

            if(removedElement.left) queue.enqueue(removedElement.left)
            if(removedElement.right) queue.enqueue(removedElement.right)
        }
    } 

    private searchNode(rootNode: TreeNode<T> | null, valueToSearch: T): boolean {
        if(!rootNode) return false
        if(valueToSearch === rootNode.value)  return true;
        return valueToSearch < rootNode.value ? this.searchNode(rootNode.left, valueToSearch): this.searchNode(rootNode.right, valueToSearch)
    }

    private insertNode(rootNode: TreeNode<T>, newNode: TreeNode<T>) {
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

    get isEmpty(): boolean {
        return !this._rootNode
    }
}