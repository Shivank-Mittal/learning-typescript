import {execute, executeWithGenerator} from './executor';

declare global {
    function execute(functionToCalled: Function, withClick?: "OnClick" | undefined): Promise<void>;
    function executeWithGenerator(callback: Function, count?: number, cases?: unknown[]): void
}

// const localThis = window;

globalThis.execute = execute;
globalThis.executeWithGenerator = executeWithGenerator