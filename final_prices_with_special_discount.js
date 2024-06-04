var finalPrices = function(prices) {
    //creating a new array for the final price.
    let fprice=prices.slice();
    for(let i=0;i<prices.length;i++)
    {
        for(let j=i+1;j<prices.length;j++)
        {
            //verifying the condition and adding to the final resultant array.
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
    //printing the array of final prices.
    return fprice;
};
