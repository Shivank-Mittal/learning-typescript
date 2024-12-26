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
        let endTime = performance.now()
        const timeTaken = endTime - startTime
        
        console.log(`Call to doSomething took ${timeTaken} milliseconds`)
        updateView(timeTaken, result);
    } catch(e) {
        console.log('Error occurred while running the function: ', e)
    }
}

function updateView(timeTakenToComplete: number, result: unknown, functionName = '') {
    const resultElements = document.getElementsByClassName('result');
    const resultElement = resultElements[resultElements.length -1]

    const newElement = document.createElement("h3");
    newElement.className = "result";
    newElement.innerHTML =  'Result of executed function '+ functionName + ' is' + ' ' + result
    const anchorElement = resultElement || document.getElementById('execute')

    anchorElement.after(newElement)

    document.getElementById('time_taken').innerText = `${timeTakenToComplete?.toPrecision(1)} milliseconds`;
}



export function executeWithGenerator(callback: Function, count = 0,  cases: unknown[] = []){
    let maxCount = count || cases.length

    function* ex() {
        for (let index = 0; index < maxCount; index++) {
            let result;
            let timeTaken;
            try {
                let startTime = performance.now()
                result = callback(cases[index]);
                let endTime = performance.now()
                timeTaken = endTime - startTime
            }catch(e) {
                console.log(e)
            }
            yield updateView(timeTaken ,result, callback.name)
        }
    }

    const generator = ex();
    document.getElementById('execute').addEventListener('click',() => generator.next());
} 

