var finalPrices = function(prices) {
    let fprice=prices.slice();
    for(let i=0;i<prices.length;i++)
    {
        for(let j=i+1;j<prices.length;j++)
        {
            if(prices[j]<=prices[i])
            {
                fprice[i] = Math.abs(prices[i]-prices[j])
                break;
            }
            else
            {
                continue;
            }
            
        }
    }
    return fprice;
};
