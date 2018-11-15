export default class PutMap {
  /**
   * [constructor description]
   * @param  {Array} - [{int} width, {int} height]
   * @return {[type]}     [description]
   */
  constructor(mapSizes) {
    this.mapSizes = mapSizes;
    this._map = [];
    for (var x=0; x<mapSizes[0]; x++) {
      this._map[x] = [];
      for (var y=0; y<mapSizes[1]; y++) {
        this._map[x][y] = 0;
      }
    }
    this._map = this._map.transpose();
    // this._map =
    // [
    //   [0,0,0,0,0,0,0,0,0,0],
    //   [0,0,0,0,0,0,0,0,0,0],
    //   [0,0,0,0,0,0,0,0,0,0],
    //   [0,0,0,0,0,0,0,0,0,0],
    //   [0,0,0,0,0,0,0,0,0,0],
    //   [0,0,0,0,0,0,0,0,0,0],
    //   [0,0,0,0,0,0,0,0,0,0],
    //   [0,0,0,0,0,0,0,0,0,0],
    //   [0,0,0,0,0,0,0,0,0,0],
    //   [0,0,0,0,0,0,0,0,0,0],
    // ];
  }

  /**
   * 加算する
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
    return this._map;
  }

  /**
   * 減算する
   * @param  {[type]} map      [description]
   * @param  {Object} position [description]
   * @return {[type]}          [description]
   */
  subtract(map, position = { x:0, y:0 }) {
    this._map = this._map.merge(position.y, map, function(val1, val2) {
      return val1.merge(position.x, val2, (val1, val2)=> val1 - val2);
    });
    return this._map;
  }

  /**
   * [checkAndAdd description]
   * @param  {[type]} position [description]
   * @param  {[type]} map      [description]
   */
  checkAndAdd(map, position) {
    if(this.isOverBeyondMap(map, position))
      console.warn('over beyond the map!');
    else if(this.isAlreadyExist(map, position))
      console.warn('is already exist!');
    else
      this.add(map, position);
  }

  /**
   * 配置可能な場所`position`を配列で返す
   * @return {Array}
   */
  getPutablePositions(map) {
    var positions = [];
    this._map.forEach((a, y)=> {
      a.forEach((v, x)=> {
        !this.isOverBeyondMap(map, { x:x, y:y }) &&
        !this.isAlreadyExist(map, { x:x, y:y }) &&
        positions.push({ x:x, y:y });
      });
    });
    return positions;
  }

  isFull(arr, y) {
    return arr[y].reduce((v1, v2) => v1 += v2) === arr[y].length;
  }

  /**
   * 次の特徴を備えたmapを新しく取得する
   * - fullの行、列は1で埋められており、それ以外は0にしたmapである
   * - fullの行、列かどうかは現在のmapを参考にしている
   * 用途
   * - fullの箇所が特定できる
   * - マスク（減算）させるために使う
   * @return {[type]}
   */
  getMapFiliteringByFull() {
    return new PutMap(this.mapSizes)._map.map((a, y)=> {
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

  getMap() {
    return this._map;
  }
}
