export default class PutMap {
  constructor() {
    this._map =
    [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ];
  }

  /**
   * @param {object}
   * @param {object}
   */
  add(position, piece) {
    this._map = this._map.merge(position.y, piece._map, function(val1, val2) {
      return val1.merge(position.x, val2, (val1, val2)=> val1 + val2);
    });
    // or
    // piece._map().map((arrOfX)=> {
    //   this._map[y][x]++;
    // });
  }

  isOverBeyondMap(position, piece) {
    return this._map.length < position.y + piece._map.length || this._map.some((mapX, i)=> {
      return piece._map[i-position.y] && mapX.length < position.x + piece._map[i-position.y].length;
    });
  }
}
