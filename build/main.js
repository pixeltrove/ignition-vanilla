var T="is-activated",b="is-shown",w="data-target";function h(e){let c=e.currentTarget,i=c.getAttribute(w),s=document.querySelector(`#${i}`),l=s.classList.contains(b);c.classList.toggle(T),c.setAttribute("aria-expanded",!l),s.classList.toggle(b)}var y=h;var v=".accordion",O=".accordion-handle";function C(e){let c=Array.from(e.querySelectorAll(O));function i(s){let l=["ArrowUp","ArrowDown","Home","End"],n=c.indexOf(s.currentTarget),a=c.length-1,r=0;if(l.includes(s.key)){switch(s.preventDefault(),s.key){case"ArrowUp":r=n===0?a:n-1;break;case"ArrowDown":r=n===a?0:n+1;break;case"Home":r=0;break;case"End":r=a;break}c[r].focus()}}c.forEach(s=>{s.addEventListener("click",y),s.addEventListener("keydown",i)})}var I=Array.from(document.querySelectorAll(v));I.forEach(e=>C(e));var _=".dialog",k=".dialog-backdrop",m="no-scroll",S="is-shown",D="data-hide",x="data-target";function R(e){let c=e.id,i=document.querySelector(`[${x}="${c}"]`),s=e.closest(k);function l(){e.addEventListener("click",n),s.addEventListener("click",n),document.addEventListener("keyup",n),s.classList.add(S),a(),r(e)}function n(t){(t.target.hasAttribute(D)&&t.type==="click"||t.target.matches(k)||t.key==="Escape")&&(e.removeEventListener("click",n),s.removeEventListener("click",n),document.removeEventListener("keyup",n),s.classList.remove(S),a())}function a(){if(window.innerHeight<document.body.scrollHeight){let t=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(m)?(document.body.classList.remove(m),document.body.style.top="",window.scroll(0,t)):(document.body.classList.add(m),document.body.style.top=-t+"px")}}function r(t){let o=Array.from(t.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),u=o[0],f=o[o.length-1];function E(d){if(d.key==="Tab"){let L=d.shiftKey;L?document.activeElement===u?(d.preventDefault(),f.focus()):document.activeElement===t&&d.preventDefault():L||document.activeElement===f&&(d.preventDefault(),u.focus())}}t.addEventListener("keydown",E),t.setAttribute("tabindex",-1),t.focus()}i.addEventListener("click",l)}var q=Array.from(document.querySelectorAll(_));q.forEach(e=>R(e));var H=".menu",N=".menu-link",F="is-activated",g="is-shown",B="data-target";function U(e){let c=e.id,i=document.querySelector(`[${B}="${c}"]`),s=Array.from(e.querySelectorAll(N));function l(){let o=e.classList.contains(g);i.classList.toggle(F),i.setAttribute("aria-expanded",!o),e.classList.toggle(g),o?(document.removeEventListener("click",a),document.removeEventListener("keydown",r),i.removeEventListener("keydown",t),e.removeEventListener("keydown",t)):(document.addEventListener("click",a),document.addEventListener("keydown",r),i.addEventListener("keydown",t),e.addEventListener("keydown",t),s.forEach(u=>{u.addEventListener("keydown",n)}))}function n(o){let u=["ArrowUp","ArrowDown","Home","End"],f=s.indexOf(o.currentTarget),E=s.length-1,d=0;if(u.includes(o.key)){switch(o.preventDefault(),o.key){case"ArrowUp":d=f===0?E:f-1;break;case"ArrowDown":d=f===E?0:f+1;break;case"Home":d=0;break;case"End":d=E;break}s[d].focus()}}function a(o){!i.contains(o.target)&&!e.contains(o.target)&&l()}function r(o){o.key==="Escape"&&l()}function t(o){if(o.key==="Tab"){let u=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),f=u[u.length-1],E=o.shiftKey;(document.activeElement===f&&!E||document.activeElement===i&&E)&&l()}}i.addEventListener("click",l)}var G=Array.from(document.querySelectorAll(H));G.forEach(e=>U(e));var $=".notification",K=".notification-button-dismiss";function M(e){function c(i){i.target.closest(K)&&e.remove()}e.addEventListener("click",c)}var W=Array.from(document.querySelectorAll($));W.forEach(e=>M(e));var P=".tabset",V=".tabset-tab",j=".tabset-panel",A="is-activated",p="is-shown",Y="data-target";function z(e){let c=Array.from(e.querySelectorAll(V)),i=Array.from(e.querySelectorAll(j));function s(n){let a=n.currentTarget,r=a.getAttribute(Y);c.forEach(t=>{t===a?a.classList.add(A):t.classList.contains(A)&&t.classList.remove(A)}),i.forEach(t=>{t.id===r?t.classList.add(p):t.classList.remove(p)})}function l(n){let a=["ArrowLeft","ArrowRight","Home","End"],r=c.indexOf(n.currentTarget),t=c.length-1,o=0;if(a.includes(n.key)){switch(n.preventDefault(),n.key){case"ArrowLeft":o=r===0?t:r-1;break;case"ArrowRight":o=r===t?0:r+1;break;case"Home":o=0;break;case"End":o=t;break}c[r].removeAttribute("tabIndex"),c[o].setAttribute("tabIndex","-1"),c[o].focus()}}c.forEach(n=>{n.addEventListener("click",s),n.addEventListener("keydown",l)})}var J=Array.from(document.querySelectorAll(P));J.forEach(e=>z(e));
