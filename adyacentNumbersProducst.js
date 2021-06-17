function adjacentElementsProduct(inputArray) {

for ( var i = 0; i < inputArray.length; i++){
    var current = inputArray[i];
    var partner = inputArray[i + 1];
 console.log(current, partner)
}

}

inputArray = [3, 6, -2, -5, 7, 3];

console.log(adjacentElementsProduct(inputArray));