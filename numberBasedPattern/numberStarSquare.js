function numberStarSquare(n){
    count=0;
    for(var i = 0; i<n; i++){
        for(var j = 0; j<n; j++){
            count++;
            if(j==n-1){
                document.write(count);
            }else{
                document.write(count + "*");
            }
        }
        document.write("<br>");
    }
}

numberStarSquare(4);