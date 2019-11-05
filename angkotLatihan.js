var penumpang = ["faishal", undefined, "puspita", "sari", "maryam"];
// var penumpang = ["faishal", undefined, "fawwaz"];

// membuat function untuk tambahPenumpang
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika tidak ada penumpang didalam angkot 
    if (penumpang.length == 0) {
        // isi kursi/array pertama dengan penumpang
        penumpang[0] = namaPenumpang;
        // kembalikan isi array dan keluar
        return penumpang;
    } else if (penumpang.find(function (e) { // cek apakah sudah ada nama penumpang di angkot
            return e == namaPenumpang;
        }) == namaPenumpang) {
        console.log(namaPenumpang + " sudah ada di dalam angkot");
        return penumpang;
    } else {
        // jika kursi tidak kosong, cek apakah sudah ada namaPenumpang penumpang yang sama
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (i == penumpang.length - 1) { // jika tidak ada kursi kosong
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong, tidak ada penumpang yang bisa turun
    if (penumpang.length == 0) {
        console.log("Tidak ada penumpang di dalam angkot");
        return penumpang;
    } else {
        for (var j = 0; j < penumpang.length; j++) {
            if (penumpang[j] == namaPenumpang) {
                penumpang[j] = undefined;
                return penumpang;
            } else if (j == penumpang.length - 1) {
                console.log("Tidak ada penumpang yang bernama " + namaPenumpang + "di dalam angkot");
                return penumpang;
            }
        }
    }
}

tambahPenumpang("dian", penumpang);
tambahPenumpang("ahmad", penumpang);
hapusPenumpang("faishal", penumpang);
tambahPenumpang("ihsanul", penumpang);
tambahPenumpang("ahmad", penumpang);
console.log(penumpang);