// 7.1 membuat function
// 7.2 parameter dan argumen
// parameter adalah nilai yang diperlukan saat function dibuat
// argumen adalah nilai saat function di eksekusi

function luasPersegi(a, b) {
    var luas = a * b;
    return luas;
}
console.log('Luas Persegi = ' + luasPersegi(3, 4)); // angka 3 dan 4 adalah argumen

// ada istilah arguments di javascript, ini merupakan pseudo variable
function tambah() { // menangkap arguments sebagai parameter, dan berupa array
    var hasil = 0;
    for (var i = 1; i < arguments.length; i++) {
        hasil += arguments[i];
    }

    return hasil;
}
console.log(tambah(1, 2, 3, 4, 5, 6, 7));
// argumen 1, 2, 3, 4, 5, 6, 7 pada function tambah() ditampung ke variable arguments -> berupa array
// saat dijalankan function tambah() menangkap variable arguments sebagai parameternya


// 7.3 refactoring
// menyederhanakan code yang ditulis, misal menghindari pembuatan variable yang tidak diperlukan


// 7.4 rekursif
// fungsi yang memanggil dirinya sendiri
function fungsiRekursif(n) {
    // tentukan base case agar tidak memanggil dirinya sendiri terus menerus
    if (n == 0) {
        return;
    }
    console.log(n);
    return fungsiRekursif(n - 1);
}

fungsiRekursif(10);


// 7.5 function declaration dan function expression
// function declaration
function iniFunctionDeclaration() {
    return console.log('function declaration');
}

// function expression
var iniFunctionExpression = function () {
    return console.log('function expression');
}

iniFunctionDeclaration();
iniFunctionExpression();