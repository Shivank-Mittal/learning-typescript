import promiseTypes from './promises'
import Executor from './executor'
import Calculator from './calculator'
import {lengthOfLastWord}  from './string'


const executor = new Executor();
const calculator = new Calculator();


const printer = document.querySelector('#printer_box');

printer.innerHTML = lengthOfLastWord('   fly me   to   the moon  ').toString();

executor.execute(() => console.log(calculator.add(2, 3)));
executor.executeAsync(promiseTypes.testPromise);


// async function testAsync() {
//   await promiseTypes.testPromise().then(() => console.log('Promise'))
// }