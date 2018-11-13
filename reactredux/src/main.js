import PutMap from './object/PutMap';
import PieceProvider from './object/PieceProvider';
(function main() {
  const pieceProvider = new PieceProvider();
  var piece = pieceProvider.random();
  console.log(piece);
  var map = new PutMap();
  window.map = map;

  map.show();

  if(map.isOverBeyondMapX(piece.shapeMap(), [0,0]) || map.isOverBeyondMapY(piece.shapeMap(), [0,0]))
    ;
  else
    map.add([0,0], piece);
  map.show();
})();
