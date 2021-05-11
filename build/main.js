var p=".accordion",E=".accordion-slat",v="is-activated",S="is-shown",C="data-target";function I(e){let r=Array.from(e.querySelectorAll(E));function a(i){let n=i.getAttribute(C),c=document.querySelector(`#${n}`),o=c.classList.contains(S);i.classList.toggle(v),i.setAttribute("aria-expanded",!o),c.classList.toggle(S)}function d(i){let n=r.indexOf(document.activeElement),c=r.length-1,o;switch(i){case"ArrowUp":o=n===0?c:n-1;break;case"ArrowDown":o=n===c?0:n+1;break;case"Home":o=0;break;case"End":o=c;break}r[o].focus()}function u(i){i.target.closest(E)&&a(i.target.closest(E))}function f(i){i.target.closest(E)&&["ArrowUp","ArrowDown","Home","End"].includes(i.key)&&(i.preventDefault(),d(i.key))}e.addEventListener("click",u),e.addEventListener("keydown",f)}var O=Array.from(document.querySelectorAll(p));O.forEach(e=>I(e));var _=".dialog",b=".dialog-backdrop",L="no-scroll",h="is-shown",D="data-hide",x="data-target";function R(e){let r=e.id,a=document.querySelector(`[${x}="${r}"]`),d=e.closest(b);function u(){d.classList.add(h),e.setAttribute("tabindex",-1),e.focus(),i(),e.addEventListener("keydown",t),e.addEventListener("click",n),d.addEventListener("click",c),document.addEventListener("keydown",o)}function f(){d.classList.remove(h),i(),e.removeEventListener("keydown",t),e.removeEventListener("click",n),d.removeEventListener("click",c),document.removeEventListener("keydown",o)}function i(){if(window.innerHeight>=document.body.scrollHeight)return;let s=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(L)?(document.body.classList.remove(L),document.body.style.top="",window.scroll(0,s)):(document.body.classList.add(L),document.body.style.top=-s+"px")}function n(s){s.target.hasAttribute(D)&&f()}function c(s){s.target.matches(b)&&f()}function o(s){s.key==="Escape"&&f()}function t(s){if(s.key==="Tab"){let l=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),m=l.length-1,k=l.indexOf(document.activeElement);s.shiftKey&&k===0||s.shiftKey&&document.activeElement===e?(s.preventDefault(),l[l.length-1].focus()):!s.shiftKey&&k===m&&(s.preventDefault(),l[0].focus())}}a.addEventListener("click",u)}var q=Array.from(document.querySelectorAll(_));q.forEach(e=>R(e));var H=".menu",w=".menu-link",N="is-activated",g="is-shown",K="data-target";function F(e){let r=e.id,a=document.querySelector(`[${K}="${r}"]`),d=Array.from(e.querySelectorAll(w));function u(){let t=e.classList.contains(g);a.classList.toggle(N),a.setAttribute("aria-expanded",!t),e.classList.toggle(g),t?(document.removeEventListener("click",i),document.removeEventListener("keydown",n),a.removeEventListener("keydown",c),e.removeEventListener("keydown",c),e.removeEventListener("keydown",o)):(document.addEventListener("click",i),document.addEventListener("keydown",n),a.addEventListener("keydown",c),e.addEventListener("keydown",c),e.addEventListener("keydown",o))}function f(t){let s=d.indexOf(document.activeElement),l=d.length-1,m;switch(t){case"ArrowUp":m=s===0?l:s-1;break;case"ArrowDown":m=s===l?0:s+1;break;case"Home":m=0;break;case"End":m=l;break}d[m].focus()}function i(t){!a.contains(t.target)&&!e.contains(t.target)&&u()}function n(t){t.key==="Escape"&&u()}function c(t){let s=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),l=s[s.length-1];(t.key==="Tab"&&document.activeElement===l&&!t.shiftKey||t.key==="Tab"&&document.activeElement===a&&t.shiftKey)&&u()}function o(t){t.target.closest(w)&&["ArrowUp","ArrowDown","Home","End"].includes(t.key)&&(t.preventDefault(),f(t.key))}a.addEventListener("click",u)}var U=Array.from(document.querySelectorAll(H));U.forEach(e=>F(e));var B=".notification",G=".notification-button-dismiss";function M(e){function r(a){a.target.closest(G)&&e.remove()}e.addEventListener("click",r)}var $=Array.from(document.querySelectorAll(B));$.forEach(e=>M(e));var P=".tabset",A=".tabset-tab",W=".tabset-panel",y="is-activated",T="is-shown",V="data-target";function Y(e){let r=Array.from(e.querySelectorAll(A)),a=Array.from(e.querySelectorAll(W));function d(n){let c=n.getAttribute(V);r.forEach(o=>{o===n?n.classList.add(y):o.classList.contains(y)&&o.classList.remove(y)}),a.forEach(o=>{o.id===c?o.classList.add(T):o.classList.remove(T)})}function u(n){let c=r.indexOf(document.activeElement),o=r.length-1,t=0;switch(n){case"ArrowLeft":t=c===0?o:c-1;break;case"ArrowRight":t=c===o?0:c+1;break;case"Home":t=0;break;case"End":t=o;break}r[c].removeAttribute("tabIndex"),r[t].setAttribute("tabIndex","-1"),r[t].focus()}function f(n){n.target.closest(A)&&d(n.target.closest(A))}function i(n){n.target.closest(A)&&["ArrowLeft","ArrowRight","Home","End"].includes(n.key)&&(n.preventDefault(),u(n.key))}e.addEventListener("click",f),e.addEventListener("keydown",i)}var j=Array.from(document.querySelectorAll(P));j.forEach(e=>Y(e));
