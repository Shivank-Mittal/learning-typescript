export default class Calculator {
    static version = '1'
    
    add(a: number, b: number) {
        console.log(`version ${Calculator.version}`)
        return a + b
    }

}
