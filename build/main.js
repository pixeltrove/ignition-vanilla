var w=".accordion",m=".accordion-handle",T="is-activated",b="is-shown",g="data-target";function p(e){let i=Array.from(e.querySelectorAll(m));function d(a){if(!a.target.closest(m))return;let o=a.target.closest(m),r=o.getAttribute(g),c=document.querySelector(`#${r}`),t=c.classList.contains(b);o.classList.toggle(T),o.setAttribute("aria-expanded",!t),c.classList.toggle(b)}function l(a){if(!a.target.closest(m)||!["ArrowUp","ArrowDown","Home","End"].includes(a.key))return;let o=a.target.closest(m),r=i.indexOf(o),c=i.length-1,t;switch(a.key){case"ArrowUp":t=r===0?c:r-1;break;case"ArrowDown":t=r===c?0:r+1;break;case"Home":t=0;break;case"End":t=c;break}a.preventDefault(),i[t].focus()}e.addEventListener("click",d),e.addEventListener("keydown",l)}var v=Array.from(document.querySelectorAll(w));v.forEach(e=>p(e));var O=".dialog",C=".dialog-backdrop",A="no-scroll",k="is-shown",I="data-hide",_="data-target";function D(e){let i=e.id,d=document.querySelector(`[${_}="${i}"]`),l=e.closest(C);function a(){l.classList.add(k),e.setAttribute("tabindex",-1),e.focus(),n(),e.addEventListener("keydown",f),e.addEventListener("click",r),l.addEventListener("click",c),document.addEventListener("keydown",t)}function o(){l.classList.remove(k),n(),e.removeEventListener("keydown",f),e.removeEventListener("click",r),l.removeEventListener("click",c),document.removeEventListener("keydown",t)}function r(s){s.target.hasAttribute(I)&&o()}function c(s){e.contains(s.target)||o()}function t(s){s.key==="Escape"&&o()}function n(){if(window.innerHeight>=document.body.scrollHeight)return;let s=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(A)?(document.body.classList.remove(A),document.body.style.top="",window.scroll(0,s)):(document.body.classList.add(A),document.body.style.top=-s+"px")}function f(s){if(s.key!=="Tab")return;let u=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),E=u.length-1,y=u.indexOf(document.activeElement);s.shiftKey&&(y===0||document.activeElement===e)?(s.preventDefault(),u[u.length-1].focus()):!s.shiftKey&&y===E&&(s.preventDefault(),u[0].focus())}d.addEventListener("click",a)}var x=Array.from(document.querySelectorAll(O));x.forEach(e=>D(e));var R=".menu",q=".menu-link",H="is-activated",S="is-shown",N="data-target";function B(e){let i=e.id,d=document.querySelector(`[${N}="${i}"]`),l=Array.from(e.querySelectorAll(q));function a(){let n=e.classList.contains(S);d.classList.toggle(H),d.setAttribute("aria-expanded",!n),e.classList.toggle(S),n?(document.removeEventListener("click",r),document.removeEventListener("keydown",c),d.removeEventListener("keydown",t),e.removeEventListener("keydown",t)):(document.addEventListener("click",r),document.addEventListener("keydown",c),d.addEventListener("keydown",t),e.addEventListener("keydown",t),l.forEach(f=>{f.addEventListener("keydown",o)}))}function o(n){let f=["ArrowUp","ArrowDown","Home","End"],s=l.indexOf(n.currentTarget),u=l.length-1,E=0;if(f.includes(n.key)){switch(n.preventDefault(),n.key){case"ArrowUp":E=s===0?u:s-1;break;case"ArrowDown":E=s===u?0:s+1;break;case"Home":E=0;break;case"End":E=u;break}l[E].focus()}}function r(n){!d.contains(n.target)&&!e.contains(n.target)&&a()}function c(n){n.key==="Escape"&&a()}function t(n){if(n.key==="Tab"){let f=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),s=f[f.length-1],u=n.shiftKey;(document.activeElement===s&&!u||document.activeElement===d&&u)&&a()}}d.addEventListener("click",a)}var F=Array.from(document.querySelectorAll(R));F.forEach(e=>B(e));var U=".notification",G=".notification-button-dismiss";function K(e){function i(d){d.target.closest(G)&&e.remove()}e.addEventListener("click",i)}var $=Array.from(document.querySelectorAll(U));$.forEach(e=>K(e));var M=".tabset",P=".tabset-tab",W=".tabset-panel",L="is-activated",h="is-shown",V="data-target";function Y(e){let i=Array.from(e.querySelectorAll(P)),d=Array.from(e.querySelectorAll(W));function l(o){let r=o.currentTarget,c=r.getAttribute(V);i.forEach(t=>{t===r?r.classList.add(L):t.classList.contains(L)&&t.classList.remove(L)}),d.forEach(t=>{t.id===c?t.classList.add(h):t.classList.remove(h)})}function a(o){let r=["ArrowLeft","ArrowRight","Home","End"],c=i.indexOf(o.currentTarget),t=i.length-1,n=0;if(r.includes(o.key)){switch(o.preventDefault(),o.key){case"ArrowLeft":n=c===0?t:c-1;break;case"ArrowRight":n=c===t?0:c+1;break;case"Home":n=0;break;case"End":n=t;break}i[c].removeAttribute("tabIndex"),i[n].setAttribute("tabIndex","-1"),i[n].focus()}}i.forEach(o=>{o.addEventListener("click",l),o.addEventListener("keydown",a)})}var j=Array.from(document.querySelectorAll(M));j.forEach(e=>Y(e));
