import { Tree } from "../../DS/node";

export interface ISearchTree<T> {
    search(value: T, searchContext: Tree<T>): Tree<T> | undefined;
}