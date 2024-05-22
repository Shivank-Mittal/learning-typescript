import Employ from "./employ";

let employs: Employ[] = [];

export function updateEmployList() {
    length = employs.length;
    
    const employListSection = document.getElementsByClassName('user-list')[0];
    
    for (let index = 0; index < employs.length; index++) {
        const liElement = document.createElement('li');
        liElement.innerText = employs[0].employ.firstName;
        employListSection.appendChild(liElement)
    }
   
}
