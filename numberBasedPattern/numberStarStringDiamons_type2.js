function numberStarDiamond(n){
    for(var i = 0; i<n; i++){
        if(i<=(n/2)){
            for(var j = 0; j<=i; j++){
                if(j!=0){
                    document.write("*" + (i+2));
                }else{
                    document.write(i+2);
                }
            }
        }else{
            for(var j = i; j<n; j++){
                if(j!=i){
                    document.write("*"+(n-i+1));
                }else{
                    document.write(n-i+1);
                }
            }
        }
        document.write("<br>");
    }
}

numberStarDiamond(5);