import { Tree } from "../../DS/node";
import { QueueWithObject } from "../../DS/queue";
import { ISearchTree } from "./tree-search";

export class BreathFirstSearch implements ISearchTree<number> {

     /**
     * Find the Node from the tree.
     * @param valueToFind 
     * @param searchContext: root node
     * @returns node of the sub tree or undefined if not found
     */
    search(value: number, searchContext: Tree<number>) {
        const queue =  new QueueWithObject<Tree<number>>();
        queue.enqueue(searchContext)

        while(queue.size()) {
            const currentTree = queue.dequeue();
            if(value === currentTree.value ) return currentTree;
            const children = currentTree.children;

            for (const child of children) {
                queue.enqueue(child)
            }  
        }

        return undefined;
    }

}