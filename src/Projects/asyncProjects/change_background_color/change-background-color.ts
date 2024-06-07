import sample from 'lodash/sample';
import { COLORS } from '../../colors'

export default class ChangeColor {
    body = document.getElementsByTagName('body')[0];
    camelion: HTMLElement;
    repeater: NodeJS.Timeout;
    isChangingColor: boolean = false

    constructor(){
        this.getNewHTML().then(_ => {
            this.camelion =  document.getElementById('camelion-body');
            document.getElementById('show').addEventListener('click', this.showColors.bind(this), false)
        })
    }

    async getNewHTML(){
        const privateHtmlPromise = await fetch('./change-background.html');
        const privateHtmlAsText = await privateHtmlPromise.text();
        const privateHtml = new DOMParser().parseFromString(privateHtmlAsText, "text/html")
        this.body.appendChild(privateHtml.documentElement)
    }

    showColors(){ 
        if(this.isChangingColor && this.repeater) {
            this.isChangingColor = false;
            document.getElementById('show').innerText = 'Show Color'
            clearInterval(this.repeater)
            this.repeater = null;
            this.updateColor('white');
            return
        }
        this.isChangingColor = true;
        this.repeater = setInterval(() => this.updateColor(this.color), 5000)
        document.getElementById('show').innerText = 'Hide Color'
    }
    
    updateColor(color: COLORS | 'white' = 'white') {
        this.camelion.style.backgroundColor = color;
    }

    get color(): COLORS{ 
        return sample(Object.values(COLORS))
    }

} 