//console.log("hello"); //tsc (command)-> index.js.map 생성해줌

// const name = "khj",
// age= 25,
// gender = "male";
interface Human {
     name: string,
     age: number,
     gender: string
}

const person = {
     name: "khj",
     gender: "male",
     age: 22
}

// const sayhi = (name: String, age: number, gender: String): String=>{ // :type possible 
//      return `Hello ${name}, u r ${age}, u r a${gender}!!!!`;
// }

//how to send Object?!
const sayhi = (person: Human) =>{ // :type possible 
     return `Hello ${person.name}, u r ${person.age}, u r a${person.gender}!!!!`;
}

//sayhi("khj",22,"male"); //ts have to have all 3 argus
//console.log(sayhi("khj",22,"male")); //can see now

//how to send Object?!
console.log(sayhi(person)); //can see now

export {};