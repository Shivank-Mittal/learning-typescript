import { LinkListNode } from './node';
export default class LinkedList<T> implements Iterable<LinkListNode<T>> {
    private _head;
    constructor(node?: LinkListNode<T> | null);
    add(data: T | T[]): void;
    addToTail(data: T): void;
    addAt(data: T, index: number): void;
    removeFrom_Head(): T;
    removeFromTail(): T;
    findAt(index: number): LinkListNode<T>;
    find(valueToFind: T): LinkListNode<T>;
    forEach(callback: Function): void;
    reverse(): this;
    get size(): number;
    get head(): LinkListNode<T>;
    toString(delimiter?: string): string;
    private addToList;
    [Symbol.iterator](): Iterator<LinkListNode<T>>;
}
