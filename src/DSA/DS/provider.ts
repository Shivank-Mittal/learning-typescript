import LinkedList from './linked-list'
import BinarySearchTree from './binary-search-tree'
import { QueueWithArray, QueueWithObject} from './queue' 


const linkedListDemo = () => {
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
    }


function binarySearchTreeDemo () {
    const bst = new BinarySearchTree(10);
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
}

function queueDemo () {
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

}




export {
    LinkedList,
    linkedListDemo,
    binarySearchTreeDemo,
    queueDemo,
    QueueWithArray,
    QueueWithObject
}