 export class QueueWithArray <T> {
    private items:T[] = [];

    /**
     * Adds an element to the end of the queue.
     * @param value - The element to be added to the queue.
     */
    enqueue(value: T){
        this.items.push(value)
    }

     /**
     * Removes an element to the top of the queue.
     * @return The element removed from the queue. If the queue is empty, undefined is returned.
     */
    dequeue():T | undefined {
        return this.items.shift()
    }

    peek():T | null {
        if(this.isEmpty()) return null
        return this.items[0];
    }

    isEmpty(): boolean {
        return !this.items?.length 
    }

    size(): number {
        return this.items.length;
    }

    print() {
        console.log(this.items.join(","))
    }
 }


 export class QueueWithObject<T> {
    private items: {[Key: number]: T} = {}
    private front = 0;
    private end = 0;

    enqueue(value: T) {
        this.items[this.end] = value;
        ++this.end
    }

    dequeue(): T{
        const returnValue = this.items[this.front];
        delete this.items[this.front];
        ++this.front;
        return returnValue
    }

    get isEmpty():boolean {
        return this.end - this.front === 0;
    }

    peek():T {
        return this.items[this.front]
    }

    size(): number {
        return (this.end - this.front);
    }

    print() {
        console.log(this.items)
    }
 }