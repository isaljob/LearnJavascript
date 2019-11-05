var arr = ["faishal", undefined, undefined, "puspita", "sari", undefined, "maryam"];

// if array kosong
var tambahNama = function (nama, arr) {
    if (arr.length == 0) {
        arr[0] = nama;
        return arr;
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == nama) {
            console.log("Nama sudah ada.");
            return;
        } else if (arr[i] == undefined) {
            arr[i] = nama;
            return arr;
        }
    }
    arr.push(nama);
}

tambahNama("fawwaz", arr);
tambahNama("dian", arr);
tambahNama("ahmad", arr);
tambahNama("ihsanul", arr);
console.log(arr);