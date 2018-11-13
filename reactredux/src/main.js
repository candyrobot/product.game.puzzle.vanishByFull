import './object/Array';
import PutMap from './object/PutMap';
import PieceProvider from './object/PieceProvider';
(function main() {
  const pieceProvider = new PieceProvider();
  var piece = null;
  var postion = { x: 0, y: 0 };
  var map = new PutMap();
  window.map = map;


  piece = pieceProvider.random();
  console.log(postion);
  console.log(piece._map.stringify());
  console.log(map._map.stringify());
  map.checkAndAdd(postion, piece);

  piece = pieceProvider.random();
  console.log(postion);
  console.log(piece._map.stringify());
  console.log(map._map.stringify());
  map.checkAndAdd(postion, piece);

  piece = pieceProvider.random();
  console.log(postion);
  console.log(piece._map.stringify());
  console.log(map._map.stringify());
  map.checkAndAdd(postion, piece);

  console.log(map._map.stringify());
})();
