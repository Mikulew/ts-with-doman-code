"use strict";
var user = {};
user.age = 31;
// user.name.firstName = "Mikołaj";
// user.name.lastName = "Lewandowski";
function showUserInfo(user) {
    var age = user.age, _a = user.name, firstName = _a.firstName, lastName = _a.lastName;
    return firstName + " " + lastName + " has " + age + " years old.";
}
console.log(showUserInfo(user));
