class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length === 0) return false
        const set = {}
        for (let i = 0; i <= nums.length - 1; i++) {
            if (nums[i] in set) return true
            set[nums[i]] = 'h'
        } return false
    }
}
