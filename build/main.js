var g=".accordion",v=".accordion-handle",k="is-activated",b="is-shown",O="data-target",C=t=>{let n=t.querySelectorAll(v),c=n[0],i=n[n.length-1],r=s=>{let o=s.currentTarget,e=o.getAttribute(O),d=document.querySelector(`#${e}`),l=d.classList.contains(b);o.classList.toggle(k),o.setAttribute("aria-expanded",!l),d.classList.toggle(b)},a=s=>{let o=s.currentTarget,e=Array.from(n).indexOf(o),d=n[e-1],l=n[e+1];switch(s.key){case"ArrowUp":s.preventDefault(),o===c?i.focus():d.focus();break;case"ArrowDown":s.preventDefault(),o===i?c.focus():l.focus();break;case"Home":s.preventDefault(),c.focus();break;case"End":s.preventDefault(),i.focus();break}};n.forEach(s=>{s.addEventListener("click",r),s.addEventListener("keydown",a)})},_=document.querySelectorAll(g);_.forEach(t=>C(t));var D=".dialog",S=".dialog-backdrop",m="no-scroll",T="is-shown",w="data-hide",I="data-target",R=t=>{let n=t.id,c=document.querySelector(`[${I}="${n}"]`),i=t.closest(S),r=()=>{t.addEventListener("click",a),i.addEventListener("click",a),document.addEventListener("keyup",a),i.classList.add(T),s(),o(t)},a=e=>{(e.target.hasAttribute(w)&&e.type==="click"||e.target.matches(S)||e.key==="Escape")&&(t.removeEventListener("click",a),i.removeEventListener("click",a),document.removeEventListener("keyup",a),i.classList.remove(T),s())},s=()=>{if(window.innerHeight<document.body.scrollHeight){let e=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(m)?(document.body.classList.remove(m),document.body.style.top="",window.scroll(0,e)):(document.body.classList.add(m),document.body.style.top=-e+"px")}},o=e=>{let d=e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable], [tabindex]:not([tabindex^='-'])"),l=d[0],u=d[d.length-1],h=E=>{if(E.key==="Tab"){let f=E.shiftKey;f?document.activeElement===l?(E.preventDefault(),u.focus()):document.activeElement===e&&E.preventDefault():f||document.activeElement===u&&(E.preventDefault(),l.focus())}};e.addEventListener("keydown",h),e.setAttribute("tabindex",-1),e.focus()};c.addEventListener("click",r)},H=document.querySelectorAll(D);H.forEach(t=>R(t));var x=".flyout",p="is-activated",L="is-shown",q="data-target",N=t=>{let n=t.id,c=document.querySelector(`[${q}="${n}"]`),i=()=>{c.classList.add(p),c.setAttribute("aria-expanded",!0),t.classList.add(L),document.addEventListener("click",a)},r=()=>{c.classList.remove(p),c.setAttribute("aria-expanded",!1),t.classList.remove(L)},a=e=>{!c.contains(e.target)&&!t.contains(e.target)&&(r(),document.removeEventListener("click",a))},s=e=>{if(e.key==="Tab"){let d=t.querySelectorAll("a[href], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable]"),l=d[d.length-1],u=e.shiftKey;(document.activeElement===l&&!u||document.activeElement===c&&u)&&r()}},o=()=>t.classList.contains(L)?r():i();c.addEventListener("click",o),c.addEventListener("keydown",s),t.addEventListener("keydown",s)},F=document.querySelectorAll(x);F.forEach(t=>N(t));var B=".notification",G=".notification-button-dismiss",$=t=>{let n=c=>{c.target.closest(G)&&t.remove()};t.addEventListener("click",n)},K=document.querySelectorAll(B);K.forEach(t=>$(t));var P=".tabset",U=".tabset-tab",W=".tabset-panel",A="is-activated",y="is-shown",V="data-target",M=t=>{let n=t.querySelectorAll(U),c=t.querySelectorAll(W),i=r=>{let a=r.currentTarget,s=a.getAttribute(V);n.forEach(o=>{o===a?a.classList.add(A):o.classList.contains(A)&&o.classList.remove(A)}),c.forEach(o=>{o.id===s?o.classList.add(y):o.classList.remove(y)})};n.forEach(r=>r.addEventListener("click",i))},Y=document.querySelectorAll(P);Y.forEach(t=>M(t));
