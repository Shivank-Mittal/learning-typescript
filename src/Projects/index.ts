import ChangeColor  from './asyncProjects/change_background_color/change-background-color'
import {addCircle} from './circle-generator';
import {computeAmount} from './accunting-funciton/calculate-acount'
import {twoWayBinding as twoWayBindingChecker } from  './two-way-data-binding/two-way-binding'
import play from  './Tic-Tak-Toe/tic-tak-toe'
import {autoComplete} from './autocomplete-bar/autocomplete-bar'
import { boxColorLauncher } from './box-color/box-color-index'
import todoLauncher from './To-do/todoLauncher'

// execute(()=> {
//     return computeAmount().lack(15).crore(15).crore(2).lack(20).thousand(45).crore(7).value()
// }, 'OnClick')

const checker = twoWayBindingChecker()
const twoWayBinding = () => executeWithGenerator(checker.check, 0, twoWayBindingCases)


const twoWayBindingCases = [
   {value: 23, type: 'state' }, 
   {value: null, type: 'Input' }, 
   {value: 53, type: 'state'}, 
   {value: null, type: 'Input' }, 
   {value: 58, type: 'state'}, 
]



function projectsLauncher() {
    const projectSection = document.getElementById("projectsSection");
    projectSection!.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLDivElement;
        if(target.id === "toDo") {
            todoLauncher()
        }
    })
}

export default(() => {
    projectsLauncher();
    return { 
        ChangeColor,
        addCircle,
        computeAmount,
        twoWayBinding,
        play,
        autoComplete,
        boxColorLauncher,
        todoLauncher}
})