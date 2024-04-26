declare function testPromise(): Promise<void>;
declare function basicPromise(): Promise<void>;
declare const chainablePromise: () => Promise<void>;
declare const getUsers: () => Promise<void>;
declare const asyncFunction: () => Promise<void>;
declare function checkTaskQueue(): void;
export { testPromise, basicPromise, chainablePromise, getUsers, asyncFunction, checkTaskQueue };
