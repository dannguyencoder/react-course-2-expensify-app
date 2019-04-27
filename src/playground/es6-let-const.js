var nameVar = 'Vinh';
var nameVar = 'Quang';
console.log('nameVar', nameVar);

let nameLet = 'Nguyen';
nameLet = 'Daniel';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Daniel Vinh';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);