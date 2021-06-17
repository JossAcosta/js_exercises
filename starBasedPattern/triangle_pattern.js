function trianglePattern(n){
    for (var i = 0; i<=n; i++) {
        for (var j=n-1; j>=i; j--) {
            document.write("*");
        }
        document.write("<br>");
    }
}

console.log(trianglePattern(5));



function rightTriangle(n) {
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j <= n; j++) {
        if(j>=i) document.write('*');
        else document.write('&nbsp&nbsp');
        }
        document.write('<br>');
    }
}


rightTriangle(5);