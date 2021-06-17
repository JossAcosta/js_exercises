function basicTriangle(r){
    for ( var i = 0; i<= r; i++ ){
        for ( var j = 0; j <= i; j++ ){
            document.write("*")
        }
        document.write("<br>");
    }
}

basicTriangle(5);

function basicTriangle_(r){
    for ( var i = 0; i<= r; i++ ){
        for ( var j = 0; j <= r; j++ ){
            if(j>=i) document.write("*");
            else document.write("&nbsp&nbsp");
        }
        document.write("<br>");
    }
}

basicTriangle_(5);

function pyramid(n){
    for(var i = 1; i<=n; i++){
        for (let k = 0; k <= n - i; k++) {
            document.write("&nbsp&nbsp")
        }
        for(var j =1; j<=i; j++){
            document.write("*")
        }
        document.write("<br>");
    }
}

pyramid(6);