function invertedRightTriangle(n){
    count = 1;
    for (var i = 0; i < n; i++){
        if(i<n/2){
            count1=count+1;
            for (var j =0;j<=i;j++){
                count++;
                document.write(count);
            }
            document.write("<br>");
        }else {
            count=count1;
            for (var j =0; j<n-i;j++) {
                document.write(count);
                count++;
            }
            count1=count1 - (n-i) +1;
            document.write("<br>");
        }
    }

}

invertedRightTriangle(8);