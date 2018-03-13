function Figura(nazwa){
   this.nazwa = nazwa;
  // this.typ = typ;
//   this.boki = boki;
}

function Czworokat(nazwa,typ_czworokata, dlugosc_bokow){
  Figura.call(this,nazwa);
  this.typ_czworokata = typ_czworokata;
  this.dlugosc_bokow = dlugosc_bokow;
}

Czworokat.prototype = Object.create(Figura.prototype);
Czworokat.prototype.constructor = Czworokat;

function Prostokat(nazwa,typ_czworokata, dlugosc_bokow){
  Figura.call(this,nazwa,"Prostokat", dlugosc_bokow);
}

Prostokat.prototype = Object.create(Czworokat.prototype);
Prostokat.prototype.constructor = Prostokat;

Prostokat.prototype.podajPole = function (){
  if( this.dlugosc_bokow.length == 2 ){
      return this.dlugosc_bokow[0] * this.dlugosc_bokow[1];
  }
}

Prostokat.prototype.podajObwod = function (){
  if( this.dlugosc_bokow.length == 2){
    return ( (2*this.dlugosc_bokow[0]) + (2*this.dlugosc_bokow[1]) )
}
}



var first = new Prostokat('xd', [1,2,1,2] );
console.log(first);
console.log(first.podajObwod());

//var first = new Prostokat(1,2);

//var prostokat = new Prostokat("";)

// https://github.com/robgor3/Sealcode_workshops_advanced/blob/master/Zadania_na_zajeciach/Zajecia_1/exercise_151.js
