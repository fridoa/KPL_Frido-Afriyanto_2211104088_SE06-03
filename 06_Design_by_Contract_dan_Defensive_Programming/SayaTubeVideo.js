class SayaTubeVideo {
  #id;
  #title;
  #playCount;

  constructor(title) {
    if (!title || title.length > 100) {
      throw new Error("Judul harus ada dan maksimal 100 karakter.");
    }

    this.#id = Math.floor(10000 + Math.random() * 90000); // 5 digit random
    this.#title = title;
    this.#playCount = 0;
  }

  increasePlayCount(count) {
    if (count > 10000000) {
      throw new Error("Penambahan play count maksimal 10.000.000.");
    }

    const newPlayCount = this.#playCount + count;

    if (newPlayCount > Number.MAX_SAFE_INTEGER) {
      throw new Error("Overflow: melebihi batas maksimum integer.");
    }

    this.#playCount = newPlayCount;
  }

  printVideoDetails() {
    console.log(`ID: ${this.#id}`);
    console.log(`Title: ${this.#title}`);
    console.log(`Play Count: ${this.#playCount}`);
  }
}

module.exports = SayaTubeVideo;
