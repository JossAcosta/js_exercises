function rowsCols(r,c) {
 for(var i = 0; i < r; i++){
     for(var j = 0; j < c; j++){
        document.write("*");
     }
     document.write("<br>");
 }
}

rowsCols(5,6);