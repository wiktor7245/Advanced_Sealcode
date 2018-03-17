function pole(kat,r,pi = getDefault()){
    return (kat/360)*pi*(r*r);
}

function getDefault(){
    return Math.PI;
}

console.log(pole(30,5,3.14));
console.log(pole(30,5,22/7));
console.log(pole(30,5));