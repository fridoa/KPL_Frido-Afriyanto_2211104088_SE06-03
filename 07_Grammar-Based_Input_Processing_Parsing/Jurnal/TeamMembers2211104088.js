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
