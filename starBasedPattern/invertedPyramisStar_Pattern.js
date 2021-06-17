function invertedPyramisStarPattern(n){
    for(var i = n; i >0; i--){
        for( var k=n; k>i; k--){
            document.write("&nbsp;&nbsp;");
        }
        for(var j = 0; j < i*2-1; j++){
            document.write("*");
        }
        document.write('<br>'); 
    }
}

invertedPyramisStarPattern(7);