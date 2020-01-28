var assert = require('assert')

var antecessor = function(a){

    return a - 1;
}

var sucessor = function(a){

    return a + 1;
}

try {

    assert.equal(1, antecessor(2));
    assert.equal(3, sucessor(2));


} catch(e) {
    console.log(e);
}