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

export class Tree<T> {
    value: T;
    children: Tree<T>[] = []
    constructor(value:T) {
        this.value = value;
    }
}


