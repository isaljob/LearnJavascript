var penumpang = ["faishal", undefined, "dian", undefined];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di array pertama
        penumpang[0] = namaPenumpang;
        // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi yang kosong
        penumpang.find(function (e, i) {
            if (e == undefined) {
                // tambah penumpang di kursi kosong urutan paling awal
                penumpang[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        })
    }
}

tambahPenumpang("fawwaz", penumpang);
tambahPenumpang("puspita", penumpang);
tambahPenumpang("ahmad", penumpang);
console.log(penumpang);