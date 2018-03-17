class Osoba{
    constructor(imie,nazwisko,rokUrodzenia,plec){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.rokUrodzenia = rokUrodzenia;
        this.plec = plec;
    }

    podajWiek(){
        let d = new Date;
        return d.getFullYear() - this.rokUrodzenia;
    }
}

/*var a = new Osoba('Andrzej', 'Nowak', 1996 , 'm');
console.log(a);
console.log(`Wiek ${a.imie}: ${a.podajWiek()}`);*/

class Nauczyciel extends Osoba{
    constructor(imie,nazwisko,rokUrodzenia,plec,nauczanyPzedmiot,rokRozpoczeciaPracy){
        super(imie,nazwisko,rokUrodzenia,plec);
        this.nauczanyPzedmiot = nauczanyPzedmiot;
        this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
    }

    podajIloscLatPracy(){
        let d = new Date;
        return d.getFullYear() - this.rokRozpoczeciaPracy;
    }
}

/*var b = new Nauczyciel('Ala','Kowalska',1980,'k','Przyroda',2000);
console.log(b);
console.log(`Wiek ${b.imie}: ${b.podajWiek()}`);
console.log(`Ilość lat pracy ${b.imie}: ${b.podajIloscLatPracy()}`);*/

class Wychowawca extends Nauczyciel{
    constructor(imie,nazwisko,rokUrodzenia,plec,nauczanyPzedmiot,rokRozpoczeciaPracy,przydzielonaKlasa){
        super(imie,nazwisko,rokUrodzenia,plec,nauczanyPzedmiot,rokRozpoczeciaPracy);
        this.przydzielonaKlasa = przydzielonaKlasa;
    }
}

var c = new Wychowawca('Ala','Kowalska',1980,'kobieta','Przyroda',2000,'1b');
console.log(c);
console.log(`Wiek ${c.imie}: ${c.podajWiek()}`);
console.log(`Ilość lat pracy ${c.imie}: ${c.podajIloscLatPracy()}`);