<div align="center">

**TUGAS PENDAHULUAN**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL IX**  
**API DESIGN DAN CONSTRUCTION USING SWAGGER**

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

# TUGAS PENDAHULUAN

## A. Soal Nomor 1

MEMBUAT PROJECT WEB API
Berhubung cara membuat project web api berbeda-beda untuk setiap bahasa pemrograman, langkah-
langkah berikut hanya berlaku apabila dilakukan dengan menggunakan .NET dan Visual Studio. Untuk
IDE dan bahasa pemrograman lain, yang terpenting adalah nama project yang dibuat yaitu
“modul8_NIM”.

- TP_9.ipynb

```py
# Import library
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import nest_asyncio
from pyngrok import ngrok, conf
import uvicorn

# Inisialisasi FastAPI
app = FastAPI()

# Konfigurasi ngrok (ganti dengan auth_token milikmu)
conf.get_default().auth_token = "2wD9PiHmHEI6uSbBMGeAXzlHNE2_4TYns7uJx9UZVRTmRsTUy"

# MODEL
class Movie(BaseModel):
    Title: str
    Director: str
    Stars: List[str]
    Description: str

# DATA DEFAULT (Top 3 IMDb per Mei 2025)
movie_list = [
    {
        "Title": "The Shawshank Redemption",
        "Director": "Frank Darabont",
        "Stars": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        "Title": "The Godfather",
        "Director": "Francis Ford Coppola",
        "Stars": ["Marlon Brando", "Al Pacino", "James Caan"],
        "Description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        "Title": "The Dark Knight",
        "Director": "Christopher Nolan",
        "Stars": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "Description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
    },
]

# ENDPOINTS
@app.get("/api/Movies")
def get_all_movies():
    return movie_list

@app.get("/api/Movies/{id}")
def get_movie_by_id(id: int):
    if 0 <= id < len(movie_list):
        return movie_list[id]
    return {"error": "Movie tidak ditemukan"}

@app.post("/api/Movies")
def add_movie(movie: Movie):
    movie_list.append(movie.dict())
    return {"pesan": "Movie berhasil ditambahkan"}

@app.delete("/api/Movies/{id}")
def delete_movie(id: int):
    if 0 <= id < len(movie_list):
        deleted = movie_list.pop(id)
        return {"pesan": "Movie berhasil dihapus", "data": deleted}
    return {"error": "Movie tidak ditemukan"}

# Jalankan server
nest_asyncio.apply()
public_url = ngrok.connect(3000)
print("🎬 Swagger UI:", public_url.public_url + "/docs")
print("🎬 API URL:", public_url.public_url)

uvicorn.run(app, port=3000)

```

**Output**

![Image](https://github.com/user-attachments/assets/e8d3b675-1665-4028-a3a4-d615151d424b)

- GET /api/Movies
  ![Image](https://github.com/user-attachments/assets/ff210285-2cc6-44d8-a17a-c9e421a63963)

- POST /api/Movies
  ![Image](https://github.com/user-attachments/assets/a2e467d8-c595-48ab-a73f-e7e5700e9cd1)

- GET /api/Movies/{index}
  ![Image](https://github.com/user-attachments/assets/9e6a46e0-10c6-454c-97a8-e07ce4d40f41)

- DELETE /api/Movies/{index}
  ![Image](https://github.com/user-attachments/assets/e5a4ad6d-fea9-4074-99bd-4e78d07b2c91)

---
