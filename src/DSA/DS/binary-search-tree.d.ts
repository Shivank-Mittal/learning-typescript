import { TreeNode } from './node';
export default class BinarySearchTree<T> {
    private _rootNode;
    get root(): TreeNode<T>;
    constructor(value?: T | null);
    addMany(values: T[]): void;
    add(value: T): void;
    contains(value: T): boolean;
    printPreOrder(root: TreeNode<T>): void;
    printInOrder(root: TreeNode<T>): void;
    printPostOrder(root: TreeNode<T>): void;
    levelOrder(): void;
    private searchNode;
    private insertNode;
    isTreeBST(node: TreeNode<T>): boolean;
    get isEmpty(): boolean;
}
