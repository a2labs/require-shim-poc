this.TheGlobal = (function () {
	return {
		run: function () {
			return _.map( { test: true, label: "The Global Shim" }, function ( value, key ) {
				return [ key, value ];
			});
		}
	};
}());