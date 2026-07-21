class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = new Array(2).fill(0)
        for (let i = 0; i <= nums.length - 1 ; i++) {
            const difference = target - nums[i]
            for (let j = i + 1; j <= nums.length; j++) {
                if (difference === nums[j]) {
                    result[0] = i
                    result[1] = j
                }
            }
        }
        return result
    }
}
