import{s as I,f as x}from"../chunks/scheduler.63274e7e.js";import{S as P,i as q,g as p,r as H,s as k,h as $,j as w,u as O,f as h,c as y,k as _,a as g,x as C,v as V,d as v,t as b,w as A,m as G,n as L,o as T,z as M,b as X,A as F,p as J}from"../chunks/index.ce9e7557.js";import{e as D}from"../chunks/each.e59479a4.js";import{M as K}from"../chunks/MediaLink.c45557c1.js";async function N(){return{dotfiles:[{name:"nvim",url:"https://github.com/edzdez/nvim",image:"nvim.png"},{name:"sway (+ waybar + swaylock)",url:"https://github.com/edzdez/sway",image:"sway.png"},{name:"bspwm (+ polybar)",url:"https://github.com/edzdez/bspwm",image:"bspwm.png"},{name:"suckless (dmenu, dwm, tabbed, etc.)",url:"https://github.com/edzdez/suckless",image:null},{name:"XMonad",url:"https://github.com/edzdez/xmonad",image:null}]}}const ne=Object.freeze(Object.defineProperty({__proto__:null,load:N},Symbol.toStringTag,{value:"Module"}));function Q(r){let e=r[0].name+"",l;return{c(){l=G(e)},l(t){l=L(t,e)},m(t,a){g(t,l,a)},p(t,a){a&1&&e!==(e=t[0].name+"")&&T(l,e)},d(t){t&&h(l)}}}function S(r){let e,l,t;return{c(){e=p("img"),this.h()},l(a){e=$(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){_(e,"class","mt-2"),x(e.src,l=r[0].image)||_(e,"src",l),_(e,"alt",t=`image of ${r[0].name}`)},m(a,m){g(a,e,m)},p(a,m){m&1&&!x(e.src,l=a[0].image)&&_(e,"src",l),m&1&&t!==(t=`image of ${a[0].name}`)&&_(e,"alt",t)},d(a){a&&h(e)}}}function R(r){let e,l,t,a,m;t=new K({props:{url:r[0].url,$$slots:{default:[Q]},$$scope:{ctx:r}}});let c=r[0].image&&S(r);return{c(){e=p("div"),l=p("h2"),H(t.$$.fragment),a=k(),c&&c.c(),this.h()},l(o){e=$(o,"DIV",{class:!0});var f=w(e);l=$(f,"H2",{class:!0});var d=w(l);O(t.$$.fragment,d),d.forEach(h),a=y(f),c&&c.l(f),f.forEach(h),this.h()},h(){_(l,"class","font-bold text-xl"),_(e,"class","my-4 p-4 rounded-lg bg-zinc-800")},m(o,f){g(o,e,f),C(e,l),V(t,l,null),C(e,a),c&&c.m(e,null),m=!0},p(o,[f]){const d={};f&1&&(d.url=o[0].url),f&3&&(d.$$scope={dirty:f,ctx:o}),t.$set(d),o[0].image?c?c.p(o,f):(c=S(o),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i(o){m||(v(t.$$.fragment,o),m=!0)},o(o){b(t.$$.fragment,o),m=!1},d(o){o&&h(e),A(t),c&&c.d()}}}function U(r,e,l){let{data:t}=e;return r.$$set=a=>{"data"in a&&l(0,t=a.data)},[t]}class W extends P{constructor(e){super(),q(this,e,U,R,I,{data:0})}}function j(r,e,l){const t=r.slice();return t[1]=e[l],t}function E(r){let e,l;return e=new W({props:{data:r[1]}}),{c(){H(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,a){V(e,t,a),l=!0},p(t,a){const m={};a&1&&(m.data=t[1]),e.$set(m)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Y(r){let e,l="Dotfiles",t,a,m="My dotfiles:",c,o,f,d=D(r[0].dotfiles),s=[];for(let n=0;n<d.length;n+=1)s[n]=E(j(r,d,n));const B=n=>b(s[n],1,1,()=>{s[n]=null});return{c(){e=p("h1"),e.textContent=l,t=k(),a=p("p"),a.textContent=m,c=k(),o=p("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=$(n,"H1",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1kwl3t5"&&(e.textContent=l),t=y(n),a=$(n,"P",{class:!0,"data-svelte-h":!0}),M(a)!=="svelte-18xyx80"&&(a.textContent=m),c=y(n),o=$(n,"DIV",{});var u=w(o);for(let i=0;i<s.length;i+=1)s[i].l(u);u.forEach(h),this.h()},h(){_(e,"class","mt-8 text-3xl font-bold"),_(a,"class","my-4")},m(n,u){g(n,e,u),g(n,t,u),g(n,a,u),g(n,c,u),g(n,o,u);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(o,null);f=!0},p(n,[u]){if(u&1){d=D(n[0].dotfiles);let i;for(i=0;i<d.length;i+=1){const z=j(n,d,i);s[i]?(s[i].p(z,u),v(s[i],1)):(s[i]=E(z),s[i].c(),v(s[i],1),s[i].m(o,null))}for(J(),i=d.length;i<s.length;i+=1)B(i);X()}},i(n){if(!f){for(let u=0;u<d.length;u+=1)v(s[u]);f=!0}},o(n){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)b(s[u]);f=!1},d(n){n&&(h(e),h(t),h(a),h(c),h(o)),F(s,n)}}}function Z(r,e,l){let{data:t}=e;return r.$$set=a=>{"data"in a&&l(0,t=a.data)},[t]}class se extends P{constructor(e){super(),q(this,e,Z,Y,I,{data:0})}}export{se as component,ne as universal};
