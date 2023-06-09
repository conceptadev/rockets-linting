# @concepta/eslint-config

Rockets ESLint Node.JS configuration opinions

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@concepta/eslint-config`:

```sh
npm install @concepta/eslint-config --save-dev
```

## Usage

Add `@concepta/eslint-config` to the extends section of your `.eslintrc` configuration file.

### Node
```json
{
    "extends": [
        "@concepta/eslint-config/node"
    ]
}
```

### Nest

> Requires that you install the optional dependency: `@darraghor/eslint-plugin-nestjs-typed`

```json
{
    "extends": [
        "@concepta/eslint-config/nest"
    ]
}
```

### React
```json
{
    "extends": [
        "@concepta/eslint-config/react"
    ]
}
```


