var users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  var arr = ["Alan", "Jeff", "Sarah", "Ryan"];
  var hasAllKeys = arr.every(function(item){
    return obj.hasOwnProperty(item);
  });
  return hasAllKeys;
  
  // change code above this line
}

console.log(isEveryoneHere(users));
