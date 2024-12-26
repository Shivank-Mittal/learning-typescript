export default class Canvas {
    private canvasElement;
    private width;
    private height;
    private canvasTitle;
    get canvas(): HTMLElement | undefined;
    set canvas(newCanvas: HTMLElement);
    set title(title: string);
    get title(): string;
    newCanvas(width?: number, height?: number): void;
    clean(): void;
    remove(): void;
    private createCanvas;
    private attachCanvas;
    private attacheTitle;
    private styleCanvas;
}
