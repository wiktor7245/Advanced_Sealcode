for (var i = 0; i < 5; i++) {
    /*setTimeout(function() {
        console.log(i);
    }, 100);*/
    (function (i) {
      setTimeout(function() {
          console.log(i);
      }, 100);
    })(i);
}


for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}
