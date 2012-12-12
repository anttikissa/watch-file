var fs = require('fs');

var args = process.argv.splice(2)

args.forEach(function(file) {
	console.log(file);
	fs.watch(file, function(event, filename) {
		process.exit(0);
	});
});

