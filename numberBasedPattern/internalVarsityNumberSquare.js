function interalSquare(n){
    for(var i=0; i<n; i++){
        if(i == 0 || i == n-1){
            for(var j=0; j<3; j++){
                document.write("3");
            }
        }else{
            for(var j=0; j<3; j++){
                if(j == 0 || j == 2) document.write("3");
                else document.write(i);
            }
        }
        document.write("<br>");
    }
}

interalSquare(4);