/**
 * @param {string[]} strs
 * @return {string}
 */
// 题目：写一个函数（或方法）来寻找一个字符串数组中的最长公共前缀。
// substring:类似数组的slice[start, end), 返回的也不包括最后的end，即end - 1
var longestCommonPrefix = function(strs) {
    if(strs === null && strs.length === 0) {
        return '';
    }

    var pre = strs[0]; // 公共的前缀一定在每一个子字符串里面，这里设为下标1的字符串

    for (var i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(pre) != 0) {
            pre = pre.substring(0, pre.length - 1);
        }
    }
    return pre ? pre : ''
};
