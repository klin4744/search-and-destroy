'use strict';

// Complete this algo
const binarySearch = (array, target) => {
   let length = array.length;
   let mid = Math.floor(length / 2);
   while (length > 1 && mid > 0) {
      if (array[mid] === target) return true;
      if (array[mid] < target) {
         length = Math.ceil(length / 2);
         mid = Math.floor(mid + length / 2);
      } else {
         mid = Math.floor(mid / 2);
      }
   }
   if (array[mid] === target) return true;

   return false;
};
console.log(binarySearch([-3, -2, 0, 9, 10, 11, 12, 15, 17, 18, 19, 20], 20));

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
