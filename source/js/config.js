System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "main-bundle.js": [
      "main.js",
      "components/app.js",
      "actions/index.js",
      "constants/action-types.js",
      "npm:babel-runtime@5.8.38/core-js/object/keys.js",
      "npm:core-js@1.2.7/library/fn/object/keys.js",
      "npm:core-js@1.2.7/library/modules/$.core.js",
      "npm:core-js@1.2.7/library/modules/es6.object.keys.js",
      "npm:core-js@1.2.7/library/modules/$.object-sap.js",
      "npm:core-js@1.2.7/library/modules/$.fails.js",
      "npm:core-js@1.2.7/library/modules/$.export.js",
      "npm:core-js@1.2.7/library/modules/$.ctx.js",
      "npm:core-js@1.2.7/library/modules/$.a-function.js",
      "npm:core-js@1.2.7/library/modules/$.global.js",
      "npm:core-js@1.2.7/library/modules/$.to-object.js",
      "npm:core-js@1.2.7/library/modules/$.defined.js",
      "npm:babel-runtime@5.8.38/helpers/extends.js",
      "npm:babel-runtime@5.8.38/core-js/object/assign.js",
      "npm:core-js@1.2.7/library/fn/object/assign.js",
      "npm:core-js@1.2.7/library/modules/es6.object.assign.js",
      "npm:core-js@1.2.7/library/modules/$.object-assign.js",
      "npm:core-js@1.2.7/library/modules/$.iobject.js",
      "npm:core-js@1.2.7/library/modules/$.cof.js",
      "npm:core-js@1.2.7/library/modules/$.js",
      "utils/utils.js",
      "components/inputItemGrid.js",
      "components/fadeAndSlideTransition.js",
      "npm:react-transition-group@2.3.1.js",
      "npm:react-transition-group@2.3.1/index.js",
      "npm:react-transition-group@2.3.1/Transition.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js",
      "npm:react-transition-group@2.3.1/utils/PropTypes.js",
      "npm:prop-types@15.6.2.js",
      "npm:prop-types@15.6.2/index.js",
      "npm:prop-types@15.6.2/factoryWithThrowingShims.js",
      "npm:prop-types@15.6.2/lib/ReactPropTypesSecret.js",
      "npm:prop-types@15.6.2/factoryWithTypeCheckers.js",
      "npm:prop-types@15.6.2/checkPropTypes.js",
      "npm:object-assign@4.1.1.js",
      "npm:object-assign@4.1.1/index.js",
      "npm:react-dom@16.4.0.js",
      "npm:react-dom@16.4.0/index.js",
      "npm:react-dom@16.4.0/cjs/react-dom.development.js",
      "npm:fbjs@0.8.17/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.17/lib/camelize.js",
      "npm:fbjs@0.8.17/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.17/lib/hyphenate.js",
      "npm:fbjs@0.8.17/lib/emptyObject.js",
      "npm:fbjs@0.8.17/lib/containsNode.js",
      "npm:fbjs@0.8.17/lib/isTextNode.js",
      "npm:fbjs@0.8.17/lib/isNode.js",
      "npm:fbjs@0.8.17/lib/shallowEqual.js",
      "npm:fbjs@0.8.17/lib/getActiveElement.js",
      "npm:fbjs@0.8.17/lib/emptyFunction.js",
      "npm:fbjs@0.8.17/lib/ExecutionEnvironment.js",
      "npm:fbjs@0.8.17/lib/warning.js",
      "npm:react@16.4.1.js",
      "npm:react@16.4.1/index.js",
      "npm:react@16.4.1/cjs/react.development.js",
      "npm:fbjs@0.8.17/lib/invariant.js",
      "npm:react@16.4.1/cjs/react.production.min.js",
      "npm:react-dom@16.4.0/cjs/react-dom.production.min.js",
      "npm:react-transition-group@2.3.1/TransitionGroup.js",
      "npm:react-transition-group@2.3.1/utils/ChildMapping.js",
      "npm:react-transition-group@2.3.1/ReplaceTransition.js",
      "npm:react-transition-group@2.3.1/CSSTransition.js",
      "npm:dom-helpers@3.3.1/class/removeClass.js",
      "npm:dom-helpers@3.3.1/class/addClass.js",
      "npm:dom-helpers@3.3.1/class/hasClass.js",
      "components/inputItem.js",
      "config/patterns.js",
      "config/types.js",
      "npm:react-redux@5.0.7.js",
      "npm:react-redux@5.0.7/lib/index.js",
      "npm:react-redux@5.0.7/lib/connect/connect.js",
      "npm:react-redux@5.0.7/lib/connect/selectorFactory.js",
      "npm:react-redux@5.0.7/lib/connect/verifySubselectors.js",
      "npm:react-redux@5.0.7/lib/utils/warning.js",
      "npm:react-redux@5.0.7/lib/connect/mergeProps.js",
      "npm:react-redux@5.0.7/lib/utils/verifyPlainObject.js",
      "npm:lodash@4.17.10/isPlainObject.js",
      "npm:lodash@4.17.10/isObjectLike.js",
      "npm:lodash@4.17.10/_getPrototype.js",
      "npm:lodash@4.17.10/_overArg.js",
      "npm:lodash@4.17.10/_baseGetTag.js",
      "npm:lodash@4.17.10/_objectToString.js",
      "npm:lodash@4.17.10/_getRawTag.js",
      "npm:lodash@4.17.10/_Symbol.js",
      "npm:lodash@4.17.10/_root.js",
      "npm:lodash@4.17.10/_freeGlobal.js",
      "npm:react-redux@5.0.7/lib/connect/mapStateToProps.js",
      "npm:react-redux@5.0.7/lib/connect/wrapMapToProps.js",
      "npm:react-redux@5.0.7/lib/connect/mapDispatchToProps.js",
      "npm:redux@4.0.0.js",
      "npm:redux@4.0.0/lib/redux.js",
      "npm:symbol-observable@1.2.0.js",
      "npm:symbol-observable@1.2.0/lib/index.js",
      "npm:symbol-observable@1.2.0/lib/ponyfill.js",
      "npm:react-redux@5.0.7/lib/utils/shallowEqual.js",
      "npm:react-redux@5.0.7/lib/components/connectAdvanced.js",
      "npm:react-redux@5.0.7/lib/utils/PropTypes.js",
      "npm:react-redux@5.0.7/lib/utils/Subscription.js",
      "npm:invariant@2.2.4.js",
      "npm:invariant@2.2.4/browser.js",
      "npm:hoist-non-react-statics@2.5.5.js",
      "npm:hoist-non-react-statics@2.5.5/dist/hoist-non-react-statics.cjs.js",
      "npm:react-redux@5.0.7/lib/components/Provider.js",
      "components/header.js",
      "npm:babel-runtime@5.8.38/helpers/to-consumable-array.js",
      "npm:babel-runtime@5.8.38/core-js/array/from.js",
      "npm:core-js@1.2.7/library/fn/array/from.js",
      "npm:core-js@1.2.7/library/modules/es6.array.from.js",
      "npm:core-js@1.2.7/library/modules/$.iter-detect.js",
      "npm:core-js@1.2.7/library/modules/$.wks.js",
      "npm:core-js@1.2.7/library/modules/$.uid.js",
      "npm:core-js@1.2.7/library/modules/$.shared.js",
      "npm:core-js@1.2.7/library/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.7/library/modules/$.iterators.js",
      "npm:core-js@1.2.7/library/modules/$.classof.js",
      "npm:core-js@1.2.7/library/modules/$.to-length.js",
      "npm:core-js@1.2.7/library/modules/$.to-integer.js",
      "npm:core-js@1.2.7/library/modules/$.is-array-iter.js",
      "npm:core-js@1.2.7/library/modules/$.iter-call.js",
      "npm:core-js@1.2.7/library/modules/$.an-object.js",
      "npm:core-js@1.2.7/library/modules/$.is-object.js",
      "npm:core-js@1.2.7/library/modules/es6.string.iterator.js",
      "npm:core-js@1.2.7/library/modules/$.iter-define.js",
      "npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.7/library/modules/$.has.js",
      "npm:core-js@1.2.7/library/modules/$.iter-create.js",
      "npm:core-js@1.2.7/library/modules/$.hide.js",
      "npm:core-js@1.2.7/library/modules/$.descriptors.js",
      "npm:core-js@1.2.7/library/modules/$.property-desc.js",
      "npm:core-js@1.2.7/library/modules/$.redefine.js",
      "npm:core-js@1.2.7/library/modules/$.library.js",
      "npm:core-js@1.2.7/library/modules/$.string-at.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.7/library/fn/object/define-property.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.set-proto.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:core-js@1.2.7/library/fn/object/create.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/$.to-iobject.js",
      "store/index.js",
      "reducers/index.js",
      "npm:redux-thunk@2.3.0.js",
      "npm:redux-thunk@2.3.0/lib/index.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "react": "npm:react@16.4.1",
    "react-dom": "npm:react-dom@16.4.0",
    "react-redux": "npm:react-redux@5.0.7",
    "react-transition-group": "npm:react-transition-group@2.3.1",
    "redux": "npm:redux@4.0.0",
    "redux-logger": "npm:redux-logger@3.0.6",
    "redux-thunk": "npm:redux-thunk@2.3.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.1.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.2.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:asap@2.0.6": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer@5.1.0": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.12"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:domain-browser@1.2.0": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "iconv-lite": "npm:iconv-lite@0.4.23"
    },
    "npm:fbjs@0.8.17": {
      "core-js": "npm:core-js@1.2.7",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.3.1",
      "setimmediate": "npm:setimmediate@1.0.5",
      "ua-parser-js": "npm:ua-parser-js@0.7.18"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.23": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safer-buffer": "npm:safer-buffer@2.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.4": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.7.3",
      "whatwg-fetch": "npm:whatwg-fetch@2.0.4"
    },
    "npm:loose-envify@1.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:node-fetch@1.7.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.3.1": {
      "asap": "npm:asap@2.0.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:prop-types@15.6.2": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@16.4.0": {
      "fbjs": "npm:fbjs@0.8.17",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.6.2",
      "react": "npm:react@16.4.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:react-redux@5.0.7": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.5",
      "invariant": "npm:invariant@2.2.4",
      "lodash": "npm:lodash@4.17.10",
      "lodash-es": "npm:lodash-es@4.17.10",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.6.2",
      "react": "npm:react@16.4.1",
      "redux": "npm:redux@4.0.0"
    },
    "npm:react-transition-group@2.3.1": {
      "dom-helpers": "npm:dom-helpers@3.3.1",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.6.2",
      "react": "npm:react@16.4.1",
      "react-dom": "npm:react-dom@16.4.0"
    },
    "npm:react@16.4.1": {
      "fbjs": "npm:fbjs@0.8.17",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.6.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@2.0.0",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.1.1",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:redux-logger@3.0.6": {
      "deep-diff": "npm:deep-diff@0.3.8"
    },
    "npm:redux@4.0.0": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.2.0"
    },
    "npm:safe-buffer@5.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:safer-buffer@2.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:setimmediate@1.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:ua-parser-js@0.7.18": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
