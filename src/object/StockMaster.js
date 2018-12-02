export default class StockMaster {
  constructor(number, createPiece) {
    this.pieces = [];
    for (var i=0; i<number; i++) {
      this.pieces.push(undefined);
    }
    this.fillBy(createPiece);
  }

  fillBy(createPiece) {
    this.pieces = this.pieces.map((v)=> v === undefined && createPiece());
  }

  get(index) {
    return this.pieces[index];
  }

  getAll() {
    return this.pieces;
  }

  remove(index) {
    this.pieces[index] = undefined;
  }

}
