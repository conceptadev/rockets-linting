# @concepta/prettier-config

Rockets Prettier opinions

## Installation

You'll first need to install [Prettier](https://prettier.io/):

```sh
npm i prettier --save-dev
```

Next, install `@concepta/prettier-config`:

```sh
npm install @concepta/prettier-config --save-dev
```

## Usage

Add this to your `.prettierrc.js` configuration file:

### Node
```js
module.exports = {
  ...require('@concepta/prettier-config/node'),
};
```

### React
```js
module.exports = {
  ...require('@concepta/prettier-config/react'),
};
```
