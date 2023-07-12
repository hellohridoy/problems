// const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
// const updateNames = names.filter(name => name.includes('J')).map(filteredName => (
//     filteredName
// ));
// console.log(updateNames)

// const people = [
//     {
//       name: 'James',
//       age: 31,
//     },
//     {
//       name: 'John',
//       age: 45,
//     },
//     {
//       name: 'Paul',
//       age: 65,
//     },
//     {
//       name: 'Ringo',
//       age: 49,
//     },
//     {
//       name: 'George',
//       age: 34,
//     }
//   ];
//   const updatePerson = people.filter(person => person.age < 60).map(filteredPerson => (
//       filteredPerson.name
//   ))
//   console.log(updatePerson);




const number  = [1,2,3,4,5,6,7,8,9,10];
let result = number.filter(ele => ele > 5);
console.log(result);

var words = ["hi", "hello", "hey", "apple", "watermelon",
            "lemon", "javascript"];
var updateWords = words.filter(word => word.length <= 5);
console.log(updateWords);


var jsonData = [
  {
      id: 1,
      name: "joe"
  },
  {
      id: -19,
      name: "john"
  },
  {
      id: 20,
      name: "james"
  },
  {
      id: 25,
      name: "jack"
  },
  {
      id: -10,
      name: "joseph"
  },
  {
      id: "not a number",
      name: "jimmy"
  },
  {
      id: null,
      name: "jeff"
  },
]

let findId  = jsonData.filter(user => user.id > 1)
console.log(findId);


let people_details = [
  {name: "ABC", age: 18},
  {name: "GeeksforGeeks", age: 30},
  {name: "DEF", age: 50},
];
let update_people_details = people_details.filter(peole => peole.age>=30)
console.log(update_people_details);



let blood_groups_data = [
  { name: "ABC", age: 19, blood_group: "B+" },
  { name: "DEF", age: 20, blood_group: "AB+" },
  { name: "JOHN", age: 25, blood_group: "A+" },
  { name: "APPLE", age: 45, blood_group: "B+" },
  { name: "PETER", age: 48, blood_group: "AB-" },
  { name: "JAMES", age: 53, blood_group: "B+" },
  ];


let findResult = blood_groups_data.filter(person => person.age>18 && person.blood_group === "B+")
console.log(findResult);