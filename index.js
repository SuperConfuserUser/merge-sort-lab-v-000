function findMinAndRemoveSorted(arr) {
  return arr.shift();
}

function merge(firstArr, secondArr) {
  const sorted = [];
  let firstMin;
  let secondMin;
  while(firstArr.length && secondArr.length) {
    firstMin = findMinAndRemoveSorted(firstArr);
    secondMin = findMinAndRemoveSorted(secondArr);
  }
  return [firstMin, secondMin, firstArr, secondArr];
}

// function findMinAndRemoveSorted(arr) {
//   let min = arr[0];
//   let minIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) { 
//       min = arr[i];
//       minIndex = i;
//     }
//   }
//   arr.splice(minIndex, 1);
//   return min;
// }

// function merge(arr1, arr2) {
//   const arr = arr1.concat(arr2);
//   const sorted = [];
//   while(arr.length > 0) {
//     sorted.push(findMinAndRemoveSorted(arr));
//   }
//   return sorted;
// }

// function mergeSort(arr) {
//   let midpoint = arr.length/2
//   let firstHalf = arr.slice(0, midpoint)
//   let secondHalf = arr.slice(midpoint, arr.length)
//   return merge(firstHalf, secondHalf);
// }
