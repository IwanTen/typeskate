import Phaser from "phaser";
import Scene1 from "./scene1";

var config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 256,
  height: 128,
  backgroundColor: "0A0A0A",
  zoom: 3,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  scene: [Scene1],
};

let game = new Phaser.Game(config);

// platforms = this.physics.add.staticGroup();
// platforms.create(0, 62, "ground");
// platforms.create(64, 62, "ground");
// platforms.create(128, 62, "ground");
// platforms.create(192, 62, "ground");
