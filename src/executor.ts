
export async function execute(functionToCalled: Function, withClick: 'OnClick' | undefined = undefined) {
    console.log(`Executing ${functionToCalled.name}`)
    if(withClick === 'OnClick') {
        document.getElementById('execute').addEventListener('click', async () => functionRunner(functionToCalled));
        return;
    }
    functionRunner(functionToCalled);
}

async function functionRunner (functionToCalled: Function) {
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

function updateView(timeTakenToComplete: number, result: unknown, ) {
    const resultElement = document.getElementById('result');
    if(result !== undefined) {
        resultElement.innerHTML =  'Result of executed function' + ' ' + result
    } else {
        resultElement.style.display = 'none'
    }
    document.getElementById('time_taken').innerText = `${timeTakenToComplete.toPrecision(1)} milliseconds`;
}


