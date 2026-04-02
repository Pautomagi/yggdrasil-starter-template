import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
			jsxA11y.flatConfigs.recommended,
		],
		plugins: {
			react,
			'unused-imports': unusedImports,
			import: importPlugin,
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			// --- Core quality ---
			'curly': ['error'],
			'object-shorthand': 'error',
			'no-useless-rename': 'error',

			// --- TypeScript ---
			'@typescript-eslint/naming-convention': [
				'warn',
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
			],

			// --- Unused imports ---
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],

			// --- Import ---
			'import/no-named-as-default': 'off',

			// --- React ---
			'react/button-has-type': 'error',
			'react/no-danger': 'error',
			'react/destructuring-assignment': 'error',
			'react/display-name': 'error',
			'react/hook-use-state': 'error',
			'react/jsx-boolean-value': ['error', 'always'],
			'react/jsx-curly-brace-presence': ['error', 'never'],
			'react/jsx-fragments': 'error',
			'react/jsx-key': 'error',
			'react/jsx-no-comment-textnodes': 'error',
			'react/jsx-no-constructed-context-values': 'error',
			'react/jsx-no-duplicate-props': 'error',
			'react/jsx-no-leaked-render': 'error',
			'react/jsx-no-script-url': 'error',

			// --- Accessibility — stricter than defaults ---
			'jsx-a11y/alt-text': 'error',
			'jsx-a11y/anchor-has-content': 'error',
			'jsx-a11y/anchor-is-valid': 'error',
			'jsx-a11y/click-events-have-key-events': 'error',
			'jsx-a11y/heading-has-content': 'error',
			'jsx-a11y/html-has-lang': 'error',
			'jsx-a11y/img-redundant-alt': 'error',
			'jsx-a11y/no-autofocus': 'error',
			'jsx-a11y/no-redundant-roles': 'error',
			'jsx-a11y/role-has-required-aria-props': 'error',
			'jsx-a11y/role-supports-aria-props': 'error',
		},
	},
])
