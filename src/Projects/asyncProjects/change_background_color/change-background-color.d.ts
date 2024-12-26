/// <reference types="node" />
import { COLORS } from '../../colors';
export default class ChangeColor {
    body: HTMLBodyElement;
    camelion: HTMLElement;
    repeater: NodeJS.Timeout;
    isChangingColor: boolean;
    constructor();
    getNewHTML(): Promise<void>;
    showColors(): void;
    updateColor(color?: COLORS | 'white'): void;
    get color(): COLORS;
}
