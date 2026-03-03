function checkDrivers(people) {
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.age >= 20 && person.hasLicense === true) {
      console.log(person.name + ' can be the driver');
    } else {
      console.log(person.name + ' cannot be the driver');
    }
  }
}
//Names ,ages and licence status
const people = [
  { name: 'Bob', age: 25, hasLicense: true },
  { name: 'Mary', age: 18, hasLicense: true },
  { name: 'Sam', age: 22, hasLicense: false }
];
checkDrivers(people);