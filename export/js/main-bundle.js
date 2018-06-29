System.registerDynamic('npm:redux-thunk@2.3.0/lib/index.js', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  function createThunkMiddleware(extraArgument) {
    return function (_ref) {
      var dispatch = _ref.dispatch,
          getState = _ref.getState;
      return function (next) {
        return function (action) {
          if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
          }

          return next(action);
        };
      };
    };
  }

  var thunk = createThunkMiddleware();
  thunk.withExtraArgument = createThunkMiddleware;

  exports['default'] = thunk;
});
System.registerDynamic("npm:redux-thunk@2.3.0.js", ["npm:redux-thunk@2.3.0/lib/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:redux-thunk@2.3.0/lib/index.js");
});
System.registerDynamic("npm:redux-logger@3.0.6/dist/redux-logger.js", [], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
  !function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof undefined && define.amd ? define(["exports"], t) : t(e.reduxLogger = e.reduxLogger || {});
  }(this, function (e) {
    "use strict";
    function t(e, t) {
      e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } });
    }function r(e, t) {
      Object.defineProperty(this, "kind", { value: e, enumerable: !0 }), t && t.length && Object.defineProperty(this, "path", { value: t, enumerable: !0 });
    }function n(e, t, r) {
      n.super_.call(this, "E", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: r, enumerable: !0 });
    }function o(e, t) {
      o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", { value: t, enumerable: !0 });
    }function i(e, t) {
      i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 });
    }function a(e, t, r) {
      a.super_.call(this, "A", e), Object.defineProperty(this, "index", { value: t, enumerable: !0 }), Object.defineProperty(this, "item", { value: r, enumerable: !0 });
    }function f(e, t, r) {
      var n = e.slice((r || t) + 1 || e.length);return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e;
    }function u(e) {
      var t = "undefined" == typeof e ? "undefined" : N(e);return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
    }function l(e, t, r, c, s, d, p) {
      s = s || [], p = p || [];var g = s.slice(0);if ("undefined" != typeof d) {
        if (c) {
          if ("function" == typeof c && c(g, d)) return;if ("object" === ("undefined" == typeof c ? "undefined" : N(c))) {
            if (c.prefilter && c.prefilter(g, d)) return;if (c.normalize) {
              var h = c.normalize(g, d, e, t);h && (e = h[0], t = h[1]);
            }
          }
        }g.push(d);
      }"regexp" === u(e) && "regexp" === u(t) && (e = e.toString(), t = t.toString());var y = "undefined" == typeof e ? "undefined" : N(e),
          v = "undefined" == typeof t ? "undefined" : N(t),
          b = "undefined" !== y || p && p[p.length - 1].lhs && p[p.length - 1].lhs.hasOwnProperty(d),
          m = "undefined" !== v || p && p[p.length - 1].rhs && p[p.length - 1].rhs.hasOwnProperty(d);if (!b && m) r(new o(g, t));else if (!m && b) r(new i(g, e));else if (u(e) !== u(t)) r(new n(g, e, t));else if ("date" === u(e) && e - t !== 0) r(new n(g, e, t));else if ("object" === y && null !== e && null !== t) {
        if (p.filter(function (t) {
          return t.lhs === e;
        }).length) e !== t && r(new n(g, e, t));else {
          if (p.push({ lhs: e, rhs: t }), Array.isArray(e)) {
            var w;e.length;for (w = 0; w < e.length; w++) w >= t.length ? r(new a(g, w, new i(void 0, e[w]))) : l(e[w], t[w], r, c, g, w, p);for (; w < t.length;) r(new a(g, w, new o(void 0, t[w++])));
          } else {
            var x = Object.keys(e),
                S = Object.keys(t);x.forEach(function (n, o) {
              var i = S.indexOf(n);i >= 0 ? (l(e[n], t[n], r, c, g, n, p), S = f(S, i)) : l(e[n], void 0, r, c, g, n, p);
            }), S.forEach(function (e) {
              l(void 0, t[e], r, c, g, e, p);
            });
          }p.length = p.length - 1;
        }
      } else e !== t && ("number" === y && isNaN(e) && isNaN(t) || r(new n(g, e, t)));
    }function c(e, t, r, n) {
      return n = n || [], l(e, t, function (e) {
        e && n.push(e);
      }, r), n.length ? n : void 0;
    }function s(e, t, r) {
      if (r.path && r.path.length) {
        var n,
            o = e[t],
            i = r.path.length - 1;for (n = 0; n < i; n++) o = o[r.path[n]];switch (r.kind) {case "A":
            s(o[r.path[n]], r.index, r.item);break;case "D":
            delete o[r.path[n]];break;case "E":case "N":
            o[r.path[n]] = r.rhs;}
      } else switch (r.kind) {case "A":
          s(e[t], r.index, r.item);break;case "D":
          e = f(e, t);break;case "E":case "N":
          e[t] = r.rhs;}return e;
    }function d(e, t, r) {
      if (e && t && r && r.kind) {
        for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i;) "undefined" == typeof n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), n = n[r.path[o]];switch (r.kind) {case "A":
            s(r.path ? n[r.path[o]] : n, r.index, r.item);break;case "D":
            delete n[r.path[o]];break;case "E":case "N":
            n[r.path[o]] = r.rhs;}
      }
    }function p(e, t, r) {
      if (r.path && r.path.length) {
        var n,
            o = e[t],
            i = r.path.length - 1;for (n = 0; n < i; n++) o = o[r.path[n]];switch (r.kind) {case "A":
            p(o[r.path[n]], r.index, r.item);break;case "D":
            o[r.path[n]] = r.lhs;break;case "E":
            o[r.path[n]] = r.lhs;break;case "N":
            delete o[r.path[n]];}
      } else switch (r.kind) {case "A":
          p(e[t], r.index, r.item);break;case "D":
          e[t] = r.lhs;break;case "E":
          e[t] = r.lhs;break;case "N":
          e = f(e, t);}return e;
    }function g(e, t, r) {
      if (e && t && r && r.kind) {
        var n,
            o,
            i = e;for (o = r.path.length - 1, n = 0; n < o; n++) "undefined" == typeof i[r.path[n]] && (i[r.path[n]] = {}), i = i[r.path[n]];switch (r.kind) {case "A":
            p(i[r.path[n]], r.index, r.item);break;case "D":
            i[r.path[n]] = r.lhs;break;case "E":
            i[r.path[n]] = r.lhs;break;case "N":
            delete i[r.path[n]];}
      }
    }function h(e, t, r) {
      if (e && t) {
        var n = function (n) {
          r && !r(e, t, n) || d(e, t, n);
        };l(e, t, n);
      }
    }function y(e) {
      return "color: " + F[e].color + "; font-weight: bold";
    }function v(e) {
      var t = e.kind,
          r = e.path,
          n = e.lhs,
          o = e.rhs,
          i = e.index,
          a = e.item;switch (t) {case "E":
          return [r.join("."), n, "→", o];case "N":
          return [r.join("."), o];case "D":
          return [r.join(".")];case "A":
          return [r.join(".") + "[" + i + "]", a];default:
          return [];}
    }function b(e, t, r, n) {
      var o = c(e, t);try {
        n ? r.groupCollapsed("diff") : r.group("diff");
      } catch (e) {
        r.log("diff");
      }o ? o.forEach(function (e) {
        var t = e.kind,
            n = v(e);r.log.apply(r, ["%c " + F[t].text, y(t)].concat(P(n)));
      }) : r.log("—— no diff ——");try {
        r.groupEnd();
      } catch (e) {
        r.log("—— diff end —— ");
      }
    }function m(e, t, r, n) {
      switch ("undefined" == typeof e ? "undefined" : N(e)) {case "object":
          return "function" == typeof e[n] ? e[n].apply(e, P(r)) : e[n];case "function":
          return e(t);default:
          return e;}
    }function w(e) {
      var t = e.timestamp,
          r = e.duration;return function (e, n, o) {
        var i = ["action"];return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ");
      };
    }function x(e, t) {
      var r = t.logger,
          n = t.actionTransformer,
          o = t.titleFormatter,
          i = void 0 === o ? w(t) : o,
          a = t.collapsed,
          f = t.colors,
          u = t.level,
          l = t.diff,
          c = "undefined" == typeof t.titleFormatter;e.forEach(function (o, s) {
        var d = o.started,
            p = o.startedTime,
            g = o.action,
            h = o.prevState,
            y = o.error,
            v = o.took,
            w = o.nextState,
            x = e[s + 1];x && (w = x.prevState, v = x.started - d);var S = n(g),
            k = "function" == typeof a ? a(function () {
          return w;
        }, g, o) : a,
            j = D(p),
            E = f.title ? "color: " + f.title(S) + ";" : "",
            A = ["color: gray; font-weight: lighter;"];A.push(E), t.timestamp && A.push("color: gray; font-weight: lighter;"), t.duration && A.push("color: gray; font-weight: lighter;");var O = i(S, j, v);try {
          k ? f.title && c ? r.groupCollapsed.apply(r, ["%c " + O].concat(A)) : r.groupCollapsed(O) : f.title && c ? r.group.apply(r, ["%c " + O].concat(A)) : r.group(O);
        } catch (e) {
          r.log(O);
        }var N = m(u, S, [h], "prevState"),
            P = m(u, S, [S], "action"),
            C = m(u, S, [y, h], "error"),
            F = m(u, S, [w], "nextState");if (N) if (f.prevState) {
          var L = "color: " + f.prevState(h) + "; font-weight: bold";r[N]("%c prev state", L, h);
        } else r[N]("prev state", h);if (P) if (f.action) {
          var T = "color: " + f.action(S) + "; font-weight: bold";r[P]("%c action    ", T, S);
        } else r[P]("action    ", S);if (y && C) if (f.error) {
          var M = "color: " + f.error(y, h) + "; font-weight: bold;";r[C]("%c error     ", M, y);
        } else r[C]("error     ", y);if (F) if (f.nextState) {
          var _ = "color: " + f.nextState(w) + "; font-weight: bold";r[F]("%c next state", _, w);
        } else r[F]("next state", w);l && b(h, w, r, k);try {
          r.groupEnd();
        } catch (e) {
          r.log("—— log end ——");
        }
      });
    }function S() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = Object.assign({}, L, e),
          r = t.logger,
          n = t.stateTransformer,
          o = t.errorTransformer,
          i = t.predicate,
          a = t.logErrors,
          f = t.diffPredicate;if ("undefined" == typeof r) return function () {
        return function (e) {
          return function (t) {
            return e(t);
          };
        };
      };if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), function () {
        return function (e) {
          return function (t) {
            return e(t);
          };
        };
      };var u = [];return function (e) {
        var r = e.getState;return function (e) {
          return function (l) {
            if ("function" == typeof i && !i(r, l)) return e(l);var c = {};u.push(c), c.started = O.now(), c.startedTime = new Date(), c.prevState = n(r()), c.action = l;var s = void 0;if (a) try {
              s = e(l);
            } catch (e) {
              c.error = o(e);
            } else s = e(l);c.took = O.now() - c.started, c.nextState = n(r());var d = t.diff && "function" == typeof f ? f(r, l) : t.diff;if (x(u, Object.assign({}, t, { diff: d })), u.length = 0, c.error) throw c.error;return s;
          };
        };
      };
    }var k,
        j,
        E = function (e, t) {
      return new Array(t + 1).join(e);
    },
        A = function (e, t) {
      return E("0", t - e.toString().length) + e;
    },
        D = function (e) {
      return A(e.getHours(), 2) + ":" + A(e.getMinutes(), 2) + ":" + A(e.getSeconds(), 2) + "." + A(e.getMilliseconds(), 3);
    },
        O = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
        N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    },
        P = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];return r;
      }return Array.from(e);
    },
        C = [];k = "object" === ("undefined" == typeof global ? "undefined" : N(global)) && global ? global : "undefined" != typeof window ? window : {}, j = k.DeepDiff, j && C.push(function () {
      "undefined" != typeof j && k.DeepDiff === c && (k.DeepDiff = j, j = void 0);
    }), t(n, r), t(o, r), t(i, r), t(a, r), Object.defineProperties(c, { diff: { value: c, enumerable: !0 }, observableDiff: { value: l, enumerable: !0 }, applyDiff: { value: h, enumerable: !0 }, applyChange: { value: d, enumerable: !0 }, revertChange: { value: g, enumerable: !0 }, isConflict: { value: function () {
          return "undefined" != typeof j;
        }, enumerable: !0 }, noConflict: { value: function () {
          return C && (C.forEach(function (e) {
            e();
          }), C = null), c;
        }, enumerable: !0 } });var F = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } },
        L = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function (e) {
        return e;
      }, actionTransformer: function (e) {
        return e;
      }, errorTransformer: function (e) {
        return e;
      }, colors: { title: function () {
          return "inherit";
        }, prevState: function () {
          return "#9E9E9E";
        }, action: function () {
          return "#03A9F4";
        }, nextState: function () {
          return "#4CAF50";
        }, error: function () {
          return "#F20404";
        } }, diff: !1, diffPredicate: void 0, transformer: void 0 },
        T = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.dispatch,
          r = e.getState;return "function" == typeof t || "function" == typeof r ? S()({ dispatch: t, getState: r }) : void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
    };e.defaults = L, e.createLogger = S, e.logger = T, e.default = T, Object.defineProperty(e, "__esModule", { value: !0 });
  });
});
System.registerDynamic("npm:redux-logger@3.0.6.js", ["npm:redux-logger@3.0.6/dist/redux-logger.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:redux-logger@3.0.6/dist/redux-logger.js");
});
System.register('reducers/index.js', ['npm:babel-runtime@5.8.38/helpers/extends.js', 'npm:babel-runtime@5.8.38/helpers/to-consumable-array.js', 'npm:babel-runtime@5.8.38/core-js/object/assign.js', 'constants/action-types.js', 'utils/utils.js'], function (_export) {
	var _extends, _toConsumableArray, _Object$assign, ADD_INPUT_ITEM, EDIT_INPUT_ITEM, REMOVE_INPUT_ITEM, REQUEST_SAVED_STATE, RECEIVE_SAVED_STATE, SAVE_STATE_PENDING, SAVE_STATE_COMPLETE, generateRandomId, defaultInputItem, initialState, filterEditInputItems, rootReducer;

	return {
		setters: [function (_npmBabelRuntime5838HelpersExtendsJs) {
			_extends = _npmBabelRuntime5838HelpersExtendsJs['default'];
		}, function (_npmBabelRuntime5838HelpersToConsumableArrayJs) {
			_toConsumableArray = _npmBabelRuntime5838HelpersToConsumableArrayJs['default'];
		}, function (_npmBabelRuntime5838CoreJsObjectAssignJs) {
			_Object$assign = _npmBabelRuntime5838CoreJsObjectAssignJs['default'];
		}, function (_constantsActionTypesJs) {
			ADD_INPUT_ITEM = _constantsActionTypesJs.ADD_INPUT_ITEM;
			EDIT_INPUT_ITEM = _constantsActionTypesJs.EDIT_INPUT_ITEM;
			REMOVE_INPUT_ITEM = _constantsActionTypesJs.REMOVE_INPUT_ITEM;
			REQUEST_SAVED_STATE = _constantsActionTypesJs.REQUEST_SAVED_STATE;
			RECEIVE_SAVED_STATE = _constantsActionTypesJs.RECEIVE_SAVED_STATE;
			SAVE_STATE_PENDING = _constantsActionTypesJs.SAVE_STATE_PENDING;
			SAVE_STATE_COMPLETE = _constantsActionTypesJs.SAVE_STATE_COMPLETE;
		}, function (_utilsUtilsJs) {
			generateRandomId = _utilsUtilsJs.generateRandomId;
		}],
		execute: function () {
			'use strict';

			defaultInputItem = {
				name: 'Input Item',
				inputType: 'text',
				isRequired: false
			};
			initialState = {
				inputItems: [_extends({}, defaultInputItem, {
					id: generateRandomId()
				})]
			};

			filterEditInputItems = function filterEditInputItems(inputItems, payload) {
				return inputItems.map(function (inputItem) {
					if (inputItem.id === payload.id) {
						return _Object$assign({}, inputItem, payload);
					} else {
						return inputItem;
					}
				});
			};

			rootReducer = function rootReducer(state, action) {
				if (state === undefined) state = initialState;

				switch (action.type) {
					case ADD_INPUT_ITEM:
						return _extends({}, state, {
							inputItems: [_extends({}, defaultInputItem, {
								id: generateRandomId()
							})].concat(_toConsumableArray(state.inputItems)),
							isFetching: false,
							isLoading: false
						});
					case EDIT_INPUT_ITEM:
						return _extends({}, state, {
							inputItems: filterEditInputItems(state.inputItems, action.payload)
						});
					case REMOVE_INPUT_ITEM:
						return _extends({}, state, {
							inputItems: state.inputItems.filter(function (inputItem) {
								return inputItem.id !== action.payload.id;
							})
						});
					case REQUEST_SAVED_STATE:
						return _extends({}, state, {
							inputItems: [],
							isFetching: true,
							isLoading: true
						});
					case RECEIVE_SAVED_STATE:
						return _extends({}, state, {
							inputItems: action.payload,
							isFetching: false,
							isLoading: false
						});
					case SAVE_STATE_PENDING:
						return _extends({}, state, {
							isFetching: true,
							saveSuccessful: false
						});
					case SAVE_STATE_COMPLETE:
						return _extends({}, state, {
							isFetching: false,
							saveSuccessful: true
						});
					default:
						return state;
				}
			};

			_export('default', rootReducer);
		}
	};
});

System.register('store/index.js', ['npm:redux-thunk@2.3.0.js', 'npm:redux-logger@3.0.6.js', 'npm:redux@4.0.0.js', 'reducers/index.js'], function (_export) {
	'use strict';

	var thunkMiddleware, createLogger, createStore, applyMiddleware, rootReducer, loggerMiddleware;

	_export('default', configureStore);

	function configureStore(preloadedState) {
		return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware));
	}

	return {
		setters: [function (_npmReduxThunk230Js) {
			thunkMiddleware = _npmReduxThunk230Js['default'];
		}, function (_npmReduxLogger306Js) {
			createLogger = _npmReduxLogger306Js.createLogger;
		}, function (_npmRedux400Js) {
			createStore = _npmRedux400Js.createStore;
			applyMiddleware = _npmRedux400Js.applyMiddleware;
		}, function (_reducersIndexJs) {
			rootReducer = _reducersIndexJs['default'];
		}],
		execute: function () {
			loggerMiddleware = createLogger();
		}
	};
});

System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-iobject.js', ['npm:core-js@1.2.7/library/modules/$.iobject.js', 'npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('npm:core-js@1.2.7/library/modules/$.iobject.js'),
      defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (it) {
    return IObject(defined(it));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js', ['npm:core-js@1.2.7/library/modules/$.to-iobject.js', 'npm:core-js@1.2.7/library/modules/$.object-sap.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toIObject = $__require('npm:core-js@1.2.7/library/modules/$.to-iobject.js');
  $__require('npm:core-js@1.2.7/library/modules/$.object-sap.js')('getOwnPropertyDescriptor', function ($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js", ["npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js"), __esModule: true };
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/get.js", ["npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$getOwnPropertyDescriptor = $__require("npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js")["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null) object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/create.js', ['npm:core-js@1.2.7/library/modules/$.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/create.js", ["npm:core-js@1.2.7/library/fn/object/create.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/create.js"), __esModule: true };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.set-proto.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.is-object.js', 'npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var getDesc = $__require('npm:core-js@1.2.7/library/modules/$.js').getDesc,
      isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js'),
      anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js');
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
      try {
        set = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js', ['npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.set-proto.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js');
  $export($export.S, 'Object', { setPrototypeOf: $__require('npm:core-js@1.2.7/library/modules/$.set-proto.js').set });
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/set-prototype-of.js', ['npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Object.setPrototypeOf;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js", ["npm:core-js@1.2.7/library/fn/object/set-prototype-of.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/set-prototype-of.js"), __esModule: true };
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/inherits.js", ["npm:babel-runtime@5.8.38/core-js/object/create.js", "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$create = $__require("npm:babel-runtime@5.8.38/core-js/object/create.js")["default"];
  var _Object$setPrototypeOf = $__require("npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js")["default"];
  exports["default"] = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, { constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      } });
    if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/define-property.js', ['npm:core-js@1.2.7/library/modules/$.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/define-property.js", ["npm:core-js@1.2.7/library/fn/object/define-property.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/define-property.js"), __esModule: true };
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/create-class.js", ["npm:babel-runtime@5.8.38/core-js/object/define-property.js"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require("npm:babel-runtime@5.8.38/core-js/object/define-property.js")["default"];
  exports["default"] = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  exports.__esModule = true;
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/class-call-check.js", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  exports["default"] = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  exports.__esModule = true;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.string-at.js', ['npm:core-js@1.2.7/library/modules/$.to-integer.js', 'npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('npm:core-js@1.2.7/library/modules/$.to-integer.js'),
      defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.library.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.redefine.js', ['npm:core-js@1.2.7/library/modules/$.hide.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.hide.js');
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.property-desc.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.descriptors.js', ['npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('npm:core-js@1.2.7/library/modules/$.fails.js')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.hide.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.property-desc.js', 'npm:core-js@1.2.7/library/modules/$.descriptors.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      createDesc = $__require('npm:core-js@1.2.7/library/modules/$.property-desc.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.descriptors.js') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-create.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.property-desc.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.hide.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      descriptor = $__require('npm:core-js@1.2.7/library/modules/$.property-desc.js'),
      setToStringTag = $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js'),
      IteratorPrototype = {};
  $__require('npm:core-js@1.2.7/library/modules/$.hide.js')(IteratorPrototype, $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.has.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.has.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('npm:core-js@1.2.7/library/modules/$.js').setDesc,
      has = $__require('npm:core-js@1.2.7/library/modules/$.has.js'),
      TAG = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-define.js', ['npm:core-js@1.2.7/library/modules/$.library.js', 'npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.redefine.js', 'npm:core-js@1.2.7/library/modules/$.hide.js', 'npm:core-js@1.2.7/library/modules/$.has.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.iter-create.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('npm:core-js@1.2.7/library/modules/$.library.js'),
      $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
      redefine = $__require('npm:core-js@1.2.7/library/modules/$.redefine.js'),
      hide = $__require('npm:core-js@1.2.7/library/modules/$.hide.js'),
      has = $__require('npm:core-js@1.2.7/library/modules/$.has.js'),
      Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
      $iterCreate = $__require('npm:core-js@1.2.7/library/modules/$.iter-create.js'),
      setToStringTag = $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js'),
      getProto = $__require('npm:core-js@1.2.7/library/modules/$.js').getProto,
      ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.string.iterator.js', ['npm:core-js@1.2.7/library/modules/$.string-at.js', 'npm:core-js@1.2.7/library/modules/$.iter-define.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $at = $__require('npm:core-js@1.2.7/library/modules/$.string-at.js')(true);
  $__require('npm:core-js@1.2.7/library/modules/$.iter-define.js')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.is-object.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.an-object.js', ['npm:core-js@1.2.7/library/modules/$.is-object.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-call.js', ['npm:core-js@1.2.7/library/modules/$.an-object.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.is-array-iter.js', ['npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
        ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.to-integer.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-length.js', ['npm:core-js@1.2.7/library/modules/$.to-integer.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('npm:core-js@1.2.7/library/modules/$.to-integer.js'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.classof.js', ['npm:core-js@1.2.7/library/modules/$.cof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('npm:core-js@1.2.7/library/modules/$.cof.js'),
        TAG = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.iterators.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js', ['npm:core-js@1.2.7/library/modules/$.classof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('npm:core-js@1.2.7/library/modules/$.classof.js'),
        ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
        Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js');
    module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.shared.js', ['npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.uid.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.wks.js', ['npm:core-js@1.2.7/library/modules/$.shared.js', 'npm:core-js@1.2.7/library/modules/$.uid.js', 'npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('npm:core-js@1.2.7/library/modules/$.shared.js')('wks'),
        uid = $__require('npm:core-js@1.2.7/library/modules/$.uid.js'),
        Symbol = $__require('npm:core-js@1.2.7/library/modules/$.global.js').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-detect.js', ['npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {}
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.array.from.js', ['npm:core-js@1.2.7/library/modules/$.ctx.js', 'npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.to-object.js', 'npm:core-js@1.2.7/library/modules/$.iter-call.js', 'npm:core-js@1.2.7/library/modules/$.is-array-iter.js', 'npm:core-js@1.2.7/library/modules/$.to-length.js', 'npm:core-js@1.2.7/library/modules/core.get-iterator-method.js', 'npm:core-js@1.2.7/library/modules/$.iter-detect.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
      $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
      toObject = $__require('npm:core-js@1.2.7/library/modules/$.to-object.js'),
      call = $__require('npm:core-js@1.2.7/library/modules/$.iter-call.js'),
      isArrayIter = $__require('npm:core-js@1.2.7/library/modules/$.is-array-iter.js'),
      toLength = $__require('npm:core-js@1.2.7/library/modules/$.to-length.js'),
      getIterFn = $__require('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js');
  $export($export.S + $export.F * !$__require('npm:core-js@1.2.7/library/modules/$.iter-detect.js')(function (iter) {
    Array.from(iter);
  }), 'Array', { from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    } });
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/array/from.js', ['npm:core-js@1.2.7/library/modules/es6.string.iterator.js', 'npm:core-js@1.2.7/library/modules/es6.array.from.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.string.iterator.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.array.from.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Array.from;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/array/from.js", ["npm:core-js@1.2.7/library/fn/array/from.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/array/from.js"), __esModule: true };
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/to-consumable-array.js", ["npm:babel-runtime@5.8.38/core-js/array/from.js"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Array$from = $__require("npm:babel-runtime@5.8.38/core-js/array/from.js")["default"];
  exports["default"] = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      return arr2;
    } else {
      return _Array$from(arr);
    }
  };
  exports.__esModule = true;
});
System.register('components/header.js', ['npm:babel-runtime@5.8.38/helpers/to-consumable-array.js', 'npm:react@16.4.1.js', 'npm:react-redux@5.0.7.js', 'actions/index.js'], function (_export) {
    var _toConsumableArray, React, connect, _addInputItem, mapDispatchToProps, submitAllForms, Header;

    return {
        setters: [function (_npmBabelRuntime5838HelpersToConsumableArrayJs) {
            _toConsumableArray = _npmBabelRuntime5838HelpersToConsumableArrayJs['default'];
        }, function (_npmReact1641Js) {
            React = _npmReact1641Js['default'];
        }, function (_npmReactRedux507Js) {
            connect = _npmReactRedux507Js.connect;
        }, function (_actionsIndexJs) {
            _addInputItem = _actionsIndexJs.addInputItem;
        }],
        execute: function () {
            'use strict';

            mapDispatchToProps = function mapDispatchToProps(dispatch) {
                return {
                    addInputItem: function addInputItem() {
                        return dispatch(_addInputItem());
                    }
                };
            };

            submitAllForms = function submitAllForms() {
                [].concat(_toConsumableArray(document.querySelectorAll('button[type="submit"]'))).forEach(function (buttonEl) {
                    return buttonEl.click();
                });
            };

            Header = function Header(_ref) {
                var isFetching = _ref.isFetching;
                var addInputItem = _ref.addInputItem;
                var onSave = _ref.onSave;
                return React.createElement(
                    'header',
                    { className: 'header' },
                    React.createElement(
                        'div',
                        { className: 'wrapper' },
                        React.createElement(
                            'div',
                            { className: 'logo-wrapper' },
                            React.createElement(
                                'h1',
                                { className: 'logo' },
                                'Input Type Sandbox'
                            ),
                            React.createElement(
                                'p',
                                { className: 'logo-subhead' },
                                'Test input types, onscreen keyboards and more!'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'header__buttons' },
                            React.createElement(
                                'button',
                                { className: 'button', onClick: submitAllForms },
                                React.createElement('span', { className: 'icon-test' }),
                                ' Test All'
                            ),
                            React.createElement(
                                'button',
                                { className: 'button', onClick: addInputItem, disabled: isFetching },
                                React.createElement('span', { className: 'icon-add' }),
                                ' Add Input'
                            ),
                            React.createElement(
                                'button',
                                { className: 'button', onClick: onSave, disabled: isFetching },
                                React.createElement('span', { className: 'icon-upload' }),
                                ' Save'
                            )
                        )
                    )
                );
            };

            _export('default', connect(null, mapDispatchToProps)(Header));
        }
    };
});

System.registerDynamic('npm:react-redux@5.0.7/lib/components/Provider.js', ['npm:react@16.4.1.js', 'npm:prop-types@15.6.2.js', 'npm:react-redux@5.0.7/lib/utils/PropTypes.js', 'npm:react-redux@5.0.7/lib/utils/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    exports.createProvider = createProvider;
    var _react = $__require('npm:react@16.4.1.js');
    var _propTypes = $__require('npm:prop-types@15.6.2.js');
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _PropTypes = $__require('npm:react-redux@5.0.7/lib/utils/PropTypes.js');
    var _warning = $__require('npm:react-redux@5.0.7/lib/utils/warning.js');
    var _warning2 = _interopRequireDefault(_warning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var didWarnAboutReceivingStore = false;
    function warnAboutReceivingStore() {
      if (didWarnAboutReceivingStore) {
        return;
      }
      didWarnAboutReceivingStore = true;
      (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
    }
    function createProvider() {
      var _Provider$childContex;
      var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
      var subKey = arguments[1];
      var subscriptionKey = subKey || storeKey + 'Subscription';
      var Provider = function (_Component) {
        _inherits(Provider, _Component);
        Provider.prototype.getChildContext = function getChildContext() {
          var _ref;
          return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
        };
        function Provider(props, context) {
          _classCallCheck(this, Provider);
          var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
          _this[storeKey] = props.store;
          return _this;
        }
        Provider.prototype.render = function render() {
          return _react.Children.only(this.props.children);
        };
        return Provider;
      }(_react.Component);
      if ('production' !== 'production') {
        Provider.prototype.componentWillReceiveProps = function (nextProps) {
          if (this[storeKey] !== nextProps.store) {
            warnAboutReceivingStore();
          }
        };
      }
      Provider.propTypes = {
        store: _PropTypes.storeShape.isRequired,
        children: _propTypes2.default.element.isRequired
      };
      Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);
      return Provider;
    }
    exports.default = createProvider();
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:hoist-non-react-statics@2.5.5/dist/hoist-non-react-statics.cjs.js', [], true, function ($__require, exports, module) {
    /* */
    'use strict';

    /**
     * Copyright 2015, Yahoo! Inc.
     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
     */

    var global = this || self,
        GLOBAL = global;
    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };

    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };

    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') {
            // don't hoist over string (html) components

            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }

            var keys = getOwnPropertyNames(sourceComponent);

            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }

            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try {
                        // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }

            return targetComponent;
        }

        return targetComponent;
    }

    module.exports = hoistNonReactStatics;
});
System.registerDynamic("npm:hoist-non-react-statics@2.5.5.js", ["npm:hoist-non-react-statics@2.5.5/dist/hoist-non-react-statics.cjs.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:hoist-non-react-statics@2.5.5/dist/hoist-non-react-statics.cjs.js");
});
System.registerDynamic('npm:invariant@2.2.4/browser.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var invariant = function (condition, format, a, b, c, d, e, f) {
      if ('production' !== 'production') {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      }
      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:invariant@2.2.4.js", ["npm:invariant@2.2.4/browser.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:invariant@2.2.4/browser.js");
});
System.registerDynamic("npm:react-redux@5.0.7/lib/utils/Subscription.js", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // encapsulates the subscription logic for connecting a component to the redux store, as
  // well as nesting subscriptions of descendant components, so that we can ensure the
  // ancestor components re-render before descendants

  var CLEARED = null;
  var nullListeners = {
    notify: function notify() {}
  };

  function createListenerCollection() {
    // the current/next pattern is copied from redux's createStore code.
    // TODO: refactor+expose that code to be reusable here?
    var current = [];
    var next = [];

    return {
      clear: function clear() {
        next = CLEARED;
        current = CLEARED;
      },
      notify: function notify() {
        var listeners = current = next;
        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      },
      get: function get() {
        return next;
      },
      subscribe: function subscribe(listener) {
        var isSubscribed = true;
        if (next === current) next = current.slice();
        next.push(listener);

        return function unsubscribe() {
          if (!isSubscribed || current === CLEARED) return;
          isSubscribed = false;

          if (next === current) next = current.slice();
          next.splice(next.indexOf(listener), 1);
        };
      }
    };
  }

  var Subscription = function () {
    function Subscription(store, parentSub, onStateChange) {
      _classCallCheck(this, Subscription);

      this.store = store;
      this.parentSub = parentSub;
      this.onStateChange = onStateChange;
      this.unsubscribe = null;
      this.listeners = nullListeners;
    }

    Subscription.prototype.addNestedSub = function addNestedSub(listener) {
      this.trySubscribe();
      return this.listeners.subscribe(listener);
    };

    Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
      this.listeners.notify();
    };

    Subscription.prototype.isSubscribed = function isSubscribed() {
      return Boolean(this.unsubscribe);
    };

    Subscription.prototype.trySubscribe = function trySubscribe() {
      if (!this.unsubscribe) {
        this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

        this.listeners = createListenerCollection();
      }
    };

    Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = nullListeners;
      }
    };

    return Subscription;
  }();

  exports.default = Subscription;
});
System.registerDynamic('npm:react-redux@5.0.7/lib/utils/PropTypes.js', ['npm:prop-types@15.6.2.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.storeShape = exports.subscriptionShape = undefined;

  var _propTypes = $__require('npm:prop-types@15.6.2.js');

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
    trySubscribe: _propTypes2.default.func.isRequired,
    tryUnsubscribe: _propTypes2.default.func.isRequired,
    notifyNestedSubs: _propTypes2.default.func.isRequired,
    isSubscribed: _propTypes2.default.func.isRequired
  });

  var storeShape = exports.storeShape = _propTypes2.default.shape({
    subscribe: _propTypes2.default.func.isRequired,
    dispatch: _propTypes2.default.func.isRequired,
    getState: _propTypes2.default.func.isRequired
  });
});
System.registerDynamic('npm:react-redux@5.0.7/lib/components/connectAdvanced.js', ['npm:hoist-non-react-statics@2.5.5.js', 'npm:invariant@2.2.4.js', 'npm:react@16.4.1.js', 'npm:react-redux@5.0.7/lib/utils/Subscription.js', 'npm:react-redux@5.0.7/lib/utils/PropTypes.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    exports.default = connectAdvanced;
    var _hoistNonReactStatics = $__require('npm:hoist-non-react-statics@2.5.5.js');
    var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
    var _invariant = $__require('npm:invariant@2.2.4.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _react = $__require('npm:react@16.4.1.js');
    var _Subscription = $__require('npm:react-redux@5.0.7/lib/utils/Subscription.js');
    var _Subscription2 = _interopRequireDefault(_Subscription);
    var _PropTypes = $__require('npm:react-redux@5.0.7/lib/utils/PropTypes.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }
      return target;
    }
    var hotReloadingVersion = 0;
    var dummyState = {};
    function noop() {}
    function makeSelectorStateful(sourceSelector, store) {
      var selector = { run: function runComponentSelector(props) {
          try {
            var nextProps = sourceSelector(store.getState(), props);
            if (nextProps !== selector.props || selector.error) {
              selector.shouldComponentUpdate = true;
              selector.props = nextProps;
              selector.error = null;
            }
          } catch (error) {
            selector.shouldComponentUpdate = true;
            selector.error = error;
          }
        } };
      return selector;
    }
    function connectAdvanced(selectorFactory) {
      var _contextTypes, _childContextTypes;
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$getDisplayName = _ref.getDisplayName,
          getDisplayName = _ref$getDisplayName === undefined ? function (name) {
        return 'ConnectAdvanced(' + name + ')';
      } : _ref$getDisplayName,
          _ref$methodName = _ref.methodName,
          methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
          _ref$renderCountProp = _ref.renderCountProp,
          renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
          _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
          shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
          _ref$storeKey = _ref.storeKey,
          storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
          _ref$withRef = _ref.withRef,
          withRef = _ref$withRef === undefined ? false : _ref$withRef,
          connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);
      var subscriptionKey = storeKey + 'Subscription';
      var version = hotReloadingVersion++;
      var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
      var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);
      return function wrapWithConnect(WrappedComponent) {
        (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));
        var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
        var displayName = getDisplayName(wrappedComponentName);
        var selectorFactoryOptions = _extends({}, connectOptions, {
          getDisplayName: getDisplayName,
          methodName: methodName,
          renderCountProp: renderCountProp,
          shouldHandleStateChanges: shouldHandleStateChanges,
          storeKey: storeKey,
          withRef: withRef,
          displayName: displayName,
          wrappedComponentName: wrappedComponentName,
          WrappedComponent: WrappedComponent
        });
        var Connect = function (_Component) {
          _inherits(Connect, _Component);
          function Connect(props, context) {
            _classCallCheck(this, Connect);
            var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
            _this.version = version;
            _this.state = {};
            _this.renderCount = 0;
            _this.store = props[storeKey] || context[storeKey];
            _this.propsMode = Boolean(props[storeKey]);
            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
            (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
            _this.initSelector();
            _this.initSubscription();
            return _this;
          }
          Connect.prototype.getChildContext = function getChildContext() {
            var _ref2;
            var subscription = this.propsMode ? null : this.subscription;
            return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
          };
          Connect.prototype.componentDidMount = function componentDidMount() {
            if (!shouldHandleStateChanges) return;
            this.subscription.trySubscribe();
            this.selector.run(this.props);
            if (this.selector.shouldComponentUpdate) this.forceUpdate();
          };
          Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            this.selector.run(nextProps);
          };
          Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
            return this.selector.shouldComponentUpdate;
          };
          Connect.prototype.componentWillUnmount = function componentWillUnmount() {
            if (this.subscription) this.subscription.tryUnsubscribe();
            this.subscription = null;
            this.notifyNestedSubs = noop;
            this.store = null;
            this.selector.run = noop;
            this.selector.shouldComponentUpdate = false;
          };
          Connect.prototype.getWrappedInstance = function getWrappedInstance() {
            (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
            return this.wrappedInstance;
          };
          Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
            this.wrappedInstance = ref;
          };
          Connect.prototype.initSelector = function initSelector() {
            var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
            this.selector = makeSelectorStateful(sourceSelector, this.store);
            this.selector.run(this.props);
          };
          Connect.prototype.initSubscription = function initSubscription() {
            if (!shouldHandleStateChanges) return;
            var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
            this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));
            this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
          };
          Connect.prototype.onStateChange = function onStateChange() {
            this.selector.run(this.props);
            if (!this.selector.shouldComponentUpdate) {
              this.notifyNestedSubs();
            } else {
              this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
              this.setState(dummyState);
            }
          };
          Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
            this.componentDidUpdate = undefined;
            this.notifyNestedSubs();
          };
          Connect.prototype.isSubscribed = function isSubscribed() {
            return Boolean(this.subscription) && this.subscription.isSubscribed();
          };
          Connect.prototype.addExtraProps = function addExtraProps(props) {
            if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
            var withExtras = _extends({}, props);
            if (withRef) withExtras.ref = this.setWrappedInstance;
            if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
            if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
            return withExtras;
          };
          Connect.prototype.render = function render() {
            var selector = this.selector;
            selector.shouldComponentUpdate = false;
            if (selector.error) {
              throw selector.error;
            } else {
              return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
            }
          };
          return Connect;
        }(_react.Component);
        Connect.WrappedComponent = WrappedComponent;
        Connect.displayName = displayName;
        Connect.childContextTypes = childContextTypes;
        Connect.contextTypes = contextTypes;
        Connect.propTypes = contextTypes;
        if ('production' !== 'production') {
          Connect.prototype.componentWillUpdate = function componentWillUpdate() {
            var _this2 = this;
            if (this.version !== version) {
              this.version = version;
              this.initSelector();
              var oldListeners = [];
              if (this.subscription) {
                oldListeners = this.subscription.listeners.get();
                this.subscription.tryUnsubscribe();
              }
              this.initSubscription();
              if (shouldHandleStateChanges) {
                this.subscription.trySubscribe();
                oldListeners.forEach(function (listener) {
                  return _this2.subscription.listeners.subscribe(listener);
                });
              }
            }
          };
        }
        return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
      };
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-redux@5.0.7/lib/utils/shallowEqual.js', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.default = shallowEqual;
  var hasOwn = Object.prototype.hasOwnProperty;

  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) return false;

    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }
});
System.registerDynamic('npm:symbol-observable@1.2.0/lib/ponyfill.js', [], true, function ($__require, exports, module) {
	/* */
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};
});
System.registerDynamic('npm:symbol-observable@1.2.0/lib/index.js', ['npm:symbol-observable@1.2.0/lib/ponyfill.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var _ponyfill = $__require('npm:symbol-observable@1.2.0/lib/ponyfill.js');
  var _ponyfill2 = _interopRequireDefault(_ponyfill);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }
  var root;
  if (typeof self !== 'undefined') {
    root = self;
  } else if (typeof window !== 'undefined') {
    root = window;
  } else if (typeof global !== 'undefined') {
    root = global;
  } else if (typeof module !== 'undefined') {
    root = module;
  } else {
    root = Function('return this')();
  }
  var result = (0, _ponyfill2['default'])(root);
  exports['default'] = result;
});
System.registerDynamic("npm:symbol-observable@1.2.0.js", ["npm:symbol-observable@1.2.0/lib/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:symbol-observable@1.2.0/lib/index.js");
});
System.registerDynamic('npm:redux@4.0.0/lib/redux.js', ['npm:symbol-observable@1.2.0.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }
    var $$observable = _interopDefault($__require('npm:symbol-observable@1.2.0.js'));
    var ActionTypes = {
      INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
      REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
    };
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function isPlainObject(obj) {
      if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;
      var proto = obj;
      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }
      return Object.getPrototypeOf(obj) === proto;
    }
    function createStore(reducer, preloadedState, enhancer) {
      var _ref2;
      if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
      }
      if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
          throw new Error('Expected the enhancer to be a function.');
        }
        return enhancer(createStore)(reducer, preloadedState);
      }
      if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.');
      }
      var currentReducer = reducer;
      var currentState = preloadedState;
      var currentListeners = [];
      var nextListeners = currentListeners;
      var isDispatching = false;
      function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
          nextListeners = currentListeners.slice();
        }
      }
      function getState() {
        if (isDispatching) {
          throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
        }
        return currentState;
      }
      function subscribe(listener) {
        if (typeof listener !== 'function') {
          throw new Error('Expected the listener to be a function.');
        }
        if (isDispatching) {
          throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
        }
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
          if (!isSubscribed) {
            return;
          }
          if (isDispatching) {
            throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
          }
          isSubscribed = false;
          ensureCanMutateNextListeners();
          var index = nextListeners.indexOf(listener);
          nextListeners.splice(index, 1);
        };
      }
      function dispatch(action) {
        if (!isPlainObject(action)) {
          throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
        }
        if (typeof action.type === 'undefined') {
          throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
        }
        if (isDispatching) {
          throw new Error('Reducers may not dispatch actions.');
        }
        try {
          isDispatching = true;
          currentState = currentReducer(currentState, action);
        } finally {
          isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          listener();
        }
        return action;
      }
      function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
          throw new Error('Expected the nextReducer to be a function.');
        }
        currentReducer = nextReducer;
        dispatch({ type: ActionTypes.REPLACE });
      }
      function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = { subscribe: function subscribe(observer) {
            if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
              throw new TypeError('Expected the observer to be an object.');
            }
            function observeState() {
              if (observer.next) {
                observer.next(getState());
              }
            }
            observeState();
            var unsubscribe = outerSubscribe(observeState);
            return { unsubscribe: unsubscribe };
          } }, _ref[$$observable] = function () {
          return this;
        }, _ref;
      }
      dispatch({ type: ActionTypes.INIT });
      return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
      }, _ref2[$$observable] = observable, _ref2;
    }
    function warning(message) {
      if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (e) {}
    }
    function getUndefinedStateErrorMessage(key, action) {
      var actionType = action && action.type;
      var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';
      return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
    }
    function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
      var reducerKeys = Object.keys(reducers);
      var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
      if (reducerKeys.length === 0) {
        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
      }
      if (!isPlainObject(inputState)) {
        return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
      }
      var unexpectedKeys = Object.keys(inputState).filter(function (key) {
        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
      });
      unexpectedKeys.forEach(function (key) {
        unexpectedKeyCache[key] = true;
      });
      if (action && action.type === ActionTypes.REPLACE) return;
      if (unexpectedKeys.length > 0) {
        return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
      }
    }
    function assertReducerShape(reducers) {
      Object.keys(reducers).forEach(function (key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, { type: ActionTypes.INIT });
        if (typeof initialState === 'undefined') {
          throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
        }
        var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
        if (typeof reducer(undefined, { type: type }) === 'undefined') {
          throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
        }
      });
    }
    function combineReducers(reducers) {
      var reducerKeys = Object.keys(reducers);
      var finalReducers = {};
      for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if ('production' !== 'production') {
          if (typeof reducers[key] === 'undefined') {
            warning('No reducer provided for key "' + key + '"');
          }
        }
        if (typeof reducers[key] === 'function') {
          finalReducers[key] = reducers[key];
        }
      }
      var finalReducerKeys = Object.keys(finalReducers);
      var unexpectedKeyCache = void 0;
      if ('production' !== 'production') {
        unexpectedKeyCache = {};
      }
      var shapeAssertionError = void 0;
      try {
        assertReducerShape(finalReducers);
      } catch (e) {
        shapeAssertionError = e;
      }
      return function combination() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];
        if (shapeAssertionError) {
          throw shapeAssertionError;
        }
        if ('production' !== 'production') {
          var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
          if (warningMessage) {
            warning(warningMessage);
          }
        }
        var hasChanged = false;
        var nextState = {};
        for (var _i = 0; _i < finalReducerKeys.length; _i++) {
          var _key = finalReducerKeys[_i];
          var reducer = finalReducers[_key];
          var previousStateForKey = state[_key];
          var nextStateForKey = reducer(previousStateForKey, action);
          if (typeof nextStateForKey === 'undefined') {
            var errorMessage = getUndefinedStateErrorMessage(_key, action);
            throw new Error(errorMessage);
          }
          nextState[_key] = nextStateForKey;
          hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
      };
    }
    function bindActionCreator(actionCreator, dispatch) {
      return function () {
        return dispatch(actionCreator.apply(this, arguments));
      };
    }
    function bindActionCreators(actionCreators, dispatch) {
      if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
      }
      if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
        throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      }
      var keys = Object.keys(actionCreators);
      var boundActionCreators = {};
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
          boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
      }
      return boundActionCreators;
    }
    function compose() {
      for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }
      if (funcs.length === 0) {
        return function (arg) {
          return arg;
        };
      }
      if (funcs.length === 1) {
        return funcs[0];
      }
      return funcs.reduce(function (a, b) {
        return function () {
          return a(b.apply(undefined, arguments));
        };
      });
    }
    function applyMiddleware() {
      for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
        middlewares[_key] = arguments[_key];
      }
      return function (createStore) {
        return function () {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          var store = createStore.apply(undefined, args);
          var _dispatch = function dispatch() {
            throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
          };
          var middlewareAPI = {
            getState: store.getState,
            dispatch: function dispatch() {
              return _dispatch.apply(undefined, arguments);
            }
          };
          var chain = middlewares.map(function (middleware) {
            return middleware(middlewareAPI);
          });
          _dispatch = compose.apply(undefined, chain)(store.dispatch);
          return _extends({}, store, { dispatch: _dispatch });
        };
      };
    }
    function isCrushed() {}
    if ('production' !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
      warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
    }
    exports.createStore = createStore;
    exports.combineReducers = combineReducers;
    exports.bindActionCreators = bindActionCreators;
    exports.applyMiddleware = applyMiddleware;
    exports.compose = compose;
    exports.__DO_NOT_USE__ActionTypes = ActionTypes;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:redux@4.0.0.js", ["npm:redux@4.0.0/lib/redux.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:redux@4.0.0/lib/redux.js");
});
System.registerDynamic('npm:react-redux@5.0.7/lib/connect/mapDispatchToProps.js', ['npm:redux@4.0.0.js', 'npm:react-redux@5.0.7/lib/connect/wrapMapToProps.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
  exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
  exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
  var _redux = $__require('npm:redux@4.0.0.js');
  var _wrapMapToProps = $__require('npm:react-redux@5.0.7/lib/connect/wrapMapToProps.js');
  function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
    return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
  }
  function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
    return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
      return { dispatch: dispatch };
    }) : undefined;
  }
  function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
    return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
      return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
    }) : undefined;
  }
  exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];
});
System.registerDynamic('npm:react-redux@5.0.7/lib/connect/wrapMapToProps.js', ['npm:react-redux@5.0.7/lib/utils/verifyPlainObject.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
    exports.getDependsOnOwnProps = getDependsOnOwnProps;
    exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
    var _verifyPlainObject = $__require('npm:react-redux@5.0.7/lib/utils/verifyPlainObject.js');
    var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function wrapMapToPropsConstant(getConstant) {
      return function initConstantSelector(dispatch, options) {
        var constant = getConstant(dispatch, options);
        function constantSelector() {
          return constant;
        }
        constantSelector.dependsOnOwnProps = false;
        return constantSelector;
      };
    }
    function getDependsOnOwnProps(mapToProps) {
      return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
    }
    function wrapMapToPropsFunc(mapToProps, methodName) {
      return function initProxySelector(dispatch, _ref) {
        var displayName = _ref.displayName;
        var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
          return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
        };
        proxy.dependsOnOwnProps = true;
        proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
          proxy.mapToProps = mapToProps;
          proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
          var props = proxy(stateOrDispatch, ownProps);
          if (typeof props === 'function') {
            proxy.mapToProps = props;
            proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
            props = proxy(stateOrDispatch, ownProps);
          }
          if ('production' !== 'production') (0, _verifyPlainObject2.default)(props, displayName, methodName);
          return props;
        };
        return proxy;
      };
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-redux@5.0.7/lib/connect/mapStateToProps.js', ['npm:react-redux@5.0.7/lib/connect/wrapMapToProps.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
  exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
  var _wrapMapToProps = $__require('npm:react-redux@5.0.7/lib/connect/wrapMapToProps.js');
  function whenMapStateToPropsIsFunction(mapStateToProps) {
    return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
  }
  function whenMapStateToPropsIsMissing(mapStateToProps) {
    return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
      return {};
    }) : undefined;
  }
  exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];
});
System.registerDynamic('npm:lodash@4.17.10/_freeGlobal.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  module.exports = freeGlobal;
});
System.registerDynamic('npm:lodash@4.17.10/_root.js', ['npm:lodash@4.17.10/_freeGlobal.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var freeGlobal = $__require('npm:lodash@4.17.10/_freeGlobal.js');
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function('return this')();
  module.exports = root;
});
System.registerDynamic('npm:lodash@4.17.10/_Symbol.js', ['npm:lodash@4.17.10/_root.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var root = $__require('npm:lodash@4.17.10/_root.js');
  var Symbol = root.Symbol;
  module.exports = Symbol;
});
System.registerDynamic('npm:lodash@4.17.10/_getRawTag.js', ['npm:lodash@4.17.10/_Symbol.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var Symbol = $__require('npm:lodash@4.17.10/_Symbol.js');
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];
    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  module.exports = getRawTag;
});
System.registerDynamic("npm:lodash@4.17.10/_objectToString.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  module.exports = objectToString;
});
System.registerDynamic('npm:lodash@4.17.10/_baseGetTag.js', ['npm:lodash@4.17.10/_Symbol.js', 'npm:lodash@4.17.10/_getRawTag.js', 'npm:lodash@4.17.10/_objectToString.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var Symbol = $__require('npm:lodash@4.17.10/_Symbol.js'),
        getRawTag = $__require('npm:lodash@4.17.10/_getRawTag.js'),
        objectToString = $__require('npm:lodash@4.17.10/_objectToString.js');
    var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';
    var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
    function baseGetTag(value) {
        if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
});
System.registerDynamic("npm:lodash@4.17.10/_overArg.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  module.exports = overArg;
});
System.registerDynamic('npm:lodash@4.17.10/_getPrototype.js', ['npm:lodash@4.17.10/_overArg.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var overArg = $__require('npm:lodash@4.17.10/_overArg.js');
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  module.exports = getPrototype;
});
System.registerDynamic('npm:lodash@4.17.10/isObjectLike.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  module.exports = isObjectLike;
});
System.registerDynamic('npm:lodash@4.17.10/isPlainObject.js', ['npm:lodash@4.17.10/_baseGetTag.js', 'npm:lodash@4.17.10/_getPrototype.js', 'npm:lodash@4.17.10/isObjectLike.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var baseGetTag = $__require('npm:lodash@4.17.10/_baseGetTag.js'),
      getPrototype = $__require('npm:lodash@4.17.10/_getPrototype.js'),
      isObjectLike = $__require('npm:lodash@4.17.10/isObjectLike.js');
  var objectTag = '[object Object]';
  var funcProto = Function.prototype,
      objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  module.exports = isPlainObject;
});
System.registerDynamic('npm:react-redux@5.0.7/lib/utils/verifyPlainObject.js', ['npm:lodash@4.17.10/isPlainObject.js', 'npm:react-redux@5.0.7/lib/utils/warning.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.default = verifyPlainObject;
  var _isPlainObject = $__require('npm:lodash@4.17.10/isPlainObject.js');
  var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
  var _warning = $__require('npm:react-redux@5.0.7/lib/utils/warning.js');
  var _warning2 = _interopRequireDefault(_warning);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function verifyPlainObject(value, displayName, methodName) {
    if (!(0, _isPlainObject2.default)(value)) {
      (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
    }
  }
});
System.registerDynamic('npm:react-redux@5.0.7/lib/connect/mergeProps.js', ['npm:react-redux@5.0.7/lib/utils/verifyPlainObject.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    exports.defaultMergeProps = defaultMergeProps;
    exports.wrapMergePropsFunc = wrapMergePropsFunc;
    exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
    exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
    var _verifyPlainObject = $__require('npm:react-redux@5.0.7/lib/utils/verifyPlainObject.js');
    var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function defaultMergeProps(stateProps, dispatchProps, ownProps) {
      return _extends({}, ownProps, stateProps, dispatchProps);
    }
    function wrapMergePropsFunc(mergeProps) {
      return function initMergePropsProxy(dispatch, _ref) {
        var displayName = _ref.displayName,
            pure = _ref.pure,
            areMergedPropsEqual = _ref.areMergedPropsEqual;
        var hasRunOnce = false;
        var mergedProps = void 0;
        return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
          var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
          if (hasRunOnce) {
            if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
          } else {
            hasRunOnce = true;
            mergedProps = nextMergedProps;
            if ('production' !== 'production') (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
          }
          return mergedProps;
        };
      };
    }
    function whenMergePropsIsFunction(mergeProps) {
      return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
    }
    function whenMergePropsIsOmitted(mergeProps) {
      return !mergeProps ? function () {
        return defaultMergeProps;
      } : undefined;
    }
    exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-redux@5.0.7/lib/utils/warning.js', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.default = warning;
  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */
  function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /* eslint-enable no-console */
    try {
      // This error was thrown as a convenience so that if you enable
      // "break on all exceptions" in your console,
      // it would pause the execution at this line.
      throw new Error(message);
      /* eslint-disable no-empty */
    } catch (e) {}
    /* eslint-enable no-empty */
  }
});
System.registerDynamic('npm:react-redux@5.0.7/lib/connect/verifySubselectors.js', ['npm:react-redux@5.0.7/lib/utils/warning.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.default = verifySubselectors;
  var _warning = $__require('npm:react-redux@5.0.7/lib/utils/warning.js');
  var _warning2 = _interopRequireDefault(_warning);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function verify(selector, methodName, displayName) {
    if (!selector) {
      throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
    } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
      if (!selector.hasOwnProperty('dependsOnOwnProps')) {
        (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
      }
    }
  }
  function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
    verify(mapStateToProps, 'mapStateToProps', displayName);
    verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
    verify(mergeProps, 'mergeProps', displayName);
  }
});
System.registerDynamic('npm:react-redux@5.0.7/lib/connect/selectorFactory.js', ['npm:react-redux@5.0.7/lib/connect/verifySubselectors.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
    exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
    exports.default = finalPropsSelectorFactory;
    var _verifySubselectors = $__require('npm:react-redux@5.0.7/lib/connect/verifySubselectors.js');
    var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }
      return target;
    }
    function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
      return function impureFinalPropsSelector(state, ownProps) {
        return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
      };
    }
    function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
      var areStatesEqual = _ref.areStatesEqual,
          areOwnPropsEqual = _ref.areOwnPropsEqual,
          areStatePropsEqual = _ref.areStatePropsEqual;
      var hasRunAtLeastOnce = false;
      var state = void 0;
      var ownProps = void 0;
      var stateProps = void 0;
      var dispatchProps = void 0;
      var mergedProps = void 0;
      function handleFirstCall(firstState, firstOwnProps) {
        state = firstState;
        ownProps = firstOwnProps;
        stateProps = mapStateToProps(state, ownProps);
        dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        hasRunAtLeastOnce = true;
        return mergedProps;
      }
      function handleNewPropsAndNewState() {
        stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
      }
      function handleNewProps() {
        if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
      }
      function handleNewState() {
        var nextStateProps = mapStateToProps(state, ownProps);
        var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
        stateProps = nextStateProps;
        if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
      }
      function handleSubsequentCalls(nextState, nextOwnProps) {
        var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
        var stateChanged = !areStatesEqual(nextState, state);
        state = nextState;
        ownProps = nextOwnProps;
        if (propsChanged && stateChanged) return handleNewPropsAndNewState();
        if (propsChanged) return handleNewProps();
        if (stateChanged) return handleNewState();
        return mergedProps;
      }
      return function pureFinalPropsSelector(nextState, nextOwnProps) {
        return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
      };
    }
    function finalPropsSelectorFactory(dispatch, _ref2) {
      var initMapStateToProps = _ref2.initMapStateToProps,
          initMapDispatchToProps = _ref2.initMapDispatchToProps,
          initMergeProps = _ref2.initMergeProps,
          options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);
      var mapStateToProps = initMapStateToProps(dispatch, options);
      var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
      var mergeProps = initMergeProps(dispatch, options);
      if ('production' !== 'production') {
        (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
      }
      var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
      return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-redux@5.0.7/lib/connect/connect.js', ['npm:react-redux@5.0.7/lib/components/connectAdvanced.js', 'npm:react-redux@5.0.7/lib/utils/shallowEqual.js', 'npm:react-redux@5.0.7/lib/connect/mapDispatchToProps.js', 'npm:react-redux@5.0.7/lib/connect/mapStateToProps.js', 'npm:react-redux@5.0.7/lib/connect/mergeProps.js', 'npm:react-redux@5.0.7/lib/connect/selectorFactory.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  exports.createConnect = createConnect;
  var _connectAdvanced = $__require('npm:react-redux@5.0.7/lib/components/connectAdvanced.js');
  var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
  var _shallowEqual = $__require('npm:react-redux@5.0.7/lib/utils/shallowEqual.js');
  var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
  var _mapDispatchToProps = $__require('npm:react-redux@5.0.7/lib/connect/mapDispatchToProps.js');
  var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);
  var _mapStateToProps = $__require('npm:react-redux@5.0.7/lib/connect/mapStateToProps.js');
  var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);
  var _mergeProps = $__require('npm:react-redux@5.0.7/lib/connect/mergeProps.js');
  var _mergeProps2 = _interopRequireDefault(_mergeProps);
  var _selectorFactory = $__require('npm:react-redux@5.0.7/lib/connect/selectorFactory.js');
  var _selectorFactory2 = _interopRequireDefault(_selectorFactory);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }
    return target;
  }
  function match(arg, factories, name) {
    for (var i = factories.length - 1; i >= 0; i--) {
      var result = factories[i](arg);
      if (result) return result;
    }
    return function (dispatch, options) {
      throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
    };
  }
  function strictEqual(a, b) {
    return a === b;
  }
  function createConnect() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$connectHOC = _ref.connectHOC,
        connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
        _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
        mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
        _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
        mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
        _ref$mergePropsFactor = _ref.mergePropsFactories,
        mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
        _ref$selectorFactory = _ref.selectorFactory,
        selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;
    return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
      var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          _ref2$pure = _ref2.pure,
          pure = _ref2$pure === undefined ? true : _ref2$pure,
          _ref2$areStatesEqual = _ref2.areStatesEqual,
          areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
          _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
          areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
          _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
          areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
          _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
          areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
          extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);
      var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
      var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
      var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
      return connectHOC(selectorFactory, _extends({
        methodName: 'connect',
        getDisplayName: function getDisplayName(name) {
          return 'Connect(' + name + ')';
        },
        shouldHandleStateChanges: Boolean(mapStateToProps),
        initMapStateToProps: initMapStateToProps,
        initMapDispatchToProps: initMapDispatchToProps,
        initMergeProps: initMergeProps,
        pure: pure,
        areStatesEqual: areStatesEqual,
        areOwnPropsEqual: areOwnPropsEqual,
        areStatePropsEqual: areStatePropsEqual,
        areMergedPropsEqual: areMergedPropsEqual
      }, extraOptions));
    };
  }
  exports.default = createConnect();
});
System.registerDynamic('npm:react-redux@5.0.7/lib/index.js', ['npm:react-redux@5.0.7/lib/components/Provider.js', 'npm:react-redux@5.0.7/lib/components/connectAdvanced.js', 'npm:react-redux@5.0.7/lib/connect/connect.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.connect = exports.connectAdvanced = exports.createProvider = exports.Provider = undefined;
  var _Provider = $__require('npm:react-redux@5.0.7/lib/components/Provider.js');
  var _Provider2 = _interopRequireDefault(_Provider);
  var _connectAdvanced = $__require('npm:react-redux@5.0.7/lib/components/connectAdvanced.js');
  var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
  var _connect = $__require('npm:react-redux@5.0.7/lib/connect/connect.js');
  var _connect2 = _interopRequireDefault(_connect);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports.Provider = _Provider2.default;
  exports.createProvider = _Provider.createProvider;
  exports.connectAdvanced = _connectAdvanced2.default;
  exports.connect = _connect2.default;
});
System.registerDynamic("npm:react-redux@5.0.7.js", ["npm:react-redux@5.0.7/lib/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:react-redux@5.0.7/lib/index.js");
});
System.register('config/types.js', [], function (_export) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', [{
				name: 'Text',
				value: 'text'
			}, {
				name: 'Number',
				value: 'number'
			}, {
				name: 'Telephone (tel)',
				value: 'tel'
			}, {
				name: 'Email',
				value: 'email'
			}, {
				name: 'URL',
				value: 'url'
			}, {
				name: 'Search',
				value: 'search'
			}, {
				name: 'Datetime',
				value: 'datetime'
			}, {
				name: 'Date',
				value: 'date'
			}, {
				name: 'Time',
				value: 'time'
			}, {
				name: 'Month',
				value: 'month'
			}, {
				name: 'Week',
				value: 'week'
			}, {
				name: 'Color',
				value: 'color'
			}, {
				name: 'Range',
				value: 'range'
			}, {
				name: 'Password',
				value: 'password'
			}]);
		}
	};
});

System.register('config/patterns.js', [], function (_export) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', [{
				name: 'No Pattern',
				value: ''
			}, {
				name: 'Numbers only - [0-9]*',
				value: '[0-9]*'
			}, {
				name: 'Short Zip Code - (\d{5}?)',
				value: '(\d{5}?)'
			}, {
				name: 'Extended Zip Code - (\d{5}([\-]\d{4})?)',
				value: '(\d{5}([\-]\d{4})?)'
			}, {
				name: 'Credit/Bank Account - [0-9]{13,16}',
				value: '[0-9]{13,16}'
			}, {
				name: 'Alphanumeric (No Spaces) - [a-zA-Z0-9]+',
				value: '[a-zA-Z0-9]+'
			}, {
				name: 'Alphanumeric (With Spaces) - [a-zA-Z0-9\s]+',
				value: '[a-zA-Z0-9\s]+'
			}]);
		}
	};
});

System.register('components/inputItem.js', ['npm:react@16.4.1.js', 'npm:react-redux@5.0.7.js', 'actions/index.js', 'config/types.js', 'config/patterns.js'], function (_export) {
	'use strict';

	var React, connect, _editInputItem, _removeInputItem, types, patterns, submitButtonClasses, requiredClasses, mapDispatchToProps, onFormSubmit, onInputChange, setValidityMessage, renderInputString, InputItem;

	return {
		setters: [function (_npmReact1641Js) {
			React = _npmReact1641Js['default'];
		}, function (_npmReactRedux507Js) {
			connect = _npmReactRedux507Js.connect;
		}, function (_actionsIndexJs) {
			_editInputItem = _actionsIndexJs.editInputItem;
			_removeInputItem = _actionsIndexJs.removeInputItem;
		}, function (_configTypesJs) {
			types = _configTypesJs['default'];
		}, function (_configPatternsJs) {
			patterns = _configPatternsJs['default'];
		}],
		execute: function () {
			submitButtonClasses = 'button input-item__submit-button';
			requiredClasses = 'input-item__control input-item__control--inline';

			mapDispatchToProps = function mapDispatchToProps(dispatch) {
				return {
					editInputItem: function editInputItem(payload) {
						return dispatch(_editInputItem(payload));
					},
					removeInputItem: function removeInputItem(id) {
						return dispatch(_removeInputItem(id));
					}
				};
			};

			onFormSubmit = function onFormSubmit(e, props) {
				e.preventDefault();
				setValidityMessage(props, true);
			};

			onInputChange = function onInputChange(e, _ref) {
				var id = _ref.id;
				var editInputItem = _ref.editInputItem;

				var target = e.target;
				var name = target.name;
				var value = target.type === 'checkbox' ? target.checked : target.value;
				var editVals = {
					id: id,
					isValid: false
				};
				if (target.classList.contains('input-item__display-input')) {
					editVals.value = target.value;
				} else {
					editVals[name] = value;
				}
				editInputItem(editVals);
			};

			setValidityMessage = function setValidityMessage(_ref2, isValid) {
				var id = _ref2.id;
				var editInputItem = _ref2.editInputItem;

				editInputItem({
					id: id,
					isValid: isValid
				});
			};

			renderInputString = function renderInputString(props) {
				var typeStr = ' type="' + props.inputType + '"';
				var patternStr = props.inputPattern ? ' pattern="' + props.inputPattern + '"' : '';
				var requiredStr = props.isRequired ? ' required' : '';
				return 'input' + typeStr + patternStr + requiredStr;
			};

			InputItem = function InputItem(props) {
				return React.createElement(
					'li',
					{ className: 'input-item', id: props.id, style: props.style },
					React.createElement(
						'form',
						{ onSubmit: function (e) {
								return onFormSubmit(e, props);
							} },
						props.itemCount > 1 ? React.createElement(
							'button',
							{
								className: 'input-item__remove-button',
								type: 'button',
								onClick: function () {
									return props.removeInputItem(props.id);
								} },
							'×'
						) : '',
						React.createElement(
							'div',
							{ className: 'input-item__display' },
							React.createElement(
								'span',
								{ className: 'input-item__validity-display' },
								props.isValid === true ? 'Form submitted! No validation errors.' : ''
							),
							React.createElement('input', {
								className: 'input-item__display-input',
								type: props.inputType,
								pattern: props.inputPattern,
								required: props.isRequired,
								value: props.value,
								onFocus: function () {
									return setValidityMessage(props, false);
								},
								onChange: function (e) {
									return onInputChange(e, props);
								} }),
							React.createElement(
								'pre',
								null,
								'<',
								renderInputString(props),
								'>'
							),
							React.createElement(
								'button',
								{ className: submitButtonClasses, type: 'submit' },
								'Test This Input'
							)
						),
						React.createElement(
							'div',
							{ className: 'input-item__controls' },
							React.createElement(
								'div',
								{ className: 'input-item__control' },
								React.createElement(
									'label',
									{ htmlFor: 'inputType' },
									'Input Type:'
								),
								React.createElement(
									'select',
									{
										name: 'inputType',
										id: 'inputType',
										value: props.inputType,
										onChange: function (e) {
											return onInputChange(e, props);
										} },
									types.map(function (type) {
										return React.createElement(
											'option',
											{ key: type.value, value: type.value },
											type.name
										);
									})
								)
							),
							React.createElement(
								'div',
								{ className: 'input-item__control' },
								React.createElement(
									'label',
									{ htmlFor: 'inputPattern' },
									'Pattern:'
								),
								React.createElement(
									'select',
									{
										name: 'inputPattern',
										id: 'inputPattern',
										value: props.inputPattern,
										onChange: function (e) {
											return onInputChange(e, props);
										} },
									patterns.map(function (pattern) {
										return React.createElement(
											'option',
											{ key: pattern.value, value: pattern.value },
											pattern.name
										);
									})
								)
							),
							React.createElement(
								'div',
								{ className: requiredClasses },
								React.createElement('input', {
									name: 'isRequired',
									id: 'isRequired',
									type: 'checkbox',
									checked: props.isRequired,
									onChange: function (e) {
										return onInputChange(e, props);
									} }),
								' ',
								React.createElement(
									'label',
									{ htmlFor: 'isRequired' },
									'Required'
								)
							)
						)
					)
				);
			};

			_export('default', connect(null, mapDispatchToProps)(InputItem));
		}
	};
});

System.registerDynamic("npm:dom-helpers@3.3.1/class/hasClass.js", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hasClass;
  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }
  module.exports = exports["default"];
});
System.registerDynamic('npm:dom-helpers@3.3.1/class/addClass.js', ['npm:dom-helpers@3.3.1/class/hasClass.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = addClass;
  var _hasClass = $__require('npm:dom-helpers@3.3.1/class/hasClass.js');
  var _hasClass2 = _interopRequireDefault(_hasClass);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
  }
  module.exports = exports['default'];
});
System.registerDynamic('npm:dom-helpers@3.3.1/class/removeClass.js', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }

  module.exports = function removeClass(element, className) {
    if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  };
});
System.registerDynamic('npm:react-transition-group@2.3.1/CSSTransition.js', ['npm:prop-types@15.6.2.js', 'npm:dom-helpers@3.3.1/class/addClass.js', 'npm:dom-helpers@3.3.1/class/removeClass.js', 'npm:react@16.4.1.js', 'npm:react-transition-group@2.3.1/Transition.js', 'npm:react-transition-group@2.3.1/utils/PropTypes.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _propTypes = $__require('npm:prop-types@15.6.2.js');
    var PropTypes = _interopRequireWildcard(_propTypes);
    var _addClass = $__require('npm:dom-helpers@3.3.1/class/addClass.js');
    var _addClass2 = _interopRequireDefault(_addClass);
    var _removeClass = $__require('npm:dom-helpers@3.3.1/class/removeClass.js');
    var _removeClass2 = _interopRequireDefault(_removeClass);
    var _react = $__require('npm:react@16.4.1.js');
    var _react2 = _interopRequireDefault(_react);
    var _Transition = $__require('npm:react-transition-group@2.3.1/Transition.js');
    var _Transition2 = _interopRequireDefault(_Transition);
    var _PropTypes = $__require('npm:react-transition-group@2.3.1/utils/PropTypes.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var addClass = function addClass(node, classes) {
      return node && classes && classes.split(' ').forEach(function (c) {
        return (0, _addClass2.default)(node, c);
      });
    };
    var removeClass = function removeClass(node, classes) {
      return node && classes && classes.split(' ').forEach(function (c) {
        return (0, _removeClass2.default)(node, c);
      });
    };
    var propTypes = _extends({}, _Transition2.default.propTypes, {
      classNames: _PropTypes.classNamesShape,
      onEnter: PropTypes.func,
      onEntering: PropTypes.func,
      onEntered: PropTypes.func,
      onExit: PropTypes.func,
      onExiting: PropTypes.func,
      onExited: PropTypes.func
    });
    var CSSTransition = function (_React$Component) {
      _inherits(CSSTransition, _React$Component);
      function CSSTransition() {
        var _temp, _this, _ret;
        _classCallCheck(this, CSSTransition);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onEnter = function (node, appearing) {
          var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
              className = _this$getClassNames.className;
          _this.removeClasses(node, 'exit');
          addClass(node, className);
          if (_this.props.onEnter) {
            _this.props.onEnter(node);
          }
        }, _this.onEntering = function (node, appearing) {
          var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
              activeClassName = _this$getClassNames2.activeClassName;
          _this.reflowAndAddClass(node, activeClassName);
          if (_this.props.onEntering) {
            _this.props.onEntering(node);
          }
        }, _this.onEntered = function (node, appearing) {
          var _this$getClassNames3 = _this.getClassNames('enter'),
              doneClassName = _this$getClassNames3.doneClassName;
          _this.removeClasses(node, appearing ? 'appear' : 'enter');
          addClass(node, doneClassName);
          if (_this.props.onEntered) {
            _this.props.onEntered(node);
          }
        }, _this.onExit = function (node) {
          var _this$getClassNames4 = _this.getClassNames('exit'),
              className = _this$getClassNames4.className;
          _this.removeClasses(node, 'appear');
          _this.removeClasses(node, 'enter');
          addClass(node, className);
          if (_this.props.onExit) {
            _this.props.onExit(node);
          }
        }, _this.onExiting = function (node) {
          var _this$getClassNames5 = _this.getClassNames('exit'),
              activeClassName = _this$getClassNames5.activeClassName;
          _this.reflowAndAddClass(node, activeClassName);
          if (_this.props.onExiting) {
            _this.props.onExiting(node);
          }
        }, _this.onExited = function (node) {
          var _this$getClassNames6 = _this.getClassNames('exit'),
              doneClassName = _this$getClassNames6.doneClassName;
          _this.removeClasses(node, 'exit');
          addClass(node, doneClassName);
          if (_this.props.onExited) {
            _this.props.onExited(node);
          }
        }, _this.getClassNames = function (type) {
          var classNames = _this.props.classNames;
          var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
          var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
          var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
          return {
            className: className,
            activeClassName: activeClassName,
            doneClassName: doneClassName
          };
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      CSSTransition.prototype.removeClasses = function removeClasses(node, type) {
        var _getClassNames = this.getClassNames(type),
            className = _getClassNames.className,
            activeClassName = _getClassNames.activeClassName,
            doneClassName = _getClassNames.doneClassName;
        className && removeClass(node, className);
        activeClassName && removeClass(node, activeClassName);
        doneClassName && removeClass(node, doneClassName);
      };
      CSSTransition.prototype.reflowAndAddClass = function reflowAndAddClass(node, className) {
        node && node.scrollTop;
        addClass(node, className);
      };
      CSSTransition.prototype.render = function render() {
        var props = _extends({}, this.props);
        delete props.classNames;
        return _react2.default.createElement(_Transition2.default, _extends({}, props, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      };
      return CSSTransition;
    }(_react2.default.Component);
    CSSTransition.propTypes = 'production' !== "production" ? propTypes : {};
    exports.default = CSSTransition;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-transition-group@2.3.1/ReplaceTransition.js', ['npm:prop-types@15.6.2.js', 'npm:react@16.4.1.js', 'npm:react-dom@16.4.0.js', 'npm:react-transition-group@2.3.1/TransitionGroup.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    var _propTypes = $__require('npm:prop-types@15.6.2.js');
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _react = $__require('npm:react@16.4.1.js');
    var _react2 = _interopRequireDefault(_react);
    var _reactDom = $__require('npm:react-dom@16.4.0.js');
    var _TransitionGroup = $__require('npm:react-transition-group@2.3.1/TransitionGroup.js');
    var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var propTypes = {
      in: _propTypes2.default.bool.isRequired,
      children: function children(props, propName) {
        if (_react2.default.Children.count(props[propName]) !== 2) return new Error('"' + propName + '" must be exactly two transition components.');
        return null;
      }
    };
    var ReplaceTransition = function (_React$Component) {
      _inherits(ReplaceTransition, _React$Component);
      function ReplaceTransition() {
        var _temp, _this, _ret;
        _classCallCheck(this, ReplaceTransition);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
      }
      ReplaceTransition.prototype.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
        var _child$props;
        var children = this.props.children;
        var child = _react2.default.Children.toArray(children)[idx];
        if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
        if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
      };
      ReplaceTransition.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            inProp = _props.in,
            props = _objectWithoutProperties(_props, ['children', 'in']);
        var _React$Children$toArr = _react2.default.Children.toArray(children),
            first = _React$Children$toArr[0],
            second = _React$Children$toArr[1];
        delete props.onEnter;
        delete props.onEntering;
        delete props.onEntered;
        delete props.onExit;
        delete props.onExiting;
        delete props.onExited;
        return _react2.default.createElement(_TransitionGroup2.default, props, inProp ? _react2.default.cloneElement(first, {
          key: 'first',
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onEntered: this.handleEntered
        }) : _react2.default.cloneElement(second, {
          key: 'second',
          onEnter: this.handleExit,
          onEntering: this.handleExiting,
          onEntered: this.handleExited
        }));
      };
      return ReplaceTransition;
    }(_react2.default.Component);
    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;
      this.handleEnter = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return _this2.handleLifecycle('onEnter', 0, args);
      };
      this.handleEntering = function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        return _this2.handleLifecycle('onEntering', 0, args);
      };
      this.handleEntered = function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        return _this2.handleLifecycle('onEntered', 0, args);
      };
      this.handleExit = function () {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }
        return _this2.handleLifecycle('onExit', 1, args);
      };
      this.handleExiting = function () {
        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
        return _this2.handleLifecycle('onExiting', 1, args);
      };
      this.handleExited = function () {
        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }
        return _this2.handleLifecycle('onExited', 1, args);
      };
    };
    ReplaceTransition.propTypes = 'production' !== "production" ? propTypes : {};
    exports.default = ReplaceTransition;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-transition-group@2.3.1/utils/ChildMapping.js', ['npm:react@16.4.1.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.getChildMapping = getChildMapping;
  exports.mergeChildMappings = mergeChildMappings;

  var _react = $__require('npm:react@16.4.1.js');

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */
  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) _react.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }

  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    }

    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = Object.create(null);

    var pendingKeys = [];
    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i = void 0;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }

    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }
});
System.registerDynamic('npm:react-transition-group@2.3.1/TransitionGroup.js', ['npm:prop-types@15.6.2.js', 'npm:react@16.4.1.js', 'npm:react-transition-group@2.3.1/utils/ChildMapping.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _propTypes = $__require('npm:prop-types@15.6.2.js');
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _react = $__require('npm:react@16.4.1.js');
    var _react2 = _interopRequireDefault(_react);
    var _ChildMapping = $__require('npm:react-transition-group@2.3.1/utils/ChildMapping.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var values = Object.values || function (obj) {
      return Object.keys(obj).map(function (k) {
        return obj[k];
      });
    };
    var propTypes = {
      component: _propTypes2.default.any,
      children: _propTypes2.default.node,
      appear: _propTypes2.default.bool,
      enter: _propTypes2.default.bool,
      exit: _propTypes2.default.bool,
      childFactory: _propTypes2.default.func
    };
    var defaultProps = {
      component: 'div',
      childFactory: function childFactory(child) {
        return child;
      }
    };
    var TransitionGroup = function (_React$Component) {
      _inherits(TransitionGroup, _React$Component);
      function TransitionGroup(props, context) {
        _classCallCheck(this, TransitionGroup);
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
        _this.state = { children: (0, _ChildMapping.getChildMapping)(props.children, function (child) {
            return (0, _react.cloneElement)(child, {
              onExited: _this.handleExited.bind(_this, child),
              in: true,
              appear: _this.getProp(child, 'appear'),
              enter: _this.getProp(child, 'enter'),
              exit: _this.getProp(child, 'exit')
            });
          }) };
        return _this;
      }
      TransitionGroup.prototype.getChildContext = function getChildContext() {
        return { transitionGroup: { isMounting: !this.appeared } };
      };
      TransitionGroup.prototype.getProp = function getProp(child, prop) {
        var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props;
        return props[prop] != null ? props[prop] : child.props[prop];
      };
      TransitionGroup.prototype.componentDidMount = function componentDidMount() {
        this.appeared = true;
      };
      TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this2 = this;
        var prevChildMapping = this.state.children;
        var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
        var children = (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping);
        Object.keys(children).forEach(function (key) {
          var child = children[key];
          if (!(0, _react.isValidElement)(child)) return;
          var hasPrev = key in prevChildMapping;
          var hasNext = key in nextChildMapping;
          var prevChild = prevChildMapping[key];
          var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in;
          if (hasNext && (!hasPrev || isLeaving)) {
            children[key] = (0, _react.cloneElement)(child, {
              onExited: _this2.handleExited.bind(_this2, child),
              in: true,
              exit: _this2.getProp(child, 'exit', nextProps),
              enter: _this2.getProp(child, 'enter', nextProps)
            });
          } else if (!hasNext && hasPrev && !isLeaving) {
            children[key] = (0, _react.cloneElement)(child, { in: false });
          } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
            children[key] = (0, _react.cloneElement)(child, {
              onExited: _this2.handleExited.bind(_this2, child),
              in: prevChild.props.in,
              exit: _this2.getProp(child, 'exit', nextProps),
              enter: _this2.getProp(child, 'enter', nextProps)
            });
          }
        });
        this.setState({ children: children });
      };
      TransitionGroup.prototype.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
        if (child.key in currentChildMapping) return;
        if (child.props.onExited) {
          child.props.onExited(node);
        }
        this.setState(function (state) {
          var children = _extends({}, state.children);
          delete children[child.key];
          return { children: children };
        });
      };
      TransitionGroup.prototype.render = function render() {
        var _props = this.props,
            Component = _props.component,
            childFactory = _props.childFactory,
            props = _objectWithoutProperties(_props, ['component', 'childFactory']);
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component === null) {
          return children;
        }
        return _react2.default.createElement(Component, props, children);
      };
      return TransitionGroup;
    }(_react2.default.Component);
    TransitionGroup.childContextTypes = { transitionGroup: _propTypes2.default.object.isRequired };
    TransitionGroup.propTypes = 'production' !== "production" ? propTypes : {};
    TransitionGroup.defaultProps = defaultProps;
    exports.default = TransitionGroup;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:react-dom@16.4.0/cjs/react-dom.production.min.js", ["npm:fbjs@0.8.17/lib/invariant.js", "npm:react@16.4.1.js", "npm:fbjs@0.8.17/lib/ExecutionEnvironment.js", "npm:object-assign@4.1.1.js", "npm:fbjs@0.8.17/lib/emptyFunction.js", "npm:fbjs@0.8.17/lib/getActiveElement.js", "npm:fbjs@0.8.17/lib/shallowEqual.js", "npm:fbjs@0.8.17/lib/containsNode.js", "npm:fbjs@0.8.17/lib/emptyObject.js"], true, function ($__require, exports, module) {
  /** @license React v16.4.0
   * react-dom.production.min.js
   *
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  /*
   Modernizr 3.0.0pre (Custom Build) | MIT
  */
  'use strict';
  var global = this || self,
      GLOBAL = global;
  var aa = $__require("npm:fbjs@0.8.17/lib/invariant.js"),
      ca = $__require("npm:react@16.4.1.js"),
      m = $__require("npm:fbjs@0.8.17/lib/ExecutionEnvironment.js"),
      p = $__require("npm:object-assign@4.1.1.js"),
      v = $__require("npm:fbjs@0.8.17/lib/emptyFunction.js"),
      da = $__require("npm:fbjs@0.8.17/lib/getActiveElement.js"),
      ea = $__require("npm:fbjs@0.8.17/lib/shallowEqual.js"),
      fa = $__require("npm:fbjs@0.8.17/lib/containsNode.js"),
      ha = $__require("npm:fbjs@0.8.17/lib/emptyObject.js");
  function A(a) {
    for (var b = arguments.length - 1, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 0; d < b; d++) c += "&args[]=" + encodeURIComponent(arguments[d + 1]);aa(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", c);
  }ca ? void 0 : A("227");
  function ia(a, b, c, d, e, f, g, h, k) {
    this._hasCaughtError = !1;this._caughtError = null;var n = Array.prototype.slice.call(arguments, 3);try {
      b.apply(c, n);
    } catch (r) {
      this._caughtError = r, this._hasCaughtError = !0;
    }
  }
  var B = { _caughtError: null, _hasCaughtError: !1, _rethrowError: null, _hasRethrowError: !1, invokeGuardedCallback: function (a, b, c, d, e, f, g, h, k) {
      ia.apply(B, arguments);
    }, invokeGuardedCallbackAndCatchFirstError: function (a, b, c, d, e, f, g, h, k) {
      B.invokeGuardedCallback.apply(this, arguments);if (B.hasCaughtError()) {
        var n = B.clearCaughtError();B._hasRethrowError || (B._hasRethrowError = !0, B._rethrowError = n);
      }
    }, rethrowCaughtError: function () {
      return ka.apply(B, arguments);
    }, hasCaughtError: function () {
      return B._hasCaughtError;
    }, clearCaughtError: function () {
      if (B._hasCaughtError) {
        var a = B._caughtError;B._caughtError = null;B._hasCaughtError = !1;return a;
      }A("198");
    } };function ka() {
    if (B._hasRethrowError) {
      var a = B._rethrowError;B._rethrowError = null;B._hasRethrowError = !1;throw a;
    }
  }var la = null,
      ma = {};
  function na() {
    if (la) for (var a in ma) {
      var b = ma[a],
          c = la.indexOf(a);-1 < c ? void 0 : A("96", a);if (!oa[c]) {
        b.extractEvents ? void 0 : A("97", a);oa[c] = b;c = b.eventTypes;for (var d in c) {
          var e = void 0;var f = c[d],
              g = b,
              h = d;pa.hasOwnProperty(h) ? A("99", h) : void 0;pa[h] = f;var k = f.phasedRegistrationNames;if (k) {
            for (e in k) k.hasOwnProperty(e) && qa(k[e], g, h);e = !0;
          } else f.registrationName ? (qa(f.registrationName, g, h), e = !0) : e = !1;e ? void 0 : A("98", d, a);
        }
      }
    }
  }
  function qa(a, b, c) {
    ra[a] ? A("100", a) : void 0;ra[a] = b;sa[a] = b.eventTypes[c].dependencies;
  }var oa = [],
      pa = {},
      ra = {},
      sa = {};function ta(a) {
    la ? A("101") : void 0;la = Array.prototype.slice.call(a);na();
  }function ua(a) {
    var b = !1,
        c;for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];ma.hasOwnProperty(c) && ma[c] === d || (ma[c] ? A("102", c) : void 0, ma[c] = d, b = !0);
    }b && na();
  }
  var va = { plugins: oa, eventNameDispatchConfigs: pa, registrationNameModules: ra, registrationNameDependencies: sa, possibleRegistrationNames: null, injectEventPluginOrder: ta, injectEventPluginsByName: ua },
      wa = null,
      xa = null,
      ya = null;function za(a, b, c, d) {
    b = a.type || "unknown-event";a.currentTarget = ya(d);B.invokeGuardedCallbackAndCatchFirstError(b, c, void 0, a);a.currentTarget = null;
  }
  function Aa(a, b) {
    null == b ? A("30") : void 0;if (null == a) return b;if (Array.isArray(a)) {
      if (Array.isArray(b)) return a.push.apply(a, b), a;a.push(b);return a;
    }return Array.isArray(b) ? [a].concat(b) : [a, b];
  }function Ba(a, b, c) {
    Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
  }var Ca = null;
  function Da(a, b) {
    if (a) {
      var c = a._dispatchListeners,
          d = a._dispatchInstances;if (Array.isArray(c)) for (var e = 0; e < c.length && !a.isPropagationStopped(); e++) za(a, b, c[e], d[e]);else c && za(a, b, c, d);a._dispatchListeners = null;a._dispatchInstances = null;a.isPersistent() || a.constructor.release(a);
    }
  }function Ea(a) {
    return Da(a, !0);
  }function Fa(a) {
    return Da(a, !1);
  }var Ga = { injectEventPluginOrder: ta, injectEventPluginsByName: ua };
  function Ha(a, b) {
    var c = a.stateNode;if (!c) return null;var d = wa(c);if (!d) return null;c = d[b];a: switch (b) {case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));a = !d;break a;default:
        a = !1;}if (a) return null;c && "function" !== typeof c ? A("231", b, typeof c) : void 0;
    return c;
  }function Ia(a, b) {
    null !== a && (Ca = Aa(Ca, a));a = Ca;Ca = null;a && (b ? Ba(a, Ea) : Ba(a, Fa), Ca ? A("95") : void 0, B.rethrowCaughtError());
  }function Ja(a, b, c, d) {
    for (var e = null, f = 0; f < oa.length; f++) {
      var g = oa[f];g && (g = g.extractEvents(a, b, c, d)) && (e = Aa(e, g));
    }Ia(e, !1);
  }var Ka = { injection: Ga, getListener: Ha, runEventsInBatch: Ia, runExtractedEventsInBatch: Ja },
      La = Math.random().toString(36).slice(2),
      C = "__reactInternalInstance$" + La,
      Ma = "__reactEventHandlers$" + La;
  function Na(a) {
    if (a[C]) return a[C];for (; !a[C];) if (a.parentNode) a = a.parentNode;else return null;a = a[C];return 5 === a.tag || 6 === a.tag ? a : null;
  }function Oa(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;A("33");
  }function Pa(a) {
    return a[Ma] || null;
  }var Qa = { precacheFiberNode: function (a, b) {
      b[C] = a;
    }, getClosestInstanceFromNode: Na, getInstanceFromNode: function (a) {
      a = a[C];return !a || 5 !== a.tag && 6 !== a.tag ? null : a;
    }, getNodeFromInstance: Oa, getFiberCurrentPropsFromNode: Pa, updateFiberProps: function (a, b) {
      a[Ma] = b;
    } };
  function F(a) {
    do a = a.return; while (a && 5 !== a.tag);return a ? a : null;
  }function Ra(a, b, c) {
    for (var d = []; a;) d.push(a), a = F(a);for (a = d.length; 0 < a--;) b(d[a], "captured", c);for (a = 0; a < d.length; a++) b(d[a], "bubbled", c);
  }function Sa(a, b, c) {
    if (b = Ha(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = Aa(c._dispatchListeners, b), c._dispatchInstances = Aa(c._dispatchInstances, a);
  }function Ta(a) {
    a && a.dispatchConfig.phasedRegistrationNames && Ra(a._targetInst, Sa, a);
  }
  function Ua(a) {
    if (a && a.dispatchConfig.phasedRegistrationNames) {
      var b = a._targetInst;b = b ? F(b) : null;Ra(b, Sa, a);
    }
  }function Va(a, b, c) {
    a && c && c.dispatchConfig.registrationName && (b = Ha(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = Aa(c._dispatchListeners, b), c._dispatchInstances = Aa(c._dispatchInstances, a));
  }function Xa(a) {
    a && a.dispatchConfig.registrationName && Va(a._targetInst, null, a);
  }function Ya(a) {
    Ba(a, Ta);
  }
  function Za(a, b, c, d) {
    if (c && d) a: {
      var e = c;for (var f = d, g = 0, h = e; h; h = F(h)) g++;h = 0;for (var k = f; k; k = F(k)) h++;for (; 0 < g - h;) e = F(e), g--;for (; 0 < h - g;) f = F(f), h--;for (; g--;) {
        if (e === f || e === f.alternate) break a;e = F(e);f = F(f);
      }e = null;
    } else e = null;f = e;for (e = []; c && c !== f;) {
      g = c.alternate;if (null !== g && g === f) break;e.push(c);c = F(c);
    }for (c = []; d && d !== f;) {
      g = d.alternate;if (null !== g && g === f) break;c.push(d);d = F(d);
    }for (d = 0; d < e.length; d++) Va(e[d], "bubbled", a);for (a = c.length; 0 < a--;) Va(c[a], "captured", b);
  }
  var $a = { accumulateTwoPhaseDispatches: Ya, accumulateTwoPhaseDispatchesSkipTarget: function (a) {
      Ba(a, Ua);
    }, accumulateEnterLeaveDispatches: Za, accumulateDirectDispatches: function (a) {
      Ba(a, Xa);
    } };function ab(a, b) {
    var c = {};c[a.toLowerCase()] = b.toLowerCase();c["Webkit" + a] = "webkit" + b;c["Moz" + a] = "moz" + b;c["ms" + a] = "MS" + b;c["O" + a] = "o" + b.toLowerCase();return c;
  }
  var bb = { animationend: ab("Animation", "AnimationEnd"), animationiteration: ab("Animation", "AnimationIteration"), animationstart: ab("Animation", "AnimationStart"), transitionend: ab("Transition", "TransitionEnd") },
      cb = {},
      db = {};m.canUseDOM && (db = document.createElement("div").style, "AnimationEvent" in window || (delete bb.animationend.animation, delete bb.animationiteration.animation, delete bb.animationstart.animation), "TransitionEvent" in window || delete bb.transitionend.transition);
  function eb(a) {
    if (cb[a]) return cb[a];if (!bb[a]) return a;var b = bb[a],
        c;for (c in b) if (b.hasOwnProperty(c) && c in db) return cb[a] = b[c];return a;
  }var fb = eb("animationend"),
      gb = eb("animationiteration"),
      hb = eb("animationstart"),
      ib = eb("transitionend"),
      jb = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
      kb = null;
  function lb() {
    !kb && m.canUseDOM && (kb = "textContent" in document.documentElement ? "textContent" : "innerText");return kb;
  }var G = { _root: null, _startText: null, _fallbackText: null };function mb() {
    if (G._fallbackText) return G._fallbackText;var a,
        b = G._startText,
        c = b.length,
        d,
        e = nb(),
        f = e.length;for (a = 0; a < c && b[a] === e[a]; a++);var g = c - a;for (d = 1; d <= g && b[c - d] === e[f - d]; d++);G._fallbackText = e.slice(a, 1 < d ? 1 - d : void 0);return G._fallbackText;
  }function nb() {
    return "value" in G._root ? G._root.value : G._root[lb()];
  }
  var ob = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
      pb = { type: null, target: null, currentTarget: v.thatReturnsNull, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function (a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: null, isTrusted: null };
  function H(a, b, c, d) {
    this.dispatchConfig = a;this._targetInst = b;this.nativeEvent = c;a = this.constructor.Interface;for (var e in a) a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? v.thatReturnsTrue : v.thatReturnsFalse;this.isPropagationStopped = v.thatReturnsFalse;return this;
  }
  p(H.prototype, { preventDefault: function () {
      this.defaultPrevented = !0;var a = this.nativeEvent;a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = v.thatReturnsTrue);
    }, stopPropagation: function () {
      var a = this.nativeEvent;a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = v.thatReturnsTrue);
    }, persist: function () {
      this.isPersistent = v.thatReturnsTrue;
    }, isPersistent: v.thatReturnsFalse,
    destructor: function () {
      var a = this.constructor.Interface,
          b;for (b in a) this[b] = null;for (a = 0; a < ob.length; a++) this[ob[a]] = null;
    } });H.Interface = pb;H.extend = function (a) {
    function b() {}function c() {
      return d.apply(this, arguments);
    }var d = this;b.prototype = d.prototype;var e = new b();p(e, c.prototype);c.prototype = e;c.prototype.constructor = c;c.Interface = p({}, d.Interface, a);c.extend = d.extend;qb(c);return c;
  };qb(H);
  function rb(a, b, c, d) {
    if (this.eventPool.length) {
      var e = this.eventPool.pop();this.call(e, a, b, c, d);return e;
    }return new this(a, b, c, d);
  }function sb(a) {
    a instanceof this ? void 0 : A("223");a.destructor();10 > this.eventPool.length && this.eventPool.push(a);
  }function qb(a) {
    a.eventPool = [];a.getPooled = rb;a.release = sb;
  }var tb = H.extend({ data: null }),
      ub = H.extend({ data: null }),
      vb = [9, 13, 27, 32],
      wb = m.canUseDOM && "CompositionEvent" in window,
      xb = null;m.canUseDOM && "documentMode" in document && (xb = document.documentMode);
  var yb = m.canUseDOM && "TextEvent" in window && !xb,
      zb = m.canUseDOM && (!wb || xb && 8 < xb && 11 >= xb),
      Ab = String.fromCharCode(32),
      Bb = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart",
        captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } },
      Cb = !1;
  function Db(a, b) {
    switch (a) {case "keyup":
        return -1 !== vb.indexOf(b.keyCode);case "keydown":
        return 229 !== b.keyCode;case "keypress":case "mousedown":case "blur":
        return !0;default:
        return !1;}
  }function Eb(a) {
    a = a.detail;return "object" === typeof a && "data" in a ? a.data : null;
  }var Fb = !1;function Gb(a, b) {
    switch (a) {case "compositionend":
        return Eb(b);case "keypress":
        if (32 !== b.which) return null;Cb = !0;return Ab;case "textInput":
        return a = b.data, a === Ab && Cb ? null : a;default:
        return null;}
  }
  function Hb(a, b) {
    if (Fb) return "compositionend" === a || !wb && Db(a, b) ? (a = mb(), G._root = null, G._startText = null, G._fallbackText = null, Fb = !1, a) : null;switch (a) {case "paste":
        return null;case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length) return b.char;if (b.which) return String.fromCharCode(b.which);
        }return null;case "compositionend":
        return zb ? null : b.data;default:
        return null;}
  }
  var Ib = { eventTypes: Bb, extractEvents: function (a, b, c, d) {
      var e = void 0;var f = void 0;if (wb) b: {
        switch (a) {case "compositionstart":
            e = Bb.compositionStart;break b;case "compositionend":
            e = Bb.compositionEnd;break b;case "compositionupdate":
            e = Bb.compositionUpdate;break b;}e = void 0;
      } else Fb ? Db(a, c) && (e = Bb.compositionEnd) : "keydown" === a && 229 === c.keyCode && (e = Bb.compositionStart);e ? (zb && (Fb || e !== Bb.compositionStart ? e === Bb.compositionEnd && Fb && (f = mb()) : (G._root = d, G._startText = nb(), Fb = !0)), e = tb.getPooled(e, b, c, d), f ? e.data = f : (f = Eb(c), null !== f && (e.data = f)), Ya(e), f = e) : f = null;(a = yb ? Gb(a, c) : Hb(a, c)) ? (b = ub.getPooled(Bb.beforeInput, b, c, d), b.data = a, Ya(b)) : b = null;return null === f ? b : null === b ? f : [f, b];
    } },
      Jb = null,
      Kb = { injectFiberControlledHostComponent: function (a) {
      Jb = a;
    } },
      Lb = null,
      Mb = null;function Nb(a) {
    if (a = xa(a)) {
      Jb && "function" === typeof Jb.restoreControlledState ? void 0 : A("194");var b = wa(a.stateNode);Jb.restoreControlledState(a.stateNode, a.type, b);
    }
  }function Ob(a) {
    Lb ? Mb ? Mb.push(a) : Mb = [a] : Lb = a;
  }
  function Pb() {
    return null !== Lb || null !== Mb;
  }function Qb() {
    if (Lb) {
      var a = Lb,
          b = Mb;Mb = Lb = null;Nb(a);if (b) for (a = 0; a < b.length; a++) Nb(b[a]);
    }
  }var Rb = { injection: Kb, enqueueStateRestore: Ob, needsStateRestore: Pb, restoreStateIfNeeded: Qb };function Sb(a, b) {
    return a(b);
  }function Tb(a, b, c) {
    return a(b, c);
  }function Ub() {}var Vb = !1;function Wb(a, b) {
    if (Vb) return a(b);Vb = !0;try {
      return Sb(a, b);
    } finally {
      Vb = !1, Pb() && (Ub(), Qb());
    }
  }
  var Xb = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };function Yb(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();return "input" === b ? !!Xb[a.type] : "textarea" === b ? !0 : !1;
  }function Zb(a) {
    a = a.target || window;a.correspondingUseElement && (a = a.correspondingUseElement);return 3 === a.nodeType ? a.parentNode : a;
  }
  function $b(a, b) {
    if (!m.canUseDOM || b && !("addEventListener" in document)) return !1;a = "on" + a;b = a in document;b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);return b;
  }function ac(a) {
    var b = a.type;return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
  }
  function bc(a) {
    var b = ac(a) ? "checked" : "value",
        c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
        d = "" + a[b];if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
      var e = c.get,
          f = c.set;Object.defineProperty(a, b, { configurable: !0, get: function () {
          return e.call(this);
        }, set: function (a) {
          d = "" + a;f.call(this, a);
        } });Object.defineProperty(a, b, { enumerable: c.enumerable });return { getValue: function () {
          return d;
        }, setValue: function (a) {
          d = "" + a;
        }, stopTracking: function () {
          a._valueTracker = null;delete a[b];
        } };
    }
  }function cc(a) {
    a._valueTracker || (a._valueTracker = bc(a));
  }function dc(a) {
    if (!a) return !1;var b = a._valueTracker;if (!b) return !0;var c = b.getValue();var d = "";a && (d = ac(a) ? a.checked ? "true" : "false" : a.value);a = d;return a !== c ? (b.setValue(a), !0) : !1;
  }
  var ec = ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      I = "function" === typeof Symbol && Symbol.for,
      fc = I ? Symbol.for("react.element") : 60103,
      gc = I ? Symbol.for("react.portal") : 60106,
      hc = I ? Symbol.for("react.fragment") : 60107,
      ic = I ? Symbol.for("react.strict_mode") : 60108,
      jc = I ? Symbol.for("react.profiler") : 60114,
      mc = I ? Symbol.for("react.provider") : 60109,
      nc = I ? Symbol.for("react.context") : 60110,
      oc = I ? Symbol.for("react.async_mode") : 60111,
      pc = I ? Symbol.for("react.forward_ref") : 60112,
      qc = I ? Symbol.for("react.timeout") : 60113,
      rc = "function" === typeof Symbol && Symbol.iterator;function sc(a) {
    if (null === a || "undefined" === typeof a) return null;a = rc && a[rc] || a["@@iterator"];return "function" === typeof a ? a : null;
  }
  function tc(a) {
    var b = a.type;if ("function" === typeof b) return b.displayName || b.name;if ("string" === typeof b) return b;switch (b) {case oc:
        return "AsyncMode";case nc:
        return "Context.Consumer";case hc:
        return "ReactFragment";case gc:
        return "ReactPortal";case jc:
        return "Profiler(" + a.pendingProps.id + ")";case mc:
        return "Context.Provider";case ic:
        return "StrictMode";case qc:
        return "Timeout";}if ("object" === typeof b && null !== b) switch (b.$$typeof) {case pc:
        return a = b.render.displayName || b.render.name || "", "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef";}return null;
  }function vc(a) {
    var b = "";do {
      a: switch (a.tag) {case 0:case 1:case 2:case 5:
          var c = a._debugOwner,
              d = a._debugSource;var e = tc(a);var f = null;c && (f = tc(c));c = d;e = "\n    in " + (e || "Unknown") + (c ? " (at " + c.fileName.replace(/^.*[\\\/]/, "") + ":" + c.lineNumber + ")" : f ? " (created by " + f + ")" : "");break a;default:
          e = "";}b += e;a = a.return;
    } while (a);return b;
  }
  var wc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      xc = {},
      yc = {};function zc(a) {
    if (yc.hasOwnProperty(a)) return !0;if (xc.hasOwnProperty(a)) return !1;if (wc.test(a)) return yc[a] = !0;xc[a] = !0;return !1;
  }
  function Ac(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;switch (typeof b) {case "function":case "symbol":
        return !0;case "boolean":
        if (d) return !1;if (null !== c) return !c.acceptsBooleans;a = a.toLowerCase().slice(0, 5);return "data-" !== a && "aria-" !== a;default:
        return !1;}
  }function Bc(a, b, c, d) {
    if (null === b || "undefined" === typeof b || Ac(a, b, c, d)) return !0;if (d) return !1;if (null !== c) switch (c.type) {case 3:
        return !b;case 4:
        return !1 === b;case 5:
        return isNaN(b);case 6:
        return isNaN(b) || 1 > b;}return !1;
  }
  function J(a, b, c, d, e) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;this.attributeName = d;this.attributeNamespace = e;this.mustUseProperty = c;this.propertyName = a;this.type = b;
  }var K = {};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
    K[a] = new J(a, 0, !1, a, null);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
    var b = a[0];K[b] = new J(b, 1, !1, a[1], null);
  });["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
    K[a] = new J(a, 2, !1, a.toLowerCase(), null);
  });["autoReverse", "externalResourcesRequired", "preserveAlpha"].forEach(function (a) {
    K[a] = new J(a, 2, !1, a, null);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
    K[a] = new J(a, 3, !1, a.toLowerCase(), null);
  });["checked", "multiple", "muted", "selected"].forEach(function (a) {
    K[a] = new J(a, 3, !0, a.toLowerCase(), null);
  });["capture", "download"].forEach(function (a) {
    K[a] = new J(a, 4, !1, a.toLowerCase(), null);
  });
  ["cols", "rows", "size", "span"].forEach(function (a) {
    K[a] = new J(a, 6, !1, a.toLowerCase(), null);
  });["rowSpan", "start"].forEach(function (a) {
    K[a] = new J(a, 5, !1, a.toLowerCase(), null);
  });var Cc = /[\-:]([a-z])/g;function Dc(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
    var b = a.replace(Cc, Dc);K[b] = new J(b, 1, !1, a, null);
  });"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
    var b = a.replace(Cc, Dc);K[b] = new J(b, 1, !1, a, "http://www.w3.org/1999/xlink");
  });["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
    var b = a.replace(Cc, Dc);K[b] = new J(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace");
  });K.tabIndex = new J("tabIndex", 1, !1, "tabindex", null);
  function Ec(a, b, c, d) {
    var e = K.hasOwnProperty(b) ? K[b] : null;var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;f || (Bc(b, c, e, d) && (c = null), d || null === e ? zc(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
  }
  function Fc(a, b) {
    var c = b.checked;return p({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
  }function Gc(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue,
        d = null != b.checked ? b.checked : b.defaultChecked;c = Hc(null != b.value ? b.value : c);a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
  }function Ic(a, b) {
    b = b.checked;null != b && Ec(a, "checked", b, !1);
  }
  function Jc(a, b) {
    Ic(a, b);var c = Hc(b.value);if (null != c) if ("number" === b.type) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);b.hasOwnProperty("value") ? Kc(a, b.type, c) : b.hasOwnProperty("defaultValue") && Kc(a, b.type, Hc(b.defaultValue));null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
  }
  function Lc(a, b) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) "" === a.value && (a.value = "" + a._wrapperState.initialValue), a.defaultValue = "" + a._wrapperState.initialValue;b = a.name;"" !== b && (a.name = "");a.defaultChecked = !a.defaultChecked;a.defaultChecked = !a.defaultChecked;"" !== b && (a.name = b);
  }function Kc(a, b, c) {
    if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }
  function Hc(a) {
    switch (typeof a) {case "boolean":case "number":case "object":case "string":case "undefined":
        return a;default:
        return "";}
  }var Mc = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };function Nc(a, b, c) {
    a = H.getPooled(Mc.change, a, b, c);a.type = "change";Ob(c);Ya(a);return a;
  }var Oc = null,
      Pc = null;function Qc(a) {
    Ia(a, !1);
  }function Rc(a) {
    var b = Oa(a);if (dc(b)) return a;
  }
  function Sc(a, b) {
    if ("change" === a) return b;
  }var Tc = !1;m.canUseDOM && (Tc = $b("input") && (!document.documentMode || 9 < document.documentMode));function Uc() {
    Oc && (Oc.detachEvent("onpropertychange", Vc), Pc = Oc = null);
  }function Vc(a) {
    "value" === a.propertyName && Rc(Pc) && (a = Nc(Pc, a, Zb(a)), Wb(Qc, a));
  }function Wc(a, b, c) {
    "focus" === a ? (Uc(), Oc = b, Pc = c, Oc.attachEvent("onpropertychange", Vc)) : "blur" === a && Uc();
  }function Xc(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return Rc(Pc);
  }
  function Yc(a, b) {
    if ("click" === a) return Rc(b);
  }function Zc(a, b) {
    if ("input" === a || "change" === a) return Rc(b);
  }
  var $c = { eventTypes: Mc, _isInputEventSupported: Tc, extractEvents: function (a, b, c, d) {
      var e = b ? Oa(b) : window,
          f = void 0,
          g = void 0,
          h = e.nodeName && e.nodeName.toLowerCase();"select" === h || "input" === h && "file" === e.type ? f = Sc : Yb(e) ? Tc ? f = Zc : (f = Xc, g = Wc) : (h = e.nodeName) && "input" === h.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (f = Yc);if (f && (f = f(a, b))) return Nc(f, c, d);g && g(a, e, b);"blur" === a && null != b && (a = b._wrapperState || e._wrapperState) && a.controlled && "number" === e.type && Kc(e, "number", e.value);
    } },
      ad = H.extend({ view: null,
    detail: null }),
      bd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };function cd(a) {
    var b = this.nativeEvent;return b.getModifierState ? b.getModifierState(a) : (a = bd[a]) ? !!b[a] : !1;
  }function dd() {
    return cd;
  }
  var ed = ad.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: dd, button: null, buttons: null, relatedTarget: function (a) {
      return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
    } }),
      fd = ed.extend({ pointerId: null, width: null, height: null, pressure: null, tiltX: null, tiltY: null, pointerType: null, isPrimary: null }),
      gd = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] },
    mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] } },
      hd = { eventTypes: gd, extractEvents: function (a, b, c, d) {
      var e = "mouseover" === a || "pointerover" === a,
          f = "mouseout" === a || "pointerout" === a;if (e && (c.relatedTarget || c.fromElement) || !f && !e) return null;e = d.window === d ? d : (e = d.ownerDocument) ? e.defaultView || e.parentWindow : window;f ? (f = b, b = (b = c.relatedTarget || c.toElement) ? Na(b) : null) : f = null;if (f === b) return null;var g = void 0,
          h = void 0,
          k = void 0,
          n = void 0;if ("mouseout" === a || "mouseover" === a) g = ed, h = gd.mouseLeave, k = gd.mouseEnter, n = "mouse";else if ("pointerout" === a || "pointerover" === a) g = fd, h = gd.pointerLeave, k = gd.pointerEnter, n = "pointer";a = null == f ? e : Oa(f);e = null == b ? e : Oa(b);h = g.getPooled(h, f, c, d);h.type = n + "leave";h.target = a;h.relatedTarget = e;c = g.getPooled(k, b, c, d);c.type = n + "enter";c.target = e;c.relatedTarget = a;Za(h, c, f, b);return [h, c];
    } };function id(a) {
    var b = a;if (a.alternate) for (; b.return;) b = b.return;else {
      if (0 !== (b.effectTag & 2)) return 1;for (; b.return;) if (b = b.return, 0 !== (b.effectTag & 2)) return 1;
    }return 3 === b.tag ? 2 : 3;
  }function jd(a) {
    2 !== id(a) ? A("188") : void 0;
  }
  function kd(a) {
    var b = a.alternate;if (!b) return b = id(a), 3 === b ? A("188") : void 0, 1 === b ? null : a;for (var c = a, d = b;;) {
      var e = c.return,
          f = e ? e.alternate : null;if (!e || !f) break;if (e.child === f.child) {
        for (var g = e.child; g;) {
          if (g === c) return jd(e), a;if (g === d) return jd(e), b;g = g.sibling;
        }A("188");
      }if (c.return !== d.return) c = e, d = f;else {
        g = !1;for (var h = e.child; h;) {
          if (h === c) {
            g = !0;c = e;d = f;break;
          }if (h === d) {
            g = !0;d = e;c = f;break;
          }h = h.sibling;
        }if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;c = f;d = e;break;
            }if (h === d) {
              g = !0;d = f;c = e;break;
            }h = h.sibling;
          }g ? void 0 : A("189");
        }
      }c.alternate !== d ? A("190") : void 0;
    }3 !== c.tag ? A("188") : void 0;return c.stateNode.current === c ? a : b;
  }function ld(a) {
    a = kd(a);if (!a) return null;for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;if (b.child) b.child.return = b, b = b.child;else {
        if (b === a) break;for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;b = b.return;
        }b.sibling.return = b.return;b = b.sibling;
      }
    }return null;
  }
  function md(a) {
    a = kd(a);if (!a) return null;for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;if (b.child && 4 !== b.tag) b.child.return = b, b = b.child;else {
        if (b === a) break;for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;b = b.return;
        }b.sibling.return = b.return;b = b.sibling;
      }
    }return null;
  }var nd = H.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
      od = H.extend({ clipboardData: function (a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } }),
      pd = ad.extend({ relatedTarget: null });
  function qd(a) {
    var b = a.keyCode;"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;10 === a && (a = 13);return 32 <= a || 13 === a ? a : 0;
  }
  var rd = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
      sd = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4",
    116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
      td = ad.extend({ key: function (a) {
      if (a.key) {
        var b = rd[a.key] || a.key;if ("Unidentified" !== b) return b;
      }return "keypress" === a.type ? (a = qd(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? sd[a.keyCode] || "Unidentified" : "";
    }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: dd, charCode: function (a) {
      return "keypress" === a.type ? qd(a) : 0;
    }, keyCode: function (a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function (a) {
      return "keypress" === a.type ? qd(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } }),
      ud = ed.extend({ dataTransfer: null }),
      vd = ad.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: dd }),
      wd = H.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }),
      xd = ed.extend({ deltaX: function (a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    }, deltaY: function (a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    }, deltaZ: null, deltaMode: null }),
      yd = [["abort", "abort"], [fb, "animationEnd"], [gb, "animationIteration"], [hb, "animationStart"], ["canplay", "canPlay"], ["canplaythrough", "canPlayThrough"], ["drag", "drag"], ["dragenter", "dragEnter"], ["dragexit", "dragExit"], ["dragleave", "dragLeave"], ["dragover", "dragOver"], ["durationchange", "durationChange"], ["emptied", "emptied"], ["encrypted", "encrypted"], ["ended", "ended"], ["error", "error"], ["gotpointercapture", "gotPointerCapture"], ["load", "load"], ["loadeddata", "loadedData"], ["loadedmetadata", "loadedMetadata"], ["loadstart", "loadStart"], ["lostpointercapture", "lostPointerCapture"], ["mousemove", "mouseMove"], ["mouseout", "mouseOut"], ["mouseover", "mouseOver"], ["playing", "playing"], ["pointermove", "pointerMove"], ["pointerout", "pointerOut"], ["pointerover", "pointerOver"], ["progress", "progress"], ["scroll", "scroll"], ["seeking", "seeking"], ["stalled", "stalled"], ["suspend", "suspend"], ["timeupdate", "timeUpdate"], ["toggle", "toggle"], ["touchmove", "touchMove"], [ib, "transitionEnd"], ["waiting", "waiting"], ["wheel", "wheel"]],
      zd = {},
      Ad = {};function Bd(a, b) {
    var c = a[0];a = a[1];var d = "on" + (a[0].toUpperCase() + a.slice(1));b = { phasedRegistrationNames: { bubbled: d, captured: d + "Capture" }, dependencies: [c], isInteractive: b };zd[a] = b;Ad[c] = b;
  }
  [["blur", "blur"], ["cancel", "cancel"], ["click", "click"], ["close", "close"], ["contextmenu", "contextMenu"], ["copy", "copy"], ["cut", "cut"], ["dblclick", "doubleClick"], ["dragend", "dragEnd"], ["dragstart", "dragStart"], ["drop", "drop"], ["focus", "focus"], ["input", "input"], ["invalid", "invalid"], ["keydown", "keyDown"], ["keypress", "keyPress"], ["keyup", "keyUp"], ["mousedown", "mouseDown"], ["mouseup", "mouseUp"], ["paste", "paste"], ["pause", "pause"], ["play", "play"], ["pointercancel", "pointerCancel"], ["pointerdown", "pointerDown"], ["pointerup", "pointerUp"], ["ratechange", "rateChange"], ["reset", "reset"], ["seeked", "seeked"], ["submit", "submit"], ["touchcancel", "touchCancel"], ["touchend", "touchEnd"], ["touchstart", "touchStart"], ["volumechange", "volumeChange"]].forEach(function (a) {
    Bd(a, !0);
  });yd.forEach(function (a) {
    Bd(a, !1);
  });
  var Cd = { eventTypes: zd, isInteractiveTopLevelEventType: function (a) {
      a = Ad[a];return void 0 !== a && !0 === a.isInteractive;
    }, extractEvents: function (a, b, c, d) {
      var e = Ad[a];if (!e) return null;switch (a) {case "keypress":
          if (0 === qd(c)) return null;case "keydown":case "keyup":
          a = td;break;case "blur":case "focus":
          a = pd;break;case "click":
          if (2 === c.button) return null;case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":
          a = ed;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":
          a = ud;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":
          a = vd;break;case fb:case gb:case hb:
          a = nd;break;case ib:
          a = wd;break;case "scroll":
          a = ad;break;case "wheel":
          a = xd;break;case "copy":case "cut":case "paste":
          a = od;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":
          a = fd;break;default:
          a = H;}b = a.getPooled(e, b, c, d);Ya(b);return b;
    } },
      Dd = Cd.isInteractiveTopLevelEventType,
      Ed = [];function Fd(a) {
    var b = a.targetInst;do {
      if (!b) {
        a.ancestors.push(b);break;
      }var c;for (c = b; c.return;) c = c.return;c = 3 !== c.tag ? null : c.stateNode.containerInfo;if (!c) break;a.ancestors.push(b);b = Na(c);
    } while (b);for (c = 0; c < a.ancestors.length; c++) b = a.ancestors[c], Ja(a.topLevelType, b, a.nativeEvent, Zb(a.nativeEvent));
  }var Gd = !0;function Id(a) {
    Gd = !!a;
  }function L(a, b) {
    if (!b) return null;var c = (Dd(a) ? Jd : Kd).bind(null, a);b.addEventListener(a, c, !1);
  }
  function Ld(a, b) {
    if (!b) return null;var c = (Dd(a) ? Jd : Kd).bind(null, a);b.addEventListener(a, c, !0);
  }function Jd(a, b) {
    Tb(Kd, a, b);
  }function Kd(a, b) {
    if (Gd) {
      var c = Zb(b);c = Na(c);null === c || "number" !== typeof c.tag || 2 === id(c) || (c = null);if (Ed.length) {
        var d = Ed.pop();d.topLevelType = a;d.nativeEvent = b;d.targetInst = c;a = d;
      } else a = { topLevelType: a, nativeEvent: b, targetInst: c, ancestors: [] };try {
        Wb(Fd, a);
      } finally {
        a.topLevelType = null, a.nativeEvent = null, a.targetInst = null, a.ancestors.length = 0, 10 > Ed.length && Ed.push(a);
      }
    }
  }
  var Md = { get _enabled() {
      return Gd;
    }, setEnabled: Id, isEnabled: function () {
      return Gd;
    }, trapBubbledEvent: L, trapCapturedEvent: Ld, dispatchEvent: Kd },
      Nd = {},
      Od = 0,
      Pd = "_reactListenersID" + ("" + Math.random()).slice(2);function Qd(a) {
    Object.prototype.hasOwnProperty.call(a, Pd) || (a[Pd] = Od++, Nd[a[Pd]] = {});return Nd[a[Pd]];
  }function Rd(a) {
    for (; a && a.firstChild;) a = a.firstChild;return a;
  }
  function Sd(a, b) {
    var c = Rd(a);a = 0;for (var d; c;) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;if (a <= b && d >= b) return { node: c, offset: b - a };a = d;
      }a: {
        for (; c;) {
          if (c.nextSibling) {
            c = c.nextSibling;break a;
          }c = c.parentNode;
        }c = void 0;
      }c = Rd(c);
    }
  }function Td(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();return b && ("input" === b && "text" === a.type || "textarea" === b || "true" === a.contentEditable);
  }
  var Ud = m.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
      Vd = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
      Wd = null,
      Xd = null,
      Yd = null,
      Zd = !1;
  function $d(a, b) {
    if (Zd || null == Wd || Wd !== da()) return null;var c = Wd;"selectionStart" in c && Td(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : window.getSelection ? (c = window.getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }) : c = void 0;return Yd && ea(Yd, c) ? null : (Yd = c, a = H.getPooled(Vd.select, Xd, a, b), a.type = "select", a.target = Wd, Ya(a), a);
  }
  var ae = { eventTypes: Vd, extractEvents: function (a, b, c, d) {
      var e = d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument,
          f;if (!(f = !e)) {
        a: {
          e = Qd(e);f = sa.onSelect;for (var g = 0; g < f.length; g++) {
            var h = f[g];if (!e.hasOwnProperty(h) || !e[h]) {
              e = !1;break a;
            }
          }e = !0;
        }f = !e;
      }if (f) return null;e = b ? Oa(b) : window;switch (a) {case "focus":
          if (Yb(e) || "true" === e.contentEditable) Wd = e, Xd = b, Yd = null;break;case "blur":
          Yd = Xd = Wd = null;break;case "mousedown":
          Zd = !0;break;case "contextmenu":case "mouseup":
          return Zd = !1, $d(c, d);case "selectionchange":
          if (Ud) break;
        case "keydown":case "keyup":
          return $d(c, d);}return null;
    } };Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa = Qa.getFiberCurrentPropsFromNode;xa = Qa.getInstanceFromNode;ya = Qa.getNodeFromInstance;Ga.injectEventPluginsByName({ SimpleEventPlugin: Cd, EnterLeaveEventPlugin: hd, ChangeEventPlugin: $c, SelectEventPlugin: ae, BeforeInputEventPlugin: Ib });var be = void 0;
  be = "object" === typeof performance && "function" === typeof performance.now ? function () {
    return performance.now();
  } : function () {
    return Date.now();
  };var ce = void 0,
      de = void 0;
  if (m.canUseDOM) {
    var ee = [],
        fe = 0,
        ge = {},
        he = -1,
        ie = !1,
        je = !1,
        ke = 0,
        le = 33,
        me = 33,
        ne = { didTimeout: !1, timeRemaining: function () {
        var a = ke - be();return 0 < a ? a : 0;
      } },
        oe = function (a, b) {
      if (ge[b]) try {
        a(ne);
      } finally {
        delete ge[b];
      }
    },
        pe = "__reactIdleCallback$" + Math.random().toString(36).slice(2);window.addEventListener("message", function (a) {
      if (a.source === window && a.data === pe && (ie = !1, 0 !== ee.length)) {
        if (0 !== ee.length && (a = be(), !(-1 === he || he > a))) {
          he = -1;ne.didTimeout = !0;for (var b = 0, c = ee.length; b < c; b++) {
            var d = ee[b],
                e = d.timeoutTime;-1 !== e && e <= a ? oe(d.scheduledCallback, d.callbackId) : -1 !== e && (-1 === he || e < he) && (he = e);
          }
        }for (a = be(); 0 < ke - a && 0 < ee.length;) a = ee.shift(), ne.didTimeout = !1, oe(a.scheduledCallback, a.callbackId), a = be();0 < ee.length && !je && (je = !0, requestAnimationFrame(qe));
      }
    }, !1);var qe = function (a) {
      je = !1;var b = a - ke + me;b < me && le < me ? (8 > b && (b = 8), me = b < le ? le : b) : le = b;ke = a + me;ie || (ie = !0, window.postMessage(pe, "*"));
    };ce = function (a, b) {
      var c = -1;null != b && "number" === typeof b.timeout && (c = be() + b.timeout);if (-1 === he || -1 !== c && c < he) he = c;fe++;b = fe;ee.push({ scheduledCallback: a,
        callbackId: b, timeoutTime: c });ge[b] = !0;je || (je = !0, requestAnimationFrame(qe));return b;
    };de = function (a) {
      delete ge[a];
    };
  } else {
    var re = 0,
        se = {};ce = function (a) {
      var b = re++,
          c = setTimeout(function () {
        a({ timeRemaining: function () {
            return Infinity;
          }, didTimeout: !1 });
      });se[b] = c;return b;
    };de = function (a) {
      var b = se[a];delete se[a];clearTimeout(b);
    };
  }function te(a) {
    var b = "";ca.Children.forEach(a, function (a) {
      null == a || "string" !== typeof a && "number" !== typeof a || (b += a);
    });return b;
  }
  function ue(a, b) {
    a = p({ children: void 0 }, b);if (b = te(b.children)) a.children = b;return a;
  }function ve(a, b, c, d) {
    a = a.options;if (b) {
      b = {};for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    } else {
      c = "" + c;b = null;for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = !0;d && (a[e].defaultSelected = !0);return;
        }null !== b || a[e].disabled || (b = a[e]);
      }null !== b && (b.selected = !0);
    }
  }
  function we(a, b) {
    var c = b.value;a._wrapperState = { initialValue: null != c ? c : b.defaultValue, wasMultiple: !!b.multiple };
  }function xe(a, b) {
    null != b.dangerouslySetInnerHTML ? A("91") : void 0;return p({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }function ye(a, b) {
    var c = b.value;null == c && (c = b.defaultValue, b = b.children, null != b && (null != c ? A("92") : void 0, Array.isArray(b) && (1 >= b.length ? void 0 : A("93"), b = b[0]), c = "" + b), null == c && (c = ""));a._wrapperState = { initialValue: "" + c };
  }
  function ze(a, b) {
    var c = b.value;null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && (a.defaultValue = c));null != b.defaultValue && (a.defaultValue = b.defaultValue);
  }function Ae(a) {
    var b = a.textContent;b === a._wrapperState.initialValue && (a.value = b);
  }var Be = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function Ce(a) {
    switch (a) {case "svg":
        return "http://www.w3.org/2000/svg";case "math":
        return "http://www.w3.org/1998/Math/MathML";default:
        return "http://www.w3.org/1999/xhtml";}
  }function De(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? Ce(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
  }
  var Ee = void 0,
      Fe = function (a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function () {
        return a(b, c, d, e);
      });
    } : a;
  }(function (a, b) {
    if (a.namespaceURI !== Be.svg || "innerHTML" in a) a.innerHTML = b;else {
      Ee = Ee || document.createElement("div");Ee.innerHTML = "<svg>" + b + "</svg>";for (b = Ee.firstChild; a.firstChild;) a.removeChild(a.firstChild);for (; b.firstChild;) a.appendChild(b.firstChild);
    }
  });
  function Ge(a, b) {
    if (b) {
      var c = a.firstChild;if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;return;
      }
    }a.textContent = b;
  }
  var He = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0,
    stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
      Ie = ["Webkit", "ms", "Moz", "O"];Object.keys(He).forEach(function (a) {
    Ie.forEach(function (b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);He[b] = He[a];
    });
  });
  function Je(a, b) {
    a = a.style;for (var c in b) if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--");var e = c;var f = b[c];e = null == f || "boolean" === typeof f || "" === f ? "" : d || "number" !== typeof f || 0 === f || He.hasOwnProperty(e) && He[e] ? ("" + f).trim() : f + "px";"float" === c && (c = "cssFloat");d ? a.setProperty(c, e) : a[c] = e;
    }
  }var Ke = p({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Le(a, b, c) {
    b && (Ke[a] && (null != b.children || null != b.dangerouslySetInnerHTML ? A("137", a, c()) : void 0), null != b.dangerouslySetInnerHTML && (null != b.children ? A("60") : void 0, "object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML ? void 0 : A("61")), null != b.style && "object" !== typeof b.style ? A("62", c()) : void 0);
  }
  function Me(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;switch (a) {case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":
        return !1;default:
        return !0;}
  }var Ne = v.thatReturns("");
  function Oe(a, b) {
    a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;var c = Qd(a);b = sa[b];for (var d = 0; d < b.length; d++) {
      var e = b[d];if (!c.hasOwnProperty(e) || !c[e]) {
        switch (e) {case "scroll":
            Ld("scroll", a);break;case "focus":case "blur":
            Ld("focus", a);Ld("blur", a);c.blur = !0;c.focus = !0;break;case "cancel":case "close":
            $b(e, !0) && Ld(e, a);break;case "invalid":case "submit":case "reset":
            break;default:
            -1 === jb.indexOf(e) && L(e, a);}c[e] = !0;
      }
    }
  }
  function Pe(a, b, c, d) {
    c = 9 === c.nodeType ? c : c.ownerDocument;d === Be.html && (d = Ce(a));d === Be.html ? "script" === a ? (a = c.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : a = "string" === typeof b.is ? c.createElement(a, { is: b.is }) : c.createElement(a) : a = c.createElementNS(d, a);return a;
  }function Qe(a, b) {
    return (9 === b.nodeType ? b : b.ownerDocument).createTextNode(a);
  }
  function Re(a, b, c, d) {
    var e = Me(b, c);switch (b) {case "iframe":case "object":
        L("load", a);var f = c;break;case "video":case "audio":
        for (f = 0; f < jb.length; f++) L(jb[f], a);f = c;break;case "source":
        L("error", a);f = c;break;case "img":case "image":case "link":
        L("error", a);L("load", a);f = c;break;case "form":
        L("reset", a);L("submit", a);f = c;break;case "details":
        L("toggle", a);f = c;break;case "input":
        Gc(a, c);f = Fc(a, c);L("invalid", a);Oe(d, "onChange");break;case "option":
        f = ue(a, c);break;case "select":
        we(a, c);f = p({}, c, { value: void 0 });
        L("invalid", a);Oe(d, "onChange");break;case "textarea":
        ye(a, c);f = xe(a, c);L("invalid", a);Oe(d, "onChange");break;default:
        f = c;}Le(b, f, Ne);var g = f,
        h;for (h in g) if (g.hasOwnProperty(h)) {
      var k = g[h];"style" === h ? Je(a, k, Ne) : "dangerouslySetInnerHTML" === h ? (k = k ? k.__html : void 0, null != k && Fe(a, k)) : "children" === h ? "string" === typeof k ? ("textarea" !== b || "" !== k) && Ge(a, k) : "number" === typeof k && Ge(a, "" + k) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (ra.hasOwnProperty(h) ? null != k && Oe(d, h) : null != k && Ec(a, h, k, e));
    }switch (b) {case "input":
        cc(a);Lc(a, c);break;case "textarea":
        cc(a);Ae(a, c);break;case "option":
        null != c.value && a.setAttribute("value", c.value);break;case "select":
        a.multiple = !!c.multiple;b = c.value;null != b ? ve(a, !!c.multiple, b, !1) : null != c.defaultValue && ve(a, !!c.multiple, c.defaultValue, !0);break;default:
        "function" === typeof f.onClick && (a.onclick = v);}
  }
  function Se(a, b, c, d, e) {
    var f = null;switch (b) {case "input":
        c = Fc(a, c);d = Fc(a, d);f = [];break;case "option":
        c = ue(a, c);d = ue(a, d);f = [];break;case "select":
        c = p({}, c, { value: void 0 });d = p({}, d, { value: void 0 });f = [];break;case "textarea":
        c = xe(a, c);d = xe(a, d);f = [];break;default:
        "function" !== typeof c.onClick && "function" === typeof d.onClick && (a.onclick = v);}Le(b, d, Ne);b = a = void 0;var g = null;for (a in c) if (!d.hasOwnProperty(a) && c.hasOwnProperty(a) && null != c[a]) if ("style" === a) {
      var h = c[a];for (b in h) h.hasOwnProperty(b) && (g || (g = {}), g[b] = "");
    } else "dangerouslySetInnerHTML" !== a && "children" !== a && "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (ra.hasOwnProperty(a) ? f || (f = []) : (f = f || []).push(a, null));for (a in d) {
      var k = d[a];h = null != c ? c[a] : void 0;if (d.hasOwnProperty(a) && k !== h && (null != k || null != h)) if ("style" === a) {
        if (h) {
          for (b in h) !h.hasOwnProperty(b) || k && k.hasOwnProperty(b) || (g || (g = {}), g[b] = "");for (b in k) k.hasOwnProperty(b) && h[b] !== k[b] && (g || (g = {}), g[b] = k[b]);
        } else g || (f || (f = []), f.push(a, g)), g = k;
      } else "dangerouslySetInnerHTML" === a ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(a, "" + k)) : "children" === a ? h === k || "string" !== typeof k && "number" !== typeof k || (f = f || []).push(a, "" + k) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && (ra.hasOwnProperty(a) ? (null != k && Oe(e, a), f || h === k || (f = [])) : (f = f || []).push(a, k));
    }g && (f = f || []).push("style", g);return f;
  }
  function Te(a, b, c, d, e) {
    "input" === c && "radio" === e.type && null != e.name && Ic(a, e);Me(c, d);d = Me(c, e);for (var f = 0; f < b.length; f += 2) {
      var g = b[f],
          h = b[f + 1];"style" === g ? Je(a, h, Ne) : "dangerouslySetInnerHTML" === g ? Fe(a, h) : "children" === g ? Ge(a, h) : Ec(a, g, h, d);
    }switch (c) {case "input":
        Jc(a, e);break;case "textarea":
        ze(a, e);break;case "select":
        a._wrapperState.initialValue = void 0, b = a._wrapperState.wasMultiple, a._wrapperState.wasMultiple = !!e.multiple, c = e.value, null != c ? ve(a, !!e.multiple, c, !1) : b !== !!e.multiple && (null != e.defaultValue ? ve(a, !!e.multiple, e.defaultValue, !0) : ve(a, !!e.multiple, e.multiple ? [] : "", !1));}
  }
  function Ue(a, b, c, d, e) {
    switch (b) {case "iframe":case "object":
        L("load", a);break;case "video":case "audio":
        for (d = 0; d < jb.length; d++) L(jb[d], a);break;case "source":
        L("error", a);break;case "img":case "image":case "link":
        L("error", a);L("load", a);break;case "form":
        L("reset", a);L("submit", a);break;case "details":
        L("toggle", a);break;case "input":
        Gc(a, c);L("invalid", a);Oe(e, "onChange");break;case "select":
        we(a, c);L("invalid", a);Oe(e, "onChange");break;case "textarea":
        ye(a, c), L("invalid", a), Oe(e, "onChange");}Le(b, c, Ne);d = null;for (var f in c) if (c.hasOwnProperty(f)) {
      var g = c[f];"children" === f ? "string" === typeof g ? a.textContent !== g && (d = ["children", g]) : "number" === typeof g && a.textContent !== "" + g && (d = ["children", "" + g]) : ra.hasOwnProperty(f) && null != g && Oe(e, f);
    }switch (b) {case "input":
        cc(a);Lc(a, c);break;case "textarea":
        cc(a);Ae(a, c);break;case "select":case "option":
        break;default:
        "function" === typeof c.onClick && (a.onclick = v);}return d;
  }function Ve(a, b) {
    return a.nodeValue !== b;
  }
  var We = { createElement: Pe, createTextNode: Qe, setInitialProperties: Re, diffProperties: Se, updateProperties: Te, diffHydratedProperties: Ue, diffHydratedText: Ve, warnForUnmatchedText: function () {}, warnForDeletedHydratableElement: function () {}, warnForDeletedHydratableText: function () {}, warnForInsertedHydratedElement: function () {}, warnForInsertedHydratedText: function () {}, restoreControlledState: function (a, b, c) {
      switch (b) {case "input":
          Jc(a, c);b = c.name;if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode;) c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');for (b = 0; b < c.length; b++) {
              var d = c[b];if (d !== a && d.form === a.form) {
                var e = Pa(d);e ? void 0 : A("90");dc(d);Jc(d, e);
              }
            }
          }break;case "textarea":
          ze(a, c);break;case "select":
          b = c.value, null != b && ve(a, !!c.multiple, b, !1);}
    } },
      Xe = null,
      Ye = null;function Ze(a, b) {
    switch (a) {case "button":case "input":case "select":case "textarea":
        return !!b.autoFocus;}return !1;
  }
  function $e(a, b) {
    return "textarea" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && "string" === typeof b.dangerouslySetInnerHTML.__html;
  }var af = be,
      bf = ce,
      cf = de;function df(a) {
    for (a = a.nextSibling; a && 1 !== a.nodeType && 3 !== a.nodeType;) a = a.nextSibling;return a;
  }function ef(a) {
    for (a = a.firstChild; a && 1 !== a.nodeType && 3 !== a.nodeType;) a = a.nextSibling;return a;
  }new Set();var ff = [],
      gf = -1;function hf(a) {
    return { current: a };
  }
  function M(a) {
    0 > gf || (a.current = ff[gf], ff[gf] = null, gf--);
  }function N(a, b) {
    gf++;ff[gf] = a.current;a.current = b;
  }var jf = hf(ha),
      O = hf(!1),
      kf = ha;function lf(a) {
    return mf(a) ? kf : jf.current;
  }
  function nf(a, b) {
    var c = a.type.contextTypes;if (!c) return ha;var d = a.stateNode;if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;var e = {},
        f;for (f in c) e[f] = b[f];d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);return e;
  }function mf(a) {
    return 2 === a.tag && null != a.type.childContextTypes;
  }function of(a) {
    mf(a) && (M(O, a), M(jf, a));
  }function pf(a) {
    M(O, a);M(jf, a);
  }
  function qf(a, b, c) {
    jf.current !== ha ? A("168") : void 0;N(jf, b, a);N(O, c, a);
  }function rf(a, b) {
    var c = a.stateNode,
        d = a.type.childContextTypes;if ("function" !== typeof c.getChildContext) return b;c = c.getChildContext();for (var e in c) e in d ? void 0 : A("108", tc(a) || "Unknown", e);return p({}, b, c);
  }function sf(a) {
    if (!mf(a)) return !1;var b = a.stateNode;b = b && b.__reactInternalMemoizedMergedChildContext || ha;kf = jf.current;N(jf, b, a);N(O, O.current, a);return !0;
  }
  function tf(a, b) {
    var c = a.stateNode;c ? void 0 : A("169");if (b) {
      var d = rf(a, kf);c.__reactInternalMemoizedMergedChildContext = d;M(O, a);M(jf, a);N(jf, d, a);
    } else M(O, a);N(O, b, a);
  }
  function uf(a, b, c, d) {
    this.tag = a;this.key = c;this.sibling = this.child = this.return = this.stateNode = this.type = null;this.index = 0;this.ref = null;this.pendingProps = b;this.memoizedState = this.updateQueue = this.memoizedProps = null;this.mode = d;this.effectTag = 0;this.lastEffect = this.firstEffect = this.nextEffect = null;this.expirationTime = 0;this.alternate = null;
  }
  function vf(a, b, c) {
    var d = a.alternate;null === d ? (d = new uf(a.tag, b, a.key, a.mode), d.type = a.type, d.stateNode = a.stateNode, d.alternate = a, a.alternate = d) : (d.pendingProps = b, d.effectTag = 0, d.nextEffect = null, d.firstEffect = null, d.lastEffect = null);d.expirationTime = c;d.child = a.child;d.memoizedProps = a.memoizedProps;d.memoizedState = a.memoizedState;d.updateQueue = a.updateQueue;d.sibling = a.sibling;d.index = a.index;d.ref = a.ref;return d;
  }
  function wf(a, b, c) {
    var d = a.type,
        e = a.key;a = a.props;if ("function" === typeof d) var f = d.prototype && d.prototype.isReactComponent ? 2 : 0;else if ("string" === typeof d) f = 5;else switch (d) {case hc:
        return xf(a.children, b, c, e);case oc:
        f = 11;b |= 3;break;case ic:
        f = 11;b |= 2;break;case jc:
        return d = new uf(15, a, e, b | 4), d.type = jc, d.expirationTime = c, d;case qc:
        f = 16;b |= 2;break;default:
        a: {
          switch ("object" === typeof d && null !== d ? d.$$typeof : null) {case mc:
              f = 13;break a;case nc:
              f = 12;break a;case pc:
              f = 14;break a;default:
              A("130", null == d ? d : typeof d, "");}f = void 0;
        }}b = new uf(f, a, e, b);b.type = d;b.expirationTime = c;return b;
  }function xf(a, b, c, d) {
    a = new uf(10, a, d, b);a.expirationTime = c;return a;
  }function yf(a, b, c) {
    a = new uf(6, a, null, b);a.expirationTime = c;return a;
  }function zf(a, b, c) {
    b = new uf(4, null !== a.children ? a.children : [], a.key, b);b.expirationTime = c;b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };return b;
  }
  function Af(a, b, c) {
    b = new uf(3, null, null, b ? 3 : 0);a = { current: b, containerInfo: a, pendingChildren: null, earliestPendingTime: 0, latestPendingTime: 0, earliestSuspendedTime: 0, latestSuspendedTime: 0, latestPingedTime: 0, pendingCommitExpirationTime: 0, finishedWork: null, context: null, pendingContext: null, hydrate: c, remainingExpirationTime: 0, firstBatch: null, nextScheduledRoot: null };return b.stateNode = a;
  }var Bf = null,
      Cf = null;function Df(a) {
    return function (b) {
      try {
        return a(b);
      } catch (c) {}
    };
  }
  function Ef(a) {
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;if (b.isDisabled || !b.supportsFiber) return !0;try {
      var c = b.inject(a);Bf = Df(function (a) {
        return b.onCommitFiberRoot(c, a);
      });Cf = Df(function (a) {
        return b.onCommitFiberUnmount(c, a);
      });
    } catch (d) {}return !0;
  }function Ff(a) {
    "function" === typeof Bf && Bf(a);
  }function Gf(a) {
    "function" === typeof Cf && Cf(a);
  }var Hf = !1;
  function If(a) {
    return { expirationTime: 0, baseState: a, firstUpdate: null, lastUpdate: null, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null };
  }function Jf(a) {
    return { expirationTime: a.expirationTime, baseState: a.baseState, firstUpdate: a.firstUpdate, lastUpdate: a.lastUpdate, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null };
  }
  function Kf(a) {
    return { expirationTime: a, tag: 0, payload: null, callback: null, next: null, nextEffect: null };
  }function Lf(a, b, c) {
    null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);if (0 === a.expirationTime || a.expirationTime > c) a.expirationTime = c;
  }
  function Mf(a, b, c) {
    var d = a.alternate;if (null === d) {
      var e = a.updateQueue;var f = null;null === e && (e = a.updateQueue = If(a.memoizedState));
    } else e = a.updateQueue, f = d.updateQueue, null === e ? null === f ? (e = a.updateQueue = If(a.memoizedState), f = d.updateQueue = If(d.memoizedState)) : e = a.updateQueue = Jf(f) : null === f && (f = d.updateQueue = Jf(e));null === f || e === f ? Lf(e, b, c) : null === e.lastUpdate || null === f.lastUpdate ? (Lf(e, b, c), Lf(f, b, c)) : (Lf(e, b, c), f.lastUpdate = b);
  }
  function Nf(a, b, c) {
    var d = a.updateQueue;d = null === d ? a.updateQueue = If(a.memoizedState) : Of(a, d);null === d.lastCapturedUpdate ? d.firstCapturedUpdate = d.lastCapturedUpdate = b : (d.lastCapturedUpdate.next = b, d.lastCapturedUpdate = b);if (0 === d.expirationTime || d.expirationTime > c) d.expirationTime = c;
  }function Of(a, b) {
    var c = a.alternate;null !== c && b === c.updateQueue && (b = a.updateQueue = Jf(b));return b;
  }
  function Pf(a, b, c, d, e, f) {
    switch (c.tag) {case 1:
        return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;case 3:
        a.effectTag = a.effectTag & -1025 | 64;case 0:
        a = c.payload;e = "function" === typeof a ? a.call(f, d, e) : a;if (null === e || void 0 === e) break;return p({}, d, e);case 2:
        Hf = !0;}return d;
  }
  function Qf(a, b, c, d, e) {
    Hf = !1;if (!(0 === b.expirationTime || b.expirationTime > e)) {
      b = Of(a, b);for (var f = b.baseState, g = null, h = 0, k = b.firstUpdate, n = f; null !== k;) {
        var r = k.expirationTime;if (r > e) {
          if (null === g && (g = k, f = n), 0 === h || h > r) h = r;
        } else n = Pf(a, b, k, n, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = k : (b.lastEffect.nextEffect = k, b.lastEffect = k));k = k.next;
      }r = null;for (k = b.firstCapturedUpdate; null !== k;) {
        var w = k.expirationTime;if (w > e) {
          if (null === r && (r = k, null === g && (f = n)), 0 === h || h > w) h = w;
        } else n = Pf(a, b, k, n, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = k : (b.lastCapturedEffect.nextEffect = k, b.lastCapturedEffect = k));k = k.next;
      }null === g && (b.lastUpdate = null);null === r ? b.lastCapturedUpdate = null : a.effectTag |= 32;null === g && null === r && (f = n);b.baseState = f;b.firstUpdate = g;b.firstCapturedUpdate = r;b.expirationTime = h;a.memoizedState = n;
    }
  }
  function Rf(a, b) {
    "function" !== typeof a ? A("191", a) : void 0;a.call(b);
  }
  function Sf(a, b, c) {
    null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);a = b.firstEffect;for (b.firstEffect = b.lastEffect = null; null !== a;) {
      var d = a.callback;null !== d && (a.callback = null, Rf(d, c));a = a.nextEffect;
    }a = b.firstCapturedEffect;for (b.firstCapturedEffect = b.lastCapturedEffect = null; null !== a;) b = a.callback, null !== b && (a.callback = null, Rf(b, c)), a = a.nextEffect;
  }
  function Tf(a, b) {
    return { value: a, source: b, stack: vc(b) };
  }var Uf = hf(null),
      Vf = hf(null),
      Wf = hf(0);function Xf(a) {
    var b = a.type._context;N(Wf, b._changedBits, a);N(Vf, b._currentValue, a);N(Uf, a, a);b._currentValue = a.pendingProps.value;b._changedBits = a.stateNode;
  }function Yf(a) {
    var b = Wf.current,
        c = Vf.current;M(Uf, a);M(Vf, a);M(Wf, a);a = a.type._context;a._currentValue = c;a._changedBits = b;
  }var Zf = {},
      $f = hf(Zf),
      ag = hf(Zf),
      bg = hf(Zf);function cg(a) {
    a === Zf ? A("174") : void 0;return a;
  }
  function dg(a, b) {
    N(bg, b, a);N(ag, a, a);N($f, Zf, a);var c = b.nodeType;switch (c) {case 9:case 11:
        b = (b = b.documentElement) ? b.namespaceURI : De(null, "");break;default:
        c = 8 === c ? b.parentNode : b, b = c.namespaceURI || null, c = c.tagName, b = De(b, c);}M($f, a);N($f, b, a);
  }function eg(a) {
    M($f, a);M(ag, a);M(bg, a);
  }function fg(a) {
    ag.current === a && (M($f, a), M(ag, a));
  }function hg(a, b, c) {
    var d = a.memoizedState;b = b(c, d);d = null === b || void 0 === b ? d : p({}, d, b);a.memoizedState = d;a = a.updateQueue;null !== a && 0 === a.expirationTime && (a.baseState = d);
  }
  var lg = { isMounted: function (a) {
      return (a = a._reactInternalFiber) ? 2 === id(a) : !1;
    }, enqueueSetState: function (a, b, c) {
      a = a._reactInternalFiber;var d = ig();d = jg(d, a);var e = Kf(d);e.payload = b;void 0 !== c && null !== c && (e.callback = c);Mf(a, e, d);kg(a, d);
    }, enqueueReplaceState: function (a, b, c) {
      a = a._reactInternalFiber;var d = ig();d = jg(d, a);var e = Kf(d);e.tag = 1;e.payload = b;void 0 !== c && null !== c && (e.callback = c);Mf(a, e, d);kg(a, d);
    }, enqueueForceUpdate: function (a, b) {
      a = a._reactInternalFiber;var c = ig();c = jg(c, a);var d = Kf(c);d.tag = 2;void 0 !== b && null !== b && (d.callback = b);Mf(a, d, c);kg(a, c);
    } };function mg(a, b, c, d, e, f) {
    var g = a.stateNode;a = a.type;return "function" === typeof g.shouldComponentUpdate ? g.shouldComponentUpdate(c, e, f) : a.prototype && a.prototype.isPureReactComponent ? !ea(b, c) || !ea(d, e) : !0;
  }
  function ng(a, b, c, d) {
    a = b.state;"function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);"function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);b.state !== a && lg.enqueueReplaceState(b, b.state, null);
  }
  function og(a, b) {
    var c = a.type,
        d = a.stateNode,
        e = a.pendingProps,
        f = lf(a);d.props = e;d.state = a.memoizedState;d.refs = ha;d.context = nf(a, f);f = a.updateQueue;null !== f && (Qf(a, f, e, d, b), d.state = a.memoizedState);f = a.type.getDerivedStateFromProps;"function" === typeof f && (hg(a, f, e), d.state = a.memoizedState);"function" === typeof c.getDerivedStateFromProps || "function" === typeof d.getSnapshotBeforeUpdate || "function" !== typeof d.UNSAFE_componentWillMount && "function" !== typeof d.componentWillMount || (c = d.state, "function" === typeof d.componentWillMount && d.componentWillMount(), "function" === typeof d.UNSAFE_componentWillMount && d.UNSAFE_componentWillMount(), c !== d.state && lg.enqueueReplaceState(d, d.state, null), f = a.updateQueue, null !== f && (Qf(a, f, e, d, b), d.state = a.memoizedState));"function" === typeof d.componentDidMount && (a.effectTag |= 4);
  }var pg = Array.isArray;
  function qg(a, b, c) {
    a = c.ref;if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;var d = void 0;c && (2 !== c.tag ? A("110") : void 0, d = c.stateNode);d ? void 0 : A("147", a);var e = "" + a;if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;b = function (a) {
          var b = d.refs === ha ? d.refs = {} : d.refs;null === a ? delete b[e] : b[e] = a;
        };b._stringRef = e;return b;
      }"string" !== typeof a ? A("148") : void 0;c._owner ? void 0 : A("254", a);
    }return a;
  }
  function rg(a, b) {
    "textarea" !== a.type && A("31", "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
  }
  function sg(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;c.nextEffect = null;c.effectTag = 8;
      }
    }function c(c, d) {
      if (!a) return null;for (; null !== d;) b(c, d), d = d.sibling;return null;
    }function d(a, b) {
      for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;return a;
    }function e(a, b, c) {
      a = vf(a, b, c);a.index = 0;a.sibling = null;return a;
    }function f(b, c, d) {
      b.index = d;if (!a) return c;d = b.alternate;if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;b.effectTag = 2;return c;
    }function g(b) {
      a && null === b.alternate && (b.effectTag = 2);return b;
    }function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return b = yf(c, a.mode, d), b.return = a, b;b = e(b, c, d);b.return = a;return b;
    }function k(a, b, c, d) {
      if (null !== b && b.type === c.type) return d = e(b, c.props, d), d.ref = qg(a, b, c), d.return = a, d;d = wf(c, a.mode, d);d.ref = qg(a, b, c);d.return = a;return d;
    }function n(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zf(c, a.mode, d), b.return = a, b;b = e(b, c.children || [], d);b.return = a;return b;
    }function r(a, b, c, d, f) {
      if (null === b || 10 !== b.tag) return b = xf(c, a.mode, d, f), b.return = a, b;b = e(b, c, d);b.return = a;return b;
    }function w(a, b, c) {
      if ("string" === typeof b || "number" === typeof b) return b = yf("" + b, a.mode, c), b.return = a, b;if ("object" === typeof b && null !== b) {
        switch (b.$$typeof) {case fc:
            return c = wf(b, a.mode, c), c.ref = qg(a, null, b), c.return = a, c;case gc:
            return b = zf(b, a.mode, c), b.return = a, b;}if (pg(b) || sc(b)) return b = xf(b, a.mode, c, null), b.return = a, b;rg(a, b);
      }return null;
    }function P(a, b, c, d) {
      var e = null !== b ? b.key : null;if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {case fc:
            return c.key === e ? c.type === hc ? r(a, b, c.props.children, d, e) : k(a, b, c, d) : null;case gc:
            return c.key === e ? n(a, b, c, d) : null;}if (pg(c) || sc(c)) return null !== e ? null : r(a, b, c, d, null);rg(a, c);
      }return null;
    }function kc(a, b, c, d, e) {
      if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
      if ("object" === typeof d && null !== d) {
        switch (d.$$typeof) {case fc:
            return a = a.get(null === d.key ? c : d.key) || null, d.type === hc ? r(b, a, d.props.children, e, d.key) : k(b, a, d, e);case gc:
            return a = a.get(null === d.key ? c : d.key) || null, n(b, a, d, e);}if (pg(d) || sc(d)) return a = a.get(c) || null, r(b, a, d, e, null);rg(b, d);
      }return null;
    }function Hd(e, g, h, k) {
      for (var u = null, x = null, t = g, q = g = 0, n = null; null !== t && q < h.length; q++) {
        t.index > q ? (n = t, t = null) : n = t.sibling;var l = P(e, t, h[q], k);if (null === l) {
          null === t && (t = n);break;
        }a && t && null === l.alternate && b(e, t);g = f(l, g, q);null === x ? u = l : x.sibling = l;x = l;t = n;
      }if (q === h.length) return c(e, t), u;if (null === t) {
        for (; q < h.length; q++) if (t = w(e, h[q], k)) g = f(t, g, q), null === x ? u = t : x.sibling = t, x = t;return u;
      }for (t = d(e, t); q < h.length; q++) if (n = kc(t, e, q, h[q], k)) a && null !== n.alternate && t.delete(null === n.key ? q : n.key), g = f(n, g, q), null === x ? u = n : x.sibling = n, x = n;a && t.forEach(function (a) {
        return b(e, a);
      });return u;
    }function E(e, g, h, k) {
      var t = sc(h);"function" !== typeof t ? A("150") : void 0;h = t.call(h);null == h ? A("151") : void 0;for (var u = t = null, n = g, x = g = 0, y = null, l = h.next(); null !== n && !l.done; x++, l = h.next()) {
        n.index > x ? (y = n, n = null) : y = n.sibling;var r = P(e, n, l.value, k);if (null === r) {
          n || (n = y);break;
        }a && n && null === r.alternate && b(e, n);g = f(r, g, x);null === u ? t = r : u.sibling = r;u = r;n = y;
      }if (l.done) return c(e, n), t;if (null === n) {
        for (; !l.done; x++, l = h.next()) l = w(e, l.value, k), null !== l && (g = f(l, g, x), null === u ? t = l : u.sibling = l, u = l);return t;
      }for (n = d(e, n); !l.done; x++, l = h.next()) l = kc(n, e, x, l.value, k), null !== l && (a && null !== l.alternate && n.delete(null === l.key ? x : l.key), g = f(l, g, x), null === u ? t = l : u.sibling = l, u = l);a && n.forEach(function (a) {
        return b(e, a);
      });return t;
    }return function (a, d, f, h) {
      "object" === typeof f && null !== f && f.type === hc && null === f.key && (f = f.props.children);var k = "object" === typeof f && null !== f;if (k) switch (f.$$typeof) {case fc:
          a: {
            var n = f.key;for (k = d; null !== k;) {
              if (k.key === n) {
                if (10 === k.tag ? f.type === hc : k.type === f.type) {
                  c(a, k.sibling);d = e(k, f.type === hc ? f.props.children : f.props, h);d.ref = qg(a, k, f);d.return = a;a = d;break a;
                } else {
                  c(a, k);break;
                }
              } else b(a, k);k = k.sibling;
            }f.type === hc ? (d = xf(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = wf(f, a.mode, h), h.ref = qg(a, d, f), h.return = a, a = h);
          }return g(a);case gc:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);d = e(d, f.children || [], h);d.return = a;a = d;break a;
                } else {
                  c(a, d);break;
                }
              } else b(a, d);d = d.sibling;
            }d = zf(f, a.mode, h);d.return = a;a = d;
          }return g(a);}if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h), d.return = a, a = d) : (c(a, d), d = yf(f, a.mode, h), d.return = a, a = d), g(a);if (pg(f)) return Hd(a, d, f, h);if (sc(f)) return E(a, d, f, h);k && rg(a, f);if ("undefined" === typeof f) switch (a.tag) {case 2:case 1:
          h = a.type, A("152", h.displayName || h.name || "Component");}return c(a, d);
    };
  }var tg = sg(!0),
      ug = sg(!1),
      vg = null,
      wg = null,
      xg = !1;function yg(a, b) {
    var c = new uf(5, null, null, 0);c.type = "DELETED";c.stateNode = b;c.return = a;c.effectTag = 8;null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }
  function zg(a, b) {
    switch (a.tag) {case 5:
        var c = a.type;b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;return null !== b ? (a.stateNode = b, !0) : !1;case 6:
        return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;default:
        return !1;}
  }function Ag(a) {
    if (xg) {
      var b = wg;if (b) {
        var c = b;if (!zg(a, b)) {
          b = df(c);if (!b || !zg(a, b)) {
            a.effectTag |= 2;xg = !1;vg = a;return;
          }yg(vg, c);
        }vg = a;wg = ef(b);
      } else a.effectTag |= 2, xg = !1, vg = a;
    }
  }
  function Bg(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag;) a = a.return;vg = a;
  }function Cg(a) {
    if (a !== vg) return !1;if (!xg) return Bg(a), xg = !0, !1;var b = a.type;if (5 !== a.tag || "head" !== b && "body" !== b && !$e(b, a.memoizedProps)) for (b = wg; b;) yg(a, b), b = df(b);Bg(a);wg = vg ? df(a.stateNode) : null;return !0;
  }function Dg() {
    wg = vg = null;xg = !1;
  }function Q(a, b, c) {
    Eg(a, b, c, b.expirationTime);
  }function Eg(a, b, c, d) {
    b.child = null === a ? ug(b, null, c, d) : tg(b, a.child, c, d);
  }
  function Fg(a, b) {
    var c = b.ref;if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
  }function Gg(a, b, c, d, e) {
    Fg(a, b);var f = 0 !== (b.effectTag & 64);if (!c && !f) return d && tf(b, !1), R(a, b);c = b.stateNode;ec.current = b;var g = f ? null : c.render();b.effectTag |= 1;f && (Eg(a, b, null, e), b.child = null);Eg(a, b, g, e);b.memoizedState = c.state;b.memoizedProps = c.props;d && tf(b, !0);return b.child;
  }
  function Hg(a) {
    var b = a.stateNode;b.pendingContext ? qf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && qf(a, b.context, !1);dg(a, b.containerInfo);
  }
  function Ig(a, b, c, d) {
    var e = a.child;null !== e && (e.return = a);for (; null !== e;) {
      switch (e.tag) {case 12:
          var f = e.stateNode | 0;if (e.type === b && 0 !== (f & c)) {
            for (f = e; null !== f;) {
              var g = f.alternate;if (0 === f.expirationTime || f.expirationTime > d) f.expirationTime = d, null !== g && (0 === g.expirationTime || g.expirationTime > d) && (g.expirationTime = d);else if (null !== g && (0 === g.expirationTime || g.expirationTime > d)) g.expirationTime = d;else break;f = f.return;
            }f = null;
          } else f = e.child;break;case 13:
          f = e.type === a.type ? null : e.child;break;default:
          f = e.child;}if (null !== f) f.return = e;else for (f = e; null !== f;) {
        if (f === a) {
          f = null;break;
        }e = f.sibling;if (null !== e) {
          e.return = f.return;f = e;break;
        }f = f.return;
      }e = f;
    }
  }
  function Jg(a, b, c) {
    var d = b.type._context,
        e = b.pendingProps,
        f = b.memoizedProps,
        g = !0;if (O.current) g = !1;else if (f === e) return b.stateNode = 0, Xf(b), R(a, b);var h = e.value;b.memoizedProps = e;if (null === f) h = 1073741823;else if (f.value === e.value) {
      if (f.children === e.children && g) return b.stateNode = 0, Xf(b), R(a, b);h = 0;
    } else {
      var k = f.value;if (k === h && (0 !== k || 1 / k === 1 / h) || k !== k && h !== h) {
        if (f.children === e.children && g) return b.stateNode = 0, Xf(b), R(a, b);h = 0;
      } else if (h = "function" === typeof d._calculateChangedBits ? d._calculateChangedBits(k, h) : 1073741823, h |= 0, 0 === h) {
        if (f.children === e.children && g) return b.stateNode = 0, Xf(b), R(a, b);
      } else Ig(b, d, h, c);
    }b.stateNode = h;Xf(b);Q(a, b, e.children);return b.child;
  }function R(a, b) {
    null !== a && b.child !== a.child ? A("153") : void 0;if (null !== b.child) {
      a = b.child;var c = vf(a, a.pendingProps, a.expirationTime);b.child = c;for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = vf(a, a.pendingProps, a.expirationTime), c.return = b;c.sibling = null;
    }return b.child;
  }
  function Kg(a, b, c) {
    if (0 === b.expirationTime || b.expirationTime > c) {
      switch (b.tag) {case 3:
          Hg(b);break;case 2:
          sf(b);break;case 4:
          dg(b, b.stateNode.containerInfo);break;case 13:
          Xf(b);}return null;
    }switch (b.tag) {case 0:
        null !== a ? A("155") : void 0;var d = b.type,
            e = b.pendingProps,
            f = lf(b);f = nf(b, f);d = d(e, f);b.effectTag |= 1;"object" === typeof d && null !== d && "function" === typeof d.render && void 0 === d.$$typeof ? (f = b.type, b.tag = 2, b.memoizedState = null !== d.state && void 0 !== d.state ? d.state : null, f = f.getDerivedStateFromProps, "function" === typeof f && hg(b, f, e), e = sf(b), d.updater = lg, b.stateNode = d, d._reactInternalFiber = b, og(b, c), a = Gg(a, b, !0, e, c)) : (b.tag = 1, Q(a, b, d), b.memoizedProps = e, a = b.child);return a;case 1:
        return e = b.type, c = b.pendingProps, O.current || b.memoizedProps !== c ? (d = lf(b), d = nf(b, d), e = e(c, d), b.effectTag |= 1, Q(a, b, e), b.memoizedProps = c, a = b.child) : a = R(a, b), a;case 2:
        e = sf(b);if (null === a) {
          if (null === b.stateNode) {
            var g = b.pendingProps,
                h = b.type;d = lf(b);var k = 2 === b.tag && null != b.type.contextTypes;f = k ? nf(b, d) : ha;g = new h(g, f);b.memoizedState = null !== g.state && void 0 !== g.state ? g.state : null;g.updater = lg;b.stateNode = g;g._reactInternalFiber = b;k && (k = b.stateNode, k.__reactInternalMemoizedUnmaskedChildContext = d, k.__reactInternalMemoizedMaskedChildContext = f);og(b, c);d = !0;
          } else {
            h = b.type;d = b.stateNode;k = b.memoizedProps;f = b.pendingProps;d.props = k;var n = d.context;g = lf(b);g = nf(b, g);var r = h.getDerivedStateFromProps;(h = "function" === typeof r || "function" === typeof d.getSnapshotBeforeUpdate) || "function" !== typeof d.UNSAFE_componentWillReceiveProps && "function" !== typeof d.componentWillReceiveProps || (k !== f || n !== g) && ng(b, d, f, g);Hf = !1;var w = b.memoizedState;n = d.state = w;var P = b.updateQueue;null !== P && (Qf(b, P, f, d, c), n = b.memoizedState);k !== f || w !== n || O.current || Hf ? ("function" === typeof r && (hg(b, r, f), n = b.memoizedState), (k = Hf || mg(b, k, f, w, n, g)) ? (h || "function" !== typeof d.UNSAFE_componentWillMount && "function" !== typeof d.componentWillMount || ("function" === typeof d.componentWillMount && d.componentWillMount(), "function" === typeof d.UNSAFE_componentWillMount && d.UNSAFE_componentWillMount()), "function" === typeof d.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof d.componentDidMount && (b.effectTag |= 4), b.memoizedProps = f, b.memoizedState = n), d.props = f, d.state = n, d.context = g, d = k) : ("function" === typeof d.componentDidMount && (b.effectTag |= 4), d = !1);
          }
        } else h = b.type, d = b.stateNode, f = b.memoizedProps, k = b.pendingProps, d.props = f, n = d.context, g = lf(b), g = nf(b, g), r = h.getDerivedStateFromProps, (h = "function" === typeof r || "function" === typeof d.getSnapshotBeforeUpdate) || "function" !== typeof d.UNSAFE_componentWillReceiveProps && "function" !== typeof d.componentWillReceiveProps || (f !== k || n !== g) && ng(b, d, k, g), Hf = !1, n = b.memoizedState, w = d.state = n, P = b.updateQueue, null !== P && (Qf(b, P, k, d, c), w = b.memoizedState), f !== k || n !== w || O.current || Hf ? ("function" === typeof r && (hg(b, r, k), w = b.memoizedState), (r = Hf || mg(b, f, k, n, w, g)) ? (h || "function" !== typeof d.UNSAFE_componentWillUpdate && "function" !== typeof d.componentWillUpdate || ("function" === typeof d.componentWillUpdate && d.componentWillUpdate(k, w, g), "function" === typeof d.UNSAFE_componentWillUpdate && d.UNSAFE_componentWillUpdate(k, w, g)), "function" === typeof d.componentDidUpdate && (b.effectTag |= 4), "function" === typeof d.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof d.componentDidUpdate || f === a.memoizedProps && n === a.memoizedState || (b.effectTag |= 4), "function" !== typeof d.getSnapshotBeforeUpdate || f === a.memoizedProps && n === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = k, b.memoizedState = w), d.props = k, d.state = w, d.context = g, d = r) : ("function" !== typeof d.componentDidUpdate || f === a.memoizedProps && n === a.memoizedState || (b.effectTag |= 4), "function" !== typeof d.getSnapshotBeforeUpdate || f === a.memoizedProps && n === a.memoizedState || (b.effectTag |= 256), d = !1);return Gg(a, b, d, e, c);case 3:
        Hg(b);e = b.updateQueue;if (null !== e) {
          if (d = b.memoizedState, d = null !== d ? d.element : null, Qf(b, e, b.pendingProps, null, c), e = b.memoizedState.element, e === d) Dg(), a = R(a, b);else {
            d = b.stateNode;if (d = (null === a || null === a.child) && d.hydrate) wg = ef(b.stateNode.containerInfo), vg = b, d = xg = !0;d ? (b.effectTag |= 2, b.child = ug(b, null, e, c)) : (Dg(), Q(a, b, e));a = b.child;
          }
        } else Dg(), a = R(a, b);return a;case 5:
        a: {
          cg(bg.current);e = cg($f.current);d = De(e, b.type);e !== d && (N(ag, b, b), N($f, d, b));null === a && Ag(b);e = b.type;k = b.memoizedProps;d = b.pendingProps;f = null !== a ? a.memoizedProps : null;if (!O.current && k === d) {
            if (k = b.mode & 1 && !!d.hidden) b.expirationTime = 1073741823;if (!k || 1073741823 !== c) {
              a = R(a, b);break a;
            }
          }k = d.children;$e(e, d) ? k = null : f && $e(e, f) && (b.effectTag |= 16);Fg(a, b);1073741823 !== c && b.mode & 1 && d.hidden ? (b.expirationTime = 1073741823, b.memoizedProps = d, a = null) : (Q(a, b, k), b.memoizedProps = d, a = b.child);
        }return a;case 6:
        return null === a && Ag(b), b.memoizedProps = b.pendingProps, null;case 16:
        return null;case 4:
        return dg(b, b.stateNode.containerInfo), e = b.pendingProps, O.current || b.memoizedProps !== e ? (null === a ? b.child = tg(b, null, e, c) : Q(a, b, e), b.memoizedProps = e, a = b.child) : a = R(a, b), a;case 14:
        return e = b.type.render, c = b.pendingProps, d = b.ref, O.current || b.memoizedProps !== c || d !== (null !== a ? a.ref : null) ? (e = e(c, d), Q(a, b, e), b.memoizedProps = c, a = b.child) : a = R(a, b), a;case 10:
        return c = b.pendingProps, O.current || b.memoizedProps !== c ? (Q(a, b, c), b.memoizedProps = c, a = b.child) : a = R(a, b), a;case 11:
        return c = b.pendingProps.children, O.current || null !== c && b.memoizedProps !== c ? (Q(a, b, c), b.memoizedProps = c, a = b.child) : a = R(a, b), a;case 15:
        return c = b.pendingProps, b.memoizedProps === c ? a = R(a, b) : (Q(a, b, c.children), b.memoizedProps = c, a = b.child), a;case 13:
        return Jg(a, b, c);case 12:
        a: if (d = b.type, f = b.pendingProps, k = b.memoizedProps, e = d._currentValue, g = d._changedBits, O.current || 0 !== g || k !== f) {
          b.memoizedProps = f;h = f.unstable_observedBits;if (void 0 === h || null === h) h = 1073741823;b.stateNode = h;if (0 !== (g & h)) Ig(b, d, g, c);else if (k === f) {
            a = R(a, b);break a;
          }c = f.children;c = c(e);b.effectTag |= 1;Q(a, b, c);a = b.child;
        } else a = R(a, b);return a;default:
        A("156");}
  }function Lg(a) {
    a.effectTag |= 4;
  }var Pg = void 0,
      Qg = void 0,
      Rg = void 0;Pg = function () {};Qg = function (a, b, c) {
    (b.updateQueue = c) && Lg(b);
  };Rg = function (a, b, c, d) {
    c !== d && Lg(b);
  };
  function Sg(a, b) {
    var c = b.pendingProps;switch (b.tag) {case 1:
        return null;case 2:
        return of(b), null;case 3:
        eg(b);pf(b);var d = b.stateNode;d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);if (null === a || null === a.child) Cg(b), b.effectTag &= -3;Pg(b);return null;case 5:
        fg(b);d = cg(bg.current);var e = b.type;if (null !== a && null != b.stateNode) {
          var f = a.memoizedProps,
              g = b.stateNode,
              h = cg($f.current);g = Se(g, e, f, c, d);Qg(a, b, g, e, f, c, d, h);a.ref !== b.ref && (b.effectTag |= 128);
        } else {
          if (!c) return null === b.stateNode ? A("166") : void 0, null;a = cg($f.current);if (Cg(b)) c = b.stateNode, e = b.type, f = b.memoizedProps, c[C] = b, c[Ma] = f, d = Ue(c, e, f, a, d), b.updateQueue = d, null !== d && Lg(b);else {
            a = Pe(e, c, d, a);a[C] = b;a[Ma] = c;a: for (f = b.child; null !== f;) {
              if (5 === f.tag || 6 === f.tag) a.appendChild(f.stateNode);else if (4 !== f.tag && null !== f.child) {
                f.child.return = f;f = f.child;continue;
              }if (f === b) break;for (; null === f.sibling;) {
                if (null === f.return || f.return === b) break a;f = f.return;
              }f.sibling.return = f.return;f = f.sibling;
            }Re(a, e, c, d);Ze(e, c) && Lg(b);b.stateNode = a;
          }null !== b.ref && (b.effectTag |= 128);
        }return null;case 6:
        if (a && null != b.stateNode) Rg(a, b, a.memoizedProps, c);else {
          if ("string" !== typeof c) return null === b.stateNode ? A("166") : void 0, null;d = cg(bg.current);cg($f.current);Cg(b) ? (d = b.stateNode, c = b.memoizedProps, d[C] = b, Ve(d, c) && Lg(b)) : (d = Qe(c, d), d[C] = b, b.stateNode = d);
        }return null;case 14:
        return null;case 16:
        return null;case 10:
        return null;case 11:
        return null;case 15:
        return null;case 4:
        return eg(b), Pg(b), null;case 13:
        return Yf(b), null;case 12:
        return null;case 0:
        A("167");
      default:
        A("156");}
  }function Tg(a, b) {
    var c = b.source;null === b.stack && null !== c && vc(c);null !== c && tc(c);b = b.value;null !== a && 2 === a.tag && tc(a);try {
      b && b.suppressReactErrorLogging || console.error(b);
    } catch (d) {
      d && d.suppressReactErrorLogging || console.error(d);
    }
  }function Ug(a) {
    var b = a.ref;if (null !== b) if ("function" === typeof b) try {
      b(null);
    } catch (c) {
      Vg(a, c);
    } else b.current = null;
  }
  function Wg(a) {
    "function" === typeof Gf && Gf(a);switch (a.tag) {case 2:
        Ug(a);var b = a.stateNode;if ("function" === typeof b.componentWillUnmount) try {
          b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
        } catch (c) {
          Vg(a, c);
        }break;case 5:
        Ug(a);break;case 4:
        Xg(a);}
  }function Yg(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Zg(a) {
    a: {
      for (var b = a.return; null !== b;) {
        if (Yg(b)) {
          var c = b;break a;
        }b = b.return;
      }A("160");c = void 0;
    }var d = b = void 0;switch (c.tag) {case 5:
        b = c.stateNode;d = !1;break;case 3:
        b = c.stateNode.containerInfo;d = !0;break;case 4:
        b = c.stateNode.containerInfo;d = !0;break;default:
        A("161");}c.effectTag & 16 && (Ge(b, ""), c.effectTag &= -17);a: b: for (c = a;;) {
      for (; null === c.sibling;) {
        if (null === c.return || Yg(c.return)) {
          c = null;break a;
        }c = c.return;
      }c.sibling.return = c.return;for (c = c.sibling; 5 !== c.tag && 6 !== c.tag;) {
        if (c.effectTag & 2) continue b;
        if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
      }if (!(c.effectTag & 2)) {
        c = c.stateNode;break a;
      }
    }for (var e = a;;) {
      if (5 === e.tag || 6 === e.tag) {
        if (c) {
          if (d) {
            var f = b,
                g = e.stateNode,
                h = c;8 === f.nodeType ? f.parentNode.insertBefore(g, h) : f.insertBefore(g, h);
          } else b.insertBefore(e.stateNode, c);
        } else d ? (f = b, g = e.stateNode, 8 === f.nodeType ? f.parentNode.insertBefore(g, f) : f.appendChild(g)) : b.appendChild(e.stateNode);
      } else if (4 !== e.tag && null !== e.child) {
        e.child.return = e;e = e.child;continue;
      }if (e === a) break;for (; null === e.sibling;) {
        if (null === e.return || e.return === a) return;e = e.return;
      }e.sibling.return = e.return;e = e.sibling;
    }
  }
  function Xg(a) {
    for (var b = a, c = !1, d = void 0, e = void 0;;) {
      if (!c) {
        c = b.return;a: for (;;) {
          null === c ? A("160") : void 0;switch (c.tag) {case 5:
              d = c.stateNode;e = !1;break a;case 3:
              d = c.stateNode.containerInfo;e = !0;break a;case 4:
              d = c.stateNode.containerInfo;e = !0;break a;}c = c.return;
        }c = !0;
      }if (5 === b.tag || 6 === b.tag) {
        a: for (var f = b, g = f;;) if (Wg(g), null !== g.child && 4 !== g.tag) g.child.return = g, g = g.child;else {
          if (g === f) break;for (; null === g.sibling;) {
            if (null === g.return || g.return === f) break a;g = g.return;
          }g.sibling.return = g.return;g = g.sibling;
        }e ? (f = d, g = b.stateNode, 8 === f.nodeType ? f.parentNode.removeChild(g) : f.removeChild(g)) : d.removeChild(b.stateNode);
      } else if (4 === b.tag ? d = b.stateNode.containerInfo : Wg(b), null !== b.child) {
        b.child.return = b;b = b.child;continue;
      }if (b === a) break;for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return;b = b.return;4 === b.tag && (c = !1);
      }b.sibling.return = b.return;b = b.sibling;
    }
  }
  function $g(a, b) {
    switch (b.tag) {case 2:
        break;case 5:
        var c = b.stateNode;if (null != c) {
          var d = b.memoizedProps;a = null !== a ? a.memoizedProps : d;var e = b.type,
              f = b.updateQueue;b.updateQueue = null;null !== f && (c[Ma] = d, Te(c, f, e, a, d));
        }break;case 6:
        null === b.stateNode ? A("162") : void 0;b.stateNode.nodeValue = b.memoizedProps;break;case 3:
        break;case 15:
        break;case 16:
        break;default:
        A("163");}
  }function ah(a, b, c) {
    c = Kf(c);c.tag = 3;c.payload = { element: null };var d = b.value;c.callback = function () {
      bh(d);Tg(a, b);
    };return c;
  }
  function ch(a, b, c) {
    c = Kf(c);c.tag = 3;var d = a.stateNode;null !== d && "function" === typeof d.componentDidCatch && (c.callback = function () {
      null === dh ? dh = new Set([this]) : dh.add(this);var c = b.value,
          d = b.stack;Tg(a, b);this.componentDidCatch(c, { componentStack: null !== d ? d : "" });
    });return c;
  }
  function eh(a, b, c, d, e, f) {
    c.effectTag |= 512;c.firstEffect = c.lastEffect = null;d = Tf(d, c);a = b;do {
      switch (a.tag) {case 3:
          a.effectTag |= 1024;d = ah(a, d, f);Nf(a, d, f);return;case 2:
          if (b = d, c = a.stateNode, 0 === (a.effectTag & 64) && null !== c && "function" === typeof c.componentDidCatch && (null === dh || !dh.has(c))) {
            a.effectTag |= 1024;d = ch(a, b, f);Nf(a, d, f);return;
          }}a = a.return;
    } while (null !== a);
  }
  function fh(a) {
    switch (a.tag) {case 2:
        of(a);var b = a.effectTag;return b & 1024 ? (a.effectTag = b & -1025 | 64, a) : null;case 3:
        return eg(a), pf(a), b = a.effectTag, b & 1024 ? (a.effectTag = b & -1025 | 64, a) : null;case 5:
        return fg(a), null;case 16:
        return b = a.effectTag, b & 1024 ? (a.effectTag = b & -1025 | 64, a) : null;case 4:
        return eg(a), null;case 13:
        return Yf(a), null;default:
        return null;}
  }var gh = af(),
      hh = 2,
      ih = gh,
      jh = 0,
      kh = 0,
      lh = !1,
      S = null,
      mh = null,
      T = 0,
      nh = -1,
      oh = !1,
      U = null,
      ph = !1,
      qh = !1,
      dh = null;
  function rh() {
    if (null !== S) for (var a = S.return; null !== a;) {
      var b = a;switch (b.tag) {case 2:
          of(b);break;case 3:
          eg(b);pf(b);break;case 5:
          fg(b);break;case 4:
          eg(b);break;case 13:
          Yf(b);}a = a.return;
    }mh = null;T = 0;nh = -1;oh = !1;S = null;qh = !1;
  }
  function sh(a) {
    for (;;) {
      var b = a.alternate,
          c = a.return,
          d = a.sibling;if (0 === (a.effectTag & 512)) {
        b = Sg(b, a, T);var e = a;if (1073741823 === T || 1073741823 !== e.expirationTime) {
          var f = 0;switch (e.tag) {case 3:case 2:
              var g = e.updateQueue;null !== g && (f = g.expirationTime);}for (g = e.child; null !== g;) 0 !== g.expirationTime && (0 === f || f > g.expirationTime) && (f = g.expirationTime), g = g.sibling;e.expirationTime = f;
        }if (null !== b) return b;null !== c && 0 === (c.effectTag & 512) && (null === c.firstEffect && (c.firstEffect = a.firstEffect), null !== a.lastEffect && (null !== c.lastEffect && (c.lastEffect.nextEffect = a.firstEffect), c.lastEffect = a.lastEffect), 1 < a.effectTag && (null !== c.lastEffect ? c.lastEffect.nextEffect = a : c.firstEffect = a, c.lastEffect = a));if (null !== d) return d;if (null !== c) a = c;else {
          qh = !0;break;
        }
      } else {
        a = fh(a, oh, T);if (null !== a) return a.effectTag &= 511, a;null !== c && (c.firstEffect = c.lastEffect = null, c.effectTag |= 512);if (null !== d) return d;if (null !== c) a = c;else break;
      }
    }return null;
  }
  function th(a) {
    var b = Kg(a.alternate, a, T);null === b && (b = sh(a));ec.current = null;return b;
  }
  function uh(a, b, c) {
    lh ? A("243") : void 0;lh = !0;if (b !== T || a !== mh || null === S) rh(), mh = a, T = b, nh = -1, S = vf(mh.current, null, T), a.pendingCommitExpirationTime = 0;var d = !1;oh = !c || T <= hh;do {
      try {
        if (c) for (; null !== S && !vh();) S = th(S);else for (; null !== S;) S = th(S);
      } catch (f) {
        if (null === S) d = !0, bh(f);else {
          null === S ? A("271") : void 0;c = S;var e = c.return;if (null === e) {
            d = !0;bh(f);break;
          }eh(a, e, c, f, oh, T, ih);S = sh(c);
        }
      }break;
    } while (1);lh = !1;if (d) return null;if (null === S) {
      if (qh) return a.pendingCommitExpirationTime = b, a.current.alternate;oh ? A("262") : void 0;0 <= nh && setTimeout(function () {
        var b = a.current.expirationTime;0 !== b && (0 === a.remainingExpirationTime || a.remainingExpirationTime < b) && wh(a, b);
      }, nh);xh(a.current.expirationTime);
    }return null;
  }
  function Vg(a, b) {
    var c;a: {
      lh && !ph ? A("263") : void 0;for (c = a.return; null !== c;) {
        switch (c.tag) {case 2:
            var d = c.stateNode;if ("function" === typeof c.type.getDerivedStateFromCatch || "function" === typeof d.componentDidCatch && (null === dh || !dh.has(d))) {
              a = Tf(b, a);a = ch(c, a, 1);Mf(c, a, 1);kg(c, 1);c = void 0;break a;
            }break;case 3:
            a = Tf(b, a);a = ah(c, a, 1);Mf(c, a, 1);kg(c, 1);c = void 0;break a;}c = c.return;
      }3 === a.tag && (c = Tf(b, a), c = ah(a, c, 1), Mf(a, c, 1), kg(a, 1));c = void 0;
    }return c;
  }
  function yh() {
    var a = 2 + 25 * (((ig() - 2 + 500) / 25 | 0) + 1);a <= jh && (a = jh + 1);return jh = a;
  }function jg(a, b) {
    a = 0 !== kh ? kh : lh ? ph ? 1 : T : b.mode & 1 ? zh ? 2 + 10 * (((a - 2 + 15) / 10 | 0) + 1) : 2 + 25 * (((a - 2 + 500) / 25 | 0) + 1) : 1;zh && (0 === Ah || a > Ah) && (Ah = a);return a;
  }
  function kg(a, b) {
    for (; null !== a;) {
      if (0 === a.expirationTime || a.expirationTime > b) a.expirationTime = b;null !== a.alternate && (0 === a.alternate.expirationTime || a.alternate.expirationTime > b) && (a.alternate.expirationTime = b);if (null === a.return) if (3 === a.tag) {
        var c = a.stateNode;!lh && 0 !== T && b < T && rh();var d = c.current.expirationTime;lh && !ph && mh === c || wh(c, d);Bh > Ch && A("185");
      } else break;a = a.return;
    }
  }function ig() {
    ih = af() - gh;return hh = (ih / 10 | 0) + 2;
  }
  function Dh(a) {
    var b = kh;kh = 2 + 25 * (((ig() - 2 + 500) / 25 | 0) + 1);try {
      return a();
    } finally {
      kh = b;
    }
  }function Eh(a, b, c, d, e) {
    var f = kh;kh = 1;try {
      return a(b, c, d, e);
    } finally {
      kh = f;
    }
  }var Fh = null,
      V = null,
      Gh = 0,
      Hh = -1,
      W = !1,
      X = null,
      Y = 0,
      Ah = 0,
      Ih = !1,
      Jh = !1,
      Kh = null,
      Lh = null,
      Z = !1,
      Mh = !1,
      zh = !1,
      Nh = null,
      Ch = 1E3,
      Bh = 0,
      Oh = 1;function Ph(a) {
    if (0 !== Gh) {
      if (a > Gh) return;cf(Hh);
    }var b = af() - gh;Gh = a;Hh = bf(Qh, { timeout: 10 * (a - 2) - b });
  }
  function wh(a, b) {
    if (null === a.nextScheduledRoot) a.remainingExpirationTime = b, null === V ? (Fh = V = a, a.nextScheduledRoot = a) : (V = V.nextScheduledRoot = a, V.nextScheduledRoot = Fh);else {
      var c = a.remainingExpirationTime;if (0 === c || b < c) a.remainingExpirationTime = b;
    }W || (Z ? Mh && (X = a, Y = 1, Rh(a, 1, !1)) : 1 === b ? Sh() : Ph(b));
  }
  function Th() {
    var a = 0,
        b = null;if (null !== V) for (var c = V, d = Fh; null !== d;) {
      var e = d.remainingExpirationTime;if (0 === e) {
        null === c || null === V ? A("244") : void 0;if (d === d.nextScheduledRoot) {
          Fh = V = d.nextScheduledRoot = null;break;
        } else if (d === Fh) Fh = e = d.nextScheduledRoot, V.nextScheduledRoot = e, d.nextScheduledRoot = null;else if (d === V) {
          V = c;V.nextScheduledRoot = Fh;d.nextScheduledRoot = null;break;
        } else c.nextScheduledRoot = d.nextScheduledRoot, d.nextScheduledRoot = null;d = c.nextScheduledRoot;
      } else {
        if (0 === a || e < a) a = e, b = d;if (d === V) break;
        c = d;d = d.nextScheduledRoot;
      }
    }c = X;null !== c && c === b && 1 === a ? Bh++ : Bh = 0;X = b;Y = a;
  }function Qh(a) {
    Uh(0, !0, a);
  }function Sh() {
    Uh(1, !1, null);
  }function Uh(a, b, c) {
    Lh = c;Th();if (b) for (; null !== X && 0 !== Y && (0 === a || a >= Y) && (!Ih || ig() >= Y);) ig(), Rh(X, Y, !Ih), Th();else for (; null !== X && 0 !== Y && (0 === a || a >= Y);) Rh(X, Y, !1), Th();null !== Lh && (Gh = 0, Hh = -1);0 !== Y && Ph(Y);Lh = null;Ih = !1;Vh();
  }function Wh(a, b) {
    W ? A("253") : void 0;X = a;Y = b;Rh(a, b, !1);Sh();Vh();
  }
  function Vh() {
    Bh = 0;if (null !== Nh) {
      var a = Nh;Nh = null;for (var b = 0; b < a.length; b++) {
        var c = a[b];try {
          c._onComplete();
        } catch (d) {
          Jh || (Jh = !0, Kh = d);
        }
      }
    }if (Jh) throw a = Kh, Kh = null, Jh = !1, a;
  }function Rh(a, b, c) {
    W ? A("245") : void 0;W = !0;c ? (c = a.finishedWork, null !== c ? Xh(a, c, b) : (a.finishedWork = null, c = uh(a, b, !0), null !== c && (vh() ? a.finishedWork = c : Xh(a, c, b)))) : (c = a.finishedWork, null !== c ? Xh(a, c, b) : (a.finishedWork = null, c = uh(a, b, !1), null !== c && Xh(a, c, b)));W = !1;
  }
  function Xh(a, b, c) {
    var d = a.firstBatch;if (null !== d && d._expirationTime <= c && (null === Nh ? Nh = [d] : Nh.push(d), d._defer)) {
      a.finishedWork = b;a.remainingExpirationTime = 0;return;
    }a.finishedWork = null;ph = lh = !0;c = b.stateNode;c.current === b ? A("177") : void 0;d = c.pendingCommitExpirationTime;0 === d ? A("261") : void 0;c.pendingCommitExpirationTime = 0;ig();ec.current = null;if (1 < b.effectTag) {
      if (null !== b.lastEffect) {
        b.lastEffect.nextEffect = b;var e = b.firstEffect;
      } else e = b;
    } else e = b.firstEffect;Xe = Gd;var f = da();if (Td(f)) {
      if ("selectionStart" in f) var g = { start: f.selectionStart, end: f.selectionEnd };else a: {
        var h = window.getSelection && window.getSelection();if (h && 0 !== h.rangeCount) {
          g = h.anchorNode;var k = h.anchorOffset,
              n = h.focusNode;h = h.focusOffset;try {
            g.nodeType, n.nodeType;
          } catch (Wa) {
            g = null;break a;
          }var r = 0,
              w = -1,
              P = -1,
              kc = 0,
              Hd = 0,
              E = f,
              t = null;b: for (;;) {
            for (var x;;) {
              E !== g || 0 !== k && 3 !== E.nodeType || (w = r + k);E !== n || 0 !== h && 3 !== E.nodeType || (P = r + h);3 === E.nodeType && (r += E.nodeValue.length);if (null === (x = E.firstChild)) break;t = E;E = x;
            }for (;;) {
              if (E === f) break b;t === g && ++kc === k && (w = r);t === n && ++Hd === h && (P = r);if (null !== (x = E.nextSibling)) break;E = t;t = E.parentNode;
            }E = x;
          }g = -1 === w || -1 === P ? null : { start: w, end: P };
        } else g = null;
      }g = g || { start: 0, end: 0 };
    } else g = null;Ye = { focusedElem: f, selectionRange: g };Id(!1);for (U = e; null !== U;) {
      f = !1;g = void 0;try {
        for (; null !== U;) {
          if (U.effectTag & 256) {
            var u = U.alternate;k = U;switch (k.tag) {case 2:
                if (k.effectTag & 256 && null !== u) {
                  var y = u.memoizedProps,
                      D = u.memoizedState,
                      ja = k.stateNode;ja.props = k.memoizedProps;ja.state = k.memoizedState;var hi = ja.getSnapshotBeforeUpdate(y, D);ja.__reactInternalSnapshotBeforeUpdate = hi;
                }break;case 3:case 5:case 6:case 4:
                break;default:
                A("163");}
          }U = U.nextEffect;
        }
      } catch (Wa) {
        f = !0, g = Wa;
      }f && (null === U ? A("178") : void 0, Vg(U, g), null !== U && (U = U.nextEffect));
    }for (U = e; null !== U;) {
      u = !1;y = void 0;try {
        for (; null !== U;) {
          var q = U.effectTag;q & 16 && Ge(U.stateNode, "");if (q & 128) {
            var z = U.alternate;if (null !== z) {
              var l = z.ref;null !== l && ("function" === typeof l ? l(null) : l.current = null);
            }
          }switch (q & 14) {case 2:
              Zg(U);U.effectTag &= -3;break;case 6:
              Zg(U);U.effectTag &= -3;$g(U.alternate, U);break;case 4:
              $g(U.alternate, U);break;case 8:
              D = U, Xg(D), D.return = null, D.child = null, D.alternate && (D.alternate.child = null, D.alternate.return = null);}U = U.nextEffect;
        }
      } catch (Wa) {
        u = !0, y = Wa;
      }u && (null === U ? A("178") : void 0, Vg(U, y), null !== U && (U = U.nextEffect));
    }l = Ye;z = da();q = l.focusedElem;u = l.selectionRange;if (z !== q && fa(document.documentElement, q)) {
      Td(q) && (z = u.start, l = u.end, void 0 === l && (l = z), "selectionStart" in q ? (q.selectionStart = z, q.selectionEnd = Math.min(l, q.value.length)) : window.getSelection && (z = window.getSelection(), y = q[lb()].length, l = Math.min(u.start, y), u = void 0 === u.end ? l : Math.min(u.end, y), !z.extend && l > u && (y = u, u = l, l = y), y = Sd(q, l), D = Sd(q, u), y && D && (1 !== z.rangeCount || z.anchorNode !== y.node || z.anchorOffset !== y.offset || z.focusNode !== D.node || z.focusOffset !== D.offset) && (ja = document.createRange(), ja.setStart(y.node, y.offset), z.removeAllRanges(), l > u ? (z.addRange(ja), z.extend(D.node, D.offset)) : (ja.setEnd(D.node, D.offset), z.addRange(ja)))));z = [];for (l = q; l = l.parentNode;) 1 === l.nodeType && z.push({ element: l, left: l.scrollLeft,
        top: l.scrollTop });q.focus();for (q = 0; q < z.length; q++) l = z[q], l.element.scrollLeft = l.left, l.element.scrollTop = l.top;
    }Ye = null;Id(Xe);Xe = null;c.current = b;for (U = e; null !== U;) {
      e = !1;q = void 0;try {
        for (z = d; null !== U;) {
          var gg = U.effectTag;if (gg & 36) {
            var lc = U.alternate;l = U;u = z;switch (l.tag) {case 2:
                var ba = l.stateNode;if (l.effectTag & 4) if (null === lc) ba.props = l.memoizedProps, ba.state = l.memoizedState, ba.componentDidMount();else {
                  var ri = lc.memoizedProps,
                      si = lc.memoizedState;ba.props = l.memoizedProps;ba.state = l.memoizedState;
                  ba.componentDidUpdate(ri, si, ba.__reactInternalSnapshotBeforeUpdate);
                }var Mg = l.updateQueue;null !== Mg && (ba.props = l.memoizedProps, ba.state = l.memoizedState, Sf(l, Mg, ba, u));break;case 3:
                var Ng = l.updateQueue;if (null !== Ng) {
                  y = null;if (null !== l.child) switch (l.child.tag) {case 5:
                      y = l.child.stateNode;break;case 2:
                      y = l.child.stateNode;}Sf(l, Ng, y, u);
                }break;case 5:
                var ti = l.stateNode;null === lc && l.effectTag & 4 && Ze(l.type, l.memoizedProps) && ti.focus();break;case 6:
                break;case 4:
                break;case 15:
                break;case 16:
                break;default:
                A("163");}
          }if (gg & 128) {
            l = void 0;var uc = U.ref;if (null !== uc) {
              var Og = U.stateNode;switch (U.tag) {case 5:
                  l = Og;break;default:
                  l = Og;}"function" === typeof uc ? uc(l) : uc.current = l;
            }
          }var ui = U.nextEffect;U.nextEffect = null;U = ui;
        }
      } catch (Wa) {
        e = !0, q = Wa;
      }e && (null === U ? A("178") : void 0, Vg(U, q), null !== U && (U = U.nextEffect));
    }lh = ph = !1;"function" === typeof Ff && Ff(b.stateNode);b = c.current.expirationTime;0 === b && (dh = null);a.remainingExpirationTime = b;
  }function vh() {
    return null === Lh || Lh.timeRemaining() > Oh ? !1 : Ih = !0;
  }
  function bh(a) {
    null === X ? A("246") : void 0;X.remainingExpirationTime = 0;Jh || (Jh = !0, Kh = a);
  }function xh(a) {
    null === X ? A("246") : void 0;X.remainingExpirationTime = a;
  }function Yh(a, b) {
    var c = Z;Z = !0;try {
      return a(b);
    } finally {
      (Z = c) || W || Sh();
    }
  }function Zh(a, b) {
    if (Z && !Mh) {
      Mh = !0;try {
        return a(b);
      } finally {
        Mh = !1;
      }
    }return a(b);
  }function $h(a, b) {
    W ? A("187") : void 0;var c = Z;Z = !0;try {
      return Eh(a, b);
    } finally {
      Z = c, Sh();
    }
  }function ai(a) {
    var b = Z;Z = !0;try {
      Eh(a);
    } finally {
      (Z = b) || W || Uh(1, !1, null);
    }
  }
  function bi(a, b, c, d, e) {
    var f = b.current;if (c) {
      c = c._reactInternalFiber;var g;b: {
        2 === id(c) && 2 === c.tag ? void 0 : A("170");for (g = c; 3 !== g.tag;) {
          if (mf(g)) {
            g = g.stateNode.__reactInternalMemoizedMergedChildContext;break b;
          }(g = g.return) ? void 0 : A("171");
        }g = g.stateNode.context;
      }c = mf(c) ? rf(c, g) : g;
    } else c = ha;null === b.context ? b.context = c : b.pendingContext = c;b = e;e = Kf(d);e.payload = { element: a };b = void 0 === b ? null : b;null !== b && (e.callback = b);Mf(f, e, d);kg(f, d);return d;
  }
  function ci(a) {
    var b = a._reactInternalFiber;void 0 === b && ("function" === typeof a.render ? A("188") : A("268", Object.keys(a)));a = ld(b);return null === a ? null : a.stateNode;
  }function di(a, b, c, d) {
    var e = b.current,
        f = ig();e = jg(f, e);return bi(a, b, c, e, d);
  }function ei(a) {
    a = a.current;if (!a.child) return null;switch (a.child.tag) {case 5:
        return a.child.stateNode;default:
        return a.child.stateNode;}
  }
  function fi(a) {
    var b = a.findFiberByHostInstance;return Ef(p({}, a, { findHostInstanceByFiber: function (a) {
        a = ld(a);return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: function (a) {
        return b ? b(a) : null;
      } }));
  }
  var gi = { updateContainerAtExpirationTime: bi, createContainer: function (a, b, c) {
      return Af(a, b, c);
    }, updateContainer: di, flushRoot: Wh, requestWork: wh, computeUniqueAsyncExpiration: yh, batchedUpdates: Yh, unbatchedUpdates: Zh, deferredUpdates: Dh, syncUpdates: Eh, interactiveUpdates: function (a, b, c) {
      if (zh) return a(b, c);Z || W || 0 === Ah || (Uh(Ah, !1, null), Ah = 0);var d = zh,
          e = Z;Z = zh = !0;try {
        return a(b, c);
      } finally {
        zh = d, (Z = e) || W || Sh();
      }
    }, flushInteractiveUpdates: function () {
      W || 0 === Ah || (Uh(Ah, !1, null), Ah = 0);
    }, flushControlled: ai, flushSync: $h,
    getPublicRootInstance: ei, findHostInstance: ci, findHostInstanceWithNoPortals: function (a) {
      a = md(a);return null === a ? null : a.stateNode;
    }, injectIntoDevTools: fi };function ii(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;return { $$typeof: gc, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  }Kb.injectFiberControlledHostComponent(We);
  function ji(a) {
    this._expirationTime = yh();this._root = a;this._callbacks = this._next = null;this._hasChildren = this._didComplete = !1;this._children = null;this._defer = !0;
  }ji.prototype.render = function (a) {
    this._defer ? void 0 : A("250");this._hasChildren = !0;this._children = a;var b = this._root._internalRoot,
        c = this._expirationTime,
        d = new ki();bi(a, b, null, c, d._onCommit);return d;
  };ji.prototype.then = function (a) {
    if (this._didComplete) a();else {
      var b = this._callbacks;null === b && (b = this._callbacks = []);b.push(a);
    }
  };
  ji.prototype.commit = function () {
    var a = this._root._internalRoot,
        b = a.firstBatch;this._defer && null !== b ? void 0 : A("251");if (this._hasChildren) {
      var c = this._expirationTime;if (b !== this) {
        this._hasChildren && (c = this._expirationTime = b._expirationTime, this.render(this._children));for (var d = null, e = b; e !== this;) d = e, e = e._next;null === d ? A("251") : void 0;d._next = e._next;this._next = b;a.firstBatch = this;
      }this._defer = !1;Wh(a, c);b = this._next;this._next = null;b = a.firstBatch = b;null !== b && b._hasChildren && b.render(b._children);
    } else this._next = null, this._defer = !1;
  };ji.prototype._onComplete = function () {
    if (!this._didComplete) {
      this._didComplete = !0;var a = this._callbacks;if (null !== a) for (var b = 0; b < a.length; b++) (0, a[b])();
    }
  };function ki() {
    this._callbacks = null;this._didCommit = !1;this._onCommit = this._onCommit.bind(this);
  }ki.prototype.then = function (a) {
    if (this._didCommit) a();else {
      var b = this._callbacks;null === b && (b = this._callbacks = []);b.push(a);
    }
  };
  ki.prototype._onCommit = function () {
    if (!this._didCommit) {
      this._didCommit = !0;var a = this._callbacks;if (null !== a) for (var b = 0; b < a.length; b++) {
        var c = a[b];"function" !== typeof c ? A("191", c) : void 0;c();
      }
    }
  };function li(a, b, c) {
    this._internalRoot = Af(a, b, c);
  }li.prototype.render = function (a, b) {
    var c = this._internalRoot,
        d = new ki();b = void 0 === b ? null : b;null !== b && d.then(b);di(a, c, null, d._onCommit);return d;
  };
  li.prototype.unmount = function (a) {
    var b = this._internalRoot,
        c = new ki();a = void 0 === a ? null : a;null !== a && c.then(a);di(null, b, null, c._onCommit);return c;
  };li.prototype.legacy_renderSubtreeIntoContainer = function (a, b, c) {
    var d = this._internalRoot,
        e = new ki();c = void 0 === c ? null : c;null !== c && e.then(c);di(b, d, a, e._onCommit);return e;
  };
  li.prototype.createBatch = function () {
    var a = new ji(this),
        b = a._expirationTime,
        c = this._internalRoot,
        d = c.firstBatch;if (null === d) c.firstBatch = a, a._next = null;else {
      for (c = null; null !== d && d._expirationTime <= b;) c = d, d = d._next;a._next = d;null !== c && (c._next = a);
    }return a;
  };function mi(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }Sb = gi.batchedUpdates;Tb = gi.interactiveUpdates;Ub = gi.flushInteractiveUpdates;
  function ni(a, b) {
    b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));if (!b) for (var c; c = a.lastChild;) a.removeChild(c);return new li(a, !1, b);
  }
  function oi(a, b, c, d, e) {
    mi(c) ? void 0 : A("200");var f = c._reactRootContainer;if (f) {
      if ("function" === typeof e) {
        var g = e;e = function () {
          var a = ei(f._internalRoot);g.call(a);
        };
      }null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
    } else {
      f = c._reactRootContainer = ni(c, d);if ("function" === typeof e) {
        var h = e;e = function () {
          var a = ei(f._internalRoot);h.call(a);
        };
      }Zh(function () {
        null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
      });
    }return ei(f._internalRoot);
  }
  function pi(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;mi(b) ? void 0 : A("200");return ii(a, b, null, c);
  }
  var qi = { createPortal: pi, findDOMNode: function (a) {
      return null == a ? null : 1 === a.nodeType ? a : ci(a);
    }, hydrate: function (a, b, c) {
      return oi(null, a, b, !0, c);
    }, render: function (a, b, c) {
      return oi(null, a, b, !1, c);
    }, unstable_renderSubtreeIntoContainer: function (a, b, c, d) {
      null == a || void 0 === a._reactInternalFiber ? A("38") : void 0;return oi(a, b, c, !1, d);
    }, unmountComponentAtNode: function (a) {
      mi(a) ? void 0 : A("40");return a._reactRootContainer ? (Zh(function () {
        oi(null, null, a, !1, function () {
          a._reactRootContainer = null;
        });
      }), !0) : !1;
    }, unstable_createPortal: function () {
      return pi.apply(void 0, arguments);
    }, unstable_batchedUpdates: Yh, unstable_deferredUpdates: Dh, flushSync: $h, unstable_flushControlled: ai, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { EventPluginHub: Ka, EventPluginRegistry: va, EventPropagators: $a, ReactControlledComponent: Rb, ReactDOMComponentTree: Qa, ReactDOMEventListener: Md }, unstable_createRoot: function (a, b) {
      return new li(a, !0, null != b && !0 === b.hydrate);
    } };fi({ findFiberByHostInstance: Na, bundleType: 0, version: "16.4.0", rendererPackageName: "react-dom" });
  var vi = { default: qi },
      wi = vi && qi || vi;module.exports = wi.default ? wi.default : wi;
});
System.registerDynamic("npm:react@16.4.1/cjs/react.production.min.js", ["npm:object-assign@4.1.1.js", "npm:fbjs@0.8.17/lib/invariant.js", "npm:fbjs@0.8.17/lib/emptyObject.js", "npm:fbjs@0.8.17/lib/emptyFunction.js"], true, function ($__require, exports, module) {
  /** @license React v16.4.1
   * react.production.min.js
   *
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  'use strict';
  var global = this || self,
      GLOBAL = global;
  var k = $__require("npm:object-assign@4.1.1.js"),
      n = $__require("npm:fbjs@0.8.17/lib/invariant.js"),
      p = $__require("npm:fbjs@0.8.17/lib/emptyObject.js"),
      q = $__require("npm:fbjs@0.8.17/lib/emptyFunction.js"),
      r = "function" === typeof Symbol && Symbol.for,
      t = r ? Symbol.for("react.element") : 60103,
      u = r ? Symbol.for("react.portal") : 60106,
      v = r ? Symbol.for("react.fragment") : 60107,
      w = r ? Symbol.for("react.strict_mode") : 60108,
      x = r ? Symbol.for("react.profiler") : 60114,
      y = r ? Symbol.for("react.provider") : 60109,
      z = r ? Symbol.for("react.context") : 60110,
      A = r ? Symbol.for("react.async_mode") : 60111,
      B = r ? Symbol.for("react.forward_ref") : 60112;r && Symbol.for("react.timeout");var C = "function" === typeof Symbol && Symbol.iterator;function D(a) {
    for (var b = arguments.length - 1, e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) e += "&args[]=" + encodeURIComponent(arguments[c + 1]);n(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
  }
  var E = { isMounted: function () {
      return !1;
    }, enqueueForceUpdate: function () {}, enqueueReplaceState: function () {}, enqueueSetState: function () {} };function F(a, b, e) {
    this.props = a;this.context = b;this.refs = p;this.updater = e || E;
  }F.prototype.isReactComponent = {};F.prototype.setState = function (a, b) {
    "object" !== typeof a && "function" !== typeof a && null != a ? D("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
  };F.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };function G() {}
  G.prototype = F.prototype;function H(a, b, e) {
    this.props = a;this.context = b;this.refs = p;this.updater = e || E;
  }var I = H.prototype = new G();I.constructor = H;k(I, F.prototype);I.isPureReactComponent = !0;var J = { current: null },
      K = Object.prototype.hasOwnProperty,
      L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function M(a, b, e) {
    var c = void 0,
        d = {},
        g = null,
        h = null;if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, c) && !L.hasOwnProperty(c) && (d[c] = b[c]);var f = arguments.length - 2;if (1 === f) d.children = e;else if (1 < f) {
      for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];d.children = l;
    }if (a && a.defaultProps) for (c in f = a.defaultProps, f) void 0 === d[c] && (d[c] = f[c]);return { $$typeof: t, type: a, key: g, ref: h, props: d, _owner: J.current };
  }
  function N(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
  }function escape(a) {
    var b = { "=": "=0", ":": "=2" };return "$" + ("" + a).replace(/[=:]/g, function (a) {
      return b[a];
    });
  }var O = /\/+/g,
      P = [];function Q(a, b, e, c) {
    if (P.length) {
      var d = P.pop();d.result = a;d.keyPrefix = b;d.func = e;d.context = c;d.count = 0;return d;
    }return { result: a, keyPrefix: b, func: e, context: c, count: 0 };
  }function R(a) {
    a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > P.length && P.push(a);
  }
  function S(a, b, e, c) {
    var d = typeof a;if ("undefined" === d || "boolean" === d) a = null;var g = !1;if (null === a) g = !0;else switch (d) {case "string":case "number":
        g = !0;break;case "object":
        switch (a.$$typeof) {case t:case u:
            g = !0;}}if (g) return e(c, a, "" === b ? "." + T(a, 0) : b), 1;g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
      d = a[h];var f = b + T(d, h);g += S(d, f, e, c);
    } else if (null === a || "undefined" === typeof a ? f = null : (f = C && a[C] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done;) d = d.value, f = b + T(d, h++), g += S(d, f, e, c);else "object" === d && (e = "" + a, D("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));return g;
  }function T(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
  }function U(a, b) {
    a.func.call(a.context, b, a.count++);
  }
  function V(a, b, e) {
    var c = a.result,
        d = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? W(a, c, e, q.thatReturnsArgument) : null != a && (N(a) && (b = d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + e, a = { $$typeof: t, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner }), c.push(a));
  }function W(a, b, e, c, d) {
    var g = "";null != e && (g = ("" + e).replace(O, "$&/") + "/");b = Q(b, g, c, d);null == a || S(a, "", V, b);R(b);
  }
  var X = { Children: { map: function (a, b, e) {
        if (null == a) return a;var c = [];W(a, c, null, b, e);return c;
      }, forEach: function (a, b, e) {
        if (null == a) return a;b = Q(null, null, b, e);null == a || S(a, "", U, b);R(b);
      }, count: function (a) {
        return null == a ? 0 : S(a, "", q.thatReturnsNull, null);
      }, toArray: function (a) {
        var b = [];W(a, b, null, q.thatReturnsArgument);return b;
      }, only: function (a) {
        N(a) ? void 0 : D("143");return a;
      } }, createRef: function () {
      return { current: null };
    }, Component: F, PureComponent: H, createContext: function (a, b) {
      void 0 === b && (b = null);a = { $$typeof: z,
        _calculateChangedBits: b, _defaultValue: a, _currentValue: a, _currentValue2: a, _changedBits: 0, _changedBits2: 0, Provider: null, Consumer: null };a.Provider = { $$typeof: y, _context: a };return a.Consumer = a;
    }, forwardRef: function (a) {
      return { $$typeof: B, render: a };
    }, Fragment: v, StrictMode: w, unstable_AsyncMode: A, unstable_Profiler: x, createElement: M, cloneElement: function (a, b, e) {
      null === a || void 0 === a ? D("267", a) : void 0;var c = void 0,
          d = k({}, a.props),
          g = a.key,
          h = a.ref,
          f = a._owner;if (null != b) {
        void 0 !== b.ref && (h = b.ref, f = J.current);void 0 !== b.key && (g = "" + b.key);var l = void 0;a.type && a.type.defaultProps && (l = a.type.defaultProps);for (c in b) K.call(b, c) && !L.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
      }c = arguments.length - 2;if (1 === c) d.children = e;else if (1 < c) {
        l = Array(c);for (var m = 0; m < c; m++) l[m] = arguments[m + 2];d.children = l;
      }return { $$typeof: t, type: a.type, key: g, ref: h, props: d, _owner: f };
    }, createFactory: function (a) {
      var b = M.bind(null, a);b.type = a;return b;
    }, isValidElement: N, version: "16.4.1", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: J,
      assign: k } },
      Y = { default: X },
      Z = Y && X || Y;module.exports = Z.default ? Z.default : Z;
});
System.registerDynamic('npm:fbjs@0.8.17/lib/invariant.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var validateFormat = function validateFormat(format) {};
    if ('production' !== 'production') {
      validateFormat = function validateFormat(format) {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      };
    }
    function invariant(condition, format, a, b, c, d, e, f) {
      validateFormat(format);
      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }
        error.framesToPop = 1;
        throw error;
      }
    }
    module.exports = invariant;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@16.4.1/cjs/react.development.js', ['npm:object-assign@4.1.1.js', 'npm:fbjs@0.8.17/lib/invariant.js', 'npm:fbjs@0.8.17/lib/emptyObject.js', 'npm:fbjs@0.8.17/lib/warning.js', 'npm:fbjs@0.8.17/lib/emptyFunction.js', 'npm:prop-types@15.6.2/checkPropTypes.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    if ('production' !== "production") {
      (function () {
        'use strict';

        var _assign = $__require('npm:object-assign@4.1.1.js');
        var invariant = $__require('npm:fbjs@0.8.17/lib/invariant.js');
        var emptyObject = $__require('npm:fbjs@0.8.17/lib/emptyObject.js');
        var warning = $__require('npm:fbjs@0.8.17/lib/warning.js');
        var emptyFunction = $__require('npm:fbjs@0.8.17/lib/emptyFunction.js');
        var checkPropTypes = $__require('npm:prop-types@15.6.2/checkPropTypes.js');
        var ReactVersion = '16.4.1';
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable === 'undefined') {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }
          return null;
        }
        var enableSuspense = false;
        var lowPriorityWarning = function () {};
        {
          var printWarning = function (format) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            var argIndex = 0;
            var message = 'Warning: ' + format.replace(/%s/g, function () {
              return args[argIndex++];
            });
            if (typeof console !== 'undefined') {
              console.warn(message);
            }
            try {
              throw new Error(message);
            } catch (x) {}
          };
          lowPriorityWarning = function (condition, format) {
            if (format === undefined) {
              throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
            }
            if (!condition) {
              for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
              }
              printWarning.apply(undefined, [format].concat(args));
            }
          };
        }
        var lowPriorityWarning$1 = lowPriorityWarning;
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
            var warningKey = componentName + '.' + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            warning(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function (publicInstance) {
            return false;
          },
          enqueueForceUpdate: function (publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
          },
          enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState');
          },
          enqueueSetState: function (publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState');
          }
        };
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function (partialState, callback) {
          !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
          this.updater.enqueueSetState(this, partialState, callback, 'setState');
        };
        Component.prototype.forceUpdate = function (callback) {
          this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        {
          var deprecatedAPIs = {
            isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
            replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
          };
          var defineDeprecationWarning = function (methodName, info) {
            Object.defineProperty(Component.prototype, methodName, { get: function () {
                lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                return undefined;
              } });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = { current: null };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var ReactCurrentOwner = { current: null };
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown = void 0;
        var specialPropRefWarningShown = void 0;
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, 'ref')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== undefined;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, 'key')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== undefined;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function () {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function () {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        var ReactElement = function (type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            ref: ref,
            props: props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName = void 0;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
            }
            if (hasValidKey(config)) {
              key = '' + config.key;
            }
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
                var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;
          var propName = void 0;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = '' + config.key;
            }
            var defaultProps = void 0;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var ReactDebugCurrentFrame = {};
        {
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function () {
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              return impl();
            }
            return null;
          };
        }
        var SEPARATOR = '.';
        var SUBSEPARATOR = ':';
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            '=': '=0',
            ':': '=2'
          };
          var escapedString = ('' + key).replace(escapeRegex, function (match) {
            return escaperLookup[match];
          });
          return '$' + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
        }
        var POOL_SIZE = 10;
        var traverseContextPool = [];
        function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
          if (traverseContextPool.length) {
            var traverseContext = traverseContextPool.pop();
            traverseContext.result = mapResult;
            traverseContext.keyPrefix = keyPrefix;
            traverseContext.func = mapFunction;
            traverseContext.context = mapContext;
            traverseContext.count = 0;
            return traverseContext;
          } else {
            return {
              result: mapResult,
              keyPrefix: keyPrefix,
              func: mapFunction,
              context: mapContext,
              count: 0
            };
          }
        }
        function releaseTraverseContext(traverseContext) {
          traverseContext.result = null;
          traverseContext.keyPrefix = null;
          traverseContext.func = null;
          traverseContext.context = null;
          traverseContext.count = 0;
          if (traverseContextPool.length < POOL_SIZE) {
            traverseContextPool.push(traverseContext);
          }
        }
        function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
          var type = typeof children;
          if (type === 'undefined' || type === 'boolean') {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case 'string':
              case 'number':
                invokeCallback = true;
                break;
              case 'object':
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
            return 1;
          }
          var child = void 0;
          var nextName = void 0;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getComponentKey(child, i);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
              {
                if (iteratorFn === children.entries) {
                  !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(children);
              var step = void 0;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getComponentKey(child, ii++);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else if (type === 'object') {
              var addendum = '';
              {
                addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
              }
              var childrenString = '' + children;
              invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
            }
          }
          return subtreeCount;
        }
        function traverseAllChildren(children, callback, traverseContext) {
          if (children == null) {
            return 0;
          }
          return traverseAllChildrenImpl(children, '', callback, traverseContext);
        }
        function getComponentKey(component, index) {
          if (typeof component === 'object' && component !== null && component.key != null) {
            return escape(component.key);
          }
          return index.toString(36);
        }
        function forEachSingleChild(bookKeeping, child, name) {
          var func = bookKeeping.func,
              context = bookKeeping.context;
          func.call(context, child, bookKeeping.count++);
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          if (children == null) {
            return children;
          }
          var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
          traverseAllChildren(children, forEachSingleChild, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        function mapSingleChildIntoContext(bookKeeping, child, childKey) {
          var result = bookKeeping.result,
              keyPrefix = bookKeeping.keyPrefix,
              func = bookKeeping.func,
              context = bookKeeping.context;
          var mappedChild = func.call(context, child, bookKeeping.count++);
          if (Array.isArray(mappedChild)) {
            mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              mappedChild = cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
            }
            result.push(mappedChild);
          }
        }
        function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
          var escapedPrefix = '';
          if (prefix != null) {
            escapedPrefix = escapeUserProvidedKey(prefix) + '/';
          }
          var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
          traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, func, context);
          return result;
        }
        function countChildren(children) {
          return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
        }
        function toArray(children) {
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
          return result;
        }
        function onlyChild(children) {
          !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
          return children;
        }
        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === undefined) {
            calculateChangedBits = null;
          } else {
            {
              !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            _defaultValue: defaultValue,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _changedBits: 0,
            _changedBits2: 0,
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          context.Consumer = context;
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        function forwardRef(render) {
          {
            !(typeof render === 'function') ? warning(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render) : void 0;
            if (render != null) {
              !(render.defaultProps == null && render.propTypes == null) ? warning(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
            }
          }
          return {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
          };
        }
        var describeComponentFrame = function (name, source, ownerName) {
          return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
        };
        function isValidElementType(type) {
          return typeof type === 'string' || typeof type === 'function' || type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_TIMEOUT_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
        }
        function getComponentName(fiber) {
          var type = fiber.type;
          if (typeof type === 'function') {
            return type.displayName || type.name;
          }
          if (typeof type === 'string') {
            return type;
          }
          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
              return 'AsyncMode';
            case REACT_CONTEXT_TYPE:
              return 'Context.Consumer';
            case REACT_FRAGMENT_TYPE:
              return 'ReactFragment';
            case REACT_PORTAL_TYPE:
              return 'ReactPortal';
            case REACT_PROFILER_TYPE:
              return 'Profiler(' + fiber.pendingProps.id + ')';
            case REACT_PROVIDER_TYPE:
              return 'Context.Provider';
            case REACT_STRICT_MODE_TYPE:
              return 'StrictMode';
            case REACT_TIMEOUT_TYPE:
              return 'Timeout';
          }
          if (typeof type === 'object' && type !== null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                var functionName = type.render.displayName || type.render.name || '';
                return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
            }
          }
          return null;
        }
        var currentlyValidatingElement = void 0;
        var propTypesMisspellWarningShown = void 0;
        var getDisplayName = function () {};
        var getStackAddendum = function () {};
        {
          currentlyValidatingElement = null;
          propTypesMisspellWarningShown = false;
          getDisplayName = function (element) {
            if (element == null) {
              return '#empty';
            } else if (typeof element === 'string' || typeof element === 'number') {
              return '#text';
            } else if (typeof element.type === 'string') {
              return element.type;
            }
            var type = element.type;
            if (type === REACT_FRAGMENT_TYPE) {
              return 'React.Fragment';
            } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
              var functionName = type.render.displayName || type.render.name || '';
              return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
            } else {
              return type.displayName || type.name || 'Unknown';
            }
          };
          getStackAddendum = function () {
            var stack = '';
            if (currentlyValidatingElement) {
              var name = getDisplayName(currentlyValidatingElement);
              var owner = currentlyValidatingElement._owner;
              stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
            }
            stack += ReactDebugCurrentFrame.getStackAddendum() || '';
            return stack;
          };
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current);
            if (name) {
              return '\n\nCheck the render method of `' + name + '`.';
            }
          }
          return '';
        }
        function getSourceInfoErrorAddendum(elementProps) {
          if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
            var source = elementProps.__source;
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
          }
          return '';
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = '\n\nCheck the top-level render call using <' + parentName + '>.';
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = '';
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
          }
          currentlyValidatingElement = element;
          {
            warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
          }
          currentlyValidatingElement = null;
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== 'object') {
            return;
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step = void 0;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          var type = element.type;
          var name = void 0,
              propTypes = void 0;
          if (typeof type === 'function') {
            name = type.displayName || type.name;
            propTypes = type.propTypes;
          } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
            var functionName = type.render.displayName || type.render.name || '';
            name = functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            currentlyValidatingElement = element;
            checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
            currentlyValidatingElement = null;
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
          }
          if (typeof type.getDefaultProps === 'function') {
            !type.getDefaultProps.isReactClassApproved ? warning(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
          }
        }
        function validateFragmentProps(fragment) {
          currentlyValidatingElement = fragment;
          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
              warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
              break;
            }
          }
          if (fragment.ref !== null) {
            warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
          }
          currentlyValidatingElement = null;
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            info += getStackAddendum() || '';
            var typeString = void 0;
            if (type === null) {
              typeString = 'null';
            } else if (Array.isArray(type)) {
              typeString = 'array';
            } else {
              typeString = typeof type;
            }
            warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            Object.defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get: function () {
                lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
                Object.defineProperty(this, 'type', { value: type });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        var React = {
          Children: {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray: toArray,
            only: onlyChild
          },
          createRef: createRef,
          Component: Component,
          PureComponent: PureComponent,
          createContext: createContext,
          forwardRef: forwardRef,
          Fragment: REACT_FRAGMENT_TYPE,
          StrictMode: REACT_STRICT_MODE_TYPE,
          unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
          unstable_Profiler: REACT_PROFILER_TYPE,
          createElement: createElementWithValidation,
          cloneElement: cloneElementWithValidation,
          createFactory: createFactoryWithValidation,
          isValidElement: isValidElement,
          version: ReactVersion,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentOwner: ReactCurrentOwner,
            assign: _assign
          }
        };
        if (enableSuspense) {
          React.Timeout = REACT_TIMEOUT_TYPE;
        }
        {
          _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
            ReactDebugCurrentFrame: ReactDebugCurrentFrame,
            ReactComponentTreeHook: {}
          });
        }
        var React$2 = Object.freeze({ default: React });
        var React$3 = React$2 && React || React$2;
        var react = React$3.default ? React$3.default : React$3;
        module.exports = react;
      })();
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@16.4.1/index.js', ['npm:react@16.4.1/cjs/react.production.min.js', 'npm:react@16.4.1/cjs/react.development.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    if ('production' === 'production') {
      module.exports = $__require('npm:react@16.4.1/cjs/react.production.min.js');
    } else {
      module.exports = $__require('npm:react@16.4.1/cjs/react.development.js');
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:react@16.4.1.js", ["npm:react@16.4.1/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:react@16.4.1/index.js");
});
System.registerDynamic('npm:fbjs@0.8.17/lib/warning.js', ['npm:fbjs@0.8.17/lib/emptyFunction.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var emptyFunction = $__require('npm:fbjs@0.8.17/lib/emptyFunction.js');
    var warning = emptyFunction;
    if ('production' !== 'production') {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
      warning = function warning(condition, format) {
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (format.indexOf('Failed Composite propType: ') === 0) {
          return;
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    module.exports = warning;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:fbjs@0.8.17/lib/ExecutionEnvironment.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  /**
   * Simple, lightweight module assisting with the detection and context of
   * Worker. Helps avoid circular dependencies and allows code to reason about
   * whether or not they are in a Worker, even if they never include the main
   * `ReactWorker` dependency.
   */
  var ExecutionEnvironment = {

    canUseDOM: canUseDOM,

    canUseWorkers: typeof Worker !== 'undefined',

    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

    canUseViewport: canUseDOM && !!window.screen,

    isInWorker: !canUseDOM // For now, this is true - might change in the future.

  };

  module.exports = ExecutionEnvironment;
});
System.registerDynamic("npm:fbjs@0.8.17/lib/emptyFunction.js", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

  var global = this || self,
      GLOBAL = global;
  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  module.exports = emptyFunction;
});
System.registerDynamic('npm:fbjs@0.8.17/lib/getActiveElement.js', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  /* eslint-disable fb-www/typeof-undefined */

  /**
   * Same as document.activeElement but wraps in a try-catch block. In IE it is
   * not safe to call document.activeElement if there is nothing focused.
   *
   * The activeElement will be null only if the document or document body is not
   * yet defined.
   *
   * @param {?DOMDocument} doc Defaults to current document.
   * @return {?DOMElement}
   */

  var global = this || self,
      GLOBAL = global;
  function getActiveElement(doc) /*?DOMElement*/{
    doc = doc || (typeof document !== 'undefined' ? document : undefined);
    if (typeof doc === 'undefined') {
      return null;
    }
    try {
      return doc.activeElement || doc.body;
    } catch (e) {
      return doc.body;
    }
  }

  module.exports = getActiveElement;
});
System.registerDynamic('npm:fbjs@0.8.17/lib/shallowEqual.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   * 
   */

  /*eslint-disable no-self-compare */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      // Added the nonzero y check to make Flow happy, but it is redundant
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }

  /**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  module.exports = shallowEqual;
});
System.registerDynamic('npm:fbjs@0.8.17/lib/isNode.js', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  /**
   * @param {*} object The object to check.
   * @return {boolean} Whether or not the object is a DOM node.
   */

  var global = this || self,
      GLOBAL = global;
  function isNode(object) {
    var doc = object ? object.ownerDocument || object : document;
    var defaultView = doc.defaultView || window;
    return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
  }

  module.exports = isNode;
});
System.registerDynamic('npm:fbjs@0.8.17/lib/isTextNode.js', ['npm:fbjs@0.8.17/lib/isNode.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var isNode = $__require('npm:fbjs@0.8.17/lib/isNode.js');
  function isTextNode(object) {
    return isNode(object) && object.nodeType == 3;
  }
  module.exports = isTextNode;
});
System.registerDynamic('npm:fbjs@0.8.17/lib/containsNode.js', ['npm:fbjs@0.8.17/lib/isTextNode.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var isTextNode = $__require('npm:fbjs@0.8.17/lib/isTextNode.js');
  function containsNode(outerNode, innerNode) {
    if (!outerNode || !innerNode) {
      return false;
    } else if (outerNode === innerNode) {
      return true;
    } else if (isTextNode(outerNode)) {
      return false;
    } else if (isTextNode(innerNode)) {
      return containsNode(outerNode, innerNode.parentNode);
    } else if ('contains' in outerNode) {
      return outerNode.contains(innerNode);
    } else if (outerNode.compareDocumentPosition) {
      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
    } else {
      return false;
    }
  }
  module.exports = containsNode;
});
System.registerDynamic('npm:fbjs@0.8.17/lib/emptyObject.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var emptyObject = {};
    if ('production' !== 'production') {
      Object.freeze(emptyObject);
    }
    module.exports = emptyObject;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:fbjs@0.8.17/lib/hyphenate.js', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  var global = this || self,
      GLOBAL = global;
  var _uppercasePattern = /([A-Z])/g;

  /**
   * Hyphenates a camelcased string, for example:
   *
   *   > hyphenate('backgroundColor')
   *   < "background-color"
   *
   * For CSS style names, use `hyphenateStyleName` instead which works properly
   * with all vendor prefixes, including `ms`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }

  module.exports = hyphenate;
});
System.registerDynamic('npm:fbjs@0.8.17/lib/hyphenateStyleName.js', ['npm:fbjs@0.8.17/lib/hyphenate.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var hyphenate = $__require('npm:fbjs@0.8.17/lib/hyphenate.js');
  var msPattern = /^ms-/;
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }
  module.exports = hyphenateStyleName;
});
System.registerDynamic("npm:fbjs@0.8.17/lib/camelize.js", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  var global = this || self,
      GLOBAL = global;
  var _hyphenPattern = /-(.)/g;

  /**
   * Camelcases a hyphenated string, for example:
   *
   *   > camelize('background-color')
   *   < "backgroundColor"
   *
   * @param {string} string
   * @return {string}
   */
  function camelize(string) {
    return string.replace(_hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  }

  module.exports = camelize;
});
System.registerDynamic('npm:fbjs@0.8.17/lib/camelizeStyleName.js', ['npm:fbjs@0.8.17/lib/camelize.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var camelize = $__require('npm:fbjs@0.8.17/lib/camelize.js');
  var msPattern = /^-ms-/;
  function camelizeStyleName(string) {
    return camelize(string.replace(msPattern, 'ms-'));
  }
  module.exports = camelizeStyleName;
});
System.registerDynamic('npm:react-dom@16.4.0/cjs/react-dom.development.js', ['npm:fbjs@0.8.17/lib/invariant.js', 'npm:react@16.4.1.js', 'npm:fbjs@0.8.17/lib/warning.js', 'npm:fbjs@0.8.17/lib/ExecutionEnvironment.js', 'npm:object-assign@4.1.1.js', 'npm:fbjs@0.8.17/lib/emptyFunction.js', 'npm:prop-types@15.6.2/checkPropTypes.js', 'npm:fbjs@0.8.17/lib/getActiveElement.js', 'npm:fbjs@0.8.17/lib/shallowEqual.js', 'npm:fbjs@0.8.17/lib/containsNode.js', 'npm:fbjs@0.8.17/lib/emptyObject.js', 'npm:fbjs@0.8.17/lib/hyphenateStyleName.js', 'npm:fbjs@0.8.17/lib/camelizeStyleName.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    if ('production' !== "production") {
      (function () {
        'use strict';

        var invariant = $__require('npm:fbjs@0.8.17/lib/invariant.js');
        var React = $__require('npm:react@16.4.1.js');
        var warning = $__require('npm:fbjs@0.8.17/lib/warning.js');
        var ExecutionEnvironment = $__require('npm:fbjs@0.8.17/lib/ExecutionEnvironment.js');
        var _assign = $__require('npm:object-assign@4.1.1.js');
        var emptyFunction = $__require('npm:fbjs@0.8.17/lib/emptyFunction.js');
        var checkPropTypes = $__require('npm:prop-types@15.6.2/checkPropTypes.js');
        var getActiveElement = $__require('npm:fbjs@0.8.17/lib/getActiveElement.js');
        var shallowEqual = $__require('npm:fbjs@0.8.17/lib/shallowEqual.js');
        var containsNode = $__require('npm:fbjs@0.8.17/lib/containsNode.js');
        var emptyObject = $__require('npm:fbjs@0.8.17/lib/emptyObject.js');
        var hyphenateStyleName = $__require('npm:fbjs@0.8.17/lib/hyphenateStyleName.js');
        var camelizeStyleName = $__require('npm:fbjs@0.8.17/lib/camelizeStyleName.js');
        !React ? invariant(false, 'ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.') : void 0;
        var invokeGuardedCallback = function (name, func, context, a, b, c, d, e, f) {
          this._hasCaughtError = false;
          this._caughtError = null;
          var funcArgs = Array.prototype.slice.call(arguments, 3);
          try {
            func.apply(context, funcArgs);
          } catch (error) {
            this._caughtError = error;
            this._hasCaughtError = true;
          }
        };
        {
          if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
            var fakeNode = document.createElement('react');
            var invokeGuardedCallbackDev = function (name, func, context, a, b, c, d, e, f) {
              !(typeof document !== 'undefined') ? invariant(false, 'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.') : void 0;
              var evt = document.createEvent('Event');
              var didError = true;
              var funcArgs = Array.prototype.slice.call(arguments, 3);
              function callCallback() {
                fakeNode.removeEventListener(evtType, callCallback, false);
                func.apply(context, funcArgs);
                didError = false;
              }
              var error = void 0;
              var didSetError = false;
              var isCrossOriginError = false;
              function onError(event) {
                error = event.error;
                didSetError = true;
                if (error === null && event.colno === 0 && event.lineno === 0) {
                  isCrossOriginError = true;
                }
              }
              var evtType = 'react-' + (name ? name : 'invokeguardedcallback');
              window.addEventListener('error', onError);
              fakeNode.addEventListener(evtType, callCallback, false);
              evt.initEvent(evtType, false, false);
              fakeNode.dispatchEvent(evt);
              if (didError) {
                if (!didSetError) {
                  error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
                } else if (isCrossOriginError) {
                  error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://fb.me/react-crossorigin-error for more information.');
                }
                this._hasCaughtError = true;
                this._caughtError = error;
              } else {
                this._hasCaughtError = false;
                this._caughtError = null;
              }
              window.removeEventListener('error', onError);
            };
            invokeGuardedCallback = invokeGuardedCallbackDev;
          }
        }
        var invokeGuardedCallback$1 = invokeGuardedCallback;
        var ReactErrorUtils = {
          _caughtError: null,
          _hasCaughtError: false,
          _rethrowError: null,
          _hasRethrowError: false,
          invokeGuardedCallback: function (name, func, context, a, b, c, d, e, f) {
            invokeGuardedCallback$1.apply(ReactErrorUtils, arguments);
          },
          invokeGuardedCallbackAndCatchFirstError: function (name, func, context, a, b, c, d, e, f) {
            ReactErrorUtils.invokeGuardedCallback.apply(this, arguments);
            if (ReactErrorUtils.hasCaughtError()) {
              var error = ReactErrorUtils.clearCaughtError();
              if (!ReactErrorUtils._hasRethrowError) {
                ReactErrorUtils._hasRethrowError = true;
                ReactErrorUtils._rethrowError = error;
              }
            }
          },
          rethrowCaughtError: function () {
            return rethrowCaughtError.apply(ReactErrorUtils, arguments);
          },
          hasCaughtError: function () {
            return ReactErrorUtils._hasCaughtError;
          },
          clearCaughtError: function () {
            if (ReactErrorUtils._hasCaughtError) {
              var error = ReactErrorUtils._caughtError;
              ReactErrorUtils._caughtError = null;
              ReactErrorUtils._hasCaughtError = false;
              return error;
            } else {
              invariant(false, 'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.');
            }
          }
        };
        var rethrowCaughtError = function () {
          if (ReactErrorUtils._hasRethrowError) {
            var error = ReactErrorUtils._rethrowError;
            ReactErrorUtils._rethrowError = null;
            ReactErrorUtils._hasRethrowError = false;
            throw error;
          }
        };
        var eventPluginOrder = null;
        var namesToPlugins = {};
        function recomputePluginOrdering() {
          if (!eventPluginOrder) {
            return;
          }
          for (var pluginName in namesToPlugins) {
            var pluginModule = namesToPlugins[pluginName];
            var pluginIndex = eventPluginOrder.indexOf(pluginName);
            !(pluginIndex > -1) ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : void 0;
            if (plugins[pluginIndex]) {
              continue;
            }
            !pluginModule.extractEvents ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : void 0;
            plugins[pluginIndex] = pluginModule;
            var publishedEvents = pluginModule.eventTypes;
            for (var eventName in publishedEvents) {
              !publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : void 0;
            }
          }
        }
        function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
          !!eventNameDispatchConfigs.hasOwnProperty(eventName) ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : void 0;
          eventNameDispatchConfigs[eventName] = dispatchConfig;
          var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
          if (phasedRegistrationNames) {
            for (var phaseName in phasedRegistrationNames) {
              if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
                var phasedRegistrationName = phasedRegistrationNames[phaseName];
                publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
              }
            }
            return true;
          } else if (dispatchConfig.registrationName) {
            publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
            return true;
          }
          return false;
        }
        function publishRegistrationName(registrationName, pluginModule, eventName) {
          !!registrationNameModules[registrationName] ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : void 0;
          registrationNameModules[registrationName] = pluginModule;
          registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;
          {
            var lowerCasedName = registrationName.toLowerCase();
            possibleRegistrationNames[lowerCasedName] = registrationName;
            if (registrationName === 'onDoubleClick') {
              possibleRegistrationNames.ondblclick = registrationName;
            }
          }
        }
        var plugins = [];
        var eventNameDispatchConfigs = {};
        var registrationNameModules = {};
        var registrationNameDependencies = {};
        var possibleRegistrationNames = {};
        function injectEventPluginOrder(injectedEventPluginOrder) {
          !!eventPluginOrder ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : void 0;
          eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
          recomputePluginOrdering();
        }
        function injectEventPluginsByName(injectedNamesToPlugins) {
          var isOrderingDirty = false;
          for (var pluginName in injectedNamesToPlugins) {
            if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
              continue;
            }
            var pluginModule = injectedNamesToPlugins[pluginName];
            if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
              !!namesToPlugins[pluginName] ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : void 0;
              namesToPlugins[pluginName] = pluginModule;
              isOrderingDirty = true;
            }
          }
          if (isOrderingDirty) {
            recomputePluginOrdering();
          }
        }
        var EventPluginRegistry = Object.freeze({
          plugins: plugins,
          eventNameDispatchConfigs: eventNameDispatchConfigs,
          registrationNameModules: registrationNameModules,
          registrationNameDependencies: registrationNameDependencies,
          possibleRegistrationNames: possibleRegistrationNames,
          injectEventPluginOrder: injectEventPluginOrder,
          injectEventPluginsByName: injectEventPluginsByName
        });
        var getFiberCurrentPropsFromNode = null;
        var getInstanceFromNode = null;
        var getNodeFromInstance = null;
        var injection$1 = { injectComponentTree: function (Injected) {
            getFiberCurrentPropsFromNode = Injected.getFiberCurrentPropsFromNode;
            getInstanceFromNode = Injected.getInstanceFromNode;
            getNodeFromInstance = Injected.getNodeFromInstance;
            {
              !(getNodeFromInstance && getInstanceFromNode) ? warning(false, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.') : void 0;
            }
          } };
        var validateEventDispatches = void 0;
        {
          validateEventDispatches = function (event) {
            var dispatchListeners = event._dispatchListeners;
            var dispatchInstances = event._dispatchInstances;
            var listenersIsArr = Array.isArray(dispatchListeners);
            var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
            var instancesIsArr = Array.isArray(dispatchInstances);
            var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;
            !(instancesIsArr === listenersIsArr && instancesLen === listenersLen) ? warning(false, 'EventPluginUtils: Invalid `event`.') : void 0;
          };
        }
        function executeDispatch(event, simulated, listener, inst) {
          var type = event.type || 'unknown-event';
          event.currentTarget = getNodeFromInstance(inst);
          ReactErrorUtils.invokeGuardedCallbackAndCatchFirstError(type, listener, undefined, event);
          event.currentTarget = null;
        }
        function executeDispatchesInOrder(event, simulated) {
          var dispatchListeners = event._dispatchListeners;
          var dispatchInstances = event._dispatchInstances;
          {
            validateEventDispatches(event);
          }
          if (Array.isArray(dispatchListeners)) {
            for (var i = 0; i < dispatchListeners.length; i++) {
              if (event.isPropagationStopped()) {
                break;
              }
              executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
            }
          } else if (dispatchListeners) {
            executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
          }
          event._dispatchListeners = null;
          event._dispatchInstances = null;
        }
        function accumulateInto(current, next) {
          !(next != null) ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : void 0;
          if (current == null) {
            return next;
          }
          if (Array.isArray(current)) {
            if (Array.isArray(next)) {
              current.push.apply(current, next);
              return current;
            }
            current.push(next);
            return current;
          }
          if (Array.isArray(next)) {
            return [current].concat(next);
          }
          return [current, next];
        }
        function forEachAccumulated(arr, cb, scope) {
          if (Array.isArray(arr)) {
            arr.forEach(cb, scope);
          } else if (arr) {
            cb.call(scope, arr);
          }
        }
        var eventQueue = null;
        var executeDispatchesAndRelease = function (event, simulated) {
          if (event) {
            executeDispatchesInOrder(event, simulated);
            if (!event.isPersistent()) {
              event.constructor.release(event);
            }
          }
        };
        var executeDispatchesAndReleaseSimulated = function (e) {
          return executeDispatchesAndRelease(e, true);
        };
        var executeDispatchesAndReleaseTopLevel = function (e) {
          return executeDispatchesAndRelease(e, false);
        };
        function isInteractive(tag) {
          return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
        }
        function shouldPreventMouseEvent(name, type, props) {
          switch (name) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
              return !!(props.disabled && isInteractive(type));
            default:
              return false;
          }
        }
        var injection = {
          injectEventPluginOrder: injectEventPluginOrder,
          injectEventPluginsByName: injectEventPluginsByName
        };
        function getListener(inst, registrationName) {
          var listener = void 0;
          var stateNode = inst.stateNode;
          if (!stateNode) {
            return null;
          }
          var props = getFiberCurrentPropsFromNode(stateNode);
          if (!props) {
            return null;
          }
          listener = props[registrationName];
          if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
            return null;
          }
          !(!listener || typeof listener === 'function') ? invariant(false, 'Expected `%s` listener to be a function, instead got a value of `%s` type.', registrationName, typeof listener) : void 0;
          return listener;
        }
        function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
          var events = null;
          for (var i = 0; i < plugins.length; i++) {
            var possiblePlugin = plugins[i];
            if (possiblePlugin) {
              var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
              if (extractedEvents) {
                events = accumulateInto(events, extractedEvents);
              }
            }
          }
          return events;
        }
        function runEventsInBatch(events, simulated) {
          if (events !== null) {
            eventQueue = accumulateInto(eventQueue, events);
          }
          var processingEventQueue = eventQueue;
          eventQueue = null;
          if (!processingEventQueue) {
            return;
          }
          if (simulated) {
            forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
          } else {
            forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
          }
          !!eventQueue ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.') : void 0;
          ReactErrorUtils.rethrowCaughtError();
        }
        function runExtractedEventsInBatch(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
          var events = extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
          runEventsInBatch(events, false);
        }
        var EventPluginHub = Object.freeze({
          injection: injection,
          getListener: getListener,
          runEventsInBatch: runEventsInBatch,
          runExtractedEventsInBatch: runExtractedEventsInBatch
        });
        var IndeterminateComponent = 0;
        var FunctionalComponent = 1;
        var ClassComponent = 2;
        var HostRoot = 3;
        var HostPortal = 4;
        var HostComponent = 5;
        var HostText = 6;
        var Fragment = 10;
        var Mode = 11;
        var ContextConsumer = 12;
        var ContextProvider = 13;
        var ForwardRef = 14;
        var Profiler = 15;
        var TimeoutComponent = 16;
        var randomKey = Math.random().toString(36).slice(2);
        var internalInstanceKey = '__reactInternalInstance$' + randomKey;
        var internalEventHandlersKey = '__reactEventHandlers$' + randomKey;
        function precacheFiberNode(hostInst, node) {
          node[internalInstanceKey] = hostInst;
        }
        function getClosestInstanceFromNode(node) {
          if (node[internalInstanceKey]) {
            return node[internalInstanceKey];
          }
          while (!node[internalInstanceKey]) {
            if (node.parentNode) {
              node = node.parentNode;
            } else {
              return null;
            }
          }
          var inst = node[internalInstanceKey];
          if (inst.tag === HostComponent || inst.tag === HostText) {
            return inst;
          }
          return null;
        }
        function getInstanceFromNode$1(node) {
          var inst = node[internalInstanceKey];
          if (inst) {
            if (inst.tag === HostComponent || inst.tag === HostText) {
              return inst;
            } else {
              return null;
            }
          }
          return null;
        }
        function getNodeFromInstance$1(inst) {
          if (inst.tag === HostComponent || inst.tag === HostText) {
            return inst.stateNode;
          }
          invariant(false, 'getNodeFromInstance: Invalid argument.');
        }
        function getFiberCurrentPropsFromNode$1(node) {
          return node[internalEventHandlersKey] || null;
        }
        function updateFiberProps(node, props) {
          node[internalEventHandlersKey] = props;
        }
        var ReactDOMComponentTree = Object.freeze({
          precacheFiberNode: precacheFiberNode,
          getClosestInstanceFromNode: getClosestInstanceFromNode,
          getInstanceFromNode: getInstanceFromNode$1,
          getNodeFromInstance: getNodeFromInstance$1,
          getFiberCurrentPropsFromNode: getFiberCurrentPropsFromNode$1,
          updateFiberProps: updateFiberProps
        });
        function getParent(inst) {
          do {
            inst = inst.return;
          } while (inst && inst.tag !== HostComponent);
          if (inst) {
            return inst;
          }
          return null;
        }
        function getLowestCommonAncestor(instA, instB) {
          var depthA = 0;
          for (var tempA = instA; tempA; tempA = getParent(tempA)) {
            depthA++;
          }
          var depthB = 0;
          for (var tempB = instB; tempB; tempB = getParent(tempB)) {
            depthB++;
          }
          while (depthA - depthB > 0) {
            instA = getParent(instA);
            depthA--;
          }
          while (depthB - depthA > 0) {
            instB = getParent(instB);
            depthB--;
          }
          var depth = depthA;
          while (depth--) {
            if (instA === instB || instA === instB.alternate) {
              return instA;
            }
            instA = getParent(instA);
            instB = getParent(instB);
          }
          return null;
        }
        function getParentInstance(inst) {
          return getParent(inst);
        }
        function traverseTwoPhase(inst, fn, arg) {
          var path = [];
          while (inst) {
            path.push(inst);
            inst = getParent(inst);
          }
          var i = void 0;
          for (i = path.length; i-- > 0;) {
            fn(path[i], 'captured', arg);
          }
          for (i = 0; i < path.length; i++) {
            fn(path[i], 'bubbled', arg);
          }
        }
        function traverseEnterLeave(from, to, fn, argFrom, argTo) {
          var common = from && to ? getLowestCommonAncestor(from, to) : null;
          var pathFrom = [];
          while (true) {
            if (!from) {
              break;
            }
            if (from === common) {
              break;
            }
            var alternate = from.alternate;
            if (alternate !== null && alternate === common) {
              break;
            }
            pathFrom.push(from);
            from = getParent(from);
          }
          var pathTo = [];
          while (true) {
            if (!to) {
              break;
            }
            if (to === common) {
              break;
            }
            var _alternate = to.alternate;
            if (_alternate !== null && _alternate === common) {
              break;
            }
            pathTo.push(to);
            to = getParent(to);
          }
          for (var i = 0; i < pathFrom.length; i++) {
            fn(pathFrom[i], 'bubbled', argFrom);
          }
          for (var _i = pathTo.length; _i-- > 0;) {
            fn(pathTo[_i], 'captured', argTo);
          }
        }
        function listenerAtPhase(inst, event, propagationPhase) {
          var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
          return getListener(inst, registrationName);
        }
        function accumulateDirectionalDispatches(inst, phase, event) {
          {
            !inst ? warning(false, 'Dispatching inst must not be null') : void 0;
          }
          var listener = listenerAtPhase(inst, event, phase);
          if (listener) {
            event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
            event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
          }
        }
        function accumulateTwoPhaseDispatchesSingle(event) {
          if (event && event.dispatchConfig.phasedRegistrationNames) {
            traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
          }
        }
        function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
          if (event && event.dispatchConfig.phasedRegistrationNames) {
            var targetInst = event._targetInst;
            var parentInst = targetInst ? getParentInstance(targetInst) : null;
            traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
          }
        }
        function accumulateDispatches(inst, ignoredDirection, event) {
          if (inst && event && event.dispatchConfig.registrationName) {
            var registrationName = event.dispatchConfig.registrationName;
            var listener = getListener(inst, registrationName);
            if (listener) {
              event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
              event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
            }
          }
        }
        function accumulateDirectDispatchesSingle(event) {
          if (event && event.dispatchConfig.registrationName) {
            accumulateDispatches(event._targetInst, null, event);
          }
        }
        function accumulateTwoPhaseDispatches(events) {
          forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
        }
        function accumulateTwoPhaseDispatchesSkipTarget(events) {
          forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
        }
        function accumulateEnterLeaveDispatches(leave, enter, from, to) {
          traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
        }
        function accumulateDirectDispatches(events) {
          forEachAccumulated(events, accumulateDirectDispatchesSingle);
        }
        var EventPropagators = Object.freeze({
          accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
          accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
          accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches,
          accumulateDirectDispatches: accumulateDirectDispatches
        });
        function unsafeCastStringToDOMTopLevelType(topLevelType) {
          return topLevelType;
        }
        function unsafeCastDOMTopLevelTypeToString(topLevelType) {
          return topLevelType;
        }
        function makePrefixMap(styleProp, eventName) {
          var prefixes = {};
          prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
          prefixes['Webkit' + styleProp] = 'webkit' + eventName;
          prefixes['Moz' + styleProp] = 'moz' + eventName;
          prefixes['ms' + styleProp] = 'MS' + eventName;
          prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();
          return prefixes;
        }
        var vendorPrefixes = {
          animationend: makePrefixMap('Animation', 'AnimationEnd'),
          animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
          animationstart: makePrefixMap('Animation', 'AnimationStart'),
          transitionend: makePrefixMap('Transition', 'TransitionEnd')
        };
        var prefixedEventNames = {};
        var style = {};
        if (ExecutionEnvironment.canUseDOM) {
          style = document.createElement('div').style;
          if (!('AnimationEvent' in window)) {
            delete vendorPrefixes.animationend.animation;
            delete vendorPrefixes.animationiteration.animation;
            delete vendorPrefixes.animationstart.animation;
          }
          if (!('TransitionEvent' in window)) {
            delete vendorPrefixes.transitionend.transition;
          }
        }
        function getVendorPrefixedEventName(eventName) {
          if (prefixedEventNames[eventName]) {
            return prefixedEventNames[eventName];
          } else if (!vendorPrefixes[eventName]) {
            return eventName;
          }
          var prefixMap = vendorPrefixes[eventName];
          for (var styleProp in prefixMap) {
            if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
              return prefixedEventNames[eventName] = prefixMap[styleProp];
            }
          }
          return eventName;
        }
        var TOP_ABORT = unsafeCastStringToDOMTopLevelType('abort');
        var TOP_ANIMATION_END = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName('animationend'));
        var TOP_ANIMATION_ITERATION = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName('animationiteration'));
        var TOP_ANIMATION_START = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName('animationstart'));
        var TOP_BLUR = unsafeCastStringToDOMTopLevelType('blur');
        var TOP_CAN_PLAY = unsafeCastStringToDOMTopLevelType('canplay');
        var TOP_CAN_PLAY_THROUGH = unsafeCastStringToDOMTopLevelType('canplaythrough');
        var TOP_CANCEL = unsafeCastStringToDOMTopLevelType('cancel');
        var TOP_CHANGE = unsafeCastStringToDOMTopLevelType('change');
        var TOP_CLICK = unsafeCastStringToDOMTopLevelType('click');
        var TOP_CLOSE = unsafeCastStringToDOMTopLevelType('close');
        var TOP_COMPOSITION_END = unsafeCastStringToDOMTopLevelType('compositionend');
        var TOP_COMPOSITION_START = unsafeCastStringToDOMTopLevelType('compositionstart');
        var TOP_COMPOSITION_UPDATE = unsafeCastStringToDOMTopLevelType('compositionupdate');
        var TOP_CONTEXT_MENU = unsafeCastStringToDOMTopLevelType('contextmenu');
        var TOP_COPY = unsafeCastStringToDOMTopLevelType('copy');
        var TOP_CUT = unsafeCastStringToDOMTopLevelType('cut');
        var TOP_DOUBLE_CLICK = unsafeCastStringToDOMTopLevelType('dblclick');
        var TOP_DRAG = unsafeCastStringToDOMTopLevelType('drag');
        var TOP_DRAG_END = unsafeCastStringToDOMTopLevelType('dragend');
        var TOP_DRAG_ENTER = unsafeCastStringToDOMTopLevelType('dragenter');
        var TOP_DRAG_EXIT = unsafeCastStringToDOMTopLevelType('dragexit');
        var TOP_DRAG_LEAVE = unsafeCastStringToDOMTopLevelType('dragleave');
        var TOP_DRAG_OVER = unsafeCastStringToDOMTopLevelType('dragover');
        var TOP_DRAG_START = unsafeCastStringToDOMTopLevelType('dragstart');
        var TOP_DROP = unsafeCastStringToDOMTopLevelType('drop');
        var TOP_DURATION_CHANGE = unsafeCastStringToDOMTopLevelType('durationchange');
        var TOP_EMPTIED = unsafeCastStringToDOMTopLevelType('emptied');
        var TOP_ENCRYPTED = unsafeCastStringToDOMTopLevelType('encrypted');
        var TOP_ENDED = unsafeCastStringToDOMTopLevelType('ended');
        var TOP_ERROR = unsafeCastStringToDOMTopLevelType('error');
        var TOP_FOCUS = unsafeCastStringToDOMTopLevelType('focus');
        var TOP_GOT_POINTER_CAPTURE = unsafeCastStringToDOMTopLevelType('gotpointercapture');
        var TOP_INPUT = unsafeCastStringToDOMTopLevelType('input');
        var TOP_INVALID = unsafeCastStringToDOMTopLevelType('invalid');
        var TOP_KEY_DOWN = unsafeCastStringToDOMTopLevelType('keydown');
        var TOP_KEY_PRESS = unsafeCastStringToDOMTopLevelType('keypress');
        var TOP_KEY_UP = unsafeCastStringToDOMTopLevelType('keyup');
        var TOP_LOAD = unsafeCastStringToDOMTopLevelType('load');
        var TOP_LOAD_START = unsafeCastStringToDOMTopLevelType('loadstart');
        var TOP_LOADED_DATA = unsafeCastStringToDOMTopLevelType('loadeddata');
        var TOP_LOADED_METADATA = unsafeCastStringToDOMTopLevelType('loadedmetadata');
        var TOP_LOST_POINTER_CAPTURE = unsafeCastStringToDOMTopLevelType('lostpointercapture');
        var TOP_MOUSE_DOWN = unsafeCastStringToDOMTopLevelType('mousedown');
        var TOP_MOUSE_MOVE = unsafeCastStringToDOMTopLevelType('mousemove');
        var TOP_MOUSE_OUT = unsafeCastStringToDOMTopLevelType('mouseout');
        var TOP_MOUSE_OVER = unsafeCastStringToDOMTopLevelType('mouseover');
        var TOP_MOUSE_UP = unsafeCastStringToDOMTopLevelType('mouseup');
        var TOP_PASTE = unsafeCastStringToDOMTopLevelType('paste');
        var TOP_PAUSE = unsafeCastStringToDOMTopLevelType('pause');
        var TOP_PLAY = unsafeCastStringToDOMTopLevelType('play');
        var TOP_PLAYING = unsafeCastStringToDOMTopLevelType('playing');
        var TOP_POINTER_CANCEL = unsafeCastStringToDOMTopLevelType('pointercancel');
        var TOP_POINTER_DOWN = unsafeCastStringToDOMTopLevelType('pointerdown');
        var TOP_POINTER_MOVE = unsafeCastStringToDOMTopLevelType('pointermove');
        var TOP_POINTER_OUT = unsafeCastStringToDOMTopLevelType('pointerout');
        var TOP_POINTER_OVER = unsafeCastStringToDOMTopLevelType('pointerover');
        var TOP_POINTER_UP = unsafeCastStringToDOMTopLevelType('pointerup');
        var TOP_PROGRESS = unsafeCastStringToDOMTopLevelType('progress');
        var TOP_RATE_CHANGE = unsafeCastStringToDOMTopLevelType('ratechange');
        var TOP_RESET = unsafeCastStringToDOMTopLevelType('reset');
        var TOP_SCROLL = unsafeCastStringToDOMTopLevelType('scroll');
        var TOP_SEEKED = unsafeCastStringToDOMTopLevelType('seeked');
        var TOP_SEEKING = unsafeCastStringToDOMTopLevelType('seeking');
        var TOP_SELECTION_CHANGE = unsafeCastStringToDOMTopLevelType('selectionchange');
        var TOP_STALLED = unsafeCastStringToDOMTopLevelType('stalled');
        var TOP_SUBMIT = unsafeCastStringToDOMTopLevelType('submit');
        var TOP_SUSPEND = unsafeCastStringToDOMTopLevelType('suspend');
        var TOP_TEXT_INPUT = unsafeCastStringToDOMTopLevelType('textInput');
        var TOP_TIME_UPDATE = unsafeCastStringToDOMTopLevelType('timeupdate');
        var TOP_TOGGLE = unsafeCastStringToDOMTopLevelType('toggle');
        var TOP_TOUCH_CANCEL = unsafeCastStringToDOMTopLevelType('touchcancel');
        var TOP_TOUCH_END = unsafeCastStringToDOMTopLevelType('touchend');
        var TOP_TOUCH_MOVE = unsafeCastStringToDOMTopLevelType('touchmove');
        var TOP_TOUCH_START = unsafeCastStringToDOMTopLevelType('touchstart');
        var TOP_TRANSITION_END = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName('transitionend'));
        var TOP_VOLUME_CHANGE = unsafeCastStringToDOMTopLevelType('volumechange');
        var TOP_WAITING = unsafeCastStringToDOMTopLevelType('waiting');
        var TOP_WHEEL = unsafeCastStringToDOMTopLevelType('wheel');
        var mediaEventTypes = [TOP_ABORT, TOP_CAN_PLAY, TOP_CAN_PLAY_THROUGH, TOP_DURATION_CHANGE, TOP_EMPTIED, TOP_ENCRYPTED, TOP_ENDED, TOP_ERROR, TOP_LOADED_DATA, TOP_LOADED_METADATA, TOP_LOAD_START, TOP_PAUSE, TOP_PLAY, TOP_PLAYING, TOP_PROGRESS, TOP_RATE_CHANGE, TOP_SEEKED, TOP_SEEKING, TOP_STALLED, TOP_SUSPEND, TOP_TIME_UPDATE, TOP_VOLUME_CHANGE, TOP_WAITING];
        function getRawEventName(topLevelType) {
          return unsafeCastDOMTopLevelTypeToString(topLevelType);
        }
        var contentKey = null;
        function getTextContentAccessor() {
          if (!contentKey && ExecutionEnvironment.canUseDOM) {
            contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
          }
          return contentKey;
        }
        var compositionState = {
          _root: null,
          _startText: null,
          _fallbackText: null
        };
        function initialize(nativeEventTarget) {
          compositionState._root = nativeEventTarget;
          compositionState._startText = getText();
          return true;
        }
        function reset() {
          compositionState._root = null;
          compositionState._startText = null;
          compositionState._fallbackText = null;
        }
        function getData() {
          if (compositionState._fallbackText) {
            return compositionState._fallbackText;
          }
          var start = void 0;
          var startValue = compositionState._startText;
          var startLength = startValue.length;
          var end = void 0;
          var endValue = getText();
          var endLength = endValue.length;
          for (start = 0; start < startLength; start++) {
            if (startValue[start] !== endValue[start]) {
              break;
            }
          }
          var minEnd = startLength - start;
          for (end = 1; end <= minEnd; end++) {
            if (startValue[startLength - end] !== endValue[endLength - end]) {
              break;
            }
          }
          var sliceTail = end > 1 ? 1 - end : undefined;
          compositionState._fallbackText = endValue.slice(start, sliceTail);
          return compositionState._fallbackText;
        }
        function getText() {
          if ('value' in compositionState._root) {
            return compositionState._root.value;
          }
          return compositionState._root[getTextContentAccessor()];
        }
        var didWarnForAddedNewProperty = false;
        var EVENT_POOL_SIZE = 10;
        var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];
        var EventInterface = {
          type: null,
          target: null,
          currentTarget: emptyFunction.thatReturnsNull,
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function (event) {
            return event.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null
        };
        function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
          {
            delete this.nativeEvent;
            delete this.preventDefault;
            delete this.stopPropagation;
          }
          this.dispatchConfig = dispatchConfig;
          this._targetInst = targetInst;
          this.nativeEvent = nativeEvent;
          var Interface = this.constructor.Interface;
          for (var propName in Interface) {
            if (!Interface.hasOwnProperty(propName)) {
              continue;
            }
            {
              delete this[propName];
            }
            var normalize = Interface[propName];
            if (normalize) {
              this[propName] = normalize(nativeEvent);
            } else {
              if (propName === 'target') {
                this.target = nativeEventTarget;
              } else {
                this[propName] = nativeEvent[propName];
              }
            }
          }
          var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
          if (defaultPrevented) {
            this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
          } else {
            this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
          }
          this.isPropagationStopped = emptyFunction.thatReturnsFalse;
          return this;
        }
        _assign(SyntheticEvent.prototype, {
          preventDefault: function () {
            this.defaultPrevented = true;
            var event = this.nativeEvent;
            if (!event) {
              return;
            }
            if (event.preventDefault) {
              event.preventDefault();
            } else if (typeof event.returnValue !== 'unknown') {
              event.returnValue = false;
            }
            this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
          },
          stopPropagation: function () {
            var event = this.nativeEvent;
            if (!event) {
              return;
            }
            if (event.stopPropagation) {
              event.stopPropagation();
            } else if (typeof event.cancelBubble !== 'unknown') {
              event.cancelBubble = true;
            }
            this.isPropagationStopped = emptyFunction.thatReturnsTrue;
          },
          persist: function () {
            this.isPersistent = emptyFunction.thatReturnsTrue;
          },
          isPersistent: emptyFunction.thatReturnsFalse,
          destructor: function () {
            var Interface = this.constructor.Interface;
            for (var propName in Interface) {
              {
                Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
              }
            }
            for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
              this[shouldBeReleasedProperties[i]] = null;
            }
            {
              Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
              Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', emptyFunction));
              Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', emptyFunction));
            }
          }
        });
        SyntheticEvent.Interface = EventInterface;
        SyntheticEvent.extend = function (Interface) {
          var Super = this;
          var E = function () {};
          E.prototype = Super.prototype;
          var prototype = new E();
          function Class() {
            return Super.apply(this, arguments);
          }
          _assign(prototype, Class.prototype);
          Class.prototype = prototype;
          Class.prototype.constructor = Class;
          Class.Interface = _assign({}, Super.Interface, Interface);
          Class.extend = Super.extend;
          addEventPoolingTo(Class);
          return Class;
        };
        {
          var isProxySupported = typeof Proxy === 'function' && !Object.isSealed(new Proxy({}, {}));
          if (isProxySupported) {
            SyntheticEvent = new Proxy(SyntheticEvent, {
              construct: function (target, args) {
                return this.apply(target, Object.create(target.prototype), args);
              },
              apply: function (constructor, that, args) {
                return new Proxy(constructor.apply(that, args), { set: function (target, prop, value) {
                    if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
                      !(didWarnForAddedNewProperty || target.isPersistent()) ? warning(false, "This synthetic event is reused for performance reasons. If you're " + "seeing this, you're adding a new property in the synthetic event object. " + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
                      didWarnForAddedNewProperty = true;
                    }
                    target[prop] = value;
                    return true;
                  } });
              }
            });
          }
        }
        addEventPoolingTo(SyntheticEvent);
        function getPooledWarningPropertyDefinition(propName, getVal) {
          var isFunction = typeof getVal === 'function';
          return {
            configurable: true,
            set: set,
            get: get
          };
          function set(val) {
            var action = isFunction ? 'setting the method' : 'setting the property';
            warn(action, 'This is effectively a no-op');
            return val;
          }
          function get() {
            var action = isFunction ? 'accessing the method' : 'accessing the property';
            var result = isFunction ? 'This is a no-op function' : 'This is set to null';
            warn(action, result);
            return getVal;
          }
          function warn(action, result) {
            var warningCondition = false;
            !warningCondition ? warning(false, "This synthetic event is reused for performance reasons. If you're seeing this, " + "you're %s `%s` on a released/nullified synthetic event. %s. " + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result) : void 0;
          }
        }
        function getPooledEvent(dispatchConfig, targetInst, nativeEvent, nativeInst) {
          var EventConstructor = this;
          if (EventConstructor.eventPool.length) {
            var instance = EventConstructor.eventPool.pop();
            EventConstructor.call(instance, dispatchConfig, targetInst, nativeEvent, nativeInst);
            return instance;
          }
          return new EventConstructor(dispatchConfig, targetInst, nativeEvent, nativeInst);
        }
        function releasePooledEvent(event) {
          var EventConstructor = this;
          !(event instanceof EventConstructor) ? invariant(false, 'Trying to release an event instance  into a pool of a different type.') : void 0;
          event.destructor();
          if (EventConstructor.eventPool.length < EVENT_POOL_SIZE) {
            EventConstructor.eventPool.push(event);
          }
        }
        function addEventPoolingTo(EventConstructor) {
          EventConstructor.eventPool = [];
          EventConstructor.getPooled = getPooledEvent;
          EventConstructor.release = releasePooledEvent;
        }
        var SyntheticEvent$1 = SyntheticEvent;
        var SyntheticCompositionEvent = SyntheticEvent$1.extend({ data: null });
        var SyntheticInputEvent = SyntheticEvent$1.extend({ data: null });
        var END_KEYCODES = [9, 13, 27, 32];
        var START_KEYCODE = 229;
        var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;
        var documentMode = null;
        if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
          documentMode = document.documentMode;
        }
        var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode;
        var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
        var SPACEBAR_CODE = 32;
        var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
        var eventTypes = {
          beforeInput: {
            phasedRegistrationNames: {
              bubbled: 'onBeforeInput',
              captured: 'onBeforeInputCapture'
            },
            dependencies: [TOP_COMPOSITION_END, TOP_KEY_PRESS, TOP_TEXT_INPUT, TOP_PASTE]
          },
          compositionEnd: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionEnd',
              captured: 'onCompositionEndCapture'
            },
            dependencies: [TOP_BLUR, TOP_COMPOSITION_END, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN]
          },
          compositionStart: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionStart',
              captured: 'onCompositionStartCapture'
            },
            dependencies: [TOP_BLUR, TOP_COMPOSITION_START, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN]
          },
          compositionUpdate: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionUpdate',
              captured: 'onCompositionUpdateCapture'
            },
            dependencies: [TOP_BLUR, TOP_COMPOSITION_UPDATE, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN]
          }
        };
        var hasSpaceKeypress = false;
        function isKeypressCommand(nativeEvent) {
          return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
        }
        function getCompositionEventType(topLevelType) {
          switch (topLevelType) {
            case TOP_COMPOSITION_START:
              return eventTypes.compositionStart;
            case TOP_COMPOSITION_END:
              return eventTypes.compositionEnd;
            case TOP_COMPOSITION_UPDATE:
              return eventTypes.compositionUpdate;
          }
        }
        function isFallbackCompositionStart(topLevelType, nativeEvent) {
          return topLevelType === TOP_KEY_DOWN && nativeEvent.keyCode === START_KEYCODE;
        }
        function isFallbackCompositionEnd(topLevelType, nativeEvent) {
          switch (topLevelType) {
            case TOP_KEY_UP:
              return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
            case TOP_KEY_DOWN:
              return nativeEvent.keyCode !== START_KEYCODE;
            case TOP_KEY_PRESS:
            case TOP_MOUSE_DOWN:
            case TOP_BLUR:
              return true;
            default:
              return false;
          }
        }
        function getDataFromCustomEvent(nativeEvent) {
          var detail = nativeEvent.detail;
          if (typeof detail === 'object' && 'data' in detail) {
            return detail.data;
          }
          return null;
        }
        var isComposing = false;
        function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
          var eventType = void 0;
          var fallbackData = void 0;
          if (canUseCompositionEvent) {
            eventType = getCompositionEventType(topLevelType);
          } else if (!isComposing) {
            if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
              eventType = eventTypes.compositionStart;
            }
          } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
            eventType = eventTypes.compositionEnd;
          }
          if (!eventType) {
            return null;
          }
          if (useFallbackCompositionData) {
            if (!isComposing && eventType === eventTypes.compositionStart) {
              isComposing = initialize(nativeEventTarget);
            } else if (eventType === eventTypes.compositionEnd) {
              if (isComposing) {
                fallbackData = getData();
              }
            }
          }
          var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);
          if (fallbackData) {
            event.data = fallbackData;
          } else {
            var customData = getDataFromCustomEvent(nativeEvent);
            if (customData !== null) {
              event.data = customData;
            }
          }
          accumulateTwoPhaseDispatches(event);
          return event;
        }
        function getNativeBeforeInputChars(topLevelType, nativeEvent) {
          switch (topLevelType) {
            case TOP_COMPOSITION_END:
              return getDataFromCustomEvent(nativeEvent);
            case TOP_KEY_PRESS:
              var which = nativeEvent.which;
              if (which !== SPACEBAR_CODE) {
                return null;
              }
              hasSpaceKeypress = true;
              return SPACEBAR_CHAR;
            case TOP_TEXT_INPUT:
              var chars = nativeEvent.data;
              if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
                return null;
              }
              return chars;
            default:
              return null;
          }
        }
        function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
          if (isComposing) {
            if (topLevelType === TOP_COMPOSITION_END || !canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent)) {
              var chars = getData();
              reset();
              isComposing = false;
              return chars;
            }
            return null;
          }
          switch (topLevelType) {
            case TOP_PASTE:
              return null;
            case TOP_KEY_PRESS:
              if (!isKeypressCommand(nativeEvent)) {
                if (nativeEvent.char && nativeEvent.char.length > 1) {
                  return nativeEvent.char;
                } else if (nativeEvent.which) {
                  return String.fromCharCode(nativeEvent.which);
                }
              }
              return null;
            case TOP_COMPOSITION_END:
              return useFallbackCompositionData ? null : nativeEvent.data;
            default:
              return null;
          }
        }
        function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
          var chars = void 0;
          if (canUseTextInputEvent) {
            chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
          } else {
            chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
          }
          if (!chars) {
            return null;
          }
          var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);
          event.data = chars;
          accumulateTwoPhaseDispatches(event);
          return event;
        }
        var BeforeInputEventPlugin = {
          eventTypes: eventTypes,
          extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
            var composition = extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget);
            var beforeInput = extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget);
            if (composition === null) {
              return beforeInput;
            }
            if (beforeInput === null) {
              return composition;
            }
            return [composition, beforeInput];
          }
        };
        var fiberHostComponent = null;
        var ReactControlledComponentInjection = { injectFiberControlledHostComponent: function (hostComponentImpl) {
            fiberHostComponent = hostComponentImpl;
          } };
        var restoreTarget = null;
        var restoreQueue = null;
        function restoreStateOfTarget(target) {
          var internalInstance = getInstanceFromNode(target);
          if (!internalInstance) {
            return;
          }
          !(fiberHostComponent && typeof fiberHostComponent.restoreControlledState === 'function') ? invariant(false, 'Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          var props = getFiberCurrentPropsFromNode(internalInstance.stateNode);
          fiberHostComponent.restoreControlledState(internalInstance.stateNode, internalInstance.type, props);
        }
        var injection$2 = ReactControlledComponentInjection;
        function enqueueStateRestore(target) {
          if (restoreTarget) {
            if (restoreQueue) {
              restoreQueue.push(target);
            } else {
              restoreQueue = [target];
            }
          } else {
            restoreTarget = target;
          }
        }
        function needsStateRestore() {
          return restoreTarget !== null || restoreQueue !== null;
        }
        function restoreStateIfNeeded() {
          if (!restoreTarget) {
            return;
          }
          var target = restoreTarget;
          var queuedTargets = restoreQueue;
          restoreTarget = null;
          restoreQueue = null;
          restoreStateOfTarget(target);
          if (queuedTargets) {
            for (var i = 0; i < queuedTargets.length; i++) {
              restoreStateOfTarget(queuedTargets[i]);
            }
          }
        }
        var ReactControlledComponent = Object.freeze({
          injection: injection$2,
          enqueueStateRestore: enqueueStateRestore,
          needsStateRestore: needsStateRestore,
          restoreStateIfNeeded: restoreStateIfNeeded
        });
        var _batchedUpdates = function (fn, bookkeeping) {
          return fn(bookkeeping);
        };
        var _interactiveUpdates = function (fn, a, b) {
          return fn(a, b);
        };
        var _flushInteractiveUpdates = function () {};
        var isBatching = false;
        function batchedUpdates(fn, bookkeeping) {
          if (isBatching) {
            return fn(bookkeeping);
          }
          isBatching = true;
          try {
            return _batchedUpdates(fn, bookkeeping);
          } finally {
            isBatching = false;
            var controlledComponentsHavePendingUpdates = needsStateRestore();
            if (controlledComponentsHavePendingUpdates) {
              _flushInteractiveUpdates();
              restoreStateIfNeeded();
            }
          }
        }
        function interactiveUpdates(fn, a, b) {
          return _interactiveUpdates(fn, a, b);
        }
        var injection$3 = { injectRenderer: function (renderer) {
            _batchedUpdates = renderer.batchedUpdates;
            _interactiveUpdates = renderer.interactiveUpdates;
            _flushInteractiveUpdates = renderer.flushInteractiveUpdates;
          } };
        var supportedInputTypes = {
          color: true,
          date: true,
          datetime: true,
          'datetime-local': true,
          email: true,
          month: true,
          number: true,
          password: true,
          range: true,
          search: true,
          tel: true,
          text: true,
          time: true,
          url: true,
          week: true
        };
        function isTextInputElement(elem) {
          var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
          if (nodeName === 'input') {
            return !!supportedInputTypes[elem.type];
          }
          if (nodeName === 'textarea') {
            return true;
          }
          return false;
        }
        var ELEMENT_NODE = 1;
        var TEXT_NODE = 3;
        var COMMENT_NODE = 8;
        var DOCUMENT_NODE = 9;
        var DOCUMENT_FRAGMENT_NODE = 11;
        function getEventTarget(nativeEvent) {
          var target = nativeEvent.target || window;
          if (target.correspondingUseElement) {
            target = target.correspondingUseElement;
          }
          return target.nodeType === TEXT_NODE ? target.parentNode : target;
        }
        function isEventSupported(eventNameSuffix, capture) {
          if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
            return false;
          }
          var eventName = 'on' + eventNameSuffix;
          var isSupported = eventName in document;
          if (!isSupported) {
            var element = document.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
          }
          return isSupported;
        }
        function isCheckable(elem) {
          var type = elem.type;
          var nodeName = elem.nodeName;
          return nodeName && nodeName.toLowerCase() === 'input' && (type === 'checkbox' || type === 'radio');
        }
        function getTracker(node) {
          return node._valueTracker;
        }
        function detachTracker(node) {
          node._valueTracker = null;
        }
        function getValueFromNode(node) {
          var value = '';
          if (!node) {
            return value;
          }
          if (isCheckable(node)) {
            value = node.checked ? 'true' : 'false';
          } else {
            value = node.value;
          }
          return value;
        }
        function trackValueOnNode(node) {
          var valueField = isCheckable(node) ? 'checked' : 'value';
          var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
          var currentValue = '' + node[valueField];
          if (node.hasOwnProperty(valueField) || typeof descriptor === 'undefined' || typeof descriptor.get !== 'function' || typeof descriptor.set !== 'function') {
            return;
          }
          var get = descriptor.get,
              set = descriptor.set;
          Object.defineProperty(node, valueField, {
            configurable: true,
            get: function () {
              return get.call(this);
            },
            set: function (value) {
              currentValue = '' + value;
              set.call(this, value);
            }
          });
          Object.defineProperty(node, valueField, { enumerable: descriptor.enumerable });
          var tracker = {
            getValue: function () {
              return currentValue;
            },
            setValue: function (value) {
              currentValue = '' + value;
            },
            stopTracking: function () {
              detachTracker(node);
              delete node[valueField];
            }
          };
          return tracker;
        }
        function track(node) {
          if (getTracker(node)) {
            return;
          }
          node._valueTracker = trackValueOnNode(node);
        }
        function updateValueIfChanged(node) {
          if (!node) {
            return false;
          }
          var tracker = getTracker(node);
          if (!tracker) {
            return true;
          }
          var lastValue = tracker.getValue();
          var nextValue = getValueFromNode(node);
          if (nextValue !== lastValue) {
            tracker.setValue(nextValue);
            return true;
          }
          return false;
        }
        var ReactInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        var ReactCurrentOwner = ReactInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame = ReactInternals.ReactDebugCurrentFrame;
        var describeComponentFrame = function (name, source, ownerName) {
          return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
        };
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable === 'undefined') {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }
          return null;
        }
        function getComponentName(fiber) {
          var type = fiber.type;
          if (typeof type === 'function') {
            return type.displayName || type.name;
          }
          if (typeof type === 'string') {
            return type;
          }
          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
              return 'AsyncMode';
            case REACT_CONTEXT_TYPE:
              return 'Context.Consumer';
            case REACT_FRAGMENT_TYPE:
              return 'ReactFragment';
            case REACT_PORTAL_TYPE:
              return 'ReactPortal';
            case REACT_PROFILER_TYPE:
              return 'Profiler(' + fiber.pendingProps.id + ')';
            case REACT_PROVIDER_TYPE:
              return 'Context.Provider';
            case REACT_STRICT_MODE_TYPE:
              return 'StrictMode';
            case REACT_TIMEOUT_TYPE:
              return 'Timeout';
          }
          if (typeof type === 'object' && type !== null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                var functionName = type.render.displayName || type.render.name || '';
                return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
            }
          }
          return null;
        }
        function describeFiber(fiber) {
          switch (fiber.tag) {
            case IndeterminateComponent:
            case FunctionalComponent:
            case ClassComponent:
            case HostComponent:
              var owner = fiber._debugOwner;
              var source = fiber._debugSource;
              var name = getComponentName(fiber);
              var ownerName = null;
              if (owner) {
                ownerName = getComponentName(owner);
              }
              return describeComponentFrame(name, source, ownerName);
            default:
              return '';
          }
        }
        function getStackAddendumByWorkInProgressFiber(workInProgress) {
          var info = '';
          var node = workInProgress;
          do {
            info += describeFiber(node);
            node = node.return;
          } while (node);
          return info;
        }
        function getCurrentFiberOwnerName$1() {
          {
            var fiber = ReactDebugCurrentFiber.current;
            if (fiber === null) {
              return null;
            }
            var owner = fiber._debugOwner;
            if (owner !== null && typeof owner !== 'undefined') {
              return getComponentName(owner);
            }
          }
          return null;
        }
        function getCurrentFiberStackAddendum$1() {
          {
            var fiber = ReactDebugCurrentFiber.current;
            if (fiber === null) {
              return null;
            }
            return getStackAddendumByWorkInProgressFiber(fiber);
          }
          return null;
        }
        function resetCurrentFiber() {
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFiber.current = null;
          ReactDebugCurrentFiber.phase = null;
        }
        function setCurrentFiber(fiber) {
          ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackAddendum$1;
          ReactDebugCurrentFiber.current = fiber;
          ReactDebugCurrentFiber.phase = null;
        }
        function setCurrentPhase(phase) {
          ReactDebugCurrentFiber.phase = phase;
        }
        var ReactDebugCurrentFiber = {
          current: null,
          phase: null,
          resetCurrentFiber: resetCurrentFiber,
          setCurrentFiber: setCurrentFiber,
          setCurrentPhase: setCurrentPhase,
          getCurrentFiberOwnerName: getCurrentFiberOwnerName$1,
          getCurrentFiberStackAddendum: getCurrentFiberStackAddendum$1
        };
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
        var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
            return true;
          }
          if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            warning(false, 'Invalid attribute name: `%s`', attributeName);
          }
          return false;
        }
        function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null) {
            return propertyInfo.type === RESERVED;
          }
          if (isCustomComponentTag) {
            return false;
          }
          if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
            return true;
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case 'function':
            case 'symbol':
              return true;
            case 'boolean':
              {
                if (isCustomComponentTag) {
                  return false;
                }
                if (propertyInfo !== null) {
                  return !propertyInfo.acceptsBooleans;
                } else {
                  var prefix = name.toLowerCase().slice(0, 5);
                  return prefix !== 'data-' && prefix !== 'aria-';
                }
              }
            default:
              return false;
          }
        }
        function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
          if (value === null || typeof value === 'undefined') {
            return true;
          }
          if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
            return true;
          }
          if (isCustomComponentTag) {
            return false;
          }
          if (propertyInfo !== null) {
            switch (propertyInfo.type) {
              case BOOLEAN:
                return !value;
              case OVERLOADED_BOOLEAN:
                return value === false;
              case NUMERIC:
                return isNaN(value);
              case POSITIVE_NUMERIC:
                return isNaN(value) || value < 1;
            }
          }
          return false;
        }
        function getPropertyInfo(name) {
          return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name;
          this.type = type;
        }
        var properties = {};
        ['children', 'dangerouslySetInnerHTML', 'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null);
        });
        [['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
          var name = _ref[0],
              attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null);
        });
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null);
        });
        ['autoReverse', 'externalResourcesRequired', 'preserveAlpha'].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null);
        });
        ['allowFullScreen', 'async', 'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', 'itemScope'].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null);
        });
        ['checked', 'multiple', 'muted', 'selected'].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name.toLowerCase(), null);
        });
        ['capture', 'download'].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name.toLowerCase(), null);
        });
        ['cols', 'rows', 'size', 'span'].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name.toLowerCase(), null);
        });
        ['rowSpan', 'start'].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null);
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function (token) {
          return token[1].toUpperCase();
        };
        ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null);
        });
        ['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/1999/xlink');
        });
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/XML/1998/namespace');
        });
        properties.tabIndex = new PropertyInfoRecord('tabIndex', STRING, false, 'tabindex', null);
        function getValueForProperty(node, name, expected, propertyInfo) {
          {
            if (propertyInfo.mustUseProperty) {
              var propertyName = propertyInfo.propertyName;
              return node[propertyName];
            } else {
              var attributeName = propertyInfo.attributeName;
              var stringValue = null;
              if (propertyInfo.type === OVERLOADED_BOOLEAN) {
                if (node.hasAttribute(attributeName)) {
                  var value = node.getAttribute(attributeName);
                  if (value === '') {
                    return true;
                  }
                  if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                    return value;
                  }
                  if (value === '' + expected) {
                    return expected;
                  }
                  return value;
                }
              } else if (node.hasAttribute(attributeName)) {
                if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                  return node.getAttribute(attributeName);
                }
                if (propertyInfo.type === BOOLEAN) {
                  return expected;
                }
                stringValue = node.getAttribute(attributeName);
              }
              if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                return stringValue === null ? expected : stringValue;
              } else if (stringValue === '' + expected) {
                return expected;
              } else {
                return stringValue;
              }
            }
          }
        }
        function getValueForAttribute(node, name, expected) {
          {
            if (!isAttributeNameSafe(name)) {
              return;
            }
            if (!node.hasAttribute(name)) {
              return expected === undefined ? undefined : null;
            }
            var value = node.getAttribute(name);
            if (value === '' + expected) {
              return expected;
            }
            return value;
          }
        }
        function setValueForProperty(node, name, value, isCustomComponentTag) {
          var propertyInfo = getPropertyInfo(name);
          if (shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) {
            return;
          }
          if (shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag)) {
            value = null;
          }
          if (isCustomComponentTag || propertyInfo === null) {
            if (isAttributeNameSafe(name)) {
              var _attributeName = name;
              if (value === null) {
                node.removeAttribute(_attributeName);
              } else {
                node.setAttribute(_attributeName, '' + value);
              }
            }
            return;
          }
          var mustUseProperty = propertyInfo.mustUseProperty;
          if (mustUseProperty) {
            var propertyName = propertyInfo.propertyName;
            if (value === null) {
              var type = propertyInfo.type;
              node[propertyName] = type === BOOLEAN ? false : '';
            } else {
              node[propertyName] = value;
            }
            return;
          }
          var attributeName = propertyInfo.attributeName,
              attributeNamespace = propertyInfo.attributeNamespace;
          if (value === null) {
            node.removeAttribute(attributeName);
          } else {
            var _type = propertyInfo.type;
            var attributeValue = void 0;
            if (_type === BOOLEAN || _type === OVERLOADED_BOOLEAN && value === true) {
              attributeValue = '';
            } else {
              attributeValue = '' + value;
            }
            if (attributeNamespace) {
              node.setAttributeNS(attributeNamespace, attributeName, attributeValue);
            } else {
              node.setAttribute(attributeName, attributeValue);
            }
          }
        }
        var ReactControlledValuePropTypes = { checkPropTypes: null };
        {
          var hasReadOnlyValue = {
            button: true,
            checkbox: true,
            image: true,
            hidden: true,
            radio: true,
            reset: true,
            submit: true
          };
          var propTypes = {
            value: function (props, propName, componentName) {
              if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
                return null;
              }
              return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
            },
            checked: function (props, propName, componentName) {
              if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
                return null;
              }
              return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
            }
          };
          ReactControlledValuePropTypes.checkPropTypes = function (tagName, props, getStack) {
            checkPropTypes(propTypes, props, 'prop', tagName, getStack);
          };
        }
        var getCurrentFiberOwnerName = ReactDebugCurrentFiber.getCurrentFiberOwnerName;
        var getCurrentFiberStackAddendum = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;
        var didWarnValueDefaultValue = false;
        var didWarnCheckedDefaultChecked = false;
        var didWarnControlledToUncontrolled = false;
        var didWarnUncontrolledToControlled = false;
        function isControlled(props) {
          var usesChecked = props.type === 'checkbox' || props.type === 'radio';
          return usesChecked ? props.checked != null : props.value != null;
        }
        function getHostProps(element, props) {
          var node = element;
          var checked = props.checked;
          var hostProps = _assign({}, props, {
            defaultChecked: undefined,
            defaultValue: undefined,
            value: undefined,
            checked: checked != null ? checked : node._wrapperState.initialChecked
          });
          return hostProps;
        }
        function initWrapperState(element, props) {
          {
            ReactControlledValuePropTypes.checkPropTypes('input', props, getCurrentFiberStackAddendum);
            if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
              warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', getCurrentFiberOwnerName() || 'A component', props.type);
              didWarnCheckedDefaultChecked = true;
            }
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
              warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', getCurrentFiberOwnerName() || 'A component', props.type);
              didWarnValueDefaultValue = true;
            }
          }
          var node = element;
          var defaultValue = props.defaultValue == null ? '' : props.defaultValue;
          node._wrapperState = {
            initialChecked: props.checked != null ? props.checked : props.defaultChecked,
            initialValue: getSafeValue(props.value != null ? props.value : defaultValue),
            controlled: isControlled(props)
          };
        }
        function updateChecked(element, props) {
          var node = element;
          var checked = props.checked;
          if (checked != null) {
            setValueForProperty(node, 'checked', checked, false);
          }
        }
        function updateWrapper(element, props) {
          var node = element;
          {
            var _controlled = isControlled(props);
            if (!node._wrapperState.controlled && _controlled && !didWarnUncontrolledToControlled) {
              warning(false, 'A component is changing an uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s', props.type, getCurrentFiberStackAddendum());
              didWarnUncontrolledToControlled = true;
            }
            if (node._wrapperState.controlled && !_controlled && !didWarnControlledToUncontrolled) {
              warning(false, 'A component is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s', props.type, getCurrentFiberStackAddendum());
              didWarnControlledToUncontrolled = true;
            }
          }
          updateChecked(element, props);
          var value = getSafeValue(props.value);
          if (value != null) {
            if (props.type === 'number') {
              if (value === 0 && node.value === '' || node.value != value) {
                node.value = '' + value;
              }
            } else if (node.value !== '' + value) {
              node.value = '' + value;
            }
          }
          if (props.hasOwnProperty('value')) {
            setDefaultValue(node, props.type, value);
          } else if (props.hasOwnProperty('defaultValue')) {
            setDefaultValue(node, props.type, getSafeValue(props.defaultValue));
          }
          if (props.checked == null && props.defaultChecked != null) {
            node.defaultChecked = !!props.defaultChecked;
          }
        }
        function postMountWrapper(element, props) {
          var node = element;
          if (props.hasOwnProperty('value') || props.hasOwnProperty('defaultValue')) {
            if (node.value === '') {
              node.value = '' + node._wrapperState.initialValue;
            }
            node.defaultValue = '' + node._wrapperState.initialValue;
          }
          var name = node.name;
          if (name !== '') {
            node.name = '';
          }
          node.defaultChecked = !node.defaultChecked;
          node.defaultChecked = !node.defaultChecked;
          if (name !== '') {
            node.name = name;
          }
        }
        function restoreControlledState(element, props) {
          var node = element;
          updateWrapper(node, props);
          updateNamedCousins(node, props);
        }
        function updateNamedCousins(rootNode, props) {
          var name = props.name;
          if (props.type === 'radio' && name != null) {
            var queryRoot = rootNode;
            while (queryRoot.parentNode) {
              queryRoot = queryRoot.parentNode;
            }
            var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
            for (var i = 0; i < group.length; i++) {
              var otherNode = group[i];
              if (otherNode === rootNode || otherNode.form !== rootNode.form) {
                continue;
              }
              var otherProps = getFiberCurrentPropsFromNode$1(otherNode);
              !otherProps ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.') : void 0;
              updateValueIfChanged(otherNode);
              updateWrapper(otherNode, otherProps);
            }
          }
        }
        function setDefaultValue(node, type, value) {
          if (type !== 'number' || node.ownerDocument.activeElement !== node) {
            if (value == null) {
              node.defaultValue = '' + node._wrapperState.initialValue;
            } else if (node.defaultValue !== '' + value) {
              node.defaultValue = '' + value;
            }
          }
        }
        function getSafeValue(value) {
          switch (typeof value) {
            case 'boolean':
            case 'number':
            case 'object':
            case 'string':
            case 'undefined':
              return value;
            default:
              return '';
          }
        }
        var eventTypes$1 = { change: {
            phasedRegistrationNames: {
              bubbled: 'onChange',
              captured: 'onChangeCapture'
            },
            dependencies: [TOP_BLUR, TOP_CHANGE, TOP_CLICK, TOP_FOCUS, TOP_INPUT, TOP_KEY_DOWN, TOP_KEY_UP, TOP_SELECTION_CHANGE]
          } };
        function createAndAccumulateChangeEvent(inst, nativeEvent, target) {
          var event = SyntheticEvent$1.getPooled(eventTypes$1.change, inst, nativeEvent, target);
          event.type = 'change';
          enqueueStateRestore(target);
          accumulateTwoPhaseDispatches(event);
          return event;
        }
        var activeElement = null;
        var activeElementInst = null;
        function shouldUseChangeEvent(elem) {
          var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
          return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
        }
        function manualDispatchChangeEvent(nativeEvent) {
          var event = createAndAccumulateChangeEvent(activeElementInst, nativeEvent, getEventTarget(nativeEvent));
          batchedUpdates(runEventInBatch, event);
        }
        function runEventInBatch(event) {
          runEventsInBatch(event, false);
        }
        function getInstIfValueChanged(targetInst) {
          var targetNode = getNodeFromInstance$1(targetInst);
          if (updateValueIfChanged(targetNode)) {
            return targetInst;
          }
        }
        function getTargetInstForChangeEvent(topLevelType, targetInst) {
          if (topLevelType === TOP_CHANGE) {
            return targetInst;
          }
        }
        var isInputEventSupported = false;
        if (ExecutionEnvironment.canUseDOM) {
          isInputEventSupported = isEventSupported('input') && (!document.documentMode || document.documentMode > 9);
        }
        function startWatchingForValueChange(target, targetInst) {
          activeElement = target;
          activeElementInst = targetInst;
          activeElement.attachEvent('onpropertychange', handlePropertyChange);
        }
        function stopWatchingForValueChange() {
          if (!activeElement) {
            return;
          }
          activeElement.detachEvent('onpropertychange', handlePropertyChange);
          activeElement = null;
          activeElementInst = null;
        }
        function handlePropertyChange(nativeEvent) {
          if (nativeEvent.propertyName !== 'value') {
            return;
          }
          if (getInstIfValueChanged(activeElementInst)) {
            manualDispatchChangeEvent(nativeEvent);
          }
        }
        function handleEventsForInputEventPolyfill(topLevelType, target, targetInst) {
          if (topLevelType === TOP_FOCUS) {
            stopWatchingForValueChange();
            startWatchingForValueChange(target, targetInst);
          } else if (topLevelType === TOP_BLUR) {
            stopWatchingForValueChange();
          }
        }
        function getTargetInstForInputEventPolyfill(topLevelType, targetInst) {
          if (topLevelType === TOP_SELECTION_CHANGE || topLevelType === TOP_KEY_UP || topLevelType === TOP_KEY_DOWN) {
            return getInstIfValueChanged(activeElementInst);
          }
        }
        function shouldUseClickEvent(elem) {
          var nodeName = elem.nodeName;
          return nodeName && nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
        }
        function getTargetInstForClickEvent(topLevelType, targetInst) {
          if (topLevelType === TOP_CLICK) {
            return getInstIfValueChanged(targetInst);
          }
        }
        function getTargetInstForInputOrChangeEvent(topLevelType, targetInst) {
          if (topLevelType === TOP_INPUT || topLevelType === TOP_CHANGE) {
            return getInstIfValueChanged(targetInst);
          }
        }
        function handleControlledInputBlur(inst, node) {
          if (inst == null) {
            return;
          }
          var state = inst._wrapperState || node._wrapperState;
          if (!state || !state.controlled || node.type !== 'number') {
            return;
          }
          setDefaultValue(node, 'number', node.value);
        }
        var ChangeEventPlugin = {
          eventTypes: eventTypes$1,
          _isInputEventSupported: isInputEventSupported,
          extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
            var targetNode = targetInst ? getNodeFromInstance$1(targetInst) : window;
            var getTargetInstFunc = void 0,
                handleEventFunc = void 0;
            if (shouldUseChangeEvent(targetNode)) {
              getTargetInstFunc = getTargetInstForChangeEvent;
            } else if (isTextInputElement(targetNode)) {
              if (isInputEventSupported) {
                getTargetInstFunc = getTargetInstForInputOrChangeEvent;
              } else {
                getTargetInstFunc = getTargetInstForInputEventPolyfill;
                handleEventFunc = handleEventsForInputEventPolyfill;
              }
            } else if (shouldUseClickEvent(targetNode)) {
              getTargetInstFunc = getTargetInstForClickEvent;
            }
            if (getTargetInstFunc) {
              var inst = getTargetInstFunc(topLevelType, targetInst);
              if (inst) {
                var event = createAndAccumulateChangeEvent(inst, nativeEvent, nativeEventTarget);
                return event;
              }
            }
            if (handleEventFunc) {
              handleEventFunc(topLevelType, targetNode, targetInst);
            }
            if (topLevelType === TOP_BLUR) {
              handleControlledInputBlur(targetInst, targetNode);
            }
          }
        };
        var DOMEventPluginOrder = ['ResponderEventPlugin', 'SimpleEventPlugin', 'TapEventPlugin', 'EnterLeaveEventPlugin', 'ChangeEventPlugin', 'SelectEventPlugin', 'BeforeInputEventPlugin'];
        var SyntheticUIEvent = SyntheticEvent$1.extend({
          view: null,
          detail: null
        });
        var modifierKeyToProp = {
          Alt: 'altKey',
          Control: 'ctrlKey',
          Meta: 'metaKey',
          Shift: 'shiftKey'
        };
        function modifierStateGetter(keyArg) {
          var syntheticEvent = this;
          var nativeEvent = syntheticEvent.nativeEvent;
          if (nativeEvent.getModifierState) {
            return nativeEvent.getModifierState(keyArg);
          }
          var keyProp = modifierKeyToProp[keyArg];
          return keyProp ? !!nativeEvent[keyProp] : false;
        }
        function getEventModifierState(nativeEvent) {
          return modifierStateGetter;
        }
        var SyntheticMouseEvent = SyntheticUIEvent.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: getEventModifierState,
          button: null,
          buttons: null,
          relatedTarget: function (event) {
            return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
          }
        });
        var SyntheticPointerEvent = SyntheticMouseEvent.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tiltX: null,
          tiltY: null,
          pointerType: null,
          isPrimary: null
        });
        var eventTypes$2 = {
          mouseEnter: {
            registrationName: 'onMouseEnter',
            dependencies: [TOP_MOUSE_OUT, TOP_MOUSE_OVER]
          },
          mouseLeave: {
            registrationName: 'onMouseLeave',
            dependencies: [TOP_MOUSE_OUT, TOP_MOUSE_OVER]
          },
          pointerEnter: {
            registrationName: 'onPointerEnter',
            dependencies: [TOP_POINTER_OUT, TOP_POINTER_OVER]
          },
          pointerLeave: {
            registrationName: 'onPointerLeave',
            dependencies: [TOP_POINTER_OUT, TOP_POINTER_OVER]
          }
        };
        var EnterLeaveEventPlugin = {
          eventTypes: eventTypes$2,
          extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
            var isOverEvent = topLevelType === TOP_MOUSE_OVER || topLevelType === TOP_POINTER_OVER;
            var isOutEvent = topLevelType === TOP_MOUSE_OUT || topLevelType === TOP_POINTER_OUT;
            if (isOverEvent && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
              return null;
            }
            if (!isOutEvent && !isOverEvent) {
              return null;
            }
            var win = void 0;
            if (nativeEventTarget.window === nativeEventTarget) {
              win = nativeEventTarget;
            } else {
              var doc = nativeEventTarget.ownerDocument;
              if (doc) {
                win = doc.defaultView || doc.parentWindow;
              } else {
                win = window;
              }
            }
            var from = void 0;
            var to = void 0;
            if (isOutEvent) {
              from = targetInst;
              var related = nativeEvent.relatedTarget || nativeEvent.toElement;
              to = related ? getClosestInstanceFromNode(related) : null;
            } else {
              from = null;
              to = targetInst;
            }
            if (from === to) {
              return null;
            }
            var eventInterface = void 0,
                leaveEventType = void 0,
                enterEventType = void 0,
                eventTypePrefix = void 0;
            if (topLevelType === TOP_MOUSE_OUT || topLevelType === TOP_MOUSE_OVER) {
              eventInterface = SyntheticMouseEvent;
              leaveEventType = eventTypes$2.mouseLeave;
              enterEventType = eventTypes$2.mouseEnter;
              eventTypePrefix = 'mouse';
            } else if (topLevelType === TOP_POINTER_OUT || topLevelType === TOP_POINTER_OVER) {
              eventInterface = SyntheticPointerEvent;
              leaveEventType = eventTypes$2.pointerLeave;
              enterEventType = eventTypes$2.pointerEnter;
              eventTypePrefix = 'pointer';
            }
            var fromNode = from == null ? win : getNodeFromInstance$1(from);
            var toNode = to == null ? win : getNodeFromInstance$1(to);
            var leave = eventInterface.getPooled(leaveEventType, from, nativeEvent, nativeEventTarget);
            leave.type = eventTypePrefix + 'leave';
            leave.target = fromNode;
            leave.relatedTarget = toNode;
            var enter = eventInterface.getPooled(enterEventType, to, nativeEvent, nativeEventTarget);
            enter.type = eventTypePrefix + 'enter';
            enter.target = toNode;
            enter.relatedTarget = fromNode;
            accumulateEnterLeaveDispatches(leave, enter, from, to);
            return [leave, enter];
          }
        };
        function get(key) {
          return key._reactInternalFiber;
        }
        function has(key) {
          return key._reactInternalFiber !== undefined;
        }
        function set(key, value) {
          key._reactInternalFiber = value;
        }
        var NoEffect = 0;
        var PerformedWork = 1;
        var Placement = 2;
        var Update = 4;
        var PlacementAndUpdate = 6;
        var Deletion = 8;
        var ContentReset = 16;
        var Callback = 32;
        var DidCapture = 64;
        var Ref = 128;
        var Snapshot = 256;
        var HostEffectMask = 511;
        var Incomplete = 512;
        var ShouldCapture = 1024;
        var MOUNTING = 1;
        var MOUNTED = 2;
        var UNMOUNTED = 3;
        function isFiberMountedImpl(fiber) {
          var node = fiber;
          if (!fiber.alternate) {
            if ((node.effectTag & Placement) !== NoEffect) {
              return MOUNTING;
            }
            while (node.return) {
              node = node.return;
              if ((node.effectTag & Placement) !== NoEffect) {
                return MOUNTING;
              }
            }
          } else {
            while (node.return) {
              node = node.return;
            }
          }
          if (node.tag === HostRoot) {
            return MOUNTED;
          }
          return UNMOUNTED;
        }
        function isFiberMounted(fiber) {
          return isFiberMountedImpl(fiber) === MOUNTED;
        }
        function isMounted(component) {
          {
            var owner = ReactCurrentOwner.current;
            if (owner !== null && owner.tag === ClassComponent) {
              var ownerFiber = owner;
              var instance = ownerFiber.stateNode;
              !instance._warnedAboutRefsInRender ? warning(false, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(ownerFiber) || 'A component') : void 0;
              instance._warnedAboutRefsInRender = true;
            }
          }
          var fiber = get(component);
          if (!fiber) {
            return false;
          }
          return isFiberMountedImpl(fiber) === MOUNTED;
        }
        function assertIsMounted(fiber) {
          !(isFiberMountedImpl(fiber) === MOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
        }
        function findCurrentFiberUsingSlowPath(fiber) {
          var alternate = fiber.alternate;
          if (!alternate) {
            var state = isFiberMountedImpl(fiber);
            !(state !== UNMOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
            if (state === MOUNTING) {
              return null;
            }
            return fiber;
          }
          var a = fiber;
          var b = alternate;
          while (true) {
            var parentA = a.return;
            var parentB = parentA ? parentA.alternate : null;
            if (!parentA || !parentB) {
              break;
            }
            if (parentA.child === parentB.child) {
              var child = parentA.child;
              while (child) {
                if (child === a) {
                  assertIsMounted(parentA);
                  return fiber;
                }
                if (child === b) {
                  assertIsMounted(parentA);
                  return alternate;
                }
                child = child.sibling;
              }
              invariant(false, 'Unable to find node on an unmounted component.');
            }
            if (a.return !== b.return) {
              a = parentA;
              b = parentB;
            } else {
              var didFindChild = false;
              var _child = parentA.child;
              while (_child) {
                if (_child === a) {
                  didFindChild = true;
                  a = parentA;
                  b = parentB;
                  break;
                }
                if (_child === b) {
                  didFindChild = true;
                  b = parentA;
                  a = parentB;
                  break;
                }
                _child = _child.sibling;
              }
              if (!didFindChild) {
                _child = parentB.child;
                while (_child) {
                  if (_child === a) {
                    didFindChild = true;
                    a = parentB;
                    b = parentA;
                    break;
                  }
                  if (_child === b) {
                    didFindChild = true;
                    b = parentB;
                    a = parentA;
                    break;
                  }
                  _child = _child.sibling;
                }
                !didFindChild ? invariant(false, 'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.') : void 0;
              }
            }
            !(a.alternate === b) ? invariant(false, 'Return fibers should always be each others\' alternates. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          }
          !(a.tag === HostRoot) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
          if (a.stateNode.current === a) {
            return fiber;
          }
          return alternate;
        }
        function findCurrentHostFiber(parent) {
          var currentParent = findCurrentFiberUsingSlowPath(parent);
          if (!currentParent) {
            return null;
          }
          var node = currentParent;
          while (true) {
            if (node.tag === HostComponent || node.tag === HostText) {
              return node;
            } else if (node.child) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === currentParent) {
              return null;
            }
            while (!node.sibling) {
              if (!node.return || node.return === currentParent) {
                return null;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
          return null;
        }
        function findCurrentHostFiberWithNoPortals(parent) {
          var currentParent = findCurrentFiberUsingSlowPath(parent);
          if (!currentParent) {
            return null;
          }
          var node = currentParent;
          while (true) {
            if (node.tag === HostComponent || node.tag === HostText) {
              return node;
            } else if (node.child && node.tag !== HostPortal) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === currentParent) {
              return null;
            }
            while (!node.sibling) {
              if (!node.return || node.return === currentParent) {
                return null;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
          return null;
        }
        function addEventBubbleListener(element, eventType, listener) {
          element.addEventListener(eventType, listener, false);
        }
        function addEventCaptureListener(element, eventType, listener) {
          element.addEventListener(eventType, listener, true);
        }
        var SyntheticAnimationEvent = SyntheticEvent$1.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null
        });
        var SyntheticClipboardEvent = SyntheticEvent$1.extend({ clipboardData: function (event) {
            return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
          } });
        var SyntheticFocusEvent = SyntheticUIEvent.extend({ relatedTarget: null });
        function getEventCharCode(nativeEvent) {
          var charCode = void 0;
          var keyCode = nativeEvent.keyCode;
          if ('charCode' in nativeEvent) {
            charCode = nativeEvent.charCode;
            if (charCode === 0 && keyCode === 13) {
              charCode = 13;
            }
          } else {
            charCode = keyCode;
          }
          if (charCode === 10) {
            charCode = 13;
          }
          if (charCode >= 32 || charCode === 13) {
            return charCode;
          }
          return 0;
        }
        var normalizeKey = {
          Esc: 'Escape',
          Spacebar: ' ',
          Left: 'ArrowLeft',
          Up: 'ArrowUp',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Del: 'Delete',
          Win: 'OS',
          Menu: 'ContextMenu',
          Apps: 'ContextMenu',
          Scroll: 'ScrollLock',
          MozPrintableKey: 'Unidentified'
        };
        var translateToKey = {
          '8': 'Backspace',
          '9': 'Tab',
          '12': 'Clear',
          '13': 'Enter',
          '16': 'Shift',
          '17': 'Control',
          '18': 'Alt',
          '19': 'Pause',
          '20': 'CapsLock',
          '27': 'Escape',
          '32': ' ',
          '33': 'PageUp',
          '34': 'PageDown',
          '35': 'End',
          '36': 'Home',
          '37': 'ArrowLeft',
          '38': 'ArrowUp',
          '39': 'ArrowRight',
          '40': 'ArrowDown',
          '45': 'Insert',
          '46': 'Delete',
          '112': 'F1',
          '113': 'F2',
          '114': 'F3',
          '115': 'F4',
          '116': 'F5',
          '117': 'F6',
          '118': 'F7',
          '119': 'F8',
          '120': 'F9',
          '121': 'F10',
          '122': 'F11',
          '123': 'F12',
          '144': 'NumLock',
          '145': 'ScrollLock',
          '224': 'Meta'
        };
        function getEventKey(nativeEvent) {
          if (nativeEvent.key) {
            var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
            if (key !== 'Unidentified') {
              return key;
            }
          }
          if (nativeEvent.type === 'keypress') {
            var charCode = getEventCharCode(nativeEvent);
            return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
          }
          if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
            return translateToKey[nativeEvent.keyCode] || 'Unidentified';
          }
          return '';
        }
        var SyntheticKeyboardEvent = SyntheticUIEvent.extend({
          key: getEventKey,
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: getEventModifierState,
          charCode: function (event) {
            if (event.type === 'keypress') {
              return getEventCharCode(event);
            }
            return 0;
          },
          keyCode: function (event) {
            if (event.type === 'keydown' || event.type === 'keyup') {
              return event.keyCode;
            }
            return 0;
          },
          which: function (event) {
            if (event.type === 'keypress') {
              return getEventCharCode(event);
            }
            if (event.type === 'keydown' || event.type === 'keyup') {
              return event.keyCode;
            }
            return 0;
          }
        });
        var SyntheticDragEvent = SyntheticMouseEvent.extend({ dataTransfer: null });
        var SyntheticTouchEvent = SyntheticUIEvent.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: getEventModifierState
        });
        var SyntheticTransitionEvent = SyntheticEvent$1.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null
        });
        var SyntheticWheelEvent = SyntheticMouseEvent.extend({
          deltaX: function (event) {
            return 'deltaX' in event ? event.deltaX : 'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
          },
          deltaY: function (event) {
            return 'deltaY' in event ? event.deltaY : 'wheelDeltaY' in event ? -event.wheelDeltaY : 'wheelDelta' in event ? -event.wheelDelta : 0;
          },
          deltaZ: null,
          deltaMode: null
        });
        var interactiveEventTypeNames = [[TOP_BLUR, 'blur'], [TOP_CANCEL, 'cancel'], [TOP_CLICK, 'click'], [TOP_CLOSE, 'close'], [TOP_CONTEXT_MENU, 'contextMenu'], [TOP_COPY, 'copy'], [TOP_CUT, 'cut'], [TOP_DOUBLE_CLICK, 'doubleClick'], [TOP_DRAG_END, 'dragEnd'], [TOP_DRAG_START, 'dragStart'], [TOP_DROP, 'drop'], [TOP_FOCUS, 'focus'], [TOP_INPUT, 'input'], [TOP_INVALID, 'invalid'], [TOP_KEY_DOWN, 'keyDown'], [TOP_KEY_PRESS, 'keyPress'], [TOP_KEY_UP, 'keyUp'], [TOP_MOUSE_DOWN, 'mouseDown'], [TOP_MOUSE_UP, 'mouseUp'], [TOP_PASTE, 'paste'], [TOP_PAUSE, 'pause'], [TOP_PLAY, 'play'], [TOP_POINTER_CANCEL, 'pointerCancel'], [TOP_POINTER_DOWN, 'pointerDown'], [TOP_POINTER_UP, 'pointerUp'], [TOP_RATE_CHANGE, 'rateChange'], [TOP_RESET, 'reset'], [TOP_SEEKED, 'seeked'], [TOP_SUBMIT, 'submit'], [TOP_TOUCH_CANCEL, 'touchCancel'], [TOP_TOUCH_END, 'touchEnd'], [TOP_TOUCH_START, 'touchStart'], [TOP_VOLUME_CHANGE, 'volumeChange']];
        var nonInteractiveEventTypeNames = [[TOP_ABORT, 'abort'], [TOP_ANIMATION_END, 'animationEnd'], [TOP_ANIMATION_ITERATION, 'animationIteration'], [TOP_ANIMATION_START, 'animationStart'], [TOP_CAN_PLAY, 'canPlay'], [TOP_CAN_PLAY_THROUGH, 'canPlayThrough'], [TOP_DRAG, 'drag'], [TOP_DRAG_ENTER, 'dragEnter'], [TOP_DRAG_EXIT, 'dragExit'], [TOP_DRAG_LEAVE, 'dragLeave'], [TOP_DRAG_OVER, 'dragOver'], [TOP_DURATION_CHANGE, 'durationChange'], [TOP_EMPTIED, 'emptied'], [TOP_ENCRYPTED, 'encrypted'], [TOP_ENDED, 'ended'], [TOP_ERROR, 'error'], [TOP_GOT_POINTER_CAPTURE, 'gotPointerCapture'], [TOP_LOAD, 'load'], [TOP_LOADED_DATA, 'loadedData'], [TOP_LOADED_METADATA, 'loadedMetadata'], [TOP_LOAD_START, 'loadStart'], [TOP_LOST_POINTER_CAPTURE, 'lostPointerCapture'], [TOP_MOUSE_MOVE, 'mouseMove'], [TOP_MOUSE_OUT, 'mouseOut'], [TOP_MOUSE_OVER, 'mouseOver'], [TOP_PLAYING, 'playing'], [TOP_POINTER_MOVE, 'pointerMove'], [TOP_POINTER_OUT, 'pointerOut'], [TOP_POINTER_OVER, 'pointerOver'], [TOP_PROGRESS, 'progress'], [TOP_SCROLL, 'scroll'], [TOP_SEEKING, 'seeking'], [TOP_STALLED, 'stalled'], [TOP_SUSPEND, 'suspend'], [TOP_TIME_UPDATE, 'timeUpdate'], [TOP_TOGGLE, 'toggle'], [TOP_TOUCH_MOVE, 'touchMove'], [TOP_TRANSITION_END, 'transitionEnd'], [TOP_WAITING, 'waiting'], [TOP_WHEEL, 'wheel']];
        var eventTypes$4 = {};
        var topLevelEventsToDispatchConfig = {};
        function addEventTypeNameToConfig(_ref, isInteractive) {
          var topEvent = _ref[0],
              event = _ref[1];
          var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
          var onEvent = 'on' + capitalizedEvent;
          var type = {
            phasedRegistrationNames: {
              bubbled: onEvent,
              captured: onEvent + 'Capture'
            },
            dependencies: [topEvent],
            isInteractive: isInteractive
          };
          eventTypes$4[event] = type;
          topLevelEventsToDispatchConfig[topEvent] = type;
        }
        interactiveEventTypeNames.forEach(function (eventTuple) {
          addEventTypeNameToConfig(eventTuple, true);
        });
        nonInteractiveEventTypeNames.forEach(function (eventTuple) {
          addEventTypeNameToConfig(eventTuple, false);
        });
        var knownHTMLTopLevelTypes = [TOP_ABORT, TOP_CANCEL, TOP_CAN_PLAY, TOP_CAN_PLAY_THROUGH, TOP_CLOSE, TOP_DURATION_CHANGE, TOP_EMPTIED, TOP_ENCRYPTED, TOP_ENDED, TOP_ERROR, TOP_INPUT, TOP_INVALID, TOP_LOAD, TOP_LOADED_DATA, TOP_LOADED_METADATA, TOP_LOAD_START, TOP_PAUSE, TOP_PLAY, TOP_PLAYING, TOP_PROGRESS, TOP_RATE_CHANGE, TOP_RESET, TOP_SEEKED, TOP_SEEKING, TOP_STALLED, TOP_SUBMIT, TOP_SUSPEND, TOP_TIME_UPDATE, TOP_TOGGLE, TOP_VOLUME_CHANGE, TOP_WAITING];
        var SimpleEventPlugin = {
          eventTypes: eventTypes$4,
          isInteractiveTopLevelEventType: function (topLevelType) {
            var config = topLevelEventsToDispatchConfig[topLevelType];
            return config !== undefined && config.isInteractive === true;
          },
          extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
            var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
            if (!dispatchConfig) {
              return null;
            }
            var EventConstructor = void 0;
            switch (topLevelType) {
              case TOP_KEY_PRESS:
                if (getEventCharCode(nativeEvent) === 0) {
                  return null;
                }
              case TOP_KEY_DOWN:
              case TOP_KEY_UP:
                EventConstructor = SyntheticKeyboardEvent;
                break;
              case TOP_BLUR:
              case TOP_FOCUS:
                EventConstructor = SyntheticFocusEvent;
                break;
              case TOP_CLICK:
                if (nativeEvent.button === 2) {
                  return null;
                }
              case TOP_DOUBLE_CLICK:
              case TOP_MOUSE_DOWN:
              case TOP_MOUSE_MOVE:
              case TOP_MOUSE_UP:
              case TOP_MOUSE_OUT:
              case TOP_MOUSE_OVER:
              case TOP_CONTEXT_MENU:
                EventConstructor = SyntheticMouseEvent;
                break;
              case TOP_DRAG:
              case TOP_DRAG_END:
              case TOP_DRAG_ENTER:
              case TOP_DRAG_EXIT:
              case TOP_DRAG_LEAVE:
              case TOP_DRAG_OVER:
              case TOP_DRAG_START:
              case TOP_DROP:
                EventConstructor = SyntheticDragEvent;
                break;
              case TOP_TOUCH_CANCEL:
              case TOP_TOUCH_END:
              case TOP_TOUCH_MOVE:
              case TOP_TOUCH_START:
                EventConstructor = SyntheticTouchEvent;
                break;
              case TOP_ANIMATION_END:
              case TOP_ANIMATION_ITERATION:
              case TOP_ANIMATION_START:
                EventConstructor = SyntheticAnimationEvent;
                break;
              case TOP_TRANSITION_END:
                EventConstructor = SyntheticTransitionEvent;
                break;
              case TOP_SCROLL:
                EventConstructor = SyntheticUIEvent;
                break;
              case TOP_WHEEL:
                EventConstructor = SyntheticWheelEvent;
                break;
              case TOP_COPY:
              case TOP_CUT:
              case TOP_PASTE:
                EventConstructor = SyntheticClipboardEvent;
                break;
              case TOP_GOT_POINTER_CAPTURE:
              case TOP_LOST_POINTER_CAPTURE:
              case TOP_POINTER_CANCEL:
              case TOP_POINTER_DOWN:
              case TOP_POINTER_MOVE:
              case TOP_POINTER_OUT:
              case TOP_POINTER_OVER:
              case TOP_POINTER_UP:
                EventConstructor = SyntheticPointerEvent;
                break;
              default:
                {
                  if (knownHTMLTopLevelTypes.indexOf(topLevelType) === -1) {
                    warning(false, 'SimpleEventPlugin: Unhandled event type, `%s`. This warning ' + 'is likely caused by a bug in React. Please file an issue.', topLevelType);
                  }
                }
                EventConstructor = SyntheticEvent$1;
                break;
            }
            var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
            accumulateTwoPhaseDispatches(event);
            return event;
          }
        };
        var isInteractiveTopLevelEventType = SimpleEventPlugin.isInteractiveTopLevelEventType;
        var CALLBACK_BOOKKEEPING_POOL_SIZE = 10;
        var callbackBookkeepingPool = [];
        function findRootContainerNode(inst) {
          while (inst.return) {
            inst = inst.return;
          }
          if (inst.tag !== HostRoot) {
            return null;
          }
          return inst.stateNode.containerInfo;
        }
        function getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst) {
          if (callbackBookkeepingPool.length) {
            var instance = callbackBookkeepingPool.pop();
            instance.topLevelType = topLevelType;
            instance.nativeEvent = nativeEvent;
            instance.targetInst = targetInst;
            return instance;
          }
          return {
            topLevelType: topLevelType,
            nativeEvent: nativeEvent,
            targetInst: targetInst,
            ancestors: []
          };
        }
        function releaseTopLevelCallbackBookKeeping(instance) {
          instance.topLevelType = null;
          instance.nativeEvent = null;
          instance.targetInst = null;
          instance.ancestors.length = 0;
          if (callbackBookkeepingPool.length < CALLBACK_BOOKKEEPING_POOL_SIZE) {
            callbackBookkeepingPool.push(instance);
          }
        }
        function handleTopLevel(bookKeeping) {
          var targetInst = bookKeeping.targetInst;
          var ancestor = targetInst;
          do {
            if (!ancestor) {
              bookKeeping.ancestors.push(ancestor);
              break;
            }
            var root = findRootContainerNode(ancestor);
            if (!root) {
              break;
            }
            bookKeeping.ancestors.push(ancestor);
            ancestor = getClosestInstanceFromNode(root);
          } while (ancestor);
          for (var i = 0; i < bookKeeping.ancestors.length; i++) {
            targetInst = bookKeeping.ancestors[i];
            runExtractedEventsInBatch(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
          }
        }
        var _enabled = true;
        function setEnabled(enabled) {
          _enabled = !!enabled;
        }
        function isEnabled() {
          return _enabled;
        }
        function trapBubbledEvent(topLevelType, element) {
          if (!element) {
            return null;
          }
          var dispatch = isInteractiveTopLevelEventType(topLevelType) ? dispatchInteractiveEvent : dispatchEvent;
          addEventBubbleListener(element, getRawEventName(topLevelType), dispatch.bind(null, topLevelType));
        }
        function trapCapturedEvent(topLevelType, element) {
          if (!element) {
            return null;
          }
          var dispatch = isInteractiveTopLevelEventType(topLevelType) ? dispatchInteractiveEvent : dispatchEvent;
          addEventCaptureListener(element, getRawEventName(topLevelType), dispatch.bind(null, topLevelType));
        }
        function dispatchInteractiveEvent(topLevelType, nativeEvent) {
          interactiveUpdates(dispatchEvent, topLevelType, nativeEvent);
        }
        function dispatchEvent(topLevelType, nativeEvent) {
          if (!_enabled) {
            return;
          }
          var nativeEventTarget = getEventTarget(nativeEvent);
          var targetInst = getClosestInstanceFromNode(nativeEventTarget);
          if (targetInst !== null && typeof targetInst.tag === 'number' && !isFiberMounted(targetInst)) {
            targetInst = null;
          }
          var bookKeeping = getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst);
          try {
            batchedUpdates(handleTopLevel, bookKeeping);
          } finally {
            releaseTopLevelCallbackBookKeeping(bookKeeping);
          }
        }
        var ReactDOMEventListener = Object.freeze({
          get _enabled() {
            return _enabled;
          },
          setEnabled: setEnabled,
          isEnabled: isEnabled,
          trapBubbledEvent: trapBubbledEvent,
          trapCapturedEvent: trapCapturedEvent,
          dispatchEvent: dispatchEvent
        });
        var alreadyListeningTo = {};
        var reactTopListenersCounter = 0;
        var topListenersIDKey = '_reactListenersID' + ('' + Math.random()).slice(2);
        function getListeningForDocument(mountAt) {
          if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
            mountAt[topListenersIDKey] = reactTopListenersCounter++;
            alreadyListeningTo[mountAt[topListenersIDKey]] = {};
          }
          return alreadyListeningTo[mountAt[topListenersIDKey]];
        }
        function listenTo(registrationName, mountAt) {
          var isListening = getListeningForDocument(mountAt);
          var dependencies = registrationNameDependencies[registrationName];
          for (var i = 0; i < dependencies.length; i++) {
            var dependency = dependencies[i];
            if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
              switch (dependency) {
                case TOP_SCROLL:
                  trapCapturedEvent(TOP_SCROLL, mountAt);
                  break;
                case TOP_FOCUS:
                case TOP_BLUR:
                  trapCapturedEvent(TOP_FOCUS, mountAt);
                  trapCapturedEvent(TOP_BLUR, mountAt);
                  isListening[TOP_BLUR] = true;
                  isListening[TOP_FOCUS] = true;
                  break;
                case TOP_CANCEL:
                case TOP_CLOSE:
                  if (isEventSupported(getRawEventName(dependency), true)) {
                    trapCapturedEvent(dependency, mountAt);
                  }
                  break;
                case TOP_INVALID:
                case TOP_SUBMIT:
                case TOP_RESET:
                  break;
                default:
                  var isMediaEvent = mediaEventTypes.indexOf(dependency) !== -1;
                  if (!isMediaEvent) {
                    trapBubbledEvent(dependency, mountAt);
                  }
                  break;
              }
              isListening[dependency] = true;
            }
          }
        }
        function isListeningToAllDependencies(registrationName, mountAt) {
          var isListening = getListeningForDocument(mountAt);
          var dependencies = registrationNameDependencies[registrationName];
          for (var i = 0; i < dependencies.length; i++) {
            var dependency = dependencies[i];
            if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
              return false;
            }
          }
          return true;
        }
        function getLeafNode(node) {
          while (node && node.firstChild) {
            node = node.firstChild;
          }
          return node;
        }
        function getSiblingNode(node) {
          while (node) {
            if (node.nextSibling) {
              return node.nextSibling;
            }
            node = node.parentNode;
          }
        }
        function getNodeForCharacterOffset(root, offset) {
          var node = getLeafNode(root);
          var nodeStart = 0;
          var nodeEnd = 0;
          while (node) {
            if (node.nodeType === TEXT_NODE) {
              nodeEnd = nodeStart + node.textContent.length;
              if (nodeStart <= offset && nodeEnd >= offset) {
                return {
                  node: node,
                  offset: offset - nodeStart
                };
              }
              nodeStart = nodeEnd;
            }
            node = getLeafNode(getSiblingNode(node));
          }
        }
        function getOffsets(outerNode) {
          var selection = window.getSelection && window.getSelection();
          if (!selection || selection.rangeCount === 0) {
            return null;
          }
          var anchorNode = selection.anchorNode,
              anchorOffset = selection.anchorOffset,
              focusNode = selection.focusNode,
              focusOffset = selection.focusOffset;
          try {
            anchorNode.nodeType;
            focusNode.nodeType;
          } catch (e) {
            return null;
          }
          return getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset);
        }
        function getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset) {
          var length = 0;
          var start = -1;
          var end = -1;
          var indexWithinAnchor = 0;
          var indexWithinFocus = 0;
          var node = outerNode;
          var parentNode = null;
          outer: while (true) {
            var next = null;
            while (true) {
              if (node === anchorNode && (anchorOffset === 0 || node.nodeType === TEXT_NODE)) {
                start = length + anchorOffset;
              }
              if (node === focusNode && (focusOffset === 0 || node.nodeType === TEXT_NODE)) {
                end = length + focusOffset;
              }
              if (node.nodeType === TEXT_NODE) {
                length += node.nodeValue.length;
              }
              if ((next = node.firstChild) === null) {
                break;
              }
              parentNode = node;
              node = next;
            }
            while (true) {
              if (node === outerNode) {
                break outer;
              }
              if (parentNode === anchorNode && ++indexWithinAnchor === anchorOffset) {
                start = length;
              }
              if (parentNode === focusNode && ++indexWithinFocus === focusOffset) {
                end = length;
              }
              if ((next = node.nextSibling) !== null) {
                break;
              }
              node = parentNode;
              parentNode = node.parentNode;
            }
            node = next;
          }
          if (start === -1 || end === -1) {
            return null;
          }
          return {
            start: start,
            end: end
          };
        }
        function setOffsets(node, offsets) {
          if (!window.getSelection) {
            return;
          }
          var selection = window.getSelection();
          var length = node[getTextContentAccessor()].length;
          var start = Math.min(offsets.start, length);
          var end = offsets.end === undefined ? start : Math.min(offsets.end, length);
          if (!selection.extend && start > end) {
            var temp = end;
            end = start;
            start = temp;
          }
          var startMarker = getNodeForCharacterOffset(node, start);
          var endMarker = getNodeForCharacterOffset(node, end);
          if (startMarker && endMarker) {
            if (selection.rangeCount === 1 && selection.anchorNode === startMarker.node && selection.anchorOffset === startMarker.offset && selection.focusNode === endMarker.node && selection.focusOffset === endMarker.offset) {
              return;
            }
            var range = document.createRange();
            range.setStart(startMarker.node, startMarker.offset);
            selection.removeAllRanges();
            if (start > end) {
              selection.addRange(range);
              selection.extend(endMarker.node, endMarker.offset);
            } else {
              range.setEnd(endMarker.node, endMarker.offset);
              selection.addRange(range);
            }
          }
        }
        function isInDocument(node) {
          return containsNode(document.documentElement, node);
        }
        function hasSelectionCapabilities(elem) {
          var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
          return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
        }
        function getSelectionInformation() {
          var focusedElem = getActiveElement();
          return {
            focusedElem: focusedElem,
            selectionRange: hasSelectionCapabilities(focusedElem) ? getSelection$1(focusedElem) : null
          };
        }
        function restoreSelection(priorSelectionInformation) {
          var curFocusedElem = getActiveElement();
          var priorFocusedElem = priorSelectionInformation.focusedElem;
          var priorSelectionRange = priorSelectionInformation.selectionRange;
          if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
            if (hasSelectionCapabilities(priorFocusedElem)) {
              setSelection(priorFocusedElem, priorSelectionRange);
            }
            var ancestors = [];
            var ancestor = priorFocusedElem;
            while (ancestor = ancestor.parentNode) {
              if (ancestor.nodeType === ELEMENT_NODE) {
                ancestors.push({
                  element: ancestor,
                  left: ancestor.scrollLeft,
                  top: ancestor.scrollTop
                });
              }
            }
            priorFocusedElem.focus();
            for (var i = 0; i < ancestors.length; i++) {
              var info = ancestors[i];
              info.element.scrollLeft = info.left;
              info.element.scrollTop = info.top;
            }
          }
        }
        function getSelection$1(input) {
          var selection = void 0;
          if ('selectionStart' in input) {
            selection = {
              start: input.selectionStart,
              end: input.selectionEnd
            };
          } else {
            selection = getOffsets(input);
          }
          return selection || {
            start: 0,
            end: 0
          };
        }
        function setSelection(input, offsets) {
          var start = offsets.start,
              end = offsets.end;
          if (end === undefined) {
            end = start;
          }
          if ('selectionStart' in input) {
            input.selectionStart = start;
            input.selectionEnd = Math.min(end, input.value.length);
          } else {
            setOffsets(input, offsets);
          }
        }
        var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;
        var eventTypes$3 = { select: {
            phasedRegistrationNames: {
              bubbled: 'onSelect',
              captured: 'onSelectCapture'
            },
            dependencies: [TOP_BLUR, TOP_CONTEXT_MENU, TOP_FOCUS, TOP_KEY_DOWN, TOP_KEY_UP, TOP_MOUSE_DOWN, TOP_MOUSE_UP, TOP_SELECTION_CHANGE]
          } };
        var activeElement$1 = null;
        var activeElementInst$1 = null;
        var lastSelection = null;
        var mouseDown = false;
        function getSelection(node) {
          if ('selectionStart' in node && hasSelectionCapabilities(node)) {
            return {
              start: node.selectionStart,
              end: node.selectionEnd
            };
          } else if (window.getSelection) {
            var selection = window.getSelection();
            return {
              anchorNode: selection.anchorNode,
              anchorOffset: selection.anchorOffset,
              focusNode: selection.focusNode,
              focusOffset: selection.focusOffset
            };
          }
        }
        function constructSelectEvent(nativeEvent, nativeEventTarget) {
          if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement()) {
            return null;
          }
          var currentSelection = getSelection(activeElement$1);
          if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
            lastSelection = currentSelection;
            var syntheticEvent = SyntheticEvent$1.getPooled(eventTypes$3.select, activeElementInst$1, nativeEvent, nativeEventTarget);
            syntheticEvent.type = 'select';
            syntheticEvent.target = activeElement$1;
            accumulateTwoPhaseDispatches(syntheticEvent);
            return syntheticEvent;
          }
          return null;
        }
        var SelectEventPlugin = {
          eventTypes: eventTypes$3,
          extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
            var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : nativeEventTarget.nodeType === DOCUMENT_NODE ? nativeEventTarget : nativeEventTarget.ownerDocument;
            if (!doc || !isListeningToAllDependencies('onSelect', doc)) {
              return null;
            }
            var targetNode = targetInst ? getNodeFromInstance$1(targetInst) : window;
            switch (topLevelType) {
              case TOP_FOCUS:
                if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
                  activeElement$1 = targetNode;
                  activeElementInst$1 = targetInst;
                  lastSelection = null;
                }
                break;
              case TOP_BLUR:
                activeElement$1 = null;
                activeElementInst$1 = null;
                lastSelection = null;
                break;
              case TOP_MOUSE_DOWN:
                mouseDown = true;
                break;
              case TOP_CONTEXT_MENU:
              case TOP_MOUSE_UP:
                mouseDown = false;
                return constructSelectEvent(nativeEvent, nativeEventTarget);
              case TOP_SELECTION_CHANGE:
                if (skipSelectionChangeEvent) {
                  break;
                }
              case TOP_KEY_DOWN:
              case TOP_KEY_UP:
                return constructSelectEvent(nativeEvent, nativeEventTarget);
            }
            return null;
          }
        };
        injection.injectEventPluginOrder(DOMEventPluginOrder);
        injection$1.injectComponentTree(ReactDOMComponentTree);
        injection.injectEventPluginsByName({
          SimpleEventPlugin: SimpleEventPlugin,
          EnterLeaveEventPlugin: EnterLeaveEventPlugin,
          ChangeEventPlugin: ChangeEventPlugin,
          SelectEventPlugin: SelectEventPlugin,
          BeforeInputEventPlugin: BeforeInputEventPlugin
        });
        {
          if (ExecutionEnvironment.canUseDOM && typeof requestAnimationFrame !== 'function') {
            warning(false, 'React depends on requestAnimationFrame. Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
          }
        }
        var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
        var now$1 = void 0;
        if (hasNativePerformanceNow) {
          now$1 = function () {
            return performance.now();
          };
        } else {
          now$1 = function () {
            return Date.now();
          };
        }
        var scheduleWork = void 0;
        var cancelScheduledWork = void 0;
        if (!ExecutionEnvironment.canUseDOM) {
          var callbackIdCounter = 0;
          var timeoutIds = {};
          scheduleWork = function (callback, options) {
            var callbackId = callbackIdCounter++;
            var timeoutId = setTimeout(function () {
              callback({
                timeRemaining: function () {
                  return Infinity;
                },
                didTimeout: false
              });
            });
            timeoutIds[callbackId] = timeoutId;
            return callbackId;
          };
          cancelScheduledWork = function (callbackId) {
            var timeoutId = timeoutIds[callbackId];
            delete timeoutIds[callbackId];
            clearTimeout(timeoutId);
          };
        } else {
          var pendingCallbacks = [];
          var _callbackIdCounter = 0;
          var getCallbackId = function () {
            _callbackIdCounter++;
            return _callbackIdCounter;
          };
          var registeredCallbackIds = {};
          var nextSoonestTimeoutTime = -1;
          var isIdleScheduled = false;
          var isAnimationFrameScheduled = false;
          var frameDeadline = 0;
          var previousFrameTime = 33;
          var activeFrameTime = 33;
          var frameDeadlineObject = {
            didTimeout: false,
            timeRemaining: function () {
              var remaining = frameDeadline - now$1();
              return remaining > 0 ? remaining : 0;
            }
          };
          var safelyCallScheduledCallback = function (callback, callbackId) {
            if (!registeredCallbackIds[callbackId]) {
              return;
            }
            try {
              callback(frameDeadlineObject);
            } finally {
              delete registeredCallbackIds[callbackId];
            }
          };
          var callTimedOutCallbacks = function () {
            if (pendingCallbacks.length === 0) {
              return;
            }
            var currentTime = now$1();
            if (nextSoonestTimeoutTime === -1 || nextSoonestTimeoutTime > currentTime) {
              return;
            }
            nextSoonestTimeoutTime = -1;
            frameDeadlineObject.didTimeout = true;
            for (var i = 0, len = pendingCallbacks.length; i < len; i++) {
              var currentCallbackConfig = pendingCallbacks[i];
              var _timeoutTime = currentCallbackConfig.timeoutTime;
              if (_timeoutTime !== -1 && _timeoutTime <= currentTime) {
                var _callback = currentCallbackConfig.scheduledCallback;
                safelyCallScheduledCallback(_callback, currentCallbackConfig.callbackId);
              } else {
                if (_timeoutTime !== -1 && (nextSoonestTimeoutTime === -1 || _timeoutTime < nextSoonestTimeoutTime)) {
                  nextSoonestTimeoutTime = _timeoutTime;
                }
              }
            }
          };
          var messageKey = '__reactIdleCallback$' + Math.random().toString(36).slice(2);
          var idleTick = function (event) {
            if (event.source !== window || event.data !== messageKey) {
              return;
            }
            isIdleScheduled = false;
            if (pendingCallbacks.length === 0) {
              return;
            }
            callTimedOutCallbacks();
            var currentTime = now$1();
            while (frameDeadline - currentTime > 0 && pendingCallbacks.length > 0) {
              var latestCallbackConfig = pendingCallbacks.shift();
              frameDeadlineObject.didTimeout = false;
              var latestCallback = latestCallbackConfig.scheduledCallback;
              var newCallbackId = latestCallbackConfig.callbackId;
              safelyCallScheduledCallback(latestCallback, newCallbackId);
              currentTime = now$1();
            }
            if (pendingCallbacks.length > 0) {
              if (!isAnimationFrameScheduled) {
                isAnimationFrameScheduled = true;
                requestAnimationFrame(animationTick);
              }
            }
          };
          window.addEventListener('message', idleTick, false);
          var animationTick = function (rafTime) {
            isAnimationFrameScheduled = false;
            var nextFrameTime = rafTime - frameDeadline + activeFrameTime;
            if (nextFrameTime < activeFrameTime && previousFrameTime < activeFrameTime) {
              if (nextFrameTime < 8) {
                nextFrameTime = 8;
              }
              activeFrameTime = nextFrameTime < previousFrameTime ? previousFrameTime : nextFrameTime;
            } else {
              previousFrameTime = nextFrameTime;
            }
            frameDeadline = rafTime + activeFrameTime;
            if (!isIdleScheduled) {
              isIdleScheduled = true;
              window.postMessage(messageKey, '*');
            }
          };
          scheduleWork = function (callback, options) {
            var timeoutTime = -1;
            if (options != null && typeof options.timeout === 'number') {
              timeoutTime = now$1() + options.timeout;
            }
            if (nextSoonestTimeoutTime === -1 || timeoutTime !== -1 && timeoutTime < nextSoonestTimeoutTime) {
              nextSoonestTimeoutTime = timeoutTime;
            }
            var newCallbackId = getCallbackId();
            var scheduledCallbackConfig = {
              scheduledCallback: callback,
              callbackId: newCallbackId,
              timeoutTime: timeoutTime
            };
            pendingCallbacks.push(scheduledCallbackConfig);
            registeredCallbackIds[newCallbackId] = true;
            if (!isAnimationFrameScheduled) {
              isAnimationFrameScheduled = true;
              requestAnimationFrame(animationTick);
            }
            return newCallbackId;
          };
          cancelScheduledWork = function (callbackId) {
            delete registeredCallbackIds[callbackId];
          };
        }
        var didWarnSelectedSetOnOption = false;
        function flattenChildren(children) {
          var content = '';
          React.Children.forEach(children, function (child) {
            if (child == null) {
              return;
            }
            if (typeof child === 'string' || typeof child === 'number') {
              content += child;
            }
          });
          return content;
        }
        function validateProps(element, props) {
          {
            if (props.selected != null && !didWarnSelectedSetOnOption) {
              warning(false, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');
              didWarnSelectedSetOnOption = true;
            }
          }
        }
        function postMountWrapper$1(element, props) {
          if (props.value != null) {
            element.setAttribute('value', props.value);
          }
        }
        function getHostProps$1(element, props) {
          var hostProps = _assign({ children: undefined }, props);
          var content = flattenChildren(props.children);
          if (content) {
            hostProps.children = content;
          }
          return hostProps;
        }
        var getCurrentFiberOwnerName$3 = ReactDebugCurrentFiber.getCurrentFiberOwnerName;
        var getCurrentFiberStackAddendum$3 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;
        var didWarnValueDefaultValue$1 = void 0;
        {
          didWarnValueDefaultValue$1 = false;
        }
        function getDeclarationErrorAddendum() {
          var ownerName = getCurrentFiberOwnerName$3();
          if (ownerName) {
            return '\n\nCheck the render method of `' + ownerName + '`.';
          }
          return '';
        }
        var valuePropNames = ['value', 'defaultValue'];
        function checkSelectPropTypes(props) {
          ReactControlledValuePropTypes.checkPropTypes('select', props, getCurrentFiberStackAddendum$3);
          for (var i = 0; i < valuePropNames.length; i++) {
            var propName = valuePropNames[i];
            if (props[propName] == null) {
              continue;
            }
            var isArray = Array.isArray(props[propName]);
            if (props.multiple && !isArray) {
              warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum());
            } else if (!props.multiple && isArray) {
              warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum());
            }
          }
        }
        function updateOptions(node, multiple, propValue, setDefaultSelected) {
          var options = node.options;
          if (multiple) {
            var selectedValues = propValue;
            var selectedValue = {};
            for (var i = 0; i < selectedValues.length; i++) {
              selectedValue['$' + selectedValues[i]] = true;
            }
            for (var _i = 0; _i < options.length; _i++) {
              var selected = selectedValue.hasOwnProperty('$' + options[_i].value);
              if (options[_i].selected !== selected) {
                options[_i].selected = selected;
              }
              if (selected && setDefaultSelected) {
                options[_i].defaultSelected = true;
              }
            }
          } else {
            var _selectedValue = '' + propValue;
            var defaultSelected = null;
            for (var _i2 = 0; _i2 < options.length; _i2++) {
              if (options[_i2].value === _selectedValue) {
                options[_i2].selected = true;
                if (setDefaultSelected) {
                  options[_i2].defaultSelected = true;
                }
                return;
              }
              if (defaultSelected === null && !options[_i2].disabled) {
                defaultSelected = options[_i2];
              }
            }
            if (defaultSelected !== null) {
              defaultSelected.selected = true;
            }
          }
        }
        function getHostProps$2(element, props) {
          return _assign({}, props, { value: undefined });
        }
        function initWrapperState$1(element, props) {
          var node = element;
          {
            checkSelectPropTypes(props);
          }
          var value = props.value;
          node._wrapperState = {
            initialValue: value != null ? value : props.defaultValue,
            wasMultiple: !!props.multiple
          };
          {
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue$1) {
              warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
              didWarnValueDefaultValue$1 = true;
            }
          }
        }
        function postMountWrapper$2(element, props) {
          var node = element;
          node.multiple = !!props.multiple;
          var value = props.value;
          if (value != null) {
            updateOptions(node, !!props.multiple, value, false);
          } else if (props.defaultValue != null) {
            updateOptions(node, !!props.multiple, props.defaultValue, true);
          }
        }
        function postUpdateWrapper(element, props) {
          var node = element;
          node._wrapperState.initialValue = undefined;
          var wasMultiple = node._wrapperState.wasMultiple;
          node._wrapperState.wasMultiple = !!props.multiple;
          var value = props.value;
          if (value != null) {
            updateOptions(node, !!props.multiple, value, false);
          } else if (wasMultiple !== !!props.multiple) {
            if (props.defaultValue != null) {
              updateOptions(node, !!props.multiple, props.defaultValue, true);
            } else {
              updateOptions(node, !!props.multiple, props.multiple ? [] : '', false);
            }
          }
        }
        function restoreControlledState$2(element, props) {
          var node = element;
          var value = props.value;
          if (value != null) {
            updateOptions(node, !!props.multiple, value, false);
          }
        }
        var getCurrentFiberStackAddendum$4 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;
        var didWarnValDefaultVal = false;
        function getHostProps$3(element, props) {
          var node = element;
          !(props.dangerouslySetInnerHTML == null) ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : void 0;
          var hostProps = _assign({}, props, {
            value: undefined,
            defaultValue: undefined,
            children: '' + node._wrapperState.initialValue
          });
          return hostProps;
        }
        function initWrapperState$2(element, props) {
          var node = element;
          {
            ReactControlledValuePropTypes.checkPropTypes('textarea', props, getCurrentFiberStackAddendum$4);
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
              warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
              didWarnValDefaultVal = true;
            }
          }
          var initialValue = props.value;
          if (initialValue == null) {
            var defaultValue = props.defaultValue;
            var children = props.children;
            if (children != null) {
              {
                warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
              }
              !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
              if (Array.isArray(children)) {
                !(children.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
                children = children[0];
              }
              defaultValue = '' + children;
            }
            if (defaultValue == null) {
              defaultValue = '';
            }
            initialValue = defaultValue;
          }
          node._wrapperState = { initialValue: '' + initialValue };
        }
        function updateWrapper$1(element, props) {
          var node = element;
          var value = props.value;
          if (value != null) {
            var newValue = '' + value;
            if (newValue !== node.value) {
              node.value = newValue;
            }
            if (props.defaultValue == null) {
              node.defaultValue = newValue;
            }
          }
          if (props.defaultValue != null) {
            node.defaultValue = props.defaultValue;
          }
        }
        function postMountWrapper$3(element, props) {
          var node = element;
          var textContent = node.textContent;
          if (textContent === node._wrapperState.initialValue) {
            node.value = textContent;
          }
        }
        function restoreControlledState$3(element, props) {
          updateWrapper$1(element, props);
        }
        var HTML_NAMESPACE$1 = 'http://www.w3.org/1999/xhtml';
        var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
        var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
        var Namespaces = {
          html: HTML_NAMESPACE$1,
          mathml: MATH_NAMESPACE,
          svg: SVG_NAMESPACE
        };
        function getIntrinsicNamespace(type) {
          switch (type) {
            case 'svg':
              return SVG_NAMESPACE;
            case 'math':
              return MATH_NAMESPACE;
            default:
              return HTML_NAMESPACE$1;
          }
        }
        function getChildNamespace(parentNamespace, type) {
          if (parentNamespace == null || parentNamespace === HTML_NAMESPACE$1) {
            return getIntrinsicNamespace(type);
          }
          if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
            return HTML_NAMESPACE$1;
          }
          return parentNamespace;
        }
        var createMicrosoftUnsafeLocalFunction = function (func) {
          if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
            return function (arg0, arg1, arg2, arg3) {
              MSApp.execUnsafeLocalFunction(function () {
                return func(arg0, arg1, arg2, arg3);
              });
            };
          } else {
            return func;
          }
        };
        var reusableSVGContainer = void 0;
        var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
          if (node.namespaceURI === Namespaces.svg && !('innerHTML' in node)) {
            reusableSVGContainer = reusableSVGContainer || document.createElement('div');
            reusableSVGContainer.innerHTML = '<svg>' + html + '</svg>';
            var svgNode = reusableSVGContainer.firstChild;
            while (node.firstChild) {
              node.removeChild(node.firstChild);
            }
            while (svgNode.firstChild) {
              node.appendChild(svgNode.firstChild);
            }
          } else {
            node.innerHTML = html;
          }
        });
        var setTextContent = function (node, text) {
          if (text) {
            var firstChild = node.firstChild;
            if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE) {
              firstChild.nodeValue = text;
              return;
            }
          }
          node.textContent = text;
        };
        var isUnitlessNumber = {
          animationIterationCount: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix, key) {
          return prefix + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
        Object.keys(isUnitlessNumber).forEach(function (prop) {
          prefixes.forEach(function (prefix) {
            isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
          });
        });
        function dangerousStyleValue(name, value, isCustomProperty) {
          var isEmpty = value == null || typeof value === 'boolean' || value === '';
          if (isEmpty) {
            return '';
          }
          if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
            return value + 'px';
          }
          return ('' + value).trim();
        }
        var warnValidStyle = emptyFunction;
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var warnHyphenatedStyleName = function (name, getStack) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), getStack());
          };
          var warnBadVendoredStyleName = function (name, getStack) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), getStack());
          };
          var warnStyleValueWithSemicolon = function (name, value, getStack) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            warning(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.%s', name, value.replace(badStyleValueWithSemicolonPattern, ''), getStack());
          };
          var warnStyleValueIsNaN = function (name, value, getStack) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, getStack());
          };
          var warnStyleValueIsInfinity = function (name, value, getStack) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            warning(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, getStack());
          };
          warnValidStyle = function (name, value, getStack) {
            if (name.indexOf('-') > -1) {
              warnHyphenatedStyleName(name, getStack);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name, getStack);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value, getStack);
            }
            if (typeof value === 'number') {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name, value, getStack);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name, value, getStack);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        function createDangerousStringForStyles(styles) {
          {
            var serialized = '';
            var delimiter = '';
            for (var styleName in styles) {
              if (!styles.hasOwnProperty(styleName)) {
                continue;
              }
              var styleValue = styles[styleName];
              if (styleValue != null) {
                var isCustomProperty = styleName.indexOf('--') === 0;
                serialized += delimiter + hyphenateStyleName(styleName) + ':';
                serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
                delimiter = ';';
              }
            }
            return serialized || null;
          }
        }
        function setValueForStyles(node, styles, getStack) {
          var style = node.style;
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            var isCustomProperty = styleName.indexOf('--') === 0;
            {
              if (!isCustomProperty) {
                warnValidStyle$1(styleName, styles[styleName], getStack);
              }
            }
            var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);
            if (styleName === 'float') {
              styleName = 'cssFloat';
            }
            if (isCustomProperty) {
              style.setProperty(styleName, styleValue);
            } else {
              style[styleName] = styleValue;
            }
          }
        }
        var omittedCloseTags = {
          area: true,
          base: true,
          br: true,
          col: true,
          embed: true,
          hr: true,
          img: true,
          input: true,
          keygen: true,
          link: true,
          meta: true,
          param: true,
          source: true,
          track: true,
          wbr: true
        };
        var voidElementTags = _assign({ menuitem: true }, omittedCloseTags);
        var HTML$1 = '__html';
        function assertValidProps(tag, props, getStack) {
          if (!props) {
            return;
          }
          if (voidElementTags[tag]) {
            !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, getStack()) : void 0;
          }
          if (props.dangerouslySetInnerHTML != null) {
            !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
            !(typeof props.dangerouslySetInnerHTML === 'object' && HTML$1 in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
          }
          {
            !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.%s', getStack()) : void 0;
          }
          !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getStack()) : void 0;
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf('-') === -1) {
            return typeof props.is === 'string';
          }
          switch (tagName) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return false;
            default:
              return true;
          }
        }
        var possibleStandardNames = {
          accept: 'accept',
          acceptcharset: 'acceptCharset',
          'accept-charset': 'acceptCharset',
          accesskey: 'accessKey',
          action: 'action',
          allowfullscreen: 'allowFullScreen',
          alt: 'alt',
          as: 'as',
          async: 'async',
          autocapitalize: 'autoCapitalize',
          autocomplete: 'autoComplete',
          autocorrect: 'autoCorrect',
          autofocus: 'autoFocus',
          autoplay: 'autoPlay',
          autosave: 'autoSave',
          capture: 'capture',
          cellpadding: 'cellPadding',
          cellspacing: 'cellSpacing',
          challenge: 'challenge',
          charset: 'charSet',
          checked: 'checked',
          children: 'children',
          cite: 'cite',
          class: 'className',
          classid: 'classID',
          classname: 'className',
          cols: 'cols',
          colspan: 'colSpan',
          content: 'content',
          contenteditable: 'contentEditable',
          contextmenu: 'contextMenu',
          controls: 'controls',
          controlslist: 'controlsList',
          coords: 'coords',
          crossorigin: 'crossOrigin',
          dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
          data: 'data',
          datetime: 'dateTime',
          default: 'default',
          defaultchecked: 'defaultChecked',
          defaultvalue: 'defaultValue',
          defer: 'defer',
          dir: 'dir',
          disabled: 'disabled',
          download: 'download',
          draggable: 'draggable',
          enctype: 'encType',
          for: 'htmlFor',
          form: 'form',
          formmethod: 'formMethod',
          formaction: 'formAction',
          formenctype: 'formEncType',
          formnovalidate: 'formNoValidate',
          formtarget: 'formTarget',
          frameborder: 'frameBorder',
          headers: 'headers',
          height: 'height',
          hidden: 'hidden',
          high: 'high',
          href: 'href',
          hreflang: 'hrefLang',
          htmlfor: 'htmlFor',
          httpequiv: 'httpEquiv',
          'http-equiv': 'httpEquiv',
          icon: 'icon',
          id: 'id',
          innerhtml: 'innerHTML',
          inputmode: 'inputMode',
          integrity: 'integrity',
          is: 'is',
          itemid: 'itemID',
          itemprop: 'itemProp',
          itemref: 'itemRef',
          itemscope: 'itemScope',
          itemtype: 'itemType',
          keyparams: 'keyParams',
          keytype: 'keyType',
          kind: 'kind',
          label: 'label',
          lang: 'lang',
          list: 'list',
          loop: 'loop',
          low: 'low',
          manifest: 'manifest',
          marginwidth: 'marginWidth',
          marginheight: 'marginHeight',
          max: 'max',
          maxlength: 'maxLength',
          media: 'media',
          mediagroup: 'mediaGroup',
          method: 'method',
          min: 'min',
          minlength: 'minLength',
          multiple: 'multiple',
          muted: 'muted',
          name: 'name',
          nomodule: 'noModule',
          nonce: 'nonce',
          novalidate: 'noValidate',
          open: 'open',
          optimum: 'optimum',
          pattern: 'pattern',
          placeholder: 'placeholder',
          playsinline: 'playsInline',
          poster: 'poster',
          preload: 'preload',
          profile: 'profile',
          radiogroup: 'radioGroup',
          readonly: 'readOnly',
          referrerpolicy: 'referrerPolicy',
          rel: 'rel',
          required: 'required',
          reversed: 'reversed',
          role: 'role',
          rows: 'rows',
          rowspan: 'rowSpan',
          sandbox: 'sandbox',
          scope: 'scope',
          scoped: 'scoped',
          scrolling: 'scrolling',
          seamless: 'seamless',
          selected: 'selected',
          shape: 'shape',
          size: 'size',
          sizes: 'sizes',
          span: 'span',
          spellcheck: 'spellCheck',
          src: 'src',
          srcdoc: 'srcDoc',
          srclang: 'srcLang',
          srcset: 'srcSet',
          start: 'start',
          step: 'step',
          style: 'style',
          summary: 'summary',
          tabindex: 'tabIndex',
          target: 'target',
          title: 'title',
          type: 'type',
          usemap: 'useMap',
          value: 'value',
          width: 'width',
          wmode: 'wmode',
          wrap: 'wrap',
          about: 'about',
          accentheight: 'accentHeight',
          'accent-height': 'accentHeight',
          accumulate: 'accumulate',
          additive: 'additive',
          alignmentbaseline: 'alignmentBaseline',
          'alignment-baseline': 'alignmentBaseline',
          allowreorder: 'allowReorder',
          alphabetic: 'alphabetic',
          amplitude: 'amplitude',
          arabicform: 'arabicForm',
          'arabic-form': 'arabicForm',
          ascent: 'ascent',
          attributename: 'attributeName',
          attributetype: 'attributeType',
          autoreverse: 'autoReverse',
          azimuth: 'azimuth',
          basefrequency: 'baseFrequency',
          baselineshift: 'baselineShift',
          'baseline-shift': 'baselineShift',
          baseprofile: 'baseProfile',
          bbox: 'bbox',
          begin: 'begin',
          bias: 'bias',
          by: 'by',
          calcmode: 'calcMode',
          capheight: 'capHeight',
          'cap-height': 'capHeight',
          clip: 'clip',
          clippath: 'clipPath',
          'clip-path': 'clipPath',
          clippathunits: 'clipPathUnits',
          cliprule: 'clipRule',
          'clip-rule': 'clipRule',
          color: 'color',
          colorinterpolation: 'colorInterpolation',
          'color-interpolation': 'colorInterpolation',
          colorinterpolationfilters: 'colorInterpolationFilters',
          'color-interpolation-filters': 'colorInterpolationFilters',
          colorprofile: 'colorProfile',
          'color-profile': 'colorProfile',
          colorrendering: 'colorRendering',
          'color-rendering': 'colorRendering',
          contentscripttype: 'contentScriptType',
          contentstyletype: 'contentStyleType',
          cursor: 'cursor',
          cx: 'cx',
          cy: 'cy',
          d: 'd',
          datatype: 'datatype',
          decelerate: 'decelerate',
          descent: 'descent',
          diffuseconstant: 'diffuseConstant',
          direction: 'direction',
          display: 'display',
          divisor: 'divisor',
          dominantbaseline: 'dominantBaseline',
          'dominant-baseline': 'dominantBaseline',
          dur: 'dur',
          dx: 'dx',
          dy: 'dy',
          edgemode: 'edgeMode',
          elevation: 'elevation',
          enablebackground: 'enableBackground',
          'enable-background': 'enableBackground',
          end: 'end',
          exponent: 'exponent',
          externalresourcesrequired: 'externalResourcesRequired',
          fill: 'fill',
          fillopacity: 'fillOpacity',
          'fill-opacity': 'fillOpacity',
          fillrule: 'fillRule',
          'fill-rule': 'fillRule',
          filter: 'filter',
          filterres: 'filterRes',
          filterunits: 'filterUnits',
          floodopacity: 'floodOpacity',
          'flood-opacity': 'floodOpacity',
          floodcolor: 'floodColor',
          'flood-color': 'floodColor',
          focusable: 'focusable',
          fontfamily: 'fontFamily',
          'font-family': 'fontFamily',
          fontsize: 'fontSize',
          'font-size': 'fontSize',
          fontsizeadjust: 'fontSizeAdjust',
          'font-size-adjust': 'fontSizeAdjust',
          fontstretch: 'fontStretch',
          'font-stretch': 'fontStretch',
          fontstyle: 'fontStyle',
          'font-style': 'fontStyle',
          fontvariant: 'fontVariant',
          'font-variant': 'fontVariant',
          fontweight: 'fontWeight',
          'font-weight': 'fontWeight',
          format: 'format',
          from: 'from',
          fx: 'fx',
          fy: 'fy',
          g1: 'g1',
          g2: 'g2',
          glyphname: 'glyphName',
          'glyph-name': 'glyphName',
          glyphorientationhorizontal: 'glyphOrientationHorizontal',
          'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
          glyphorientationvertical: 'glyphOrientationVertical',
          'glyph-orientation-vertical': 'glyphOrientationVertical',
          glyphref: 'glyphRef',
          gradienttransform: 'gradientTransform',
          gradientunits: 'gradientUnits',
          hanging: 'hanging',
          horizadvx: 'horizAdvX',
          'horiz-adv-x': 'horizAdvX',
          horizoriginx: 'horizOriginX',
          'horiz-origin-x': 'horizOriginX',
          ideographic: 'ideographic',
          imagerendering: 'imageRendering',
          'image-rendering': 'imageRendering',
          in2: 'in2',
          in: 'in',
          inlist: 'inlist',
          intercept: 'intercept',
          k1: 'k1',
          k2: 'k2',
          k3: 'k3',
          k4: 'k4',
          k: 'k',
          kernelmatrix: 'kernelMatrix',
          kernelunitlength: 'kernelUnitLength',
          kerning: 'kerning',
          keypoints: 'keyPoints',
          keysplines: 'keySplines',
          keytimes: 'keyTimes',
          lengthadjust: 'lengthAdjust',
          letterspacing: 'letterSpacing',
          'letter-spacing': 'letterSpacing',
          lightingcolor: 'lightingColor',
          'lighting-color': 'lightingColor',
          limitingconeangle: 'limitingConeAngle',
          local: 'local',
          markerend: 'markerEnd',
          'marker-end': 'markerEnd',
          markerheight: 'markerHeight',
          markermid: 'markerMid',
          'marker-mid': 'markerMid',
          markerstart: 'markerStart',
          'marker-start': 'markerStart',
          markerunits: 'markerUnits',
          markerwidth: 'markerWidth',
          mask: 'mask',
          maskcontentunits: 'maskContentUnits',
          maskunits: 'maskUnits',
          mathematical: 'mathematical',
          mode: 'mode',
          numoctaves: 'numOctaves',
          offset: 'offset',
          opacity: 'opacity',
          operator: 'operator',
          order: 'order',
          orient: 'orient',
          orientation: 'orientation',
          origin: 'origin',
          overflow: 'overflow',
          overlineposition: 'overlinePosition',
          'overline-position': 'overlinePosition',
          overlinethickness: 'overlineThickness',
          'overline-thickness': 'overlineThickness',
          paintorder: 'paintOrder',
          'paint-order': 'paintOrder',
          panose1: 'panose1',
          'panose-1': 'panose1',
          pathlength: 'pathLength',
          patterncontentunits: 'patternContentUnits',
          patterntransform: 'patternTransform',
          patternunits: 'patternUnits',
          pointerevents: 'pointerEvents',
          'pointer-events': 'pointerEvents',
          points: 'points',
          pointsatx: 'pointsAtX',
          pointsaty: 'pointsAtY',
          pointsatz: 'pointsAtZ',
          prefix: 'prefix',
          preservealpha: 'preserveAlpha',
          preserveaspectratio: 'preserveAspectRatio',
          primitiveunits: 'primitiveUnits',
          property: 'property',
          r: 'r',
          radius: 'radius',
          refx: 'refX',
          refy: 'refY',
          renderingintent: 'renderingIntent',
          'rendering-intent': 'renderingIntent',
          repeatcount: 'repeatCount',
          repeatdur: 'repeatDur',
          requiredextensions: 'requiredExtensions',
          requiredfeatures: 'requiredFeatures',
          resource: 'resource',
          restart: 'restart',
          result: 'result',
          results: 'results',
          rotate: 'rotate',
          rx: 'rx',
          ry: 'ry',
          scale: 'scale',
          security: 'security',
          seed: 'seed',
          shaperendering: 'shapeRendering',
          'shape-rendering': 'shapeRendering',
          slope: 'slope',
          spacing: 'spacing',
          specularconstant: 'specularConstant',
          specularexponent: 'specularExponent',
          speed: 'speed',
          spreadmethod: 'spreadMethod',
          startoffset: 'startOffset',
          stddeviation: 'stdDeviation',
          stemh: 'stemh',
          stemv: 'stemv',
          stitchtiles: 'stitchTiles',
          stopcolor: 'stopColor',
          'stop-color': 'stopColor',
          stopopacity: 'stopOpacity',
          'stop-opacity': 'stopOpacity',
          strikethroughposition: 'strikethroughPosition',
          'strikethrough-position': 'strikethroughPosition',
          strikethroughthickness: 'strikethroughThickness',
          'strikethrough-thickness': 'strikethroughThickness',
          string: 'string',
          stroke: 'stroke',
          strokedasharray: 'strokeDasharray',
          'stroke-dasharray': 'strokeDasharray',
          strokedashoffset: 'strokeDashoffset',
          'stroke-dashoffset': 'strokeDashoffset',
          strokelinecap: 'strokeLinecap',
          'stroke-linecap': 'strokeLinecap',
          strokelinejoin: 'strokeLinejoin',
          'stroke-linejoin': 'strokeLinejoin',
          strokemiterlimit: 'strokeMiterlimit',
          'stroke-miterlimit': 'strokeMiterlimit',
          strokewidth: 'strokeWidth',
          'stroke-width': 'strokeWidth',
          strokeopacity: 'strokeOpacity',
          'stroke-opacity': 'strokeOpacity',
          suppresscontenteditablewarning: 'suppressContentEditableWarning',
          suppresshydrationwarning: 'suppressHydrationWarning',
          surfacescale: 'surfaceScale',
          systemlanguage: 'systemLanguage',
          tablevalues: 'tableValues',
          targetx: 'targetX',
          targety: 'targetY',
          textanchor: 'textAnchor',
          'text-anchor': 'textAnchor',
          textdecoration: 'textDecoration',
          'text-decoration': 'textDecoration',
          textlength: 'textLength',
          textrendering: 'textRendering',
          'text-rendering': 'textRendering',
          to: 'to',
          transform: 'transform',
          typeof: 'typeof',
          u1: 'u1',
          u2: 'u2',
          underlineposition: 'underlinePosition',
          'underline-position': 'underlinePosition',
          underlinethickness: 'underlineThickness',
          'underline-thickness': 'underlineThickness',
          unicode: 'unicode',
          unicodebidi: 'unicodeBidi',
          'unicode-bidi': 'unicodeBidi',
          unicoderange: 'unicodeRange',
          'unicode-range': 'unicodeRange',
          unitsperem: 'unitsPerEm',
          'units-per-em': 'unitsPerEm',
          unselectable: 'unselectable',
          valphabetic: 'vAlphabetic',
          'v-alphabetic': 'vAlphabetic',
          values: 'values',
          vectoreffect: 'vectorEffect',
          'vector-effect': 'vectorEffect',
          version: 'version',
          vertadvy: 'vertAdvY',
          'vert-adv-y': 'vertAdvY',
          vertoriginx: 'vertOriginX',
          'vert-origin-x': 'vertOriginX',
          vertoriginy: 'vertOriginY',
          'vert-origin-y': 'vertOriginY',
          vhanging: 'vHanging',
          'v-hanging': 'vHanging',
          videographic: 'vIdeographic',
          'v-ideographic': 'vIdeographic',
          viewbox: 'viewBox',
          viewtarget: 'viewTarget',
          visibility: 'visibility',
          vmathematical: 'vMathematical',
          'v-mathematical': 'vMathematical',
          vocab: 'vocab',
          widths: 'widths',
          wordspacing: 'wordSpacing',
          'word-spacing': 'wordSpacing',
          writingmode: 'writingMode',
          'writing-mode': 'writingMode',
          x1: 'x1',
          x2: 'x2',
          x: 'x',
          xchannelselector: 'xChannelSelector',
          xheight: 'xHeight',
          'x-height': 'xHeight',
          xlinkactuate: 'xlinkActuate',
          'xlink:actuate': 'xlinkActuate',
          xlinkarcrole: 'xlinkArcrole',
          'xlink:arcrole': 'xlinkArcrole',
          xlinkhref: 'xlinkHref',
          'xlink:href': 'xlinkHref',
          xlinkrole: 'xlinkRole',
          'xlink:role': 'xlinkRole',
          xlinkshow: 'xlinkShow',
          'xlink:show': 'xlinkShow',
          xlinktitle: 'xlinkTitle',
          'xlink:title': 'xlinkTitle',
          xlinktype: 'xlinkType',
          'xlink:type': 'xlinkType',
          xmlbase: 'xmlBase',
          'xml:base': 'xmlBase',
          xmllang: 'xmlLang',
          'xml:lang': 'xmlLang',
          xmlns: 'xmlns',
          'xml:space': 'xmlSpace',
          xmlnsxlink: 'xmlnsXlink',
          'xmlns:xlink': 'xmlnsXlink',
          xmlspace: 'xmlSpace',
          y1: 'y1',
          y2: 'y2',
          y: 'y',
          ychannelselector: 'yChannelSelector',
          z: 'z',
          zoomandpan: 'zoomAndPan'
        };
        var ariaProperties = {
          'aria-current': 0,
          'aria-details': 0,
          'aria-disabled': 0,
          'aria-hidden': 0,
          'aria-invalid': 0,
          'aria-keyshortcuts': 0,
          'aria-label': 0,
          'aria-roledescription': 0,
          'aria-autocomplete': 0,
          'aria-checked': 0,
          'aria-expanded': 0,
          'aria-haspopup': 0,
          'aria-level': 0,
          'aria-modal': 0,
          'aria-multiline': 0,
          'aria-multiselectable': 0,
          'aria-orientation': 0,
          'aria-placeholder': 0,
          'aria-pressed': 0,
          'aria-readonly': 0,
          'aria-required': 0,
          'aria-selected': 0,
          'aria-sort': 0,
          'aria-valuemax': 0,
          'aria-valuemin': 0,
          'aria-valuenow': 0,
          'aria-valuetext': 0,
          'aria-atomic': 0,
          'aria-busy': 0,
          'aria-live': 0,
          'aria-relevant': 0,
          'aria-dropeffect': 0,
          'aria-grabbed': 0,
          'aria-activedescendant': 0,
          'aria-colcount': 0,
          'aria-colindex': 0,
          'aria-colspan': 0,
          'aria-controls': 0,
          'aria-describedby': 0,
          'aria-errormessage': 0,
          'aria-flowto': 0,
          'aria-labelledby': 0,
          'aria-owns': 0,
          'aria-posinset': 0,
          'aria-rowcount': 0,
          'aria-rowindex': 0,
          'aria-rowspan': 0,
          'aria-setsize': 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
        var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function getStackAddendum() {
          var stack = ReactDebugCurrentFrame.getStackAddendum();
          return stack != null ? stack : '';
        }
        function validateProperty(tagName, name) {
          if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
            return true;
          }
          if (rARIACamel.test(name)) {
            var ariaName = 'aria-' + name.slice(4).toLowerCase();
            var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
            if (correctName == null) {
              warning(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s', name, getStackAddendum());
              warnedProperties[name] = true;
              return true;
            }
            if (name !== correctName) {
              warning(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?%s', name, correctName, getStackAddendum());
              warnedProperties[name] = true;
              return true;
            }
          }
          if (rARIA.test(name)) {
            var lowerCasedName = name.toLowerCase();
            var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
            if (standardName == null) {
              warnedProperties[name] = true;
              return false;
            }
            if (name !== standardName) {
              warning(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum());
              warnedProperties[name] = true;
              return true;
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          var invalidProps = [];
          for (var key in props) {
            var isValid = validateProperty(type, key);
            if (!isValid) {
              invalidProps.push(key);
            }
          }
          var unknownPropString = invalidProps.map(function (prop) {
            return '`' + prop + '`';
          }).join(', ');
          if (invalidProps.length === 1) {
            warning(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum());
          } else if (invalidProps.length > 1) {
            warning(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum());
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function getStackAddendum$1() {
          var stack = ReactDebugCurrentFrame.getStackAddendum();
          return stack != null ? stack : '';
        }
        function validateProperties$1(type, props) {
          if (type !== 'input' && type !== 'textarea' && type !== 'select') {
            return;
          }
          if (props != null && props.value === null && !didWarnValueNull) {
            didWarnValueNull = true;
            if (type === 'select' && props.multiple) {
              warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.%s', type, getStackAddendum$1());
            } else {
              warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', type, getStackAddendum$1());
            }
          }
        }
        function getStackAddendum$2() {
          var stack = ReactDebugCurrentFrame.getStackAddendum();
          return stack != null ? stack : '';
        }
        var validateProperty$1 = function () {};
        {
          var warnedProperties$1 = {};
          var _hasOwnProperty = Object.prototype.hasOwnProperty;
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
          var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
          validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
            if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
              return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
              warning(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
              warnedProperties$1[name] = true;
              return true;
            }
            if (canUseEventSystem) {
              if (registrationNameModules.hasOwnProperty(name)) {
                return true;
              }
              var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
              if (registrationName != null) {
                warning(false, 'Invalid event handler property `%s`. Did you mean `%s`?%s', name, registrationName, getStackAddendum$2());
                warnedProperties$1[name] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name)) {
                warning(false, 'Unknown event handler property `%s`. It will be ignored.%s', name, getStackAddendum$2());
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name)) {
              if (INVALID_EVENT_NAME_REGEX.test(name)) {
                warning(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.%s', name, getStackAddendum$2());
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
              return true;
            }
            if (lowerCasedName === 'innerhtml') {
              warning(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === 'aria') {
              warning(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
              warning(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.%s', typeof value, getStackAddendum$2());
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === 'number' && isNaN(value)) {
              warning(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.%s', name, getStackAddendum$2());
              warnedProperties$1[name] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name) {
                warning(false, 'Invalid DOM property `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$2());
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (!isReserved && name !== lowerCasedName) {
              warning(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.%s', name, lowerCasedName, getStackAddendum$2());
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              if (value) {
                warning(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.%s', value, name, name, value, name, getStackAddendum$2());
              } else {
                warning(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.%s', value, name, name, value, name, name, name, getStackAddendum$2());
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              warnedProperties$1[name] = true;
              return false;
            }
            return true;
          };
        }
        var warnUnknownProperties = function (type, props, canUseEventSystem) {
          var unknownProps = [];
          for (var key in props) {
            var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
            if (!isValid) {
              unknownProps.push(key);
            }
          }
          var unknownPropString = unknownProps.map(function (prop) {
            return '`' + prop + '`';
          }).join(', ');
          if (unknownProps.length === 1) {
            warning(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$2());
          } else if (unknownProps.length > 1) {
            warning(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$2());
          }
        };
        function validateProperties$2(type, props, canUseEventSystem) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, canUseEventSystem);
        }
        var getCurrentFiberOwnerName$2 = ReactDebugCurrentFiber.getCurrentFiberOwnerName;
        var getCurrentFiberStackAddendum$2 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;
        var didWarnInvalidHydration = false;
        var didWarnShadyDOM = false;
        var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
        var SUPPRESS_CONTENT_EDITABLE_WARNING = 'suppressContentEditableWarning';
        var SUPPRESS_HYDRATION_WARNING$1 = 'suppressHydrationWarning';
        var AUTOFOCUS = 'autoFocus';
        var CHILDREN = 'children';
        var STYLE = 'style';
        var HTML = '__html';
        var HTML_NAMESPACE = Namespaces.html;
        var getStack = emptyFunction.thatReturns('');
        var warnedUnknownTags = void 0;
        var suppressHydrationWarning = void 0;
        var validatePropertiesInDevelopment = void 0;
        var warnForTextDifference = void 0;
        var warnForPropDifference = void 0;
        var warnForExtraAttributes = void 0;
        var warnForInvalidEventListener = void 0;
        var normalizeMarkupForTextOrAttribute = void 0;
        var normalizeHTML = void 0;
        {
          getStack = getCurrentFiberStackAddendum$2;
          warnedUnknownTags = {
            time: true,
            dialog: true
          };
          validatePropertiesInDevelopment = function (type, props) {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, true);
          };
          var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
          var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
          normalizeMarkupForTextOrAttribute = function (markup) {
            var markupString = typeof markup === 'string' ? markup : '' + markup;
            return markupString.replace(NORMALIZE_NEWLINES_REGEX, '\n').replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, '');
          };
          warnForTextDifference = function (serverText, clientText) {
            if (didWarnInvalidHydration) {
              return;
            }
            var normalizedClientText = normalizeMarkupForTextOrAttribute(clientText);
            var normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);
            if (normalizedServerText === normalizedClientText) {
              return;
            }
            didWarnInvalidHydration = true;
            warning(false, 'Text content did not match. Server: "%s" Client: "%s"', normalizedServerText, normalizedClientText);
          };
          warnForPropDifference = function (propName, serverValue, clientValue) {
            if (didWarnInvalidHydration) {
              return;
            }
            var normalizedClientValue = normalizeMarkupForTextOrAttribute(clientValue);
            var normalizedServerValue = normalizeMarkupForTextOrAttribute(serverValue);
            if (normalizedServerValue === normalizedClientValue) {
              return;
            }
            didWarnInvalidHydration = true;
            warning(false, 'Prop `%s` did not match. Server: %s Client: %s', propName, JSON.stringify(normalizedServerValue), JSON.stringify(normalizedClientValue));
          };
          warnForExtraAttributes = function (attributeNames) {
            if (didWarnInvalidHydration) {
              return;
            }
            didWarnInvalidHydration = true;
            var names = [];
            attributeNames.forEach(function (name) {
              names.push(name);
            });
            warning(false, 'Extra attributes from the server: %s', names);
          };
          warnForInvalidEventListener = function (registrationName, listener) {
            if (listener === false) {
              warning(false, 'Expected `%s` listener to be a function, instead got `false`.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.%s', registrationName, registrationName, registrationName, getCurrentFiberStackAddendum$2());
            } else {
              warning(false, 'Expected `%s` listener to be a function, instead got a value of `%s` type.%s', registrationName, typeof listener, getCurrentFiberStackAddendum$2());
            }
          };
          normalizeHTML = function (parent, html) {
            var testElement = parent.namespaceURI === HTML_NAMESPACE ? parent.ownerDocument.createElement(parent.tagName) : parent.ownerDocument.createElementNS(parent.namespaceURI, parent.tagName);
            testElement.innerHTML = html;
            return testElement.innerHTML;
          };
        }
        function ensureListeningTo(rootContainerElement, registrationName) {
          var isDocumentOrFragment = rootContainerElement.nodeType === DOCUMENT_NODE || rootContainerElement.nodeType === DOCUMENT_FRAGMENT_NODE;
          var doc = isDocumentOrFragment ? rootContainerElement : rootContainerElement.ownerDocument;
          listenTo(registrationName, doc);
        }
        function getOwnerDocumentFromRootContainer(rootContainerElement) {
          return rootContainerElement.nodeType === DOCUMENT_NODE ? rootContainerElement : rootContainerElement.ownerDocument;
        }
        function trapClickOnNonInteractiveElement(node) {
          node.onclick = emptyFunction;
        }
        function setInitialDOMProperties(tag, domElement, rootContainerElement, nextProps, isCustomComponentTag) {
          for (var propKey in nextProps) {
            if (!nextProps.hasOwnProperty(propKey)) {
              continue;
            }
            var nextProp = nextProps[propKey];
            if (propKey === STYLE) {
              {
                if (nextProp) {
                  Object.freeze(nextProp);
                }
              }
              setValueForStyles(domElement, nextProp, getStack);
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              var nextHtml = nextProp ? nextProp[HTML] : undefined;
              if (nextHtml != null) {
                setInnerHTML(domElement, nextHtml);
              }
            } else if (propKey === CHILDREN) {
              if (typeof nextProp === 'string') {
                var canSetTextContent = tag !== 'textarea' || nextProp !== '';
                if (canSetTextContent) {
                  setTextContent(domElement, nextProp);
                }
              } else if (typeof nextProp === 'number') {
                setTextContent(domElement, '' + nextProp);
              }
            } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {} else if (propKey === AUTOFOCUS) {} else if (registrationNameModules.hasOwnProperty(propKey)) {
              if (nextProp != null) {
                if (true && typeof nextProp !== 'function') {
                  warnForInvalidEventListener(propKey, nextProp);
                }
                ensureListeningTo(rootContainerElement, propKey);
              }
            } else if (nextProp != null) {
              setValueForProperty(domElement, propKey, nextProp, isCustomComponentTag);
            }
          }
        }
        function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
          for (var i = 0; i < updatePayload.length; i += 2) {
            var propKey = updatePayload[i];
            var propValue = updatePayload[i + 1];
            if (propKey === STYLE) {
              setValueForStyles(domElement, propValue, getStack);
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              setInnerHTML(domElement, propValue);
            } else if (propKey === CHILDREN) {
              setTextContent(domElement, propValue);
            } else {
              setValueForProperty(domElement, propKey, propValue, isCustomComponentTag);
            }
          }
        }
        function createElement$1(type, props, rootContainerElement, parentNamespace) {
          var isCustomComponentTag = void 0;
          var ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement);
          var domElement = void 0;
          var namespaceURI = parentNamespace;
          if (namespaceURI === HTML_NAMESPACE) {
            namespaceURI = getIntrinsicNamespace(type);
          }
          if (namespaceURI === HTML_NAMESPACE) {
            {
              isCustomComponentTag = isCustomComponent(type, props);
              !(isCustomComponentTag || type === type.toLowerCase()) ? warning(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', type) : void 0;
            }
            if (type === 'script') {
              var div = ownerDocument.createElement('div');
              div.innerHTML = '<script><' + '/script>';
              var firstChild = div.firstChild;
              domElement = div.removeChild(firstChild);
            } else if (typeof props.is === 'string') {
              domElement = ownerDocument.createElement(type, { is: props.is });
            } else {
              domElement = ownerDocument.createElement(type);
            }
          } else {
            domElement = ownerDocument.createElementNS(namespaceURI, type);
          }
          {
            if (namespaceURI === HTML_NAMESPACE) {
              if (!isCustomComponentTag && Object.prototype.toString.call(domElement) === '[object HTMLUnknownElement]' && !Object.prototype.hasOwnProperty.call(warnedUnknownTags, type)) {
                warnedUnknownTags[type] = true;
                warning(false, 'The tag <%s> is unrecognized in this browser. ' + 'If you meant to render a React component, start its name with ' + 'an uppercase letter.', type);
              }
            }
          }
          return domElement;
        }
        function createTextNode$1(text, rootContainerElement) {
          return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
        }
        function setInitialProperties$1(domElement, tag, rawProps, rootContainerElement) {
          var isCustomComponentTag = isCustomComponent(tag, rawProps);
          {
            validatePropertiesInDevelopment(tag, rawProps);
            if (isCustomComponentTag && !didWarnShadyDOM && domElement.shadyRoot) {
              warning(false, '%s is using shady DOM. Using shady DOM with React can ' + 'cause things to break subtly.', getCurrentFiberOwnerName$2() || 'A component');
              didWarnShadyDOM = true;
            }
          }
          var props = void 0;
          switch (tag) {
            case 'iframe':
            case 'object':
              trapBubbledEvent(TOP_LOAD, domElement);
              props = rawProps;
              break;
            case 'video':
            case 'audio':
              for (var i = 0; i < mediaEventTypes.length; i++) {
                trapBubbledEvent(mediaEventTypes[i], domElement);
              }
              props = rawProps;
              break;
            case 'source':
              trapBubbledEvent(TOP_ERROR, domElement);
              props = rawProps;
              break;
            case 'img':
            case 'image':
            case 'link':
              trapBubbledEvent(TOP_ERROR, domElement);
              trapBubbledEvent(TOP_LOAD, domElement);
              props = rawProps;
              break;
            case 'form':
              trapBubbledEvent(TOP_RESET, domElement);
              trapBubbledEvent(TOP_SUBMIT, domElement);
              props = rawProps;
              break;
            case 'details':
              trapBubbledEvent(TOP_TOGGLE, domElement);
              props = rawProps;
              break;
            case 'input':
              initWrapperState(domElement, rawProps);
              props = getHostProps(domElement, rawProps);
              trapBubbledEvent(TOP_INVALID, domElement);
              ensureListeningTo(rootContainerElement, 'onChange');
              break;
            case 'option':
              validateProps(domElement, rawProps);
              props = getHostProps$1(domElement, rawProps);
              break;
            case 'select':
              initWrapperState$1(domElement, rawProps);
              props = getHostProps$2(domElement, rawProps);
              trapBubbledEvent(TOP_INVALID, domElement);
              ensureListeningTo(rootContainerElement, 'onChange');
              break;
            case 'textarea':
              initWrapperState$2(domElement, rawProps);
              props = getHostProps$3(domElement, rawProps);
              trapBubbledEvent(TOP_INVALID, domElement);
              ensureListeningTo(rootContainerElement, 'onChange');
              break;
            default:
              props = rawProps;
          }
          assertValidProps(tag, props, getStack);
          setInitialDOMProperties(tag, domElement, rootContainerElement, props, isCustomComponentTag);
          switch (tag) {
            case 'input':
              track(domElement);
              postMountWrapper(domElement, rawProps);
              break;
            case 'textarea':
              track(domElement);
              postMountWrapper$3(domElement, rawProps);
              break;
            case 'option':
              postMountWrapper$1(domElement, rawProps);
              break;
            case 'select':
              postMountWrapper$2(domElement, rawProps);
              break;
            default:
              if (typeof props.onClick === 'function') {
                trapClickOnNonInteractiveElement(domElement);
              }
              break;
          }
        }
        function diffProperties$1(domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
          {
            validatePropertiesInDevelopment(tag, nextRawProps);
          }
          var updatePayload = null;
          var lastProps = void 0;
          var nextProps = void 0;
          switch (tag) {
            case 'input':
              lastProps = getHostProps(domElement, lastRawProps);
              nextProps = getHostProps(domElement, nextRawProps);
              updatePayload = [];
              break;
            case 'option':
              lastProps = getHostProps$1(domElement, lastRawProps);
              nextProps = getHostProps$1(domElement, nextRawProps);
              updatePayload = [];
              break;
            case 'select':
              lastProps = getHostProps$2(domElement, lastRawProps);
              nextProps = getHostProps$2(domElement, nextRawProps);
              updatePayload = [];
              break;
            case 'textarea':
              lastProps = getHostProps$3(domElement, lastRawProps);
              nextProps = getHostProps$3(domElement, nextRawProps);
              updatePayload = [];
              break;
            default:
              lastProps = lastRawProps;
              nextProps = nextRawProps;
              if (typeof lastProps.onClick !== 'function' && typeof nextProps.onClick === 'function') {
                trapClickOnNonInteractiveElement(domElement);
              }
              break;
          }
          assertValidProps(tag, nextProps, getStack);
          var propKey = void 0;
          var styleName = void 0;
          var styleUpdates = null;
          for (propKey in lastProps) {
            if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
              continue;
            }
            if (propKey === STYLE) {
              var lastStyle = lastProps[propKey];
              for (styleName in lastStyle) {
                if (lastStyle.hasOwnProperty(styleName)) {
                  if (!styleUpdates) {
                    styleUpdates = {};
                  }
                  styleUpdates[styleName] = '';
                }
              }
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN) {} else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {} else if (propKey === AUTOFOCUS) {} else if (registrationNameModules.hasOwnProperty(propKey)) {
              if (!updatePayload) {
                updatePayload = [];
              }
            } else {
              (updatePayload = updatePayload || []).push(propKey, null);
            }
          }
          for (propKey in nextProps) {
            var nextProp = nextProps[propKey];
            var lastProp = lastProps != null ? lastProps[propKey] : undefined;
            if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
              continue;
            }
            if (propKey === STYLE) {
              {
                if (nextProp) {
                  Object.freeze(nextProp);
                }
              }
              if (lastProp) {
                for (styleName in lastProp) {
                  if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                    if (!styleUpdates) {
                      styleUpdates = {};
                    }
                    styleUpdates[styleName] = '';
                  }
                }
                for (styleName in nextProp) {
                  if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                    if (!styleUpdates) {
                      styleUpdates = {};
                    }
                    styleUpdates[styleName] = nextProp[styleName];
                  }
                }
              } else {
                if (!styleUpdates) {
                  if (!updatePayload) {
                    updatePayload = [];
                  }
                  updatePayload.push(propKey, styleUpdates);
                }
                styleUpdates = nextProp;
              }
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              var nextHtml = nextProp ? nextProp[HTML] : undefined;
              var lastHtml = lastProp ? lastProp[HTML] : undefined;
              if (nextHtml != null) {
                if (lastHtml !== nextHtml) {
                  (updatePayload = updatePayload || []).push(propKey, '' + nextHtml);
                }
              } else {}
            } else if (propKey === CHILDREN) {
              if (lastProp !== nextProp && (typeof nextProp === 'string' || typeof nextProp === 'number')) {
                (updatePayload = updatePayload || []).push(propKey, '' + nextProp);
              }
            } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {} else if (registrationNameModules.hasOwnProperty(propKey)) {
              if (nextProp != null) {
                if (true && typeof nextProp !== 'function') {
                  warnForInvalidEventListener(propKey, nextProp);
                }
                ensureListeningTo(rootContainerElement, propKey);
              }
              if (!updatePayload && lastProp !== nextProp) {
                updatePayload = [];
              }
            } else {
              (updatePayload = updatePayload || []).push(propKey, nextProp);
            }
          }
          if (styleUpdates) {
            (updatePayload = updatePayload || []).push(STYLE, styleUpdates);
          }
          return updatePayload;
        }
        function updateProperties$1(domElement, updatePayload, tag, lastRawProps, nextRawProps) {
          if (tag === 'input' && nextRawProps.type === 'radio' && nextRawProps.name != null) {
            updateChecked(domElement, nextRawProps);
          }
          var wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
          var isCustomComponentTag = isCustomComponent(tag, nextRawProps);
          updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag);
          switch (tag) {
            case 'input':
              updateWrapper(domElement, nextRawProps);
              break;
            case 'textarea':
              updateWrapper$1(domElement, nextRawProps);
              break;
            case 'select':
              postUpdateWrapper(domElement, nextRawProps);
              break;
          }
        }
        function getPossibleStandardName(propName) {
          {
            var lowerCasedName = propName.toLowerCase();
            if (!possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              return null;
            }
            return possibleStandardNames[lowerCasedName] || null;
          }
          return null;
        }
        function diffHydratedProperties$1(domElement, tag, rawProps, parentNamespace, rootContainerElement) {
          var isCustomComponentTag = void 0;
          var extraAttributeNames = void 0;
          {
            suppressHydrationWarning = rawProps[SUPPRESS_HYDRATION_WARNING$1] === true;
            isCustomComponentTag = isCustomComponent(tag, rawProps);
            validatePropertiesInDevelopment(tag, rawProps);
            if (isCustomComponentTag && !didWarnShadyDOM && domElement.shadyRoot) {
              warning(false, '%s is using shady DOM. Using shady DOM with React can ' + 'cause things to break subtly.', getCurrentFiberOwnerName$2() || 'A component');
              didWarnShadyDOM = true;
            }
          }
          switch (tag) {
            case 'iframe':
            case 'object':
              trapBubbledEvent(TOP_LOAD, domElement);
              break;
            case 'video':
            case 'audio':
              for (var i = 0; i < mediaEventTypes.length; i++) {
                trapBubbledEvent(mediaEventTypes[i], domElement);
              }
              break;
            case 'source':
              trapBubbledEvent(TOP_ERROR, domElement);
              break;
            case 'img':
            case 'image':
            case 'link':
              trapBubbledEvent(TOP_ERROR, domElement);
              trapBubbledEvent(TOP_LOAD, domElement);
              break;
            case 'form':
              trapBubbledEvent(TOP_RESET, domElement);
              trapBubbledEvent(TOP_SUBMIT, domElement);
              break;
            case 'details':
              trapBubbledEvent(TOP_TOGGLE, domElement);
              break;
            case 'input':
              initWrapperState(domElement, rawProps);
              trapBubbledEvent(TOP_INVALID, domElement);
              ensureListeningTo(rootContainerElement, 'onChange');
              break;
            case 'option':
              validateProps(domElement, rawProps);
              break;
            case 'select':
              initWrapperState$1(domElement, rawProps);
              trapBubbledEvent(TOP_INVALID, domElement);
              ensureListeningTo(rootContainerElement, 'onChange');
              break;
            case 'textarea':
              initWrapperState$2(domElement, rawProps);
              trapBubbledEvent(TOP_INVALID, domElement);
              ensureListeningTo(rootContainerElement, 'onChange');
              break;
          }
          assertValidProps(tag, rawProps, getStack);
          {
            extraAttributeNames = new Set();
            var attributes = domElement.attributes;
            for (var _i = 0; _i < attributes.length; _i++) {
              var name = attributes[_i].name.toLowerCase();
              switch (name) {
                case 'data-reactroot':
                  break;
                case 'value':
                  break;
                case 'checked':
                  break;
                case 'selected':
                  break;
                default:
                  extraAttributeNames.add(attributes[_i].name);
              }
            }
          }
          var updatePayload = null;
          for (var propKey in rawProps) {
            if (!rawProps.hasOwnProperty(propKey)) {
              continue;
            }
            var nextProp = rawProps[propKey];
            if (propKey === CHILDREN) {
              if (typeof nextProp === 'string') {
                if (domElement.textContent !== nextProp) {
                  if (true && !suppressHydrationWarning) {
                    warnForTextDifference(domElement.textContent, nextProp);
                  }
                  updatePayload = [CHILDREN, nextProp];
                }
              } else if (typeof nextProp === 'number') {
                if (domElement.textContent !== '' + nextProp) {
                  if (true && !suppressHydrationWarning) {
                    warnForTextDifference(domElement.textContent, nextProp);
                  }
                  updatePayload = [CHILDREN, '' + nextProp];
                }
              }
            } else if (registrationNameModules.hasOwnProperty(propKey)) {
              if (nextProp != null) {
                if (true && typeof nextProp !== 'function') {
                  warnForInvalidEventListener(propKey, nextProp);
                }
                ensureListeningTo(rootContainerElement, propKey);
              }
            } else if (true && typeof isCustomComponentTag === 'boolean') {
              var serverValue = void 0;
              var propertyInfo = getPropertyInfo(propKey);
              if (suppressHydrationWarning) {} else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1 || propKey === 'value' || propKey === 'checked' || propKey === 'selected') {} else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
                var rawHtml = nextProp ? nextProp[HTML] || '' : '';
                var serverHTML = domElement.innerHTML;
                var expectedHTML = normalizeHTML(domElement, rawHtml);
                if (expectedHTML !== serverHTML) {
                  warnForPropDifference(propKey, serverHTML, expectedHTML);
                }
              } else if (propKey === STYLE) {
                extraAttributeNames.delete(propKey);
                var expectedStyle = createDangerousStringForStyles(nextProp);
                serverValue = domElement.getAttribute('style');
                if (expectedStyle !== serverValue) {
                  warnForPropDifference(propKey, serverValue, expectedStyle);
                }
              } else if (isCustomComponentTag) {
                extraAttributeNames.delete(propKey.toLowerCase());
                serverValue = getValueForAttribute(domElement, propKey, nextProp);
                if (nextProp !== serverValue) {
                  warnForPropDifference(propKey, serverValue, nextProp);
                }
              } else if (!shouldIgnoreAttribute(propKey, propertyInfo, isCustomComponentTag) && !shouldRemoveAttribute(propKey, nextProp, propertyInfo, isCustomComponentTag)) {
                var isMismatchDueToBadCasing = false;
                if (propertyInfo !== null) {
                  extraAttributeNames.delete(propertyInfo.attributeName);
                  serverValue = getValueForProperty(domElement, propKey, nextProp, propertyInfo);
                } else {
                  var ownNamespace = parentNamespace;
                  if (ownNamespace === HTML_NAMESPACE) {
                    ownNamespace = getIntrinsicNamespace(tag);
                  }
                  if (ownNamespace === HTML_NAMESPACE) {
                    extraAttributeNames.delete(propKey.toLowerCase());
                  } else {
                    var standardName = getPossibleStandardName(propKey);
                    if (standardName !== null && standardName !== propKey) {
                      isMismatchDueToBadCasing = true;
                      extraAttributeNames.delete(standardName);
                    }
                    extraAttributeNames.delete(propKey);
                  }
                  serverValue = getValueForAttribute(domElement, propKey, nextProp);
                }
                if (nextProp !== serverValue && !isMismatchDueToBadCasing) {
                  warnForPropDifference(propKey, serverValue, nextProp);
                }
              }
            }
          }
          {
            if (extraAttributeNames.size > 0 && !suppressHydrationWarning) {
              warnForExtraAttributes(extraAttributeNames);
            }
          }
          switch (tag) {
            case 'input':
              track(domElement);
              postMountWrapper(domElement, rawProps);
              break;
            case 'textarea':
              track(domElement);
              postMountWrapper$3(domElement, rawProps);
              break;
            case 'select':
            case 'option':
              break;
            default:
              if (typeof rawProps.onClick === 'function') {
                trapClickOnNonInteractiveElement(domElement);
              }
              break;
          }
          return updatePayload;
        }
        function diffHydratedText$1(textNode, text) {
          var isDifferent = textNode.nodeValue !== text;
          return isDifferent;
        }
        function warnForUnmatchedText$1(textNode, text) {
          {
            warnForTextDifference(textNode.nodeValue, text);
          }
        }
        function warnForDeletedHydratableElement$1(parentNode, child) {
          {
            if (didWarnInvalidHydration) {
              return;
            }
            didWarnInvalidHydration = true;
            warning(false, 'Did not expect server HTML to contain a <%s> in <%s>.', child.nodeName.toLowerCase(), parentNode.nodeName.toLowerCase());
          }
        }
        function warnForDeletedHydratableText$1(parentNode, child) {
          {
            if (didWarnInvalidHydration) {
              return;
            }
            didWarnInvalidHydration = true;
            warning(false, 'Did not expect server HTML to contain the text node "%s" in <%s>.', child.nodeValue, parentNode.nodeName.toLowerCase());
          }
        }
        function warnForInsertedHydratedElement$1(parentNode, tag, props) {
          {
            if (didWarnInvalidHydration) {
              return;
            }
            didWarnInvalidHydration = true;
            warning(false, 'Expected server HTML to contain a matching <%s> in <%s>.', tag, parentNode.nodeName.toLowerCase());
          }
        }
        function warnForInsertedHydratedText$1(parentNode, text) {
          {
            if (text === '') {
              return;
            }
            if (didWarnInvalidHydration) {
              return;
            }
            didWarnInvalidHydration = true;
            warning(false, 'Expected server HTML to contain a matching text node for "%s" in <%s>.', text, parentNode.nodeName.toLowerCase());
          }
        }
        function restoreControlledState$1(domElement, tag, props) {
          switch (tag) {
            case 'input':
              restoreControlledState(domElement, props);
              return;
            case 'textarea':
              restoreControlledState$3(domElement, props);
              return;
            case 'select':
              restoreControlledState$2(domElement, props);
              return;
          }
        }
        var ReactDOMFiberComponent = Object.freeze({
          createElement: createElement$1,
          createTextNode: createTextNode$1,
          setInitialProperties: setInitialProperties$1,
          diffProperties: diffProperties$1,
          updateProperties: updateProperties$1,
          diffHydratedProperties: diffHydratedProperties$1,
          diffHydratedText: diffHydratedText$1,
          warnForUnmatchedText: warnForUnmatchedText$1,
          warnForDeletedHydratableElement: warnForDeletedHydratableElement$1,
          warnForDeletedHydratableText: warnForDeletedHydratableText$1,
          warnForInsertedHydratedElement: warnForInsertedHydratedElement$1,
          warnForInsertedHydratedText: warnForInsertedHydratedText$1,
          restoreControlledState: restoreControlledState$1
        });
        var getCurrentFiberStackAddendum$5 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;
        var validateDOMNesting = emptyFunction;
        {
          var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];
          var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template', 'foreignObject', 'desc', 'title'];
          var buttonScopeTags = inScopeTags.concat(['button']);
          var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];
          var emptyAncestorInfo = {
            current: null,
            formTag: null,
            aTagInScope: null,
            buttonTagInScope: null,
            nobrTagInScope: null,
            pTagInButtonScope: null,
            listItemTagAutoclosing: null,
            dlItemTagAutoclosing: null
          };
          var updatedAncestorInfo$1 = function (oldInfo, tag, instance) {
            var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
            var info = {
              tag: tag,
              instance: instance
            };
            if (inScopeTags.indexOf(tag) !== -1) {
              ancestorInfo.aTagInScope = null;
              ancestorInfo.buttonTagInScope = null;
              ancestorInfo.nobrTagInScope = null;
            }
            if (buttonScopeTags.indexOf(tag) !== -1) {
              ancestorInfo.pTagInButtonScope = null;
            }
            if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
              ancestorInfo.listItemTagAutoclosing = null;
              ancestorInfo.dlItemTagAutoclosing = null;
            }
            ancestorInfo.current = info;
            if (tag === 'form') {
              ancestorInfo.formTag = info;
            }
            if (tag === 'a') {
              ancestorInfo.aTagInScope = info;
            }
            if (tag === 'button') {
              ancestorInfo.buttonTagInScope = info;
            }
            if (tag === 'nobr') {
              ancestorInfo.nobrTagInScope = info;
            }
            if (tag === 'p') {
              ancestorInfo.pTagInButtonScope = info;
            }
            if (tag === 'li') {
              ancestorInfo.listItemTagAutoclosing = info;
            }
            if (tag === 'dd' || tag === 'dt') {
              ancestorInfo.dlItemTagAutoclosing = info;
            }
            return ancestorInfo;
          };
          var isTagValidWithParent = function (tag, parentTag) {
            switch (parentTag) {
              case 'select':
                return tag === 'option' || tag === 'optgroup' || tag === '#text';
              case 'optgroup':
                return tag === 'option' || tag === '#text';
              case 'option':
                return tag === '#text';
              case 'tr':
                return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
              case 'tbody':
              case 'thead':
              case 'tfoot':
                return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
              case 'colgroup':
                return tag === 'col' || tag === 'template';
              case 'table':
                return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
              case 'head':
                return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
              case 'html':
                return tag === 'head' || tag === 'body';
              case '#document':
                return tag === 'html';
            }
            switch (tag) {
              case 'h1':
              case 'h2':
              case 'h3':
              case 'h4':
              case 'h5':
              case 'h6':
                return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';
              case 'rp':
              case 'rt':
                return impliedEndTags.indexOf(parentTag) === -1;
              case 'body':
              case 'caption':
              case 'col':
              case 'colgroup':
              case 'frame':
              case 'head':
              case 'html':
              case 'tbody':
              case 'td':
              case 'tfoot':
              case 'th':
              case 'thead':
              case 'tr':
                return parentTag == null;
            }
            return true;
          };
          var findInvalidAncestorForTag = function (tag, ancestorInfo) {
            switch (tag) {
              case 'address':
              case 'article':
              case 'aside':
              case 'blockquote':
              case 'center':
              case 'details':
              case 'dialog':
              case 'dir':
              case 'div':
              case 'dl':
              case 'fieldset':
              case 'figcaption':
              case 'figure':
              case 'footer':
              case 'header':
              case 'hgroup':
              case 'main':
              case 'menu':
              case 'nav':
              case 'ol':
              case 'p':
              case 'section':
              case 'summary':
              case 'ul':
              case 'pre':
              case 'listing':
              case 'table':
              case 'hr':
              case 'xmp':
              case 'h1':
              case 'h2':
              case 'h3':
              case 'h4':
              case 'h5':
              case 'h6':
                return ancestorInfo.pTagInButtonScope;
              case 'form':
                return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
              case 'li':
                return ancestorInfo.listItemTagAutoclosing;
              case 'dd':
              case 'dt':
                return ancestorInfo.dlItemTagAutoclosing;
              case 'button':
                return ancestorInfo.buttonTagInScope;
              case 'a':
                return ancestorInfo.aTagInScope;
              case 'nobr':
                return ancestorInfo.nobrTagInScope;
            }
            return null;
          };
          var didWarn = {};
          validateDOMNesting = function (childTag, childText, ancestorInfo) {
            ancestorInfo = ancestorInfo || emptyAncestorInfo;
            var parentInfo = ancestorInfo.current;
            var parentTag = parentInfo && parentInfo.tag;
            if (childText != null) {
              !(childTag == null) ? warning(false, 'validateDOMNesting: when childText is passed, childTag should be null') : void 0;
              childTag = '#text';
            }
            var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
            var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
            var invalidParentOrAncestor = invalidParent || invalidAncestor;
            if (!invalidParentOrAncestor) {
              return;
            }
            var ancestorTag = invalidParentOrAncestor.tag;
            var addendum = getCurrentFiberStackAddendum$5();
            var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + addendum;
            if (didWarn[warnKey]) {
              return;
            }
            didWarn[warnKey] = true;
            var tagDisplayName = childTag;
            var whitespaceInfo = '';
            if (childTag === '#text') {
              if (/\S/.test(childText)) {
                tagDisplayName = 'Text nodes';
              } else {
                tagDisplayName = 'Whitespace text nodes';
                whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + 'each line of your source code.';
              }
            } else {
              tagDisplayName = '<' + childTag + '>';
            }
            if (invalidParent) {
              var info = '';
              if (ancestorTag === 'table' && childTag === 'tr') {
                info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
              }
              warning(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s', tagDisplayName, ancestorTag, whitespaceInfo, info, addendum);
            } else {
              warning(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>.%s', tagDisplayName, ancestorTag, addendum);
            }
          };
          validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo$1;
        }
        var validateDOMNesting$1 = validateDOMNesting;
        function shim() {
          invariant(false, 'The current renderer does not support persistence. This error is likely caused by a bug in React. Please file an issue.');
        }
        var supportsPersistence = false;
        var cloneInstance = shim;
        var createContainerChildSet = shim;
        var appendChildToContainerChildSet = shim;
        var finalizeContainerChildren = shim;
        var replaceContainerChildren = shim;
        var createElement = createElement$1;
        var createTextNode = createTextNode$1;
        var setInitialProperties = setInitialProperties$1;
        var diffProperties = diffProperties$1;
        var updateProperties = updateProperties$1;
        var diffHydratedProperties = diffHydratedProperties$1;
        var diffHydratedText = diffHydratedText$1;
        var warnForUnmatchedText = warnForUnmatchedText$1;
        var warnForDeletedHydratableElement = warnForDeletedHydratableElement$1;
        var warnForDeletedHydratableText = warnForDeletedHydratableText$1;
        var warnForInsertedHydratedElement = warnForInsertedHydratedElement$1;
        var warnForInsertedHydratedText = warnForInsertedHydratedText$1;
        var updatedAncestorInfo = validateDOMNesting$1.updatedAncestorInfo;
        var precacheFiberNode$1 = precacheFiberNode;
        var updateFiberProps$1 = updateFiberProps;
        var SUPPRESS_HYDRATION_WARNING = void 0;
        {
          SUPPRESS_HYDRATION_WARNING = 'suppressHydrationWarning';
        }
        var eventsEnabled = null;
        var selectionInformation = null;
        function shouldAutoFocusHostComponent(type, props) {
          switch (type) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              return !!props.autoFocus;
          }
          return false;
        }
        function getRootHostContext(rootContainerInstance) {
          var type = void 0;
          var namespace = void 0;
          var nodeType = rootContainerInstance.nodeType;
          switch (nodeType) {
            case DOCUMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              {
                type = nodeType === DOCUMENT_NODE ? '#document' : '#fragment';
                var root = rootContainerInstance.documentElement;
                namespace = root ? root.namespaceURI : getChildNamespace(null, '');
                break;
              }
            default:
              {
                var container = nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
                var ownNamespace = container.namespaceURI || null;
                type = container.tagName;
                namespace = getChildNamespace(ownNamespace, type);
                break;
              }
          }
          {
            var validatedTag = type.toLowerCase();
            var _ancestorInfo = updatedAncestorInfo(null, validatedTag, null);
            return {
              namespace: namespace,
              ancestorInfo: _ancestorInfo
            };
          }
          return namespace;
        }
        function getChildHostContext(parentHostContext, type, rootContainerInstance) {
          {
            var parentHostContextDev = parentHostContext;
            var _namespace = getChildNamespace(parentHostContextDev.namespace, type);
            var _ancestorInfo2 = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type, null);
            return {
              namespace: _namespace,
              ancestorInfo: _ancestorInfo2
            };
          }
          var parentNamespace = parentHostContext;
          return getChildNamespace(parentNamespace, type);
        }
        function getPublicInstance(instance) {
          return instance;
        }
        function prepareForCommit(containerInfo) {
          eventsEnabled = isEnabled();
          selectionInformation = getSelectionInformation();
          setEnabled(false);
        }
        function resetAfterCommit(containerInfo) {
          restoreSelection(selectionInformation);
          selectionInformation = null;
          setEnabled(eventsEnabled);
          eventsEnabled = null;
        }
        function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
          var parentNamespace = void 0;
          {
            var hostContextDev = hostContext;
            validateDOMNesting$1(type, null, hostContextDev.ancestorInfo);
            if (typeof props.children === 'string' || typeof props.children === 'number') {
              var string = '' + props.children;
              var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type, null);
              validateDOMNesting$1(null, string, ownAncestorInfo);
            }
            parentNamespace = hostContextDev.namespace;
          }
          var domElement = createElement(type, props, rootContainerInstance, parentNamespace);
          precacheFiberNode$1(internalInstanceHandle, domElement);
          updateFiberProps$1(domElement, props);
          return domElement;
        }
        function appendInitialChild(parentInstance, child) {
          parentInstance.appendChild(child);
        }
        function finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext) {
          setInitialProperties(domElement, type, props, rootContainerInstance);
          return shouldAutoFocusHostComponent(type, props);
        }
        function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
          {
            var hostContextDev = hostContext;
            if (typeof newProps.children !== typeof oldProps.children && (typeof newProps.children === 'string' || typeof newProps.children === 'number')) {
              var string = '' + newProps.children;
              var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type, null);
              validateDOMNesting$1(null, string, ownAncestorInfo);
            }
          }
          return diffProperties(domElement, type, oldProps, newProps, rootContainerInstance);
        }
        function shouldSetTextContent(type, props) {
          return type === 'textarea' || typeof props.children === 'string' || typeof props.children === 'number' || typeof props.dangerouslySetInnerHTML === 'object' && props.dangerouslySetInnerHTML !== null && typeof props.dangerouslySetInnerHTML.__html === 'string';
        }
        function shouldDeprioritizeSubtree(type, props) {
          return !!props.hidden;
        }
        function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
          {
            var hostContextDev = hostContext;
            validateDOMNesting$1(null, text, hostContextDev.ancestorInfo);
          }
          var textNode = createTextNode(text, rootContainerInstance);
          precacheFiberNode$1(internalInstanceHandle, textNode);
          return textNode;
        }
        var now = now$1;
        var isPrimaryRenderer = true;
        var scheduleDeferredCallback = scheduleWork;
        var cancelDeferredCallback = cancelScheduledWork;
        var supportsMutation = true;
        function commitMount(domElement, type, newProps, internalInstanceHandle) {
          if (shouldAutoFocusHostComponent(type, newProps)) {
            domElement.focus();
          }
        }
        function commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
          updateFiberProps$1(domElement, newProps);
          updateProperties(domElement, updatePayload, type, oldProps, newProps);
        }
        function resetTextContent(domElement) {
          setTextContent(domElement, '');
        }
        function commitTextUpdate(textInstance, oldText, newText) {
          textInstance.nodeValue = newText;
        }
        function appendChild(parentInstance, child) {
          parentInstance.appendChild(child);
        }
        function appendChildToContainer(container, child) {
          if (container.nodeType === COMMENT_NODE) {
            container.parentNode.insertBefore(child, container);
          } else {
            container.appendChild(child);
          }
        }
        function insertBefore(parentInstance, child, beforeChild) {
          parentInstance.insertBefore(child, beforeChild);
        }
        function insertInContainerBefore(container, child, beforeChild) {
          if (container.nodeType === COMMENT_NODE) {
            container.parentNode.insertBefore(child, beforeChild);
          } else {
            container.insertBefore(child, beforeChild);
          }
        }
        function removeChild(parentInstance, child) {
          parentInstance.removeChild(child);
        }
        function removeChildFromContainer(container, child) {
          if (container.nodeType === COMMENT_NODE) {
            container.parentNode.removeChild(child);
          } else {
            container.removeChild(child);
          }
        }
        var supportsHydration = true;
        function canHydrateInstance(instance, type, props) {
          if (instance.nodeType !== ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()) {
            return null;
          }
          return instance;
        }
        function canHydrateTextInstance(instance, text) {
          if (text === '' || instance.nodeType !== TEXT_NODE) {
            return null;
          }
          return instance;
        }
        function getNextHydratableSibling(instance) {
          var node = instance.nextSibling;
          while (node && node.nodeType !== ELEMENT_NODE && node.nodeType !== TEXT_NODE) {
            node = node.nextSibling;
          }
          return node;
        }
        function getFirstHydratableChild(parentInstance) {
          var next = parentInstance.firstChild;
          while (next && next.nodeType !== ELEMENT_NODE && next.nodeType !== TEXT_NODE) {
            next = next.nextSibling;
          }
          return next;
        }
        function hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
          precacheFiberNode$1(internalInstanceHandle, instance);
          updateFiberProps$1(instance, props);
          var parentNamespace = void 0;
          {
            var hostContextDev = hostContext;
            parentNamespace = hostContextDev.namespace;
          }
          return diffHydratedProperties(instance, type, props, parentNamespace, rootContainerInstance);
        }
        function hydrateTextInstance(textInstance, text, internalInstanceHandle) {
          precacheFiberNode$1(internalInstanceHandle, textInstance);
          return diffHydratedText(textInstance, text);
        }
        function didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text) {
          {
            warnForUnmatchedText(textInstance, text);
          }
        }
        function didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text) {
          if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
            warnForUnmatchedText(textInstance, text);
          }
        }
        function didNotHydrateContainerInstance(parentContainer, instance) {
          {
            if (instance.nodeType === 1) {
              warnForDeletedHydratableElement(parentContainer, instance);
            } else {
              warnForDeletedHydratableText(parentContainer, instance);
            }
          }
        }
        function didNotHydrateInstance(parentType, parentProps, parentInstance, instance) {
          if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
            if (instance.nodeType === 1) {
              warnForDeletedHydratableElement(parentInstance, instance);
            } else {
              warnForDeletedHydratableText(parentInstance, instance);
            }
          }
        }
        function didNotFindHydratableContainerInstance(parentContainer, type, props) {
          {
            warnForInsertedHydratedElement(parentContainer, type, props);
          }
        }
        function didNotFindHydratableContainerTextInstance(parentContainer, text) {
          {
            warnForInsertedHydratedText(parentContainer, text);
          }
        }
        function didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props) {
          if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
            warnForInsertedHydratedElement(parentInstance, type, props);
          }
        }
        function didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text) {
          if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
            warnForInsertedHydratedText(parentInstance, text);
          }
        }
        var enableUserTimingAPI = true;
        var enableGetDerivedStateFromCatch = false;
        var enableSuspense = false;
        var debugRenderPhaseSideEffects = false;
        var debugRenderPhaseSideEffectsForStrictMode = true;
        var replayFailedUnitOfWorkWithInvokeGuardedCallback = true;
        var warnAboutDeprecatedLifecycles = false;
        var warnAboutLegacyContextAPI = false;
        var enableProfilerTimer = true;
        var fireGetDerivedStateFromPropsOnStateUpdates = true;
        var reactEmoji = '\u269B';
        var warningEmoji = '\u26D4';
        var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';
        var currentFiber = null;
        var currentPhase = null;
        var currentPhaseFiber = null;
        var isCommitting = false;
        var hasScheduledUpdateInCurrentCommit = false;
        var hasScheduledUpdateInCurrentPhase = false;
        var commitCountInCurrentWorkLoop = 0;
        var effectCountInCurrentCommit = 0;
        var isWaitingForCallback = false;
        var labelsInCurrentCommit = new Set();
        var formatMarkName = function (markName) {
          return reactEmoji + ' ' + markName;
        };
        var formatLabel = function (label, warning$$1) {
          var prefix = warning$$1 ? warningEmoji + ' ' : reactEmoji + ' ';
          var suffix = warning$$1 ? ' Warning: ' + warning$$1 : '';
          return '' + prefix + label + suffix;
        };
        var beginMark = function (markName) {
          performance.mark(formatMarkName(markName));
        };
        var clearMark = function (markName) {
          performance.clearMarks(formatMarkName(markName));
        };
        var endMark = function (label, markName, warning$$1) {
          var formattedMarkName = formatMarkName(markName);
          var formattedLabel = formatLabel(label, warning$$1);
          try {
            performance.measure(formattedLabel, formattedMarkName);
          } catch (err) {}
          performance.clearMarks(formattedMarkName);
          performance.clearMeasures(formattedLabel);
        };
        var getFiberMarkName = function (label, debugID) {
          return label + ' (#' + debugID + ')';
        };
        var getFiberLabel = function (componentName, isMounted, phase) {
          if (phase === null) {
            return componentName + ' [' + (isMounted ? 'update' : 'mount') + ']';
          } else {
            return componentName + '.' + phase;
          }
        };
        var beginFiberMark = function (fiber, phase) {
          var componentName = getComponentName(fiber) || 'Unknown';
          var debugID = fiber._debugID;
          var isMounted = fiber.alternate !== null;
          var label = getFiberLabel(componentName, isMounted, phase);
          if (isCommitting && labelsInCurrentCommit.has(label)) {
            return false;
          }
          labelsInCurrentCommit.add(label);
          var markName = getFiberMarkName(label, debugID);
          beginMark(markName);
          return true;
        };
        var clearFiberMark = function (fiber, phase) {
          var componentName = getComponentName(fiber) || 'Unknown';
          var debugID = fiber._debugID;
          var isMounted = fiber.alternate !== null;
          var label = getFiberLabel(componentName, isMounted, phase);
          var markName = getFiberMarkName(label, debugID);
          clearMark(markName);
        };
        var endFiberMark = function (fiber, phase, warning$$1) {
          var componentName = getComponentName(fiber) || 'Unknown';
          var debugID = fiber._debugID;
          var isMounted = fiber.alternate !== null;
          var label = getFiberLabel(componentName, isMounted, phase);
          var markName = getFiberMarkName(label, debugID);
          endMark(label, markName, warning$$1);
        };
        var shouldIgnoreFiber = function (fiber) {
          switch (fiber.tag) {
            case HostRoot:
            case HostComponent:
            case HostText:
            case HostPortal:
            case Fragment:
            case ContextProvider:
            case ContextConsumer:
            case Mode:
              return true;
            default:
              return false;
          }
        };
        var clearPendingPhaseMeasurement = function () {
          if (currentPhase !== null && currentPhaseFiber !== null) {
            clearFiberMark(currentPhaseFiber, currentPhase);
          }
          currentPhaseFiber = null;
          currentPhase = null;
          hasScheduledUpdateInCurrentPhase = false;
        };
        var pauseTimers = function () {
          var fiber = currentFiber;
          while (fiber) {
            if (fiber._debugIsCurrentlyTiming) {
              endFiberMark(fiber, null, null);
            }
            fiber = fiber.return;
          }
        };
        var resumeTimersRecursively = function (fiber) {
          if (fiber.return !== null) {
            resumeTimersRecursively(fiber.return);
          }
          if (fiber._debugIsCurrentlyTiming) {
            beginFiberMark(fiber, null);
          }
        };
        var resumeTimers = function () {
          if (currentFiber !== null) {
            resumeTimersRecursively(currentFiber);
          }
        };
        function recordEffect() {
          if (enableUserTimingAPI) {
            effectCountInCurrentCommit++;
          }
        }
        function recordScheduleUpdate() {
          if (enableUserTimingAPI) {
            if (isCommitting) {
              hasScheduledUpdateInCurrentCommit = true;
            }
            if (currentPhase !== null && currentPhase !== 'componentWillMount' && currentPhase !== 'componentWillReceiveProps') {
              hasScheduledUpdateInCurrentPhase = true;
            }
          }
        }
        function startRequestCallbackTimer() {
          if (enableUserTimingAPI) {
            if (supportsUserTiming && !isWaitingForCallback) {
              isWaitingForCallback = true;
              beginMark('(Waiting for async callback...)');
            }
          }
        }
        function stopRequestCallbackTimer(didExpire, expirationTime) {
          if (enableUserTimingAPI) {
            if (supportsUserTiming) {
              isWaitingForCallback = false;
              var warning$$1 = didExpire ? 'React was blocked by main thread' : null;
              endMark('(Waiting for async callback... will force flush in ' + expirationTime + ' ms)', '(Waiting for async callback...)', warning$$1);
            }
          }
        }
        function startWorkTimer(fiber) {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
              return;
            }
            currentFiber = fiber;
            if (!beginFiberMark(fiber, null)) {
              return;
            }
            fiber._debugIsCurrentlyTiming = true;
          }
        }
        function cancelWorkTimer(fiber) {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
              return;
            }
            fiber._debugIsCurrentlyTiming = false;
            clearFiberMark(fiber, null);
          }
        }
        function stopWorkTimer(fiber) {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
              return;
            }
            currentFiber = fiber.return;
            if (!fiber._debugIsCurrentlyTiming) {
              return;
            }
            fiber._debugIsCurrentlyTiming = false;
            endFiberMark(fiber, null, null);
          }
        }
        function stopFailedWorkTimer(fiber) {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
              return;
            }
            currentFiber = fiber.return;
            if (!fiber._debugIsCurrentlyTiming) {
              return;
            }
            fiber._debugIsCurrentlyTiming = false;
            var warning$$1 = 'An error was thrown inside this error boundary';
            endFiberMark(fiber, null, warning$$1);
          }
        }
        function startPhaseTimer(fiber, phase) {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            clearPendingPhaseMeasurement();
            if (!beginFiberMark(fiber, phase)) {
              return;
            }
            currentPhaseFiber = fiber;
            currentPhase = phase;
          }
        }
        function stopPhaseTimer() {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            if (currentPhase !== null && currentPhaseFiber !== null) {
              var warning$$1 = hasScheduledUpdateInCurrentPhase ? 'Scheduled a cascading update' : null;
              endFiberMark(currentPhaseFiber, currentPhase, warning$$1);
            }
            currentPhase = null;
            currentPhaseFiber = null;
          }
        }
        function startWorkLoopTimer(nextUnitOfWork) {
          if (enableUserTimingAPI) {
            currentFiber = nextUnitOfWork;
            if (!supportsUserTiming) {
              return;
            }
            commitCountInCurrentWorkLoop = 0;
            beginMark('(React Tree Reconciliation)');
            resumeTimers();
          }
        }
        function stopWorkLoopTimer(interruptedBy, didCompleteRoot) {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            var warning$$1 = null;
            if (interruptedBy !== null) {
              if (interruptedBy.tag === HostRoot) {
                warning$$1 = 'A top-level update interrupted the previous render';
              } else {
                var componentName = getComponentName(interruptedBy) || 'Unknown';
                warning$$1 = 'An update to ' + componentName + ' interrupted the previous render';
              }
            } else if (commitCountInCurrentWorkLoop > 1) {
              warning$$1 = 'There were cascading updates';
            }
            commitCountInCurrentWorkLoop = 0;
            var label = didCompleteRoot ? '(React Tree Reconciliation: Completed Root)' : '(React Tree Reconciliation: Yielded)';
            pauseTimers();
            endMark(label, '(React Tree Reconciliation)', warning$$1);
          }
        }
        function startCommitTimer() {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            isCommitting = true;
            hasScheduledUpdateInCurrentCommit = false;
            labelsInCurrentCommit.clear();
            beginMark('(Committing Changes)');
          }
        }
        function stopCommitTimer() {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            var warning$$1 = null;
            if (hasScheduledUpdateInCurrentCommit) {
              warning$$1 = 'Lifecycle hook scheduled a cascading update';
            } else if (commitCountInCurrentWorkLoop > 0) {
              warning$$1 = 'Caused by a cascading update in earlier commit';
            }
            hasScheduledUpdateInCurrentCommit = false;
            commitCountInCurrentWorkLoop++;
            isCommitting = false;
            labelsInCurrentCommit.clear();
            endMark('(Committing Changes)', '(Committing Changes)', warning$$1);
          }
        }
        function startCommitSnapshotEffectsTimer() {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            effectCountInCurrentCommit = 0;
            beginMark('(Committing Snapshot Effects)');
          }
        }
        function stopCommitSnapshotEffectsTimer() {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            var count = effectCountInCurrentCommit;
            effectCountInCurrentCommit = 0;
            endMark('(Committing Snapshot Effects: ' + count + ' Total)', '(Committing Snapshot Effects)', null);
          }
        }
        function startCommitHostEffectsTimer() {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            effectCountInCurrentCommit = 0;
            beginMark('(Committing Host Effects)');
          }
        }
        function stopCommitHostEffectsTimer() {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            var count = effectCountInCurrentCommit;
            effectCountInCurrentCommit = 0;
            endMark('(Committing Host Effects: ' + count + ' Total)', '(Committing Host Effects)', null);
          }
        }
        function startCommitLifeCyclesTimer() {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            effectCountInCurrentCommit = 0;
            beginMark('(Calling Lifecycle Methods)');
          }
        }
        function stopCommitLifeCyclesTimer() {
          if (enableUserTimingAPI) {
            if (!supportsUserTiming) {
              return;
            }
            var count = effectCountInCurrentCommit;
            effectCountInCurrentCommit = 0;
            endMark('(Calling Lifecycle Methods: ' + count + ' Total)', '(Calling Lifecycle Methods)', null);
          }
        }
        var valueStack = [];
        var fiberStack = void 0;
        {
          fiberStack = [];
        }
        var index = -1;
        function createCursor(defaultValue) {
          return { current: defaultValue };
        }
        function pop(cursor, fiber) {
          if (index < 0) {
            {
              warning(false, 'Unexpected pop.');
            }
            return;
          }
          {
            if (fiber !== fiberStack[index]) {
              warning(false, 'Unexpected Fiber popped.');
            }
          }
          cursor.current = valueStack[index];
          valueStack[index] = null;
          {
            fiberStack[index] = null;
          }
          index--;
        }
        function push(cursor, value, fiber) {
          index++;
          valueStack[index] = cursor.current;
          {
            fiberStack[index] = fiber;
          }
          cursor.current = value;
        }
        function checkThatStackIsEmpty() {
          {
            if (index !== -1) {
              warning(false, 'Expected an empty stack. Something was not reset properly.');
            }
          }
        }
        function resetStackAfterFatalErrorInDev() {
          {
            index = -1;
            valueStack.length = 0;
            fiberStack.length = 0;
          }
        }
        var warnedAboutMissingGetChildContext = void 0;
        {
          warnedAboutMissingGetChildContext = {};
        }
        var contextStackCursor = createCursor(emptyObject);
        var didPerformWorkStackCursor = createCursor(false);
        var previousContext = emptyObject;
        function getUnmaskedContext(workInProgress) {
          var hasOwnContext = isContextProvider(workInProgress);
          if (hasOwnContext) {
            return previousContext;
          }
          return contextStackCursor.current;
        }
        function cacheContext(workInProgress, unmaskedContext, maskedContext) {
          var instance = workInProgress.stateNode;
          instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
          instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
        }
        function getMaskedContext(workInProgress, unmaskedContext) {
          var type = workInProgress.type;
          var contextTypes = type.contextTypes;
          if (!contextTypes) {
            return emptyObject;
          }
          var instance = workInProgress.stateNode;
          if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
            return instance.__reactInternalMemoizedMaskedChildContext;
          }
          var context = {};
          for (var key in contextTypes) {
            context[key] = unmaskedContext[key];
          }
          {
            var name = getComponentName(workInProgress) || 'Unknown';
            checkPropTypes(contextTypes, context, 'context', name, ReactDebugCurrentFiber.getCurrentFiberStackAddendum);
          }
          if (instance) {
            cacheContext(workInProgress, unmaskedContext, context);
          }
          return context;
        }
        function hasContextChanged() {
          return didPerformWorkStackCursor.current;
        }
        function isContextConsumer(fiber) {
          return fiber.tag === ClassComponent && fiber.type.contextTypes != null;
        }
        function isContextProvider(fiber) {
          return fiber.tag === ClassComponent && fiber.type.childContextTypes != null;
        }
        function popContextProvider(fiber) {
          if (!isContextProvider(fiber)) {
            return;
          }
          pop(didPerformWorkStackCursor, fiber);
          pop(contextStackCursor, fiber);
        }
        function popTopLevelContextObject(fiber) {
          pop(didPerformWorkStackCursor, fiber);
          pop(contextStackCursor, fiber);
        }
        function pushTopLevelContextObject(fiber, context, didChange) {
          !(contextStackCursor.current === emptyObject) ? invariant(false, 'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          push(contextStackCursor, context, fiber);
          push(didPerformWorkStackCursor, didChange, fiber);
        }
        function processChildContext(fiber, parentContext) {
          var instance = fiber.stateNode;
          var childContextTypes = fiber.type.childContextTypes;
          if (typeof instance.getChildContext !== 'function') {
            {
              var componentName = getComponentName(fiber) || 'Unknown';
              if (!warnedAboutMissingGetChildContext[componentName]) {
                warnedAboutMissingGetChildContext[componentName] = true;
                warning(false, '%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
              }
            }
            return parentContext;
          }
          var childContext = void 0;
          {
            ReactDebugCurrentFiber.setCurrentPhase('getChildContext');
          }
          startPhaseTimer(fiber, 'getChildContext');
          childContext = instance.getChildContext();
          stopPhaseTimer();
          {
            ReactDebugCurrentFiber.setCurrentPhase(null);
          }
          for (var contextKey in childContext) {
            !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(fiber) || 'Unknown', contextKey) : void 0;
          }
          {
            var name = getComponentName(fiber) || 'Unknown';
            checkPropTypes(childContextTypes, childContext, 'child context', name, ReactDebugCurrentFiber.getCurrentFiberStackAddendum);
          }
          return _assign({}, parentContext, childContext);
        }
        function pushContextProvider(workInProgress) {
          if (!isContextProvider(workInProgress)) {
            return false;
          }
          var instance = workInProgress.stateNode;
          var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyObject;
          previousContext = contextStackCursor.current;
          push(contextStackCursor, memoizedMergedChildContext, workInProgress);
          push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);
          return true;
        }
        function invalidateContextProvider(workInProgress, didChange) {
          var instance = workInProgress.stateNode;
          !instance ? invariant(false, 'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          if (didChange) {
            var mergedContext = processChildContext(workInProgress, previousContext);
            instance.__reactInternalMemoizedMergedChildContext = mergedContext;
            pop(didPerformWorkStackCursor, workInProgress);
            pop(contextStackCursor, workInProgress);
            push(contextStackCursor, mergedContext, workInProgress);
            push(didPerformWorkStackCursor, didChange, workInProgress);
          } else {
            pop(didPerformWorkStackCursor, workInProgress);
            push(didPerformWorkStackCursor, didChange, workInProgress);
          }
        }
        function findCurrentUnmaskedContext(fiber) {
          !(isFiberMounted(fiber) && fiber.tag === ClassComponent) ? invariant(false, 'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          var node = fiber;
          while (node.tag !== HostRoot) {
            if (isContextProvider(node)) {
              return node.stateNode.__reactInternalMemoizedMergedChildContext;
            }
            var parent = node.return;
            !parent ? invariant(false, 'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
            node = parent;
          }
          return node.stateNode.context;
        }
        var MAX_SIGNED_31_BIT_INT = 1073741823;
        var NoWork = 0;
        var Sync = 1;
        var Never = MAX_SIGNED_31_BIT_INT;
        var UNIT_SIZE = 10;
        var MAGIC_NUMBER_OFFSET = 2;
        function msToExpirationTime(ms) {
          return (ms / UNIT_SIZE | 0) + MAGIC_NUMBER_OFFSET;
        }
        function expirationTimeToMs(expirationTime) {
          return (expirationTime - MAGIC_NUMBER_OFFSET) * UNIT_SIZE;
        }
        function ceiling(num, precision) {
          return ((num / precision | 0) + 1) * precision;
        }
        function computeExpirationBucket(currentTime, expirationInMs, bucketSizeMs) {
          return MAGIC_NUMBER_OFFSET + ceiling(currentTime - MAGIC_NUMBER_OFFSET + expirationInMs / UNIT_SIZE, bucketSizeMs / UNIT_SIZE);
        }
        var NoContext = 0;
        var AsyncMode = 1;
        var StrictMode = 2;
        var ProfileMode = 4;
        var hasBadMapPolyfill = void 0;
        {
          hasBadMapPolyfill = false;
          try {
            var nonExtensibleObject = Object.preventExtensions({});
            var testMap = new Map([[nonExtensibleObject, null]]);
            var testSet = new Set([nonExtensibleObject]);
            testMap.set(0, 0);
            testSet.add(0);
          } catch (e) {
            hasBadMapPolyfill = true;
          }
        }
        var debugCounter = void 0;
        {
          debugCounter = 1;
        }
        function FiberNode(tag, pendingProps, key, mode) {
          this.tag = tag;
          this.key = key;
          this.type = null;
          this.stateNode = null;
          this.return = null;
          this.child = null;
          this.sibling = null;
          this.index = 0;
          this.ref = null;
          this.pendingProps = pendingProps;
          this.memoizedProps = null;
          this.updateQueue = null;
          this.memoizedState = null;
          this.mode = mode;
          this.effectTag = NoEffect;
          this.nextEffect = null;
          this.firstEffect = null;
          this.lastEffect = null;
          this.expirationTime = NoWork;
          this.alternate = null;
          if (enableProfilerTimer) {
            this.selfBaseTime = 0;
            this.treeBaseTime = 0;
          }
          {
            this._debugID = debugCounter++;
            this._debugSource = null;
            this._debugOwner = null;
            this._debugIsCurrentlyTiming = false;
            if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
              Object.preventExtensions(this);
            }
          }
        }
        var createFiber = function (tag, pendingProps, key, mode) {
          return new FiberNode(tag, pendingProps, key, mode);
        };
        function shouldConstruct(Component) {
          return !!(Component.prototype && Component.prototype.isReactComponent);
        }
        function createWorkInProgress(current, pendingProps, expirationTime) {
          var workInProgress = current.alternate;
          if (workInProgress === null) {
            workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);
            workInProgress.type = current.type;
            workInProgress.stateNode = current.stateNode;
            {
              workInProgress._debugID = current._debugID;
              workInProgress._debugSource = current._debugSource;
              workInProgress._debugOwner = current._debugOwner;
            }
            workInProgress.alternate = current;
            current.alternate = workInProgress;
          } else {
            workInProgress.pendingProps = pendingProps;
            workInProgress.effectTag = NoEffect;
            workInProgress.nextEffect = null;
            workInProgress.firstEffect = null;
            workInProgress.lastEffect = null;
          }
          workInProgress.expirationTime = expirationTime;
          workInProgress.child = current.child;
          workInProgress.memoizedProps = current.memoizedProps;
          workInProgress.memoizedState = current.memoizedState;
          workInProgress.updateQueue = current.updateQueue;
          workInProgress.sibling = current.sibling;
          workInProgress.index = current.index;
          workInProgress.ref = current.ref;
          if (enableProfilerTimer) {
            workInProgress.selfBaseTime = current.selfBaseTime;
            workInProgress.treeBaseTime = current.treeBaseTime;
          }
          return workInProgress;
        }
        function createHostRootFiber(isAsync) {
          var mode = isAsync ? AsyncMode | StrictMode : NoContext;
          return createFiber(HostRoot, null, null, mode);
        }
        function createFiberFromElement(element, mode, expirationTime) {
          var owner = null;
          {
            owner = element._owner;
          }
          var fiber = void 0;
          var type = element.type;
          var key = element.key;
          var pendingProps = element.props;
          var fiberTag = void 0;
          if (typeof type === 'function') {
            fiberTag = shouldConstruct(type) ? ClassComponent : IndeterminateComponent;
          } else if (typeof type === 'string') {
            fiberTag = HostComponent;
          } else {
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return createFiberFromFragment(pendingProps.children, mode, expirationTime, key);
              case REACT_ASYNC_MODE_TYPE:
                fiberTag = Mode;
                mode |= AsyncMode | StrictMode;
                break;
              case REACT_STRICT_MODE_TYPE:
                fiberTag = Mode;
                mode |= StrictMode;
                break;
              case REACT_PROFILER_TYPE:
                return createFiberFromProfiler(pendingProps, mode, expirationTime, key);
              case REACT_TIMEOUT_TYPE:
                fiberTag = TimeoutComponent;
                mode |= StrictMode;
                break;
              default:
                fiberTag = getFiberTagFromObjectType(type, owner);
                break;
            }
          }
          fiber = createFiber(fiberTag, pendingProps, key, mode);
          fiber.type = type;
          fiber.expirationTime = expirationTime;
          {
            fiber._debugSource = element._source;
            fiber._debugOwner = element._owner;
          }
          return fiber;
        }
        function getFiberTagFromObjectType(type, owner) {
          var $$typeof = typeof type === 'object' && type !== null ? type.$$typeof : null;
          switch ($$typeof) {
            case REACT_PROVIDER_TYPE:
              return ContextProvider;
            case REACT_CONTEXT_TYPE:
              return ContextConsumer;
            case REACT_FORWARD_REF_TYPE:
              return ForwardRef;
            default:
              {
                var info = '';
                {
                  if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                    info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
                  }
                  var ownerName = owner ? getComponentName(owner) : null;
                  if (ownerName) {
                    info += '\n\nCheck the render method of `' + ownerName + '`.';
                  }
                }
                invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', type == null ? type : typeof type, info);
              }
          }
        }
        function createFiberFromFragment(elements, mode, expirationTime, key) {
          var fiber = createFiber(Fragment, elements, key, mode);
          fiber.expirationTime = expirationTime;
          return fiber;
        }
        function createFiberFromProfiler(pendingProps, mode, expirationTime, key) {
          {
            if (typeof pendingProps.id !== 'string' || typeof pendingProps.onRender !== 'function') {
              invariant(false, 'Profiler must specify an "id" string and "onRender" function as props');
            }
          }
          var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
          fiber.type = REACT_PROFILER_TYPE;
          fiber.expirationTime = expirationTime;
          if (enableProfilerTimer) {
            fiber.stateNode = {
              elapsedPauseTimeAtStart: 0,
              duration: 0,
              startTime: 0
            };
          }
          return fiber;
        }
        function createFiberFromText(content, mode, expirationTime) {
          var fiber = createFiber(HostText, content, null, mode);
          fiber.expirationTime = expirationTime;
          return fiber;
        }
        function createFiberFromHostInstanceForDeletion() {
          var fiber = createFiber(HostComponent, null, null, NoContext);
          fiber.type = 'DELETED';
          return fiber;
        }
        function createFiberFromPortal(portal, mode, expirationTime) {
          var pendingProps = portal.children !== null ? portal.children : [];
          var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
          fiber.expirationTime = expirationTime;
          fiber.stateNode = {
            containerInfo: portal.containerInfo,
            pendingChildren: null,
            implementation: portal.implementation
          };
          return fiber;
        }
        function assignFiberPropertiesInDEV(target, source) {
          if (target === null) {
            target = createFiber(IndeterminateComponent, null, null, NoContext);
          }
          target.tag = source.tag;
          target.key = source.key;
          target.type = source.type;
          target.stateNode = source.stateNode;
          target.return = source.return;
          target.child = source.child;
          target.sibling = source.sibling;
          target.index = source.index;
          target.ref = source.ref;
          target.pendingProps = source.pendingProps;
          target.memoizedProps = source.memoizedProps;
          target.updateQueue = source.updateQueue;
          target.memoizedState = source.memoizedState;
          target.mode = source.mode;
          target.effectTag = source.effectTag;
          target.nextEffect = source.nextEffect;
          target.firstEffect = source.firstEffect;
          target.lastEffect = source.lastEffect;
          target.expirationTime = source.expirationTime;
          target.alternate = source.alternate;
          if (enableProfilerTimer) {
            target.selfBaseTime = source.selfBaseTime;
            target.treeBaseTime = source.treeBaseTime;
          }
          target._debugID = source._debugID;
          target._debugSource = source._debugSource;
          target._debugOwner = source._debugOwner;
          target._debugIsCurrentlyTiming = source._debugIsCurrentlyTiming;
          return target;
        }
        function createFiberRoot(containerInfo, isAsync, hydrate) {
          var uninitializedFiber = createHostRootFiber(isAsync);
          var root = {
            current: uninitializedFiber,
            containerInfo: containerInfo,
            pendingChildren: null,
            earliestPendingTime: NoWork,
            latestPendingTime: NoWork,
            earliestSuspendedTime: NoWork,
            latestSuspendedTime: NoWork,
            latestPingedTime: NoWork,
            pendingCommitExpirationTime: NoWork,
            finishedWork: null,
            context: null,
            pendingContext: null,
            hydrate: hydrate,
            remainingExpirationTime: NoWork,
            firstBatch: null,
            nextScheduledRoot: null
          };
          uninitializedFiber.stateNode = root;
          return root;
        }
        var onCommitFiberRoot = null;
        var onCommitFiberUnmount = null;
        var hasLoggedError = false;
        function catchErrors(fn) {
          return function (arg) {
            try {
              return fn(arg);
            } catch (err) {
              if (true && !hasLoggedError) {
                hasLoggedError = true;
                warning(false, 'React DevTools encountered an error: %s', err);
              }
            }
          };
        }
        function injectInternals(internals) {
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
            return false;
          }
          var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (hook.isDisabled) {
            return true;
          }
          if (!hook.supportsFiber) {
            {
              warning(false, 'The installed version of React DevTools is too old and will not work ' + 'with the current version of React. Please update React DevTools. ' + 'https://fb.me/react-devtools');
            }
            return true;
          }
          try {
            var rendererID = hook.inject(internals);
            onCommitFiberRoot = catchErrors(function (root) {
              return hook.onCommitFiberRoot(rendererID, root);
            });
            onCommitFiberUnmount = catchErrors(function (fiber) {
              return hook.onCommitFiberUnmount(rendererID, fiber);
            });
          } catch (err) {
            {
              warning(false, 'React DevTools encountered an error: %s.', err);
            }
          }
          return true;
        }
        function onCommitRoot(root) {
          if (typeof onCommitFiberRoot === 'function') {
            onCommitFiberRoot(root);
          }
        }
        function onCommitUnmount(fiber) {
          if (typeof onCommitFiberUnmount === 'function') {
            onCommitFiberUnmount(fiber);
          }
        }
        var lowPriorityWarning = function () {};
        {
          var printWarning = function (format) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            var argIndex = 0;
            var message = 'Warning: ' + format.replace(/%s/g, function () {
              return args[argIndex++];
            });
            if (typeof console !== 'undefined') {
              console.warn(message);
            }
            try {
              throw new Error(message);
            } catch (x) {}
          };
          lowPriorityWarning = function (condition, format) {
            if (format === undefined) {
              throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
            }
            if (!condition) {
              for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
              }
              printWarning.apply(undefined, [format].concat(args));
            }
          };
        }
        var lowPriorityWarning$1 = lowPriorityWarning;
        var ReactStrictModeWarnings = {
          discardPendingWarnings: function () {},
          flushPendingDeprecationWarnings: function () {},
          flushPendingUnsafeLifecycleWarnings: function () {},
          recordDeprecationWarnings: function (fiber, instance) {},
          recordUnsafeLifecycleWarnings: function (fiber, instance) {},
          recordLegacyContextWarning: function (fiber, instance) {},
          flushLegacyContextWarning: function () {}
        };
        {
          var LIFECYCLE_SUGGESTIONS = {
            UNSAFE_componentWillMount: 'componentDidMount',
            UNSAFE_componentWillReceiveProps: 'static getDerivedStateFromProps',
            UNSAFE_componentWillUpdate: 'componentDidUpdate'
          };
          var pendingComponentWillMountWarnings = [];
          var pendingComponentWillReceivePropsWarnings = [];
          var pendingComponentWillUpdateWarnings = [];
          var pendingUnsafeLifecycleWarnings = new Map();
          var pendingLegacyContextWarning = new Map();
          var didWarnAboutDeprecatedLifecycles = new Set();
          var didWarnAboutUnsafeLifecycles = new Set();
          var didWarnAboutLegacyContext = new Set();
          var setToSortedString = function (set) {
            var array = [];
            set.forEach(function (value) {
              array.push(value);
            });
            return array.sort().join(', ');
          };
          ReactStrictModeWarnings.discardPendingWarnings = function () {
            pendingComponentWillMountWarnings = [];
            pendingComponentWillReceivePropsWarnings = [];
            pendingComponentWillUpdateWarnings = [];
            pendingUnsafeLifecycleWarnings = new Map();
            pendingLegacyContextWarning = new Map();
          };
          ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function () {
            pendingUnsafeLifecycleWarnings.forEach(function (lifecycleWarningsMap, strictRoot) {
              var lifecyclesWarningMesages = [];
              Object.keys(lifecycleWarningsMap).forEach(function (lifecycle) {
                var lifecycleWarnings = lifecycleWarningsMap[lifecycle];
                if (lifecycleWarnings.length > 0) {
                  var componentNames = new Set();
                  lifecycleWarnings.forEach(function (fiber) {
                    componentNames.add(getComponentName(fiber) || 'Component');
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                  });
                  var formatted = lifecycle.replace('UNSAFE_', '');
                  var suggestion = LIFECYCLE_SUGGESTIONS[lifecycle];
                  var sortedComponentNames = setToSortedString(componentNames);
                  lifecyclesWarningMesages.push(formatted + ': Please update the following components to use ' + (suggestion + ' instead: ' + sortedComponentNames));
                }
              });
              if (lifecyclesWarningMesages.length > 0) {
                var strictRootComponentStack = getStackAddendumByWorkInProgressFiber(strictRoot);
                warning(false, 'Unsafe lifecycle methods were found within a strict-mode tree:%s' + '\n\n%s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-strict-mode-warnings', strictRootComponentStack, lifecyclesWarningMesages.join('\n\n'));
              }
            });
            pendingUnsafeLifecycleWarnings = new Map();
          };
          var findStrictRoot = function (fiber) {
            var maybeStrictRoot = null;
            var node = fiber;
            while (node !== null) {
              if (node.mode & StrictMode) {
                maybeStrictRoot = node;
              }
              node = node.return;
            }
            return maybeStrictRoot;
          };
          ReactStrictModeWarnings.flushPendingDeprecationWarnings = function () {
            if (pendingComponentWillMountWarnings.length > 0) {
              var uniqueNames = new Set();
              pendingComponentWillMountWarnings.forEach(function (fiber) {
                uniqueNames.add(getComponentName(fiber) || 'Component');
                didWarnAboutDeprecatedLifecycles.add(fiber.type);
              });
              var sortedNames = setToSortedString(uniqueNames);
              lowPriorityWarning$1(false, 'componentWillMount is deprecated and will be removed in the next major version. ' + 'Use componentDidMount instead. As a temporary workaround, ' + 'you can rename to UNSAFE_componentWillMount.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', sortedNames);
              pendingComponentWillMountWarnings = [];
            }
            if (pendingComponentWillReceivePropsWarnings.length > 0) {
              var _uniqueNames = new Set();
              pendingComponentWillReceivePropsWarnings.forEach(function (fiber) {
                _uniqueNames.add(getComponentName(fiber) || 'Component');
                didWarnAboutDeprecatedLifecycles.add(fiber.type);
              });
              var _sortedNames = setToSortedString(_uniqueNames);
              lowPriorityWarning$1(false, 'componentWillReceiveProps is deprecated and will be removed in the next major version. ' + 'Use static getDerivedStateFromProps instead.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', _sortedNames);
              pendingComponentWillReceivePropsWarnings = [];
            }
            if (pendingComponentWillUpdateWarnings.length > 0) {
              var _uniqueNames2 = new Set();
              pendingComponentWillUpdateWarnings.forEach(function (fiber) {
                _uniqueNames2.add(getComponentName(fiber) || 'Component');
                didWarnAboutDeprecatedLifecycles.add(fiber.type);
              });
              var _sortedNames2 = setToSortedString(_uniqueNames2);
              lowPriorityWarning$1(false, 'componentWillUpdate is deprecated and will be removed in the next major version. ' + 'Use componentDidUpdate instead. As a temporary workaround, ' + 'you can rename to UNSAFE_componentWillUpdate.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', _sortedNames2);
              pendingComponentWillUpdateWarnings = [];
            }
          };
          ReactStrictModeWarnings.recordDeprecationWarnings = function (fiber, instance) {
            if (didWarnAboutDeprecatedLifecycles.has(fiber.type)) {
              return;
            }
            if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
              pendingComponentWillMountWarnings.push(fiber);
            }
            if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
              pendingComponentWillReceivePropsWarnings.push(fiber);
            }
            if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
              pendingComponentWillUpdateWarnings.push(fiber);
            }
          };
          ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (fiber, instance) {
            var strictRoot = findStrictRoot(fiber);
            if (strictRoot === null) {
              warning(false, 'Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');
              return;
            }
            if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
              return;
            }
            var warningsForRoot = void 0;
            if (!pendingUnsafeLifecycleWarnings.has(strictRoot)) {
              warningsForRoot = {
                UNSAFE_componentWillMount: [],
                UNSAFE_componentWillReceiveProps: [],
                UNSAFE_componentWillUpdate: []
              };
              pendingUnsafeLifecycleWarnings.set(strictRoot, warningsForRoot);
            } else {
              warningsForRoot = pendingUnsafeLifecycleWarnings.get(strictRoot);
            }
            var unsafeLifecycles = [];
            if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillMount === 'function') {
              unsafeLifecycles.push('UNSAFE_componentWillMount');
            }
            if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
              unsafeLifecycles.push('UNSAFE_componentWillReceiveProps');
            }
            if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillUpdate === 'function') {
              unsafeLifecycles.push('UNSAFE_componentWillUpdate');
            }
            if (unsafeLifecycles.length > 0) {
              unsafeLifecycles.forEach(function (lifecycle) {
                warningsForRoot[lifecycle].push(fiber);
              });
            }
          };
          ReactStrictModeWarnings.recordLegacyContextWarning = function (fiber, instance) {
            var strictRoot = findStrictRoot(fiber);
            if (strictRoot === null) {
              warning(false, 'Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');
              return;
            }
            if (didWarnAboutLegacyContext.has(fiber.type)) {
              return;
            }
            var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);
            if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === 'function') {
              if (warningsForRoot === undefined) {
                warningsForRoot = [];
                pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
              }
              warningsForRoot.push(fiber);
            }
          };
          ReactStrictModeWarnings.flushLegacyContextWarning = function () {
            pendingLegacyContextWarning.forEach(function (fiberArray, strictRoot) {
              var uniqueNames = new Set();
              fiberArray.forEach(function (fiber) {
                uniqueNames.add(getComponentName(fiber) || 'Component');
                didWarnAboutLegacyContext.add(fiber.type);
              });
              var sortedNames = setToSortedString(uniqueNames);
              var strictRootComponentStack = getStackAddendumByWorkInProgressFiber(strictRoot);
              warning(false, 'Legacy context API has been detected within a strict-mode tree: %s' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-strict-mode-warnings', strictRootComponentStack, sortedNames);
            });
          };
        }
        var ReactFiberInstrumentation = { debugTool: null };
        var ReactFiberInstrumentation_1 = ReactFiberInstrumentation;
        function markPendingPriorityLevel(root, expirationTime) {
          if (enableSuspense) {
            var earliestPendingTime = root.earliestPendingTime;
            if (earliestPendingTime === NoWork) {
              root.earliestPendingTime = root.latestPendingTime = expirationTime;
            } else {
              if (earliestPendingTime > expirationTime) {
                root.earliestPendingTime = expirationTime;
              } else {
                var latestPendingTime = root.latestPendingTime;
                if (latestPendingTime < expirationTime) {
                  root.latestPendingTime = expirationTime;
                }
              }
            }
          }
        }
        function markCommittedPriorityLevels(root, currentTime, earliestRemainingTime) {
          if (enableSuspense) {
            if (earliestRemainingTime === NoWork) {
              root.earliestPendingTime = NoWork;
              root.latestPendingTime = NoWork;
              root.earliestSuspendedTime = NoWork;
              root.latestSuspendedTime = NoWork;
              root.latestPingedTime = NoWork;
              return;
            }
            var latestPendingTime = root.latestPendingTime;
            if (latestPendingTime !== NoWork) {
              if (latestPendingTime < earliestRemainingTime) {
                root.earliestPendingTime = root.latestPendingTime = NoWork;
              } else {
                var earliestPendingTime = root.earliestPendingTime;
                if (earliestPendingTime < earliestRemainingTime) {
                  root.earliestPendingTime = root.latestPendingTime;
                }
              }
            }
            var earliestSuspendedTime = root.earliestSuspendedTime;
            if (earliestSuspendedTime === NoWork) {
              markPendingPriorityLevel(root, earliestRemainingTime);
              return;
            }
            var latestSuspendedTime = root.latestSuspendedTime;
            if (earliestRemainingTime > latestSuspendedTime) {
              root.earliestSuspendedTime = NoWork;
              root.latestSuspendedTime = NoWork;
              root.latestPingedTime = NoWork;
              markPendingPriorityLevel(root, earliestRemainingTime);
              return;
            }
            if (earliestRemainingTime < earliestSuspendedTime) {
              markPendingPriorityLevel(root, earliestRemainingTime);
              return;
            }
          }
        }
        function markSuspendedPriorityLevel(root, suspendedTime) {
          if (enableSuspense) {
            var earliestPendingTime = root.earliestPendingTime;
            var latestPendingTime = root.latestPendingTime;
            if (earliestPendingTime === suspendedTime) {
              if (latestPendingTime === suspendedTime) {
                root.earliestPendingTime = root.latestPendingTime = NoWork;
              } else {
                root.earliestPendingTime = latestPendingTime;
              }
            } else if (latestPendingTime === suspendedTime) {
              root.latestPendingTime = earliestPendingTime;
            }
            var latestSuspendedTime = root.latestSuspendedTime;
            if (latestSuspendedTime === suspendedTime) {
              root.latestPingedTime = NoWork;
            }
            var earliestSuspendedTime = root.earliestSuspendedTime;
            if (earliestSuspendedTime === NoWork) {
              root.earliestSuspendedTime = root.latestSuspendedTime = suspendedTime;
            } else {
              if (earliestSuspendedTime > suspendedTime) {
                root.earliestSuspendedTime = suspendedTime;
              } else if (latestSuspendedTime < suspendedTime) {
                root.latestSuspendedTime = suspendedTime;
              }
            }
          }
        }
        function markPingedPriorityLevel(root, pingedTime) {
          if (enableSuspense) {
            var latestSuspendedTime = root.latestSuspendedTime;
            if (latestSuspendedTime !== NoWork && latestSuspendedTime <= pingedTime) {
              var latestPingedTime = root.latestPingedTime;
              if (latestPingedTime === NoWork || latestPingedTime < pingedTime) {
                root.latestPingedTime = pingedTime;
              }
            }
          }
        }
        function findNextPendingPriorityLevel(root) {
          if (enableSuspense) {
            var earliestSuspendedTime = root.earliestSuspendedTime;
            var earliestPendingTime = root.earliestPendingTime;
            if (earliestSuspendedTime === NoWork) {
              return earliestPendingTime;
            }
            if (earliestPendingTime !== NoWork) {
              return earliestPendingTime;
            }
            return root.latestPingedTime;
          } else {
            return root.current.expirationTime;
          }
        }
        var UpdateState = 0;
        var ReplaceState = 1;
        var ForceUpdate = 2;
        var CaptureUpdate = 3;
        var hasForceUpdate = false;
        var didWarnUpdateInsideUpdate = void 0;
        var currentlyProcessingQueue = void 0;
        var resetCurrentlyProcessingQueue = void 0;
        {
          didWarnUpdateInsideUpdate = false;
          currentlyProcessingQueue = null;
          resetCurrentlyProcessingQueue = function () {
            currentlyProcessingQueue = null;
          };
        }
        function createUpdateQueue(baseState) {
          var queue = {
            expirationTime: NoWork,
            baseState: baseState,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
          };
          return queue;
        }
        function cloneUpdateQueue(currentQueue) {
          var queue = {
            expirationTime: currentQueue.expirationTime,
            baseState: currentQueue.baseState,
            firstUpdate: currentQueue.firstUpdate,
            lastUpdate: currentQueue.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
          };
          return queue;
        }
        function createUpdate(expirationTime) {
          return {
            expirationTime: expirationTime,
            tag: UpdateState,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
          };
        }
        function appendUpdateToQueue(queue, update, expirationTime) {
          if (queue.lastUpdate === null) {
            queue.firstUpdate = queue.lastUpdate = update;
          } else {
            queue.lastUpdate.next = update;
            queue.lastUpdate = update;
          }
          if (queue.expirationTime === NoWork || queue.expirationTime > expirationTime) {
            queue.expirationTime = expirationTime;
          }
        }
        function enqueueUpdate(fiber, update, expirationTime) {
          var alternate = fiber.alternate;
          var queue1 = void 0;
          var queue2 = void 0;
          if (alternate === null) {
            queue1 = fiber.updateQueue;
            queue2 = null;
            if (queue1 === null) {
              queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
            }
          } else {
            queue1 = fiber.updateQueue;
            queue2 = alternate.updateQueue;
            if (queue1 === null) {
              if (queue2 === null) {
                queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
                queue2 = alternate.updateQueue = createUpdateQueue(alternate.memoizedState);
              } else {
                queue1 = fiber.updateQueue = cloneUpdateQueue(queue2);
              }
            } else {
              if (queue2 === null) {
                queue2 = alternate.updateQueue = cloneUpdateQueue(queue1);
              } else {}
            }
          }
          if (queue2 === null || queue1 === queue2) {
            appendUpdateToQueue(queue1, update, expirationTime);
          } else {
            if (queue1.lastUpdate === null || queue2.lastUpdate === null) {
              appendUpdateToQueue(queue1, update, expirationTime);
              appendUpdateToQueue(queue2, update, expirationTime);
            } else {
              appendUpdateToQueue(queue1, update, expirationTime);
              queue2.lastUpdate = update;
            }
          }
          {
            if (fiber.tag === ClassComponent && (currentlyProcessingQueue === queue1 || queue2 !== null && currentlyProcessingQueue === queue2) && !didWarnUpdateInsideUpdate) {
              warning(false, 'An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');
              didWarnUpdateInsideUpdate = true;
            }
          }
        }
        function enqueueCapturedUpdate(workInProgress, update, renderExpirationTime) {
          var workInProgressQueue = workInProgress.updateQueue;
          if (workInProgressQueue === null) {
            workInProgressQueue = workInProgress.updateQueue = createUpdateQueue(workInProgress.memoizedState);
          } else {
            workInProgressQueue = ensureWorkInProgressQueueIsAClone(workInProgress, workInProgressQueue);
          }
          if (workInProgressQueue.lastCapturedUpdate === null) {
            workInProgressQueue.firstCapturedUpdate = workInProgressQueue.lastCapturedUpdate = update;
          } else {
            workInProgressQueue.lastCapturedUpdate.next = update;
            workInProgressQueue.lastCapturedUpdate = update;
          }
          if (workInProgressQueue.expirationTime === NoWork || workInProgressQueue.expirationTime > renderExpirationTime) {
            workInProgressQueue.expirationTime = renderExpirationTime;
          }
        }
        function ensureWorkInProgressQueueIsAClone(workInProgress, queue) {
          var current = workInProgress.alternate;
          if (current !== null) {
            if (queue === current.updateQueue) {
              queue = workInProgress.updateQueue = cloneUpdateQueue(queue);
            }
          }
          return queue;
        }
        function getStateFromUpdate(workInProgress, queue, update, prevState, nextProps, instance) {
          switch (update.tag) {
            case ReplaceState:
              {
                var _payload = update.payload;
                if (typeof _payload === 'function') {
                  {
                    if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
                      _payload.call(instance, prevState, nextProps);
                    }
                  }
                  return _payload.call(instance, prevState, nextProps);
                }
                return _payload;
              }
            case CaptureUpdate:
              {
                workInProgress.effectTag = workInProgress.effectTag & ~ShouldCapture | DidCapture;
              }
            case UpdateState:
              {
                var _payload2 = update.payload;
                var partialState = void 0;
                if (typeof _payload2 === 'function') {
                  {
                    if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
                      _payload2.call(instance, prevState, nextProps);
                    }
                  }
                  partialState = _payload2.call(instance, prevState, nextProps);
                } else {
                  partialState = _payload2;
                }
                if (partialState === null || partialState === undefined) {
                  return prevState;
                }
                return _assign({}, prevState, partialState);
              }
            case ForceUpdate:
              {
                hasForceUpdate = true;
                return prevState;
              }
          }
          return prevState;
        }
        function processUpdateQueue(workInProgress, queue, props, instance, renderExpirationTime) {
          hasForceUpdate = false;
          if (queue.expirationTime === NoWork || queue.expirationTime > renderExpirationTime) {
            return;
          }
          queue = ensureWorkInProgressQueueIsAClone(workInProgress, queue);
          {
            currentlyProcessingQueue = queue;
          }
          var newBaseState = queue.baseState;
          var newFirstUpdate = null;
          var newExpirationTime = NoWork;
          var update = queue.firstUpdate;
          var resultState = newBaseState;
          while (update !== null) {
            var updateExpirationTime = update.expirationTime;
            if (updateExpirationTime > renderExpirationTime) {
              if (newFirstUpdate === null) {
                newFirstUpdate = update;
                newBaseState = resultState;
              }
              if (newExpirationTime === NoWork || newExpirationTime > updateExpirationTime) {
                newExpirationTime = updateExpirationTime;
              }
            } else {
              resultState = getStateFromUpdate(workInProgress, queue, update, resultState, props, instance);
              var _callback = update.callback;
              if (_callback !== null) {
                workInProgress.effectTag |= Callback;
                update.nextEffect = null;
                if (queue.lastEffect === null) {
                  queue.firstEffect = queue.lastEffect = update;
                } else {
                  queue.lastEffect.nextEffect = update;
                  queue.lastEffect = update;
                }
              }
            }
            update = update.next;
          }
          var newFirstCapturedUpdate = null;
          update = queue.firstCapturedUpdate;
          while (update !== null) {
            var _updateExpirationTime = update.expirationTime;
            if (_updateExpirationTime > renderExpirationTime) {
              if (newFirstCapturedUpdate === null) {
                newFirstCapturedUpdate = update;
                if (newFirstUpdate === null) {
                  newBaseState = resultState;
                }
              }
              if (newExpirationTime === NoWork || newExpirationTime > _updateExpirationTime) {
                newExpirationTime = _updateExpirationTime;
              }
            } else {
              resultState = getStateFromUpdate(workInProgress, queue, update, resultState, props, instance);
              var _callback2 = update.callback;
              if (_callback2 !== null) {
                workInProgress.effectTag |= Callback;
                update.nextEffect = null;
                if (queue.lastCapturedEffect === null) {
                  queue.firstCapturedEffect = queue.lastCapturedEffect = update;
                } else {
                  queue.lastCapturedEffect.nextEffect = update;
                  queue.lastCapturedEffect = update;
                }
              }
            }
            update = update.next;
          }
          if (newFirstUpdate === null) {
            queue.lastUpdate = null;
          }
          if (newFirstCapturedUpdate === null) {
            queue.lastCapturedUpdate = null;
          } else {
            workInProgress.effectTag |= Callback;
          }
          if (newFirstUpdate === null && newFirstCapturedUpdate === null) {
            newBaseState = resultState;
          }
          queue.baseState = newBaseState;
          queue.firstUpdate = newFirstUpdate;
          queue.firstCapturedUpdate = newFirstCapturedUpdate;
          queue.expirationTime = newExpirationTime;
          workInProgress.memoizedState = resultState;
          {
            currentlyProcessingQueue = null;
          }
        }
        function callCallback(callback, context) {
          !(typeof callback === 'function') ? invariant(false, 'Invalid argument passed as callback. Expected a function. Instead received: %s', callback) : void 0;
          callback.call(context);
        }
        function resetHasForceUpdateBeforeProcessing() {
          hasForceUpdate = false;
        }
        function checkHasForceUpdateAfterProcessing() {
          return hasForceUpdate;
        }
        function commitUpdateQueue(finishedWork, finishedQueue, instance, renderExpirationTime) {
          if (finishedQueue.firstCapturedUpdate !== null) {
            if (finishedQueue.lastUpdate !== null) {
              finishedQueue.lastUpdate.next = finishedQueue.firstCapturedUpdate;
              finishedQueue.lastUpdate = finishedQueue.lastCapturedUpdate;
            }
            finishedQueue.firstCapturedUpdate = finishedQueue.lastCapturedUpdate = null;
          }
          var effect = finishedQueue.firstEffect;
          finishedQueue.firstEffect = finishedQueue.lastEffect = null;
          while (effect !== null) {
            var _callback3 = effect.callback;
            if (_callback3 !== null) {
              effect.callback = null;
              callCallback(_callback3, instance);
            }
            effect = effect.nextEffect;
          }
          effect = finishedQueue.firstCapturedEffect;
          finishedQueue.firstCapturedEffect = finishedQueue.lastCapturedEffect = null;
          while (effect !== null) {
            var _callback4 = effect.callback;
            if (_callback4 !== null) {
              effect.callback = null;
              callCallback(_callback4, instance);
            }
            effect = effect.nextEffect;
          }
        }
        function createCapturedValue(value, source) {
          return {
            value: value,
            source: source,
            stack: getStackAddendumByWorkInProgressFiber(source)
          };
        }
        var providerCursor = createCursor(null);
        var valueCursor = createCursor(null);
        var changedBitsCursor = createCursor(0);
        var rendererSigil = void 0;
        {
          rendererSigil = {};
        }
        function pushProvider(providerFiber) {
          var context = providerFiber.type._context;
          if (isPrimaryRenderer) {
            push(changedBitsCursor, context._changedBits, providerFiber);
            push(valueCursor, context._currentValue, providerFiber);
            push(providerCursor, providerFiber, providerFiber);
            context._currentValue = providerFiber.pendingProps.value;
            context._changedBits = providerFiber.stateNode;
            {
              !(context._currentRenderer === undefined || context._currentRenderer === null || context._currentRenderer === rendererSigil) ? warning(false, 'Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.') : void 0;
              context._currentRenderer = rendererSigil;
            }
          } else {
            push(changedBitsCursor, context._changedBits2, providerFiber);
            push(valueCursor, context._currentValue2, providerFiber);
            push(providerCursor, providerFiber, providerFiber);
            context._currentValue2 = providerFiber.pendingProps.value;
            context._changedBits2 = providerFiber.stateNode;
            {
              !(context._currentRenderer2 === undefined || context._currentRenderer2 === null || context._currentRenderer2 === rendererSigil) ? warning(false, 'Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.') : void 0;
              context._currentRenderer2 = rendererSigil;
            }
          }
        }
        function popProvider(providerFiber) {
          var changedBits = changedBitsCursor.current;
          var currentValue = valueCursor.current;
          pop(providerCursor, providerFiber);
          pop(valueCursor, providerFiber);
          pop(changedBitsCursor, providerFiber);
          var context = providerFiber.type._context;
          if (isPrimaryRenderer) {
            context._currentValue = currentValue;
            context._changedBits = changedBits;
          } else {
            context._currentValue2 = currentValue;
            context._changedBits2 = changedBits;
          }
        }
        function getContextCurrentValue(context) {
          return isPrimaryRenderer ? context._currentValue : context._currentValue2;
        }
        function getContextChangedBits(context) {
          return isPrimaryRenderer ? context._changedBits : context._changedBits2;
        }
        var NO_CONTEXT = {};
        var contextStackCursor$1 = createCursor(NO_CONTEXT);
        var contextFiberStackCursor = createCursor(NO_CONTEXT);
        var rootInstanceStackCursor = createCursor(NO_CONTEXT);
        function requiredContext(c) {
          !(c !== NO_CONTEXT) ? invariant(false, 'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          return c;
        }
        function getRootHostContainer() {
          var rootInstance = requiredContext(rootInstanceStackCursor.current);
          return rootInstance;
        }
        function pushHostContainer(fiber, nextRootInstance) {
          push(rootInstanceStackCursor, nextRootInstance, fiber);
          push(contextFiberStackCursor, fiber, fiber);
          push(contextStackCursor$1, NO_CONTEXT, fiber);
          var nextRootContext = getRootHostContext(nextRootInstance);
          pop(contextStackCursor$1, fiber);
          push(contextStackCursor$1, nextRootContext, fiber);
        }
        function popHostContainer(fiber) {
          pop(contextStackCursor$1, fiber);
          pop(contextFiberStackCursor, fiber);
          pop(rootInstanceStackCursor, fiber);
        }
        function getHostContext() {
          var context = requiredContext(contextStackCursor$1.current);
          return context;
        }
        function pushHostContext(fiber) {
          var rootInstance = requiredContext(rootInstanceStackCursor.current);
          var context = requiredContext(contextStackCursor$1.current);
          var nextContext = getChildHostContext(context, fiber.type, rootInstance);
          if (context === nextContext) {
            return;
          }
          push(contextFiberStackCursor, fiber, fiber);
          push(contextStackCursor$1, nextContext, fiber);
        }
        function popHostContext(fiber) {
          if (contextFiberStackCursor.current !== fiber) {
            return;
          }
          pop(contextStackCursor$1, fiber);
          pop(contextFiberStackCursor, fiber);
        }
        var commitTime = 0;
        function getCommitTime() {
          return commitTime;
        }
        function recordCommitTime() {
          if (!enableProfilerTimer) {
            return;
          }
          commitTime = now();
        }
        var fiberStack$1 = void 0;
        {
          fiberStack$1 = [];
        }
        var timerPausedAt = 0;
        var totalElapsedPauseTime = 0;
        function checkActualRenderTimeStackEmpty() {
          if (!enableProfilerTimer) {
            return;
          }
          {
            !(fiberStack$1.length === 0) ? warning(false, 'Expected an empty stack. Something was not reset properly.') : void 0;
          }
        }
        function markActualRenderTimeStarted(fiber) {
          if (!enableProfilerTimer) {
            return;
          }
          {
            fiberStack$1.push(fiber);
          }
          var stateNode = fiber.stateNode;
          stateNode.elapsedPauseTimeAtStart = totalElapsedPauseTime;
          stateNode.startTime = now();
        }
        function pauseActualRenderTimerIfRunning() {
          if (!enableProfilerTimer) {
            return;
          }
          if (timerPausedAt === 0) {
            timerPausedAt = now();
          }
        }
        function recordElapsedActualRenderTime(fiber) {
          if (!enableProfilerTimer) {
            return;
          }
          {
            !(fiber === fiberStack$1.pop()) ? warning(false, 'Unexpected Fiber popped.') : void 0;
          }
          var stateNode = fiber.stateNode;
          stateNode.duration += now() - (totalElapsedPauseTime - stateNode.elapsedPauseTimeAtStart) - stateNode.startTime;
        }
        function resetActualRenderTimer() {
          if (!enableProfilerTimer) {
            return;
          }
          totalElapsedPauseTime = 0;
        }
        function resumeActualRenderTimerIfPaused() {
          if (!enableProfilerTimer) {
            return;
          }
          if (timerPausedAt > 0) {
            totalElapsedPauseTime += now() - timerPausedAt;
            timerPausedAt = 0;
          }
        }
        var baseStartTime = -1;
        function recordElapsedBaseRenderTimeIfRunning(fiber) {
          if (!enableProfilerTimer) {
            return;
          }
          if (baseStartTime !== -1) {
            fiber.selfBaseTime = now() - baseStartTime;
          }
        }
        function startBaseRenderTimer() {
          if (!enableProfilerTimer) {
            return;
          }
          {
            if (baseStartTime !== -1) {
              warning(false, 'Cannot start base timer that is already running. ' + 'This error is likely caused by a bug in React. ' + 'Please file an issue.');
            }
          }
          baseStartTime = now();
        }
        function stopBaseRenderTimerIfRunning() {
          if (!enableProfilerTimer) {
            return;
          }
          baseStartTime = -1;
        }
        var fakeInternalInstance = {};
        var isArray = Array.isArray;
        var didWarnAboutStateAssignmentForComponent = void 0;
        var didWarnAboutUninitializedState = void 0;
        var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = void 0;
        var didWarnAboutLegacyLifecyclesAndDerivedState = void 0;
        var didWarnAboutUndefinedDerivedState = void 0;
        var warnOnUndefinedDerivedState = void 0;
        var warnOnInvalidCallback$1 = void 0;
        {
          didWarnAboutStateAssignmentForComponent = new Set();
          didWarnAboutUninitializedState = new Set();
          didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
          didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
          didWarnAboutUndefinedDerivedState = new Set();
          var didWarnOnInvalidCallback = new Set();
          warnOnInvalidCallback$1 = function (callback, callerName) {
            if (callback === null || typeof callback === 'function') {
              return;
            }
            var key = callerName + '_' + callback;
            if (!didWarnOnInvalidCallback.has(key)) {
              didWarnOnInvalidCallback.add(key);
              warning(false, '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
            }
          };
          warnOnUndefinedDerivedState = function (workInProgress, partialState) {
            if (partialState === undefined) {
              var componentName = getComponentName(workInProgress) || 'Component';
              if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                didWarnAboutUndefinedDerivedState.add(componentName);
                warning(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
              }
            }
          };
          Object.defineProperty(fakeInternalInstance, '_processChildContext', {
            enumerable: false,
            value: function () {
              invariant(false, '_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn\'t supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).');
            }
          });
          Object.freeze(fakeInternalInstance);
        }
        function applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, nextProps) {
          var prevState = workInProgress.memoizedState;
          {
            if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
              getDerivedStateFromProps(nextProps, prevState);
            }
          }
          var partialState = getDerivedStateFromProps(nextProps, prevState);
          {
            warnOnUndefinedDerivedState(workInProgress, partialState);
          }
          var memoizedState = partialState === null || partialState === undefined ? prevState : _assign({}, prevState, partialState);
          workInProgress.memoizedState = memoizedState;
          var updateQueue = workInProgress.updateQueue;
          if (updateQueue !== null && updateQueue.expirationTime === NoWork) {
            updateQueue.baseState = memoizedState;
          }
        }
        var classComponentUpdater = {
          isMounted: isMounted,
          enqueueSetState: function (inst, payload, callback) {
            var fiber = get(inst);
            var currentTime = recalculateCurrentTime();
            var expirationTime = computeExpirationForFiber(currentTime, fiber);
            var update = createUpdate(expirationTime);
            update.payload = payload;
            if (callback !== undefined && callback !== null) {
              {
                warnOnInvalidCallback$1(callback, 'setState');
              }
              update.callback = callback;
            }
            enqueueUpdate(fiber, update, expirationTime);
            scheduleWork$1(fiber, expirationTime);
          },
          enqueueReplaceState: function (inst, payload, callback) {
            var fiber = get(inst);
            var currentTime = recalculateCurrentTime();
            var expirationTime = computeExpirationForFiber(currentTime, fiber);
            var update = createUpdate(expirationTime);
            update.tag = ReplaceState;
            update.payload = payload;
            if (callback !== undefined && callback !== null) {
              {
                warnOnInvalidCallback$1(callback, 'replaceState');
              }
              update.callback = callback;
            }
            enqueueUpdate(fiber, update, expirationTime);
            scheduleWork$1(fiber, expirationTime);
          },
          enqueueForceUpdate: function (inst, callback) {
            var fiber = get(inst);
            var currentTime = recalculateCurrentTime();
            var expirationTime = computeExpirationForFiber(currentTime, fiber);
            var update = createUpdate(expirationTime);
            update.tag = ForceUpdate;
            if (callback !== undefined && callback !== null) {
              {
                warnOnInvalidCallback$1(callback, 'forceUpdate');
              }
              update.callback = callback;
            }
            enqueueUpdate(fiber, update, expirationTime);
            scheduleWork$1(fiber, expirationTime);
          }
        };
        function checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext) {
          var instance = workInProgress.stateNode;
          var ctor = workInProgress.type;
          if (typeof instance.shouldComponentUpdate === 'function') {
            startPhaseTimer(workInProgress, 'shouldComponentUpdate');
            var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, newContext);
            stopPhaseTimer();
            {
              !(shouldUpdate !== undefined) ? warning(false, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName(workInProgress) || 'Component') : void 0;
            }
            return shouldUpdate;
          }
          if (ctor.prototype && ctor.prototype.isPureReactComponent) {
            return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
          }
          return true;
        }
        function checkClassInstance(workInProgress) {
          var instance = workInProgress.stateNode;
          var type = workInProgress.type;
          {
            var name = getComponentName(workInProgress) || 'Component';
            var renderPresent = instance.render;
            if (!renderPresent) {
              if (type.prototype && typeof type.prototype.render === 'function') {
                warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
              } else {
                warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
              }
            }
            var noGetInitialStateOnES6 = !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state;
            !noGetInitialStateOnES6 ? warning(false, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name) : void 0;
            var noGetDefaultPropsOnES6 = !instance.getDefaultProps || instance.getDefaultProps.isReactClassApproved;
            !noGetDefaultPropsOnES6 ? warning(false, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name) : void 0;
            var noInstancePropTypes = !instance.propTypes;
            !noInstancePropTypes ? warning(false, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name) : void 0;
            var noInstanceContextTypes = !instance.contextTypes;
            !noInstanceContextTypes ? warning(false, 'contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name) : void 0;
            var noComponentShouldUpdate = typeof instance.componentShouldUpdate !== 'function';
            !noComponentShouldUpdate ? warning(false, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name) : void 0;
            if (type.prototype && type.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
              warning(false, '%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentName(workInProgress) || 'A pure component');
            }
            var noComponentDidUnmount = typeof instance.componentDidUnmount !== 'function';
            !noComponentDidUnmount ? warning(false, '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name) : void 0;
            var noComponentDidReceiveProps = typeof instance.componentDidReceiveProps !== 'function';
            !noComponentDidReceiveProps ? warning(false, '%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name) : void 0;
            var noComponentWillRecieveProps = typeof instance.componentWillRecieveProps !== 'function';
            !noComponentWillRecieveProps ? warning(false, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name) : void 0;
            var noUnsafeComponentWillRecieveProps = typeof instance.UNSAFE_componentWillRecieveProps !== 'function';
            !noUnsafeComponentWillRecieveProps ? warning(false, '%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name) : void 0;
            var hasMutatedProps = instance.props !== workInProgress.pendingProps;
            !(instance.props === undefined || !hasMutatedProps) ? warning(false, '%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name) : void 0;
            var noInstanceDefaultProps = !instance.defaultProps;
            !noInstanceDefaultProps ? warning(false, 'Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name) : void 0;
            if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(type)) {
              didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(type);
              warning(false, '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentName(workInProgress));
            }
            var noInstanceGetDerivedStateFromProps = typeof instance.getDerivedStateFromProps !== 'function';
            !noInstanceGetDerivedStateFromProps ? warning(false, '%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name) : void 0;
            var noInstanceGetDerivedStateFromCatch = typeof instance.getDerivedStateFromCatch !== 'function';
            !noInstanceGetDerivedStateFromCatch ? warning(false, '%s: getDerivedStateFromCatch() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name) : void 0;
            var noStaticGetSnapshotBeforeUpdate = typeof type.getSnapshotBeforeUpdate !== 'function';
            !noStaticGetSnapshotBeforeUpdate ? warning(false, '%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name) : void 0;
            var _state = instance.state;
            if (_state && (typeof _state !== 'object' || isArray(_state))) {
              warning(false, '%s.state: must be set to an object or null', name);
            }
            if (typeof instance.getChildContext === 'function') {
              !(typeof type.childContextTypes === 'object') ? warning(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name) : void 0;
            }
          }
        }
        function adoptClassInstance(workInProgress, instance) {
          instance.updater = classComponentUpdater;
          workInProgress.stateNode = instance;
          set(instance, workInProgress);
          {
            instance._reactInternalInstance = fakeInternalInstance;
          }
        }
        function constructClassInstance(workInProgress, props, renderExpirationTime) {
          var ctor = workInProgress.type;
          var unmaskedContext = getUnmaskedContext(workInProgress);
          var needsContext = isContextConsumer(workInProgress);
          var context = needsContext ? getMaskedContext(workInProgress, unmaskedContext) : emptyObject;
          {
            if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
              new ctor(props, context);
            }
          }
          var instance = new ctor(props, context);
          var state = workInProgress.memoizedState = instance.state !== null && instance.state !== undefined ? instance.state : null;
          adoptClassInstance(workInProgress, instance);
          {
            if (typeof ctor.getDerivedStateFromProps === 'function' && state === null) {
              var componentName = getComponentName(workInProgress) || 'Component';
              if (!didWarnAboutUninitializedState.has(componentName)) {
                didWarnAboutUninitializedState.add(componentName);
                warning(false, '%s: Did not properly initialize state during construction. ' + 'Expected state to be an object, but it was %s.', componentName, instance.state === null ? 'null' : 'undefined');
              }
            }
            if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
              var foundWillMountName = null;
              var foundWillReceivePropsName = null;
              var foundWillUpdateName = null;
              if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                foundWillMountName = 'componentWillMount';
              } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
                foundWillMountName = 'UNSAFE_componentWillMount';
              }
              if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                foundWillReceivePropsName = 'componentWillReceiveProps';
              } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
                foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
              }
              if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                foundWillUpdateName = 'componentWillUpdate';
              } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
                foundWillUpdateName = 'UNSAFE_componentWillUpdate';
              }
              if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                var _componentName = getComponentName(workInProgress) || 'Component';
                var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
                if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                  didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                  warning(false, 'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks', _componentName, newApiName, foundWillMountName !== null ? '\n  ' + foundWillMountName : '', foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '', foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '');
                }
              }
            }
          }
          if (needsContext) {
            cacheContext(workInProgress, unmaskedContext, context);
          }
          return instance;
        }
        function callComponentWillMount(workInProgress, instance) {
          startPhaseTimer(workInProgress, 'componentWillMount');
          var oldState = instance.state;
          if (typeof instance.componentWillMount === 'function') {
            instance.componentWillMount();
          }
          if (typeof instance.UNSAFE_componentWillMount === 'function') {
            instance.UNSAFE_componentWillMount();
          }
          stopPhaseTimer();
          if (oldState !== instance.state) {
            {
              warning(false, '%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName(workInProgress) || 'Component');
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
          }
        }
        function callComponentWillReceiveProps(workInProgress, instance, newProps, newContext) {
          var oldState = instance.state;
          startPhaseTimer(workInProgress, 'componentWillReceiveProps');
          if (typeof instance.componentWillReceiveProps === 'function') {
            instance.componentWillReceiveProps(newProps, newContext);
          }
          if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
            instance.UNSAFE_componentWillReceiveProps(newProps, newContext);
          }
          stopPhaseTimer();
          if (instance.state !== oldState) {
            {
              var componentName = getComponentName(workInProgress) || 'Component';
              if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
                didWarnAboutStateAssignmentForComponent.add(componentName);
                warning(false, '%s.componentWillReceiveProps(): Assigning directly to ' + "this.state is deprecated (except inside a component's " + 'constructor). Use setState instead.', componentName);
              }
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
          }
        }
        function mountClassInstance(workInProgress, renderExpirationTime) {
          var ctor = workInProgress.type;
          {
            checkClassInstance(workInProgress);
          }
          var instance = workInProgress.stateNode;
          var props = workInProgress.pendingProps;
          var unmaskedContext = getUnmaskedContext(workInProgress);
          instance.props = props;
          instance.state = workInProgress.memoizedState;
          instance.refs = emptyObject;
          instance.context = getMaskedContext(workInProgress, unmaskedContext);
          {
            if (workInProgress.mode & StrictMode) {
              ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, instance);
              ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, instance);
            }
            if (warnAboutDeprecatedLifecycles) {
              ReactStrictModeWarnings.recordDeprecationWarnings(workInProgress, instance);
            }
          }
          var updateQueue = workInProgress.updateQueue;
          if (updateQueue !== null) {
            processUpdateQueue(workInProgress, updateQueue, props, instance, renderExpirationTime);
            instance.state = workInProgress.memoizedState;
          }
          var getDerivedStateFromProps = workInProgress.type.getDerivedStateFromProps;
          if (typeof getDerivedStateFromProps === 'function') {
            applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, props);
            instance.state = workInProgress.memoizedState;
          }
          if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
            callComponentWillMount(workInProgress, instance);
            updateQueue = workInProgress.updateQueue;
            if (updateQueue !== null) {
              processUpdateQueue(workInProgress, updateQueue, props, instance, renderExpirationTime);
              instance.state = workInProgress.memoizedState;
            }
          }
          if (typeof instance.componentDidMount === 'function') {
            workInProgress.effectTag |= Update;
          }
        }
        function resumeMountClassInstance(workInProgress, renderExpirationTime) {
          var ctor = workInProgress.type;
          var instance = workInProgress.stateNode;
          var oldProps = workInProgress.memoizedProps;
          var newProps = workInProgress.pendingProps;
          instance.props = oldProps;
          var oldContext = instance.context;
          var newUnmaskedContext = getUnmaskedContext(workInProgress);
          var newContext = getMaskedContext(workInProgress, newUnmaskedContext);
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function';
          if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
            if (oldProps !== newProps || oldContext !== newContext) {
              callComponentWillReceiveProps(workInProgress, instance, newProps, newContext);
            }
          }
          resetHasForceUpdateBeforeProcessing();
          var oldState = workInProgress.memoizedState;
          var newState = instance.state = oldState;
          var updateQueue = workInProgress.updateQueue;
          if (updateQueue !== null) {
            processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
            newState = workInProgress.memoizedState;
          }
          if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
            if (typeof instance.componentDidMount === 'function') {
              workInProgress.effectTag |= Update;
            }
            return false;
          }
          if (typeof getDerivedStateFromProps === 'function') {
            applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, newProps);
            newState = workInProgress.memoizedState;
          }
          var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);
          if (shouldUpdate) {
            if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
              startPhaseTimer(workInProgress, 'componentWillMount');
              if (typeof instance.componentWillMount === 'function') {
                instance.componentWillMount();
              }
              if (typeof instance.UNSAFE_componentWillMount === 'function') {
                instance.UNSAFE_componentWillMount();
              }
              stopPhaseTimer();
            }
            if (typeof instance.componentDidMount === 'function') {
              workInProgress.effectTag |= Update;
            }
          } else {
            if (typeof instance.componentDidMount === 'function') {
              workInProgress.effectTag |= Update;
            }
            workInProgress.memoizedProps = newProps;
            workInProgress.memoizedState = newState;
          }
          instance.props = newProps;
          instance.state = newState;
          instance.context = newContext;
          return shouldUpdate;
        }
        function updateClassInstance(current, workInProgress, renderExpirationTime) {
          var ctor = workInProgress.type;
          var instance = workInProgress.stateNode;
          var oldProps = workInProgress.memoizedProps;
          var newProps = workInProgress.pendingProps;
          instance.props = oldProps;
          var oldContext = instance.context;
          var newUnmaskedContext = getUnmaskedContext(workInProgress);
          var newContext = getMaskedContext(workInProgress, newUnmaskedContext);
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function';
          if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
            if (oldProps !== newProps || oldContext !== newContext) {
              callComponentWillReceiveProps(workInProgress, instance, newProps, newContext);
            }
          }
          resetHasForceUpdateBeforeProcessing();
          var oldState = workInProgress.memoizedState;
          var newState = instance.state = oldState;
          var updateQueue = workInProgress.updateQueue;
          if (updateQueue !== null) {
            processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
            newState = workInProgress.memoizedState;
          }
          if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
            if (typeof instance.componentDidUpdate === 'function') {
              if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
                workInProgress.effectTag |= Update;
              }
            }
            if (typeof instance.getSnapshotBeforeUpdate === 'function') {
              if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
                workInProgress.effectTag |= Snapshot;
              }
            }
            return false;
          }
          if (typeof getDerivedStateFromProps === 'function') {
            if (fireGetDerivedStateFromPropsOnStateUpdates || oldProps !== newProps) {
              applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, newProps);
              newState = workInProgress.memoizedState;
            }
          }
          var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);
          if (shouldUpdate) {
            if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === 'function' || typeof instance.componentWillUpdate === 'function')) {
              startPhaseTimer(workInProgress, 'componentWillUpdate');
              if (typeof instance.componentWillUpdate === 'function') {
                instance.componentWillUpdate(newProps, newState, newContext);
              }
              if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
                instance.UNSAFE_componentWillUpdate(newProps, newState, newContext);
              }
              stopPhaseTimer();
            }
            if (typeof instance.componentDidUpdate === 'function') {
              workInProgress.effectTag |= Update;
            }
            if (typeof instance.getSnapshotBeforeUpdate === 'function') {
              workInProgress.effectTag |= Snapshot;
            }
          } else {
            if (typeof instance.componentDidUpdate === 'function') {
              if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
                workInProgress.effectTag |= Update;
              }
            }
            if (typeof instance.getSnapshotBeforeUpdate === 'function') {
              if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
                workInProgress.effectTag |= Snapshot;
              }
            }
            workInProgress.memoizedProps = newProps;
            workInProgress.memoizedState = newState;
          }
          instance.props = newProps;
          instance.state = newState;
          instance.context = newContext;
          return shouldUpdate;
        }
        var getCurrentFiberStackAddendum$7 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;
        var didWarnAboutMaps = void 0;
        var didWarnAboutStringRefInStrictMode = void 0;
        var ownerHasKeyUseWarning = void 0;
        var ownerHasFunctionTypeWarning = void 0;
        var warnForMissingKey = function (child) {};
        {
          didWarnAboutMaps = false;
          didWarnAboutStringRefInStrictMode = {};
          ownerHasKeyUseWarning = {};
          ownerHasFunctionTypeWarning = {};
          warnForMissingKey = function (child) {
            if (child === null || typeof child !== 'object') {
              return;
            }
            if (!child._store || child._store.validated || child.key != null) {
              return;
            }
            !(typeof child._store === 'object') ? invariant(false, 'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.') : void 0;
            child._store.validated = true;
            var currentComponentErrorInfo = 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.' + (getCurrentFiberStackAddendum$7() || '');
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            warning(false, 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.%s', getCurrentFiberStackAddendum$7());
          };
        }
        var isArray$1 = Array.isArray;
        function coerceRef(returnFiber, current, element) {
          var mixedRef = element.ref;
          if (mixedRef !== null && typeof mixedRef !== 'function' && typeof mixedRef !== 'object') {
            {
              if (returnFiber.mode & StrictMode) {
                var componentName = getComponentName(returnFiber) || 'Component';
                if (!didWarnAboutStringRefInStrictMode[componentName]) {
                  warning(false, 'A string ref, "%s", has been found within a strict mode tree. ' + 'String refs are a source of potential bugs and should be avoided. ' + 'We recommend using createRef() instead.' + '\n%s' + '\n\nLearn more about using refs safely here:' + '\nhttps://fb.me/react-strict-mode-string-ref', mixedRef, getStackAddendumByWorkInProgressFiber(returnFiber));
                  didWarnAboutStringRefInStrictMode[componentName] = true;
                }
              }
            }
            if (element._owner) {
              var owner = element._owner;
              var inst = void 0;
              if (owner) {
                var ownerFiber = owner;
                !(ownerFiber.tag === ClassComponent) ? invariant(false, 'Stateless function components cannot have refs.') : void 0;
                inst = ownerFiber.stateNode;
              }
              !inst ? invariant(false, 'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.', mixedRef) : void 0;
              var stringRef = '' + mixedRef;
              if (current !== null && current.ref !== null && typeof current.ref === 'function' && current.ref._stringRef === stringRef) {
                return current.ref;
              }
              var ref = function (value) {
                var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
                if (value === null) {
                  delete refs[stringRef];
                } else {
                  refs[stringRef] = value;
                }
              };
              ref._stringRef = stringRef;
              return ref;
            } else {
              !(typeof mixedRef === 'string') ? invariant(false, 'Expected ref to be a function or a string.') : void 0;
              !element._owner ? invariant(false, 'Element ref was specified as a string (%s) but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a functional component\n2. You may be adding a ref to a component that was not created inside a component\'s render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information.', mixedRef) : void 0;
            }
          }
          return mixedRef;
        }
        function throwOnInvalidObjectType(returnFiber, newChild) {
          if (returnFiber.type !== 'textarea') {
            var addendum = '';
            {
              addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + (getCurrentFiberStackAddendum$7() || '');
            }
            invariant(false, 'Objects are not valid as a React child (found: %s).%s', Object.prototype.toString.call(newChild) === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : newChild, addendum);
          }
        }
        function warnOnFunctionType() {
          var currentComponentErrorInfo = 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.' + (getCurrentFiberStackAddendum$7() || '');
          if (ownerHasFunctionTypeWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasFunctionTypeWarning[currentComponentErrorInfo] = true;
          warning(false, 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.%s', getCurrentFiberStackAddendum$7() || '');
        }
        function ChildReconciler(shouldTrackSideEffects) {
          function deleteChild(returnFiber, childToDelete) {
            if (!shouldTrackSideEffects) {
              return;
            }
            var last = returnFiber.lastEffect;
            if (last !== null) {
              last.nextEffect = childToDelete;
              returnFiber.lastEffect = childToDelete;
            } else {
              returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
            }
            childToDelete.nextEffect = null;
            childToDelete.effectTag = Deletion;
          }
          function deleteRemainingChildren(returnFiber, currentFirstChild) {
            if (!shouldTrackSideEffects) {
              return null;
            }
            var childToDelete = currentFirstChild;
            while (childToDelete !== null) {
              deleteChild(returnFiber, childToDelete);
              childToDelete = childToDelete.sibling;
            }
            return null;
          }
          function mapRemainingChildren(returnFiber, currentFirstChild) {
            var existingChildren = new Map();
            var existingChild = currentFirstChild;
            while (existingChild !== null) {
              if (existingChild.key !== null) {
                existingChildren.set(existingChild.key, existingChild);
              } else {
                existingChildren.set(existingChild.index, existingChild);
              }
              existingChild = existingChild.sibling;
            }
            return existingChildren;
          }
          function useFiber(fiber, pendingProps, expirationTime) {
            var clone = createWorkInProgress(fiber, pendingProps, expirationTime);
            clone.index = 0;
            clone.sibling = null;
            return clone;
          }
          function placeChild(newFiber, lastPlacedIndex, newIndex) {
            newFiber.index = newIndex;
            if (!shouldTrackSideEffects) {
              return lastPlacedIndex;
            }
            var current = newFiber.alternate;
            if (current !== null) {
              var oldIndex = current.index;
              if (oldIndex < lastPlacedIndex) {
                newFiber.effectTag = Placement;
                return lastPlacedIndex;
              } else {
                return oldIndex;
              }
            } else {
              newFiber.effectTag = Placement;
              return lastPlacedIndex;
            }
          }
          function placeSingleChild(newFiber) {
            if (shouldTrackSideEffects && newFiber.alternate === null) {
              newFiber.effectTag = Placement;
            }
            return newFiber;
          }
          function updateTextNode(returnFiber, current, textContent, expirationTime) {
            if (current === null || current.tag !== HostText) {
              var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
              created.return = returnFiber;
              return created;
            } else {
              var existing = useFiber(current, textContent, expirationTime);
              existing.return = returnFiber;
              return existing;
            }
          }
          function updateElement(returnFiber, current, element, expirationTime) {
            if (current !== null && current.type === element.type) {
              var existing = useFiber(current, element.props, expirationTime);
              existing.ref = coerceRef(returnFiber, current, element);
              existing.return = returnFiber;
              {
                existing._debugSource = element._source;
                existing._debugOwner = element._owner;
              }
              return existing;
            } else {
              var created = createFiberFromElement(element, returnFiber.mode, expirationTime);
              created.ref = coerceRef(returnFiber, current, element);
              created.return = returnFiber;
              return created;
            }
          }
          function updatePortal(returnFiber, current, portal, expirationTime) {
            if (current === null || current.tag !== HostPortal || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) {
              var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
              created.return = returnFiber;
              return created;
            } else {
              var existing = useFiber(current, portal.children || [], expirationTime);
              existing.return = returnFiber;
              return existing;
            }
          }
          function updateFragment(returnFiber, current, fragment, expirationTime, key) {
            if (current === null || current.tag !== Fragment) {
              var created = createFiberFromFragment(fragment, returnFiber.mode, expirationTime, key);
              created.return = returnFiber;
              return created;
            } else {
              var existing = useFiber(current, fragment, expirationTime);
              existing.return = returnFiber;
              return existing;
            }
          }
          function createChild(returnFiber, newChild, expirationTime) {
            if (typeof newChild === 'string' || typeof newChild === 'number') {
              var created = createFiberFromText('' + newChild, returnFiber.mode, expirationTime);
              created.return = returnFiber;
              return created;
            }
            if (typeof newChild === 'object' && newChild !== null) {
              switch (newChild.$$typeof) {
                case REACT_ELEMENT_TYPE:
                  {
                    var _created = createFiberFromElement(newChild, returnFiber.mode, expirationTime);
                    _created.ref = coerceRef(returnFiber, null, newChild);
                    _created.return = returnFiber;
                    return _created;
                  }
                case REACT_PORTAL_TYPE:
                  {
                    var _created2 = createFiberFromPortal(newChild, returnFiber.mode, expirationTime);
                    _created2.return = returnFiber;
                    return _created2;
                  }
              }
              if (isArray$1(newChild) || getIteratorFn(newChild)) {
                var _created3 = createFiberFromFragment(newChild, returnFiber.mode, expirationTime, null);
                _created3.return = returnFiber;
                return _created3;
              }
              throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
              if (typeof newChild === 'function') {
                warnOnFunctionType();
              }
            }
            return null;
          }
          function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
            var key = oldFiber !== null ? oldFiber.key : null;
            if (typeof newChild === 'string' || typeof newChild === 'number') {
              if (key !== null) {
                return null;
              }
              return updateTextNode(returnFiber, oldFiber, '' + newChild, expirationTime);
            }
            if (typeof newChild === 'object' && newChild !== null) {
              switch (newChild.$$typeof) {
                case REACT_ELEMENT_TYPE:
                  {
                    if (newChild.key === key) {
                      if (newChild.type === REACT_FRAGMENT_TYPE) {
                        return updateFragment(returnFiber, oldFiber, newChild.props.children, expirationTime, key);
                      }
                      return updateElement(returnFiber, oldFiber, newChild, expirationTime);
                    } else {
                      return null;
                    }
                  }
                case REACT_PORTAL_TYPE:
                  {
                    if (newChild.key === key) {
                      return updatePortal(returnFiber, oldFiber, newChild, expirationTime);
                    } else {
                      return null;
                    }
                  }
              }
              if (isArray$1(newChild) || getIteratorFn(newChild)) {
                if (key !== null) {
                  return null;
                }
                return updateFragment(returnFiber, oldFiber, newChild, expirationTime, null);
              }
              throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
              if (typeof newChild === 'function') {
                warnOnFunctionType();
              }
            }
            return null;
          }
          function updateFromMap(existingChildren, returnFiber, newIdx, newChild, expirationTime) {
            if (typeof newChild === 'string' || typeof newChild === 'number') {
              var matchedFiber = existingChildren.get(newIdx) || null;
              return updateTextNode(returnFiber, matchedFiber, '' + newChild, expirationTime);
            }
            if (typeof newChild === 'object' && newChild !== null) {
              switch (newChild.$$typeof) {
                case REACT_ELEMENT_TYPE:
                  {
                    var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                    if (newChild.type === REACT_FRAGMENT_TYPE) {
                      return updateFragment(returnFiber, _matchedFiber, newChild.props.children, expirationTime, newChild.key);
                    }
                    return updateElement(returnFiber, _matchedFiber, newChild, expirationTime);
                  }
                case REACT_PORTAL_TYPE:
                  {
                    var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                    return updatePortal(returnFiber, _matchedFiber2, newChild, expirationTime);
                  }
              }
              if (isArray$1(newChild) || getIteratorFn(newChild)) {
                var _matchedFiber3 = existingChildren.get(newIdx) || null;
                return updateFragment(returnFiber, _matchedFiber3, newChild, expirationTime, null);
              }
              throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
              if (typeof newChild === 'function') {
                warnOnFunctionType();
              }
            }
            return null;
          }
          function warnOnInvalidKey(child, knownKeys) {
            {
              if (typeof child !== 'object' || child === null) {
                return knownKeys;
              }
              switch (child.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  warnForMissingKey(child);
                  var key = child.key;
                  if (typeof key !== 'string') {
                    break;
                  }
                  if (knownKeys === null) {
                    knownKeys = new Set();
                    knownKeys.add(key);
                    break;
                  }
                  if (!knownKeys.has(key)) {
                    knownKeys.add(key);
                    break;
                  }
                  warning(false, 'Encountered two children with the same key, `%s`. ' + 'Keys should be unique so that components maintain their identity ' + 'across updates. Non-unique keys may cause children to be ' + 'duplicated and/or omitted — the behavior is unsupported and ' + 'could change in a future version.%s', key, getCurrentFiberStackAddendum$7());
                  break;
                default:
                  break;
              }
            }
            return knownKeys;
          }
          function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, expirationTime) {
            {
              var knownKeys = null;
              for (var i = 0; i < newChildren.length; i++) {
                var child = newChildren[i];
                knownKeys = warnOnInvalidKey(child, knownKeys);
              }
            }
            var resultingFirstChild = null;
            var previousNewFiber = null;
            var oldFiber = currentFirstChild;
            var lastPlacedIndex = 0;
            var newIdx = 0;
            var nextOldFiber = null;
            for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
              if (oldFiber.index > newIdx) {
                nextOldFiber = oldFiber;
                oldFiber = null;
              } else {
                nextOldFiber = oldFiber.sibling;
              }
              var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], expirationTime);
              if (newFiber === null) {
                if (oldFiber === null) {
                  oldFiber = nextOldFiber;
                }
                break;
              }
              if (shouldTrackSideEffects) {
                if (oldFiber && newFiber.alternate === null) {
                  deleteChild(returnFiber, oldFiber);
                }
              }
              lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
              if (previousNewFiber === null) {
                resultingFirstChild = newFiber;
              } else {
                previousNewFiber.sibling = newFiber;
              }
              previousNewFiber = newFiber;
              oldFiber = nextOldFiber;
            }
            if (newIdx === newChildren.length) {
              deleteRemainingChildren(returnFiber, oldFiber);
              return resultingFirstChild;
            }
            if (oldFiber === null) {
              for (; newIdx < newChildren.length; newIdx++) {
                var _newFiber = createChild(returnFiber, newChildren[newIdx], expirationTime);
                if (!_newFiber) {
                  continue;
                }
                lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = _newFiber;
                } else {
                  previousNewFiber.sibling = _newFiber;
                }
                previousNewFiber = _newFiber;
              }
              return resultingFirstChild;
            }
            var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
            for (; newIdx < newChildren.length; newIdx++) {
              var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], expirationTime);
              if (_newFiber2) {
                if (shouldTrackSideEffects) {
                  if (_newFiber2.alternate !== null) {
                    existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
                  }
                }
                lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = _newFiber2;
                } else {
                  previousNewFiber.sibling = _newFiber2;
                }
                previousNewFiber = _newFiber2;
              }
            }
            if (shouldTrackSideEffects) {
              existingChildren.forEach(function (child) {
                return deleteChild(returnFiber, child);
              });
            }
            return resultingFirstChild;
          }
          function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, expirationTime) {
            var iteratorFn = getIteratorFn(newChildrenIterable);
            !(typeof iteratorFn === 'function') ? invariant(false, 'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.') : void 0;
            {
              if (newChildrenIterable.entries === iteratorFn) {
                !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getCurrentFiberStackAddendum$7()) : void 0;
                didWarnAboutMaps = true;
              }
              var _newChildren = iteratorFn.call(newChildrenIterable);
              if (_newChildren) {
                var knownKeys = null;
                var _step = _newChildren.next();
                for (; !_step.done; _step = _newChildren.next()) {
                  var child = _step.value;
                  knownKeys = warnOnInvalidKey(child, knownKeys);
                }
              }
            }
            var newChildren = iteratorFn.call(newChildrenIterable);
            !(newChildren != null) ? invariant(false, 'An iterable object provided no iterator.') : void 0;
            var resultingFirstChild = null;
            var previousNewFiber = null;
            var oldFiber = currentFirstChild;
            var lastPlacedIndex = 0;
            var newIdx = 0;
            var nextOldFiber = null;
            var step = newChildren.next();
            for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
              if (oldFiber.index > newIdx) {
                nextOldFiber = oldFiber;
                oldFiber = null;
              } else {
                nextOldFiber = oldFiber.sibling;
              }
              var newFiber = updateSlot(returnFiber, oldFiber, step.value, expirationTime);
              if (newFiber === null) {
                if (!oldFiber) {
                  oldFiber = nextOldFiber;
                }
                break;
              }
              if (shouldTrackSideEffects) {
                if (oldFiber && newFiber.alternate === null) {
                  deleteChild(returnFiber, oldFiber);
                }
              }
              lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
              if (previousNewFiber === null) {
                resultingFirstChild = newFiber;
              } else {
                previousNewFiber.sibling = newFiber;
              }
              previousNewFiber = newFiber;
              oldFiber = nextOldFiber;
            }
            if (step.done) {
              deleteRemainingChildren(returnFiber, oldFiber);
              return resultingFirstChild;
            }
            if (oldFiber === null) {
              for (; !step.done; newIdx++, step = newChildren.next()) {
                var _newFiber3 = createChild(returnFiber, step.value, expirationTime);
                if (_newFiber3 === null) {
                  continue;
                }
                lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = _newFiber3;
                } else {
                  previousNewFiber.sibling = _newFiber3;
                }
                previousNewFiber = _newFiber3;
              }
              return resultingFirstChild;
            }
            var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
            for (; !step.done; newIdx++, step = newChildren.next()) {
              var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, expirationTime);
              if (_newFiber4 !== null) {
                if (shouldTrackSideEffects) {
                  if (_newFiber4.alternate !== null) {
                    existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
                  }
                }
                lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = _newFiber4;
                } else {
                  previousNewFiber.sibling = _newFiber4;
                }
                previousNewFiber = _newFiber4;
              }
            }
            if (shouldTrackSideEffects) {
              existingChildren.forEach(function (child) {
                return deleteChild(returnFiber, child);
              });
            }
            return resultingFirstChild;
          }
          function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, expirationTime) {
            if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
              deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
              var existing = useFiber(currentFirstChild, textContent, expirationTime);
              existing.return = returnFiber;
              return existing;
            }
            deleteRemainingChildren(returnFiber, currentFirstChild);
            var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
            created.return = returnFiber;
            return created;
          }
          function reconcileSingleElement(returnFiber, currentFirstChild, element, expirationTime) {
            var key = element.key;
            var child = currentFirstChild;
            while (child !== null) {
              if (child.key === key) {
                if (child.tag === Fragment ? element.type === REACT_FRAGMENT_TYPE : child.type === element.type) {
                  deleteRemainingChildren(returnFiber, child.sibling);
                  var existing = useFiber(child, element.type === REACT_FRAGMENT_TYPE ? element.props.children : element.props, expirationTime);
                  existing.ref = coerceRef(returnFiber, child, element);
                  existing.return = returnFiber;
                  {
                    existing._debugSource = element._source;
                    existing._debugOwner = element._owner;
                  }
                  return existing;
                } else {
                  deleteRemainingChildren(returnFiber, child);
                  break;
                }
              } else {
                deleteChild(returnFiber, child);
              }
              child = child.sibling;
            }
            if (element.type === REACT_FRAGMENT_TYPE) {
              var created = createFiberFromFragment(element.props.children, returnFiber.mode, expirationTime, element.key);
              created.return = returnFiber;
              return created;
            } else {
              var _created4 = createFiberFromElement(element, returnFiber.mode, expirationTime);
              _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
              _created4.return = returnFiber;
              return _created4;
            }
          }
          function reconcileSinglePortal(returnFiber, currentFirstChild, portal, expirationTime) {
            var key = portal.key;
            var child = currentFirstChild;
            while (child !== null) {
              if (child.key === key) {
                if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
                  deleteRemainingChildren(returnFiber, child.sibling);
                  var existing = useFiber(child, portal.children || [], expirationTime);
                  existing.return = returnFiber;
                  return existing;
                } else {
                  deleteRemainingChildren(returnFiber, child);
                  break;
                }
              } else {
                deleteChild(returnFiber, child);
              }
              child = child.sibling;
            }
            var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
            created.return = returnFiber;
            return created;
          }
          function reconcileChildFibers(returnFiber, currentFirstChild, newChild, expirationTime) {
            if (typeof newChild === 'object' && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null) {
              newChild = newChild.props.children;
            }
            var isObject = typeof newChild === 'object' && newChild !== null;
            if (isObject) {
              switch (newChild.$$typeof) {
                case REACT_ELEMENT_TYPE:
                  return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, expirationTime));
                case REACT_PORTAL_TYPE:
                  return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, expirationTime));
              }
            }
            if (typeof newChild === 'string' || typeof newChild === 'number') {
              return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, expirationTime));
            }
            if (isArray$1(newChild)) {
              return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, expirationTime);
            }
            if (getIteratorFn(newChild)) {
              return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, expirationTime);
            }
            if (isObject) {
              throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
              if (typeof newChild === 'function') {
                warnOnFunctionType();
              }
            }
            if (typeof newChild === 'undefined') {
              switch (returnFiber.tag) {
                case ClassComponent:
                  {
                    {
                      var instance = returnFiber.stateNode;
                      if (instance.render._isMockFunction) {
                        break;
                      }
                    }
                  }
                case FunctionalComponent:
                  {
                    var Component = returnFiber.type;
                    invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', Component.displayName || Component.name || 'Component');
                  }
              }
            }
            return deleteRemainingChildren(returnFiber, currentFirstChild);
          }
          return reconcileChildFibers;
        }
        var reconcileChildFibers = ChildReconciler(true);
        var mountChildFibers = ChildReconciler(false);
        function cloneChildFibers(current, workInProgress) {
          !(current === null || workInProgress.child === current.child) ? invariant(false, 'Resuming work not yet implemented.') : void 0;
          if (workInProgress.child === null) {
            return;
          }
          var currentChild = workInProgress.child;
          var newChild = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
          workInProgress.child = newChild;
          newChild.return = workInProgress;
          while (currentChild.sibling !== null) {
            currentChild = currentChild.sibling;
            newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
            newChild.return = workInProgress;
          }
          newChild.sibling = null;
        }
        var hydrationParentFiber = null;
        var nextHydratableInstance = null;
        var isHydrating = false;
        function enterHydrationState(fiber) {
          if (!supportsHydration) {
            return false;
          }
          var parentInstance = fiber.stateNode.containerInfo;
          nextHydratableInstance = getFirstHydratableChild(parentInstance);
          hydrationParentFiber = fiber;
          isHydrating = true;
          return true;
        }
        function deleteHydratableInstance(returnFiber, instance) {
          {
            switch (returnFiber.tag) {
              case HostRoot:
                didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
                break;
              case HostComponent:
                didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
                break;
            }
          }
          var childToDelete = createFiberFromHostInstanceForDeletion();
          childToDelete.stateNode = instance;
          childToDelete.return = returnFiber;
          childToDelete.effectTag = Deletion;
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = childToDelete;
            returnFiber.lastEffect = childToDelete;
          } else {
            returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
          }
        }
        function insertNonHydratedInstance(returnFiber, fiber) {
          fiber.effectTag |= Placement;
          {
            switch (returnFiber.tag) {
              case HostRoot:
                {
                  var parentContainer = returnFiber.stateNode.containerInfo;
                  switch (fiber.tag) {
                    case HostComponent:
                      var type = fiber.type;
                      var props = fiber.pendingProps;
                      didNotFindHydratableContainerInstance(parentContainer, type, props);
                      break;
                    case HostText:
                      var text = fiber.pendingProps;
                      didNotFindHydratableContainerTextInstance(parentContainer, text);
                      break;
                  }
                  break;
                }
              case HostComponent:
                {
                  var parentType = returnFiber.type;
                  var parentProps = returnFiber.memoizedProps;
                  var parentInstance = returnFiber.stateNode;
                  switch (fiber.tag) {
                    case HostComponent:
                      var _type = fiber.type;
                      var _props = fiber.pendingProps;
                      didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
                      break;
                    case HostText:
                      var _text = fiber.pendingProps;
                      didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
                      break;
                  }
                  break;
                }
              default:
                return;
            }
          }
        }
        function tryHydrate(fiber, nextInstance) {
          switch (fiber.tag) {
            case HostComponent:
              {
                var type = fiber.type;
                var props = fiber.pendingProps;
                var instance = canHydrateInstance(nextInstance, type, props);
                if (instance !== null) {
                  fiber.stateNode = instance;
                  return true;
                }
                return false;
              }
            case HostText:
              {
                var text = fiber.pendingProps;
                var textInstance = canHydrateTextInstance(nextInstance, text);
                if (textInstance !== null) {
                  fiber.stateNode = textInstance;
                  return true;
                }
                return false;
              }
            default:
              return false;
          }
        }
        function tryToClaimNextHydratableInstance(fiber) {
          if (!isHydrating) {
            return;
          }
          var nextInstance = nextHydratableInstance;
          if (!nextInstance) {
            insertNonHydratedInstance(hydrationParentFiber, fiber);
            isHydrating = false;
            hydrationParentFiber = fiber;
            return;
          }
          var firstAttemptedInstance = nextInstance;
          if (!tryHydrate(fiber, nextInstance)) {
            nextInstance = getNextHydratableSibling(firstAttemptedInstance);
            if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
              insertNonHydratedInstance(hydrationParentFiber, fiber);
              isHydrating = false;
              hydrationParentFiber = fiber;
              return;
            }
            deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
          }
          hydrationParentFiber = fiber;
          nextHydratableInstance = getFirstHydratableChild(nextInstance);
        }
        function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
          if (!supportsHydration) {
            invariant(false, 'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
          }
          var instance = fiber.stateNode;
          var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber);
          fiber.updateQueue = updatePayload;
          if (updatePayload !== null) {
            return true;
          }
          return false;
        }
        function prepareToHydrateHostTextInstance(fiber) {
          if (!supportsHydration) {
            invariant(false, 'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
          }
          var textInstance = fiber.stateNode;
          var textContent = fiber.memoizedProps;
          var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
          {
            if (shouldUpdate) {
              var returnFiber = hydrationParentFiber;
              if (returnFiber !== null) {
                switch (returnFiber.tag) {
                  case HostRoot:
                    {
                      var parentContainer = returnFiber.stateNode.containerInfo;
                      didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
                      break;
                    }
                  case HostComponent:
                    {
                      var parentType = returnFiber.type;
                      var parentProps = returnFiber.memoizedProps;
                      var parentInstance = returnFiber.stateNode;
                      didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
                      break;
                    }
                }
              }
            }
          }
          return shouldUpdate;
        }
        function popToNextHostParent(fiber) {
          var parent = fiber.return;
          while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot) {
            parent = parent.return;
          }
          hydrationParentFiber = parent;
        }
        function popHydrationState(fiber) {
          if (!supportsHydration) {
            return false;
          }
          if (fiber !== hydrationParentFiber) {
            return false;
          }
          if (!isHydrating) {
            popToNextHostParent(fiber);
            isHydrating = true;
            return false;
          }
          var type = fiber.type;
          if (fiber.tag !== HostComponent || type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps)) {
            var nextInstance = nextHydratableInstance;
            while (nextInstance) {
              deleteHydratableInstance(fiber, nextInstance);
              nextInstance = getNextHydratableSibling(nextInstance);
            }
          }
          popToNextHostParent(fiber);
          nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
          return true;
        }
        function resetHydrationState() {
          if (!supportsHydration) {
            return;
          }
          hydrationParentFiber = null;
          nextHydratableInstance = null;
          isHydrating = false;
        }
        var getCurrentFiberStackAddendum$6 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;
        var didWarnAboutBadClass = void 0;
        var didWarnAboutGetDerivedStateOnFunctionalComponent = void 0;
        var didWarnAboutStatelessRefs = void 0;
        {
          didWarnAboutBadClass = {};
          didWarnAboutGetDerivedStateOnFunctionalComponent = {};
          didWarnAboutStatelessRefs = {};
        }
        function reconcileChildren(current, workInProgress, nextChildren) {
          reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, workInProgress.expirationTime);
        }
        function reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, renderExpirationTime) {
          if (current === null) {
            workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
          } else {
            workInProgress.child = reconcileChildFibers(workInProgress, current.child, nextChildren, renderExpirationTime);
          }
        }
        function updateForwardRef(current, workInProgress) {
          var render = workInProgress.type.render;
          var nextProps = workInProgress.pendingProps;
          var ref = workInProgress.ref;
          if (hasContextChanged()) {} else if (workInProgress.memoizedProps === nextProps) {
            var currentRef = current !== null ? current.ref : null;
            if (ref === currentRef) {
              return bailoutOnAlreadyFinishedWork(current, workInProgress);
            }
          }
          var nextChildren = void 0;
          {
            ReactCurrentOwner.current = workInProgress;
            ReactDebugCurrentFiber.setCurrentPhase('render');
            nextChildren = render(nextProps, ref);
            ReactDebugCurrentFiber.setCurrentPhase(null);
          }
          reconcileChildren(current, workInProgress, nextChildren);
          memoizeProps(workInProgress, nextProps);
          return workInProgress.child;
        }
        function updateFragment(current, workInProgress) {
          var nextChildren = workInProgress.pendingProps;
          if (hasContextChanged()) {} else if (workInProgress.memoizedProps === nextChildren) {
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          reconcileChildren(current, workInProgress, nextChildren);
          memoizeProps(workInProgress, nextChildren);
          return workInProgress.child;
        }
        function updateMode(current, workInProgress) {
          var nextChildren = workInProgress.pendingProps.children;
          if (hasContextChanged()) {} else if (nextChildren === null || workInProgress.memoizedProps === nextChildren) {
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          reconcileChildren(current, workInProgress, nextChildren);
          memoizeProps(workInProgress, nextChildren);
          return workInProgress.child;
        }
        function updateProfiler(current, workInProgress) {
          var nextProps = workInProgress.pendingProps;
          if (enableProfilerTimer) {
            markActualRenderTimeStarted(workInProgress);
            workInProgress.effectTag |= Update;
          }
          if (workInProgress.memoizedProps === nextProps) {
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          var nextChildren = nextProps.children;
          reconcileChildren(current, workInProgress, nextChildren);
          memoizeProps(workInProgress, nextProps);
          return workInProgress.child;
        }
        function markRef(current, workInProgress) {
          var ref = workInProgress.ref;
          if (current === null && ref !== null || current !== null && current.ref !== ref) {
            workInProgress.effectTag |= Ref;
          }
        }
        function updateFunctionalComponent(current, workInProgress) {
          var fn = workInProgress.type;
          var nextProps = workInProgress.pendingProps;
          if (hasContextChanged()) {} else {
            if (workInProgress.memoizedProps === nextProps) {
              return bailoutOnAlreadyFinishedWork(current, workInProgress);
            }
          }
          var unmaskedContext = getUnmaskedContext(workInProgress);
          var context = getMaskedContext(workInProgress, unmaskedContext);
          var nextChildren = void 0;
          {
            ReactCurrentOwner.current = workInProgress;
            ReactDebugCurrentFiber.setCurrentPhase('render');
            nextChildren = fn(nextProps, context);
            ReactDebugCurrentFiber.setCurrentPhase(null);
          }
          workInProgress.effectTag |= PerformedWork;
          reconcileChildren(current, workInProgress, nextChildren);
          memoizeProps(workInProgress, nextProps);
          return workInProgress.child;
        }
        function updateClassComponent(current, workInProgress, renderExpirationTime) {
          var hasContext = pushContextProvider(workInProgress);
          var shouldUpdate = void 0;
          if (current === null) {
            if (workInProgress.stateNode === null) {
              constructClassInstance(workInProgress, workInProgress.pendingProps, renderExpirationTime);
              mountClassInstance(workInProgress, renderExpirationTime);
              shouldUpdate = true;
            } else {
              shouldUpdate = resumeMountClassInstance(workInProgress, renderExpirationTime);
            }
          } else {
            shouldUpdate = updateClassInstance(current, workInProgress, renderExpirationTime);
          }
          return finishClassComponent(current, workInProgress, shouldUpdate, hasContext, renderExpirationTime);
        }
        function finishClassComponent(current, workInProgress, shouldUpdate, hasContext, renderExpirationTime) {
          markRef(current, workInProgress);
          var didCaptureError = (workInProgress.effectTag & DidCapture) !== NoEffect;
          if (!shouldUpdate && !didCaptureError) {
            if (hasContext) {
              invalidateContextProvider(workInProgress, false);
            }
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          var ctor = workInProgress.type;
          var instance = workInProgress.stateNode;
          ReactCurrentOwner.current = workInProgress;
          var nextChildren = void 0;
          if (didCaptureError && (!enableGetDerivedStateFromCatch || typeof ctor.getDerivedStateFromCatch !== 'function')) {
            nextChildren = null;
            if (enableProfilerTimer) {
              stopBaseRenderTimerIfRunning();
            }
          } else {
            {
              ReactDebugCurrentFiber.setCurrentPhase('render');
              nextChildren = instance.render();
              if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
                instance.render();
              }
              ReactDebugCurrentFiber.setCurrentPhase(null);
            }
          }
          workInProgress.effectTag |= PerformedWork;
          if (didCaptureError) {
            reconcileChildrenAtExpirationTime(current, workInProgress, null, renderExpirationTime);
            workInProgress.child = null;
          }
          reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, renderExpirationTime);
          memoizeState(workInProgress, instance.state);
          memoizeProps(workInProgress, instance.props);
          if (hasContext) {
            invalidateContextProvider(workInProgress, true);
          }
          return workInProgress.child;
        }
        function pushHostRootContext(workInProgress) {
          var root = workInProgress.stateNode;
          if (root.pendingContext) {
            pushTopLevelContextObject(workInProgress, root.pendingContext, root.pendingContext !== root.context);
          } else if (root.context) {
            pushTopLevelContextObject(workInProgress, root.context, false);
          }
          pushHostContainer(workInProgress, root.containerInfo);
        }
        function updateHostRoot(current, workInProgress, renderExpirationTime) {
          pushHostRootContext(workInProgress);
          var updateQueue = workInProgress.updateQueue;
          if (updateQueue !== null) {
            var nextProps = workInProgress.pendingProps;
            var prevState = workInProgress.memoizedState;
            var prevChildren = prevState !== null ? prevState.element : null;
            processUpdateQueue(workInProgress, updateQueue, nextProps, null, renderExpirationTime);
            var nextState = workInProgress.memoizedState;
            var nextChildren = nextState.element;
            if (nextChildren === prevChildren) {
              resetHydrationState();
              return bailoutOnAlreadyFinishedWork(current, workInProgress);
            }
            var root = workInProgress.stateNode;
            if ((current === null || current.child === null) && root.hydrate && enterHydrationState(workInProgress)) {
              workInProgress.effectTag |= Placement;
              workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
            } else {
              resetHydrationState();
              reconcileChildren(current, workInProgress, nextChildren);
            }
            return workInProgress.child;
          }
          resetHydrationState();
          return bailoutOnAlreadyFinishedWork(current, workInProgress);
        }
        function updateHostComponent(current, workInProgress, renderExpirationTime) {
          pushHostContext(workInProgress);
          if (current === null) {
            tryToClaimNextHydratableInstance(workInProgress);
          }
          var type = workInProgress.type;
          var memoizedProps = workInProgress.memoizedProps;
          var nextProps = workInProgress.pendingProps;
          var prevProps = current !== null ? current.memoizedProps : null;
          if (hasContextChanged()) {} else if (memoizedProps === nextProps) {
            var isHidden = workInProgress.mode & AsyncMode && shouldDeprioritizeSubtree(type, nextProps);
            if (isHidden) {
              workInProgress.expirationTime = Never;
            }
            if (!isHidden || renderExpirationTime !== Never) {
              return bailoutOnAlreadyFinishedWork(current, workInProgress);
            }
          }
          var nextChildren = nextProps.children;
          var isDirectTextChild = shouldSetTextContent(type, nextProps);
          if (isDirectTextChild) {
            nextChildren = null;
          } else if (prevProps && shouldSetTextContent(type, prevProps)) {
            workInProgress.effectTag |= ContentReset;
          }
          markRef(current, workInProgress);
          if (renderExpirationTime !== Never && workInProgress.mode & AsyncMode && shouldDeprioritizeSubtree(type, nextProps)) {
            workInProgress.expirationTime = Never;
            workInProgress.memoizedProps = nextProps;
            return null;
          }
          reconcileChildren(current, workInProgress, nextChildren);
          memoizeProps(workInProgress, nextProps);
          return workInProgress.child;
        }
        function updateHostText(current, workInProgress) {
          if (current === null) {
            tryToClaimNextHydratableInstance(workInProgress);
          }
          var nextProps = workInProgress.pendingProps;
          memoizeProps(workInProgress, nextProps);
          return null;
        }
        function mountIndeterminateComponent(current, workInProgress, renderExpirationTime) {
          !(current === null) ? invariant(false, 'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          var fn = workInProgress.type;
          var props = workInProgress.pendingProps;
          var unmaskedContext = getUnmaskedContext(workInProgress);
          var context = getMaskedContext(workInProgress, unmaskedContext);
          var value = void 0;
          {
            if (fn.prototype && typeof fn.prototype.render === 'function') {
              var componentName = getComponentName(workInProgress) || 'Unknown';
              if (!didWarnAboutBadClass[componentName]) {
                warning(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);
                didWarnAboutBadClass[componentName] = true;
              }
            }
            if (workInProgress.mode & StrictMode) {
              ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, null);
            }
            ReactCurrentOwner.current = workInProgress;
            value = fn(props, context);
          }
          workInProgress.effectTag |= PerformedWork;
          if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
            var Component = workInProgress.type;
            workInProgress.tag = ClassComponent;
            workInProgress.memoizedState = value.state !== null && value.state !== undefined ? value.state : null;
            var getDerivedStateFromProps = Component.getDerivedStateFromProps;
            if (typeof getDerivedStateFromProps === 'function') {
              applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, props);
            }
            var hasContext = pushContextProvider(workInProgress);
            adoptClassInstance(workInProgress, value);
            mountClassInstance(workInProgress, renderExpirationTime);
            return finishClassComponent(current, workInProgress, true, hasContext, renderExpirationTime);
          } else {
            workInProgress.tag = FunctionalComponent;
            {
              var _Component = workInProgress.type;
              if (_Component) {
                !!_Component.childContextTypes ? warning(false, '%s(...): childContextTypes cannot be defined on a functional component.', _Component.displayName || _Component.name || 'Component') : void 0;
              }
              if (workInProgress.ref !== null) {
                var info = '';
                var ownerName = ReactDebugCurrentFiber.getCurrentFiberOwnerName();
                if (ownerName) {
                  info += '\n\nCheck the render method of `' + ownerName + '`.';
                }
                var warningKey = ownerName || workInProgress._debugID || '';
                var debugSource = workInProgress._debugSource;
                if (debugSource) {
                  warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
                }
                if (!didWarnAboutStatelessRefs[warningKey]) {
                  didWarnAboutStatelessRefs[warningKey] = true;
                  warning(false, 'Stateless function components cannot be given refs. ' + 'Attempts to access this ref will fail.%s%s', info, ReactDebugCurrentFiber.getCurrentFiberStackAddendum());
                }
              }
              if (typeof fn.getDerivedStateFromProps === 'function') {
                var _componentName = getComponentName(workInProgress) || 'Unknown';
                if (!didWarnAboutGetDerivedStateOnFunctionalComponent[_componentName]) {
                  warning(false, '%s: Stateless functional components do not support getDerivedStateFromProps.', _componentName);
                  didWarnAboutGetDerivedStateOnFunctionalComponent[_componentName] = true;
                }
              }
            }
            reconcileChildren(current, workInProgress, value);
            memoizeProps(workInProgress, props);
            return workInProgress.child;
          }
        }
        function updateTimeoutComponent(current, workInProgress, renderExpirationTime) {
          if (enableSuspense) {
            var nextProps = workInProgress.pendingProps;
            var prevProps = workInProgress.memoizedProps;
            var prevDidTimeout = workInProgress.memoizedState;
            var alreadyCaptured = (workInProgress.effectTag & DidCapture) === NoEffect;
            var nextDidTimeout = !alreadyCaptured;
            if (hasContextChanged()) {} else if (nextProps === prevProps && nextDidTimeout === prevDidTimeout) {
              return bailoutOnAlreadyFinishedWork(current, workInProgress);
            }
            var render = nextProps.children;
            var nextChildren = render(nextDidTimeout);
            workInProgress.memoizedProps = nextProps;
            workInProgress.memoizedState = nextDidTimeout;
            reconcileChildren(current, workInProgress, nextChildren);
            return workInProgress.child;
          } else {
            return null;
          }
        }
        function updatePortalComponent(current, workInProgress, renderExpirationTime) {
          pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
          var nextChildren = workInProgress.pendingProps;
          if (hasContextChanged()) {} else if (workInProgress.memoizedProps === nextChildren) {
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          if (current === null) {
            workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
            memoizeProps(workInProgress, nextChildren);
          } else {
            reconcileChildren(current, workInProgress, nextChildren);
            memoizeProps(workInProgress, nextChildren);
          }
          return workInProgress.child;
        }
        function propagateContextChange(workInProgress, context, changedBits, renderExpirationTime) {
          var fiber = workInProgress.child;
          if (fiber !== null) {
            fiber.return = workInProgress;
          }
          while (fiber !== null) {
            var nextFiber = void 0;
            switch (fiber.tag) {
              case ContextConsumer:
                var observedBits = fiber.stateNode | 0;
                if (fiber.type === context && (observedBits & changedBits) !== 0) {
                  var node = fiber;
                  while (node !== null) {
                    var alternate = node.alternate;
                    if (node.expirationTime === NoWork || node.expirationTime > renderExpirationTime) {
                      node.expirationTime = renderExpirationTime;
                      if (alternate !== null && (alternate.expirationTime === NoWork || alternate.expirationTime > renderExpirationTime)) {
                        alternate.expirationTime = renderExpirationTime;
                      }
                    } else if (alternate !== null && (alternate.expirationTime === NoWork || alternate.expirationTime > renderExpirationTime)) {
                      alternate.expirationTime = renderExpirationTime;
                    } else {
                      break;
                    }
                    node = node.return;
                  }
                  nextFiber = null;
                } else {
                  nextFiber = fiber.child;
                }
                break;
              case ContextProvider:
                nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
                break;
              default:
                nextFiber = fiber.child;
                break;
            }
            if (nextFiber !== null) {
              nextFiber.return = fiber;
            } else {
              nextFiber = fiber;
              while (nextFiber !== null) {
                if (nextFiber === workInProgress) {
                  nextFiber = null;
                  break;
                }
                var sibling = nextFiber.sibling;
                if (sibling !== null) {
                  sibling.return = nextFiber.return;
                  nextFiber = sibling;
                  break;
                }
                nextFiber = nextFiber.return;
              }
            }
            fiber = nextFiber;
          }
        }
        function updateContextProvider(current, workInProgress, renderExpirationTime) {
          var providerType = workInProgress.type;
          var context = providerType._context;
          var newProps = workInProgress.pendingProps;
          var oldProps = workInProgress.memoizedProps;
          var canBailOnProps = true;
          if (hasContextChanged()) {
            canBailOnProps = false;
          } else if (oldProps === newProps) {
            workInProgress.stateNode = 0;
            pushProvider(workInProgress);
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          var newValue = newProps.value;
          workInProgress.memoizedProps = newProps;
          {
            var providerPropTypes = workInProgress.type.propTypes;
            if (providerPropTypes) {
              checkPropTypes(providerPropTypes, newProps, 'prop', 'Context.Provider', getCurrentFiberStackAddendum$6);
            }
          }
          var changedBits = void 0;
          if (oldProps === null) {
            changedBits = MAX_SIGNED_31_BIT_INT;
          } else {
            if (oldProps.value === newProps.value) {
              if (oldProps.children === newProps.children && canBailOnProps) {
                workInProgress.stateNode = 0;
                pushProvider(workInProgress);
                return bailoutOnAlreadyFinishedWork(current, workInProgress);
              }
              changedBits = 0;
            } else {
              var oldValue = oldProps.value;
              if (oldValue === newValue && (oldValue !== 0 || 1 / oldValue === 1 / newValue) || oldValue !== oldValue && newValue !== newValue) {
                if (oldProps.children === newProps.children && canBailOnProps) {
                  workInProgress.stateNode = 0;
                  pushProvider(workInProgress);
                  return bailoutOnAlreadyFinishedWork(current, workInProgress);
                }
                changedBits = 0;
              } else {
                changedBits = typeof context._calculateChangedBits === 'function' ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
                {
                  !((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits) ? warning(false, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits) : void 0;
                }
                changedBits |= 0;
                if (changedBits === 0) {
                  if (oldProps.children === newProps.children && canBailOnProps) {
                    workInProgress.stateNode = 0;
                    pushProvider(workInProgress);
                    return bailoutOnAlreadyFinishedWork(current, workInProgress);
                  }
                } else {
                  propagateContextChange(workInProgress, context, changedBits, renderExpirationTime);
                }
              }
            }
          }
          workInProgress.stateNode = changedBits;
          pushProvider(workInProgress);
          var newChildren = newProps.children;
          reconcileChildren(current, workInProgress, newChildren);
          return workInProgress.child;
        }
        function updateContextConsumer(current, workInProgress, renderExpirationTime) {
          var context = workInProgress.type;
          var newProps = workInProgress.pendingProps;
          var oldProps = workInProgress.memoizedProps;
          var newValue = getContextCurrentValue(context);
          var changedBits = getContextChangedBits(context);
          if (hasContextChanged()) {} else if (changedBits === 0 && oldProps === newProps) {
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          workInProgress.memoizedProps = newProps;
          var observedBits = newProps.unstable_observedBits;
          if (observedBits === undefined || observedBits === null) {
            observedBits = MAX_SIGNED_31_BIT_INT;
          }
          workInProgress.stateNode = observedBits;
          if ((changedBits & observedBits) !== 0) {
            propagateContextChange(workInProgress, context, changedBits, renderExpirationTime);
          } else if (oldProps === newProps) {
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          var render = newProps.children;
          {
            !(typeof render === 'function') ? warning(false, 'A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.') : void 0;
          }
          var newChildren = void 0;
          {
            ReactCurrentOwner.current = workInProgress;
            ReactDebugCurrentFiber.setCurrentPhase('render');
            newChildren = render(newValue);
            ReactDebugCurrentFiber.setCurrentPhase(null);
          }
          workInProgress.effectTag |= PerformedWork;
          reconcileChildren(current, workInProgress, newChildren);
          return workInProgress.child;
        }
        function bailoutOnAlreadyFinishedWork(current, workInProgress) {
          cancelWorkTimer(workInProgress);
          if (enableProfilerTimer) {
            stopBaseRenderTimerIfRunning();
          }
          cloneChildFibers(current, workInProgress);
          return workInProgress.child;
        }
        function bailoutOnLowPriority(current, workInProgress) {
          cancelWorkTimer(workInProgress);
          if (enableProfilerTimer) {
            stopBaseRenderTimerIfRunning();
          }
          switch (workInProgress.tag) {
            case HostRoot:
              pushHostRootContext(workInProgress);
              break;
            case ClassComponent:
              pushContextProvider(workInProgress);
              break;
            case HostPortal:
              pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
              break;
            case ContextProvider:
              pushProvider(workInProgress);
              break;
            case Profiler:
              if (enableProfilerTimer) {
                markActualRenderTimeStarted(workInProgress);
              }
              break;
          }
          return null;
        }
        function memoizeProps(workInProgress, nextProps) {
          workInProgress.memoizedProps = nextProps;
        }
        function memoizeState(workInProgress, nextState) {
          workInProgress.memoizedState = nextState;
        }
        function beginWork(current, workInProgress, renderExpirationTime) {
          if (workInProgress.expirationTime === NoWork || workInProgress.expirationTime > renderExpirationTime) {
            return bailoutOnLowPriority(current, workInProgress);
          }
          switch (workInProgress.tag) {
            case IndeterminateComponent:
              return mountIndeterminateComponent(current, workInProgress, renderExpirationTime);
            case FunctionalComponent:
              return updateFunctionalComponent(current, workInProgress);
            case ClassComponent:
              return updateClassComponent(current, workInProgress, renderExpirationTime);
            case HostRoot:
              return updateHostRoot(current, workInProgress, renderExpirationTime);
            case HostComponent:
              return updateHostComponent(current, workInProgress, renderExpirationTime);
            case HostText:
              return updateHostText(current, workInProgress);
            case TimeoutComponent:
              return updateTimeoutComponent(current, workInProgress, renderExpirationTime);
            case HostPortal:
              return updatePortalComponent(current, workInProgress, renderExpirationTime);
            case ForwardRef:
              return updateForwardRef(current, workInProgress);
            case Fragment:
              return updateFragment(current, workInProgress);
            case Mode:
              return updateMode(current, workInProgress);
            case Profiler:
              return updateProfiler(current, workInProgress);
            case ContextProvider:
              return updateContextProvider(current, workInProgress, renderExpirationTime);
            case ContextConsumer:
              return updateContextConsumer(current, workInProgress, renderExpirationTime);
            default:
              invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
          }
        }
        function markUpdate(workInProgress) {
          workInProgress.effectTag |= Update;
        }
        function markRef$1(workInProgress) {
          workInProgress.effectTag |= Ref;
        }
        function appendAllChildren(parent, workInProgress) {
          var node = workInProgress.child;
          while (node !== null) {
            if (node.tag === HostComponent || node.tag === HostText) {
              appendInitialChild(parent, node.stateNode);
            } else if (node.tag === HostPortal) {} else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === workInProgress) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === workInProgress) {
                return;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
        var updateHostContainer = void 0;
        var updateHostComponent$1 = void 0;
        var updateHostText$1 = void 0;
        if (supportsMutation) {
          updateHostContainer = function (workInProgress) {};
          updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
            workInProgress.updateQueue = updatePayload;
            if (updatePayload) {
              markUpdate(workInProgress);
            }
          };
          updateHostText$1 = function (current, workInProgress, oldText, newText) {
            if (oldText !== newText) {
              markUpdate(workInProgress);
            }
          };
        } else if (supportsPersistence) {
          var appendAllChildrenToContainer = function (containerChildSet, workInProgress) {
            var node = workInProgress.child;
            while (node !== null) {
              if (node.tag === HostComponent || node.tag === HostText) {
                appendChildToContainerChildSet(containerChildSet, node.stateNode);
              } else if (node.tag === HostPortal) {} else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === workInProgress) {
                return;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === workInProgress) {
                  return;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
          };
          updateHostContainer = function (workInProgress) {
            var portalOrRoot = workInProgress.stateNode;
            var childrenUnchanged = workInProgress.firstEffect === null;
            if (childrenUnchanged) {} else {
              var container = portalOrRoot.containerInfo;
              var newChildSet = createContainerChildSet(container);
              appendAllChildrenToContainer(newChildSet, workInProgress);
              portalOrRoot.pendingChildren = newChildSet;
              markUpdate(workInProgress);
              finalizeContainerChildren(container, newChildSet);
            }
          };
          updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
            var childrenUnchanged = workInProgress.firstEffect === null;
            var currentInstance = current.stateNode;
            if (childrenUnchanged && updatePayload === null) {
              workInProgress.stateNode = currentInstance;
            } else {
              var recyclableInstance = workInProgress.stateNode;
              var newInstance = cloneInstance(currentInstance, updatePayload, type, oldProps, newProps, workInProgress, childrenUnchanged, recyclableInstance);
              if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
                markUpdate(workInProgress);
              }
              workInProgress.stateNode = newInstance;
              if (childrenUnchanged) {
                markUpdate(workInProgress);
              } else {
                appendAllChildren(newInstance, workInProgress);
              }
            }
          };
          updateHostText$1 = function (current, workInProgress, oldText, newText) {
            if (oldText !== newText) {
              var rootContainerInstance = getRootHostContainer();
              var currentHostContext = getHostContext();
              workInProgress.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress);
              markUpdate(workInProgress);
            }
          };
        } else {
          updateHostContainer = function (workInProgress) {};
          updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {};
          updateHostText$1 = function (current, workInProgress, oldText, newText) {};
        }
        function completeWork(current, workInProgress, renderExpirationTime) {
          var newProps = workInProgress.pendingProps;
          switch (workInProgress.tag) {
            case FunctionalComponent:
              return null;
            case ClassComponent:
              {
                popContextProvider(workInProgress);
                return null;
              }
            case HostRoot:
              {
                popHostContainer(workInProgress);
                popTopLevelContextObject(workInProgress);
                var fiberRoot = workInProgress.stateNode;
                if (fiberRoot.pendingContext) {
                  fiberRoot.context = fiberRoot.pendingContext;
                  fiberRoot.pendingContext = null;
                }
                if (current === null || current.child === null) {
                  popHydrationState(workInProgress);
                  workInProgress.effectTag &= ~Placement;
                }
                updateHostContainer(workInProgress);
                return null;
              }
            case HostComponent:
              {
                popHostContext(workInProgress);
                var rootContainerInstance = getRootHostContainer();
                var type = workInProgress.type;
                if (current !== null && workInProgress.stateNode != null) {
                  var oldProps = current.memoizedProps;
                  var instance = workInProgress.stateNode;
                  var currentHostContext = getHostContext();
                  var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
                  updateHostComponent$1(current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext);
                  if (current.ref !== workInProgress.ref) {
                    markRef$1(workInProgress);
                  }
                } else {
                  if (!newProps) {
                    !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
                    return null;
                  }
                  var _currentHostContext = getHostContext();
                  var wasHydrated = popHydrationState(workInProgress);
                  if (wasHydrated) {
                    if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, _currentHostContext)) {
                      markUpdate(workInProgress);
                    }
                  } else {
                    var _instance = createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress);
                    appendAllChildren(_instance, workInProgress);
                    if (finalizeInitialChildren(_instance, type, newProps, rootContainerInstance, _currentHostContext)) {
                      markUpdate(workInProgress);
                    }
                    workInProgress.stateNode = _instance;
                  }
                  if (workInProgress.ref !== null) {
                    markRef$1(workInProgress);
                  }
                }
                return null;
              }
            case HostText:
              {
                var newText = newProps;
                if (current && workInProgress.stateNode != null) {
                  var oldText = current.memoizedProps;
                  updateHostText$1(current, workInProgress, oldText, newText);
                } else {
                  if (typeof newText !== 'string') {
                    !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
                    return null;
                  }
                  var _rootContainerInstance = getRootHostContainer();
                  var _currentHostContext2 = getHostContext();
                  var _wasHydrated = popHydrationState(workInProgress);
                  if (_wasHydrated) {
                    if (prepareToHydrateHostTextInstance(workInProgress)) {
                      markUpdate(workInProgress);
                    }
                  } else {
                    workInProgress.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext2, workInProgress);
                  }
                }
                return null;
              }
            case ForwardRef:
              return null;
            case TimeoutComponent:
              return null;
            case Fragment:
              return null;
            case Mode:
              return null;
            case Profiler:
              if (enableProfilerTimer) {
                recordElapsedActualRenderTime(workInProgress);
              }
              return null;
            case HostPortal:
              popHostContainer(workInProgress);
              updateHostContainer(workInProgress);
              return null;
            case ContextProvider:
              popProvider(workInProgress);
              return null;
            case ContextConsumer:
              return null;
            case IndeterminateComponent:
              invariant(false, 'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.');
            default:
              invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
          }
        }
        function showErrorDialog(capturedError) {
          return true;
        }
        function logCapturedError(capturedError) {
          var logError = showErrorDialog(capturedError);
          if (logError === false) {
            return;
          }
          var error = capturedError.error;
          var suppressLogging = error && error.suppressReactErrorLogging;
          if (suppressLogging) {
            return;
          }
          {
            var componentName = capturedError.componentName,
                componentStack = capturedError.componentStack,
                errorBoundaryName = capturedError.errorBoundaryName,
                errorBoundaryFound = capturedError.errorBoundaryFound,
                willRetry = capturedError.willRetry;
            var componentNameMessage = componentName ? 'The above error occurred in the <' + componentName + '> component:' : 'The above error occurred in one of your React components:';
            var errorBoundaryMessage = void 0;
            if (errorBoundaryFound && errorBoundaryName) {
              if (willRetry) {
                errorBoundaryMessage = 'React will try to recreate this component tree from scratch ' + ('using the error boundary you provided, ' + errorBoundaryName + '.');
              } else {
                errorBoundaryMessage = 'This error was initially handled by the error boundary ' + errorBoundaryName + '.\n' + 'Recreating the tree from scratch failed so React will unmount the tree.';
              }
            } else {
              errorBoundaryMessage = 'Consider adding an error boundary to your tree to customize error handling behavior.\n' + 'Visit https://fb.me/react-error-boundaries to learn more about error boundaries.';
            }
            var combinedMessage = '' + componentNameMessage + componentStack + '\n\n' + ('' + errorBoundaryMessage);
            console.error(combinedMessage);
          }
        }
        var invokeGuardedCallback$3 = ReactErrorUtils.invokeGuardedCallback;
        var hasCaughtError$1 = ReactErrorUtils.hasCaughtError;
        var clearCaughtError$1 = ReactErrorUtils.clearCaughtError;
        var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
        {
          didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
        }
        function logError(boundary, errorInfo) {
          var source = errorInfo.source;
          var stack = errorInfo.stack;
          if (stack === null && source !== null) {
            stack = getStackAddendumByWorkInProgressFiber(source);
          }
          var capturedError = {
            componentName: source !== null ? getComponentName(source) : null,
            componentStack: stack !== null ? stack : '',
            error: errorInfo.value,
            errorBoundary: null,
            errorBoundaryName: null,
            errorBoundaryFound: false,
            willRetry: false
          };
          if (boundary !== null && boundary.tag === ClassComponent) {
            capturedError.errorBoundary = boundary.stateNode;
            capturedError.errorBoundaryName = getComponentName(boundary);
            capturedError.errorBoundaryFound = true;
            capturedError.willRetry = true;
          }
          try {
            logCapturedError(capturedError);
          } catch (e) {
            var suppressLogging = e && e.suppressReactErrorLogging;
            if (!suppressLogging) {
              console.error(e);
            }
          }
        }
        var callComponentWillUnmountWithTimer = function (current, instance) {
          startPhaseTimer(current, 'componentWillUnmount');
          instance.props = current.memoizedProps;
          instance.state = current.memoizedState;
          instance.componentWillUnmount();
          stopPhaseTimer();
        };
        function safelyCallComponentWillUnmount(current, instance) {
          {
            invokeGuardedCallback$3(null, callComponentWillUnmountWithTimer, null, current, instance);
            if (hasCaughtError$1()) {
              var unmountError = clearCaughtError$1();
              captureCommitPhaseError(current, unmountError);
            }
          }
        }
        function safelyDetachRef(current) {
          var ref = current.ref;
          if (ref !== null) {
            if (typeof ref === 'function') {
              {
                invokeGuardedCallback$3(null, ref, null, null);
                if (hasCaughtError$1()) {
                  var refError = clearCaughtError$1();
                  captureCommitPhaseError(current, refError);
                }
              }
            } else {
              ref.current = null;
            }
          }
        }
        function commitBeforeMutationLifeCycles(current, finishedWork) {
          switch (finishedWork.tag) {
            case ClassComponent:
              {
                if (finishedWork.effectTag & Snapshot) {
                  if (current !== null) {
                    var prevProps = current.memoizedProps;
                    var prevState = current.memoizedState;
                    startPhaseTimer(finishedWork, 'getSnapshotBeforeUpdate');
                    var instance = finishedWork.stateNode;
                    instance.props = finishedWork.memoizedProps;
                    instance.state = finishedWork.memoizedState;
                    var snapshot = instance.getSnapshotBeforeUpdate(prevProps, prevState);
                    {
                      var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
                      if (snapshot === undefined && !didWarnSet.has(finishedWork.type)) {
                        didWarnSet.add(finishedWork.type);
                        warning(false, '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) ' + 'must be returned. You have returned undefined.', getComponentName(finishedWork));
                      }
                    }
                    instance.__reactInternalSnapshotBeforeUpdate = snapshot;
                    stopPhaseTimer();
                  }
                }
                return;
              }
            case HostRoot:
            case HostComponent:
            case HostText:
            case HostPortal:
              return;
            default:
              {
                invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
              }
          }
        }
        function commitLifeCycles(finishedRoot, current, finishedWork, currentTime, committedExpirationTime) {
          switch (finishedWork.tag) {
            case ClassComponent:
              {
                var instance = finishedWork.stateNode;
                if (finishedWork.effectTag & Update) {
                  if (current === null) {
                    startPhaseTimer(finishedWork, 'componentDidMount');
                    instance.props = finishedWork.memoizedProps;
                    instance.state = finishedWork.memoizedState;
                    instance.componentDidMount();
                    stopPhaseTimer();
                  } else {
                    var prevProps = current.memoizedProps;
                    var prevState = current.memoizedState;
                    startPhaseTimer(finishedWork, 'componentDidUpdate');
                    instance.props = finishedWork.memoizedProps;
                    instance.state = finishedWork.memoizedState;
                    instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                    stopPhaseTimer();
                  }
                }
                var updateQueue = finishedWork.updateQueue;
                if (updateQueue !== null) {
                  instance.props = finishedWork.memoizedProps;
                  instance.state = finishedWork.memoizedState;
                  commitUpdateQueue(finishedWork, updateQueue, instance, committedExpirationTime);
                }
                return;
              }
            case HostRoot:
              {
                var _updateQueue = finishedWork.updateQueue;
                if (_updateQueue !== null) {
                  var _instance = null;
                  if (finishedWork.child !== null) {
                    switch (finishedWork.child.tag) {
                      case HostComponent:
                        _instance = getPublicInstance(finishedWork.child.stateNode);
                        break;
                      case ClassComponent:
                        _instance = finishedWork.child.stateNode;
                        break;
                    }
                  }
                  commitUpdateQueue(finishedWork, _updateQueue, _instance, committedExpirationTime);
                }
                return;
              }
            case HostComponent:
              {
                var _instance2 = finishedWork.stateNode;
                if (current === null && finishedWork.effectTag & Update) {
                  var type = finishedWork.type;
                  var props = finishedWork.memoizedProps;
                  commitMount(_instance2, type, props, finishedWork);
                }
                return;
              }
            case HostText:
              {
                return;
              }
            case HostPortal:
              {
                return;
              }
            case Profiler:
              {
                return;
              }
            case TimeoutComponent:
              {
                return;
              }
            default:
              {
                invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
              }
          }
        }
        function commitAttachRef(finishedWork) {
          var ref = finishedWork.ref;
          if (ref !== null) {
            var instance = finishedWork.stateNode;
            var instanceToUse = void 0;
            switch (finishedWork.tag) {
              case HostComponent:
                instanceToUse = getPublicInstance(instance);
                break;
              default:
                instanceToUse = instance;
            }
            if (typeof ref === 'function') {
              ref(instanceToUse);
            } else {
              {
                if (!ref.hasOwnProperty('current')) {
                  warning(false, 'Unexpected ref object provided for %s. ' + 'Use either a ref-setter function or React.createRef().%s', getComponentName(finishedWork), getStackAddendumByWorkInProgressFiber(finishedWork));
                }
              }
              ref.current = instanceToUse;
            }
          }
        }
        function commitDetachRef(current) {
          var currentRef = current.ref;
          if (currentRef !== null) {
            if (typeof currentRef === 'function') {
              currentRef(null);
            } else {
              currentRef.current = null;
            }
          }
        }
        function commitUnmount(current) {
          if (typeof onCommitUnmount === 'function') {
            onCommitUnmount(current);
          }
          switch (current.tag) {
            case ClassComponent:
              {
                safelyDetachRef(current);
                var instance = current.stateNode;
                if (typeof instance.componentWillUnmount === 'function') {
                  safelyCallComponentWillUnmount(current, instance);
                }
                return;
              }
            case HostComponent:
              {
                safelyDetachRef(current);
                return;
              }
            case HostPortal:
              {
                if (supportsMutation) {
                  unmountHostComponents(current);
                } else if (supportsPersistence) {
                  emptyPortalContainer(current);
                }
                return;
              }
          }
        }
        function commitNestedUnmounts(root) {
          var node = root;
          while (true) {
            commitUnmount(node);
            if (node.child !== null && (!supportsMutation || node.tag !== HostPortal)) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === root) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === root) {
                return;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
        function detachFiber(current) {
          current.return = null;
          current.child = null;
          if (current.alternate) {
            current.alternate.child = null;
            current.alternate.return = null;
          }
        }
        function emptyPortalContainer(current) {
          if (!supportsPersistence) {
            return;
          }
          var portal = current.stateNode;
          var containerInfo = portal.containerInfo;
          var emptyChildSet = createContainerChildSet(containerInfo);
          replaceContainerChildren(containerInfo, emptyChildSet);
        }
        function commitContainer(finishedWork) {
          if (!supportsPersistence) {
            return;
          }
          switch (finishedWork.tag) {
            case ClassComponent:
              {
                return;
              }
            case HostComponent:
              {
                return;
              }
            case HostText:
              {
                return;
              }
            case HostRoot:
            case HostPortal:
              {
                var portalOrRoot = finishedWork.stateNode;
                var containerInfo = portalOrRoot.containerInfo,
                    _pendingChildren = portalOrRoot.pendingChildren;
                replaceContainerChildren(containerInfo, _pendingChildren);
                return;
              }
            default:
              {
                invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
              }
          }
        }
        function getHostParentFiber(fiber) {
          var parent = fiber.return;
          while (parent !== null) {
            if (isHostParent(parent)) {
              return parent;
            }
            parent = parent.return;
          }
          invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');
        }
        function isHostParent(fiber) {
          return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
        }
        function getHostSibling(fiber) {
          var node = fiber;
          siblings: while (true) {
            while (node.sibling === null) {
              if (node.return === null || isHostParent(node.return)) {
                return null;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
            while (node.tag !== HostComponent && node.tag !== HostText) {
              if (node.effectTag & Placement) {
                continue siblings;
              }
              if (node.child === null || node.tag === HostPortal) {
                continue siblings;
              } else {
                node.child.return = node;
                node = node.child;
              }
            }
            if (!(node.effectTag & Placement)) {
              return node.stateNode;
            }
          }
        }
        function commitPlacement(finishedWork) {
          if (!supportsMutation) {
            return;
          }
          var parentFiber = getHostParentFiber(finishedWork);
          var parent = void 0;
          var isContainer = void 0;
          switch (parentFiber.tag) {
            case HostComponent:
              parent = parentFiber.stateNode;
              isContainer = false;
              break;
            case HostRoot:
              parent = parentFiber.stateNode.containerInfo;
              isContainer = true;
              break;
            case HostPortal:
              parent = parentFiber.stateNode.containerInfo;
              isContainer = true;
              break;
            default:
              invariant(false, 'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.');
          }
          if (parentFiber.effectTag & ContentReset) {
            resetTextContent(parent);
            parentFiber.effectTag &= ~ContentReset;
          }
          var before = getHostSibling(finishedWork);
          var node = finishedWork;
          while (true) {
            if (node.tag === HostComponent || node.tag === HostText) {
              if (before) {
                if (isContainer) {
                  insertInContainerBefore(parent, node.stateNode, before);
                } else {
                  insertBefore(parent, node.stateNode, before);
                }
              } else {
                if (isContainer) {
                  appendChildToContainer(parent, node.stateNode);
                } else {
                  appendChild(parent, node.stateNode);
                }
              }
            } else if (node.tag === HostPortal) {} else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === finishedWork) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === finishedWork) {
                return;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
        function unmountHostComponents(current) {
          var node = current;
          var currentParentIsValid = false;
          var currentParent = void 0;
          var currentParentIsContainer = void 0;
          while (true) {
            if (!currentParentIsValid) {
              var parent = node.return;
              findParent: while (true) {
                !(parent !== null) ? invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
                switch (parent.tag) {
                  case HostComponent:
                    currentParent = parent.stateNode;
                    currentParentIsContainer = false;
                    break findParent;
                  case HostRoot:
                    currentParent = parent.stateNode.containerInfo;
                    currentParentIsContainer = true;
                    break findParent;
                  case HostPortal:
                    currentParent = parent.stateNode.containerInfo;
                    currentParentIsContainer = true;
                    break findParent;
                }
                parent = parent.return;
              }
              currentParentIsValid = true;
            }
            if (node.tag === HostComponent || node.tag === HostText) {
              commitNestedUnmounts(node);
              if (currentParentIsContainer) {
                removeChildFromContainer(currentParent, node.stateNode);
              } else {
                removeChild(currentParent, node.stateNode);
              }
            } else if (node.tag === HostPortal) {
              currentParent = node.stateNode.containerInfo;
              if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
            } else {
              commitUnmount(node);
              if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
            }
            if (node === current) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === current) {
                return;
              }
              node = node.return;
              if (node.tag === HostPortal) {
                currentParentIsValid = false;
              }
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
        function commitDeletion(current) {
          if (supportsMutation) {
            unmountHostComponents(current);
          } else {
            commitNestedUnmounts(current);
          }
          detachFiber(current);
        }
        function commitWork(current, finishedWork) {
          if (!supportsMutation) {
            commitContainer(finishedWork);
            return;
          }
          switch (finishedWork.tag) {
            case ClassComponent:
              {
                return;
              }
            case HostComponent:
              {
                var instance = finishedWork.stateNode;
                if (instance != null) {
                  var newProps = finishedWork.memoizedProps;
                  var oldProps = current !== null ? current.memoizedProps : newProps;
                  var type = finishedWork.type;
                  var updatePayload = finishedWork.updateQueue;
                  finishedWork.updateQueue = null;
                  if (updatePayload !== null) {
                    commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
                  }
                }
                return;
              }
            case HostText:
              {
                !(finishedWork.stateNode !== null) ? invariant(false, 'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.') : void 0;
                var textInstance = finishedWork.stateNode;
                var newText = finishedWork.memoizedProps;
                var oldText = current !== null ? current.memoizedProps : newText;
                commitTextUpdate(textInstance, oldText, newText);
                return;
              }
            case HostRoot:
              {
                return;
              }
            case Profiler:
              {
                if (enableProfilerTimer) {
                  var onRender = finishedWork.memoizedProps.onRender;
                  onRender(finishedWork.memoizedProps.id, current === null ? 'mount' : 'update', finishedWork.stateNode.duration, finishedWork.treeBaseTime, finishedWork.stateNode.startTime, getCommitTime());
                  finishedWork.stateNode.duration = 0;
                }
                return;
              }
            case TimeoutComponent:
              {
                return;
              }
            default:
              {
                invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
              }
          }
        }
        function commitResetTextContent(current) {
          if (!supportsMutation) {
            return;
          }
          resetTextContent(current.stateNode);
        }
        function createRootErrorUpdate(fiber, errorInfo, expirationTime) {
          var update = createUpdate(expirationTime);
          update.tag = CaptureUpdate;
          update.payload = { element: null };
          var error = errorInfo.value;
          update.callback = function () {
            onUncaughtError(error);
            logError(fiber, errorInfo);
          };
          return update;
        }
        function createClassErrorUpdate(fiber, errorInfo, expirationTime) {
          var update = createUpdate(expirationTime);
          update.tag = CaptureUpdate;
          var getDerivedStateFromCatch = fiber.type.getDerivedStateFromCatch;
          if (enableGetDerivedStateFromCatch && typeof getDerivedStateFromCatch === 'function') {
            var error = errorInfo.value;
            update.payload = function () {
              return getDerivedStateFromCatch(error);
            };
          }
          var inst = fiber.stateNode;
          if (inst !== null && typeof inst.componentDidCatch === 'function') {
            update.callback = function callback() {
              if (!enableGetDerivedStateFromCatch || getDerivedStateFromCatch !== 'function') {
                markLegacyErrorBoundaryAsFailed(this);
              }
              var error = errorInfo.value;
              var stack = errorInfo.stack;
              logError(fiber, errorInfo);
              this.componentDidCatch(error, { componentStack: stack !== null ? stack : '' });
            };
          }
          return update;
        }
        function schedulePing(finishedWork) {
          var currentTime = recalculateCurrentTime();
          var expirationTime = computeExpirationForFiber(currentTime, finishedWork);
          var recoveryUpdate = createUpdate(expirationTime);
          enqueueUpdate(finishedWork, recoveryUpdate, expirationTime);
          scheduleWork$1(finishedWork, expirationTime);
        }
        function throwException(root, returnFiber, sourceFiber, value, renderIsExpired, renderExpirationTime, currentTimeMs) {
          sourceFiber.effectTag |= Incomplete;
          sourceFiber.firstEffect = sourceFiber.lastEffect = null;
          if (enableSuspense && value !== null && typeof value === 'object' && typeof value.then === 'function') {
            var thenable = value;
            var expirationTimeMs = expirationTimeToMs(renderExpirationTime);
            var startTimeMs = expirationTimeMs - 5000;
            var elapsedMs = currentTimeMs - startTimeMs;
            if (elapsedMs < 0) {
              elapsedMs = 0;
            }
            var remainingTimeMs = expirationTimeMs - currentTimeMs;
            var _workInProgress = returnFiber;
            var earliestTimeoutMs = -1;
            searchForEarliestTimeout: do {
              if (_workInProgress.tag === TimeoutComponent) {
                var current = _workInProgress.alternate;
                if (current !== null && current.memoizedState === true) {
                  earliestTimeoutMs = 0;
                  break searchForEarliestTimeout;
                }
                var timeoutPropMs = _workInProgress.pendingProps.ms;
                if (typeof timeoutPropMs === 'number') {
                  if (timeoutPropMs <= 0) {
                    earliestTimeoutMs = 0;
                    break searchForEarliestTimeout;
                  } else if (earliestTimeoutMs === -1 || timeoutPropMs < earliestTimeoutMs) {
                    earliestTimeoutMs = timeoutPropMs;
                  }
                } else if (earliestTimeoutMs === -1) {
                  earliestTimeoutMs = remainingTimeMs;
                }
              }
              _workInProgress = _workInProgress.return;
            } while (_workInProgress !== null);
            var msUntilTimeout = earliestTimeoutMs - elapsedMs;
            if (renderExpirationTime === Never || msUntilTimeout > 0) {
              suspendRoot(root, thenable, msUntilTimeout, renderExpirationTime);
              var onResolveOrReject = function () {
                retrySuspendedRoot(root, renderExpirationTime);
              };
              thenable.then(onResolveOrReject, onResolveOrReject);
              return;
            } else {
              _workInProgress = returnFiber;
              do {
                switch (_workInProgress.tag) {
                  case HostRoot:
                    {
                      var message = renderExpirationTime === Sync ? 'A synchronous update was suspended, but no fallback UI ' + 'was provided.' : 'An update was suspended for longer than the timeout, ' + 'but no fallback UI was provided.';
                      value = new Error(message);
                      break;
                    }
                  case TimeoutComponent:
                    {
                      if ((_workInProgress.effectTag & DidCapture) === NoEffect) {
                        _workInProgress.effectTag |= ShouldCapture;
                        var _onResolveOrReject = schedulePing.bind(null, _workInProgress);
                        thenable.then(_onResolveOrReject, _onResolveOrReject);
                        return;
                      }
                      break;
                    }
                }
                _workInProgress = _workInProgress.return;
              } while (_workInProgress !== null);
            }
          }
          value = createCapturedValue(value, sourceFiber);
          var workInProgress = returnFiber;
          do {
            switch (workInProgress.tag) {
              case HostRoot:
                {
                  var _errorInfo = value;
                  workInProgress.effectTag |= ShouldCapture;
                  var update = createRootErrorUpdate(workInProgress, _errorInfo, renderExpirationTime);
                  enqueueCapturedUpdate(workInProgress, update, renderExpirationTime);
                  return;
                }
              case ClassComponent:
                var errorInfo = value;
                var ctor = workInProgress.type;
                var instance = workInProgress.stateNode;
                if ((workInProgress.effectTag & DidCapture) === NoEffect && (typeof ctor.getDerivedStateFromCatch === 'function' && enableGetDerivedStateFromCatch || instance !== null && typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance))) {
                  workInProgress.effectTag |= ShouldCapture;
                  var _update = createClassErrorUpdate(workInProgress, errorInfo, renderExpirationTime);
                  enqueueCapturedUpdate(workInProgress, _update, renderExpirationTime);
                  return;
                }
                break;
              default:
                break;
            }
            workInProgress = workInProgress.return;
          } while (workInProgress !== null);
        }
        function unwindWork(workInProgress, renderIsExpired, renderExpirationTime) {
          switch (workInProgress.tag) {
            case ClassComponent:
              {
                popContextProvider(workInProgress);
                var effectTag = workInProgress.effectTag;
                if (effectTag & ShouldCapture) {
                  workInProgress.effectTag = effectTag & ~ShouldCapture | DidCapture;
                  return workInProgress;
                }
                return null;
              }
            case HostRoot:
              {
                popHostContainer(workInProgress);
                popTopLevelContextObject(workInProgress);
                var _effectTag = workInProgress.effectTag;
                if (_effectTag & ShouldCapture) {
                  workInProgress.effectTag = _effectTag & ~ShouldCapture | DidCapture;
                  return workInProgress;
                }
                return null;
              }
            case HostComponent:
              {
                popHostContext(workInProgress);
                return null;
              }
            case TimeoutComponent:
              {
                var _effectTag2 = workInProgress.effectTag;
                if (_effectTag2 & ShouldCapture) {
                  workInProgress.effectTag = _effectTag2 & ~ShouldCapture | DidCapture;
                  return workInProgress;
                }
                return null;
              }
            case HostPortal:
              popHostContainer(workInProgress);
              return null;
            case ContextProvider:
              popProvider(workInProgress);
              return null;
            default:
              return null;
          }
        }
        function unwindInterruptedWork(interruptedWork) {
          switch (interruptedWork.tag) {
            case ClassComponent:
              {
                popContextProvider(interruptedWork);
                break;
              }
            case HostRoot:
              {
                popHostContainer(interruptedWork);
                popTopLevelContextObject(interruptedWork);
                break;
              }
            case HostComponent:
              {
                popHostContext(interruptedWork);
                break;
              }
            case HostPortal:
              popHostContainer(interruptedWork);
              break;
            case ContextProvider:
              popProvider(interruptedWork);
              break;
            case Profiler:
              if (enableProfilerTimer) {
                resumeActualRenderTimerIfPaused();
                recordElapsedActualRenderTime(interruptedWork);
              }
              break;
            default:
              break;
          }
        }
        var invokeGuardedCallback$2 = ReactErrorUtils.invokeGuardedCallback;
        var hasCaughtError = ReactErrorUtils.hasCaughtError;
        var clearCaughtError = ReactErrorUtils.clearCaughtError;
        var didWarnAboutStateTransition = void 0;
        var didWarnSetStateChildContext = void 0;
        var warnAboutUpdateOnUnmounted = void 0;
        var warnAboutInvalidUpdates = void 0;
        {
          didWarnAboutStateTransition = false;
          didWarnSetStateChildContext = false;
          var didWarnStateUpdateForUnmountedComponent = {};
          warnAboutUpdateOnUnmounted = function (fiber) {
            var componentName = getComponentName(fiber) || 'ReactClass';
            if (didWarnStateUpdateForUnmountedComponent[componentName]) {
              return;
            }
            warning(false, "Can't call setState (or forceUpdate) on an unmounted component. This " + 'is a no-op, but it indicates a memory leak in your application. To ' + 'fix, cancel all subscriptions and asynchronous tasks in the ' + 'componentWillUnmount method.%s', getStackAddendumByWorkInProgressFiber(fiber));
            didWarnStateUpdateForUnmountedComponent[componentName] = true;
          };
          warnAboutInvalidUpdates = function (instance) {
            switch (ReactDebugCurrentFiber.phase) {
              case 'getChildContext':
                if (didWarnSetStateChildContext) {
                  return;
                }
                warning(false, 'setState(...): Cannot call setState() inside getChildContext()');
                didWarnSetStateChildContext = true;
                break;
              case 'render':
                if (didWarnAboutStateTransition) {
                  return;
                }
                warning(false, 'Cannot update during an existing state transition (such as within ' + "`render` or another component's constructor). Render methods should " + 'be a pure function of props and state; constructor side-effects are ' + 'an anti-pattern, but can be moved to `componentWillMount`.');
                didWarnAboutStateTransition = true;
                break;
            }
          };
        }
        var originalStartTimeMs = now();
        var mostRecentCurrentTime = msToExpirationTime(0);
        var mostRecentCurrentTimeMs = originalStartTimeMs;
        var lastUniqueAsyncExpiration = 0;
        var expirationContext = NoWork;
        var isWorking = false;
        var nextUnitOfWork = null;
        var nextRoot = null;
        var nextRenderExpirationTime = NoWork;
        var nextLatestTimeoutMs = -1;
        var nextRenderIsExpired = false;
        var nextEffect = null;
        var isCommitting$1 = false;
        var isRootReadyForCommit = false;
        var legacyErrorBoundariesThatAlreadyFailed = null;
        var interruptedBy = null;
        var stashedWorkInProgressProperties = void 0;
        var replayUnitOfWork = void 0;
        var isReplayingFailedUnitOfWork = void 0;
        var originalReplayError = void 0;
        var rethrowOriginalError = void 0;
        if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
          stashedWorkInProgressProperties = null;
          isReplayingFailedUnitOfWork = false;
          originalReplayError = null;
          replayUnitOfWork = function (failedUnitOfWork, thrownValue, isAsync) {
            if (thrownValue !== null && typeof thrownValue === 'object' && typeof thrownValue.then === 'function') {
              return;
            }
            if (stashedWorkInProgressProperties === null) {
              warning(false, 'Could not replay rendering after an error. This is likely a bug in React. ' + 'Please file an issue.');
              return;
            }
            assignFiberPropertiesInDEV(failedUnitOfWork, stashedWorkInProgressProperties);
            switch (failedUnitOfWork.tag) {
              case HostRoot:
                popHostContainer(failedUnitOfWork);
                popTopLevelContextObject(failedUnitOfWork);
                break;
              case HostComponent:
                popHostContext(failedUnitOfWork);
                break;
              case ClassComponent:
                popContextProvider(failedUnitOfWork);
                break;
              case HostPortal:
                popHostContainer(failedUnitOfWork);
                break;
              case ContextProvider:
                popProvider(failedUnitOfWork);
                break;
            }
            isReplayingFailedUnitOfWork = true;
            originalReplayError = thrownValue;
            invokeGuardedCallback$2(null, workLoop, null, isAsync);
            isReplayingFailedUnitOfWork = false;
            originalReplayError = null;
            if (hasCaughtError()) {
              clearCaughtError();
              if (enableProfilerTimer) {
                stopBaseRenderTimerIfRunning();
              }
            } else {
              nextUnitOfWork = failedUnitOfWork;
            }
          };
          rethrowOriginalError = function () {
            throw originalReplayError;
          };
        }
        function resetStack() {
          if (nextUnitOfWork !== null) {
            var interruptedWork = nextUnitOfWork.return;
            while (interruptedWork !== null) {
              unwindInterruptedWork(interruptedWork);
              interruptedWork = interruptedWork.return;
            }
          }
          {
            ReactStrictModeWarnings.discardPendingWarnings();
            checkThatStackIsEmpty();
          }
          nextRoot = null;
          nextRenderExpirationTime = NoWork;
          nextLatestTimeoutMs = -1;
          nextRenderIsExpired = false;
          nextUnitOfWork = null;
          isRootReadyForCommit = false;
        }
        function commitAllHostEffects() {
          while (nextEffect !== null) {
            {
              ReactDebugCurrentFiber.setCurrentFiber(nextEffect);
            }
            recordEffect();
            var effectTag = nextEffect.effectTag;
            if (effectTag & ContentReset) {
              commitResetTextContent(nextEffect);
            }
            if (effectTag & Ref) {
              var current = nextEffect.alternate;
              if (current !== null) {
                commitDetachRef(current);
              }
            }
            var primaryEffectTag = effectTag & (Placement | Update | Deletion);
            switch (primaryEffectTag) {
              case Placement:
                {
                  commitPlacement(nextEffect);
                  nextEffect.effectTag &= ~Placement;
                  break;
                }
              case PlacementAndUpdate:
                {
                  commitPlacement(nextEffect);
                  nextEffect.effectTag &= ~Placement;
                  var _current = nextEffect.alternate;
                  commitWork(_current, nextEffect);
                  break;
                }
              case Update:
                {
                  var _current2 = nextEffect.alternate;
                  commitWork(_current2, nextEffect);
                  break;
                }
              case Deletion:
                {
                  commitDeletion(nextEffect);
                  break;
                }
            }
            nextEffect = nextEffect.nextEffect;
          }
          {
            ReactDebugCurrentFiber.resetCurrentFiber();
          }
        }
        function commitBeforeMutationLifecycles() {
          while (nextEffect !== null) {
            var effectTag = nextEffect.effectTag;
            if (effectTag & Snapshot) {
              recordEffect();
              var current = nextEffect.alternate;
              commitBeforeMutationLifeCycles(current, nextEffect);
            }
            nextEffect = nextEffect.nextEffect;
          }
        }
        function commitAllLifeCycles(finishedRoot, currentTime, committedExpirationTime) {
          {
            ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
            if (warnAboutDeprecatedLifecycles) {
              ReactStrictModeWarnings.flushPendingDeprecationWarnings();
            }
            if (warnAboutLegacyContextAPI) {
              ReactStrictModeWarnings.flushLegacyContextWarning();
            }
          }
          while (nextEffect !== null) {
            var effectTag = nextEffect.effectTag;
            if (effectTag & (Update | Callback)) {
              recordEffect();
              var current = nextEffect.alternate;
              commitLifeCycles(finishedRoot, current, nextEffect, currentTime, committedExpirationTime);
            }
            if (effectTag & Ref) {
              recordEffect();
              commitAttachRef(nextEffect);
            }
            var next = nextEffect.nextEffect;
            nextEffect.nextEffect = null;
            nextEffect = next;
          }
        }
        function isAlreadyFailedLegacyErrorBoundary(instance) {
          return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
        }
        function markLegacyErrorBoundaryAsFailed(instance) {
          if (legacyErrorBoundariesThatAlreadyFailed === null) {
            legacyErrorBoundariesThatAlreadyFailed = new Set([instance]);
          } else {
            legacyErrorBoundariesThatAlreadyFailed.add(instance);
          }
        }
        function commitRoot(finishedWork) {
          isWorking = true;
          isCommitting$1 = true;
          startCommitTimer();
          var root = finishedWork.stateNode;
          !(root.current !== finishedWork) ? invariant(false, 'Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          var committedExpirationTime = root.pendingCommitExpirationTime;
          !(committedExpirationTime !== NoWork) ? invariant(false, 'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          root.pendingCommitExpirationTime = NoWork;
          var currentTime = recalculateCurrentTime();
          ReactCurrentOwner.current = null;
          var firstEffect = void 0;
          if (finishedWork.effectTag > PerformedWork) {
            if (finishedWork.lastEffect !== null) {
              finishedWork.lastEffect.nextEffect = finishedWork;
              firstEffect = finishedWork.firstEffect;
            } else {
              firstEffect = finishedWork;
            }
          } else {
            firstEffect = finishedWork.firstEffect;
          }
          prepareForCommit(root.containerInfo);
          nextEffect = firstEffect;
          startCommitSnapshotEffectsTimer();
          while (nextEffect !== null) {
            var didError = false;
            var error = void 0;
            {
              invokeGuardedCallback$2(null, commitBeforeMutationLifecycles, null);
              if (hasCaughtError()) {
                didError = true;
                error = clearCaughtError();
              }
            }
            if (didError) {
              !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
              captureCommitPhaseError(nextEffect, error);
              if (nextEffect !== null) {
                nextEffect = nextEffect.nextEffect;
              }
            }
          }
          stopCommitSnapshotEffectsTimer();
          if (enableProfilerTimer) {
            recordCommitTime();
          }
          nextEffect = firstEffect;
          startCommitHostEffectsTimer();
          while (nextEffect !== null) {
            var _didError = false;
            var _error = void 0;
            {
              invokeGuardedCallback$2(null, commitAllHostEffects, null);
              if (hasCaughtError()) {
                _didError = true;
                _error = clearCaughtError();
              }
            }
            if (_didError) {
              !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
              captureCommitPhaseError(nextEffect, _error);
              if (nextEffect !== null) {
                nextEffect = nextEffect.nextEffect;
              }
            }
          }
          stopCommitHostEffectsTimer();
          resetAfterCommit(root.containerInfo);
          root.current = finishedWork;
          nextEffect = firstEffect;
          startCommitLifeCyclesTimer();
          while (nextEffect !== null) {
            var _didError2 = false;
            var _error2 = void 0;
            {
              invokeGuardedCallback$2(null, commitAllLifeCycles, null, root, currentTime, committedExpirationTime);
              if (hasCaughtError()) {
                _didError2 = true;
                _error2 = clearCaughtError();
              }
            }
            if (_didError2) {
              !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
              captureCommitPhaseError(nextEffect, _error2);
              if (nextEffect !== null) {
                nextEffect = nextEffect.nextEffect;
              }
            }
          }
          if (enableProfilerTimer) {
            {
              checkActualRenderTimeStackEmpty();
            }
            resetActualRenderTimer();
          }
          isCommitting$1 = false;
          isWorking = false;
          stopCommitLifeCyclesTimer();
          stopCommitTimer();
          if (typeof onCommitRoot === 'function') {
            onCommitRoot(finishedWork.stateNode);
          }
          if (true && ReactFiberInstrumentation_1.debugTool) {
            ReactFiberInstrumentation_1.debugTool.onCommitWork(finishedWork);
          }
          markCommittedPriorityLevels(root, currentTime, root.current.expirationTime);
          var remainingTime = findNextPendingPriorityLevel(root);
          if (remainingTime === NoWork) {
            legacyErrorBoundariesThatAlreadyFailed = null;
          }
          return remainingTime;
        }
        function resetExpirationTime(workInProgress, renderTime) {
          if (renderTime !== Never && workInProgress.expirationTime === Never) {
            return;
          }
          var newExpirationTime = NoWork;
          switch (workInProgress.tag) {
            case HostRoot:
            case ClassComponent:
              {
                var updateQueue = workInProgress.updateQueue;
                if (updateQueue !== null) {
                  newExpirationTime = updateQueue.expirationTime;
                }
              }
          }
          if (enableProfilerTimer && workInProgress.mode & ProfileMode) {
            var treeBaseTime = workInProgress.selfBaseTime;
            var child = workInProgress.child;
            while (child !== null) {
              treeBaseTime += child.treeBaseTime;
              if (child.expirationTime !== NoWork && (newExpirationTime === NoWork || newExpirationTime > child.expirationTime)) {
                newExpirationTime = child.expirationTime;
              }
              child = child.sibling;
            }
            workInProgress.treeBaseTime = treeBaseTime;
          } else {
            var _child = workInProgress.child;
            while (_child !== null) {
              if (_child.expirationTime !== NoWork && (newExpirationTime === NoWork || newExpirationTime > _child.expirationTime)) {
                newExpirationTime = _child.expirationTime;
              }
              _child = _child.sibling;
            }
          }
          workInProgress.expirationTime = newExpirationTime;
        }
        function completeUnitOfWork(workInProgress) {
          while (true) {
            var current = workInProgress.alternate;
            {
              ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
            }
            var returnFiber = workInProgress.return;
            var siblingFiber = workInProgress.sibling;
            if ((workInProgress.effectTag & Incomplete) === NoEffect) {
              var next = completeWork(current, workInProgress, nextRenderExpirationTime);
              stopWorkTimer(workInProgress);
              resetExpirationTime(workInProgress, nextRenderExpirationTime);
              {
                ReactDebugCurrentFiber.resetCurrentFiber();
              }
              if (next !== null) {
                stopWorkTimer(workInProgress);
                if (true && ReactFiberInstrumentation_1.debugTool) {
                  ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
                }
                return next;
              }
              if (returnFiber !== null && (returnFiber.effectTag & Incomplete) === NoEffect) {
                if (returnFiber.firstEffect === null) {
                  returnFiber.firstEffect = workInProgress.firstEffect;
                }
                if (workInProgress.lastEffect !== null) {
                  if (returnFiber.lastEffect !== null) {
                    returnFiber.lastEffect.nextEffect = workInProgress.firstEffect;
                  }
                  returnFiber.lastEffect = workInProgress.lastEffect;
                }
                var effectTag = workInProgress.effectTag;
                if (effectTag > PerformedWork) {
                  if (returnFiber.lastEffect !== null) {
                    returnFiber.lastEffect.nextEffect = workInProgress;
                  } else {
                    returnFiber.firstEffect = workInProgress;
                  }
                  returnFiber.lastEffect = workInProgress;
                }
              }
              if (true && ReactFiberInstrumentation_1.debugTool) {
                ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
              }
              if (siblingFiber !== null) {
                return siblingFiber;
              } else if (returnFiber !== null) {
                workInProgress = returnFiber;
                continue;
              } else {
                isRootReadyForCommit = true;
                return null;
              }
            } else {
              var _next = unwindWork(workInProgress, nextRenderIsExpired, nextRenderExpirationTime);
              if (workInProgress.effectTag & DidCapture) {
                stopFailedWorkTimer(workInProgress);
              } else {
                stopWorkTimer(workInProgress);
              }
              {
                ReactDebugCurrentFiber.resetCurrentFiber();
              }
              if (_next !== null) {
                stopWorkTimer(workInProgress);
                if (true && ReactFiberInstrumentation_1.debugTool) {
                  ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
                }
                _next.effectTag &= HostEffectMask;
                return _next;
              }
              if (returnFiber !== null) {
                returnFiber.firstEffect = returnFiber.lastEffect = null;
                returnFiber.effectTag |= Incomplete;
              }
              if (true && ReactFiberInstrumentation_1.debugTool) {
                ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
              }
              if (siblingFiber !== null) {
                return siblingFiber;
              } else if (returnFiber !== null) {
                workInProgress = returnFiber;
                continue;
              } else {
                return null;
              }
            }
          }
          return null;
        }
        function performUnitOfWork(workInProgress) {
          var current = workInProgress.alternate;
          startWorkTimer(workInProgress);
          {
            ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
          }
          if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
            stashedWorkInProgressProperties = assignFiberPropertiesInDEV(stashedWorkInProgressProperties, workInProgress);
          }
          var next = void 0;
          if (enableProfilerTimer) {
            if (workInProgress.mode & ProfileMode) {
              startBaseRenderTimer();
            }
            next = beginWork(current, workInProgress, nextRenderExpirationTime);
            if (workInProgress.mode & ProfileMode) {
              recordElapsedBaseRenderTimeIfRunning(workInProgress);
              stopBaseRenderTimerIfRunning();
            }
          } else {
            next = beginWork(current, workInProgress, nextRenderExpirationTime);
          }
          {
            ReactDebugCurrentFiber.resetCurrentFiber();
            if (isReplayingFailedUnitOfWork) {
              rethrowOriginalError();
            }
          }
          if (true && ReactFiberInstrumentation_1.debugTool) {
            ReactFiberInstrumentation_1.debugTool.onBeginWork(workInProgress);
          }
          if (next === null) {
            next = completeUnitOfWork(workInProgress);
          }
          ReactCurrentOwner.current = null;
          return next;
        }
        function workLoop(isAsync) {
          if (!isAsync) {
            while (nextUnitOfWork !== null) {
              nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
            }
          } else {
            while (nextUnitOfWork !== null && !shouldYield()) {
              nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
            }
            if (enableProfilerTimer) {
              pauseActualRenderTimerIfRunning();
            }
          }
        }
        function renderRoot(root, expirationTime, isAsync) {
          !!isWorking ? invariant(false, 'renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          isWorking = true;
          if (expirationTime !== nextRenderExpirationTime || root !== nextRoot || nextUnitOfWork === null) {
            resetStack();
            nextRoot = root;
            nextRenderExpirationTime = expirationTime;
            nextLatestTimeoutMs = -1;
            nextUnitOfWork = createWorkInProgress(nextRoot.current, null, nextRenderExpirationTime);
            root.pendingCommitExpirationTime = NoWork;
          }
          var didFatal = false;
          nextRenderIsExpired = !isAsync || nextRenderExpirationTime <= mostRecentCurrentTime;
          startWorkLoopTimer(nextUnitOfWork);
          do {
            try {
              workLoop(isAsync);
            } catch (thrownValue) {
              if (enableProfilerTimer) {
                stopBaseRenderTimerIfRunning();
              }
              if (nextUnitOfWork === null) {
                didFatal = true;
                onUncaughtError(thrownValue);
              } else {
                {
                  resetCurrentlyProcessingQueue();
                }
                var failedUnitOfWork = nextUnitOfWork;
                if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
                  replayUnitOfWork(failedUnitOfWork, thrownValue, isAsync);
                }
                !(nextUnitOfWork !== null) ? invariant(false, 'Failed to replay rendering after an error. This is likely caused by a bug in React. Please file an issue with a reproducing case to help us find it.') : void 0;
                var sourceFiber = nextUnitOfWork;
                var returnFiber = sourceFiber.return;
                if (returnFiber === null) {
                  didFatal = true;
                  onUncaughtError(thrownValue);
                  break;
                }
                throwException(root, returnFiber, sourceFiber, thrownValue, nextRenderIsExpired, nextRenderExpirationTime, mostRecentCurrentTimeMs);
                nextUnitOfWork = completeUnitOfWork(sourceFiber);
              }
            }
            break;
          } while (true);
          var didCompleteRoot = false;
          isWorking = false;
          if (didFatal) {
            stopWorkLoopTimer(interruptedBy, didCompleteRoot);
            interruptedBy = null;
            {
              resetStackAfterFatalErrorInDev();
            }
            return null;
          } else if (nextUnitOfWork === null) {
            if (isRootReadyForCommit) {
              didCompleteRoot = true;
              stopWorkLoopTimer(interruptedBy, didCompleteRoot);
              interruptedBy = null;
              root.pendingCommitExpirationTime = expirationTime;
              var finishedWork = root.current.alternate;
              return finishedWork;
            } else {
              stopWorkLoopTimer(interruptedBy, didCompleteRoot);
              interruptedBy = null;
              !!nextRenderIsExpired ? invariant(false, 'Expired work should have completed. This error is likely caused by a bug in React. Please file an issue.') : void 0;
              markSuspendedPriorityLevel(root, expirationTime);
              if (nextLatestTimeoutMs >= 0) {
                setTimeout(function () {
                  retrySuspendedRoot(root, expirationTime);
                }, nextLatestTimeoutMs);
              }
              var firstUnblockedExpirationTime = findNextPendingPriorityLevel(root);
              onBlock(firstUnblockedExpirationTime);
              return null;
            }
          } else {
            stopWorkLoopTimer(interruptedBy, didCompleteRoot);
            interruptedBy = null;
            return null;
          }
        }
        function dispatch(sourceFiber, value, expirationTime) {
          !(!isWorking || isCommitting$1) ? invariant(false, 'dispatch: Cannot dispatch during the render phase.') : void 0;
          var fiber = sourceFiber.return;
          while (fiber !== null) {
            switch (fiber.tag) {
              case ClassComponent:
                var ctor = fiber.type;
                var instance = fiber.stateNode;
                if (typeof ctor.getDerivedStateFromCatch === 'function' || typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance)) {
                  var errorInfo = createCapturedValue(value, sourceFiber);
                  var update = createClassErrorUpdate(fiber, errorInfo, expirationTime);
                  enqueueUpdate(fiber, update, expirationTime);
                  scheduleWork$1(fiber, expirationTime);
                  return;
                }
                break;
              case HostRoot:
                {
                  var _errorInfo = createCapturedValue(value, sourceFiber);
                  var _update = createRootErrorUpdate(fiber, _errorInfo, expirationTime);
                  enqueueUpdate(fiber, _update, expirationTime);
                  scheduleWork$1(fiber, expirationTime);
                  return;
                }
            }
            fiber = fiber.return;
          }
          if (sourceFiber.tag === HostRoot) {
            var rootFiber = sourceFiber;
            var _errorInfo2 = createCapturedValue(value, rootFiber);
            var _update2 = createRootErrorUpdate(rootFiber, _errorInfo2, expirationTime);
            enqueueUpdate(rootFiber, _update2, expirationTime);
            scheduleWork$1(rootFiber, expirationTime);
          }
        }
        function captureCommitPhaseError(fiber, error) {
          return dispatch(fiber, error, Sync);
        }
        function computeAsyncExpiration(currentTime) {
          var expirationMs = 5000;
          var bucketSizeMs = 250;
          return computeExpirationBucket(currentTime, expirationMs, bucketSizeMs);
        }
        function computeInteractiveExpiration(currentTime) {
          var expirationMs = void 0;
          {
            expirationMs = 500;
          }
          var bucketSizeMs = 100;
          return computeExpirationBucket(currentTime, expirationMs, bucketSizeMs);
        }
        function computeUniqueAsyncExpiration() {
          var currentTime = recalculateCurrentTime();
          var result = computeAsyncExpiration(currentTime);
          if (result <= lastUniqueAsyncExpiration) {
            result = lastUniqueAsyncExpiration + 1;
          }
          lastUniqueAsyncExpiration = result;
          return lastUniqueAsyncExpiration;
        }
        function computeExpirationForFiber(currentTime, fiber) {
          var expirationTime = void 0;
          if (expirationContext !== NoWork) {
            expirationTime = expirationContext;
          } else if (isWorking) {
            if (isCommitting$1) {
              expirationTime = Sync;
            } else {
              expirationTime = nextRenderExpirationTime;
            }
          } else {
            if (fiber.mode & AsyncMode) {
              if (isBatchingInteractiveUpdates) {
                expirationTime = computeInteractiveExpiration(currentTime);
              } else {
                expirationTime = computeAsyncExpiration(currentTime);
              }
            } else {
              expirationTime = Sync;
            }
          }
          if (isBatchingInteractiveUpdates) {
            if (lowestPendingInteractiveExpirationTime === NoWork || expirationTime > lowestPendingInteractiveExpirationTime) {
              lowestPendingInteractiveExpirationTime = expirationTime;
            }
          }
          return expirationTime;
        }
        function suspendRoot(root, thenable, timeoutMs, suspendedTime) {
          if (timeoutMs >= 0 && nextLatestTimeoutMs < timeoutMs) {
            nextLatestTimeoutMs = timeoutMs;
          }
        }
        function retrySuspendedRoot(root, suspendedTime) {
          markPingedPriorityLevel(root, suspendedTime);
          var retryTime = findNextPendingPriorityLevel(root);
          if (retryTime !== NoWork) {
            requestRetry(root, retryTime);
          }
        }
        function scheduleWork$1(fiber, expirationTime) {
          recordScheduleUpdate();
          {
            if (fiber.tag === ClassComponent) {
              var instance = fiber.stateNode;
              warnAboutInvalidUpdates(instance);
            }
          }
          var node = fiber;
          while (node !== null) {
            if (node.expirationTime === NoWork || node.expirationTime > expirationTime) {
              node.expirationTime = expirationTime;
            }
            if (node.alternate !== null) {
              if (node.alternate.expirationTime === NoWork || node.alternate.expirationTime > expirationTime) {
                node.alternate.expirationTime = expirationTime;
              }
            }
            if (node.return === null) {
              if (node.tag === HostRoot) {
                var root = node.stateNode;
                if (!isWorking && nextRenderExpirationTime !== NoWork && expirationTime < nextRenderExpirationTime) {
                  interruptedBy = fiber;
                  resetStack();
                }
                markPendingPriorityLevel(root, expirationTime);
                var nextExpirationTimeToWorkOn = findNextPendingPriorityLevel(root);
                if (!isWorking || isCommitting$1 || nextRoot !== root) {
                  requestWork(root, nextExpirationTimeToWorkOn);
                }
                if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
                  invariant(false, 'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.');
                }
              } else {
                {
                  if (fiber.tag === ClassComponent) {
                    warnAboutUpdateOnUnmounted(fiber);
                  }
                }
                return;
              }
            }
            node = node.return;
          }
        }
        function recalculateCurrentTime() {
          mostRecentCurrentTimeMs = now() - originalStartTimeMs;
          mostRecentCurrentTime = msToExpirationTime(mostRecentCurrentTimeMs);
          return mostRecentCurrentTime;
        }
        function deferredUpdates(fn) {
          var previousExpirationContext = expirationContext;
          var currentTime = recalculateCurrentTime();
          expirationContext = computeAsyncExpiration(currentTime);
          try {
            return fn();
          } finally {
            expirationContext = previousExpirationContext;
          }
        }
        function syncUpdates(fn, a, b, c, d) {
          var previousExpirationContext = expirationContext;
          expirationContext = Sync;
          try {
            return fn(a, b, c, d);
          } finally {
            expirationContext = previousExpirationContext;
          }
        }
        var firstScheduledRoot = null;
        var lastScheduledRoot = null;
        var callbackExpirationTime = NoWork;
        var callbackID = -1;
        var isRendering = false;
        var nextFlushedRoot = null;
        var nextFlushedExpirationTime = NoWork;
        var lowestPendingInteractiveExpirationTime = NoWork;
        var deadlineDidExpire = false;
        var hasUnhandledError = false;
        var unhandledError = null;
        var deadline = null;
        var isBatchingUpdates = false;
        var isUnbatchingUpdates = false;
        var isBatchingInteractiveUpdates = false;
        var completedBatches = null;
        var NESTED_UPDATE_LIMIT = 1000;
        var nestedUpdateCount = 0;
        var timeHeuristicForUnitOfWork = 1;
        function scheduleCallbackWithExpiration(expirationTime) {
          if (callbackExpirationTime !== NoWork) {
            if (expirationTime > callbackExpirationTime) {
              return;
            } else {
              cancelDeferredCallback(callbackID);
            }
          } else {
            startRequestCallbackTimer();
          }
          var currentMs = now() - originalStartTimeMs;
          var expirationMs = expirationTimeToMs(expirationTime);
          var timeout = expirationMs - currentMs;
          callbackExpirationTime = expirationTime;
          callbackID = scheduleDeferredCallback(performAsyncWork, { timeout: timeout });
        }
        function requestRetry(root, expirationTime) {
          if (root.remainingExpirationTime === NoWork || root.remainingExpirationTime < expirationTime) {
            requestWork(root, expirationTime);
          }
        }
        function requestWork(root, expirationTime) {
          addRootToSchedule(root, expirationTime);
          if (isRendering) {
            return;
          }
          if (isBatchingUpdates) {
            if (isUnbatchingUpdates) {
              nextFlushedRoot = root;
              nextFlushedExpirationTime = Sync;
              performWorkOnRoot(root, Sync, false);
            }
            return;
          }
          if (expirationTime === Sync) {
            performSyncWork();
          } else {
            scheduleCallbackWithExpiration(expirationTime);
          }
        }
        function addRootToSchedule(root, expirationTime) {
          if (root.nextScheduledRoot === null) {
            root.remainingExpirationTime = expirationTime;
            if (lastScheduledRoot === null) {
              firstScheduledRoot = lastScheduledRoot = root;
              root.nextScheduledRoot = root;
            } else {
              lastScheduledRoot.nextScheduledRoot = root;
              lastScheduledRoot = root;
              lastScheduledRoot.nextScheduledRoot = firstScheduledRoot;
            }
          } else {
            var remainingExpirationTime = root.remainingExpirationTime;
            if (remainingExpirationTime === NoWork || expirationTime < remainingExpirationTime) {
              root.remainingExpirationTime = expirationTime;
            }
          }
        }
        function findHighestPriorityRoot() {
          var highestPriorityWork = NoWork;
          var highestPriorityRoot = null;
          if (lastScheduledRoot !== null) {
            var previousScheduledRoot = lastScheduledRoot;
            var root = firstScheduledRoot;
            while (root !== null) {
              var remainingExpirationTime = root.remainingExpirationTime;
              if (remainingExpirationTime === NoWork) {
                !(previousScheduledRoot !== null && lastScheduledRoot !== null) ? invariant(false, 'Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
                if (root === root.nextScheduledRoot) {
                  root.nextScheduledRoot = null;
                  firstScheduledRoot = lastScheduledRoot = null;
                  break;
                } else if (root === firstScheduledRoot) {
                  var next = root.nextScheduledRoot;
                  firstScheduledRoot = next;
                  lastScheduledRoot.nextScheduledRoot = next;
                  root.nextScheduledRoot = null;
                } else if (root === lastScheduledRoot) {
                  lastScheduledRoot = previousScheduledRoot;
                  lastScheduledRoot.nextScheduledRoot = firstScheduledRoot;
                  root.nextScheduledRoot = null;
                  break;
                } else {
                  previousScheduledRoot.nextScheduledRoot = root.nextScheduledRoot;
                  root.nextScheduledRoot = null;
                }
                root = previousScheduledRoot.nextScheduledRoot;
              } else {
                if (highestPriorityWork === NoWork || remainingExpirationTime < highestPriorityWork) {
                  highestPriorityWork = remainingExpirationTime;
                  highestPriorityRoot = root;
                }
                if (root === lastScheduledRoot) {
                  break;
                }
                previousScheduledRoot = root;
                root = root.nextScheduledRoot;
              }
            }
          }
          var previousFlushedRoot = nextFlushedRoot;
          if (previousFlushedRoot !== null && previousFlushedRoot === highestPriorityRoot && highestPriorityWork === Sync) {
            nestedUpdateCount++;
          } else {
            nestedUpdateCount = 0;
          }
          nextFlushedRoot = highestPriorityRoot;
          nextFlushedExpirationTime = highestPriorityWork;
        }
        function performAsyncWork(dl) {
          performWork(NoWork, true, dl);
        }
        function performSyncWork() {
          performWork(Sync, false, null);
        }
        function performWork(minExpirationTime, isAsync, dl) {
          deadline = dl;
          findHighestPriorityRoot();
          if (enableProfilerTimer) {
            resumeActualRenderTimerIfPaused();
          }
          if (enableUserTimingAPI && deadline !== null) {
            var didExpire = nextFlushedExpirationTime < recalculateCurrentTime();
            var timeout = expirationTimeToMs(nextFlushedExpirationTime);
            stopRequestCallbackTimer(didExpire, timeout);
          }
          if (isAsync) {
            while (nextFlushedRoot !== null && nextFlushedExpirationTime !== NoWork && (minExpirationTime === NoWork || minExpirationTime >= nextFlushedExpirationTime) && (!deadlineDidExpire || recalculateCurrentTime() >= nextFlushedExpirationTime)) {
              recalculateCurrentTime();
              performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime, !deadlineDidExpire);
              findHighestPriorityRoot();
            }
          } else {
            while (nextFlushedRoot !== null && nextFlushedExpirationTime !== NoWork && (minExpirationTime === NoWork || minExpirationTime >= nextFlushedExpirationTime)) {
              performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime, false);
              findHighestPriorityRoot();
            }
          }
          if (deadline !== null) {
            callbackExpirationTime = NoWork;
            callbackID = -1;
          }
          if (nextFlushedExpirationTime !== NoWork) {
            scheduleCallbackWithExpiration(nextFlushedExpirationTime);
          }
          deadline = null;
          deadlineDidExpire = false;
          finishRendering();
        }
        function flushRoot(root, expirationTime) {
          !!isRendering ? invariant(false, 'work.commit(): Cannot commit while already rendering. This likely means you attempted to commit from inside a lifecycle method.') : void 0;
          nextFlushedRoot = root;
          nextFlushedExpirationTime = expirationTime;
          performWorkOnRoot(root, expirationTime, false);
          performSyncWork();
          finishRendering();
        }
        function finishRendering() {
          nestedUpdateCount = 0;
          if (completedBatches !== null) {
            var batches = completedBatches;
            completedBatches = null;
            for (var i = 0; i < batches.length; i++) {
              var batch = batches[i];
              try {
                batch._onComplete();
              } catch (error) {
                if (!hasUnhandledError) {
                  hasUnhandledError = true;
                  unhandledError = error;
                }
              }
            }
          }
          if (hasUnhandledError) {
            var error = unhandledError;
            unhandledError = null;
            hasUnhandledError = false;
            throw error;
          }
        }
        function performWorkOnRoot(root, expirationTime, isAsync) {
          !!isRendering ? invariant(false, 'performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          isRendering = true;
          if (!isAsync) {
            var finishedWork = root.finishedWork;
            if (finishedWork !== null) {
              completeRoot(root, finishedWork, expirationTime);
            } else {
              root.finishedWork = null;
              finishedWork = renderRoot(root, expirationTime, false);
              if (finishedWork !== null) {
                completeRoot(root, finishedWork, expirationTime);
              }
            }
          } else {
            var _finishedWork = root.finishedWork;
            if (_finishedWork !== null) {
              completeRoot(root, _finishedWork, expirationTime);
            } else {
              root.finishedWork = null;
              _finishedWork = renderRoot(root, expirationTime, true);
              if (_finishedWork !== null) {
                if (!shouldYield()) {
                  completeRoot(root, _finishedWork, expirationTime);
                } else {
                  root.finishedWork = _finishedWork;
                  if (enableProfilerTimer) {
                    pauseActualRenderTimerIfRunning();
                  }
                }
              }
            }
          }
          isRendering = false;
        }
        function completeRoot(root, finishedWork, expirationTime) {
          var firstBatch = root.firstBatch;
          if (firstBatch !== null && firstBatch._expirationTime <= expirationTime) {
            if (completedBatches === null) {
              completedBatches = [firstBatch];
            } else {
              completedBatches.push(firstBatch);
            }
            if (firstBatch._defer) {
              root.finishedWork = finishedWork;
              root.remainingExpirationTime = NoWork;
              return;
            }
          }
          root.finishedWork = null;
          root.remainingExpirationTime = commitRoot(finishedWork);
        }
        function shouldYield() {
          if (deadline === null) {
            return false;
          }
          if (deadline.timeRemaining() > timeHeuristicForUnitOfWork) {
            return false;
          }
          deadlineDidExpire = true;
          return true;
        }
        function onUncaughtError(error) {
          !(nextFlushedRoot !== null) ? invariant(false, 'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          nextFlushedRoot.remainingExpirationTime = NoWork;
          if (!hasUnhandledError) {
            hasUnhandledError = true;
            unhandledError = error;
          }
        }
        function onBlock(remainingExpirationTime) {
          !(nextFlushedRoot !== null) ? invariant(false, 'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
          nextFlushedRoot.remainingExpirationTime = remainingExpirationTime;
        }
        function batchedUpdates$1(fn, a) {
          var previousIsBatchingUpdates = isBatchingUpdates;
          isBatchingUpdates = true;
          try {
            return fn(a);
          } finally {
            isBatchingUpdates = previousIsBatchingUpdates;
            if (!isBatchingUpdates && !isRendering) {
              performSyncWork();
            }
          }
        }
        function unbatchedUpdates(fn, a) {
          if (isBatchingUpdates && !isUnbatchingUpdates) {
            isUnbatchingUpdates = true;
            try {
              return fn(a);
            } finally {
              isUnbatchingUpdates = false;
            }
          }
          return fn(a);
        }
        function flushSync(fn, a) {
          !!isRendering ? invariant(false, 'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.') : void 0;
          var previousIsBatchingUpdates = isBatchingUpdates;
          isBatchingUpdates = true;
          try {
            return syncUpdates(fn, a);
          } finally {
            isBatchingUpdates = previousIsBatchingUpdates;
            performSyncWork();
          }
        }
        function interactiveUpdates$1(fn, a, b) {
          if (isBatchingInteractiveUpdates) {
            return fn(a, b);
          }
          if (!isBatchingUpdates && !isRendering && lowestPendingInteractiveExpirationTime !== NoWork) {
            performWork(lowestPendingInteractiveExpirationTime, false, null);
            lowestPendingInteractiveExpirationTime = NoWork;
          }
          var previousIsBatchingInteractiveUpdates = isBatchingInteractiveUpdates;
          var previousIsBatchingUpdates = isBatchingUpdates;
          isBatchingInteractiveUpdates = true;
          isBatchingUpdates = true;
          try {
            return fn(a, b);
          } finally {
            isBatchingInteractiveUpdates = previousIsBatchingInteractiveUpdates;
            isBatchingUpdates = previousIsBatchingUpdates;
            if (!isBatchingUpdates && !isRendering) {
              performSyncWork();
            }
          }
        }
        function flushInteractiveUpdates$1() {
          if (!isRendering && lowestPendingInteractiveExpirationTime !== NoWork) {
            performWork(lowestPendingInteractiveExpirationTime, false, null);
            lowestPendingInteractiveExpirationTime = NoWork;
          }
        }
        function flushControlled(fn) {
          var previousIsBatchingUpdates = isBatchingUpdates;
          isBatchingUpdates = true;
          try {
            syncUpdates(fn);
          } finally {
            isBatchingUpdates = previousIsBatchingUpdates;
            if (!isBatchingUpdates && !isRendering) {
              performWork(Sync, false, null);
            }
          }
        }
        var didWarnAboutNestedUpdates = void 0;
        {
          didWarnAboutNestedUpdates = false;
        }
        function getContextForSubtree(parentComponent) {
          if (!parentComponent) {
            return emptyObject;
          }
          var fiber = get(parentComponent);
          var parentContext = findCurrentUnmaskedContext(fiber);
          return isContextProvider(fiber) ? processChildContext(fiber, parentContext) : parentContext;
        }
        function scheduleRootUpdate(current, element, expirationTime, callback) {
          {
            if (ReactDebugCurrentFiber.phase === 'render' && ReactDebugCurrentFiber.current !== null && !didWarnAboutNestedUpdates) {
              didWarnAboutNestedUpdates = true;
              warning(false, 'Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentName(ReactDebugCurrentFiber.current) || 'Unknown');
            }
          }
          var update = createUpdate(expirationTime);
          update.payload = { element: element };
          callback = callback === undefined ? null : callback;
          if (callback !== null) {
            !(typeof callback === 'function') ? warning(false, 'render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback) : void 0;
            update.callback = callback;
          }
          enqueueUpdate(current, update, expirationTime);
          scheduleWork$1(current, expirationTime);
          return expirationTime;
        }
        function updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback) {
          var current = container.current;
          {
            if (ReactFiberInstrumentation_1.debugTool) {
              if (current.alternate === null) {
                ReactFiberInstrumentation_1.debugTool.onMountContainer(container);
              } else if (element === null) {
                ReactFiberInstrumentation_1.debugTool.onUnmountContainer(container);
              } else {
                ReactFiberInstrumentation_1.debugTool.onUpdateContainer(container);
              }
            }
          }
          var context = getContextForSubtree(parentComponent);
          if (container.context === null) {
            container.context = context;
          } else {
            container.pendingContext = context;
          }
          return scheduleRootUpdate(current, element, expirationTime, callback);
        }
        function findHostInstance(component) {
          var fiber = get(component);
          if (fiber === undefined) {
            if (typeof component.render === 'function') {
              invariant(false, 'Unable to find node on an unmounted component.');
            } else {
              invariant(false, 'Argument appears to not be a ReactComponent. Keys: %s', Object.keys(component));
            }
          }
          var hostFiber = findCurrentHostFiber(fiber);
          if (hostFiber === null) {
            return null;
          }
          return hostFiber.stateNode;
        }
        function createContainer(containerInfo, isAsync, hydrate) {
          return createFiberRoot(containerInfo, isAsync, hydrate);
        }
        function updateContainer(element, container, parentComponent, callback) {
          var current = container.current;
          var currentTime = recalculateCurrentTime();
          var expirationTime = computeExpirationForFiber(currentTime, current);
          return updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback);
        }
        function getPublicRootInstance(container) {
          var containerFiber = container.current;
          if (!containerFiber.child) {
            return null;
          }
          switch (containerFiber.child.tag) {
            case HostComponent:
              return getPublicInstance(containerFiber.child.stateNode);
            default:
              return containerFiber.child.stateNode;
          }
        }
        function findHostInstanceWithNoPortals(fiber) {
          var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
          if (hostFiber === null) {
            return null;
          }
          return hostFiber.stateNode;
        }
        function injectIntoDevTools(devToolsConfig) {
          var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
          return injectInternals(_assign({}, devToolsConfig, {
            findHostInstanceByFiber: function (fiber) {
              var hostFiber = findCurrentHostFiber(fiber);
              if (hostFiber === null) {
                return null;
              }
              return hostFiber.stateNode;
            },
            findFiberByHostInstance: function (instance) {
              if (!findFiberByHostInstance) {
                return null;
              }
              return findFiberByHostInstance(instance);
            }
          }));
        }
        var DOMRenderer = Object.freeze({
          updateContainerAtExpirationTime: updateContainerAtExpirationTime,
          createContainer: createContainer,
          updateContainer: updateContainer,
          flushRoot: flushRoot,
          requestWork: requestWork,
          computeUniqueAsyncExpiration: computeUniqueAsyncExpiration,
          batchedUpdates: batchedUpdates$1,
          unbatchedUpdates: unbatchedUpdates,
          deferredUpdates: deferredUpdates,
          syncUpdates: syncUpdates,
          interactiveUpdates: interactiveUpdates$1,
          flushInteractiveUpdates: flushInteractiveUpdates$1,
          flushControlled: flushControlled,
          flushSync: flushSync,
          getPublicRootInstance: getPublicRootInstance,
          findHostInstance: findHostInstance,
          findHostInstanceWithNoPortals: findHostInstanceWithNoPortals,
          injectIntoDevTools: injectIntoDevTools
        });
        function createPortal$1(children, containerInfo, implementation) {
          var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          return {
            $$typeof: REACT_PORTAL_TYPE,
            key: key == null ? null : '' + key,
            children: children,
            containerInfo: containerInfo,
            implementation: implementation
          };
        }
        var ReactVersion = '16.4.0';
        var topLevelUpdateWarnings = void 0;
        var warnOnInvalidCallback = void 0;
        var didWarnAboutUnstableCreatePortal = false;
        {
          if (typeof Map !== 'function' || Map.prototype == null || typeof Map.prototype.forEach !== 'function' || typeof Set !== 'function' || Set.prototype == null || typeof Set.prototype.clear !== 'function' || typeof Set.prototype.forEach !== 'function') {
            warning(false, 'React depends on Map and Set built-in types. Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
          }
          topLevelUpdateWarnings = function (container) {
            if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
              var hostInstance = findHostInstanceWithNoPortals(container._reactRootContainer._internalRoot.current);
              if (hostInstance) {
                !(hostInstance.parentNode === container) ? warning(false, 'render(...): It looks like the React-rendered content of this ' + 'container was removed without using React. This is not ' + 'supported and will cause errors. Instead, call ' + 'ReactDOM.unmountComponentAtNode to empty a container.') : void 0;
              }
            }
            var isRootRenderedBySomeReact = !!container._reactRootContainer;
            var rootEl = getReactRootElementInContainer(container);
            var hasNonRootReactChild = !!(rootEl && getInstanceFromNode$1(rootEl));
            !(!hasNonRootReactChild || isRootRenderedBySomeReact) ? warning(false, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : void 0;
            !(container.nodeType !== ELEMENT_NODE || !container.tagName || container.tagName.toUpperCase() !== 'BODY') ? warning(false, 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : void 0;
          };
          warnOnInvalidCallback = function (callback, callerName) {
            !(callback === null || typeof callback === 'function') ? warning(false, '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback) : void 0;
          };
        }
        injection$2.injectFiberControlledHostComponent(ReactDOMFiberComponent);
        function ReactBatch(root) {
          var expirationTime = computeUniqueAsyncExpiration();
          this._expirationTime = expirationTime;
          this._root = root;
          this._next = null;
          this._callbacks = null;
          this._didComplete = false;
          this._hasChildren = false;
          this._children = null;
          this._defer = true;
        }
        ReactBatch.prototype.render = function (children) {
          !this._defer ? invariant(false, 'batch.render: Cannot render a batch that already committed.') : void 0;
          this._hasChildren = true;
          this._children = children;
          var internalRoot = this._root._internalRoot;
          var expirationTime = this._expirationTime;
          var work = new ReactWork();
          updateContainerAtExpirationTime(children, internalRoot, null, expirationTime, work._onCommit);
          return work;
        };
        ReactBatch.prototype.then = function (onComplete) {
          if (this._didComplete) {
            onComplete();
            return;
          }
          var callbacks = this._callbacks;
          if (callbacks === null) {
            callbacks = this._callbacks = [];
          }
          callbacks.push(onComplete);
        };
        ReactBatch.prototype.commit = function () {
          var internalRoot = this._root._internalRoot;
          var firstBatch = internalRoot.firstBatch;
          !(this._defer && firstBatch !== null) ? invariant(false, 'batch.commit: Cannot commit a batch multiple times.') : void 0;
          if (!this._hasChildren) {
            this._next = null;
            this._defer = false;
            return;
          }
          var expirationTime = this._expirationTime;
          if (firstBatch !== this) {
            if (this._hasChildren) {
              expirationTime = this._expirationTime = firstBatch._expirationTime;
              this.render(this._children);
            }
            var previous = null;
            var batch = firstBatch;
            while (batch !== this) {
              previous = batch;
              batch = batch._next;
            }
            !(previous !== null) ? invariant(false, 'batch.commit: Cannot commit a batch multiple times.') : void 0;
            previous._next = batch._next;
            this._next = firstBatch;
            firstBatch = internalRoot.firstBatch = this;
          }
          this._defer = false;
          flushRoot(internalRoot, expirationTime);
          var next = this._next;
          this._next = null;
          firstBatch = internalRoot.firstBatch = next;
          if (firstBatch !== null && firstBatch._hasChildren) {
            firstBatch.render(firstBatch._children);
          }
        };
        ReactBatch.prototype._onComplete = function () {
          if (this._didComplete) {
            return;
          }
          this._didComplete = true;
          var callbacks = this._callbacks;
          if (callbacks === null) {
            return;
          }
          for (var i = 0; i < callbacks.length; i++) {
            var _callback = callbacks[i];
            _callback();
          }
        };
        function ReactWork() {
          this._callbacks = null;
          this._didCommit = false;
          this._onCommit = this._onCommit.bind(this);
        }
        ReactWork.prototype.then = function (onCommit) {
          if (this._didCommit) {
            onCommit();
            return;
          }
          var callbacks = this._callbacks;
          if (callbacks === null) {
            callbacks = this._callbacks = [];
          }
          callbacks.push(onCommit);
        };
        ReactWork.prototype._onCommit = function () {
          if (this._didCommit) {
            return;
          }
          this._didCommit = true;
          var callbacks = this._callbacks;
          if (callbacks === null) {
            return;
          }
          for (var i = 0; i < callbacks.length; i++) {
            var _callback2 = callbacks[i];
            !(typeof _callback2 === 'function') ? invariant(false, 'Invalid argument passed as callback. Expected a function. Instead received: %s', _callback2) : void 0;
            _callback2();
          }
        };
        function ReactRoot(container, isAsync, hydrate) {
          var root = createContainer(container, isAsync, hydrate);
          this._internalRoot = root;
        }
        ReactRoot.prototype.render = function (children, callback) {
          var root = this._internalRoot;
          var work = new ReactWork();
          callback = callback === undefined ? null : callback;
          {
            warnOnInvalidCallback(callback, 'render');
          }
          if (callback !== null) {
            work.then(callback);
          }
          updateContainer(children, root, null, work._onCommit);
          return work;
        };
        ReactRoot.prototype.unmount = function (callback) {
          var root = this._internalRoot;
          var work = new ReactWork();
          callback = callback === undefined ? null : callback;
          {
            warnOnInvalidCallback(callback, 'render');
          }
          if (callback !== null) {
            work.then(callback);
          }
          updateContainer(null, root, null, work._onCommit);
          return work;
        };
        ReactRoot.prototype.legacy_renderSubtreeIntoContainer = function (parentComponent, children, callback) {
          var root = this._internalRoot;
          var work = new ReactWork();
          callback = callback === undefined ? null : callback;
          {
            warnOnInvalidCallback(callback, 'render');
          }
          if (callback !== null) {
            work.then(callback);
          }
          updateContainer(children, root, parentComponent, work._onCommit);
          return work;
        };
        ReactRoot.prototype.createBatch = function () {
          var batch = new ReactBatch(this);
          var expirationTime = batch._expirationTime;
          var internalRoot = this._internalRoot;
          var firstBatch = internalRoot.firstBatch;
          if (firstBatch === null) {
            internalRoot.firstBatch = batch;
            batch._next = null;
          } else {
            var insertAfter = null;
            var insertBefore = firstBatch;
            while (insertBefore !== null && insertBefore._expirationTime <= expirationTime) {
              insertAfter = insertBefore;
              insertBefore = insertBefore._next;
            }
            batch._next = insertBefore;
            if (insertAfter !== null) {
              insertAfter._next = batch;
            }
          }
          return batch;
        };
        function isValidContainer(node) {
          return !!(node && (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE || node.nodeType === COMMENT_NODE && node.nodeValue === ' react-mount-point-unstable '));
        }
        function getReactRootElementInContainer(container) {
          if (!container) {
            return null;
          }
          if (container.nodeType === DOCUMENT_NODE) {
            return container.documentElement;
          } else {
            return container.firstChild;
          }
        }
        function shouldHydrateDueToLegacyHeuristic(container) {
          var rootElement = getReactRootElementInContainer(container);
          return !!(rootElement && rootElement.nodeType === ELEMENT_NODE && rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME));
        }
        injection$3.injectRenderer(DOMRenderer);
        var warnedAboutHydrateAPI = false;
        function legacyCreateRootFromDOMContainer(container, forceHydrate) {
          var shouldHydrate = forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
          if (!shouldHydrate) {
            var warned = false;
            var rootSibling = void 0;
            while (rootSibling = container.lastChild) {
              {
                if (!warned && rootSibling.nodeType === ELEMENT_NODE && rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)) {
                  warned = true;
                  warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.');
                }
              }
              container.removeChild(rootSibling);
            }
          }
          {
            if (shouldHydrate && !forceHydrate && !warnedAboutHydrateAPI) {
              warnedAboutHydrateAPI = true;
              lowPriorityWarning$1(false, 'render(): Calling ReactDOM.render() to hydrate server-rendered markup ' + 'will stop working in React v17. Replace the ReactDOM.render() call ' + 'with ReactDOM.hydrate() if you want React to attach to the server HTML.');
            }
          }
          var isAsync = false;
          return new ReactRoot(container, isAsync, shouldHydrate);
        }
        function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
          !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element.') : void 0;
          {
            topLevelUpdateWarnings(container);
          }
          var root = container._reactRootContainer;
          if (!root) {
            root = container._reactRootContainer = legacyCreateRootFromDOMContainer(container, forceHydrate);
            if (typeof callback === 'function') {
              var originalCallback = callback;
              callback = function () {
                var instance = getPublicRootInstance(root._internalRoot);
                originalCallback.call(instance);
              };
            }
            unbatchedUpdates(function () {
              if (parentComponent != null) {
                root.legacy_renderSubtreeIntoContainer(parentComponent, children, callback);
              } else {
                root.render(children, callback);
              }
            });
          } else {
            if (typeof callback === 'function') {
              var _originalCallback = callback;
              callback = function () {
                var instance = getPublicRootInstance(root._internalRoot);
                _originalCallback.call(instance);
              };
            }
            if (parentComponent != null) {
              root.legacy_renderSubtreeIntoContainer(parentComponent, children, callback);
            } else {
              root.render(children, callback);
            }
          }
          return getPublicRootInstance(root._internalRoot);
        }
        function createPortal(children, container) {
          var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element.') : void 0;
          return createPortal$1(children, container, null, key);
        }
        var ReactDOM = {
          createPortal: createPortal,
          findDOMNode: function (componentOrElement) {
            {
              var owner = ReactCurrentOwner.current;
              if (owner !== null && owner.stateNode !== null) {
                var warnedAboutRefsInRender = owner.stateNode._warnedAboutRefsInRender;
                !warnedAboutRefsInRender ? warning(false, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(owner) || 'A component') : void 0;
                owner.stateNode._warnedAboutRefsInRender = true;
              }
            }
            if (componentOrElement == null) {
              return null;
            }
            if (componentOrElement.nodeType === ELEMENT_NODE) {
              return componentOrElement;
            }
            return findHostInstance(componentOrElement);
          },
          hydrate: function (element, container, callback) {
            return legacyRenderSubtreeIntoContainer(null, element, container, true, callback);
          },
          render: function (element, container, callback) {
            return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
          },
          unstable_renderSubtreeIntoContainer: function (parentComponent, element, containerNode, callback) {
            !(parentComponent != null && has(parentComponent)) ? invariant(false, 'parentComponent must be a valid React Component') : void 0;
            return legacyRenderSubtreeIntoContainer(parentComponent, element, containerNode, false, callback);
          },
          unmountComponentAtNode: function (container) {
            !isValidContainer(container) ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : void 0;
            if (container._reactRootContainer) {
              {
                var rootEl = getReactRootElementInContainer(container);
                var renderedByDifferentReact = rootEl && !getInstanceFromNode$1(rootEl);
                !!renderedByDifferentReact ? warning(false, "unmountComponentAtNode(): The node you're attempting to unmount " + 'was rendered by another copy of React.') : void 0;
              }
              unbatchedUpdates(function () {
                legacyRenderSubtreeIntoContainer(null, null, container, false, function () {
                  container._reactRootContainer = null;
                });
              });
              return true;
            } else {
              {
                var _rootEl = getReactRootElementInContainer(container);
                var hasNonRootReactChild = !!(_rootEl && getInstanceFromNode$1(_rootEl));
                var isContainerReactRoot = container.nodeType === 1 && isValidContainer(container.parentNode) && !!container.parentNode._reactRootContainer;
                !!hasNonRootReactChild ? warning(false, "unmountComponentAtNode(): The node you're attempting to unmount " + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : void 0;
              }
              return false;
            }
          },
          unstable_createPortal: function () {
            if (!didWarnAboutUnstableCreatePortal) {
              didWarnAboutUnstableCreatePortal = true;
              lowPriorityWarning$1(false, 'The ReactDOM.unstable_createPortal() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactDOM.createPortal() instead. It has the exact same API, ' + 'but without the "unstable_" prefix.');
            }
            return createPortal.apply(undefined, arguments);
          },
          unstable_batchedUpdates: batchedUpdates$1,
          unstable_deferredUpdates: deferredUpdates,
          flushSync: flushSync,
          unstable_flushControlled: flushControlled,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            EventPluginHub: EventPluginHub,
            EventPluginRegistry: EventPluginRegistry,
            EventPropagators: EventPropagators,
            ReactControlledComponent: ReactControlledComponent,
            ReactDOMComponentTree: ReactDOMComponentTree,
            ReactDOMEventListener: ReactDOMEventListener
          }
        };
        ReactDOM.unstable_createRoot = function createRoot(container, options) {
          var hydrate = options != null && options.hydrate === true;
          return new ReactRoot(container, true, hydrate);
        };
        var foundDevTools = injectIntoDevTools({
          findFiberByHostInstance: getClosestInstanceFromNode,
          bundleType: 1,
          version: ReactVersion,
          rendererPackageName: 'react-dom'
        });
        {
          if (!foundDevTools && ExecutionEnvironment.canUseDOM && window.top === window.self) {
            if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
              var protocol = window.location.protocol;
              if (/^(https?|file):$/.test(protocol)) {
                console.info('%cDownload the React DevTools ' + 'for a better development experience: ' + 'https://fb.me/react-devtools' + (protocol === 'file:' ? '\nYou might need to use a local HTTP server (instead of file://): ' + 'https://fb.me/react-devtools-faq' : ''), 'font-weight:bold');
              }
            }
          }
        }
        var ReactDOM$2 = Object.freeze({ default: ReactDOM });
        var ReactDOM$3 = ReactDOM$2 && ReactDOM || ReactDOM$2;
        var reactDom = ReactDOM$3.default ? ReactDOM$3.default : ReactDOM$3;
        module.exports = reactDom;
      })();
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@16.4.0/index.js', ['npm:react-dom@16.4.0/cjs/react-dom.production.min.js', 'npm:react-dom@16.4.0/cjs/react-dom.development.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
        return;
      }
      if ('production' !== 'production') {
        throw new Error('^_^');
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if ('production' === 'production') {
      checkDCE();
      module.exports = $__require('npm:react-dom@16.4.0/cjs/react-dom.production.min.js');
    } else {
      module.exports = $__require('npm:react-dom@16.4.0/cjs/react-dom.development.js');
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:react-dom@16.4.0.js", ["npm:react-dom@16.4.0/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:react-dom@16.4.0/index.js");
});
System.registerDynamic('npm:object-assign@4.1.1/index.js', [], true, function ($__require, exports, module) {
	/*
 object-assign
 (c) Sindre Sorhus
 @license MIT
 */

	'use strict';
	/* eslint-disable no-unused-vars */

	var global = this || self,
	    GLOBAL = global;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
});
System.registerDynamic("npm:object-assign@4.1.1.js", ["npm:object-assign@4.1.1/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:object-assign@4.1.1/index.js");
});
System.registerDynamic('npm:prop-types@15.6.2/checkPropTypes.js', ['npm:prop-types@15.6.2/lib/ReactPropTypesSecret.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var printWarning = function () {};
    if ('production' !== 'production') {
      var ReactPropTypesSecret = $__require('npm:prop-types@15.6.2/lib/ReactPropTypesSecret.js');
      var loggedTypeFailures = {};
      printWarning = function (text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if ('production' !== 'production') {
        for (var typeSpecName in typeSpecs) {
          if (typeSpecs.hasOwnProperty(typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : '';
              printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
            }
          }
        }
      }
    }
    module.exports = checkPropTypes;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:prop-types@15.6.2/factoryWithTypeCheckers.js', ['npm:object-assign@4.1.1.js', 'npm:prop-types@15.6.2/lib/ReactPropTypesSecret.js', 'npm:prop-types@15.6.2/checkPropTypes.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var assign = $__require('npm:object-assign@4.1.1.js');
    var ReactPropTypesSecret = $__require('npm:prop-types@15.6.2/lib/ReactPropTypesSecret.js');
    var checkPropTypes = $__require('npm:prop-types@15.6.2/checkPropTypes.js');
    var printWarning = function () {};
    if ('production' !== 'production') {
      printWarning = function (text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function (isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }
      var ANONYMOUS = '<<anonymous>>';
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if ('production' !== 'production') {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
              err.name = 'Invariant Violation';
              throw err;
            } else if ('production' !== 'production' && typeof console !== 'undefined') {
              var cacheKey = componentName + ':' + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          'production' !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (propValue.hasOwnProperty(key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          'production' !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
              return null;
            }
          }
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === 'symbol') {
          return true;
        }
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:prop-types@15.6.2/lib/ReactPropTypesSecret.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  module.exports = ReactPropTypesSecret;
});
System.registerDynamic('npm:prop-types@15.6.2/factoryWithThrowingShims.js', ['npm:prop-types@15.6.2/lib/ReactPropTypesSecret.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactPropTypesSecret = $__require('npm:prop-types@15.6.2/lib/ReactPropTypesSecret.js');
  function emptyFunction() {}
  module.exports = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    ;
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    ;
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim
    };
    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
});
System.registerDynamic('npm:prop-types@15.6.2/index.js', ['npm:prop-types@15.6.2/factoryWithTypeCheckers.js', 'npm:prop-types@15.6.2/factoryWithThrowingShims.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    if ('production' !== 'production') {
      var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;
      var isValidElement = function (object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      };
      var throwOnDirectAccess = true;
      module.exports = $__require('npm:prop-types@15.6.2/factoryWithTypeCheckers.js')(isValidElement, throwOnDirectAccess);
    } else {
      module.exports = $__require('npm:prop-types@15.6.2/factoryWithThrowingShims.js')();
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:prop-types@15.6.2.js", ["npm:prop-types@15.6.2/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:prop-types@15.6.2/index.js");
});
System.registerDynamic('npm:react-transition-group@2.3.1/utils/PropTypes.js', ['npm:prop-types@15.6.2.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.__esModule = true;
  exports.classNamesShape = exports.timeoutsShape = undefined;
  exports.transitionTimeout = transitionTimeout;

  var _propTypes = $__require('npm:prop-types@15.6.2.js');

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;

    return function (props) {
      // If the transition is enabled
      if (props[enabledPropName]) {
        // If no timeout duration is provided
        if (props[timeoutPropName] == null) {
          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

          // If the duration isn't a number
        } else if (typeof props[timeoutPropName] !== 'number') {
          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
        }
      }

      return null;
    };
  }

  var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
    enter: _propTypes2.default.number,
    exit: _propTypes2.default.number
  }).isRequired]);

  var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    active: _propTypes2.default.string
  }), _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    enterDone: _propTypes2.default.string,
    enterActive: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    exitDone: _propTypes2.default.string,
    exitActive: _propTypes2.default.string
  })]);
});
System.registerDynamic('npm:process@0.11.10/browser.js', [], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;

    process.listeners = function (name) {
        return [];
    };

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
});
System.registerDynamic("npm:process@0.11.10.js", ["npm:process@0.11.10/browser.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:process@0.11.10/browser.js");
});
System.registerDynamic('github:jspm/nodelibs-process@0.1.2/index.js', ['npm:process@0.11.10.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = System._nodeRequire ? process : $__require('npm:process@0.11.10.js');
});
System.registerDynamic("github:jspm/nodelibs-process@0.1.2.js", ["github:jspm/nodelibs-process@0.1.2/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("github:jspm/nodelibs-process@0.1.2/index.js");
});
System.registerDynamic('npm:react-transition-group@2.3.1/Transition.js', ['npm:prop-types@15.6.2.js', 'npm:react@16.4.1.js', 'npm:react-dom@16.4.0.js', 'npm:react-transition-group@2.3.1/utils/PropTypes.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    exports.__esModule = true;
    exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
    var _propTypes = $__require('npm:prop-types@15.6.2.js');
    var PropTypes = _interopRequireWildcard(_propTypes);
    var _react = $__require('npm:react@16.4.1.js');
    var _react2 = _interopRequireDefault(_react);
    var _reactDom = $__require('npm:react-dom@16.4.0.js');
    var _reactDom2 = _interopRequireDefault(_reactDom);
    var _PropTypes = $__require('npm:react-transition-group@2.3.1/utils/PropTypes.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
    var EXITED = exports.EXITED = 'exited';
    var ENTERING = exports.ENTERING = 'entering';
    var ENTERED = exports.ENTERED = 'entered';
    var EXITING = exports.EXITING = 'exiting';
    var Transition = function (_React$Component) {
      _inherits(Transition, _React$Component);
      function Transition(props, context) {
        _classCallCheck(this, Transition);
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
        var parentGroup = context.transitionGroup;
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus = void 0;
        _this.nextStatus = null;
        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.nextStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }
        _this.state = { status: initialStatus };
        _this.nextCallback = null;
        return _this;
      }
      Transition.prototype.getChildContext = function getChildContext() {
        return { transitionGroup: null };
      };
      Transition.prototype.componentDidMount = function componentDidMount() {
        this.updateStatus(true);
      };
      Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _ref = this.pendingState || this.state,
            status = _ref.status;
        if (nextProps.in) {
          if (status === UNMOUNTED) {
            this.setState({ status: EXITED });
          }
          if (status !== ENTERING && status !== ENTERED) {
            this.nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            this.nextStatus = EXITING;
          }
        }
      };
      Transition.prototype.componentDidUpdate = function componentDidUpdate() {
        this.updateStatus();
      };
      Transition.prototype.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };
      Transition.prototype.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit = void 0,
            enter = void 0,
            appear = void 0;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== 'number') {
          exit = timeout.exit;
          enter = timeout.enter;
          appear = timeout.appear;
        }
        return {
          exit: exit,
          enter: enter,
          appear: appear
        };
      };
      Transition.prototype.updateStatus = function updateStatus() {
        var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var nextStatus = this.nextStatus;
        if (nextStatus !== null) {
          this.nextStatus = null;
          this.cancelNextCallback();
          var node = _reactDom2.default.findDOMNode(this);
          if (nextStatus === ENTERING) {
            this.performEnter(node, mounting);
          } else {
            this.performExit(node);
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({ status: UNMOUNTED });
        }
      };
      Transition.prototype.performEnter = function performEnter(node, mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
        var timeouts = this.getTimeouts();
        if (!mounting && !enter) {
          this.safeSetState({ status: ENTERED }, function () {
            _this2.props.onEntered(node);
          });
          return;
        }
        this.props.onEnter(node, appearing);
        this.safeSetState({ status: ENTERING }, function () {
          _this2.props.onEntering(node, appearing);
          _this2.onTransitionEnd(node, timeouts.enter, function () {
            _this2.safeSetState({ status: ENTERED }, function () {
              _this2.props.onEntered(node, appearing);
            });
          });
        });
      };
      Transition.prototype.performExit = function performExit(node) {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        if (!exit) {
          this.safeSetState({ status: EXITED }, function () {
            _this3.props.onExited(node);
          });
          return;
        }
        this.props.onExit(node);
        this.safeSetState({ status: EXITING }, function () {
          _this3.props.onExiting(node);
          _this3.onTransitionEnd(node, timeouts.exit, function () {
            _this3.safeSetState({ status: EXITED }, function () {
              _this3.props.onExited(node);
            });
          });
        });
      };
      Transition.prototype.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };
      Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
        var _this4 = this;
        this.pendingState = nextState;
        callback = this.setNextCallback(callback);
        this.setState(nextState, function () {
          _this4.pendingState = null;
          callback();
        });
      };
      Transition.prototype.setNextCallback = function setNextCallback(callback) {
        var _this5 = this;
        var active = true;
        this.nextCallback = function (event) {
          if (active) {
            active = false;
            _this5.nextCallback = null;
            callback(event);
          }
        };
        this.nextCallback.cancel = function () {
          active = false;
        };
        return this.nextCallback;
      };
      Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
        this.setNextCallback(handler);
        if (node) {
          if (this.props.addEndListener) {
            this.props.addEndListener(node, this.nextCallback);
          }
          if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
          }
        } else {
          setTimeout(this.nextCallback, 0);
        }
      };
      Transition.prototype.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
          return null;
        }
        var _props = this.props,
            children = _props.children,
            childProps = _objectWithoutProperties(_props, ['children']);
        delete childProps.in;
        delete childProps.mountOnEnter;
        delete childProps.unmountOnExit;
        delete childProps.appear;
        delete childProps.enter;
        delete childProps.exit;
        delete childProps.timeout;
        delete childProps.addEndListener;
        delete childProps.onEnter;
        delete childProps.onEntering;
        delete childProps.onEntered;
        delete childProps.onExit;
        delete childProps.onExiting;
        delete childProps.onExited;
        if (typeof children === 'function') {
          return children(status, childProps);
        }
        var child = _react2.default.Children.only(children);
        return _react2.default.cloneElement(child, childProps);
      };
      return Transition;
    }(_react2.default.Component);
    Transition.contextTypes = { transitionGroup: PropTypes.object };
    Transition.childContextTypes = { transitionGroup: function transitionGroup() {} };
    Transition.propTypes = 'production' !== "production" ? {
      children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,
      in: PropTypes.bool,
      mountOnEnter: PropTypes.bool,
      unmountOnExit: PropTypes.bool,
      appear: PropTypes.bool,
      enter: PropTypes.bool,
      exit: PropTypes.bool,
      timeout: function timeout(props) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var pt = _PropTypes.timeoutsShape;
        if (!props.addEndListener) pt = pt.isRequired;
        return pt.apply(undefined, [props].concat(args));
      },
      addEndListener: PropTypes.func,
      onEnter: PropTypes.func,
      onEntering: PropTypes.func,
      onEntered: PropTypes.func,
      onExit: PropTypes.func,
      onExiting: PropTypes.func,
      onExited: PropTypes.func
    } : {};
    function noop() {}
    Transition.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop,
      onEntering: noop,
      onEntered: noop,
      onExit: noop,
      onExiting: noop,
      onExited: noop
    };
    Transition.UNMOUNTED = 0;
    Transition.EXITED = 1;
    Transition.ENTERING = 2;
    Transition.ENTERED = 3;
    Transition.EXITING = 4;
    exports.default = Transition;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-transition-group@2.3.1/index.js', ['npm:react-transition-group@2.3.1/CSSTransition.js', 'npm:react-transition-group@2.3.1/ReplaceTransition.js', 'npm:react-transition-group@2.3.1/TransitionGroup.js', 'npm:react-transition-group@2.3.1/Transition.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _CSSTransition = $__require('npm:react-transition-group@2.3.1/CSSTransition.js');
  var _CSSTransition2 = _interopRequireDefault(_CSSTransition);
  var _ReplaceTransition = $__require('npm:react-transition-group@2.3.1/ReplaceTransition.js');
  var _ReplaceTransition2 = _interopRequireDefault(_ReplaceTransition);
  var _TransitionGroup = $__require('npm:react-transition-group@2.3.1/TransitionGroup.js');
  var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);
  var _Transition = $__require('npm:react-transition-group@2.3.1/Transition.js');
  var _Transition2 = _interopRequireDefault(_Transition);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  module.exports = {
    Transition: _Transition2.default,
    TransitionGroup: _TransitionGroup2.default,
    ReplaceTransition: _ReplaceTransition2.default,
    CSSTransition: _CSSTransition2.default
  };
});
System.registerDynamic("npm:react-transition-group@2.3.1.js", ["npm:react-transition-group@2.3.1/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:react-transition-group@2.3.1/index.js");
});
System.register('components/fadeAndSlideTransition.js', ['npm:babel-runtime@5.8.38/core-js/object/assign.js', 'npm:react@16.4.1.js', 'npm:react-transition-group@2.3.1.js'], function (_export) {
    var _Object$assign, React, Transition;

    function FadeAndSlideTransition(_ref) {
        var children = _ref.children;
        var duration = _ref.duration;
        var inProp = _ref['in'];

        var defaultStyle = {
            transition: duration + 'ms ease-in',
            transitionProperty: 'opacity, transform'
        };
        var transitionStyles = {
            entering: {
                opacity: 0,
                transform: 'translate(0, -100%)'
            },
            entered: {
                opacity: 1,
                transform: 'translate(0, 0)'
            },
            exiting: {
                opacity: 0,
                transform: 'translate(0, 0)'
            }
        };

        return React.createElement(
            Transition,
            { 'in': inProp, timeout: {
                    enter: 0,
                    exit: duration
                } },
            function (status) {
                if (status === 'exited') {
                    return null;
                }
                var currentStyles = transitionStyles[status];
                return React.cloneElement(children, {
                    style: _Object$assign({}, defaultStyle, currentStyles)
                });
            }
        );
    }

    return {
        setters: [function (_npmBabelRuntime5838CoreJsObjectAssignJs) {
            _Object$assign = _npmBabelRuntime5838CoreJsObjectAssignJs['default'];
        }, function (_npmReact1641Js) {
            React = _npmReact1641Js['default'];
        }, function (_npmReactTransitionGroup231Js) {
            Transition = _npmReactTransitionGroup231Js.Transition;
        }],
        execute: function () {
            'use strict';

            _export('default', FadeAndSlideTransition);
        }
    };
});

System.register('components/inputItemGrid.js', ['npm:babel-runtime@5.8.38/helpers/extends.js', 'npm:react@16.4.1.js', 'npm:react-redux@5.0.7.js', 'components/inputItem.js', 'npm:react-transition-group@2.3.1.js', 'components/fadeAndSlideTransition.js'], function (_export) {
	var _extends, React, connect, InputItem, TransitionGroup, FadeAndSlideTransition, mapStateToProps, List, InputItemGrid;

	return {
		setters: [function (_npmBabelRuntime5838HelpersExtendsJs) {
			_extends = _npmBabelRuntime5838HelpersExtendsJs['default'];
		}, function (_npmReact1641Js) {
			React = _npmReact1641Js['default'];
		}, function (_npmReactRedux507Js) {
			connect = _npmReactRedux507Js.connect;
		}, function (_componentsInputItemJs) {
			InputItem = _componentsInputItemJs['default'];
		}, function (_npmReactTransitionGroup231Js) {
			TransitionGroup = _npmReactTransitionGroup231Js.TransitionGroup;
		}, function (_componentsFadeAndSlideTransitionJs) {
			FadeAndSlideTransition = _componentsFadeAndSlideTransitionJs['default'];
		}],
		execute: function () {
			'use strict';

			mapStateToProps = function mapStateToProps(state) {
				return {
					inputItems: state.inputItems,
					isLoading: state.isLoading,
					saveSuccessful: state.saveSuccessful
				};
			};

			List = function List(_ref) {
				var children = _ref.children;

				return React.createElement(
					'ul',
					{ className: 'input-item-grid' },
					children
				);
			};

			InputItemGrid = function InputItemGrid(_ref2) {
				var inputItems = _ref2.inputItems;
				var isLoading = _ref2.isLoading;
				var saveSuccessful = _ref2.saveSuccessful;
				return React.createElement(
					'main',
					{ className: 'main' },
					React.createElement(
						'div',
						{ className: 'wrapper' },
						saveSuccessful ? React.createElement(
							'div',
							{ className: 'save-status' },
							'URL updated. Share it with your friends!'
						) : '',
						isLoading ? React.createElement(
							'div',
							{ className: 'loading' },
							React.createElement('span', { className: 'icon-spinner' }),
							'Loading'
						) : '',
						React.createElement(
							TransitionGroup,
							{ component: List },
							inputItems.map(function (item, index) {
								return React.createElement(
									FadeAndSlideTransition,
									{ duration: 250, key: item.id },
									React.createElement(InputItem, _extends({
										key: item.id,
										index: index,
										itemCount: inputItems.length
									}, item))
								);
							})
						)
					)
				);
			};

			_export('default', connect(mapStateToProps)(InputItemGrid));
		}
	};
});

System.register('utils/utils.js', [], function (_export) {
	'use strict';

	function generateRandomId() {
		var prefix = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

		return '' + (prefix ? prefix + '-' : '') + new Date().getTime();
	}

	function getUrlSegment() {
		var index = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

		var segments = window.location.pathname.split('/');
		return segments[index] ? segments[index] : null;
	}

	return {
		setters: [],
		execute: function () {
			_export('generateRandomId', generateRandomId);

			_export('getUrlSegment', getUrlSegment);
		}
	};
});

System.registerDynamic("npm:core-js@1.2.7/library/modules/$.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.cof.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iobject.js', ['npm:core-js@1.2.7/library/modules/$.cof.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('npm:core-js@1.2.7/library/modules/$.cof.js');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.object-assign.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.to-object.js', 'npm:core-js@1.2.7/library/modules/$.iobject.js', 'npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      toObject = $__require('npm:core-js@1.2.7/library/modules/$.to-object.js'),
      IObject = $__require('npm:core-js@1.2.7/library/modules/$.iobject.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.fails.js')(function () {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
    return T;
  } : Object.assign;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.object.assign.js', ['npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.object-assign.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js');
  $export($export.S + $export.F, 'Object', { assign: $__require('npm:core-js@1.2.7/library/modules/$.object-assign.js') });
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/assign.js', ['npm:core-js@1.2.7/library/modules/es6.object.assign.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.object.assign.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Object.assign;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/assign.js", ["npm:core-js@1.2.7/library/fn/object/assign.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/assign.js"), __esModule: true };
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/extends.js", ["npm:babel-runtime@5.8.38/core-js/object/assign.js"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$assign = $__require("npm:babel-runtime@5.8.38/core-js/object/assign.js")["default"];
  exports["default"] = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  exports.__esModule = true;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.defined.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-object.js', ['npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (it) {
    return Object(defined(it));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.global.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.a-function.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.ctx.js', ['npm:core-js@1.2.7/library/modules/$.a-function.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('npm:core-js@1.2.7/library/modules/$.a-function.js');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.export.js', ['npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
      core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
      ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.fails.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.object-sap.js', ['npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
        core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
        fails = $__require('npm:core-js@1.2.7/library/modules/$.fails.js');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.object.keys.js', ['npm:core-js@1.2.7/library/modules/$.to-object.js', 'npm:core-js@1.2.7/library/modules/$.object-sap.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('npm:core-js@1.2.7/library/modules/$.to-object.js');
  $__require('npm:core-js@1.2.7/library/modules/$.object-sap.js')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.core.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/keys.js', ['npm:core-js@1.2.7/library/modules/es6.object.keys.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.object.keys.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Object.keys;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/keys.js", ["npm:core-js@1.2.7/library/fn/object/keys.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/keys.js"), __esModule: true };
});
System.register('constants/action-types.js', [], function (_export) {
  'use strict';

  var ADD_INPUT_ITEM, EDIT_INPUT_ITEM, REMOVE_INPUT_ITEM, REQUEST_SAVED_STATE, RECEIVE_SAVED_STATE, SAVE_STATE_PENDING, SAVE_STATE_COMPLETE;
  return {
    setters: [],
    execute: function () {
      ADD_INPUT_ITEM = 'ADD_INPUT_ITEM';

      _export('ADD_INPUT_ITEM', ADD_INPUT_ITEM);

      EDIT_INPUT_ITEM = 'EDIT_INPUT_ITEM';

      _export('EDIT_INPUT_ITEM', EDIT_INPUT_ITEM);

      REMOVE_INPUT_ITEM = 'REMOVE_INPUT_ITEM';

      _export('REMOVE_INPUT_ITEM', REMOVE_INPUT_ITEM);

      REQUEST_SAVED_STATE = 'REQUEST_SAVED_STATE';

      _export('REQUEST_SAVED_STATE', REQUEST_SAVED_STATE);

      RECEIVE_SAVED_STATE = 'RECEIVE_SAVED_STATE';

      _export('RECEIVE_SAVED_STATE', RECEIVE_SAVED_STATE);

      SAVE_STATE_PENDING = 'SAVE_STATE_PENDING';

      _export('SAVE_STATE_PENDING', SAVE_STATE_PENDING);

      SAVE_STATE_COMPLETE = 'SAVE_STATE_COMPLETE';

      _export('SAVE_STATE_COMPLETE', SAVE_STATE_COMPLETE);
    }
  };
});

System.register('actions/index.js', ['npm:babel-runtime@5.8.38/helpers/extends.js', 'npm:babel-runtime@5.8.38/core-js/object/keys.js', 'constants/action-types.js'], function (_export) {
    var _extends, _Object$keys, ADD_INPUT_ITEM, EDIT_INPUT_ITEM, REMOVE_INPUT_ITEM, REQUEST_SAVED_STATE, RECEIVE_SAVED_STATE, SAVE_STATE, SAVE_STATE_PENDING, SAVE_STATE_COMPLETE, endpoint, updateUrl, formatFirebaseObjectForState, formatStateArrayForFirebase, addInputItem, editInputItem, removeInputItem, requestSavedState, receiveSavedState, fetchSavedState, saveState, saveStatePending, saveStateComplete;

    return {
        setters: [function (_npmBabelRuntime5838HelpersExtendsJs) {
            _extends = _npmBabelRuntime5838HelpersExtendsJs['default'];
        }, function (_npmBabelRuntime5838CoreJsObjectKeysJs) {
            _Object$keys = _npmBabelRuntime5838CoreJsObjectKeysJs['default'];
        }, function (_constantsActionTypesJs) {
            ADD_INPUT_ITEM = _constantsActionTypesJs.ADD_INPUT_ITEM;
            EDIT_INPUT_ITEM = _constantsActionTypesJs.EDIT_INPUT_ITEM;
            REMOVE_INPUT_ITEM = _constantsActionTypesJs.REMOVE_INPUT_ITEM;
            REQUEST_SAVED_STATE = _constantsActionTypesJs.REQUEST_SAVED_STATE;
            RECEIVE_SAVED_STATE = _constantsActionTypesJs.RECEIVE_SAVED_STATE;
            SAVE_STATE = _constantsActionTypesJs.SAVE_STATE;
            SAVE_STATE_PENDING = _constantsActionTypesJs.SAVE_STATE_PENDING;
            SAVE_STATE_COMPLETE = _constantsActionTypesJs.SAVE_STATE_COMPLETE;
        }],
        execute: function () {
            'use strict';

            endpoint = '/api/state';

            updateUrl = function updateUrl(id) {
                return history.replaceState(null, null, id);
            };

            formatFirebaseObjectForState = function formatFirebaseObjectForState(savedStateObject) {
                return _Object$keys(savedStateObject).map(function (key) {
                    return _extends({}, savedStateObject[key], {
                        id: key
                    });
                });
            };

            formatStateArrayForFirebase = function formatStateArrayForFirebase(stateArray) {
                var firebaseObject = {};
                stateArray.forEach(function (stateObject) {
                    var stateObjectCopy = _extends({}, stateObject);
                    var id = stateObject.id;
                    delete stateObjectCopy.id;
                    delete stateObjectCopy.isValid;
                    firebaseObject[id] = stateObjectCopy;
                });
                return firebaseObject;
            };

            addInputItem = function addInputItem() {
                return {
                    type: ADD_INPUT_ITEM
                };
            };

            _export('addInputItem', addInputItem);

            editInputItem = function editInputItem(payload) {
                return {
                    type: EDIT_INPUT_ITEM,
                    payload: payload
                };
            };

            _export('editInputItem', editInputItem);

            removeInputItem = function removeInputItem(id) {
                return {
                    type: REMOVE_INPUT_ITEM,
                    payload: {
                        id: id
                    }
                };
            };

            _export('removeInputItem', removeInputItem);

            requestSavedState = function requestSavedState(id) {
                return {
                    type: REQUEST_SAVED_STATE,
                    id: id
                };
            };

            _export('requestSavedState', requestSavedState);

            receiveSavedState = function receiveSavedState(payload) {
                return {
                    type: RECEIVE_SAVED_STATE,
                    payload: payload
                };
            };

            _export('receiveSavedState', receiveSavedState);

            fetchSavedState = function fetchSavedState(id) {
                return function (dispatch) {
                    dispatch(requestSavedState(id));
                    return fetch(endpoint + '?key=' + id).then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        if (json) {
                            dispatch(receiveSavedState(formatFirebaseObjectForState(json)));
                        } else {
                            dispatch(addInputItem());
                        }
                    })['catch'](function () {
                        return dispatch(addInputItem());
                    });
                };
            };

            _export('fetchSavedState', fetchSavedState);

            saveState = function saveState(inputItems) {
                return function (dispatch) {
                    dispatch(saveStatePending());
                    return fetch(endpoint, {
                        method: 'POST',
                        body: JSON.stringify(formatStateArrayForFirebase(inputItems))
                    }).then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        if (json) {
                            updateUrl(json.id);
                            dispatch(saveStateComplete(json));
                        }
                    })['catch'](function (error) {
                        return dispatch(saveStateComplete(error));
                    });
                };
            };

            _export('saveState', saveState);

            saveStatePending = function saveStatePending() {
                return {
                    type: SAVE_STATE_PENDING
                };
            };

            _export('saveStatePending', saveStatePending);

            saveStateComplete = function saveStateComplete(payload) {
                return {
                    type: SAVE_STATE_COMPLETE
                };
            };

            _export('saveStateComplete', saveStateComplete);
        }
    };
});

System.register('components/app.js', ['npm:babel-runtime@5.8.38/helpers/get.js', 'npm:babel-runtime@5.8.38/helpers/inherits.js', 'npm:babel-runtime@5.8.38/helpers/create-class.js', 'npm:babel-runtime@5.8.38/helpers/class-call-check.js', 'npm:react@16.4.1.js', 'npm:react-redux@5.0.7.js', 'actions/index.js', 'components/header.js', 'components/inputItemGrid.js', 'utils/utils.js'], function (_export) {
	var _get, _inherits, _createClass, _classCallCheck, React, Component, connect, _fetchSavedState, saveState, Header, InputItemGrid, getUrlSegment, mapDispatchToProps, App;

	function mapStateToProps(state) {
		return state;
	}

	return {
		setters: [function (_npmBabelRuntime5838HelpersGetJs) {
			_get = _npmBabelRuntime5838HelpersGetJs['default'];
		}, function (_npmBabelRuntime5838HelpersInheritsJs) {
			_inherits = _npmBabelRuntime5838HelpersInheritsJs['default'];
		}, function (_npmBabelRuntime5838HelpersCreateClassJs) {
			_createClass = _npmBabelRuntime5838HelpersCreateClassJs['default'];
		}, function (_npmBabelRuntime5838HelpersClassCallCheckJs) {
			_classCallCheck = _npmBabelRuntime5838HelpersClassCallCheckJs['default'];
		}, function (_npmReact1641Js) {
			React = _npmReact1641Js['default'];
			Component = _npmReact1641Js.Component;
		}, function (_npmReactRedux507Js) {
			connect = _npmReactRedux507Js.connect;
		}, function (_actionsIndexJs) {
			_fetchSavedState = _actionsIndexJs.fetchSavedState;
			saveState = _actionsIndexJs.saveState;
		}, function (_componentsHeaderJs) {
			Header = _componentsHeaderJs['default'];
		}, function (_componentsInputItemGridJs) {
			InputItemGrid = _componentsInputItemGridJs['default'];
		}, function (_utilsUtilsJs) {
			getUrlSegment = _utilsUtilsJs.getUrlSegment;
		}],
		execute: function () {
			'use strict';

			mapDispatchToProps = function mapDispatchToProps(dispatch) {
				return {
					fetchSavedState: function fetchSavedState(savedStateKey) {
						return dispatch(_fetchSavedState(savedStateKey));
					},
					onSave: function onSave(inputItems) {
						return dispatch(saveState(inputItems));
					}
				};
			};

			App = (function (_Component) {
				_inherits(App, _Component);

				function App(props) {
					_classCallCheck(this, App);

					_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
				}

				_createClass(App, [{
					key: 'componentDidMount',
					value: function componentDidMount() {
						var savedStateKey = getUrlSegment();
						if (savedStateKey) {
							this.props.fetchSavedState(savedStateKey);
						}
					}
				}, {
					key: 'render',
					value: function render() {
						var _this = this;

						return [React.createElement(Header, { key: 'header', onSave: function () {
								return _this.props.onSave(_this.props.inputItems);
							}, isFetching: this.props.isFetching }), React.createElement(InputItemGrid, { key: 'inputItemGrid' })];
					}
				}]);

				return App;
			})(Component);

			_export('default', connect(mapStateToProps, mapDispatchToProps)(App));
		}
	};
});

System.register('main.js', ['npm:react@16.4.1.js', 'npm:react-dom@16.4.0.js', 'npm:react-redux@5.0.7.js', 'store/index.js', 'components/app.js'], function (_export) {
	'use strict';

	var React, render, Provider, configureStore, App, rootEl, store;
	return {
		setters: [function (_npmReact1641Js) {
			React = _npmReact1641Js['default'];
		}, function (_npmReactDom1640Js) {
			render = _npmReactDom1640Js.render;
		}, function (_npmReactRedux507Js) {
			Provider = _npmReactRedux507Js.Provider;
		}, function (_storeIndexJs) {
			configureStore = _storeIndexJs['default'];
		}, function (_componentsAppJs) {
			App = _componentsAppJs['default'];
		}],
		execute: function () {
			rootEl = document.getElementById('app');
			store = configureStore();

			render(React.createElement(
				Provider,
				{ store: store },
				React.createElement(App, null)
			), rootEl);
		}
	};
});
