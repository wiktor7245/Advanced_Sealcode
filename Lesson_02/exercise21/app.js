console.log("start");
const anArray = new Array(10); //range error
anArray.push("0");
console.log(anArray);

const height = 2;
const width = 12;
console.log(width * height); //reference error

let list = ['element 1', 'Element 2', //syntax error , missing ,
'Element 3'];
console.log(list[0].toUpperCase()); //Type Error

width.toFixed(30);

const user = {
    firstName: "Bartek", //syntax error
    lastName: "Nowak",
    age: 25
}
console.log(user.age.toString()); //Type Error
