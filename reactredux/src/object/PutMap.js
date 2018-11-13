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

  show() {
    var str='';
    this._map.map((arr)=> {
      str += JSON.stringify(arr) + "\n";
    });
    console.log(str);
  }

  /**
   * @param {[type]}
   * @param {[type]}
   */
  add(position, piece) {
    var additionalMap = convert(position, piece);
    this._map.map((arrOfX)=> {
      arrOfX.map(()=> {
        return
      });
    });
    // or
    // piece.shapeMap().map((arrOfX)=> {
    //   this._map[y][x]++;
    // });
  }

  convert(position, piece) {
    var arr = [];


    // INFO: この式は非常にきれいだが、`[1,0,1]` のときに破綻するし、`[0,1]`でも破綻する
    arrOfX = [0,1];
    for (var x = positionX; x <= positionX + arrOfX.length; x++) {
      this._map[y][x]++;
    }


  }
}
