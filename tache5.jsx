// Test d'algorithme

function twoSumSolution(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; 
            }
        }
    }
    return []; 
}


console.log(twoSumSolution([2, 7, 11, 15], 9)); 