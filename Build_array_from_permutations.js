var buildArray = function(nums) {
    let array=[];
    for(let i=0;i<nums.length;i++)
    {
        array.push(nums[nums[i]]);
    }
    return array;
};





//output
Input
nums =
[0,2,1,5,3,4]
Output
[0,1,2,4,5,3]
Expected
[0,1,2,4,5,3]
