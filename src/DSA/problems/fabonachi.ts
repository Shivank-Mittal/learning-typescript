function getFibonacciNumberSelf(position: number): number {

    if(position === 0) return 0;
    if(position === 1 ||  position === 2) return 1;

    let pointer = 3;

    const search = (previousValue: number, previousSome: number): number => {
        if(pointer === position) return previousSome;
        ++pointer
        return search(previousSome, (previousSome + previousValue))
    }
    return search(1, 2)
}


export {
    getFibonacciNumberSelf as getFibonacciNumber
}