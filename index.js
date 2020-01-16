var kittens = ["Milo", "Otis", "Garfield"]
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  var newKitten = kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  var newKitten = kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
