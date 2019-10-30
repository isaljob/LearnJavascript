// menangkap pilihan player
var inputManusia = prompt('Silakan masukan salah satu: kertas, gunting, batu');

// menangkap pilihan komputer dengan membangkitkan bilangan random
var inputKomputer = Math.random();
if (inputKomputer < 0.34) {
    inputKomputer = 'kertas';
} else if (inputKomputer < 0.67) {
    inputKomputer = 'gunting';
} else {
    inputKomputer = 'batu';
}

// kondisi untuk memilih yang menang dan yang kalah
var hasil = '';
if (inputManusia == inputKomputer) {
    hasil = 'DRAW';
} else if (inputManusia == 'kertas' && inputKomputer == 'gunting') {
    hasil = 'Kamu KALAH';
} else if (inputManusia == 'kertas' && inputKomputer == 'batu') {
    hasil = 'Kamu MENANG';
} else if (inputManusia == 'gunting' && inputKomputer == 'kertas') {
    hasil = 'Kamu MENANG';
} else if (inputManusia == 'gunting' && inputKomputer == 'batu') {
    hasil = 'Kamu KALAH';
} else if (inputManusia == 'batu' && inputKomputer == 'kertas') {
    hasil = 'Kamu KALAH';
} else if (inputManusia == 'batu' && inputKomputer == 'gunting') {
    hasil = 'Kamu MENANG';
} else {
    hasil = 'Kamu salah input';
}

// tampilkan hasil
alert(hasil + '\n' + 'Kamu: ' + inputManusia + ' - Komputer: ' + inputKomputer);