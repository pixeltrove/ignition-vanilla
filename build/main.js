var p=".accordion",m=".accordion-handle",w="is-activated",b="is-shown",h="data-target";function v(t){let r=Array.from(t.querySelectorAll(m));function i(a){if(a.target.closest(m)){let n=a.target,s=n.getAttribute(h),c=document.querySelector(`#${s}`),e=c.classList.contains(b);n.classList.toggle(w),n.setAttribute("aria-expanded",!e),c.classList.toggle(b)}}function d(a){if(a.target.closest(m)){let n=["ArrowUp","ArrowDown","Home","End"],s=r.indexOf(a.target),c=r.length-1,e=0;if(n.includes(a.key)){switch(a.preventDefault(),a.key){case"ArrowUp":e=s===0?c:s-1;break;case"ArrowDown":e=s===c?0:s+1;break;case"Home":e=0;break;case"End":e=c;break}r[e].focus()}}}t.addEventListener("click",i),t.addEventListener("keydown",d)}var O=Array.from(document.querySelectorAll(p));O.forEach(t=>v(t));var C=".dialog",k=".dialog-backdrop",A="no-scroll",S="is-shown",I="data-hide",_="data-target";function D(t){let r=t.id,i=document.querySelector(`[${_}="${r}"]`),d=t.closest(k);function a(){t.addEventListener("click",n),d.addEventListener("click",n),document.addEventListener("keyup",n),d.classList.add(S),s(),c(t)}function n(e){(e.target.hasAttribute(I)&&e.type==="click"||e.target.matches(k)||e.key==="Escape")&&(t.removeEventListener("click",n),d.removeEventListener("click",n),document.removeEventListener("keyup",n),d.classList.remove(S),s())}function s(){if(window.innerHeight<document.body.scrollHeight){let e=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(A)?(document.body.classList.remove(A),document.body.style.top="",window.scroll(0,e)):(document.body.classList.add(A),document.body.style.top=-e+"px")}}function c(e){let o=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),u=o[0],f=o[o.length-1];function E(l){if(l.key==="Tab"){let y=l.shiftKey;y?document.activeElement===u?(l.preventDefault(),f.focus()):document.activeElement===e&&l.preventDefault():y||document.activeElement===f&&(l.preventDefault(),u.focus())}}e.addEventListener("keydown",E),e.setAttribute("tabindex",-1),e.focus()}i.addEventListener("click",a)}var x=Array.from(document.querySelectorAll(C));x.forEach(t=>D(t));var R=".menu",H=".menu-link",q="is-activated",g="is-shown",N="data-target";function F(t){let r=t.id,i=document.querySelector(`[${N}="${r}"]`),d=Array.from(t.querySelectorAll(H));function a(){let o=t.classList.contains(g);i.classList.toggle(q),i.setAttribute("aria-expanded",!o),t.classList.toggle(g),o?(document.removeEventListener("click",s),document.removeEventListener("keydown",c),i.removeEventListener("keydown",e),t.removeEventListener("keydown",e)):(document.addEventListener("click",s),document.addEventListener("keydown",c),i.addEventListener("keydown",e),t.addEventListener("keydown",e),d.forEach(u=>{u.addEventListener("keydown",n)}))}function n(o){let u=["ArrowUp","ArrowDown","Home","End"],f=d.indexOf(o.currentTarget),E=d.length-1,l=0;if(u.includes(o.key)){switch(o.preventDefault(),o.key){case"ArrowUp":l=f===0?E:f-1;break;case"ArrowDown":l=f===E?0:f+1;break;case"Home":l=0;break;case"End":l=E;break}d[l].focus()}}function s(o){!i.contains(o.target)&&!t.contains(o.target)&&a()}function c(o){o.key==="Escape"&&a()}function e(o){if(o.key==="Tab"){let u=Array.from(t.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),f=u[u.length-1],E=o.shiftKey;(document.activeElement===f&&!E||document.activeElement===i&&E)&&a()}}i.addEventListener("click",a)}var B=Array.from(document.querySelectorAll(R));B.forEach(t=>F(t));var U=".notification",G=".notification-button-dismiss";function $(t){function r(i){i.target.closest(G)&&t.remove()}t.addEventListener("click",r)}var K=Array.from(document.querySelectorAll(U));K.forEach(t=>$(t));var M=".tabset",P=".tabset-tab",W=".tabset-panel",L="is-activated",T="is-shown",V="data-target";function Y(t){let r=Array.from(t.querySelectorAll(P)),i=Array.from(t.querySelectorAll(W));function d(n){let s=n.currentTarget,c=s.getAttribute(V);r.forEach(e=>{e===s?s.classList.add(L):e.classList.contains(L)&&e.classList.remove(L)}),i.forEach(e=>{e.id===c?e.classList.add(T):e.classList.remove(T)})}function a(n){let s=["ArrowLeft","ArrowRight","Home","End"],c=r.indexOf(n.currentTarget),e=r.length-1,o=0;if(s.includes(n.key)){switch(n.preventDefault(),n.key){case"ArrowLeft":o=c===0?e:c-1;break;case"ArrowRight":o=c===e?0:c+1;break;case"Home":o=0;break;case"End":o=e;break}r[c].removeAttribute("tabIndex"),r[o].setAttribute("tabIndex","-1"),r[o].focus()}}r.forEach(n=>{n.addEventListener("click",d),n.addEventListener("keydown",a)})}var j=Array.from(document.querySelectorAll(M));j.forEach(t=>Y(t));
