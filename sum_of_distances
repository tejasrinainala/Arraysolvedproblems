var distance = function(nums) {
    let indexMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (!indexMap[nums[i]]) {
            indexMap[nums[i]] = [];
        }
        indexMap[nums[i]].push(i);
    }
    let result = new Array(nums.length).fill(0);
    for (let key in indexMap) {
        let indices = indexMap[key];
        if (indices.length > 1) {
            for (let i = 0; i < indices.length; i++) {
                for (let j = 0; j < indices.length; j++) {
                    if (i !== j) {
                        result[indices[i]] += Math.abs(indices[i] - indices[j]);
                    }
                }
            }
        }
    }
    return result;

};
