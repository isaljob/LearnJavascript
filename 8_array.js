// Manipulasi Array

// 1. Menambah isi array secara manual
var arr = [];
arr[0] = "Faishal";
arr[1] = "Dian";
arr[2] = "Ahmad";
arr[3] = "Maryam";

console.log("Array lengkap");
console.log(arr);

// 2. Menghapus isi array secara manual
arr[0] = undefined;
console.log("Array setelah dihapus");
console.log(arr);

// 3. Menampilkan isi array
console.log("Menampilkan isi array dengan for");
arr[0] = "Faishal";
for (var i = 0; i < arr.length; i++) {
    console.log("Data keluarga ke-" + (i + 1) + " " + arr[i]);
}

// 4. Method pada array
// a. join
console.log("===================method join======================");
console.log("Array di Join: " + arr.join(' - '));

// b. push dan pop --> push untuk menambah elemen array di belakang, sementara pop untuk menghapusnya
console.log("===================push dan pop======================");
arr.push("Fawwaz");
console.log("Array di Push: " + arr.join(' - '));
arr.pop();
console.log("Array di Pop: " + arr.join(' - '));

// c. shift dan unshift --> unshift untuk menambah elemen array di awal, sementara shift untuk menghapusnya
console.log("===================unshift dan shift======================");
arr.unshift("Ihsanul");
console.log("Array di Unshift: " + arr.join(' - '));
arr.shift();
console.log("Array di Shift: " + arr.join(' - '));

// d. slice dan splice --> splice untuk menambahkan elemen array di tengah-tengah
// splice(indexAwal, mauDihapusBerapaElemen, elemenBaru1, elemenBaru2, ...)
console.log("===================splice dan slice======================");
arr.splice(1, 0, "Fawwaz");
console.log("Array di Splice: " + arr.join(' - '));
// slice(indexAwal, indexAkhir) --> slice menghasilkan array baru
var arr2 = arr.slice(0, 2);
console.log("Array di Slice: " + arr2.join(' - '));

arr.splice(1, 1); // menghapus "Fawwaz" pada array arr

// 5. forEach --> memanggil array tanpa for, hasil tidak berupa array
console.log("===================forEach======================");
// cara bacanya --> untuk elemen e dan index i pada array arr, console.log("Data keluarga ke-" + (i + 1) + " " + e)
arr.forEach(function (e, i) {
    console.log("Data keluarga ke-" + (i + 1) + " " + e);
})

// 6. map --> memanggil array tanpa for, hasil berupa array lagi
console.log("===================map======================");
var arr3 = arr.map(function (e, i) {
    return i + "_" + e;
});
console.log("Array di map: " + arr3.join(' - '));

// 7. sort --> untuk mengurutkan elemen array
var arr4 = arr.sort();
console.log("Array di sort: " + arr4.join(' - '));
var angka = [1, 2, 5, 30, 6, 7, 8, 9, 2, 4, 5, 10, 3];
angka.sort(function (a, b) { // ditambahkan fungsi karena secara default diurutkan berdasarkan karakter pertama bukan dari besarnya nilai elemen
    return a - b; // maksudnya di ascending order, jika decending return b-a
});
console.log(angka);

// 8. filter dan find
// filter --> memfilter elemen dengan kondisi tertentu
console.log("===================filter dan find======================");

console.log("Array di filter: " + angka.filter(function (e) {
    return e > 7; // filter elemen-elemen yang lebih besar dari 7
}));

console.log("Array di find: " + angka.find(function (e) {
    return e > 7; // find elemen pertama yang lebih besar dari 10
}));