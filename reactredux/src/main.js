import './object/Array';
import PutMap from './object/PutMap';
import PieceProvider from './object/PieceProvider';
(function main() {
  const pieceProvider = new PieceProvider();
  var piece = pieceProvider.random();
  var postion = { x: 7, y: 7 };
  var map = new PutMap();
  window.map = map;

  piece._map.log('piece'); // こっちの書き方も好き: `console.log(piece._map.stringify());`
  map._map.log('map'); // こっちの書き方も好き: `console.log(map._map.stringify());`

  // INFO: もしかしたらこの条件式いらないかもしれない
  // if(map.isOverBeyondMapX(piece._map(), postion) || map.isOverBeyondMapY(piece._map(), postion))
  //   ;
  // else
  //   map.add(postion, piece);
  map.add(postion, piece);

  map._map.log('map');
})();
