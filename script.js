function minimumCost(ropeLengths) {
    ropeLengths.sort((a, b) => a - b);
    let totalCost = 0;
    let minCost = 0;
    while (ropeLengths.length > 0) {
        totalCost += ropeLengths.pop() ;
        minCost = Math.max(minCost, totalCost);
    }
    return totalCost;
}
var a = [4, 2, 7, 6, 9];
console.log(minimumCost(a));