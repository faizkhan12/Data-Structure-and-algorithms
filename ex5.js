function largestOfFour(arr) {
  // You can do this!
  var result=[];
  for(var i=0;i<arr.length;i++)
  {
    var largestNumber=arr[i][0];
    for(var n=1;n<arr[i].length;n++)
    {
      if(arr[i][n]>largestNumber)
      {
        largestNumber=arr[i][n];
      }
    }
  
  result[i]=largestNumber;
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
