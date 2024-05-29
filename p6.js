var minOperations = function(nums, k) {
    let c=0;
    for(let i=0;i<nums.length;i++)
    {
       if(nums[i]<k)
       {
        c++;
       }
    }
    return c;
    
};
