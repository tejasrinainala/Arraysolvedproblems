var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let c=0;
    for(let i=0;i<hours.length;i++)
    {
        if(hours[i]<target)
        {
            continue;
        }
        else if(hours[i]>=target)
        {
            c++;
        }
    }
    return c;
};
