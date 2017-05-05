// getDay()：返回星期几（0-6）
// getDate()：返回日期（1-31）
// getMonth()：返回月份（0-11）
// getFullYear()：返回年份
var line;
while(line = read_line()){
    line = parseInt(line);
    print(UnixToTime(line * 1000));
}

function UnixToTime(time) {
    var date = new Date(time);
    var month,day;

    // 计算月
    if (parseInt(date.getMonth()) < 9){
        month = '0' + (parseInt(date.getMonth()) + 1).toString();
    } else {
        month = (parseInt(date.getMonth()) + 1).toString();
    }

    // 计算日
    if (parseInt(date.getDate()) < 9){
        day = '0' + parseInt(date.getDate()).toString();
    } else {
        day = parseInt(date.getDate()).toString();
    }

    return date.getFullYear() + ' ' + month + ' ' + day;
}
