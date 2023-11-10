var Ln=Object.defineProperty;var Gn=(n,e,i)=>e in n?Ln(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var oe=(n,e,i)=>(Gn(n,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();function E(){}const Rn=n=>n;function he(n,e){for(const i in e)n[i]=e[i];return n}function En(n){return n()}function qe(){return Object.create(null)}function q(n){n.forEach(En)}function Ee(n){return typeof n=="function"}function Y(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Yn(n){return Object.keys(n).length===0}function je(n,...e){if(n==null){for(const s of e)s(void 0);return E}const i=n.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i}function J(n){let e;return je(n,i=>e=i)(),e}function K(n,e,i){n.$$.on_destroy.push(je(e,i))}function Ze(n){const e={};for(const i in n)i[0]!=="$"&&(e[i]=n[i]);return e}function X(n){return n??""}function R(n,e,i){return n.set(i),e}function Fn(n){return n&&Ee(n.destroy)?n.destroy:E}const Mn=typeof window<"u";let Vn=Mn?()=>window.performance.now():()=>Date.now(),Pn=Mn?n=>requestAnimationFrame(n):E;const me=new Set;function Cn(n){me.forEach(e=>{e.c(n)||(me.delete(e),e.f())}),me.size!==0&&Pn(Cn)}function Un(n){let e;return me.size===0&&Pn(Cn),{promise:new Promise(i=>{me.add(e={c:n,f:i})}),abort(){me.delete(e)}}}function p(n,e){n.appendChild(e)}function I(n,e,i){n.insertBefore(e,i||null)}function z(n){n.parentNode&&n.parentNode.removeChild(n)}function se(n,e){for(let i=0;i<n.length;i+=1)n[i]&&n[i].d(e)}function w(n){return document.createElement(n)}function Bn(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function G(n){return document.createTextNode(n)}function T(){return G(" ")}function Wn(){return G("")}function B(n,e,i,s){return n.addEventListener(e,i,s),()=>n.removeEventListener(e,i,s)}function qn(n){return function(e){return e.preventDefault(),n.call(this,e)}}function On(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function g(n,e,i){i==null?n.removeAttribute(e):n.getAttribute(e)!==i&&n.setAttribute(e,i)}function Zn(n){return Array.from(n.childNodes)}function re(n,e){e=""+e,n.data!==e&&(n.data=e)}function Ke(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function ye(n,e){n.value=e??""}function ee(n,e,i,s){i==null?n.style.removeProperty(e):n.style.setProperty(e,i,s?"important":"")}function we(n,e,i){for(let s=0;s<n.options.length;s+=1){const r=n.options[s];if(r.__value===e){r.selected=!0;return}}(!i||e!==void 0)&&(n.selectedIndex=-1)}function He(n){const e=n.querySelector(":checked");return e&&e.__value}function $e(n,e,i){n.classList.toggle(e,!!i)}function $n(n,e,{bubbles:i=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:i,cancelable:s})}class xn{constructor(e=!1){oe(this,"is_svg",!1);oe(this,"e");oe(this,"n");oe(this,"t");oe(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,i,s=null){this.e||(this.is_svg?this.e=Bn(i.nodeName):this.e=w(i.nodeType===11?"TEMPLATE":i.nodeName),this.t=i.tagName!=="TEMPLATE"?i:i.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let i=0;i<this.n.length;i+=1)I(this.t,this.n[i],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(z)}}let De;function Se(n){De=n}function Jn(){if(!De)throw new Error("Function called outside component initialization");return De}function Qn(){const n=Jn();return(e,i,{cancelable:s=!1}={})=>{const r=n.$$.callbacks[e];if(r){const t=$n(e,i,{cancelable:s});return r.slice().forEach(a=>{a.call(n,t)}),!t.defaultPrevented}return!0}}const fe=[],Te=[];let ge=[];const Be=[],Xn=Promise.resolve();let We=!1;function ei(){We||(We=!0,Xn.then(jn))}function be(n){ge.push(n)}function Le(n){Be.push(n)}const Pe=new Set;let de=0;function jn(){if(de!==0)return;const n=De;do{try{for(;de<fe.length;){const e=fe[de];de++,Se(e),ni(e.$$)}}catch(e){throw fe.length=0,de=0,e}for(Se(null),fe.length=0,de=0;Te.length;)Te.pop()();for(let e=0;e<ge.length;e+=1){const i=ge[e];Pe.has(i)||(Pe.add(i),i())}ge.length=0}while(fe.length);for(;Be.length;)Be.pop()();We=!1,Pe.clear(),Se(n)}function ni(n){if(n.fragment!==null){n.update(),q(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(be)}}function ii(n){const e=[],i=[];ge.forEach(s=>n.indexOf(s)===-1?e.push(s):i.push(s)),i.forEach(s=>s()),ge=e}const Ae=new Set;let ce;function te(){ce={r:0,c:[],p:ce}}function ae(){ce.r||q(ce.c),ce=ce.p}function D(n,e){n&&n.i&&(Ae.delete(n),n.i(e))}function A(n,e,i,s){if(n&&n.o){if(Ae.has(n))return;Ae.add(n),ce.c.push(()=>{Ae.delete(n),s&&(i&&n.d(1),s())}),n.o(e)}else s&&s()}function L(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ge(n,e){const i={},s={},r={$$scope:1};let t=n.length;for(;t--;){const a=n[t],l=e[t];if(l){for(const d in a)d in l||(s[d]=1);for(const d in l)r[d]||(i[d]=l[d],r[d]=1);n[t]=l}else for(const d in a)r[d]=1}for(const a in s)a in i||(i[a]=void 0);return i}function Re(n){return typeof n=="object"&&n!==null?n:{}}function Ye(n,e,i){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=i,i(n.$$.ctx[s]))}function H(n){n&&n.c()}function x(n,e,i){const{fragment:s,after_update:r}=n.$$;s&&s.m(e,i),be(()=>{const t=n.$$.on_mount.map(En).filter(Ee);n.$$.on_destroy?n.$$.on_destroy.push(...t):q(t),n.$$.on_mount=[]}),r.forEach(be)}function j(n,e){const i=n.$$;i.fragment!==null&&(ii(i.after_update),q(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function si(n,e){n.$$.dirty[0]===-1&&(fe.push(n),ei(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function V(n,e,i,s,r,t,a=null,l=[-1]){const d=De;Se(n);const o=n.$$={fragment:null,ctx:[],props:t,update:E,not_equal:r,bound:qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:qe(),dirty:l,skip_bound:!1,root:e.target||d.$$.root};a&&a(o.root);let u=!1;if(o.ctx=i?i(n,e.props||{},(f,h,...c)=>{const m=c.length?c[0]:h;return o.ctx&&r(o.ctx[f],o.ctx[f]=m)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](m),u&&si(n,f)),h}):[],o.update(),u=!0,q(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){const f=Zn(e.target);o.fragment&&o.fragment.l(f),f.forEach(z)}else o.fragment&&o.fragment.c();e.intro&&D(n.$$.fragment),x(n,e.target,e.anchor),jn()}Se(d)}class U{constructor(){oe(this,"$$");oe(this,"$$set")}$destroy(){j(this,1),this.$destroy=E}$on(e,i){if(!Ee(i))return E;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(i),()=>{const r=s.indexOf(i);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Yn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ri="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ri);const ue=[];function ti(n,e){return{subscribe:ne(n,e).subscribe}}function ne(n,e=E){let i;const s=new Set;function r(l){if(Y(n,l)&&(n=l,i)){const d=!ue.length;for(const o of s)o[1](),ue.push(o,n);if(d){for(let o=0;o<ue.length;o+=2)ue[o][0](ue[o+1]);ue.length=0}}}function t(l){r(l(n))}function a(l,d=E){const o=[l,d];return s.add(o),s.size===1&&(i=e(r,t)||E),l(n),()=>{s.delete(o),s.size===0&&i&&(i(),i=null)}}return{set:r,update:t,subscribe:a}}function Fe(n,e,i){const s=!Array.isArray(n),r=s?[n]:n;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const t=e.length<2;return ti(i,(a,l)=>{let d=!1;const o=[];let u=0,f=E;const h=()=>{if(u)return;f();const m=e(s?o[0]:o,a,l);t?a(m):f=Ee(m)?m:E},c=r.map((m,k)=>je(m,y=>{o[k]=y,u&=~(1<<k),d&&h()},()=>{u|=1<<k}));return d=!0,h(),function(){q(c),f(),d=!1}})}const Ce=[{src:"To reduce the symptoms of asthma: Use prescribed inhalers regularly and avoid known triggers such as allergens and air pollution.",display_src:"To reduce the symptoms of asthma: Use prescribed inhalers regularly and avoid known triggers such as allergens and air pollution.",ref:"Um die Asthmasymptome zu lindern: Verwenden Sie regelmäßig verschriebene Inhalatoren und vermeiden Sie bekannte Auslöser wie Allergene und Luftverschmutzung.",show_ref:!1},{src:"To reduce the symptoms of gastroesophageal reflux disease (GERD): Elevate the head of your bed, avoid lying down after meals, and limit consumption of spicy, acidic, and fatty foods.",display_src:"To reduce the symptoms of gastroesophageal reflux disease (GERD): Elevate the head of your bed, avoid lying down after meals, and limit consumption of spicy, acidic, and fatty foods.",ref:"Um die Symptome der gastroösophagealen Refluxkrankheit (GERD) zu lindern: Heben Sie das Kopfende Ihres Bettes an, vermeiden Sie es, sich nach den Mahlzeiten hinzulegen, und beschränken Sie den Verzehr scharfer, saurer und fetthaltiger Speisen.",show_ref:!1},{src:"To reduce the symptoms of congestive heart failure: Follow a low-sodium diet, maintain a healthy weight, and take prescribed medications as directed.",display_src:"To reduce the symptoms of congestive heart failure: Follow a low-sodium diet, maintain a healthy weight, and take prescribed medications as directed.",ref:"Um die Symptome einer Herzinsuffizienz zu lindern: Befolgen Sie eine natriumarme Diät, halten Sie ein gesundes Gewicht und nehmen Sie die verschriebenen Medikamente wie angegeben ein.",show_ref:!1},{src:"To reduce the symptoms of diabetes: Monitor blood sugar levels regularly, maintain a balanced diet, and engage in regular physical activity.",display_src:"To reduce the symptoms of diabetes: Monitor blood sugar levels regularly, maintain a balanced diet, and engage in regular physical activity.",ref:"Um die Symptome von Diabetes zu lindern: Überwachen Sie regelmäßig den Blutzuckerspiegel, achten Sie auf eine ausgewogene Ernährung und treiben Sie regelmäßig Sport.",show_ref:!1},{src:"To reduce the symptoms of irritable bowel syndrome (IBS): Incorporate stress management techniques, avoid trigger foods, and seek medical advice for a tailored treatment plan.",display_src:"To reduce the symptoms of irritable bowel syndrome (IBS): Incorporate stress management techniques, avoid trigger foods, and seek medical advice for a tailored treatment plan.",ref:"Um die Symptome des Reizdarmsyndroms (IBS) zu lindern: Integrieren Sie Techniken zur Stressbewältigung, vermeiden Sie auslösende Nahrungsmittel und suchen Sie ärztlichen Rat für einen maßgeschneiderten Behandlungsplan.",show_ref:!1},{src:"To reduce the symptoms of arthritis: Engage in low-impact exercises, apply heat or cold therapy, and maintain a healthy weight to reduce joint stress.",display_src:"To reduce the symptoms of arthritis: Engage in low-impact exercises, apply heat or cold therapy, and maintain a healthy weight to reduce joint stress.",ref:"Um die Symptome von Arthritis zu lindern: Machen Sie sanfte Übungen, wenden Sie eine Wärme- oder Kältetherapie an und halten Sie ein gesundes Gewicht, um die Belastung der Gelenke zu reduzieren.",show_ref:!1},{src:"To reduce the symptoms of chronic obstructive pulmonary disease (COPD): Quit smoking, utilize prescribed medications, and participate in pulmonary rehabilitation programs.",display_src:"To reduce the symptoms of chronic obstructive pulmonary disease (COPD): Quit smoking, utilize prescribed medications, and participate in pulmonary rehabilitation programs.",ref:"Um die Symptome einer chronisch obstruktiven Lungenerkrankung (COPD) zu lindern: Hören Sie mit dem Rauchen auf, nehmen Sie verschriebene Medikamente ein und nehmen Sie an Lungenrehabilitationsprogrammen teil.",show_ref:!1},{src:"To reduce the symptoms of migraine headaches: Identify and avoid triggers, maintain a regular sleep schedule, and take prescribed medications as directed.",display_src:"To reduce the symptoms of migraine headaches: Identify and avoid triggers, maintain a regular sleep schedule, and take prescribed medications as directed.",ref:"Um die Symptome von Migränekopfschmerzen zu lindern: Identifizieren und vermeiden Sie Auslöser, halten Sie einen regelmäßigen Schlafplan ein und nehmen Sie verschriebene Medikamente wie angegeben ein.",show_ref:!1},{src:"To reduce the symptoms of anemia: Consume a diet rich in iron and vitamins, take prescribed supplements, and discuss possible underlying causes with your healthcare provider.",display_src:"To reduce the symptoms of anemia: Consume a diet rich in iron and vitamins, take prescribed supplements, and discuss possible underlying causes with your healthcare provider.",ref:"Um die Symptome einer Anämie zu lindern: Nehmen Sie eine eisen- und vitaminreiche Ernährung zu sich, nehmen Sie verschriebene Nahrungsergänzungsmittel ein und besprechen Sie mögliche zugrunde liegende Ursachen mit Ihrem Arzt.",show_ref:!1},{src:"To reduce the symptoms of urinary tract infections (UTIs): Drink plenty of water, avoid irritants such as caffeine and alcohol, and take prescribed antibiotics as directed.",display_src:"To reduce the symptoms of urinary tract infections (UTIs): Drink plenty of water, avoid irritants such as caffeine and alcohol, and take prescribed antibiotics as directed.",ref:"Um die Symptome von Harnwegsinfektionen (HWI) zu lindern: Trinken Sie viel Wasser, vermeiden Sie Reizstoffe wie Koffein und Alkohol und nehmen Sie verschriebene Antibiotika wie verordnet ein.",show_ref:!1},{src:"When you go home, please make sure to: ",display_src:"When you go home, please make sure to: ",ref:"Wenn Sie nach Hause gehen, achten Sie bitte darauf:",show_ref:!1},{src:"Slowly increase your exercise. Do not push yourself too hard.",display_src:"Slowly increase your exercise. Do not push yourself too hard.",ref:"Steigern Sie Ihr Training langsam. Überfordern Sie sich nicht zu sehr.",show_ref:!1},{src:"Change positions slowly",display_src:"Change positions slowly",ref:"Wechseln Sie langsam die Position",show_ref:!1},{src:"Elevate your legs to help reduce swelling and increase blood flow.",display_src:"Elevate your legs to help reduce swelling and increase blood flow.",ref:"Legen Sie Ihre Beine hoch, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your arms to help reduce swelling and increase blood flow.",display_src:"Elevate your arms to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Arme hoch, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your feet to help reduce swelling and increase blood flow.",display_src:"Elevate your feet to help reduce swelling and increase blood flow.",ref:"Lagern Sie Ihre Füße hoch, um Schwellungen zu reduzieren und die Durchblutung zu steigern.",show_ref:!1},{src:"Elevate your hands to help reduce swelling and increase blood flow.",display_src:"Elevate your hands to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Hände hoch, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your ankles to help reduce swelling and increase blood flow.",display_src:"Elevate your ankles to help reduce swelling and increase blood flow.",ref:"Legen Sie Ihre Knöchel hoch, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your wrists to help reduce swelling and increase blood flow.",display_src:"Elevate your wrists to help reduce swelling and increase blood flow.",ref:"Legen Sie Ihre Handgelenke hoch, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your fingers to help reduce swelling and increase blood flow.",display_src:"Elevate your fingers to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Finger an, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your toes to help reduce swelling and increase blood flow.",display_src:"Elevate your toes to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Zehen an, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your knees to help reduce swelling and increase blood flow.",display_src:"Elevate your knees to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Knie an, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Elevate your elbows to help reduce swelling and increase blood flow.",display_src:"Elevate your elbows to help reduce swelling and increase blood flow.",ref:"Heben Sie Ihre Ellenbogen an, um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Stay hydrated",display_src:"Stay hydrated",ref:"Trinke genug",show_ref:!1},{src:"Gargle with warm salt water",display_src:"Gargle with warm salt water",ref:"Mit warmem Salzwasser gurgeln",show_ref:!1},{src:"Keep your wounds clean and dry.",display_src:"Keep your wounds clean and dry.",ref:"Halten Sie Ihre Wunden sauber und trocken.",show_ref:!1},{src:"Change the dressing daily",display_src:"Change the dressing daily",ref:"Wechseln Sie den Verband täglich",show_ref:!1},{src:"Apply antibiotic (Neosporin) ointment daily.",display_src:"Apply antibiotic (Neosporin) ointment daily.",ref:"Tragen Sie täglich eine Antibiotika-Salbe (Neosporin) auf.",show_ref:!1},{src:"Clean the wound with water and soap.",display_src:"Clean the wound with water and soap.",ref:"Reinigen Sie die Wunde mit Wasser und Seife.",show_ref:!1},{src:"Avoid rigorous scrubbing on the wound.",display_src:"Avoid rigorous scrubbing on the wound.",ref:"Vermeiden Sie starkes Schrubben der Wunde.",show_ref:!1},{src:"Watch for signs of infection such as fever, spreading redness or worsening pain",display_src:"Watch for signs of infection such as fever, spreading redness or worsening pain",ref:"Achten Sie auf Anzeichen einer Infektion wie Fieber, sich ausbreitende Rötung oder sich verschlimmernde Schmerzen",show_ref:!1},{src:"You can shower as usual, using soap and running water.",display_src:"You can shower as usual, using soap and running water.",ref:"Sie können wie gewohnt mit Seife und fließendem Wasser duschen.",show_ref:!1},{src:"Keep the gauze dressing on for 24 hours after surgery.",display_src:"Keep the gauze dressing on for 24 hours after surgery.",ref:"Behalten Sie den Mullverband nach der Operation 24 Stunden lang bei.",show_ref:!1},{src:"Keep the gauze dressing on for 48 hours following the procedure.",display_src:"Keep the gauze dressing on for 48 hours following the procedure.",ref:"Behalten Sie den Mullverband nach dem Eingriff 48 Stunden lang bei.",show_ref:!1},{src:"Keep the gauze dressing on for 72 hours to promote optimal healing.",display_src:"Keep the gauze dressing on for 72 hours to promote optimal healing.",ref:"Lassen Sie den Mullverband 72 Stunden lang an, um eine optimale Heilung zu fördern.",show_ref:!1},{src:"Keep the gauze dressing on for at least 5 days after the wound is closed.",display_src:"Keep the gauze dressing on for at least 5 days after the wound is closed.",ref:"Belassen Sie den Mullverband nach dem Wundverschluss mindestens 5 Tage lang.",show_ref:!1},{src:"Keep the gauze dressing on for a minimum of 3 days to maintain cleanliness.",display_src:"Keep the gauze dressing on for a minimum of 3 days to maintain cleanliness.",ref:"Lassen Sie den Mullverband mindestens 3 Tage lang an, um die Sauberkeit zu gewährleisten.",show_ref:!1},{src:"Keep the gauze dressing on for 36 hours to ensure proper protection.",display_src:"Keep the gauze dressing on for 36 hours to ensure proper protection.",ref:"Lassen Sie den Mullverband 36 Stunden lang an, um einen ausreichenden Schutz zu gewährleisten.",show_ref:!1},{src:"Keep the gauze dressing on for 12 hours after the initial bandage change.",display_src:"Keep the gauze dressing on for 12 hours after the initial bandage change.",ref:"Behalten Sie den Mullverband nach dem ersten Verbandwechsel 12 Stunden lang bei.",show_ref:!1},{src:"Keep the gauze dressing on for 2 days post-stitches removal.",display_src:"Keep the gauze dressing on for 2 days post-stitches removal.",ref:"Lassen Sie den Mullverband nach der Nahtentfernung zwei Tage lang an.",show_ref:!1},{src:"Keep the gauze dressing on for 96 hours to minimize the risk of infection.",display_src:"Keep the gauze dressing on for 96 hours to minimize the risk of infection.",ref:"Lassen Sie den Mullverband 96 Stunden lang angelegt, um das Infektionsrisiko zu minimieren.",show_ref:!1},{src:"Keep the gauze dressing on for 7 days to support the healing process.",display_src:"Keep the gauze dressing on for 7 days to support the healing process.",ref:"Lassen Sie den Mullverband 7 Tage lang an, um den Heilungsprozess zu unterstützen.",show_ref:!1},{src:"Use Acetaminophen for 500mg every 6 hours for pain relief and fever reduction.",display_src:"Use Acetaminophen for 500mg every 6 hours for pain relief and fever reduction.",ref:"Verwenden Sie zur Schmerzlinderung und Fiebersenkung alle 6 Stunden 500 mg Acetaminophen.",show_ref:!1},{src:"Use Ibuprofen for 200mg every 4 hours for inflammation and discomfort.",display_src:"Use Ibuprofen for 200mg every 4 hours for inflammation and discomfort.",ref:"Verwenden Sie bei Entzündungen und Beschwerden alle 4 Stunden 200 mg Ibuprofen.",show_ref:!1},{src:"Use Metoprolol for 25mg every 12 hours for blood pressure management.",display_src:"Use Metoprolol for 25mg every 12 hours for blood pressure management.",ref:"Verwenden Sie zur Blutdruckkontrolle alle 12 Stunden 25 mg Metoprolol.",show_ref:!1},{src:"Use Levofloxacin for 500mg every 24 hours for the treatment of bacterial infections.",display_src:"Use Levofloxacin for 500mg every 24 hours for the treatment of bacterial infections.",ref:"Verwenden Sie Levofloxacin in einer Dosierung von 500 mg alle 24 Stunden zur Behandlung bakterieller Infektionen.",show_ref:!1},{src:"Use Pantoprazole for 40mg every 24 hours for the reduction of stomach acid and heartburn.",display_src:"Use Pantoprazole for 40mg every 24 hours for the reduction of stomach acid and heartburn.",ref:"Verwenden Sie Pantoprazol alle 24 Stunden in einer Dosierung von 40 mg, um Magensäure und Sodbrennen zu reduzieren.",show_ref:!1},{src:"Use Sertraline for 50mg every 24 hours for anxiety and depression management.",display_src:"Use Sertraline for 50mg every 24 hours for anxiety and depression management.",ref:"Verwenden Sie Sertralin für 50 mg alle 24 Stunden zur Behandlung von Angstzuständen und Depressionen.",show_ref:!1},{src:"Use Metformin for 1000mg every 12 hours for blood sugar control in type 2 diabetes.",display_src:"Use Metformin for 1000mg every 12 hours for blood sugar control in type 2 diabetes.",ref:"Verwenden Sie Metformin für 1000 mg alle 12 Stunden zur Blutzuckerkontrolle bei Typ-2-Diabetes.",show_ref:!1},{src:"Use Lisinopril for 10mg every 24 hours for hypertension and heart failure prevention.",display_src:"Use Lisinopril for 10mg every 24 hours for hypertension and heart failure prevention.",ref:"Verwenden Sie Lisinopril alle 24 Stunden in einer Dosierung von 10 mg zur Vorbeugung von Bluthochdruck und Herzinsuffizienz.",show_ref:!1},{src:"Use Omeprazole for 20mg every 24 hours for the treatment of gastroesophageal reflux disease (GERD).",display_src:"Use Omeprazole for 20mg every 24 hours for the treatment of gastroesophageal reflux disease (GERD).",ref:"Verwenden Sie Omeprazol in einer Dosierung von 20 mg alle 24 Stunden zur Behandlung der gastroösophagealen Refluxkrankheit (GERD).",show_ref:!1},{src:"Use Hydrochlorothiazide for 25mg every 24 hours for water retention and high blood pressure reduction.",display_src:"Use Hydrochlorothiazide for 25mg every 24 hours for water retention and high blood pressure reduction.",ref:"Verwenden Sie Hydrochlorothiazid in einer Dosierung von 25 mg alle 24 Stunden zur Wassereinlagerung und Senkung des Bluthochdrucks.",show_ref:!1},{src:"Avoid skipping meals",display_src:"Avoid skipping meals",ref:"Vermeiden Sie es, Mahlzeiten auszulassen",show_ref:!1},{src:"Rest",display_src:"Rest",ref:"Ausruhen",show_ref:!1},{src:"Avoid strenuous activities.",display_src:"Avoid strenuous activities.",ref:"Vermeiden Sie anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least 48 hours.",display_src:"Avoid strenuous activities for at least 48 hours.",ref:"Vermeiden Sie anstrengende Aktivitäten für mindestens 48 Stunden.",show_ref:!1},{src:"Avoid strenuous activities for at least 72 hours.",display_src:"Avoid strenuous activities for at least 72 hours.",ref:"Vermeiden Sie anstrengende Aktivitäten für mindestens 72 Stunden.",show_ref:!1},{src:"Avoid strenuous activities for at least one week.",display_src:"Avoid strenuous activities for at least one week.",ref:"Vermeiden Sie mindestens eine Woche lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least two weeks.",display_src:"Avoid strenuous activities for at least two weeks.",ref:"Vermeiden Sie mindestens zwei Wochen lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least three weeks.",display_src:"Avoid strenuous activities for at least three weeks.",ref:"Vermeiden Sie mindestens drei Wochen lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least one month.",display_src:"Avoid strenuous activities for at least one month.",ref:"Vermeiden Sie mindestens einen Monat lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least six weeks.",display_src:"Avoid strenuous activities for at least six weeks.",ref:"Vermeiden Sie mindestens sechs Wochen lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least two months.",display_src:"Avoid strenuous activities for at least two months.",ref:"Vermeiden Sie mindestens zwei Monate lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least three months.",display_src:"Avoid strenuous activities for at least three months.",ref:"Vermeiden Sie mindestens drei Monate lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least four months.",display_src:"Avoid strenuous activities for at least four months.",ref:"Vermeiden Sie mindestens vier Monate lang anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities until you feel better.",display_src:"Avoid strenuous activities until you feel better.",ref:"Vermeiden Sie anstrengende Aktivitäten, bis Sie sich besser fühlen.",show_ref:!1},{src:"Avoid cognitively and visually stimulating activities such as loud music, TV, bright lights, etc.",display_src:"Avoid cognitively and visually stimulating activities such as loud music, TV, bright lights, etc.",ref:"Vermeiden Sie kognitiv und visuell anregende Aktivitäten wie laute Musik, Fernsehen, helles Licht usw.",show_ref:!1},{src:"Do not lift anything over 5 pounds for 2 weeks.",display_src:"Do not lift anything over 5 pounds for 2 weeks.",ref:"Heben Sie 2 Wochen lang nichts über 5 Pfund.",show_ref:!1},{src:"Do not lift anything over 10 pounds for 4 weeks.",display_src:"Do not lift anything over 10 pounds for 4 weeks.",ref:"Heben Sie 4 Wochen lang nichts über 10 Pfund.",show_ref:!1},{src:"Do not lift anything over 15 pounds for 6 weeks.",display_src:"Do not lift anything over 15 pounds for 6 weeks.",ref:"Heben Sie 6 Wochen lang nichts über 15 Pfund.",show_ref:!1},{src:"Do not lift anything over 20 pounds for 8 weeks.",display_src:"Do not lift anything over 20 pounds for 8 weeks.",ref:"Heben Sie 8 Wochen lang nichts über 20 Pfund.",show_ref:!1},{src:"Do not lift anything over 25 pounds for 10 weeks.",display_src:"Do not lift anything over 25 pounds for 10 weeks.",ref:"Heben Sie 10 Wochen lang nichts über 25 Pfund.",show_ref:!1},{src:"Do not lift anything over 30 pounds for 12 weeks.",display_src:"Do not lift anything over 30 pounds for 12 weeks.",ref:"Heben Sie 12 Wochen lang nichts über 30 Pfund.",show_ref:!1},{src:"Do not lift anything over 35 pounds for 14 weeks.",display_src:"Do not lift anything over 35 pounds for 14 weeks.",ref:"Heben Sie 14 Wochen lang nichts über 35 Pfund.",show_ref:!1},{src:"Do not lift anything over 40 pounds for 16 weeks.",display_src:"Do not lift anything over 40 pounds for 16 weeks.",ref:"Heben Sie 16 Wochen lang nichts über 40 Pfund.",show_ref:!1},{src:"Do not lift anything over 45 pounds for 18 weeks.",display_src:"Do not lift anything over 45 pounds for 18 weeks.",ref:"Heben Sie 18 Wochen lang nichts über 45 Pfund.",show_ref:!1},{src:"Do not lift anything over 50 pounds for 20 weeks.",display_src:"Do not lift anything over 50 pounds for 20 weeks.",ref:"Heben Sie 20 Wochen lang nichts über 50 Pfund.",show_ref:!1},{src:"Avoid aspirin.",display_src:"Avoid aspirin.",ref:"Vermeiden Sie Aspirin.",show_ref:!1},{src:"Avoid ibuprofen.",display_src:"Avoid ibuprofen.",ref:"Vermeiden Sie Ibuprofen.",show_ref:!1},{src:"Avoid naproxen.",display_src:"Avoid naproxen.",ref:"Vermeiden Sie Naproxen.",show_ref:!1},{src:"Avoid acetaminophen.",display_src:"Avoid acetaminophen.",ref:"Vermeiden Sie Paracetamol.",show_ref:!1},{src:"Avoid amoxicillin.",display_src:"Avoid amoxicillin.",ref:"Vermeiden Sie Amoxicillin.",show_ref:!1},{src:"Avoid metformin.",display_src:"Avoid metformin.",ref:"Vermeiden Sie Metformin.",show_ref:!1},{src:"Avoid lisinopril.",display_src:"Avoid lisinopril.",ref:"Vermeiden Sie Lisinopril.",show_ref:!1},{src:"Avoid simvastatin.",display_src:"Avoid simvastatin.",ref:"Vermeiden Sie Simvastatin.",show_ref:!1},{src:"Avoid omeprazole.",display_src:"Avoid omeprazole.",ref:"Vermeiden Sie Omeprazol.",show_ref:!1},{src:"Avoid hydrochlorothiazide.",display_src:"Avoid hydrochlorothiazide.",ref:"Vermeiden Sie Hydrochlorothiazid.",show_ref:!1},{src:"Reduce your use of alcohol and illicit drugs.",display_src:"Reduce your use of alcohol and illicit drugs.",ref:"Reduzieren Sie den Konsum von Alkohol und illegalen Drogen.",show_ref:!1},{src:"Do not use aspirin.",display_src:"Do not use aspirin.",ref:"Verwenden Sie kein Aspirin.",show_ref:!1},{src:"Do not use ibuprofen.",display_src:"Do not use ibuprofen.",ref:"Verwenden Sie kein Ibuprofen.",show_ref:!1},{src:"Do not use naproxen.",display_src:"Do not use naproxen.",ref:"Verwenden Sie kein Naproxen.",show_ref:!1},{src:"Do not use acetaminophen.",display_src:"Do not use acetaminophen.",ref:"Verwenden Sie kein Paracetamol.",show_ref:!1},{src:"Do not use amoxicillin.",display_src:"Do not use amoxicillin.",ref:"Verwenden Sie kein Amoxicillin.",show_ref:!1},{src:"Do not use hydrocodone.",display_src:"Do not use hydrocodone.",ref:"Verwenden Sie kein Hydrocodon.",show_ref:!1},{src:"Do not use prednisone.",display_src:"Do not use prednisone.",ref:"Verwenden Sie kein Prednison.",show_ref:!1},{src:"Do not use metformin.",display_src:"Do not use metformin.",ref:"Verwenden Sie kein Metformin.",show_ref:!1},{src:"Do not use lisinopril.",display_src:"Do not use lisinopril.",ref:"Verwenden Sie kein Lisinopril.",show_ref:!1},{src:"Do not use warfarin.",display_src:"Do not use warfarin.",ref:"Verwenden Sie kein Warfarin.",show_ref:!1},{src:"Check your blood pressure regularly.",display_src:"Check your blood pressure regularly.",ref:"Überprüfen Sie regelmäßig Ihren Blutdruck.",show_ref:!1},{src:"Check your heart rate regularly.",display_src:"Check your heart rate regularly.",ref:"Überprüfen Sie regelmäßig Ihre Herzfrequenz.",show_ref:!1},{src:"Check your blood sugar levels regularly.",display_src:"Check your blood sugar levels regularly.",ref:"Überprüfen Sie regelmäßig Ihren Blutzuckerspiegel.",show_ref:!1},{src:"Check your body temperature regularly.",display_src:"Check your body temperature regularly.",ref:"Überprüfen Sie regelmäßig Ihre Körpertemperatur.",show_ref:!1},{src:"Check your breathing rate regularly.",display_src:"Check your breathing rate regularly.",ref:"Überprüfen Sie regelmäßig Ihre Atemfrequenz.",show_ref:!1},{src:"Check your pain levels regularly.",display_src:"Check your pain levels regularly.",ref:"Überprüfen Sie regelmäßig Ihr Schmerzniveau.",show_ref:!1},{src:"Check your swelling regularly.",display_src:"Check your swelling regularly.",ref:"Überprüfen Sie regelmäßig Ihre Schwellung.",show_ref:!1},{src:"Check your wound healing regularly.",display_src:"Check your wound healing regularly.",ref:"Überprüfen Sie regelmäßig Ihre Wundheilung.",show_ref:!1},{src:"Check your bowel movements regularly.",display_src:"Check your bowel movements regularly.",ref:"Kontrollieren Sie regelmäßig Ihren Stuhlgang.",show_ref:!1},{src:"Check your skin color and texture regularly.",display_src:"Check your skin color and texture regularly.",ref:"Überprüfen Sie regelmäßig Ihre Hautfarbe und -beschaffenheit.",show_ref:!1},{src:"Check your blood pressure every morning and evening.",display_src:"Check your blood pressure every morning and evening.",ref:"Überprüfen Sie jeden Morgen und Abend Ihren Blutdruck.",show_ref:!1},{src:"Check your blood sugar levels every four hours.",display_src:"Check your blood sugar levels every four hours.",ref:"Überprüfen Sie alle vier Stunden Ihren Blutzuckerspiegel.",show_ref:!1},{src:"Check your temperature every six hours.",display_src:"Check your temperature every six hours.",ref:"Überprüfen Sie alle sechs Stunden Ihre Temperatur.",show_ref:!1},{src:"Check your pulse rate every two hours.",display_src:"Check your pulse rate every two hours.",ref:"Überprüfen Sie alle zwei Stunden Ihren Puls.",show_ref:!1},{src:"Check your oxygen saturation every three hours.",display_src:"Check your oxygen saturation every three hours.",ref:"Überprüfen Sie alle drei Stunden Ihre Sauerstoffsättigung.",show_ref:!1},{src:"Check your incision site for signs of infection every day.",display_src:"Check your incision site for signs of infection every day.",ref:"Überprüfen Sie Ihre Einschnittstelle täglich auf Anzeichen einer Infektion.",show_ref:!1},{src:"Check your weight every morning.",display_src:"Check your weight every morning.",ref:"Überprüfen Sie jeden Morgen Ihr Gewicht.",show_ref:!1},{src:"Check your swelling every four hours.",display_src:"Check your swelling every four hours.",ref:"Überprüfen Sie alle vier Stunden Ihre Schwellung.",show_ref:!1},{src:"Check your medication side effects every day.",display_src:"Check your medication side effects every day.",ref:"Überprüfen Sie täglich die Nebenwirkungen Ihrer Medikamente.",show_ref:!1},{src:"Check your breathing rate every hour.",display_src:"Check your breathing rate every hour.",ref:"Überprüfen Sie stündlich Ihre Atemfrequenz.",show_ref:!1},{src:"Eat regularly to avoid low blood sugar",display_src:"Eat regularly to avoid low blood sugar",ref:"Essen Sie regelmäßig, um einen niedrigen Blutzuckerspiegel zu vermeiden",show_ref:!1},{src:"You are not allowed to drive until you have been cleared by neurology. We have filed a report with the DMV.",display_src:"You are not allowed to drive until you have been cleared by neurology. We have filed a report with the DMV.",ref:"Bis zur neurologischen Genehmigung dürfen Sie nicht Auto fahren. Wir haben eine Anzeige beim DMV eingereicht.",show_ref:!1},{src:"Do not put yourself in a situation where loss of consciousness will cause you severe harm.",display_src:"Do not put yourself in a situation where loss of consciousness will cause you severe harm.",ref:"Bringen Sie sich nicht in eine Situation, in der ein Bewusstseinsverlust zu schweren Schäden führen kann.",show_ref:!1},{src:"You were seen in the emergency department for chest pain.",display_src:"You were seen in the emergency department for chest pain.",ref:"Sie wurden wegen Brustschmerzen in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for shortness of breath.",display_src:"You were seen in the emergency department for shortness of breath.",ref:"Sie wurden wegen Atemnot in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for severe headache.",display_src:"You were seen in the emergency department for severe headache.",ref:"Sie wurden wegen starker Kopfschmerzen in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for abdominal pain.",display_src:"You were seen in the emergency department for abdominal pain.",ref:"Sie wurden wegen Bauchschmerzen in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for dizziness and fainting.",display_src:"You were seen in the emergency department for dizziness and fainting.",ref:"Sie wurden wegen Schwindelgefühlen und Ohnmachtsanfällen in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for a high fever and chills.",display_src:"You were seen in the emergency department for a high fever and chills.",ref:"Sie wurden wegen hohem Fieber und Schüttelfrost in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for persistent vomiting and diarrhea.",display_src:"You were seen in the emergency department for persistent vomiting and diarrhea.",ref:"Sie wurden wegen anhaltendem Erbrechen und Durchfall in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for uncontrolled bleeding from a wound.",display_src:"You were seen in the emergency department for uncontrolled bleeding from a wound.",ref:"Sie wurden wegen unkontrollierter Blutung aus einer Wunde in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for severe allergic reaction with facial swelling and difficulty breathing.",display_src:"You were seen in the emergency department for severe allergic reaction with facial swelling and difficulty breathing.",ref:"Sie wurden wegen einer schweren allergischen Reaktion mit Gesichtsschwellung und Atembeschwerden in die Notaufnahme gebracht.",show_ref:!1},{src:"You were seen in the emergency department for sudden onset of weakness in the limbs and difficulty speaking.",display_src:"You were seen in the emergency department for sudden onset of weakness in the limbs and difficulty speaking.",ref:"Sie wurden wegen plötzlich auftretender Schwäche in den Gliedmaßen und Schwierigkeiten beim Sprechen in die Notaufnahme gebracht.",show_ref:!1},{src:"You were admitted to the hospital for severe chest pain.",display_src:"You were admitted to the hospital for severe chest pain.",ref:"Sie wurden wegen starker Brustschmerzen ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for high fever and difficulty breathing.",display_src:"You were admitted to the hospital for high fever and difficulty breathing.",ref:"Sie wurden wegen hohem Fieber und Atembeschwerden ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for uncontrolled vomiting and diarrhea.",display_src:"You were admitted to the hospital for uncontrolled vomiting and diarrhea.",ref:"Sie wurden wegen unkontrolliertem Erbrechen und Durchfall ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for sudden onset of severe headache and blurred vision.",display_src:"You were admitted to the hospital for sudden onset of severe headache and blurred vision.",ref:"Sie wurden wegen plötzlich auftretender starker Kopfschmerzen und verschwommener Sicht ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for persistent abdominal pain and distension.",display_src:"You were admitted to the hospital for persistent abdominal pain and distension.",ref:"Sie wurden wegen anhaltender Bauchschmerzen und Blähungen ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for weakness and numbness in your limbs.",display_src:"You were admitted to the hospital for weakness and numbness in your limbs.",ref:"Sie wurden wegen Schwäche und Taubheitsgefühl in Ihren Gliedmaßen ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for sudden and unexplained weight loss and fatigue.",display_src:"You were admitted to the hospital for sudden and unexplained weight loss and fatigue.",ref:"Sie wurden wegen plötzlichem und unerklärlichem Gewichtsverlust und Müdigkeit ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for an allergic reaction causing facial swelling and difficulty swallowing.",display_src:"You were admitted to the hospital for an allergic reaction causing facial swelling and difficulty swallowing.",ref:"Sie wurden wegen einer allergischen Reaktion, die zu Schwellungen im Gesicht und Schluckbeschwerden führte, ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for severe dehydration and electrolyte imbalance.",display_src:"You were admitted to the hospital for severe dehydration and electrolyte imbalance.",ref:"Sie wurden wegen schwerer Dehydrierung und Elektrolytstörungen ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital for an uncontrolled seizure episode.",display_src:"You were admitted to the hospital for an uncontrolled seizure episode.",ref:"Sie wurden wegen einer unkontrollierten Anfallsepisode ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were admitted to the hospital.",display_src:"You were admitted to the hospital.",ref:"Sie wurden ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were evaluated by the Downtown Urgent Care Clinic.",display_src:"You were evaluated by the Downtown Urgent Care Clinic.",ref:"Sie wurden von der Downtown Urgent Care Clinic untersucht.",show_ref:!1},{src:"You were evaluated by the Springfield Cardiology Center.",display_src:"You were evaluated by the Springfield Cardiology Center.",ref:"Sie wurden vom Springfield Cardiology Center untersucht.",show_ref:!1},{src:"You were evaluated by the Northside Gastroenterology Clinic.",display_src:"You were evaluated by the Northside Gastroenterology Clinic.",ref:"Sie wurden von der Northside Gastroenterology Clinic untersucht.",show_ref:!1},{src:"You were evaluated by the West End Orthopedic Specialists.",display_src:"You were evaluated by the West End Orthopedic Specialists.",ref:"Sie wurden von den West End Orthopaedic Specialists untersucht.",show_ref:!1},{src:"You were evaluated by the Eastside Neurology Institute.",display_src:"You were evaluated by the Eastside Neurology Institute.",ref:"Sie wurden vom Eastside Neurology Institute untersucht.",show_ref:!1},{src:"You were evaluated by the Central Pulmonology and Allergy Clinic.",display_src:"You were evaluated by the Central Pulmonology and Allergy Clinic.",ref:"Sie wurden von der Zentralen Pneumologie- und Allergieklinik untersucht.",show_ref:!1},{src:"You were evaluated by the Riverfront Women's Health Center.",display_src:"You were evaluated by the Riverfront Women's Health Center.",ref:"Sie wurden vom Riverfront Women&#39;s Health Center untersucht.",show_ref:!1},{src:"You were evaluated by the Lakeside Pediatric Associates.",display_src:"You were evaluated by the Lakeside Pediatric Associates.",ref:"Sie wurden von den Lakeside Pediatric Associates untersucht.",show_ref:!1},{src:"You were evaluated by the Greenfield Mental Health Clinic.",display_src:"You were evaluated by the Greenfield Mental Health Clinic.",ref:"Sie wurden von der Greenfield Mental Health Clinic untersucht.",show_ref:!1},{src:"You were evaluated by the Hillside Endocrinology and Diabetes Center.",display_src:"You were evaluated by the Hillside Endocrinology and Diabetes Center.",ref:"Sie wurden vom Hillside Endocrinology and Diabetes Center untersucht.",show_ref:!1},{src:"Contact the Billing Office at (555) 123-4567.",display_src:"Contact the Billing Office at (555) 123-4567.",ref:"Kontaktieren Sie das Rechnungsbüro unter (555) 123-4567.",show_ref:!1},{src:"Contact the Medical Records Department at (555) 987-6543.",display_src:"Contact the Medical Records Department at (555) 987-6543.",ref:"Kontaktieren Sie die Abteilung für Krankenakten unter (555) 987-6543.",show_ref:!1},{src:"Contact the Pharmacy Office at (555) 111-2233.",display_src:"Contact the Pharmacy Office at (555) 111-2233.",ref:"Kontaktieren Sie das Apothekenbüro unter (555) 111-2233.",show_ref:!1},{src:"Contact the Patient Care Coordination Office at (555) 444-5678.",display_src:"Contact the Patient Care Coordination Office at (555) 444-5678.",ref:"Kontaktieren Sie das Patient Care Coordination Office unter (555) 444-5678.",show_ref:!1},{src:"Contact the Rehabilitation Services Department at (555) 789-0123.",display_src:"Contact the Rehabilitation Services Department at (555) 789-0123.",ref:"Kontaktieren Sie die Abteilung für Rehabilitationsdienste unter (555) 789-0123.",show_ref:!1},{src:"Contact the Nutrition and Dietetics Office at (555) 233-4455.",display_src:"Contact the Nutrition and Dietetics Office at (555) 233-4455.",ref:"Kontaktieren Sie das Büro für Ernährung und Diätetik unter (555) 233-4455.",show_ref:!1},{src:"Contact the Mental Health Services Department at (555) 666-7777.",display_src:"Contact the Mental Health Services Department at (555) 666-7777.",ref:"Kontaktieren Sie die Abteilung für psychische Gesundheit unter (555) 666-7777.",show_ref:!1},{src:"Contact the Outpatient Scheduling Office at (555) 321-6549.",display_src:"Contact the Outpatient Scheduling Office at (555) 321-6549.",ref:"Kontaktieren Sie das Ambulanzplanungsbüro unter (555) 321-6549.",show_ref:!1},{src:"Contact the Social Work Services Office at (555) 888-9999.",display_src:"Contact the Social Work Services Office at (555) 888-9999.",ref:"Kontaktieren Sie das Büro für Sozialarbeit unter (555) 888-9999.",show_ref:!1},{src:"Contact the Home Health Care Department at (555) 555-4321.",display_src:"Contact the Home Health Care Department at (555) 555-4321.",ref:"Kontaktieren Sie das Home Health Care Department unter (555) 555-4321.",show_ref:!1},{src:"If you have questions, please contact the Patient Care Coordination Office.",display_src:"If you have questions, please contact the Patient Care Coordination Office.",ref:"Bei Fragen wenden Sie sich bitte an die Koordinationsstelle Patientenversorgung.",show_ref:!1},{src:"If you have questions, please contact the Hospital Discharge Planning Office.",display_src:"If you have questions, please contact the Hospital Discharge Planning Office.",ref:"Bei Fragen wenden Sie sich bitte an die Entlassungsplanung des Krankenhauses.",show_ref:!1},{src:"If you have questions, please contact the Medical Records Office.",display_src:"If you have questions, please contact the Medical Records Office.",ref:"Bei Fragen wenden Sie sich bitte an das Medical Records Office.",show_ref:!1},{src:"If you have questions, please contact the Nursing Administration Office.",display_src:"If you have questions, please contact the Nursing Administration Office.",ref:"Bei Fragen wenden Sie sich bitte an das Pflegesekretariat.",show_ref:!1},{src:"If you have questions, please contact the Medication Management Office.",display_src:"If you have questions, please contact the Medication Management Office.",ref:"Bei Fragen wenden Sie sich bitte an die Arzneimittelverwaltung.",show_ref:!1},{src:"If you have questions, please contact the Patient Billing and Insurance Office.",display_src:"If you have questions, please contact the Patient Billing and Insurance Office.",ref:"Bei Fragen wenden Sie sich bitte an die Patientenabrechnungs- und Versicherungsstelle.",show_ref:!1},{src:"If you have questions, please contact the Outpatient Rehabilitation Office.",display_src:"If you have questions, please contact the Outpatient Rehabilitation Office.",ref:"Bei Fragen wenden Sie sich bitte an die ambulante Rehabilitationsstelle.",show_ref:!1},{src:"If you have questions, please contact the Social Work and Counseling Office.",display_src:"If you have questions, please contact the Social Work and Counseling Office.",ref:"Bei Fragen wenden Sie sich bitte an die Sozialarbeits- und Beratungsstelle.",show_ref:!1},{src:"If you have questions, please contact the Nutritional Services Office.",display_src:"If you have questions, please contact the Nutritional Services Office.",ref:"Bei Fragen wenden Sie sich bitte an die Ernährungsberatung.",show_ref:!1},{src:"If you have questions, please contact the Patient and Family Support Office.",display_src:"If you have questions, please contact the Patient and Family Support Office.",ref:"Bei Fragen wenden Sie sich bitte an die Patienten- und Familienberatung.",show_ref:!1},{src:"The ED is available 24 hours a day, 7 days a week.",display_src:"The ED is available 24 hours a day, 7 days a week.",ref:"Die Notaufnahme ist 24 Stunden am Tag, 7 Tage die Woche erreichbar.",show_ref:!1},{src:"Based on your symptoms and test results, you have pneumonia.",display_src:"Based on your symptoms and test results, you have pneumonia.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie eine Lungenentzündung.",show_ref:!1},{src:"Based on your symptoms and test results, you have type 2 diabetes.",display_src:"Based on your symptoms and test results, you have type 2 diabetes.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie Typ-2-Diabetes.",show_ref:!1},{src:"Based on your symptoms and test results, you have congestive heart failure.",display_src:"Based on your symptoms and test results, you have congestive heart failure.",ref:"Basierend auf Ihren Symptomen und Testergebnissen liegt bei Ihnen eine Herzinsuffizienz vor.",show_ref:!1},{src:"Based on your symptoms and test results, you have gastroesophageal reflux disease (GERD).",display_src:"Based on your symptoms and test results, you have gastroesophageal reflux disease (GERD).",ref:"Basierend auf Ihren Symptomen und Testergebnissen leiden Sie an einer gastroösophagealen Refluxkrankheit (GERD).",show_ref:!1},{src:"Based on your symptoms and test results, you have chronic obstructive pulmonary disease (COPD).",display_src:"Based on your symptoms and test results, you have chronic obstructive pulmonary disease (COPD).",ref:"Aufgrund Ihrer Symptome und Testergebnisse leiden Sie an einer chronisch obstruktiven Lungenerkrankung (COPD).",show_ref:!1},{src:"Based on your symptoms and test results, you have irritable bowel syndrome (IBS).",display_src:"Based on your symptoms and test results, you have irritable bowel syndrome (IBS).",ref:"Basierend auf Ihren Symptomen und Testergebnissen haben Sie ein Reizdarmsyndrom (IBS).",show_ref:!1},{src:"Based on your symptoms and test results, you have hypothyroidism.",display_src:"Based on your symptoms and test results, you have hypothyroidism.",ref:"Basierend auf Ihren Symptomen und Testergebnissen liegt bei Ihnen eine Hypothyreose vor.",show_ref:!1},{src:"Based on your symptoms and test results, you have rheumatoid arthritis.",display_src:"Based on your symptoms and test results, you have rheumatoid arthritis.",ref:"Aufgrund Ihrer Symptome und Testergebnisse leiden Sie an rheumatoider Arthritis.",show_ref:!1},{src:"Based on your symptoms and test results, you have anemia.",display_src:"Based on your symptoms and test results, you have anemia.",ref:"Basierend auf Ihren Symptomen und Testergebnissen liegt bei Ihnen eine Anämie vor.",show_ref:!1},{src:"Based on your symptoms and test results, you have kidney stones.",display_src:"Based on your symptoms and test results, you have kidney stones.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie Nierensteine.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have pneumonia.",display_src:"Based on your symptoms and test results, you do NOT have pneumonia.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie KEINE Lungenentzündung.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have diabetes.",display_src:"Based on your symptoms and test results, you do NOT have diabetes.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie KEINEN Diabetes.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a urinary tract infection.",display_src:"Based on your symptoms and test results, you do NOT have a urinary tract infection.",ref:"Aufgrund Ihrer Symptome und Testergebnisse liegt bei Ihnen KEINE Harnwegsinfektion vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a heart attack.",display_src:"Based on your symptoms and test results, you do NOT have a heart attack.",ref:"Aufgrund Ihrer Symptome und Testergebnisse haben Sie KEINEN Herzinfarkt.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a stroke.",display_src:"Based on your symptoms and test results, you do NOT have a stroke.",ref:"Aufgrund Ihrer Symptome und Testergebnisse liegt bei Ihnen KEIN Schlaganfall vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have appendicitis.",display_src:"Based on your symptoms and test results, you do NOT have appendicitis.",ref:"Basierend auf Ihren Symptomen und Testergebnissen liegt bei Ihnen KEINE Blinddarmentzündung vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a concussion.",display_src:"Based on your symptoms and test results, you do NOT have a concussion.",ref:"Aufgrund Ihrer Symptome und Testergebnisse liegt bei Ihnen KEINE Gehirnerschütterung vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a kidney infection.",display_src:"Based on your symptoms and test results, you do NOT have a kidney infection.",ref:"Aufgrund Ihrer Symptome und Testergebnisse liegt bei Ihnen KEINE Niereninfektion vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have anemia.",display_src:"Based on your symptoms and test results, you do NOT have anemia.",ref:"Basierend auf Ihren Symptomen und Testergebnissen liegt bei Ihnen KEINE Anämie vor.",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have a pulmonary embolism.",display_src:"Based on your symptoms and test results, you do NOT have a pulmonary embolism.",ref:"Aufgrund Ihrer Symptome und Testergebnisse liegt bei Ihnen KEINE Lungenembolie vor.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have pneumonia.",display_src:"Based on your symptoms and test results, we think you may have pneumonia.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer Lungenentzündung leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have congestive heart failure.",display_src:"Based on your symptoms and test results, we think you may have congestive heart failure.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer Herzinsuffizienz leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have Type 2 diabetes.",display_src:"Based on your symptoms and test results, we think you may have Type 2 diabetes.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise Typ-2-Diabetes haben.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have a urinary tract infection.",display_src:"Based on your symptoms and test results, we think you may have a urinary tract infection.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer Harnwegsinfektion leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have anemia.",display_src:"Based on your symptoms and test results, we think you may have anemia.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an Anämie leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have gastroesophageal reflux disease (GERD).",display_src:"Based on your symptoms and test results, we think you may have gastroesophageal reflux disease (GERD).",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer gastroösophagealen Refluxkrankheit (GERD) leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have hypothyroidism.",display_src:"Based on your symptoms and test results, we think you may have hypothyroidism.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer Schilddrüsenunterfunktion leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have rheumatoid arthritis.",display_src:"Based on your symptoms and test results, we think you may have rheumatoid arthritis.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an rheumatoider Arthritis leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have chronic kidney disease.",display_src:"Based on your symptoms and test results, we think you may have chronic kidney disease.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass Sie möglicherweise an einer chronischen Nierenerkrankung leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have a pulmonary embolism.",display_src:"Based on your symptoms and test results, we think you may have a pulmonary embolism.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir davon aus, dass bei Ihnen möglicherweise eine Lungenembolie vorliegt.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have pneumonia.",display_src:"Based on your symptoms and test results, we do NOT think you have pneumonia.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an einer Lungenentzündung leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have diabetes.",display_src:"Based on your symptoms and test results, we do NOT think you have diabetes.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Diabetes leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have chronic obstructive pulmonary disease (COPD).",display_src:"Based on your symptoms and test results, we do NOT think you have chronic obstructive pulmonary disease (COPD).",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an einer chronisch obstruktiven Lungenerkrankung (COPD) leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have congestive heart failure.",display_src:"Based on your symptoms and test results, we do NOT think you have congestive heart failure.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Herzinsuffizienz leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have kidney failure.",display_src:"Based on your symptoms and test results, we do NOT think you have kidney failure.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Nierenversagen leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have Lyme disease.",display_src:"Based on your symptoms and test results, we do NOT think you have Lyme disease.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Lyme-Borreliose leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have irritable bowel syndrome (IBS).",display_src:"Based on your symptoms and test results, we do NOT think you have irritable bowel syndrome (IBS).",ref:"Basierend auf Ihren Symptomen und Testergebnissen gehen wir NICHT davon aus, dass Sie an einem Reizdarmsyndrom (IBS) leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have multiple sclerosis (MS).",display_src:"Based on your symptoms and test results, we do NOT think you have multiple sclerosis (MS).",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Multipler Sklerose (MS) leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have rheumatoid arthritis.",display_src:"Based on your symptoms and test results, we do NOT think you have rheumatoid arthritis.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an rheumatoider Arthritis leiden.",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have sleep apnea.",display_src:"Based on your symptoms and test results, we do NOT think you have sleep apnea.",ref:"Aufgrund Ihrer Symptome und Testergebnisse gehen wir NICHT davon aus, dass Sie an Schlafapnoe leiden.",show_ref:!1},{src:"You have a history of hypertension, which puts you at increased risk of heart disease.",display_src:"You have a history of hypertension, which puts you at increased risk of heart disease.",ref:"Sie haben eine Vorgeschichte von Bluthochdruck, wodurch Sie einem erhöhten Risiko für Herzerkrankungen ausgesetzt sind.",show_ref:!1},{src:"You have a history of diabetes, which puts you at increased risk of kidney damage.",display_src:"You have a history of diabetes, which puts you at increased risk of kidney damage.",ref:"Sie leiden an Diabetes und haben daher ein erhöhtes Risiko für Nierenschäden.",show_ref:!1},{src:"You have a history of high cholesterol, which puts you at increased risk of atherosclerosis.",display_src:"You have a history of high cholesterol, which puts you at increased risk of atherosclerosis.",ref:"Sie haben in der Vergangenheit einen hohen Cholesterinspiegel, wodurch Sie einem erhöhten Risiko für Arteriosklerose ausgesetzt sind.",show_ref:!1},{src:"You have a history of obesity, which puts you at increased risk of sleep apnea.",display_src:"You have a history of obesity, which puts you at increased risk of sleep apnea.",ref:"Sie leiden unter Fettleibigkeit und haben daher ein erhöhtes Risiko für Schlafapnoe.",show_ref:!1},{src:"You have a history of smoking, which puts you at increased risk of lung cancer.",display_src:"You have a history of smoking, which puts you at increased risk of lung cancer.",ref:"Sie haben in der Vergangenheit geraucht, wodurch Ihr Lungenkrebsrisiko erhöht ist.",show_ref:!1},{src:"You have a history of alcohol abuse, which puts you at increased risk of liver cirrhosis.",display_src:"You have a history of alcohol abuse, which puts you at increased risk of liver cirrhosis.",ref:"Sie haben in der Vergangenheit Alkoholmissbrauch, wodurch Sie einem erhöhten Risiko für eine Leberzirrhose ausgesetzt sind.",show_ref:!1},{src:"You have a history of asthma, which puts you at increased risk of respiratory infections.",display_src:"You have a history of asthma, which puts you at increased risk of respiratory infections.",ref:"Sie leiden unter Asthma und haben daher ein erhöhtes Risiko für Atemwegsinfektionen.",show_ref:!1},{src:"You have a history of osteoporosis, which puts you at increased risk of bone fractures.",display_src:"You have a history of osteoporosis, which puts you at increased risk of bone fractures.",ref:"Sie leiden an Osteoporose und haben daher ein erhöhtes Risiko für Knochenbrüche.",show_ref:!1},{src:"You have a history of rheumatoid arthritis, which puts you at increased risk of joint deformity.",display_src:"You have a history of rheumatoid arthritis, which puts you at increased risk of joint deformity.",ref:"Sie haben eine Vorgeschichte von rheumatoider Arthritis, wodurch Sie einem erhöhten Risiko für Gelenkdeformitäten ausgesetzt sind.",show_ref:!1},{src:"You have a history of depression, which puts you at increased risk of anxiety disorders.",display_src:"You have a history of depression, which puts you at increased risk of anxiety disorders.",ref:"Sie haben eine Vorgeschichte von Depressionen, wodurch Sie einem erhöhten Risiko für Angststörungen ausgesetzt sind.",show_ref:!1},{src:"We think your persistent headache is from not taking your prescribed pain relievers.",display_src:"We think your persistent headache is from not taking your prescribed pain relievers.",ref:"Wir gehen davon aus, dass Ihre anhaltenden Kopfschmerzen darauf zurückzuführen sind, dass Sie Ihre verschriebenen Schmerzmittel nicht eingenommen haben.",show_ref:!1},{src:"We think your difficulty in breathing is from not taking your asthma inhaler.",display_src:"We think your difficulty in breathing is from not taking your asthma inhaler.",ref:"Wir gehen davon aus, dass Ihre Atembeschwerden darauf zurückzuführen sind, dass Sie Ihren Asthmainhalator nicht einnehmen.",show_ref:!1},{src:"We think your high blood pressure is from not taking your antihypertensive medication.",display_src:"We think your high blood pressure is from not taking your antihypertensive medication.",ref:"Wir gehen davon aus, dass Ihr hoher Blutdruck darauf zurückzuführen ist, dass Sie Ihre blutdrucksenkenden Medikamente nicht eingenommen haben.",show_ref:!1},{src:"We think your elevated blood sugar levels are from not taking your diabetes medication.",display_src:"We think your elevated blood sugar levels are from not taking your diabetes medication.",ref:"Wir gehen davon aus, dass Ihr erhöhter Blutzuckerspiegel darauf zurückzuführen ist, dass Sie Ihre Diabetes-Medikamente nicht eingenommen haben.",show_ref:!1},{src:"We think your recurring chest pain is from not taking your angina medication.",display_src:"We think your recurring chest pain is from not taking your angina medication.",ref:"Wir gehen davon aus, dass Ihre wiederkehrenden Brustschmerzen darauf zurückzuführen sind, dass Sie Ihre Angina-Medikamente nicht eingenommen haben.",show_ref:!1},{src:"We think your uncontrolled seizures are from not taking your anticonvulsant medication.",display_src:"We think your uncontrolled seizures are from not taking your anticonvulsant medication.",ref:"Wir gehen davon aus, dass Ihre unkontrollierten Anfälle darauf zurückzuführen sind, dass Sie Ihre krampflösenden Medikamente nicht eingenommen haben.",show_ref:!1},{src:"We think your constant fatigue is from not taking your iron supplements.",display_src:"We think your constant fatigue is from not taking your iron supplements.",ref:"Wir glauben, dass Ihre ständige Müdigkeit darauf zurückzuführen ist, dass Sie Ihre Eisenpräparate nicht einnehmen.",show_ref:!1},{src:"We think your worsening joint pain is from not taking your anti-inflammatory medication.",display_src:"We think your worsening joint pain is from not taking your anti-inflammatory medication.",ref:"Wir gehen davon aus, dass Ihre sich verschlimmernden Gelenkschmerzen darauf zurückzuführen sind, dass Sie Ihre entzündungshemmenden Medikamente nicht einnehmen.",show_ref:!1},{src:"We think your persistent cough is from not taking your prescribed cough syrup.",display_src:"We think your persistent cough is from not taking your prescribed cough syrup.",ref:"Wir gehen davon aus, dass Ihr anhaltender Husten darauf zurückzuführen ist, dass Sie Ihren verschriebenen Hustensaft nicht eingenommen haben.",show_ref:!1},{src:"We think your mood swings and anxiety are from not taking your antidepressant medication.",display_src:"We think your mood swings and anxiety are from not taking your antidepressant medication.",ref:"Wir glauben, dass Ihre Stimmungsschwankungen und Ängste darauf zurückzuführen sind, dass Sie Ihre Antidepressiva nicht eingenommen haben.",show_ref:!1},{src:"We think your persistent headache is from taking your blood pressure medication the wrong way.",display_src:"We think your persistent headache is from taking your blood pressure medication the wrong way.",ref:"Wir gehen davon aus, dass Ihre anhaltenden Kopfschmerzen auf die falsche Einnahme Ihrer Blutdruckmedikamente zurückzuführen sind.",show_ref:!1},{src:"We think your stomach upset is from taking your antibiotics the wrong way.",display_src:"We think your stomach upset is from taking your antibiotics the wrong way.",ref:"Wir gehen davon aus, dass Ihre Magenbeschwerden auf die falsche Einnahme Ihrer Antibiotika zurückzuführen sind.",show_ref:!1},{src:"We think your dizziness is from taking your anti-anxiety medication the wrong way.",display_src:"We think your dizziness is from taking your anti-anxiety medication the wrong way.",ref:"Wir gehen davon aus, dass Ihr Schwindel auf die falsche Einnahme Ihrer angstlösenden Medikamente zurückzuführen ist.",show_ref:!1},{src:"We think your excessive sleepiness is from taking your antidepressants the wrong way.",display_src:"We think your excessive sleepiness is from taking your antidepressants the wrong way.",ref:"Wir gehen davon aus, dass Ihre übermäßige Schläfrigkeit darauf zurückzuführen ist, dass Sie Ihre Antidepressiva falsch eingenommen haben.",show_ref:!1},{src:"We think your shortness of breath is from taking your asthma inhaler the wrong way.",display_src:"We think your shortness of breath is from taking your asthma inhaler the wrong way.",ref:"Wir gehen davon aus, dass Ihre Kurzatmigkeit darauf zurückzuführen ist, dass Sie Ihren Asthmainhalator falsch angewendet haben.",show_ref:!1},{src:"We think your skin rash is from taking your antihistamines the wrong way.",display_src:"We think your skin rash is from taking your antihistamines the wrong way.",ref:"Wir gehen davon aus, dass Ihr Hautausschlag auf die falsche Einnahme Ihrer Antihistaminika zurückzuführen ist.",show_ref:!1},{src:"We think your rapid heart rate is from taking your beta-blockers the wrong way.",display_src:"We think your rapid heart rate is from taking your beta-blockers the wrong way.",ref:"Wir glauben, dass Ihr schneller Herzschlag darauf zurückzuführen ist, dass Sie Ihre Betablocker falsch eingenommen haben.",show_ref:!1},{src:"We think your muscle cramps are from taking your calcium channel blockers the wrong way.",display_src:"We think your muscle cramps are from taking your calcium channel blockers the wrong way.",ref:"Wir glauben, dass Ihre Muskelkrämpfe auf die falsche Einnahme Ihrer Kalziumkanalblocker zurückzuführen sind.",show_ref:!1},{src:"We think your blurred vision is from taking your glaucoma eye drops the wrong way.",display_src:"We think your blurred vision is from taking your glaucoma eye drops the wrong way.",ref:"Wir gehen davon aus, dass Ihr verschwommenes Sehen darauf zurückzuführen ist, dass Sie Ihre Glaukom-Augentropfen falsch eingenommen haben.",show_ref:!1},{src:"We think your uncontrolled blood sugar levels are from taking your insulin injections the wrong way.",display_src:"We think your uncontrolled blood sugar levels are from taking your insulin injections the wrong way.",ref:"Wir gehen davon aus, dass Ihr unkontrollierter Blutzuckerspiegel darauf zurückzuführen ist, dass Sie Ihre Insulininjektionen falsch verabreicht haben.",show_ref:!1},{src:"We think your persistent cough is due to bronchitis.",display_src:"We think your persistent cough is due to bronchitis.",ref:"Wir gehen davon aus, dass Ihr anhaltender Husten auf eine Bronchitis zurückzuführen ist.",show_ref:!1},{src:"We think your sudden weight loss is due to hyperthyroidism.",display_src:"We think your sudden weight loss is due to hyperthyroidism.",ref:"Wir gehen davon aus, dass Ihr plötzlicher Gewichtsverlust auf eine Schilddrüsenüberfunktion zurückzuführen ist.",show_ref:!1},{src:"We think your severe headaches are due to migraines.",display_src:"We think your severe headaches are due to migraines.",ref:"Wir gehen davon aus, dass Ihre starken Kopfschmerzen auf Migräne zurückzuführen sind.",show_ref:!1},{src:"We think your shortness of breath is due to asthma.",display_src:"We think your shortness of breath is due to asthma.",ref:"Wir gehen davon aus, dass Ihre Atemnot auf Asthma zurückzuführen ist.",show_ref:!1},{src:"We think your joint pain is due to rheumatoid arthritis.",display_src:"We think your joint pain is due to rheumatoid arthritis.",ref:"Wir gehen davon aus, dass Ihre Gelenkschmerzen auf rheumatoide Arthritis zurückzuführen sind.",show_ref:!1},{src:"We think your constant fatigue is due to anemia.",display_src:"We think your constant fatigue is due to anemia.",ref:"Wir glauben, dass Ihre ständige Müdigkeit auf Anämie zurückzuführen ist.",show_ref:!1},{src:"We think your abdominal pain is due to irritable bowel syndrome.",display_src:"We think your abdominal pain is due to irritable bowel syndrome.",ref:"Wir gehen davon aus, dass Ihre Bauchschmerzen auf ein Reizdarmsyndrom zurückzuführen sind.",show_ref:!1},{src:"We think your frequent urination is due to diabetes.",display_src:"We think your frequent urination is due to diabetes.",ref:"Wir gehen davon aus, dass Ihr häufiges Wasserlassen auf Diabetes zurückzuführen ist.",show_ref:!1},{src:"We think your chest pain is due to angina.",display_src:"We think your chest pain is due to angina.",ref:"Wir glauben, dass Ihre Brustschmerzen auf Angina pectoris zurückzuführen sind.",show_ref:!1},{src:"We think your dizziness is due to vertigo.",display_src:"We think your dizziness is due to vertigo.",ref:"Wir gehen davon aus, dass Ihr Schwindel auf Schwindel zurückzuführen ist.",show_ref:!1},{src:"We think your persistent cough may be related to bronchitis.",display_src:"We think your persistent cough may be related to bronchitis.",ref:"Wir gehen davon aus, dass Ihr anhaltender Husten möglicherweise mit einer Bronchitis zusammenhängt.",show_ref:!1},{src:"We think your severe headache may be related to migraines.",display_src:"We think your severe headache may be related to migraines.",ref:"Wir gehen davon aus, dass Ihre starken Kopfschmerzen möglicherweise mit Migräne zusammenhängen.",show_ref:!1},{src:"We think your shortness of breath may be related to asthma.",display_src:"We think your shortness of breath may be related to asthma.",ref:"Wir gehen davon aus, dass Ihre Atemnot möglicherweise mit Asthma zusammenhängt.",show_ref:!1},{src:"We think your joint pain may be related to rheumatoid arthritis.",display_src:"We think your joint pain may be related to rheumatoid arthritis.",ref:"Wir gehen davon aus, dass Ihre Gelenkschmerzen möglicherweise mit rheumatoider Arthritis zusammenhängen.",show_ref:!1},{src:"We think your chest pain may be related to angina.",display_src:"We think your chest pain may be related to angina.",ref:"Wir gehen davon aus, dass Ihre Brustschmerzen möglicherweise mit Angina pectoris zusammenhängen.",show_ref:!1},{src:"We think your sudden weight loss may be related to hyperthyroidism.",display_src:"We think your sudden weight loss may be related to hyperthyroidism.",ref:"Wir gehen davon aus, dass Ihr plötzlicher Gewichtsverlust möglicherweise mit einer Schilddrüsenüberfunktion zusammenhängt.",show_ref:!1},{src:"We think your fatigue may be related to anemia.",display_src:"We think your fatigue may be related to anemia.",ref:"Wir glauben, dass Ihre Müdigkeit möglicherweise mit Anämie zusammenhängt.",show_ref:!1},{src:"We think your frequent urination may be related to diabetes.",display_src:"We think your frequent urination may be related to diabetes.",ref:"Wir glauben, dass Ihr häufiges Wasserlassen möglicherweise mit Diabetes zusammenhängt.",show_ref:!1},{src:"We think your unexplained bruising may be related to a blood clotting disorder.",display_src:"We think your unexplained bruising may be related to a blood clotting disorder.",ref:"Wir gehen davon aus, dass Ihre unerklärlichen Blutergüsse möglicherweise mit einer Blutgerinnungsstörung zusammenhängen.",show_ref:!1},{src:"We think your dizziness may be related to vertigo.",display_src:"We think your dizziness may be related to vertigo.",ref:"Wir glauben, dass Ihr Schwindel möglicherweise mit Schwindel zusammenhängt.",show_ref:!1},{src:"It is not clear what is causing your persistent headache.",display_src:"It is not clear what is causing your persistent headache.",ref:"Es ist nicht klar, was Ihre anhaltenden Kopfschmerzen verursacht.",show_ref:!1},{src:"It is not clear what is causing your sudden chest pain.",display_src:"It is not clear what is causing your sudden chest pain.",ref:"Es ist nicht klar, was Ihre plötzlichen Brustschmerzen verursacht.",show_ref:!1},{src:"It is not clear what is causing your unexplained weight loss.",display_src:"It is not clear what is causing your unexplained weight loss.",ref:"Es ist nicht klar, was die Ursache für Ihren unerklärlichen Gewichtsverlust ist.",show_ref:!1},{src:"It is not clear what is causing your recurring dizziness.",display_src:"It is not clear what is causing your recurring dizziness.",ref:"Es ist nicht klar, was die Ursache für Ihr wiederkehrendes Schwindelgefühl ist.",show_ref:!1},{src:"It is not clear what is causing your constant fatigue.",display_src:"It is not clear what is causing your constant fatigue.",ref:"Es ist nicht klar, was die Ursache für Ihre ständige Müdigkeit ist.",show_ref:!1},{src:"It is not clear what is causing your irregular heartbeat.",display_src:"It is not clear what is causing your irregular heartbeat.",ref:"Es ist nicht klar, was Ihren unregelmäßigen Herzschlag verursacht.",show_ref:!1},{src:"It is not clear what is causing your prolonged nausea.",display_src:"It is not clear what is causing your prolonged nausea.",ref:"Es ist nicht klar, was die Ursache für Ihre anhaltende Übelkeit ist.",show_ref:!1},{src:"It is not clear what is causing your shortness of breath.",display_src:"It is not clear what is causing your shortness of breath.",ref:"Es ist nicht klar, was Ihre Atemnot verursacht.",show_ref:!1},{src:"It is not clear what is causing your frequent night sweats.",display_src:"It is not clear what is causing your frequent night sweats.",ref:"Es ist nicht klar, was die Ursache für Ihr häufiges nächtliches Schwitzen ist.",show_ref:!1},{src:"It is not clear what is causing your unrelenting abdominal pain.",display_src:"It is not clear what is causing your unrelenting abdominal pain.",ref:"Es ist nicht klar, was die Ursache für Ihre anhaltenden Bauchschmerzen ist.",show_ref:!1},{src:"We think your dizziness is due to the blood pressure medication you have been prescribed.",display_src:"We think your dizziness is due to the blood pressure medication you have been prescribed.",ref:"Wir gehen davon aus, dass Ihr Schwindel auf die Medikamente zurückzuführen ist, die Ihnen verschrieben wurden.",show_ref:!1},{src:"We think your dry mouth is due to the antihistamines you've been taking for your allergies.",display_src:"We think your dry mouth is due to the antihistamines you've been taking for your allergies.",ref:"Wir vermuten, dass Ihr trockener Mund auf die Antihistaminika zurückzuführen ist, die Sie gegen Ihre Allergien eingenommen haben.",show_ref:!1},{src:"We think your upset stomach is due to the antibiotic treatment you have been receiving.",display_src:"We think your upset stomach is due to the antibiotic treatment you have been receiving.",ref:"Wir gehen davon aus, dass Ihre Magenbeschwerden auf die Antibiotika-Behandlung zurückzuführen sind, die Sie erhalten haben.",show_ref:!1},{src:"We think your headache is due to the pain medication you've been given during your hospital stay.",display_src:"We think your headache is due to the pain medication you've been given during your hospital stay.",ref:"Wir gehen davon aus, dass Ihre Kopfschmerzen auf die Schmerzmittel zurückzuführen sind, die Sie während Ihres Krankenhausaufenthalts erhalten haben.",show_ref:!1},{src:"We think your constipation is due to the iron supplements you've been taking for your anemia.",display_src:"We think your constipation is due to the iron supplements you've been taking for your anemia.",ref:"Wir gehen davon aus, dass Ihre Verstopfung auf die Eisenpräparate zurückzuführen ist, die Sie gegen Ihre Anämie eingenommen haben.",show_ref:!1},{src:"We think your increased heart rate is due to the bronchodilator inhaler you've been using for your asthma.",display_src:"We think your increased heart rate is due to the bronchodilator inhaler you've been using for your asthma.",ref:"Wir glauben, dass Ihre erhöhte Herzfrequenz auf den Bronchodilatator-Inhalator zurückzuführen ist, den Sie gegen Ihr Asthma verwendet haben.",show_ref:!1},{src:"We think your fatigue is due to the antidepressant medication you started taking recently.",display_src:"We think your fatigue is due to the antidepressant medication you started taking recently.",ref:"Wir glauben, dass Ihre Müdigkeit auf die Antidepressiva zurückzuführen ist, die Sie kürzlich eingenommen haben.",show_ref:!1},{src:"We think your weight gain is due to the corticosteroid treatment you have been receiving for your inflammation.",display_src:"We think your weight gain is due to the corticosteroid treatment you have been receiving for your inflammation.",ref:"Wir gehen davon aus, dass Ihre Gewichtszunahme auf die Behandlung mit Kortikosteroiden zurückzuführen ist, die Sie wegen Ihrer Entzündung erhalten haben.",show_ref:!1},{src:"We think your frequent urination is due to the diuretic medication you've been prescribed for your fluid retention.",display_src:"We think your frequent urination is due to the diuretic medication you've been prescribed for your fluid retention.",ref:"Wir gehen davon aus, dass Ihr häufiges Wasserlassen auf die harntreibenden Medikamente zurückzuführen ist, die Ihnen wegen Ihrer Flüssigkeitsansammlung verschrieben wurden.",show_ref:!1},{src:"We think your insomnia is due to the stimulant medication you've been taking for your attention deficit disorder.",display_src:"We think your insomnia is due to the stimulant medication you've been taking for your attention deficit disorder.",ref:"Wir glauben, dass Ihre Schlaflosigkeit auf die stimulierenden Medikamente zurückzuführen ist, die Sie gegen Ihr Aufmerksamkeitsdefizitsyndrom eingenommen haben.",show_ref:!1},{src:"Hypertension is not causing problems at this time.",display_src:"Hypertension is not causing problems at this time.",ref:"Bluthochdruck verursacht derzeit keine Probleme.",show_ref:!1},{src:"Diabetes is not causing problems at this time.",display_src:"Diabetes is not causing problems at this time.",ref:"Diabetes verursacht derzeit keine Probleme.",show_ref:!1},{src:"Asthma is not causing problems at this time.",display_src:"Asthma is not causing problems at this time.",ref:"Asthma verursacht derzeit keine Probleme.",show_ref:!1},{src:"Congestive heart failure is not causing problems at this time.",display_src:"Congestive heart failure is not causing problems at this time.",ref:"Herzinsuffizienz verursacht derzeit keine Probleme.",show_ref:!1},{src:"Chronic obstructive pulmonary disease is not causing problems at this time.",display_src:"Chronic obstructive pulmonary disease is not causing problems at this time.",ref:"Eine chronisch obstruktive Lungenerkrankung bereitet derzeit keine Probleme.",show_ref:!1},{src:"Anemia is not causing problems at this time.",display_src:"Anemia is not causing problems at this time.",ref:"Anämie verursacht derzeit keine Probleme.",show_ref:!1},{src:"Gastroesophageal reflux disease is not causing problems at this time.",display_src:"Gastroesophageal reflux disease is not causing problems at this time.",ref:"Die gastroösophageale Refluxkrankheit verursacht derzeit keine Probleme.",show_ref:!1},{src:"Sleep apnea is not causing problems at this time.",display_src:"Sleep apnea is not causing problems at this time.",ref:"Schlafapnoe verursacht derzeit keine Probleme.",show_ref:!1},{src:"Osteoarthritis is not causing problems at this time.",display_src:"Osteoarthritis is not causing problems at this time.",ref:"Arthrose verursacht derzeit keine Probleme.",show_ref:!1},{src:"Chronic kidney disease is not causing problems at this time.",display_src:"Chronic kidney disease is not causing problems at this time.",ref:"Eine chronische Nierenerkrankung bereitet derzeit keine Probleme.",show_ref:!1},{src:"Pneumonia causes persistent coughing and difficulty breathing.",display_src:"Pneumonia causes persistent coughing and difficulty breathing.",ref:"Eine Lungenentzündung verursacht anhaltenden Husten und Atembeschwerden.",show_ref:!1},{src:"Diabetes causes frequent urination and increased thirst.",display_src:"Diabetes causes frequent urination and increased thirst.",ref:"Diabetes führt zu häufigem Wasserlassen und erhöhtem Durst.",show_ref:!1},{src:"Asthma causes wheezing and shortness of breath.",display_src:"Asthma causes wheezing and shortness of breath.",ref:"Asthma verursacht pfeifende Atmung und Kurzatmigkeit.",show_ref:!1},{src:"Hypertension causes headaches and dizziness.",display_src:"Hypertension causes headaches and dizziness.",ref:"Bluthochdruck verursacht Kopfschmerzen und Schwindel.",show_ref:!1},{src:"Anemia causes fatigue and pale skin.",display_src:"Anemia causes fatigue and pale skin.",ref:"Anämie führt zu Müdigkeit und blasser Haut.",show_ref:!1},{src:"Gastroesophageal reflux disease (GERD) causes heartburn and chest pain.",display_src:"Gastroesophageal reflux disease (GERD) causes heartburn and chest pain.",ref:"Die gastroösophageale Refluxkrankheit (GERD) verursacht Sodbrennen und Brustschmerzen.",show_ref:!1},{src:"Heart failure causes swelling in the legs and shortness of breath.",display_src:"Heart failure causes swelling in the legs and shortness of breath.",ref:"Herzinsuffizienz führt zu Schwellungen in den Beinen und Atemnot.",show_ref:!1},{src:"Kidney stones cause severe pain in the lower back and blood in the urine.",display_src:"Kidney stones cause severe pain in the lower back and blood in the urine.",ref:"Nierensteine verursachen starke Schmerzen im unteren Rückenbereich und Blut im Urin.",show_ref:!1},{src:"Chronic obstructive pulmonary disease (COPD) causes chronic cough and frequent respiratory infections.",display_src:"Chronic obstructive pulmonary disease (COPD) causes chronic cough and frequent respiratory infections.",ref:"Die chronisch obstruktive Lungenerkrankung (COPD) verursacht chronischen Husten und häufige Infektionen der Atemwege.",show_ref:!1},{src:"Rheumatoid arthritis causes joint pain and stiffness.",display_src:"Rheumatoid arthritis causes joint pain and stiffness.",ref:"Rheumatoide Arthritis verursacht Gelenkschmerzen und Steifheit.",show_ref:!1},{src:"We think your dizziness is a side effect of Lisinopril.",display_src:"We think your dizziness is a side effect of Lisinopril.",ref:"Wir glauben, dass Ihr Schwindel eine Nebenwirkung von Lisinopril ist.",show_ref:!1},{src:"We think your constipation is a side effect of Omeprazole.",display_src:"We think your constipation is a side effect of Omeprazole.",ref:"Wir glauben, dass Ihre Verstopfung eine Nebenwirkung von Omeprazol ist.",show_ref:!1},{src:"We think your dry mouth is a side effect of Cetirizine.",display_src:"We think your dry mouth is a side effect of Cetirizine.",ref:"Wir glauben, dass Ihr trockener Mund eine Nebenwirkung von Cetirizin ist.",show_ref:!1},{src:"We think your nausea is a side effect of Metformin.",display_src:"We think your nausea is a side effect of Metformin.",ref:"Wir glauben, dass Ihre Übelkeit eine Nebenwirkung von Metformin ist.",show_ref:!1},{src:"We think your insomnia is a side effect of Prednisone.",display_src:"We think your insomnia is a side effect of Prednisone.",ref:"Wir glauben, dass Ihre Schlaflosigkeit eine Nebenwirkung von Prednison ist.",show_ref:!1},{src:"We think your headache is a side effect of Amlodipine.",display_src:"We think your headache is a side effect of Amlodipine.",ref:"Wir glauben, dass Ihre Kopfschmerzen eine Nebenwirkung von Amlodipin sind.",show_ref:!1},{src:"We think your fatigue is a side effect of Gabapentin.",display_src:"We think your fatigue is a side effect of Gabapentin.",ref:"Wir glauben, dass Ihre Müdigkeit eine Nebenwirkung von Gabapentin ist.",show_ref:!1},{src:"We think your weight gain is a side effect of Paxil.",display_src:"We think your weight gain is a side effect of Paxil.",ref:"Wir glauben, dass Ihre Gewichtszunahme eine Nebenwirkung von Paxil ist.",show_ref:!1},{src:"We think your decreased appetite is a side effect of Adderall.",display_src:"We think your decreased appetite is a side effect of Adderall.",ref:"Wir glauben, dass Ihr verminderter Appetit eine Nebenwirkung von Adderall ist.",show_ref:!1},{src:"We think your muscle pain is a side effect of Atorvastatin.",display_src:"We think your muscle pain is a side effect of Atorvastatin.",ref:"Wir gehen davon aus, dass Ihre Muskelschmerzen eine Nebenwirkung von Atorvastatin sind.",show_ref:!1},{src:"You have a history of hypertension.",display_src:"You have a history of hypertension.",ref:"Sie haben eine Vorgeschichte von Bluthochdruck.",show_ref:!1},{src:"You have a history of type 2 diabetes.",display_src:"You have a history of type 2 diabetes.",ref:"Sie haben eine Vorgeschichte von Typ-2-Diabetes.",show_ref:!1},{src:"You have a history of asthma.",display_src:"You have a history of asthma.",ref:"Sie haben eine Vorgeschichte von Asthma.",show_ref:!1},{src:"You have a history of congestive heart failure.",display_src:"You have a history of congestive heart failure.",ref:"Sie haben eine Vorgeschichte von Herzinsuffizienz.",show_ref:!1},{src:"You have a history of chronic kidney disease.",display_src:"You have a history of chronic kidney disease.",ref:"Sie haben in der Vergangenheit eine chronische Nierenerkrankung.",show_ref:!1},{src:"You have a history of deep vein thrombosis.",display_src:"You have a history of deep vein thrombosis.",ref:"Sie haben eine Vorgeschichte von tiefen Venenthrombosen.",show_ref:!1},{src:"You have a history of osteoarthritis.",display_src:"You have a history of osteoarthritis.",ref:"Sie haben eine Vorgeschichte von Arthrose.",show_ref:!1},{src:"You have a history of chronic obstructive pulmonary disease (COPD).",display_src:"You have a history of chronic obstructive pulmonary disease (COPD).",ref:"Sie leiden an einer chronisch obstruktiven Lungenerkrankung (COPD).",show_ref:!1},{src:"You have a history of coronary artery disease.",display_src:"You have a history of coronary artery disease.",ref:"Sie haben eine Vorgeschichte einer koronaren Herzkrankheit.",show_ref:!1},{src:"You have a history of anemia.",display_src:"You have a history of anemia.",ref:"Sie haben eine Vorgeschichte von Anämie.",show_ref:!1},{src:"We did not find any dangerous cause of your chest pain.",display_src:"We did not find any dangerous cause of your chest pain.",ref:"Wir haben keine gefährliche Ursache für Ihre Brustschmerzen gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your shortness of breath.",display_src:"We did not find any dangerous cause of your shortness of breath.",ref:"Wir haben keine gefährliche Ursache für Ihre Atemnot gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your abdominal pain.",display_src:"We did not find any dangerous cause of your abdominal pain.",ref:"Wir haben keine gefährliche Ursache für Ihre Bauchschmerzen gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your persistent headache.",display_src:"We did not find any dangerous cause of your persistent headache.",ref:"Wir haben keine gefährliche Ursache für Ihre anhaltenden Kopfschmerzen gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your dizziness or fainting episodes.",display_src:"We did not find any dangerous cause of your dizziness or fainting episodes.",ref:"Wir haben keine gefährliche Ursache für Ihre Schwindel- oder Ohnmachtsanfälle gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your irregular heartbeat.",display_src:"We did not find any dangerous cause of your irregular heartbeat.",ref:"Wir haben keine gefährliche Ursache für Ihren unregelmäßigen Herzschlag gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your unexplained weight loss.",display_src:"We did not find any dangerous cause of your unexplained weight loss.",ref:"Wir haben keine gefährliche Ursache für Ihren unerklärlichen Gewichtsverlust gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your sudden vision changes.",display_src:"We did not find any dangerous cause of your sudden vision changes.",ref:"Wir haben keine gefährliche Ursache für Ihre plötzlichen Sehstörungen gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your prolonged fever.",display_src:"We did not find any dangerous cause of your prolonged fever.",ref:"Wir haben keine gefährliche Ursache für Ihr anhaltendes Fieber gefunden.",show_ref:!1},{src:"We did not find any dangerous cause of your joint pain and swelling.",display_src:"We did not find any dangerous cause of your joint pain and swelling.",ref:"Wir haben keine gefährliche Ursache für Ihre Gelenkschmerzen und Schwellungen gefunden.",show_ref:!1},{src:"It is safe for you to go home at this time.",display_src:"It is safe for you to go home at this time.",ref:"Zu diesem Zeitpunkt ist es für Sie sicher, nach Hause zu gehen.",show_ref:!1},{src:"You chose to leave the hospital against medical advice.",display_src:"You chose to leave the hospital against medical advice.",ref:"Sie haben sich entschieden, das Krankenhaus entgegen dem ärztlichen Rat zu verlassen.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic DEID-8721.",display_src:"Please follow up with the Cardiology Clinic DEID-8721.",ref:"Bitte wenden Sie sich an die Kardiologieklinik DEID-8721.",show_ref:!1},{src:"Please follow up with the Diabetes and Endocrinology Center DEID-5439.",display_src:"Please follow up with the Diabetes and Endocrinology Center DEID-5439.",ref:"Bitte wenden Sie sich an das Diabetes- und Endokrinologiezentrum DEID-5439.",show_ref:!1},{src:"Please follow up with the Orthopedic and Rehabilitation Clinic DEID-0956.",display_src:"Please follow up with the Orthopedic and Rehabilitation Clinic DEID-0956.",ref:"Bitte wenden Sie sich an die Orthopädie- und Rehabilitationsklinik DEID-0956.",show_ref:!1},{src:"Please follow up with the Pulmonary and Respiratory Care Clinic DEID-4783.",display_src:"Please follow up with the Pulmonary and Respiratory Care Clinic DEID-4783.",ref:"Bitte wenden Sie sich an die Klinik für Lungen- und Atemwegspflege DEID-4783.",show_ref:!1},{src:"Please follow up with the Gastrointestinal and Hepatology Clinic DEID-6102.",display_src:"Please follow up with the Gastrointestinal and Hepatology Clinic DEID-6102.",ref:"Bitte wenden Sie sich an die Klinik für Gastrointestinal- und Hepatologie DEID-6102.",show_ref:!1},{src:"Please follow up with the Neurology and Stroke Center DEID-7394.",display_src:"Please follow up with the Neurology and Stroke Center DEID-7394.",ref:"Bitte wenden Sie sich an das Neurologie- und Schlaganfallzentrum DEID-7394.",show_ref:!1},{src:"Please follow up with the Oncology and Cancer Treatment Clinic DEID-8045.",display_src:"Please follow up with the Oncology and Cancer Treatment Clinic DEID-8045.",ref:"Bitte wenden Sie sich an die Klinik für Onkologie und Krebsbehandlung DEID-8045.",show_ref:!1},{src:"Please follow up with the Nephrology and Kidney Care Clinic DEID-3621.",display_src:"Please follow up with the Nephrology and Kidney Care Clinic DEID-3621.",ref:"Bitte wenden Sie sich an die Klinik für Nephrologie und Nierenpflege DEID-3621.",show_ref:!1},{src:"Please follow up with the Obstetrics and Gynecology Clinic DEID-5097.",display_src:"Please follow up with the Obstetrics and Gynecology Clinic DEID-5097.",ref:"Bitte wenden Sie sich an die Klinik für Geburtshilfe und Gynäkologie DEID-5097.",show_ref:!1},{src:"Please follow up with the Pediatrics and Child Health Clinic DEID-2918.",display_src:"Please follow up with the Pediatrics and Child Health Clinic DEID-2918.",ref:"Bitte wenden Sie sich an die Klinik für Pädiatrie und Kindergesundheit DEID-2918.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic within the next 7 days.",display_src:"Please follow up with the Cardiology Clinic within the next 7 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 7 Tage die Klinik für Kardiologie.",show_ref:!1},{src:"Please follow up with the Physical Therapy Department within the next 2 weeks.",display_src:"Please follow up with the Physical Therapy Department within the next 2 weeks.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 2 Wochen die Abteilung für Physiotherapie.",show_ref:!1},{src:"Please follow up with the Diabetes Center within the next 10 days.",display_src:"Please follow up with the Diabetes Center within the next 10 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 10 Tage das Diabeteszentrum.",show_ref:!1},{src:"Please follow up with the Wound Care Clinic within the next 5 days.",display_src:"Please follow up with the Wound Care Clinic within the next 5 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 5 Tage die Wundversorgungsklinik.",show_ref:!1},{src:"Please follow up with the Pulmonology Department within the next 3 weeks.",display_src:"Please follow up with the Pulmonology Department within the next 3 weeks.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 3 Wochen die Abteilung für Pneumologie.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic within the next 12 days.",display_src:"Please follow up with the Nephrology Clinic within the next 12 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 12 Tage die Klinik für Nephrologie.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic within the next 14 days.",display_src:"Please follow up with the Orthopedic Clinic within the next 14 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 14 Tage die orthopädische Klinik.",show_ref:!1},{src:"Please follow up with the Gastroenterology Department within the next 21 days.",display_src:"Please follow up with the Gastroenterology Department within the next 21 days.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 21 Tage die Abteilung für Gastroenterologie.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic within the next 1 week.",display_src:"Please follow up with the Rheumatology Clinic within the next 1 week.",ref:"Bitte kontaktieren Sie innerhalb der nächsten Woche die Rheumatologie-Klinik.",show_ref:!1},{src:"Please follow up with the Oncology Department within the next 4 weeks.",display_src:"Please follow up with the Oncology Department within the next 4 weeks.",ref:"Bitte kontaktieren Sie innerhalb der nächsten 4 Wochen die Onkologieabteilung.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic as soon as possible.",display_src:"Please follow up with the Cardiology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Klinik für Kardiologie.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic as soon as possible.",display_src:"Please follow up with the Orthopedic Clinic as soon as possible.",ref:"Bitte wenden Sie sich schnellstmöglich an die Orthopädische Klinik.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic as soon as possible.",display_src:"Please follow up with the Gastroenterology Clinic as soon as possible.",ref:"Bitte wenden Sie sich schnellstmöglich an die Klinik für Gastroenterologie.",show_ref:!1},{src:"Please follow up with the Oncology Clinic as soon as possible.",display_src:"Please follow up with the Oncology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Onkologische Klinik.",show_ref:!1},{src:"Please follow up with the Neurology Clinic as soon as possible.",display_src:"Please follow up with the Neurology Clinic as soon as possible.",ref:"Bitte wenden Sie sich schnellstmöglich an die Klinik für Neurologie.",show_ref:!1},{src:"Please follow up with the Pulmonology Clinic as soon as possible.",display_src:"Please follow up with the Pulmonology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Klinik für Pneumologie.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic as soon as possible.",display_src:"Please follow up with the Nephrology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Klinik für Nephrologie.",show_ref:!1},{src:"Please follow up with the Endocrinology Clinic as soon as possible.",display_src:"Please follow up with the Endocrinology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Klinik für Endokrinologie.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic as soon as possible.",display_src:"Please follow up with the Rheumatology Clinic as soon as possible.",ref:"Bitte wenden Sie sich so schnell wie möglich an die Rheumatologieklinik.",show_ref:!1},{src:"Please follow up with the Urology Clinic as soon as possible.",display_src:"Please follow up with the Urology Clinic as soon as possible.",ref:"Bitte wenden Sie sich schnellstmöglich an die Urologische Klinik.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic to discuss your medications.",display_src:"Please follow up with the Cardiology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Kardiologie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Endocrinology Clinic to discuss your medications.",display_src:"Please follow up with the Endocrinology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Endokrinologie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Oncology Clinic to discuss your medications.",display_src:"Please follow up with the Oncology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Onkologieklinik, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic to discuss your medications.",display_src:"Please follow up with the Nephrology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Nephrologie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic to discuss your medications.",display_src:"Please follow up with the Pulmonary Clinic to discuss your medications.",ref:"Bitte wenden Sie sich an die Lungenklinik, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic to discuss your medications.",display_src:"Please follow up with the Gastroenterology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Gastroenterologie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic to discuss your medications.",display_src:"Please follow up with the Rheumatology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Rheumatologieklinik, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Neurology Clinic to discuss your medications.",display_src:"Please follow up with the Neurology Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Neurologie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Psychiatry Clinic to discuss your medications.",display_src:"Please follow up with the Psychiatry Clinic to discuss your medications.",ref:"Bitte wenden Sie sich an die psychiatrische Klinik, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Geriatrics Clinic to discuss your medications.",display_src:"Please follow up with the Geriatrics Clinic to discuss your medications.",ref:"Bitte kontaktieren Sie die Klinik für Geriatrie, um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic for your scheduled stress test and medication review.",display_src:"Please follow up with the Cardiology Clinic for your scheduled stress test and medication review.",ref:"Bitte kontaktieren Sie die Klinik für Kardiologie für Ihren geplanten Stresstest und die Überprüfung Ihrer Medikamente.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic for your lung function tests and inhaler therapy assessment.",display_src:"Please follow up with the Pulmonary Clinic for your lung function tests and inhaler therapy assessment.",ref:"Bitte kontaktieren Sie die Lungenklinik für Ihre Lungenfunktionstests und die Beurteilung der Inhalationstherapie.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic for your post-operative evaluation and physical therapy recommendations.",display_src:"Please follow up with the Orthopedic Clinic for your post-operative evaluation and physical therapy recommendations.",ref:"Bitte kontaktieren Sie die orthopädische Klinik für Ihre postoperative Beurteilung und Empfehlungen zur Physiotherapie.",show_ref:!1},{src:"Please follow up with the Diabetes Management Clinic for blood sugar monitoring and insulin regimen adjustments.",display_src:"Please follow up with the Diabetes Management Clinic for blood sugar monitoring and insulin regimen adjustments.",ref:"Bitte wenden Sie sich zur Blutzuckerüberwachung und Anpassung des Insulinregimes an die Diabetes Management Clinic.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic for your colonoscopy and dietary consultation.",display_src:"Please follow up with the Gastroenterology Clinic for your colonoscopy and dietary consultation.",ref:"Bitte wenden Sie sich für Ihre Darmspiegelung und Ernährungsberatung an die Klinik für Gastroenterologie.",show_ref:!1},{src:"Please follow up with the Neurology Clinic for your seizure management and anti-epileptic medication adjustments.",display_src:"Please follow up with the Neurology Clinic for your seizure management and anti-epileptic medication adjustments.",ref:"Bitte wenden Sie sich bezüglich der Anfallsbehandlung und der Anpassung Ihrer Antiepileptika-Medikamente an die Klinik für Neurologie.",show_ref:!1},{src:"Please follow up with the Oncology Clinic for your chemotherapy treatment plan and follow-up imaging studies.",display_src:"Please follow up with the Oncology Clinic for your chemotherapy treatment plan and follow-up imaging studies.",ref:"Bitte kontaktieren Sie die Onkologische Klinik für Ihren Chemotherapie-Behandlungsplan und weitere bildgebende Untersuchungen.",show_ref:!1},{src:"Please follow up with the Urology Clinic for your prostate health assessment and treatment options discussion.",display_src:"Please follow up with the Urology Clinic for your prostate health assessment and treatment options discussion.",ref:"Bitte wenden Sie sich für die Beurteilung Ihrer Prostatagesundheit und die Besprechung der Behandlungsoptionen an die Klinik für Urologie.",show_ref:!1},{src:"Please follow up with the Physical Medicine and Rehabilitation Clinic for your post-stroke care and rehabilitation planning.",display_src:"Please follow up with the Physical Medicine and Rehabilitation Clinic for your post-stroke care and rehabilitation planning.",ref:"Bitte kontaktieren Sie die Klinik für Physikalische Medizin und Rehabilitation für Ihre Nachsorge- und Rehabilitationsplanung.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic for your arthritis management and biologic therapy evaluation.",display_src:"Please follow up with the Rheumatology Clinic for your arthritis management and biologic therapy evaluation.",ref:"Bitte kontaktieren Sie die Rheumatologie-Klinik für Ihr Arthritis-Management und die Bewertung der biologischen Therapie.",show_ref:!1},{src:"Please follow up with Cardiology Clinic for an Echocardiogram.",display_src:"Please follow up with Cardiology Clinic for an Echocardiogram.",ref:"Bitte wenden Sie sich für ein Echokardiogramm an die Klinik für Kardiologie.",show_ref:!1},{src:"Please follow up with Endocrinology Clinic for a Thyroid Function Test.",display_src:"Please follow up with Endocrinology Clinic for a Thyroid Function Test.",ref:"Bitte wenden Sie sich für einen Schilddrüsenfunktionstest an die Klinik für Endokrinologie.",show_ref:!1},{src:"Please follow up with Gastroenterology Clinic for a Colonoscopy.",display_src:"Please follow up with Gastroenterology Clinic for a Colonoscopy.",ref:"Bitte wenden Sie sich für eine Koloskopie an die Klinik für Gastroenterologie.",show_ref:!1},{src:"Please follow up with Nephrology Clinic for a Kidney Function Test.",display_src:"Please follow up with Nephrology Clinic for a Kidney Function Test.",ref:"Bitte wenden Sie sich für einen Nierenfunktionstest an die Klinik für Nephrologie.",show_ref:!1},{src:"Please follow up with Neurology Clinic for an Electroencephalogram.",display_src:"Please follow up with Neurology Clinic for an Electroencephalogram.",ref:"Bitte wenden Sie sich für ein Elektroenzephalogramm an die Klinik für Neurologie.",show_ref:!1},{src:"Please follow up with Oncology Clinic for a Positron Emission Tomography Scan.",display_src:"Please follow up with Oncology Clinic for a Positron Emission Tomography Scan.",ref:"Bitte wenden Sie sich für eine Positronen-Emissions-Tomographie-Untersuchung an die Onkologische Klinik.",show_ref:!1},{src:"Please follow up with Pulmonology Clinic for a Pulmonary Function Test.",display_src:"Please follow up with Pulmonology Clinic for a Pulmonary Function Test.",ref:"Bitte wenden Sie sich für einen Lungenfunktionstest an die Klinik für Pneumologie.",show_ref:!1},{src:"Please follow up with Rheumatology Clinic for an Antinuclear Antibody Test.",display_src:"Please follow up with Rheumatology Clinic for an Antinuclear Antibody Test.",ref:"Bitte kontaktieren Sie die Klinik für Rheumatologie für einen Test auf antinukleäre Antikörper.",show_ref:!1},{src:"Please follow up with Urology Clinic for a Cystoscopy.",display_src:"Please follow up with Urology Clinic for a Cystoscopy.",ref:"Bitte wenden Sie sich für eine Zystoskopie an die Urologische Klinik.",show_ref:!1},{src:"Please follow up with Hematology Clinic for a Complete Blood Count.",display_src:"Please follow up with Hematology Clinic for a Complete Blood Count.",ref:"Bitte wenden Sie sich für ein großes Blutbild an die Hämatologieklinik.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic to discuss your test results.",display_src:"Please follow up with the Cardiology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Kardiologie, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Oncology Clinic to discuss your test results.",display_src:"Please follow up with the Oncology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Onkologieklinik, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic to discuss your test results.",display_src:"Please follow up with the Gastroenterology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Gastroenterologie, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic to discuss your test results.",display_src:"Please follow up with the Pulmonary Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Lungenklinik, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic to discuss your test results.",display_src:"Please follow up with the Nephrology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Nephrologie, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Neurology Clinic to discuss your test results.",display_src:"Please follow up with the Neurology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Neurologie, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Endocrinology Clinic to discuss your test results.",display_src:"Please follow up with the Endocrinology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Endokrinologie, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic to discuss your test results.",display_src:"Please follow up with the Rheumatology Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Rheumatologieklinik, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic to discuss your test results.",display_src:"Please follow up with the Orthopedic Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die orthopädische Klinik, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Infectious Disease Clinic to discuss your test results.",display_src:"Please follow up with the Infectious Disease Clinic to discuss your test results.",ref:"Bitte kontaktieren Sie die Klinik für Infektionskrankheiten, um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic to monitor your chest pain and heart health.",display_src:"Please follow up with the Cardiology Clinic to monitor your chest pain and heart health.",ref:"Bitte wenden Sie sich an die Klinik für Kardiologie, um Ihre Brustschmerzen und Ihre Herzgesundheit zu überwachen.",show_ref:!1},{src:"Please follow up with the Diabetes Care Center to monitor your blood sugar levels.",display_src:"Please follow up with the Diabetes Care Center to monitor your blood sugar levels.",ref:"Bitte wenden Sie sich an das Diabetes Care Center, um Ihren Blutzuckerspiegel zu überwachen.",show_ref:!1},{src:"Please follow up with the Neurology Clinic to monitor your headaches and migraines.",display_src:"Please follow up with the Neurology Clinic to monitor your headaches and migraines.",ref:"Bitte wenden Sie sich an die Klinik für Neurologie, um Ihre Kopfschmerzen und Migräne zu überwachen.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic to monitor your abdominal pain and digestive issues.",display_src:"Please follow up with the Gastroenterology Clinic to monitor your abdominal pain and digestive issues.",ref:"Bitte wenden Sie sich an die Klinik für Gastroenterologie, um Ihre Bauchschmerzen und Verdauungsprobleme zu überwachen.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic to monitor your joint pain and mobility.",display_src:"Please follow up with the Orthopedic Clinic to monitor your joint pain and mobility.",ref:"Bitte wenden Sie sich an die orthopädische Klinik, um Ihre Gelenkschmerzen und Ihre Beweglichkeit zu überwachen.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic to monitor your shortness of breath and lung function.",display_src:"Please follow up with the Pulmonary Clinic to monitor your shortness of breath and lung function.",ref:"Bitte wenden Sie sich an die Lungenklinik, um Ihre Atemnot und Lungenfunktion zu überwachen.",show_ref:!1},{src:"Please follow up with the Urology Clinic to monitor your urinary symptoms and kidney health.",display_src:"Please follow up with the Urology Clinic to monitor your urinary symptoms and kidney health.",ref:"Bitte wenden Sie sich an die Urologische Klinik, um Ihre Harnbeschwerden und Ihre Nierengesundheit zu überwachen.",show_ref:!1},{src:"Please follow up with the Oncology Clinic to monitor your cancer treatment and progress.",display_src:"Please follow up with the Oncology Clinic to monitor your cancer treatment and progress.",ref:"Bitte wenden Sie sich an die Onkologieklinik, um Ihre Krebsbehandlung und den Fortschritt zu überwachen.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic to monitor your autoimmune disease and inflammation.",display_src:"Please follow up with the Rheumatology Clinic to monitor your autoimmune disease and inflammation.",ref:"Bitte wenden Sie sich an die Klinik für Rheumatologie, um Ihre Autoimmunerkrankung und Entzündung zu überwachen.",show_ref:!1},{src:"Please follow up with the Psychiatry Clinic to monitor your mental health and well-being.",display_src:"Please follow up with the Psychiatry Clinic to monitor your mental health and well-being.",ref:"Bitte kontaktieren Sie die Psychiatrie-Klinik, um Ihre geistige Gesundheit und Ihr Wohlbefinden zu überwachen.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic for further evaluation.",display_src:"Please follow up with the Cardiology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Kardiologie.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic for further evaluation.",display_src:"Please follow up with the Gastroenterology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Gastroenterologie.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic for further evaluation.",display_src:"Please follow up with the Pulmonary Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Lungenklinik.",show_ref:!1},{src:"Please follow up with the Neurology Clinic for further evaluation.",display_src:"Please follow up with the Neurology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Neurologie.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic for further evaluation.",display_src:"Please follow up with the Orthopedic Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die orthopädische Klinik.",show_ref:!1},{src:"Please follow up with the Endocrinology Clinic for further evaluation.",display_src:"Please follow up with the Endocrinology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Endokrinologie.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic for further evaluation.",display_src:"Please follow up with the Rheumatology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Rheumatologie.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic for further evaluation.",display_src:"Please follow up with the Nephrology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Klinik für Nephrologie.",show_ref:!1},{src:"Please follow up with the Oncology Clinic for further evaluation.",display_src:"Please follow up with the Oncology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Onkologieklinik.",show_ref:!1},{src:"Please follow up with the Dermatology Clinic for further evaluation.",display_src:"Please follow up with the Dermatology Clinic for further evaluation.",ref:"Bitte wenden Sie sich zur weiteren Beurteilung an die Dermatologieklinik.",show_ref:!1},{src:"Please follow up with the Cardiology Clinic if your symptoms persist.",display_src:"Please follow up with the Cardiology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Klinik für Kardiologie.",show_ref:!1},{src:"Please follow up with the Gastroenterology Clinic if your symptoms persist.",display_src:"Please follow up with the Gastroenterology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Gastroenterologie-Klinik.",show_ref:!1},{src:"Please follow up with the Orthopedic Clinic if your symptoms persist.",display_src:"Please follow up with the Orthopedic Clinic if your symptoms persist.",ref:"Sollten Ihre Beschwerden weiterhin bestehen, wenden Sie sich bitte an die orthopädische Klinik.",show_ref:!1},{src:"Please follow up with the Pulmonary Clinic if your symptoms persist.",display_src:"Please follow up with the Pulmonary Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Lungenklinik.",show_ref:!1},{src:"Please follow up with the Endocrinology Clinic if your symptoms persist.",display_src:"Please follow up with the Endocrinology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Endokrinologie-Klinik.",show_ref:!1},{src:"Please follow up with the Nephrology Clinic if your symptoms persist.",display_src:"Please follow up with the Nephrology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Klinik für Nephrologie.",show_ref:!1},{src:"Please follow up with the Rheumatology Clinic if your symptoms persist.",display_src:"Please follow up with the Rheumatology Clinic if your symptoms persist.",ref:"Sollten Ihre Beschwerden weiterhin bestehen, wenden Sie sich bitte an die Rheumatologie-Klinik.",show_ref:!1},{src:"Please follow up with the Neurology Clinic if your symptoms persist.",display_src:"Please follow up with the Neurology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Klinik für Neurologie.",show_ref:!1},{src:"Please follow up with the Oncology Clinic if your symptoms persist.",display_src:"Please follow up with the Oncology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Onkologische Klinik.",show_ref:!1},{src:"Please follow up with the Allergy and Immunology Clinic if your symptoms persist.",display_src:"Please follow up with the Allergy and Immunology Clinic if your symptoms persist.",ref:"Sollten Ihre Symptome weiterhin bestehen, wenden Sie sich bitte an die Klinik für Allergie und Immunologie.",show_ref:!1},{src:"You have an appointment with Dr. Smith at Green Valley Clinic on September 12th at 10:00 AM.",display_src:"You have an appointment with Dr. Smith at Green Valley Clinic on September 12th at 10:00 AM.",ref:"Sie haben am 12. September um 10:00 Uhr einen Termin bei Dr. Smith in der Green Valley Clinic.",show_ref:!1},{src:"You have an appointment with Dr. Martin at Wellness Center on October 5th at 2:00 PM.",display_src:"You have an appointment with Dr. Martin at Wellness Center on October 5th at 2:00 PM.",ref:"Sie haben am 5. Oktober um 14:00 Uhr einen Termin mit Dr. Martin im Wellness Center.",show_ref:!1},{src:"You have an appointment with Dr. Patel at Family Care Clinic on August 18th at 9:00 AM.",display_src:"You have an appointment with Dr. Patel at Family Care Clinic on August 18th at 9:00 AM.",ref:"Sie haben am 18. August um 9:00 Uhr einen Termin bei Dr. Patel in der Family Care Clinic.",show_ref:!1},{src:"You have an appointment with Dr. Kim at Heart Health Institute on September 30th at 1:30 PM.",display_src:"You have an appointment with Dr. Kim at Heart Health Institute on September 30th at 1:30 PM.",ref:"Sie haben am 30. September um 13:30 Uhr einen Termin mit Dr. Kim im Heart Health Institute.",show_ref:!1},{src:"You have an appointment with Dr. Johnson at Downtown Medical Center on November 2nd at 11:00 AM.",display_src:"You have an appointment with Dr. Johnson at Downtown Medical Center on November 2nd at 11:00 AM.",ref:"Sie haben am 2. November um 11:00 Uhr einen Termin bei Dr. Johnson im Downtown Medical Center.",show_ref:!1},{src:"You have an appointment with Dr. Garcia at Riverside Clinic on October 20th at 3:00 PM.",display_src:"You have an appointment with Dr. Garcia at Riverside Clinic on October 20th at 3:00 PM.",ref:"Sie haben am 20. Oktober um 15:00 Uhr einen Termin mit Dr. Garcia in der Riverside Clinic.",show_ref:!1},{src:"You have an appointment with Dr. Lee at Advanced Rehab Center on December 1st at 4:00 PM.",display_src:"You have an appointment with Dr. Lee at Advanced Rehab Center on December 1st at 4:00 PM.",ref:"Sie haben am 1. Dezember um 16:00 Uhr einen Termin mit Dr. Lee im Advanced Rehab Center.",show_ref:!1},{src:"You have an appointment with Dr. Taylor at Neurology Specialists on August 27th at 10:30 AM.",display_src:"You have an appointment with Dr. Taylor at Neurology Specialists on August 27th at 10:30 AM.",ref:"Sie haben am 27. August um 10:30 Uhr einen Termin bei Dr. Taylor bei Neurology Specialists.",show_ref:!1},{src:"You have an appointment with Dr. Anderson at Orthopedic Associates on November 15th at 2:30 PM.",display_src:"You have an appointment with Dr. Anderson at Orthopedic Associates on November 15th at 2:30 PM.",ref:"Sie haben am 15. November um 14:30 Uhr einen Termin mit Dr. Anderson bei Orthopaedic Associates.",show_ref:!1},{src:"You have an appointment with Dr. Jackson at Pediatric Clinic on September 25th at 8:30 AM.",display_src:"You have an appointment with Dr. Jackson at Pediatric Clinic on September 25th at 8:30 AM.",ref:"Sie haben am 25. September um 8:30 Uhr einen Termin bei Dr. Jackson in der Kinderklinik.",show_ref:!1},{src:"The Heart Clinic will call you to schedule an appointment.",display_src:"The Heart Clinic will call you to schedule an appointment.",ref:"Die Herzklinik ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Orthopedic Center will call you to schedule an appointment.",display_src:"The Orthopedic Center will call you to schedule an appointment.",ref:"Das Orthopädische Zentrum ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Gastroenterology Unit will call you to schedule an appointment.",display_src:"The Gastroenterology Unit will call you to schedule an appointment.",ref:"Die Abteilung für Gastroenterologie ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Neurology Department will call you to schedule an appointment.",display_src:"The Neurology Department will call you to schedule an appointment.",ref:"Die Abteilung für Neurologie ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Oncology Clinic will call you to schedule an appointment.",display_src:"The Oncology Clinic will call you to schedule an appointment.",ref:"Die Onkologische Klinik ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Dermatology Practice will call you to schedule an appointment.",display_src:"The Dermatology Practice will call you to schedule an appointment.",ref:"Die Hautarztpraxis ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Physical Therapy Facility will call you to schedule an appointment.",display_src:"The Physical Therapy Facility will call you to schedule an appointment.",ref:"Die Physiotherapie-Einrichtung ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Pulmonology Division will call you to schedule an appointment.",display_src:"The Pulmonology Division will call you to schedule an appointment.",ref:"Die Abteilung für Pneumologie ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Rheumatology Clinic will call you to schedule an appointment.",display_src:"The Rheumatology Clinic will call you to schedule an appointment.",ref:"Die Rheumatologie-Klinik ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"The Endocrinology Center will call you to schedule an appointment.",display_src:"The Endocrinology Center will call you to schedule an appointment.",ref:"Das Endokrinologiezentrum ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Cardiology Clinic to make an appointment.",display_src:"Please call the Cardiology Clinic to make an appointment.",ref:"Bitte rufen Sie die Klinik für Kardiologie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Neurology Clinic to make an appointment.",display_src:"Please call the Neurology Clinic to make an appointment.",ref:"Bitte rufen Sie die Klinik für Neurologie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Gastroenterology Clinic to make an appointment.",display_src:"Please call the Gastroenterology Clinic to make an appointment.",ref:"Bitte rufen Sie die Klinik für Gastroenterologie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Pulmonary Clinic to make an appointment.",display_src:"Please call the Pulmonary Clinic to make an appointment.",ref:"Bitte rufen Sie die Lungenklinik an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Orthopedic Clinic to make an appointment.",display_src:"Please call the Orthopedic Clinic to make an appointment.",ref:"Bitte rufen Sie die Orthopädische Klinik an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Endocrinology Clinic to make an appointment.",display_src:"Please call the Endocrinology Clinic to make an appointment.",ref:"Bitte rufen Sie die Klinik für Endokrinologie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Rheumatology Clinic to make an appointment.",display_src:"Please call the Rheumatology Clinic to make an appointment.",ref:"Bitte rufen Sie die Rheumatologieklinik an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Nephrology Clinic to make an appointment.",display_src:"Please call the Nephrology Clinic to make an appointment.",ref:"Bitte rufen Sie die Klinik für Nephrologie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Dermatology Clinic to make an appointment.",display_src:"Please call the Dermatology Clinic to make an appointment.",ref:"Bitte rufen Sie die Hautklinik an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call the Oncology Clinic to make an appointment.",display_src:"Please call the Oncology Clinic to make an appointment.",ref:"Bitte rufen Sie die Onkologische Klinik an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please do not miss this appointment.",display_src:"Please do not miss this appointment.",ref:"Bitte verpassen Sie diesen Termin nicht.",show_ref:!1},{src:"We will refer you to the Cardiology Clinic.",display_src:"We will refer you to the Cardiology Clinic.",ref:"Wir verweisen Sie an die Klinik für Kardiologie.",show_ref:!1},{src:"We will refer you to the Pulmonary Rehabilitation Clinic.",display_src:"We will refer you to the Pulmonary Rehabilitation Clinic.",ref:"Wir verweisen Sie an die Klinik für Lungenrehabilitation.",show_ref:!1},{src:"We will refer you to the Diabetes Management Clinic.",display_src:"We will refer you to the Diabetes Management Clinic.",ref:"Wir verweisen Sie an die Diabetes Management Clinic.",show_ref:!1},{src:"We will refer you to the Orthopedic and Physical Therapy Clinic.",display_src:"We will refer you to the Orthopedic and Physical Therapy Clinic.",ref:"Wir verweisen Sie an die Klinik für Orthopädie und Physiotherapie.",show_ref:!1},{src:"We will refer you to the Gastroenterology Clinic.",display_src:"We will refer you to the Gastroenterology Clinic.",ref:"Wir überweisen Sie an die Klinik für Gastroenterologie.",show_ref:!1},{src:"We will refer you to the Oncology Clinic.",display_src:"We will refer you to the Oncology Clinic.",ref:"Wir verweisen Sie an die Onkologische Klinik.",show_ref:!1},{src:"We will refer you to the Nephrology Clinic.",display_src:"We will refer you to the Nephrology Clinic.",ref:"Wir verweisen Sie an die Klinik für Nephrologie.",show_ref:!1},{src:"We will refer you to the Neurology and Stroke Clinic.",display_src:"We will refer you to the Neurology and Stroke Clinic.",ref:"Wir überweisen Sie an die Klinik für Neurologie und Schlaganfall.",show_ref:!1},{src:"We will refer you to the Mental Health Clinic.",display_src:"We will refer you to the Mental Health Clinic.",ref:"Wir verweisen Sie an die Klinik für psychische Gesundheit.",show_ref:!1},{src:"We will refer you to the Pain Management Clinic.",display_src:"We will refer you to the Pain Management Clinic.",ref:"Wir verweisen Sie an die Klinik für Schmerztherapie.",show_ref:!1},{src:"If you do not get a call from Memorial Clinic in the next 3 days, please call at (555) 123-4567.",display_src:"If you do not get a call from Memorial Clinic in the next 3 days, please call at (555) 123-4567.",ref:"Wenn Sie in den nächsten 3 Tagen keinen Anruf von der Memorial Clinic erhalten, rufen Sie bitte unter (555) 123-4567 an.",show_ref:!1},{src:"If you do not get a call from Riverside Health Center in the next 4 days, please call at (555) 234-5678.",display_src:"If you do not get a call from Riverside Health Center in the next 4 days, please call at (555) 234-5678.",ref:"Wenn Sie in den nächsten 4 Tagen keinen Anruf vom Riverside Health Center erhalten, rufen Sie bitte unter (555) 234-5678 an.",show_ref:!1},{src:"If you do not get a call from Parkside Medical Group in the next 5 days, please call at (555) 345-6789.",display_src:"If you do not get a call from Parkside Medical Group in the next 5 days, please call at (555) 345-6789.",ref:"Wenn Sie in den nächsten 5 Tagen keinen Anruf von der Parkside Medical Group erhalten, rufen Sie bitte unter (555) 345-6789 an.",show_ref:!1},{src:"If you do not get a call from Lakeside Family Practice in the next 2 days, please call at (555) 456-7890.",display_src:"If you do not get a call from Lakeside Family Practice in the next 2 days, please call at (555) 456-7890.",ref:"Wenn Sie in den nächsten zwei Tagen keinen Anruf von Lakeside Family Practice erhalten, rufen Sie bitte unter (555) 456-7890 an.",show_ref:!1},{src:"If you do not get a call from Uptown Specialty Clinic in the next 7 days, please call at (555) 567-8901.",display_src:"If you do not get a call from Uptown Specialty Clinic in the next 7 days, please call at (555) 567-8901.",ref:"Wenn Sie in den nächsten 7 Tagen keinen Anruf von der Uptown Specialty Clinic erhalten, rufen Sie bitte unter (555) 567-8901 an.",show_ref:!1},{src:"If you do not get a call from Elm Street Pediatrics in the next 6 days, please call at (555) 678-9012.",display_src:"If you do not get a call from Elm Street Pediatrics in the next 6 days, please call at (555) 678-9012.",ref:"Wenn Sie in den nächsten 6 Tagen keinen Anruf von Elm Street Pediatrics erhalten, rufen Sie bitte unter (555) 678-9012 an.",show_ref:!1},{src:"If you do not get a call from Greenwood Women's Health in the next 10 days, please call at (555) 789-0123.",display_src:"If you do not get a call from Greenwood Women's Health in the next 10 days, please call at (555) 789-0123.",ref:"Wenn Sie in den nächsten 10 Tagen keinen Anruf von Greenwood Women&#39;s Health erhalten, rufen Sie bitte unter (555) 789-0123 an.",show_ref:!1},{src:"If you do not get a call from Oakwood Cardiology Associates in the next 5 days, please call at (555) 890-1234.",display_src:"If you do not get a call from Oakwood Cardiology Associates in the next 5 days, please call at (555) 890-1234.",ref:"Wenn Sie in den nächsten 5 Tagen keinen Anruf von Oakwood Cardiology Associates erhalten, rufen Sie bitte unter (555) 890-1234 an.",show_ref:!1},{src:"If you do not get a call from Spring Valley Orthopedics in the next 7 days, please call at (555) 901-2345.",display_src:"If you do not get a call from Spring Valley Orthopedics in the next 7 days, please call at (555) 901-2345.",ref:"Wenn Sie in den nächsten 7 Tagen keinen Anruf von Spring Valley Orthopaedics erhalten, rufen Sie bitte unter (555) 901-2345 an.",show_ref:!1},{src:"If you do not get a call from Hillcrest Gastroenterology in the next 4 days, please call at (555) 012-3456.",display_src:"If you do not get a call from Hillcrest Gastroenterology in the next 4 days, please call at (555) 012-3456.",ref:"Wenn Sie in den nächsten 4 Tagen keinen Anruf von Hillcrest Gastroenterology erhalten, rufen Sie bitte unter (555) 012-3456 an.",show_ref:!1},{src:"It is very important that you have a follow-up appointment with your primary care physician within the next 7 days.",display_src:"It is very important that you have a follow-up appointment with your primary care physician within the next 7 days.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 7 Tage einen Kontrolltermin bei Ihrem Hausarzt vereinbaren.",show_ref:!1},{src:"It is very important that you have a blood pressure check within the next 48 hours.",display_src:"It is very important that you have a blood pressure check within the next 48 hours.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 48 Stunden eine Blutdruckkontrolle durchführen lassen.",show_ref:!1},{src:"It is very important that you have a wound dressing change within the next 24 hours.",display_src:"It is very important that you have a wound dressing change within the next 24 hours.",ref:"Es ist sehr wichtig, dass der Wundverband innerhalb der nächsten 24 Stunden gewechselt wird.",show_ref:!1},{src:"It is very important that you have a medication review within the next 2 weeks.",display_src:"It is very important that you have a medication review within the next 2 weeks.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 2 Wochen eine Medikamentenüberprüfung durchführen lassen.",show_ref:!1},{src:"It is very important that you have a physical therapy assessment within the next 72 hours.",display_src:"It is very important that you have a physical therapy assessment within the next 72 hours.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 72 Stunden eine physiotherapeutische Untersuchung durchführen lassen.",show_ref:!1},{src:"It is very important that you have a blood sugar test within the next 3 days.",display_src:"It is very important that you have a blood sugar test within the next 3 days.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 3 Tage einen Blutzuckertest durchführen lassen.",show_ref:!1},{src:"It is very important that you have a cardiac stress test within the next 10 days.",display_src:"It is very important that you have a cardiac stress test within the next 10 days.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 10 Tage einen Herzbelastungstest durchführen lassen.",show_ref:!1},{src:"It is very important that you have a pulmonary function test within the next 2 weeks.",display_src:"It is very important that you have a pulmonary function test within the next 2 weeks.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 2 Wochen einen Lungenfunktionstest durchführen lassen.",show_ref:!1},{src:"It is very important that you have a renal function test within the next 5 days.",display_src:"It is very important that you have a renal function test within the next 5 days.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 5 Tage einen Nierenfunktionstest durchführen lassen.",show_ref:!1},{src:"It is very important that you have a mental health evaluation within the next 10 days.",display_src:"It is very important that you have a mental health evaluation within the next 10 days.",ref:"Es ist sehr wichtig, dass Sie innerhalb der nächsten 10 Tage eine Untersuchung Ihrer psychischen Gesundheit durchführen lassen.",show_ref:!1},{src:"Follow-up appointments with your outpatient providers are listed below.",display_src:"Follow-up appointments with your outpatient providers are listed below.",ref:"Folgetermine bei Ihren ambulanten Anbietern sind unten aufgeführt.",show_ref:!1},{src:"Please take this copy of your discharge summary with you to your appointment.",display_src:"Please take this copy of your discharge summary with you to your appointment.",ref:"Bitte nehmen Sie diese Kopie Ihres Entlassungsberichts zu Ihrem Termin mit.",show_ref:!1},{src:"Our discharge coordinator will help you arrange an appointment.",display_src:"Our discharge coordinator will help you arrange an appointment.",ref:"Unser Entlassungskoordinator hilft Ihnen bei der Terminvereinbarung.",show_ref:!1},{src:"Please find a primary care doctor.",display_src:"Please find a primary care doctor.",ref:"Bitte suchen Sie einen Hausarzt auf.",show_ref:!1},{src:"Please share this information with your primary care doctor.",display_src:"Please share this information with your primary care doctor.",ref:"Bitte teilen Sie diese Informationen Ihrem Hausarzt mit.",show_ref:!1},{src:"As discussed, please take these medications as follows: ",display_src:"As discussed, please take these medications as follows: ",ref:"Wie besprochen, nehmen Sie diese Medikamente bitte wie folgt ein:",show_ref:!1},{src:"The following medications have CHANGES:",display_src:"The following medications have CHANGES:",ref:"Bei folgenden Medikamenten gibt es ÄNDERUNGEN:",show_ref:!1},{src:"START taking the following medications:",display_src:"START taking the following medications:",ref:"Beginnen Sie mit der Einnahme der folgenden Medikamente:",show_ref:!1},{src:"STOP taking the following medications:",display_src:"STOP taking the following medications:",ref:"Beenden Sie die Einnahme folgender Medikamente:",show_ref:!1},{src:"Take 500 milligrams of medication every 6 hours for 7 days.",display_src:"Take 500 milligrams of medication every 6 hours for 7 days.",ref:"Nehmen Sie 7 Tage lang alle 6 Stunden 500 Milligramm des Medikaments ein.",show_ref:!1},{src:"Drink 8 ounces of water every 2 hours for the next 24 hours.",display_src:"Drink 8 ounces of water every 2 hours for the next 24 hours.",ref:"Trinken Sie in den nächsten 24 Stunden alle 2 Stunden 8 Unzen Wasser.",show_ref:!1},{src:"Apply 1/4 inch of ointment to the affected area twice daily for 10 days.",display_src:"Apply 1/4 inch of ointment to the affected area twice daily for 10 days.",ref:"Tragen Sie 10 Tage lang zweimal täglich 1/4 Zoll Salbe auf die betroffene Stelle auf.",show_ref:!1},{src:"Consume 20 grams of fiber every day for the next 4 weeks.",display_src:"Consume 20 grams of fiber every day for the next 4 weeks.",ref:"Nehmen Sie in den nächsten 4 Wochen täglich 20 Gramm Ballaststoffe zu sich.",show_ref:!1},{src:"Elevate the affected limb 6 inches above heart level for 15 minutes every 3 hours for 5 days.",display_src:"Elevate the affected limb 6 inches above heart level for 15 minutes every 3 hours for 5 days.",ref:"Heben Sie das betroffene Glied 5 Tage lang alle 3 Stunden 15 Minuten lang 15 cm über die Herzhöhe.",show_ref:!1},{src:"Perform 10 repetitions of the prescribed exercise 3 times daily for 6 weeks.",display_src:"Perform 10 repetitions of the prescribed exercise 3 times daily for 6 weeks.",ref:"Führen Sie 6 Wochen lang dreimal täglich 10 Wiederholungen der vorgeschriebenen Übung durch.",show_ref:!1},{src:"Apply ice packs to the injured area for 20 minutes every hour for the next 48 hours.",display_src:"Apply ice packs to the injured area for 20 minutes every hour for the next 48 hours.",ref:"Legen Sie in den nächsten 48 Stunden stündlich 20 Minuten lang Eisbeutel auf die verletzte Stelle.",show_ref:!1},{src:"Use 2 puffs of the inhaler every 4 hours as needed for wheezing for the next 14 days.",display_src:"Use 2 puffs of the inhaler every 4 hours as needed for wheezing for the next 14 days.",ref:"Verwenden Sie je nach Bedarf alle 4 Stunden 2 Hübe des Inhalators, um das Keuchen in den nächsten 14 Tagen zu lindern.",show_ref:!1},{src:"Ingest 30 milliliters of liquid antacid every 8 hours for heartburn relief for 3 days.",display_src:"Ingest 30 milliliters of liquid antacid every 8 hours for heartburn relief for 3 days.",ref:"Nehmen Sie 3 Tage lang alle 8 Stunden 30 Milliliter flüssiges Antazidum ein, um Sodbrennen zu lindern.",show_ref:!1},{src:"Walk for 15 minutes at a moderate pace 2 times daily for the next 30 days.",display_src:"Walk for 15 minutes at a moderate pace 2 times daily for the next 30 days.",ref:"Gehen Sie in den nächsten 30 Tagen zweimal täglich 15 Minuten lang in mäßigem Tempo.",show_ref:!1},{src:"Take 500 milligrams of medication every 8 hours for 7 days with food.",display_src:"Take 500 milligrams of medication every 8 hours for 7 days with food.",ref:"Nehmen Sie 7 Tage lang alle 8 Stunden 500 Milligramm des Medikaments zusammen mit einer Mahlzeit ein.",show_ref:!1},{src:"Consume 2 tablespoons of liquid medicine every 4 hours for 5 days with food.",display_src:"Consume 2 tablespoons of liquid medicine every 4 hours for 5 days with food.",ref:"Verzehren Sie 5 Tage lang alle 4 Stunden 2 Esslöffel flüssiges Arzneimittel zu den Mahlzeiten.",show_ref:!1},{src:"Ingest 20 milligrams of tablets twice a day for 10 days with food.",display_src:"Ingest 20 milligrams of tablets twice a day for 10 days with food.",ref:"Nehmen Sie 10 Tage lang zweimal täglich 20 Milligramm Tabletten mit einer Mahlzeit ein.",show_ref:!1},{src:"Administer 1 milliliter of suspension every 6 hours for 14 days with food.",display_src:"Administer 1 milliliter of suspension every 6 hours for 14 days with food.",ref:"14 Tage lang alle 6 Stunden 1 Milliliter Suspension mit der Nahrung verabreichen.",show_ref:!1},{src:"Apply 5 grams of topical ointment three times a day for 3 weeks with food.",display_src:"Apply 5 grams of topical ointment three times a day for 3 weeks with food.",ref:"Tragen Sie 3 Wochen lang dreimal täglich 5 Gramm topische Salbe zu den Mahlzeiten auf.",show_ref:!1},{src:"Swallow 10 milligrams of capsules once a day for 30 days with food.",display_src:"Swallow 10 milligrams of capsules once a day for 30 days with food.",ref:"Schlucken Sie 30 Tage lang einmal täglich 10 Milligramm Kapseln zusammen mit einer Mahlzeit.",show_ref:!1},{src:"Drink 15 milliliters of syrup every 12 hours for 2 weeks with food.",display_src:"Drink 15 milliliters of syrup every 12 hours for 2 weeks with food.",ref:"Trinken Sie 2 Wochen lang alle 12 Stunden 15 Milliliter Sirup zu den Mahlzeiten.",show_ref:!1},{src:"Use 3 drops of solution four times a day for 1 week with food.",display_src:"Use 3 drops of solution four times a day for 1 week with food.",ref:"1 Woche lang viermal täglich 3 Tropfen der Lösung zu den Mahlzeiten einnehmen.",show_ref:!1},{src:"Inject 25 milligrams of medication subcutaneously every 24 hours for 4 weeks with food.",display_src:"Inject 25 milligrams of medication subcutaneously every 24 hours for 4 weeks with food.",ref:"Injizieren Sie 4 Wochen lang alle 24 Stunden 25 Milligramm des Medikaments subkutan mit der Nahrung.",show_ref:!1},{src:"Insert 50 milligrams of suppository rectally every 8 hours for 10 days with food.",display_src:"Insert 50 milligrams of suppository rectally every 8 hours for 10 days with food.",ref:"Führen Sie 10 Tage lang alle 8 Stunden 50 Milligramm Zäpfchen rektal mit der Nahrung ein.",show_ref:!1},{src:"We have given you enough of this medication for one week.",display_src:"We have given you enough of this medication for one week.",ref:"Wir haben Ihnen eine Woche lang ausreichend von diesem Medikament gegeben.",show_ref:!1},{src:"We have provided you with enough of this medication for the next 10 days.",display_src:"We have provided you with enough of this medication for the next 10 days.",ref:"Wir haben Ihnen ausreichend von diesem Medikament für die nächsten 10 Tage zur Verfügung gestellt.",show_ref:!1},{src:"We have supplied enough of this medication for a month.",display_src:"We have supplied enough of this medication for a month.",ref:"Wir haben genug von diesem Medikament für einen Monat geliefert.",show_ref:!1},{src:"We have given you enough of this medication for the next three days.",display_src:"We have given you enough of this medication for the next three days.",ref:"Wir haben Ihnen für die nächsten drei Tage ausreichend von diesem Medikament verabreicht.",show_ref:!1},{src:"We have ensured you have enough of this medication for two weeks.",display_src:"We have ensured you have enough of this medication for two weeks.",ref:"Wir haben dafür gesorgt, dass Sie zwei Wochen lang genug von diesem Medikament haben.",show_ref:!1},{src:"We have given you enough of this medication for five days.",display_src:"We have given you enough of this medication for five days.",ref:"Wir haben Ihnen fünf Tage lang genug von diesem Medikament gegeben.",show_ref:!1},{src:"We have provided you with enough of this medication for 15 days.",display_src:"We have provided you with enough of this medication for 15 days.",ref:"Wir haben Ihnen dieses Medikament in ausreichender Menge für 15 Tage zur Verfügung gestellt.",show_ref:!1},{src:"We have given you enough of this medication for 72 hours.",display_src:"We have given you enough of this medication for 72 hours.",ref:"Wir haben Ihnen 72 Stunden lang genug von diesem Medikament gegeben.",show_ref:!1},{src:"We have supplied you with enough of this medication for the next fortnight.",display_src:"We have supplied you with enough of this medication for the next fortnight.",ref:"Wir haben Sie mit diesem Medikament in ausreichender Menge für die nächsten zwei Wochen versorgt.",show_ref:!1},{src:"We have given you enough of this medication for a 30-day period.",display_src:"We have given you enough of this medication for a 30-day period.",ref:"Wir haben Ihnen für einen Zeitraum von 30 Tagen ausreichend von diesem Medikament verabreicht.",show_ref:!1},{src:"Please finish all of the amoxicillin prescribed even if you are feeling better.",display_src:"Please finish all of the amoxicillin prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Menge Amoxicillin, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the azithromycin prescribed even if you are feeling better.",display_src:"Please finish all of the azithromycin prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Menge Azithromycin, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the ciprofloxacin prescribed even if you are feeling better.",display_src:"Please finish all of the ciprofloxacin prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Menge Ciprofloxacin, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the metronidazole prescribed even if you are feeling better.",display_src:"Please finish all of the metronidazole prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Menge Metronidazol, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the prednisone prescribed even if you are feeling better.",display_src:"Please finish all of the prednisone prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Prednison-Einnahme, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the lisinopril prescribed even if you are feeling better.",display_src:"Please finish all of the lisinopril prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Menge an Lisinopril, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the fluoxetine prescribed even if you are feeling better.",display_src:"Please finish all of the fluoxetine prescribed even if you are feeling better.",ref:"Nehmen Sie bitte die gesamte verschriebene Menge Fluoxetin ein, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the ibuprofen prescribed even if you are feeling better.",display_src:"Please finish all of the ibuprofen prescribed even if you are feeling better.",ref:"Nehmen Sie bitte das gesamte verschriebene Ibuprofen ein, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the atorvastatin prescribed even if you are feeling better.",display_src:"Please finish all of the atorvastatin prescribed even if you are feeling better.",ref:"Bitte beenden Sie die gesamte verschriebene Atorvastatin-Therapie, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"Please finish all of the hydrochlorothiazide prescribed even if you are feeling better.",display_src:"Please finish all of the hydrochlorothiazide prescribed even if you are feeling better.",ref:"Bitte nehmen Sie das verschriebene Hydrochlorothiazid vollständig ein, auch wenn Sie sich besser fühlen.",show_ref:!1},{src:"We have sent the prescription for Amoxicillin to your pharmacy.",display_src:"We have sent the prescription for Amoxicillin to your pharmacy.",ref:"Wir haben das Rezept für Amoxicillin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Lisinopril to your pharmacy.",display_src:"We have sent the prescription for Lisinopril to your pharmacy.",ref:"Wir haben das Rezept für Lisinopril an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Metformin to your pharmacy.",display_src:"We have sent the prescription for Metformin to your pharmacy.",ref:"Wir haben das Rezept für Metformin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Atenolol to your pharmacy.",display_src:"We have sent the prescription for Atenolol to your pharmacy.",ref:"Wir haben das Rezept für Atenolol an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Omeprazole to your pharmacy.",display_src:"We have sent the prescription for Omeprazole to your pharmacy.",ref:"Wir haben das Rezept für Omeprazol an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Simvastatin to your pharmacy.",display_src:"We have sent the prescription for Simvastatin to your pharmacy.",ref:"Wir haben das Rezept für Simvastatin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Levothyroxine to your pharmacy.",display_src:"We have sent the prescription for Levothyroxine to your pharmacy.",ref:"Wir haben das Rezept für Levothyroxin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Gabapentin to your pharmacy.",display_src:"We have sent the prescription for Gabapentin to your pharmacy.",ref:"Wir haben das Rezept für Gabapentin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Sertraline to your pharmacy.",display_src:"We have sent the prescription for Sertraline to your pharmacy.",ref:"Wir haben das Rezept für Sertralin an Ihre Apotheke geschickt.",show_ref:!1},{src:"We have sent the prescription for Warfarin to your pharmacy.",display_src:"We have sent the prescription for Warfarin to your pharmacy.",ref:"Wir haben das Rezept für Warfarin an Ihre Apotheke geschickt.",show_ref:!1},{src:"The Amoxicillin is available for pick up at your pharmacy.",display_src:"The Amoxicillin is available for pick up at your pharmacy.",ref:"Das Amoxicillin kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Lisinopril is available for pick up at your pharmacy.",display_src:"The Lisinopril is available for pick up at your pharmacy.",ref:"Das Lisinopril kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Metformin is available for pick up at your pharmacy.",display_src:"The Metformin is available for pick up at your pharmacy.",ref:"Das Metformin kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Atenolol is available for pick up at your pharmacy.",display_src:"The Atenolol is available for pick up at your pharmacy.",ref:"Das Atenolol kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Simvastatin is available for pick up at your pharmacy.",display_src:"The Simvastatin is available for pick up at your pharmacy.",ref:"Das Simvastatin kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Omeprazole is available for pick up at your pharmacy.",display_src:"The Omeprazole is available for pick up at your pharmacy.",ref:"Das Omeprazol kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Losartan is available for pick up at your pharmacy.",display_src:"The Losartan is available for pick up at your pharmacy.",ref:"Das Losartan kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Albuterol is available for pick up at your pharmacy.",display_src:"The Albuterol is available for pick up at your pharmacy.",ref:"Das Albuterol kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Warfarin is available for pick up at your pharmacy.",display_src:"The Warfarin is available for pick up at your pharmacy.",ref:"Das Warfarin kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"The Prednisone is available for pick up at your pharmacy.",display_src:"The Prednisone is available for pick up at your pharmacy.",ref:"Das Prednison kann in Ihrer Apotheke abgeholt werden.",show_ref:!1},{src:"Ibuprofen is available over-the-counter without a prescription.",display_src:"Ibuprofen is available over-the-counter without a prescription.",ref:"Ibuprofen ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Acetaminophen is available over-the-counter without a prescription.",display_src:"Acetaminophen is available over-the-counter without a prescription.",ref:"Acetaminophen ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Naproxen is available over-the-counter without a prescription.",display_src:"Naproxen is available over-the-counter without a prescription.",ref:"Naproxen ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Aspirin is available over-the-counter without a prescription.",display_src:"Aspirin is available over-the-counter without a prescription.",ref:"Aspirin ist rezeptfrei und rezeptfrei erhältlich.",show_ref:!1},{src:"Loratadine is available over-the-counter without a prescription.",display_src:"Loratadine is available over-the-counter without a prescription.",ref:"Loratadin ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Diphenhydramine is available over-the-counter without a prescription.",display_src:"Diphenhydramine is available over-the-counter without a prescription.",ref:"Diphenhydramin ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Famotidine is available over-the-counter without a prescription.",display_src:"Famotidine is available over-the-counter without a prescription.",ref:"Famotidin ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Dextromethorphan is available over-the-counter without a prescription.",display_src:"Dextromethorphan is available over-the-counter without a prescription.",ref:"Dextromethorphan ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Meclizine is available over-the-counter without a prescription.",display_src:"Meclizine is available over-the-counter without a prescription.",ref:"Meclizin ist rezeptfrei und ohne Rezept erhältlich.",show_ref:!1},{src:"Pseudoephedrine is available over-the-counter without a prescription, but may require asking a pharmacist for assistance.",display_src:"Pseudoephedrine is available over-the-counter without a prescription, but may require asking a pharmacist for assistance.",ref:"Pseudoephedrin ist rezeptfrei und ohne Rezept erhältlich, es kann jedoch erforderlich sein, einen Apotheker um Hilfe zu bitten.",show_ref:!1},{src:"Please fill your Amoxicillin prescription.",display_src:"Please fill your Amoxicillin prescription.",ref:"Bitte füllen Sie Ihr Amoxicillin-Rezept aus.",show_ref:!1},{src:"Please fill your Lisinopril prescription.",display_src:"Please fill your Lisinopril prescription.",ref:"Bitte füllen Sie Ihr Lisinopril-Rezept aus.",show_ref:!1},{src:"Please fill your Metformin prescription.",display_src:"Please fill your Metformin prescription.",ref:"Bitte füllen Sie Ihr Metformin-Rezept aus.",show_ref:!1},{src:"Please fill your Atenolol prescription.",display_src:"Please fill your Atenolol prescription.",ref:"Bitte füllen Sie Ihr Atenolol-Rezept aus.",show_ref:!1},{src:"Please fill your Simvastatin prescription.",display_src:"Please fill your Simvastatin prescription.",ref:"Bitte füllen Sie Ihr Simvastatin-Rezept aus.",show_ref:!1},{src:"Please fill your Omeprazole prescription.",display_src:"Please fill your Omeprazole prescription.",ref:"Bitte füllen Sie Ihr Omeprazol-Rezept aus.",show_ref:!1},{src:"Please fill your Levothyroxine prescription.",display_src:"Please fill your Levothyroxine prescription.",ref:"Bitte füllen Sie Ihr Levothyroxin-Rezept aus.",show_ref:!1},{src:"Please fill your Hydrochlorothiazide prescription.",display_src:"Please fill your Hydrochlorothiazide prescription.",ref:"Bitte füllen Sie Ihr Hydrochlorothiazid-Rezept aus.",show_ref:!1},{src:"Please fill your Gabapentin prescription.",display_src:"Please fill your Gabapentin prescription.",ref:"Bitte füllen Sie Ihr Gabapentin-Rezept aus.",show_ref:!1},{src:"Please fill your Sertraline prescription.",display_src:"Please fill your Sertraline prescription.",ref:"Bitte füllen Sie Ihr Sertralin-Rezept aus.",show_ref:!1},{src:"We recommend acetaminophen for pain relief and fever reduction.",display_src:"We recommend acetaminophen for pain relief and fever reduction.",ref:"Wir empfehlen Paracetamol zur Schmerzlinderung und Fiebersenkung.",show_ref:!1},{src:"We recommend ibuprofen to help with inflammation and mild to moderate pain.",display_src:"We recommend ibuprofen to help with inflammation and mild to moderate pain.",ref:"Zur Behandlung von Entzündungen und leichten bis mittelschweren Schmerzen empfehlen wir Ibuprofen.",show_ref:!1},{src:"We recommend amoxicillin as an antibiotic to treat bacterial infections.",display_src:"We recommend amoxicillin as an antibiotic to treat bacterial infections.",ref:"Wir empfehlen Amoxicillin als Antibiotikum zur Behandlung bakterieller Infektionen.",show_ref:!1},{src:"We recommend lisinopril for managing high blood pressure and heart failure.",display_src:"We recommend lisinopril for managing high blood pressure and heart failure.",ref:"Wir empfehlen Lisinopril zur Behandlung von Bluthochdruck und Herzinsuffizienz.",show_ref:!1},{src:"We recommend metformin to help control blood sugar levels in patients with type 2 diabetes.",display_src:"We recommend metformin to help control blood sugar levels in patients with type 2 diabetes.",ref:"Wir empfehlen Metformin zur Kontrolle des Blutzuckerspiegels bei Patienten mit Typ-2-Diabetes.",show_ref:!1},{src:"We recommend albuterol for relief of bronchospasm in patients with asthma or COPD.",display_src:"We recommend albuterol for relief of bronchospasm in patients with asthma or COPD.",ref:"Wir empfehlen Albuterol zur Linderung von Bronchospasmen bei Patienten mit Asthma oder COPD.",show_ref:!1},{src:"We recommend omeprazole for the treatment of gastroesophageal reflux disease (GERD) and stomach ulcers.",display_src:"We recommend omeprazole for the treatment of gastroesophageal reflux disease (GERD) and stomach ulcers.",ref:"Wir empfehlen Omeprazol zur Behandlung der gastroösophagealen Refluxkrankheit (GERD) und Magengeschwüren.",show_ref:!1},{src:"We recommend simvastatin to help lower cholesterol levels and reduce the risk of heart disease.",display_src:"We recommend simvastatin to help lower cholesterol levels and reduce the risk of heart disease.",ref:"Wir empfehlen Simvastatin, um den Cholesterinspiegel zu senken und das Risiko von Herzerkrankungen zu verringern.",show_ref:!1},{src:"We recommend losartan for the treatment of high blood pressure and to protect kidney function in patients with diabetes.",display_src:"We recommend losartan for the treatment of high blood pressure and to protect kidney function in patients with diabetes.",ref:"Wir empfehlen Losartan zur Behandlung von Bluthochdruck und zum Schutz der Nierenfunktion bei Patienten mit Diabetes.",show_ref:!1},{src:"We recommend levothyroxine for patients with hypothyroidism to help regulate thyroid hormone levels.",display_src:"We recommend levothyroxine for patients with hypothyroidism to help regulate thyroid hormone levels.",ref:"Wir empfehlen Levothyroxin für Patienten mit Hypothyreose, um die Regulierung des Schilddrüsenhormonspiegels zu unterstützen.",show_ref:!1},{src:"Cardiology department recommends Lisinopril.",display_src:"Cardiology department recommends Lisinopril.",ref:"Die kardiologische Abteilung empfiehlt Lisinopril.",show_ref:!1},{src:"Gastroenterology division recommends Omeprazole.",display_src:"Gastroenterology division recommends Omeprazole.",ref:"Die Abteilung für Gastroenterologie empfiehlt Omeprazol.",show_ref:!1},{src:"Orthopedic team recommends Ibuprofen.",display_src:"Orthopedic team recommends Ibuprofen.",ref:"Das orthopädische Team empfiehlt Ibuprofen.",show_ref:!1},{src:"Neurology specialists recommend Gabapentin.",display_src:"Neurology specialists recommend Gabapentin.",ref:"Neurologen empfehlen Gabapentin.",show_ref:!1},{src:"Endocrinology clinic recommends Levothyroxine.",display_src:"Endocrinology clinic recommends Levothyroxine.",ref:"Die Klinik für Endokrinologie empfiehlt Levothyroxin.",show_ref:!1},{src:"Pulmonology unit recommends Albuterol.",display_src:"Pulmonology unit recommends Albuterol.",ref:"Die Abteilung für Pneumologie empfiehlt Albuterol.",show_ref:!1},{src:"Oncology department recommends Anastrozole.",display_src:"Oncology department recommends Anastrozole.",ref:"Die Abteilung für Onkologie empfiehlt Anastrozol.",show_ref:!1},{src:"Nephrology division recommends Furosemide.",display_src:"Nephrology division recommends Furosemide.",ref:"Die Abteilung für Nephrologie empfiehlt Furosemid.",show_ref:!1},{src:"Dermatology clinic recommends Hydrocortisone.",display_src:"Dermatology clinic recommends Hydrocortisone.",ref:"Dermatologische Klinik empfiehlt Hydrocortison.",show_ref:!1},{src:"Rheumatology team recommends Methotrexate.",display_src:"Rheumatology team recommends Methotrexate.",ref:"Das Rheumatologieteam empfiehlt Methotrexat.",show_ref:!1},{src:"You declined blood pressure medication.",display_src:"You declined blood pressure medication.",ref:"Sie haben Blutdruckmedikamente abgelehnt.",show_ref:!1},{src:"You declined physical therapy for your knee.",display_src:"You declined physical therapy for your knee.",ref:"Sie haben eine Physiotherapie für Ihr Knie abgelehnt.",show_ref:!1},{src:"You declined insulin treatment for diabetes management.",display_src:"You declined insulin treatment for diabetes management.",ref:"Sie haben eine Insulinbehandlung zur Diabetesbehandlung abgelehnt.",show_ref:!1},{src:"You declined a flu vaccine.",display_src:"You declined a flu vaccine.",ref:"Sie haben eine Grippeimpfung abgelehnt.",show_ref:!1},{src:"You declined the recommended surgery for your hernia.",display_src:"You declined the recommended surgery for your hernia.",ref:"Sie haben die empfohlene Operation für Ihren Leistenbruch abgelehnt.",show_ref:!1},{src:"You declined the use of a continuous positive airway pressure (CPAP) machine for sleep apnea.",display_src:"You declined the use of a continuous positive airway pressure (CPAP) machine for sleep apnea.",ref:"Sie haben die Verwendung eines CPAP-Geräts (Continuous Positive Airway Pressure) zur Behandlung von Schlafapnoe abgelehnt.",show_ref:!1},{src:"You declined the prescribed antidepressant medication.",display_src:"You declined the prescribed antidepressant medication.",ref:"Sie haben das verschriebene Antidepressivum abgelehnt.",show_ref:!1},{src:"You declined the recommended chemotherapy for your cancer.",display_src:"You declined the recommended chemotherapy for your cancer.",ref:"Sie haben die empfohlene Chemotherapie für Ihre Krebserkrankung abgelehnt.",show_ref:!1},{src:"You declined the use of a hearing aid for your hearing loss.",display_src:"You declined the use of a hearing aid for your hearing loss.",ref:"Sie haben die Verwendung eines Hörgeräts zur Behandlung Ihres Hörverlusts abgelehnt.",show_ref:!1},{src:"You declined the prescribed pain medication.",display_src:"You declined the prescribed pain medication.",ref:"Sie haben die verschriebenen Schmerzmittel abgelehnt.",show_ref:!1},{src:"You do not need ibuprofen.",display_src:"You do not need ibuprofen.",ref:"Sie brauchen kein Ibuprofen.",show_ref:!1},{src:"You do not need metformin.",display_src:"You do not need metformin.",ref:"Sie benötigen kein Metformin.",show_ref:!1},{src:"You do not need lisinopril.",display_src:"You do not need lisinopril.",ref:"Sie benötigen kein Lisinopril.",show_ref:!1},{src:"You do not need amoxicillin.",display_src:"You do not need amoxicillin.",ref:"Sie benötigen kein Amoxicillin.",show_ref:!1},{src:"You do not need omeprazole.",display_src:"You do not need omeprazole.",ref:"Sie brauchen kein Omeprazol.",show_ref:!1},{src:"You do not need atorvastatin.",display_src:"You do not need atorvastatin.",ref:"Sie benötigen kein Atorvastatin.",show_ref:!1},{src:"You do not need albuterol.",display_src:"You do not need albuterol.",ref:"Sie brauchen kein Albuterol.",show_ref:!1},{src:"You do not need prednisone.",display_src:"You do not need prednisone.",ref:"Sie benötigen kein Prednison.",show_ref:!1},{src:"You do not need hydrochlorothiazide.",display_src:"You do not need hydrochlorothiazide.",ref:"Sie benötigen kein Hydrochlorothiazid.",show_ref:!1},{src:"You do not need gabapentin.",display_src:"You do not need gabapentin.",ref:"Sie benötigen kein Gabapentin.",show_ref:!1},{src:"You do not need ibuprofen for the common cold.",display_src:"You do not need ibuprofen for the common cold.",ref:"Bei einer Erkältung benötigen Sie kein Ibuprofen.",show_ref:!1},{src:"You do not need antibiotics for viral infections.",display_src:"You do not need antibiotics for viral infections.",ref:"Bei Virusinfektionen benötigen Sie keine Antibiotika.",show_ref:!1},{src:"You do not need antacids for acute bronchitis.",display_src:"You do not need antacids for acute bronchitis.",ref:"Bei einer akuten Bronchitis benötigen Sie keine Antazida.",show_ref:!1},{src:"You do not need insulin for mild hypoglycemia.",display_src:"You do not need insulin for mild hypoglycemia.",ref:"Bei einer leichten Hypoglykämie ist kein Insulin erforderlich.",show_ref:!1},{src:"You do not need antihistamines for urinary tract infections.",display_src:"You do not need antihistamines for urinary tract infections.",ref:"Bei Harnwegsinfektionen benötigen Sie keine Antihistaminika.",show_ref:!1},{src:"You do not need corticosteroids for tension headaches.",display_src:"You do not need corticosteroids for tension headaches.",ref:"Bei Spannungskopfschmerzen benötigen Sie keine Kortikosteroide.",show_ref:!1},{src:"You do not need anticoagulants for seasonal allergies.",display_src:"You do not need anticoagulants for seasonal allergies.",ref:"Bei saisonalen Allergien benötigen Sie keine Antikoagulanzien.",show_ref:!1},{src:"You do not need antidepressants for insect bites.",display_src:"You do not need antidepressants for insect bites.",ref:"Bei Insektenstichen braucht man keine Antidepressiva.",show_ref:!1},{src:"You do not need anti-anxiety medications for mild sunburn.",display_src:"You do not need anti-anxiety medications for mild sunburn.",ref:"Bei einem leichten Sonnenbrand benötigen Sie keine angstlösenden Medikamente.",show_ref:!1},{src:"You do not need antifungal medications for muscle strains.",display_src:"You do not need antifungal medications for muscle strains.",ref:"Bei Muskelzerrungen benötigen Sie keine antimykotischen Medikamente.",show_ref:!1},{src:"We are increasing your dose of metformin to better manage your blood sugar levels.",display_src:"We are increasing your dose of metformin to better manage your blood sugar levels.",ref:"Wir erhöhen Ihre Metformin-Dosis, um Ihren Blutzuckerspiegel besser kontrollieren zu können.",show_ref:!1},{src:"We are increasing your dose of lisinopril to further lower your blood pressure.",display_src:"We are increasing your dose of lisinopril to further lower your blood pressure.",ref:"Wir erhöhen Ihre Lisinopril-Dosis, um Ihren Blutdruck weiter zu senken.",show_ref:!1},{src:"We are increasing your dose of levothyroxine to optimize your thyroid hormone levels.",display_src:"We are increasing your dose of levothyroxine to optimize your thyroid hormone levels.",ref:"Wir erhöhen Ihre Levothyroxin-Dosis, um Ihren Schilddrüsenhormonspiegel zu optimieren.",show_ref:!1},{src:"We are increasing your dose of gabapentin to improve your nerve pain management.",display_src:"We are increasing your dose of gabapentin to improve your nerve pain management.",ref:"Wir erhöhen Ihre Gabapentin-Dosis, um die Behandlung Ihrer Nervenschmerzen zu verbessern.",show_ref:!1},{src:"We are increasing your dose of sertraline to enhance your depression and anxiety treatment.",display_src:"We are increasing your dose of sertraline to enhance your depression and anxiety treatment.",ref:"Wir erhöhen Ihre Sertralin-Dosis, um Ihre Behandlung von Depressionen und Angstzuständen zu verbessern.",show_ref:!1},{src:"We are increasing your dose of furosemide to reduce excess fluid retention.",display_src:"We are increasing your dose of furosemide to reduce excess fluid retention.",ref:"Wir erhöhen Ihre Furosemid-Dosis, um übermäßige Flüssigkeitsansammlungen zu reduzieren.",show_ref:!1},{src:"We are increasing your dose of hydrochlorothiazide to further control your hypertension.",display_src:"We are increasing your dose of hydrochlorothiazide to further control your hypertension.",ref:"Wir erhöhen Ihre Hydrochlorothiazid-Dosis, um Ihren Bluthochdruck weiter zu kontrollieren.",show_ref:!1},{src:"We are increasing your dose of warfarin to maintain a proper blood clot prevention.",display_src:"We are increasing your dose of warfarin to maintain a proper blood clot prevention.",ref:"Wir erhöhen Ihre Warfarin-Dosis, um eine ordnungsgemäße Vorbeugung von Blutgerinnseln sicherzustellen.",show_ref:!1},{src:"We are increasing your dose of atorvastatin to lower your cholesterol levels effectively.",display_src:"We are increasing your dose of atorvastatin to lower your cholesterol levels effectively.",ref:"Wir erhöhen Ihre Atorvastatin-Dosis, um Ihren Cholesterinspiegel wirksam zu senken.",show_ref:!1},{src:"We are increasing your dose of pregabalin to alleviate your neuropathic pain symptoms.",display_src:"We are increasing your dose of pregabalin to alleviate your neuropathic pain symptoms.",ref:"Wir erhöhen Ihre Pregabalin-Dosis, um Ihre neuropathischen Schmerzsymptome zu lindern.",show_ref:!1},{src:"We are decreasing your dose of Lisinopril.",display_src:"We are decreasing your dose of Lisinopril.",ref:"Wir verringern Ihre Lisinopril-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Metformin.",display_src:"We are decreasing your dose of Metformin.",ref:"Wir verringern Ihre Metformin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Simvastatin.",display_src:"We are decreasing your dose of Simvastatin.",ref:"Wir verringern Ihre Simvastatin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Amlodipine.",display_src:"We are decreasing your dose of Amlodipine.",ref:"Wir verringern Ihre Amlodipin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Atorvastatin.",display_src:"We are decreasing your dose of Atorvastatin.",ref:"Wir verringern Ihre Atorvastatin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Hydrochlorothiazide.",display_src:"We are decreasing your dose of Hydrochlorothiazide.",ref:"Wir verringern Ihre Hydrochlorothiazid-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Warfarin.",display_src:"We are decreasing your dose of Warfarin.",ref:"Wir verringern Ihre Warfarin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Furosemide.",display_src:"We are decreasing your dose of Furosemide.",ref:"Wir reduzieren Ihre Furosemid-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Levothyroxine.",display_src:"We are decreasing your dose of Levothyroxine.",ref:"Wir verringern Ihre Levothyroxin-Dosis.",show_ref:!1},{src:"We are decreasing your dose of Omeprazole.",display_src:"We are decreasing your dose of Omeprazole.",ref:"Wir verringern Ihre Omeprazol-Dosis.",show_ref:!1},{src:"Please increase your Metformin to 1000 mg twice daily for 4 weeks starting August 1, 2022.",display_src:"Please increase your Metformin to 1000 mg twice daily for 4 weeks starting August 1, 2022.",ref:"Bitte erhöhen Sie Ihre Metformin-Dosis ab dem 1. August 2022 4 Wochen lang zweimal täglich auf 1000 mg.",show_ref:!1},{src:"Please increase your Lisinopril to 20 mg once daily for 6 weeks starting September 15, 2022.",display_src:"Please increase your Lisinopril to 20 mg once daily for 6 weeks starting September 15, 2022.",ref:"Bitte erhöhen Sie ab dem 15. September 2022 6 Wochen lang Ihre Lisinopril-Dosis einmal täglich auf 20 mg.",show_ref:!1},{src:"Please increase your Amlodipine to 10 mg every morning for 2 months starting October 10, 2022.",display_src:"Please increase your Amlodipine to 10 mg every morning for 2 months starting October 10, 2022.",ref:"Bitte erhöhen Sie ab dem 10. Oktober 2022 2 Monate lang jeden Morgen Ihre Amlodipin-Dosis auf 10 mg.",show_ref:!1},{src:"Please increase your Atorvastatin to 40 mg every night for 3 months starting November 20, 2022.",display_src:"Please increase your Atorvastatin to 40 mg every night for 3 months starting November 20, 2022.",ref:"Bitte erhöhen Sie ab dem 20. November 2022 3 Monate lang Ihre Atorvastatin-Dosis jede Nacht auf 40 mg.",show_ref:!1},{src:"Please increase your Furosemide to 40 mg twice daily for 1 month starting December 1, 2022.",display_src:"Please increase your Furosemide to 40 mg twice daily for 1 month starting December 1, 2022.",ref:"Bitte erhöhen Sie Ihre Furosemiddosis ab dem 1. Dezember 2022 einen Monat lang zweimal täglich auf 40 mg.",show_ref:!1},{src:"Please increase your Levothyroxine to 100 mcg daily for 8 weeks starting January 15, 2023.",display_src:"Please increase your Levothyroxine to 100 mcg daily for 8 weeks starting January 15, 2023.",ref:"Bitte erhöhen Sie Ihre Levothyroxin-Dosis ab dem 15. Januar 2023 8 Wochen lang auf 100 µg täglich.",show_ref:!1},{src:"Please increase your Gabapentin to 300 mg three times a day for 6 weeks starting February 28, 2023.",display_src:"Please increase your Gabapentin to 300 mg three times a day for 6 weeks starting February 28, 2023.",ref:"Bitte erhöhen Sie Ihre Gabapentin-Dosis auf 300 mg dreimal täglich für 6 Wochen ab dem 28. Februar 2023.",show_ref:!1},{src:"Please increase your Omeprazole to 40 mg once daily for 4 weeks starting March 30, 2023.",display_src:"Please increase your Omeprazole to 40 mg once daily for 4 weeks starting March 30, 2023.",ref:"Bitte erhöhen Sie ab dem 30. März 2023 Ihre Omeprazol-Dosis einmal täglich für 4 Wochen auf 40 mg.",show_ref:!1},{src:"Please increase your Sertraline to 100 mg every morning for 2 months starting April 25, 2023.",display_src:"Please increase your Sertraline to 100 mg every morning for 2 months starting April 25, 2023.",ref:"Bitte erhöhen Sie ab dem 25. April 2023 2 Monate lang jeden Morgen Ihre Sertralindosis auf 100 mg.",show_ref:!1},{src:"Please increase your Trazodone to 50 mg every night for 6 weeks starting May 31, 2023.",display_src:"Please increase your Trazodone to 50 mg every night for 6 weeks starting May 31, 2023.",ref:"Bitte erhöhen Sie Ihre Trazodon-Dosis ab dem 31. Mai 2023 6 Wochen lang jede Nacht auf 50 mg.",show_ref:!1},{src:"Please decrease your Metformin to 500 milligrams twice daily for 2 weeks starting June 1st, 2022.",display_src:"Please decrease your Metformin to 500 milligrams twice daily for 2 weeks starting June 1st, 2022.",ref:"Bitte reduzieren Sie Ihre Metformin-Dosis ab dem 1. Juni 2022 zwei Wochen lang zweimal täglich auf 500 Milligramm.",show_ref:!1},{src:"Please decrease your Lisinopril to 10 milligrams once daily for 4 weeks starting July 15th, 2022.",display_src:"Please decrease your Lisinopril to 10 milligrams once daily for 4 weeks starting July 15th, 2022.",ref:"Bitte reduzieren Sie ab dem 15. Juli 2022 Ihre Lisinopril-Dosis einmal täglich für 4 Wochen auf 10 Milligramm.",show_ref:!1},{src:"Please decrease your Amlodipine to 2.5 milligrams every morning for 1 month starting August 10th, 2022.",display_src:"Please decrease your Amlodipine to 2.5 milligrams every morning for 1 month starting August 10th, 2022.",ref:"Bitte reduzieren Sie ab dem 10. August 2022 einen Monat lang jeden Morgen Ihre Amlodipin-Dosis auf 2,5 Milligramm.",show_ref:!1},{src:"Please decrease your Atorvastatin to 20 milligrams every evening for 3 weeks starting September 5th, 2022.",display_src:"Please decrease your Atorvastatin to 20 milligrams every evening for 3 weeks starting September 5th, 2022.",ref:"Bitte reduzieren Sie ab dem 5. September 2022 3 Wochen lang jeden Abend Ihre Atorvastatin-Dosis auf 20 Milligramm.",show_ref:!1},{src:"Please decrease your Warfarin to 3 milligrams daily for 10 days starting October 20th, 2022.",display_src:"Please decrease your Warfarin to 3 milligrams daily for 10 days starting October 20th, 2022.",ref:"Bitte reduzieren Sie Ihre Warfarin-Dosis ab dem 20. Oktober 2022 für 10 Tage auf 3 Milligramm täglich.",show_ref:!1},{src:"Please decrease your Furosemide to 20 milligrams once daily for 2 weeks starting November 15th, 2022.",display_src:"Please decrease your Furosemide to 20 milligrams once daily for 2 weeks starting November 15th, 2022.",ref:"Bitte reduzieren Sie Ihre Furosemid-Dosis ab dem 15. November 2022 zwei Wochen lang einmal täglich auf 20 Milligramm.",show_ref:!1},{src:"Please decrease your Levothyroxine to 50 micrograms every morning for 1 month starting December 4th, 2022.",display_src:"Please decrease your Levothyroxine to 50 micrograms every morning for 1 month starting December 4th, 2022.",ref:"Bitte reduzieren Sie ab dem 4. Dezember 2022 einen Monat lang jeden Morgen Ihre Levothyroxin-Dosis auf 50 Mikrogramm.",show_ref:!1},{src:"Please decrease your Omeprazole to 20 milligrams once daily for 6 weeks starting January 18th, 2023.",display_src:"Please decrease your Omeprazole to 20 milligrams once daily for 6 weeks starting January 18th, 2023.",ref:"Bitte reduzieren Sie Ihre Omeprazol-Dosis ab dem 18. Januar 2023 für 6 Wochen einmal täglich auf 20 Milligramm.",show_ref:!1},{src:"Please decrease your Prednisone to 5 milligrams twice daily for 2 weeks starting February 22nd, 2023.",display_src:"Please decrease your Prednisone to 5 milligrams twice daily for 2 weeks starting February 22nd, 2023.",ref:"Bitte reduzieren Sie Ihre Prednison-Dosis ab dem 22. Februar 2023 zwei Wochen lang zweimal täglich auf 5 Milligramm.",show_ref:!1},{src:"Please decrease your Gabapentin to 300 milligrams three times daily for 3 weeks starting March 30th, 2023.",display_src:"Please decrease your Gabapentin to 300 milligrams three times daily for 3 weeks starting March 30th, 2023.",ref:"Bitte reduzieren Sie Ihre Gabapentin-Dosis ab dem 30. März 2023 drei Wochen lang dreimal täglich auf 300 Milligramm.",show_ref:!1},{src:"Please continue to take your medications as prescribed.",display_src:"Please continue to take your medications as prescribed.",ref:"Bitte nehmen Sie Ihre Medikamente weiterhin wie verordnet ein.",show_ref:!1},{src:"Continue your other medications as prescribed.",display_src:"Continue your other medications as prescribed.",ref:"Setzen Sie Ihre anderen Medikamente wie verordnet fort.",show_ref:!1},{src:"Continue taking Amoxicillin until your follow-up appointment with Dr. Smith.",display_src:"Continue taking Amoxicillin until your follow-up appointment with Dr. Smith.",ref:"Nehmen Sie Amoxicillin weiterhin bis zu Ihrem Folgetermin bei Dr. Smith ein.",show_ref:!1},{src:"Continue taking Lisinopril until your follow-up appointment with Nurse Practitioner Johnson.",display_src:"Continue taking Lisinopril until your follow-up appointment with Nurse Practitioner Johnson.",ref:"Nehmen Sie Lisinopril weiterhin bis zu Ihrem Folgetermin bei Nurse Practitioner Johnson ein.",show_ref:!1},{src:"Continue taking Metformin until your follow-up appointment with Dr. Patel.",display_src:"Continue taking Metformin until your follow-up appointment with Dr. Patel.",ref:"Nehmen Sie Metformin weiterhin bis zu Ihrem Folgetermin bei Dr. Patel ein.",show_ref:!1},{src:"Continue taking Atenolol until your follow-up appointment with Dr. Thompson.",display_src:"Continue taking Atenolol until your follow-up appointment with Dr. Thompson.",ref:"Nehmen Sie Atenolol weiterhin bis zu Ihrem Folgetermin bei Dr. Thompson ein.",show_ref:!1},{src:"Continue taking Simvastatin until your follow-up appointment with Dr. Martinez.",display_src:"Continue taking Simvastatin until your follow-up appointment with Dr. Martinez.",ref:"Nehmen Sie Simvastatin weiterhin bis zu Ihrem Folgetermin bei Dr. Martinez ein.",show_ref:!1},{src:"Continue taking Omeprazole until your follow-up appointment with Physician Assistant Davis.",display_src:"Continue taking Omeprazole until your follow-up appointment with Physician Assistant Davis.",ref:"Nehmen Sie Omeprazol weiterhin bis zu Ihrem Folgetermin bei Arzthelferin Davis ein.",show_ref:!1},{src:"Continue taking Losartan until your follow-up appointment with Dr. Taylor.",display_src:"Continue taking Losartan until your follow-up appointment with Dr. Taylor.",ref:"Nehmen Sie Losartan weiterhin bis zu Ihrem Folgetermin bei Dr. Taylor ein.",show_ref:!1},{src:"Continue taking Hydrochlorothiazide until your follow-up appointment with Nurse Practitioner Williams.",display_src:"Continue taking Hydrochlorothiazide until your follow-up appointment with Nurse Practitioner Williams.",ref:"Nehmen Sie Hydrochlorothiazid weiterhin bis zu Ihrem Folgetermin bei der Krankenschwester Williams ein.",show_ref:!1},{src:"Continue taking Gabapentin until your follow-up appointment with Dr. Anderson.",display_src:"Continue taking Gabapentin until your follow-up appointment with Dr. Anderson.",ref:"Nehmen Sie Gabapentin weiterhin bis zu Ihrem Folgetermin bei Dr. Anderson ein.",show_ref:!1},{src:"Continue taking Sertraline until your follow-up appointment with Dr. Brown.",display_src:"Continue taking Sertraline until your follow-up appointment with Dr. Brown.",ref:"Nehmen Sie Sertralin weiterhin bis zu Ihrem Folgetermin bei Dr. Brown ein.",show_ref:!1},{src:"Continue taking Amoxicillin for 7 days.",display_src:"Continue taking Amoxicillin for 7 days.",ref:"Nehmen Sie Amoxicillin 7 Tage lang weiter ein.",show_ref:!1},{src:"Continue taking Ibuprofen for 5 days.",display_src:"Continue taking Ibuprofen for 5 days.",ref:"Nehmen Sie Ibuprofen weiterhin 5 Tage lang ein.",show_ref:!1},{src:"Continue taking Prednisone for 14 days.",display_src:"Continue taking Prednisone for 14 days.",ref:"Nehmen Sie Prednison weiterhin 14 Tage lang ein.",show_ref:!1},{src:"Continue taking Metformin for 30 days.",display_src:"Continue taking Metformin for 30 days.",ref:"Nehmen Sie Metformin weiterhin 30 Tage lang ein.",show_ref:!1},{src:"Continue taking Lisinopril for 90 days.",display_src:"Continue taking Lisinopril for 90 days.",ref:"Nehmen Sie Lisinopril weiterhin 90 Tage lang ein.",show_ref:!1},{src:"Continue taking Atenolol for 60 days.",display_src:"Continue taking Atenolol for 60 days.",ref:"Nehmen Sie Atenolol weiterhin 60 Tage lang ein.",show_ref:!1},{src:"Continue taking Omeprazole for 21 days.",display_src:"Continue taking Omeprazole for 21 days.",ref:"Nehmen Sie Omeprazol weiterhin 21 Tage lang ein.",show_ref:!1},{src:"Continue taking Ciprofloxacin for 10 days.",display_src:"Continue taking Ciprofloxacin for 10 days.",ref:"Nehmen Sie Ciprofloxacin weiterhin 10 Tage lang ein.",show_ref:!1},{src:"Continue taking Warfarin for 6 months.",display_src:"Continue taking Warfarin for 6 months.",ref:"Nehmen Sie Warfarin weiterhin 6 Monate lang ein.",show_ref:!1},{src:"Continue taking Simvastatin for 3 months.",display_src:"Continue taking Simvastatin for 3 months.",ref:"Nehmen Sie Simvastatin weiterhin 3 Monate lang ein.",show_ref:!1},{src:"Continue taking Amoxicillin 500 milligrams every 8 hours for the next 7 days.",display_src:"Continue taking Amoxicillin 500 milligrams every 8 hours for the next 7 days.",ref:"Nehmen Sie in den nächsten 7 Tagen weiterhin alle 8 Stunden Amoxicillin 500 Milligramm ein.",show_ref:!1},{src:"Continue taking Atenolol 50 milligrams once daily in the morning for the next 30 days.",display_src:"Continue taking Atenolol 50 milligrams once daily in the morning for the next 30 days.",ref:"Nehmen Sie Atenolol 50 Milligramm weiterhin einmal täglich morgens für die nächsten 30 Tage ein.",show_ref:!1},{src:"Continue taking Lisinopril 10 milligrams once daily in the evening for the next 3 months.",display_src:"Continue taking Lisinopril 10 milligrams once daily in the evening for the next 3 months.",ref:"Nehmen Sie in den nächsten 3 Monaten weiterhin 10 Milligramm Lisinopril einmal täglich abends ein.",show_ref:!1},{src:"Continue taking Metformin 500 milligrams twice daily with meals for the next 6 months.",display_src:"Continue taking Metformin 500 milligrams twice daily with meals for the next 6 months.",ref:"Nehmen Sie in den nächsten 6 Monaten weiterhin zweimal täglich 500 Milligramm Metformin zu den Mahlzeiten ein.",show_ref:!1},{src:"Continue taking Simvastatin 20 milligrams once daily at bedtime for the next 90 days.",display_src:"Continue taking Simvastatin 20 milligrams once daily at bedtime for the next 90 days.",ref:"Nehmen Sie während der nächsten 90 Tage weiterhin einmal täglich 20 Milligramm Simvastatin vor dem Schlafengehen ein.",show_ref:!1},{src:"Continue taking Warfarin 2.5 milligrams once daily in the afternoon for the next 12 weeks.",display_src:"Continue taking Warfarin 2.5 milligrams once daily in the afternoon for the next 12 weeks.",ref:"Nehmen Sie in den nächsten 12 Wochen weiterhin 2,5 Milligramm Warfarin einmal täglich nachmittags ein.",show_ref:!1},{src:"Continue taking Prednisone 10 milligrams once daily in the morning for the next 14 days.",display_src:"Continue taking Prednisone 10 milligrams once daily in the morning for the next 14 days.",ref:"Nehmen Sie in den nächsten 14 Tagen weiterhin einmal täglich 10 Milligramm Prednison morgens ein.",show_ref:!1},{src:"Continue taking Pantoprazole 40 milligrams once daily before breakfast for the next 8 weeks.",display_src:"Continue taking Pantoprazole 40 milligrams once daily before breakfast for the next 8 weeks.",ref:"Nehmen Sie Pantoprazol in den nächsten 8 Wochen weiterhin einmal täglich 40 Milligramm vor dem Frühstück ein.",show_ref:!1},{src:"Continue taking Hydrochlorothiazide 25 milligrams once daily in the morning for the next 60 days.",display_src:"Continue taking Hydrochlorothiazide 25 milligrams once daily in the morning for the next 60 days.",ref:"Nehmen Sie in den nächsten 60 Tagen weiterhin einmal täglich 25 Milligramm Hydrochlorothiazid morgens ein.",show_ref:!1},{src:"Continue taking Allopurinol 300 milligrams once daily in the evening for the next 180 days.",display_src:"Continue taking Allopurinol 300 milligrams once daily in the evening for the next 180 days.",ref:"Nehmen Sie Allopurinol 300 Milligramm weiterhin einmal täglich abends für die nächsten 180 Tage ein.",show_ref:!1},{src:"Do NOT take ibuprofen for 48 hours after your surgery.",display_src:"Do NOT take ibuprofen for 48 hours after your surgery.",ref:"Nehmen Sie 48 Stunden nach der Operation KEIN Ibuprofen ein.",show_ref:!1},{src:"Do NOT take aspirin for 7 days before your scheduled procedure.",display_src:"Do NOT take aspirin for 7 days before your scheduled procedure.",ref:"Nehmen Sie 7 Tage vor Ihrem geplanten Eingriff KEIN Aspirin ein.",show_ref:!1},{src:"Do NOT take naproxen for 72 hours if you experience gastrointestinal bleeding.",display_src:"Do NOT take naproxen for 72 hours if you experience gastrointestinal bleeding.",ref:"Nehmen Sie Naproxen 72 Stunden lang NICHT ein, wenn bei Ihnen Magen-Darm-Blutungen auftreten.",show_ref:!1},{src:"Do NOT take metformin for 48 hours after receiving contrast dye for an imaging study.",display_src:"Do NOT take metformin for 48 hours after receiving contrast dye for an imaging study.",ref:"Nehmen Sie Metformin 48 Stunden lang NICHT ein, nachdem Sie für eine bildgebende Untersuchung Kontrastmittel erhalten haben.",show_ref:!1},{src:"Do NOT take warfarin for 5 days prior to an invasive dental treatment.",display_src:"Do NOT take warfarin for 5 days prior to an invasive dental treatment.",ref:"Nehmen Sie Warfarin 5 Tage vor einer invasiven Zahnbehandlung NICHT ein.",show_ref:!1},{src:"Do NOT take ACE inhibitors for 24 hours before a kidney function test.",display_src:"Do NOT take ACE inhibitors for 24 hours before a kidney function test.",ref:"Nehmen Sie 24 Stunden vor einem Nierenfunktionstest KEINE ACE-Hemmer ein.",show_ref:!1},{src:"Do NOT take diuretics for 12 hours before a blood pressure check-up.",display_src:"Do NOT take diuretics for 12 hours before a blood pressure check-up.",ref:"Nehmen Sie 12 Stunden vor einer Blutdruckuntersuchung KEINE Diuretika ein.",show_ref:!1},{src:"Do NOT take antacids for 2 hours before or after taking your antibiotic medication.",display_src:"Do NOT take antacids for 2 hours before or after taking your antibiotic medication.",ref:"Nehmen Sie 2 Stunden vor oder nach der Einnahme Ihres Antibiotikums KEINE Antazida ein.",show_ref:!1},{src:"Do NOT take oral contraceptives for 4 weeks following a major surgery.",display_src:"Do NOT take oral contraceptives for 4 weeks following a major surgery.",ref:"Nehmen Sie nach einer größeren Operation 4 Wochen lang KEINE oralen Kontrazeptiva ein.",show_ref:!1},{src:"Do NOT take NSAIDs for 6 hours before a blood test to check for liver function.",display_src:"Do NOT take NSAIDs for 6 hours before a blood test to check for liver function.",ref:"Nehmen Sie 6 Stunden vor einer Blutuntersuchung zur Überprüfung der Leberfunktion KEINE NSAIDs ein.",show_ref:!1},{src:"Do NOT take Warfarin until your follow-up appointment with Dr. Thompson.",display_src:"Do NOT take Warfarin until your follow-up appointment with Dr. Thompson.",ref:"Nehmen Sie Warfarin NICHT bis zu Ihrem Folgetermin bei Dr. Thompson ein.",show_ref:!1},{src:"Do NOT take Lisinopril until your follow-up appointment with Nurse Practitioner Johnson.",display_src:"Do NOT take Lisinopril until your follow-up appointment with Nurse Practitioner Johnson.",ref:"Nehmen Sie Lisinopril NICHT bis zu Ihrem Folgetermin bei Nurse Practitioner Johnson ein.",show_ref:!1},{src:"Do NOT take Metformin until your follow-up appointment with Dr. Patel.",display_src:"Do NOT take Metformin until your follow-up appointment with Dr. Patel.",ref:"Nehmen Sie Metformin NICHT bis zu Ihrem Folgetermin bei Dr. Patel ein.",show_ref:!1},{src:"Do NOT take Furosemide until your follow-up appointment with Physician Assistant Smith.",display_src:"Do NOT take Furosemide until your follow-up appointment with Physician Assistant Smith.",ref:"Nehmen Sie Furosemid NICHT bis zu Ihrem Folgetermin bei Arzthelferin Smith ein.",show_ref:!1},{src:"Do NOT take Atorvastatin until your follow-up appointment with Dr. Garcia.",display_src:"Do NOT take Atorvastatin until your follow-up appointment with Dr. Garcia.",ref:"Nehmen Sie Atorvastatin NICHT bis zu Ihrem Folgetermin bei Dr. Garcia ein.",show_ref:!1},{src:"Do NOT take Gabapentin until your follow-up appointment with Nurse Practitioner Lee.",display_src:"Do NOT take Gabapentin until your follow-up appointment with Nurse Practitioner Lee.",ref:"Nehmen Sie Gabapentin NICHT bis zu Ihrem Folgetermin bei der Krankenschwester Lee ein.",show_ref:!1},{src:"Do NOT take Omeprazole until your follow-up appointment with Dr. Martinez.",display_src:"Do NOT take Omeprazole until your follow-up appointment with Dr. Martinez.",ref:"Nehmen Sie Omeprazol NICHT bis zu Ihrem Folgetermin bei Dr. Martinez ein.",show_ref:!1},{src:"Do NOT take Amlodipine until your follow-up appointment with Physician Assistant Taylor.",display_src:"Do NOT take Amlodipine until your follow-up appointment with Physician Assistant Taylor.",ref:"Nehmen Sie Amlodipin NICHT bis zu Ihrem Folgetermin bei Arzthelferin Taylor ein.",show_ref:!1},{src:"Do NOT take Hydrochlorothiazide until your follow-up appointment with Dr. Williams.",display_src:"Do NOT take Hydrochlorothiazide until your follow-up appointment with Dr. Williams.",ref:"Nehmen Sie Hydrochlorothiazid NICHT bis zu Ihrem Folgetermin bei Dr. Williams ein.",show_ref:!1},{src:"Do NOT take Levothyroxine until your follow-up appointment with Nurse Practitioner Anderson.",display_src:"Do NOT take Levothyroxine until your follow-up appointment with Nurse Practitioner Anderson.",ref:"Nehmen Sie Levothyroxin NICHT bis zu Ihrem Folgetermin bei Nurse Practitioner Anderson ein.",show_ref:!1},{src:"Take Amoxicillin 500 milligrams every 8 hours for 7 days for your bacterial infection.",display_src:"Take Amoxicillin 500 milligrams every 8 hours for 7 days for your bacterial infection.",ref:"Nehmen Sie 7 Tage lang alle 8 Stunden 500 Milligramm Amoxicillin zur Behandlung Ihrer bakteriellen Infektion ein.",show_ref:!1},{src:"Take Ibuprofen 200 milligrams every 4 to 6 hours as needed for pain or fever.",display_src:"Take Ibuprofen 200 milligrams every 4 to 6 hours as needed for pain or fever.",ref:"Nehmen Sie bei Bedarf alle 4 bis 6 Stunden 200 Milligramm Ibuprofen gegen Schmerzen oder Fieber ein.",show_ref:!1},{src:"Take Metformin 1000 milligrams twice daily with meals for blood sugar control.",display_src:"Take Metformin 1000 milligrams twice daily with meals for blood sugar control.",ref:"Nehmen Sie Metformin 1000 Milligramm zweimal täglich zu den Mahlzeiten ein, um den Blutzuckerspiegel zu kontrollieren.",show_ref:!1},{src:"Take Amlodipine 5 milligrams once daily in the morning for high blood pressure.",display_src:"Take Amlodipine 5 milligrams once daily in the morning for high blood pressure.",ref:"Nehmen Sie Amlodipin 5 Milligramm einmal täglich morgens gegen Bluthochdruck ein.",show_ref:!1},{src:"Take Omeprazole 20 milligrams once daily before breakfast for acid reflux.",display_src:"Take Omeprazole 20 milligrams once daily before breakfast for acid reflux.",ref:"Nehmen Sie Omeprazol 20 Milligramm einmal täglich vor dem Frühstück gegen Sodbrennen ein.",show_ref:!1},{src:"Take Furosemide 40 milligrams every morning for fluid retention.",display_src:"Take Furosemide 40 milligrams every morning for fluid retention.",ref:"Nehmen Sie Furosemid 40 Milligramm jeden Morgen zur Flüssigkeitsretention ein.",show_ref:!1},{src:"Take Sertraline 50 milligrams once daily in the evening for depression.",display_src:"Take Sertraline 50 milligrams once daily in the evening for depression.",ref:"Nehmen Sie Sertralin 50 Milligramm einmal täglich abends gegen Depressionen ein.",show_ref:!1},{src:"Take Simvastatin 20 milligrams once daily at bedtime for high cholesterol.",display_src:"Take Simvastatin 20 milligrams once daily at bedtime for high cholesterol.",ref:"Nehmen Sie bei hohem Cholesterinspiegel einmal täglich 20 Milligramm Simvastatin vor dem Schlafengehen ein.",show_ref:!1},{src:"Take Levothyroxine 100 micrograms once daily on an empty stomach for hypothyroidism.",display_src:"Take Levothyroxine 100 micrograms once daily on an empty stomach for hypothyroidism.",ref:"Nehmen Sie bei Hypothyreose einmal täglich 100 Mikrogramm Levothyroxin auf nüchternen Magen ein.",show_ref:!1},{src:"Take Albuterol inhaler 2 puffs every 4 to 6 hours as needed for shortness of breath.",display_src:"Take Albuterol inhaler 2 puffs every 4 to 6 hours as needed for shortness of breath.",ref:"Nehmen Sie bei Atemnot alle 4 bis 6 Stunden 2 Hübe mit dem Albuterol-Inhalator ein, je nach Bedarf.",show_ref:!1},{src:"Start taking Amoxicillin 500 milligrams every 8 hours for 10 days after leaving the hospital.",display_src:"Start taking Amoxicillin 500 milligrams every 8 hours for 10 days after leaving the hospital.",ref:"Beginnen Sie nach der Entlassung aus dem Krankenhaus 10 Tage lang alle 8 Stunden mit der Einnahme von 500 Milligramm Amoxicillin.",show_ref:!1},{src:"Start taking Ibuprofen 200 milligrams every 6 hours as needed for pain or fever after returning home.",display_src:"Start taking Ibuprofen 200 milligrams every 6 hours as needed for pain or fever after returning home.",ref:"Beginnen Sie bei Bedarf alle 6 Stunden mit der Einnahme von 200 Milligramm Ibuprofen gegen Schmerzen oder Fieber, nachdem Sie nach Hause zurückgekehrt sind.",show_ref:!1},{src:"Start taking Metformin 500 milligrams twice daily with meals after your first meal at home.",display_src:"Start taking Metformin 500 milligrams twice daily with meals after your first meal at home.",ref:"Beginnen Sie mit der Einnahme von Metformin 500 Milligramm zweimal täglich zu den Mahlzeiten nach Ihrer ersten Mahlzeit zu Hause.",show_ref:!1},{src:"Start taking Lisinopril 10 milligrams once daily in the morning after waking up.",display_src:"Start taking Lisinopril 10 milligrams once daily in the morning after waking up.",ref:"Beginnen Sie mit der Einnahme von 10 Milligramm Lisinopril einmal täglich morgens nach dem Aufwachen.",show_ref:!1},{src:"Start taking Atorvastatin 20 milligrams every evening at bedtime after your discharge.",display_src:"Start taking Atorvastatin 20 milligrams every evening at bedtime after your discharge.",ref:"Beginnen Sie mit der Einnahme von 20 Milligramm Atorvastatin jeden Abend vor dem Schlafengehen nach Ihrer Entlassung.",show_ref:!1},{src:"Start taking Furosemide 40 milligrams once daily in the morning after your first breakfast at home.",display_src:"Start taking Furosemide 40 milligrams once daily in the morning after your first breakfast at home.",ref:"Beginnen Sie mit der Einnahme von Furosemid 40 Milligramm einmal täglich morgens nach Ihrem ersten Frühstück zu Hause.",show_ref:!1},{src:"Start taking Amlodipine 5 milligrams once daily with your morning meal after leaving the hospital.",display_src:"Start taking Amlodipine 5 milligrams once daily with your morning meal after leaving the hospital.",ref:"Beginnen Sie mit der Einnahme von 5 Milligramm Amlodipin einmal täglich zu Ihrer Morgenmahlzeit, nachdem Sie das Krankenhaus verlassen haben.",show_ref:!1},{src:"Start taking Omeprazole 20 milligrams once daily before breakfast after your hospital discharge.",display_src:"Start taking Omeprazole 20 milligrams once daily before breakfast after your hospital discharge.",ref:"Beginnen Sie nach Ihrer Entlassung aus dem Krankenhaus mit der Einnahme von 20 Milligramm Omeprazol einmal täglich vor dem Frühstück.",show_ref:!1},{src:"Start taking Levothyroxine 50 micrograms once daily on an empty stomach, 30 minutes before breakfast after you return home.",display_src:"Start taking Levothyroxine 50 micrograms once daily on an empty stomach, 30 minutes before breakfast after you return home.",ref:"Beginnen Sie mit der Einnahme von Levothyroxin 50 Mikrogramm einmal täglich auf nüchternen Magen, 30 Minuten vor dem Frühstück, nachdem Sie nach Hause gekommen sind.",show_ref:!1},{src:"Start taking Warfarin 2.5 milligrams daily in the evening with food after your discharge from the hospital.",display_src:"Start taking Warfarin 2.5 milligrams daily in the evening with food after your discharge from the hospital.",ref:"Beginnen Sie nach Ihrer Entlassung aus dem Krankenhaus mit der Einnahme von 2,5 Milligramm Warfarin täglich abends zusammen mit einer Mahlzeit.",show_ref:!1},{src:"Start taking Amoxicillin 500 milligrams every 8 hours for 7 days starting tomorrow morning.",display_src:"Start taking Amoxicillin 500 milligrams every 8 hours for 7 days starting tomorrow morning.",ref:"Beginnen Sie ab morgen früh 7 Tage lang mit der Einnahme von 500 Milligramm Amoxicillin alle 8 Stunden.",show_ref:!1},{src:"Start taking Lisinopril 10 milligrams once daily in the morning for 30 days beginning the day after discharge.",display_src:"Start taking Lisinopril 10 milligrams once daily in the morning for 30 days beginning the day after discharge.",ref:"Beginnen Sie ab dem Tag nach der Entlassung 30 Tage lang mit der Einnahme von 10 Milligramm Lisinopril einmal täglich morgens.",show_ref:!1},{src:"Start taking Metformin 850 milligrams twice daily with meals for 90 days starting today at lunchtime.",display_src:"Start taking Metformin 850 milligrams twice daily with meals for 90 days starting today at lunchtime.",ref:"Beginnen Sie ab heute Mittag mit der Einnahme von Metformin 850 Milligramm zweimal täglich zu den Mahlzeiten für 90 Tage.",show_ref:!1},{src:"Start taking Atenolol 25 milligrams once daily at bedtime for 14 days, beginning tonight.",display_src:"Start taking Atenolol 25 milligrams once daily at bedtime for 14 days, beginning tonight.",ref:"Beginnen Sie mit der Einnahme von 25 Milligramm Atenolol einmal täglich vor dem Schlafengehen für 14 Tage, beginnend heute Abend.",show_ref:!1},{src:"Start taking Prozac 20 milligrams every morning for 60 days starting on the day of discharge.",display_src:"Start taking Prozac 20 milligrams every morning for 60 days starting on the day of discharge.",ref:"Beginnen Sie ab dem Tag der Entlassung 60 Tage lang jeden Morgen mit der Einnahme von 20 Milligramm Prozac.",show_ref:!1},{src:"Start taking Warfarin 5 milligrams every evening at 6 PM for 21 days, beginning the day after leaving the hospital.",display_src:"Start taking Warfarin 5 milligrams every evening at 6 PM for 21 days, beginning the day after leaving the hospital.",ref:"Beginnen Sie 21 Tage lang jeden Abend um 18 Uhr mit der Einnahme von 5 Milligramm Warfarin, beginnend am Tag nach der Entlassung aus dem Krankenhaus.",show_ref:!1},{src:"Start taking Ciprofloxacin 250 milligrams every 12 hours for 10 days, starting from tomorrow afternoon.",display_src:"Start taking Ciprofloxacin 250 milligrams every 12 hours for 10 days, starting from tomorrow afternoon.",ref:"Beginnen Sie ab morgen Nachmittag mit der Einnahme von 250 Milligramm Ciprofloxacin alle 12 Stunden für 10 Tage.",show_ref:!1},{src:"Start taking Prednisone 40 milligrams once daily in the morning for 5 days, starting the day after your discharge.",display_src:"Start taking Prednisone 40 milligrams once daily in the morning for 5 days, starting the day after your discharge.",ref:"Beginnen Sie mit der Einnahme von Prednison 40 Milligramm einmal täglich morgens für 5 Tage, beginnend am Tag nach Ihrer Entlassung.",show_ref:!1},{src:"Start taking Furosemide 20 milligrams twice daily at 8 AM and 8 PM for 15 days, beginning the day you leave the hospital.",display_src:"Start taking Furosemide 20 milligrams twice daily at 8 AM and 8 PM for 15 days, beginning the day you leave the hospital.",ref:"Beginnen Sie mit der Einnahme von 20 Milligramm Furosemid zweimal täglich um 8:00 Uhr und 20:00 Uhr für 15 Tage, beginnend mit dem Tag, an dem Sie das Krankenhaus verlassen.",show_ref:!1},{src:"Start taking Omeprazole 20 milligrams once daily before breakfast for 30 days starting the day you are discharged.",display_src:"Start taking Omeprazole 20 milligrams once daily before breakfast for 30 days starting the day you are discharged.",ref:"Beginnen Sie ab dem Tag Ihrer Entlassung 30 Tage lang mit der Einnahme von 20 Milligramm Omeprazol einmal täglich vor dem Frühstück.",show_ref:!1},{src:"Stop taking Aspirin for 5 days.",display_src:"Stop taking Aspirin for 5 days.",ref:"Unterbrechen Sie die Einnahme von Aspirin für 5 Tage.",show_ref:!1},{src:"Stop taking Ibuprofen for 48 hours.",display_src:"Stop taking Ibuprofen for 48 hours.",ref:"Unterbrechen Sie die Einnahme von Ibuprofen für 48 Stunden.",show_ref:!1},{src:"Stop taking Metformin for 24 hours.",display_src:"Stop taking Metformin for 24 hours.",ref:"Unterbrechen Sie die Einnahme von Metformin für 24 Stunden.",show_ref:!1},{src:"Stop taking Lisinopril for 2 weeks.",display_src:"Stop taking Lisinopril for 2 weeks.",ref:"Unterbrechen Sie die Einnahme von Lisinopril für 2 Wochen.",show_ref:!1},{src:"Stop taking Warfarin for 72 hours.",display_src:"Stop taking Warfarin for 72 hours.",ref:"Unterbrechen Sie die Einnahme von Warfarin für 72 Stunden.",show_ref:!1},{src:"Stop taking Amoxicillin for 10 days.",display_src:"Stop taking Amoxicillin for 10 days.",ref:"Unterbrechen Sie die Einnahme von Amoxicillin für 10 Tage.",show_ref:!1},{src:"Stop taking Prednisone for 1 week.",display_src:"Stop taking Prednisone for 1 week.",ref:"Unterbrechen Sie die Einnahme von Prednison für eine Woche.",show_ref:!1},{src:"Stop taking Omeprazole for 3 days.",display_src:"Stop taking Omeprazole for 3 days.",ref:"Unterbrechen Sie die Einnahme von Omeprazol für 3 Tage.",show_ref:!1},{src:"Stop taking Amlodipine for 1 month.",display_src:"Stop taking Amlodipine for 1 month.",ref:"Unterbrechen Sie die Einnahme von Amlodipin für einen Monat.",show_ref:!1},{src:"Stop taking Atorvastatin for 2 weeks.",display_src:"Stop taking Atorvastatin for 2 weeks.",ref:"Unterbrechen Sie die Einnahme von Atorvastatin für 2 Wochen.",show_ref:!1},{src:"Stop taking Amoxicillin after 10 days.",display_src:"Stop taking Amoxicillin after 10 days.",ref:"Beenden Sie die Einnahme von Amoxicillin nach 10 Tagen.",show_ref:!1},{src:"Stop taking Lisinopril after 30 days.",display_src:"Stop taking Lisinopril after 30 days.",ref:"Beenden Sie die Einnahme von Lisinopril nach 30 Tagen.",show_ref:!1},{src:"Stop taking Metformin after 12 weeks.",display_src:"Stop taking Metformin after 12 weeks.",ref:"Beenden Sie die Einnahme von Metformin nach 12 Wochen.",show_ref:!1},{src:"Stop taking Omeprazole after 8 weeks.",display_src:"Stop taking Omeprazole after 8 weeks.",ref:"Beenden Sie die Einnahme von Omeprazol nach 8 Wochen.",show_ref:!1},{src:"Stop taking Prednisone after 7 days.",display_src:"Stop taking Prednisone after 7 days.",ref:"Beenden Sie die Einnahme von Prednison nach 7 Tagen.",show_ref:!1},{src:"Stop taking Atorvastatin after 3 months.",display_src:"Stop taking Atorvastatin after 3 months.",ref:"Beenden Sie die Einnahme von Atorvastatin nach 3 Monaten.",show_ref:!1},{src:"Stop taking Hydrochlorothiazide after 2 weeks.",display_src:"Stop taking Hydrochlorothiazide after 2 weeks.",ref:"Beenden Sie die Einnahme von Hydrochlorothiazid nach 2 Wochen.",show_ref:!1},{src:"Stop taking Ibuprofen after 5 days.",display_src:"Stop taking Ibuprofen after 5 days.",ref:"Beenden Sie die Einnahme von Ibuprofen nach 5 Tagen.",show_ref:!1},{src:"Stop taking Ciprofloxacin after 14 days.",display_src:"Stop taking Ciprofloxacin after 14 days.",ref:"Beenden Sie die Einnahme von Ciprofloxacin nach 14 Tagen.",show_ref:!1},{src:"Stop taking Warfarin after 6 months.",display_src:"Stop taking Warfarin after 6 months.",ref:"Beenden Sie die Einnahme von Warfarin nach 6 Monaten.",show_ref:!1},{src:"Stop taking Lisinopril until your follow-up appointment with Dr. Johnson.",display_src:"Stop taking Lisinopril until your follow-up appointment with Dr. Johnson.",ref:"Beenden Sie die Einnahme von Lisinopril bis zu Ihrem Folgetermin bei Dr. Johnson.",show_ref:!1},{src:"Stop taking Metformin until your follow-up appointment with Nurse Practitioner Smith.",display_src:"Stop taking Metformin until your follow-up appointment with Nurse Practitioner Smith.",ref:"Beenden Sie die Einnahme von Metformin bis zu Ihrem Folgetermin bei Nurse Practitioner Smith.",show_ref:!1},{src:"Stop taking Warfarin until your follow-up appointment with Dr. Patel.",display_src:"Stop taking Warfarin until your follow-up appointment with Dr. Patel.",ref:"Beenden Sie die Einnahme von Warfarin bis zu Ihrem Folgetermin bei Dr. Patel.",show_ref:!1},{src:"Stop taking Hydrochlorothiazide until your follow-up appointment with Dr. Thompson.",display_src:"Stop taking Hydrochlorothiazide until your follow-up appointment with Dr. Thompson.",ref:"Beenden Sie die Einnahme von Hydrochlorothiazid bis zu Ihrem Folgetermin bei Dr. Thompson.",show_ref:!1},{src:"Stop taking Atorvastatin until your follow-up appointment with Physician Assistant Davis.",display_src:"Stop taking Atorvastatin until your follow-up appointment with Physician Assistant Davis.",ref:"Beenden Sie die Einnahme von Atorvastatin bis zu Ihrem Folgetermin bei Arzthelferin Davis.",show_ref:!1},{src:"Stop taking Metoprolol until your follow-up appointment with Dr. Garcia.",display_src:"Stop taking Metoprolol until your follow-up appointment with Dr. Garcia.",ref:"Beenden Sie die Einnahme von Metoprolol bis zu Ihrem Folgetermin bei Dr. Garcia.",show_ref:!1},{src:"Stop taking Levothyroxine until your follow-up appointment with Nurse Practitioner Harris.",display_src:"Stop taking Levothyroxine until your follow-up appointment with Nurse Practitioner Harris.",ref:"Beenden Sie die Einnahme von Levothyroxin bis zu Ihrem Folgetermin bei der Krankenschwester Harris.",show_ref:!1},{src:"Stop taking Simvastatin until your follow-up appointment with Dr. Lee.",display_src:"Stop taking Simvastatin until your follow-up appointment with Dr. Lee.",ref:"Beenden Sie die Einnahme von Simvastatin bis zu Ihrem nächsten Termin bei Dr. Lee.",show_ref:!1},{src:"Stop taking Amlodipine until your follow-up appointment with Physician Assistant Walker.",display_src:"Stop taking Amlodipine until your follow-up appointment with Physician Assistant Walker.",ref:"Beenden Sie die Einnahme von Amlodipin bis zu Ihrem nächsten Termin bei Arzthelferin Walker.",show_ref:!1},{src:"Stop taking Amoxicillin until your follow-up appointment with Dr. Rodriguez.",display_src:"Stop taking Amoxicillin until your follow-up appointment with Dr. Rodriguez.",ref:"Beenden Sie die Einnahme von Amoxicillin bis zu Ihrem nächsten Termin bei Dr. Rodriguez.",show_ref:!1},{src:"Please eat before you take ibuprofen.",display_src:"Please eat before you take ibuprofen.",ref:"Bitte essen Sie, bevor Sie Ibuprofen einnehmen.",show_ref:!1},{src:"Please eat before you take metformin.",display_src:"Please eat before you take metformin.",ref:"Bitte essen Sie, bevor Sie Metformin einnehmen.",show_ref:!1},{src:"Please eat before you take amoxicillin.",display_src:"Please eat before you take amoxicillin.",ref:"Bitte essen Sie, bevor Sie Amoxicillin einnehmen.",show_ref:!1},{src:"Please eat before you take lisinopril.",display_src:"Please eat before you take lisinopril.",ref:"Bitte essen Sie, bevor Sie Lisinopril einnehmen.",show_ref:!1},{src:"Please eat before you take atorvastatin.",display_src:"Please eat before you take atorvastatin.",ref:"Bitte essen Sie, bevor Sie Atorvastatin einnehmen.",show_ref:!1},{src:"Please eat before you take levothyroxine.",display_src:"Please eat before you take levothyroxine.",ref:"Bitte essen Sie, bevor Sie Levothyroxin einnehmen.",show_ref:!1},{src:"Please eat before you take gabapentin.",display_src:"Please eat before you take gabapentin.",ref:"Bitte essen Sie, bevor Sie Gabapentin einnehmen.",show_ref:!1},{src:"Please eat before you take azithromycin.",display_src:"Please eat before you take azithromycin.",ref:"Bitte essen Sie, bevor Sie Azithromycin einnehmen.",show_ref:!1},{src:"Please eat before you take omeprazole.",display_src:"Please eat before you take omeprazole.",ref:"Bitte essen Sie, bevor Sie Omeprazol einnehmen.",show_ref:!1},{src:"Please eat before you take prednisone.",display_src:"Please eat before you take prednisone.",ref:"Bitte essen Sie, bevor Sie Prednison einnehmen.",show_ref:!1},{src:"If you develop any side effects or if you have any questions, stop the medication and call the office.",display_src:"If you develop any side effects or if you have any questions, stop the medication and call the office.",ref:"Wenn Sie Nebenwirkungen bemerken oder Fragen haben, brechen Sie das Medikament ab und rufen Sie die Praxis an.",show_ref:!1},{src:"Do not drive or operate machinery for 4 hours after taking Benadryl.",display_src:"Do not drive or operate machinery for 4 hours after taking Benadryl.",ref:"Führen Sie nach der Einnahme von Benadryl 4 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 8 hours after taking Ambien.",display_src:"Do not drive or operate machinery for 8 hours after taking Ambien.",ref:"Führen Sie nach der Einnahme von Ambien 8 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 6 hours after taking Xanax.",display_src:"Do not drive or operate machinery for 6 hours after taking Xanax.",ref:"Führen Sie nach der Einnahme von Xanax 6 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 12 hours after taking Flexeril.",display_src:"Do not drive or operate machinery for 12 hours after taking Flexeril.",ref:"Führen Sie nach der Einnahme von Flexeril 12 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 24 hours after taking Valium.",display_src:"Do not drive or operate machinery for 24 hours after taking Valium.",ref:"Führen Sie nach der Einnahme von Valium 24 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 4 hours after taking Zyrtec.",display_src:"Do not drive or operate machinery for 4 hours after taking Zyrtec.",ref:"Führen Sie nach der Einnahme von Zyrtec 4 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 8 hours after taking Seroquel.",display_src:"Do not drive or operate machinery for 8 hours after taking Seroquel.",ref:"Führen Sie nach der Einnahme von Seroquel 8 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 6 hours after taking Percocet.",display_src:"Do not drive or operate machinery for 6 hours after taking Percocet.",ref:"Führen Sie nach der Einnahme von Percocet 6 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 12 hours after taking Vicodin.",display_src:"Do not drive or operate machinery for 12 hours after taking Vicodin.",ref:"Führen Sie nach der Einnahme von Vicodin 12 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not drive or operate machinery for 24 hours after taking Klonopin.",display_src:"Do not drive or operate machinery for 24 hours after taking Klonopin.",ref:"Führen Sie nach der Einnahme von Klonopin 24 Stunden lang kein Fahrzeug und bedienen Sie keine Maschinen.",show_ref:!1},{src:"Do not take aspirin and ibuprofen at the same time.",display_src:"Do not take aspirin and ibuprofen at the same time.",ref:"Nehmen Sie Aspirin und Ibuprofen nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take warfarin and heparin at the same time.",display_src:"Do not take warfarin and heparin at the same time.",ref:"Nehmen Sie Warfarin und Heparin nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take lisinopril and losartan at the same time.",display_src:"Do not take lisinopril and losartan at the same time.",ref:"Nehmen Sie Lisinopril und Losartan nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take simvastatin and gemfibrozil at the same time.",display_src:"Do not take simvastatin and gemfibrozil at the same time.",ref:"Nehmen Sie Simvastatin und Gemfibrozil nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take metformin and glipizide at the same time.",display_src:"Do not take metformin and glipizide at the same time.",ref:"Nehmen Sie Metformin und Glipizid nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take amoxicillin and azithromycin at the same time.",display_src:"Do not take amoxicillin and azithromycin at the same time.",ref:"Nehmen Sie Amoxicillin und Azithromycin nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take alprazolam and diazepam at the same time.",display_src:"Do not take alprazolam and diazepam at the same time.",ref:"Nehmen Sie Alprazolam und Diazepam nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take furosemide and hydrochlorothiazide at the same time.",display_src:"Do not take furosemide and hydrochlorothiazide at the same time.",ref:"Nehmen Sie Furosemid und Hydrochlorothiazid nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take omeprazole and ranitidine at the same time.",display_src:"Do not take omeprazole and ranitidine at the same time.",ref:"Nehmen Sie Omeprazol und Ranitidin nicht gleichzeitig ein.",show_ref:!1},{src:"Do not take prednisone and dexamethasone at the same time.",display_src:"Do not take prednisone and dexamethasone at the same time.",ref:"Nehmen Sie Prednison und Dexamethason nicht gleichzeitig ein.",show_ref:!1},{src:"Please be careful with these medications and use only when needed.",display_src:"Please be careful with these medications and use only when needed.",ref:"Seien Sie bitte vorsichtig mit diesen Medikamenten und verwenden Sie sie nur bei Bedarf.",show_ref:!1},{src:"Please be careful with ibuprofen and use only when needed.",display_src:"Please be careful with ibuprofen and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Ibuprofen und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with acetaminophen and use only when needed.",display_src:"Please be careful with acetaminophen and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Paracetamol und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with amoxicillin and use only when needed.",display_src:"Please be careful with amoxicillin and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Amoxicillin und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with hydrocodone and use only when needed.",display_src:"Please be careful with hydrocodone and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Hydrocodon und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with lisinopril and use only when needed.",display_src:"Please be careful with lisinopril and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Lisinopril und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with metformin and use only when needed.",display_src:"Please be careful with metformin and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Metformin und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with omeprazole and use only when needed.",display_src:"Please be careful with omeprazole and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Omeprazol und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with prednisone and use only when needed.",display_src:"Please be careful with prednisone and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Prednison und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with warfarin and use only when needed.",display_src:"Please be careful with warfarin and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Warfarin und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Please be careful with albuterol and use only when needed.",display_src:"Please be careful with albuterol and use only when needed.",ref:"Seien Sie bitte vorsichtig mit Albuterol und verwenden Sie es nur bei Bedarf.",show_ref:!1},{src:"Do not take more than 2 grams of Amoxicillin per day.",display_src:"Do not take more than 2 grams of Amoxicillin per day.",ref:"Nehmen Sie nicht mehr als 2 Gramm Amoxicillin pro Tag ein.",show_ref:!1},{src:"Do not take more than 50 milligrams of Atenolol per day.",display_src:"Do not take more than 50 milligrams of Atenolol per day.",ref:"Nehmen Sie nicht mehr als 50 Milligramm Atenolol pro Tag ein.",show_ref:!1},{src:"Do not take more than 4 grams of Paracetamol per day.",display_src:"Do not take more than 4 grams of Paracetamol per day.",ref:"Nehmen Sie nicht mehr als 4 Gramm Paracetamol pro Tag ein.",show_ref:!1},{src:"Do not take more than 300 milligrams of Tramadol per day.",display_src:"Do not take more than 300 milligrams of Tramadol per day.",ref:"Nehmen Sie nicht mehr als 300 Milligramm Tramadol pro Tag ein.",show_ref:!1},{src:"Do not take more than 200 milligrams of Celecoxib per day.",display_src:"Do not take more than 200 milligrams of Celecoxib per day.",ref:"Nehmen Sie nicht mehr als 200 Milligramm Celecoxib pro Tag ein.",show_ref:!1},{src:"Do not take more than 40 milligrams of Omeprazole per day.",display_src:"Do not take more than 40 milligrams of Omeprazole per day.",ref:"Nehmen Sie nicht mehr als 40 Milligramm Omeprazol pro Tag ein.",show_ref:!1},{src:"Do not take more than 1000 milligrams of Metformin per day.",display_src:"Do not take more than 1000 milligrams of Metformin per day.",ref:"Nehmen Sie nicht mehr als 1000 Milligramm Metformin pro Tag ein.",show_ref:!1},{src:"Do not take more than 600 milligrams of Ibuprofen per day.",display_src:"Do not take more than 600 milligrams of Ibuprofen per day.",ref:"Nehmen Sie nicht mehr als 600 Milligramm Ibuprofen pro Tag ein.",show_ref:!1},{src:"Do not take more than 75 milligrams of Clopidogrel per day.",display_src:"Do not take more than 75 milligrams of Clopidogrel per day.",ref:"Nehmen Sie nicht mehr als 75 Milligramm Clopidogrel pro Tag ein.",show_ref:!1},{src:"Do not take more than 20 milligrams of Lisinopril per day.",display_src:"Do not take more than 20 milligrams of Lisinopril per day.",ref:"Nehmen Sie nicht mehr als 20 Milligramm Lisinopril pro Tag ein.",show_ref:!1},{src:"Take acetaminophen for mild to moderate pain relief.",display_src:"Take acetaminophen for mild to moderate pain relief.",ref:"Nehmen Sie Paracetamol zur leichten bis mittelschweren Schmerzlinderung.",show_ref:!1},{src:"Take ibuprofen for inflammation and fever reduction.",display_src:"Take ibuprofen for inflammation and fever reduction.",ref:"Nehmen Sie Ibuprofen zur Entzündungs- und Fiebersenkung.",show_ref:!1},{src:"Take loratadine for seasonal allergy symptoms.",display_src:"Take loratadine for seasonal allergy symptoms.",ref:"Nehmen Sie Loratadin gegen saisonale Allergiesymptome ein.",show_ref:!1},{src:"Take omeprazole for acid reflux and heartburn.",display_src:"Take omeprazole for acid reflux and heartburn.",ref:"Nehmen Sie Omeprazol gegen sauren Reflux und Sodbrennen.",show_ref:!1},{src:"Take metformin for managing blood sugar levels in type 2 diabetes.",display_src:"Take metformin for managing blood sugar levels in type 2 diabetes.",ref:"Nehmen Sie Metformin zur Kontrolle des Blutzuckerspiegels bei Typ-2-Diabetes ein.",show_ref:!1},{src:"Take lisinopril for high blood pressure control.",display_src:"Take lisinopril for high blood pressure control.",ref:"Nehmen Sie Lisinopril zur Kontrolle von Bluthochdruck.",show_ref:!1},{src:"Take furosemide for reducing fluid retention and swelling.",display_src:"Take furosemide for reducing fluid retention and swelling.",ref:"Nehmen Sie Furosemid ein, um Flüssigkeitsansammlungen und Schwellungen zu reduzieren.",show_ref:!1},{src:"Take amoxicillin for bacterial infections.",display_src:"Take amoxicillin for bacterial infections.",ref:"Nehmen Sie Amoxicillin gegen bakterielle Infektionen.",show_ref:!1},{src:"Take albuterol for relief from asthma symptoms and shortness of breath.",display_src:"Take albuterol for relief from asthma symptoms and shortness of breath.",ref:"Nehmen Sie Albuterol zur Linderung von Asthmasymptomen und Atemnot.",show_ref:!1},{src:"Take sertraline for depression and anxiety management.",display_src:"Take sertraline for depression and anxiety management.",ref:"Nehmen Sie Sertralin zur Behandlung von Depressionen und Angstzuständen.",show_ref:!1},{src:"Take ibuprofen to decrease inflammation and pain.",display_src:"Take ibuprofen to decrease inflammation and pain.",ref:"Nehmen Sie Ibuprofen ein, um Entzündungen und Schmerzen zu lindern.",show_ref:!1},{src:"Take acetaminophen to decrease fever and headache.",display_src:"Take acetaminophen to decrease fever and headache.",ref:"Nehmen Sie Paracetamol, um Fieber und Kopfschmerzen zu lindern.",show_ref:!1},{src:"Take antacids to decrease heartburn and acid reflux.",display_src:"Take antacids to decrease heartburn and acid reflux.",ref:"Nehmen Sie Antazida ein, um Sodbrennen und sauren Reflux zu lindern.",show_ref:!1},{src:"Take loratadine to decrease allergy symptoms such as sneezing and itching.",display_src:"Take loratadine to decrease allergy symptoms such as sneezing and itching.",ref:"Nehmen Sie Loratadin ein, um allergische Symptome wie Niesen und Juckreiz zu lindern.",show_ref:!1},{src:"Take ondansetron to decrease nausea and vomiting.",display_src:"Take ondansetron to decrease nausea and vomiting.",ref:"Nehmen Sie Ondansetron ein, um Übelkeit und Erbrechen zu lindern.",show_ref:!1},{src:"Take docusate sodium to decrease constipation.",display_src:"Take docusate sodium to decrease constipation.",ref:"Nehmen Sie Docusat-Natrium ein, um Verstopfung zu lindern.",show_ref:!1},{src:"Take hydrochlorothiazide to decrease high blood pressure.",display_src:"Take hydrochlorothiazide to decrease high blood pressure.",ref:"Nehmen Sie Hydrochlorothiazid, um hohen Blutdruck zu senken.",show_ref:!1},{src:"Take metformin to decrease blood sugar levels in type 2 diabetes.",display_src:"Take metformin to decrease blood sugar levels in type 2 diabetes.",ref:"Nehmen Sie Metformin ein, um den Blutzuckerspiegel bei Typ-2-Diabetes zu senken.",show_ref:!1},{src:"Take albuterol to decrease shortness of breath and wheezing.",display_src:"Take albuterol to decrease shortness of breath and wheezing.",ref:"Nehmen Sie Albuterol, um Atemnot und pfeifende Atemgeräusche zu lindern.",show_ref:!1},{src:"Take amoxicillin to decrease symptoms of bacterial infections, such as sore throat and fever.",display_src:"Take amoxicillin to decrease symptoms of bacterial infections, such as sore throat and fever.",ref:"Nehmen Sie Amoxicillin ein, um die Symptome bakterieller Infektionen wie Halsschmerzen und Fieber zu lindern.",show_ref:!1},{src:"Take ibuprofen to alleviate pain.",display_src:"Take ibuprofen to alleviate pain.",ref:"Nehmen Sie Ibuprofen, um Schmerzen zu lindern.",show_ref:!1},{src:"Take acetaminophen to reduce fever.",display_src:"Take acetaminophen to reduce fever.",ref:"Nehmen Sie Paracetamol, um das Fieber zu senken.",show_ref:!1},{src:"Take loratadine to minimize allergy symptoms.",display_src:"Take loratadine to minimize allergy symptoms.",ref:"Nehmen Sie Loratadin ein, um Allergiesymptome zu minimieren.",show_ref:!1},{src:"Take omeprazole to decrease heartburn.",display_src:"Take omeprazole to decrease heartburn.",ref:"Nehmen Sie Omeprazol ein, um Sodbrennen zu lindern.",show_ref:!1},{src:"Take guaifenesin to thin out mucus.",display_src:"Take guaifenesin to thin out mucus.",ref:"Nehmen Sie Guaifenesin, um den Schleim zu verdünnen.",show_ref:!1},{src:"Take prochlorperazine to lessen nausea.",display_src:"Take prochlorperazine to lessen nausea.",ref:"Nehmen Sie Prochlorperazin ein, um Übelkeit zu lindern.",show_ref:!1},{src:"Take hydrochlorothiazide to lower blood pressure.",display_src:"Take hydrochlorothiazide to lower blood pressure.",ref:"Nehmen Sie Hydrochlorothiazid ein, um den Blutdruck zu senken.",show_ref:!1},{src:"Take metformin to improve blood sugar control.",display_src:"Take metformin to improve blood sugar control.",ref:"Nehmen Sie Metformin ein, um die Blutzuckerkontrolle zu verbessern.",show_ref:!1},{src:"Take docusate to ease constipation.",display_src:"Take docusate to ease constipation.",ref:"Nehmen Sie Docusat, um Verstopfung zu lindern.",show_ref:!1},{src:"Take furosemide to decrease fluid retention.",display_src:"Take furosemide to decrease fluid retention.",ref:"Nehmen Sie Furosemid ein, um die Flüssigkeitsansammlung zu verringern.",show_ref:!1},{src:'Note: The original prompt asked for "increase" in symptom, which would be incorrect for discharge instructions. The revised sentences above are now "to alleviate" or "to decrease" the symptoms.',display_src:'Note: The original prompt asked for "increase" in symptom, which would be incorrect for discharge instructions. The revised sentences above are now "to alleviate" or "to decrease" the symptoms.',ref:"Hinweis: In der ursprünglichen Eingabeaufforderung wurde nach einer „Zunahme“ der Symptome gefragt, was für Entlassungsanweisungen falsch wäre. Die geänderten Sätze oben lauten nun „die Symptome lindern“ oder „vermindern“.",show_ref:!1},{src:"We have NOT made any changes to your medications.",display_src:"We have NOT made any changes to your medications.",ref:"Wir haben KEINE Änderungen an Ihren Medikamenten vorgenommen.",show_ref:!1},{src:"You do not need ibuprofen.",display_src:"You do not need ibuprofen.",ref:"Sie brauchen kein Ibuprofen.",show_ref:!1},{src:"You do not need amoxicillin.",display_src:"You do not need amoxicillin.",ref:"Sie benötigen kein Amoxicillin.",show_ref:!1},{src:"You do not need metformin.",display_src:"You do not need metformin.",ref:"Sie benötigen kein Metformin.",show_ref:!1},{src:"You do not need lisinopril.",display_src:"You do not need lisinopril.",ref:"Sie benötigen kein Lisinopril.",show_ref:!1},{src:"You do not need omeprazole.",display_src:"You do not need omeprazole.",ref:"Sie brauchen kein Omeprazol.",show_ref:!1},{src:"You do not need atorvastatin.",display_src:"You do not need atorvastatin.",ref:"Sie benötigen kein Atorvastatin.",show_ref:!1},{src:"You do not need hydrochlorothiazide.",display_src:"You do not need hydrochlorothiazide.",ref:"Sie benötigen kein Hydrochlorothiazid.",show_ref:!1},{src:"You do not need gabapentin.",display_src:"You do not need gabapentin.",ref:"Sie benötigen kein Gabapentin.",show_ref:!1},{src:"You do not need prednisone.",display_src:"You do not need prednisone.",ref:"Sie benötigen kein Prednison.",show_ref:!1},{src:"You do not need azithromycin.",display_src:"You do not need azithromycin.",ref:"Sie benötigen kein Azithromycin.",show_ref:!1},{src:"Please take your medications according to the instructions.",display_src:"Please take your medications according to the instructions.",ref:"Bitte nehmen Sie Ihre Medikamente entsprechend den Anweisungen ein.",show_ref:!1},{src:"Aspirin can cause stomach pain or upset.",display_src:"Aspirin can cause stomach pain or upset.",ref:"Aspirin kann Magenschmerzen oder Magenbeschwerden verursachen.",show_ref:!1},{src:"Lisinopril can cause dizziness or lightheadedness.",display_src:"Lisinopril can cause dizziness or lightheadedness.",ref:"Lisinopril kann Schwindel und Benommenheit verursachen.",show_ref:!1},{src:"Amoxicillin can cause diarrhea or mild skin rash.",display_src:"Amoxicillin can cause diarrhea or mild skin rash.",ref:"Amoxicillin kann Durchfall oder leichten Hautausschlag verursachen.",show_ref:!1},{src:"Metformin can cause nausea or vomiting.",display_src:"Metformin can cause nausea or vomiting.",ref:"Metformin kann Übelkeit oder Erbrechen verursachen.",show_ref:!1},{src:"Amlodipine can cause swelling in hands or feet.",display_src:"Amlodipine can cause swelling in hands or feet.",ref:"Amlodipin kann Schwellungen an Händen oder Füßen verursachen.",show_ref:!1},{src:"Ibuprofen can cause heartburn or indigestion.",display_src:"Ibuprofen can cause heartburn or indigestion.",ref:"Ibuprofen kann Sodbrennen oder Verdauungsstörungen verursachen.",show_ref:!1},{src:"Warfarin can cause easy bruising or bleeding.",display_src:"Warfarin can cause easy bruising or bleeding.",ref:"Warfarin kann leicht zu blauen Flecken oder Blutungen führen.",show_ref:!1},{src:"Atorvastatin can cause muscle pain or weakness.",display_src:"Atorvastatin can cause muscle pain or weakness.",ref:"Atorvastatin kann Muskelschmerzen oder Muskelschwäche verursachen.",show_ref:!1},{src:"Furosemide can cause increased urination or dehydration.",display_src:"Furosemide can cause increased urination or dehydration.",ref:"Furosemid kann zu vermehrtem Wasserlassen oder Dehydrierung führen.",show_ref:!1},{src:"Omeprazole can cause headache or gas.",display_src:"Omeprazole can cause headache or gas.",ref:"Omeprazol kann Kopfschmerzen oder Blähungen verursachen.",show_ref:!1},{src:"Please adjust your insulin by your scale.",display_src:"Please adjust your insulin by your scale.",ref:"Bitte passen Sie Ihren Insulinspiegel an Ihre Waage an.",show_ref:!1},{src:"Please monitor your symptoms",display_src:"Please monitor your symptoms",ref:"Bitte überwachen Sie Ihre Symptome",show_ref:!1},{src:"Please return to the emergency department if you experience difficulty breathing or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience difficulty breathing or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn bei Ihnen Atembeschwerden auftreten oder neue oder sich verschlimmernde Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience severe chest pain or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience severe chest pain or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn bei Ihnen starke Brustschmerzen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience sudden onset of severe headache or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience sudden onset of severe headache or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn bei Ihnen plötzlich starke Kopfschmerzen auftreten oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience persistent vomiting or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience persistent vomiting or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an die Notaufnahme, wenn bei Ihnen anhaltendes Erbrechen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience significant changes in your vision or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience significant changes in your vision or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn Sie erhebliche Veränderungen Ihres Sehvermögens oder neue oder sich verschlimmernde Symptome bemerken, die Sie beunruhigen.",show_ref:!1},{src:"Please return to the emergency department if you experience uncontrolled bleeding or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience uncontrolled bleeding or any new or worsening symptoms that are concerning.",ref:"Bitte kehren Sie zur Notaufnahme zurück, wenn bei Ihnen unkontrollierte Blutungen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience high fever that does not improve with medication or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience high fever that does not improve with medication or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn bei Ihnen hohes Fieber auftritt, das sich mit Medikamenten nicht bessert, oder wenn bei Ihnen neue oder sich verschlimmernde Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience a sudden loss of consciousness or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience a sudden loss of consciousness or any new or worsening symptoms that are concerning.",ref:"Bitte kehren Sie zur Notaufnahme zurück, wenn bei Ihnen ein plötzlicher Bewusstseinsverlust oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience severe abdominal pain or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience severe abdominal pain or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich erneut an die Notaufnahme, wenn bei Ihnen starke Bauchschmerzen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please return to the emergency department if you experience new or worsening signs of infection, such as redness, swelling, or pus, at the site of a recent surgery or injury or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience new or worsening signs of infection, such as redness, swelling, or pus, at the site of a recent surgery or injury or any new or worsening symptoms that are concerning.",ref:"Bitte kehren Sie zur Notaufnahme zurück, wenn Sie an der Stelle einer kürzlich erfolgten Operation oder Verletzung neue oder sich verschlimmernde Anzeichen einer Infektion wie Rötung, Schwellung oder Eiter bemerken oder neue oder sich verschlimmernde Symptome bemerken, die Anlass zur Sorge geben.",show_ref:!1},{src:"Please contact a healthcare provider if you experience shortness of breath or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience shortness of breath or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen Atemnot auftritt oder neue oder sich verschlimmernde Symptome auftreten, die Sie beunruhigen.",show_ref:!1},{src:"Please contact a healthcare provider if you experience severe or persistent vomiting or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience severe or persistent vomiting or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen schweres oder anhaltendes Erbrechen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please contact a healthcare provider if you experience chest pain or pressure or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience chest pain or pressure or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn Sie Schmerzen oder Druck in der Brust verspüren oder neue oder sich verschlimmernde Symptome haben, die Sie beunruhigen.",show_ref:!1},{src:"Please contact a healthcare provider if you experience severe abdominal pain or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience severe abdominal pain or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen starke Bauchschmerzen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please contact a healthcare provider if you experience uncontrolled bleeding or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience uncontrolled bleeding or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen unkontrollierte Blutungen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please contact a healthcare provider if you experience sudden or severe headaches or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience sudden or severe headaches or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn Sie plötzliche oder starke Kopfschmerzen oder neue oder sich verschlimmernde besorgniserregende Symptome verspüren.",show_ref:!1},{src:"Please contact a healthcare provider if you experience difficulty in swallowing or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience difficulty in swallowing or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen Schluckbeschwerden auftreten oder neue oder sich verschlimmernde Symptome auftreten, die Sie beunruhigen.",show_ref:!1},{src:"Please contact a healthcare provider if you experience persistent or high fever or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience persistent or high fever or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen anhaltendes oder hohes Fieber oder neue oder sich verschlimmernde Symptome auftreten, die Anlass zur Sorge geben.",show_ref:!1},{src:"Please contact a healthcare provider if you experience sudden vision changes or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience sudden vision changes or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn bei Ihnen plötzliche Sehstörungen oder neue oder sich verschlimmernde besorgniserregende Symptome auftreten.",show_ref:!1},{src:"Please contact a healthcare provider if you experience confusion or altered mental status or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience confusion or altered mental status or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn Sie Verwirrung oder einen veränderten Geisteszustand oder neue oder sich verschlimmernde Symptome bemerken, die Sie beunruhigen.",show_ref:!1},{src:"Please call 911 if you experience sudden chest pain or discomfort, which may feel like pressure, squeezing, or fullness.",display_src:"Please call 911 if you experience sudden chest pain or discomfort, which may feel like pressure, squeezing, or fullness.",ref:"Bitte rufen Sie 911 an, wenn Sie plötzlich Schmerzen oder Beschwerden in der Brust verspüren, die sich wie Druck, Quetschen oder Völlegefühl anfühlen können.",show_ref:!1},{src:"Please call 911 if you experience difficulty breathing or shortness of breath that worsens or is not relieved by rest.",display_src:"Please call 911 if you experience difficulty breathing or shortness of breath that worsens or is not relieved by rest.",ref:"Bitte rufen Sie 911 an, wenn Sie Atembeschwerden oder Kurzatmigkeit verspüren, die sich verschlimmern oder durch Ruhe nicht gelindert werden.",show_ref:!1},{src:"Please call 911 if you experience uncontrolled bleeding that does not stop after applying direct pressure.",display_src:"Please call 911 if you experience uncontrolled bleeding that does not stop after applying direct pressure.",ref:"Bitte rufen Sie 911 an, wenn bei Ihnen unkontrollierte Blutungen auftreten, die auch nach direktem Druck nicht aufhören.",show_ref:!1},{src:"Please call 911 if you experience severe weakness or numbness on one side of your body, including your face, arm, or leg.",display_src:"Please call 911 if you experience severe weakness or numbness on one side of your body, including your face, arm, or leg.",ref:"Bitte rufen Sie 911 an, wenn Sie auf einer Körperseite, einschließlich Gesicht, Arm oder Bein, starke Schwäche oder Taubheitsgefühl verspüren.",show_ref:!1},{src:"Please call 911 if you experience sudden, severe headache with no known cause, accompanied by confusion, blurred vision, or loss of consciousness.",display_src:"Please call 911 if you experience sudden, severe headache with no known cause, accompanied by confusion, blurred vision, or loss of consciousness.",ref:"Bitte rufen Sie 911 an, wenn bei Ihnen plötzlich starke Kopfschmerzen ohne bekannte Ursache auftreten, die mit Verwirrung, verschwommenem Sehen oder Bewusstlosigkeit einhergehen.",show_ref:!1},{src:"Please call 911 if you experience seizures lasting longer than five minutes, or multiple seizures without regaining consciousness between them.",display_src:"Please call 911 if you experience seizures lasting longer than five minutes, or multiple seizures without regaining consciousness between them.",ref:"Bitte rufen Sie 911 an, wenn bei Ihnen Anfälle auftreten, die länger als fünf Minuten dauern oder mehrere Anfälle auftreten, ohne dass Sie zwischendurch das Bewusstsein wiedererlangen.",show_ref:!1},{src:"Please call 911 if you experience severe abdominal pain, especially if it is accompanied by vomiting, diarrhea, or signs of dehydration.",display_src:"Please call 911 if you experience severe abdominal pain, especially if it is accompanied by vomiting, diarrhea, or signs of dehydration.",ref:"Bitte rufen Sie 911 an, wenn Sie unter starken Bauchschmerzen leiden, insbesondere wenn diese mit Erbrechen, Durchfall oder Anzeichen von Dehydrierung einhergehen.",show_ref:!1},{src:"Please call 911 if you experience signs of a severe allergic reaction, such as difficulty breathing, swelling of the face or throat, or hives.",display_src:"Please call 911 if you experience signs of a severe allergic reaction, such as difficulty breathing, swelling of the face or throat, or hives.",ref:"Bitte rufen Sie 911 an, wenn Sie Anzeichen einer schweren allergischen Reaktion bemerken, wie z. B. Atembeschwerden, Schwellungen im Gesicht oder im Hals oder Nesselsucht.",show_ref:!1},{src:"Please call 911 if you experience sudden changes in vision, such as loss of vision in one or both eyes, double vision, or seeing flashing lights or spots.",display_src:"Please call 911 if you experience sudden changes in vision, such as loss of vision in one or both eyes, double vision, or seeing flashing lights or spots.",ref:"Bitte rufen Sie 911 an, wenn bei Ihnen plötzliche Veränderungen des Sehvermögens auftreten, z. B. Sehverlust auf einem oder beiden Augen, Doppeltsehen oder das Sehen blinkender Lichter oder Punkte.",show_ref:!1},{src:"Please call 911 if you experience signs of a possible stroke, such as sudden confusion, trouble speaking or understanding speech, or sudden trouble walking or maintaining balance.",display_src:"Please call 911 if you experience signs of a possible stroke, such as sudden confusion, trouble speaking or understanding speech, or sudden trouble walking or maintaining balance.",ref:"Bitte rufen Sie 911 an, wenn Sie Anzeichen eines möglichen Schlaganfalls bemerken, wie z. B. plötzliche Verwirrtheit, Probleme beim Sprechen oder Verstehen von Sprache oder plötzliche Probleme beim Gehen oder beim Halten des Gleichgewichts.",show_ref:!1},{src:"Warm Regards, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"Warm Regards, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Herzliche Grüße, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Besucht",show_ref:!1},{src:"Sincerely, Dr. [DEID] - Medical Intern Dr. [DEID] - Senior Resident Dr. [DEID], MD - Chief Attending",display_src:"Sincerely, Dr. [DEID] - Medical Intern Dr. [DEID] - Senior Resident Dr. [DEID], MD - Chief Attending",ref:"Mit freundlichen Grüßen Dr. [DEID] – Medizinischer Praktikant Dr. [DEID] – Leitender Assistenzarzt Dr. [DEID], MD – Leitender Oberarzt",show_ref:!1},{src:"Best Wishes, Dr. [DEID] - First-Year Intern Dr. [DEID] - Second-Year Resident Dr. [DEID], MD - Supervising Attending",display_src:"Best Wishes, Dr. [DEID] - First-Year Intern Dr. [DEID] - Second-Year Resident Dr. [DEID], MD - Supervising Attending",ref:"Mit freundlichen Grüßen, Dr. [DEID] – Praktikant im ersten Jahr Dr. [DEID] – Assistenzarzt im zweiten Jahr Dr. [DEID], MD – Betreuende Betreuung",show_ref:!1},{src:"Take Care, Dr. [DEID] - Junior Intern Dr. [DEID] - Senior Resident Dr. [DEID], MD - Head Attending",display_src:"Take Care, Dr. [DEID] - Junior Intern Dr. [DEID] - Senior Resident Dr. [DEID], MD - Head Attending",ref:"Passen Sie auf sich auf, Dr. [DEID] – Juniorpraktikant Dr. [DEID] – Oberarzt Dr. [DEID], MD – Leitender Oberarzt",show_ref:!1},{src:"With Appreciation, Dr. [DEID] - Clinical Intern Dr. [DEID] - Medical Resident Dr. [DEID], MD - Consultant Attending",display_src:"With Appreciation, Dr. [DEID] - Clinical Intern Dr. [DEID] - Medical Resident Dr. [DEID], MD - Consultant Attending",ref:"Mit Anerkennung, Dr. [DEID] – klinischer Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – anwesender Berater",show_ref:!1},{src:"Kind Regards, Dr. [DEID] - Rotating Intern Dr. [DEID] - Resident Physician Dr. [DEID], MD - Staff Attending",display_src:"Kind Regards, Dr. [DEID] - Rotating Intern Dr. [DEID] - Resident Physician Dr. [DEID], MD - Staff Attending",ref:"Mit freundlichen Grüßen, Dr. [DEID] – Rotierender Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Anwesendes Personal",show_ref:!1},{src:"Yours Truly, Dr. [DEID] - Hospital Intern Dr. [DEID] - Inpatient Resident Dr. [DEID], MD - Lead Attending",display_src:"Yours Truly, Dr. [DEID] - Hospital Intern Dr. [DEID] - Inpatient Resident Dr. [DEID], MD - Lead Attending",ref:"Mit freundlichen Grüßen Dr. [DEID] – Krankenhauspraktikant Dr. [DEID] – Stationärer Assistenzarzt Dr. [DEID], MD – Leitender Oberarzt",show_ref:!1},{src:"In Good Health, Dr. [DEID] - Medical Student Intern Dr. [DEID] - Resident Fellow Dr. [DEID], MD - Department Attending",display_src:"In Good Health, Dr. [DEID] - Medical Student Intern Dr. [DEID] - Resident Fellow Dr. [DEID], MD - Department Attending",ref:"Bei guter Gesundheit, Dr. [DEID] – Medizinstudent Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Abteilungsbesuch",show_ref:!1},{src:"With Gratitude, Dr. [DEID] - Internship Trainee Dr. [DEID] - Residency Mentor Dr. [DEID], MD - Attending Physician",display_src:"With Gratitude, Dr. [DEID] - Internship Trainee Dr. [DEID] - Residency Mentor Dr. [DEID], MD - Attending Physician",ref:"Mit Dankbarkeit, Dr. [DEID] – Praktikumspraktikant Dr. [DEID] – Facharzt-Mentor Dr. [DEID], MD – Oberarzt",show_ref:!1},{src:"Be Well, Dr. [DEID] - Graduate Intern Dr. [DEID] - Clinical Resident Dr. [DEID], MD - Senior Attending",display_src:"Be Well, Dr. [DEID] - Graduate Intern Dr. [DEID] - Clinical Resident Dr. [DEID], MD - Senior Attending",ref:"Seien Sie gesund, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Leitender Oberarzt",show_ref:!1},{src:"Sincerely, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"Sincerely, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Mit freundlichen Grüßen Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Beobachtend",show_ref:!1},{src:"Warm regards, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",display_src:"Warm regards, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",ref:"Herzliche Grüße, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Oberarzt",show_ref:!1},{src:"Best wishes for your recovery, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"Best wishes for your recovery, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Die besten Wünsche für Ihre Genesung, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Beobachtend",show_ref:!1},{src:"Take care, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",display_src:"Take care, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",ref:"Passen Sie auf sich auf, Dr. [DEID] – Assistenzarzt. [DEID] – Assistenzarzt. [DEID], MD – Oberarzt",show_ref:!1},{src:"Yours in health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"Yours in health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Mit freundlichen Grüßen, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Attendant",show_ref:!1},{src:"With care, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",display_src:"With care, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",ref:"Mit Vorsicht, Dr. [DEID] – Assistenzarzt. [DEID] – Assistenzarzt",show_ref:!1},{src:"In good health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"In good health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Bei guter Gesundheit, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Attendant",show_ref:!1},{src:"Wishing you well, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",display_src:"Wishing you well, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",ref:"Ich wünsche Ihnen alles Gute, Dr. [DEID] – Assistenzarzt. [DEID] – Assistenzarzt. [DEID], MD – Oberarzt",show_ref:!1},{src:"Stay healthy, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",display_src:"Stay healthy, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending",ref:"Bleiben Sie gesund, Dr. [DEID] – Praktikant Dr. [DEID] – Assistenzarzt Dr. [DEID], MD – Attendant",show_ref:!1},{src:"To your continued health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",display_src:"To your continued health, Dr. [DEID] - Intern Dr. [DEID] - Resident Dr. [DEID], MD - Attending Physician",ref:"Für Ihre weitere Gesundheit, Dr. [DEID] – Assistenzarzt. [DEID] – Assistenzarzt. [DEID], MD – Oberarzt",show_ref:!1},{src:"It was a pleasure taking care of you!",display_src:"It was a pleasure taking care of you!",ref:"Es war mir eine Freude, mich um Sie zu kümmern!",show_ref:!1},{src:"Thank you for allowing us to participate in your care.",display_src:"Thank you for allowing us to participate in your care.",ref:"Vielen Dank, dass Sie uns an Ihrer Betreuung teilhaben lassen.",show_ref:!1},{src:"We did a complete blood count test.",display_src:"We did a complete blood count test.",ref:"Wir haben einen kompletten Blutbildtest gemacht.",show_ref:!1},{src:"We did a chest X-ray examination.",display_src:"We did a chest X-ray examination.",ref:"Wir haben eine Röntgenuntersuchung des Brustkorbs durchgeführt.",show_ref:!1},{src:"We did an electrocardiogram (ECG) to monitor your heart.",display_src:"We did an electrocardiogram (ECG) to monitor your heart.",ref:"Wir haben ein Elektrokardiogramm (EKG) zur Überwachung Ihres Herzens erstellt.",show_ref:!1},{src:"We did a urine analysis to check for any infections.",display_src:"We did a urine analysis to check for any infections.",ref:"Wir haben eine Urinanalyse durchgeführt, um festzustellen, ob Infektionen vorliegen.",show_ref:!1},{src:"We did a blood glucose test to monitor your sugar levels.",display_src:"We did a blood glucose test to monitor your sugar levels.",ref:"Wir haben einen Blutzuckertest durchgeführt, um Ihren Zuckerspiegel zu überwachen.",show_ref:!1},{src:"We did a liver function test to assess your liver health.",display_src:"We did a liver function test to assess your liver health.",ref:"Wir haben einen Leberfunktionstest durchgeführt, um Ihre Lebergesundheit zu beurteilen.",show_ref:!1},{src:"We did a kidney function test to ensure proper renal function.",display_src:"We did a kidney function test to ensure proper renal function.",ref:"Wir haben einen Nierenfunktionstest durchgeführt, um die ordnungsgemäße Nierenfunktion sicherzustellen.",show_ref:!1},{src:"We did a thyroid function test to evaluate your thyroid hormones.",display_src:"We did a thyroid function test to evaluate your thyroid hormones.",ref:"Wir haben einen Schilddrüsenfunktionstest durchgeführt, um Ihre Schilddrüsenhormone zu bestimmen.",show_ref:!1},{src:"We did a blood pressure test to monitor for hypertension.",display_src:"We did a blood pressure test to monitor for hypertension.",ref:"Wir haben einen Blutdrucktest durchgeführt, um auf Bluthochdruck zu achten.",show_ref:!1},{src:"We did a pulmonary function test to assess your lung capacity.",display_src:"We did a pulmonary function test to assess your lung capacity.",ref:"Wir haben einen Lungenfunktionstest durchgeführt, um Ihre Lungenkapazität zu beurteilen.",show_ref:!1},{src:"The X-ray showed a minor fracture in your left arm.",display_src:"The X-ray showed a minor fracture in your left arm.",ref:"Das Röntgenbild zeigte einen kleinen Bruch in Ihrem linken Arm.",show_ref:!1},{src:"The blood test showed elevated cholesterol levels.",display_src:"The blood test showed elevated cholesterol levels.",ref:"Der Bluttest ergab erhöhte Cholesterinwerte.",show_ref:!1},{src:"The MRI scan showed signs of inflammation in your lower back.",display_src:"The MRI scan showed signs of inflammation in your lower back.",ref:"Die MRT-Untersuchung zeigte Anzeichen einer Entzündung im unteren Rückenbereich.",show_ref:!1},{src:"The EKG revealed an irregular heart rhythm.",display_src:"The EKG revealed an irregular heart rhythm.",ref:"Das EKG ergab einen unregelmäßigen Herzrhythmus.",show_ref:!1},{src:"The ultrasound showed the presence of gallstones.",display_src:"The ultrasound showed the presence of gallstones.",ref:"Der Ultraschall zeigte das Vorhandensein von Gallensteinen.",show_ref:!1},{src:"The stress test showed reduced blood flow to your heart.",display_src:"The stress test showed reduced blood flow to your heart.",ref:"Der Stresstest ergab eine verminderte Durchblutung Ihres Herzens.",show_ref:!1},{src:"The CT scan showed a small lesion in your left lung.",display_src:"The CT scan showed a small lesion in your left lung.",ref:"Der CT-Scan zeigte eine kleine Läsion in Ihrer linken Lunge.",show_ref:!1},{src:"The urinalysis showed signs of a urinary tract infection.",display_src:"The urinalysis showed signs of a urinary tract infection.",ref:"Die Urinanalyse zeigte Anzeichen einer Harnwegsinfektion.",show_ref:!1},{src:"The echocardiogram showed a weakened heart muscle.",display_src:"The echocardiogram showed a weakened heart muscle.",ref:"Das Echokardiogramm zeigte einen geschwächten Herzmuskel.",show_ref:!1},{src:"The endoscopy showed inflammation in your esophagus.",display_src:"The endoscopy showed inflammation in your esophagus.",ref:"Bei der Endoskopie wurde eine Entzündung Ihrer Speiseröhre festgestellt.",show_ref:!1},{src:"The chest X-ray did NOT show any signs of pneumonia.",display_src:"The chest X-ray did NOT show any signs of pneumonia.",ref:"Das Röntgenbild des Brustkorbs zeigte KEINE Anzeichen einer Lungenentzündung.",show_ref:!1},{src:"The blood test did NOT show elevated white blood cell count, indicating no infection.",display_src:"The blood test did NOT show elevated white blood cell count, indicating no infection.",ref:"Der Bluttest ergab KEINE erhöhte Anzahl weißer Blutkörperchen, was darauf hindeutet, dass keine Infektion vorliegt.",show_ref:!1},{src:"The CT scan did NOT show any evidence of a brain tumor.",display_src:"The CT scan did NOT show any evidence of a brain tumor.",ref:"Der CT-Scan ergab KEINE Hinweise auf einen Gehirntumor.",show_ref:!1},{src:"The EKG did NOT show any abnormal heart rhythms or irregularities.",display_src:"The EKG did NOT show any abnormal heart rhythms or irregularities.",ref:"Das EKG zeigte KEINE Herzrhythmusstörungen oder Unregelmäßigkeiten.",show_ref:!1},{src:"The ultrasound did NOT show any gallstones or inflammation in your gallbladder.",display_src:"The ultrasound did NOT show any gallstones or inflammation in your gallbladder.",ref:"Der Ultraschall zeigte KEINE Gallensteine oder Entzündungen in Ihrer Gallenblase.",show_ref:!1},{src:"The MRI did NOT show any signs of multiple sclerosis or other neurological disorders.",display_src:"The MRI did NOT show any signs of multiple sclerosis or other neurological disorders.",ref:"Das MRT zeigte KEINE Anzeichen von Multipler Sklerose oder anderen neurologischen Störungen.",show_ref:!1},{src:"The stress test did NOT show any concerning issues with your heart function during physical activity.",display_src:"The stress test did NOT show any concerning issues with your heart function during physical activity.",ref:"Der Stresstest ergab KEINE besorgniserregenden Probleme mit Ihrer Herzfunktion bei körperlicher Aktivität.",show_ref:!1},{src:"The colonoscopy did NOT show any polyps or abnormalities in your colon.",display_src:"The colonoscopy did NOT show any polyps or abnormalities in your colon.",ref:"Bei der Koloskopie wurden KEINE Polypen oder Anomalien in Ihrem Dickdarm festgestellt.",show_ref:!1},{src:"The echocardiogram did NOT show any structural heart defects or valve issues.",display_src:"The echocardiogram did NOT show any structural heart defects or valve issues.",ref:"Das Echokardiogramm zeigte KEINE strukturellen Herzfehler oder Klappenprobleme.",show_ref:!1},{src:"The urinalysis did NOT show any signs of a urinary tract infection or kidney problems.",display_src:"The urinalysis did NOT show any signs of a urinary tract infection or kidney problems.",ref:"Die Urinanalyse ergab KEINE Anzeichen einer Harnwegsinfektion oder Nierenproblemen.",show_ref:!1},{src:"The blood pressure test was normal.",display_src:"The blood pressure test was normal.",ref:"Der Blutdrucktest war normal.",show_ref:!1},{src:"The ECG (electrocardiogram) test was normal.",display_src:"The ECG (electrocardiogram) test was normal.",ref:"Der EKG-Test (Elektrokardiogramm) war normal.",show_ref:!1},{src:"The complete blood count test was normal.",display_src:"The complete blood count test was normal.",ref:"Das große Blutbild war normal.",show_ref:!1},{src:"The urinalysis test was normal.",display_src:"The urinalysis test was normal.",ref:"Der Urintest war normal.",show_ref:!1},{src:"The chest X-ray was normal.",display_src:"The chest X-ray was normal.",ref:"Das Röntgenbild der Brust war normal.",show_ref:!1},{src:"The liver function test was normal.",display_src:"The liver function test was normal.",ref:"Der Leberfunktionstest war normal.",show_ref:!1},{src:"The kidney function test was normal.",display_src:"The kidney function test was normal.",ref:"Der Nierenfunktionstest war normal.",show_ref:!1},{src:"The thyroid function test was normal.",display_src:"The thyroid function test was normal.",ref:"Der Schilddrüsenfunktionstest war normal.",show_ref:!1},{src:"The blood glucose test was normal.",display_src:"The blood glucose test was normal.",ref:"Der Blutzuckertest war normal.",show_ref:!1},{src:"The electrolyte panel test was normal.",display_src:"The electrolyte panel test was normal.",ref:"Der Elektrolyttest war normal.",show_ref:!1},{src:"All of the results are normal.",display_src:"All of the results are normal.",ref:"Alle Ergebnisse sind normal.",show_ref:!1},{src:"The results of the blood work will come back in about 24 hours.",display_src:"The results of the blood work will come back in about 24 hours.",ref:"Die Ergebnisse der Blutuntersuchung werden in etwa 24 Stunden vorliegen.",show_ref:!1},{src:"The results of the MRI scan will come back in about 48 hours.",display_src:"The results of the MRI scan will come back in about 48 hours.",ref:"Die Ergebnisse der MRT-Untersuchung liegen in etwa 48 Stunden vor.",show_ref:!1},{src:"The results of the urine test will come back in about 12 hours.",display_src:"The results of the urine test will come back in about 12 hours.",ref:"Die Ergebnisse des Urintests werden in etwa 12 Stunden vorliegen.",show_ref:!1},{src:"The results of the CT scan will come back in about 24 to 48 hours.",display_src:"The results of the CT scan will come back in about 24 to 48 hours.",ref:"Die Ergebnisse des CT-Scans werden in etwa 24 bis 48 Stunden vorliegen.",show_ref:!1},{src:"The results of the echocardiogram will come back in about 3 to 5 days.",display_src:"The results of the echocardiogram will come back in about 3 to 5 days.",ref:"Die Ergebnisse des Echokardiogramms werden in etwa 3 bis 5 Tagen vorliegen.",show_ref:!1},{src:"The results of the biopsy will come back in about 5 to 7 days.",display_src:"The results of the biopsy will come back in about 5 to 7 days.",ref:"Die Ergebnisse der Biopsie werden in etwa 5 bis 7 Tagen vorliegen.",show_ref:!1},{src:"The results of the X-ray will come back in about 24 hours.",display_src:"The results of the X-ray will come back in about 24 hours.",ref:"Die Ergebnisse der Röntgenaufnahme werden in etwa 24 Stunden vorliegen.",show_ref:!1},{src:"The results of the sleep study will come back in about 1 to 2 weeks.",display_src:"The results of the sleep study will come back in about 1 to 2 weeks.",ref:"Die Ergebnisse der Schlafstudie werden in etwa 1 bis 2 Wochen vorliegen.",show_ref:!1},{src:"The results of the allergy test will come back in about 48 hours.",display_src:"The results of the allergy test will come back in about 48 hours.",ref:"Die Ergebnisse des Allergietests liegen in etwa 48 Stunden vor.",show_ref:!1},{src:"The results of the pulmonary function test will come back in about 24 to 72 hours.",display_src:"The results of the pulmonary function test will come back in about 24 to 72 hours.",ref:"Die Ergebnisse des Lungenfunktionstests liegen nach etwa 24 bis 72 Stunden vor.",show_ref:!1},{src:"We will call you if the blood culture results are positive.",display_src:"We will call you if the blood culture results are positive.",ref:"Wir rufen Sie an, wenn die Blutkulturergebnisse positiv sind.",show_ref:!1},{src:"We will call you if the urine analysis results are positive.",display_src:"We will call you if the urine analysis results are positive.",ref:"Wir rufen Sie an, wenn die Ergebnisse der Urinanalyse positiv sind.",show_ref:!1},{src:"We will call you if the stool sample results are positive.",display_src:"We will call you if the stool sample results are positive.",ref:"Wir rufen Sie an, wenn das Ergebnis der Stuhlprobe positiv ist.",show_ref:!1},{src:"We will call you if the throat swab results are positive.",display_src:"We will call you if the throat swab results are positive.",ref:"Bei einem positiven Rachenabstrichergebnis rufen wir Sie an.",show_ref:!1},{src:"We will call you if the allergy test results are positive.",display_src:"We will call you if the allergy test results are positive.",ref:"Bei einem positiven Allergietest-Ergebnis rufen wir Sie an.",show_ref:!1},{src:"We will call you if the CT scan results are positive.",display_src:"We will call you if the CT scan results are positive.",ref:"Wir rufen Sie an, wenn die Ergebnisse der CT-Untersuchung positiv sind.",show_ref:!1},{src:"We will call you if the EKG test results are positive.",display_src:"We will call you if the EKG test results are positive.",ref:"Bei einem positiven EKG-Testergebnis rufen wir Sie an.",show_ref:!1},{src:"We will call you if the mammogram results are positive.",display_src:"We will call you if the mammogram results are positive.",ref:"Wir rufen Sie an, wenn die Ergebnisse der Mammographie positiv sind.",show_ref:!1},{src:"We will call you if the biopsy results are positive.",display_src:"We will call you if the biopsy results are positive.",ref:"Wir rufen Sie an, wenn die Biopsieergebnisse positiv sind.",show_ref:!1},{src:"We will call you if the sleep study results are positive.",display_src:"We will call you if the sleep study results are positive.",ref:"Wir rufen Sie an, wenn die Ergebnisse der Schlafstudie positiv sind.",show_ref:!1},{src:"If the blood glucose test results are positive, we may change your medication.",display_src:"If the blood glucose test results are positive, we may change your medication.",ref:"Bei einem positiven Blutzuckermessergebnis kann es sein, dass wir Ihre Medikation ändern.",show_ref:!1},{src:"If the cholesterol test results are positive, we may change your medication.",display_src:"If the cholesterol test results are positive, we may change your medication.",ref:"Wenn die Cholesterintestergebnisse positiv sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the thyroid function test results are positive, we may change your medication.",display_src:"If the thyroid function test results are positive, we may change your medication.",ref:"Wenn die Ergebnisse des Schilddrüsenfunktionstests positiv sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the liver function test results are positive, we may change your medication.",display_src:"If the liver function test results are positive, we may change your medication.",ref:"Bei einem positiven Leberfunktionstest kann es sein, dass wir Ihre Medikation ändern.",show_ref:!1},{src:"If the kidney function test results are positive, we may change your medication.",display_src:"If the kidney function test results are positive, we may change your medication.",ref:"Wenn die Ergebnisse des Nierenfunktionstests positiv sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the infection marker test results are positive, we may change your medication.",display_src:"If the infection marker test results are positive, we may change your medication.",ref:"Wenn die Ergebnisse des Infektionsmarker-Tests positiv sind, können wir Ihre Medikamente ändern.",show_ref:!1},{src:"If the blood clotting test results are positive, we may change your medication.",display_src:"If the blood clotting test results are positive, we may change your medication.",ref:"Wenn die Blutgerinnungstestergebnisse positiv sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the electrolyte imbalance test results are positive, we may change your medication.",display_src:"If the electrolyte imbalance test results are positive, we may change your medication.",ref:"Wenn die Ergebnisse des Elektrolytungleichgewichtstests positiv sind, können wir Ihre Medikamente ändern.",show_ref:!1},{src:"If the cardiac enzyme test results are positive, we may change your medication.",display_src:"If the cardiac enzyme test results are positive, we may change your medication.",ref:"Wenn die Ergebnisse des Herzenzymtests positiv sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the autoimmune disease test results are positive, we may change your medication.",display_src:"If the autoimmune disease test results are positive, we may change your medication.",ref:"Wenn die Testergebnisse für eine Autoimmunerkrankung positiv sind, können wir Ihre Medikamente ändern.",show_ref:!1},{src:"If the blood glucose test results are negative, we may change your medication.",display_src:"If the blood glucose test results are negative, we may change your medication.",ref:"Bei einem negativen Blutzuckermessergebnis kann es sein, dass wir Ihre Medikation ändern.",show_ref:!1},{src:"If the cholesterol test results are negative, we may change your medication.",display_src:"If the cholesterol test results are negative, we may change your medication.",ref:"Wenn die Cholesterintestergebnisse negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the liver function test results are negative, we may change your medication.",display_src:"If the liver function test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse der Leberfunktionstests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the kidney function test results are negative, we may change your medication.",display_src:"If the kidney function test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse des Nierenfunktionstests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the thyroid function test results are negative, we may change your medication.",display_src:"If the thyroid function test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse des Schilddrüsenfunktionstests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the complete blood count test results are negative, we may change your medication.",display_src:"If the complete blood count test results are negative, we may change your medication.",ref:"Wenn das Ergebnis des großen Blutbildes negativ ist, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the electrolyte panel test results are negative, we may change your medication.",display_src:"If the electrolyte panel test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse des Elektrolyttests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the coagulation profile test results are negative, we may change your medication.",display_src:"If the coagulation profile test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse des Gerinnungsprofiltests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the inflammatory markers test results are negative, we may change your medication.",display_src:"If the inflammatory markers test results are negative, we may change your medication.",ref:"Wenn die Testergebnisse auf Entzündungsmarker negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"If the cardiac enzyme test results are negative, we may change your medication.",display_src:"If the cardiac enzyme test results are negative, we may change your medication.",ref:"Wenn die Ergebnisse des Herzenzymtests negativ sind, können wir Ihre Medikation ändern.",show_ref:!1},{src:"A Complete Blood Count (CBC) test will show whether you have anemia or any blood-related disorders.",display_src:"A Complete Blood Count (CBC) test will show whether you have anemia or any blood-related disorders.",ref:"Ein vollständiges Blutbild (CBC) zeigt, ob Sie an Anämie oder anderen blutbedingten Erkrankungen leiden.",show_ref:!1},{src:"A Thyroid Function Test will show whether you have hyperthyroidism or hypothyroidism.",display_src:"A Thyroid Function Test will show whether you have hyperthyroidism or hypothyroidism.",ref:"Ein Schilddrüsenfunktionstest zeigt, ob Sie an einer Hyperthyreose oder Hypothyreose leiden.",show_ref:!1},{src:"A Hemoglobin A1C test will show whether you have diabetes or issues with your blood sugar levels.",display_src:"A Hemoglobin A1C test will show whether you have diabetes or issues with your blood sugar levels.",ref:"Ein Hämoglobin-A1C-Test zeigt, ob Sie Diabetes haben oder Probleme mit Ihrem Blutzuckerspiegel haben.",show_ref:!1},{src:"A Liver Function Test will show whether you have liver damage or disease.",display_src:"A Liver Function Test will show whether you have liver damage or disease.",ref:"Ein Leberfunktionstest zeigt, ob Sie einen Leberschaden oder eine Lebererkrankung haben.",show_ref:!1},{src:"A Urinalysis will show whether you have a urinary tract infection or kidney problems.",display_src:"A Urinalysis will show whether you have a urinary tract infection or kidney problems.",ref:"Eine Urinanalyse zeigt, ob bei Ihnen eine Harnwegsinfektion oder Nierenprobleme vorliegen.",show_ref:!1},{src:"A Chest X-ray will show whether you have pneumonia or other lung conditions.",display_src:"A Chest X-ray will show whether you have pneumonia or other lung conditions.",ref:"Eine Röntgenaufnahme des Brustkorbs zeigt, ob Sie an einer Lungenentzündung oder anderen Lungenerkrankungen leiden.",show_ref:!1},{src:"An Electrocardiogram (ECG) will show whether you have any heart-related issues or abnormal rhythms.",display_src:"An Electrocardiogram (ECG) will show whether you have any heart-related issues or abnormal rhythms.",ref:"Ein Elektrokardiogramm (EKG) zeigt, ob bei Ihnen Herzprobleme oder Herzrhythmusstörungen vorliegen.",show_ref:!1},{src:"A Blood Pressure Test will show whether you have hypertension or issues with your blood pressure.",display_src:"A Blood Pressure Test will show whether you have hypertension or issues with your blood pressure.",ref:"Ein Blutdrucktest zeigt, ob Sie an Bluthochdruck leiden oder Probleme mit Ihrem Blutdruck haben.",show_ref:!1},{src:"A Fecal Occult Blood Test will show whether you have gastrointestinal bleeding or colon cancer.",display_src:"A Fecal Occult Blood Test will show whether you have gastrointestinal bleeding or colon cancer.",ref:"Ein Test auf okkultes Blut im Stuhl zeigt, ob Sie Magen-Darm-Blutungen oder Darmkrebs haben.",show_ref:!1},{src:"A Bone Density Test will show whether you have osteoporosis or other bone-related issues.",display_src:"A Bone Density Test will show whether you have osteoporosis or other bone-related issues.",ref:"Ein Knochendichtetest zeigt, ob Sie an Osteoporose oder anderen Knochenproblemen leiden.",show_ref:!1},{src:"We did a complete blood count (CBC) test to check for anemia and potential infections.",display_src:"We did a complete blood count (CBC) test to check for anemia and potential infections.",ref:"Wir haben ein komplettes Blutbild (CBC) durchgeführt, um auf Anämie und mögliche Infektionen zu prüfen.",show_ref:!1},{src:"We performed an electrocardiogram (ECG) to check for irregular heart rhythms or potential heart problems.",display_src:"We performed an electrocardiogram (ECG) to check for irregular heart rhythms or potential heart problems.",ref:"Wir haben ein Elektrokardiogramm (EKG) durchgeführt, um Herzrhythmusstörungen oder mögliche Herzprobleme festzustellen.",show_ref:!1},{src:"We conducted a chest X-ray to check for pneumonia, lung cancer, and other respiratory conditions.",display_src:"We conducted a chest X-ray to check for pneumonia, lung cancer, and other respiratory conditions.",ref:"Wir führten eine Röntgenaufnahme des Brustkorbs durch, um nach Lungenentzündung, Lungenkrebs und anderen Atemwegserkrankungen zu suchen.",show_ref:!1},{src:"We carried out a urinalysis to check for urinary tract infections, kidney diseases, and diabetes.",display_src:"We carried out a urinalysis to check for urinary tract infections, kidney diseases, and diabetes.",ref:"Wir führten eine Urinanalyse durch, um festzustellen, ob Harnwegsinfektionen, Nierenerkrankungen und Diabetes vorliegen.",show_ref:!1},{src:"We performed a thyroid function test to check for hypo or hyperthyroidism and other thyroid-related disorders.",display_src:"We performed a thyroid function test to check for hypo or hyperthyroidism and other thyroid-related disorders.",ref:"Wir führten einen Schilddrüsenfunktionstest durch, um zu prüfen, ob eine Schilddrüsenunterfunktion oder eine Schilddrüsenüberfunktion sowie andere Schilddrüsenerkrankungen vorliegen.",show_ref:!1},{src:"We executed a colonoscopy to check for colon cancer, polyps, and other gastrointestinal issues.",display_src:"We executed a colonoscopy to check for colon cancer, polyps, and other gastrointestinal issues.",ref:"Wir führten eine Darmspiegelung durch, um nach Darmkrebs, Polypen und anderen Magen-Darm-Problemen zu suchen.",show_ref:!1},{src:"We conducted a blood glucose test to check for diabetes or abnormal blood sugar levels.",display_src:"We conducted a blood glucose test to check for diabetes or abnormal blood sugar levels.",ref:"Wir haben einen Blutzuckertest durchgeführt, um festzustellen, ob Diabetes oder abnormale Blutzuckerwerte vorliegen.",show_ref:!1},{src:"We performed a mammogram to check for breast cancer and other breast-related conditions.",display_src:"We performed a mammogram to check for breast cancer and other breast-related conditions.",ref:"Wir haben eine Mammographie durchgeführt, um festzustellen, ob Brustkrebs und andere brustbedingte Erkrankungen vorliegen.",show_ref:!1},{src:"We carried out a liver function test to check for hepatitis, cirrhosis, and other liver disorders.",display_src:"We carried out a liver function test to check for hepatitis, cirrhosis, and other liver disorders.",ref:"Wir führten einen Leberfunktionstest durch, um festzustellen, ob Hepatitis, Leberzirrhose und andere Lebererkrankungen vorliegen.",show_ref:!1},{src:"We conducted a CT scan to check for tumors, blood clots, and other abnormalities inside the body.",display_src:"We conducted a CT scan to check for tumors, blood clots, and other abnormalities inside the body.",ref:"Wir haben einen CT-Scan durchgeführt, um nach Tumoren, Blutgerinnseln und anderen Anomalien im Körper zu suchen.",show_ref:!1},{src:"There is no need for further blood tests at this time.",display_src:"There is no need for further blood tests at this time.",ref:"Weitere Blutuntersuchungen sind derzeit nicht erforderlich.",show_ref:!1},{src:"There is no need for additional X-rays at this time.",display_src:"There is no need for additional X-rays at this time.",ref:"Derzeit sind keine zusätzlichen Röntgenaufnahmen erforderlich.",show_ref:!1},{src:"There is no need for follow-up CT scans at this time.",display_src:"There is no need for follow-up CT scans at this time.",ref:"Derzeit sind keine weiteren CT-Scans erforderlich.",show_ref:!1},{src:"There is no need for physical therapy sessions at this time.",display_src:"There is no need for physical therapy sessions at this time.",ref:"Derzeit besteht keine Notwendigkeit für Physiotherapiesitzungen.",show_ref:!1},{src:"There is no need for a dietary consultation at this time.",display_src:"There is no need for a dietary consultation at this time.",ref:"Eine Ernährungsberatung ist derzeit nicht erforderlich.",show_ref:!1},{src:"There is no need for cardiac stress testing at this time.",display_src:"There is no need for cardiac stress testing at this time.",ref:"Derzeit ist kein Herzbelastungstest erforderlich.",show_ref:!1},{src:"There is no need for sleep apnea evaluation at this time.",display_src:"There is no need for sleep apnea evaluation at this time.",ref:"Eine Schlafapnoe-Untersuchung ist derzeit nicht erforderlich.",show_ref:!1},{src:"There is no need for a mental health assessment at this time.",display_src:"There is no need for a mental health assessment at this time.",ref:"Eine Beurteilung der psychischen Gesundheit ist derzeit nicht erforderlich.",show_ref:!1},{src:"There is no need for an MRI scan at this time.",display_src:"There is no need for an MRI scan at this time.",ref:"Eine MRT-Untersuchung ist derzeit nicht erforderlich.",show_ref:!1},{src:"There is no need for an echocardiogram at this time.",display_src:"There is no need for an echocardiogram at this time.",ref:"Derzeit ist kein Echokardiogramm erforderlich.",show_ref:!1},{src:"You have received your first dose of Ceftriaxone in the hospital.",display_src:"You have received your first dose of Ceftriaxone in the hospital.",ref:"Sie haben Ihre erste Dosis Ceftriaxon im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Metoprolol in the hospital.",display_src:"You have received your first dose of Metoprolol in the hospital.",ref:"Sie haben Ihre erste Dosis Metoprolol im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Warfarin in the hospital.",display_src:"You have received your first dose of Warfarin in the hospital.",ref:"Sie haben Ihre erste Dosis Warfarin im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Furosemide in the hospital.",display_src:"You have received your first dose of Furosemide in the hospital.",ref:"Sie haben Ihre erste Dosis Furosemid im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Digoxin in the hospital.",display_src:"You have received your first dose of Digoxin in the hospital.",ref:"Sie haben Ihre erste Dosis Digoxin im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Prednisone in the hospital.",display_src:"You have received your first dose of Prednisone in the hospital.",ref:"Sie haben Ihre erste Dosis Prednison im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Lisinopril in the hospital.",display_src:"You have received your first dose of Lisinopril in the hospital.",ref:"Sie haben Ihre erste Dosis Lisinopril im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Heparin in the hospital.",display_src:"You have received your first dose of Heparin in the hospital.",ref:"Sie haben Ihre erste Dosis Heparin im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Pantoprazole in the hospital.",display_src:"You have received your first dose of Pantoprazole in the hospital.",ref:"Sie haben Ihre erste Dosis Pantoprazol im Krankenhaus erhalten.",show_ref:!1},{src:"You have received your first dose of Amoxicillin in the hospital.",display_src:"You have received your first dose of Amoxicillin in the hospital.",ref:"Sie haben Ihre erste Dosis Amoxicillin im Krankenhaus erhalten.",show_ref:!1},{src:"You were continued on all your home medications while you were in the hospital.",display_src:"You were continued on all your home medications while you were in the hospital.",ref:"Während Sie im Krankenhaus waren, haben Sie weiterhin alle Ihre Hausmedikamente eingenommen.",show_ref:!1},{src:"We put gauze on top of the sutures once we had finished.",display_src:"We put gauze on top of the sutures once we had finished.",ref:"Sobald wir fertig waren, legten wir Gaze auf die Nähte.",show_ref:!1},{src:"We dressed your wound.",display_src:"We dressed your wound.",ref:"Wir haben Ihre Wunde versorgt.",show_ref:!1},{src:"This treatment will help with your chronic pain management.",display_src:"This treatment will help with your chronic pain management.",ref:"Diese Behandlung wird Ihnen bei der Behandlung chronischer Schmerzen helfen.",show_ref:!1},{src:"This treatment will help with your shortness of breath.",display_src:"This treatment will help with your shortness of breath.",ref:"Diese Behandlung hilft bei Ihrer Atemnot.",show_ref:!1},{src:"This treatment will help with your high blood pressure.",display_src:"This treatment will help with your high blood pressure.",ref:"Diese Behandlung hilft bei Ihrem Bluthochdruck.",show_ref:!1},{src:"This treatment will help with your persistent headaches.",display_src:"This treatment will help with your persistent headaches.",ref:"Diese Behandlung hilft bei Ihren anhaltenden Kopfschmerzen.",show_ref:!1},{src:"This treatment will help with your swollen joints.",display_src:"This treatment will help with your swollen joints.",ref:"Diese Behandlung hilft bei Ihren geschwollenen Gelenken.",show_ref:!1},{src:"This treatment will help with your insomnia.",display_src:"This treatment will help with your insomnia.",ref:"Diese Behandlung hilft bei Ihrer Schlaflosigkeit.",show_ref:!1},{src:"This treatment will help with your persistent fatigue.",display_src:"This treatment will help with your persistent fatigue.",ref:"Diese Behandlung hilft bei Ihrer anhaltenden Müdigkeit.",show_ref:!1},{src:"This treatment will help with your digestive issues.",display_src:"This treatment will help with your digestive issues.",ref:"Diese Behandlung hilft bei Ihren Verdauungsproblemen.",show_ref:!1},{src:"This treatment will help with your rapid heart rate.",display_src:"This treatment will help with your rapid heart rate.",ref:"Diese Behandlung hilft bei Ihrer schnellen Herzfrequenz.",show_ref:!1},{src:"This treatment will help with your anxiety and stress.",display_src:"This treatment will help with your anxiety and stress.",ref:"Diese Behandlung hilft bei Ihrer Angst und Ihrem Stress.",show_ref:!1},{src:"This treatment will help prevent shortness of breath.",display_src:"This treatment will help prevent shortness of breath.",ref:"Diese Behandlung hilft, Kurzatmigkeit vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent chest pain.",display_src:"This treatment will help prevent chest pain.",ref:"Diese Behandlung hilft, Brustschmerzen vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent dizziness.",display_src:"This treatment will help prevent dizziness.",ref:"Diese Behandlung hilft, Schwindel vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent swelling in the legs and ankles.",display_src:"This treatment will help prevent swelling in the legs and ankles.",ref:"Diese Behandlung hilft, Schwellungen an Beinen und Knöcheln vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent persistent coughing.",display_src:"This treatment will help prevent persistent coughing.",ref:"Diese Behandlung hilft, anhaltendem Husten vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent high blood pressure.",display_src:"This treatment will help prevent high blood pressure.",ref:"Diese Behandlung hilft, Bluthochdruck vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent fatigue.",display_src:"This treatment will help prevent fatigue.",ref:"Diese Behandlung hilft, Müdigkeit vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent nausea and vomiting.",display_src:"This treatment will help prevent nausea and vomiting.",ref:"Diese Behandlung hilft, Übelkeit und Erbrechen vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent frequent headaches.",display_src:"This treatment will help prevent frequent headaches.",ref:"Diese Behandlung hilft, häufigen Kopfschmerzen vorzubeugen.",show_ref:!1},{src:"This treatment will help prevent joint pain and stiffness.",display_src:"This treatment will help prevent joint pain and stiffness.",ref:"Diese Behandlung hilft, Gelenkschmerzen und Steifheit vorzubeugen.",show_ref:!1},{src:"In the hospital, we gave you ibuprofen for your pain and inflammation.",display_src:"In the hospital, we gave you ibuprofen for your pain and inflammation.",ref:"Im Krankenhaus haben wir Ihnen Ibuprofen gegen Ihre Schmerzen und Entzündungen gegeben.",show_ref:!1},{src:"In the hospital, we gave you metformin for managing your high blood sugar levels.",display_src:"In the hospital, we gave you metformin for managing your high blood sugar levels.",ref:"Im Krankenhaus haben wir Ihnen Metformin zur Behandlung Ihres hohen Blutzuckerspiegels verabreicht.",show_ref:!1},{src:"In the hospital, we gave you furosemide for reducing fluid build-up due to congestive heart failure.",display_src:"In the hospital, we gave you furosemide for reducing fluid build-up due to congestive heart failure.",ref:"Im Krankenhaus haben wir Ihnen Furosemid verabreicht, um die Flüssigkeitsansammlung aufgrund einer Herzinsuffizienz zu reduzieren.",show_ref:!1},{src:"In the hospital, we gave you albuterol for relieving your asthma symptoms.",display_src:"In the hospital, we gave you albuterol for relieving your asthma symptoms.",ref:"Im Krankenhaus haben wir Ihnen Albuterol zur Linderung Ihrer Asthmasymptome verabreicht.",show_ref:!1},{src:"In the hospital, we gave you ondansetron for preventing nausea and vomiting after surgery.",display_src:"In the hospital, we gave you ondansetron for preventing nausea and vomiting after surgery.",ref:"Im Krankenhaus haben wir Ihnen Ondansetron gegeben, um Übelkeit und Erbrechen nach einer Operation vorzubeugen.",show_ref:!1},{src:"In the hospital, we gave you lisinopril for treating your high blood pressure.",display_src:"In the hospital, we gave you lisinopril for treating your high blood pressure.",ref:"Im Krankenhaus haben wir Ihnen Lisinopril zur Behandlung Ihres Bluthochdrucks verabreicht.",show_ref:!1},{src:"In the hospital, we gave you omeprazole for reducing stomach acid and treating your gastroesophageal reflux disease (GERD).",display_src:"In the hospital, we gave you omeprazole for reducing stomach acid and treating your gastroesophageal reflux disease (GERD).",ref:"Im Krankenhaus haben wir Ihnen Omeprazol zur Reduzierung der Magensäure und zur Behandlung Ihrer gastroösophagealen Refluxkrankheit (GERD) verabreicht.",show_ref:!1},{src:"In the hospital, we gave you amoxicillin for treating your bacterial infection.",display_src:"In the hospital, we gave you amoxicillin for treating your bacterial infection.",ref:"Im Krankenhaus haben wir Ihnen Amoxicillin zur Behandlung Ihrer bakteriellen Infektion verabreicht.",show_ref:!1},{src:"In the hospital, we gave you atorvastatin for lowering your cholesterol levels and reducing the risk of heart disease.",display_src:"In the hospital, we gave you atorvastatin for lowering your cholesterol levels and reducing the risk of heart disease.",ref:"Im Krankenhaus haben wir Ihnen Atorvastatin verabreicht, um Ihren Cholesterinspiegel zu senken und das Risiko einer Herzerkrankung zu verringern.",show_ref:!1},{src:"In the hospital, we gave you gabapentin for managing your nerve pain and controlling seizures.",display_src:"In the hospital, we gave you gabapentin for managing your nerve pain and controlling seizures.",ref:"Im Krankenhaus haben wir Ihnen Gabapentin gegeben, um Ihre Nervenschmerzen zu lindern und Anfälle zu kontrollieren.",show_ref:!1},{src:"In the hospital, we gave you intravenous fluids for dehydration.",display_src:"In the hospital, we gave you intravenous fluids for dehydration.",ref:"Im Krankenhaus haben wir Ihnen intravenöse Flüssigkeiten zur Dehydrierung verabreicht.",show_ref:!1},{src:"In the hospital, we gave you a blood transfusion for anemia.",display_src:"In the hospital, we gave you a blood transfusion for anemia.",ref:"Im Krankenhaus haben wir Ihnen eine Bluttransfusion gegen Anämie gegeben.",show_ref:!1},{src:"In the hospital, we gave you an antibiotic treatment for your bacterial infection.",display_src:"In the hospital, we gave you an antibiotic treatment for your bacterial infection.",ref:"Im Krankenhaus haben wir Ihnen eine Antibiotikabehandlung gegen Ihre bakterielle Infektion verabreicht.",show_ref:!1},{src:"In the hospital, we gave you a bronchodilator for your asthma symptoms.",display_src:"In the hospital, we gave you a bronchodilator for your asthma symptoms.",ref:"Im Krankenhaus haben wir Ihnen einen Bronchodilatator gegen Ihre Asthmasymptome verabreicht.",show_ref:!1},{src:"In the hospital, we gave you pain medication for your post-surgical discomfort.",display_src:"In the hospital, we gave you pain medication for your post-surgical discomfort.",ref:"Im Krankenhaus haben wir Ihnen Schmerzmittel gegen Ihre postoperativen Beschwerden gegeben.",show_ref:!1},{src:"In the hospital, we gave you insulin therapy for your high blood sugar levels.",display_src:"In the hospital, we gave you insulin therapy for your high blood sugar levels.",ref:"Im Krankenhaus haben wir Ihnen eine Insulintherapie gegen Ihren hohen Blutzuckerspiegel verabreicht.",show_ref:!1},{src:"In the hospital, we gave you antiemetic medication for your nausea and vomiting.",display_src:"In the hospital, we gave you antiemetic medication for your nausea and vomiting.",ref:"Im Krankenhaus haben wir Ihnen antiemetische Medikamente gegen Übelkeit und Erbrechen gegeben.",show_ref:!1},{src:"In the hospital, we gave you a corticosteroid for your inflammation and swelling.",display_src:"In the hospital, we gave you a corticosteroid for your inflammation and swelling.",ref:"Im Krankenhaus haben wir Ihnen ein Kortikosteroid gegen Ihre Entzündung und Schwellung gegeben.",show_ref:!1},{src:"In the hospital, we gave you anticoagulant medication for preventing blood clots.",display_src:"In the hospital, we gave you anticoagulant medication for preventing blood clots.",ref:"Im Krankenhaus haben wir Ihnen gerinnungshemmende Medikamente zur Vorbeugung von Blutgerinnseln gegeben.",show_ref:!1},{src:"In the hospital, we gave you oxygen therapy for your difficulty in breathing.",display_src:"In the hospital, we gave you oxygen therapy for your difficulty in breathing.",ref:"Im Krankenhaus haben wir Ihnen eine Sauerstofftherapie gegen Ihre Atembeschwerden verabreicht.",show_ref:!1},{src:"Your chest pain improved with Nitroglycerin.",display_src:"Your chest pain improved with Nitroglycerin.",ref:"Mit Nitroglycerin besserten sich Ihre Brustschmerzen.",show_ref:!1},{src:"Your shortness of breath improved with Albuterol.",display_src:"Your shortness of breath improved with Albuterol.",ref:"Mit Albuterol besserte sich Ihre Atemnot.",show_ref:!1},{src:"Your headache improved with Acetaminophen.",display_src:"Your headache improved with Acetaminophen.",ref:"Mit Acetaminophen besserten sich Ihre Kopfschmerzen.",show_ref:!1},{src:"Your nausea improved with Ondansetron.",display_src:"Your nausea improved with Ondansetron.",ref:"Mit Ondansetron besserte sich Ihre Übelkeit.",show_ref:!1},{src:"Your high blood pressure improved with Lisinopril.",display_src:"Your high blood pressure improved with Lisinopril.",ref:"Mit Lisinopril hat sich Ihr Bluthochdruck verbessert.",show_ref:!1},{src:"Your anxiety improved with Lorazepam.",display_src:"Your anxiety improved with Lorazepam.",ref:"Mit Lorazepam besserten sich Ihre Angstzustände.",show_ref:!1},{src:"Your back pain improved with Ibuprofen.",display_src:"Your back pain improved with Ibuprofen.",ref:"Mit Ibuprofen besserten sich Ihre Rückenschmerzen.",show_ref:!1},{src:"Your insomnia improved with Zolpidem.",display_src:"Your insomnia improved with Zolpidem.",ref:"Ihre Schlaflosigkeit hat sich mit Zolpidem verbessert.",show_ref:!1},{src:"Your cough improved with Dextromethorphan.",display_src:"Your cough improved with Dextromethorphan.",ref:"Mit Dextromethorphan besserte sich Ihr Husten.",show_ref:!1},{src:"Your heartburn improved with Omeprazole.",display_src:"Your heartburn improved with Omeprazole.",ref:"Mit Omeprazol besserte sich Ihr Sodbrennen.",show_ref:!1},{src:"Your persistent cough has not improved.",display_src:"Your persistent cough has not improved.",ref:"Ihr anhaltender Husten hat sich nicht verbessert.",show_ref:!1},{src:"Your severe headache has not improved.",display_src:"Your severe headache has not improved.",ref:"Ihre starken Kopfschmerzen haben sich nicht verbessert.",show_ref:!1},{src:"Your high fever has not improved.",display_src:"Your high fever has not improved.",ref:"Ihr hohes Fieber hat sich nicht gebessert.",show_ref:!1},{src:"Your shortness of breath has not improved.",display_src:"Your shortness of breath has not improved.",ref:"Ihre Atemnot hat sich nicht verbessert.",show_ref:!1},{src:"Your abdominal pain has not improved.",display_src:"Your abdominal pain has not improved.",ref:"Ihre Bauchschmerzen haben sich nicht verbessert.",show_ref:!1},{src:"Your chest pain has not improved.",display_src:"Your chest pain has not improved.",ref:"Ihre Brustschmerzen haben sich nicht verbessert.",show_ref:!1},{src:"Your dizziness has not improved.",display_src:"Your dizziness has not improved.",ref:"Ihr Schwindelgefühl hat sich nicht verbessert.",show_ref:!1},{src:"Your swollen joints have not improved.",display_src:"Your swollen joints have not improved.",ref:"Ihre geschwollenen Gelenke haben sich nicht verbessert.",show_ref:!1},{src:"Your constant fatigue has not improved.",display_src:"Your constant fatigue has not improved.",ref:"Ihre ständige Müdigkeit hat sich nicht verbessert.",show_ref:!1},{src:"Your rapid weight loss has not improved.",display_src:"Your rapid weight loss has not improved.",ref:"Ihr schneller Gewichtsverlust hat sich nicht verbessert.",show_ref:!1},{src:"We gave you Lisinopril to increase your blood pressure stability.",display_src:"We gave you Lisinopril to increase your blood pressure stability.",ref:"Wir haben Ihnen Lisinopril gegeben, um Ihre Blutdruckstabilität zu erhöhen.",show_ref:!1},{src:"We gave you Metformin to increase your blood sugar control.",display_src:"We gave you Metformin to increase your blood sugar control.",ref:"Wir haben Ihnen Metformin gegeben, um Ihre Blutzuckerkontrolle zu verbessern.",show_ref:!1},{src:"We gave you Albuterol to increase your lung function and reduce asthma symptoms.",display_src:"We gave you Albuterol to increase your lung function and reduce asthma symptoms.",ref:"Wir haben Ihnen Albuterol gegeben, um Ihre Lungenfunktion zu verbessern und Asthmasymptome zu lindern.",show_ref:!1},{src:"We gave you Furosemide to increase your urine output and decrease fluid retention.",display_src:"We gave you Furosemide to increase your urine output and decrease fluid retention.",ref:"Wir haben Ihnen Furosemid gegeben, um Ihre Urinausscheidung zu steigern und die Flüssigkeitsansammlung zu verringern.",show_ref:!1},{src:"We gave you Omeprazole to increase your stomach acid regulation and reduce heartburn.",display_src:"We gave you Omeprazole to increase your stomach acid regulation and reduce heartburn.",ref:"Wir haben Ihnen Omeprazol gegeben, um die Regulierung Ihrer Magensäure zu verbessern und Sodbrennen zu reduzieren.",show_ref:!1},{src:"We gave you Sertraline to increase your mood stability and reduce depression symptoms.",display_src:"We gave you Sertraline to increase your mood stability and reduce depression symptoms.",ref:"Wir haben Ihnen Sertralin gegeben, um Ihre Stimmungsstabilität zu erhöhen und Depressionssymptome zu reduzieren.",show_ref:!1},{src:"We gave you Amlodipine to increase your blood pressure management and reduce hypertension.",display_src:"We gave you Amlodipine to increase your blood pressure management and reduce hypertension.",ref:"Wir haben Ihnen Amlodipin gegeben, um Ihre Blutdruckkontrolle zu verbessern und Bluthochdruck zu senken.",show_ref:!1},{src:"We gave you Warfarin to increase your blood clot prevention and reduce the risk of stroke.",display_src:"We gave you Warfarin to increase your blood clot prevention and reduce the risk of stroke.",ref:"Wir haben Ihnen Warfarin gegeben, um die Vorbeugung von Blutgerinnseln zu verbessern und das Schlaganfallrisiko zu verringern.",show_ref:!1},{src:"We gave you Gabapentin to increase your nerve pain relief and reduce neuropathy symptoms.",display_src:"We gave you Gabapentin to increase your nerve pain relief and reduce neuropathy symptoms.",ref:"Wir haben Ihnen Gabapentin gegeben, um die Linderung Ihrer Nervenschmerzen zu verstärken und die Symptome einer Neuropathie zu lindern.",show_ref:!1},{src:"We gave you Levothyroxine to increase your thyroid hormone levels and improve hypothyroidism.",display_src:"We gave you Levothyroxine to increase your thyroid hormone levels and improve hypothyroidism.",ref:"Wir haben Ihnen Levothyroxin gegeben, um Ihren Schilddrüsenhormonspiegel zu erhöhen und die Hypothyreose zu verbessern.",show_ref:!1},{src:"We gave you Ibuprofen to decrease your fever and inflammation.",display_src:"We gave you Ibuprofen to decrease your fever and inflammation.",ref:"Wir haben Ihnen Ibuprofen gegeben, um Ihr Fieber und Ihre Entzündung zu lindern.",show_ref:!1},{src:"We gave you Metoprolol to decrease your high blood pressure.",display_src:"We gave you Metoprolol to decrease your high blood pressure.",ref:"Wir haben Ihnen Metoprolol gegeben, um Ihren hohen Blutdruck zu senken.",show_ref:!1},{src:"We gave you Omeprazole to decrease your acid reflux symptoms.",display_src:"We gave you Omeprazole to decrease your acid reflux symptoms.",ref:"Wir haben Ihnen Omeprazol gegeben, um Ihre Sodbrennen-Symptome zu lindern.",show_ref:!1},{src:"We gave you Furosemide to decrease your fluid retention and swelling.",display_src:"We gave you Furosemide to decrease your fluid retention and swelling.",ref:"Wir haben Ihnen Furosemid gegeben, um Ihre Flüssigkeitsansammlung und Schwellung zu verringern.",show_ref:!1},{src:"We gave you Gabapentin to decrease your nerve pain.",display_src:"We gave you Gabapentin to decrease your nerve pain.",ref:"Wir haben Ihnen Gabapentin gegeben, um Ihre Nervenschmerzen zu lindern.",show_ref:!1},{src:"We gave you Prednisone to decrease your allergic reaction and inflammation.",display_src:"We gave you Prednisone to decrease your allergic reaction and inflammation.",ref:"Wir haben Ihnen Prednison gegeben, um Ihre allergische Reaktion und Entzündung zu lindern.",show_ref:!1},{src:"We gave you Amoxicillin to decrease your bacterial infection symptoms.",display_src:"We gave you Amoxicillin to decrease your bacterial infection symptoms.",ref:"Wir haben Ihnen Amoxicillin gegeben, um die Symptome Ihrer bakteriellen Infektion zu lindern.",show_ref:!1},{src:"We gave you Sertraline to decrease your depression and anxiety symptoms.",display_src:"We gave you Sertraline to decrease your depression and anxiety symptoms.",ref:"Wir haben Ihnen Sertralin gegeben, um Ihre Depressions- und Angstsymptome zu lindern.",show_ref:!1},{src:"We gave you Insulin to decrease your high blood sugar levels.",display_src:"We gave you Insulin to decrease your high blood sugar levels.",ref:"Wir haben Ihnen Insulin gegeben, um Ihren hohen Blutzuckerspiegel zu senken.",show_ref:!1},{src:"We gave you Tamsulosin to decrease your urinary symptoms related to an enlarged prostate.",display_src:"We gave you Tamsulosin to decrease your urinary symptoms related to an enlarged prostate.",ref:"Wir haben Ihnen Tamsulosin gegeben, um Ihre Harnbeschwerden im Zusammenhang mit einer vergrößerten Prostata zu lindern.",show_ref:!1},{src:"We have placed an order for daily physical therapy sessions to improve your mobility.",display_src:"We have placed an order for daily physical therapy sessions to improve your mobility.",ref:"Wir haben einen Auftrag für tägliche Physiotherapie-Sitzungen zur Verbesserung Ihrer Mobilität erteilt.",show_ref:!1},{src:"We have placed an order for a prescription of blood pressure medication to help you maintain a healthy blood pressure level.",display_src:"We have placed an order for a prescription of blood pressure medication to help you maintain a healthy blood pressure level.",ref:"Wir haben ein Rezept für ein Blutdruckmedikament bestellt, das Ihnen dabei helfen soll, einen gesunden Blutdruck aufrechtzuerhalten.",show_ref:!1},{src:"We have placed an order for a continuous positive airway pressure (CPAP) machine to assist with your sleep apnea.",display_src:"We have placed an order for a continuous positive airway pressure (CPAP) machine to assist with your sleep apnea.",ref:"Wir haben ein CPAP-Gerät (Continuous Positive Airway Pressure) zur Behandlung Ihrer Schlafapnoe bestellt.",show_ref:!1},{src:"We have placed an order for a customized diabetic meal plan to help manage your blood sugar levels.",display_src:"We have placed an order for a customized diabetic meal plan to help manage your blood sugar levels.",ref:"Wir haben einen maßgeschneiderten Ernährungsplan für Diabetiker bestellt, der Sie bei der Kontrolle Ihres Blutzuckerspiegels unterstützen soll.",show_ref:!1},{src:"We have placed an order for a series of counseling sessions to support your mental health and well-being.",display_src:"We have placed an order for a series of counseling sessions to support your mental health and well-being.",ref:"Wir haben eine Reihe von Beratungsgesprächen zur Unterstützung Ihrer psychischen Gesundheit und Ihres Wohlbefindens in Auftrag gegeben.",show_ref:!1},{src:"We have placed an order for a home health care nurse to assist with your post-operative wound care and medication management.",display_src:"We have placed an order for a home health care nurse to assist with your post-operative wound care and medication management.",ref:"Wir haben einen Auftrag für eine häusliche Krankenpflegerin erteilt, die Sie bei der postoperativen Wundversorgung und dem Medikamentenmanagement unterstützt.",show_ref:!1},{src:"We have placed an order for a comprehensive cardiac rehabilitation program to help you recover from your heart surgery.",display_src:"We have placed an order for a comprehensive cardiac rehabilitation program to help you recover from your heart surgery.",ref:"Wir haben einen Auftrag für ein umfassendes Herzrehabilitationsprogramm erteilt, um Sie bei der Genesung nach Ihrer Herzoperation zu unterstützen.",show_ref:!1},{src:"We have placed an order for a personalized exercise and weight loss plan to help you achieve a healthier lifestyle.",display_src:"We have placed an order for a personalized exercise and weight loss plan to help you achieve a healthier lifestyle.",ref:"Wir haben einen personalisierten Trainings- und Gewichtsverlustplan in Auftrag gegeben, der Ihnen dabei helfen soll, einen gesünderen Lebensstil zu erreichen.",show_ref:!1},{src:"We have placed an order for a durable medical equipment (DME) supplier to provide you with a wheelchair and other necessary mobility aids.",display_src:"We have placed an order for a durable medical equipment (DME) supplier to provide you with a wheelchair and other necessary mobility aids.",ref:"Wir haben einen Lieferanten für langlebige medizinische Geräte (DME) damit beauftragt, Ihnen einen Rollstuhl und andere notwendige Mobilitätshilfen zur Verfügung zu stellen.",show_ref:!1},{src:"We have placed an order for a follow-up appointment with a specialist to monitor your progress and make any necessary adjustments to your treatment plan.",display_src:"We have placed an order for a follow-up appointment with a specialist to monitor your progress and make any necessary adjustments to your treatment plan.",ref:"Wir haben einen Folgetermin bei einem Spezialisten vereinbart, um Ihre Fortschritte zu überwachen und gegebenenfalls notwendige Anpassungen Ihres Behandlungsplans vorzunehmen.",show_ref:!1},{src:"There is no need for further intravenous antibiotics.",display_src:"There is no need for further intravenous antibiotics.",ref:"Eine weitere intravenöse Antibiotikagabe ist nicht erforderlich.",show_ref:!1},{src:"There is no need for supplemental oxygen therapy at home.",display_src:"There is no need for supplemental oxygen therapy at home.",ref:"Eine zusätzliche Sauerstofftherapie zu Hause ist nicht erforderlich.",show_ref:!1},{src:"There is no need for daily blood tests after discharge.",display_src:"There is no need for daily blood tests after discharge.",ref:"Nach der Entlassung sind keine täglichen Blutuntersuchungen erforderlich.",show_ref:!1},{src:"There is no need for continued use of a urinary catheter.",display_src:"There is no need for continued use of a urinary catheter.",ref:"Eine weitere Verwendung eines Harnkatheters ist nicht erforderlich.",show_ref:!1},{src:"There is no need for anticoagulant medication injections.",display_src:"There is no need for anticoagulant medication injections.",ref:"Es sind keine gerinnungshemmenden Medikamentenspritzen erforderlich.",show_ref:!1},{src:"There is no need for additional physical therapy sessions.",display_src:"There is no need for additional physical therapy sessions.",ref:"Es sind keine zusätzlichen Physiotherapiesitzungen erforderlich.",show_ref:!1},{src:"There is no need for a follow-up visit with a cardiologist.",display_src:"There is no need for a follow-up visit with a cardiologist.",ref:"Ein Nachuntersuchungsbesuch beim Kardiologen ist nicht erforderlich.",show_ref:!1},{src:"There is no need for continued use of pain medication.",display_src:"There is no need for continued use of pain medication.",ref:"Eine weitere Einnahme von Schmerzmitteln ist nicht erforderlich.",show_ref:!1},{src:"There is no need for outpatient wound care appointments.",display_src:"There is no need for outpatient wound care appointments.",ref:"Eine ambulante Wundversorgung ist nicht erforderlich.",show_ref:!1},{src:"There is no need for a referral to a specialist for your condition.",display_src:"There is no need for a referral to a specialist for your condition.",ref:"Eine Überweisung an einen Spezialisten für Ihre Erkrankung ist nicht erforderlich.",show_ref:!1},{src:"You recovered without treatment.",display_src:"You recovered without treatment.",ref:"Sie sind ohne Behandlung genesen.",show_ref:!1},{src:"We found no specific abnormalities that require treatment.",display_src:"We found no specific abnormalities that require treatment.",ref:"Wir haben keine spezifischen Anomalien festgestellt, die einer Behandlung bedürfen.",show_ref:!1}],Je=[{src:"abdomen",ref:"Bauch",display_src:"abdomen",show_ref:!1,definition:[`abdomen /ˈabdəmən/
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

`]}],ai=[{src:"To reduce the symptoms of &lt;CONDITION&gt;:",display_src:"To reduce the symptoms of &lt;CONDITION&gt;:",ref:"Um die Symptome zu lindern&lt;CONDITION&gt; :",show_ref:!1},{src:"When you go home, please make sure to: ",display_src:"When you go home, please make sure to: ",ref:"Wenn Sie nach Hause gehen, achten Sie bitte darauf:",show_ref:!1},{src:"Slowly increase your exercise. Do not push yourself too hard.",display_src:"Slowly increase your exercise. Do not push yourself too hard.",ref:"Steigern Sie Ihr Training langsam. Überfordern Sie sich nicht zu sehr.",show_ref:!1},{src:"Change positions slowly",display_src:"Change positions slowly",ref:"Wechseln Sie langsam die Position",show_ref:!1},{src:"Elevate your &lt;BODY PART&gt; to help reduce swelling and increase blood flow.",display_src:"Elevate your &lt;BODY PART&gt; to help reduce swelling and increase blood flow.",ref:"Erhöhen Sie Ihr&lt;BODY PART&gt; um Schwellungen zu reduzieren und die Durchblutung zu erhöhen.",show_ref:!1},{src:"Stay hydrated",display_src:"Stay hydrated",ref:"Trinke genug",show_ref:!1},{src:"Gargle with warm salt water",display_src:"Gargle with warm salt water",ref:"Mit warmem Salzwasser gurgeln",show_ref:!1},{src:"Keep your wounds clean and dry.",display_src:"Keep your wounds clean and dry.",ref:"Halten Sie Ihre Wunden sauber und trocken.",show_ref:!1},{src:"Change the dressing daily",display_src:"Change the dressing daily",ref:"Wechseln Sie den Verband täglich",show_ref:!1},{src:"Apply antibiotic (Neosporin) ointment daily.",display_src:"Apply antibiotic (Neosporin) ointment daily.",ref:"Tragen Sie täglich eine Antibiotika-Salbe (Neosporin) auf.",show_ref:!1},{src:"Clean the wound with water and soap.",display_src:"Clean the wound with water and soap.",ref:"Reinigen Sie die Wunde mit Wasser und Seife.",show_ref:!1},{src:"Avoid rigorous scrubbing on the wound.",display_src:"Avoid rigorous scrubbing on the wound.",ref:"Vermeiden Sie starkes Schrubben der Wunde.",show_ref:!1},{src:"Watch for signs of infection such as fever, spreading redness or worsening pain",display_src:"Watch for signs of infection such as fever, spreading redness or worsening pain",ref:"Achten Sie auf Anzeichen einer Infektion wie Fieber, sich ausbreitende Rötung oder sich verschlimmernde Schmerzen",show_ref:!1},{src:"You can shower as usual, using soap and running water.",display_src:"You can shower as usual, using soap and running water.",ref:"Sie können wie gewohnt mit Seife und fließendem Wasser duschen.",show_ref:!1},{src:"Keep the gauze dressing on for &lt;TIME PERIOD&gt;",display_src:"Keep the gauze dressing on for &lt;TIME PERIOD&gt;",ref:"Lassen Sie den Mullverband noch eine Weile an&lt;TIME PERIOD&gt;",show_ref:!1},{src:"Use &lt;MEDICATION&gt; for &lt;N&gt; &lt;TIME&gt; every &lt;N&gt; &lt;TIME&gt; for &lt;SYMPTOM&gt;",display_src:"Use &lt;MEDICATION&gt; for &lt;N&gt; &lt;TIME&gt; every &lt;N&gt; &lt;TIME&gt; for &lt;SYMPTOM&gt;",ref:"Verwenden&lt;MEDICATION&gt; für&lt;N&gt;&lt;TIME&gt; jeden&lt;N&gt;&lt;TIME&gt; für&lt;SYMPTOM&gt;",show_ref:!1},{src:"Avoid skipping meals",display_src:"Avoid skipping meals",ref:"Vermeiden Sie es, Mahlzeiten auszulassen",show_ref:!1},{src:"Rest",display_src:"Rest",ref:"Ausruhen",show_ref:!1},{src:"Avoid strenuous activities.",display_src:"Avoid strenuous activities.",ref:"Vermeiden Sie anstrengende Aktivitäten.",show_ref:!1},{src:"Avoid strenuous activities for at least &lt;TIME&gt;.",display_src:"Avoid strenuous activities for at least &lt;TIME&gt;.",ref:"Vermeiden Sie mindestens eine Zeit lang anstrengende Aktivitäten&lt;TIME&gt; .",show_ref:!1},{src:"Avoid strenuous activities until you feel better.",display_src:"Avoid strenuous activities until you feel better.",ref:"Vermeiden Sie anstrengende Aktivitäten, bis Sie sich besser fühlen.",show_ref:!1},{src:"Avoid cognitively and visually stimulating activities such as loud music, TV, bright lights, etc.",display_src:"Avoid cognitively and visually stimulating activities such as loud music, TV, bright lights, etc.",ref:"Vermeiden Sie kognitiv und visuell anregende Aktivitäten wie laute Musik, Fernsehen, helles Licht usw.",show_ref:!1},{src:"Do not lift anything over &lt;N&gt; pounds for &lt;N&gt; weeks.",display_src:"Do not lift anything over &lt;N&gt; pounds for &lt;N&gt; weeks.",ref:"Heben Sie nichts darüber&lt;N&gt; Pfund für&lt;N&gt; Wochen.",show_ref:!1},{src:"Avoid &lt;MEDICATION&gt;.",display_src:"Avoid &lt;MEDICATION&gt;.",ref:"Vermeiden&lt;MEDICATION&gt; .",show_ref:!1},{src:"Reduce your use of alcohol and illicit drugs.",display_src:"Reduce your use of alcohol and illicit drugs.",ref:"Reduzieren Sie den Konsum von Alkohol und illegalen Drogen.",show_ref:!1},{src:"Do not use &lt;MEDICATION&gt;.",display_src:"Do not use &lt;MEDICATION&gt;.",ref:"Verwende nicht&lt;MEDICATION&gt; .",show_ref:!1},{src:"Check your &lt;SYMPTOM&gt; regularly.",display_src:"Check your &lt;SYMPTOM&gt; regularly.",ref:"Überprüfe dein&lt;SYMPTOM&gt; regelmäßig.",show_ref:!1},{src:"Check your &lt;SYMPTOM&gt; every &lt;TIME&gt;.",display_src:"Check your &lt;SYMPTOM&gt; every &lt;TIME&gt;.",ref:"Überprüfe dein&lt;SYMPTOM&gt; jeden&lt;TIME&gt; .",show_ref:!1},{src:"Eat regularly to avoid low blood sugar",display_src:"Eat regularly to avoid low blood sugar",ref:"Essen Sie regelmäßig, um einen niedrigen Blutzuckerspiegel zu vermeiden",show_ref:!1},{src:"You are not allowed to drive until you have been cleared by neurology. We have filed a report with the DMV.",display_src:"You are not allowed to drive until you have been cleared by neurology. We have filed a report with the DMV.",ref:"Sie dürfen kein Auto fahren, bis Sie von der Neurologie freigegeben wurden. Wir haben eine Anzeige beim DMV eingereicht.",show_ref:!1},{src:"Do not put yourself in a situation where loss of consciousness will cause you severe harm.",display_src:"Do not put yourself in a situation where loss of consciousness will cause you severe harm.",ref:"Bringen Sie sich nicht in eine Situation, in der ein Bewusstseinsverlust zu schweren Schäden führen kann.",show_ref:!1},{src:"You were seen in the emergency department for &lt;SYMPTOM&gt;",display_src:"You were seen in the emergency department for &lt;SYMPTOM&gt;",ref:"Sie wurden in der Notaufnahme gesehen&lt;SYMPTOM&gt;",show_ref:!1},{src:"You were admitted to the hospital for &lt;SYMPTOM&gt;.",display_src:"You were admitted to the hospital for &lt;SYMPTOM&gt;.",ref:"Sie wurden ins Krankenhaus eingeliefert&lt;SYMPTOM&gt; .",show_ref:!1},{src:"You were admitted to the hospital.",display_src:"You were admitted to the hospital.",ref:"Sie wurden ins Krankenhaus eingeliefert.",show_ref:!1},{src:"You were evaluated by &lt;CLINIC&gt;.",display_src:"You were evaluated by &lt;CLINIC&gt;.",ref:"Sie wurden von bewertet&lt;CLINIC&gt; .",show_ref:!1},{src:"Contact &lt;OFFICE&gt; at &lt;DEID&gt;",display_src:"Contact &lt;OFFICE&gt; at &lt;DEID&gt;",ref:"Kontakt&lt;OFFICE&gt; bei&lt;DEID&gt;",show_ref:!1},{src:"If you have questions, please contact &lt;OFFICE&gt;",display_src:"If you have questions, please contact &lt;OFFICE&gt;",ref:"Bei Fragen wenden Sie sich bitte an&lt;OFFICE&gt;",show_ref:!1},{src:"The ED is available 24 hours a day, 7 days a week.",display_src:"The ED is available 24 hours a day, 7 days a week.",ref:"Die Notaufnahme ist 24 Stunden am Tag, 7 Tage die Woche erreichbar.",show_ref:!1},{src:"Based on your symptoms and test results, you have &lt;CONDITION&gt;.",display_src:"Based on your symptoms and test results, you have &lt;CONDITION&gt;.",ref:"Basierend auf Ihren Symptomen und Testergebnissen haben Sie&lt;CONDITION&gt; .",show_ref:!1},{src:"Based on your symptoms and test results, you do NOT have &lt;CONDITION&gt;.",display_src:"Based on your symptoms and test results, you do NOT have &lt;CONDITION&gt;.",ref:"Basierend auf Ihren Symptomen und Testergebnissen ist dies NICHT der Fall&lt;CONDITION&gt; .",show_ref:!1},{src:"Based on your symptoms and test results, we think you may have &lt;CONDITION&gt;.",display_src:"Based on your symptoms and test results, we think you may have &lt;CONDITION&gt;.",ref:"Basierend auf Ihren Symptomen und Testergebnissen gehen wir davon aus, dass dies bei Ihnen der Fall sein könnte&lt;CONDITION&gt; .",show_ref:!1},{src:"Based on your symptoms and test results, we do NOT think you have &lt;CONDITION&gt;.",display_src:"Based on your symptoms and test results, we do NOT think you have &lt;CONDITION&gt;.",ref:"Basierend auf Ihren Symptomen und Testergebnissen gehen wir NICHT davon aus, dass dies bei Ihnen der Fall ist&lt;CONDITION&gt; .",show_ref:!1},{src:"You have a history of &lt;CONDITION&gt;, which puts you at increased risk of &lt;CONDITION&gt;.",display_src:"You have a history of &lt;CONDITION&gt;, which puts you at increased risk of &lt;CONDITION&gt;.",ref:"Sie haben eine Geschichte von&lt;CONDITION&gt; , wodurch Sie einem erhöhten Risiko ausgesetzt sind&lt;CONDITION&gt; .",show_ref:!1},{src:"We think your &lt;SYMPTOM&gt; is from not taking your &lt;MEDICATION&gt;.",display_src:"We think your &lt;SYMPTOM&gt; is from not taking your &lt;MEDICATION&gt;.",ref:"Wir denken, Ihr&lt;SYMPTOM&gt; liegt daran, dass du deine nicht nimmst&lt;MEDICATION&gt; .",show_ref:!1},{src:"We think your &lt;SYMPTOM&gt; is from taking your &lt;MEDICATION&gt; the wrong way.",display_src:"We think your &lt;SYMPTOM&gt; is from taking your &lt;MEDICATION&gt; the wrong way.",ref:"Wir denken, Ihr&lt;SYMPTOM&gt; ist von der Einnahme Ihres&lt;MEDICATION&gt; der falsche Weg.",show_ref:!1},{src:"We think Your &lt;SYMPTOM&gt; is due to &lt;CONDITION&gt;.",display_src:"We think Your &lt;SYMPTOM&gt; is due to &lt;CONDITION&gt;.",ref:"Wir denken Ihr&lt;SYMPTOM&gt; beruht auf&lt;CONDITION&gt; .",show_ref:!1},{src:"We think Your &lt;SYMPTOM&gt; may be related to &lt;CONDITION&gt;.",display_src:"We think Your &lt;SYMPTOM&gt; may be related to &lt;CONDITION&gt;.",ref:"Wir denken Ihr&lt;SYMPTOM&gt; kann damit zusammenhängen&lt;CONDITION&gt; .",show_ref:!1},{src:"It is not clear what is causing your &lt;SYMPTOM&gt;.",display_src:"It is not clear what is causing your &lt;SYMPTOM&gt;.",ref:"Es ist nicht klar, was Ihre Ursache ist&lt;SYMPTOM&gt; .",show_ref:!1},{src:"We think your &lt;SYMPTOM&gt; is due to &lt;MEDICATION&gt;.",display_src:"We think your &lt;SYMPTOM&gt; is due to &lt;MEDICATION&gt;.",ref:"Wir denken, Ihr&lt;SYMPTOM&gt; beruht auf&lt;MEDICATION&gt; .",show_ref:!1},{src:"&lt;CONDITION&gt; is not causing problems at this time.",display_src:"&lt;CONDITION&gt; is not causing problems at this time.",ref:"&lt;CONDITION&gt;verursacht derzeit keine Probleme.",show_ref:!1},{src:"&lt;CONDITION&gt; causes &lt;SYMPTOM&gt;.",display_src:"&lt;CONDITION&gt; causes &lt;SYMPTOM&gt;.",ref:"&lt;CONDITION&gt;Ursachen&lt;SYMPTOM&gt; .",show_ref:!1},{src:"We think your &lt;SYMPTOM&gt; is a side effect of &lt;MEDICATION&gt;.",display_src:"We think your &lt;SYMPTOM&gt; is a side effect of &lt;MEDICATION&gt;.",ref:"Wir denken, Ihr&lt;SYMPTOM&gt; ist eine Nebenwirkung von&lt;MEDICATION&gt; .",show_ref:!1},{src:"You have a history of &lt;CONDITION&gt;.",display_src:"You have a history of &lt;CONDITION&gt;.",ref:"Sie haben eine Geschichte von&lt;CONDITION&gt; .",show_ref:!1},{src:"We did not find any dangerous cause of your &lt;SYMPTOM&gt;.",display_src:"We did not find any dangerous cause of your &lt;SYMPTOM&gt;.",ref:"Wir haben keine gefährliche Ursache für Sie gefunden&lt;SYMPTOM&gt; .",show_ref:!1},{src:"It is safe for you to go home at this time.",display_src:"It is safe for you to go home at this time.",ref:"Zu diesem Zeitpunkt ist es für Sie sicher, nach Hause zu gehen.",show_ref:!1},{src:"You chose to leave the hospital against medical advice.",display_src:"You chose to leave the hospital against medical advice.",ref:"Sie haben sich entschieden, das Krankenhaus entgegen dem ärztlichen Rat zu verlassen.",show_ref:!1},{src:"Please follow up with &lt;CLINIC&gt; &lt;DEID&gt;",display_src:"Please follow up with &lt;CLINIC&gt; &lt;DEID&gt;",ref:"Bitte folgen Sie mit&lt;CLINIC&gt;&lt;DEID&gt;",show_ref:!1},{src:"Please follow up with &lt;CLINIC&gt; within the next &lt;TIME&gt;.",display_src:"Please follow up with &lt;CLINIC&gt; within the next &lt;TIME&gt;.",ref:"Bitte folgen Sie mit&lt;CLINIC&gt; innerhalb der nächsten&lt;TIME&gt; .",show_ref:!1},{src:"Please follow up with &lt;CLINIC&gt; as soon as possible.",display_src:"Please follow up with &lt;CLINIC&gt; as soon as possible.",ref:"Bitte folgen Sie mit&lt;CLINIC&gt; so schnell wie möglich.",show_ref:!1},{src:"Please follow up with &lt;CLINIC&gt; to discuss your medications.",display_src:"Please follow up with &lt;CLINIC&gt; to discuss your medications.",ref:"Bitte folgen Sie mit&lt;CLINIC&gt; um Ihre Medikamente zu besprechen.",show_ref:!1},{src:"Please follow up with &lt;CLINIC&gt; for &lt;TREATMENT&gt;.",display_src:"Please follow up with &lt;CLINIC&gt; for &lt;TREATMENT&gt;.",ref:"Bitte folgen Sie mit&lt;CLINIC&gt; für&lt;TREATMENT&gt; .",show_ref:!1},{src:"Please follow up with &lt;CLINIC&gt; for &lt;TEST&gt;.",display_src:"Please follow up with &lt;CLINIC&gt; for &lt;TEST&gt;.",ref:"Bitte folgen Sie mit&lt;CLINIC&gt; für&lt;TEST&gt; .",show_ref:!1},{src:"Please follow up with &lt;CLINIC&gt; to discuss your test results.",display_src:"Please follow up with &lt;CLINIC&gt; to discuss your test results.",ref:"Bitte folgen Sie mit&lt;CLINIC&gt; um Ihre Testergebnisse zu besprechen.",show_ref:!1},{src:"Please follow up with &lt;CLINIC&gt; to monitor your &lt;SYMPTOM/CONDITION&gt;.",display_src:"Please follow up with &lt;CLINIC&gt; to monitor your &lt;SYMPTOM/CONDITION&gt;.",ref:"Bitte folgen Sie mit&lt;CLINIC&gt; um Ihre zu überwachen&lt;SYMPTOM/CONDITION&gt; .",show_ref:!1},{src:"Please follow up with &lt;CLINIC&gt; for further evaluation.",display_src:"Please follow up with &lt;CLINIC&gt; for further evaluation.",ref:"Bitte folgen Sie mit&lt;CLINIC&gt; zur weiteren Auswertung.",show_ref:!1},{src:"Please follow up with &lt;CLINIC&gt; if your symptoms persist.",display_src:"Please follow up with &lt;CLINIC&gt; if your symptoms persist.",ref:"Bitte folgen Sie mit&lt;CLINIC&gt; wenn Ihre Symptome anhalten.",show_ref:!1},{src:"You have an appointment with &lt;DEID&gt; at &lt;CLINIC&gt; on &lt;DEID&gt; at &lt;TIME&gt;.",display_src:"You have an appointment with &lt;DEID&gt; at &lt;CLINIC&gt; on &lt;DEID&gt; at &lt;TIME&gt;.",ref:"Sie haben einen Termin mit&lt;DEID&gt; bei&lt;CLINIC&gt; An&lt;DEID&gt; bei&lt;TIME&gt; .",show_ref:!1},{src:"&lt;CLINIC&gt; will call you to schedule an appointment.",display_src:"&lt;CLINIC&gt; will call you to schedule an appointment.",ref:"&lt;CLINIC&gt;ruft Sie an, um einen Termin zu vereinbaren.",show_ref:!1},{src:"Please call &lt;CLINIC&gt; to make an appointment.",display_src:"Please call &lt;CLINIC&gt; to make an appointment.",ref:"Rufen Sie bitte&lt;CLINIC&gt; Einen Termin vereinbaren.",show_ref:!1},{src:"Please do not miss this appointment.",display_src:"Please do not miss this appointment.",ref:"Bitte verpassen Sie diesen Termin nicht.",show_ref:!1},{src:"We will refer you to the &lt;CLINIC&gt;.",display_src:"We will refer you to the &lt;CLINIC&gt;.",ref:"Wir verweisen Sie auf die&lt;CLINIC&gt; .",show_ref:!1},{src:"If you do not get a call from &lt;CLINIC&gt; in the next &lt;N&gt; days, please call at &lt;DEID&gt;",display_src:"If you do not get a call from &lt;CLINIC&gt; in the next &lt;N&gt; days, please call at &lt;DEID&gt;",ref:"Wenn Sie keinen Anruf von erhalten&lt;CLINIC&gt; im nächsten&lt;N&gt; Tage, rufen Sie bitte an&lt;DEID&gt;",show_ref:!1},{src:"It is very important that you have a &lt;TEST&gt; within the next &lt;TIME&gt;",display_src:"It is very important that you have a &lt;TEST&gt; within the next &lt;TIME&gt;",ref:"Es ist sehr wichtig, dass Sie eine haben&lt;TEST&gt; innerhalb der nächsten&lt;TIME&gt;",show_ref:!1},{src:"Follow-up appointments with your outpatient providers are listed below.",display_src:"Follow-up appointments with your outpatient providers are listed below.",ref:"Folgetermine bei Ihren ambulanten Anbietern sind unten aufgeführt.",show_ref:!1},{src:"Please take this copy of your discharge summary with you to your appointment.",display_src:"Please take this copy of your discharge summary with you to your appointment.",ref:"Bitte nehmen Sie diese Kopie Ihres Entlassungsberichts zu Ihrem Termin mit.",show_ref:!1},{src:"Our discharge coordinator will help you arrange an appointment.",display_src:"Our discharge coordinator will help you arrange an appointment.",ref:"Unser Entlassungskoordinator hilft Ihnen bei der Terminvereinbarung.",show_ref:!1},{src:"Please find a primary care doctor.",display_src:"Please find a primary care doctor.",ref:"Bitte suchen Sie einen Hausarzt auf.",show_ref:!1},{src:"Please share this information with your primary care doctor.",display_src:"Please share this information with your primary care doctor.",ref:"Bitte teilen Sie diese Informationen Ihrem Hausarzt mit.",show_ref:!1},{src:"As discussed, please take these medications as follows: ",display_src:"As discussed, please take these medications as follows: ",ref:"Wie besprochen, nehmen Sie diese Medikamente bitte wie folgt ein:",show_ref:!1},{src:"The following medications have CHANGES:",display_src:"The following medications have CHANGES:",ref:"Bei folgenden Medikamenten gibt es ÄNDERUNGEN:",show_ref:!1},{src:"START taking the following medications:",display_src:"START taking the following medications:",ref:"Beginnen Sie mit der Einnahme der folgenden Medikamente:",show_ref:!1},{src:"STOP taking the following medications:",display_src:"STOP taking the following medications:",ref:"Beenden Sie die Einnahme folgender Medikamente:",show_ref:!1},{src:"&lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; for &lt;TIME&gt;",display_src:"&lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; for &lt;TIME&gt;",ref:"&lt;N&gt;&lt;MEASUREMENT&gt;&lt;UNITS&gt;&lt;FREQUENCY&gt;&lt;TIME&gt;für&lt;TIME&gt;",show_ref:!1},{src:"&lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; with food.",display_src:"&lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; with food.",ref:"&lt;N&gt;&lt;MEASUREMENT&gt;&lt;UNITS&gt;&lt;FREQUENCY&gt;&lt;TIME&gt;mit Essen.",show_ref:!1},{src:"We have given you enough of this medication for &lt;TIME&gt;.",display_src:"We have given you enough of this medication for &lt;TIME&gt;.",ref:"Wir haben Ihnen genug von diesem Medikament gegeben&lt;TIME&gt; .",show_ref:!1},{src:"Please finish all of the &lt;MEDICATION&gt; prescribed even if you are feeling better.",display_src:"Please finish all of the &lt;MEDICATION&gt; prescribed even if you are feeling better.",ref:"Bitte beenden Sie alles&lt;MEDICATION&gt; verschrieben, auch wenn es Ihnen besser geht.",show_ref:!1},{src:"We have sent the prescription for &lt;MEDICATION&gt; to your pharmacy",display_src:"We have sent the prescription for &lt;MEDICATION&gt; to your pharmacy",ref:"Wir haben das Rezept verschickt&lt;MEDICATION&gt; zu Ihrer Apotheke",show_ref:!1},{src:"The &lt;MEDICATION&gt; is available for pick up at your pharmacy.",display_src:"The &lt;MEDICATION&gt; is available for pick up at your pharmacy.",ref:"Der&lt;MEDICATION&gt; liegt zur Abholung in Ihrer Apotheke bereit.",show_ref:!1},{src:"&lt;MEDICATION&gt; is available over-the-counter without a prescription",display_src:"&lt;MEDICATION&gt; is available over-the-counter without a prescription",ref:"&lt;MEDICATION&gt;ist rezeptfrei rezeptfrei erhältlich",show_ref:!1},{src:"Please fill your &lt;MEDICATION&gt; prescription.",display_src:"Please fill your &lt;MEDICATION&gt; prescription.",ref:"Bitte füllen Sie Ihre aus&lt;MEDICATION&gt; Rezept.",show_ref:!1},{src:"We recommend &lt;MEDICATION&gt;.",display_src:"We recommend &lt;MEDICATION&gt;.",ref:"Wir empfehlen&lt;MEDICATION&gt; .",show_ref:!1},{src:"&lt;OFFICE&gt; recommend &lt;MEDICATION&gt;.",display_src:"&lt;OFFICE&gt; recommend &lt;MEDICATION&gt;.",ref:"&lt;OFFICE&gt;empfehlen&lt;MEDICATION&gt; .",show_ref:!1},{src:"You declined &lt;MEDICATION/TREATMENT&gt;.",display_src:"You declined &lt;MEDICATION/TREATMENT&gt;.",ref:"Sie haben abgelehnt&lt;MEDICATION/TREATMENT&gt; .",show_ref:!1},{src:"You do not need &lt;MEDICATION&gt;.",display_src:"You do not need &lt;MEDICATION&gt;.",ref:"Du brauchst nicht&lt;MEDICATION&gt; .",show_ref:!1},{src:"You do not need &lt;MEDICATION&gt; for the &lt;CONDITION&gt;.",display_src:"You do not need &lt;MEDICATION&gt; for the &lt;CONDITION&gt;.",ref:"Du brauchst nicht&lt;MEDICATION&gt; für die&lt;CONDITION&gt; .",show_ref:!1},{src:"We are increasing your dose of &lt;MEDICATION&gt;",display_src:"We are increasing your dose of &lt;MEDICATION&gt;",ref:"Wir erhöhen Ihre Dosis&lt;MEDICATION&gt;",show_ref:!1},{src:"We are decreasing your dose of &lt;MEDICATION&gt;",display_src:"We are decreasing your dose of &lt;MEDICATION&gt;",ref:"Wir reduzieren Ihre Dosis&lt;MEDICATION&gt;",show_ref:!1},{src:"Please increase your &lt;MEDICATION&gt; to &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; for &lt;TIME PERIOD&gt; starting &lt;DATE&gt;.",display_src:"Please increase your &lt;MEDICATION&gt; to &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; for &lt;TIME PERIOD&gt; starting &lt;DATE&gt;.",ref:"Bitte erhöhen Sie Ihre&lt;MEDICATION&gt; Zu&lt;N&gt;&lt;MEASUREMENT&gt;&lt;UNITS&gt;&lt;FREQUENCY&gt;&lt;TIME&gt; für&lt;TIME PERIOD&gt; beginnend&lt;DATE&gt; .",show_ref:!1},{src:"Please decrease your &lt;MEDICATION&gt; to &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; for &lt;TIME PERIOD&gt; starting &lt;DATE&gt;.",display_src:"Please decrease your &lt;MEDICATION&gt; to &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; for &lt;TIME PERIOD&gt; starting &lt;DATE&gt;.",ref:"Bitte verringern Sie Ihre&lt;MEDICATION&gt; Zu&lt;N&gt;&lt;MEASUREMENT&gt;&lt;UNITS&gt;&lt;FREQUENCY&gt;&lt;TIME&gt; für&lt;TIME PERIOD&gt; beginnend&lt;DATE&gt; .",show_ref:!1},{src:"Please continue to take your medications as prescribed.",display_src:"Please continue to take your medications as prescribed.",ref:"Bitte nehmen Sie Ihre Medikamente weiterhin wie verordnet ein.",show_ref:!1},{src:"Continue your other medications as prescribed.",display_src:"Continue your other medications as prescribed.",ref:"Setzen Sie Ihre anderen Medikamente wie verordnet fort.",show_ref:!1},{src:"Continue taking &lt;MEDICATION&gt; until your follow-up appointment with &lt;DEID&gt;",display_src:"Continue taking &lt;MEDICATION&gt; until your follow-up appointment with &lt;DEID&gt;",ref:"Nehmen Sie weiter&lt;MEDICATION&gt; bis zu Ihrem Folgetermin mit&lt;DEID&gt;",show_ref:!1},{src:"Continue taking &lt;MEDICATION&gt; for &lt;TIME&gt;",display_src:"Continue taking &lt;MEDICATION&gt; for &lt;TIME&gt;",ref:"Nehmen Sie weiter&lt;MEDICATION&gt; für&lt;TIME&gt;",show_ref:!1},{src:"Continue taking &lt;MEDICATION&gt; &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt;",display_src:"Continue taking &lt;MEDICATION&gt; &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt;",ref:"Nehmen Sie weiter&lt;MEDICATION&gt;&lt;N&gt;&lt;MEASUREMENT&gt;&lt;UNITS&gt;&lt;FREQUENCY&gt;&lt;TIME&gt;",show_ref:!1},{src:"Do NOT take &lt;MEDICATION&gt; for &lt;TIME&gt;",display_src:"Do NOT take &lt;MEDICATION&gt; for &lt;TIME&gt;",ref:"Nimm nicht&lt;MEDICATION&gt; für&lt;TIME&gt;",show_ref:!1},{src:"Do NOT take &lt;MEDICATION&gt; until your follow-up appointment with &lt;DEID&gt;",display_src:"Do NOT take &lt;MEDICATION&gt; until your follow-up appointment with &lt;DEID&gt;",ref:"Nimm nicht&lt;MEDICATION&gt; bis zu Ihrem Folgetermin mit&lt;DEID&gt;",show_ref:!1},{src:"Take &lt;MEDICATION&gt; &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; for &lt;SYMPTOM&gt;.",display_src:"Take &lt;MEDICATION&gt; &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; for &lt;SYMPTOM&gt;.",ref:"Nehmen&lt;MEDICATION&gt;&lt;N&gt;&lt;MEASUREMENT&gt;&lt;UNITS&gt;&lt;FREQUENCY&gt;&lt;TIME&gt; für&lt;SYMPTOM&gt; .",show_ref:!1},{src:"Start taking &lt;MEDICATION&gt; &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; after &lt;TIME&gt;.",display_src:"Start taking &lt;MEDICATION&gt; &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; after &lt;TIME&gt;.",ref:"Beginnen Sie mit der Einnahme&lt;MEDICATION&gt;&lt;N&gt;&lt;MEASUREMENT&gt;&lt;UNITS&gt;&lt;FREQUENCY&gt;&lt;TIME&gt; nach&lt;TIME&gt; .",show_ref:!1},{src:"Start taking &lt;MEDICATION&gt; &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; &lt;TIME&gt;.",display_src:"Start taking &lt;MEDICATION&gt; &lt;N&gt; &lt;MEASUREMENT&gt;&lt;UNITS&gt; &lt;FREQUENCY&gt; &lt;TIME&gt; &lt;TIME&gt;.",ref:"Beginnen Sie mit der Einnahme&lt;MEDICATION&gt;&lt;N&gt;&lt;MEASUREMENT&gt;&lt;UNITS&gt;&lt;FREQUENCY&gt;&lt;TIME&gt;&lt;TIME&gt; .",show_ref:!1},{src:"Stop taking &lt;MEDICATION&gt; for &lt;TIME&gt;",display_src:"Stop taking &lt;MEDICATION&gt; for &lt;TIME&gt;",ref:"Hören Sie auf zu nehmen&lt;MEDICATION&gt; für&lt;TIME&gt;",show_ref:!1},{src:"Stop taking &lt;MEDICATION&gt; after &lt;TIME&gt;",display_src:"Stop taking &lt;MEDICATION&gt; after &lt;TIME&gt;",ref:"Hören Sie auf zu nehmen&lt;MEDICATION&gt; nach&lt;TIME&gt;",show_ref:!1},{src:"Stop taking &lt;MEDICATION&gt; until your follow-up appointment with &lt;DEID&gt;",display_src:"Stop taking &lt;MEDICATION&gt; until your follow-up appointment with &lt;DEID&gt;",ref:"Hören Sie auf zu nehmen&lt;MEDICATION&gt; bis zu Ihrem Folgetermin mit&lt;DEID&gt;",show_ref:!1},{src:"Please eat before you take &lt;MEDICATION&gt;",display_src:"Please eat before you take &lt;MEDICATION&gt;",ref:"Bitte essen Sie vor der Einnahme&lt;MEDICATION&gt;",show_ref:!1},{src:"If you develop any side effects or if you have any questions, stop the medication and call the office.",display_src:"If you develop any side effects or if you have any questions, stop the medication and call the office.",ref:"Wenn Sie Nebenwirkungen bemerken oder Fragen haben, brechen Sie das Medikament ab und rufen Sie die Praxis an.",show_ref:!1},{src:"Do not drive or operate machinery for &lt;TIME&gt; after taking &lt;MEDICATION&gt;",display_src:"Do not drive or operate machinery for &lt;TIME&gt; after taking &lt;MEDICATION&gt;",ref:"Fahren Sie kein Fahrzeug und bedienen Sie keine Maschinen&lt;TIME&gt; nach der Einnahme&lt;MEDICATION&gt;",show_ref:!1},{src:"Do not take &lt;MEDICATION&gt; and &lt;MEDICATION&gt; at the same time.",display_src:"Do not take &lt;MEDICATION&gt; and &lt;MEDICATION&gt; at the same time.",ref:"Nimm nicht&lt;MEDICATION&gt; Und&lt;MEDICATION&gt; gleichzeitig.",show_ref:!1},{src:"Please be careful with these medications and use only when needed.",display_src:"Please be careful with these medications and use only when needed.",ref:"Seien Sie bitte vorsichtig mit diesen Medikamenten und verwenden Sie sie nur bei Bedarf.",show_ref:!1},{src:"Please be careful with &lt;MEDICATION&gt; and use only when needed.",display_src:"Please be careful with &lt;MEDICATION&gt; and use only when needed.",ref:"Bitte seien Sie vorsichtig mit&lt;MEDICATION&gt; und nur bei Bedarf verwenden.",show_ref:!1},{src:"Do not take more than &lt;MEASUREMENT&gt; of &lt;MEDICATION&gt; per day.",display_src:"Do not take more than &lt;MEASUREMENT&gt; of &lt;MEDICATION&gt; per day.",ref:"Nehmen Sie nicht mehr als ein&lt;MEASUREMENT&gt; von&lt;MEDICATION&gt; pro Tag.",show_ref:!1},{src:"Take &lt;MEDICATION&gt; for &lt;SYMPTOM&gt;.",display_src:"Take &lt;MEDICATION&gt; for &lt;SYMPTOM&gt;.",ref:"Nehmen&lt;MEDICATION&gt; für&lt;SYMPTOM&gt; .",show_ref:!1},{src:"Take &lt;MEDICATION&gt; to decrease &lt;SYMPTOM&gt;.",display_src:"Take &lt;MEDICATION&gt; to decrease &lt;SYMPTOM&gt;.",ref:"Nehmen&lt;MEDICATION&gt; verringern&lt;SYMPTOM&gt; .",show_ref:!1},{src:"Take &lt;MEDICATION&gt; to increase &lt;SYMPTOM&gt;.",display_src:"Take &lt;MEDICATION&gt; to increase &lt;SYMPTOM&gt;.",ref:"Nehmen&lt;MEDICATION&gt; erhöhen&lt;SYMPTOM&gt; .",show_ref:!1},{src:"We have NOT made any changes to your medications.",display_src:"We have NOT made any changes to your medications.",ref:"Wir haben KEINE Änderungen an Ihren Medikamenten vorgenommen.",show_ref:!1},{src:"You do not need &lt;MEDICATION&gt;.",display_src:"You do not need &lt;MEDICATION&gt;.",ref:"Du brauchst nicht&lt;MEDICATION&gt; .",show_ref:!1},{src:"Please take your medications according to the instructions.",display_src:"Please take your medications according to the instructions.",ref:"Bitte nehmen Sie Ihre Medikamente entsprechend den Anweisungen ein.",show_ref:!1},{src:"&lt;MEDICATION&gt; can cause &lt;SYMPTOM&gt;.",display_src:"&lt;MEDICATION&gt; can cause &lt;SYMPTOM&gt;.",ref:"&lt;MEDICATION&gt;kann verursachen&lt;SYMPTOM&gt; .",show_ref:!1},{src:"Please adjust your insulin by your scale.",display_src:"Please adjust your insulin by your scale.",ref:"Bitte passen Sie Ihren Insulinspiegel an Ihre Waage an.",show_ref:!1},{src:"Please monitor your symptoms",display_src:"Please monitor your symptoms",ref:"Bitte überwachen Sie Ihre Symptome",show_ref:!1},{src:"Please return to the emergency department if you experience &lt;SYMPTOM&gt; or any new or worsening symptoms that are concerning.",display_src:"Please return to the emergency department if you experience &lt;SYMPTOM&gt; or any new or worsening symptoms that are concerning.",ref:"Bitte kehren Sie in die Notaufnahme zurück, wenn Sie etwas bemerken&lt;SYMPTOM&gt; oder alle neuen oder sich verschlimmernden Symptome, die besorgniserregend sind.",show_ref:!1},{src:"Please contact a healthcare provider if you experience &lt;SYMPTOM&gt; or any new or worsening symptoms that are concerning.",display_src:"Please contact a healthcare provider if you experience &lt;SYMPTOM&gt; or any new or worsening symptoms that are concerning.",ref:"Bitte wenden Sie sich an einen Arzt, wenn dies bei Ihnen der Fall ist&lt;SYMPTOM&gt; oder alle neuen oder sich verschlimmernden Symptome, die besorgniserregend sind.",show_ref:!1},{src:"Please call 911 if you experience &lt;SYMPTOM&gt;.",display_src:"Please call 911 if you experience &lt;SYMPTOM&gt;.",ref:"Bitte rufen Sie 911 an, wenn Sie etwas bemerken&lt;SYMPTOM&gt; .",show_ref:!1},{src:"Warm Regards, Dr. &lt;DEID&gt; -  Intern  Dr. &lt;DEID&gt; -  Resident  Dr. &lt;DEID&gt;, MD -  Attending",display_src:"Warm Regards, Dr. &lt;DEID&gt; -  Intern  Dr. &lt;DEID&gt; -  Resident  Dr. &lt;DEID&gt;, MD -  Attending",ref:"Herzliche Grüße, Dr.&lt;DEID&gt; - Praktikant Dr.&lt;DEID&gt; - Assistenzarzt Dr.&lt;DEID&gt; , MD – Teilnahme",show_ref:!1},{src:"Sincerely,  Dr. &lt;DEID&gt; -  Intern  Dr. &lt;DEID&gt; -  Resident  Dr. &lt;DEID&gt;, MD -  Attending",display_src:"Sincerely,  Dr. &lt;DEID&gt; -  Intern  Dr. &lt;DEID&gt; -  Resident  Dr. &lt;DEID&gt;, MD -  Attending",ref:"Mit freundlichen Grüßen Dr.&lt;DEID&gt; - Praktikant Dr.&lt;DEID&gt; - Assistenzarzt Dr.&lt;DEID&gt; , MD – Teilnahme",show_ref:!1},{src:"It was a pleasure taking care of you!",display_src:"It was a pleasure taking care of you!",ref:"Es war mir eine Freude, mich um Sie zu kümmern!",show_ref:!1},{src:"Thank you for allowing us to participate in your care.",display_src:"Thank you for allowing us to participate in your care.",ref:"Vielen Dank, dass Sie uns an Ihrer Betreuung teilhaben lassen.",show_ref:!1},{src:"We did &lt;TEST&gt;.",display_src:"We did &lt;TEST&gt;.",ref:"Wir machten&lt;TEST&gt; .",show_ref:!1},{src:"The &lt;TEST&gt; showed &lt;CONDITION&gt;",display_src:"The &lt;TEST&gt; showed &lt;CONDITION&gt;",ref:"Der&lt;TEST&gt; zeigte&lt;CONDITION&gt;",show_ref:!1},{src:"The &lt;TEST&gt; did NOT show &lt;CONDITION&gt;",display_src:"The &lt;TEST&gt; did NOT show &lt;CONDITION&gt;",ref:"Der&lt;TEST&gt; zeigte sich nicht&lt;CONDITION&gt;",show_ref:!1},{src:"The &lt;TEST&gt; was normal.",display_src:"The &lt;TEST&gt; was normal.",ref:"Der&lt;TEST&gt; war normal.",show_ref:!1},{src:"All of the results are normal.",display_src:"All of the results are normal.",ref:"Alle Ergebnisse sind normal.",show_ref:!1},{src:"The results of the &lt;TEST&gt; will come back in about &lt;TIME&gt;.",display_src:"The results of the &lt;TEST&gt; will come back in about &lt;TIME&gt;.",ref:"Die Ergebnisse der&lt;TEST&gt; werde in etwa wiederkommen&lt;TIME&gt; .",show_ref:!1},{src:"We will call you if the &lt;TEST&gt; results are positive.",display_src:"We will call you if the &lt;TEST&gt; results are positive.",ref:"Wir rufen Sie an, wenn das der Fall ist&lt;TEST&gt; Die Ergebnisse sind positiv.",show_ref:!1},{src:"If the &lt;TEST&gt; results are positive we may change your medication.",display_src:"If the &lt;TEST&gt; results are positive we may change your medication.",ref:"Wenn die&lt;TEST&gt; Wenn die Ergebnisse positiv sind, können wir Ihre Medikamente ändern.",show_ref:!1},{src:"If the &lt;TEST&gt; results are negative we may change your medication.",display_src:"If the &lt;TEST&gt; results are negative we may change your medication.",ref:"Wenn die&lt;TEST&gt; Wenn die Ergebnisse negativ sind, können wir Ihre Medikamente ändern.",show_ref:!1},{src:"&lt;TEST&gt; will show whether you have &lt;CONDITION&gt;.",display_src:"&lt;TEST&gt; will show whether you have &lt;CONDITION&gt;.",ref:"&lt;TEST&gt;wird zeigen, ob du es hast&lt;CONDITION&gt; .",show_ref:!1},{src:"We did &lt;TEST&gt; to check for &lt;CONDITION&gt;.",display_src:"We did &lt;TEST&gt; to check for &lt;CONDITION&gt;.",ref:"Wir machten&lt;TEST&gt; zu überprüfen&lt;CONDITION&gt; .",show_ref:!1},{src:"There is no need for &lt;TEST&gt; at this time.",display_src:"There is no need for &lt;TEST&gt; at this time.",ref:"Es besteht keine Notwendigkeit&lt;TEST&gt; zu diesem Zeitpunkt.",show_ref:!1},{src:"You have received your first dose of &lt;MEDICATION&gt; in the hospital.",display_src:"You have received your first dose of &lt;MEDICATION&gt; in the hospital.",ref:"Sie haben Ihre erste Dosis erhalten&lt;MEDICATION&gt; im Krankenhaus.",show_ref:!1},{src:"You were continued on all your home medications while you were in the hospital.",display_src:"You were continued on all your home medications while you were in the hospital.",ref:"Während Sie im Krankenhaus waren, haben Sie weiterhin alle Ihre Hausmedikamente eingenommen.",show_ref:!1},{src:"We put gauze on top of the sutures once we had finished.",display_src:"We put gauze on top of the sutures once we had finished.",ref:"Sobald wir fertig waren, legten wir Gaze auf die Nähte.",show_ref:!1},{src:"We dressed your wound.",display_src:"We dressed your wound.",ref:"Wir haben Ihre Wunde versorgt.",show_ref:!1},{src:"This treatment will help with your &lt;SYMPTOM&gt;",display_src:"This treatment will help with your &lt;SYMPTOM&gt;",ref:"Diese Behandlung wird Ihnen helfen&lt;SYMPTOM&gt;",show_ref:!1},{src:"This treatment will help prevent &lt;SYMPTOM&gt;",display_src:"This treatment will help prevent &lt;SYMPTOM&gt;",ref:"Diese Behandlung hilft bei der Vorbeugung&lt;SYMPTOM&gt;",show_ref:!1},{src:"In the hospital we gave you &lt;MEDICATION&gt; for &lt;SYMPTOM&gt;",display_src:"In the hospital we gave you &lt;MEDICATION&gt; for &lt;SYMPTOM&gt;",ref:"Im Krankenhaus haben wir dich gegeben&lt;MEDICATION&gt; für&lt;SYMPTOM&gt;",show_ref:!1},{src:"In the hospital we gave you &lt;TREATMENT&gt; for &lt;SYMPTOM&gt;",display_src:"In the hospital we gave you &lt;TREATMENT&gt; for &lt;SYMPTOM&gt;",ref:"Im Krankenhaus haben wir dich gegeben&lt;TREATMENT&gt; für&lt;SYMPTOM&gt;",show_ref:!1},{src:"Your &lt;SYMPTOM&gt; improved with &lt;MEDICATION&gt;.",display_src:"Your &lt;SYMPTOM&gt; improved with &lt;MEDICATION&gt;.",ref:"Dein&lt;SYMPTOM&gt; verbessert mit&lt;MEDICATION&gt; .",show_ref:!1},{src:"Your &lt;SYMPTOM&gt; has not improved.",display_src:"Your &lt;SYMPTOM&gt; has not improved.",ref:"Dein&lt;SYMPTOM&gt; hat sich nicht verbessert.",show_ref:!1},{src:"We gave you &lt;MEDICATION&gt; to increase your &lt;SYMPTOM&gt;",display_src:"We gave you &lt;MEDICATION&gt; to increase your &lt;SYMPTOM&gt;",ref:"Wir haben es dir gegeben&lt;MEDICATION&gt; um deine zu steigern&lt;SYMPTOM&gt;",show_ref:!1},{src:"We gave you &lt;MEDICATION&gt; to decrease your &lt;SYMPTOM&gt;",display_src:"We gave you &lt;MEDICATION&gt; to decrease your &lt;SYMPTOM&gt;",ref:"Wir haben es dir gegeben&lt;MEDICATION&gt; um deine zu verringern&lt;SYMPTOM&gt;",show_ref:!1},{src:"We have placed an order for &lt;TREATMENT&gt;.",display_src:"We have placed an order for &lt;TREATMENT&gt;.",ref:"Wir haben eine Bestellung für aufgegeben&lt;TREATMENT&gt; .",show_ref:!1},{src:"There is no need for &lt;TREATMENT&gt;.",display_src:"There is no need for &lt;TREATMENT&gt;.",ref:"Es besteht keine Notwendigkeit&lt;TREATMENT&gt; .",show_ref:!1},{src:"You recovered without treatment.",display_src:"You recovered without treatment.",ref:"Sie sind ohne Behandlung genesen.",show_ref:!1},{src:"We found no specific abnormalities that require treatment.",display_src:"We found no specific abnormalities that require treatment.",ref:"Wir haben keine spezifischen Anomalien festgestellt, die einer Behandlung bedürfen.",show_ref:!1}],ze=ne(""),Qe=ne({}),Ie=ne(!1),le=ne(!1),Ne=ne(!0),Q=ne(-1),pe={translation_type:"none",translation_hyp:"",scores:[],words:[],templates:[],terms:[],tableFilter:"sentence",tableResults:[]},Kn={source:"",last_method_selected:"baseline",baseline:pe,nnmt:pe,template:pe},$=ne(["Dear Mr. Doe,","You were seen in the emergency department for trouble breathing.","While you were in the hospital we gave you breathing treatments and your symptoms improved."].map(n=>({source:n,last_method_selected:"baseline",baseline:{...pe,translation_hyp:n},nnmt:{...pe,translation_type:"nnmt",translation_hyp:n},template:{...pe,translation_type:"template",translation_hyp:n}}))),Me=Fe([$,Q],([n,e])=>e<0?{}:n[e],{}),Oe=ne(""),oi=Fe(Me,n=>Object.keys(n).length>0&&n.last_method_selected=="nnmt"),ie=ne(["sentences"]),li=Fe([Oe,ze,ie,Me],([n,e,i,s],r)=>{{let t=[];i.includes("sentences")&&(t=[...t,...Ce]),i.includes("terms")&&(t=[...t,...Je]),i.includes("templates")&&(Object.keys(s).length>0?t=[...s[s.last_method_selected].tableResults,...t]:t=[...ai,...t]),i.includes("nearest neighbors")&&Object.keys(s).length>0&&(t=[...s[s.last_method_selected].tableResults,...t]),t.length===0&&(t=[...Ce,...Je]),n.length===0?r(t):r(t.reduce((a,l)=>{let d=l.src.toLowerCase().search(n.toLowerCase());return d>=0&&a.push({...l,display_src:d>=0?l.src.substring(0,d)+'<span style="font-weight: 800">'+l.src.substring(d,d+n.length)+"</span>"+l.src.substring(d+n.length):l.src}),a},[]))}},Ce);function ci(n){let e,i,s,r;return{c(){e=w("form"),i=w("input"),g(i,"class","search-bar-input svelte-1o0lhg6"),g(i,"type","search"),g(i,"id","input-search"),g(i,"placeholder","Type to search..."),g(e,"class","search-bar svelte-1o0lhg6")},m(t,a){I(t,e,a),p(e,i),s||(r=B(i,"input",n[1]),s=!0)},p:E,i:E,o:E,d(t){t&&z(e),s=!1,r()}}}function hi(n,e,i){let s;return K(n,Oe,t=>i(0,s=t)),[s,t=>R(Oe,s=t.target.value,s)]}class di extends U{constructor(e){super(),V(this,e,hi,ci,Y,{})}}function ui(n){let e,i=n[2].svg+"",s;return{c(){e=Bn("svg"),g(e,"class",s=n[3].class+" icon"),g(e,"width",n[0]),g(e,"height",n[1]),g(e,"viewBox","0 0 "+n[2].boxWidth+" "+n[2].boxHeight),g(e,"aria-hidden","true"),g(e,"fill","none")},m(r,t){I(r,e,t),e.innerHTML=i},p(r,[t]){t&8&&s!==(s=r[3].class+" icon")&&g(e,"class",s),t&1&&g(e,"width",r[0]),t&2&&g(e,"height",r[1])},i:E,o:E,d(r){r&&z(e)}}}function fi(n,e,i){let{name:s=""}=e,{width:r="1rem"}=e,{height:t="1rem"}=e,{color:a="#000000"}=e,d=[{name:"filter",boxHeight:24,boxWidth:24,svg:'<path d="M4 5L10 5M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5L20 5M4 12L16 12M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19L20 19M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke='+a+' stroke-width="1.5" stroke-linecap="round"/>'},{name:"export",boxHeight:24,boxWidth:24,svg:'<path d="M16.44 8.8999C20.04 9.2099 21.51 11.0599 21.51 15.1099V15.2399C21.51 19.7099 19.72 21.4999 15.25 21.4999H8.73998C4.26998 21.4999 2.47998 19.7099 2.47998 15.2399V15.1099C2.47998 11.0899 3.92998 9.2399 7.46998 8.9099" stroke='+a+` stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15.0001V3.62012" stroke=`+a+` stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.35 5.85L12 2.5L8.65002 5.85" stroke=`+a+' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'},{name:"copy",boxHeight:1024,boxWidth:1024,svg:"<path fill="+a+' d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"/><path fill='+a+' d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"/>'},{name:"x",boxHeight:25,boxWidth:25,svg:"<path fill="+a+' d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"/>'},{name:"check",boxHeight:24,boxWidth:24,svg:'<path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill='+a+" />"}].find(o=>o.name===s);return n.$$set=o=>{i(3,e=he(he({},e),Ze(o))),"name"in o&&i(4,s=o.name),"width"in o&&i(0,r=o.width),"height"in o&&i(1,t=o.height),"color"in o&&i(5,a=o.color)},e=Ze(e),[r,t,d,e,s,a]}class ke extends U{constructor(e){super(),V(this,e,fi,ui,Y,{name:4,width:0,height:1,color:5})}}function Xe(n){let e,i=n[0].ref+"";return{c(){e=w("div"),g(e,"class","sentence-wrapper sentence-ref svelte-1rn8mcv")},m(s,r){I(s,e,r),e.innerHTML=i},p(s,r){r&1&&i!==(i=s[0].ref+"")&&(e.innerHTML=i)},d(s){s&&z(e)}}}function mi(n){let e,i,s,r=n[0].display_src+"",t,a,l,d,o,u,f,h,c=n[1]&&Xe(n);return o=new ke({props:{name:"copy"}}),{c(){e=w("div"),i=w("div"),s=w("button"),t=T(),c&&c.c(),a=T(),l=w("button"),d=w("div"),H(o.$$.fragment),g(s,"class","sentence-wrapper svelte-1rn8mcv"),g(i,"class","text-col svelte-1rn8mcv"),ee(d,"display","flex"),ee(d,"flex-direction","column"),ee(d,"justify-content","center"),ee(d,"height","100%"),g(l,"class","add-sentence-button icon-button svelte-1rn8mcv"),g(e,"class","list-row svelte-1rn8mcv")},m(m,k){I(m,e,k),p(e,i),p(i,s),s.innerHTML=r,p(i,t),c&&c.m(i,null),p(e,a),p(e,l),p(l,d),x(o,d,null),u=!0,f||(h=[B(s,"click",n[2]),B(l,"click",n[3])],f=!0)},p(m,[k]){(!u||k&1)&&r!==(r=m[0].display_src+"")&&(s.innerHTML=r),m[1]?c?c.p(m,k):(c=Xe(m),c.c(),c.m(i,null)):c&&(c.d(1),c=null)},i(m){u||(D(o.$$.fragment,m),u=!0)},o(m){A(o.$$.fragment,m),u=!1},d(m){m&&z(e),c&&c.d(),j(o),f=!1,q(h)}}}function gi(n,e,i){let{data:s}=e,r=!1;const t=()=>i(1,r=!r),a=()=>{navigator.clipboard.writeText(s.src)};return n.$$set=l=>{"data"in l&&i(0,s=l.data)},[s,r,t,a]}class pi extends U{constructor(e){super(),V(this,e,gi,mi,Y,{data:0})}}function en(n,e,i){const s=n.slice();return s[1]=e[i],s}function nn(n){let e,i;return e=new pi({props:{data:n[1]}}),{c(){H(e.$$.fragment)},m(s,r){x(e,s,r),i=!0},p(s,r){const t={};r&1&&(t.data=s[1]),e.$set(t)},i(s){i||(D(e.$$.fragment,s),i=!0)},o(s){A(e.$$.fragment,s),i=!1},d(s){j(e,s)}}}function yi(n){let e,i,s,r=n[0].length+"",t,a,l,d,o=L(n[0]),u=[];for(let h=0;h<o.length;h+=1)u[h]=nn(en(n,o,h));const f=h=>A(u[h],1,1,()=>{u[h]=null});return{c(){e=w("div"),i=w("div"),s=w("span"),t=G(r),a=G(" items"),l=T();for(let h=0;h<u.length;h+=1)u[h].c();g(i,"id","sentence-list-count-label"),g(i,"class","svelte-1wua9ur"),g(e,"class","sentence-list svelte-1wua9ur")},m(h,c){I(h,e,c),p(e,i),p(i,s),p(s,t),p(s,a),p(e,l);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(e,null);d=!0},p(h,[c]){if((!d||c&1)&&r!==(r=h[0].length+"")&&re(t,r),c&1){o=L(h[0]);let m;for(m=0;m<o.length;m+=1){const k=en(h,o,m);u[m]?(u[m].p(k,c),D(u[m],1)):(u[m]=nn(k),u[m].c(),D(u[m],1),u[m].m(e,null))}for(te(),m=o.length;m<u.length;m+=1)f(m);ae()}},i(h){if(!d){for(let c=0;c<o.length;c+=1)D(u[c]);d=!0}},o(h){u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)A(u[c]);d=!1},d(h){h&&z(e),se(u,h)}}}function wi(n,e,i){let s;return K(n,li,r=>i(0,s=r)),[s]}class bi extends U{constructor(e){super(),V(this,e,wi,yi,Y,{})}}function sn(n,e,i){const s=n.slice();return s[8]=e[i],s}function rn(n,e,i){const s=n.slice();return s[11]=e[i],s}function tn(n){let e,i=L(n[3]),s=[];for(let r=0;r<i.length;r+=1)s[r]=an(rn(n,i,r));return{c(){e=w("div");for(let r=0;r<s.length;r+=1)s[r].c();g(e,"id","filters-popup"),g(e,"class","svelte-ayrzw7")},m(r,t){I(r,e,t);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null)},p(r,t){if(t&14){i=L(r[3]);let a;for(a=0;a<i.length;a+=1){const l=rn(r,i,a);s[a]?s[a].p(l,t):(s[a]=an(l),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=i.length}},d(r){r&&z(e),se(s,r)}}}function an(n){let e,i,s,r=n[11]+"",t,a,l,d;function o(...u){return n[5](n[11],...u)}return{c(){e=w("label"),i=w("input"),t=G(r),g(i,"type","checkbox"),i.checked=s=n[2].includes(n[11]),g(i,"class","svelte-ayrzw7"),g(e,"class",a=X(n[11]==="nearest neighbors"?n[1]?"":"inactive-label":"")+" svelte-ayrzw7")},m(u,f){I(u,e,f),p(e,i),p(e,t),l||(d=B(i,"change",o),l=!0)},p(u,f){n=u,f&4&&s!==(s=n[2].includes(n[11]))&&(i.checked=s),f&2&&a!==(a=X(n[11]==="nearest neighbors"?n[1]?"":"inactive-label":"")+" svelte-ayrzw7")&&g(e,"class",a)},d(u){u&&z(e),l=!1,d()}}}function on(n){let e,i=n[8]+"",s,r,t,a,l,d,o,u;a=new ke({props:{name:"x"}});function f(...h){return n[6](n[8],...h)}return{c(){e=w("div"),s=G(i),r=T(),t=w("button"),H(a.$$.fragment),l=T(),g(t,"class","remove-tag svelte-ayrzw7"),g(e,"class","tag svelte-ayrzw7")},m(h,c){I(h,e,c),p(e,s),p(e,r),p(e,t),x(a,t,null),p(e,l),d=!0,o||(u=B(t,"click",f),o=!0)},p(h,c){n=h,(!d||c&4)&&i!==(i=n[8]+"")&&re(s,i)},i(h){d||(D(a.$$.fragment,h),d=!0)},o(h){A(a.$$.fragment,h),d=!1},d(h){h&&z(e),j(a),o=!1,u()}}}function ln(n){let e,i,s;return{c(){e=w("button"),e.textContent="clear all",g(e,"id","clear-filters"),g(e,"class","svelte-ayrzw7")},m(r,t){I(r,e,t),i||(s=B(e,"click",n[7]),i=!0)},p:E,d(r){r&&z(e),i=!1,s()}}}function ki(n){let e,i,s,r,t,a,l,d,o,u,f,h,c,m,k,y;s=new di({}),l=new ke({props:{name:"filter",width:"1.6rem",height:"1.6rem"}});let b=n[0]&&tn(n),v=L(n[2]),_=[];for(let M=0;M<v.length;M+=1)_[M]=on(sn(n,v,M));const O=M=>A(_[M],1,1,()=>{_[M]=null});let N=n[2].length>0&&ln(n);return c=new bi({}),{c(){e=w("div"),i=w("div"),H(s.$$.fragment),r=T(),t=w("div"),a=w("button"),H(l.$$.fragment),d=T(),b&&b.c(),o=T(),u=w("div");for(let M=0;M<_.length;M+=1)_[M].c();f=T(),N&&N.c(),h=T(),H(c.$$.fragment),g(a,"id","open-filters-button"),g(a,"class","svelte-ayrzw7"),g(t,"id","filters"),g(t,"class","svelte-ayrzw7"),g(i,"class","top-bar svelte-ayrzw7"),g(u,"id","tag-row"),g(u,"class","svelte-ayrzw7"),g(e,"class","table-div svelte-ayrzw7")},m(M,F){I(M,e,F),p(e,i),x(s,i,null),p(i,r),p(i,t),p(t,a),x(l,a,null),p(t,d),b&&b.m(t,null),p(e,o),p(e,u);for(let P=0;P<_.length;P+=1)_[P]&&_[P].m(u,null);p(u,f),N&&N.m(u,null),p(e,h),x(c,e,null),m=!0,k||(y=B(a,"click",n[4]),k=!0)},p(M,[F]){if(M[0]?b?b.p(M,F):(b=tn(M),b.c(),b.m(t,null)):b&&(b.d(1),b=null),F&4){v=L(M[2]);let P;for(P=0;P<v.length;P+=1){const ve=sn(M,v,P);_[P]?(_[P].p(ve,F),D(_[P],1)):(_[P]=on(ve),_[P].c(),D(_[P],1),_[P].m(u,f))}for(te(),P=v.length;P<_.length;P+=1)O(P);ae()}M[2].length>0?N?N.p(M,F):(N=ln(M),N.c(),N.m(u,null)):N&&(N.d(1),N=null)},i(M){if(!m){D(s.$$.fragment,M),D(l.$$.fragment,M);for(let F=0;F<v.length;F+=1)D(_[F]);D(c.$$.fragment,M),m=!0}},o(M){A(s.$$.fragment,M),A(l.$$.fragment,M),_=_.filter(Boolean);for(let F=0;F<_.length;F+=1)A(_[F]);A(c.$$.fragment,M),m=!1},d(M){M&&z(e),j(s),j(l),b&&b.d(),se(_,M),N&&N.d(),j(c),k=!1,y()}}}function vi(n,e,i){let s,r;K(n,oi,f=>i(1,s=f)),K(n,ie,f=>i(2,r=f));let t=["sentences","terms","templates","nearest neighbors"],a=!1;return[a,s,r,t,f=>{i(0,a=!a)},(f,h)=>{h.target.checked?R(ie,r=[...r,f],r):R(ie,r=[...r].filter(c=>c!==f),r)},(f,h)=>{R(ie,r=[...r].filter(c=>c!==f),r)},f=>{R(ie,r=[],r)}]}class _i extends U{constructor(e){super(),V(this,e,vi,ki,Y,{})}}function cn(n){return Object.prototype.toString.call(n)==="[object Date]"}function Si(n){const e=n-1;return e*e*e+1}function xe(n,e){if(n===e||n!==n)return()=>n;const i=typeof n;if(i!==typeof e||Array.isArray(n)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const s=e.map((r,t)=>xe(n[t],r));return r=>s.map(t=>t(r))}if(i==="object"){if(!n||!e)throw new Error("Object cannot be null");if(cn(n)&&cn(e)){n=n.getTime(),e=e.getTime();const t=e-n;return a=>new Date(n+a*t)}const s=Object.keys(e),r={};return s.forEach(t=>{r[t]=xe(n[t],e[t])}),t=>{const a={};return s.forEach(l=>{a[l]=r[l](t)}),a}}if(i==="number"){const s=e-n;return r=>n+r*s}throw new Error(`Cannot interpolate ${i} values`)}function zi(n,e={}){const i=ne(n);let s,r=n;function t(a,l){if(n==null)return i.set(n=a),Promise.resolve();r=a;let d=s,o=!1,{delay:u=0,duration:f=400,easing:h=Rn,interpolate:c=xe}=he(he({},e),l);if(f===0)return d&&(d.abort(),d=null),i.set(n=r),Promise.resolve();const m=Vn()+u;let k;return s=Un(y=>{if(y<m)return!0;o||(k=c(n,a),typeof f=="function"&&(f=f(n,a)),o=!0),d&&(d.abort(),d=null);const b=y-m;return b>f?(i.set(n=a),!1):(i.set(n=k(h(b/f))),!0)}),s.promise}return{set:t,update:(a,l)=>t(a(r,n),l),subscribe:i.subscribe}}async function Ve(n,e="",i=""){let s=new URL("analyze",J(ze));s.searchParams.append("sentence",n),s.searchParams.append("method",e),s.searchParams.append("template",i);const r=await fetch(s,{method:"get",headers:new Headers({"ngrok-skip-browser-warning":"69420"})}).then(t=>t.json()).then(t=>t.results);return console.log(r),r}async function Ii(n){J(Ie)&&(le.set(!0),Ve(J(Me).source,"template",n).then(e=>{$.update(i=>i.map((s,r)=>r===J(Q)?e:s)),le.set(!1)}))}async function Di(n){$.update(e=>e.map((i,s)=>s===J(Q)?{...i,last_method_selected:n}:i)),ie.set([J($)[J(Q)][n].tableFilter])}async function Ue(n){J($)[J(Q)].source!==n.target.innerText&&(J(Ie)?(le.set(!0),Ve(n.target.innerText).then(e=>{$.update(i=>i.map((s,r)=>r===J(Q)?e:s)),ie.set([e[e.last_method_selected].tableFilter]),le.set(!1)})):$.update(e=>e.map((i,s)=>s===J(Q)?{...i,source:n.target.innerText,baseline:{...i.baseline,translation_hyp:n.target.innerText},nnmt:{...i.nnmt,translation_hyp:n.target.innerText},template:{...i.template,translation_hyp:n.target.innerText}}:i)))}function Ti(n){let e,i=n[0].source+"",s,r,t,a,l,d=n[2]&&hn(n);return{c(){e=w("p"),s=G(i),r=T(),d&&d.c(),t=Wn(),g(e,"contenteditable","true"),g(e,"class","svelte-wxjcu0")},m(o,u){I(o,e,u),p(e,s),I(o,r,u),d&&d.m(o,u),I(o,t,u),a||(l=B(e,"blur",Ue),a=!0)},p(o,u){u&1&&i!==(i=o[0].source+"")&&Ke(s,i),o[2]?d?d.p(o,u):(d=hn(o),d.c(),d.m(t.parentNode,t)):d&&(d.d(1),d=null)},d(o){o&&(z(e),z(r),z(t)),d&&d.d(o),a=!1,l()}}}function Ni(n){let e,i=n[0].source+"",s,r,t;return{c(){e=w("p"),s=G(i),g(e,"class","empty-p svelte-wxjcu0"),g(e,"contenteditable","true")},m(a,l){I(a,e,l),p(e,s),r||(t=[B(e,"blur",Ue),Fn(Ei.call(null,e))],r=!0)},p(a,l){l&1&&i!==(i=a[0].source+"")&&Ke(s,i)},d(a){a&&z(e),r=!1,q(t)}}}function hn(n){let e,i=n[0][n[3]].translation_hyp+"",s;return{c(){e=w("p"),s=G(i),g(e,"class","de svelte-wxjcu0")},m(r,t){I(r,e,t),p(e,s)},p(r,t){t&9&&i!==(i=r[0][r[3]].translation_hyp+"")&&re(s,i)},d(r){r&&z(e)}}}function Ai(n){let e,i,s,r,t,a,l,d;function o(h,c){return h[0].source===""?Ni:Ti}let u=o(n),f=u(n);return{c(){e=w("div"),i=w("div"),r=T(),t=w("div"),f.c(),g(i,"class",s=X("color-bar "+n[3])+" svelte-wxjcu0"),ee(i,"--height",n[4]+"%"),g(t,"class",a=X("sentence-wrapper "+n[3])+" svelte-wxjcu0"),$e(t,"selected",n[1]),g(e,"class",X("sentence-analysis-view")+" svelte-wxjcu0")},m(h,c){I(h,e,c),p(e,i),p(e,r),p(e,t),f.m(t,null),l||(d=[B(e,"mouseenter",n[7]),B(e,"mouseleave",n[8])],l=!0)},p(h,[c]){c&8&&s!==(s=X("color-bar "+h[3])+" svelte-wxjcu0")&&g(i,"class",s),c&16&&ee(i,"--height",h[4]+"%"),u===(u=o(h))&&f?f.p(h,c):(f.d(1),f=u(h),f&&(f.c(),f.m(t,null))),c&8&&a!==(a=X("sentence-wrapper "+h[3])+" svelte-wxjcu0")&&g(t,"class",a),c&10&&$e(t,"selected",h[1])},i:E,o:E,d(h){h&&z(e),f.d(),l=!1,q(d)}}}function Ei(n){n.focus()}function Mi(n,e,i){let s,r,t;K(n,Ne,h=>i(6,r=h));let{sentenceData:a=Kn}=e,{selected:l=!1}=e,{showTranslations:d}=e;const o=zi(80,{duration:400,easing:Si});K(n,o,h=>i(4,t=h));const u=h=>{l||o.set(100)},f=h=>{l||o.set(80)};return n.$$set=h=>{"sentenceData"in h&&i(0,a=h.sentenceData),"selected"in h&&i(1,l=h.selected),"showTranslations"in h&&i(2,d=h.showTranslations)},n.$$.update=()=>{n.$$.dirty&2&&(l?o.set(100):o.set(80)),n.$$.dirty&65&&i(3,s=r?"baseline":a.last_method_selected),n.$$.dirty&1&&console.log(a)},[a,l,d,s,t,o,r,u,f]}class Pi extends U{constructor(e){super(),V(this,e,Mi,Ai,Y,{sentenceData:0,selected:1,showTranslations:2})}}function Ci(n){let e,i,s,r,t,a,l,d,o,u,f;return{c(){e=w("div"),i=w("div"),s=T(),r=w("button"),t=w("span"),t.textContent="+",l=T(),d=w("div"),g(i,"class","line svelte-1sny52f"),g(i,"style",n[1]),g(t,"id","plus"),g(t,"class","svelte-1sny52f"),g(r,"style",a=n[1]+"/"),g(r,"class","svelte-1sny52f"),g(d,"class","line svelte-1sny52f"),g(d,"style",o=n[1]+"/"),g(e,"id","divider"),g(e,"class","svelte-1sny52f")},m(h,c){I(h,e,c),p(e,i),p(e,s),p(e,r),p(r,t),p(e,l),p(e,d),u||(f=[B(r,"click",On(n[3])),B(e,"mouseenter",n[4]),B(e,"mouseleave",n[5])],u=!0)},p(h,[c]){c&2&&g(i,"style",h[1]),c&2&&a!==(a=h[1]+"/")&&g(r,"style",a),c&2&&o!==(o=h[1]+"/")&&g(d,"style",o)},i:E,o:E,d(h){h&&z(e),u=!1,q(f)}}}function Bi(n,e,i){let s;const r=Qn();let t=!1;const a=o=>r("click",o),l=o=>i(0,t=!0),d=o=>i(0,t=!1);return n.$$.update=()=>{n.$$.dirty&1&&i(1,s="visibility: "+(t?"visible;":"hidden;"))},[t,s,r,a,l,d]}class Hn extends U{constructor(e){super(),V(this,e,Bi,Ci,Y,{})}}function Wi(n){let e,i,s,r,t,a,l,d,o,u,f,h,c;return{c(){e=w("div"),i=w("div"),i.innerHTML='<div class="label svelte-vclbcg">Template</div> <div class="label svelte-vclbcg">NNMT</div>',s=T(),r=w("div"),t=w("div"),a=w("div"),l=T(),d=G(n[1]),o=T(),u=w("div"),f=w("div"),h=T(),c=G(n[0]),g(i,"class","col svelte-vclbcg"),g(a,"class","bar svelte-vclbcg"),g(a,"id","template-bar"),ee(a,"--width",n[1]*2+"rem"),g(t,"class","row svelte-vclbcg"),g(f,"class","bar svelte-vclbcg"),g(f,"id","nnmt-bar"),ee(f,"--width",n[0]*2+"rem"),g(u,"class","row svelte-vclbcg"),g(r,"class","col svelte-vclbcg"),g(e,"id","legend"),g(e,"class","svelte-vclbcg")},m(m,k){I(m,e,k),p(e,i),p(e,s),p(e,r),p(r,t),p(t,a),p(t,l),p(t,d),p(r,o),p(r,u),p(u,f),p(u,h),p(u,c)},p(m,[k]){k&2&&ee(a,"--width",m[1]*2+"rem"),k&2&&re(d,m[1]),k&1&&ee(f,"--width",m[0]*2+"rem"),k&1&&re(c,m[0])},i:E,o:E,d(m){m&&z(e)}}}function Oi(n,e,i){let s,r,t;return K(n,$,a=>i(2,t=a)),n.$$.update=()=>{n.$$.dirty&4&&i(1,s=t.filter(a=>a.last_method_selected=="template").length),n.$$.dirty&4&&i(0,r=t.filter(a=>a.last_method_selected=="nnmt").length)},[r,s,t]}class xi extends U{constructor(e){super(),V(this,e,Oi,Wi,Y,{})}}function ji(n){let e,i,s,r,t,a,l,d,o;return{c(){e=w("div"),i=w("span"),i.textContent="Show translations:",s=T(),r=w("label"),t=w("input"),a=T(),l=w("span"),g(i,"class","label"),g(t,"type","checkbox"),g(t,"class","svelte-qksl4o"),g(l,"class","slider round svelte-qksl4o"),g(r,"class","switch svelte-qksl4o"),g(e,"class","row svelte-qksl4o")},m(u,f){I(u,e,f),p(e,i),p(e,s),p(e,r),p(r,t),t.checked=n[0],p(r,a),p(r,l),d||(o=B(t,"change",n[1]),d=!0)},p(u,[f]){f&1&&(t.checked=u[0])},i:E,o:E,d(u){u&&z(e),d=!1,o()}}}function Ki(n,e,i){let{on:s=!1}=e;function r(){s=this.checked,i(0,s)}return n.$$set=t=>{"on"in t&&i(0,s=t.on)},[s,r]}class Hi extends U{constructor(e){super(),V(this,e,Ki,ji,Y,{on:0})}}function dn(n,e,i){const s=n.slice();return s[12]=e[i],s[14]=i,s}function un(n){let e,i,s,r,t,a,l,d;function o(c){n[8](c)}let u={selected:n[1]===n[14],sentenceData:n[12]};n[0]!==void 0&&(u.showTranslations=n[0]),i=new Pi({props:u}),Te.push(()=>Ye(i,"showTranslations",o));function f(...c){return n[9](n[14],n[12],...c)}function h(...c){return n[10](n[14],...c)}return t=new Hn({}),t.$on("click",h),{c(){e=w("div"),H(i.$$.fragment),r=T(),H(t.$$.fragment),g(e,"class","analysis-mode-sentence-wrapper")},m(c,m){I(c,e,m),x(i,e,null),I(c,r,m),x(t,c,m),a=!0,l||(d=B(e,"click",On(f)),l=!0)},p(c,m){n=c;const k={};m&2&&(k.selected=n[1]===n[14]),m&4&&(k.sentenceData=n[12]),!s&&m&1&&(s=!0,k.showTranslations=n[0],Le(()=>s=!1)),i.$set(k)},i(c){a||(D(i.$$.fragment,c),D(t.$$.fragment,c),a=!0)},o(c){A(i.$$.fragment,c),A(t.$$.fragment,c),a=!1},d(c){c&&(z(e),z(r)),j(i),j(t,c),l=!1,d()}}}function fn(n){let e,i;return e=new xi({}),{c(){H(e.$$.fragment)},m(s,r){x(e,s,r),i=!0},i(s){i||(D(e.$$.fragment,s),i=!0)},o(s){A(e.$$.fragment,s),i=!1},d(s){j(e,s)}}}function Li(n){let e,i,s,r,t,a,l,d,o,u;function f(b){n[6](b)}let h={};n[0]!==void 0&&(h.on=n[0]),i=new Hi({props:h}),Te.push(()=>Ye(i,"on",f)),t=new Hn({}),t.$on("click",n[7]);let c=L(n[2]),m=[];for(let b=0;b<c.length;b+=1)m[b]=un(dn(n,c,b));const k=b=>A(m[b],1,1,()=>{m[b]=null});let y=!n[4]&&fn();return{c(){e=w("div"),H(i.$$.fragment),r=T(),H(t.$$.fragment),a=T();for(let b=0;b<m.length;b+=1)m[b].c();l=T(),y&&y.c(),g(e,"id","analysis-area"),g(e,"class","svelte-1he4pye")},m(b,v){I(b,e,v),x(i,e,null),p(e,r),x(t,e,null),p(e,a);for(let _=0;_<m.length;_+=1)m[_]&&m[_].m(e,null);p(e,l),y&&y.m(e,null),d=!0,o||(u=B(e,"click",n[11]),o=!0)},p(b,[v]){const _={};if(!s&&v&1&&(s=!0,_.on=b[0],Le(()=>s=!1)),i.$set(_),v&47){c=L(b[2]);let O;for(O=0;O<c.length;O+=1){const N=dn(b,c,O);m[O]?(m[O].p(N,v),D(m[O],1)):(m[O]=un(N),m[O].c(),D(m[O],1),m[O].m(e,l))}for(te(),O=c.length;O<m.length;O+=1)k(O);ae()}b[4]?y&&(te(),A(y,1,1,()=>{y=null}),ae()):y?v&16&&D(y,1):(y=fn(),y.c(),D(y,1),y.m(e,null))},i(b){if(!d){D(i.$$.fragment,b),D(t.$$.fragment,b);for(let v=0;v<c.length;v+=1)D(m[v]);D(y),d=!0}},o(b){A(i.$$.fragment,b),A(t.$$.fragment,b),m=m.filter(Boolean);for(let v=0;v<m.length;v+=1)A(m[v]);A(y),d=!1},d(b){b&&z(e),j(i),j(t),se(m,b),y&&y.d(),o=!1,u()}}}function Gi(n,e,i){let s,r,t,a;K(n,Q,k=>i(1,s=k)),K(n,$,k=>i(2,r=k)),K(n,ie,k=>i(3,t=k)),K(n,Ne,k=>i(4,a=k));function l(k){console.log(k),R($,r=r.toSpliced(k,0,Kn),r),R(Q,s=k,s)}let d=!1;function o(k){d=k,i(0,d)}const u=k=>l(0);function f(k){d=k,i(0,d)}return[d,s,r,t,a,l,o,u,f,(k,y,b)=>{s!==k&&(R(Q,s=k,s),R(ie,t=[y[y.last_method_selected].tableFilter],t))},(k,y)=>l(k+1),k=>R(Q,s=-1,s)]}class Ri extends U{constructor(e){super(),V(this,e,Gi,Li,Y,{})}}function Yi(n){let e,i;return e=new ke({props:{name:"x",color:"red",height:"1.2rem",width:"1.2rem"}}),{c(){H(e.$$.fragment)},m(s,r){x(e,s,r),i=!0},i(s){i||(D(e.$$.fragment,s),i=!0)},o(s){A(e.$$.fragment,s),i=!1},d(s){j(e,s)}}}function Fi(n){let e,i;return e=new ke({props:{name:"check",color:"green",height:"1.2rem",width:"1.2rem"}}),{c(){H(e.$$.fragment)},m(s,r){x(e,s,r),i=!0},i(s){i||(D(e.$$.fragment,s),i=!0)},o(s){A(e.$$.fragment,s),i=!1},d(s){j(e,s)}}}function Vi(n){let e,i,s,r,t,a,l,d,o,u,f,h;const c=[Fi,Yi],m=[];function k(y,b){return y[1]?0:1}return i=k(n),s=m[i]=c[i](n),{c(){e=w("div"),s.c(),r=T(),t=w("form"),a=w("input"),l=T(),d=w("input"),g(a,"type","url"),g(a,"placeholder","ngrok tunnel"),g(d,"type","submit"),d.value=o=n[1]&&n[2]===n[0]?"test":"connect",g(e,"id","ngrok-div"),g(e,"class","svelte-cvmxhv")},m(y,b){I(y,e,b),m[i].m(e,null),p(e,r),p(e,t),p(t,a),ye(a,n[0]),p(t,l),p(t,d),u=!0,f||(h=[B(a,"input",n[4]),B(t,"submit",qn(n[5]))],f=!0)},p(y,[b]){let v=i;i=k(y),i!==v&&(te(),A(m[v],1,1,()=>{m[v]=null}),ae(),s=m[i],s||(s=m[i]=c[i](y),s.c()),D(s,1),s.m(e,r)),b&1&&a.value!==y[0]&&ye(a,y[0]),(!u||b&7&&o!==(o=y[1]&&y[2]===y[0]?"test":"connect"))&&(d.value=o)},i(y){u||(D(s),u=!0)},o(y){A(s),u=!1},d(y){y&&z(e),m[i].d(),f=!1,q(h)}}}function Ui(n,e,i){let s,r,t,a,l;K(n,Qe,h=>i(6,s=h)),K(n,Ie,h=>i(1,r=h)),K(n,ze,h=>i(2,t=h)),K(n,le,h=>i(7,a=h)),K(n,$,h=>i(8,l=h));let d="";async function o(){let h=!0;if(await fetch(d,{method:"get",headers:new Headers({"ngrok-skip-browser-warning":"69420"})}).then(c=>c.json()).then(c=>console.log(c)).catch(c=>{console.log(c),h=!1}),h){R(ze,t=d,t),R(Ie,r=!0,r),R(le,a=!0,a);let c=l.map(m=>Ve(m.source));Promise.all(c).then(m=>{console.log(m),R($,l=m,l),R(le,a=!1,a)})}else R(ze,t="",t),R(Ie,r=!1,r);R(Qe,s=new Date,s)}function u(){d=this.value,i(0,d)}return[d,r,t,o,u,()=>{o()}]}class qi extends U{constructor(e){super(),V(this,e,Ui,Vi,Y,{})}}function Zi(n){let e,i,s,r,t,a,l,d,o,u,f,h,c,m,k,y;return u=new qi({}),c=new ke({props:{name:"export",width:"1.5rem",height:"1.5rem"}}),{c(){e=w("header"),i=w("div"),s=w("div"),s.innerHTML="<h2>Cephalo</h2>",r=T(),t=w("div"),a=w("select"),l=w("option"),l.textContent="control",d=w("option"),d.textContent="treatment",o=T(),H(u.$$.fragment),f=T(),h=w("button"),H(c.$$.fragment),g(s,"id","appbar-title"),g(s,"class","svelte-265ttk"),l.__value="control",ye(l,l.__value),d.__value="treatment",ye(d,d.__value),n[0]===void 0&&be(()=>n[3].call(a)),g(h,"id","export-button"),g(h,"class","svelte-265ttk"),g(t,"id","appbar-menu-buttons"),g(t,"class","svelte-265ttk"),g(i,"id","appbar-inner-wrapper"),g(i,"class","svelte-265ttk"),g(e,"id","appbar"),g(e,"class","svelte-265ttk")},m(b,v){I(b,e,v),p(e,i),p(i,s),p(i,r),p(i,t),p(t,a),p(a,l),p(a,d),we(a,n[0],!0),p(t,o),x(u,t,null),p(t,f),p(t,h),x(c,h,null),m=!0,k||(y=[B(a,"change",n[3]),B(h,"click",n[4])],k=!0)},p(b,[v]){v&1&&we(a,b[0])},i(b){m||(D(u.$$.fragment,b),D(c.$$.fragment,b),m=!0)},o(b){A(u.$$.fragment,b),A(c.$$.fragment,b),m=!1},d(b){b&&z(e),j(u),j(c),k=!1,q(y)}}}function $i(n,e,i){let s,r;K(n,Ne,o=>i(5,s=o)),K(n,$,o=>i(1,r=o));let{sidebarOpen:t}=e,a;function l(){a=He(this),i(0,a)}const d=o=>{navigator.clipboard.writeText(JSON.stringify(r))};return n.$$set=o=>{"sidebarOpen"in o&&i(2,t=o.sidebarOpen)},n.$$.update=()=>{n.$$.dirty&1&&R(Ne,s=a=="control",s)},[a,r,t,l,d]}class Ji extends U{constructor(e){super(),V(this,e,$i,Zi,Y,{sidebarOpen:2})}}function mn(n,e,i){const s=n.slice();return s[4]=e[i],s[6]=i,s}function gn(n){let e,i;return{c(){e=w("div"),g(e,"class",i=X("circle "+(n[6]<n[1]?n[2]:"grey"))+" svelte-1tbe6ev")},m(s,r){I(s,e,r)},p(s,r){r&6&&i!==(i=X("circle "+(s[6]<s[1]?s[2]:"grey"))+" svelte-1tbe6ev")&&g(e,"class",i)},d(s){s&&z(e)}}}function Qi(n){let e,i,s,r,t,a,l,d,o=L({length:pn}),u=[];for(let f=0;f<o.length;f+=1)u[f]=gn(mn(n,o,f));return{c(){e=w("div"),i=w("div"),s=w("div"),r=G(n[0]),t=T(),a=w("div"),a.innerHTML="<span>i</span>",l=T(),d=w("div");for(let f=0;f<u.length;f+=1)u[f].c();g(s,"class","score-name svelte-1tbe6ev"),g(a,"class","info svelte-1tbe6ev"),g(i,"class","score-name-wrapper svelte-1tbe6ev"),g(d,"class","score-circles svelte-1tbe6ev"),g(e,"class","score-wrapper svelte-1tbe6ev")},m(f,h){I(f,e,h),p(e,i),p(i,s),p(s,r),p(i,t),p(i,a),p(e,l),p(e,d);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(d,null)},p(f,[h]){if(h&1&&re(r,f[0]),h&6){o=L({length:pn});let c;for(c=0;c<o.length;c+=1){const m=mn(f,o,c);u[c]?u[c].p(m,h):(u[c]=gn(m),u[c].c(),u[c].m(d,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=o.length}},i:E,o:E,d(f){f&&z(e),se(u,f)}}}let pn=5;function Xi(n,e,i){let{name:s="Score"}=e,{info:r="This is a score"}=e,{score:t=3}=e,a="grey";return n.$$set=l=>{"name"in l&&i(0,s=l.name),"info"in l&&i(3,r=l.info),"score"in l&&i(1,t=l.score)},n.$$.update=()=>{n.$$.dirty&2&&i(2,a=t<3?"red":t<4?"yellow":"green")},[s,t,a,r]}class es extends U{constructor(e){super(),V(this,e,Xi,Qi,Y,{name:0,info:3,score:1})}}function yn(n,e,i){const s=n.slice();return s[3]=e[i],s[5]=i,s}function wn(n){let e,i=n[3].backtranslation+"",s;return{c(){e=w("span"),s=G(i),g(e,"class","backtranslation svelte-x1auvo")},m(r,t){I(r,e,t),p(e,s)},p(r,t){t&1&&i!==(i=r[3].backtranslation+"")&&re(s,i)},d(r){r&&z(e)}}}function bn(n){let e,i,s=n[3].word+"",r,t,a,l,d,o=n[1]==n[5]&&wn(n);function u(...f){return n[2](n[5],...f)}return{c(){e=w("button"),i=w("span"),r=T(),o&&o.c(),t=T(),g(i,"class","translated-word svelte-x1auvo"),g(e,"class",a=X("word-button"+(n[1]==n[5]?" selected":""))+" svelte-x1auvo")},m(f,h){I(f,e,h),p(e,i),i.innerHTML=s,p(e,r),o&&o.m(e,null),p(e,t),l||(d=B(e,"click",u),l=!0)},p(f,h){n=f,h&1&&s!==(s=n[3].word+"")&&(i.innerHTML=s),n[1]==n[5]?o?o.p(n,h):(o=wn(n),o.c(),o.m(e,t)):o&&(o.d(1),o=null),h&2&&a!==(a=X("word-button"+(n[1]==n[5]?" selected":""))+" svelte-x1auvo")&&g(e,"class",a)},d(f){f&&z(e),o&&o.d(),l=!1,d()}}}function ns(n){let e,i=L(n[0]),s=[];for(let r=0;r<i.length;r+=1)s[r]=bn(yn(n,i,r));return{c(){e=w("div");for(let r=0;r<s.length;r+=1)s[r].c();g(e,"class","output-wrapper svelte-x1auvo")},m(r,t){I(r,e,t);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null)},p(r,[t]){if(t&3){i=L(r[0]);let a;for(a=0;a<i.length;a+=1){const l=yn(r,i,a);s[a]?s[a].p(l,t):(s[a]=bn(l),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=i.length}},i:E,o:E,d(r){r&&z(e),se(s,r)}}}function is(n,e,i){let{words:s}=e,r=-1;const t=(a,l)=>{r==a?i(1,r=-1):i(1,r=a)};return n.$$set=a=>{"words"in a&&i(0,s=a.words)},[s,r,t]}class ss extends U{constructor(e){super(),V(this,e,is,ns,Y,{words:0})}}function kn(n,e,i){const s=n.slice();return s[7]=e[i],s}function vn(n,e,i){const s=n.slice();return s[10]=e[i],s[12]=i,s}function _n(n){let e,i,s=n[10].template+"",r;return{c(){e=w("option"),i=new xn(!1),r=T(),i.a=r,e.__value=n[12],ye(e,e.__value)},m(t,a){I(t,e,a),i.m(s,e),p(e,r)},p(t,a){a&1&&s!==(s=t[10].template+"")&&i.p(s)},d(t){t&&z(e)}}}function Sn(n){let e;return{c(){e=w("span"),e.textContent="!!",ee(e,"color","red")},m(i,s){I(i,e,s)},d(i){i&&z(e)}}}function zn(n){let e,i,s,r=n[7].type+"",t,a,l,d,o=n[7].term+"",u,f,h,c=n[7].translation+"",m,k,y=!n[7].translation_in_filled&&Sn();return{c(){e=w("div"),i=w("span"),s=new xn(!1),t=G(" ="),a=T(),l=w("div"),d=w("span"),u=G(o),f=T(),h=w("span"),m=G(c),k=T(),y&&y.c(),s.a=t,g(h,"class","de svelte-154tcnm"),g(l,"class","term-translation-wrapper svelte-154tcnm"),g(e,"class","term-wrapper svelte-154tcnm")},m(b,v){I(b,e,v),p(e,i),s.m(r,i),p(i,t),p(e,a),p(e,l),p(l,d),p(d,u),p(l,f),p(l,h),p(h,m),p(e,k),y&&y.m(e,null)},p(b,v){v&2&&r!==(r=b[7].type+"")&&s.p(r),v&2&&o!==(o=b[7].term+"")&&re(u,o),v&2&&c!==(c=b[7].translation+"")&&re(m,c),b[7].translation_in_filled?y&&(y.d(1),y=null):y||(y=Sn(),y.c(),y.m(e,null))},d(b){b&&z(e),y&&y.d()}}}function rs(n){let e,i,s,r,t=n[0][n[3]].translation+"",a,l,d,o,u,f,h=L(n[0]),c=[];for(let y=0;y<h.length;y+=1)c[y]=_n(vn(n,h,y));let m=L(n[1]),k=[];for(let y=0;y<m.length;y+=1)k[y]=zn(kn(n,m,y));return{c(){e=w("div"),i=w("select");for(let y=0;y<c.length;y+=1)c[y].c();s=T(),r=w("p"),a=T();for(let y=0;y<k.length;y+=1)k[y].c();l=T(),d=w("p"),o=G(n[2]),n[3]===void 0&&be(()=>n[5].call(i)),g(r,"class","de svelte-154tcnm"),g(d,"class","svelte-154tcnm"),g(e,"class","output-wrapper svelte-154tcnm")},m(y,b){I(y,e,b),p(e,i);for(let v=0;v<c.length;v+=1)c[v]&&c[v].m(i,null);we(i,n[3],!0),p(e,s),p(e,r),r.innerHTML=t,p(e,a);for(let v=0;v<k.length;v+=1)k[v]&&k[v].m(e,null);p(e,l),p(e,d),p(d,o),u||(f=[B(i,"change",n[5]),B(i,"change",n[6])],u=!0)},p(y,[b]){if(b&1){h=L(y[0]);let v;for(v=0;v<h.length;v+=1){const _=vn(y,h,v);c[v]?c[v].p(_,b):(c[v]=_n(_),c[v].c(),c[v].m(i,null))}for(;v<c.length;v+=1)c[v].d(1);c.length=h.length}if(b&8&&we(i,y[3]),b&9&&t!==(t=y[0][y[3]].translation+"")&&(r.innerHTML=t),b&2){m=L(y[1]);let v;for(v=0;v<m.length;v+=1){const _=kn(y,m,v);k[v]?k[v].p(_,b):(k[v]=zn(_),k[v].c(),k[v].m(e,l))}for(;v<k.length;v+=1)k[v].d(1);k.length=m.length}b&4&&re(o,y[2])},i:E,o:E,d(y){y&&z(e),se(c,y),se(k,y),u=!1,q(f)}}}function ts(n,e,i){let s,{templates:r=[]}=e,{terms:t=[]}=e,{translation_hyp:a=""}=e,{idx_of_filled_template:l=0}=e;function d(){s=He(this),i(3,s),i(4,l)}const o=u=>Ii(r[s].template);return n.$$set=u=>{"templates"in u&&i(0,r=u.templates),"terms"in u&&i(1,t=u.terms),"translation_hyp"in u&&i(2,a=u.translation_hyp),"idx_of_filled_template"in u&&i(4,l=u.idx_of_filled_template)},n.$$.update=()=>{n.$$.dirty&16&&i(3,s=l)},[r,t,a,s,l,d,o]}class as extends U{constructor(e){super(),V(this,e,ts,rs,Y,{templates:0,terms:1,translation_hyp:2,idx_of_filled_template:4})}}function In(n,e,i){const s=n.slice();return s[8]=e[i],s}function Dn(n,e,i){const s=n.slice();return s[11]=e[i],s[13]=i,s}function os(n){let e;return{c(){e=w("p"),e.textContent="Select a sentence to view translation analysis."},m(i,s){I(i,e,s)},p:E,i:E,o:E,d(i){i&&z(e)}}}function ls(n){let e,i,s,r,t,a,l=n[3].source+"",d,o,u,f,h,c,m,k,y,b,v=L(n[4]),_=[];for(let S=0;S<v.length;S+=1)_[S]=Tn(Dn(n,v,S));let O=L(n[3][n[3].last_method_selected].scores),N=[];for(let S=0;S<O.length;S+=1)N[S]=Nn(In(n,O,S));const M=S=>A(N[S],1,1,()=>{N[S]=null}),F=[ds,hs],P=[];function ve(S,W){return S[3].last_method_selected==="nnmt"?0:S[3].last_method_selected==="template"?1:-1}return~(h=ve(n))&&(c=P[h]=F[h](n)),{c(){e=w("div"),i=w("label"),s=G(`Using:
        `),r=w("select");for(let S=0;S<_.length;S+=1)_[S].c();t=T(),a=w("div"),d=G(l),o=T(),u=w("div");for(let S=0;S<N.length;S+=1)N[S].c();f=T(),c&&c.c(),m=Wn(),n[0]===void 0&&be(()=>n[5].call(r)),g(e,"id","method-selector"),g(e,"class","svelte-zfvaix"),g(a,"class","input-area svelte-zfvaix"),g(a,"contenteditable","true"),g(u,"id","scores-row"),g(u,"class","svelte-zfvaix")},m(S,W){I(S,e,W),p(e,i),p(i,s),p(i,r);for(let Z=0;Z<_.length;Z+=1)_[Z]&&_[Z].m(r,null);we(r,n[0],!0),I(S,t,W),I(S,a,W),p(a,d),I(S,o,W),I(S,u,W);for(let Z=0;Z<N.length;Z+=1)N[Z]&&N[Z].m(u,null);I(S,f,W),~h&&P[h].m(S,W),I(S,m,W),k=!0,y||(b=[B(r,"change",n[5]),B(r,"change",n[6]),B(a,"blur",n[7])],y=!0)},p(S,W){if(W&24){v=L(S[4]);let C;for(C=0;C<v.length;C+=1){const _e=Dn(S,v,C);_[C]?_[C].p(_e,W):(_[C]=Tn(_e),_[C].c(),_[C].m(r,null))}for(;C<_.length;C+=1)_[C].d(1);_.length=v.length}if(W&1&&we(r,S[0]),(!k||W&8)&&l!==(l=S[3].source+"")&&Ke(d,l),W&8){O=L(S[3][S[3].last_method_selected].scores);let C;for(C=0;C<O.length;C+=1){const _e=In(S,O,C);N[C]?(N[C].p(_e,W),D(N[C],1)):(N[C]=Nn(_e),N[C].c(),D(N[C],1),N[C].m(u,null))}for(te(),C=O.length;C<N.length;C+=1)M(C);ae()}let Z=h;h=ve(S),h===Z?~h&&P[h].p(S,W):(c&&(te(),A(P[Z],1,1,()=>{P[Z]=null}),ae()),~h?(c=P[h],c?c.p(S,W):(c=P[h]=F[h](S),c.c()),D(c,1),c.m(m.parentNode,m)):c=null)},i(S){if(!k){for(let W=0;W<O.length;W+=1)D(N[W]);D(c),k=!0}},o(S){N=N.filter(Boolean);for(let W=0;W<N.length;W+=1)A(N[W]);A(c),k=!1},d(S){S&&(z(e),z(t),z(a),z(o),z(u),z(f),z(m)),se(_,S),se(N,S),~h&&P[h].d(S),y=!1,q(b)}}}function cs(n){let e;return{c(){e=w("div"),e.textContent="Loading..."},m(i,s){I(i,e,s)},p:E,i:E,o:E,d(i){i&&z(e)}}}function Tn(n){let e,i=n[11]+"",s,r,t;return{c(){e=w("option"),s=G(i),r=T(),e.__value=n[13],ye(e,e.__value),e.selected=t=n[3].last_method_selected===n[11]},m(a,l){I(a,e,l),p(e,s),p(e,r)},p(a,l){l&8&&t!==(t=a[3].last_method_selected===a[11])&&(e.selected=t)},d(a){a&&z(e)}}}function Nn(n){let e,i;const s=[n[8]];let r={};for(let t=0;t<s.length;t+=1)r=he(r,s[t]);return e=new es({props:r}),{c(){H(e.$$.fragment)},m(t,a){x(e,t,a),i=!0},p(t,a){const l=a&8?Ge(s,[Re(t[8])]):{};e.$set(l)},i(t){i||(D(e.$$.fragment,t),i=!0)},o(t){A(e.$$.fragment,t),i=!1},d(t){j(e,t)}}}function hs(n){let e,i;const s=[n[3].template];let r={};for(let t=0;t<s.length;t+=1)r=he(r,s[t]);return e=new as({props:r}),{c(){H(e.$$.fragment)},m(t,a){x(e,t,a),i=!0},p(t,a){const l=a&8?Ge(s,[Re(t[3].template)]):{};e.$set(l)},i(t){i||(D(e.$$.fragment,t),i=!0)},o(t){A(e.$$.fragment,t),i=!1},d(t){j(e,t)}}}function ds(n){let e,i;const s=[n[3].nnmt];let r={};for(let t=0;t<s.length;t+=1)r=he(r,s[t]);return e=new ss({props:r}),{c(){H(e.$$.fragment)},m(t,a){x(e,t,a),i=!0},p(t,a){const l=a&8?Ge(s,[Re(t[3].nnmt)]):{};e.$set(l)},i(t){i||(D(e.$$.fragment,t),i=!0)},o(t){A(e.$$.fragment,t),i=!1},d(t){j(e,t)}}}function us(n){let e,i,s,r,t;const a=[cs,ls,os],l=[];function d(o,u){return u&8&&(i=null),o[1]!==-1&&o[2]?0:(i==null&&(i=Object.keys(o[3]).length!==0),i?1:2)}return s=d(n,-1),r=l[s]=a[s](n),{c(){e=w("div"),r.c(),g(e,"id","detail-view-wrapper"),g(e,"class","svelte-zfvaix")},m(o,u){I(o,e,u),l[s].m(e,null),t=!0},p(o,[u]){let f=s;s=d(o,u),s===f?l[s].p(o,u):(te(),A(l[f],1,1,()=>{l[f]=null}),ae(),r=l[s],r?r.p(o,u):(r=l[s]=a[s](o),r.c()),D(r,1),r.m(e,null))},i(o){t||(D(r),t=!0)},o(o){A(r),t=!1},d(o){o&&z(e),l[s].d()}}}function fs(n,e,i){let s,r,t;K(n,Q,f=>i(1,s=f)),K(n,le,f=>i(2,r=f)),K(n,Me,f=>i(3,t=f));let a,l=["nnmt","template"];function d(){a=He(this),i(0,a)}return[a,s,r,t,l,d,f=>Di(l[a]),f=>Ue(f)]}class ms extends U{constructor(e){super(),V(this,e,fs,us,Y,{})}}function An(n){let e,i,s,r,t;return i=new _i({}),r=new ms({}),{c(){e=w("div"),H(i.$$.fragment),s=T(),H(r.$$.fragment),g(e,"id","right-column"),g(e,"class","svelte-1fqsobq")},m(a,l){I(a,e,l),x(i,e,null),p(e,s),x(r,e,null),t=!0},i(a){t||(D(i.$$.fragment,a),D(r.$$.fragment,a),t=!0)},o(a){A(i.$$.fragment,a),A(r.$$.fragment,a),t=!1},d(a){a&&z(e),j(i),j(r)}}}function gs(n){let e,i,s,r,t,a,l,d;function o(h){n[2](h)}let u={};n[0]!==void 0&&(u.sidebarOpen=n[0]),e=new Ji({props:u}),Te.push(()=>Ye(e,"sidebarOpen",o)),a=new Ri({});let f=!n[1]&&An();return{c(){H(e.$$.fragment),s=T(),r=w("main"),t=w("div"),H(a.$$.fragment),l=T(),f&&f.c(),g(t,"class","editor-area svelte-1fqsobq"),g(r,"class","svelte-1fqsobq")},m(h,c){x(e,h,c),I(h,s,c),I(h,r,c),p(r,t),x(a,t,null),p(r,l),f&&f.m(r,null),d=!0},p(h,[c]){const m={};!i&&c&1&&(i=!0,m.sidebarOpen=h[0],Le(()=>i=!1)),e.$set(m),h[1]?f&&(te(),A(f,1,1,()=>{f=null}),ae()):f?c&2&&D(f,1):(f=An(),f.c(),D(f,1),f.m(r,null))},i(h){d||(D(e.$$.fragment,h),D(a.$$.fragment,h),D(f),d=!0)},o(h){A(e.$$.fragment,h),A(a.$$.fragment,h),A(f),d=!1},d(h){h&&(z(s),z(r)),j(e,h),j(a),f&&f.d()}}}function ps(n,e,i){let s;K(n,Ne,a=>i(1,s=a));let r=!1;function t(a){r=a,i(0,r)}return[r,s,t]}class ys extends U{constructor(e){super(),V(this,e,ps,gs,Y,{})}}new ys({target:document.getElementById("app")});
