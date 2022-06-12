# Solidoc: Documentation Generator for Solidity

This command-line utility creates markdown-based documentation for your Solidity project(s) for the following platforms:

* Ethereum
* Ethereum Classic
* Tron
* Qtum
* Wanchain
* Aeternity
* Counterparty
* Rootstock
* Ubiq
* Monax


## Getting Started

```npm
npm install @neptunemutual/solidoc -g
```

**CLI Arguments**

1. Path to truffle project (or similar) root.
2. Path to generate documentation to.
3. Do not recompile. Optional, default: false.
4. Language. Optional, default: en.


**How to Use Solidoc?**

On your project root, run the following command.

```npm
solidoc ./ ./docs true
```

This will generate documentation to the `docs` directory.

**Or edit package.json**

```json
  "scripts": {
    "docgen": "solidoc ./ ./docs"
  }
```

and run

```npm
npm run docgen
```

**Note**

Do not use recompilation (third argument) if you are using this on a non truffle project.

## Configuration File

Alternatively, you can create `solidoc.json` configuration file in your project root.

```json
{
  "pathToRoot": "./",
  "outputPath": "./docs",
  "noCompilation": true,
  "compiler": "truffle compile",
  "language": "en"
}
```

and then call `solidoc` instead of passing any command line argument.


## Overrides

If you wish to change bits and pieces of the documentation generated, place `solidoc templates` on the following directory:

`./.solidoc/templates/`

[Solidoc Templates](templates)


You can also override language literals by copying and editing `i18n` files on the following path:

`./.solidoc/i18n/`



## Example Documentation

[Neptune Mutual Protocol Documentation](https://github.com/neptune-mutual-blue/protocol)
