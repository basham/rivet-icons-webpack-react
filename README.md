# Rivet Icons with Webpack and React

This repo shows how to make [Rivet Icons](https://github.com/indiana-university/rivet-icons) part of a [Webpack](https://webpack.js.org/) and [React](https://reactjs.org/) project.

Goals:

1. Build a custom icon set, with select Rivet icons and custom icons.
1. Import icon dependencies with Webpack.
1. Use the `<rvt-icon>` custom element inside and outside of React.
1. Use icons without the `<rvt-icon>` custom element.

## 1. Build a custom icon set

Install `rivet-icons`.

```
npm install --save rivet-icons
```

Create a Node script to configure the icon set as desired. In this case, the only Rivet icons wanted are the arrow icons. Using a glob string (`arrow*`), all these icons can be included, without individually declaring each one. Output generated files to a `./build` folder. This async build function will automatically execute, whenever the script is called.

```js
// ./scripts/icons.js
const { buildIcons } = require('rivet-icons')

async function build () {
  await buildIcons({
    icons: ['arrow*'],
    out: 'build'
  })
}

build()
```

Add the build folder to `.gitignore`. This folder is meant for temporary files, which shouldn't be committed to the repo.

```ignore-list
# .gitignore
build
```

Install [`npm-run-all`](https://github.com/mysticatea/npm-run-all) and [`rimraf`](https://github.com/isaacs/rimraf). `npm-run-all` sequences scripts. `rimraf` recursively deletes folders.

```
npm install --save-dev npm-run-all rimraf
```

Add npm scripts to `package.json` to build the icons. The `build` script triggers the `./build` folder to be deleted, then generates the custom icon set from `./scripts/icons.js`.

```json
{
  "scripts": {
    "build": "run-s rmdir-build build-icons",
    "build-icons": "node scripts/icons.js",
    "rmdir-build": "rimraf build"
  }
}
```

Test the script.

```
npm run build
```

## 2. Set up Webpack

Install [Webpack](https://webpack.js.org/).

```
npm install --save-dev webpack webpack-cli webpack-dev-server
```

Install [Babel](https://babeljs.io/) and supplemental packages. These allow Babel to transpile the code for older browsers (`@babel/preset-env`), interpret React JSX (`@babel/preset-react`), and integrate with Webpack (`babel-loader`).

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

Configure Babel with a `.babelrc` file.

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

Configure Webpack with a `webpack.config.js` file. The entry point for the application will be `./src/index.js`, but it will be compiled to `./docs/app.js`. Any `.js` or `.jsx` files in the `./src` folder will be passed to Babel.

**Note:** An out folder other than `./docs` is likely more appropriate for a real project. The folder name is a limitation of using GitHub Pages to host the generated files. Additionally, the out folder should likely be added to `.gitignore`, to keep derived files out of the repo. It was not done in the case of this project, to make it easy to see the output, without installing the project.

```js
// webpack.config.js
const path = require('path')

const srcPath = path.resolve('./src')
const outPath = path.resolve('./docs')

module.exports = {
  entry: {
    app: path.resolve(srcPath, 'index.js')
  },
  output: {
    filename: `[name].js`,
    path: outPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: srcPath
      }
    ]
  }
}
```

Extend the npm `build` script to delete the out folder (`./docs`) before every run, and run Webpack after building the icon set.

```json
{
  "scripts": {
    "build": "run-s rmdir-build rmdir-docs build-icons build-webpack",
    "build-icons": "node scripts/icons.js",
    "build-webpack": "webpack --mode=production",
    "rmdir-build": "rimraf build",
    "rmdir-docs": "rimraf docs"
  }
}
```

Add a `start` script to run a development environment with [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/). This builds the icon set before starting the server. It doesn't delete the out folder, since it doesn't use it (unlike the `build` script).

```json
{
  "scripts": {
    "start": "run-s rmdir-build build-icons start-webpack",
    "start-webpack": "webpack serve --open --hot --mode=development"
  }
}
```

## 3. Set up React

By default, Webpack bundles all imported dependencies into a single out file. This can lead to performance problems when importing large dependencies or using dependencies that would be better shared across multiple entry points or pages. Additionally, many libraries, such as React, provide production-ready bundles that do not need further processing by the consuming application.

Extend `webpack.config.js` with an [`externals` configuration](https://webpack.js.org/configuration/externals/). The key is the name of the import. The value is the name of the [`window` global variable](https://developer.mozilla.org/en-US/docs/Web/API/Window) of that library.

```js
// webpack.config.js
{
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}
```

```js
// This:
import React from 'react'
import ReactDOM from 'react-dom'

// Is interpreted as this:
const React = window.React
const ReactDOM = window.ReactDOM
```

At this point, React could be referenced by an external provider, like [UNPKG](https://unpkg.com/). These links go to the latest production bundles that can be used in any environment (the browser or Node).

```html
<head>
  <script defer src="https://unpkg.com/react/umd/react.production.min.js"></script>
  <script defer src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
</head>
```

**Note:** These scripts are placed in `<head>` and use the [`defer` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer). This means the scripts are requested early, they don't block rendering the rest of the page, and they get processed in declaration order after the page is loaded. It behaves similar to placing the scripts at the end of `<body>`, but since the network request happens earlier, it finishes faster.

While it is fine to use external services for some cases, for production, it is likely better to directly control and provide these resources. The application should declare these dependencies in the code, so then Webpack can essentially copy-and-paste the files into the out folder.

Install React.

```
npm install --save react react-dom
```

In the entry file, import the production-ready React dependencies and add the [resource query](https://webpack.js.org/configuration/module/#ruleresourcequery) `?asset` to the end. This should be done only once in the application, and ideally as early as possible.

```js
// ./src/index.js
import 'react/umd/react.production.min.js?asset'
import 'react-dom/umd/react-dom.production.min.js?asset'
```

Resource queries provide a hook for Webpack to apply specific rules to the given import. The `?asset` query is a custom [Module Rule](https://webpack.js.org/configuration/module/#rule) that will copy the imported file to an `assets` folder in the out folder.

```js
// webpack.config.js
{
  module: {
    rules: [
      {
        resourceQuery: /asset/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[base]'
        }
      }
    ]
  }
}
```

```js
// ./src/index.js
import 'react/umd/react.production.min.js?asset'
import 'react-dom/umd/react-dom.production.min.js?asset'

// Webpack outputs:
// ./docs/assets/react.production.min.js
// ./docs/assets/react-dom.production.min.js
```

This same resource query can be used to copy other assets, such as [Rivet's `rivet-core`](https://github.com/indiana-university/rivet-source) (make sure to install it), assets from `rivet-icon`, and custom build files.

```js
// ./src/index.js
import 'rivet-core/css/rivet.min.css?asset'
import 'rivet-icons/dist/rivet-icon-element.js?asset'
import 'rivet-icons/dist/rivet-icons.css?asset'
import '../build/rivet-icons.js?asset'

// Webpack outputs:
// ./docs/assets/rivet.min.css
// ./docs/assets/rivet-icon-element.js
// ./docs/assets/rivet-icons.css
// ./docs/assets/rivet-icons.js
```

## 4. Set up the page

Now that Webpack is building and copying assets, the browser needs an entry point to the application. Create `./src/index.html`. Reference the dependencies relative to the out folder.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="./assets/rivet.min.css">
    <link rel="stylesheet" href="./assets/rivet-icons.css">
    <script defer src="./assets/react.production.min.js"></script>
    <script defer src="./assets/react-dom.production.min.js"></script>
    <script defer src="./assets/rivet-icons.js"></script>
    <script type="module" src="./assets/rivet-icon-element.js"></script>
    <script defer src="./app.js"></script>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

A new resource query can be used to copy files to the root of the out folder, rather than to the `assets` subfolder. This could be used for the index page.

```js
// webpack.config.js
{
  module: {
    rules: [
      {
        resourceQuery: /root/,
        type: 'asset/resource',
        generator: {
          filename: '[base]'
        }
      }
    ]
  }
}
```

```js
// ./src/index.js
import './index.html?root'

// Webpack outputs:
// ./docs/index.html
```

Because all dependencies were imported with Webpack through the entry file (`./src/index.js`), Webpack Dev Server is aware of them and will serve them. Use the [`devServer.contentBase` configuration](https://webpack.js.org/configuration/dev-server/#devservercontentbase) if there are files needed to be included by Webpack Dev Server but excluded from the out folder.

Run the development environment. Confirm "Hello World" displays and that all resources are served.

```
npm run start
```

Finally, set up a mount point for React and render to it. Confirm "Hello World, from React" displays.

```html
<body>
  <div id="app"></div>
</body>
```

```js
// ./src/index.js
import React from 'react'
import { render } from 'react-dom'

function App () {
  return (
    <h1>Hello World, from React</h1>
  )
}

render(
  <App />,
  document.getElementById('app')
)
```
