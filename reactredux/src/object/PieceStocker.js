export default class PieceStocker {
  constructor(number) {
    this.pieces = [];
    for (var i=0; i<number; i++) {
      this.pieces.push(undefined);
    }
  }

  fill(createPiece) {
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
