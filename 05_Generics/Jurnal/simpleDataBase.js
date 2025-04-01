class SimpleDataBase {
  constructor() {
    this.storedData = [];
    this.inputDates = [];
  }

  addNewData(data) {
    let now = new Date();

    let month = now.getUTCMonth() + 1;
    let day = now.getUTCDate();
    let year = now.getUTCFullYear();
    let hours = now.getUTCHours();
    let minutes = now.getUTCMinutes().toString().padStart(2, "0");
    let seconds = now.getUTCSeconds().toString().padStart(2, "0");
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    let formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;

    this.storedData.push(data);
    this.inputDates.push(formattedDate);
  }

  printAllData() {
    this.storedData.forEach((data, index) => {
      console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
    });
  }
}

const db = new SimpleDataBase();
db.addNewData(12);
db.addNewData(34);
db.addNewData(56);
db.printAllData();
