var minimumOperations = function(nums) {
    let c=0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]%3==0)
        {
            continue;
        }
        else
        {
            nums[i]++ || nums[i]--;
            c++;
        }   
    }
    return c;
};



/*Input
nums =
[1,2,3,4]
Output
3
Expected
3*/
