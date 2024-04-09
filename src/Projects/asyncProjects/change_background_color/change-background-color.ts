import sample from 'lodash/sample';
import { COLORS } from './colors'

export default class ChangeColor {
    body = document.getElementsByTagName('body')[0];
    camelion: HTMLElement;
    colorChanger: NodeJS.Timeout;

    constructor(){
        this.getNewHTML().then(_ => {
            this.camelion =  document.getElementById('camelion-body');
            document.getElementById('show').addEventListener('click', this.changeColor.bind(this), false)
            document.getElementById('stop').addEventListener('click', this.hideColor.bind(this), false)
        })
    }

    async getNewHTML(){
        const privateHtmlPromise = await fetch('./change-background.html');
        const privateHtmlAsText = await privateHtmlPromise.text();
        const privateHtml = new DOMParser().parseFromString(privateHtmlAsText, "text/html")
        this.body.appendChild(privateHtml.documentElement)
    }

    changeColor(){ 
        this.colorChanger = setInterval(() => this.updateColor(this.camelion, this.color), 5000)
    }

    hideColor() {
        if (!clearInterval) return;

        clearInterval(this.colorChanger)
        this.updateColor(this.camelion, 'white');
    }
    

    updateColor(element:HTMLElement, color: COLORS | 'white' = 'white') {
        element.style.backgroundColor = color;
    }

    get color(): COLORS{ 
        return sample(Object.values(COLORS))
    }

} 