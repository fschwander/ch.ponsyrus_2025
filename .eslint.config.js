import eslintConfigPrettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  {
    name: 'react-config',
    files: ['**/*.{ts,tsx}'],
    ...react.configs.flat.recommended,
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off',
    },
  },
  reactHooks.configs['recommended-latest'],
  eslintConfigPrettier,
]
