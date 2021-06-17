function numberStarSquare(n){
    var count = 0;
    for(var i = 0; i<n; i++){
        if(i==1){
            count+=1;
        }
        if(i==n-1){
            count = 1;
        }
        for(var j = 0; j<n; j++){
            count++;
            if(j==n-1){
                document.write(count);
            }else{
                document.write(count+"*");
            }
        }
        document.write("<br>");
    }
}

numberStarSquare(4);