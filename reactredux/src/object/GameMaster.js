import '../object/Array';
import PutMap from '../object/PutMap';
import PieceProvider from '../object/PieceProvider';
import StockMaster from '../object/StockMaster';

export default class GameMaster {
  constructor(option = {}) {
    this.putMap = new PutMap();
    this.pieceProvider = new PieceProvider();
    this.stockMaster = new StockMaster(
      option.numberOfPieceStocker === undefined ? 3 : option.numberOfPieceStocker,
      ()=> this.pieceProvider.random()
    );
  }

  dumpMap() {
    return this.putMap.getMap();
  }

  dumpPieces() {
    return this.stockMaster.getAll();
  }

  add(indexOfPiece, position) {
    var piece = this.stockMaster.get(indexOfPiece);
    if(this.putMap.isOverBeyondMap(piece._map, position))
      console.warn('over beyond the map!');
    else if(this.putMap.isAlreadyExist(piece._map, position))
      console.warn('is already exist!');
    else {
      this.stockMaster.remove(indexOfPiece);
      this.putMap.add(piece._map, position);
    }
  }

  demo() {
    for(var i=0; i<1000; i++) {
      var postion = { x: Math.round(Math.random() * 10), y: Math.round(Math.random() * 10) };
      var piece = this.pieceProvider.random();
      console.log(postion);
      console.log(piece._map.stringify());
      console.log(this.putMap._map.stringify());
      this.putMap.checkAndAdd(piece._map, postion);
      // this.putMap.subtract(this.putMap.getMapFiliteringByFull());
    }
    console.log(this.putMap._map.stringify());
  }

}
