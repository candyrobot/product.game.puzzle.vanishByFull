/**
 * 非破壊型
 * sample: `[0,1].merge(1, [0,0]) => [0,0,0]`
 * @param  {[type]}   X   - 位置をindexで指定
 * @param  {[type]}   arr - マージしたい配列
 * @param  {Function} fn  - call when conflict.
 * @return {[type]}       [description]
 *
 * INFO: .map関数でやりたかったが値が特殊値`empty`の場合はmapのコールバックが呼ばれないorz
 */
Array.prototype.merge = function(X, arr, fn = function(val1, val2) { return val2 }) {
  var newArr = [];
  var newArrLength = Math.max(X + arr.length, this.length);
  for (var i = 0; i < newArrLength; i++) {
    var val = this[i];
    if(i<X) {
      newArr[i] = val;
    }
    else if(undefined !== this[i] && undefined !== arr[i-X]) {
      newArr[i] = fn(val, arr[i-X], i);
    }
    else {
      newArr[i] = undefined !== arr[i-X] ? arr[i-X] : this[i];
    }
  }
  return newArr;
};

Array.prototype.log = function(strName) {
  var str = strName + '\n';
  this.map((arr)=> {
    str += JSON.stringify(arr) + "\n";
  });
  console.log(str);
};

