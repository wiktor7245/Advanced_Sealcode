console.log("start");
const anArray = new Array(-1); //range error
anArray.push("0");
console.log(anArray);

const width = 12;
console.log(width * height); //reference error

let list = ['element 1', 'Element 2' //syntax error
'Element 3'];
console.log(list[0].upperCase());// Type Error

width.toFixed(30);

const user = {
    first name: "Bartek", //syntax error - firstName
    lastName: "Nowak",
    age: 25
}
console.log(user.age.tostring()); //Type Error
