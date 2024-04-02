export default class Executor {
    public execute(functionToExecute: Function | Function[]):void {
        if (typeof functionToExecute === 'function') {
            this.executeFunction(functionToExecute);
            return;
        }

        const fnCollection = functionToExecute as Array<Function>

        fnCollection.forEach(fn => fn())
    }

    public async executeAsync(functionToExecute: Function | Function[]) {
        if (typeof functionToExecute === 'function') {
            await functionToExecute;
            return;
        }
        const initPromise = Promise.resolve();
        

        const fnCollection = functionToExecute as Array<Function>
        let fn; 
        
        fnCollection.forEach(fn => initPromise.then(() => { 
            return fn()
            })
        )
    }


    private executeFunction(functionToCalled: Function) {
        functionToCalled();
    }
    
}