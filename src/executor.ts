
export async function execute(functionToCalled: Function, withClick: 'OnClick' | undefined = undefined) {
    console.log(`Executing ${functionToCalled.name}`)
    if(withClick === 'OnClick') {
        document.getElementById('execute').addEventListener('click', async () => functionRunner(functionToCalled));
        return;
    }
    functionRunner(functionToCalled);
}

async function functionRunner(functionToCalled: Function) {
    try {
        let startTime = performance.now()
        const result = await functionToCalled();
        debugger
        let endTime = performance.now()
        const timeTaken = endTime - startTime
        
        console.log(`Call to doSomething took ${timeTaken} milliseconds`)
        updateView(timeTaken, result);
    } catch(e) {
        console.log('Error occurred while running the function: ', e)
    }
}

function updateView(timeTakenToComplete: number, result: unknown) {
    const resultElements = document.getElementsByClassName('result');
    const resultElement = resultElements[resultElements.length -1]

    const newElement = document.createElement("h3");
    newElement.className = "result";
    newElement.innerHTML =  'Result of executed function' + ' ' + result
    const anchorElement = resultElement || document.getElementById('execute')

    anchorElement.after(newElement)

    document.getElementById('time_taken').innerText = `${timeTakenToComplete.toPrecision(1)} milliseconds`;
}


export function executeWithGenerator(callback: Function, count = 0,  parameters: unknown[] = []){
    let maxCount = count || parameters.length

    function* ex() {
        for (let index = 0; index < maxCount; index++) {
            yield updateView(0 ,callback(parameters[index]))
        }
    }

    const generator = ex();
    document.getElementById('execute').addEventListener('click',() => generator.next());
} 

