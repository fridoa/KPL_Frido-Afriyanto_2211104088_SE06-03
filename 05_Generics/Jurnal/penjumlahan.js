class Penjumlahan {
  static JumlahTigaAngka(a, b, c) {
    let hasil; 
    hasil = a + b + c;
    return hasil;
  }
}

const nim = "2211104088"; 
const angka1 = parseInt(nim.substring(0, 2)); 
const angka2 = parseInt(nim.substring(2, 4)); 
const angka3 = parseInt(nim.substring(4, 6)); 

console.log(`Hasil penjumlahan: ${Penjumlahan.JumlahTigaAngka(angka1, angka2, angka3)}`);