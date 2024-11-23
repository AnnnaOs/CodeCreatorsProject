import{S as u,N as f,K as h,M as m,a as l}from"./assets/vendor-CHlyvQHw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const p=new u(".swiper",{modules:[f,h,m],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{1280:{slidesPerView:2}},spaceBetween:32});l.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function g(){try{return(await l.get("/reviews")).data}catch(t){return console.error("Failed to load reviews:",t),[]}}const w=t=>t.map(r=>`<li class="reviews-item swiper-slide">
        <p class="reviews-text">${r.review}</p>
        <div class="reviewer-data">
          <img
            src="${r.avatar_url}"
            alt="Natalia Shevchenko"
            loading="lazy"
            width="40"
            height="40"
            class="reviews-foto"
          />
          <p class="reviewer-name">${r.author}</p>
        </div>
      </li>`).join(""),v=async()=>{const t=document.querySelector(".reviews-list");try{const r=await g();if(r.length===0){t.innerHTML='<p class="not-found">Not found</p>';return}const i=w(r);t.innerHTML=i,p.update()}catch(r){console.log(r),alert("Failed to load reviews. Please try again later.")}};window.addEventListener("load",v);const y=document.querySelector(".theme-toggle"),o=document.body,L=document.getElementById("favicon"),c=localStorage.getItem("theme")||"light-theme";o.classList.add(c);d(c==="light-theme"?"#ffffff":"#000000");y.addEventListener("click",()=>{const t=o.classList.contains("light-theme")?"dark-theme":"light-theme";o.classList.remove("light-theme","dark-theme"),o.classList.add(t),d(t==="light-theme"?"#ffffff":"#000000"),localStorage.setItem("theme",t)});function d(t){const r=`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" rx="2" fill="${t}"/>
    <path d="M1.5 4.75H2.78936C3.62164 4.75 4.18377 4.78747 4.47576 4.86242C4.77047 4.93736 4.99423 5.06048 5.14704 5.23178C5.29985 5.40308 5.39536 5.59445 5.43356 5.8059C5.47177 6.01467 5.49087 6.42686 5.49087 7.04246V9.31887C5.49087 9.90236 5.46222 10.2931 5.40491 10.4912C5.35034 10.6866 5.25346 10.8405 5.11429 10.9529C4.97513 11.0626 4.80321 11.1403 4.59855 11.1858C4.39389 11.2286 4.08554 11.25 3.67349 11.25H1.5V4.75ZM3.22324 5.86211V10.1379C3.47156 10.1379 3.62437 10.0897 3.68168 9.99336C3.73898 9.89433 3.76763 9.62801 3.76763 9.19441V6.66909C3.76763 6.37467 3.75808 6.18597 3.73898 6.103C3.71988 6.02002 3.67622 5.9598 3.608 5.92233C3.53978 5.88218 3.41152 5.86211 3.22324 5.86211Z" fill="#00B068"/>
    <path d="M6.52645 4.75H9.39987V6.0508H8.24969V7.28335H9.3262V8.51992H8.24969V9.9492H9.51448V11.25H6.52645V4.75Z" fill="#00B068"/>
    <path d="M14.5 4.75L13.6241 11.25H11.0085L10.0139 4.75H11.8312C12.0414 6.54061 12.1914 8.0542 12.2815 9.29077C12.3715 8.04082 12.4657 6.93005 12.5639 5.95846L12.6826 4.75H14.5Z" fill="#00B068"/>
  </svg>
`;L.setAttribute("href",`data:image/svg+xml;base64,${btoa(r)}`)}
//# sourceMappingURL=index.js.map
