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

  /**
   * [checkAndAdd description]
   * @param  {[type]} postion [description]
   * @param  {[type]} piece   [description]
   */
  checkAndAdd(postion, piece) {
    if(this.isOverBeyondMap(postion, piece))
      console.warn('over beyond the map!');
    else
      this.add(postion, piece);
  }

  /**
   * [isOverBeyondMap description]
   * @param  {[type]} postion [description]
   * @param  {[type]} piece   [description]
   * @return {[type]}         [description]
   */
  isOverBeyondMap(position, piece) {
    return this._map.length < position.y + piece._map.length || this._map.some((mapX, i)=> {
      return piece._map[i-position.y] && mapX.length < position.x + piece._map[i-position.y].length;
    });
  }
}
