var $ = require('jquery');
// var Person = require('./modules/Person');
import Person from './modules/Person';


class Adult extends Person {
    payTaxes() {
        console.log(this.name)
    }
}

var lucio = new Person("Lucio Correia Santos","Yellow and Green")
lucio.greet();

