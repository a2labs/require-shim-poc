var requirejs = require( "requirejs" );

requirejs.config({
	paths: {
		"underscore": "lib/underscore"
	},
	shim: {
		underscore: {
			exports: "_"
		},
		"to-be-shimmed": {
			deps: [ "underscore" ],
			exports: "TheGlobal"
		}
	},
    nodeRequire: require
});

requirejs( [ "sample", "to-be-shimmed" ], function ( sample, shimSample ) {
	// Expected output: 
	// [ '1---Test', '2---Test', '3---Test' ]
	console.log( sample.run() );
	
	// Expected output: 
	// [ [ 'test', true ], [ 'label', 'The Global Shim' ] ]
	console.log( shimSample.run() );
});