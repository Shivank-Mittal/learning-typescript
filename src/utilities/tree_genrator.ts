import {ISearchTree} from '../DSA/Behaviour/search/tree-search'
import {Tree} from '../DSA/DS/node'
import {BinaryTree} from '../DSA/DS/binary-tree'
import {mergeSort} from '../DSA/algorithm/sort'

function getTree(values: number[], searchBehavior :ISearchTree<number>, levels: number = 1) {
    if(!values.length || levels <= 0) return null;
    
    
    const currentNode =  new Tree<number>(values.shift()!, searchBehavior);

    function fillTree(node: Tree<number>, currentLevel: number) {

        if (currentLevel >= levels || !values.length) {
            return;
        }

        const childrenCount = Math.min(values.length, Math.floor(values.length / (2 ** currentLevel)));

        for (let i = 0; i < childrenCount; i++) {
            const child = new Tree<number>(values.shift()!, searchBehavior)
            node.children.push(child);
            fillTree(child, currentLevel + 1);
        }
    }

    fillTree(currentNode, 1);

    return currentNode
}

function getBinaryTree(values: number[], searchBehavior :ISearchTree<number>) {

    if (!values.length) {
        return null;
    }

    // Create the root node with the first value
    const root = new BinaryTree<number>(values.shift()!, searchBehavior);

    // Recursive function to populate the tree
    function populateTree(node: BinaryTree<number>, values: number[]) {
        if (!values.length) {
            return;
        }
        // Assign left child
        if (values.length) {
            node.left = new BinaryTree<number>(values.shift()!, searchBehavior);
        }

        // Assign right child
        if (values.length) {
            node.right = new BinaryTree<number>(values.shift()!, searchBehavior);
        }

        if (values.length) {
            const midPoint = Math.ceil(values.length/2);
            populateTree(node.left, values.slice(0, midPoint))
            populateTree(node.right, values.slice(midPoint))
        }
    }

    // Start populating the tree from the root
    populateTree(root, values);

    return root;
}

export class TreeBuilder {
    private treeLevel = 0;
    private isBinaryTree = false;

    constructor(private values: number[], private treeSearchBehavior: ISearchTree<number> ) { }


    get value(): number[] {
        return this.values;
    }

    level(level: number) {
        this.treeLevel = level;
        return this;
    }

    searchBehavior(searchBehavior: ISearchTree<number>) {
        this.treeSearchBehavior = searchBehavior;
    }

    updateValues( values: number[]) {
        this.values = values
        return this;
    }

    isBinary(isBinaryTree: boolean) {
        this.isBinaryTree = isBinaryTree;
        return this;
    }

    public build(): Tree<number> | null {
        const tree = this.isBinaryTree ?
            getBinaryTree(this.values, this.treeSearchBehavior):
            getTree(this.values, this.treeSearchBehavior, this.treeLevel) ;

        return tree
    }
}

export class TreeDirector {

    private builder: TreeBuilder;

    constructor(builder: TreeBuilder) {
        this.builder = builder;
    }

    get tree() {
        return this.builder.build();
    }

    get binaryTree(): BinaryTree<number> {
        return this.builder.isBinary(true).build() as BinaryTree<number>;
    }

    get binarySearchTree(): BinaryTree<number>  {
        const sortedValue =  mergeSort(this.builder.value);
        return this.builder.updateValues(sortedValue).isBinary(true).build() as BinaryTree<number> ;
    }

} 