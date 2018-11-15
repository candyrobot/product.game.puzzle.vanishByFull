import './Array';
import PutMap from './PutMap';
import PieceProvider from './PieceProvider';
import StockMaster from './StockMaster';

export default class GameMaster {
  constructor(option = {}) {
    this.selectingIndex = undefined;
    this.putMap = new PutMap([10,10]);
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

  select(i) {
    this.selectingIndex = i;
  }

  add(position) {
    var piece = this.stockMaster.get(this.selectingIndex);

    if(this.putMap.isOverBeyondMap(piece._map, position))
      return console.warn('over beyond the map!');

    if(this.putMap.isAlreadyExist(piece._map, position))
      return console.warn('is already exist!');

    this.stockMaster.remove(this.selectingIndex);
    this.putMap.add(piece._map, position);

    if(this.stockMaster.getAll().filter((v)=> v===undefined).length === this.stockMaster.getAll().length)
      this.stockMaster.fillBy(()=> this.pieceProvider.random());

    this.putMap.subtract(this.putMap.getMapFiliteringByFull());
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
