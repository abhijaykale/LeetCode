/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            if (nums[j] === 0) {
                let swap;
                swap = nums[j];
                nums[j] = nums[i];
                nums[i] = swap;
            }
            j++;
        }
    }
};