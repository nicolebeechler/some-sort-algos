function mergeSort(arr) {
    // YOUR CODE HERE

    // array length < 1 base case
    if (arr.length <= 1) {
        return arr
    }

    // middle, left, right
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    // return left and right merge
    return merge(mergeSort(left), mergeSort(right))
  }
  
  
  // HELPER FUNCTION: merge two sorted arrays
  function merge(arr1, arr2) {
    var result = [];
  
    while (arr1.length && arr2.length) {
      if(arr1[0] <= arr2[0]) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }
  
    return result.concat(arr1, arr2);
  }

  const arr1 = [9, 7, 6, 0, 1, 3]
  const arr2 = [8, 4, 2, 7]

  console.log(mergeSort(arr1))

  
  function quickSort(arr){
    // YOUR CODE HERE
  
  }