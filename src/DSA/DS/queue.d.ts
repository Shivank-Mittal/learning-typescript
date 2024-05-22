export declare class QueueWithArray<T> {
    private items;
    /**
     * Adds an element to the end of the queue.
     * @param value - The element to be added to the queue.
     */
    enqueue(value: T): void;
    dequeue(): T | undefined;
    peek(): T | null;
    isEmpty(): boolean;
    size(): number;
    print(): void;
}
export declare class QueueWithObjet<T> {
    private items;
    private front;
    private end;
    enqueue(value: T): void;
    dequeue(): T;
    get isEmpty(): boolean;
    peek(): T;
    size(): number;
    print(): void;
}
