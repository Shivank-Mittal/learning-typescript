
import {LinkListNode} from './node';


export default class LinkedList<T> implements Iterable<LinkListNode<T>> {

    private _head: LinkListNode<T> | null;

    constructor(node: LinkListNode<T> | null = null){
        this._head = node
    }

    add(data: T | T[]) {
        if(Array.isArray(data)) {
            data.reverse().forEach(this.addToList.bind(this))
        }else {
            this.addToList(data)
        }
    }

    addToTail(data: T) {
        if(!this._head) {
            this.add(data);
            return;
        }

        let lastNode = this._head;
        while(lastNode.next) {
            lastNode = lastNode.next
        }
        lastNode.next = new LinkListNode(data);
    }

    /**
     * Removes the node from head
     * @returns removed node or undefined if list is empty
     */
    addAt(data: T, index: number) {

        if(index < 0 || index > this.size) {
            throw new Error('Index is out of bounds');
        }

        const newNode = new LinkListNode(data)
        if(index === 0) {
            newNode.next = this._head;
            this._head = newNode
            return
        }

        let elementAtIndex = this.findAt(index)!;

        const nextElement  = elementAtIndex.next;
        elementAtIndex.next = newNode
        newNode.next = nextElement
    }

    /**
     * Removes the node from head
     * @returns removed node or undefined if list is empty
     */
    removeFrom_Head(): T | undefined {
        if(!this._head) return undefined;
        if(this._head.next) {
            const currentNode = this._head
            this._head = null;
            return currentNode.value;
        };
        const returnNode = this._head
        this._head = this._head.next
        return returnNode.value
    }

    /**
     * Removes the node from tail
     * @returns removed node or undefined if list is empty
     */
    removeFromTail(): T | undefined{
        let currentNode = this._head

        if(!currentNode) return undefined;
        const next = currentNode.next

        if(!next) {
            this._head = null;
            return currentNode.value;
        }

        while(next.next) {
            currentNode = next
        }
        const returnNode = next;
        currentNode.next = null

        return returnNode.value
    }

    /**
     * Find value at index
     * @returns return the node of that index. Or undefined if the index is out of bond.
     */
    findAt(index: number): LinkListNode<T> | undefined{
        if(this.isEmpty() || index < 0 || index >= this.size) return undefined;

        let node = this._head;
        for (let counter = 1; counter <= index; counter++) {
            if (!node || !node.next) return undefined;
            node = node.next
        }
        return node || undefined;
    }

    isEmpty(): boolean {
        return Boolean(this._head)
    }

    /**
     * Find the node with value
     * @returns the node which have matching value. Or undefined if not found.
     */
    find(valueToFind: T): LinkListNode<T> | undefined{
        let node = this._head;
        while(node) {
            if(node.value === valueToFind) return node
            node = node.next
        }

        return undefined
    }

    forEach(callback: Function){ 
        if(this.isEmpty()) return;
        let currentNode = this._head!;

        for (let index = 0; index < this.size; index++) {
            callback(currentNode.value, index, currentNode);
            currentNode = currentNode.next!
        }
    }

    reverse() {
        if(!this.size) return;

        let newList;
        let currentNode = this._head!;
        for (let index = 0; index < this.size; index++) {
            newList = currentNode.duplicate();
            newList.next = newList
            currentNode = currentNode.next!
        }
        this._head = newList!;
        return this;
    }

    get size(): number {
        let counter = 1
        
        if(!this._head || !this._head.next) return 0;
        if(!this._head.next) return 1
            
        let currentNode = this._head;
        while(currentNode.next) {
            counter++
            currentNode = currentNode.next
        }
        return counter
    }

    get head() {
        return this._head
    }

    toString(delimiter: string = ''): string {
        let customString = '';
        this.forEach((value: T) => {
            customString = customString + value + delimiter
        })
        if(delimiter) {
            let tempString = customString.split("")
            tempString.pop()
            customString = tempString.join()
        }
        return customString
    }

    private addToList(data: T) {
        const newNode = new LinkListNode(data);
        newNode.next = this._head;
        this._head = newNode
    }

    // making the linked list iterable, now we can use for..of loop to iterate throw the values.
    *[Symbol.iterator](): Iterator<LinkListNode<T>> {
        let currentValue = this._head
        while(true) {
            if(!currentValue) return
            yield currentValue;
            currentValue = currentValue.next
        }
    } 

}
