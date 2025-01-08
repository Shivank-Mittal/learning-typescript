

const promise = new Promise((resolve, reject) => {
    console.log('Promise is initialized');
    resolve(1);
});

promise.then(
    (result: number) => {
        console.log(result + 1);
        return result + 1
    }
).then(
    (result: number) =>  {
        console.log(result + 1);
        return result + 1
    },
)


// promise.then(
//     (result: number) =>  {
//         console.log(result + 1);
//         return result + 1
//     },
//     (error) => console.log("Inside second catch with result:", error)
// );


promise.catch(
    (result) => console.log("Inside catch with result:", result)
);

export default promise;