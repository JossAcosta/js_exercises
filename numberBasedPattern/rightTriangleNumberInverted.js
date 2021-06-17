function rightTriangle(n){
    var count = 0;
    for(var i = n; i > 0; i--){
        count +=i;
    }
    for(var i = 0; i < n; i++){
        for(var j = n; j > i; j--) {
            document.write(count);
            count--;
        }
        document.write("<br>");
    }

}

rightTriangle(4);