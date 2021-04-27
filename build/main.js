var w=".accordion",E=".accordion-handle",p="is-activated",b="is-shown",h="data-target";function v(t){let r=Array.from(t.querySelectorAll(E));function i(o){let c=o.getAttribute(h),e=document.querySelector(`#${c}`),n=e.classList.contains(b);o.classList.toggle(p),o.setAttribute("aria-expanded",!n),e.classList.toggle(b)}function d(o,c){let e=r.indexOf(o),n=r.length-1,a=0;switch(c){case"ArrowUp":a=e===0?n:e-1;break;case"ArrowDown":a=e===n?0:e+1;break;case"Home":a=0;break;case"End":a=n;break}r[a].focus()}function u(o){let c=o.target.closest(E);c&&i(c)}function s(o){let c=o.target.closest(E),e=o.key;c&&["ArrowUp","ArrowDown","Home","End"].includes(e)&&(o.preventDefault(),d(c,e))}t.addEventListener("click",u),t.addEventListener("keydown",s)}var O=Array.from(document.querySelectorAll(w));O.forEach(t=>v(t));var C=".dialog",k=".dialog-backdrop",A="no-scroll",S="is-shown",I="data-hide",_="data-target";function D(t){let r=t.id,i=document.querySelector(`[${_}="${r}"]`),d=t.closest(k);function u(){t.addEventListener("click",s),d.addEventListener("click",s),document.addEventListener("keyup",s),d.classList.add(S),o(),c(t)}function s(e){(e.target.hasAttribute(I)&&e.type==="click"||e.target.matches(k)||e.key==="Escape")&&(t.removeEventListener("click",s),d.removeEventListener("click",s),document.removeEventListener("keyup",s),d.classList.remove(S),o())}function o(){if(window.innerHeight<document.body.scrollHeight){let e=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(A)?(document.body.classList.remove(A),document.body.style.top="",window.scroll(0,e)):(document.body.classList.add(A),document.body.style.top=-e+"px")}}function c(e){let n=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),a=n[0],f=n[n.length-1];function m(l){if(l.key==="Tab"){let L=l.shiftKey;L?document.activeElement===a?(l.preventDefault(),f.focus()):document.activeElement===e&&l.preventDefault():L||document.activeElement===f&&(l.preventDefault(),a.focus())}}e.addEventListener("keydown",m),e.setAttribute("tabindex",-1),e.focus()}i.addEventListener("click",u)}var x=Array.from(document.querySelectorAll(C));x.forEach(t=>D(t));var R=".menu",q=".menu-link",H="is-activated",g="is-shown",N="data-target";function F(t){let r=t.id,i=document.querySelector(`[${N}="${r}"]`),d=Array.from(t.querySelectorAll(q));function u(){let n=t.classList.contains(g);i.classList.toggle(H),i.setAttribute("aria-expanded",!n),t.classList.toggle(g),n?(document.removeEventListener("click",o),document.removeEventListener("keydown",c),i.removeEventListener("keydown",e),t.removeEventListener("keydown",e)):(document.addEventListener("click",o),document.addEventListener("keydown",c),i.addEventListener("keydown",e),t.addEventListener("keydown",e),d.forEach(a=>{a.addEventListener("keydown",s)}))}function s(n){let a=["ArrowUp","ArrowDown","Home","End"],f=d.indexOf(n.currentTarget),m=d.length-1,l=0;if(a.includes(n.key)){switch(n.preventDefault(),n.key){case"ArrowUp":l=f===0?m:f-1;break;case"ArrowDown":l=f===m?0:f+1;break;case"Home":l=0;break;case"End":l=m;break}d[l].focus()}}function o(n){!i.contains(n.target)&&!t.contains(n.target)&&u()}function c(n){n.key==="Escape"&&u()}function e(n){if(n.key==="Tab"){let a=Array.from(t.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),f=a[a.length-1],m=n.shiftKey;(document.activeElement===f&&!m||document.activeElement===i&&m)&&u()}}i.addEventListener("click",u)}var B=Array.from(document.querySelectorAll(R));B.forEach(t=>F(t));var U=".notification",G=".notification-button-dismiss";function K(t){function r(i){i.target.closest(G)&&t.remove()}t.addEventListener("click",r)}var $=Array.from(document.querySelectorAll(U));$.forEach(t=>K(t));var M=".tabset",P=".tabset-tab",W=".tabset-panel",y="is-activated",T="is-shown",V="data-target";function Y(t){let r=Array.from(t.querySelectorAll(P)),i=Array.from(t.querySelectorAll(W));function d(s){let o=s.currentTarget,c=o.getAttribute(V);r.forEach(e=>{e===o?o.classList.add(y):e.classList.contains(y)&&e.classList.remove(y)}),i.forEach(e=>{e.id===c?e.classList.add(T):e.classList.remove(T)})}function u(s){let o=["ArrowLeft","ArrowRight","Home","End"],c=r.indexOf(s.currentTarget),e=r.length-1,n=0;if(o.includes(s.key)){switch(s.preventDefault(),s.key){case"ArrowLeft":n=c===0?e:c-1;break;case"ArrowRight":n=c===e?0:c+1;break;case"Home":n=0;break;case"End":n=e;break}r[c].removeAttribute("tabIndex"),r[n].setAttribute("tabIndex","-1"),r[n].focus()}}r.forEach(s=>{s.addEventListener("click",d),s.addEventListener("keydown",u)})}var j=Array.from(document.querySelectorAll(M));j.forEach(t=>Y(t));
