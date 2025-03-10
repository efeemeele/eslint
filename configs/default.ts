export default {
  settings: {
    'import/internal-regex': '(react|^@nestjs|^~)'
  },
  plugins: ['prettier', 'eslint-plugin-unused-imports'],
  extends: ['plugin:prettier/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: { modules: true, jsx: true }
  },
  rules: {
    'no-restricted-globals': ['error'],
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['block-like', 'function'], next: '*' },
      { blankLine: 'always', prev: ['*'], next: ['block-like', 'function'] },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'any', prev: ['export', 'import'], next: ['export', 'import'] },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['export'] }
    ],
    'linebreak-style': ['error', 'unix'],
    'max-lines': ['error', 300],
    'max-len': ['off'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-trailing-spaces': ['error'],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-extra-semi': ['error'],
    'no-var': ['error'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'eqeqeq': 0,
    'quote-props': 'off',
    'no-useless-escape': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'import/no-deprecated': 'off',
    'import/no-unused-modules': 'off',
    'import/newline-after-import': 'error',
    'import/first': 'error',
    'import/order': [
      'error',
      {
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'groups': ['builtin', ['external', 'internal'], ['parent', 'sibling', 'index'], 'object'],
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': ['react', 'antd'],
        'pathGroups': [
          { pattern: 'react**', group: 'builtin', position: 'before' },
          { pattern: 'antd', group: 'builtin' },
          { pattern: 'antd/**', group: 'builtin' },
          { pattern: '@ant-design/**', group: 'builtin' },
          { pattern: '~/**', group: 'internal', position: 'after' },
          { pattern: '@/**', group: 'internal', position: 'after' }
        ]
      }
    ]
  }
};
