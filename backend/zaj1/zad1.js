//dopisać obsługę błędu związanego z argumentami i ogarnąc to dopisywanie po określonym czasien

var fs = require('fs');
var counter = process.argv[2];
var doc = process.argv[3];


//append dodaje cos do pliku, a w przypadku, gdy nie istnieje, tworzy go
fs.appendFile(doc, 'Hello content!\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });