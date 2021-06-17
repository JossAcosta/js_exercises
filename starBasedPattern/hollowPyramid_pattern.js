function hollowPyramid(n){
    for(var i = 0; i < n; i++) {
        for(var j = n; j >= i+1; j--) {
            document.write("&nbsp&nbsp");
        }
        for(var k = 0; k <= i*2; k++) {
            if(i == n-1) {
                document.write("*");
            }else{
                if(k== 0 || k >= i * 2){
                    document.write("*");
                }else{
                    document.write("&nbsp&nbsp");
                }
            }
        }
        document.write("<br>");
    }
}

hollowPyramid(5);