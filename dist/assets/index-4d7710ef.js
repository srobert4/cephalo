var pt=Object.defineProperty;var gt=(p,k,h)=>k in p?pt(p,k,{enumerable:!0,configurable:!0,writable:!0,value:h}):p[k]=h;var gn=(p,k,h)=>(gt(p,typeof k!="symbol"?k+"":k,h),h);(function(){const k=document.createElement("link").relList;if(k&&k.supports&&k.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const w of r)if(w.type==="childList")for(const m of w.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&t(m)}).observe(document,{childList:!0,subtree:!0});function h(r){const w={};return r.integrity&&(w.integrity=r.integrity),r.referrerPolicy&&(w.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?w.credentials="include":r.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function t(r){if(r.ep)return;r.ep=!0;const w=h(r);fetch(r.href,w)}})();function fe(){}const An=p=>p;function En(p,k){for(const h in k)p[h]=k[h];return p}function et(p){return p()}function Nn(){return Object.create(null)}function ve(p){p.forEach(et)}function tn(p){return typeof p=="function"}function Te(p,k){return p!=p?k==k:p!==k||p&&typeof p=="object"||typeof p=="function"}function yt(p){return Object.keys(p).length===0}function nt(p,...k){if(p==null){for(const t of k)t(void 0);return fe}const h=p.subscribe(...k);return h.unsubscribe?()=>h.unsubscribe():h}function _e(p,k,h){p.$$.on_destroy.push(nt(k,h))}function Se(p){return p??""}function Ke(p,k,h){return p.set(h),k}function bt(p){return p&&tn(p.destroy)?p.destroy:fe}const tt=typeof window<"u";let rt=tt?()=>window.performance.now():()=>Date.now(),Dn=tt?p=>requestAnimationFrame(p):fe;const Ye=new Set;function it(p){Ye.forEach(k=>{k.c(p)||(Ye.delete(k),k.f())}),Ye.size!==0&&Dn(it)}function st(p){let k;return Ye.size===0&&Dn(it),{promise:new Promise(h=>{Ye.add(k={c:p,f:h})}),abort(){Ye.delete(k)}}}function Z(p,k){p.appendChild(k)}function at(p){if(!p)return document;const k=p.getRootNode?p.getRootNode():p.ownerDocument;return k&&k.host?k:p.ownerDocument}function wt(p){const k=$("style");return k.textContent="/* empty */",vt(at(p),k),k.sheet}function vt(p,k){return Z(p.head||p,k),k.sheet}function he(p,k,h){p.insertBefore(k,h||null)}function ce(p){p.parentNode&&p.parentNode.removeChild(p)}function Xe(p,k){for(let h=0;h<p.length;h+=1)p[h]&&p[h].d(k)}function $(p){return document.createElement(p)}function we(p){return document.createTextNode(p)}function ae(){return we(" ")}function ot(){return we("")}function le(p,k,h,t){return p.addEventListener(k,h,t),()=>p.removeEventListener(k,h,t)}function ze(p){return function(k){return k.stopPropagation(),p.call(this,k)}}function J(p,k,h){h==null?p.removeAttribute(k):p.getAttribute(k)!==h&&p.setAttribute(k,h)}function kt(p){return Array.from(p.childNodes)}function xe(p,k){k=""+k,p.data!==k&&(p.data=k)}function _t(p,k){k=""+k,p.wholeText!==k&&(p.data=k)}function en(p,k){p.value=k??""}function Je(p,k,h,t){h==null?p.style.removeProperty(k):p.style.setProperty(k,h,t?"important":"")}function ln(p,k,h){for(let t=0;t<p.options.length;t+=1){const r=p.options[t];if(r.__value===k){r.selected=!0;return}}(!h||k!==void 0)&&(p.selectedIndex=-1)}function lt(p){const k=p.querySelector(":checked");return k&&k.__value}function De(p,k,h){p.classList.toggle(k,!!h)}function ut(p,k,{bubbles:h=!1,cancelable:t=!1}={}){return new CustomEvent(p,{detail:k,bubbles:h,cancelable:t})}const un=new Map;let cn=0;function St(p){let k=5381,h=p.length;for(;h--;)k=(k<<5)-k^p.charCodeAt(h);return k>>>0}function zt(p,k){const h={stylesheet:wt(k),rules:{}};return un.set(p,h),h}function Tn(p,k,h,t,r,w,m,y=0){const g=16.666/t;let d=`{
`;for(let o=0;o<=1;o+=g){const a=k+(h-k)*w(o);d+=o*100+`%{${m(a,1-a)}}
`}const f=d+`100% {${m(h,1-h)}}
}`,i=`__svelte_${St(f)}_${y}`,e=at(p),{stylesheet:n,rules:u}=un.get(e)||zt(e,p);u[i]||(u[i]=!0,n.insertRule(`@keyframes ${i} ${f}`,n.cssRules.length));const c=p.style.animation||"";return p.style.animation=`${c?`${c}, `:""}${i} ${t}ms linear ${r}ms 1 both`,cn+=1,i}function At(p,k){const h=(p.style.animation||"").split(", "),t=h.filter(k?w=>w.indexOf(k)<0:w=>w.indexOf("__svelte")===-1),r=h.length-t.length;r&&(p.style.animation=t.join(", "),cn-=r,cn||Dt())}function Dt(){Dn(()=>{cn||(un.forEach(p=>{const{ownerNode:k}=p.stylesheet;k&&ce(k)}),un.clear())})}let nn;function Qe(p){nn=p}function In(){if(!nn)throw new Error("Function called outside component initialization");return nn}function ct(p){In().$$.on_mount.push(p)}function ht(p){In().$$.on_destroy.push(p)}function pn(){const p=In();return(k,h,{cancelable:t=!1}={})=>{const r=p.$$.callbacks[k];if(r){const w=ut(k,h,{cancelable:t});return r.slice().forEach(m=>{m.call(p,w)}),!w.defaultPrevented}return!0}}function Pe(p,k){const h=p.$$.callbacks[k.type];h&&h.slice().forEach(t=>t.call(this,k))}const Ge=[],Le=[];let Ze=[];const wn=[],It=Promise.resolve();let vn=!1;function Et(){vn||(vn=!0,It.then(ft))}function Re(p){Ze.push(p)}function hn(p){wn.push(p)}const yn=new Set;let qe=0;function ft(){if(qe!==0)return;const p=nn;do{try{for(;qe<Ge.length;){const k=Ge[qe];qe++,Qe(k),Nt(k.$$)}}catch(k){throw Ge.length=0,qe=0,k}for(Qe(null),Ge.length=0,qe=0;Le.length;)Le.pop()();for(let k=0;k<Ze.length;k+=1){const h=Ze[k];yn.has(h)||(yn.add(h),h())}Ze.length=0}while(Ge.length);for(;wn.length;)wn.pop()();vn=!1,yn.clear(),Qe(p)}function Nt(p){if(p.fragment!==null){p.update(),ve(p.before_update);const k=p.dirty;p.dirty=[-1],p.fragment&&p.fragment.p(p.ctx,k),p.after_update.forEach(Re)}}function Tt(p){const k=[],h=[];Ze.forEach(t=>p.indexOf(t)===-1?k.push(t):h.push(t)),h.forEach(t=>t()),Ze=k}let $e;function Pt(){return $e||($e=Promise.resolve(),$e.then(()=>{$e=null})),$e}function bn(p,k,h){p.dispatchEvent(ut(`${k?"intro":"outro"}${h}`))}const an=new Set;let je;function rn(){je={r:0,c:[],p:je}}function sn(){je.r||ve(je.c),je=je.p}function pe(p,k){p&&p.i&&(an.delete(p),p.i(k))}function ye(p,k,h,t){if(p&&p.o){if(an.has(p))return;an.add(p),je.c.push(()=>{an.delete(p),t&&(h&&p.d(1),t())}),p.o(k)}else t&&t()}const Ot={duration:0};function Pn(p,k,h,t){let w=k(p,h,{direction:"both"}),m=t?0:1,y=null,g=null,d=null,f;function i(){d&&At(p,d)}function e(u,c){const o=u.b-m;return c*=Math.abs(o),{a:m,b:u.b,d:o,duration:c,start:u.start,end:u.start+c,group:u.group}}function n(u){const{delay:c=0,duration:o=300,easing:a=An,tick:l=fe,css:b}=w||Ot,s={start:rt()+c,b:u};u||(s.group=je,je.r+=1),"inert"in p&&(u?f!==void 0&&(p.inert=f):(f=p.inert,p.inert=!0)),y||g?g=s:(b&&(i(),d=Tn(p,m,u,o,c,a,b)),u&&l(0,1),y=e(s,o),Re(()=>bn(p,u,"start")),st(v=>{if(g&&v>g.start&&(y=e(g,o),g=null,bn(p,y.b,"start"),b&&(i(),d=Tn(p,m,y.b,y.duration,0,a,w.css))),y){if(v>=y.end)l(m=y.b,1-m),bn(p,y.b,"end"),g||(y.b?i():--y.group.r||ve(y.group.c)),y=null;else if(v>=y.start){const E=v-y.start;m=y.a+y.d*a(E/y.duration),l(m,1-m)}}return!!(y||g)}))}return{run(u){tn(w)?Pt().then(()=>{w=w({direction:u?"in":"out"}),n(u)}):n(u)},end(){i(),y=g=null}}}function Ie(p){return(p==null?void 0:p.length)!==void 0?p:Array.from(p)}function fn(p,k,h){const t=p.$$.props[k];t!==void 0&&(p.$$.bound[t]=h,h(p.$$.ctx[t]))}function Oe(p){p&&p.c()}function Ee(p,k,h){const{fragment:t,after_update:r}=p.$$;t&&t.m(k,h),Re(()=>{const w=p.$$.on_mount.map(et).filter(tn);p.$$.on_destroy?p.$$.on_destroy.push(...w):ve(w),p.$$.on_mount=[]}),r.forEach(Re)}function Ne(p,k){const h=p.$$;h.fragment!==null&&(Tt(h.after_update),ve(h.on_destroy),h.fragment&&h.fragment.d(k),h.on_destroy=h.fragment=null,h.ctx=[])}function xt(p,k){p.$$.dirty[0]===-1&&(Ge.push(p),Et(),p.$$.dirty.fill(0)),p.$$.dirty[k/31|0]|=1<<k%31}function Be(p,k,h,t,r,w,m,y=[-1]){const g=nn;Qe(p);const d=p.$$={fragment:null,ctx:[],props:w,update:fe,not_equal:r,bound:Nn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(k.context||(g?g.$$.context:[])),callbacks:Nn(),dirty:y,skip_bound:!1,root:k.target||g.$$.root};m&&m(d.root);let f=!1;if(d.ctx=h?h(p,k.props||{},(i,e,...n)=>{const u=n.length?n[0]:e;return d.ctx&&r(d.ctx[i],d.ctx[i]=u)&&(!d.skip_bound&&d.bound[i]&&d.bound[i](u),f&&xt(p,i)),e}):[],d.update(),f=!0,ve(d.before_update),d.fragment=t?t(d.ctx):!1,k.target){if(k.hydrate){const i=kt(k.target);d.fragment&&d.fragment.l(i),i.forEach(ce)}else d.fragment&&d.fragment.c();k.intro&&pe(p.$$.fragment),Ee(p,k.target,k.anchor),ft()}Qe(g)}class Me{constructor(){gn(this,"$$");gn(this,"$$set")}$destroy(){Ne(this,1),this.$destroy=fe}$on(k,h){if(!tn(h))return fe;const t=this.$$.callbacks[k]||(this.$$.callbacks[k]=[]);return t.push(h),()=>{const r=t.indexOf(h);r!==-1&&t.splice(r,1)}}$set(k){this.$$set&&!yt(k)&&(this.$$.skip_bound=!0,this.$$set(k),this.$$.skip_bound=!1)}}const Bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bt);var Mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wt(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var dt={exports:{}};/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */(function(p,k){(function(t,r){p.exports=r()})(typeof self<"u"?self:Mt,function(){return function(h){var t={};function r(w){if(t[w])return t[w].exports;var m=t[w]={i:w,l:!1,exports:{}};return h[w].call(m.exports,m,m.exports,r),m.l=!0,m.exports}return r.m=h,r.c=t,r.d=function(w,m,y){r.o(w,m)||Object.defineProperty(w,m,{configurable:!1,enumerable:!0,get:y})},r.n=function(w){var m=w&&w.__esModule?function(){return w.default}:function(){return w};return r.d(m,"a",m),m},r.o=function(w,m){return Object.prototype.hasOwnProperty.call(w,m)},r.p="",r(r.s=109)}([function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(17),m=r(18),y=r(19),g=r(45),d=r(46),f=r(47),i=r(48),e=r(49),n=r(12),u=r(32),c=r(33),o=r(31),a=r(1),l={Scope:a.Scope,create:a.create,find:a.find,query:a.query,register:a.register,Container:w.default,Format:m.default,Leaf:y.default,Embed:i.default,Scroll:g.default,Block:f.default,Inline:d.default,Text:e.default,Attributor:{Attribute:n.default,Class:u.default,Style:c.default,Store:o.default}};t.default=l},function(h,t,r){var w=this&&this.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,l){a.__proto__=l}||function(a,l){for(var b in l)l.hasOwnProperty(b)&&(a[b]=l[b])};return function(a,l){o(a,l);function b(){this.constructor=a}a.prototype=l===null?Object.create(l):(b.prototype=l.prototype,new b)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=function(o){w(a,o);function a(l){var b=this;return l="[Parchment] "+l,b=o.call(this,l)||this,b.message=l,b.name=b.constructor.name,b}return a}(Error);t.ParchmentError=m;var y={},g={},d={},f={};t.DATA_KEY="__blot";var i;(function(o){o[o.TYPE=3]="TYPE",o[o.LEVEL=12]="LEVEL",o[o.ATTRIBUTE=13]="ATTRIBUTE",o[o.BLOT=14]="BLOT",o[o.INLINE=7]="INLINE",o[o.BLOCK=11]="BLOCK",o[o.BLOCK_BLOT=10]="BLOCK_BLOT",o[o.INLINE_BLOT=6]="INLINE_BLOT",o[o.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",o[o.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",o[o.ANY=15]="ANY"})(i=t.Scope||(t.Scope={}));function e(o,a){var l=u(o);if(l==null)throw new m("Unable to create "+o+" blot");var b=l,s=o instanceof Node||o.nodeType===Node.TEXT_NODE?o:b.create(a);return new b(s,a)}t.create=e;function n(o,a){return a===void 0&&(a=!1),o==null?null:o[t.DATA_KEY]!=null?o[t.DATA_KEY].blot:a?n(o.parentNode,a):null}t.find=n;function u(o,a){a===void 0&&(a=i.ANY);var l;if(typeof o=="string")l=f[o]||y[o];else if(o instanceof Text||o.nodeType===Node.TEXT_NODE)l=f.text;else if(typeof o=="number")o&i.LEVEL&i.BLOCK?l=f.block:o&i.LEVEL&i.INLINE&&(l=f.inline);else if(o instanceof HTMLElement){var b=(o.getAttribute("class")||"").split(/\s+/);for(var s in b)if(l=g[b[s]],l)break;l=l||d[o.tagName]}return l==null?null:a&i.LEVEL&l.scope&&a&i.TYPE&l.scope?l:null}t.query=u;function c(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(o.length>1)return o.map(function(s){return c(s)});var l=o[0];if(typeof l.blotName!="string"&&typeof l.attrName!="string")throw new m("Invalid definition");if(l.blotName==="abstract")throw new m("Cannot register abstract class");if(f[l.blotName||l.attrName]=l,typeof l.keyName=="string")y[l.keyName]=l;else if(l.className!=null&&(g[l.className]=l),l.tagName!=null){Array.isArray(l.tagName)?l.tagName=l.tagName.map(function(s){return s.toUpperCase()}):l.tagName=l.tagName.toUpperCase();var b=Array.isArray(l.tagName)?l.tagName:[l.tagName];b.forEach(function(s){(d[s]==null||l.className==null)&&(d[s]=l)})}return l}t.register=c},function(h,t,r){var w=r(51),m=r(11),y=r(3),g=r(20),d=String.fromCharCode(0),f=function(i){Array.isArray(i)?this.ops=i:i!=null&&Array.isArray(i.ops)?this.ops=i.ops:this.ops=[]};f.prototype.insert=function(i,e){var n={};return i.length===0?this:(n.insert=i,e!=null&&typeof e=="object"&&Object.keys(e).length>0&&(n.attributes=e),this.push(n))},f.prototype.delete=function(i){return i<=0?this:this.push({delete:i})},f.prototype.retain=function(i,e){if(i<=0)return this;var n={retain:i};return e!=null&&typeof e=="object"&&Object.keys(e).length>0&&(n.attributes=e),this.push(n)},f.prototype.push=function(i){var e=this.ops.length,n=this.ops[e-1];if(i=y(!0,{},i),typeof n=="object"){if(typeof i.delete=="number"&&typeof n.delete=="number")return this.ops[e-1]={delete:n.delete+i.delete},this;if(typeof n.delete=="number"&&i.insert!=null&&(e-=1,n=this.ops[e-1],typeof n!="object"))return this.ops.unshift(i),this;if(m(i.attributes,n.attributes)){if(typeof i.insert=="string"&&typeof n.insert=="string")return this.ops[e-1]={insert:n.insert+i.insert},typeof i.attributes=="object"&&(this.ops[e-1].attributes=i.attributes),this;if(typeof i.retain=="number"&&typeof n.retain=="number")return this.ops[e-1]={retain:n.retain+i.retain},typeof i.attributes=="object"&&(this.ops[e-1].attributes=i.attributes),this}}return e===this.ops.length?this.ops.push(i):this.ops.splice(e,0,i),this},f.prototype.chop=function(){var i=this.ops[this.ops.length-1];return i&&i.retain&&!i.attributes&&this.ops.pop(),this},f.prototype.filter=function(i){return this.ops.filter(i)},f.prototype.forEach=function(i){this.ops.forEach(i)},f.prototype.map=function(i){return this.ops.map(i)},f.prototype.partition=function(i){var e=[],n=[];return this.forEach(function(u){var c=i(u)?e:n;c.push(u)}),[e,n]},f.prototype.reduce=function(i,e){return this.ops.reduce(i,e)},f.prototype.changeLength=function(){return this.reduce(function(i,e){return e.insert?i+g.length(e):e.delete?i-e.delete:i},0)},f.prototype.length=function(){return this.reduce(function(i,e){return i+g.length(e)},0)},f.prototype.slice=function(i,e){i=i||0,typeof e!="number"&&(e=1/0);for(var n=[],u=g.iterator(this.ops),c=0;c<e&&u.hasNext();){var o;c<i?o=u.next(i-c):(o=u.next(e-c),n.push(o)),c+=g.length(o)}return new f(n)},f.prototype.compose=function(i){var e=g.iterator(this.ops),n=g.iterator(i.ops),u=[],c=n.peek();if(c!=null&&typeof c.retain=="number"&&c.attributes==null){for(var o=c.retain;e.peekType()==="insert"&&e.peekLength()<=o;)o-=e.peekLength(),u.push(e.next());c.retain-o>0&&n.next(c.retain-o)}for(var a=new f(u);e.hasNext()||n.hasNext();)if(n.peekType()==="insert")a.push(n.next());else if(e.peekType()==="delete")a.push(e.next());else{var l=Math.min(e.peekLength(),n.peekLength()),b=e.next(l),s=n.next(l);if(typeof s.retain=="number"){var v={};typeof b.retain=="number"?v.retain=l:v.insert=b.insert;var E=g.attributes.compose(b.attributes,s.attributes,typeof b.retain=="number");if(E&&(v.attributes=E),a.push(v),!n.hasNext()&&m(a.ops[a.ops.length-1],v)){var _=new f(e.rest());return a.concat(_).chop()}}else typeof s.delete=="number"&&typeof b.retain=="number"&&a.push(s)}return a.chop()},f.prototype.concat=function(i){var e=new f(this.ops.slice());return i.ops.length>0&&(e.push(i.ops[0]),e.ops=e.ops.concat(i.ops.slice(1))),e},f.prototype.diff=function(i,e){if(this.ops===i.ops)return new f;var n=[this,i].map(function(l){return l.map(function(b){if(b.insert!=null)return typeof b.insert=="string"?b.insert:d;var s=l===i?"on":"with";throw new Error("diff() called "+s+" non-document")}).join("")}),u=new f,c=w(n[0],n[1],e),o=g.iterator(this.ops),a=g.iterator(i.ops);return c.forEach(function(l){for(var b=l[1].length;b>0;){var s=0;switch(l[0]){case w.INSERT:s=Math.min(a.peekLength(),b),u.push(a.next(s));break;case w.DELETE:s=Math.min(b,o.peekLength()),o.next(s),u.delete(s);break;case w.EQUAL:s=Math.min(o.peekLength(),a.peekLength(),b);var v=o.next(s),E=a.next(s);m(v.insert,E.insert)?u.retain(s,g.attributes.diff(v.attributes,E.attributes)):u.push(E).delete(s);break}b-=s}}),u.chop()},f.prototype.eachLine=function(i,e){e=e||`
`;for(var n=g.iterator(this.ops),u=new f,c=0;n.hasNext();){if(n.peekType()!=="insert")return;var o=n.peek(),a=g.length(o)-n.peekLength(),l=typeof o.insert=="string"?o.insert.indexOf(e,a)-a:-1;if(l<0)u.push(n.next());else if(l>0)u.push(n.next(l));else{if(i(u,n.next(1).attributes||{},c)===!1)return;c+=1,u=new f}}u.length()>0&&i(u,{},c)},f.prototype.transform=function(i,e){if(e=!!e,typeof i=="number")return this.transformPosition(i,e);for(var n=g.iterator(this.ops),u=g.iterator(i.ops),c=new f;n.hasNext()||u.hasNext();)if(n.peekType()==="insert"&&(e||u.peekType()!=="insert"))c.retain(g.length(n.next()));else if(u.peekType()==="insert")c.push(u.next());else{var o=Math.min(n.peekLength(),u.peekLength()),a=n.next(o),l=u.next(o);if(a.delete)continue;l.delete?c.push(l):c.retain(o,g.attributes.transform(a.attributes,l.attributes,e))}return c.chop()},f.prototype.transformPosition=function(i,e){e=!!e;for(var n=g.iterator(this.ops),u=0;n.hasNext()&&u<=i;){var c=n.peekLength(),o=n.peekType();if(n.next(),o==="delete"){i-=Math.min(c,i-u);continue}else o==="insert"&&(u<i||!e)&&(i+=c);u+=c}return i},h.exports=f},function(h,t){var r=Object.prototype.hasOwnProperty,w=Object.prototype.toString,m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,g=function(n){return typeof Array.isArray=="function"?Array.isArray(n):w.call(n)==="[object Array]"},d=function(n){if(!n||w.call(n)!=="[object Object]")return!1;var u=r.call(n,"constructor"),c=n.constructor&&n.constructor.prototype&&r.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!u&&!c)return!1;var o;for(o in n);return typeof o>"u"||r.call(n,o)},f=function(n,u){m&&u.name==="__proto__"?m(n,u.name,{enumerable:!0,configurable:!0,value:u.newValue,writable:!0}):n[u.name]=u.newValue},i=function(n,u){if(u==="__proto__")if(r.call(n,u)){if(y)return y(n,u).value}else return;return n[u]};h.exports=function e(){var n,u,c,o,a,l,b=arguments[0],s=1,v=arguments.length,E=!1;for(typeof b=="boolean"&&(E=b,b=arguments[1]||{},s=2),(b==null||typeof b!="object"&&typeof b!="function")&&(b={});s<v;++s)if(n=arguments[s],n!=null)for(u in n)c=i(b,u),o=i(n,u),b!==o&&(E&&o&&(d(o)||(a=g(o)))?(a?(a=!1,l=c&&g(c)?c:[]):l=c&&d(c)?c:{},f(b,{name:u,newValue:e(E,l,o)})):typeof o<"u"&&f(b,{name:u,newValue:o}));return b}},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BlockEmbed=t.bubbleFormats=void 0;var w=function(){function S(D,N){for(var P=0;P<N.length;P++){var B=N[P];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(D,B.key,B)}}return function(D,N,P){return N&&S(D.prototype,N),P&&S(D,P),D}}(),m=function S(D,N,P){D===null&&(D=Function.prototype);var B=Object.getOwnPropertyDescriptor(D,N);if(B===void 0){var H=Object.getPrototypeOf(D);return H===null?void 0:S(H,N,P)}else{if("value"in B)return B.value;var R=B.get;return R===void 0?void 0:R.call(P)}},y=r(3),g=b(y),d=r(2),f=b(d),i=r(0),e=b(i),n=r(16),u=b(n),c=r(6),o=b(c),a=r(7),l=b(a);function b(S){return S&&S.__esModule?S:{default:S}}function s(S,D){if(!(S instanceof D))throw new TypeError("Cannot call a class as a function")}function v(S,D){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D&&(typeof D=="object"||typeof D=="function")?D:S}function E(S,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof D);S.prototype=Object.create(D&&D.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),D&&(Object.setPrototypeOf?Object.setPrototypeOf(S,D):S.__proto__=D)}var _=1,z=function(S){E(D,S);function D(){return s(this,D),v(this,(D.__proto__||Object.getPrototypeOf(D)).apply(this,arguments))}return w(D,[{key:"attach",value:function(){m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"attach",this).call(this),this.attributes=new e.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return new f.default().insert(this.value(),(0,g.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(P,B){var H=e.default.query(P,e.default.Scope.BLOCK_ATTRIBUTE);H!=null&&this.attributes.attribute(H,B)}},{key:"formatAt",value:function(P,B,H,R){this.format(H,R)}},{key:"insertAt",value:function(P,B,H){if(typeof B=="string"&&B.endsWith(`
`)){var R=e.default.create(T.blotName);this.parent.insertBefore(R,P===0?this:this.next),R.insertAt(0,B.slice(0,-1))}else m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"insertAt",this).call(this,P,B,H)}}]),D}(e.default.Embed);z.scope=e.default.Scope.BLOCK_BLOT;var T=function(S){E(D,S);function D(N){s(this,D);var P=v(this,(D.__proto__||Object.getPrototypeOf(D)).call(this,N));return P.cache={},P}return w(D,[{key:"delta",value:function(){return this.cache.delta==null&&(this.cache.delta=this.descendants(e.default.Leaf).reduce(function(P,B){return B.length()===0?P:P.insert(B.value(),A(B))},new f.default).insert(`
`,A(this))),this.cache.delta}},{key:"deleteAt",value:function(P,B){m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"deleteAt",this).call(this,P,B),this.cache={}}},{key:"formatAt",value:function(P,B,H,R){B<=0||(e.default.query(H,e.default.Scope.BLOCK)?P+B===this.length()&&this.format(H,R):m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"formatAt",this).call(this,P,Math.min(B,this.length()-P-1),H,R),this.cache={})}},{key:"insertAt",value:function(P,B,H){if(H!=null)return m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"insertAt",this).call(this,P,B,H);if(B.length!==0){var R=B.split(`
`),Y=R.shift();Y.length>0&&(P<this.length()-1||this.children.tail==null?m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"insertAt",this).call(this,Math.min(P,this.length()-1),Y):this.children.tail.insertAt(this.children.tail.length(),Y),this.cache={});var C=this;R.reduce(function(M,I){return C=C.split(M,!0),C.insertAt(0,I),I.length},P+Y.length)}}},{key:"insertBefore",value:function(P,B){var H=this.children.head;m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"insertBefore",this).call(this,P,B),H instanceof u.default&&H.remove(),this.cache={}}},{key:"length",value:function(){return this.cache.length==null&&(this.cache.length=m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"length",this).call(this)+_),this.cache.length}},{key:"moveChildren",value:function(P,B){m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"moveChildren",this).call(this,P,B),this.cache={}}},{key:"optimize",value:function(P){m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"optimize",this).call(this,P),this.cache={}}},{key:"path",value:function(P){return m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"path",this).call(this,P,!0)}},{key:"removeChild",value:function(P){m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"removeChild",this).call(this,P),this.cache={}}},{key:"split",value:function(P){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(B&&(P===0||P>=this.length()-_)){var H=this.clone();return P===0?(this.parent.insertBefore(H,this),this):(this.parent.insertBefore(H,this.next),H)}else{var R=m(D.prototype.__proto__||Object.getPrototypeOf(D.prototype),"split",this).call(this,P,B);return this.cache={},R}}}]),D}(e.default.Block);T.blotName="block",T.tagName="P",T.defaultChild="break",T.allowedChildren=[o.default,e.default.Embed,l.default];function A(S){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return S==null||(typeof S.formats=="function"&&(D=(0,g.default)(D,S.formats())),S.parent==null||S.parent.blotName=="scroll"||S.parent.statics.scope!==S.statics.scope)?D:A(S.parent,D)}t.bubbleFormats=A,t.BlockEmbed=z,t.default=T},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.overload=t.expandConfig=void 0;var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},m=function(){function C(M,I){var O=[],W=!0,K=!1,L=void 0;try{for(var x=M[Symbol.iterator](),j;!(W=(j=x.next()).done)&&(O.push(j.value),!(I&&O.length===I));W=!0);}catch(q){K=!0,L=q}finally{try{!W&&x.return&&x.return()}finally{if(K)throw L}}return O}return function(M,I){if(Array.isArray(M))return M;if(Symbol.iterator in Object(M))return C(M,I);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(){function C(M,I){for(var O=0;O<I.length;O++){var W=I[O];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(M,W.key,W)}}return function(M,I,O){return I&&C(M.prototype,I),O&&C(M,O),M}}();r(50);var g=r(2),d=A(g),f=r(14),i=A(f),e=r(8),n=A(e),u=r(9),c=A(u),o=r(0),a=A(o),l=r(15),b=A(l),s=r(3),v=A(s),E=r(10),_=A(E),z=r(34),T=A(z);function A(C){return C&&C.__esModule?C:{default:C}}function S(C,M,I){return M in C?Object.defineProperty(C,M,{value:I,enumerable:!0,configurable:!0,writable:!0}):C[M]=I,C}function D(C,M){if(!(C instanceof M))throw new TypeError("Cannot call a class as a function")}var N=(0,_.default)("quill"),P=function(){y(C,null,[{key:"debug",value:function(I){I===!0&&(I="log"),_.default.level(I)}},{key:"find",value:function(I){return I.__quill||a.default.find(I)}},{key:"import",value:function(I){return this.imports[I]==null&&N.error("Cannot import "+I+". Are you sure it was registered?"),this.imports[I]}},{key:"register",value:function(I,O){var W=this,K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof I!="string"){var L=I.attrName||I.blotName;typeof L=="string"?this.register("formats/"+L,I,O):Object.keys(I).forEach(function(x){W.register(x,I[x],O)})}else this.imports[I]!=null&&!K&&N.warn("Overwriting "+I+" with",O),this.imports[I]=O,(I.startsWith("blots/")||I.startsWith("formats/"))&&O.blotName!=="abstract"?a.default.register(O):I.startsWith("modules")&&typeof O.register=="function"&&O.register()}}]);function C(M){var I=this,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(D(this,C),this.options=B(M,O),this.container=this.options.container,this.container==null)return N.error("Invalid Quill container",M);this.options.debug&&C.debug(this.options.debug);var W=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new n.default,this.scroll=a.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new i.default(this.scroll),this.selection=new b.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(n.default.events.EDITOR_CHANGE,function(L){L===n.default.events.TEXT_CHANGE&&I.root.classList.toggle("ql-blank",I.editor.isBlank())}),this.emitter.on(n.default.events.SCROLL_UPDATE,function(L,x){var j=I.selection.lastRange,q=j&&j.length===0?j.index:void 0;H.call(I,function(){return I.editor.update(null,x,q)},L)});var K=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">`+W+"<p><br></p></div>");this.setContents(K),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return y(C,[{key:"addContainer",value:function(I){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof I=="string"){var W=I;I=document.createElement("div"),I.classList.add(W)}return this.container.insertBefore(I,O),I}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(I,O,W){var K=this,L=R(I,O,W),x=m(L,4);return I=x[0],O=x[1],W=x[3],H.call(this,function(){return K.editor.deleteText(I,O)},W,I,-1*O)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.scroll.enable(I),this.container.classList.toggle("ql-disabled",!I)}},{key:"focus",value:function(){var I=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=I,this.scrollIntoView()}},{key:"format",value:function(I,O){var W=this,K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:n.default.sources.API;return H.call(this,function(){var L=W.getSelection(!0),x=new d.default;if(L==null)return x;if(a.default.query(I,a.default.Scope.BLOCK))x=W.editor.formatLine(L.index,L.length,S({},I,O));else{if(L.length===0)return W.selection.format(I,O),x;x=W.editor.formatText(L.index,L.length,S({},I,O))}return W.setSelection(L,n.default.sources.SILENT),x},K)}},{key:"formatLine",value:function(I,O,W,K,L){var x=this,j=void 0,q=R(I,O,W,K,L),F=m(q,4);return I=F[0],O=F[1],j=F[2],L=F[3],H.call(this,function(){return x.editor.formatLine(I,O,j)},L,I,0)}},{key:"formatText",value:function(I,O,W,K,L){var x=this,j=void 0,q=R(I,O,W,K,L),F=m(q,4);return I=F[0],O=F[1],j=F[2],L=F[3],H.call(this,function(){return x.editor.formatText(I,O,j)},L,I,0)}},{key:"getBounds",value:function(I){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,W=void 0;typeof I=="number"?W=this.selection.getBounds(I,O):W=this.selection.getBounds(I.index,I.length);var K=this.container.getBoundingClientRect();return{bottom:W.bottom-K.top,height:W.height,left:W.left-K.left,right:W.right-K.left,top:W.top-K.top,width:W.width}}},{key:"getContents",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-I,W=R(I,O),K=m(W,2);return I=K[0],O=K[1],this.editor.getContents(I,O)}},{key:"getFormat",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof I=="number"?this.editor.getFormat(I,O):this.editor.getFormat(I.index,I.length)}},{key:"getIndex",value:function(I){return I.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(I){return this.scroll.leaf(I)}},{key:"getLine",value:function(I){return this.scroll.line(I)}},{key:"getLines",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof I!="number"?this.scroll.lines(I.index,I.length):this.scroll.lines(I,O)}},{key:"getModule",value:function(I){return this.theme.modules[I]}},{key:"getSelection",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return I&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-I,W=R(I,O),K=m(W,2);return I=K[0],O=K[1],this.editor.getText(I,O)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(I,O,W){var K=this,L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:C.sources.API;return H.call(this,function(){return K.editor.insertEmbed(I,O,W)},L,I)}},{key:"insertText",value:function(I,O,W,K,L){var x=this,j=void 0,q=R(I,0,W,K,L),F=m(q,4);return I=F[0],j=F[2],L=F[3],H.call(this,function(){return x.editor.insertText(I,O,j)},L,I,O.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(I,O,W){this.clipboard.dangerouslyPasteHTML(I,O,W)}},{key:"removeFormat",value:function(I,O,W){var K=this,L=R(I,O,W),x=m(L,4);return I=x[0],O=x[1],W=x[3],H.call(this,function(){return K.editor.removeFormat(I,O)},W,I)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(I){var O=this,W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n.default.sources.API;return H.call(this,function(){I=new d.default(I);var K=O.getLength(),L=O.editor.deleteText(0,K),x=O.editor.applyDelta(I),j=x.ops[x.ops.length-1];j!=null&&typeof j.insert=="string"&&j.insert[j.insert.length-1]===`
`&&(O.editor.deleteText(O.getLength()-1,1),x.delete(1));var q=L.compose(x);return q},W)}},{key:"setSelection",value:function(I,O,W){if(I==null)this.selection.setRange(null,O||C.sources.API);else{var K=R(I,O,W),L=m(K,4);I=L[0],O=L[1],W=L[3],this.selection.setRange(new l.Range(I,O),W),W!==n.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(I){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n.default.sources.API,W=new d.default().insert(I);return this.setContents(W,O)}},{key:"update",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:n.default.sources.USER,O=this.scroll.update(I);return this.selection.update(I),O}},{key:"updateContents",value:function(I){var O=this,W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n.default.sources.API;return H.call(this,function(){return I=new d.default(I),O.editor.applyDelta(I,W)},W,!0)}}]),C}();P.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},P.events=n.default.events,P.sources=n.default.sources,P.version="1.3.7",P.imports={delta:d.default,parchment:a.default,"core/module":c.default,"core/theme":T.default};function B(C,M){if(M=(0,v.default)(!0,{container:C,modules:{clipboard:!0,keyboard:!0,history:!0}},M),!M.theme||M.theme===P.DEFAULTS.theme)M.theme=T.default;else if(M.theme=P.import("themes/"+M.theme),M.theme==null)throw new Error("Invalid theme "+M.theme+". Did you register it?");var I=(0,v.default)(!0,{},M.theme.DEFAULTS);[I,M].forEach(function(K){K.modules=K.modules||{},Object.keys(K.modules).forEach(function(L){K.modules[L]===!0&&(K.modules[L]={})})});var O=Object.keys(I.modules).concat(Object.keys(M.modules)),W=O.reduce(function(K,L){var x=P.import("modules/"+L);return x==null?N.error("Cannot load "+L+" module. Are you sure you registered it?"):K[L]=x.DEFAULTS||{},K},{});return M.modules!=null&&M.modules.toolbar&&M.modules.toolbar.constructor!==Object&&(M.modules.toolbar={container:M.modules.toolbar}),M=(0,v.default)(!0,{},P.DEFAULTS,{modules:W},I,M),["bounds","container","scrollingContainer"].forEach(function(K){typeof M[K]=="string"&&(M[K]=document.querySelector(M[K]))}),M.modules=Object.keys(M.modules).reduce(function(K,L){return M.modules[L]&&(K[L]=M.modules[L]),K},{}),M}function H(C,M,I,O){if(this.options.strict&&!this.isEnabled()&&M===n.default.sources.USER)return new d.default;var W=I==null?null:this.getSelection(),K=this.editor.delta,L=C();if(W!=null&&(I===!0&&(I=W.index),O==null?W=Y(W,L,M):O!==0&&(W=Y(W,I,O,M)),this.setSelection(W,n.default.sources.SILENT)),L.length()>0){var x,j=[n.default.events.TEXT_CHANGE,L,K,M];if((x=this.emitter).emit.apply(x,[n.default.events.EDITOR_CHANGE].concat(j)),M!==n.default.sources.SILENT){var q;(q=this.emitter).emit.apply(q,j)}}return L}function R(C,M,I,O,W){var K={};return typeof C.index=="number"&&typeof C.length=="number"?typeof M!="number"?(W=O,O=I,I=M,M=C.length,C=C.index):(M=C.length,C=C.index):typeof M!="number"&&(W=O,O=I,I=M,M=0),(typeof I>"u"?"undefined":w(I))==="object"?(K=I,W=O):typeof I=="string"&&(O!=null?K[I]=O:W=I),W=W||n.default.sources.API,[C,M,K,W]}function Y(C,M,I,O){if(C==null)return null;var W=void 0,K=void 0;if(M instanceof d.default){var L=[C.index,C.index+C.length].map(function(F){return M.transformPosition(F,O!==n.default.sources.USER)}),x=m(L,2);W=x[0],K=x[1]}else{var j=[C.index,C.index+C.length].map(function(F){return F<M||F===M&&O===n.default.sources.USER?F:I>=0?F+I:Math.max(M,F+I)}),q=m(j,2);W=q[0],K=q[1]}return new l.Range(W,K-W)}t.expandConfig=B,t.overload=R,t.default=P},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function o(a,l){for(var b=0;b<l.length;b++){var s=l[b];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,s.key,s)}}return function(a,l,b){return l&&o(a.prototype,l),b&&o(a,b),a}}(),m=function o(a,l,b){a===null&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,l);if(s===void 0){var v=Object.getPrototypeOf(a);return v===null?void 0:o(v,l,b)}else{if("value"in s)return s.value;var E=s.get;return E===void 0?void 0:E.call(b)}},y=r(7),g=i(y),d=r(0),f=i(d);function i(o){return o&&o.__esModule?o:{default:o}}function e(o,a){if(!(o instanceof a))throw new TypeError("Cannot call a class as a function")}function n(o,a){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a&&(typeof a=="object"||typeof a=="function")?a:o}function u(o,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);o.prototype=Object.create(a&&a.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(o,a):o.__proto__=a)}var c=function(o){u(a,o);function a(){return e(this,a),n(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return w(a,[{key:"formatAt",value:function(b,s,v,E){if(a.compare(this.statics.blotName,v)<0&&f.default.query(v,f.default.Scope.BLOT)){var _=this.isolate(b,s);E&&_.wrap(v,E)}else m(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"formatAt",this).call(this,b,s,v,E)}},{key:"optimize",value:function(b){if(m(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"optimize",this).call(this,b),this.parent instanceof a&&a.compare(this.statics.blotName,this.parent.statics.blotName)>0){var s=this.parent.isolate(this.offset(),this.length());this.moveChildren(s),s.wrap(this)}}}],[{key:"compare",value:function(b,s){var v=a.order.indexOf(b),E=a.order.indexOf(s);return v>=0||E>=0?v-E:b===s?0:b<s?-1:1}}]),a}(f.default.Inline);c.allowedChildren=[c,f.default.Embed,g.default],c.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],t.default=c},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(0),m=y(w);function y(e){return e&&e.__esModule?e:{default:e}}function g(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:e}function f(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=function(e){f(n,e);function n(){return g(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return n}(m.default.Text);t.default=i},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function l(b,s){for(var v=0;v<s.length;v++){var E=s[v];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(b,E.key,E)}}return function(b,s,v){return s&&l(b.prototype,s),v&&l(b,v),b}}(),m=function l(b,s,v){b===null&&(b=Function.prototype);var E=Object.getOwnPropertyDescriptor(b,s);if(E===void 0){var _=Object.getPrototypeOf(b);return _===null?void 0:l(_,s,v)}else{if("value"in E)return E.value;var z=E.get;return z===void 0?void 0:z.call(v)}},y=r(54),g=i(y),d=r(10),f=i(d);function i(l){return l&&l.__esModule?l:{default:l}}function e(l,b){if(!(l instanceof b))throw new TypeError("Cannot call a class as a function")}function n(l,b){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:l}function u(l,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);l.prototype=Object.create(b&&b.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(l,b):l.__proto__=b)}var c=(0,f.default)("quill:events"),o=["selectionchange","mousedown","mouseup","click"];o.forEach(function(l){document.addEventListener(l,function(){for(var b=arguments.length,s=Array(b),v=0;v<b;v++)s[v]=arguments[v];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(E){if(E.__quill&&E.__quill.emitter){var _;(_=E.__quill.emitter).handleDOM.apply(_,s)}})})});var a=function(l){u(b,l);function b(){e(this,b);var s=n(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return s.listeners={},s.on("error",c.error),s}return w(b,[{key:"emit",value:function(){c.log.apply(c,arguments),m(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(v){for(var E=arguments.length,_=Array(E>1?E-1:0),z=1;z<E;z++)_[z-1]=arguments[z];(this.listeners[v.type]||[]).forEach(function(T){var A=T.node,S=T.handler;(v.target===A||A.contains(v.target))&&S.apply(void 0,[v].concat(_))})}},{key:"listenDOM",value:function(v,E,_){this.listeners[v]||(this.listeners[v]=[]),this.listeners[v].push({node:E,handler:_})}}]),b}(g.default);a.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},a.sources={API:"api",SILENT:"silent",USER:"user"},t.default=a},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});function w(y,g){if(!(y instanceof g))throw new TypeError("Cannot call a class as a function")}var m=function y(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};w(this,y),this.quill=g,this.options=d};m.DEFAULTS={},t.default=m},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=["error","warn","log","info"],m="warn";function y(d){if(w.indexOf(d)<=w.indexOf(m)){for(var f,i=arguments.length,e=Array(i>1?i-1:0),n=1;n<i;n++)e[n-1]=arguments[n];(f=console)[d].apply(f,e)}}function g(d){return w.reduce(function(f,i){return f[i]=y.bind(console,i,d),f},{})}y.level=g.level=function(d){m=d},t.default=g},function(h,t,r){var w=Array.prototype.slice,m=r(52),y=r(53),g=h.exports=function(e,n,u){return u||(u={}),e===n?!0:e instanceof Date&&n instanceof Date?e.getTime()===n.getTime():!e||!n||typeof e!="object"&&typeof n!="object"?u.strict?e===n:e==n:i(e,n,u)};function d(e){return e==null}function f(e){return!(!e||typeof e!="object"||typeof e.length!="number"||typeof e.copy!="function"||typeof e.slice!="function"||e.length>0&&typeof e[0]!="number")}function i(e,n,u){var c,o;if(d(e)||d(n)||e.prototype!==n.prototype)return!1;if(y(e))return y(n)?(e=w.call(e),n=w.call(n),g(e,n,u)):!1;if(f(e)){if(!f(n)||e.length!==n.length)return!1;for(c=0;c<e.length;c++)if(e[c]!==n[c])return!1;return!0}try{var a=m(e),l=m(n)}catch{return!1}if(a.length!=l.length)return!1;for(a.sort(),l.sort(),c=a.length-1;c>=0;c--)if(a[c]!=l[c])return!1;for(c=a.length-1;c>=0;c--)if(o=a[c],!g(e[o],n[o],u))return!1;return typeof e==typeof n}},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(1),m=function(){function y(g,d,f){f===void 0&&(f={}),this.attrName=g,this.keyName=d;var i=w.Scope.TYPE&w.Scope.ATTRIBUTE;f.scope!=null?this.scope=f.scope&w.Scope.LEVEL|i:this.scope=w.Scope.ATTRIBUTE,f.whitelist!=null&&(this.whitelist=f.whitelist)}return y.keys=function(g){return[].map.call(g.attributes,function(d){return d.name})},y.prototype.add=function(g,d){return this.canAdd(g,d)?(g.setAttribute(this.keyName,d),!0):!1},y.prototype.canAdd=function(g,d){var f=w.query(g,w.Scope.BLOT&(this.scope|w.Scope.TYPE));return f==null?!1:this.whitelist==null?!0:typeof d=="string"?this.whitelist.indexOf(d.replace(/["']/g,""))>-1:this.whitelist.indexOf(d)>-1},y.prototype.remove=function(g){g.removeAttribute(this.keyName)},y.prototype.value=function(g){var d=g.getAttribute(this.keyName);return this.canAdd(g,d)&&d?d:""},y}();t.default=m},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Code=void 0;var w=function(){function z(T,A){var S=[],D=!0,N=!1,P=void 0;try{for(var B=T[Symbol.iterator](),H;!(D=(H=B.next()).done)&&(S.push(H.value),!(A&&S.length===A));D=!0);}catch(R){N=!0,P=R}finally{try{!D&&B.return&&B.return()}finally{if(N)throw P}}return S}return function(T,A){if(Array.isArray(T))return T;if(Symbol.iterator in Object(T))return z(T,A);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function z(T,A){for(var S=0;S<A.length;S++){var D=A[S];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(T,D.key,D)}}return function(T,A,S){return A&&z(T.prototype,A),S&&z(T,S),T}}(),y=function z(T,A,S){T===null&&(T=Function.prototype);var D=Object.getOwnPropertyDescriptor(T,A);if(D===void 0){var N=Object.getPrototypeOf(T);return N===null?void 0:z(N,A,S)}else{if("value"in D)return D.value;var P=D.get;return P===void 0?void 0:P.call(S)}},g=r(2),d=l(g),f=r(0),i=l(f),e=r(4),n=l(e),u=r(6),c=l(u),o=r(7),a=l(o);function l(z){return z&&z.__esModule?z:{default:z}}function b(z,T){if(!(z instanceof T))throw new TypeError("Cannot call a class as a function")}function s(z,T){if(!z)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T&&(typeof T=="object"||typeof T=="function")?T:z}function v(z,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof T);z.prototype=Object.create(T&&T.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),T&&(Object.setPrototypeOf?Object.setPrototypeOf(z,T):z.__proto__=T)}var E=function(z){v(T,z);function T(){return b(this,T),s(this,(T.__proto__||Object.getPrototypeOf(T)).apply(this,arguments))}return T}(c.default);E.blotName="code",E.tagName="CODE";var _=function(z){v(T,z);function T(){return b(this,T),s(this,(T.__proto__||Object.getPrototypeOf(T)).apply(this,arguments))}return m(T,[{key:"delta",value:function(){var S=this,D=this.domNode.textContent;return D.endsWith(`
`)&&(D=D.slice(0,-1)),D.split(`
`).reduce(function(N,P){return N.insert(P).insert(`
`,S.formats())},new d.default)}},{key:"format",value:function(S,D){if(!(S===this.statics.blotName&&D)){var N=this.descendant(a.default,this.length()-1),P=w(N,1),B=P[0];B!=null&&B.deleteAt(B.length()-1,1),y(T.prototype.__proto__||Object.getPrototypeOf(T.prototype),"format",this).call(this,S,D)}}},{key:"formatAt",value:function(S,D,N,P){if(D!==0&&!(i.default.query(N,i.default.Scope.BLOCK)==null||N===this.statics.blotName&&P===this.statics.formats(this.domNode))){var B=this.newlineIndex(S);if(!(B<0||B>=S+D)){var H=this.newlineIndex(S,!0)+1,R=B-H+1,Y=this.isolate(H,R),C=Y.next;Y.format(N,P),C instanceof T&&C.formatAt(0,S-H+D-R,N,P)}}}},{key:"insertAt",value:function(S,D,N){if(N==null){var P=this.descendant(a.default,S),B=w(P,2),H=B[0],R=B[1];H.insertAt(R,D)}}},{key:"length",value:function(){var S=this.domNode.textContent.length;return this.domNode.textContent.endsWith(`
`)?S:S+1}},{key:"newlineIndex",value:function(S){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(D)return this.domNode.textContent.slice(0,S).lastIndexOf(`
`);var N=this.domNode.textContent.slice(S).indexOf(`
`);return N>-1?S+N:-1}},{key:"optimize",value:function(S){this.domNode.textContent.endsWith(`
`)||this.appendChild(i.default.create("text",`
`)),y(T.prototype.__proto__||Object.getPrototypeOf(T.prototype),"optimize",this).call(this,S);var D=this.next;D!=null&&D.prev===this&&D.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===D.statics.formats(D.domNode)&&(D.optimize(S),D.moveChildren(this),D.remove())}},{key:"replace",value:function(S){y(T.prototype.__proto__||Object.getPrototypeOf(T.prototype),"replace",this).call(this,S),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(D){var N=i.default.find(D);N==null?D.parentNode.removeChild(D):N instanceof i.default.Embed?N.remove():N.unwrap()})}}],[{key:"create",value:function(S){var D=y(T.__proto__||Object.getPrototypeOf(T),"create",this).call(this,S);return D.setAttribute("spellcheck",!1),D}},{key:"formats",value:function(){return!0}}]),T}(n.default);_.blotName="code-block",_.tagName="PRE",_.TAB="  ",t.Code=E,t.default=_},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},m=function(){function C(M,I){var O=[],W=!0,K=!1,L=void 0;try{for(var x=M[Symbol.iterator](),j;!(W=(j=x.next()).done)&&(O.push(j.value),!(I&&O.length===I));W=!0);}catch(q){K=!0,L=q}finally{try{!W&&x.return&&x.return()}finally{if(K)throw L}}return O}return function(M,I){if(Array.isArray(M))return M;if(Symbol.iterator in Object(M))return C(M,I);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(){function C(M,I){for(var O=0;O<I.length;O++){var W=I[O];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(M,W.key,W)}}return function(M,I,O){return I&&C(M.prototype,I),O&&C(M,O),M}}(),g=r(2),d=D(g),f=r(20),i=D(f),e=r(0),n=D(e),u=r(13),c=D(u),o=r(24),a=D(o),l=r(4),b=D(l),s=r(16),v=D(s),E=r(21),_=D(E),z=r(11),T=D(z),A=r(3),S=D(A);function D(C){return C&&C.__esModule?C:{default:C}}function N(C,M,I){return M in C?Object.defineProperty(C,M,{value:I,enumerable:!0,configurable:!0,writable:!0}):C[M]=I,C}function P(C,M){if(!(C instanceof M))throw new TypeError("Cannot call a class as a function")}var B=/^[ -~]*$/,H=function(){function C(M){P(this,C),this.scroll=M,this.delta=this.getDelta()}return y(C,[{key:"applyDelta",value:function(I){var O=this,W=!1;this.scroll.update();var K=this.scroll.length();return this.scroll.batchStart(),I=Y(I),I.reduce(function(L,x){var j=x.retain||x.delete||x.insert.length||1,q=x.attributes||{};if(x.insert!=null){if(typeof x.insert=="string"){var F=x.insert;F.endsWith(`
`)&&W&&(W=!1,F=F.slice(0,-1)),L>=K&&!F.endsWith(`
`)&&(W=!0),O.scroll.insertAt(L,F);var U=O.scroll.line(L),ne=m(U,2),te=ne[0],re=ne[1],ue=(0,S.default)({},(0,l.bubbleFormats)(te));if(te instanceof b.default){var de=te.descendant(n.default.Leaf,re),ke=m(de,1),be=ke[0];ue=(0,S.default)(ue,(0,l.bubbleFormats)(be))}q=i.default.attributes.diff(ue,q)||{}}else if(w(x.insert)==="object"){var G=Object.keys(x.insert)[0];if(G==null)return L;O.scroll.insertAt(L,G,x.insert[G])}K+=j}return Object.keys(q).forEach(function(V){O.scroll.formatAt(L,j,V,q[V])}),L+j},0),I.reduce(function(L,x){return typeof x.delete=="number"?(O.scroll.deleteAt(L,x.delete),L):L+(x.retain||x.insert.length||1)},0),this.scroll.batchEnd(),this.update(I)}},{key:"deleteText",value:function(I,O){return this.scroll.deleteAt(I,O),this.update(new d.default().retain(I).delete(O))}},{key:"formatLine",value:function(I,O){var W=this,K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.scroll.update(),Object.keys(K).forEach(function(L){if(!(W.scroll.whitelist!=null&&!W.scroll.whitelist[L])){var x=W.scroll.lines(I,Math.max(O,1)),j=O;x.forEach(function(q){var F=q.length();if(!(q instanceof c.default))q.format(L,K[L]);else{var U=I-q.offset(W.scroll),ne=q.newlineIndex(U+j)-U+1;q.formatAt(U,ne,L,K[L])}j-=F})}}),this.scroll.optimize(),this.update(new d.default().retain(I).retain(O,(0,_.default)(K)))}},{key:"formatText",value:function(I,O){var W=this,K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Object.keys(K).forEach(function(L){W.scroll.formatAt(I,O,L,K[L])}),this.update(new d.default().retain(I).retain(O,(0,_.default)(K)))}},{key:"getContents",value:function(I,O){return this.delta.slice(I,I+O)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(I,O){return I.concat(O.delta())},new d.default)}},{key:"getFormat",value:function(I){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,W=[],K=[];O===0?this.scroll.path(I).forEach(function(x){var j=m(x,1),q=j[0];q instanceof b.default?W.push(q):q instanceof n.default.Leaf&&K.push(q)}):(W=this.scroll.lines(I,O),K=this.scroll.descendants(n.default.Leaf,I,O));var L=[W,K].map(function(x){if(x.length===0)return{};for(var j=(0,l.bubbleFormats)(x.shift());Object.keys(j).length>0;){var q=x.shift();if(q==null)return j;j=R((0,l.bubbleFormats)(q),j)}return j});return S.default.apply(S.default,L)}},{key:"getText",value:function(I,O){return this.getContents(I,O).filter(function(W){return typeof W.insert=="string"}).map(function(W){return W.insert}).join("")}},{key:"insertEmbed",value:function(I,O,W){return this.scroll.insertAt(I,O,W),this.update(new d.default().retain(I).insert(N({},O,W)))}},{key:"insertText",value:function(I,O){var W=this,K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return O=O.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(I,O),Object.keys(K).forEach(function(L){W.scroll.formatAt(I,O.length,L,K[L])}),this.update(new d.default().retain(I).insert(O,(0,_.default)(K)))}},{key:"isBlank",value:function(){if(this.scroll.children.length==0)return!0;if(this.scroll.children.length>1)return!1;var I=this.scroll.children.head;return I.statics.blotName!==b.default.blotName||I.children.length>1?!1:I.children.head instanceof v.default}},{key:"removeFormat",value:function(I,O){var W=this.getText(I,O),K=this.scroll.line(I+O),L=m(K,2),x=L[0],j=L[1],q=0,F=new d.default;x!=null&&(x instanceof c.default?q=x.newlineIndex(j)-j+1:q=x.length()-j,F=x.delta().slice(j,j+q-1).insert(`
`));var U=this.getContents(I,O+q),ne=U.diff(new d.default().insert(W).concat(F)),te=new d.default().retain(I).concat(ne);return this.applyDelta(te)}},{key:"update",value:function(I){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,K=this.delta;if(O.length===1&&O[0].type==="characterData"&&O[0].target.data.match(B)&&n.default.find(O[0].target)){var L=n.default.find(O[0].target),x=(0,l.bubbleFormats)(L),j=L.offset(this.scroll),q=O[0].oldValue.replace(a.default.CONTENTS,""),F=new d.default().insert(q),U=new d.default().insert(L.value()),ne=new d.default().retain(j).concat(F.diff(U,W));I=ne.reduce(function(te,re){return re.insert?te.insert(re.insert,x):te.push(re)},new d.default),this.delta=K.compose(I)}else this.delta=this.getDelta(),(!I||!(0,T.default)(K.compose(I),this.delta))&&(I=K.diff(this.delta,W));return I}}]),C}();function R(C,M){return Object.keys(M).reduce(function(I,O){return C[O]==null||(M[O]===C[O]?I[O]=M[O]:Array.isArray(M[O])?M[O].indexOf(C[O])<0&&(I[O]=M[O].concat([C[O]])):I[O]=[M[O],C[O]]),I},{})}function Y(C){return C.reduce(function(M,I){if(I.insert===1){var O=(0,_.default)(I.attributes);return delete O.image,M.insert({image:I.attributes.image},O)}if(I.attributes!=null&&(I.attributes.list===!0||I.attributes.bullet===!0)&&(I=(0,_.default)(I),I.attributes.list?I.attributes.list="ordered":(I.attributes.list="bullet",delete I.attributes.bullet)),typeof I.insert=="string"){var W=I.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return M.insert(W,I.attributes)}return M.push(I)},new d.default)}t.default=H},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Range=void 0;var w=function(){function z(T,A){var S=[],D=!0,N=!1,P=void 0;try{for(var B=T[Symbol.iterator](),H;!(D=(H=B.next()).done)&&(S.push(H.value),!(A&&S.length===A));D=!0);}catch(R){N=!0,P=R}finally{try{!D&&B.return&&B.return()}finally{if(N)throw P}}return S}return function(T,A){if(Array.isArray(T))return T;if(Symbol.iterator in Object(T))return z(T,A);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function z(T,A){for(var S=0;S<A.length;S++){var D=A[S];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(T,D.key,D)}}return function(T,A,S){return A&&z(T.prototype,A),S&&z(T,S),T}}(),y=r(0),g=a(y),d=r(21),f=a(d),i=r(11),e=a(i),n=r(8),u=a(n),c=r(10),o=a(c);function a(z){return z&&z.__esModule?z:{default:z}}function l(z){if(Array.isArray(z)){for(var T=0,A=Array(z.length);T<z.length;T++)A[T]=z[T];return A}else return Array.from(z)}function b(z,T){if(!(z instanceof T))throw new TypeError("Cannot call a class as a function")}var s=(0,o.default)("quill:selection"),v=function z(T){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;b(this,z),this.index=T,this.length=A},E=function(){function z(T,A){var S=this;b(this,z),this.emitter=A,this.scroll=T,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=g.default.create("cursor",this),this.lastRange=this.savedRange=new v(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){S.mouseDown||setTimeout(S.update.bind(S,u.default.sources.USER),1)}),this.emitter.on(u.default.events.EDITOR_CHANGE,function(D,N){D===u.default.events.TEXT_CHANGE&&N.length()>0&&S.update(u.default.sources.SILENT)}),this.emitter.on(u.default.events.SCROLL_BEFORE_UPDATE,function(){if(S.hasFocus()){var D=S.getNativeRange();D!=null&&D.start.node!==S.cursor.textNode&&S.emitter.once(u.default.events.SCROLL_UPDATE,function(){try{S.setNativeRange(D.start.node,D.start.offset,D.end.node,D.end.offset)}catch{}})}}),this.emitter.on(u.default.events.SCROLL_OPTIMIZE,function(D,N){if(N.range){var P=N.range,B=P.startNode,H=P.startOffset,R=P.endNode,Y=P.endOffset;S.setNativeRange(B,H,R,Y)}}),this.update(u.default.sources.SILENT)}return m(z,[{key:"handleComposition",value:function(){var A=this;this.root.addEventListener("compositionstart",function(){A.composing=!0}),this.root.addEventListener("compositionend",function(){if(A.composing=!1,A.cursor.parent){var S=A.cursor.restore();if(!S)return;setTimeout(function(){A.setNativeRange(S.startNode,S.startOffset,S.endNode,S.endOffset)},1)}})}},{key:"handleDragging",value:function(){var A=this;this.emitter.listenDOM("mousedown",document.body,function(){A.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){A.mouseDown=!1,A.update(u.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(A,S){if(!(this.scroll.whitelist!=null&&!this.scroll.whitelist[A])){this.scroll.update();var D=this.getNativeRange();if(!(D==null||!D.native.collapsed||g.default.query(A,g.default.Scope.BLOCK))){if(D.start.node!==this.cursor.textNode){var N=g.default.find(D.start.node,!1);if(N==null)return;if(N instanceof g.default.Leaf){var P=N.split(D.start.offset);N.parent.insertBefore(this.cursor,P)}else N.insertBefore(this.cursor,D.start.node);this.cursor.attach()}this.cursor.format(A,S),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(A){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,D=this.scroll.length();A=Math.min(A,D-1),S=Math.min(A+S,D-1)-A;var N=void 0,P=this.scroll.leaf(A),B=w(P,2),H=B[0],R=B[1];if(H==null)return null;var Y=H.position(R,!0),C=w(Y,2);N=C[0],R=C[1];var M=document.createRange();if(S>0){M.setStart(N,R);var I=this.scroll.leaf(A+S),O=w(I,2);if(H=O[0],R=O[1],H==null)return null;var W=H.position(R,!0),K=w(W,2);return N=K[0],R=K[1],M.setEnd(N,R),M.getBoundingClientRect()}else{var L="left",x=void 0;return N instanceof Text?(R<N.data.length?(M.setStart(N,R),M.setEnd(N,R+1)):(M.setStart(N,R-1),M.setEnd(N,R),L="right"),x=M.getBoundingClientRect()):(x=H.domNode.getBoundingClientRect(),R>0&&(L="right")),{bottom:x.top+x.height,height:x.height,left:x[L],right:x[L],top:x.top,width:0}}}},{key:"getNativeRange",value:function(){var A=document.getSelection();if(A==null||A.rangeCount<=0)return null;var S=A.getRangeAt(0);if(S==null)return null;var D=this.normalizeNative(S);return s.info("getNativeRange",D),D}},{key:"getRange",value:function(){var A=this.getNativeRange();if(A==null)return[null,null];var S=this.normalizedToRange(A);return[S,A]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(A){var S=this,D=[[A.start.node,A.start.offset]];A.native.collapsed||D.push([A.end.node,A.end.offset]);var N=D.map(function(H){var R=w(H,2),Y=R[0],C=R[1],M=g.default.find(Y,!0),I=M.offset(S.scroll);return C===0?I:M instanceof g.default.Container?I+M.length():I+M.index(Y,C)}),P=Math.min(Math.max.apply(Math,l(N)),this.scroll.length()-1),B=Math.min.apply(Math,[P].concat(l(N)));return new v(B,P-B)}},{key:"normalizeNative",value:function(A){if(!_(this.root,A.startContainer)||!A.collapsed&&!_(this.root,A.endContainer))return null;var S={start:{node:A.startContainer,offset:A.startOffset},end:{node:A.endContainer,offset:A.endOffset},native:A};return[S.start,S.end].forEach(function(D){for(var N=D.node,P=D.offset;!(N instanceof Text)&&N.childNodes.length>0;)if(N.childNodes.length>P)N=N.childNodes[P],P=0;else if(N.childNodes.length===P)N=N.lastChild,P=N instanceof Text?N.data.length:N.childNodes.length+1;else break;D.node=N,D.offset=P}),S}},{key:"rangeToNative",value:function(A){var S=this,D=A.collapsed?[A.index]:[A.index,A.index+A.length],N=[],P=this.scroll.length();return D.forEach(function(B,H){B=Math.min(P-1,B);var R=void 0,Y=S.scroll.leaf(B),C=w(Y,2),M=C[0],I=C[1],O=M.position(I,H!==0),W=w(O,2);R=W[0],I=W[1],N.push(R,I)}),N.length<2&&(N=N.concat(N)),N}},{key:"scrollIntoView",value:function(A){var S=this.lastRange;if(S!=null){var D=this.getBounds(S.index,S.length);if(D!=null){var N=this.scroll.length()-1,P=this.scroll.line(Math.min(S.index,N)),B=w(P,1),H=B[0],R=H;if(S.length>0){var Y=this.scroll.line(Math.min(S.index+S.length,N)),C=w(Y,1);R=C[0]}if(!(H==null||R==null)){var M=A.getBoundingClientRect();D.top<M.top?A.scrollTop-=M.top-D.top:D.bottom>M.bottom&&(A.scrollTop+=D.bottom-M.bottom)}}}}},{key:"setNativeRange",value:function(A,S){var D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:A,N=arguments.length>3&&arguments[3]!==void 0?arguments[3]:S,P=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(s.info("setNativeRange",A,S,D,N),!(A!=null&&(this.root.parentNode==null||A.parentNode==null||D.parentNode==null))){var B=document.getSelection();if(B!=null)if(A!=null){this.hasFocus()||this.root.focus();var H=(this.getNativeRange()||{}).native;if(H==null||P||A!==H.startContainer||S!==H.startOffset||D!==H.endContainer||N!==H.endOffset){A.tagName=="BR"&&(S=[].indexOf.call(A.parentNode.childNodes,A),A=A.parentNode),D.tagName=="BR"&&(N=[].indexOf.call(D.parentNode.childNodes,D),D=D.parentNode);var R=document.createRange();R.setStart(A,S),R.setEnd(D,N),B.removeAllRanges(),B.addRange(R)}}else B.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(A){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:u.default.sources.API;if(typeof S=="string"&&(D=S,S=!1),s.info("setRange",A),A!=null){var N=this.rangeToNative(A);this.setNativeRange.apply(this,l(N).concat([S]))}else this.setNativeRange(null);this.update(D)}},{key:"update",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.default.sources.USER,S=this.lastRange,D=this.getRange(),N=w(D,2),P=N[0],B=N[1];if(this.lastRange=P,this.lastRange!=null&&(this.savedRange=this.lastRange),!(0,e.default)(S,this.lastRange)){var H;!this.composing&&B!=null&&B.native.collapsed&&B.start.node!==this.cursor.textNode&&this.cursor.restore();var R=[u.default.events.SELECTION_CHANGE,(0,f.default)(this.lastRange),(0,f.default)(S),A];if((H=this.emitter).emit.apply(H,[u.default.events.EDITOR_CHANGE].concat(R)),A!==u.default.sources.SILENT){var Y;(Y=this.emitter).emit.apply(Y,R)}}}}]),z}();function _(z,T){try{T.parentNode}catch{return!1}return T instanceof Text&&(T=T.parentNode),z.contains(T)}t.Range=v,t.default=E},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function u(c,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,o,a){return o&&u(c.prototype,o),a&&u(c,a),c}}(),m=function u(c,o,a){c===null&&(c=Function.prototype);var l=Object.getOwnPropertyDescriptor(c,o);if(l===void 0){var b=Object.getPrototypeOf(c);return b===null?void 0:u(b,o,a)}else{if("value"in l)return l.value;var s=l.get;return s===void 0?void 0:s.call(a)}},y=r(0),g=d(y);function d(u){return u&&u.__esModule?u:{default:u}}function f(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")}function i(u,c){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:u}function e(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);u.prototype=Object.create(c&&c.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(u,c):u.__proto__=c)}var n=function(u){e(c,u);function c(){return f(this,c),i(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return w(c,[{key:"insertInto",value:function(a,l){a.children.length===0?m(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"insertInto",this).call(this,a,l):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),c}(g.default.Embed);n.blotName="break",n.tagName="BR",t.default=n},function(h,t,r){var w=this&&this.__extends||function(){var i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var u in n)n.hasOwnProperty(u)&&(e[u]=n[u])};return function(e,n){i(e,n);function u(){this.constructor=e}e.prototype=n===null?Object.create(n):(u.prototype=n.prototype,new u)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=r(44),y=r(30),g=r(1),d=function(i){w(e,i);function e(n){var u=i.call(this,n)||this;return u.build(),u}return e.prototype.appendChild=function(n){this.insertBefore(n)},e.prototype.attach=function(){i.prototype.attach.call(this),this.children.forEach(function(n){n.attach()})},e.prototype.build=function(){var n=this;this.children=new m.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(u){try{var c=f(u);n.insertBefore(c,n.children.head||void 0)}catch(o){if(o instanceof g.ParchmentError)return;throw o}})},e.prototype.deleteAt=function(n,u){if(n===0&&u===this.length())return this.remove();this.children.forEachAt(n,u,function(c,o,a){c.deleteAt(o,a)})},e.prototype.descendant=function(n,u){var c=this.children.find(u),o=c[0],a=c[1];return n.blotName==null&&n(o)||n.blotName!=null&&o instanceof n?[o,a]:o instanceof e?o.descendant(n,a):[null,-1]},e.prototype.descendants=function(n,u,c){u===void 0&&(u=0),c===void 0&&(c=Number.MAX_VALUE);var o=[],a=c;return this.children.forEachAt(u,c,function(l,b,s){(n.blotName==null&&n(l)||n.blotName!=null&&l instanceof n)&&o.push(l),l instanceof e&&(o=o.concat(l.descendants(n,b,a))),a-=s}),o},e.prototype.detach=function(){this.children.forEach(function(n){n.detach()}),i.prototype.detach.call(this)},e.prototype.formatAt=function(n,u,c,o){this.children.forEachAt(n,u,function(a,l,b){a.formatAt(l,b,c,o)})},e.prototype.insertAt=function(n,u,c){var o=this.children.find(n),a=o[0],l=o[1];if(a)a.insertAt(l,u,c);else{var b=c==null?g.create("text",u):g.create(u,c);this.appendChild(b)}},e.prototype.insertBefore=function(n,u){if(this.statics.allowedChildren!=null&&!this.statics.allowedChildren.some(function(c){return n instanceof c}))throw new g.ParchmentError("Cannot insert "+n.statics.blotName+" into "+this.statics.blotName);n.insertInto(this,u)},e.prototype.length=function(){return this.children.reduce(function(n,u){return n+u.length()},0)},e.prototype.moveChildren=function(n,u){this.children.forEach(function(c){n.insertBefore(c,u)})},e.prototype.optimize=function(n){if(i.prototype.optimize.call(this,n),this.children.length===0)if(this.statics.defaultChild!=null){var u=g.create(this.statics.defaultChild);this.appendChild(u),u.optimize(n)}else this.remove()},e.prototype.path=function(n,u){u===void 0&&(u=!1);var c=this.children.find(n,u),o=c[0],a=c[1],l=[[this,n]];return o instanceof e?l.concat(o.path(a,u)):(o!=null&&l.push([o,a]),l)},e.prototype.removeChild=function(n){this.children.remove(n)},e.prototype.replace=function(n){n instanceof e&&n.moveChildren(this),i.prototype.replace.call(this,n)},e.prototype.split=function(n,u){if(u===void 0&&(u=!1),!u){if(n===0)return this;if(n===this.length())return this.next}var c=this.clone();return this.parent.insertBefore(c,this.next),this.children.forEachAt(n,this.length(),function(o,a,l){o=o.split(a,u),c.appendChild(o)}),c},e.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},e.prototype.update=function(n,u){var c=this,o=[],a=[];n.forEach(function(l){l.target===c.domNode&&l.type==="childList"&&(o.push.apply(o,l.addedNodes),a.push.apply(a,l.removedNodes))}),a.forEach(function(l){if(!(l.parentNode!=null&&l.tagName!=="IFRAME"&&document.body.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var b=g.find(l);b!=null&&(b.domNode.parentNode==null||b.domNode.parentNode===c.domNode)&&b.detach()}}),o.filter(function(l){return l.parentNode==c.domNode}).sort(function(l,b){return l===b?0:l.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(l){var b=null;l.nextSibling!=null&&(b=g.find(l.nextSibling));var s=f(l);(s.next!=b||s.next==null)&&(s.parent!=null&&s.parent.removeChild(c),c.insertBefore(s,b||void 0))})},e}(y.default);function f(i){var e=g.find(i);if(e==null)try{e=g.create(i)}catch{e=g.create(g.Scope.INLINE),[].slice.call(i.childNodes).forEach(function(u){e.domNode.appendChild(u)}),i.parentNode&&i.parentNode.replaceChild(e.domNode,i),e.attach()}return e}t.default=d},function(h,t,r){var w=this&&this.__extends||function(){var i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var u in n)n.hasOwnProperty(u)&&(e[u]=n[u])};return function(e,n){i(e,n);function u(){this.constructor=e}e.prototype=n===null?Object.create(n):(u.prototype=n.prototype,new u)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=r(12),y=r(31),g=r(17),d=r(1),f=function(i){w(e,i);function e(n){var u=i.call(this,n)||this;return u.attributes=new y.default(u.domNode),u}return e.formats=function(n){if(typeof this.tagName=="string")return!0;if(Array.isArray(this.tagName))return n.tagName.toLowerCase()},e.prototype.format=function(n,u){var c=d.query(n);c instanceof m.default?this.attributes.attribute(c,u):u&&c!=null&&(n!==this.statics.blotName||this.formats()[n]!==u)&&this.replaceWith(n,u)},e.prototype.formats=function(){var n=this.attributes.values(),u=this.statics.formats(this.domNode);return u!=null&&(n[this.statics.blotName]=u),n},e.prototype.replaceWith=function(n,u){var c=i.prototype.replaceWith.call(this,n,u);return this.attributes.copy(c),c},e.prototype.update=function(n,u){var c=this;i.prototype.update.call(this,n,u),n.some(function(o){return o.target===c.domNode&&o.type==="attributes"})&&this.attributes.build()},e.prototype.wrap=function(n,u){var c=i.prototype.wrap.call(this,n,u);return c instanceof e&&c.statics.scope===this.statics.scope&&this.attributes.move(c),c},e}(g.default);t.default=f},function(h,t,r){var w=this&&this.__extends||function(){var d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,i){f.__proto__=i}||function(f,i){for(var e in i)i.hasOwnProperty(e)&&(f[e]=i[e])};return function(f,i){d(f,i);function e(){this.constructor=f}f.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=r(30),y=r(1),g=function(d){w(f,d);function f(){return d!==null&&d.apply(this,arguments)||this}return f.value=function(i){return!0},f.prototype.index=function(i,e){return this.domNode===i||this.domNode.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1},f.prototype.position=function(i,e){var n=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return i>0&&(n+=1),[this.parent.domNode,n]},f.prototype.value=function(){var i;return i={},i[this.statics.blotName]=this.statics.value(this.domNode)||!0,i},f.scope=y.Scope.INLINE_BLOT,f}(m.default);t.default=g},function(h,t,r){var w=r(11),m=r(3),y={attributes:{compose:function(d,f,i){typeof d!="object"&&(d={}),typeof f!="object"&&(f={});var e=m(!0,{},f);i||(e=Object.keys(e).reduce(function(u,c){return e[c]!=null&&(u[c]=e[c]),u},{}));for(var n in d)d[n]!==void 0&&f[n]===void 0&&(e[n]=d[n]);return Object.keys(e).length>0?e:void 0},diff:function(d,f){typeof d!="object"&&(d={}),typeof f!="object"&&(f={});var i=Object.keys(d).concat(Object.keys(f)).reduce(function(e,n){return w(d[n],f[n])||(e[n]=f[n]===void 0?null:f[n]),e},{});return Object.keys(i).length>0?i:void 0},transform:function(d,f,i){if(typeof d!="object")return f;if(typeof f=="object"){if(!i)return f;var e=Object.keys(f).reduce(function(n,u){return d[u]===void 0&&(n[u]=f[u]),n},{});return Object.keys(e).length>0?e:void 0}}},iterator:function(d){return new g(d)},length:function(d){return typeof d.delete=="number"?d.delete:typeof d.retain=="number"?d.retain:typeof d.insert=="string"?d.insert.length:1}};function g(d){this.ops=d,this.index=0,this.offset=0}g.prototype.hasNext=function(){return this.peekLength()<1/0},g.prototype.next=function(d){d||(d=1/0);var f=this.ops[this.index];if(f){var i=this.offset,e=y.length(f);if(d>=e-i?(d=e-i,this.index+=1,this.offset=0):this.offset+=d,typeof f.delete=="number")return{delete:d};var n={};return f.attributes&&(n.attributes=f.attributes),typeof f.retain=="number"?n.retain=d:typeof f.insert=="string"?n.insert=f.insert.substr(i,d):n.insert=f.insert,n}else return{retain:1/0}},g.prototype.peek=function(){return this.ops[this.index]},g.prototype.peekLength=function(){return this.ops[this.index]?y.length(this.ops[this.index])-this.offset:1/0},g.prototype.peekType=function(){return this.ops[this.index]?typeof this.ops[this.index].delete=="number"?"delete":typeof this.ops[this.index].retain=="number"?"retain":"insert":"retain"},g.prototype.rest=function(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);var d=this.offset,f=this.index,i=this.next(),e=this.ops.slice(this.index);return this.offset=d,this.index=f,[i].concat(e)}else return[]},h.exports=y},function(h,t){var r=function(){function w(c,o){return o!=null&&c instanceof o}var m;try{m=Map}catch{m=function(){}}var y;try{y=Set}catch{y=function(){}}var g;try{g=Promise}catch{g=function(){}}function d(c,o,a,l,b){typeof o=="object"&&(a=o.depth,l=o.prototype,b=o.includeNonEnumerable,o=o.circular);var s=[],v=[],E=typeof Buffer<"u";typeof o>"u"&&(o=!0),typeof a>"u"&&(a=1/0);function _(z,T){if(z===null)return null;if(T===0)return z;var A,S;if(typeof z!="object")return z;if(w(z,m))A=new m;else if(w(z,y))A=new y;else if(w(z,g))A=new g(function(M,I){z.then(function(O){M(_(O,T-1))},function(O){I(_(O,T-1))})});else if(d.__isArray(z))A=[];else if(d.__isRegExp(z))A=new RegExp(z.source,u(z)),z.lastIndex&&(A.lastIndex=z.lastIndex);else if(d.__isDate(z))A=new Date(z.getTime());else{if(E&&Buffer.isBuffer(z))return Buffer.allocUnsafe?A=Buffer.allocUnsafe(z.length):A=new Buffer(z.length),z.copy(A),A;w(z,Error)?A=Object.create(z):typeof l>"u"?(S=Object.getPrototypeOf(z),A=Object.create(S)):(A=Object.create(l),S=l)}if(o){var D=s.indexOf(z);if(D!=-1)return v[D];s.push(z),v.push(A)}w(z,m)&&z.forEach(function(M,I){var O=_(I,T-1),W=_(M,T-1);A.set(O,W)}),w(z,y)&&z.forEach(function(M){var I=_(M,T-1);A.add(I)});for(var N in z){var P;S&&(P=Object.getOwnPropertyDescriptor(S,N)),!(P&&P.set==null)&&(A[N]=_(z[N],T-1))}if(Object.getOwnPropertySymbols)for(var B=Object.getOwnPropertySymbols(z),N=0;N<B.length;N++){var H=B[N],R=Object.getOwnPropertyDescriptor(z,H);R&&!R.enumerable&&!b||(A[H]=_(z[H],T-1),R.enumerable||Object.defineProperty(A,H,{enumerable:!1}))}if(b)for(var Y=Object.getOwnPropertyNames(z),N=0;N<Y.length;N++){var C=Y[N],R=Object.getOwnPropertyDescriptor(z,C);R&&R.enumerable||(A[C]=_(z[C],T-1),Object.defineProperty(A,C,{enumerable:!1}))}return A}return _(c,a)}d.clonePrototype=function(o){if(o===null)return null;var a=function(){};return a.prototype=o,new a};function f(c){return Object.prototype.toString.call(c)}d.__objToStr=f;function i(c){return typeof c=="object"&&f(c)==="[object Date]"}d.__isDate=i;function e(c){return typeof c=="object"&&f(c)==="[object Array]"}d.__isArray=e;function n(c){return typeof c=="object"&&f(c)==="[object RegExp]"}d.__isRegExp=n;function u(c){var o="";return c.global&&(o+="g"),c.ignoreCase&&(o+="i"),c.multiline&&(o+="m"),o}return d.__getRegExpFlags=u,d}();typeof h=="object"&&h.exports&&(h.exports=r)},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function A(S,D){var N=[],P=!0,B=!1,H=void 0;try{for(var R=S[Symbol.iterator](),Y;!(P=(Y=R.next()).done)&&(N.push(Y.value),!(D&&N.length===D));P=!0);}catch(C){B=!0,H=C}finally{try{!P&&R.return&&R.return()}finally{if(B)throw H}}return N}return function(S,D){if(Array.isArray(S))return S;if(Symbol.iterator in Object(S))return A(S,D);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function A(S,D){for(var N=0;N<D.length;N++){var P=D[N];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(S,P.key,P)}}return function(S,D,N){return D&&A(S.prototype,D),N&&A(S,N),S}}(),y=function A(S,D,N){S===null&&(S=Function.prototype);var P=Object.getOwnPropertyDescriptor(S,D);if(P===void 0){var B=Object.getPrototypeOf(S);return B===null?void 0:A(B,D,N)}else{if("value"in P)return P.value;var H=P.get;return H===void 0?void 0:H.call(N)}},g=r(0),d=s(g),f=r(8),i=s(f),e=r(4),n=s(e),u=r(16),c=s(u),o=r(13),a=s(o),l=r(25),b=s(l);function s(A){return A&&A.__esModule?A:{default:A}}function v(A,S){if(!(A instanceof S))throw new TypeError("Cannot call a class as a function")}function E(A,S){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:A}function _(A,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);A.prototype=Object.create(S&&S.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(A,S):A.__proto__=S)}function z(A){return A instanceof n.default||A instanceof e.BlockEmbed}var T=function(A){_(S,A);function S(D,N){v(this,S);var P=E(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,D));return P.emitter=N.emitter,Array.isArray(N.whitelist)&&(P.whitelist=N.whitelist.reduce(function(B,H){return B[H]=!0,B},{})),P.domNode.addEventListener("DOMNodeInserted",function(){}),P.optimize(),P.enable(),P}return m(S,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(N,P){var B=this.line(N),H=w(B,2),R=H[0],Y=H[1],C=this.line(N+P),M=w(C,1),I=M[0];if(y(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"deleteAt",this).call(this,N,P),I!=null&&R!==I&&Y>0){if(R instanceof e.BlockEmbed||I instanceof e.BlockEmbed){this.optimize();return}if(R instanceof a.default){var O=R.newlineIndex(R.length(),!0);if(O>-1&&(R=R.split(O+1),R===I)){this.optimize();return}}else if(I instanceof a.default){var W=I.newlineIndex(0);W>-1&&I.split(W+1)}var K=I.children.head instanceof c.default?null:I.children.head;R.moveChildren(I,K),R.remove()}this.optimize()}},{key:"enable",value:function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.domNode.setAttribute("contenteditable",N)}},{key:"formatAt",value:function(N,P,B,H){this.whitelist!=null&&!this.whitelist[B]||(y(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"formatAt",this).call(this,N,P,B,H),this.optimize())}},{key:"insertAt",value:function(N,P,B){if(!(B!=null&&this.whitelist!=null&&!this.whitelist[P])){if(N>=this.length())if(B==null||d.default.query(P,d.default.Scope.BLOCK)==null){var H=d.default.create(this.statics.defaultChild);this.appendChild(H),B==null&&P.endsWith(`
`)&&(P=P.slice(0,-1)),H.insertAt(0,P,B)}else{var R=d.default.create(P,B);this.appendChild(R)}else y(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"insertAt",this).call(this,N,P,B);this.optimize()}}},{key:"insertBefore",value:function(N,P){if(N.statics.scope===d.default.Scope.INLINE_BLOT){var B=d.default.create(this.statics.defaultChild);B.appendChild(N),N=B}y(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"insertBefore",this).call(this,N,P)}},{key:"leaf",value:function(N){return this.path(N).pop()||[null,-1]}},{key:"line",value:function(N){return N===this.length()?this.line(N-1):this.descendant(z,N)}},{key:"lines",value:function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,B=function H(R,Y,C){var M=[],I=C;return R.children.forEachAt(Y,C,function(O,W,K){z(O)?M.push(O):O instanceof d.default.Container&&(M=M.concat(H(O,W,I))),I-=K}),M};return B(this,N,P)}},{key:"optimize",value:function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch!==!0&&(y(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"optimize",this).call(this,N,P),N.length>0&&this.emitter.emit(i.default.events.SCROLL_OPTIMIZE,N,P))}},{key:"path",value:function(N){return y(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"path",this).call(this,N).slice(1)}},{key:"update",value:function(N){if(this.batch!==!0){var P=i.default.sources.USER;typeof N=="string"&&(P=N),Array.isArray(N)||(N=this.observer.takeRecords()),N.length>0&&this.emitter.emit(i.default.events.SCROLL_BEFORE_UPDATE,P,N),y(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"update",this).call(this,N.concat([])),N.length>0&&this.emitter.emit(i.default.events.SCROLL_UPDATE,P,N)}}}]),S}(d.default.Scroll);T.blotName="scroll",T.className="ql-editor",T.tagName="DIV",T.defaultChild="block",T.allowedChildren=[n.default,e.BlockEmbed,b.default],t.default=T},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.SHORTKEY=t.default=void 0;var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},m=function(){function x(j,q){var F=[],U=!0,ne=!1,te=void 0;try{for(var re=j[Symbol.iterator](),ue;!(U=(ue=re.next()).done)&&(F.push(ue.value),!(q&&F.length===q));U=!0);}catch(de){ne=!0,te=de}finally{try{!U&&re.return&&re.return()}finally{if(ne)throw te}}return F}return function(j,q){if(Array.isArray(j))return j;if(Symbol.iterator in Object(j))return x(j,q);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(){function x(j,q){for(var F=0;F<q.length;F++){var U=q[F];U.enumerable=U.enumerable||!1,U.configurable=!0,"value"in U&&(U.writable=!0),Object.defineProperty(j,U.key,U)}}return function(j,q,F){return q&&x(j.prototype,q),F&&x(j,F),j}}(),g=r(21),d=A(g),f=r(11),i=A(f),e=r(3),n=A(e),u=r(2),c=A(u),o=r(20),a=A(o),l=r(0),b=A(l),s=r(5),v=A(s),E=r(10),_=A(E),z=r(9),T=A(z);function A(x){return x&&x.__esModule?x:{default:x}}function S(x,j,q){return j in x?Object.defineProperty(x,j,{value:q,enumerable:!0,configurable:!0,writable:!0}):x[j]=q,x}function D(x,j){if(!(x instanceof j))throw new TypeError("Cannot call a class as a function")}function N(x,j){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return j&&(typeof j=="object"||typeof j=="function")?j:x}function P(x,j){if(typeof j!="function"&&j!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof j);x.prototype=Object.create(j&&j.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),j&&(Object.setPrototypeOf?Object.setPrototypeOf(x,j):x.__proto__=j)}var B=(0,_.default)("quill:keyboard"),H=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",R=function(x){P(j,x),y(j,null,[{key:"match",value:function(F,U){return U=L(U),["altKey","ctrlKey","metaKey","shiftKey"].some(function(ne){return!!U[ne]!==F[ne]&&U[ne]!==null})?!1:U.key===(F.which||F.keyCode)}}]);function j(q,F){D(this,j);var U=N(this,(j.__proto__||Object.getPrototypeOf(j)).call(this,q,F));return U.bindings={},Object.keys(U.options.bindings).forEach(function(ne){ne==="list autofill"&&q.scroll.whitelist!=null&&!q.scroll.whitelist.list||U.options.bindings[ne]&&U.addBinding(U.options.bindings[ne])}),U.addBinding({key:j.keys.ENTER,shiftKey:null},O),U.addBinding({key:j.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(U.addBinding({key:j.keys.BACKSPACE},{collapsed:!0},C),U.addBinding({key:j.keys.DELETE},{collapsed:!0},M)):(U.addBinding({key:j.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},C),U.addBinding({key:j.keys.DELETE},{collapsed:!0,suffix:/^.?$/},M)),U.addBinding({key:j.keys.BACKSPACE},{collapsed:!1},I),U.addBinding({key:j.keys.DELETE},{collapsed:!1},I),U.addBinding({key:j.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},C),U.listen(),U}return y(j,[{key:"addBinding",value:function(F){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ne=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},te=L(F);if(te==null||te.key==null)return B.warn("Attempted to add invalid keyboard binding",te);typeof U=="function"&&(U={handler:U}),typeof ne=="function"&&(ne={handler:ne}),te=(0,n.default)(te,U,ne),this.bindings[te.key]=this.bindings[te.key]||[],this.bindings[te.key].push(te)}},{key:"listen",value:function(){var F=this;this.quill.root.addEventListener("keydown",function(U){if(!U.defaultPrevented){var ne=U.which||U.keyCode,te=(F.bindings[ne]||[]).filter(function(ge){return j.match(U,ge)});if(te.length!==0){var re=F.quill.getSelection();if(!(re==null||!F.quill.hasFocus())){var ue=F.quill.getLine(re.index),de=m(ue,2),ke=de[0],be=de[1],G=F.quill.getLeaf(re.index),V=m(G,2),Q=V[0],ee=V[1],X=re.length===0?[Q,ee]:F.quill.getLeaf(re.index+re.length),ie=m(X,2),se=ie[0],oe=ie[1],Ae=Q instanceof b.default.Text?Q.value().slice(0,ee):"",Ce=se instanceof b.default.Text?se.value().slice(oe):"",me={collapsed:re.length===0,empty:re.length===0&&ke.length()<=1,format:F.quill.getFormat(re),offset:be,prefix:Ae,suffix:Ce},mt=te.some(function(ge){if(ge.collapsed!=null&&ge.collapsed!==me.collapsed||ge.empty!=null&&ge.empty!==me.empty||ge.offset!=null&&ge.offset!==me.offset)return!1;if(Array.isArray(ge.format)){if(ge.format.every(function(He){return me.format[He]==null}))return!1}else if(w(ge.format)==="object"&&!Object.keys(ge.format).every(function(He){return ge.format[He]===!0?me.format[He]!=null:ge.format[He]===!1?me.format[He]==null:(0,i.default)(ge.format[He],me.format[He])}))return!1;return ge.prefix!=null&&!ge.prefix.test(me.prefix)||ge.suffix!=null&&!ge.suffix.test(me.suffix)?!1:ge.handler.call(F,re,me)!==!0});mt&&U.preventDefault()}}}})}}]),j}(T.default);R.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},R.DEFAULTS={bindings:{bold:K("bold"),italic:K("italic"),underline:K("underline"),indent:{key:R.keys.TAB,format:["blockquote","indent","list"],handler:function(j,q){if(q.collapsed&&q.offset!==0)return!0;this.quill.format("indent","+1",v.default.sources.USER)}},outdent:{key:R.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(j,q){if(q.collapsed&&q.offset!==0)return!0;this.quill.format("indent","-1",v.default.sources.USER)}},"outdent backspace":{key:R.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(j,q){q.format.indent!=null?this.quill.format("indent","-1",v.default.sources.USER):q.format.list!=null&&this.quill.format("list",!1,v.default.sources.USER)}},"indent code-block":W(!0),"outdent code-block":W(!1),"remove tab":{key:R.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(j){this.quill.deleteText(j.index-1,1,v.default.sources.USER)}},tab:{key:R.keys.TAB,handler:function(j){this.quill.history.cutoff();var q=new c.default().retain(j.index).delete(j.length).insert("	");this.quill.updateContents(q,v.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(j.index+1,v.default.sources.SILENT)}},"list empty enter":{key:R.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(j,q){this.quill.format("list",!1,v.default.sources.USER),q.format.indent&&this.quill.format("indent",!1,v.default.sources.USER)}},"checklist enter":{key:R.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(j){var q=this.quill.getLine(j.index),F=m(q,2),U=F[0],ne=F[1],te=(0,n.default)({},U.formats(),{list:"checked"}),re=new c.default().retain(j.index).insert(`
`,te).retain(U.length()-ne-1).retain(1,{list:"unchecked"});this.quill.updateContents(re,v.default.sources.USER),this.quill.setSelection(j.index+1,v.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:R.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(j,q){var F=this.quill.getLine(j.index),U=m(F,2),ne=U[0],te=U[1],re=new c.default().retain(j.index).insert(`
`,q.format).retain(ne.length()-te-1).retain(1,{header:null});this.quill.updateContents(re,v.default.sources.USER),this.quill.setSelection(j.index+1,v.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(j,q){var F=q.prefix.length,U=this.quill.getLine(j.index),ne=m(U,2),te=ne[0],re=ne[1];if(re>F)return!0;var ue=void 0;switch(q.prefix.trim()){case"[]":case"[ ]":ue="unchecked";break;case"[x]":ue="checked";break;case"-":case"*":ue="bullet";break;default:ue="ordered"}this.quill.insertText(j.index," ",v.default.sources.USER),this.quill.history.cutoff();var de=new c.default().retain(j.index-re).delete(F+1).retain(te.length()-2-re).retain(1,{list:ue});this.quill.updateContents(de,v.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(j.index-F,v.default.sources.SILENT)}},"code exit":{key:R.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(j){var q=this.quill.getLine(j.index),F=m(q,2),U=F[0],ne=F[1],te=new c.default().retain(j.index+U.length()-ne-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(te,v.default.sources.USER)}},"embed left":Y(R.keys.LEFT,!1),"embed left shift":Y(R.keys.LEFT,!0),"embed right":Y(R.keys.RIGHT,!1),"embed right shift":Y(R.keys.RIGHT,!0)}};function Y(x,j){var q,F=x===R.keys.LEFT?"prefix":"suffix";return q={key:x,shiftKey:j,altKey:null},S(q,F,/^$/),S(q,"handler",function(ne){var te=ne.index;x===R.keys.RIGHT&&(te+=ne.length+1);var re=this.quill.getLeaf(te),ue=m(re,1),de=ue[0];return de instanceof b.default.Embed?(x===R.keys.LEFT?j?this.quill.setSelection(ne.index-1,ne.length+1,v.default.sources.USER):this.quill.setSelection(ne.index-1,v.default.sources.USER):j?this.quill.setSelection(ne.index,ne.length+1,v.default.sources.USER):this.quill.setSelection(ne.index+ne.length+1,v.default.sources.USER),!1):!0}),q}function C(x,j){if(!(x.index===0||this.quill.getLength()<=1)){var q=this.quill.getLine(x.index),F=m(q,1),U=F[0],ne={};if(j.offset===0){var te=this.quill.getLine(x.index-1),re=m(te,1),ue=re[0];if(ue!=null&&ue.length()>1){var de=U.formats(),ke=this.quill.getFormat(x.index-1,1);ne=a.default.attributes.diff(de,ke)||{}}}var be=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(j.prefix)?2:1;this.quill.deleteText(x.index-be,be,v.default.sources.USER),Object.keys(ne).length>0&&this.quill.formatLine(x.index-be,be,ne,v.default.sources.USER),this.quill.focus()}}function M(x,j){var q=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(j.suffix)?2:1;if(!(x.index>=this.quill.getLength()-q)){var F={},U=0,ne=this.quill.getLine(x.index),te=m(ne,1),re=te[0];if(j.offset>=re.length()-1){var ue=this.quill.getLine(x.index+1),de=m(ue,1),ke=de[0];if(ke){var be=re.formats(),G=this.quill.getFormat(x.index,1);F=a.default.attributes.diff(be,G)||{},U=ke.length()}}this.quill.deleteText(x.index,q,v.default.sources.USER),Object.keys(F).length>0&&this.quill.formatLine(x.index+U-1,q,F,v.default.sources.USER)}}function I(x){var j=this.quill.getLines(x),q={};if(j.length>1){var F=j[0].formats(),U=j[j.length-1].formats();q=a.default.attributes.diff(U,F)||{}}this.quill.deleteText(x,v.default.sources.USER),Object.keys(q).length>0&&this.quill.formatLine(x.index,1,q,v.default.sources.USER),this.quill.setSelection(x.index,v.default.sources.SILENT),this.quill.focus()}function O(x,j){var q=this;x.length>0&&this.quill.scroll.deleteAt(x.index,x.length);var F=Object.keys(j.format).reduce(function(U,ne){return b.default.query(ne,b.default.Scope.BLOCK)&&!Array.isArray(j.format[ne])&&(U[ne]=j.format[ne]),U},{});this.quill.insertText(x.index,`
`,F,v.default.sources.USER),this.quill.setSelection(x.index+1,v.default.sources.SILENT),this.quill.focus(),Object.keys(j.format).forEach(function(U){F[U]==null&&(Array.isArray(j.format[U])||U!=="link"&&q.quill.format(U,j.format[U],v.default.sources.USER))})}function W(x){return{key:R.keys.TAB,shiftKey:!x,format:{"code-block":!0},handler:function(q){var F=b.default.query("code-block"),U=q.index,ne=q.length,te=this.quill.scroll.descendant(F,U),re=m(te,2),ue=re[0],de=re[1];if(ue!=null){var ke=this.quill.getIndex(ue),be=ue.newlineIndex(de,!0)+1,G=ue.newlineIndex(ke+de+ne),V=ue.domNode.textContent.slice(be,G).split(`
`);de=0,V.forEach(function(Q,ee){x?(ue.insertAt(be+de,F.TAB),de+=F.TAB.length,ee===0?U+=F.TAB.length:ne+=F.TAB.length):Q.startsWith(F.TAB)&&(ue.deleteAt(be+de,F.TAB.length),de-=F.TAB.length,ee===0?U-=F.TAB.length:ne-=F.TAB.length),de+=Q.length+1}),this.quill.update(v.default.sources.USER),this.quill.setSelection(U,ne,v.default.sources.SILENT)}}}}function K(x){return{key:x[0].toUpperCase(),shortKey:!0,handler:function(q,F){this.quill.format(x,!F.format[x],v.default.sources.USER)}}}function L(x){if(typeof x=="string"||typeof x=="number")return L({key:x});if((typeof x>"u"?"undefined":w(x))==="object"&&(x=(0,d.default)(x,!1)),typeof x.key=="string")if(R.keys[x.key.toUpperCase()]!=null)x.key=R.keys[x.key.toUpperCase()];else if(x.key.length===1)x.key=x.key.toUpperCase().charCodeAt(0);else return null;return x.shortKey&&(x[H]=x.shortKey,delete x.shortKey),x}t.default=R,t.SHORTKEY=H},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function a(l,b){var s=[],v=!0,E=!1,_=void 0;try{for(var z=l[Symbol.iterator](),T;!(v=(T=z.next()).done)&&(s.push(T.value),!(b&&s.length===b));v=!0);}catch(A){E=!0,_=A}finally{try{!v&&z.return&&z.return()}finally{if(E)throw _}}return s}return function(l,b){if(Array.isArray(l))return l;if(Symbol.iterator in Object(l))return a(l,b);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function a(l,b,s){l===null&&(l=Function.prototype);var v=Object.getOwnPropertyDescriptor(l,b);if(v===void 0){var E=Object.getPrototypeOf(l);return E===null?void 0:a(E,b,s)}else{if("value"in v)return v.value;var _=v.get;return _===void 0?void 0:_.call(s)}},y=function(){function a(l,b){for(var s=0;s<b.length;s++){var v=b[s];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(l,v.key,v)}}return function(l,b,s){return b&&a(l.prototype,b),s&&a(l,s),l}}(),g=r(0),d=e(g),f=r(7),i=e(f);function e(a){return a&&a.__esModule?a:{default:a}}function n(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function u(a,l){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l&&(typeof l=="object"||typeof l=="function")?l:a}function c(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}var o=function(a){c(l,a),y(l,null,[{key:"value",value:function(){}}]);function l(b,s){n(this,l);var v=u(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,b));return v.selection=s,v.textNode=document.createTextNode(l.CONTENTS),v.domNode.appendChild(v.textNode),v._length=0,v}return y(l,[{key:"detach",value:function(){this.parent!=null&&this.parent.removeChild(this)}},{key:"format",value:function(s,v){if(this._length!==0)return m(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"format",this).call(this,s,v);for(var E=this,_=0;E!=null&&E.statics.scope!==d.default.Scope.BLOCK_BLOT;)_+=E.offset(E.parent),E=E.parent;E!=null&&(this._length=l.CONTENTS.length,E.optimize(),E.formatAt(_,l.CONTENTS.length,s,v),this._length=0)}},{key:"index",value:function(s,v){return s===this.textNode?0:m(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"index",this).call(this,s,v)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){m(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!(this.selection.composing||this.parent==null)){var s=this.textNode,v=this.selection.getNativeRange(),E=void 0,_=void 0,z=void 0;if(v!=null&&v.start.node===s&&v.end.node===s){var T=[s,v.start.offset,v.end.offset];E=T[0],_=T[1],z=T[2]}for(;this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==l.CONTENTS){var A=this.textNode.data.split(l.CONTENTS).join("");this.next instanceof i.default?(E=this.next.domNode,this.next.insertAt(0,A),this.textNode.data=l.CONTENTS):(this.textNode.data=A,this.parent.insertBefore(d.default.create(this.textNode),this),this.textNode=document.createTextNode(l.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),_!=null){var S=[_,z].map(function(N){return Math.max(0,Math.min(E.data.length,N-1))}),D=w(S,2);return _=D[0],z=D[1],{startNode:E,startOffset:_,endNode:E,endOffset:z}}}}},{key:"update",value:function(s,v){var E=this;if(s.some(function(z){return z.type==="characterData"&&z.target===E.textNode})){var _=this.restore();_&&(v.range=_)}}},{key:"value",value:function(){return""}}]),l}(d.default.Embed);o.blotName="cursor",o.className="ql-cursor",o.tagName="span",o.CONTENTS="\uFEFF",t.default=o},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(0),m=d(w),y=r(4),g=d(y);function d(u){return u&&u.__esModule?u:{default:u}}function f(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")}function i(u,c){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:u}function e(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);u.prototype=Object.create(c&&c.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(u,c):u.__proto__=c)}var n=function(u){e(c,u);function c(){return f(this,c),i(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return c}(m.default.Container);n.allowedChildren=[g.default,y.BlockEmbed,n],t.default=n},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.ColorStyle=t.ColorClass=t.ColorAttributor=void 0;var w=function(){function o(a,l){for(var b=0;b<l.length;b++){var s=l[b];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,s.key,s)}}return function(a,l,b){return l&&o(a.prototype,l),b&&o(a,b),a}}(),m=function o(a,l,b){a===null&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,l);if(s===void 0){var v=Object.getPrototypeOf(a);return v===null?void 0:o(v,l,b)}else{if("value"in s)return s.value;var E=s.get;return E===void 0?void 0:E.call(b)}},y=r(0),g=d(y);function d(o){return o&&o.__esModule?o:{default:o}}function f(o,a){if(!(o instanceof a))throw new TypeError("Cannot call a class as a function")}function i(o,a){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a&&(typeof a=="object"||typeof a=="function")?a:o}function e(o,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);o.prototype=Object.create(a&&a.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(o,a):o.__proto__=a)}var n=function(o){e(a,o);function a(){return f(this,a),i(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return w(a,[{key:"value",value:function(b){var s=m(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"value",this).call(this,b);return s.startsWith("rgb(")?(s=s.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+s.split(",").map(function(v){return("00"+parseInt(v).toString(16)).slice(-2)}).join("")):s}}]),a}(g.default.Attributor.Style),u=new g.default.Attributor.Class("color","ql-color",{scope:g.default.Scope.INLINE}),c=new n("color","color",{scope:g.default.Scope.INLINE});t.ColorAttributor=n,t.ColorClass=u,t.ColorStyle=c},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.sanitize=t.default=void 0;var w=function(){function c(o,a){for(var l=0;l<a.length;l++){var b=a[l];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(o,b.key,b)}}return function(o,a,l){return a&&c(o.prototype,a),l&&c(o,l),o}}(),m=function c(o,a,l){o===null&&(o=Function.prototype);var b=Object.getOwnPropertyDescriptor(o,a);if(b===void 0){var s=Object.getPrototypeOf(o);return s===null?void 0:c(s,a,l)}else{if("value"in b)return b.value;var v=b.get;return v===void 0?void 0:v.call(l)}},y=r(6),g=d(y);function d(c){return c&&c.__esModule?c:{default:c}}function f(c,o){if(!(c instanceof o))throw new TypeError("Cannot call a class as a function")}function i(c,o){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o&&(typeof o=="object"||typeof o=="function")?o:c}function e(c,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);c.prototype=Object.create(o&&o.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(c,o):c.__proto__=o)}var n=function(c){e(o,c);function o(){return f(this,o),i(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return w(o,[{key:"format",value:function(l,b){if(l!==this.statics.blotName||!b)return m(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"format",this).call(this,l,b);b=this.constructor.sanitize(b),this.domNode.setAttribute("href",b)}}],[{key:"create",value:function(l){var b=m(o.__proto__||Object.getPrototypeOf(o),"create",this).call(this,l);return l=this.sanitize(l),b.setAttribute("href",l),b.setAttribute("rel","noopener noreferrer"),b.setAttribute("target","_blank"),b}},{key:"formats",value:function(l){return l.getAttribute("href")}},{key:"sanitize",value:function(l){return u(l,this.PROTOCOL_WHITELIST)?l:this.SANITIZED_URL}}]),o}(g.default);n.blotName="link",n.tagName="A",n.SANITIZED_URL="about:blank",n.PROTOCOL_WHITELIST=["http","https","mailto","tel"];function u(c,o){var a=document.createElement("a");a.href=c;var l=a.href.slice(0,a.href.indexOf(":"));return o.indexOf(l)>-1}t.default=n,t.sanitize=u},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},m=function(){function o(a,l){for(var b=0;b<l.length;b++){var s=l[b];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,s.key,s)}}return function(a,l,b){return l&&o(a.prototype,l),b&&o(a,b),a}}(),y=r(23),g=i(y),d=r(107),f=i(d);function i(o){return o&&o.__esModule?o:{default:o}}function e(o,a){if(!(o instanceof a))throw new TypeError("Cannot call a class as a function")}var n=0;function u(o,a){o.setAttribute(a,o.getAttribute(a)!=="true")}var c=function(){function o(a){var l=this;e(this,o),this.select=a,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){l.togglePicker()}),this.label.addEventListener("keydown",function(b){switch(b.keyCode){case g.default.keys.ENTER:l.togglePicker();break;case g.default.keys.ESCAPE:l.escape(),b.preventDefault();break}}),this.select.addEventListener("change",this.update.bind(this))}return m(o,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),u(this.label,"aria-expanded"),u(this.options,"aria-hidden")}},{key:"buildItem",value:function(l){var b=this,s=document.createElement("span");return s.tabIndex="0",s.setAttribute("role","button"),s.classList.add("ql-picker-item"),l.hasAttribute("value")&&s.setAttribute("data-value",l.getAttribute("value")),l.textContent&&s.setAttribute("data-label",l.textContent),s.addEventListener("click",function(){b.selectItem(s,!0)}),s.addEventListener("keydown",function(v){switch(v.keyCode){case g.default.keys.ENTER:b.selectItem(s,!0),v.preventDefault();break;case g.default.keys.ESCAPE:b.escape(),v.preventDefault();break}}),s}},{key:"buildLabel",value:function(){var l=document.createElement("span");return l.classList.add("ql-picker-label"),l.innerHTML=f.default,l.tabIndex="0",l.setAttribute("role","button"),l.setAttribute("aria-expanded","false"),this.container.appendChild(l),l}},{key:"buildOptions",value:function(){var l=this,b=document.createElement("span");b.classList.add("ql-picker-options"),b.setAttribute("aria-hidden","true"),b.tabIndex="-1",b.id="ql-picker-options-"+n,n+=1,this.label.setAttribute("aria-controls",b.id),this.options=b,[].slice.call(this.select.options).forEach(function(s){var v=l.buildItem(s);b.appendChild(v),s.selected===!0&&l.selectItem(v)}),this.container.appendChild(b)}},{key:"buildPicker",value:function(){var l=this;[].slice.call(this.select.attributes).forEach(function(b){l.container.setAttribute(b.name,b.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var l=this;this.close(),setTimeout(function(){return l.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(l){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=this.container.querySelector(".ql-selected");if(l!==s&&(s!=null&&s.classList.remove("ql-selected"),l!=null&&(l.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(l.parentNode.children,l),l.hasAttribute("data-value")?this.label.setAttribute("data-value",l.getAttribute("data-value")):this.label.removeAttribute("data-value"),l.hasAttribute("data-label")?this.label.setAttribute("data-label",l.getAttribute("data-label")):this.label.removeAttribute("data-label"),b))){if(typeof Event=="function")this.select.dispatchEvent(new Event("change"));else if((typeof Event>"u"?"undefined":w(Event))==="object"){var v=document.createEvent("Event");v.initEvent("change",!0,!0),this.select.dispatchEvent(v)}this.close()}}},{key:"update",value:function(){var l=void 0;if(this.select.selectedIndex>-1){var b=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];l=this.select.options[this.select.selectedIndex],this.selectItem(b)}else this.selectItem(null);var s=l!=null&&l!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",s)}}]),o}();t.default=c},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(0),m=B(w),y=r(5),g=B(y),d=r(4),f=B(d),i=r(16),e=B(i),n=r(25),u=B(n),c=r(24),o=B(c),a=r(35),l=B(a),b=r(6),s=B(b),v=r(22),E=B(v),_=r(7),z=B(_),T=r(55),A=B(T),S=r(42),D=B(S),N=r(23),P=B(N);function B(H){return H&&H.__esModule?H:{default:H}}g.default.register({"blots/block":f.default,"blots/block/embed":d.BlockEmbed,"blots/break":e.default,"blots/container":u.default,"blots/cursor":o.default,"blots/embed":l.default,"blots/inline":s.default,"blots/scroll":E.default,"blots/text":z.default,"modules/clipboard":A.default,"modules/history":D.default,"modules/keyboard":P.default}),m.default.register(f.default,e.default,o.default,s.default,E.default,z.default),t.default=g.default},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(1),m=function(){function y(g){this.domNode=g,this.domNode[w.DATA_KEY]={blot:this}}return Object.defineProperty(y.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),y.create=function(g){if(this.tagName==null)throw new w.ParchmentError("Blot definition missing tagName");var d;return Array.isArray(this.tagName)?(typeof g=="string"&&(g=g.toUpperCase(),parseInt(g).toString()===g&&(g=parseInt(g))),typeof g=="number"?d=document.createElement(this.tagName[g-1]):this.tagName.indexOf(g)>-1?d=document.createElement(g):d=document.createElement(this.tagName[0])):d=document.createElement(this.tagName),this.className&&d.classList.add(this.className),d},y.prototype.attach=function(){this.parent!=null&&(this.scroll=this.parent.scroll)},y.prototype.clone=function(){var g=this.domNode.cloneNode(!1);return w.create(g)},y.prototype.detach=function(){this.parent!=null&&this.parent.removeChild(this),delete this.domNode[w.DATA_KEY]},y.prototype.deleteAt=function(g,d){var f=this.isolate(g,d);f.remove()},y.prototype.formatAt=function(g,d,f,i){var e=this.isolate(g,d);if(w.query(f,w.Scope.BLOT)!=null&&i)e.wrap(f,i);else if(w.query(f,w.Scope.ATTRIBUTE)!=null){var n=w.create(this.statics.scope);e.wrap(n),n.format(f,i)}},y.prototype.insertAt=function(g,d,f){var i=f==null?w.create("text",d):w.create(d,f),e=this.split(g);this.parent.insertBefore(i,e)},y.prototype.insertInto=function(g,d){d===void 0&&(d=null),this.parent!=null&&this.parent.children.remove(this);var f=null;g.children.insertBefore(this,d),d!=null&&(f=d.domNode),(this.domNode.parentNode!=g.domNode||this.domNode.nextSibling!=f)&&g.domNode.insertBefore(this.domNode,f),this.parent=g,this.attach()},y.prototype.isolate=function(g,d){var f=this.split(g);return f.split(d),f},y.prototype.length=function(){return 1},y.prototype.offset=function(g){return g===void 0&&(g=this.parent),this.parent==null||this==g?0:this.parent.children.offset(this)+this.parent.offset(g)},y.prototype.optimize=function(g){this.domNode[w.DATA_KEY]!=null&&delete this.domNode[w.DATA_KEY].mutations},y.prototype.remove=function(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},y.prototype.replace=function(g){g.parent!=null&&(g.parent.insertBefore(this,g.next),g.remove())},y.prototype.replaceWith=function(g,d){var f=typeof g=="string"?w.create(g,d):g;return f.replace(this),f},y.prototype.split=function(g,d){return g===0?this:this.next},y.prototype.update=function(g,d){},y.prototype.wrap=function(g,d){var f=typeof g=="string"?w.create(g,d):g;return this.parent!=null&&this.parent.insertBefore(f,this.next),f.appendChild(this),f},y.blotName="abstract",y}();t.default=m},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(12),m=r(32),y=r(33),g=r(1),d=function(){function f(i){this.attributes={},this.domNode=i,this.build()}return f.prototype.attribute=function(i,e){e?i.add(this.domNode,e)&&(i.value(this.domNode)!=null?this.attributes[i.attrName]=i:delete this.attributes[i.attrName]):(i.remove(this.domNode),delete this.attributes[i.attrName])},f.prototype.build=function(){var i=this;this.attributes={};var e=w.default.keys(this.domNode),n=m.default.keys(this.domNode),u=y.default.keys(this.domNode);e.concat(n).concat(u).forEach(function(c){var o=g.query(c,g.Scope.ATTRIBUTE);o instanceof w.default&&(i.attributes[o.attrName]=o)})},f.prototype.copy=function(i){var e=this;Object.keys(this.attributes).forEach(function(n){var u=e.attributes[n].value(e.domNode);i.format(n,u)})},f.prototype.move=function(i){var e=this;this.copy(i),Object.keys(this.attributes).forEach(function(n){e.attributes[n].remove(e.domNode)}),this.attributes={}},f.prototype.values=function(){var i=this;return Object.keys(this.attributes).reduce(function(e,n){return e[n]=i.attributes[n].value(i.domNode),e},{})},f}();t.default=d},function(h,t,r){var w=this&&this.__extends||function(){var d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,i){f.__proto__=i}||function(f,i){for(var e in i)i.hasOwnProperty(e)&&(f[e]=i[e])};return function(f,i){d(f,i);function e(){this.constructor=f}f.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=r(12);function y(d,f){var i=d.getAttribute("class")||"";return i.split(/\s+/).filter(function(e){return e.indexOf(f+"-")===0})}var g=function(d){w(f,d);function f(){return d!==null&&d.apply(this,arguments)||this}return f.keys=function(i){return(i.getAttribute("class")||"").split(/\s+/).map(function(e){return e.split("-").slice(0,-1).join("-")})},f.prototype.add=function(i,e){return this.canAdd(i,e)?(this.remove(i),i.classList.add(this.keyName+"-"+e),!0):!1},f.prototype.remove=function(i){var e=y(i,this.keyName);e.forEach(function(n){i.classList.remove(n)}),i.classList.length===0&&i.removeAttribute("class")},f.prototype.value=function(i){var e=y(i,this.keyName)[0]||"",n=e.slice(this.keyName.length+1);return this.canAdd(i,n)?n:""},f}(m.default);t.default=g},function(h,t,r){var w=this&&this.__extends||function(){var d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,i){f.__proto__=i}||function(f,i){for(var e in i)i.hasOwnProperty(e)&&(f[e]=i[e])};return function(f,i){d(f,i);function e(){this.constructor=f}f.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=r(12);function y(d){var f=d.split("-"),i=f.slice(1).map(function(e){return e[0].toUpperCase()+e.slice(1)}).join("");return f[0]+i}var g=function(d){w(f,d);function f(){return d!==null&&d.apply(this,arguments)||this}return f.keys=function(i){return(i.getAttribute("style")||"").split(";").map(function(e){var n=e.split(":");return n[0].trim()})},f.prototype.add=function(i,e){return this.canAdd(i,e)?(i.style[y(this.keyName)]=e,!0):!1},f.prototype.remove=function(i){i.style[y(this.keyName)]="",i.getAttribute("style")||i.removeAttribute("style")},f.prototype.value=function(i){var e=i.style[y(this.keyName)];return this.canAdd(i,e)?e:""},f}(m.default);t.default=g},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function g(d,f){for(var i=0;i<f.length;i++){var e=f[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(d,e.key,e)}}return function(d,f,i){return f&&g(d.prototype,f),i&&g(d,i),d}}();function m(g,d){if(!(g instanceof d))throw new TypeError("Cannot call a class as a function")}var y=function(){function g(d,f){m(this,g),this.quill=d,this.options=f,this.modules={}}return w(g,[{key:"init",value:function(){var f=this;Object.keys(this.options.modules).forEach(function(i){f.modules[i]==null&&f.addModule(i)})}},{key:"addModule",value:function(f){var i=this.quill.constructor.import("modules/"+f);return this.modules[f]=new i(this.quill,this.options.modules[f]||{}),this.modules[f]}}]),g}();y.DEFAULTS={modules:{}},y.themes={default:y},t.default=y},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function a(l,b){for(var s=0;s<b.length;s++){var v=b[s];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(l,v.key,v)}}return function(l,b,s){return b&&a(l.prototype,b),s&&a(l,s),l}}(),m=function a(l,b,s){l===null&&(l=Function.prototype);var v=Object.getOwnPropertyDescriptor(l,b);if(v===void 0){var E=Object.getPrototypeOf(l);return E===null?void 0:a(E,b,s)}else{if("value"in v)return v.value;var _=v.get;return _===void 0?void 0:_.call(s)}},y=r(0),g=i(y),d=r(7),f=i(d);function i(a){return a&&a.__esModule?a:{default:a}}function e(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function n(a,l){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l&&(typeof l=="object"||typeof l=="function")?l:a}function u(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}var c="\uFEFF",o=function(a){u(l,a);function l(b){e(this,l);var s=n(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,b));return s.contentNode=document.createElement("span"),s.contentNode.setAttribute("contenteditable",!1),[].slice.call(s.domNode.childNodes).forEach(function(v){s.contentNode.appendChild(v)}),s.leftGuard=document.createTextNode(c),s.rightGuard=document.createTextNode(c),s.domNode.appendChild(s.leftGuard),s.domNode.appendChild(s.contentNode),s.domNode.appendChild(s.rightGuard),s}return w(l,[{key:"index",value:function(s,v){return s===this.leftGuard?0:s===this.rightGuard?1:m(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"index",this).call(this,s,v)}},{key:"restore",value:function(s){var v=void 0,E=void 0,_=s.data.split(c).join("");if(s===this.leftGuard)if(this.prev instanceof f.default){var z=this.prev.length();this.prev.insertAt(z,_),v={startNode:this.prev.domNode,startOffset:z+_.length}}else E=document.createTextNode(_),this.parent.insertBefore(g.default.create(E),this),v={startNode:E,startOffset:_.length};else s===this.rightGuard&&(this.next instanceof f.default?(this.next.insertAt(0,_),v={startNode:this.next.domNode,startOffset:_.length}):(E=document.createTextNode(_),this.parent.insertBefore(g.default.create(E),this.next),v={startNode:E,startOffset:_.length}));return s.data=c,v}},{key:"update",value:function(s,v){var E=this;s.forEach(function(_){if(_.type==="characterData"&&(_.target===E.leftGuard||_.target===E.rightGuard)){var z=E.restore(_.target);z&&(v.range=z)}})}}]),l}(g.default.Embed);t.default=o},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.AlignStyle=t.AlignClass=t.AlignAttribute=void 0;var w=r(0),m=y(w);function y(e){return e&&e.__esModule?e:{default:e}}var g={scope:m.default.Scope.BLOCK,whitelist:["right","center","justify"]},d=new m.default.Attributor.Attribute("align","align",g),f=new m.default.Attributor.Class("align","ql-align",g),i=new m.default.Attributor.Style("align","text-align",g);t.AlignAttribute=d,t.AlignClass=f,t.AlignStyle=i},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.BackgroundStyle=t.BackgroundClass=void 0;var w=r(0),m=g(w),y=r(26);function g(i){return i&&i.__esModule?i:{default:i}}var d=new m.default.Attributor.Class("background","ql-bg",{scope:m.default.Scope.INLINE}),f=new y.ColorAttributor("background","background-color",{scope:m.default.Scope.INLINE});t.BackgroundClass=d,t.BackgroundStyle=f},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.DirectionStyle=t.DirectionClass=t.DirectionAttribute=void 0;var w=r(0),m=y(w);function y(e){return e&&e.__esModule?e:{default:e}}var g={scope:m.default.Scope.BLOCK,whitelist:["rtl"]},d=new m.default.Attributor.Attribute("direction","dir",g),f=new m.default.Attributor.Class("direction","ql-direction",g),i=new m.default.Attributor.Style("direction","direction",g);t.DirectionAttribute=d,t.DirectionClass=f,t.DirectionStyle=i},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.FontClass=t.FontStyle=void 0;var w=function(){function a(l,b){for(var s=0;s<b.length;s++){var v=b[s];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(l,v.key,v)}}return function(l,b,s){return b&&a(l.prototype,b),s&&a(l,s),l}}(),m=function a(l,b,s){l===null&&(l=Function.prototype);var v=Object.getOwnPropertyDescriptor(l,b);if(v===void 0){var E=Object.getPrototypeOf(l);return E===null?void 0:a(E,b,s)}else{if("value"in v)return v.value;var _=v.get;return _===void 0?void 0:_.call(s)}},y=r(0),g=d(y);function d(a){return a&&a.__esModule?a:{default:a}}function f(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function i(a,l){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l&&(typeof l=="object"||typeof l=="function")?l:a}function e(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}var n={scope:g.default.Scope.INLINE,whitelist:["serif","monospace"]},u=new g.default.Attributor.Class("font","ql-font",n),c=function(a){e(l,a);function l(){return f(this,l),i(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return w(l,[{key:"value",value:function(s){return m(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"value",this).call(this,s).replace(/["']/g,"")}}]),l}(g.default.Attributor.Style),o=new c("font","font-family",n);t.FontStyle=o,t.FontClass=u},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.SizeStyle=t.SizeClass=void 0;var w=r(0),m=y(w);function y(f){return f&&f.__esModule?f:{default:f}}var g=new m.default.Attributor.Class("size","ql-size",{scope:m.default.Scope.INLINE,whitelist:["small","large","huge"]}),d=new m.default.Attributor.Style("size","font-size",{scope:m.default.Scope.INLINE,whitelist:["10px","18px","32px"]});t.SizeClass=g,t.SizeStyle=d},function(h,t,r){h.exports={align:{"":r(76),center:r(77),right:r(78),justify:r(79)},background:r(80),blockquote:r(81),bold:r(82),clean:r(83),code:r(58),"code-block":r(58),color:r(84),direction:{"":r(85),rtl:r(86)},float:{center:r(87),full:r(88),left:r(89),right:r(90)},formula:r(91),header:{1:r(92),2:r(93)},italic:r(94),image:r(95),indent:{"+1":r(96),"-1":r(97)},link:r(98),list:{ordered:r(99),bullet:r(100),check:r(101)},script:{sub:r(102),super:r(103)},strike:r(104),underline:r(105),video:r(106)}},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.getLastChangeIndex=t.default=void 0;var w=function(){function b(s,v){for(var E=0;E<v.length;E++){var _=v[E];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(s,_.key,_)}}return function(s,v,E){return v&&b(s.prototype,v),E&&b(s,E),s}}(),m=r(0),y=e(m),g=r(5),d=e(g),f=r(9),i=e(f);function e(b){return b&&b.__esModule?b:{default:b}}function n(b,s){if(!(b instanceof s))throw new TypeError("Cannot call a class as a function")}function u(b,s){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s&&(typeof s=="object"||typeof s=="function")?s:b}function c(b,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);b.prototype=Object.create(s&&s.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(b,s):b.__proto__=s)}var o=function(b){c(s,b);function s(v,E){n(this,s);var _=u(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,v,E));return _.lastRecorded=0,_.ignoreChange=!1,_.clear(),_.quill.on(d.default.events.EDITOR_CHANGE,function(z,T,A,S){z!==d.default.events.TEXT_CHANGE||_.ignoreChange||(!_.options.userOnly||S===d.default.sources.USER?_.record(T,A):_.transform(T))}),_.quill.keyboard.addBinding({key:"Z",shortKey:!0},_.undo.bind(_)),_.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},_.redo.bind(_)),/Win/i.test(navigator.platform)&&_.quill.keyboard.addBinding({key:"Y",shortKey:!0},_.redo.bind(_)),_}return w(s,[{key:"change",value:function(E,_){if(this.stack[E].length!==0){var z=this.stack[E].pop();this.stack[_].push(z),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(z[E],d.default.sources.USER),this.ignoreChange=!1;var T=l(z[E]);this.quill.setSelection(T)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(E,_){if(E.ops.length!==0){this.stack.redo=[];var z=this.quill.getContents().diff(_),T=Date.now();if(this.lastRecorded+this.options.delay>T&&this.stack.undo.length>0){var A=this.stack.undo.pop();z=z.compose(A.undo),E=A.redo.compose(E)}else this.lastRecorded=T;this.stack.undo.push({redo:E,undo:z}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(E){this.stack.undo.forEach(function(_){_.undo=E.transform(_.undo,!0),_.redo=E.transform(_.redo,!0)}),this.stack.redo.forEach(function(_){_.undo=E.transform(_.undo,!0),_.redo=E.transform(_.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),s}(i.default);o.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1};function a(b){var s=b.ops[b.ops.length-1];return s==null?!1:s.insert!=null?typeof s.insert=="string"&&s.insert.endsWith(`
`):s.attributes!=null?Object.keys(s.attributes).some(function(v){return y.default.query(v,y.default.Scope.BLOCK)!=null}):!1}function l(b){var s=b.reduce(function(E,_){return E+=_.delete||0,E},0),v=b.length()-s;return a(b)&&(v-=1),v}t.default=o,t.getLastChangeIndex=l},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BaseTooltip=void 0;var w=function(){function O(W,K){for(var L=0;L<K.length;L++){var x=K[L];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(W,x.key,x)}}return function(W,K,L){return K&&O(W.prototype,K),L&&O(W,L),W}}(),m=function O(W,K,L){W===null&&(W=Function.prototype);var x=Object.getOwnPropertyDescriptor(W,K);if(x===void 0){var j=Object.getPrototypeOf(W);return j===null?void 0:O(j,K,L)}else{if("value"in x)return x.value;var q=x.get;return q===void 0?void 0:q.call(L)}},y=r(3),g=T(y),d=r(2),f=T(d),i=r(8),e=T(i),n=r(23),u=T(n),c=r(34),o=T(c),a=r(59),l=T(a),b=r(60),s=T(b),v=r(28),E=T(v),_=r(61),z=T(_);function T(O){return O&&O.__esModule?O:{default:O}}function A(O,W){if(!(O instanceof W))throw new TypeError("Cannot call a class as a function")}function S(O,W){if(!O)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return W&&(typeof W=="object"||typeof W=="function")?W:O}function D(O,W){if(typeof W!="function"&&W!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof W);O.prototype=Object.create(W&&W.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),W&&(Object.setPrototypeOf?Object.setPrototypeOf(O,W):O.__proto__=W)}var N=[!1,"center","right","justify"],P=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],B=[!1,"serif","monospace"],H=["1","2","3",!1],R=["small",!1,"large","huge"],Y=function(O){D(W,O);function W(K,L){A(this,W);var x=S(this,(W.__proto__||Object.getPrototypeOf(W)).call(this,K,L)),j=function q(F){if(!document.body.contains(K.root))return document.body.removeEventListener("click",q);x.tooltip!=null&&!x.tooltip.root.contains(F.target)&&document.activeElement!==x.tooltip.textbox&&!x.quill.hasFocus()&&x.tooltip.hide(),x.pickers!=null&&x.pickers.forEach(function(U){U.container.contains(F.target)||U.close()})};return K.emitter.listenDOM("click",document.body,j),x}return w(W,[{key:"addModule",value:function(L){var x=m(W.prototype.__proto__||Object.getPrototypeOf(W.prototype),"addModule",this).call(this,L);return L==="toolbar"&&this.extendToolbar(x),x}},{key:"buildButtons",value:function(L,x){L.forEach(function(j){var q=j.getAttribute("class")||"";q.split(/\s+/).forEach(function(F){if(F.startsWith("ql-")&&(F=F.slice(3),x[F]!=null))if(F==="direction")j.innerHTML=x[F][""]+x[F].rtl;else if(typeof x[F]=="string")j.innerHTML=x[F];else{var U=j.value||"";U!=null&&x[F][U]&&(j.innerHTML=x[F][U])}})})}},{key:"buildPickers",value:function(L,x){var j=this;this.pickers=L.map(function(F){if(F.classList.contains("ql-align"))return F.querySelector("option")==null&&I(F,N),new s.default(F,x.align);if(F.classList.contains("ql-background")||F.classList.contains("ql-color")){var U=F.classList.contains("ql-background")?"background":"color";return F.querySelector("option")==null&&I(F,P,U==="background"?"#ffffff":"#000000"),new l.default(F,x[U])}else return F.querySelector("option")==null&&(F.classList.contains("ql-font")?I(F,B):F.classList.contains("ql-header")?I(F,H):F.classList.contains("ql-size")&&I(F,R)),new E.default(F)});var q=function(){j.pickers.forEach(function(U){U.update()})};this.quill.on(e.default.events.EDITOR_CHANGE,q)}}]),W}(o.default);Y.DEFAULTS=(0,g.default)(!0,{},o.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var W=this,K=this.container.querySelector("input.ql-image[type=file]");K==null&&(K=document.createElement("input"),K.setAttribute("type","file"),K.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),K.classList.add("ql-image"),K.addEventListener("change",function(){if(K.files!=null&&K.files[0]!=null){var L=new FileReader;L.onload=function(x){var j=W.quill.getSelection(!0);W.quill.updateContents(new f.default().retain(j.index).delete(j.length).insert({image:x.target.result}),e.default.sources.USER),W.quill.setSelection(j.index+1,e.default.sources.SILENT),K.value=""},L.readAsDataURL(K.files[0])}}),this.container.appendChild(K)),K.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var C=function(O){D(W,O);function W(K,L){A(this,W);var x=S(this,(W.__proto__||Object.getPrototypeOf(W)).call(this,K,L));return x.textbox=x.root.querySelector('input[type="text"]'),x.listen(),x}return w(W,[{key:"listen",value:function(){var L=this;this.textbox.addEventListener("keydown",function(x){u.default.match(x,"enter")?(L.save(),x.preventDefault()):u.default.match(x,"escape")&&(L.cancel(),x.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"link",x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),x!=null?this.textbox.value=x:L!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+L)||""),this.root.setAttribute("data-mode",L)}},{key:"restoreFocus",value:function(){var L=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=L}},{key:"save",value:function(){var L=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":{var x=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",L,e.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",L,e.default.sources.USER)),this.quill.root.scrollTop=x;break}case"video":L=M(L);case"formula":{if(!L)break;var j=this.quill.getSelection(!0);if(j!=null){var q=j.index+j.length;this.quill.insertEmbed(q,this.root.getAttribute("data-mode"),L,e.default.sources.USER),this.root.getAttribute("data-mode")==="formula"&&this.quill.insertText(q+1," ",e.default.sources.USER),this.quill.setSelection(q+2,e.default.sources.USER)}break}}this.textbox.value="",this.hide()}}]),W}(z.default);function M(O){var W=O.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||O.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return W?(W[1]||"https")+"://www.youtube.com/embed/"+W[2]+"?showinfo=0":(W=O.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(W[1]||"https")+"://player.vimeo.com/video/"+W[2]+"/":O}function I(O,W){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;W.forEach(function(L){var x=document.createElement("option");L===K?x.setAttribute("selected","selected"):x.setAttribute("value",L),O.appendChild(x)})}t.BaseTooltip=C,t.default=Y},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function m(){this.head=this.tail=null,this.length=0}return m.prototype.append=function(){for(var y=[],g=0;g<arguments.length;g++)y[g]=arguments[g];this.insertBefore(y[0],null),y.length>1&&this.append.apply(this,y.slice(1))},m.prototype.contains=function(y){for(var g,d=this.iterator();g=d();)if(g===y)return!0;return!1},m.prototype.insertBefore=function(y,g){y&&(y.next=g,g!=null?(y.prev=g.prev,g.prev!=null&&(g.prev.next=y),g.prev=y,g===this.head&&(this.head=y)):this.tail!=null?(this.tail.next=y,y.prev=this.tail,this.tail=y):(y.prev=null,this.head=this.tail=y),this.length+=1)},m.prototype.offset=function(y){for(var g=0,d=this.head;d!=null;){if(d===y)return g;g+=d.length(),d=d.next}return-1},m.prototype.remove=function(y){this.contains(y)&&(y.prev!=null&&(y.prev.next=y.next),y.next!=null&&(y.next.prev=y.prev),y===this.head&&(this.head=y.next),y===this.tail&&(this.tail=y.prev),this.length-=1)},m.prototype.iterator=function(y){return y===void 0&&(y=this.head),function(){var g=y;return y!=null&&(y=y.next),g}},m.prototype.find=function(y,g){g===void 0&&(g=!1);for(var d,f=this.iterator();d=f();){var i=d.length();if(y<i||g&&y===i&&(d.next==null||d.next.length()!==0))return[d,y];y-=i}return[null,0]},m.prototype.forEach=function(y){for(var g,d=this.iterator();g=d();)y(g)},m.prototype.forEachAt=function(y,g,d){if(!(g<=0))for(var f=this.find(y),i=f[0],e=f[1],n,u=y-e,c=this.iterator(i);(n=c())&&u<y+g;){var o=n.length();y>u?d(n,y-u,Math.min(g,u+o-y)):d(n,0,Math.min(o,y+g-u)),u+=o}},m.prototype.map=function(y){return this.reduce(function(g,d){return g.push(y(d)),g},[])},m.prototype.reduce=function(y,g){for(var d,f=this.iterator();d=f();)g=y(g,d);return g},m}();t.default=w},function(h,t,r){var w=this&&this.__extends||function(){var i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var u in n)n.hasOwnProperty(u)&&(e[u]=n[u])};return function(e,n){i(e,n);function u(){this.constructor=e}e.prototype=n===null?Object.create(n):(u.prototype=n.prototype,new u)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=r(17),y=r(1),g={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},d=100,f=function(i){w(e,i);function e(n){var u=i.call(this,n)||this;return u.scroll=u,u.observer=new MutationObserver(function(c){u.update(c)}),u.observer.observe(u.domNode,g),u.attach(),u}return e.prototype.detach=function(){i.prototype.detach.call(this),this.observer.disconnect()},e.prototype.deleteAt=function(n,u){this.update(),n===0&&u===this.length()?this.children.forEach(function(c){c.remove()}):i.prototype.deleteAt.call(this,n,u)},e.prototype.formatAt=function(n,u,c,o){this.update(),i.prototype.formatAt.call(this,n,u,c,o)},e.prototype.insertAt=function(n,u,c){this.update(),i.prototype.insertAt.call(this,n,u,c)},e.prototype.optimize=function(n,u){var c=this;n===void 0&&(n=[]),u===void 0&&(u={}),i.prototype.optimize.call(this,u);for(var o=[].slice.call(this.observer.takeRecords());o.length>0;)n.push(o.pop());for(var a=function(v,E){E===void 0&&(E=!0),!(v==null||v===c)&&v.domNode.parentNode!=null&&(v.domNode[y.DATA_KEY].mutations==null&&(v.domNode[y.DATA_KEY].mutations=[]),E&&a(v.parent))},l=function(v){v.domNode[y.DATA_KEY]==null||v.domNode[y.DATA_KEY].mutations==null||(v instanceof m.default&&v.children.forEach(l),v.optimize(u))},b=n,s=0;b.length>0;s+=1){if(s>=d)throw new Error("[Parchment] Maximum optimize iterations reached");for(b.forEach(function(v){var E=y.find(v.target,!0);E!=null&&(E.domNode===v.target&&(v.type==="childList"?(a(y.find(v.previousSibling,!1)),[].forEach.call(v.addedNodes,function(_){var z=y.find(_,!1);a(z,!1),z instanceof m.default&&z.children.forEach(function(T){a(T,!1)})})):v.type==="attributes"&&a(E.prev)),a(E))}),this.children.forEach(l),b=[].slice.call(this.observer.takeRecords()),o=b.slice();o.length>0;)n.push(o.pop())}},e.prototype.update=function(n,u){var c=this;u===void 0&&(u={}),n=n||this.observer.takeRecords(),n.map(function(o){var a=y.find(o.target,!0);return a==null?null:a.domNode[y.DATA_KEY].mutations==null?(a.domNode[y.DATA_KEY].mutations=[o],a):(a.domNode[y.DATA_KEY].mutations.push(o),null)}).forEach(function(o){o==null||o===c||o.domNode[y.DATA_KEY]==null||o.update(o.domNode[y.DATA_KEY].mutations||[],u)}),this.domNode[y.DATA_KEY].mutations!=null&&i.prototype.update.call(this,this.domNode[y.DATA_KEY].mutations,u),this.optimize(n,u)},e.blotName="scroll",e.defaultChild="block",e.scope=y.Scope.BLOCK_BLOT,e.tagName="DIV",e}(m.default);t.default=f},function(h,t,r){var w=this&&this.__extends||function(){var f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,e){i.__proto__=e}||function(i,e){for(var n in e)e.hasOwnProperty(n)&&(i[n]=e[n])};return function(i,e){f(i,e);function n(){this.constructor=i}i.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=r(18),y=r(1);function g(f,i){if(Object.keys(f).length!==Object.keys(i).length)return!1;for(var e in f)if(f[e]!==i[e])return!1;return!0}var d=function(f){w(i,f);function i(){return f!==null&&f.apply(this,arguments)||this}return i.formats=function(e){if(e.tagName!==i.tagName)return f.formats.call(this,e)},i.prototype.format=function(e,n){var u=this;e===this.statics.blotName&&!n?(this.children.forEach(function(c){c instanceof m.default||(c=c.wrap(i.blotName,!0)),u.attributes.copy(c)}),this.unwrap()):f.prototype.format.call(this,e,n)},i.prototype.formatAt=function(e,n,u,c){if(this.formats()[u]!=null||y.query(u,y.Scope.ATTRIBUTE)){var o=this.isolate(e,n);o.format(u,c)}else f.prototype.formatAt.call(this,e,n,u,c)},i.prototype.optimize=function(e){f.prototype.optimize.call(this,e);var n=this.formats();if(Object.keys(n).length===0)return this.unwrap();var u=this.next;u instanceof i&&u.prev===this&&g(n,u.formats())&&(u.moveChildren(this),u.remove())},i.blotName="inline",i.scope=y.Scope.INLINE_BLOT,i.tagName="SPAN",i}(m.default);t.default=d},function(h,t,r){var w=this&&this.__extends||function(){var d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,i){f.__proto__=i}||function(f,i){for(var e in i)i.hasOwnProperty(e)&&(f[e]=i[e])};return function(f,i){d(f,i);function e(){this.constructor=f}f.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=r(18),y=r(1),g=function(d){w(f,d);function f(){return d!==null&&d.apply(this,arguments)||this}return f.formats=function(i){var e=y.query(f.blotName).tagName;if(i.tagName!==e)return d.formats.call(this,i)},f.prototype.format=function(i,e){y.query(i,y.Scope.BLOCK)!=null&&(i===this.statics.blotName&&!e?this.replaceWith(f.blotName):d.prototype.format.call(this,i,e))},f.prototype.formatAt=function(i,e,n,u){y.query(n,y.Scope.BLOCK)!=null?this.format(n,u):d.prototype.formatAt.call(this,i,e,n,u)},f.prototype.insertAt=function(i,e,n){if(n==null||y.query(e,y.Scope.INLINE)!=null)d.prototype.insertAt.call(this,i,e,n);else{var u=this.split(i),c=y.create(e,n);u.parent.insertBefore(c,u)}},f.prototype.update=function(i,e){navigator.userAgent.match(/Trident/)?this.build():d.prototype.update.call(this,i,e)},f.blotName="block",f.scope=y.Scope.BLOCK_BLOT,f.tagName="P",f}(m.default);t.default=g},function(h,t,r){var w=this&&this.__extends||function(){var g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,f){d.__proto__=f}||function(d,f){for(var i in f)f.hasOwnProperty(i)&&(d[i]=f[i])};return function(d,f){g(d,f);function i(){this.constructor=d}d.prototype=f===null?Object.create(f):(i.prototype=f.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=r(19),y=function(g){w(d,g);function d(){return g!==null&&g.apply(this,arguments)||this}return d.formats=function(f){},d.prototype.format=function(f,i){g.prototype.formatAt.call(this,0,this.length(),f,i)},d.prototype.formatAt=function(f,i,e,n){f===0&&i===this.length()?this.format(e,n):g.prototype.formatAt.call(this,f,i,e,n)},d.prototype.formats=function(){return this.statics.formats(this.domNode)},d}(m.default);t.default=y},function(h,t,r){var w=this&&this.__extends||function(){var d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,i){f.__proto__=i}||function(f,i){for(var e in i)i.hasOwnProperty(e)&&(f[e]=i[e])};return function(f,i){d(f,i);function e(){this.constructor=f}f.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}();Object.defineProperty(t,"__esModule",{value:!0});var m=r(19),y=r(1),g=function(d){w(f,d);function f(i){var e=d.call(this,i)||this;return e.text=e.statics.value(e.domNode),e}return f.create=function(i){return document.createTextNode(i)},f.value=function(i){var e=i.data;return e.normalize&&(e=e.normalize()),e},f.prototype.deleteAt=function(i,e){this.domNode.data=this.text=this.text.slice(0,i)+this.text.slice(i+e)},f.prototype.index=function(i,e){return this.domNode===i?e:-1},f.prototype.insertAt=function(i,e,n){n==null?(this.text=this.text.slice(0,i)+e+this.text.slice(i),this.domNode.data=this.text):d.prototype.insertAt.call(this,i,e,n)},f.prototype.length=function(){return this.text.length},f.prototype.optimize=function(i){d.prototype.optimize.call(this,i),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof f&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},f.prototype.position=function(i,e){return[this.domNode,i]},f.prototype.split=function(i,e){if(e===void 0&&(e=!1),!e){if(i===0)return this;if(i===this.length())return this.next}var n=y.create(this.domNode.splitText(i));return this.parent.insertBefore(n,this.next),this.text=this.statics.value(this.domNode),n},f.prototype.update=function(i,e){var n=this;i.some(function(u){return u.type==="characterData"&&u.target===n.domNode})&&(this.text=this.statics.value(this.domNode))},f.prototype.value=function(){return this.text},f.blotName="text",f.scope=y.Scope.INLINE_BLOT,f}(m.default);t.default=g},function(h,t,r){var w=document.createElement("div");if(w.classList.toggle("test-class",!1),w.classList.contains("test-class")){var m=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(y,g){return arguments.length>1&&!this.contains(y)==!g?g:m.call(this,y)}}String.prototype.startsWith||(String.prototype.startsWith=function(y,g){return g=g||0,this.substr(g,y.length)===y}),String.prototype.endsWith||(String.prototype.endsWith=function(y,g){var d=this.toString();(typeof g!="number"||!isFinite(g)||Math.floor(g)!==g||g>d.length)&&(g=d.length),g-=y.length;var f=d.indexOf(y,g);return f!==-1&&f===g}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(g){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof g!="function")throw new TypeError("predicate must be a function");for(var d=Object(this),f=d.length>>>0,i=arguments[1],e,n=0;n<f;n++)if(e=d[n],g.call(i,e,n,d))return e}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(h,t){var r=-1,w=1,m=0;function y(s,v,E){if(s==v)return s?[[m,s]]:[];(E<0||s.length<E)&&(E=null);var _=i(s,v),z=s.substring(0,_);s=s.substring(_),v=v.substring(_),_=e(s,v);var T=s.substring(s.length-_);s=s.substring(0,s.length-_),v=v.substring(0,v.length-_);var A=g(s,v);return z&&A.unshift([m,z]),T&&A.push([m,T]),u(A),E!=null&&(A=a(A,E)),A=l(A),A}function g(s,v){var E;if(!s)return[[w,v]];if(!v)return[[r,s]];var _=s.length>v.length?s:v,z=s.length>v.length?v:s,T=_.indexOf(z);if(T!=-1)return E=[[w,_.substring(0,T)],[m,z],[w,_.substring(T+z.length)]],s.length>v.length&&(E[0][0]=E[2][0]=r),E;if(z.length==1)return[[r,s],[w,v]];var A=n(s,v);if(A){var S=A[0],D=A[1],N=A[2],P=A[3],B=A[4],H=y(S,N),R=y(D,P);return H.concat([[m,B]],R)}return d(s,v)}function d(s,v){for(var E=s.length,_=v.length,z=Math.ceil((E+_)/2),T=z,A=2*z,S=new Array(A),D=new Array(A),N=0;N<A;N++)S[N]=-1,D[N]=-1;S[T+1]=0,D[T+1]=0;for(var P=E-_,B=P%2!=0,H=0,R=0,Y=0,C=0,M=0;M<z;M++){for(var I=-M+H;I<=M-R;I+=2){var O=T+I,W;I==-M||I!=M&&S[O-1]<S[O+1]?W=S[O+1]:W=S[O-1]+1;for(var K=W-I;W<E&&K<_&&s.charAt(W)==v.charAt(K);)W++,K++;if(S[O]=W,W>E)R+=2;else if(K>_)H+=2;else if(B){var L=T+P-I;if(L>=0&&L<A&&D[L]!=-1){var x=E-D[L];if(W>=x)return f(s,v,W,K)}}}for(var j=-M+Y;j<=M-C;j+=2){var L=T+j,x;j==-M||j!=M&&D[L-1]<D[L+1]?x=D[L+1]:x=D[L-1]+1;for(var q=x-j;x<E&&q<_&&s.charAt(E-x-1)==v.charAt(_-q-1);)x++,q++;if(D[L]=x,x>E)C+=2;else if(q>_)Y+=2;else if(!B){var O=T+P-j;if(O>=0&&O<A&&S[O]!=-1){var W=S[O],K=T+W-O;if(x=E-x,W>=x)return f(s,v,W,K)}}}}return[[r,s],[w,v]]}function f(s,v,E,_){var z=s.substring(0,E),T=v.substring(0,_),A=s.substring(E),S=v.substring(_),D=y(z,T),N=y(A,S);return D.concat(N)}function i(s,v){if(!s||!v||s.charAt(0)!=v.charAt(0))return 0;for(var E=0,_=Math.min(s.length,v.length),z=_,T=0;E<z;)s.substring(T,z)==v.substring(T,z)?(E=z,T=E):_=z,z=Math.floor((_-E)/2+E);return z}function e(s,v){if(!s||!v||s.charAt(s.length-1)!=v.charAt(v.length-1))return 0;for(var E=0,_=Math.min(s.length,v.length),z=_,T=0;E<z;)s.substring(s.length-z,s.length-T)==v.substring(v.length-z,v.length-T)?(E=z,T=E):_=z,z=Math.floor((_-E)/2+E);return z}function n(s,v){var E=s.length>v.length?s:v,_=s.length>v.length?v:s;if(E.length<4||_.length*2<E.length)return null;function z(R,Y,C){for(var M=R.substring(C,C+Math.floor(R.length/4)),I=-1,O="",W,K,L,x;(I=Y.indexOf(M,I+1))!=-1;){var j=i(R.substring(C),Y.substring(I)),q=e(R.substring(0,C),Y.substring(0,I));O.length<q+j&&(O=Y.substring(I-q,I)+Y.substring(I,I+j),W=R.substring(0,C-q),K=R.substring(C+j),L=Y.substring(0,I-q),x=Y.substring(I+j))}return O.length*2>=R.length?[W,K,L,x,O]:null}var T=z(E,_,Math.ceil(E.length/4)),A=z(E,_,Math.ceil(E.length/2)),S;if(!T&&!A)return null;A?T?S=T[4].length>A[4].length?T:A:S=A:S=T;var D,N,P,B;s.length>v.length?(D=S[0],N=S[1],P=S[2],B=S[3]):(P=S[0],B=S[1],D=S[2],N=S[3]);var H=S[4];return[D,N,P,B,H]}function u(s){s.push([m,""]);for(var v=0,E=0,_=0,z="",T="",A;v<s.length;)switch(s[v][0]){case w:_++,T+=s[v][1],v++;break;case r:E++,z+=s[v][1],v++;break;case m:E+_>1?(E!==0&&_!==0&&(A=i(T,z),A!==0&&(v-E-_>0&&s[v-E-_-1][0]==m?s[v-E-_-1][1]+=T.substring(0,A):(s.splice(0,0,[m,T.substring(0,A)]),v++),T=T.substring(A),z=z.substring(A)),A=e(T,z),A!==0&&(s[v][1]=T.substring(T.length-A)+s[v][1],T=T.substring(0,T.length-A),z=z.substring(0,z.length-A))),E===0?s.splice(v-_,E+_,[w,T]):_===0?s.splice(v-E,E+_,[r,z]):s.splice(v-E-_,E+_,[r,z],[w,T]),v=v-E-_+(E?1:0)+(_?1:0)+1):v!==0&&s[v-1][0]==m?(s[v-1][1]+=s[v][1],s.splice(v,1)):v++,_=0,E=0,z="",T="";break}s[s.length-1][1]===""&&s.pop();var S=!1;for(v=1;v<s.length-1;)s[v-1][0]==m&&s[v+1][0]==m&&(s[v][1].substring(s[v][1].length-s[v-1][1].length)==s[v-1][1]?(s[v][1]=s[v-1][1]+s[v][1].substring(0,s[v][1].length-s[v-1][1].length),s[v+1][1]=s[v-1][1]+s[v+1][1],s.splice(v-1,1),S=!0):s[v][1].substring(0,s[v+1][1].length)==s[v+1][1]&&(s[v-1][1]+=s[v+1][1],s[v][1]=s[v][1].substring(s[v+1][1].length)+s[v+1][1],s.splice(v+1,1),S=!0)),v++;S&&u(s)}var c=y;c.INSERT=w,c.DELETE=r,c.EQUAL=m,h.exports=c;function o(s,v){if(v===0)return[m,s];for(var E=0,_=0;_<s.length;_++){var z=s[_];if(z[0]===r||z[0]===m){var T=E+z[1].length;if(v===T)return[_+1,s];if(v<T){s=s.slice();var A=v-E,S=[z[0],z[1].slice(0,A)],D=[z[0],z[1].slice(A)];return s.splice(_,1,S,D),[_+1,s]}else E=T}}throw new Error("cursor_pos is out of bounds!")}function a(s,v){var E=o(s,v),_=E[1],z=E[0],T=_[z],A=_[z+1];if(T==null)return s;if(T[0]!==m)return s;if(A!=null&&T[1]+A[1]===A[1]+T[1])return _.splice(z,2,A,T),b(_,z,2);if(A!=null&&A[1].indexOf(T[1])===0){_.splice(z,2,[A[0],T[1]],[0,T[1]]);var S=A[1].slice(T[1].length);return S.length>0&&_.splice(z+2,0,[A[0],S]),b(_,z,3)}else return s}function l(s){for(var v=!1,E=function(A){return A.charCodeAt(0)>=56320&&A.charCodeAt(0)<=57343},_=function(A){return A.charCodeAt(A.length-1)>=55296&&A.charCodeAt(A.length-1)<=56319},z=2;z<s.length;z+=1)s[z-2][0]===m&&_(s[z-2][1])&&s[z-1][0]===r&&E(s[z-1][1])&&s[z][0]===w&&E(s[z][1])&&(v=!0,s[z-1][1]=s[z-2][1].slice(-1)+s[z-1][1],s[z][1]=s[z-2][1].slice(-1)+s[z][1],s[z-2][1]=s[z-2][1].slice(0,-1));if(!v)return s;for(var T=[],z=0;z<s.length;z+=1)s[z][1].length>0&&T.push(s[z]);return T}function b(s,v,E){for(var _=v+E-1;_>=0&&_>=v-1;_--)if(_+1<s.length){var z=s[_],T=s[_+1];z[0]===T[1]&&s.splice(_,2,[z[0],z[1]+T[1]])}return s}},function(h,t){t=h.exports=typeof Object.keys=="function"?Object.keys:r,t.shim=r;function r(w){var m=[];for(var y in w)m.push(y);return m}},function(h,t){var r=function(){return Object.prototype.toString.call(arguments)}()=="[object Arguments]";t=h.exports=r?w:m,t.supported=w;function w(y){return Object.prototype.toString.call(y)=="[object Arguments]"}t.unsupported=m;function m(y){return y&&typeof y=="object"&&typeof y.length=="number"&&Object.prototype.hasOwnProperty.call(y,"callee")&&!Object.prototype.propertyIsEnumerable.call(y,"callee")||!1}},function(h,t){var r=Object.prototype.hasOwnProperty,w="~";function m(){}Object.create&&(m.prototype=Object.create(null),new m().__proto__||(w=!1));function y(d,f,i){this.fn=d,this.context=f,this.once=i||!1}function g(){this._events=new m,this._eventsCount=0}g.prototype.eventNames=function(){var f=[],i,e;if(this._eventsCount===0)return f;for(e in i=this._events)r.call(i,e)&&f.push(w?e.slice(1):e);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(i)):f},g.prototype.listeners=function(f,i){var e=w?w+f:f,n=this._events[e];if(i)return!!n;if(!n)return[];if(n.fn)return[n.fn];for(var u=0,c=n.length,o=new Array(c);u<c;u++)o[u]=n[u].fn;return o},g.prototype.emit=function(f,i,e,n,u,c){var o=w?w+f:f;if(!this._events[o])return!1;var a=this._events[o],l=arguments.length,b,s;if(a.fn){switch(a.once&&this.removeListener(f,a.fn,void 0,!0),l){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,i),!0;case 3:return a.fn.call(a.context,i,e),!0;case 4:return a.fn.call(a.context,i,e,n),!0;case 5:return a.fn.call(a.context,i,e,n,u),!0;case 6:return a.fn.call(a.context,i,e,n,u,c),!0}for(s=1,b=new Array(l-1);s<l;s++)b[s-1]=arguments[s];a.fn.apply(a.context,b)}else{var v=a.length,E;for(s=0;s<v;s++)switch(a[s].once&&this.removeListener(f,a[s].fn,void 0,!0),l){case 1:a[s].fn.call(a[s].context);break;case 2:a[s].fn.call(a[s].context,i);break;case 3:a[s].fn.call(a[s].context,i,e);break;case 4:a[s].fn.call(a[s].context,i,e,n);break;default:if(!b)for(E=1,b=new Array(l-1);E<l;E++)b[E-1]=arguments[E];a[s].fn.apply(a[s].context,b)}}return!0},g.prototype.on=function(f,i,e){var n=new y(i,e||this),u=w?w+f:f;return this._events[u]?this._events[u].fn?this._events[u]=[this._events[u],n]:this._events[u].push(n):(this._events[u]=n,this._eventsCount++),this},g.prototype.once=function(f,i,e){var n=new y(i,e||this,!0),u=w?w+f:f;return this._events[u]?this._events[u].fn?this._events[u]=[this._events[u],n]:this._events[u].push(n):(this._events[u]=n,this._eventsCount++),this},g.prototype.removeListener=function(f,i,e,n){var u=w?w+f:f;if(!this._events[u])return this;if(!i)return--this._eventsCount===0?this._events=new m:delete this._events[u],this;var c=this._events[u];if(c.fn)c.fn===i&&(!n||c.once)&&(!e||c.context===e)&&(--this._eventsCount===0?this._events=new m:delete this._events[u]);else{for(var o=0,a=[],l=c.length;o<l;o++)(c[o].fn!==i||n&&!c[o].once||e&&c[o].context!==e)&&a.push(c[o]);a.length?this._events[u]=a.length===1?a[0]:a:--this._eventsCount===0?this._events=new m:delete this._events[u]}return this},g.prototype.removeAllListeners=function(f){var i;return f?(i=w?w+f:f,this._events[i]&&(--this._eventsCount===0?this._events=new m:delete this._events[i])):(this._events=new m,this._eventsCount=0),this},g.prototype.off=g.prototype.removeListener,g.prototype.addListener=g.prototype.on,g.prototype.setMaxListeners=function(){return this},g.prefixed=w,g.EventEmitter=g,typeof h<"u"&&(h.exports=g)},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.matchText=t.matchSpacing=t.matchNewline=t.matchBlot=t.matchAttributor=t.default=void 0;var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(G){return typeof G}:function(G){return G&&typeof Symbol=="function"&&G.constructor===Symbol&&G!==Symbol.prototype?"symbol":typeof G},m=function(){function G(V,Q){var ee=[],X=!0,ie=!1,se=void 0;try{for(var oe=V[Symbol.iterator](),Ae;!(X=(Ae=oe.next()).done)&&(ee.push(Ae.value),!(Q&&ee.length===Q));X=!0);}catch(Ce){ie=!0,se=Ce}finally{try{!X&&oe.return&&oe.return()}finally{if(ie)throw se}}return ee}return function(V,Q){if(Array.isArray(V))return V;if(Symbol.iterator in Object(V))return G(V,Q);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(){function G(V,Q){for(var ee=0;ee<Q.length;ee++){var X=Q[ee];X.enumerable=X.enumerable||!1,X.configurable=!0,"value"in X&&(X.writable=!0),Object.defineProperty(V,X.key,X)}}return function(V,Q,ee){return Q&&G(V.prototype,Q),ee&&G(V,ee),V}}(),g=r(3),d=D(g),f=r(2),i=D(f),e=r(0),n=D(e),u=r(5),c=D(u),o=r(10),a=D(o),l=r(9),b=D(l),s=r(36),v=r(37),E=r(13),_=D(E),z=r(26),T=r(38),A=r(39),S=r(40);function D(G){return G&&G.__esModule?G:{default:G}}function N(G,V,Q){return V in G?Object.defineProperty(G,V,{value:Q,enumerable:!0,configurable:!0,writable:!0}):G[V]=Q,G}function P(G,V){if(!(G instanceof V))throw new TypeError("Cannot call a class as a function")}function B(G,V){if(!G)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return V&&(typeof V=="object"||typeof V=="function")?V:G}function H(G,V){if(typeof V!="function"&&V!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof V);G.prototype=Object.create(V&&V.prototype,{constructor:{value:G,enumerable:!1,writable:!0,configurable:!0}}),V&&(Object.setPrototypeOf?Object.setPrototypeOf(G,V):G.__proto__=V)}var R=(0,a.default)("quill:clipboard"),Y="__ql-matcher",C=[[Node.TEXT_NODE,be],[Node.TEXT_NODE,ue],["br",ne],[Node.ELEMENT_NODE,ue],[Node.ELEMENT_NODE,U],[Node.ELEMENT_NODE,de],[Node.ELEMENT_NODE,F],[Node.ELEMENT_NODE,ke],["li",re],["b",q.bind(q,"bold")],["i",q.bind(q,"italic")],["style",te]],M=[s.AlignAttribute,T.DirectionAttribute].reduce(function(G,V){return G[V.keyName]=V,G},{}),I=[s.AlignStyle,v.BackgroundStyle,z.ColorStyle,T.DirectionStyle,A.FontStyle,S.SizeStyle].reduce(function(G,V){return G[V.keyName]=V,G},{}),O=function(G){H(V,G);function V(Q,ee){P(this,V);var X=B(this,(V.__proto__||Object.getPrototypeOf(V)).call(this,Q,ee));return X.quill.root.addEventListener("paste",X.onPaste.bind(X)),X.container=X.quill.addContainer("ql-clipboard"),X.container.setAttribute("contenteditable",!0),X.container.setAttribute("tabindex",-1),X.matchers=[],C.concat(X.options.matchers).forEach(function(ie){var se=m(ie,2),oe=se[0],Ae=se[1];!ee.matchVisual&&Ae===de||X.addMatcher(oe,Ae)}),X}return y(V,[{key:"addMatcher",value:function(ee,X){this.matchers.push([ee,X])}},{key:"convert",value:function(ee){if(typeof ee=="string")return this.container.innerHTML=ee.replace(/\>\r?\n +\</g,"><"),this.convert();var X=this.quill.getFormat(this.quill.selection.savedRange.index);if(X[_.default.blotName]){var ie=this.container.innerText;return this.container.innerHTML="",new i.default().insert(ie,N({},_.default.blotName,X[_.default.blotName]))}var se=this.prepareMatching(),oe=m(se,2),Ae=oe[0],Ce=oe[1],me=j(this.container,Ae,Ce);return L(me,`
`)&&me.ops[me.ops.length-1].attributes==null&&(me=me.compose(new i.default().retain(me.length()-1).delete(1))),R.log("convert",this.container.innerHTML,me),this.container.innerHTML="",me}},{key:"dangerouslyPasteHTML",value:function(ee,X){var ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:c.default.sources.API;if(typeof ee=="string")this.quill.setContents(this.convert(ee),X),this.quill.setSelection(0,c.default.sources.SILENT);else{var se=this.convert(X);this.quill.updateContents(new i.default().retain(ee).concat(se),ie),this.quill.setSelection(ee+se.length(),c.default.sources.SILENT)}}},{key:"onPaste",value:function(ee){var X=this;if(!(ee.defaultPrevented||!this.quill.isEnabled())){var ie=this.quill.getSelection(),se=new i.default().retain(ie.index),oe=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(c.default.sources.SILENT),setTimeout(function(){se=se.concat(X.convert()).delete(ie.length),X.quill.updateContents(se,c.default.sources.USER),X.quill.setSelection(se.length()-ie.length,c.default.sources.SILENT),X.quill.scrollingContainer.scrollTop=oe,X.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var ee=this,X=[],ie=[];return this.matchers.forEach(function(se){var oe=m(se,2),Ae=oe[0],Ce=oe[1];switch(Ae){case Node.TEXT_NODE:ie.push(Ce);break;case Node.ELEMENT_NODE:X.push(Ce);break;default:[].forEach.call(ee.container.querySelectorAll(Ae),function(me){me[Y]=me[Y]||[],me[Y].push(Ce)});break}}),[X,ie]}}]),V}(b.default);O.DEFAULTS={matchers:[],matchVisual:!0};function W(G,V,Q){return(typeof V>"u"?"undefined":w(V))==="object"?Object.keys(V).reduce(function(ee,X){return W(ee,X,V[X])},G):G.reduce(function(ee,X){return X.attributes&&X.attributes[V]?ee.push(X):ee.insert(X.insert,(0,d.default)({},N({},V,Q),X.attributes))},new i.default)}function K(G){if(G.nodeType!==Node.ELEMENT_NODE)return{};var V="__ql-computed-style";return G[V]||(G[V]=window.getComputedStyle(G))}function L(G,V){for(var Q="",ee=G.ops.length-1;ee>=0&&Q.length<V.length;--ee){var X=G.ops[ee];if(typeof X.insert!="string")break;Q=X.insert+Q}return Q.slice(-1*V.length)===V}function x(G){if(G.childNodes.length===0)return!1;var V=K(G);return["block","list-item"].indexOf(V.display)>-1}function j(G,V,Q){return G.nodeType===G.TEXT_NODE?Q.reduce(function(ee,X){return X(G,ee)},new i.default):G.nodeType===G.ELEMENT_NODE?[].reduce.call(G.childNodes||[],function(ee,X){var ie=j(X,V,Q);return X.nodeType===G.ELEMENT_NODE&&(ie=V.reduce(function(se,oe){return oe(X,se)},ie),ie=(X[Y]||[]).reduce(function(se,oe){return oe(X,se)},ie)),ee.concat(ie)},new i.default):new i.default}function q(G,V,Q){return W(Q,G,!0)}function F(G,V){var Q=n.default.Attributor.Attribute.keys(G),ee=n.default.Attributor.Class.keys(G),X=n.default.Attributor.Style.keys(G),ie={};return Q.concat(ee).concat(X).forEach(function(se){var oe=n.default.query(se,n.default.Scope.ATTRIBUTE);oe!=null&&(ie[oe.attrName]=oe.value(G),ie[oe.attrName])||(oe=M[se],oe!=null&&(oe.attrName===se||oe.keyName===se)&&(ie[oe.attrName]=oe.value(G)||void 0),oe=I[se],oe!=null&&(oe.attrName===se||oe.keyName===se)&&(oe=I[se],ie[oe.attrName]=oe.value(G)||void 0))}),Object.keys(ie).length>0&&(V=W(V,ie)),V}function U(G,V){var Q=n.default.query(G);if(Q==null)return V;if(Q.prototype instanceof n.default.Embed){var ee={},X=Q.value(G);X!=null&&(ee[Q.blotName]=X,V=new i.default().insert(ee,Q.formats(G)))}else typeof Q.formats=="function"&&(V=W(V,Q.blotName,Q.formats(G)));return V}function ne(G,V){return L(V,`
`)||V.insert(`
`),V}function te(){return new i.default}function re(G,V){var Q=n.default.query(G);if(Q==null||Q.blotName!=="list-item"||!L(V,`
`))return V;for(var ee=-1,X=G.parentNode;!X.classList.contains("ql-clipboard");)(n.default.query(X)||{}).blotName==="list"&&(ee+=1),X=X.parentNode;return ee<=0?V:V.compose(new i.default().retain(V.length()-1).retain(1,{indent:ee}))}function ue(G,V){return L(V,`
`)||(x(G)||V.length()>0&&G.nextSibling&&x(G.nextSibling))&&V.insert(`
`),V}function de(G,V){if(x(G)&&G.nextElementSibling!=null&&!L(V,`

`)){var Q=G.offsetHeight+parseFloat(K(G).marginTop)+parseFloat(K(G).marginBottom);G.nextElementSibling.offsetTop>G.offsetTop+Q*1.5&&V.insert(`
`)}return V}function ke(G,V){var Q={},ee=G.style||{};return ee.fontStyle&&K(G).fontStyle==="italic"&&(Q.italic=!0),ee.fontWeight&&(K(G).fontWeight.startsWith("bold")||parseInt(K(G).fontWeight)>=700)&&(Q.bold=!0),Object.keys(Q).length>0&&(V=W(V,Q)),parseFloat(ee.textIndent||0)>0&&(V=new i.default().insert("	").concat(V)),V}function be(G,V){var Q=G.data;if(G.parentNode.tagName==="O:P")return V.insert(Q.trim());if(Q.trim().length===0&&G.parentNode.classList.contains("ql-clipboard"))return V;if(!K(G.parentNode).whiteSpace.startsWith("pre")){var ee=function(ie,se){return se=se.replace(/[^\u00a0]/g,""),se.length<1&&ie?" ":se};Q=Q.replace(/\r\n/g," ").replace(/\n/g," "),Q=Q.replace(/\s\s+/g,ee.bind(ee,!0)),(G.previousSibling==null&&x(G.parentNode)||G.previousSibling!=null&&x(G.previousSibling))&&(Q=Q.replace(/^\s+/,ee.bind(ee,!1))),(G.nextSibling==null&&x(G.parentNode)||G.nextSibling!=null&&x(G.nextSibling))&&(Q=Q.replace(/\s+$/,ee.bind(ee,!1)))}return V.insert(Q)}t.default=O,t.matchAttributor=F,t.matchBlot=U,t.matchNewline=ue,t.matchSpacing=de,t.matchText=be},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function u(c,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,o,a){return o&&u(c.prototype,o),a&&u(c,a),c}}(),m=function u(c,o,a){c===null&&(c=Function.prototype);var l=Object.getOwnPropertyDescriptor(c,o);if(l===void 0){var b=Object.getPrototypeOf(c);return b===null?void 0:u(b,o,a)}else{if("value"in l)return l.value;var s=l.get;return s===void 0?void 0:s.call(a)}},y=r(6),g=d(y);function d(u){return u&&u.__esModule?u:{default:u}}function f(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")}function i(u,c){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:u}function e(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);u.prototype=Object.create(c&&c.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(u,c):u.__proto__=c)}var n=function(u){e(c,u);function c(){return f(this,c),i(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return w(c,[{key:"optimize",value:function(a){m(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"optimize",this).call(this,a),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return m(c.__proto__||Object.getPrototypeOf(c),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),c}(g.default);n.blotName="bold",n.tagName=["STRONG","B"],t.default=n},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.addControls=t.default=void 0;var w=function(){function S(D,N){var P=[],B=!0,H=!1,R=void 0;try{for(var Y=D[Symbol.iterator](),C;!(B=(C=Y.next()).done)&&(P.push(C.value),!(N&&P.length===N));B=!0);}catch(M){H=!0,R=M}finally{try{!B&&Y.return&&Y.return()}finally{if(H)throw R}}return P}return function(D,N){if(Array.isArray(D))return D;if(Symbol.iterator in Object(D))return S(D,N);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function S(D,N){for(var P=0;P<N.length;P++){var B=N[P];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(D,B.key,B)}}return function(D,N,P){return N&&S(D.prototype,N),P&&S(D,P),D}}(),y=r(2),g=a(y),d=r(0),f=a(d),i=r(5),e=a(i),n=r(10),u=a(n),c=r(9),o=a(c);function a(S){return S&&S.__esModule?S:{default:S}}function l(S,D,N){return D in S?Object.defineProperty(S,D,{value:N,enumerable:!0,configurable:!0,writable:!0}):S[D]=N,S}function b(S,D){if(!(S instanceof D))throw new TypeError("Cannot call a class as a function")}function s(S,D){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D&&(typeof D=="object"||typeof D=="function")?D:S}function v(S,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof D);S.prototype=Object.create(D&&D.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),D&&(Object.setPrototypeOf?Object.setPrototypeOf(S,D):S.__proto__=D)}var E=(0,u.default)("quill:toolbar"),_=function(S){v(D,S);function D(N,P){b(this,D);var B=s(this,(D.__proto__||Object.getPrototypeOf(D)).call(this,N,P));if(Array.isArray(B.options.container)){var H=document.createElement("div");T(H,B.options.container),N.container.parentNode.insertBefore(H,N.container),B.container=H}else typeof B.options.container=="string"?B.container=document.querySelector(B.options.container):B.container=B.options.container;if(!(B.container instanceof HTMLElement)){var R;return R=E.error("Container required for toolbar",B.options),s(B,R)}return B.container.classList.add("ql-toolbar"),B.controls=[],B.handlers={},Object.keys(B.options.handlers).forEach(function(Y){B.addHandler(Y,B.options.handlers[Y])}),[].forEach.call(B.container.querySelectorAll("button, select"),function(Y){B.attach(Y)}),B.quill.on(e.default.events.EDITOR_CHANGE,function(Y,C){Y===e.default.events.SELECTION_CHANGE&&B.update(C)}),B.quill.on(e.default.events.SCROLL_OPTIMIZE,function(){var Y=B.quill.selection.getRange(),C=w(Y,1),M=C[0];B.update(M)}),B}return m(D,[{key:"addHandler",value:function(P,B){this.handlers[P]=B}},{key:"attach",value:function(P){var B=this,H=[].find.call(P.classList,function(Y){return Y.indexOf("ql-")===0});if(H){if(H=H.slice(3),P.tagName==="BUTTON"&&P.setAttribute("type","button"),this.handlers[H]==null){if(this.quill.scroll.whitelist!=null&&this.quill.scroll.whitelist[H]==null){E.warn("ignoring attaching to disabled format",H,P);return}if(f.default.query(H)==null){E.warn("ignoring attaching to nonexistent format",H,P);return}}var R=P.tagName==="SELECT"?"change":"click";P.addEventListener(R,function(Y){var C=void 0;if(P.tagName==="SELECT"){if(P.selectedIndex<0)return;var M=P.options[P.selectedIndex];M.hasAttribute("selected")?C=!1:C=M.value||!1}else P.classList.contains("ql-active")?C=!1:C=P.value||!P.hasAttribute("value"),Y.preventDefault();B.quill.focus();var I=B.quill.selection.getRange(),O=w(I,1),W=O[0];if(B.handlers[H]!=null)B.handlers[H].call(B,C);else if(f.default.query(H).prototype instanceof f.default.Embed){if(C=prompt("Enter "+H),!C)return;B.quill.updateContents(new g.default().retain(W.index).delete(W.length).insert(l({},H,C)),e.default.sources.USER)}else B.quill.format(H,C,e.default.sources.USER);B.update(W)}),this.controls.push([H,P])}}},{key:"update",value:function(P){var B=P==null?{}:this.quill.getFormat(P);this.controls.forEach(function(H){var R=w(H,2),Y=R[0],C=R[1];if(C.tagName==="SELECT"){var M=void 0;if(P==null)M=null;else if(B[Y]==null)M=C.querySelector("option[selected]");else if(!Array.isArray(B[Y])){var I=B[Y];typeof I=="string"&&(I=I.replace(/\"/g,'\\"')),M=C.querySelector('option[value="'+I+'"]')}M==null?(C.value="",C.selectedIndex=-1):M.selected=!0}else if(P==null)C.classList.remove("ql-active");else if(C.hasAttribute("value")){var O=B[Y]===C.getAttribute("value")||B[Y]!=null&&B[Y].toString()===C.getAttribute("value")||B[Y]==null&&!C.getAttribute("value");C.classList.toggle("ql-active",O)}else C.classList.toggle("ql-active",B[Y]!=null)})}}]),D}(o.default);_.DEFAULTS={};function z(S,D,N){var P=document.createElement("button");P.setAttribute("type","button"),P.classList.add("ql-"+D),N!=null&&(P.value=N),S.appendChild(P)}function T(S,D){Array.isArray(D[0])||(D=[D]),D.forEach(function(N){var P=document.createElement("span");P.classList.add("ql-formats"),N.forEach(function(B){if(typeof B=="string")z(P,B);else{var H=Object.keys(B)[0],R=B[H];Array.isArray(R)?A(P,H,R):z(P,H,R)}}),S.appendChild(P)})}function A(S,D,N){var P=document.createElement("select");P.classList.add("ql-"+D),N.forEach(function(B){var H=document.createElement("option");B!==!1?H.setAttribute("value",B):H.setAttribute("selected","selected"),P.appendChild(H)}),S.appendChild(P)}_.DEFAULTS={container:null,handlers:{clean:function(){var D=this,N=this.quill.getSelection();if(N!=null)if(N.length==0){var P=this.quill.getFormat();Object.keys(P).forEach(function(B){f.default.query(B,f.default.Scope.INLINE)!=null&&D.quill.format(B,!1)})}else this.quill.removeFormat(N,e.default.sources.USER)},direction:function(D){var N=this.quill.getFormat().align;D==="rtl"&&N==null?this.quill.format("align","right",e.default.sources.USER):!D&&N==="right"&&this.quill.format("align",!1,e.default.sources.USER),this.quill.format("direction",D,e.default.sources.USER)},indent:function(D){var N=this.quill.getSelection(),P=this.quill.getFormat(N),B=parseInt(P.indent||0);if(D==="+1"||D==="-1"){var H=D==="+1"?1:-1;P.direction==="rtl"&&(H*=-1),this.quill.format("indent",B+H,e.default.sources.USER)}},link:function(D){D===!0&&(D=prompt("Enter link URL:")),this.quill.format("link",D,e.default.sources.USER)},list:function(D){var N=this.quill.getSelection(),P=this.quill.getFormat(N);D==="check"?P.list==="checked"||P.list==="unchecked"?this.quill.format("list",!1,e.default.sources.USER):this.quill.format("list","unchecked",e.default.sources.USER):this.quill.format("list",D,e.default.sources.USER)}}},t.default=_,t.addControls=T},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function u(c,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,o,a){return o&&u(c.prototype,o),a&&u(c,a),c}}(),m=function u(c,o,a){c===null&&(c=Function.prototype);var l=Object.getOwnPropertyDescriptor(c,o);if(l===void 0){var b=Object.getPrototypeOf(c);return b===null?void 0:u(b,o,a)}else{if("value"in l)return l.value;var s=l.get;return s===void 0?void 0:s.call(a)}},y=r(28),g=d(y);function d(u){return u&&u.__esModule?u:{default:u}}function f(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")}function i(u,c){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:u}function e(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);u.prototype=Object.create(c&&c.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(u,c):u.__proto__=c)}var n=function(u){e(c,u);function c(o,a){f(this,c);var l=i(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,o));return l.label.innerHTML=a,l.container.classList.add("ql-color-picker"),[].slice.call(l.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(b){b.classList.add("ql-primary")}),l}return w(c,[{key:"buildItem",value:function(a){var l=m(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"buildItem",this).call(this,a);return l.style.backgroundColor=a.getAttribute("value")||"",l}},{key:"selectItem",value:function(a,l){m(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"selectItem",this).call(this,a,l);var b=this.label.querySelector(".ql-color-label"),s=a&&a.getAttribute("data-value")||"";b&&(b.tagName==="line"?b.style.stroke=s:b.style.fill=s)}}]),c}(g.default);t.default=n},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function u(c,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,o,a){return o&&u(c.prototype,o),a&&u(c,a),c}}(),m=function u(c,o,a){c===null&&(c=Function.prototype);var l=Object.getOwnPropertyDescriptor(c,o);if(l===void 0){var b=Object.getPrototypeOf(c);return b===null?void 0:u(b,o,a)}else{if("value"in l)return l.value;var s=l.get;return s===void 0?void 0:s.call(a)}},y=r(28),g=d(y);function d(u){return u&&u.__esModule?u:{default:u}}function f(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")}function i(u,c){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:u}function e(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);u.prototype=Object.create(c&&c.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(u,c):u.__proto__=c)}var n=function(u){e(c,u);function c(o,a){f(this,c);var l=i(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,o));return l.container.classList.add("ql-icon-picker"),[].forEach.call(l.container.querySelectorAll(".ql-picker-item"),function(b){b.innerHTML=a[b.getAttribute("data-value")||""]}),l.defaultItem=l.container.querySelector(".ql-selected"),l.selectItem(l.defaultItem),l}return w(c,[{key:"selectItem",value:function(a,l){m(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"selectItem",this).call(this,a,l),a=a||this.defaultItem,this.label.innerHTML=a.innerHTML}}]),c}(g.default);t.default=n},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function g(d,f){for(var i=0;i<f.length;i++){var e=f[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(d,e.key,e)}}return function(d,f,i){return f&&g(d.prototype,f),i&&g(d,i),d}}();function m(g,d){if(!(g instanceof d))throw new TypeError("Cannot call a class as a function")}var y=function(){function g(d,f){var i=this;m(this,g),this.quill=d,this.boundsContainer=f||document.body,this.root=d.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){i.root.style.marginTop=-1*i.quill.root.scrollTop+"px"}),this.hide()}return w(g,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(f){var i=f.left+f.width/2-this.root.offsetWidth/2,e=f.bottom+this.quill.root.scrollTop;this.root.style.left=i+"px",this.root.style.top=e+"px",this.root.classList.remove("ql-flip");var n=this.boundsContainer.getBoundingClientRect(),u=this.root.getBoundingClientRect(),c=0;if(u.right>n.right&&(c=n.right-u.right,this.root.style.left=i+c+"px"),u.left<n.left&&(c=n.left-u.left,this.root.style.left=i+c+"px"),u.bottom>n.bottom){var o=u.bottom-u.top,a=f.bottom-f.top+o;this.root.style.top=e-a+"px",this.root.classList.add("ql-flip")}return c}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),g}();t.default=y},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function A(S,D){var N=[],P=!0,B=!1,H=void 0;try{for(var R=S[Symbol.iterator](),Y;!(P=(Y=R.next()).done)&&(N.push(Y.value),!(D&&N.length===D));P=!0);}catch(C){B=!0,H=C}finally{try{!P&&R.return&&R.return()}finally{if(B)throw H}}return N}return function(S,D){if(Array.isArray(S))return S;if(Symbol.iterator in Object(S))return A(S,D);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function A(S,D,N){S===null&&(S=Function.prototype);var P=Object.getOwnPropertyDescriptor(S,D);if(P===void 0){var B=Object.getPrototypeOf(S);return B===null?void 0:A(B,D,N)}else{if("value"in P)return P.value;var H=P.get;return H===void 0?void 0:H.call(N)}},y=function(){function A(S,D){for(var N=0;N<D.length;N++){var P=D[N];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(S,P.key,P)}}return function(S,D,N){return D&&A(S.prototype,D),N&&A(S,N),S}}(),g=r(3),d=b(g),f=r(8),i=b(f),e=r(43),n=b(e),u=r(27),c=b(u),o=r(15),a=r(41),l=b(a);function b(A){return A&&A.__esModule?A:{default:A}}function s(A,S){if(!(A instanceof S))throw new TypeError("Cannot call a class as a function")}function v(A,S){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:A}function E(A,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);A.prototype=Object.create(S&&S.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(A,S):A.__proto__=S)}var _=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],z=function(A){E(S,A);function S(D,N){s(this,S),N.modules.toolbar!=null&&N.modules.toolbar.container==null&&(N.modules.toolbar.container=_);var P=v(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,D,N));return P.quill.container.classList.add("ql-snow"),P}return y(S,[{key:"extendToolbar",value:function(N){N.container.classList.add("ql-snow"),this.buildButtons([].slice.call(N.container.querySelectorAll("button")),l.default),this.buildPickers([].slice.call(N.container.querySelectorAll("select")),l.default),this.tooltip=new T(this.quill,this.options.bounds),N.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(P,B){N.handlers.link.call(N,!B.format.link)})}}]),S}(n.default);z.DEFAULTS=(0,d.default)(!0,{},n.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(S){if(S){var D=this.quill.getSelection();if(D==null||D.length==0)return;var N=this.quill.getText(D);/^\S+@\S+\.\S+$/.test(N)&&N.indexOf("mailto:")!==0&&(N="mailto:"+N);var P=this.quill.theme.tooltip;P.edit("link",N)}else this.quill.format("link",!1)}}}}});var T=function(A){E(S,A);function S(D,N){s(this,S);var P=v(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,D,N));return P.preview=P.root.querySelector("a.ql-preview"),P}return y(S,[{key:"listen",value:function(){var N=this;m(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(P){N.root.classList.contains("ql-editing")?N.save():N.edit("link",N.preview.textContent),P.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(P){if(N.linkRange!=null){var B=N.linkRange;N.restoreFocus(),N.quill.formatText(B,"link",!1,i.default.sources.USER),delete N.linkRange}P.preventDefault(),N.hide()}),this.quill.on(i.default.events.SELECTION_CHANGE,function(P,B,H){if(P!=null){if(P.length===0&&H===i.default.sources.USER){var R=N.quill.scroll.descendant(c.default,P.index),Y=w(R,2),C=Y[0],M=Y[1];if(C!=null){N.linkRange=new o.Range(P.index-M,C.length());var I=c.default.formats(C.domNode);N.preview.textContent=I,N.preview.setAttribute("href",I),N.show(),N.position(N.quill.getBounds(N.linkRange));return}}else delete N.linkRange;N.hide()}})}},{key:"show",value:function(){m(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),S}(e.BaseTooltip);T.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),t.default=z},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(29),m=X(w),y=r(36),g=r(38),d=r(64),f=r(65),i=X(f),e=r(66),n=X(e),u=r(67),c=X(u),o=r(37),a=r(26),l=r(39),b=r(40),s=r(56),v=X(s),E=r(68),_=X(E),z=r(27),T=X(z),A=r(69),S=X(A),D=r(70),N=X(D),P=r(71),B=X(P),H=r(72),R=X(H),Y=r(73),C=X(Y),M=r(13),I=X(M),O=r(74),W=X(O),K=r(75),L=X(K),x=r(57),j=X(x),q=r(41),F=X(q),U=r(28),ne=X(U),te=r(59),re=X(te),ue=r(60),de=X(ue),ke=r(61),be=X(ke),G=r(108),V=X(G),Q=r(62),ee=X(Q);function X(ie){return ie&&ie.__esModule?ie:{default:ie}}m.default.register({"attributors/attribute/direction":g.DirectionAttribute,"attributors/class/align":y.AlignClass,"attributors/class/background":o.BackgroundClass,"attributors/class/color":a.ColorClass,"attributors/class/direction":g.DirectionClass,"attributors/class/font":l.FontClass,"attributors/class/size":b.SizeClass,"attributors/style/align":y.AlignStyle,"attributors/style/background":o.BackgroundStyle,"attributors/style/color":a.ColorStyle,"attributors/style/direction":g.DirectionStyle,"attributors/style/font":l.FontStyle,"attributors/style/size":b.SizeStyle},!0),m.default.register({"formats/align":y.AlignClass,"formats/direction":g.DirectionClass,"formats/indent":d.IndentClass,"formats/background":o.BackgroundStyle,"formats/color":a.ColorStyle,"formats/font":l.FontClass,"formats/size":b.SizeClass,"formats/blockquote":i.default,"formats/code-block":I.default,"formats/header":n.default,"formats/list":c.default,"formats/bold":v.default,"formats/code":M.Code,"formats/italic":_.default,"formats/link":T.default,"formats/script":S.default,"formats/strike":N.default,"formats/underline":B.default,"formats/image":R.default,"formats/video":C.default,"formats/list/item":u.ListItem,"modules/formula":W.default,"modules/syntax":L.default,"modules/toolbar":j.default,"themes/bubble":V.default,"themes/snow":ee.default,"ui/icons":F.default,"ui/picker":ne.default,"ui/icon-picker":de.default,"ui/color-picker":re.default,"ui/tooltip":be.default},!0),t.default=m.default},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.IndentClass=void 0;var w=function(){function c(o,a){for(var l=0;l<a.length;l++){var b=a[l];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(o,b.key,b)}}return function(o,a,l){return a&&c(o.prototype,a),l&&c(o,l),o}}(),m=function c(o,a,l){o===null&&(o=Function.prototype);var b=Object.getOwnPropertyDescriptor(o,a);if(b===void 0){var s=Object.getPrototypeOf(o);return s===null?void 0:c(s,a,l)}else{if("value"in b)return b.value;var v=b.get;return v===void 0?void 0:v.call(l)}},y=r(0),g=d(y);function d(c){return c&&c.__esModule?c:{default:c}}function f(c,o){if(!(c instanceof o))throw new TypeError("Cannot call a class as a function")}function i(c,o){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o&&(typeof o=="object"||typeof o=="function")?o:c}function e(c,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);c.prototype=Object.create(o&&o.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(c,o):c.__proto__=o)}var n=function(c){e(o,c);function o(){return f(this,o),i(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return w(o,[{key:"add",value:function(l,b){if(b==="+1"||b==="-1"){var s=this.value(l)||0;b=b==="+1"?s+1:s-1}return b===0?(this.remove(l),!0):m(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"add",this).call(this,l,b)}},{key:"canAdd",value:function(l,b){return m(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"canAdd",this).call(this,l,b)||m(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"canAdd",this).call(this,l,parseInt(b))}},{key:"value",value:function(l){return parseInt(m(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"value",this).call(this,l))||void 0}}]),o}(g.default.Attributor.Class),u=new n("indent","ql-indent",{scope:g.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});t.IndentClass=u},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(4),m=y(w);function y(e){return e&&e.__esModule?e:{default:e}}function g(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:e}function f(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=function(e){f(n,e);function n(){return g(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return n}(m.default);i.blotName="blockquote",i.tagName="blockquote",t.default=i},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function n(u,c){for(var o=0;o<c.length;o++){var a=c[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(u,a.key,a)}}return function(u,c,o){return c&&n(u.prototype,c),o&&n(u,o),u}}(),m=r(4),y=g(m);function g(n){return n&&n.__esModule?n:{default:n}}function d(n,u){if(!(n instanceof u))throw new TypeError("Cannot call a class as a function")}function f(n,u){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:n}function i(n,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);n.prototype=Object.create(u&&u.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(n,u):n.__proto__=u)}var e=function(n){i(u,n);function u(){return d(this,u),f(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return w(u,null,[{key:"formats",value:function(o){return this.tagName.indexOf(o.tagName)+1}}]),u}(y.default);e.blotName="header",e.tagName=["H1","H2","H3","H4","H5","H6"],t.default=e},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ListItem=void 0;var w=function(){function s(v,E){for(var _=0;_<E.length;_++){var z=E[_];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(v,z.key,z)}}return function(v,E,_){return E&&s(v.prototype,E),_&&s(v,_),v}}(),m=function s(v,E,_){v===null&&(v=Function.prototype);var z=Object.getOwnPropertyDescriptor(v,E);if(z===void 0){var T=Object.getPrototypeOf(v);return T===null?void 0:s(T,E,_)}else{if("value"in z)return z.value;var A=z.get;return A===void 0?void 0:A.call(_)}},y=r(0),g=n(y),d=r(4),f=n(d),i=r(25),e=n(i);function n(s){return s&&s.__esModule?s:{default:s}}function u(s,v,E){return v in s?Object.defineProperty(s,v,{value:E,enumerable:!0,configurable:!0,writable:!0}):s[v]=E,s}function c(s,v){if(!(s instanceof v))throw new TypeError("Cannot call a class as a function")}function o(s,v){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:s}function a(s,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);s.prototype=Object.create(v&&v.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(s,v):s.__proto__=v)}var l=function(s){a(v,s);function v(){return c(this,v),o(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return w(v,[{key:"format",value:function(_,z){_===b.blotName&&!z?this.replaceWith(g.default.create(this.statics.scope)):m(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"format",this).call(this,_,z)}},{key:"remove",value:function(){this.prev==null&&this.next==null?this.parent.remove():m(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(_,z){return this.parent.isolate(this.offset(this.parent),this.length()),_===this.parent.statics.blotName?(this.parent.replaceWith(_,z),this):(this.parent.unwrap(),m(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"replaceWith",this).call(this,_,z))}}],[{key:"formats",value:function(_){return _.tagName===this.tagName?void 0:m(v.__proto__||Object.getPrototypeOf(v),"formats",this).call(this,_)}}]),v}(f.default);l.blotName="list-item",l.tagName="LI";var b=function(s){a(v,s),w(v,null,[{key:"create",value:function(_){var z=_==="ordered"?"OL":"UL",T=m(v.__proto__||Object.getPrototypeOf(v),"create",this).call(this,z);return(_==="checked"||_==="unchecked")&&T.setAttribute("data-checked",_==="checked"),T}},{key:"formats",value:function(_){if(_.tagName==="OL")return"ordered";if(_.tagName==="UL")return _.hasAttribute("data-checked")?_.getAttribute("data-checked")==="true"?"checked":"unchecked":"bullet"}}]);function v(E){c(this,v);var _=o(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,E)),z=function(A){if(A.target.parentNode===E){var S=_.statics.formats(E),D=g.default.find(A.target);S==="checked"?D.format("list","unchecked"):S==="unchecked"&&D.format("list","checked")}};return E.addEventListener("touchstart",z),E.addEventListener("mousedown",z),_}return w(v,[{key:"format",value:function(_,z){this.children.length>0&&this.children.tail.format(_,z)}},{key:"formats",value:function(){return u({},this.statics.blotName,this.statics.formats(this.domNode))}},{key:"insertBefore",value:function(_,z){if(_ instanceof l)m(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"insertBefore",this).call(this,_,z);else{var T=z==null?this.length():z.offset(this),A=this.split(T);A.parent.insertBefore(_,A)}}},{key:"optimize",value:function(_){m(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"optimize",this).call(this,_);var z=this.next;z!=null&&z.prev===this&&z.statics.blotName===this.statics.blotName&&z.domNode.tagName===this.domNode.tagName&&z.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(z.moveChildren(this),z.remove())}},{key:"replace",value:function(_){if(_.statics.blotName!==this.statics.blotName){var z=g.default.create(this.statics.defaultChild);_.moveChildren(z),this.appendChild(z)}m(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"replace",this).call(this,_)}}]),v}(e.default);b.blotName="list",b.scope=g.default.Scope.BLOCK_BLOT,b.tagName=["OL","UL"],b.defaultChild="list-item",b.allowedChildren=[l],t.ListItem=l,t.default=b},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(56),m=y(w);function y(e){return e&&e.__esModule?e:{default:e}}function g(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:e}function f(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=function(e){f(n,e);function n(){return g(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return n}(m.default);i.blotName="italic",i.tagName=["EM","I"],t.default=i},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function u(c,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,o,a){return o&&u(c.prototype,o),a&&u(c,a),c}}(),m=function u(c,o,a){c===null&&(c=Function.prototype);var l=Object.getOwnPropertyDescriptor(c,o);if(l===void 0){var b=Object.getPrototypeOf(c);return b===null?void 0:u(b,o,a)}else{if("value"in l)return l.value;var s=l.get;return s===void 0?void 0:s.call(a)}},y=r(6),g=d(y);function d(u){return u&&u.__esModule?u:{default:u}}function f(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")}function i(u,c){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:u}function e(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);u.prototype=Object.create(c&&c.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(u,c):u.__proto__=c)}var n=function(u){e(c,u);function c(){return f(this,c),i(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return w(c,null,[{key:"create",value:function(a){return a==="super"?document.createElement("sup"):a==="sub"?document.createElement("sub"):m(c.__proto__||Object.getPrototypeOf(c),"create",this).call(this,a)}},{key:"formats",value:function(a){if(a.tagName==="SUB")return"sub";if(a.tagName==="SUP")return"super"}}]),c}(g.default);n.blotName="script",n.tagName=["SUB","SUP"],t.default=n},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(6),m=y(w);function y(e){return e&&e.__esModule?e:{default:e}}function g(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:e}function f(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=function(e){f(n,e);function n(){return g(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return n}(m.default);i.blotName="strike",i.tagName="S",t.default=i},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=r(6),m=y(w);function y(e){return e&&e.__esModule?e:{default:e}}function g(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:e}function f(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=function(e){f(n,e);function n(){return g(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return n}(m.default);i.blotName="underline",i.tagName="U",t.default=i},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function o(a,l){for(var b=0;b<l.length;b++){var s=l[b];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,s.key,s)}}return function(a,l,b){return l&&o(a.prototype,l),b&&o(a,b),a}}(),m=function o(a,l,b){a===null&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,l);if(s===void 0){var v=Object.getPrototypeOf(a);return v===null?void 0:o(v,l,b)}else{if("value"in s)return s.value;var E=s.get;return E===void 0?void 0:E.call(b)}},y=r(0),g=f(y),d=r(27);function f(o){return o&&o.__esModule?o:{default:o}}function i(o,a){if(!(o instanceof a))throw new TypeError("Cannot call a class as a function")}function e(o,a){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a&&(typeof a=="object"||typeof a=="function")?a:o}function n(o,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);o.prototype=Object.create(a&&a.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(o,a):o.__proto__=a)}var u=["alt","height","width"],c=function(o){n(a,o);function a(){return i(this,a),e(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return w(a,[{key:"format",value:function(b,s){u.indexOf(b)>-1?s?this.domNode.setAttribute(b,s):this.domNode.removeAttribute(b):m(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"format",this).call(this,b,s)}}],[{key:"create",value:function(b){var s=m(a.__proto__||Object.getPrototypeOf(a),"create",this).call(this,b);return typeof b=="string"&&s.setAttribute("src",this.sanitize(b)),s}},{key:"formats",value:function(b){return u.reduce(function(s,v){return b.hasAttribute(v)&&(s[v]=b.getAttribute(v)),s},{})}},{key:"match",value:function(b){return/\.(jpe?g|gif|png)$/.test(b)||/^data:image\/.+;base64/.test(b)}},{key:"sanitize",value:function(b){return(0,d.sanitize)(b,["http","https","data"])?b:"//:0"}},{key:"value",value:function(b){return b.getAttribute("src")}}]),a}(g.default.Embed);c.blotName="image",c.tagName="IMG",t.default=c},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0});var w=function(){function o(a,l){for(var b=0;b<l.length;b++){var s=l[b];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,s.key,s)}}return function(a,l,b){return l&&o(a.prototype,l),b&&o(a,b),a}}(),m=function o(a,l,b){a===null&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,l);if(s===void 0){var v=Object.getPrototypeOf(a);return v===null?void 0:o(v,l,b)}else{if("value"in s)return s.value;var E=s.get;return E===void 0?void 0:E.call(b)}},y=r(4),g=r(27),d=f(g);function f(o){return o&&o.__esModule?o:{default:o}}function i(o,a){if(!(o instanceof a))throw new TypeError("Cannot call a class as a function")}function e(o,a){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a&&(typeof a=="object"||typeof a=="function")?a:o}function n(o,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);o.prototype=Object.create(a&&a.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(o,a):o.__proto__=a)}var u=["height","width"],c=function(o){n(a,o);function a(){return i(this,a),e(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return w(a,[{key:"format",value:function(b,s){u.indexOf(b)>-1?s?this.domNode.setAttribute(b,s):this.domNode.removeAttribute(b):m(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"format",this).call(this,b,s)}}],[{key:"create",value:function(b){var s=m(a.__proto__||Object.getPrototypeOf(a),"create",this).call(this,b);return s.setAttribute("frameborder","0"),s.setAttribute("allowfullscreen",!0),s.setAttribute("src",this.sanitize(b)),s}},{key:"formats",value:function(b){return u.reduce(function(s,v){return b.hasAttribute(v)&&(s[v]=b.getAttribute(v)),s},{})}},{key:"sanitize",value:function(b){return d.default.sanitize(b)}},{key:"value",value:function(b){return b.getAttribute("src")}}]),a}(y.BlockEmbed);c.blotName="video",c.className="ql-video",c.tagName="IFRAME",t.default=c},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.FormulaBlot=void 0;var w=function(){function b(s,v){for(var E=0;E<v.length;E++){var _=v[E];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(s,_.key,_)}}return function(s,v,E){return v&&b(s.prototype,v),E&&b(s,E),s}}(),m=function b(s,v,E){s===null&&(s=Function.prototype);var _=Object.getOwnPropertyDescriptor(s,v);if(_===void 0){var z=Object.getPrototypeOf(s);return z===null?void 0:b(z,v,E)}else{if("value"in _)return _.value;var T=_.get;return T===void 0?void 0:T.call(E)}},y=r(35),g=n(y),d=r(5),f=n(d),i=r(9),e=n(i);function n(b){return b&&b.__esModule?b:{default:b}}function u(b,s){if(!(b instanceof s))throw new TypeError("Cannot call a class as a function")}function c(b,s){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s&&(typeof s=="object"||typeof s=="function")?s:b}function o(b,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);b.prototype=Object.create(s&&s.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(b,s):b.__proto__=s)}var a=function(b){o(s,b);function s(){return u(this,s),c(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return w(s,null,[{key:"create",value:function(E){var _=m(s.__proto__||Object.getPrototypeOf(s),"create",this).call(this,E);return typeof E=="string"&&(window.katex.render(E,_,{throwOnError:!1,errorColor:"#f00"}),_.setAttribute("data-value",E)),_}},{key:"value",value:function(E){return E.getAttribute("data-value")}}]),s}(g.default);a.blotName="formula",a.className="ql-formula",a.tagName="SPAN";var l=function(b){o(s,b),w(s,null,[{key:"register",value:function(){f.default.register(a,!0)}}]);function s(){u(this,s);var v=c(this,(s.__proto__||Object.getPrototypeOf(s)).call(this));if(window.katex==null)throw new Error("Formula module requires KaTeX.");return v}return s}(e.default);t.FormulaBlot=a,t.default=l},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CodeToken=t.CodeBlock=void 0;var w=function(){function E(_,z){for(var T=0;T<z.length;T++){var A=z[T];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(_,A.key,A)}}return function(_,z,T){return z&&E(_.prototype,z),T&&E(_,T),_}}(),m=function E(_,z,T){_===null&&(_=Function.prototype);var A=Object.getOwnPropertyDescriptor(_,z);if(A===void 0){var S=Object.getPrototypeOf(_);return S===null?void 0:E(S,z,T)}else{if("value"in A)return A.value;var D=A.get;return D===void 0?void 0:D.call(T)}},y=r(0),g=c(y),d=r(5),f=c(d),i=r(9),e=c(i),n=r(13),u=c(n);function c(E){return E&&E.__esModule?E:{default:E}}function o(E,_){if(!(E instanceof _))throw new TypeError("Cannot call a class as a function")}function a(E,_){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:E}function l(E,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);E.prototype=Object.create(_&&_.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(E,_):E.__proto__=_)}var b=function(E){l(_,E);function _(){return o(this,_),a(this,(_.__proto__||Object.getPrototypeOf(_)).apply(this,arguments))}return w(_,[{key:"replaceWith",value:function(T){this.domNode.textContent=this.domNode.textContent,this.attach(),m(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"replaceWith",this).call(this,T)}},{key:"highlight",value:function(T){var A=this.domNode.textContent;this.cachedText!==A&&((A.trim().length>0||this.cachedText==null)&&(this.domNode.innerHTML=T(A),this.domNode.normalize(),this.attach()),this.cachedText=A)}}]),_}(u.default);b.className="ql-syntax";var s=new g.default.Attributor.Class("token","hljs",{scope:g.default.Scope.INLINE}),v=function(E){l(_,E),w(_,null,[{key:"register",value:function(){f.default.register(s,!0),f.default.register(b,!0)}}]);function _(z,T){o(this,_);var A=a(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,z,T));if(typeof A.options.highlight!="function")throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var S=null;return A.quill.on(f.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(S),S=setTimeout(function(){A.highlight(),S=null},A.options.interval)}),A.highlight(),A}return w(_,[{key:"highlight",value:function(){var T=this;if(!this.quill.selection.composing){this.quill.update(f.default.sources.USER);var A=this.quill.getSelection();this.quill.scroll.descendants(b).forEach(function(S){S.highlight(T.options.highlight)}),this.quill.update(f.default.sources.SILENT),A!=null&&this.quill.setSelection(A,f.default.sources.SILENT)}}}]),_}(e.default);v.DEFAULTS={highlight:function(){return window.hljs==null?null:function(E){var _=window.hljs.highlightAuto(E);return _.value}}(),interval:1e3},t.CodeBlock=b,t.CodeToken=s,t.default=v},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(h,t){h.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(h,t){h.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(h,t){h.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(h,t){h.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(h,t){h.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(h,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BubbleTooltip=void 0;var w=function _(z,T,A){z===null&&(z=Function.prototype);var S=Object.getOwnPropertyDescriptor(z,T);if(S===void 0){var D=Object.getPrototypeOf(z);return D===null?void 0:_(D,T,A)}else{if("value"in S)return S.value;var N=S.get;return N===void 0?void 0:N.call(A)}},m=function(){function _(z,T){for(var A=0;A<T.length;A++){var S=T[A];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(z,S.key,S)}}return function(z,T,A){return T&&_(z.prototype,T),A&&_(z,A),z}}(),y=r(3),g=o(y),d=r(8),f=o(d),i=r(43),e=o(i),n=r(15),u=r(41),c=o(u);function o(_){return _&&_.__esModule?_:{default:_}}function a(_,z){if(!(_ instanceof z))throw new TypeError("Cannot call a class as a function")}function l(_,z){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z&&(typeof z=="object"||typeof z=="function")?z:_}function b(_,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof z);_.prototype=Object.create(z&&z.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),z&&(Object.setPrototypeOf?Object.setPrototypeOf(_,z):_.__proto__=z)}var s=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],v=function(_){b(z,_);function z(T,A){a(this,z),A.modules.toolbar!=null&&A.modules.toolbar.container==null&&(A.modules.toolbar.container=s);var S=l(this,(z.__proto__||Object.getPrototypeOf(z)).call(this,T,A));return S.quill.container.classList.add("ql-bubble"),S}return m(z,[{key:"extendToolbar",value:function(A){this.tooltip=new E(this.quill,this.options.bounds),this.tooltip.root.appendChild(A.container),this.buildButtons([].slice.call(A.container.querySelectorAll("button")),c.default),this.buildPickers([].slice.call(A.container.querySelectorAll("select")),c.default)}}]),z}(e.default);v.DEFAULTS=(0,g.default)(!0,{},e.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(z){z?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var E=function(_){b(z,_);function z(T,A){a(this,z);var S=l(this,(z.__proto__||Object.getPrototypeOf(z)).call(this,T,A));return S.quill.on(f.default.events.EDITOR_CHANGE,function(D,N,P,B){if(D===f.default.events.SELECTION_CHANGE)if(N!=null&&N.length>0&&B===f.default.sources.USER){S.show(),S.root.style.left="0px",S.root.style.width="",S.root.style.width=S.root.offsetWidth+"px";var H=S.quill.getLines(N.index,N.length);if(H.length===1)S.position(S.quill.getBounds(N));else{var R=H[H.length-1],Y=S.quill.getIndex(R),C=Math.min(R.length()-1,N.index+N.length-Y),M=S.quill.getBounds(new n.Range(Y,C));S.position(M)}}else document.activeElement!==S.textbox&&S.quill.hasFocus()&&S.hide()}),S}return m(z,[{key:"listen",value:function(){var A=this;w(z.prototype.__proto__||Object.getPrototypeOf(z.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){A.root.classList.remove("ql-editing")}),this.quill.on(f.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!A.root.classList.contains("ql-hidden")){var S=A.quill.getSelection();S!=null&&A.position(A.quill.getBounds(S))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(A){var S=w(z.prototype.__proto__||Object.getPrototypeOf(z.prototype),"position",this).call(this,A),D=this.root.querySelector(".ql-tooltip-arrow");if(D.style.marginLeft="",S===0)return S;D.style.marginLeft=-1*S-D.offsetWidth/2+"px"}}]),z}(i.BaseTooltip);E.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),t.BubbleTooltip=E,t.default=v},function(h,t,r){h.exports=r(63)}]).default})})(dt);var Ct=dt.exports;const jt=Wt(Ct);function Lt(p,k){const h=new jt(p,{modules:{toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline","strike"],["link","code-block"]]},placeholder:"Type something...",theme:"snow",...k}),t=p.getElementsByClassName("ql-editor")[0];h.on("text-change",function(r,w,m){p.dispatchEvent(new CustomEvent("text-change",{detail:{source:m,text:{html:t.innerHTML,text:h.getText()}}}))}),h.on("selection-change",function(r,w,m){p.dispatchEvent(new CustomEvent("selection-change",{detail:{range:r,oldRange:w,source:m}}))})}const Fe=[];function Rt(p,k){return{subscribe:We(p,k).subscribe}}function We(p,k=fe){let h;const t=new Set;function r(y){if(Te(p,y)&&(p=y,h)){const g=!Fe.length;for(const d of t)d[1](),Fe.push(d,p);if(g){for(let d=0;d<Fe.length;d+=2)Fe[d][0](Fe[d+1]);Fe.length=0}}}function w(y){r(y(p))}function m(y,g=fe){const d=[y,g];return t.add(d),t.size===1&&(h=k(r,w)||fe),y(p),()=>{t.delete(d),t.size===0&&h&&(h(),h=null)}}return{set:r,update:w,subscribe:m}}function Ht(p,k,h){const t=!Array.isArray(p),r=t?[p]:p;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const w=k.length<2;return Rt(h,(m,y)=>{let g=!1;const d=[];let f=0,i=fe;const e=()=>{if(f)return;i();const u=k(t?d[0]:d,m,y);w?m(u):i=tn(u)?u:fe},n=r.map((u,c)=>nt(u,o=>{d[c]=o,f&=~(1<<c),g&&e()},()=>{f|=1<<c}));return g=!0,e(),function(){ve(n),i(),g=!1}})}const On=[{src:"To reduce the symptoms of asthma: Use prescribed inhalers regularly and avoid known triggers such as allergens and air pollution.",display_src:"To reduce the symptoms of asthma: Use prescribed inhalers regularly and avoid known triggers such as allergens and air pollution.",ref:"Um die Asthmasymptome zu lindern: Verwenden Sie regelmäßig verschriebene Inhalatoren und vermeiden Sie bekannte Auslöser wie Allergene und Luftverschmutzung.",show_ref:!1},{src:"To reduce the symptoms of gastroesophageal reflux disease (GERD): Elevate the head of your bed, avoid lying down after meals, and limit consumption of spicy, acidic, and fatty foods.",display_src:"To reduce the symptoms of gastroesophageal reflux disease (GERD): Elevate the head of your bed, avoid lying down after meals, and limit consumption of spicy, acidic, and fatty foods.",ref:"Um die Symptome der gastroösophagealen Refluxkrankheit (GERD) zu lindern: Heben Sie das Kopfende Ihres Bettes an, vermeiden Sie es, sich nach den Mahlzeiten hinzulegen, und beschränken Sie den Verzehr scharfer, saurer und fetthaltiger Speisen.",show_ref:!1},{src:"To reduce the symptoms of congestive heart failure: Follow a low-sodium diet, maintain a healthy weight, and take prescribed medications as directed.",display_src:"To reduce the symptoms of congestive heart failure: Follow a low-sodium diet, maintain a healthy weight, and take prescribed medications as directed.",ref:"Um die Symptome einer Herzinsuffizienz zu lindern: Befolgen Sie eine natriumarme Diät, halten Sie ein gesundes Gewicht und nehmen Sie die verschriebenen Medikamente wie angegeben ein.",show_ref:!1},{src:"To reduce the symptoms of diabetes: Monitor blood sugar levels regularly, maintain a balanced diet, and engage in regular physical activity.",display_src:"To reduce the symptoms of diabetes: Monitor blood sugar levels regularly, maintain a balanced diet, and engage in regular physical activity.",ref:"Um die Symptome von Diabetes zu lindern: Überwachen Sie regelmäßig den Blutzuckerspiegel, achten Sie auf eine ausgewogene Ernährung und treiben Sie regelmäßig Sport.",show_ref:!1},{src:"To reduce the symptoms of irritable bowel syndrome (IBS): Incorporate stress management techniques, avoid trigger foods, and seek medical advice for a tailored treatment plan.",display_src:"To reduce the symptoms of irritable bowel syndrome (IBS): Incorporate stress management techniques, avoid trigger foods, and seek medical advice for a tailored treatment plan.",ref:"Um die Symptome des Reizdarmsyndroms (IBS) zu lindern: Integrieren Sie Techniken zur Stressbewältigung, vermeiden Sie auslösende Nahrungsmittel und suchen Sie ärztlichen Rat für einen maßgeschneiderten Behandlungsplan.",show_ref:!1},{src:"To reduce the symptoms of arthritis: Engage in low-impact exercises, apply heat or cold therapy, and maintain a healthy weight to reduce joint stress.",display_src:"To reduce the symptoms of arthritis: Engage in low-impact exercises, apply heat or cold therapy, and maintain a healthy weight to reduce joint stress.",ref:"Um die Symptome von Arthritis zu lindern: Machen Sie sanfte Übungen, wenden Sie eine Wärme- oder Kältetherapie an und halten Sie ein gesundes Gewicht, um die Belastung der Gelenke zu reduzieren.",show_ref:!1},{src:"To reduce the symptoms of chronic obstructive pulmonary disease (COPD): Quit smoking, utilize prescribed medications, and participate in pulmonary rehabilitation programs.",display_src:"To reduce the symptoms of chronic obstructive pulmonary disease (COPD): Quit smoking, utilize prescribed medications, and participate in pulmonary rehabilitation programs.",ref:"Um die Symptome einer chronisch obstruktiven Lungenerkrankung (COPD) zu lindern: Hören Sie mit dem Rauchen auf, nehmen Sie verschriebene Medikamente ein und nehmen Sie an Lungenrehabilitationsprogrammen teil.",show_ref:!1},{src:"To reduce the symptoms of migraine headaches: Identify and avoid triggers, maintain a regular sleep schedule, and take prescribed medications as directed.",display_src:"To reduce the symptoms of migraine headaches: Identify and avoid triggers, maintain a regular sleep schedule, and take prescribed medications as directed.",ref:"Um die Symptome von Migränekopfschmerzen zu lindern: Identifizieren und vermeiden Sie Auslöser, halten Sie einen regelmäßigen Schlafplan ein und nehmen Sie verschriebene Medikamente wie angegeben ein.",show_ref:!1},{src:"To reduce the symptoms of anemia: Consume a diet rich in iron and vitamins, take prescribed supplements, and discuss possible underlying causes with your healthcare provider.",display_src:"To reduce the symptoms of anemia: Consume a diet rich in iron and vitamins, take prescribed supplements, and discuss possible underlying causes with your healthcare provider.",ref:"Um die Symptome einer Anämie zu lindern: Nehmen Sie eine eisen- und vitaminreiche Ernährung zu sich, nehmen Sie verschriebene Nahrungsergänzungsmittel ein und besprechen Sie mögliche zugrunde liegende Ursachen mit Ihrem Arzt.",show_ref:!1},{src:"To reduce the symptoms of urinary tract infections (UTIs): Drink plenty of water, avoid irritants such as caffeine and alcohol, and take prescribed antibiotics as directed.",display_src:"To reduce the symptoms of urinary tract infections (UTIs): Drink plenty of water, avoid irritants such as caffeine and alcohol, and take prescribed antibiotics as directed.",ref:"Um die Symptome von Harnwegsinfektionen (HWI) zu lindern: Trinken Sie viel Wasser, vermeiden Sie Reizstoffe wie Koffein und Alkohol und nehmen Sie verschriebene Antibiotika wie verordnet ein.",show_ref:!1},{src:"When you go home, please make sure to: ",display_src:"When you go home, please make sure to: ",ref:"Wenn Sie nach Hause gehen, achten Sie bitte darauf:",show_ref:!1},{src:"Slowly increase your exercise. Do not push yourself too hard.",display_src:"Slowly increase your exercise. Do not push yourself too hard.",ref:"Steigern Sie Ihr Training langsam. Überfordern Sie sich nicht zu sehr.",show_ref:!1},{src:"Change positions slowly",display_src:"Change positions slowly",ref:"Wechseln Sie langsam die Position",show_ref:!1},{src:"Elevate your legs to help reduce swelling and increase blood flow.",display_src:"Elevate your legs to help reduce swelling and increase blood flow.",ref:"Legen Sie Ihre Beine hoch, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your arms to help reduce swelling and increase blood flow.",display_src:"Elevate your arms to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Arme hoch, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your feet to help reduce swelling and increase blood flow.",display_src:"Elevate your feet to help reduce swelling and increase blood flow.",ref:"Lagern Sie Ihre Füße hoch, um Schwellungen zu reduzieren und die Durchblutung zu steigern.",show_ref:!1},{src:"Elevate your hands to help reduce swelling and increase blood flow.",display_src:"Elevate your hands to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Hände hoch, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your ankles to help reduce swelling and increase blood flow.",display_src:"Elevate your ankles to help reduce swelling and increase blood flow.",ref:"Legen Sie Ihre Knöchel hoch, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your wrists to help reduce swelling and increase blood flow.",display_src:"Elevate your wrists to help reduce swelling and increase blood flow.",ref:"Legen Sie Ihre Handgelenke hoch, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your fingers to help reduce swelling and increase blood flow.",display_src:"Elevate your fingers to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Finger an, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your toes to help reduce swelling and increase blood flow.",display_src:"Elevate your toes to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Zehen an, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your knees to help reduce swelling and increase blood flow.",display_src:"Elevate your knees to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Knie an, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your elbows to help reduce swelling and increase blood flow.",display_src:"Elevate your elbows to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Ellenbogen an, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Stay hydrated",display_src:"Stay hydrated",ref:"Trinke genug",show_ref:!1},{src:"Gargle with warm salt water",display_src:"Gargle with warm salt water",ref:"Mit warmem Salzwasser gurgeln",show_ref:!1},{src:"Keep your wounds clean and dry.",display_src:"Keep your wounds clean and dry.",ref:"Halten Sie Ihre Wunden sauber und trocken.",show_ref:!1},{src:"Change the dressing daily",display_src:"Change the dressing daily",ref:"Wechseln Sie den Verband täglich",show_ref:!1},{src:"Apply antibiotic (Neosporin) ointment daily.",display_src:"Apply antibiotic (Neosporin) ointment daily.",ref:"Tragen Sie täglich eine Antibiotika-Salbe (Neosporin) auf.",show_ref:!1},{src:"Clean the wound with water and soap.",display_src:"Clean the wound with water and soap.",ref:"Reinigen Sie die Wunde mit Wasser und Seife.",show_ref:!1},{src:"Avoid rigorous scrubbing on the wound.",display_src:"Avoid rigorous scrubbing on the wound.",ref:"Vermeiden Sie starkes Schrubben der Wunde.",show_ref:!1},{src:"Watch for signs of infection such as fever, spreading redness or worsening pain",display_src:"Watch for signs of infection such as fever, spreading redness or worsening pain",ref:"Achten Sie auf Anzeichen einer Infektion wie Fieber, sich ausbreitende Rötung oder sich verschlimmernde Schmerzen",show_ref:!1},{src:"You can shower as usual, using soap and running water.",display_src:"You can shower as usual, using soap and running water.",ref:"Sie können wie gewohnt mit Seife und fließendem Wasser duschen.",show_ref:!1},{src:"Keep the gauze dressing on for 24 hours after surgery.",display_src:"Keep the gauze dressing on for 24 hours after surgery.",ref:"Behalten Sie den Mullverband nach der Operation 24 Stunden lang bei.",show_ref:!1},{src:"Keep the gauze dressing on for 48 hours following the procedure.",display_src:"Keep the gauze dressing on for 48 hours following the procedure.",ref:"Behalten Sie den Mullverband nach dem Eingriff 48 Stunden lang bei.",show_ref:!1},{src:"Keep the gauze dressing on for 72 hours to promote optimal healing.",display_src:"Keep the gauze dressing on for 72 hours to promote optimal healing.",ref:"Lassen Sie den Mullverband 72 Stunden lang an, um eine optimale Heilung zu fördern.",show_ref:!1},{src:"Keep the gauze dressing on for at least 5 days after the wound is closed.",display_src:"Keep the gauze dressing on for at least 5 days after the wound is closed.",ref:"Belassen Sie den Mullverband nach dem Wundverschluss mindestens 5 Tage lang.",show_ref:!1},{src:"Keep the gauze dressing on for a minimum of 3 days to maintain cleanliness.",display_src:"Keep the gauze dressing on for a minimum of 3 days to maintain cleanliness.",ref:"Lassen Sie den Mullverband mindestens 3 Tage lang an, um die Sauberkeit zu gewährleisten.",show_ref:!1},{src:"Keep the gauze dressing on for 36 hours to ensure proper protection.",display_src:"Keep the gauze dressing on for 36 hours to ensure proper protection.",ref:"Lassen Sie den Mullverband 36 Stunden lang an, um einen ausreichenden Schutz zu gewährleisten.",show_ref:!1},{src:"Keep the gauze dressing on for 12 hours after the initial bandage change.",display_src:"Keep the gauze dressing on for 12 hours after the initial bandage change.",ref:"Behalten Sie den Mullverband nach dem ersten Verbandwechsel 12 Stunden lang bei.",show_ref:!1},{src:"Keep the gauze dressing on for 2 days post-stitches removal.",display_src:"Keep the gauze dressing on for 2 days post-stitches removal.",ref:"Lassen Sie den Mullverband nach der Nahtentfernung zwei Tage lang an.",show_ref:!1},{src:"Keep the gauze dressing on for 96 hours to minimize the risk of infection.",display_src:"Keep the gauze dressing on for 96 hours to minimize the risk of infection.",ref:"Lassen Sie den Mullverband 96 Stunden lang angelegt, um das Infektionsrisiko zu minimieren.",show_ref:!1},{src:"Keep the gauze dressing on for 7 days to support the healing process.",display_src:"Keep the gauze dressing on for 7 days to support the healing process.",ref:"Lassen Sie den Mullverband 7 Tage lang an, um den Heilungsprozess zu unterstützen.",show_ref:!1},{src:"Use Acetaminophen for 500mg every 6 hours for pain relief and fever reduction.",display_src:"Use Acetaminophen for 500mg every 6 hours for pain relief and fever reduction.",ref:"Verwenden Sie zur Schmerzlinderung und Fiebersenkung alle 6 Stunden 500 mg Acetaminophen.",show_ref:!1},{src:"Use Ibuprofen for 200mg every 4 hours for inflammation and discomfort.",display_src:"Use Ibuprofen for 200mg every 4 hours for inflammation and discomfort.",ref:"Verwenden Sie bei Entzündungen und Beschwerden alle 4 Stunden 200 mg Ibuprofen.",show_ref:!1},{src:"Use Metoprolol for 25mg every 12 hours for blood pressure management.",display_src:"Use Metoprolol for 25mg every 12 hours for blood pressure management.",ref:"Verwenden Sie zur Blutdruckkontrolle alle 12 Stunden 25 mg Metoprolol.",show_ref:!1},{src:"Use Levofloxacin for 500mg every 24 hours for the treatment of bacterial infections.",display_src:"Use Levofloxacin for 500mg every 24 hours for the treatment of bacterial infections.",ref:"Verwenden Sie Levofloxacin in einer Dosierung von 500 mg alle 24 Stunden zur Behandlung bakterieller Infektionen.",show_ref:!1},{src:"Use Pantoprazole for 40mg every 24 hours for the reduction of stomach acid and heartburn.",display_src:"Use Pantoprazole for 40mg every 24 hours for the reduction of stomach acid and heartburn.",ref:"Verwenden Sie Pantoprazol alle 24 Stunden in einer Dosierung von 40 mg, um Magensäure und Sodbrennen zu reduzieren.",show_ref:!1},{src:"Use Sertraline for 50mg every 24 hours for anxiety and depression management.",display_src:"Use Sertraline for 50mg every 24 hours for anxiety and depression management.",ref:"Verwenden Sie Sertralin für 50 mg alle 24 Stunden zur Behandlung von Angstzuständen und Depressionen.",show_ref:!1},{src:"Use Metformin for 1000mg every 12 hours for blood sugar control in type 2 diabetes.",display_src:"Use Metformin for 1000mg every 12 hours for blood sugar control in type 2 diabetes.",ref:"Verwenden Sie Metformin für 1000 mg alle 12 Stunden zur Blutzuckerkontrolle bei Typ-2-Diabetes.",show_ref:!1},{src:"Use Lisinopril for 10mg every 24 hours for hypertension and heart failure prevention.",display_src:"Use Lisinopril for 10mg every 24 hours for hypertension and heart failure prevention.",ref:"Verwenden Sie Lisinopril alle 24 Stunden in einer Dosierung von 10 mg zur Vorbeugung von Bluthochdruck und Herzinsuffizienz.",show_ref:!1},{src:"Use Omeprazole for 20mg every 24 hours for the treatment of gastroesophageal reflux disease (GERD).",display_src:"Use Omeprazole for 20mg every 24 hours for the treatment of gastroesophageal reflux disease (GERD).",ref:"Verwenden Sie Omeprazol in einer Dosierung von 20 mg alle 24 Stunden zur Behandlung der gastroösophagealen Refluxkrankheit (GERD).",show_ref:!1},{src:"Use Hydrochlorothiazide for 25mg every 24 hours for water retention and high blood pressure reduction.",display_src:"Use Hydrochlorothiazide for 25mg every 24 hours for water retention and high blood pressure reduction.",ref:"Verwenden Sie Hydrochlorothiazid in einer Dosierung von 25 mg alle 24 Stunden zur Wassereinlagerung und Senkung des Bluthochdrucks.",show_ref:!1},{src:"Avoid skipping meals",display_src:"Avoid skipping meals",ref:"Vermeiden Sie es, Mahlzeiten auszulassen",show_ref:!1},{src:"Rest",display_src:"Rest",ref:"Ausruhen",show_ref:!1},{src:"Avoid strenuous activities.",display_src:"Avoid strenuous activities.",ref:"Vermeiden Sie anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least 48 hours.",display_src:"Avoid strenuous activities for at least 48 hours.",ref:"Vermeiden Sie anstrengende Aktivitäten für mindestens 48 Stunden.",show_ref:!1},{src:"Avoid strenuous activities for at least 72 hours.",display_src:"Avoid strenuous activities for at least 72 hours.",ref:"Vermeiden Sie anstrengende Aktivitäten für mindestens 72 Stunden.",show_ref:!1},{src:"Avoid strenuous activities for at least one week.",display_src:"Avoid strenuous activities for at least one week.",ref:"Vermeiden Sie mindestens eine Woche lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least two weeks.",display_src:"Avoid strenuous activities for at least two weeks.",ref:"Vermeiden Sie mindestens zwei Wochen lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least three weeks.",display_src:"Avoid strenuous activities for at least three weeks.",ref:"Vermeiden Sie mindestens drei Wochen lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least one month.",display_src:"Avoid strenuous activities for at least one month.",ref:"Vermeiden Sie mindestens einen Monat lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least six weeks.",display_src:"Avoid strenuous activities for at least six weeks.",ref:"Vermeiden Sie mindestens sechs Wochen lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least two months.",display_src:"Avoid strenuous activities for at least two months.",ref:"Vermeiden Sie mindestens zwei Monate lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least three months.",display_src:"Avoid strenuous activities for at least three months.",ref:"Vermeiden Sie mindestens drei Monate lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least four months.",display_src:"Avoid strenuous activities for at least four months.",ref:"Vermeiden Sie mindestens vier Monate lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities until you feel better.",display_src:"Avoid strenuous activities until you feel better.",ref:"Vermeiden Sie anstrengende Aktivitäten, bis Sie sich besser fühlen.",show_ref:!1},{src:"Avoid cognitively and visually stimulating activities such as loud music, TV, bright lights, etc.",display_src:"Avoid cognitively and visually stimulating activities such as loud music, TV, bright lights, etc.",ref:"Vermeiden Sie kognitiv und visuell anregende Aktivitäten wie laute Musik, Fernsehen, helles Licht usw.",show_ref:!1},{src:"Do not lift anything over 5 pounds for 2 weeks.",display_src:"Do not lift anything over 5 pounds for 2 weeks.",ref:"Heben Sie 2 Wochen lang nichts über 5 Pfund.",show_ref:!1},{src:"Do not lift anything over 10 pounds for 4 weeks.",display_src:"Do not lift anything over 10 pounds for 4 weeks.",ref:"Heben Sie 4 Wochen lang nichts über 10 Pfund.",show_ref:!1},{src:"Do not lift anything over 15 pounds for 6 weeks.",display_src:"Do not lift anything over 15 pounds for 6 weeks.",ref:"Heben Sie 6 Wochen lang nichts über 15 Pfund.",show_ref:!1},{src:"Do not lift anything over 20 pounds for 8 weeks.",display_src:"Do not lift anything over 20 pounds for 8 weeks.",ref:"Heben Sie 8 Wochen lang nichts über 20 Pfund.",show_ref:!1},{src:"Do not lift anything over 25 pounds for 10 weeks.",display_src:"Do not lift anything over 25 pounds for 10 weeks.",ref:"Heben Sie 10 Wochen lang nichts über 25 Pfund.",show_ref:!1},{src:"Do not lift anything over 30 pounds for 12 weeks.",display_src:"Do not lift anything over 30 pounds for 12 weeks.",ref:"Heben Sie 12 Wochen lang nichts über 30 Pfund.",show_ref:!1},{src:"Do not lift anything over 35 pounds for 14 weeks.",display_src:"Do not lift anything over 35 pounds for 14 weeks.",ref:"Heben Sie 14 Wochen lang nichts über 35 Pfund.",show_ref:!1},{src:"Do not lift anything over 40 pounds for 16 weeks.",display_src:"Do not lift anything over 40 pounds for 16 weeks.",ref:"Heben Sie 16 Wochen lang nichts über 40 Pfund.",show_ref:!1},{src:"Do not lift anything over 45 pounds for 18 weeks.",display_src:"Do not lift anything over 45 pounds for 18 weeks.",ref:"Heben Sie 18 Wochen lang nichts über 45 Pfund.",show_ref:!1},{src:"Do not lift anything over 50 pounds for 20 weeks.",display_src:"Do not lift anything over 50 pounds for 20 weeks.",ref:"Heben Sie 20 Wochen lang nichts über 50 Pfund.",show_ref:!1},{src:"Avoid aspirin.",display_src:"Avoid aspirin.",ref:"Vermeiden Sie Aspirin.",show_ref:!1},{src:"Avoid ibuprofen.",display_src:"Avoid ibuprofen.",ref:"Vermeiden Sie Ibuprofen.",show_ref:!1},{src:"Avoid naproxen.",display_src:"Avoid naproxen.",ref:"Vermeiden Sie Naproxen.",show_ref:!1},{src:"Avoid acetaminophen.",display_src:"Avoid acetaminophen.",ref:"Vermeiden Sie Paracetamol.",show_ref:!1},{src:"Avoid amoxicillin.",display_src:"Avoid amoxicillin.",ref:"Vermeiden Sie Amoxicillin.",show_ref:!1},{src:"Avoid metformin.",display_src:"Avoid metformin.",ref:"Vermeiden Sie Metformin.",show_ref:!1},{src:"Avoid lisinopril.",display_src:"Avoid lisinopril.",ref:"Vermeiden Sie Lisinopril.",show_ref:!1},{src:"Avoid simvastatin.",display_src:"Avoid simvastatin.",ref:"Vermeiden Sie Simvastatin.",show_ref:!1},{src:"Avoid omeprazole.",display_src:"Avoid omeprazole.",ref:"Vermeiden Sie Omeprazol.",show_ref:!1},{src:"Avoid hydrochlorothiazide.",display_src:"Avoid hydrochlorothiazide.",ref:"Vermeiden Sie Hydrochlorothiazid.",show_ref:!1},{src:"Reduce your use of alcohol and illicit drugs.",display_src:"Reduce your use of alcohol and illicit drugs.",ref:"Reduzieren Sie den Konsum von Alkohol und illegalen Drogen.",show_ref:!1},{src:"Do not use aspirin.",display_src:"Do not use aspirin.",ref:"Verwenden Sie kein Aspirin.",show_ref:!1},{src:"Do not use ibuprofen.",display_src:"Do not use ibuprofen.",ref:"Verwenden Sie kein Ibuprofen.",show_ref:!1},{src:"Do not use naproxen.",display_src:"Do not use naproxen.",ref:"Verwenden Sie kein Naproxen.",show_ref:!1},{src:"Do not use acetaminophen.",display_src:"Do not use acetaminophen.",ref:"Verwenden Sie kein Paracetamol.",show_ref:!1},{src:"Do not use amoxicillin.",display_src:"Do not use amoxicillin.",ref:"Verwenden Sie kein Amoxicillin.",show_ref:!1},{src:"Do not use hydrocodone.",display_src:"Do not use hydrocodone.",ref:"Verwenden Sie kein Hydrocodon.",show_ref:!1},{src:"Do not use prednisone.",display_src:"Do not use prednisone.",ref:"Verwenden Sie kein Prednison.",show_ref:!1},{src:"Do not use metformin.",display_src:"Do not use metformin.",ref:"Verwenden Sie kein Metformin.",show_ref:!1},{src:"Do not use lisinopril.",display_src:"Do not use lisinopril.",ref:"Verwenden Sie kein Lisinopril.",show_ref:!1},{src:"Do not use warfarin.",display_src:"Do not use warfarin.",ref:"Verwenden Sie kein Warfarin.",show_ref:!1},{src:"Check your blood pressure regularly.",display_src:"Check your blood pressure regularly.",ref:"Überprüfen Sie regelmäßig Ihren Blutdruck.",show_ref:!1},{src:"Check your heart rate regularly.",display_src:"Check your heart rate regularly.",ref:"Überprüfen Sie regelmäßig Ihre Herzfrequenz.",show_ref:!1},{src:"Check your blood sugar levels regularly.",display_src:"Check your blood sugar levels regularly.",ref:"Überprüfen Sie regelmäßig Ihren Blutzuckerspiegel.",show_ref:!1},{src:"Check your body temperature regularly.",display_src:"Check your body temperature regularly.",ref:"Überprüfen Sie regelmäßig Ihre Körpertemperatur.",show_ref:!1},{src:"Check your breathing rate regularly.",display_src:"Check your breathing rate regularly.",ref:"Überprüfen Sie regelmäßig Ihre Atemfrequenz.",show_ref:!1},{src:"Check your pain levels regularly.",display_src:"Check your pain levels regularly.",ref:"Überprüfen Sie regelmäßig Ihr Schmerzniveau.",show_ref:!1},{src:"Check your swelling regularly.",display_src:"Check your swelling regularly.",ref:"Überprüfen Sie regelmäßig Ihre Schwellung.",show_ref:!1},{src:"Check your wound healing regularly.",display_src:"Check your wound healing regularly.",ref:"Überprüfen Sie regelmäßig Ihre Wundheilung.",show_ref:!1},{src:"Check your bowel movements regularly.",display_src:"Check your bowel movements regularly.",ref:"Kontrollieren Sie regelmäßig Ihren Stuhlgang.",show_ref:!1},{src:"Check your skin color and texture regularly.",display_src:"Check your skin color and texture regularly.",ref:"Überprüfen Sie regelmäßig Ihre Hautfarbe und -beschaffenheit.",show_ref:!1},{src:"Check your blood pressure every morning and evening.",display_src:"Check your blood pressure every morning and evening.",ref:"Überprüfen Sie jeden Morgen und Abend Ihren Blutdruck.",show_ref:!1},{src:"Check your blood sugar levels every four hours.",display_src:"Check your blood sugar levels every four hours.",ref:"Überprüfen Sie alle vier Stunden Ihren Blutzuckerspiegel.",show_ref:!1},{src:"Check your temperature every six hours.",display_src:"Check your temperature every six hours.",ref:"Überprüfen Sie alle sechs Stunden Ihre Temperatur.",show_ref:!1},{src:"Check your pulse rate every two hours.",display_src:"Check your pulse rate every two hours.",ref:"Überprüfen Sie alle zwei Stunden Ihren Puls.",show_ref:!1},{src:"Check your oxygen saturation every three hours.",display_src:"Check your oxygen saturation every three hours.",ref:"Überprüfen Sie alle drei Stunden Ihre Sauerstoffsättigung.",show_ref:!1},{src:"Check your incision site for signs of infection every day.",display_src:"Check your incision site for signs of infection every day.",ref:"Überprüfen Sie Ihre Einschnittstelle täglich auf Anzeichen einer Infektion.",show_ref:!1},{src:"Check your weight every morning.",display_src:"Check your weight every morning.",ref:"Überprüfen Sie jeden Morgen Ihr Gewicht.",show_ref:!1},{src:"Check your swelling every four hours.",display_src:"Check your swelling every four hours.",ref:"Überprüfen Sie alle vier Stunden Ihre Schwellung.",show_ref:!1},{src:"Check your medication side effects every day.",display_src:"Check your medication side effects every day.",ref:"Überprüfen Sie täglich die Nebenwirkungen Ihrer Medikamente.",show_ref:!1},{src:"Check your breathing rate every hour.",display_src:"Check your breathing rate every hour.",ref:"Überprüfen Sie stündlich Ihre Atemfrequenz.",show_ref:!1},{src:"Eat regularly to avoid low blood sugar",display_src:"Eat regularly to avoid low blood sugar",ref:"Essen Sie regelmäßig, um einen niedrigen Blutzuckerspiegel zu vermeiden",show_ref:!1},{src:"You are not allowed to drive until you have been cleared by neurology. We have filed a report with the DMV.",display_src:"You are not allowed to drive until you have been cleared by neurology. We have filed a report with the DMV.",ref:"Bis zur neurologischen Genehmigung dürfen Sie nicht Auto fahren. Wir haben eine Anzeige beim DMV eingereicht.",show_ref:!1},{src:"Do not put yourself in a situation where loss of consciousness will cause you severe harm.",display_src:"Do not put yourself in a situation where loss of consciousness will cause you severe harm.",ref:"Bringen Sie sich nicht in eine Situation, in der ein Bewusstseinsverlust zu schweren Schäden führen kann.",show_ref:!1},{src:"You were seen in the emergency department for chest pain.",display_src:"You were seen in the emergency department for chest pain.",ref:"Sie wurden wegen Brustschmerzen in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for shortness of breath.",display_src:"You were seen in the emergency department for shortness of breath.",ref:"Sie wurden wegen Atemnot in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for severe headache.",display_src:"You were seen in the emergency department for severe headache.",ref:"Sie wurden wegen starker Kopfschmerzen in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for abdominal pain.",display_src:"You were seen in the emergency department for abdominal pain.",ref:"Sie wurden wegen Bauchschmerzen in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for dizziness and fainting.",display_src:"You were seen in the emergency department for dizziness and fainting.",ref:"Sie wurden wegen Schwindelgefühlen und Ohnmachtsanfällen in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for a high fever and chills.",display_src:"You were seen in the emergency department for a high fever and chills.",ref:"Sie wurden wegen hohem Fieber und Schüttelfrost in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for persistent vomiting and diarrhea.",display_src:"You were seen in the emergency department for persistent vomiting and diarrhea.",ref:"Sie wurden wegen anhaltendem Erbrechen und Durchfall in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for uncontrolled bleeding from a wound.",display_src:"You were seen in the emergency department for uncontrolled bleeding from a wound.",ref:"Sie wurden wegen unkontrollierter Blutung aus einer Wunde in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for severe allergic reaction with facial swelling and difficulty breathing.",display_src:"You were seen in the emergency department for severe allergic reaction with facial swelling and difficulty breathing.",ref:"Sie wurden wegen einer schweren allergischen Reaktion mit Gesichtsschwellung und Atembeschwerden in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for sudden onset of weakness in the limbs and difficulty speaking.",display_src:"You were seen in the emergency department for sudden onset of weakness in the limbs and difficulty speaking.",ref:"Sie wurden wegen plötzlich auftretender Schwäche in den Gliedmaßen und Schwierigkeiten beim Sprechen in die Notaufnahme gebracht.",show_ref:!1},{src:"You were admitted to the hospital for severe chest pain.",display_src:"You were admitted to the hospital for severe chest pain.",ref:"Sie wurden wegen starker Brustschmerzen ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for high fever and difficulty breathing.",display_src:"You were admitted to the hospital for high fever and difficulty breathing.",ref:"Sie wurden wegen hohem Fieber und Atembeschwerden ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for uncontrolled vomiting and diarrhea.",display_src:"You were admitted to the hospital for uncontrolled vomiting and diarrhea.",ref:"Sie wurden wegen unkontrolliertem Erbrechen und Durchfall ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for sudden onset of severe headache and blurred vision.",display_src:"You were admitted to the hospital for sudden onset of severe headache and blurred vision.",ref:"Sie wurden wegen plötzlich auftretender starker Kopfschmerzen und verschwommener Sicht ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for persistent abdominal pain and distension.",display_src:"You were admitted to the hospital for persistent abdominal pain and distension.",ref:"Sie wurden wegen anhaltender Bauchschmerzen und Blähungen ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for weakness and numbness in your limbs.",display_src:"You were admitted to the hospital for weakness and numbness in your limbs.",ref:"Sie wurden wegen Schwäche und Taubheitsgefühl in Ihren Gliedmaßen ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for sudden and unexplained weight loss and fatigue.",display_src:"You were admitted to the hospital for sudden and unexplained weight loss and fatigue.",ref:"Sie wurden wegen plötzlichem und unerklärlichem Gewichtsverlust und Müdigkeit ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for an allergic reaction causing facial swelling and difficulty swallowing.",display_src:"You were admitted to the hospital for an allergic reaction causing facial swelling and difficulty swallowing.",ref:"Sie wurden wegen einer allergischen Reaktion, die zu Schwellungen im Gesicht und Schluckbeschwerden führte, ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for severe dehydration and electrolyte imbalance.",display_src:"You were admitted to the hospital for severe dehydration and electrolyte imbalance.",ref:"Sie wurden wegen schwerer Dehydrierung und Elektrolytstörungen ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for an uncontrolled seizure episode.",display_src:"You were admitted to the hospital for an uncontrolled seizure episode.",ref:"Sie wurden wegen einer unkontrollierten Anfallsepisode ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital.",display_src:"You were admitted to the hospital.",ref:"Sie wurden ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were evaluated by the Downtown Urgent Care Clinic.",display_src:"You were evaluated by the Downtown Urgent Care Clinic.",ref:"Sie wurden von der Downtown Urgent Care Clinic untersucht.",show_ref:!1},{src:"You were evaluated by the Springfield Cardiology Center.",display_src:"You were evaluated by the Springfield Cardiology Center.",ref:"Sie wurden vom Springfield Cardiology Center untersucht.",show_ref:!1},{src:"You were evaluated by the Northside Gastroenterology Clinic.",display_src:"You were evaluated by the Northside Gastroenterology Clinic.",ref:"Sie wurden von der Northside Gastroenterology Clinic untersucht.",show_ref:!1},{src:"You were evaluated by the West End Orthopedic Specialists.",display_src:"You were evaluated by the West End Orthopedic Specialists.",ref:"Sie wurden von den West End Orthopaedic Specialists untersucht.",show_ref:!1},{src:"You were evaluated by the Eastside Neurology Institute.",display_src:"You were evaluated by the Eastside Neurology Institute.",ref:"Sie wurden vom Eastside Neurology Institute untersucht.",show_ref:!1},{src:"You were evaluated by the Central Pulmonology and Allergy Clinic.",display_src:"You were evaluated by the Central Pulmonology and Allergy Clinic.",ref:"Sie wurden von der Zentralen Pneumologie- und Allergieklinik untersucht.",show_ref:!1},{src:"You were evaluated by the Riverfront Women's Health Center.",display_src:"You were evaluated by the Riverfront Women's Health Center.",ref:"Sie wurden vom Riverfront Women&#39;s Health Center untersucht.",show_ref:!1},{src:"You were evaluated by the Lakeside Pediatric Associates.",display_src:"You were evaluated by the Lakeside Pediatric Associates.",ref:"Sie wurden von den Lakeside Pediatric Associates untersucht.",show_ref:!1},{src:"You were evaluated by the Greenfield Mental Health Clinic.",display_src:"You were evaluated by the Greenfield Mental Health Clinic.",ref:"Sie wurden von der Greenfield Mental Health Clinic untersucht.",show_ref:!1},{src:"You were evaluated by the Hillside Endocrinology and Diabetes Center.",display_src:"You were evaluated by the Hillside Endocrinology and Diabetes Center.",ref:"Sie wurden vom Hillside Endocrinology and Diabetes Center untersucht.",show_ref:!1},{src:"Contact the Billing Office at (555) 123-4567.",display_src:"Contact the Billing Office at (555) 123-4567.",ref:"Kontaktieren Sie das Rechnungsbüro unter (555) 123-4567.",show_ref:!1},{src:"Contact the Medical Records Department at (555) 987-6543.",display_src:"Contact the Medical Records Department at (555) 987-6543.",ref:"Kontaktieren Sie die Abteilung für Krankenakten unter (555) 987-6543.",show_ref:!1},{src:"Contact the Pharmacy Office at (555) 111-2233.",display_src:"Contact the Pharmacy Office at (555) 111-2233.",ref:"Kontaktieren Sie das Apothekenbüro unter (555) 111-2233.",show_ref:!1},{src:"Contact the Patient Care Coordination Office at (555) 444-5678.",display_src:"Contact the Patient Care Coordination Office at (555) 444-5678.",ref:"Kontaktieren Sie das Patient Care Coordination Office unter (555) 444-5678.",show_ref:!1},{src:"Contact the Rehabilitation Services Department at (555) 789-0123.",display_src:"Contact the Rehabilitation Services Department at (555) 789-0123.",ref:"Kontaktieren Sie die Abteilung für Rehabilitationsdienste unter (555) 789-0123.",show_ref:!1},{src:"Contact the Nutrition and Dietetics Office at (555) 233-4455.",display_src:"Contact the Nutrition and Dietetics Office at (555) 233-4455.",ref:"Kontaktieren Sie das Büro für Ernährung und Diätetik unter (555) 233-4455.",show_ref:!1},{src:"Contact the Mental Health Services Department at (555) 666-7777.",display_src:"Contact the Mental Health Services Department at (555) 666-7777.",ref:"Kontaktieren Sie die Abteilung für psychische Gesundheit unter (555) 666-7777.",show_ref:!1},{src:"Contact the Outpatient Scheduling Office at (555) 321-6549.",display_src:"Contact the Outpatient Scheduling Office at (555) 321-6549.",ref:"Kontaktieren Sie das Ambulanzplanungsbüro unter (555) 321-6549.",show_ref:!1},{src:"Contact the Social Work Services Office at (555) 888-9999.",display_src:"Contact the Social Work Services Office at (555) 888-9999.",ref:"Kontaktieren Sie das Büro für Sozialarbeit unter (555) 888-9999.",show_ref:!1},{src:"Contact the Home Health Care Department at (555) 555-4321.",display_src:"Contact the Home Health Care Department at (555) 555-4321.",ref:"Kontaktieren Sie das Home Health Care Department unter (555) 555-4321.",show_ref:!1},{src:"If you have questions, please contact the Patient Care Coordination Office.",display_src:"If you have questions, please contact the Patient Care Coordination Office.",ref:"Bei Fragen wenden Sie sich bitte an die Koordinationsstelle Patientenversorgung.",show_ref:!1},{src:"If you have questions, please contact the Hospital Discharge Planning Office.",display_src:"If you have questions, please contact the Hospital Discharge Planning Office.",ref:"Bei Fragen wenden Sie sich bitte an die Entlassungsplanung des Krankenhauses.",show_ref:!1},{src:"If you have questions, please contact the Medical Records Office.",display_src:"If you have questions, please contact the Medical Records Office.",ref:"Bei Fragen wenden Sie sich bitte an das Medical Records Office.",show_ref:!1},{src:"If you have questions, please contact the Nursing Administration Office.",display_src:"If you have questions, please contact the Nursing Administration Office.",ref:"Bei Fragen wenden Sie sich bitte an das Pflegesekretariat.",show_ref:!1},{src:"If you have questions, please contact the Medication Management Office.",display_src:"If you have questions, please contact the Medication Management Office.",ref:"Bei Fragen wenden Sie sich bitte an die Arzneimittelverwaltung.",show_ref:!1},{src:"If you have questions, please contact the Patient Billing and Insurance Office.",display_src:"If you have questions, please contact the Patient Billing and Insurance Office.",ref:"Bei Fragen wenden Sie sich bitte an die Patientenabrechnungs- und Versicherungsstelle.",show_ref:!1},{src:"If you have questions, please contact the Outpatient Rehabilitation Office.",display_src:"If you have questions, please contact the Outpatient Rehabilitation Office.",ref:"Bei Fragen wenden Sie sich bitte an die ambulante Rehabilitationsstelle.",show_ref:!1},{src:"If you have questions, please contact the Social Work and Counseling Office.",display_src:"If you have questions, please contact the Social Work and Counseling Office.",ref:"Bei Fragen wenden Sie sich bitte an die Sozialarbeits- und Beratungsstelle.",show_ref:!1},{src:"If you have questions, please contact the Nutritional Services Office.",display_src:"If you have questions, please contact the Nutritional Services Office.",ref:"Bei Fragen wenden Sie sich bitte an die Ernährungsberatung.",show_ref:!1},{src:"If you have questions, please contact the Patient and Family Support Office.",display_src:"If you have questions, please contact the Patient and Family Support Office.",ref:"Bei Fragen wenden Sie sich bitte an die Patienten- und Familienberatung.",show_ref:!1},{src:"The ED is available 24 hours a day, 7 days a week.",display_src:"The ED is available 24 hours a day, 7 days a week.",ref:"Die Notaufnahme ist 24 Stunden am Tag, 7 Tage die Woche erreichbar.",show_ref:!1},{src:"Based on your symptoms and test results, you have pneumonia.",display_src:"Based on your symptoms and test results, you have pneumonia.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie eine Lungenentzündung.",show_ref:!1},{src:"Based on your symptoms and test results, you have type 2 diabetes.",display_src:"Based on your symptoms and test results, you have type 2 diabetes.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie Typ-2-Diabetes.",show_ref:!1},{src:"Based on your symptoms and test results, you have congestive heart failure.",display_src:"Based on your symptoms and test results, you have congestive heart failure.",ref:"Basierend auf Ihren Symptomen und Testergebnissen liegt bei Ihnen eine Herzinsuffizienz vor.",show_ref:!1},{src:"Based on your symptoms and test results, you have gastroesophageal reflux disease (GERD).",display_src:"Based on your symptoms and test results, you have gastroesophageal reflux disease (GERD).",ref:"Basierend auf Ihren Symptomen und Testergebnissen leiden Sie an einer gastroösophagealen Refluxkrankheit (GERD).",show_ref:!1},{src:"Based on your symptoms and test results, you have chronic obstructive pulmonary disease (COPD).",display_src:"Based on your symptoms and test results, you have chronic obstructive pulmonary disease (COPD).",ref:"Aufgrund Ihrer Symptome und Testergebnisse leiden Sie an einer chronisch obstruktiven Lungenerkrankung (COPD).",show_ref:!1},{src:"Based on your symptoms and test results, you have irritable bowel syndrome (IBS).",display_src:"Based on your symptoms and test results, you have irritable bowel syndrome (IBS).",ref:"Basierend auf Ihren Symptomen und Testergebnissen haben Sie ein Reizdarmsyndrom (IBS).",show_ref:!1},{src:"Based on your symptoms and test results, you have hypothyroidism.",display_src:"Based on your symptoms and test results, you have hypothyroidism.",ref:"Basierend auf Ihren Symptomen und Testergebnissen liegt bei Ihnen eine Hypothyreose vor.",show_ref:!1},{src:"Based on your symptoms and test results, you have rheumatoid arthritis.",display_src:"Based on your symptoms and test results, you have rheumatoid arthritis.",ref:"Aufgrund Ihrer Symptome und Testergebnisse leiden Sie an rheumatoider Arthritis.",show_ref:!1},{src:"Based on your symptoms and test results, you have anemia.",display_src:"Based on your symptoms and test results, you have anemia.",ref:"Basierend auf Ihren Symptomen und Testergebnissen liegt bei Ihnen eine Anämie vor.",show_ref:!1},{src:"Based on your symptoms and test results, you have kidney stones.",display_src:"Based on your symptoms and test results, you have kidney stones.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie Nierensteine.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have pneumonia.",display_src:"Based on your symptoms and test results, you do NOT have pneumonia.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie KEINE Lungenentzündung.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have diabetes.",display_src:"Based on your symptoms and test results, you do NOT have diabetes.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie KEINEN Diabetes.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a urinary tract infection.",display_src:"Based on your symptoms and test results, you do NOT have a urinary tract infection.",ref:"Aufgrund Ihrer Symptome und Testergebnisse liegt bei Ihnen KEINE Harnwegsinfektion vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a heart attack.",display_src:"Based on your symptoms and test results, you do NOT have a heart attack.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie KEINEN Herzinfarkt.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a stroke.",display_src:"Based on your symptoms and test results, you do NOT have a stroke.",ref:"Aufgrund Ihrer Symptome und Testergebnisse liegt bei Ihnen KEIN Schlaganfall vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have appendicitis.",display_src:"Based on your symptoms and test results, you do NOT have appendicitis.",ref:"Basierend auf Ihren Symptomen und Testergebnissen liegt bei Ihnen KEINE Blinddarmentzündung vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a concussion.",display_src:"Based on your symptoms and test results, you do NOT have a concussion.",ref:"Aufgrund Ihrer Symptome und Testergebnisse liegt bei Ihnen KEINE Gehirnerschütterung vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a kidney infection.",display_src:"Based on your symptoms and test results, you do NOT have a kidney infection.",ref:"Aufgrund Ihrer Symptome und Testergebnisse liegt bei Ihnen KEINE Niereninfektion vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have anemia.",display_src:"Based on your symptoms and test results, you do NOT have anemia.",ref:"Basierend auf Ihren Symptomen und Testergebnissen liegt bei Ihnen KEINE Anämie vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a pulmonary embolism.",display_src:"Based on your symptoms and test results, you do NOT have a pulmonary embolism.",ref:"Aufgrund Ihrer Symptome und Testergebnisse liegt bei Ihnen KEINE Lungenembolie vor.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have pneumonia.",display_src:"Based on your symptoms and test results, we think you may have pneumonia.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer Lungenentzündung leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have congestive heart failure.",display_src:"Based on your symptoms and test results, we think you may have congestive heart failure.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer Herzinsuffizienz leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have Type 2 diabetes.",display_src:"Based on your symptoms and test results, we think you may have Type 2 diabetes.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise Typ-2-Diabetes haben.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have a urinary tract infection.",display_src:"Based on your symptoms and test results, we think you may have a urinary tract infection.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer Harnwegsinfektion leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have anemia.",display_src:"Based on your symptoms and test results, we think you may have anemia.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an Anämie leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have gastroesophageal reflux disease (GERD).",display_src:"Based on your symptoms and test results, we think you may have gastroesophageal reflux disease (GERD).",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer gastroösophagealen Refluxkrankheit (GERD) leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have hypothyroidism.",display_src:"Based on your symptoms and test results, we think you may have hypothyroidism.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer Schilddrüsenunterfunktion leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have rheumatoid arthritis.",display_src:"Based on your symptoms and test results, we think you may have rheumatoid arthritis.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an rheumatoider Arthritis leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have chronic kidney disease.",display_src:"Based on your symptoms and test results, we think you may have chronic kidney disease.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer chronischen Nierenerkrankung leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have a pulmonary embolism.",display_src:"Based on your symptoms and test results, we think you may have a pulmonary embolism.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass bei Ihnen möglicherweise eine Lungenembolie vorliegt.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have pneumonia.",display_src:"Based on your symptoms and test results, we do NOT think you have pneumonia.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an einer Lungenentzündung leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have diabetes.",display_src:"Based on your symptoms and test results, we do NOT think you have diabetes.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Diabetes leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have chronic obstructive pulmonary disease (COPD).",display_src:"Based on your symptoms and test results, we do NOT think you have chronic obstructive pulmonary disease (COPD).",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an einer chronisch obstruktiven Lungenerkrankung (COPD) leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have congestive heart failure.",display_src:"Based on your symptoms and test results, we do NOT think you have congestive heart failure.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Herzinsuffizienz leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have kidney failure.",display_src:"Based on your symptoms and test results, we do NOT think you have kidney failure.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Nierenversagen leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have Lyme disease.",display_src:"Based on your symptoms and test results, we do NOT think you have Lyme disease.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Lyme-Borreliose leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have irritable bowel syndrome (IBS).",display_src:"Based on your symptoms and test results, we do NOT think you have irritable bowel syndrome (IBS).",ref:"Basierend auf Ihren Symptomen und Testergebnissen gehen wir NICHT davon aus, dass Sie an einem Reizdarmsyndrom (IBS) leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have multiple sclerosis (MS).",display_src:"Based on your symptoms and test results, we do NOT think you have multiple sclerosis (MS).",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Multipler Sklerose (MS) leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have rheumatoid arthritis.",display_src:"Based on your symptoms and test results, we do NOT think you have rheumatoid arthritis.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an rheumatoider Arthritis leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have sleep apnea.",display_src:"Based on your symptoms and test results, we do NOT think you have sleep apnea.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Schlafapnoe leiden.",show_ref:!1},{src:"You have a history of hypertension, which puts you at increased risk of heart disease.",display_src:"You have a history of hypertension, which puts you at increased risk of heart disease.",ref:"Sie haben eine Vorgeschichte von Bluthochdruck, wodurch Sie einem erhöhten Risiko für Herzerkrankungen ausgesetzt sind.",show_ref:!1},{src:"You have a history of diabetes, which puts you at increased risk of kidney damage.",display_src:"You have a history of diabetes, which puts you at increased risk of kidney damage.",ref:"Sie leiden an Diabetes und haben daher ein erhöhtes Risiko für Nierenschäden.",show_ref:!1},{src:"You have a history of high cholesterol, which puts you at increased risk of atherosclerosis.",display_src:"You have a history of high cholesterol, which puts you at increased risk of atherosclerosis.",ref:"Sie haben in der Vergangenheit einen hohen Cholesterinspiegel, wodurch Sie einem erhöhten Risiko für Arteriosklerose ausgesetzt sind.",show_ref:!1},{src:"You have a history of obesity, which puts you at increased risk of sleep apnea.",display_src:"You have a history of obesity, which puts you at increased risk of sleep apnea.",ref:"Sie leiden unter Fettleibigkeit und haben daher ein erhöhtes Risiko für Schlafapnoe.",show_ref:!1},{src:"You have a history of smoking, which puts you at increased risk of lung cancer.",display_src:"You have a history of smoking, which puts you at increased risk of lung cancer.",ref:"Sie haben in der Vergangenheit geraucht, wodurch Ihr Lungenkrebsrisiko erhöht ist.",show_ref:!1},{src:"You have a history of alcohol abuse, which puts you at increased risk of liver cirrhosis.",display_src:"You have a history of alcohol abuse, which puts you at increased risk of liver cirrhosis.",ref:"Sie haben in der Vergangenheit Alkoholmissbrauch, wodurch Sie einem erhöhten Risiko für eine Leberzirrhose ausgesetzt sind.",show_ref:!1},{src:"You have a history of asthma, which puts you at increased risk of respiratory infections.",display_src:"You have a history of asthma, which puts you at increased risk of respiratory infections.",ref:"Sie leiden unter Asthma und haben daher ein erhöhtes Risiko für Atemwegsinfektionen.",show_ref:!1},{src:"You have a history of osteoporosis, which puts you at increased risk of bone fractures.",display_src:"You have a history of osteoporosis, which puts you at increased risk of bone fractures.",ref:"Sie leiden an Osteoporose und haben daher ein erhöhtes Risiko für Knochenbrüche.",show_ref:!1},{src:"You have a history of rheumatoid arthritis, which puts you at increased risk of joint deformity.",display_src:"You have a history of rheumatoid arthritis, which puts you at increased risk of joint deformity.",ref:"Sie haben eine Vorgeschichte von rheumatoider Arthritis, wodurch Sie einem erhöhten Risiko für Gelenkdeformitäten ausgesetzt sind.",show_ref:!1},{src:"You have a history of depression, which puts you at increased risk of anxiety disorders.",display_src:"You have a history of depression, which puts you at increased risk of anxiety disorders.",ref:"Sie haben eine Vorgeschichte von Depressionen, wodurch Sie einem erhöhten Risiko für Angststörungen ausgesetzt sind.",show_ref:!1},{src:"We think your persistent headache is from not taking your prescribed pain relievers.",display_src:"We think your persistent headache is from not taking your prescribed pain relievers.",ref:"Wir gehen davon aus, dass Ihre anhaltenden Kopfschmerzen darauf zurückzuführen sind, dass Sie Ihre verschriebenen Schmerzmittel nicht eingenommen haben.",show_ref:!1},{src:"We think your difficulty in breathing is from not taking your asthma inhaler.",display_src:"We think your difficulty in breathing is from not taking your asthma inhaler.",ref:"Wir gehen davon aus, dass Ihre Atembeschwerden darauf zurückzuführen sind, dass Sie Ihren Asthmainhalator nicht einnehmen.",show_ref:!1},{src:"We think your high blood pressure is from not taking your antihypertensive medication.",display_src:"We think your high blood pressure is from not taking your antihypertensive medication.",ref:"Wir gehen davon aus, dass Ihr hoher Blutdruck darauf zurückzuführen ist, dass Sie Ihre blutdrucksenkenden Medikamente nicht eingenommen haben.",show_ref:!1},{src:"We think your elevated blood sugar levels are from not taking your diabetes medication.",display_src:"We think your elevated blood sugar levels are from not taking your diabetes medication.",ref:"Wir gehen davon aus, dass Ihr erhöhter Blutzuckerspiegel darauf zurückzuführen ist, dass Sie Ihre Diabetes-Medikamente nicht eingenommen haben.",show_ref:!1},{src:"We think your recurring chest pain is from not taking your angina medication.",display_src:"We think your recurring chest pain is from not taking your angina medication.",ref:"Wir gehen davon aus, dass Ihre wiederkehrenden Brustschmerzen darauf zurückzuführen sind, dass Sie Ihre Angina-Medikamente nicht eingenommen haben.",show_ref:!1},{src:"We think your uncontrolled seizures are from not taking your anticonvulsant medication.",display_src:"We think your uncontrolled seizures are from not taking your anticonvulsant medication.",ref:"Wir gehen davon aus, dass Ihre unkontrollierten Anfälle darauf zurückzuführen sind, dass Sie Ihre krampflösenden Medikamente nicht eingenommen haben.",show_ref:!1},{src:"We think your constant fatigue is from not taking your iron supplements.",display_src:"We think your constant fatigue is from not taking your iron supplements.",ref:"Wir glauben, dass Ihre ständige Müdigkeit darauf zurückzuführen ist, dass Sie Ihre Eisenpräparate nicht einnehmen.",show_ref:!1},{src:"We think your worsening joint pain is from not taking your anti-inflammatory medication.",display_src:"We think your worsening joint pain is from not taking your anti-inflammatory medication.",ref:"Wir gehen davon aus, dass Ihre sich verschlimmernden Gelenkschmerzen darauf zurückzuführen sind, dass Sie Ihre entzündungshemmenden Medikamente nicht einnehmen.",show_ref:!1},{src:"We think your persistent cough is from not taking your prescribed cough syrup.",display_src:"We think your persistent cough is from not taking your prescribed cough syrup.",ref:"Wir gehen davon aus, dass Ihr anhaltender Husten darauf zurückzuführen ist, dass Sie Ihren verschriebenen Hustensaft nicht eingenommen haben.",show_ref:!1},{src:"We think your mood swings and anxiety are from not taking your antidepressant medication.",display_src:"We think your mood swings and anxiety are from not taking your antidepressant medication.",ref:"Wir glauben, dass Ihre Stimmungsschwankungen und Ängste darauf zurückzuführen sind, dass Sie Ihre Antidepressiva nicht eingenommen haben.",show_ref:!1},{src:"We think your persistent headache is from taking your blood pressure medication the wrong way.",display_src:"We think your persistent headache is from taking your blood pressure medication the wrong way.",ref:"Wir gehen davon aus, dass Ihre anhaltenden Kopfschmerzen auf die falsche Einnahme Ihrer Blutdruckmedikamente zurückzuführen sind.",show_ref:!1},{src:"We think your stomach upset is from taking your antibiotics the wrong way.",display_src:"We think your stomach upset is from taking your antibiotics the wrong way.",ref:"Wir gehen davon aus, dass Ihre Magenbeschwerden auf die falsche Einnahme Ihrer Antibiotika zurückzuführen sind.",show_ref:!1},{src:"We think your dizziness is from taking your anti-anxiety medication the wrong way.",display_src:"We think your dizziness is from taking your anti-anxiety medication the wrong way.",ref:"Wir gehen davon aus, dass Ihr Schwindel auf die falsche Einnahme Ihrer angstlösenden Medikamente zurückzuführen ist.",show_ref:!1},{src:"We think your excessive sleepiness is from taking your antidepressants the wrong way.",display_src:"We think your excessive sleepiness is from taking your antidepressants the wrong way.",ref:"Wir gehen davon aus, dass Ihre übermäßige Schläfrigkeit darauf zurückzuführen ist, dass Sie Ihre Antidepressiva falsch eingenommen haben.",show_ref:!1},{src:"We think your shortness of breath is from taking your asthma inhaler the wrong way.",display_src:"We think your shortness of breath is from taking your asthma inhaler the wrong way.",ref:"Wir gehen davon aus, dass Ihre Kurzatmigkeit darauf zurückzuführen ist, dass Sie Ihren Asthmainhalator falsch angewendet haben.",show_ref:!1},{src:"We think your skin rash is from taking your antihistamines the wrong way.",display_src:"We think your skin rash is from taking your antihistamines the wrong way.",ref:"Wir gehen davon aus, dass Ihr Hautausschlag auf die falsche Einnahme Ihrer Antihistaminika zurückzuführen ist.",show_ref:!1},{src:"We think your rapid heart rate is from taking your beta-blockers the wrong way.",display_src:"We think your rapid heart rate is from taking your beta-blockers the wrong way.",ref:"Wir glauben, dass Ihr schneller Herzschlag darauf zurückzuführen ist, dass Sie Ihre Betablocker falsch eingenommen haben.",show_ref:!1},{src:"We think your muscle cramps are from taking your calcium channel blockers the wrong way.",display_src:"We think your muscle cramps are from taking your calcium channel blockers the wrong way.",ref:"Wir glauben, dass Ihre Muskelkrämpfe auf die falsche Einnahme Ihrer Kalziumkanalblocker zurückzuführen sind.",show_ref:!1},{src:"We think your blurred vision is from taking your glaucoma eye drops the wrong way.",display_src:"We think your blurred vision is from taking your glaucoma eye drops the wrong way.",ref:"Wir gehen davon aus, dass Ihr verschwommenes Sehen darauf zurückzuführen ist, dass Sie Ihre Glaukom-Augentropfen falsch eingenommen haben.",show_ref:!1},{src:"We think your uncontrolled blood sugar levels are from taking your insulin injections the wrong way.",display_src:"We think your uncontrolled blood sugar levels are from taking your insulin injections the wrong way.",ref:"Wir gehen davon aus, dass Ihr unkontrollierter Blutzuckerspiegel darauf zurückzuführen ist, dass Sie Ihre Insulininjektionen falsch verabreicht haben.",show_ref:!1},{src:"We think your persistent cough is due to bronchitis.",display_src:"We think your persistent cough is due to bronchitis.",ref:"Wir gehen davon aus, dass Ihr anhaltender Husten auf eine Bronchitis zurückzuführen ist.",show_ref:!1},{src:"We think your sudden weight loss is due to hyperthyroidism.",display_src:"We think your sudden weight loss is due to hyperthyroidism.",ref:"Wir gehen davon aus, dass Ihr plötzlicher Gewichtsverlust auf eine Schilddrüsenüberfunktion zurückzuführen ist.",show_ref:!1},{src:"We think your severe headaches are due to migraines.",display_src:"We think your severe headaches are due to migraines.",ref:"Wir gehen davon aus, dass Ihre starken Kopfschmerzen auf Migräne zurückzuführen sind.",show_ref:!1},{src:"We think your shortness of breath is due to asthma.",display_src:"We think your shortness of breath is due to asthma.",ref:"Wir gehen davon aus, dass Ihre Atemnot auf Asthma zurückzuführen ist.",show_ref:!1},{src:"We think your joint pain is due to rheumatoid arthritis.",display_src:"We think your joint pain is due to rheumatoid arthritis.",ref:"Wir gehen davon aus, dass Ihre Gelenkschmerzen auf rheumatoide Arthritis zurückzuführen sind.",show_ref:!1},{src:"We think your constant fatigue is due to anemia.",display_src:"We think your constant fatigue is due to anemia.",ref:"Wir glauben, dass Ihre ständige Müdigkeit auf Anämie zurückzuführen ist.",show_ref:!1},{src:"We think your abdominal pain is due to irritable bowel syndrome.",display_src:"We think your abdominal pain is due to irritable bowel syndrome.",ref:"Wir gehen davon aus, dass Ihre Bauchschmerzen auf ein Reizdarmsyndrom zurückzuführen sind.",show_ref:!1},{src:"We think your frequent urination is due to diabetes.",display_src:"We think your frequent urination is due to diabetes.",ref:"Wir gehen davon aus, dass Ihr häufiges Wasserlassen auf Diabetes zurückzuführen ist.",show_ref:!1},{src:"We think your chest pain is due to angina.",display_src:"We think your chest pain is due to angina.",ref:"Wir glauben, dass Ihre Brustschmerzen auf Angina pectoris zurückzuführen sind.",show_ref:!1},{src:"We think your dizziness is due to vertigo.",display_src:"We think your dizziness is due to vertigo.",ref:"Wir gehen davon aus, dass Ihr Schwindel auf Schwindel zurückzuführen ist.",show_ref:!1},{src:"We think your persistent cough may be related to bronchitis.",display_src:"We think your persistent cough may be related to bronchitis.",ref:"Wir gehen davon aus, dass Ihr anhaltender Husten möglicherweise mit einer Bronchitis zusammenhängt.",show_ref:!1},{src:"We think your severe headache may be related to migraines.",display_src:"We think your severe headache may be related to migraines.",ref:"Wir gehen davon aus, dass Ihre starken Kopfschmerzen möglicherweise mit Migräne zusammenhängen.",show_ref:!1},{src:"We think your shortness of breath may be related to asthma.",display_src:"We think your shortness of breath may be related to asthma.",ref:"Wir gehen davon aus, dass Ihre Atemnot möglicherweise mit Asthma zusammenhängt.",show_ref:!1},{src:"We think your joint pain may be related to rheumatoid arthritis.",display_src:"We think your joint pain may be related to rheumatoid arthritis.",ref:"Wir gehen davon aus, dass Ihre Gelenkschmerzen möglicherweise mit rheumatoider Arthritis zusammenhängen.",show_ref:!1},{src:"We think your chest pain may be related to angina.",display_src:"We think your chest pain may be related to angina.",ref:"Wir gehen davon aus, dass Ihre Brustschmerzen möglicherweise mit Angina pectoris zusammenhängen.",show_ref:!1},{src:"We think your sudden weight loss may be related to hyperthyroidism.",display_src:"We think your sudden weight loss may be related to hyperthyroidism.",ref:"Wir gehen davon aus, dass Ihr plötzlicher Gewichtsverlust möglicherweise mit einer Schilddrüsenüberfunktion zusammenhängt.",show_ref:!1},{src:"We think your fatigue may be related to anemia.",display_src:"We think your fatigue may be related to anemia.",ref:"Wir glauben, dass Ihre Müdigkeit möglicherweise mit Anämie zusammenhängt.",show_ref:!1},{src:"We think your frequent urination may be related to diabetes.",display_src:"We think your frequent urination may be related to diabetes.",ref:"Wir glauben, dass Ihr häufiges Wasserlassen möglicherweise mit Diabetes zusammenhängt.",show_ref:!1},{src:"We think your unexplained bruising may be related to a blood clotting disorder.",display_src:"We think your unexplained bruising may be related to a blood clotting disorder.",ref:"Wir gehen davon aus, dass Ihre unerklärlichen Blutergüsse möglicherweise mit einer Blutgerinnungsstörung zusammenhängen.",show_ref:!1},{src:"We think your dizziness may be related to vertigo.",display_src:"We think your dizziness may be related to vertigo.",ref:"Wir glauben, dass Ihr Schwindel möglicherweise mit Schwindel zusammenhängt.",show_ref:!1},{src:"It is not clear what is causing your persistent headache.",display_src:"It is not clear what is causing your persistent headache.",ref:"Es ist nicht klar, was Ihre anhaltenden Kopfschmerzen verursacht.",show_ref:!1},{src:"It is not clear what is causing your sudden chest pain.",display_src:"It is not clear what is causing your sudden chest pain.",ref:"Es ist nicht klar, was Ihre plötzlichen Brustschmerzen verursacht.",show_ref:!1},{src:"It is not clear what is causing your unexplained weight loss.",display_src:"It is not clear what is causing your unexplained weight loss.",ref:"Es ist nicht klar, was die Ursache für Ihren unerklärlichen Gewichtsverlust ist.",show_ref:!1},{src:"It is not clear what is causing your recurring dizziness.",display_src:"It is not clear what is causing your recurring dizziness.",ref:"Es ist nicht klar, was die Ursache für Ihr wiederkehrendes Schwindelgefühl ist.",show_ref:!1},{src:"It is not clear what is causing your constant fatigue.",display_src:"It is not clear what is causing your constant fatigue.",ref:"Es ist nicht klar, was die Ursache für Ihre ständige Müdigkeit ist.",show_ref:!1},{src:"It is not clear what is causing your irregular heartbeat.",display_src:"It is not clear what is causing your irregular heartbeat.",ref:"Es ist nicht klar, was Ihren unregelmäßigen Herzschlag verursacht.",show_ref:!1},{src:"It is not clear what is causing your prolonged nausea.",display_src:"It is not clear what is causing your prolonged nausea.",ref:"Es ist nicht klar, was die Ursache für Ihre anhaltende Übelkeit ist.",show_ref:!1},{src:"It is not clear what is causing your shortness of breath.",display_src:"It is not clear what is causing your shortness of breath.",ref:"Es ist nicht klar, was Ihre Atemnot verursacht.",show_ref:!1},{src:"It is not clear what is causing your frequent night sweats.",display_src:"It is not clear what is causing your frequent night sweats.",ref:"Es ist nicht klar, was die Ursache für Ihr häufiges nächtliches Schwitzen ist.",show_ref:!1},{src:"It is not clear what is causing your unrelenting abdominal pain.",display_src:"It is not clear what is causing your unrelenting abdominal pain.",ref:"Es ist nicht klar, was die Ursache für Ihre anhaltenden Bauchschmerzen ist.",show_ref:!1},{src:"We think your dizziness is due to the blood pressure medication you have been prescribed.",display_src:"We think your dizziness is due to the blood pressure medication you have been prescribed.",ref:"Wir gehen davon aus, dass Ihr Schwindel auf die Medikamente zurückzuführen ist, die Ihnen verschrieben wurden.",show_ref:!1},{src:"We think your dry mouth is due to the antihistamines you've been taking for your allergies.",display_src:"We think your dry mouth is due to the antihistamines you've been taking for your allergies.",ref:"Wir vermuten, dass Ihr trockener Mund auf die Antihistaminika zurückzuführen ist, die Sie gegen Ihre Allergien eingenommen haben.",show_ref:!1},{src:"We think your upset stomach is due to the antibiotic treatment you have been receiving.",display_src:"We think your upset stomach is due to the antibiotic treatment you have been receiving.",ref:"Wir gehen davon aus, dass Ihre Magenbeschwerden auf die Antibiotika-Behandlung zurückzuführen sind, die Sie erhalten haben.",show_ref:!1},{src:"We think your headache is due to the pain medication you've been given during your hospital stay.",display_src:"We think your headache is due to the pain medication you've been given during your hospital stay.",ref:"Wir gehen davon aus, dass Ihre Kopfschmerzen auf die Schmerzmittel zurückzuführen sind, die Sie während Ihres Krankenhausaufenthalts erhalten haben.",show_ref:!1},{src:"We think your constipation is due to the iron supplements you've been taking for your anemia.",display_src:"We think your constipation is due to the iron supplements you've been taking for your anemia.",ref:"Wir gehen davon aus, dass Ihre Verstopfung auf die Eisenpräparate zurückzuführen ist, die Sie gegen Ihre Anämie eingenommen haben.",show_ref:!1},{src:"We think your increased heart rate is due to the bronchodilator inhaler you've been using for your asthma.",display_src:"We think your increased heart rate is due to the bronchodilator inhaler you've been using for your asthma.",ref:"Wir glauben, dass Ihre erhöhte Herzfrequenz auf den Bronchodilatator-Inhalator zurückzuführen ist, den Sie gegen Ihr Asthma verwendet haben.",show_ref:!1},{src:"We think your fatigue is due to the antidepressant medication you started taking recently.",display_src:"We think your fatigue is due to the antidepressant medication you started taking recently.",ref:"Wir glauben, dass Ihre Müdigkeit auf die Antidepressiva zurückzuführen ist, die Sie kürzlich eingenommen haben.",show_ref:!1},{src:"We think your weight gain is due to the corticosteroid treatment you have been receiving for your inflammation.",display_src:"We think your weight gain is due to the corticosteroid treatment you have been receiving for your inflammation.",ref:"Wir gehen davon aus, dass Ihre Gewichtszunahme auf die Behandlung mit Kortikosteroiden zurückzuführen ist, die Sie wegen Ihrer Entzündung erhalten haben.",show_ref:!1},{src:"We think your frequent urination is due to the diuretic medication you've been prescribed for your fluid retention.",display_src:"We think your frequent urination is due to the diuretic medication you've been prescribed for your fluid retention.",ref:"Wir gehen davon aus, dass Ihr häufiges Wasserlassen auf die harntreibenden Medikamente zurückzuführen ist, die Ihnen wegen Ihrer Flüssigkeitsansammlung verschrieben wurden.",show_ref:!1},{src:"We think your insomnia is due to the stimulant medication you've been taking for your attention deficit disorder.",display_src:"We think your insomnia is due to the stimulant medication you've been taking for your attention deficit disorder.",ref:"Wir glauben, dass Ihre Schlaflosigkeit auf die stimulierenden Medikamente zurückzuführen ist, die Sie gegen Ihr Aufmerksamkeitsdefizitsyndrom eingenommen haben.",show_ref:!1},{src:"Hypertension is not causing problems at this time.",display_src:"Hypertension is not causing problems at this time.",ref:"Bluthochdruck verursacht derzeit keine Probleme.",show_ref:!1},{src:"Diabetes is not causing problems at this time.",display_src:"Diabetes is not causing problems at this time.",ref:"Diabetes verursacht derzeit keine Probleme.",show_ref:!1},{src:"Asthma is not causing problems at this time.",display_src:"Asthma is not causing problems at this time.",ref:"Asthma verursacht derzeit keine Probleme.",show_ref:!1},{src:"Congestive heart failure is not causing problems at this time.",display_src:"Congestive heart failure is not causing problems at this time.",ref:"Herzinsuffizienz verursacht derzeit keine Probleme.",show_ref:!1},{src:"Chronic obstructive pulmonary disease is not causing problems at this time.",display_src:"Chronic obstructive pulmonary disease is not causing problems at this time.",ref:"Eine chronisch obstruktive Lungenerkrankung bereitet derzeit keine Probleme.",show_ref:!1},{src:"Anemia is not causing problems at this time.",display_src:"Anemia is not causing problems at this time.",ref:"Anämie verursacht derzeit keine Probleme.",show_ref:!1},{src:"Gastroesophageal reflux disease is not causing problems at this time.",display_src:"Gastroesophageal reflux disease is not causing problems at this time.",ref:"Die gastroösophageale Refluxkrankheit verursacht derzeit keine Probleme.",show_ref:!1},{src:"Sleep apnea is not causing problems at this time.",display_src:"Sleep apnea is not causing problems at this time.",ref:"Schlafapnoe verursacht derzeit keine Probleme.",show_ref:!1},{src:"Osteoarthritis is not causing problems at this time.",display_src:"Osteoarthritis is not causing problems at this time.",ref:"Arthrose verursacht derzeit keine Probleme.",show_ref:!1},{src:"Chronic kidney disease is not causing problems at this time.",display_src:"Chronic kidney disease is not causing problems at this time.",ref:"Eine chronische Nierenerkrankung bereitet derzeit keine Probleme.",show_ref:!1},{src:"Pneumonia causes persistent coughing and difficulty breathing.",display_src:"Pneumonia causes persistent coughing and difficulty breathing.",ref:"Eine Lungenentzündung verursacht anhaltenden Husten und Atembeschwerden.",show_ref:!1},{src:"Diabetes causes frequent urination and increased thirst.",display_src:"Diabetes causes frequent urination and increased thirst.",ref:"Diabetes führt zu häufigem Wasserlassen und erhöhtem Durst.",show_ref:!1},{src:"Asthma causes wheezing and shortness of breath.",display_src:"Asthma causes wheezing and shortness of breath.",ref:"Asthma verursacht pfeifende Atmung und Kurzatmigkeit.",show_ref:!1},{src:"Hypertension causes headaches and dizziness.",display_src:"Hypertension causes headaches and dizziness.",ref:"Bluthochdruck verursacht Kopfschmerzen und Schwindel.",show_ref:!1},{src:"Anemia causes fatigue and pale skin.",display_src:"Anemia causes fatigue and pale skin.",ref:"Anämie führt zu Müdigkeit und blasser Haut.",show_ref:!1},{src:"Gastroesophageal reflux disease (GERD) causes heartburn and chest pain.",display_src:"Gastroesophageal reflux disease (GERD) causes heartburn and chest pain.",ref:"Die gastroösophageale Refluxkrankheit (GERD) verursacht Sodbrennen und Brustschmerzen.",show_ref:!1},{src:"Heart failure causes swelling in the legs and shortness of breath.",display_src:"Heart failure causes swelling in the legs and shortness of breath.",ref:"Herzinsuffizienz führt zu Schwellungen in den Beinen und Atemnot.",show_ref:!1},{src:"Kidney stones cause severe pain in the lower back and blood in the urine.",display_src:"Kidney stones cause severe pain in the lower back and blood in the urine.",ref:"Nierensteine verursachen starke Schmerzen im unteren Rückenbereich und Blut im Urin.",show_ref:!1},{src:"Chronic obstructive pulmonary disease (COPD) causes chronic cough and frequent respiratory infections.",display_src:"Chronic obstructive pulmonary disease (COPD) causes chronic cough and frequent respiratory infections.",ref:"Die chronisch obstruktive Lungenerkrankung (COPD) verursacht chronischen Husten und häufige Infektionen der Atemwege.",show_ref:!1},{src:"Rheumatoid arthritis causes joint pain and stiffness.",display_src:"Rheumatoid arthritis causes joint pain and stiffness.",ref:"Rheumatoide Arthritis verursacht Gelenkschmerzen und Steifheit.",show_ref:!1},{src:"We think your dizziness is a side effect of Lisinopril.",display_src:"We think your dizziness is a side effect of Lisinopril.",ref:"Wir glauben, dass Ihr Schwindel eine Nebenwirkung von Lisinopril ist.",show_ref:!1},{src:"We think your constipation is a side effect of Omeprazole.",display_src:"We think your constipation is a side effect of Omeprazole.",ref:"Wir glauben, dass Ihre Verstopfung eine Nebenwirkung von Omeprazol ist.",show_ref:!1},{src:"We think your dry mouth is a side effect of Cetirizine.",display_src:"We think your dry mouth is a side effect of Cetirizine.",ref:"Wir glauben, dass Ihr trockener Mund eine Nebenwirkung von Cetirizin ist.",show_ref:!1},{src:"We think your nausea is a side effect of Metformin.",display_src:"We think your nausea is a side effect of Metformin.",ref:"Wir glauben, dass Ihre Übelkeit eine Nebenwirkung von Metformin ist.",show_ref:!1},{src:"We think your insomnia is a side effect of Prednisone.",display_src:"We think your insomnia is a side effect of Prednisone.",ref:"Wir glauben, dass Ihre Schlaflosigkeit eine Nebenwirkung von Prednison ist.",show_ref:!1},{src:"We think your headache is a side effect of Amlodipine.",display_src:"We think your headache is a side effect of Amlodipine.",ref:"Wir glauben, dass Ihre Kopfschmerzen eine Nebenwirkung von Amlodipin sind.",show_ref:!1},{src:"We think your fatigue is a side effect of Gabapentin.",display_src:"We think your fatigue is a side effect of Gabapentin.",ref:"Wir glauben, dass Ihre Müdigkeit eine Nebenwirkung von Gabapentin ist.",show_ref:!1},{src:"We think your weight gain is a side effect of Paxil.",display_src:"We think your weight gain is a side effect of Paxil.",ref:"Wir glauben, dass Ihre Gewichtszunahme eine Nebenwirkung von Paxil ist.",show_ref:!1},{src:"We think your decreased appetite is a side effect of Adderall.",display_src:"We think your decreased appetite is a side effect of Adderall.",ref:"Wir glauben, dass Ihr verminderter Appetit eine Nebenwirkung von Adderall ist.",show_ref:!1},{src:"We think your muscle pain is a side effect of Atorvastatin.",display_src:"We think your muscle pain is a side effect of Atorvastatin.",ref:"Wir gehen davon aus, dass Ihre Muskelschmerzen eine Nebenwirkung von Atorvastatin sind.",show_ref:!1},{src:"You have a history of hypertension.",display_src:"You have a history of hypertension.",ref:"Sie haben eine Vorgeschichte von Bluthochdruck.",show_ref:!1},{src:"You have a history of type 2 diabetes.",display_src:"You have a history of type 2 diabetes.",ref:"Sie haben eine Vorgeschichte von Typ-2-Diabetes.",show_ref:!1},{src:"You have a history of asthma.",display_src:"You have a history of asthma.",ref:"Sie haben eine Vorgeschichte von Asthma.",show_ref:!1},{src:"You have a history of congestive heart failure.",display_src:"You have a history of congestive heart failure.",ref:"Sie haben eine Vorgeschichte von Herzinsuffizienz.",show_ref:!1},{src:"You have a history of chronic kidney disease.",display_src:"You have a history of chronic kidney disease.",ref:"Sie haben in der Vergangenheit eine chronische Nierenerkrankung.",show_ref:!1},{src:"You have a history of deep vein thrombosis.",display_src:"You have a history of deep vein thrombosis.",ref:"Sie haben eine Vorgeschichte von tiefen Venenthrombosen.",show_ref:!1},{src:"You have a history of osteoarthritis.",display_src:"You have a history of osteoarthritis.",ref:"Sie haben eine Vorgeschichte von Arthrose.",show_ref:!1},{src:"You have a history of chronic obstructive pulmonary disease (COPD).",display_src:"You have a history of chronic obstructive pulmonary disease (COPD).",ref:"Sie leiden an einer chronisch obstruktiven Lungenerkrankung (COPD).",show_ref:!1},{src:"You have a history of coronary artery disease.",display_src:"You have a history of coronary artery disease.",ref:"Sie haben eine Vorgeschichte einer koronaren Herzkrankheit.",show_ref:!1},{src:"You have a history of anemia.",display_src:"You have a history of anemia.",ref:"Sie haben eine Vorgeschichte von Anämie.",show_ref:!1},{src:"We did not find any dangerous cause of your chest pain.",display_src:"We did not find any dangerous cause of your chest pain.",ref:"Wir haben keine gefährliche Ursache für Ihre Brustschmerzen gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your shortness of breath.",display_src:"We did not find any dangerous cause of your shortness of breath.",ref:"Wir haben keine gefährliche Ursache für Ihre Atemnot gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your abdominal pain.",display_src:"We did not find any dangerous cause of your abdominal pain.",ref:"Wir haben keine gefährliche Ursache für Ihre Bauchschmerzen gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your persistent headache.",display_src:"We did not find any dangerous cause of your persistent headache.",ref:"Wir haben keine gefährliche Ursache für Ihre anhaltenden Kopfschmerzen gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your dizziness or fainting episodes.",display_src:"We did not find any dangerous cause of your dizziness or fainting episodes.",ref:"Wir haben keine gefährliche Ursache für Ihre Schwindel- oder Ohnmachtsanfälle gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your irregular heartbeat.",display_src:"We did not find any dangerous cause of your irregular heartbeat.",ref:"Wir haben keine gefährliche Ursache für Ihren unregelmäßigen Herzschlag gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your unexplained weight loss.",display_src:"We did not find any dangerous cause of your unexplained weight loss.",ref:"Wir haben keine gefährliche Ursache für Ihren unerklärlichen Gewichtsverlust gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your sudden vision changes.",display_src:"We did not find any dangerous cause of your sudden vision changes.",ref:"Wir haben keine gefährliche Ursache für Ihre plötzlichen Sehstörungen gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your prolonged fever.",display_src:"We did not find any dangerous cause of your prolonged fever.",ref:"Wir haben keine gefährliche Ursache für Ihr anhaltendes Fieber gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your joint pain and swelling.",display_src:"We did not find any dangerous cause of your joint pain and swelling.",ref:"Wir haben keine gefährliche Ursache für Ihre Gelenkschmerzen und Schwellungen gefunden.",show_ref:!1},{src:"It is safe for you to go home at this time.",display_src:"It is safe for you to go home at this time.",ref:"Zu diesem Zeitpunkt ist es für Sie sicher, nach Hause zu gehen.",show_ref:!1},{src:"You chose to leave the hospital against medical advice.",display_src:"You chose to leave the hospital against medical advice.",ref:"Sie haben sich entschieden, das Krankenhaus entgegen dem ärztlichen Rat zu verlassen.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic DEID-8721.",display_src:"Please follow up with the Cardiology Clinic DEID-8721.",ref:"Bitte wenden Sie sich an die Kardiologieklinik DEID-8721.",show_ref:!1},{src:"Please follow up with the Diabetes and Endocrinology Center DEID-5439.",display_src:"Please follow up with the Diabetes and Endocrinology Center DEID-5439.",ref:"Bitte wenden Sie sich an das Diabetes- und Endokrinologiezentrum DEID-5439.",show_ref:!1},{src:"Please follow up with the Orthopedic and Rehabilitation Clinic DEID-0956.",display_src:"Please follow up with the Orthopedic and Rehabilitation Clinic DEID-0956.",ref:"Bitte wenden Sie sich an die Orthopädie- und Rehabilitationsklinik DEID-0956.",show_ref:!1},{src:"Please follow up with the Pulmonary and Respiratory Care Clinic DEID-4783.",display_src:"Please follow up with the Pulmonary and Respiratory Care Clinic DEID-4783.",ref:"Bitte wenden Sie sich an die Klinik für Lungen- und Atemwegspflege DEID-4783.",show_ref:!1},{src:"Please follow up with the Gastrointestinal and Hepatology Clinic DEID-6102.",display_src:"Please follow up with the Gastrointestinal and Hepatology Clinic DEID-6102.",ref:"Bitte wenden Sie sich an die Klinik für Gastrointestinal- und Hepatologie DEID-6102.",show_ref:!1},{src:"Please follow up with the Neurology and Stroke Center DEID-7394.",display_src:"Please follow up with the Neurology and Stroke Center DEID-7394.",ref:"Bitte wenden Sie sich an das Neurologie- und Schlaganfallzentrum DEID-7394.",show_ref:!1},{src:"Please follow up with the Oncology and Cancer Treatment Clinic DEID-8045.",display_src:"Please follow up with the Oncology and Cancer Treatment Clinic DEID-8045.",ref:"Bitte wenden Sie sich an die Klinik für Onkologie und Krebsbehandlung DEID-8045.",show_ref:!1},{src:"Please follow up with the Nephrology and Kidney Care Clinic DEID-3621.",display_src:"Please follow up with the Nephrology and Kidney Care Clinic DEID-3621.",ref:"Bitte wenden Sie sich an die Klinik für Nephrologie und Nierenpflege DEID-3621.",show_ref:!1},{src:"Please follow up with the Obstetrics and Gynecology Clinic DEID-5097.",display_src:"Please follow up with the Obstetrics and Gynecology Clinic DEID-5097.",ref:"Bitte wenden Sie sich an die Klinik für Geburtshilfe und Gynäkologie DEID-5097.",show_ref:!1},{src:"Please follow up with the Pediatrics and Child Health Clinic DEID-2918.",display_src:"Please follow up with the Pediatrics and Child Health Clinic DEID-2918.",ref:"Bitte wenden Sie sich an die Klinik für Pädiatrie und Kindergesundheit DEID-2918.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic within the next 7 days.",display_src:"Please follow up with the Cardiology Clinic within the next 7 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 7 Tage die Klinik für Kardiologie.",show_ref:!1},{src:"Please follow up with the Physical Therapy Department within the next 2 weeks.",display_src:"Please follow up with the Physical Therapy Department within the next 2 weeks.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 2 Wochen die Abteilung für Physiotherapie.",show_ref:!1},{src:"Please follow up with the Diabetes Center within the next 10 days.",display_src:"Please follow up with the Diabetes Center within the next 10 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 10 Tage das Diabeteszentrum.",show_ref:!1},{src:"Please follow up with the Wound Care Clinic within the next 5 days.",display_src:"Please follow up with the Wound Care Clinic within the next 5 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 5 Tage die Wundversorgungsklinik.",show_ref:!1},{src:"Please follow up with the Pulmonology Department within the next 3 weeks.",display_src:"Please follow up with the Pulmonology Department within the next 3 weeks.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 3 Wochen die Abteilung für Pneumologie.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic within the next 12 days.",display_src:"Please follow up with the Nephrology Clinic within the next 12 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 12 Tage die Klinik für Nephrologie.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic within the next 14 days.",display_src:"Please follow up with the Orthopedic Clinic within the next 14 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 14 Tage die orthopädische Klinik.",show_ref:!1},{src:"Please follow up with the Gastroenterology Department within the next 21 days.",display_src:"Please follow up with the Gastroenterology Department within the next 21 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 21 Tage die Abteilung für Gastroenterologie.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic within the next 1 week.",display_src:"Please follow up with the Rheumatology Clinic within the next 1 week.",ref:"Bitte kontaktieren Sie innerhalb der nächsten Woche die Rheumatologie-Klinik.",show_ref:!1},{src:"Please follow up with the Oncology Department within the next 4 weeks.",display_src:"Please follow up with the Oncology Department within the next 4 weeks.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 4 Wochen die Onkologieabteilung.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic as soon as possible.",display_src:"Please follow up with the Cardiology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Klinik für Kardiologie.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic as soon as possible.",display_src:"Please follow up with the Orthopedic Clinic as soon as possible.",ref:"Bitte wenden Sie sich schnellstmöglich an die Orthopädische Klinik.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic as soon as possible.",display_src:"Please follow up with the Gastroenterology Clinic as soon as possible.",ref:"Bitte wenden Sie sich schnellstmöglich an die Klinik für Gastroenterologie.",show_ref:!1},{src:"Please follow up with the Oncology Clinic as soon as possible.",display_src:"Please follow up with the Oncology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Onkologische Klinik.",show_ref:!1},{src:"Please follow up with the Neurology Clinic as soon as possible.",display_src:"Please follow up with the Neurology Clinic as soon as possible.",ref:"Bitte wenden Sie sich schnellstmöglich an die Klinik für Neurologie.",show_ref:!1},{src:"Please follow up with the Pulmonology Clinic as soon as possible.",display_src:"Please follow up with the Pulmonology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Klinik für Pneumologie.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic as soon as possible.",display_src:"Please follow up with the Nephrology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Klinik für Nephrologie.",show_ref:!1},{src:"Please follow up with the Endocrinology Clinic as soon as possible.",display_src:"Please follow up with the Endocrinology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Klinik für Endokrinologie.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic as soon as possible.",display_src:"Please follow up with the Rheumatology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Rheumatologieklinik.",show_ref:!1},{src:"Please follow up with the Urology Clinic as soon as possible.",display_src:"Please follow up with the Urology Clinic as soon as possible.",ref:"Bitte wenden Sie sich schnellstmöglich an die Urologische Klinik.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic to discuss your medications.",display_src:"Please follow up with the Cardiology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Kardiologie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Endocrinology Clinic to discuss your medications.",display_src:"Please follow up with the Endocrinology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Endokrinologie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Oncology Clinic to discuss your medications.",display_src:"Please follow up with the Oncology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Onkologieklinik, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic to discuss your medications.",display_src:"Please follow up with the Nephrology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Nephrologie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic to discuss your medications.",display_src:"Please follow up with the Pulmonary Clinic to discuss your medications.",ref:"Bitte wenden Sie sich an die Lungenklinik, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic to discuss your medications.",display_src:"Please follow up with the Gastroenterology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Gastroenterologie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic to discuss your medications.",display_src:"Please follow up with the Rheumatology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Rheumatologieklinik, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Neurology Clinic to discuss your medications.",display_src:"Please follow up with the Neurology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Neurologie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Psychiatry Clinic to discuss your medications.",display_src:"Please follow up with the Psychiatry Clinic to discuss your medications.",ref:"Bitte wenden Sie sich an die psychiatrische Klinik, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Geriatrics Clinic to discuss your medications.",display_src:"Please follow up with the Geriatrics Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Geriatrie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic for your scheduled stress test and medication review.",display_src:"Please follow up with the Cardiology Clinic for your scheduled stress test and medication review.",ref:"Bitte kontaktieren Sie die Klinik für Kardiologie für Ihren geplanten Stresstest und die Überprüfung Ihrer Medikamente.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic for your lung function tests and inhaler therapy assessment.",display_src:"Please follow up with the Pulmonary Clinic for your lung function tests and inhaler therapy assessment.",ref:"Bitte kontaktieren Sie die Lungenklinik für Ihre Lungenfunktionstests und die Beurteilung der Inhalationstherapie.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic for your post-operative evaluation and physical therapy recommendations.",display_src:"Please follow up with the Orthopedic Clinic for your post-operative evaluation and physical therapy recommendations.",ref:"Bitte kontaktieren Sie die orthopädische Klinik für Ihre postoperative Beurteilung und Empfehlungen zur Physiotherapie.",show_ref:!1},{src:"Please follow up with the Diabetes Management Clinic for blood sugar monitoring and insulin regimen adjustments.",display_src:"Please follow up with the Diabetes Management Clinic for blood sugar monitoring and insulin regimen adjustments.",ref:"Bitte wenden Sie sich zur Blutzuckerüberwachung und Anpassung des Insulinregimes an die Diabetes Management Clinic.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic for your colonoscopy and dietary consultation.",display_src:"Please follow up with the Gastroenterology Clinic for your colonoscopy and dietary consultation.",ref:"Bitte wenden Sie sich für Ihre Darmspiegelung und Ernährungsberatung an die Klinik für Gastroenterologie.",show_ref:!1},{src:"Please follow up with the Neurology Clinic for your seizure management and anti-epileptic medication adjustments.",display_src:"Please follow up with the Neurology Clinic for your seizure management and anti-epileptic medication adjustments.",ref:"Bitte wenden Sie sich bezüglich der Anfallsbehandlung und der Anpassung Ihrer Antiepileptika-Medikamente an die Klinik für Neurologie.",show_ref:!1},{src:"Please follow up with the Oncology Clinic for your chemotherapy treatment plan and follow-up imaging studies.",display_src:"Please follow up with the Oncology Clinic for your chemotherapy treatment plan and follow-up imaging studies.",ref:"Bitte kontaktieren Sie die Onkologische Klinik für Ihren Chemotherapie-Behandlungsplan und weitere bildgebende Untersuchungen.",show_ref:!1},{src:"Please follow up with the Urology Clinic for your prostate health assessment and treatment options discussion.",display_src:"Please follow up with the Urology Clinic for your prostate health assessment and treatment options discussion.",ref:"Bitte wenden Sie sich für die Beurteilung Ihrer Prostatagesundheit und die Besprechung der Behandlungsoptionen an die Klinik für Urologie.",show_ref:!1},{src:"Please follow up with the Physical Medicine and Rehabilitation Clinic for your post-stroke care and rehabilitation planning.",display_src:"Please follow up with the Physical Medicine and Rehabilitation Clinic for your post-stroke care and rehabilitation planning.",ref:"Bitte kontaktieren Sie die Klinik für Physikalische Medizin und Rehabilitation für Ihre Nachsorge- und Rehabilitationsplanung.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic for your arthritis management and biologic therapy evaluation.",display_src:"Please follow up with the Rheumatology Clinic for your arthritis management and biologic therapy evaluation.",ref:"Bitte kontaktieren Sie die Rheumatologie-Klinik für Ihr Arthritis-Management und die Bewertung der biologischen Therapie.",show_ref:!1},{src:"Please follow up with Cardiology Clinic for an Echocardiogram.",display_src:"Please follow up with Cardiology Clinic for an Echocardiogram.",ref:"Bitte wenden Sie sich für ein Echokardiogramm an die Klinik für Kardiologie.",show_ref:!1},{src:"Please follow up with Endocrinology Clinic for a Thyroid Function Test.",display_src:"Please follow up with Endocrinology Clinic for a Thyroid Function Test.",ref:"Bitte wenden Sie sich für einen Schilddrüsenfunktionstest an die Klinik für Endokrinologie.",show_ref:!1},{src:"Please follow up with Gastroenterology Clinic for a Colonoscopy.",display_src:"Please follow up with Gastroenterology Clinic for a Colonoscopy.",ref:"Bitte wenden Sie sich für eine Koloskopie an die Klinik für Gastroenterologie.",show_ref:!1},{src:"Please follow up with Nephrology Clinic for a Kidney Function Test.",display_src:"Please follow up with Nephrology Clinic for a Kidney Function Test.",ref:"Bitte wenden Sie sich für einen Nierenfunktionstest an die Klinik für Nephrologie.",show_ref:!1},{src:"Please follow up with Neurology Clinic for an Electroencephalogram.",display_src:"Please follow up with Neurology Clinic for an Electroencephalogram.",ref:"Bitte wenden Sie sich für ein Elektroenzephalogramm an die Klinik für Neurologie.",show_ref:!1},{src:"Please follow up with Oncology Clinic for a Positron Emission Tomography Scan.",display_src:"Please follow up with Oncology Clinic for a Positron Emission Tomography Scan.",ref:"Bitte wenden Sie sich für eine Positronen-Emissions-Tomographie-Untersuchung an die Onkologische Klinik.",show_ref:!1},{src:"Please follow up with Pulmonology Clinic for a Pulmonary Function Test.",display_src:"Please follow up with Pulmonology Clinic for a Pulmonary Function Test.",ref:"Bitte wenden Sie sich für einen Lungenfunktionstest an die Klinik für Pneumologie.",show_ref:!1},{src:"Please follow up with Rheumatology Clinic for an Antinuclear Antibody Test.",display_src:"Please follow up with Rheumatology Clinic for an Antinuclear Antibody Test.",ref:"Bitte kontaktieren Sie die Klinik für Rheumatologie für einen Test auf antinukleäre Antikörper.",show_ref:!1},{src:"Please follow up with Urology Clinic for a Cystoscopy.",display_src:"Please follow up with Urology Clinic for a Cystoscopy.",ref:"Bitte wenden Sie sich für eine Zystoskopie an die Urologische Klinik.",show_ref:!1},{src:"Please follow up with Hematology Clinic for a Complete Blood Count.",display_src:"Please follow up with Hematology Clinic for a Complete Blood Count.",ref:"Bitte wenden Sie sich für ein großes Blutbild an die Hämatologieklinik.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic to discuss your test results.",display_src:"Please follow up with the Cardiology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Kardiologie, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Oncology Clinic to discuss your test results.",display_src:"Please follow up with the Oncology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Onkologieklinik, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic to discuss your test results.",display_src:"Please follow up with the Gastroenterology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Gastroenterologie, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic to discuss your test results.",display_src:"Please follow up with the Pulmonary Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Lungenklinik, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic to discuss your test results.",display_src:"Please follow up with the Nephrology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Nephrologie, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Neurology Clinic to discuss your test results.",display_src:"Please follow up with the Neurology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Neurologie, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Endocrinology Clinic to discuss your test results.",display_src:"Please follow up with the Endocrinology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Endokrinologie, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic to discuss your test results.",display_src:"Please follow up with the Rheumatology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Rheumatologieklinik, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic to discuss your test results.",display_src:"Please follow up with the Orthopedic Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die orthopädische Klinik, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Infectious Disease Clinic to discuss your test results.",display_src:"Please follow up with the Infectious Disease Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Infektionskrankheiten, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic to monitor your chest pain and heart health.",display_src:"Please follow up with the Cardiology Clinic to monitor your chest pain and heart health.",ref:"Bitte wenden Sie sich an die Klinik für Kardiologie, um Ihre Brustschmerzen und Ihre Herzgesundheit zu überwachen.",show_ref:!1},{src:"Please follow up with the Diabetes Care Center to monitor your blood sugar levels.",display_src:"Please follow up with the Diabetes Care Center to monitor your blood sugar levels.",ref:"Bitte wenden Sie sich an das Diabetes Care Center, um Ihren Blutzuckerspiegel zu überwachen.",show_ref:!1},{src:"Please follow up with the Neurology Clinic to monitor your headaches and migraines.",display_src:"Please follow up with the Neurology Clinic to monitor your headaches and migraines.",ref:"Bitte wenden Sie sich an die Klinik für Neurologie, um Ihre Kopfschmerzen und Migräne zu überwachen.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic to monitor your abdominal pain and digestive issues.",display_src:"Please follow up with the Gastroenterology Clinic to monitor your abdominal pain and digestive issues.",ref:"Bitte wenden Sie sich an die Klinik für Gastroenterologie, um Ihre Bauchschmerzen und Verdauungsprobleme zu überwachen.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic to monitor your joint pain and mobility.",display_src:"Please follow up with the Orthopedic Clinic to monitor your joint pain and mobility.",ref:"Bitte wenden Sie sich an die orthopädische Klinik, um Ihre Gelenkschmerzen und Ihre Beweglichkeit zu überwachen.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic to monitor your shortness of breath and lung function.",display_src:"Please follow up with the Pulmonary Clinic to monitor your shortness of breath and lung function.",ref:"Bitte wenden Sie sich an die Lungenklinik, um Ihre Atemnot und Lungenfunktion zu überwachen.",show_ref:!1},{src:"Please follow up with the Urology Clinic to monitor your urinary symptoms and kidney health.",display_src:"Please follow up with the Urology Clinic to monitor your urinary symptoms and kidney health.",ref:"Bitte wenden Sie sich an die Urologische Klinik, um Ihre Harnbeschwerden und Ihre Nierengesundheit zu überwachen.",show_ref:!1},{src:"Please follow up with the Oncology Clinic to monitor your cancer treatment and progress.",display_src:"Please follow up with the Oncology Clinic to monitor your cancer treatment and progress.",ref:"Bitte wenden Sie sich an die Onkologieklinik, um Ihre Krebsbehandlung und den Fortschritt zu überwachen.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic to monitor your autoimmune disease and inflammation.",display_src:"Please follow up with the Rheumatology Clinic to monitor your autoimmune disease and inflammation.",ref:"Bitte wenden Sie sich an die Klinik für Rheumatologie, um Ihre Autoimmunerkrankung und Entzündung zu überwachen.",show_ref:!1},{src:"Please follow up with the Psychiatry Clinic to monitor your mental health and well-being.",display_src:"Please follow up with the Psychiatry Clinic to monitor your mental health and well-being.",ref:"Bitte kontaktieren Sie die Psychiatrie-Klinik, um Ihre geistige Gesundheit und Ihr Wohlbefinden zu überwachen.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic for further evaluation.",display_src:"Please follow up with the Cardiology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Kardiologie.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic for further evaluation.",display_src:"Please follow up with the Gastroenterology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Gastroenterologie.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic for further evaluation.",display_src:"Please follow up with the Pulmonary Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Lungenklinik.",show_ref:!1},{src:"Please follow up with the Neurology Clinic for further evaluation.",display_src:"Please follow up with the Neurology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Neurologie.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic for further evaluation.",display_src:"Please follow up with the Orthopedic Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die orthopädische Klinik.",show_ref:!1},{src:"Please follow up with the Endocrinology Clinic for further evaluation.",display_src:"Please follow up with the Endocrinology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Endokrinologie.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic for further evaluation.",display_src:"Please follow up with the Rheumatology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Rheumatologie.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic for further evaluation.",display_src:"Please follow up with the Nephrology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Nephrologie.",show_ref:!1},{src:"Please follow up with the Oncology Clinic for further evaluation.",display_src:"Please follow up with the Oncology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Onkologieklinik.",show_ref:!1},{src:"Please follow up with the Dermatology Clinic for further evaluation.",display_src:"Please follow up with the Dermatology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Dermatologieklinik.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic if your symptoms persist.",display_src:"Please follow up with the Cardiology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Klinik für Kardiologie.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic if your symptoms persist.",display_src:"Please follow up with the Gastroenterology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Gastroenterologie-Klinik.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic if your symptoms persist.",display_src:"Please follow up with the Orthopedic Clinic if your symptoms persist.",ref:"Sollten Ihre Beschwerden weiterhin bestehen, wenden Sie sich bitte an die orthopädische Klinik.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic if your symptoms persist.",display_src:"Please follow up with the Pulmonary Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Lungenklinik.",show_ref:!1},{src:"Please follow up with the Endocrinology Clinic if your symptoms persist.",display_src:"Please follow up with the Endocrinology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Endokrinologie-Klinik.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic if your symptoms persist.",display_src:"Please follow up with the Nephrology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Klinik für Nephrologie.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic if your symptoms persist.",display_src:"Please follow up with the Rheumatology Clinic if your symptoms persist.",ref:"Sollten Ihre Beschwerden weiterhin bestehen, wenden Sie sich bitte an die Rheumatologie-Klinik.",show_ref:!1},{src:"Please follow up with the Neurology Clinic if your symptoms persist.",display_src:"Please follow up with the Neurology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Klinik für Neurologie.",show_ref:!1},{src:"Please follow up with the Oncology Clinic if your symptoms persist.",display_src:"Please follow up with the Oncology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Onkologische Klinik.",show_ref:!1},{src:"Please follow up with the Allergy and Immunology Clinic if your symptoms persist.",display_src:"Please follow up with the Allergy and Immunology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Klinik für Allergie und Immunologie.",show_ref:!1},{src:"You have an appointment with Dr. Smith at Green Valley Clinic on September 12th at 10:00 AM.",display_src:"You have an appointment with Dr. Smith at Green Valley Clinic on September 12th at 10:00 AM.",ref:"Sie haben am 12. September um 10:00 Uhr einen Termin bei Dr. Smith in der Green Valley Clinic.",show_ref:!1},{src:"You have an appointment with Dr. Martin at Wellness Center on October 5th at 2:00 PM.",display_src:"You have an appointment with Dr. Martin at Wellness Center on October 5th at 2:00 PM.",ref:"Sie haben am 5. Oktober um 14:00 Uhr einen Termin mit Dr. Martin im Wellness Center.",show_ref:!1},{src:"You have an appointment with Dr. Patel at Family Care Clinic on August 18th at 9:00 AM.",display_src:"You have an appointment with Dr. Patel at Family Care Clinic on August 18th at 9:00 AM.",ref:"Sie haben am 18. August um 9:00 Uhr einen Termin bei Dr. Patel in der Family Care Clinic.",show_ref:!1},{src:"You have an appointment with Dr. Kim at Heart Health Institute on September 30th at 1:30 PM.",display_src:"You have an appointment with Dr. Kim at Heart Health Institute on September 30th at 1:30 PM.",ref:"Sie haben am 30. September um 13:30 Uhr einen Termin mit Dr. Kim im Heart Health Institute.",show_ref:!1},{src:"You have an appointment with Dr. Johnson at Downtown Medical Center on November 2nd at 11:00 AM.",display_src:"You have an appointment with Dr. Johnson at Downtown Medical Center on November 2nd at 11:00 AM.",ref:"Sie haben am 2. November um 11:00 Uhr einen Termin bei Dr. Johnson im Downtown Medical Center.",show_ref:!1},{src:"You have an appointment with Dr. Garcia at Riverside Clinic on October 20th at 3:00 PM.",display_src:"You have an appointment with Dr. Garcia at Riverside Clinic on October 20th at 3:00 PM.",ref:"Sie haben am 20. Oktober um 15:00 Uhr einen Termin mit Dr. Garcia in der Riverside Clinic.",show_ref:!1},{src:"You have an appointment with Dr. Lee at Advanced Rehab Center on December 1st at 4:00 PM.",display_src:"You have an appointment with Dr. Lee at Advanced Rehab Center on December 1st at 4:00 PM.",ref:"Sie haben am 1. Dezember um 16:00 Uhr einen Termin mit Dr. Lee im Advanced Rehab Center.",show_ref:!1},{src:"You have an appointment with Dr. Taylor at Neurology Specialists on August 27th at 10:30 AM.",display_src:"You have an appointment with Dr. Taylor at Neurology Specialists on August 27th at 10:30 AM.",ref:"Sie haben am 27. August um 10:30 Uhr einen Termin bei Dr. Taylor bei Neurology Specialists.",show_ref:!1},{src:"You have an appointment with Dr. Anderson at Orthopedic Associates on November 15th at 2:30 PM.",display_src:"You have an appointment with Dr. Anderson at Orthopedic Associates on November 15th at 2:30 PM.",ref:"Sie haben am 15. November um 14:30 Uhr einen Termin mit Dr. Anderson bei Orthopaedic Associates.",show_ref:!1},{src:"You have an appointment with Dr. Jackson at Pediatric Clinic on September 25th at 8:30 AM.",display_src:"You have an appointment with Dr. Jackson at Pediatric Clinic on September 25th at 8:30 AM.",ref:"Sie haben am 25. September um 8:30 Uhr einen Termin bei Dr. Jackson in der Kinderklinik.",show_ref:!1},{src:"The Heart Clinic will call you to schedule an appointment.",display_src:"The Heart Clinic will call you to schedule an appointment.",ref:"Die Herzklinik ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Orthopedic Center will call you to schedule an appointment.",display_src:"The Orthopedic Center will call you to schedule an appointment.",ref:"Das Orthopädische Zentrum ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Gastroenterology Unit will call you to schedule an appointment.",display_src:"The Gastroenterology Unit will call you to schedule an appointment.",ref:"Die Abteilung für Gastroenterologie ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Neurology Department will call you to schedule an appointment.",display_src:"The Neurology Department will call you to schedule an appointment.",ref:"Die Abteilung für Neurologie ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Oncology Clinic will call you to schedule an appointment.",display_src:"The Oncology Clinic will call you to schedule an appointment.",ref:"Die Onkologische Klinik ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Dermatology Practice will call you to schedule an appointment.",display_src:"The Dermatology Practice will call you to schedule an appointment.",ref:"Die Hautarztpraxis ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Physical Therapy Facility will call you to schedule an appointment.",display_src:"The Physical Therapy Facility will call you to schedule an appointment.",ref:"Die Physiotherapie-Einrichtung ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Pulmonology Division will call you to schedule an appointment.",display_src:"The Pulmonology Division will call you to schedule an appointment.",ref:"Die Abteilung für Pneumologie ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Rheumatology Clinic will call you to schedule an appointment.",display_src:"The Rheumatology Clinic will call you to schedule an appointment.",ref:"Die Rheumatologie-Klinik ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Endocrinology Center will call you to schedule an appointment.",display_src:"The Endocrinology Center will call you to schedule an appointment.",ref:"Das Endokrinologiezentrum ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Cardiology Clinic to make an appointment.",display_src:"Please call the Cardiology Clinic to make an appointment.",ref:"Bitte rufen Sie die Klinik für Kardiologie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Neurology Clinic to make an appointment.",display_src:"Please call the Neurology Clinic to make an appointment.",ref:"Bitte rufen Sie die Klinik für Neurologie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Gastroenterology Clinic to make an appointment.",display_src:"Please call the Gastroenterology Clinic to make an appointment.",ref:"Bitte rufen Sie die Klinik für Gastroenterologie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Pulmonary Clinic to make an appointment.",display_src:"Please call the Pulmonary Clinic to make an appointment.",ref:"Bitte rufen Sie die Lungenklinik an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Orthopedic Clinic to make an appointment.",display_src:"Please call the Orthopedic Clinic to make an appointment.",ref:"Bitte rufen Sie die Orthopädische Klinik an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Endocrinology Clinic to make an appointment.",display_src:"Please call the Endocrinology Clinic to make an appointment.",ref:"Bitte rufen Sie die Klinik für Endokrinologie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Rheumatology Clinic to make an appointment.",display_src:"Please call the Rheumatology Clinic to make an appointment.",ref:"Bitte rufen Sie die Rheumatologieklinik an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Nephrology Clinic to make an appointment.",display_src:"Please call the Nephrology Clinic to make an appointment.",ref:"Bitte rufen Sie die Klinik für Nephrologie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Dermatology Clinic to make an appointment.",display_src:"Please call the Dermatology Clinic to make an appointment.",ref:"Bitte rufen Sie die Hautklinik an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Oncology Clinic to make an appointment.",display_src:"Please call the Oncology Clinic to make an appointment.",ref:"Bitte rufen Sie die Onkologische Klinik an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please do not miss this appointment.",display_src:"Please do not miss this appointment.",ref:"Bitte verpassen Sie diesen Termin nicht.",show_ref:!1},{src:"We will refer you to the Cardiology Clinic.",display_src:"We will refer you to the Cardiology Clinic.",ref:"Wir verweisen Sie an die Klinik für Kardiologie.",show_ref:!1},{src:"We will refer you to the Pulmonary Rehabilitation Clinic.",display_src:"We will refer you to the Pulmonary Rehabilitation Clinic.",ref:"Wir verweisen Sie an die Klinik für Lungenrehabilitation.",show_ref:!1},{src:"We will refer you to the Diabetes Management Clinic.",display_src:"We will refer you to the Diabetes Management Clinic.",ref:"Wir verweisen Sie an die Diabetes Management Clinic.",show_ref:!1},{src:"We will refer you to the Orthopedic and Physical Therapy Clinic.",display_src:"We will refer you to the Orthopedic and Physical Therapy Clinic.",ref:"Wir verweisen Sie an die Klinik für Orthopädie und Physiotherapie.",show_ref:!1},{src:"We will refer you to the Gastroenterology Clinic.",display_src:"We will refer you to the Gastroenterology Clinic.",ref:"Wir überweisen Sie an die Klinik für Gastroenterologie.",show_ref:!1},{src:"We will refer you to the Oncology Clinic.",display_src:"We will refer you to the Oncology Clinic.",ref:"Wir verweisen Sie an die Onkologische Klinik.",show_ref:!1},{src:"We will refer you to the Nephrology Clinic.",display_src:"We will refer you to the Nephrology Clinic.",ref:"Wir verweisen Sie an die Klinik für Nephrologie.",show_ref:!1},{src:"We will refer you to the Neurology and Stroke Clinic.",display_src:"We will refer you to the Neurology and Stroke Clinic.",ref:"Wir überweisen Sie an die Klinik für Neurologie und Schlaganfall.",show_ref:!1},{src:"We will refer you to the Mental Health Clinic.",display_src:"We will refer you to the Mental Health Clinic.",ref:"Wir verweisen Sie an die Klinik für psychische Gesundheit.",show_ref:!1},{src:"We will refer you to the Pain Management Clinic.",display_src:"We will refer you to the Pain Management Clinic.",ref:"Wir verweisen Sie an die Klinik für Schmerztherapie.",show_ref:!1},{src:"If you do not get a call from Memorial Clinic in the next 3 days, please call at (555) 123-4567.",display_src:"If you do not get a call from Memorial Clinic in the next 3 days, please call at (555) 123-4567.",ref:"Wenn Sie in den nächsten 3 Tagen keinen Anruf von der Memorial Clinic erhalten, rufen Sie bitte unter (555) 123-4567 an.",show_ref:!1},{src:"If you do not get a call from Riverside Health Center in the next 4 days, please call at (555) 234-5678.",display_src:"If you do not get a call from Riverside Health Center in the next 4 days, please call at (555) 234-5678.",ref:"Wenn Sie in den nächsten 4 Tagen keinen Anruf vom Riverside Health Center erhalten, rufen Sie bitte unter (555) 234-5678 an.",show_ref:!1},{src:"If you do not get a call from Parkside Medical Group in the next 5 days, please call at (555) 345-6789.",display_src:"If you do not get a call from Parkside Medical Group in the next 5 days, please call at (555) 345-6789.",ref:"Wenn Sie in den nächsten 5 Tagen keinen Anruf von der Parkside Medical Group erhalten, rufen Sie bitte unter (555) 345-6789 an.",show_ref:!1},{src:"If you do not get a call from Lakeside Family Practice in the next 2 days, please call at (555) 456-7890.",display_src:"If you do not get a call from Lakeside Family Practice in the next 2 days, please call at (555) 456-7890.",ref:"Wenn Sie in den nächsten zwei Tagen keinen Anruf von Lakeside Family Practice erhalten, rufen Sie bitte unter (555) 456-7890 an.",show_ref:!1},{src:"If you do not get a call from Uptown Specialty Clinic in the next 7 days, please call at (555) 567-8901.",display_src:"If you do not get a call from Uptown Specialty Clinic in the next 7 days, please call at (555) 567-8901.",ref:"Wenn Sie in den nächsten 7 Tagen keinen Anruf von der Uptown Specialty Clinic erhalten, rufen Sie bitte unter (555) 567-8901 an.",show_ref:!1},{src:"If you do not get a call from Elm Street Pediatrics in the next 6 days, please call at (555) 678-9012.",display_src:"If you do not get a call from Elm Street Pediatrics in the next 6 days, please call at (555) 678-9012.",ref:"Wenn Sie in den nächsten 6 Tagen keinen Anruf von Elm Street Pediatrics erhalten, rufen Sie bitte unter (555) 678-9012 an.",show_ref:!1},{src:"If you do not get a call from Greenwood Women's Health in the next 10 days, please call at (555) 789-0123.",display_src:"If you do not get a call from Greenwood Women's Health in the next 10 days, please call at (555) 789-0123.",ref:"Wenn Sie in den nächsten 10 Tagen keinen Anruf von Greenwood Women&#39;s Health erhalten, rufen Sie bitte unter (555) 789-0123 an.",show_ref:!1},{src:"If you do not get a call from Oakwood Cardiology Associates in the next 5 days, please call at (555) 890-1234.",display_src:"If you do not get a call from Oakwood Cardiology Associates in the next 5 days, please call at (555) 890-1234.",ref:"Wenn Sie in den nächsten 5 Tagen keinen Anruf von Oakwood Cardiology Associates erhalten, rufen Sie bitte unter (555) 890-1234 an.",show_ref:!1},{src:"If you do not get a call from Spring Valley Orthopedics in the next 7 days, please call at (555) 901-2345.",display_src:"If you do not get a call from Spring Valley Orthopedics in the next 7 days, please call at (555) 901-2345.",ref:"Wenn Sie in den nächsten 7 Tagen keinen Anruf von Spring Valley Orthopaedics erhalten, rufen Sie bitte unter (555) 901-2345 an.",show_ref:!1},{src:"If you do not get a call from Hillcrest Gastroenterology in the next 4 days, please call at (555) 012-3456.",display_src:"If you do not get a call from Hillcrest Gastroenterology in the next 4 days, please call at (555) 012-3456.",ref:"Wenn Sie in den nächsten 4 Tagen keinen Anruf von Hillcrest Gastroenterology erhalten, rufen Sie bitte unter (555) 012-3456 an.",show_ref:!1},{src:"It is very important that you have a follow-up appointment with your primary care physician within the next 7 days.",display_src:"It is very important that you have a follow-up appointment with your primary care physician within the next 7 days.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 7 Tage einen Kontrolltermin bei Ihrem Hausarzt vereinbaren.",show_ref:!1},{src:"It is very important that you have a blood pressure check within the next 48 hours.",display_src:"It is very important that you have a blood pressure check within the next 48 hours.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 48 Stunden eine Blutdruckkontrolle durchführen lassen.",show_ref:!1},{src:"It is very important that you have a wound dressing change within the next 24 hours.",display_src:"It is very important that you have a wound dressing change within the next 24 hours.",ref:"Es ist sehr wichtig, dass der Wundverband innerhalb der nächsten 24 Stunden gewechselt wird.",show_ref:!1},{src:"It is very important that you have a medication review within the next 2 weeks.",display_src:"It is very important that you have a medication review within the next 2 weeks.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 2 Wochen eine Medikamentenüberprüfung durchführen lassen.",show_ref:!1},{src:"It is very important that you have a physical therapy assessment within the next 72 hours.",display_src:"It is very important that you have a physical therapy assessment within the next 72 hours.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 72 Stunden eine physiotherapeutische Untersuchung durchführen lassen.",show_ref:!1},{src:"It is very important that you have a blood sugar test within the next 3 days.",display_src:"It is very important that you have a blood sugar test within the next 3 days.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 3 Tage einen Blutzuckertest durchführen lassen.",show_ref:!1},{src:"It is very important that you have a cardiac stress test within the next 10 days.",display_src:"It is very important that you have a cardiac stress test within the next 10 days.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 10 Tage einen Herzbelastungstest durchführen lassen.",show_ref:!1},{src:"It is very important that you have a pulmonary function test within the next 2 weeks.",display_src:"It is very important that you have a pulmonary function test within the next 2 weeks.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 2 Wochen einen Lungenfunktionstest durchführen lassen.",show_ref:!1},{src:"It is very important that you have a renal function test within the next 5 days.",display_src:"It is very important that you have a renal function test within the next 5 days.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 5 Tage einen Nierenfunktionstest durchführen lassen.",show_ref:!1},{src:"It is very important that you have a mental health evaluation within the next 10 days.",display_src:"It is very important that you have a mental health evaluation within the next 10 days.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 10 Tage eine Untersuchung Ihrer psychischen Gesundheit durchführen lassen.",show_ref:!1},{src:"Follow-up appointments with your outpatient providers are listed below.",display_src:"Follow-up appointments with your outpatient providers are listed below.",ref:"Folgetermine bei Ihren ambulanten Anbietern sind unten aufgeführt.",show_ref:!1},{src:"Please take this copy of your discharge summary with you to your appointment.",display_src:"Please take this copy of your discharge summary with you to your appointment.",ref:"Bitte nehmen Sie diese Kopie Ihres Entlassungsberichts zu Ihrem Termin mit.",show_ref:!1},{src:"Our discharge coordinator will help you arrange an appointment.",display_src:"Our discharge coordinator will help you arrange an appointment.",ref:"Unser Entlassungskoordinator hilft Ihnen bei der Terminvereinbarung.",show_ref:!1},{src:"Please find a primary care doctor.",display_src:"Please find a primary care doctor.",ref:"Bitte suchen Sie einen Hausarzt auf.",show_ref:!1},{src:"Please share this information with your primary care doctor.",display_src:"Please share this information with your primary care doctor.",ref:"Bitte teilen Sie diese Informationen Ihrem Hausarzt mit.",show_ref:!1},{src:"As discussed, please take these medications as follows: ",display_src:"As discussed, please take these medications as follows: ",ref:"Wie besprochen, nehmen Sie diese Medikamente bitte wie folgt ein:",show_ref:!1},{src:"The following medications have CHANGES:",display_src:"The following medications have CHANGES:",ref:"Bei folgenden Medikamenten gibt es ÄNDERUNGEN:",show_ref:!1},{src:"START taking the following medications:",display_src:"START taking the following medications:",ref:"Beginnen Sie mit der Einnahme der folgenden Medikamente:",show_ref:!1},{src:"STOP taking the following medications:",display_src:"STOP taking the following medications:",ref:"Beenden Sie die Einnahme folgender Medikamente:",show_ref:!1},{src:"Take 500 milligrams of medication every 6 hours for 7 days.",display_src:"Take 500 milligrams of medication every 6 hours for 7 days.",ref:"Nehmen Sie 7 Tage lang alle 6 Stunden 500 Milligramm des Medikaments ein.",show_ref:!1},{src:"Drink 8 ounces of water every 2 hours for the next 24 hours.",display_src:"Drink 8 ounces of water every 2 hours for the next 24 hours.",ref:"Trinken Sie in den nächsten 24 Stunden alle 2 Stunden 8 Unzen Wasser.",show_ref:!1},{src:"Apply 1/4 inch of ointment to the affected area twice daily for 10 days.",display_src:"Apply 1/4 inch of ointment to the affected area twice daily for 10 days.",ref:"Tragen Sie 10 Tage lang zweimal täglich 1/4 Zoll Salbe auf die betroffene Stelle auf.",show_ref:!1},{src:"Consume 20 grams of fiber every day for the next 4 weeks.",display_src:"Consume 20 grams of fiber every day for the next 4 weeks.",ref:"Nehmen Sie in den nächsten 4 Wochen täglich 20 Gramm Ballaststoffe zu sich.",show_ref:!1},{src:"Elevate the affected limb 6 inches above heart level for 15 minutes every 3 hours for 5 days.",display_src:"Elevate the affected limb 6 inches above heart level for 15 minutes every 3 hours for 5 days.",ref:"Heben Sie das betroffene Glied 5 Tage lang alle 3 Stunden 15 Minuten lang 15 cm über die Herzhöhe.",show_ref:!1},{src:"Perform 10 repetitions of the prescribed exercise 3 times daily for 6 weeks.",display_src:"Perform 10 repetitions of the prescribed exercise 3 times daily for 6 weeks.",ref:"Führen Sie 6 Wochen lang dreimal täglich 10 Wiederholungen der vorgeschriebenen Übung durch.",show_ref:!1},{src:"Apply ice packs to the injured area for 20 minutes every hour for the next 48 hours.",display_src:"Apply ice packs to the injured area for 20 minutes every hour for the next 48 hours.",ref:"Legen Sie in den nächsten 48 Stunden stündlich 20 Minuten lang Eisbeutel auf die verletzte Stelle.",show_ref:!1},{src:"Use 2 puffs of the inhaler every 4 hours as needed for wheezing for the next 14 days.",display_src:"Use 2 puffs of the inhaler every 4 hours as needed for wheezing for the next 14 days.",ref:"Verwenden Sie je nach Bedarf alle 4 Stunden 2 Hübe des Inhalators, um das Keuchen in den nächsten 14 Tagen zu lindern.",show_ref:!1},{src:"Ingest 30 milliliters of liquid antacid every 8 hours for heartburn relief for 3 days.",display_src:"Ingest 30 milliliters of liquid antacid every 8 hours for heartburn relief for 3 days.",ref:"Nehmen Sie 3 Tage lang alle 8 Stunden 30 Milliliter flüssiges Antazidum ein, um Sodbrennen zu lindern.",show_ref:!1},{src:"Walk for 15 minutes at a moderate pace 2 times daily for the next 30 days.",display_src:"Walk for 15 minutes at a moderate pace 2 times daily for the next 30 days.",ref:"Gehen Sie in den nächsten 30 Tagen zweimal täglich 15 Minuten lang in mäßigem Tempo.",show_ref:!1},{src:"Take 500 milligrams of medication every 8 hours for 7 days with food.",display_src:"Take 500 milligrams of medication every 8 hours for 7 days with food.",ref:"Nehmen Sie 7 Tage lang alle 8 Stunden 500 Milligramm des Medikaments zusammen mit einer Mahlzeit ein.",show_ref:!1},{src:"Consume 2 tablespoons of liquid medicine every 4 hours for 5 days with food.",display_src:"Consume 2 tablespoons of liquid medicine every 4 hours for 5 days with food.",ref:"Verzehren Sie 5 Tage lang alle 4 Stunden 2 Esslöffel flüssiges Arzneimittel zu den Mahlzeiten.",show_ref:!1},{src:"Ingest 20 milligrams of tablets twice a day for 10 days with food.",display_src:"Ingest 20 milligrams of tablets twice a day for 10 days with food.",ref:"Nehmen Sie 10 Tage lang zweimal täglich 20 Milligramm Tabletten mit einer Mahlzeit ein.",show_ref:!1},{src:"Administer 1 milliliter of suspension every 6 hours for 14 days with food.",display_src:"Administer 1 milliliter of suspension every 6 hours for 14 days with food.",ref:"14 Tage lang alle 6 Stunden 1 Milliliter Suspension mit der Nahrung verabreichen.",show_ref:!1},{src:"Apply 5 grams of topical ointment three times a day for 3 weeks with food.",display_src:"Apply 5 grams of topical ointment three times a day for 3 weeks with food.",ref:"Tragen Sie 3 Wochen lang dreimal täglich 5 Gramm topische Salbe zu den Mahlzeiten auf.",show_ref:!1},{src:"Swallow 10 milligrams of capsules once a day for 30 days with food.",display_src:"Swallow 10 milligrams of capsules once a day for 30 days with food.",ref:"Schlucken Sie 30 Tage lang einmal täglich 10 Milligramm Kapseln zusammen mit einer Mahlzeit.",show_ref:!1},{src:"Drink 15 milliliters of syrup every 12 hours for 2 weeks with food.",display_src:"Drink 15 milliliters of syrup every 12 hours for 2 weeks with food.",ref:"Trinken Sie 2 Wochen lang alle 12 Stunden 15 Milliliter Sirup zu den Mahlzeiten.",show_ref:!1},{src:"Use 3 drops of solution four times a day for 1 week with food.",display_src:"Use 3 drops of solution four times a day for 1 week with food.",ref:"1 Woche lang viermal täglich 3 Tropfen der Lösung zu den Mahlzeiten einnehmen.",show_ref:!1},{src:"Inject 25 milligrams of medication subcutaneously every 24 hours for 4 weeks with food.",display_src:"Inject 25 milligrams of medication subcutaneously every 24 hours for 4 weeks with food.",ref:"Injizieren Sie 4 Wochen lang alle 24 Stunden 25 Milligramm des Medikaments subkutan mit der Nahrung.",show_ref:!1},{src:"Insert 50 milligrams of suppository rectally every 8 hours for 10 days with food.",display_src:"Insert 50 milligrams of suppository rectally every 8 hours for 10 days with food.",ref:"Führen Sie 10 Tage lang alle 8 Stunden 50 Milligramm Zäpfchen rektal mit der Nahrung ein.",show_ref:!1},{src:"We have given you enough of this medication for one week.",display_src:"We have given you enough of this medication for one week.",ref:"Wir haben Ihnen eine Woche lang ausreichend von diesem Medikament gegeben.",show_ref:!1},{src:"We have provided you with enough of this medication for the next 10 days.",display_src:"We have provided you with enough of this medication for the next 10 days.",ref:"Wir haben Ihnen ausreichend von diesem Medikament für die nächsten 10 Tage zur Verfügung gestellt.",show_ref:!1},{src:"We have supplied enough of this medication for a month.",display_src:"We have supplied enough of this medication for a month.",ref:"Wir haben genug von diesem Medikament für einen Monat geliefert.",show_ref:!1},{src:"We have given you enough of this medication for the next three days.",display_src:"We have given you enough of this medication for the next three days.",ref:"Wir haben Ihnen für die nächsten drei Tage ausreichend von diesem Medikament verabreicht.",show_ref:!1},{src:"We have ensured you have enough of this medication for two weeks.",display_src:"We have ensured you have enough of this medication for two weeks.",ref:"Wir haben dafür gesorgt, dass Sie zwei Wochen lang genug von diesem Medikament haben.",show_ref:!1},{src:"We have given you enough of this medication for five days.",display_src:"We have given you enough of this medication for five days.",ref:"Wir haben Ihnen fünf Tage lang genug von diesem Medikament gegeben.",show_ref:!1},{src:"We have provided you with enough of this medication for 15 days.",display_src:"We have provided you with enough of this medication for 15 days.",ref:"Wir haben Ihnen dieses Medikament in ausreichender Menge für 15 Tage zur Verfügung gestellt.",show_ref:!1},{src:"We have given you enough of this medication for 72 hours.",display_src:"We have given you enough of this medication for 72 hours.",ref:"Wir haben Ihnen 72 Stunden lang genug von diesem Medikament gegeben.",show_ref:!1},{src:"We have supplied you with enough of this medication for the next fortnight.",display_src:"We have supplied you with enough of this medication for the next fortnight.",ref:"Wir haben Sie mit diesem Medikament in ausreichender Menge für die nächsten zwei Wochen versorgt.",show_ref:!1},{src:"We have given you enough of this medication for a 30-day period.",display_src:"We have given you enough of this medication for a 30-day period.",ref:"Wir haben Ihnen für einen Zeitraum von 30 Tagen ausreichend von diesem Medikament verabreicht.",show_ref:!1},{src:"Please finish all of the amoxicillin prescribed even if you are feeling better.",display_src:"Please finish all of the amoxicillin prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Menge Amoxicillin, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the azithromycin prescribed even if you are feeling better.",display_src:"Please finish all of the azithromycin prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Menge Azithromycin, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the ciprofloxacin prescribed even if you are feeling better.",display_src:"Please finish all of the ciprofloxacin prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Menge Ciprofloxacin, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the metronidazole prescribed even if you are feeling better.",display_src:"Please finish all of the metronidazole prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Menge Metronidazol, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the prednisone prescribed even if you are feeling better.",display_src:"Please finish all of the prednisone prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Prednison-Einnahme, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the lisinopril prescribed even if you are feeling better.",display_src:"Please finish all of the lisinopril prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Menge an Lisinopril, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the fluoxetine prescribed even if you are feeling better.",display_src:"Please finish all of the fluoxetine prescribed even if you are feeling better.",ref:"Nehmen Sie bitte die gesamte verschriebene Menge Fluoxetin ein, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the ibuprofen prescribed even if you are feeling better.",display_src:"Please finish all of the ibuprofen prescribed even if you are feeling better.",ref:"Nehmen Sie bitte das gesamte verschriebene Ibuprofen ein, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the atorvastatin prescribed even if you are feeling better.",display_src:"Please finish all of the atorvastatin prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Atorvastatin-Therapie, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the hydrochlorothiazide prescribed even if you are feeling better.",display_src:"Please finish all of the hydrochlorothiazide prescribed even if you are feeling better.",ref:"Bitte nehmen Sie das verschriebene Hydrochlorothiazid vollständig ein, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"We have sent the prescription for Amoxicillin to your pharmacy.",display_src:"We have sent the prescription for Amoxicillin to your pharmacy.",ref:"Wir haben das Rezept für Amoxicillin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Lisinopril to your pharmacy.",display_src:"We have sent the prescription for Lisinopril to your pharmacy.",ref:"Wir haben das Rezept für Lisinopril an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Metformin to your pharmacy.",display_src:"We have sent the prescription for Metformin to your pharmacy.",ref:"Wir haben das Rezept für Metformin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Atenolol to your pharmacy.",display_src:"We have sent the prescription for Atenolol to your pharmacy.",ref:"Wir haben das Rezept für Atenolol an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Omeprazole to your pharmacy.",display_src:"We have sent the prescription for Omeprazole to your pharmacy.",ref:"Wir haben das Rezept für Omeprazol an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Simvastatin to your pharmacy.",display_src:"We have sent the prescription for Simvastatin to your pharmacy.",ref:"Wir haben das Rezept für Simvastatin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Levothyroxine to your pharmacy.",display_src:"We have sent the prescription for Levothyroxine to your pharmacy.",ref:"Wir haben das Rezept für Levothyroxin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Gabapentin to your pharmacy.",display_src:"We have sent the prescription for Gabapentin to your pharmacy.",ref:"Wir haben das Rezept für Gabapentin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Sertraline to your pharmacy.",display_src:"We have sent the prescription for Sertraline to your pharmacy.",ref:"Wir haben das Rezept für Sertralin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Warfarin to your pharmacy.",display_src:"We have sent the prescription for Warfarin to your pharmacy.",ref:"Wir haben das Rezept für Warfarin an Ihre Apotheke geschickt.",show_ref:!1},{src:"The Amoxicillin is available for pick up at your pharmacy.",display_src:"The Amoxicillin is available for pick up at your pharmacy.",ref:"Das Amoxicillin kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Lisinopril is available for pick up at your pharmacy.",display_src:"The Lisinopril is available for pick up at your pharmacy.",ref:"Das Lisinopril kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Metformin is available for pick up at your pharmacy.",display_src:"The Metformin is available for pick up at your pharmacy.",ref:"Das Metformin kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Atenolol is available for pick up at your pharmacy.",display_src:"The Atenolol is available for pick up at your pharmacy.",ref:"Das Atenolol kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Simvastatin is available for pick up at your pharmacy.",display_src:"The Simvastatin is available for pick up at your pharmacy.",ref:"Das Simvastatin kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Omeprazole is available for pick up at your pharmacy.",display_src:"The Omeprazole is available for pick up at your pharmacy.",ref:"Das Omeprazol kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Losartan is available for pick up at your pharmacy.",display_src:"The Losartan is available for pick up at your pharmacy.",ref:"Das Losartan kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Albuterol is available for pick up at your pharmacy.",display_src:"The Albuterol is available for pick up at your pharmacy.",ref:"Das Albuterol kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Warfarin is available for pick up at your pharmacy.",display_src:"The Warfarin is available for pick up at your pharmacy.",ref:"Das Warfarin kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Prednisone is available for pick up at your pharmacy.",display_src:"The Prednisone is available for pick up at your pharmacy.",ref:"Das Prednison kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"Ibuprofen is available over-the-counter without a prescription.",display_src:"Ibuprofen is available over-the-counter without a prescription.",ref:"Ibuprofen ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Acetaminophen is available over-the-counter without a prescription.",display_src:"Acetaminophen is available over-the-counter without a prescription.",ref:"Acetaminophen ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Naproxen is available over-the-counter without a prescription.",display_src:"Naproxen is available over-the-counter without a prescription.",ref:"Naproxen ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Aspirin is available over-the-counter without a prescription.",display_src:"Aspirin is available over-the-counter without a prescription.",ref:"Aspirin ist rezeptfrei und rezeptfrei erhältlich.",show_ref:!1},{src:"Loratadine is available over-the-counter without a prescription.",display_src:"Loratadine is available over-the-counter without a prescription.",ref:"Loratadin ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Diphenhydramine is available over-the-counter without a prescription.",display_src:"Diphenhydramine is available over-the-counter without a prescription.",ref:"Diphenhydramin ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Famotidine is available over-the-counter without a prescription.",display_src:"Famotidine is available over-the-counter without a prescription.",ref:"Famotidin ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Dextromethorphan is available over-the-counter without a prescription.",display_src:"Dextromethorphan is available over-the-counter without a prescription.",ref:"Dextromethorphan ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Meclizine is available over-the-counter without a prescription.",display_src:"Meclizine is available over-the-counter without a prescription.",ref:"Meclizin ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Pseudoephedrine is available over-the-counter without a prescription, but may require asking a pharmacist for assistance.",display_src:"Pseudoephedrine is available over-the-counter without a prescription, but may require asking a pharmacist for assistance.",ref:"Pseudoephedrin ist rezeptfrei und ohne Rezept erhältlich, es kann jedoch erforderlich sein, einen Apotheker um Hilfe zu bitten.",show_ref:!1},{src:"Please fill your Amoxicillin prescription.",display_src:"Please fill your Amoxicillin prescription.",ref:"Bitte füllen Sie Ihr Amoxicillin-Rezept aus.",show_ref:!1},{src:"Please fill your Lisinopril prescription.",display_src:"Please fill your Lisinopril prescription.",ref:"Bitte füllen Sie Ihr Lisinopril-Rezept aus.",show_ref:!1},{src:"Please fill your Metformin prescription.",display_src:"Please fill your Metformin prescription.",ref:"Bitte füllen Sie Ihr Metformin-Rezept aus.",show_ref:!1},{src:"Please fill your Atenolol prescription.",display_src:"Please fill your Atenolol prescription.",ref:"Bitte füllen Sie Ihr Atenolol-Rezept aus.",show_ref:!1},{src:"Please fill your Simvastatin prescription.",display_src:"Please fill your Simvastatin prescription.",ref:"Bitte füllen Sie Ihr Simvastatin-Rezept aus.",show_ref:!1},{src:"Please fill your Omeprazole prescription.",display_src:"Please fill your Omeprazole prescription.",ref:"Bitte füllen Sie Ihr Omeprazol-Rezept aus.",show_ref:!1},{src:"Please fill your Levothyroxine prescription.",display_src:"Please fill your Levothyroxine prescription.",ref:"Bitte füllen Sie Ihr Levothyroxin-Rezept aus.",show_ref:!1},{src:"Please fill your Hydrochlorothiazide prescription.",display_src:"Please fill your Hydrochlorothiazide prescription.",ref:"Bitte füllen Sie Ihr Hydrochlorothiazid-Rezept aus.",show_ref:!1},{src:"Please fill your Gabapentin prescription.",display_src:"Please fill your Gabapentin prescription.",ref:"Bitte füllen Sie Ihr Gabapentin-Rezept aus.",show_ref:!1},{src:"Please fill your Sertraline prescription.",display_src:"Please fill your Sertraline prescription.",ref:"Bitte füllen Sie Ihr Sertralin-Rezept aus.",show_ref:!1},{src:"We recommend acetaminophen for pain relief and fever reduction.",display_src:"We recommend acetaminophen for pain relief and fever reduction.",ref:"Wir empfehlen Paracetamol zur Schmerzlinderung und Fiebersenkung.",show_ref:!1},{src:"We recommend ibuprofen to help with inflammation and mild to moderate pain.",display_src:"We recommend ibuprofen to help with inflammation and mild to moderate pain.",ref:"Zur Behandlung von Entzündungen und leichten bis mittelschweren Schmerzen empfehlen wir Ibuprofen.",show_ref:!1},{src:"We recommend amoxicillin as an antibiotic to treat bacterial infections.",display_src:"We recommend amoxicillin as an antibiotic to treat bacterial infections.",ref:"Wir empfehlen Amoxicillin als Antibiotikum zur Behandlung bakterieller Infektionen.",show_ref:!1},{src:"We recommend lisinopril for managing high blood pressure and heart failure.",display_src:"We recommend lisinopril for managing high blood pressure and heart failure.",ref:"Wir empfehlen Lisinopril zur Behandlung von Bluthochdruck und Herzinsuffizienz.",show_ref:!1},{src:"We recommend metformin to help control blood sugar levels in patients with type 2 diabetes.",display_src:"We recommend metformin to help control blood sugar levels in patients with type 2 diabetes.",ref:"Wir empfehlen Metformin zur Kontrolle des Blutzuckerspiegels bei Patienten mit Typ-2-Diabetes.",show_ref:!1},{src:"We recommend albuterol for relief of bronchospasm in patients with asthma or COPD.",display_src:"We recommend albuterol for relief of bronchospasm in patients with asthma or COPD.",ref:"Wir empfehlen Albuterol zur Linderung von Bronchospasmen bei Patienten mit Asthma oder COPD.",show_ref:!1},{src:"We recommend omeprazole for the treatment of gastroesophageal reflux disease (GERD) and stomach ulcers.",display_src:"We recommend omeprazole for the treatment of gastroesophageal reflux disease (GERD) and stomach ulcers.",ref:"Wir empfehlen Omeprazol zur Behandlung der gastroösophagealen Refluxkrankheit (GERD) und Magengeschwüren.",show_ref:!1},{src:"We recommend simvastatin to help lower cholesterol levels and reduce the risk of heart disease.",display_src:"We recommend simvastatin to help lower cholesterol levels and reduce the risk of heart disease.",ref:"Wir empfehlen Simvastatin, um den Cholesterinspiegel zu senken und das Risiko von Herzerkrankungen zu verringern.",show_ref:!1},{src:"We recommend losartan for the treatment of high blood pressure and to protect kidney function in patients with diabetes.",display_src:"We recommend losartan for the treatment of high blood pressure and to protect kidney function in patients with diabetes.",ref:"Wir empfehlen Losartan zur Behandlung von Bluthochdruck und zum Schutz der Nierenfunktion bei Patienten mit Diabetes.",show_ref:!1},{src:"We recommend levothyroxine for patients with hypothyroidism to help regulate thyroid hormone levels.",display_src:"We recommend levothyroxine for patients with hypothyroidism to help regulate thyroid hormone levels.",ref:"Wir empfehlen Levothyroxin für Patienten mit Hypothyreose, um die Regulierung des Schilddrüsenhormonspiegels zu unterstützen.",show_ref:!1},{src:"Cardiology department recommends Lisinopril.",display_src:"Cardiology department recommends Lisinopril.",ref:"Die kardiologische Abteilung empfiehlt Lisinopril.",show_ref:!1},{src:"Gastroenterology division recommends Omeprazole.",display_src:"Gastroenterology division recommends Omeprazole.",ref:"Die Abteilung für Gastroenterologie empfiehlt Omeprazol.",show_ref:!1},{src:"Orthopedic team recommends Ibuprofen.",display_src:"Orthopedic team recommends Ibuprofen.",ref:"Das orthopädische Team empfiehlt Ibuprofen.",show_ref:!1},{src:"Neurology specialists recommend Gabapentin.",display_src:"Neurology specialists recommend Gabapentin.",ref:"Neurologen empfehlen Gabapentin.",show_ref:!1},{src:"Endocrinology clinic recommends Levothyroxine.",display_src:"Endocrinology clinic recommends Levothyroxine.",ref:"Die Klinik für Endokrinologie empfiehlt Levothyroxin.",show_ref:!1},{src:"Pulmonology unit recommends Albuterol.",display_src:"Pulmonology unit recommends Albuterol.",ref:"Die Abteilung für Pneumologie empfiehlt Albuterol.",show_ref:!1},{src:"Oncology department recommends Anastrozole.",display_src:"Oncology department recommends Anastrozole.",ref:"Die Abteilung für Onkologie empfiehlt Anastrozol.",show_ref:!1},{src:"Nephrology division recommends Furosemide.",display_src:"Nephrology division recommends Furosemide.",ref:"Die Abteilung für Nephrologie empfiehlt Furosemid.",show_ref:!1},{src:"Dermatology clinic recommends Hydrocortisone.",display_src:"Dermatology clinic recommends Hydrocortisone.",ref:"Dermatologische Klinik empfiehlt Hydrocortison.",show_ref:!1},{src:"Rheumatology team recommends Methotrexate.",display_src:"Rheumatology team recommends Methotrexate.",ref:"Das Rheumatologieteam empfiehlt Methotrexat.",show_ref:!1},{src:"You declined blood pressure medication.",display_src:"You declined blood pressure medication.",ref:"Sie haben Blutdruckmedikamente abgelehnt.",show_ref:!1},{src:"You declined physical therapy for your knee.",display_src:"You declined physical therapy for your knee.",ref:"Sie haben eine Physiotherapie für Ihr Knie abgelehnt.",show_ref:!1},{src:"You declined insulin treatment for diabetes management.",display_src:"You declined insulin treatment for diabetes management.",ref:"Sie haben eine Insulinbehandlung zur Diabetesbehandlung abgelehnt.",show_ref:!1},{src:"You declined a flu vaccine.",display_src:"You declined a flu vaccine.",ref:"Sie haben eine Grippeimpfung abgelehnt.",show_ref:!1},{src:"You declined the recommended surgery for your hernia.",display_src:"You declined the recommended surgery for your hernia.",ref:"Sie haben die empfohlene Operation für Ihren Leistenbruch abgelehnt.",show_ref:!1},{src:"You declined the use of a continuous positive airway pressure (CPAP) machine for sleep apnea.",display_src:"You declined the use of a continuous positive airway pressure (CPAP) machine for sleep apnea.",ref:"Sie haben die Verwendung eines CPAP-Geräts (Continuous Positive Airway Pressure) zur Behandlung von Schlafapnoe abgelehnt.",show_ref:!1},{src:"You declined the prescribed antidepressant medication.",display_src:"You declined the prescribed antidepressant medication.",ref:"Sie haben das verschriebene Antidepressivum abgelehnt.",show_ref:!1},{src:"You declined the recommended chemotherapy for your cancer.",display_src:"You declined the recommended chemotherapy for your cancer.",ref:"Sie haben die empfohlene Chemotherapie für Ihre Krebserkrankung abgelehnt.",show_ref:!1},{src:"You declined the use of a hearing aid for your hearing loss.",display_src:"You declined the use of a hearing aid for your hearing loss.",ref:"Sie haben die Verwendung eines Hörgeräts zur Behandlung Ihres Hörverlusts abgelehnt.",show_ref:!1},{src:"You declined the prescribed pain medication.",display_src:"You declined the prescribed pain medication.",ref:"Sie haben die verschriebenen Schmerzmittel abgelehnt.",show_ref:!1},{src:"You do not need ibuprofen.",display_src:"You do not need ibuprofen.",ref:"Sie brauchen kein Ibuprofen.",show_ref:!1},{src:"You do not need metformin.",display_src:"You do not need metformin.",ref:"Sie benötigen kein Metformin.",show_ref:!1},{src:"You do not need lisinopril.",display_src:"You do not need lisinopril.",ref:"Sie benötigen kein Lisinopril.",show_ref:!1},{src:"You do not need amoxicillin.",display_src:"You do not need amoxicillin.",ref:"Sie benötigen kein Amoxicillin.",show_ref:!1},{src:"You do not need omeprazole.",display_src:"You do not need omeprazole.",ref:"Sie brauchen kein Omeprazol.",show_ref:!1},{src:"You do not need atorvastatin.",display_src:"You do not need atorvastatin.",ref:"Sie benötigen kein Atorvastatin.",show_ref:!1},{src:"You do not need albuterol.",display_src:"You do not need albuterol.",ref:"Sie brauchen kein Albuterol.",show_ref:!1},{src:"You do not need prednisone.",display_src:"You do not need prednisone.",ref:"Sie benötigen kein Prednison.",show_ref:!1},{src:"You do not need hydrochlorothiazide.",display_src:"You do not need hydrochlorothiazide.",ref:"Sie benötigen kein Hydrochlorothiazid.",show_ref:!1},{src:"You do not need gabapentin.",display_src:"You do not need gabapentin.",ref:"Sie benötigen kein Gabapentin.",show_ref:!1},{src:"You do not need ibuprofen for the common cold.",display_src:"You do not need ibuprofen for the common cold.",ref:"Bei einer Erkältung benötigen Sie kein Ibuprofen.",show_ref:!1},{src:"You do not need antibiotics for viral infections.",display_src:"You do not need antibiotics for viral infections.",ref:"Bei Virusinfektionen benötigen Sie keine Antibiotika.",show_ref:!1},{src:"You do not need antacids for acute bronchitis.",display_src:"You do not need antacids for acute bronchitis.",ref:"Bei einer akuten Bronchitis benötigen Sie keine Antazida.",show_ref:!1},{src:"You do not need insulin for mild hypoglycemia.",display_src:"You do not need insulin for mild hypoglycemia.",ref:"Bei einer leichten Hypoglykämie ist kein Insulin erforderlich.",show_ref:!1},{src:"You do not need antihistamines for urinary tract infections.",display_src:"You do not need antihistamines for urinary tract infections.",ref:"Bei Harnwegsinfektionen benötigen Sie keine Antihistaminika.",show_ref:!1},{src:"You do not need corticosteroids for tension headaches.",display_src:"You do not need corticosteroids for tension headaches.",ref:"Bei Spannungskopfschmerzen benötigen Sie keine Kortikosteroide.",show_ref:!1},{src:"You do not need anticoagulants for seasonal allergies.",display_src:"You do not need anticoagulants for seasonal allergies.",ref:"Bei saisonalen Allergien benötigen Sie keine Antikoagulanzien.",show_ref:!1},{src:"You do not need antidepressants for insect bites.",display_src:"You do not need antidepressants for insect bites.",ref:"Bei Insektenstichen braucht man keine Antidepressiva.",show_ref:!1},{src:"You do not need anti-anxiety medications for mild sunburn.",display_src:"You do not need anti-anxiety medications for mild sunburn.",ref:"Bei einem leichten Sonnenbrand benötigen Sie keine angstlösenden Medikamente.",show_ref:!1},{src:"You do not need antifungal medications for muscle strains.",display_src:"You do not need antifungal medications for muscle strains.",ref:"Bei Muskelzerrungen benötigen Sie keine antimykotischen Medikamente.",show_ref:!1},{src:"We are increasing your dose of metformin to better manage your blood sugar levels.",display_src:"We are increasing your dose of metformin to better manage your blood sugar levels.",ref:"Wir erhöhen Ihre Metformin-Dosis, um Ihren Blutzuckerspiegel besser kontrollieren zu können.",show_ref:!1},{src:"We are increasing your dose of lisinopril to further lower your blood pressure.",display_src:"We are increasing your dose of lisinopril to further lower your blood pressure.",ref:"Wir erhöhen Ihre Lisinopril-Dosis, um Ihren Blutdruck weiter zu senken.",show_ref:!1},{src:"We are increasing your dose of levothyroxine to optimize your thyroid hormone levels.",display_src:"We are increasing your dose of levothyroxine to optimize your thyroid hormone levels.",ref:"Wir erhöhen Ihre Levothyroxin-Dosis, um Ihren Schilddrüsenhormonspiegel zu optimieren.",show_ref:!1},{src:"We are increasing your dose of gabapentin to improve your nerve pain management.",display_src:"We are increasing your dose of gabapentin to improve your nerve pain management.",ref:"Wir erhöhen Ihre Gabapentin-Dosis, um die Behandlung Ihrer Nervenschmerzen zu verbessern.",show_ref:!1},{src:"We are increasing your dose of sertraline to enhance your depression and anxiety treatment.",display_src:"We are increasing your dose of sertraline to enhance your depression and anxiety treatment.",ref:"Wir erhöhen Ihre Sertralin-Dosis, um Ihre Behandlung von Depressionen und Angstzuständen zu verbessern.",show_ref:!1},{src:"We are increasing your dose of furosemide to reduce excess fluid retention.",display_src:"We are increasing your dose of furosemide to reduce excess fluid retention.",ref:"Wir erhöhen Ihre Furosemid-Dosis, um übermäßige Flüssigkeitsansammlungen zu reduzieren.",show_ref:!1},{src:"We are increasing your dose of hydrochlorothiazide to further control your hypertension.",display_src:"We are increasing your dose of hydrochlorothiazide to further control your hypertension.",ref:"Wir erhöhen Ihre Hydrochlorothiazid-Dosis, um Ihren Bluthochdruck weiter zu kontrollieren.",show_ref:!1},{src:"We are increasing your dose of warfarin to maintain a proper blood clot prevention.",display_src:"We are increasing your dose of warfarin to maintain a proper blood clot prevention.",ref:"Wir erhöhen Ihre Warfarin-Dosis, um eine ordnungsgemäße Vorbeugung von Blutgerinnseln sicherzustellen.",show_ref:!1},{src:"We are increasing your dose of atorvastatin to lower your cholesterol levels effectively.",display_src:"We are increasing your dose of atorvastatin to lower your cholesterol levels effectively.",ref:"Wir erhöhen Ihre Atorvastatin-Dosis, um Ihren Cholesterinspiegel wirksam zu senken.",show_ref:!1},{src:"We are increasing your dose of pregabalin to alleviate your neuropathic pain symptoms.",display_src:"We are increasing your dose of pregabalin to alleviate your neuropathic pain symptoms.",ref:"Wir erhöhen Ihre Pregabalin-Dosis, um Ihre neuropathischen Schmerzsymptome zu lindern.",show_ref:!1},{src:"We are decreasing your dose of Lisinopril.",display_src:"We are decreasing your dose of Lisinopril.",ref:"Wir verringern Ihre Lisinopril-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Metformin.",display_src:"We are decreasing your dose of Metformin.",ref:"Wir verringern Ihre Metformin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Simvastatin.",display_src:"We are decreasing your dose of Simvastatin.",ref:"Wir verringern Ihre Simvastatin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Amlodipine.",display_src:"We are decreasing your dose of Amlodipine.",ref:"Wir verringern Ihre Amlodipin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Atorvastatin.",display_src:"We are decreasing your dose of Atorvastatin.",ref:"Wir verringern Ihre Atorvastatin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Hydrochlorothiazide.",display_src:"We are decreasing your dose of Hydrochlorothiazide.",ref:"Wir verringern Ihre Hydrochlorothiazid-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Warfarin.",display_src:"We are decreasing your dose of Warfarin.",ref:"Wir verringern Ihre Warfarin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Furosemide.",display_src:"We are decreasing your dose of Furosemide.",ref:"Wir reduzieren Ihre Furosemid-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Levothyroxine.",display_src:"We are decreasing your dose of Levothyroxine.",ref:"Wir verringern Ihre Levothyroxin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Omeprazole.",display_src:"We are decreasing your dose of Omeprazole.",ref:"Wir verringern Ihre Omeprazol-Dosis.",show_ref:!1},{src:"Please increase your Metformin to 1000 mg twice daily for 4 weeks starting August 1, 2022.",display_src:"Please increase your Metformin to 1000 mg twice daily for 4 weeks starting August 1, 2022.",ref:"Bitte erhöhen Sie Ihre Metformin-Dosis ab dem 1. August 2022 4 Wochen lang zweimal täglich auf 1000 mg.",show_ref:!1},{src:"Please increase your Lisinopril to 20 mg once daily for 6 weeks starting September 15, 2022.",display_src:"Please increase your Lisinopril to 20 mg once daily for 6 weeks starting September 15, 2022.",ref:"Bitte erhöhen Sie ab dem 15. September 2022 6 Wochen lang Ihre Lisinopril-Dosis einmal täglich auf 20 mg.",show_ref:!1},{src:"Please increase your Amlodipine to 10 mg every morning for 2 months starting October 10, 2022.",display_src:"Please increase your Amlodipine to 10 mg every morning for 2 months starting October 10, 2022.",ref:"Bitte erhöhen Sie ab dem 10. Oktober 2022 2 Monate lang jeden Morgen Ihre Amlodipin-Dosis auf 10 mg.",show_ref:!1},{src:"Please increase your Atorvastatin to 40 mg every night for 3 months starting November 20, 2022.",display_src:"Please increase your Atorvastatin to 40 mg every night for 3 months starting November 20, 2022.",ref:"Bitte erhöhen Sie ab dem 20. November 2022 3 Monate lang Ihre Atorvastatin-Dosis jede Nacht auf 40 mg.",show_ref:!1},{src:"Please increase your Furosemide to 40 mg twice daily for 1 month starting December 1, 2022.",display_src:"Please increase your Furosemide to 40 mg twice daily for 1 month starting December 1, 2022.",ref:"Bitte erhöhen Sie Ihre Furosemiddosis ab dem 1. Dezember 2022 einen Monat lang zweimal täglich auf 40 mg.",show_ref:!1},{src:"Please increase your Levothyroxine to 100 mcg daily for 8 weeks starting January 15, 2023.",display_src:"Please increase your Levothyroxine to 100 mcg daily for 8 weeks starting January 15, 2023.",ref:"Bitte erhöhen Sie Ihre Levothyroxin-Dosis ab dem 15. Januar 2023 8 Wochen lang auf 100 µg täglich.",show_ref:!1},{src:"Please increase your Gabapentin to 300 mg three times a day for 6 weeks starting February 28, 2023.",display_src:"Please increase your Gabapentin to 300 mg three times a day for 6 weeks starting February 28, 2023.",ref:"Bitte erhöhen Sie Ihre Gabapentin-Dosis auf 300 mg dreimal täglich für 6 Wochen ab dem 28. Februar 2023.",show_ref:!1},{src:"Please increase your Omeprazole to 40 mg once daily for 4 weeks starting March 30, 2023.",display_src:"Please increase your Omeprazole to 40 mg once daily for 4 weeks starting March 30, 2023.",ref:"Bitte erhöhen Sie ab dem 30. März 2023 Ihre Omeprazol-Dosis einmal täglich für 4 Wochen auf 40 mg.",show_ref:!1},{src:"Please increase your Sertraline to 100 mg every morning for 2 months starting April 25, 2023.",display_src:"Please increase your Sertraline to 100 mg every morning for 2 months starting April 25, 2023.",ref:"Bitte erhöhen Sie ab dem 25. April 2023 2 Monate lang jeden Morgen Ihre Sertralindosis auf 100 mg.",show_ref:!1},{src:"Please increase your Trazodone to 50 mg every night for 6 weeks starting May 31, 2023.",display_src:"Please increase your Trazodone to 50 mg every night for 6 weeks starting May 31, 2023.",ref:"Bitte erhöhen Sie Ihre Trazodon-Dosis ab dem 31. Mai 2023 6 Wochen lang jede Nacht auf 50 mg.",show_ref:!1},{src:"Please decrease your Metformin to 500 milligrams twice daily for 2 weeks starting June 1st, 2022.",display_src:"Please decrease your Metformin to 500 milligrams twice daily for 2 weeks starting June 1st, 2022.",ref:"Bitte reduzieren Sie Ihre Metformin-Dosis ab dem 1. Juni 2022 zwei Wochen lang zweimal täglich auf 500 Milligramm.",show_ref:!1},{src:"Please decrease your Lisinopril to 10 milligrams once daily for 4 weeks starting July 15th, 2022.",display_src:"Please decrease your Lisinopril to 10 milligrams once daily for 4 weeks starting July 15th, 2022.",ref:"Bitte reduzieren Sie ab dem 15. Juli 2022 Ihre Lisinopril-Dosis einmal täglich für 4 Wochen auf 10 Milligramm.",show_ref:!1},{src:"Please decrease your Amlodipine to 2.5 milligrams every morning for 1 month starting August 10th, 2022.",display_src:"Please decrease your Amlodipine to 2.5 milligrams every morning for 1 month starting August 10th, 2022.",ref:"Bitte reduzieren Sie ab dem 10. August 2022 einen Monat lang jeden Morgen Ihre Amlodipin-Dosis auf 2,5 Milligramm.",show_ref:!1},{src:"Please decrease your Atorvastatin to 20 milligrams every evening for 3 weeks starting September 5th, 2022.",display_src:"Please decrease your Atorvastatin to 20 milligrams every evening for 3 weeks starting September 5th, 2022.",ref:"Bitte reduzieren Sie ab dem 5. September 2022 3 Wochen lang jeden Abend Ihre Atorvastatin-Dosis auf 20 Milligramm.",show_ref:!1},{src:"Please decrease your Warfarin to 3 milligrams daily for 10 days starting October 20th, 2022.",display_src:"Please decrease your Warfarin to 3 milligrams daily for 10 days starting October 20th, 2022.",ref:"Bitte reduzieren Sie Ihre Warfarin-Dosis ab dem 20. Oktober 2022 für 10 Tage auf 3 Milligramm täglich.",show_ref:!1},{src:"Please decrease your Furosemide to 20 milligrams once daily for 2 weeks starting November 15th, 2022.",display_src:"Please decrease your Furosemide to 20 milligrams once daily for 2 weeks starting November 15th, 2022.",ref:"Bitte reduzieren Sie Ihre Furosemid-Dosis ab dem 15. November 2022 zwei Wochen lang einmal täglich auf 20 Milligramm.",show_ref:!1},{src:"Please decrease your Levothyroxine to 50 micrograms every morning for 1 month starting December 4th, 2022.",display_src:"Please decrease your Levothyroxine to 50 micrograms every morning for 1 month starting December 4th, 2022.",ref:"Bitte reduzieren Sie ab dem 4. Dezember 2022 einen Monat lang jeden Morgen Ihre Levothyroxin-Dosis auf 50 Mikrogramm.",show_ref:!1},{src:"Please decrease your Omeprazole to 20 milligrams once daily for 6 weeks starting January 18th, 2023.",display_src:"Please decrease your Omeprazole to 20 milligrams once daily for 6 weeks starting January 18th, 2023.",ref:"Bitte reduzieren Sie Ihre Omeprazol-Dosis ab dem 18. Januar 2023 für 6 Wochen einmal täglich auf 20 Milligramm.",show_ref:!1},{src:"Please decrease your Prednisone to 5 milligrams twice daily for 2 weeks starting February 22nd, 2023.",display_src:"Please decrease your Prednisone to 5 milligrams twice daily for 2 weeks starting February 22nd, 2023.",ref:"Bitte reduzieren Sie Ihre Prednison-Dosis ab dem 22. Februar 2023 zwei Wochen lang zweimal täglich auf 5 Milligramm.",show_ref:!1},{src:"Please decrease your Gabapentin to 300 milligrams three times daily for 3 weeks starting March 30th, 2023.",display_src:"Please decrease your Gabapentin to 300 milligrams three times daily for 3 weeks starting March 30th, 2023.",ref:"Bitte reduzieren Sie Ihre Gabapentin-Dosis ab dem 30. März 2023 drei Wochen lang dreimal täglich auf 300 Milligramm.",show_ref:!1},{src:"Please continue to take your medications as prescribed.",display_src:"Please continue to take your medications as prescribed.",ref:"Bitte nehmen Sie Ihre Medikamente weiterhin wie verordnet ein.",show_ref:!1},{src:"Continue your other medications as prescribed.",display_src:"Continue your other medications as prescribed.",ref:"Setzen Sie Ihre anderen Medikamente wie verordnet fort.",show_ref:!1},{src:"Continue taking Amoxicillin until your follow-up appointment with Dr. Smith.",display_src:"Continue taking Amoxicillin until your follow-up appointment with Dr. Smith.",ref:"Nehmen Sie Amoxicillin weiterhin bis zu Ihrem Folgetermin bei Dr. Smith ein.",show_ref:!1},{src:"Continue taking Lisinopril until your follow-up appointment with Nurse Practitioner Johnson.",display_src:"Continue taking Lisinopril until your follow-up appointment with Nurse Practitioner Johnson.",ref:"Nehmen Sie Lisinopril weiterhin bis zu Ihrem Folgetermin bei Nurse Practitioner Johnson ein.",show_ref:!1},{src:"Continue taking Metformin until your follow-up appointment with Dr. Patel.",display_src:"Continue taking Metformin until your follow-up appointment with Dr. Patel.",ref:"Nehmen Sie Metformin weiterhin bis zu Ihrem Folgetermin bei Dr. Patel ein.",show_ref:!1},{src:"Continue taking Atenolol until your follow-up appointment with Dr. Thompson.",display_src:"Continue taking Atenolol until your follow-up appointment with Dr. Thompson.",ref:"Nehmen Sie Atenolol weiterhin bis zu Ihrem Folgetermin bei Dr. Thompson ein.",show_ref:!1},{src:"Continue taking Simvastatin until your follow-up appointment with Dr. Martinez.",display_src:"Continue taking Simvastatin until your follow-up appointment with Dr. Martinez.",ref:"Nehmen Sie Simvastatin weiterhin bis zu Ihrem Folgetermin bei Dr. Martinez ein.",show_ref:!1},{src:"Continue taking Omeprazole until your follow-up appointment with Physician Assistant Davis.",display_src:"Continue taking Omeprazole until your follow-up appointment with Physician Assistant Davis.",ref:"Nehmen Sie Omeprazol weiterhin bis zu Ihrem Folgetermin bei Arzthelferin Davis ein.",show_ref:!1},{src:"Continue taking Losartan until your follow-up appointment with Dr. Taylor.",display_src:"Continue taking Losartan until your follow-up appointment with Dr. Taylor.",ref:"Nehmen Sie Losartan weiterhin bis zu Ihrem Folgetermin bei Dr. Taylor ein.",show_ref:!1},{src:"Continue taking Hydrochlorothiazide until your follow-up appointment with Nurse Practitioner Williams.",display_src:"Continue taking Hydrochlorothiazide until your follow-up appointment with Nurse Practitioner Williams.",ref:"Nehmen Sie Hydrochlorothiazid weiterhin bis zu Ihrem Folgetermin bei der Krankenschwester Williams ein.",show_ref:!1},{src:"Continue taking Gabapentin until your follow-up appointment with Dr. Anderson.",display_src:"Continue taking Gabapentin until your follow-up appointment with Dr. Anderson.",ref:"Nehmen Sie Gabapentin weiterhin bis zu Ihrem Folgetermin bei Dr. Anderson ein.",show_ref:!1},{src:"Continue taking Sertraline until your follow-up appointment with Dr. Brown.",display_src:"Continue taking Sertraline until your follow-up appointment with Dr. Brown.",ref:"Nehmen Sie Sertralin weiterhin bis zu Ihrem Folgetermin bei Dr. Brown ein.",show_ref:!1},{src:"Continue taking Amoxicillin for 7 days.",display_src:"Continue taking Amoxicillin for 7 days.",ref:"Nehmen Sie Amoxicillin 7 Tage lang weiter ein.",show_ref:!1},{src:"Continue taking Ibuprofen for 5 days.",display_src:"Continue taking Ibuprofen for 5 days.",ref:"Nehmen Sie Ibuprofen weiterhin 5 Tage lang ein.",show_ref:!1},{src:"Continue taking Prednisone for 14 days.",display_src:"Continue taking Prednisone for 14 days.",ref:"Nehmen Sie Prednison weiterhin 14 Tage lang ein.",show_ref:!1},{src:"Continue taking Metformin for 30 days.",display_src:"Continue taking Metformin for 30 days.",ref:"Nehmen Sie Metformin weiterhin 30 Tage lang ein.",show_ref:!1},{src:"Continue taking Lisinopril for 90 days.",display_src:"Continue taking Lisinopril for 90 days.",ref:"Nehmen Sie Lisinopril weiterhin 90 Tage lang ein.",show_ref:!1},{src:"Continue taking Atenolol for 60 days.",display_src:"Continue taking Atenolol for 60 days.",ref:"Nehmen Sie Atenolol weiterhin 60 Tage lang ein.",show_ref:!1},{src:"Continue taking Omeprazole for 21 days.",display_src:"Continue taking Omeprazole for 21 days.",ref:"Nehmen Sie Omeprazol weiterhin 21 Tage lang ein.",show_ref:!1},{src:"Continue taking Ciprofloxacin for 10 days.",display_src:"Continue taking Ciprofloxacin for 10 days.",ref:"Nehmen Sie Ciprofloxacin weiterhin 10 Tage lang ein.",show_ref:!1},{src:"Continue taking Warfarin for 6 months.",display_src:"Continue taking Warfarin for 6 months.",ref:"Nehmen Sie Warfarin weiterhin 6 Monate lang ein.",show_ref:!1},{src:"Continue taking Simvastatin for 3 months.",display_src:"Continue taking Simvastatin for 3 months.",ref:"Nehmen Sie Simvastatin weiterhin 3 Monate lang ein.",show_ref:!1},{src:"Continue taking Amoxicillin 500 milligrams every 8 hours for the next 7 days.",display_src:"Continue taking Amoxicillin 500 milligrams every 8 hours for the next 7 days.",ref:"Nehmen Sie in den nächsten 7 Tagen weiterhin alle 8 Stunden Amoxicillin 500 Milligramm ein.",show_ref:!1},{src:"Continue taking Atenolol 50 milligrams once daily in the morning for the next 30 days.",display_src:"Continue taking Atenolol 50 milligrams once daily in the morning for the next 30 days.",ref:"Nehmen Sie Atenolol 50 Milligramm weiterhin einmal täglich morgens für die nächsten 30 Tage ein.",show_ref:!1},{src:"Continue taking Lisinopril 10 milligrams once daily in the evening for the next 3 months.",display_src:"Continue taking Lisinopril 10 milligrams once daily in the evening for the next 3 months.",ref:"Nehmen Sie in den nächsten 3 Monaten weiterhin 10 Milligramm Lisinopril einmal täglich abends ein.",show_ref:!1},{src:"Continue taking Metformin 500 milligrams twice daily with meals for the next 6 months.",display_src:"Continue taking Metformin 500 milligrams twice daily with meals for the next 6 months.",ref:"Nehmen Sie in den nächsten 6 Monaten weiterhin zweimal täglich 500 Milligramm Metformin zu den Mahlzeiten ein.",show_ref:!1},{src:"Continue taking Simvastatin 20 milligrams once daily at bedtime for the next 90 days.",display_src:"Continue taking Simvastatin 20 milligrams once daily at bedtime for the next 90 days.",ref:"Nehmen Sie während der nächsten 90 Tage weiterhin einmal täglich 20 Milligramm Simvastatin vor dem Schlafengehen ein.",show_ref:!1},{src:"Continue taking Warfarin 2.5 milligrams once daily in the afternoon for the next 12 weeks.",display_src:"Continue taking Warfarin 2.5 milligrams once daily in the afternoon for the next 12 weeks.",ref:"Nehmen Sie in den nächsten 12 Wochen weiterhin 2,5 Milligramm Warfarin einmal täglich nachmittags ein.",show_ref:!1},{src:"Continue taking Prednisone 10 milligrams once daily in the morning for the next 14 days.",display_src:"Continue taking Prednisone 10 milligrams once daily in the morning for the next 14 days.",ref:"Nehmen Sie in den nächsten 14 Tagen weiterhin einmal täglich 10 Milligramm Prednison morgens ein.",show_ref:!1},{src:"Continue taking Pantoprazole 40 milligrams once daily before breakfast for the next 8 weeks.",display_src:"Continue taking Pantoprazole 40 milligrams once daily before breakfast for the next 8 weeks.",ref:"Nehmen Sie Pantoprazol in den nächsten 8 Wochen weiterhin einmal täglich 40 Milligramm vor dem Frühstück ein.",show_ref:!1},{src:"Continue taking Hydrochlorothiazide 25 milligrams once daily in the morning for the next 60 days.",display_src:"Continue taking Hydrochlorothiazide 25 milligrams once daily in the morning for the next 60 days.",ref:"Nehmen Sie in den nächsten 60 Tagen weiterhin einmal täglich 25 Milligramm Hydrochlorothiazid morgens ein.",show_ref:!1},{src:"Continue taking Allopurinol 300 milligrams once daily in the evening for the next 180 days.",display_src:"Continue taking Allopurinol 300 milligrams once daily in the evening for the next 180 days.",ref:"Nehmen Sie Allopurinol 300 Milligramm weiterhin einmal täglich abends für die nächsten 180 Tage ein.",show_ref:!1},{src:"Do NOT take ibuprofen for 48 hours after your surgery.",display_src:"Do NOT take ibuprofen for 48 hours after your surgery.",ref:"Nehmen Sie 48 Stunden nach der Operation KEIN Ibuprofen ein.",show_ref:!1},{src:"Do NOT take aspirin for 7 days before your scheduled procedure.",display_src:"Do NOT take aspirin for 7 days before your scheduled procedure.",ref:"Nehmen Sie 7 Tage vor Ihrem geplanten Eingriff KEIN Aspirin ein.",show_ref:!1},{src:"Do NOT take naproxen for 72 hours if you experience gastrointestinal bleeding.",display_src:"Do NOT take naproxen for 72 hours if you experience gastrointestinal bleeding.",ref:"Nehmen Sie Naproxen 72 Stunden lang NICHT ein, wenn bei Ihnen Magen-Darm-Blutungen auftreten.",show_ref:!1},{src:"Do NOT take metformin for 48 hours after receiving contrast dye for an imaging study.",display_src:"Do NOT take metformin for 48 hours after receiving contrast dye for an imaging study.",ref:"Nehmen Sie Metformin 48 Stunden lang NICHT ein, nachdem Sie für eine bildgebende Untersuchung Kontrastmittel erhalten haben.",show_ref:!1},{src:"Do NOT take warfarin for 5 days prior to an invasive dental treatment.",display_src:"Do NOT take warfarin for 5 days prior to an invasive dental treatment.",ref:"Nehmen Sie Warfarin 5 Tage vor einer invasiven Zahnbehandlung NICHT ein.",show_ref:!1},{src:"Do NOT take ACE inhibitors for 24 hours before a kidney function test.",display_src:"Do NOT take ACE inhibitors for 24 hours before a kidney function test.",ref:"Nehmen Sie 24 Stunden vor einem Nierenfunktionstest KEINE ACE-Hemmer ein.",show_ref:!1},{src:"Do NOT take diuretics for 12 hours before a blood pressure check-up.",display_src:"Do NOT take diuretics for 12 hours before a blood pressure check-up.",ref:"Nehmen Sie 12 Stunden vor einer Blutdruckuntersuchung KEINE Diuretika ein.",show_ref:!1},{src:"Do NOT take antacids for 2 hours before or after taking your antibiotic medication.",display_src:"Do NOT take antacids for 2 hours before or after taking your antibiotic medication.",ref:"Nehmen Sie 2 Stunden vor oder nach der Einnahme Ihres Antibiotikums KEINE Antazida ein.",show_ref:!1},{src:"Do NOT take oral contraceptives for 4 weeks following a major surgery.",display_src:"Do NOT take oral contraceptives for 4 weeks following a major surgery.",ref:"Nehmen Sie nach einer größeren Operation 4 Wochen lang KEINE oralen Kontrazeptiva ein.",show_ref:!1},{src:"Do NOT take NSAIDs for 6 hours before a blood test to check for liver function.",display_src:"Do NOT take NSAIDs for 6 hours before a blood test to check for liver function.",ref:"Nehmen Sie 6 Stunden vor einer Blutuntersuchung zur Überprüfung der Leberfunktion KEINE NSAIDs ein.",show_ref:!1},{src:"Do NOT take Warfarin until your follow-up appointment with Dr. Thompson.",display_src:"Do NOT take Warfarin until your follow-up appointment with Dr. Thompson.",ref:"Nehmen Sie Warfarin NICHT bis zu Ihrem Folgetermin bei Dr. Thompson ein.",show_ref:!1},{src:"Do NOT take Lisinopril until your follow-up appointment with Nurse Practitioner Johnson.",display_src:"Do NOT take Lisinopril until your follow-up appointment with Nurse Practitioner Johnson.",ref:"Nehmen Sie Lisinopril NICHT bis zu Ihrem Folgetermin bei Nurse Practitioner Johnson ein.",show_ref:!1},{src:"Do NOT take Metformin until your follow-up appointment with Dr. Patel.",display_src:"Do NOT take Metformin until your follow-up appointment with Dr. Patel.",ref:"Nehmen Sie Metformin NICHT bis zu Ihrem Folgetermin bei Dr. Patel ein.",show_ref:!1},{src:"Do NOT take Furosemide until your follow-up appointment with Physician Assistant Smith.",display_src:"Do NOT take Furosemide until your follow-up appointment with Physician Assistant Smith.",ref:"Nehmen Sie Furosemid NICHT bis zu Ihrem Folgetermin bei Arzthelferin Smith ein.",show_ref:!1},{src:"Do NOT take Atorvastatin until your follow-up appointment with Dr. Garcia.",display_src:"Do NOT take Atorvastatin until your follow-up appointment with Dr. Garcia.",ref:"Nehmen Sie Atorvastatin NICHT bis zu Ihrem Folgetermin bei Dr. Garcia ein.",show_ref:!1},{src:"Do NOT take Gabapentin until your follow-up appointment with Nurse Practitioner Lee.",display_src:"Do NOT take Gabapentin until your follow-up appointment with Nurse Practitioner Lee.",ref:"Nehmen Sie Gabapentin NICHT bis zu Ihrem Folgetermin bei der Krankenschwester Lee ein.",show_ref:!1},{src:"Do NOT take Omeprazole until your follow-up appointment with Dr. Martinez.",display_src:"Do NOT take Omeprazole until your follow-up appointment with Dr. Martinez.",ref:"Nehmen Sie Omeprazol NICHT bis zu Ihrem Folgetermin bei Dr. Martinez ein.",show_ref:!1},{src:"Do NOT take Amlodipine until your follow-up appointment with Physician Assistant Taylor.",display_src:"Do NOT take Amlodipine until your follow-up appointment with Physician Assistant Taylor.",ref:"Nehmen Sie Amlodipin NICHT bis zu Ihrem Folgetermin bei Arzthelferin Taylor ein.",show_ref:!1},{src:"Do NOT take Hydrochlorothiazide until your follow-up appointment with Dr. Williams.",display_src:"Do NOT take Hydrochlorothiazide until your follow-up appointment with Dr. Williams.",ref:"Nehmen Sie Hydrochlorothiazid NICHT bis zu Ihrem Folgetermin bei Dr. Williams ein.",show_ref:!1},{src:"Do NOT take Levothyroxine until your follow-up appointment with Nurse Practitioner Anderson.",display_src:"Do NOT take Levothyroxine until your follow-up appointment with Nurse Practitioner Anderson.",ref:"Nehmen Sie Levothyroxin NICHT bis zu Ihrem Folgetermin bei Nurse Practitioner Anderson ein.",show_ref:!1},{src:"Take Amoxicillin 500 milligrams every 8 hours for 7 days for your bacterial infection.",display_src:"Take Amoxicillin 500 milligrams every 8 hours for 7 days for your bacterial infection.",ref:"Nehmen Sie 7 Tage lang alle 8 Stunden 500 Milligramm Amoxicillin zur Behandlung Ihrer bakteriellen Infektion ein.",show_ref:!1},{src:"Take Ibuprofen 200 milligrams every 4 to 6 hours as needed for pain or fever.",display_src:"Take Ibuprofen 200 milligrams every 4 to 6 hours as needed for pain or fever.",ref:"Nehmen Sie bei Bedarf alle 4 bis 6 Stunden 200 Milligramm Ibuprofen gegen Schmerzen oder Fieber ein.",show_ref:!1},{src:"Take Metformin 1000 milligrams twice daily with meals for blood sugar control.",display_src:"Take Metformin 1000 milligrams twice daily with meals for blood sugar control.",ref:"Nehmen Sie Metformin 1000 Milligramm zweimal täglich zu den Mahlzeiten ein, um den Blutzuckerspiegel zu kontrollieren.",show_ref:!1},{src:"Take Amlodipine 5 milligrams once daily in the morning for high blood pressure.",display_src:"Take Amlodipine 5 milligrams once daily in the morning for high blood pressure.",ref:"Nehmen Sie Amlodipin 5 Milligramm einmal täglich morgens gegen Bluthochdruck ein.",show_ref:!1},{src:"Take Omeprazole 20 milligrams once daily before breakfast for acid reflux.",display_src:"Take Omeprazole 20 milligrams once daily before breakfast for acid reflux.",ref:"Nehmen Sie Omeprazol 20 Milligramm einmal täglich vor dem Frühstück gegen Sodbrennen ein.",show_ref:!1},{src:"Take Furosemide 40 milligrams every morning for fluid retention.",display_src:"Take Furosemide 40 milligrams every morning for fluid retention.",ref:"Nehmen Sie Furosemid 40 Milligramm jeden Morgen zur Flüssigkeitsretention ein.",show_ref:!1},{src:"Take Sertraline 50 milligrams once daily in the evening for depression.",display_src:"Take Sertraline 50 milligrams once daily in the evening for depression.",ref:"Nehmen Sie Sertralin 50 Milligramm einmal täglich abends gegen Depressionen ein.",show_ref:!1},{src:"Take Simvastatin 20 milligrams once daily at bedtime for high cholesterol.",display_src:"Take Simvastatin 20 milligrams once daily at bedtime for high cholesterol.",ref:"Nehmen Sie bei hohem Cholesterinspiegel einmal täglich 20 Milligramm Simvastatin vor dem Schlafengehen ein.",show_ref:!1},{src:"Take Levothyroxine 100 micrograms once daily on an empty stomach for hypothyroidism.",display_src:"Take Levothyroxine 100 micrograms once daily on an empty stomach for hypothyroidism.",ref:"Nehmen Sie bei Hypothyreose einmal täglich 100 Mikrogramm Levothyroxin auf nüchternen Magen ein.",show_ref:!1},{src:"Take Albuterol inhaler 2 puffs every 4 to 6 hours as needed for shortness of breath.",display_src:"Take Albuterol inhaler 2 puffs every 4 to 6 hours as needed for shortness of breath.",ref:"Nehmen Sie bei Atemnot alle 4 bis 6 Stunden 2 Hübe mit dem Albuterol-Inhalator ein, je nach Bedarf.",show_ref:!1},{src:"Start taking Amoxicillin 500 milligrams every 8 hours for 10 days after leaving the hospital.",display_src:"Start taking Amoxicillin 500 milligrams every 8 hours for 10 days after leaving the hospital.",ref:"Beginnen Sie nach der Entlassung aus dem Krankenhaus 10 Tage lang alle 8 Stunden mit der Einnahme von 500 Milligramm Amoxicillin.",show_ref:!1},{src:"Start taking Ibuprofen 200 milligrams every 6 hours as needed for pain or fever after returning home.",display_src:"Start taking Ibuprofen 200 milligrams every 6 hours as needed for pain or fever after returning home.",ref:"Beginnen Sie bei Bedarf alle 6 Stunden mit der Einnahme von 200 Milligramm Ibuprofen gegen Schmerzen oder Fieber, nachdem Sie nach Hause zurückgekehrt sind.",show_ref:!1},{src:"Start taking Metformin 500 milligrams twice daily with meals after your first meal at home.",display_src:"Start taking Metformin 500 milligrams twice daily with meals after your first meal at home.",ref:"Beginnen Sie mit der Einnahme von Metformin 500 Milligramm zweimal täglich zu den Mahlzeiten nach Ihrer ersten Mahlzeit zu Hause.",show_ref:!1},{src:"Start taking Lisinopril 10 milligrams once daily in the morning after waking up.",display_src:"Start taking Lisinopril 10 milligrams once daily in the morning after waking up.",ref:"Beginnen Sie mit der Einnahme von 10 Milligramm Lisinopril einmal täglich morgens nach dem Aufwachen.",show_ref:!1},{src:"Start taking Atorvastatin 20 milligrams every evening at bedtime after your discharge.",display_src:"Start taking Atorvastatin 20 milligrams every evening at bedtime after your discharge.",ref:"Beginnen Sie mit der Einnahme von 20 Milligramm Atorvastatin jeden Abend vor dem Schlafengehen nach Ihrer Entlassung.",show_ref:!1},{src:"Start taking Furosemide 40 milligrams once daily in the morning after your first breakfast at home.",display_src:"Start taking Furosemide 40 milligrams once daily in the morning after your first breakfast at home.",ref:"Beginnen Sie mit der Einnahme von Furosemid 40 Milligramm einmal täglich morgens nach Ihrem ersten Frühstück zu Hause.",show_ref:!1},{src:"Start taking Amlodipine 5 milligrams once daily with your morning meal after leaving the hospital.",display_src:"Start taking Amlodipine 5 milligrams once daily with your morning meal after leaving the hospital.",ref:"Beginnen Sie mit der Einnahme von 5 Milligramm Amlodipin einmal täglich zu Ihrer Morgenmahlzeit, nachdem Sie das Krankenhaus verlassen haben.",show_ref:!1},{src:"Start taking Omeprazole 20 milligrams once daily before breakfast after your hospital discharge.",display_src:"Start taking Omeprazole 20 milligrams once daily before breakfast after your hospital discharge.",ref:"Beginnen Sie nach Ihrer Entlassung aus dem Krankenhaus mit der Einnahme von 20 Milligramm Omeprazol einmal täglich vor dem Frühstück.",show_ref:!1},{src:"Start taking Levothyroxine 50 micrograms once daily on an empty stomach, 30 minutes before breakfast after you return home.",display_src:"Start taking Levothyroxine 50 micrograms once daily on an empty stomach, 30 minutes before breakfast after you return home.",ref:"Beginnen Sie mit der Einnahme von Levothyroxin 50 Mikrogramm einmal täglich auf nüchternen Magen, 30 Minuten vor dem Frühstück, nachdem Sie nach Hause gekommen sind.",show_ref:!1},{src:"Start taking Warfarin 2.5 milligrams daily in the evening with food after your discharge from the hospital.",display_src:"Start taking Warfarin 2.5 milligrams daily in the evening with food after your discharge from the hospital.",ref:"Beginnen Sie nach Ihrer Entlassung aus dem Krankenhaus mit der Einnahme von 2,5 Milligramm Warfarin täglich abends zusammen mit einer Mahlzeit.",show_ref:!1},{src:"Start taking Amoxicillin 500 milligrams every 8 hours for 7 days starting tomorrow morning.",display_src:"Start taking Amoxicillin 500 milligrams every 8 hours for 7 days starting tomorrow morning.",ref:"Beginnen Sie ab morgen früh 7 Tage lang mit der Einnahme von 500 Milligramm Amoxicillin alle 8 Stunden.",show_ref:!1},{src:"Start taking Lisinopril 10 milligrams once daily in the morning for 30 days beginning the day after discharge.",display_src:"Start taking Lisinopril 10 milligrams once daily in the morning for 30 days beginning the day after discharge.",ref:"Beginnen Sie ab dem Tag nach der Entlassung 30 Tage lang mit der Einnahme von 10 Milligramm Lisinopril einmal täglich morgens.",show_ref:!1},{src:"Start taking Metformin 850 milligrams twice daily with meals for 90 days starting today at lunchtime.",display_src:"Start taking Metformin 850 milligrams twice daily with meals for 90 days starting today at lunchtime.",ref:"Beginnen Sie ab heute Mittag mit der Einnahme von Metformin 850 Milligramm zweimal täglich zu den Mahlzeiten für 90 Tage.",show_ref:!1},{src:"Start taking Atenolol 25 milligrams once daily at bedtime for 14 days, beginning tonight.",display_src:"Start taking Atenolol 25 milligrams once daily at bedtime for 14 days, beginning tonight.",ref:"Beginnen Sie mit der Einnahme von 25 Milligramm Atenolol einmal täglich vor dem Schlafengehen für 14 Tage, beginnend heute Abend.",show_ref:!1},{src:"Start taking Prozac 20 milligrams every morning for 60 days starting on the day of discharge.",display_src:"Start taking Prozac 20 milligrams every morning for 60 days starting on the day of discharge.",ref:"Beginnen Sie ab dem Tag der Entlassung 60 Tage lang jeden Morgen mit der Einnahme von 20 Milligramm Prozac.",show_ref:!1},{src:"Start taking Warfarin 5 milligrams every evening at 6 PM for 21 days, beginning the day after leaving the hospital.",display_src:"Start taking Warfarin 5 milligrams every evening at 6 PM for 21 days, beginning the day after leaving the hospital.",ref:"Beginnen Sie 21 Tage lang jeden Abend um 18 Uhr mit der Einnahme von 5 Milligramm Warfarin, beginnend am Tag nach der Entlassung aus dem Krankenhaus.",show_ref:!1},{src:"Start taking Ciprofloxacin 250 milligrams every 12 hours for 10 days, starting from tomorrow afternoon.",display_src:"Start taking Ciprofloxacin 250 milligrams every 12 hours for 10 days, starting from tomorrow afternoon.",ref:"Beginnen Sie ab morgen Nachmittag mit der Einnahme von 250 Milligramm Ciprofloxacin alle 12 Stunden für 10 Tage.",show_ref:!1},{src:"Start taking Prednisone 40 milligrams once daily in the morning for 5 days, starting the day after your discharge.",display_src:"Start taking Prednisone 40 milligrams once daily in the morning for 5 days, starting the day after your discharge.",ref:"Beginnen Sie mit der Einnahme von Prednison 40 Milligramm einmal täglich morgens für 5 Tage, beginnend am Tag nach Ihrer Entlassung.",show_ref:!1},{src:"Start taking Furosemide 20 milligrams twice daily at 8 AM and 8 PM for 15 days, beginning the day you leave the hospital.",display_src:"Start taking Furosemide 20 milligrams twice daily at 8 AM and 8 PM for 15 days, beginning the day you leave the hospital.",ref:"Beginnen Sie mit der Einnahme von 20 Milligramm Furosemid zweimal täglich um 8:00 Uhr und 20:00 Uhr für 15 Tage, beginnend mit dem Tag, an dem Sie das Krankenhaus verlassen.",show_ref:!1},{src:"Start taking Omeprazole 20 milligrams once daily before breakfast for 30 days starting the day you are discharged.",display_src:"Start taking Omeprazole 20 milligrams once daily before breakfast for 30 days starting the day you are discharged.",ref:"Beginnen Sie ab dem Tag Ihrer Entlassung 30 Tage lang mit der Einnahme von 20 Milligramm Omeprazol einmal täglich vor dem Frühstück.",show_ref:!1},{src:"Stop taking Aspirin for 5 days.",display_src:"Stop taking Aspirin for 5 days.",ref:"Unterbrechen Sie die Einnahme von Aspirin für 5 Tage.",show_ref:!1},{src:"Stop taking Ibuprofen for 48 hours.",display_src:"Stop taking Ibuprofen for 48 hours.",ref:"Unterbrechen Sie die Einnahme von Ibuprofen für 48 Stunden.",show_ref:!1},{src:"Stop taking Metformin for 24 hours.",display_src:"Stop taking Metformin for 24 hours.",ref:"Unterbrechen Sie die Einnahme von Metformin für 24 Stunden.",show_ref:!1},{src:"Stop taking Lisinopril for 2 weeks.",display_src:"Stop taking Lisinopril for 2 weeks.",ref:"Unterbrechen Sie die Einnahme von Lisinopril für 2 Wochen.",show_ref:!1},{src:"Stop taking Warfarin for 72 hours.",display_src:"Stop taking Warfarin for 72 hours.",ref:"Unterbrechen Sie die Einnahme von Warfarin für 72 Stunden.",show_ref:!1},{src:"Stop taking Amoxicillin for 10 days.",display_src:"Stop taking Amoxicillin for 10 days.",ref:"Unterbrechen Sie die Einnahme von Amoxicillin für 10 Tage.",show_ref:!1},{src:"Stop taking Prednisone for 1 week.",display_src:"Stop taking Prednisone for 1 week.",ref:"Unterbrechen Sie die Einnahme von Prednison für eine Woche.",show_ref:!1},{src:"Stop taking Omeprazole for 3 days.",display_src:"Stop taking Omeprazole for 3 days.",ref:"Unterbrechen Sie die Einnahme von Omeprazol für 3 Tage.",show_ref:!1},{src:"Stop taking Amlodipine for 1 month.",display_src:"Stop taking Amlodipine for 1 month.",ref:"Unterbrechen Sie die Einnahme von Amlodipin für einen Monat.",show_ref:!1},{src:"Stop taking Atorvastatin for 2 weeks.",display_src:"Stop taking Atorvastatin for 2 weeks.",ref:"Unterbrechen Sie die Einnahme von Atorvastatin für 2 Wochen.",show_ref:!1},{src:"Stop taking Amoxicillin after 10 days.",display_src:"Stop taking Amoxicillin after 10 days.",ref:"Beenden Sie die Einnahme von Amoxicillin nach 10 Tagen.",show_ref:!1},{src:"Stop taking Lisinopril after 30 days.",display_src:"Stop taking Lisinopril after 30 days.",ref:"Beenden Sie die Einnahme von Lisinopril nach 30 Tagen.",show_ref:!1},{src:"Stop taking Metformin after 12 weeks.",display_src:"Stop taking Metformin after 12 weeks.",ref:"Beenden Sie die Einnahme von Metformin nach 12 Wochen.",show_ref:!1},{src:"Stop taking Omeprazole after 8 weeks.",display_src:"Stop taking Omeprazole after 8 weeks.",ref:"Beenden Sie die Einnahme von Omeprazol nach 8 Wochen.",show_ref:!1},{src:"Stop taking Prednisone after 7 days.",display_src:"Stop taking Prednisone after 7 days.",ref:"Beenden Sie die Einnahme von Prednison nach 7 Tagen.",show_ref:!1},{src:"Stop taking Atorvastatin after 3 months.",display_src:"Stop taking Atorvastatin after 3 months.",ref:"Beenden Sie die Einnahme von Atorvastatin nach 3 Monaten.",show_ref:!1},{src:"Stop taking Hydrochlorothiazide after 2 weeks.",display_src:"Stop taking Hydrochlorothiazide after 2 weeks.",ref:"Beenden Sie die Einnahme von Hydrochlorothiazid nach 2 Wochen.",show_ref:!1},{src:"Stop taking Ibuprofen after 5 days.",display_src:"Stop taking Ibuprofen after 5 days.",ref:"Beenden Sie die Einnahme von Ibuprofen nach 5 Tagen.",show_ref:!1},{src:"Stop taking Ciprofloxacin after 14 days.",display_src:"Stop taking Ciprofloxacin after 14 days.",ref:"Beenden Sie die Einnahme von Ciprofloxacin nach 14 Tagen.",show_ref:!1},{src:"Stop taking Warfarin after 6 months.",display_src:"Stop taking Warfarin after 6 months.",ref:"Beenden Sie die Einnahme von Warfarin nach 6 Monaten.",show_ref:!1},{src:"Stop taking Lisinopril until your follow-up appointment with Dr. Johnson.",display_src:"Stop taking Lisinopril until your follow-up appointment with Dr. Johnson.",ref:"Beenden Sie die Einnahme von Lisinopril bis zu Ihrem Folgetermin bei Dr. Johnson.",show_ref:!1},{src:"Stop taking Metformin until your follow-up appointment with Nurse Practitioner Smith.",display_src:"Stop taking Metformin until your follow-up appointment with Nurse Practitioner Smith.",ref:"Beenden Sie die Einnahme von Metformin bis zu Ihrem Folgetermin bei Nurse Practitioner Smith.",show_ref:!1},{src:"Stop taking Warfarin until your follow-up appointment with Dr. Patel.",display_src:"Stop taking Warfarin until your follow-up appointment with Dr. Patel.",ref:"Beenden Sie die Einnahme von Warfarin bis zu Ihrem Folgetermin bei Dr. Patel.",show_ref:!1},{src:"Stop taking Hydrochlorothiazide until your follow-up appointment with Dr. Thompson.",display_src:"Stop taking Hydrochlorothiazide until your follow-up appointment with Dr. Thompson.",ref:"Beenden Sie die Einnahme von Hydrochlorothiazid bis zu Ihrem Folgetermin bei Dr. Thompson.",show_ref:!1},{src:"Stop taking Atorvastatin until your follow-up appointment with Physician Assistant Davis.",display_src:"Stop taking Atorvastatin until your follow-up appointment with Physician Assistant Davis.",ref:"Beenden Sie die Einnahme von Atorvastatin bis zu Ihrem Folgetermin bei Arzthelferin Davis.",show_ref:!1},{src:"Stop taking Metoprolol until your follow-up appointment with Dr. Garcia.",display_src:"Stop taking Metoprolol until your follow-up appointment with Dr. Garcia.",ref:"Beenden Sie die Einnahme von Metoprolol bis zu Ihrem Folgetermin bei Dr. Garcia.",show_ref:!1},{src:"Stop taking Levothyroxine until your follow-up appointment with Nurse Practitioner Harris.",display_src:"Stop taking Levothyroxine until your follow-up appointment with Nurse Practitioner Harris.",ref:"Beenden Sie die Einnahme von Levothyroxin bis zu Ihrem Folgetermin bei der Krankenschwester Harris.",show_ref:!1},{src:"Stop taking Simvastatin until your follow-up appointment with Dr. Lee.",display_src:"Stop taking Simvastatin until your follow-up appointment with Dr. Lee.",ref:"Beenden Sie die Einnahme von Simvastatin bis zu Ihrem nächsten Termin bei Dr. Lee.",show_ref:!1},{src:"Stop taking Amlodipine until your follow-up appointment with Physician Assistant Walker.",display_src:"Stop taking Amlodipine until your follow-up appointment with Physician Assistant Walker.",ref:"Beenden Sie die Einnahme von Amlodipin bis zu Ihrem nächsten Termin bei Arzthelferin Walker.",show_ref:!1},{src:"Stop taking Amoxicillin until your follow-up appointment with Dr. Rodriguez.",display_src:"Stop taking Amoxicillin until your follow-up appointment with Dr. Rodriguez.",ref:"Beenden Sie die Einnahme von Amoxicillin bis zu Ihrem nächsten Termin bei Dr. Rodriguez.",show_ref:!1},{src:"Please eat before you take ibuprofen.",display_src:"Please eat before you take ibuprofen.",ref:"Bitte essen Sie, bevor Sie Ibuprofen einnehmen.",show_ref:!1},{src:"Please eat before you take metformin.",display_src:"Please eat before you take metformin.",ref:"Bitte essen Sie, bevor Sie Metformin einnehmen.",show_ref:!1},{src:"Please eat before you take amoxicillin.",display_src:"Please eat before you take amoxicillin.",ref:"Bitte essen Sie, bevor Sie Amoxicillin einnehmen.",show_ref:!1},{src:"Please eat before you take lisinopril.",display_src:"Please eat before you take lisinopril.",ref:"Bitte essen Sie, bevor Sie Lisinopril einnehmen.",show_ref:!1},{src:"Please eat before you take atorvastatin.",display_src:"Please eat before you take atorvastatin.",ref:"Bitte essen Sie, bevor Sie Atorvastatin einnehmen.",show_ref:!1},{src:"Please eat before you take levothyroxine.",display_src:"Please eat before you take levothyroxine.",ref:"Bitte essen Sie, bevor Sie Levothyroxin einnehmen.",show_ref:!1},{src:"Please eat before you take gabapentin.",display_src:"Please eat before you take gabapentin.",ref:"Bitte essen Sie, bevor Sie Gabapentin einnehmen.",show_ref:!1},{src:"Please eat before you take azithromycin.",display_src:"Please eat before you take azithromycin.",ref:"Bitte essen Sie, bevor Sie Azithromycin einnehmen.",show_ref:!1},{src:"Please eat before you take omeprazole.",display_src:"Please eat before you take omeprazole.",ref:"Bitte essen Sie, bevor Sie Omeprazol einnehmen.",show_ref:!1},{src:"Please eat before you take prednisone.",display_src:"Please eat before you take prednisone.",ref:"Bitte essen Sie, bevor Sie Prednison einnehmen.",show_ref:!1},{src:"If you develop any side effects or if you have any questions, stop the medication and call the office.",display_src:"If you develop any side effects or if you have any questions, stop the medication and call the office.",ref:"Wenn Sie Nebenwirkungen bemerken oder Fragen haben, brechen Sie das Medikament ab und rufen Sie die Praxis an.",show_ref:!1},{src:"Do not drive or operate machinery for 4 hours after taking Benadryl.",display_src:"Do not drive or operate machinery for 4 hours after taking Benadryl.",ref:"Führen Sie nach der Einnahme von Benadryl 4 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 8 hours after taking Ambien.",display_src:"Do not drive or operate machinery for 8 hours after taking Ambien.",ref:"Führen Sie nach der Einnahme von Ambien 8 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 6 hours after taking Xanax.",display_src:"Do not drive or operate machinery for 6 hours after taking Xanax.",ref:"Führen Sie nach der Einnahme von Xanax 6 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 12 hours after taking Flexeril.",display_src:"Do not drive or operate machinery for 12 hours after taking Flexeril.",ref:"Führen Sie nach der Einnahme von Flexeril 12 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 24 hours after taking Valium.",display_src:"Do not drive or operate machinery for 24 hours after taking Valium.",ref:"Führen Sie nach der Einnahme von Valium 24 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 4 hours after taking Zyrtec.",display_src:"Do not drive or operate machinery for 4 hours after taking Zyrtec.",ref:"Führen Sie nach der Einnahme von Zyrtec 4 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 8 hours after taking Seroquel.",display_src:"Do not drive or operate machinery for 8 hours after taking Seroquel.",ref:"Führen Sie nach der Einnahme von Seroquel 8 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 6 hours after taking Percocet.",display_src:"Do not drive or operate machinery for 6 hours after taking Percocet.",ref:"Führen Sie nach der Einnahme von Percocet 6 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 12 hours after taking Vicodin.",display_src:"Do not drive or operate machinery for 12 hours after taking Vicodin.",ref:"Führen Sie nach der Einnahme von Vicodin 12 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 24 hours after taking Klonopin.",display_src:"Do not drive or operate machinery for 24 hours after taking Klonopin.",ref:"Führen Sie nach der Einnahme von Klonopin 24 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not take aspirin and ibuprofen at the same time.",display_src:"Do not take aspirin and ibuprofen at the same time.",ref:"Nehmen Sie Aspirin und Ibuprofen nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take warfarin and heparin at the same time.",display_src:"Do not take warfarin and heparin at the same time.",ref:"Nehmen Sie Warfarin und Heparin nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take lisinopril and losartan at the same time.",display_src:"Do not take lisinopril and losartan at the same time.",ref:"Nehmen Sie Lisinopril und Losartan nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take simvastatin and gemfibrozil at the same time.",display_src:"Do not take simvastatin and gemfibrozil at the same time.",ref:"Nehmen Sie Simvastatin und Gemfibrozil nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take metformin and glipizide at the same time.",display_src:"Do not take metformin and glipizide at the same time.",ref:"Nehmen Sie Metformin und Glipizid nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take amoxicillin and azithromycin at the same time.",display_src:"Do not take amoxicillin and azithromycin at the same time.",ref:"Nehmen Sie Amoxicillin und Azithromycin nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take alprazolam and diazepam at the same time.",display_src:"Do not take alprazolam and diazepam at the same time.",ref:"Nehmen Sie Alprazolam und Diazepam nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take furosemide and hydrochlorothiazide at the same time.",display_src:"Do not take furosemide and hydrochlorothiazide at the same time.",ref:"Nehmen Sie Furosemid und Hydrochlorothiazid nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take omeprazole and ranitidine at the same time.",display_src:"Do not take omeprazole and ranitidine at the same time.",ref:"Nehmen Sie Omeprazol und Ranitidin nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take prednisone and dexamethasone at the same time.",display_src:"Do not take prednisone and dexamethasone at the same time.",ref:"Nehmen Sie Prednison und Dexamethason nicht gleichzeitig ein.",show_ref:!1},{src:"Please be careful with these medications and use only when needed.",display_src:"Please be careful with these medications and use only when needed.",ref:"Seien Sie bitte vorsichtig mit diesen Medikamenten und verwenden Sie sie nur bei Bedarf.",show_ref:!1},{src:"Please be careful with ibuprofen and use only when needed.",display_src:"Please be careful with ibuprofen and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Ibuprofen und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with acetaminophen and use only when needed.",display_src:"Please be careful with acetaminophen and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Paracetamol und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with amoxicillin and use only when needed.",display_src:"Please be careful with amoxicillin and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Amoxicillin und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with hydrocodone and use only when needed.",display_src:"Please be careful with hydrocodone and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Hydrocodon und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with lisinopril and use only when needed.",display_src:"Please be careful with lisinopril and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Lisinopril und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with metformin and use only when needed.",display_src:"Please be careful with metformin and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Metformin und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with omeprazole and use only when needed.",display_src:"Please be careful with omeprazole and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Omeprazol und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with prednisone and use only when needed.",display_src:"Please be careful with prednisone and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Prednison und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with warfarin and use only when needed.",display_src:"Please be careful with warfarin and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Warfarin und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with albuterol and use only when needed.",display_src:"Please be careful with albuterol and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Albuterol und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Do not take more than 2 grams of Amoxicillin per day.",display_src:"Do not take more than 2 grams of Amoxicillin per day.",ref:"Nehmen Sie nicht mehr als 2 Gramm Amoxicillin pro Tag ein.",show_ref:!1},{src:"Do not take more than 50 milligrams of Atenolol per day.",display_src:"Do not take more than 50 milligrams of Atenolol per day.",ref:"Nehmen Sie nicht mehr als 50 Milligramm Atenolol pro Tag ein.",show_ref:!1},{src:"Do not take more than 4 grams of Paracetamol per day.",display_src:"Do not take more than 4 grams of Paracetamol per day.",ref:"Nehmen Sie nicht mehr als 4 Gramm Paracetamol pro Tag ein.",show_ref:!1},{src:"Do not take more than 300 milligrams of Tramadol per day.",display_src:"Do not take more than 300 milligrams of Tramadol per day.",ref:"Nehmen Sie nicht mehr als 300 Milligramm Tramadol pro Tag ein.",show_ref:!1},{src:"Do not take more than 200 milligrams of Celecoxib per day.",display_src:"Do not take more than 200 milligrams of Celecoxib per day.",ref:"Nehmen Sie nicht mehr als 200 Milligramm Celecoxib pro Tag ein.",show_ref:!1},{src:"Do not take more than 40 milligrams of Omeprazole per day.",display_src:"Do not take more than 40 milligrams of Omeprazole per day.",ref:"Nehmen Sie nicht mehr als 40 Milligramm Omeprazol pro Tag ein.",show_ref:!1},{src:"Do not take more than 1000 milligrams of Metformin per day.",display_src:"Do not take more than 1000 milligrams of Metformin per day.",ref:"Nehmen Sie nicht mehr als 1000 Milligramm Metformin pro Tag ein.",show_ref:!1},{src:"Do not take more than 600 milligrams of Ibuprofen per day.",display_src:"Do not take more than 600 milligrams of Ibuprofen per day.",ref:"Nehmen Sie nicht mehr als 600 Milligramm Ibuprofen pro Tag ein.",show_ref:!1},{src:"Do not take more than 75 milligrams of Clopidogrel per day.",display_src:"Do not take more than 75 milligrams of Clopidogrel per day.",ref:"Nehmen Sie nicht mehr als 75 Milligramm Clopidogrel pro Tag ein.",show_ref:!1},{src:"Do not take more than 20 milligrams of Lisinopril per day.",display_src:"Do not take more than 20 milligrams of Lisinopril per day.",ref:"Nehmen Sie nicht mehr als 20 Milligramm Lisinopril pro Tag ein.",show_ref:!1},{src:"Take acetaminophen for mild to moderate pain relief.",display_src:"Take acetaminophen for mild to moderate pain relief.",ref:"Nehmen Sie Paracetamol zur leichten bis mittelschweren Schmerzlinderung.",show_ref:!1},{src:"Take ibuprofen for inflammation and fever reduction.",display_src:"Take ibuprofen for inflammation and fever reduction.",ref:"Nehmen Sie Ibuprofen zur Entzündungs- und Fiebersenkung.",show_ref:!1},{src:"Take loratadine for seasonal allergy symptoms.",display_src:"Take loratadine for seasonal allergy symptoms.",ref:"Nehmen Sie Loratadin gegen saisonale Allergiesymptome ein.",show_ref:!1},{src:"Take omeprazole for acid reflux and heartburn.",display_src:"Take omeprazole for acid reflux and heartburn.",ref:"Nehmen Sie Omeprazol gegen sauren Reflux und Sodbrennen.",show_ref:!1},{src:"Take metformin for managing blood sugar levels in type 2 diabetes.",display_src:"Take metformin for managing blood sugar levels in type 2 diabetes.",ref:"Nehmen Sie Metformin zur Kontrolle des Blutzuckerspiegels bei Typ-2-Diabetes ein.",show_ref:!1},{src:"Take lisinopril for high blood pressure control.",display_src:"Take lisinopril for high blood pressure control.",ref:"Nehmen Sie Lisinopril zur Kontrolle von Bluthochdruck.",show_ref:!1},{src:"Take furosemide for reducing fluid retention and swelling.",display_src:"Take furosemide for reducing fluid retention and swelling.",ref:"Nehmen Sie Furosemid ein, um Flüssigkeitsansammlungen und Schwellungen zu reduzieren.",show_ref:!1},{src:"Take amoxicillin for bacterial infections.",display_src:"Take amoxicillin for bacterial infections.",ref:"Nehmen Sie Amoxicillin gegen bakterielle Infektionen.",show_ref:!1},{src:"Take albuterol for relief from asthma symptoms and shortness of breath.",display_src:"Take albuterol for relief from asthma symptoms and shortness of breath.",ref:"Nehmen Sie Albuterol zur Linderung von Asthmasymptomen und Atemnot.",show_ref:!1},{src:"Take sertraline for depression and anxiety management.",display_src:"Take sertraline for depression and anxiety management.",ref:"Nehmen Sie Sertralin zur Behandlung von Depressionen und Angstzuständen.",show_ref:!1},{src:"Take ibuprofen to decrease inflammation and pain.",display_src:"Take ibuprofen to decrease inflammation and pain.",ref:"Nehmen Sie Ibuprofen ein, um Entzündungen und Schmerzen zu lindern.",show_ref:!1},{src:"Take acetaminophen to decrease fever and headache.",display_src:"Take acetaminophen to decrease fever and headache.",ref:"Nehmen Sie Paracetamol, um Fieber und Kopfschmerzen zu lindern.",show_ref:!1},{src:"Take antacids to decrease heartburn and acid reflux.",display_src:"Take antacids to decrease heartburn and acid reflux.",ref:"Nehmen Sie Antazida ein, um Sodbrennen und sauren Reflux zu lindern.",show_ref:!1},{src:"Take loratadine to decrease allergy symptoms such as sneezing and itching.",display_src:"Take loratadine to decrease allergy symptoms such as sneezing and itching.",ref:"Nehmen Sie Loratadin ein, um allergische Symptome wie Niesen und Juckreiz zu lindern.",show_ref:!1},{src:"Take ondansetron to decrease nausea and vomiting.",display_src:"Take ondansetron to decrease nausea and vomiting.",ref:"Nehmen Sie Ondansetron ein, um Übelkeit und Erbrechen zu lindern.",show_ref:!1},{src:"Take docusate sodium to decrease constipation.",display_src:"Take docusate sodium to decrease constipation.",ref:"Nehmen Sie Docusat-Natrium ein, um Verstopfung zu lindern.",show_ref:!1},{src:"Take hydrochlorothiazide to decrease high blood pressure.",display_src:"Take hydrochlorothiazide to decrease high blood pressure.",ref:"Nehmen Sie Hydrochlorothiazid, um hohen Blutdruck zu senken.",show_ref:!1},{src:"Take metformin to decrease blood sugar levels in type 2 diabetes.",display_src:"Take metformin to decrease blood sugar levels in type 2 diabetes.",ref:"Nehmen Sie Metformin ein, um den Blutzuckerspiegel bei Typ-2-Diabetes zu senken.",show_ref:!1},{src:"Take albuterol to decrease shortness of breath and wheezing.",display_src:"Take albuterol to decrease shortness of breath and wheezing.",ref:"Nehmen Sie Albuterol, um Atemnot und pfeifende Atemgeräusche zu lindern.",show_ref:!1},{src:"Take amoxicillin to decrease symptoms of bacterial infections, such as sore throat and fever.",display_src:"Take amoxicillin to decrease symptoms of bacterial infections, such as sore throat and fever.",ref:"Nehmen Sie Amoxicillin ein, um die Symptome bakterieller Infektionen wie Halsschmerzen und Fieber zu lindern.",show_ref:!1},{src:"Take ibuprofen to alleviate pain.",display_src:"Take ibuprofen to alleviate pain.",ref:"Nehmen Sie Ibuprofen, um Schmerzen zu lindern.",show_ref:!1},{src:"Take acetaminophen to reduce fever.",display_src:"Take acetaminophen to reduce fever.",ref:"Nehmen Sie Paracetamol, um das Fieber zu senken.",show_ref:!1},{src:"Take loratadine to minimize allergy symptoms.",display_src:"Take loratadine to minimize allergy symptoms.",ref:"Nehmen Sie Loratadin ein, um Allergiesymptome zu minimieren.",show_ref:!1},{src:"Take omeprazole to decrease heartburn.",display_src:"Take omeprazole to decrease heartburn.",ref:"Nehmen Sie Omeprazol ein, um Sodbrennen zu lindern.",show_ref:!1},{src:"Take guaifenesin to thin out mucus.",display_src:"Take guaifenesin to thin out mucus.",ref:"Nehmen Sie Guaifenesin, um den Schleim zu verdünnen.",show_ref:!1},{src:"Take prochlorperazine to lessen nausea.",display_src:"Take prochlorperazine to lessen nausea.",ref:"Nehmen Sie Prochlorperazin ein, um Übelkeit zu lindern.",show_ref:!1},{src:"Take hydrochlorothiazide to lower blood pressure.",display_src:"Take hydrochlorothiazide to lower blood pressure.",ref:"Nehmen Sie Hydrochlorothiazid ein, um den Blutdruck zu senken.",show_ref:!1},{src:"Take metformin to improve blood sugar control.",display_src:"Take metformin to improve blood sugar control.",ref:"Nehmen Sie Metformin ein, um die Blutzuckerkontrolle zu verbessern.",show_ref:!1},{src:"Take docusate to ease constipation.",display_src:"Take docusate to ease constipation.",ref:"Nehmen Sie Docusat, um Verstopfung zu lindern.",show_ref:!1},{src:"Take furosemide to decrease fluid retention.",display_src:"Take furosemide to decrease fluid retention.",ref:"Nehmen Sie Furosemid ein, um die Flüssigkeitsansammlung zu verringern.",show_ref:!1},{src:'Note: The original prompt asked for "increase" in symptom, which would be incorrect for discharge instructions. The revised sentences above are now "to alleviate" or "to decrease" the symptoms.',display_src:'Note: The original prompt asked for "increase" in symptom, which would be incorrect for discharge instructions. The revised sentences above are now "to alleviate" or "to decrease" the symptoms.',ref:"Hinweis: In der ursprünglichen Eingabeaufforderung wurde nach einer „Zunahme“ der Symptome gefragt, was für Entlassungsanweisungen falsch wäre. Die geänderten Sätze oben lauten nun „die Symptome lindern“ oder „vermindern“.",show_ref:!1},{src:"We have NOT made any changes to your medications.",display_src:"We have NOT made any changes to your medications.",ref:"Wir haben KEINE Änderungen an Ihren Medikamenten vorgenommen.",show_ref:!1},{src:"You do not need ibuprofen.",display_src:"You do not need ibuprofen.",ref:"Sie brauchen kein Ibuprofen.",show_ref:!1},{src:"You do not need amoxicillin.",display_src:"You do not need amoxicillin.",ref:"Sie benötigen kein Amoxicillin.",show_ref:!1},{src:"You do not need metformin.",display_src:"You do not need metformin.",ref:"Sie benötigen kein Metformin.",show_ref:!1},{src:"You do not need lisinopril.",display_src:"You do not need lisinopril.",ref:"Sie benötigen kein Lisinopril.",show_ref:!1},{src:"You do not need omeprazole.",display_src:"You do not need omeprazole.",ref:"Sie brauchen kein Omeprazol.",show_ref:!1},{src:"You do not need atorvastatin.",display_src:"You do not need atorvastatin.",ref:"Sie benötigen kein Atorvastatin.",show_ref:!1},{src:"You do not need hydrochlorothiazide.",display_src:"You do not need hydrochlorothiazide.",ref:"Sie benötigen kein Hydrochlorothiazid.",show_ref:!1},{src:"You do not need gabapentin.",display_src:"You do not need gabapentin.",ref:"Sie benötigen kein Gabapentin.",show_ref:!1},{src:"You do not need prednisone.",display_src:"You do not need prednisone.",ref:"Sie benötigen kein Prednison.",show_ref:!1},{src:"You do not need azithromycin.",display_src:"You do not need azithromycin.",ref:"Sie benötigen kein Azithromycin.",show_ref:!1},{src:"Please take your medications according to the instructions.",display_src:"Please take your medications according to the instructions.",ref:"Bitte nehmen Sie Ihre Medikamente entsprechend den Anweisungen ein.",show_ref:!1},{src:"Aspirin can cause stomach pain or upset.",display_src:"Aspirin can cause stomach pain or upset.",ref:"Aspirin kann Magenschmerzen oder Magenbeschwerden verursachen.",show_ref:!1},{src:"Lisinopril can cause dizziness or lightheadedness.",display_src:"Lisinopril can cause dizziness or lightheadedness.",ref:"Lisinopril kann Schwindel und Benommenheit verursachen.",show_ref:!1},{src:"Amoxicillin can cause diarrhea or mild skin rash.",display_src:"Amoxicillin can cause diarrhea or mild skin rash.",ref:"Amoxicillin kann Durchfall oder leichten Hautausschlag verursachen.",show_ref:!1},{src:"Metformin can cause nausea or vomiting.",display_src:"Metformin can cause nausea or vomiting.",ref:"Metformin kann Übelkeit oder Erbrechen verursachen.",show_ref:!1},{src:"Amlodipine can cause swelling in hands or feet.",display_src:"Amlodipine can cause swelling in hands or feet.",ref:"Amlodipin kann Schwellungen an Händen oder Füßen verursachen.",show_ref:!1},{src:"Ibuprofen can cause heartburn or indigestion.",display_src:"Ibuprofen can cause heartburn or indigestion.",ref:"Ibuprofen kann Sodbrennen oder Verdauungsstörungen verursachen.",show_ref:!1},{src:"Warfarin can cause easy bruising or bleeding.",display_src:"Warfarin can cause easy bruising or bleeding.",ref:"Warfarin kann leicht zu blauen Flecken oder Blutungen führen.",show_ref:!1},{src:"Atorvastatin can cause muscle pain or weakness.",display_src:"Atorvastatin can cause muscle pain or weakness.",ref:"Atorvastatin kann Muskelschmerzen oder Muskelschwäche verursachen.",show_ref:!1},{src:"Furosemide can cause increased urination or dehydration.",display_src:"Furosemide can cause increased urination or dehydration.",ref:"Furosemid kann zu vermehrtem Wasserlassen oder Dehydrierung führen.",show_ref:!1},{src:"Omeprazole can cause headache or gas.",display_src:"Omeprazole can cause headache or gas.",ref:"Omeprazol kann Kopfschmerzen oder Blähungen verursachen.",show_ref:!1},{src:"Please adjust your insulin by your scale.",display_src:"Please adjust your insulin by your scale.",ref:"Bitte passen Sie Ihren Insulinspiegel an Ihre Waage an.",show_ref:!1},{src:"Please monitor your symptoms",display_src:"Please monitor your symptoms",ref:"Bitte überwachen Sie Ihre Symptome",show_ref:!1},{src:"Please return to the emergency department if you experience difficulty breathing or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience difficulty breathing or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn bei Ihnen Atembeschwerden auftreten oder neue oder sich verschlimmernde Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience severe chest pain or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience severe chest pain or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn bei Ihnen starke Brustschmerzen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience sudden onset of severe headache or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience sudden onset of severe headache or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn bei Ihnen plötzlich starke Kopfschmerzen auftreten oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience persistent vomiting or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience persistent vomiting or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an die Notaufnahme, wenn bei Ihnen anhaltendes Erbrechen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience significant changes in your vision or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience significant changes in your vision or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn Sie erhebliche Veränderungen Ihres Sehvermögens oder neue oder sich verschlimmernde Symptome bemerken, die Sie beunruhigen.",show_ref:!1},{src:"Please return to the emergency department if you experience uncontrolled bleeding or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience uncontrolled bleeding or any new or worsening symptoms that are concerning.",ref:"Bitte kehren Sie zur Notaufnahme zurück, wenn bei Ihnen unkontrollierte Blutungen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience high fever that does not improve with medication or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience high fever that does not improve with medication or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn bei Ihnen hohes Fieber auftritt, das sich mit Medikamenten nicht bessert, oder wenn bei Ihnen neue oder sich verschlimmernde Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience a sudden loss of consciousness or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience a sudden loss of consciousness or any new or worsening symptoms that are concerning.",ref:"Bitte kehren Sie zur Notaufnahme zurück, wenn bei Ihnen ein plötzlicher Bewusstseinsverlust oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience severe abdominal pain or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience severe abdominal pain or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn bei Ihnen starke Bauchschmerzen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience new or worsening signs of infection, such as redness, swelling, or pus, at the site of a recent surgery or injury or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience new or worsening signs of infection, such as redness, swelling, or pus, at the site of a recent surgery or injury or any new or worsening symptoms that are concerning.",ref:"Bitte kehren Sie zur Notaufnahme zurück, wenn Sie an der Stelle einer kürzlich erfolgten Operation oder Verletzung neue oder sich verschlimmernde Anzeichen einer Infektion wie Rötung, Schwellung oder Eiter bemerken oder neue oder sich verschlimmernde Symptome bemerken, die Anlass zur Sorge geben.",show_ref:!1},{src:"Please contact a healthcare provider if you experience shortness of breath or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience shortness of breath or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen Atemnot auftritt oder neue oder sich verschlimmernde Symptome auftreten, die Sie beunruhigen.",show_ref:!1},{src:"Please contact a healthcare provider if you experience severe or persistent vomiting or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience severe or persistent vomiting or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen schweres oder anhaltendes Erbrechen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please contact a healthcare provider if you experience chest pain or pressure or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience chest pain or pressure or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn Sie Schmerzen oder Druck in der Brust verspüren oder neue oder sich verschlimmernde Symptome haben, die Sie beunruhigen.",show_ref:!1},{src:"Please contact a healthcare provider if you experience severe abdominal pain or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience severe abdominal pain or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen starke Bauchschmerzen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please contact a healthcare provider if you experience uncontrolled bleeding or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience uncontrolled bleeding or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen unkontrollierte Blutungen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please contact a healthcare provider if you experience sudden or severe headaches or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience sudden or severe headaches or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn Sie plötzliche oder starke Kopfschmerzen oder neue oder sich verschlimmernde besorgniserregende Symptome verspüren.",show_ref:!1},{src:"Please contact a healthcare provider if you experience difficulty in swallowing or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience difficulty in swallowing or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen Schluckbeschwerden auftreten oder neue oder sich verschlimmernde Symptome auftreten, die Sie beunruhigen.",show_ref:!1},{src:"Please contact a healthcare provider if you experience persistent or high fever or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience persistent or high fever or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen anhaltendes oder hohes Fieber oder neue oder sich verschlimmernde Symptome auftreten, die Anlass zur Sorge geben.",show_ref:!1},{src:"Please contact a healthcare provider if you experience sudden vision changes or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience sudden vision changes or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen plötzliche Sehstörungen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please contact a healthcare provider if you experience confusion or altered mental status or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience confusion or altered mental status or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn Sie Verwirrung oder einen veränderten Geisteszustand oder neue oder sich verschlimmernde Symptome bemerken, die Sie beunruhigen.",show_ref:!1},{src:"Please call 911 if you experience sudden chest pain or discomfort, which may feel like pressure, squeezing, or fullness.",display_src:"Please call 911 if you experience sudden chest pain or discomfort, which may feel like pressure, squeezing, or fullness.",ref:"Bitte rufen Sie 911 an, wenn Sie plötzlich Schmerzen oder Beschwerden in der Brust verspüren, die sich wie Druck, Quetschen oder Völlegefühl anfühlen können.",show_ref:!1},{src:"Please call 911 if you experience difficulty breathing or shortness of breath that worsens or is not relieved by rest.",display_src:"Please call 911 if you experience difficulty breathing or shortness of breath that worsens or is not relieved by rest.",ref:"Bitte rufen Sie 911 an, wenn Sie Atembeschwerden oder Kurzatmigkeit verspüren, die sich verschlimmern oder durch Ruhe nicht gelindert werden.",show_ref:!1},{src:"Please call 911 if you experience uncontrolled bleeding that does not stop after applying direct pressure.",display_src:"Please call 911 if you experience uncontrolled bleeding that does not stop after applying direct pressure.",ref:"Bitte rufen Sie 911 an, wenn bei Ihnen unkontrollierte Blutungen auftreten, die auch nach direktem Druck nicht aufhören.",show_ref:!1},{src:"Please call 911 if you experience severe weakness or numbness on one side of your body, including your face, arm, or leg.",display_src:"Please call 911 if you experience severe weakness or numbness on one side of your body, including your face, arm, or leg.",ref:"Bitte rufen Sie 911 an, wenn Sie auf einer Körperseite, einschließlich Gesicht, Arm oder Bein, starke Schwäche oder Taubheitsgefühl verspüren.",show_ref:!1},{src:"Please call 911 if you experience sudden, severe headache with no known cause, accompanied by confusion, blurred vision, or loss of consciousness.",display_src:"Please call 911 if you experience sudden, severe headache with no known cause, accompanied by confusion, blurred vision, or loss of consciousness.",ref:"Bitte rufen Sie 911 an, wenn bei Ihnen plötzlich starke Kopfschmerzen ohne bekannte Ursache auftreten, die mit Verwirrung, verschwommenem Sehen oder Bewusstlosigkeit einhergehen.",show_ref:!1},{src:"Please call 911 if you experience seizures lasting longer than five minutes, or multiple seizures without regaining consciousness between them.",display_src:"Please call 911 if you experience seizures lasting longer than five minutes, or multiple seizures without regaining consciousness between them.",ref:"Bitte rufen Sie 911 an, wenn bei Ihnen Anfälle auftreten, die länger als fünf Minuten dauern oder mehrere Anfälle auftreten, ohne dass Sie zwischendurch das Bewusstsein wiedererlangen.",show_ref:!1},{src:"Please call 911 if you experience severe abdominal pain, especially if it is accompanied by vomiting, diarrhea, or signs of dehydration.",display_src:"Please call 911 if you experience severe abdominal pain, especially if it is accompanied by vomiting, diarrhea, or signs of dehydration.",ref:"Bitte rufen Sie 911 an, wenn Sie unter starken Bauchschmerzen leiden, insbesondere wenn diese mit Erbrechen, Durchfall oder Anzeichen von Dehydrierung einhergehen.",show_ref:!1},{src:"Please call 911 if you experience signs of a severe allergic reaction, such as difficulty breathing, swelling of the face or throat, or hives.",display_src:"Please call 911 if you experience signs of a severe allergic reaction, such as difficulty breathing, swelling of the face or throat, or hives.",ref:"Bitte rufen Sie 911 an, wenn Sie Anzeichen einer schweren allergischen Reaktion bemerken, wie z. B. Atembeschwerden, Schwellungen im Gesicht oder im Hals oder Nesselsucht.",show_ref:!1},{src:"Please call 911 if you experience sudden changes in vision, such as loss of vision in one or both eyes, double vision, or seeing flashing lights or spots.",display_src:"Please call 911 if you experience sudden changes in vision, such as loss of vision in one or both eyes, double vision, or seeing flashing lights or spots.",ref:"Bitte rufen Sie 911 an, wenn bei Ihnen plötzliche Veränderungen des Sehvermögens auftreten, z. B. Sehverlust auf einem oder beiden Augen, Doppeltsehen oder das Sehen blinkender Lichter oder Punkte.",show_ref:!1},{src:"Please call 911 if you experience signs of a possible stroke, such as sudden confusion, trouble speaking or understanding speech, or sudden trouble walking or maintaining balance.",display_src:"Please call 911 if you experience signs of a possible stroke, such as sudden confusion, trouble speaking or understanding speech, or sudden trouble walking or maintaining balance.",ref:"Bitte rufen Sie 911 an, wenn Sie Anzeichen eines möglichen Schlaganfalls bemerken, wie z. B. plötzliche Verwirrtheit, Probleme beim Sprechen oder Verstehen von Sprache oder plötzliche Probleme beim Gehen oder beim Halten des Gleichgewichts.",show_ref:!1},{src:"Warm Regards, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"Warm Regards, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Herzliche Grüße, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Besucht",show_ref:!1},{src:"Sincerely, Dr. [DEID] - Medical Intern Dr. [DEID] - Senior Resident Dr. [DEID], MD - Chief Attending",display_src:"Sincerely, Dr. [DEID] - Medical Intern Dr. [DEID] - Senior Resident Dr. [DEID], MD - Chief Attending",ref:"Mit freundlichen Grüßen Dr. [DEID] – Medizinischer Praktikant Dr. [DEID] – Leitender Assistenzarzt Dr. [DEID], MD – Leitender Oberarzt",show_ref:!1},{src:"Best Wishes, Dr. [DEID] - First-Year Intern Dr. [DEID] - Second-Year Resident Dr. [DEID], MD - Supervising Attending",display_src:"Best Wishes, Dr. [DEID] - First-Year Intern Dr. [DEID] - Second-Year Resident Dr. [DEID], MD - Supervising Attending",ref:"Mit freundlichen Grüßen, Dr. [DEID] – Praktikant im ersten Jahr Dr. [DEID] – Assistenzarzt im zweiten Jahr Dr. [DEID], MD – Betreuende Betreuung",show_ref:!1},{src:"Take Care, Dr. [DEID] - Junior Intern Dr. [DEID] - Senior Resident Dr. [DEID], MD - Head Attending",display_src:"Take Care, Dr. [DEID] - Junior Intern Dr. [DEID] - Senior Resident Dr. [DEID], MD - Head Attending",ref:"Passen Sie auf sich auf, Dr. [DEID] – Juniorpraktikant Dr. [DEID] – Oberarzt Dr. [DEID], MD – Leitender Oberarzt",show_ref:!1},{src:"With Appreciation, Dr. [DEID] - Clinical Intern Dr. [DEID] - Medical Resident Dr. [DEID], MD - Consultant Attending",display_src:"With Appreciation, Dr. [DEID] - Clinical Intern Dr. [DEID] - Medical Resident Dr. [DEID], MD - Consultant Attending",ref:"Mit Anerkennung, Dr. [DEID] – klinischer Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – anwesender Berater",show_ref:!1},{src:"Kind Regards, Dr. [DEID] - Rotating Intern Dr. [DEID] - Resident Physician Dr. [DEID], MD - Staff Attending",display_src:"Kind Regards, Dr. [DEID] - Rotating Intern Dr. [DEID] - Resident Physician Dr. [DEID], MD - Staff Attending",ref:"Mit freundlichen Grüßen, Dr. [DEID] – Rotierender Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Anwesendes Personal",show_ref:!1},{src:"Yours Truly, Dr. [DEID] - Hospital Intern Dr. [DEID] - Inpatient Resident Dr. [DEID], MD - Lead Attending",display_src:"Yours Truly, Dr. [DEID] - Hospital Intern Dr. [DEID] - Inpatient Resident Dr. [DEID], MD - Lead Attending",ref:"Mit freundlichen Grüßen Dr. [DEID] – Krankenhauspraktikant Dr. [DEID] – Stationärer Assistenzarzt Dr. [DEID], MD – Leitender Oberarzt",show_ref:!1},{src:"In Good Health, Dr. [DEID] - Medical Student Intern Dr. [DEID] - Resident Fellow Dr. [DEID], MD - Department Attending",display_src:"In Good Health, Dr. [DEID] - Medical Student Intern Dr. [DEID] - Resident Fellow Dr. [DEID], MD - Department Attending",ref:"Bei guter Gesundheit, Dr. [DEID] – Medizinstudent Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Abteilungsbesuch",show_ref:!1},{src:"With Gratitude, Dr. [DEID] - Internship Trainee Dr. [DEID] - Residency Mentor Dr. [DEID], MD - Attending Physician",display_src:"With Gratitude, Dr. [DEID] - Internship Trainee Dr. [DEID] - Residency Mentor Dr. [DEID], MD - Attending Physician",ref:"Mit Dankbarkeit, Dr. [DEID] – Praktikumspraktikant Dr. [DEID] – Facharzt-Mentor Dr. [DEID], MD – Oberarzt",show_ref:!1},{src:"Be Well, Dr. [DEID] - Graduate Intern Dr. [DEID] - Clinical Resident Dr. [DEID], MD - Senior Attending",display_src:"Be Well, Dr. [DEID] - Graduate Intern Dr. [DEID] - Clinical Resident Dr. [DEID], MD - Senior Attending",ref:"Seien Sie gesund, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Leitender Oberarzt",show_ref:!1},{src:"Sincerely, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"Sincerely, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Mit freundlichen Grüßen Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Beobachtend",show_ref:!1},{src:"Warm regards, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",display_src:"Warm regards, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",ref:"Herzliche Grüße, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Oberarzt",show_ref:!1},{src:"Best wishes for your recovery, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"Best wishes for your recovery, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Die besten Wünsche für Ihre Genesung, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Beobachtend",show_ref:!1},{src:"Take care, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",display_src:"Take care, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",ref:"Passen Sie auf sich auf, Dr. [DEID] – Assistenzarzt. [DEID] – Assistenzarzt. [DEID], MD – Oberarzt",show_ref:!1},{src:"Yours in health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"Yours in health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Mit freundlichen Grüßen, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Attendant",show_ref:!1},{src:"With care, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",display_src:"With care, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",ref:"Mit Vorsicht, Dr. [DEID] – Assistenzarzt. [DEID] – Assistenzarzt",show_ref:!1},{src:"In good health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"In good health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Bei guter Gesundheit, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Attendant",show_ref:!1},{src:"Wishing you well, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",display_src:"Wishing you well, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",ref:"Ich wünsche Ihnen alles Gute, Dr. [DEID] – Assistenzarzt. [DEID] – Assistenzarzt. [DEID], MD – Oberarzt",show_ref:!1},{src:"Stay healthy, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"Stay healthy, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Bleiben Sie gesund, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Attendant",show_ref:!1},{src:"To your continued health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",display_src:"To your continued health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",ref:"Für Ihre weitere Gesundheit, Dr. [DEID] – Assistenzarzt. [DEID] – Assistenzarzt. [DEID], MD – Oberarzt",show_ref:!1},{src:"It was a pleasure taking care of you!",display_src:"It was a pleasure taking care of you!",ref:"Es war mir eine Freude, mich um Sie zu kümmern!",show_ref:!1},{src:"Thank you for allowing us to participate in your care.",display_src:"Thank you for allowing us to participate in your care.",ref:"Vielen Dank, dass Sie uns an Ihrer Betreuung teilhaben lassen.",show_ref:!1},{src:"We did a complete blood count test.",display_src:"We did a complete blood count test.",ref:"Wir haben einen kompletten Blutbildtest gemacht.",show_ref:!1},{src:"We did a chest X-ray examination.",display_src:"We did a chest X-ray examination.",ref:"Wir haben eine Röntgenuntersuchung des Brustkorbs durchgeführt.",show_ref:!1},{src:"We did an electrocardiogram (ECG) to monitor your heart.",display_src:"We did an electrocardiogram (ECG) to monitor your heart.",ref:"Wir haben ein Elektrokardiogramm (EKG) zur Überwachung Ihres Herzens erstellt.",show_ref:!1},{src:"We did a urine analysis to check for any infections.",display_src:"We did a urine analysis to check for any infections.",ref:"Wir haben eine Urinanalyse durchgeführt, um festzustellen, ob Infektionen vorliegen.",show_ref:!1},{src:"We did a blood glucose test to monitor your sugar levels.",display_src:"We did a blood glucose test to monitor your sugar levels.",ref:"Wir haben einen Blutzuckertest durchgeführt, um Ihren Zuckerspiegel zu überwachen.",show_ref:!1},{src:"We did a liver function test to assess your liver health.",display_src:"We did a liver function test to assess your liver health.",ref:"Wir haben einen Leberfunktionstest durchgeführt, um Ihre Lebergesundheit zu beurteilen.",show_ref:!1},{src:"We did a kidney function test to ensure proper renal function.",display_src:"We did a kidney function test to ensure proper renal function.",ref:"Wir haben einen Nierenfunktionstest durchgeführt, um die ordnungsgemäße Nierenfunktion sicherzustellen.",show_ref:!1},{src:"We did a thyroid function test to evaluate your thyroid hormones.",display_src:"We did a thyroid function test to evaluate your thyroid hormones.",ref:"Wir haben einen Schilddrüsenfunktionstest durchgeführt, um Ihre Schilddrüsenhormone zu bestimmen.",show_ref:!1},{src:"We did a blood pressure test to monitor for hypertension.",display_src:"We did a blood pressure test to monitor for hypertension.",ref:"Wir haben einen Blutdrucktest durchgeführt, um auf Bluthochdruck zu achten.",show_ref:!1},{src:"We did a pulmonary function test to assess your lung capacity.",display_src:"We did a pulmonary function test to assess your lung capacity.",ref:"Wir haben einen Lungenfunktionstest durchgeführt, um Ihre Lungenkapazität zu beurteilen.",show_ref:!1},{src:"The X-ray showed a minor fracture in your left arm.",display_src:"The X-ray showed a minor fracture in your left arm.",ref:"Das Röntgenbild zeigte einen kleinen Bruch in Ihrem linken Arm.",show_ref:!1},{src:"The blood test showed elevated cholesterol levels.",display_src:"The blood test showed elevated cholesterol levels.",ref:"Der Bluttest ergab erhöhte Cholesterinwerte.",show_ref:!1},{src:"The MRI scan showed signs of inflammation in your lower back.",display_src:"The MRI scan showed signs of inflammation in your lower back.",ref:"Die MRT-Untersuchung zeigte Anzeichen einer Entzündung im unteren Rückenbereich.",show_ref:!1},{src:"The EKG revealed an irregular heart rhythm.",display_src:"The EKG revealed an irregular heart rhythm.",ref:"Das EKG ergab einen unregelmäßigen Herzrhythmus.",show_ref:!1},{src:"The ultrasound showed the presence of gallstones.",display_src:"The ultrasound showed the presence of gallstones.",ref:"Der Ultraschall zeigte das Vorhandensein von Gallensteinen.",show_ref:!1},{src:"The stress test showed reduced blood flow to your heart.",display_src:"The stress test showed reduced blood flow to your heart.",ref:"Der Stresstest ergab eine verminderte Durchblutung Ihres Herzens.",show_ref:!1},{src:"The CT scan showed a small lesion in your left lung.",display_src:"The CT scan showed a small lesion in your left lung.",ref:"Der CT-Scan zeigte eine kleine Läsion in Ihrer linken Lunge.",show_ref:!1},{src:"The urinalysis showed signs of a urinary tract infection.",display_src:"The urinalysis showed signs of a urinary tract infection.",ref:"Die Urinanalyse zeigte Anzeichen einer Harnwegsinfektion.",show_ref:!1},{src:"The echocardiogram showed a weakened heart muscle.",display_src:"The echocardiogram showed a weakened heart muscle.",ref:"Das Echokardiogramm zeigte einen geschwächten Herzmuskel.",show_ref:!1},{src:"The endoscopy showed inflammation in your esophagus.",display_src:"The endoscopy showed inflammation in your esophagus.",ref:"Bei der Endoskopie wurde eine Entzündung Ihrer Speiseröhre festgestellt.",show_ref:!1},{src:"The chest X-ray did NOT show any signs of pneumonia.",display_src:"The chest X-ray did NOT show any signs of pneumonia.",ref:"Das Röntgenbild des Brustkorbs zeigte KEINE Anzeichen einer Lungenentzündung.",show_ref:!1},{src:"The blood test did NOT show elevated white blood cell count, indicating no infection.",display_src:"The blood test did NOT show elevated white blood cell count, indicating no infection.",ref:"Der Bluttest ergab KEINE erhöhte Anzahl weißer Blutkörperchen, was darauf hindeutet, dass keine Infektion vorliegt.",show_ref:!1},{src:"The CT scan did NOT show any evidence of a brain tumor.",display_src:"The CT scan did NOT show any evidence of a brain tumor.",ref:"Der CT-Scan ergab KEINE Hinweise auf einen Gehirntumor.",show_ref:!1},{src:"The EKG did NOT show any abnormal heart rhythms or irregularities.",display_src:"The EKG did NOT show any abnormal heart rhythms or irregularities.",ref:"Das EKG zeigte KEINE Herzrhythmusstörungen oder Unregelmäßigkeiten.",show_ref:!1},{src:"The ultrasound did NOT show any gallstones or inflammation in your gallbladder.",display_src:"The ultrasound did NOT show any gallstones or inflammation in your gallbladder.",ref:"Der Ultraschall zeigte KEINE Gallensteine oder Entzündungen in Ihrer Gallenblase.",show_ref:!1},{src:"The MRI did NOT show any signs of multiple sclerosis or other neurological disorders.",display_src:"The MRI did NOT show any signs of multiple sclerosis or other neurological disorders.",ref:"Das MRT zeigte KEINE Anzeichen von Multipler Sklerose oder anderen neurologischen Störungen.",show_ref:!1},{src:"The stress test did NOT show any concerning issues with your heart function during physical activity.",display_src:"The stress test did NOT show any concerning issues with your heart function during physical activity.",ref:"Der Stresstest ergab KEINE besorgniserregenden Probleme mit Ihrer Herzfunktion bei körperlicher Aktivität.",show_ref:!1},{src:"The colonoscopy did NOT show any polyps or abnormalities in your colon.",display_src:"The colonoscopy did NOT show any polyps or abnormalities in your colon.",ref:"Bei der Koloskopie wurden KEINE Polypen oder Anomalien in Ihrem Dickdarm festgestellt.",show_ref:!1},{src:"The echocardiogram did NOT show any structural heart defects or valve issues.",display_src:"The echocardiogram did NOT show any structural heart defects or valve issues.",ref:"Das Echokardiogramm zeigte KEINE strukturellen Herzfehler oder Klappenprobleme.",show_ref:!1},{src:"The urinalysis did NOT show any signs of a urinary tract infection or kidney problems.",display_src:"The urinalysis did NOT show any signs of a urinary tract infection or kidney problems.",ref:"Die Urinanalyse ergab KEINE Anzeichen einer Harnwegsinfektion oder Nierenproblemen.",show_ref:!1},{src:"The blood pressure test was normal.",display_src:"The blood pressure test was normal.",ref:"Der Blutdrucktest war normal.",show_ref:!1},{src:"The ECG (electrocardiogram) test was normal.",display_src:"The ECG (electrocardiogram) test was normal.",ref:"Der EKG-Test (Elektrokardiogramm) war normal.",show_ref:!1},{src:"The complete blood count test was normal.",display_src:"The complete blood count test was normal.",ref:"Das große Blutbild war normal.",show_ref:!1},{src:"The urinalysis test was normal.",display_src:"The urinalysis test was normal.",ref:"Der Urintest war normal.",show_ref:!1},{src:"The chest X-ray was normal.",display_src:"The chest X-ray was normal.",ref:"Das Röntgenbild der Brust war normal.",show_ref:!1},{src:"The liver function test was normal.",display_src:"The liver function test was normal.",ref:"Der Leberfunktionstest war normal.",show_ref:!1},{src:"The kidney function test was normal.",display_src:"The kidney function test was normal.",ref:"Der Nierenfunktionstest war normal.",show_ref:!1},{src:"The thyroid function test was normal.",display_src:"The thyroid function test was normal.",ref:"Der Schilddrüsenfunktionstest war normal.",show_ref:!1},{src:"The blood glucose test was normal.",display_src:"The blood glucose test was normal.",ref:"Der Blutzuckertest war normal.",show_ref:!1},{src:"The electrolyte panel test was normal.",display_src:"The electrolyte panel test was normal.",ref:"Der Elektrolyttest war normal.",show_ref:!1},{src:"All of the results are normal.",display_src:"All of the results are normal.",ref:"Alle Ergebnisse sind normal.",show_ref:!1},{src:"The results of the blood work will come back in about 24 hours.",display_src:"The results of the blood work will come back in about 24 hours.",ref:"Die Ergebnisse der Blutuntersuchung werden in etwa 24 Stunden vorliegen.",show_ref:!1},{src:"The results of the MRI scan will come back in about 48 hours.",display_src:"The results of the MRI scan will come back in about 48 hours.",ref:"Die Ergebnisse der MRT-Untersuchung liegen in etwa 48 Stunden vor.",show_ref:!1},{src:"The results of the urine test will come back in about 12 hours.",display_src:"The results of the urine test will come back in about 12 hours.",ref:"Die Ergebnisse des Urintests werden in etwa 12 Stunden vorliegen.",show_ref:!1},{src:"The results of the CT scan will come back in about 24 to 48 hours.",display_src:"The results of the CT scan will come back in about 24 to 48 hours.",ref:"Die Ergebnisse des CT-Scans werden in etwa 24 bis 48 Stunden vorliegen.",show_ref:!1},{src:"The results of the echocardiogram will come back in about 3 to 5 days.",display_src:"The results of the echocardiogram will come back in about 3 to 5 days.",ref:"Die Ergebnisse des Echokardiogramms werden in etwa 3 bis 5 Tagen vorliegen.",show_ref:!1},{src:"The results of the biopsy will come back in about 5 to 7 days.",display_src:"The results of the biopsy will come back in about 5 to 7 days.",ref:"Die Ergebnisse der Biopsie werden in etwa 5 bis 7 Tagen vorliegen.",show_ref:!1},{src:"The results of the X-ray will come back in about 24 hours.",display_src:"The results of the X-ray will come back in about 24 hours.",ref:"Die Ergebnisse der Röntgenaufnahme werden in etwa 24 Stunden vorliegen.",show_ref:!1},{src:"The results of the sleep study will come back in about 1 to 2 weeks.",display_src:"The results of the sleep study will come back in about 1 to 2 weeks.",ref:"Die Ergebnisse der Schlafstudie werden in etwa 1 bis 2 Wochen vorliegen.",show_ref:!1},{src:"The results of the allergy test will come back in about 48 hours.",display_src:"The results of the allergy test will come back in about 48 hours.",ref:"Die Ergebnisse des Allergietests liegen in etwa 48 Stunden vor.",show_ref:!1},{src:"The results of the pulmonary function test will come back in about 24 to 72 hours.",display_src:"The results of the pulmonary function test will come back in about 24 to 72 hours.",ref:"Die Ergebnisse des Lungenfunktionstests liegen nach etwa 24 bis 72 Stunden vor.",show_ref:!1},{src:"We will call you if the blood culture results are positive.",display_src:"We will call you if the blood culture results are positive.",ref:"Wir rufen Sie an, wenn die Blutkulturergebnisse positiv sind.",show_ref:!1},{src:"We will call you if the urine analysis results are positive.",display_src:"We will call you if the urine analysis results are positive.",ref:"Wir rufen Sie an, wenn die Ergebnisse der Urinanalyse positiv sind.",show_ref:!1},{src:"We will call you if the stool sample results are positive.",display_src:"We will call you if the stool sample results are positive.",ref:"Wir rufen Sie an, wenn das Ergebnis der Stuhlprobe positiv ist.",show_ref:!1},{src:"We will call you if the throat swab results are positive.",display_src:"We will call you if the throat swab results are positive.",ref:"Bei einem positiven Rachenabstrichergebnis rufen wir Sie an.",show_ref:!1},{src:"We will call you if the allergy test results are positive.",display_src:"We will call you if the allergy test results are positive.",ref:"Bei einem positiven Allergietest-Ergebnis rufen wir Sie an.",show_ref:!1},{src:"We will call you if the CT scan results are positive.",display_src:"We will call you if the CT scan results are positive.",ref:"Wir rufen Sie an, wenn die Ergebnisse der CT-Untersuchung positiv sind.",show_ref:!1},{src:"We will call you if the EKG test results are positive.",display_src:"We will call you if the EKG test results are positive.",ref:"Bei einem positiven EKG-Testergebnis rufen wir Sie an.",show_ref:!1},{src:"We will call you if the mammogram results are positive.",display_src:"We will call you if the mammogram results are positive.",ref:"Wir rufen Sie an, wenn die Ergebnisse der Mammographie positiv sind.",show_ref:!1},{src:"We will call you if the biopsy results are positive.",display_src:"We will call you if the biopsy results are positive.",ref:"Wir rufen Sie an, wenn die Biopsieergebnisse positiv sind.",show_ref:!1},{src:"We will call you if the sleep study results are positive.",display_src:"We will call you if the sleep study results are positive.",ref:"Wir rufen Sie an, wenn die Ergebnisse der Schlafstudie positiv sind.",show_ref:!1},{src:"If the blood glucose test results are positive, we may change your medication.",display_src:"If the blood glucose test results are positive, we may change your medication.",ref:"Bei einem positiven Blutzuckermessergebnis kann es sein, dass wir Ihre Medikation ändern.",show_ref:!1},{src:"If the cholesterol test results are positive, we may change your medication.",display_src:"If the cholesterol test results are positive, we may change your medication.",ref:"Wenn die Cholesterintestergebnisse positiv sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the thyroid function test results are positive, we may change your medication.",display_src:"If the thyroid function test results are positive, we may change your medication.",ref:"Wenn die Ergebnisse des Schilddrüsenfunktionstests positiv sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the liver function test results are positive, we may change your medication.",display_src:"If the liver function test results are positive, we may change your medication.",ref:"Bei einem positiven Leberfunktionstest kann es sein, dass wir Ihre Medikation ändern.",show_ref:!1},{src:"If the kidney function test results are positive, we may change your medication.",display_src:"If the kidney function test results are positive, we may change your medication.",ref:"Wenn die Ergebnisse des Nierenfunktionstests positiv sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the infection marker test results are positive, we may change your medication.",display_src:"If the infection marker test results are positive, we may change your medication.",ref:"Wenn die Ergebnisse des Infektionsmarker-Tests positiv sind, können wir Ihre Medikamente ändern.",show_ref:!1},{src:"If the blood clotting test results are positive, we may change your medication.",display_src:"If the blood clotting test results are positive, we may change your medication.",ref:"Wenn die Blutgerinnungstestergebnisse positiv sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the electrolyte imbalance test results are positive, we may change your medication.",display_src:"If the electrolyte imbalance test results are positive, we may change your medication.",ref:"Wenn die Ergebnisse des Elektrolytungleichgewichtstests positiv sind, können wir Ihre Medikamente ändern.",show_ref:!1},{src:"If the cardiac enzyme test results are positive, we may change your medication.",display_src:"If the cardiac enzyme test results are positive, we may change your medication.",ref:"Wenn die Ergebnisse des Herzenzymtests positiv sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the autoimmune disease test results are positive, we may change your medication.",display_src:"If the autoimmune disease test results are positive, we may change your medication.",ref:"Wenn die Testergebnisse für eine Autoimmunerkrankung positiv sind, können wir Ihre Medikamente ändern.",show_ref:!1},{src:"If the blood glucose test results are negative, we may change your medication.",display_src:"If the blood glucose test results are negative, we may change your medication.",ref:"Bei einem negativen Blutzuckermessergebnis kann es sein, dass wir Ihre Medikation ändern.",show_ref:!1},{src:"If the cholesterol test results are negative, we may change your medication.",display_src:"If the cholesterol test results are negative, we may change your medication.",ref:"Wenn die Cholesterintestergebnisse negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the liver function test results are negative, we may change your medication.",display_src:"If the liver function test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse der Leberfunktionstests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the kidney function test results are negative, we may change your medication.",display_src:"If the kidney function test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse des Nierenfunktionstests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the thyroid function test results are negative, we may change your medication.",display_src:"If the thyroid function test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse des Schilddrüsenfunktionstests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the complete blood count test results are negative, we may change your medication.",display_src:"If the complete blood count test results are negative, we may change your medication.",ref:"Wenn das Ergebnis des großen Blutbildes negativ ist, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the electrolyte panel test results are negative, we may change your medication.",display_src:"If the electrolyte panel test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse des Elektrolyttests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the coagulation profile test results are negative, we may change your medication.",display_src:"If the coagulation profile test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse des Gerinnungsprofiltests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the inflammatory markers test results are negative, we may change your medication.",display_src:"If the inflammatory markers test results are negative, we may change your medication.",ref:"Wenn die Testergebnisse auf Entzündungsmarker negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the cardiac enzyme test results are negative, we may change your medication.",display_src:"If the cardiac enzyme test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse des Herzenzymtests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"A Complete Blood Count (CBC) test will show whether you have anemia or any blood-related disorders.",display_src:"A Complete Blood Count (CBC) test will show whether you have anemia or any blood-related disorders.",ref:"Ein vollständiges Blutbild (CBC) zeigt, ob Sie an Anämie oder anderen blutbedingten Erkrankungen leiden.",show_ref:!1},{src:"A Thyroid Function Test will show whether you have hyperthyroidism or hypothyroidism.",display_src:"A Thyroid Function Test will show whether you have hyperthyroidism or hypothyroidism.",ref:"Ein Schilddrüsenfunktionstest zeigt, ob Sie an einer Hyperthyreose oder Hypothyreose leiden.",show_ref:!1},{src:"A Hemoglobin A1C test will show whether you have diabetes or issues with your blood sugar levels.",display_src:"A Hemoglobin A1C test will show whether you have diabetes or issues with your blood sugar levels.",ref:"Ein Hämoglobin-A1C-Test zeigt, ob Sie Diabetes haben oder Probleme mit Ihrem Blutzuckerspiegel haben.",show_ref:!1},{src:"A Liver Function Test will show whether you have liver damage or disease.",display_src:"A Liver Function Test will show whether you have liver damage or disease.",ref:"Ein Leberfunktionstest zeigt, ob Sie einen Leberschaden oder eine Lebererkrankung haben.",show_ref:!1},{src:"A Urinalysis will show whether you have a urinary tract infection or kidney problems.",display_src:"A Urinalysis will show whether you have a urinary tract infection or kidney problems.",ref:"Eine Urinanalyse zeigt, ob bei Ihnen eine Harnwegsinfektion oder Nierenprobleme vorliegen.",show_ref:!1},{src:"A Chest X-ray will show whether you have pneumonia or other lung conditions.",display_src:"A Chest X-ray will show whether you have pneumonia or other lung conditions.",ref:"Eine Röntgenaufnahme des Brustkorbs zeigt, ob Sie an einer Lungenentzündung oder anderen Lungenerkrankungen leiden.",show_ref:!1},{src:"An Electrocardiogram (ECG) will show whether you have any heart-related issues or abnormal rhythms.",display_src:"An Electrocardiogram (ECG) will show whether you have any heart-related issues or abnormal rhythms.",ref:"Ein Elektrokardiogramm (EKG) zeigt, ob bei Ihnen Herzprobleme oder Herzrhythmusstörungen vorliegen.",show_ref:!1},{src:"A Blood Pressure Test will show whether you have hypertension or issues with your blood pressure.",display_src:"A Blood Pressure Test will show whether you have hypertension or issues with your blood pressure.",ref:"Ein Blutdrucktest zeigt, ob Sie an Bluthochdruck leiden oder Probleme mit Ihrem Blutdruck haben.",show_ref:!1},{src:"A Fecal Occult Blood Test will show whether you have gastrointestinal bleeding or colon cancer.",display_src:"A Fecal Occult Blood Test will show whether you have gastrointestinal bleeding or colon cancer.",ref:"Ein Test auf okkultes Blut im Stuhl zeigt, ob Sie Magen-Darm-Blutungen oder Darmkrebs haben.",show_ref:!1},{src:"A Bone Density Test will show whether you have osteoporosis or other bone-related issues.",display_src:"A Bone Density Test will show whether you have osteoporosis or other bone-related issues.",ref:"Ein Knochendichtetest zeigt, ob Sie an Osteoporose oder anderen Knochenproblemen leiden.",show_ref:!1},{src:"We did a complete blood count (CBC) test to check for anemia and potential infections.",display_src:"We did a complete blood count (CBC) test to check for anemia and potential infections.",ref:"Wir haben ein komplettes Blutbild (CBC) durchgeführt, um auf Anämie und mögliche Infektionen zu prüfen.",show_ref:!1},{src:"We performed an electrocardiogram (ECG) to check for irregular heart rhythms or potential heart problems.",display_src:"We performed an electrocardiogram (ECG) to check for irregular heart rhythms or potential heart problems.",ref:"Wir haben ein Elektrokardiogramm (EKG) durchgeführt, um Herzrhythmusstörungen oder mögliche Herzprobleme festzustellen.",show_ref:!1},{src:"We conducted a chest X-ray to check for pneumonia, lung cancer, and other respiratory conditions.",display_src:"We conducted a chest X-ray to check for pneumonia, lung cancer, and other respiratory conditions.",ref:"Wir führten eine Röntgenaufnahme des Brustkorbs durch, um nach Lungenentzündung, Lungenkrebs und anderen Atemwegserkrankungen zu suchen.",show_ref:!1},{src:"We carried out a urinalysis to check for urinary tract infections, kidney diseases, and diabetes.",display_src:"We carried out a urinalysis to check for urinary tract infections, kidney diseases, and diabetes.",ref:"Wir führten eine Urinanalyse durch, um festzustellen, ob Harnwegsinfektionen, Nierenerkrankungen und Diabetes vorliegen.",show_ref:!1},{src:"We performed a thyroid function test to check for hypo or hyperthyroidism and other thyroid-related disorders.",display_src:"We performed a thyroid function test to check for hypo or hyperthyroidism and other thyroid-related disorders.",ref:"Wir führten einen Schilddrüsenfunktionstest durch, um zu prüfen, ob eine Schilddrüsenunterfunktion oder eine Schilddrüsenüberfunktion sowie andere Schilddrüsenerkrankungen vorliegen.",show_ref:!1},{src:"We executed a colonoscopy to check for colon cancer, polyps, and other gastrointestinal issues.",display_src:"We executed a colonoscopy to check for colon cancer, polyps, and other gastrointestinal issues.",ref:"Wir führten eine Darmspiegelung durch, um nach Darmkrebs, Polypen und anderen Magen-Darm-Problemen zu suchen.",show_ref:!1},{src:"We conducted a blood glucose test to check for diabetes or abnormal blood sugar levels.",display_src:"We conducted a blood glucose test to check for diabetes or abnormal blood sugar levels.",ref:"Wir haben einen Blutzuckertest durchgeführt, um festzustellen, ob Diabetes oder abnormale Blutzuckerwerte vorliegen.",show_ref:!1},{src:"We performed a mammogram to check for breast cancer and other breast-related conditions.",display_src:"We performed a mammogram to check for breast cancer and other breast-related conditions.",ref:"Wir haben eine Mammographie durchgeführt, um festzustellen, ob Brustkrebs und andere brustbedingte Erkrankungen vorliegen.",show_ref:!1},{src:"We carried out a liver function test to check for hepatitis, cirrhosis, and other liver disorders.",display_src:"We carried out a liver function test to check for hepatitis, cirrhosis, and other liver disorders.",ref:"Wir führten einen Leberfunktionstest durch, um festzustellen, ob Hepatitis, Leberzirrhose und andere Lebererkrankungen vorliegen.",show_ref:!1},{src:"We conducted a CT scan to check for tumors, blood clots, and other abnormalities inside the body.",display_src:"We conducted a CT scan to check for tumors, blood clots, and other abnormalities inside the body.",ref:"Wir haben einen CT-Scan durchgeführt, um nach Tumoren, Blutgerinnseln und anderen Anomalien im Körper zu suchen.",show_ref:!1},{src:"There is no need for further blood tests at this time.",display_src:"There is no need for further blood tests at this time.",ref:"Weitere Blutuntersuchungen sind derzeit nicht erforderlich.",show_ref:!1},{src:"There is no need for additional X-rays at this time.",display_src:"There is no need for additional X-rays at this time.",ref:"Derzeit sind keine zusätzlichen Röntgenaufnahmen erforderlich.",show_ref:!1},{src:"There is no need for follow-up CT scans at this time.",display_src:"There is no need for follow-up CT scans at this time.",ref:"Derzeit sind keine weiteren CT-Scans erforderlich.",show_ref:!1},{src:"There is no need for physical therapy sessions at this time.",display_src:"There is no need for physical therapy sessions at this time.",ref:"Derzeit besteht keine Notwendigkeit für Physiotherapiesitzungen.",show_ref:!1},{src:"There is no need for a dietary consultation at this time.",display_src:"There is no need for a dietary consultation at this time.",ref:"Eine Ernährungsberatung ist derzeit nicht erforderlich.",show_ref:!1},{src:"There is no need for cardiac stress testing at this time.",display_src:"There is no need for cardiac stress testing at this time.",ref:"Derzeit ist kein Herzbelastungstest erforderlich.",show_ref:!1},{src:"There is no need for sleep apnea evaluation at this time.",display_src:"There is no need for sleep apnea evaluation at this time.",ref:"Eine Schlafapnoe-Untersuchung ist derzeit nicht erforderlich.",show_ref:!1},{src:"There is no need for a mental health assessment at this time.",display_src:"There is no need for a mental health assessment at this time.",ref:"Eine Beurteilung der psychischen Gesundheit ist derzeit nicht erforderlich.",show_ref:!1},{src:"There is no need for an MRI scan at this time.",display_src:"There is no need for an MRI scan at this time.",ref:"Eine MRT-Untersuchung ist derzeit nicht erforderlich.",show_ref:!1},{src:"There is no need for an echocardiogram at this time.",display_src:"There is no need for an echocardiogram at this time.",ref:"Derzeit ist kein Echokardiogramm erforderlich.",show_ref:!1},{src:"You have received your first dose of Ceftriaxone in the hospital.",display_src:"You have received your first dose of Ceftriaxone in the hospital.",ref:"Sie haben Ihre erste Dosis Ceftriaxon im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Metoprolol in the hospital.",display_src:"You have received your first dose of Metoprolol in the hospital.",ref:"Sie haben Ihre erste Dosis Metoprolol im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Warfarin in the hospital.",display_src:"You have received your first dose of Warfarin in the hospital.",ref:"Sie haben Ihre erste Dosis Warfarin im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Furosemide in the hospital.",display_src:"You have received your first dose of Furosemide in the hospital.",ref:"Sie haben Ihre erste Dosis Furosemid im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Digoxin in the hospital.",display_src:"You have received your first dose of Digoxin in the hospital.",ref:"Sie haben Ihre erste Dosis Digoxin im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Prednisone in the hospital.",display_src:"You have received your first dose of Prednisone in the hospital.",ref:"Sie haben Ihre erste Dosis Prednison im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Lisinopril in the hospital.",display_src:"You have received your first dose of Lisinopril in the hospital.",ref:"Sie haben Ihre erste Dosis Lisinopril im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Heparin in the hospital.",display_src:"You have received your first dose of Heparin in the hospital.",ref:"Sie haben Ihre erste Dosis Heparin im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Pantoprazole in the hospital.",display_src:"You have received your first dose of Pantoprazole in the hospital.",ref:"Sie haben Ihre erste Dosis Pantoprazol im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Amoxicillin in the hospital.",display_src:"You have received your first dose of Amoxicillin in the hospital.",ref:"Sie haben Ihre erste Dosis Amoxicillin im Krankenhaus erhalten.",show_ref:!1},{src:"You were continued on all your home medications while you were in the hospital.",display_src:"You were continued on all your home medications while you were in the hospital.",ref:"Während Sie im Krankenhaus waren, haben Sie weiterhin alle Ihre Hausmedikamente eingenommen.",show_ref:!1},{src:"We put gauze on top of the sutures once we had finished.",display_src:"We put gauze on top of the sutures once we had finished.",ref:"Sobald wir fertig waren, legten wir Gaze auf die Nähte.",show_ref:!1},{src:"We dressed your wound.",display_src:"We dressed your wound.",ref:"Wir haben Ihre Wunde versorgt.",show_ref:!1},{src:"This treatment will help with your chronic pain management.",display_src:"This treatment will help with your chronic pain management.",ref:"Diese Behandlung wird Ihnen bei der Behandlung chronischer Schmerzen helfen.",show_ref:!1},{src:"This treatment will help with your shortness of breath.",display_src:"This treatment will help with your shortness of breath.",ref:"Diese Behandlung hilft bei Ihrer Atemnot.",show_ref:!1},{src:"This treatment will help with your high blood pressure.",display_src:"This treatment will help with your high blood pressure.",ref:"Diese Behandlung hilft bei Ihrem Bluthochdruck.",show_ref:!1},{src:"This treatment will help with your persistent headaches.",display_src:"This treatment will help with your persistent headaches.",ref:"Diese Behandlung hilft bei Ihren anhaltenden Kopfschmerzen.",show_ref:!1},{src:"This treatment will help with your swollen joints.",display_src:"This treatment will help with your swollen joints.",ref:"Diese Behandlung hilft bei Ihren geschwollenen Gelenken.",show_ref:!1},{src:"This treatment will help with your insomnia.",display_src:"This treatment will help with your insomnia.",ref:"Diese Behandlung hilft bei Ihrer Schlaflosigkeit.",show_ref:!1},{src:"This treatment will help with your persistent fatigue.",display_src:"This treatment will help with your persistent fatigue.",ref:"Diese Behandlung hilft bei Ihrer anhaltenden Müdigkeit.",show_ref:!1},{src:"This treatment will help with your digestive issues.",display_src:"This treatment will help with your digestive issues.",ref:"Diese Behandlung hilft bei Ihren Verdauungsproblemen.",show_ref:!1},{src:"This treatment will help with your rapid heart rate.",display_src:"This treatment will help with your rapid heart rate.",ref:"Diese Behandlung hilft bei Ihrer schnellen Herzfrequenz.",show_ref:!1},{src:"This treatment will help with your anxiety and stress.",display_src:"This treatment will help with your anxiety and stress.",ref:"Diese Behandlung hilft bei Ihrer Angst und Ihrem Stress.",show_ref:!1},{src:"This treatment will help prevent shortness of breath.",display_src:"This treatment will help prevent shortness of breath.",ref:"Diese Behandlung hilft, Kurzatmigkeit vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent chest pain.",display_src:"This treatment will help prevent chest pain.",ref:"Diese Behandlung hilft, Brustschmerzen vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent dizziness.",display_src:"This treatment will help prevent dizziness.",ref:"Diese Behandlung hilft, Schwindel vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent swelling in the legs and ankles.",display_src:"This treatment will help prevent swelling in the legs and ankles.",ref:"Diese Behandlung hilft, Schwellungen an Beinen und Knöcheln vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent persistent coughing.",display_src:"This treatment will help prevent persistent coughing.",ref:"Diese Behandlung hilft, anhaltendem Husten vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent high blood pressure.",display_src:"This treatment will help prevent high blood pressure.",ref:"Diese Behandlung hilft, Bluthochdruck vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent fatigue.",display_src:"This treatment will help prevent fatigue.",ref:"Diese Behandlung hilft, Müdigkeit vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent nausea and vomiting.",display_src:"This treatment will help prevent nausea and vomiting.",ref:"Diese Behandlung hilft, Übelkeit und Erbrechen vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent frequent headaches.",display_src:"This treatment will help prevent frequent headaches.",ref:"Diese Behandlung hilft, häufigen Kopfschmerzen vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent joint pain and stiffness.",display_src:"This treatment will help prevent joint pain and stiffness.",ref:"Diese Behandlung hilft, Gelenkschmerzen und Steifheit vorzubeugen.",show_ref:!1},{src:"In the hospital, we gave you ibuprofen for your pain and inflammation.",display_src:"In the hospital, we gave you ibuprofen for your pain and inflammation.",ref:"Im Krankenhaus haben wir Ihnen Ibuprofen gegen Ihre Schmerzen und Entzündungen gegeben.",show_ref:!1},{src:"In the hospital, we gave you metformin for managing your high blood sugar levels.",display_src:"In the hospital, we gave you metformin for managing your high blood sugar levels.",ref:"Im Krankenhaus haben wir Ihnen Metformin zur Behandlung Ihres hohen Blutzuckerspiegels verabreicht.",show_ref:!1},{src:"In the hospital, we gave you furosemide for reducing fluid build-up due to congestive heart failure.",display_src:"In the hospital, we gave you furosemide for reducing fluid build-up due to congestive heart failure.",ref:"Im Krankenhaus haben wir Ihnen Furosemid verabreicht, um die Flüssigkeitsansammlung aufgrund einer Herzinsuffizienz zu reduzieren.",show_ref:!1},{src:"In the hospital, we gave you albuterol for relieving your asthma symptoms.",display_src:"In the hospital, we gave you albuterol for relieving your asthma symptoms.",ref:"Im Krankenhaus haben wir Ihnen Albuterol zur Linderung Ihrer Asthmasymptome verabreicht.",show_ref:!1},{src:"In the hospital, we gave you ondansetron for preventing nausea and vomiting after surgery.",display_src:"In the hospital, we gave you ondansetron for preventing nausea and vomiting after surgery.",ref:"Im Krankenhaus haben wir Ihnen Ondansetron gegeben, um Übelkeit und Erbrechen nach einer Operation vorzubeugen.",show_ref:!1},{src:"In the hospital, we gave you lisinopril for treating your high blood pressure.",display_src:"In the hospital, we gave you lisinopril for treating your high blood pressure.",ref:"Im Krankenhaus haben wir Ihnen Lisinopril zur Behandlung Ihres Bluthochdrucks verabreicht.",show_ref:!1},{src:"In the hospital, we gave you omeprazole for reducing stomach acid and treating your gastroesophageal reflux disease (GERD).",display_src:"In the hospital, we gave you omeprazole for reducing stomach acid and treating your gastroesophageal reflux disease (GERD).",ref:"Im Krankenhaus haben wir Ihnen Omeprazol zur Reduzierung der Magensäure und zur Behandlung Ihrer gastroösophagealen Refluxkrankheit (GERD) verabreicht.",show_ref:!1},{src:"In the hospital, we gave you amoxicillin for treating your bacterial infection.",display_src:"In the hospital, we gave you amoxicillin for treating your bacterial infection.",ref:"Im Krankenhaus haben wir Ihnen Amoxicillin zur Behandlung Ihrer bakteriellen Infektion verabreicht.",show_ref:!1},{src:"In the hospital, we gave you atorvastatin for lowering your cholesterol levels and reducing the risk of heart disease.",display_src:"In the hospital, we gave you atorvastatin for lowering your cholesterol levels and reducing the risk of heart disease.",ref:"Im Krankenhaus haben wir Ihnen Atorvastatin verabreicht, um Ihren Cholesterinspiegel zu senken und das Risiko einer Herzerkrankung zu verringern.",show_ref:!1},{src:"In the hospital, we gave you gabapentin for managing your nerve pain and controlling seizures.",display_src:"In the hospital, we gave you gabapentin for managing your nerve pain and controlling seizures.",ref:"Im Krankenhaus haben wir Ihnen Gabapentin gegeben, um Ihre Nervenschmerzen zu lindern und Anfälle zu kontrollieren.",show_ref:!1},{src:"In the hospital, we gave you intravenous fluids for dehydration.",display_src:"In the hospital, we gave you intravenous fluids for dehydration.",ref:"Im Krankenhaus haben wir Ihnen intravenöse Flüssigkeiten zur Dehydrierung verabreicht.",show_ref:!1},{src:"In the hospital, we gave you a blood transfusion for anemia.",display_src:"In the hospital, we gave you a blood transfusion for anemia.",ref:"Im Krankenhaus haben wir Ihnen eine Bluttransfusion gegen Anämie gegeben.",show_ref:!1},{src:"In the hospital, we gave you an antibiotic treatment for your bacterial infection.",display_src:"In the hospital, we gave you an antibiotic treatment for your bacterial infection.",ref:"Im Krankenhaus haben wir Ihnen eine Antibiotikabehandlung gegen Ihre bakterielle Infektion verabreicht.",show_ref:!1},{src:"In the hospital, we gave you a bronchodilator for your asthma symptoms.",display_src:"In the hospital, we gave you a bronchodilator for your asthma symptoms.",ref:"Im Krankenhaus haben wir Ihnen einen Bronchodilatator gegen Ihre Asthmasymptome verabreicht.",show_ref:!1},{src:"In the hospital, we gave you pain medication for your post-surgical discomfort.",display_src:"In the hospital, we gave you pain medication for your post-surgical discomfort.",ref:"Im Krankenhaus haben wir Ihnen Schmerzmittel gegen Ihre postoperativen Beschwerden gegeben.",show_ref:!1},{src:"In the hospital, we gave you insulin therapy for your high blood sugar levels.",display_src:"In the hospital, we gave you insulin therapy for your high blood sugar levels.",ref:"Im Krankenhaus haben wir Ihnen eine Insulintherapie gegen Ihren hohen Blutzuckerspiegel verabreicht.",show_ref:!1},{src:"In the hospital, we gave you antiemetic medication for your nausea and vomiting.",display_src:"In the hospital, we gave you antiemetic medication for your nausea and vomiting.",ref:"Im Krankenhaus haben wir Ihnen antiemetische Medikamente gegen Übelkeit und Erbrechen gegeben.",show_ref:!1},{src:"In the hospital, we gave you a corticosteroid for your inflammation and swelling.",display_src:"In the hospital, we gave you a corticosteroid for your inflammation and swelling.",ref:"Im Krankenhaus haben wir Ihnen ein Kortikosteroid gegen Ihre Entzündung und Schwellung gegeben.",show_ref:!1},{src:"In the hospital, we gave you anticoagulant medication for preventing blood clots.",display_src:"In the hospital, we gave you anticoagulant medication for preventing blood clots.",ref:"Im Krankenhaus haben wir Ihnen gerinnungshemmende Medikamente zur Vorbeugung von Blutgerinnseln gegeben.",show_ref:!1},{src:"In the hospital, we gave you oxygen therapy for your difficulty in breathing.",display_src:"In the hospital, we gave you oxygen therapy for your difficulty in breathing.",ref:"Im Krankenhaus haben wir Ihnen eine Sauerstofftherapie gegen Ihre Atembeschwerden verabreicht.",show_ref:!1},{src:"Your chest pain improved with Nitroglycerin.",display_src:"Your chest pain improved with Nitroglycerin.",ref:"Mit Nitroglycerin besserten sich Ihre Brustschmerzen.",show_ref:!1},{src:"Your shortness of breath improved with Albuterol.",display_src:"Your shortness of breath improved with Albuterol.",ref:"Mit Albuterol besserte sich Ihre Atemnot.",show_ref:!1},{src:"Your headache improved with Acetaminophen.",display_src:"Your headache improved with Acetaminophen.",ref:"Mit Acetaminophen besserten sich Ihre Kopfschmerzen.",show_ref:!1},{src:"Your nausea improved with Ondansetron.",display_src:"Your nausea improved with Ondansetron.",ref:"Mit Ondansetron besserte sich Ihre Übelkeit.",show_ref:!1},{src:"Your high blood pressure improved with Lisinopril.",display_src:"Your high blood pressure improved with Lisinopril.",ref:"Mit Lisinopril hat sich Ihr Bluthochdruck verbessert.",show_ref:!1},{src:"Your anxiety improved with Lorazepam.",display_src:"Your anxiety improved with Lorazepam.",ref:"Mit Lorazepam besserten sich Ihre Angstzustände.",show_ref:!1},{src:"Your back pain improved with Ibuprofen.",display_src:"Your back pain improved with Ibuprofen.",ref:"Mit Ibuprofen besserten sich Ihre Rückenschmerzen.",show_ref:!1},{src:"Your insomnia improved with Zolpidem.",display_src:"Your insomnia improved with Zolpidem.",ref:"Ihre Schlaflosigkeit hat sich mit Zolpidem verbessert.",show_ref:!1},{src:"Your cough improved with Dextromethorphan.",display_src:"Your cough improved with Dextromethorphan.",ref:"Mit Dextromethorphan besserte sich Ihr Husten.",show_ref:!1},{src:"Your heartburn improved with Omeprazole.",display_src:"Your heartburn improved with Omeprazole.",ref:"Mit Omeprazol besserte sich Ihr Sodbrennen.",show_ref:!1},{src:"Your persistent cough has not improved.",display_src:"Your persistent cough has not improved.",ref:"Ihr anhaltender Husten hat sich nicht verbessert.",show_ref:!1},{src:"Your severe headache has not improved.",display_src:"Your severe headache has not improved.",ref:"Ihre starken Kopfschmerzen haben sich nicht verbessert.",show_ref:!1},{src:"Your high fever has not improved.",display_src:"Your high fever has not improved.",ref:"Ihr hohes Fieber hat sich nicht gebessert.",show_ref:!1},{src:"Your shortness of breath has not improved.",display_src:"Your shortness of breath has not improved.",ref:"Ihre Atemnot hat sich nicht verbessert.",show_ref:!1},{src:"Your abdominal pain has not improved.",display_src:"Your abdominal pain has not improved.",ref:"Ihre Bauchschmerzen haben sich nicht verbessert.",show_ref:!1},{src:"Your chest pain has not improved.",display_src:"Your chest pain has not improved.",ref:"Ihre Brustschmerzen haben sich nicht verbessert.",show_ref:!1},{src:"Your dizziness has not improved.",display_src:"Your dizziness has not improved.",ref:"Ihr Schwindelgefühl hat sich nicht verbessert.",show_ref:!1},{src:"Your swollen joints have not improved.",display_src:"Your swollen joints have not improved.",ref:"Ihre geschwollenen Gelenke haben sich nicht verbessert.",show_ref:!1},{src:"Your constant fatigue has not improved.",display_src:"Your constant fatigue has not improved.",ref:"Ihre ständige Müdigkeit hat sich nicht verbessert.",show_ref:!1},{src:"Your rapid weight loss has not improved.",display_src:"Your rapid weight loss has not improved.",ref:"Ihr schneller Gewichtsverlust hat sich nicht verbessert.",show_ref:!1},{src:"We gave you Lisinopril to increase your blood pressure stability.",display_src:"We gave you Lisinopril to increase your blood pressure stability.",ref:"Wir haben Ihnen Lisinopril gegeben, um Ihre Blutdruckstabilität zu erhöhen.",show_ref:!1},{src:"We gave you Metformin to increase your blood sugar control.",display_src:"We gave you Metformin to increase your blood sugar control.",ref:"Wir haben Ihnen Metformin gegeben, um Ihre Blutzuckerkontrolle zu verbessern.",show_ref:!1},{src:"We gave you Albuterol to increase your lung function and reduce asthma symptoms.",display_src:"We gave you Albuterol to increase your lung function and reduce asthma symptoms.",ref:"Wir haben Ihnen Albuterol gegeben, um Ihre Lungenfunktion zu verbessern und Asthmasymptome zu lindern.",show_ref:!1},{src:"We gave you Furosemide to increase your urine output and decrease fluid retention.",display_src:"We gave you Furosemide to increase your urine output and decrease fluid retention.",ref:"Wir haben Ihnen Furosemid gegeben, um Ihre Urinausscheidung zu steigern und die Flüssigkeitsansammlung zu verringern.",show_ref:!1},{src:"We gave you Omeprazole to increase your stomach acid regulation and reduce heartburn.",display_src:"We gave you Omeprazole to increase your stomach acid regulation and reduce heartburn.",ref:"Wir haben Ihnen Omeprazol gegeben, um die Regulierung Ihrer Magensäure zu verbessern und Sodbrennen zu reduzieren.",show_ref:!1},{src:"We gave you Sertraline to increase your mood stability and reduce depression symptoms.",display_src:"We gave you Sertraline to increase your mood stability and reduce depression symptoms.",ref:"Wir haben Ihnen Sertralin gegeben, um Ihre Stimmungsstabilität zu erhöhen und Depressionssymptome zu reduzieren.",show_ref:!1},{src:"We gave you Amlodipine to increase your blood pressure management and reduce hypertension.",display_src:"We gave you Amlodipine to increase your blood pressure management and reduce hypertension.",ref:"Wir haben Ihnen Amlodipin gegeben, um Ihre Blutdruckkontrolle zu verbessern und Bluthochdruck zu senken.",show_ref:!1},{src:"We gave you Warfarin to increase your blood clot prevention and reduce the risk of stroke.",display_src:"We gave you Warfarin to increase your blood clot prevention and reduce the risk of stroke.",ref:"Wir haben Ihnen Warfarin gegeben, um die Vorbeugung von Blutgerinnseln zu verbessern und das Schlaganfallrisiko zu verringern.",show_ref:!1},{src:"We gave you Gabapentin to increase your nerve pain relief and reduce neuropathy symptoms.",display_src:"We gave you Gabapentin to increase your nerve pain relief and reduce neuropathy symptoms.",ref:"Wir haben Ihnen Gabapentin gegeben, um die Linderung Ihrer Nervenschmerzen zu verstärken und die Symptome einer Neuropathie zu lindern.",show_ref:!1},{src:"We gave you Levothyroxine to increase your thyroid hormone levels and improve hypothyroidism.",display_src:"We gave you Levothyroxine to increase your thyroid hormone levels and improve hypothyroidism.",ref:"Wir haben Ihnen Levothyroxin gegeben, um Ihren Schilddrüsenhormonspiegel zu erhöhen und die Hypothyreose zu verbessern.",show_ref:!1},{src:"We gave you Ibuprofen to decrease your fever and inflammation.",display_src:"We gave you Ibuprofen to decrease your fever and inflammation.",ref:"Wir haben Ihnen Ibuprofen gegeben, um Ihr Fieber und Ihre Entzündung zu lindern.",show_ref:!1},{src:"We gave you Metoprolol to decrease your high blood pressure.",display_src:"We gave you Metoprolol to decrease your high blood pressure.",ref:"Wir haben Ihnen Metoprolol gegeben, um Ihren hohen Blutdruck zu senken.",show_ref:!1},{src:"We gave you Omeprazole to decrease your acid reflux symptoms.",display_src:"We gave you Omeprazole to decrease your acid reflux symptoms.",ref:"Wir haben Ihnen Omeprazol gegeben, um Ihre Sodbrennen-Symptome zu lindern.",show_ref:!1},{src:"We gave you Furosemide to decrease your fluid retention and swelling.",display_src:"We gave you Furosemide to decrease your fluid retention and swelling.",ref:"Wir haben Ihnen Furosemid gegeben, um Ihre Flüssigkeitsansammlung und Schwellung zu verringern.",show_ref:!1},{src:"We gave you Gabapentin to decrease your nerve pain.",display_src:"We gave you Gabapentin to decrease your nerve pain.",ref:"Wir haben Ihnen Gabapentin gegeben, um Ihre Nervenschmerzen zu lindern.",show_ref:!1},{src:"We gave you Prednisone to decrease your allergic reaction and inflammation.",display_src:"We gave you Prednisone to decrease your allergic reaction and inflammation.",ref:"Wir haben Ihnen Prednison gegeben, um Ihre allergische Reaktion und Entzündung zu lindern.",show_ref:!1},{src:"We gave you Amoxicillin to decrease your bacterial infection symptoms.",display_src:"We gave you Amoxicillin to decrease your bacterial infection symptoms.",ref:"Wir haben Ihnen Amoxicillin gegeben, um die Symptome Ihrer bakteriellen Infektion zu lindern.",show_ref:!1},{src:"We gave you Sertraline to decrease your depression and anxiety symptoms.",display_src:"We gave you Sertraline to decrease your depression and anxiety symptoms.",ref:"Wir haben Ihnen Sertralin gegeben, um Ihre Depressions- und Angstsymptome zu lindern.",show_ref:!1},{src:"We gave you Insulin to decrease your high blood sugar levels.",display_src:"We gave you Insulin to decrease your high blood sugar levels.",ref:"Wir haben Ihnen Insulin gegeben, um Ihren hohen Blutzuckerspiegel zu senken.",show_ref:!1},{src:"We gave you Tamsulosin to decrease your urinary symptoms related to an enlarged prostate.",display_src:"We gave you Tamsulosin to decrease your urinary symptoms related to an enlarged prostate.",ref:"Wir haben Ihnen Tamsulosin gegeben, um Ihre Harnbeschwerden im Zusammenhang mit einer vergrößerten Prostata zu lindern.",show_ref:!1},{src:"We have placed an order for daily physical therapy sessions to improve your mobility.",display_src:"We have placed an order for daily physical therapy sessions to improve your mobility.",ref:"Wir haben einen Auftrag für tägliche Physiotherapie-Sitzungen zur Verbesserung Ihrer Mobilität erteilt.",show_ref:!1},{src:"We have placed an order for a prescription of blood pressure medication to help you maintain a healthy blood pressure level.",display_src:"We have placed an order for a prescription of blood pressure medication to help you maintain a healthy blood pressure level.",ref:"Wir haben ein Rezept für ein Blutdruckmedikament bestellt, das Ihnen dabei helfen soll, einen gesunden Blutdruck aufrechtzuerhalten.",show_ref:!1},{src:"We have placed an order for a continuous positive airway pressure (CPAP) machine to assist with your sleep apnea.",display_src:"We have placed an order for a continuous positive airway pressure (CPAP) machine to assist with your sleep apnea.",ref:"Wir haben ein CPAP-Gerät (Continuous Positive Airway Pressure) zur Behandlung Ihrer Schlafapnoe bestellt.",show_ref:!1},{src:"We have placed an order for a customized diabetic meal plan to help manage your blood sugar levels.",display_src:"We have placed an order for a customized diabetic meal plan to help manage your blood sugar levels.",ref:"Wir haben einen maßgeschneiderten Ernährungsplan für Diabetiker bestellt, der Sie bei der Kontrolle Ihres Blutzuckerspiegels unterstützen soll.",show_ref:!1},{src:"We have placed an order for a series of counseling sessions to support your mental health and well-being.",display_src:"We have placed an order for a series of counseling sessions to support your mental health and well-being.",ref:"Wir haben eine Reihe von Beratungsgesprächen zur Unterstützung Ihrer psychischen Gesundheit und Ihres Wohlbefindens in Auftrag gegeben.",show_ref:!1},{src:"We have placed an order for a home health care nurse to assist with your post-operative wound care and medication management.",display_src:"We have placed an order for a home health care nurse to assist with your post-operative wound care and medication management.",ref:"Wir haben einen Auftrag für eine häusliche Krankenpflegerin erteilt, die Sie bei der postoperativen Wundversorgung und dem Medikamentenmanagement unterstützt.",show_ref:!1},{src:"We have placed an order for a comprehensive cardiac rehabilitation program to help you recover from your heart surgery.",display_src:"We have placed an order for a comprehensive cardiac rehabilitation program to help you recover from your heart surgery.",ref:"Wir haben einen Auftrag für ein umfassendes Herzrehabilitationsprogramm erteilt, um Sie bei der Genesung nach Ihrer Herzoperation zu unterstützen.",show_ref:!1},{src:"We have placed an order for a personalized exercise and weight loss plan to help you achieve a healthier lifestyle.",display_src:"We have placed an order for a personalized exercise and weight loss plan to help you achieve a healthier lifestyle.",ref:"Wir haben einen personalisierten Trainings- und Gewichtsverlustplan in Auftrag gegeben, der Ihnen dabei helfen soll, einen gesünderen Lebensstil zu erreichen.",show_ref:!1},{src:"We have placed an order for a durable medical equipment (DME) supplier to provide you with a wheelchair and other necessary mobility aids.",display_src:"We have placed an order for a durable medical equipment (DME) supplier to provide you with a wheelchair and other necessary mobility aids.",ref:"Wir haben einen Lieferanten für langlebige medizinische Geräte (DME) damit beauftragt, Ihnen einen Rollstuhl und andere notwendige Mobilitätshilfen zur Verfügung zu stellen.",show_ref:!1},{src:"We have placed an order for a follow-up appointment with a specialist to monitor your progress and make any necessary adjustments to your treatment plan.",display_src:"We have placed an order for a follow-up appointment with a specialist to monitor your progress and make any necessary adjustments to your treatment plan.",ref:"Wir haben einen Folgetermin bei einem Spezialisten vereinbart, um Ihre Fortschritte zu überwachen und gegebenenfalls notwendige Anpassungen Ihres Behandlungsplans vorzunehmen.",show_ref:!1},{src:"There is no need for further intravenous antibiotics.",display_src:"There is no need for further intravenous antibiotics.",ref:"Eine weitere intravenöse Antibiotikagabe ist nicht erforderlich.",show_ref:!1},{src:"There is no need for supplemental oxygen therapy at home.",display_src:"There is no need for supplemental oxygen therapy at home.",ref:"Eine zusätzliche Sauerstofftherapie zu Hause ist nicht erforderlich.",show_ref:!1},{src:"There is no need for daily blood tests after discharge.",display_src:"There is no need for daily blood tests after discharge.",ref:"Nach der Entlassung sind keine täglichen Blutuntersuchungen erforderlich.",show_ref:!1},{src:"There is no need for continued use of a urinary catheter.",display_src:"There is no need for continued use of a urinary catheter.",ref:"Eine weitere Verwendung eines Harnkatheters ist nicht erforderlich.",show_ref:!1},{src:"There is no need for anticoagulant medication injections.",display_src:"There is no need for anticoagulant medication injections.",ref:"Es sind keine gerinnungshemmenden Medikamentenspritzen erforderlich.",show_ref:!1},{src:"There is no need for additional physical therapy sessions.",display_src:"There is no need for additional physical therapy sessions.",ref:"Es sind keine zusätzlichen Physiotherapiesitzungen erforderlich.",show_ref:!1},{src:"There is no need for a follow-up visit with a cardiologist.",display_src:"There is no need for a follow-up visit with a cardiologist.",ref:"Ein Nachuntersuchungsbesuch beim Kardiologen ist nicht erforderlich.",show_ref:!1},{src:"There is no need for continued use of pain medication.",display_src:"There is no need for continued use of pain medication.",ref:"Eine weitere Einnahme von Schmerzmitteln ist nicht erforderlich.",show_ref:!1},{src:"There is no need for outpatient wound care appointments.",display_src:"There is no need for outpatient wound care appointments.",ref:"Eine ambulante Wundversorgung ist nicht erforderlich.",show_ref:!1},{src:"There is no need for a referral to a specialist for your condition.",display_src:"There is no need for a referral to a specialist for your condition.",ref:"Eine Überweisung an einen Spezialisten für Ihre Erkrankung ist nicht erforderlich.",show_ref:!1},{src:"You recovered without treatment.",display_src:"You recovered without treatment.",ref:"Sie sind ohne Behandlung genesen.",show_ref:!1},{src:"We found no specific abnormalities that require treatment.",display_src:"We found no specific abnormalities that require treatment.",ref:"Wir haben keine spezifischen Anomalien festgestellt, die einer Behandlung bedürfen.",show_ref:!1}],kn=We(""),dn=We(`Dear Mr. Doe,

You were seen in the emergency department for trouble breathing. While you were in the hospital we gave you breathing treatments and your symptoms improved.`),_n=We(""),on=We(""),Ue=We("sentences"),mn=We(""),Sn=We([]),Kt=Ht([on,kn],([p,k],h)=>{if(p.length===0)h(On);else{console.log("hi");let t=new URL("search/"+p,k);fetch(t,{method:"get",headers:new Headers({"ngrok-skip-browser-warning":"69420"})}).then(r=>r.json()).then(r=>{console.log(r),h(r.results)})}},On),Ve=We({source:"",alternatives:[]});function qt(p){let k,h,t,r,w,m;return{c(){k=$("link"),h=ae(),t=$("div"),r=$("div"),J(k,"href","//cdn.quilljs.com/1.3.6/quill.snow.css"),J(k,"rel","stylesheet"),J(r,"id","editor"),J(r,"class","svelte-mslxgr"),J(t,"id","scrolling-container"),J(t,"class","svelte-mslxgr")},m(y,g){Z(document.head,k),he(y,h,g),he(y,t,g),Z(t,r),p[4](r),w||(m=[bt(Lt.call(null,r,p[3])),le(r,"text-change",p[5]),le(r,"selection-change",p[6])],w=!0)},p:fe,i:fe,o:fe,d(y){y&&(ce(h),ce(t)),ce(k),p[4](null),w=!1,ve(m)}}}function Ft(p,k,h){let t;_e(p,dn,e=>h(7,t=e)),pn();let r={modules:{toolbar:!1},scrollingContainer:"#scrolling-container",theme:"snow",placeholder:"Write something from outside..."},{content:w={html:"",text:""}}=k,m,y;ct(()=>{h(2,y=m.__quill),y.insertText(0,t)});const g=mn.subscribe(e=>{if(y&&e.length>0){let n=y.getSelection(focus=!0);n.length>0&&(y.setSelection(n.index+n.length),n=y.getSelection(focus=!0)),y.insertText(n.index,e),mn.set("")}});ht(g);function d(e){Le[e?"unshift":"push"](()=>{m=e,h(1,m)})}const f=e=>{h(0,w=e.detail.text),dn.set(e.detail.text.text)},i=e=>{e.detail.range==null||e.detail.range.length===0?_n.set(""):_n.set(y.getText(e.detail.range.index,e.detail.range.length))};return p.$$set=e=>{"content"in e&&h(0,w=e.content)},[w,m,y,r,d,f,i]}class Gt extends Me{constructor(k){super(),Be(this,k,Ft,qt,Te,{content:0})}}const Vt=`
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 3.11929 3.11929 2 4.5 2H19.5C20.8807 2 22 3.11929 22 4.5V19.5C22 20.8807 20.8807 22 19.5 22H4.5C3.11929 22 2 20.8807 2 19.5V4.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5V19.5C4 19.7761 4.22386 20 4.5 20H19.5C19.7761 20 20 19.7761 20 19.5V4.5C20 4.22386 19.7761 4 19.5 4H4.5Z" fill="#000000"/>
</svg>`,Ut=[{src:"abdomen",ref:"Bauch",display_src:"abdomen",show_ref:!1,definition:[`abdomen /ˈabdəmən/
Bauch <masc>, Abdomen <neut> [anat.]
`]},{src:"bowel",ref:"Darm",display_src:"bowel",show_ref:!1,definition:[`bowel /bˈaʊəl/
Darm <masc>
`]},{src:"chest",ref:"Brustkorb",display_src:"chest",show_ref:!1,definition:[`chest /tʃˈɛst/
Brustkorb <masc>, Brustkasten <masc> [ugs.] , Thorax <masc>, Brust <fem> [anat.]
      "Stick you chest out and hold your stomach in."  - Gib die Brust heraus und zieh' den Bauch ein., Brust raus, Bauch rein.
   Synonyms: {rib thoracic cage}, {rib cage}, {thorax}, {pectus}

 see: {Chest out and stomach/tummy in.}

`,`chest /tʃˈɛst/
Kasten <masc>, Kiste <fem>, Koffer <masc>, Truhe <fem>, Lade <fem>
 see: {chests}

`,`chest /tʃˈɛst/
Kiste <fem>
   Synonyms: {box}, {case}, {crate}

 see: {boxes}, {cases}, {chests}, {crates}

`,`chest /tʃˈɛst/
Schrein <masc>
`,`chest /tʃˈɛst/
 [Am.] Windlade <fem> [mus.]
         Note: Orgel
   Synonyms: {soundboard}, {windchest}

         Note: organ
`,`chest /tʃˈɛst/
Kübel <masc> [mach.]
         Note: zum Sümpfen
`]},{src:"colon",ref:"Dickdarm",display_src:"colon",show_ref:!1,definition:[`colon /kˈəʊlən/
Dickdarm <masc> [anat.]
   Synonym: {large intestine}

`,`colon /kˈəʊlən/
Doppelpunkt <masc>
 see: {colons}

`,`colon /kˈəʊlən/
Grimmdarm <masc>, Kolon <neut, fem> [anat.]
   Synonyms: {large intestine}, {large bowel}

`]},{src:"ear",ref:"Ähre",display_src:"ear",show_ref:!1,definition:[`ear /ˈiə/
Ähre <fem>
         Note: Getreide
 see: {ears}

`,`ear /ˈiə/
Hörvermögen <neut>, Hörfähigkeit <fem>, Gehör <neut>, Ohr <neut> [ugs.]  [med.]
      "have acute hearing"  - ein scharfes Gehör haben
      "have excellent hearing"  - ein sehr gutes Gehör haben
      "learn by ear"  - durch Hören lernen
      "His hearing is good/poor."  - Er hört gut/schlecht.
   Synonyms: {power of hearing}, {ability to hear}, {hearing}, {audition}

 see: {sharp ear}, {discriminating ear}, {park by feel/touch}

`,`ear /ˈiə/
Ohr <neut> [anat.]
      "at the tip of the ear"  - an der Spitze des Ohrs
      "prick up one's ears"  - die Ohren spitzen
      "be all ears"  - ganz Ohr sein
      "jar upon the ear"  - das Ohr beleidigen
      "I hope that my plea will not fall on deaf ears."  - Ich hoffe, meine Bitte trifft nicht auf taube Ohren.
      "He's always willing to lend a sympathetic ear to his patients."  - Er hat immer ein offenes Ohr für seine Patienten.
 see: {ears}, {bat ears}, {protruding ears}, {jug ears}, {keep one's chin up}, {nag sb. about sth.}

`,`ear /ˈiə/
 [fig.] Ohr <neut> [übtr.]  [gutes]
         Note: für etw.
         Note: Sinn für Sprache oder Klang
      "have an ear for rhythm and melody"  - ein (gutes) Ohr für Rhythmus und Melodie haben
      "The sentence sounds odd to my ears without the "it.""  - Ohne das „es“ klingt der Satz in meinen Ohren komisch.
      "This is music to my ears."  - Das ist Musik in meinen Ohren.
         Note: for sth.
         Note: appreciation of language or sound
`]},{src:"eye",ref:"Auge",display_src:"eye",show_ref:!1,definition:[`eye /ˈaɪ/
Auge <neut> [anat.]
      "mind's eye"  - geistiges Auge
      "with the naked eye"  - mit bloßem Auge
      "for the naked eye"  - mit bloßem Auge
      "cannot be seen with the naked eye"  - mit freiem Auge nicht erkennbar
      "turn a blind eye"  - ein Auge zudrücken
      "go into a risk with one's eyes open"  - sich sehenden Auges auf ein Risiko einlassen
      "go through life with one's eyes open"  - mit offenen Augen durch's Leben gehen
      "be all eyes"  - große Augen machen
      "wide-eyed"  - mit aufgerissenen Augen, großäugig
      "round-eyed"  - mit aufgerissenen Augen, großäugig
      "with narrowed eyes"  - mit zusammengekniffenen Augen
      "in my mind's eye"  - vor meinem geistigen Auge
      "have eyes at the back of your head"  - seine Augen überall haben, alles sehen, hellseherische Fähigkeiten haben
      "see sb./sth. in one's mind's eye"  - jdn./etw. vor Augen haben
      "see flashes of light before your eyes"  - Lichtblitze vor den Augen sehen
      "have floaters swimming before your eyes"  - Fäden sehen, die vor den Augen schwimmen, Fäden vor den Augen sehen
      "turn not just a blind eye but an entire blind sense-set (to sth.)"  - nicht nur ein, sondern beide Augen zudrücken (bei etw.)
      "He has a black eye."  - Er hat ein blaues Auge.
 see: {eyes}, {saucer eyed}, {in private}, {lose sight of sb.}, {black eye}, {shiner}, {slanted eyes}, {ferrety eyes}, {liquid eyes}, {in full view of}, {hooded eyes}, {keep sb./sth. in mind}, {keep sb./sth. in sight}, {give sb. a reality check}

`,`eye /ˈaɪ/
Knospe <fem>
 see: {eyes}

`,`eye /ˈaɪ/
Öhr <neut>
 see: {eyes}

`,`eye /ˈaɪ/
Triebansatz <masc>, Auge <neut> [bot.]
 see: {eyes}

`,`eye /ˈaɪ/ <v>
jdn./etw. mustern, betrachten, beäugen <v, trans>
      "eye up sb./sth."  - jdn. von oben bis unten mustern, jdn./etw. prüfend betrachten, sich etw. gründlich ansehen
      "eye sb./sth. up and down"  - jdn. von oben bis unten mustern, jdn./etw. prüfend betrachten, sich etw. gründlich ansehen
   Synonym: {eyeball sb./sth.}

 see: {eying}, {eyeballing}, {eyed}, {eyeballed}

`]},{src:"flank",ref:"Flanke",display_src:"flank",show_ref:!1,definition:[`flank /flˈaŋk/
Flanke <fem>
 see: {flanks}

`,`flank /flˈaŋk/ <v>
angrenzen <v, intr>
 see: {flanking}, {flanked}

`,`flank /flˈaŋk/ <v>
seitlich umgehen <v, intr>
 see: {flanking}, {flanked}

`]},{src:"foot",ref:"Fuß",display_src:"foot",show_ref:!1,definition:[`foot /fˈʊt/
Fuß <masc>
      "tread on sb.'s foot"  - jdm. auf den Fuß treten
 see: {feet}, {stand by oneself}, {live like a lord}, {live in style}, {be hot on the heels of sth.}, {follow hard on sth.}, {trample all over sb./sth.}, {get up on the wrong side of bed}, {He is on his own.}

`,`foot /fˈʊt/ (ft. /ˌɛftˈiː/, ) (f. /ˈɛf/)
Fuß <neut>
         Note: Längeneinheit: 30,48 cm
`,`foot /fˈʊt/
Fußliek <neut> [naut.]
`,`foot /fˈʊt/
Standvorrichtung <fem>, Fuß <masc>
`]},{src:"hand",ref:"Blatt",display_src:"hand",show_ref:!1,definition:[`hand /hˈand/
Blatt <neut>
         Note: gezogene Spielkarten
      "have a good hand (of cards)"  - ein gutes Blatt haben
         Note: of cards
         Note: playing cards drawn
`,`hand /hˈand/
Hand <fem> [anat.]
      "hold in the hand"  - in der Hand halten, in seiner Hand halten
      "hold in one's hand"  - in der Hand halten, in seiner Hand halten
      "a steady hand"  - eine ruhige Hand
      "at first hand"  - aus erster Hand
      "let sth. out of one's hands"  - etw. aus den Händen geben
      "lead a hand-to-mouth existence"  - von der Hand in den Mund leben
      "clasp one's hands"  - die Hände falten
      "put/place yourself in the hands of a therapist"  - sich (vertrauensvoll) in die Hände eines Therapeuten begeben
 see: {hands}, {by hand}, {manual}, {manually}, {shake hands}, {firsthand}, {secondhand}, {buy secondhand}, {at hand}, {link hands}, {give sb. (a) free rein}, {without rhyme or reason}, {find sth. easy}, {sb. finds sth. easy}, {with sure touch}, {She is all (fingers and) thumbs when it comes to baking.}, {She can't bake her way out of a paper bag.}, {She can't bake for toffee.}

`,`hand /hˈand/
Instrumentenzeiger <masc>, Zeigernadel <fem>, Zeiger <masc> [techn.]
   Synonyms: {pointer}, {needle}

 see: {pointers}, {hands}, {needles}

`,`hand /hˈand/
Uhrzeiger <masc>, Zeiger <masc>
 see: {hands}, {little hand}, {big hand}

         Note: of a timepiece
`,`hand /hˈand/ <v>
hinreichen, zureichen, hinlangen <v, trans> [ugs.]
      "hand/pass sth. to sb."  - jdm. etw. hinreichen/zureichen
   Synonym: {pass}

 see: {handing}, {passing}, {handed}, {passed}, {hands}, {passes}, {handed}, {passed}

`,`hand /hˈand/ <v>
reichen, herüberreichen, einhändigen <v, trans>
 see: {handing}, {handed}

`,`hand /hˈand/ <v>
 [to be] zur Hand
         Note: sein, griffbereit
         Note: sein, verfügbar
         Note: sein
`]},{src:"hormone",ref:"Hormon",display_src:"hormone",show_ref:!1,definition:[`hormone /hˈɔːməʊn/
Hormon <neut>
 see: {hormones}, {thyroid hormone}

`]},{src:"leg",ref:"Bein",display_src:"leg",show_ref:!1,definition:[`leg /lˈɛɡ/
Bein <neut> [anat.]
      "cross one's legs"  - seine Beine überschlagen
 see: {legs}, {bandy legs}, {take to one's heels}, {get sth. going}, {stand on your own (two) feet}

`,`leg /lˈɛɡ/
Etappe <fem>, Teilstrecke <fem>, Streckenabschnitt <masc> [sport]  [transp.]
         Note: einer Reise/eines Rennens
      "leg of a relay"  - Etappe eines Staffellaufs
      "The final leg/stage of the journey is made by coach."  - Die letzte Etappe der Reise wird mit dem Bus zurückgelegt.
   Synonym: {stage}

 see: {legs}, {stages}, {mountain stage}

`,`leg /lˈɛɡ/
Kathete <fem> [math.]
         Note: of a right-angled triangle
`,`leg /lˈɛɡ/
Keule <fem>, Schenkel <masc>, Schlegel <masc> [cook.]
         Note: Teilstück vom Geflügel
 see: {dark leg}

         Note: poultry cut
`,`leg /lˈɛɡ/
Kratzfuß <masc> [obs.]
      "make a leg"  - einen Kratzfuß machen, katzbuckeln
   Synonym: {bow}

`,`leg /lˈɛɡ/
Lauf <masc> [Jägersprache]  [anat.]
         Note: Bein von Hunden und Haarwild
 see: {legs}

         Note: of dogs and furred game
`,`leg /lˈɛɡ/
Programmzweig <masc>
`,`legal /lˈiːɡəl/ (leg. /lˈɛɡ/)
juristisch, juridisch <adj> [Ös.] jur.,  /dʒˈɜː/
   Synonyms: {juridical}, {juristic}

 see: {legal rights}, {legal service}, {by the letter of the law}

`]},{src:"liver",ref:"Leber",display_src:"liver",show_ref:!1,definition:[`liver /lˈɪvə/
Leber <fem> [anat.]
      "have a liver problem"  - es an/mit der Leber haben
 see: {fatty liver}

`,`liver /lˈɪvə/
Leber <fem> [cook.]
 see: {chopped liver}

`]},{src:"lung",ref:"Lunge",display_src:"lung",show_ref:!1,definition:[`lung /lˈʌŋ/
Lunge <fem> [anat.]
      "compliance of the lung"  - Lungendehnbarkeit
 see: {lungs}, {trapped lung}

`,`lung /lˈʌŋ/
Lungenflügel <masc> [anat.]
      "lobes of the lung"  - Lungenflügel
   Synonym: {lobe of the lung}

 see: {lungs}, {right lung}

`]},{src:"lymph nodes",ref:"Lymphknoten",display_src:"lymph nodes",show_ref:!1,definition:[`lymph nodes /lˈɪmf nˈəʊdz/
Lymphknoten <pl>, Lymphdrüsen <pl>
   Synonym: {lymphatic glands}

 see: {lymph node}, {lymphatic gland}, {sentinel node}

`]},{src:"neck",ref:"Hals",display_src:"neck",show_ref:!1,definition:[`neck /nˈɛk/
Hals <masc>, Collum <neut>, Zervix <fem> [anat.]
         Note: Cervix
      "crick one's neck"  - einen steifen Hals bekommen
   Synonyms: {collum}, {cervix}

 see: {necks}, {pencil neck}, {My heart was in my mouth.}

`,`neck /nˈɛk/
Halsausschnitt <masc>, Ausschnitt <masc> [textil.]
      "round/square neckline"  - runder/eckiger Ausschnitt
      "V-neck"  - V-Ausschnitt
      "a dress with a low neckline"  - ein Kleid mit einem tiefen Ausschnitt
      "have a low neckline"  - einen tiefen Ausschnitt haben
      "a rather revealing neckline"  - ein Ausschnitt, der tiefe Einblicke gewährt
   Synonym: {neckline}

 see: {scoop neck}, {low neckline}, {plunging neckline}, {bateau neckline}, {boat neck}

`,`neck /nˈɛk/
Schlotgang <masc>, Stielgang <masc> [geol.]
`]},{src:"pancreas",ref:"Bauchspeicheldrüse",display_src:"pancreas",show_ref:!1,definition:[`pancreas /pˈaŋkɹiəs/
Bauchspeicheldrüse <fem>, Pankreas <neut> [anat.]
`]},{src:"spine",ref:"Buchrücken",display_src:"spine",show_ref:!1,definition:[`spine /spˈaɪn/
Buchrücken <masc>, Rücken <masc> [print]
      "spines of a book"  - Buchrücken, Rücken
   Synonyms: {book spine}, {spine of a book}, {back of a book}, {shelf-back}, {back}, {backbone}

 see: {book spines}, {spines}, {backs}, {backbones}, {cracked spine}, {tight back}, {flat back}, {square back}, {hollow back}, {loose back}, {open back}, {false back}, {spring back}, {hand-bound book with French joints}

`,`spine /spˈaɪn/
Dorn <masc> [bot.]
 see: {spines}

`,`spine /spˈaɪn/
Dornenfortsatz <masc>, Dorn <masc> [anat.]
   Synonym: {dendritic spine}

 see: {dendritic spines}, {spines}

`,`spine /spˈaɪn/
 [coll.] Rückgrat <neut>, Rücken <neut> [ugs.]  [anat.]
         Note: Wirbelsäule
   Synonyms: {backbone}, {back}

         Note: spinal column
`,`spine /spˈaɪn/
Rückgrat <neut>, Rücken <masc>
      "spine of a country"  - Rückgrat eines Landes
      "It made my spine tingle."  - Es lief mir kalt den Rücken hinunter.
`,`spine /spˈaɪn/
Stachel <masc> [zool.]
 see: {quills}

`,`spine /spˈaɪn/
Wirbelsäule <fem> [anat.]
   Synonyms: {spinal column}, {vertebral column}, {vertebrae}

 see: {spines}, {spinal columns}, {vertebral columns}, {juxtaspinal}

`]},{src:"stomach",ref:"Magen",display_src:"stomach",show_ref:!1,definition:[`stomach /stˈʌmək/
Magen <masc> [anat.]
      "monogastric/digastric stomach"  - monogastrischer/digastrischer Magen
      "with an empty stomach"  - mit einem leeren Magen
      "upset one's stomach"  - sich den Magen verderben
      "His stomach grumbles."  - Sein Magen knurrt.
      "My stomach turns at this sight."  - Bei diesem Anblick dreht sich mir der Magen um.
 see: {stomachs}

`,`stomach /stˈʌmək/
Magengegend <fem> [anat.]  [med.]
   Synonyms: {stomach area}, {stomach region}

`]},{src:"cardiology",ref:"Kardiologie",display_src:"cardiology",show_ref:!1,definition:[`cardiology /kˌɑːdɪˈəʊlədʒi/
Kardiologie <fem> [med.]
 see: {psychocardiology}

`]},{src:"clinic",ref:"",display_src:"clinic",show_ref:!1,definition:[`clinic /klˈɪnɪk/
 [Br.] Arztsprechstunde <fem>, Sprechstunde <fem> [adm.]  [med.]
      "hold a surgery/clinic"  - Sprechstunde abhalten/halten/haben
   Synonyms: {doctor's consultation hour}, {surgery}

`,`clinic /klˈɪnɪk/
Klinik <fem> [med.]
      "ear-nose-throat clinic"  - Klinik für Hals-, Nasen- und Ohrenkrankheiten, Hals-Nasen-Ohren-Klinik, HNO-Klinik
 see: {clinics}, {slimming clinic}, {transplant clinic}, {dental clinic}

`,`clinic /klˈɪnɪk/
Poliklinik <fem>, Praxisklinik <fem>, Ambulatorium <neut> [Ös.]  [Schw.]  [med.]
      "outpatient's clinics"  - Polikliniken, Praxiskliniken, Ambulatorien
      "walk-in clinics"  - Polikliniken, Praxiskliniken, Ambulatorien
   Synonyms: {outpatient's clinic}, {walk-in clinic}, {polyclinic}, {walk-in centre}

 see: {clinics}, {polyclinics}

`,`clinic /klˈɪnɪk/
Krankenanstalt <fem>
   Synonym: {hospital}

`]},{src:"dermatology",ref:"Dermatologie",display_src:"dermatology",show_ref:!1,definition:[`dermatology /dˌɜːmɐtˈɒlədʒi/
Dermatologie <fem> [med.]
 see: {surgical dermatology}

`]},{src:"electrophysiology",ref:"Elektrophysiologie",display_src:"electrophysiology",show_ref:!1,definition:[`electrophysiology /ɪlˌɛktɹəʊfˌɪzɪˈɒlədʒi/
Elektrophysiologie <fem>
 see: {physiology}, {study of biological processes}, {work physiology}, {neurophysiology}, {plant physiology}, {cell physiology}, {cellular physiology}, {cytophysiology}

`]},{src:"gynecology",ref:"",display_src:"gynecology",show_ref:!1,definition:[`gynecology /ɡˌaɪnɪkˈɒlədʒi/
 [Am.] Gynäkologie <fem>, Frauenheilkunde <fem> [med.]
   Synonym: {gynaecology}

 see: {urogynaecology}, {urogynecology}

`]},{src:"hematology",ref:"",display_src:"hematology",show_ref:!1,definition:[`hematology /hˌɛmɐtˈɒlədʒi/
 [Am.] Hämatologie <fem>, Lehre vom Blut und seinen Krankheiten [med.]
   Synonym: {haematology}

`]},{src:"neurology",ref:"Neurologie",display_src:"neurology",show_ref:!1,definition:[`neurology /njuːɹˈɒlədʒi/
Neurologie <fem> [med.]
         Note: Teilgebiet der Medizin zur Behandlung von Nervenerkrankungen
`]},{src:"neurosurgery",ref:"Neurochirurgie",display_src:"neurosurgery",show_ref:!1,definition:[`neurosurgery /njˈuːɹəsˌɜːdʒəɹi/
Neurochirurgie <fem> [med.]
`]},{src:"obstetrics",ref:"Geburtshilfe",display_src:"obstetrics",show_ref:!1,definition:[`obstetrics /ɒbstˈɛtɹɪks/ (OB /ˈɒb/)
Geburtshilfe <fem> [med.]
 see: {assist at a/the birth}

`]},{src:"occupational therapy",ref:"Ergotherapie",display_src:"occupational therapy",show_ref:!1,definition:[`occupational therapy /ˌɒkjʊpˈeɪʃənəl θˈɛɹəpi/
Ergotherapie <fem>, Arbeitstherapie <fem>, Beschäftigungstherapie <fem> [med.]
   Synonyms: {ergotherapy}, {work therapy}

`]},{src:"oncology",ref:"Onkologie",display_src:"oncology",show_ref:!1,definition:[`oncology /ɒŋkˈɒlədʒi/
Onkologie <fem> [med.]
 see: {gynecologic oncology}, {clinical oncology}

`]},{src:"orthopedics",ref:"Orthopädie",display_src:"orthopedics",show_ref:!1,definition:[`orthopedics /ˌɔːθəʊpˈiːdɪks/
Orthopädie <fem> [med.]
   Synonym: {orthopaedics}

 see: {non-surgical diagnostic investigation and treatment of orthopaedic conditions}

`]},{src:"plastic surgery",ref:"plastische",display_src:"plastic surgery",show_ref:!1,definition:[`plastic surgery /plˈastɪk sˈɜːdʒəɹi/
plastische Chirurgie
 see: {surgery}, {general surgery}, {abdominal surgery}, {cosmetic surgery}, {laparoscopic surgery}, {laparoscopy}, {microsurgery}, {keyhole surgery}, {orthopaedic surgery}, {lacrimal surgery}

`,`plastic surgery /plˈastɪk sˈɜːdʒəɹi/
Plastik <fem> [med.]
`,`plastic surgery /plˈastɪk sˈɜːdʒəɹi/
Schönheitsoperation <fem>
   Synonyms: {cosmetic surgery}, {nip and tuck}

`,`plastic surgery /plˈastɪk sˈɜːdʒəɹi/
Schönheitschirurgie <fem>, plastische Chirurgie <fem> [med.]
`]},{src:"rehab",ref:"",display_src:"rehab",show_ref:!1,definition:[`rehab /ɹɪhˈab/
 [coll.] Drogentherapie <fem>
   Synonyms: {drug rehabilitation}, {drug rehab}

`,`rehab /ɹɪhˈab/
Entziehungskur <fem>, Entzug <masc> [ugs.]  [med.]
         Note: Alkohol, Rauschgift
      "be in rehab"  - auf Entzug sein
   Synonym: {withdrawal treatment}

 see: {withdrawal treatments}, {rehabs}, {drug rehab}

         Note: treatment for alcohol or drug
`,`rehab /ɹɪhˈab/
 [coll.] Rehabilitation <fem>, Reha <fem> [ugs.]
   Synonym: {rehabilitation}

 see: {follow-up treatment}, {follow-up health measure}, {functional rehabilitation}

`]},{src:"transplant clinic",ref:"Transplantationsklinik",display_src:"transplant clinic",show_ref:!1,definition:[`transplant clinic /tɹansplˈant klˈɪnɪk/
Transplantationsklinik <fem>
 see: {clinic}, {clinics}, {slimming clinic}, {dental clinic}

`]},{src:"urology",ref:"Urologie",display_src:"urology",show_ref:!1,definition:[`urology /jʊəɹˈɒlədʒi/
Urologie <fem> [med.]
`]},{src:"abscess",ref:"Abszess",display_src:"abscess",show_ref:!1,definition:[`abscess /ˈabsɛs/
Abszess <masc>, Eiterbeule <fem> [med.]
 see: {abscesses}

`]},{src:"addiction",ref:"Abhängigkeit",display_src:"addiction",show_ref:!1,definition:[`addiction /ɐdˈɪkʃən/
Abhängigkeit
         Note: von etw., Süchtigkeit <fem>, Sucht <fem> [med.]  [psych.]
         Note: nach etw.
      "addiction to narcotic drugs and psychotropic substances"  - Abhängigkeit von Suchtstoffen und psychotropen Substanzen
      "addiction to heroin"  - Heroinsucht, Kokainsucht
      "addiction to cocaine"  - Heroinsucht, Kokainsucht
 see: {sexual addiction}, {sex addiction}, {behavioural addiction}, {behavioral addiction}

         Note: to sth.
`,`addiction /ɐdˈɪkʃən/
Hang <masc>
`]},{src:"alcohol intoxication",ref:"Alkoholvergiftung",display_src:"alcohol intoxication",show_ref:!1,definition:[`alcohol intoxication /ˈalkəhˌɒl ɪntˌɒksɪkˈeɪʃən/
Alkoholvergiftung <fem>, Alkoholintoxikation <fem> [med.]
   Synonym: {alcohol poisoning}

 see: {alcohol poisonings}, {alcohol intoxications}

`]},{src:"alcohol withdrawal",ref:"Alkoholentzug",display_src:"alcohol withdrawal",show_ref:!1,definition:[`alcohol withdrawal /ˈalkəhˌɒl wɪθdɹˈɔːl/
Alkoholentzug <masc>
   Synonyms: {alcohol deprivaton}, {alcoholic withdrawal}

 see: {deprivation}, {deprival}, {withdrawal}, {drug withdrawal}, {denutrition}

`]},{src:"alcoholism",ref:"",display_src:"alcoholism",show_ref:!1,definition:[`alcoholism /ˈalkəhˌəʊlɪzəm/
 [chronic] chronische Trunksucht, Alkoholsucht <fem>, Alkoholismus <masc>, Alkoholkrankheit <fem>
   Synonyms: {alcohol use disorder}, {inebriety}

 see: {alcoholophilia}, {potomania}, {intemperance}, {dipsomania}, {posiomania}

`]},{src:"allergic reaction",ref:"Atopie",display_src:"allergic reaction",show_ref:!1,definition:[`allergic reaction /ɐlˈɜːdʒɪk ɹɪˈakʃən/
Atopie <fem>, Überempfindlichkeitsreaktion <fem> [med.]
   Synonym: {atopic}

`]},{src:"allergy",ref:"Allergie",display_src:"allergy",show_ref:!1,definition:[`allergy /ˈalədʒi/
Allergie <fem>
         Note: gegen etw., immunologische Überempfindlichkeit <fem> [med.]
      "house-dust allergy"  - Hausstauballergie
      "allergy of infection"  - Infektionsallergie, Infektallergie
      "cat hair allergy"  - Katzenhaarallergie, Katzenallergie
      "cat dander allergy"  - Katzenhaarallergie, Katzenallergie
      "cow's milk allergy"  - Kuhmilchallergie
      "allergy to pollen"  - Pollenallergie
      "cell-mediated allergy"  - zellvermittelte Allergie, zellübertragene Allergie
      "Do you have any allergies – particularly a drug allergy?"  - Haben Sie Allergien – speziell eine Medikamentenallergie?
   Synonyms: {hypersensitivity}, {hypersensitiveness}

 see: {allergies}, {immediate allergy}, {immediate hypersensitivity}, {drug allergy}, {flour allergy}, {bacterial allergy}, {cross sensitivity}, {cross allergenicity}, {cross reactivity}, {food allergy}, {alimentary allergy}, {nutritional allergy}, {pollen allergy}, {induced allergy}, {induced hypersensitivity}, {spontaneous allergy}, {delayed allergy}

         Note: to sth.
`]},{src:"anaphylaxis",ref:"allergische",display_src:"anaphylaxis",show_ref:!1,definition:[`anaphylaxis /ˌanɐfɪlˈaksɪs/
allergische Sofortreaktion <fem>, Sofortallergie <fem>, Anaphylaxie <fem> [med.]
      "reversed passive cutaneous anaphylaxis"  - invers-passive kutane Anaphylaxie
      "immune complex anaphylaxis"  - Immunkomplexanaphylaxie
   Synonyms: {immediate hypersensitivity reaction}, {immediate hypersensitivity}, {hypersensitivity reaction type}, {immediate allergy}

 see: {active anaphylaxis}, {local anaphylaxis}, {passive anaphylaxis}, {immunocomplex anaphylaxis}

`]},{src:"anemia",ref:"",display_src:"anemia",show_ref:!1,definition:[`anemia /ɐnˈiːmiə/
 [Am.] Bleichsucht <neut> [med.]
   Synonym: {anaemia}

`,`anemia /ɐnˈiːmiə/
 [Am.] Blutarmut <fem>, Erythrozytenarmut <fem>, Anämie <fem> [med.]
      "anemia in cancer"  - Anämie bei Krebs
      "autoimmune hemolytic/haemolytic anemia"  - autoimmunhämolytische Anämie
      "hemolytic/haemolytic anemia"  - hämolytische Anämie
   Synonym: {anaemia}

 see: {apparent anaemia}, {pseudoanaemia}, {aplastic anemia}, {macrocytic anemia}

`]},{src:"aneurysm",ref:"Arterienerweiterung",display_src:"aneurysm",show_ref:!1,definition:[`aneurysm /ˈanjuːɹˌɪzəm/
Arterienerweiterung <fem>, arterielle Aussackung <fem>, Pulsadergeschwulst <fem>, Schlagadergeschwulst <fem>, Aneurysma <neut> [med.]
      "Park's aneurysm"  - arteriovenöses Aneurysma mit zwei Venen, Park'sches Aneurysma
      "aneurysm of pulmonary artery"  - Lungenarterienaneurysma
      "sac-like / saccular / sacculated aneurysm"  - sackförmige Arterienerweiterung
      "aneurysm of aortic sinus"  - Sinus-Valsalva-Aneurysma
      "aneurysm of sinus of Valsalva"  - Sinus-Valsalva-Aneurysma
   Synonym: {aneurism}

 see: {true aneurysm}, {circumscribed aneurysm}, {embolomycotic aneurysm}, {false aneurysm}, {spurious aneurysm}, {pseudoaneurysm}, {aneurysmal haematome}, {miliary aneurysm}, {mixed aneurysm}, {compound aneurysm}, {ampullary aneurism}, {syphilitic aneurysm}, {luetic aneurism}, {traumatic aneurysm}, {exogenous aneurism}, {tubular aneurysm}, {cylindroid aneurism}

`]},{src:"anxiety",ref:"Angst",display_src:"anxiety",show_ref:!1,definition:[`anxiety /aŋzˈaɪəti/
Angst <fem> [psych.]
         Note: vor etw.
      "She suffers from chronic anxiety."  - Sie leidet an chronischen Angstzuständen.
 see: {test anxiety}, {realistic anxiety}, {annihilation anxiety}

         Note: about/over sth.
`,`anxiety /aŋzˈaɪəti/
Befürchtung <fem>, Besorgnis <fem>, Sorge <fem> [psych.]
         Note: wegen etw.
      "cause sb. anxiety"  - jdm. Angst machen, jdm. Sorgen machen
   Synonym: {apprehension}

         Note: about/over sth.
`,`anxiety /aŋzˈaɪəti/
Unruhe <fem>, Unbehagen <neut>, Besorgnis <fem>, Beklommenheit <fem>
   Synonyms: {unease}, {uneasiness}

`,`anxiety /aŋzˈaɪəti/
Verlangen <neut>
         Note: nach
         Note: for
`]},{src:"aortic dissection",ref:"Aortendissektion",display_src:"aortic dissection",show_ref:!1,definition:[`aortic dissection /eɪˈɔːtɪk daɪsˈɛkʃən/
Aortendissektion <fem>
 see: {dissection}, {sharp dissection}, {neck dissection}

`]},{src:"aortic stenosis",ref:"Aortenstenose",display_src:"aortic stenosis",show_ref:!1,definition:[`aortic stenosis /eɪˈɔːtɪk stɛnˈəʊsɪs/
Aortenstenose <fem>
 see: {narrowing}, {stricture}, {stegnosis}, {stenosis}, {urethral stenosis}, {urethrostenosis}, {urethral stricture}, {pyloric stenosis}, {pylorostenosis}, {rectostenosis}, {sclerostenosis}, {bridle stricure}, {dacryocystorhinostenosis}, {dacryostenosis}, {stenochoria}, {duodenal stenosis}

`]},{src:"appendicitis",ref:"Blinddarmentzündung",display_src:"appendicitis",show_ref:!1,definition:[`appendicitis /ɐpˌɛndɪsˈaɪtɪs/
Blinddarmentzündung <fem> [ugs.] , Appendizitis <fem> [med.]
      "foreign-body appendicitis"  - Fremdkörperappendizitis
`]},{src:"arrhythmia",ref:"Arrhythmie",display_src:"arrhythmia",show_ref:!1,definition:[`arrhythmia /ɐrhˈɪθmiə/
Arrhythmie <fem>, unregelmäßige Herzschlag [med.]
   Synonym: {irregular heartbeat}

`,`arrhythmia /ɐrhˈɪθmiə/
Herzrhythmusstörung <fem> [med.]
   Synonyms: {cardiac dysrhythmia}, {disturbance of the heart rhythm}, {disturbance of the cardiac rhythm}

`]},{src:"arthritis",ref:"Gelenksentzündung",display_src:"arthritis",show_ref:!1,definition:[`arthritis /ɑːθɹˈaɪtɪs/
Gelenksentzündung <fem>, Gelenkentzündung <fem>, Arthritis <fem> [med.]
      "pyo-arthritis"  - eitrige Gelenksentzündung
   Synonym: {inflammation of a joint / of joints}

 see: {acute arthritis}, {oxyarthritis}, {suppurative arthritis}, {pyogenic arthritis}, {pyarthrosis}, {yersinia arthritis}, {infectious arthritis}

`]},{src:"asthma",ref:"Asthma",display_src:"asthma",show_ref:!1,definition:[`asthma /ˈasmə/
Asthma <neut> [med.]
      "miller's asthma"  - Müllerastma
 see: {cardiac asthma}

`]},{src:"atelectasis",ref:"Atelektase",display_src:"atelectasis",show_ref:!1,definition:[`atelectasis /ˌeɪtlɪktˈɑːsiz/
Atelektase <fem> [med.]
`]},{src:"atrial flutter",ref:"Herzvorhofflattern",display_src:"atrial flutter",show_ref:!1,definition:[`atrial flutter /ˈeɪtɹɪəl flˈʌtə/
Herzvorhofflattern <neut>, Vorhofflattern <neut>
 see: {fluttering of the heart}, {heart flutter}, {ventricular flutter}

`]},{src:"awake",ref:"aufwachen,",display_src:"awake",show_ref:!1,definition:[`awake /ɐwˈeɪk/ (awoke /ɐwˈəʊk/ <>, awaked /ɐwˈeɪkt/ <>, awoken. awaked /ɐwˈəʊkən ɐwˈeɪkt/ <>) <v>
aufwachen, erwachen <v, intr>
      "he/she awakens"  - er/sie wacht auf, er/sie erwacht
      "I/he/she awaked"  - ich/er/sie wachte auf, ich/er/sie erwachte
      "awake from a deep sleep"  - aus tiefem Schlaf erwachen
 see: {awaking}, {awoken}, {awaked}, {I/he/she awoke}, {he/she has/had awoked}

`,`awake /ɐwˈeɪk/
munter <adj>
 see: {more awake}, {most awake}

`,`awake /ɐwˈeɪk/
wach, munter <adj>
      "be wide awake"  - ganz wach sein, hellwach sein
 see: {be awake}, {lie awake}

`,`awake /ɐwˈeɪk/ (awoke /ɐwˈəʊk/ <>, awaked /ɐwˈeɪkt/ <>, awoken /ɐwˈəʊkən/ <>, awaked /ɐwˈeɪkt/ <>) <v>
wecken, erwecken, aufwecken <v, trans>
   Synonym: {awaken}

 see: {awaking}, {awoken}, {awaked}, {awakens}, {awoke}, {awakened}, {reawake}

`]},{src:"bipolar disorder",ref:"bipolare",display_src:"bipolar disorder",show_ref:!1,definition:[`bipolar disorder /baɪpˈəʊlə dɪsˈɔːdə/
bipolare Störung <fem>, bipolare affektive Störung <fem>BAS,  /bˈas/ , manische Depression <fem> [med.]
   Synonyms: {bipolar syndrome}, {bipolar affective disorder}, {manic-depressive disorder}

`]},{src:"birth",ref:"Geburt",display_src:"birth",show_ref:!1,definition:[`birth /bˈɜːθ/
Geburt <fem>
   Synonyms: {delivery}, {presentation}

 see: {births}, {multiple birth}, {at birth}, {parturient}

         Note: general
`,`birth /bˈɜːθ/
Geburt <fem> [soc.]
         Note: Abstammung; Herkunft
      "be of low/humble birth"  - von niedriger Geburt sein
      "be noble birth"  - von hoher Geburt sein
      "She is Swiss by birth."  - Sie ist geborene Schweizerin.
 see: {by birth}, {be humbly born}

         Note: ancestry, origin
`,`birth /bˈɜːθ/
Geburtsstunde <fem>
      "hours of birth"  - Geburtsstunden
   Synonyms: {hour of birth}, {natal hour}

 see: {births}, {natal hours}

`]},{src:"bite",ref:"Anbeißen",display_src:"bite",show_ref:!1,definition:[`bite /bˈaɪt/
Anbeißen <neut>
         Note: eines Fisches
         Note: Angeln
      "feel a bite"  - spüren, dass einer angebissen hat
      "I haven't had a single bite yet."  - Bei mir hat noch kein einziger Fisch angebissen.
         Note: fishing
`,`bite /bˈaɪt/
Auswirkungen <pl> [negative]
      "feel the bite of the budget cuts"  - die Auswirkungen der Budgetkürzungen spüren
         Note: bad effects
`,`bite /bˈaɪt/
Biss <masc> [med.]
         Note: Wunde
      "inflict/give sb. a bite"  - jdm. einen Biss zufügen
      "She gave her lip a gentle bite."  - Sie biss sich leicht auf die Lippen.
 see: {bites}

         Note: wound
`,`bite /bˈaɪt/
Bissen <masc>, Happen <masc>
`,`bite /bˈaɪt/
Bissigkeit <fem> [übtr.]
         Note: von Äußerungen
      "the bite of his humour"  - die Bissigkeit seines Humors
   Synonym: {mordancy}

`,`bite /bˈaɪt/
Fassen <neut>, Greifen <neut> [techn.]
         Note: von Schrauben, Rädern
      "bite of the wheels (railway)"  - Fassen der Räder, Eingreifen der Räder auf den Schienen (Bahn)
 see: {roll bite}

         Note: of screws, wheels
`,`bite /bˈaɪt/
Gebissstellung <fem>, Bissstellung <fem>, Biss <masc> [anat.]
      "open-bite malocclusion"  - offener Biss
      "anterior-bite occlusion"  - vorstehender Biss
   Synonyms: {dental occlusion}, {occlusion}

 see: {closed bite}, {open bite}, {supraclusion}, {anterior bite}

`,`bite /bˈaɪt/
Schärfe <fem>
         Note: Sinneseindruck
      "the bite of the wind"  - die Schärfe des Windes
      "the bite of a dish"  - die Schärfe einer Speise
         Note: sensation
`,`bite /bˈaɪt/
Stich <masc>
         Note: Mücken-
 see: {bites}

`,`bite /bˈaɪt/ <v>
 [fig.] Wirkung zeigen, sich bemerkbar machen, greifen <v>
         Note: in negativer Hinsicht
`,`bite /bˈaɪt/ (bit /bˈɪt/ <>, bitten /bˈɪtən/ <>) <v>
beißen <v, intr, v, trans>, zubeißen <v, intr>
      "he/she bites"  - er/sie beißt
      "I/he/she would bite"  - ich/er/sie biss
 see: {biting}, {bitten}, {I/he/she bit}, {grin and bear it}

`]},{src:"blood flow",ref:"Durchblutung",display_src:"blood flow",show_ref:!1,definition:[`blood flow /blˈʌd flˈəʊ/
Durchblutung <fem>
   Synonyms: {circulation}, {blood supply}, {perfusion}

 see: {cerebral perfusion}, {coronary circulation}

`,`blood flow /blˈʌd flˈəʊ/
Blutfluss <masc>
`]},{src:"boil",ref:"Furunkel",display_src:"boil",show_ref:!1,definition:[`boil /bˈɔɪl/
Furunkel <neut>, Geschwür <neut> [med.]
   Synonym: {furuncle}

 see: {boils}, {furuncles}

`,`boil /bˈɔɪl/
Kochen, Sieden <neut> [cook.]
      "be on the boil"  - kochen
      "go off the boil"  - zu kochen aufhören
      "keep sth. on the boil"  - etw. kochen lassen
      "cook sth. at a slow boil"  - etw. köcheln / auf kleiner Flamme kochen lassen
      "cook sth. at a rapid boil"  - etw. wallend kochen lassen
      "bring the sauce to the boil / a boil"  - die Soße aufkochen lassen, zum Kochen bringen
      "when the kettle comes to the boil / a boil"  - wenn das Wasser zu kochen beginnt
`,`boil /bˈɔɪl/ <v>
sieden <v, intr>
      "it has/had boiled"  - es hat/hatte gesiedet, es hat/hatte gesotten
      "come to a/the boil"  - zum Sieden kommen
 see: {boiling}, {boiled}, {it boils}, {it boiled}

`]},{src:"bronchitis",ref:"Bronchitis",display_src:"bronchitis",show_ref:!1,definition:[`bronchitis /bɹəŋkˈaɪtɪs/
Bronchitis <fem>, Entzündung der Bronchien [med.]
`]},{src:"bruise",ref:"Blessur",display_src:"bruise",show_ref:!1,definition:[`bruise /bɹˈuːz/
Blessur <fem> [med.]  [übtr.]
      "minor cuts and bruises"  - kleinere Blessuren
   Synonym: {wound}

`,`bruise /bɹˈuːz/
Bluterguss <masc>, Hämatom <neut>, blauer Fleck [med.]
   Synonym: {haematoma}

 see: {bruise}

`,`bruise /bɹˈuːz/ <v>
blaue Flecke bekommen
 see: {haematoma}, {bruise}

`,`bruise /bɹˈuːz/
Druckstelle <fem>
         Note: an Obst
         Note: on fruit
`,`bruise /bɹˈuːz/ <v>
Druckstellen bekommen <v>
         Note: Obst
      "Strawberries bruise easily."  - Erdbeeren bekommen leicht Druckstellen.
         Note: fruit
`,`bruise /bɹˈuːz/
Prellung <fem> [med.]
   Synonym: {contusion}

 see: {contusions}, {bruises}

`,`bruise /bɹˈuːz/
Quetschung <fem> [med.]
         Note: gequetschte Stelle
   Synonym: {contusion}

 see: {bruises}, {contusions}, {phrenic emphraxis}, {phrenemphraxis phrenicotripsy}, {phreniclasis}

`]},{src:"burn",ref:"Brandwunde",display_src:"burn",show_ref:!1,definition:[`burn /bˈɜːn/
Brandwunde <fem>, Verbrennung <fem> [med.]
         Note: an
      "second-degree burn"  - Verbrennung zweiten Grades
 see: {burns}, {tertiary burns}

         Note: on
`,`burn /bˈɜːn/
Zündung <fem>
`,`burn /bˈɜːn/ <v>
anbrennen <v, intr>
      "burn the food"  - das Essen anbrennen (lassen)
 see: {burning}, {burnt}, {burns}, {burnt}

`,`burn /bˈɜːn/ (burnt /bˈɜːnt/ <>, burned /bˈɜːnd/ <>, burnt /bˈɜːnt/ <>, burned /bˈɜːnd/ <>) <v>
brennen <v, intr>
      "he/she/it burns"  - er/sie/es brennt
      "I/he/she/it burnt"  - ich/er/sie/es brannte
      "I/he/she/it burned"  - ich/er/sie/es brannte
      "he/she/it has/had burnt"  - er/sie hat/hatte gebrannt
      "he/she/it has/had burned"  - er/sie hat/hatte gebrannt
      "a burning house"  - ein brennendes Haus
      "The campfire is still burning."  - Das Lagerfeuer brennt immer noch.
 see: {burning}, {burnt}, {burned}

`,`burn /bˈɜːn/ (burnt /bˈɜːnt/ <>, burned /bˈɜːnd/ <>, burnt /bˈɜːnt/ <>, burned /bˈɜːnd/ <>) <v>
verbrennen <v, intr>
      "it has/had burned"  - es ist/war verbrannt
      "it has/had burnt"  - es ist/war verbrannt
      "be burnt to a frazzle"  - völlig verbrannt/abgebrannt/niedergebrannt sein
      "burn to ashes"  - zu Asche verbrennen
      "The toast had been burned to a frazzle."  - Der Toast war total verbrannt.
   Synonym: {burn up}

 see: {burning}, {burning up}, {burnt}, {burned}, {burnt up}, {burned up}, {it burns}, {it burned}, {it burnt}, {burn coal}

`,`burn /bˈɜːn/ <v>
verheizen, verbrennen <v, trans>
   Synonym: {use as fuel}

 see: {using as fuel}, {burning}, {used as fuel}, {burned}

`]},{src:"cellulitis",ref:"Entzündung",display_src:"cellulitis",show_ref:!1,definition:[`cellulitis /sˌɛljuːlˈaɪtɪs/
Entzündung des Unterhautgewebes, Zellgewebsentzündung <fem> [med.]
   Synonym: {inflammation of the subcutaneous tissue}

`,`cellulitis /sˌɛljuːlˈaɪtɪs/
Zellulitis <fem> [med.]
         Note: Entzündung
`]},{src:"chlamydia",ref:"Chlamydien",display_src:"chlamydia",show_ref:!1,definition:[`chlamydia /klamˈɪdiə/
Chlamydien <pl> [biol.]
         Note: Bakteriengattung
`]},{src:"cirrhosis",ref:"Zirrhose",display_src:"cirrhosis",show_ref:!1,definition:[`cirrhosis /sɜːɹˈəʊsɪs/
Zirrhose <fem> [med.]
`]},{src:"clot",ref:"Batzen",display_src:"clot",show_ref:!1,definition:[`clot /klˈɒt/
Batzen <masc>, Rohling <masc>
         Note: Keramik
 see: {clots}

         Note: ceramics
`,`clot /klˈɒt/
Blutgerinnsel <neut>, Gerinnsel <neut>, Blutpfropf <masc>, Blutkoagel <neut>, Koagulat <neut>, Koagulum <neut>, Thrombus <masc> [med.]
   Synonyms: {blood clot}, {clot of blood}, {coagulate clot}, {coagulum}, {thrombus}

 see: {agglutinative thrombus}, {ball thrombus}, {globoid thrombus}

`,`clot /klˈɒt/
 [Br.] Dummkopf <masc>, Schwachkopf <masc>, Schwachmat <masc>, Hohlkopf <masc>, Hohlbirne <fem>, Blödian <masc>, Esel <masc>, Hornochse <masc>, Dussel <masc> [Dt.] , Dämlack <masc> [Dt.] , Doofmann <masc> [Norddt.]  [Mittelwestdt.] , Döskopp <masc> [Norddt.]  [Mittelwestdt.] , Dösbattel <masc> [Norddt.]  [Mittelwestdt.] , Dämel <masc> [Norddt.]  [Mittelwestdt.] , Dämlack <masc> [Norddt.]  [Mittelostdt.] , Dummerjan <masc> [Norddt.]  [Mitteldt.] , Spacken <masc>, Dödel <neut> [Mitteldt.]  [BW] , Depp <masc> [Süddt.]  [Ös.]  [Schw.] , Dummian <masc> [Bayr.]  [Ös.] , Dodel <masc> [Ös.] , Dulle <masc> [Südostös.] , Wappler <masc> [Ös.] , Hiefler <masc> [Ös.] , Tubel <masc> [Schw.] , Dubel <masc> [Schw.] , Tschumpel <masc> [Schw.] , Lööli <masc> [Schw.] , Nullchecker <masc> [Jugendsprache] , Narr <masc> [geh.]  [veraltend] , Tor <masc> [poet.]  [obs.]  [pej.]
   Synonyms: {fool}, {jerk}, {airhead}, {clod}, {clodhopper}, {dimwit}, {nitwit}, {halfwit}, {loon}, {dolt}, {charlie}, {plonker}, {prat}, {boob}, {poop}, {schnook}, {schmuck}, {gump ninny}, {tomfool}

 see: {fools}, {jerks}, {airheads}, {clods}, {clodhoppers}, {dimwits}, {nitwits}, {halfwits}, {loons}, {dolts}, {clots}, {charlies}, {plonkers}, {prats}, {boobs}, {poops}, {schnooks}, {schmucks}, {gump ninnies}, {tomfools}, {Fools rush in where angels fear to tread.}, {Fools rush in!}

`,`clot /klˈɒt/
Klumpen <masc>
 see: {clots}

`,`clot /klˈɒt/ <v>
Klumpen bilden <v, intr>
         Note: Papierherstellung
         Note: papermaking
`,`clot /klˈɒt/ <v>
gerinnen, zusammenlaufen, koagulieren <v, intr> [chem.]
   Synonyms: {coagulate}, {concrete}

 see: {coagulating}, {concreting}, {clotting}, {coagulated}, {concreted}, {clotted}, {coagulates}, {concretes}, {clots}, {coagulated}, {concreted}, {clotted}

`,`clot /klˈɒt/ <v>
gerinnen <v, intr> [biochem.]
         Note: Fett, Milch
   Synonym: {curdle}

 see: {curdling}, {clotting}, {curdled}, {clotted}, {curdles}, {clots}, {curdled}, {clotted}

`,`clot /klˈɒt/ <v>
klumpen, klumpig werden <v, intr>
 see: {clotting}, {clotted}

`]},{src:"colitis",ref:"Dickdarmkatarrh",display_src:"colitis",show_ref:!1,definition:[`colitis /kəlˈaɪtɪs/
Dickdarmkatarrh <masc> [med.]
`]},{src:"complications",ref:"Komplikationen",display_src:"complications",show_ref:!1,definition:[`complications /kˌɒmplɪkˈeɪʃənz/
Komplikationen <pl>, Erschwernisse <pl>, Erschwerungen <pl>
 see: {complication}

`]},{src:"concussion",ref:"Erschütterung",display_src:"concussion",show_ref:!1,definition:[`concussion /kəŋkˈʌʃən/
Erschütterung <fem>
         Note: eines Körperteils, Konkussion <fem>, Kommotion <fem> [med.]
         Note: Concussio/Commotio
      "concussion of the spinal cord"  - Rückenmarkserschütterung (Commotio spinalis)
   Synonym: {commotion}

`]},{src:"confusion",ref:"Durcheinander",display_src:"confusion",show_ref:!1,definition:[`confusion /kənfjˈuːʒən/
Durcheinander <neut>, Wirrwarr <neut>
   Synonyms: {jumble}, {muddle}, {tangle}, {snarl}, {mare's nest}

`,`confusion /kənfjˈuːʒən/
Verunsicherung <fem>
   Synonym: {unsettlement}

`,`confusion /kənfjˈuːʒən/
Verwechslung <fem>, Verwechselung <fem>
      "avoid any possibility of confusion"  - um Verwechslungen vorzubeugen
`,`confusion /kənfjˈuːʒən/
Verwirrung <fem>, Unklarheit <fem>, Irritation <fem>, Konfusion <fem>
         Note: über etw.
 see: {avoid confusion}

         Note: about/over sth.
`]},{src:"coronary artery disease",ref:"ischämische",display_src:"coronary artery disease",show_ref:!1,definition:[`coronary artery disease /kˈɒɹənəɹi ˈɑːtəɹi dɪzˈiːz/
ischämische Herzkrankheit <fem>
         Note: IHK, koronare Herzkrankheit <fem> [med.]
         Note: KHK
   Synonyms: {ischaemic heart disease}, {ischemic heart disease}

         Note: CAD
`]},{src:"crisis",ref:"Krise",display_src:"crisis",show_ref:!1,definition:[`crisis /kɹˈaɪsɪs/
Krise <fem>
      "enter a state of crisis"  - in eine Krise geraten
      "pass through a crisis"  - eine Krise durchmachen
 see: {crises}, {Balkan crisis}, {ecological crisis}

`]},{src:"cut",ref:"Abheben",display_src:"cut",show_ref:!1,definition:[`cut /kˈʌt/
Abheben <neut>
         Note: eines Spielkartenstoßes vor dem Geben
         Note: dividing a pack of playing cards into two before dealing
`,`cut /kˈʌt/
Durchstich <masc>
         Note: Wasserbau
      "meander cut-off"  - Mäanderdurchstich
   Synonym: {cut-off}

 see: {pilot cut}

         Note: water engineering
`,`cut /kˈʌt/
Einschneiden <neut>, Einschnitt <masc>, Schnitt <masc>, Inzision <fem> [med.]
      "cut sth. open"  - etw. durch Schnitt eröffnen
   Synonym: {incision}

 see: {skin incision}, {exploratory incision}

`,`cut /kˈʌt/
Hieb <masc> [sport]
         Note: Fechten
      "cut to the head"  - Kopfhieb
 see: {banderolle cut}, {reverse cut}, {stop-hit}, {arrest}

         Note: fencing
`,`cut /kˈʌt/
Reduzierung <fem>
   Synonym: {run-down}

`,`cut /kˈʌt/
Schliff <masc>
   Synonym: {edge}

`,`cut /kˈʌt/
Schnitt <masc>
   Synonym: {cutting}

 see: {cuts}, {cuttings}, {surgical cut}

`,`cut /kˈʌt/
Schnitt <masc>, Schnittwunde <fem> [med.]
 see: {cuts}, {gash}

`,`cut /kˈʌt/
Schnittfassung <fem>, Fassung <fem>
         Note: eines Films
      "editor's cut"  - Rohfassung
      "director's cut"  - Vorfassung
 see: {final cut}

         Note: of a film
`,`cut /kˈʌt/
Spanstärke <fem>, Spanquerschnitt <masc> [techn.]
   Synonym: {chip section}

`,`cut /kˈʌt/
Teilstück <neut> [cook.]
         Note: eines geschlachteten Tieres
         Note: from a butchered animal
`,`Cut! /kˈʌt/
Und danke!, Danke!
         Note: Kommando bei Dreharbeiten
         Note: command on a film set
`,`cut /kˈʌt/ <v>
abbauen <v, trans> [min.]
   Synonyms: {mine}, {exploit}, {work}, {extract}, {win}, {break}

 see: {stope underhand}, {stope overhand}, {gopher}, {exhaust}

`,`cut /kˈʌt/ (cut /kˈʌt/ <>, cut /kˈʌt/ <>) <v>
abheben <v, intr>
         Note: Spielkarten vom Stapel nehmen
         Note: Kartenspiel
         Note: lift playing cards from the deck
         Note: card game
`,`cut /kˈʌt/
angeschnitten
 see: {cut sth.}, {cutting}

`,`cut /kˈʌt/
in Form geschnitten, beschnitten, kupiert
   Synonym: {trimmed}

 see: {trim}, {cut a plant}, {trimming}, {cutting}, {trims}, {cuts}, {trimmed}, {cut}

`,`cut /kˈʌt/
beschnitt, kupierte
   Synonym: {trimmed}

 see: {trim}, {cut a plant}, {trimming}, {cutting}, {trimmed}, {cut}, {trims}, {cuts}

`,`cut /kˈʌt/
gekappt <adj>
   Synonyms: {trimmed}, {clipped off}

 see: {pollard}

`,`cut /kˈʌt/ (cut /kˈʌt/ <>, cut /kˈʌt/ <>) <v>
etw. hauen <v, trans> [min.]
 see: {cut ore}

`,`cut /kˈʌt/
gekürzt, eingeschränkt, verringert, reduziert, zurückgefahren
      "cut back on spending"  - die Ausgaben kürzen
      "cut back on accidents"  - die Unfälle verringern
      "cut down on noise"  - den Lärm reduzieren
      "cut down on the use of chemicals"  - den Einsatz von Chemikalien zurückfahren
      "be savagely cut back"  - radikal zusammengestrichen werden
      "I haven't quit smoking completely, but I've cut back/down."  - Ich habe mit dem Rauchen nicht ganz aufgehört, aber ich habe es eingeschränkt.
   Synonyms: {cut back}, {cut down}

 see: {cut sth.}, {cut back (on) sth.}, {cut down (on) sth.}, {cutting}, {cutting back}, {cutting down}

`,`cut /kˈʌt/ (cut /kˈʌt/ <>, cut /kˈʌt/ <>) <v>
mähen <v, trans>
 see: {cutting}, {cut}, {cut grass}

`,`cut /kˈʌt/
gemäht
 see: {cut}, {cutting}, {cut grass}

`,`cut /kˈʌt/ (cut /kˈʌt/ <>, cut /kˈʌt/ <>) <v>
schneiden, abschneiden, kürzen <v, trans>
      "he/she cuts"  - er/sie schneidet, er/sie kürzt
      "I/he/she cut"  - ich/er/sie schnitt, ich/er/sie kürzte
      "he/she has/had cut"  - er/sie hat/hatte geschnitten, er/sie hat/hatte gekürzt
      "get one's hair cut"  - sich die Haare schneiden lassen
      "He cut his finger."  - Er hat sich in den Finger geschnitten.
 see: {cutting}, {cut}, {Cut the radish into long sticks.}

`,`cut /kˈʌt/
geschnitten, abgeschnitten, gekürzt
      "he/she cuts"  - er/sie schneidet, er/sie kürzt
      "I/he/she cut"  - ich/er/sie schnitt, ich/er/sie kürzte
      "he/she has/had cut"  - er/sie hat/hatte geschnitten, er/sie hat/hatte gekürzt
      "get one's hair cut"  - sich die Haare schneiden lassen
      "He cut his finger."  - Er hat sich in den Finger geschnitten.
 see: {cut}, {cutting}, {Cut the radish into long sticks.}

`,`cut /kˈʌt/
gestreckt
      "cut 400 grs of heroin to create 800 grs"  - 400 g Heroin auf 800 g strecken
 see: {cut a narcotic drug with sth.}, {cutting}, {adulterate cocaine}, {Cutting a narcotic drug means to dilute it with a substance that is not pharmacologically active, such as starch, or to adulterate it with a pharmacologically active substance.}

`,`cut /kˈʌt/ <v>
zurechtschneiden <v, trans>
      "cutting to shape"  - zurechtschneidend
      "cutting a piece to size"  - zurechtschneidend
      "cut to shape"  - zurechtgeschnitten
      "cut a piece to size"  - zurechtgeschnitten
      "cuts to shape"  - schneidet zurecht
      "cuts a piece to size"  - schneidet zurecht
      "cut to shape"  - schnitt zurecht
      "cut a piece to size"  - schnitt zurecht
   Synonyms: {cut to shape}, {cut a piece to size}, {trim}, {trim to fit}

 see: {trimming}, {cutting}, {trimmed}, {cut}, {trims}, {cuts}, {trimmed}, {cut}

`,`cut /kˈʌt/
zurechtgeschnitten
      "cuts to shape"  - schneidet zurecht
      "cuts a piece to size"  - schneidet zurecht
      "cut to shape"  - schnitt zurecht
      "cut a piece to size"  - schnitt zurecht
   Synonym: {trimmed}

 see: {cut to shape}, {cut a piece to size}, {trim}, {cut}, {trim to fit}, {trimming}, {cutting}, {trims}, {cuts}, {trimmed}, {cut}

`,`cut /kˈʌt/
schnitt zurecht
   Synonym: {trimmed}

 see: {cut to shape}, {cut a piece to size}, {trim}, {cut}, {trim to fit}, {trimming}, {cutting}, {trimmed}, {cut}, {trims}, {cuts}

`,`cut /kˈʌt/
Anteil <masc>
`,`cut /kˈʌt/
Einschnitt <masc>
   Synonyms: {cutting}, {trench}

`]},{src:"cyst",ref:"Zyste",display_src:"cyst",show_ref:!1,definition:[`cyst /sˈɪst/
Zyste <fem> [med.]  [zool.]
      "drainage of a cyst"  - Entlastung einer Zyste
 see: {cysts}, {ovarian cyst}, {oophoritic cyst}, {retention cyst}, {periodontal cyst}

`]},{src:"damage",ref:"",display_src:"damage",show_ref:!1,definition:[`damage /dˈamɪdʒ/
 [coll.]  [humor.] Ausgabe <fem>, Auslage <fem> [fin.]
      "What's the damage?"  - Was kostet der Spaß?, Was soll der Spaß denn kosten?, Wie viel muss ich löhnen?
`,`damage /dˈamɪdʒ/
Beeinträchtigung <fem>, Schädigung <fem>, Schaden <masc> [med.]  [psych.]
      "cause genetic damage in infants"  - bei Säuglingen einen genetischen Schaden verursachen
   Synonym: {impairment}

 see: {impairments}, {damages}, {selective impairment}

`,`damage /dˈamɪdʒ/
Beschädigung <fem>, Schaden <masc>, Schädigung <fem>
      "damage to the goods"  - Beschädigung der Ware
      "accidental damage to technical installations"  - unfallbedingter Schaden an technischen Anlagen, Havarie
      "pre-damage"  - Vorschaden, Vorschädigung
      "pre-existing damage"  - Vorschaden, Vorschädigung
      "probability of damage"  - Wahrscheinlichkeit von Beschädigungen, Wahrscheinlichkeit, dass es zu Beschädigungen kommt
      "make good the damage"  - den Schaden ersetzen
 see: {damages}, {minor damage}, {special damage}, {oil damage}, {scuffing damage}, {kerbing damage}, {curbing damage}

`,`damage /dˈamɪdʒ/
Lädierung <fem>
 see: {damages}

`,`damage /dˈamɪdʒ/
Schaden
         Note: für jdn./etw.
         Note: nachteilige Wirkung
      "the damage to sb.'s reputation"  - der Schaden für jds. Reputation
      "the damage to the environment"  - der Schaden für die Umwelt
      "damage to your health"  - Schaden für die Gesundheit
 see: {financial damage}, {elemental damage}

         Note: to sb./sth.
         Note: detrimental effect
`,`damage /dˈamɪdʒ/
Schadensbild <neut>
   Synonym: {damage symptoms}

`,`damage /dˈamɪdʒ/ <v>
beschädigen, schädigen <v, trans>
 see: {damaging}, {damaged}, {damages}, {damaged}

`,`damage /dˈamɪdʒ/ <v>
schaden <v, intr>
      "you do damage"  - du schadest
      "he/she damages"  - er/sie schadet
      "he/she does damage"  - er/sie schadet
      "I/he/she damaged"  - ich/er/sie schadete
      "I/he/she did damage"  - ich/er/sie schadete
   Synonym: {do damage}

 see: {damaging}, {doing damage}, {damaged}, {done damage}, {you damage}

`]},{src:"dehydration",ref:"Austrocknung",display_src:"dehydration",show_ref:!1,definition:[`dehydration /dˌiːhaɪdɹˈeɪʃən/
Austrocknung <fem>, Dehydratisierung <fem>, Dehydratation <fem>, Entwässerung <fem>
`,`dehydration /dˌiːhaɪdɹˈeɪʃən/
Dehydration <fem>, Dehydrierung <fem> [ugs.]  [med.]
`]},{src:"depression",ref:"Depression",display_src:"depression",show_ref:!1,definition:[`depression /dɪpɹˈɛʃən/
Depression <fem> [med.]
      "suffer from a depression"  - an einer Depression leiden
 see: {depressions}, {have depressions}

`,`depression /dɪpɹˈɛʃən/
Niedergeschlagenheit <fem>, Niedergedrücktheit <fem>, Gedrücktheit <fem>, gedrückte Stimmung <fem>, Geknicktheit <fem>, Seelenschmetter <masc> [Schw.] , Mutlosigkeit <fem>, Verzagtheit <fem> [geh.]
         Note: einer Person
   Synonyms: {low spirits}, {downheartedness}, {dispiritedness}, {dejectedness}, {dejection}, {despondence}, {despondency}

`,`depression /dɪpɹˈɛʃən/
Schwermütigkeit <fem>, Gedrücktheit <fem>, Katerstimmung <fem>, Katzenjammer <masc> [ugs.]
   Synonym: {the blues}

`,`depression /dɪpɹˈɛʃən/
Senke <fem>, Senkung <fem>, Niederung <fem>, Einmuldung <fem>, Muldung <fem> [geol.]
 see: {depressions}, {closed depression}

`,`depression /dɪpɹˈɛʃən/
Tief <neut>, Tiefdruckgebiet <neut> [meteo.]
   Synonym: {low-pressure area}

 see: {deep depression}, {tropical depression}

`,`depression /dɪpɹˈɛʃən/
Unterdrückung <fem>
`]},{src:"diabetes",ref:"Diabetes",display_src:"diabetes",show_ref:!1,definition:[`diabetes /dˌaɪəbˈiːtiːz/
Diabetes <masc>, Diabetes mellitus <masc>DM,  /dˌiːˈɛm/ , Zuckerkrankheit <fem>, Zuckererkrankung <fem> [med.]
   Synonym: {sugar disease}

 see: {anti-diabetic}, {have diabetes}

`]},{src:"dislocation",ref:"Gesteinsverwerfung",display_src:"dislocation",show_ref:!1,definition:[`dislocation /dɪsləʊkˈeɪʃən/
Gesteinsverwerfung <fem>, Verwerfung <fem>, Verwurf <masc> [geol.]
   Synonyms: {rock fault}, {fault}, {faulting}, {dip-slip fault}, {throw}, {shift}, {shifting}, {displacement}, {upslide}

 see: {rock faults}, {faults}, {faultings}, {throws}, {shifts}, {shiftings}, {dislocations}, {displacements}, {upslides}, {upcast}, {uptake}, {thrust fault}, {hitch}, {circumferential fault}, {active fault}, {boundary fault}, {strike fault}

         Note: of strata
`,`dislocation /dɪsləʊkˈeɪʃən/
Lagerungsstörung <fem>, Dislokation <fem> [geol.]
`,`dislocation /dɪsləʊkˈeɪʃən/
 [formal] Störung <fem>
         Note: Unterbrechung einer Aktivität
   Synonyms: {disturbance}, {disruption}

 see: {disturbances}, {disruptions}, {dislocations}

         Note: disruption of an activity
`,`dislocation /dɪsləʊkˈeɪʃən/
Verlagerung <fem>, Verlegung <fem>, Verschiebung <fem>, Versetzung <fem>, Umstellung <fem>
      "dislocation of industries"  - Industrieverlagerung
      "dislocation of a semiconductor"  - Versetzung eines Halbleiters
      "dislocation in crystal gratings"  - Versetzung/Verschiebung in Kristallgittern
      "dislocation of higher order (crystal grating)"  - Überversetzung (Kristallgitter)
 see: {dislocations}

`,`dislocation /dɪsləʊkˈeɪʃən/
Verrenkung <fem>, Luxation <fem>, Dislozierung <fem>, Dislokation <fem>, Dislocatio <fem> [med.]
         Note: von etw.
      "compound/complicated dislocation"  - komplizierte Dislokation
      "subcoracoid dislocation of the head of the humerus"  - Dislocatio subcoracoidea capitis humeri
   Synonyms: {displacement}, {luxation}

 see: {old dislocation}, {simple dislocation}, {habitual dislocation}, {incomplete dislocation}, {complete dislocation}, {pathological dislocation}, {traumatic dislocation}, {overriding}, {atlantoaxial dislocation}

`]},{src:"diverticula",ref:"Schleimhautausstülpungen",display_src:"diverticula",show_ref:!1,definition:[`diverticula /daɪvətˈɪkjʊlə/
Schleimhautausstülpungen <pl>, Schleimhauttaschen <pl>, Divertikel <pl>
   Synonyms: {outpouchings}, {pouches}

 see: {outpouching}, {pouch}, {diverticulum}, {bladder diverticulum}, {vesical diverticulum}, {colon diverticulum}, {epiphrenic diverticulum}, {urethral diverticulum}, {liver diverticulum}, {hepatic diverticulum}, {pharyngeal diverticulum}, {supradiaphragmatic diverticulum}, {tracheobronchial diverticulum}, {ventricular diverticulum}, {cervical diverticulum}

`]},{src:"diverticulitis",ref:"Divertikelentzündung",display_src:"diverticulitis",show_ref:!1,definition:[`diverticulitis /daɪvˌɜːtɪkjʊlˈaɪtɪs/
Divertikelentzündung <fem>, Divertikulitis <fem> [med.]
   Synonym: {inflammation of a diverticulum}

`]},{src:"diverticulosis",ref:"Divertikelhäufung",display_src:"diverticulosis",show_ref:!1,definition:[`diverticulosis /daɪvˌɜːtɪkjʊlˈəʊsɪs/
Divertikelhäufung <fem>, Vorhandensein mehrerer Divertikel, Divertikulose <fem> [med.]
   Synonym: {presence of multiple diverticula}

`,`diverticulosis /daɪvˌɜːtɪkjʊlˈəʊsɪs/
Divertikulose <fem> [med.]
 see: {diverticular disease of both small and large intestine with perforation and abscess}

`]},{src:"dysphagia",ref:"Dysphagie",display_src:"dysphagia",show_ref:!1,definition:[`dysphagia /dɪsfˈeɪdʒə/
Dysphagie <fem>, Schluckstörung <fem> [med.]
   Synonym: {difficulty in swallowing}

`]},{src:"effusion",ref:"Erguss",display_src:"effusion",show_ref:!1,definition:[`effusion /ɪfjˈuːʒən/
Erguss <masc>, Erguß <masc> [alt]
 see: {effusions}

`,`effusion /ɪfjˈuːʒən/
Effusion <fem> [geol.]
`]},{src:"endometriosis",ref:"Endometriose",display_src:"endometriosis",show_ref:!1,definition:[`endometriosis /ˌɛndəʊmˌɛtɹɪˈəʊsɪs/
Endometriose <fem>, gutartige Wucherung von Gebärmutterschleimhaut [med.]
`]},{src:"epilepsy",ref:"Epilepsie",display_src:"epilepsy",show_ref:!1,definition:[`epilepsy /ˈɛpɪlˌɛpsi/
Epilepsie <fem>, Fallsucht <fem> [veraltet] , zerebrales Anfallsleiden <neut>, zerebrales Krampfleiden <neut> [med.]
      "temporal lobe epilepsy"  - Schläfenlappenepilepsie
 see: {alcoholic epilepsy}, {focal epilepsy}, {garrulous epilepsy}

`]},{src:"exposure",ref:"Anteil",display_src:"exposure",show_ref:!1,definition:[`exposure /ɛkspˈəʊʒə/
Anteil <masc>, Beteiligung <fem>, Engagement <neut>, Partizipation <fem> [fin.]
 see: {group exposure}

`,`exposure /ɛkspˈəʊʒə/
Aufschluss <masc> [geol.]  [min.]
         Note: Stelle, an der Erz zutage tritt
      "point-shaped exposure"  - punktförmiger Aufschluss
   Synonym: {outcrop}

 see: {extended exposure}, {artificial opening}, {natural outcrop}, {obscured exposure}

`,`exposure /ɛkspˈəʊʒə/
Ausgesetztsein <neut> [ungeschütztes]
         Note: einer Sache, Belastung <fem>, Gefährdung <fem>
         Note: durch etw., Exponiertheit <fem>, Exposition <fem> [geh.]
         Note: gegenüber einer Sache
      "exposure to infection"  - Infektionsexposition
      "exposure to radiation"  - Strahlenbelastung, Strahlenexposition
      "exposure to a/the virus"  - Virusexposition
      "exposure to virusses"  - Virusexposition
      "exposures to medicines/environmental toxins"  - Angriffsstellen für Medikamente/Umweltgifte
   Synonym: {subjection}

`,`exposure /ɛkspˈəʊʒə/
Aussetzen <neut>
         Note: einer Sache
      "exposure to light"  - Belichtung
      "exposure to rays"  - Bestrahlung
      "radiant exposure at a point of a surface (light)"  - Bestrahlung an einem Punkt einer Fläche (Licht)
      "The room has a southern exposure."  - Das Zimmer ist südseitig gelegen.
 see: {unnecessary exposure}

         Note: to sth.
`,`exposure /ɛkspˈəʊʒə/
Aussetzung <fem>
         Note: von jdm., Kindsaussetzung <fem>
         Note: of sb.
`,`exposure /ɛkspˈəʊʒə/
Ausstellen <neut>, Ausstellung <fem> [econ.]
         Note: von etw.
      "exposure of goods for sale"  - Ausstellung von Waren zum Verkauf
         Note: of sth.
`,`exposure /ɛkspˈəʊʒə/
Belichtung <fem>, Belichten <neut>, Exposition <fem> [photo.]
      "bracket the/your exposure"  - eine (ganze) Belichtungsreihe machen / anfertigen
   Synonym: {exposition}

`,`exposure /ɛkspˈəʊʒə/
Bloßstellung <fem>, Enttarnung <fem>
         Note: von jdm., Enthüllung <fem>, Aufdeckung <fem>
         Note: von etw.
      "exposure of a plot"  - Aufdeckung einer Verschwörung
      "exposure of his criminal past"  - Enthüllung seiner kriminellen Vergangenheit
      "They threatened me with public exposure."  - Sie drohten, mich öffentlich bloßzustellen.
         Note: of sb./sth.
`,`exposure /ɛkspˈəʊʒə/
Freilegung <fem>
         Note: von Ruinen; Trümmern
`,`exposure /ɛkspˈəʊʒə/
Freilegung <fem> [med.]
         Note: eines Körperteils
   Synonym: {denudation}

`,`exposure /ɛkspˈəʊʒə/
 [Br.] Gewichtung <fem> [fin.]
`,`exposure /ɛkspˈəʊʒə/
die Tatsache, dass er/sie/es der kalten Witterung ausgesetzt war
   Synonym: {cold-weather exposure}

 see: {Exposure has damaged the plaster ceilings.}

`,`exposure /ɛkspˈəʊʒə/
 [cold-weather] Unterkühlung <fem>, Hypothermie <fem> [med.]
         Note: Zustand
      "death by exposure"  - Tod durch Unterkühlung
   Synonyms: {hypothermy}, {hypothermia}

`]},{src:"fistula",ref:"Fistel",display_src:"fistula",show_ref:!1,definition:[`fistula /fˈɪstjʊlə/
Fistel <fem> [anat.]  [med.]
      "tear sac fistula"  - Tränensackfistel
      "fistula of the tear sac"  - Tränensackfistel
      "lacrimal sac fistula"  - Tränensackfistel
 see: {fistulas}, {draining fistula}, {intestine fistula}, {obstetric fistula}, {vesicovaginal fistula}, {labial fistula}, {lacteal fistula}, {lacrimal fistula}, {dacryosyrinx}, {gingival fistula}

`]},{src:"flu",ref:"Influenza",display_src:"flu",show_ref:!1,definition:[`flu /flˈuː/
Influenza <fem>, Grippe <fem> [med.]
      "virus influenza, viral flue"  - Virusgrippe
      "gastro-intestinal influenza"  - Magen-Darm-Grippe, Darmgrippe, gastrointestinale Grippe
      "abdomino-enteric influenza"  - Magen-Darm-Grippe, Darmgrippe, gastrointestinale Grippe
      "down with influenza"  - an Grippe erkrankt
      "have the flu"  - die Grippe haben
      "catch (the) flu"  - Grippe bekommen
      "I caught the flu."  - Ich habe eine Grippe bekommen.
      "Unfortunately I caught the flu."  - Ich habe mir leider eine Grippe geholt.
   Synonym: {influenza}

 see: {abdominal influenza}, {gastric flu}, {abdominal flu}, {intestinal flu}, {get flu}, {Spanish flu}

`]},{src:"food poisoning",ref:"Lebensmittelvergiftung",display_src:"food poisoning",show_ref:!1,definition:[`food poisoning /fˈuːd pˈɔɪzənɪŋ/
Lebensmittelvergiftung <fem>, Nahrungsmittelvergiftung <fem>, Nahrungsmittelintoxikation <fem> [med.]
   Synonyms: {food intoxication}, {alimentary toxicosis}

 see: {enterocolitis syndrome}

`]},{src:"foreign body",ref:"Fremdkörper",display_src:"foreign body",show_ref:!1,definition:[`foreign body /fˈɒɹən bˈɒdi/
Fremdkörper <masc> [med.]
      "non-magnetic foreign body"  - nichtmagnetischer Fremdkörper
      "amagnetic foreign body"  - nichtmagnetischer Fremdkörper
      "foreign body in eye"  - Fremdkörper im Auge
      "foreign body in throat / in airway"  - Fremdkörper im Rachen / in den Luftwegen
`]},{src:"fracture",ref:"Abbruchstelle",display_src:"fracture",show_ref:!1,definition:[`fracture /fɹˈaktʃə/
Abbruchstelle <fem> [geol.]  [min.]
 see: {fractures}

`,`fracture /fɹˈaktʃə/
Bruch <masc> [techn.]
 see: {fractures}, {brittle fracture}, {ductile fracture}

`,`fracture /fɹˈaktʃə/
Bruch <masc> [geol.]
      "shell-like fracture"  - muscheliger Bruch
   Synonyms: {rupture}, {failure}, {fall}, {fault}, {disturbance}

 see: {lamellar fracture}, {even fracture}, {fibrous fracture}, {fresh cleavage}, {conchoidal fracture}, {flinty fracture}, {acicular fracture}, {uneven fracture}, {recurrent faulting}, {revived faulting}

`,`fracture /fɹˈaktʃə/
Knochenbruch <masc>, Bruch <masc>
         Note: in Zusammensetzungen, Knochenfraktur <fem>, Fraktur <fem> [med.]
      "closed / uncomplicated fracture"  - einfacher / geschlossener / unkomplizierter Knochenbruch
      "imperfectly united fracture"  - falsch verwachsener Knochenbruch
      "splintered / comminuted fracture"  - gesplitterter Knochenbruch
      "ununited / not consolidated fracture"  - nichtdurchgebauter Knochenbruch
      "non-united fracture"  - nichtverwachsener Knochenbruch
      "open / complicated fracture"  - offener / komplizierter Knochenbruch
      "incomplete fracture, infraction"  - unvollständiger Knochenbruch
      "united / consolidated fracture"  - zusammengewachsener / knöchern durchgebauter Knochenbruch
      "fracture of the base of the skull"  - Schädelbasisbruch, Schädelbasisfraktur
      "fractured base of the skull"  - Schädelbasisbruch, Schädelbasisfraktur
      "base of skull fracture"  - Schädelbasisbruch, Schädelbasisfraktur
      "basal skull fracture"  - Schädelbasisbruch, Schädelbasisfraktur
      "basilar skull fracture"  - Schädelbasisbruch, Schädelbasisfraktur
      "serial rib fracture"  - Serienrippenbruch
      "series of rib fractures"  - Serienrippenbruch
      "lower leg fracture"  - Unterschenkelbruch, Unterschenkelfraktur
      "set / reduce a bone fracture"  - einen Knochenbruch einrichten / richten / einstellen
   Synonym: {bone fracture}

 see: {bone fractures}, {fractures}, {multiple fractures}, {old dislocation}, {compound fracture}, {perforating fracture}, {transverse fracture}, {spontaneous fracture}, {pathologic fracture}, {impacted fracture}, {displaced fracture}, {multiple fracture}, {tibial fracture}, {tibia fracture}, {serial fracture}, {plate a fractued bone}

`,`fracture /fɹˈaktʃə/ <v>
brechen <v, trans> [med.]
      "fracture one's leg"  - sich das Bein brechen
 see: {fracturing}, {fractured}, {unfractured}

`]},{src:"gallstones",ref:"Cholelithiasis",display_src:"gallstones",show_ref:!1,definition:[`gallstones /ɡˈalstəʊnz/
Cholelithiasis <fem>, Gallensteinleiden <neut> [med.]
   Synonym: {cholelithiasis}

`,`gallstones /ɡˈalstəʊnz/
Gallensteine <fem>
   Synonym: {gall stones}

 see: {gall stone}, {gallstone}

`]},{src:"gastritis",ref:"Magenschleimhautentzündung",display_src:"gastritis",show_ref:!1,definition:[`gastritis /ɡastɹˈaɪtɪs/
Magenschleimhautentzündung <fem>, Gastritis <fem> [med.]
`]},{src:"gastroenteritis",ref:"Magen-Darm-Entzündung",display_src:"gastroenteritis",show_ref:!1,definition:[`gastro-enteritis /ɡˈastɹəɹ ˌɛntəɹˈaɪtɪs/
Magen-Darm-Entzündung <fem>, Magen-Darm-Katharr <masc>, Gastroenteritis <fem> [med.]
      "viral gastro-enteritis"  - virale Gastroenteritis, Virusgastroenteritis, Magen-Darm-Grippe
   Synonym: {enterogastritis}

 see: {acute infectious gastroenteritis}, {eosinophilic gastroenteritis}, {epidemic nonbacterial gastroenteritis}, {gastro-intestinal influenza}

`]},{src:"gonorrhea",ref:"",display_src:"gonorrhea",show_ref:!1,definition:[`gonorrhea /ɡˈɒnɒɹˌiə/
 [Am.] Tripper <masc>, Gonorrhoe <fem>, Gonorrhö <fem> [med.]
   Synonyms: {gonorrhoea}, {tonococcal urethritis}, {blennorrhoea}, {blennorrhagia}, {medoblennorrhoea}, {the clap}

 see: {ascending gonorrhoea}, {disseminated gonorrhoea}, {recent gonorrhoea}, {phallorrhoea}, {gonoblennorrhoea}, {gonococcal conjunctivities}, {gonorrhoeal ophthalmia}, {gonococcal ophthalmia}

`]},{src:"gout",ref:"Gicht",display_src:"gout",show_ref:!1,definition:[`gout /ɡˈaʊt/
Gicht <fem>, Zipperlein <neut> [ugs.]  [med.]
      "gout-ridden"  - von Gicht geplagt
   Synonym: {arthrolithiasis}

`]},{src:"hallucinations",ref:"Halluzinationen",display_src:"hallucinations",show_ref:!1,definition:[`hallucinations /hɐlˌuːsɪnˈeɪʃənz/
Halluzinationen <pl>
 see: {hallucination}, {auditory hallucination}

`]},{src:"hearing loss",ref:"Gehörlosigkeit",display_src:"hearing loss",show_ref:!1,definition:[`hearing loss /hˈiəɹɪŋ lˈɒs/
Gehörlosigkeit <fem>, Gehörverlust <masc>, Hörschwund <masc> [med.]
   Synonym: {loss of hearing}

`]},{src:"heart attack",ref:"Herzanfall",display_src:"heart attack",show_ref:!1,definition:[`heart attack /hˈɑːt ɐtˈak/
Herzanfall <masc>, Herzschlag <masc> [med.]
      "He died of a heart attack."  - Er starb an einem Herzschlag.
 see: {heart attacks}

`,`heart attack /hˈɑːt ɐtˈak/
 [coll.] Herzinfarkt <masc>, Myokardinfarkt <masc> [med.]
   Synonyms: {cardiac infarction}, {myocardial infarction}

 see: {cardiac infarctions}, {myocardial infarctions}

`,`heart attack /hˈɑːt ɐtˈak/
Herzkasper <masc> [humor.]
`]},{src:"heart disease",ref:"Herzkrankheit",display_src:"heart disease",show_ref:!1,definition:[`heart disease /hˈɑːt dɪzˈiːz/
Herzkrankheit <fem> [med.]
 see: {heart diseases}

`,`heart disease /hˈɑːt dɪzˈiːz/
Herzleiden <neut>
   Synonyms: {heart condition}, {heart trouble}

`]},{src:"heart failure",ref:"Herzversagen",display_src:"heart failure",show_ref:!1,definition:[`heart failure /hˈɑːt fˈeɪliə/
Herzversagen <neut>, Herzinsuffizienz <fem> [med.]
      "acute heart failure"  - akutes Herzversagen
      "congestive heart failure"  - kongestive Herzinsuffizienz
      "die of/from heart failure"  - an Herzversagen sterben
   Synonyms: {heart insufficiency}, {cardiac (power) failure}

 see: {primary cardiac insufficiency}

`]},{src:"hemorrhoids",ref:"",display_src:"hemorrhoids",show_ref:!1,definition:[`hemorrhoids /hˈɛməɹˌɔɪdz/
 [Am.] Hämorrhoiden <pl>, Hämorriden <pl> [med.]
   Synonyms: {haemorrhoids}, {piles}

`]},{src:"hernia",ref:"Hernie",display_src:"hernia",show_ref:!1,definition:[`hernia /hˈɜːniə/
Hernie <fem>, Bruch <masc> [med.]
      "get a hernia"  - sich einen Bruch heben
      "give vourself a hernia"  - sich einen Bruch heben
      "let repair one's hernia"  - sich am Bruch operieren lassen
   Synonym: {herniation}

`]},{src:"high blood pressure",ref:"Bluthochdruck",display_src:"high blood pressure",show_ref:!1,definition:[`high blood pressure /hˈaɪ blˈʌd pɹˈɛʃə/
Bluthochdruck <masc>, hoher Blutdruck <masc>, erhöhter Blutdruck <masc>, Hypertonie <fem>, Hypertension <fem> [med.]
      "have high blood pressure"  - einen hohen Blutdruck haben, an Bluthochdruck leiden
      "suffer from high blood pressure / hypertension"  - einen hohen Blutdruck haben, an Bluthochdruck leiden
   Synonyms: {hypertension}, {hyperpiesia}

 see: {arterial hypertension}, {venous hypertension}, {compensatory hypertension}, {pulmonary hypertension}, {portal hypertension}, {pseudohypertension}

`]},{src:"hives",ref:"Nesselausschlag",display_src:"hives",show_ref:!1,definition:[`hives /hˈaɪvz/
Nesselausschlag <masc>, Nesselfieber <neut>, Nesselsucht <masc>, Urtikaria <fem> [med.]
   Synonyms: {nettle rash}, {urticarial rash}, {urticaria}

 see: {haemorrhagic hives}, {medicamentous urticaria}

`]},{src:"hot flashes",ref:"Hitzewallungen",display_src:"hot flashes",show_ref:!1,definition:[`hot flashes /hˈɒt flˈaʃɪz/
Hitzewallungen <pl>, Hitzeattacken <pl>, aufsteigende Hitzen <pl>
   Synonym: {hot flushes}

 see: {hot flush}, {hot flash}

`]},{src:"hyperinflation",ref:"Überinflation",display_src:"hyperinflation",show_ref:!1,definition:[`hyperinflation /hˌaɪpəɹɪnflˈeɪʃən/
Überinflation <fem>, Hyperinflation <fem>, galoppierende Inflation <fem>
 see: {inflation}, {inflations}, {absolute inflation}, {imported inflation}, {unanticipated inflation}

`]},{src:"hypertension",ref:"Bluthochdruck",display_src:"hypertension",show_ref:!1,definition:[`hypertension /hˌaɪpətˈɛnʃən/
Bluthochdruck <masc>, hoher Blutdruck <masc>, erhöhter Blutdruck <masc>, Hypertonie <fem>, Hypertension <fem> [med.]
      "suffer from high blood pressure / hypertension"  - einen hohen Blutdruck haben, an Bluthochdruck leiden
   Synonyms: {high blood pressure}, {hyperpiesia}

 see: {arterial hypertension}, {venous hypertension}, {compensatory hypertension}, {pulmonary hypertension}, {portal hypertension}, {pseudohypertension}

`]},{src:"hypoglycemia",ref:"",display_src:"hypoglycemia",show_ref:!1,definition:[`hypoglycemia /hˌaɪpəʊɡlaɪsˈiːmiə/
 [Am.] Hypoglykämie <fem>, Hypoglycämie <fem>, Unterzuckerung <fem>, starke Absenkung des Blutzuckers [med.]
   Synonyms: {hypoglycaemia}, {low blood sugar}

`]},{src:"illness",ref:"Kranksein",display_src:"illness",show_ref:!1,definition:[`illness /ˈɪlnəs/
Kranksein <neut>, Krankheit <fem> [med.]
         Note: unbestimmter Krankheitszustand beim Menschen
      "contract an illness"  - sich eine Krankheit zuziehen
      "patients with acute/chronic illnesses"  - Patienten mit akuten/chronischen Krankheiten
      "suffer from various illnesses"  - an verschiedenen Krankheiten leiden
      "be off school because of illness"  - krankheitshalber nicht in der Schule sein
      "reduce the risk of illness"  - das Krankheitsrisiko verringern
      "She showed no signs of illness."  - Sie zeigte keinerlei Anzeichen von Krankheit.
      "The soldiers died from illness and hunger."  - Die Soldaten starben an Hunger und Krankheit.
      "His father is recovering from an illness."  - Sein Vater erholt sich gerade von einer Krankheit.
      "I had all the normal childhood illnesses."  - Ich hatte alle üblichen Kinderkrankheiten.
      "Have you ever had any serious illnesses?"  - Hattest du je eine schwere Krankheit?
      "She was diagnosed with a terminal illness."  - Man hat bei ihr eine unheilbare Krankheit festgestellt.
      "He died yesterday in his 70th year of life after a short/long/serious illness."  - Er verstarb gestern im 70. Lebensjahr nach kurzer/langer/schwerer Krankheit.
 see: {protracted illness}, {environmental illness}

`]},{src:"incontinence",ref:"Inkontinenz",display_src:"incontinence",show_ref:!1,definition:[`incontinence /ɪŋkˈɒntɪnəns/
Inkontinenz <fem> [med.]
         Note: Unvermögen, Harn bzw. Stuhl zurückzuhalten
 see: {urinary incontinence}, {faecal incontinence}, {fecal incontinence}

         Note: inability to control urination or defecation
`,`incontinence /ɪŋkˈɒntɪnəns/
Unenthaltsamkeit <fem>, Unmäßigkeit <fem>
`]},{src:"infection",ref:"Ansteckung",display_src:"infection",show_ref:!1,definition:[`infection /ɪnfˈɛkʃən/
Ansteckung <fem>, Infektion <fem> [med.]
         Note: Vorgang
      "hand-borne infection"  - Ansteckung über die Hände
      "vector-borne infection"  - Ansteckung durch einen Überträger
      "heredo-infection"  - Ansteckung durch Keimzellen
      "dust-borne infection"  - Ansteckung durch Staub
      "water-borne infection"  - Ansteckung über das Trinkwasser
      "hetero-infection"  - äußere Infektion
      "co-infection"  - Doppelinfektion, Koinfektion
      "cross-infection"  - Kreuzinfektion
      "self-infection"  - Selbstinfektion, Autoinfektion, autogene Infektion, endogene Infektion
      "low-grade infection"  - unterschwellige Infektion, subakute Infektion
      "hospial-acquired infection"  - im Krankenhaus erworbene Infektion, Krankenhausinfektion, Spitalsinfektion, nosokomiale Infektion
      "health care-associated infection"  - im Krankenhaus erworbene Infektion, Krankenhausinfektion, Spitalsinfektion, nosokomiale Infektion
      "community-acquired infection"  - im Kontakt mit der Allgemeinbevölkerung erworbene Infektion
 see: {infections}, {general infection}, {systemic infection}, {bacillary infection}, {bacillosis}, {nosocomial infection}, {airborne infection}, {germinal infection}, {ascending infection}, {retrograde infection}, {external infection}, {bacterial infection}, {bite infection}, {direct infection}, {contact infection}, {coinfection}, {reinfection}, {exogenous infection}, {focal infection}, {subsequent infections}, {iatrogenic infection}, {contact infection}, {contagion}, {local infection}, {mild infection}, {subinfection}, {mixed infection}, {multiple infection}, {mixed infection}, {slow infection}, {smear infection}, {secondary infection}, {autoinfection}, {autogenous infection}, {endogenous infection}, {simultaneous infection}, {silent infection}, {subclinical infection}, {droplet infection}, {inapparent infection}, {subacute infection}, {hidden infection}, {cryptoinfection}, {viral infection}, {virus infection}, {consecutive infection}, {secondary infection}, {hospital infection}, {nosocomial infection}

         Note: process
`,`infection /ɪnfˈɛkʃən/
ansteckende Krankheit <fem>, Infektionskrankheit <fem>, Infekt <masc>, Infektion <fem> [med.]
      "infection that is constantly present in a particular area"  - endemische Infektionskrankheit, in einem Gebiet ständig auftretende Infektion
      "flue-like infection"  - grippaler Infekt
      "gastro-intestinal infection"  - Magen-Darm-Infektion, Magen-Darm-Infekt
      "catch an infection"  - sich anstecken, sich infizieren
      "take an infection"  - sich anstecken, sich infizieren
      "eredicate the infection"  - die Infektion ausheilen
   Synonyms: {contagious disease}, {communicable disease}, {infectious disease}, {bug}

 see: {contagious diseases}, {communicable diseases}, {infectious diseases}, {infections}, {bugs}, {ecdemic infection}, {introduced infection}, {endemic infection}, {influenzal infection}, {flu bug}, {latent infection}, {stomach bug}, {tummy bug}, {intestinal bug}

`]},{src:"injury",ref:"Verletzung",display_src:"injury",show_ref:!1,definition:[`injury /ˈɪndʒəɹi/
Verletzung <fem> [med.]  [psych.]
      "repetitive strain injury"  - Verletzung durch wiederholte Belastung, Mausarm
 see: {injuries}, {concomitant injury}, {associated injury}, {bite injury}, {shoulder injury}, {compensable injury}

`]},{src:"intoxication",ref:"",display_src:"intoxication",show_ref:!1,definition:[`intoxication /ɪntˌɒksɪkˈeɪʃən/
 [med.] Alkoholisierung [med.] , Betrunkenheit <fem>, Rausch <masc>
   Synonyms: {drunkenness}, {inebriation}, {insobriety}

`,`intoxication /ɪntˌɒksɪkˈeɪʃən/
Intoxikation <fem>, Vergiftung <fem> [med.]
`]},{src:"kidney stone",ref:"Nephrolith",display_src:"kidney stone",show_ref:!1,definition:[`kidney stone /kˈɪdni stˈəʊn/
Nephrolith <masc>, Nierenstein <masc> [med.]
   Synonyms: {nephrolith}, {renal calculus}

`]},{src:"laceration",ref:"Fleischwunde",display_src:"laceration",show_ref:!1,definition:[`laceration /lˌasəɹˈeɪʃən/
Fleischwunde <fem> [med.]
`,`laceration /lˌasəɹˈeɪʃən/
Lazeration <fem>, Einriss <masc> [med.]
`,`laceration /lˌasəɹˈeɪʃən/
Platzwunde <fem> [med.]
`,`laceration /lˌasəɹˈeɪʃən/
Risswunde <fem>, Rißwunde <fem> [alt]  [med.]
   Synonym: {lacerated wound}

 see: {lacerated wounds}, {lacerations}

`,`laceration /lˌasəɹˈeɪʃən/
Verletzung <fem> [med.]
`]},{src:"liver disease",ref:"Lebererkrankung",display_src:"liver disease",show_ref:!1,definition:[`liver disease /lˈɪvə dɪzˈiːz/
Lebererkrankung <fem>, Leberkrankheit <fem> [med.]
   Synonym: {liver disorder}

 see: {liver diseases}, {liver disorders}

`]},{src:"low blood pressure",ref:"Hypotension",display_src:"low blood pressure",show_ref:!1,definition:[`low blood pressure /lˈəʊ blˈʌd pɹˈɛʃə/
Hypotension <fem>, niedriger Blutdruck [med.]
   Synonym: {hypotension}

`,`low blood pressure /lˈəʊ blˈʌd pɹˈɛʃə/
Hypotonie <fem>, chronisch niedriger Blutdruck [med.]
   Synonym: {hypotension}

`]},{src:"low blood sugar",ref:"Hypoglykämie",display_src:"low blood sugar",show_ref:!1,definition:[`low blood sugar /lˈəʊ blˈʌd ʃˈʊɡə/
Hypoglykämie <fem>, Hypoglycämie <fem>, Unterzuckerung <fem>, starke Absenkung des Blutzuckers [med.]
   Synonyms: {hypoglycaemia}, {hypoglycemia}

`]},{src:"meningitis",ref:"Meningitis",display_src:"meningitis",show_ref:!1,definition:[`meningitis /mˌɛnɪndʒˈaɪtɪs/
Meningitis <fem>, Hirnhautentzündung <fem> [med.]
      "foreign-body-induced meningitis"  - durch Fremdkörper ausgelöste Hirnhautentzündung, Fremdkörpermeningitis
`]},{src:"migraine",ref:"Migräne",display_src:"migraine",show_ref:!1,definition:[`migraine /mˈaɪɡɹeɪn/
Migräne <fem>, Migränekopfschmerz <masc>, Halbseitenkopfschmerz <masc> [med.]
      "migraine with / without aura"  - Migräne mit / ohne Aura
      "migraine without headache"  - Migräne ohne Kopfschmerzen
      "basilar artery migraine"  - Migräne des Basilararteriengebiets
      "Bickerstaff's migraine"  - Migräne des Basilararteriengebiets
   Synonyms: {megrim}, {cluster headache}, {migrainous headache}, {sick headache}, {blind headache}, {bilous headache}, {hemicrania}, {brow pang}

 see: {migraines}, {megrims}, {common migraine}, {classical migraine}, {neurological migraine}, {complicated migraine}, {migrenous infarction}, {ophthalmoplegic migraine}, {Möbius' disease}, {fulgurating migraine}, {erythroprosopalgia}, {acephalic migraine}, {basilar migraine}

`]},{src:"miscarriage",ref:"Fehlgeburt",display_src:"miscarriage",show_ref:!1,definition:[`miscarriage /mɪskˈaɹɪdʒ/
Fehlgeburt <fem> [med.]
      "have/suffer a miscarriage/abortion"  - eine Fehlgeburt haben
   Synonym: {abortion}

 see: {accidental abortion}, {imminent abortion}, {induced abortion}, {late abortion}, {complete abortion}, {missed abortion}, {miscarry}, {abort}

`,`miscarriage /mɪskˈaɹɪdʒ/
Misslingen <neut>, Fehlleitung <fem>
`]},{src:"multiple sclerosis",ref:"multiple",display_src:"multiple sclerosis",show_ref:!1,definition:[`multiple sclerosis /mˌʌltɪpəl skləɹˈəʊsɪs/ (MS /ˌɛmˈɛs/)
multiple SkleroseMS,  /ˌɛmˈɛs/
   Synonyms: {polysclerosis}, {multilocular sclerosis}, {disseminated sclerosis}, {diffuse sclerosis}, {cerebrospinal sclerosis}, {insular sclerosis}

 see: {sclerosis}, {hardening}, {arteriosclerosis}, {arteriosclerotic vascular disease}, {vascular sclerosis}, {aortic sclerosis}, {bulbar sclerosis}, {otosclerosis}, {otospongiosis}, {sclerema}, {atrophic scarring of the cerebral convulsions}, {sclerogyria}, {neurosclerosis}, {inosclerosis}, {pyosclerosis}, {general sclerosis}, {motor neurone disease}, {Charcot's disease}, {Charcot's syndrome}, {Lou Gehrig's disease}, {Pllizaeus-Merzbacher disease}, {Baló's disease}, {concentric periaxial leucoencephalitis}, {demyelinating encephalopathy}, {medial ateriosclerosis}, {posterolateral sclerosis}, {Lichtheim's syndrome}, {Putnam-Dana syndrome}, {Madonna finger}, {systemic sclerosis}, {tuberous sclerosis}, {epiloia}, {Bourneville's disease}

`]},{src:"neuritis",ref:"Neuritis",display_src:"neuritis",show_ref:!1,definition:[`neuritis /njuːɹˈaɪtɪs/
Neuritis <fem>, Nervenentzündung <fem> [med.]
`]},{src:"nodules",ref:"Drusen",display_src:"nodules",show_ref:!1,definition:[`nodules /nˈɒdjuːlz/
Drusen <pl>, Geoden <pl>
   Synonyms: {geodes}, {druses}, {voughs}, {vugs}, {pockets}, {corbonds}, {loches}, {potato stones}

 see: {geode}, {druse}, {vough}, {vug}, {pocket}, {nodule}, {corbond}, {loch}, {potato stone}

`,`nodules /nˈɒdjuːlz/
Knötchen <pl>, Noduli <pl>, Papeln <pl>, Papuli <pl>, Tuberkel <pl>
   Synonyms: {noduluses}, {papules}, {papulas}, {tubercles}, {tuberculi}

 see: {nodule}, {nodulus}, {papule}, {papula}, {tubercle}, {tuberculum}, {Dürck's node}

`,`nodules /nˈɒdjuːlz/
Knötchen <pl>
 see: {nodule}

`,`nodules /nˈɒdjuːlz/
Knollen <pl>
 see: {nodule}

`,`nodules /nˈɒdjuːlz/
Knollen <pl>
   Synonyms: {knots}, {lumps}, {clods}

 see: {knot}, {lump}, {clod}, {nodule}

`]},{src:"overdose",ref:"Überdosis",display_src:"overdose",show_ref:!1,definition:[`overdose /ˈəʊvədˌəʊs/
Überdosis <fem>, Überdosierung <fem>
   Synonym: {overdosage}

`,`overdose /ˈəʊvədˌəʊs/ <v>
eine Überdosis nehmen, eine zu starke Dosis nehmen, sich den goldenen Schuss setzen [slang]
   Synonym: {o.d.}

 see: {overdosing}, {overdosed}, {overdoses}, {overdosed}

`,`overdose /ˈəʊvədˌəʊs/ <v>
überdosieren <v, trans>
   Synonym: {take/give too large a dose of …}

 see: {overdosing}, {taking/giving too large a dose of …}, {overdosed}, {taken/given too large a dose of …}

`]},{src:"pancreatitis",ref:"Pankreatitis",display_src:"pancreatitis",show_ref:!1,definition:[`pancreatitis /pˌaŋkɹiːˈeɪtˈaɪtɪs/
Pankreatitis <fem>, Bauchspeicheldrüsenentzündung <fem>, Entzündung der Bauchspeicheldrüse [med.]
   Synonym: {inflammation of the pancreas}

 see: {acute pancreatitis}

`]},{src:"pericarditis",ref:"Perikarditis",display_src:"pericarditis",show_ref:!1,definition:[`pericarditis /pˌɛɹɪkɑːdˈaɪtɪs/
Perikarditis <fem>, Entzündung des Herzbeutels [med.]
 see: {constrictive pericarditis}, {armoured heart}, {bony heart}

`]},{src:"plaque",ref:"Tafel",display_src:"plaque",show_ref:!1,definition:[`plaque /plˈak/
Tafel <fem>, Schild <neut>, Plakette <fem>
 see: {plaques}, {brass plaque}, {stone plaque}

`,`plaque /plˈak/
 [dental] Zahnbelag <masc>, Plaque <masc> [med.]
   Synonyms: {dental film}, {tooth/dental deposit}

`,`plaque /plˈak/
Plakette <fem>
`]},{src:"pleural effusion",ref:"Pleuraerguss",display_src:"pleural effusion",show_ref:!1,definition:[`pleural effusion /plˈɜːɹəl ɪfjˈuːʒən/
Pleuraerguss <masc> [med.]
      "organized pleural effusion"  - organisierter Pleuraerguss
`]},{src:"pneumonia",ref:"Lungenentzündung",display_src:"pneumonia",show_ref:!1,definition:[`pneumonia /njuːmˈəʊniə/
Lungenentzündung <fem>, Pneumonie <fem> [med.]
 see: {aspiration pneumonia}, {fungal pneumonia}, {hypostatic pneumonia}, {inhalation pneumonia}

`]},{src:"pneumothorax",ref:"Pneumothorax",display_src:"pneumothorax",show_ref:!1,definition:[`pneumothorax /njˈuːməθˌɔːɹaks/
Pneumothorax <masc>, Luftansammlung im Brustfellraum [med.]
      "induced/artificial pneumothorax"  - künstlicher Pneumothorax
   Synonyms: {pneumatothorax}, {aeropleura}

 see: {extrapleural pneumothorax}, {open pneumothorax}, {therapeutic pneumothorax}, {seropneumothorax}

`]},{src:"pregnancy",ref:"Schwangerschaft",display_src:"pregnancy",show_ref:!1,definition:[`pregnancy /pɹˈɛɡnənsi/
Schwangerschaft <fem>, Gravidität <fem> [med.]
      "high-risk pregnancy"  - Risikoschwangerschaft
      "full-term pregnancy"  - Terminschwangerschaft
      "the use of drugs during/in pregnancy and lactation"  - der Einsatz von Medikamenten in der Schwangerschaft und der Stillzeit
   Synonyms: {childbearing}, {gestation}, {gravidity}

 see: {pregnancies}, {abdominal pregnancy}, {biochemical pregnancy}, {chemical pregnancy}, {tubal pregnancy}, {single pregnancy}, {monocyesis}, {ectopic pregnancy}, {eccysis}, {multiple pregnancy}, {twin pregnancy}, {several pregnancies}, {much childbearing}, {unwanted pregnancy}, {during pregnancy}, {during childbearing}

`]},{src:"pulmonary embolism",ref:"Lungenembolie",display_src:"pulmonary embolism",show_ref:!1,definition:[`pulmonary embolism /pˈʌlmənəɹi ˈɛmbəʊlˌɪzəm/
Lungenembolie <fem> [med.] LE,  /lˈə/
   Synonym: {pulmonary embolus}

`]},{src:"puncture",ref:"Durchschlagen",display_src:"puncture",show_ref:!1,definition:[`puncture /pˈʌŋktʃə/
Durchschlagen <neut>, Durchschlag <masc> [electr.]
         Note: von Strom durch einen Isolator
   Synonym: {disruptive breakdown}

`,`puncture /pˈʌŋktʃə/
Einstich <masc>, Einstichstelle <fem>
   Synonym: {prick}

 see: {punctures}, {pricks}

`,`puncture /pˈʌŋktʃə/
Punktion <fem> [med.]
   Synonym: {tap}

 see: {punctures}, {taps}, {exploratory puncture}

`]},{src:"pyelonephritis",ref:"Pyelonephritis",display_src:"pyelonephritis",show_ref:!1,definition:[`pyelonephritis /pˌaɪɪləʊnfɹˈaɪtɪs/
Pyelonephritis <fem> [med.]
`]},{src:"rabies",ref:"Tollwut",display_src:"rabies",show_ref:!1,definition:[`rabies /ɹˈeɪbiz/
Tollwut <fem> [med.]  [zool.]
   Synonyms: {rage}, {dumb-madness}, {hydrophobia}, {lupomania}, {cynolyssa}, {lyssa}

 see: {be rabid}

`]},{src:"retinal detachment",ref:"Netzhautablösung",display_src:"retinal detachment",show_ref:!1,definition:[`retinal detachment /ɹˈɛtɪnəl dɪtˈatʃmənt/
Netzhautablösung <fem>, Netzhautabhebung <fem> [med.]
   Synonym: {detachment/separation of the retina}

`]},{src:"scar",ref:"Narbe",display_src:"scar",show_ref:!1,definition:[`scar /skˈɑː/
Narbe <fem> [med.]
      "a 2cm scar on my/his/her forearm"  - eine 2 cm lange Narbe am Unterarm
      "leave a scar"  - eine Narbe hinterlassen
      "That burn will leave an ugly scar."  - Diese Brandwunde wird eine hässliche Narbe hinterlassen.
   Synonyms: {cicatrix}, {cicatrice}

 see: {scars}, {cicatrices}, {vaccination scar}, {vaccination mark}

`]},{src:"scratch",ref:"den",display_src:"scratch",show_ref:!1,definition:[`scratch /skɹˈatʃ/ <v>
den weißen Spielballs beim Billard versenken <v>
`,`scratch /skɹˈatʃ/
Gekritzel <neut>, Kratzer <masc>, Schramme <fem>
`,`scratch /skɹˈatʃ/
Kratzer <masc>, Schramme <fem>
   Synonym: {scrape}

 see: {scratches}, {scrapes}

`,`scratch /skɹˈatʃ/
Rutschstreifen <masc>
   Synonyms: {stria}, {furrow}

`,`scratch /skɹˈatʃ/ <v>
kratzen <v, trans>
 see: {scratching}, {scratched}, {scratches}, {scratched}

`,`scratch /skɹˈatʃ/ <v>
scharren <v, intr> [mit etw.]
 see: {scratching}, {scratched}

         Note: with sth.
`]},{src:"sleep apnea",ref:"",display_src:"sleep apnea",show_ref:!1,definition:[`sleep apnea /slˈiːp ɐpnˈiə/
 [Am.] Schlafapnoe, Schlafapnoe-Syndrom <neut> [med.] SAS,  /sˈas/
   Synonyms: {sleep apnoea}, {sleep apnoea syndrome}, {sleep apnea syndrome}

`]},{src:"stenosis",ref:"Verengung",display_src:"stenosis",show_ref:!1,definition:[`stenosis /stɛnˈəʊsɪs/
Verengung <fem>, Verengerung <fem> [selten] , Enge <fem>, Striktur <fem>, Stenose <fem> [med.]
      "aortic valve stenosis"  - Aortenklappenstenose, valvuläre Aortenstenose
      "stenosis of the common bile duct"  - Choledochus-Stenose
      "urethral meatal stenosis"  - Harnröhrenöffnungsverengung
      "stenosis of the heart valve"  - Stenose der Herzklappe, Verengung der Herzklappe
      "stenosis of the rectum"  - Mastdarmverengung, Rektumstenose, Proktostenose
      "stenosis of the pulmonary valve"  - Pulmonalklappenstenose, Pulmonalstenose, Pulmonalisverengung
      "nasolacrimal duct stenosis"  - Tränengangeinengung, Tränengangverengung, Ausführungsgangverengung, Tränengangstenose
   Synonyms: {narrowing}, {stricture}, {stegnosis}

 see: {aortic stenosis}, {urethral stenosis}, {urethrostenosis}, {urethral stricture}, {pyloric stenosis}, {pylorostenosis}, {rectostenosis}, {sclerostenosis}, {bridle stricure}, {dacryocystorhinostenosis}, {dacryostenosis}, {stenochoria}, {duodenal stenosis}

`]},{src:"stomach bug",ref:"",display_src:"stomach bug",show_ref:!1,definition:[`stomach bug /stˈʌmək bˈʌɡ/
 [coll.] Magen-Darm-Infektion <fem>, Magen-Darm-Infekt <masc>
   Synonyms: {tummy bug}, {intestinal bug}

 see: {contagious disease}, {communicable disease}, {infectious disease}, {infection}, {bug}, {contagious diseases}, {communicable diseases}, {infectious diseases}, {infections}, {bugs}, {ecdemic infection}, {introduced infection}, {endemic infection}, {influenzal infection}, {flu bug}, {latent infection}

`]},{src:"stomach ulcer",ref:"Magengeschwür",display_src:"stomach ulcer",show_ref:!1,definition:[`stomach ulcer /stˈʌmək ˈʌlsə/
Magengeschwür <neut>, Magenulkus <masc> [med.]
         Note: Ulcus ventriculi
      "active stomach ulcer"  - aktives Magengeschwür
      "penetrating stomach ulcer"  - durchwanderndes Magengeschwür, penetrierendes Magengeschwür
      "perforating stomach ulcer"  - perforierendes Magengeschwür
   Synonyms: {gastric ulcer}, {peptic ulcer}, {gastrohelcoma}

 see: {stomach ulcers}, {gastric ulcers}, {peptic ulcers}, {bleeding gastic ulcer}, {Curling's ulcer}, {Culring's stess ulcer}, {Cushing's ulcer}, {Cushing's stress ulcer}

`]},{src:"strain",ref:"Anspannung",display_src:"strain",show_ref:!1,definition:[`strain /stɹˈeɪn/
Anspannung <fem>, Anstrengung <fem>, Kraftaufwand <fem>
 see: {strains}, {eyestrain}

`,`strain /stɹˈeɪn/
 [fig.] Anstrengung <fem>
         Note: für jdn., Strapaze <fem>
         Note: für jdn., Überanstrengung ([+ gen]) <fem>, Belastung <fem> [nervliche, finanzielle]
         Note: für jdn., Last <fem> [übtr.]
      "put/place a strain on sb."  - für jdn. eine Belastung sein/darstellen
      "be a strain on sb.'s nerves"  - jdn. Nerven kosten
      "put/place a great strain on sb./sth."  - jdn./etw. stark beanspruchen/belasten
      "be under strain"  - mitgenommen sein, mit den Nerven fertig sein
      "It's a big/huge strain."  - Das nimmt einen ganz schön mit.
      "Pregnancy and childbirth places a great strain on the pelvic floor."  - Durch Schwangerschaft und Geburt wird der Beckenboden stark beansprucht/belastet.
      "Max begins to feel the strain of responsibility."  - Max spürt langsam die Last der Verantwortung.
         Note: on sb.
`,`strain /stɹˈeɪn/
Art <fem>, Linie <fem>, Richtung <fem>, Strömung <fem> [übtr.]
      "a new strain/strand of prejudice"  - eine neue Art von Vorurteil
      "a new strain/strand of pop music"  - eine neue Art/Richtung von Popmusik
      "strains of arguments"  - Argumentationslinien
      "strains of research"  - Forschungsrichtungen
      "strains of opinion"  - inhaltliche Ausrichtungen, inhaltliche Positionen, Denkrichtungen
   Synonyms: {line}, {strand}

`,`strain /stɹˈeɪn/
Beanspruchung <fem>, Spannung <fem>, Zug <masc>
`,`strain /stɹˈeɪn/
Deformation <fem>, Verzerrung <fem>
`,`strain /stɹˈeɪn/
Dehnung <fem>, Verdehnung <fem>, Spannung <fem> [verformende]
`,`strain /stɹˈeɪn/
Hang <masc>, Ader <fem>, Veranlagung <fem> [psych.]
      "There is a strain of snobbery in her."  - Sie hat einen Hang zur Blasiertheit.
      "There is a strain of schizophrenia in my family."  - In meiner Familie gibt es eine Veranlagung zur Schizophrenie.
   Synonym: {streak}

`,`strain /stɹˈeɪn/
Stamm von Mikroorganismen, mikrobieller Stamm <masc> [biol.]
      "strain of bacteria"  - Bakterienstamm
      "highly pathogenic / low pathogenic strain"  - hochpathogener / niedrigpathogener Stamm
   Synonym: {microbial strain}

 see: {microbial strains}, {strains}, {outbreak strain}, {epidemic strain}, {bacterial strain}, {pathogenic strain}, {vaccine strain}, {fungal strain}, {resistant strain}

`,`strain /stɹˈeɪn/
Zerrung <fem> [med.]
         Note: eines Muskels usw.
 see: {strains}, {groin strain}

         Note: of a muscle etc.
`,`strain /stɹˈeɪn/ <v>
anstrengen, anspannen <v, trans>
      "strain every nerve"  - alle Kräfte aufbieten
 see: {straining}, {strained}, {strains}, {strained}

`,`strain /stɹˈeɪn/ <v>
pürieren <v, trans> [cook.]
   Synonyms: {puree}, {purée}

 see: {pureeing}, {straining}, {pureed}, {strained}

`,`strain /stɹˈeɪn/ <v>
strapazieren [Nerven] , beanspruchen <v, trans>
 see: {straining}, {strained}

`]},{src:"strep",ref:"Streptokokkus",display_src:"strep",show_ref:!1,definition:[`strep /stɹˈɛp/
Streptokokkus <masc>, Streptococcus <masc>
         Note: Bakterienart
      "group B streptococcal infections"  - Infektionen durch Streptokokken der Gruppe B
   Synonym: {streptococcus}

 see: {streptococci}, {streps}, {strep throat}

`]},{src:"stretches",ref:"Strecken",display_src:"stretches",show_ref:!1,definition:[`stretches /stɹˈɛtʃɪz/
Strecken <pl>, Stücke <pl>, Abschnitte <pl>, Ausdehnungen <pl>
      "for long stretches"  - über weite Strecken (hin)
 see: {stretch}

`,`stretches /stɹˈɛtʃɪz/
dehnt, streckt, streckt aus, breitet aus
 see: {stretch}, {stretching}, {stretched}, {stretched}

`,`stretches /stɹˈɛtʃɪz/
dehnt sich, streckt sich
 see: {stretch}, {stretching}, {stretched}, {stretched}

`,`stretches /stɹˈɛtʃɪz/
erstreckt sich
 see: {stretch}, {stretching}, {stretched}, {stretched}

`]},{src:"stroke",ref:"Anschlag",display_src:"stroke",show_ref:!1,definition:[`stroke /stɹˈəʊk/
Anschlag <masc>
         Note: Schreibmaschine
      "180 strokes a minute"  - 180 Anschläge pro Minute
 see: {strokes}

         Note: typewriter
`,`stroke /stɹˈəʊk/
Anschlag <masc> [mus.]
         Note: Gitarre
 see: {free stroke}, {rest stroke}

         Note: guitar
`,`stroke /stɹˈəʊk/
Aphasie <fem>, Sprachstörung <fem> [med.]
   Synonym: {aphasia}

 see: {receptive aphasia}, {fluent aphasia}, {sensory aphasia}

`,`stroke /stɹˈəʊk/
Hub <masc> [auto]
         Note: eines Kolbens
 see: {strokes}

         Note: of a piston
`,`stroke /stɹˈəʊk/
Hub <masc>
   Synonym: {upstroke}

 see: {upstrokes}, {strokes}

`,`stroke /stɹˈəʊk/
Schlag <masc>, Hieb <masc> [mil.]
         Note: mit einem Gegenstand
      "He cried out at each stroke of the whip."  - Er schrie bei jedem Peitschenhieb auf.
      "The punishment was ten strokes of the cane."  - Die Bestrafung bestand aus zehn Stockschlägen.
   Synonym: {dint}

 see: {strokes}, {dints}

`,`stroke /stɹˈəʊk/
Schlag <masc> [sport]
         Note: Schlagsport
      "She won the golf competition by four strokes."  - Sie gewann das Golfturnier mit vier Schlägen.
 see: {strokes}, {overhead stroke}

         Note: stroke sports
`,`stroke /stɹˈəʊk/
 [apoplectic] Schlaganfall <masc>, Gehirnschlag <masc>, Hirnschlag <masc>, Hirninfarkt <masc>, Gehirninfarkt <masc>, Schlagfluss <masc>, zerebrale Apoplexie <fem>, Apoplex <masc> [ugs.] , apoplektischer Insult <masc> [med.]
         Note: Apoplexia cerebri
   Synonyms: {cerebrovascular accident}, {cerebral apoplexy}, {cerebral infarction}, {cerebral infarct}

 see: {strokes}, {cerebrovascular accidents}, {cerebral apoplexies}, {cerebral infarctions}, {cerebral infarcts}, {strokelet}, {acute stroke}, {bulbar apoplexy}, {pseudoapoplexy}

`,`stroke /stɹˈəʊk/
Streich <masc>, Schlag <masc>, Strich <masc>
`,`stroke /stɹˈəʊk/
Zug <masc>
         Note: beim Schwimmen
`]},{src:"submersion",ref:"Untertauchen",display_src:"submersion",show_ref:!1,definition:[`submersion /səbmˈɜːʃən/
Untertauchen <neut>, Eintauchen <neut>
   Synonyms: {submergence}, {immersion}

`]},{src:"substance abuse",ref:"Drogenmissbrauch",display_src:"substance abuse",show_ref:!1,definition:[`substance abuse /sˈʌbstəns ɐbjˈuːs/
Drogenmissbrauch <masc>, Suchtmittelmissbrauch <masc>, Missbrauch von Suchtmitteln
`]},{src:"suicidal",ref:"",display_src:"suicidal",show_ref:!1,definition:[`suicidal /sˌuːɪsˈaɪdəl/
 [potentially] selbstmordgefährdet, suizidgefährdet <adj> [psych.]
 see: {people at risk of (committing) suicide}

`,`suicidal /sˌuːɪsˈaɪdəl/
selbstmörderisch <adj>
`]},{src:"tension",ref:"Nervosität",display_src:"tension",show_ref:!1,definition:[`tension /tˈɛnʃən/
Nervosität <fem>
   Synonym: {tenseness}

`,`tension /tˈɛnʃən/
Spannung <fem>, Tension <fem> [phys.]
 see: {tensions}

`,`tension /tˈɛnʃən/
Spannungsverhältnis <neut>
      "the tension between capitalism and democracy"  - das Spannungsverhältnis zwischen Kapitalismus und Demokratie
   Synonym: {strained relationship}

 see: {tensions}, {strained relationships}

`,`tension /tˈɛnʃən/
Zugspannung <fem>, Zug <masc>
         Note: Mechanik
 see: {under tension}

         Note: mechanics
`,`tension /tˈɛnʃən/
gespanntes Verhältnis <neut>, Spannung <fem> [pol.]  [soc.]
         Note: zwischen jdm.
   Synonym: {strained relationship}

 see: {international tensions}

         Note: between sb.
`]},{src:"tetanus",ref:"Tetanus",display_src:"tetanus",show_ref:!1,definition:[`tetanus /tˈɛtənəs/
Tetanus <masc>, Wundstarrkrampf <masc> [med.]
      "Have you been vaccinated against tetanus?"  - Sind Sie gegen Wundstarrkrampf geimpft?
   Synonym: {lockjaw}

`]},{src:"thrush",ref:"Kandidose",display_src:"thrush",show_ref:!1,definition:[`thrush /θɹˈʌʃ/
Kandidose <fem>, Pilzkrankheit <fem>, Infektionskrankheit durch Pilze [med.]
   Synonyms: {candidiasis}, {yeast infection}

`,`thrush /θɹˈʌʃ/
Schwämmchen <neut>, Soor <masc> [med.]
`,`thrush /θɹˈʌʃ/
Strahlfäule <fem>
`]},{src:"tinnitus",ref:"Tinnitus",display_src:"tinnitus",show_ref:!1,definition:[`tinnitus /tˈɪnɪtəs/
Tinnitus <masc>, Ohrensausen <neut>, Ohrenklingen <neut>, Ohrgeräusche <pl> [med.]
   Synonym: {ringing in the ears}

`]},{src:"transient ischemic attack",ref:"vorübergehende",display_src:"transient ischemic attack",show_ref:!1,definition:[`transient ischemic attack /tɹˈansiənt ɪskˈiːmɪk ɐtˈak/ (TIA /tˈiə/)
vorübergehende Durchblutungsstörung
 see: {circulatory disorder}, {circulatory disorders}

`]},{src:"trauma",ref:"psychisches",display_src:"trauma",show_ref:!1,definition:[`trauma /tɹˈɔːmə/
psychisches Trauma, Psychotrauma <neut>, seelisches Trauma <neut>, seelische Erschütterung <fem>, Trauma <neut> [psych.]
   Synonyms: {psychic trauma}, {psychotrauma}

`,`trauma /tɹˈɔːmə/
Trauma <neut> [med.]
         Note: organische Folgen äußerer Gewalteinwirkung
      "blunt force trauma"  - stumpfes Trauma
      "non-penetrating trauma"  - stumpfes Trauma
 see: {traumas}, {abdominal trauma}, {acoustic trauma}, {auditory trauma}, {penetrating trauma}, {renal injury}, {blunt trauma}, {closed injury}

`]},{src:"tumor",ref:"",display_src:"tumor",show_ref:!1,definition:[`tumor /tjˈuːmə/
 [Am.] Geschwulst <fem>, Gewächs <neut>, Wucherung <fem>, Tumor <masc>, Neoplasma <neut> [med.]
   Synonyms: {growth}, {tumour}, {neoplasm}, {emphyma}

 see: {growths}, {tumours}, {tumors}, {neoplasms}, {emphymas}, {bladder tumour}, {bladder tumor}, {vesical tumour}, {vesical tumor}, {benign tumor}

`]},{src:"ulcer",ref:"Geschwür",display_src:"ulcer",show_ref:!1,definition:[`ulcer /ˈʌlsə/
Geschwür <neut>, Ulkus <neut> [med.]
      "ulcer of the leg"  - Unterschenkelgeschwür (Ulcus cruris)
      "extension of an ulcer"  - Ausläufer eines Geschwürs
   Synonym: {ulcus}

 see: {ulcers}, {ulcuses}, {contact ulcer}, {kissing ulcer}, {festering ulcer}

`]},{src:"virus",ref:"Virus",display_src:"virus",show_ref:!1,definition:[`virus /vˈaɪɹəs/
Virus <neut>, Virus <masc> [ugs.]  [med.]
      "adeno-associated virus"  - adeno-assoziiertes Virus
      "croup-associated virus"  - Croup-assoziiertes Virus
      "Epstein-Barr virus"  - Epstein-Barr-Virus
      "human pathogenic viruses"  - humanpathogene Viren
      "human cytomegaly virus"  - humanes Cytomegalie-Virus
      "cancer-producing virus"  - krebsauslösendes Virus, onkogenes Virus
      "filter-passing virus"  - nicht filtrierbares Virus
      "non-filterable virus"  - nicht filtrierbares Virus
      "non-filtrable virus"  - nicht filtrierbares Virus
      "respiratory syncitial virus"  - respiratorisches Synzytial-Virus, RS-Virus
      "varicella zoster virus"  - Varizella-Zoster-Virus
 see: {viruses}, {attenuated virus}, {amphotropic virus}, {avian virus}, {bacterial virus}, {dermotropic virus}, {DNA viruses}, {EB virus}, {human papillomaviruses}, {vaccination virus}, {karyotropic virus}, {oncogenic virus}, {slow virus}, {mesogenic virus}, {neurotropic virus}, {retrovirus}, {syncytial virus}, {animal virus}, {wild virus}, {live virus}

`]},{src:"wound",ref:"",display_src:"wound",show_ref:!1,definition:[`wound /wˈuːnd/
 [fig.] Blessur <fem> [med.]  [übtr.]
   Synonym: {bruise}

`,`wound /wˈuːnd/
Kränkung <fem>
`,`wound /wˈuːnd/
Wunde <fem> [med.]
      "dress a wound"  - eine Wunde verbinden
      "leave a wound unattended"  - eine Wunde nicht versorgen
      "rub salt in the wound"  - Salz in die Wunde reiben, die Finger auf die Wunde legen
      "turn the knife in the wound"  - Salz in die Wunde reiben, die Finger auf die Wunde legen
      "inflict a wound on sb."  - jdm. eine Wunde zufügen
      "give sb. a wound"  - jdm. eine Wunde zufügen
 see: {wounds}, {papercut wound}

`,`wind /wˈɪnd/ (wound /wˈuːnd/ <>, wound /wˈuːnd/ <>) <v>
aufziehen <v, trans>
         Note: Uhr
 see: {winding}, {wound}

         Note: up
         Note: clock
`,`wound /wˈuːnd/
aufgezogen
 see: {wind}, {winding}

         Note: up
`,`wind sth. /wˈɪnd ˌɛstˌiːˈeɪtʃ/ (wound /wˈuːnd/ <>, wound /wˈuːnd/ <>)
etw. drehen, kurbeln, spulen <v, trans>
 see: {winding}, {wound}

`,`wound /wˈuːnd/
gedreht, gekurbelt, gespult
 see: {wind sth.}, {winding}

`,`wound /wˈuːnd/
gehaspelt, geweift
   Synonym: {reeled}

 see: {reel}, {wind}, {reeling}, {winding}

`,`wind /wˈɪnd/ (wound /wˈuːnd/ <>, wound /wˈuːnd/ <>) <v>
wickeln <v, trans>
         Note: um
 see: {winding}, {wound}, {winds}, {wound}

         Note: round
`,`wound /wˈuːnd/
gewickelt
 see: {wind}, {winding}, {winds}, {wound}

`,`wound /wˈuːnd/
wickelte
 see: {wind}, {winding}, {wound}, {winds}

`,`wind /wˈɪnd/ (wound /wˈuːnd/ <>, wound /wˈuːnd/ <>) <v>
winden [sich] , schlingen, schlängeln <v, intr>
      "it winds itself"  - es windet sich
      "it would wind itself"  - es wände sich
      "wind itself round sth."  - sich um etw. winden, sich um etw. schlingen
 see: {winding}, {wound}, {coil itself round sth.}

`,`wound /wˈuːnd/
gewunden
      "it wound itself"  - es wand sich
      "it has/had wound itself"  - es hat/hatte sich gewunden
 see: {wind}, {winding}, {coil itself round sth.}

`]},{src:"abdominal",ref:"Unterleibs…,",display_src:"abdominal",show_ref:!1,definition:[`abdominal /abdˈɒmɪnəl/
Unterleibs…, Bauch…, abdominal <adj> [anat.]
`]},{src:"abnormal",ref:"abweichend,",display_src:"abnormal",show_ref:!1,definition:[`abnormal /ɐbnˈɔːməl/
abweichend, abnorm, abnormal, anormal, anomal <adj>
   Synonyms: {aberrant}, {anomalous}

 see: {aberrant behaviour}

`,`abnormal /ɐbnˈɔːməl/
ungewöhnlich, untypisch <adj>
         Note: Wetter
         Note: weather
`,`abnormal /ɐbnˈɔːməl/
unregelmäßig <adj>
      "abnormal heart rhythm"  - unregelmäßiger Herzschlag
`]},{src:"acute",ref:"Akut",display_src:"acute",show_ref:!1,definition:[`acute /ɐkjˈuːt/ (´)
Akut <masc>, Akut-Zeichen <neut> [print] ´
      "The word 'côte' has no acute on the 'e'."  - Das Wort 'côte' hat keinen Akut auf dem 'e'.
   Synonym: {acute accent}

`,`acute /ɐkjˈuːt/
akut, akut auftretend <adj> [med.]
 see: {acute pain}, {acute symptoms}

`,`acute /ɐkjˈuːt/
intensiv, scharf <adj>
`,`acute /ɐkjˈuːt/
scharfsinnig, scharfsichtig, scharf <adj>, mit scharfem Blick
         Note: nachgestellt
      "an acute observation"  - eine scharfe Beobachtung
      "a politically acute film"  - ein politisch scharf durchdachter Film
   Synonyms: {discerning}, {penetrating}, {penetrative}

`]},{src:"aortic",ref:"aortal",display_src:"aortic",show_ref:!1,definition:[`aortic /eɪˈɔːtɪk/
aortal <adj> [anat.]
`]},{src:"bacterial",ref:"bakteriell",display_src:"bacterial",show_ref:!1,definition:[`bacterial /baktˈiəɹiəl/
bakteriell <adj>
`]},{src:"chronic",ref:"chronisch",display_src:"chronic",show_ref:!1,definition:[`chronic /kɹˈɒnɪk/
chronisch <adj> [med.]
      "a chronic disease"  - eine chronische Krankheit
`,`chronic /kɹˈɒnɪk/
dauernd, beständig, ständig <adj>
`]},{src:"colorectal",ref:"kolorektal",display_src:"colorectal",show_ref:!1,definition:[`colorectal /kˈʌləɹˌɛktəl/
kolorektal <adj>, Dick- und Mastdarm betreffend [med.]
`]},{src:"concerning",ref:"betreffend,",display_src:"concerning",show_ref:!1,definition:[`concerning /kənsˈɜːnɪŋ/
betreffend, angehend, anbelangend, anbetreffend
 see: {concern sth.}, {concerned}, {it concerns}, {it concerned}, {To whom it may concern}

`,`concerning /kənsˈɜːnɪŋ/
beunruhigend, Sorgen machend, bekümmernd
   Synonyms: {worrying}, {being concerned}

 see: {worry sb.}, {concern sb.}, {be concerned at sth.}, {worried}, {concerned}, {been concerned}, {There is no need to worry her unnecessarily.}, {The roof concerns me because eventually it will fall in.}

`,`concerning /kənsˈɜːnɪŋ/
bezüglichbzgl.,  /bˌiːzˌɛddʒˌiːˈɛl/ , betreffendbetr.,  /bɪtˈə/ , betreffs ([+ gen]) <prep> [adm.]  [veraltet]
      "complex issues including those concerning demography and sustainability"  - komplexe Fragen, darunter auch die bezüglich Demographie und Nachhaltigkeit
   Synonyms: {regarding}, {anent}

 see: {concerning this}

`,`concerning /kənsˈɜːnɪŋ/
gehend um, sich handelnd um, sich drehend um
   Synonyms: {being about}, {being a matter of}, {being at issue/stake}

 see: {be about sth.}, {concern sth.}, {be a matter of sth.}, {be at issue/stake}, {been about}, {concerned}, {been a matter of}, {been at issue/stake}, {The question is whether …}, {It is about security and fundamental rights.}, {For them it is a matter of not being recognized.}, {What is at issue now is not only an investigation into these events, but also …}, {It's a matter of life and death.}, {It's neck or nothing.}, {His life is at stake.}

`,`concerning /kənsˈɜːnɪŋ/ <adj>
beunruhigend, besorgniserregend <adj>
`]},{src:"dental",ref:"Dental",display_src:"dental",show_ref:!1,definition:[`dental /dˈɛntəl/
Dental <masc>, Zahnlaut <masc> [ling.]
`,`dental /dˈɛntəl/
zahnärztlich <adj> [med.]
      "dental treatment unit"  - zahnärztlicher Behandlungsplatz
      "dental chair unit"  - zahnärztlicher Behandlungsplatz
 see: {dental unit}

`,`dental /dˈɛntəl/
dentalmedizinisch, zahnmedizinisch <adj> [med.]
`]},{src:"difficult",ref:"schwierig,",display_src:"difficult",show_ref:!1,definition:[`difficult /dˈɪfɪkəlt/
schwierig, schwer <adj>
      "much more difficult"  - viel schwieriger, viel schwerer
      "difficult to access"  - schwer zugänglich
      "difficult to place"  - schwer vermittelbar
      "difficult of explanation"  - schwer zu erklären
      "difficult to explain"  - schwer zu erklären
      "sb. finds sth. difficult"  - jdm. fällt etw. schwer
      "make sth. difficult for oneself/sb."  - sich/jdm. etw. schwer machen
      "start with the difficult things"  - das Schwierige zuerst tun
      "You make it difficult for me to …"  - Du machst es mir schwer, … zu …
      "Life is difficult for a mother of six."  - Als Mutter von sechs Kindern hat man es schwer.
   Synonym: {hard}

 see: {more difficult}, {harder}, {most difficult}, {hardest}

`,`difficult /dˈɪfɪkəlt/
schwierig, diffizil <adj>
         Note: Person
      "a difficult child"  - ein schwieriges Kind
      "be difficult to deal with"  - schwierig im Umgang sein
   Synonym: {difficile}

`]},{src:"emotional",ref:"emotional,",display_src:"emotional",show_ref:!1,definition:[`emotional /ɪmˈəʊʃənəl/
emotional, seelisch <adj>
`,`emotional /ɪmˈəʊʃənəl/
gefühlsbetont, gefühlvoll <adj>
`,`emotional /ɪmˈəʊʃənəl/
gefühlsmäßig <adj>
`,`emotional /ɪmˈəʊʃənəl/
psychisch <adj>
   Synonym: {psychological}

`,`emotional /ɪmˈəʊʃənəl/
seelisch bedingt <adj>
   Synonym: {psychological}

`]},{src:"fast",ref:"Fasten",display_src:"fast",show_ref:!1,definition:[`fast /fˈast/
Fasten <neut>, Fastenübung <fem> [relig.]  [med.]
         Note: Vorgang
      "when you do a juice fast"  - beim Saftfasten
      "when on a water fast"  - während des Wasserfastens
      "after the three-day fast"  - nach dem dreitägigen Fasten
      "the fasts of Saint Margaret"  - die Fastenübungen der heiligen Margareta
 see: {Advent fast}

         Note: act of fasting
`,`fast /fˈast/
farbecht <adj>
   Synonyms: {colourfast}, {colorfast}

`,`fast /fˈast/ <v>
fasten, hungern <v, intr> [ugs.]  [med.]  [relig.]
 see: {fasting}, {fasted}, {fasts}, {fasted}

`,`fast /fˈast/
fest, schnell, tüchtig <adj>
`,`fast /fˈast/
flott <adj>
   Synonyms: {quick}, {speedy}

`,`fast /fˈast/
lichtstark <adj>
         Note: optisches Instrument
   Synonym: {rapid}

`,`fast /fˈast/
locker <adj>
         Note: Lebensart
`,`fast /fˈast/
locker <adv>
         Note: Lebensart
 see: {live fast}

`,`fast /fˈast/
schnell, rasant <adj>
         Note: Geschwindigkeit
      "as fast as possible"  - so schnell wie möglich
 see: {faster}, {fastest}

         Note: speed
`,`fast /fˈast/
schnell, zügig <adv>
      "Not so fast!"  - Nicht so schnell!
`,`fast /fˈast/ <adj>
schnell <adj>
   Synonyms: {pacey}, {pacy}

`,`Federation Against Software Theft /fˌɛdəɹˈeɪʃən ɐɡˈɛnst sˈɒftweə θˈɛft/ (FAST /fˈast/)
Vereinigung gegen den Diebstahl von Software
`]},{src:"frequent",ref:"häufig",display_src:"frequent",show_ref:!1,definition:[`frequent /fɹˈiːkwənt/
häufig <adj>
      "it's a frequent occurrence"  - es kommt häufig vor
      "it's a frequent practice"  - es ist üblich
 see: {more frequent}, {most frequent}

`,`frequent /fɹˈiːkwənt/
zahlreich <adj>
`]},{src:"improved",ref:"besser",display_src:"improved",show_ref:!1,definition:[`improved /ɪmpɹˈuːvd/
besser geworden, sich verbessert, sich gebessert
      "He improved from third to second rank."  - Er verbesserte sich vom dritten auf den zweiten Platz.
 see: {improve}, {improving}

`,`improved /ɪmpɹˈuːvd/
nachgebessert
      "need to be further improved (draft; regulation)"  - nachgebessert werden müssen (Entwurf; Regelung)
 see: {improve sth.}, {improving}, {improves}, {improved}, {Further improvements need to be made (to a draft; a regulation).}

`,`improved /ɪmpɹˈuːvd/
besserte nach
      "need to be further improved (draft; regulation)"  - nachgebessert werden müssen (Entwurf; Regelung)
 see: {improve sth.}, {improving}, {improved}, {improves}, {Further improvements need to be made (to a draft; a regulation).}

`,`improved /ɪmpɹˈuːvd/
gesteigert, erhöht, erweitert
   Synonym: {enhanced}

 see: {improve sth.}, {enhance sth.}, {improving}, {enhancing}, {improve your performance}, {improve attendance figures}, {improve patient safety}, {enhance the value}

`,`improved /ɪmpɹˈuːvd/
verbessert, besser gemacht
   Synonyms: {made better}, {betterred}, {enhanced}, {ameliorated}, {meliorated}

 see: {make sth. better}, {better sth.}, {improve sth.}, {enhance sth.}, {ameliorate sth.}, {meliorate sth.}, {making better}, {bettering}, {improving}, {enhancing}, {ameliorating}, {meliorating}, {better the working conditions}, {better your chances of winning the championship}, {improve}, {enhance your memory capacity}, {improved service}, {enhanced service}, {That doesn't make things better.}, {That doesn't ameliorate the situation.}

`]},{src:"increased",ref:"angewachsen,",display_src:"increased",show_ref:!1,definition:[`increased /ɪŋkɹˈiːst/
angewachsen, gewachsen, zugenommen
   Synonyms: {grown}, {accumulated}

 see: {grow}, {increase}, {accumulate}, {growing}, {increasing}, {accumulate}

`,`increased /ɪŋkɹˈiːst/
aufgestockt
 see: {increase}, {increasing}

`,`increased /ɪŋkɹˈiːst/
sich erhöht, sich gemehrt
 see: {increase}, {increasing}, {it increases}, {it increased}

`,`increased /ɪŋkɹˈiːst/
sich gehäuft, zahlreicher geworden
   Synonym: {accumulated}

 see: {increase}, {accumulate}, {become more frequent}, {increasing}, {accumulating}, {becoming more frequent}

`,`increased /ɪŋkɹˈiːst/
heraufgesetzt, hochgesetzt
   Synonym: {raised}

 see: {increase}, {raise sth.}, {increasing}, {raising}

`,`increased /ɪŋkɹˈiːst/
vergrößert, vermehrt, gesteigert, erweitert, erhöht
 see: {increase}, {increasing}

`,`increased /ɪŋkɹˈiːst/
zugenommen, gestiegen, angestiegen, erhöht worden, gewachsen, angewachsen, gemehrt
      "it has/had increased"  - es hat/hatte zugenommen, es ist/war gestiegen
 see: {increase}, {increasing}, {it increases}, {it increased}

`]},{src:"infectious",ref:"ansteckend,",display_src:"infectious",show_ref:!1,definition:[`infectious /ɪnfˈɛkʃəs/
ansteckend, übertragbar [von jdm. / auf jdn.] , infektiös <adj> [med.]
         Note: Krankheit
   Synonyms: {contagious}, {communicable}, {transmissible}

 see: {contagious disease}, {noncontagious}

         Note: of a disease
`,`infectious /ɪnfˈɛkʃəs/
ansteckend, infektiös <adj> [med.]
         Note: Krankheitserreger, Patient
   Synonym: {infective}

`,`infectious /ɪnfˈɛkʃəs/
infektiös <adj> [med.]
   Synonym: {infective}

 see: {infectious material}, {uninfectious}

`]},{src:"inflammatory",ref:"aufrührerisch,",display_src:"inflammatory",show_ref:!1,definition:[`inflammatory /ɪnflˈamətəɹi/
aufrührerisch, hetzerisch, Hetz… <adj>
      "use inflammatory language"  - hetzerisch reden
 see: {inflammatory article}, {inflammatory post}, {inflammatory speech}, {incendiary speech}, {rabble-rousing speech}, {inflammatory pamphlet}

`,`inflammatory /ɪnflˈamətəɹi/
entzündlich <adj> [med.]
   Synonym: {phlogistic}

 see: {inflammatory process}

`]},{src:"local",ref:"Einheimischer",display_src:"local",show_ref:!1,definition:[`local /lˈəʊkəl/
Einheimischer <masc> [soc.]
      "locals and tourists"  - Einheimische und Touristen
   Synonyms: {local person}, {local inhabitant}, {local native}, {native of the place}

 see: {local persons}, {local inhabitants}, {local natives}, {locals}, {natives of the place}

`,`local /lˈəʊkəl/
Ortsansässige <masc, fem>, Ortsansässiger
   Synonym: {resident}

 see: {residents}, {locals}, {local residents}

`,`local /lˈəʊkəl/
Stammkneipe <fem>
 see: {locals}

`,`local /lˈəʊkəl/
dortig <adj>
      "for the local circumstances"  - für dortige Verhältnisse
      "know the local situation"  - die dortige Sutuation kennen
 see: {for the conditions there}, {know the situation there}

`,`local /lˈəʊkəl/
lokal, hiesig <adj>
 see: {local scale}

`,`local /lˈəʊkəl/
lokal <adj> [math.]
`,`local /lˈəʊkəl/
örtlich <adj>
 see: {local conditions}

`,`local /lˈəʊkəl/
ortsansässig <adj>
   Synonym: {resident}

`,`local /lˈəʊkəl/
heimatlich <adj>
`]},{src:"long",ref:"geografische",display_src:"long",show_ref:!1,definition:[`longitude /lˈɒndʒɪtjˌuːd/ (long. /lˈɒŋ/)
geografische Länge <fem>
 see: {longitudes}

`,`long /lˈɒŋ/
lang, weit <adj>
 see: {longer}, {longest}, {incredibly long}

`,`long /lˈɒŋ/
lange <adv>
      "How much longer?"  - Wie lange noch?
 see: {long before}

`,`long /lˈɒŋ/
langwierig <adj>
   Synonym: {lengthy}

`]},{src:"major",ref:"Dur",display_src:"major",show_ref:!1,definition:[`major /mˈeɪdʒə/
Dur <neut> [mus.]
         Note: Tongeschlecht
      "piece in F major"  - Stück in F-Dur
 see: {B major}

`,`major /mˈeɪdʒə/
 [Am.] Hauptfach <neut> [stud.]
   Synonyms: {main subject}, {major field of study}

 see: {main subjects}

`,`Major /mˈeɪdʒə/ (Maj. /mˈadʒ/)
 [Br.]  [Am.]  [Can.] Major <masc> [Dt.] Maj.,  /mˈadʒ/ , Major <masc> [Ös.]  [Schw.]  [mil.] Mjr.,  /ˌɛmdʒˌeɪˈɑː/
         Note: Dienstgrad
 see: {majors}

         Note: rank
`,`major /mˈeɪdʒə/
bedeutend, wichtig, groß, größte <adj>
      "a major event"  - ein bedeutendes Ereignis
      "a major contribution"  - ein wichtiger/bedeutender Beitrag
      "the major disaster of the century"  - die größte Katastrophe des Jahrhunderts
      "be a major influence"  - großen Einfluss haben
`,`major /mˈeɪdʒə/
hauptsächlich <adj>, Haupt…
   Synonym: {capital}

`,`major /mˈeɪdʒə/
kapital <adj>
   Synonym: {exceedingly}

`]},{src:"menstrual",ref:"Menstruations…,",display_src:"menstrual",show_ref:!1,definition:[`menstrual /mˈɛnstɹuːəl/
Menstruations…, menstruell <adj> [med.]
 see: {postmenstrual}

`]},{src:"mild",ref:"gelind,",display_src:"mild",show_ref:!1,definition:[`mild /mˈaɪld/
gelind, gelinde <adj> [veraltet]
   Synonyms: {slight}, {light}, {moderate}

 see: {order sth. in favour of a less severe measure}, {Police dogs are a less drastic operational tool than the use of weapons.}

`,`mild /mˈaɪld/
mild, sanft, glimpflich <adj>
 see: {milder}, {mildest}

`,`mild /mˈaɪld/
mild <adj> [cook.]
         Note: Weingeschmack
         Note: wine taste
`]},{src:"much better",ref:"viel",display_src:"much better",show_ref:!1,definition:[`much better /mˈʌtʃ bˈɛtə/
viel besser
 see: {better}

`]},{src:"oral",ref:"Mündliche",display_src:"oral",show_ref:!1,definition:[`oral /ˈɔːɹəl/
Mündliche <neut>, Mündliches
`,`oral /ˈɔːɹəl/
mündliche Prüfung
      "have/take an oral exam"  - eine mündliche Prüfung haben, mündlich geprüft werden
   Synonyms: {oral examination}, {oral exam}, {viva voce}

 see: {examination}, {exam}, {examinations}, {exams}, {deferred exam}, {big examination}, {big exam}, {practical exam}, {practical}, {written examination}, {written exam}, {theory exam}, {mock examination}, {mock exam}, {mock}

`,`oral /ˈɔːɹəl/
mündlich <adj>mdl.,  /ˌɛmdˌiːˈɛl/
   Synonym: {viva-voce}

`,`oral /ˈɔːɹəl/
oral <adj>, Mund…
`]},{src:"orthopedic",ref:"orthopädisch",display_src:"orthopedic",show_ref:!1,definition:[`orthopedic /ˌɔːθəʊpˈiːdɪk/
orthopädisch <adj>
   Synonym: {orthopaedic}

 see: {corrective shoes}, {orthopaedic shoes}, {orthopedic shoes}

`]},{src:"outpatient",ref:"ambulant,",display_src:"outpatient",show_ref:!1,definition:[`outpatient /aʊtpˈeɪʃənt/
ambulant, nichtstationär <adj> [med.]
      "outpatient nursing care"  - ambulante Krankenpflege, nichtstationäre Krankenpflege
      "cardiology outpatient follow-up"  - ambulante kardiologische Weiterbetreuung
      "treat sb. as an outpatient"  - jdn. ambulant behandeln
      "get outpatient treatment"  - ambulant behandelt werden
   Synonyms: {ambulatory}, {non-residential}

 see: {outpatient}, {outpatient treatment}, {community healthcare nursing}, {community nursing}

`,`outpatient /aʊtpˈeɪʃənt/
ambulanter Patient, ambulant behandelter Patient
      "outpatient nursing care"  - ambulante Krankenpflege, nichtstationäre Krankenpflege
      "cardiology outpatient follow-up"  - ambulante kardiologische Weiterbetreuung
      "treat sb. as an outpatient"  - jdn. ambulant behandeln
      "get outpatient treatment"  - ambulant behandelt werden
 see: {ambulatory}, {non-residential}, {outpatient}, {outpatient treatment}, {community healthcare nursing}, {community nursing}

`]},{src:"ovarian",ref:"ovarial",display_src:"ovarian",show_ref:!1,definition:[`ovarian /əʊvˈeəɹiən/
ovarial <adj>, den Eierstock betreffend [med.]
   Synonym: {ovary-related}

`]},{src:"painful",ref:"peinlich,",display_src:"painful",show_ref:!1,definition:[`painful /pˈeɪnfəl/
peinlich, unangenehm <adj>
 see: {painful questions}

`,`painful /pˈeɪnfəl/
schmerzhaft, schmerzend, mit Schmerzen verbunden <adj> [med.]
      "painful feet syndrome"  - Syndrom der brennenden Füße
      "as a result of these painful measures"  - als Ergenis dieser schmerzhaften Maßnahmen
 see: {painful burns}, {painful swallowing}

`,`painful /pˈeɪnfəl/
so schlecht, dass es (schon) weh tut/tat <adj>
         Note: extremely bad
`]},{src:"pelvic",ref:"Becken…",display_src:"pelvic",show_ref:!1,definition:[`pelvic /pˈɛlvɪk/
Becken… [anat.]
`,`pelvic /pˈɛlvɪk/
pelvin <adj>, zum Becken gehörend [med.]
`]},{src:"persistent",ref:"anhaltend,",display_src:"persistent",show_ref:!1,definition:[`persistent /pəsˈɪstənt/
anhaltend, hartnäckig, beständig, ständig <adj>, Dauer…
         Note: Sache
 see: {persistent rain}, {persistent substances}, {persistent cough}, {persistent rumour}, {persistent error}, {persistent demand}

         Note: of a thing
`,`persistent /pəsˈɪstənt/
schwer abbaubar, abbauresistent <adj> [envir.]
   Synonym: {recalcitrant}

`,`persistent /pəsˈɪstənt/
beharrlich, hartnäckig <adj>
         Note: Person
      "be persistent in sth."  - auf etw. beharren, an etw. festhalten
      "in severe or persistent cases of dandruff"  - in schweren oder hartnäckigen Fällen von Schuppenbildung
`,`persistent /pəsˈɪstənt/
nachleuchtend <adj> [electr.]
 see: {persistent screen}, {long persistence screen}

`,`persistent /pəsˈɪstənt/
perennierend, mehrjährig <adj> [bot.]
   Synonym: {perennial}

`,`persistent /pəsˈɪstənt/
persistent, nichtflüchtig <adj> [comp.]
`,`persistent /pəsˈɪstənt/
sesshaft <adj> [mil.]
      "persistent chemical warfare agent"  - sesshafter chemischer Kampfstoff
`]},{src:"physical",ref:"ärztliche",display_src:"physical",show_ref:!1,definition:[`physical /fˈɪzɪkəl/
ärztliche Untersuchung <fem>, medizinische Untersuchung <fem> [med.]
   Synonyms: {medical examination}, {medical}, {check-up}, {checkup}

 see: {medical examinations}, {medicals}, {physicals}, {checkups}, {complete physical}, {complete medical}, {routine physical}, {health screening}, {wellness screening}, {routine health check}, {child health review}, {well-child visit}

`,`physical /fˈɪzɪkəl/
ärztlich <adj>, Gesundheits…
`,`physical /fˈɪzɪkəl/
körperbetont <adj>
         Note: Sport, Gesten
`,`physical /fˈɪzɪkəl/
körperlich, leiblich [veraltend] , physisch <adj> [med.]  [phil.]  [relig.]
      "physical well-being"  - körperliches Wohlbefinden
      "sb.'s physical presence at the office"  - jds. physische Anwesenheit im Büro
   Synonym: {bodily}

 see: {physical activity}, {physical development}, {physical violence}

`,`physical /fˈɪzɪkəl/
organisch <adj>
         Note: Krankheit
`,`physical /fˈɪzɪkəl/
physikalisch <adj>
   Synonym: {… in physics}

 see: {unphysical}, {physical concept}, {experiment of physics}, {fundamental of physics}

`]},{src:"prenatal",ref:"pränatal,",display_src:"prenatal",show_ref:!1,definition:[`prenatal /pɹɪnˈeɪtəl/
pränatal, vorgeburtlich <adj>, vor der Geburt [med.]
         Note: auftretend
   Synonyms: {antenatal}, {preparturient}

 see: {prenatal diagnostics}, {prenatal clinic}, {antenatal clinic}

`]},{src:"regular",ref:"Berufssoldat",display_src:"regular",show_ref:!1,definition:[`regular /ɹˈɛɡjʊlə/
Berufssoldat <masc>, Berufssoldatin <fem> [mil.]
   Synonyms: {professional soldier}, {regular soldier}

 see: {professional soldiers}, {regular soldiers}, {regulars}

`,`regular /ɹˈɛɡjʊlə/
Diamant mittlerer Qualität [techn.]
 see: {diamond}, {diamonds}, {grainer}, {special round}, {fancy stone}, {cape diamond}, {rounded diamond}, {cleft diamond}, {inferior stone}, {carbon diamond}, {black diamond}, {carbonado}, {cloudy diamond}, {fake diamond}

`,`regular /ɹˈɛɡjʊlə/
Stammgast <masc>
   Synonym: {regular guest}

 see: {regulars}

`,`regular /ɹˈɛɡjʊlə/
Stammkunde <masc>, Stammkundin <fem>
   Synonyms: {regular customer}, {faithful customer}

 see: {regular customers}, {regulars}, {faithful customers}

`,`regular /ɹˈɛɡjʊlə/
Stammspieler <masc>, Stammspielerin <fem> [sport]
   Synonym: {regular player}

 see: {regular players}, {regulars}

`,`regular /ɹˈɛɡjʊlə/
geregelt, fest <adj>
      "a regular income"  - ein geregeltes / regelmäßiges / festes Einkommen
      "have regular hours"  - geregelte / feste Arbeitszeiten haben
 see: {regular doctors}

`,`regular /ɹˈɛɡjʊlə/
gleichförmig, gleichmäßig <adj>
         Note: Bewegung
`,`regular /ɹˈɛɡjʊlə/
 [Am.] normal, gewöhnlich <adj>
      "Egg pasta is nutrient-richer than regular pasta."  - Eiernudeln sind nährstoffreicher als normale Nudeln.
      "He's a regular guy."  - Er ist ein ganz normaler Typ.
   Synonym: {normal}

 see: {Normal people don't react that way.}

`,`regular /ɹˈɛɡjʊlə/
regelmäßig <adj>
         Note: in gleichen zeitlichen Abständen
      "a regular heartbeat"  - ein regelmäßiger Herzschlag
      "be a regular occurrence"  - eine regelmäßige Erscheinung sein
      "make regular use of sth."  - etw. regelmäßig benutzen
 see: {regular visits}, {regular payments}, {regular exercise}

         Note: at regular time intervals
`,`regular /ɹˈɛɡjʊlə/
regelmäßig
         Note: geformt/angeordnet, gleichmäßig
         Note: angeordnet, ebenmäßig <adj> [poet.]
      "a regular polygon"  - ein regelmäßiges Vieleck
      "a regular-shaped polygon"  - ein regelmäßiges Vieleck
      "a regular geometric pattern"  - ein regelmäßiges geometrisches Muster
      "a person with regular features"  - eine Person mit regelmäßigen Gesichtszügen
      "be placed at regular intervals"  - in regelmäßigen Abständen aufgestellt sein
   Synonym: {regular-shaped}

`,`regular /ɹˈɛɡjʊlə/
regelmäßig <adj> [ling.]
         Note: gebildet
      "the regular verbs"  - die regelmäßigen Verben
`,`regular /ɹˈɛɡjʊlə/
regelrecht <adj>
   Synonym: {proper}

`,`regular /ɹˈɛɡjʊlə/
regulär, ordnungsgemäß, üblich <adj>
      "the regular price of sth."  - der reguläre Preis von etw.
      "the regular business hours"  - die regulären Geschäftszeiten
      "a regular solid"  - ein regulärer Festkörper
      "the regular procedure"  - das übliche Prozedere
      "the regular rate"  - der übliche Tarif, der Normaltarif
      "the regular working time"  - die Normalarbeitszeit
      "a regular patent application"  - eine ordnungsgemäße Patentanmeldung
      "a regular member"  - ein ordentliches Mitglied
      "through regular channels"  - auf dem üblichen Weg
 see: {regular service}

         Note: usual
`,`regular /ɹˈɛɡjʊlə/
regulär <adj> [math.]
 see: {regular expression}, {regular function}

`,`regular /ɹˈɛɡjʊlə/
 [dated] richtig, richtiggehend, regelrecht <adj>
   Synonyms: {real}, {proper}

`,`regular /ɹˈɛɡjʊlə/
turnusmäßig <adj> [adm.]
      "the regular meeting of the committee"  - die turnusmäße Sitzung des Ausschusses
      "the latest regular report"  - der letzte turnusmäßige Bericht
`,`regular /ɹˈɛɡjʊlə/ <adj>
regelhaft <adj>
   Synonym: {systematic}

 see: {defined}, {specified}

`]},{src:"severe",ref:"hart,",display_src:"severe",show_ref:!1,definition:[`severe /sɪvˈiə/
hart, unerbittlich <adj>
   Synonym: {harsh}

 see: {harsh words}

`,`severe /sɪvˈiə/
schwer, heftig, massiv <adj>
      "a severe injury"  - eine schwere Verletzung
 see: {severe headache}

`,`severe /sɪvˈiə/
streng, strikt <adj>
         Note: Sache
   Synonyms: {strict}, {stern}, {stringent}

 see: {very strict}, {rigorous}, {rigorous tests}, {stern discipline}, {stern measures}

`,`severe /sɪvˈiə/
streng, gestreng <adj> [veraltet]
         Note: Person
      "severe but just"  - streng aber gerecht
   Synonyms: {strict}, {stern}

         Note: of a person
`]},{src:"short",ref:"Kurzschluss",display_src:"short",show_ref:!1,definition:[`short /ʃˈɔːt/
Kurzschluss <masc>, Kurzschluß <masc> [alt]  [electr.]
      "be short-circuited"  - einen Kurzschluss haben
   Synonym: {short-circuit}

 see: {short circuits}, {bolted fault}

`,`short /ʃˈɔːt/ <v>
blanko verkaufen, einen Leerverkauf tätigen
   Synonym: {sell short}

 see: {uncovered sale}, {short sale}, {bear sale}, {short selling}, {selling short}, {shorting}

`,`short /ʃˈɔːt/
 [Br.] Gläschen Schnaps <neut>, Schnapserl <neut> [Bayr.]  [Ös.] , Stamperl <neut> [Bayr.]  [Ös.]
         Note: klein, Buderl <neut> [Ös.]
         Note: groß
      "a jigger/pony/short/shot of vodka"  - ein Gläschen/Stamperl Wodka
   Synonyms: {jigger}, {pony}, {shot}, {snifter}

`,`short /ʃˈɔːt/
kleingewachsen, kleinwüchsig, klein <adj> [anat.]
   Synonyms: {of small stature}, {vertically challenged}

 see: {be small in stature}

`,`short /ʃˈɔːt/
kurz <adj>
         Note: zeitlich
      "a short laugh"  - ein kurzes Lachen
      "after just a short time"  - schon nach kurzer Zeit
      "Winter is coming and the days are getting shorter."  - Der Winter kommt und die Tage werden kürzer.
 see: {shorter}, {shortest}

         Note: time
`,`short /ʃˈɔːt/
kurz <adj>
         Note: Länge, Distanz, Textmenge
      "a short skirt"  - ein kurzer Rock
      "the shortest route"  - der kürzeste Weg
      "a short novel"  - ein kurzer Roman
      "The ruler is too short."  - Das Lineal ist zu kurz.
         Note: length, distance, amount of text
`,`short /ʃˈɔːt/
kurzfristig <adj> [adm.]
      "The notice is too short (for me)."  - Der Termin/Das ist (mir) zu kurzfristig.
   Synonyms: {short-dated}, {short-term}, {short-run}

`]},{src:"slow",ref:"langsam,",display_src:"slow",show_ref:!1,definition:[`slow /slˈəʊ/
langsam, träge, bedächtig <adj>
      "slow as molasses"  - sehr, sehr langsam
 see: {slower}, {slowest}, {dead slow}

`,`slow /slˈəʊ/ <v>
verlangsamen, hemmen <v, trans>
   Synonym: {slow down}

 see: {slowing down}, {slowing}, {slowed down}, {slowed}, {slows down}, {slows}, {slowed down}, {slowed}

`]},{src:"small",ref:"klein,",display_src:"small",show_ref:!1,definition:[`small /smˈɔːl/
klein, gering, unbedeutend <adj>
      "as small as possible"  - so klein wie möglich, möglichst klein, kleinstmöglich
      "the smallest problem"  - das kleinste Problem
      "since the time difference is very small"  - aufgrund des geringen Zeitunterschieds
      "That's small beer / potatoes (compared to …)."  - Das sind Peanuts., Das ist ein Klacks/eine Lappalie (im Vergleich zu …).
      "The insurance premium is small beer/potatoes compared to what we'd have to pay if the house burnt down."  - Die Versicherungsprämie ist ein Klacks gegenüber dem, was wir zahlen müssten, wenn das Haus abbrennt.
 see: {smaller}, {smallest}, {Small but fine.}, {Small but nice.}, {Small but excellent.}, {Small but mine.}

`,`small /smˈɔːl/
klein <adj>
   Synonym: {little}

 see: {smaller}, {littler}, {smallest}, {littlest}, {little bitty}

         Note: in size
         Note: usually prepositive
`,`small /smˈɔːl/
kleinformatig <adj>
         Note: z. B. Bilder
   Synonyms: {small-format}, {small-size}

`]},{src:"spinal",ref:"spinal",display_src:"spinal",show_ref:!1,definition:[`spinal /spˈaɪnəl/
spinal <adj>, Wirbelsäule bzw. Rückenmark betreffend [anat.]
      "spinal canal encroachment"  - spinaler Einstand
 see: {spinal encroachment}, {spinal surgery}

`]},{src:"surgical",ref:"chirurgisch",display_src:"surgical",show_ref:!1,definition:[`surgical /sˈɜːdʒɪkəl/
chirurgisch <adj> [med.]
`]},{src:"swollen",ref:"angeschwollen,",display_src:"swollen",show_ref:!1,definition:[`swollen /swˈəʊlən/
angeschwollen, geschwollen, verschwollen <adj>
`,`swell /swˈɛl/ (swelled /swˈɛld/ <>, swollen /swˈəʊlən/ <>, swelled /swˈɛld/ <>) <v>
anschwellen lassen, anwachsen lassen, steigern <v, trans>
 see: {swelling}, {swollen}, {swelled}

`,`swollen /swˈəʊlən/
anschwellen lassen, anwachsen lassen, gesteigert
   Synonym: {swelled}

 see: {swell}, {swelling}

`,`swell /swˈɛl/ (swelled /swˈɛld/ <>, swollen /swˈəʊlən/ <>, swelled /swˈɛld/ <>) <v>
anschwellen, schwellen, zunehmen <v, intr>
 see: {swelling}, {swollen}

`,`swollen /swˈəʊlən/
angeschwollen, geschwollen, zugenommen
 see: {swell}, {swelling}

`,`swollen /swˈəʊlən/
aufgebläht <adj>
 see: {more swollen}, {most swollen}

`,`swell /swˈɛl/ (swelled /swˈɛld/ <>, swollen /swˈəʊlən/ <>, swelled /swˈɛld/ <>) <v>
blähen, aufblähen <v, trans>
 see: {swelling}, {swollen}, {swelled}

`,`swollen /swˈəʊlən/
gebläht, aufgebläht
   Synonym: {swelled}

 see: {swell}, {swelling}

`,`swell /swˈɛl/ (swelled /swˈɛld/ <>, swollen /swˈəʊlən/ <>, swelled /swˈɛld/ <>) <v>
quellen, aufquellen <v, intr>
         Note: Holz; Erbsen
   Synonym: {swell out}

 see: {swelling}, {swollen}, {swelled}

`,`swollen /swˈəʊlən/
gequollen, aufgequollen
   Synonym: {swelled}

 see: {swell}, {swell out}, {swelling}

`,`swell /swˈɛl/ (swelled /swˈɛld/ <>, swollen /swˈəʊlən/ <>, swelled /swˈɛld/ <>) <v>
schwellen <v, intr>
      "it would swell"  - es schwölle
   Synonym: {become swollen}

 see: {swelling}, {swollen}, {it swills}, {it swelled}, {unswollen}

`,`swollen /swˈəʊlən/
geschwollen
      "it has/had swollen"  - es ist/war geschwollen
 see: {swell}, {become swollen}, {swelling}, {it swills}, {it swelled}, {unswollen}

`,`swollen /swˈəʊlən/
verquollen <adj>
`]},{src:"thoracic",ref:"Brustlymphgang",display_src:"thoracic",show_ref:!1,definition:[`thoracic /θɔːɹˈasɪk/
Brustlymphgang <masc>, Brust… [anat.]
`,`thoracic /θɔːɹˈasɪk/
thorakal <adj>, den Brustraum betreffend [med.]
`]},{src:"transthoracic",ref:"transthorakal,",display_src:"transthoracic",show_ref:!1,definition:[`transthoracic /tɹansθɔːɹˈasɪk/
transthorakal, durch den Brustkorb hindurch <adj> [med.]
`]},{src:"unchanged",ref:"alt",display_src:"unchanged",show_ref:!1,definition:[`unchanged /ʌntʃˈeɪndʒd/
alt <adj>
         Note: gewohnt, unverändert
      "The means of payment will appear unchanged."  - Bei den Zahlungsmitteln wird alles beim Alten bleiben.
   Synonym: {usual}

 see: {cling to the old ways}, {leave everything as it is}, {not to change anything}, {You haven't changed.}, {She's not the Doris I used to know.}, {Nothing has changed there.}

`,`unchanged /ʌntʃˈeɪndʒd/
unberührt <adj> [jur.]
      "The rights of third parties remain unaffected / unchanged."  - Die Rechte Dritter bleiben davon unberührt.
   Synonym: {unaffected}

 see: {This regulation shall not affect / shall be without prejudice to existing contractual relationships.}

`,`unchanged /ʌntʃˈeɪndʒd/
unverändert <adj>
         Note: gegenüber
      "The situation remains unchanged from last year."  - Die Lage ist/zeigt sich gegenüber dem Vorjahr unverändert.
         Note: from
`,`unchanged /ʌntʃˈeɪndʒd/
unverändert, stationär <adj> [med.]
         Note: Verlauf von Herden, Metastasen usw.
         Note: progression of lesions, metastases etc.
`]},{src:"urinary",ref:"Urin…,",display_src:"urinary",show_ref:!1,definition:[`urinary /jˈʊəɹɪnəɹi/
Urin…, Harn…
`,`urinary /jˈʊəɹɪnəɹi/
urinal <adj>, den Harn betreffend [med.]
   Synonym: {urine-related}

`]},{src:"vaginal",ref:"vaginal",display_src:"vaginal",show_ref:!1,definition:[`vaginal /vˈadʒɪnəl/
vaginal <adj>
`]},{src:"vascular",ref:"Gefäß…",display_src:"vascular",show_ref:!1,definition:[`vascular /vˈaskjʊlə/
Gefäß…
`,`vascular /vˈaskjʊlə/
vaskulär <adj>, Blutgefäße betreffend [anat.]  [med.]
 see: {vascular architecture}

`]},{src:"vertebral",ref:"aus",display_src:"vertebral",show_ref:!1,definition:[`vertebral /vˈɜːtɪbɹəl/
aus Wirbelknochen bestehend <adj>
`,`vertebral /vˈɜːtɪbɹəl/
vertebral <adj>, die Wirbelsäule betreffend [med.]
`]},{src:"viral",ref:"Virus…,",display_src:"viral",show_ref:!1,definition:[`viral /vˈaɪəɹəl/
Virus…, viral <adj>
`]},{src:"worsening",ref:"Verschärfung",display_src:"worsening",show_ref:!1,definition:[`worsening /wˈɜːsənɪŋ/
Verschärfung <fem>, Zuspitzung <fem>
   Synonym: {intensification}

`,`worsening /wˈɜːsənɪŋ/
schlechter machend
 see: {worsen}, {worsened}, {worsens}, {worsened}

`,`worsening /wˈɜːsənɪŋ/
verschlechternd
 see: {worsen}, {worsened}, {worsens}, {worsened}

`]},{src:"allergist",ref:"Facharzt",display_src:"allergist",show_ref:!1,definition:[`allergist /ˈalədʒˌɪst/
Facharzt für Allergien, Allergologe <masc>, Allergologin <fem> [med.]
 see: {allergists}

`]},{src:"anesthesiologist",ref:"",display_src:"anesthesiologist",show_ref:!1,definition:[`anesthesiologist /ˌanɪsθˌiːzɪˈɒlədʒˌɪst/
 [Am.] Narkosearzt <masc>, Narkoseärztin <fem>, Anästhesist <masc>, Anästhesistin <fem> [med.]
   Synonyms: {anaesthetist}, {anaesthesiologist}, {anesthetist}

 see: {anaesthetists}, {anaesthesiologists}, {anesthetists}, {anesthesiologists}

`]},{src:"cardiologist",ref:"Kardiologe",display_src:"cardiologist",show_ref:!1,definition:[`cardiologist /kˌɑːdɪˈəʊlədʒˌɪst/
Kardiologe <masc>, Kardiologin <fem>, Herzspezialist <masc>, Herzspezialistin <fem> [med.]
   Synonym: {heart specialist}

 see: {cardiologists}, {heart specialists}

`]},{src:"cosmetologist",ref:"Schönheitspfleger/Schönheitspflegerin",display_src:"cosmetologist",show_ref:!1,definition:[`cosmetologist /kˌɒzmɪtˈɒlədʒˌɪst/
Schönheitspfleger/Schönheitspflegerin <fem>, Kosmetiker/Kosmetikerin <fem>
`]},{src:"dermatologist",ref:"Hautarzt",display_src:"dermatologist",show_ref:!1,definition:[`dermatologist /dˌɜːmɐtˈɒlədʒˌɪst/
Hautarzt <masc>, Hautärztin <fem>, Dermatologe <masc>, Dermatologin <fem> [med.]
 see: {dermatologists}

`]},{src:"endocrinologist",ref:"Endokrinologe",display_src:"endocrinologist",show_ref:!1,definition:[`endocrinologist /ˌɛndəʊkɹɪnˈɒlədʒˌɪst/
Endokrinologe <masc>, Endokrinologin <fem> [med.]
 see: {endocrinologists}

`]},{src:"eye doctor",ref:"Augenarzt",display_src:"eye doctor",show_ref:!1,definition:[`eye doctor /ˈaɪ dˈɒktə/
Augenarzt <masc>, Augenärztin <fem>, Ophthalmologe <masc> [med.]
   Synonyms: {eye specialist}, {ophthalmologist}

 see: {eye specialists}, {eye doctors}, {ophthalmologists}

`]},{src:"gynecologist",ref:"Gynäkologe",display_src:"gynecologist",show_ref:!1,definition:[`gynecologist /ɡˌaɪnɪkˈɒlədʒˌɪst/
Gynäkologe <masc>, Gynäkologin <fem> [med.]
   Synonym: {gynaecologist}

 see: {gynecologists}, {gynaecologists}

`]},{src:"hematologist",ref:"",display_src:"hematologist",show_ref:!1,definition:[`hematologist /hˌɛmɐtˈɒlədʒˌɪst/
 [Am.] Hämatologe <masc>, Hämatologin <fem>, Blutspezialist <masc> [med.]
   Synonym: {haematologist}

 see: {haematologists}, {hematologists}

`]},{src:"medical doctor",ref:"Arzt",display_src:"medical doctor",show_ref:!1,definition:[`medical doctor /mˈɛdɪkəl dˈɒktə/ (M.D. /ˈɛm dˈiː/)
Arzt <masc>, Doktor <masc> [ugs.]
   Synonyms: {doctor}, {medic}, {physician}

 see: {medical doctors}, {doctors}, {medics}, {physicians}, {female doctor}, {lady doctor}, {railway doctor}, {railroad doctor}, {camp doctor}, {foundation house officer}, {house officer}, {houseman}, {resident physician}, {resident}, {intern}, {resident}, {registrar}, {fellow}

`]},{src:"nephrologist",ref:"Nephrologe",display_src:"nephrologist",show_ref:!1,definition:[`nephrologist /nɛfɹˈɒlədʒˌɪst/
Nephrologe <masc>, Nephrologin <fem>
 see: {nephrology}

`]},{src:"neurologist",ref:"Neurologe",display_src:"neurologist",show_ref:!1,definition:[`neurologist /njuːɹˈɒlədʒˌɪst/
Neurologe <masc>, Neurologin <fem>, Nervenarzt <masc>, Nervenärztin <fem> [med.]
 see: {neurologists}

`]},{src:"oncologist",ref:"Onkologe",display_src:"oncologist",show_ref:!1,definition:[`oncologist /ɒŋkˈɒlədʒˌɪst/
Onkologe <masc>, Onkologin <fem>, Facharzt für Tumorkrankheiten, Krebsspezialist <masc>
 see: {oncologists}

`]},{src:"ophthalmologist",ref:"Augenarzt",display_src:"ophthalmologist",show_ref:!1,definition:[`ophthalmologist /ˌɒfθɐlmˈɒlədʒˌɪst/
Augenarzt <masc>, Augenärztin <fem>, Ophthalmologe <masc> [med.]
   Synonyms: {eye specialist}, {eye doctor}

 see: {eye specialists}, {eye doctors}, {ophthalmologists}

`]},{src:"otolaryngologist",ref:"Hals-Nasen-Ohren-Facharzt",display_src:"otolaryngologist",show_ref:!1,definition:[`otolaryngologist /ˌɒtəʊlˌɑːɹɪŋɡˈɒlədʒˌɪst/
Hals-Nasen-Ohren-Facharzt <masc>, Hals-Nasen-Ohren-Fachärztin <fem>, HNO-Arzt <masc>, HNO-Ärztin <fem> [med.]
   Synonyms: {ear, nose and throat specialist}, {ENT specialist}, {otorhinolaryngologist}

 see: {ENT specialists}, {otolaryngologists}, {otorhinolaryngologists}

`]},{src:"otologist",ref:"Otologe",display_src:"otologist",show_ref:!1,definition:[`otologist /ɒtˈɒlədʒˌɪst/
Otologe <masc>, Otologin <fem>, Ohrenarzt <masc>, Facharzt für Ohrenheilkunde [med.]
 see: {otologists}

`]},{src:"pathologist",ref:"Pathologe",display_src:"pathologist",show_ref:!1,definition:[`pathologist /paθˈɒlədʒˌɪst/
Pathologe <masc>, Pathologin <fem> [med.]
 see: {pathologists}

`]},{src:"psychologist",ref:"Psychologe",display_src:"psychologist",show_ref:!1,definition:[`psychologist /saɪkˈɒlədʒˌɪst/
Psychologe <masc>, Psychologin <fem> [med.]
 see: {psychologists}, {kids psychologist}, {animal psychologist}

`]},{src:"pulmonologist",ref:"Lungenfacharzt",display_src:"pulmonologist",show_ref:!1,definition:[`pulmonologist /pˌʌlmənˈɒlədʒˌɪst/
Lungenfacharzt <masc>, Lungenspezialist <masc>, Pneumologe <masc> [med.]
   Synonyms: {respiratory physician}, {specialist in respiratory medicine}, {lung/pulmonary specialist}, {respirologist}

 see: {respiratory physicians}, {pulmonologists}, {respirologists}

`]},{src:"radiologist",ref:"Radiologe",display_src:"radiologist",show_ref:!1,definition:[`radiologist /ɹˌeɪdɪˈɒlədʒˌɪst/
Radiologe <masc>, Radiologin <fem>, Röntgenarzt <masc>, Röntgenärztin <fem> [med.]
 see: {radiologists}

`]},{src:"urologist",ref:"Urologe",display_src:"urologist",show_ref:!1,definition:[`urologist /jʊəɹˈɒlədʒˌɪst/
Urologe <masc>, Urologin <fem> [med.]
 see: {urologists}

`]},{src:"puffs",ref:"Züge",display_src:"puffs",show_ref:!1,definition:[`puffs /pˈʌfs/
Züge <pl>
   Synonyms: {pulls}, {draws}, {tokes}

 see: {pull}, {puff}, {draw}, {toke}

`,`puffs /pˈʌfs/
pafft
   Synonym: {puffs away}

 see: {puff}, {puff away}, {puffing}, {puffing away}, {puffed}, {puffed away}, {puffed}, {puffed away}

`]},{src:"tablets",ref:"Pillen",display_src:"tablets",show_ref:!1,definition:[`tablets /tˈabləts/
Pillen <pl>
   Synonym: {pills}

 see: {pill}, {tablet}, {pillule}, {pilule}, {bolus}

`,`tablets /tˈabləts/
Tabletten <pl>
   Synonym: {pill}

 see: {tablet}, {pill}, {troche}, {take pills}

`]},{src:"acetaminophen",ref:"Paracetamol",display_src:"acetaminophen",show_ref:!1,definition:[`acetaminophen /ˈasɪtˌamɪnˌɒfən/
Paracetamol <neut>
   Synonym: {paracetamol}

         Note: USAN
`]},{src:"adrenal",ref:"Nebenniere",display_src:"adrenal",show_ref:!1,definition:[`adrenal /ɐdɹˈiːnəl/
Nebenniere <fem> [anat.]
   Synonyms: {suprarenal gland}, {adrenal gland}

 see: {suprarenal glands}, {adrenal glands}, {adrenals}

`]},{src:"alcohol",ref:"Alkohol",display_src:"alcohol",show_ref:!1,definition:[`alcohol /ˈalkəhˌɒl/
Alkohol <masc>
      "become addicted to alcohol"  - dem Alkohol verfallen
      "I don't take alcohol."  - Ich trinke keinen Alkohol.
   Synonym: {John Barleycorn}

 see: {alcohols}, {absolute alcohol}, {tetrahydric alcohol}, {pentahydric alcohol}, {be on the bottle}, {be on the wag}, {be on the wagon}, {moonlight}

`]},{src:"antibiotics",ref:"antibiotische",display_src:"antibiotics",show_ref:!1,definition:[`antibiotics /ˌantɪbaɪˈɒtɪks/
antibiotische Wirkstoffe <pl>, Antibiotika <pl>
   Synonyms: {antibiotic agents}, {antibiotic substances}, {antibiotic drugs}, {antibacterials}

 see: {antibiotic agent}, {antibiotic substance}, {antibiotic drug}, {antibiotic}, {antibacterial}, {batericidal antibiotic}, {antineoplastic antibiotic}, {nucleoside antibiotic}, {reserve antibiotic}

`]},{src:"aspirin",ref:"Aspirin",display_src:"aspirin",show_ref:!1,definition:[`aspirin /ˈaspɹɪn/
Aspirin <neut> [tm]  [pharm.]
`,`aspirin /ˈaspɹɪn/
 [tm]  [coll.] leichtes Schmerzmittel, Aspirin [tm]  [ugs.]
 see: {painkilling drug}, {painkilling medicine}, {painkiller}, {painreliever}, {anodyne agent}, {anodyne}, {analgesic}, {painkilling drugs}, {painkilling medicines}, {painkillers}, {painrelievers}, {anodyne agents}, {anodynes}, {analgesics}

`]},{src:"birth control",ref:"Geburtenregelung",display_src:"birth control",show_ref:!1,definition:[`birth control /bˈɜːθ kəntɹˈəʊl/
Geburtenregelung <fem>, Geburtenbeschränkung <fem> [pol.]  [soc.]
         Note: oft fälschlich: Geburtenkontrolle
`]},{src:"blood thinner",ref:"Blutverdünnungsmittel",display_src:"blood thinner",show_ref:!1,definition:[`blood thinner /blˈʌd θˈɪnə/
Blutverdünnungsmittel <neut>, Blutverdünner <masc>
 see: {blood thinners}

`]},{src:"caffeine",ref:"Koffein",display_src:"caffeine",show_ref:!1,definition:[`caffeine /kˈafiːn/
Koffein <neut>
`]},{src:"calcium",ref:"Calcium",display_src:"calcium",show_ref:!1,definition:[`calcium /kˈalsiəm/
Calcium <neut> [chem.] Ca,  /kˈɑː/
         Note: Kalzium
`]},{src:"cocaine",ref:"Kokain",display_src:"cocaine",show_ref:!1,definition:[`cocaine /kəʊkˈeɪn/
Kokain <neut>, Koks <masc> [ugs.] , Schnee <masc> [slang]  [pharm.]
   Synonyms: {coke}, {snow}, {stardust}

 see: {rock cocaine}, {crack cocaine}, {crack}

`]},{src:"cream",ref:"Creme",display_src:"cream",show_ref:!1,definition:[`cream /kɹˈiːm/
Creme <fem>
         Note: Kosmetik
      "anti-wrinkle cream"  - Antifaltencreme
      "rich skin cream"  - Fettcreme
 see: {creams}, {blemish cream}, {regenerative cream}, {depilatory cream}, {moisturizing cream}, {moisturising cream}, {moisturizer}, {moisturiser}, {hydrating cream}, {face cream}, {facial cream}, {hand cream}, {skin cream}, {body cream}, {shaving cream}, {cleansing cream}, {barrier cream}

         Note: cosmetics
`,`cream /kɹˈiːm/
Creme <fem> [cook.]
 see: {butter cream}, {buttercream}, {garlic cream}, {nougat cream}, {chocolate cream}

`,`cream /kɹˈiːm/
Rahm <masc>, Sahne <fem> [Dt.] , Schmand <masc> [Mittelostdt.] , Schmant <masc> [Mittelostdt.] , Obers <neut> [Ös.] , Nidel <masc, fem> [Schw.]  [cook.]
         Note: flüssiger Süßrahm
      "skim the cream"  - den Rahm abschöpfen
      "Beat the cream until it is stiff and fold in."  - Die Sahne steif schlagen und unterheben.
 see: {clotted cream}

`,`cream /kɹˈiːm/
cremefarben <adj>
`,`cream /kɹˈiːm/ <v>
eincremen <v, trans>
 see: {creaming}, {creamed}

`,`cream /kɹˈiːm/ <v>
sahnig werden <v, intr> [cook.]
`,`cream /kɹˈiːm/ <v>
schaumig schlagen <v, trans>
 see: {creaming}, {creamed}

`,`cream /kɹˈiːm/ <adj>
cremefarbig <adj>
 see: {cream coloured}, {cream colored}

`]},{src:"creatinine",ref:"Kreatinin",display_src:"creatinine",show_ref:!1,definition:[`creatinine /kɹiːˈeɪtɪnˌaɪn/
Kreatinin <neut>, Creatinin <neut> [biochem.]
      "blood plasma creatinine"  - Blutplasmakretinin
`]},{src:"diuretic",ref:"Diuretikum",display_src:"diuretic",show_ref:!1,definition:[`diuretic /dˌɪjuːɹˈɛtɪk/
Diuretikum <neut>, harntreibendes Mittel [med.]
`,`diuretic /dˌɪjuːɹˈɛtɪk/
harntreibend <adj>
`]},{src:"electrolytes",ref:"Elektrolyten",display_src:"electrolytes",show_ref:!1,definition:[`electrolytes /ɪlˈɛktɹəlˌaɪts/
Elektrolyten <pl>
 see: {electrolyte}, {solid electrolyte}, {gel electrolyte}, {colloidal electrolyte}

`]},{src:"enzyme",ref:"Enzym",display_src:"enzyme",show_ref:!1,definition:[`enzyme /ˈɛnzaɪm/
Enzym <neut>, Ferment <neut> [frühere Bezeichnung]  [biochem.]
   Synonym: {ferment}

 see: {enzymes}, {ferments}, {DNAase}, {adaptive enzyme}, {allosteric enzyme}, {isoenzyme}, {isozyme}, {constitutive enzyme}, {manganese enzyme}, {pectic enzyme}, {repair enzyme}, {ectoenzyme}, {intracellular enzyme}, {cellular enzyme}, {endoenzyme}

`]},{src:"famotidine",ref:"Famotidin",display_src:"famotidine",show_ref:!1,definition:[`famotidine /fˈamətˌɪdiːn/
Famotidin <neut> [chem.]
`]},{src:"fat",ref:"Dateizuordnungstabelle",display_src:"fat",show_ref:!1,definition:[`file allocation table /fˈaɪl ˌaləkˈeɪʃən tˈeɪbəl/ (FAT /fˈat/)
Dateizuordnungstabelle <fem> [comp.]
`,`fat /fˈat/
Fett <neut> [cook.]
      "deep-frying fat"  - Frittierfett
      "palm kernel fat"  - Palmkernfett, Palmfett, Fett von der Ölpalme
 see: {chip fat}, {palm fat}

`,`fat /fˈat/
Körperfett <neut>, Fett <neut> [anat.]
      "run to fat"  - Fett ansetzen
   Synonym: {body fat}

 see: {put on weight}

`,`fat /fˈat/
dick <adj>
         Note: Person
      "Does this dress make me look fat?"  - Macht mich dieses Kleid dick?
      "I'm so fat at the moment!"  - Ich bin momentan so dick!
 see: {become fat}, {grow fat}, {be fattening}, {be in the pudding club}

         Note: person
`,`fat /fˈat/
fett, dick <adj>
 see: {fatter}, {fattest}

`,`fat /fˈat/
Fettmasse <fem>
   Synonym: {fat mass}

`]},{src:"ferrous sulfate",ref:"",display_src:"ferrous sulfate",show_ref:!1,definition:[`ferrous sulfate /fˈɛɹəs sˈʌlfeɪt/
 [Am.] Eisen-2-sulfat <neut>, Eisen(II)-sulfat <neut>, Ferrosulfat <neut> [obs.]  [chem.]
   Synonym: {ferrous sulphate}

`]},{src:"fiber",ref:"Ballaststoffe",display_src:"fiber",show_ref:!1,definition:[`fiber /fˈaɪbə/
Ballaststoffe <pl> [cook.]
   Synonyms: {dietary fiber}, {fibrous material}, {roughage}, {bulk material}, {bulk}, {bulkage}

 see: {total fiber}

`,`fiber /fˈaɪbə/
 [Am.] Textilfaser <fem>, Faser <fem> [textil.]
   Synonyms: {textile fibre}, {fibre}, {textile fiber}

 see: {textile fibres}, {fibres}, {textile fibers}, {fibers}, {alginate fibre}, {alginate fiber}, {spray fibre}, {synthetic fibre}

`]},{src:"folic acid",ref:"Folsäure",display_src:"folic acid",show_ref:!1,definition:[`folic acid /fˈɒlɪk ˈasɪd/
Folsäure <fem> [chem.]
`]},{src:"gel",ref:"",display_src:"gel",show_ref:!1,definition:[`gel /dʒˈɛl/ <v>
 [fig.] Form annehmen, Gestalt annehmen, sich manifestieren <v>
         Note: Idee, Plan
`,`gel /dʒˈɛl/
Gel <neut>
`,`gel /dʒˈɛl/ <v>
gelieren, gelatinieren, fest werden <v, intr>
 see: {geling}, {gelled}

`,`gel /dʒˈɛl/ <v>
 [Br.] gut zusammenarbeiten <v, intr>
   Synonym: {jell}

`]},{src:"hcg",ref:"humanes",display_src:"hcg",show_ref:!1,definition:[`human chorionic gonadotropin /hjˈuːmən kˌɔːɹɪˈɒnɪk ɡˈɒnɐdˌɒtɹəpˌɪn/ (hCG /ˈeɪtʃ sˌiːdʒˈiː/)
humanes Choriongonadotropin <neut> [biochem.]
`]},{src:"hemoglobin",ref:"",display_src:"hemoglobin",show_ref:!1,definition:[`hemoglobin /hˌiːməɡlˈəʊbɪn/
 [Am.] roter Blutfarbstoff <masc>, Hämoglobin <neut> [biochem.]
   Synonym: {haemoglobin}

`]},{src:"heroin",ref:"Heroin",display_src:"heroin",show_ref:!1,definition:[`heroin /hˈɛɹəʊˌɪn/
Heroin <neut>
   Synonym: {smack}

 see: {mainline heroine}

`]},{src:"hydrochlorothiazide",ref:"Hydrochlorothiazid",display_src:"hydrochlorothiazide",show_ref:!1,definition:[`hydrochlorothiazide /hˌaɪdɹəklˌɔːɹəʊθɪˈeɪzaɪd/
Hydrochlorothiazid <neut> [chem.]
`]},{src:"hydrocortisone",ref:"Cortisol",display_src:"hydrocortisone",show_ref:!1,definition:[`hydrocortisone /hˈaɪdɹəkˌɔːtɪsˌəʊn/
Cortisol <neut>, Hydrocortison <fem> [biochem.]
   Synonym: {cortisol}

`]},{src:"ibuprofen",ref:"Ibuprofen",display_src:"ibuprofen",show_ref:!1,definition:[`Ibuprofen /ˌaɪbjuːpɹˈəʊfən/
Ibuprofen <neut>
         Note: Mittel gegen Fieber, Entzündungen, Schmerzen
         Note: INN
         Note: remedy for fever, inflammation, pain
`]},{src:"ice",ref:"Eis",display_src:"ice",show_ref:!1,definition:[`ice /ˈaɪs/
Eis <neut>
         Note: gefrorenes Wasser
      "turn to ice"  - zu Eis gefrieren, zu Eis werden
      "grow ice on a wooden frame"  - auf einem Holzgestell Eis züchten
      "be treading on thin ice"  - sich auf dünnem Eis bewegen
      "tread on thin ice"  - sich auf dünnem Eis bewegen
      "walk on thin ice"  - sich auf dünnem Eis bewegen
      "skate on thin ice"  - sich auf dünnem Eis bewegen
 see: {freeze}, {be on hold}

`,`ice /ˈaɪs/
Klunker <masc> [ugs.] , Diamant <masc>, Schmuck <masc>
   Synonym: {rock}

 see: {rocks}

`,`ice /ˈaɪs/ <v>
vereisen <v, trans, v, intr>
 see: {icing}, {iced}, {ices}, {iced}

`,`ice /ˈaɪs/
Eisfläche <fem>
   Synonym: {surface of the ice}

`]},{src:"immunosuppressive",ref:"immunitätshemmend,",display_src:"immunosuppressive",show_ref:!1,definition:[`immunosuppressive /ɪmjˈuːnəsˌʌpɹɪsˌɪv/
immunitätshemmend, immunsuppressiv <adj> [med.]
   Synonyms: {immunosuppressant}, {anti-immune}

`]},{src:"injection",ref:"Einspritzung",display_src:"injection",show_ref:!1,definition:[`injection /ɪndʒˈɛkʃən/
Einspritzung <fem> [auto]
   Synonym: {fuel injection}

 see: {sequential injection}, {simultaneous injection}, {central injection}

`,`injection /ɪndʒˈɛkʃən/
Injektion <fem> [math.]
`,`injection /ɪndʒˈɛkʃən/
Injektion <fem>, Spritze <fem> [med.]
         Note: Vorgang
      "lumbar subarachnoid injection"  - Injektion in das Cavum subarachnoidale
      "have an injection/a jab/a shot"  - eine Spritze bekommen
      "administer/give a drug by intravenous injection"  - ein Medikament durch intravenöse Injektion verabreichen
      "give sb. an injection"  - jdm. eine Injektion/Spritze geben
      "Children hate having injections."  - Kinder mögen es gar nicht, Spritzen zu bekommen.
   Synonyms: {jab}, {shot}

 see: {injections}, {jabs}, {shots}, {arterial injections}, {gas injection}, {intracardiac injection}, {intramuscular injection}, {intrathecal injection}, {painkilling injection}, {hypodermic injection}, {subconjunctival injection}, {give injections}, {make injections}

`,`injection /ɪndʒˈɛkʃən/
Injektionslösung <fem>, Injektion <fem>, gespritztes Medikament <neut> [med.]
      "an injection of insuline"  - eine Insulin-Injektion
      "a cortisone injection"  - eine Kortison-Injektion
   Synonyms: {injection solution}, {drug injected}

`,`injection /ɪndʒˈɛkʃən/
Injizieren <neut>, Injektion <fem>, Spritzen <neut> [med.]
         Note: eines Medikaments
      "the injection of a local anesthetic"  - das Injizieren eines örtlichen Betäubungsmittels
         Note: of a drug
`,`injection /ɪndʒˈɛkʃən/
 [fig.] Finanzspritze <fem>
`]},{src:"insulin",ref:"Insulin",display_src:"insulin",show_ref:!1,definition:[`insulin /ˈɪnsjuːlˌɪn/
Insulin <neut> [biochem.]  [med.]
`]},{src:"insulin pump",ref:"Insulinpumpe",display_src:"insulin pump",show_ref:!1,definition:[`insulin pump /ˈɪnsjuːlˌɪn pˈʌmp/
Insulinpumpe <fem>
 see: {insulin pumps}

`]},{src:"iron",ref:"Bügeleisen",display_src:"iron",show_ref:!1,definition:[`iron /ˈaɪən/
Bügeleisen <neut>, Plätteisen <neut>, Glätteisen <neut> [Schw.]
      "flat-irons"  - Bügeleisen, Plätteisen, Glätteisen
   Synonym: {flat-iron}

 see: {irons}, {travelling iron}, {traveling iron}

`,`iron /ˈaɪən/
Eisen <neut>
      "carbonated/carburetted iron"  - gekohltes Eisen, Kohlenstoffeisen (Metallurgie)
      "carburet of iron (metallurgy)"  - gekohltes Eisen, Kohlenstoffeisen (Metallurgie)
      "technical pure iron"  - technisch reines Eisen, Reineisen
 see: {electrolytic iron}, {ingot iron}, {chelated iron}

`,`iron /ˈaɪən/ <v>
bügeln, plätten <v, trans> [textil.]
      "The shirt needs ironing."  - Das Hemd muss gebügelt werden.
 see: {ironing}, {ironed}, {irons}, {ironed}

`,`iron /ˈaɪən/
eisern <adj>
 see: {Iron Lady}

`,`iron /ˈaɪən/
Eisen <neut> [chem.] Fe,  /fˈiː/
`]},{src:"lactulose",ref:"Lactulose",display_src:"lactulose",show_ref:!1,definition:[`lactulose /lˈaktjʊlˌəʊs/
Lactulose <fem>
`]},{src:"laxative",ref:"Abführmittel",display_src:"laxative",show_ref:!1,definition:[`laxative /lˈaksətˌɪv/
Abführmittel <neut>, Laxans <neut>, Laxativ <neut> [med.]  [pharm.]
`,`laxative /lˈaksətˌɪv/
abführend, stuhlfördernd, purgativ <adj> [med.]
   Synonyms: {aperient}, {purging}, {purgative}

 see: {laxative regimen}

`]},{src:"librium",ref:"Chlordiazepoxid",display_src:"librium",show_ref:!1,definition:[`Librium /lˈaɪbɹiəm/
Chlordiazepoxid <neut> [chem.] , Librium <neut> [pharm.]
   Synonym: {chlordiazepoxide}

`]},{src:"lidocaine",ref:"Lidocain",display_src:"lidocaine",show_ref:!1,definition:[`lidocaine /lˈɪdəkˌeɪn/
Lidocain <neut> [pharm.]
         Note: Lokalanästhetikum
   Synonyms: {lignocaine}, {xylocaine}

`,`lidocaine /lˈɪdəkˌeɪn/
Lidokain <neut> [pharm.]
`]},{src:"lipase",ref:"Lipase",display_src:"lipase",show_ref:!1,definition:[`lipase /lˈɪpeɪs/
Lipase <fem> [biochem.]
`]},{src:"liquid",ref:"Flüssigkeit",display_src:"liquid",show_ref:!1,definition:[`liquid /lˈɪkwɪd/
Flüssigkeit <fem>
   Synonym: {fluid}

 see: {fluids}, {liquids}

`,`liquid /lˈɪkwɪd/
flüssig <adj> [phys.]
         Note: Aggregatzustand
      "in the liquid state"  - im flüssigen Aggregatzustand
 see: {nonliquid}

         Note: aggregate state
`,`liquid /lˈɪkwɪd/
flüssig, verfügbar <adj>
   Synonyms: {available}, {solvent}

 see: {liquid assets}, {out of funds}

`]},{src:"lithium",ref:"Lithium",display_src:"lithium",show_ref:!1,definition:[`lithium /lˈɪθiəm/
Lithium <neut> [chem.] Li,  /lˈaɪ/
`]},{src:"local anesthetic",ref:"örtlich",display_src:"local anesthetic",show_ref:!1,definition:[`local anesthetic /lˈəʊkəl ˌanɪsθˈɛtɪk/ (LA /ˌɛlˈeɪ/)
örtlich wirksames Betäubungsmittel, örtliches Betäubungsmittel, Lokalanästhetikum <neut>
   Synonym: {local numbing agent}

 see: {anaesthetic agent}, {anaesthetic}, {anesthetic agent}, {anesthetic}, {anaesthetic agents}, {anaesthetics}, {anesthetic agents}, {anesthetics}, {narcotic agent}, {narcotic}, {stupefacient agent}, {stupefacient}, {adjunct to anaestesia}

`]},{src:"lotion",ref:"Lösung",display_src:"lotion",show_ref:!1,definition:[`lotion /lˈəʊʃən/
Lösung <fem>
 see: {lotions}

`,`lotion /lˈəʊʃən/
Lotion <fem>
      "apply a lotion"  - eine Lotion auftragen
`]},{src:"magnesium",ref:"Magnesium",display_src:"magnesium",show_ref:!1,definition:[`magnesium /maɡnˈiːziəm/
Magnesium <neut> [chem.] Mg,  /ˌɛmdʒˈiː/
`]},{src:"medication",ref:"Arzneimittel",display_src:"medication",show_ref:!1,definition:[`medication /mˌɛdɪkˈeɪʃən/
Arzneimittel <neut> [adm.] , Arznei <fem> [geh.] , Medikament <neut>, Medizin <fem> [ugs.]  [pharm.]  [med.]
      "fridge-line medication"  - kühlkettenpflichtiges Arzneimittel, kühlpflichtiges Medikament
      "be on medication for high blood pressure"  - Medikamente gegen Bluthochdruck nehmen/(verabreicht) bekommen
      "take a medication"  - ein Medikament einnehmen, nehmen, schlucken
      "stop taking the medicine/medication"  - das Medikament absetzen
      "Are you taking any other medications?"  - Nehmen Sie noch andere Medikamente?
   Synonyms: {drug}, {medicine}, {medicament}

 see: {drugs}, {medications}, {medicines}, {human medicines}, {orphan drugs}, {veterinary drug}, {unmedicated}, {discontinue medication}, {initiate medication}, {dispense medication}, {drug dispensing}

`,`medication /mˌɛdɪkˈeɪʃən/
Arzneimittelanwendung <fem>, Medikamentenanwendung <fem>, Arzneimittelgabe <fem>, Medikamentengabe <fem>, Medikation <fem> [med.]
      "rectal instillaton of medication"  - rektale Medikamentenapplikation
      "medication-related errors"  - Fehler bei der Verabreichung von Arzneimitteln
      "errors involving medication"  - Fehler bei der Verabreichung von Arzneimitteln
   Synonyms: {administration of a drug/of drugs}, {drug delivery}, {drug regimen}

 see: {depot medication}, {endermal administration of medicaments}, {endemism}, {encolpism}, {ophthalmic application of medicines}, {polypharmacy}, {polypragmasy}, {hypodermic medication}, {dememchysis}, {sublingual application of medicines}

`,`medication /mˌɛdɪkˈeɪʃən/
ärztliche Behandlung <fem>, medizinische Behandlung <fem> [med.]
`,`medication /mˌɛdɪkˈeɪʃən/
medikamentöse Behandlung <fem>, Medikamententherapie <fem> [med.]
   Synonyms: {treatment using drugs}, {use of medication}

`]},{src:"methamphetamine",ref:"Methamphetamin",display_src:"methamphetamine",show_ref:!1,definition:[`methamphetamine /mˌɛθɐmfˈɛtɐmˌiːn/
Methamphetamin <neut> [pharm.]
 see: {methamphetamines}

`]},{src:"multivitamin",ref:"Multivitamin…",display_src:"multivitamin",show_ref:!1,definition:[`multivitamin /mˌʌltɪvˈɪtəmɪn/ <adj>
Multivitamin…
 see: {multivitamin juice}, {multivitamin preparation}

`]},{src:"nicotine",ref:"Nikotin",display_src:"nicotine",show_ref:!1,definition:[`nicotine /nˈɪkətˌiːn/
Nikotin <neut>
`]},{src:"nitroglycerin",ref:"Glycerintrinitrat",display_src:"nitroglycerin",show_ref:!1,definition:[`nitroglycerin /nˌaɪtɹəʊɡlˈɪsəɹˌɪn/
Glycerintrinitrat <neut>, Nitroglyzerin <neut> [chem.]
   Synonyms: {nitro}, {blasting oil}, {explosive oil}

`]},{src:"ointment",ref:"Salbe",display_src:"ointment",show_ref:!1,definition:[`ointment /ˈɔɪntmənt/
Salbe <fem> [pharm.]
      "protective skin ointment"  - Hautschutzsalbe
      "ammoniated mercury ointment"  - Quecksilberpräzipitatsalbe, weiße Quecksilbersalbe
      "apply an ointment"  - eine Salbe auftragen
   Synonym: {salve}

 see: {ointments}, {salves}, {antibiotic ointment}, {medicated ointment}, {medicated salve}, {iodine ointment}, {cerate}, {wound ointment}, {wound salve}, {drawing ointment}, {drawing salve}

`]},{src:"opiate",ref:"Opiat",display_src:"opiate",show_ref:!1,definition:[`opiate /ˈəʊpɪˌeɪt/
Opiat <neut>, opiumhaltiges Arzneimittel [pharm.]
 see: {opiates}

`]},{src:"opioid",ref:"Opioid",display_src:"opioid",show_ref:!1,definition:[`opioid /ˈəʊpɪˌɔɪd/
Opioid <neut> [biochem.]
`]},{src:"oxygen",ref:"Sauerstoff",display_src:"oxygen",show_ref:!1,definition:[`oxygen /ˈɒksɪdʒən/
Sauerstoff <masc> [chem.] O,  /ˈəʊ/
 see: {atmospheric oxygen}, {liquid oxygen}, {LOX}, {dissolved oxygen}, {water oxygen}, {molecular oxygen}, {available oxygen}, {gaseous oxygen}, {gox}

`]},{src:"patch",ref:"Arzneimittelpflaster",display_src:"patch",show_ref:!1,definition:[`patch /pˈatʃ/
Arzneimittelpflaster <neut>, Medikamentenpflaster <neut>, Pflaster <neut> [pharm.]
      "transdermal scopolamine patch"  - transdermales Skopolaminpflaster
   Synonym: {drug patch}

 see: {drug patches}, {patches}, {nicotine patch}

`,`patch /pˈatʃ/
Aufnäher <masc>, aufgenähte Plakette <fem> [textil.]
   Synonym: {sewn-on badge}

 see: {patches}

`,`patch /pˈatʃ/
Flächensegment <neut>, Fläche <fem>, Patch <masc> [math.]
         Note: durch Kurven beschriebene Fläche
 see: {Bézier patch}

`,`patch /pˈatʃ/
Flicken <masc>, Lappen <masc>, Fleck <masc> [textil.]
      "a jacket with leather patches at the elbows"  - ein Sakko mit Lederflecken an den Ellbogen
 see: {patches}

`,`patch /pˈatʃ/
Gewebeflicken <masc> [med.]
 see: {patches}

`,`patch /pˈatʃ/
Obst- oder Gemüsebeet <masc>, Anbaustelle <fem> [agr.]
         Note: im Nutzgarten
      "patch of beans"  - Bohnenbeet
 see: {patches}, {strawberry patch}

`,`patch /pˈatʃ/
Programmmodifikation <fem>, Programmverbesserung <fem>, Programmkorrektur <fem>, Direktkorrektur <fem>, Patch <masc> [comp.]
         Note: auf Objektprogrammebene
   Synonyms: {program modification}, {software patch}

 see: {soft patch}

         Note: at object program level
`]},{src:"penicillin",ref:"Penicillin",display_src:"penicillin",show_ref:!1,definition:[`penicillin /pˌɛnɪsˈɪlɪn/
Penicillin <neut>, Penizillin <neut> [med.]
`]},{src:"pills",ref:"Pillen",display_src:"pills",show_ref:!1,definition:[`pills /pˈɪlz/
Pillen <pl>
   Synonym: {tablets}

 see: {pill}, {tablet}, {pillule}, {pilule}, {bolus}

`]},{src:"polyethylene glycol",ref:"Polyethylenglykol",display_src:"polyethylene glycol",show_ref:!1,definition:[`polyethylene glycol /pˌɒlɪˈɛθɪlˌiːn ɡlˈaɪkɒl/
Polyethylenglykol <neut> [chem.] PEG,  /pˈɛɡ/
`]},{src:"potassium",ref:"Kalium",display_src:"potassium",show_ref:!1,definition:[`potassium /pətˈasiəm/
Kalium <neut> [chem.] K,  /kˈeɪ/
`]},{src:"powder",ref:"Puder",display_src:"powder",show_ref:!1,definition:[`powder /pˈaʊdə/
Puder <neut>, Pulver <neut>, Staub <masc>
 see: {metal powder}, {platelike powder}, {spattered powder}, {irregular powder}, {save one's energy}

`,`powder /pˈaʊdə/ <v>
etw. mit etw. bestreuen, bestäuben <v, trans> [cook.]
   Synonym: {dust sth. with sth.}

 see: {powdering}, {dusting}, {powdered}, {dusted}, {powders}, {dusts}, {powdered}, {dusted}

`,`powder /pˈaʊdə/ <v>
pudern, einpudern <v, trans>
      "powder one's face"  - sich das Gesicht pudern
 see: {powdering}, {powdered}, {powders}, {powdered}

`]},{src:"prescription",ref:"Verankerung",display_src:"prescription",show_ref:!1,definition:[`prescription /pɹɪskɹˈɪpʃən/
Verankerung eines lange bestehenden faktischen Rechtszustands [jur.]  [endgültige]
 see: {positive prescription}, {negative prescription}, {limitation of actions}

         Note: consolidation of a legal status that has existed for a long time
`,`prescription /pɹɪskɹˈɪpʃən/
Verjährung <fem> [jur.]
      "prescription of a claim"  - Verjährung eines Anspruchs
      "The claim is extinguished by prescription."  - Der Anspruch erlischt durch Verjährung.
   Synonyms: {statute of limitations}, {limitation of actions}, {limitation/lapse of time}

 see: {limitation of (the right of) action}, {expiration of a right of action through lapse of time}, {limitation of action for statutory warranty claims}, {limitation in respect of war crimes}, {prescriptive right}

`,`prescription /pɹɪskɹˈɪpʃən/
 [medical] Verschreibung <fem>, ärztliche Verordnung <fem>, Rezept <neut>, Rezeptur <fem>, Präskription <fem> [med.]
      "write (out) a prescription"  - ein Rezept ausstellen
   Synonyms: {recipe}, {formula}

 see: {prescriptions}, {medications}, {recipes}, {dietary prescription}, {without prescription}

`,`prescription /pɹɪskɹˈɪpʃən/
verschreibungspflichtig, rezeptpflichtig <adj> [med.]  [pharm.]
      "prescription-only medicine"  - verschreibungspflichtiges Arzneimittel, rezeptpflichtiges Medikament
   Synonyms: {prescription-only}, {available only on prescription}

 see: {prescription drug}

         Note: prepositive
`]},{src:"protein",ref:"Eiweißstoff",display_src:"protein",show_ref:!1,definition:[`protein /pɹˈəʊtiːn/
Eiweißstoff <masc>, Eiweißkörper <masc>, Eiweiß <neut>, Protein <neut> [biochem.]
      "blood plasma protein"  - Blutplasmaeiweiß, Bluteiweiß, Plasmaeiweiß, Blutplasmaprotein, Plasmaprotein
   Synonym: {albuminous substance}

 see: {blood protein}, {plasma protein}, {chromoprotein}, {structural protein}, {conjugated protein}, {proteid}, {morphogene protein}, {morphogene}, {mucoprotein}, {nucleoprotein}, {recombination protein}, {raw protein}, {protective protein}, {stress protein}, {carrier protein}, {virus protein}

`]},{src:"retinal",ref:"retinal",display_src:"retinal",show_ref:!1,definition:[`retinal /ɹˈɛtɪnəl/
retinal <adj>, die Netzhaut betreffend [med.]
`]},{src:"salt",ref:"Salz",display_src:"salt",show_ref:!1,definition:[`salt /sˈɒlt/
Salz <neut> [min.]  [chem.]  [cook.]
 see: {salts}, {sea salt}, {evaporated salt}, {rock salt}, {mineral salt}, {native salt}, {halite}, {stone salt}, {salify}

`,`salt /sˈɒlt/ <v>
salzen, einsalzen, einpökeln <v, trans> [cook.]
      "he/she salts"  - er/sie salzt
      "I/he/she salted"  - ich/er/sie salzte
      "he/she has/had salted"  - er/sie hat/hatte gesalzen/gesalzt
      "it is/was salted"  - es ist/war gesalzen
 see: {salting}, {salted}, {unsalted}

`]},{src:"salt water",ref:"Salzwasser",display_src:"salt water",show_ref:!1,definition:[`salt water /sˈɒlt wˈɔːtə/
Salzwasser <neut>
   Synonyms: {salty water}, {saltwater}, {seawater}, {brine}, {saline water}

`]},{src:"sedative",ref:"Beruhigungsmittel",display_src:"sedative",show_ref:!1,definition:[`sedative /sˈɛdətˌɪv/
Beruhigungsmittel <neut>, Sedativum <neut>, Tranquilizer <masc> [med.]  [pharm.]
   Synonym: {tranquillizer}

 see: {sedatives}, {tranquillizers}

`,`sedative /sˈɛdətˌɪv/
beruhigend <adj>
`]},{src:"sodium",ref:"Natrium",display_src:"sodium",show_ref:!1,definition:[`sodium /sˈəʊdiəm/
Natrium <neut> [chem.] Na,  /nˈɑː/
`]},{src:"solids",ref:"feste",display_src:"solids",show_ref:!1,definition:[`solids /sˈɒlɪdz/
feste Nahrung
   Synonym: {solid food}

 see: {food}, {tucker}, {summery food}, {bush tucker}

`,`solids /sˈɒlɪdz/
Feststoffe <pl>, feste Stoffe, feste Bestandteile
      "the water-soluble solids of coffee"  - die wasserlöslichen festen Bestandteile des Kaffees
 see: {solid}, {solid matter}, {solid substance}, {suspended solids}, {propping agent}

`,`solids /sˈɒlɪdz/
Feststoffe <pl>
         Note: in einem Gewässer
   Synonyms: {stream load}, {sediment}

`,`solids /sˈɒlɪdz/
geometrische Körper <pl>, Körper <pl>
   Synonym: {geometric solids}

 see: {geometric solid}, {solid}

`]},{src:"solution",ref:"Auflösung",display_src:"solution",show_ref:!1,definition:[`solution /səlˈuːʃən/
Auflösung <fem>, Lösungskonzept <neut>
`,`solution /səlˈuːʃən/
Lösung <fem> [math.]
      "closed-form analytical solution"  - geschlossene analytische Lösung
`,`solution /səlˈuːʃən/
Lösung <fem>, Lösungsweg <masc>
         Note: für ein Problem
      "find a solution"  - eine Lösung finden
 see: {solutions}, {special solution}, {custom solution}, {definitive solution}, {feasible solutions}, {satisfactory solution}

         Note: to a problem
`,`solution /səlˈuːʃən/ (soltn /sˈəʊltən/)
Lösung <fem> [chem.]
      "solution of chlorinated lime"  - Chlorkalklösung
      "solution of electrolytes"  - Elektrolytlösung
      "solution of iodine and potassium iodide"  - Kaliumpolyiodid-Lösung, Iod-Kaliumiodid-Lösung, Iod-Iod-Kaliumlösung
 see: {staining solution}, {drug solution}, {etching solution}, {test solution}, {analytical solution}, {sugar solution}, {equimolecular solution}, {ideal solution}, {balanced solution}

`,`solution /səlˈuːʃən/
Problemlösung <fem>
   Synonym: {problem solution}

 see: {individual solution}

`,`solution /səlˈuːʃən/
Lösungswort <neut>
   Synonym: {solution word}

`]},{src:"spray",ref:"Blumengebinde",display_src:"spray",show_ref:!1,definition:[`spray /spɹˈeɪ/
Blumengebinde <neut>, Gebinde <neut>
      "a spray of chrysanthemums and roses"  - ein Gebinde aus Chrysanthemen und Rosen
   Synonym: {floral spray}

 see: {floral sprays}, {sprays}

`,`spray /spɹˈeɪ/
Brosche in Blumenform
   Synonym: {spray brooch}

 see: {brooch}, {brooches}

`,`spray /spɹˈeɪ/
Gischt <fem>, Sprühwasser <neut>
`,`spray /spɹˈeɪ/
Spray <masc>
`,`spray /spɹˈeɪ/
Spritzmittel <neut> [agr.]
   Synonym: {insectizide spray}

`,`spray /spɹˈeɪ/
Spritzwasser <neut>
   Synonym: {spray water}

`,`spray /spɹˈeɪ/
Sprühdose <fem>, Sprühflasche <fem>, Spraydose <fem>, Aerosoldose <fem>
   Synonyms: {spray can}, {aerosol can}, {aerosol bomb}, {aerosol spray}, {aerosol}

 see: {spray cans}, {aerosol cans}, {aerosol bombs}, {aerosol sprays}, {aerosols}, {sprays}

`,`spray /spɹˈeɪ/
kleiner (grüner) Zweig <masc>, Zweiglein <neut> [sprießendes] , Reis <neut> [geh.]  [bot.]  [frisches]
   Synonym: {sprig}

 see: {sprays}, {sprigs}, {acacia sprig}

`,`spray /spɹˈeɪ/ <v>
etw. (pumpartig) aufsprühen, etw. (pumpartig) besprühen <v, trans>, sich etw. (an einen Körperteil) sprühen <v, intr>
      "spritz with a little hair setting spray"  - etwas Haarfestiger aufsprühen
      "spritz your hair with glitter spray"  - sich Glitzerspray in die Haare sprühen
   Synonym: {spritz}

 see: {spraying}, {spritzing}, {sprayed}, {spritzed}

`,`spray /spɹˈeɪ/ <v>
sprühen, spritzen, versprühen <v, trans>
 see: {spraying}, {sprayed}, {sprays}, {sprayed}

`,`spray /spɹˈeɪ/ <v>
zerstäuben <v, trans>
 see: {spraying}, {sprayed}

`]},{src:"steroid",ref:"Steroid",display_src:"steroid",show_ref:!1,definition:[`steroid /stˈɛɹɔɪd/
Steroid <neut> [pharm.]
 see: {steroids}

`]},{src:"sugar",ref:"Zucker",display_src:"sugar",show_ref:!1,definition:[`sugar /ʃˈʊɡə/
Zucker <masc>
      "white sugar crystals"  - Hagelzucker
      "Do you use sugar?"  - Nimmst du Zucker?
 see: {brown sugar}

`]},{src:"sugars",ref:"Zuckerarten",display_src:"sugars",show_ref:!1,definition:[`sugars /ʃˈʊɡəz/
Zuckerarten <pl>
`]},{src:"suppository",ref:"Zäpfchen",display_src:"suppository",show_ref:!1,definition:[`suppository /səpˈɒzɪtəɹi/
Zäpfchen <neut>, Suppositorium <neut> [med.]
 see: {suppositories}

`]},{src:"suspension",ref:"Abhängung",display_src:"suspension",show_ref:!1,definition:[`suspension /səspˈɛnʃən/
Abhängung <fem> [constr.]
`,`suspension /səspˈɛnʃən/
Aufhängung <fem>, Aufhängen <neut>
      "floating supported suspension"  - schwimmend gelagerte Aufhängung
      "suspension to the platform"  - Aufhängung zur Bühne
 see: {suspensions}, {spring suspension}, {rigid suspension}, {boom suspension}

`,`suspension /səspˈɛnʃən/
Aufschlämmung <fem>, Suspension <fem> [chem.]
 see: {suspensions}

`,`suspension /səspˈɛnʃən/
vorübergehende Aufhebung <fem>, Hemmung <fem>
`,`suspension /səspˈɛnʃən/
zeitweiliger Ausschluss <masc>
`,`suspension /səspˈɛnʃən/
Aussetzen <neut>, Aussetzung <fem>, vorübergehende Unterbrechung <fem>, Sistierung <fem> [geh.]
         Note: einer Sache
      "suspension of the proceedings"  - Aussetzung des Verfahrens
      "the suspension of an order / of judicial proceedings"  - die Aussetzung einer Anordnung/eines Gerichtsverfahrens
         Note: of sth.
`,`suspension /səspˈɛnʃən/
Beurlaubung <fem>, Suspendierung <fem>
 see: {administrative suspension}

`,`suspension /səspˈɛnʃən/
einstweilige Einstellung <fem>
      "suspension of operations"  - Einstellung des Flugbetriebs
`,`suspension /səspˈɛnʃən/
zeitweilige Entziehung <fem>
`,`suspension /səspˈɛnʃən/
Federung <fem>
      "rising-rate suspension"  - progressive Federung
`,`suspension /səspˈɛnʃən/
Radaufhängung <fem>, Aufhängung <fem> [auto]
   Synonym: {wheel suspension}

 see: {wheel suspensions}, {suspensions}

`,`suspension /səspˈɛnʃən/
Schwebezustand <masc>, Schwebe <fem> [chem.]
         Note: in einer Flüssigkeit
      "be in a state of suspension"  - sich in einem Schwebezustand befinden
      "keep particles in suspension in a liquid medium"  - particle in einem flüssigen Medium in Schwebe halten
   Synonym: {state of suspension}

         Note: in a liquid
`,`suspension /səspˈɛnʃən/
Startverbot <neut>, Sperre <fem> [sport]
 see: {suspensions}, {be banned}, {The player was banned for six weeks.}

`,`suspension /səspˈɛnʃən/
Suspendierung <fem>
         Note: von
         Note: from
`,`suspension /səspˈɛnʃən/
Vorhalt <masc> [mus.]
      "suspension of the fourth"  - Quartvorhalt
      "preparation of a suspension"  - Vorbereitung eines Vorhalts
      "resolution of a suspension"  - Auflösung eines Vorhalts
`]},{src:"syringe",ref:"Injektionsnadel",display_src:"syringe",show_ref:!1,definition:[`syringe /sɪɹˈɪndʒ/
Injektionsnadel <fem>, Spritze <fem> [med.]
      "fill a syringe"  - eine Spritze aufziehen
      "draw up insulin in a syringe"  - Insulin in eine Spritze aufziehen
   Synonym: {injection needle}

 see: {injection needles}, {syringes}, {vaccination needle}, {rectal syringe}, {enema syringe}, {anaesthesia syringe}, {anesthesia syringe}, {hypodermic needle}, {hypodermic syringe}, {hypodermic}, {dacryosyringe}

`]},{src:"tape",ref:"Band",display_src:"tape",show_ref:!1,definition:[`tape /tˈeɪp/
Band <neut>
      "play music from tape"  - Musik vom Band spielen, Musik ab Band spielen
 see: {tapes}

`,`tape /tˈeɪp/
Tonband <neut>, Band <neut>
      "tape-record"  - auf Band aufnehmen
   Synonym: {audiotape}

 see: {blank tape}, {on tape}, {tape}, {Digital Audio Tape}

`,`tape /tˈeɪp/ <v>
auf Band aufnehmen
 see: {audiotape}, {tape}, {blank tape}, {on tape}, {Digital Audio Tape}

`]},{src:"taper",ref:"",display_src:"taper",show_ref:!1,definition:[`taper /tˈeɪpə/
 [fig.] Abnahme <fem>, Verringerung <fem>
`,`taper /tˈeɪpə/
Spitzkerze <fem>, Etoilekerze <fem>
   Synonym: {taper candle}

 see: {candle}, {candles}, {altar candle}, {scented candle}, {aromatic candle}, {jar candle}, {graveyard candle}, {ball candle}, {oil candle}, {offering candle}, {prayer candel}, {paschal candle}, {incense candle}, {floating candle}, {soya candle}, {soy candle}, {straight candle}, {baptism candle}, {baptismal candle}, {votive candle}, {wax candle}, {storm candle}, {hurricane candle}, {decorative candle}, {pillar candle}

`,`taper /tˈeɪpə/ <v>
sich verjüngen, sich verengen <v, refl>, spitz zulaufen, konisch zulaufen <v, intr>
   Synonym: {taper off}

 see: {tapering}, {tapering off}, {tapered}, {tapered off}

`]},{src:"thiamine",ref:"Thiamin",display_src:"thiamine",show_ref:!1,definition:[`thiamine /θˈaɪəmˌaɪn/
Thiamin <neut>, Vitamin B1 <neut>, Aneurin <neut> [biochem.]
   Synonyms: {vitamin B1}, {aneurin}

`]},{src:"tobacco",ref:"Tabak",display_src:"tobacco",show_ref:!1,definition:[`tobacco /təbˈakəʊ/
Tabak <masc>
         Note: zum Rauchen
      "rolling cigarette tobacco"  - Drehtabak für Zigaretten
      "tubing cigarette tobacco"  - Stopftabak für Zigaretten
   Synonyms: {baccy}, {tabac}

 see: {pipe tobacco}, {smoking tobacco}, {raw tobacco}, {rolling tobacco}, {tubing tobacco}, {fast tobacco}

`,`tobacco /təbˈakəʊ/
Tabakpflanzen <pl>, Tabak <masc> [bot.]
         Note: Nicotiana
         Note: botanische Gattung
   Synonym: {tobacco plants}

         Note: botanical genus
`]},{src:"valium",ref:"",display_src:"valium",show_ref:!1,definition:[`valium /vˈaliəm/
 [tm] Valium <neut> [tm]  [pharm.]
`]},{src:"vaseline",ref:"Vaselin",display_src:"vaseline",show_ref:!1,definition:[`vaseline /vˈasəlˌiːn/
Vaselin <neut>, Vaseline <fem>
   Synonym: {paraffin(e) jelly}

`]},{src:"water",ref:"Wasser",display_src:"water",show_ref:!1,definition:[`water /wˈɔːtə/
Wasser <neut>
      "take the waters"  - Wasseranwendungen durchführen (Heilquelle)
      "Where there is water, there is life."  - Wo Wasser ist, ist Leben.
 see: {gravitational water}, {aggressive water}, {corrosive water}, {purified water}, {distilled water}, {aqua purificata}, {pressing water}, {dystrophic water}, {wetted water}, {decationized water}, {running water}, {connate water}, {fossil water}, {external water}, {other water}, {combined water}, {constitutional water}, {artesian water}, {hard water}, {hygroscopic water}, {hygroscopic moisture}, {absorbed water}, {primitive water}, {juvenile water}, {acid water}, {muddy water}, {stagnant water}, {circulating water}, {subsurface water}, {underground water}, {subterranean water}, {soft water}, {headsword}, {waterborne}, {afloat}, {can't hold a candle to sb.}, {tread water}, {paddle}, {They still put their trousers / pants on one leg at a time (like everybody else / just like you/we do).}

`,`water /wˈɔːtə/
Wasserwelle <fem>, Welle <fem> [envir.]
   Synonym: {water wave}

 see: {water waves}, {waters}, {surging wave}, {surging billow}, {heavy wave}, {billow}, {wavelet}, {ripplet}, {progressive wave}, {travelling wave}, {swashing wave}, {breast the waves}

`,`water /wˈɔːtə/ <v>
gießen, begießen, bewässern, wässern, schwemmen <v, trans>
      "water the plants"  - Blumen gießen
      "water the lawn"  - den Rasen bewässern, den Rasen sprengen
   Synonym: {supply water}

 see: {watering}, {supplying water}, {watered}, {supplied water}, {waters}, {supplies water}, {watered}, {supplied water}, {unwatered}

`,`water /wˈɔːtə/ <v>
tränen <v, intr>
      "His eyes were watering."  - Seine Augen tränten.
 see: {watering}, {watered}

`]},{src:"abnormalities",ref:"Abnormitäten",display_src:"abnormalities",show_ref:!1,definition:[`abnormalities /ɐbnɔːmˈalɪtiz/
Abnormitäten <pl>
 see: {anomalousness}

`,`abnormalities /ɐbnɔːmˈalɪtiz/
Abweichungen <pl>, Anomalien <pl>, Abnormitäten <pl>, Aberrationen <pl>, Unregelmäßigkeiten <pl>
   Synonyms: {aberrations}, {anomalies}

 see: {aberration}, {anomaly}, {abnormality}, {chromosomal aberration}, {chromosomal anomaly}, {chromosomal abnormality}

`]},{src:"balance",ref:"Abgleich",display_src:"balance",show_ref:!1,definition:[`balance /bˈaləns/
Abgleich <masc>
   Synonyms: {adjustment}, {alignment}

`,`balance /bˈaləns/
Ausgewogenheit <fem>, Gleichgewicht <neut>
         Note: bei Kräften, Interessen usw.
   Synonym: {equipoise}

`,`balance /bˈaləns/
Beharrungszustand <masc>
   Synonyms: {equilibrium}, {steady-state}

`,`balance /bˈaləns/
Bilanz <fem>, Vermögensübersicht <fem> [econ.]  [adm.]
      "adjusted balance sheet"  - berichtigte Bilanz
      "audited balance sheet"  - geprüfte Bilanz
      "business' balance sheet"  - Geschäftsbilanz
      "group balance sheet"  - Konzernbilanz, konsolidierte Bilanz
      "consolidated balance sheet"  - Konzernbilanz, konsolidierte Bilanz
      "dress up the balance sheet"  - die Bilanz auffrisieren
      "provisional balance sheet"  - vorläufige Bilanz
      "combined balance sheet"  - zusammengefasste Bilanz
      "draw up/make up/prepare the balance sheet"  - die Bilanz erstellen/aufstellen
      "audit/examine the balance sheet"  - die Bilanz prüfen
      "appear in the balance sheet"  - in der Bilanz erscheinen/aufscheinen
   Synonyms: {balance sheet}, {financial statement}, {asset and liability statement}

 see: {opening balance}, {funds statement}, {consolidated return}

`,`balance /bˈaləns/
Gegengewicht <neut>
         Note: zu
   Synonym: {balance weight}

         Note: to
`,`balance /bˈaləns/
körperliches Gleichgewicht <neut>, Gleichgewicht <neut>, Balance <fem>
      "overbalance sb./sth."  - jdn./etw. aus dem Gleichgewicht bringen, aus der Balance bringen
      "unbalance sb./sth."  - jdn./etw. aus dem Gleichgewicht bringen, aus der Balance bringen
      "keep your balance"  - das Gleichgewicht halten
      "lose your balance"  - das Gleichgewicht verlieren, aus dem Gleichgewicht kommen, aus der Balance geraten, umkippen
   Synonym: {physical balance}

 see: {overbalance}

`,`balance /bˈaləns/
Gleichgewicht <neut>, Balance <fem> [übtr.]
      "balance of terror"  - Gleichgewicht des Schreckens
      "emotional / mental / psychic balance"  - seelisches Gleichgewicht
      "emotional / mental / psychic balance"  - seelisches Gleichgewicht
      "theory of social balance"  - Theorie des sozialen Gleichgewichts
      "be off balance"  - aus dem Gleichgewicht geraten sein, im Ungleichgewicht sein
      "be out of balance"  - aus dem Gleichgewicht geraten sein, im Ungleichgewicht sein
      "maintain the balance"  - das Gleichgewicht aufrechterhalten
      "balance sth."  - etw. im Gleichgewicht halten
      "unbalance sb. (of a thing)"  - jdn. aus dem Gleichgewicht bringen (Sache)
      "destroy the ecological balance of an area"  - das ökologische Gleichgewicht in einem Gebiet zerstören
      "It's still in the balance."  - Es ist noch alles offen.
   Synonyms: {equilibrium}, {poise}

 see: {water balance}, {fluid equilibrium}, {genetic equilibrium}, {hormonal balance}, {physiological balance}, {physiological equilibrium}, {strategic balance}, {external balance}

`,`balance /bˈaləns/
Guthaben <neut>, Aktivsaldo <masc> [fin.]
      "blocked credit balance, blocked balance"  - gesperrtes Guthaben, Sperrguthaben
      "Your credit balance:"  - Saldo zu Ihren Gunsten:
   Synonym: {credit balance}

`,`balance /bˈaləns/
Restsumme <fem> [fin.]
   Synonym: {amount remaining}

 see: {take/pick up the slack}

`,`balance /bˈaləns/
Saldo <masc>, Kontostand <masc>
   Synonym: {balance of account}

 see: {balances}, {on balance}, {debit balance}, {deficit balance}

`,`balance /bˈaləns/
Unruh <fem>
         Note: der Uhr
   Synonym: {balance wheel}

`,`balance /bˈaləns/
Waage <fem>
      "flush-mounted platform balance"  - Unterflurwaage
      "balance (out) the scales"  - die Waage einspielen
      "tip/turn the balance/scales"  - das Zünglein an der Waage sein
   Synonyms: {pair of scales}, {scales}, {scale}

 see: {balances}, {scales}, {torque balance}, {torque scale}, {spring balance}, {spring scale}, {hydrostatic balance}, {hydrostatic scales}, {microbalance}, {weigh in at 80 kilograms}, {platform balance}, {platform scales}, {inclination balance}, {projection balance}, {comparator machine}

`,`balance /bˈaləns/ <v>
abgleichen <v, trans>
 see: {balancing}, {balanced}

`,`balance /bˈaləns/ <v>
abwägen <v, trans>
 see: {balancing}, {balanced}

`,`balance /bˈaləns/
 [fair] ausgeglichenes Verhältnis <neut>, ausgewogenes Verhältnis <neut>, Ausgleich <masc>
         Note: zwischen zwei Sachen
      "balance of power"  - ausgeglichenes Kräfteverhältnis, Gleichgewicht der Kräfte
      "strike a fair balance between the needs of the individual and the needs of the community"  - ein ausgewogenes Verhältnis / einen Ausgleich zwischen den Bedürfnissen des Einzelnen und denen der Gemeinschaft finden
         Note: between two things
`,`balance /bˈaləns/ <v>
auswuchten <v, trans> [auto]  [Reifen, Räder]
      "balance the wheels"  - die Räder auswuchten
 see: {balancing}, {balanced}

         Note: tyres; wheels
`,`balance /bˈaləns/ <v>
balancieren, die Balance halten, das Gleichgewicht halten <v, intr>
      "He balanced on one foot."  - Er balancierte auf einem Fuß
   Synonym: {achieve a balance}

`]},{src:"bleeding",ref:"zur",display_src:"bleeding",show_ref:!1,definition:[`bleeding /blˈiːdɪŋ/
zur Ader lassend, schröpfend
 see: {bleed sb.}, {bled}

`,`bleeding /blˈiːdɪŋ/
Aderlass <masc> [med.]  [hist.]
   Synonym: {blood-letting}

`,`bleeding /blˈiːdɪŋ/
Bluten <neut> [med.]
   Synonyms: {haemorrhaging}, {hemorrhaging}

`,`bleeding /blˈiːdɪŋ/
Blutung <fem>, Blutausfluss <masc>, Hämorrhagie <fem> [med.]
      "bleeding into an organ"  - Einblutung in ein Organ
      "bleeding into the thoracic cavity"  - intrathorakale Blutung
      "menstruation-like bleeding / haemorrhage"  - menstruationsartige Blutung
      "bleeding into the lung"  - pulmonale Blutung
   Synonyms: {haemorrhage}, {hemorrhage}, {extravasion of blood}, {staxis}

 see: {announcing aemorrhage}, {anovulatory haemorrhage}, {atonic haemorrhage}, {pronounced bleeding}, {marked haemorrhage}, {external haemorrhage}, {acyclic haemorrage}, {concomitant bleeding}, {associated bleeding}, {attendant haemorrhage}, {recurrent bleeding}, {recurring haemorrhage}, {reactive haemorrhage}, {fibrinolytic bleeding}, {fibrinolytic haemorrhage}, {functional bleeding}, {functional haemorrhage}, {abundant bleeding}, {copious bleeding}, {massive haemorrhage}, {internal haemorrhage}, {entorrhagia}, {afterbleeding}, {posthaemorrhage}, {posthemorrhage}, {secondary haemorrhage}, {postpartum bleeding}, {postpartum haemorrhage}, {pulmonary haemorrhage}, {punctate bleeding}, {petechial haemorrhage}, {spurting bleeding}, {spurting haemorrhage}, {profuse bleeding}, {profuse haemorrhage}, {unavoidable bleeding}, {concealed bleeding}, {concealed haemorrhage}, {delayed bleeding}, {delayed haemorrhage}, {consecutive haemorrhage}, {reactionary haemorrhage}, {cause bleeding}, {cause haemorrhage}, {check bleeding}, {arrest bleeding}, {control bleeding}, {control haemorrhage}, {prevent bleeding}, {prevent haemorrhage}, {bleed internally}

`,`bleeding /blˈiːdɪŋ/
Entlüften <neut>
`,`bleeding /blˈiːdɪŋ/
blutend
 see: {bleed}, {bled}

`,`bleeding /blˈiːdɪŋ/
blutig, blutend <adj>
`,`bleeding /blˈiːdɪŋ/
schröpfend
   Synonym: {cupping}

 see: {bleed}, {cup}, {bled}, {cupped}

`,`bleeding /blˈiːdɪŋ/
verdammt <adj> [ugs.]
   Synonyms: {bloody}, {flaming}, {ruddy}

 see: {bloody similar}, {bloody well}

`,`bleeding /blˈiːdɪŋ/
Sickerung <fem>
   Synonym: {percolation}

`]},{src:"breathing",ref:"Atmung",display_src:"breathing",show_ref:!1,definition:[`breathing /bɹˈiːðɪŋ/
Atmung <fem>, Atmen <neut> [med.]
      "Biot's breathing"  - Biot'sche Atmung
   Synonyms: {respiration}, {pneusis}

 see: {abdominal respiration}, {laboured respiration}, {forced breathing}, {assisted respiration}, {mechanical respiration}, {asthmoid respiration}, {adequate respiration}, {respiratory adequacy}, {accelerated respiration}, {tachypnoea}, {tachypnea}, {polypnoea}, {bronchial respiration}, {tubular breathing}, {bronchovesicular respiration}, {bronchovesicular breathing}, {chest breathing}, {thoracic breathing}, {costal respiration}, {impeded respiration}, {hampered breathing}, {difficult breathing}, {foetal respiration}, {placental respiration}, {shallow respiration}, {hypopnoea}, {hyperpnoea}, {air hunger}, {gasping respiration}, {wheezing respiration}, {controlled respiration}, {artificial respiration}, {slow respiration}, {paradoxical respiration}, {pendelluft respiration}, {periodic breathing}, {hissing breathing}, {puerile respiration}, {pulmonary respiration}, {stertorous respiration}, {spasmodic respiration}, {rapid respiration}, {tachypnoea}, {shallow breathing}, {agonal respiration}, {gasping}, {sighing respiration}, {Silvester's method}, {deep respiration}, {irregular respiration}, {slow respiration}, {bradypnoea}, {vesicular respiration}

`,`breathing /bɹˈiːðɪŋ/
atmend
 see: {breathe}, {breathed}, {breathes}, {breathed}, {breathe heavily}

`,`breathing /bɹˈiːðɪŋ/
hauchend
 see: {breathe}, {breathed}

`,`breathing /bɹˈiːðɪŋ/
speiend
   Synonym: {spewing}

 see: {spew}, {breathe}, {spewed}, {breathed}

`]},{src:"chills",ref:"Abschreckplatten",display_src:"chills",show_ref:!1,definition:[`chills /tʃˈɪlz/
Abschreckplatten <pl>, Kokillen <pl>
   Synonym: {chill plates}

 see: {chill plate}, {chill}

`,`chills /tʃˈɪlz/
Frösteln <neut>, Schüttelfrost <masc>
   Synonym: {chill}

`,`chills /tʃˈɪlz/
kühlt, kühlt ab
 see: {chill}, {chilling}, {chilled}, {chilled}, {unchilled}

`]},{src:"concentration",ref:"Anreicherung",display_src:"concentration",show_ref:!1,definition:[`concentration /kˌɒnsəntɹˈeɪʃən/
Anreicherung <fem> [min.]
   Synonyms: {enrichment}, {accumulation}

 see: {supergene enrichment}, {hypogene enrichment}

`,`concentration /kˌɒnsəntɹˈeɪʃən/
Aufmarsch <masc> [mil.]
         Note: Zusammenziehen von Truppen zu einer Frontlinie
 see: {strategic concentration}

         Note: of troops
`,`concentration /kˌɒnsəntɹˈeɪʃən/
Eindickung <fem>
   Synonym: {thickening}

`,`concentration /kˌɒnsəntɹˈeɪʃən/
Konzentration <fem>
      "concentration of troops"  - Truppenkonzentration
 see: {concentrations}

`,`concentration /kˌɒnsəntɹˈeɪʃən/
Konzentrierung <fem>
`,`concentration /kˌɒnsəntɹˈeɪʃən/
Aufbereitung <fem>
   Synonyms: {treatment}, {dressing}, {processing}, {separation}, {beneficiation}, {cleansing}, {upgrading}, {milling}

`]},{src:"congestion",ref:"Gassenbesetztzustand",display_src:"congestion",show_ref:!1,definition:[`congestion /kəndʒˈɛstʃən/
Gassenbesetztzustand <masc> [telco.]
`,`congestion /kəndʒˈɛstʃən/
Kongestion <fem>, Blutandrang <masc> [med.]
`,`congestion /kəndʒˈɛstʃən/
Stockung <fem>, Stauung <fem>, Stagnation <fem>, Stase <fem>, Stasis <fem>, Anschoppung <fem> [med.]
         Note: Stillstand einer bewegten Körperflüssigkeit
      "chronic passive congestion"  - venöse Stauung
   Synonyms: {stagnation}, {stoppage}, {stasis}

 see: {Lane's disease}, {venous stasis}, {gastric stasis}

         Note: stoppage of flow of a body fluid
`,`congestion /kəndʒˈɛstʃən/
Überlastung <fem>
`,`congestion /kəndʒˈɛstʃən/
stockender Verkehr <masc>, Verkehrschaos <neut> [auto]
   Synonym: {traffic congestion}

`]},{src:"constipation",ref:"Verstopfung",display_src:"constipation",show_ref:!1,definition:[`constipation /kˌɒnstɪpˈeɪʃən/
Verstopfung <fem>, Darmverstopfung <fem> [med.]
 see: {constipations}

`]},{src:"cough",ref:"Husten",display_src:"cough",show_ref:!1,definition:[`cough /kˈɒf/
Husten <masc>, Tussis <fem> [med.]
      "dry/unproductive cough"  - trockener/unproduktiver Husten
   Synonym: {tussis}

 see: {barking cough}, {hacking cough}, {bloody cough}, {convulsive cough}, {productive cough}, {reflex cough}, {staccato cough}

`,`cough /kˈɒf/ <v>
 [Br.]  [coll.] auspacken, singen
         Note: wie ein Vogel, reden <v, trans> [ugs.]
         Note: Geheimgehaltenes enthüllen
      "Come on, cough up."  - Komm schon, spuck's aus.
   Synonyms: {tell all}, {cough up}

 see: {telling all}, {coughing up}, {coughing}, {told all}, {coughed up}, {coughed}, {That would be telling.}

`,`cough /kˈɒf/ <v>
husten <v, intr> [med.]
      "cough into a tissue"  - in ein Taschentuch husten
      "cough into your bent arm / your bent elbow / the inside of your arm / the crook of your elbow"  - in die Armbeuge husten
   Synonym: {cough up}

 see: {coughing}, {coughed}, {coughs}, {coughed}, {cough slightly}, {I'll tell him to whistle for it.}

`]},{src:"coughing up blood",ref:"Hämoptoe,",display_src:"coughing up blood",show_ref:!1,definition:[`coughing up blood /kˈɒfɪŋ ˌʌp blˈʌd/
Hämoptoe, Bluthusten <neut> [med.]
   Synonym: {haemoptysis}

`]},{src:"cramping",ref:"einengend,",display_src:"cramping",show_ref:!1,definition:[`cramping /kɹˈampɪŋ/
einengend, beengend, hemmend, hindernd
 see: {cramp}, {cramped}

`,`cramping /kɹˈampɪŋ/
einklammernd
 see: {cramp}, {cramped}

`,`cramping /kɹˈampɪŋ/
zusammenpferchend
   Synonyms: {jamming together}, {penning up}

 see: {jam together}, {pen up}, {cramp}, {jammed together}, {penned up}, {cramped}

`]},{src:"diarrhea",ref:"",display_src:"diarrhea",show_ref:!1,definition:[`diarrhea /dˌaɪəɹˈiə/
 [Am.] Durchfall <masc>, Diarrhoe <fem> [med.]
   Synonym: {diarrhoea}

 see: {explosive diarrhea}, {mild diarrhoea}, {paradysentery}, {tuberculous diarrhoea}

`]},{src:"difficulty",ref:"Beschwerlichkeit",display_src:"difficulty",show_ref:!1,definition:[`difficulty /dˈɪfɪkˌʌlti/
Beschwerlichkeit <fem>
 see: {difficulties}, {with difficulty}

`,`difficulty /dˈɪfɪkˌʌlti/
Schwierigkeit <fem>
         Note: bei etw.
      "fraught with difficulty"  - voller Schwierigkeiten
      "get into difficulty"  - in Schwierigkeiten geraten
      "overcome a difficulty"  - eine Schwierigkeit meistern
 see: {difficulties}, {difficulty}, {financial embarrassment}, {experience difficulties}

         Note: in doing sth.
`,`difficulty /dˈɪfɪkˌʌlti/
Schwierigkeiten <pl>
      "fraught with difficulty"  - voller Schwierigkeiten
      "get into difficulty"  - in Schwierigkeiten geraten
      "overcome a difficulty"  - eine Schwierigkeit meistern
   Synonym: {difficulties}

 see: {difficulty}, {financial embarrassment}, {experience difficulties}

`]},{src:"discomfort",ref:"Beschwerden",display_src:"discomfort",show_ref:!1,definition:[`discomfort /dɪskˈʌmfət/
Beschwerden <pl> [med.]
   Synonyms: {complaints}, {afflictions}, {trouble}, {molimina}

 see: {accompanying complaints}, {concomitant complaints}, {chest troubles}, {chief complaints}, {heart trouble}, {circulatory distress}, {liver trouble}, {stomach trouble}, {back complaints}, {back trouble}, {pregnancy compaints}, {pregnancy discomfort}, {pelvic complaints}, {digestive complaints}, {current complaints}, {orthostatic complaints}, {progressive symptoms}

`,`discomfort /dɪskˈʌmfət/
Unbehagen <neut>, Missbehagen <neut>, unangenehmes Gefühl <neut> [psych.]
      "Her teacher's presence caused her considerable discomfort."  - Die Anwesenheit ihres Lehrers bereitete ihr einiges Unbehagen.
   Synonyms: {unease}, {discomfiture}

`]},{src:"dizziness",ref:"Schwindel",display_src:"dizziness",show_ref:!1,definition:[`dizziness /dˈɪzɪnəs/
Schwindel <masc>, Vertigo <fem> [med.]
   Synonyms: {giddiness}, {vertigo}, {lipothymia}, {dinus}

 see: {ocular vertigo}, {permanent vertigo}, {stomachal vertigo}, {aural vertigo}, {auditory vertigo}, {vestibular vertigo}, {neurasthenic vertigo}, {paralytic vertigo}, {central vertigo}, {cerebral vertigo}

`,`dizziness /dˈɪzɪnəs/
Schwindelanfall <masc> [med.]
      "fits of dizziness"  - Schwindelanfälle
      "spells of dizziness"  - Schwindelanfälle
   Synonyms: {fit of dizziness}, {spell of dizziness}

`]},{src:"dizzy",ref:"rammdösig",display_src:"dizzy",show_ref:!1,definition:[`dizzy /dˈɪzi/
rammdösig <adj> [ugs.]
`,`dizzy /dˈɪzi/
Schwindel erregend, schwindelerregend, schwindlig, schwindelig <adj>
      "at a dizzy height"  - in schwindelnder Höhe
      "sb. gets dizzy / giddy"  - jdm. wird schwindlig
      "I am dizzy."  - Mir ist schwindlig., Mir schwindelt.
   Synonym: {giddy}

 see: {dizzier}, {dizziest}, {My head swims.}

`,`dizzy /dˈɪzi/
schwindelig, schwindlig, vertiginös, Schwindel… <adj> [med.]
   Synonyms: {giddy}, {vertiginous}, {dinic}, {dinical}

`]},{src:"drowsiness",ref:"Schläfrigkeit",display_src:"drowsiness",show_ref:!1,definition:[`drowsiness /dɹˈaʊsinəs/
Schläfrigkeit <fem>
`,`drowsiness /dɹˈaʊsinəs/
Somnolenz <fem>, Benommenheit mit Schläfrigkeit [med.]
   Synonyms: {somnolence}, {sleepiness}

`,`drowsiness /dɹˈaʊsinəs/
Trägheit <fem>, Antriebslosigkeit <fem> [med.]
   Synonym: {listlessness}

`]},{src:"exhaustion",ref:"völliger",display_src:"exhaustion",show_ref:!1,definition:[`exhaustion /ɛɡzˈɔːstʃən/
völliger Abbau
 see: {mining}, {winning extraction}, {winning}, {extracting}, {extraction}, {recovery}, {exploitation}, {coal mining}, {lignite mining}, {level free workings}, {open stope with pillar}, {uranium mining}, {hydraulic mining}, {auger mining}, {stowing exploitation}, {underground stoping}, {benching work}, {complete extraction}, {patching}

`,`exhaustion /ɛɡzˈɔːstʃən/
Erschöpfung <fem>, Erschöpfungszustand <masc> [med.]
 see: {mental exhaustion}, {brainfag}

`,`exhaustion /ɛɡzˈɔːstʃən/
Erschöpfung <fem>, völliges Aufbrauchen <neut>, restlose Nutzung <fem> [envir.]
         Note: von etw.
   Synonym: {depletion}

 see: {exhaution of the soil}

`,`exhaustion /ɛɡzˈɔːstʃən/
Erschöpfung <fem>, vollständige Ausschöpfung <fem> [adm.]  [jur.]
      "exhaustion of administrative remedies"  - Erschöpfung verwaltungsinterner Rechtsmittel
      "exhaustion of local remedies"  - Erschöpfung innerstaatlicher Rechtsmittel
      "exhaustion of a right"  - Erschöpfung eines Rechts
      "exhaustion of the reserves"  - Erschöpfung der Reserven
      "exhaustion of quotas"  - vollständige Ausschöpfung der Quoten
`,`exhaustion /ɛɡzˈɔːstʃən/
Überarbeitung <fem>, Überanstrengung <fem>
   Synonym: {overwork}

`,`exhaustion /ɛɡzˈɔːstʃən/
Versiegen <neut>
   Synonyms: {drying up}, {depletion}

`]},{src:"faint",ref:"Ohnmacht",display_src:"faint",show_ref:!1,definition:[`faint /fˈeɪnt/
Ohnmacht <fem>, Bewusstlosigkeit <fem>
 see: {feel faint}

`,`faint /fˈeɪnt/
leise <adj>
      "I have a faint suspicion that …"  - Ich habe den leisen Verdacht, dass …
      "There's not the faintest hope."  - Es besteht nicht die leiseste Hoffnung.
`,`faint /fˈeɪnt/
matt, dezent, zart, schwach, undeutlich <adj>
      "a faint pattern"  - ein zartes Muster
      "a faint chance/possibility"  - eine geringe Chance
`,`faint /fˈeɪnt/ <v>
ohnmächtig werden, bewusstlos werden, umkippen <v, intr> [ugs.]
   Synonyms: {pass out}, {black out}, {keel over}

 see: {fainting}, {passing out}, {blacking out}, {keeling over}, {fainted}, {passed out}, {blacked out}, {keeled over}, {faints}, {passes out}, {blacks out}, {keels over}, {fainted}, {passed out}, {blacked out}, {keeled over}

`,`faint /fˈeɪnt/
schwach <adj>
      "I feel faint with hunger."  - Mir ist ganz schwach vor Hunger.
`]},{src:"fainting",ref:"ohnmächtig",display_src:"fainting",show_ref:!1,definition:[`fainting /fˈeɪntɪŋ/
ohnmächtig werdend, bewusstlos werdend, umkippend
   Synonyms: {passing out}, {blacking out}, {keeling over}

 see: {faint}, {pass out}, {black out}, {keel over}, {fainted}, {passed out}, {blacked out}, {keeled over}, {faints}, {passes out}, {blacks out}, {keels over}, {fainted}, {passed out}, {blacked out}, {keeled over}

`]},{src:"falls",ref:"Fälle",display_src:"falls",show_ref:!1,definition:[`falls /fˈɔːlz/
Fälle <pl>, Stürze <pl>, Abstürze <pl>
 see: {fall}, {free fall}

`,`Falls /fˈɔːlz/
Wasserfall <masc>, Fälle <pl> [geogr.]
         Note: großer Wasserfall
   Synonyms: {waterfall}, {fall of water}, {linn}

 see: {waterfalls}

         Note: in names of big waterfalls
`]},{src:"fatigue",ref:"Arbeitsdienst",display_src:"fatigue",show_ref:!1,definition:[`fatigue /fɐtˈiːɡ/
Arbeitsdienst <masc> [mil.]
`,`fatigue /fɐtˈiːɡ/
Ermüdung <fem>, Müdigkeit <fem>, Ermattung <fem> [med.]
      "not even a suggestion of fatigue"  - nicht die leichteste Spur von Müdigkeit
   Synonym: {fatique}

 see: {chronic fatigue}

`,`fatigue /fɐtˈiːɡ/ <v>
ermüden <v, intr> [techn.]
 see: {fatigueing}, {fatiguing}, {fatigued}, {fatigues}, {fatigued}, {unfatigued}

`]},{src:"febrile",ref:"fiebrig",display_src:"febrile",show_ref:!1,definition:[`febrile /fˈɛbɹaɪl/
fiebrig <adj> [med.]
   Synonym: {feverish}

`]},{src:"feel faint",ref:"sich",display_src:"feel faint",show_ref:!1,definition:[`feel faint /fˈiːl fˈeɪnt/
sich der Ohnmacht nahe fühlen
 see: {faint}

`]},{src:"fever",ref:"Aufregung",display_src:"fever",show_ref:!1,definition:[`fever /fˈiːvə/
Aufregung <fem>, Fieber <neut> [übtr.]
 see: {football fever}

`,`fever /fˈiːvə/
Fieber <neut>, Febris <fem>, Pyrexie <fem> [med.]
      "excessive high fever"  - hohes Fieber, starkes Fieber, Hyperpyrexie
      "feverish/febrile/pyretic temperature"  - leichtes Fieber, erhöhte Temperatur
      "fever of unknown/undetermined origin"  - unklares Fieber
      "be in fever"  - Fieber haben
      "keep the fever down"  - das Fieber niedrig halten
      "bring the fever down"  - das Fieber senken
      "be delirious with fever"  - im Fieber phantasieren, im Fieberwahn sein
      "in (the) fever"  - während des Fiebers, im Fieberzustand
      "Do you have a fever/temperature?"  - Haben Sie Fieber?
   Synonyms: {pyrexy}, {pyrexia}, {phlegmonosis}

 see: {sthenic fever}, {hyperpyretic temperature}, {hyperpyrexia}, {temperature}, {adynamic fever}, {eupyrexia}, {febricula}, {vaccinal fever}, {polyleptic fever}, {periodic fever}, {transitory fever}, {intermittent fever}, {vesicular fever}, {haematuric fever}, {suppurative fever}, {haemoglobinuric fever}, {eruptive fever}, {exanthematous fever}, {be feversih}, {be febrile}, {register temperature}, {intrafebrile}

`]},{src:"floaters",ref:"Gründer",display_src:"floaters",show_ref:!1,definition:[`floaters /flˈəʊtəz/
Gründer <pl>
 see: {floater}

`,`floaters /flˈəʊtəz/
Wechselwähler <pl>, Wechselwählerinnen <pl>
   Synonyms: {floating voters}, {swing voters}

 see: {floating voter}, {swing voter}, {floater}

`]},{src:"function",ref:"technische",display_src:"function",show_ref:!1,definition:[`function /fˈʌŋkʃən/
technische Funktion <fem>, Funktion <fem> [techn.]
      "start to function"  - in Funktion treten
   Synonym: {technical function}

 see: {technical functions}, {functions}, {applied function}, {automatic function}, {telephone function}

`,`function /fˈʌŋkʃən/
Funktion <fem> [math.]
      "confluent hypergeometric function"  - konfluente hypergeometrische Funktion
      "discontinuity value of a function"  - Sprunggröße, Stufe einer Funktion
 see: {generating function}, {implicit function}

`,`function /fˈʌŋkʃən/
Funktion <fem>, Position <fem>, Stellung <fem>, Aufgabe <fem> [adm.]
      "perform/exercise one's functions"  - seine Funktionen ausüben/wahrnehmen
      "resign from/lay down all one's functions"  - alle seine Funktionen zurücklegen
      "functions of regulation and control"  - Regulierungs- und Kontrollaufgaben
   Synonym: {position}

 see: {advisory function}, {permanent position}

`,`function /fˈʌŋkʃən/ <v>
funktionieren <v, intr>
 see: {functioning}, {functioned}, {functions}, {functioned}

`]},{src:"headache",ref:"Kopfschmerzen",display_src:"headache",show_ref:!1,definition:[`headache /hˈɛdeɪk/
Kopfschmerzen <pl>, Kopfschmerz <masc>, Kopfweh <neut>, Brummschädel <masc> [ugs.]  [med.]
      "high blood pressure headache"  - Bluthochdruckkopfschmerz
      "Lavendar gives me a headache if it is too strong."  - Von Lavendel bekomme ich Kopfweh, wenn er zu stark ist.
 see: {headaches}, {splitting headache}, {anoxic headache}, {sick headache}

`]},{src:"hearing",ref:"Anhörung",display_src:"hearing",show_ref:!1,definition:[`hearing /hˈiəɹɪŋ/
Anhörung <fem>, mündliche Verhandlung <fem> [jur.] , Hearing <neut> [pol.]
      "adjourn a hearing"  - eine Anhörung vertagen
 see: {hearings}, {public hearing}

`,`hearing /hˈiəɹɪŋ/
Gehör <neut> [übtr.]
         Note: Anhören
      "give sb. a (fair) hearing"  - jdm. Gehör schenken
      "request a hearing from sb."  - jdn. um Gehör bitten
      "get a hearing from sb."  - bei jdm. Gehör finden
      "hearing in accorance with the law"  - rechtliches Gehör
      "be convicted without a hearing"  - ohne rechtliches Gehör verurteilt werden
      "Before a court, everyone shall be entitled to a hearing in accordance with the law."  - Vor Gericht hat jeder Anspruch auf rechtliches Gehör.
   Synonym: {audience}

 see: {hear sb.}, {listen (impartially) to sb.}, {refuse to listen to sb.}, {make oneself heard}, {make one's voice heard}, {due process of law}, {day in court}, {right to be heard before the court}, {give the parties opportunity for explanation}

`,`hearing /hˈiəɹɪŋ/
Hörvermögen <neut>, Hörfähigkeit <fem>, Gehör <neut>, Ohr <neut> [ugs.]  [med.]
      "have acute hearing"  - ein scharfes Gehör haben
      "have excellent hearing"  - ein sehr gutes Gehör haben
      "His hearing is good/poor."  - Er hört gut/schlecht.
   Synonyms: {power of hearing}, {ability to hear}, {audition}, {ear}

 see: {sharp ear}, {discriminating ear}, {park by feel/touch}

`,`hearing /hˈiəɹɪŋ/
hörend
 see: {hear sth.}, {heard}, {he/she hears}, {So I did hear right then.}, {Do you hear something?}, {Betty, can you hear me?}, {That's good to hear!}

`]},{src:"hydration",ref:"Wasseranlagerung",display_src:"hydration",show_ref:!1,definition:[`hydration /haɪdɹˈeɪʃən/
Wasseranlagerung <fem>, Hydratation <fem>, Hydratisierung <fem> [chem.]
         Note: Anlagerung von Wassermolekülen an Ionen
`]},{src:"inflammation",ref:"Entzündung",display_src:"inflammation",show_ref:!1,definition:[`inflammation /ɪnflamˈeɪʃən/
Entzündung <fem>, Inflammatio [med.]
 see: {inflammations}

`]},{src:"inhalation",ref:"Einatmen",display_src:"inhalation",show_ref:!1,definition:[`inhalation /ɪnhɐlˈeɪʃən/
Einatmen <neut>, Einatmung <fem>, Inhalation <fem>, Aspiration <fem> [med.]
      "foreign-body inhalation"  - Einatmen eines Fremdkörpers, Fremdkörperinhalation, Fremdkörperaspiration
   Synonyms: {inspiration}, {aspiration}

`]},{src:"itching",ref:"Juckreiz",display_src:"itching",show_ref:!1,definition:[`itching /ˈɪtʃɪŋ/
Juckreiz <masc>, Jucken <neut>
   Synonym: {itch}

`,`itching /ˈɪtʃɪŋ/
Pruritus <masc>, Juckreiz <masc> [med.]
   Synonym: {pruritus}

`,`itching /ˈɪtʃɪŋ/
juckend, krabbelnd, kribbelnd
 see: {itch}, {itched}, {itches}, {itched}

`]},{src:"lesion",ref:"Verletzung",display_src:"lesion",show_ref:!1,definition:[`lesion /lˈiːʒən/
Verletzung <fem>, Schädigung <fem>, Läsion <fem> [med.]
         Note: eines Organs
 see: {lesions}, {permanent lesion}, {skin lesion}

         Note: of an organ
`]},{src:"malaise",ref:"Unpässlichkeit",display_src:"malaise",show_ref:!1,definition:[`malaise /malˈeɪz/
Unpässlichkeit <fem>, Verstimmung <fem>, Malaise <fem> [med.]
`,`malaise /malˈeɪz/
 [formal] Unbehagen <neut>, Unwohlsein <neut>
`]},{src:"mood",ref:"Anwandlung",display_src:"mood",show_ref:!1,definition:[`mood /mˈuːd/
Anwandlung <fem>
`,`mood /mˈuːd/
Aussageweise <fem>, Modus <masc> [ling.]
   Synonym: {grammatical mood}

 see: {grammatical moods}, {moods}, {verb mood}

`,`mood /mˈuːd/
Stimmung <fem>, Laune <fem>, Gemütslage <fem>, Stimmungslage <fem>
      "general/current mood"  - allgemeine/aktuelle Stimmungslage
      "be in a good mood"  - gute Laune haben
      "be in a foul mood"  - in mieser Laune sein
      "the public mood"  - die allgemeine Stimmung
      "be in no mood to do sth."  - keine Anstalten machen, etw. zu tun
      "He is in one of his moods."  - Er hat wieder einmal seine Launen.
 see: {moods}

`,`mood /mˈuːd/
Stimmungslage <fem>
`]},{src:"movement",ref:"Bestrebung",display_src:"movement",show_ref:!1,definition:[`movement /mˈuːvmənt/
Bestrebung <fem>, Streben <neut>
`,`movement /mˈuːvmənt/
Bewegung <fem>
 see: {movements}, {upward movement}, {downward movement}, {constrained movement}, {apparent movement}

`,`movement /mˈuːvmənt/
Bewegungsfreiheit <fem> [adm.]
      "restriction of movement"  - Einschränkung der Bewegungsfreiheit
`,`movement /mˈuːvmənt/
Gehwerk <neut>
         Note: Uhr
   Synonyms: {wheel work}, {works}

`,`movement /mˈuːvmənt/
Regung <fem>
 see: {movements}

`,`movement /mˈuːvmənt/
Satz <masc> [mus.]
         Note: Abschnitt eines mehrteiligen Musikstücks
      "in the initial movement"  - im Eingangssatz
      "in the final movement"  - im Schlusssatz
 see: {movements}

         Note: section of a multipart piece of music
`,`movement /mˈuːvmənt/
Uhrwerk kleiner Uhren
 see: {clockwork motion}, {clockwork}, {springwork}, {spring drive}, {spring motor}

`,`movement /mˈuːvmənt/
Verbringung <fem> [adm.]
         Note: von etw.
   Synonym: {shipment}

         Note: of sth.
`]},{src:"nausea",ref:"Übelkeit",display_src:"nausea",show_ref:!1,definition:[`nausea /nˈɔːsɪə/
Übelkeit <fem>, Brechreiz <masc>, Nausea <fem> [med.]
      "postoperative nausea and vomiting"  - postoperative Übelkeit und Erbrechen
      "nauseate sb."  - bei jdm. Übelkeit erregen
      "nausea and vomiting in pregnancy"  - Übelkeit und Erbrechen in der Schwangerschaft
      "The smell nauseated her."  - Bei dem Geruch wurde ihr übel.
   Synonyms: {sickness}, {sick feeling}, {sicchasia}

 see: {morning sickness}, {matutinal nausea}

`,`nausea /nˈɔːsɪə/
Widerwille <masc>, Abscheu <fem>, Abscheu <masc> [veraltend]
         Note: gegen/über etw., Ekel <masc>
         Note: vor etw.
   Synonyms: {disgust}, {revulsion}

 see: {in disgust}

         Note: at/over sth.
`]},{src:"nosebleed",ref:"Nasenbluten",display_src:"nosebleed",show_ref:!1,definition:[`nosebleed /nˈəʊsbliːd/
Nasenbluten <neut>, Nasenblutung <fem>, Epistaxis <fem>, Rhinorrhagie <fem> [med.]
      "I've got a nosebleed."  - Mir blutet die Nase., Ich habe Nasebluten.
   Synonyms: {nasal bleeding}, {epistaxis}, {rhinorrhagia}

 see: {My nose is bleeding.}

`]},{src:"numbness",ref:"Benommenheit",display_src:"numbness",show_ref:!1,definition:[`numbness /nˈʌmnəs/
Benommenheit <fem>
`,`numbness /nˈʌmnəs/
Taubheit <fem>, Starre <fem>
`]},{src:"pain",ref:"Ärgernis",display_src:"pain",show_ref:!1,definition:[`pain /pˈeɪn/
Ärgernis <neut>
      "It's a pain (in the neck) having to enter the details again and again."  - Es ist so was von lästig, die Daten immer wieder neu eingeben zu müssen.
   Synonyms: {pain in the neck}, {pain in the backside / arse}, {pain in the butt / ass}

`,`pain /pˈeɪn/
Leid <neut>, Pein <fem> [poet.]  [psych.]
      "cause sb. pain"  - jdm. Leid zufügen/antun
      "joys and pains of life"  - die Freuden und Leiden im Leben
`,`pain /pˈeɪn/
Schmerzen <pl>, Schmerz <masc> [geh.]  [med.]
      "pain on compression"  - Stauchschmerz
      "be in pain"  - Schmerzen haben
      "racked by/with pain"  - schmerzgeplagt, von Schmerzen geplagt
      "Where's the pain exactly?"  - Wo genau haben Sie Schmerzen?, Wo genau tut's weh?
      "Where is the pain most strong/intense?"  - Wo sind die Schmerzen am stärksten?
      "How long have you had this pain?"  - Seit wann haben Sie diese Schmerzen?
 see: {pain}, {pains}, {mordant pain}, {chronic pain}, {pleasurable pain}, {suffer pain}, {feel pain}, {give pain}, {play sb. up}, {Pain is weakness leaving the body.}

`,`pain /pˈeɪn/
Schmerzen <pl>
      "pain on compression"  - Stauchschmerz
      "be in pain"  - Schmerzen haben
      "racked by/with pain"  - schmerzgeplagt, von Schmerzen geplagt
      "Where's the pain exactly?"  - Wo genau haben Sie Schmerzen?, Wo genau tut's weh?
      "Where is the pain most strong/intense?"  - Wo sind die Schmerzen am stärksten?
      "How long have you had this pain?"  - Seit wann haben Sie diese Schmerzen?
   Synonym: {pains}

 see: {pain}, {mordant pain}, {chronic pain}, {pleasurable pain}, {suffer pain}, {feel pain}, {give pain}, {play sb. up}, {Pain is weakness leaving the body.}

`,`pain /pˈeɪn/
Stich <masc>
         Note: Schmerz
   Synonyms: {stabbing}, {stitch}

 see: {stabbings}, {pains}, {stitches}

`,`pain /pˈeɪn/ <v, v, trans>
schmerzen, weh tun <v, intr>
   Synonym: {anguish}

 see: {paining}, {anguishing}, {pained}, {anguished}

`]},{src:"pass out",ref:"ohnmächtig",display_src:"pass out",show_ref:!1,definition:[`pass out /pˈas ˈaʊt/
ohnmächtig werden, bewusstlos werden, umkippen <v, intr> [ugs.]
   Synonyms: {faint}, {black out}, {keel over}

 see: {fainting}, {passing out}, {blacking out}, {keeling over}, {fainted}, {passed out}, {blacked out}, {keeled over}, {faints}, {passes out}, {blacks out}, {keels over}, {fainted}, {passed out}, {blacked out}, {keeled over}

`]},{src:"pressure",ref:"Druck",display_src:"pressure",show_ref:!1,definition:[`pressure /pɹˈɛʃə/
Druck <masc>, Pression <fem> [geh.]
      "smooth and continuous pressure"  - gleichmäßiger Druck
      "reduce the pressure"  - den Druck mindern
      "be under pressure"  - unter Druck stehen
      "put under pressure"  - unter Druck setzen
      "put pressure on sb."  - auf jdn. Druck/Pressionen ausüben, jdn. unter Druck setzen
      "apply pressure to sb."  - auf jdn. Druck/Pressionen ausüben, jdn. unter Druck setzen
      "apply pressure to"  - Druckmittel anwenden auf
      "work at high pressure"  - mit Hochdruck arbeiten
      "pressure acting in all directions"  - allseitiger Druck
 see: {pressures}, {total pressure}, {overall pressure}, {full pressure}, {minimum pressure}, {absolute pressure}, {confining pressure}, {directional pressure}, {unilateral pressure}, {axial compression}

`,`pressure /pɹˈɛʃə/
Druck <masc>, Drängen <neut> [pol.]  [soc.]
      "pressure from outside"  - Druck von außen
      "exert pressure on sth."  - auf jdn. Druck ausüben
      "be under pressure"  - unter Druck stehen
 see: {economic pressure}, {peer pressure}

`,`pressure /pɹˈɛʃə/
Stress <masc>
      "be under pressure"  - im Stress sein
   Synonym: {stress}

`]},{src:"rash",ref:"flüchtiger",display_src:"rash",show_ref:!1,definition:[`rash /ɹˈaʃ/
flüchtiger Hautausschlag <masc>, Vorexanthem <neut>, Rash <masc>
 see: {cutaneous eruption}, {eruption exanthema}, {exanthema}, {acneform drug eruption}, {drug eruption}, {drug rash}, {vaccination rash}, {vaccine rash}, {postvaccinal exanthema}, {pustular eruption}, {erupt}

`,`rash /ɹˈaʃ/
unbesonnen <adj>
   Synonyms: {impulsive}, {unthinking}

`,`rash /ɹˈaʃ/
ungestüm <adj>
`,`rash /ɹˈaʃ/
voreilig, vorschnell, überstürzt <adj>
 see: {rasher}, {rashest}

`]},{src:"redness",ref:"Röte",display_src:"redness",show_ref:!1,definition:[`redness /ɹˈɛdnəs/
Röte <fem> [med.]
         Note: der Haut
   Synonym: {erythema}

`,`redness /ɹˈɛdnəs/
Rotfärbung der Haut, Hautrötung <fem> [entzündliche] , Rötung <fem> [med.]
         Note: Entzündungssymptom
   Synonyms: {rubescence}, {rubor}

`]},{src:"reflux",ref:"Rückfluss",display_src:"reflux",show_ref:!1,definition:[`reflux /ɹˈiːflʌks/
Rückfluss <masc>, Rücklauf <masc>, Reflux <masc>
   Synonym: {return flow}

`]},{src:"seizure",ref:"Besitzergreifung",display_src:"seizure",show_ref:!1,definition:[`seizure /sˈiːʒə/
Besitzergreifung <fem>, Inbesitznahme <fem> [gewaltsame]
         Note: von etw.
      "the seizure of power by the rebels"  - die Machtergreifung durch die Rebellen
      "seizure of the parliamentary building"  - Besetzung des Parlamentsgebäudes
      "seizure of property"  - Beschlagnahmung von Eigentum
      "seizure of a town"  - Einnahme einer Stadt
      "seizure of a ship"  - Aufbringen eines Schiffs, Kapern eines Schiffes
      "unlawful seizure of aircraft"  - widerrechtliche Inbesitznahme von Luftfahrzeugen
 see: {land seizure}

         Note: of sth.
`,`seizure /sˈiːʒə/
Festfressen <neut> [techn.]
         Note: mechanischer Teile
   Synonym: {seizing}

`,`seizure /sˈiːʒə/
Krankheitsanfall <masc>, Anfall <masc>, Attacke <fem> [geh.]  [med.]
   Synonyms: {attack}, {access}, {bout}, {episode}

 see: {attacks}, {accesses}, {bouts}, {episodes}, {seizures}, {febrile attack}, {touch}

`,`seizure /sˈiːʒə/
Sicherstellung <fem> [adm.]
         Note: von etw.
      "seizures by police and customs"  - Sicherstellungen durch Polizei und Zoll
      "seizure as evidence"  - strafprozessuale Sicherstellung
      "make/effect a seizure"  - eine Sicherstellung vornehmen
         Note: of sth.
`]},{src:"sensation",ref:"das",display_src:"sensation",show_ref:!1,definition:[`sensation /sɛnsˈeɪʃən/
das Fühlen <neut>, das Gefühl <neut>, der Sensus <masc> [med.]
      "patients who have lost sensation in their arm"  - Patienten, die das Gefühl im Arm verloren haben
`,`sensation /sɛnsˈeɪʃən/
Gefühl <neut> [körperliches] , Empfindung <fem> [med.]
      "a burning sensation in the chest"  - ein brennendes Gefühl in der Brust
      "the physical sensation of pain"  - das körperliche Gefühl des Schmerzes
   Synonym: {physical sensation}

`,`sensation /sɛnsˈeɪʃən/
Gefühlseindruck <masc>, unbestimmtes Gefühl <neut> [psych.]
      "have the sensation of being watched"  - das (unbestimmte) Gefühl haben, beobachtet zu werden
      "It is a strange sensation to see your father played on a stage."  - Es ist ein komisches Gefühl, seinen Vater auf der Bühne verkörpert zu sehen.
`,`sensation /sɛnsˈeɪʃən/
Sensation <fem> [soc.]
      "a great sensation"  - eine große Sensation, ein großes Ereignis
      "create/cause a sensation"  - für eine Sensation sorgen
 see: {sensations}

`]},{src:"short of breath",ref:"kurzatmig",display_src:"short of breath",show_ref:!1,definition:[`short of breath /ʃˈɔːt ɒv bɹˈɛθ/
kurzatmig <adj> [med.]
      "become short of breath"  - kurzatmig werden
   Synonym: {short-winded}

`]},{src:"shortness of breath",ref:"Kurzatmigkeit",display_src:"shortness of breath",show_ref:!1,definition:[`shortness of breath /ʃˈɔːtnəs ɒv bɹˈɛθ/
Kurzatmigkeit <fem>, Schweratmigkeit <fem>, Atemnot <fem>, Luftnot <fem>, Dyspnoe <fem> [med.]
   Synonyms: {laboured breathing}, {difficult respiration}, {breathlessness}, {short-windedness}, {dyspnoea}

 see: {abdominal dyspnoea}, {liparodyspnoea}, {acidotic dyspnoea}, {haemodynamic dyspnoea}, {circulatory dyspnoea}, {slight dyspnoea}, {orthostastic dyspnoea}, {episodic dyspnoea}, {spasmodyspnoea}, {acetonasthma}, {relieve dyspnoea}

`]},{src:"signs",ref:"Anzeichen",display_src:"signs",show_ref:!1,definition:[`signs /sˈaɪnz/
Anzeichen <pl>, Hinweise <pl>, Zeichen <pl>, Indizien <pl>, Symptome <pl>
   Synonym: {indications}

 see: {sign}, {indication}

`,`signs /sˈaɪnz/
Hinweisschilder <pl>, Schilder <pl>
   Synonyms: {signposts}, {signboards}

 see: {signpost}, {sign}, {signboard}

`,`signs /sˈaɪnz/
Kennzeichen <pl>
   Synonym: {marks}

 see: {mark}, {sign}, {distinguishing marks}, {distinguishing features}

`,`signs /sˈaɪnz/
Schilder <pl>
 see: {sign}

`,`signs /sˈaɪnz/
Symptome <pl>
   Synonym: {symptoms}

 see: {symptom}, {sign}, {signum}, {general symptoms}, {cardinal symptom}, {leading symptom}, {display symptoms}

`,`signs /sˈaɪnz/
Zeichen <pl>
      "the signs of the times"  - die Zeichen der Zeit
 see: {sign}

`,`signs /sˈaɪnz/
unterzeichnet, unterschreibt, signiert, unterfertigt
 see: {sign}, {signing}, {signed}, {signed}, {sign personally}, {unsigned}

`]},{src:"sleepiness",ref:"Schläfrigkeit",display_src:"sleepiness",show_ref:!1,definition:[`sleepiness /slˈiːpinəs/
Schläfrigkeit <fem>, Verschlafenheit <fem>
`,`sleepiness /slˈiːpinəs/
Somnolenz <fem>, Benommenheit mit Schläfrigkeit [med.]
   Synonyms: {somnolence}, {drowsiness}

`]},{src:"soreness",ref:"Schmerz",display_src:"soreness",show_ref:!1,definition:[`soreness /sˈɔːnəs/
Schmerz <masc>
`,`soreness /sˈɔːnəs/
Wundsein <neut> [med.]
`]},{src:"stress",ref:"Beanspruchung",display_src:"stress",show_ref:!1,definition:[`stress /stɹˈɛs/
Beanspruchung <fem> [phys.]
 see: {dynamic stress}, {mechanical stress}, {directed stress}, {tectonic stress}, {permissible stress}, {combined stress}

`,`stress /stɹˈɛs/
Betonung <fem>, Akzent <masc> [ling.]
         Note: auf etw.
      "The stress is on the first syllable."  - Die Betonung liegt auf der ersten Silbe., Das Wort wird auf der ersten Silbe betont.
   Synonyms: {emphasis}, {accent}

 see: {primary stress}, {secondary stress}, {Stress falls on the first syllable of the word.}

`,`stress /stɹˈɛs/
Spannung <fem>, Belastung <fem>, Spannungszustand
      "hydrostatic (state of) stress"  - hydrostatischer Spannungszustand
`,`stress /stɹˈɛs/
Stress <masc>
      "be under stress"  - im Stress sein
      "be under a lot of stress"  - voll im Stress sein
   Synonym: {pressure}

`,`stress /stɹˈɛs/ <v>
anspannen <v, trans>
 see: {stressing}, {stressed}

`,`stress /stɹˈɛs/ <v>
belasten, beanspruchen <v, trans>
   Synonym: {load}

 see: {loading}, {stressing}, {loaded}, {stressed}, {loads}, {stresses}, {loaded}, {stressed}

`]},{src:"sweating",ref:"Ausschwitzung",display_src:"sweating",show_ref:!1,definition:[`sweating /swˈɛtɪŋ/
Ausschwitzung <fem>, Exosmose <fem> [biol.]  [chem.]  [phys.]
   Synonyms: {exudation}, {exosmose}, {seep}, {oozing-out}

 see: {oil exudation}

`,`sweating /swˈɛtɪŋ/
Schweißausbrüche <pl>
 see: {sudden sweat}, {sudden sweating}, {increased perspiration}, {break out in a sweat}

`,`sweating /swˈɛtɪŋ/
Schwitzen <neut>, Schweißabsonderung <fem>, Transpiration <fem>, Hautausdünstung <fem> [med.]
   Synonyms: {perspiration}, {transpiration}, {sudation}

 see: {work up a sweat}, {dyshidrosis}, {panhidrosis}, {excessive sweating}, {sudoresis}, {hyperhidrosis}, {hidrorrhoea}, {idrosis}, {polyhydrosis}, {ephidrosis}, {hypohidrosis}, {acrohyperhidrosis}, {weeping of a wound}

`,`sweating /swˈɛtɪŋ/
schwitzend, transpirierend
   Synonym: {perspiring}

 see: {sweat}, {perspire}, {sweated}, {perspired}, {sweats}, {perspires}, {sweated}, {perspired}, {sweat blood}

`]},{src:"swelling",ref:"Anschwellen",display_src:"swelling",show_ref:!1,definition:[`swelling /swˈɛlɪŋ/
Anschwellen <neut>, Schwellung <fem>, Tumeszenz <fem>, Turgeszenz <fem> [med.]
         Note: Vorgang
      "swelling of the lacrymal sac"  - Tränensackschwellung
   Synonyms: {swelling-up}, {puffiness}, {tumescence}, {intumescence}, {intumescentia}, {tumentia}, {tumefaction}, {tumidity}, {turgescence}, {turgidity}

 see: {photoncia}, {tear sac dropsy}, {tuberous}

`,`swelling /swˈɛlɪŋ/
Anschwellen <neut>, Anschwellung <fem>
   Synonym: {swell}

`,`swelling /swˈɛlɪŋ/
Quellen <neut>, Quellung <fem>
         Note: von Holz
         Note: of wood
`,`swelling /swˈɛlɪŋ/
Schwellung <fem> [med.]
         Note: angeschwollenes Organ
      "glassy / cloudy swelling"  - glasige / trübe Schwellung
      "non-tender swelling"  - harte Schwellung
 see: {firm swelling}, {albuminous degeneration}, {parenchymatous degeneration}

         Note: swollen organ
`,`swelling /swˈɛlɪŋ/
Verdickung <fem>
`,`swelling /swˈɛlɪŋ/
anschwellen lassend, anwachsen lassend, steigernd
 see: {swell}, {swollen}, {swelled}

`,`swelling /swˈɛlɪŋ/
anschwellend, schwellend, zunehmend
 see: {swell}, {swollen}

`,`swelling /swˈɛlɪŋ/
blähend, aufblähend
 see: {swell}, {swollen}, {swelled}

`,`swelling /swˈɛlɪŋ/
gebläht <adj>
         Note: Segel
   Synonym: {bulging}

`,`swelling /swˈɛlɪŋ/
quellend, aufquellend
 see: {swell}, {swell out}, {swollen}, {swelled}

`,`swelling /swˈɛlɪŋ/
schwellend
 see: {swell}, {become swollen}, {swollen}, {it swills}, {it swelled}, {unswollen}

`,`swelling /swˈɛlɪŋ/
wachsend, steigend <adj>
`]},{src:"symptoms",ref:"Krankheitsbild",display_src:"symptoms",show_ref:!1,definition:[`symptoms /sˈɪmptəmz/ <pl>
Krankheitsbild <neut> [med.]
`,`symptoms /sˈɪmptəmz/
Merkmale <pl>, Anzeichen <pl>, Kennzeichen <pl>
 see: {symptom}, {symptomless}

`,`symptoms /sˈɪmptəmz/
Symptome <pl>
      "Common symptoms of diabetes are weight loss and fatigue."  - Verbreitete Symptome für Diabetes sind Gewichtsverlust und Müdigkeit.
   Synonym: {signs}

 see: {symptom}, {sign}, {signum}, {general symptoms}, {cardinal symptom}, {leading symptom}, {display symptoms}

`]},{src:"syncope",ref:"Synkope",display_src:"syncope",show_ref:!1,definition:[`syncope /sˈɪŋkəʊp/
Synkope <fem> [mus.]
   Synonym: {syncopation}

 see: {syncopes}, {syncopations}

`,`syncope /sˈɪŋkəʊp/
Synkope <fem>, Kreislaufkollaps <masc>, anfallsartige, kurzdauernde Bewusstlosigkeit <fem> [med.]
 see: {syncopes}

`]},{src:"tachycardia",ref:"beschleunigter",display_src:"tachycardia",show_ref:!1,definition:[`tachycardia /tˌakɪkˈɑːdiə/
beschleunigter Herzschlag <masc>, beschleunigte Herzfrequenz <fem>, Herzrasen <neut>, Tachykardie <fem> [med.]
   Synonyms: {rapid heart beat}, {racing heart}

`]},{src:"thinking",ref:"Denken",display_src:"thinking",show_ref:!1,definition:[`thinking /θˈɪŋkɪŋ/
Denken <neut>
   Synonym: {thought}

 see: {abstract thought}, {abstract thinking}, {thought form}, {thought process}, {thought content}, {logical thinking}, {Western thought}

`,`thinking /θˈɪŋkɪŋ/
Denkweise <fem>, Sichtweise <fem>, Auffassung <fem>
   Synonyms: {way of thinking}, {line of thought}

 see: {current thinking}

`,`thinking /θˈɪŋkɪŋ/
Kognition <fem>, Denkprozesse <pl>, Denken <neut> [psych.]
   Synonyms: {cognition}, {thinking processes}

`,`thinking /θˈɪŋkɪŋ/
Nachdenken <neut>, Betrachtungen <pl>, Überlegungen <pl>
   Synonyms: {thought}, {reflection}, {cogitation}

 see: {deep thinking}, {time to think}, {thinking time}

`,`thinking /θˈɪŋkɪŋ/
denkend, meinend, glaubend, findend
      "What were you thinking of?"  - Was hast du dir dabei gedacht?
 see: {think}, {thought}, {be all self}, {I find it's …}, {What's your opinion?}, {I agree entirely!}, {I quite agree!}, {My first association with this word is the novel of the same title.}

`,`thinking /θˈɪŋkɪŋ/
haltend, betrachtend, ansehend, erachtend
   Synonyms: {considering}, {regarding}

 see: {consider sb./sth. sth.}, {consider sb./sth. to be sth.}, {regard sb./sth. as sth.}, {think of sb./sth. as sth.}, {considered}, {regarded}, {thought}, {I consider that a mistake. / I regard that as a mistake.}, {We consider it a great honor to have you here with us tonight.}, {Consider yourself dismissed.}, {Consider yourself lucky/fortunate (that) you weren't on the train at that time.}

`,`thinking /θˈɪŋkɪŋ/
knobelnd, grübelnd
   Synonyms: {puzzling}, {speculating}

 see: {puzzle}, {speculate}, {think}, {puzzled}, {speculated}, {thought}

`,`thinking /θˈɪŋkɪŋ/
vermeinend
   Synonym: {supposing}

 see: {think}, {suppose}, {thought}, {supposed}

`]},{src:"thoughts",ref:"Gedanken",display_src:"thoughts",show_ref:!1,definition:[`thoughts /θˈɔːts/
Gedanken <pl>, Einfälle <pl>
      "be sunk in thoughts"  - in Gedanken versunken sein, sich in Gedanken verlieren
      "shift (oneself) (completely) into the thoughts of another"  - sich (ganz) in die Gedanken eines anderen versetzen
      "think another's thoughts"  - sich (ganz) in die Gedanken eines anderen versetzen
      "write down one's thoughts"  - seine Gedanken niederlegen
 see: {thought}, {in thought}, {be concerned about sth.}, {be unconcerned about}, {glum thoughts}, {dark thoughts}, {get into another's mind}

`]},{src:"tingling",ref:"klingend",display_src:"tingling",show_ref:!1,definition:[`tingling /tˈɪŋɡəlɪŋ/
klingend
 see: {tingle}, {tingled}, {tingles}, {tingled}

`,`tingling /tˈɪŋɡəlɪŋ/
kribbelnd <adv>
         Note: Oberfläche
   Synonyms: {prickly}, {prickling}, {tingly}

         Note: of a surface
`,`tingling /tˈɪŋɡəlɪŋ/
prickelnd, kribbelnd
   Synonyms: {pricking}, {prickling}

 see: {prick}, {prickle}, {tingle}, {pricked}, {prickled}, {tingled}, {pricks}, {prickles}, {tingles}, {pricked}, {Prickled}, {tingled}

`]},{src:"tired",ref:"ermüdet",display_src:"tired",show_ref:!1,definition:[`tired /tˈaɪəd/
ermüdet
      "he/she has/had become tired"  - er/sie ist/war ermüdet
   Synonym: {become tired}

 see: {tire}, {become tired}, {tiring}, {tireing}, {becoming tired}, {tires}, {becomes tired}, {tired}, {became tired}

`,`tired /tˈaɪəd/
ermüdete
      "he/she has/had become tired"  - er/sie ist/war ermüdet
   Synonym: {became tired}

 see: {tire}, {become tired}, {tiring}, {tireing}, {becoming tired}, {tired}, {become tired}, {tires}, {becomes tired}

`,`tired /tˈaɪəd/
erschlafft
   Synonyms: {grown weary}, {gone limp}, {waned}

 see: {tire}, {grow weary}, {go/become limp}, {wane}, {tiring}, {growing weary}, {going limp}, {waning}

`,`tired /tˈaɪəd/
müde <adj>
      "be tired from working"  - müde von der Arbeit sein
      "I'm tired."  - Ich bin müde.
 see: {more tired}, {most tired}, {get tired}

`,`tired /tˈaɪəd/
müde <adj> [cook.]
         Note: Weingeschmack
         Note: wine taste
`]},{src:"tiredness",ref:"Müdigkeit",display_src:"tiredness",show_ref:!1,definition:[`tiredness /tˈaɪədnəs/
Müdigkeit <fem>
 see: {Tiredness crept over him.}

`]},{src:"unconsciousness",ref:"Besinnungslosigkeit",display_src:"unconsciousness",show_ref:!1,definition:[`unconsciousness /ʌŋkˈɒnʃəsnəs/
Besinnungslosigkeit <fem>, Bewusstlosigkeit <fem>
`,`unconsciousness /ʌŋkˈɒnʃəsnəs/
Unkenntnis <fem>
`]},{src:"urination",ref:"Miktion",display_src:"urination",show_ref:!1,definition:[`urination /jˌʊəɹɪnˈeɪʃən/
Miktion <fem>, Harnentleerung aus der Blase [med.]
   Synonym: {micturition}

`,`urination /jˌʊəɹɪnˈeɪʃən/
Urinieren <neut>, Harnen <neut>, Harnlassen <neut> [med.]
   Synonym: {urinating}

`]},{src:"vertigo",ref:"Schwindel",display_src:"vertigo",show_ref:!1,definition:[`vertigo /vˈɜːtɪɡˌəʊ/
Schwindel <masc>, Vertigo <fem> [med.]
      "elevation-induced vertigo"  - Liftschwindel, Liftgefühl, Liftempfindung
      "horizontal/vertical vertigo"  - horizontaler/vertikaler Schwindel
      "objective/subjective vertigo"  - objektiver/subjektiver Schwindel
   Synonyms: {dizziness}, {giddiness}, {lipothymia}, {dinus}

 see: {ocular vertigo}, {permanent vertigo}, {stomachal vertigo}, {aural vertigo}, {auditory vertigo}, {vestibular vertigo}, {neurasthenic vertigo}, {paralytic vertigo}, {central vertigo}, {cerebral vertigo}

`]},{src:"vision",ref:"Sehkraft",display_src:"vision",show_ref:!1,definition:[`vision /vˈɪʒən/
Sehkraft <fem>, Sehvermögen <neut>, Sehen <neut>, Augenlicht <neut> [geh.]
      "loss of eyesight/sight/vision"  - Verlust der Sehkraft/des Sehvermögens
      "have vision problems"  - Probleme mit dem Sehen haben
      "have a blurred vision"  - verschwommen sehen
      "He already has very bad/poor eyesight/vision."  - Er sieht schon sehr schlecht., Seine Augen sind schon sehr schlecht.
   Synonyms: {eyesight}, {sight}

 see: {stereoscopic vision}, {narrow vision}, {limited vision}, {impaired eyesight}, {reduced eyesight}, {visual impairment}, {good vision}, {peripheral vision}, {binocular vision}, {stereopsis}, {bad eyesight}, {poor sight}

`,`vision /vˈɪʒən/
Sehschärfe <fem>, Sehstärke <fem>, Visus <masc> [med.]
      "20/20 vision"  - ein Visus von 20/20
      "test sb.'s visual acuity/vision"  - jds. Sehstärke überprüfen/prüfen
   Synonym: {visual acuity}

`,`vision /vˈɪʒən/
Traumbild <neut>
   Synonyms: {ideal image}, {fantasy image}

 see: {visions}, {ideal images}, {fantasy images}

`,`vision /vˈɪʒən/
 [fig.] Vision <fem>, Vorstellung <fem>, Sicht <fem> [übtr.]
         Note: von etw.
 see: {visions}

         Note: of sth.
`,`vision /vˈɪʒən/
Weitblick <masc>
      "a man of vision"  - ein Mann mit Weitblick
`,`vision /vˈɪʒən/
Leitvorstellung <fem>
   Synonyms: {general outline}, {guiding idea}, {key principle}

`]},{src:"vomiting",ref:"Erbrechen",display_src:"vomiting",show_ref:!1,definition:[`vomiting /vˈɒmɪtɪŋ/
Erbrechen <neut>, Würfelhusten <masc> [euphem.] , Kotzen <neut> [slang] , Emesis <fem>, Vomitus <masc> [med.]
   Synonyms: {vomiturition}, {vomit}, {retching}, {reaching}, {emesis}, {emesia}

 see: {pyemesis}, {projective vomiting}, {induced vomiting}, {excruciating vomiting}, {watery vomiting}, {hydremesis}

`,`vomiting /vˈɒmɪtɪŋ/
sich erbrechend, sich übergebend
   Synonyms: {vomitting}, {egurgitating}, {degorging}

 see: {vomit}, {egurgitate}, {degorge}, {vomited}, {vomitted}, {egurgitated}, {degorged}, {vomits}, {egurgitates}, {disgorges}, {vomited}, {vomitted}, {egurgitated}, {disgorged}

`]},{src:"walking",ref:"Gehen",display_src:"walking",show_ref:!1,definition:[`walking /wˈɔːkɪŋ/
Gehen <neut>, Geherwettkampf <masc> [sport]
   Synonyms: {racewalking}, {walk}

`,`walking /wˈɔːkɪŋ/
 [Br.] Wandern <neut> [sport]
   Synonyms: {rambling}, {hiking}, {bushwalking}, {tramping}

         Note: for recreation
`,`walking /wˈɔːkɪŋ/
gehend, laufend, spazierend
 see: {walk}, {walked}, {walks}, {walked}

`,`walking /wˈɔːkɪŋ/
spukend, umgehend, herumspukend
   Synonym: {haunting}

 see: {haunt}, {walk}, {haunted}, {walked}, {is haunted}, {There used to be ghosts in this house.}

`,`walking /wˈɔːkɪŋ/
tippelnd
   Synonym: {traipsing}

 see: {walk}, {traipse}, {foot it}, {walked}, {traipsed}

`,`walking /wˈɔːkɪŋ/
wandernd
   Synonyms: {rambling}, {hiking}

 see: {walk}, {ramble}, {hike}, {walked}, {rambled}, {hiked}, {walk extensively}

`]},{src:"weakness",ref:"Asthenie",display_src:"weakness",show_ref:!1,definition:[`weakness /wˈiːknəs/
Asthenie <fem>, Kraftlosigkeit <fem> [med.]
   Synonym: {asthenia}

`,`weakness /wˈiːknəs/
Faible <neut>
`,`weakness /wˈiːknəs/
Schwachheit <fem>, Schwäche <fem>, Schwächlichkeit <fem>
`,`weakness /wˈiːknəs/
Schwäche <fem>
 see: {weaknesses}

`]},{src:"wheezing",ref:"schnaufend,",display_src:"wheezing",show_ref:!1,definition:[`wheezing /wˈiːzɪŋ/
schnaufend, keuchend
 see: {wheeze}, {wheezed}, {wheezes}, {wheezed}

`]},{src:"worried",ref:"besorgt",display_src:"worried",show_ref:!1,definition:[`worried /wˈʌɹid/
besorgt <adj>
   Synonym: {concerned}

 see: {concerned parents}

`,`worried /wˈʌɹid/
beunruhigt, Sorgen gemacht, bekümmert
   Synonyms: {concerned}, {been concerned}

 see: {worry sb.}, {concern sb.}, {be concerned at sth.}, {worrying}, {concerning}, {being concerned}, {There is no need to worry her unnecessarily.}, {The roof concerns me because eventually it will fall in.}

`,`worried /wˈʌɹid/
sorgenvoll <adj>
   Synonyms: {full of cares}, {anxious}

`,`worried /wˈʌɹid/
gestört, belästigt
 see: {worry sb. with sth.}, {worrying}

`]},{src:"worse",ref:"ärger",display_src:"worse",show_ref:!1,definition:[`worse /wˈɜːs/
ärger
   Synonym: {more serious}

 see: {bad}, {serious}, {terrible}, {worst}, {most serious}, {be in a sorry state}, {be at sixes and sevens}

`,`worse /wˈɜːs/
schlechtere
         Note: r/s, schlimmere
         Note: r/s, üblere <adj>
         Note: r/s
      "There are worse things in life (than …)."  - Es gibt Schlimmeres (als …).
`,`worse /wˈɜːs/
schlechter, schlimmer, übler <adv>
      "from bad to worse"  - immer schlimmer
      "So much the worse!"  - Umso schlimmer!
      "All the worse!"  - Umso schlimmer!
      "be worse off"  - schlimmer dran sein
      "It could have been worse."  - Es hätte schlimmer kommen können.
      "It could not have been worse."  - Es hätte nicht schlimmer sein können.
      "That makes it all the worse."  - Das macht es umso schlimmer., Das macht's erst recht schlimm.
`]},{src:"biopsy",ref:"Gewebeprobenentnahme",display_src:"biopsy",show_ref:!1,definition:[`biopsy /baɪˈɒpsi/
Gewebeprobenentnahme <fem>, Entnahme von Gewebe, Biopsie <fem> [med.]
      "aspiration liver biopsy"  - Lebersaugbiopsie, Leberaspirationsbiopsie
      "core needle biopsy"  - Stanzbiopsie
      "fine needle biopsy"  - Biopsie mit feiner Nadel
      "sonographically guided biopsy"  - ultraschallgeführte Biopsie
   Synonyms: {exploratory excision}, {biopsy procedure}

 see: {exploratory excisions}, {biopsy procedures}, {biopsies}, {prostate biopsy}, {suction biopsy}, {aspiration biopsy}, {punch biopsy}

`]},{src:"blood sugar",ref:"Blutzucker",display_src:"blood sugar",show_ref:!1,definition:[`blood sugar /blˈʌd ʃˈʊɡə/
Blutzucker <masc> [med.]
      "fasting blood sugar"  - Blutzucker nüchtern
`]},{src:"cholesterol",ref:"Cholesterin",display_src:"cholesterol",show_ref:!1,definition:[`cholesterol /kəlˈɛstəɹˌɒl/
Cholesterin <neut> [biochem.]
`]},{src:"colonoscopy",ref:"Darmspiegelung",display_src:"colonoscopy",show_ref:!1,definition:[`colonoscopy /kˌəʊlənˈɒskəpi/
Darmspiegelung <fem>, Koloskopie <fem> [med.]
 see: {colonoscopies}

`]},{src:"culture",ref:"Kultur",display_src:"culture",show_ref:!1,definition:[`culture /kˈʌltʃə/
Kultur <fem>
 see: {cultures}, {music culture}, {musical culture}

`,`culture /kˈʌltʃə/
Kultur <fem> [agr.]
         Note: angebaute Pflanzen
         Note: grown plants
`,`culture /kˈʌltʃə/
Mikroorganismenkultur <fem>, Kultur <fem> [biol.]  [med.]
         Note: gezüchtete Mikroorganismen
      "plant tissue cultures"  - pflanzliche Gewebekulturen
   Synonyms: {microbiological culture}, {microbial culture}

 see: {microbiological cultures}, {microbial cultures}, {cultures}, {seed culture}, {inoculum}, {control cultures}

         Note: grown microorganisms
`]},{src:"dilation",ref:"Volumenvergrößerung",display_src:"dilation",show_ref:!1,definition:[`dilation /daɪlˈeɪʃən/
Volumenvergrößerung <fem>, Volumenausdehnung <fem>, Ausdehnung <fem>, Dehnung <fem>, Dilatation [phys.]
   Synonym: {dilatation}

`,`dilation /daɪlˈeɪʃən/
Vergrößerung <fem>, Erweiterung <fem>, Ausdehnung <fem>
`]},{src:"echocardiogram",ref:"Herzultraschallbild",display_src:"echocardiogram",show_ref:!1,definition:[`echocardiogram /ˈɛkəkˌɑːdɪˌəʊɡɹam/
Herzultraschallbild <neut>, Echokardiogramm <neut> [med.]
`,`echocardiogram /ˈɛkəkˌɑːdɪˌəʊɡɹam/
Echokardiogramm <neut> [med.]
`]},{src:"endoscopy",ref:"Endoskopie",display_src:"endoscopy",show_ref:!1,definition:[`endoscopy /ɛndˈəʊskəpi/
Endoskopie <fem>, Körperhöhlenspiegelung <fem> [med.]
`]},{src:"eye exam",ref:"",display_src:"eye exam",show_ref:!1,definition:[`eye exam /ˈaɪ ɛɡzˈam/
 [Am.] Sehtest <masc>, Sehprobe <fem> [med.]
   Synonyms: {sight test}, {sighting test}, {eyesight test}, {eye test}, {eyesight testing}, {sight testing}, {vision test}, {testing of vision}

 see: {sight tests}, {sighting tests}, {eyesight tests}, {eye tests}, {eye exams}, {eyesight testings}, {sight testings}, {vision tests}, {testings of vision}

`]},{src:"imaging",ref:"Schichtaufnahme",display_src:"imaging",show_ref:!1,definition:[`imaging /ˈɪmɪdʒɪŋ/
Schichtaufnahme <fem>, Tomografie <fem>, Tomographie <fem>
   Synonym: {tomography}

`,`imaging /ˈɪmɪdʒɪŋ/
Vorstellungsvermögen <neut> [geistiges]
   Synonym: {imagery}

`,`imaging /ˈɪmɪdʒɪŋ/
abbildend
 see: {image}, {imaged}

`]},{src:"lumbar puncture",ref:"Lumbalpunktion",display_src:"lumbar puncture",show_ref:!1,definition:[`lumbar puncture /lˈʌmbɑː pˈʌŋktʃə/
Lumbalpunktion <fem> [med.]
 see: {lumbar punctures}

`]},{src:"oxygen saturation",ref:"Sauerstoffanreicherung",display_src:"oxygen saturation",show_ref:!1,definition:[`oxygen saturation /ˈɒksɪdʒən sˌatʃəɹˈeɪʃən/
Sauerstoffanreicherung <fem>, Sauerstoffzufuhr <fem>, Oxygenierung <fem> [med.]
         Note: von Hämoglobin
      "arterial oxygen saturation"  - arterielle Sauerstoffanreicherung
   Synonym: {oxygenation}

 see: {arterial desaturation}, {arterial blood oxygen percent saturation}, {venous blood oxygen percent saturation}

`]},{src:"pregnancy test",ref:"Schwangerschaftstest",display_src:"pregnancy test",show_ref:!1,definition:[`pregnancy test /pɹˈɛɡnənsi tˈɛst/
Schwangerschaftstest <masc>
 see: {pregnancy tests}

`]},{src:"pulse",ref:"Hülsenfrucht",display_src:"pulse",show_ref:!1,definition:[`pulse /pˈʌls/
Hülsenfrucht <fem> [cook.]
   Synonym: {legume}

 see: {pulses}, {legumes}

`,`pulse /pˈʌls/
Impuls <masc>
`,`pulse /pˈʌls/
Pulsfrequenz <fem>, Pulsrate <fem>, Puls <masc> [med.]
      "have a high/low pulse rate"  - einen hohen/niedrigen Puls haben
      "have a high/low pulse"  - einen hohen/niedrigen Puls haben
   Synonym: {pulse rate}

`,`pulse /pˈʌls/
Pulsschlag <masc>, Puls <masc>, Pulsation <fem>, Sphymgus <masc> [med.]
      "intermittent/interrupted pulse"  - aussetzender Puls, Miosphygmia
      "cannon ball pulse"  - Corrigan'scher Puls
      "Corrigan's pulse"  - Corrigan'scher Puls
      "trigeminal/quadrigeminal pulse"  - dreischlägiger/vierschlägiger Puls
      "hard and cordy pulse"  - gespannter und harter Puls
      "high-tension pulse"  - gespannter und harter Puls
      "catacrotic/catadicrotic/catatricrotic pulse"  - katakroter/katadikroter/katatrikroter Puls
      "Kussmaul's pulse"  - paradoxer Puls, Kussmaul'scher Puls
      "monocrotic/dicrotic/tricrotic pulse"  - monokroter/dikroter/trikroter Puls
      "regular/irregular pulse"  - regelmäßiger/unregelmäßiger Puls
      "low-tension pulse"  - weicher Puls, nicht gespannter Puls
      "feel sb.'s pulse"  - jds. Puls fühlen, jds. Puls nehmen
      "take sb.'s pulse"  - jds. Puls fühlen, jds. Puls nehmen
      "quicken the pulse"  - den Puls beschleunigen
   Synonyms: {pulse beat}, {pulsus}, {pulsation}, {sphygmus}

 see: {pulse beats}, {pulses}, {pulsations}, {alternating pulse}, {alternans of the heart}, {anacrotic pulse}, {miosphygmia}, {coupled pulse}, {bigeminat pulse}, {wiry pulse}, {monocrotic pulse}, {epigastric pulse}, {epigastric pulsation}, {shabby pulse}, {filiform pulse}, {tense pulse}, {cordy pulse}, {hard pulse}, {sharp pulse}, {jerky pulse}, {running pulse}, {paradoxical pulse}, {slow pulse}, {polycrotic pulse}, {imperceptible pulse}, {quick pulse}, {accelerated pulse}, {pulse acceleration}, {soft pulse}, {weak pulse}, {microsphygmy}, {microsphyxia}, {bisferious pulse}

`,`pulse /pˈʌls/ <v>
pulsieren <v, intr>
   Synonyms: {pulsate}, {throb}

 see: {pulsating}, {pulsing}, {throbbing}, {pulsated}, {pulsed}, {throbbed}

`]},{src:"scan",ref:"Abtastung",display_src:"scan",show_ref:!1,definition:[`scan /skˈan/
Abtastung <fem>, Scan <masc>
      "push-pull scanning"  - Abtastung im Gegentakt
   Synonym: {scanning}

`,`scan /skˈan/ <v>
in Versen stehen, ein Versmaß aufweisen <v, intr> [ling.]
         Note: Text
         Note: text
`,`scan /skˈan/ <v>
in das Versmaß passen, in den Textrhythmus passen <v, intr> [ling.]
         Note: bei Versen
         Note: conform to the metre of a verse
`,`scan /skˈan/ <v>
untersuchen <v, trans>
 see: {scanning}, {scanned}, {scans}, {scanned}

`]},{src:"stress test",ref:"Belastungstest",display_src:"stress test",show_ref:!1,definition:[`stress test /stɹˈɛs tˈɛst/
Belastungstest <masc>, Lasttest <masc> [techn.]
 see: {stress tests}

`]},{src:"swab",ref:"mikrobiologischer",display_src:"swab",show_ref:!1,definition:[`swab /swˈɒb/
mikrobiologischer Abstrich <masc>, Abstrich <masc>, Abstrichprobe <fem> [med.]
      "nose and throat swab"  - Nasen-Rachenabstrich, Abstrich aus dem Nasen- und Rachenraum, Nasopharyngeal-Abstrich
      "take a mouth swab"  - einen Mundhöhlenabstrich machen
      "take an oral swab"  - einen Mundhöhlenabstrich machen
   Synonyms: {microbiological swab}, {swab specimen}

 see: {microbiological swabs}, {swabs}, {swab specimens}, {mouth swab}, {oral swab}, {buccal swab}, {nasopharyngeal swab}

`,`swab /swˈɒb/
Stieltupfer <masc>, Abstrichtupfer <masc>, Abstrichstäbchen <neut>, Abstrichträger <masc>, Tampon <masc>
      "cotton-wool- tipped swab"  - Wattestieltupfer, Watteabstrichtupfer
      "cotton-tipped swab"  - Wattestieltupfer, Watteabstrichtupfer
 see: {swabs}

`,`swab /swˈɒb/ <v>
schrubben <v, trans>
      "he/she swabs"  - er/sie schrubbt
      "I/he/she swabbed"  - ich/er/sie schrubbte
      "he/she has/had swabbed"  - er/sie hat/hatte geschrubbt
 see: {swabbing}, {swabbed}

`]},{src:"temperature",ref:"leichtes",display_src:"temperature",show_ref:!1,definition:[`temperature /tˈɛmpɹɪtʃə/
leichtes Fieber, erhöhte Temperatur
      "have a temperature"  - leichtes Fieber haben, erhöhte Temperatur haben
      "run a temperature"  - leichtes Fieber haben, erhöhte Temperatur haben
      "take (the) temperature"  - Fieber messen
      "take sb.'s temperature"  - bei jdm. Fieber messen
      "Do you have a fever/temperature?"  - Haben Sie Fieber?
   Synonyms: {adynamic fever}, {eupyrexia}, {febricula}

 see: {fever}, {pyrexy}, {pyrexia}, {phlegmonosis}, {sthenic fever}, {hyperpyretic temperature}, {hyperpyrexia}, {vaccinal fever}, {polyleptic fever}, {periodic fever}, {transitory fever}, {intermittent fever}, {vesicular fever}, {haematuric fever}, {suppurative fever}, {haemoglobinuric fever}, {eruptive fever}, {exanthematous fever}, {be feversih}, {be febrile}, {register temperature}, {intrafebrile}

`,`temperature /tˈɛmpɹɪtʃə/
Temperatur <fem>
      "mean daytime temperature"  - mittlere Tagestemperatur, durchschnittliche Tagestemperatur
      "iaverage daily temperature"  - mittlere Tagestemperatur, durchschnittliche Tagestemperatur
 see: {temperatures}

`]},{src:"ultrasound",ref:"Ultraschall",display_src:"ultrasound",show_ref:!1,definition:[`ultrasound /ˌʊltɹɐsˈaʊnd/
Ultraschall <masc> [phys.]
         Note: über 20 kHz
   Synonym: {ultrasonic sound}

`,`ultrasound /ˌʊltɹɐsˈaʊnd/
Ultrawelle <fem>
 see: {ultrasounds}

`,`ultrasound /ˌʊltɹɐsˈaʊnd/
Ultraschall <masc> [electr.]  [techn.]
   Synonyms: {ultrasonics}, {supersonics}

`]},{src:"urine test",ref:"Harnuntersuchung",display_src:"urine test",show_ref:!1,definition:[`urine test /jˈʊəɹɪn tˈɛst/
Harnuntersuchung <fem>
 see: {urine tests}

`,`urine test /jˈʊəɹɪn tˈɛst/
Urintest <masc> [med.]
 see: {urine tests}

`]},{src:"vital signs",ref:"Vitalfunktionen",display_src:"vital signs",show_ref:!1,definition:[`vital signs /vˈaɪtəl sˈaɪnz/
Vitalfunktionen <pl>, Vitalparameter <pl> [med.]
`]},{src:"weight",ref:"Gewicht",display_src:"weight",show_ref:!1,definition:[`weight /wˈeɪt/ (w. /dˈʌbəljˌuː/, ) (wt /dˌʌbəljˌuːtˈiː/)
Gewicht <neut>Gew.,  /dʒjˈuː/
      "weight per …"  - Gewicht pro …
 see: {weights}, {working weight}, {service weight}, {by weight}, {deadweight}

`,`weight /wˈeɪt/
Gewicht <neut>, Bedeutung <fem>, Wichtigkeit <fem>
      "carry no weight"  - nicht ins Gewicht fallen
      "One objection carries the same weight as objections from a large number of people."  - Ein einzelner Einwand wiegt genauso viel wie Einwände von vielen Leuten.
 see: {attach great importance to sth.}, {carry weight}, {be of no consequence}, {carry weight}

`,`weight /wˈeɪt/
Gewichtung <fem>, Wichtung <fem> [selten]  [statist.]
         Note: bei der Mittelwertbildung
   Synonym: {weighting}

 see: {multiplicative weighting}

         Note: in averaging
`,`weight /wˈeɪt/
Körpergewicht <neut>, Gewicht <neut> [med.]
      "Losing weight is not as hard as keeping it off."  - Abnehmen ist nicht so schwer wie sein Gewicht halten.
   Synonym: {body weight}

 see: {ideal weight}, {optimum weight}

`,`weight /wˈeɪt/
 [fig.] Last <fem>, Bürde <fem>, Belastung <fem> [übtr.]
      "I felt a great weight of responsibility roll off my shoulders."  - Ich merkte, wie die Last der Verantwortung von mir abgefallen war.
`,`weight /wˈeɪt/ <v>
beschweren <v, trans> [durch Gewichte]
      "weight sb./sth. (down) with sth."  - jdn./etw. mit etw. beschweren
   Synonym: {weight down}

 see: {weighting}, {weighted}, {weights}, {weighted}

`,`weight /wˈeɪt/
Gewichtskraft <fem> [phys.]
   Synonym: {weight force}

`]},{src:"at night",ref:"in",display_src:"at night",show_ref:!1,definition:[`at night /at nˈaɪt/
in der Nacht
 see: {night}, {nights}, {all night}

`,`at night /at nˈaɪt/
nachts <adv>
   Synonym: {by night}

`]},{src:"business hours",ref:"Geschäftszeit",display_src:"business hours",show_ref:!1,definition:[`business hours /bˈɪznəs ˈaʊəz/
Geschäftszeit <fem>, Geschäftsstunden <pl>
   Synonym: {trading hours}

`,`business hours /bˈɪznəs ˈaʊəz/
Kassenstunden <pl>, Kassastunden <pl> [Ös.]  [Schw.] , Kassenöffnungszeiten <pl>, Kassaöffnungszeiten <pl> [Ös.]  [Schw.]
   Synonym: {banking hours}

`,`business hours /bˈɪznəs ˈaʊəz/
Öffnungszeit <fem>
      "outside business hours"  - außerhalb der Öffnungszeiten
   Synonyms: {opening time}, {opening hours}

 see: {opening hours}, {business hours}, {shop hours}

`,`business hours /bˈɪznəs ˈaʊəz/
Öffnungszeiten <pl>
      "outside business hours"  - außerhalb der Öffnungszeiten
   Synonyms: {opening hours}, {shop hours}

 see: {opening time}, {opening hours}, {business hours}

`]},{src:"daily",ref:"pro",display_src:"daily",show_ref:!1,definition:[`daily /dˈeɪli/
pro Tag
   Synonyms: {per day}, {per diem}

 see: {day}, {days}, {Open day}, {Open house}, {strike a bad patch}, {work underground}, {underground work}, {inside labour}, {day labour}, {dog days}, {for the better for the worse}, {for better or for worse}, {doomsday}, {Judgment Day}, {Day of Judgement}, {the Last Day}

`,`daily /dˈeɪli/
Tageszeitung <fem>
   Synonym: {daily newspaper}

 see: {dailies}, {daily newspapers}

`,`daily /dˈeɪli/
täglichtgl.,  /tˌiːdʒˌiːˈɛl/ tägl.,  /tˈɛɡəl/ , Tages… <adj>
      "the daily grind"  - der tägliche Trott
 see: {daily routine}

`,`daily /dˈeɪli/
täglich, am Tag <adv>
      "three to four times daily"  - drei bis vier Mal täglich/am Tag
      "Take one pill twice daily."  - Zweimal täglich eine Tablette einnehmen.
      "Take a teaspoonful once daily."  - Einmal täglich einen Teelöffel voll nehmen.
      "The list is updated daily / on a daily basis."  - Die Liste wird täglich aktualisiert.
   Synonyms: {every day}, {on a daily basis}

 see: {every day}, {in dies}, {quaque die}, {twice a day}, {bis in die}, {three times a day}, {ter in die}, {four times a day}

`]},{src:"days",ref:"Tage",display_src:"days",show_ref:!1,definition:[`days /dˈeɪz/
Tage <pl>, Täge <pl> [Lux.] , Täg <pl> [BW]  [Schw.]
      "four days running"  - vier Tage hintereinander
      "We have had bad weather for days (now)."  - Wir haben seit Tagen schlechtes Wetter.
      "For days we waited for help, but none came."  - Wir warteten tagelang auf Hilfe, aber es kam keine.
      "Those were the days!"  - Das waren (noch) Zeiten!
 see: {day}, {per day}, {daily}, {per diem}, {Open day}, {Open house}, {strike a bad patch}, {work underground}, {underground work}, {inside labour}, {day labour}, {dog days}, {for the better for the worse}, {for better or for worse}, {doomsday}, {Judgment Day}, {Day of Judgement}, {the Last Day}

`]},{src:"during the day",ref:"im",display_src:"during the day",show_ref:!1,definition:[`during the day /djˈʊəɹɪŋ ðə dˈeɪ/
im Tagesverlauf
`,`during the day /djˈʊəɹɪŋ ðə dˈeɪ/
tagsüber <adv>, am Tag
   Synonym: {over the day}

`]},{src:"every day",ref:"täglich,",display_src:"every day",show_ref:!1,definition:[`every day /ˈɛvɹɪ dˈeɪ/
täglich, am Tag <adv>
   Synonyms: {daily}, {on a daily basis}

 see: {every day}, {in dies}, {quaque die}, {twice a day}, {bis in die}, {three times a day}, {ter in die}, {four times a day}

`,`every day /ˈɛvɹɪ dˈeɪ/
täglich [pharm.]
         Note: Anwendungshinweis für ein Medikament
   Synonyms: {in dies}, {quaque die}

 see: {every day}, {daily}, {on a daily basis}, {twice a day}, {bis in die}, {three times a day}, {ter in die}, {four times a day}

`]},{src:"hours",ref:"Stunden",display_src:"hours",show_ref:!1,definition:[`hours /ˈaʊəz/
Stunden <pl>
      "every few hours"  - alle paar Stunden
 see: {hour}, {zero hour}

`,`hours /ˈaʊəz/
Zeit <fem>
`]},{src:"in the afternoon",ref:"nachmittags",display_src:"in the afternoon",show_ref:!1,definition:[`in the afternoon /ɪnðɪ ˌaftənˈuːn/ (p.m. /pˈiː ˈɛm/, ) (pm /pˌiːˈɛm/, ) (PM /pˌiːˈɛm/)
nachmittags <adv>nachm.,  /nˈatʃəm/
 see: {on Friday afternoons}

`]},{src:"in the evening",ref:"abendlich",display_src:"in the evening",show_ref:!1,definition:[`in the evening /ɪnðɪ ˈiːvnɪŋ/
abendlich <adv>
   Synonym: {in the evenings}

`,`in the evening /ɪnðɪ ˈiːvnɪŋ/
abends <adv>
 see: {on Monday evenings}

`]},{src:"in the morning",ref:"am",display_src:"in the morning",show_ref:!1,definition:[`in the morning /ɪnðə mˈɔːnɪŋ/
am Morgen, morgens, in der Früh <adv> [Bayr.]  [Ös.]
      "early in the morning"  - früh am Morgen, frühmorgens, zeitig in der Früh
 see: {In the morning we went to the beach.}, {mornings only}

`,`in the morning /ɪnðə mˈɔːnɪŋ/
morgens
         Note: bis etwa 9 Uhr, vormittags, Vormittag <adv> [Ös.]  [Schw.]
         Note: bis etwa 12 Uhr
         Note: Uhrzeitangabe
      "(at) around 11 in the morning"  - gegen 11 Uhr vormittags, gegen 11 Uhr Vormittag
   Synonyms: {ante meridiem}, {am}, {AM}

 see: {around 11 a.m.}

`,`in the morning /ɪnðə mˈɔːnɪŋ/
vormittags <adv>
`]},{src:"minutes",ref:"Minuten",display_src:"minutes",show_ref:!1,definition:[`minutes /mˈɪnɪts/
Minuten <pl>
      "be within 30 minutes of …"  - innerhalb von 30 Minuten … sein
 see: {minute}

`,`minutes /mˈɪnɪts/
Protokoll <neut>, Niederschrift <fem> [adm.]
      "minutes of the meeting"  - Besprechungsprotokoll, Besprechungsniederschrift, Sitzungsprotokoll
      "minutes of the proceedings"  - Verhandlungsprotokoll
      "drafting of the minutes"  - Abfassung des Protokolls
      "entry in the minutes"  - Vermerk im Protokoll
      "take the minutes"  - Protokoll führen
      "draw up the minutes"  - das Protokoll aufnehmen
      "enter/record sth. in the minutes"  - etw. im Protokoll vermerken, etw. ins Protokoll aufnehmen
 see: {minutes}, {summary minutes}, {summary report of decisions}, {agreed minutes}

`,`minutes /mˈɪnɪts/
Protokolle <pl>, Niederschriften <pl>
      "minutes of the meeting"  - Besprechungsprotokoll, Besprechungsniederschrift, Sitzungsprotokoll
      "minutes of the proceedings"  - Verhandlungsprotokoll
      "drafting of the minutes"  - Abfassung des Protokolls
      "entry in the minutes"  - Vermerk im Protokoll
      "take the minutes"  - Protokoll führen
      "draw up the minutes"  - das Protokoll aufnehmen
      "enter/record sth. in the minutes"  - etw. im Protokoll vermerken, etw. ins Protokoll aufnehmen
 see: {minutes}, {summary minutes}, {summary report of decisions}, {agreed minutes}

`]},{src:"next week",ref:"kommende",display_src:"next week",show_ref:!1,definition:[`next week /nˈɛkst wˈiːk/
kommende Woche
 see: {forthcoming}, {coming}, {approaching}, {next}, {in the years to come}

`]},{src:"regularly",ref:"regelmäßig,",display_src:"regularly",show_ref:!1,definition:[`regularly /ɹˈɛɡjʊləli/
regelmäßig, in regelmäßigen Abständen <adv>
   Synonyms: {on a regular basis}, {at regular intervals}

`,`regularly /ɹˈɛɡjʊləli/
regulär <adv>
`]},{src:"today",ref:"Heute",display_src:"today",show_ref:!1,definition:[`today /tədˈeɪ/
Heute <neut>
`,`today /tədˈeɪ/
heute <adv>
      "today of all days"  - gerade heute
 see: {this afternoon}, {from today}, {from this day forth}, {just today}, {only today}, {Today is the day …}

`,`today /tədˈeɪ/
heutzutage, in der heutigen Zeit, heute <adv> [hist.]
   Synonyms: {nowadays}, {these days}, {at the present time}, {in this day and age}

`]},{src:"tomorrow",ref:"das",display_src:"tomorrow",show_ref:!1,definition:[`tomorrow /təmˈɒɹəʊ/
das Morgen <neut> [geh.]
         Note: die Zukunft
      "tomorrow's world"  - die Welt von morgen
      "Today's challenges are tomorrow's opportunities."  - Die Herausforderungen von heute sind die Möglichkeiten von morgen.
      "They were partying as if there was no tomorrow / like there was no tomorrow / as though there were no tomorrow."  - Sie feierten als gäbe es kein Morgen.
         Note: the future
`,`tomorrow /təmˈɒɹəʊ/
morgen <adv>
      "a week tomorrow / tomorrow week"  - morgen in einer Woche
      "a week from tomorrow"  - morgen in einer Woche
      "We'll come tomorrow."  - Wir kommen morgen.
      "See you tomorrow."  - Bis morgen.
      "Never say die. There's always tomorrow."  - Verzweifle nicht. Es kommt immer ein neuer Tag.
 see: {tomorrow night}, {Now get some rest. Tomorrow is another day.}

`]},{src:"tonight",ref:"heute",display_src:"tonight",show_ref:!1,definition:[`tonight /tənˈaɪt/
heute Abend, heute Nacht <adv>
      "I've nothing on tonight."  - Ich habe heute Abend nichts vor.
   Synonym: {tonite}

`]},{src:"weekly",ref:"Wochenschrift",display_src:"weekly",show_ref:!1,definition:[`weekly /wˈiːkli/
Wochenschrift <fem> [lit.]
`,`weekly /wˈiːkli/
Wochenzeitung <fem>, Wochenzeitschrift <fem>
   Synonym: {weekly newspaper}

 see: {weekly newspapers}, {weeklies}, {satirical weekly}

`,`weekly /wˈiːkli/
wöchentlich, allwöchentlich <adv>
`]},{src:"weeks",ref:"Wochen",display_src:"weeks",show_ref:!1,definition:[`weeks /wˈiːks/
Wochen <pl>
      "5 whole weeks"  - fünf volle Wochen
 see: {week}, {previous week}, {week before}, {preceding week}, {Easter week}, {Pentecost week}, {Whitsuntide week}

`]},{src:"ablation",ref:"Ablation",display_src:"ablation",show_ref:!1,definition:[`ablation /ɐblˈeɪʃən/
Ablation <fem>, Ablatio <fem>, Entfernen von Körpergewebe [med.]
 see: {catheter ablation}

`,`ablation /ɐblˈeɪʃən/
Ablation <fem> [meteo.]
         Note: Abschmelzen von Schnee oder Eis
 see: {wastage}

         Note: melting of snow or ice
`,`ablation /ɐblˈeɪʃən/
Abtragung <fem>, Abtragen <neut> [geol.]
         Note: des Bodens
         Note: of the soil
`]},{src:"acupuncture",ref:"Akupunktur",display_src:"acupuncture",show_ref:!1,definition:[`acupuncture /ˈakjuːpˌʌŋktʃə/
Akupunktur <fem> [med.]
 see: {acupunctures}

`]},{src:"bathing",ref:"Badebetrieb",display_src:"bathing",show_ref:!1,definition:[`bathing /bˈeɪðɪŋ/
Badebetrieb <masc>
         Note: das Baden
`,`bathing /bˈeɪðɪŋ/
Baden <neut>
   Synonym: {swimming}

`,`bathing /bˈeɪðɪŋ/
auswaschend
 see: {bathe sth.}, {bathed}, {Bathe the wound with clear water.}

`,`bathing /bˈeɪðɪŋ/
badend
 see: {bath sb./sth.}, {bathe sb./sth.}, {bathed}, {he/she bathes}, {be covered in sweat}

`,`bathing /bˈeɪðɪŋ/
badend, schwimmend
 see: {bath}, {bathe}, {bathed}

`]},{src:"booster",ref:"Auffrischungsimpfung",display_src:"booster",show_ref:!1,definition:[`booster /bˈuːstə/
Auffrischungsimpfung <fem>, Auffrischimpfung <fem>, Wiederholungsimpfung <fem>, Nachimpfung <fem>, Revakzination <fem>
   Synonym: {booster inoculation}

 see: {vaccination}, {vaccinization}, {inoculation}, {vaccine therapy}, {vaccinotherapy}, {immunization with a vaccine}, {immunization shot}, {jab}, {active vaccination}, {active serovaccination}, {primary vaccination}, {bacterial vaccination}, {bacterination}, {enteric inoculation}, {peroral inoculation}, {epicutaneous vaccination}, {original vaccination}, {first inoculation}, {intradermal vaccination}, {intradermal inoculation}, {intracutaneous vaccination}, {conjunctival inoculation}, {passive vaccination}, {routine vaccination}, {standard vaccination}, {mass vaccination}, {containment vaccination}, {simultaneous vaccination}, {simultaneous immunization}, {childhood vaccination}, {malleinization}

`,`booster /bˈuːstə/
Spannungserhöher <masc>, Zusatzgerät für Spannungserhöhung [electr.]  [hist.]
         Note: motor-generator for voltage regulation
`,`booster /bˈuːstə/
Starttriebwerk <neut>, Zusatztriebwerk für die Startphase [aviat.]
         Note: Luft- und Raumfahrt
 see: {boosters}

         Note: aerospace
`,`booster /bˈuːstə/
Synergist <masc> [pharm.]
   Synonym: {synergist}

 see: {synergists}, {boosters}

`,`booster /bˈuːstə/
Verstärker <masc>
         Note: zwischen Antenne und Empfänger
         Note: Radio, TV
 see: {boosters}

         Note: between antenna and receiver
         Note: radio, TV
`]},{src:"chemotherapy",ref:"Chemotherapie",display_src:"chemotherapy",show_ref:!1,definition:[`chemotherapy /kˌiːməʊθˈɛɹəpi/
Chemotherapie <fem>, Chemo <fem> [ugs.]  [med.]
      "photo-activated chemotherapy"  - photoaktivierte Chemotherapie
   Synonyms: {chemiotherapy}, {chemo}

 see: {chemoradition}, {adjuvant chemotherapy}, {intracavitary chemotherapy}, {combination chemotherapy}, {consolidation chemotherapy}, {intensification chemiotherapy}, {locoregional chemotherapy}, {primary chemotherapy}, {neoadjuvant chemotherapy}, {preoperative chemotherapy}, {presurgical chemotherapy}

`]},{src:"consultation",ref:"Absprache",display_src:"consultation",show_ref:!1,definition:[`consultation /kɒnsəltˈeɪʃən/
Absprache <fem>, Absprechen <neut> [adm.]
      "in consultation with sb."  - in Absprache mit jdm.
      "The draft was drawn up in consultation with all the departments involved."  - Der Entwurf wurde in Absprache mit allen beteiligten Abteilungen erstellt.
`,`consultation /kɒnsəltˈeɪʃən/
Befragung <fem>
   Synonym: {consult}

`,`consultation /kɒnsəltˈeɪʃən/
Beratungsgespräch <neut>
   Synonym: {counseling interview}

 see: {consultations}, {counseling interviews}

`,`consultation /kɒnsəltˈeɪʃən/
Beratungsgespräch <neut>, Beratung <fem> [ugs.]
         Note: bei jdm., Konsultation <fem>
         Note: eines Fachmanns, insb. in den freien Berufen
 see: {consultations}

         Note: meeting with an expert, esp. a professional
`,`consultation /kɒnsəltˈeɪʃən/
Hinzuziehung <fem>, Beiziehung <fem> [Bayr.]  [Ös.] , Beizug <masc> [Schw.]  [adm.]
         Note: von jdm.
   Synonym: {involvement}

         Note: of sb.
`,`consultation /kɒnsəltˈeɪʃən/
Rücksprache <fem> [adm.]
         Note: mit jdm.
 see: {talk sth. over with sb.}, {after consulting}, {after talking to}

         Note: with sb.
`,`consultation /kɒnsəltˈeɪʃən/
Arztbesuch <masc>
 see: {visit to the doctor's}

`]},{src:"counseling",ref:"",display_src:"counseling",show_ref:!1,definition:[`counseling /kˈaʊnsəlɪŋ/
 [Am.] Beratung <fem>
         Note: institutionalisiertes Hilfsangebot für einen bestimmten Lebensbereich
   Synonyms: {counselling}, {guidance}, {advisement}

 see: {graduate counselling}, {graduate advisement}, {alcohol counselling}, {alcohol education}, {tax counselling}, {tax counseling}, {vocational guidance}, {career counselling}, {career advisement}, {drugs counselling}, {drug counseling}, {marriage counselling}, {marriage guidance}, {educational counselling}, {educational counseling}, {educational guidance}, {specialist counselling}, {specialist counseling}, {family counselling}, {family counseling}, {health counselling}, {health counseling}, {school counselling}, {school counselling}, {sexual counselling}, {sexual counseling}, {addiction counselling}, {addiction counseling}, {bereavement counselling}, {bereavement counseling}, {behavioural counselling}, {behavioral consultation}

`,`counseling /kˈaʊnsəlɪŋ/
beratend
   Synonym: {counselling}

 see: {counsel sb.}, {counseled}, {counselled}, {counsels}, {counseled}, {counselled}, {uncouselled}

`,`counseling /kˈaʊnsəlɪŋ/
ratend
   Synonyms: {advising}, {counselling}

 see: {advise sth.}, {counsel sth.}, {advised}, {counselled}, {counseled}, {advises}, {counsels}, {advised}, {counselled}, {counseled}, {advise sb. to be careful}, {advise sb. to take caution}, {advise restraint in the campaign}

`]},{src:"detoxification",ref:"Entgiftung",display_src:"detoxification",show_ref:!1,definition:[`detoxification /diːtˌɒksɪfɪkˈeɪʃən/
Entgiftung <fem>, Detoxifikation <fem> [med.]
   Synonym: {detox}

`]},{src:"dialysis",ref:"Blutwäsche",display_src:"dialysis",show_ref:!1,definition:[`dialysis /daɪˈaləsˌɪs/
Blutwäsche <fem>, Blutreinigung <fem>, Dialyse <fem> [med.]
   Synonyms: {blood lavage}, {lavage of the blood}, {haemodialysis}, {hemodialysis}

`]},{src:"drainage",ref:"Entwässerung",display_src:"drainage",show_ref:!1,definition:[`drainage /dɹˈeɪnɪdʒ/
Entwässerung <fem>, Trockenlegung <fem>, Drainage <fem>, Dränage <fem>
      "drainage by gravity"  - drucklose Entwässerung
      "drainage with pipes"  - Rohrdränage
   Synonyms: {draining}, {dewatering}, {unwatering}

 see: {ground drainage}, {gravity drainage}

`,`drainage /dɹˈeɪnɪdʒ/
Sickergrube <fem> [constr.]
         Note: zur Entwässerung
   Synonyms: {draining well}, {drain well}, {drainage well}

 see: {draining wells}, {drain wells}, {drainage wells}

`]},{src:"dressing",ref:"Ausrüstung",display_src:"dressing",show_ref:!1,definition:[`dressing /dɹˈɛsɪŋ/
Ausrüstung <fem>, Appretur <fem> [textil.]
   Synonyms: {finish}, {glaze}

`,`dressing /dɹˈɛsɪŋ/
Fertiggerben, Fertiggerbung
   Synonyms: {currying}, {finishing}

 see: {tanning}, {tannage}, {alum tanning}, {alum tannage}, {tawing}, {aldehyde tanning}, {aldehyde tannage}, {liquor tanning}, {liquor tannage}, {quinone tanning}, {quinone tannage}, {chrome tanning}, {chrome tannage}, {chroming}, {Dongola tanning}, {Dongola tannage}, {full tan penetration}, {tan penetration}, {leathering}, {iron tanning}, {iron tannage}, {extract tanning}, {extract tannage}, {drum tanning}, {drum tannage}, {oil tanning}, {oil tannage}, {chamois tanning}, {chamois tannage}, {chamoising}, {glacé tanning}, {glacé tannage}, {pit tanning}, {pit tannage}, {formaldehyde tanning}, {formaldehyde tannage}, {filling tanning}, {filling tannage}, {plumping tanning}, {plumping tannage}, {bark tanning}, {bark tannage}, {barking}, {mineral tanning}, {mineral tannage}, {vegetable tanning}, {vegetable tannage}, {accelerated tanning}, {accelerated tannage}

`,`dressing /dɹˈɛsɪŋ/
Salatsoße <fem>, Marinade <fem>, Salatdressing <neut>, Dressing <neut> [cook.]
      "ranch dressing: ranch"  - Ranch-Dressing
   Synonym: {salad dressing}

 see: {salad dressings}, {dressings}, {French dressing}, {Italian dressing}

`,`dressing /dɹˈɛsɪŋ/
Verband <masc>, Wundverband <masc> [med.]
      "apply a dressing"  - einen Verband anlegen
   Synonym: {bandage}

 see: {binocle bandage}, {adhesive dressing}, {adhesive bandage}, {temporary dressing}, {circular bandage}, {cingulum}, {protective dressing}

         Note: for wounds
`,`dressing /dɹˈɛsɪŋ/
Verbinden <neut>
         Note: der Wunde, Wundversorgung <fem> [med.]
         Note: of the wound
`,`dressing /dɹˈɛsɪŋ/
sich anziehend, sich kleidend
 see: {dress}, {dressed}, {dress warmly}, {dress down}, {dress well}

`,`dressing /dɹˈɛsɪŋ/
düngend
   Synonyms: {fattening}, {fertilizing}, {fertilising}

 see: {fatten sth.}, {fertilize/fertilise sth.}, {dress sth.}, {fattened}, {fertilize/fertilised}, {dressed}, {fattened}, {dressed}, {dung sth.}, {muck sth.}, {manure sth.}, {warp sth.}, {lime sth.}

`,`dressing /dɹˈɛsɪŋ/
glattmachend, glättend
   Synonyms: {smoothing}, {sleeking}, {rendering smooth}

 see: {smooth}, {sleek}, {dress sth.}, {render sth. smooth}, {smoothed}, {sleeked}, {dressed}, {rendered smooth}

`,`dressing /dɹˈɛsɪŋ/
zurechtmachend, herrichtend, richtend, kochfertig / bratfertig machend, anmachend
 see: {dress}, {dressed}

`,`dressing /dɹˈɛsɪŋ/
zurichtend
 see: {dress sth.}, {dressed}

`,`dressing /dɹˈɛsɪŋ/
Aufbereitung <fem>
   Synonyms: {treatment}, {processing}, {separation}, {concentration}, {beneficiation}, {cleansing}, {upgrading}, {milling}

`]},{src:"elevation",ref:"Ansicht",display_src:"elevation",show_ref:!1,definition:[`elevation /ˌɛlɪvˈeɪʃən/
Ansicht im Aufriss
 see: {view}, {exterior view}, {detail view}, {detailed view}, {general view}, {interior view}, {rear view}, {sectional view}, {lateral view}, {partial view}, {bottom view}, {ventral view}, {front view}, {top view}, {plan view}, {horizontal projection}, {isometric view}, {sectional view}, {side view}

`,`elevation /ˌɛlɪvˈeɪʃən/
 [formal] Ansteigen <neut>, Anstieg ([+ gen]) <masc> [med.]  [phys.]
      "a sudden elevation of blood pressure"  - ein plötzlicher Anstieg des Blutdrucks
   Synonyms: {increase}, {rise}

         Note: of sth.
`,`elevation /ˌɛlɪvˈeɪʃən/
Aufriss <masc>, Aufriß <masc> [alt] , Aufrisszeichnung <fem>
      "draw the side/front elevation"  - etw. im Aufriss zeichnen
`,`elevation /ˌɛlɪvˈeɪʃən/
Beförderung <fem>, Berufung <fem>
`,`elevation /ˌɛlɪvˈeɪʃən/
Bodenerhebung <fem>, Erhebung <fem>, Anhöhe <fem>, Höhe <fem> [geh.]  [geogr.]
         Note: meist Plural
         Note: Hügel
   Synonyms: {height}, {rise}

 see: {elevations}, {heights}, {rises}

`,`elevation /ˌɛlɪvˈeɪʃən/
Elevation <fem> [astron.]
`,`elevation /ˌɛlɪvˈeɪʃən/
Elevation <fem> [relig.]
`,`elevation /ˌɛlɪvˈeɪʃən/
Erhabenheit <fem>, Würde <fem>, Hoheit <fem>
`,`elevation /ˌɛlɪvˈeɪʃən/
Erhöhung <fem>, Emporheben <neut>
`,`elevation /ˌɛlɪvˈeɪʃən/
Heben <neut>, Hebung <fem>
         Note: der Stimme
         Note: of voice
`,`elevation /ˌɛlɪvˈeɪʃən/
Höhenkote <fem>, Kote <fem>
         Note: Vermessungswesen
   Synonym: {altitude}

 see: {geopotential elevation}

         Note: surveying
`,`elevation /ˌɛlɪvˈeɪʃən/
Höhenlage <fem>, Höhe <fem> [aviat.]  [geogr.]
         Note: in Bezug auf den Meeresspiegel
   Synonyms: {altitude}, {height}

 see: {geopotential altitude}, {geopotential elevation}, {geopotential height}

`,`elevation /ˌɛlɪvˈeɪʃən/
erhöhte Lage <fem>
`,`elevation /ˌɛlɪvˈeɪʃən/
Höhe über dem Meeresspiegel [geogr.]
 see: {sea level}, {Mean Sea Level}, {oceanic level}

`,`elevation /ˌɛlɪvˈeɪʃən/
Ansicht <fem>
         Note: Geodäsie
`]},{src:"enema",ref:"Einlauf",display_src:"enema",show_ref:!1,definition:[`enema /ˈɛnəmə/
Einlauf <masc>, Klistier <neut>, Klysma <neut> [med.]
      "return-flow enema"  - Schwenkeinlauf, Hebereinlauf, Hebe-Senk-Einlauf
      "give sb. an enema"  - jdm. einen Einlauf machen, jdm. ein Klistier geben
   Synonyms: {rectal injection}, {enteroclysis}, {clysma}, {clyster}

 see: {drug enema}, {retention enema}, {Harris flush}

`]},{src:"evaluation",ref:"Abschätzung",display_src:"evaluation",show_ref:!1,definition:[`evaluation /ɪvˌaljuːˈeɪʃən/
Abschätzung <fem>, Schätzung <fem>, Taxierung <fem>
      "in my evaluation"  - nach meiner Schätzung
`,`evaluation /ɪvˌaljuːˈeɪʃən/
Auswertung <fem> [techn.]
         Note: von Messdaten
      "graphic(al) evaluation/solution of measuring results"  - grafische Auswertung von Messergebnissen
         Note: of measuring data
`,`evaluation /ɪvˌaljuːˈeɪʃən/
Begutachtung <fem> [Dt.]  [Ös.] , Vernehmlassung <fem> [Schw.]  [pol.]
         Note: einer Gesetzesvorlage durch Interessensgruppen und Parteien
         Note: of a draft bill by interest groups/political parties
`,`evaluation /ɪvˌaljuːˈeɪʃən/
Bewertung <fem>, Beurteilung <fem>
      "evaluation of surfactant biodegradability"  - Bewertung der biologischen Abbaubarkeit von Tensiden
      "Ex-ante evaluation"  - Ex-ante-Bewertung
      "Ex-post evaluation"  - Ex-post-Bewertung
      "criteria for evaluation"  - Maßstäbe zur Bewertung
`,`evaluation /ɪvˌaljuːˈeɪʃən/
Evaluation <fem>, Evaluierung <fem>, fachgerechte Bewertung <fem>
 see: {course evaluation}, {interim evaluation}, {intermediate evaluation}, {teaching analysis poll}

`,`evaluation /ɪvˌaljuːˈeɪʃən/
Untersuchung und Diagnosestellung [med.]
`]},{src:"examination",ref:"Einsichtnahme",display_src:"examination",show_ref:!1,definition:[`examination /ɛɡzˌamɪnˈeɪʃən/
Einsichtnahme <fem>, Einsicht <fem>, Einblick <masc> [adm.]
         Note: in etw.
   Synonym: {inspection}

 see: {for inspection}

         Note: of sth.
`,`examination /ɛɡzˌamɪnˈeɪʃən/
Prüfung <fem> [school]  [stud.]
      "viva voce examination"  - mündliche Prüfung
      "carry out the examination"  - Prüfung vornehmen
      "have/take a viva voce examination/exam"  - eine mündliche Prüfung haben, mündlich geprüft werden
   Synonym: {exam}

 see: {examinations}, {exams}, {deferred exam}, {big examination}, {big exam}, {oral examination}, {oral exam}, {oral}, {viva voce}, {practical exam}, {practical}, {written examination}, {written exam}, {theory exam}, {mock examination}, {mock exam}, {mock}

`,`examination /ɛɡzˌamɪnˈeɪʃən/
Sichtung <fem>, Durchsicht <fem> [adm.]
         Note: von etw.
 see: {after examining the material}

         Note: of sth.
`,`examination /ɛɡzˌamɪnˈeɪʃən/
Untersuchung <fem>, Prüfung <fem> [sci.]  [techn.]
      "in-process examination"  - Fertigungsprüfung
      "on visual examination"  - bei der Sichtprüfung
      "on further examination"  - bei einer weiteren Untersuchung
      "conduct / perform / make an examination"  - eine Untersuchung durchführen, eine Prüfung vornehmen
      "A metallographic examination reveals structural differences."  - Die metallographische Untersuchung zeigt Unterschiede in der Struktur.
      "Upon examination the substance was found to contain carvone."  - Bei einer Untersuchung wurde festgestellt, dass der Stoff Carvon enthält.
      "The test specimen is immersed in a reagent to bring out the granular structure for subsequent examination under a microscope."  - Der Prüfkörper wird in eine Reagentie eingetaucht, um das Kerngefüge für die anschließende Untersuchung mit dem Mikroskop zum Vorschein zu bringen.
 see: {examinations}, {in-process inspection}, {routine examination}, {examining …}

`,`examination /ɛɡzˌamɪnˈeɪʃən/
Untersuchung <fem>, Prüfung <fem>
         Note: von etw.
         Note: inhaltliche Begutachtung
      "examination of the books"  - Prüfung der Bücher
      "examination of proposal (insurance business)"  - Prüfung des Antrags (Versicherungswesen)
      "examination of appeal (patent law)"  - Prüfung der Beschwerde (Patentrecht)
      "examination as to novelty (patent law)"  - Prüfung auf Neuheit (Patentrecht)
         Note: of sth.
         Note: appraisal
`,`examination /ɛɡzˌamɪnˈeɪʃən/
Vernehmung <fem> [jur.]
         Note: bei Gericht
      "re-examination"  - erneute Vernehmung
      "viva voce examination"  - mündliche Vernehmung
      "witness examination before trial"  - Zeugenvernehmung vor der Verhandlung
      "pre-trial examination of witnesses"  - Zeugenvernehmung vor der Verhandlung
      "examination in chief (civil action)"  - erste Zeugenvernehmung (durch den Rechtsanwalt, der den Zeugen benannt hat) (Zivilprozess)
      "examination of parties (civil action)"  - Parteienvernehmung, Vernehmung der Parteien (Zivilprozess)
      "conduct the examination of witnesses"  - die Zeugenvernehmungen vornehmen
      "undergo an examination"  - vernommen werden
 see: {examinations}, {public examination}

         Note: formal questioning in court
`]},{src:"exercise",ref:"Ausübung",display_src:"exercise",show_ref:!1,definition:[`exercise /ˈɛksəsˌaɪz/
Ausübung <fem>, Ausüben <neut>
         Note: einer Sache
      "in the exercise of his duties"  - bei der Ausübung seiner Pflichten
         Note: of a thing
`,`exercise /ˈɛksəsˌaɪz/
körperliche Bewegung <fem>, körperliche Betätigung <fem>
      "I need to get some exercise."  - Ich brauche ein wenig Bewegung.
   Synonym: {physical exercise}

 see: {take exercise}

`,`exercise /ˈɛksəsˌaɪz/
Übung <fem>, Bewegungsübung <fem> [sport]
 see: {exercises}, {balancing exercise}

`,`exercise /ˈɛksəsˌaɪz/
Übungsaufgabe <fem>, Aufgabe <fem>, Übungsbeispiel <neut>, Übung <fem>, Lernbeispiel <neut> [school]
   Synonym: {learning task}

 see: {learning tasks}, {exercises}

`,`exercise /ˈɛksəsˌaɪz/ <v>
exerzieren <v, intr> [mil.]
 see: {exercising}, {exercised}

`,`exercise /ˈɛksəsˌaɪz/ <v>
üben <v, trans>, trainieren <v, intr>, sich fit halten
      "exercise one's memory"  - sein Gedächtnis trainieren
 see: {exercising}, {exercised}, {unexercised}

`]},{src:"exertion",ref:"Anstrengung",display_src:"exertion",show_ref:!1,definition:[`exertion /ɛɡzˈɜːʃən/
Anstrengung <fem>, Strapaze <fem>
 see: {exertions}

`,`exertion /ɛɡzˈɜːʃən/
Anwendung <fem>, Einsatz <masc>
`,`exertion /ɛɡzˈɜːʃən/
Ausübung <fem>
      "exertion of pressure on sth."  - Ausübung von Druck auf etw.
`]},{src:"feeding tube",ref:"Ernährungssonde",display_src:"feeding tube",show_ref:!1,definition:[`feeding tube /fˈiːdɪŋ tjˈuːb/
Ernährungssonde <fem>
      "nasogastric feeding tube"  - transnasale Magenernährungssonde, nasale Magensonde
      "gastric feeding tube"  - Magenschlauch zur Ernährung
 see: {medical tube}, {tube}, {medical tubes}, {tubes}, {duodenal tube}, {duodenal probe}, {stomach tube}, {gastric tube}, {Rehfuß tube}, {nasogastric tube}, {nasal tube}, {nasal cannula}, {nasojejunal tube}

`]},{src:"fluids",ref:"Flüssigkeiten",display_src:"fluids",show_ref:!1,definition:[`fluids /flˈuːɪdz/
Flüssigkeiten <pl>
   Synonym: {liquids}

 see: {fluid}, {liquid}

`]},{src:"heal",ref:"heilen,",display_src:"heal",show_ref:!1,definition:[`heal /hˈiːl/ <v>
heilen, gesund werden, heil werden, heile werden <v, intr>
   Synonym: {heal up}

 see: {healing}, {healing up}, {healed}, {healed up}, {heals}, {healed}

`,`heal /hˈiːl/ <v>
verheilen, abheilen <v, intr> [med.]
      "it has/had healed (up)"  - es ist/war verheilt, es ist/war abgeheilt
      "a newly healed wound"  - eine frischverheilte Wunde
 see: {healing}, {healed}, {it heals}, {it healed}, {unhealed}

         Note: up
`]},{src:"hospitalization",ref:"Einlieferung",display_src:"hospitalization",show_ref:!1,definition:[`hospitalization /hˌɒspɪtəlaɪzˈeɪʃən/
Einlieferung <fem>, Einweisung ins / in ein Krankenhaus [med.]
      "compulsory hospitalization of the mentally ill"  - Zwangseinweisung in eine psychiatrische Anstalt, Unterbringung in einer psychiatrischen Anstalt, fürsorgerische Unterbringung
   Synonym: {hospitalisation}

 see: {compulsory hospitalization}

`,`hospitalization /hˌɒspɪtəlaɪzˈeɪʃən/
 [eAm.] Krankenhausaufenthalt <masc>, Spitalsaufenthalt <masc> [Ös.]  [Schw.]  [med.]
   Synonyms: {stay in hospital}, {hospitalisation}

`]},{src:"hysterectomy",ref:"Hysterektomia",display_src:"hysterectomy",show_ref:!1,definition:[`hysterectomy /hˌɪstəɹˈɛktəmi/
Hysterektomia <fem>, Hysterektomie <fem>, operative Entfernung der Gebärmutter [med.]
`]},{src:"incision",ref:"Einschneiden",display_src:"incision",show_ref:!1,definition:[`incision /ɪnsˈɪʒən/
Einschneiden <neut>, Einschnitt <masc>, Schnitt <masc>, Inzision <fem> [med.]
      "Kanavel's incision"  - Kanavel'scher Schnitt
      "incision and drainage"  - Inzision und Drainage
      "extent / to expand the incision"  - den Schnitt erweitern
   Synonym: {cut}

 see: {skin incision}, {exploratory incision}

`,`incision /ɪnsˈɪʒən/
Einschnitt <masc>, Kerbe <fem>, Schnitt <masc>
 see: {incisions}

`]},{src:"infusion",ref:"Aufguss",display_src:"infusion",show_ref:!1,definition:[`infusion /ɪnfjˈuːʒən/
Aufguss <masc> [cook.]
         Note: aus Pflanzenteilen
      "infusion of green tea"  - Aufguss aus Grüntee, Grünteeaufguss, aufgegossener Grüntee
      "green tea infusion"  - Aufguss aus Grüntee, Grünteeaufguss, aufgegossener Grüntee
   Synonym: {brew}

 see: {fruit infusion}, {fruit brew}, {herbal infusion}, {herbal brew}, {second infusion}, {second brew}

`,`infusion /ɪnfjˈuːʒən/
Eindringen <neut>
`,`infusion /ɪnfjˈuːʒən/
Einflößen <neut>, Eingießen <neut>
`,`infusion /ɪnfjˈuːʒən/
Infusion <fem> [med.]
         Note: Vorgang
      "short-term infusion"  - Kurzinfusion
 see: {infusions}, {short infusion}

         Note: process
`]},{src:"intervention",ref:"Einflussnahme",display_src:"intervention",show_ref:!1,definition:[`intervention /ˌɪntəvˈɛnʃən/
Einflussnahme <fem>, Intervention <fem> [pol.]  [soc.]
 see: {interventions}, {prohibited intervention}

`,`intervention /ˌɪntəvˈɛnʃən/
Eingreifen <neut>, Eingriff <masc>
         Note: seitens +Gen. / von Seiten +Gen.
 see: {human intervention}

         Note: from sb. / on the part of sb.
`]},{src:"isolation",ref:"Abgelegenheit",display_src:"isolation",show_ref:!1,definition:[`isolation /ˌaɪsəlˈeɪʃən/
Abgelegenheit <fem>, Einsamkeit <fem>
`,`isolation /ˌaɪsəlˈeɪʃən/
Absonderung <fem>
`,`isolation /ˌaɪsəlˈeɪʃən/
Absonderung <fem>, Isolierung <fem> [med.]
         Note: von Infektionspatienten
   Synonyms: {segregation}, {separation}

 see: {cohort Isolation}, {protective isolation}, {strict isolation}, {standard isolation}

         Note: of patients with infection
`,`isolation /ˌaɪsəlˈeɪʃən/
Entkopplung <fem>
`,`isolation /ˌaɪsəlˈeɪʃən/
Isolation <fem>, Isolierung <fem>
      "self-isolation"  - freiwillige Isolation, selbstgewählte Isolation, Selbstisolation, Selbstisolierung
      "danger of social isolation"  - Gefahr sozialer Isolierung
 see: {reproductive isolation}, {social isolation}

`,`isolation /ˌaɪsəlˈeɪʃən/
Vereinsamung <fem>
   Synonym: {loneliness}

`]},{src:"laparoscopy",ref:"laparoskopische",display_src:"laparoscopy",show_ref:!1,definition:[`laparoscopy /lˌapɐɹˈɒskəpi/
laparoskopische Chirurgie, Laparoskopie
   Synonym: {laparoscopic surgery}

 see: {surgery}, {general surgery}, {abdominal surgery}, {cosmetic surgery}, {microsurgery}, {keyhole surgery}, {orthopaedic surgery}, {plastic surgery}, {lacrimal surgery}

`,`laparoscopy /lˌapɐɹˈɒskəpi/
Laparoskopie <fem>, Bauchspiegelung <fem> [med.]
`]},{src:"massage",ref:"Massage",display_src:"massage",show_ref:!1,definition:[`massage /mˈasɑːʒ/
Massage <fem> [med.]
      "full-body massage"  - Ganzkörpermassage
      "reflex zone massage"  - Reflexzonenmassage
      "give sb. a massage"  - jdn. massieren
 see: {massages}, {facial massage}, {curative massage}, {thai massage}, {underwater massage}

`]},{src:"moderately",ref:"gemäßigt",display_src:"moderately",show_ref:!1,definition:[`moderately /mˈɒdəɹətli/
gemäßigt <adv>
`,`moderately /mˈɒdəɹətli/
mäßig <adv>
`]},{src:"nuclear medicine",ref:"Nuklearmedizin",display_src:"nuclear medicine",show_ref:!1,definition:[`nuclear medicine /njˈuːkliə mˈɛdsən/
Nuklearmedizin <fem> [med.]
`,`nuclear medicine /njˈuːkliə mˈɛdsən/
nuklearmedizinisch <adj> [med.]
`]},{src:"observation",ref:"Bemerkung",display_src:"observation",show_ref:!1,definition:[`observation /ɒbzəvˈeɪʃən/
Bemerkung <fem>, Äußerung <fem>, Überlegung <fem>
 see: {observations}, {make observations}

`,`observation /ɒbzəvˈeɪʃən/
Beobachtung <fem>, Beobachten <neut>
      "observation of daily life"  - Alltagsbeobachtung
      "keep sb. under observation"  - jdn. unter Beobachtung halten
 see: {observations}, {daily observation}

`,`observation /ɒbzəvˈeɪʃən/
Einhaltung <fem>, Einhalten <neut>, Befolgung <fem>, Befolgen <neut>, Beachtung <fem>, Beachten <neut>
         Note: von etw.
   Synonyms: {observance}, {adherence}, {compliance}

 see: {defective compliance}, {trade compliance}, {medical compliance}, {medical adherence}, {concordance with treatment}

         Note: of sth.
`,`observation /ɒbzəvˈeɪʃən/
Observation <fem> [med.]
`,`observation /ɒbzəvˈeɪʃən/
Beobachtung <fem> [med.]
`]},{src:"operation",ref:"Aktion",display_src:"operation",show_ref:!1,definition:[`operation /ˌɒpəɹˈeɪʃən/
Aktion <fem>, Operation <fem> [mil.]
      "false-flag operation"  - Operation unter falscher Flagge
 see: {operations}, {military operation}, {covert operation}

`,`operation /ˌɒpəɹˈeɪʃən/
Arbeitsablauf <masc>, Ablauf <masc>, Arbeitsvorgang <masc>, Vorgang [aktiver]
      "Every member of the crew must be familiar with these operations."  - Jedes Besatzungsmitglied muss mit diesen Abläufen vertraut sein.
 see: {shift operation}

         Note: discharge of a function
`,`operation /ˌɒpəɹˈeɪʃən/
Arbeitsvorgang <masc>
   Synonyms: {process}, {cycle}, {working process}

 see: {processes}, {cycles}, {operations}, {working processes}

`,`operation /ˌɒpəɹˈeɪʃən/
Bedienung <fem>, Handhabung <fem>
         Note: einer Sache
      "the basis operation of the program"  - die grundlegende Bedienung des Programms
   Synonym: {operating}

`,`operation /ˌɒpəɹˈeɪʃən/
Betrieb <masc> [adm.]  [techn.]
         Note: reguläre Arbeitsvorgänge
      "all-weather operation"  - Allwetterbetrieb
      "all-weather operations"  - Allwetterbetrieb
      "put into operation"  - in Betrieb setzen
      "operation and maintenance"  - Betrieb und Wartung
      "halt all operations until further notice"  - den Betrieb bis auf weiteres einstellen
   Synonym: {operations}

 see: {museum operation}, {partial operation}, {in operation}, {at work}, {activated}, {start operations}, {come on line}, {be brought on line}, {come on stream}, {be brought on stream}, {cease operations}

`,`operation /ˌɒpəɹˈeɪʃən/
Betrieb <masc>, Geschäft <neut> [econ.]
   Synonyms: {business}, {concern}

 see: {family business}, {family operation}, {family concern}, {leisure business}, {operational unit}

`,`operation /ˌɒpəɹˈeɪʃən/
Betriebsablauf <masc>
      "normal course of operations"  - normaler Betriebsablauf
      "failure-free operation"  - störungsfreier Betriebsablauf
   Synonym: {operating procedure}

 see: {operating procedures}, {operations}

`,`operation /ˌɒpəɹˈeɪʃən/
Betriebsart <fem>, Betriebsweise <fem> [selten] , Betrieb <masc> [techn.]
         Note: in Zusammensetzungen
      "modes of operation"  - Betriebsarten, Betriebsweisen
      "no-load operation"  - Betrieb ohne Last
      "on-load operation"  - Betrieb unter Last
      "base-load operation"  - Grundlastbetrieb
      "in recirculation operation"  - im Umwälzbetrieb
   Synonyms: {operating mode}, {mode of operation}, {mode}

 see: {operating modes}, {automatic mode}, {manual mode}, {inching mode}

         Note: in compounds
`,`operation /ˌɒpəɹˈeɪʃən/
Einsatz <masc> [adm.]
   Synonym: {action}

 see: {actions}, {operations}

`,`operation /ˌɒpəɹˈeɪʃən/
Einsatz <masc>
         Note: Blaulichtorganisationen, Militär
      "large scale operation"  - Großeinsatz
   Synonyms: {operational mission}, {mission}, {action}

 see: {operational exercise}, {intruder mission}

`,`operation /ˌɒpəɹˈeɪʃən/
Gang <masc>, Lauf <masc>, Laufen <neut> [mach.]
         Note: Funktionieren einer Maschine
      "put a machine into operation"  - eine Maschine in Gang setzen, anlaufen lassen, anlassen
   Synonym: {running}

 see: {rough running}, {start up a machine}

`,`operation /ˌɒpəɹˈeɪʃən/
Geschäftsfall <masc>, Geschäftsvorgang <masc>, Geschäftsvorfall <masc> [econ.]
   Synonyms: {event}, {transaction}

`,`operation /ˌɒpəɹˈeɪʃən/
Operation <fem>, operativer Eingriff <masc>, chirurgischer Eingriff <masc>, Eingriff <masc> [med.]
      "have an operation"  - sich operieren lassen, sich einer Operation unterziehen
   Synonyms: {surgery}, {surgical operation}, {surgical intervention}, {operative procedure}

 see: {operations}, {surgeries}, {surgical operations}, {surgical interventions}, {operative procedures}, {exploratory operation}, {exploratory surgery}, {major surgery}, {minor surgery}, {emergency operation}, {immediate operation}, {emergency surgery}, {spacer operation}, {dental surgery}, {tooth operation}, {undergo surgery}, {need surgery}

`]},{src:"pain management",ref:"Schmerzbehandlung",display_src:"pain management",show_ref:!1,definition:[`pain management /pˈeɪn mˈanɪdʒmənt/
Schmerzbehandlung <fem>, Schmerztherapie <fem>, analgetische Therapie <fem> [med.]
   Synonyms: {pain treatment}, {treatment for pain}, {pain therapy}, {analgesic treatment}, {analgesic therapy}

`]},{src:"pain relief",ref:"Schmerzausschaltung",display_src:"pain relief",show_ref:!1,definition:[`pain relief /pˈeɪn ɹɪlˈiːf/
Schmerzausschaltung <fem>, Unterdrückung der Schmerzempfindung, Analgesie <fem> [med.]
   Synonyms: {elimination of pain}, {analgesia}, {anesthetization}

 see: {cryoanesthesia}, {cryoanesthetization}, {local analgesia}, {local anesthetization}, {relative analgesia}

`,`pain relief /pˈeɪn ɹɪlˈiːf/
Schmerzlinderung <fem>
`]},{src:"physical activity",ref:"körperliche",display_src:"physical activity",show_ref:!1,definition:[`physical activity /fˈɪzɪkəl aktˈɪvɪti/
körperliche Aktivität
 see: {bodily}, {physical}, {physical development}, {physical violence}

`]},{src:"physical therapy",ref:"Krankengymnastik",display_src:"physical therapy",show_ref:!1,definition:[`physical therapy /fˈɪzɪkəl θˈɛɹəpi/
Krankengymnastik <fem>, Physiotherapie <fem> [med.]
   Synonyms: {remedial gymnastics}, {medical gymnastics}, {physiotherapy}, {physiatrics}, {therapeutic exercise}

`]},{src:"procedure",ref:"Arbeitsweise",display_src:"procedure",show_ref:!1,definition:[`procedure /pɹəsˈiːdʒə/
Arbeitsweise <fem>, Verfahren <neut> [adm.]
 see: {procedures}, {alternative procedures}, {written procedure}

`,`procedure /pɹəsˈiːdʒə/
Modalität <fem>, Art und Weise <fem>, Vorgehensweise <fem>, Ausführungsweise <fem>
      "What are the collection procedures for …?"  - Wie sind die Abholmodalitäten bei …?
   Synonym: {modality}

 see: {modalities}, {procedures}

`,`procedure /pɹəsˈiːdʒə/
Prozedur <fem> [comp.]
 see: {procedures}

`,`procedure /pɹəsˈiːdʒə/
Verfahren <neut> [math.]
   Synonym: {method}

 see: {parametric procedure}

`,`procedure /pɹəsˈiːdʒə/
Verfahrensablauf <masc>, Ablauf <masc>, Vorgang <masc>
      "the practical procedures of a murder investigation"  - der praktische Ablauf von Mordermittlungen
 see: {procedures}, {vaccination procedure}

`,`procedure /pɹəsˈiːdʒə/
Verfahrensweise <fem>
   Synonyms: {method}, {approach}, {practice}

 see: {good practice}, {best practice}

`,`procedure /pɹəsˈiːdʒə/
Vorgehensweise <fem>, Vorgangsweise <fem> [Ös.] , Vorgehen <neut>, Procedere <neut> [geh.] , Modus procedendi [geh.] , Verfahren <neut>, Prozedur <fem> [pej.]  [adm.]
      "clarify the procedure"  - die Vorgehensweise darlegen
   Synonym: {modus procedendi}

`]},{src:"radiation",ref:"Abstrahlung",display_src:"radiation",show_ref:!1,definition:[`radiation /ɹˌeɪdɪˈeɪʃən/
Abstrahlung <fem> [phys.]
`,`radiation /ɹˌeɪdɪˈeɪʃən/
Ausstrahlung <fem>
 see: {radiations}

`,`radiation /ɹˌeɪdɪˈeɪʃən/
 [ir] Bestrahlungstherapie <fem>, Bestrahlung <fem> [med.]
   Synonyms: {irradiation/radiation therapy}, {radiotherapy}, {ray therapy}

 see: {contact radiation}, {multifraction irradiation}, {postoperative radiation}, {instantaneous irradiation}

`,`radiation /ɹˌeɪdɪˈeɪʃən/
Ausbreitung in neue Lebensräume
         Note: einer Tierart
 see: {living space}, {habitat}, {biotope}, {living spaces}, {habitats}, {biotopes}, {breeding habitat}, {habitat fragmentation}

         Note: of a species
`,`radiation /ɹˌeɪdɪˈeɪʃən/
Radiation <fem> [biol.]
         Note: Evolutionsbiologie
 see: {adaptive radiation}

         Note: evolutionary biology
`,`radiation /ɹˌeɪdɪˈeɪʃən/
Strahlung <fem> [phys.]
      "soft/hard radiation"  - harte/weiche Strahlung, energiearme/energiereiche Strahlung
 see: {initial radiation}, {background radiation}, {ionizing radiation}, {ionising radiation}, {radioactive radiation}, {nuclear radiation}, {cascade radiation}, {surface-wave radition}, {residual radiation}

`,`radiation /ɹˌeɪdɪˈeɪʃən/
Verströmen <neut>
`]},{src:"rehabilitation",ref:"Rehabilitation",display_src:"rehabilitation",show_ref:!1,definition:[`rehabilitation /ɹɪhˌabɪlɪtˈeɪʃən/
Rehabilitation <fem>, Reha <fem> [ugs.]
   Synonym: {rehab}

 see: {follow-up treatment}, {follow-up health measure}, {functional rehabilitation}

`,`rehabilitation /ɹɪhˌabɪlɪtˈeɪʃən/
Rehabilitierung <fem>
`,`rehabilitation /ɹɪhˌabɪlɪtˈeɪʃən/
Renaturierung <fem>, Rückbau <masc> [envir.]
   Synonyms: {renaturalization}, {renaturation}, {restoration}, {regeneration}, {recovery of natural habitat}

 see: {bioengineering of streams}, {natural river engineering measures}, {bog restoration}, {bog regeneration}

`,`rehabilitation /ɹɪhˌabɪlɪtˈeɪʃən/
Resozialisierung <fem> [soc.]  [zool.]
      "the rehabilitation of laboratory apes"  - die Resozialisierung von Laboraffen
   Synonym: {social rehabilitation}

`,`rehabilitation /ɹɪhˌabɪlɪtˈeɪʃən/
Sanierung <fem>
      "rehabilitation of a river"  - Sanierung eines Flusses
      "programme for economic rehabilitation"  - wirtschaftliches Sanierungsprogramm
      "in need of rehabilitation"  - sanierungsbedürftig
 see: {cleaning up of a river}, {monetary rehabilitation}

`]},{src:"rest",ref:"Auflage",display_src:"rest",show_ref:!1,definition:[`rest /ɹˈɛst/
Auflage <fem>, Unterlage <fem>, Stütze <fem>
   Synonym: {support}

 see: {rests}, {supports}

`,`rest /ɹˈɛst/
Lehne <fem>
   Synonyms: {backrest}, {armrest}

 see: {backrests}, {armrests}, {rests}, {seat backrest}

`,`rest /ɹˈɛst/
Pause <fem>, Pausezeichen <neut> [mus.]
      "whole-note rest"  - ganze Pause
      "half-note rest"  - halbe Pause
 see: {semibreve rest}, {minim rest}

`,`rest /ɹˈɛst/
Rast <fem>, Ausruhen <neut>, Erholung <fem>
`,`rest /ɹˈɛst/
Ruhe <fem>, Pause <fem>, Unterbrechung <fem>
 see: {rests}, {need rest}, {rest}

`,`rest /ɹˈɛst/ <v>
Pause machen
 see: {rest}, {rests}, {need rest}

`,`rest /ɹˈɛst/ <v>
sich ausruhen <v, refl>, ausruhen <v, intr>, ruhen <v, intr> [geh.] , sich ausrasten <v, refl> [Bayr.]  [Ös.]
      "having/taking a rest"  - sich ausruhend, ausruhend, ruhend
      "had/taken a rest"  - sich ausgeruht, ausgeruht, geruht
      "be well rested"  - ausgeruht sein
      "no time to rest"  - keine Zeit um auszuruhen
      "a place to rest"  - ein Platz zum Ausruhen
   Synonyms: {have/take a rest}, {repose}

 see: {resting}, {reposing}, {rested}, {reposed}, {rests}, {rested}

`,`rest /ɹˈɛst/ <v>
basieren <v, intr>, sich stützen <v, refl>, beruhen, ruhen <v, intr>
         Note: auf
 see: {resting}, {rested}, {rests}, {rested}

         Note: upon; on
`,`rest /ɹˈɛst/ <v>
lehnen <v, intr>
         Note: an; gegen
 see: {resting}, {rested}

         Note: on; against
`,`rest /ɹˈɛst/ <v>
rasten <v, intr>
      "having a rest"  - rastend
      "had a rest"  - gerastet
   Synonyms: {have a rest}, {have a break}, {take a break}

 see: {resting}, {having a break}, {taking a break}, {rested}, {had a break}, {taken a break}

`]},{src:"sedation",ref:"Ruhigstellung",display_src:"sedation",show_ref:!1,definition:[`sedation /sɛdˈeɪʃən/
Ruhigstellung <fem>, Beruhigung <fem>, Sedierung <fem> [med.]
      "be under sedation"  - ruhiggestellt sein, sediert sein
`]},{src:"sling",ref:"Rundstropp",display_src:"sling",show_ref:!1,definition:[`sling /slˈɪŋ/
Rundstropp <masc>, Stropp <masc>
         Note: Kran
 see: {underslung load}

         Note: of a crane
`,`sling /slˈɪŋ/
Schlinge <fem>
      "He has / wears his arm in a sling."  - Er trägt den Arm in der Schlinge.
 see: {slings}

`,`sling /slˈɪŋ/ (slung /slˈʌŋ/ <>, slung /slˈʌŋ/ <>) <v>
 [coll.] etw. (an einen Ort) werfen, schleudern, schmeißen <v, trans> [ugs.]
   Synonyms: {throw}, {toss}, {cast}, {fling}, {pitch}, {chuck}, {heave}, {bung}, {peg}, {hoy}, {bish sth.}

 see: {throwing}, {tossing}, {casting}, {flinging}, {pitching}, {chucking}, {slinging}, {heaving}, {bunging}, {peging}, {hoying}, {bishing}, {thrown}, {tossed}, {cast}, {flung}, {pitched}, {chucked}, {slung}, {heaved}, {bunged}, {peged}, {hoyed}, {bished}, {you throw}, {I/he/she threw}, {we/they threw}, {hurl a brick through the window glass}, {She hurled herself into the job with enthusiasm.}, {Mike threw a stone into the pond.}

`]},{src:"soaks",ref:"Säufer",display_src:"soaks",show_ref:!1,definition:[`soaks /sˈəʊks/
Säufer <pl>, Söffer <pl>, Söffel <pl>, Süffel <pl>, Suffköppe <pl>, Schluckspechte <pl>, Pietschen <pl>, Schnapsbrüder <pl>, Schnapsdrosseln <pl>, Tschecheranten <pl>
   Synonyms: {boozers}, {lushs}, {soakers}, {sots}, {sponges}, {tipplers}, {winos}, {boozehounds}, {juiceheads}, {hopheads}, {methos}

 see: {boozer}, {lush}, {soaker}, {soak}, {sot}, {sponge}, {tippler}, {wino}, {elbow-bender}, {boozehound}, {juicehead}, {hophead}, {metho}

`,`soaks /sˈəʊks/
durchnässt, durchtränkt, durchfeuchtet, durchweicht
   Synonym: {drenches}

 see: {soak}, {drench sth.}, {soaking}, {drenching}, {soaked}, {drenched}, {soaked}, {drenched}

`,`soaks /sˈəʊks/
verschwitzt
 see: {soak}, {soak with sweat}, {soaking}, {soaked}, {soaked}

`]},{src:"suction",ref:"Absaugung",display_src:"suction",show_ref:!1,definition:[`suction /sˈʌkʃən/
Absaugung <fem> [techn.]
   Synonym: {removal by suction}

`,`suction /sˈʌkʃən/
Sog <masc>, Sogwirkung <fem> [phys.]
         Note: von Luft, Wasser
   Synonym: {pull}

`]},{src:"support",ref:"Auflage",display_src:"support",show_ref:!1,definition:[`support /səpˈɔːt/
Auflage <fem>, Unterlage <fem>, Stütze <fem>
      "Place the ladder on a firm support and on even ground."  - Stellen Sie die Leiter auf eine feste Unterlage und auf ebenen Boden.
   Synonym: {rest}

 see: {rests}, {supports}

`,`support /səpˈɔːt/
Auflager <neut> [techn.]
 see: {restraint abutment}, {free support}, {hinged support}

`,`support /səpˈɔːt/
Vorband <fem>, Vorgruppe <fem>
   Synonyms: {supporting band}, {supporting act}, {warm-up act}

 see: {band}, {bands}, {backup band}, {backing band}, {rock band}

`,`support /səpˈɔːt/
Befürwortung <fem>
`,`support /səpˈɔːt/
Chassisträger <masc> [techn.]
   Synonym: {beam}

`,`support /səpˈɔːt/
Förderung <fem>
 see: {financial support}, {appropriate support}

`,`support /səpˈɔːt/
 [Am.] Geldunterhalt <masc>, Alimente <pl> [jur.]
   Synonym: {maintenance}

`,`support /səpˈɔːt/
Halterung <fem>, Halter <masc>
         Note: in Zusammensetzungen, Befestigung <fem>
      "metal sheet support"  - Blechhalterung
      "mounting support for company name plate"  - Halterung für Firmenschild
   Synonyms: {mounting support}, {mounting bracket}, {mounting}, {holder}

 see: {mounting supports}, {mounting brackets}, {mountings}, {supports}, {holders}

`,`support /səpˈɔːt/
externe Kundenbetreuung <fem>, externe Betreuung von Kunden [econ.]
      "break/fix IT support"  - (externe) EDV-Betreuung auf Aufwandsbasis
      "break/fix support"  - (externe) EDV-Betreuung auf Aufwandsbasis
   Synonym: {support service}

 see: {IT support}

`,`support /səpˈɔːt/
Rückendeckung <fem>, Unterstützung <fem>
         Note: von jdm.
   Synonyms: {backing}, {buy-in}

`,`support /səpˈɔːt/
Stütze <fem>, Verstärkung <fem>
 see: {supports}

`,`support /səpˈɔːt/
Stützgerüst <neut>, Stütze <fem> [anat.]
   Synonym: {sustentaculum}

`,`support /səpˈɔːt/
Träger <masc> [arch.]  [math.]
 see: {supports}

`,`support /səpˈɔːt/
Unterstützung <fem>, Stütze <fem>, Rückhalt <masc>
         Note: bei etw.
      "aerial support for the combat unit"  - Luftunterstützung für die Kampfeinheit
      "in support of"  - zur Unterstützung, zugunsten
      "receive support from sb."  - an jdm. einen Rückhalt haben
      "find a support in sb."  - an jdm. einen Rückhalt haben
 see: {appropriate support}, {free support}, {social support}, {specific support}

         Note: for/in sth.
`,`support /səpˈɔːt/
Zutun <neut> [geh.]
      "This event wouldn't have been possible without the encouragement and support of the municipal authorities."  - Diese Veranstaltung wäre ohne Zutun der Stadtverwaltung nicht möglich gewesen.
   Synonyms: {involvement}, {assistance}, {encouragement}

 see: {without sb.s being involved}

`,`support /səpˈɔːt/ <v>
abfangen <v, trans>
         Note: Druck
   Synonyms: {prop}, {brace}

 see: {propping}, {supporting}, {bracing}, {propped}, {supported}, {braced}

`,`support /səpˈɔːt/ <v>
sich stützen <v, refl>
         Note: auf
 see: {supporting}, {supported}

         Note: on
`,`support /səpˈɔːt/ <v>
etw. tragen <v, trans>
         Note: Gewicht
      "The dome was supported by columns."  - Die Kuppel wurde von Säulen getragen.
   Synonyms: {bear}, {carry}, {stand}, {sustain}

 see: {bearing}, {carrying}, {standing}, {supporting}, {sustaining}, {born/borne}, {carried}, {stood}, {supported}, {sustained}

`,`support /səpˈɔːt/
Zuarbeit <fem>
`,`support /səpˈɔːt/
Schützenhilfe <fem>
      "support sb."  - jdm. bei etw. Schützenhilfe geben
 see: {back sb. up in sth.}

`,`support /səpˈɔːt/ <v>
abstützen <v, trans>
   Synonyms: {prop}, {shore}, {te reinforce}, {timber}, {strut}, {stiffen}, {stay}

`]},{src:"surgery",ref:"",display_src:"surgery",show_ref:!1,definition:[`surgery /sˈɜːdʒəɹi/
 [Br.] Arztsprechstunde <fem>, Sprechstunde <fem> [adm.]  [med.]
      "hold a surgery/clinic"  - Sprechstunde abhalten/halten/haben
   Synonyms: {doctor's consultation hour}, {clinic}

`,`surgery /sˈɜːdʒəɹi/
Behandlungsraum <masc>, Behandlungszimmer <neut> [med.]
   Synonyms: {treatment room}, {consulting room}

 see: {treatment rooms}, {consulting rooms}, {surgeries}

`,`surgery /sˈɜːdʒəɹi/
Chirurgie <fem> [med.]
      "minimally invasive surgery"  - minimalinvasive Chirurgie, Schlüsselloch-Chirurgie
      "maxillo-facial surgery"  - Mund-, Kiefer- und Gesichtschirurgie
 see: {general surgery}, {abdominal surgery}, {cosmetic surgery}, {laparoscopic surgery}, {laparoscopy}, {microsurgery}, {keyhole surgery}, {orthopaedic surgery}, {plastic surgery}, {lacrimal surgery}

`,`surgery /sˈɜːdʒəɹi/
Operation <fem>, operativer Eingriff <masc>, chirurgischer Eingriff <masc>, Eingriff <masc> [med.]
      "damage control surgery"  - Notoperation, Sofortoperation
   Synonyms: {operation}, {surgical operation}, {surgical intervention}, {operative procedure}

 see: {operations}, {surgeries}, {surgical operations}, {surgical interventions}, {operative procedures}, {exploratory operation}, {exploratory surgery}, {major surgery}, {minor surgery}, {emergency operation}, {immediate operation}, {emergency surgery}, {spacer operation}, {dental surgery}, {tooth operation}, {undergo surgery}, {need surgery}

`]},{src:"suture removal",ref:"Fädenziehen",display_src:"suture removal",show_ref:!1,definition:[`suture removal /sˈuːtʃə ɹɪmˈuːvəl/
Fädenziehen <neut>, Fadenentfernung <fem> [med.]
`]},{src:"tracheostomy",ref:"Tracheostoma",display_src:"tracheostomy",show_ref:!1,definition:[`tracheostomy /tɹˌeɪkɪˈɒstəmi/
Tracheostoma <neut> [med.]
         Note: operativ angelegte Öffnung zur Luftröhre
`]},{src:"transfusion",ref:"Transfusion",display_src:"transfusion",show_ref:!1,definition:[`transfusion /tɹansfjˈuːʒən/
Transfusion <fem>
 see: {transfusions}

`]},{src:"transplant",ref:"Setzpflanze",display_src:"transplant",show_ref:!1,definition:[`transplant /tɹansplˈant/
Setzpflanze <fem>, Setzling <masc> [agr.]
 see: {transplants}, {plug tray plants}, {plug plants}, {plugs}, {liner plants}, {liners}

`,`transplant /tɹansplˈant/
Transplantat <neut> [med.]
   Synonym: {graft}

 see: {transplants}, {grafts}, {heart transplant}, {autoplastic graft}, {autograft}, {autoplast}, {allogeneic graft}, {allograft}, {homograft}, {homotransplant}, {heterologous graft}, {heterograft}, {heterotransplant}, {xenograft}, {Reverdin graft}, {pinch graft}

`]},{src:"triage",ref:"Erstbegutachtung",display_src:"triage",show_ref:!1,definition:[`triage /tɹˈiːɑːʒ/
Erstbegutachtung <fem> [kursorische] , Triage <fem> [med.]
         Note: zur Priorisierung der Behandlungsfälle bei großen Patientenzahlen
      "five-level triage"  - fünfstufige Ersteinschätzung, fünfstufige Triage
 see: {do triage}

         Note: cursory assessment for prioritizing treatment of a large number of patients
`,`triage /tɹˈiːɑːʒ/
Selektion <fem> [pol.]  [soc.]
      "system of educational triage"  - Selektion im Bildungssystem
`]},{src:"wound care",ref:"Wundbehandlung",display_src:"wound care",show_ref:!1,definition:[`wound care /wˈuːnd kˈeə/
Wundbehandlung <fem>, Wundversorgung <fem>, Wundpflege <fem> [med.]
   Synonym: {wound toilet}

`,`wound care /wˈuːnd kˈeə/
Wundpflege <fem> [med.]
   Synonym: {wound management}

`]}];function xn(p,k,h){const t=p.slice();return t[21]=k[h],t}function Bn(p){let k,h,t;return{c(){k=$("button"),k.textContent="Suggestions",J(k,"class","tab svelte-hmo6hx"),De(k,"selected-tab",p[2]==="suggestions")},m(r,w){he(r,k,w),h||(t=le(k,"click",p[12]),h=!0)},p(r,w){w&4&&De(k,"selected-tab",r[2]==="suggestions")},d(r){r&&ce(k),h=!1,t()}}}function Mn(p){let k,h=Ie(p[5]),t=[];for(let r=0;r<h.length;r+=1)t[r]=Cn(xn(p,h,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();k=ot()},m(r,w){for(let m=0;m<t.length;m+=1)t[m]&&t[m].m(r,w);he(r,k,w)},p(r,w){if(w&112){h=Ie(r[5]);let m;for(m=0;m<h.length;m+=1){const y=xn(r,h,m);t[m]?t[m].p(y,w):(t[m]=Cn(y),t[m].c(),t[m].m(k.parentNode,k))}for(;m<t.length;m+=1)t[m].d(1);t.length=h.length}},d(r){r&&ce(k),Xe(t,r)}}}function Wn(p){let k,h,t=p[21].ref+"";return{c(){k=$("div"),h=$("div"),J(h,"class","sentence-wrapper svelte-hmo6hx"),J(k,"class","sentence-ref svelte-hmo6hx")},m(r,w){he(r,k,w),Z(k,h),h.innerHTML=t},p(r,w){w&32&&t!==(t=r[21].ref+"")&&(h.innerHTML=t)},d(r){r&&ce(k)}}}function Cn(p){let k,h,t,r=p[21].display_src+"",w,m,y,g,d,f;function i(){return p[17](p[21])}function e(){return p[18](p[21])}let n=p[21].show_ref&&Wn(p);return{c(){k=$("div"),h=$("div"),t=$("div"),w=ae(),m=$("button"),y=ae(),n&&n.c(),g=ae(),J(t,"class","sentence-wrapper svelte-hmo6hx"),J(m,"class","add-sentence-button icon-button svelte-hmo6hx"),J(h,"class","sentence-source svelte-hmo6hx"),J(k,"class","sentence-row show-source svelte-hmo6hx")},m(u,c){he(u,k,c),Z(k,h),Z(h,t),t.innerHTML=r,Z(h,w),Z(h,m),m.innerHTML=Vt,Z(k,y),n&&n.m(k,null),Z(k,g),d||(f=[le(t,"click",i),le(m,"click",e)],d=!0)},p(u,c){p=u,c&32&&r!==(r=p[21].display_src+"")&&(t.innerHTML=r),p[21].show_ref?n?n.p(p,c):(n=Wn(p),n.c(),n.m(k,g)):n&&(n.d(1),n=null)},d(u){u&&ce(k),n&&n.d(),d=!1,ve(f)}}}function Yt(p){let k,h,t,r,w,m,y,g,d,f,i,e,n,u,c=p[5].length+"",o,a,l,b,s,v,E=p[0].length>0&&Bn(p),_=p[5]!==null&&Mn(p);return{c(){k=$("div"),h=$("div"),t=$("div"),E&&E.c(),r=ae(),w=$("button"),w.textContent="Sentences",m=ae(),y=$("button"),y.textContent="Terms",g=ae(),d=$("form"),f=$("input"),i=ae(),e=$("div"),n=$("div"),u=$("span"),o=we(c),a=ae(),l=we(p[2]),b=ae(),_&&_.c(),J(w,"class","tab svelte-hmo6hx"),De(w,"selected-tab",p[2]==="sentences"),J(y,"class","tab svelte-hmo6hx"),De(y,"selected-tab",p[2]==="terms"),J(t,"class","tab-bar svelte-hmo6hx"),J(f,"class","search-bar-input svelte-hmo6hx"),J(f,"type","search"),J(f,"id","input-search"),J(f,"placeholder","Type to search..."),J(d,"class","search-bar svelte-hmo6hx"),J(h,"class","top-bar svelte-hmo6hx"),J(n,"id","sentence-list-count-label"),J(n,"class","svelte-hmo6hx"),J(e,"class","sentence-list svelte-hmo6hx"),J(k,"class","sentence-block svelte-hmo6hx")},m(z,T){he(z,k,T),Z(k,h),Z(h,t),E&&E.m(t,null),Z(t,r),Z(t,w),Z(t,m),Z(t,y),Z(h,g),Z(h,d),Z(d,f),p[16](f),Z(k,i),Z(k,e),Z(e,n),Z(n,u),Z(u,o),Z(u,a),Z(u,l),Z(e,b),_&&_.m(e,null),s||(v=[le(w,"click",p[13]),le(y,"click",p[14]),le(f,"input",p[15])],s=!0)},p(z,[T]){z[0].length>0?E?E.p(z,T):(E=Bn(z),E.c(),E.m(t,r)):E&&(E.d(1),E=null),T&4&&De(w,"selected-tab",z[2]==="sentences"),T&4&&De(y,"selected-tab",z[2]==="terms"),T&32&&c!==(c=z[5].length+"")&&xe(o,c),T&4&&xe(l,z[2]),z[5]!==null?_?_.p(z,T):(_=Mn(z),_.c(),_.m(e,null)):_&&(_.d(1),_=null)},i:fe,o:fe,d(z){z&&ce(k),E&&E.d(),p[16](null),_&&_.d(),s=!1,ve(v)}}}function Zt(p,k,h){let t,r,w,m,y,g,d,f,i;_e(p,Ue,_=>h(2,m=_)),_e(p,on,_=>h(3,y=_)),_e(p,Kt,_=>h(10,g=_)),_e(p,_n,_=>h(11,d=_)),_e(p,Ve,_=>h(19,f=_)),_e(p,mn,_=>h(6,i=_)),pn();let e=g,n=Ut,u=[...f.alternatives],c;const o=_=>Ke(Ue,m="suggestions",m),a=_=>Ke(Ue,m="sentences",m),l=_=>Ke(Ue,m="terms",m),b=_=>Ke(on,y=_.target.value,y);function s(_){Le[_?"unshift":"push"](()=>{c=_,h(1,c),h(2,m)})}const v=_=>{w(_)},E=_=>{Ke(mn,i=" "+_.src,i)};return p.$$.update=()=>{p.$$.dirty&2056&&y.length===0&&d.length>0&&Ke(on,y=d,y),p.$$.dirty&6&&h(9,t=function(_,z){return c&&c.value!=z&&h(1,c.value=z,c),_.reduce((T,A)=>{let S=A.src.toLowerCase().search(z.toLowerCase());return(m==="sentences"||S>=0)&&T.push({...A,display_src:S>=0?A.src.substring(0,S)+'<span style="font-weight: 800">'+A.src.substring(S,S+z.length)+"</span>"+A.src.substring(S+z.length):A.src}),T},[])}),p.$$.dirty&389&&h(4,w=function(_){m==="sentences"?h(7,e=e.map(z=>z.src===_.src?{...z,show_ref:!z.show_ref}:z)):m==="terms"?h(8,n=n.map(z=>z.src===_.src?{...z,show_ref:!z.show_ref}:z)):h(0,u=u.map(z=>z.src===_.src?{...z,show_ref:!z.show_ref}:z))}),p.$$.dirty&1805&&h(5,r=t(m==="sentences"?g:m==="terms"?n:u,y))},[u,c,m,y,w,r,i,e,n,t,g,d,o,a,l,b,s,v,E]}class Jt extends Me{constructor(k){super(),Be(this,k,Zt,Yt,Te,{})}}function jn(p){return Object.prototype.toString.call(p)==="[object Date]"}function Xt(p){const k=p-1;return k*k*k+1}function zn(p,k){if(p===k||p!==p)return()=>p;const h=typeof p;if(h!==typeof k||Array.isArray(p)!==Array.isArray(k))throw new Error("Cannot interpolate values of different type");if(Array.isArray(p)){const t=k.map((r,w)=>zn(p[w],r));return r=>t.map(w=>w(r))}if(h==="object"){if(!p||!k)throw new Error("Object cannot be null");if(jn(p)&&jn(k)){p=p.getTime(),k=k.getTime();const w=k-p;return m=>new Date(p+m*w)}const t=Object.keys(k),r={};return t.forEach(w=>{r[w]=zn(p[w],k[w])}),w=>{const m={};return t.forEach(y=>{m[y]=r[y](w)}),m}}if(h==="number"){const t=k-p;return r=>p+r*t}throw new Error(`Cannot interpolate ${h} values`)}function $t(p,k={}){const h=We(p);let t,r=p;function w(m,y){if(p==null)return h.set(p=m),Promise.resolve();r=m;let g=t,d=!1,{delay:f=0,duration:i=400,easing:e=An,interpolate:n=zn}=En(En({},k),y);if(i===0)return g&&(g.abort(),g=null),h.set(p=r),Promise.resolve();const u=rt()+f;let c;return t=st(o=>{if(o<u)return!0;d||(c=n(p,m),typeof i=="function"&&(i=i(p,m)),d=!0),g&&(g.abort(),g=null);const a=o-u;return a>i?(h.set(p=m),!1):(h.set(p=c(e(a/i))),!0)}),t.promise}return{set:w,update:(m,y)=>w(m(r,p),y),subscribe:h.subscribe}}function Qt(p){let k,h,t,r,w,m,y=p[0].source+"",g,d,f,i;return{c(){k=$("div"),h=$("div"),r=ae(),w=$("div"),m=$("p"),g=we(y),J(h,"class",t=Se("color-bar "+p[0].translation_type)+" svelte-1w00pkw"),De(h,"hovering",Ln),Je(h,"--height",p[1]+"%"),J(m,"class","svelte-1w00pkw"),J(w,"class",Se("sentence-wrapper")+" svelte-1w00pkw"),J(k,"class",d=Se("sentence-analysis-view "+p[0].translation_type)+" svelte-1w00pkw")},m(e,n){he(e,k,n),Z(k,h),Z(k,r),Z(k,w),Z(w,m),Z(m,g),f||(i=[le(k,"mouseenter",p[3]),le(k,"mouseleave",p[4])],f=!0)},p(e,[n]){n&1&&t!==(t=Se("color-bar "+e[0].translation_type)+" svelte-1w00pkw")&&J(h,"class",t),n&1&&De(h,"hovering",Ln),n&2&&Je(h,"--height",e[1]+"%"),n&1&&y!==(y=e[0].source+"")&&xe(g,y),n&1&&d!==(d=Se("sentence-analysis-view "+e[0].translation_type)+" svelte-1w00pkw")&&J(k,"class",d)},i:fe,o:fe,d(e){e&&ce(k),f=!1,ve(i)}}}let Ln=!1;function er(p,k,h){let t,{sentenceData:r}=k;const w=$t(80,{duration:400,easing:Xt});_e(p,w,g=>h(1,t=g));const m=g=>w.set(100),y=g=>w.set(80);return p.$$set=g=>{"sentenceData"in g&&h(0,r=g.sentenceData)},[r,t,w,m,y]}class nr extends Me{constructor(k){super(),Be(this,k,er,Qt,Te,{sentenceData:0})}}function Rn(p,k,h){const t=p.slice();return t[5]=k[h],t}function Hn(p){let k,h;return{c(){k=$("div"),J(k,"class",h=Se("score-mark "+(p[5]<p[1]?p[4]:""))+" svelte-17y6pac"),Je(k,"--size",p[2]+"px")},m(t,r){he(t,k,r)},p(t,r){r&19&&h!==(h=Se("score-mark "+(t[5]<t[1]?t[4]:""))+" svelte-17y6pac")&&J(k,"class",h),r&4&&Je(k,"--size",t[2]+"px")},d(t){t&&ce(k)}}}function tr(p){let k,h,t,r,w=Ie([...Array(p[0]).keys()]),m=[];for(let y=0;y<w.length;y+=1)m[y]=Hn(Rn(p,w,y));return{c(){k=$("div"),h=$("span"),t=we(p[3]),r=ae();for(let y=0;y<m.length;y+=1)m[y].c();J(k,"class","score-row svelte-17y6pac")},m(y,g){he(y,k,g),Z(k,h),Z(h,t),Z(k,r);for(let d=0;d<m.length;d+=1)m[d]&&m[d].m(k,null)},p(y,[g]){if(g&8&&xe(t,y[3]),g&23){w=Ie([...Array(y[0]).keys()]);let d;for(d=0;d<w.length;d+=1){const f=Rn(y,w,d);m[d]?m[d].p(f,g):(m[d]=Hn(f),m[d].c(),m[d].m(k,null))}for(;d<m.length;d+=1)m[d].d(1);m.length=w.length}},i:fe,o:fe,d(y){y&&ce(k),Xe(m,y)}}}function rr(p,k,h){let t,{maxScore:r=5}=k,{score:w=3}=k,{size:m=10}=k,{metric:y=""}=k;return p.$$set=g=>{"maxScore"in g&&h(0,r=g.maxScore),"score"in g&&h(1,w=g.score),"size"in g&&h(2,m=g.size),"metric"in g&&h(3,y=g.metric)},p.$$.update=()=>{p.$$.dirty&2&&h(4,t=w<3?"low":w<4?"medium":"high")},[r,w,m,y,t]}class Kn extends Me{constructor(k){super(),Be(this,k,rr,tr,Te,{maxScore:0,score:1,size:2,metric:3})}}function qn(p,k,h){const t=p.slice();return t[16]=k[h],t[18]=h,t}function Fn(p,k,h){const t=p.slice();return t[19]=k[h],t[18]=h,t}function Gn(p){let k,h,t=p[19]+"",r,w,m,y,g,d;function f(){return p[9](p[18],p[19])}return{c(){k=$("div"),h=$("p"),r=we(t),w=ae(),m=$("button"),m.textContent="x",y=ae(),J(h,"class","svelte-1quxb27"),J(m,"class","svelte-1quxb27"),J(k,"class","selected-template svelte-1quxb27")},m(i,e){he(i,k,e),Z(k,h),Z(h,r),Z(k,w),Z(k,m),Z(k,y),g||(d=le(m,"click",ze(f)),g=!0)},p(i,e){p=i,e&2&&t!==(t=p[19]+"")&&xe(r,t)},d(i){i&&ce(k),g=!1,d()}}}function Vn(p){let k,h,t,r,w=Ie(p[5]),m=[];for(let y=0;y<w.length;y+=1)m[y]=Un(qn(p,w,y));return{c(){k=$("div"),h=$("select");for(let y=0;y<m.length;y+=1)m[y].c();J(h,"class","svelte-1quxb27"),p[4]===void 0&&Re(()=>p[14].call(h)),J(k,"id","search-div"),J(k,"class","svelte-1quxb27")},m(y,g){he(y,k,g),Z(k,h);for(let d=0;d<m.length;d+=1)m[d]&&m[d].m(h,null);ln(h,p[4],!0),t||(r=[le(h,"change",p[14]),le(h,"click",ze(p[6])),le(h,"change",p[15])],t=!0)},p(y,g){if(g&32){w=Ie(y[5]);let d;for(d=0;d<w.length;d+=1){const f=qn(y,w,d);m[d]?m[d].p(f,g):(m[d]=Un(f),m[d].c(),m[d].m(h,null))}for(;d<m.length;d+=1)m[d].d(1);m.length=w.length}g&16&&ln(h,y[4])},d(y){y&&ce(k),Xe(m,y),t=!1,ve(r)}}}function Un(p){let k,h=p[16]+"",t;return{c(){k=$("option"),t=we(h),k.__value=p[18],en(k,k.__value)},m(r,w){he(r,k,w),Z(k,t)},p(r,w){w&32&&h!==(h=r[16]+"")&&xe(t,h)},d(r){r&&ce(k)}}}function ir(p){let k,h,t,r,w,m,y,g,d,f,i=Ie(p[1]),e=[];for(let u=0;u<i.length;u+=1)e[u]=Gn(Fn(p,i,u));let n=p[3]&&Vn(p);return{c(){k=$("div"),h=$("div"),t=$("div");for(let u=0;u<e.length;u+=1)e[u].c();r=ae(),w=$("div"),m=ae(),y=$("button"),y.textContent="clear",g=ae(),n&&n.c(),J(t,"id","selected-templates"),J(t,"class","svelte-1quxb27"),J(w,"id","search-area"),J(w,"contenteditable","true"),J(w,"class","svelte-1quxb27"),p[2]===void 0&&Re(()=>p[10].call(w)),J(y,"id","clear-templates-button"),J(y,"class","svelte-1quxb27"),J(h,"id","template-area"),J(h,"class","svelte-1quxb27"),De(h,"search",p[3]),J(k,"id","template-selector"),J(k,"class","svelte-1quxb27")},m(u,c){he(u,k,c),Z(k,h),Z(h,t);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null);Z(h,r),Z(h,w),p[2]!==void 0&&(w.innerText=p[2]),Z(h,m),Z(h,y),Z(k,g),n&&n.m(k,null),d||(f=[le(w,"input",p[10]),le(w,"focusin",p[11]),le(w,"click",ze(p[7])),le(w,"keydown",ze(p[8])),le(y,"click",ze(p[12])),le(h,"click",p[13])],d=!0)},p(u,[c]){if(c&3){i=Ie(u[1]);let o;for(o=0;o<i.length;o+=1){const a=Fn(u,i,o);e[o]?e[o].p(a,c):(e[o]=Gn(a),e[o].c(),e[o].m(t,null))}for(;o<e.length;o+=1)e[o].d(1);e.length=i.length}c&4&&u[2]!==w.innerText&&(w.innerText=u[2]),c&8&&De(h,"search",u[3]),u[3]?n?n.p(u,c):(n=Vn(u),n.c(),n.m(k,null)):n&&(n.d(1),n=null)},i:fe,o:fe,d(u){u&&ce(k),Xe(e,u),n&&n.d(),d=!1,ve(f)}}}function sr(p,k,h){let t,{selected:r=["Dear .NAME"]}=k,{alternatives:w=["hello there","my name is","samantha","robertson"]}=k,m=!1,y="",g="";function d(b){Pe.call(this,p,b)}function f(b){Pe.call(this,p,b)}function i(b){Pe.call(this,p,b)}const e=(b,s)=>{r.splice(b,1),w.unshift(s),h(1,r),h(0,w)};function n(){y=this.innerText,h(2,y)}const u=b=>h(3,m=!0),c=b=>{h(0,w=r.concat(w)),h(1,r=[])},o=b=>{h(3,m=!1)};function a(){g=lt(this),h(4,g)}const l=()=>{h(3,m=!1),r.push(w[g]),w.splice(g,1),h(1,r),h(0,w)};return p.$$set=b=>{"selected"in b&&h(1,r=b.selected),"alternatives"in b&&h(0,w=b.alternatives)},p.$$.update=()=>{p.$$.dirty&5&&h(5,t=y?w.filter(b=>b.search(y)>=0):w)},[w,r,y,m,g,t,d,f,i,e,n,u,c,o,a,l]}class ar extends Me{constructor(k){super(),Be(this,k,sr,ir,Te,{selected:1,alternatives:0})}}function Yn(p,k,h){const t=p.slice();return t[20]=k[h],t}function or(p){let k;return{c(){k=we("Using baseline model")},m(h,t){he(h,k,t)},d(h){h&&ce(k)}}}function lr(p){let k;return{c(){k=we("Using similar translations")},m(h,t){he(h,k,t)},d(h){h&&ce(k)}}}function ur(p){let k;return{c(){k=we("Matching template")},m(h,t){he(h,k,t)},d(h){h&&ce(k)}}}function Zn(p){let k,h=p[20]+"",t,r;return{c(){k=$("option"),t=we(h),k.__value=r=p[20],en(k,k.__value)},m(w,m){he(w,k,m),Z(k,t)},p(w,m){m&2&&h!==(h=w[20]+"")&&xe(t,h),m&2&&r!==(r=w[20])&&(k.__value=r,en(k,k.__value))},d(w){w&&ce(k)}}}function cr(p){let k,h,t=p[0].suggestion+"",r,w,m,y,g,d,f,i;return{c(){k=$("div"),h=$("p"),r=we(t),w=ae(),m=$("div"),y=$("button"),y.textContent="accept",g=ae(),d=$("button"),d.textContent="reject",J(h,"class","svelte-zwoe47"),J(m,"class","button-array"),J(k,"class","feedback-div svelte-zwoe47")},m(e,n){he(e,k,n),Z(k,h),Z(h,r),Z(k,w),Z(k,m),Z(m,y),Z(m,g),Z(m,d),f||(i=[le(h,"click",ze(p[11])),le(y,"click",ze(p[19])),le(d,"click",ze(p[10]))],f=!0)},p(e,n){n&1&&t!==(t=e[0].suggestion+"")&&xe(r,t)},i:fe,o:fe,d(e){e&&ce(k),f=!1,ve(i)}}}function hr(p){let k,h,t,r;return k=new Kn({props:{metric:"Utilization",score:p[0].nn_mt_metadata.overall_utilization}}),t=new Kn({props:{metric:"Coverage",score:p[0].nn_mt_metadata.overall_coverage}}),{c(){Oe(k.$$.fragment),h=ae(),Oe(t.$$.fragment)},m(w,m){Ee(k,w,m),he(w,h,m),Ee(t,w,m),r=!0},p(w,m){const y={};m&1&&(y.score=w[0].nn_mt_metadata.overall_utilization),k.$set(y);const g={};m&1&&(g.score=w[0].nn_mt_metadata.overall_coverage),t.$set(g)},i(w){r||(pe(k.$$.fragment,w),pe(t.$$.fragment,w),r=!0)},o(w){ye(k.$$.fragment,w),ye(t.$$.fragment,w),r=!1},d(w){w&&ce(h),Ne(k,w),Ne(t,w)}}}function fr(p){let k,h,t,r,w,m,y,g,d,f,i;function e(u){p[18](u)}let n={};return p[4]!==void 0&&(n.selected=p[4]),h=new ar({props:n}),Le.push(()=>fn(h,"selected",e)),{c(){k=$("div"),Oe(h.$$.fragment),r=ae(),w=$("div"),m=$("button"),m.textContent="accept",y=ae(),g=$("button"),g.textContent="reject",J(w,"class","button-array"),J(k,"class","feedback-div svelte-zwoe47")},m(u,c){he(u,k,c),Ee(h,k,null),Z(k,r),Z(k,w),Z(w,m),Z(w,y),Z(w,g),d=!0,f||(i=[le(m,"click",ze(p[9])),le(g,"click",ze(p[8]))],f=!0)},p(u,c){const o={};!t&&c&16&&(t=!0,o.selected=u[4],hn(()=>t=!1)),h.$set(o)},i(u){d||(pe(h.$$.fragment,u),d=!0)},o(u){ye(h.$$.fragment,u),d=!1},d(u){u&&ce(k),Ne(h),f=!1,ve(i)}}}function dr(p){let k,h,t,r,w,m,y,g,d,f,i,e,n,u=p[0].source+"",c,o,a,l,b,s,v,E,_,z,T,A;function S(C,M){return C[0].translation_type==="template"?ur:C[0].translation_type==="nn-mt"?lr:or}let D=S(p),N=D(p),P=Ie(p[1]),B=[];for(let C=0;C<P.length;C+=1)B[C]=Zn(Yn(p,P,C));const H=[fr,hr,cr],R=[];function Y(C,M){return C[0].translation_type==="template"?0:C[0].translation_type==="nn-mt"?1:2}return v=Y(p),E=R[v]=H[v](p),{c(){k=$("div"),h=$("div"),r=ae(),w=$("div"),m=$("div"),y=$("p"),N.c(),d=ae(),f=$("select");for(let C=0;C<B.length;C+=1)B[C].c();i=ae(),e=$("div"),n=$("p"),c=we(u),o=ae(),a=$("button"),l=we("rerun"),s=ae(),E.c(),J(h,"class",t=Se("color-bar "+p[0].translation_type)+" svelte-zwoe47"),J(y,"class",g=Se("title "+p[0].translation_type)+" svelte-zwoe47"),J(f,"id","classification-selector"),J(f,"class","svelte-zwoe47"),p[2]===void 0&&Re(()=>p[15].call(f)),J(m,"class","header-div svelte-zwoe47"),J(n,"contenteditable","true"),J(n,"class","svelte-zwoe47"),p[3]===void 0&&Re(()=>p[17].call(n)),a.disabled=b=!p[6],J(e,"class","src-div svelte-zwoe47"),J(w,"class","analysis-area svelte-zwoe47"),J(k,"class",_=Se("sentence-detail-view "+p[0].translation_type)+" svelte-zwoe47")},m(C,M){he(C,k,M),Z(k,h),Z(k,r),Z(k,w),Z(w,m),Z(m,y),N.m(y,null),Z(m,d),Z(m,f);for(let I=0;I<B.length;I+=1)B[I]&&B[I].m(f,null);ln(f,p[2],!0),Z(w,i),Z(w,e),Z(e,n),Z(n,c),p[16](n),p[3]!==void 0&&(n.innerText=p[3]),Z(e,o),Z(e,a),Z(a,l),Z(w,s),R[v].m(w,null),z=!0,T||(A=[le(f,"click",ze(p[14])),le(f,"change",p[15]),le(n,"input",p[17]),le(n,"click",ze(p[13])),le(a,"click",ze(p[12]))],T=!0)},p(C,[M]){if((!z||M&1&&t!==(t=Se("color-bar "+C[0].translation_type)+" svelte-zwoe47"))&&J(h,"class",t),D!==(D=S(C))&&(N.d(1),N=D(C),N&&(N.c(),N.m(y,null))),(!z||M&1&&g!==(g=Se("title "+C[0].translation_type)+" svelte-zwoe47"))&&J(y,"class",g),M&2){P=Ie(C[1]);let O;for(O=0;O<P.length;O+=1){const W=Yn(C,P,O);B[O]?B[O].p(W,M):(B[O]=Zn(W),B[O].c(),B[O].m(f,null))}for(;O<B.length;O+=1)B[O].d(1);B.length=P.length}M&6&&ln(f,C[2]),(!z||M&1)&&u!==(u=C[0].source+"")&&_t(c,u),M&8&&C[3]!==n.innerText&&(n.innerText=C[3]),(!z||M&64&&b!==(b=!C[6]))&&(a.disabled=b);let I=v;v=Y(C),v===I?R[v].p(C,M):(rn(),ye(R[I],1,1,()=>{R[I]=null}),sn(),E=R[v],E?E.p(C,M):(E=R[v]=H[v](C),E.c()),pe(E,1),E.m(w,null)),(!z||M&1&&_!==(_=Se("sentence-detail-view "+C[0].translation_type)+" svelte-zwoe47"))&&J(k,"class",_)},i(C){z||(pe(E),z=!0)},o(C){ye(E),z=!1},d(C){C&&ce(k),N.d(),Xe(B,C),p[16](null),R[v].d(),T=!1,ve(A)}}}function mr(p,k,h){let t,{sentenceData:r}=k,{sentenceTypes:w=["greeting","complaint","diagnosis","treatment"]}=k,m=[r.matched_template],y=r.pred_sentence_type,g=r.source,d;const f=pn();function i(_){Pe.call(this,p,_)}function e(_){Pe.call(this,p,_)}function n(_){Pe.call(this,p,_)}function u(_){Pe.call(this,p,_)}function c(_){Pe.call(this,p,_)}function o(_){Pe.call(this,p,_)}function a(_){Pe.call(this,p,_)}function l(){y=lt(this),h(2,y),h(1,w)}function b(_){Le[_?"unshift":"push"](()=>{d=_,h(5,d)})}function s(){g=this.innerText,h(3,g)}function v(_){m=_,h(4,m)}const E=()=>{f("accept-suggestion",{src:r.src,sugg:r.suggestion}),h(0,r.source=r.suggestion,r),h(0,r),h(5,d.innerText=r.source,d)};return p.$$set=_=>{"sentenceData"in _&&h(0,r=_.sentenceData),"sentenceTypes"in _&&h(1,w=_.sentenceTypes)},p.$$.update=()=>{p.$$.dirty&13&&h(6,t=!(g===r.source&&y===r.pred_sentence_type))},[r,w,y,g,m,d,t,f,i,e,n,u,c,o,a,l,b,s,v,E]}class pr extends Me{constructor(k){super(),Be(this,k,mr,dr,Te,{sentenceData:0,sentenceTypes:1})}}function Jn(p,k,h){const t=p.slice();return t[8]=k[h],t[10]=h,t}function gr(p){let k,h;return k=new nr({props:{sentenceData:p[8]}}),{c(){Oe(k.$$.fragment)},m(t,r){Ee(k,t,r),h=!0},p(t,r){const w={};r&2&&(w.sentenceData=t[8]),k.$set(w)},i(t){h||(pe(k.$$.fragment,t),h=!0)},o(t){ye(k.$$.fragment,t),h=!1},d(t){Ne(k,t)}}}function yr(p){let k,h;function t(){return p[3](p[10],p[8])}return k=new pr({props:{sentenceData:p[8]}}),k.$on("accept-suggestion",t),{c(){Oe(k.$$.fragment)},m(r,w){Ee(k,r,w),h=!0},p(r,w){p=r;const m={};w&2&&(m.sentenceData=p[8]),k.$set(m)},i(r){h||(pe(k.$$.fragment,r),h=!0)},o(r){ye(k.$$.fragment,r),h=!1},d(r){Ne(k,r)}}}function Xn(p){let k,h,t,r,w,m,y;const g=[yr,gr],d=[];function f(e,n){return e[2].source===e[8].source?0:1}h=f(p),t=d[h]=g[h](p);function i(...e){return p[4](p[8],...e)}return{c(){k=$("div"),t.c(),r=ae(),J(k,"class","analysis-mode-sentence-wrapper svelte-1pqsvcg"),Je(k,"--height",p[2].source===p[8].source?"60%":"10%")},m(e,n){he(e,k,n),d[h].m(k,null),Z(k,r),w=!0,m||(y=le(k,"click",i),m=!0)},p(e,n){p=e;let u=h;h=f(p),h===u?d[h].p(p,n):(rn(),ye(d[u],1,1,()=>{d[u]=null}),sn(),t=d[h],t?t.p(p,n):(t=d[h]=g[h](p),t.c()),pe(t,1),t.m(k,r)),n&6&&Je(k,"--height",p[2].source===p[8].source?"60%":"10%")},i(e){w||(pe(t),w=!0)},o(e){ye(t),w=!1},d(e){e&&ce(k),d[h].d(),m=!1,y()}}}function br(p){let k,h,t=Ie(p[1]),r=[];for(let m=0;m<t.length;m+=1)r[m]=Xn(Jn(p,t,m));const w=m=>ye(r[m],1,1,()=>{r[m]=null});return{c(){k=$("div");for(let m=0;m<r.length;m+=1)r[m].c();J(k,"id","analysis-area"),J(k,"class","svelte-1pqsvcg")},m(m,y){he(m,k,y);for(let g=0;g<r.length;g+=1)r[g]&&r[g].m(k,null);h=!0},p(m,[y]){if(y&7){t=Ie(m[1]);let g;for(g=0;g<t.length;g+=1){const d=Jn(m,t,g);r[g]?(r[g].p(d,y),pe(r[g],1)):(r[g]=Xn(d),r[g].c(),pe(r[g],1),r[g].m(k,null))}for(rn(),g=t.length;g<r.length;g+=1)w(g);sn()}},i(m){if(!h){for(let y=0;y<t.length;y+=1)pe(r[y]);h=!0}},o(m){r=r.filter(Boolean);for(let y=0;y<r.length;y+=1)ye(r[y]);h=!1},d(m){m&&ce(k),Xe(r,m)}}}function wr(p,k,h){let t,r,w;_e(p,dn,f=>h(5,t=f)),_e(p,Sn,f=>h(6,r=f)),_e(p,Ve,f=>h(2,w=f)),pn();let m=!1,y=[];return ct(()=>{h(1,y=r)}),ht(()=>{console.log(y),y.length>0&&Ke(dn,t=y.reduce((f,i,e)=>f+i.source+(i.source.length>0&&e!==y.length-1?". ":""),""),t)}),[m,y,w,(f,i)=>{h(1,y[f].source=i.suggestion,y),Ve.set(y[f]),h(1,y)},(f,i)=>{m?w.source===f.source?(h(0,m=!1),Ve.set({source:"",alternatives:[]}),Ue.set("sentences")):Ve.set(f):(h(0,m=!0),Ve.set(f),Ue.set("suggestions"))}]}class vr extends Me{constructor(k){super(),Be(this,k,wr,br,Te,{})}}function kr(p){let k,h,t,r,w,m,y,g,d,f;return{c(){k=$("header"),h=$("div"),t=$("div"),t.innerHTML="<h2>Cephalo</h2>",r=ae(),w=$("div"),m=$("button"),m.textContent="export",y=ae(),g=$("button"),g.textContent="menu",J(t,"id","appbar-title"),J(t,"class","svelte-19d0nfv"),J(m,"id","export-button"),J(g,"id","menu-button"),J(w,"id","appbar-menu-buttons"),J(w,"class","svelte-19d0nfv"),J(h,"id","appbar-inner-wrapper"),J(h,"class","svelte-19d0nfv"),J(k,"id","appbar"),J(k,"class","svelte-19d0nfv")},m(i,e){he(i,k,e),Z(k,h),Z(h,t),Z(h,r),Z(h,w),Z(w,m),Z(w,y),Z(w,g),d||(f=le(g,"click",p[1]),d=!0)},p:fe,i:fe,o:fe,d(i){i&&ce(k),d=!1,f()}}}function _r(p,k,h){let{openInstructions:t}=k;const r=()=>h(0,t=!t);return p.$$set=w=>{"openInstructions"in w&&h(0,t=w.openInstructions)},[t,r]}class Sr extends Me{constructor(k){super(),Be(this,k,_r,kr,Te,{openInstructions:0})}}function $n(p,{delay:k=0,duration:h=400,easing:t=An}={}){const r=+getComputedStyle(p).opacity;return{delay:k,duration:h,easing:t,css:w=>`opacity: ${w*r}`}}function Qn(p){let k,h,t,r,w;return{c(){k=$("div"),J(k,"id","overlay"),J(k,"class","svelte-1qmnxsr")},m(m,y){he(m,k,y),t=!0,r||(w=le(k,"click",p[2]),r=!0)},p:fe,i(m){t||(m&&Re(()=>{t&&(h||(h=Pn(k,$n,{duration:300},!0)),h.run(1))}),t=!0)},o(m){m&&(h||(h=Pn(k,$n,{duration:300},!1)),h.run(0)),t=!1},d(m){m&&ce(k),m&&h&&h.end(),r=!1,w()}}}function zr(p){let k,h,t,r,w,m,y,g,d=p[0]&&Qn(p);return{c(){k=$("nav"),h=$("button"),h.textContent="x",t=ae(),r=$("div"),r.innerHTML='<h4 class="svelte-1qmnxsr">Instructions</h4> <p class="svelte-1qmnxsr">Do the task.</p>',w=ae(),d&&d.c(),m=ot(),J(h,"id","exit-button"),J(h,"class","svelte-1qmnxsr"),J(r,"id","instructions-text"),J(k,"class","svelte-1qmnxsr"),De(k,"openInstructions",p[0])},m(f,i){he(f,k,i),Z(k,h),Z(k,t),Z(k,r),he(f,w,i),d&&d.m(f,i),he(f,m,i),y||(g=le(h,"click",p[1]),y=!0)},p(f,[i]){i&1&&De(k,"openInstructions",f[0]),f[0]?d?(d.p(f,i),i&1&&pe(d,1)):(d=Qn(f),d.c(),pe(d,1),d.m(m.parentNode,m)):d&&(rn(),ye(d,1,1,()=>{d=null}),sn())},i(f){pe(d)},o(f){ye(d)},d(f){f&&(ce(k),ce(w),ce(m)),d&&d.d(f),y=!1,g()}}}function Ar(p,k,h){let{openInstructions:t}=k;const r=()=>h(0,t=!1),w=()=>h(0,t=!1);return p.$$set=m=>{"openInstructions"in m&&h(0,t=m.openInstructions)},[t,r,w]}class Dr extends Me{constructor(k){super(),Be(this,k,Ar,zr,Te,{openInstructions:0})}}function Ir(p){let k,h,t;function r(m){p[10](m)}let w={};return p[1]!==void 0&&(w.content=p[1]),k=new Gt({props:w}),Le.push(()=>fn(k,"content",r)),{c(){Oe(k.$$.fragment)},m(m,y){Ee(k,m,y),t=!0},p(m,y){const g={};!h&&y&2&&(h=!0,g.content=m[1],hn(()=>h=!1)),k.$set(g)},i(m){t||(pe(k.$$.fragment,m),t=!0)},o(m){ye(k.$$.fragment,m),t=!1},d(m){Ne(k,m)}}}function Er(p){let k,h;return k=new vr({}),{c(){Oe(k.$$.fragment)},m(t,r){Ee(k,t,r),h=!0},p:fe,i(t){h||(pe(k.$$.fragment,t),h=!0)},o(t){ye(k.$$.fragment,t),h=!1},d(t){Ne(k,t)}}}function Nr(p){let k,h,t,r,w,m,y,g,d,f,i,e,n=p[0]?"connected":"connect",u,c,o,a,l,b,s,v=p[2]?"edit mode":"analysis mode",E,_,z,T,A,S,D,N;function P(I){p[7](I)}let B={};p[3]!==void 0&&(B.openInstructions=p[3]),k=new Sr({props:B}),Le.push(()=>fn(k,"openInstructions",P));function H(I){p[8](I)}let R={};p[3]!==void 0&&(R.openInstructions=p[3]),r=new Dr({props:R}),Le.push(()=>fn(r,"openInstructions",H));const Y=[Er,Ir],C=[];function M(I,O){return I[2]?0:1}return a=M(p),l=C[a]=Y[a](p),A=new Jt({}),{c(){Oe(k.$$.fragment),t=ae(),Oe(r.$$.fragment),m=ae(),y=$("main"),g=$("div"),d=$("div"),f=$("input"),i=ae(),e=$("button"),u=we(n),c=ae(),o=$("div"),l.c(),b=ae(),s=$("div"),E=we(v),_=ae(),z=$("div"),T=$("div"),Oe(A.$$.fragment),J(f,"type","url"),J(f,"placeholder","ngrok tunnel"),J(s,"id","scores-label"),J(s,"class","svelte-lcri78"),J(o,"class","editor-area svelte-lcri78"),J(d,"class","column svelte-lcri78"),J(T,"class","table-area svelte-lcri78"),J(z,"class","column svelte-lcri78"),J(g,"class","body-container svelte-lcri78")},m(I,O){Ee(k,I,O),he(I,t,O),Ee(r,I,O),he(I,m,O),he(I,y,O),Z(y,g),Z(g,d),Z(d,f),en(f,p[4]),Z(d,i),Z(d,e),Z(e,u),Z(d,c),Z(d,o),C[a].m(o,null),Z(o,b),Z(o,s),Z(s,E),Z(g,_),Z(g,z),Z(z,T),Ee(A,T,null),S=!0,D||(N=[le(f,"input",p[9]),le(e,"click",p[5]),le(s,"click",p[11])],D=!0)},p(I,[O]){const W={};!h&&O&8&&(h=!0,W.openInstructions=I[3],hn(()=>h=!1)),k.$set(W);const K={};!w&&O&8&&(w=!0,K.openInstructions=I[3],hn(()=>w=!1)),r.$set(K),O&16&&f.value!==I[4]&&en(f,I[4]),(!S||O&1)&&n!==(n=I[0]?"connected":"connect")&&xe(u,n);let L=a;a=M(I),a===L?C[a].p(I,O):(rn(),ye(C[L],1,1,()=>{C[L]=null}),sn(),l=C[a],l?l.p(I,O):(l=C[a]=Y[a](I),l.c()),pe(l,1),l.m(o,b)),(!S||O&4)&&v!==(v=I[2]?"edit mode":"analysis mode")&&xe(E,v)},i(I){S||(pe(k.$$.fragment,I),pe(r.$$.fragment,I),pe(l),pe(A.$$.fragment,I),S=!0)},o(I){ye(k.$$.fragment,I),ye(r.$$.fragment,I),ye(l),ye(A.$$.fragment,I),S=!1},d(I){I&&(ce(t),ce(m),ce(y)),Ne(k,I),Ne(r,I),C[a].d(),Ne(A),D=!1,ve(N)}}}function Tr(p,k,h){let t,r;_e(p,Sn,o=>h(12,t=o)),_e(p,kn,o=>h(4,r=o));let w=!1;async function m(){h(0,w=!0),await fetch(r,{method:"get",headers:new Headers({"ngrok-skip-browser-warning":"69420"})}).then(o=>o.json()).then(o=>console.log(o)).catch(o=>h(0,w=!1))}let y={text:"",html:""},g=!1,d=!1;function f(){let o=new URL("tokenize/"+y.text,r);console.log(o),fetch(o,{method:"get",headers:new Headers({"ngrok-skip-browser-warning":"69420"})}).then(a=>a.json()).then(a=>{console.log(a),Ke(Sn,t=a.sentences,t)})}function i(o){d=o,h(3,d)}function e(o){d=o,h(3,d)}function n(){r=this.value,kn.set(r)}function u(o){y=o,h(1,y)}return[w,y,g,d,r,m,f,i,e,n,u,o=>{f(),h(2,g=!g)}]}class Pr extends Me{constructor(k){super(),Be(this,k,Tr,Nr,Te,{})}}new Pr({target:document.getElementById("app")});
