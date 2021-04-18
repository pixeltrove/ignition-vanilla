var T=".accordion",p=".accordion-handle",w="is-activated",L="is-shown",h="data-target";function v(t){let s=Array.from(t.querySelectorAll(p));function i(r){let o=r.currentTarget,a=o.getAttribute(h),c=t.querySelector(`#${a}`),e=c.classList.contains(L);o.classList.toggle(w),o.setAttribute("aria-expanded",!e),c.classList.toggle(L)}function d(r){let o=["ArrowUp","ArrowDown","Home","End"],a=s.indexOf(r.currentTarget),c=s.length-1,e=0;if(o.includes(r.key)){switch(r.preventDefault(),r.key){case"ArrowUp":e=a===0?c:a-1;break;case"ArrowDown":e=a===c?0:a+1;break;case"Home":e=0;break;case"End":e=c;break}s[e].focus()}}s.forEach(r=>{r.addEventListener("click",i),r.addEventListener("keydown",d)})}var O=Array.from(document.querySelectorAll(T));O.forEach(t=>v(t));var C=".dialog",b=".dialog-backdrop",m="no-scroll",g="is-shown",I="data-hide",_="data-target";function D(t){let s=t.id,i=document.querySelector(`[${_}="${s}"]`),d=t.closest(b);function r(){t.addEventListener("click",o),d.addEventListener("click",o),document.addEventListener("keyup",o),d.classList.add(g),a(),c(t)}function o(e){(e.target.hasAttribute(I)&&e.type==="click"||e.target.matches(b)||e.key==="Escape")&&(t.removeEventListener("click",o),d.removeEventListener("click",o),document.removeEventListener("keyup",o),d.classList.remove(g),a())}function a(){if(window.innerHeight<document.body.scrollHeight){let e=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(m)?(document.body.classList.remove(m),document.body.style.top="",window.scroll(0,e)):(document.body.classList.add(m),document.body.style.top=-e+"px")}}function c(e){let n=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),u=n[0],f=n[n.length-1];function E(l){if(l.key==="Tab"){let y=l.shiftKey;y?document.activeElement===u?(l.preventDefault(),f.focus()):document.activeElement===e&&l.preventDefault():y||document.activeElement===f&&(l.preventDefault(),u.focus())}}e.addEventListener("keydown",E),e.setAttribute("tabindex",-1),e.focus()}i.addEventListener("click",r)}var x=Array.from(document.querySelectorAll(C));x.forEach(t=>D(t));var R=".menu",H=".menu-link",q="is-activated",k="is-shown",N="data-target";function K(t){let s=t.id,i=document.querySelector(`[${N}="${s}"]`),d=Array.from(t.querySelectorAll(H));function r(){let n=t.classList.contains(k);i.classList.toggle(q),i.setAttribute("aria-expanded",!n),t.classList.toggle(k),n?(document.removeEventListener("click",a),document.removeEventListener("keydown",c),i.removeEventListener("keydown",e),t.removeEventListener("keydown",e)):(document.addEventListener("click",a),document.addEventListener("keydown",c),i.addEventListener("keydown",e),t.addEventListener("keydown",e),d.forEach(u=>{u.addEventListener("keydown",o)}))}function o(n){let u=["ArrowUp","ArrowDown","Home","End"],f=d.indexOf(n.currentTarget),E=d.length-1,l=0;if(u.includes(n.key)){switch(n.preventDefault(),n.key){case"ArrowUp":l=f===0?E:f-1;break;case"ArrowDown":l=f===E?0:f+1;break;case"Home":l=0;break;case"End":l=E;break}d[l].focus()}}function a(n){!i.contains(n.target)&&!t.contains(n.target)&&r()}function c(n){n.key==="Escape"&&r()}function e(n){if(n.key==="Tab"){let u=Array.from(t.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),f=u[u.length-1],E=n.shiftKey;(document.activeElement===f&&!E||document.activeElement===i&&E)&&r()}}i.addEventListener("click",r)}var U=Array.from(document.querySelectorAll(R));U.forEach(t=>K(t));var B=".notification",F=".notification-button-dismiss";function G(t){function s(i){i.target.closest(F)&&t.remove()}t.addEventListener("click",s)}var $=Array.from(document.querySelectorAll(B));$.forEach(t=>G(t));var M=".tabset",P=".tabset-tab",W=".tabset-panel",A="is-activated",S="is-shown",V="data-target";function Y(t){let s=Array.from(t.querySelectorAll(P)),i=Array.from(t.querySelectorAll(W));function d(o){let a=o.currentTarget,c=a.getAttribute(V);s.forEach(e=>{e===a?a.classList.add(A):e.classList.contains(A)&&e.classList.remove(A)}),i.forEach(e=>{e.id===c?e.classList.add(S):e.classList.remove(S)})}function r(o){let a=["ArrowLeft","ArrowRight","Home","End"],c=s.indexOf(o.currentTarget),e=s.length-1,n=0;if(a.includes(o.key)){switch(o.preventDefault(),o.key){case"ArrowLeft":n=c===0?e:c-1;break;case"ArrowRight":n=c===e?0:c+1;break;case"Home":n=0;break;case"End":n=e;break}s[c].removeAttribute("tabIndex"),s[n].setAttribute("tabIndex","-1"),s[n].focus()}}s.forEach(o=>{o.addEventListener("click",d),o.addEventListener("keydown",r)})}var j=Array.from(document.querySelectorAll(M));j.forEach(t=>Y(t));
