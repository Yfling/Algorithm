var test = read_line();
for (var i = 0; i < test; i++) {
    var inputs = read_line().split(' ');
    var m = parseInt(inputs[0]);
    var n = parseInt(inputs[1]);
    var a = parseInt(inputs[2]);
    var width = Math.ceil(m / a);
    var hight = Math.ceil(n / a);
    print(width * hight);
}
