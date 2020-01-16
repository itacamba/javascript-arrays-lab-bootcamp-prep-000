var kittens = ["Milo", "Otis", "Garfield"]
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  var newKitten = kittens.push(name);
  return kittens;
}

function destructivelyPrepentKitten(name){
  var newKitten = kittens.unshift(name);
  return kittens;
}
