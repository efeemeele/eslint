# ESLint Config

Configuração padrão do eslint para os projetos.

## Instalação

### Javascript / Typescript / Node

```sh
yarn add --dev efeemeele-eslint-config eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-eslint-plugin eslint-plugin-import eslint-plugin-prettier eslint-plugin-unused-imports prettier
```

```js
// .eslintrc
{
  "extends": ["efeemeele-eslint-config"]
}

// .prettierrc.js
module.exports = {
  ...require('efeemeele-eslint-config/.prettierrc')
};
```

### React

```sh
yarn add --dev efeemeele-eslint-config eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-eslint-plugin eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports prettier
```

```js
// .eslintrc
{
  "extends": ["efeemeele-eslint-config/react"]
}

// .prettierrc.js
module.exports = {
  ...require('efeemeele-eslint-config/.prettierrc')
};
```

## Configurações Extras

### VSCode

- Crie/Adicione no .vscode/settings.json (não na suas configurações, pois assim ficará no projeto e o time já terá acesso):

```json
{
  "editor.codeActionsOnSave": {
    "source.organizeImports": false,
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "editor.formatOnPaste": false,
  "editor.formatOnSave": false,
  "editor.formatOnType": false,
  "editor.tabSize": 2
}
```