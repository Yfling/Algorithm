/**
 * @param {string} s
 * @return {boolean}
 */

// 题目：给定一个字符串包含的字符'(',')”、“{”、“}”、“[”和“]”,确定输入字符串是否有效。（要成对出现）
var isValid = function(s) {
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (
      (stack.length && s[i] === ')' && stack[stack.length - 1] === '(') ||
      (stack.length && s[i] === ']' && stack[stack.length - 1] === '[') ||
      (stack.length && s[i] === '}' && stack[stack.length - 1] === '{')
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
