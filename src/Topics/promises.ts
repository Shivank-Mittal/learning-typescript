async function testPromise(): Promise<void>{
    return new Promise<void>(res => {
        const a = () => res();
        setTimeout(a, 1000)
    })
}

async function basicPromise() {
    const p = new Promise<string>((res) => {
        setTimeout(() => res('Resolved'), 5000)
    })

    p.then((result) => console.log(result))
}

const chainablePromise = () => new Promise<number>((res, rej) => {
    setTimeout(() => console.log('Timeout finished'), 1000);
    res(2);
}).then((value) => console.log( 'value received:' + value));

const getUsers = () => fetch('https://jsonplaceholder.typicode.com/users')
    .then( users => users.json())
    .then( users => console.log(users))
    .catch(e => console.log(e))

const asyncFunction =  async function () {
    console.log('result')
}

function checkTaskQueue() {
    console.log('Starting...  In execution context of check function');

    function firstFunction() {
        console.log('In First Function');
        secondFunction()
    }

    function secondFunction() {
        console.log('In second Function');

        setTimeout(() => { console.log('In  timeout of second Function');}, 0)
    }

    firstFunction()

    console.log('Finishing check function');
}


export {
    testPromise,
    basicPromise,
    chainablePromise,
    getUsers,
    asyncFunction,
    checkTaskQueue
}