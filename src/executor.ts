export async function execute (functionToCalled: Function, withClick: 'OnClick' | undefined = undefined ) {
    let startTime = performance.now()
    const result = await functionToCalled();
    let endTime = performance.now()
    const timeTaken = endTime - startTime
    
    console.log(`Call to doSomething took ${timeTaken} milliseconds`)
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = result
    document.getElementById('time_taken').innerText = `${timeTaken.toPrecision(1)} milliseconds`;

    if(withClick === 'OnClick') {
        document.getElementById('execute').addEventListener('click', async () => execute(functionToCalled));
    }
}
