var shuffle = function(nums, n) {
    let array=[];
    let c=2*n;
    let i=0;
    while(c)
    {
        array.push(nums[i++])
        array.push(nums[n++])
        c=c-2
    }
    return(array);
};
