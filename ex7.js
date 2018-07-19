function repeatStringNumTimes(string, times) {
  // repeat after me
  var repeatString="";
  while(times>0)
  {
    repeatString += string;
    times--;
  }
  return repeatString;
}

repeatStringNumTimes("abc", 3);
