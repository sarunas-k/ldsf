let Qe;
const ut = new Uint8Array(16);
function lt() {
  if (!Qe && (Qe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Qe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Qe(ut);
}
const B = [];
for (let d = 0; d < 256; ++d)
  B.push((d + 256).toString(16).slice(1));
function dt(d, a = 0) {
  return B[d[a + 0]] + B[d[a + 1]] + B[d[a + 2]] + B[d[a + 3]] + "-" + B[d[a + 4]] + B[d[a + 5]] + "-" + B[d[a + 6]] + B[d[a + 7]] + "-" + B[d[a + 8]] + B[d[a + 9]] + "-" + B[d[a + 10]] + B[d[a + 11]] + B[d[a + 12]] + B[d[a + 13]] + B[d[a + 14]] + B[d[a + 15]];
}
const ft = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), it = {
  randomUUID: ft
};
function mt(d, a, E) {
  if (it.randomUUID && !a && !d)
    return it.randomUUID();
  d = d || {};
  const z = d.random || (d.rng || lt)();
  if (z[6] = z[6] & 15 | 64, z[8] = z[8] & 63 | 128, a) {
    E = E || 0;
    for (let q = 0; q < 16; ++q)
      a[E + q] = z[q];
    return a;
  }
  return dt(z);
}
var rt = { exports: {} };
(function(d) {
  (function(a) {
    if (typeof window > "u")
      return;
    var E = 0, z = !1, q = !1, oe = "message", Q = oe.length, te = "[iFrameSizer]", D = te.length, O = null, J = window.requestAnimationFrame, re = Object.freeze({
      max: 1,
      scroll: 1,
      bodyScroll: 1,
      documentElementScroll: 1
    }), n = {}, ae = null, me = Object.freeze({
      autoResize: !0,
      bodyBackground: null,
      bodyMargin: null,
      bodyMarginV1: 8,
      bodyPadding: null,
      checkOrigin: !0,
      inPageLinks: !1,
      enablePublicMethods: !0,
      heightCalculationMethod: "bodyOffset",
      id: "iFrameResizer",
      interval: 32,
      log: !1,
      maxHeight: 1 / 0,
      maxWidth: 1 / 0,
      minHeight: 0,
      minWidth: 0,
      mouseEvents: !0,
      resizeFrom: "parent",
      scrolling: !1,
      sizeHeight: !0,
      sizeWidth: !1,
      warningTimeout: 5e3,
      tolerance: 0,
      widthCalculationMethod: "scroll",
      onClose: function() {
        return !0;
      },
      onClosed: function() {
      },
      onInit: function() {
      },
      onMessage: function() {
        V("onMessage function not defined");
      },
      onMouseEnter: function() {
      },
      onMouseLeave: function() {
      },
      onResized: function() {
      },
      onScroll: function() {
        return !0;
      }
    });
    function N() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }
    function se(t, o, m) {
      t.addEventListener(o, m, !1);
    }
    function qe(t, o, m) {
      t.removeEventListener(o, m, !1);
    }
    function we() {
      var t = ["moz", "webkit", "o", "ms"], o;
      for (o = 0; o < t.length && !J; o += 1)
        J = window[t[o] + "RequestAnimationFrame"];
      J ? J = J.bind(window) : p("setup", "RequestAnimationFrame not supported");
    }
    function ce(t) {
      var o = "Host page: " + t;
      return window.top !== window.self && (o = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + t : "Nested host page: " + t), o;
    }
    function Ve(t) {
      return te + "[" + ce(t) + "]";
    }
    function Ee(t) {
      return n[t] ? n[t].log : z;
    }
    function p(t, o) {
      ge("log", t, o, Ee(t));
    }
    function ye(t, o) {
      ge("info", t, o, Ee(t));
    }
    function V(t, o) {
      ge("warn", t, o, !0);
    }
    function ge(t, o, m, u) {
      u === !0 && typeof window.console == "object" && console[t](Ve(o), m);
    }
    function De(t) {
      function o() {
        function s() {
          pe(M), ve(f), fe("onResized", M);
        }
        w("Height"), w("Width"), Ne(s, M, "init");
      }
      function m() {
        var s = U.slice(D).split(":"), g = s[1] ? parseInt(s[1], 10) : 0, T = n[s[0]] && n[s[0]].iframe, b = getComputedStyle(T);
        return {
          iframe: T,
          id: s[0],
          height: g + u(b) + y(b),
          width: s[2],
          type: s[3]
        };
      }
      function u(s) {
        if (s.boxSizing !== "border-box")
          return 0;
        var g = s.paddingTop ? parseInt(s.paddingTop, 10) : 0, T = s.paddingBottom ? parseInt(s.paddingBottom, 10) : 0;
        return g + T;
      }
      function y(s) {
        if (s.boxSizing !== "border-box")
          return 0;
        var g = s.borderTopWidth ? parseInt(s.borderTopWidth, 10) : 0, T = s.borderBottomWidth ? parseInt(s.borderBottomWidth, 10) : 0;
        return g + T;
      }
      function w(s) {
        var g = Number(n[f]["max" + s]), T = Number(n[f]["min" + s]), b = s.toLowerCase(), x = Number(M[b]);
        p(f, "Checking " + b + " is in range " + T + "-" + g), x < T && (x = T, p(f, "Set " + b + " to min value")), x > g && (x = g, p(f, "Set " + b + " to max value")), M[b] = "" + x;
      }
      function G() {
        function s() {
          function b() {
            var W = 0, $ = !1;
            for (p(
              f,
              "Checking connection is from allowed list of origins: " + T
            ); W < T.length; W++)
              if (T[W] === g) {
                $ = !0;
                break;
              }
            return $;
          }
          function x() {
            var W = n[f] && n[f].remoteHost;
            return p(f, "Checking connection is from: " + W), g === W;
          }
          return T.constructor === Array ? b() : x();
        }
        var g = t.origin, T = n[f] && n[f].checkOrigin;
        if (T && "" + g != "null" && !s())
          throw new Error(
            "Unexpected message received from: " + g + " for " + M.iframe.id + ". Message was: " + t.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
          );
        return !0;
      }
      function de() {
        return te === ("" + U).slice(0, D) && U.slice(D).split(":")[0] in n;
      }
      function X() {
        var s = M.type in { true: 1, false: 1, undefined: 1 };
        return s && p(f, "Ignoring init message from meta parent page"), s;
      }
      function Z(s) {
        return U.slice(U.indexOf(":") + Q + s);
      }
      function ne(s) {
        p(
          f,
          "onMessage passed: {iframe: " + M.iframe.id + ", message: " + s + "}"
        ), fe("onMessage", {
          iframe: M.iframe,
          message: JSON.parse(s)
        }), p(f, "--");
      }
      function P() {
        var s = document.body.getBoundingClientRect(), g = M.iframe.getBoundingClientRect();
        return JSON.stringify({
          iframeHeight: g.height,
          iframeWidth: g.width,
          clientHeight: Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
          ),
          clientWidth: Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
          ),
          offsetTop: parseInt(g.top - s.top, 10),
          offsetLeft: parseInt(g.left - s.left, 10),
          scrollTop: window.pageYOffset,
          scrollLeft: window.pageXOffset,
          documentHeight: document.documentElement.clientHeight,
          documentWidth: document.documentElement.clientWidth,
          windowHeight: window.innerHeight,
          windowWidth: window.innerWidth
        });
      }
      function Fe(s, g) {
        function T() {
          R("Send Page Info", "pageInfo:" + P(), s, g);
        }
        We(T, 32, g);
      }
      function ke() {
        function s(x, W) {
          function $() {
            n[b] ? Fe(n[b].iframe, b) : g();
          }
          ["scroll", "resize"].forEach(function(ie) {
            p(b, x + ie + " listener for sendPageInfo"), W(window, ie, $);
          });
        }
        function g() {
          s("Remove ", qe);
        }
        function T() {
          s("Add ", se);
        }
        var b = f;
        T(), n[b] && (n[b].stopPageInfo = g);
      }
      function ze() {
        n[f] && n[f].stopPageInfo && (n[f].stopPageInfo(), delete n[f].stopPageInfo);
      }
      function Re() {
        var s = !0;
        return M.iframe === null && (V(f, "IFrame (" + M.id + ") not found"), s = !1), s;
      }
      function c(s) {
        var g = s.getBoundingClientRect();
        return Oe(f), {
          x: Math.floor(Number(g.left) + Number(O.x)),
          y: Math.floor(Number(g.top) + Number(O.y))
        };
      }
      function l(s) {
        function g() {
          O = W, C(), p(f, "--");
        }
        function T() {
          return {
            x: Number(M.width) + x.x,
            y: Number(M.height) + x.y
          };
        }
        function b() {
          window.parentIFrame ? window.parentIFrame["scrollTo" + (s ? "Offset" : "")](
            W.x,
            W.y
          ) : V(
            f,
            "Unable to scroll to requested position, window.parentIFrame not found"
          );
        }
        var x = s ? c(M.iframe) : { x: 0, y: 0 }, W = T();
        p(
          f,
          "Reposition requested from iFrame (offset x:" + x.x + " y:" + x.y + ")"
        ), window.top === window.self ? g() : b();
      }
      function C() {
        fe("onScroll", O) === !1 ? Le() : ve(f);
      }
      function A(s) {
        function g() {
          var $ = c(W);
          p(
            f,
            "Moving to in page link (#" + b + ") at x: " + $.x + " y: " + $.y
          ), O = {
            x: $.x,
            y: $.y
          }, C(), p(f, "--");
        }
        function T() {
          window.parentIFrame ? window.parentIFrame.moveToAnchor(b) : p(
            f,
            "In page link #" + b + " not found and window.parentIFrame not found"
          );
        }
        var b = s.split("#")[1] || "", x = decodeURIComponent(b), W = document.getElementById(x) || document.getElementsByName(x)[0];
        W ? g() : window.top === window.self ? p(f, "In page link #" + b + " not found") : T();
      }
      function Y(s) {
        var g = {};
        if (Number(M.width) === 0 && Number(M.height) === 0) {
          var T = Z(9).split(":");
          g = {
            x: T[1],
            y: T[0]
          };
        } else
          g = {
            x: M.width,
            y: M.height
          };
        fe(s, {
          iframe: M.iframe,
          screenX: Number(g.x),
          screenY: Number(g.y),
          type: M.type
        });
      }
      function fe(s, g) {
        return be(f, s, g);
      }
      function je() {
        switch (n[f] && n[f].firstRun && Ue(), M.type) {
          case "close": {
            ue(M.iframe);
            break;
          }
          case "message": {
            ne(Z(6));
            break;
          }
          case "mouseenter": {
            Y("onMouseEnter");
            break;
          }
          case "mouseleave": {
            Y("onMouseLeave");
            break;
          }
          case "autoResize": {
            n[f].autoResize = JSON.parse(Z(9));
            break;
          }
          case "scrollTo": {
            l(!1);
            break;
          }
          case "scrollToOffset": {
            l(!0);
            break;
          }
          case "pageInfo": {
            Fe(
              n[f] && n[f].iframe,
              f
            ), ke();
            break;
          }
          case "pageInfoStop": {
            ze();
            break;
          }
          case "inPageLink": {
            A(Z(9));
            break;
          }
          case "reset": {
            he(M);
            break;
          }
          case "init": {
            o(), fe("onInit", M.iframe);
            break;
          }
          default:
            Number(M.width) === 0 && Number(M.height) === 0 ? V(
              "Unsupported message received (" + M.type + "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"
            ) : o();
        }
      }
      function Se(s) {
        var g = !0;
        return n[s] || (g = !1, V(
          M.type + " No settings for " + s + ". Message was: " + U
        )), g;
      }
      function Be() {
        for (var s in n)
          R(
            "iFrame requested init",
            Je(s),
            n[s].iframe,
            s
          );
      }
      function Ue() {
        n[f] && (n[f].firstRun = !1);
      }
      var U = t.data, M = {}, f = null;
      U === "[iFrameResizerChild]Ready" ? Be() : de() ? (M = m(), f = M.id, n[f] && (n[f].loaded = !0), !X() && Se(f) && (p(f, "Received: " + U), Re() && G() && je())) : ye(f, "Ignored: " + U);
    }
    function be(t, o, m) {
      var u = null, y = null;
      if (n[t])
        if (u = n[t][o], typeof u == "function")
          y = u(m);
        else
          throw new TypeError(
            o + " on iFrame[" + t + "] is not a function"
          );
      return y;
    }
    function Pe(t) {
      var o = t.id;
      delete n[o];
    }
    function ue(t) {
      var o = t.id;
      if (be(o, "onClose", o) === !1) {
        p(o, "Close iframe cancelled by onClose event");
        return;
      }
      p(o, "Removing iFrame: " + o);
      try {
        t.parentNode && t.parentNode.removeChild(t);
      } catch (m) {
        V(m);
      }
      be(o, "onClosed", o), p(o, "--"), Pe(t);
    }
    function Oe(t) {
      O === null && (O = {
        x: window.pageXOffset === a ? document.documentElement.scrollLeft : window.pageXOffset,
        y: window.pageYOffset === a ? document.documentElement.scrollTop : window.pageYOffset
      }, p(
        t,
        "Get page position: " + O.x + "," + O.y
      ));
    }
    function ve(t) {
      O !== null && (window.scrollTo(O.x, O.y), p(
        t,
        "Set page position: " + O.x + "," + O.y
      ), Le());
    }
    function Le() {
      O = null;
    }
    function he(t) {
      function o() {
        pe(t), R("reset", "reset", t.iframe, t.id);
      }
      p(
        t.id,
        "Size reset requested by " + (t.type === "init" ? "host page" : "iFrame")
      ), Oe(t.id), Ne(o, t, "reset");
    }
    function pe(t) {
      function o(w) {
        if (!t.id) {
          p("undefined", "messageData id not set");
          return;
        }
        t.iframe.style[w] = t[w] + "px", p(
          t.id,
          "IFrame (" + y + ") " + w + " set to " + t[w] + "px"
        );
      }
      function m(w) {
        !q && t[w] === "0" && (q = !0, p(y, "Hidden iFrame detected, creating visibility listener"), Xe());
      }
      function u(w) {
        o(w), m(w);
      }
      var y = t.iframe.id;
      n[y] && (n[y].sizeHeight && u("height"), n[y].sizeWidth && u("width"));
    }
    function Ne(t, o, m) {
      m !== o.type && J && // including check for jasmine because had trouble getting spy to work in unit test using requestAnimationFrame
      !window.jasmine ? (p(o.id, "Requesting animation frame"), J(t)) : t();
    }
    function R(t, o, m, u, y) {
      function w() {
        var ne = n[u] && n[u].targetOrigin;
        p(
          u,
          "[" + t + "] Sending msg to iframe[" + u + "] (" + o + ") targetOrigin: " + ne
        ), m.contentWindow.postMessage(te + o, ne);
      }
      function G() {
        V(u, "[" + t + "] IFrame(" + u + ") not found");
      }
      function de() {
        m && "contentWindow" in m && m.contentWindow !== null ? w() : G();
      }
      function X() {
        function ne() {
          n[u] && !n[u].loaded && !Z && (Z = !0, V(
            u,
            "IFrame has not responded within " + n[u].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
          ));
        }
        y && n[u] && n[u].warningTimeout && (n[u].msgTimeout = setTimeout(
          ne,
          n[u].warningTimeout
        ));
      }
      var Z = !1;
      u = u || m.id, n[u] && (de(), X());
    }
    function Je(t) {
      return t + ":" + n[t].bodyMarginV1 + ":" + n[t].sizeWidth + ":" + n[t].log + ":" + n[t].interval + ":" + n[t].enablePublicMethods + ":" + n[t].autoResize + ":" + n[t].bodyMargin + ":" + n[t].heightCalculationMethod + ":" + n[t].bodyBackground + ":" + n[t].bodyPadding + ":" + n[t].tolerance + ":" + n[t].inPageLinks + ":" + n[t].resizeFrom + ":" + n[t].widthCalculationMethod + ":" + n[t].mouseEvents;
    }
    function Ae(t) {
      return typeof t == "number";
    }
    function xe(t, o) {
      function m() {
        function l(A) {
          var Y = n[c][A];
          Y !== 1 / 0 && Y !== 0 && (t.style[A] = Ae(Y) ? Y + "px" : Y, p(c, "Set " + A + " = " + t.style[A]));
        }
        function C(A) {
          if (n[c]["min" + A] > n[c]["max" + A])
            throw new Error(
              "Value for min" + A + " can not be greater than max" + A
            );
        }
        C("Height"), C("Width"), l("maxHeight"), l("minHeight"), l("maxWidth"), l("minWidth");
      }
      function u() {
        var l = o && o.id || me.id + E++;
        return document.getElementById(l) !== null && (l += E++), l;
      }
      function y(l) {
        if (typeof l != "string")
          throw new TypeError("Invaild id for iFrame. Expected String");
        return l === "" && (t.id = l = u(), z = (o || {}).log, p(
          l,
          "Added missing iframe ID: " + l + " (" + t.src + ")"
        )), l;
      }
      function w() {
        switch (p(
          c,
          "IFrame scrolling " + (n[c] && n[c].scrolling ? "enabled" : "disabled") + " for " + c
        ), t.style.overflow = (n[c] && n[c].scrolling) === !1 ? "hidden" : "auto", n[c] && n[c].scrolling) {
          case "omit":
            break;
          case !0: {
            t.scrolling = "yes";
            break;
          }
          case !1: {
            t.scrolling = "no";
            break;
          }
          default:
            t.scrolling = n[c] ? n[c].scrolling : "no";
        }
      }
      function G() {
        (typeof (n[c] && n[c].bodyMargin) == "number" || (n[c] && n[c].bodyMargin) === "0") && (n[c].bodyMarginV1 = n[c].bodyMargin, n[c].bodyMargin = "" + n[c].bodyMargin + "px");
      }
      function de() {
        var l = n[c] && n[c].firstRun, C = n[c] && n[c].heightCalculationMethod in re;
        !l && C && he({ iframe: t, height: 0, width: 0, type: "init" });
      }
      function X() {
        n[c] && (n[c].iframe.iFrameResizer = {
          close: ue.bind(null, n[c].iframe),
          removeListeners: Pe.bind(
            null,
            n[c].iframe
          ),
          resize: R.bind(
            null,
            "Window resize",
            "resize",
            n[c].iframe
          ),
          moveToAnchor: function(l) {
            R(
              "Move to anchor",
              "moveToAnchor:" + l,
              n[c].iframe,
              c
            );
          },
          sendMessage: function(l) {
            l = JSON.stringify(l), R(
              "Send Message",
              "message:" + l,
              n[c].iframe,
              c
            );
          }
        });
      }
      function Z(l) {
        function C() {
          R("iFrame.onload", l, t, a, !0), de();
        }
        function A(fe) {
          if (t.parentNode) {
            var je = new fe(function(Se) {
              Se.forEach(function(Be) {
                var Ue = Array.prototype.slice.call(Be.removedNodes);
                Ue.forEach(function(U) {
                  U === t && ue(t);
                });
              });
            });
            je.observe(t.parentNode, {
              childList: !0
            });
          }
        }
        var Y = N();
        Y && A(Y), se(t, "load", C), R("init", l, t, a, !0);
      }
      function ne(l) {
        if (typeof l != "object")
          throw new TypeError("Options is not an object");
      }
      function P(l) {
        for (var C in me)
          Object.prototype.hasOwnProperty.call(me, C) && (n[c][C] = Object.prototype.hasOwnProperty.call(
            l,
            C
          ) ? l[C] : me[C]);
      }
      function Fe(l) {
        return l === "" || l.match(/^(about:blank|javascript:|file:\/\/)/) !== null ? "*" : l;
      }
      function ke(l) {
        var C = l.split("Callback");
        if (C.length === 2) {
          var A = "on" + C[0].charAt(0).toUpperCase() + C[0].slice(1);
          this[A] = this[l], delete this[l], V(
            c,
            "Deprecated: '" + l + "' has been renamed '" + A + "'. The old method will be removed in the next major version."
          );
        }
      }
      function ze(l) {
        l = l || {}, n[c] = /* @__PURE__ */ Object.create(null), n[c].iframe = t, n[c].firstRun = !0, n[c].remoteHost = t.src && t.src.split("/").slice(0, 3).join("/"), ne(l), Object.keys(l).forEach(ke, l), P(l), n[c] && (n[c].targetOrigin = n[c].checkOrigin === !0 ? Fe(n[c].remoteHost) : "*");
      }
      function Re() {
        return c in n && "iFrameResizer" in t;
      }
      var c = y(t.id);
      Re() ? V(c, "Ignored iFrame, already setup.") : (ze(o), w(), m(), G(), Z(Je(c)), X());
    }
    function Me(t, o) {
      ae === null && (ae = setTimeout(function() {
        ae = null, t();
      }, o));
    }
    var Te = {};
    function We(t, o, m) {
      Te[m] || (Te[m] = setTimeout(function() {
        Te[m] = null, t();
      }, o));
    }
    function Xe() {
      function t() {
        function y(w) {
          function G(X) {
            return (n[w] && n[w].iframe.style[X]) === "0px";
          }
          function de(X) {
            return X.offsetParent !== null;
          }
          n[w] && de(n[w].iframe) && (G("height") || G("width")) && R(
            "Visibility change",
            "resize",
            n[w].iframe,
            w
          );
        }
        Object.keys(n).forEach(function(w) {
          y(w);
        });
      }
      function o(y) {
        p(
          "window",
          "Mutation observed: " + y[0].target + " " + y[0].type
        ), Me(t, 16);
      }
      function m() {
        var y = document.querySelector("body"), w = {
          attributes: !0,
          attributeOldValue: !1,
          characterData: !0,
          characterDataOldValue: !1,
          childList: !0,
          subtree: !0
        }, G = new u(o);
        G.observe(y, w);
      }
      var u = N();
      u && m();
    }
    function Ye(t) {
      function o() {
        le("Window " + t, "resize");
      }
      p("window", "Trigger event: " + t), Me(o, 16);
    }
    function He() {
      function t() {
        le("Tab Visible", "resize");
      }
      document.visibilityState !== "hidden" && (p("document", "Trigger event: Visibility change"), Me(t, 16));
    }
    function le(t, o) {
      function m(u) {
        return n[u] && n[u].resizeFrom === "parent" && n[u].autoResize && !n[u].firstRun;
      }
      Object.keys(n).forEach(function(u) {
        m(u) && R(t, o, n[u].iframe, u);
      });
    }
    function Ge() {
      se(window, "message", De), se(window, "resize", function() {
        Ye("resize");
      }), se(document, "visibilitychange", He), se(document, "-webkit-visibilitychange", He);
    }
    function Ie() {
      function t(u, y) {
        function w() {
          if (y.tagName) {
            if (y.tagName.toUpperCase() !== "IFRAME")
              throw new TypeError(
                "Expected <IFRAME> tag, found <" + y.tagName + ">"
              );
          } else
            throw new TypeError("Object is not a valid DOM element");
        }
        y && (w(), xe(y, u), m.push(y));
      }
      function o(u) {
        u && u.enablePublicMethods && V(
          "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
        );
      }
      var m;
      return we(), Ge(), function(y, w) {
        switch (m = [], o(y), typeof w) {
          case "undefined":
          case "string": {
            Array.prototype.forEach.call(
              document.querySelectorAll(w || "iframe"),
              t.bind(a, y)
            );
            break;
          }
          case "object": {
            t(y, w);
            break;
          }
          default:
            throw new TypeError("Unexpected data type (" + typeof w + ")");
        }
        return m;
      };
    }
    function Ke(t) {
      t.fn ? t.fn.iFrameResize || (t.fn.iFrameResize = function(m) {
        function u(y, w) {
          xe(w, m);
        }
        return this.filter("iframe").each(u).end();
      }) : ye("", "Unable to bind to jQuery, it is not fully loaded.");
    }
    window.jQuery !== a && Ke(window.jQuery), typeof a == "function" && a.amd ? a([], Ie) : d.exports = Ie(), window.iFrameResize = window.iFrameResize || Ie();
  })();
})(rt);
var gt = rt.exports, at = { exports: {} };
(function(d) {
  (function(a) {
    if (typeof window > "u")
      return;
    var E = !0, z = 10, q = "", oe = 0, Q = "", te = null, D = "", O = !1, J = { resize: 1, click: 1 }, re = 128, n = !0, ae = 1, me = "bodyOffset", N = me, se = !0, qe = "", we = {}, ce = 32, Ve = null, Ee = !1, p = !1, ye = "[iFrameSizer]", V = ye.length, ge = "", De = {
      max: 1,
      min: 1,
      bodyScroll: 1,
      documentElementScroll: 1
    }, be = "child", Pe = window.parent, ue = "*", Oe = 0, ve = !1, Le = null, he = 16, pe = 1, Ne = "scroll", R = Ne, Je = window, Ae = function() {
      m("onMessage function not defined");
    }, xe = function() {
    }, Me = function() {
    }, Te = {
      height: function() {
        return m("Custom height calculation function not defined"), document.documentElement.offsetHeight;
      },
      width: function() {
        return m("Custom width calculation function not defined"), document.body.scrollWidth;
      }
    }, We = {}, Xe = !1;
    function Ye() {
    }
    try {
      var He = Object.create(
        {},
        {
          passive: {
            // eslint-disable-next-line getter-return
            get: function() {
              Xe = !0;
            }
          }
        }
      );
      window.addEventListener("test", Ye, He), window.removeEventListener("test", Ye, He);
    } catch {
    }
    function le(e, i, r, h) {
      e.addEventListener(i, r, Xe ? h || {} : !1);
    }
    function Ge(e, i, r) {
      e.removeEventListener(i, r, !1);
    }
    function Ie(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    function Ke(e) {
      var i, r, h, F = null, L = 0, j = function() {
        L = Date.now(), F = null, h = e.apply(i, r), F || (i = r = null);
      };
      return function() {
        var H = Date.now();
        L || (L = H);
        var I = he - (H - L);
        return i = this, r = arguments, I <= 0 || I > he ? (F && (clearTimeout(F), F = null), L = H, h = e.apply(i, r), F || (i = r = null)) : F || (F = setTimeout(j, I)), h;
      };
    }
    function t(e) {
      return ye + "[" + ge + "] " + e;
    }
    function o(e) {
      Ee && typeof window.console == "object" && console.log(t(e));
    }
    function m(e) {
      typeof window.console == "object" && console.warn(t(e));
    }
    function u() {
      y(), o("Initialising iFrame (" + window.location.href + ")"), G(), Z(), X("background", q), X("padding", D), A(), ze(), Re(), ne(), je(), fe(), c(), we = Y(), ie("init", "Init message from host page"), xe();
    }
    function y() {
      function e(r) {
        return r === "true";
      }
      var i = qe.slice(V).split(":");
      ge = i[0], oe = a === i[1] ? oe : Number(i[1]), O = a === i[2] ? O : e(i[2]), Ee = a === i[3] ? Ee : e(i[3]), ce = a === i[4] ? ce : Number(i[4]), E = a === i[6] ? E : e(i[6]), Q = i[7], N = a === i[8] ? N : i[8], q = i[9], D = i[10], Oe = a === i[11] ? Oe : Number(i[11]), we.enable = a === i[12] ? !1 : e(i[12]), be = a === i[13] ? be : i[13], R = a === i[14] ? R : i[14], p = a === i[15] ? p : e(i[15]);
    }
    function w(e) {
      var i = e.split("Callback");
      if (i.length === 2) {
        var r = "on" + i[0].charAt(0).toUpperCase() + i[0].slice(1);
        this[r] = this[e], delete this[e], m(
          "Deprecated: '" + e + "' has been renamed '" + r + "'. The old method will be removed in the next major version."
        );
      }
    }
    function G() {
      function e() {
        var r = window.iFrameResizer;
        o("Reading data from page: " + JSON.stringify(r)), Object.keys(r).forEach(w, r), Ae = "onMessage" in r ? r.onMessage : Ae, xe = "onReady" in r ? r.onReady : xe, ue = "targetOrigin" in r ? r.targetOrigin : ue, N = "heightCalculationMethod" in r ? r.heightCalculationMethod : N, R = "widthCalculationMethod" in r ? r.widthCalculationMethod : R;
      }
      function i(r, h) {
        return typeof r == "function" && (o("Setup custom " + h + "CalcMethod"), Te[h] = r, r = "custom"), r;
      }
      "iFrameResizer" in window && Object === window.iFrameResizer.constructor && (e(), N = i(N, "height"), R = i(R, "width")), o("TargetOrigin for parent set to: " + ue);
    }
    function de(e, i) {
      return i.indexOf("-") !== -1 && (m("Negative CSS value ignored for " + e), i = ""), i;
    }
    function X(e, i) {
      a !== i && i !== "" && i !== "null" && (document.body.style[e] = i, o("Body " + e + ' set to "' + i + '"'));
    }
    function Z() {
      a === Q && (Q = oe + "px"), X("margin", de("margin", Q));
    }
    function ne() {
      document.documentElement.style.height = "", document.body.style.height = "", o('HTML & body height set to "auto"');
    }
    function P(e) {
      var i = {
        add: function(r) {
          function h() {
            ie(e.eventName, e.eventType);
          }
          We[r] = h, le(window, r, h, { passive: !0 });
        },
        remove: function(r) {
          var h = We[r];
          delete We[r], Ge(window, r, h);
        }
      };
      e.eventNames && Array.prototype.map ? (e.eventName = e.eventNames[0], e.eventNames.map(i[e.method])) : i[e.method](e.eventName), o(
        Ie(e.method) + " event listener: " + e.eventType
      );
    }
    function Fe(e) {
      P({
        method: e,
        eventType: "Animation Start",
        eventNames: ["animationstart", "webkitAnimationStart"]
      }), P({
        method: e,
        eventType: "Animation Iteration",
        eventNames: ["animationiteration", "webkitAnimationIteration"]
      }), P({
        method: e,
        eventType: "Animation End",
        eventNames: ["animationend", "webkitAnimationEnd"]
      }), P({
        method: e,
        eventType: "Input",
        eventName: "input"
      }), P({
        method: e,
        eventType: "Mouse Up",
        eventName: "mouseup"
      }), P({
        method: e,
        eventType: "Mouse Down",
        eventName: "mousedown"
      }), P({
        method: e,
        eventType: "Orientation Change",
        eventName: "orientationchange"
      }), P({
        method: e,
        eventType: "Print",
        eventNames: ["afterprint", "beforeprint"]
      }), P({
        method: e,
        eventType: "Ready State Change",
        eventName: "readystatechange"
      }), P({
        method: e,
        eventType: "Touch Start",
        eventName: "touchstart"
      }), P({
        method: e,
        eventType: "Touch End",
        eventName: "touchend"
      }), P({
        method: e,
        eventType: "Touch Cancel",
        eventName: "touchcancel"
      }), P({
        method: e,
        eventType: "Transition Start",
        eventNames: [
          "transitionstart",
          "webkitTransitionStart",
          "MSTransitionStart",
          "oTransitionStart",
          "otransitionstart"
        ]
      }), P({
        method: e,
        eventType: "Transition Iteration",
        eventNames: [
          "transitioniteration",
          "webkitTransitionIteration",
          "MSTransitionIteration",
          "oTransitionIteration",
          "otransitioniteration"
        ]
      }), P({
        method: e,
        eventType: "Transition End",
        eventNames: [
          "transitionend",
          "webkitTransitionEnd",
          "MSTransitionEnd",
          "oTransitionEnd",
          "otransitionend"
        ]
      }), be === "child" && P({
        method: e,
        eventType: "IFrame Resized",
        eventName: "resize"
      });
    }
    function ke(e, i, r, h) {
      return i !== e && (e in r || (m(
        e + " is not a valid option for " + h + "CalculationMethod."
      ), e = i), o(h + ' calculation method set to "' + e + '"')), e;
    }
    function ze() {
      N = ke(
        N,
        me,
        b,
        "height"
      );
    }
    function Re() {
      R = ke(
        R,
        Ne,
        x,
        "width"
      );
    }
    function c() {
      E === !0 ? (Fe("add"), Ue()) : o("Auto Resize disabled");
    }
    function l() {
      te !== null && te.disconnect();
    }
    function C() {
      Fe("remove"), l(), clearInterval(Ve);
    }
    function A() {
      var e = document.createElement("div");
      e.style.clear = "both", e.style.display = "block", e.style.height = "0", document.body.appendChild(e);
    }
    function Y() {
      function e() {
        return {
          x: window.pageXOffset === a ? document.documentElement.scrollLeft : window.pageXOffset,
          y: window.pageYOffset === a ? document.documentElement.scrollTop : window.pageYOffset
        };
      }
      function i(I) {
        var S = I.getBoundingClientRect(), k = e();
        return {
          x: parseInt(S.left, 10) + parseInt(k.x, 10),
          y: parseInt(S.top, 10) + parseInt(k.y, 10)
        };
      }
      function r(I) {
        function S(ee) {
          var Ce = i(ee);
          o(
            "Moving to in page link (#" + k + ") at x: " + Ce.x + " y: " + Ce.y
          ), K(Ce.y, Ce.x, "scrollToOffset");
        }
        var k = I.split("#")[1] || I, v = decodeURIComponent(k), _ = document.getElementById(v) || document.getElementsByName(v)[0];
        a === _ ? (o(
          "In page link (#" + k + ") not found in iFrame, so sending to parent"
        ), K(0, 0, "inPageLink", "#" + k)) : S(_);
      }
      function h() {
        var I = window.location.hash, S = window.location.href;
        I !== "" && I !== "#" && r(S);
      }
      function F() {
        function I(S) {
          function k(v) {
            v.preventDefault(), r(this.getAttribute("href"));
          }
          S.getAttribute("href") !== "#" && le(S, "click", k);
        }
        Array.prototype.forEach.call(
          document.querySelectorAll('a[href^="#"]'),
          I
        );
      }
      function L() {
        le(window, "hashchange", h);
      }
      function j() {
        setTimeout(h, re);
      }
      function H() {
        Array.prototype.forEach && document.querySelectorAll ? (o("Setting up location.hash handlers"), F(), L(), j()) : m(
          "In page linking not fully supported in this browser! (See README.md for IE8 workaround)"
        );
      }
      return we.enable ? H() : o("In page linking not enabled"), {
        findTarget: r
      };
    }
    function fe() {
      if (p !== !0)
        return;
      function e(r) {
        K(0, 0, r.type, r.screenY + ":" + r.screenX);
      }
      function i(r, h) {
        o("Add event listener: " + h), le(window.document, r, e);
      }
      i("mouseenter", "Mouse Enter"), i("mouseleave", "Mouse Leave");
    }
    function je() {
      o("Enable public methods"), Je.parentIFrame = {
        autoResize: function(i) {
          return i === !0 && E === !1 ? (E = !0, c()) : i === !1 && E === !0 && (E = !1, C()), K(0, 0, "autoResize", JSON.stringify(E)), E;
        },
        close: function() {
          K(0, 0, "close");
        },
        getId: function() {
          return ge;
        },
        getPageInfo: function(i) {
          typeof i == "function" ? (Me = i, K(0, 0, "pageInfo")) : (Me = function() {
          }, K(0, 0, "pageInfoStop"));
        },
        moveToAnchor: function(i) {
          we.findTarget(i);
        },
        reset: function() {
          tt("parentIFrame.reset");
        },
        scrollTo: function(i, r) {
          K(r, i, "scrollTo");
        },
        scrollToOffset: function(i, r) {
          K(r, i, "scrollToOffset");
        },
        sendMessage: function(i, r) {
          K(0, 0, "message", JSON.stringify(i), r);
        },
        setHeightCalculationMethod: function(i) {
          N = i, ze();
        },
        setWidthCalculationMethod: function(i) {
          R = i, Re();
        },
        setTargetOrigin: function(i) {
          o("Set targetOrigin: " + i), ue = i;
        },
        size: function(i, r) {
          var h = "" + (i || "") + (r ? "," + r : "");
          ie(
            "size",
            "parentIFrame.size(" + h + ")",
            i,
            r
          );
        }
      };
    }
    function Se() {
      ce !== 0 && (o("setInterval: " + ce + "ms"), Ve = setInterval(function() {
        ie("interval", "setInterval: " + ce);
      }, Math.abs(ce)));
    }
    function Be() {
      function e(v) {
        function _(ee) {
          ee.complete === !1 && (o("Attach listeners to " + ee.src), ee.addEventListener("load", F, !1), ee.addEventListener("error", L, !1), I.push(ee));
        }
        v.type === "attributes" && v.attributeName === "src" ? _(v.target) : v.type === "childList" && Array.prototype.forEach.call(
          v.target.querySelectorAll("img"),
          _
        );
      }
      function i(v) {
        I.splice(I.indexOf(v), 1);
      }
      function r(v) {
        o("Remove listeners from " + v.src), v.removeEventListener("load", F, !1), v.removeEventListener("error", L, !1), i(v);
      }
      function h(v, _, ee) {
        r(v.target), ie(_, ee + ": " + v.target.src);
      }
      function F(v) {
        h(v, "imageLoad", "Image loaded");
      }
      function L(v) {
        h(v, "imageLoadFailed", "Image load failed");
      }
      function j(v) {
        ie(
          "mutationObserver",
          "mutationObserver: " + v[0].target + " " + v[0].type
        ), v.forEach(e);
      }
      function H() {
        var v = document.querySelector("body"), _ = {
          attributes: !0,
          attributeOldValue: !1,
          characterData: !0,
          characterDataOldValue: !1,
          childList: !0,
          subtree: !0
        };
        return k = new S(j), o("Create body MutationObserver"), k.observe(v, _), k;
      }
      var I = [], S = window.MutationObserver || window.WebKitMutationObserver, k = H();
      return {
        disconnect: function() {
          "disconnect" in k && (o("Disconnect body MutationObserver"), k.disconnect(), I.forEach(r));
        }
      };
    }
    function Ue() {
      var e = 0 > ce;
      window.MutationObserver || window.WebKitMutationObserver ? e ? Se() : te = Be() : (o("MutationObserver not supported in this browser!"), Se());
    }
    function U(e, i) {
      var r = 0;
      return i = i || document.body, r = document.defaultView.getComputedStyle(i, null), r = r === null ? 0 : r[e], parseInt(r, z);
    }
    function M(e) {
      e > he / 2 && (he = 2 * e, o("Event throttle increased to " + he + "ms"));
    }
    function f(e, i) {
      for (var r = i.length, h = 0, F = 0, L = Ie(e), j = Date.now(), H = 0; H < r; H++)
        h = i[H].getBoundingClientRect()[e] + U("margin" + L, i[H]), h > F && (F = h);
      return j = Date.now() - j, o("Parsed " + r + " HTML elements"), o("Element position calculated in " + j + "ms"), M(j), F;
    }
    function s(e) {
      return [
        e.bodyOffset(),
        e.bodyScroll(),
        e.documentElementOffset(),
        e.documentElementScroll()
      ];
    }
    function g(e, i) {
      function r() {
        return m("No tagged elements (" + i + ") found on page"), document.querySelectorAll("body *");
      }
      var h = document.querySelectorAll("[" + i + "]");
      return h.length === 0 && r(), f(e, h);
    }
    function T() {
      return document.querySelectorAll("body *");
    }
    var b = {
      bodyOffset: function() {
        return document.body.offsetHeight + U("marginTop") + U("marginBottom");
      },
      offset: function() {
        return b.bodyOffset();
      },
      bodyScroll: function() {
        return document.body.scrollHeight;
      },
      custom: function() {
        return Te.height();
      },
      documentElementOffset: function() {
        return document.documentElement.offsetHeight;
      },
      documentElementScroll: function() {
        return document.documentElement.scrollHeight;
      },
      max: function() {
        return Math.max.apply(null, s(b));
      },
      min: function() {
        return Math.min.apply(null, s(b));
      },
      grow: function() {
        return b.max();
      },
      lowestElement: function() {
        return Math.max(
          b.bodyOffset() || b.documentElementOffset(),
          f("bottom", T())
        );
      },
      taggedElement: function() {
        return g("bottom", "data-iframe-height");
      }
    }, x = {
      bodyScroll: function() {
        return document.body.scrollWidth;
      },
      bodyOffset: function() {
        return document.body.offsetWidth;
      },
      custom: function() {
        return Te.width();
      },
      documentElementScroll: function() {
        return document.documentElement.scrollWidth;
      },
      documentElementOffset: function() {
        return document.documentElement.offsetWidth;
      },
      scroll: function() {
        return Math.max(x.bodyScroll(), x.documentElementScroll());
      },
      max: function() {
        return Math.max.apply(null, s(x));
      },
      min: function() {
        return Math.min.apply(null, s(x));
      },
      rightMostElement: function() {
        return f("right", T());
      },
      taggedElement: function() {
        return g("right", "data-iframe-width");
      }
    };
    function W(e, i, r, h) {
      function F() {
        ae = k, pe = v, K(ae, pe, e);
      }
      function L() {
        function _(ee, Ce) {
          var ct = Math.abs(ee - Ce) <= Oe;
          return !ct;
        }
        return k = a === r ? b[N]() : r, v = a === h ? x[R]() : h, _(ae, k) || O && _(pe, v);
      }
      function j() {
        return !(e in { init: 1, interval: 1, size: 1 });
      }
      function H() {
        return N in De || O && R in De;
      }
      function I() {
        o("No change in size detected");
      }
      function S() {
        j() && H() ? tt(i) : e in { interval: 1 } || I();
      }
      var k, v;
      L() || e === "init" ? ($e(), F()) : S();
    }
    var $ = Ke(W);
    function ie(e, i, r, h) {
      function F() {
        e in { reset: 1, resetPage: 1, init: 1 } || o("Trigger event: " + i);
      }
      function L() {
        return ve && e in J;
      }
      L() ? o("Trigger event cancelled: " + e) : (F(), e === "init" ? W(e, i, r, h) : $(
        e,
        i,
        r,
        h
      ));
    }
    function $e() {
      ve || (ve = !0, o("Trigger event lock on")), clearTimeout(Le), Le = setTimeout(function() {
        ve = !1, o("Trigger event lock off"), o("--");
      }, re);
    }
    function et(e) {
      ae = b[N](), pe = x[R](), K(ae, pe, e);
    }
    function tt(e) {
      var i = N;
      N = me, o("Reset trigger event: " + e), $e(), et("reset"), N = i;
    }
    function K(e, i, r, h, F) {
      function L() {
        a === F ? F = ue : o("Message targetOrigin: " + F);
      }
      function j() {
        var H = e + ":" + i, I = ge + ":" + H + ":" + r + (a === h ? "" : ":" + h);
        o("Sending message to host page (" + I + ")"), Pe.postMessage(ye + I, F);
      }
      L(), j();
    }
    function st(e) {
      var i = {
        init: function() {
          qe = e.data, Pe = e.source, u(), n = !1, setTimeout(function() {
            se = !1;
          }, re);
        },
        reset: function() {
          se ? o("Page reset ignored by init") : (o("Page size reset by host page"), et("resetPage"));
        },
        resize: function() {
          ie("resizeParent", "Parent window requested size check");
        },
        moveToAnchor: function() {
          we.findTarget(F());
        },
        inPageLink: function() {
          this.moveToAnchor();
        },
        // Backward compatibility
        pageInfo: function() {
          var k = F();
          o("PageInfoFromParent called from parent: " + k), Me(JSON.parse(k)), o(" --");
        },
        message: function() {
          var k = F();
          o("onMessage called from parent: " + k), Ae(JSON.parse(k)), o(" --");
        }
      };
      function r() {
        return ye === ("" + e.data).slice(0, V);
      }
      function h() {
        return e.data.split("]")[1].split(":")[0];
      }
      function F() {
        return e.data.slice(e.data.indexOf(":") + 1);
      }
      function L() {
        return !d.exports && "iFrameResize" in window || window.jQuery !== a && "iFrameResize" in window.jQuery.prototype;
      }
      function j() {
        return e.data.split(":")[2] in { true: 1, false: 1 };
      }
      function H() {
        var S = h();
        S in i ? i[S]() : !L() && !j() && m("Unexpected message (" + e.data + ")");
      }
      function I() {
        n === !1 ? H() : j() ? i.init() : o(
          'Ignored message of type "' + h() + '". Received before initialization.'
        );
      }
      r() && I();
    }
    function nt() {
      document.readyState !== "loading" && window.parent.postMessage("[iFrameResizerChild]Ready", "*");
    }
    le(window, "message", st), le(window, "readystatechange", nt), nt();
  })();
})(at);
var ht = at.exports;
const ot = gt;
var pt = {
  iframeResize: ot,
  iframeResizer: ot,
  // Backwards compatibility
  contentWindow: ht
};
function wt() {
  return mt();
}
function yt(d, a, E) {
  const z = /* @__PURE__ */ new Date();
  z.setTime(z.getTime() + E * 24 * 60 * 60 * 1e3);
  const q = "expires=" + z.toUTCString(), oe = "Lax", Q = "secure";
  document.cookie = d + "=" + a + ";" + q + ";SameSite=" + oe + ";path=/;" + Q;
}
function bt(d) {
  const a = document.cookie.split(";");
  for (let E = 0; E < a.length; E++) {
    const z = a[E].split("=");
    if (d === z[0].trim())
      return decodeURIComponent(z[1]);
  }
  return null;
}
function vt() {
  const d = "lhembed";
  let a = bt(d);
  return a == null && (a = wt()), yt(d, a, 365), a;
}
function _e() {
  const d = document.querySelectorAll("div[data-lhappid]");
  if (d.length === 0) {
    console.info(
      'Unable to init, did you add the <div data-lhappid="xxx"/> element?'
    );
    return;
  }
  const a = d[0];
  Mt(a);
}
function Mt(d, a) {
  if (!d) {
    console.error("Unable to init, passed targetDivElement is undefined/null");
    return;
  }
  let E = "https://widget.leadhatqa.com";
  if (a && a.iframeUrl && (E = a.iframeUrl), d.getAttribute("style") != null)
    return;
  d.setAttribute("style", "position: relative;");
  let z;
  {
    z = document.createElement("div"), z.setAttribute(
      "style",
      "left: 0;position: absolute;top: 0;height: 100%;width: 100%;align-items: center;display: flex;justify-content: center;"
    );
    const O = document.createElement("div");
    O.setAttribute(
      "style",
      "align-items: center;display: flex;justify-content: center;flex-direction: column;"
    );
    const J = document.createElement("div");
    J.setAttribute(
      "style",
      " border: 1.5px solid #f3f3f3; border-top: 1.5px solid #3498db; border-radius: 50%; width: 16px; height: 16px;"
    ), J.animate(
      [
        // key frames
        { transform: "rotate(0deg)" },
        { transform: "rotate(360deg)" }
      ],
      {
        duration: 2e3,
        iterations: 1 / 0
      }
    ), O.appendChild(J);
    const re = document.createElement("div");
    re.setAttribute(
      "style",
      "margin-top:7px;font-size: 12px; color:#00729E;"
    ), re.innerText = "Powered by leadhat", O.appendChild(re), z.appendChild(O);
  }
  d.appendChild(z);
  const q = d.dataset.lhappid, oe = window.location.pathname;
  let Q;
  d.dataset.lhformid && (Q = "&f=" + d.dataset.lhformid), d.dataset.lhformpid && (Q = "&p=" + d.dataset.lhformpid);
  const te = vt(), D = document.createElement("iframe");
  D.setAttribute("id", "lhiframe"), D.setAttribute(
    "src",
    `${E}/w/${q}/${te}/widget?path=${encodeURIComponent(oe)}${Q ?? ""}`
  ), D.setAttribute(
    "style",
    "border:none;opacity: 0;width: 1px;min-width: 100%;"
  ), D.addEventListener("load", function() {
    pt.iframeResizer({ log: !1 }, "#lhiframe"), z.style.display = "none", D.style.opacity = "1";
  }), d.appendChild(D);
}
const Ze = window;
document.readyState === "complete" ? _e() : Ze.attachEvent ? Ze.attachEvent("onload", _e) : Ze.addEventListener("load", _e, !1);
export {
  Mt as lhInit
};
