const opt ={
	be: {
		demand: true,
		alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}
}


const argv = require('yargs')
.command('litr', 'imprime en conol l tbl de multiplicr',opt)
.command('crer', 'Cre el rchivo de l tbl de multiplicr',opt)
.help()
.argv;

module.exports = {
	argv
}
