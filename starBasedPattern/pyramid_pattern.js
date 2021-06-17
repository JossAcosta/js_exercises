function pyramid(n){
    for(var i = 0; i < n; i++){
        for(var j = n; j > i+1; j--){
            document.write("&nbsp");
        }
        for(var k = 0; k <= i*2; k++){
            document.write("*");
        }
        document.write("<br>");
    }
}

pyramid(4);