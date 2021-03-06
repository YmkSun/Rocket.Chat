Package.describe({
	name: 'mizzao:autocomplete',
	summary: 'Client/server autocompletion designed for Meteor\'s collections and reactivity',
	version: '0.5.1',
	git: 'https://github.com/mizzao/meteor-autocomplete.git'
});

Package.onUse(function(api) {
	api.use(['blaze', 'templating', 'jquery'], 'client');
	api.use(['underscore', 'ecmascript']); // both
	api.use(['mongo', 'ddp']);

	api.use('dandv:caret-position@2.1.0-3', 'client');

	// Our files
	api.addFiles([
		'client/autocomplete.css',
		'client/inputs.html',
		'client/autocomplete-client.js',
		'client/templates.js'
	], 'client');

	api.addFiles([
		'server/autocomplete-server.js'
	], 'server');

	api.export('Autocomplete', 'server');
	api.export('AutocompleteTest', {testOnly: true});
});

Package.onTest(function(api) {
	api.use('mizzao:autocomplete');

	api.use('mongo');
	api.use('tinytest');

	api.addFiles('tests/rule_tests.coffee', 'client');
	api.addFiles('tests/regex_tests.coffee', 'client');
	api.addFiles('tests/param_tests.coffee', 'client');
	api.addFiles('tests/security_tests.coffee');
});
