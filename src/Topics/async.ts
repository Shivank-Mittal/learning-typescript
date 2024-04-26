

// Async always return promise

// Return undefined promise
async function basicAsync() {
 console.log('In basic async')
}

// Return undefined promise
async function asyncWithReturnValues() {
    const returnValue = 'In async returns value'
    console.log(returnValue)
    return returnValue
}

async function getUer() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    
}



