var str = '';
for (var i = 0; i < 10; i++) {
    for (var j = 10; j > i; j--) {
        str += '*';
    }
    str += '\n';
}
console.log(str);