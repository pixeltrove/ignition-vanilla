var p=".accordion",m=".accordion-slat",v="is-activated",b="is-shown",C="data-target";function I(e){let r=Array.from(e.querySelectorAll(m));function a(c){let s=c.getAttribute(C),i=document.querySelector(`#${s}`),n=i.classList.contains(b);c.classList.toggle(v),c.setAttribute("aria-expanded",!n),i.classList.toggle(b)}function d(c,s){let i=r.indexOf(c),n=r.length-1,t;switch(s){case"ArrowUp":t=i===0?n:i-1;break;case"ArrowDown":t=i===n?0:i+1;break;case"Home":t=0;break;case"End":t=n;break}r[t].focus()}function u(c){c.target.closest(m)&&a(c.target.closest(m))}function f(c){c.target.closest(m)&&["ArrowUp","ArrowDown","Home","End"].includes(c.key)&&(c.preventDefault(),d(c.target.closest(m),c.key))}e.addEventListener("click",u),e.addEventListener("keydown",f)}var O=Array.from(document.querySelectorAll(p));O.forEach(e=>I(e));var _=".dialog",h=".dialog-backdrop",y="no-scroll",g="is-shown",D="data-hide",x="data-target";function R(e){let r=e.id,a=document.querySelector(`[${x}="${r}"]`),d=e.closest(h);function u(){d.classList.add(g),e.setAttribute("tabindex",-1),e.focus(),c(),e.addEventListener("keydown",t),e.addEventListener("click",s),d.addEventListener("click",i),document.addEventListener("keydown",n)}function f(){d.classList.remove(g),c(),e.removeEventListener("keydown",t),e.removeEventListener("click",s),d.removeEventListener("click",i),document.removeEventListener("keydown",n)}function c(){if(window.innerHeight>=document.body.scrollHeight)return;let o=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(y)?(document.body.classList.remove(y),document.body.style.top="",window.scroll(0,o)):(document.body.classList.add(y),document.body.style.top=-o+"px")}function s(o){o.target.hasAttribute(D)&&f()}function i(o){o.target.matches(h)&&f()}function n(o){o.key==="Escape"&&f()}function t(o){if(o.key==="Tab"){let l=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),A=l.length-1,E=l.indexOf(document.activeElement);o.shiftKey&&E===0||o.shiftKey&&document.activeElement===e?(o.preventDefault(),l[l.length-1].focus()):!o.shiftKey&&E===A&&(o.preventDefault(),l[0].focus())}}a.addEventListener("click",u)}var q=Array.from(document.querySelectorAll(_));q.forEach(e=>R(e));var H=".menu",k=".menu-link",N="is-activated",w="is-shown",F="data-target";function K(e){let r=e.id,a=document.querySelector(`[${F}="${r}"]`),d=Array.from(e.querySelectorAll(k));function u(){let t=e.classList.contains(w);a.classList.toggle(N),a.setAttribute("aria-expanded",!t),e.classList.toggle(w),t?(document.removeEventListener("click",c),document.removeEventListener("keydown",s),a.removeEventListener("keydown",i),e.removeEventListener("keydown",i),e.removeEventListener("keydown",n)):(document.addEventListener("click",c),document.addEventListener("keydown",s),a.addEventListener("keydown",i),e.addEventListener("keydown",i),e.addEventListener("keydown",n))}function f(t,o){let l=d.indexOf(t),A=d.length-1,E;switch(o){case"ArrowUp":E=l===0?A:l-1;break;case"ArrowDown":E=l===A?0:l+1;break;case"Home":E=0;break;case"End":E=A;break}d[E].focus()}function c(t){!a.contains(t.target)&&!e.contains(t.target)&&u()}function s(t){t.key==="Escape"&&u()}function i(t){let o=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),l=o[o.length-1];(t.key==="Tab"&&document.activeElement===l&&!t.shiftKey||t.key==="Tab"&&document.activeElement===a&&t.shiftKey)&&u()}function n(t){t.target.closest(k)&&["ArrowUp","ArrowDown","Home","End"].includes(t.key)&&(t.preventDefault(),f(t.target.closest(k),t.key))}a.addEventListener("click",u)}var M=Array.from(document.querySelectorAll(H));M.forEach(e=>K(e));var U=".notification",B=".notification-button-dismiss";function G(e){function r(a){a.target.closest(B)&&e.remove()}e.addEventListener("click",r)}var $=Array.from(document.querySelectorAll(U));$.forEach(e=>G(e));var P=".tabset",L=".tabset-tab",W=".tabset-panel",S="is-activated",T="is-shown",V="data-target";function Y(e){let r=Array.from(e.querySelectorAll(L)),a=Array.from(e.querySelectorAll(W));function d(s){let i=s.getAttribute(V);r.forEach(n=>{n===s?s.classList.add(S):n.classList.contains(S)&&n.classList.remove(S)}),a.forEach(n=>{n.id===i?n.classList.add(T):n.classList.remove(T)})}function u(s,i){let n=r.indexOf(s),t=r.length-1,o=0;switch(i){case"ArrowLeft":o=n===0?t:n-1;break;case"ArrowRight":o=n===t?0:n+1;break;case"Home":o=0;break;case"End":o=t;break}r[n].removeAttribute("tabIndex"),r[o].setAttribute("tabIndex","-1"),r[o].focus()}function f(s){s.target.closest(L)&&d(s.target.closest(L))}function c(s){s.target.closest(L)&&["ArrowLeft","ArrowRight","Home","End"].includes(s.key)&&(s.preventDefault(),u(s.target.closest(L),s.key))}e.addEventListener("click",f),e.addEventListener("keydown",c)}var j=Array.from(document.querySelectorAll(P));j.forEach(e=>Y(e));
