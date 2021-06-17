function squarePattern(n){
    for( var i=0; i<n; i++ ){
        for( var j=0; j<n; j++ ){
            document.write("* ");
        }
        document.write("<br>");
    }
}

squarePattern(5);