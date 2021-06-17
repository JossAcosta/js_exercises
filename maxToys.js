function maximumToys(prices, k) {
    let sortedPrices = prices.sort((a,b) => a - b);
    // let counter = 0;
    // sortedPrices.forEach(price => {
    //     if (k > price) { 
    //         k = k - price;
    //         counter++;
    //     }
    // });
    return sortedPrices;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));