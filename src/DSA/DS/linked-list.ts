
import Node from './node';


export default class LinkedList<T> implements Iterable<T> {

    private head: Node<T> | null;

    constructor(node: Node<T> | null = null){
        this.head = node
    }

    add(data: T | T[]) {
        if(Array.isArray(data)) {
            data.forEach(this.addToList.bind(this))
        }else {
            this.addToList(data)
        }
    }

    addToTail(data: T) {
        if(!this.head) {
            this.add(data);
            return;
        }

        let lastNode = this.head;
        while(lastNode.next) {
            lastNode = lastNode.next
        }
        lastNode.next = new Node(data);
    }

    addAt(data: T, index: number) {
        if(index < 0 || index > this.size) {
            console.log('Not a valid index');
            return
        }

        const newNode = new Node(data)
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode
            return
        }

        let elementAtIndex = this.findAt(index);

        const nextElement  = elementAtIndex.next;
        elementAtIndex.next = newNode
        newNode.next = nextElement
    }

    removeFromHead(): T {
        const returnNode = this.head
        this.head = this.head.next
        return returnNode.data
    }

    removeFromTail(): T {
        let currentNode = this.head

        while(currentNode.next.next) {
            currentNode = currentNode.next
        }
        const returnNode = currentNode.next;
        currentNode.next = null

        return returnNode.data
    }

    findAt(index: number): Node<T>{
        if(index >= this.size) {
            return 
        }

        let element = this.head;
        for (let counter = 1; counter < index; counter++) {
            element = element.next
        }
        return element
    }

    find(valueToFind: T): Node<T>{
        if(!this.size) {
            return 
        }

        let element = this.head;
        for (let counter = 1; counter < this.size - 1; counter++) {
            if(element.data === valueToFind) return element
            element = element.next
        }
    }

    forEach(callback: Function){ 
        let currentNode = this.head;

        for (let index = 0; index < this.size; index++) {
            callback(currentNode.data, index, currentNode);
            currentNode = currentNode.next
        }
    }

    get size() {
        let counter = 0
        let currentNode = this.head;

        while(currentNode.next) {
            counter++
            currentNode = currentNode.next
        }
        return counter
    }


    private addToList(data: T) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
    }

    // making the linked list iterable, now we can use for..of loop to iterate throw the values.

    *[Symbol.iterator](): Iterator<T> {
        let currentValue: Node<T> = this.head
        while(true) {
            if(!currentValue) return
            yield currentValue.data;
            currentValue = currentValue.next
        }
    } 

}
