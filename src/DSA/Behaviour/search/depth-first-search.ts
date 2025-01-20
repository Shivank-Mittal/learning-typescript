import { Tree } from "../../DS/node";
import { ISearchTree } from "./tree-search";

export class DepthFirstSearch implements ISearchTree<number> {


    /**
     * Find the Node from the tree.
     * @param valueToFind 
     * @param searchContext: root node.
     * @returns node of the sub tree or undefined if not found.
     */
    search(value: number, searchContext: Tree<number>): Tree<number> | undefined {
           return this.dfs(value, searchContext.value, searchContext);
    }

    private dfs(valueToFind: number, currentValue:number, searchContext: Tree<number>): Tree<number> | undefined {
        if(valueToFind === currentValue) return searchContext;

        for (const node of searchContext.children) {
            return this.dfs(valueToFind, node.value, node)
        }

        return undefined
    }
}