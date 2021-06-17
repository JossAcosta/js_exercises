function addBinary(a,b) {
    const BASE = 2;
    var binary  =  '';
    var sum  =  a + b;
    var added = a+b;

    while ( sum > 0 ) {
        binary = ( sum % BASE ) + binary;
        sum = Math.floor( sum / BASE );
    }
    // return binary; 
    return added.toString(2)
}

    console.log(addBinary(1,1));
    console.log(addBinary(2,1));
    console.log(addBinary(20,10));