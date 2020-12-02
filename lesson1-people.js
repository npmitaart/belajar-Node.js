const people = ['Giodio', 'Nathanael', 'Pratama', 'Mitaart'];
const ages = [20, 12, 22, 43];

console.log(people);

// connect ke variabel callPeople in module.js
// module.exports = people;

// create more than 1 variable
module.exports = {
    people,
    ages
};