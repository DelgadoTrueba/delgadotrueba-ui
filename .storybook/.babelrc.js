module.exports = {
    "sourceType": "unambiguous",
    "presets": [
      [
        "@babel/preset-env",
        {
          "shippedProposals": true,
          "loose": true
        }
      ],
      "@babel/preset-typescript"
    ],
    "plugins": [
      "@babel/plugin-transform-shorthand-properties",
      "@babel/plugin-transform-block-scoping",
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ],
      [
        "@babel/plugin-proposal-private-property-in-object",
        {
          "loose": true
        }
      ],
      [
        "@babel/plugin-proposal-private-methods",
        {
          "loose": true
        }
      ],
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-syntax-dynamic-import",
      [
        "@babel/plugin-proposal-object-rest-spread",
        {
          "loose": true,
          "useBuiltIns": true
        }
      ],
      "@babel/plugin-transform-classes",
      "@babel/plugin-transform-arrow-functions",
      "@babel/plugin-transform-parameters",
      "@babel/plugin-transform-destructuring",
      "@babel/plugin-transform-spread",
      "@babel/plugin-transform-for-of",
      "babel-plugin-macros",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      [
        "babel-plugin-polyfill-corejs3",
        {
          "method": "usage-global",
          "absoluteImports": "core-js",
          "version": "3.26.1"
        }
      ]
    ]
  }