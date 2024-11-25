import{S as H,N as J,K as B,M as O,a as j,i as D}from"./assets/vendor-B1kB36gM.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const N=new H(".swiper",{modules:[J,B,O],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{1280:{slidesPerView:2}},spaceBetween:32});j.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function R(){try{return(await j.get("/reviews")).data}catch(e){return console.error("Failed to load reviews:",e),[]}}const M=e=>e.map(s=>`<li class="reviews-item swiper-slide">
        <p class="reviews-text">${s.review}</p>
        <div class="reviewer-data">
          <img
            src="${s.avatar_url}"
            alt="Natalia Shevchenko"
            loading="lazy"
            width="40"
            height="40"
            class="reviews-foto"
          />
          <p class="reviewer-name">${s.author}</p>
        </div>
      </li>`).join(""),G=async()=>{const e=document.querySelector(".reviews-list");try{const s=await R();if(s.length===0){e.innerHTML='<p class="not-found">Not found</p>';return}const r=M(s);e.innerHTML=r,N.update()}catch(s){console.log(s),alert("Failed to load reviews. Please try again later.")}};window.addEventListener("load",G);const U="/codeCreators-project/assets/proj1@1x-awWepC32.jpg",V="/codeCreators-project/assets/proj1@2x-WB_Ld32T.jpg",$="/codeCreators-project/assets/proj2@1x-D66hgNDU.jpg",F="/codeCreators-project/assets/proj2@2x-DCW1_PrD.jpg",P="/codeCreators-project/assets/proj3@1x-DKqfQ0bg.jpg",W="/codeCreators-project/assets/proj3@2x-DXOWdXYL.jpg",Y="/codeCreators-project/assets/proj4@1x-DLMABuqi.jpg",_="/codeCreators-project/assets/proj4@2x-DliwpUlG.jpg",K="/codeCreators-project/assets/proj5@1x-D-eObtw5.jpg",Z="/codeCreators-project/assets/proj5@2x-e0CwrI9L.jpg",z="/codeCreators-project/assets/proj6@1x-DPnGRVQw.jpg",Q="/codeCreators-project/assets/proj6@2x-DFVUSngx.jpg",X="/codeCreators-project/assets/proj7@1x-62qG-gFu.jpg",ee="/codeCreators-project/assets/proj7@2x-UoJODWHq.jpg",te="/codeCreators-project/assets/proj8@1x-BICpySrC.jpg",se="/codeCreators-project/assets/proj8@2x-D1bWJHvJ.jpg",oe="/codeCreators-project/assets/proj9@1x-2a6h0el_.jpg",re="/codeCreators-project/assets/proj9@2x-UJU8Wknq.jpg",ce="/codeCreators-project/assets/proj10@1x-CMd0RFKk.jpg",ae="/codeCreators-project/assets/proj10@2x-CTDtsUjY.jpg",ie="/codeCreators-project/assets/icons-LHmDkW2B.svg",b=[{title:"Wallet Webservice",image:U,image2x:V,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Wallet Webservice Project"},{title:"Green harvest webservice",image:$,image2x:F,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Green harvest"},{title:"English Exellence webservice",image:P,image2x:W,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"English Exellence"},{title:"Transform your webservice",image:Y,image2x:_,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Transform your"},{title:"Ukraine traditions webservice",image:K,image2x:Z,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Ukraine traditions"},{title:"Stay Healthy webservice",image:z,image2x:Q,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Stay Healthy"},{title:"Mimino webservice",image:X,image2x:ee,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Mimino"},{title:"Transformation with a Touch of the Brush webservice",image:te,image2x:se,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Transformation with a Touch of the Brush"},{title:"Fresh harvest box webservice",image:oe,image2x:re,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Fresh harvest box"},{title:"Transform your business webservice",image:ce,image2x:ae,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Transform your business"}];let p=0;const S=3;function C(){const e=document.querySelector(".project-list"),r=b.slice(p,p+S).map(({image:t,image2x:o,alt:n,techStack:E,title:T,link:A,svg:ge},ve)=>`
            <li class="project-item">
                <img  srcset="${t} 1x, ${o} 2x" src="${t}"  alt="${n}" class="project-image">
                <div class="project-content">
                    <p class="project-tech">${E}</p>
                    <div class="project-name-btn">
                        <h3 class="project-name">${T}</h3>
                        <div class="centered">
                                <a href="${A}" class="project-link" target="_blank">VISIT
                                 <svg class="project-icon" width="15" height="15">
                                        <use href="${ie}#arrow-projects"></use>
                                    </svg>
                                </a>
                                
                        </div>
                    </div>
                </div>
            </li>
            `).join("");e.innerHTML+=r,document.querySelectorAll(".project-item:not(.show)").forEach((t,o)=>{setTimeout(()=>{t.classList.add("show")},o*200)}),p+=S,p>=b.length&&(document.querySelector(".load-more").style.display="none")}document.querySelector(".load-more").addEventListener("click",C);C();const v=document.querySelectorAll(".faq-item");v.forEach(e=>{const s=e.querySelector(".accordion-btn");e.querySelector(".faq-answer");const r=s.querySelector(".accordion-icon use");s.addEventListener("click",()=>{v.forEach(a=>{a!==e&&(a.classList.remove("active"),a.querySelector(".accordion-icon use").setAttribute("href","/img/icons.svg#down"))}),e.classList.toggle("active"),e.classList.contains("active")?r.setAttribute("href","/img/icons.svg#up"):r.setAttribute("href","/img/icons.svg#down")})});v[0].classList.add("active");const ne=v[0].querySelector(".accordion-icon use");ne.setAttribute("href","/img/icons.svg#up");const le="https://portfolio-js.b.goit.study/api/requests",x=document.querySelector(".form"),c=document.querySelector(".form-input"),L=document.querySelector(".form-message"),y=document.querySelector(".form-icon-success"),l=document.querySelector(".form-input-error"),h=document.querySelector(".form-input-error-msg"),m=document.querySelector(".modal-overlay"),de=document.querySelector(".modal-close-btn"),me=document.querySelector(".modal-text-main"),pe=document.querySelector(".modal-text-second");de.addEventListener("click",()=>{m.classList.remove("is-open"),document.body.style.overflow="auto"});m.addEventListener("click",e=>{m.classList.remove("is-open"),document.body.style.overflow="auto"});window.addEventListener("keydown",e=>{e.key==="Escape"&&(m.classList.remove("is-open"),document.body.style.overflow="auto")});const k=()=>c.validity.valid?(c.classList.add("valid"),c.classList.remove("invalid"),y.style.display="block",l.style.display="none",!0):(c.classList.remove("valid"),c.classList.add("invalid"),y.style.display="none",l.style.display="block",l.textContent="Invalid email, try again",!1);c.addEventListener("input",k);x.addEventListener("submit",async e=>{if(e.preventDefault(),c.value.trim()===""){l.style.display="block",l.textContent="All fields must be filled";return}if(L.value.trim()===""){h.style.display="block",h.textContent="All fields must be filled";return}else h.style.display="none";if(k()){const s={email:c.value.trim(),comment:L.value.trim()};try{const r=await j.post(le,s);r.status===201&&(m.classList.add("is-open"),me.textContent=r.data.title,pe.textContent=r.data.message,x.reset(),y.style.display="none",c.classList.remove("valid","invalid"))}catch(r){D.error({message:r.message,title:"Error",position:"center"})}}});const g=document.body,ue=document.getElementById("favicon"),I=document.getElementById("switch"),w=localStorage.getItem("theme")||"light-theme";g.classList.add(w);I.checked=w!=="light-theme";q(w==="light-theme"?"#ffffff":"#000000");I.addEventListener("change",function(){const e=g.classList.contains("light-theme")?"dark-theme":"light-theme";g.classList.remove("light-theme","dark-theme"),g.classList.add(e),q(e==="light-theme"?"#ffffff":"#000000"),localStorage.setItem("theme",e)});function q(e){const s=`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" rx="2" fill="${e}"/>
    <path d="M1.5 4.75H2.78936C3.62164 4.75 4.18377 4.78747 4.47576 4.86242C4.77047 4.93736 4.99423 5.06048 5.14704 5.23178C5.29985 5.40308 5.39536 5.59445 5.43356 5.8059C5.47177 6.01467 5.49087 6.42686 5.49087 7.04246V9.31887C5.49087 9.90236 5.46222 10.2931 5.40491 10.4912C5.35034 10.6866 5.25346 10.8405 5.11429 10.9529C4.97513 11.0626 4.80321 11.1403 4.59855 11.1858C4.39389 11.2286 4.08554 11.25 3.67349 11.25H1.5V4.75ZM3.22324 5.86211V10.1379C3.47156 10.1379 3.62437 10.0897 3.68168 9.99336C3.73898 9.89433 3.76763 9.62801 3.76763 9.19441V6.66909C3.76763 6.37467 3.75808 6.18597 3.73898 6.103C3.71988 6.02002 3.67622 5.9598 3.608 5.92233C3.53978 5.88218 3.41152 5.86211 3.22324 5.86211Z" fill="#00B068"/>
    <path d="M6.52645 4.75H9.39987V6.0508H8.24969V7.28335H9.3262V8.51992H8.24969V9.9492H9.51448V11.25H6.52645V4.75Z" fill="#00B068"/>
    <path d="M14.5 4.75L13.6241 11.25H11.0085L10.0139 4.75H11.8312C12.0414 6.54061 12.1914 8.0542 12.2815 9.29077C12.3715 8.04082 12.4657 6.93005 12.5639 5.95846L12.6826 4.75H14.5Z" fill="#00B068"/>
  </svg>
`;ue.setAttribute("href",`data:image/svg+xml;base64,${btoa(s)}`)}const i=document.querySelector(".scroll-up-btn"),d=document.querySelector(".scroll-down-btn");let f=0,u=!0;window.addEventListener("scroll",()=>{let e=window.scrollY;e>0?(i.classList.add("is-active-scroll"),d.classList.add("is-active-scroll")):(i.classList.remove("is-active-scroll"),d.classList.remove("is-active-scroll")),e<f&&u?(i.classList.add("is-active-scroll"),u=!1):e>f&&!u&&(i.classList.remove("is-active-scroll"),u=!0),e+window.innerHeight>=document.body.scrollHeight&&d.classList.remove("is-active-scroll"),(e===0||e+window.innerHeight>=document.body.scrollHeight)&&i.classList.remove("is-active-scroll"),f=e<=0?0:e});i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),i.classList.remove("is-active-scroll")});d.addEventListener("click",()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),d.classList.remove("is-active-scroll")});
//# sourceMappingURL=index.js.map
