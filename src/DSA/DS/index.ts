import LinkedList from './linked-list'

import { executeWithGenerator} from '../../executor'  

const ls = new LinkedList();


const linkedListDemo = () => executeWithGenerator(() => {
    debugger
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

export {
    linkedListDemo
}