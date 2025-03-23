class KodePos {
  static kodePos = {
    Batununggal: 40266,
    Kujangsari: 40287,
    Mengger: 40267,
    Wates: 40256,
    Cijaura: 40287,
    Jatisari: 40286,
    Margasari: 40286,
    Sekejati: 40286,
    Kebonwaru: 40272,
    Maleer: 40274,
    Samoja: 40273,
  };

  static getKodePos(kelurahan) {
    return this.kodePos[kelurahan] || "Kode pos tidak ditemukan";
  }
}

console.log("Kode Pos Batununggal:", KodePos.getKodePos("Batununggal"));
console.log("Kode Pos Cijaura:", KodePos.getKodePos("Cijaura"));
console.log("Kode Pos Sokaraja:", KodePos.getKodePos("Sokaraja"));
