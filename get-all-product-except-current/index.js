/**
 * 
 * You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

	Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

	For example, given:

	[1, 7, 3, 4]

	your function would return:

	[84, 12, 28, 21]

	by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]} arr 
 */
function getProductsOfAllIntsExceptAtIndexO(arr) {
	const newArr = [];
	
	arr.forEach((element, actual) => {
		let product = 1;
		for (let index = 0; index < arr.length; index++) {
			if (index !== actual) {
				product = product * arr[index];
			}
		}
		newArr.push(product);
	});
	return newArr;
}


function getProductsOfAllIntsExceptAtIndex(intArray) {
	
	if (intArray.length < 2) {
		throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
	  }

	// Make a list of the products
	  let before = 1;
	  let after = 1;
	  
	  const newArr = intArray.map((n) => {
		let product = before;
		before = before * n;
		return product;
	  });
	  
	  for(let i = intArray.length - 1; i >= 0; i--) {
		newArr[i] = newArr[i] * after;
		after = after * intArray[i]
	  };
	  
	  return newArr;
  }
  
  console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
