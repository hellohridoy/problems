const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
const updateNames = names.filter(name => name.includes('J')).map(filteredName => (
    filteredName
));
console.log(updateNames)

const people = [
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];
  const updatePerson = people.filter(person => person.age < 60).map(filteredPerson => (
      filteredPerson.name
  ))
  console.log(updatePerson);