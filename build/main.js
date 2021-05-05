var T=".accordion",m=".accordion-handle",g="is-activated",k="is-shown",p="data-target";function v(e){let i=Array.from(e.querySelectorAll(m));function d(a){if(!a.target.closest(m))return;let o=a.target.closest(m),r=o.getAttribute(p),c=document.querySelector(`#${r}`),t=c.classList.contains(k);o.classList.toggle(g),o.setAttribute("aria-expanded",!t),c.classList.toggle(k)}function l(a){if(!a.target.closest(m)||!["ArrowUp","ArrowDown","Home","End"].includes(a.key))return;let o=a.target.closest(m),r=i.indexOf(o),c=i.length-1,t;switch(a.key){case"ArrowUp":t=r===0?c:r-1;break;case"ArrowDown":t=r===c?0:r+1;break;case"Home":t=0;break;case"End":t=c;break}a.preventDefault(),i[t].focus()}e.addEventListener("click",d),e.addEventListener("keydown",l)}var O=Array.from(document.querySelectorAll(T));O.forEach(e=>v(e));var C=".dialog",I=".dialog-backdrop",A="no-scroll",S="is-shown",_="data-hide",D="data-target";function x(e){let i=e.id,d=document.querySelector(`[${D}="${i}"]`),l=e.closest(I);function a(){l.classList.add(S),e.setAttribute("tabindex",-1),e.focus(),n(),u(e),e.addEventListener("keydown",u),e.addEventListener("click",r),l.addEventListener("click",c),document.addEventListener("keydown",t)}function o(){l.classList.remove(S),n(),e.removeEventListener("keydown",u),e.removeEventListener("click",r),l.removeEventListener("click",c),document.removeEventListener("keydown",t)}function r(s){s.target.hasAttribute(_)&&o()}function c(s){e.contains(s.target)||o()}function t(s){s.key==="Escape"&&o()}function n(){if(window.innerHeight>=document.body.scrollHeight)return;let s=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(A)?(document.body.classList.remove(A),document.body.style.top="",window.scroll(0,s)):(document.body.classList.add(A),document.body.style.top=-s+"px")}function u(s){if(s.key!=="Tab")return;let f=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),E=f[0],y=f[f.length-1],b=s.shiftKey;b?document.activeElement===E?(s.preventDefault(),y.focus()):document.activeElement===e&&s.preventDefault():b||document.activeElement===y&&(s.preventDefault(),E.focus())}d.addEventListener("click",a)}var R=Array.from(document.querySelectorAll(C));R.forEach(e=>x(e));var q=".menu",H=".menu-link",N="is-activated",w="is-shown",B="data-target";function F(e){let i=e.id,d=document.querySelector(`[${B}="${i}"]`),l=Array.from(e.querySelectorAll(H));function a(){let n=e.classList.contains(w);d.classList.toggle(N),d.setAttribute("aria-expanded",!n),e.classList.toggle(w),n?(document.removeEventListener("click",r),document.removeEventListener("keydown",c),d.removeEventListener("keydown",t),e.removeEventListener("keydown",t)):(document.addEventListener("click",r),document.addEventListener("keydown",c),d.addEventListener("keydown",t),e.addEventListener("keydown",t),l.forEach(u=>{u.addEventListener("keydown",o)}))}function o(n){let u=["ArrowUp","ArrowDown","Home","End"],s=l.indexOf(n.currentTarget),f=l.length-1,E=0;if(u.includes(n.key)){switch(n.preventDefault(),n.key){case"ArrowUp":E=s===0?f:s-1;break;case"ArrowDown":E=s===f?0:s+1;break;case"Home":E=0;break;case"End":E=f;break}l[E].focus()}}function r(n){!d.contains(n.target)&&!e.contains(n.target)&&a()}function c(n){n.key==="Escape"&&a()}function t(n){if(n.key==="Tab"){let u=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),s=u[u.length-1],f=n.shiftKey;(document.activeElement===s&&!f||document.activeElement===d&&f)&&a()}}d.addEventListener("click",a)}var U=Array.from(document.querySelectorAll(q));U.forEach(e=>F(e));var G=".notification",$=".notification-button-dismiss";function K(e){function i(d){d.target.closest($)&&e.remove()}e.addEventListener("click",i)}var M=Array.from(document.querySelectorAll(G));M.forEach(e=>K(e));var P=".tabset",W=".tabset-tab",V=".tabset-panel",L="is-activated",h="is-shown",Y="data-target";function j(e){let i=Array.from(e.querySelectorAll(W)),d=Array.from(e.querySelectorAll(V));function l(o){let r=o.currentTarget,c=r.getAttribute(Y);i.forEach(t=>{t===r?r.classList.add(L):t.classList.contains(L)&&t.classList.remove(L)}),d.forEach(t=>{t.id===c?t.classList.add(h):t.classList.remove(h)})}function a(o){let r=["ArrowLeft","ArrowRight","Home","End"],c=i.indexOf(o.currentTarget),t=i.length-1,n=0;if(r.includes(o.key)){switch(o.preventDefault(),o.key){case"ArrowLeft":n=c===0?t:c-1;break;case"ArrowRight":n=c===t?0:c+1;break;case"Home":n=0;break;case"End":n=t;break}i[c].removeAttribute("tabIndex"),i[n].setAttribute("tabIndex","-1"),i[n].focus()}}i.forEach(o=>{o.addEventListener("click",l),o.addEventListener("keydown",a)})}var z=Array.from(document.querySelectorAll(P));z.forEach(e=>j(e));
