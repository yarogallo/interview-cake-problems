/**
 * 
Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.} arrayOfInts 
 */

// O(N^3)
function highestProductOf3O(arrayOfInts) {
	if (arrayOfInts.length < 3) {
		throw "array must have more than 2 elements";
	}

	// Calculate the highest product of three numbers
	let mult = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2]
	for(let i = 0; i < arrayOfInts.length - 2; i++) {
	  for(let j = i + 1; j < arrayOfInts.length - 1; j++){
		for(let y = j + 1; j < arrayOfInts.length; y++) {
		  let tmp = arrayOfInts[i] * arrayOfInts[j] * arrayOfInts[y];
		  if(tmp > mult) {
			mult = tmp;
		  }
		}
	  }
	}
  
	return mult;
  }
  // this is O(N) but dot no work for all cases, like when we have two negative
  function highestProductOf3(arrayOfInts) {
	if (arrayOfInts.length < 3) {
		  throw "array must have more than 2 elements";
	  }
	// Calculate the highest product of three numbers
	let m_1 = 0;
	let m_2 = 0;
	debugger;
	if(arrayOfInts[0] > arrayOfInts[1]) {
	  m_1 = arrayOfInts[0];
	  m_2 = arrayOfInts[1];
	} else {
	  m_1 = arrayOfInts[1];
	  m_2 = arrayOfInts[0];
	}
	let mult = m_1 * m_2 * arrayOfInts[2];
	
	for(let i = 2; i < arrayOfInts.length; i++) {
	  let tmp = m_1 * m_2 * arrayOfInts[i];
	  if(tmp > mult) {
		mult = tmp;
	  }
	  if(arrayOfInts[i] > m_1){
		let t = m_1;
		m_1 = arrayOfInts[i];
		m_2 = t;
	  } else if(arrayOfInts[i] > m_2) {
		m_2 = arrayOfInts[i];
	  }
	}
	
  
	return mult;
  }
  
    // this is O(N) work for all cases
  
  function highestProductOf3(arrayOfInts) {
	if (arrayOfInts.length < 3) {
		  throw "array must have more than 2 elements";
	  }
	// Calculate the highest product of three numbers
	let max = Math.max(arrayOfInts[0], arrayOfInts[1]);
	let min = Math.min(arrayOfInts[0], arrayOfInts[1]);;
  
	let maxMult = max * min;
	let minMult = max * min;
	
	let mult = max * min * arrayOfInts[2]
	
	for(let i = 2; i < arrayOfInts.length; i++) {
	  let current = arrayOfInts[i]
	  let tmp = maxMult * current;
	  let tmp_l = minMult * current;
	  
	  mult = Math.max(mult, tmp, tmp_l);
	  
	  maxMult = Math.max(maxMult, current * max, current * min);
	  
	  minMult = Math.min(minMult, current * max, current * min);
	  
	  max = Math.max(max, current);
	  min = Math.min(min, current);   
	}
	
  
	return mult;
  }
  
