class KodeBuah {
  static kodeBuah = {
    Apel: "A00",
    Aprikot: "B00",
    Alpukat: "C00",
    Pisang: "D00",
    Paprika: "E00",
    Blackberry: "F00",
    Ceri: "H00",
    Kelapa: "I00",
    Jagung: "J00",
    Kurma: "K00",
    Durian: "L00",
    Anggur: "M00",
    Melon: "N00",
    Semangka: "O00",
  };

  static getKodeBuah(namaBuah) {
    return this.kodeBuah[namaBuah] || "Kode tidak ditemukan";
  }
}

// Contoh pemanggilan
console.log("Kode Buah Apel:", KodeBuah.getKodeBuah("Apel"));
console.log("Kode Buah Kurma:", KodeBuah.getKodeBuah("Kurma"));
console.log("Kode Buah Mangga:", KodeBuah.getKodeBuah("Mangga"));
