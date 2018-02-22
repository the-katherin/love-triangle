/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var numberOfLovers = 0;
for (var i=1; i<preferences.length; i++) {
 if (preferences[i] !== preferences[preferences[i]-1] & preferences[preferences[preferences[i]-1]-1] === (i+1)) {

   numberOfLovers = numberOfLovers + 1;
  }

}
numberOfLovers = numberOfLovers / 3;
return numberOfLovers;
}
