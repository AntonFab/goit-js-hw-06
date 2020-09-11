// Write code under this line
const users = [
  { id: "000", name: "Mango", isActive: true },
  { id: "001", name: "Poly", isActive: false },
  { id: "002", name: "Ajax", isActive: true },
  { id: "003", name: "Chelsey", isActive: false },
];

const getUserNames = (array) => array.map(({ name }) => name);

console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
