function diamondStarPattern(n){
    for(var i = 0; i<n; i++){
        if(i<= n/2){
            for(var k = n/2; k>i; k--){
                document.write("&nbsp;&nbsp;");
            }
            for(var j = 0; j<=i*2; j++){
                document.write("*");
            }
        }else{
            for(var k = n/2; k<i; k++){
                document.write("&nbsp;&nbsp;");
            }
            for(var j = 0; j<((n-i)*2)-1; j++){
                document.write("*");
            }
        }
        document.write("<br>;");
    }
}

diamondStarPattern(7);