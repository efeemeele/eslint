module.exports = {
  settings: {
    react: { version: 'detect' }
  },
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended'],
  rules: {
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react/style-prop-object': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
};
