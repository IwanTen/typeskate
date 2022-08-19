import { Physics } from "phaser";
import { SkaterAnims } from "./anims";

export class Skater extends Phaser.Physics.Arcade.Sprite {
  skater;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string = "skater",
    frame: string | number = 8
  ) {
    // texture = "skater";
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.getBody().setCollideWorldBounds(true);
    this.setBounce(0.1);
  }
  protected getBody(): Physics.Arcade.Body {
    return this.body as Physics.Arcade.Body;
  }

  public push(): void {
    this.play("push");
  }

  public crouch(): void {
    this.play("crouch");
  }

  public ollie(): void {
    this.getBody().setVelocityY(-100);
    this.anims.play("ollie", true);
  }
}

export default { Skater };
