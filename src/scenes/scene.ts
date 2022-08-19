import { Skater } from "../classes/skater";
import { Game, GameObjects } from "phaser";
import { Obstacle } from "../classes/obstacle";
let v = 0;

export class Scene extends Phaser.Scene {
  skater;
  ground;
  incDelta: number;
  decDelta: number;
  scrollVelocity: number;
  maxVelocity: number;
  obstacles;
  firstSpawn;
  keySpace;
  keyShift;
  trickLoaded: boolean;
  // obstacle;
  size;
  playerMoving;
  constructor() {
    super("gameplay-scene");
    this.incDelta = 2;
    this.decDelta = 0.05;
    this.scrollVelocity = 0;
    this.size = {};
    this.playerMoving = false;
    this.firstSpawn = false;
    this.maxVelocity = 10;
    this.trickLoaded = false;
  }

  preload() {
    let { width, height } = this.sys.game.canvas;
    this.size = { width, height };
  }

  create() {
    this.keySpace = this.input.keyboard.addKey("SPACE");
    this.keyShift = this.input.keyboard.addKey("SHIFT");

    this.skater = new Skater(this, 100, this.size.height);

    this.keySpace.on("down", (e) => {
      console.log("space key up");
      this.skater.push();
      this.increaseVelocity();
      if (!this.firstSpawn) {
        this.firstSpawn = true;
        this.spawnObstacle();
      }
    });

    this.keyShift.on("down", (e) => {
      this.trickLoaded = true;
      this.skater.crouch();
    });

    this.keyShift.on("up", (e) => {
      this.trickLoaded = false;
      this.skater.ollie();
    });

    this.obstacles = this.physics.add.staticGroup({
      defaultKey: "cone",
      maxSize: 5,
      createCallback: function (obstacle) {
        obstacle.setName("obstacle");
        console.log("obs created: " + obstacle.name);
      },
      removeCallback: function (obstacle) {
        console.log("removed", obstacle.name);
      },
    });
    this.physics.add.collider(this.obstacles, this.skater, (obs, skater) => {
      console.log(`collided: skater and ${obs.name}`);
    });
  }
  update() {
    //Set skaters max speed;
    if (this.scrollVelocity > this.maxVelocity) {
      this.scrollVelocity = this.maxVelocity;
    }
    //If obstacle is off screen we deactive it and spawn the next obstacle
    this.obstacles.children.iterate((obstacle) => {
      //if obstacle is off screen
      if (obstacle.x < -obstacle.width) {
        this.obstacles.killAndHide(obstacle);
        this.spawnObstacle();
      }
    });
    this.handleScroll();
    this.decreaseVelocity();
  }

  handleScroll() {
    if (this.scrollVelocity <= 0) {
      this.scrollVelocity = 0;
    }
    this.obstacles.incX(-this.scrollVelocity);
    this.obstacles.refresh();
  }

  increaseVelocity(d = this.incDelta) {
    this.scrollVelocity += d;
  }

  decreaseVelocity(d = this.decDelta) {
    this.scrollVelocity -= d;
  }

  spawnObstacle() {
    const obstacle = this.obstacles.get(this.size.width, this.size.height - 8);
    if (!obstacle) return;
    obstacle.setActive(true).setVisible(true);
  }
  spawnSingleObtacle() {}
}
