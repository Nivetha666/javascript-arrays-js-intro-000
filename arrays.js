var chocolateBars = ["snickers","hundredgrand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  array=[element,...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array,element){

  array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element){
  array = [...array,element]
  return array
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}
function accessElementInArray(array,index){
  return array[index];

}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array.slice(0)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
function removeElementFromBeginningOfArray(array){

  return array.slice(1)
}
