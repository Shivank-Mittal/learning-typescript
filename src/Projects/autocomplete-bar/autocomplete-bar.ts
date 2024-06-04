import { throttle } from '../../utilities/throttle'
import { getMatchingOptions } from './data'

const inputBar = document.getElementById('inputTester') as HTMLInputElement;
const searchBox = document.getElementsByClassName('searchBox')[0];
const collectionSpace = document.getElementsByClassName('collection')[0] as HTMLDivElement

const intersectionOb = new IntersectionObserver(entries => {
    entries.forEach(e => e.target.classList.toggle('show', e.isIntersecting))
}, {
    root: collectionSpace,
    threshold: 1
})

async function searchHandler () {
    const options = await getMatchingOptions(inputBar.value);
   
    collectionSpace.innerHTML = ''
    const optionAsList = optionList(options);
    optionAsList.forEach(o => intersectionOb.observe(o))
    collectionSpace.append(...optionAsList);
}

const throttleFunction = throttle(searchHandler, 1000)

function optionList(wordList: string[]): HTMLElement[] {
    return wordList.map(w => {
        const el = document.createElement('li');
        el.innerText = w;
        return el
    })
}

function setup() {
    inputBar?.addEventListener('input', throttleFunction);

    collectionSpace?.addEventListener('click', (e) => {
        const target =  e.target as HTMLElement
        if(target.tagName !== 'LI') return
        inputBar.value = target.innerText;
    })
    
    inputBar?.addEventListener('focus', (e)=>{
        searchBox.classList.add('searchBox-sugetion');
        collectionSpace.style.opacity = '100%'
    })
    
    inputBar?.addEventListener('blur', (e)=>{
        searchBox.classList.remove('searchBox-sugetion');
        collectionSpace.style.opacity = '0';
    
        const target =  e.target as HTMLElement
        if(target.tagName !== 'LI') return
        inputBar.value = target.innerText 
    })
}


function launcher (){
    setup()
}

export {
    launcher as autoComplete
}



