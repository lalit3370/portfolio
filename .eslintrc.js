module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "eol-last": 2,
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "jsx-a11y/anchor-is-valid": 0,
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: "Unexpected property on console object was called",
      },
    ],
    'max-len': [
			'error',
			{
				code: 120,
				ignoreUrls: true,
				ignoreRegExpLiterals: true,
				ignoreComments: true
			}
		]
  },
  ignorePatterns: ["dist/", "public/"],
};
