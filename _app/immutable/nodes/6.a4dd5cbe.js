import{s as E}from"../chunks/scheduler.63274e7e.js";import{S as I,i as M,g,r as D,s as x,m as L,h as v,j as w,u as H,f,c as z,n as O,k as b,a as _,x as y,v as R,o as T,d as $,t as j,w as V,z as C,b as q,A as B,p as F}from"../chunks/index.ac22e447.js";import{e as A}from"../chunks/each.e59479a4.js";import{M as G}from"../chunks/MediaLink.6677eca6.js";async function J(){return{projects:[{name:"sway-easyfocus",url:"https://github.com/edzdez/sway-easyfocus",description:"A tool to help efficiently focus windows in Sway inspired by i3-easyfocus."},{name:"power-profiles-applet",url:"https://github.com/edzdez/power-profiles-applet",description:"A simple, gtk/libappindicator-based systray applet written in Rust that acts as a frontend to power-profiles-daemon"},{name:"simplex-cpp",url:"https://github.com/edzdez/simplex-cpp",description:"A naive implementation of Dantzig's simplex method in C++ with Eigen3 and Toml++"},{name:"nifty-ray-marcher",url:"https://github.com/edzdez/nifty-ray-marcher",description:"A simple raymarcher written in C++ with SFML"},{name:"nifty-seam-carving",url:"https://github.com/edzdez/nifty-seam-carving",description:"A CLI app for image-resizing that uses the content-aware seam-carving algorithm written in Rust."}]}}const nt=Object.freeze(Object.defineProperty({__proto__:null,load:J},Symbol.toStringTag,{value:"Module"}));function K(l){let t=l[0].name+"",r;return{c(){r=L(t)},l(e){r=O(e,t)},m(e,s){_(e,r,s)},p(e,s){s&1&&t!==(t=e[0].name+"")&&T(r,t)},d(e){e&&f(r)}}}function N(l){let t,r,e,s,u,m=l[0].description+"",p,d;return e=new G({props:{url:l[0].url,$$slots:{default:[K]},$$scope:{ctx:l}}}),{c(){t=g("div"),r=g("h2"),D(e.$$.fragment),s=x(),u=g("p"),p=L(m),this.h()},l(i){t=v(i,"DIV",{class:!0});var n=w(t);r=v(n,"H2",{class:!0});var h=w(r);H(e.$$.fragment,h),h.forEach(f),s=z(n),u=v(n,"P",{});var a=w(u);p=O(a,m),a.forEach(f),n.forEach(f),this.h()},h(){b(r,"class","font-bold text-xl mb-2"),b(t,"class","my-4 p-4 rounded-lg bg-zinc-800")},m(i,n){_(i,t,n),y(t,r),R(e,r,null),y(t,s),y(t,u),y(u,p),d=!0},p(i,[n]){const h={};n&1&&(h.url=i[0].url),n&3&&(h.$$scope={dirty:n,ctx:i}),e.$set(h),(!d||n&1)&&m!==(m=i[0].description+"")&&T(p,m)},i(i){d||($(e.$$.fragment,i),d=!0)},o(i){j(e.$$.fragment,i),d=!1},d(i){i&&f(t),V(e)}}}function Q(l,t,r){let{project:e}=t;return l.$$set=s=>{"project"in s&&r(0,e=s.project)},[e]}class U extends I{constructor(t){super(),M(this,t,Q,N,E,{project:0})}}function P(l,t,r){const e=l.slice();return e[1]=t[r],e}function S(l){let t,r;return t=new U({props:{project:l[1]}}),{c(){D(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){R(t,e,s),r=!0},p(e,s){const u={};s&1&&(u.project=e[1]),t.$set(u)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){j(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}function W(l){let t,r="Projects",e,s,u="Assorted projects that I am working/have worked on:",m,p,d,i=A(l[0].projects),n=[];for(let a=0;a<i.length;a+=1)n[a]=S(P(l,i,a));const h=a=>j(n[a],1,1,()=>{n[a]=null});return{c(){t=g("h1"),t.textContent=r,e=x(),s=g("p"),s.textContent=u,m=x(),p=g("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){t=v(a,"H1",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-11fn1t"&&(t.textContent=r),e=z(a),s=v(a,"P",{class:!0,"data-svelte-h":!0}),C(s)!=="svelte-c7rrv4"&&(s.textContent=u),m=z(a),p=v(a,"DIV",{});var c=w(p);for(let o=0;o<n.length;o+=1)n[o].l(c);c.forEach(f),this.h()},h(){b(t,"class","mt-8 text-3xl font-bold"),b(s,"class","my-4")},m(a,c){_(a,t,c),_(a,e,c),_(a,s,c),_(a,m,c),_(a,p,c);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(p,null);d=!0},p(a,[c]){if(c&1){i=A(a[0].projects);let o;for(o=0;o<i.length;o+=1){const k=P(a,i,o);n[o]?(n[o].p(k,c),$(n[o],1)):(n[o]=S(k),n[o].c(),$(n[o],1),n[o].m(p,null))}for(F(),o=i.length;o<n.length;o+=1)h(o);q()}},i(a){if(!d){for(let c=0;c<i.length;c+=1)$(n[c]);d=!0}},o(a){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)j(n[c]);d=!1},d(a){a&&(f(t),f(e),f(s),f(m),f(p)),B(n,a)}}}function X(l,t,r){let{data:e}=t;return l.$$set=s=>{"data"in s&&r(0,e=s.data)},[e]}class at extends I{constructor(t){super(),M(this,t,X,W,E,{data:0})}}export{at as component,nt as universal};