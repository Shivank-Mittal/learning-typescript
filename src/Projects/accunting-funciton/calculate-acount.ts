enum DENOMINATION {
    TEN = 10,
    HUNDRED = 100,
    THOUSAND = 1000,
    LACK = 100000,
    CRORE = 10000000,
}

class Account {
    private sum;
    private constructor() {
        this.sum = 0
    }
    
    ten(amount: number) {
        this.sum += amount * DENOMINATION.TEN;
        return this
    }

    hundred(amount: number) {
        this.sum += amount * DENOMINATION.HUNDRED;
        return this
    }

    thousand(amount: number) {
        this.sum += amount * DENOMINATION.THOUSAND;
        return this
    }

    lack(amount: number) {
        this.sum += amount * DENOMINATION.LACK;
        return this
    }
    crore(amount: number) {
        this.sum += amount * DENOMINATION.CRORE;
        return this
    }

    value() {
        return this.sum
    }

    static calculateAmount(){
        return new Account();
    }

}


export function computeAmount() {
    return  Account.calculateAmount()
}