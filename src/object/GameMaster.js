import './Array';
import BoardMaster from './BoardMaster';
import PieceProvider from './PieceProvider';
import StockMaster from './StockMaster';

export default class GameMaster {
  constructor(option = {}) {
    this.selectingIndex = undefined;
    this.boardMaster = new BoardMaster([10,10]);
    this.pieceProvider = new PieceProvider();
    this.stockMaster = new StockMaster(
      option.numberOfPieceStocker === undefined ? 3 : option.numberOfPieceStocker,
      ()=> this.pieceProvider.random()
    );
  }

  dumpMap() {
    return this.boardMaster.getMap();
  }

  dumpPieces() {
    return this.stockMaster.getAll();
  }

  select(i) {
    this.selectingIndex = i;
  }

  add(position) {
    var piece = this.stockMaster.get(this.selectingIndex);

    if(this.boardMaster.isOverBeyondMap(piece._map, position))
      return console.warn('over beyond the map!');

    if(this.boardMaster.isAlreadyExist(piece._map, position))
      return console.warn('is already exist!');

    this.stockMaster.remove(this.selectingIndex);
    this.boardMaster.add(piece._map, position);

    if(this.stockMaster.getAll().filter((v)=> v===undefined).length === this.stockMaster.getAll().length)
      this.stockMaster.fillBy(()=> this.pieceProvider.random());

    this.boardMaster.subtract(this.boardMaster.getMapFiliteringByFull());
  }

  demo() {
    for(var i=0; i<1000; i++) {
      var postion = { x: Math.round(Math.random() * 10), y: Math.round(Math.random() * 10) };
      var piece = this.pieceProvider.random();
      console.log(postion);
      console.log(piece._map.stringify());
      console.log(this.boardMaster._map.stringify());
      this.boardMaster.checkAndAdd(piece._map, postion);
      // this.boardMaster.subtract(this.boardMaster.getMapFiliteringByFull());
    }
    console.log(this.boardMaster._map.stringify());
  }

}
