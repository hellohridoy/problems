const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
const updateNames = names.filter(name => name.includes('J')).map(filteredName => (
    filteredName
));

  console.log(updateNames)