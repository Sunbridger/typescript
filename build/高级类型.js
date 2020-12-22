"use strict";
var newAll = {
    name: '',
    age: 1,
    occupation: '',
    role: 'string'
};
var persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' }
];
// 类型收缩
function isAdmin(person) {
    return person.type === 'admin';
}
function isUser(person) {
    return person.type === 'user';
}
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - " + person.name + ", " + person.age + ", " + additionalInformation);
}
