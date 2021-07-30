"use strict";
function mapToElementLengthTypes(array) {
    return array.map(function (e) { return e.length; });
}
var map1 = mapToElementLengthTypes(["this", "works!"]);
console.log('map1:', map1);
var map2 = mapToElementLengthTypes(["this", "works!", [3, 5, 7, 4]]);
console.log('map2:', map2);
