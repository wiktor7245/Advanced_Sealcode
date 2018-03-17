class Figura{
    constructor(name){
        this.name = name;
    }
}

class Czworokat extends Figura{
    constructor(name,typ,dl){
        super(name);
        this.typ = typ;
        this.dl = dl;
    }
}

class Prostokat extends Czworokat{
    constructor(name,dl){
        super(name,'Prostokat',dl);
    }
    podajPole(){
        if( this.dl.length == 2 ){
            return this.dl[0] * this.dl[1];
        }
    }
    podajObwod(){
        if( this.dl.length == 2){
            return ( (2*this.dl[0]) + (2*this.dl[1]) )
        }
    }
}
var first = new Prostokat('Andrzej',[5,8]);
console.log(first);
console.log("Pole " + first.podajPole());
console.log("Obwod " + first.podajObwod());