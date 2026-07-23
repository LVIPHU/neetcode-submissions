class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) return [strs]
        const res = {}

        for (let i = 0; i < strs.length; i++) {
            let sorted = strs[i].split('').sort().join('')
            if (!res[sorted]) res[sorted] = []
            res[sorted].push(strs[i])
        }

        return Object.values(res)
    }
}
