var h=".accordion",A=".accordion-handle",v="is-activated",b="is-shown",O="data-target";function C(e){let a=Array.from(e.querySelectorAll(A));function r(c){let n=c.getAttribute(O),i=document.querySelector(`#${n}`),s=i.classList.contains(b);c.classList.toggle(v),c.setAttribute("aria-expanded",!s),i.classList.toggle(b)}function d(c){c.target.closest(A)&&r(c.target.closest(A))}function u(c,n){let i=a.indexOf(c),s=a.length-1,t;switch(n){case"ArrowUp":t=i===0?s:i-1;break;case"ArrowDown":t=i===s?0:i+1;break;case"Home":t=0;break;case"End":t=s;break}a[t].focus()}function f(c){c.target.closest(A)&&["ArrowUp","ArrowDown","Home","End"].includes(c.key)&&(c.preventDefault(),u(c.target.closest(A),c.key))}e.addEventListener("click",d),e.addEventListener("keydown",f)}var I=Array.from(document.querySelectorAll(h));I.forEach(e=>C(e));var _=".dialog",S=".dialog-backdrop",y="no-scroll",w="is-shown",D="data-hide",x="data-target";function H(e){let a=e.id,r=document.querySelector(`[${x}="${a}"]`),d=e.closest(S);function u(){d.classList.add(w),e.setAttribute("tabindex",-1),e.focus(),s(),e.addEventListener("keydown",t),e.addEventListener("click",c),d.addEventListener("click",n),document.addEventListener("keydown",i)}function f(){d.classList.remove(w),s(),e.removeEventListener("keydown",t),e.removeEventListener("click",c),d.removeEventListener("click",n),document.removeEventListener("keydown",i)}function c(o){o.target.hasAttribute(D)&&f()}function n(o){o.target.matches(S)&&f()}function i(o){o.key==="Escape"&&f()}function s(){if(window.innerHeight>=document.body.scrollHeight)return;let o=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(y)?(document.body.classList.remove(y),document.body.style.top="",window.scroll(0,o)):(document.body.classList.add(y),document.body.style.top=-o+"px")}function t(o){if(o.key==="Tab"){let l=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),E=l.length-1,m=l.indexOf(document.activeElement);o.shiftKey&&m===0||o.shiftKey&&document.activeElement===e?(o.preventDefault(),l[l.length-1].focus()):!o.shiftKey&&m===E&&(o.preventDefault(),l[0].focus())}}r.addEventListener("click",u)}var R=Array.from(document.querySelectorAll(_));R.forEach(e=>H(e));var q=".menu",g=".menu-link",N="is-activated",T="is-shown",F="data-target";function K(e){let a=e.id,r=document.querySelector(`[${F}="${a}"]`),d=Array.from(e.querySelectorAll(g));function u(){let t=e.classList.contains(T);r.classList.toggle(N),r.setAttribute("aria-expanded",!t),e.classList.toggle(T),t?(document.removeEventListener("click",f),document.removeEventListener("keydown",c),r.removeEventListener("keydown",n),e.removeEventListener("keydown",n),e.removeEventListener("keydown",s)):(document.addEventListener("click",f),document.addEventListener("keydown",c),r.addEventListener("keydown",n),e.addEventListener("keydown",n),e.addEventListener("keydown",s))}function f(t){!r.contains(t.target)&&!e.contains(t.target)&&u()}function c(t){t.key==="Escape"&&u()}function n(t){let o=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),l=o[o.length-1];(t.key==="Tab"&&document.activeElement===l&&!t.shiftKey||t.key==="Tab"&&document.activeElement===r&&t.shiftKey)&&u()}function i(t,o){let l=d.indexOf(t),E=d.length-1,m;switch(o){case"ArrowUp":m=l===0?E:l-1;break;case"ArrowDown":m=l===E?0:l+1;break;case"Home":m=0;break;case"End":m=E;break}d[m].focus()}function s(t){t.target.closest(g)&&["ArrowUp","ArrowDown","Home","End"].includes(t.key)&&(t.preventDefault(),i(t.target.closest(g),t.key))}r.addEventListener("click",u)}var M=Array.from(document.querySelectorAll(q));M.forEach(e=>K(e));var B=".notification",U=".notification-button-dismiss";function G(e){function a(r){r.target.closest(U)&&e.remove()}e.addEventListener("click",a)}var P=Array.from(document.querySelectorAll(B));P.forEach(e=>G(e));var $=".tabset",L=".tabset-tab",W=".tabset-panel",k="is-activated",p="is-shown",V="data-target";function Y(e){let a=Array.from(e.querySelectorAll(L)),r=Array.from(e.querySelectorAll(W));function d(n){let i=n.getAttribute(V);a.forEach(s=>{s===n?n.classList.add(k):s.classList.contains(k)&&s.classList.remove(k)}),r.forEach(s=>{s.id===i?s.classList.add(p):s.classList.remove(p)})}function u(n){n.target.closest(L)&&d(n.target.closest(L))}function f(n,i){let s=a.indexOf(n),t=a.length-1,o=0;switch(i){case"ArrowLeft":o=s===0?t:s-1;break;case"ArrowRight":o=s===t?0:s+1;break;case"Home":o=0;break;case"End":o=t;break}a[s].removeAttribute("tabIndex"),a[o].setAttribute("tabIndex","-1"),a[o].focus()}function c(n){n.target.closest(L)&&["ArrowLeft","ArrowRight","Home","End"].includes(n.key)&&(n.preventDefault(),f(n.target.closest(L),n.key))}e.addEventListener("click",u),e.addEventListener("keydown",c)}var j=Array.from(document.querySelectorAll($));j.forEach(e=>Y(e));
