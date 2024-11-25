import{S as C,N as E,K as H,M as x,a as g,i as k}from"./assets/vendor-B1kB36gM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const B=new C(".swiper",{modules:[E,H,x],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{1280:{slidesPerView:2}},spaceBetween:32});g.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function M(){try{return(await g.get("/reviews")).data}catch(e){return console.error("Failed to load reviews:",e),[]}}const V=e=>e.map(t=>`<li class="reviews-item swiper-slide">
        <p class="reviews-text">${t.review}</p>
        <div class="reviewer-data">
          <img
            src="${t.avatar_url}"
            alt="Natalia Shevchenko"
            loading="lazy"
            width="40"
            height="40"
            class="reviews-foto"
          />
          <p class="reviewer-name">${t.author}</p>
        </div>
      </li>`).join(""),I=async()=>{const e=document.querySelector(".reviews-list");try{const t=await M();if(t.length===0){e.innerHTML='<p class="not-found">Not found</p>';return}const o=V(t);e.innerHTML=o,B.update()}catch(t){console.log(t),alert("Failed to load reviews. Please try again later.")}};window.addEventListener("load",I);const v=document.querySelectorAll(".faq-item");v.forEach(e=>{const t=e.querySelector(".accordion-btn");e.querySelector(".faq-answer");const o=t.querySelector(".accordion-icon use");t.addEventListener("click",()=>{v.forEach(n=>{n!==e&&(n.classList.remove("active"),n.querySelector(".accordion-icon use").setAttribute("href","/img/icons.svg#down"))}),e.classList.toggle("active"),e.classList.contains("active")?o.setAttribute("href","/img/icons.svg#up"):o.setAttribute("href","/img/icons.svg#down")})});v[0].classList.add("active");const A=v[0].querySelector(".accordion-icon use");A.setAttribute("href","/img/icons.svg#up");const T="https://portfolio-js.b.goit.study/api/requests",w=document.querySelector(".form"),i=document.querySelector(".form-input"),L=document.querySelector(".form-message"),h=document.querySelector(".form-icon-success"),c=document.querySelector(".form-input-error"),p=document.querySelector(".form-input-error-msg"),d=document.querySelector(".modal-overlay"),N=document.querySelector(".modal-close-btn"),O=document.querySelector(".modal-text-main"),P=document.querySelector(".modal-text-second");N.addEventListener("click",()=>{d.classList.remove("is-open"),document.body.style.overflow="auto"});d.addEventListener("click",e=>{d.classList.remove("is-open"),document.body.style.overflow="auto"});window.addEventListener("keydown",e=>{e.key==="Escape"&&(d.classList.remove("is-open"),document.body.style.overflow="auto")});const b=()=>i.validity.valid?(i.classList.add("valid"),i.classList.remove("invalid"),h.style.display="block",c.style.display="none",!0):(i.classList.remove("valid"),i.classList.add("invalid"),h.style.display="none",c.style.display="block",c.textContent="Invalid email, try again",!1);i.addEventListener("input",b);w.addEventListener("submit",async e=>{if(e.preventDefault(),i.value.trim()===""){c.style.display="block",c.textContent="All fields must be filled";return}if(L.value.trim()===""){p.style.display="block",p.textContent="All fields must be filled";return}else p.style.display="none";if(b()){const t={email:i.value.trim(),comment:L.value.trim()};try{const o=await g.post(T,t);o.status===201&&(d.classList.add("is-open"),O.textContent=o.data.title,P.textContent=o.data.message,w.reset(),h.style.display="none",i.classList.remove("valid","invalid"))}catch(o){k.error({message:o.message,title:"Error",position:"center"})}}});const m=document.body,R=document.getElementById("favicon"),F=document.getElementById("change-theme"),S=localStorage.getItem("theme")||"light-theme";m.classList.add(S);q(S==="light-theme"?"#ffffff":"#000000");F.addEventListener("change",function(){const e=m.classList.contains("light-theme")?"dark-theme":"light-theme";m.classList.remove("light-theme","dark-theme"),m.classList.add(e),q(e==="light-theme"?"#ffffff":"#000000"),localStorage.setItem("theme",e)});function q(e){const t=`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" rx="2" fill="${e}"/>
    <path d="M1.5 4.75H2.78936C3.62164 4.75 4.18377 4.78747 4.47576 4.86242C4.77047 4.93736 4.99423 5.06048 5.14704 5.23178C5.29985 5.40308 5.39536 5.59445 5.43356 5.8059C5.47177 6.01467 5.49087 6.42686 5.49087 7.04246V9.31887C5.49087 9.90236 5.46222 10.2931 5.40491 10.4912C5.35034 10.6866 5.25346 10.8405 5.11429 10.9529C4.97513 11.0626 4.80321 11.1403 4.59855 11.1858C4.39389 11.2286 4.08554 11.25 3.67349 11.25H1.5V4.75ZM3.22324 5.86211V10.1379C3.47156 10.1379 3.62437 10.0897 3.68168 9.99336C3.73898 9.89433 3.76763 9.62801 3.76763 9.19441V6.66909C3.76763 6.37467 3.75808 6.18597 3.73898 6.103C3.71988 6.02002 3.67622 5.9598 3.608 5.92233C3.53978 5.88218 3.41152 5.86211 3.22324 5.86211Z" fill="#00B068"/>
    <path d="M6.52645 4.75H9.39987V6.0508H8.24969V7.28335H9.3262V8.51992H8.24969V9.9492H9.51448V11.25H6.52645V4.75Z" fill="#00B068"/>
    <path d="M14.5 4.75L13.6241 11.25H11.0085L10.0139 4.75H11.8312C12.0414 6.54061 12.1914 8.0542 12.2815 9.29077C12.3715 8.04082 12.4657 6.93005 12.5639 5.95846L12.6826 4.75H14.5Z" fill="#00B068"/>
  </svg>
`;R.setAttribute("href",`data:image/svg+xml;base64,${btoa(t)}`)}const l=document.querySelector(".scroll-up-btn"),a=document.querySelector(".scroll-down-btn");let y=0,u=!0;window.addEventListener("scroll",()=>{let e=window.scrollY;e>0?(l.classList.add("is-active-scroll"),a.classList.add("is-active-scroll")):(l.classList.remove("is-active-scroll"),a.classList.remove("is-active-scroll")),e<y&&u?(l.classList.add("is-active-scroll"),u=!1):e>y&&!u&&(l.classList.remove("is-active-scroll"),u=!0),e+window.innerHeight>=document.body.scrollHeight&&a.classList.remove("is-active-scroll"),(e===0||e+window.innerHeight>=document.body.scrollHeight)&&l.classList.remove("is-active-scroll"),y=e<=0?0:e});l.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),l.classList.remove("is-active-scroll")});a.addEventListener("click",()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),a.classList.remove("is-active-scroll")});
//# sourceMappingURL=index.js.map
