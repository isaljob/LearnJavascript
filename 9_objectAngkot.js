// membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
    // ini merupakan properti, sama seperti di PHP OOP
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // bagian ini merupakan method nya, sama juga seperti di PHP OOP
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('angkot masih kosong');
            return false;
        }
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
            }
        }
    }

}

var angkot1 = new Angkot('faishal', ['cicaheum', 'ciroyom'], [], 0);
console.log(angkot1);