const SayaTubeVideo = require("./SayaTubeVideo");

try {
  const video = new SayaTubeVideo("Tutorial Design By Contract – [FRIDO AFRIYANTO]");

  // Simulasi overflow
  for (let i = 0; i < 215; i++) {
    video.increasePlayCount(10000000); // bisa menyebabkan overflow
  }

  video.printVideoDetails();
} catch (error) {
  console.error("Error:", error.message);
}
