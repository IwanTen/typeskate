export class Loading extends Phaser.Scene {
  keySpace;
  keyShift;
  constructor() {
    super("loading-scene");
    this.keySpace;
    this.keyShift;
  }

  preload(): void {
    // this.load.baseURL = "../assets";
    this.load.image("ground", "src/assets/ground.png");

    this.load.spritesheet("skater", "src/assets/typeskateDemoSpriteSheet.png", {
      frameWidth: 49,
      frameHeight: 40,
    });
    this.load.spritesheet("cone", "src/assets/traffic-cone.png", {
      frameWidth: 16,
      frameHeight: 15,
    });
  }

  create(): void {
    //*create our animations
    //TODO for the sake of our hitbox and size, we must figure out
    //TODO  how to create these animations from json/atlas?
    this.anims.create({
      key: "push",
      frames: this.anims.generateFrameNumbers("skater", { start: 0, end: 7 }),
      frameRate: 15,
      repeat: 0,
    });

    this.anims.create({
      key: "ollie",
      frames: this.anims.generateFrameNumbers("skater", { start: 12, end: 15 }),
      frameRate: 7,
      repeat: 0,
    });

    this.anims.create({
      key: "crouch",
      frames: this.anims.generateFrameNumbers("skater", {
        start: 10,
        end: 11,
      }),
      frameRate: 10,
      repeat: 0,
    });
    //*Add our input
    this.keySpace = this.input.keyboard.addKey("SPACE");

    console.log("loading scene fired");
    this.scene.start("gameplay-scene");
  }
}
