
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

    addAt(data: T, index: number) {
        if(index < 0 || index > this.size) {
            console.log('Not a valid index');
            return
        }

        const newNode = new LinkListNode(data)
        if(index === 0) {
            newNode.next = this._head;
            this._head = newNode
            return
        }

        let elementAtIndex = this.findAt(index);

        const nextElement  = elementAtIndex.next;
        elementAtIndex.next = newNode
        newNode.next = nextElement
    }

    removeFrom_Head(): T {
        const returnNode = this._head
        this._head = this._head.next
        return returnNode.value
    }

    removeFromTail(): T {
        let currentNode = this._head

        while(currentNode.next.next) {
            currentNode = currentNode.next
        }
        const returnNode = currentNode.next;
        currentNode.next = null

        return returnNode.value
    }

    findAt(index: number): LinkListNode<T>{

        let element = this._head;
        for (let counter = 1; counter <= index; counter++) {
            element = element.next
        }
        return element
    }

    find(valueToFind: T): LinkListNode<T>{
        if(!this.size) {
            return 
        }

        let element = this._head;
        for (let counter = 1; counter < this.size - 1; counter++) {
            if(element.value === valueToFind) return element
            element = element.next
        }
    }

    forEach(callback: Function){ 
        let currentNode = this._head;

        for (let index = 0; index < this.size; index++) {
            callback(currentNode.value, index, currentNode);
            currentNode = currentNode.next
        }
    }

    reverse() {
        if(!this.size) return;

        let newList;
        let currentNode = this._head;
        for (let index = 0; index < this.size; index++) {
            let tempList = newList;
            newList = currentNode.duplicate();
            newList.next = tempList
            currentNode = currentNode.next
        }
        this._head = newList;
        return this;
    }

    get size() {
        let counter = 1
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
        let currentValue: LinkListNode<T> = this._head
        while(true) {
            if(!currentValue) return
            yield currentValue;
            currentValue = currentValue.next
        }
    } 

}
