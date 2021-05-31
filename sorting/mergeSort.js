function merge(arr1, arr2) {
  let i = 0
  let j = 0
  let k = 0
  let aux = new Array(arr1.length + arr2.length)
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      aux[k++] = arr1[i++]
    } else {
      aux[k++] = arr2[j++]
    }
  }
  while (i < arr1.length) aux[k++] = arr1[i++]
  while (j < arr2.length) aux[k++] = arr2[j++]
  return aux

}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)


}

mergeSort([2, 34, 1, 23])
