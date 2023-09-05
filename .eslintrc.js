module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': [
		'google',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended' ],
	'overrides': [
		{
			'env': {
				'node': true,
			},
			'files': [
				'.eslintrc.{js,cjs}',
			],
			'parserOptions': {
				'sourceType': 'script',
			},
		},
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'plugins': [
		'react',
	],
	'rules': {
		'no-console': 'off',
		'max-len': 'off',
		'space-in-parens': [
			'error',
			'always',
		],
		'array-bracket-spacing': [
			'error',
			'always',
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'no-tabs': 0,
		'indent': [
			'error',
			'tab',
		],
		'require-jsdoc': [
			'error',
			{
				'require': {
					'FunctionDeclaration': false,
					'MethodDefinition': false,
					'ClassDeclaration': false,
					'ArrowFunctionExpression': false,
					'FunctionExpression': false,
				},
			},
		],
		'react/prop-types': 'off',
		'operator-linebreak': 'off',
	},
};
