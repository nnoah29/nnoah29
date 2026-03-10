/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document) throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
}("undefined" != typeof window ? window : this, function(C, e) {
  "use strict";
  var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function(e2) {
    return t.flat.call(e2);
  } : function(e2) {
    return t.concat.apply([], e2);
  }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
  }, x = function(e2) {
    return null != e2 && e2 === e2.window;
  }, E = C.document, c = { type: true, src: true, nonce: true, noModule: true };
  function b(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || E).createElement("script");
    if (o2.text = e2, t2) for (r2 in c) (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function w(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[o.call(e2)] || "object" : typeof e2;
  }
  var f = "3.6.0", S = function(e2, t2) {
    return new S.fn.init(e2, t2);
  };
  function p(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = w(e2);
    return !m(e2) && !x(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
  }
  S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() {
    return s.call(this);
  }, get: function(e2) {
    return null == e2 ? s.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = S.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return S.each(this, e2);
  }, map: function(n2) {
    return this.pushStack(S.map(this, function(e2, t2) {
      return n2.call(e2, t2, e2);
    }));
  }, slice: function() {
    return this.pushStack(s.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(S.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(S.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || m(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (S.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || S.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = S.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== o.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = v.call(t2, "constructor") && t2.constructor) && a.call(n2) === l);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2) return false;
    return true;
  }, globalEval: function(e2, t2, n2) {
    b(e2, { nonce: t2 && t2.nonce }, n2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (p(e2)) {
      for (n2 = e2.length; r2 < n2; r2++) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    } else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    return e2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (p(Object(e2)) ? S.merge(n2, "string" == typeof e2 ? [e2] : e2) : u.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : i.call(t2, e2, n2);
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++) !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = [];
    if (p(e2)) for (r2 = e2.length; o2 < r2; o2++) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    else for (o2 in e2) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    return g(a2);
  }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    n["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var d = function(n2) {
    var e2, d2, b2, o2, i2, h2, f2, g2, w2, u2, l2, T2, C2, a2, E2, v2, s2, c2, y2, S2 = "sizzle" + 1 * /* @__PURE__ */ new Date(), p2 = n2.document, k2 = 0, r2 = 0, m2 = ue2(), x2 = ue2(), A2 = ue2(), N2 = ue2(), j2 = function(e3, t3) {
      return e3 === t3 && (l2 = true), 0;
    }, D2 = {}.hasOwnProperty, t2 = [], q2 = t2.pop, L2 = t2.push, H2 = t2.push, O2 = t2.slice, P2 = function(e3, t3) {
      for (var n3 = 0, r3 = e3.length; n3 < r3; n3++) if (e3[n3] === t3) return n3;
      return -1;
    }, R2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M2 = "[\\x20\\t\\r\\n\\f]", I2 = "(?:\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W2 = "\\[" + M2 + "*(" + I2 + ")(?:" + M2 + "*([*^$|!~]?=)" + M2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + I2 + "))|)" + M2 + "*\\]", F2 = ":(" + I2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + W2 + ")*)|.*)\\)|)", B2 = new RegExp(M2 + "+", "g"), $2 = new RegExp("^" + M2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M2 + "+$", "g"), _2 = new RegExp("^" + M2 + "*," + M2 + "*"), z2 = new RegExp("^" + M2 + "*([>+~]|" + M2 + ")" + M2 + "*"), U2 = new RegExp(M2 + "|>"), X2 = new RegExp(F2), V2 = new RegExp("^" + I2 + "$"), G2 = { ID: new RegExp("^#(" + I2 + ")"), CLASS: new RegExp("^\\.(" + I2 + ")"), TAG: new RegExp("^(" + I2 + "|[*])"), ATTR: new RegExp("^" + W2), PSEUDO: new RegExp("^" + F2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M2 + "*(even|odd|(([+-]|)(\\d*)n|)" + M2 + "*(?:([+-]|)" + M2 + "*(\\d+)|))" + M2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + R2 + ")$", "i"), needsContext: new RegExp("^" + M2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M2 + "*((?:-\\d)?\\d*)" + M2 + "*\\)|)(?=[^-]|$)", "i") }, Y2 = /HTML$/i, Q2 = /^(?:input|select|textarea|button)$/i, J2 = /^h\d$/i, K2 = /^[^{]+\{\s*\[native \w/, Z2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee2 = /[+~]/, te2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\([^\\r\\n\\f])", "g"), ne2 = function(e3, t3) {
      var n3 = "0x" + e3.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, re2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie2 = function(e3, t3) {
      return t3 ? "\0" === e3 ? "\uFFFD" : e3.slice(0, -1) + "\\" + e3.charCodeAt(e3.length - 1).toString(16) + " " : "\\" + e3;
    }, oe2 = function() {
      T2();
    }, ae2 = be2(function(e3) {
      return true === e3.disabled && "fieldset" === e3.nodeName.toLowerCase();
    }, { dir: "parentNode", next: "legend" });
    try {
      H2.apply(t2 = O2.call(p2.childNodes), p2.childNodes), t2[p2.childNodes.length].nodeType;
    } catch (e3) {
      H2 = { apply: t2.length ? function(e4, t3) {
        L2.apply(e4, O2.call(t3));
      } : function(e4, t3) {
        var n3 = e4.length, r3 = 0;
        while (e4[n3++] = t3[r3++]) ;
        e4.length = n3 - 1;
      } };
    }
    function se2(t3, e3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
      if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3) return n3;
      if (!r3 && (T2(e3), e3 = e3 || C2, E2)) {
        if (11 !== p3 && (u3 = Z2.exec(t3))) if (i3 = u3[1]) {
          if (9 === p3) {
            if (!(a3 = e3.getElementById(i3))) return n3;
            if (a3.id === i3) return n3.push(a3), n3;
          } else if (f3 && (a3 = f3.getElementById(i3)) && y2(e3, a3) && a3.id === i3) return n3.push(a3), n3;
        } else {
          if (u3[2]) return H2.apply(n3, e3.getElementsByTagName(t3)), n3;
          if ((i3 = u3[3]) && d2.getElementsByClassName && e3.getElementsByClassName) return H2.apply(n3, e3.getElementsByClassName(i3)), n3;
        }
        if (d2.qsa && !N2[t3 + " "] && (!v2 || !v2.test(t3)) && (1 !== p3 || "object" !== e3.nodeName.toLowerCase())) {
          if (c3 = t3, f3 = e3, 1 === p3 && (U2.test(t3) || z2.test(t3))) {
            (f3 = ee2.test(t3) && ye2(e3.parentNode) || e3) === e3 && d2.scope || ((s3 = e3.getAttribute("id")) ? s3 = s3.replace(re2, ie2) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = h2(t3)).length;
            while (o3--) l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + xe2(l3[o3]);
            c3 = l3.join(",");
          }
          try {
            return H2.apply(n3, f3.querySelectorAll(c3)), n3;
          } catch (e4) {
            N2(t3, true);
          } finally {
            s3 === S2 && e3.removeAttribute("id");
          }
        }
      }
      return g2(t3.replace($2, "$1"), e3, n3, r3);
    }
    function ue2() {
      var r3 = [];
      return function e3(t3, n3) {
        return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
      };
    }
    function le2(e3) {
      return e3[S2] = true, e3;
    }
    function ce2(e3) {
      var t3 = C2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function fe2(e3, t3) {
      var n3 = e3.split("|"), r3 = n3.length;
      while (r3--) b2.attrHandle[n3[r3]] = t3;
    }
    function pe2(e3, t3) {
      var n3 = t3 && e3, r3 = n3 && 1 === e3.nodeType && 1 === t3.nodeType && e3.sourceIndex - t3.sourceIndex;
      if (r3) return r3;
      if (n3) {
        while (n3 = n3.nextSibling) if (n3 === t3) return -1;
      }
      return e3 ? 1 : -1;
    }
    function de2(t3) {
      return function(e3) {
        return "input" === e3.nodeName.toLowerCase() && e3.type === t3;
      };
    }
    function he2(n3) {
      return function(e3) {
        var t3 = e3.nodeName.toLowerCase();
        return ("input" === t3 || "button" === t3) && e3.type === n3;
      };
    }
    function ge2(t3) {
      return function(e3) {
        return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && ae2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
      };
    }
    function ve2(a3) {
      return le2(function(o3) {
        return o3 = +o3, le2(function(e3, t3) {
          var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
          while (i3--) e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
        });
      });
    }
    function ye2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    for (e2 in d2 = se2.support = {}, i2 = se2.isXML = function(e3) {
      var t3 = e3 && e3.namespaceURI, n3 = e3 && (e3.ownerDocument || e3).documentElement;
      return !Y2.test(t3 || n3 && n3.nodeName || "HTML");
    }, T2 = se2.setDocument = function(e3) {
      var t3, n3, r3 = e3 ? e3.ownerDocument || e3 : p2;
      return r3 != C2 && 9 === r3.nodeType && r3.documentElement && (a2 = (C2 = r3).documentElement, E2 = !i2(C2), p2 != C2 && (n3 = C2.defaultView) && n3.top !== n3 && (n3.addEventListener ? n3.addEventListener("unload", oe2, false) : n3.attachEvent && n3.attachEvent("onunload", oe2)), d2.scope = ce2(function(e4) {
        return a2.appendChild(e4).appendChild(C2.createElement("div")), "undefined" != typeof e4.querySelectorAll && !e4.querySelectorAll(":scope fieldset div").length;
      }), d2.attributes = ce2(function(e4) {
        return e4.className = "i", !e4.getAttribute("className");
      }), d2.getElementsByTagName = ce2(function(e4) {
        return e4.appendChild(C2.createComment("")), !e4.getElementsByTagName("*").length;
      }), d2.getElementsByClassName = K2.test(C2.getElementsByClassName), d2.getById = ce2(function(e4) {
        return a2.appendChild(e4).id = S2, !C2.getElementsByName || !C2.getElementsByName(S2).length;
      }), d2.getById ? (b2.filter.ID = function(e4) {
        var t4 = e4.replace(te2, ne2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && E2) {
          var n4 = t4.getElementById(e4);
          return n4 ? [n4] : [];
        }
      }) : (b2.filter.ID = function(e4) {
        var n4 = e4.replace(te2, ne2);
        return function(e5) {
          var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return t4 && t4.value === n4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && E2) {
          var n4, r4, i3, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
            i3 = t4.getElementsByName(e4), r4 = 0;
            while (o3 = i3[r4++]) if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
          }
          return [];
        }
      }), b2.find.TAG = d2.getElementsByTagName ? function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : d2.qsa ? t4.querySelectorAll(e4) : void 0;
      } : function(e4, t4) {
        var n4, r4 = [], i3 = 0, o3 = t4.getElementsByTagName(e4);
        if ("*" === e4) {
          while (n4 = o3[i3++]) 1 === n4.nodeType && r4.push(n4);
          return r4;
        }
        return o3;
      }, b2.find.CLASS = d2.getElementsByClassName && function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && E2) return t4.getElementsByClassName(e4);
      }, s2 = [], v2 = [], (d2.qsa = K2.test(C2.querySelectorAll)) && (ce2(function(e4) {
        var t4;
        a2.appendChild(e4).innerHTML = "<a id='" + S2 + "'></a><select id='" + S2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", e4.querySelectorAll("[msallowcapture^='']").length && v2.push("[*^$]=" + M2 + `*(?:''|"")`), e4.querySelectorAll("[selected]").length || v2.push("\\[" + M2 + "*(?:value|" + R2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || v2.push("~="), (t4 = C2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || v2.push("\\[" + M2 + "*name" + M2 + "*=" + M2 + `*(?:''|"")`), e4.querySelectorAll(":checked").length || v2.push(":checked"), e4.querySelectorAll("a#" + S2 + "+*").length || v2.push(".#.+[+~]"), e4.querySelectorAll("\\\f"), v2.push("[\\r\\n\\f]");
      }), ce2(function(e4) {
        e4.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t4 = C2.createElement("input");
        t4.setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), e4.querySelectorAll("[name=d]").length && v2.push("name" + M2 + "*[*^$|!~]?="), 2 !== e4.querySelectorAll(":enabled").length && v2.push(":enabled", ":disabled"), a2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && v2.push(":enabled", ":disabled"), e4.querySelectorAll("*,:x"), v2.push(",.*:");
      })), (d2.matchesSelector = K2.test(c2 = a2.matches || a2.webkitMatchesSelector || a2.mozMatchesSelector || a2.oMatchesSelector || a2.msMatchesSelector)) && ce2(function(e4) {
        d2.disconnectedMatch = c2.call(e4, "*"), c2.call(e4, "[s!='']:x"), s2.push("!=", F2);
      }), v2 = v2.length && new RegExp(v2.join("|")), s2 = s2.length && new RegExp(s2.join("|")), t3 = K2.test(a2.compareDocumentPosition), y2 = t3 || K2.test(a2.contains) ? function(e4, t4) {
        var n4 = 9 === e4.nodeType ? e4.documentElement : e4, r4 = t4 && t4.parentNode;
        return e4 === r4 || !(!r4 || 1 !== r4.nodeType || !(n4.contains ? n4.contains(r4) : e4.compareDocumentPosition && 16 & e4.compareDocumentPosition(r4)));
      } : function(e4, t4) {
        if (t4) {
          while (t4 = t4.parentNode) if (t4 === e4) return true;
        }
        return false;
      }, j2 = t3 ? function(e4, t4) {
        if (e4 === t4) return l2 = true, 0;
        var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !d2.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 == C2 || e4.ownerDocument == p2 && y2(p2, e4) ? -1 : t4 == C2 || t4.ownerDocument == p2 && y2(p2, t4) ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0 : 4 & n4 ? -1 : 1);
      } : function(e4, t4) {
        if (e4 === t4) return l2 = true, 0;
        var n4, r4 = 0, i3 = e4.parentNode, o3 = t4.parentNode, a3 = [e4], s3 = [t4];
        if (!i3 || !o3) return e4 == C2 ? -1 : t4 == C2 ? 1 : i3 ? -1 : o3 ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0;
        if (i3 === o3) return pe2(e4, t4);
        n4 = e4;
        while (n4 = n4.parentNode) a3.unshift(n4);
        n4 = t4;
        while (n4 = n4.parentNode) s3.unshift(n4);
        while (a3[r4] === s3[r4]) r4++;
        return r4 ? pe2(a3[r4], s3[r4]) : a3[r4] == p2 ? -1 : s3[r4] == p2 ? 1 : 0;
      }), C2;
    }, se2.matches = function(e3, t3) {
      return se2(e3, null, null, t3);
    }, se2.matchesSelector = function(e3, t3) {
      if (T2(e3), d2.matchesSelector && E2 && !N2[t3 + " "] && (!s2 || !s2.test(t3)) && (!v2 || !v2.test(t3))) try {
        var n3 = c2.call(e3, t3);
        if (n3 || d2.disconnectedMatch || e3.document && 11 !== e3.document.nodeType) return n3;
      } catch (e4) {
        N2(t3, true);
      }
      return 0 < se2(t3, C2, null, [e3]).length;
    }, se2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) != C2 && T2(e3), y2(e3, t3);
    }, se2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) != C2 && T2(e3);
      var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && D2.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !E2) : void 0;
      return void 0 !== r3 ? r3 : d2.attributes || !E2 ? e3.getAttribute(t3) : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
    }, se2.escape = function(e3) {
      return (e3 + "").replace(re2, ie2);
    }, se2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, se2.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (l2 = !d2.detectDuplicates, u2 = !d2.sortStable && e3.slice(0), e3.sort(j2), l2) {
        while (t3 = e3[i3++]) t3 === e3[i3] && (r3 = n3.push(i3));
        while (r3--) e3.splice(n3[r3], 1);
      }
      return u2 = null, e3;
    }, o2 = se2.getText = function(e3) {
      var t3, n3 = "", r3 = 0, i3 = e3.nodeType;
      if (i3) {
        if (1 === i3 || 9 === i3 || 11 === i3) {
          if ("string" == typeof e3.textContent) return e3.textContent;
          for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) n3 += o2(e3);
        } else if (3 === i3 || 4 === i3) return e3.nodeValue;
      } else while (t3 = e3[r3++]) n3 += o2(t3);
      return n3;
    }, (b2 = se2.selectors = { cacheLength: 50, createPseudo: le2, match: G2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(te2, ne2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(te2, ne2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || se2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && se2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return G2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && X2.test(n3) && (t3 = h2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(te2, ne2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return e4.nodeName && e4.nodeName.toLowerCase() === t3;
      };
    }, CLASS: function(e3) {
      var t3 = m2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + M2 + ")" + e3 + "(" + M2 + "|$)")) && m2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(n3, r3, i3) {
      return function(e3) {
        var t3 = se2.attr(e3, n3);
        return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(B2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
      };
    }, CHILD: function(h3, e3, t3, g3, v3) {
      var y3 = "nth" !== h3.slice(0, 3), m3 = "last" !== h3.slice(-4), x3 = "of-type" === e3;
      return 1 === g3 && 0 === v3 ? function(e4) {
        return !!e4.parentNode;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3, s3, u3, l3 = y3 !== m3 ? "nextSibling" : "previousSibling", c3 = e4.parentNode, f3 = x3 && e4.nodeName.toLowerCase(), p3 = !n3 && !x3, d3 = false;
        if (c3) {
          if (y3) {
            while (l3) {
              a3 = e4;
              while (a3 = a3[l3]) if (x3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType) return false;
              u3 = l3 = "only" === h3 && !u3 && "nextSibling";
            }
            return true;
          }
          if (u3 = [m3 ? c3.firstChild : c3.lastChild], m3 && p3) {
            d3 = (s3 = (r3 = (i3 = (o3 = (a3 = c3)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]) && r3[2], a3 = s3 && c3.childNodes[s3];
            while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop()) if (1 === a3.nodeType && ++d3 && a3 === e4) {
              i3[h3] = [k2, s3, d3];
              break;
            }
          } else if (p3 && (d3 = s3 = (r3 = (i3 = (o3 = (a3 = e4)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]), false === d3) {
            while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop()) if ((x3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType) && ++d3 && (p3 && ((i3 = (o3 = a3[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] = [k2, d3]), a3 === e4)) break;
          }
          return (d3 -= v3) === g3 || d3 % g3 == 0 && 0 <= d3 / g3;
        }
      };
    }, PSEUDO: function(e3, o3) {
      var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || se2.error("unsupported pseudo: " + e3);
      return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? le2(function(e4, t4) {
        var n3, r3 = a3(e4, o3), i3 = r3.length;
        while (i3--) e4[n3 = P2(e4, r3[i3])] = !(t4[n3] = r3[i3]);
      }) : function(e4) {
        return a3(e4, 0, t3);
      }) : a3;
    } }, pseudos: { not: le2(function(e3) {
      var r3 = [], i3 = [], s3 = f2(e3.replace($2, "$1"));
      return s3[S2] ? le2(function(e4, t3, n3, r4) {
        var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
        while (a3--) (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
      }) : function(e4, t3, n3) {
        return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
      };
    }), has: le2(function(t3) {
      return function(e3) {
        return 0 < se2(t3, e3).length;
      };
    }), contains: le2(function(t3) {
      return t3 = t3.replace(te2, ne2), function(e3) {
        return -1 < (e3.textContent || o2(e3)).indexOf(t3);
      };
    }), lang: le2(function(n3) {
      return V2.test(n3 || "") || se2.error("unsupported lang: " + n3), n3 = n3.replace(te2, ne2).toLowerCase(), function(e3) {
        var t3;
        do {
          if (t3 = E2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang")) return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
        } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
        return false;
      };
    }), target: function(e3) {
      var t3 = n2.location && n2.location.hash;
      return t3 && t3.slice(1) === e3.id;
    }, root: function(e3) {
      return e3 === a2;
    }, focus: function(e3) {
      return e3 === C2.activeElement && (!C2.hasFocus || C2.hasFocus()) && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: ge2(false), disabled: ge2(true), checked: function(e3) {
      var t3 = e3.nodeName.toLowerCase();
      return "input" === t3 && !!e3.checked || "option" === t3 && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
      return true;
    }, parent: function(e3) {
      return !b2.pseudos.empty(e3);
    }, header: function(e3) {
      return J2.test(e3.nodeName);
    }, input: function(e3) {
      return Q2.test(e3.nodeName);
    }, button: function(e3) {
      var t3 = e3.nodeName.toLowerCase();
      return "input" === t3 && "button" === e3.type || "button" === t3;
    }, text: function(e3) {
      var t3;
      return "input" === e3.nodeName.toLowerCase() && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: ve2(function() {
      return [0];
    }), last: ve2(function(e3, t3) {
      return [t3 - 1];
    }), eq: ve2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: ve2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), odd: ve2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), lt: ve2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; ) e3.push(r3);
      return e3;
    }), gt: ve2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
      return e3;
    }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) b2.pseudos[e2] = de2(e2);
    for (e2 in { submit: true, reset: true }) b2.pseudos[e2] = he2(e2);
    function me2() {
    }
    function xe2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++) r3 += e3[t3].value;
      return r3;
    }
    function be2(s3, e3, t3) {
      var u3 = e3.dir, l3 = e3.next, c3 = l3 || u3, f3 = t3 && "parentNode" === c3, p3 = r2++;
      return e3.first ? function(e4, t4, n3) {
        while (e4 = e4[u3]) if (1 === e4.nodeType || f3) return s3(e4, t4, n3);
        return false;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3 = [k2, p3];
        if (n3) {
          while (e4 = e4[u3]) if ((1 === e4.nodeType || f3) && s3(e4, t4, n3)) return true;
        } else while (e4 = e4[u3]) if (1 === e4.nodeType || f3) if (i3 = (o3 = e4[S2] || (e4[S2] = {}))[e4.uniqueID] || (o3[e4.uniqueID] = {}), l3 && l3 === e4.nodeName.toLowerCase()) e4 = e4[u3] || e4;
        else {
          if ((r3 = i3[c3]) && r3[0] === k2 && r3[1] === p3) return a3[2] = r3[2];
          if ((i3[c3] = a3)[2] = s3(e4, t4, n3)) return true;
        }
        return false;
      };
    }
    function we2(i3) {
      return 1 < i3.length ? function(e3, t3, n3) {
        var r3 = i3.length;
        while (r3--) if (!i3[r3](e3, t3, n3)) return false;
        return true;
      } : i3[0];
    }
    function Te2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++) (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function Ce2(d3, h3, g3, v3, y3, e3) {
      return v3 && !v3[S2] && (v3 = Ce2(v3)), y3 && !y3[S2] && (y3 = Ce2(y3, e3)), le2(function(e4, t3, n3, r3) {
        var i3, o3, a3, s3 = [], u3 = [], l3 = t3.length, c3 = e4 || function(e5, t4, n4) {
          for (var r4 = 0, i4 = t4.length; r4 < i4; r4++) se2(e5, t4[r4], n4);
          return n4;
        }(h3 || "*", n3.nodeType ? [n3] : n3, []), f3 = !d3 || !e4 && h3 ? c3 : Te2(c3, s3, d3, n3, r3), p3 = g3 ? y3 || (e4 ? d3 : l3 || v3) ? [] : t3 : f3;
        if (g3 && g3(f3, p3, n3, r3), v3) {
          i3 = Te2(p3, u3), v3(i3, [], n3, r3), o3 = i3.length;
          while (o3--) (a3 = i3[o3]) && (p3[u3[o3]] = !(f3[u3[o3]] = a3));
        }
        if (e4) {
          if (y3 || d3) {
            if (y3) {
              i3 = [], o3 = p3.length;
              while (o3--) (a3 = p3[o3]) && i3.push(f3[o3] = a3);
              y3(null, p3 = [], i3, r3);
            }
            o3 = p3.length;
            while (o3--) (a3 = p3[o3]) && -1 < (i3 = y3 ? P2(e4, a3) : s3[o3]) && (e4[i3] = !(t3[i3] = a3));
          }
        } else p3 = Te2(p3 === t3 ? p3.splice(l3, p3.length) : p3), y3 ? y3(null, t3, p3, r3) : H2.apply(t3, p3);
      });
    }
    function Ee2(e3) {
      for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = be2(function(e4) {
        return e4 === i3;
      }, a3, true), l3 = be2(function(e4) {
        return -1 < P2(i3, e4);
      }, a3, true), c3 = [function(e4, t4, n4) {
        var r4 = !o3 && (n4 || t4 !== w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
        return i3 = null, r4;
      }]; s3 < r3; s3++) if (t3 = b2.relative[e3[s3].type]) c3 = [be2(we2(c3), t3)];
      else {
        if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
          for (n3 = ++s3; n3 < r3; n3++) if (b2.relative[e3[n3].type]) break;
          return Ce2(1 < s3 && we2(c3), 1 < s3 && xe2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace($2, "$1"), t3, s3 < n3 && Ee2(e3.slice(s3, n3)), n3 < r3 && Ee2(e3 = e3.slice(n3)), n3 < r3 && xe2(e3));
        }
        c3.push(t3);
      }
      return we2(c3);
    }
    return me2.prototype = b2.filters = b2.pseudos, b2.setFilters = new me2(), h2 = se2.tokenize = function(e3, t3) {
      var n3, r3, i3, o3, a3, s3, u3, l3 = x2[e3 + " "];
      if (l3) return t3 ? 0 : l3.slice(0);
      a3 = e3, s3 = [], u3 = b2.preFilter;
      while (a3) {
        for (o3 in n3 && !(r3 = _2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = z2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace($2, " ") }), a3 = a3.slice(n3.length)), b2.filter) !(r3 = G2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
        if (!n3) break;
      }
      return t3 ? a3.length : a3 ? se2.error(e3) : x2(e3, s3).slice(0);
    }, f2 = se2.compile = function(e3, t3) {
      var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = A2[e3 + " "];
      if (!a3) {
        t3 || (t3 = h2(e3)), n3 = t3.length;
        while (n3--) (a3 = Ee2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
        (a3 = A2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
          var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = k2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
          for (i4 && (w2 = t4 == C2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
            if (x3 && o4) {
              a4 = 0, t4 || o4.ownerDocument == C2 || (T2(o4), n4 = !E2);
              while (s3 = v3[a4++]) if (s3(o4, t4 || C2, n4)) {
                r4.push(o4);
                break;
              }
              i4 && (k2 = h3);
            }
            m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
          }
          if (u3 += l3, m3 && l3 !== u3) {
            a4 = 0;
            while (s3 = y3[a4++]) s3(c3, f3, t4, n4);
            if (e4) {
              if (0 < u3) while (l3--) c3[l3] || f3[l3] || (f3[l3] = q2.call(r4));
              f3 = Te2(f3);
            }
            H2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && se2.uniqueSort(r4);
          }
          return i4 && (k2 = h3, w2 = p3), c3;
        }, m3 ? le2(r3) : r3))).selector = e3;
      }
      return a3;
    }, g2 = se2.select = function(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && h2(e3 = l3.selector || e3);
      if (n3 = n3 || [], 1 === c3.length) {
        if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && E2 && b2.relative[o3[1].type]) {
          if (!(t3 = (b2.find.ID(a3.matches[0].replace(te2, ne2), t3) || [])[0])) return n3;
          l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
        }
        i3 = G2.needsContext.test(e3) ? 0 : o3.length;
        while (i3--) {
          if (a3 = o3[i3], b2.relative[s3 = a3.type]) break;
          if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(te2, ne2), ee2.test(o3[0].type) && ye2(t3.parentNode) || t3))) {
            if (o3.splice(i3, 1), !(e3 = r3.length && xe2(o3))) return H2.apply(n3, r3), n3;
            break;
          }
        }
      }
      return (l3 || f2(e3, c3))(r3, t3, !E2, n3, !t3 || ee2.test(e3) && ye2(t3.parentNode) || t3), n3;
    }, d2.sortStable = S2.split("").sort(j2).join("") === S2, d2.detectDuplicates = !!l2, T2(), d2.sortDetached = ce2(function(e3) {
      return 1 & e3.compareDocumentPosition(C2.createElement("fieldset"));
    }), ce2(function(e3) {
      return e3.innerHTML = "<a href='#'></a>", "#" === e3.firstChild.getAttribute("href");
    }) || fe2("type|href|height|width", function(e3, t3, n3) {
      if (!n3) return e3.getAttribute(t3, "type" === t3.toLowerCase() ? 1 : 2);
    }), d2.attributes && ce2(function(e3) {
      return e3.innerHTML = "<input/>", e3.firstChild.setAttribute("value", ""), "" === e3.firstChild.getAttribute("value");
    }) || fe2("value", function(e3, t3, n3) {
      if (!n3 && "input" === e3.nodeName.toLowerCase()) return e3.defaultValue;
    }), ce2(function(e3) {
      return null == e3.getAttribute("disabled");
    }) || fe2(R2, function(e3, t3, n3) {
      var r3;
      if (!n3) return true === e3[t3] ? t3.toLowerCase() : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
    }), se2;
  }(C);
  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
  var h = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType) if (1 === e2.nodeType) {
      if (i2 && S(e2).is(n2)) break;
      r2.push(e2);
    }
    return r2;
  }, T = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, k = S.expr.match.needsContext;
  function A(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e2, n2, r2) {
    return m(n2) ? S.grep(e2, function(e3, t2) {
      return !!n2.call(e3, t2, e3) !== r2;
    }) : n2.nodeType ? S.grep(e2, function(e3) {
      return e3 === n2 !== r2;
    }) : "string" != typeof n2 ? S.grep(e2, function(e3) {
      return -1 < i.call(n2, e3) !== r2;
    }) : S.filter(n2, e2, r2);
  }
  S.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? S.find.matchesSelector(r2, e2) ? [r2] : [] : S.find.matches(e2, S.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, S.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2) return this.pushStack(S(e2).filter(function() {
      for (t2 = 0; t2 < r2; t2++) if (S.contains(i2[t2], this)) return true;
    }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) S.find(e2, i2[t2], n2);
    return 1 < r2 ? S.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(j(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(j(this, e2 || [], true));
  }, is: function(e2) {
    return !!j(this, "string" == typeof e2 && k.test(e2) ? S(e2) : e2 || [], false).length;
  } });
  var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2) return this;
    if (n2 = n2 || D, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : q.exec(e2)) || !r2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof S ? t2[0] : t2, S.merge(this, S.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : E, true)), N.test(r2[1]) && S.isPlainObject(t2)) for (r2 in t2) m(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = E.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : m(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(S) : S.makeArray(e2, this);
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/, H = { children: true, contents: true, next: true, prev: true };
  function O(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType) ;
    return e2;
  }
  S.fn.extend({ has: function(e2) {
    var t2 = S(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++) if (S.contains(this, t2[e3])) return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && S(e2);
    if (!k.test(e2)) {
      for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && S.find.matchesSelector(n2, e2))) {
        o2.push(n2);
        break;
      }
    }
    return this.pushStack(1 < o2.length ? S.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? i.call(S(e2), this[0]) : i.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), S.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return h(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return h(e2, "parentNode", n2);
  }, next: function(e2) {
    return O(e2, "nextSibling");
  }, prev: function(e2) {
    return O(e2, "previousSibling");
  }, nextAll: function(e2) {
    return h(e2, "nextSibling");
  }, prevAll: function(e2) {
    return h(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return h(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return h(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return T((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return T(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (A(e2, "template") && (e2 = e2.content || e2), S.merge([], e2.childNodes));
  } }, function(r2, i2) {
    S.fn[r2] = function(e2, t2) {
      var n2 = S.map(this, i2, e2);
      return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = S.filter(t2, n2)), 1 < this.length && (H[r2] || S.uniqueSort(n2), L.test(r2) && n2.reverse()), this.pushStack(n2);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e2) {
    return e2;
  }
  function M(e2) {
    throw e2;
  }
  function I(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && m(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && m(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  S.Callbacks = function(r2) {
    var e2, n2;
    r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, S.each(e2.match(P) || [], function(e3, t3) {
      n2[t3] = true;
    }), n2) : S.extend({}, r2);
    var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
      for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
        t2 = u2.shift();
        while (++l2 < s2.length) false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
      }
      r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
    }, f2 = { add: function() {
      return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
        S.each(e3, function(e4, t3) {
          m(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== w(t3) && n3(t3);
        });
      }(arguments), t2 && !i2 && c2()), this;
    }, remove: function() {
      return S.each(arguments, function(e3, t3) {
        var n3;
        while (-1 < (n3 = S.inArray(t3, s2, n3))) s2.splice(n3, 1), n3 <= l2 && l2--;
      }), this;
    }, has: function(e3) {
      return e3 ? -1 < S.inArray(e3, s2) : 0 < s2.length;
    }, empty: function() {
      return s2 && (s2 = []), this;
    }, disable: function() {
      return a2 = u2 = [], s2 = t2 = "", this;
    }, disabled: function() {
      return !s2;
    }, lock: function() {
      return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
    }, locked: function() {
      return !!a2;
    }, fireWith: function(e3, t3) {
      return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o2;
    } };
    return f2;
  }, S.extend({ Deferred: function(e2) {
    var o2 = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
      return i2;
    }, always: function() {
      return s2.done(arguments).fail(arguments), this;
    }, "catch": function(e3) {
      return a2.then(null, e3);
    }, pipe: function() {
      var i3 = arguments;
      return S.Deferred(function(r2) {
        S.each(o2, function(e3, t2) {
          var n2 = m(i3[t2[4]]) && i3[t2[4]];
          s2[t2[1]](function() {
            var e4 = n2 && n2.apply(this, arguments);
            e4 && m(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
          });
        }), i3 = null;
      }).promise();
    }, then: function(t2, n2, r2) {
      var u2 = 0;
      function l2(i3, o3, a3, s3) {
        return function() {
          var n3 = this, r3 = arguments, e3 = function() {
            var e4, t4;
            if (!(i3 < u2)) {
              if ((e4 = a3.apply(n3, r3)) === o3.promise()) throw new TypeError("Thenable self-resolution");
              t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, m(t4) ? s3 ? t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3)) : (u2++, t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3), l2(u2, o3, R, o3.notifyWith))) : (a3 !== R && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
            }
          }, t3 = s3 ? e3 : function() {
            try {
              e3();
            } catch (e4) {
              S.Deferred.exceptionHook && S.Deferred.exceptionHook(e4, t3.stackTrace), u2 <= i3 + 1 && (a3 !== M && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
            }
          };
          i3 ? t3() : (S.Deferred.getStackHook && (t3.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t3));
        };
      }
      return S.Deferred(function(e3) {
        o2[0][3].add(l2(0, e3, m(r2) ? r2 : R, e3.notifyWith)), o2[1][3].add(l2(0, e3, m(t2) ? t2 : R)), o2[2][3].add(l2(0, e3, m(n2) ? n2 : M));
      }).promise();
    }, promise: function(e3) {
      return null != e3 ? S.extend(e3, a2) : a2;
    } }, s2 = {};
    return S.each(o2, function(e3, t2) {
      var n2 = t2[2], r2 = t2[5];
      a2[t2[1]] = n2.add, r2 && n2.add(function() {
        i2 = r2;
      }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
        return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
      }, s2[t2[0] + "With"] = n2.fireWith;
    }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
  }, when: function(e2) {
    var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = s.call(arguments), o2 = S.Deferred(), a2 = function(t3) {
      return function(e3) {
        r2[t3] = this, i2[t3] = 1 < arguments.length ? s.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
      };
    };
    if (n2 <= 1 && (I(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || m(i2[t2] && i2[t2].then))) return o2.then();
    while (t2--) I(i2[t2], a2(t2), o2.reject);
    return o2.promise();
  } });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function(e2, t2) {
    C.console && C.console.warn && e2 && W.test(e2.name) && C.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
  }, S.readyException = function(e2) {
    C.setTimeout(function() {
      throw e2;
    });
  };
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }
  S.fn.ready = function(e2) {
    return F.then(e2)["catch"](function(e3) {
      S.readyException(e3);
    }), this;
  }, S.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --S.readyWait : S.isReady) || (S.isReady = true) !== e2 && 0 < --S.readyWait || F.resolveWith(E, [S]);
  } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var $ = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === w(n2)) for (s2 in i2 = true, n2) $(e2, t2, s2, n2[s2], true, o2, a2);
    else if (void 0 !== r2 && (i2 = true, m(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(S(e3), n3);
    })), t2)) for (; s2 < u2; s2++) t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, _ = /^-ms-/, z = /-([a-z])/g;
  function U(e2, t2) {
    return t2.toUpperCase();
  }
  function X(e2) {
    return e2.replace(_, "ms-").replace(z, U);
  }
  var V = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  G.uid = 1, G.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, V(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2) i2[X(t2)] = n2;
    else for (r2 in t2) i2[X(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][X(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(X) : (t2 = X(t2)) in r2 ? [t2] : t2.match(P) || []).length;
        while (n2--) delete r2[t2[n2]];
      }
      (void 0 === t2 || S.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !S.isEmptyObject(t2);
  } };
  var Y = new G(), Q = new G(), J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
  function Z(e2, t2, n2) {
    var r2, i2;
    if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(K, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
      try {
        n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : J.test(i2) ? JSON.parse(i2) : i2);
      } catch (e3) {
      }
      Q.set(e2, t2, n2);
    } else n2 = void 0;
    return n2;
  }
  S.extend({ hasData: function(e2) {
    return Q.hasData(e2) || Y.hasData(e2);
  }, data: function(e2, t2, n2) {
    return Q.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    Q.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return Y.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    Y.remove(e2, t2);
  } }), S.fn.extend({ data: function(n2, e2) {
    var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === n2) {
      if (this.length && (i2 = Q.get(o2), 1 === o2.nodeType && !Y.get(o2, "hasDataAttrs"))) {
        t2 = a2.length;
        while (t2--) a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = X(r2.slice(5)), Z(o2, r2, i2[r2]));
        Y.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof n2 ? this.each(function() {
      Q.set(this, n2);
    }) : $(this, function(e3) {
      var t3;
      if (o2 && void 0 === e3) return void 0 !== (t3 = Q.get(o2, n2)) ? t3 : void 0 !== (t3 = Z(o2, n2)) ? t3 : void 0;
      this.each(function() {
        Q.set(this, n2, e3);
      });
    }, null, e2, 1 < arguments.length, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      Q.remove(this, e2);
    });
  } }), S.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2) return t2 = (t2 || "fx") + "queue", r2 = Y.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = Y.access(e2, t2, S.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = S.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = S._queueHooks(e2, t2);
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
      S.dequeue(e2, t2);
    }, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return Y.get(e2, n2) || Y.access(e2, n2, { empty: S.Callbacks("once memory").add(function() {
      Y.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), S.fn.extend({ queue: function(t2, n2) {
    var e2 = 2;
    return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? S.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
      var e3 = S.queue(this, t2, n2);
      S._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && S.dequeue(this, t2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      S.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = S.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--) (n2 = Y.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function(e2) {
    return S.contains(e2.ownerDocument, e2);
  }, oe = { composed: true };
  re.getRootNode && (ie = function(e2) {
    return S.contains(e2.ownerDocument, e2) || e2.getRootNode(oe) === e2.ownerDocument;
  });
  var ae = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && ie(e2) && "none" === S.css(e2, "display");
  };
  function se(e2, t2, n2, r2) {
    var i2, o2, a2 = 20, s2 = r2 ? function() {
      return r2.cur();
    } : function() {
      return S.css(e2, t2, "");
    }, u2 = s2(), l2 = n2 && n2[3] || (S.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (S.cssNumber[t2] || "px" !== l2 && +u2) && te.exec(S.css(e2, t2));
    if (c2 && c2[3] !== l2) {
      u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
      while (a2--) S.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
      c2 *= 2, S.style(e2, t2, c2 + l2), n2 = n2 || [];
    }
    return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
  }
  var ue = {};
  function le(e2, t2) {
    for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++) (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = Y.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ae(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ue[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = S.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ue[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", Y.set(r2, "display", n2)));
    for (c2 = 0; c2 < f2; c2++) null != l2[c2] && (e2[c2].style.display = l2[c2]);
    return e2;
  }
  S.fn.extend({ show: function() {
    return le(this, true);
  }, hide: function() {
    return le(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ae(this) ? S(this).show() : S(this).hide();
    });
  } });
  var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(true).cloneNode(true).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(true).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function ve(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && A(e2, t2) ? S.merge([e2], n2) : n2;
  }
  function ye(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) Y.set(e2[n2], "globalEval", !t2 || Y.get(t2[n2], "globalEval"));
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++) if ((o2 = e2[d2]) || 0 === o2) if ("object" === w(o2)) S.merge(p2, o2.nodeType ? [o2] : o2);
    else if (me.test(o2)) {
      a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (de.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ge[s2] || ge._default, a2.innerHTML = u2[1] + S.htmlPrefilter(o2) + u2[2], c2 = u2[0];
      while (c2--) a2 = a2.lastChild;
      S.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
    } else p2.push(t2.createTextNode(o2));
    f2.textContent = "", d2 = 0;
    while (o2 = p2[d2++]) if (r2 && -1 < S.inArray(o2, r2)) i2 && i2.push(o2);
    else if (l2 = ie(o2), a2 = ve(f2.appendChild(o2), "script"), l2 && ye(a2), n2) {
      c2 = 0;
      while (o2 = a2[c2++]) he.test(o2.type || "") && n2.push(o2);
    }
    return f2;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return true;
  }
  function Te() {
    return false;
  }
  function Ce(e2, t2) {
    return e2 === function() {
      try {
        return E.activeElement;
      } catch (e3) {
      }
    }() == ("focus" === t2);
  }
  function Ee(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2) Ee(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = Te;
    else if (!i2) return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return S().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = S.guid++)), e2.each(function() {
      S.event.add(this, t2, i2, r2, n2);
    });
  }
  function Se(e2, i2, o2) {
    o2 ? (Y.set(e2, i2, false), S.event.add(e2, i2, { namespace: false, handler: function(e3) {
      var t2, n2, r2 = Y.get(this, i2);
      if (1 & e3.isTrigger && this[i2]) {
        if (r2.length) (S.event.special[i2] || {}).delegateType && e3.stopPropagation();
        else if (r2 = s.call(arguments), Y.set(this, i2, r2), t2 = o2(this, i2), this[i2](), r2 !== (n2 = Y.get(this, i2)) || t2 ? Y.set(this, i2, false) : n2 = {}, r2 !== n2) return e3.stopImmediatePropagation(), e3.preventDefault(), n2 && n2.value;
      } else r2.length && (Y.set(this, i2, { value: S.event.trigger(S.extend(r2[0], S.Event.prototype), r2.slice(1), this) }), e3.stopImmediatePropagation());
    } })) : void 0 === Y.get(e2, i2) && S.event.add(e2, i2, we);
  }
  S.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.get(t2);
    if (V(t2)) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && S.find.matchesSelector(re, i2), n2.guid || (n2.guid = S.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
        return "undefined" != typeof S && S.event.triggered !== e3.type ? S.event.dispatch.apply(t2, arguments) : void 0;
      }), l2 = (e2 = (e2 || "").match(P) || [""]).length;
      while (l2--) d2 = g2 = (s2 = be.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = S.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = S.event.special[d2] || {}, c2 = S.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && S.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), S.event.global[d2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.hasData(e2) && Y.get(e2);
    if (v2 && (u2 = v2.events)) {
      l2 = (t2 = (t2 || "").match(P) || [""]).length;
      while (l2--) if (d2 = g2 = (s2 = be.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
        f2 = S.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
        while (o2--) c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
        a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || S.removeEvent(e2, d2, v2.handle), delete u2[d2]);
      } else for (d2 in u2) S.event.remove(e2, d2 + t2[l2], n2, r2, true);
      S.isEmptyObject(u2) && Y.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = S.event.fix(e2), l2 = (Y.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = S.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++) s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
      a2 = S.event.handlers.call(this, u2, l2), t2 = 0;
      while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
        u2.currentTarget = i2.elem, n2 = 0;
        while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped()) u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((S.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
      for (; l2 !== this; l2 = l2.parentNode || this) if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
        for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < S(i2, this).index(l2) : S.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
        o2.length && s2.push({ elem: l2, handlers: o2 });
      }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(t2, e2) {
    Object.defineProperty(S.Event.prototype, t2, { enumerable: true, configurable: true, get: m(e2) ? function() {
      if (this.originalEvent) return e2(this.originalEvent);
    } : function() {
      if (this.originalEvent) return this.originalEvent[t2];
    }, set: function(e3) {
      Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
    } });
  }, fix: function(e2) {
    return e2[S.expando] ? e2 : new S.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return pe.test(t2.type) && t2.click && A(t2, "input") && Se(t2, "click", we), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return pe.test(t2.type) && t2.click && A(t2, "input") && Se(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return pe.test(t2.type) && t2.click && A(t2, "input") && Y.get(t2, "click") || A(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, S.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, S.Event = function(e2, t2) {
    if (!(this instanceof S.Event)) return new S.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? we : Te, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && S.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[S.expando] = true;
  }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = we, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = we, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = we, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, S.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e2, t2) {
    S.event.special[e2] = { setup: function() {
      return Se(this, e2, Ce), false;
    }, trigger: function() {
      return Se(this, e2), true;
    }, _default: function() {
      return true;
    }, delegateType: t2 };
  }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
    S.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
      var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
      return n2 && (n2 === this || S.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
    } };
  }), S.fn.extend({ on: function(e2, t2, n2, r2) {
    return Ee(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return Ee(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, S(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2) this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = Te), this.each(function() {
      S.event.remove(this, e2, n2, t2);
    });
  } });
  var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e2, t2) {
    return A(e2, "table") && A(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && S(e2).children("tbody")[0] || e2;
  }
  function De(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function qe(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function Le(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (Y.hasData(e2) && (s2 = Y.get(e2).events)) for (i2 in Y.remove(t2, "handle events"), s2) for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++) S.event.add(t2, i2, s2[i2][n2]);
      Q.hasData(e2) && (o2 = Q.access(e2), a2 = S.extend({}, o2), Q.set(t2, a2));
    }
  }
  function He(n2, r2, i2, o2) {
    r2 = g(r2);
    var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = m(d2);
    if (h2 || 1 < f2 && "string" == typeof d2 && !y.checkClone && Ae.test(d2)) return n2.each(function(e3) {
      var t3 = n2.eq(e3);
      h2 && (r2[0] = d2.call(this, e3, t3.html())), He(t3, r2, i2, o2);
    });
    if (f2 && (t2 = (e2 = xe(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
      for (s2 = (a2 = S.map(ve(e2, "script"), De)).length; c2 < f2; c2++) u2 = e2, c2 !== p2 && (u2 = S.clone(u2, true, true), s2 && S.merge(a2, ve(u2, "script"))), i2.call(n2[c2], u2, c2);
      if (s2) for (l2 = a2[a2.length - 1].ownerDocument, S.map(a2, qe), c2 = 0; c2 < s2; c2++) u2 = a2[c2], he.test(u2.type || "") && !Y.access(u2, "globalEval") && S.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? S._evalUrl && !u2.noModule && S._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : b(u2.textContent.replace(Ne, ""), u2, l2));
    }
    return n2;
  }
  function Oe(e2, t2, n2) {
    for (var r2, i2 = t2 ? S.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || S.cleanData(ve(r2)), r2.parentNode && (n2 && ie(r2) && ye(ve(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  S.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = ie(e2);
    if (!(y.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || S.isXMLDoc(e2))) for (a2 = ve(c2), r2 = 0, i2 = (o2 = ve(e2)).length; r2 < i2; r2++) s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && pe.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
    if (t2) if (n2) for (o2 = o2 || ve(e2), a2 = a2 || ve(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++) Le(o2[r2], a2[r2]);
    else Le(e2, c2);
    return 0 < (a2 = ve(c2, "script")).length && ye(a2, !f2 && ve(e2, "script")), c2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = S.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if (V(n2)) {
      if (t2 = n2[Y.expando]) {
        if (t2.events) for (r2 in t2.events) i2[r2] ? S.event.remove(n2, r2) : S.removeEvent(n2, r2, t2.handle);
        n2[Y.expando] = void 0;
      }
      n2[Q.expando] && (n2[Q.expando] = void 0);
    }
  } }), S.fn.extend({ detach: function(e2) {
    return Oe(this, e2, true);
  }, remove: function(e2) {
    return Oe(this, e2);
  }, text: function(e2) {
    return $(this, function(e3) {
      return void 0 === e3 ? S.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return He(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return He(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = je(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return He(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return He(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (S.cleanData(ve(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return S.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return $(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
      if ("string" == typeof e3 && !ke.test(e3) && !ge[(de.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = S.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (S.cleanData(ve(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var n2 = [];
    return He(this, arguments, function(e2) {
      var t2 = this.parentNode;
      S.inArray(this, n2) < 0 && (S.cleanData(ve(this)), t2 && t2.replaceChild(e2, this));
    }, n2);
  } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
    S.fn[e2] = function(e3) {
      for (var t2, n2 = [], r2 = S(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++) t2 = o2 === i2 ? this : this.clone(true), S(r2[o2])[a2](t2), u.apply(n2, t2.get());
      return this.pushStack(n2);
    };
  });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function(e2) {
    var t2 = e2.ownerDocument.defaultView;
    return t2 && t2.opener || (t2 = C), t2.getComputedStyle(e2);
  }, Me = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2) o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2) e2.style[i2] = o2[i2];
    return r2;
  }, Ie = new RegExp(ne.join("|"), "i");
  function We(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = e2.style;
    return (n2 = n2 || Re(e2)) && ("" !== (a2 = n2.getPropertyValue(t2) || n2[t2]) || ie(e2) || (a2 = S.style(e2, t2)), !y.pixelBoxStyles() && Pe.test(a2) && Ie.test(t2) && (r2 = s2.width, i2 = s2.minWidth, o2 = s2.maxWidth, s2.minWidth = s2.maxWidth = s2.width = a2, a2 = n2.width, s2.width = r2, s2.minWidth = i2, s2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function Fe(e2, t2) {
    return { get: function() {
      if (!e2()) return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  !function() {
    function e2() {
      if (l2) {
        u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u2).appendChild(l2);
        var e3 = C.getComputedStyle(l2);
        n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), re.removeChild(u2), l2 = null;
      }
    }
    function t2(e3) {
      return Math.round(parseFloat(e3));
    }
    var n2, r2, i2, o2, a2, s2, u2 = E.createElement("div"), l2 = E.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l2.style.backgroundClip, S.extend(y, { boxSizingReliable: function() {
      return e2(), r2;
    }, pixelBoxStyles: function() {
      return e2(), o2;
    }, pixelPosition: function() {
      return e2(), n2;
    }, reliableMarginLeft: function() {
      return e2(), s2;
    }, scrollboxSize: function() {
      return e2(), i2;
    }, reliableTrDimensions: function() {
      var e3, t3, n3, r3;
      return null == a2 && (e3 = E.createElement("table"), t3 = E.createElement("tr"), n3 = E.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", re.appendChild(e3).appendChild(t3).appendChild(n3), r3 = C.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, re.removeChild(e3)), a2;
    } }));
  }();
  var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {};
  function ze(e2) {
    var t2 = S.cssProps[e2] || _e[e2];
    return t2 || (e2 in $e ? e2 : _e[e2] = function(e3) {
      var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Be.length;
      while (n2--) if ((e3 = Be[n2] + t3) in $e) return e3;
    }(e2) || e2);
  }
  var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = { position: "absolute", visibility: "hidden", display: "block" }, Ge = { letterSpacing: "0", fontWeight: "400" };
  function Ye(e2, t2, n2) {
    var r2 = te.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function Qe(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0;
    if (n2 === (r2 ? "border" : "content")) return 0;
    for (; a2 < 4; a2 += 2) "margin" === n2 && (u2 += S.css(e2, n2 + ne[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= S.css(e2, "padding" + ne[a2], true, i2)), "margin" !== n2 && (u2 -= S.css(e2, "border" + ne[a2] + "Width", true, i2))) : (u2 += S.css(e2, "padding" + ne[a2], true, i2), "padding" !== n2 ? u2 += S.css(e2, "border" + ne[a2] + "Width", true, i2) : s2 += S.css(e2, "border" + ne[a2] + "Width", true, i2));
    return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2;
  }
  function Je(e2, t2, n2) {
    var r2 = Re(e2), i2 = (!y.boxSizingReliable() || n2) && "border-box" === S.css(e2, "boxSizing", false, r2), o2 = i2, a2 = We(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if (Pe.test(a2)) {
      if (!n2) return a2;
      a2 = "auto";
    }
    return (!y.boxSizingReliable() && i2 || !y.reliableTrDimensions() && A(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === S.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === S.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + Qe(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
  }
  function Ke(e2, t2, n2, r2, i2) {
    return new Ke.prototype.init(e2, t2, n2, r2, i2);
  }
  S.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = We(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = X(t2), u2 = Xe.test(t2), l2 = e2.style;
      if (u2 || (t2 = ze(s2)), a2 = S.cssHooks[t2] || S.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" === (o2 = typeof n2) && (i2 = te.exec(n2)) && i2[1] && (n2 = se(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (S.cssNumber[s2] ? "" : "px")), y.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = X(t2);
    return Xe.test(t2) || (t2 = ze(s2)), (a2 = S.cssHooks[t2] || S.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = We(e2, t2, r2)), "normal" === i2 && t2 in Ge && (i2 = Ge[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), S.each(["height", "width"], function(e2, u2) {
    S.cssHooks[u2] = { get: function(e3, t2, n2) {
      if (t2) return !Ue.test(S.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? Je(e3, u2, n2) : Me(e3, Ve, function() {
        return Je(e3, u2, n2);
      });
    }, set: function(e3, t2, n2) {
      var r2, i2 = Re(e3), o2 = !y.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === S.css(e3, "boxSizing", false, i2), s2 = n2 ? Qe(e3, u2, n2, a2, i2) : 0;
      return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - Qe(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = te.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = S.css(e3, u2)), Ye(0, t2, s2);
    } };
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e2, t2) {
    if (t2) return (parseFloat(We(e2, "marginLeft")) || e2.getBoundingClientRect().left - Me(e2, { marginLeft: 0 }, function() {
      return e2.getBoundingClientRect().left;
    })) + "px";
  }), S.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
    S.cssHooks[i2 + o2] = { expand: function(e2) {
      for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++) n2[i2 + ne[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
      return n2;
    } }, "margin" !== i2 && (S.cssHooks[i2 + o2].set = Ye);
  }), S.fn.extend({ css: function(e2, t2) {
    return $(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = Re(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = S.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? S.style(e3, t3, n2) : S.css(e3, t3);
    }, e2, t2, 1 < arguments.length);
  } }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function(e2, t2, n2, r2, i2, o2) {
    this.elem = e2, this.prop = n2, this.easing = i2 || S.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (S.cssNumber[n2] ? "" : "px");
  }, cur: function() {
    var e2 = Ke.propHooks[this.prop];
    return e2 && e2.get ? e2.get(this) : Ke.propHooks._default.get(this);
  }, run: function(e2) {
    var t2, n2 = Ke.propHooks[this.prop];
    return this.options.duration ? this.pos = t2 = S.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : Ke.propHooks._default.set(this), this;
  } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function(e2) {
    var t2;
    return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = S.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
  }, set: function(e2) {
    S.fx.step[e2.prop] ? S.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !S.cssHooks[e2.prop] && null == e2.elem.style[ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : S.style(e2.elem, e2.prop, e2.now + e2.unit);
  } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function(e2) {
    e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
  } }, S.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
  function ot() {
    et && (false === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }
  function at() {
    return C.setTimeout(function() {
      Ze = void 0;
    }), Ze = Date.now();
  }
  function st(e2, t2) {
    var n2, r2 = 0, i2 = { height: e2 };
    for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = ne[r2])] = i2["padding" + n2] = e2;
    return t2 && (i2.opacity = i2.width = e2), i2;
  }
  function ut(e2, t2, n2) {
    for (var r2, i2 = (lt.tweeners[t2] || []).concat(lt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
  }
  function lt(o2, e2, t2) {
    var n2, a2, r2 = 0, i2 = lt.prefilters.length, s2 = S.Deferred().always(function() {
      delete u2.elem;
    }), u2 = function() {
      if (a2) return false;
      for (var e3 = Ze || at(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++) l2.tweens[r3].run(n3);
      return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
    }, l2 = s2.promise({ elem: o2, props: S.extend({}, e2), opts: S.extend(true, { specialEasing: {}, easing: S.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: Ze || at(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
      var n3 = S.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
      return l2.tweens.push(n3), n3;
    }, stop: function(e3) {
      var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
      if (a2) return this;
      for (a2 = true; t3 < n3; t3++) l2.tweens[t3].run(1);
      return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
    } }), c2 = l2.props;
    for (!function(e3, t3) {
      var n3, r3, i3, o3, a3;
      for (n3 in e3) if (i3 = t3[r3 = X(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = S.cssHooks[r3]) && "expand" in a3) for (n3 in o3 = a3.expand(o3), delete e3[r3], o3) n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
      else t3[r3] = i3;
    }(c2, l2.opts.specialEasing); r2 < i2; r2++) if (n2 = lt.prefilters[r2].call(l2, o2, c2, l2.opts)) return m(n2.stop) && (S._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
    return S.map(c2, ut, l2), m(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), S.fx.timer(S.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
  }
  S.Animation = S.extend(lt, { tweeners: { "*": [function(e2, t2) {
    var n2 = this.createTween(e2, t2);
    return se(n2.elem, e2, te.exec(t2), n2), n2;
  }] }, tweener: function(e2, t2) {
    m(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(P);
    for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], lt.tweeners[n2] = lt.tweeners[n2] || [], lt.tweeners[n2].unshift(t2);
  }, prefilters: [function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ae(e2), v2 = Y.get(e2, "fxshow");
    for (r2 in n2.queue || (null == (a2 = S._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
      a2.unqueued || s2();
    }), a2.unqueued++, p2.always(function() {
      p2.always(function() {
        a2.unqueued--, S.queue(e2, "fx").length || a2.empty.fire();
      });
    })), t2) if (i2 = t2[r2], rt.test(i2)) {
      if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
        if ("show" !== i2 || !v2 || void 0 === v2[r2]) continue;
        g2 = true;
      }
      d2[r2] = v2 && v2[r2] || S.style(e2, r2);
    }
    if ((u2 = !S.isEmptyObject(t2)) || !S.isEmptyObject(d2)) for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = Y.get(e2, "display")), "none" === (c2 = S.css(e2, "display")) && (l2 ? c2 = l2 : (le([e2], true), l2 = e2.style.display || l2, c2 = S.css(e2, "display"), le([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === S.css(e2, "float") && (u2 || (p2.done(function() {
      h2.display = l2;
    }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
      h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
    })), u2 = false, d2) u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = Y.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && le([e2], true), p2.done(function() {
      for (r2 in g2 || le([e2]), Y.remove(e2, "fxshow"), d2) S.style(e2, r2, d2[r2]);
    })), u2 = ut(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
  }], prefilter: function(e2, t2) {
    t2 ? lt.prefilters.unshift(e2) : lt.prefilters.push(e2);
  } }), S.speed = function(e2, t2, n2) {
    var r2 = e2 && "object" == typeof e2 ? S.extend({}, e2) : { complete: n2 || !n2 && t2 || m(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !m(t2) && t2 };
    return S.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in S.fx.speeds ? r2.duration = S.fx.speeds[r2.duration] : r2.duration = S.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
      m(r2.old) && r2.old.call(this), r2.queue && S.dequeue(this, r2.queue);
    }, r2;
  }, S.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
    return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
  }, animate: function(t2, e2, n2, r2) {
    var i2 = S.isEmptyObject(t2), o2 = S.speed(e2, n2, r2), a2 = function() {
      var e3 = lt(this, S.extend({}, t2), o2);
      (i2 || Y.get(this, "finish")) && e3.stop(true);
    };
    return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
  }, stop: function(i2, e2, o2) {
    var a2 = function(e3) {
      var t2 = e3.stop;
      delete e3.stop, t2(o2);
    };
    return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
      var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = S.timers, r2 = Y.get(this);
      if (t2) r2[t2] && r2[t2].stop && a2(r2[t2]);
      else for (t2 in r2) r2[t2] && r2[t2].stop && it.test(t2) && a2(r2[t2]);
      for (t2 = n2.length; t2--; ) n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
      !e3 && o2 || S.dequeue(this, i2);
    });
  }, finish: function(a2) {
    return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
      var e2, t2 = Y.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = S.timers, o2 = n2 ? n2.length : 0;
      for (t2.finish = true, S.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; ) i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
      for (e2 = 0; e2 < o2; e2++) n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
      delete t2.finish;
    });
  } }), S.each(["toggle", "show", "hide"], function(e2, r2) {
    var i2 = S.fn[r2];
    S.fn[r2] = function(e3, t2, n2) {
      return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(st(r2, true), e3, t2, n2);
    };
  }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
    S.fn[e2] = function(e3, t2, n2) {
      return this.animate(r2, e3, t2, n2);
    };
  }), S.timers = [], S.fx.tick = function() {
    var e2, t2 = 0, n2 = S.timers;
    for (Ze = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
    n2.length || S.fx.stop(), Ze = void 0;
  }, S.fx.timer = function(e2) {
    S.timers.push(e2), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function() {
    et || (et = true, ot());
  }, S.fx.stop = function() {
    et = null;
  }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r2, e2) {
    return r2 = S.fx && S.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
      var n2 = C.setTimeout(e3, r2);
      t2.stop = function() {
        C.clearTimeout(n2);
      };
    });
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct, ft = S.expr.attrHandle;
  S.fn.extend({ attr: function(e2, t2) {
    return $(this, S.attr, e2, t2, 1 < arguments.length);
  }, removeAttr: function(e2) {
    return this.each(function() {
      S.removeAttr(this, e2);
    });
  } }), S.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return "undefined" == typeof e2.getAttribute ? S.prop(e2, t2, n2) : (1 === o2 && S.isXMLDoc(e2) || (i2 = S.attrHooks[t2.toLowerCase()] || (S.expr.match.bool.test(t2) ? ct : void 0)), void 0 !== n2 ? null === n2 ? void S.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = S.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!y.radioValue && "radio" === t2 && A(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(P);
    if (i2 && 1 === e2.nodeType) while (n2 = i2[r2++]) e2.removeAttribute(n2);
  } }), ct = { set: function(e2, t2, n2) {
    return false === t2 ? S.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var a2 = ft[t2] || S.find.attr;
    ft[t2] = function(e3, t3, n2) {
      var r2, i2, o2 = t3.toLowerCase();
      return n2 || (i2 = ft[o2], ft[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, ft[o2] = i2), r2;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;
  function ht(e2) {
    return (e2.match(P) || []).join(" ");
  }
  function gt(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function vt(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(P) || [];
  }
  S.fn.extend({ prop: function(e2, t2) {
    return $(this, S.prop, e2, t2, 1 < arguments.length);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[S.propFix[e2] || e2];
    });
  } }), S.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && S.isXMLDoc(e2) || (t2 = S.propFix[t2] || t2, i2 = S.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = S.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : pt.test(e2.nodeName) || dt.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({ addClass: function(t2) {
    var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
    if (m(t2)) return this.each(function(e3) {
      S(this).addClass(t2.call(this, e3, gt(this)));
    });
    if ((e2 = vt(t2)).length) {
      while (n2 = this[u2++]) if (i2 = gt(n2), r2 = 1 === n2.nodeType && " " + ht(i2) + " ") {
        a2 = 0;
        while (o2 = e2[a2++]) r2.indexOf(" " + o2 + " ") < 0 && (r2 += o2 + " ");
        i2 !== (s2 = ht(r2)) && n2.setAttribute("class", s2);
      }
    }
    return this;
  }, removeClass: function(t2) {
    var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
    if (m(t2)) return this.each(function(e3) {
      S(this).removeClass(t2.call(this, e3, gt(this)));
    });
    if (!arguments.length) return this.attr("class", "");
    if ((e2 = vt(t2)).length) {
      while (n2 = this[u2++]) if (i2 = gt(n2), r2 = 1 === n2.nodeType && " " + ht(i2) + " ") {
        a2 = 0;
        while (o2 = e2[a2++]) while (-1 < r2.indexOf(" " + o2 + " ")) r2 = r2.replace(" " + o2 + " ", " ");
        i2 !== (s2 = ht(r2)) && n2.setAttribute("class", s2);
      }
    }
    return this;
  }, toggleClass: function(i2, t2) {
    var o2 = typeof i2, a2 = "string" === o2 || Array.isArray(i2);
    return "boolean" == typeof t2 && a2 ? t2 ? this.addClass(i2) : this.removeClass(i2) : m(i2) ? this.each(function(e2) {
      S(this).toggleClass(i2.call(this, e2, gt(this), t2), t2);
    }) : this.each(function() {
      var e2, t3, n2, r2;
      if (a2) {
        t3 = 0, n2 = S(this), r2 = vt(i2);
        while (e2 = r2[t3++]) n2.hasClass(e2) ? n2.removeClass(e2) : n2.addClass(e2);
      } else void 0 !== i2 && "boolean" !== o2 || ((e2 = gt(this)) && Y.set(this, "__className__", e2), this.setAttribute && this.setAttribute("class", e2 || false === i2 ? "" : Y.get(this, "__className__") || ""));
    });
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++]) if (1 === n2.nodeType && -1 < (" " + ht(gt(n2)) + " ").indexOf(t2)) return true;
    return false;
  } });
  var yt = /\r/g;
  S.fn.extend({ val: function(n2) {
    var r2, e2, i2, t2 = this[0];
    return arguments.length ? (i2 = m(n2), this.each(function(e3) {
      var t3;
      1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, S(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = S.map(t3, function(e4) {
        return null == e4 ? "" : e4 + "";
      })), (r2 = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
    })) : t2 ? (r2 = S.valHooks[t2.type] || S.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(yt, "") : null == e2 ? "" : e2 : void 0;
  } }), S.extend({ valHooks: { option: { get: function(e2) {
    var t2 = S.find.attr(e2, "value");
    return null != t2 ? t2 : ht(S.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++) if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !A(n2.parentNode, "optgroup"))) {
      if (t2 = S(n2).val(), a2) return t2;
      s2.push(t2);
    }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = S.makeArray(t2), a2 = i2.length;
    while (a2--) ((r2 = i2[a2]).selected = -1 < S.inArray(S.valHooks.option.get(r2), o2)) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), S.each(["radio", "checkbox"], function() {
    S.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2)) return e2.checked = -1 < S.inArray(S(e2).val(), t2);
    } }, y.checkOn || (S.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  }), y.focusin = "onfocusin" in C;
  var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function(e2) {
    e2.stopPropagation();
  };
  S.extend(S.event, { trigger: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || E], d2 = v.call(e2, "type") ? e2.type : e2, h2 = v.call(e2, "namespace") ? e2.namespace.split(".") : [];
    if (o2 = f2 = a2 = n2 = n2 || E, 3 !== n2.nodeType && 8 !== n2.nodeType && !mt.test(d2 + S.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[S.expando] ? e2 : new S.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : S.makeArray(t2, [e2]), c2 = S.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
      if (!r2 && !c2.noBubble && !x(n2)) {
        for (s2 = c2.delegateType || d2, mt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode) p2.push(o2), a2 = o2;
        a2 === (n2.ownerDocument || E) && p2.push(a2.defaultView || a2.parentWindow || C);
      }
      i2 = 0;
      while ((o2 = p2[i2++]) && !e2.isPropagationStopped()) f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (Y.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && Y.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && V(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
      return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !V(n2) || u2 && m(n2[d2]) && !x(n2) && ((a2 = n2[u2]) && (n2[u2] = null), S.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, xt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, xt), S.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = S.extend(new S.Event(), n2, { type: e2, isSimulated: true });
    S.event.trigger(r2, null, t2);
  } }), S.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      S.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2) return S.event.trigger(e2, t2, n2, true);
  } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n2, r2) {
    var i2 = function(e2) {
      S.event.simulate(r2, e2.target, S.event.fix(e2));
    };
    S.event.special[r2] = { setup: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2);
      t2 || e2.addEventListener(n2, i2, true), Y.access(e2, r2, (t2 || 0) + 1);
    }, teardown: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2) - 1;
      t2 ? Y.access(e2, r2, t2) : (e2.removeEventListener(n2, i2, true), Y.remove(e2, r2));
    } };
  });
  var bt = C.location, wt = { guid: Date.now() }, Tt = /\?/;
  S.parseXML = function(e2) {
    var t2, n2;
    if (!e2 || "string" != typeof e2) return null;
    try {
      t2 = new C.DOMParser().parseFromString(e2, "text/xml");
    } catch (e3) {
    }
    return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || S.error("Invalid XML: " + (n2 ? S.map(n2.childNodes, function(e3) {
      return e3.textContent;
    }).join("\n") : e2)), t2;
  };
  var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i;
  function At(n2, e2, r2, i2) {
    var t2;
    if (Array.isArray(e2)) S.each(e2, function(e3, t3) {
      r2 || Ct.test(n2) ? i2(n2, t3) : At(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
    });
    else if (r2 || "object" !== w(e2)) i2(n2, e2);
    else for (t2 in e2) At(n2 + "[" + t2 + "]", e2[t2], r2, i2);
  }
  S.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = m(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2) return "";
    if (Array.isArray(e2) || e2.jquery && !S.isPlainObject(e2)) S.each(e2, function() {
      i2(this.name, this.value);
    });
    else for (n2 in e2) At(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, S.fn.extend({ serialize: function() {
    return S.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = S.prop(this, "elements");
      return e2 ? S.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e2) && (this.checked || !pe.test(e2));
    }).map(function(e2, t2) {
      var n2 = S(this).val();
      return null == n2 ? null : Array.isArray(n2) ? S.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(Et, "\r\n") };
      }) : { name: t2.name, value: n2.replace(Et, "\r\n") };
    }).get();
  } });
  var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a");
  function It(o2) {
    return function(e2, t2) {
      "string" != typeof e2 && (t2 = e2, e2 = "*");
      var n2, r2 = 0, i2 = e2.toLowerCase().match(P) || [];
      if (m(t2)) while (n2 = i2[r2++]) "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
    };
  }
  function Wt(t2, i2, o2, a2) {
    var s2 = {}, u2 = t2 === Pt;
    function l2(e2) {
      var r2;
      return s2[e2] = true, S.each(t2[e2] || [], function(e3, t3) {
        var n2 = t3(i2, o2, a2);
        return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
      }), r2;
    }
    return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
  }
  function Ft(e2, t2) {
    var n2, r2, i2 = S.ajaxSettings.flatOptions || {};
    for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
    return r2 && S.extend(true, e2, r2), e2;
  }
  Mt.href = bt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
    return t2 ? Ft(Ft(e2, S.ajaxSettings), t2) : Ft(S.ajaxSettings, e2);
  }, ajaxPrefilter: It(Ot), ajaxTransport: It(Pt), ajax: function(e2, t2) {
    "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
    var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = S.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? S(y2) : S.event, x2 = S.Deferred(), b2 = S.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
      var t3;
      if (h2) {
        if (!n2) {
          n2 = {};
          while (t3 = qt.exec(p2)) n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
        }
        t3 = n2[e3.toLowerCase() + " "];
      }
      return null == t3 ? null : t3.join(", ");
    }, getAllResponseHeaders: function() {
      return h2 ? p2 : null;
    }, setRequestHeader: function(e3, t3) {
      return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
    }, overrideMimeType: function(e3) {
      return null == h2 && (v2.mimeType = e3), this;
    }, statusCode: function(e3) {
      var t3;
      if (e3) if (h2) T2.always(e3[T2.status]);
      else for (t3 in e3) w2[t3] = [w2[t3], e3[t3]];
      return this;
    }, abort: function(e3) {
      var t3 = e3 || u2;
      return c2 && c2.abort(t3), l2(0, t3), this;
    } };
    if (x2.promise(T2), v2.url = ((e2 || v2.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(P) || [""], null == v2.crossDomain) {
      r2 = E.createElement("a");
      try {
        r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Mt.protocol + "//" + Mt.host != r2.protocol + "//" + r2.host;
      } catch (e3) {
        v2.crossDomain = true;
      }
    }
    if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = S.param(v2.data, v2.traditional)), Wt(Ot, v2, t2, T2), h2) return T2;
    for (i2 in (g2 = S.event && v2.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Lt.test(v2.type), f2 = v2.url.replace(jt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Nt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (Tt.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(Dt, "$1"), o2 = (Tt.test(f2) ? "&" : "?") + "_=" + wt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (S.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", S.lastModified[f2]), S.etag[f2] && T2.setRequestHeader("If-None-Match", S.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers) T2.setRequestHeader(i2, v2.headers[i2]);
    if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2)) return T2.abort();
    if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Wt(Pt, v2, t2, T2)) {
      if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2) return T2;
      v2.async && 0 < v2.timeout && (d2 = C.setTimeout(function() {
        T2.abort("timeout");
      }, v2.timeout));
      try {
        h2 = false, c2.send(a2, l2);
      } catch (e3) {
        if (h2) throw e3;
        l2(-1, e3);
      }
    } else l2(-1, "No Transport");
    function l2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = t3;
      h2 || (h2 = true, d2 && C.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = function(e4, t4, n4) {
        var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
        while ("*" === u4[0]) u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
        if (r4) {
          for (i4 in s4) if (s4[i4] && s4[i4].test(r4)) {
            u4.unshift(i4);
            break;
          }
        }
        if (u4[0] in n4) o4 = u4[0];
        else {
          for (i4 in n4) {
            if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
              o4 = i4;
              break;
            }
            a4 || (a4 = i4);
          }
          o4 = o4 || a4;
        }
        if (o4) return o4 !== u4[0] && u4.unshift(o4), n4[o4];
      }(v2, T2, n3)), !i3 && -1 < S.inArray("script", v2.dataTypes) && S.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
      }), s3 = function(e4, t4, n4, r4) {
        var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
        if (c3[1]) for (a4 in e4.converters) l4[a4.toLowerCase()] = e4.converters[a4];
        o4 = c3.shift();
        while (o4) if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
          if ("*" === o4) o4 = u4;
          else if ("*" !== u4 && u4 !== o4) {
            if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
              for (i4 in l4) if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                break;
              }
            }
            if (true !== a4) if (a4 && e4["throws"]) t4 = a4(t4);
            else try {
              t4 = a4(t4);
            } catch (e5) {
              return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
            }
          }
        }
        return { state: "success", data: t4 };
      }(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (S.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (S.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --S.active || S.event.trigger("ajaxStop")));
    }
    return T2;
  }, getJSON: function(e2, t2, n2) {
    return S.get(e2, t2, n2, "json");
  }, getScript: function(e2, t2) {
    return S.get(e2, void 0, t2, "script");
  } }), S.each(["get", "post"], function(e2, i2) {
    S[i2] = function(e3, t2, n2, r2) {
      return m(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), S.ajax(S.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, S.isPlainObject(e3) && e3));
    };
  }), S.ajaxPrefilter(function(e2) {
    var t2;
    for (t2 in e2.headers) "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
  }), S._evalUrl = function(e2, t2, n2) {
    return S.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
    } }, dataFilter: function(e3) {
      S.globalEval(e3, t2, n2);
    } });
  }, S.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (m(e2) && (e2 = e2.call(this[0])), t2 = S(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild) e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(n2) {
    return m(n2) ? this.each(function(e2) {
      S(this).wrapInner(n2.call(this, e2));
    }) : this.each(function() {
      var e2 = S(this), t2 = e2.contents();
      t2.length ? t2.wrapAll(n2) : e2.append(n2);
    });
  }, wrap: function(t2) {
    var n2 = m(t2);
    return this.each(function(e2) {
      S(this).wrapAll(n2 ? t2.call(this, e2) : t2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      S(this).replaceWith(this.childNodes);
    }), this;
  } }), S.expr.pseudos.hidden = function(e2) {
    return !S.expr.pseudos.visible(e2);
  }, S.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, S.ajaxSettings.xhr = function() {
    try {
      return new C.XMLHttpRequest();
    } catch (e2) {
    }
  };
  var Bt = { 0: 200, 1223: 204 }, $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i2) {
    var o2, a2;
    if (y.cors || $t && !i2.crossDomain) return { send: function(e2, t2) {
      var n2, r2 = i2.xhr();
      if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields) for (n2 in i2.xhrFields) r2[n2] = i2.xhrFields[n2];
      for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2) r2.setRequestHeader(n2, e2[n2]);
      o2 = function(e3) {
        return function() {
          o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Bt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
        };
      }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
        4 === r2.readyState && C.setTimeout(function() {
          o2 && a2();
        });
      }, o2 = o2("abort");
      try {
        r2.send(i2.hasContent && i2.data || null);
      } catch (e3) {
        if (o2) throw e3;
      }
    }, abort: function() {
      o2 && o2();
    } };
  }), S.ajaxPrefilter(function(e2) {
    e2.crossDomain && (e2.contents.script = false);
  }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
    return S.globalEval(e2), e2;
  } } }), S.ajaxPrefilter("script", function(e2) {
    void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
  }), S.ajaxTransport("script", function(n2) {
    var r2, i2;
    if (n2.crossDomain || n2.scriptAttrs) return { send: function(e2, t2) {
      r2 = S("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
        r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
      }), E.head.appendChild(r2[0]);
    }, abort: function() {
      i2 && i2();
    } };
  });
  var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e2 = zt.pop() || S.expando + "_" + wt.guid++;
    return this[e2] = true, e2;
  } }), S.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
    var r2, i2, o2, a2 = false !== e2.jsonp && (Ut.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e2.data) && "data");
    if (a2 || "jsonp" === e2.dataTypes[0]) return r2 = e2.jsonpCallback = m(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Ut, "$1" + r2) : false !== e2.jsonp && (e2.url += (Tt.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
      return o2 || S.error(r2 + " was not called"), o2[0];
    }, e2.dataTypes[0] = "json", i2 = C[r2], C[r2] = function() {
      o2 = arguments;
    }, n2.always(function() {
      void 0 === i2 ? S(C).removeProp(r2) : C[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, zt.push(r2)), o2 && m(i2) && i2(o2[0]), o2 = i2 = void 0;
    }), "script";
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (y.createHTMLDocument ? ((r2 = (t2 = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t2.head.appendChild(r2)) : t2 = E), o2 = !n2 && [], (i2 = N.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = xe([e2], t2, o2), o2 && o2.length && S(o2).remove(), S.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, S.fn.load = function(e2, t2, n2) {
    var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
    return -1 < s2 && (r2 = ht(e2.slice(s2)), e2 = e2.slice(0, s2)), m(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && S.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
      o2 = arguments, a2.html(r2 ? S("<div>").append(S.parseHTML(e3)).find(r2) : e3);
    }).always(n2 && function(e3, t3) {
      a2.each(function() {
        n2.apply(this, o2 || [e3.responseText, t3, e3]);
      });
    }), this;
  }, S.expr.pseudos.animated = function(t2) {
    return S.grep(S.timers, function(e2) {
      return t2 === e2.elem;
    }).length;
  }, S.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2 = S.css(e2, "position"), c2 = S(e2), f2 = {};
    "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = S.css(e2, "top"), u2 = S.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), m(t2) && (t2 = t2.call(e2, n2, S.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
  } }, S.fn.extend({ offset: function(t2) {
    if (arguments.length) return void 0 === t2 ? this : this.each(function(e3) {
      S.offset.setOffset(this, t2, e3);
    });
    var e2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === S.css(r2, "position")) t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === S.css(e2, "position")) e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = S(e2).offset()).top += S.css(e2, "borderTopWidth", true), i2.left += S.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - S.css(r2, "marginTop", true), left: t2.left - i2.left - S.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === S.css(e2, "position")) e2 = e2.offsetParent;
      return e2 || re;
    });
  } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
    var o2 = "pageYOffset" === i2;
    S.fn[t2] = function(e2) {
      return $(this, function(e3, t3, n2) {
        var r2;
        if (x(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2) return r2 ? r2[i2] : e3[t3];
        r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
      }, t2, e2, arguments.length);
    };
  }), S.each(["top", "left"], function(e2, n2) {
    S.cssHooks[n2] = Fe(y.pixelPosition, function(e3, t2) {
      if (t2) return t2 = We(e3, n2), Pe.test(t2) ? S(e3).position()[n2] + "px" : t2;
    });
  }), S.each({ Height: "height", Width: "width" }, function(a2, s2) {
    S.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
      S.fn[o2] = function(e2, t2) {
        var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
        return $(this, function(e3, t3, n3) {
          var r3;
          return x(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? S.css(e3, t3, i2) : S.style(e3, t3, n3, i2);
        }, s2, n2 ? e2 : void 0, n2);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
    S.fn[t2] = function(e3) {
      return this.on(t2, e3);
    };
  }), S.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.mouseenter(e2).mouseleave(t2 || e2);
  } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
    S.fn[n2] = function(e3, t2) {
      return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
    };
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), m(e2)) return r2 = s.call(arguments, 2), (i2 = function() {
      return e2.apply(t2 || this, r2.concat(s.call(arguments)));
    }).guid = e2.guid = e2.guid || S.guid++, i2;
  }, S.holdReady = function(e2) {
    e2 ? S.readyWait++ : S.ready(true);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e2) {
    var t2 = S.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, S.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(Xt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return S;
  });
  var Vt = C.jQuery, Gt = C.$;
  return S.noConflict = function(e2) {
    return C.$ === S && (C.$ = Gt), e2 && C.jQuery === S && (C.jQuery = Vt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2022The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(this, function(t) {
  "use strict";
  function e(t2) {
    if (t2 && t2.__esModule) return t2;
    var e2 = /* @__PURE__ */ Object.create(null);
    return t2 && Object.keys(t2).forEach(function(s2) {
      if ("default" !== s2) {
        var i2 = Object.getOwnPropertyDescriptor(t2, s2);
        Object.defineProperty(e2, s2, i2.get ? i2 : { enumerable: true, get: function() {
          return t2[s2];
        } });
      }
    }), e2.default = t2, Object.freeze(e2);
  }
  var s = e(t);
  const i = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
    const s2 = [];
    let i2 = t2.parentNode;
    for (; i2 && i2.nodeType === Node.ELEMENT_NODE && 3 !== i2.nodeType; ) i2.matches(e2) && s2.push(i2), i2 = i2.parentNode;
    return s2;
  }, prev(t2, e2) {
    let s2 = t2.previousElementSibling;
    for (; s2; ) {
      if (s2.matches(e2)) return [s2];
      s2 = s2.previousElementSibling;
    }
    return [];
  }, next(t2, e2) {
    let s2 = t2.nextElementSibling;
    for (; s2; ) {
      if (s2.matches(e2)) return [s2];
      s2 = s2.nextElementSibling;
    }
    return [];
  } }, n = (t2) => {
    do {
      t2 += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t2));
    return t2;
  }, o = (t2) => {
    let e2 = t2.getAttribute("data-bs-target");
    if (!e2 || "#" === e2) {
      let s2 = t2.getAttribute("href");
      if (!s2 || !s2.includes("#") && !s2.startsWith(".")) return null;
      s2.includes("#") && !s2.startsWith("#") && (s2 = "#" + s2.split("#")[1]), e2 = s2 && "#" !== s2 ? s2.trim() : null;
    }
    return e2;
  }, r = (t2) => {
    const e2 = o(t2);
    return e2 && document.querySelector(e2) ? e2 : null;
  }, a = (t2) => {
    const e2 = o(t2);
    return e2 ? document.querySelector(e2) : null;
  }, l = (t2) => {
    t2.dispatchEvent(new Event("transitionend"));
  }, c = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), h = (t2) => c(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? i.findOne(t2) : null, d = (t2, e2, s2) => {
    Object.keys(s2).forEach((i2) => {
      const n2 = s2[i2], o2 = e2[i2], r2 = o2 && c(o2) ? "element" : null == (a2 = o2) ? "" + a2 : {}.toString.call(a2).match(/\s([a-z]+)/i)[1].toLowerCase();
      var a2;
      if (!new RegExp(n2).test(r2)) throw new TypeError(`${t2.toUpperCase()}: Option "${i2}" provided type "${r2}" but expected type "${n2}".`);
    });
  }, u = (t2) => !(!c(t2) || 0 === t2.getClientRects().length) && "visible" === getComputedStyle(t2).getPropertyValue("visibility"), g = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), p = (t2) => {
    if (!document.documentElement.attachShadow) return null;
    if ("function" == typeof t2.getRootNode) {
      const e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? p(t2.parentNode) : null;
  }, f = () => {
  }, m = (t2) => t2.offsetHeight, _ = () => {
    const { jQuery: t2 } = window;
    return t2 && !document.body.hasAttribute("data-bs-no-jquery") ? t2 : null;
  }, b = [], v = () => "rtl" === document.documentElement.dir, y = (t2) => {
    var e2;
    e2 = () => {
      const e3 = _();
      if (e3) {
        const s2 = t2.NAME, i2 = e3.fn[s2];
        e3.fn[s2] = t2.jQueryInterface, e3.fn[s2].Constructor = t2, e3.fn[s2].noConflict = () => (e3.fn[s2] = i2, t2.jQueryInterface);
      }
    }, "loading" === document.readyState ? (b.length || document.addEventListener("DOMContentLoaded", () => {
      b.forEach((t3) => t3());
    }), b.push(e2)) : e2();
  }, w = (t2) => {
    "function" == typeof t2 && t2();
  }, E = (t2, e2, s2 = true) => {
    if (!s2) return void w(t2);
    const i2 = ((t3) => {
      if (!t3) return 0;
      let { transitionDuration: e3, transitionDelay: s3 } = window.getComputedStyle(t3);
      const i3 = Number.parseFloat(e3), n3 = Number.parseFloat(s3);
      return i3 || n3 ? (e3 = e3.split(",")[0], s3 = s3.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(s3))) : 0;
    })(e2) + 5;
    let n2 = false;
    const o2 = ({ target: s3 }) => {
      s3 === e2 && (n2 = true, e2.removeEventListener("transitionend", o2), w(t2));
    };
    e2.addEventListener("transitionend", o2), setTimeout(() => {
      n2 || l(e2);
    }, i2);
  }, A = (t2, e2, s2, i2) => {
    let n2 = t2.indexOf(e2);
    if (-1 === n2) return t2[!s2 && i2 ? t2.length - 1 : 0];
    const o2 = t2.length;
    return n2 += s2 ? 1 : -1, i2 && (n2 = (n2 + o2) % o2), t2[Math.max(0, Math.min(n2, o2 - 1))];
  }, T = /[^.]*(?=\..*)\.|.*/, C = /\..*/, k = /::\d+$/, L = {};
  let O = 1;
  const D = { mouseenter: "mouseover", mouseleave: "mouseout" }, I = /^(mouseenter|mouseleave)/i, N = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function S(t2, e2) {
    return e2 && `${e2}::${O++}` || t2.uidEvent || O++;
  }
  function x(t2) {
    const e2 = S(t2);
    return t2.uidEvent = e2, L[e2] = L[e2] || {}, L[e2];
  }
  function M(t2, e2, s2 = null) {
    const i2 = Object.keys(t2);
    for (let n2 = 0, o2 = i2.length; n2 < o2; n2++) {
      const o3 = t2[i2[n2]];
      if (o3.originalHandler === e2 && o3.delegationSelector === s2) return o3;
    }
    return null;
  }
  function P(t2, e2, s2) {
    const i2 = "string" == typeof e2, n2 = i2 ? s2 : e2;
    let o2 = R(t2);
    return N.has(o2) || (o2 = t2), [i2, n2, o2];
  }
  function j(t2, e2, s2, i2, n2) {
    if ("string" != typeof e2 || !t2) return;
    if (s2 || (s2 = i2, i2 = null), I.test(e2)) {
      const t3 = (t4) => function(e3) {
        if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget)) return t4.call(this, e3);
      };
      i2 ? i2 = t3(i2) : s2 = t3(s2);
    }
    const [o2, r2, a2] = P(e2, s2, i2), l2 = x(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = M(c2, r2, o2 ? s2 : null);
    if (h2) return void (h2.oneOff = h2.oneOff && n2);
    const d2 = S(r2, e2.replace(T, "")), u2 = o2 ? /* @__PURE__ */ function(t3, e3, s3) {
      return function i3(n3) {
        const o3 = t3.querySelectorAll(e3);
        for (let { target: r3 } = n3; r3 && r3 !== this; r3 = r3.parentNode) for (let a3 = o3.length; a3--; ) if (o3[a3] === r3) return n3.delegateTarget = r3, i3.oneOff && B.off(t3, n3.type, e3, s3), s3.apply(r3, [n3]);
        return null;
      };
    }(t2, s2, i2) : /* @__PURE__ */ function(t3, e3) {
      return function s3(i3) {
        return i3.delegateTarget = t3, s3.oneOff && B.off(t3, i3.type, e3), e3.apply(t3, [i3]);
      };
    }(t2, s2);
    u2.delegationSelector = o2 ? s2 : null, u2.originalHandler = r2, u2.oneOff = n2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
  }
  function H(t2, e2, s2, i2, n2) {
    const o2 = M(e2[s2], i2, n2);
    o2 && (t2.removeEventListener(s2, o2, Boolean(n2)), delete e2[s2][o2.uidEvent]);
  }
  function R(t2) {
    return t2 = t2.replace(C, ""), D[t2] || t2;
  }
  const B = { on(t2, e2, s2, i2) {
    j(t2, e2, s2, i2, false);
  }, one(t2, e2, s2, i2) {
    j(t2, e2, s2, i2, true);
  }, off(t2, e2, s2, i2) {
    if ("string" != typeof e2 || !t2) return;
    const [n2, o2, r2] = P(e2, s2, i2), a2 = r2 !== e2, l2 = x(t2), c2 = e2.startsWith(".");
    if (void 0 !== o2) {
      if (!l2 || !l2[r2]) return;
      return void H(t2, l2, r2, o2, n2 ? s2 : null);
    }
    c2 && Object.keys(l2).forEach((s3) => {
      !function(t3, e3, s4, i3) {
        const n3 = e3[s4] || {};
        Object.keys(n3).forEach((o3) => {
          if (o3.includes(i3)) {
            const i4 = n3[o3];
            H(t3, e3, s4, i4.originalHandler, i4.delegationSelector);
          }
        });
      }(t2, l2, s3, e2.slice(1));
    });
    const h2 = l2[r2] || {};
    Object.keys(h2).forEach((s3) => {
      const i3 = s3.replace(k, "");
      if (!a2 || e2.includes(i3)) {
        const e3 = h2[s3];
        H(t2, l2, r2, e3.originalHandler, e3.delegationSelector);
      }
    });
  }, trigger(t2, e2, s2) {
    if ("string" != typeof e2 || !t2) return null;
    const i2 = _(), n2 = R(e2), o2 = e2 !== n2, r2 = N.has(n2);
    let a2, l2 = true, c2 = true, h2 = false, d2 = null;
    return o2 && i2 && (a2 = i2.Event(e2, s2), i2(t2).trigger(a2), l2 = !a2.isPropagationStopped(), c2 = !a2.isImmediatePropagationStopped(), h2 = a2.isDefaultPrevented()), r2 ? (d2 = document.createEvent("HTMLEvents"), d2.initEvent(n2, l2, true)) : d2 = new CustomEvent(e2, { bubbles: l2, cancelable: true }), void 0 !== s2 && Object.keys(s2).forEach((t3) => {
      Object.defineProperty(d2, t3, { get: () => s2[t3] });
    }), h2 && d2.preventDefault(), c2 && t2.dispatchEvent(d2), d2.defaultPrevented && void 0 !== a2 && a2.preventDefault(), d2;
  } }, $ = /* @__PURE__ */ new Map();
  var W = { set(t2, e2, s2) {
    $.has(t2) || $.set(t2, /* @__PURE__ */ new Map());
    const i2 = $.get(t2);
    i2.has(e2) || 0 === i2.size ? i2.set(e2, s2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i2.keys())[0]}.`);
  }, get: (t2, e2) => $.has(t2) && $.get(t2).get(e2) || null, remove(t2, e2) {
    if (!$.has(t2)) return;
    const s2 = $.get(t2);
    s2.delete(e2), 0 === s2.size && $.delete(t2);
  } };
  class q {
    constructor(t2) {
      (t2 = h(t2)) && (this._element = t2, W.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      W.remove(this._element, this.constructor.DATA_KEY), B.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t2) => {
        this[t2] = null;
      });
    }
    _queueCallback(t2, e2, s2 = true) {
      E(t2, e2, s2);
    }
    static getInstance(t2) {
      return W.get(t2, this.DATA_KEY);
    }
    static getOrCreateInstance(t2, e2 = {}) {
      return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
    }
    static get VERSION() {
      return "5.0.2";
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    static get DATA_KEY() {
      return "bs." + this.NAME;
    }
    static get EVENT_KEY() {
      return "." + this.DATA_KEY;
    }
  }
  class z extends q {
    static get NAME() {
      return "alert";
    }
    close(t2) {
      const e2 = t2 ? this._getRootElement(t2) : this._element, s2 = this._triggerCloseEvent(e2);
      null === s2 || s2.defaultPrevented || this._removeElement(e2);
    }
    _getRootElement(t2) {
      return a(t2) || t2.closest(".alert");
    }
    _triggerCloseEvent(t2) {
      return B.trigger(t2, "close.bs.alert");
    }
    _removeElement(t2) {
      t2.classList.remove("show");
      const e2 = t2.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(t2), t2, e2);
    }
    _destroyElement(t2) {
      t2.remove(), B.trigger(t2, "closed.bs.alert");
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = z.getOrCreateInstance(this);
        "close" === t2 && e2[t2](this);
      });
    }
    static handleDismiss(t2) {
      return function(e2) {
        e2 && e2.preventDefault(), t2.close(this);
      };
    }
  }
  B.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', z.handleDismiss(new z())), y(z);
  class F extends q {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = F.getOrCreateInstance(this);
        "toggle" === t2 && e2[t2]();
      });
    }
  }
  function U(t2) {
    return "true" === t2 || "false" !== t2 && (t2 === Number(t2).toString() ? Number(t2) : "" === t2 || "null" === t2 ? null : t2);
  }
  function K(t2) {
    return t2.replace(/[A-Z]/g, (t3) => "-" + t3.toLowerCase());
  }
  B.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (t2) => {
    t2.preventDefault();
    const e2 = t2.target.closest('[data-bs-toggle="button"]');
    F.getOrCreateInstance(e2).toggle();
  }), y(F);
  const V = { setDataAttribute(t2, e2, s2) {
    t2.setAttribute("data-bs-" + K(e2), s2);
  }, removeDataAttribute(t2, e2) {
    t2.removeAttribute("data-bs-" + K(e2));
  }, getDataAttributes(t2) {
    if (!t2) return {};
    const e2 = {};
    return Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs")).forEach((s2) => {
      let i2 = s2.replace(/^bs/, "");
      i2 = i2.charAt(0).toLowerCase() + i2.slice(1, i2.length), e2[i2] = U(t2.dataset[s2]);
    }), e2;
  }, getDataAttribute: (t2, e2) => U(t2.getAttribute("data-bs-" + K(e2))), offset(t2) {
    const e2 = t2.getBoundingClientRect();
    return { top: e2.top + document.body.scrollTop, left: e2.left + document.body.scrollLeft };
  }, position: (t2) => ({ top: t2.offsetTop, left: t2.offsetLeft }) }, Q = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true }, X = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, Y = "next", G = "prev", Z = "left", J = "right", tt = { ArrowLeft: J, ArrowRight: Z };
  class et extends q {
    constructor(t2, e2) {
      super(t2), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e2), this._indicatorsElement = i.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
    }
    static get Default() {
      return Q;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(Y);
    }
    nextWhenVisible() {
      !document.hidden && u(this._element) && this.next();
    }
    prev() {
      this._slide(G);
    }
    pause(t2) {
      t2 || (this._isPaused = true), i.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (l(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    }
    cycle(t2) {
      t2 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }
    to(t2) {
      this._activeElement = i.findOne(".active.carousel-item", this._element);
      const e2 = this._getItemIndex(this._activeElement);
      if (t2 > this._items.length - 1 || t2 < 0) return;
      if (this._isSliding) return void B.one(this._element, "slid.bs.carousel", () => this.to(t2));
      if (e2 === t2) return this.pause(), void this.cycle();
      const s2 = t2 > e2 ? Y : G;
      this._slide(s2, this._items[t2]);
    }
    _getConfig(t2) {
      return t2 = { ...Q, ...V.getDataAttributes(this._element), ..."object" == typeof t2 ? t2 : {} }, d("carousel", t2, X), t2;
    }
    _handleSwipe() {
      const t2 = Math.abs(this.touchDeltaX);
      if (t2 <= 40) return;
      const e2 = t2 / this.touchDeltaX;
      this.touchDeltaX = 0, e2 && this._slide(e2 > 0 ? J : Z);
    }
    _addEventListeners() {
      this._config.keyboard && B.on(this._element, "keydown.bs.carousel", (t2) => this._keydown(t2)), "hover" === this._config.pause && (B.on(this._element, "mouseenter.bs.carousel", (t2) => this.pause(t2)), B.on(this._element, "mouseleave.bs.carousel", (t2) => this.cycle(t2))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t2 = (t3) => {
        !this._pointerEvent || "pen" !== t3.pointerType && "touch" !== t3.pointerType ? this._pointerEvent || (this.touchStartX = t3.touches[0].clientX) : this.touchStartX = t3.clientX;
      }, e2 = (t3) => {
        this.touchDeltaX = t3.touches && t3.touches.length > 1 ? 0 : t3.touches[0].clientX - this.touchStartX;
      }, s2 = (t3) => {
        !this._pointerEvent || "pen" !== t3.pointerType && "touch" !== t3.pointerType || (this.touchDeltaX = t3.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t4) => this.cycle(t4), 500 + this._config.interval));
      };
      i.find(".carousel-item img", this._element).forEach((t3) => {
        B.on(t3, "dragstart.bs.carousel", (t4) => t4.preventDefault());
      }), this._pointerEvent ? (B.on(this._element, "pointerdown.bs.carousel", (e3) => t2(e3)), B.on(this._element, "pointerup.bs.carousel", (t3) => s2(t3)), this._element.classList.add("pointer-event")) : (B.on(this._element, "touchstart.bs.carousel", (e3) => t2(e3)), B.on(this._element, "touchmove.bs.carousel", (t3) => e2(t3)), B.on(this._element, "touchend.bs.carousel", (t3) => s2(t3)));
    }
    _keydown(t2) {
      if (/input|textarea/i.test(t2.target.tagName)) return;
      const e2 = tt[t2.key];
      e2 && (t2.preventDefault(), this._slide(e2));
    }
    _getItemIndex(t2) {
      return this._items = t2 && t2.parentNode ? i.find(".carousel-item", t2.parentNode) : [], this._items.indexOf(t2);
    }
    _getItemByOrder(t2, e2) {
      const s2 = t2 === Y;
      return A(this._items, e2, s2, this._config.wrap);
    }
    _triggerSlideEvent(t2, e2) {
      const s2 = this._getItemIndex(t2), n2 = this._getItemIndex(i.findOne(".active.carousel-item", this._element));
      return B.trigger(this._element, "slide.bs.carousel", { relatedTarget: t2, direction: e2, from: n2, to: s2 });
    }
    _setActiveIndicatorElement(t2) {
      if (this._indicatorsElement) {
        const e2 = i.findOne(".active", this._indicatorsElement);
        e2.classList.remove("active"), e2.removeAttribute("aria-current");
        const s2 = i.find("[data-bs-target]", this._indicatorsElement);
        for (let e3 = 0; e3 < s2.length; e3++) if (Number.parseInt(s2[e3].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t2)) {
          s2[e3].classList.add("active"), s2[e3].setAttribute("aria-current", "true");
          break;
        }
      }
    }
    _updateInterval() {
      const t2 = this._activeElement || i.findOne(".active.carousel-item", this._element);
      if (!t2) return;
      const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
      e2 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e2) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    _slide(t2, e2) {
      const s2 = this._directionToOrder(t2), n2 = i.findOne(".active.carousel-item", this._element), o2 = this._getItemIndex(n2), r2 = e2 || this._getItemByOrder(s2, n2), a2 = this._getItemIndex(r2), l2 = Boolean(this._interval), c2 = s2 === Y, h2 = c2 ? "carousel-item-start" : "carousel-item-end", d2 = c2 ? "carousel-item-next" : "carousel-item-prev", u2 = this._orderToDirection(s2);
      if (r2 && r2.classList.contains("active")) return void (this._isSliding = false);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(r2, u2).defaultPrevented) return;
      if (!n2 || !r2) return;
      this._isSliding = true, l2 && this.pause(), this._setActiveIndicatorElement(r2), this._activeElement = r2;
      const g2 = () => {
        B.trigger(this._element, "slid.bs.carousel", { relatedTarget: r2, direction: u2, from: o2, to: a2 });
      };
      if (this._element.classList.contains("slide")) {
        r2.classList.add(d2), m(r2), n2.classList.add(h2), r2.classList.add(h2);
        const t3 = () => {
          r2.classList.remove(h2, d2), r2.classList.add("active"), n2.classList.remove("active", d2, h2), this._isSliding = false, setTimeout(g2, 0);
        };
        this._queueCallback(t3, n2, true);
      } else n2.classList.remove("active"), r2.classList.add("active"), this._isSliding = false, g2();
      l2 && this.cycle();
    }
    _directionToOrder(t2) {
      return [J, Z].includes(t2) ? v() ? t2 === Z ? G : Y : t2 === Z ? Y : G : t2;
    }
    _orderToDirection(t2) {
      return [Y, G].includes(t2) ? v() ? t2 === G ? Z : J : t2 === G ? J : Z : t2;
    }
    static carouselInterface(t2, e2) {
      const s2 = et.getOrCreateInstance(t2, e2);
      let { _config: i2 } = s2;
      "object" == typeof e2 && (i2 = { ...i2, ...e2 });
      const n2 = "string" == typeof e2 ? e2 : i2.slide;
      if ("number" == typeof e2) s2.to(e2);
      else if ("string" == typeof n2) {
        if (void 0 === s2[n2]) throw new TypeError(`No method named "${n2}"`);
        s2[n2]();
      } else i2.interval && i2.ride && (s2.pause(), s2.cycle());
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        et.carouselInterface(this, t2);
      });
    }
    static dataApiClickHandler(t2) {
      const e2 = a(this);
      if (!e2 || !e2.classList.contains("carousel")) return;
      const s2 = { ...V.getDataAttributes(e2), ...V.getDataAttributes(this) }, i2 = this.getAttribute("data-bs-slide-to");
      i2 && (s2.interval = false), et.carouselInterface(e2, s2), i2 && et.getInstance(e2).to(i2), t2.preventDefault();
    }
  }
  B.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", et.dataApiClickHandler), B.on(window, "load.bs.carousel.data-api", () => {
    const t2 = i.find('[data-bs-ride="carousel"]');
    for (let e2 = 0, s2 = t2.length; e2 < s2; e2++) et.carouselInterface(t2[e2], et.getInstance(t2[e2]));
  }), y(et);
  const st = { toggle: true, parent: "" }, it = { toggle: "boolean", parent: "(string|element)" };
  class nt extends q {
    constructor(t2, e2) {
      super(t2), this._isTransitioning = false, this._config = this._getConfig(e2), this._triggerArray = i.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
      const s2 = i.find('[data-bs-toggle="collapse"]');
      for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
        const e4 = s2[t3], n2 = r(e4), o2 = i.find(n2).filter((t4) => t4 === this._element);
        null !== n2 && o2.length && (this._selector = n2, this._triggerArray.push(e4));
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }
    static get Default() {
      return st;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._element.classList.contains("show")) return;
      let t2, e2;
      this._parent && (t2 = i.find(".show, .collapsing", this._parent).filter((t3) => "string" == typeof this._config.parent ? t3.getAttribute("data-bs-parent") === this._config.parent : t3.classList.contains("collapse")), 0 === t2.length && (t2 = null));
      const s2 = i.findOne(this._selector);
      if (t2) {
        const i2 = t2.find((t3) => s2 !== t3);
        if (e2 = i2 ? nt.getInstance(i2) : null, e2 && e2._isTransitioning) return;
      }
      if (B.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      t2 && t2.forEach((t3) => {
        s2 !== t3 && nt.collapseInterface(t3, "hide"), e2 || W.set(t3, "bs.collapse", null);
      });
      const n2 = this._getDimension();
      this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n2] = 0, this._triggerArray.length && this._triggerArray.forEach((t3) => {
        t3.classList.remove("collapsed"), t3.setAttribute("aria-expanded", true);
      }), this.setTransitioning(true);
      const o2 = "scroll" + (n2[0].toUpperCase() + n2.slice(1));
      this._queueCallback(() => {
        this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n2] = "", this.setTransitioning(false), B.trigger(this._element, "shown.bs.collapse");
      }, this._element, true), this._element.style[n2] = this._element[o2] + "px";
    }
    hide() {
      if (this._isTransitioning || !this._element.classList.contains("show")) return;
      if (B.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t2 = this._getDimension();
      this._element.style[t2] = this._element.getBoundingClientRect()[t2] + "px", m(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
      const e2 = this._triggerArray.length;
      if (e2 > 0) for (let t3 = 0; t3 < e2; t3++) {
        const e3 = this._triggerArray[t3], s2 = a(e3);
        s2 && !s2.classList.contains("show") && (e3.classList.add("collapsed"), e3.setAttribute("aria-expanded", false));
      }
      this.setTransitioning(true), this._element.style[t2] = "", this._queueCallback(() => {
        this.setTransitioning(false), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), B.trigger(this._element, "hidden.bs.collapse");
      }, this._element, true);
    }
    setTransitioning(t2) {
      this._isTransitioning = t2;
    }
    _getConfig(t2) {
      return (t2 = { ...st, ...t2 }).toggle = Boolean(t2.toggle), d("collapse", t2, it), t2;
    }
    _getDimension() {
      return this._element.classList.contains("width") ? "width" : "height";
    }
    _getParent() {
      let { parent: t2 } = this._config;
      t2 = h(t2);
      const e2 = `[data-bs-toggle="collapse"][data-bs-parent="${t2}"]`;
      return i.find(e2, t2).forEach((t3) => {
        const e3 = a(t3);
        this._addAriaAndCollapsedClass(e3, [t3]);
      }), t2;
    }
    _addAriaAndCollapsedClass(t2, e2) {
      if (!t2 || !e2.length) return;
      const s2 = t2.classList.contains("show");
      e2.forEach((t3) => {
        s2 ? t3.classList.remove("collapsed") : t3.classList.add("collapsed"), t3.setAttribute("aria-expanded", s2);
      });
    }
    static collapseInterface(t2, e2) {
      let s2 = nt.getInstance(t2);
      const i2 = { ...st, ...V.getDataAttributes(t2), ..."object" == typeof e2 && e2 ? e2 : {} };
      if (!s2 && i2.toggle && "string" == typeof e2 && /show|hide/.test(e2) && (i2.toggle = false), s2 || (s2 = new nt(t2, i2)), "string" == typeof e2) {
        if (void 0 === s2[e2]) throw new TypeError(`No method named "${e2}"`);
        s2[e2]();
      }
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        nt.collapseInterface(this, t2);
      });
    }
  }
  B.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function(t2) {
    ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
    const e2 = V.getDataAttributes(this), s2 = r(this);
    i.find(s2).forEach((t3) => {
      const s3 = nt.getInstance(t3);
      let i2;
      s3 ? (null === s3._parent && "string" == typeof e2.parent && (s3._config.parent = e2.parent, s3._parent = s3._getParent()), i2 = "toggle") : i2 = e2, nt.collapseInterface(t3, i2);
    });
  }), y(nt);
  const ot = new RegExp("ArrowUp|ArrowDown|Escape"), rt = v() ? "top-end" : "top-start", at = v() ? "top-start" : "top-end", lt = v() ? "bottom-end" : "bottom-start", ct = v() ? "bottom-start" : "bottom-end", ht = v() ? "left-start" : "right-start", dt = v() ? "right-start" : "left-start", ut = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: true }, gt = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
  class pt extends q {
    constructor(t2, e2) {
      super(t2), this._popper = null, this._config = this._getConfig(e2), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }
    static get Default() {
      return ut;
    }
    static get DefaultType() {
      return gt;
    }
    static get NAME() {
      return "dropdown";
    }
    toggle() {
      g(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
    }
    show() {
      if (g(this._element) || this._menu.classList.contains("show")) return;
      const t2 = pt.getParentFromElement(this._element), e2 = { relatedTarget: this._element };
      if (!B.trigger(this._element, "show.bs.dropdown", e2).defaultPrevented) {
        if (this._inNavbar) V.setDataAttribute(this._menu, "popper", "none");
        else {
          if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          let e3 = this._element;
          "parent" === this._config.reference ? e3 = t2 : c(this._config.reference) ? e3 = h(this._config.reference) : "object" == typeof this._config.reference && (e3 = this._config.reference);
          const i2 = this._getPopperConfig(), n2 = i2.modifiers.find((t3) => "applyStyles" === t3.name && false === t3.enabled);
          this._popper = s.createPopper(e3, this._menu, i2), n2 && V.setDataAttribute(this._menu, "popper", "static");
        }
        "ontouchstart" in document.documentElement && !t2.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t3) => B.on(t3, "mouseover", f)), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), B.trigger(this._element, "shown.bs.dropdown", e2);
      }
    }
    hide() {
      if (g(this._element) || !this._menu.classList.contains("show")) return;
      const t2 = { relatedTarget: this._element };
      this._completeHide(t2);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _addEventListeners() {
      B.on(this._element, "click.bs.dropdown", (t2) => {
        t2.preventDefault(), this.toggle();
      });
    }
    _completeHide(t2) {
      B.trigger(this._element, "hide.bs.dropdown", t2).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => B.off(t3, "mouseover", f)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), V.removeDataAttribute(this._menu, "popper"), B.trigger(this._element, "hidden.bs.dropdown", t2));
    }
    _getConfig(t2) {
      if (t2 = { ...this.constructor.Default, ...V.getDataAttributes(this._element), ...t2 }, d("dropdown", t2, this.constructor.DefaultType), "object" == typeof t2.reference && !c(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return t2;
    }
    _getMenuElement() {
      return i.next(this._element, ".dropdown-menu")[0];
    }
    _getPlacement() {
      const t2 = this._element.parentNode;
      if (t2.classList.contains("dropend")) return ht;
      if (t2.classList.contains("dropstart")) return dt;
      const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t2.classList.contains("dropup") ? e2 ? at : rt : e2 ? ct : lt;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _getPopperConfig() {
      const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return "static" === this._config.display && (t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t2) : this._config.popperConfig };
    }
    _selectMenuItem({ key: t2, target: e2 }) {
      const s2 = i.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(u);
      s2.length && A(s2, e2, "ArrowDown" === t2, !s2.includes(e2)).focus();
    }
    static dropdownInterface(t2, e2) {
      const s2 = pt.getOrCreateInstance(t2, e2);
      if ("string" == typeof e2) {
        if (void 0 === s2[e2]) throw new TypeError(`No method named "${e2}"`);
        s2[e2]();
      }
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        pt.dropdownInterface(this, t2);
      });
    }
    static clearMenus(t2) {
      if (t2 && (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key)) return;
      const e2 = i.find('[data-bs-toggle="dropdown"]');
      for (let s2 = 0, i2 = e2.length; s2 < i2; s2++) {
        const i3 = pt.getInstance(e2[s2]);
        if (!i3 || false === i3._config.autoClose) continue;
        if (!i3._element.classList.contains("show")) continue;
        const n2 = { relatedTarget: i3._element };
        if (t2) {
          const e3 = t2.composedPath(), s3 = e3.includes(i3._menu);
          if (e3.includes(i3._element) || "inside" === i3._config.autoClose && !s3 || "outside" === i3._config.autoClose && s3) continue;
          if (i3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName))) continue;
          "click" === t2.type && (n2.clickEvent = t2);
        }
        i3._completeHide(n2);
      }
    }
    static getParentFromElement(t2) {
      return a(t2) || t2.parentNode;
    }
    static dataApiKeydownHandler(t2) {
      if (/input|textarea/i.test(t2.target.tagName) ? "Space" === t2.key || "Escape" !== t2.key && ("ArrowDown" !== t2.key && "ArrowUp" !== t2.key || t2.target.closest(".dropdown-menu")) : !ot.test(t2.key)) return;
      const e2 = this.classList.contains("show");
      if (!e2 && "Escape" === t2.key) return;
      if (t2.preventDefault(), t2.stopPropagation(), g(this)) return;
      const s2 = () => this.matches('[data-bs-toggle="dropdown"]') ? this : i.prev(this, '[data-bs-toggle="dropdown"]')[0];
      return "Escape" === t2.key ? (s2().focus(), void pt.clearMenus()) : "ArrowUp" === t2.key || "ArrowDown" === t2.key ? (e2 || s2().click(), void pt.getInstance(s2())._selectMenuItem(t2)) : void (e2 && "Space" !== t2.key || pt.clearMenus());
    }
  }
  B.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', pt.dataApiKeydownHandler), B.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", pt.dataApiKeydownHandler), B.on(document, "click.bs.dropdown.data-api", pt.clearMenus), B.on(document, "keyup.bs.dropdown.data-api", pt.clearMenus), B.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function(t2) {
    t2.preventDefault(), pt.dropdownInterface(this);
  }), y(pt);
  class ft {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t2 = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t2);
    }
    hide() {
      const t2 = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e2) => e2 + t2), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (e2) => e2 + t2), this._setElementAttributes(".sticky-top", "marginRight", (e2) => e2 - t2);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(t2, e2, s2) {
      const i2 = this.getWidth();
      this._applyManipulationCallback(t2, (t3) => {
        if (t3 !== this._element && window.innerWidth > t3.clientWidth + i2) return;
        this._saveInitialAttribute(t3, e2);
        const n2 = window.getComputedStyle(t3)[e2];
        t3.style[e2] = s2(Number.parseFloat(n2)) + "px";
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
    }
    _saveInitialAttribute(t2, e2) {
      const s2 = t2.style[e2];
      s2 && V.setDataAttribute(t2, e2, s2);
    }
    _resetElementAttributes(t2, e2) {
      this._applyManipulationCallback(t2, (t3) => {
        const s2 = V.getDataAttribute(t3, e2);
        void 0 === s2 ? t3.style.removeProperty(e2) : (V.removeDataAttribute(t3, e2), t3.style[e2] = s2);
      });
    }
    _applyManipulationCallback(t2, e2) {
      c(t2) ? e2(t2) : i.find(t2, this._element).forEach(e2);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const mt = { isVisible: true, isAnimated: false, rootElement: "body", clickCallback: null }, _t = { isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" };
  class bt {
    constructor(t2) {
      this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
    }
    show(t2) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && m(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
        w(t2);
      })) : w(t2);
    }
    hide(t2) {
      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
        this.dispose(), w(t2);
      })) : w(t2);
    }
    _getElement() {
      if (!this._element) {
        const t2 = document.createElement("div");
        t2.className = "modal-backdrop", this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
      }
      return this._element;
    }
    _getConfig(t2) {
      return (t2 = { ...mt, ..."object" == typeof t2 ? t2 : {} }).rootElement = h(t2.rootElement), d("backdrop", t2, _t), t2;
    }
    _append() {
      this._isAppended || (this._config.rootElement.appendChild(this._getElement()), B.on(this._getElement(), "mousedown.bs.backdrop", () => {
        w(this._config.clickCallback);
      }), this._isAppended = true);
    }
    dispose() {
      this._isAppended && (B.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = false);
    }
    _emulateAnimation(t2) {
      E(t2, this._getElement(), this._config.isAnimated);
    }
  }
  const vt = { backdrop: true, keyboard: true, focus: true }, yt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" };
  class wt extends q {
    constructor(t2, e2) {
      super(t2), this._config = this._getConfig(e2), this._dialog = i.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollBar = new ft();
    }
    static get Default() {
      return vt;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || this._isTransitioning || B.trigger(this._element, "show.bs.modal", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isAnimated() && (this._isTransitioning = true), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), B.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (t3) => this.hide(t3)), B.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
        B.one(this._element, "mouseup.dismiss.bs.modal", (t3) => {
          t3.target === this._element && (this._ignoreBackdropClick = true);
        });
      }), this._showBackdrop(() => this._showElement(t2)));
    }
    hide(t2) {
      if (t2 && ["A", "AREA"].includes(t2.target.tagName) && t2.preventDefault(), !this._isShown || this._isTransitioning) return;
      if (B.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = false;
      const e2 = this._isAnimated();
      e2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), B.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), B.off(this._element, "click.dismiss.bs.modal"), B.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, e2);
    }
    dispose() {
      [window, this._dialog].forEach((t2) => B.off(t2, ".bs.modal")), this._backdrop.dispose(), super.dispose(), B.off(document, "focusin.bs.modal");
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new bt({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _getConfig(t2) {
      return t2 = { ...vt, ...V.getDataAttributes(this._element), ..."object" == typeof t2 ? t2 : {} }, d("modal", t2, yt), t2;
    }
    _showElement(t2) {
      const e2 = this._isAnimated(), s2 = i.findOne(".modal-body", this._dialog);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s2 && (s2.scrollTop = 0), e2 && m(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(() => {
        this._config.focus && this._element.focus(), this._isTransitioning = false, B.trigger(this._element, "shown.bs.modal", { relatedTarget: t2 });
      }, this._dialog, e2);
    }
    _enforceFocus() {
      B.off(document, "focusin.bs.modal"), B.on(document, "focusin.bs.modal", (t2) => {
        document === t2.target || this._element === t2.target || this._element.contains(t2.target) || this._element.focus();
      });
    }
    _setEscapeEvent() {
      this._isShown ? B.on(this._element, "keydown.dismiss.bs.modal", (t2) => {
        this._config.keyboard && "Escape" === t2.key ? (t2.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t2.key || this._triggerBackdropTransition();
      }) : B.off(this._element, "keydown.dismiss.bs.modal");
    }
    _setResizeEvent() {
      this._isShown ? B.on(window, "resize.bs.modal", () => this._adjustDialog()) : B.off(window, "resize.bs.modal");
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
        document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), B.trigger(this._element, "hidden.bs.modal");
      });
    }
    _showBackdrop(t2) {
      B.on(this._element, "click.dismiss.bs.modal", (t3) => {
        this._ignoreBackdropClick ? this._ignoreBackdropClick = false : t3.target === t3.currentTarget && (true === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
      }), this._backdrop.show(t2);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (B.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
      const { classList: t2, scrollHeight: e2, style: s2 } = this._element, i2 = e2 > document.documentElement.clientHeight;
      !i2 && "hidden" === s2.overflowY || t2.contains("modal-static") || (i2 || (s2.overflowY = "hidden"), t2.add("modal-static"), this._queueCallback(() => {
        t2.remove("modal-static"), i2 || this._queueCallback(() => {
          s2.overflowY = "";
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), s2 = e2 > 0;
      (!s2 && t2 && !v() || s2 && !t2 && v()) && (this._element.style.paddingLeft = e2 + "px"), (s2 && !t2 && !v() || !s2 && t2 && v()) && (this._element.style.paddingRight = e2 + "px");
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(t2, e2) {
      return this.each(function() {
        const s2 = wt.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === s2[t2]) throw new TypeError(`No method named "${t2}"`);
          s2[t2](e2);
        }
      });
    }
  }
  B.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t2) {
    const e2 = a(this);
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), B.one(e2, "show.bs.modal", (t3) => {
      t3.defaultPrevented || B.one(e2, "hidden.bs.modal", () => {
        u(this) && this.focus();
      });
    }), wt.getOrCreateInstance(e2).toggle(this);
  }), y(wt);
  const Et = { backdrop: true, keyboard: true, scroll: false }, At = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
  class Tt extends q {
    constructor(t2, e2) {
      super(t2), this._config = this._getConfig(e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._addEventListeners();
    }
    static get NAME() {
      return "offcanvas";
    }
    static get Default() {
      return Et;
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || B.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new ft().hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
        B.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t2 });
      }, this._element, true));
    }
    hide() {
      this._isShown && (B.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (B.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = false, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
        this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new ft().reset(), B.trigger(this._element, "hidden.bs.offcanvas");
      }, this._element, true)));
    }
    dispose() {
      this._backdrop.dispose(), super.dispose(), B.off(document, "focusin.bs.offcanvas");
    }
    _getConfig(t2) {
      return t2 = { ...Et, ...V.getDataAttributes(this._element), ..."object" == typeof t2 ? t2 : {} }, d("offcanvas", t2, At), t2;
    }
    _initializeBackDrop() {
      return new bt({ isVisible: this._config.backdrop, isAnimated: true, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
    }
    _enforceFocusOnElement(t2) {
      B.off(document, "focusin.bs.offcanvas"), B.on(document, "focusin.bs.offcanvas", (e2) => {
        document === e2.target || t2 === e2.target || t2.contains(e2.target) || t2.focus();
      }), t2.focus();
    }
    _addEventListeners() {
      B.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), B.on(this._element, "keydown.dismiss.bs.offcanvas", (t2) => {
        this._config.keyboard && "Escape" === t2.key && this.hide();
      });
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Tt.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  B.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t2) {
    const e2 = a(this);
    if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), g(this)) return;
    B.one(e2, "hidden.bs.offcanvas", () => {
      u(this) && this.focus();
    });
    const s2 = i.findOne(".offcanvas.show");
    s2 && s2 !== e2 && Tt.getInstance(s2).hide(), Tt.getOrCreateInstance(e2).toggle(this);
  }), B.on(window, "load.bs.offcanvas.data-api", () => i.find(".offcanvas.show").forEach((t2) => Tt.getOrCreateInstance(t2).show())), y(Tt);
  const Ct = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), kt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i, Lt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ot = (t2, e2) => {
    const s2 = t2.nodeName.toLowerCase();
    if (e2.includes(s2)) return !Ct.has(s2) || Boolean(kt.test(t2.nodeValue) || Lt.test(t2.nodeValue));
    const i2 = e2.filter((t3) => t3 instanceof RegExp);
    for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) if (i2[t3].test(s2)) return true;
    return false;
  };
  function Dt(t2, e2, s2) {
    if (!t2.length) return t2;
    if (s2 && "function" == typeof s2) return s2(t2);
    const i2 = new window.DOMParser().parseFromString(t2, "text/html"), n2 = Object.keys(e2), o2 = [].concat(...i2.body.querySelectorAll("*"));
    for (let t3 = 0, s3 = o2.length; t3 < s3; t3++) {
      const s4 = o2[t3], i3 = s4.nodeName.toLowerCase();
      if (!n2.includes(i3)) {
        s4.remove();
        continue;
      }
      const r2 = [].concat(...s4.attributes), a2 = [].concat(e2["*"] || [], e2[i3] || []);
      r2.forEach((t4) => {
        Ot(t4, a2) || s4.removeAttribute(t4.nodeName);
      });
    }
    return i2.body.innerHTML;
  }
  const It = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Nt = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), St = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" }, xt = { AUTO: "auto", TOP: "top", RIGHT: v() ? "left" : "right", BOTTOM: "bottom", LEFT: v() ? "right" : "left" }, Mt = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: [0, 0], container: false, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: true, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, Pt = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" };
  class jt extends q {
    constructor(t2, e2) {
      if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t2), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e2), this.tip = null, this._setListeners();
    }
    static get Default() {
      return Mt;
    }
    static get NAME() {
      return "tooltip";
    }
    static get Event() {
      return Pt;
    }
    static get DefaultType() {
      return St;
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t2) {
      if (this._isEnabled) if (t2) {
        const e2 = this._initializeOnDelegatedTarget(t2);
        e2._activeTrigger.click = !e2._activeTrigger.click, e2._isWithActiveTrigger() ? e2._enter(null, e2) : e2._leave(null, e2);
      } else {
        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
        this._enter(null, this);
      }
    }
    dispose() {
      clearTimeout(this._timeout), B.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose();
    }
    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t2 = B.trigger(this._element, this.constructor.Event.SHOW), e2 = p(this._element), i2 = null === e2 ? this._element.ownerDocument.documentElement.contains(this._element) : e2.contains(this._element);
      if (t2.defaultPrevented || !i2) return;
      const o2 = this.getTipElement(), r2 = n(this.constructor.NAME);
      o2.setAttribute("id", r2), this._element.setAttribute("aria-describedby", r2), this.setContent(), this._config.animation && o2.classList.add("fade");
      const a2 = "function" == typeof this._config.placement ? this._config.placement.call(this, o2, this._element) : this._config.placement, l2 = this._getAttachment(a2);
      this._addAttachmentClass(l2);
      const { container: c2 } = this._config;
      W.set(o2, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (c2.appendChild(o2), B.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = s.createPopper(this._element, o2, this._getPopperConfig(l2)), o2.classList.add("show");
      const h2 = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
      h2 && o2.classList.add(...h2.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => {
        B.on(t3, "mouseover", f);
      });
      const d2 = this.tip.classList.contains("fade");
      this._queueCallback(() => {
        const t3 = this._hoverState;
        this._hoverState = null, B.trigger(this._element, this.constructor.Event.SHOWN), "out" === t3 && this._leave(null, this);
      }, this.tip, d2);
    }
    hide() {
      if (!this._popper) return;
      const t2 = this.getTipElement();
      if (B.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
      t2.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => B.off(t3, "mouseover", f)), this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false;
      const e2 = this.tip.classList.contains("fade");
      this._queueCallback(() => {
        this._isWithActiveTrigger() || ("show" !== this._hoverState && t2.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), B.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null));
      }, this.tip, e2), this._hoverState = "";
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t2 = document.createElement("div");
      return t2.innerHTML = this._config.template, this.tip = t2.children[0], this.tip;
    }
    setContent() {
      const t2 = this.getTipElement();
      this.setElementContent(i.findOne(".tooltip-inner", t2), this.getTitle()), t2.classList.remove("fade", "show");
    }
    setElementContent(t2, e2) {
      if (null !== t2) return c(e2) ? (e2 = h(e2), void (this._config.html ? e2.parentNode !== t2 && (t2.innerHTML = "", t2.appendChild(e2)) : t2.textContent = e2.textContent)) : void (this._config.html ? (this._config.sanitize && (e2 = Dt(e2, this._config.allowList, this._config.sanitizeFn)), t2.innerHTML = e2) : t2.textContent = e2);
    }
    getTitle() {
      let t2 = this._element.getAttribute("data-bs-original-title");
      return t2 || (t2 = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t2;
    }
    updateAttachment(t2) {
      return "right" === t2 ? "end" : "left" === t2 ? "start" : t2;
    }
    _initializeOnDelegatedTarget(t2, e2) {
      const s2 = this.constructor.DATA_KEY;
      return (e2 = e2 || W.get(t2.delegateTarget, s2)) || (e2 = new this.constructor(t2.delegateTarget, this._getDelegateConfig()), W.set(t2.delegateTarget, s2, e2)), e2;
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _getPopperConfig(t2) {
      const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: true, phase: "afterWrite", fn: (t3) => this._handlePopperPlacementChange(t3) }], onFirstUpdate: (t3) => {
        t3.options.placement !== t3.placement && this._handlePopperPlacementChange(t3);
      } };
      return { ...e2, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e2) : this._config.popperConfig };
    }
    _addAttachmentClass(t2) {
      this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t2));
    }
    _getAttachment(t2) {
      return xt[t2.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t2) => {
        if ("click" === t2) B.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t3) => this.toggle(t3));
        else if ("manual" !== t2) {
          const e2 = "hover" === t2 ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, s2 = "hover" === t2 ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          B.on(this._element, e2, this._config.selector, (t3) => this._enter(t3)), B.on(this._element, s2, this._config.selector, (t3) => this._leave(t3));
        }
      }), this._hideModalHandler = () => {
        this._element && this.hide();
      }, B.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: "manual", selector: "" } : this._fixTitle();
    }
    _fixTitle() {
      const t2 = this._element.getAttribute("title"), e2 = typeof this._element.getAttribute("data-bs-original-title");
      (t2 || "string" !== e2) && (this._element.setAttribute("data-bs-original-title", t2 || ""), !t2 || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t2), this._element.setAttribute("title", ""));
    }
    _enter(t2, e2) {
      e2 = this._initializeOnDelegatedTarget(t2, e2), t2 && (e2._activeTrigger["focusin" === t2.type ? "focus" : "hover"] = true), e2.getTipElement().classList.contains("show") || "show" === e2._hoverState ? e2._hoverState = "show" : (clearTimeout(e2._timeout), e2._hoverState = "show", e2._config.delay && e2._config.delay.show ? e2._timeout = setTimeout(() => {
        "show" === e2._hoverState && e2.show();
      }, e2._config.delay.show) : e2.show());
    }
    _leave(t2, e2) {
      e2 = this._initializeOnDelegatedTarget(t2, e2), t2 && (e2._activeTrigger["focusout" === t2.type ? "focus" : "hover"] = e2._element.contains(t2.relatedTarget)), e2._isWithActiveTrigger() || (clearTimeout(e2._timeout), e2._hoverState = "out", e2._config.delay && e2._config.delay.hide ? e2._timeout = setTimeout(() => {
        "out" === e2._hoverState && e2.hide();
      }, e2._config.delay.hide) : e2.hide());
    }
    _isWithActiveTrigger() {
      for (const t2 in this._activeTrigger) if (this._activeTrigger[t2]) return true;
      return false;
    }
    _getConfig(t2) {
      const e2 = V.getDataAttributes(this._element);
      return Object.keys(e2).forEach((t3) => {
        Nt.has(t3) && delete e2[t3];
      }), (t2 = { ...this.constructor.Default, ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }).container = false === t2.container ? document.body : h(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), d("tooltip", t2, this.constructor.DefaultType), t2.sanitize && (t2.template = Dt(t2.template, t2.allowList, t2.sanitizeFn)), t2;
    }
    _getDelegateConfig() {
      const t2 = {};
      if (this._config) for (const e2 in this._config) this.constructor.Default[e2] !== this._config[e2] && (t2[e2] = this._config[e2]);
      return t2;
    }
    _cleanTipClass() {
      const t2 = this.getTipElement(), e2 = t2.getAttribute("class").match(It);
      null !== e2 && e2.length > 0 && e2.map((t3) => t3.trim()).forEach((e3) => t2.classList.remove(e3));
    }
    _handlePopperPlacementChange(t2) {
      const { state: e2 } = t2;
      e2 && (this.tip = e2.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e2.placement)));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = jt.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  y(jt);
  const Ht = new RegExp("(^|\\s)bs-popover\\S+", "g"), Rt = { ...jt.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }, Bt = { ...jt.DefaultType, content: "(string|element|function)" }, $t = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" };
  class Wt extends jt {
    static get Default() {
      return Rt;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return $t;
    }
    static get DefaultType() {
      return Bt;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    getTipElement() {
      return this.tip || (this.tip = super.getTipElement(), this.getTitle() || i.findOne(".popover-header", this.tip).remove(), this._getContent() || i.findOne(".popover-body", this.tip).remove()), this.tip;
    }
    setContent() {
      const t2 = this.getTipElement();
      this.setElementContent(i.findOne(".popover-header", t2), this.getTitle());
      let e2 = this._getContent();
      "function" == typeof e2 && (e2 = e2.call(this._element)), this.setElementContent(i.findOne(".popover-body", t2), e2), t2.classList.remove("fade", "show");
    }
    _addAttachmentClass(t2) {
      this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t2));
    }
    _getContent() {
      return this._element.getAttribute("data-bs-content") || this._config.content;
    }
    _cleanTipClass() {
      const t2 = this.getTipElement(), e2 = t2.getAttribute("class").match(Ht);
      null !== e2 && e2.length > 0 && e2.map((t3) => t3.trim()).forEach((e3) => t2.classList.remove(e3));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Wt.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  y(Wt);
  const qt = { offset: 10, method: "auto", target: "" }, zt = { offset: "number", method: "string", target: "(string|element)" };
  class Ft extends q {
    constructor(t2, e2) {
      super(t2), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e2), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, B.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process();
    }
    static get Default() {
      return qt;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      const t2 = this._scrollElement === this._scrollElement.window ? "offset" : "position", e2 = "auto" === this._config.method ? t2 : this._config.method, s2 = "position" === e2 ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), i.find(this._selector).map((t3) => {
        const n2 = r(t3), o2 = n2 ? i.findOne(n2) : null;
        if (o2) {
          const t4 = o2.getBoundingClientRect();
          if (t4.width || t4.height) return [V[e2](o2).top + s2, n2];
        }
        return null;
      }).filter((t3) => t3).sort((t3, e3) => t3[0] - e3[0]).forEach((t3) => {
        this._offsets.push(t3[0]), this._targets.push(t3[1]);
      });
    }
    dispose() {
      B.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t2) {
      if ("string" != typeof (t2 = { ...qt, ...V.getDataAttributes(this._element), ..."object" == typeof t2 && t2 ? t2 : {} }).target && c(t2.target)) {
        let { id: e2 } = t2.target;
        e2 || (e2 = n("scrollspy"), t2.target.id = e2), t2.target = "#" + e2;
      }
      return d("scrollspy", t2, zt), t2;
    }
    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t2 = this._getScrollTop() + this._config.offset, e2 = this._getScrollHeight(), s2 = this._config.offset + e2 - this._getOffsetHeight();
      if (this._scrollHeight !== e2 && this.refresh(), t2 >= s2) {
        const t3 = this._targets[this._targets.length - 1];
        this._activeTarget !== t3 && this._activate(t3);
      } else {
        if (this._activeTarget && t2 < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
        for (let e3 = this._offsets.length; e3--; ) this._activeTarget !== this._targets[e3] && t2 >= this._offsets[e3] && (void 0 === this._offsets[e3 + 1] || t2 < this._offsets[e3 + 1]) && this._activate(this._targets[e3]);
      }
    }
    _activate(t2) {
      this._activeTarget = t2, this._clear();
      const e2 = this._selector.split(",").map((e3) => `${e3}[data-bs-target="${t2}"],${e3}[href="${t2}"]`), s2 = i.findOne(e2.join(","));
      s2.classList.contains("dropdown-item") ? (i.findOne(".dropdown-toggle", s2.closest(".dropdown")).classList.add("active"), s2.classList.add("active")) : (s2.classList.add("active"), i.parents(s2, ".nav, .list-group").forEach((t3) => {
        i.prev(t3, ".nav-link, .list-group-item").forEach((t4) => t4.classList.add("active")), i.prev(t3, ".nav-item").forEach((t4) => {
          i.children(t4, ".nav-link").forEach((t5) => t5.classList.add("active"));
        });
      })), B.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t2 });
    }
    _clear() {
      i.find(this._selector).filter((t2) => t2.classList.contains("active")).forEach((t2) => t2.classList.remove("active"));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Ft.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  B.on(window, "load.bs.scrollspy.data-api", () => {
    i.find('[data-bs-spy="scroll"]').forEach((t2) => new Ft(t2));
  }), y(Ft);
  class Ut extends q {
    static get NAME() {
      return "tab";
    }
    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
      let t2;
      const e2 = a(this._element), s2 = this._element.closest(".nav, .list-group");
      if (s2) {
        const e3 = "UL" === s2.nodeName || "OL" === s2.nodeName ? ":scope > li > .active" : ".active";
        t2 = i.find(e3, s2), t2 = t2[t2.length - 1];
      }
      const n2 = t2 ? B.trigger(t2, "hide.bs.tab", { relatedTarget: this._element }) : null;
      if (B.trigger(this._element, "show.bs.tab", { relatedTarget: t2 }).defaultPrevented || null !== n2 && n2.defaultPrevented) return;
      this._activate(this._element, s2);
      const o2 = () => {
        B.trigger(t2, "hidden.bs.tab", { relatedTarget: this._element }), B.trigger(this._element, "shown.bs.tab", { relatedTarget: t2 });
      };
      e2 ? this._activate(e2, e2.parentNode, o2) : o2();
    }
    _activate(t2, e2, s2) {
      const n2 = (!e2 || "UL" !== e2.nodeName && "OL" !== e2.nodeName ? i.children(e2, ".active") : i.find(":scope > li > .active", e2))[0], o2 = s2 && n2 && n2.classList.contains("fade"), r2 = () => this._transitionComplete(t2, n2, s2);
      n2 && o2 ? (n2.classList.remove("show"), this._queueCallback(r2, t2, true)) : r2();
    }
    _transitionComplete(t2, e2, s2) {
      if (e2) {
        e2.classList.remove("active");
        const t3 = i.findOne(":scope > .dropdown-menu .active", e2.parentNode);
        t3 && t3.classList.remove("active"), "tab" === e2.getAttribute("role") && e2.setAttribute("aria-selected", false);
      }
      t2.classList.add("active"), "tab" === t2.getAttribute("role") && t2.setAttribute("aria-selected", true), m(t2), t2.classList.contains("fade") && t2.classList.add("show");
      let n2 = t2.parentNode;
      if (n2 && "LI" === n2.nodeName && (n2 = n2.parentNode), n2 && n2.classList.contains("dropdown-menu")) {
        const e3 = t2.closest(".dropdown");
        e3 && i.find(".dropdown-toggle", e3).forEach((t3) => t3.classList.add("active")), t2.setAttribute("aria-expanded", true);
      }
      s2 && s2();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Ut.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  B.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t2) {
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), g(this) || Ut.getOrCreateInstance(this).show();
  }), y(Ut);
  const Kt = { animation: "boolean", autohide: "boolean", delay: "number" }, Vt = { animation: true, autohide: true, delay: 5e3 };
  class Qt extends q {
    constructor(t2, e2) {
      super(t2), this._config = this._getConfig(e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get DefaultType() {
      return Kt;
    }
    static get Default() {
      return Vt;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      B.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), m(this._element), this._element.classList.add("showing"), this._queueCallback(() => {
        this._element.classList.remove("showing"), this._element.classList.add("show"), B.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
    hide() {
      this._element.classList.contains("show") && (B.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(() => {
        this._element.classList.add("hide"), B.trigger(this._element, "hidden.bs.toast");
      }, this._element, this._config.animation)));
    }
    dispose() {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose();
    }
    _getConfig(t2) {
      return t2 = { ...Vt, ...V.getDataAttributes(this._element), ..."object" == typeof t2 && t2 ? t2 : {} }, d("toast", t2, this.constructor.DefaultType), t2;
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(t2, e2) {
      switch (t2.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e2;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e2;
      }
      if (e2) return void this._clearTimeout();
      const s2 = t2.relatedTarget;
      this._element === s2 || this._element.contains(s2) || this._maybeScheduleHide();
    }
    _setListeners() {
      B.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()), B.on(this._element, "mouseover.bs.toast", (t2) => this._onInteraction(t2, true)), B.on(this._element, "mouseout.bs.toast", (t2) => this._onInteraction(t2, false)), B.on(this._element, "focusin.bs.toast", (t2) => this._onInteraction(t2, true)), B.on(this._element, "focusout.bs.toast", (t2) => this._onInteraction(t2, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Qt.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  return y(Qt), { Alert: z, Button: F, Carousel: et, Collapse: nt, Dropdown: pt, Modal: wt, Offcanvas: Tt, Popover: Wt, ScrollSpy: Ft, Tab: Ut, Toast: Qt, Tooltip: jt };
});
!function(e) {
  e.fn.appear = function(a, r) {
    var p = e.extend({ data: void 0, one: true, accX: 0, accY: 0 }, r);
    return this.each(function() {
      var r2 = e(this);
      if (r2.appeared = false, a) {
        var n = e(window), t = function() {
          if (r2.is(":visible")) {
            var e2 = n.scrollLeft(), a2 = n.scrollTop(), t2 = r2.offset(), c2 = t2.left, i = t2.top, o = p.accX, f = p.accY, s = r2.height(), l = n.height(), h = r2.width(), d = n.width();
            i + s + f >= a2 && i <= a2 + l + f && c2 + h + o >= e2 && c2 <= e2 + d + o ? r2.appeared || r2.trigger("appear", p.data) : r2.appeared = false;
          } else r2.appeared = false;
        }, c = function() {
          if (r2.appeared = true, p.one) {
            n.unbind("scroll", t);
            var c2 = e.inArray(t, e.fn.appear.checks);
            c2 >= 0 && e.fn.appear.checks.splice(c2, 1);
          }
          a.apply(this, arguments);
        };
        p.one ? r2.one("appear", p.data, c) : r2.bind("appear", p.data, c), n.scroll(t), e.fn.appear.checks.push(t), t();
      } else r2.trigger("appear", p.data);
    });
  }, e.extend(e.fn.appear, { checks: [], timeout: null, checkAll: function() {
    var a = e.fn.appear.checks.length;
    if (a > 0) for (; a--; ) e.fn.appear.checks[a]();
  }, run: function() {
    e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20);
  } }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(a, r) {
    var p = e.fn[r];
    p && (e.fn[r] = function() {
      var a2 = p.apply(this, arguments);
      return e.fn.appear.run(), a2;
    });
  });
}(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
}(function(a) {
  var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {
  }, u = !!window.jQuery, v = a(window), w = function(a2, c2) {
    b.ev.on(o + a2 + p, c2);
  }, x = function(b2, c2, d2, e2) {
    var f2 = document.createElement("div");
    return f2.className = "mfp-" + b2, d2 && (f2.innerHTML = d2), e2 ? c2 && c2.appendChild(f2) : (f2 = a(f2), c2 && f2.appendTo(c2)), f2;
  }, y = function(c2, d2) {
    b.ev.triggerHandler(o + c2, d2), b.st.callbacks && (c2 = c2.charAt(0).toLowerCase() + c2.slice(1), b.st.callbacks[c2] && b.st.callbacks[c2].apply(b, a.isArray(d2) ? d2 : [d2]));
  }, z = function(c2) {
    return c2 === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c2), b.currTemplate.closeBtn;
  }, A = function() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  }, B = function() {
    var a2 = document.createElement("p").style, b2 = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== a2.transition) return true;
    for (; b2.length; ) if (b2.pop() + "Transition" in a2) return true;
    return false;
  };
  t.prototype = { constructor: t, init: function() {
    var c2 = navigator.appVersion;
    b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c2), b.isIOS = /iphone|ipad|ipod/gi.test(c2), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
  }, open: function(c2) {
    var e2;
    if (c2.isObj === false) {
      b.items = c2.items.toArray(), b.index = 0;
      var g2, h2 = c2.items;
      for (e2 = 0; e2 < h2.length; e2++) if (g2 = h2[e2], g2.parsed && (g2 = g2.el[0]), g2 === c2.el[0]) {
        b.index = e2;
        break;
      }
    } else b.items = a.isArray(c2.items) ? c2.items : [c2.items], b.index = c2.index || 0;
    if (b.isOpen) return void b.updateItemHTML();
    b.types = [], f = "", c2.mainEl && c2.mainEl.length ? b.ev = c2.mainEl.eq(0) : b.ev = d, c2.key ? (b.popupsCache[c2.key] || (b.popupsCache[c2.key] = {}), b.currTemplate = b.popupsCache[c2.key]) : b.currTemplate = {}, b.st = a.extend(true, {}, a.magnificPopup.defaults, c2), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = false, b.st.closeOnBgClick = false, b.st.showCloseBtn = false, b.st.enableEscapeKey = false), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
      b.close();
    }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a2) {
      b._checkIfClose(a2.target) && b.close();
    }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
    var i2 = a.magnificPopup.modules;
    for (e2 = 0; e2 < i2.length; e2++) {
      var j2 = i2[e2];
      j2 = j2.charAt(0).toUpperCase() + j2.slice(1), b["init" + j2].call(b);
    }
    y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a2, b2, c3, d2) {
      c3.close_replaceWith = z(d2.type);
    }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === false || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function(a2) {
      27 === a2.keyCode && b.close();
    }), v.on("resize" + p, function() {
      b.updateSize();
    }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
    var k2 = b.wH = v.height(), n2 = {};
    if (b.fixedContentPos && b._hasScrollBar(k2)) {
      var o2 = b._getScrollbarSize();
      o2 && (n2.marginRight = o2);
    }
    b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n2.overflow = "hidden");
    var r2 = b.st.mainClass;
    return b.isIE7 && (r2 += " mfp-ie7"), r2 && b._addClassToMFP(r2), b.updateItemHTML(), y("BuildControls"), a("html").css(n2), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
      b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
    }, 16), b.isOpen = true, b.updateSize(k2), y(m), c2;
  }, close: function() {
    b.isOpen && (y(i), b.isOpen = false, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
      b._close();
    }, b.st.removalDelay)) : b._close());
  }, _close: function() {
    y(h);
    var c2 = r + " " + q + " ";
    if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c2 += b.st.mainClass + " "), b._removeClassFromMFP(c2), b.fixedContentPos) {
      var e2 = { marginRight: "" };
      b.isIE7 ? a("body, html").css("overflow", "") : e2.overflow = "", a("html").css(e2);
    }
    d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== true || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
  }, updateSize: function(a2) {
    if (b.isIOS) {
      var c2 = document.documentElement.clientWidth / window.innerWidth, d2 = window.innerHeight * c2;
      b.wrap.css("height", d2), b.wH = d2;
    } else b.wH = a2 || v.height();
    b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
  }, updateItemHTML: function() {
    var c2 = b.items[b.index];
    b.contentContainer.detach(), b.content && b.content.detach(), c2.parsed || (c2 = b.parseEl(b.index));
    var d2 = c2.type;
    if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d2]), b.currItem = c2, !b.currTemplate[d2]) {
      var f2 = b.st[d2] ? b.st[d2].markup : false;
      y("FirstMarkupParse", f2), f2 ? b.currTemplate[d2] = a(f2) : b.currTemplate[d2] = true;
    }
    e && e !== c2.type && b.container.removeClass("mfp-" + e + "-holder");
    var g2 = b["get" + d2.charAt(0).toUpperCase() + d2.slice(1)](c2, b.currTemplate[d2]);
    b.appendContent(g2, d2), c2.preloaded = true, y(n, c2), e = c2.type, b.container.prepend(b.contentContainer), y("AfterChange");
  }, appendContent: function(a2, c2) {
    b.content = a2, a2 ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c2] === true ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a2 : b.content = "", y(k), b.container.addClass("mfp-" + c2 + "-holder"), b.contentContainer.append(b.content);
  }, parseEl: function(c2) {
    var d2, e2 = b.items[c2];
    if (e2.tagName ? e2 = { el: a(e2) } : (d2 = e2.type, e2 = { data: e2, src: e2.src }), e2.el) {
      for (var f2 = b.types, g2 = 0; g2 < f2.length; g2++) if (e2.el.hasClass("mfp-" + f2[g2])) {
        d2 = f2[g2];
        break;
      }
      e2.src = e2.el.attr("data-mfp-src"), e2.src || (e2.src = e2.el.attr("href"));
    }
    return e2.type = d2 || b.st.type || "inline", e2.index = c2, e2.parsed = true, b.items[c2] = e2, y("ElementParse", e2), b.items[c2];
  }, addGroup: function(a2, c2) {
    var d2 = function(d3) {
      d3.mfpEl = this, b._openClick(d3, a2, c2);
    };
    c2 || (c2 = {});
    var e2 = "click.magnificPopup";
    c2.mainEl = a2, c2.items ? (c2.isObj = true, a2.off(e2).on(e2, d2)) : (c2.isObj = false, c2.delegate ? a2.off(e2).on(e2, c2.delegate, d2) : (c2.items = a2, a2.off(e2).on(e2, d2)));
  }, _openClick: function(c2, d2, e2) {
    var f2 = void 0 !== e2.midClick ? e2.midClick : a.magnificPopup.defaults.midClick;
    if (f2 || !(2 === c2.which || c2.ctrlKey || c2.metaKey || c2.altKey || c2.shiftKey)) {
      var g2 = void 0 !== e2.disableOn ? e2.disableOn : a.magnificPopup.defaults.disableOn;
      if (g2) {
        if (a.isFunction(g2)) {
          if (!g2.call(b)) return true;
        } else if (v.width() < g2) return true;
      }
      c2.type && (c2.preventDefault(), b.isOpen && c2.stopPropagation()), e2.el = a(c2.mfpEl), e2.delegate && (e2.items = d2.find(e2.delegate)), b.open(e2);
    }
  }, updateStatus: function(a2, d2) {
    if (b.preloader) {
      c !== a2 && b.container.removeClass("mfp-s-" + c), d2 || "loading" !== a2 || (d2 = b.st.tLoading);
      var e2 = { status: a2, text: d2 };
      y("UpdateStatus", e2), a2 = e2.status, d2 = e2.text, b.preloader.html(d2), b.preloader.find("a").on("click", function(a3) {
        a3.stopImmediatePropagation();
      }), b.container.addClass("mfp-s-" + a2), c = a2;
    }
  }, _checkIfClose: function(c2) {
    if (!a(c2).hasClass(s)) {
      var d2 = b.st.closeOnContentClick, e2 = b.st.closeOnBgClick;
      if (d2 && e2) return true;
      if (!b.content || a(c2).hasClass("mfp-close") || b.preloader && c2 === b.preloader[0]) return true;
      if (c2 === b.content[0] || a.contains(b.content[0], c2)) {
        if (d2) return true;
      } else if (e2 && a.contains(document, c2)) return true;
      return false;
    }
  }, _addClassToMFP: function(a2) {
    b.bgOverlay.addClass(a2), b.wrap.addClass(a2);
  }, _removeClassFromMFP: function(a2) {
    this.bgOverlay.removeClass(a2), b.wrap.removeClass(a2);
  }, _hasScrollBar: function(a2) {
    return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a2 || v.height());
  }, _setFocus: function() {
    (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
  }, _onFocusIn: function(c2) {
    return c2.target === b.wrap[0] || a.contains(b.wrap[0], c2.target) ? void 0 : (b._setFocus(), false);
  }, _parseMarkup: function(b2, c2, d2) {
    var e2;
    d2.data && (c2 = a.extend(d2.data, c2)), y(l, [b2, c2, d2]), a.each(c2, function(c3, d3) {
      if (void 0 === d3 || d3 === false) return true;
      if (e2 = c3.split("_"), e2.length > 1) {
        var f2 = b2.find(p + "-" + e2[0]);
        if (f2.length > 0) {
          var g2 = e2[1];
          "replaceWith" === g2 ? f2[0] !== d3[0] && f2.replaceWith(d3) : "img" === g2 ? f2.is("img") ? f2.attr("src", d3) : f2.replaceWith(a("<img>").attr("src", d3).attr("class", f2.attr("class"))) : f2.attr(e2[1], d3);
        }
      } else b2.find(p + "-" + c3).html(d3);
    });
  }, _getScrollbarSize: function() {
    if (void 0 === b.scrollbarSize) {
      var a2 = document.createElement("div");
      a2.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a2), b.scrollbarSize = a2.offsetWidth - a2.clientWidth, document.body.removeChild(a2);
    }
    return b.scrollbarSize;
  } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function(b2, c2) {
    return A(), b2 = b2 ? a.extend(true, {}, b2) : {}, b2.isObj = true, b2.index = c2 || 0, this.instance.open(b2);
  }, close: function() {
    return a.magnificPopup.instance && a.magnificPopup.instance.close();
  }, registerModule: function(b2, c2) {
    c2.options && (a.magnificPopup.defaults[b2] = c2.options), a.extend(this.proto, c2.proto), this.modules.push(b2);
  }, defaults: { disableOn: 0, key: null, midClick: false, mainClass: "", preloader: true, focus: "", closeOnContentClick: false, closeOnBgClick: true, closeBtnInside: true, showCloseBtn: true, enableEscapeKey: true, modal: false, alignTop: false, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: true } }, a.fn.magnificPopup = function(c2) {
    A();
    var d2 = a(this);
    if ("string" == typeof c2) if ("open" === c2) {
      var e2, f2 = u ? d2.data("magnificPopup") : d2[0].magnificPopup, g2 = parseInt(arguments[1], 10) || 0;
      f2.items ? e2 = f2.items[g2] : (e2 = d2, f2.delegate && (e2 = e2.find(f2.delegate)), e2 = e2.eq(g2)), b._openClick({ mfpEl: e2 }, d2, f2);
    } else b.isOpen && b[c2].apply(b, Array.prototype.slice.call(arguments, 1));
    else c2 = a.extend(true, {}, c2), u ? d2.data("magnificPopup", c2) : d2[0].magnificPopup = c2, b.addGroup(d2, c2);
    return d2;
  };
  var C, D, E, F = "inline", G = function() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };
  a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() {
    b.types.push(F), w(h + "." + F, function() {
      G();
    });
  }, getInline: function(c2, d2) {
    if (G(), c2.src) {
      var e2 = b.st.inline, f2 = a(c2.src);
      if (f2.length) {
        var g2 = f2[0].parentNode;
        g2 && g2.tagName && (D || (C = e2.hiddenClass, D = x(C), C = "mfp-" + C), E = f2.after(D).detach().removeClass(C)), b.updateStatus("ready");
      } else b.updateStatus("error", e2.tNotFound), f2 = a("<div>");
      return c2.inlineElement = f2, f2;
    }
    return b.updateStatus("ready"), b._parseMarkup(d2, {}, c2), d2;
  } } });
  var H, I = "ajax", J = function() {
    H && a(document.body).removeClass(H);
  }, K = function() {
    J(), b.req && b.req.abort();
  };
  a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() {
    b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
  }, getAjax: function(c2) {
    H && a(document.body).addClass(H), b.updateStatus("loading");
    var d2 = a.extend({ url: c2.src, success: function(d3, e2, f2) {
      var g2 = { data: d3, xhr: f2 };
      y("ParseAjax", g2), b.appendContent(a(g2.data), I), c2.finished = true, J(), b._setFocus(), setTimeout(function() {
        b.wrap.addClass(q);
      }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
    }, error: function() {
      J(), c2.finished = c2.loadError = true, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c2.src));
    } }, b.st.ajax.settings);
    return b.req = a.ajax(d2), "";
  } } });
  var L, M = function(c2) {
    if (c2.data && void 0 !== c2.data.title) return c2.data.title;
    var d2 = b.st.image.titleSrc;
    if (d2) {
      if (a.isFunction(d2)) return d2.call(b, c2);
      if (c2.el) return c2.el.attr(d2) || "";
    }
    return "";
  };
  a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: true, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() {
    var c2 = b.st.image, d2 = ".image";
    b.types.push("image"), w(m + d2, function() {
      "image" === b.currItem.type && c2.cursor && a(document.body).addClass(c2.cursor);
    }), w(h + d2, function() {
      c2.cursor && a(document.body).removeClass(c2.cursor), v.off("resize" + p);
    }), w("Resize" + d2, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
  }, resizeImage: function() {
    var a2 = b.currItem;
    if (a2 && a2.img && b.st.image.verticalFit) {
      var c2 = 0;
      b.isLowIE && (c2 = parseInt(a2.img.css("padding-top"), 10) + parseInt(a2.img.css("padding-bottom"), 10)), a2.img.css("max-height", b.wH - c2);
    }
  }, _onImageHasSize: function(a2) {
    a2.img && (a2.hasSize = true, L && clearInterval(L), a2.isCheckingImgSize = false, y("ImageHasSize", a2), a2.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a2.imgHidden = false));
  }, findImageSize: function(a2) {
    var c2 = 0, d2 = a2.img[0], e2 = function(f2) {
      L && clearInterval(L), L = setInterval(function() {
        return d2.naturalWidth > 0 ? void b._onImageHasSize(a2) : (c2 > 200 && clearInterval(L), c2++, void (3 === c2 ? e2(10) : 40 === c2 ? e2(50) : 100 === c2 && e2(500)));
      }, f2);
    };
    e2(1);
  }, getImage: function(c2, d2) {
    var e2 = 0, f2 = function() {
      c2 && (c2.img[0].complete ? (c2.img.off(".mfploader"), c2 === b.currItem && (b._onImageHasSize(c2), b.updateStatus("ready")), c2.hasSize = true, c2.loaded = true, y("ImageLoadComplete")) : (e2++, 200 > e2 ? setTimeout(f2, 100) : g2()));
    }, g2 = function() {
      c2 && (c2.img.off(".mfploader"), c2 === b.currItem && (b._onImageHasSize(c2), b.updateStatus("error", h2.tError.replace("%url%", c2.src))), c2.hasSize = true, c2.loaded = true, c2.loadError = true);
    }, h2 = b.st.image, i2 = d2.find(".mfp-img");
    if (i2.length) {
      var j2 = document.createElement("img");
      j2.className = "mfp-img", c2.el && c2.el.find("img").length && (j2.alt = c2.el.find("img").attr("alt")), c2.img = a(j2).on("load.mfploader", f2).on("error.mfploader", g2), j2.src = c2.src, i2.is("img") && (c2.img = c2.img.clone()), j2 = c2.img[0], j2.naturalWidth > 0 ? c2.hasSize = true : j2.width || (c2.hasSize = false);
    }
    return b._parseMarkup(d2, { title: M(c2), img_replaceWith: c2.img }, c2), b.resizeImage(), c2.hasSize ? (L && clearInterval(L), c2.loadError ? (d2.addClass("mfp-loading"), b.updateStatus("error", h2.tError.replace("%url%", c2.src))) : (d2.removeClass("mfp-loading"), b.updateStatus("ready")), d2) : (b.updateStatus("loading"), c2.loading = true, c2.hasSize || (c2.imgHidden = true, d2.addClass("mfp-loading"), b.findImageSize(c2)), d2);
  } } });
  var N, O = function() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };
  a.magnificPopup.registerModule("zoom", { options: { enabled: false, easing: "ease-in-out", duration: 300, opener: function(a2) {
    return a2.is("img") ? a2 : a2.find("img");
  } }, proto: { initZoom: function() {
    var a2, c2 = b.st.zoom, d2 = ".zoom";
    if (c2.enabled && b.supportsTransition) {
      var e2, f2, g2 = c2.duration, j2 = function(a3) {
        var b2 = a3.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d3 = "all " + c2.duration / 1e3 + "s " + c2.easing, e3 = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f3 = "transition";
        return e3["-webkit-" + f3] = e3["-moz-" + f3] = e3["-o-" + f3] = e3[f3] = d3, b2.css(e3), b2;
      }, k2 = function() {
        b.content.css("visibility", "visible");
      };
      w("BuildControls" + d2, function() {
        if (b._allowZoom()) {
          if (clearTimeout(e2), b.content.css("visibility", "hidden"), a2 = b._getItemToZoom(), !a2) return void k2();
          f2 = j2(a2), f2.css(b._getOffset()), b.wrap.append(f2), e2 = setTimeout(function() {
            f2.css(b._getOffset(true)), e2 = setTimeout(function() {
              k2(), setTimeout(function() {
                f2.remove(), a2 = f2 = null, y("ZoomAnimationEnded");
              }, 16);
            }, g2);
          }, 16);
        }
      }), w(i + d2, function() {
        if (b._allowZoom()) {
          if (clearTimeout(e2), b.st.removalDelay = g2, !a2) {
            if (a2 = b._getItemToZoom(), !a2) return;
            f2 = j2(a2);
          }
          f2.css(b._getOffset(true)), b.wrap.append(f2), b.content.css("visibility", "hidden"), setTimeout(function() {
            f2.css(b._getOffset());
          }, 16);
        }
      }), w(h + d2, function() {
        b._allowZoom() && (k2(), f2 && f2.remove(), a2 = null);
      });
    }
  }, _allowZoom: function() {
    return "image" === b.currItem.type;
  }, _getItemToZoom: function() {
    return b.currItem.hasSize ? b.currItem.img : false;
  }, _getOffset: function(c2) {
    var d2;
    d2 = c2 ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
    var e2 = d2.offset(), f2 = parseInt(d2.css("padding-top"), 10), g2 = parseInt(d2.css("padding-bottom"), 10);
    e2.top -= a(window).scrollTop() - f2;
    var h2 = { width: d2.width(), height: (u ? d2.innerHeight() : d2[0].offsetHeight) - g2 - f2 };
    return O() ? h2["-moz-transform"] = h2.transform = "translate(" + e2.left + "px," + e2.top + "px)" : (h2.left = e2.left, h2.top = e2.top), h2;
  } } });
  var P = "iframe", Q = "//about:blank", R = function(a2) {
    if (b.currTemplate[P]) {
      var c2 = b.currTemplate[P].find("iframe");
      c2.length && (a2 || (c2[0].src = Q), b.isIE8 && c2.css("display", a2 ? "block" : "none"));
    }
  };
  a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "http://www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() {
    b.types.push(P), w("BeforeChange", function(a2, b2, c2) {
      b2 !== c2 && (b2 === P ? R() : c2 === P && R(true));
    }), w(h + "." + P, function() {
      R();
    });
  }, getIframe: function(c2, d2) {
    var e2 = c2.src, f2 = b.st.iframe;
    a.each(f2.patterns, function() {
      return e2.indexOf(this.index) > -1 ? (this.id && (e2 = "string" == typeof this.id ? e2.substr(e2.lastIndexOf(this.id) + this.id.length, e2.length) : this.id.call(this, e2)), e2 = this.src.replace("%id%", e2), false) : void 0;
    });
    var g2 = {};
    return f2.srcAction && (g2[f2.srcAction] = e2), b._parseMarkup(d2, g2, c2), b.updateStatus("ready"), d2;
  } } });
  var S = function(a2) {
    var c2 = b.items.length;
    return a2 > c2 - 1 ? a2 - c2 : 0 > a2 ? c2 + a2 : a2;
  }, T = function(a2, b2, c2) {
    return a2.replace(/%curr%/gi, b2 + 1).replace(/%total%/gi, c2);
  };
  a.magnificPopup.registerModule("gallery", { options: { enabled: false, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: true, arrows: true, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() {
    var c2 = b.st.gallery, e2 = ".mfp-gallery";
    return b.direction = true, c2 && c2.enabled ? (f += " mfp-gallery", w(m + e2, function() {
      c2.navigateByImgClick && b.wrap.on("click" + e2, ".mfp-img", function() {
        return b.items.length > 1 ? (b.next(), false) : void 0;
      }), d.on("keydown" + e2, function(a2) {
        37 === a2.keyCode ? b.prev() : 39 === a2.keyCode && b.next();
      });
    }), w("UpdateStatus" + e2, function(a2, c3) {
      c3.text && (c3.text = T(c3.text, b.currItem.index, b.items.length));
    }), w(l + e2, function(a2, d2, e3, f2) {
      var g2 = b.items.length;
      e3.counter = g2 > 1 ? T(c2.tCounter, f2.index, g2) : "";
    }), w("BuildControls" + e2, function() {
      if (b.items.length > 1 && c2.arrows && !b.arrowLeft) {
        var d2 = c2.arrowMarkup, e3 = b.arrowLeft = a(d2.replace(/%title%/gi, c2.tPrev).replace(/%dir%/gi, "left")).addClass(s), f2 = b.arrowRight = a(d2.replace(/%title%/gi, c2.tNext).replace(/%dir%/gi, "right")).addClass(s);
        e3.click(function() {
          b.prev();
        }), f2.click(function() {
          b.next();
        }), b.container.append(e3.add(f2));
      }
    }), w(n + e2, function() {
      b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
        b.preloadNearbyImages(), b._preloadTimeout = null;
      }, 16);
    }), void w(h + e2, function() {
      d.off(e2), b.wrap.off("click" + e2), b.arrowRight = b.arrowLeft = null;
    })) : false;
  }, next: function() {
    b.direction = true, b.index = S(b.index + 1), b.updateItemHTML();
  }, prev: function() {
    b.direction = false, b.index = S(b.index - 1), b.updateItemHTML();
  }, goTo: function(a2) {
    b.direction = a2 >= b.index, b.index = a2, b.updateItemHTML();
  }, preloadNearbyImages: function() {
    var a2, c2 = b.st.gallery.preload, d2 = Math.min(c2[0], b.items.length), e2 = Math.min(c2[1], b.items.length);
    for (a2 = 1; a2 <= (b.direction ? e2 : d2); a2++) b._preloadItem(b.index + a2);
    for (a2 = 1; a2 <= (b.direction ? d2 : e2); a2++) b._preloadItem(b.index - a2);
  }, _preloadItem: function(c2) {
    if (c2 = S(c2), !b.items[c2].preloaded) {
      var d2 = b.items[c2];
      d2.parsed || (d2 = b.parseEl(c2)), y("LazyLoad", d2), "image" === d2.type && (d2.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
        d2.hasSize = true;
      }).on("error.mfploader", function() {
        d2.hasSize = true, d2.loadError = true, y("LazyLoadError", d2);
      }).attr("src", d2.src)), d2.preloaded = true;
    }
  } } });
  var U = "retina";
  a.magnificPopup.registerModule(U, { options: { replaceSrc: function(a2) {
    return a2.src.replace(/\.\w+$/, function(a3) {
      return "@2x" + a3;
    });
  }, ratio: 1 }, proto: { initRetina: function() {
    if (window.devicePixelRatio > 1) {
      var a2 = b.st.retina, c2 = a2.ratio;
      c2 = isNaN(c2) ? c2() : c2, c2 > 1 && (w("ImageHasSize." + U, function(a3, b2) {
        b2.img.css({ "max-width": b2.img[0].naturalWidth / c2, width: "100%" });
      }), w("ElementParse." + U, function(b2, d2) {
        d2.src = a2.replaceSrc(d2, c2);
      }));
    }
  } } }), A();
});
/*!
* jQuery meanMenu v2.0.8
* @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
*
*/
!function(e) {
  "use strict";
  e.fn.meanmenu = function(n) {
    var a = { meanMenuTarget: jQuery(this), meanMenuContainer: "body", meanMenuClose: "X", meanMenuCloseSize: "18px", meanMenuOpen: "<span /><span /><span />", meanRevealPosition: "right", meanRevealPositionDistance: "0", meanRevealColour: "", meanScreenWidth: "480", meanNavPush: "", meanShowChildren: true, meanExpandableChildren: true, meanRemoveAttrs: false, onePage: false, meanDisplay: "block", removeElements: "" };
    n = e.extend(a, n);
    var t = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function() {
      var e2 = n.meanMenuTarget, a2 = n.meanMenuContainer, s = n.meanMenuClose, i = n.meanMenuCloseSize, l = n.meanMenuOpen, m = n.meanRevealPosition, o = n.meanRevealPositionDistance, r = n.meanRevealColour, c = n.meanScreenWidth, u = n.meanNavPush, h = ".meanmenu-reveal", d = n.meanShowChildren, v = n.meanExpandableChildren, f = n.meanExpand, p = n.meanRemoveAttrs, g = n.onePage, C = n.meanDisplay, A = n.removeElements, M = false;
      (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (M = true), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
      var P = "", $ = function() {
        if ("center" === m) {
          var e3 = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
          P = "left:" + e3 + ";right:auto;", M ? jQuery(".meanmenu-reveal").animate({ left: e3 }) : jQuery(".meanmenu-reveal").css("left", e3);
        }
      }, _ = false, w = false;
      "right" === m && (P = "right:" + o + ";left:auto;"), "left" === m && (P = "left:" + o + ";right:auto;"), $();
      var E = "", W = function() {
        jQuery(E).is(".meanmenu-reveal.meanclose") ? E.html(s) : E.html(l);
      }, x = function() {
        jQuery(".mean-bar,.mean-push").remove(), jQuery(a2).removeClass("mean-container"), jQuery(e2).css("display", C), _ = false, w = false, jQuery(A).removeClass("mean-remove");
      }, b = function() {
        var n2 = "background:" + r + ";color:" + r + ";" + P;
        if (t <= c) {
          jQuery(A).addClass("mean-remove"), w = true, jQuery(a2).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + n2 + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
          var s2 = jQuery(e2).html();
          jQuery(".mean-nav").html(s2), p && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id");
          }), jQuery(e2).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", u), jQuery(e2).hide(), jQuery(".meanmenu-reveal").show(), jQuery(h).html(l), E = jQuery(h), jQuery(".mean-nav ul").hide(), d ? v ? (jQuery(".mean-nav ul ul").each(function() {
            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + f + "</a>");
          }), jQuery(".mean-expand").on("click", function(e3) {
            e3.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).prev("ul").slideUp(300, function() {
            }), jQuery(this).parent().removeClass("dropdown-opened")) : (jQuery(this).prev("ul").slideDown(300, function() {
            }), jQuery(this).parent().addClass("dropdown-opened")), jQuery(this).toggleClass("mean-clicked");
          })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), E.removeClass("meanclose"), jQuery(E).click(function(e3) {
            e3.preventDefault(), false === _ ? (E.css("text-align", "center"), E.css("text-indent", "0"), E.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), _ = true) : (jQuery(".mean-nav ul:first").slideUp(), _ = false), E.toggleClass("meanclose"), W(), jQuery(A).addClass("mean-remove");
          }), g && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
            jQuery(".mean-nav ul:first").slideUp(), _ = false, jQuery(E).toggleClass("meanclose").html(l);
          });
        } else x();
      };
      M || jQuery(window).resize(function() {
        t = window.innerWidth || document.documentElement.clientWidth, x(), t <= c ? (b(), $()) : x();
      }), jQuery(window).resize(function() {
        t = window.innerWidth || document.documentElement.clientWidth, M ? ($(), t <= c ? false === w && b() : x()) : (x(), t <= c && (b(), $()));
      }), b();
    });
  };
}(jQuery);
/*!
 * GSAP 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function(e) {
  "use strict";
  function _inheritsLoose(t2, e2) {
    t2.prototype = Object.create(e2.prototype), (t2.prototype.constructor = t2).__proto__ = e2;
  }
  function _assertThisInitialized(t2) {
    if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t2;
  }
  function r(t2) {
    return "string" == typeof t2;
  }
  function s(t2) {
    return "function" == typeof t2;
  }
  function t(t2) {
    return "number" == typeof t2;
  }
  function u(t2) {
    return void 0 === t2;
  }
  function v(t2) {
    return "object" == typeof t2;
  }
  function w(t2) {
    return false !== t2;
  }
  function x() {
    return "undefined" != typeof window;
  }
  function y(t2) {
    return s(t2) || r(t2);
  }
  function P(t2) {
    return (i = yt(t2, ot)) && Pe;
  }
  function Q(t2, e2) {
    return console.warn("Invalid property", t2, "set to", e2, "Missing plugin? gsap.registerPlugin()");
  }
  function R(t2, e2) {
    return !e2 && console.warn(t2);
  }
  function S(t2, e2) {
    return t2 && (ot[t2] = e2) && i && (i[t2] = e2) || ot;
  }
  function T() {
    return 0;
  }
  function ea(t2) {
    var e2, r2, i2 = t2[0];
    if (v(i2) || s(i2) || (t2 = [t2]), !(e2 = (i2._gsap || {}).harness)) {
      for (r2 = gt.length; r2-- && !gt[r2].targetTest(i2); ) ;
      e2 = gt[r2];
    }
    for (r2 = t2.length; r2--; ) t2[r2] && (t2[r2]._gsap || (t2[r2]._gsap = new qt(t2[r2], e2))) || t2.splice(r2, 1);
    return t2;
  }
  function fa(t2) {
    return t2._gsap || ea(Mt(t2))[0]._gsap;
  }
  function ga(t2, e2, r2) {
    return (r2 = t2[e2]) && s(r2) ? t2[e2]() : u(r2) && t2.getAttribute && t2.getAttribute(e2) || r2;
  }
  function ha(t2, e2) {
    return (t2 = t2.split(",")).forEach(e2) || t2;
  }
  function ia(t2) {
    return Math.round(1e5 * t2) / 1e5 || 0;
  }
  function ja(t2) {
    return Math.round(1e7 * t2) / 1e7 || 0;
  }
  function ka(t2, e2) {
    var r2 = e2.charAt(0), i2 = parseFloat(e2.substr(2));
    return t2 = parseFloat(t2), "+" === r2 ? t2 + i2 : "-" === r2 ? t2 - i2 : "*" === r2 ? t2 * i2 : t2 / i2;
  }
  function la(t2, e2) {
    for (var r2 = e2.length, i2 = 0; t2.indexOf(e2[i2]) < 0 && ++i2 < r2; ) ;
    return i2 < r2;
  }
  function ma() {
    var t2, e2, r2 = ct.length, i2 = ct.slice(0);
    for (dt = {}, t2 = ct.length = 0; t2 < r2; t2++) (e2 = i2[t2]) && e2._lazy && (e2.render(e2._lazy[0], e2._lazy[1], true)._lazy = 0);
  }
  function na(t2, e2, r2, i2) {
    ct.length && !B && ma(), t2.render(e2, r2, i2 || B && e2 < 0 && (t2._initted || t2._startAt)), ct.length && !B && ma();
  }
  function oa(t2) {
    var e2 = parseFloat(t2);
    return (e2 || 0 === e2) && (t2 + "").match(at).length < 2 ? e2 : r(t2) ? t2.trim() : t2;
  }
  function pa(t2) {
    return t2;
  }
  function qa(t2, e2) {
    for (var r2 in e2) r2 in t2 || (t2[r2] = e2[r2]);
    return t2;
  }
  function ta(t2, e2) {
    for (var r2 in e2) "__proto__" !== r2 && "constructor" !== r2 && "prototype" !== r2 && (t2[r2] = v(e2[r2]) ? ta(t2[r2] || (t2[r2] = {}), e2[r2]) : e2[r2]);
    return t2;
  }
  function ua(t2, e2) {
    var r2, i2 = {};
    for (r2 in t2) r2 in e2 || (i2[r2] = t2[r2]);
    return i2;
  }
  function va(t2) {
    var e2 = t2.parent || L, r2 = t2.keyframes ? /* @__PURE__ */ function _setKeyframeDefaults(i2) {
      return function(t3, e3) {
        for (var r3 in e3) r3 in t3 || "duration" === r3 && i2 || "ease" === r3 || (t3[r3] = e3[r3]);
      };
    }(Z(t2.keyframes)) : qa;
    if (w(t2.inherit)) for (; e2; ) r2(t2, e2.vars.defaults), e2 = e2.parent || e2._dp;
    return t2;
  }
  function xa(t2, e2, r2, i2, n2) {
    void 0 === r2 && (r2 = "_first"), void 0 === i2 && (i2 = "_last");
    var a2, s2 = t2[i2];
    if (n2) for (a2 = e2[n2]; s2 && s2[n2] > a2; ) s2 = s2._prev;
    return s2 ? (e2._next = s2._next, s2._next = e2) : (e2._next = t2[r2], t2[r2] = e2), e2._next ? e2._next._prev = e2 : t2[i2] = e2, e2._prev = s2, e2.parent = e2._dp = t2, e2;
  }
  function ya(t2, e2, r2, i2) {
    void 0 === r2 && (r2 = "_first"), void 0 === i2 && (i2 = "_last");
    var n2 = e2._prev, a2 = e2._next;
    n2 ? n2._next = a2 : t2[r2] === e2 && (t2[r2] = a2), a2 ? a2._prev = n2 : t2[i2] === e2 && (t2[i2] = n2), e2._next = e2._prev = e2.parent = null;
  }
  function za(t2, e2) {
    !t2.parent || e2 && !t2.parent.autoRemoveChildren || t2.parent.remove(t2), t2._act = 0;
  }
  function Aa(t2, e2) {
    if (t2 && (!e2 || e2._end > t2._dur || e2._start < 0)) for (var r2 = t2; r2; ) r2._dirty = 1, r2 = r2.parent;
    return t2;
  }
  function Ca(t2, e2, r2, i2) {
    return t2._startAt && (B ? t2._startAt.revert(ht) : t2.vars.immediateRender && !t2.vars.autoRevert || t2._startAt.render(e2, true, i2));
  }
  function Ea(t2) {
    return t2._repeat ? Tt(t2._tTime, t2 = t2.duration() + t2._rDelay) * t2 : 0;
  }
  function Ga(t2, e2) {
    return (t2 - e2._start) * e2._ts + (0 <= e2._ts ? 0 : e2._dirty ? e2.totalDuration() : e2._tDur);
  }
  function Ha(t2) {
    return t2._end = ja(t2._start + (t2._tDur / Math.abs(t2._ts || t2._rts || X) || 0));
  }
  function Ia(t2, e2) {
    var r2 = t2._dp;
    return r2 && r2.smoothChildTiming && t2._ts && (t2._start = ja(r2._time - (0 < t2._ts ? e2 / t2._ts : ((t2._dirty ? t2.totalDuration() : t2._tDur) - e2) / -t2._ts)), Ha(t2), r2._dirty || Aa(r2, t2)), t2;
  }
  function Ja(t2, e2) {
    var r2;
    if ((e2._time || e2._initted && !e2._dur) && (r2 = Ga(t2.rawTime(), e2), (!e2._dur || Ot(0, e2.totalDuration(), r2) - e2._tTime > X) && e2.render(r2, true)), Aa(t2, e2)._dp && t2._initted && t2._time >= t2._dur && t2._ts) {
      if (t2._dur < t2.duration()) for (r2 = t2; r2._dp; ) 0 <= r2.rawTime() && r2.totalTime(r2._tTime), r2 = r2._dp;
      t2._zTime = -X;
    }
  }
  function Ka(e2, r2, i2, n2) {
    return r2.parent && za(r2), r2._start = ja((t(i2) ? i2 : i2 || e2 !== L ? xt(e2, i2, r2) : e2._time) + r2._delay), r2._end = ja(r2._start + (r2.totalDuration() / Math.abs(r2.timeScale()) || 0)), xa(e2, r2, "_first", "_last", e2._sort ? "_start" : 0), bt(r2) || (e2._recent = r2), n2 || Ja(e2, r2), e2._ts < 0 && Ia(e2, e2._tTime), e2;
  }
  function La(t2, e2) {
    return (ot.ScrollTrigger || Q("scrollTrigger", e2)) && ot.ScrollTrigger.create(e2, t2);
  }
  function Ma(t2, e2, r2, i2, n2) {
    return Kt(t2, e2, n2), t2._initted ? !r2 && t2._pt && !B && (t2._dur && false !== t2.vars.lazy || !t2._dur && t2.vars.lazy) && f !== Rt.frame ? (ct.push(t2), t2._lazy = [n2, i2], 1) : void 0 : 1;
  }
  function Ra(t2, e2, r2, i2) {
    var n2 = t2._repeat, a2 = ja(e2) || 0, s2 = t2._tTime / t2._tDur;
    return s2 && !i2 && (t2._time *= a2 / t2._dur), t2._dur = a2, t2._tDur = n2 ? n2 < 0 ? 1e10 : ja(a2 * (n2 + 1) + t2._rDelay * n2) : a2, 0 < s2 && !i2 && Ia(t2, t2._tTime = t2._tDur * s2), t2.parent && Ha(t2), r2 || Aa(t2.parent, t2), t2;
  }
  function Sa(t2) {
    return t2 instanceof Xt ? Aa(t2) : Ra(t2, t2._dur);
  }
  function Va(e2, r2, i2) {
    var n2, a2, s2 = t(r2[1]), o2 = (s2 ? 2 : 1) + (e2 < 2 ? 0 : 1), u2 = r2[o2];
    if (s2 && (u2.duration = r2[1]), u2.parent = i2, e2) {
      for (n2 = u2, a2 = i2; a2 && !("immediateRender" in n2); ) n2 = a2.vars.defaults || {}, a2 = w(a2.vars.inherit) && a2.parent;
      u2.immediateRender = w(n2.immediateRender), e2 < 2 ? u2.runBackwards = 1 : u2.startAt = r2[o2 - 1];
    }
    return new Jt(r2[0], u2, r2[1 + o2]);
  }
  function Wa(t2, e2) {
    return t2 || 0 === t2 ? e2(t2) : e2;
  }
  function Ya(t2, e2) {
    return r(t2) && (e2 = st.exec(t2)) ? e2[1] : "";
  }
  function _a(t2, e2) {
    return t2 && v(t2) && "length" in t2 && (!e2 && !t2.length || t2.length - 1 in t2 && v(t2[0])) && !t2.nodeType && t2 !== h;
  }
  function cb(r2) {
    return r2 = Mt(r2)[0] || R("Invalid scope") || {}, function(t2) {
      var e2 = r2.current || r2.nativeElement || r2;
      return Mt(t2, e2.querySelectorAll ? e2 : e2 === r2 ? R("Invalid scope") || a.createElement("div") : r2);
    };
  }
  function db(t2) {
    return t2.sort(function() {
      return 0.5 - Math.random();
    });
  }
  function eb(t2) {
    if (s(t2)) return t2;
    var p2 = v(t2) ? t2 : { each: t2 }, _2 = jt(p2.ease), m2 = p2.from || 0, g2 = parseFloat(p2.base) || 0, y2 = {}, e2 = 0 < m2 && m2 < 1, T2 = isNaN(m2) || e2, b2 = p2.axis, w2 = m2, x2 = m2;
    return r(m2) ? w2 = x2 = { center: 0.5, edges: 0.5, end: 1 }[m2] || 0 : !e2 && T2 && (w2 = m2[0], x2 = m2[1]), function(t3, e3, r2) {
      var i2, n2, a2, s2, o2, u2, h2, l2, f2, c2 = (r2 || p2).length, d2 = y2[c2];
      if (!d2) {
        if (!(f2 = "auto" === p2.grid ? 0 : (p2.grid || [1, U])[1])) {
          for (h2 = -U; h2 < (h2 = r2[f2++].getBoundingClientRect().left) && f2 < c2; ) ;
          f2--;
        }
        for (d2 = y2[c2] = [], i2 = T2 ? Math.min(f2, c2) * w2 - 0.5 : m2 % f2, n2 = f2 === U ? 0 : T2 ? c2 * x2 / f2 - 0.5 : m2 / f2 | 0, l2 = U, u2 = h2 = 0; u2 < c2; u2++) a2 = u2 % f2 - i2, s2 = n2 - (u2 / f2 | 0), d2[u2] = o2 = b2 ? Math.abs("y" === b2 ? s2 : a2) : G(a2 * a2 + s2 * s2), h2 < o2 && (h2 = o2), o2 < l2 && (l2 = o2);
        "random" === m2 && db(d2), d2.max = h2 - l2, d2.min = l2, d2.v = c2 = (parseFloat(p2.amount) || parseFloat(p2.each) * (c2 < f2 ? c2 - 1 : b2 ? "y" === b2 ? c2 / f2 : f2 : Math.max(f2, c2 / f2)) || 0) * ("edges" === m2 ? -1 : 1), d2.b = c2 < 0 ? g2 - c2 : g2, d2.u = Ya(p2.amount || p2.each) || 0, _2 = _2 && c2 < 0 ? Yt(_2) : _2;
      }
      return c2 = (d2[t3] - d2.min) / d2.max || 0, ja(d2.b + (_2 ? _2(c2) : c2) * d2.v) + d2.u;
    };
  }
  function fb(i2) {
    var n2 = Math.pow(10, ((i2 + "").split(".")[1] || "").length);
    return function(e2) {
      var r2 = ja(Math.round(parseFloat(e2) / i2) * i2 * n2);
      return (r2 - r2 % 1) / n2 + (t(e2) ? 0 : Ya(e2));
    };
  }
  function gb(h2, e2) {
    var l2, f2, r2 = Z(h2);
    return !r2 && v(h2) && (l2 = r2 = h2.radius || U, h2.values ? (h2 = Mt(h2.values), (f2 = !t(h2[0])) && (l2 *= l2)) : h2 = fb(h2.increment)), Wa(e2, r2 ? s(h2) ? function(t2) {
      return f2 = h2(t2), Math.abs(f2 - t2) <= l2 ? f2 : t2;
    } : function(e3) {
      for (var r3, i2, n2 = parseFloat(f2 ? e3.x : e3), a2 = parseFloat(f2 ? e3.y : 0), s2 = U, o2 = 0, u2 = h2.length; u2--; ) (r3 = f2 ? (r3 = h2[u2].x - n2) * r3 + (i2 = h2[u2].y - a2) * i2 : Math.abs(h2[u2] - n2)) < s2 && (s2 = r3, o2 = u2);
      return o2 = !l2 || s2 <= l2 ? h2[o2] : e3, f2 || o2 === e3 || t(e3) ? o2 : o2 + Ya(e3);
    } : fb(h2));
  }
  function hb(t2, e2, r2, i2) {
    return Wa(Z(t2) ? !e2 : true === r2 ? !!(r2 = 0) : !i2, function() {
      return Z(t2) ? t2[~~(Math.random() * t2.length)] : (r2 = r2 || 1e-5) && (i2 = r2 < 1 ? Math.pow(10, (r2 + "").length - 2) : 1) && Math.floor(Math.round((t2 - r2 / 2 + Math.random() * (e2 - t2 + 0.99 * r2)) / r2) * r2 * i2) / i2;
    });
  }
  function lb(e2, r2, t2) {
    return Wa(t2, function(t3) {
      return e2[~~r2(t3)];
    });
  }
  function ob(t2) {
    for (var e2, r2, i2, n2, a2 = 0, s2 = ""; ~(e2 = t2.indexOf("random(", a2)); ) i2 = t2.indexOf(")", e2), n2 = "[" === t2.charAt(e2 + 7), r2 = t2.substr(e2 + 7, i2 - e2 - 7).match(n2 ? at : tt), s2 += t2.substr(a2, e2 - a2) + hb(n2 ? r2 : +r2[0], n2 ? 0 : +r2[1], +r2[2] || 1e-5), a2 = i2 + 1;
    return s2 + t2.substr(a2, t2.length - a2);
  }
  function rb(t2, e2, r2) {
    var i2, n2, a2, s2 = t2.labels, o2 = U;
    for (i2 in s2) (n2 = s2[i2] - e2) < 0 == !!r2 && n2 && o2 > (n2 = Math.abs(n2)) && (a2 = i2, o2 = n2);
    return a2;
  }
  function tb(t2) {
    return za(t2), t2.scrollTrigger && t2.scrollTrigger.kill(!!B), t2.progress() < 1 && St(t2, "onInterrupt"), t2;
  }
  function wb(t2) {
    if (x()) {
      var e2 = (t2 = !t2.name && t2.default || t2).name, r2 = s(t2), i2 = e2 && !r2 && t2.init ? function() {
        this._props = [];
      } : t2, n2 = { init: T, render: fe, add: Qt, kill: _e, modifier: pe, rawVars: 0 }, a2 = { targetTest: 0, get: 0, getSetter: re, aliases: {}, register: 0 };
      if (Ft(), t2 !== i2) {
        if (pt[e2]) return;
        qa(i2, qa(ua(t2, n2), a2)), yt(i2.prototype, yt(n2, ua(t2, a2))), pt[i2.prop = e2] = i2, t2.targetTest && (gt.push(i2), ft[e2] = 1), e2 = ("css" === e2 ? "CSS" : e2.charAt(0).toUpperCase() + e2.substr(1)) + "Plugin";
      }
      S(e2, i2), t2.register && t2.register(Pe, i2, ge);
    } else Ct.push(t2);
  }
  function zb(t2, e2, r2) {
    return (6 * (t2 += t2 < 0 ? 1 : 1 < t2 ? -1 : 0) < 1 ? e2 + (r2 - e2) * t2 * 6 : t2 < 0.5 ? r2 : 3 * t2 < 2 ? e2 + (r2 - e2) * (2 / 3 - t2) * 6 : e2) * Pt + 0.5 | 0;
  }
  function Ab(e2, r2, i2) {
    var n2, a2, s2, o2, u2, h2, l2, f2, c2, d2, p2 = e2 ? t(e2) ? [e2 >> 16, e2 >> 8 & Pt, e2 & Pt] : 0 : Dt.black;
    if (!p2) {
      if ("," === e2.substr(-1) && (e2 = e2.substr(0, e2.length - 1)), Dt[e2]) p2 = Dt[e2];
      else if ("#" === e2.charAt(0)) {
        if (e2.length < 6 && (e2 = "#" + (n2 = e2.charAt(1)) + n2 + (a2 = e2.charAt(2)) + a2 + (s2 = e2.charAt(3)) + s2 + (5 === e2.length ? e2.charAt(4) + e2.charAt(4) : "")), 9 === e2.length) return [(p2 = parseInt(e2.substr(1, 6), 16)) >> 16, p2 >> 8 & Pt, p2 & Pt, parseInt(e2.substr(7), 16) / 255];
        p2 = [(e2 = parseInt(e2.substr(1), 16)) >> 16, e2 >> 8 & Pt, e2 & Pt];
      } else if ("hsl" === e2.substr(0, 3)) if (p2 = d2 = e2.match(tt), r2) {
        if (~e2.indexOf("=")) return p2 = e2.match(et), i2 && p2.length < 4 && (p2[3] = 1), p2;
      } else o2 = +p2[0] % 360 / 360, u2 = p2[1] / 100, n2 = 2 * (h2 = p2[2] / 100) - (a2 = h2 <= 0.5 ? h2 * (u2 + 1) : h2 + u2 - h2 * u2), 3 < p2.length && (p2[3] *= 1), p2[0] = zb(o2 + 1 / 3, n2, a2), p2[1] = zb(o2, n2, a2), p2[2] = zb(o2 - 1 / 3, n2, a2);
      else p2 = e2.match(tt) || Dt.transparent;
      p2 = p2.map(Number);
    }
    return r2 && !d2 && (n2 = p2[0] / Pt, a2 = p2[1] / Pt, s2 = p2[2] / Pt, h2 = ((l2 = Math.max(n2, a2, s2)) + (f2 = Math.min(n2, a2, s2))) / 2, l2 === f2 ? o2 = u2 = 0 : (c2 = l2 - f2, u2 = 0.5 < h2 ? c2 / (2 - l2 - f2) : c2 / (l2 + f2), o2 = l2 === n2 ? (a2 - s2) / c2 + (a2 < s2 ? 6 : 0) : l2 === a2 ? (s2 - n2) / c2 + 2 : (n2 - a2) / c2 + 4, o2 *= 60), p2[0] = ~~(o2 + 0.5), p2[1] = ~~(100 * u2 + 0.5), p2[2] = ~~(100 * h2 + 0.5)), i2 && p2.length < 4 && (p2[3] = 1), p2;
  }
  function Bb(t2) {
    var r2 = [], i2 = [], n2 = -1;
    return t2.split(Et).forEach(function(t3) {
      var e2 = t3.match(rt) || [];
      r2.push.apply(r2, e2), i2.push(n2 += e2.length + 1);
    }), r2.c = i2, r2;
  }
  function Cb(t2, e2, r2) {
    var i2, n2, a2, s2, o2 = "", u2 = (t2 + o2).match(Et), h2 = e2 ? "hsla(" : "rgba(", l2 = 0;
    if (!u2) return t2;
    if (u2 = u2.map(function(t3) {
      return (t3 = Ab(t3, e2, 1)) && h2 + (e2 ? t3[0] + "," + t3[1] + "%," + t3[2] + "%," + t3[3] : t3.join(",")) + ")";
    }), r2 && (a2 = Bb(t2), (i2 = r2.c).join(o2) !== a2.c.join(o2))) for (s2 = (n2 = t2.replace(Et, "1").split(rt)).length - 1; l2 < s2; l2++) o2 += n2[l2] + (~i2.indexOf(l2) ? u2.shift() || h2 + "0,0,0,0)" : (a2.length ? a2 : u2.length ? u2 : r2).shift());
    if (!n2) for (s2 = (n2 = t2.split(Et)).length - 1; l2 < s2; l2++) o2 += n2[l2] + u2[l2];
    return o2 + n2[s2];
  }
  function Fb(t2) {
    var e2, r2 = t2.join(" ");
    if (Et.lastIndex = 0, Et.test(r2)) return e2 = zt.test(r2), t2[1] = Cb(t2[1], e2), t2[0] = Cb(t2[0], e2, Bb(t2[1])), true;
  }
  function Ob(t2) {
    var e2 = (t2 + "").split("("), r2 = It[e2[0]];
    return r2 && 1 < e2.length && r2.config ? r2.config.apply(null, ~t2.indexOf("{") ? [function _parseObjectInString(t3) {
      for (var e3, r3, i2, n2 = {}, a2 = t3.substr(1, t3.length - 3).split(":"), s2 = a2[0], o2 = 1, u2 = a2.length; o2 < u2; o2++) r3 = a2[o2], e3 = o2 !== u2 - 1 ? r3.lastIndexOf(",") : r3.length, i2 = r3.substr(0, e3), n2[s2] = isNaN(i2) ? i2.replace(Lt, "").trim() : +i2, s2 = r3.substr(e3 + 1).trim();
      return n2;
    }(e2[1])] : function _valueInParentheses(t3) {
      var e3 = t3.indexOf("(") + 1, r3 = t3.indexOf(")"), i2 = t3.indexOf("(", e3);
      return t3.substring(e3, ~i2 && i2 < r3 ? t3.indexOf(")", r3 + 1) : r3);
    }(t2).split(",").map(oa)) : It._CE && Bt.test(t2) ? It._CE("", t2) : r2;
  }
  function Qb(t2, e2) {
    for (var r2, i2 = t2._first; i2; ) i2 instanceof Xt ? Qb(i2, e2) : !i2.vars.yoyoEase || i2._yoyo && i2._repeat || i2._yoyo === e2 || (i2.timeline ? Qb(i2.timeline, e2) : (r2 = i2._ease, i2._ease = i2._yEase, i2._yEase = r2, i2._yoyo = e2)), i2 = i2._next;
  }
  function Sb(t2, e2, r2, i2) {
    void 0 === r2 && (r2 = function easeOut(t3) {
      return 1 - e2(1 - t3);
    }), void 0 === i2 && (i2 = function easeInOut(t3) {
      return t3 < 0.5 ? e2(2 * t3) / 2 : 1 - e2(2 * (1 - t3)) / 2;
    });
    var n2, a2 = { easeIn: e2, easeOut: r2, easeInOut: i2 };
    return ha(t2, function(t3) {
      for (var e3 in It[t3] = ot[t3] = a2, It[n2 = t3.toLowerCase()] = r2, a2) It[n2 + ("easeIn" === e3 ? ".in" : "easeOut" === e3 ? ".out" : ".inOut")] = It[t3 + "." + e3] = a2[e3];
    }), a2;
  }
  function Tb(e2) {
    return function(t2) {
      return t2 < 0.5 ? (1 - e2(1 - 2 * t2)) / 2 : 0.5 + e2(2 * (t2 - 0.5)) / 2;
    };
  }
  function Ub(r2, t2, e2) {
    function Im(t3) {
      return 1 === t3 ? 1 : i2 * Math.pow(2, -10 * t3) * H((t3 - a2) * n2) + 1;
    }
    var i2 = 1 <= t2 ? t2 : 1, n2 = (e2 || (r2 ? 0.3 : 0.45)) / (t2 < 1 ? t2 : 1), a2 = n2 / N * (Math.asin(1 / i2) || 0), s2 = "out" === r2 ? Im : "in" === r2 ? function(t3) {
      return 1 - Im(1 - t3);
    } : Tb(Im);
    return n2 = N / n2, s2.config = function(t3, e3) {
      return Ub(r2, t3, e3);
    }, s2;
  }
  function Vb(e2, r2) {
    function Qm(t3) {
      return t3 ? --t3 * t3 * ((r2 + 1) * t3 + r2) + 1 : 0;
    }
    void 0 === r2 && (r2 = 1.70158);
    var t2 = "out" === e2 ? Qm : "in" === e2 ? function(t3) {
      return 1 - Qm(1 - t3);
    } : Tb(Qm);
    return t2.config = function(t3) {
      return Vb(e2, t3);
    }, t2;
  }
  var I, B, l, L, h, n, a, i, o, f, c, d, p, _, m, g, b, O, k, M, A, C, D, E, z, F, Y, j, V = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, q = { duration: 0.5, overwrite: false, delay: 0 }, U = 1e8, X = 1 / U, N = 2 * Math.PI, W = N / 4, K = 0, G = Math.sqrt, $ = Math.cos, H = Math.sin, J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {
  }, Z = Array.isArray, tt = /(?:-?\.?\d|\.)+/gi, et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, nt = /[+-]=-?[.\d]+/, at = /[^,'"\[\]\s]+/gi, st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ot = {}, ut = { suppressEvents: true, isStart: true, kill: false }, ht = { suppressEvents: true, kill: false }, lt = { suppressEvents: true }, ft = {}, ct = [], dt = {}, pt = {}, _t = {}, mt = 30, gt = [], vt = "", yt = function _merge(t2, e2) {
    for (var r2 in e2) t2[r2] = e2[r2];
    return t2;
  }, Tt = function _animationCycle(t2, e2) {
    var r2 = Math.floor(t2 /= e2);
    return t2 && r2 === t2 ? r2 - 1 : r2;
  }, bt = function _isFromOrFromStart(t2) {
    var e2 = t2.data;
    return "isFromStart" === e2 || "isStart" === e2;
  }, wt = { _start: 0, endTime: T, totalDuration: T }, xt = function _parsePosition(t2, e2, i2) {
    var n2, a2, s2, o2 = t2.labels, u2 = t2._recent || wt, h2 = t2.duration() >= U ? u2.endTime(false) : t2._dur;
    return r(e2) && (isNaN(e2) || e2 in o2) ? (a2 = e2.charAt(0), s2 = "%" === e2.substr(-1), n2 = e2.indexOf("="), "<" === a2 || ">" === a2 ? (0 <= n2 && (e2 = e2.replace(/=/, "")), ("<" === a2 ? u2._start : u2.endTime(0 <= u2._repeat)) + (parseFloat(e2.substr(1)) || 0) * (s2 ? (n2 < 0 ? u2 : i2).totalDuration() / 100 : 1)) : n2 < 0 ? (e2 in o2 || (o2[e2] = h2), o2[e2]) : (a2 = parseFloat(e2.charAt(n2 - 1) + e2.substr(n2 + 1)), s2 && i2 && (a2 = a2 / 100 * (Z(i2) ? i2[0] : i2).totalDuration()), 1 < n2 ? _parsePosition(t2, e2.substr(0, n2 - 1), i2) + a2 : h2 + a2)) : null == e2 ? h2 : +e2;
  }, Ot = function _clamp(t2, e2, r2) {
    return r2 < t2 ? t2 : e2 < r2 ? e2 : r2;
  }, kt = [].slice, Mt = function toArray(t2, e2, i2) {
    return l && !e2 && l.selector ? l.selector(t2) : !r(t2) || i2 || !n && Ft() ? Z(t2) ? function _flatten(t3, e3, i3) {
      return void 0 === i3 && (i3 = []), t3.forEach(function(t4) {
        return r(t4) && !e3 || _a(t4, 1) ? i3.push.apply(i3, Mt(t4)) : i3.push(t4);
      }) || i3;
    }(t2, i2) : _a(t2) ? kt.call(t2, 0) : t2 ? [t2] : [] : kt.call((e2 || a).querySelectorAll(t2), 0);
  }, At = function mapRange(e2, t2, r2, i2, n2) {
    var a2 = t2 - e2, s2 = i2 - r2;
    return Wa(n2, function(t3) {
      return r2 + ((t3 - e2) / a2 * s2 || 0);
    });
  }, St = function _callback(t2, e2, r2) {
    var i2, n2, a2, s2 = t2.vars, o2 = s2[e2], u2 = l, h2 = t2._ctx;
    if (o2) return i2 = s2[e2 + "Params"], n2 = s2.callbackScope || t2, r2 && ct.length && ma(), h2 && (l = h2), a2 = i2 ? o2.apply(n2, i2) : o2.call(n2), l = u2, a2;
  }, Ct = [], Pt = 255, Dt = { aqua: [0, Pt, Pt], lime: [0, Pt, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, Pt], navy: [0, 0, 128], white: [Pt, Pt, Pt], olive: [128, 128, 0], yellow: [Pt, Pt, 0], orange: [Pt, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [Pt, 0, 0], pink: [Pt, 192, 203], cyan: [0, Pt, Pt], transparent: [Pt, Pt, Pt, 0] }, Et = function() {
    var t2, e2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (t2 in Dt) e2 += "|" + t2 + "\\b";
    return new RegExp(e2 + ")", "gi");
  }(), zt = /hsl[a]?\(/, Rt = (k = Date.now, M = 500, A = 33, C = k(), D = C, z = E = 1e3 / 240, g = { time: 0, frame: 0, tick: function tick() {
    xl(true);
  }, deltaRatio: function deltaRatio(t2) {
    return b / (1e3 / (t2 || 60));
  }, wake: function wake() {
    o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Pe, (h.gsapVersions || (h.gsapVersions = [])).push(Pe.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame, Ct.forEach(wb)), p && g.sleep(), _ = m || function(t2) {
      return setTimeout(t2, z - 1e3 * g.time + 1 | 0);
    }, d = 1, xl(2));
  }, sleep: function sleep() {
    (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T;
  }, lagSmoothing: function lagSmoothing(t2, e2) {
    M = t2 || 1 / 0, A = Math.min(e2 || 33, M);
  }, fps: function fps(t2) {
    E = 1e3 / (t2 || 240), z = 1e3 * g.time + E;
  }, add: function add(n2, t2, e2) {
    var a2 = t2 ? function(t3, e3, r2, i2) {
      n2(t3, e3, r2, i2), g.remove(a2);
    } : n2;
    return g.remove(n2), F[e2 ? "unshift" : "push"](a2), Ft(), a2;
  }, remove: function remove(t2, e2) {
    ~(e2 = F.indexOf(t2)) && F.splice(e2, 1) && e2 <= O && O--;
  }, _listeners: F = [] }), Ft = function _wake() {
    return !d && Rt.wake();
  }, It = {}, Bt = /^[\d.\-M][\d.\-,\s]/, Lt = /["']/g, Yt = function _invertEase(e2) {
    return function(t2) {
      return 1 - e2(1 - t2);
    };
  }, jt = function _parseEase(t2, e2) {
    return t2 && (s(t2) ? t2 : It[t2] || Ob(t2)) || e2;
  };
  function xl(t2) {
    var e2, r2, i2, n2, a2 = k() - D, s2 = true === t2;
    if (M < a2 && (C += a2 - A), (0 < (e2 = (i2 = (D += a2) - C) - z) || s2) && (n2 = ++g.frame, b = i2 - 1e3 * g.time, g.time = i2 /= 1e3, z += e2 + (E <= e2 ? 4 : E - e2), r2 = 1), s2 || (p = _(xl)), r2) for (O = 0; O < F.length; O++) F[O](i2, b, n2, t2);
  }
  function fn(t2) {
    return t2 < j ? Y * t2 * t2 : t2 < 0.7272727272727273 ? Y * Math.pow(t2 - 1.5 / 2.75, 2) + 0.75 : t2 < 0.9090909090909092 ? Y * (t2 -= 2.25 / 2.75) * t2 + 0.9375 : Y * Math.pow(t2 - 2.625 / 2.75, 2) + 0.984375;
  }
  ha("Linear,Quad,Cubic,Quart,Quint,Strong", function(t2, e2) {
    var r2 = e2 < 5 ? e2 + 1 : e2;
    Sb(t2 + ",Power" + (r2 - 1), e2 ? function(t3) {
      return Math.pow(t3, r2);
    } : function(t3) {
      return t3;
    }, function(t3) {
      return 1 - Math.pow(1 - t3, r2);
    }, function(t3) {
      return t3 < 0.5 ? Math.pow(2 * t3, r2) / 2 : 1 - Math.pow(2 * (1 - t3), r2) / 2;
    });
  }), It.Linear.easeNone = It.none = It.Linear.easeIn, Sb("Elastic", Ub("in"), Ub("out"), Ub()), Y = 7.5625, j = 1 / 2.75, Sb("Bounce", function(t2) {
    return 1 - fn(1 - t2);
  }, fn), Sb("Expo", function(t2) {
    return t2 ? Math.pow(2, 10 * (t2 - 1)) : 0;
  }), Sb("Circ", function(t2) {
    return -(G(1 - t2 * t2) - 1);
  }), Sb("Sine", function(t2) {
    return 1 === t2 ? 1 : 1 - $(t2 * W);
  }), Sb("Back", Vb("in"), Vb("out"), Vb()), It.SteppedEase = It.steps = ot.SteppedEase = { config: function config(t2, e2) {
    void 0 === t2 && (t2 = 1);
    var r2 = 1 / t2, i2 = t2 + (e2 ? 0 : 1), n2 = e2 ? 1 : 0;
    return function(t3) {
      return ((i2 * Ot(0, 0.99999999, t3) | 0) + n2) * r2;
    };
  } }, q.ease = It["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t2) {
    return vt += t2 + "," + t2 + "Params,";
  });
  var Vt, qt = function GSCache(t2, e2) {
    this.id = K++, (t2._gsap = this).target = t2, this.harness = e2, this.get = e2 ? e2.get : ga, this.set = e2 ? e2.getSetter : re;
  }, Ut = ((Vt = Animation.prototype).delay = function delay(t2) {
    return t2 || 0 === t2 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t2 - this._delay), this._delay = t2, this) : this._delay;
  }, Vt.duration = function duration(t2) {
    return arguments.length ? this.totalDuration(0 < this._repeat ? t2 + (t2 + this._rDelay) * this._repeat : t2) : this.totalDuration() && this._dur;
  }, Vt.totalDuration = function totalDuration(t2) {
    return arguments.length ? (this._dirty = 0, Ra(this, this._repeat < 0 ? t2 : (t2 - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, Vt.totalTime = function totalTime(t2, e2) {
    if (Ft(), !arguments.length) return this._tTime;
    var r2 = this._dp;
    if (r2 && r2.smoothChildTiming && this._ts) {
      for (Ia(this, t2), !r2._dp || r2.parent || Ja(r2, this); r2 && r2.parent; ) r2.parent._time !== r2._start + (0 <= r2._ts ? r2._tTime / r2._ts : (r2.totalDuration() - r2._tTime) / -r2._ts) && r2.totalTime(r2._tTime, true), r2 = r2.parent;
      !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t2 < this._tDur || this._ts < 0 && 0 < t2 || !this._tDur && !t2) && Ka(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== t2 || !this._dur && !e2 || this._initted && Math.abs(this._zTime) === X || !t2 && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t2), na(this, t2, e2)), this;
  }, Vt.time = function time(t2, e2) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t2 + Ea(this)) % (this._dur + this._rDelay) || (t2 ? this._dur : 0), e2) : this._time;
  }, Vt.totalProgress = function totalProgress(t2, e2) {
    return arguments.length ? this.totalTime(this.totalDuration() * t2, e2) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, Vt.progress = function progress(t2, e2) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t2 : 1 - t2) + Ea(this), e2) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, Vt.iteration = function iteration(t2, e2) {
    var r2 = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (t2 - 1) * r2, e2) : this._repeat ? Tt(this._tTime, r2) + 1 : 1;
  }, Vt.timeScale = function timeScale(t2) {
    if (!arguments.length) return this._rts === -X ? 0 : this._rts;
    if (this._rts === t2) return this;
    var e2 = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
    return this._rts = +t2 || 0, this._ts = this._ps || t2 === -X ? 0 : this._rts, this.totalTime(Ot(-Math.abs(this._delay), this._tDur, e2), true), Ha(this), function _recacheAncestors(t3) {
      for (var e3 = t3.parent; e3 && e3.parent; ) e3._dirty = 1, e3.totalDuration(), e3 = e3.parent;
      return t3;
    }(this);
  }, Vt.paused = function paused(t2) {
    return arguments.length ? (this._ps !== t2 && ((this._ps = t2) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ft(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))), this) : this._ps;
  }, Vt.startTime = function startTime(t2) {
    if (arguments.length) {
      this._start = t2;
      var e2 = this.parent || this._dp;
      return !e2 || !e2._sort && this.parent || Ka(e2, this, t2 - this._delay), this;
    }
    return this._start;
  }, Vt.endTime = function endTime(t2) {
    return this._start + (w(t2) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, Vt.rawTime = function rawTime(t2) {
    var e2 = this.parent || this._dp;
    return e2 ? t2 && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(e2.rawTime(t2), this) : this._tTime : this._tTime;
  }, Vt.revert = function revert(t2) {
    void 0 === t2 && (t2 = lt);
    var e2 = B;
    return B = t2, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t2), this.totalTime(-0.01, t2.suppressEvents)), "nested" !== this.data && false !== t2.kill && this.kill(), B = e2, this;
  }, Vt.globalTime = function globalTime(t2) {
    for (var e2 = this, r2 = arguments.length ? t2 : e2.rawTime(); e2; ) r2 = e2._start + r2 / (e2._ts || 1), e2 = e2._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t2) : r2;
  }, Vt.repeat = function repeat(t2) {
    return arguments.length ? (this._repeat = t2 === 1 / 0 ? -2 : t2, Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
  }, Vt.repeatDelay = function repeatDelay(t2) {
    if (arguments.length) {
      var e2 = this._time;
      return this._rDelay = t2, Sa(this), e2 ? this.time(e2) : this;
    }
    return this._rDelay;
  }, Vt.yoyo = function yoyo(t2) {
    return arguments.length ? (this._yoyo = t2, this) : this._yoyo;
  }, Vt.seek = function seek(t2, e2) {
    return this.totalTime(xt(this, t2), w(e2));
  }, Vt.restart = function restart(t2, e2) {
    return this.play().totalTime(t2 ? -this._delay : 0, w(e2));
  }, Vt.play = function play(t2, e2) {
    return null != t2 && this.seek(t2, e2), this.reversed(false).paused(false);
  }, Vt.reverse = function reverse(t2, e2) {
    return null != t2 && this.seek(t2 || this.totalDuration(), e2), this.reversed(true).paused(false);
  }, Vt.pause = function pause(t2, e2) {
    return null != t2 && this.seek(t2, e2), this.paused(true);
  }, Vt.resume = function resume() {
    return this.paused(false);
  }, Vt.reversed = function reversed(t2) {
    return arguments.length ? (!!t2 !== this.reversed() && this.timeScale(-this._rts || (t2 ? -X : 0)), this) : this._rts < 0;
  }, Vt.invalidate = function invalidate() {
    return this._initted = this._act = 0, this._zTime = -X, this;
  }, Vt.isActive = function isActive() {
    var t2, e2 = this.parent || this._dp, r2 = this._start;
    return !(e2 && !(this._ts && this._initted && e2.isActive() && (t2 = e2.rawTime(true)) >= r2 && t2 < this.endTime(true) - X));
  }, Vt.eventCallback = function eventCallback(t2, e2, r2) {
    var i2 = this.vars;
    return 1 < arguments.length ? (e2 ? (i2[t2] = e2, r2 && (i2[t2 + "Params"] = r2), "onUpdate" === t2 && (this._onUpdate = e2)) : delete i2[t2], this) : i2[t2];
  }, Vt.then = function then(t2) {
    var i2 = this;
    return new Promise(function(e2) {
      function Ao() {
        var t3 = i2.then;
        i2.then = null, s(r2) && (r2 = r2(i2)) && (r2.then || r2 === i2) && (i2.then = t3), e2(r2), i2.then = t3;
      }
      var r2 = s(t2) ? t2 : pa;
      i2._initted && 1 === i2.totalProgress() && 0 <= i2._ts || !i2._tTime && i2._ts < 0 ? Ao() : i2._prom = Ao;
    });
  }, Vt.kill = function kill() {
    tb(this);
  }, Animation);
  function Animation(t2) {
    this.vars = t2, this._delay = +t2.delay || 0, (this._repeat = t2.repeat === 1 / 0 ? -2 : t2.repeat || 0) && (this._rDelay = t2.repeatDelay || 0, this._yoyo = !!t2.yoyo || !!t2.yoyoEase), this._ts = 1, Ra(this, +t2.duration, 1, 1), this.data = t2.data, l && (this._ctx = l).data.push(this), d || Rt.wake();
  }
  qa(Ut.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -X, _prom: 0, _ps: false, _rts: 1 });
  var Xt = function(i2) {
    function Timeline(t2, e3) {
      var r2;
      return void 0 === t2 && (t2 = {}), (r2 = i2.call(this, t2) || this).labels = {}, r2.smoothChildTiming = !!t2.smoothChildTiming, r2.autoRemoveChildren = !!t2.autoRemoveChildren, r2._sort = w(t2.sortChildren), L && Ka(t2.parent || L, _assertThisInitialized(r2), e3), t2.reversed && r2.reverse(), t2.paused && r2.paused(true), t2.scrollTrigger && La(_assertThisInitialized(r2), t2.scrollTrigger), r2;
    }
    _inheritsLoose(Timeline, i2);
    var e2 = Timeline.prototype;
    return e2.to = function to(t2, e3, r2) {
      return Va(0, arguments, this), this;
    }, e2.from = function from(t2, e3, r2) {
      return Va(1, arguments, this), this;
    }, e2.fromTo = function fromTo(t2, e3, r2, i3) {
      return Va(2, arguments, this), this;
    }, e2.set = function set(t2, e3, r2) {
      return e3.duration = 0, e3.parent = this, va(e3).repeatDelay || (e3.repeat = 0), e3.immediateRender = !!e3.immediateRender, new Jt(t2, e3, xt(this, r2), 1), this;
    }, e2.call = function call(t2, e3, r2) {
      return Ka(this, Jt.delayedCall(0, t2, e3), r2);
    }, e2.staggerTo = function staggerTo(t2, e3, r2, i3, n2, a2, s2) {
      return r2.duration = e3, r2.stagger = r2.stagger || i3, r2.onComplete = a2, r2.onCompleteParams = s2, r2.parent = this, new Jt(t2, r2, xt(this, n2)), this;
    }, e2.staggerFrom = function staggerFrom(t2, e3, r2, i3, n2, a2, s2) {
      return r2.runBackwards = 1, va(r2).immediateRender = w(r2.immediateRender), this.staggerTo(t2, e3, r2, i3, n2, a2, s2);
    }, e2.staggerFromTo = function staggerFromTo(t2, e3, r2, i3, n2, a2, s2, o2) {
      return i3.startAt = r2, va(i3).immediateRender = w(i3.immediateRender), this.staggerTo(t2, e3, i3, n2, a2, s2, o2);
    }, e2.render = function render(t2, e3, r2) {
      var i3, n2, a2, s2, o2, u2, h2, l2, f2, c2, d2, p2, _2 = this._time, m2 = this._dirty ? this.totalDuration() : this._tDur, g2 = this._dur, v2 = t2 <= 0 ? 0 : ja(t2), y2 = this._zTime < 0 != t2 < 0 && (this._initted || !g2);
      if (this !== L && m2 < v2 && 0 <= t2 && (v2 = m2), v2 !== this._tTime || r2 || y2) {
        if (_2 !== this._time && g2 && (v2 += this._time - _2, t2 += this._time - _2), i3 = v2, f2 = this._start, u2 = !(l2 = this._ts), y2 && (g2 || (_2 = this._zTime), !t2 && e3 || (this._zTime = t2)), this._repeat) {
          if (d2 = this._yoyo, o2 = g2 + this._rDelay, this._repeat < -1 && t2 < 0) return this.totalTime(100 * o2 + t2, e3, r2);
          if (i3 = ja(v2 % o2), v2 === m2 ? (s2 = this._repeat, i3 = g2) : ((s2 = ~~(v2 / o2)) && s2 === v2 / o2 && (i3 = g2, s2--), g2 < i3 && (i3 = g2)), c2 = Tt(this._tTime, o2), !_2 && this._tTime && c2 !== s2 && this._tTime - c2 * o2 - this._dur <= 0 && (c2 = s2), d2 && 1 & s2 && (i3 = g2 - i3, p2 = 1), s2 !== c2 && !this._lock) {
            var T2 = d2 && 1 & c2, b2 = T2 === (d2 && 1 & s2);
            if (s2 < c2 && (T2 = !T2), _2 = T2 ? 0 : g2, this._lock = 1, this.render(_2 || (p2 ? 0 : ja(s2 * o2)), e3, !g2)._lock = 0, this._tTime = v2, !e3 && this.parent && St(this, "onRepeat"), this.vars.repeatRefresh && !p2 && (this.invalidate()._lock = 1), _2 && _2 !== this._time || u2 != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g2 = this._dur, m2 = this._tDur, b2 && (this._lock = 2, _2 = T2 ? g2 : -1e-4, this.render(_2, true), this.vars.repeatRefresh && !p2 && this.invalidate()), this._lock = 0, !this._ts && !u2) return this;
            Qb(this, p2);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (h2 = function _findNextPauseTween(t3, e4, r3) {
          var i4;
          if (e4 < r3) for (i4 = t3._first; i4 && i4._start <= r3; ) {
            if ("isPause" === i4.data && i4._start > e4) return i4;
            i4 = i4._next;
          }
          else for (i4 = t3._last; i4 && i4._start >= r3; ) {
            if ("isPause" === i4.data && i4._start < e4) return i4;
            i4 = i4._prev;
          }
        }(this, ja(_2), ja(i3))) && (v2 -= i3 - (i3 = h2._start)), this._tTime = v2, this._time = i3, this._act = !l2, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t2, _2 = 0), !_2 && i3 && !e3 && !s2 && (St(this, "onStart"), this._tTime !== v2)) return this;
        if (_2 <= i3 && 0 <= t2) for (n2 = this._first; n2; ) {
          if (a2 = n2._next, (n2._act || i3 >= n2._start) && n2._ts && h2 !== n2) {
            if (n2.parent !== this) return this.render(t2, e3, r2);
            if (n2.render(0 < n2._ts ? (i3 - n2._start) * n2._ts : (n2._dirty ? n2.totalDuration() : n2._tDur) + (i3 - n2._start) * n2._ts, e3, r2), i3 !== this._time || !this._ts && !u2) {
              h2 = 0, a2 && (v2 += this._zTime = -X);
              break;
            }
          }
          n2 = a2;
        }
        else {
          n2 = this._last;
          for (var w2 = t2 < 0 ? t2 : i3; n2; ) {
            if (a2 = n2._prev, (n2._act || w2 <= n2._end) && n2._ts && h2 !== n2) {
              if (n2.parent !== this) return this.render(t2, e3, r2);
              if (n2.render(0 < n2._ts ? (w2 - n2._start) * n2._ts : (n2._dirty ? n2.totalDuration() : n2._tDur) + (w2 - n2._start) * n2._ts, e3, r2 || B && (n2._initted || n2._startAt)), i3 !== this._time || !this._ts && !u2) {
                h2 = 0, a2 && (v2 += this._zTime = w2 ? -X : X);
                break;
              }
            }
            n2 = a2;
          }
        }
        if (h2 && !e3 && (this.pause(), h2.render(_2 <= i3 ? 0 : -X)._zTime = _2 <= i3 ? 1 : -1, this._ts)) return this._start = f2, Ha(this), this.render(t2, e3, r2);
        this._onUpdate && !e3 && St(this, "onUpdate", true), (v2 === m2 && this._tTime >= this.totalDuration() || !v2 && _2) && (f2 !== this._start && Math.abs(l2) === Math.abs(this._ts) || this._lock || (!t2 && g2 || !(v2 === m2 && 0 < this._ts || !v2 && this._ts < 0) || za(this, 1), e3 || t2 < 0 && !_2 || !v2 && !_2 && m2 || (St(this, v2 === m2 && 0 <= t2 ? "onComplete" : "onReverseComplete", true), !this._prom || v2 < m2 && 0 < this.timeScale() || this._prom())));
      }
      return this;
    }, e2.add = function add(e3, i3) {
      var n2 = this;
      if (t(i3) || (i3 = xt(this, i3, e3)), !(e3 instanceof Ut)) {
        if (Z(e3)) return e3.forEach(function(t2) {
          return n2.add(t2, i3);
        }), this;
        if (r(e3)) return this.addLabel(e3, i3);
        if (!s(e3)) return this;
        e3 = Jt.delayedCall(0, e3);
      }
      return this !== e3 ? Ka(this, e3, i3) : this;
    }, e2.getChildren = function getChildren(t2, e3, r2, i3) {
      void 0 === t2 && (t2 = true), void 0 === e3 && (e3 = true), void 0 === r2 && (r2 = true), void 0 === i3 && (i3 = -U);
      for (var n2 = [], a2 = this._first; a2; ) a2._start >= i3 && (a2 instanceof Jt ? e3 && n2.push(a2) : (r2 && n2.push(a2), t2 && n2.push.apply(n2, a2.getChildren(true, e3, r2)))), a2 = a2._next;
      return n2;
    }, e2.getById = function getById(t2) {
      for (var e3 = this.getChildren(1, 1, 1), r2 = e3.length; r2--; ) if (e3[r2].vars.id === t2) return e3[r2];
    }, e2.remove = function remove(t2) {
      return r(t2) ? this.removeLabel(t2) : s(t2) ? this.killTweensOf(t2) : (ya(this, t2), t2 === this._recent && (this._recent = this._last), Aa(this));
    }, e2.totalTime = function totalTime(t2, e3) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Rt.time - (0 < this._ts ? t2 / this._ts : (this.totalDuration() - t2) / -this._ts))), i2.prototype.totalTime.call(this, t2, e3), this._forcing = 0, this) : this._tTime;
    }, e2.addLabel = function addLabel(t2, e3) {
      return this.labels[t2] = xt(this, e3), this;
    }, e2.removeLabel = function removeLabel(t2) {
      return delete this.labels[t2], this;
    }, e2.addPause = function addPause(t2, e3, r2) {
      var i3 = Jt.delayedCall(0, e3 || T, r2);
      return i3.data = "isPause", this._hasPause = 1, Ka(this, i3, xt(this, t2));
    }, e2.removePause = function removePause(t2) {
      var e3 = this._first;
      for (t2 = xt(this, t2); e3; ) e3._start === t2 && "isPause" === e3.data && za(e3), e3 = e3._next;
    }, e2.killTweensOf = function killTweensOf(t2, e3, r2) {
      for (var i3 = this.getTweensOf(t2, r2), n2 = i3.length; n2--; ) Nt !== i3[n2] && i3[n2].kill(t2, e3);
      return this;
    }, e2.getTweensOf = function getTweensOf(e3, r2) {
      for (var i3, n2 = [], a2 = Mt(e3), s2 = this._first, o2 = t(r2); s2; ) s2 instanceof Jt ? la(s2._targets, a2) && (o2 ? (!Nt || s2._initted && s2._ts) && s2.globalTime(0) <= r2 && s2.globalTime(s2.totalDuration()) > r2 : !r2 || s2.isActive()) && n2.push(s2) : (i3 = s2.getTweensOf(a2, r2)).length && n2.push.apply(n2, i3), s2 = s2._next;
      return n2;
    }, e2.tweenTo = function tweenTo(t2, e3) {
      e3 = e3 || {};
      var r2, i3 = this, n2 = xt(i3, t2), a2 = e3.startAt, s2 = e3.onStart, o2 = e3.onStartParams, u2 = e3.immediateRender, h2 = Jt.to(i3, qa({ ease: e3.ease || "none", lazy: false, immediateRender: false, time: n2, overwrite: "auto", duration: e3.duration || Math.abs((n2 - (a2 && "time" in a2 ? a2.time : i3._time)) / i3.timeScale()) || X, onStart: function onStart() {
        if (i3.pause(), !r2) {
          var t3 = e3.duration || Math.abs((n2 - (a2 && "time" in a2 ? a2.time : i3._time)) / i3.timeScale());
          h2._dur !== t3 && Ra(h2, t3, 0, 1).render(h2._time, true, true), r2 = 1;
        }
        s2 && s2.apply(h2, o2 || []);
      } }, e3));
      return u2 ? h2.render(0) : h2;
    }, e2.tweenFromTo = function tweenFromTo(t2, e3, r2) {
      return this.tweenTo(e3, qa({ startAt: { time: xt(this, t2) } }, r2));
    }, e2.recent = function recent() {
      return this._recent;
    }, e2.nextLabel = function nextLabel(t2) {
      return void 0 === t2 && (t2 = this._time), rb(this, xt(this, t2));
    }, e2.previousLabel = function previousLabel(t2) {
      return void 0 === t2 && (t2 = this._time), rb(this, xt(this, t2), 1);
    }, e2.currentLabel = function currentLabel(t2) {
      return arguments.length ? this.seek(t2, true) : this.previousLabel(this._time + X);
    }, e2.shiftChildren = function shiftChildren(t2, e3, r2) {
      void 0 === r2 && (r2 = 0);
      for (var i3, n2 = this._first, a2 = this.labels; n2; ) n2._start >= r2 && (n2._start += t2, n2._end += t2), n2 = n2._next;
      if (e3) for (i3 in a2) a2[i3] >= r2 && (a2[i3] += t2);
      return Aa(this);
    }, e2.invalidate = function invalidate(t2) {
      var e3 = this._first;
      for (this._lock = 0; e3; ) e3.invalidate(t2), e3 = e3._next;
      return i2.prototype.invalidate.call(this, t2);
    }, e2.clear = function clear(t2) {
      void 0 === t2 && (t2 = true);
      for (var e3, r2 = this._first; r2; ) e3 = r2._next, this.remove(r2), r2 = e3;
      return this._dp && (this._time = this._tTime = this._pTime = 0), t2 && (this.labels = {}), Aa(this);
    }, e2.totalDuration = function totalDuration(t2) {
      var e3, r2, i3, n2 = 0, a2 = this, s2 = a2._last, o2 = U;
      if (arguments.length) return a2.timeScale((a2._repeat < 0 ? a2.duration() : a2.totalDuration()) / (a2.reversed() ? -t2 : t2));
      if (a2._dirty) {
        for (i3 = a2.parent; s2; ) e3 = s2._prev, s2._dirty && s2.totalDuration(), o2 < (r2 = s2._start) && a2._sort && s2._ts && !a2._lock ? (a2._lock = 1, Ka(a2, s2, r2 - s2._delay, 1)._lock = 0) : o2 = r2, r2 < 0 && s2._ts && (n2 -= r2, (!i3 && !a2._dp || i3 && i3.smoothChildTiming) && (a2._start += r2 / a2._ts, a2._time -= r2, a2._tTime -= r2), a2.shiftChildren(-r2, false, -Infinity), o2 = 0), s2._end > n2 && s2._ts && (n2 = s2._end), s2 = e3;
        Ra(a2, a2 === L && a2._time > n2 ? a2._time : n2, 1, 1), a2._dirty = 0;
      }
      return a2._tDur;
    }, Timeline.updateRoot = function updateRoot(t2) {
      if (L._ts && (na(L, Ga(t2, L)), f = Rt.frame), Rt.frame >= mt) {
        mt += V.autoSleep || 120;
        var e3 = L._first;
        if ((!e3 || !e3._ts) && V.autoSleep && Rt._listeners.length < 2) {
          for (; e3 && !e3._ts; ) e3 = e3._next;
          e3 || Rt.sleep();
        }
      }
    }, Timeline;
  }(Ut);
  qa(Xt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function ac(t2, e2, i2, n2, a2, o2) {
    var u2, h2, l2, f2;
    if (pt[t2] && false !== (u2 = new pt[t2]()).init(a2, u2.rawVars ? e2[t2] : function _processVars(t3, e3, i3, n3, a3) {
      if (s(t3) && (t3 = Gt(t3, a3, e3, i3, n3)), !v(t3) || t3.style && t3.nodeType || Z(t3) || J(t3)) return r(t3) ? Gt(t3, a3, e3, i3, n3) : t3;
      var o3, u3 = {};
      for (o3 in t3) u3[o3] = Gt(t3[o3], a3, e3, i3, n3);
      return u3;
    }(e2[t2], n2, a2, o2, i2), i2, n2, o2) && (i2._pt = h2 = new ge(i2._pt, a2, t2, 0, 1, u2.render, u2, 0, u2.priority), i2 !== c)) for (l2 = i2._ptLookup[i2._targets.indexOf(a2)], f2 = u2._props.length; f2--; ) l2[u2._props[f2]] = h2;
    return u2;
  }
  function gc(t2, r2, e2, i2) {
    var n2, a2, s2 = r2.ease || i2 || "power1.inOut";
    if (Z(r2)) a2 = e2[t2] || (e2[t2] = []), r2.forEach(function(t3, e3) {
      return a2.push({ t: e3 / (r2.length - 1) * 100, v: t3, e: s2 });
    });
    else for (n2 in r2) a2 = e2[n2] || (e2[n2] = []), "ease" === n2 || a2.push({ t: parseFloat(t2), v: r2[n2], e: s2 });
  }
  var Nt, Wt, Qt = function _addPropTween(t2, e2, i2, n2, a2, o2, u2, h2, l2, f2) {
    s(n2) && (n2 = n2(a2 || 0, t2, o2));
    var c2, d2 = t2[e2], p2 = "get" !== i2 ? i2 : s(d2) ? l2 ? t2[e2.indexOf("set") || !s(t2["get" + e2.substr(3)]) ? e2 : "get" + e2.substr(3)](l2) : t2[e2]() : d2, _2 = s(d2) ? l2 ? ee : te : Zt;
    if (r(n2) && (~n2.indexOf("random(") && (n2 = ob(n2)), "=" === n2.charAt(1) && (!(c2 = ka(p2, n2) + (Ya(p2) || 0)) && 0 !== c2 || (n2 = c2))), !f2 || p2 !== n2 || Wt) return isNaN(p2 * n2) || "" === n2 ? (d2 || e2 in t2 || Q(e2, n2), function _addComplexStringPropTween(t3, e3, r2, i3, n3, a3, s2) {
      var o3, u3, h3, l3, f3, c3, d3, p3, _3 = new ge(this._pt, t3, e3, 0, 1, le, null, n3), m2 = 0, g2 = 0;
      for (_3.b = r2, _3.e = i3, r2 += "", (d3 = ~(i3 += "").indexOf("random(")) && (i3 = ob(i3)), a3 && (a3(p3 = [r2, i3], t3, e3), r2 = p3[0], i3 = p3[1]), u3 = r2.match(it) || []; o3 = it.exec(i3); ) l3 = o3[0], f3 = i3.substring(m2, o3.index), h3 ? h3 = (h3 + 1) % 5 : "rgba(" === f3.substr(-5) && (h3 = 1), l3 !== u3[g2++] && (c3 = parseFloat(u3[g2 - 1]) || 0, _3._pt = { _next: _3._pt, p: f3 || 1 === g2 ? f3 : ",", s: c3, c: "=" === l3.charAt(1) ? ka(c3, l3) - c3 : parseFloat(l3) - c3, m: h3 && h3 < 4 ? Math.round : 0 }, m2 = it.lastIndex);
      return _3.c = m2 < i3.length ? i3.substring(m2, i3.length) : "", _3.fp = s2, (nt.test(i3) || d3) && (_3.e = 0), this._pt = _3;
    }.call(this, t2, e2, p2, n2, _2, h2 || V.stringFilter, l2)) : (c2 = new ge(this._pt, t2, e2, +p2 || 0, n2 - (p2 || 0), "boolean" == typeof d2 ? oe : se, 0, _2), l2 && (c2.fp = l2), u2 && c2.modifier(u2, this, t2), this._pt = c2);
  }, Kt = function _initTween(t2, e2, r2) {
    var i2, n2, a2, s2, o2, u2, h2, l2, f2, c2, d2, p2, _2, m2 = t2.vars, g2 = m2.ease, v2 = m2.startAt, y2 = m2.immediateRender, T2 = m2.lazy, b2 = m2.onUpdate, x2 = m2.onUpdateParams, O2 = m2.callbackScope, k2 = m2.runBackwards, M2 = m2.yoyoEase, A2 = m2.keyframes, S2 = m2.autoRevert, C2 = t2._dur, P2 = t2._startAt, D2 = t2._targets, E2 = t2.parent, z2 = E2 && "nested" === E2.data ? E2.vars.targets : D2, R2 = "auto" === t2._overwrite && !I, F2 = t2.timeline;
    if (!F2 || A2 && g2 || (g2 = "none"), t2._ease = jt(g2, q.ease), t2._yEase = M2 ? Yt(jt(true === M2 ? g2 : M2, q.ease)) : 0, M2 && t2._yoyo && !t2._repeat && (M2 = t2._yEase, t2._yEase = t2._ease, t2._ease = M2), t2._from = !F2 && !!m2.runBackwards, !F2 || A2 && !m2.stagger) {
      if (p2 = (l2 = D2[0] ? fa(D2[0]).harness : 0) && m2[l2.prop], i2 = ua(m2, ft), P2 && (P2._zTime < 0 && P2.progress(1), e2 < 0 && k2 && y2 && !S2 ? P2.render(-1, true) : P2.revert(k2 && C2 ? ht : ut), P2._lazy = 0), v2) {
        if (za(t2._startAt = Jt.set(D2, qa({ data: "isStart", overwrite: false, parent: E2, immediateRender: true, lazy: !P2 && w(T2), startAt: null, delay: 0, onUpdate: b2, onUpdateParams: x2, callbackScope: O2, stagger: 0 }, v2))), t2._startAt._dp = 0, t2._startAt._sat = t2, e2 < 0 && (B || !y2 && !S2) && t2._startAt.revert(ht), y2 && C2 && e2 <= 0 && r2 <= 0) return void (e2 && (t2._zTime = e2));
      } else if (k2 && C2 && !P2) if (e2 && (y2 = false), a2 = qa({ overwrite: false, data: "isFromStart", lazy: y2 && !P2 && w(T2), immediateRender: y2, stagger: 0, parent: E2 }, i2), p2 && (a2[l2.prop] = p2), za(t2._startAt = Jt.set(D2, a2)), t2._startAt._dp = 0, t2._startAt._sat = t2, e2 < 0 && (B ? t2._startAt.revert(ht) : t2._startAt.render(-1, true)), t2._zTime = e2, y2) {
        if (!e2) return;
      } else _initTween(t2._startAt, X, X);
      for (t2._pt = t2._ptCache = 0, T2 = C2 && w(T2) || T2 && !C2, n2 = 0; n2 < D2.length; n2++) {
        if (h2 = (o2 = D2[n2])._gsap || ea(D2)[n2]._gsap, t2._ptLookup[n2] = c2 = {}, dt[h2.id] && ct.length && ma(), d2 = z2 === D2 ? n2 : z2.indexOf(o2), l2 && false !== (f2 = new l2()).init(o2, p2 || i2, t2, d2, z2) && (t2._pt = s2 = new ge(t2._pt, o2, f2.name, 0, 1, f2.render, f2, 0, f2.priority), f2._props.forEach(function(t3) {
          c2[t3] = s2;
        }), f2.priority && (u2 = 1)), !l2 || p2) for (a2 in i2) pt[a2] && (f2 = ac(a2, i2, t2, d2, o2, z2)) ? f2.priority && (u2 = 1) : c2[a2] = s2 = Qt.call(t2, o2, a2, "get", i2[a2], d2, z2, 0, m2.stringFilter);
        t2._op && t2._op[n2] && t2.kill(o2, t2._op[n2]), R2 && t2._pt && (Nt = t2, L.killTweensOf(o2, c2, t2.globalTime(e2)), _2 = !t2.parent, Nt = 0), t2._pt && T2 && (dt[h2.id] = 1);
      }
      u2 && me(t2), t2._onInit && t2._onInit(t2);
    }
    t2._onUpdate = b2, t2._initted = (!t2._op || t2._pt) && !_2, A2 && e2 <= 0 && F2.render(U, true, true);
  }, Gt = function _parseFuncOrString(t2, e2, i2, n2, a2) {
    return s(t2) ? t2.call(e2, i2, n2, a2) : r(t2) && ~t2.indexOf("random(") ? ob(t2) : t2;
  }, $t = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Ht = {};
  ha($t + ",id,stagger,delay,duration,paused,scrollTrigger", function(t2) {
    return Ht[t2] = 1;
  });
  var Jt = function(z2) {
    function Tween(e3, r2, i2, n2) {
      var a2;
      "number" == typeof r2 && (i2.duration = r2, r2 = i2, i2 = null);
      var s2, o2, u2, h2, l2, f2, c2, d2, p2 = (a2 = z2.call(this, n2 ? r2 : va(r2)) || this).vars, _2 = p2.duration, m2 = p2.delay, g2 = p2.immediateRender, T2 = p2.stagger, b2 = p2.overwrite, x2 = p2.keyframes, O2 = p2.defaults, k2 = p2.scrollTrigger, M2 = p2.yoyoEase, A2 = r2.parent || L, S2 = (Z(e3) || J(e3) ? t(e3[0]) : "length" in r2) ? [e3] : Mt(e3);
      if (a2._targets = S2.length ? ea(S2) : R("GSAP target " + e3 + " not found. https://greensock.com", !V.nullTargetWarn) || [], a2._ptLookup = [], a2._overwrite = b2, x2 || T2 || y(_2) || y(m2)) {
        if (r2 = a2.vars, (s2 = a2.timeline = new Xt({ data: "nested", defaults: O2 || {}, targets: A2 && "nested" === A2.data ? A2.vars.targets : S2 })).kill(), s2.parent = s2._dp = _assertThisInitialized(a2), s2._start = 0, T2 || y(_2) || y(m2)) {
          if (h2 = S2.length, c2 = T2 && eb(T2), v(T2)) for (l2 in T2) ~$t.indexOf(l2) && ((d2 = d2 || {})[l2] = T2[l2]);
          for (o2 = 0; o2 < h2; o2++) (u2 = ua(r2, Ht)).stagger = 0, M2 && (u2.yoyoEase = M2), d2 && yt(u2, d2), f2 = S2[o2], u2.duration = +Gt(_2, _assertThisInitialized(a2), o2, f2, S2), u2.delay = (+Gt(m2, _assertThisInitialized(a2), o2, f2, S2) || 0) - a2._delay, !T2 && 1 === h2 && u2.delay && (a2._delay = m2 = u2.delay, a2._start += m2, u2.delay = 0), s2.to(f2, u2, c2 ? c2(o2, f2, S2) : 0), s2._ease = It.none;
          s2.duration() ? _2 = m2 = 0 : a2.timeline = 0;
        } else if (x2) {
          va(qa(s2.vars.defaults, { ease: "none" })), s2._ease = jt(x2.ease || r2.ease || "none");
          var C2, P2, D2, E2 = 0;
          if (Z(x2)) x2.forEach(function(t2) {
            return s2.to(S2, t2, ">");
          }), s2.duration();
          else {
            for (l2 in u2 = {}, x2) "ease" === l2 || "easeEach" === l2 || gc(l2, x2[l2], u2, x2.easeEach);
            for (l2 in u2) for (C2 = u2[l2].sort(function(t2, e4) {
              return t2.t - e4.t;
            }), o2 = E2 = 0; o2 < C2.length; o2++) (D2 = { ease: (P2 = C2[o2]).e, duration: (P2.t - (o2 ? C2[o2 - 1].t : 0)) / 100 * _2 })[l2] = P2.v, s2.to(S2, D2, E2), E2 += D2.duration;
            s2.duration() < _2 && s2.to({}, { duration: _2 - s2.duration() });
          }
        }
        _2 || a2.duration(_2 = s2.duration());
      } else a2.timeline = 0;
      return true !== b2 || I || (Nt = _assertThisInitialized(a2), L.killTweensOf(S2), Nt = 0), Ka(A2, _assertThisInitialized(a2), i2), r2.reversed && a2.reverse(), r2.paused && a2.paused(true), (g2 || !_2 && !x2 && a2._start === ja(A2._time) && w(g2) && function _hasNoPausedAncestors(t2) {
        return !t2 || t2._ts && _hasNoPausedAncestors(t2.parent);
      }(_assertThisInitialized(a2)) && "nested" !== A2.data) && (a2._tTime = -X, a2.render(Math.max(0, -m2) || 0)), k2 && La(_assertThisInitialized(a2), k2), a2;
    }
    _inheritsLoose(Tween, z2);
    var e2 = Tween.prototype;
    return e2.render = function render(t2, e3, r2) {
      var i2, n2, a2, s2, o2, u2, h2, l2, f2, c2 = this._time, d2 = this._tDur, p2 = this._dur, _2 = t2 < 0, m2 = d2 - X < t2 && !_2 ? d2 : t2 < X ? 0 : t2;
      if (p2) {
        if (m2 !== this._tTime || !t2 || r2 || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _2) {
          if (i2 = m2, l2 = this.timeline, this._repeat) {
            if (s2 = p2 + this._rDelay, this._repeat < -1 && _2) return this.totalTime(100 * s2 + t2, e3, r2);
            if (i2 = ja(m2 % s2), m2 === d2 ? (a2 = this._repeat, i2 = p2) : ((a2 = ~~(m2 / s2)) && a2 === m2 / s2 && (i2 = p2, a2--), p2 < i2 && (i2 = p2)), (u2 = this._yoyo && 1 & a2) && (f2 = this._yEase, i2 = p2 - i2), o2 = Tt(this._tTime, s2), i2 === c2 && !r2 && this._initted) return this._tTime = m2, this;
            a2 !== o2 && (l2 && this._yEase && Qb(l2, u2), !this.vars.repeatRefresh || u2 || this._lock || (this._lock = r2 = 1, this.render(ja(s2 * a2), true).invalidate()._lock = 0));
          }
          if (!this._initted) {
            if (Ma(this, _2 ? t2 : i2, r2, e3, m2)) return this._tTime = 0, this;
            if (c2 !== this._time) return this;
            if (p2 !== this._dur) return this.render(t2, e3, r2);
          }
          if (this._tTime = m2, this._time = i2, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h2 = (f2 || this._ease)(i2 / p2), this._from && (this.ratio = h2 = 1 - h2), i2 && !c2 && !e3 && !a2 && (St(this, "onStart"), this._tTime !== m2)) return this;
          for (n2 = this._pt; n2; ) n2.r(h2, n2.d), n2 = n2._next;
          l2 && l2.render(t2 < 0 ? t2 : !i2 && u2 ? -X : l2._dur * l2._ease(i2 / this._dur), e3, r2) || this._startAt && (this._zTime = t2), this._onUpdate && !e3 && (_2 && Ca(this, t2, 0, r2), St(this, "onUpdate")), this._repeat && a2 !== o2 && this.vars.onRepeat && !e3 && this.parent && St(this, "onRepeat"), m2 !== this._tDur && m2 || this._tTime !== m2 || (_2 && !this._onUpdate && Ca(this, t2, 0, true), !t2 && p2 || !(m2 === this._tDur && 0 < this._ts || !m2 && this._ts < 0) || za(this, 1), e3 || _2 && !c2 || !(m2 || c2 || u2) || (St(this, m2 === d2 ? "onComplete" : "onReverseComplete", true), !this._prom || m2 < d2 && 0 < this.timeScale() || this._prom()));
        }
      } else !function _renderZeroDurationTween(t3, e4, r3, i3) {
        var n3, a3, s3, o3 = t3.ratio, u3 = e4 < 0 || !e4 && (!t3._start && function _parentPlayheadIsBeforeStart(t4) {
          var e5 = t4.parent;
          return e5 && e5._ts && e5._initted && !e5._lock && (e5.rawTime() < 0 || _parentPlayheadIsBeforeStart(e5));
        }(t3) && (t3._initted || !bt(t3)) || (t3._ts < 0 || t3._dp._ts < 0) && !bt(t3)) ? 0 : 1, h3 = t3._rDelay, l3 = 0;
        if (h3 && t3._repeat && (l3 = Ot(0, t3._tDur, e4), a3 = Tt(l3, h3), t3._yoyo && 1 & a3 && (u3 = 1 - u3), a3 !== Tt(t3._tTime, h3) && (o3 = 1 - u3, t3.vars.repeatRefresh && t3._initted && t3.invalidate())), u3 !== o3 || B || i3 || t3._zTime === X || !e4 && t3._zTime) {
          if (!t3._initted && Ma(t3, e4, i3, r3, l3)) return;
          for (s3 = t3._zTime, t3._zTime = e4 || (r3 ? X : 0), r3 = r3 || e4 && !s3, t3.ratio = u3, t3._from && (u3 = 1 - u3), t3._time = 0, t3._tTime = l3, n3 = t3._pt; n3; ) n3.r(u3, n3.d), n3 = n3._next;
          e4 < 0 && Ca(t3, e4, 0, true), t3._onUpdate && !r3 && St(t3, "onUpdate"), l3 && t3._repeat && !r3 && t3.parent && St(t3, "onRepeat"), (e4 >= t3._tDur || e4 < 0) && t3.ratio === u3 && (u3 && za(t3, 1), r3 || B || (St(t3, u3 ? "onComplete" : "onReverseComplete", true), t3._prom && t3._prom()));
        } else t3._zTime || (t3._zTime = e4);
      }(this, t2, e3, r2);
      return this;
    }, e2.targets = function targets() {
      return this._targets;
    }, e2.invalidate = function invalidate(t2) {
      return t2 && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t2), z2.prototype.invalidate.call(this, t2);
    }, e2.resetTo = function resetTo(t2, e3, r2, i2) {
      d || Rt.wake(), this._ts || this.play();
      var n2, a2 = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || Kt(this, a2), n2 = this._ease(a2 / this._dur), function _updatePropTweens(t3, e4, r3, i3, n3, a3, s2) {
        var o2, u2, h2, l2, f2 = (t3._pt && t3._ptCache || (t3._ptCache = {}))[e4];
        if (!f2) for (f2 = t3._ptCache[e4] = [], h2 = t3._ptLookup, l2 = t3._targets.length; l2--; ) {
          if ((o2 = h2[l2][e4]) && o2.d && o2.d._pt) for (o2 = o2.d._pt; o2 && o2.p !== e4 && o2.fp !== e4; ) o2 = o2._next;
          if (!o2) return Wt = 1, t3.vars[e4] = "+=0", Kt(t3, s2), Wt = 0, 1;
          f2.push(o2);
        }
        for (l2 = f2.length; l2--; ) (o2 = (u2 = f2[l2])._pt || u2).s = !i3 && 0 !== i3 || n3 ? o2.s + (i3 || 0) + a3 * o2.c : i3, o2.c = r3 - o2.s, u2.e && (u2.e = ia(r3) + Ya(u2.e)), u2.b && (u2.b = o2.s + Ya(u2.b));
      }(this, t2, e3, r2, i2, n2, a2) ? this.resetTo(t2, e3, r2, i2) : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, e2.kill = function kill(t2, e3) {
      if (void 0 === e3 && (e3 = "all"), !(t2 || e3 && "all" !== e3)) return this._lazy = this._pt = 0, this.parent ? tb(this) : this;
      if (this.timeline) {
        var i2 = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t2, e3, Nt && true !== Nt.vars.overwrite)._first || tb(this), this.parent && i2 !== this.timeline.totalDuration() && Ra(this, this._dur * this.timeline._tDur / i2, 0, 1), this;
      }
      var n2, a2, s2, o2, u2, h2, l2, f2 = this._targets, c2 = t2 ? Mt(t2) : f2, d2 = this._ptLookup, p2 = this._pt;
      if ((!e3 || "all" === e3) && function _arraysMatch(t3, e4) {
        for (var r2 = t3.length, i3 = r2 === e4.length; i3 && r2-- && t3[r2] === e4[r2]; ) ;
        return r2 < 0;
      }(f2, c2)) return "all" === e3 && (this._pt = 0), tb(this);
      for (n2 = this._op = this._op || [], "all" !== e3 && (r(e3) && (u2 = {}, ha(e3, function(t3) {
        return u2[t3] = 1;
      }), e3 = u2), e3 = function _addAliasesToVars(t3, e4) {
        var r2, i3, n3, a3, s3 = t3[0] ? fa(t3[0]).harness : 0, o3 = s3 && s3.aliases;
        if (!o3) return e4;
        for (i3 in r2 = yt({}, e4), o3) if (i3 in r2) for (n3 = (a3 = o3[i3].split(",")).length; n3--; ) r2[a3[n3]] = r2[i3];
        return r2;
      }(f2, e3)), l2 = f2.length; l2--; ) if (~c2.indexOf(f2[l2])) for (u2 in a2 = d2[l2], "all" === e3 ? (n2[l2] = e3, o2 = a2, s2 = {}) : (s2 = n2[l2] = n2[l2] || {}, o2 = e3), o2) (h2 = a2 && a2[u2]) && ("kill" in h2.d && true !== h2.d.kill(u2) || ya(this, h2, "_pt"), delete a2[u2]), "all" !== s2 && (s2[u2] = 1);
      return this._initted && !this._pt && p2 && tb(this), this;
    }, Tween.to = function to(t2, e3, r2) {
      return new Tween(t2, e3, r2);
    }, Tween.from = function from(t2, e3) {
      return Va(1, arguments);
    }, Tween.delayedCall = function delayedCall(t2, e3, r2, i2) {
      return new Tween(e3, 0, { immediateRender: false, lazy: false, overwrite: false, delay: t2, onComplete: e3, onReverseComplete: e3, onCompleteParams: r2, onReverseCompleteParams: r2, callbackScope: i2 });
    }, Tween.fromTo = function fromTo(t2, e3, r2) {
      return Va(2, arguments);
    }, Tween.set = function set(t2, e3) {
      return e3.duration = 0, e3.repeatDelay || (e3.repeat = 0), new Tween(t2, e3);
    }, Tween.killTweensOf = function killTweensOf(t2, e3, r2) {
      return L.killTweensOf(t2, e3, r2);
    }, Tween;
  }(Ut);
  qa(Jt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), ha("staggerTo,staggerFrom,staggerFromTo", function(r2) {
    Jt[r2] = function() {
      var t2 = new Xt(), e2 = kt.call(arguments, 0);
      return e2.splice("staggerFromTo" === r2 ? 5 : 4, 0, 0), t2[r2].apply(t2, e2);
    };
  });
  function oc(t2, e2, r2) {
    return t2.setAttribute(e2, r2);
  }
  function wc(t2, e2, r2, i2) {
    i2.mSet(t2, e2, i2.m.call(i2.tween, r2, i2.mt), i2);
  }
  var Zt = function _setterPlain(t2, e2, r2) {
    return t2[e2] = r2;
  }, te = function _setterFunc(t2, e2, r2) {
    return t2[e2](r2);
  }, ee = function _setterFuncWithParam(t2, e2, r2, i2) {
    return t2[e2](i2.fp, r2);
  }, re = function _getSetter(t2, e2) {
    return s(t2[e2]) ? te : u(t2[e2]) && t2.setAttribute ? oc : Zt;
  }, se = function _renderPlain(t2, e2) {
    return e2.set(e2.t, e2.p, Math.round(1e6 * (e2.s + e2.c * t2)) / 1e6, e2);
  }, oe = function _renderBoolean(t2, e2) {
    return e2.set(e2.t, e2.p, !!(e2.s + e2.c * t2), e2);
  }, le = function _renderComplexString(t2, e2) {
    var r2 = e2._pt, i2 = "";
    if (!t2 && e2.b) i2 = e2.b;
    else if (1 === t2 && e2.e) i2 = e2.e;
    else {
      for (; r2; ) i2 = r2.p + (r2.m ? r2.m(r2.s + r2.c * t2) : Math.round(1e4 * (r2.s + r2.c * t2)) / 1e4) + i2, r2 = r2._next;
      i2 += e2.c;
    }
    e2.set(e2.t, e2.p, i2, e2);
  }, fe = function _renderPropTweens(t2, e2) {
    for (var r2 = e2._pt; r2; ) r2.r(t2, r2.d), r2 = r2._next;
  }, pe = function _addPluginModifier(t2, e2, r2, i2) {
    for (var n2, a2 = this._pt; a2; ) n2 = a2._next, a2.p === i2 && a2.modifier(t2, e2, r2), a2 = n2;
  }, _e = function _killPropTweensOf(t2) {
    for (var e2, r2, i2 = this._pt; i2; ) r2 = i2._next, i2.p === t2 && !i2.op || i2.op === t2 ? ya(this, i2, "_pt") : i2.dep || (e2 = 1), i2 = r2;
    return !e2;
  }, me = function _sortPropTweensByPriority(t2) {
    for (var e2, r2, i2, n2, a2 = t2._pt; a2; ) {
      for (e2 = a2._next, r2 = i2; r2 && r2.pr > a2.pr; ) r2 = r2._next;
      (a2._prev = r2 ? r2._prev : n2) ? a2._prev._next = a2 : i2 = a2, (a2._next = r2) ? r2._prev = a2 : n2 = a2, a2 = e2;
    }
    t2._pt = i2;
  }, ge = (PropTween.prototype.modifier = function modifier(t2, e2, r2) {
    this.mSet = this.mSet || this.set, this.set = wc, this.m = t2, this.mt = r2, this.tween = e2;
  }, PropTween);
  function PropTween(t2, e2, r2, i2, n2, a2, s2, o2, u2) {
    this.t = e2, this.s = i2, this.c = n2, this.p = r2, this.r = a2 || se, this.d = s2 || this, this.set = o2 || Zt, this.pr = u2 || 0, (this._next = t2) && (t2._prev = this);
  }
  ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t2) {
    return ft[t2] = 1;
  }), ot.TweenMax = ot.TweenLite = Jt, ot.TimelineLite = ot.TimelineMax = Xt, L = new Xt({ sortChildren: false, defaults: q, autoRemoveChildren: true, id: "root", smoothChildTiming: true }), V.stringFilter = Fb;
  function Dc(t2) {
    return (be[t2] || xe).map(function(t3) {
      return t3();
    });
  }
  function Ec() {
    var t2 = Date.now(), o2 = [];
    2 < t2 - Oe && (Dc("matchMediaInit"), Te.forEach(function(t3) {
      var e2, r2, i2, n2, a2 = t3.queries, s2 = t3.conditions;
      for (r2 in a2) (e2 = h.matchMedia(a2[r2]).matches) && (i2 = 1), e2 !== s2[r2] && (s2[r2] = e2, n2 = 1);
      n2 && (t3.revert(), i2 && o2.push(t3));
    }), Dc("matchMediaRevert"), o2.forEach(function(t3) {
      return t3.onMatch(t3);
    }), Oe = t2, Dc("matchMedia"));
  }
  var ye, Te = [], be = {}, xe = [], Oe = 0, Me = ((ye = Context.prototype).add = function add(t2, i2, n2) {
    function Dw() {
      var t3, e2 = l, r2 = a2.selector;
      return e2 && e2 !== a2 && e2.data.push(a2), n2 && (a2.selector = cb(n2)), l = a2, t3 = i2.apply(a2, arguments), s(t3) && a2._r.push(t3), l = e2, a2.selector = r2, a2.isReverted = false, t3;
    }
    s(t2) && (n2 = i2, i2 = t2, t2 = s);
    var a2 = this;
    return a2.last = Dw, t2 === s ? Dw(a2) : t2 ? a2[t2] = Dw : Dw;
  }, ye.ignore = function ignore(t2) {
    var e2 = l;
    l = null, t2(this), l = e2;
  }, ye.getTweens = function getTweens() {
    var e2 = [];
    return this.data.forEach(function(t2) {
      return t2 instanceof Context ? e2.push.apply(e2, t2.getTweens()) : t2 instanceof Jt && !(t2.parent && "nested" === t2.parent.data) && e2.push(t2);
    }), e2;
  }, ye.clear = function clear() {
    this._r.length = this.data.length = 0;
  }, ye.kill = function kill(e2, t2) {
    var r2 = this;
    if (e2) {
      var i2 = this.getTweens();
      this.data.forEach(function(t3) {
        "isFlip" === t3.data && (t3.revert(), t3.getChildren(true, true, false).forEach(function(t4) {
          return i2.splice(i2.indexOf(t4), 1);
        }));
      }), i2.map(function(t3) {
        return { g: t3.globalTime(0), t: t3 };
      }).sort(function(t3, e3) {
        return e3.g - t3.g || -1;
      }).forEach(function(t3) {
        return t3.t.revert(e2);
      }), this.data.forEach(function(t3) {
        return !(t3 instanceof Ut) && t3.revert && t3.revert(e2);
      }), this._r.forEach(function(t3) {
        return t3(e2, r2);
      }), this.isReverted = true;
    } else this.data.forEach(function(t3) {
      return t3.kill && t3.kill();
    });
    if (this.clear(), t2) {
      var n2 = Te.indexOf(this);
      ~n2 && Te.splice(n2, 1);
    }
  }, ye.revert = function revert(t2) {
    this.kill(t2 || {});
  }, Context);
  function Context(t2, e2) {
    this.selector = e2 && cb(e2), this.data = [], this._r = [], this.isReverted = false, t2 && this.add(t2);
  }
  var Ae, Se = ((Ae = MatchMedia.prototype).add = function add(t2, e2, r2) {
    v(t2) || (t2 = { matches: t2 });
    var i2, n2, a2, s2 = new Me(0, r2 || this.scope), o2 = s2.conditions = {};
    for (n2 in this.contexts.push(s2), e2 = s2.add("onMatch", e2), s2.queries = t2) "all" === n2 ? a2 = 1 : (i2 = h.matchMedia(t2[n2])) && (Te.indexOf(s2) < 0 && Te.push(s2), (o2[n2] = i2.matches) && (a2 = 1), i2.addListener ? i2.addListener(Ec) : i2.addEventListener("change", Ec));
    return a2 && e2(s2), this;
  }, Ae.revert = function revert(t2) {
    this.kill(t2 || {});
  }, Ae.kill = function kill(e2) {
    this.contexts.forEach(function(t2) {
      return t2.kill(e2, true);
    });
  }, MatchMedia);
  function MatchMedia(t2) {
    this.contexts = [], this.scope = t2;
  }
  var Ce = { registerPlugin: function registerPlugin() {
    for (var t2 = arguments.length, e2 = new Array(t2), r2 = 0; r2 < t2; r2++) e2[r2] = arguments[r2];
    e2.forEach(function(t3) {
      return wb(t3);
    });
  }, timeline: function timeline(t2) {
    return new Xt(t2);
  }, getTweensOf: function getTweensOf(t2, e2) {
    return L.getTweensOf(t2, e2);
  }, getProperty: function getProperty(i2, t2, e2, n2) {
    r(i2) && (i2 = Mt(i2)[0]);
    var a2 = fa(i2 || {}).get, s2 = e2 ? pa : oa;
    return "native" === e2 && (e2 = ""), i2 ? t2 ? s2((pt[t2] && pt[t2].get || a2)(i2, t2, e2, n2)) : function(t3, e3, r2) {
      return s2((pt[t3] && pt[t3].get || a2)(i2, t3, e3, r2));
    } : i2;
  }, quickSetter: function quickSetter(r2, e2, i2) {
    if (1 < (r2 = Mt(r2)).length) {
      var n2 = r2.map(function(t2) {
        return Pe.quickSetter(t2, e2, i2);
      }), a2 = n2.length;
      return function(t2) {
        for (var e3 = a2; e3--; ) n2[e3](t2);
      };
    }
    r2 = r2[0] || {};
    var s2 = pt[e2], o2 = fa(r2), u2 = o2.harness && (o2.harness.aliases || {})[e2] || e2, h2 = s2 ? function(t2) {
      var e3 = new s2();
      c._pt = 0, e3.init(r2, i2 ? t2 + i2 : t2, c, 0, [r2]), e3.render(1, e3), c._pt && fe(1, c);
    } : o2.set(r2, u2);
    return s2 ? h2 : function(t2) {
      return h2(r2, u2, i2 ? t2 + i2 : t2, o2, 1);
    };
  }, quickTo: function quickTo(t2, i2, e2) {
    function Vx(t3, e3, r3) {
      return n2.resetTo(i2, t3, e3, r3);
    }
    var r2, n2 = Pe.to(t2, yt(((r2 = {})[i2] = "+=0.1", r2.paused = true, r2), e2 || {}));
    return Vx.tween = n2, Vx;
  }, isTweening: function isTweening(t2) {
    return 0 < L.getTweensOf(t2, true).length;
  }, defaults: function defaults(t2) {
    return t2 && t2.ease && (t2.ease = jt(t2.ease, q.ease)), ta(q, t2 || {});
  }, config: function config(t2) {
    return ta(V, t2 || {});
  }, registerEffect: function registerEffect(t2) {
    var i2 = t2.name, n2 = t2.effect, e2 = t2.plugins, a2 = t2.defaults, r2 = t2.extendTimeline;
    (e2 || "").split(",").forEach(function(t3) {
      return t3 && !pt[t3] && !ot[t3] && R(i2 + " effect requires " + t3 + " plugin.");
    }), _t[i2] = function(t3, e3, r3) {
      return n2(Mt(t3), qa(e3 || {}, a2), r3);
    }, r2 && (Xt.prototype[i2] = function(t3, e3, r3) {
      return this.add(_t[i2](t3, v(e3) ? e3 : (r3 = e3) && {}, this), r3);
    });
  }, registerEase: function registerEase(t2, e2) {
    It[t2] = jt(e2);
  }, parseEase: function parseEase(t2, e2) {
    return arguments.length ? jt(t2, e2) : It;
  }, getById: function getById(t2) {
    return L.getById(t2);
  }, exportRoot: function exportRoot(t2, e2) {
    void 0 === t2 && (t2 = {});
    var r2, i2, n2 = new Xt(t2);
    for (n2.smoothChildTiming = w(t2.smoothChildTiming), L.remove(n2), n2._dp = 0, n2._time = n2._tTime = L._time, r2 = L._first; r2; ) i2 = r2._next, !e2 && !r2._dur && r2 instanceof Jt && r2.vars.onComplete === r2._targets[0] || Ka(n2, r2, r2._start - r2._delay), r2 = i2;
    return Ka(L, n2, 0), n2;
  }, context: function context(t2, e2) {
    return t2 ? new Me(t2, e2) : l;
  }, matchMedia: function matchMedia(t2) {
    return new Se(t2);
  }, matchMediaRefresh: function matchMediaRefresh() {
    return Te.forEach(function(t2) {
      var e2, r2, i2 = t2.conditions;
      for (r2 in i2) i2[r2] && (i2[r2] = false, e2 = 1);
      e2 && t2.revert();
    }) || Ec();
  }, addEventListener: function addEventListener(t2, e2) {
    var r2 = be[t2] || (be[t2] = []);
    ~r2.indexOf(e2) || r2.push(e2);
  }, removeEventListener: function removeEventListener(t2, e2) {
    var r2 = be[t2], i2 = r2 && r2.indexOf(e2);
    0 <= i2 && r2.splice(i2, 1);
  }, utils: { wrap: function wrap(e2, t2, r2) {
    var i2 = t2 - e2;
    return Z(e2) ? lb(e2, wrap(0, e2.length), t2) : Wa(r2, function(t3) {
      return (i2 + (t3 - e2) % i2) % i2 + e2;
    });
  }, wrapYoyo: function wrapYoyo(e2, t2, r2) {
    var i2 = t2 - e2, n2 = 2 * i2;
    return Z(e2) ? lb(e2, wrapYoyo(0, e2.length - 1), t2) : Wa(r2, function(t3) {
      return e2 + (i2 < (t3 = (n2 + (t3 - e2) % n2) % n2 || 0) ? n2 - t3 : t3);
    });
  }, distribute: eb, random: hb, snap: gb, normalize: function normalize(t2, e2, r2) {
    return At(t2, e2, 0, 1, r2);
  }, getUnit: Ya, clamp: function clamp(e2, r2, t2) {
    return Wa(t2, function(t3) {
      return Ot(e2, r2, t3);
    });
  }, splitColor: Ab, toArray: Mt, selector: cb, mapRange: At, pipe: function pipe() {
    for (var t2 = arguments.length, e2 = new Array(t2), r2 = 0; r2 < t2; r2++) e2[r2] = arguments[r2];
    return function(t3) {
      return e2.reduce(function(t4, e3) {
        return e3(t4);
      }, t3);
    };
  }, unitize: function unitize(e2, r2) {
    return function(t2) {
      return e2(parseFloat(t2)) + (r2 || Ya(t2));
    };
  }, interpolate: function interpolate(e2, i2, t2, n2) {
    var a2 = isNaN(e2 + i2) ? 0 : function(t3) {
      return (1 - t3) * e2 + t3 * i2;
    };
    if (!a2) {
      var s2, o2, u2, h2, l2, f2 = r(e2), c2 = {};
      if (true === t2 && (n2 = 1) && (t2 = null), f2) e2 = { p: e2 }, i2 = { p: i2 };
      else if (Z(e2) && !Z(i2)) {
        for (u2 = [], h2 = e2.length, l2 = h2 - 2, o2 = 1; o2 < h2; o2++) u2.push(interpolate(e2[o2 - 1], e2[o2]));
        h2--, a2 = function func(t3) {
          t3 *= h2;
          var e3 = Math.min(l2, ~~t3);
          return u2[e3](t3 - e3);
        }, t2 = i2;
      } else n2 || (e2 = yt(Z(e2) ? [] : {}, e2));
      if (!u2) {
        for (s2 in i2) Qt.call(c2, e2, s2, "get", i2[s2]);
        a2 = function func(t3) {
          return fe(t3, c2) || (f2 ? e2.p : e2);
        };
      }
    }
    return Wa(t2, a2);
  }, shuffle: db }, install: P, effects: _t, ticker: Rt, updateRoot: Xt.updateRoot, plugins: pt, globalTimeline: L, core: { PropTween: ge, globals: S, Tween: Jt, Timeline: Xt, Animation: Ut, getCache: fa, _removeLinkedListItem: ya, reverting: function reverting() {
    return B;
  }, context: function context(t2) {
    return t2 && l && (l.data.push(t2), t2._ctx = l), l;
  }, suppressOverwrites: function suppressOverwrites(t2) {
    return I = t2;
  } } };
  ha("to,from,fromTo,delayedCall,set,killTweensOf", function(t2) {
    return Ce[t2] = Jt[t2];
  }), Rt.add(Xt.updateRoot), c = Ce.to({}, { duration: 0 });
  function Ic(t2, e2) {
    for (var r2 = t2._pt; r2 && r2.p !== e2 && r2.op !== e2 && r2.fp !== e2; ) r2 = r2._next;
    return r2;
  }
  function Kc(t2, a2) {
    return { name: t2, rawVars: 1, init: function init(t3, n2, e2) {
      e2._onInit = function(t4) {
        var e3, i2;
        if (r(n2) && (e3 = {}, ha(n2, function(t5) {
          return e3[t5] = 1;
        }), n2 = e3), a2) {
          for (i2 in e3 = {}, n2) e3[i2] = a2(n2[i2]);
          n2 = e3;
        }
        !function _addModifiers(t5, e4) {
          var r2, i3, n3, a3 = t5._targets;
          for (r2 in e4) for (i3 = a3.length; i3--; ) (n3 = (n3 = t5._ptLookup[i3][r2]) && n3.d) && (n3._pt && (n3 = Ic(n3, r2)), n3 && n3.modifier && n3.modifier(e4[r2], t5, a3[i3], r2));
        }(t4, n2);
      };
    } };
  }
  var Pe = Ce.registerPlugin({ name: "attr", init: function init(t2, e2, r2, i2, n2) {
    var a2, s2, o2;
    for (a2 in this.tween = r2, e2) o2 = t2.getAttribute(a2) || "", (s2 = this.add(t2, "setAttribute", (o2 || 0) + "", e2[a2], i2, n2, 0, 0, a2)).op = a2, s2.b = o2, this._props.push(a2);
  }, render: function render(t2, e2) {
    for (var r2 = e2._pt; r2; ) B ? r2.set(r2.t, r2.p, r2.b, r2) : r2.r(t2, r2.d), r2 = r2._next;
  } }, { name: "endArray", init: function init(t2, e2) {
    for (var r2 = e2.length; r2--; ) this.add(t2, r2, t2[r2] || 0, e2[r2], 0, 0, 0, 0, 0, 1);
  } }, Kc("roundProps", fb), Kc("modifiers"), Kc("snap", gb)) || Ce;
  Jt.version = Xt.version = Pe.version = "3.11.5", o = 1, x() && Ft();
  function ud(t2, e2) {
    return e2.set(e2.t, e2.p, Math.round(1e4 * (e2.s + e2.c * t2)) / 1e4 + e2.u, e2);
  }
  function vd(t2, e2) {
    return e2.set(e2.t, e2.p, 1 === t2 ? e2.e : Math.round(1e4 * (e2.s + e2.c * t2)) / 1e4 + e2.u, e2);
  }
  function wd(t2, e2) {
    return e2.set(e2.t, e2.p, t2 ? Math.round(1e4 * (e2.s + e2.c * t2)) / 1e4 + e2.u : e2.b, e2);
  }
  function xd(t2, e2) {
    var r2 = e2.s + e2.c * t2;
    e2.set(e2.t, e2.p, ~~(r2 + (r2 < 0 ? -0.5 : 0.5)) + e2.u, e2);
  }
  function yd(t2, e2) {
    return e2.set(e2.t, e2.p, t2 ? e2.e : e2.b, e2);
  }
  function zd(t2, e2) {
    return e2.set(e2.t, e2.p, 1 !== t2 ? e2.b : e2.e, e2);
  }
  function Ad(t2, e2, r2) {
    return t2.style[e2] = r2;
  }
  function Bd(t2, e2, r2) {
    return t2.style.setProperty(e2, r2);
  }
  function Cd(t2, e2, r2) {
    return t2._gsap[e2] = r2;
  }
  function Dd(t2, e2, r2) {
    return t2._gsap.scaleX = t2._gsap.scaleY = r2;
  }
  function Ed(t2, e2, r2, i2, n2) {
    var a2 = t2._gsap;
    a2.scaleX = a2.scaleY = r2, a2.renderTransform(n2, a2);
  }
  function Fd(t2, e2, r2, i2, n2) {
    var a2 = t2._gsap;
    a2[e2] = r2, a2.renderTransform(n2, a2);
  }
  function Id(t2, e2) {
    var r2 = this, i2 = this.target, n2 = i2.style;
    if (t2 in nr) {
      if (this.tfm = this.tfm || {}, "transform" === t2) return fr.transform.split(",").forEach(function(t3) {
        return Id.call(r2, t3, e2);
      });
      if (~(t2 = fr[t2] || t2).indexOf(",") ? t2.split(",").forEach(function(t3) {
        return r2.tfm[t3] = vr(i2, t3);
      }) : this.tfm[t2] = i2._gsap.x ? i2._gsap[t2] : vr(i2, t2), 0 <= this.props.indexOf(cr)) return;
      i2._gsap.svg && (this.svgo = i2.getAttribute("data-svg-origin"), this.props.push(dr, e2, "")), t2 = cr;
    }
    (n2 || e2) && this.props.push(t2, e2, n2[t2]);
  }
  function Jd(t2) {
    t2.translate && (t2.removeProperty("translate"), t2.removeProperty("scale"), t2.removeProperty("rotate"));
  }
  function Kd() {
    var t2, e2, r2 = this.props, i2 = this.target, n2 = i2.style, a2 = i2._gsap;
    for (t2 = 0; t2 < r2.length; t2 += 3) r2[t2 + 1] ? i2[r2[t2]] = r2[t2 + 2] : r2[t2 + 2] ? n2[r2[t2]] = r2[t2 + 2] : n2.removeProperty("--" === r2[t2].substr(0, 2) ? r2[t2] : r2[t2].replace(ur, "-$1").toLowerCase());
    if (this.tfm) {
      for (e2 in this.tfm) a2[e2] = this.tfm[e2];
      a2.svg && (a2.renderTransform(), i2.setAttribute("data-svg-origin", this.svgo || "")), (t2 = Be()) && t2.isStart || n2[cr] || (Jd(n2), a2.uncache = 1);
    }
  }
  function Ld(t2, e2) {
    var r2 = { target: t2, props: [], revert: Kd, save: Id };
    return t2._gsap || Pe.core.getCache(t2), e2 && e2.split(",").forEach(function(t3) {
      return r2.save(t3);
    }), r2;
  }
  function Nd(t2, e2) {
    var r2 = Ee.createElementNS ? Ee.createElementNS((e2 || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t2) : Ee.createElement(t2);
    return r2.style ? r2 : Ee.createElement(t2);
  }
  function Od(t2, e2, r2) {
    var i2 = getComputedStyle(t2);
    return i2[e2] || i2.getPropertyValue(e2.replace(ur, "-$1").toLowerCase()) || i2.getPropertyValue(e2) || !r2 && Od(t2, _r(e2) || e2, 1) || "";
  }
  function Rd() {
    /* @__PURE__ */ (function _windowExists() {
      return "undefined" != typeof window;
    })() && window.document && (De = window, Ee = De.document, ze = Ee.documentElement, Fe = Nd("div") || { style: {} }, Nd("div"), cr = _r(cr), dr = cr + "Origin", Fe.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Le = !!_r("perspective"), Be = Pe.core.reverting, Re = 1);
  }
  function Sd(t2) {
    var e2, r2 = Nd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i2 = this.parentNode, n2 = this.nextSibling, a2 = this.style.cssText;
    if (ze.appendChild(r2), r2.appendChild(this), this.style.display = "block", t2) try {
      e2 = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Sd;
    } catch (t3) {
    }
    else this._gsapBBox && (e2 = this._gsapBBox());
    return i2 && (n2 ? i2.insertBefore(this, n2) : i2.appendChild(this)), ze.removeChild(r2), this.style.cssText = a2, e2;
  }
  function Td(t2, e2) {
    for (var r2 = e2.length; r2--; ) if (t2.hasAttribute(e2[r2])) return t2.getAttribute(e2[r2]);
  }
  function Ud(e2) {
    var r2;
    try {
      r2 = e2.getBBox();
    } catch (t2) {
      r2 = Sd.call(e2, true);
    }
    return r2 && (r2.width || r2.height) || e2.getBBox === Sd || (r2 = Sd.call(e2, true)), !r2 || r2.width || r2.x || r2.y ? r2 : { x: +Td(e2, ["x", "cx", "x1"]) || 0, y: +Td(e2, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
  }
  function Vd(t2) {
    return !(!t2.getCTM || t2.parentNode && !t2.ownerSVGElement || !Ud(t2));
  }
  function Wd(t2, e2) {
    if (e2) {
      var r2 = t2.style;
      e2 in nr && e2 !== dr && (e2 = cr), r2.removeProperty ? ("ms" !== e2.substr(0, 2) && "webkit" !== e2.substr(0, 6) || (e2 = "-" + e2), r2.removeProperty(e2.replace(ur, "-$1").toLowerCase())) : r2.removeAttribute(e2);
    }
  }
  function Xd(t2, e2, r2, i2, n2, a2) {
    var s2 = new ge(t2._pt, e2, r2, 0, 1, a2 ? zd : yd);
    return (t2._pt = s2).b = i2, s2.e = n2, t2._props.push(r2), s2;
  }
  function $d(t2, e2, r2, i2) {
    var n2, a2, s2, o2, u2 = parseFloat(r2) || 0, h2 = (r2 + "").trim().substr((u2 + "").length) || "px", l2 = Fe.style, f2 = hr.test(e2), c2 = "svg" === t2.tagName.toLowerCase(), d2 = (c2 ? "client" : "offset") + (f2 ? "Width" : "Height"), p2 = "px" === i2, _2 = "%" === i2;
    return i2 === h2 || !u2 || mr[i2] || mr[h2] ? u2 : ("px" === h2 || p2 || (u2 = $d(t2, e2, r2, "px")), o2 = t2.getCTM && Vd(t2), !_2 && "%" !== h2 || !nr[e2] && !~e2.indexOf("adius") ? (l2[f2 ? "width" : "height"] = 100 + (p2 ? h2 : i2), a2 = ~e2.indexOf("adius") || "em" === i2 && t2.appendChild && !c2 ? t2 : t2.parentNode, o2 && (a2 = (t2.ownerSVGElement || {}).parentNode), a2 && a2 !== Ee && a2.appendChild || (a2 = Ee.body), (s2 = a2._gsap) && _2 && s2.width && f2 && s2.time === Rt.time && !s2.uncache ? ia(u2 / s2.width * 100) : (!_2 && "%" !== h2 || gr[Od(a2, "display")] || (l2.position = Od(t2, "position")), a2 === t2 && (l2.position = "static"), a2.appendChild(Fe), n2 = Fe[d2], a2.removeChild(Fe), l2.position = "absolute", f2 && _2 && ((s2 = fa(a2)).time = Rt.time, s2.width = a2[d2]), ia(p2 ? n2 * u2 / 100 : n2 && u2 ? 100 / n2 * u2 : 0))) : (n2 = o2 ? t2.getBBox()[f2 ? "width" : "height"] : t2[d2], ia(_2 ? u2 / n2 * 100 : u2 / 100 * n2)));
  }
  function ae(t2, e2, r2, i2) {
    if (!r2 || "none" === r2) {
      var n2 = _r(e2, t2, 1), a2 = n2 && Od(t2, n2, 1);
      a2 && a2 !== r2 ? (e2 = n2, r2 = a2) : "borderColor" === e2 && (r2 = Od(t2, "borderTopColor"));
    }
    var s2, o2, u2, h2, l2, f2, c2, d2, p2, _2, m2, g2 = new ge(this._pt, t2.style, e2, 0, 1, le), v2 = 0, y2 = 0;
    if (g2.b = r2, g2.e = i2, r2 += "", "auto" === (i2 += "") && (t2.style[e2] = i2, i2 = Od(t2, e2) || i2, t2.style[e2] = r2), Fb(s2 = [r2, i2]), i2 = s2[1], u2 = (r2 = s2[0]).match(rt) || [], (i2.match(rt) || []).length) {
      for (; o2 = rt.exec(i2); ) c2 = o2[0], p2 = i2.substring(v2, o2.index), l2 ? l2 = (l2 + 1) % 5 : "rgba(" !== p2.substr(-5) && "hsla(" !== p2.substr(-5) || (l2 = 1), c2 !== (f2 = u2[y2++] || "") && (h2 = parseFloat(f2) || 0, m2 = f2.substr((h2 + "").length), "=" === c2.charAt(1) && (c2 = ka(h2, c2) + m2), d2 = parseFloat(c2), _2 = c2.substr((d2 + "").length), v2 = rt.lastIndex - _2.length, _2 || (_2 = _2 || V.units[e2] || m2, v2 === i2.length && (i2 += _2, g2.e += _2)), m2 !== _2 && (h2 = $d(t2, e2, f2, _2) || 0), g2._pt = { _next: g2._pt, p: p2 || 1 === y2 ? p2 : ",", s: h2, c: d2 - h2, m: l2 && l2 < 4 || "zIndex" === e2 ? Math.round : 0 });
      g2.c = v2 < i2.length ? i2.substring(v2, i2.length) : "";
    } else g2.r = "display" === e2 && "none" === i2 ? zd : yd;
    return nt.test(i2) && (g2.e = 0), this._pt = g2;
  }
  function ce(t2) {
    var e2 = t2.split(" "), r2 = e2[0], i2 = e2[1] || "50%";
    return "top" !== r2 && "bottom" !== r2 && "left" !== i2 && "right" !== i2 || (t2 = r2, r2 = i2, i2 = t2), e2[0] = yr[r2] || r2, e2[1] = yr[i2] || i2, e2.join(" ");
  }
  function de(t2, e2) {
    if (e2.tween && e2.tween._time === e2.tween._dur) {
      var r2, i2, n2, a2 = e2.t, s2 = a2.style, o2 = e2.u, u2 = a2._gsap;
      if ("all" === o2 || true === o2) s2.cssText = "", i2 = 1;
      else for (n2 = (o2 = o2.split(",")).length; -1 < --n2; ) r2 = o2[n2], nr[r2] && (i2 = 1, r2 = "transformOrigin" === r2 ? dr : cr), Wd(a2, r2);
      i2 && (Wd(a2, cr), u2 && (u2.svg && a2.removeAttribute("transform"), xr(a2, 1), u2.uncache = 1, Jd(s2)));
    }
  }
  function he(t2) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t2 || "none" === t2 || !t2;
  }
  function ie(t2) {
    var e2 = Od(t2, cr);
    return he(e2) ? br : e2.substr(7).match(et).map(ia);
  }
  function je(t2, e2) {
    var r2, i2, n2, a2, s2 = t2._gsap || fa(t2), o2 = t2.style, u2 = ie(t2);
    return s2.svg && t2.getAttribute("transform") ? "1,0,0,1,0,0" === (u2 = [(n2 = t2.transform.baseVal.consolidate().matrix).a, n2.b, n2.c, n2.d, n2.e, n2.f]).join(",") ? br : u2 : (u2 !== br || t2.offsetParent || t2 === ze || s2.svg || (n2 = o2.display, o2.display = "block", (r2 = t2.parentNode) && t2.offsetParent || (a2 = 1, i2 = t2.nextElementSibling, ze.appendChild(t2)), u2 = ie(t2), n2 ? o2.display = n2 : Wd(t2, "display"), a2 && (i2 ? r2.insertBefore(t2, i2) : r2 ? r2.appendChild(t2) : ze.removeChild(t2))), e2 && 6 < u2.length ? [u2[0], u2[1], u2[4], u2[5], u2[12], u2[13]] : u2);
  }
  function ke(t2, e2, r2, i2, n2, a2) {
    var s2, o2, u2, h2 = t2._gsap, l2 = n2 || je(t2, true), f2 = h2.xOrigin || 0, c2 = h2.yOrigin || 0, d2 = h2.xOffset || 0, p2 = h2.yOffset || 0, _2 = l2[0], m2 = l2[1], g2 = l2[2], v2 = l2[3], y2 = l2[4], T2 = l2[5], b2 = e2.split(" "), w2 = parseFloat(b2[0]) || 0, x2 = parseFloat(b2[1]) || 0;
    r2 ? l2 !== br && (o2 = _2 * v2 - m2 * g2) && (u2 = w2 * (-m2 / o2) + x2 * (_2 / o2) - (_2 * T2 - m2 * y2) / o2, w2 = w2 * (v2 / o2) + x2 * (-g2 / o2) + (g2 * T2 - v2 * y2) / o2, x2 = u2) : (w2 = (s2 = Ud(t2)).x + (~b2[0].indexOf("%") ? w2 / 100 * s2.width : w2), x2 = s2.y + (~(b2[1] || b2[0]).indexOf("%") ? x2 / 100 * s2.height : x2)), i2 || false !== i2 && h2.smooth ? (y2 = w2 - f2, T2 = x2 - c2, h2.xOffset = d2 + (y2 * _2 + T2 * g2) - y2, h2.yOffset = p2 + (y2 * m2 + T2 * v2) - T2) : h2.xOffset = h2.yOffset = 0, h2.xOrigin = w2, h2.yOrigin = x2, h2.smooth = !!i2, h2.origin = e2, h2.originIsAbsolute = !!r2, t2.style[dr] = "0px 0px", a2 && (Xd(a2, h2, "xOrigin", f2, w2), Xd(a2, h2, "yOrigin", c2, x2), Xd(a2, h2, "xOffset", d2, h2.xOffset), Xd(a2, h2, "yOffset", p2, h2.yOffset)), t2.setAttribute("data-svg-origin", w2 + " " + x2);
  }
  function ne(t2, e2, r2) {
    var i2 = Ya(e2);
    return ia(parseFloat(e2) + parseFloat($d(t2, "x", r2 + "px", i2))) + i2;
  }
  function ue(t2, e2, i2, n2, a2) {
    var s2, o2, u2 = 360, h2 = r(a2), l2 = parseFloat(a2) * (h2 && ~a2.indexOf("rad") ? ar : 1) - n2, f2 = n2 + l2 + "deg";
    return h2 && ("short" === (s2 = a2.split("_")[1]) && (l2 %= u2) !== l2 % 180 && (l2 += l2 < 0 ? u2 : -u2), "cw" === s2 && l2 < 0 ? l2 = (l2 + 36e9) % u2 - ~~(l2 / u2) * u2 : "ccw" === s2 && 0 < l2 && (l2 = (l2 - 36e9) % u2 - ~~(l2 / u2) * u2)), t2._pt = o2 = new ge(t2._pt, e2, i2, n2, l2, vd), o2.e = f2, o2.u = "deg", t2._props.push(i2), o2;
  }
  function ve(t2, e2) {
    for (var r2 in e2) t2[r2] = e2[r2];
    return t2;
  }
  function we(t2, e2, r2) {
    var i2, n2, a2, s2, o2, u2, h2, l2 = ve({}, r2._gsap), f2 = r2.style;
    for (n2 in l2.svg ? (a2 = r2.getAttribute("transform"), r2.setAttribute("transform", ""), f2[cr] = e2, i2 = xr(r2, 1), Wd(r2, cr), r2.setAttribute("transform", a2)) : (a2 = getComputedStyle(r2)[cr], f2[cr] = e2, i2 = xr(r2, 1), f2[cr] = a2), nr) (a2 = l2[n2]) !== (s2 = i2[n2]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n2) < 0 && (o2 = Ya(a2) !== (h2 = Ya(s2)) ? $d(r2, n2, a2, h2) : parseFloat(a2), u2 = parseFloat(s2), t2._pt = new ge(t2._pt, i2, n2, o2, u2 - o2, ud), t2._pt.u = h2 || 0, t2._props.push(n2));
    ve(i2, l2);
  }
  var De, Ee, ze, Re, Fe, Ie, Be, Le, Ye = It.Power0, Ve = It.Power1, qe = It.Power2, Ue = It.Power3, Xe = It.Power4, Ne = It.Linear, We = It.Quad, Qe = It.Cubic, Ke = It.Quart, Ge = It.Quint, $e = It.Strong, He = It.Elastic, Je = It.Back, Ze = It.SteppedEase, tr = It.Bounce, er = It.Sine, rr = It.Expo, ir = It.Circ, nr = {}, ar = 180 / Math.PI, sr = Math.PI / 180, or = Math.atan2, ur = /([A-Z])/g, hr = /(left|right|width|margin|padding|x)/i, lr = /[\s,\(]\S/, fr = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, cr = "transform", dr = cr + "Origin", pr = "O,Moz,ms,Ms,Webkit".split(","), _r = function _checkPropPrefix(t2, e2, r2) {
    var i2 = (e2 || Fe).style, n2 = 5;
    if (t2 in i2 && !r2) return t2;
    for (t2 = t2.charAt(0).toUpperCase() + t2.substr(1); n2-- && !(pr[n2] + t2 in i2); ) ;
    return n2 < 0 ? null : (3 === n2 ? "ms" : 0 <= n2 ? pr[n2] : "") + t2;
  }, mr = { deg: 1, rad: 1, turn: 1 }, gr = { grid: 1, flex: 1 }, vr = function _get(t2, e2, r2, i2) {
    var n2;
    return Re || Rd(), e2 in fr && "transform" !== e2 && ~(e2 = fr[e2]).indexOf(",") && (e2 = e2.split(",")[0]), nr[e2] && "transform" !== e2 ? (n2 = xr(t2, i2), n2 = "transformOrigin" !== e2 ? n2[e2] : n2.svg ? n2.origin : Or(Od(t2, dr)) + " " + n2.zOrigin + "px") : (n2 = t2.style[e2]) && "auto" !== n2 && !i2 && !~(n2 + "").indexOf("calc(") || (n2 = Tr[e2] && Tr[e2](t2, e2, r2) || Od(t2, e2) || ga(t2, e2) || ("opacity" === e2 ? 1 : 0)), r2 && !~(n2 + "").trim().indexOf(" ") ? $d(t2, e2, n2, r2) + r2 : n2;
  }, yr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, Tr = { clearProps: function clearProps(t2, e2, r2, i2, n2) {
    if ("isFromStart" !== n2.data) {
      var a2 = t2._pt = new ge(t2._pt, e2, r2, 0, 0, de);
      return a2.u = i2, a2.pr = -10, a2.tween = n2, t2._props.push(r2), 1;
    }
  } }, br = [1, 0, 0, 1, 0, 0], wr = {}, xr = function _parseTransform(t2, e2) {
    var r2 = t2._gsap || new qt(t2);
    if ("x" in r2 && !e2 && !r2.uncache) return r2;
    var i2, n2, a2, s2, o2, u2, h2, l2, f2, c2, d2, p2, _2, m2, g2, v2, y2, T2, b2, w2, x2, O2, k2, M2, A2, S2, C2, P2, D2, E2, z2, R2, F2 = t2.style, I2 = r2.scaleX < 0, B2 = "deg", L2 = getComputedStyle(t2), Y2 = Od(t2, dr) || "0";
    return i2 = n2 = a2 = u2 = h2 = l2 = f2 = c2 = d2 = 0, s2 = o2 = 1, r2.svg = !(!t2.getCTM || !Vd(t2)), L2.translate && ("none" === L2.translate && "none" === L2.scale && "none" === L2.rotate || (F2[cr] = ("none" !== L2.translate ? "translate3d(" + (L2.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L2.rotate ? "rotate(" + L2.rotate + ") " : "") + ("none" !== L2.scale ? "scale(" + L2.scale.split(" ").join(",") + ") " : "") + ("none" !== L2[cr] ? L2[cr] : "")), F2.scale = F2.rotate = F2.translate = "none"), m2 = je(t2, r2.svg), r2.svg && (M2 = r2.uncache ? (A2 = t2.getBBox(), Y2 = r2.xOrigin - A2.x + "px " + (r2.yOrigin - A2.y) + "px", "") : !e2 && t2.getAttribute("data-svg-origin"), ke(t2, M2 || Y2, !!M2 || r2.originIsAbsolute, false !== r2.smooth, m2)), p2 = r2.xOrigin || 0, _2 = r2.yOrigin || 0, m2 !== br && (T2 = m2[0], b2 = m2[1], w2 = m2[2], x2 = m2[3], i2 = O2 = m2[4], n2 = k2 = m2[5], 6 === m2.length ? (s2 = Math.sqrt(T2 * T2 + b2 * b2), o2 = Math.sqrt(x2 * x2 + w2 * w2), u2 = T2 || b2 ? or(b2, T2) * ar : 0, (f2 = w2 || x2 ? or(w2, x2) * ar + u2 : 0) && (o2 *= Math.abs(Math.cos(f2 * sr))), r2.svg && (i2 -= p2 - (p2 * T2 + _2 * w2), n2 -= _2 - (p2 * b2 + _2 * x2))) : (R2 = m2[6], E2 = m2[7], C2 = m2[8], P2 = m2[9], D2 = m2[10], z2 = m2[11], i2 = m2[12], n2 = m2[13], a2 = m2[14], h2 = (g2 = or(R2, D2)) * ar, g2 && (M2 = O2 * (v2 = Math.cos(-g2)) + C2 * (y2 = Math.sin(-g2)), A2 = k2 * v2 + P2 * y2, S2 = R2 * v2 + D2 * y2, C2 = O2 * -y2 + C2 * v2, P2 = k2 * -y2 + P2 * v2, D2 = R2 * -y2 + D2 * v2, z2 = E2 * -y2 + z2 * v2, O2 = M2, k2 = A2, R2 = S2), l2 = (g2 = or(-w2, D2)) * ar, g2 && (v2 = Math.cos(-g2), z2 = x2 * (y2 = Math.sin(-g2)) + z2 * v2, T2 = M2 = T2 * v2 - C2 * y2, b2 = A2 = b2 * v2 - P2 * y2, w2 = S2 = w2 * v2 - D2 * y2), u2 = (g2 = or(b2, T2)) * ar, g2 && (M2 = T2 * (v2 = Math.cos(g2)) + b2 * (y2 = Math.sin(g2)), A2 = O2 * v2 + k2 * y2, b2 = b2 * v2 - T2 * y2, k2 = k2 * v2 - O2 * y2, T2 = M2, O2 = A2), h2 && 359.9 < Math.abs(h2) + Math.abs(u2) && (h2 = u2 = 0, l2 = 180 - l2), s2 = ia(Math.sqrt(T2 * T2 + b2 * b2 + w2 * w2)), o2 = ia(Math.sqrt(k2 * k2 + R2 * R2)), g2 = or(O2, k2), f2 = 2e-4 < Math.abs(g2) ? g2 * ar : 0, d2 = z2 ? 1 / (z2 < 0 ? -z2 : z2) : 0), r2.svg && (M2 = t2.getAttribute("transform"), r2.forceCSS = t2.setAttribute("transform", "") || !he(Od(t2, cr)), M2 && t2.setAttribute("transform", M2))), 90 < Math.abs(f2) && Math.abs(f2) < 270 && (I2 ? (s2 *= -1, f2 += u2 <= 0 ? 180 : -180, u2 += u2 <= 0 ? 180 : -180) : (o2 *= -1, f2 += f2 <= 0 ? 180 : -180)), e2 = e2 || r2.uncache, r2.x = i2 - ((r2.xPercent = i2 && (!e2 && r2.xPercent || (Math.round(t2.offsetWidth / 2) === Math.round(-i2) ? -50 : 0))) ? t2.offsetWidth * r2.xPercent / 100 : 0) + "px", r2.y = n2 - ((r2.yPercent = n2 && (!e2 && r2.yPercent || (Math.round(t2.offsetHeight / 2) === Math.round(-n2) ? -50 : 0))) ? t2.offsetHeight * r2.yPercent / 100 : 0) + "px", r2.z = a2 + "px", r2.scaleX = ia(s2), r2.scaleY = ia(o2), r2.rotation = ia(u2) + B2, r2.rotationX = ia(h2) + B2, r2.rotationY = ia(l2) + B2, r2.skewX = f2 + B2, r2.skewY = c2 + B2, r2.transformPerspective = d2 + "px", (r2.zOrigin = parseFloat(Y2.split(" ")[2]) || 0) && (F2[dr] = Or(Y2)), r2.xOffset = r2.yOffset = 0, r2.force3D = V.force3D, r2.renderTransform = r2.svg ? Pr : Le ? Cr : kr, r2.uncache = 0, r2;
  }, Or = function _firstTwoOnly(t2) {
    return (t2 = t2.split(" "))[0] + " " + t2[1];
  }, kr = function _renderNon3DTransforms(t2, e2) {
    e2.z = "0px", e2.rotationY = e2.rotationX = "0deg", e2.force3D = 0, Cr(t2, e2);
  }, Mr = "0deg", Ar = "0px", Sr = ") ", Cr = function _renderCSSTransforms(t2, e2) {
    var r2 = e2 || this, i2 = r2.xPercent, n2 = r2.yPercent, a2 = r2.x, s2 = r2.y, o2 = r2.z, u2 = r2.rotation, h2 = r2.rotationY, l2 = r2.rotationX, f2 = r2.skewX, c2 = r2.skewY, d2 = r2.scaleX, p2 = r2.scaleY, _2 = r2.transformPerspective, m2 = r2.force3D, g2 = r2.target, v2 = r2.zOrigin, y2 = "", T2 = "auto" === m2 && t2 && 1 !== t2 || true === m2;
    if (v2 && (l2 !== Mr || h2 !== Mr)) {
      var b2, w2 = parseFloat(h2) * sr, x2 = Math.sin(w2), O2 = Math.cos(w2);
      w2 = parseFloat(l2) * sr, b2 = Math.cos(w2), a2 = ne(g2, a2, x2 * b2 * -v2), s2 = ne(g2, s2, -Math.sin(w2) * -v2), o2 = ne(g2, o2, O2 * b2 * -v2 + v2);
    }
    _2 !== Ar && (y2 += "perspective(" + _2 + Sr), (i2 || n2) && (y2 += "translate(" + i2 + "%, " + n2 + "%) "), !T2 && a2 === Ar && s2 === Ar && o2 === Ar || (y2 += o2 !== Ar || T2 ? "translate3d(" + a2 + ", " + s2 + ", " + o2 + ") " : "translate(" + a2 + ", " + s2 + Sr), u2 !== Mr && (y2 += "rotate(" + u2 + Sr), h2 !== Mr && (y2 += "rotateY(" + h2 + Sr), l2 !== Mr && (y2 += "rotateX(" + l2 + Sr), f2 === Mr && c2 === Mr || (y2 += "skew(" + f2 + ", " + c2 + Sr), 1 === d2 && 1 === p2 || (y2 += "scale(" + d2 + ", " + p2 + Sr), g2.style[cr] = y2 || "translate(0, 0)";
  }, Pr = function _renderSVGTransforms(t2, e2) {
    var r2, i2, n2, a2, s2, o2 = e2 || this, u2 = o2.xPercent, h2 = o2.yPercent, l2 = o2.x, f2 = o2.y, c2 = o2.rotation, d2 = o2.skewX, p2 = o2.skewY, _2 = o2.scaleX, m2 = o2.scaleY, g2 = o2.target, v2 = o2.xOrigin, y2 = o2.yOrigin, T2 = o2.xOffset, b2 = o2.yOffset, w2 = o2.forceCSS, x2 = parseFloat(l2), O2 = parseFloat(f2);
    c2 = parseFloat(c2), d2 = parseFloat(d2), (p2 = parseFloat(p2)) && (d2 += p2 = parseFloat(p2), c2 += p2), c2 || d2 ? (c2 *= sr, d2 *= sr, r2 = Math.cos(c2) * _2, i2 = Math.sin(c2) * _2, n2 = Math.sin(c2 - d2) * -m2, a2 = Math.cos(c2 - d2) * m2, d2 && (p2 *= sr, s2 = Math.tan(d2 - p2), n2 *= s2 = Math.sqrt(1 + s2 * s2), a2 *= s2, p2 && (s2 = Math.tan(p2), r2 *= s2 = Math.sqrt(1 + s2 * s2), i2 *= s2)), r2 = ia(r2), i2 = ia(i2), n2 = ia(n2), a2 = ia(a2)) : (r2 = _2, a2 = m2, i2 = n2 = 0), (x2 && !~(l2 + "").indexOf("px") || O2 && !~(f2 + "").indexOf("px")) && (x2 = $d(g2, "x", l2, "px"), O2 = $d(g2, "y", f2, "px")), (v2 || y2 || T2 || b2) && (x2 = ia(x2 + v2 - (v2 * r2 + y2 * n2) + T2), O2 = ia(O2 + y2 - (v2 * i2 + y2 * a2) + b2)), (u2 || h2) && (s2 = g2.getBBox(), x2 = ia(x2 + u2 / 100 * s2.width), O2 = ia(O2 + h2 / 100 * s2.height)), s2 = "matrix(" + r2 + "," + i2 + "," + n2 + "," + a2 + "," + x2 + "," + O2 + ")", g2.setAttribute("transform", s2), w2 && (g2.style[cr] = s2);
  };
  ha("padding,margin,Width,Radius", function(e2, r2) {
    var t2 = "Right", i2 = "Bottom", n2 = "Left", o2 = (r2 < 3 ? ["Top", t2, i2, n2] : ["Top" + n2, "Top" + t2, i2 + t2, i2 + n2]).map(function(t3) {
      return r2 < 2 ? e2 + t3 : "border" + t3 + e2;
    });
    Tr[1 < r2 ? "border" + e2 : e2] = function(e3, t3, r3, i3, n3) {
      var a2, s2;
      if (arguments.length < 4) return a2 = o2.map(function(t4) {
        return vr(e3, t4, r3);
      }), 5 === (s2 = a2.join(" ")).split(a2[0]).length ? a2[0] : s2;
      a2 = (i3 + "").split(" "), s2 = {}, o2.forEach(function(t4, e4) {
        return s2[t4] = a2[e4] = a2[e4] || a2[(e4 - 1) / 2 | 0];
      }), e3.init(t3, s2, n3);
    };
  });
  var Dr, Er, zr, Rr = { name: "css", register: Rd, targetTest: function targetTest(t2) {
    return t2.style && t2.nodeType;
  }, init: function init(t2, e2, i2, n2, a2) {
    var s2, o2, u2, h2, l2, f2, c2, d2, p2, _2, m2, g2, v2, y2, T2, b2, w2 = this._props, x2 = t2.style, O2 = i2.vars.startAt;
    for (c2 in Re || Rd(), this.styles = this.styles || Ld(t2), b2 = this.styles.props, this.tween = i2, e2) if ("autoRound" !== c2 && (o2 = e2[c2], !pt[c2] || !ac(c2, e2, i2, n2, t2, a2))) {
      if (l2 = typeof o2, f2 = Tr[c2], "function" === l2 && (l2 = typeof (o2 = o2.call(i2, n2, t2, a2))), "string" === l2 && ~o2.indexOf("random(") && (o2 = ob(o2)), f2) f2(this, t2, c2, o2, i2) && (T2 = 1);
      else if ("--" === c2.substr(0, 2)) s2 = (getComputedStyle(t2).getPropertyValue(c2) + "").trim(), o2 += "", Et.lastIndex = 0, Et.test(s2) || (d2 = Ya(s2), p2 = Ya(o2)), p2 ? d2 !== p2 && (s2 = $d(t2, c2, s2, p2) + p2) : d2 && (o2 += d2), this.add(x2, "setProperty", s2, o2, n2, a2, 0, 0, c2), w2.push(c2), b2.push(c2, 0, x2[c2]);
      else if ("undefined" !== l2) {
        if (O2 && c2 in O2 ? (s2 = "function" == typeof O2[c2] ? O2[c2].call(i2, n2, t2, a2) : O2[c2], r(s2) && ~s2.indexOf("random(") && (s2 = ob(s2)), Ya(s2 + "") || (s2 += V.units[c2] || Ya(vr(t2, c2)) || ""), "=" === (s2 + "").charAt(1) && (s2 = vr(t2, c2))) : s2 = vr(t2, c2), h2 = parseFloat(s2), (_2 = "string" === l2 && "=" === o2.charAt(1) && o2.substr(0, 2)) && (o2 = o2.substr(2)), u2 = parseFloat(o2), c2 in fr && ("autoAlpha" === c2 && (1 === h2 && "hidden" === vr(t2, "visibility") && u2 && (h2 = 0), b2.push("visibility", 0, x2.visibility), Xd(this, x2, "visibility", h2 ? "inherit" : "hidden", u2 ? "inherit" : "hidden", !u2)), "scale" !== c2 && "transform" !== c2 && ~(c2 = fr[c2]).indexOf(",") && (c2 = c2.split(",")[0])), m2 = c2 in nr) if (this.styles.save(c2), g2 || ((v2 = t2._gsap).renderTransform && !e2.parseTransform || xr(t2, e2.parseTransform), y2 = false !== e2.smoothOrigin && v2.smooth, (g2 = this._pt = new ge(this._pt, x2, cr, 0, 1, v2.renderTransform, v2, 0, -1)).dep = 1), "scale" === c2) this._pt = new ge(this._pt, v2, "scaleY", v2.scaleY, (_2 ? ka(v2.scaleY, _2 + u2) : u2) - v2.scaleY || 0, ud), this._pt.u = 0, w2.push("scaleY", c2), c2 += "X";
        else {
          if ("transformOrigin" === c2) {
            b2.push(dr, 0, x2[dr]), o2 = ce(o2), v2.svg ? ke(t2, o2, 0, y2, 0, this) : ((p2 = parseFloat(o2.split(" ")[2]) || 0) !== v2.zOrigin && Xd(this, v2, "zOrigin", v2.zOrigin, p2), Xd(this, x2, c2, Or(s2), Or(o2)));
            continue;
          }
          if ("svgOrigin" === c2) {
            ke(t2, o2, 1, y2, 0, this);
            continue;
          }
          if (c2 in wr) {
            ue(this, v2, c2, h2, _2 ? ka(h2, _2 + o2) : o2);
            continue;
          }
          if ("smoothOrigin" === c2) {
            Xd(this, v2, "smooth", v2.smooth, o2);
            continue;
          }
          if ("force3D" === c2) {
            v2[c2] = o2;
            continue;
          }
          if ("transform" === c2) {
            we(this, o2, t2);
            continue;
          }
        }
        else c2 in x2 || (c2 = _r(c2) || c2);
        if (m2 || (u2 || 0 === u2) && (h2 || 0 === h2) && !lr.test(o2) && c2 in x2) u2 = u2 || 0, (d2 = (s2 + "").substr((h2 + "").length)) !== (p2 = Ya(o2) || (c2 in V.units ? V.units[c2] : d2)) && (h2 = $d(t2, c2, s2, p2)), this._pt = new ge(this._pt, m2 ? v2 : x2, c2, h2, (_2 ? ka(h2, _2 + u2) : u2) - h2, m2 || "px" !== p2 && "zIndex" !== c2 || false === e2.autoRound ? ud : xd), this._pt.u = p2 || 0, d2 !== p2 && "%" !== p2 && (this._pt.b = s2, this._pt.r = wd);
        else if (c2 in x2) ae.call(this, t2, c2, s2, _2 ? _2 + o2 : o2);
        else if (c2 in t2) this.add(t2, c2, s2 || t2[c2], _2 ? _2 + o2 : o2, n2, a2);
        else if ("parseTransform" !== c2) {
          Q(c2, o2);
          continue;
        }
        m2 || (c2 in x2 ? b2.push(c2, 0, x2[c2]) : b2.push(c2, 1, s2 || t2[c2])), w2.push(c2);
      }
    }
    T2 && me(this);
  }, render: function render(t2, e2) {
    if (e2.tween._time || !Be()) for (var r2 = e2._pt; r2; ) r2.r(t2, r2.d), r2 = r2._next;
    else e2.styles.revert();
  }, get: vr, aliases: fr, getSetter: function getSetter(t2, e2, r2) {
    var i2 = fr[e2];
    return i2 && i2.indexOf(",") < 0 && (e2 = i2), e2 in nr && e2 !== dr && (t2._gsap.x || vr(t2, "x")) ? r2 && Ie === r2 ? "scale" === e2 ? Dd : Cd : (Ie = r2 || {}) && ("scale" === e2 ? Ed : Fd) : t2.style && !u(t2.style[e2]) ? Ad : ~e2.indexOf("-") ? Bd : re(t2, e2);
  }, core: { _removeProperty: Wd, _getMatrix: je } };
  Pe.utils.checkPrefix = _r, Pe.core.getStyleSaver = Ld, zr = ha((Dr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Er = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t2) {
    nr[t2] = 1;
  }), ha(Er, function(t2) {
    V.units[t2] = "deg", wr[t2] = 1;
  }), fr[zr[13]] = Dr + "," + Er, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t2) {
    var e2 = t2.split(":");
    fr[e2[1]] = zr[e2[0]];
  }), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t2) {
    V.units[t2] = "px";
  }), Pe.registerPlugin(Rr);
  var Fr = Pe.registerPlugin(Rr) || Pe, Ir = Fr.core.Tween;
  e.Back = Je, e.Bounce = tr, e.CSSPlugin = Rr, e.Circ = ir, e.Cubic = Qe, e.Elastic = He, e.Expo = rr, e.Linear = Ne, e.Power0 = Ye, e.Power1 = Ve, e.Power2 = qe, e.Power3 = Ue, e.Power4 = Xe, e.Quad = We, e.Quart = Ke, e.Quint = Ge, e.Sine = er, e.SteppedEase = Ze, e.Strong = $e, e.TimelineLite = Xt, e.TimelineMax = Xt, e.TweenLite = Jt, e.TweenMax = Ir, e.default = Fr, e.gsap = Fr;
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: true });
  } else {
    delete e.default;
  }
});
/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {});
}(this, function(e) {
  "use strict";
  function _defineProperties(e2, t2) {
    for (var r2 = 0; r2 < t2.length; r2++) {
      var n2 = t2[r2];
      n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
    }
  }
  function r() {
    return Me || "undefined" != typeof window && (Me = window.gsap) && Me.registerPlugin && Me;
  }
  function z(e2, t2) {
    return ~qe.indexOf(e2) && qe[qe.indexOf(e2) + 1][t2];
  }
  function A(e2) {
    return !!~t.indexOf(e2);
  }
  function B(e2, t2, r2, n2, o2) {
    return e2.addEventListener(t2, r2, { passive: !n2, capture: !!o2 });
  }
  function C(e2, t2, r2, n2) {
    return e2.removeEventListener(t2, r2, !!n2);
  }
  function F() {
    return Re && Re.isPressed || Ie.cache++;
  }
  function G(r2, n2) {
    function Vc(e2) {
      if (e2 || 0 === e2) {
        o && (ke.history.scrollRestoration = "manual");
        var t2 = Re && Re.isPressed;
        e2 = Vc.v = Math.round(e2) || (Re && Re.iOS ? 1 : 0), r2(e2), Vc.cacheID = Ie.cache, t2 && i("ss", e2);
      } else (n2 || Ie.cache !== Vc.cacheID || i("ref")) && (Vc.cacheID = Ie.cache, Vc.v = r2());
      return Vc.v + Vc.offset;
    }
    return Vc.offset = 0, r2 && Vc;
  }
  function J(e2) {
    return Me.utils.toArray(e2)[0] || ("string" == typeof e2 && false !== Me.config().nullTargetWarn ? console.warn("Element not found:", e2) : null);
  }
  function K(t2, e2) {
    var r2 = e2.s, n2 = e2.sc;
    A(t2) && (t2 = Ee.scrollingElement || Pe);
    var o2 = Ie.indexOf(t2), i2 = n2 === je.sc ? 1 : 2;
    ~o2 || (o2 = Ie.push(t2) - 1), Ie[o2 + i2] || t2.addEventListener("scroll", F);
    var a2 = Ie[o2 + i2], s2 = a2 || (Ie[o2 + i2] = G(z(t2, r2), true) || (A(t2) ? n2 : G(function(e3) {
      return arguments.length ? t2[r2] = e3 : t2[r2];
    })));
    return s2.target = t2, a2 || (s2.smooth = "smooth" === Me.getProperty(t2, "scrollBehavior")), s2;
  }
  function L(e2, t2, o2) {
    function rd(e3, t3) {
      var r2 = Ne();
      t3 || n2 < r2 - s2 ? (a2 = i2, i2 = e3, l2 = s2, s2 = r2) : o2 ? i2 += e3 : i2 = a2 + (e3 - a2) / (r2 - l2) * (s2 - l2);
    }
    var i2 = e2, a2 = e2, s2 = Ne(), l2 = s2, n2 = t2 || 50, c2 = Math.max(500, 3 * n2);
    return { update: rd, reset: function reset() {
      a2 = i2 = o2 ? 0 : i2, l2 = s2 = 0;
    }, getVelocity: function getVelocity(e3) {
      var t3 = l2, r2 = a2, n3 = Ne();
      return !e3 && 0 !== e3 || e3 === i2 || rd(e3), s2 === l2 || c2 < n3 - l2 ? 0 : (i2 + (o2 ? r2 : -r2)) / ((o2 ? n3 : s2) - t3) * 1e3;
    } };
  }
  function M(e2, t2) {
    return t2 && !e2._gsapAllow && e2.preventDefault(), e2.changedTouches ? e2.changedTouches[0] : e2;
  }
  function N(e2) {
    var t2 = Math.max.apply(Math, e2), r2 = Math.min.apply(Math, e2);
    return Math.abs(t2) >= Math.abs(r2) ? t2 : r2;
  }
  function O() {
    (De = Me.core.globals().ScrollTrigger) && De.core && function _integrate() {
      var e2 = De.core, r2 = e2.bridge || {}, t2 = e2._scrollers, n2 = e2._proxies;
      t2.push.apply(t2, Ie), n2.push.apply(n2, qe), Ie = t2, qe = n2, i = function _bridge(e3, t3) {
        return r2[e3](t3);
      };
    }();
  }
  function P(e2) {
    return (Me = e2 || r()) && "undefined" != typeof document && document.body && (ke = window, Pe = (Ee = document).documentElement, Oe = Ee.body, t = [ke, Ee, Pe, Oe], Me.utils.clamp, ze = Me.core.context || function() {
    }, Be = "onpointerenter" in Oe ? "pointer" : "mouse", Ae = k.isTouch = ke.matchMedia && ke.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ke || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, Le = k.eventTypes = ("ontouchstart" in Pe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Pe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
      return o = 0;
    }, 500), O(), Ce = 1), Ce;
  }
  var Me, Ce, ke, Ee, Pe, Oe, Ae, Be, De, t, Re, Le, ze, o = 1, Fe = [], Ie = [], qe = [], Ne = Date.now, i = function _bridge(e2, t2) {
    return t2;
  }, n = "scrollLeft", a = "scrollTop", He = { s: n, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: G(function(e2) {
    return arguments.length ? ke.scrollTo(e2, je.sc()) : ke.pageXOffset || Ee[n] || Pe[n] || Oe[n] || 0;
  }) }, je = { s: a, p: "top", p2: "Top", os: "bottom", os2: "Bottom", d: "height", d2: "Height", a: "y", op: He, sc: G(function(e2) {
    return arguments.length ? ke.scrollTo(He.sc(), e2) : ke.pageYOffset || Ee[a] || Pe[a] || Oe[a] || 0;
  }) };
  He.op = je, Ie.cache = 0;
  var k = (Observer.prototype.init = function init(e2) {
    Ce || P(Me) || console.warn("Please gsap.registerPlugin(Observer)"), De || O();
    var o2 = e2.tolerance, a2 = e2.dragMinimum, t2 = e2.type, i2 = e2.target, r2 = e2.lineHeight, n2 = e2.debounce, s2 = e2.preventDefault, l2 = e2.onStop, c2 = e2.onStopDelay, u2 = e2.ignore, f2 = e2.wheelSpeed, p2 = e2.event, d2 = e2.onDragStart, g2 = e2.onDragEnd, h2 = e2.onDrag, v2 = e2.onPress, b2 = e2.onRelease, m2 = e2.onRight, y2 = e2.onLeft, x2 = e2.onUp, w2 = e2.onDown, _2 = e2.onChangeX, S2 = e2.onChangeY, T2 = e2.onChange, k2 = e2.onToggleX, E2 = e2.onToggleY, D2 = e2.onHover, R2 = e2.onHoverEnd, z2 = e2.onMove, X2 = e2.ignoreCheck, Y2 = e2.isNormalizer, I2 = e2.onGestureStart, q2 = e2.onGestureEnd, V2 = e2.onWheel, H2 = e2.onEnable, W2 = e2.onDisable, j2 = e2.onClick, G2 = e2.scrollSpeed, U2 = e2.capture, Q2 = e2.allowClicks, Z2 = e2.lockAxis, $2 = e2.onLockAxis;
    function Se() {
      return ye = Ne();
    }
    function Te(e3, t3) {
      return (se.event = e3) && u2 && ~u2.indexOf(e3.target) || t3 && ge && "touch" !== e3.pointerType || X2 && X2(e3, t3);
    }
    function Ve() {
      var e3 = se.deltaX = N(be), t3 = se.deltaY = N(me), r3 = Math.abs(e3) >= o2, n3 = Math.abs(t3) >= o2;
      T2 && (r3 || n3) && T2(se, e3, t3, be, me), r3 && (m2 && 0 < se.deltaX && m2(se), y2 && se.deltaX < 0 && y2(se), _2 && _2(se), k2 && se.deltaX < 0 != le < 0 && k2(se), le = se.deltaX, be[0] = be[1] = be[2] = 0), n3 && (w2 && 0 < se.deltaY && w2(se), x2 && se.deltaY < 0 && x2(se), S2 && S2(se), E2 && se.deltaY < 0 != ce < 0 && E2(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne2 || re2) && (z2 && z2(se), re2 && (h2(se), re2 = false), ne2 = false), ie && !(ie = false) && $2 && $2(se), oe && (V2(se), oe = false), ee2 = 0;
    }
    function We(e3, t3, r3) {
      be[r3] += e3, me[r3] += t3, se._vx.update(e3), se._vy.update(t3), n2 ? ee2 = ee2 || requestAnimationFrame(Ve) : Ve();
    }
    function Xe(e3, t3) {
      Z2 && !ae && (se.axis = ae = Math.abs(e3) > Math.abs(t3) ? "x" : "y", ie = true), "y" !== ae && (be[2] += e3, se._vx.update(e3, true)), "x" !== ae && (me[2] += t3, se._vy.update(t3, true)), n2 ? ee2 = ee2 || requestAnimationFrame(Ve) : Ve();
    }
    function Ye(e3) {
      if (!Te(e3, 1)) {
        var t3 = (e3 = M(e3, s2)).clientX, r3 = e3.clientY, n3 = t3 - se.x, o3 = r3 - se.y, i3 = se.isDragging;
        se.x = t3, se.y = r3, (i3 || Math.abs(se.startX - t3) >= a2 || Math.abs(se.startY - r3) >= a2) && (h2 && (re2 = true), i3 || (se.isDragging = true), Xe(n3, o3), i3 || d2 && d2(se));
      }
    }
    function _e(e3) {
      return e3.touches && 1 < e3.touches.length && (se.isGesturing = true) && I2(e3, se.isDragging);
    }
    function af() {
      return (se.isGesturing = false) || q2(se);
    }
    function bf(e3) {
      if (!Te(e3)) {
        var t3 = ue(), r3 = fe();
        We((t3 - pe) * G2, (r3 - de) * G2, 1), pe = t3, de = r3, l2 && te2.restart(true);
      }
    }
    function cf(e3) {
      if (!Te(e3)) {
        e3 = M(e3, s2), V2 && (oe = true);
        var t3 = (1 === e3.deltaMode ? r2 : 2 === e3.deltaMode ? ke.innerHeight : 1) * f2;
        We(e3.deltaX * t3, e3.deltaY * t3, 0), l2 && !Y2 && te2.restart(true);
      }
    }
    function df(e3) {
      if (!Te(e3)) {
        var t3 = e3.clientX, r3 = e3.clientY, n3 = t3 - se.x, o3 = r3 - se.y;
        se.x = t3, se.y = r3, ne2 = true, (n3 || o3) && Xe(n3, o3);
      }
    }
    function ef(e3) {
      se.event = e3, D2(se);
    }
    function ff(e3) {
      se.event = e3, R2(se);
    }
    function gf(e3) {
      return Te(e3) || M(e3, s2) && j2(se);
    }
    this.target = i2 = J(i2) || Pe, this.vars = e2, u2 = u2 && Me.utils.toArray(u2), o2 = o2 || 1e-9, a2 = a2 || 0, f2 = f2 || 1, G2 = G2 || 1, t2 = t2 || "wheel,touch,pointer", n2 = false !== n2, r2 = r2 || parseFloat(ke.getComputedStyle(Oe).lineHeight) || 22;
    var ee2, te2, re2, ne2, oe, ie, ae, se = this, le = 0, ce = 0, ue = K(i2, He), fe = K(i2, je), pe = ue(), de = fe(), ge = ~t2.indexOf("touch") && !~t2.indexOf("pointer") && "pointerdown" === Le[0], he = A(i2), ve = i2.ownerDocument || Ee, be = [0, 0, 0], me = [0, 0, 0], ye = 0, xe = se.onPress = function(e3) {
      Te(e3, 1) || e3 && e3.button || (se.axis = ae = null, te2.pause(), se.isPressed = true, e3 = M(e3), le = ce = 0, se.startX = se.x = e3.clientX, se.startY = se.y = e3.clientY, se._vx.reset(), se._vy.reset(), B(Y2 ? i2 : ve, Le[1], Ye, s2, true), se.deltaX = se.deltaY = 0, v2 && v2(se));
    }, we = se.onRelease = function(t3) {
      if (!Te(t3, 1)) {
        C(Y2 ? i2 : ve, Le[1], Ye, true);
        var e3 = !isNaN(se.y - se.startY), r3 = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)), n3 = M(t3);
        !r3 && e3 && (se._vx.reset(), se._vy.reset(), s2 && Q2 && Me.delayedCall(0.08, function() {
          if (300 < Ne() - ye && !t3.defaultPrevented) {
            if (t3.target.click) t3.target.click();
            else if (ve.createEvent) {
              var e4 = ve.createEvent("MouseEvents");
              e4.initMouseEvent("click", true, true, ke, 1, n3.screenX, n3.screenY, n3.clientX, n3.clientY, false, false, false, false, 0, null), t3.target.dispatchEvent(e4);
            }
          }
        })), se.isDragging = se.isGesturing = se.isPressed = false, l2 && !Y2 && te2.restart(true), g2 && r3 && g2(se), b2 && b2(se, r3);
      }
    };
    te2 = se._dc = Me.delayedCall(c2 || 0.25, function onStopFunc() {
      se._vx.reset(), se._vy.reset(), te2.pause(), l2 && l2(se);
    }).pause(), se.deltaX = se.deltaY = 0, se._vx = L(0, 50, true), se._vy = L(0, 50, true), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = false, ze(this), se.enable = function(e3) {
      return se.isEnabled || (B(he ? ve : i2, "scroll", F), 0 <= t2.indexOf("scroll") && B(he ? ve : i2, "scroll", bf, s2, U2), 0 <= t2.indexOf("wheel") && B(i2, "wheel", cf, s2, U2), (0 <= t2.indexOf("touch") && Ae || 0 <= t2.indexOf("pointer")) && (B(i2, Le[0], xe, s2, U2), B(ve, Le[2], we), B(ve, Le[3], we), Q2 && B(i2, "click", Se, false, true), j2 && B(i2, "click", gf), I2 && B(ve, "gesturestart", _e), q2 && B(ve, "gestureend", af), D2 && B(i2, Be + "enter", ef), R2 && B(i2, Be + "leave", ff), z2 && B(i2, Be + "move", df)), se.isEnabled = true, e3 && e3.type && xe(e3), H2 && H2(se)), se;
    }, se.disable = function() {
      se.isEnabled && (Fe.filter(function(e3) {
        return e3 !== se && A(e3.target);
      }).length || C(he ? ve : i2, "scroll", F), se.isPressed && (se._vx.reset(), se._vy.reset(), C(Y2 ? i2 : ve, Le[1], Ye, true)), C(he ? ve : i2, "scroll", bf, U2), C(i2, "wheel", cf, U2), C(i2, Le[0], xe, U2), C(ve, Le[2], we), C(ve, Le[3], we), C(i2, "click", Se, true), C(i2, "click", gf), C(ve, "gesturestart", _e), C(ve, "gestureend", af), C(i2, Be + "enter", ef), C(i2, Be + "leave", ff), C(i2, Be + "move", df), se.isEnabled = se.isPressed = se.isDragging = false, W2 && W2(se));
    }, se.kill = se.revert = function() {
      se.disable();
      var e3 = Fe.indexOf(se);
      0 <= e3 && Fe.splice(e3, 1), Re === se && (Re = 0);
    }, Fe.push(se), Y2 && A(i2) && (Re = se), se.enable(p2);
  }, function _createClass(e2, t2, r2) {
    return t2 && _defineProperties(e2.prototype, t2), r2 && _defineProperties(e2, r2), e2;
  }(Observer, [{ key: "velocityX", get: function get() {
    return this._vx.getVelocity();
  } }, { key: "velocityY", get: function get() {
    return this._vy.getVelocity();
  } }]), Observer);
  function Observer(e2) {
    this.init(e2);
  }
  k.version = "3.11.5", k.create = function(e2) {
    return new k(e2);
  }, k.register = P, k.getAll = function() {
    return Fe.slice();
  }, k.getById = function(t2) {
    return Fe.filter(function(e2) {
      return e2.vars.id === t2;
    })[0];
  }, r() && Me.registerPlugin(k);
  function za() {
    return rt = 1;
  }
  function Aa() {
    return rt = 0;
  }
  function Ba(e2) {
    return e2;
  }
  function Ca(e2) {
    return Math.round(1e5 * e2) / 1e5 || 0;
  }
  function Da() {
    return "undefined" != typeof window;
  }
  function Ea() {
    return Je || Da() && (Je = window.gsap) && Je.registerPlugin && Je;
  }
  function Fa(e2) {
    return !!~l.indexOf(e2);
  }
  function Ga(e2) {
    return z(e2, "getBoundingClientRect") || (Fa(e2) ? function() {
      return Lt.width = Ke.innerWidth, Lt.height = Ke.innerHeight, Lt;
    } : function() {
      return Ct(e2);
    });
  }
  function Ja(e2, t2) {
    var r2 = t2.s, n2 = t2.d2, o2 = t2.d, i2 = t2.a;
    return Math.max(0, (r2 = "scroll" + n2) && (i2 = z(e2, r2)) ? i2() - Ga(e2)()[o2] : Fa(e2) ? (Ue[r2] || Qe[r2]) - (Ke["inner" + n2] || Ue["client" + n2] || Qe["client" + n2]) : e2[r2] - e2["offset" + n2]);
  }
  function Ka(e2, t2) {
    for (var r2 = 0; r2 < g.length; r2 += 3) t2 && !~t2.indexOf(g[r2 + 1]) || e2(g[r2], g[r2 + 1], g[r2 + 2]);
  }
  function La(e2) {
    return "string" == typeof e2;
  }
  function Ma(e2) {
    return "function" == typeof e2;
  }
  function Na(e2) {
    return "number" == typeof e2;
  }
  function Oa(e2) {
    return "object" == typeof e2;
  }
  function Pa(e2, t2, r2) {
    return e2 && e2.progress(t2 ? 0 : 1) && r2 && e2.pause();
  }
  function Qa(e2, t2) {
    if (e2.enabled) {
      var r2 = t2(e2);
      r2 && r2.totalTime && (e2.callbackAnimation = r2);
    }
  }
  function fb(e2) {
    return Ke.getComputedStyle(e2);
  }
  function hb(e2, t2) {
    for (var r2 in t2) r2 in e2 || (e2[r2] = t2[r2]);
    return e2;
  }
  function jb(e2, t2) {
    var r2 = t2.d2;
    return e2["offset" + r2] || e2["client" + r2] || 0;
  }
  function kb(e2) {
    var t2, r2 = [], n2 = e2.labels, o2 = e2.duration();
    for (t2 in n2) r2.push(n2[t2] / o2);
    return r2;
  }
  function mb(o2) {
    var i2 = Je.utils.snap(o2), a2 = Array.isArray(o2) && o2.slice(0).sort(function(e2, t2) {
      return e2 - t2;
    });
    return a2 ? function(e2, t2, r2) {
      var n2;
      if (void 0 === r2 && (r2 = 1e-3), !t2) return i2(e2);
      if (0 < t2) {
        for (e2 -= r2, n2 = 0; n2 < a2.length; n2++) if (a2[n2] >= e2) return a2[n2];
        return a2[n2 - 1];
      }
      for (n2 = a2.length, e2 += r2; n2--; ) if (a2[n2] <= e2) return a2[n2];
      return a2[0];
    } : function(e2, t2, r2) {
      void 0 === r2 && (r2 = 1e-3);
      var n2 = i2(e2);
      return !t2 || Math.abs(n2 - e2) < r2 || n2 - e2 < 0 == t2 < 0 ? n2 : i2(t2 < 0 ? e2 - o2 : e2 + o2);
    };
  }
  function ob(t2, r2, e2, n2) {
    return e2.split(",").forEach(function(e3) {
      return t2(r2, e3, n2);
    });
  }
  function pb(e2, t2, r2, n2, o2) {
    return e2.addEventListener(t2, r2, { passive: !n2, capture: !!o2 });
  }
  function qb(e2, t2, r2, n2) {
    return e2.removeEventListener(t2, r2, !!n2);
  }
  function rb(e2, t2, r2) {
    (r2 = r2 && r2.wheelHandler) && (e2(t2, "wheel", r2), e2(t2, "touchmove", r2));
  }
  function vb(e2, t2) {
    if (La(e2)) {
      var r2 = e2.indexOf("="), n2 = ~r2 ? (e2.charAt(r2 - 1) + 1) * parseFloat(e2.substr(r2 + 1)) : 0;
      ~r2 && (e2.indexOf("%") > r2 && (n2 *= t2 / 100), e2 = e2.substr(0, r2 - 1)), e2 = n2 + (e2 in R ? R[e2] * t2 : ~e2.indexOf("%") ? parseFloat(e2) * t2 / 100 : parseFloat(e2) || 0);
    }
    return e2;
  }
  function wb(e2, t2, r2, n2, o2, i2, a2, s2) {
    var l2 = o2.startColor, c2 = o2.endColor, u2 = o2.fontSize, f2 = o2.indent, p2 = o2.fontWeight, d2 = Ge.createElement("div"), g2 = Fa(r2) || "fixed" === z(r2, "pinType"), h2 = -1 !== e2.indexOf("scroller"), v2 = g2 ? Qe : r2, b2 = -1 !== e2.indexOf("start"), m2 = b2 ? l2 : c2, y2 = "border-color:" + m2 + ";font-size:" + u2 + ";color:" + m2 + ";font-weight:" + p2 + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y2 += "position:" + ((h2 || s2) && g2 ? "fixed;" : "absolute;"), !h2 && !s2 && g2 || (y2 += (n2 === je ? S : T) + ":" + (i2 + parseFloat(f2)) + "px;"), a2 && (y2 += "box-sizing:border-box;text-align:left;width:" + a2.offsetWidth + "px;"), d2._isStart = b2, d2.setAttribute("class", "gsap-marker-" + e2 + (t2 ? " marker-" + t2 : "")), d2.style.cssText = y2, d2.innerText = t2 || 0 === t2 ? e2 + "-" + t2 : e2, v2.children[0] ? v2.insertBefore(d2, v2.children[0]) : v2.appendChild(d2), d2._offset = d2["offset" + n2.op.d2], X(d2, 0, n2, b2), d2;
  }
  function Bb() {
    return 34 < pt() - dt && (w = w || requestAnimationFrame(W));
  }
  function Cb() {
    v && v.isPressed && !(v.startX > Qe.clientWidth) || (Ie.cache++, v ? w = w || requestAnimationFrame(W) : W(), dt || q("scrollStart"), dt = pt());
  }
  function Db() {
    y = Ke.innerWidth, m = Ke.innerHeight;
  }
  function Eb() {
    Ie.cache++, tt || h || Ge.fullscreenElement || Ge.webkitFullscreenElement || b && y === Ke.innerWidth && !(Math.abs(Ke.innerHeight - m) > 0.25 * Ke.innerHeight) || c.restart(true);
  }
  function Hb() {
    return qb($, "scrollEnd", Hb) || Bt(true);
  }
  function Kb(e2) {
    for (var t2 = 0; t2 < V.length; t2 += 5) (!e2 || V[t2 + 4] && V[t2 + 4].query === e2) && (V[t2].style.cssText = V[t2 + 1], V[t2].getBBox && V[t2].setAttribute("transform", V[t2 + 2] || ""), V[t2 + 3].uncache = 1);
  }
  function Lb(e2, t2) {
    var r2;
    for (nt = 0; nt < Pt.length; nt++) !(r2 = Pt[nt]) || t2 && r2._ctx !== t2 || (e2 ? r2.kill(1) : r2.revert(true, true));
    t2 && Kb(t2), t2 || q("revert");
  }
  function Mb(e2, t2) {
    Ie.cache++, !t2 && lt || Ie.forEach(function(e3) {
      return Ma(e3) && e3.cacheID++ && (e3.rec = 0);
    }), La(e2) && (Ke.history.scrollRestoration = x = e2);
  }
  function Zb(e2, t2, r2, n2) {
    if (!e2._gsap.swappedIn) {
      for (var o2, i2 = j.length, a2 = t2.style, s2 = e2.style; i2--; ) a2[o2 = j[i2]] = r2[o2];
      a2.position = "absolute" === r2.position ? "absolute" : "relative", "inline" === r2.display && (a2.display = "inline-block"), s2[T] = s2[S] = "auto", a2.flexBasis = r2.flexBasis || "auto", a2.overflow = "visible", a2.boxSizing = "border-box", a2[vt] = jb(e2, He) + Mt, a2[bt] = jb(e2, je) + Mt, a2[_t] = s2[St] = s2.top = s2.left = "0", Rt(n2), s2[vt] = s2.maxWidth = r2[vt], s2[bt] = s2.maxHeight = r2[bt], s2[_t] = r2[_t], e2.parentNode !== t2 && (e2.parentNode.insertBefore(t2, e2), t2.appendChild(e2)), e2._gsap.swappedIn = true;
    }
  }
  function ac(e2) {
    for (var t2 = U.length, r2 = e2.style, n2 = [], o2 = 0; o2 < t2; o2++) n2.push(U[o2], r2[U[o2]]);
    return n2.t = e2, n2;
  }
  function dc(e2, t2, r2, n2, o2, i2, a2, s2, l2, c2, u2, f2, p2) {
    Ma(e2) && (e2 = e2(s2)), La(e2) && "max" === e2.substr(0, 3) && (e2 = f2 + ("=" === e2.charAt(4) ? vb("0" + e2.substr(3), r2) : 0));
    var d2, g2, h2, v2 = p2 ? p2.time() : 0;
    if (p2 && p2.seek(0), Na(e2)) p2 && (e2 = Je.utils.mapRange(p2.scrollTrigger.start, p2.scrollTrigger.end, 0, f2, e2)), a2 && X(a2, r2, n2, true);
    else {
      Ma(t2) && (t2 = t2(s2));
      var b2, m2, y2, x2, w2 = (e2 || "0").split(" ");
      h2 = J(t2) || Qe, (b2 = Ct(h2) || {}) && (b2.left || b2.top) || "none" !== fb(h2).display || (x2 = h2.style.display, h2.style.display = "block", b2 = Ct(h2), x2 ? h2.style.display = x2 : h2.style.removeProperty("display")), m2 = vb(w2[0], b2[n2.d]), y2 = vb(w2[1] || "0", r2), e2 = b2[n2.p] - l2[n2.p] - c2 + m2 + o2 - y2, a2 && X(a2, y2, n2, r2 - y2 < 20 || a2._isStart && 20 < y2), r2 -= r2 - y2;
    }
    if (i2) {
      var _2 = e2 + r2, S2 = i2._isStart;
      d2 = "scroll" + n2.d2, X(i2, _2, n2, S2 && 20 < _2 || !S2 && (u2 ? Math.max(Qe[d2], Ue[d2]) : i2.parentNode[d2]) <= _2 + 1), u2 && (l2 = Ct(a2), u2 && (i2.style[n2.op.p] = l2[n2.op.p] - n2.op.m - i2._offset + Mt));
    }
    return p2 && h2 && (d2 = Ct(h2), p2.seek(f2), g2 = Ct(h2), p2._caScrollDist = d2[n2.p] - g2[n2.p], e2 = e2 / p2._caScrollDist * f2), p2 && p2.seek(v2), p2 ? e2 : Math.round(e2);
  }
  function fc(e2, t2, r2, n2) {
    if (e2.parentNode !== t2) {
      var o2, i2, a2 = e2.style;
      if (t2 === Qe) {
        for (o2 in e2._stOrig = a2.cssText, i2 = fb(e2)) +o2 || Z.test(o2) || !i2[o2] || "string" != typeof a2[o2] || "0" === o2 || (a2[o2] = i2[o2]);
        a2.top = r2, a2.left = n2;
      } else a2.cssText = e2._stOrig;
      Je.core.getCache(e2).uncache = 1, t2.appendChild(e2);
    }
  }
  function gc(r2, e2, n2) {
    var o2 = e2, i2 = o2;
    return function(e3) {
      var t2 = Math.round(r2());
      return t2 !== o2 && t2 !== i2 && 3 < Math.abs(t2 - o2) && 3 < Math.abs(t2 - i2) && (e3 = t2, n2 && n2()), i2 = o2, o2 = e3;
    };
  }
  function hc(c2, e2) {
    function _j(e3, t2, r2, n2, o2) {
      var i2 = _j.tween, a2 = t2.onComplete, s2 = {};
      r2 = r2 || u2();
      var l2 = gc(u2, r2, function() {
        i2.kill(), _j.tween = 0;
      });
      return o2 = n2 && o2 || 0, n2 = n2 || e3 - r2, i2 && i2.kill(), t2[f2] = e3, (t2.modifiers = s2)[f2] = function() {
        return l2(r2 + n2 * i2.ratio + o2 * i2.ratio * i2.ratio);
      }, t2.onUpdate = function() {
        Ie.cache++, W();
      }, t2.onComplete = function() {
        _j.tween = 0, a2 && a2.call(i2);
      }, i2 = _j.tween = Je.to(c2, t2);
    }
    var u2 = K(c2, e2), f2 = "_scroll" + e2.p2;
    return (c2[f2] = u2).wheelHandler = function() {
      return _j.tween && _j.tween.kill() && (_j.tween = 0);
    }, pb(c2, "wheel", u2.wheelHandler), $.isTouch && pb(c2, "touchmove", u2.wheelHandler), _j;
  }
  var Je, s, Ke, Ge, Ue, Qe, l, c, Ze, $e, et, u, tt, rt, f, nt, p, d, g, ot, it, h, v, b, m, y, E, at, x, st, w, lt, ct, ut, ft = 1, pt = Date.now, _ = pt(), dt = 0, gt = 0, ht = Math.abs, S = "right", T = "bottom", vt = "width", bt = "height", mt = "Right", yt = "Left", xt = "Top", wt = "Bottom", _t = "padding", St = "margin", Tt = "Width", D = "Height", Mt = "px", Ct = function _getBounds(e2, t2) {
    var r2 = t2 && "matrix(1, 0, 0, 1, 0, 0)" !== fb(e2)[f] && Je.to(e2, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1), n2 = e2.getBoundingClientRect();
    return r2 && r2.progress(0).kill(), n2;
  }, kt = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" }, Et = { toggleActions: "play", anticipatePin: 0 }, R = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 }, X = function _positionMarker(e2, t2, r2, n2) {
    var o2 = { display: "block" }, i2 = r2[n2 ? "os2" : "p2"], a2 = r2[n2 ? "p2" : "os2"];
    e2._isFlipped = n2, o2[r2.a + "Percent"] = n2 ? -100 : 0, o2[r2.a] = n2 ? "1px" : 0, o2["border" + i2 + Tt] = 1, o2["border" + a2 + Tt] = 0, o2[r2.p] = t2 + "px", Je.set(e2, o2);
  }, Pt = [], Ot = {}, Y = {}, I = [], q = function _dispatch(e2) {
    return Y[e2] && Y[e2].map(function(e3) {
      return e3();
    }) || I;
  }, V = [], At = 0, Bt = function _refreshAll(e2, t2) {
    if (!dt || e2) {
      lt = $.isRefreshing = true, Ie.forEach(function(e3) {
        return Ma(e3) && e3.cacheID++ && (e3.rec = e3());
      });
      var r2 = q("refreshInit");
      ot && $.sort(), t2 || Lb(), Ie.forEach(function(e3) {
        Ma(e3) && (e3.smooth && (e3.target.style.scrollBehavior = "auto"), e3(0));
      }), Pt.slice(0).forEach(function(e3) {
        return e3.refresh();
      }), Pt.forEach(function(e3, t3) {
        if (e3._subPinOffset && e3.pin) {
          var r3 = e3.vars.horizontal ? "offsetWidth" : "offsetHeight", n2 = e3.pin[r3];
          e3.revert(true, 1), e3.adjustPinSpacing(e3.pin[r3] - n2), e3.refresh();
        }
      }), Pt.forEach(function(e3) {
        return "max" === e3.vars.end && e3.setPositions(e3.start, Math.max(e3.start + 1, Ja(e3.scroller, e3._dir)));
      }), r2.forEach(function(e3) {
        return e3 && e3.render && e3.render(-1);
      }), Ie.forEach(function(e3) {
        Ma(e3) && (e3.smooth && requestAnimationFrame(function() {
          return e3.target.style.scrollBehavior = "smooth";
        }), e3.rec && e3(e3.rec));
      }), Mb(x, 1), c.pause(), At++, W(lt = 2), Pt.forEach(function(e3) {
        return Ma(e3.vars.onRefresh) && e3.vars.onRefresh(e3);
      }), lt = $.isRefreshing = false, q("refresh");
    } else pb($, "scrollEnd", Hb);
  }, H = 0, Dt = 1, W = function _updateAll(e2) {
    if (!lt || 2 === e2) {
      $.isUpdating = true, ut && ut.update(0);
      var t2 = Pt.length, r2 = pt(), n2 = 50 <= r2 - _, o2 = t2 && Pt[0].scroll();
      if (Dt = o2 < H ? -1 : 1, lt || (H = o2), n2 && (dt && !rt && 200 < r2 - dt && (dt = 0, q("scrollEnd")), et = _, _ = r2), Dt < 0) {
        for (nt = t2; 0 < nt--; ) Pt[nt] && Pt[nt].update(0, n2);
        Dt = 1;
      } else for (nt = 0; nt < t2; nt++) Pt[nt] && Pt[nt].update(0, n2);
      $.isUpdating = false;
    }
    w = 0;
  }, j = ["left", "top", T, S, St + wt, St + mt, St + xt, St + yt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], U = j.concat([vt, bt, "boxSizing", "max" + Tt, "max" + D, "position", St, _t, _t + xt, _t + mt, _t + wt, _t + yt]), Q = /([A-Z])/g, Rt = function _setState(e2) {
    if (e2) {
      var t2, r2, n2 = e2.t.style, o2 = e2.length, i2 = 0;
      for ((e2.t._gsap || Je.core.getCache(e2.t)).uncache = 1; i2 < o2; i2 += 2) r2 = e2[i2 + 1], t2 = e2[i2], r2 ? n2[t2] = r2 : n2[t2] && n2.removeProperty(t2.replace(Q, "-$1").toLowerCase());
    }
  }, Lt = { left: 0, top: 0 }, Z = /(webkit|moz|length|cssText|inset)/i, $ = (ScrollTrigger2.prototype.init = function init(M2, C2) {
    if (this.progress = this.start = 0, this.vars && this.kill(true, true), gt) {
      var k2, n2, d2, E2, P2, O2, A2, B2, D2, R2, L2, e2, F2, X2, Y2, I2, q2, t2, N2, b2, V2, H2, m2, W2, y2, j2, x2, r2, w2, _2, G2, o2, g2, U2, Q2, Z2, $2, S2, i2, T2 = (M2 = hb(La(M2) || Na(M2) || M2.nodeType ? { trigger: M2 } : M2, Et)).onUpdate, ee2 = M2.toggleClass, a2 = M2.id, te2 = M2.onToggle, re2 = M2.onRefresh, ne2 = M2.scrub, oe = M2.trigger, ie = M2.pin, ae = M2.pinSpacing, se = M2.invalidateOnRefresh, le = M2.anticipatePin, s2 = M2.onScrubComplete, h2 = M2.onSnapComplete, ce = M2.once, ue = M2.snap, fe = M2.pinReparent, l2 = M2.pinSpacer, pe = M2.containerAnimation, de = M2.fastScrollEnd, ge = M2.preventOverlaps, he = M2.horizontal || M2.containerAnimation && false !== M2.horizontal ? He : je, ve = !ne2 && 0 !== ne2, be = J(M2.scroller || Ke), c2 = Je.core.getCache(be), me = Fa(be), ye = "fixed" === ("pinType" in M2 ? M2.pinType : z(be, "pinType") || me && "fixed"), xe = [M2.onEnter, M2.onLeave, M2.onEnterBack, M2.onLeaveBack], we = ve && M2.toggleActions.split(" "), u2 = "markers" in M2 ? M2.markers : Et.markers, _e = me ? 0 : parseFloat(fb(be)["border" + he.p2 + Tt]) || 0, Se = this, Te = M2.onRefreshInit && function() {
        return M2.onRefreshInit(Se);
      }, Me2 = function _getSizeFunc(e3, t3, r3) {
        var n3 = r3.d, o3 = r3.d2, i3 = r3.a;
        return (i3 = z(e3, "getBoundingClientRect")) ? function() {
          return i3()[n3];
        } : function() {
          return (t3 ? Ke["inner" + o3] : e3["client" + o3]) || 0;
        };
      }(be, me, he), Ce2 = function _getOffsetsFunc(e3, t3) {
        return !t3 || ~qe.indexOf(e3) ? Ga(e3) : function() {
          return Lt;
        };
      }(be, me), ke2 = 0, Ee2 = 0, Pe2 = K(be, he);
      if (at(Se), Se._dir = he, le *= 45, Se.scroller = be, Se.scroll = pe ? pe.time.bind(pe) : Pe2, E2 = Pe2(), Se.vars = M2, C2 = C2 || M2.animation, "refreshPriority" in M2 && (ot = 1, -9999 === M2.refreshPriority && (ut = Se)), c2.tweenScroll = c2.tweenScroll || { top: hc(be, je), left: hc(be, He) }, Se.tweenTo = k2 = c2.tweenScroll[he.p], Se.scrubDuration = function(e3) {
        (o2 = Na(e3) && e3) ? G2 ? G2.duration(e3) : G2 = Je.to(C2, { ease: "expo", totalProgress: "+=0.001", duration: o2, paused: true, onComplete: function onComplete() {
          return s2 && s2(Se);
        } }) : (G2 && G2.progress(1).kill(), G2 = 0);
      }, C2 && (C2.vars.lazy = false, C2._initted || false !== C2.vars.immediateRender && false !== M2.immediateRender && C2.duration() && C2.render(0, true, true), Se.animation = C2.pause(), (C2.scrollTrigger = Se).scrubDuration(ne2), G2 && G2.resetTo && G2.resetTo("totalProgress", 0), w2 = 0, a2 = a2 || C2.vars.id), Pt.push(Se), ue && (Oa(ue) && !ue.push || (ue = { snapTo: ue }), "scrollBehavior" in Qe.style && Je.set(me ? [Qe, Ue] : be, { scrollBehavior: "auto" }), Ie.forEach(function(e3) {
        return Ma(e3) && e3.target === (me ? Ge.scrollingElement || Ue : be) && (e3.smooth = false);
      }), d2 = Ma(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? /* @__PURE__ */ function _getClosestLabel(t3) {
        return function(e3) {
          return Je.utils.snap(kb(t3), e3);
        };
      }(C2) : "labelsDirectional" === ue.snapTo ? /* @__PURE__ */ function _getLabelAtDirection(r3) {
        return function(e3, t3) {
          return mb(kb(r3))(e3, t3.direction);
        };
      }(C2) : false !== ue.directional ? function(e3, t3) {
        return mb(ue.snapTo)(e3, pt() - Ee2 < 500 ? 0 : t3.direction);
      } : Je.utils.snap(ue.snapTo), g2 = ue.duration || { min: 0.1, max: 2 }, g2 = Oa(g2) ? $e(g2.min, g2.max) : $e(g2, g2), U2 = Je.delayedCall(ue.delay || o2 / 2 || 0.1, function() {
        var e3 = Pe2(), t3 = pt() - Ee2 < 500, r3 = k2.tween;
        if (!(t3 || Math.abs(Se.getVelocity()) < 10) || r3 || rt || ke2 === e3) Se.isActive && ke2 !== e3 && U2.restart(true);
        else {
          var n3 = (e3 - O2) / F2, o3 = C2 && !ve ? C2.totalProgress() : n3, i3 = t3 ? 0 : (o3 - _2) / (pt() - et) * 1e3 || 0, a3 = Je.utils.clamp(-n3, 1 - n3, ht(i3 / 2) * i3 / 0.185), s3 = n3 + (false === ue.inertia ? 0 : a3), l3 = $e(0, 1, d2(s3, Se)), c3 = Math.round(O2 + l3 * F2), u3 = ue.onStart, f3 = ue.onInterrupt, p3 = ue.onComplete;
          if (e3 <= A2 && O2 <= e3 && c3 !== e3) {
            if (r3 && !r3._initted && r3.data <= ht(c3 - e3)) return;
            false === ue.inertia && (a3 = l3 - n3), k2(c3, { duration: g2(ht(0.185 * Math.max(ht(s3 - o3), ht(l3 - o3)) / i3 / 0.05 || 0)), ease: ue.ease || "power3", data: ht(c3 - e3), onInterrupt: function onInterrupt() {
              return U2.restart(true) && f3 && f3(Se);
            }, onComplete: function onComplete() {
              Se.update(), ke2 = Pe2(), w2 = _2 = C2 && !ve ? C2.totalProgress() : Se.progress, h2 && h2(Se), p3 && p3(Se);
            } }, e3, a3 * F2, c3 - e3 - a3 * F2), u3 && u3(Se, k2.tween);
          }
        }
      }).pause()), a2 && (Ot[a2] = Se), i2 = (i2 = (oe = Se.trigger = J(oe || ie)) && oe._gsap && oe._gsap.stRevert) && i2(Se), ie = true === ie ? oe : J(ie), La(ee2) && (ee2 = { targets: oe, className: ee2 }), ie && (false === ae || ae === St || (ae = !(!ae && ie.parentNode && ie.parentNode.style && "flex" === fb(ie.parentNode).display) && _t), Se.pin = ie, (n2 = Je.core.getCache(ie)).spacer ? X2 = n2.pinState : (l2 && ((l2 = J(l2)) && !l2.nodeType && (l2 = l2.current || l2.nativeElement), n2.spacerIsNative = !!l2, l2 && (n2.spacerState = ac(l2))), n2.spacer = q2 = l2 || Ge.createElement("div"), q2.classList.add("pin-spacer"), a2 && q2.classList.add("pin-spacer-" + a2), n2.pinState = X2 = ac(ie)), false !== M2.force3D && Je.set(ie, { force3D: true }), Se.spacer = q2 = n2.spacer, r2 = fb(ie), m2 = r2[ae + he.os2], N2 = Je.getProperty(ie), b2 = Je.quickSetter(ie, he.a, Mt), Zb(ie, q2, r2), I2 = ac(ie)), u2) {
        e2 = Oa(u2) ? hb(u2, kt) : kt, R2 = wb("scroller-start", a2, be, he, e2, 0), L2 = wb("scroller-end", a2, be, he, e2, 0, R2), t2 = R2["offset" + he.op.d2];
        var f2 = J(z(be, "content") || be);
        B2 = this.markerStart = wb("start", a2, f2, he, e2, t2, 0, pe), D2 = this.markerEnd = wb("end", a2, f2, he, e2, t2, 0, pe), pe && (S2 = Je.quickSetter([B2, D2], he.a, Mt)), ye || qe.length && true === z(be, "fixedMarkers") || (function _makePositionable(e3) {
          var t3 = fb(e3).position;
          e3.style.position = "absolute" === t3 || "fixed" === t3 ? t3 : "relative";
        }(me ? Qe : be), Je.set([R2, L2], { force3D: true }), y2 = Je.quickSetter(R2, he.a, Mt), x2 = Je.quickSetter(L2, he.a, Mt));
      }
      if (pe) {
        var p2 = pe.vars.onUpdate, v2 = pe.vars.onUpdateParams;
        pe.eventCallback("onUpdate", function() {
          Se.update(0, 0, 1), p2 && p2.apply(pe, v2 || []);
        });
      }
      Se.previous = function() {
        return Pt[Pt.indexOf(Se) - 1];
      }, Se.next = function() {
        return Pt[Pt.indexOf(Se) + 1];
      }, Se.revert = function(e3, t3) {
        if (!t3) return Se.kill(true);
        var r3 = false !== e3 || !Se.enabled, n3 = tt;
        r3 !== Se.isReverted && (r3 && (Z2 = Math.max(Pe2(), Se.scroll.rec || 0), Q2 = Se.progress, $2 = C2 && C2.progress()), B2 && [B2, D2, R2, L2].forEach(function(e4) {
          return e4.style.display = r3 ? "none" : "block";
        }), r3 && (tt = Se).update(r3), !ie || fe && Se.isActive || (r3 ? function _swapPinOut(e4, t4, r4) {
          Rt(r4);
          var n4 = e4._gsap;
          if (n4.spacerIsNative) Rt(n4.spacerState);
          else if (e4._gsap.swappedIn) {
            var o3 = t4.parentNode;
            o3 && (o3.insertBefore(e4, t4), o3.removeChild(t4));
          }
          e4._gsap.swappedIn = false;
        }(ie, q2, X2) : Zb(ie, q2, fb(ie), W2)), r3 || Se.update(r3), tt = n3, Se.isReverted = r3);
      }, Se.refresh = function(e3, t3) {
        if (!tt && Se.enabled || t3) if (ie && e3 && dt) pb(ScrollTrigger2, "scrollEnd", Hb);
        else {
          !lt && Te && Te(Se), tt = Se, Ee2 = pt(), k2.tween && (k2.tween.kill(), k2.tween = 0), G2 && G2.pause(), se && C2 && C2.revert({ kill: false }).invalidate(), Se.isReverted || Se.revert(true, true), Se._subPinOffset = false;
          for (var r3, n3, o3, i3, a3, s3, l3, c3, u3, f3, p3, d3 = Me2(), g3 = Ce2(), h3 = pe ? pe.duration() : Ja(be, he), v3 = F2 <= 0.01, b3 = 0, m3 = 0, y3 = M2.end, x3 = M2.endTrigger || oe, w3 = M2.start || (0 !== M2.start && oe ? ie ? "0 0" : "0 100%" : 0), _3 = Se.pinnedContainer = M2.pinnedContainer && J(M2.pinnedContainer), S3 = oe && Math.max(0, Pt.indexOf(Se)) || 0, T3 = S3; T3--; ) (s3 = Pt[T3]).end || s3.refresh(0, 1) || (tt = Se), !(l3 = s3.pin) || l3 !== oe && l3 !== ie && l3 !== _3 || s3.isReverted || ((f3 = f3 || []).unshift(s3), s3.revert(true, true)), s3 !== Pt[T3] && (S3--, T3--);
          for (Ma(w3) && (w3 = w3(Se)), O2 = dc(w3, oe, d3, he, Pe2(), B2, R2, Se, g3, _e, ye, h3, pe) || (ie ? -1e-3 : 0), Ma(y3) && (y3 = y3(Se)), La(y3) && !y3.indexOf("+=") && (~y3.indexOf(" ") ? y3 = (La(w3) ? w3.split(" ")[0] : "") + y3 : (b3 = vb(y3.substr(2), d3), y3 = La(w3) ? w3 : (pe ? Je.utils.mapRange(0, pe.duration(), pe.scrollTrigger.start, pe.scrollTrigger.end, O2) : O2) + b3, x3 = oe)), A2 = Math.max(O2, dc(y3 || (x3 ? "100% 0" : h3), x3, d3, he, Pe2() + b3, D2, L2, Se, g3, _e, ye, h3, pe)) || -1e-3, F2 = A2 - O2 || (O2 -= 0.01) && 1e-3, b3 = 0, T3 = S3; T3--; ) (l3 = (s3 = Pt[T3]).pin) && s3.start - s3._pinPush <= O2 && !pe && 0 < s3.end && (r3 = s3.end - s3.start, (l3 === oe && s3.start - s3._pinPush < O2 || l3 === _3) && !Na(w3) && (b3 += r3 * (1 - s3.progress)), l3 === ie && (m3 += r3));
          if (O2 += b3, A2 += b3, v3 && (Q2 = Je.utils.clamp(0, 1, Je.utils.normalize(O2, A2, Z2))), Se._pinPush = m3, B2 && b3 && ((r3 = {})[he.a] = "+=" + b3, _3 && (r3[he.p] = "-=" + Pe2()), Je.set([B2, D2], r3)), ie) r3 = fb(ie), i3 = he === je, o3 = Pe2(), V2 = parseFloat(N2(he.a)) + m3, !h3 && 1 < A2 && ((p3 = { style: p3 = (me ? Ge.scrollingElement || Ue : be).style, value: p3["overflow" + he.a.toUpperCase()] }).style["overflow" + he.a.toUpperCase()] = "scroll"), Zb(ie, q2, r3), I2 = ac(ie), n3 = Ct(ie, true), c3 = ye && K(be, i3 ? He : je)(), ae && ((W2 = [ae + he.os2, F2 + m3 + Mt]).t = q2, (T3 = ae === _t ? jb(ie, he) + F2 + m3 : 0) && W2.push(he.d, T3 + Mt), Rt(W2), _3 && Pt.forEach(function(e4) {
            e4.pin === _3 && false !== e4.vars.pinSpacing && (e4._subPinOffset = true);
          }), ye && Pe2(Z2)), ye && ((a3 = { top: n3.top + (i3 ? o3 - O2 : c3) + Mt, left: n3.left + (i3 ? c3 : o3 - O2) + Mt, boxSizing: "border-box", position: "fixed" })[vt] = a3.maxWidth = Math.ceil(n3.width) + Mt, a3[bt] = a3.maxHeight = Math.ceil(n3.height) + Mt, a3[St] = a3[St + xt] = a3[St + mt] = a3[St + wt] = a3[St + yt] = "0", a3[_t] = r3[_t], a3[_t + xt] = r3[_t + xt], a3[_t + mt] = r3[_t + mt], a3[_t + wt] = r3[_t + wt], a3[_t + yt] = r3[_t + yt], Y2 = function _copyState(e4, t4, r4) {
            for (var n4, o4 = [], i4 = e4.length, a4 = r4 ? 8 : 0; a4 < i4; a4 += 2) n4 = e4[a4], o4.push(n4, n4 in t4 ? t4[n4] : e4[a4 + 1]);
            return o4.t = e4.t, o4;
          }(X2, a3, fe), lt && Pe2(0)), C2 ? (u3 = C2._initted, it(1), C2.render(C2.duration(), true, true), H2 = N2(he.a) - V2 + F2 + m3, j2 = 1 < Math.abs(F2 - H2), ye && j2 && Y2.splice(Y2.length - 2, 2), C2.render(0, true, true), u3 || C2.invalidate(true), C2.parent || C2.totalTime(C2.totalTime()), it(0)) : H2 = F2, p3 && (p3.value ? p3.style["overflow" + he.a.toUpperCase()] = p3.value : p3.style.removeProperty("overflow-" + he.a));
          else if (oe && Pe2() && !pe) for (n3 = oe.parentNode; n3 && n3 !== Qe; ) n3._pinOffset && (O2 -= n3._pinOffset, A2 -= n3._pinOffset), n3 = n3.parentNode;
          f3 && f3.forEach(function(e4) {
            return e4.revert(false, true);
          }), Se.start = O2, Se.end = A2, E2 = P2 = lt ? Z2 : Pe2(), pe || lt || (E2 < Z2 && Pe2(Z2), Se.scroll.rec = 0), Se.revert(false, true), U2 && (ke2 = -1, Se.isActive && Pe2(O2 + F2 * Q2), U2.restart(true)), tt = 0, C2 && ve && (C2._initted || $2) && C2.progress() !== $2 && C2.progress($2, true).render(C2.time(), true, true), (v3 || Q2 !== Se.progress || pe) && (C2 && !ve && C2.totalProgress(pe && O2 < -1e-3 && !Q2 ? Je.utils.normalize(O2, A2, 0) : Q2, true), Se.progress = (E2 - O2) / F2 === Q2 ? 0 : Q2), ie && ae && (q2._pinOffset = Math.round(Se.progress * H2)), G2 && G2.invalidate(), re2 && !lt && re2(Se);
        }
      }, Se.getVelocity = function() {
        return (Pe2() - P2) / (pt() - et) * 1e3 || 0;
      }, Se.endAnimation = function() {
        Pa(Se.callbackAnimation), C2 && (G2 ? G2.progress(1) : C2.paused() ? ve || Pa(C2, Se.direction < 0, 1) : Pa(C2, C2.reversed()));
      }, Se.labelToScroll = function(e3) {
        return C2 && C2.labels && (O2 || Se.refresh() || O2) + C2.labels[e3] / C2.duration() * F2 || 0;
      }, Se.getTrailing = function(t3) {
        var e3 = Pt.indexOf(Se), r3 = 0 < Se.direction ? Pt.slice(0, e3).reverse() : Pt.slice(e3 + 1);
        return (La(t3) ? r3.filter(function(e4) {
          return e4.vars.preventOverlaps === t3;
        }) : r3).filter(function(e4) {
          return 0 < Se.direction ? e4.end <= O2 : e4.start >= A2;
        });
      }, Se.update = function(e3, t3, r3) {
        if (!pe || r3 || e3) {
          var n3, o3, i3, a3, s3, l3, c3, u3 = true === lt ? Z2 : Se.scroll(), f3 = e3 ? 0 : (u3 - O2) / F2, p3 = f3 < 0 ? 0 : 1 < f3 ? 1 : f3 || 0, d3 = Se.progress;
          if (t3 && (P2 = E2, E2 = pe ? Pe2() : u3, ue && (_2 = w2, w2 = C2 && !ve ? C2.totalProgress() : p3)), le && !p3 && ie && !tt && !ft && dt && O2 < u3 + (u3 - P2) / (pt() - et) * le && (p3 = 1e-4), p3 !== d3 && Se.enabled) {
            if (a3 = (s3 = (n3 = Se.isActive = !!p3 && p3 < 1) != (!!d3 && d3 < 1)) || !!p3 != !!d3, Se.direction = d3 < p3 ? 1 : -1, Se.progress = p3, a3 && !tt && (o3 = p3 && !d3 ? 0 : 1 === p3 ? 1 : 1 === d3 ? 2 : 3, ve && (i3 = !s3 && "none" !== we[o3 + 1] && we[o3 + 1] || we[o3], c3 = C2 && ("complete" === i3 || "reset" === i3 || i3 in C2))), ge && (s3 || c3) && (c3 || ne2 || !C2) && (Ma(ge) ? ge(Se) : Se.getTrailing(ge).forEach(function(e4) {
              return e4.endAnimation();
            })), ve || (!G2 || tt || ft ? C2 && C2.totalProgress(p3, !!tt) : (G2._dp._time - G2._start !== G2._time && G2.render(G2._dp._time - G2._start), G2.resetTo ? G2.resetTo("totalProgress", p3, C2._tTime / C2._tDur) : (G2.vars.totalProgress = p3, G2.invalidate().restart()))), ie) if (e3 && ae && (q2.style[ae + he.os2] = m2), ye) {
              if (a3) {
                if (l3 = !e3 && d3 < p3 && u3 < A2 + 1 && u3 + 1 >= Ja(be, he), fe) if (e3 || !n3 && !l3) fc(ie, q2);
                else {
                  var g3 = Ct(ie, true), h3 = u3 - O2;
                  fc(ie, Qe, g3.top + (he === je ? h3 : 0) + Mt, g3.left + (he === je ? 0 : h3) + Mt);
                }
                Rt(n3 || l3 ? Y2 : I2), j2 && p3 < 1 && n3 || b2(V2 + (1 !== p3 || l3 ? 0 : H2));
              }
            } else b2(Ca(V2 + H2 * p3));
            !ue || k2.tween || tt || ft || U2.restart(true), ee2 && (s3 || ce && p3 && (p3 < 1 || !st)) && Ze(ee2.targets).forEach(function(e4) {
              return e4.classList[n3 || ce ? "add" : "remove"](ee2.className);
            }), !T2 || ve || e3 || T2(Se), a3 && !tt ? (ve && (c3 && ("complete" === i3 ? C2.pause().totalProgress(1) : "reset" === i3 ? C2.restart(true).pause() : "restart" === i3 ? C2.restart(true) : C2[i3]()), T2 && T2(Se)), !s3 && st || (te2 && s3 && Qa(Se, te2), xe[o3] && Qa(Se, xe[o3]), ce && (1 === p3 ? Se.kill(false, 1) : xe[o3] = 0), s3 || xe[o3 = 1 === p3 ? 1 : 3] && Qa(Se, xe[o3])), de && !n3 && Math.abs(Se.getVelocity()) > (Na(de) ? de : 2500) && (Pa(Se.callbackAnimation), G2 ? G2.progress(1) : Pa(C2, "reverse" === i3 ? 1 : !p3, 1))) : ve && T2 && !tt && T2(Se);
          }
          if (x2) {
            var v3 = pe ? u3 / pe.duration() * (pe._caScrollDist || 0) : u3;
            y2(v3 + (R2._isFlipped ? 1 : 0)), x2(v3);
          }
          S2 && S2(-u3 / pe.duration() * (pe._caScrollDist || 0));
        }
      }, Se.enable = function(e3, t3) {
        Se.enabled || (Se.enabled = true, pb(be, "resize", Eb), pb(me ? Ge : be, "scroll", Cb), Te && pb(ScrollTrigger2, "refreshInit", Te), false !== e3 && (Se.progress = Q2 = 0, E2 = P2 = ke2 = Pe2()), false !== t3 && Se.refresh());
      }, Se.getTween = function(e3) {
        return e3 && k2 ? k2.tween : G2;
      }, Se.setPositions = function(e3, t3) {
        ie && (V2 += e3 - O2, H2 += t3 - e3 - F2, ae === _t && Se.adjustPinSpacing(t3 - e3 - F2)), Se.start = O2 = e3, Se.end = A2 = t3, F2 = t3 - e3, Se.update();
      }, Se.adjustPinSpacing = function(e3) {
        if (W2 && e3) {
          var t3 = W2.indexOf(he.d) + 1;
          W2[t3] = parseFloat(W2[t3]) + e3 + Mt, W2[1] = parseFloat(W2[1]) + e3 + Mt, Rt(W2);
        }
      }, Se.disable = function(e3, t3) {
        if (Se.enabled && (false !== e3 && Se.revert(true, true), Se.enabled = Se.isActive = false, t3 || G2 && G2.pause(), Z2 = 0, n2 && (n2.uncache = 1), Te && qb(ScrollTrigger2, "refreshInit", Te), U2 && (U2.pause(), k2.tween && k2.tween.kill() && (k2.tween = 0)), !me)) {
          for (var r3 = Pt.length; r3--; ) if (Pt[r3].scroller === be && Pt[r3] !== Se) return;
          qb(be, "resize", Eb), qb(be, "scroll", Cb);
        }
      }, Se.kill = function(e3, t3) {
        Se.disable(e3, t3), G2 && !t3 && G2.kill(), a2 && delete Ot[a2];
        var r3 = Pt.indexOf(Se);
        0 <= r3 && Pt.splice(r3, 1), r3 === nt && 0 < Dt && nt--, r3 = 0, Pt.forEach(function(e4) {
          return e4.scroller === Se.scroller && (r3 = 1);
        }), r3 || lt || (Se.scroll.rec = 0), C2 && (C2.scrollTrigger = null, e3 && C2.revert({ kill: false }), t3 || C2.kill()), B2 && [B2, D2, R2, L2].forEach(function(e4) {
          return e4.parentNode && e4.parentNode.removeChild(e4);
        }), ut === Se && (ut = 0), ie && (n2 && (n2.uncache = 1), r3 = 0, Pt.forEach(function(e4) {
          return e4.pin === ie && r3++;
        }), r3 || (n2.spacer = 0)), M2.onKill && M2.onKill(Se);
      }, Se.enable(false, false), i2 && i2(Se), C2 && C2.add && !F2 ? Je.delayedCall(0.01, function() {
        return O2 || A2 || Se.refresh();
      }) && (F2 = 0.01) && (O2 = A2 = 0) : Se.refresh(), ie && function _queueRefreshAll() {
        if (ct !== At) {
          var e3 = ct = At;
          requestAnimationFrame(function() {
            return e3 === At && Bt(true);
          });
        }
      }();
    } else this.update = this.refresh = this.kill = Ba;
  }, ScrollTrigger2.register = function register(e2) {
    return s || (Je = e2 || Ea(), Da() && window.document && ScrollTrigger2.enable(), s = gt), s;
  }, ScrollTrigger2.defaults = function defaults(e2) {
    if (e2) for (var t2 in e2) Et[t2] = e2[t2];
    return Et;
  }, ScrollTrigger2.disable = function disable(t2, r2) {
    gt = 0, Pt.forEach(function(e3) {
      return e3[r2 ? "kill" : "disable"](t2);
    }), qb(Ke, "wheel", Cb), qb(Ge, "scroll", Cb), clearInterval(u), qb(Ge, "touchcancel", Ba), qb(Qe, "touchstart", Ba), ob(qb, Ge, "pointerdown,touchstart,mousedown", za), ob(qb, Ge, "pointerup,touchend,mouseup", Aa), c.kill(), Ka(qb);
    for (var e2 = 0; e2 < Ie.length; e2 += 3) rb(qb, Ie[e2], Ie[e2 + 1]), rb(qb, Ie[e2], Ie[e2 + 2]);
  }, ScrollTrigger2.enable = function enable() {
    if (Ke = window, Ge = document, Ue = Ge.documentElement, Qe = Ge.body, Je && (Ze = Je.utils.toArray, $e = Je.utils.clamp, at = Je.core.context || Ba, it = Je.core.suppressOverwrites || Ba, x = Ke.history.scrollRestoration || "auto", H = Ke.pageYOffset, Je.core.globals("ScrollTrigger", ScrollTrigger2), Qe)) {
      gt = 1, function _rafBugFix() {
        return gt && requestAnimationFrame(_rafBugFix);
      }(), k.register(Je), ScrollTrigger2.isTouch = k.isTouch, E = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), pb(Ke, "wheel", Cb), l = [Ke, Ge, Ue, Qe], Je.matchMedia ? (ScrollTrigger2.matchMedia = function(e3) {
        var t3, r3 = Je.matchMedia();
        for (t3 in e3) r3.add(t3, e3[t3]);
        return r3;
      }, Je.addEventListener("matchMediaInit", function() {
        return Lb();
      }), Je.addEventListener("matchMediaRevert", function() {
        return Kb();
      }), Je.addEventListener("matchMedia", function() {
        Bt(0, 1), q("matchMedia");
      }), Je.matchMedia("(orientation: portrait)", function() {
        return Db(), Db;
      })) : console.warn("Requires GSAP 3.11.0 or later"), Db(), pb(Ge, "scroll", Cb);
      var e2, t2, r2 = Qe.style, n2 = r2.borderTopStyle, o2 = Je.core.Animation.prototype;
      for (o2.revert || Object.defineProperty(o2, "revert", { value: function value() {
        return this.time(-0.01, true);
      } }), r2.borderTopStyle = "solid", e2 = Ct(Qe), je.m = Math.round(e2.top + je.sc()) || 0, He.m = Math.round(e2.left + He.sc()) || 0, n2 ? r2.borderTopStyle = n2 : r2.removeProperty("border-top-style"), u = setInterval(Bb, 250), Je.delayedCall(0.5, function() {
        return ft = 0;
      }), pb(Ge, "touchcancel", Ba), pb(Qe, "touchstart", Ba), ob(pb, Ge, "pointerdown,touchstart,mousedown", za), ob(pb, Ge, "pointerup,touchend,mouseup", Aa), f = Je.utils.checkPrefix("transform"), U.push(f), s = pt(), c = Je.delayedCall(0.2, Bt).pause(), g = [Ge, "visibilitychange", function() {
        var e3 = Ke.innerWidth, t3 = Ke.innerHeight;
        Ge.hidden ? (p = e3, d = t3) : p === e3 && d === t3 || Eb();
      }, Ge, "DOMContentLoaded", Bt, Ke, "load", Bt, Ke, "resize", Eb], Ka(pb), Pt.forEach(function(e3) {
        return e3.enable(0, 1);
      }), t2 = 0; t2 < Ie.length; t2 += 3) rb(qb, Ie[t2], Ie[t2 + 1]), rb(qb, Ie[t2], Ie[t2 + 2]);
    }
  }, ScrollTrigger2.config = function config(e2) {
    "limitCallbacks" in e2 && (st = !!e2.limitCallbacks);
    var t2 = e2.syncInterval;
    t2 && clearInterval(u) || (u = t2) && setInterval(Bb, t2), "ignoreMobileResize" in e2 && (b = 1 === ScrollTrigger2.isTouch && e2.ignoreMobileResize), "autoRefreshEvents" in e2 && (Ka(qb) || Ka(pb, e2.autoRefreshEvents || "none"), h = -1 === (e2.autoRefreshEvents + "").indexOf("resize"));
  }, ScrollTrigger2.scrollerProxy = function scrollerProxy(e2, t2) {
    var r2 = J(e2), n2 = Ie.indexOf(r2), o2 = Fa(r2);
    ~n2 && Ie.splice(n2, o2 ? 6 : 2), t2 && (o2 ? qe.unshift(Ke, t2, Qe, t2, Ue, t2) : qe.unshift(r2, t2));
  }, ScrollTrigger2.clearMatchMedia = function clearMatchMedia(t2) {
    Pt.forEach(function(e2) {
      return e2._ctx && e2._ctx.query === t2 && e2._ctx.kill(true, true);
    });
  }, ScrollTrigger2.isInViewport = function isInViewport(e2, t2, r2) {
    var n2 = (La(e2) ? J(e2) : e2).getBoundingClientRect(), o2 = n2[r2 ? vt : bt] * t2 || 0;
    return r2 ? 0 < n2.right - o2 && n2.left + o2 < Ke.innerWidth : 0 < n2.bottom - o2 && n2.top + o2 < Ke.innerHeight;
  }, ScrollTrigger2.positionInViewport = function positionInViewport(e2, t2, r2) {
    La(e2) && (e2 = J(e2));
    var n2 = e2.getBoundingClientRect(), o2 = n2[r2 ? vt : bt], i2 = null == t2 ? o2 / 2 : t2 in R ? R[t2] * o2 : ~t2.indexOf("%") ? parseFloat(t2) * o2 / 100 : parseFloat(t2) || 0;
    return r2 ? (n2.left + i2) / Ke.innerWidth : (n2.top + i2) / Ke.innerHeight;
  }, ScrollTrigger2.killAll = function killAll(e2) {
    if (Pt.slice(0).forEach(function(e3) {
      return "ScrollSmoother" !== e3.vars.id && e3.kill();
    }), true !== e2) {
      var t2 = Y.killAll || [];
      Y = {}, t2.forEach(function(e3) {
        return e3();
      });
    }
  }, ScrollTrigger2);
  function ScrollTrigger2(e2, t2) {
    s || ScrollTrigger2.register(Je) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e2, t2);
  }
  $.version = "3.11.5", $.saveStyles = function(e2) {
    return e2 ? Ze(e2).forEach(function(e3) {
      if (e3 && e3.style) {
        var t2 = V.indexOf(e3);
        0 <= t2 && V.splice(t2, 5), V.push(e3, e3.style.cssText, e3.getBBox && e3.getAttribute("transform"), Je.core.getCache(e3), at());
      }
    }) : V;
  }, $.revert = function(e2, t2) {
    return Lb(!e2, t2);
  }, $.create = function(e2, t2) {
    return new $(e2, t2);
  }, $.refresh = function(e2) {
    return e2 ? Eb() : (s || $.register()) && Bt(true);
  }, $.update = function(e2) {
    return ++Ie.cache && W(true === e2 ? 2 : 0);
  }, $.clearScrollMemory = Mb, $.maxScroll = function(e2, t2) {
    return Ja(e2, t2 ? He : je);
  }, $.getScrollFunc = function(e2, t2) {
    return K(J(e2), t2 ? He : je);
  }, $.getById = function(e2) {
    return Ot[e2];
  }, $.getAll = function() {
    return Pt.filter(function(e2) {
      return "ScrollSmoother" !== e2.vars.id;
    });
  }, $.isScrolling = function() {
    return !!dt;
  }, $.snapDirectional = mb, $.addEventListener = function(e2, t2) {
    var r2 = Y[e2] || (Y[e2] = []);
    ~r2.indexOf(t2) || r2.push(t2);
  }, $.removeEventListener = function(e2, t2) {
    var r2 = Y[e2], n2 = r2 && r2.indexOf(t2);
    0 <= n2 && r2.splice(n2, 1);
  }, $.batch = function(e2, t2) {
    function Qo(e3, t3) {
      var r3 = [], n3 = [], o3 = Je.delayedCall(i2, function() {
        t3(r3, n3), r3 = [], n3 = [];
      }).pause();
      return function(e4) {
        r3.length || o3.restart(true), r3.push(e4.trigger), n3.push(e4), a2 <= r3.length && o3.progress(1);
      };
    }
    var r2, n2 = [], o2 = {}, i2 = t2.interval || 0.016, a2 = t2.batchMax || 1e9;
    for (r2 in t2) o2[r2] = "on" === r2.substr(0, 2) && Ma(t2[r2]) && "onRefreshInit" !== r2 ? Qo(0, t2[r2]) : t2[r2];
    return Ma(a2) && (a2 = a2(), pb($, "refresh", function() {
      return a2 = t2.batchMax();
    })), Ze(e2).forEach(function(e3) {
      var t3 = {};
      for (r2 in o2) t3[r2] = o2[r2];
      t3.trigger = e3, n2.push($.create(t3));
    }), n2;
  };
  function jc(e2, t2, r2, n2) {
    return n2 < t2 ? e2(n2) : t2 < 0 && e2(0), n2 < r2 ? (n2 - t2) / (r2 - t2) : r2 < 0 ? t2 / (t2 - r2) : 1;
  }
  function kc(e2, t2) {
    true === t2 ? e2.style.removeProperty("touch-action") : e2.style.touchAction = true === t2 ? "auto" : t2 ? "pan-" + t2 + (k.isTouch ? " pinch-zoom" : "") : "none", e2 === Ue && kc(Qe, t2);
  }
  function mc(e2) {
    var t2, r2 = e2.event, n2 = e2.target, o2 = e2.axis, i2 = (r2.changedTouches ? r2.changedTouches[0] : r2).target, a2 = i2._gsap || Je.core.getCache(i2), s2 = pt();
    if (!a2._isScrollT || 2e3 < s2 - a2._isScrollT) {
      for (; i2 && i2 !== Qe && (i2.scrollHeight <= i2.clientHeight && i2.scrollWidth <= i2.clientWidth || !te[(t2 = fb(i2)).overflowY] && !te[t2.overflowX]); ) i2 = i2.parentNode;
      a2._isScroll = i2 && i2 !== n2 && !Fa(i2) && (te[(t2 = fb(i2)).overflowY] || te[t2.overflowX]), a2._isScrollT = s2;
    }
    !a2._isScroll && "x" !== o2 || (r2.stopPropagation(), r2._gsapAllow = true);
  }
  function nc(e2, t2, r2, n2) {
    return k.create({ target: e2, capture: true, debounce: false, lockAxis: true, type: t2, onWheel: n2 = n2 && mc, onPress: n2, onDrag: n2, onScroll: n2, onEnable: function onEnable() {
      return r2 && pb(Ge, k.eventTypes[0], ne, false, true);
    }, onDisable: function onDisable() {
      return qb(Ge, k.eventTypes[0], ne, true);
    } });
  }
  function rc(e2) {
    function Np() {
      return o2 = false;
    }
    function Qp() {
      i2 = Ja(d2, je), M2 = $e(E ? 1 : 0, i2), f2 && (T2 = $e(0, Ja(d2, He))), l2 = At;
    }
    function Rp() {
      v2._gsap.y = Ca(parseFloat(v2._gsap.y) + b2.offset) + "px", v2.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v2._gsap.y) + ", 0, 1)", b2.offset = b2.cacheID = 0;
    }
    function Xp() {
      Qp(), a2.isActive() && a2.vars.scrollY > i2 && (b2() > i2 ? a2.progress(1) && b2(i2) : a2.resetTo("scrollY", i2));
    }
    Oa(e2) || (e2 = {}), e2.preventDefault = e2.isNormalizer = e2.allowClicks = true, e2.type || (e2.type = "wheel,touch"), e2.debounce = !!e2.debounce, e2.id = e2.id || "normalizer";
    var n2, i2, l2, o2, a2, c2, u2, s2, f2 = e2.normalizeScrollX, t2 = e2.momentum, r2 = e2.allowNestedScroll, p2 = e2.onRelease, d2 = J(e2.target) || Ue, g2 = Je.core.globals().ScrollSmoother, h2 = g2 && g2.get(), v2 = E && (e2.content && J(e2.content) || h2 && false !== e2.content && !h2.smooth() && h2.content()), b2 = K(d2, je), m2 = K(d2, He), y2 = 1, x2 = (k.isTouch && Ke.visualViewport ? Ke.visualViewport.scale * Ke.visualViewport.width : Ke.outerWidth) / Ke.innerWidth, w2 = 0, _2 = Ma(t2) ? function() {
      return t2(n2);
    } : function() {
      return t2 || 2.8;
    }, S2 = nc(d2, e2.type, true, r2), T2 = Ba, M2 = Ba;
    return v2 && Je.set(v2, { y: "+=0" }), e2.ignoreCheck = function(e3) {
      return E && "touchmove" === e3.type && function ignoreDrag() {
        if (o2) {
          requestAnimationFrame(Np);
          var e4 = Ca(n2.deltaY / 2), t3 = M2(b2.v - e4);
          if (v2 && t3 !== b2.v + b2.offset) {
            b2.offset = t3 - b2.v;
            var r3 = Ca((parseFloat(v2 && v2._gsap.y) || 0) - b2.offset);
            v2.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r3 + ", 0, 1)", v2._gsap.y = r3 + "px", b2.cacheID = Ie.cache, W();
          }
          return true;
        }
        b2.offset && Rp(), o2 = true;
      }() || 1.05 < y2 && "touchstart" !== e3.type || n2.isGesturing || e3.touches && 1 < e3.touches.length;
    }, e2.onPress = function() {
      o2 = false;
      var e3 = y2;
      y2 = Ca((Ke.visualViewport && Ke.visualViewport.scale || 1) / x2), a2.pause(), e3 !== y2 && kc(d2, 1.01 < y2 || !f2 && "x"), c2 = m2(), u2 = b2(), Qp(), l2 = At;
    }, e2.onRelease = e2.onGestureStart = function(e3, t3) {
      if (b2.offset && Rp(), t3) {
        Ie.cache++;
        var r3, n3, o3 = _2();
        f2 && (n3 = (r3 = m2()) + 0.05 * o3 * -e3.velocityX / 0.227, o3 *= jc(m2, r3, n3, Ja(d2, He)), a2.vars.scrollX = T2(n3)), n3 = (r3 = b2()) + 0.05 * o3 * -e3.velocityY / 0.227, o3 *= jc(b2, r3, n3, Ja(d2, je)), a2.vars.scrollY = M2(n3), a2.invalidate().duration(o3).play(0.01), (E && a2.vars.scrollY >= i2 || i2 - 1 <= r3) && Je.to({}, { onUpdate: Xp, duration: o3 });
      } else s2.restart(true);
      p2 && p2(e3);
    }, e2.onWheel = function() {
      a2._ts && a2.pause(), 1e3 < pt() - w2 && (l2 = 0, w2 = pt());
    }, e2.onChange = function(e3, t3, r3, n3, o3) {
      if (At !== l2 && Qp(), t3 && f2 && m2(T2(n3[2] === t3 ? c2 + (e3.startX - e3.x) : m2() + t3 - n3[1])), r3) {
        b2.offset && Rp();
        var i3 = o3[2] === r3, a3 = i3 ? u2 + e3.startY - e3.y : b2() + r3 - o3[1], s3 = M2(a3);
        i3 && a3 !== s3 && (u2 += s3 - a3), b2(s3);
      }
      (r3 || t3) && W();
    }, e2.onEnable = function() {
      kc(d2, !f2 && "x"), $.addEventListener("refresh", Xp), pb(Ke, "resize", Xp), b2.smooth && (b2.target.style.scrollBehavior = "auto", b2.smooth = m2.smooth = false), S2.enable();
    }, e2.onDisable = function() {
      kc(d2, true), qb(Ke, "resize", Xp), $.removeEventListener("refresh", Xp), S2.kill();
    }, e2.lockAxis = false !== e2.lockAxis, ((n2 = new k(e2)).iOS = E) && !b2() && b2(1), E && Je.ticker.add(Ba), s2 = n2._dc, a2 = Je.to(n2, { ease: "power4", paused: true, scrollX: f2 ? "+=0.1" : "+=0", scrollY: "+=0.1", modifiers: { scrollY: gc(b2, b2(), function() {
      return a2.pause();
    }) }, onUpdate: W, onComplete: s2.vars.onComplete }), n2;
  }
  var ee, te = { auto: 1, scroll: 1 }, re = /(input|label|select|textarea)/i, ne = function _captureInputs(e2) {
    var t2 = re.test(e2.target.tagName);
    (t2 || ee) && (e2._gsapAllow = true, ee = t2);
  };
  $.sort = function(e2) {
    return Pt.sort(e2 || function(e3, t2) {
      return -1e6 * (e3.vars.refreshPriority || 0) + e3.start - (t2.start + -1e6 * (t2.vars.refreshPriority || 0));
    });
  }, $.observe = function(e2) {
    return new k(e2);
  }, $.normalizeScroll = function(e2) {
    if (void 0 === e2) return v;
    if (true === e2 && v) return v.enable();
    if (false === e2) return v && v.kill();
    var t2 = e2 instanceof k ? e2 : rc(e2);
    return v && v.target === t2.target && v.kill(), Fa(t2.target) && (v = t2), t2;
  }, $.core = { _getVelocityProp: L, _inputObserver: nc, _scrollers: Ie, _proxies: qe, bridge: { ss: function ss() {
    dt || q("scrollStart"), dt = pt();
  }, ref: function ref() {
    return tt;
  } } }, Ea() && Je.registerPlugin($), e.ScrollTrigger = $, e.default = $;
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: true });
  } else {
    delete e.default;
  }
});
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t || self).Lenis = e();
}(this, function() {
  function t(t2, e2) {
    for (var i2 = 0; i2 < e2.length; i2++) {
      var o2 = e2[i2];
      o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t2, o2.key, o2);
    }
  }
  function e(e2, i2, o2) {
    return i2 && t(e2.prototype, i2), o2 && t(e2, o2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  function i() {
    return i = Object.assign ? Object.assign.bind() : function(t2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var i2 = arguments[e2];
        for (var o2 in i2) Object.prototype.hasOwnProperty.call(i2, o2) && (t2[o2] = i2[o2]);
      }
      return t2;
    }, i.apply(this, arguments);
  }
  function o(t2, e2) {
    return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
      return t3.__proto__ = e3, t3;
    }, o(t2, e2);
  }
  function n() {
  }
  n.prototype = { on: function(t2, e2, i2) {
    var o2 = this.e || (this.e = {});
    return (o2[t2] || (o2[t2] = [])).push({ fn: e2, ctx: i2 }), this;
  }, once: function(t2, e2, i2) {
    var o2 = this;
    function n2() {
      o2.off(t2, n2), e2.apply(i2, arguments);
    }
    return n2._ = e2, this.on(t2, n2, i2);
  }, emit: function(t2) {
    for (var e2 = [].slice.call(arguments, 1), i2 = ((this.e || (this.e = {}))[t2] || []).slice(), o2 = 0, n2 = i2.length; o2 < n2; o2++) i2[o2].fn.apply(i2[o2].ctx, e2);
    return this;
  }, off: function(t2, e2) {
    var i2 = this.e || (this.e = {}), o2 = i2[t2], n2 = [];
    if (o2 && e2) for (var r2 = 0, s2 = o2.length; r2 < s2; r2++) o2[r2].fn !== e2 && o2[r2].fn._ !== e2 && n2.push(o2[r2]);
    return n2.length ? i2[t2] = n2 : delete i2[t2], this;
  } };
  var r = n;
  n.TinyEmitter = r, "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  var s = function(t2) {
    var e2 = { exports: {} };
    return function(t3, e3) {
      t3.exports = function() {
        var t4 = 0;
        function e4(e5) {
          return "__private_" + t4++ + "_" + e5;
        }
        function i2(t5, e5) {
          if (!Object.prototype.hasOwnProperty.call(t5, e5)) throw new TypeError("attempted to use private field on non-instance");
          return t5;
        }
        function o2() {
        }
        o2.prototype = { on: function(t5, e5, i3) {
          var o3 = this.e || (this.e = {});
          return (o3[t5] || (o3[t5] = [])).push({ fn: e5, ctx: i3 }), this;
        }, once: function(t5, e5, i3) {
          var o3 = this;
          function n3() {
            o3.off(t5, n3), e5.apply(i3, arguments);
          }
          return n3._ = e5, this.on(t5, n3, i3);
        }, emit: function(t5) {
          for (var e5 = [].slice.call(arguments, 1), i3 = ((this.e || (this.e = {}))[t5] || []).slice(), o3 = 0, n3 = i3.length; o3 < n3; o3++) i3[o3].fn.apply(i3[o3].ctx, e5);
          return this;
        }, off: function(t5, e5) {
          var i3 = this.e || (this.e = {}), o3 = i3[t5], n3 = [];
          if (o3 && e5) for (var r3 = 0, s3 = o3.length; r3 < s3; r3++) o3[r3].fn !== e5 && o3[r3].fn._ !== e5 && n3.push(o3[r3]);
          return n3.length ? i3[t5] = n3 : delete i3[t5], this;
        } };
        var n2 = o2;
        n2.TinyEmitter = o2;
        var r2, s2 = "virtualscroll", l2 = e4("options"), h2 = e4("el"), a2 = e4("emitter"), c = e4("event"), u = e4("touchStart"), d = e4("bodyTouchAction");
        return function() {
          function t5(t6) {
            var e6 = this;
            Object.defineProperty(this, l2, { writable: true, value: void 0 }), Object.defineProperty(this, h2, { writable: true, value: void 0 }), Object.defineProperty(this, a2, { writable: true, value: void 0 }), Object.defineProperty(this, c, { writable: true, value: void 0 }), Object.defineProperty(this, u, { writable: true, value: void 0 }), Object.defineProperty(this, d, { writable: true, value: void 0 }), this._onWheel = function(t7) {
              var o3 = i2(e6, l2)[l2], n3 = i2(e6, c)[c];
              n3.deltaX = t7.wheelDeltaX || -1 * t7.deltaX, n3.deltaY = t7.wheelDeltaY || -1 * t7.deltaY, r2.isFirefox && 1 === t7.deltaMode && (n3.deltaX *= o3.firefoxMultiplier, n3.deltaY *= o3.firefoxMultiplier), n3.deltaX *= o3.mouseMultiplier, n3.deltaY *= o3.mouseMultiplier, e6._notify(t7);
            }, this._onMouseWheel = function(t7) {
              var o3 = i2(e6, c)[c];
              o3.deltaX = t7.wheelDeltaX ? t7.wheelDeltaX : 0, o3.deltaY = t7.wheelDeltaY ? t7.wheelDeltaY : t7.wheelDelta, e6._notify(t7);
            }, this._onTouchStart = function(t7) {
              var o3 = t7.targetTouches ? t7.targetTouches[0] : t7;
              i2(e6, u)[u].x = o3.pageX, i2(e6, u)[u].y = o3.pageY;
            }, this._onTouchMove = function(t7) {
              var o3 = i2(e6, l2)[l2];
              o3.preventTouch && !t7.target.classList.contains(o3.unpreventTouchClass) && t7.preventDefault();
              var n3 = i2(e6, c)[c], r3 = t7.targetTouches ? t7.targetTouches[0] : t7;
              n3.deltaX = (r3.pageX - i2(e6, u)[u].x) * o3.touchMultiplier, n3.deltaY = (r3.pageY - i2(e6, u)[u].y) * o3.touchMultiplier, i2(e6, u)[u].x = r3.pageX, i2(e6, u)[u].y = r3.pageY, e6._notify(t7);
            }, this._onKeyDown = function(t7) {
              var o3 = i2(e6, c)[c];
              o3.deltaX = o3.deltaY = 0;
              var n3 = window.innerHeight - 40;
              switch (t7.keyCode) {
                case 37:
                case 38:
                  o3.deltaY = i2(e6, l2)[l2].keyStep;
                  break;
                case 39:
                case 40:
                  o3.deltaY = -i2(e6, l2)[l2].keyStep;
                  break;
                case 32:
                  o3.deltaY = n3 * (t7.shiftKey ? 1 : -1);
                  break;
                default:
                  return;
              }
              e6._notify(t7);
            }, i2(this, h2)[h2] = window, t6 && t6.el && (i2(this, h2)[h2] = t6.el, delete t6.el), r2 || (r2 = { hasWheelEvent: "onwheel" in document, hasMouseWheelEvent: "onmousewheel" in document, hasTouch: "ontouchstart" in document, hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1, hasPointer: !!window.navigator.msPointerEnabled, hasKeyDown: "onkeydown" in document, isFirefox: navigator.userAgent.indexOf("Firefox") > -1 }), i2(this, l2)[l2] = Object.assign({ mouseMultiplier: 1, touchMultiplier: 2, firefoxMultiplier: 15, keyStep: 120, preventTouch: false, unpreventTouchClass: "vs-touchmove-allowed", useKeyboard: true, useTouch: true }, t6), i2(this, a2)[a2] = new n2(), i2(this, c)[c] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }, i2(this, u)[u] = { x: null, y: null }, i2(this, d)[d] = null, void 0 !== i2(this, l2)[l2].passive && (this.listenerOptions = { passive: i2(this, l2)[l2].passive });
          }
          var e5 = t5.prototype;
          return e5._notify = function(t6) {
            var e6 = i2(this, c)[c];
            e6.x += e6.deltaX, e6.y += e6.deltaY, i2(this, a2)[a2].emit(s2, { x: e6.x, y: e6.y, deltaX: e6.deltaX, deltaY: e6.deltaY, originalEvent: t6 });
          }, e5._bind = function() {
            r2.hasWheelEvent && i2(this, h2)[h2].addEventListener("wheel", this._onWheel, this.listenerOptions), r2.hasMouseWheelEvent && i2(this, h2)[h2].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), r2.hasTouch && i2(this, l2)[l2].useTouch && (i2(this, h2)[h2].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), i2(this, h2)[h2].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), r2.hasPointer && r2.hasTouchWin && (i2(this, d)[d] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", i2(this, h2)[h2].addEventListener("MSPointerDown", this._onTouchStart, true), i2(this, h2)[h2].addEventListener("MSPointerMove", this._onTouchMove, true)), r2.hasKeyDown && i2(this, l2)[l2].useKeyboard && document.addEventListener("keydown", this._onKeyDown);
          }, e5._unbind = function() {
            r2.hasWheelEvent && i2(this, h2)[h2].removeEventListener("wheel", this._onWheel), r2.hasMouseWheelEvent && i2(this, h2)[h2].removeEventListener("mousewheel", this._onMouseWheel), r2.hasTouch && (i2(this, h2)[h2].removeEventListener("touchstart", this._onTouchStart), i2(this, h2)[h2].removeEventListener("touchmove", this._onTouchMove)), r2.hasPointer && r2.hasTouchWin && (document.body.style.msTouchAction = i2(this, d)[d], i2(this, h2)[h2].removeEventListener("MSPointerDown", this._onTouchStart, true), i2(this, h2)[h2].removeEventListener("MSPointerMove", this._onTouchMove, true)), r2.hasKeyDown && i2(this, l2)[l2].useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
          }, e5.on = function(t6, e6) {
            i2(this, a2)[a2].on(s2, t6, e6);
            var o3 = i2(this, a2)[a2].e;
            o3 && o3[s2] && 1 === o3[s2].length && this._bind();
          }, e5.off = function(t6, e6) {
            i2(this, a2)[a2].off(s2, t6, e6);
            var o3 = i2(this, a2)[a2].e;
            (!o3[s2] || o3[s2].length <= 0) && this._unbind();
          }, e5.destroy = function() {
            i2(this, a2)[a2].off(), this._unbind();
          }, t5;
        }();
      }();
    }(e2), e2.exports;
  }();
  function l(t2, e2) {
    var i2 = t2 % e2;
    return (e2 > 0 && i2 < 0 || e2 < 0 && i2 > 0) && (i2 += e2), i2;
  }
  var h = ["duration", "easing"], a = /* @__PURE__ */ function() {
    function t2() {
    }
    var o2 = t2.prototype;
    return o2.to = function(t3, e2) {
      var o3 = this, n2 = void 0 === e2 ? {} : e2, r2 = n2.duration, s2 = void 0 === r2 ? 1 : r2, l2 = n2.easing, a2 = void 0 === l2 ? function(t4) {
        return t4;
      } : l2, c = function(t4, e3) {
        if (null == t4) return {};
        var i2, o4, n3 = {}, r3 = Object.keys(t4);
        for (o4 = 0; o4 < r3.length; o4++) e3.indexOf(i2 = r3[o4]) >= 0 || (n3[i2] = t4[i2]);
        return n3;
      }(n2, h);
      this.target = t3, this.fromKeys = i({}, c), this.toKeys = i({}, c), this.keys = Object.keys(i({}, c)), this.keys.forEach(function(e3) {
        o3.fromKeys[e3] = t3[e3];
      }), this.duration = s2, this.easing = a2, this.currentTime = 0, this.isRunning = true;
    }, o2.stop = function() {
      this.isRunning = false;
    }, o2.raf = function(t3) {
      var e2 = this;
      if (this.isRunning) {
        this.currentTime = Math.min(this.currentTime + t3, this.duration);
        var i2 = this.progress >= 1 ? 1 : this.easing(this.progress);
        this.keys.forEach(function(t4) {
          var o3 = e2.fromKeys[t4];
          e2.target[t4] = o3 + (e2.toKeys[t4] - o3) * i2;
        }), 1 === i2 && this.stop();
      }
    }, e(t2, [{ key: "progress", get: function() {
      return this.currentTime / this.duration;
    } }]), t2;
  }();
  return function(t2) {
    var i2, n2;
    function r2(e2) {
      var i3, o2, n3, r3, l2 = void 0 === e2 ? {} : e2, h3 = l2.duration, c = void 0 === h3 ? 1.2 : h3, u = l2.easing, d = void 0 === u ? function(t3) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t3));
      } : u, p = l2.smooth, f = void 0 === p || p, v = l2.mouseMultiplier, w = void 0 === v ? 1 : v, y = l2.smoothTouch, m = void 0 !== y && y, g = l2.touchMultiplier, b = void 0 === g ? 2 : g, T = l2.direction, M = void 0 === T ? "vertical" : T, S = l2.gestureDirection, _ = void 0 === S ? "vertical" : S, O = l2.infinite, E = void 0 !== O && O, W = l2.wrapper, x = void 0 === W ? window : W, D = l2.content, N = void 0 === D ? document.body : D;
      (r3 = t2.call(this) || this).onWindowResize = function() {
        r3.wrapperWidth = window.innerWidth, r3.wrapperHeight = window.innerHeight;
      }, r3.onWrapperResize = function(t3) {
        var e3 = t3[0];
        if (e3) {
          var i4 = e3.contentRect;
          r3.wrapperWidth = i4.width, r3.wrapperHeight = i4.height;
        }
      }, r3.onContentResize = function(t3) {
        var e3 = t3[0];
        if (e3) {
          var i4 = e3.contentRect;
          r3.contentWidth = i4.width, r3.contentHeight = i4.height;
        }
      }, r3.onVirtualScroll = function(t3) {
        var e3 = t3.deltaY, i4 = t3.deltaX, o3 = t3.originalEvent;
        if (!("vertical" === r3.gestureDirection && 0 === e3 || "horizontal" === r3.gestureDirection && 0 === i4)) {
          var n4 = !!o3.composedPath().find(function(t4) {
            return t4.hasAttribute && t4.hasAttribute("data-lenis-prevent");
          });
          o3.ctrlKey || n4 || (r3.smooth = o3.changedTouches ? r3.smoothTouch : r3.options.smooth, r3.stopped ? o3.preventDefault() : r3.smooth && 4 !== o3.buttons && (r3.smooth && o3.preventDefault(), r3.targetScroll -= "both" === r3.gestureDirection ? i4 + e3 : "horizontal" === r3.gestureDirection ? i4 : e3, r3.scrollTo(r3.targetScroll)));
        }
      }, r3.onScroll = function(t3) {
        r3.isScrolling && r3.smooth || (r3.targetScroll = r3.scroll = r3.lastScroll = r3.wrapperNode[r3.scrollProperty], r3.notify());
      }, window.lenisVersion = "0.2.28", r3.options = { duration: c, easing: d, smooth: f, mouseMultiplier: w, smoothTouch: m, touchMultiplier: b, direction: M, gestureDirection: _, infinite: E, wrapper: x, content: N }, r3.duration = c, r3.easing = d, r3.smooth = f, r3.mouseMultiplier = w, r3.smoothTouch = m, r3.touchMultiplier = b, r3.direction = M, r3.gestureDirection = _, r3.infinite = E, r3.wrapperNode = x, r3.contentNode = N, r3.wrapperNode.addEventListener("scroll", r3.onScroll), r3.wrapperNode === window ? (r3.wrapperNode.addEventListener("resize", r3.onWindowResize), r3.onWindowResize()) : (r3.wrapperHeight = r3.wrapperNode.offsetHeight, r3.wrapperWidth = r3.wrapperNode.offsetWidth, r3.wrapperObserver = new ResizeObserver(r3.onWrapperResize), r3.wrapperObserver.observe(r3.wrapperNode)), r3.contentHeight = r3.contentNode.offsetHeight, r3.contentWidth = r3.contentNode.offsetWidth, r3.contentObserver = new ResizeObserver(r3.onContentResize), r3.contentObserver.observe(r3.contentNode), r3.targetScroll = r3.scroll = r3.lastScroll = r3.wrapperNode[r3.scrollProperty], r3.animate = new a();
      var P = (null == (i3 = navigator) || null == (o2 = i3.userAgentData) ? void 0 : o2.platform) || (null == (n3 = navigator) ? void 0 : n3.platform) || "unknown";
      return r3.virtualScroll = new s({ el: r3.wrapperNode, firefoxMultiplier: 50, mouseMultiplier: r3.mouseMultiplier * (P.includes("Win") || P.includes("Linux") ? 0.84 : 0.4), touchMultiplier: r3.touchMultiplier, passive: false, useKeyboard: false, useTouch: true }), r3.virtualScroll.on(r3.onVirtualScroll), r3;
    }
    n2 = t2, (i2 = r2).prototype = Object.create(n2.prototype), i2.prototype.constructor = i2, o(i2, n2);
    var h2 = r2.prototype;
    return h2.start = function() {
      var t3 = this.wrapperNode;
      this.wrapperNode === window && (t3 = document.documentElement), t3.classList.remove("lenis-stopped"), this.stopped = false;
    }, h2.stop = function() {
      var t3 = this.wrapperNode;
      this.wrapperNode === window && (t3 = document.documentElement), t3.classList.add("lenis-stopped"), this.stopped = true, this.animate.stop();
    }, h2.destroy = function() {
      var t3;
      this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize), this.wrapperNode.removeEventListener("scroll", this.onScroll), this.virtualScroll.destroy(), null == (t3 = this.wrapperObserver) || t3.disconnect(), this.contentObserver.disconnect();
    }, h2.raf = function(t3) {
      var e2 = t3 - (this.now || 0);
      this.now = t3, !this.stopped && this.smooth && (this.lastScroll = this.scroll, this.animate.raf(1e-3 * e2), this.scroll === this.targetScroll && (this.lastScroll = this.scroll), this.isScrolling && (this.setScroll(this.scroll), this.notify()), this.isScrolling = this.scroll !== this.targetScroll);
    }, h2.setScroll = function(t3) {
      var e2 = this.infinite ? l(t3, this.limit) : t3;
      "horizontal" === this.direction ? this.wrapperNode.scrollTo(e2, 0) : this.wrapperNode.scrollTo(0, e2);
    }, h2.notify = function() {
      var t3 = this.infinite ? l(this.scroll, this.limit) : this.scroll;
      this.emit("scroll", { scroll: t3, limit: this.limit, velocity: this.velocity, direction: 0 === this.velocity ? 0 : this.velocity > 0 ? 1 : -1, progress: t3 / this.limit });
    }, h2.scrollTo = function(t3, e2) {
      var i3 = void 0 === e2 ? {} : e2, o2 = i3.offset, n3 = void 0 === o2 ? 0 : o2, r3 = i3.immediate, s2 = void 0 !== r3 && r3, l2 = i3.duration, h3 = void 0 === l2 ? this.duration : l2, a2 = i3.easing, c = void 0 === a2 ? this.easing : a2;
      if (null != t3 && !this.stopped) {
        var u;
        if ("number" == typeof t3) u = t3;
        else if ("top" === t3 || "#top" === t3) u = 0;
        else if ("bottom" === t3) u = this.limit;
        else {
          var d;
          if ("string" == typeof t3) d = document.querySelector(t3);
          else {
            if (null == t3 || !t3.nodeType) return;
            d = t3;
          }
          if (!d) return;
          var p = 0;
          if (this.wrapperNode !== window) {
            var f = this.wrapperNode.getBoundingClientRect();
            p = "horizontal" === this.direction ? f.left : f.top;
          }
          var v = d.getBoundingClientRect();
          u = ("horizontal" === this.direction ? v.left : v.top) + this.scroll - p;
        }
        u += n3, this.targetScroll = this.infinite ? u : Math.max(0, Math.min(u, this.limit)), !this.smooth || s2 ? (this.animate.stop(), this.scroll = this.lastScroll = this.targetScroll, this.setScroll(this.targetScroll)) : this.animate.to(this, { duration: h3, easing: c, scroll: this.targetScroll });
      }
    }, e(r2, [{ key: "scrollProperty", get: function() {
      return this.wrapperNode === window ? "horizontal" === this.direction ? "scrollX" : "scrollY" : "horizontal" === this.direction ? "scrollLeft" : "scrollTop";
    } }, { key: "limit", get: function() {
      return "horizontal" === this.direction ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight;
    } }, { key: "velocity", get: function() {
      return this.scroll - this.lastScroll;
    } }]), r2;
  }(r);
});
!function(i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function(i) {
  "use strict";
  var e = window.Slick || {};
  (e = /* @__PURE__ */ function() {
    var e2 = 0;
    return function(t, o) {
      var s, n = this;
      n.defaults = { accessibility: true, adaptiveHeight: false, appendArrows: i(t), appendDots: i(t), arrows: true, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: false, autoplaySpeed: 3e3, centerMode: false, centerPadding: "50px", cssEase: "ease", customPaging: function(e3, t2) {
        return i('<button type="button" />').text(t2 + 1);
      }, dots: false, dotsClass: "slick-dots", draggable: true, easing: "linear", edgeFriction: 0.35, fade: false, focusOnSelect: false, focusOnChange: false, infinite: true, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: false, pauseOnHover: true, pauseOnFocus: true, pauseOnDotsHover: false, respondTo: "window", responsive: null, rows: 1, rtl: false, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: true, swipeToSlide: false, touchMove: true, touchThreshold: 5, useCSS: true, useTransform: true, variableWidth: false, vertical: false, verticalSwiping: false, waitForAnimate: true, zIndex: 1e3 }, n.initials = { animating: false, dragging: false, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: false, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: false, slideOffset: 0, swipeLeft: null, swiping: false, $list: null, touchObject: {}, transformsEnabled: false, unslicked: false }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = false, n.focussed = false, n.interrupted = false, n.hidden = "hidden", n.paused = true, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = true, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e2++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(true);
    };
  }()).prototype.activateADA = function() {
    this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, e.prototype.addSlide = e.prototype.slickAdd = function(e2, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;
    else if (t < 0 || t >= s.slideCount) return false;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e2).appendTo(s.$slideTrack) : o ? i(e2).insertBefore(s.$slides.eq(t)) : i(e2).insertAfter(s.$slides.eq(t)) : true === o ? i(e2).prependTo(s.$slideTrack) : i(e2).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e3, t2) {
      i(t2).attr("data-slick-index", e3);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function() {
    var i2 = this;
    if (1 === i2.options.slidesToShow && true === i2.options.adaptiveHeight && false === i2.options.vertical) {
      var e2 = i2.$slides.eq(i2.currentSlide).outerHeight(true);
      i2.$list.animate({ height: e2 }, i2.options.speed);
    }
  }, e.prototype.animateSlide = function(e2, t) {
    var o = {}, s = this;
    s.animateHeight(), true === s.options.rtl && false === s.options.vertical && (e2 = -e2), false === s.transformsEnabled ? false === s.options.vertical ? s.$slideTrack.animate({ left: e2 }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e2 }, s.options.speed, s.options.easing, t) : false === s.cssTransitions ? (true === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e2 }, { duration: s.options.speed, easing: s.options.easing, step: function(i2) {
      i2 = Math.ceil(i2), false === s.options.vertical ? (o[s.animType] = "translate(" + i2 + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i2 + "px)", s.$slideTrack.css(o));
    }, complete: function() {
      t && t.call();
    } })) : (s.applyTransition(), e2 = Math.ceil(e2), false === s.options.vertical ? o[s.animType] = "translate3d(" + e2 + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e2 + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function() {
    var e2 = this, t = e2.options.asNavFor;
    return t && null !== t && (t = i(t).not(e2.$slider)), t;
  }, e.prototype.asNavFor = function(e2) {
    var t = this.getNavTarget();
    null !== t && "object" == typeof t && t.each(function() {
      var t2 = i(this).slick("getSlick");
      t2.unslicked || t2.slideHandler(e2, true);
    });
  }, e.prototype.applyTransition = function(i2) {
    var e2 = this, t = {};
    false === e2.options.fade ? t[e2.transitionType] = e2.transformType + " " + e2.options.speed + "ms " + e2.options.cssEase : t[e2.transitionType] = "opacity " + e2.options.speed + "ms " + e2.options.cssEase, false === e2.options.fade ? e2.$slideTrack.css(t) : e2.$slides.eq(i2).css(t);
  }, e.prototype.autoPlay = function() {
    var i2 = this;
    i2.autoPlayClear(), i2.slideCount > i2.options.slidesToShow && (i2.autoPlayTimer = setInterval(i2.autoPlayIterator, i2.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function() {
    var i2 = this;
    i2.autoPlayTimer && clearInterval(i2.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function() {
    var i2 = this, e2 = i2.currentSlide + i2.options.slidesToScroll;
    i2.paused || i2.interrupted || i2.focussed || (false === i2.options.infinite && (1 === i2.direction && i2.currentSlide + 1 === i2.slideCount - 1 ? i2.direction = 0 : 0 === i2.direction && (e2 = i2.currentSlide - i2.options.slidesToScroll, i2.currentSlide - 1 == 0 && (i2.direction = 1))), i2.slideHandler(e2));
  }, e.prototype.buildArrows = function() {
    var e2 = this;
    true === e2.options.arrows && (e2.$prevArrow = i(e2.options.prevArrow).addClass("slick-arrow"), e2.$nextArrow = i(e2.options.nextArrow).addClass("slick-arrow"), e2.slideCount > e2.options.slidesToShow ? (e2.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e2.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e2.htmlExpr.test(e2.options.prevArrow) && e2.$prevArrow.prependTo(e2.options.appendArrows), e2.htmlExpr.test(e2.options.nextArrow) && e2.$nextArrow.appendTo(e2.options.appendArrows), true !== e2.options.infinite && e2.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e2.$prevArrow.add(e2.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, e.prototype.buildDots = function() {
    var e2, t, o = this;
    if (true === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e2 = 0; e2 <= o.getDotCount(); e2 += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e2)));
      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function() {
    var e2 = this;
    e2.$slides = e2.$slider.children(e2.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e2.slideCount = e2.$slides.length, e2.$slides.each(function(e3, t) {
      i(t).attr("data-slick-index", e3).data("originalStyling", i(t).attr("style") || "");
    }), e2.$slider.addClass("slick-slider"), e2.$slideTrack = 0 === e2.slideCount ? i('<div class="slick-track"/>').appendTo(e2.$slider) : e2.$slides.wrapAll('<div class="slick-track"/>').parent(), e2.$list = e2.$slideTrack.wrap('<div class="slick-list"/>').parent(), e2.$slideTrack.css("opacity", 0), true !== e2.options.centerMode && true !== e2.options.swipeToSlide || (e2.options.slidesToScroll = 1), i("img[data-lazy]", e2.$slider).not("[src]").addClass("slick-loading"), e2.setupInfinite(), e2.buildArrows(), e2.buildDots(), e2.updateDots(), e2.setSlideClasses("number" == typeof e2.currentSlide ? e2.currentSlide : 0), true === e2.options.draggable && e2.$list.addClass("draggable");
  }, e.prototype.buildRows = function() {
    var i2, e2, t, o, s, n, r, l = this;
    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i2 = 0; i2 < s; i2++) {
        var d = document.createElement("div");
        for (e2 = 0; e2 < l.options.rows; e2++) {
          var a = document.createElement("div");
          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i2 * r + (e2 * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }
          d.appendChild(a);
        }
        o.appendChild(d);
      }
      l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, e.prototype.checkResponsive = function(e2, t) {
    var o, s, n, r = this, l = false, d = r.$slider.width(), a = window.innerWidth || i(window).width();
    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (false === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), true === e2 && (r.currentSlide = r.options.initialSlide), r.refresh(e2)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), true === e2 && (r.currentSlide = r.options.initialSlide), r.refresh(e2)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, true === e2 && (r.currentSlide = r.options.initialSlide), r.refresh(e2), l = s), e2 || false === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function(e2, t) {
    var o, s, n, r = this, l = i(e2.currentTarget);
    switch (l.is("a") && e2.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e2.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, false, t);
        break;
      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, false, t);
        break;
      case "index":
        var d = 0 === e2.data.index ? 0 : e2.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), false, t), l.children().trigger("focus");
        break;
      default:
        return;
    }
  }, e.prototype.checkNavigable = function(i2) {
    var e2, t;
    if (e2 = this.getNavigableIndexes(), t = 0, i2 > e2[e2.length - 1]) i2 = e2[e2.length - 1];
    else for (var o in e2) {
      if (i2 < e2[o]) {
        i2 = t;
        break;
      }
      t = e2[o];
    }
    return i2;
  }, e.prototype.cleanUpEvents = function() {
    var e2 = this;
    e2.options.dots && null !== e2.$dots && (i("li", e2.$dots).off("click.slick", e2.changeSlide).off("mouseenter.slick", i.proxy(e2.interrupt, e2, true)).off("mouseleave.slick", i.proxy(e2.interrupt, e2, false)), true === e2.options.accessibility && e2.$dots.off("keydown.slick", e2.keyHandler)), e2.$slider.off("focus.slick blur.slick"), true === e2.options.arrows && e2.slideCount > e2.options.slidesToShow && (e2.$prevArrow && e2.$prevArrow.off("click.slick", e2.changeSlide), e2.$nextArrow && e2.$nextArrow.off("click.slick", e2.changeSlide), true === e2.options.accessibility && (e2.$prevArrow && e2.$prevArrow.off("keydown.slick", e2.keyHandler), e2.$nextArrow && e2.$nextArrow.off("keydown.slick", e2.keyHandler))), e2.$list.off("touchstart.slick mousedown.slick", e2.swipeHandler), e2.$list.off("touchmove.slick mousemove.slick", e2.swipeHandler), e2.$list.off("touchend.slick mouseup.slick", e2.swipeHandler), e2.$list.off("touchcancel.slick mouseleave.slick", e2.swipeHandler), e2.$list.off("click.slick", e2.clickHandler), i(document).off(e2.visibilityChange, e2.visibility), e2.cleanUpSlideEvents(), true === e2.options.accessibility && e2.$list.off("keydown.slick", e2.keyHandler), true === e2.options.focusOnSelect && i(e2.$slideTrack).children().off("click.slick", e2.selectHandler), i(window).off("orientationchange.slick.slick-" + e2.instanceUid, e2.orientationChange), i(window).off("resize.slick.slick-" + e2.instanceUid, e2.resize), i("[draggable!=true]", e2.$slideTrack).off("dragstart", e2.preventDefault), i(window).off("load.slick.slick-" + e2.instanceUid, e2.setPosition);
  }, e.prototype.cleanUpSlideEvents = function() {
    var e2 = this;
    e2.$list.off("mouseenter.slick", i.proxy(e2.interrupt, e2, true)), e2.$list.off("mouseleave.slick", i.proxy(e2.interrupt, e2, false));
  }, e.prototype.cleanUpRows = function() {
    var i2, e2 = this;
    e2.options.rows > 1 && ((i2 = e2.$slides.children().children()).removeAttr("style"), e2.$slider.empty().append(i2));
  }, e.prototype.clickHandler = function(i2) {
    false === this.shouldClick && (i2.stopImmediatePropagation(), i2.stopPropagation(), i2.preventDefault());
  }, e.prototype.destroy = function(e2) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = true, e2 || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function(i2) {
    var e2 = this, t = {};
    t[e2.transitionType] = "", false === e2.options.fade ? e2.$slideTrack.css(t) : e2.$slides.eq(i2).css(t);
  }, e.prototype.fadeSlide = function(i2, e2) {
    var t = this;
    false === t.cssTransitions ? (t.$slides.eq(i2).css({ zIndex: t.options.zIndex }), t.$slides.eq(i2).animate({ opacity: 1 }, t.options.speed, t.options.easing, e2)) : (t.applyTransition(i2), t.$slides.eq(i2).css({ opacity: 1, zIndex: t.options.zIndex }), e2 && setTimeout(function() {
      t.disableTransition(i2), e2.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function(i2) {
    var e2 = this;
    false === e2.cssTransitions ? e2.$slides.eq(i2).animate({ opacity: 0, zIndex: e2.options.zIndex - 2 }, e2.options.speed, e2.options.easing) : (e2.applyTransition(i2), e2.$slides.eq(i2).css({ opacity: 0, zIndex: e2.options.zIndex - 2 }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function(i2) {
    var e2 = this;
    null !== i2 && (e2.$slidesCache = e2.$slides, e2.unload(), e2.$slideTrack.children(this.options.slide).detach(), e2.$slidesCache.filter(i2).appendTo(e2.$slideTrack), e2.reinit());
  }, e.prototype.focusHandler = function() {
    var e2 = this;
    e2.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function() {
        e2.options.pauseOnFocus && (e2.focussed = o.is(":focus"), e2.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
    return this.currentSlide;
  }, e.prototype.getDotCount = function() {
    var i2 = this, e2 = 0, t = 0, o = 0;
    if (true === i2.options.infinite) if (i2.slideCount <= i2.options.slidesToShow) ++o;
    else for (; e2 < i2.slideCount; ) ++o, e2 = t + i2.options.slidesToScroll, t += i2.options.slidesToScroll <= i2.options.slidesToShow ? i2.options.slidesToScroll : i2.options.slidesToShow;
    else if (true === i2.options.centerMode) o = i2.slideCount;
    else if (i2.options.asNavFor) for (; e2 < i2.slideCount; ) ++o, e2 = t + i2.options.slidesToScroll, t += i2.options.slidesToScroll <= i2.options.slidesToShow ? i2.options.slidesToScroll : i2.options.slidesToShow;
    else o = 1 + Math.ceil((i2.slideCount - i2.options.slidesToShow) / i2.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function(i2) {
    var e2, t, o, s, n = this, r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(true), true === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, true === n.options.vertical && true === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i2 + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i2 > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i2 - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i2 - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i2 + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i2 + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i2 + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), true === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : true === n.options.centerMode && true === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : true === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e2 = false === n.options.vertical ? i2 * n.slideWidth * -1 + n.slideOffset : i2 * t * -1 + r, true === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || false === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i2) : n.$slideTrack.children(".slick-slide").eq(i2 + n.options.slidesToShow), e2 = true === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, true === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || false === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i2) : n.$slideTrack.children(".slick-slide").eq(i2 + n.options.slidesToShow + 1), e2 = true === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e2 += (n.$list.width() - o.outerWidth()) / 2)), e2;
  }, e.prototype.getOption = e.prototype.slickGetOption = function(i2) {
    return this.options[i2];
  }, e.prototype.getNavigableIndexes = function() {
    var i2, e2 = this, t = 0, o = 0, s = [];
    for (false === e2.options.infinite ? i2 = e2.slideCount : (t = -1 * e2.options.slidesToScroll, o = -1 * e2.options.slidesToScroll, i2 = 2 * e2.slideCount); t < i2; ) s.push(t), t = o + e2.options.slidesToScroll, o += e2.options.slidesToScroll <= e2.options.slidesToShow ? e2.options.slidesToScroll : e2.options.slidesToShow;
    return s;
  }, e.prototype.getSlick = function() {
    return this;
  }, e.prototype.getSlideCount = function() {
    var e2, t, o = this;
    return t = true === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, true === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e2 = n, false;
    }), Math.abs(i(e2).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function(i2, e2) {
    this.changeSlide({ data: { message: "index", index: parseInt(i2) } }, e2);
  }, e.prototype.init = function(e2) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(true), t.focusHandler()), e2 && t.$slider.trigger("init", [t]), true === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = false, t.autoPlay());
  }, e.prototype.initADA = function() {
    var e2 = this, t = Math.ceil(e2.slideCount / e2.options.slidesToShow), o = e2.getNavigableIndexes().filter(function(i2) {
      return i2 >= 0 && i2 < e2.slideCount;
    });
    e2.$slides.add(e2.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e2.$dots && (e2.$slides.not(e2.$slideTrack.find(".slick-cloned")).each(function(t2) {
      var s2 = o.indexOf(t2);
      i(this).attr({ role: "tabpanel", id: "slick-slide" + e2.instanceUid + t2, tabindex: -1 }), -1 !== s2 && i(this).attr({ "aria-describedby": "slick-slide-control" + e2.instanceUid + s2 });
    }), e2.$dots.attr("role", "tablist").find("li").each(function(s2) {
      var n2 = o[s2];
      i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e2.instanceUid + s2, "aria-controls": "slick-slide" + e2.instanceUid + n2, "aria-label": s2 + 1 + " of " + t, "aria-selected": null, tabindex: "-1" });
    }).eq(e2.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());
    for (var s = e2.currentSlide, n = s + e2.options.slidesToShow; s < n; s++) e2.$slides.eq(s).attr("tabindex", 0);
    e2.activateADA();
  }, e.prototype.initArrowEvents = function() {
    var i2 = this;
    true === i2.options.arrows && i2.slideCount > i2.options.slidesToShow && (i2.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i2.changeSlide), i2.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i2.changeSlide), true === i2.options.accessibility && (i2.$prevArrow.on("keydown.slick", i2.keyHandler), i2.$nextArrow.on("keydown.slick", i2.keyHandler)));
  }, e.prototype.initDotEvents = function() {
    var e2 = this;
    true === e2.options.dots && (i("li", e2.$dots).on("click.slick", { message: "index" }, e2.changeSlide), true === e2.options.accessibility && e2.$dots.on("keydown.slick", e2.keyHandler)), true === e2.options.dots && true === e2.options.pauseOnDotsHover && i("li", e2.$dots).on("mouseenter.slick", i.proxy(e2.interrupt, e2, true)).on("mouseleave.slick", i.proxy(e2.interrupt, e2, false));
  }, e.prototype.initSlideEvents = function() {
    var e2 = this;
    e2.options.pauseOnHover && (e2.$list.on("mouseenter.slick", i.proxy(e2.interrupt, e2, true)), e2.$list.on("mouseleave.slick", i.proxy(e2.interrupt, e2, false)));
  }, e.prototype.initializeEvents = function() {
    var e2 = this;
    e2.initArrowEvents(), e2.initDotEvents(), e2.initSlideEvents(), e2.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e2.swipeHandler), e2.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e2.swipeHandler), e2.$list.on("touchend.slick mouseup.slick", { action: "end" }, e2.swipeHandler), e2.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e2.swipeHandler), e2.$list.on("click.slick", e2.clickHandler), i(document).on(e2.visibilityChange, i.proxy(e2.visibility, e2)), true === e2.options.accessibility && e2.$list.on("keydown.slick", e2.keyHandler), true === e2.options.focusOnSelect && i(e2.$slideTrack).children().on("click.slick", e2.selectHandler), i(window).on("orientationchange.slick.slick-" + e2.instanceUid, i.proxy(e2.orientationChange, e2)), i(window).on("resize.slick.slick-" + e2.instanceUid, i.proxy(e2.resize, e2)), i("[draggable!=true]", e2.$slideTrack).on("dragstart", e2.preventDefault), i(window).on("load.slick.slick-" + e2.instanceUid, e2.setPosition), i(e2.setPosition);
  }, e.prototype.initUI = function() {
    var i2 = this;
    true === i2.options.arrows && i2.slideCount > i2.options.slidesToShow && (i2.$prevArrow.show(), i2.$nextArrow.show()), true === i2.options.dots && i2.slideCount > i2.options.slidesToShow && i2.$dots.show();
  }, e.prototype.keyHandler = function(i2) {
    var e2 = this;
    i2.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i2.keyCode && true === e2.options.accessibility ? e2.changeSlide({ data: { message: true === e2.options.rtl ? "next" : "previous" } }) : 39 === i2.keyCode && true === e2.options.accessibility && e2.changeSlide({ data: { message: true === e2.options.rtl ? "previous" : "next" } }));
  }, e.prototype.lazyLoad = function() {
    function e2(e3) {
      i("img[data-lazy]", e3).each(function() {
        var e4 = i(this), t2 = i(this).attr("data-lazy"), o2 = i(this).attr("data-srcset"), s2 = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r2 = document.createElement("img");
        r2.onload = function() {
          e4.animate({ opacity: 0 }, 100, function() {
            o2 && (e4.attr("srcset", o2), s2 && e4.attr("sizes", s2)), e4.attr("src", t2).animate({ opacity: 1 }, 200, function() {
              e4.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e4, t2]);
          });
        }, r2.onerror = function() {
          e4.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e4, t2]);
        }, r2.src = t2;
      });
    }
    var t, o, s, n = this;
    if (true === n.options.centerMode ? true === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), true === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    e2(t), n.slideCount <= n.options.slidesToShow ? e2(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e2(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e2(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function() {
    var i2 = this;
    i2.setPosition(), i2.$slideTrack.css({ opacity: 1 }), i2.$slider.removeClass("slick-loading"), i2.initUI(), "progressive" === i2.options.lazyLoad && i2.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function() {
    this.changeSlide({ data: { message: "next" } });
  }, e.prototype.orientationChange = function() {
    var i2 = this;
    i2.checkResponsive(), i2.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function() {
    var i2 = this;
    i2.autoPlayClear(), i2.paused = true;
  }, e.prototype.play = e.prototype.slickPlay = function() {
    var i2 = this;
    i2.autoPlay(), i2.options.autoplay = true, i2.paused = false, i2.focussed = false, i2.interrupted = false;
  }, e.prototype.postSlide = function(e2) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e2]), t.animating = false, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), true === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function() {
    this.changeSlide({ data: { message: "previous" } });
  }, e.prototype.preventDefault = function(i2) {
    i2.preventDefault();
  }, e.prototype.progressiveLazyLoad = function(e2) {
    e2 = e2 || 1;
    var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), true === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function() {
      e2 < 3 ? setTimeout(function() {
        l.progressiveLazyLoad(e2 + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function(e2) {
    var t, o, s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(true), i.extend(s, s.initials, { currentSlide: t }), s.init(), e2 || s.changeSlide({ data: { message: "index", index: t } }, false);
  }, e.prototype.registerBreakpoints = function() {
    var e2, t, o, s = this, n = s.options.responsive || null;
    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e2 in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e2)) {
        for (t = n[e2].breakpoint; o >= 0; ) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
        s.breakpoints.push(t), s.breakpointSettings[t] = n[e2].settings;
      }
      s.breakpoints.sort(function(i2, e3) {
        return s.options.mobileFirst ? i2 - e3 : e3 - i2;
      });
    }
  }, e.prototype.reinit = function() {
    var e2 = this;
    e2.$slides = e2.$slideTrack.children(e2.options.slide).addClass("slick-slide"), e2.slideCount = e2.$slides.length, e2.currentSlide >= e2.slideCount && 0 !== e2.currentSlide && (e2.currentSlide = e2.currentSlide - e2.options.slidesToScroll), e2.slideCount <= e2.options.slidesToShow && (e2.currentSlide = 0), e2.registerBreakpoints(), e2.setProps(), e2.setupInfinite(), e2.buildArrows(), e2.updateArrows(), e2.initArrowEvents(), e2.buildDots(), e2.updateDots(), e2.initDotEvents(), e2.cleanUpSlideEvents(), e2.initSlideEvents(), e2.checkResponsive(false, true), true === e2.options.focusOnSelect && i(e2.$slideTrack).children().on("click.slick", e2.selectHandler), e2.setSlideClasses("number" == typeof e2.currentSlide ? e2.currentSlide : 0), e2.setPosition(), e2.focusHandler(), e2.paused = !e2.options.autoplay, e2.autoPlay(), e2.$slider.trigger("reInit", [e2]);
  }, e.prototype.resize = function() {
    var e2 = this;
    i(window).width() !== e2.windowWidth && (clearTimeout(e2.windowDelay), e2.windowDelay = window.setTimeout(function() {
      e2.windowWidth = i(window).width(), e2.checkResponsive(), e2.unslicked || e2.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function(i2, e2, t) {
    var o = this;
    if (i2 = "boolean" == typeof i2 ? true === (e2 = i2) ? 0 : o.slideCount - 1 : true === e2 ? --i2 : i2, o.slideCount < 1 || i2 < 0 || i2 > o.slideCount - 1) return false;
    o.unload(), true === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i2).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function(i2) {
    var e2, t, o = this, s = {};
    true === o.options.rtl && (i2 = -i2), e2 = "left" == o.positionProp ? Math.ceil(i2) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i2) + "px" : "0px", s[o.positionProp] = i2, false === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, false === o.cssTransitions ? (s[o.animType] = "translate(" + e2 + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e2 + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function() {
    var i2 = this;
    false === i2.options.vertical ? true === i2.options.centerMode && i2.$list.css({ padding: "0px " + i2.options.centerPadding }) : (i2.$list.height(i2.$slides.first().outerHeight(true) * i2.options.slidesToShow), true === i2.options.centerMode && i2.$list.css({ padding: i2.options.centerPadding + " 0px" })), i2.listWidth = i2.$list.width(), i2.listHeight = i2.$list.height(), false === i2.options.vertical && false === i2.options.variableWidth ? (i2.slideWidth = Math.ceil(i2.listWidth / i2.options.slidesToShow), i2.$slideTrack.width(Math.ceil(i2.slideWidth * i2.$slideTrack.children(".slick-slide").length))) : true === i2.options.variableWidth ? i2.$slideTrack.width(5e3 * i2.slideCount) : (i2.slideWidth = Math.ceil(i2.listWidth), i2.$slideTrack.height(Math.ceil(i2.$slides.first().outerHeight(true) * i2.$slideTrack.children(".slick-slide").length)));
    var e2 = i2.$slides.first().outerWidth(true) - i2.$slides.first().width();
    false === i2.options.variableWidth && i2.$slideTrack.children(".slick-slide").width(i2.slideWidth - e2);
  }, e.prototype.setFade = function() {
    var e2, t = this;
    t.$slides.each(function(o, s) {
      e2 = t.slideWidth * o * -1, true === t.options.rtl ? i(s).css({ position: "relative", right: e2, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e2, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
    }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
  }, e.prototype.setHeight = function() {
    var i2 = this;
    if (1 === i2.options.slidesToShow && true === i2.options.adaptiveHeight && false === i2.options.vertical) {
      var e2 = i2.$slides.eq(i2.currentSlide).outerHeight(true);
      i2.$list.css("height", e2);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function() {
    var e2, t, o, s, n, r = this, l = false;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
    else if ("multiple" === n) i.each(o, function(i2, e3) {
      r.options[i2] = e3;
    });
    else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
    else {
      for (e2 = r.options.responsive.length - 1; e2 >= 0; ) r.options.responsive[e2].breakpoint === s[t].breakpoint && r.options.responsive.splice(e2, 1), e2--;
      r.options.responsive.push(s[t]);
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function() {
    var i2 = this;
    i2.setDimensions(), i2.setHeight(), false === i2.options.fade ? i2.setCSS(i2.getLeft(i2.currentSlide)) : i2.setFade(), i2.$slider.trigger("setPosition", [i2]);
  }, e.prototype.setProps = function() {
    var i2 = this, e2 = document.body.style;
    i2.positionProp = true === i2.options.vertical ? "top" : "left", "top" === i2.positionProp ? i2.$slider.addClass("slick-vertical") : i2.$slider.removeClass("slick-vertical"), void 0 === e2.WebkitTransition && void 0 === e2.MozTransition && void 0 === e2.msTransition || true === i2.options.useCSS && (i2.cssTransitions = true), i2.options.fade && ("number" == typeof i2.options.zIndex ? i2.options.zIndex < 3 && (i2.options.zIndex = 3) : i2.options.zIndex = i2.defaults.zIndex), void 0 !== e2.OTransform && (i2.animType = "OTransform", i2.transformType = "-o-transform", i2.transitionType = "OTransition", void 0 === e2.perspectiveProperty && void 0 === e2.webkitPerspective && (i2.animType = false)), void 0 !== e2.MozTransform && (i2.animType = "MozTransform", i2.transformType = "-moz-transform", i2.transitionType = "MozTransition", void 0 === e2.perspectiveProperty && void 0 === e2.MozPerspective && (i2.animType = false)), void 0 !== e2.webkitTransform && (i2.animType = "webkitTransform", i2.transformType = "-webkit-transform", i2.transitionType = "webkitTransition", void 0 === e2.perspectiveProperty && void 0 === e2.webkitPerspective && (i2.animType = false)), void 0 !== e2.msTransform && (i2.animType = "msTransform", i2.transformType = "-ms-transform", i2.transitionType = "msTransition", void 0 === e2.msTransform && (i2.animType = false)), void 0 !== e2.transform && false !== i2.animType && (i2.animType = "transform", i2.transformType = "transform", i2.transitionType = "transition"), i2.transformsEnabled = i2.options.useTransform && null !== i2.animType && false !== i2.animType;
  }, e.prototype.setSlideClasses = function(i2) {
    var e2, t, o, s, n = this;
    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i2).addClass("slick-current"), true === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e2 = Math.floor(n.options.slidesToShow / 2), true === n.options.infinite && (i2 >= e2 && i2 <= n.slideCount - 1 - e2 ? n.$slides.slice(i2 - e2 + r, i2 + e2 + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i2, t.slice(o - e2 + 1 + r, o + e2 + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i2 ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i2 === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i2).addClass("slick-center");
    } else i2 >= 0 && i2 <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i2, i2 + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = true === n.options.infinite ? n.options.slidesToShow + i2 : i2, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i2 < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function() {
    var e2, t, o, s = this;
    if (true === s.options.fade && (s.options.centerMode = false), true === s.options.infinite && false === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = true === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e2 = s.slideCount; e2 > s.slideCount - o; e2 -= 1) t = e2 - 1, i(s.$slides[t]).clone(true).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e2 = 0; e2 < o + s.slideCount; e2 += 1) t = e2, i(s.$slides[t]).clone(true).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function(i2) {
    var e2 = this;
    i2 || e2.autoPlay(), e2.interrupted = i2;
  }, e.prototype.selectHandler = function(e2) {
    var t = this, o = i(e2.target).is(".slick-slide") ? i(e2.target) : i(e2.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, false, true) : t.slideHandler(s);
  }, e.prototype.slideHandler = function(i2, e2, t) {
    var o, s, n, r, l, d = null, a = this;
    if (e2 = e2 || false, !(true === a.animating && true === a.options.waitForAnimate || true === a.options.fade && a.currentSlide === i2)) if (false === e2 && a.asNavFor(i2), o = i2, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, false === a.options.infinite && false === a.options.centerMode && (i2 < 0 || i2 > a.getDotCount() * a.options.slidesToScroll)) false === a.options.fade && (o = a.currentSlide, true !== t ? a.animateSlide(r, function() {
      a.postSlide(o);
    }) : a.postSlide(o));
    else if (false === a.options.infinite && true === a.options.centerMode && (i2 < 0 || i2 > a.slideCount - a.options.slidesToScroll)) false === a.options.fade && (o = a.currentSlide, true !== t ? a.animateSlide(r, function() {
      a.postSlide(o);
    }) : a.postSlide(o));
    else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = true, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), true === a.options.fade) return true !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      true !== t ? a.animateSlide(d, function() {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function() {
    var i2 = this;
    true === i2.options.arrows && i2.slideCount > i2.options.slidesToShow && (i2.$prevArrow.hide(), i2.$nextArrow.hide()), true === i2.options.dots && i2.slideCount > i2.options.slidesToShow && i2.$dots.hide(), i2.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function() {
    var i2, e2, t, o, s = this;
    return i2 = s.touchObject.startX - s.touchObject.curX, e2 = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e2, i2), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? false === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? false === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? false === s.options.rtl ? "right" : "left" : true === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function(i2) {
    var e2, t, o = this;
    if (o.dragging = false, o.swiping = false, o.scrolling) return o.scrolling = false, false;
    if (o.interrupted = false, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return false;
    if (true === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e2 = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case "right":
        case "up":
          e2 = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }
      "vertical" != t && (o.slideHandler(e2), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function(i2) {
    var e2 = this;
    if (!(false === e2.options.swipe || "ontouchend" in document && false === e2.options.swipe || false === e2.options.draggable && -1 !== i2.type.indexOf("mouse"))) switch (e2.touchObject.fingerCount = i2.originalEvent && void 0 !== i2.originalEvent.touches ? i2.originalEvent.touches.length : 1, e2.touchObject.minSwipe = e2.listWidth / e2.options.touchThreshold, true === e2.options.verticalSwiping && (e2.touchObject.minSwipe = e2.listHeight / e2.options.touchThreshold), i2.data.action) {
      case "start":
        e2.swipeStart(i2);
        break;
      case "move":
        e2.swipeMove(i2);
        break;
      case "end":
        e2.swipeEnd(i2);
    }
  }, e.prototype.swipeMove = function(i2) {
    var e2, t, o, s, n, r, l = this;
    return n = void 0 !== i2.originalEvent ? i2.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e2 = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i2.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i2.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = true, false) : (true === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i2.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = true, i2.preventDefault()), s = (false === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), true === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = false, false === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = true), false === l.options.vertical ? l.swipeLeft = e2 + o * s : l.swipeLeft = e2 + o * (l.$list.height() / l.listWidth) * s, true === l.options.verticalSwiping && (l.swipeLeft = e2 + o * s), true !== l.options.fade && false !== l.options.touchMove && (true === l.animating ? (l.swipeLeft = null, false) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function(i2) {
    var e2, t = this;
    if (t.interrupted = true, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, false;
    void 0 !== i2.originalEvent && void 0 !== i2.originalEvent.touches && (e2 = i2.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e2 ? e2.pageX : i2.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e2 ? e2.pageY : i2.clientY, t.dragging = true;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
    var i2 = this;
    null !== i2.$slidesCache && (i2.unload(), i2.$slideTrack.children(this.options.slide).detach(), i2.$slidesCache.appendTo(i2.$slideTrack), i2.reinit());
  }, e.prototype.unload = function() {
    var e2 = this;
    i(".slick-cloned", e2.$slider).remove(), e2.$dots && e2.$dots.remove(), e2.$prevArrow && e2.htmlExpr.test(e2.options.prevArrow) && e2.$prevArrow.remove(), e2.$nextArrow && e2.htmlExpr.test(e2.options.nextArrow) && e2.$nextArrow.remove(), e2.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function(i2) {
    var e2 = this;
    e2.$slider.trigger("unslick", [e2, i2]), e2.destroy();
  }, e.prototype.updateArrows = function() {
    var i2 = this;
    Math.floor(i2.options.slidesToShow / 2), true === i2.options.arrows && i2.slideCount > i2.options.slidesToShow && !i2.options.infinite && (i2.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i2.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i2.currentSlide ? (i2.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i2.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i2.currentSlide >= i2.slideCount - i2.options.slidesToShow && false === i2.options.centerMode ? (i2.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i2.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i2.currentSlide >= i2.slideCount - 1 && true === i2.options.centerMode && (i2.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i2.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function() {
    var i2 = this;
    null !== i2.$dots && (i2.$dots.find("li").removeClass("slick-active").end(), i2.$dots.find("li").eq(Math.floor(i2.currentSlide / i2.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function() {
    var i2 = this;
    i2.options.autoplay && (document[i2.hidden] ? i2.interrupted = true : i2.interrupted = false);
  }, i.fn.slick = function() {
    var i2, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
    for (i2 = 0; i2 < r; i2++) if ("object" == typeof s || void 0 === s ? o[i2].slick = new e(o[i2], s) : t = o[i2].slick[s].apply(o[i2].slick, n), void 0 !== t) return t;
    return o;
  };
});
!function(e) {
  e.fn.niceSelect = function(t) {
    function s(t2) {
      t2.after(e("<div></div>").addClass("nice-select").addClass(t2.attr("class") || "").addClass(t2.attr("disabled") ? "disabled" : "").attr("tabindex", t2.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
      var s2 = t2.next(), n2 = t2.find("option"), i = t2.find("option:selected");
      s2.find(".current").html(i.data("display") || i.text()), n2.each(function(t3) {
        var n3 = e(this), i2 = n3.data("display");
        s2.find("ul").append(e("<li></li>").attr("data-value", n3.val()).attr("data-display", i2 || null).addClass("option" + (n3.is(":selected") ? " selected" : "") + (n3.is(":disabled") ? " disabled" : "")).html(n3.text()));
      });
    }
    if ("string" == typeof t) return "update" == t ? this.each(function() {
      var t2 = e(this), n2 = e(this).next(".nice-select"), i = n2.hasClass("open");
      n2.length && (n2.remove(), s(t2), i && t2.next().trigger("click"));
    }) : "destroy" == t ? (this.each(function() {
      var t2 = e(this), s2 = e(this).next(".nice-select");
      s2.length && (s2.remove(), t2.css("display", ""));
    }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
    this.hide(), this.each(function() {
      var t2 = e(this);
      t2.next().hasClass("nice-select") || s(t2);
    }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t2) {
      var s2 = e(this);
      e(".nice-select").not(s2).removeClass("open"), s2.toggleClass("open"), s2.hasClass("open") ? (s2.find(".option"), s2.find(".focus").removeClass("focus"), s2.find(".selected").addClass("focus")) : s2.focus();
    }), e(document).on("click.nice_select", function(t2) {
      0 === e(t2.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
    }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t2) {
      var s2 = e(this), n2 = s2.closest(".nice-select");
      n2.find(".selected").removeClass("selected"), s2.addClass("selected");
      var i = s2.data("display") || s2.text();
      n2.find(".current").text(i), n2.prev("select").val(s2.data("value")).trigger("change");
    }), e(document).on("keydown.nice_select", ".nice-select", function(t2) {
      var s2 = e(this), n2 = e(s2.find(".focus") || s2.find(".list .option.selected"));
      if (32 == t2.keyCode || 13 == t2.keyCode) return s2.hasClass("open") ? n2.trigger("click") : s2.trigger("click"), false;
      if (40 == t2.keyCode) {
        if (s2.hasClass("open")) {
          var i = n2.nextAll(".option:not(.disabled)").first();
          i.length > 0 && (s2.find(".focus").removeClass("focus"), i.addClass("focus"));
        } else s2.trigger("click");
        return false;
      }
      if (38 == t2.keyCode) {
        if (s2.hasClass("open")) {
          var l = n2.prevAll(".option:not(.disabled)").first();
          l.length > 0 && (s2.find(".focus").removeClass("focus"), l.addClass("focus"));
        } else s2.trigger("click");
        return false;
      }
      if (27 == t2.keyCode) s2.hasClass("open") && s2.trigger("click");
      else if (9 == t2.keyCode && s2.hasClass("open")) return false;
    });
    var n = document.createElement("a").style;
    return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
  };
}(jQuery);
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t, e) {
  "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function() {
  function t() {
  }
  let e = t.prototype;
  return e.on = function(t2, e2) {
    if (!t2 || !e2) return this;
    let i = this._events = this._events || {}, s = i[t2] = i[t2] || [];
    return s.includes(e2) || s.push(e2), this;
  }, e.once = function(t2, e2) {
    if (!t2 || !e2) return this;
    this.on(t2, e2);
    let i = this._onceEvents = this._onceEvents || {};
    return (i[t2] = i[t2] || {})[e2] = true, this;
  }, e.off = function(t2, e2) {
    let i = this._events && this._events[t2];
    if (!i || !i.length) return this;
    let s = i.indexOf(e2);
    return -1 != s && i.splice(s, 1), this;
  }, e.emitEvent = function(t2, e2) {
    let i = this._events && this._events[t2];
    if (!i || !i.length) return this;
    i = i.slice(0), e2 = e2 || [];
    let s = this._onceEvents && this._onceEvents[t2];
    for (let n of i) {
      s && s[n] && (this.off(t2, n), delete s[n]), n.apply(this, e2);
    }
    return this;
  }, e.allOff = function() {
    return delete this._events, delete this._onceEvents, this;
  }, t;
}), /*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t, e) {
  "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter);
}("undefined" != typeof window ? window : this, function(t, e) {
  let i = t.jQuery, s = t.console;
  function n(t2, e2, o2) {
    if (!(this instanceof n)) return new n(t2, e2, o2);
    let r2 = t2;
    var h2;
    ("string" == typeof t2 && (r2 = document.querySelectorAll(t2)), r2) ? (this.elements = (h2 = r2, Array.isArray(h2) ? h2 : "object" == typeof h2 && "number" == typeof h2.length ? [...h2] : [h2]), this.options = {}, "function" == typeof e2 ? o2 = e2 : Object.assign(this.options, e2), o2 && this.on("always", o2), this.getImages(), i && (this.jqDeferred = new i.Deferred()), setTimeout(this.check.bind(this))) : s.error(`Bad element for imagesLoaded ${r2 || t2}`);
  }
  n.prototype = Object.create(e.prototype), n.prototype.getImages = function() {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  };
  const o = [1, 9, 11];
  n.prototype.addElementImages = function(t2) {
    "IMG" === t2.nodeName && this.addImage(t2), true === this.options.background && this.addElementBackgroundImages(t2);
    let { nodeType: e2 } = t2;
    if (!e2 || !o.includes(e2)) return;
    let i2 = t2.querySelectorAll("img");
    for (let t3 of i2) this.addImage(t3);
    if ("string" == typeof this.options.background) {
      let e3 = t2.querySelectorAll(this.options.background);
      for (let t3 of e3) this.addElementBackgroundImages(t3);
    }
  };
  const r = /url\((['"])?(.*?)\1\)/gi;
  function h(t2) {
    this.img = t2;
  }
  function d(t2, e2) {
    this.url = t2, this.element = e2, this.img = new Image();
  }
  return n.prototype.addElementBackgroundImages = function(t2) {
    let e2 = getComputedStyle(t2);
    if (!e2) return;
    let i2 = r.exec(e2.backgroundImage);
    for (; null !== i2; ) {
      let s2 = i2 && i2[2];
      s2 && this.addBackground(s2, t2), i2 = r.exec(e2.backgroundImage);
    }
  }, n.prototype.addImage = function(t2) {
    let e2 = new h(t2);
    this.images.push(e2);
  }, n.prototype.addBackground = function(t2, e2) {
    let i2 = new d(t2, e2);
    this.images.push(i2);
  }, n.prototype.check = function() {
    if (this.progressedCount = 0, this.hasAnyBroken = false, !this.images.length) return void this.complete();
    let t2 = (t3, e2, i2) => {
      setTimeout(() => {
        this.progress(t3, e2, i2);
      });
    };
    this.images.forEach(function(e2) {
      e2.once("progress", t2), e2.check();
    });
  }, n.prototype.progress = function(t2, e2, i2) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t2.isLoaded, this.emitEvent("progress", [this, t2, e2]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t2), this.progressedCount === this.images.length && this.complete(), this.options.debug && s && s.log(`progress: ${i2}`, t2, e2);
  }, n.prototype.complete = function() {
    let t2 = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = true, this.emitEvent(t2, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      let t3 = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t3](this);
    }
  }, h.prototype = Object.create(e.prototype), h.prototype.check = function() {
    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src);
  }, h.prototype.getIsImageComplete = function() {
    return this.img.complete && this.img.naturalWidth;
  }, h.prototype.confirm = function(t2, e2) {
    this.isLoaded = t2;
    let { parentNode: i2 } = this.img, s2 = "PICTURE" === i2.nodeName ? i2 : this.img;
    this.emitEvent("progress", [this, s2, e2]);
  }, h.prototype.handleEvent = function(t2) {
    let e2 = "on" + t2.type;
    this[e2] && this[e2](t2);
  }, h.prototype.onload = function() {
    this.confirm(true, "onload"), this.unbindEvents();
  }, h.prototype.onerror = function() {
    this.confirm(false, "onerror"), this.unbindEvents();
  }, h.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, d.prototype = Object.create(h.prototype), d.prototype.check = function() {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, d.prototype.unbindEvents = function() {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, d.prototype.confirm = function(t2, e2) {
    this.isLoaded = t2, this.emitEvent("progress", [this, this.element, e2]);
  }, n.makeJQueryPlugin = function(e2) {
    (e2 = e2 || t.jQuery) && (i = e2, i.fn.imagesLoaded = function(t2, e3) {
      return new n(this, t2, e3).jqDeferred.promise(i(this));
    });
  }, n.makeJQueryPlugin(), n;
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!function(t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
    return e(t, i);
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function(t, e) {
  "use strict";
  function i(i2, s2, a) {
    function u(t2, e2, o2) {
      var n2, s3 = "$()." + i2 + '("' + e2 + '")';
      return t2.each(function(t3, u2) {
        var h2 = a.data(u2, i2);
        if (!h2) return void r(i2 + " not initialized. Cannot call methods, i.e. " + s3);
        var d = h2[e2];
        if (!d || "_" == e2.charAt(0)) return void r(s3 + " is not a valid method");
        var l = d.apply(h2, o2);
        n2 = void 0 === n2 ? l : n2;
      }), void 0 !== n2 ? n2 : t2;
    }
    function h(t2, e2) {
      t2.each(function(t3, o2) {
        var n2 = a.data(o2, i2);
        n2 ? (n2.option(e2), n2._init()) : (n2 = new s2(o2, e2), a.data(o2, i2, n2));
      });
    }
    a = a || e || t.jQuery, a && (s2.prototype.option || (s2.prototype.option = function(t2) {
      a.isPlainObject(t2) && (this.options = a.extend(true, this.options, t2));
    }), a.fn[i2] = function(t2) {
      if ("string" == typeof t2) {
        var e2 = n.call(arguments, 1);
        return u(this, t2, e2);
      }
      return h(this, t2), this;
    }, o(a));
  }
  function o(t2) {
    !t2 || t2 && t2.bridget || (t2.bridget = i);
  }
  var n = Array.prototype.slice, s = t.console, r = "undefined" == typeof s ? function() {
  } : function(t2) {
    s.error(t2);
  };
  return o(e || t.jQuery), i;
}), function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function() {
  function t() {
  }
  var e = t.prototype;
  return e.on = function(t2, e2) {
    if (t2 && e2) {
      var i = this._events = this._events || {}, o = i[t2] = i[t2] || [];
      return o.indexOf(e2) == -1 && o.push(e2), this;
    }
  }, e.once = function(t2, e2) {
    if (t2 && e2) {
      this.on(t2, e2);
      var i = this._onceEvents = this._onceEvents || {}, o = i[t2] = i[t2] || {};
      return o[e2] = true, this;
    }
  }, e.off = function(t2, e2) {
    var i = this._events && this._events[t2];
    if (i && i.length) {
      var o = i.indexOf(e2);
      return o != -1 && i.splice(o, 1), this;
    }
  }, e.emitEvent = function(t2, e2) {
    var i = this._events && this._events[t2];
    if (i && i.length) {
      i = i.slice(0), e2 = e2 || [];
      for (var o = this._onceEvents && this._onceEvents[t2], n = 0; n < i.length; n++) {
        var s = i[n], r = o && o[s];
        r && (this.off(t2, s), delete o[s]), s.apply(this, e2);
      }
      return this;
    }
  }, e.allOff = function() {
    delete this._events, delete this._onceEvents;
  }, t;
}), function(t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
}(window, function() {
  "use strict";
  function t(t2) {
    var e2 = parseFloat(t2), i2 = t2.indexOf("%") == -1 && !isNaN(e2);
    return i2 && e2;
  }
  function e() {
  }
  function i() {
    for (var t2 = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e2 = 0; e2 < h; e2++) {
      var i2 = u[e2];
      t2[i2] = 0;
    }
    return t2;
  }
  function o(t2) {
    var e2 = getComputedStyle(t2);
    return e2 || a("Style returned " + e2 + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e2;
  }
  function n() {
    if (!d) {
      d = true;
      var e2 = document.createElement("div");
      e2.style.width = "200px", e2.style.padding = "1px 2px 3px 4px", e2.style.borderStyle = "solid", e2.style.borderWidth = "1px 2px 3px 4px", e2.style.boxSizing = "border-box";
      var i2 = document.body || document.documentElement;
      i2.appendChild(e2);
      var n2 = o(e2);
      r = 200 == Math.round(t(n2.width)), s.isBoxSizeOuter = r, i2.removeChild(e2);
    }
  }
  function s(e2) {
    if (n(), "string" == typeof e2 && (e2 = document.querySelector(e2)), e2 && "object" == typeof e2 && e2.nodeType) {
      var s2 = o(e2);
      if ("none" == s2.display) return i();
      var a2 = {};
      a2.width = e2.offsetWidth, a2.height = e2.offsetHeight;
      for (var d2 = a2.isBorderBox = "border-box" == s2.boxSizing, l = 0; l < h; l++) {
        var f = u[l], c = s2[f], m = parseFloat(c);
        a2[f] = isNaN(m) ? 0 : m;
      }
      var p = a2.paddingLeft + a2.paddingRight, y = a2.paddingTop + a2.paddingBottom, g = a2.marginLeft + a2.marginRight, v = a2.marginTop + a2.marginBottom, _ = a2.borderLeftWidth + a2.borderRightWidth, z = a2.borderTopWidth + a2.borderBottomWidth, I = d2 && r, x = t(s2.width);
      x !== false && (a2.width = x + (I ? 0 : p + _));
      var S = t(s2.height);
      return S !== false && (a2.height = S + (I ? 0 : y + z)), a2.innerWidth = a2.width - (p + _), a2.innerHeight = a2.height - (y + z), a2.outerWidth = a2.width + g, a2.outerHeight = a2.height + v, a2;
    }
  }
  var r, a = "undefined" == typeof console ? e : function(t2) {
    console.error(t2);
  }, u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = false;
  return s;
}), function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function() {
  "use strict";
  var t = function() {
    var t2 = window.Element.prototype;
    if (t2.matches) return "matches";
    if (t2.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var o = e[i], n = o + "MatchesSelector";
      if (t2[n]) return n;
    }
  }();
  return function(e, i) {
    return e[t](i);
  };
}), function(t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
    return e(t, i);
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function(t, e) {
  var i = {};
  i.extend = function(t2, e2) {
    for (var i2 in e2) t2[i2] = e2[i2];
    return t2;
  }, i.modulo = function(t2, e2) {
    return (t2 % e2 + e2) % e2;
  };
  var o = Array.prototype.slice;
  i.makeArray = function(t2) {
    if (Array.isArray(t2)) return t2;
    if (null === t2 || void 0 === t2) return [];
    var e2 = "object" == typeof t2 && "number" == typeof t2.length;
    return e2 ? o.call(t2) : [t2];
  }, i.removeFrom = function(t2, e2) {
    var i2 = t2.indexOf(e2);
    i2 != -1 && t2.splice(i2, 1);
  }, i.getParent = function(t2, i2) {
    for (; t2.parentNode && t2 != document.body; ) if (t2 = t2.parentNode, e(t2, i2)) return t2;
  }, i.getQueryElement = function(t2) {
    return "string" == typeof t2 ? document.querySelector(t2) : t2;
  }, i.handleEvent = function(t2) {
    var e2 = "on" + t2.type;
    this[e2] && this[e2](t2);
  }, i.filterFindElements = function(t2, o2) {
    t2 = i.makeArray(t2);
    var n2 = [];
    return t2.forEach(function(t3) {
      if (t3 instanceof HTMLElement) {
        if (!o2) return void n2.push(t3);
        e(t3, o2) && n2.push(t3);
        for (var i2 = t3.querySelectorAll(o2), s = 0; s < i2.length; s++) n2.push(i2[s]);
      }
    }), n2;
  }, i.debounceMethod = function(t2, e2, i2) {
    i2 = i2 || 100;
    var o2 = t2.prototype[e2], n2 = e2 + "Timeout";
    t2.prototype[e2] = function() {
      var t3 = this[n2];
      clearTimeout(t3);
      var e3 = arguments, s = this;
      this[n2] = setTimeout(function() {
        o2.apply(s, e3), delete s[n2];
      }, i2);
    };
  }, i.docReady = function(t2) {
    var e2 = document.readyState;
    "complete" == e2 || "interactive" == e2 ? setTimeout(t2) : document.addEventListener("DOMContentLoaded", t2);
  }, i.toDashed = function(t2) {
    return t2.replace(/(.)([A-Z])/g, function(t3, e2, i2) {
      return e2 + "-" + i2;
    }).toLowerCase();
  };
  var n = t.console;
  return i.htmlInit = function(e2, o2) {
    i.docReady(function() {
      var s = i.toDashed(o2), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"), u = document.querySelectorAll(".js-" + s), h = i.makeArray(a).concat(i.makeArray(u)), d = r + "-options", l = t.jQuery;
      h.forEach(function(t2) {
        var i2, s2 = t2.getAttribute(r) || t2.getAttribute(d);
        try {
          i2 = s2 && JSON.parse(s2);
        } catch (a2) {
          return void (n && n.error("Error parsing " + r + " on " + t2.className + ": " + a2));
        }
        var u2 = new e2(t2, i2);
        l && l.data(t2, o2, u2);
      });
    });
  }, i;
}), function(t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function(t, e) {
  "use strict";
  function i(t2) {
    for (var e2 in t2) return false;
    return e2 = null, true;
  }
  function o(t2, e2) {
    t2 && (this.element = t2, this.layout = e2, this.position = { x: 0, y: 0 }, this._create());
  }
  function n(t2) {
    return t2.replace(/([A-Z])/g, function(t3) {
      return "-" + t3.toLowerCase();
    });
  }
  var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition", a = "string" == typeof s.transform ? "transform" : "WebkitTransform", u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r], h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" }, d = o.prototype = Object.create(t.prototype);
  d.constructor = o, d._create = function() {
    this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
  }, d.handleEvent = function(t2) {
    var e2 = "on" + t2.type;
    this[e2] && this[e2](t2);
  }, d.getSize = function() {
    this.size = e(this.element);
  }, d.css = function(t2) {
    var e2 = this.element.style;
    for (var i2 in t2) {
      var o2 = h[i2] || i2;
      e2[o2] = t2[i2];
    }
  }, d.getPosition = function() {
    var t2 = getComputedStyle(this.element), e2 = this.layout._getOption("originLeft"), i2 = this.layout._getOption("originTop"), o2 = t2[e2 ? "left" : "right"], n2 = t2[i2 ? "top" : "bottom"], s2 = parseFloat(o2), r2 = parseFloat(n2), a2 = this.layout.size;
    o2.indexOf("%") != -1 && (s2 = s2 / 100 * a2.width), n2.indexOf("%") != -1 && (r2 = r2 / 100 * a2.height), s2 = isNaN(s2) ? 0 : s2, r2 = isNaN(r2) ? 0 : r2, s2 -= e2 ? a2.paddingLeft : a2.paddingRight, r2 -= i2 ? a2.paddingTop : a2.paddingBottom, this.position.x = s2, this.position.y = r2;
  }, d.layoutPosition = function() {
    var t2 = this.layout.size, e2 = {}, i2 = this.layout._getOption("originLeft"), o2 = this.layout._getOption("originTop"), n2 = i2 ? "paddingLeft" : "paddingRight", s2 = i2 ? "left" : "right", r2 = i2 ? "right" : "left", a2 = this.position.x + t2[n2];
    e2[s2] = this.getXValue(a2), e2[r2] = "";
    var u2 = o2 ? "paddingTop" : "paddingBottom", h2 = o2 ? "top" : "bottom", d2 = o2 ? "bottom" : "top", l2 = this.position.y + t2[u2];
    e2[h2] = this.getYValue(l2), e2[d2] = "", this.css(e2), this.emitEvent("layout", [this]);
  }, d.getXValue = function(t2) {
    var e2 = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e2 ? t2 / this.layout.size.width * 100 + "%" : t2 + "px";
  }, d.getYValue = function(t2) {
    var e2 = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e2 ? t2 / this.layout.size.height * 100 + "%" : t2 + "px";
  }, d._transitionTo = function(t2, e2) {
    this.getPosition();
    var i2 = this.position.x, o2 = this.position.y, n2 = t2 == this.position.x && e2 == this.position.y;
    if (this.setPosition(t2, e2), n2 && !this.isTransitioning) return void this.layoutPosition();
    var s2 = t2 - i2, r2 = e2 - o2, a2 = {};
    a2.transform = this.getTranslate(s2, r2), this.transition({ to: a2, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: true });
  }, d.getTranslate = function(t2, e2) {
    var i2 = this.layout._getOption("originLeft"), o2 = this.layout._getOption("originTop");
    return t2 = i2 ? t2 : -t2, e2 = o2 ? e2 : -e2, "translate3d(" + t2 + "px, " + e2 + "px, 0)";
  }, d.goTo = function(t2, e2) {
    this.setPosition(t2, e2), this.layoutPosition();
  }, d.moveTo = d._transitionTo, d.setPosition = function(t2, e2) {
    this.position.x = parseFloat(t2), this.position.y = parseFloat(e2);
  }, d._nonTransition = function(t2) {
    this.css(t2.to), t2.isCleaning && this._removeStyles(t2.to);
    for (var e2 in t2.onTransitionEnd) t2.onTransitionEnd[e2].call(this);
  }, d.transition = function(t2) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t2);
    var e2 = this._transn;
    for (var i2 in t2.onTransitionEnd) e2.onEnd[i2] = t2.onTransitionEnd[i2];
    for (i2 in t2.to) e2.ingProperties[i2] = true, t2.isCleaning && (e2.clean[i2] = true);
    if (t2.from) {
      this.css(t2.from);
      var o2 = this.element.offsetHeight;
      o2 = null;
    }
    this.enableTransition(t2.to), this.css(t2.to), this.isTransitioning = true;
  };
  var l = "opacity," + n(a);
  d.enableTransition = function() {
    if (!this.isTransitioning) {
      var t2 = this.layout.options.transitionDuration;
      t2 = "number" == typeof t2 ? t2 + "ms" : t2, this.css({ transitionProperty: l, transitionDuration: t2, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, false);
    }
  }, d.onwebkitTransitionEnd = function(t2) {
    this.ontransitionend(t2);
  }, d.onotransitionend = function(t2) {
    this.ontransitionend(t2);
  };
  var f = { "-webkit-transform": "transform" };
  d.ontransitionend = function(t2) {
    if (t2.target === this.element) {
      var e2 = this._transn, o2 = f[t2.propertyName] || t2.propertyName;
      if (delete e2.ingProperties[o2], i(e2.ingProperties) && this.disableTransition(), o2 in e2.clean && (this.element.style[t2.propertyName] = "", delete e2.clean[o2]), o2 in e2.onEnd) {
        var n2 = e2.onEnd[o2];
        n2.call(this), delete e2.onEnd[o2];
      }
      this.emitEvent("transitionEnd", [this]);
    }
  }, d.disableTransition = function() {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, false), this.isTransitioning = false;
  }, d._removeStyles = function(t2) {
    var e2 = {};
    for (var i2 in t2) e2[i2] = "";
    this.css(e2);
  };
  var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
  return d.removeTransitionStyles = function() {
    this.css(c);
  }, d.stagger = function(t2) {
    t2 = isNaN(t2) ? 0 : t2, this.staggerDelay = t2 + "ms";
  }, d.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
  }, d.remove = function() {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
      this.removeElem();
    }), void this.hide()) : void this.removeElem();
  }, d.reveal = function() {
    delete this.isHidden, this.css({ display: "" });
    var t2 = this.layout.options, e2 = {}, i2 = this.getHideRevealTransitionEndProperty("visibleStyle");
    e2[i2] = this.onRevealTransitionEnd, this.transition({ from: t2.hiddenStyle, to: t2.visibleStyle, isCleaning: true, onTransitionEnd: e2 });
  }, d.onRevealTransitionEnd = function() {
    this.isHidden || this.emitEvent("reveal");
  }, d.getHideRevealTransitionEndProperty = function(t2) {
    var e2 = this.layout.options[t2];
    if (e2.opacity) return "opacity";
    for (var i2 in e2) return i2;
  }, d.hide = function() {
    this.isHidden = true, this.css({ display: "" });
    var t2 = this.layout.options, e2 = {}, i2 = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e2[i2] = this.onHideTransitionEnd, this.transition({ from: t2.visibleStyle, to: t2.hiddenStyle, isCleaning: true, onTransitionEnd: e2 });
  }, d.onHideTransitionEnd = function() {
    this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
  }, d.destroy = function() {
    this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
  }, o;
}), function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
    return e(t, i, o, n, s);
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function(t, e, i, o, n) {
  "use strict";
  function s(t2, e2) {
    var i2 = o.getQueryElement(t2);
    if (!i2) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i2 || t2)));
    this.element = i2, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e2);
    var n2 = ++l;
    this.element.outlayerGUID = n2, f[n2] = this, this._create();
    var s2 = this._getOption("initLayout");
    s2 && this.layout();
  }
  function r(t2) {
    function e2() {
      t2.apply(this, arguments);
    }
    return e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2;
  }
  function a(t2) {
    if ("number" == typeof t2) return t2;
    var e2 = t2.match(/(^\d*\.?\d*)(\w*)/), i2 = e2 && e2[1], o2 = e2 && e2[2];
    if (!i2.length) return 0;
    i2 = parseFloat(i2);
    var n2 = m[o2] || 1;
    return i2 * n2;
  }
  var u = t.console, h = t.jQuery, d = function() {
  }, l = 0, f = {};
  s.namespace = "outlayer", s.Item = n, s.defaults = { containerStyle: { position: "relative" }, initLayout: true, originLeft: true, originTop: true, resize: true, resizeContainer: true, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };
  var c = s.prototype;
  o.extend(c, e.prototype), c.option = function(t2) {
    o.extend(this.options, t2);
  }, c._getOption = function(t2) {
    var e2 = this.constructor.compatOptions[t2];
    return e2 && void 0 !== this.options[e2] ? this.options[e2] : this.options[t2];
  }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function() {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
    var t2 = this._getOption("resize");
    t2 && this.bindResize();
  }, c.reloadItems = function() {
    this.items = this._itemize(this.element.children);
  }, c._itemize = function(t2) {
    for (var e2 = this._filterFindItemElements(t2), i2 = this.constructor.Item, o2 = [], n2 = 0; n2 < e2.length; n2++) {
      var s2 = e2[n2], r2 = new i2(s2, this);
      o2.push(r2);
    }
    return o2;
  }, c._filterFindItemElements = function(t2) {
    return o.filterFindElements(t2, this.options.itemSelector);
  }, c.getItemElements = function() {
    return this.items.map(function(t2) {
      return t2.element;
    });
  }, c.layout = function() {
    this._resetLayout(), this._manageStamps();
    var t2 = this._getOption("layoutInstant"), e2 = void 0 !== t2 ? t2 : !this._isLayoutInited;
    this.layoutItems(this.items, e2), this._isLayoutInited = true;
  }, c._init = c.layout, c._resetLayout = function() {
    this.getSize();
  }, c.getSize = function() {
    this.size = i(this.element);
  }, c._getMeasurement = function(t2, e2) {
    var o2, n2 = this.options[t2];
    n2 ? ("string" == typeof n2 ? o2 = this.element.querySelector(n2) : n2 instanceof HTMLElement && (o2 = n2), this[t2] = o2 ? i(o2)[e2] : n2) : this[t2] = 0;
  }, c.layoutItems = function(t2, e2) {
    t2 = this._getItemsForLayout(t2), this._layoutItems(t2, e2), this._postLayout();
  }, c._getItemsForLayout = function(t2) {
    return t2.filter(function(t3) {
      return !t3.isIgnored;
    });
  }, c._layoutItems = function(t2, e2) {
    if (this._emitCompleteOnItems("layout", t2), t2 && t2.length) {
      var i2 = [];
      t2.forEach(function(t3) {
        var o2 = this._getItemLayoutPosition(t3);
        o2.item = t3, o2.isInstant = e2 || t3.isLayoutInstant, i2.push(o2);
      }, this), this._processLayoutQueue(i2);
    }
  }, c._getItemLayoutPosition = function() {
    return { x: 0, y: 0 };
  }, c._processLayoutQueue = function(t2) {
    this.updateStagger(), t2.forEach(function(t3, e2) {
      this._positionItem(t3.item, t3.x, t3.y, t3.isInstant, e2);
    }, this);
  }, c.updateStagger = function() {
    var t2 = this.options.stagger;
    return null === t2 || void 0 === t2 ? void (this.stagger = 0) : (this.stagger = a(t2), this.stagger);
  }, c._positionItem = function(t2, e2, i2, o2, n2) {
    o2 ? t2.goTo(e2, i2) : (t2.stagger(n2 * this.stagger), t2.moveTo(e2, i2));
  }, c._postLayout = function() {
    this.resizeContainer();
  }, c.resizeContainer = function() {
    var t2 = this._getOption("resizeContainer");
    if (t2) {
      var e2 = this._getContainerSize();
      e2 && (this._setContainerMeasure(e2.width, true), this._setContainerMeasure(e2.height, false));
    }
  }, c._getContainerSize = d, c._setContainerMeasure = function(t2, e2) {
    if (void 0 !== t2) {
      var i2 = this.size;
      i2.isBorderBox && (t2 += e2 ? i2.paddingLeft + i2.paddingRight + i2.borderLeftWidth + i2.borderRightWidth : i2.paddingBottom + i2.paddingTop + i2.borderTopWidth + i2.borderBottomWidth), t2 = Math.max(t2, 0), this.element.style[e2 ? "width" : "height"] = t2 + "px";
    }
  }, c._emitCompleteOnItems = function(t2, e2) {
    function i2() {
      n2.dispatchEvent(t2 + "Complete", null, [e2]);
    }
    function o2() {
      r2++, r2 == s2 && i2();
    }
    var n2 = this, s2 = e2.length;
    if (!e2 || !s2) return void i2();
    var r2 = 0;
    e2.forEach(function(e3) {
      e3.once(t2, o2);
    });
  }, c.dispatchEvent = function(t2, e2, i2) {
    var o2 = e2 ? [e2].concat(i2) : i2;
    if (this.emitEvent(t2, o2), h) if (this.$element = this.$element || h(this.element), e2) {
      var n2 = h.Event(e2);
      n2.type = t2, this.$element.trigger(n2, i2);
    } else this.$element.trigger(t2, i2);
  }, c.ignore = function(t2) {
    var e2 = this.getItem(t2);
    e2 && (e2.isIgnored = true);
  }, c.unignore = function(t2) {
    var e2 = this.getItem(t2);
    e2 && delete e2.isIgnored;
  }, c.stamp = function(t2) {
    t2 = this._find(t2), t2 && (this.stamps = this.stamps.concat(t2), t2.forEach(this.ignore, this));
  }, c.unstamp = function(t2) {
    t2 = this._find(t2), t2 && t2.forEach(function(t3) {
      o.removeFrom(this.stamps, t3), this.unignore(t3);
    }, this);
  }, c._find = function(t2) {
    if (t2) return "string" == typeof t2 && (t2 = this.element.querySelectorAll(t2)), t2 = o.makeArray(t2);
  }, c._manageStamps = function() {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }, c._getBoundingRect = function() {
    var t2 = this.element.getBoundingClientRect(), e2 = this.size;
    this._boundingRect = { left: t2.left + e2.paddingLeft + e2.borderLeftWidth, top: t2.top + e2.paddingTop + e2.borderTopWidth, right: t2.right - (e2.paddingRight + e2.borderRightWidth), bottom: t2.bottom - (e2.paddingBottom + e2.borderBottomWidth) };
  }, c._manageStamp = d, c._getElementOffset = function(t2) {
    var e2 = t2.getBoundingClientRect(), o2 = this._boundingRect, n2 = i(t2), s2 = { left: e2.left - o2.left - n2.marginLeft, top: e2.top - o2.top - n2.marginTop, right: o2.right - e2.right - n2.marginRight, bottom: o2.bottom - e2.bottom - n2.marginBottom };
    return s2;
  }, c.handleEvent = o.handleEvent, c.bindResize = function() {
    t.addEventListener("resize", this), this.isResizeBound = true;
  }, c.unbindResize = function() {
    t.removeEventListener("resize", this), this.isResizeBound = false;
  }, c.onresize = function() {
    this.resize();
  }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }, c.needsResizeLayout = function() {
    var t2 = i(this.element), e2 = this.size && t2;
    return e2 && t2.innerWidth !== this.size.innerWidth;
  }, c.addItems = function(t2) {
    var e2 = this._itemize(t2);
    return e2.length && (this.items = this.items.concat(e2)), e2;
  }, c.appended = function(t2) {
    var e2 = this.addItems(t2);
    e2.length && (this.layoutItems(e2, true), this.reveal(e2));
  }, c.prepended = function(t2) {
    var e2 = this._itemize(t2);
    if (e2.length) {
      var i2 = this.items.slice(0);
      this.items = e2.concat(i2), this._resetLayout(), this._manageStamps(), this.layoutItems(e2, true), this.reveal(e2), this.layoutItems(i2);
    }
  }, c.reveal = function(t2) {
    if (this._emitCompleteOnItems("reveal", t2), t2 && t2.length) {
      var e2 = this.updateStagger();
      t2.forEach(function(t3, i2) {
        t3.stagger(i2 * e2), t3.reveal();
      });
    }
  }, c.hide = function(t2) {
    if (this._emitCompleteOnItems("hide", t2), t2 && t2.length) {
      var e2 = this.updateStagger();
      t2.forEach(function(t3, i2) {
        t3.stagger(i2 * e2), t3.hide();
      });
    }
  }, c.revealItemElements = function(t2) {
    var e2 = this.getItems(t2);
    this.reveal(e2);
  }, c.hideItemElements = function(t2) {
    var e2 = this.getItems(t2);
    this.hide(e2);
  }, c.getItem = function(t2) {
    for (var e2 = 0; e2 < this.items.length; e2++) {
      var i2 = this.items[e2];
      if (i2.element == t2) return i2;
    }
  }, c.getItems = function(t2) {
    t2 = o.makeArray(t2);
    var e2 = [];
    return t2.forEach(function(t3) {
      var i2 = this.getItem(t3);
      i2 && e2.push(i2);
    }, this), e2;
  }, c.remove = function(t2) {
    var e2 = this.getItems(t2);
    this._emitCompleteOnItems("remove", e2), e2 && e2.length && e2.forEach(function(t3) {
      t3.remove(), o.removeFrom(this.items, t3);
    }, this);
  }, c.destroy = function() {
    var t2 = this.element.style;
    t2.height = "", t2.position = "", t2.width = "", this.items.forEach(function(t3) {
      t3.destroy();
    }), this.unbindResize();
    var e2 = this.element.outlayerGUID;
    delete f[e2], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
  }, s.data = function(t2) {
    t2 = o.getQueryElement(t2);
    var e2 = t2 && t2.outlayerGUID;
    return e2 && f[e2];
  }, s.create = function(t2, e2) {
    var i2 = r(s);
    return i2.defaults = o.extend({}, s.defaults), o.extend(i2.defaults, e2), i2.compatOptions = o.extend({}, s.compatOptions), i2.namespace = t2, i2.data = s.data, i2.Item = r(n), o.htmlInit(i2, t2), h && h.bridget && h.bridget(t2, i2), i2;
  };
  var m = { ms: 1, s: 1e3 };
  return s.Item = n, s;
}), function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window, function(t) {
  "use strict";
  function e() {
    t.Item.apply(this, arguments);
  }
  var i = e.prototype = Object.create(t.Item.prototype), o = i._create;
  i._create = function() {
    this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
  }, i.updateSortData = function() {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t2 = this.layout.options.getSortData, e2 = this.layout._sorters;
      for (var i2 in t2) {
        var o2 = e2[i2];
        this.sortData[i2] = o2(this.element, this);
      }
    }
  };
  var n = i.destroy;
  return i.destroy = function() {
    n.apply(this, arguments), this.css({ display: "" });
  }, e;
}), function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function(t, e) {
  "use strict";
  function i(t2) {
    this.isotope = t2, t2 && (this.options = t2.options[this.namespace], this.element = t2.element, this.items = t2.filteredItems, this.size = t2.size);
  }
  var o = i.prototype, n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return n.forEach(function(t2) {
    o[t2] = function() {
      return e.prototype[t2].apply(this.isotope, arguments);
    };
  }), o.needsVerticalResizeLayout = function() {
    var e2 = t(this.isotope.element), i2 = this.isotope.size && e2;
    return i2 && e2.innerHeight != this.isotope.size.innerHeight;
  }, o._getMeasurement = function() {
    this.isotope._getMeasurement.apply(this, arguments);
  }, o.getColumnWidth = function() {
    this.getSegmentSize("column", "Width");
  }, o.getRowHeight = function() {
    this.getSegmentSize("row", "Height");
  }, o.getSegmentSize = function(t2, e2) {
    var i2 = t2 + e2, o2 = "outer" + e2;
    if (this._getMeasurement(i2, o2), !this[i2]) {
      var n2 = this.getFirstItemSize();
      this[i2] = n2 && n2[o2] || this.isotope.size["inner" + e2];
    }
  }, o.getFirstItemSize = function() {
    var e2 = this.isotope.filteredItems[0];
    return e2 && e2.element && t(e2.element);
  }, o.layout = function() {
    this.isotope.layout.apply(this.isotope, arguments);
  }, o.getSize = function() {
    this.isotope.getSize(), this.size = this.isotope.size;
  }, i.modes = {}, i.create = function(t2, e2) {
    function n2() {
      i.apply(this, arguments);
    }
    return n2.prototype = Object.create(o), n2.prototype.constructor = n2, e2 && (n2.options = e2), n2.prototype.namespace = t2, i.modes[t2] = n2, n2;
  }, i;
}), function(t, e) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function(t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var o = i.prototype;
  return o._resetLayout = function() {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t2 = 0; t2 < this.cols; t2++) this.colYs.push(0);
    this.maxY = 0, this.horizontalColIndex = 0;
  }, o.measureColumns = function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t2 = this.items[0], i2 = t2 && t2.element;
      this.columnWidth = i2 && e(i2).outerWidth || this.containerWidth;
    }
    var o2 = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / o2, r = o2 - n % o2, a = r && r < 1 ? "round" : "floor";
    s = Math[a](s), this.cols = Math.max(s, 1);
  }, o.getContainerWidth = function() {
    var t2 = this._getOption("fitWidth"), i2 = t2 ? this.element.parentNode : this.element, o2 = e(i2);
    this.containerWidth = o2 && o2.innerWidth;
  }, o._getItemLayoutPosition = function(t2) {
    t2.getSize();
    var e2 = t2.size.outerWidth % this.columnWidth, i2 = e2 && e2 < 1 ? "round" : "ceil", o2 = Math[i2](t2.size.outerWidth / this.columnWidth);
    o2 = Math.min(o2, this.cols);
    for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o2, t2), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t2.size.outerHeight, u = o2 + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
    return r;
  }, o._getTopColPosition = function(t2) {
    var e2 = this._getTopColGroup(t2), i2 = Math.min.apply(Math, e2);
    return { col: e2.indexOf(i2), y: i2 };
  }, o._getTopColGroup = function(t2) {
    if (t2 < 2) return this.colYs;
    for (var e2 = [], i2 = this.cols + 1 - t2, o2 = 0; o2 < i2; o2++) e2[o2] = this._getColGroupY(o2, t2);
    return e2;
  }, o._getColGroupY = function(t2, e2) {
    if (e2 < 2) return this.colYs[t2];
    var i2 = this.colYs.slice(t2, t2 + e2);
    return Math.max.apply(Math, i2);
  }, o._getHorizontalColPosition = function(t2, e2) {
    var i2 = this.horizontalColIndex % this.cols, o2 = t2 > 1 && i2 + t2 > this.cols;
    i2 = o2 ? 0 : i2;
    var n = e2.size.outerWidth && e2.size.outerHeight;
    return this.horizontalColIndex = n ? i2 + t2 : this.horizontalColIndex, { col: i2, y: this._getColGroupY(i2, t2) };
  }, o._manageStamp = function(t2) {
    var i2 = e(t2), o2 = this._getElementOffset(t2), n = this._getOption("originLeft"), s = n ? o2.left : o2.right, r = s + i2.outerWidth, a = Math.floor(s / this.columnWidth);
    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
    for (var h = this._getOption("originTop"), d = (h ? o2.top : o2.bottom) + i2.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
  }, o._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t2 = { height: this.maxY };
    return this._getOption("fitWidth") && (t2.width = this._getContainerFitWidth()), t2;
  }, o._getContainerFitWidth = function() {
    for (var t2 = 0, e2 = this.cols; --e2 && 0 === this.colYs[e2]; ) t2++;
    return (this.cols - t2) * this.columnWidth - this.gutter;
  }, o.needsResizeLayout = function() {
    var t2 = this.containerWidth;
    return this.getContainerWidth(), t2 != this.containerWidth;
  }, i;
}), function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function(t, e) {
  "use strict";
  var i = t.create("masonry"), o = i.prototype, n = { _getElementOffset: true, layout: true, _getMeasurement: true };
  for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
  var r = o.measureColumns;
  o.measureColumns = function() {
    this.items = this.isotope.filteredItems, r.call(this);
  };
  var a = o._getOption;
  return o._getOption = function(t2) {
    return "fitWidth" == t2 ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
  }, i;
}), function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function(t) {
  "use strict";
  var e = t.create("fitRows"), i = e.prototype;
  return i._resetLayout = function() {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
  }, i._getItemLayoutPosition = function(t2) {
    t2.getSize();
    var e2 = t2.size.outerWidth + this.gutter, i2 = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e2 + this.x > i2 && (this.x = 0, this.y = this.maxY);
    var o = { x: this.x, y: this.y };
    return this.maxY = Math.max(this.maxY, this.y + t2.size.outerHeight), this.x += e2, o;
  }, i._getContainerSize = function() {
    return { height: this.maxY };
  }, e;
}), function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function(t) {
  "use strict";
  var e = t.create("vertical", { horizontalAlignment: 0 }), i = e.prototype;
  return i._resetLayout = function() {
    this.y = 0;
  }, i._getItemLayoutPosition = function(t2) {
    t2.getSize();
    var e2 = (this.isotope.size.innerWidth - t2.size.outerWidth) * this.options.horizontalAlignment, i2 = this.y;
    return this.y += t2.size.outerHeight, { x: e2, y: i2 };
  }, i._getContainerSize = function() {
    return { height: this.y };
  }, e;
}), function(t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
    return e(t, i, o, n, s, r, a);
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function(t, e, i, o, n, s, r) {
  function a(t2, e2) {
    return function(i2, o2) {
      for (var n2 = 0; n2 < t2.length; n2++) {
        var s2 = t2[n2], r2 = i2.sortData[s2], a2 = o2.sortData[s2];
        if (r2 > a2 || r2 < a2) {
          var u2 = void 0 !== e2[s2] ? e2[s2] : e2, h2 = u2 ? 1 : -1;
          return (r2 > a2 ? 1 : -1) * h2;
        }
      }
      return 0;
    };
  }
  var u = t.jQuery, h = String.prototype.trim ? function(t2) {
    return t2.trim();
  } : function(t2) {
    return t2.replace(/^\s+|\s+$/g, "");
  }, d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: true, sortAscending: true });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function() {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
    for (var t2 in r.modes) this._initLayoutMode(t2);
  }, l.reloadItems = function() {
    this.itemGUID = 0, e.prototype.reloadItems.call(this);
  }, l._itemize = function() {
    for (var t2 = e.prototype._itemize.apply(this, arguments), i2 = 0; i2 < t2.length; i2++) {
      var o2 = t2[i2];
      o2.id = this.itemGUID++;
    }
    return this._updateItemsSortData(t2), t2;
  }, l._initLayoutMode = function(t2) {
    var e2 = r.modes[t2], i2 = this.options[t2] || {};
    this.options[t2] = e2.options ? n.extend(e2.options, i2) : i2, this.modes[t2] = new e2(this);
  }, l.layout = function() {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
  }, l._layout = function() {
    var t2 = this._getIsInstant();
    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t2), this._isLayoutInited = true;
  }, l.arrange = function(t2) {
    this.option(t2), this._getIsInstant();
    var e2 = this._filter(this.items);
    this.filteredItems = e2.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e2]) : this._hideReveal(e2), this._sort(), this._layout();
  }, l._init = l.arrange, l._hideReveal = function(t2) {
    this.reveal(t2.needReveal), this.hide(t2.needHide);
  }, l._getIsInstant = function() {
    var t2 = this._getOption("layoutInstant"), e2 = void 0 !== t2 ? t2 : !this._isLayoutInited;
    return this._isInstant = e2, e2;
  }, l._bindArrangeComplete = function() {
    function t2() {
      e2 && i2 && o2 && n2.dispatchEvent("arrangeComplete", null, [n2.filteredItems]);
    }
    var e2, i2, o2, n2 = this;
    this.once("layoutComplete", function() {
      e2 = true, t2();
    }), this.once("hideComplete", function() {
      i2 = true, t2();
    }), this.once("revealComplete", function() {
      o2 = true, t2();
    });
  }, l._filter = function(t2) {
    var e2 = this.options.filter;
    e2 = e2 || "*";
    for (var i2 = [], o2 = [], n2 = [], s2 = this._getFilterTest(e2), r2 = 0; r2 < t2.length; r2++) {
      var a2 = t2[r2];
      if (!a2.isIgnored) {
        var u2 = s2(a2);
        u2 && i2.push(a2), u2 && a2.isHidden ? o2.push(a2) : u2 || a2.isHidden || n2.push(a2);
      }
    }
    return { matches: i2, needReveal: o2, needHide: n2 };
  }, l._getFilterTest = function(t2) {
    return u && this.options.isJQueryFiltering ? function(e2) {
      return u(e2.element).is(t2);
    } : "function" == typeof t2 ? function(e2) {
      return t2(e2.element);
    } : function(e2) {
      return o(e2.element, t2);
    };
  }, l.updateSortData = function(t2) {
    var e2;
    t2 ? (t2 = n.makeArray(t2), e2 = this.getItems(t2)) : e2 = this.items, this._getSorters(), this._updateItemsSortData(e2);
  }, l._getSorters = function() {
    var t2 = this.options.getSortData;
    for (var e2 in t2) {
      var i2 = t2[e2];
      this._sorters[e2] = f(i2);
    }
  }, l._updateItemsSortData = function(t2) {
    for (var e2 = t2 && t2.length, i2 = 0; e2 && i2 < e2; i2++) {
      var o2 = t2[i2];
      o2.updateSortData();
    }
  };
  var f = /* @__PURE__ */ function() {
    function t2(t3) {
      if ("string" != typeof t3) return t3;
      var i2 = h(t3).split(" "), o2 = i2[0], n2 = o2.match(/^\[(.+)\]$/), s2 = n2 && n2[1], r2 = e2(s2, o2), a2 = d.sortDataParsers[i2[1]];
      return t3 = a2 ? function(t4) {
        return t4 && a2(r2(t4));
      } : function(t4) {
        return t4 && r2(t4);
      };
    }
    function e2(t3, e3) {
      return t3 ? function(e4) {
        return e4.getAttribute(t3);
      } : function(t4) {
        var i2 = t4.querySelector(e3);
        return i2 && i2.textContent;
      };
    }
    return t2;
  }();
  d.sortDataParsers = { parseInt: function(t2) {
    return parseInt(t2, 10);
  }, parseFloat: function(t2) {
    return parseFloat(t2);
  } }, l._sort = function() {
    if (this.options.sortBy) {
      var t2 = n.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t2) || (this.sortHistory = t2.concat(this.sortHistory));
      var e2 = a(this.sortHistory, this.options.sortAscending);
      this.filteredItems.sort(e2);
    }
  }, l._getIsSameSortBy = function(t2) {
    for (var e2 = 0; e2 < t2.length; e2++) if (t2[e2] != this.sortHistory[e2]) return false;
    return true;
  }, l._mode = function() {
    var t2 = this.options.layoutMode, e2 = this.modes[t2];
    if (!e2) throw new Error("No layout mode: " + t2);
    return e2.options = this.options[t2], e2;
  }, l._resetLayout = function() {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout();
  }, l._getItemLayoutPosition = function(t2) {
    return this._mode()._getItemLayoutPosition(t2);
  }, l._manageStamp = function(t2) {
    this._mode()._manageStamp(t2);
  }, l._getContainerSize = function() {
    return this._mode()._getContainerSize();
  }, l.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  }, l.appended = function(t2) {
    var e2 = this.addItems(t2);
    if (e2.length) {
      var i2 = this._filterRevealAdded(e2);
      this.filteredItems = this.filteredItems.concat(i2);
    }
  }, l.prepended = function(t2) {
    var e2 = this._itemize(t2);
    if (e2.length) {
      this._resetLayout(), this._manageStamps();
      var i2 = this._filterRevealAdded(e2);
      this.layoutItems(this.filteredItems), this.filteredItems = i2.concat(this.filteredItems), this.items = e2.concat(this.items);
    }
  }, l._filterRevealAdded = function(t2) {
    var e2 = this._filter(t2);
    return this.hide(e2.needHide), this.reveal(e2.matches), this.layoutItems(e2.matches, true), e2.matches;
  }, l.insert = function(t2) {
    var e2 = this.addItems(t2);
    if (e2.length) {
      var i2, o2, n2 = e2.length;
      for (i2 = 0; i2 < n2; i2++) o2 = e2[i2], this.element.appendChild(o2.element);
      var s2 = this._filter(e2).matches;
      for (i2 = 0; i2 < n2; i2++) e2[i2].isLayoutInstant = true;
      for (this.arrange(), i2 = 0; i2 < n2; i2++) delete e2[i2].isLayoutInstant;
      this.reveal(s2);
    }
  };
  var c = l.remove;
  return l.remove = function(t2) {
    t2 = n.makeArray(t2);
    var e2 = this.getItems(t2);
    c.call(this, t2);
    for (var i2 = e2 && e2.length, o2 = 0; i2 && o2 < i2; o2++) {
      var s2 = e2[o2];
      n.removeFrom(this.filteredItems, s2);
    }
  }, l.shuffle = function() {
    for (var t2 = 0; t2 < this.items.length; t2++) {
      var e2 = this.items[t2];
      e2.sortData.random = Math.random();
    }
    this.options.sortBy = "random", this._sort(), this._layout();
  }, l._noTransition = function(t2, e2) {
    var i2 = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var o2 = t2.apply(this, e2);
    return this.options.transitionDuration = i2, o2;
  }, l.getFilteredItemElements = function() {
    return this.filteredItems.map(function(t2) {
      return t2.element;
    });
  }, d;
});
/*! WOW - v1.0.1 - 2014-08-15
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function() {
  var a, b, c, d = function(a2, b2) {
    return function() {
      return a2.apply(b2, arguments);
    };
  }, e = [].indexOf || function(a2) {
    for (var b2 = 0, c2 = this.length; c2 > b2; b2++) if (b2 in this && this[b2] === a2) return b2;
    return -1;
  };
  b = function() {
    function a2() {
    }
    return a2.prototype.extend = function(a3, b2) {
      var c2, d2;
      for (c2 in b2) d2 = b2[c2], null == a3[c2] && (a3[c2] = d2);
      return a3;
    }, a2.prototype.isMobile = function(a3) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a3);
    }, a2;
  }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
    function a2() {
      this.keys = [], this.values = [];
    }
    return a2.prototype.get = function(a3) {
      var b2, c2, d2, e2, f;
      for (f = this.keys, b2 = d2 = 0, e2 = f.length; e2 > d2; b2 = ++d2) if (c2 = f[b2], c2 === a3) return this.values[b2];
    }, a2.prototype.set = function(a3, b2) {
      var c2, d2, e2, f, g;
      for (g = this.keys, c2 = e2 = 0, f = g.length; f > e2; c2 = ++e2) if (d2 = g[c2], d2 === a3) return void (this.values[c2] = b2);
      return this.keys.push(a3), this.values.push(b2);
    }, a2;
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
    function a2() {
      console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
    }
    return a2.notSupported = true, a2.prototype.observe = function() {
    }, a2;
  }()), this.WOW = function() {
    function f(a2) {
      null == a2 && (a2 = {}), this.scrollCallback = d(this.scrollCallback, this), this.scrollHandler = d(this.scrollHandler, this), this.start = d(this.start, this), this.scrolled = true, this.config = this.util().extend(a2, this.defaults), this.animationNameCache = new c();
    }
    return f.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: true, live: true }, f.prototype.init = function() {
      var a2;
      return this.element = window.document.documentElement, "interactive" === (a2 = document.readyState) || "complete" === a2 ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = [];
    }, f.prototype.start = function() {
      var b2, c2, d2, e2;
      if (this.stopped = false, this.boxes = function() {
        var a2, c3, d3, e3;
        for (d3 = this.element.querySelectorAll("." + this.config.boxClass), e3 = [], a2 = 0, c3 = d3.length; c3 > a2; a2++) b2 = d3[a2], e3.push(b2);
        return e3;
      }.call(this), this.all = function() {
        var a2, c3, d3, e3;
        for (d3 = this.boxes, e3 = [], a2 = 0, c3 = d3.length; c3 > a2; a2++) b2 = d3[a2], e3.push(b2);
        return e3;
      }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();
      else {
        for (e2 = this.boxes, c2 = 0, d2 = e2.length; d2 > c2; c2++) b2 = e2[c2], this.applyStyle(b2, true);
        window.addEventListener("scroll", this.scrollHandler, false), window.addEventListener("resize", this.scrollHandler, false), this.interval = setInterval(this.scrollCallback, 50);
      }
      return this.config.live ? new a(/* @__PURE__ */ function(a2) {
        return function(b3) {
          var c3, d3, e3, f2, g;
          for (g = [], e3 = 0, f2 = b3.length; f2 > e3; e3++) d3 = b3[e3], g.push(function() {
            var a3, b4, e4, f3;
            for (e4 = d3.addedNodes || [], f3 = [], a3 = 0, b4 = e4.length; b4 > a3; a3++) c3 = e4[a3], f3.push(this.doSync(c3));
            return f3;
          }.call(a2));
          return g;
        };
      }(this)).observe(document.body, { childList: true, subtree: true }) : void 0;
    }, f.prototype.stop = function() {
      return this.stopped = true, window.removeEventListener("scroll", this.scrollHandler, false), window.removeEventListener("resize", this.scrollHandler, false), null != this.interval ? clearInterval(this.interval) : void 0;
    }, f.prototype.sync = function() {
      return a.notSupported ? this.doSync(this.element) : void 0;
    }, f.prototype.doSync = function(a2) {
      var b2, c2, d2, f2, g;
      if (!this.stopped) {
        if (null == a2 && (a2 = this.element), 1 !== a2.nodeType) return;
        for (a2 = a2.parentNode || a2, f2 = a2.querySelectorAll("." + this.config.boxClass), g = [], c2 = 0, d2 = f2.length; d2 > c2; c2++) b2 = f2[c2], e.call(this.all, b2) < 0 ? (this.applyStyle(b2, true), this.boxes.push(b2), this.all.push(b2), g.push(this.scrolled = true)) : g.push(void 0);
        return g;
      }
    }, f.prototype.show = function(a2) {
      return this.applyStyle(a2), a2.className = "" + a2.className + " " + this.config.animateClass;
    }, f.prototype.applyStyle = function(a2, b2) {
      var c2, d2, e2;
      return d2 = a2.getAttribute("data-wow-duration"), c2 = a2.getAttribute("data-wow-delay"), e2 = a2.getAttribute("data-wow-iteration"), this.animate(/* @__PURE__ */ function(f2) {
        return function() {
          return f2.customStyle(a2, b2, d2, c2, e2);
        };
      }(this));
    }, f.prototype.animate = function() {
      return "requestAnimationFrame" in window ? function(a2) {
        return window.requestAnimationFrame(a2);
      } : function(a2) {
        return a2();
      };
    }(), f.prototype.resetStyle = function() {
      var a2, b2, c2, d2, e2;
      for (d2 = this.boxes, e2 = [], b2 = 0, c2 = d2.length; c2 > b2; b2++) a2 = d2[b2], e2.push(a2.setAttribute("style", "visibility: visible;"));
      return e2;
    }, f.prototype.customStyle = function(a2, b2, c2, d2, e2) {
      return b2 && this.cacheAnimationName(a2), a2.style.visibility = b2 ? "hidden" : "visible", c2 && this.vendorSet(a2.style, { animationDuration: c2 }), d2 && this.vendorSet(a2.style, { animationDelay: d2 }), e2 && this.vendorSet(a2.style, { animationIterationCount: e2 }), this.vendorSet(a2.style, { animationName: b2 ? "none" : this.cachedAnimationName(a2) }), a2;
    }, f.prototype.vendors = ["moz", "webkit"], f.prototype.vendorSet = function(a2, b2) {
      var c2, d2, e2, f2;
      f2 = [];
      for (c2 in b2) d2 = b2[c2], a2["" + c2] = d2, f2.push(function() {
        var b3, f3, g, h;
        for (g = this.vendors, h = [], b3 = 0, f3 = g.length; f3 > b3; b3++) e2 = g[b3], h.push(a2["" + e2 + c2.charAt(0).toUpperCase() + c2.substr(1)] = d2);
        return h;
      }.call(this));
      return f2;
    }, f.prototype.vendorCSS = function(a2, b2) {
      var c2, d2, e2, f2, g, h;
      for (d2 = window.getComputedStyle(a2), c2 = d2.getPropertyCSSValue(b2), h = this.vendors, f2 = 0, g = h.length; g > f2; f2++) e2 = h[f2], c2 = c2 || d2.getPropertyCSSValue("-" + e2 + "-" + b2);
      return c2;
    }, f.prototype.animationName = function(a2) {
      var b2;
      try {
        b2 = this.vendorCSS(a2, "animation-name").cssText;
      } catch (c2) {
        b2 = window.getComputedStyle(a2).getPropertyValue("animation-name");
      }
      return "none" === b2 ? "" : b2;
    }, f.prototype.cacheAnimationName = function(a2) {
      return this.animationNameCache.set(a2, this.animationName(a2));
    }, f.prototype.cachedAnimationName = function(a2) {
      return this.animationNameCache.get(a2);
    }, f.prototype.scrollHandler = function() {
      return this.scrolled = true;
    }, f.prototype.scrollCallback = function() {
      var a2;
      return !this.scrolled || (this.scrolled = false, this.boxes = function() {
        var b2, c2, d2, e2;
        for (d2 = this.boxes, e2 = [], b2 = 0, c2 = d2.length; c2 > b2; b2++) a2 = d2[b2], a2 && (this.isVisible(a2) ? this.show(a2) : e2.push(a2));
        return e2;
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
    }, f.prototype.offsetTop = function(a2) {
      for (var b2; void 0 === a2.offsetTop; ) a2 = a2.parentNode;
      for (b2 = a2.offsetTop; a2 = a2.offsetParent; ) b2 += a2.offsetTop;
      return b2;
    }, f.prototype.isVisible = function(a2) {
      var b2, c2, d2, e2, f2;
      return c2 = a2.getAttribute("data-wow-offset") || this.config.offset, f2 = window.pageYOffset, e2 = f2 + Math.min(this.element.clientHeight, innerHeight) - c2, d2 = this.offsetTop(a2), b2 = d2 + a2.clientHeight, e2 >= d2 && b2 >= f2;
    }, f.prototype.util = function() {
      return null != this._util ? this._util : this._util = new b();
    }, f.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, f;
  }();
}).call(this);
(function($) {
  "use strict";
  if ($(".counter-text-wrap").length) {
    $(".counter-text-wrap").appear(function() {
      var $t = $(this), n = $t.find(".count-text").attr("data-stop"), r = parseInt($t.find(".count-text").attr("data-speed"), 10);
      if (!$t.hasClass("counted")) {
        $t.addClass("counted");
        $({
          countNum: $t.find(".count-text").text()
        }).animate({
          countNum: n
        }, {
          duration: r,
          easing: "linear",
          step: function() {
            $t.find(".count-text").text(Math.floor(this.countNum));
          },
          complete: function() {
            $t.find(".count-text").text(this.countNum);
          }
        });
      }
    }, {
      accY: 0
    });
  }
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanExpand: ['<i class="fal fa-plus"></i>']
  });
  $(".sidebar__close-btn ,.mobile-menu .onepage li a  > *:not(button)").on("click", function() {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });
  $(".sidebar-toggle-btn").on("click", function() {
    $(".sidebar__area").addClass("sidebar-opened");
    $(".body-overlay").addClass("opened");
  });
  $(".sidebar__close-btn").on("click", function() {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });
  $(".body-overlay").on("click", function() {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });
  var magnifPopup = function() {
    $(".work-popup").magnificPopup({
      type: "image",
      removalDelay: 300,
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: false,
        // By default it's false, so don't forget to enable it
        duration: 300,
        // duration of the effect, in milliseconds
        easing: "ease-in-out",
        // CSS transition easing function
        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          return openerElement.is("img") ? openerElement : openerElement.find("img");
        }
      }
    });
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  };
  magnifPopup();
  const scrollers = document.querySelectorAll(".scroller");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  function scrollNav() {
    $(".onepage li a").click(function() {
      $(".onepage li a.active").removeClass("active");
      $(this).addClass("active");
      $("html, body").stop().animate({
        scrollTop: $($(this).attr("href")).offset().top - 100
      }, 1e3);
      return false;
    });
  }
  scrollNav();
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1e3);
  });
  gsap.ticker.lagSmoothing(0);
  if ($(".testimonials-wrap").length) {
    $(".testimonials-wrap").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2e3,
      arrows: true,
      speed: 1e3,
      focusOnSelect: false,
      prevArrow: ".testimonial-prev",
      nextArrow: ".testimonial-next",
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
  $(".project-filter li").on("click", function() {
    $(".project-filter li").removeClass("current");
    $(this).addClass("current");
    var selector = $(this).attr("data-filter");
    $(".project-masonry-active").imagesLoaded(function() {
      $(".project-masonry-active").isotope({
        itemSelector: ".item",
        filter: selector,
        masonry: {
          columnWidth: ".item"
        }
      });
    });
  });
  $("select").niceSelect();
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow",
      // animated element css class (default is wow)
      animateClass: "animated",
      // animation css class (default is animated)
      offset: 0,
      // distance to the element when triggering the animation (default is 0)
      mobile: false,
      // trigger animations on mobile devices (default is true)
      live: true
      // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }
  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
  }
  $("#contactForm").on("submit", function(e) {
    e.preventDefault();
    var data = {
      name: $("#name").val(),
      email: $("#email").val(),
      subject: $("#subject").val(),
      message: $("#message").val()
    };
    if (isValidEmail(data["email"]) && data["message"].length > 1 && data["name"].length > 1 && data["subject"].length > 1) {
      $.ajax({
        type: "POST",
        url: "sendmail.php",
        data,
        success: function() {
          $("#contactForm .input-success").delay(500).fadeIn(1e3);
          $("#contactForm .input-error").fadeOut(500);
        }
      });
    } else {
      $("#contactForm .input-error").delay(500).fadeIn(1e3);
      $("#contactForm .input-success").fadeOut(500);
    }
    return false;
  });
  $(window).on("scroll", function() {
    function headerStyle() {
      if ($(".main-header").length) {
        var windowpos = $(window).scrollTop();
        var siteHeader = $(".main-header");
        var scrollLink = $(".scroll-top");
        if (windowpos >= 100) {
          siteHeader.addClass("fixed-header");
          scrollLink.fadeIn(300);
        } else {
          siteHeader.removeClass("fixed-header");
          scrollLink.fadeOut(300);
        }
      }
    }
    headerStyle();
  });
  $(window).on("load", function() {
    const svg = document.getElementById("preloaderSvg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
      delay: 1.5,
      y: -100,
      opacity: 0
    });
    tl.to(svg, {
      duration: 0.5,
      attr: { d: curve },
      ease: "power2.easeIn"
    }).to(svg, {
      duration: 0.5,
      attr: { d: flat },
      ease: "power2.easeOut"
    });
    tl.to(".preloader", {
      y: -1500
    });
    tl.to(".preloader", {
      zIndex: -1,
      display: "none"
    });
  });
  const cursorBall = document.getElementById("ball");
  document.addEventListener("mousemove", function(e) {
    gsap.to(cursorBall, {
      duration: 0.3,
      x: e.clientX,
      y: e.clientY,
      opacity: 1,
      // Ensure cursor is visible
      ease: "power2.out"
    });
  });
  const hoverElements = document.querySelectorAll("a");
  hoverElements.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
      cursorBall.classList.add("hovered");
      gsap.to(cursorBall, {
        duration: 0.3,
        scale: 2,
        // Increase scale
        opacity: 0,
        // Set opacity to 0
        ease: 0.1
      });
    });
    element.addEventListener("mouseleave", function() {
      cursorBall.classList.remove("hovered");
      gsap.to(cursorBall, {
        duration: 0.3,
        scale: 1,
        // Restore scale to normal
        opacity: 1,
        // Restore opacity
        ease: "power2.out"
      });
    });
  });
})(jQuery);
//# sourceMappingURL=scripts.js.map
