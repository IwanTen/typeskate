import Phaser from "phaser";
import { Scene, Loading } from "./scenes/index";
import "./style.css";
var config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "0A0A0A",
  zoom: 1,
  width: 512,
  height: 128,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game-canvas",
    width: 512,
    height: 128,
  },
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  scene: [Loading, Scene],
};

export default new Phaser.Game(config);
