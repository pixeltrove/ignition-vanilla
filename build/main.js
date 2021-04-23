var w=".accordion",E=".accordion-handle",p="is-activated",b="is-shown",h="data-target";function v(t){let r=Array.from(t.querySelectorAll(E));function i(o){let s=o.target,e=s.getAttribute(h),n=document.querySelector(`#${e}`),a=n.classList.contains(b);s.classList.toggle(p),s.setAttribute("aria-expanded",!a),n.classList.toggle(b)}function d(o){let s=["ArrowUp","ArrowDown","Home","End"],e=r.indexOf(o.target),n=r.length-1,a=0;if(s.includes(o.key)){switch(o.preventDefault(),o.key){case"ArrowUp":a=e===0?n:e-1;break;case"ArrowDown":a=e===n?0:e+1;break;case"Home":a=0;break;case"End":a=n;break}r[a].focus()}}function u(o){o.target.closest(E)&&i(o)}function c(o){o.target.closest(E)&&d(o)}t.addEventListener("click",u),t.addEventListener("keydown",c)}var O=Array.from(document.querySelectorAll(w));O.forEach(t=>v(t));var C=".dialog",k=".dialog-backdrop",A="no-scroll",S="is-shown",I="data-hide",_="data-target";function D(t){let r=t.id,i=document.querySelector(`[${_}="${r}"]`),d=t.closest(k);function u(){t.addEventListener("click",c),d.addEventListener("click",c),document.addEventListener("keyup",c),d.classList.add(S),o(),s(t)}function c(e){(e.target.hasAttribute(I)&&e.type==="click"||e.target.matches(k)||e.key==="Escape")&&(t.removeEventListener("click",c),d.removeEventListener("click",c),document.removeEventListener("keyup",c),d.classList.remove(S),o())}function o(){if(window.innerHeight<document.body.scrollHeight){let e=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(A)?(document.body.classList.remove(A),document.body.style.top="",window.scroll(0,e)):(document.body.classList.add(A),document.body.style.top=-e+"px")}}function s(e){let n=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),a=n[0],f=n[n.length-1];function m(l){if(l.key==="Tab"){let y=l.shiftKey;y?document.activeElement===a?(l.preventDefault(),f.focus()):document.activeElement===e&&l.preventDefault():y||document.activeElement===f&&(l.preventDefault(),a.focus())}}e.addEventListener("keydown",m),e.setAttribute("tabindex",-1),e.focus()}i.addEventListener("click",u)}var x=Array.from(document.querySelectorAll(C));x.forEach(t=>D(t));var R=".menu",H=".menu-link",q="is-activated",g="is-shown",N="data-target";function F(t){let r=t.id,i=document.querySelector(`[${N}="${r}"]`),d=Array.from(t.querySelectorAll(H));function u(){let n=t.classList.contains(g);i.classList.toggle(q),i.setAttribute("aria-expanded",!n),t.classList.toggle(g),n?(document.removeEventListener("click",o),document.removeEventListener("keydown",s),i.removeEventListener("keydown",e),t.removeEventListener("keydown",e)):(document.addEventListener("click",o),document.addEventListener("keydown",s),i.addEventListener("keydown",e),t.addEventListener("keydown",e),d.forEach(a=>{a.addEventListener("keydown",c)}))}function c(n){let a=["ArrowUp","ArrowDown","Home","End"],f=d.indexOf(n.currentTarget),m=d.length-1,l=0;if(a.includes(n.key)){switch(n.preventDefault(),n.key){case"ArrowUp":l=f===0?m:f-1;break;case"ArrowDown":l=f===m?0:f+1;break;case"Home":l=0;break;case"End":l=m;break}d[l].focus()}}function o(n){!i.contains(n.target)&&!t.contains(n.target)&&u()}function s(n){n.key==="Escape"&&u()}function e(n){if(n.key==="Tab"){let a=Array.from(t.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),f=a[a.length-1],m=n.shiftKey;(document.activeElement===f&&!m||document.activeElement===i&&m)&&u()}}i.addEventListener("click",u)}var B=Array.from(document.querySelectorAll(R));B.forEach(t=>F(t));var U=".notification",G=".notification-button-dismiss";function K(t){function r(i){i.target.closest(G)&&t.remove()}t.addEventListener("click",r)}var $=Array.from(document.querySelectorAll(U));$.forEach(t=>K(t));var M=".tabset",P=".tabset-tab",W=".tabset-panel",L="is-activated",T="is-shown",V="data-target";function Y(t){let r=Array.from(t.querySelectorAll(P)),i=Array.from(t.querySelectorAll(W));function d(c){let o=c.currentTarget,s=o.getAttribute(V);r.forEach(e=>{e===o?o.classList.add(L):e.classList.contains(L)&&e.classList.remove(L)}),i.forEach(e=>{e.id===s?e.classList.add(T):e.classList.remove(T)})}function u(c){let o=["ArrowLeft","ArrowRight","Home","End"],s=r.indexOf(c.currentTarget),e=r.length-1,n=0;if(o.includes(c.key)){switch(c.preventDefault(),c.key){case"ArrowLeft":n=s===0?e:s-1;break;case"ArrowRight":n=s===e?0:s+1;break;case"Home":n=0;break;case"End":n=e;break}r[s].removeAttribute("tabIndex"),r[n].setAttribute("tabIndex","-1"),r[n].focus()}}r.forEach(c=>{c.addEventListener("click",d),c.addEventListener("keydown",u)})}var j=Array.from(document.querySelectorAll(M));j.forEach(t=>Y(t));
