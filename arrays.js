var chocolateBars = ["snickers","hundredgrand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  array=[element,...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  
  array.unshift(element)
  return array
}
