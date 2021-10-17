export class Cell extends g.Sprite {
	alive: boolean;
	constructor(param: g.SpriteParameterObject) {
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
