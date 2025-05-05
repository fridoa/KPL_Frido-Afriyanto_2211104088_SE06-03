<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VII**  
**GRAMMAS BASED INPUT PROCESSING PARSING**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**FRIDO AFRIYANTO (2211104088)**  
**SE06-03**

Asisten Praktikum :  
Vaninside
rizqiiirz

Dosen Pengampu :  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2025

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

MENAMBAHKAN JSON DESERIALIZATION 1
Buatlah branch baru dengan nama branch “frido” dan checkout kesana.
A. Download file “jurnal7_1_2211104088.json” dan rename file tersebut dengan mengganti “nim”
dengan NIM praktikan kemudian pindahkan file json tersebut di folder solution projectnya.
B. Ganti isi dari file json tersebut dengan detail yang benar dari praktikan.
C. Buatlah sebuah file class baru dengan nama “DataMahasiswa<2211104088_PRAKTIKAN>”.
D. Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
sesuai.
E. Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
format bebas asalkan semua nilai ditampilkan di console/output.

## A. Soal Nomor 2

MENAMBAHKAN JSON DESERIALIZATION 2
Buatlah branch baru dengan nama branch “frido” dan checkout kesana.
A. Download file “jurnal7_2_2211104088.json” dan rename file tersebut dengan mengganti “nim”
dengan NIM praktikan kemudian pindahkan file json tersebut di folder solution projectnya.
B. Ubah isi dari file json tersebut dengan daftar anggota kelompok (untuk tubes).
C. Buatlah sebuah file class baru dengan nama “TeamMembers<2211104088_PRAKTIKAN>”.
D. Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
sesuai.
E. Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
format:
“Team member list:”

- 2211104075 Irfan Muria 23 male
- 2211104081 Naufal Ananta 24 male
- 2211104083 Firman Maulana 23 male
- 2211104084 Danuar Ihza Mahendra 24 male

**Input**

- jurnal7_1_2211104088

```json
{
  "firstName": "Frido",
  "lastName": "Afriyanto",
  "gender": "male",
  "age": 10,
  "address": {
    "streetAddress": "Pemalang",
    "city": "Pemalang",
    "state": "Central Java"
  },
  "courses": [
    { "code": "CRI2C4", "name": "Konstruksi Perangkat Lunak" },
    { "code": "CRI2XX", "name": "Nama Mata Kuliah" }
  ]
}
```

- DataMahasiswa2211104088

```js
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
```

- jurnal7_2_2211104088

```json
{
  "members": [
    {
      "firstName": "Irfan",
      "lastName": "Muria",
      "gender": "male",
      "age": 23,
      "nim": "2211104075"
    },
    {
      "firstName": "Naufal",
      "lastName": "Ananta",
      "gender": "male",
      "age": 24,
      "nim": "2211104081"
    },
    {
      "firstName": "Firman",
      "lastName": "Maulana",
      "gender": "male",
      "age": 23,
      "nim": "2211104083"
    },
    {
      "firstName": "Danuar Ihza",
      "lastName": "Mahendra",
      "gender": "male",
      "age": 24,
      "nim": "2211104084"
    }
  ]
}
```

- TeamMembers2211104088

```js
const fs = require("fs");

class TeamMembers2211104088 {
  static ReadJSON() {
    const filePath = "./jurnal7_2_2211104088.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    console.log("Team member list:");
    data.members.forEach((member) => {
      const fullName = `${member.firstName} ${member.lastName}`;
      console.log(`- ${member.nim} ${fullName} ${member.age} ${member.gender}`);
    });
  }
}

module.exports = TeamMembers2211104088;
```

- index

```js
const DataMahasiswa = require("./DataMahasiswa2211104088");

DataMahasiswa.ReadJSON();

const TeamMembers = require("./TeamMembers2211104088");

TeamMembers.ReadJSON();
```

**Output**

![Image](https://github.com/user-attachments/assets/07239b8d-3951-4fbc-a183-d5c10c32c045)

---
