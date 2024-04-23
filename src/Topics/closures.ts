
const functionMap = {
    basicClosures,
    [closureWithTwoLevel.name]: closureWithTwoLevel(),
    closureWithLetVariable,
    closureWhenVariableWrittenAfterInnerFunction,
    dataHiding,
} as 
{[property:string]: Function}


function basicClosures() {
    var a = 10
    function innerClosure() {
        console.log(a);
    }

    return innerClosure
}

function closureWithTwoLevel() {
    var a = 10
    function parentClosure() {
        var b = 20; 
        function childClosure() {
            var c = 30
            console.log(a, b, c)
        }
        return childClosure;
    }
    return parentClosure
}


function closureWithLetVariable() {
    let a = 10
    function innerClosure() {
        console.log(a);
    }

    return innerClosure
}

function closureWhenVariableWrittenAfterInnerFunction() {
    function innerClosure() {
        console.log(a);
    }
    let a = 10;
    return innerClosure
}


function dataHiding() {

    function count() {
        var counter = 0;
        return () => {
            return ++counter
        }
    }

    // So here we have hide the counter variable. No one can change it except the anonyms function;
    const incrementCounter = count();

    let countValue = incrementCounter()
    countValue = incrementCounter()
    countValue = incrementCounter()
    countValue = incrementCounter()
    console.log(countValue)
    return count
}


export default function executeClosure() {

    Object.entries(functionMap).forEach(entry => {
        console.log('-------------------------------------');
        console.log(entry[0]);
        entry[1]()()
    })
}