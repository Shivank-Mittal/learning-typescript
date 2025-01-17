export default class Canvas {
    private canvasElement: HTMLElement | undefined = undefined
    private width: number = 0
    private height: number = 0
    private canvasTitle = ''

    get canvas(): HTMLElement | undefined {
        return this.canvasElement
    }

    set canvas(newCanvas: HTMLElement) {
        if(this.canvas) this.clean();
        this.canvasElement = newCanvas;
        this.attachCanvas(this.canvasElement);
        this.styleCanvas()
    }

    set title(title: string) {
        this.canvasTitle = title;
        this.attacheTitle();
    }

    get title() {
        return this.canvasTitle
    }

    newCanvas(width: number = 0, height: number = 0){
        this.width = width;
        this.height = height;
        this.canvas = this.createCanvas();
    }

    clean() {
        if(!this.canvas) return
        this.canvas.innerHTML = ''
    }

    remove() {
        this.canvas?.remove();
    }

    private createCanvas(): HTMLElement {
        const canvasSection = document.createElement('section');
        canvasSection.classList.add('canvas')
        return canvasSection
    }

    private attachCanvas(newCanvas: HTMLElement) {
        const canvases = document.getElementsByClassName('canvas');
        const lastCanvas = canvases.item(canvases.length - 1) as HTMLElement;

        if(!canvases.length || !lastCanvas) {
            document.body.lastChild?.after(newCanvas);
            return
        }

        lastCanvas.after(newCanvas)
    }

    private attacheTitle() {
        if(!this.canvas) return;
        const title  = document.createElement('h2')
        title.innerText = this.title
        this.canvas.before(title)
    }

    private styleCanvas()  {
        if(!this.canvas) return

        if(this.width && this.height) {
            this.canvas.style.width = `${this.width}px`;
            this.canvas.style.height = `${this.height}px`;
        } else {
            this.canvas.style.width = `fit-content`;
            this.canvas.style.height = `fit-content`;
        }
        this.canvas.style.padding = '10px';
        this.canvas.style.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px';
        this.canvas.style.backgroundColor = 'white'
        this.canvas.style.marginTop = '20px'
    }
}

