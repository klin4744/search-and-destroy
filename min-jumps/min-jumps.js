'use strict';

// 1. check if, we the current number + the index of the array if I can reach the end of the array via it's length.
// 2. If not, look ahead the distance of the number and look for the next largest number;
// 3. Hop to that number and repeat
// Complete this algo
const minJumps = arr => {
   let numOfJumps = 0;
   let currentIndex = 0;
   let max = -Infinity;
   let maxIndex;
   while (currentIndex < arr.length - 1) {
      let difference = arr.length - arr[currentIndex] - 1 - currentIndex;
      if (difference <= 0) return numOfJumps + 1;
      for (
         let i = currentIndex + 1;
         i <= currentIndex + arr[currentIndex];
         i++
      ) {
         if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
         }
      }
      numOfJumps++;
      currentIndex = maxIndex;
      max = -Infinity;
   }
};

module.exports = minJumps;
