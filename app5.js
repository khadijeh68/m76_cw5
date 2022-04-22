// create a function count(obj) that returns the number of properties in the object
let user = {
    name: "Mike",
    friend: ["John", "Paul", "Jimmy"],
    families: [
    { name: "David", age: 20 },
    { name: "Ava", age: 25 },
    ],
    location: {
    region: "England",
    country: "United Kingdom",
    },
    aboutMe: {
    status: "Single",
    pet: "Dog",
    },
};
// function count(obj){
//     let count = 0;
//     for(let i in obj){
//         count++;
//     }
//     console.log(count);
// }
// count(user);

let obj2 = Object.keys(user);
console.log(obj2);