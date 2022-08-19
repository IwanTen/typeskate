export class SkaterAnims extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string = "skater",
    frame: string | number = 8
  ) {
    super(scene, x, y, texture, frame);
    //*create push animation
    this.anims.create({
      key: "push",
      frames: this.anims.generateFrameNumbers("skater", { start: 0, end: 7 }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: "ollie",
      frames: this.anims.generateFrameNumbers("skater", { start: 12, end: 16 }),
      frameRate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "crouch",
      frames: this.anims.generateFrameNumbers("skater", { frames: [8, 11] }),
      frameRate: 20,
      repeat: 0,
    });
  }
}

export default { SkaterAnims };
