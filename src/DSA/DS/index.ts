import LinkedList from './linked-list'
import BinarySearchTree from './binary-search-tree'
import { QueueWithArray, QueueWithObject} from './queue' 
import { DepthFirstSearch} from '../Behaviour/search/depth-first-search'
import { BreathFirstSearch} from '../Behaviour/search/breath-for-search'
import { Tree } from './node'
import { TreeDirector, TreeBuilder } from '../../utilities/tree_genrator'
import { BinaryTree } from './binary-tree'


const linkedListDemo = () => executeWithGenerator(() => {
    const ls = new LinkedList();
        ls.add(24)
        ls.add([25, 26, 27, 28, 29, 30, 31])
        ls.addToTail(32)
        ls.addAt(32, 5)

        ls.forEach((value:number) => {
            console.log(value)
        })

        ls.reverse();
        ls.forEach((value:number) => {
            console.log(value)
        })

        ls.toString()

        // console.log(ls.removeFromHead())
        // console.log(ls.removeFromTail())
    }, 5)


const binarySearchTree = () => executeWithGenerator(() => {
    const bst = new BinarySearchTree(10, new BreathFirstSearch());
    console.log(bst.isEmpty)

    bst.addMany([5, 15, 3, 7])

    console.log('Pre order')
    bst.printPreOrder(bst.root)
    console.log('In order')
    bst.printInOrder(bst.root) 
    console.log('Post Order')
    bst.printPostOrder(bst.root)
    console.log('level Order')
    bst.levelOrder()

    bst.isTreeBST(bst.root);

    console.log(bst.contains(3))
    console.log(bst.contains(55))
}, 5)

const queue = () => executeWithGenerator(() => {
    const fillQueue = function(queue: QueueWithArray<number>| QueueWithObject<number>, values: number[]){
        for (let index = 0; index < values.length; index++) {
            queue.enqueue(values[index]);
            
        }
    }

    const queueWithArray = new QueueWithArray<number>();
    fillQueue(queueWithArray, [1, 2, 3, 4]);
    console.log(queueWithArray.peek())
    queueWithArray.print()
    console.log(queueWithArray.size())


    const queueWithObjet = new QueueWithObject<number>();
    fillQueue(queueWithObjet, [1, 2, 3, 4]);
    console.log(queueWithObjet.peek())
    queueWithObjet.print()
    console.log(queueWithObjet.size())

}, 5)



const treeWithSearching = () => executeWithGenerator(() => {
    debugger
    const treeBuilder =  new TreeBuilder([1, 4, 8, 3, 9, 0, 2, 6, 12, 27, 16], new BreathFirstSearch())
    treeBuilder.level(3)
    const treeDirector = new TreeDirector(treeBuilder);
    const tree = treeDirector.tree
    tree?.search(12);
    
}, 5)


const BinaryTreeWithSearching = () => executeWithGenerator(() => {
    debugger
    const treeBuilder = new TreeBuilder([1, 4, 8, 3, 9, 0, 2, 6, 12, 27, 16], new BreathFirstSearch())
    treeBuilder.level(3)
    treeBuilder.isBinary(true);
    const treeDirector = new TreeDirector(treeBuilder);
    const tree = treeDirector.binaryTree?.search(12) as BinaryTree<number>;

    tree.printInOrder(tree);
    
}, 5)

const BinarySearchTreeWithSearching = () => executeWithGenerator(() => {
    debugger
    const treeBuilder = new TreeBuilder([1, 4, 8, 3, 9, 0, 2, 6, 12, 27, 16], new DepthFirstSearch())
    treeBuilder.level(3)
    treeBuilder.isBinary(true);
    const treeDirector = new TreeDirector(treeBuilder);
    const tree = treeDirector.binarySearchTree?.search(12) as BinaryTree<number>;

    tree.printInOrder(tree);
    
}, 5)



export {
    linkedListDemo,
    binarySearchTree,
    queue, 
    treeWithSearching,
    BinaryTreeWithSearching,
    BinarySearchTreeWithSearching
}