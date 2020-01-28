var assert = require('assert')

var media = function(a,b,c){

    let media = (a+b+c)/3

    return media
}

try {

    assert.equal(7, media(7,7,7));
    assert.equal(6, media(6,6,6));


} catch(e) {
    console.log(e);
}