export default class Node<T> {
    data: T;
    next: Node<T>;
    constructor(data: T) {
        this.data = data
        this.next = null
    }

    duplicate(): Node<T> {
        const newNode = new Node<T>(this.data)
        return newNode
    }
}