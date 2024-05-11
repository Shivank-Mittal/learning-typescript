// write a function which takes a function and return a function which remembers the params and its result

const memory = {} as {[key: string]: unknown};


function memoizeFn(callbackFn: Function){
    return function (...thisArgs: any[]) {
        
        if(memory[thisArgs.join('-')]) {
           return  memory[thisArgs.join('-')]
        }

        const result  = callbackFn(...thisArgs);
        memory[thisArgs.join('-')] = result;

        return result
    }
 }


 export { memoizeFn}