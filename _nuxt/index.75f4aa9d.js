import{H as b,T as v,M as $,a as x}from"./components.3e55dd98.js";import{_ as r,o as i,c as o,a as t,F as u,g as k,r as T,b as n,w as l,e as C,d as H}from"./entry.593c9321.js";import{c as S}from"./cacheControl.f3c972ee.js";const F={name:"HeroSection",data(){return{logo_:"/images/1nf1n1ty.webp",pointer:"/images/pointer.webp"}}},z=t("div",{class:"hero-section"},[t("h1",{class:"main-heading"},"Welcome to Team 1nf1n1ty"),t("span",{class:"sub-heading"},"the cyber security club of SASTRA University")],-1),M={class:"intro"},N={class:"img-group"},W={href:"https://ctftime.org/team/151859",target:"_blank"},G=["src"],V=["src"];function B(a,c,_,d,e,m){return i(),o(u,null,[z,t("div",M,[t("div",N,[t("a",W,[t("img",{loading:"lazy",class:"pointer undraggable",alt:"1nf1n1ty pointer",src:e.pointer},null,8,G),t("img",{loading:"lazy",sizes:"md:250px lg:500px",class:"team-logo undraggable",alt:"1nf1n1ty logo",src:e.logo_},null,8,V)])])])],64)}const A=r(F,[["render",B]]);const I={name:"Content"},L={class:"details"},j=k('<div id="about"><article><span class="balck-text">We strive for improvements in research and innovation in the field of cyber security </span> We also actively work on teaching, scientific dissemination, and knowledge transfer to society. </article></div><div class="stats-section"><article> Team 1nf1n1ty, <span class="balck-text">currently ranked 6th in India,</span> are a group of cybersecurity enthusiasts <span class="balck-text">proficient in various domains across CTF.</span> We&#39;re rapidly growing team that also posts write ups that help the CTF community as well as beginners who are passionate about cyber security. </article></div>',2),D=[j];function E(a,c,_,d,e,m){return i(),o("div",L,D)}const J=r(I,[["render",E]]),R=[{link:"https://www.instagram.com/team_1nf1n1ty/?hl=en",img:"/images/instagram.webp",alt:"1nf1n1ty (infinity) instragram"},{link:"https://twitter.com/team_1nf1n1ty",img:"/images/twitter.webp",alt:"1nf1n1ty (infinity) twitter handel"},{link:"https://medium.com/@teaminfinity",img:"/images/medium.webp",alt:"1nf1n1ty (infinity) medium blog"},{link:"https://www.linkedin.com/company/1nf1n1ty/",img:"/images/linkedin.webp",alt:"1nf1n1ty (infinity) linkedin page"},{link:"https://discord.gg/74h9nnGFGM",img:"/images/discord.webp",alt:"1nf1n1ty (infinity) discord server"}];const U={name:"Socials",data(){return{socials:R}}},q={class:"socials"},K=t("h1",null,"Connect with us at",-1),O={class:"social-links"},P=["href"],Q=["src","alt"],X=t("span",{class:"underline intraction"},[t("a",{href:"https://discord.gg/74h9nnGFGM"},"Interact with the community")],-1),Y={id:"contact",class:"contact-us"},Z=t("h1",null,"Connect with us!",-1),tt=t("a",{href:"mailto:core@1nf1n1ty.team"},[t("button",{class:"btn-pink"},"Write to us")],-1),nt=t("button",{class:"btn-pink"},"Join 1nf1n1ty",-1);function et(a,c,_,d,e,m){const p=C;return i(),o("div",null,[t("div",q,[t("section",null,[K,t("div",O,[(i(!0),o(u,null,T(e.socials,s=>(i(),o("a",{target:"_blank",href:s.link},[t("img",{loading:"lazy",sizes:"sm:36px md:64px lg:100px",class:"img-padding",src:s.img,alt:s.alt},null,8,Q)],8,P))),256))]),X])]),t("div",Y,[t("section",null,[Z,t("span",null,[tt,n(p,{to:"/join"},{default:l(()=>[nt]),_:1})])])])])}const st=r(U,[["render",et]]),it={name:"Home",middleware:S()};function ot(a,c,_,d,e,m){const p=v,s=$,h=x,g=b,f=A,y=J,w=st;return i(),o(u,null,[n(g,null,{default:l(()=>[n(h,null,{default:l(()=>[n(p,null,{default:l(()=>[H("Team 1nf1n1ty")]),_:1}),n(s,{name:"description",content:"Team 1nf1n1ty is a CTF team"}),n(s,{name:"viewport",content:"width=device-width, initial-scale=1.0"})]),_:1})]),_:1}),t("div",null,[n(f),n(y),n(w)])],64)}const rt=r(it,[["render",ot]]);export{rt as default};
