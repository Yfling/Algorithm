/**
 * @param {number[]} nums
 * @return {number}
 */
// 这道题的本质相当于在一列数组中取出一个或多个不相邻数，使其和最大。
// 这是一道动态规划问题。
// 我们维护一个一位数组dp，其中dp[i]表示到i位置时不相邻数能形成的最大和。
// 状态转移方程：

// dp[0] = num[0] （当i=0时）
// dp[1] = max(num[0], num[1]) （当i=1时）
// dp[i] = max(num[i] + dp[i - 2], dp[i - 1])   （当i !=0 and i != 1时）

var rob = function(nums) {
    var len = nums.length;

    if (len === 0) return 0;
    if (len === 1) return nums[0];
    if (len === 2) return Math.max(nums[0], nums[1]);

    var dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (var i = 2; i < len; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }

    return dp[len - 1];
};
