import { min } from 'lodash';
import './timer.css'


enum buttonState{ 
    START = 'Start',
    STOP = 'Stop'
}


const startButton = document.querySelector('button');
const resetButton = document.getElementById('reset');

const hour =  document.getElementById('hour') as HTMLInputElement;
const minute =  document.getElementById('minutes') as HTMLInputElement;
const seconds =  document.getElementById('seconds') as HTMLInputElement;


let intervals: number[] = []


startButton?.addEventListener('click', event => {
    if(hour.value === minute.value && minute.value === seconds.value && seconds.value === '00') return

    startButton.innerText = startButton.innerText.trim().toLowerCase() === 'start' ? buttonState.STOP: buttonState.START
    let secondsInterval = setInterval(_=> {

        if(hour.value <= '00' && minute.value <= '00' && seconds.value <= '00') {
            resetButton?.click();  
            return;    
        }

        if(seconds.value > '00') {
            seconds.value = updateString(+seconds.value - 1)
            return
        }else {
            seconds.value = '59'
        }

        if(hour.value > '00' && minute.value ==='00') {
            minute.value = '60'
            hour.value = updateString(+hour.value - 1)
            return;
        }

        if(minute.value > '00') minute.value = updateString(+minute.value - 1)


    }, 1000)

    intervals.push(secondsInterval)
})

function updateString(reducedValue: number):string {
    return reducedValue > 9 ? reducedValue.toString() : '0' + reducedValue;
}


resetButton?.addEventListener('click', event => {
    if(!hour || !minute || !seconds || !startButton) return;
    hour.value = '00'
    minute.value = '00'
    seconds.value = '00'
    startButton.innerText = buttonState.START
    intervals.forEach(interval => clearInterval(interval))
})



// if sec -> 00
//     if hour > 0 = --hour
//     if minute > 0 = --min
//     seconds = 60
