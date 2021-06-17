function hollowSquarePattern(n){
    for(var i = 0; i < n; i++){
        for(var k = 0; k < n; k++){
            if( i == 0  || i == n-1 || k == 0 || k == n-1) document.write("*");
            else document.write("&nbsp;&nbsp;");
        }
        document.write("<br>");
    }
}

hollowSquarePattern(5);