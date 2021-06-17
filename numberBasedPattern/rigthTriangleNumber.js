function rightTriangle(n){
    var count = 0;
    for(var i = 0; i < n; i++){
        for(var j = 0; j <= i; j++) {
            count++;
            document.write(count);
        }
        document.write("<br>");
    }
}

rightTriangle(4);