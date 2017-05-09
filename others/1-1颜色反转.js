// 颜色反转（百度2017秋招真题）
// 题目描述
// 在 Web 开发中，通常使用 16 进制 RGB 表示一个颜色。
// 例 如 #0000FF 表示蓝色，#FF7F50 表示珊瑚红。在这道题中，我们要求把给定的一种颜色取反，方法是把 RGB 的每个位转换成十进制 rgb，再用 255 减去，再转换成 16 进制。例如蓝色取反是黄色（#FFFF00）。

var reg = /#(\w{2})(\w{2})(\w{2})/;  // 括号代表划分
var color;

while(color = read_line()) {
    var match = color.match(reg);
    var c1 = 255 - parseInt(match[1],16);  // match[1]代表的是索引值
    var c2 = 255 - parseInt(match[2],16);  // 把正则得到16进制的数字转为10进制
    var c3 = 255 - parseInt(match[3],16);  // 16代表传入数字的进制

    // 这里添加0是以防算出来的数字不够两位就要补0
    // 如果算出来的数字够两位，补0之后用slice取倒数后两位的数字，相当于删除了前面的0
    var result = "#" + (("0" + c1.toString(16)).slice(-2)) + (("0" + c2.toString(16)).slice(-2)) + (("0" + c3.toString(16)).slice(-2))

    print(result.toUpperCase());
}
