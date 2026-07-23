class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) return [strs]

        const res = {}

        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0)
            const str = strs[i]
            for (let char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            if (!res[count.toLocaleString()]) {
                res[count.toLocaleString()] = []
            }
            res[count.toLocaleString()].push(str)
        }

        return Object.values(res)
    }
}
