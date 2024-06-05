/*You are given an integer array prices where prices[i] is the price of the ith item in a shop.

There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.

Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.*/




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
