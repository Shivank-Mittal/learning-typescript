import { TODO, TodoType } from './to-do'
import { TODOController} from './todoController'
const todoSection = document.getElementById("ProjectSection-Todo");
const todoList = document.getElementById("todoList") as HTMLUListElement;

const todo = new TODO();
const todoController = new TODOController(todo, onTodoClicked);


function launcher() {
    if(!todoSection || todoSection === null) {
        const newDiv = document.createElement('div');
        newDiv.innerText = 'No section found for the Project to be show. Please create a section with id "ProjectSection-Todo".'
        return;
    }
    
    createArena(todoSection);
}

function createArena(todoSection: HTMLElement) { 
    todoSection.style.display = "block"
    const createTodoButton = document.getElementById("create");
    createTodoButton?.addEventListener('click', add);
}

function add() { 
    const todoInputElement = document.getElementById("newTodoText") as HTMLInputElement;
    if(!todoList || !todoInputElement || todoInputElement.value === "") return;
    
    todo.addTodo(todoInputElement.value);
    TODOController.refresh(todoList, todoController.todos);
}

function onTodoClicked(event: Event) {
    const element = event.target as HTMLElement;
    const clickedType = element.getAttribute("name");
    if(clickedType === "todo") {
        done(+element.parentElement.id)
    }

    if(clickedType === "delete") {
        remove(+element.parentElement.id)
    }
    
}


function done(id: number) { 
    todo.toggleTodoState(id);
    TODOController.refresh(todoList, todoController.todos);
}

function remove(id: number) {
    todo.removeTODO(id);
    TODOController.refresh(todoList, todoController.todos);
}



export default launcher