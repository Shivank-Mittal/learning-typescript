export class LinkListNode<T> {
    value: T;
    next: LinkListNode<T> | null;
    constructor(data: T) {
        this.value = data
        this.next = null
    }

    duplicate(): LinkListNode<T> {
        const newNode = new LinkListNode<T>(this.value)
        return newNode
    }
}


export class TreeNode<T> {
    value:T;
    left: TreeNode<T> = null;
    right: TreeNode<T> = null;

    constructor(value:T) {
        this.value = value
    }
}