var chocolateBars = [
  'snickers', 'hundred grand', 'kitkat', 'skittles'
  ]
function addElementToBeginningOfArray(array, element) { return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) { 
  array.unshift(element) 
  return array
}
function addElementToEndOfArray(array,element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) { array.push(element)
return array 
}
function accessElementInArray(array, index) { 
  var element = array[index]
  return element
}
function destructivelyRemoveElementFromBeginningOfArray(array) { 
  array.shift() 
  return array 
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}



function addElementToBeginningOfArray(array, element) {
  return [element... array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var NewArray= array.unshift(element)
  return NewArray
}

function addElementToEndOfArray(array, element) {
  return element.push()
}
function removeElementFromBeginningOfArray (array) {
  array.slice(1)
  return array;
}
function destructivelyRemoveElementFromEndOfArray (array) {
  return array.pop();
}
function removeElementFromEndOfArray (array) {
  array.slice(0, array.length -1);
  return array;
}








