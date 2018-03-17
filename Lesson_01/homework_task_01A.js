function Osoba(imie,nazwisko,rokUrodzenia,plec){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.rokUrodzenia = rokUrodzenia;
    this.plec = plec;

}

Osoba.prototype.podajWiek = function(){
    let d = new Date;
    return d.getFullYear() - this.rokUrodzenia;
}
 
function Nauczyciel(imie,nazwisko,rokUrodzenia,plec,nauczanyPzedmiot,rokRozpoczeciaPracy){
    Osoba.call(this,imie,nazwisko,rokUrodzenia,plec);
    this.nauczanyPzedmiot = nauczanyPzedmiot;
    this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
}

Nauczyciel.prototype = Object.create(Osoba.prototype);
Nauczyciel.prototype.constructor = Nauczyciel;
Nauczyciel.prototype.podajIloscLatPracy = function(){
    let d = new Date;
    return d.getFullYear() - this.rokRozpoczeciaPracy;
}

var b = new Nauczyciel('Ala','Kowalska',1980,'k','Przyroda',2000);
console.log(b);
console.log(`Wiek ${b.imie}: ${b.podajWiek()}`);
console.log(`Ilość lat pracy ${b.imie}: ${b.podajIloscLatPracy()}`);


function Wychowawca(imie,nazwisko,rokUrodzenia,plec,nauczanyPzedmiot,rokRozpoczeciaPracy,przydzielonaKlasa){
    Nauczyciel.call(this,imie,nazwisko,rokUrodzenia,plec,nauczanyPzedmiot,rokRozpoczeciaPracy);
    this.przydzielonaKlasa = przydzielonaKlasa;
}

Wychowawca.prototype = Object.create(Nauczyciel.prototype);
Wychowawca.prototype.constructor = Wychowawca;

var c = new Wychowawca('Ala','Kowalska',1980,'kobieta','Przyroda',2000,'1b');
console.log(c);
console.log(`Wiek ${c.imie}: ${c.podajWiek()}`);
console.log(`Ilość lat pracy ${c.imie}: ${c.podajIloscLatPracy()}`);
