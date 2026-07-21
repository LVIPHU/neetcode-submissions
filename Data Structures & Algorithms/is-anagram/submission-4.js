class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        
        const countS = {}
        const countT = {}
        
        for (let i = 0; i <= s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1
            countT[t[i]] = (countT[t[i]] || 0) + 1
        }
        console.log(countS, countT)
        const keys = Object.keys(countS)
        for (let i = 0; i <= keys.length; i++) {
            if (countS[keys[i]] !== countT[keys[i]]) return false
        }

        return true
    }
}
