var requirejs = require( "requirejs" );

requirejs.config({
	paths: {
		"underscore": "lib/underscore"
	},
	shim: {
		underscore: {
			exports: "_"
		}
	},
    nodeRequire: require
});

requirejs( [ "sample" ], function ( sample ) {
	// Expected output: 
	// [ '1---Test', '2---Test', '3---Test' ]
	console.log( sample.run() );
});