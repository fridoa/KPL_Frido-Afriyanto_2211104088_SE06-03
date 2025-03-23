<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL IV**  
**AUTOMATA & TABLE-DRIVEN CONSTRUCTION**

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
2024

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

MENAMBAHKAN KODE DENGAN TEKNIK TABLE-DRIVEN

Dari project yang sudah dibuat sebelumnya:

- Buatlah sebuah class bernama “KodeBuah”.
- Pada class tersebut, tambahkan sebuah method dengan nama “getKodeBuah” yang mengembalikan kode buah dari tabel yang diberikan di bawah ini.
- Setelah method ditambahkan, panggil method tersebut pada class utama/main.

**Input**

# kodeBuah

```js
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

console.log("Kode Buah Apel:", KodeBuah.getKodeBuah("Apel"));
console.log("Kode Buah Kurma:", KodeBuah.getKodeBuah("Kurma"));
console.log("Kode Buah Mangga:", KodeBuah.getKodeBuah("Mangga"));
```

**Output**

![Image](https://github.com/user-attachments/assets/ba708cab-bac2-4178-a823-e463b924b9d3)

**Penjelasan**

Program ini menggunakan teknik table-driven untuk mencari kode buah berdasarkan nama buah. Class KodeBuah memiliki objek statis kodeBuah yang menyimpan daftar buah beserta kode uniknya. Metode getKodeBuah(namaBuah) digunakan untuk mengambil kode dari tabel berdasarkan input nama buah. Jika buah ditemukan, program akan mengembalikan kode buahnya, sedangkan jika tidak ditemukan, program akan mencetak "Kode tidak ditemukan".

---

## A. Soal Nomor 2

MENAMBAHKAN KODE DENGAN TEKNIK STATE-BASED CONSTRUCTION
Pada folder project yang sama:

- Buatlah sebuah class bernama “PosisiKarakterGame”
- Tambahkan implementasi yang menerapkan kasus di bawah ini menggunakan teknik state-based construction (asumsikan state awal adalah berdiri):
- Berikan implementasi tambahkan berdasarkan hasil mod dari NIM

1. NIM % 3 == 0:

   - Pada saat TombolS ditekan, maka akan ada output “tombol arah bawah ditekan”
   - Pada saat TombolW ditekan, maka akan ada output “tombola rah atas ditekan”

2. NIM % 3 == 1:

   - Pada saat state berubah ke “Berdiri”, akan ada output “posisi standby”
   - Pada saat state berubah ke “Tengkurap”, akan ada output “posisi istirahat”

3. NIM % 3 == 2:

   - Pada saat state berubah dari “Terbang” ke “Jongkok”, ada output “posisi landing”
   - Pada saat state berubah dari “Berdiri” ke “Terbang”, ada output “posisi take off”

- Tambahkan kode implementasi yang memanggil/mensimulasi perubahan state di class utama atau
  method main

1. Pastikan semua perubahan state disimulasikan
2. Pastikan semua ouput yang ada di bagian C dapat dihasilkan pada saat run

**Input**

- posisiKarakterGame

```js
class PosisiKarakterGame {
  constructor(NIM) {
    this.NIM = NIM;
    this.state = "Berdiri";
  }

  changeState(newState) {
    this.state = newState;
  }

  simulateKeyPress(key) {
    if (this.NIM % 3 === 0) {
      if (key === "S") {
        console.log("Tombol arah bawah ditekan");
      } else if (key === "W") {
        console.log("Tombol arah atas ditekan");
      }
    } else if (this.NIM % 3 === 1) {
      if (this.state === "Berdiri") {
        console.log("Posisi standby");
      } else if (this.state === "Tengkurap") {
        console.log("Posisi istirahat");
      }
    } else if (this.NIM % 3 === 2) {
      if (this.state === "Terbang") {
        console.log("Posisi take off");
      } else if (this.state === "Jongkok") {
        console.log("Posisi landing");
      }
    }
  }

  getState() {
    return this.state;
  }
}

const game = new PosisiKarakterGame(2211104088);
game.simulateKeyPress("S");
game.simulateKeyPress("W");
console.log("posisi karakter: " + game.getState());

```

**Output**

![Image](https://github.com/user-attachments/assets/e2bb67e7-5bb3-4e5e-9c11-26973b076459)

**Penjelasan**

Program ini membuat class PosisiKarakterGame, yang menentukan posisi karakter berdasarkan NIM. Saat objek dibuat, state awalnya "Berdiri". Karena NIM % 3 === 0, saat simulateKeyPress("S") dipanggil, program mencetak "Tombol arah bawah ditekan", dan saat simulateKeyPress("W"), mencetak "Tombol arah atas ditekan". Namun, karena state tidak diubah, saat getState() dipanggil, hasilnya tetap "posisi karakter: Berdiri". Untuk mengubah state, perlu menambahkan changeState(newState) di dalam simulateKeyPress().

---
