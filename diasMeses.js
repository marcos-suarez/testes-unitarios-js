var assert = require('assert')

var totalDias = function(a){

    return a*30;
}

try {

    assert.equal(90, totalDias(3),"Deve retornar o total de dias");
    assert.equal(60, totalDias(2));

} catch(e) {
    console.log(e);
}