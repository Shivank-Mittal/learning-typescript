function getMaxProfitSelf(stockValues: number[]): number {

    let buyingPrice = stockValues[0];
    let sellingPrice = stockValues[0] ;
    const totalProfit = sellingPrice - buyingPrice

    for (let index = 1; index < stockValues.length; index++) {
        const currentDayValue = stockValues[index];
        if(sellingPrice < currentDayValue) sellingPrice = currentDayValue;
        if(buyingPrice > currentDayValue) {
            buyingPrice = currentDayValue;
            sellingPrice = currentDayValue;
        }
    }


    return totalProfit <= 0 ? 0: totalProfit
}

function getMaxProfitGreedy(stockValues: number[]): number {

    let buyingPrice = stockValues[0];
    let profit = 0;

    for (let index = 1; index < stockValues.length; index++) {
        const currentDayValue = stockValues[index];
        if(currentDayValue < buyingPrice) buyingPrice = currentDayValue
        else if(profit < (currentDayValue - buyingPrice)) {
            profit = currentDayValue - buyingPrice
        }
    }


    return profit;
}


export {
    getMaxProfitGreedy as getMaxProfit
}