function minimumSwaps(arr){

	for(let i in arr){

		 arr[i]--;
	}
    // return arr[i];
	// let i = 0;
	// let swaps = 0;

	while(i < arr.length){

		if(arr[i] == i){

			i++;
			continue;
		}

	// 	let valueInCurrentPosition = arr[i];

	// 	let temporaryValue = arr[valueInCurrentPosition];

	// 	arr[valueInCurrentPosition] = arr[i];
	// 	arr[i] = temporaryValue;

	// 	swaps++;
	// }

	// return swaps;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));