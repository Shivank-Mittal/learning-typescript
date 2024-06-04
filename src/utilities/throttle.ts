export function throttle(fun: Function, delay: number= 300) {
    let t: boolean = false;
    return (...args: any) => {
        if(t) return
        t = true;
        setTimeout(() => {
            fun(...args);
            t = false
        }, delay);
    }
}