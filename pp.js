var colors = require('colors');
const argv = require('./config/yrg').argv;

const {crerRchivo, litrNumero} = require('./multiplicr/multiplicr');

let comndo = argv._[0];

switch(comndo){

	case 'litr':
	   //litrNumero(argv.be, argv.limite);
	   litrNumero(argv.be, argv.limite).then(menje => {
	   	    console.log(menje);
	   })
	   .catch(err => console.log(err));
	break;

	case 'crer':
	   crerRchivo(argv.be, argv.limite).then(rchivo => {

	        console.log(`El rchivo ${rchivo} h ido credo`);
        })
        .catch(err => console.log(err));
	break;

	default:
	   console.log('comndo no reconocido');
}

