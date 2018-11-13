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
  add(map, position = { x:0, y:0 }) {
    this._map = this._map.merge(position.y, map, function(val1, val2) {
      return val1.merge(position.x, val2, (val1, val2)=> val1 + val2);
    });
    // or
    // map().map((arrOfX)=> {
    //   this._map[y][x]++;
    // });
  }

  subtract(map, position = { x:0, y:0 }) {
    this._map = this._map.merge(position.y, map, function(val1, val2) {
      return val1.merge(position.x, val2, (val1, val2)=> val1 - val2);
    });
  }

  /**
   * [checkAndAdd description]
   * @param  {[type]} postion [description]
   * @param  {[type]} piece   [description]
   */
  checkAndAdd(piece, postion) {
    if(this.isOverBeyondMap(piece._map, postion))
      console.warn('over beyond the map!');
    else if(this.isAlreadyExist(piece._map, postion))
      console.warn('is already exist!');
    else
      this.add(piece._map, postion);
  }

  isFull(arr, y) {
    return arr[y].reduce((v1, v2) => v1 += v2) === arr[y].length;
  }

  /**
   * 新しくmapを取得する
   * - fullの行、列は1で埋められており、それ以外は0にしたmapである
   * - fullの行、列かどうかは現在のmapを参考にしている
   * @return {[type]}
   */
  getMapFiliteringByFull() {
    return new PutMap()._map.map((a, y)=> {
      return this.isFull(this._map, y) ? a.map((v, x)=> Math.min(1, ++v)) : a;
    })
    .transpose().map((a, y)=> {
      return this.isFull(this._map.transpose(), y) ? a.map((v, x)=> Math.min(1, ++v)) : a;
    }).transpose();
  }

  /**
   * [isOverBeyondMap description]
   * @param  {[type]} postion [description]
   * @param  {[type]} map     [description]
   * @return {[type]}         [description]
   */
  isOverBeyondMap(map, position) {
    return this._map.length < position.y + map.length || this._map.some((a, i)=> {
      return map[i-position.y] && a.length < position.x + map[i-position.y].length;
    });
  }

  /**
   * [isAlreadyExist description]
   * @param  {[type]}  position [description]
   * @param  {[type]}  map      [description]
   * @return {Boolean}          [description]
   */
  isAlreadyExist(map, position) {
    return this._map.some((a, y)=> {
      return a.some((v, x)=> map[y-position.y] && map[y-position.y][x-position.x] && v + map[y-position.y][x-position.x] > 1);
    });
  }
}
