## Typed SASS Plugin

This is a plugin for Webpack based on [Awesome Typed SASS Modules](https://github.com/dhleong/awesome-typed-sass-modules).
It creates `.d.ts` files for all `.scss` files.

You will, probably, want to add the following line to `.gitignore`:
```gitignore
*.scss.d.ts
```

### Usage
```js
// webpack.config.js
const TypedSassPlugin = require("typed-sass-plugin");
module.exports = {
  entry: //...,
  output: //...,
  plugins: [
    new TypedSassPlugin(options)
  ]
}
```

### Options
- `camelCase`: Convert CSS class tokens to camelCase. Boolean. Default: `false`
