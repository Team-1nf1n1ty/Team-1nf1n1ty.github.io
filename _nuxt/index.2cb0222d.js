import{_ as l,o,c as i,a as t,F as u,j as w,r as b,b as n,w as r,e as $,H as x,d as k,T,M as C,h as H}from"./entry.ea928099.js";import{c as S}from"./cacheControl.f3c972ee.js";const F={name:"HeroSection",data(){return{logo_:"/images/1nf1n1ty.webp",pointer:"/images/pointer.webp"}}},z=t("div",{class:"hero-section"},[t("h1",{class:"main-heading"},"Welcome to Team 1nf1n1ty"),t("span",{class:"sub-heading"},"The cybersecurity club of SASTRA University")],-1),M={class:"intro"},N={class:"img-group"},G={href:"https://ctftime.org/team/151859",target:"_blank"},V=["src"],W=["src"];function A(a,c,_,d,e,p){return o(),i(u,null,[z,t("div",M,[t("div",N,[t("a",G,[t("img",{loading:"lazy",class:"pointer undraggable",alt:"1nf1n1ty pointer",src:e.pointer},null,8,V),t("img",{loading:"lazy",sizes:"md:250px lg:500px",class:"team-logo undraggable",alt:"1nf1n1ty logo",src:e.logo_},null,8,W)])])])],64)}const B=l(F,[["render",A]]);const j={name:"Content"},E={class:"details"},I=w('<div id="about"><article><p class="balck-text">We strive for improvements in research and innovation in the field of cybersecurity. </p> We also actively work on teaching, scientific dissemination, and knowledge transfer to society. </article></div><div class="stats-section"><article> Team 1nf1n1ty, <span class="balck-text">currently ranked 5th in India,</span> is a group of cybersecurity enthusiasts <span class="balck-text">proficient in various domains in CTFs.</span><br>A rapidly growing team that also posts write-ups that help the CTF community as well as beginners who are passionate about cybersecurity. </article></div>',2),L=[I];function q(a,c,_,d,e,p){return o(),i("div",E,L)}const D=l(j,[["render",q]]),J=[{link:"https://www.instagram.com/team_1nf1n1ty/?hl=en",img:"/images/instagram.webp",alt:"1nf1n1ty (infinity) instragram"},{link:"https://twitter.com/team_1nf1n1ty",img:"/images/twitter.webp",alt:"1nf1n1ty (infinity) twitter handel"},{link:"https://www.linkedin.com/company/1nf1n1ty/",img:"/images/linkedin.webp",alt:"1nf1n1ty (infinity) linkedin page"},{link:"https://discord.gg/74h9nnGFGM",img:"/images/discord.webp",alt:"1nf1n1ty (infinity) discord server"}];const R={name:"Socials",data(){return{socials:J}}},U={class:"socials"},K=t("h1",null,"Connect with us at",-1),O={class:"social-links"},P=["href"],Q=["src","alt"],X=t("span",{class:"underline intraction"},[t("a",{href:"https://discord.gg/74h9nnGFGM"},"Interact with the community")],-1),Y={id:"contact",class:"contact-us"},Z=t("h1",null,"Contact us!",-1),tt=t("a",{href:"mailto:core@1nf1n1ty.team"},[t("button",{class:"btn-pink"},"Write to us")],-1),nt=t("button",{class:"btn-pink"},"Join 1nf1n1ty",-1);function et(a,c,_,d,e,p){const m=$;return o(),i("div",null,[t("div",U,[t("section",null,[K,t("div",O,[(o(!0),i(u,null,b(e.socials,s=>(o(),i("a",{target:"_blank",href:s.link},[t("img",{loading:"lazy",sizes:"sm:36px md:64px lg:100px",class:"img-padding",src:s.img,alt:s.alt},null,8,Q)],8,P))),256))]),X])]),t("div",Y,[t("section",null,[Z,t("span",null,[tt,n(m,{to:"/join"},{default:r(()=>[nt]),_:1})])])])])}const st=l(R,[["render",et]]),ot={head(){return{meta:[{hid:"redirect",httpEquiv:"refresh",content:"5; url=https://ctf.1nf1n1ty.team/"}]}},name:"Home",middleware:S()};function it(a,c,_,d,e,p){const m=T,s=C,h=H,f=x,g=B,y=D,v=st;return o(),i(u,null,[n(f,null,{default:r(()=>[n(h,null,{default:r(()=>[n(m,null,{default:r(()=>[k("Team 1nf1n1ty")]),_:1}),n(s,{name:"description",content:"Team 1nf1n1ty is a CTF team"}),n(s,{name:"viewport",content:"width=device-width, initial-scale=1.0"})]),_:1})]),_:1}),t("div",null,[n(g),n(y),n(v)])],64)}const rt=l(ot,[["render",it]]);export{rt as default};
