var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 3;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot No." + noAngkot + " beroperasi dengan baik.");
    } else {
        console.log("Angkot No." + noAngkot + " sedang tidak beroperasi.");
    }
}