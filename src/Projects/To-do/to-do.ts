export enum STATE { PROGRESS, DONE }

export type TodoType = {
    id: number,
    text: string,
    state: STATE
}

export class TODO {
    private latestID = 0
    private todos: TodoType[] = [];

    constructor(todos?: TodoType[]) {
        this.todos = todos;
    }

    public get todoList(): TodoType[] {
        return this.todos
    }

    public get latestTodo():TodoType {
        return this.todos.find(todo => todo.id === this.latestID);
    }

    public addTodo(todoText: string) {
        if(todoText === '') return;

        let tempTodo: TodoType = {
            id: ++this.latestID,
            text: todoText,
            state: STATE.PROGRESS
        }

        this.todos.push(tempTodo)
    }

    public removeTODO(id: number) {
        const index = this.findTodoIndex(id)
        if(index === -1) return;
        this.todos.splice(index, 1);
    }

    public updateTodoText(id: number, text: string) {
        this.updateTodo(id, text);
    }

    public updateTodoState(id: number, state: STATE) {
        this.updateTodo(id, null, state);
    }

    public toggleTodoState(id: number) {
        const index = this.findTodoIndex(id);
        const newState = this.todoList[index].state === STATE.DONE ? STATE.PROGRESS : STATE.DONE
        this.updateTodo(id, null, newState);
    }

    // it update the text and state of the todo
    // if state is not given only text is updated
    // if text not provided only state is updated
    private updateTodo(id: number, text?: string, state?: STATE) {
        if(text === undefined && state === undefined) return;

        const index = this.findTodoIndex(id);
        const todo = this.todos[index];
        todo.text = text || todo.text;
        todo.state = state || state === 0 ? state : todo.state;
    }

    // It return -1 if not found;
    private findTodoIndex(id: number) {
        return this.todos.findIndex( todo => todo.id === id)
    }

}