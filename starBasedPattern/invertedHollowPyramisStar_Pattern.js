function invertedPyramid(r){
    for(var i=r; i>0; i--){
        for( var k=r; k>i; k--){
            document.write("&nbsp;&nbsp;");
        }
        for(var j=0; j<i*2-1; j++){
            if(i==r){
                document.write("*");
            } else {
                if(j==0 || j==i*2-2){
                    document.write("*");
                }else{
                    document.write("&nbsp;&nbsp;");
                }
            }
        }
        document.write('<br>');    }
}

(invertedPyramid(4));