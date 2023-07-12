const todos = ['Task 1', 'Task 2', 'Task 3'];
const newTodo = [...todos];
console.log(newTodo);


// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.



// Assign the first and second items from numbers to variables and put the rest in an array:

const numberOne = [1,2,3];
const numberTwo = [4,5,6];
const newNumber = [...numberOne,...numberTwo];
console.log(newNumber);



const numberList = [1,2,3,4,5,6,7];
const [one,two,three,...rest] =numberList;
console.log(one)
console.log(two)
console.log(three)
console.log(rest)


// We can use the spread operator with objects too:
// Color override in this example 

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

  console.log(myUpdatedVehicle);

  //Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.

  
