<br>
<div align="center">
    <h1>🧪 Client JavaScript loading</h1>
    <strong>Exposes several methods to load and manage modules client side</strong>
</div>
<br>
<br>

## 🤔 Motivation

This repository aims to present several approaches to load dynamically (ie. without relying on a bundler tool) ECMAScript modules client side.

By dynamic, we mean loading modules client side / at runtime (ie. not at build time). Build tools are an important part of the development experience, but a spec called [import maps](https://github.com/WICG/import-maps) will allow you to both import external code into your project without a build tool and it will only load the code when it is needed at runtime. Import maps won’t completely replace build tools that perform many other valuable actions like building style sheets and handling images, but they will allow you to bootstrap new JavaScript applications quickly and easily using only the native browser functionality.

**Why not using `<script />` tag for this purpose?**
Originally, if you’re a fron­tend web devel­op­er, using `<script />` to load **dynamically** JavaScript code might be your first natural choice. However, managing the loading flow via scripts tags can be rapidly complex (eg. insertion order to not break dependency flow...). **That's why using a JavaScript loader** should be the way to go for complex frontend applications (by complex, we mean with several and interdependent modules).

<br>

## 🗂 Loaders

The following loaders are tested:
- [Script (no type module)](script.html): Loads a JavaScript script. It has the best possible browser support but can be difficult to manage manually. We use [async/defer](https://zellwk.com/blog/javascript-async-and-defer/) attribute to improve performance (ie. avoid blocking DOM loading).
```bash
# Can be previewed by running:
make script
```

- [ESM (script with type module)](esm.html): Native ECMAScript module loading with the best possible compliancy and performance. However, the compatibility is not optimal (eg. no support for ECMAScript modules in IE11): it must be the privileged approach if the compatibility is not an issue (please note that, while ECMAScript modules cannot be polyfilled without a build step, the import map can client side via [es-module-shims](https://github.com/guybedford/es-module-shims)). Otherwise, SystemJS should be used instead to offer better compatibility.
```bash
# Can be previewed by running:
make esm
```

- [SystemJS](systemjs.html): Guarantees older browsers compatibility (including IE11) while being compliant with the ECMAScript module specification. Basically, it offers cross-browser support of the ESM loading strategy.
```bash
# Can be previewed by running:
make systemjs
```

- [RequireJS](https://requirejs.org/): Not tested since it's not future-proof (custom behavior and syntax: no ECMAScript module specification compliancy).

<br>

## ✅ Requirements

Each solution must match following requirements:
- Should support module resolution via `import/require`
- Should support relative module resolution (eg. `import "./app.js";`)
- Should support bare module specifiers (eg. `import "react";`)

<br>

## 📖 Resources

- On the new dynamic loading standard with import maps (opening the door to micro-frontend runtime side): https://www.digitalocean.com/community/tutorials/how-to-dynamically-import-javascript-with-import-maps
- On why `<script />` loading strategy is not enough: https://nystudio107.com/blog/using-systemjs-as-javascript-loader
