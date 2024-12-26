import {STATE, TODO, TodoType} from './to-do';

export class TODOController {
    constructor(private todo: TODO, private callback: Function) {}

    public get todos(): HTMLLIElement[] {
        const todos = this.todo.todoList;
        return todos.map(todo => this.createTODO(todo))
    }

    // callback is added to the click event to the LI element,
    // for user to perform specific actions
    private createTODO(todo: TodoType): HTMLLIElement {
        const li = document.createElement("li");
        const todoText = document.createElement("h3");
        todoText.setAttribute("name", "todo");
        const todoDeleteButton = this.getDeleteButton(todo.id.toFixed.toString(), (id: string) => console.log(id));
        todoText.textContent = todo.text
        li.id = todo.id.toString();

        todo.state === STATE.DONE ? todoText.classList.add("todo-completed") : todoText.classList.remove("todo-completed");

        li.appendChild(todoText);
        li.appendChild(todoDeleteButton);

        li.addEventListener('click', (event) => this.callback(event), true)
        return li;
    }

    private getDeleteButton(id: string, callBack: Function):HTMLElement {
        const todoDeleteButton = document.createElement("i");
        todoDeleteButton.classList.add("material-icons")
        todoDeleteButton.classList.add("delete-icon");
        todoDeleteButton.innerText = "delete"
        todoDeleteButton.id = id;
        todoDeleteButton.setAttribute("name", "delete");

        todoDeleteButton.addEventListener('click', callBack.bind(id))
        return todoDeleteButton;
    }

    public static refresh(todoList: HTMLUListElement, todos:HTMLLIElement[]) {
        this.clean(todoList);
        todos.forEach(element => {
            todoList?.appendChild(element);
        })
    }
    
    public static clean(todoList: HTMLUListElement) {
        while(todoList?.firstChild) {
            todoList.removeChild(todoList.firstChild)
        }
    }
}