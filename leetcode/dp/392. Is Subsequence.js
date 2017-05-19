/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  给定字符串s与字符串t，判断s是否是t的子序列。

// 你可以假设两字符串中都只包含小写字母。t的长度可能会很长（长度 ~= 500,000），s长度较短（<=100）

// 某字符串的子序列是指从其中删除某些字母（也可以不删除），而剩余字符的相对顺序保持不变，得到的新字符串。（例如，"ace"是"abcde"的子序列，而"aec"则不是）。
// 关键点：相对顺序固定
var isSubsequence = function(s, t) {
    for (var i = 0; i < t.length; i++) {
        if (t[i] == s[0]) {
            s = s.substr(1);
        }
    }
    if (s.length === 0) return true;
    return false;
};
