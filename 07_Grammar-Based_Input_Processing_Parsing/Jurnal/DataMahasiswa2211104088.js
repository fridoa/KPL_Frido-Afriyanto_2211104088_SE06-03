const fs = require("fs");

class DataMahasiswa2211104088 {
  static ReadJSON() {
    const filePath = "./jurnal7_1_2211104088.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const mhs = JSON.parse(jsonData);

    console.log("===== DATA MAHASISWA =====");
    console.log(`Nama      : ${mhs.firstName} ${mhs.lastName}`);
    console.log(`Gender    : ${mhs.gender}`);
    console.log(`Age       : ${mhs.age}`);
    console.log(`Alamat    : ${mhs.address.streetAddress}, ${mhs.address.city}, ${mhs.address.state}`);
    console.log("Mata Kuliah:");
    mhs.courses.forEach((course, index) => {
      console.log(`  ${index + 1}. ${course.code} - ${course.name}`);
    });
    console.log("===========================");
  }
}

module.exports = DataMahasiswa2211104088;
