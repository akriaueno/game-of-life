export class Cell extends g.FilledRect {
  alive: boolean;

  constructor(param: g.FilledRectParameterObject) {
    super(param);
    this.alive = g.game.random.generate() >= 0.5;
    this.onUpdate.add(() => {
      if (this.alive) {
        this.show();
      } else {
        this.hide();
      }
    });
    this.modified();
  }
}
