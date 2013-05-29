define( [ "underscore" ], function ( _ ) {
	var data = [
		{ id: 1, title: "Test" },
		{ id: 2, title: "Test" },
		{ id: 3, title: "Test" }
	];

	return {
		run: function () {
			return _.map( data, function ( item ) {
				return [ item.id, item.title ].join( "---" );
			});
		}
	}
});