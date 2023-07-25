const user = {
  id: 444,
  name: "Hridoy",
  age: 23,
  education: {
    degree: "masters",
  },
};
// rename
const { name: Title } = user;
console.log(Title);

const {
  education: { degree: rename },
} = user;
console.log(rename);
