var kittens = ["Milo", "Otis", "Garfield"]
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  var newName = name;
  newName.push(name);
  return newName;
}
