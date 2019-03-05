module.exports = function(wallaby) {
	return {
		files: [
			{ pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false },
			'js/**/*.js',
			'jest.config.js',
		],
		tests: ['test/**/*.test.js'],
		env: {
			type: 'node',
			runner: 'node',
		},
		testFramework: 'jest',
		compilers: {
			'**/*.js': wallaby.compilers.babel()
		},
		setup: function(wallaby) {
			var jestConfig = require('./jest.config').jest;
			wallaby.testFramework.configure(jestConfig);
		},
		debug: true,
	};
};
