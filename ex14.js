function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b)
  {
    return a - b;
  });
  for(var a=0;a<arr.length;a++)
  {
    if(arr[a]>=num)
    {
      return a;
    }
  }
  return arr.length;
  
  return num;
}

getIndexToIns([40, 60], 50);
