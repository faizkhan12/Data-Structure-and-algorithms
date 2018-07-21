function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var NewArr=arr2.slice(0,arr2.length);
  NewArr.splice(n,0,...arr1);
  return NewArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
