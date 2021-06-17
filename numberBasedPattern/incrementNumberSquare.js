function incrementNumberSquare(n){
    for(var i = 1; i <= n; i++){
        for(var j = 0; j < n; j++){
            document.write(i);
        }
        document.write('<br>');
    }
}

incrementNumberSquare(4);