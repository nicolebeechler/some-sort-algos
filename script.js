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

  console.log("mergeSort = " + mergeSort(arr1))

  
  function quickSort(arr){
    // YOUR CODE HERE

    // base case
    if (arr.length <= 1) {
        return arr
    }

    const pivot = arr[arr.length-1] // last element
    const right = []
    const left = []

    // if right > pivot, move to right
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < pivot){
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))

  }

  const arr = [0, 9, 6, 5, 4]

  console.log("quickSort = " + quickSort(arr))