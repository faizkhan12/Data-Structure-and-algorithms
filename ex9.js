function findElement(arr, func) {
  var num = 0;
  for(var i=0;i<arr.length;i++)
  {
    if(func(arr[i])===true)
    {
      num=arr[i];
      return num;
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
