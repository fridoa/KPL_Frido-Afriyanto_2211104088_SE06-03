class DoorMachine {
  constructor() {
    this.state = "Terkunci";
    this.displayState();
  }

  toggle() {
    this.state = this.state === "Terkunci" ? "Terbuka" : "Terkunci";
    this.displayState();
  }

  displayState() {
    if (this.state === "Terkunci") {
      console.log("Pintu terkunci");
    } else {
      console.log("Pintu tidak terkunci");
    }
  }
}

const door = new DoorMachine();
door.toggle();
door.toggle();
