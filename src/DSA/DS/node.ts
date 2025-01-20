import {  ISearchTree} from '../Behaviour/search/tree-search'

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

export class Tree<T>{
    value: T;
    children: Tree<T>[] = []
    protected searchBehavior: ISearchTree<T>; 
    constructor(value:T, searchBehavior: ISearchTree<T>) {
        this.value = value;
        this.searchBehavior = searchBehavior;
    }

    search(valueToFind: T): Tree<T> | undefined {
        return this.searchBehavior.search(valueToFind, this)
    }

}


