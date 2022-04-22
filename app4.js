// Make list of users
// Any user has a list of phones
// Any user has a list of address
// Try to deep copy list of users

const users = [ {name:'ali' , addresses:['edatalat'] , phones:[09019856491]} ,
 {name:'reza' , addresses:['taleghani'] , phones:[0911111111]}];

let obj = JSON.parse(JSON.stringify(users));
obj[1].name='saeed';

console.log(users);
console.log(obj);

