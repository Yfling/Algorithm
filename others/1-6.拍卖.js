var line
var arr = []
while(line = read_line()){
    line = line.split(' ');
    for(var i=0; i<line.length;i++){
      line[i] = parseInt(line[i])
    }
    arr = [].concat(arr, line)
}
n = arr[0];  // 产品数
m = arr[1];  // 顾客数
arr.shift()  // shift()把数组的第一个元素从其中删除,并返回第一个元素的值。
arr.shift()
var temp = {
  price: 0,
  profit: 0
}

for (var i = 0; i < m; i++) {
  var profit = 0;
  var price = arr[i];
  var count = n;

  for (var j = 0; j < m; j++) {
    if (count < 1) {
        break;
    }
    if (arr[j] >= price) {
      profit += price;
      count--;
    }
  }

  if(profit > temp.profit) {
    temp.profit = profit;
    temp.price = price;
  }
}

print(temp.price)
