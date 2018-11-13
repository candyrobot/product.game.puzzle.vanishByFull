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
    else if(this.isAlreadyExist(postion, piece))
      console.warn('is already exist!');
    else
      this.add(postion, piece);
  }

  /**
   * [hasFullsOnHorizontal description]
   * @return {Array} - xxxxxxxxxxxxx: return fullになってる行のindexらを配列で返す
   */
  hasFullsOnHorizontal() {
    return this._map.map?some?filter?((mapX, y)=> {
      return mapX.reduce((v1, v2) => v1 += v2) === mapX.length;
    });
  }

  /**
   * [hasFullsOnVertical description]
   * @return {Array} - xxxxxxxxxxxxx: return fullになってる列のindexらを配列で返す
   */
  hasFullsOnVertical() {

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

  /**
   * [isAlreadyExist description]
   * @param  {[type]}  position [description]
   * @param  {[type]}  piece    [description]
   * @return {Boolean}          [description]
   */
  isAlreadyExist(position, piece) {
    return this._map.some((mapX, y)=> {
      return mapX.some((val, x)=> {
        return piece._map[y-position.y] && piece._map[y-position.y][x-position.x] && val + piece._map[y-position.y][x-position.x] > 1;
      });
    });
  }
}
