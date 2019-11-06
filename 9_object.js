// object --> sekumpulan data baik itu string, integer, array, maupun fungsi
// object seperti array asosiatif pada php atau dictionary pada python, tidak menggunakan index tapi pairing key:value
// properti pada object dipisahkan dengan koma ,
// membuat object bisa dengan cara literal, function declaration, constructor, object.create()

// contoh membuat object dengan cara literal
var karyawan = {
    nama: "faishal fawwaz",
    umur: 29,
    anggotaKeluarga: ["eno", "mimo", "mary"],
    alamat: {
        komplek: "Villa Cilame Indah",
        nomor: "A10",
        jalan: "Jl. Haji Gofur",
        kota: "kabupaten Bandung Barat"
    }
}

console.log(karyawan.nama);
console.log(karyawan.anggotaKeluarga[1]);
console.log(karyawan.alamat.nomor);
console.log(karyawan["alamat"]["kota"]);

// contoh membuat object dengan function declaration
function buatObjectKaryawan(nama, umur, anggotaKeluarga, alamat) {
    var karyawan = {};
    karyawan.nama = nama;
    karyawan.umur = umur;
    karyawan.anggotaKeluarga = anggotaKeluarga;
    karyawan.alamat = alamat;
    return karyawan;
}

var karyawanDenganFunction = buatObjectKaryawan("faishal", 29, ["eno", "mimo", "mary"], {
    komplek: "VCI2",
    jalan: "Jl. H. Gofur"
});
console.log(karyawanDenganFunction);

// contoh membuat object dengan constructor
// nama contructor biasanya diawali dengan huruf kapital
function Karyawan(nama, umur, anggotaKeluarga, alamat) {
    // var this = {};
    this.nama = nama;
    this.umur = umur;
    this.anggotaKeluarga = anggotaKeluarga;
    this.alamat = alamat;
    // return this;
}

// memanggil contructor harus pakai new, jika tidak akan dibaca sebagai function declaration
var karyawanDenganConstructor = new Karyawan("faishal", 29, ["eno", "mimo", "mary"], {
    komplek: "VCI2",
    jalan: "Jl. H. Gofur"
});
console.log(karyawanDenganConstructor);