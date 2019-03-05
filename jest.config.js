module.exports = {
	transform: {
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
		'.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
		'^.+\\.html?$': 'html-loader-jest',
	},
	moduleNameMapper: {
		'^vue$': 'vue/dist/vue.common.js',
	},
	moduleFileExtensions: ['js', 'vue'],
};
