function main() {
    const x = "Hello world!";
    try {
        const result = run(x); // uzycie nie zdefiniowanej funkcji
    } catch(e) {
        console.log(`${e.name}: ${e.message}`); // wyswietlamy info o bledzie
    }
    if(typeof(x) == 'string'){ 
        try {
            throw { 
                number: 200,
                message: "x jest typu string!" 
            }; 
        } catch(e) {
            // wyswietlamy info o bledzie
            console.log(`kod: ${e.number}, info: ${e.message}`);
        }
    }
        console.log(x.lowerCase()); // uzycie nie zdefiniowanej funkcji
}

window.onerror = function (msg, url, line) {
    console.log("komunikat bledu : " + msg );
    console.log("url : " + url );
    console.log("numer linii : " + line );
 }
window.onload = main;
//main();