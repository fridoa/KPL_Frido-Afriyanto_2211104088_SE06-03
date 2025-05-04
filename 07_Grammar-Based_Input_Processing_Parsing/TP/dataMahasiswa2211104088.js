const fs = require("fs");

class DataMahasiswa2211104088 {
  static ReadJSON() {
    const filePath = "./tp7_1_2211104088.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const mahasiswa = JSON.parse(jsonData);

    const namaLengkap = `${mahasiswa.nama.depan} ${mahasiswa.nama.belakang}`;
    console.log(`Nama ${namaLengkap.toLowerCase()} dengan nim ${mahasiswa.nim} dari fakultas ${mahasiswa.fakultas.toLowerCase()}`);
  }
}

module.exports = DataMahasiswa2211104088;
