export default class ChangeColor {
    body = document.getElementsByTagName('body')[0];
    constructor(){
        this.getNewHTML()
    }

    getNewHTML(){
        const privateHtmlPromise = fetch('./change-background.html')
            .then(privateHtml => privateHtml.text())
            .then(privateHtml => {
                const container = document.createElement('div');
                container.innerHTML = privateHtml
                this.body.appendChild(container)
            })
    }
} 