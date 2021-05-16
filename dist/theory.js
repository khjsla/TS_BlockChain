"use strict";
//console.log("hello"); //tsc (command)-> index.js.map 생성해줌
Object.defineProperty(exports, "__esModule", { value: true });
// const name = "khj",
// age= 25,
// gender = "male";
// interface Human {
//      name: string,
//      age: number,
//      gender: string
// }
//NOT interface BUT Class and constructor
class Human {
    constructor(name, age, gender) {
        this.name = name; //생성자의 name 이 위의 name 과 같다는 것
        this.age = age;
        this.gender = gender;
    }
}
// const person = {
//      name: "khj",
//      gender: "male",
//      age: 22 
// }
//NOT interface BUT Class and constructor example
const kjg = new Human("kjg", 10, "male");
// const sayhi = (name: String, age: number, gender: String): String=>{ // :type possible 
//      return `Hello ${name}, u r ${age}, u r a${gender}!!!!`;
// }
//how to send Object?!
const sayhi = (person) => {
    return `Hello ${person.name}, u r ${person.age}, u r a${person.gender}!!!!`;
};
//sayhi("khj",22,"male"); //ts have to have all 3 argus
//console.log(sayhi("khj",22,"male")); //can see now
//how to send Object?! -- interface
//console.log(sayhi(person)); //can see now
//NOT interface BUT Class and constructor
console.log(sayhi(kjg)); //can see now
//# sourceMappingURL=theory.js.map