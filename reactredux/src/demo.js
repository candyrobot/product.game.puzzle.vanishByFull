import './object/Array';
import PutMap from './object/PutMap';
import PieceProvider from './object/PieceProvider';
(function main() {
  const pieceProvider = new PieceProvider();
  const map = new PutMap();
  window.map = map;

  for(var i=0; i<1000; i++) {
    var postion = { x: Math.round(Math.random() * 10), y: Math.round(Math.random() * 10) };
    var piece = pieceProvider.random();
    console.log(postion);
    console.log(piece._map.stringify());
    console.log(map._map.stringify());
    map.checkAndAdd(piece._map, postion);
    // map.subtract(map.getMapFiliteringByFull());
  }
  console.log(map._map.stringify());

})();
