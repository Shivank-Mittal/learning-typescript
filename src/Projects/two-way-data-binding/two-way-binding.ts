var value:any;

const input = document.getElementById('inputTester') as HTMLInputElement;
const textBox = document.getElementById('search');
const updatedValueElement = document.createElement('p');
textBox?.after(updatedValueElement)
const state:{value: any } = {value :'Hi'}

//Option A with temp object
// function mode(input: HTMLInputElement, state: { value: any; }) {
//     const tempState = {
//         tempValue : state.value
//     }

//     Object.defineProperty(state, 'value', {
//         set: function(value){
//             tempState.tempValue = value;
//             input.value = value;
//         }
//     })

//     Object.defineProperty(state, 'value', {
//         get: () => tempState.tempValue
//     })

//     input?.addEventListener('change', (event)=> {
//         const target = event?.target as HTMLInputElement
//         tempState.tempValue = target.value
//     })
// }

function mode(input: HTMLInputElement, state: { value: any; }) {


    Object.defineProperty(state, 'value', {
        set: function(value){
            input.value = value;
            updatedValueElement.innerText = input.value
        }
    })

    Object.defineProperty(state, 'value', {
        get: () => input.value
    })

    input?.addEventListener('keydown', (event)=> {
        const target = event?.target as HTMLInputElement
        state.value = target.value
    })
}

function bindProperty (){
    if(input) {
        mode(input, state)
    }
     return {
        check: (valueToSet:{value: any, type: 'Input'| 'state' }) => {
            if(valueToSet.type === 'state' ) state.value = valueToSet.value
            console.log(`State is: ${state.value}, inputValue is: ${input.value}`)
        }
     }
}

export {
    bindProperty as twoWayBinding
}