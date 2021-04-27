var w=".accordion",E=".accordion-handle",p="is-activated",b="is-shown",h="data-target";function v(n){let s=Array.from(n.querySelectorAll(E)),r=["ArrowUp","ArrowDown","Home","End"];function d(o){let e=o.getAttribute(h),t=document.querySelector(`#${e}`),i=t.classList.contains(b);o.classList.toggle(p),o.setAttribute("aria-expanded",!i),t.classList.toggle(b)}function f(o,e){let t=s.indexOf(o),i=s.length-1,a=0;switch(e){case"ArrowUp":a=t===0?i:t-1;break;case"ArrowDown":a=t===i?0:t+1;break;case"Home":a=0;break;case"End":a=i;break}s[a].focus()}function c(o){let e=o.target.closest(E);e&&d(e)}function l(o){let e=o.target.closest(E),t=o.key;e&&r.includes(t)&&(o.preventDefault(),f(e,t))}n.addEventListener("click",c),n.addEventListener("keydown",l)}var O=Array.from(document.querySelectorAll(w));O.forEach(n=>v(n));var C=".dialog",k=".dialog-backdrop",A="no-scroll",S="is-shown",I="data-hide",_="data-target";function D(n){let s=n.id,r=document.querySelector(`[${_}="${s}"]`),d=n.closest(k);function f(){n.addEventListener("click",c),d.addEventListener("click",c),document.addEventListener("keyup",c),d.classList.add(S),l(),o(n)}function c(e){(e.target.hasAttribute(I)&&e.type==="click"||e.target.matches(k)||e.key==="Escape")&&(n.removeEventListener("click",c),d.removeEventListener("click",c),document.removeEventListener("keyup",c),d.classList.remove(S),l())}function l(){if(window.innerHeight<document.body.scrollHeight){let e=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(A)?(document.body.classList.remove(A),document.body.style.top="",window.scroll(0,e)):(document.body.classList.add(A),document.body.style.top=-e+"px")}}function o(e){let t=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),i=t[0],a=t[t.length-1];function m(u){if(u.key==="Tab"){let y=u.shiftKey;y?document.activeElement===i?(u.preventDefault(),a.focus()):document.activeElement===e&&u.preventDefault():y||document.activeElement===a&&(u.preventDefault(),i.focus())}}e.addEventListener("keydown",m),e.setAttribute("tabindex",-1),e.focus()}r.addEventListener("click",f)}var x=Array.from(document.querySelectorAll(C));x.forEach(n=>D(n));var R=".menu",q=".menu-link",H="is-activated",g="is-shown",N="data-target";function F(n){let s=n.id,r=document.querySelector(`[${N}="${s}"]`),d=Array.from(n.querySelectorAll(q));function f(){let t=n.classList.contains(g);r.classList.toggle(H),r.setAttribute("aria-expanded",!t),n.classList.toggle(g),t?(document.removeEventListener("click",l),document.removeEventListener("keydown",o),r.removeEventListener("keydown",e),n.removeEventListener("keydown",e)):(document.addEventListener("click",l),document.addEventListener("keydown",o),r.addEventListener("keydown",e),n.addEventListener("keydown",e),d.forEach(i=>{i.addEventListener("keydown",c)}))}function c(t){let i=["ArrowUp","ArrowDown","Home","End"],a=d.indexOf(t.currentTarget),m=d.length-1,u=0;if(i.includes(t.key)){switch(t.preventDefault(),t.key){case"ArrowUp":u=a===0?m:a-1;break;case"ArrowDown":u=a===m?0:a+1;break;case"Home":u=0;break;case"End":u=m;break}d[u].focus()}}function l(t){!r.contains(t.target)&&!n.contains(t.target)&&f()}function o(t){t.key==="Escape"&&f()}function e(t){if(t.key==="Tab"){let i=Array.from(n.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),a=i[i.length-1],m=t.shiftKey;(document.activeElement===a&&!m||document.activeElement===r&&m)&&f()}}r.addEventListener("click",f)}var B=Array.from(document.querySelectorAll(R));B.forEach(n=>F(n));var K=".notification",U=".notification-button-dismiss";function G(n){function s(r){r.target.closest(U)&&n.remove()}n.addEventListener("click",s)}var $=Array.from(document.querySelectorAll(K));$.forEach(n=>G(n));var M=".tabset",P=".tabset-tab",W=".tabset-panel",L="is-activated",T="is-shown",V="data-target";function Y(n){let s=Array.from(n.querySelectorAll(P)),r=Array.from(n.querySelectorAll(W));function d(c){let l=c.currentTarget,o=l.getAttribute(V);s.forEach(e=>{e===l?l.classList.add(L):e.classList.contains(L)&&e.classList.remove(L)}),r.forEach(e=>{e.id===o?e.classList.add(T):e.classList.remove(T)})}function f(c){let l=["ArrowLeft","ArrowRight","Home","End"],o=s.indexOf(c.currentTarget),e=s.length-1,t=0;if(l.includes(c.key)){switch(c.preventDefault(),c.key){case"ArrowLeft":t=o===0?e:o-1;break;case"ArrowRight":t=o===e?0:o+1;break;case"Home":t=0;break;case"End":t=e;break}s[o].removeAttribute("tabIndex"),s[t].setAttribute("tabIndex","-1"),s[t].focus()}}s.forEach(c=>{c.addEventListener("click",d),c.addEventListener("keydown",f)})}var j=Array.from(document.querySelectorAll(M));j.forEach(n=>Y(n));
