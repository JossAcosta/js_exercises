function  numberStarRightdiamond(n){
    var count = 1;

    for(var i = 1; i<=n;i++){
        if(i<=n/2){
            for(var j =1; j<=i; j++){
                if(j != 1){
                    document.write("*"+count);
                }else{
                    document.write(count);
                }
            }
            count++;
            document.write("<br>");
        }else{
            count--;
            for(var j = 0; j<n-i+1;j++){
                if(j!=0){
                    document.write("*"+count);
                }else{
                    document.write(count);
                }
            }
            document.write("</br>");
        }
    }
}

numberStarRightdiamond(8);