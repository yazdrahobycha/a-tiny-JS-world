import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details

   Code repository: https://github.com/yazdrahobycha/a-tiny-JS-world
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
const dog = {
    species: 'dog',
    name: 'Sharik',
    gender: 'male',
    hands: 0,
    legs: 4,
    saying: 'GAV!!!',
    friends: ['Vova'],
};

const cat = {
    species: 'cat',
    name: 'Dina',
    gender: 'female',
    hands: 0,
    legs: 4,
    saying: 'Miau!',
    friends: ['Sasha', 'Liza'],
};

const woman = {
    species: 'human',
    name: 'Sasha',
    gender: 'female',
    hands: 2,
    legs: 2,
    saying: 'Iu!',
    friends: ['Dina', 'Liza'],
};

const man = {
    species: 'human',
    name: 'Vova',
    gender: 'male',
    hands: 2,
    legs: 2,
    saying: 'Based!',
    friends: ['Sharik', 'Liza'],
};

const cat_Woman = {
    species: 'cat-human',
    name: 'Liza',
    gender: 'female',
    hands: 2,
    legs: 2,
    saying: cat.saying,
    friends: ['Dina', 'Vova', 'Liza'],
};
// ======== OUTPUT ========
const inhabitants = [dog, cat, woman, man, cat_Woman];
const properties = [
    'species',
    'name',
    'gender',
    'hands',
    'legs',
    'saying',
    'friends',
];
inhabitants.forEach((obj) =>
    print(
        `<i>${properties
            .map((prop) =>
                !Array.isArray(obj[prop]) ? obj[prop] : obj[prop].join(', ')
            )
            .join('; ')}</i>`
    )
);
