export declare class LinkListNode<T> {
    value: T;
    next: LinkListNode<T> | null;
    constructor(data: T);
    duplicate(): LinkListNode<T>;
}
export declare class TreeNode<T> {
    value: T;
    left: TreeNode<T>;
    right: TreeNode<T>;
    constructor(value: T);
}
