//
// Object destructuring
//


// const person = {
//     name: 'Vinh',
//     age: 24,
//     location: {
//         city: 'Hanoi',
//         temp: 88
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Publish' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Publish

//
// Array destructuring
//

const address = ['1299 Hanoi', 'HCM', 'Ba Dinh', '1321'];
const [, city, state = 'Hanoi'] = address;
console.log(`You are in ${city} ${state}.`);

const  item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, ,mediumPrice] = item;
// grab first and third items using array destructuring
console.log(`A ${itemName} costs ${mediumPrice}`);