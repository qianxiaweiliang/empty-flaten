'use strict';
function double_to_one(collection) {
  //在这里写入代码
            var ar = Array();
			var arr = new Array()
			for (var i = 0; i < collection.length; i++) {
				ar[i] = collection[i];
				if (ar[i].constructor == Number) {
					arr.push(ar[i])
				} else {
					for (var j = 0; j < ar[i].length; j++) {
						arr.push(ar[i][j]);
					}
				}
			}
			return arr;
}
module.exports = double_to_one;
