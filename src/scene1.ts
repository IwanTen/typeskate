export default class Scene1 extends Phaser.Scene {
  player;
  skater;
  bg;
  ground;
  deltaV;
  constructor() {
    super("");
    // let player;
    // let platforms;
    // let bg;
    // let ground;
    this.deltaV = 0;
  }

  preload() {
    this.load.image("ground", "src/assets/skateGroundv1.png");
    this.load.image("sky", "src/assets/sky.png");
    this.load.spritesheet("board", "src/assets/board.png", {
      frameWidth: 22,
      frameHeight: 4,
    });
    this.load.image("bg", "src/assets/test-bg.png");
    this.load.spritesheet("skater", "src/assets/skater_push.png", {
      frameWidth: 49,
      frameHeight: 40,
    });
  }

  create() {
    // this.bg = this.add.tileSprite(64, 32, 128, 64, "bg");

    this.ground = this.add.tileSprite(128, 125, 256, 5, "ground");
    this.add.existing(this.ground);
    this.physics.add.existing(this.ground, true);

    // this.player = this.physics.add.sprite(0, 32, "board");
    // this.player.setBounce(0.1);
    // this.player.setCollideWorldBounds(true);
    // this.physics.add.collider(this.player, this.ground);
    // this.anims.create({
    //   key: "roll",
    //   frames: this.anims.generateFrameNumbers("board", { start: 0, end: 2 }),
    //   frameRate: 10,
    //   repeat: -1,
    // });

    this.skater = this.physics.add.sprite(128, 0, "skater", 8);
    this.skater.setBounce(0.1);
    this.skater.setCollideWorldBounds(true);
    this.physics.add.collider(this.skater, this.ground);
    this.anims.create({
      key: "roll",
      frames: this.anims.generateFrameNumbers("skater", { start: 0, end: 7 }),
      frameRate: 20,
      repeat: 0,
    });
  }

  update() {
    // this.skater.anims.play("roll", true);
    // this.bg.tilePositionX += 0.5;
    this.ground.tilePositionX += 0.4 * this.deltaV;

    this.input.keyboard.on("keydown-SPACE", () => {
      //   this.skater.setVelocityX(-90);
      this.deltaV += 0.001;
      this.skater.anims.play("roll", true);
      console.log("pressed");
    });

    //     Input.Keyboard.KeyCodes.SPACE;
    //     // onKeyDown(player.setVelocityY(20));
    //   }
  }
}
