import{H as C,T as M,M as S,a as T}from"./components.24796402.js";import{_ as y,o as n,c as a,a as r,t as p,h as c,F as l,r as u,b as i,w as m,n as k,T as d,d as E}from"./entry.d5b7ad19.js";import{c as B}from"./cacheControl.f3c972ee.js";const D={name:"card",props:["name","image_link","role","nickname"],data(){return{getImage:()=>`${this.image_link}`}}},H={class:"card"},R=["src","alt"],A={class:"name"},F={key:0,class:"nickname"},N={class:"role"},V={key:0};function W(h,s,t,b,o,v){return n(),a("div",H,[r("img",{class:"member-img",src:o.getImage(),alt:t.name,loading:"lazy"},null,8,R),r("span",A,p(t.name),1),t.nickname?(n(),a("span",F,p(t.nickname),1)):c("",!0),t.role?(n(!0),a(l,{key:1},u(String(t.role).split("&"),_=>(n(),a("div",N,[_.trim()?(n(),a("span",V,p(_),1)):c("",!0)]))),256)):c("",!0)])}const j=y(D,[["render",W]]),I=[{role:"Binary Exploitation & Cryptography",image_name:"roopak.webp",name:"Roopak Suresh",nickname:"Hackkery"},{role:"Cryptography & Forensics",image_name:"nitro.webp",name:"Shyam Sunder S",nickname:"Nitr0"},{role:"Reverse Engineering & Web Exploitation",image_name:"vigneshwaran.webp",name:"Vigneshwaran",nickname:"dote"},{role:"OSINT & Forensics",image_name:"tasarmays.webp",name:"Shyam Prasath S",nickname:"tasarmays"},{role:"Web Exploitation & Binary Exploitation",image_name:"kadhir.webp",name:"Kadhirravan R",nickname:"Apollo"},{role:"Cryptography & Forensics",image_name:"brijesh.webp",name:"Brijesharun G",nickname:"brij"},{role:"Cryptography",image_name:"kudiyarasu.webp",name:"Kudiyarasu Renganathan G"},{role:"Mentor",image_name:"harini.webp",name:"Harini Mohan",nickname:"Gro0t"}],P=[{role:"Web Exploitation",image_url:"abhi.webp",name:"Abhisek",nickname:"hexkn1ght"},{role:"Binary Exploitation & Reverse Engineering",image_url:"raghul.webp",name:"Raghul P S",nickname:"Antidote"},{role:"Cryptography",image_url:"sowmya.webp",name:"Sowmya",nickname:"NEWT"},{role:"Reverse Engineering",image_url:"tharik.webp",name:"Tharik Sherief",nickname:"Strikerrrocker"},{role:"Web Exploitation",image_url:"Abdul.webp",name:"Abdul Haq",nickname:"Mr.T!T@N"},{role:"Forensics",image_url:"vishnu.webp",name:"Vishnu vardan",nickname:"Hecker"},{role:"Web Exploitation & Cryptography",image_url:"arun.webp",name:"Arun Balaji B",nickname:"4ruN"},{role:"Reverse Engineering & Binary Exploitation ",image_url:"lakshmesh.webp",name:"Lakshmesh",nickname:"L4k5h"},{role:"Reverse Engineering & Cryptography",image_url:"p3rplex3d.webp",name:"Shwetha S",nickname:"p3rplex3d"},{role:"Reverse Engineering",image_url:"arka.webp",name:"Arka",nickname:"ghost"},{role:"Web Exploitation",image_url:"achuthan.webp",name:"Achuthan B",nickname:"Pointbreak"},{role:"Forensics",image_url:"pritham.webp",name:"Pritham",nickname:"OwlH4x"},{role:"Cryptography",image_url:"sivasurya.webp",name:"Sivasurya",nickname:"Dopecat"}],G=[{image_name:"shankar_sriram_sir.webp",name:"Dr. Shankar Sriram V S"},{image_name:"mahto-sir.webp",name:"Dr. Dindayal Mahto"}];const L={name:"Home",data(){return{showMentors:!0,mentorsData:I,coreTeamData:P,facultyData:G}},middleware:B()},$={class:"members"},z={class:"mentors-nav"},K=r("span",null,"|",-1),O={key:0},q=r("div",{class:"smooth-nav"},"Faculty Advisors",-1),J={class:"holder-faculty"},Q={key:"data.name"},U=r("div",{class:"smooth-nav"},"Core Team Members",-1),X={class:"holder"},Y={key:"data.name"},Z={key:0,class:"holder"},ee={key:"data.name"};function ne(h,s,t,b,o,v){const _=M,w=S,f=T,x=C,g=j;return n(),a(l,null,[i(x,null,{default:m(()=>[i(f,null,{default:m(()=>[i(_,null,{default:m(()=>[E("Team 1nf1n1ty Members")]),_:1}),i(w,{name:"description",content:"Team 1nf1n1ty is a CTF team"})]),_:1})]),_:1}),r("div",$,[r("div",z,[r("span",{class:k(["navigator unselectable",{"active-nav-change":o.showMentors}]),onClick:s[0]||(s[0]=e=>o.showMentors=!0)},"Core Members",2),K,r("span",{class:k(["navigator unselectable",{"active-nav-change":!o.showMentors}]),onClick:s[1]||(s[1]=e=>o.showMentors=!1)},"Team Mentors",2)]),r("div",null,[i(d,{name:"smooth-nav"},{default:m(()=>[o.showMentors?(n(),a("div",O,[q,r("div",J,[(n(!0),a(l,null,u(o.facultyData,e=>(n(),a("div",Q,[i(g,{name:e.name,role:e.role,image_link:e.image_name},null,8,["name","role","image_link"])]))),128))]),U,r("div",X,[(n(!0),a(l,null,u(o.coreTeamData,e=>(n(),a("div",Y,[i(g,{name:e.name,role:e.role,image_link:e.image_url,nickname:e.nickname},null,8,["name","role","image_link","nickname"])]))),128))])])):c("",!0)]),_:1}),i(d,{name:"smooth-nav-core"},{default:m(()=>[o.showMentors?c("",!0):(n(),a("div",Z,[(n(!0),a(l,null,u(o.mentorsData,e=>(n(),a("div",ee,[i(g,{name:e.name,nickname:e.nickname,role:e.role,image_link:e.image_name},null,8,["name","nickname","role","image_link"])]))),128))]))]),_:1})])])],64)}const ie=y(L,[["render",ne]]);export{ie as default};
