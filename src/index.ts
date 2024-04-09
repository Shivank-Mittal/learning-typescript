import promiseTypes from './Topics/promises'
import Executor from './executor'
import Calculator from './Topics/calculator'
import {lengthOfLastWord}  from './Topics/string'
import ChangeColor  from './Projects/asyncProjects/change_background_color/change-background-color'


const executor = new Executor();
const calculator = new Calculator();


const printer = document.querySelector('#printer_box');

printer.innerHTML = lengthOfLastWord('   fly me   to   the moon  ').toString();

const changeColor = new ChangeColor();

executor.execute(() => console.log(calculator.add(2, 3)));
executor.executeAsync(promiseTypes.testPromise);


// async function testAsync() {
//   await promiseTypes.testPromise().then(() => console.log('Promise'))
// }