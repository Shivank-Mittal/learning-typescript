async function testPromise(): Promise<void>{
    return new Promise<void>(res => {
        const a = () => res();
        setTimeout(a, 1000)
    })
}

async function promiseBasic() {
    const p = new Promise<string>((res) => {
        setTimeout(() => res('Resolved'), 5000)
    })

    p.then((result) => console.log(result))
}



export default {
    testPromise: testPromise,
    basicPromise : promiseBasic
}