const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
let alex = employees[1].name
let alexHobbies = employees[1].hobbies
let alexAndJamesAge = employees[0].age + employees[1].age ;
console.log (alex,alexHobbies,alexAndJamesAge)

alexHobbies.push("Watching basketball");
console.log (employees)
employees[2] = {name:"Alicia",age:29,hobbies:["Shopping", "Reading novels"]};
employees[3] = {name:"Kody",age:19,hobbies:["Computer games","Wakeboard"]};

console.log (employees)