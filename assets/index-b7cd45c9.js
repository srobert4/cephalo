var D = Object.defineProperty;
var G = (e, t, n) =>
  t in e
    ? D(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var E = (e, t, n) => (G(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const c of s.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function $() {}
function I(e) {
  return e();
}
function k() {
  return Object.create(null);
}
function L(e) {
  e.forEach(I);
}
function M(e) {
  return typeof e == "function";
}
function B(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
function J(e) {
  return Object.keys(e).length === 0;
}
function u(e, t) {
  e.appendChild(t);
}
function T(e, t, n) {
  e.insertBefore(t, n || null);
}
function A(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function p(e) {
  return document.createElement(e);
}
function S(e) {
  return document.createTextNode(e);
}
function w() {
  return S(" ");
}
function Q(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function P(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function W(e) {
  return Array.from(e.childNodes);
}
function X(e, t) {
  (t = "" + t), e.data !== t && (e.data = t);
}
let j;
function y(e) {
  j = e;
}
const g = [],
  V = [];
let m = [];
const q = [],
  Y = Promise.resolve();
let C = !1;
function Z() {
  C || ((C = !0), Y.then(H));
}
function N(e) {
  m.push(e);
}
const O = new Set();
let _ = 0;
function H() {
  if (_ !== 0) return;
  const e = j;
  do {
    try {
      for (; _ < g.length; ) {
        const t = g[_];
        _++, y(t), ee(t.$$);
      }
    } catch (t) {
      throw ((g.length = 0), (_ = 0), t);
    }
    for (y(null), g.length = 0, _ = 0; V.length; ) V.pop()();
    for (let t = 0; t < m.length; t += 1) {
      const n = m[t];
      O.has(n) || (O.add(n), n());
    }
    m.length = 0;
  } while (g.length);
  for (; q.length; ) q.pop()();
  (C = !1), O.clear(), y(e);
}
function ee(e) {
  if (e.fragment !== null) {
    e.update(), L(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(N);
  }
}
function te(e) {
  const t = [],
    n = [];
  m.forEach((r) => (e.indexOf(r) === -1 ? t.push(r) : n.push(r))),
    n.forEach((r) => r()),
    (m = t);
}
const x = new Set();
let ne;
function K(e, t) {
  e && e.i && (x.delete(e), e.i(t));
}
function re(e, t, n, r) {
  if (e && e.o) {
    if (x.has(e)) return;
    x.add(e),
      ne.c.push(() => {
        x.delete(e), r && (n && e.d(1), r());
      }),
      e.o(t);
  } else r && r();
}
function oe(e) {
  e && e.c();
}
function F(e, t, n) {
  const { fragment: r, after_update: o } = e.$$;
  r && r.m(t, n),
    N(() => {
      const s = e.$$.on_mount.map(I).filter(M);
      e.$$.on_destroy ? e.$$.on_destroy.push(...s) : L(s), (e.$$.on_mount = []);
    }),
    o.forEach(N);
}
function R(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (te(n.after_update),
    L(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function se(e, t) {
  e.$$.dirty[0] === -1 && (g.push(e), Z(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function U(e, t, n, r, o, s, c, f = [-1]) {
  const d = j;
  y(e);
  const i = (e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: $,
    not_equal: o,
    bound: k(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (d ? d.$$.context : [])),
    callbacks: k(),
    dirty: f,
    skip_bound: !1,
    root: t.target || d.$$.root,
  });
  c && c(i.root);
  let v = !1;
  if (
    ((i.ctx = n
      ? n(e, t.props || {}, (l, h, ...a) => {
          const b = a.length ? a[0] : h;
          return (
            i.ctx &&
              o(i.ctx[l], (i.ctx[l] = b)) &&
              (!i.skip_bound && i.bound[l] && i.bound[l](b), v && se(e, l)),
            h
          );
        })
      : []),
    i.update(),
    (v = !0),
    L(i.before_update),
    (i.fragment = r ? r(i.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const l = W(t.target);
      i.fragment && i.fragment.l(l), l.forEach(A);
    } else i.fragment && i.fragment.c();
    t.intro && K(e.$$.fragment), F(e, t.target, t.anchor), H();
  }
  y(d);
}
class z {
  constructor() {
    E(this, "$$");
    E(this, "$$set");
  }
  $destroy() {
    R(this, 1), (this.$destroy = $);
  }
  $on(t, n) {
    if (!M(n)) return $;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      r.push(n),
      () => {
        const o = r.indexOf(n);
        o !== -1 && r.splice(o, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !J(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const ie = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(ie);
const ce = "/cephalo/assets/svelte-a39f39b7.svg",
  le = "/cephalo/vite.svg";
function fe(e) {
  let t, n, r, o, s;
  return {
    c() {
      (t = p("button")), (n = S("count is ")), (r = S(e[0]));
    },
    m(c, f) {
      T(c, t, f), u(t, n), u(t, r), o || ((s = Q(t, "click", e[1])), (o = !0));
    },
    p(c, [f]) {
      f & 1 && X(r, c[0]);
    },
    i: $,
    o: $,
    d(c) {
      c && A(t), (o = !1), s();
    },
  };
}
function ue(e, t, n) {
  let r = 0;
  return [
    r,
    () => {
      n(0, (r += 1));
    },
  ];
}
class ae extends z {
  constructor(t) {
    super(), U(this, t, ue, fe, B, {});
  }
}
function de(e) {
  let t, n, r, o, s, c, f, d, i, v, l, h;
  return (
    (f = new ae({})),
    {
      c() {
        (t = p("main")),
          (n = p("div")),
          (n.innerHTML = `<a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src="${le}" class="logo svelte-11cv5lq" alt="Vite Logo"/></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${ce}" class="logo svelte svelte-11cv5lq" alt="Svelte Logo"/></a>`),
          (r = w()),
          (o = p("h1")),
          (o.textContent = "Vite + Svelte"),
          (s = w()),
          (c = p("div")),
          oe(f.$$.fragment),
          (d = w()),
          (i = p("p")),
          (i.innerHTML =
            'Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!'),
          (v = w()),
          (l = p("p")),
          (l.textContent = "Click on the Vite and Svelte logos to learn more"),
          P(c, "class", "card"),
          P(l, "class", "read-the-docs svelte-11cv5lq");
      },
      m(a, b) {
        T(a, t, b),
          u(t, n),
          u(t, r),
          u(t, o),
          u(t, s),
          u(t, c),
          F(f, c, null),
          u(t, d),
          u(t, i),
          u(t, v),
          u(t, l),
          (h = !0);
      },
      p: $,
      i(a) {
        h || (K(f.$$.fragment, a), (h = !0));
      },
      o(a) {
        re(f.$$.fragment, a), (h = !1);
      },
      d(a) {
        a && A(t), R(f);
      },
    }
  );
}
class he extends z {
  constructor(t) {
    super(), U(this, t, null, de, B, {});
  }
}
new he({ target: document.getElementById("app") });
