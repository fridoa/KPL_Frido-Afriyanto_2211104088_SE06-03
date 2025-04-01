class HaloGeneric {
  static SapaUser(user) {
    console.log(`Halo user ${user}`);
  }
}

HaloGeneric.SapaUser("Frido Afriyanto");

class DataGeneric {
  constructor(data) {
    this.data = data;
  }

  PrintData() {
    console.log(`Data yang tersimpan adalah: ${this.data}`);
  }
}

const dataNIM = new DataGeneric("2211104088");
dataNIM.PrintData();