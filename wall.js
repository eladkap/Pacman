class Wall extends Tile {
  constructor(row, col, width, color, symbol, points) {
    super(row, col, width, color, symbol, points);
  }

  Draw() {
    noStroke();
    fill(this.color);
    rect(this.pos.x, this.pos.y, this.width, this.width);
  }
}
