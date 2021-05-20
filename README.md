# Rivet Icons with Webpack and React

This repo shows how to make [Rivet Icons](https://github.com/indiana-university/rivet-icons) part of a Webpack and React project.

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

Install [`npm-run-all`](https://github.com/mysticatea/npm-run-all) and [`rimraf`](https://github.com/isaacs/rimraf). `npm-run-all` sequences scripts to run in a cross-platform way (macOS and Windows). `rimraf` recursively removes folders.

```
npm install --save-dev npm-run-all rimraf
```

Add npm scripts to build the icons. The `build` script triggers the `./build` folder to be removed, then generates the custom icon set from `./scripts/icons.js`.

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
