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
   * @return {boolean} - return false when different array-length between first and result; might mean over beyond from the map.
   */
  add(position, piece) {
    var result = true;
    var newMap = this._map.merge(position.y, piece._map, function(val1, val2) {
      var newVal1 = val1.merge(position.x, val2, (val1, val2)=> val1 + val2);
      if(newVal1.length !== val1.length)
        result = false;
      return newVal1;
    });
    if(newMap.length !== this._map.length || result === false) {
      newMap.log('newMap became strange shape.');
      return false;
    }
    else
      this._map = newMap;
    // or
    // piece._map().map((arrOfX)=> {
    //   this._map[y][x]++;
    // });
  }
}
