declare class Account {
    private sum;
    private constructor();
    ten(amount: number): this;
    hundred(amount: number): this;
    thousand(amount: number): this;
    lack(amount: number): this;
    crore(amount: number): this;
    value(): number;
    static calculateAmount(): Account;
}
export declare function computeAmount(): Account;
export {};
