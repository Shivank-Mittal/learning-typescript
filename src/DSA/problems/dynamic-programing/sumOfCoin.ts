// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
export function sumOfCoin(coins: number[], amount: number, diary: {[key: number]:boolean} = {}): boolean{
    if( diary[amount] != undefined) return diary[amount];
    if(amount === 0) return true;
    if(amount < 0)  return false;

    for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
        const coin = coins[coinIndex];
        const remainingAmount = amount  - coin;
        if(sumOfCoin(coins, remainingAmount, diary)) {
            diary[amount] = true;
            return true
        }
    }

    return false
 }

const paths: number[][]= [] 
 export function sumOfCoinPath(coins: number[], amount: number, diary: {[key: number]:number[]} = {}): number []{
    if(diary[amount]) return diary[amount]
    if(amount <= 0) return []; 

    for (let index = 0; index < coins.length; index++) {
        const coin = coins[index];
        const remainingAmount = amount - coin;
        const requiredPath = sumOfCoinPath(coins, remainingAmount, diary);
        if(requiredPath)  {
            diary[amount] = requiredPath.concat([coin]);
            paths.push(diary[amount])
            
        }
        
    }
    return []
 }
