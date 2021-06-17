function rhombusStarPattern(n){
    for(var i = 0; i < n; i++){
        for(var j = 0; j < i; j++){
            document.write("&nbsp;");
        }
        for(var k = 0; k < n; k++){
            document.write("*");
        }
        document.write('<br>');
    }
}

rhombusStarPattern(5);