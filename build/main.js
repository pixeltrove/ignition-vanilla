var p=".accordion",A=".accordion-handle",v="is-activated",S="is-shown",O="data-target";function C(e){let i=Array.from(e.querySelectorAll(A));function d(a){if(!a.target.closest(A))return;let o=a.target.closest(A),r=o.getAttribute(O),s=document.querySelector(`#${r}`),t=s.classList.contains(S);o.classList.toggle(v),o.setAttribute("aria-expanded",!t),s.classList.toggle(S)}function l(a){if(!a.target.closest(A)||!["ArrowUp","ArrowDown","Home","End"].includes(a.key))return;let o=a.target.closest(A),r=i.indexOf(o),s=i.length-1,t;switch(a.key){case"ArrowUp":t=r===0?s:r-1;break;case"ArrowDown":t=r===s?0:r+1;break;case"Home":t=0;break;case"End":t=s;break}a.preventDefault(),i[t].focus()}e.addEventListener("click",d),e.addEventListener("keydown",l)}var I=Array.from(document.querySelectorAll(p));I.forEach(e=>C(e));var _=".dialog",D=".dialog-backdrop",L="no-scroll",h="is-shown",x="data-hide",R="data-target";function q(e){let i=e.id,d=document.querySelector(`[${R}="${i}"]`),l=e.closest(D);function a(){e.addEventListener("click",r),l.addEventListener("click",s),document.addEventListener("keydown",t),l.classList.add(h),n(),f(e)}function o(){e.removeEventListener("click",r),l.removeEventListener("click",s),document.removeEventListener("keydown",t),l.classList.remove(h),n()}function r(c){!c.target.hasAttribute(x)||o()}function s(c){e.contains(c.target)||o()}function t(c){c.key==="Escape"&&o()}function n(){if(window.innerHeight<document.body.scrollHeight){let c=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(L)?(document.body.classList.remove(L),document.body.style.top="",window.scroll(0,c)):(document.body.classList.add(L),document.body.style.top=-c+"px")}}function f(c){let u=Array.from(c.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),E=u[0],b=u[u.length-1];function g(m){if(m.key==="Tab"){let k=m.shiftKey;k?document.activeElement===E?(m.preventDefault(),b.focus()):document.activeElement===c&&m.preventDefault():k||document.activeElement===b&&(m.preventDefault(),E.focus())}}c.addEventListener("keydown",g),c.setAttribute("tabindex",-1),c.focus()}d.addEventListener("click",a)}var H=Array.from(document.querySelectorAll(_));H.forEach(e=>q(e));var N=".menu",F=".menu-link",B="is-activated",w="is-shown",U="data-target";function G(e){let i=e.id,d=document.querySelector(`[${U}="${i}"]`),l=Array.from(e.querySelectorAll(F));function a(){let n=e.classList.contains(w);d.classList.toggle(B),d.setAttribute("aria-expanded",!n),e.classList.toggle(w),n?(document.removeEventListener("click",r),document.removeEventListener("keydown",s),d.removeEventListener("keydown",t),e.removeEventListener("keydown",t)):(document.addEventListener("click",r),document.addEventListener("keydown",s),d.addEventListener("keydown",t),e.addEventListener("keydown",t),l.forEach(f=>{f.addEventListener("keydown",o)}))}function o(n){let f=["ArrowUp","ArrowDown","Home","End"],c=l.indexOf(n.currentTarget),u=l.length-1,E=0;if(f.includes(n.key)){switch(n.preventDefault(),n.key){case"ArrowUp":E=c===0?u:c-1;break;case"ArrowDown":E=c===u?0:c+1;break;case"Home":E=0;break;case"End":E=u;break}l[E].focus()}}function r(n){!d.contains(n.target)&&!e.contains(n.target)&&a()}function s(n){n.key==="Escape"&&a()}function t(n){if(n.key==="Tab"){let f=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),c=f[f.length-1],u=n.shiftKey;(document.activeElement===c&&!u||document.activeElement===d&&u)&&a()}}d.addEventListener("click",a)}var $=Array.from(document.querySelectorAll(N));$.forEach(e=>G(e));var K=".notification",M=".notification-button-dismiss";function P(e){function i(d){d.target.closest(M)&&e.remove()}e.addEventListener("click",i)}var W=Array.from(document.querySelectorAll(K));W.forEach(e=>P(e));var V=".tabset",Y=".tabset-tab",j=".tabset-panel",y="is-activated",T="is-shown",z="data-target";function J(e){let i=Array.from(e.querySelectorAll(Y)),d=Array.from(e.querySelectorAll(j));function l(o){let r=o.currentTarget,s=r.getAttribute(z);i.forEach(t=>{t===r?r.classList.add(y):t.classList.contains(y)&&t.classList.remove(y)}),d.forEach(t=>{t.id===s?t.classList.add(T):t.classList.remove(T)})}function a(o){let r=["ArrowLeft","ArrowRight","Home","End"],s=i.indexOf(o.currentTarget),t=i.length-1,n=0;if(r.includes(o.key)){switch(o.preventDefault(),o.key){case"ArrowLeft":n=s===0?t:s-1;break;case"ArrowRight":n=s===t?0:s+1;break;case"Home":n=0;break;case"End":n=t;break}i[s].removeAttribute("tabIndex"),i[n].setAttribute("tabIndex","-1"),i[n].focus()}}i.forEach(o=>{o.addEventListener("click",l),o.addEventListener("keydown",a)})}var Q=Array.from(document.querySelectorAll(V));Q.forEach(e=>J(e));
