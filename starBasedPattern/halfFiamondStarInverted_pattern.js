function halfDiamondInverted(n){
    for(var i = 0; i < n; i++){
        if(i<=(n/2)){
            for(var k = (n/2); k>i; k--){
                document.write('&nbsp&nbsp')
            }
            for(var j = 0; j <= i; j++){
                document.write("*")
            }
        }else{
            for(var l = (n/2); l <= i; l++){
                document.write('&nbsp&nbsp')
            }
            for(var m = i; m < n; m++){
                document.write("*")
            }
        }
        document.write("<br>");
    }
}

halfDiamondInverted(7);