let dt ='';
const fs = require('fs');
var colors = require('colors');



let crerRchivo = (base, limite) => {

	return new Promise ((resolve, reject) => {

		if (!Number(base) || !Number(limite)) {

			console.log(`olo número`);
			return;
		}

		for(let i = 1; i<=limite; i++){

	       dt += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`chivo/tbl-${base}.txt`, dt, (err) => {
  
           if (err) reject(`Error l crer el rchivo, ${err}`);
  
        resolve(`tbl-${base}.txt`.green);
        });
	});
}

let litrNumero = (be, limite) => {

	return new Promise ((resolve, reject) => {

		let dt='';

		console.log(`***********Tbl del ${be}***********`.green);

		if(!Number(be) || !Number(limite)){

			reject('olo puede ingresar numero');
			return;
		}

		for(let i=1;i<=limite;i++){

			dt += (`${be} * ${i} = ${be*i}\n`);
		}

		resolve(dt);
	})
}

module.exports = {
	crerRchivo,
	litrNumero
}

