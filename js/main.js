requirejs.config({
	baseUrl: "js",
	paths: {
		"underscore": "lib/underscore"
	},
	shim: {
		underscore: {
			exports: "_"
		}
	}
});