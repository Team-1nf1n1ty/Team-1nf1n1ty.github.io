import{_ as g,o as i,c as a,t as n,a as o,n as l,i as h}from"./entry.71e6ab5a.js";const u={props:{targetDate:{type:Date,required:!0},endMessage:{type:String,default:"CTF has started!!"},onEnd:{type:Function,default:()=>{}}},data(){return{timeLeft:{total:0,days:0,hours:0,minutes:0,seconds:0}}},computed:{formattedTime(){const{days:t,hours:s,minutes:e,seconds:c}=this.timeLeft;return`${t}d ${s}h ${e}m ${c}s`}},mounted(){this.calculateTimeLeft(),this.startCountdown()},methods:{calculateTimeLeft(){const t=new Date().getTime(),e=new Date(this.targetDate).getTime()-t;e>0?(this.timeLeft.total=e,this.timeLeft.days=Math.floor(e/(1e3*60*60*24)),this.timeLeft.hours=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),this.timeLeft.minutes=Math.floor(e%(1e3*60*60)/(1e3*60)),this.timeLeft.seconds=Math.floor(e%(1e3*60)/1e3)):this.timeLeft.total=0},startCountdown(){this.interval=setInterval(()=>{this.calculateTimeLeft(),this.timeLeft.total<=0&&(clearInterval(this.interval),this.onEnd())},1e3)}},beforeDestroy(){clearInterval(this.interval)}},m={class:"timer"},f={key:0},p={key:1};function y(t,s,e,c,r,d){return i(),a("div",m,[r.timeLeft.total>0?(i(),a("p",f,n(d.formattedTime),1)):(i(),a("p",p,n(e.endMessage),1))])}const L=g(u,[["render",y],["__scopeId","data-v-c49d0200"]]);const _={name:"card",props:["name","image","data","tag","link","tagtype"],data(){return{getImage:()=>`${this.image}`,getLink:()=>`${this.link}`}}},v=["href"],w={class:"sponsor-card"},b=["src","alt"],k={class:"sponsor-name"},T={class:"description"};function S(t,s,e,c,r,d){return i(),a("a",{target:"_blank",href:r.getLink()},[o("div",w,[e.tag?(i(),a("span",{key:0,class:l(["tag",e.tagtype=="green"?"tag-green":""|e.tagtype=="gold"?"tag-gold":""|e.tagtype=="sqrx"?"tag-sqrx":""|e.tagtype=="silver"?"silver":""|e.tagtype=="domain"?"domain":""])},n(e.tag),3)):h("",!0),o("img",{class:l([e.tagtype=="green"?"sify":""|e.tagtype=="silver"?"offsec":"","sponsor-img"]),src:r.getImage(),alt:e.name,loading:"lazy"},null,10,b),o("span",k,n(e.name),1),o("span",T,n(e.data),1)])],8,v)}const I=g(_,[["render",S]]),x=[{image:"/images/sastra.webp",description:"SASTRA Deemed University stands out for its strong focus on cybersecurity education, offering B.Tech and M.Tech programs designed to tackle modern challenges in the field. Equipped with advanced labs, cutting-edge research, and a curriculum aligned with industry needs, SASTRA ensures students gain both theoretical knowledge and practical skills. With expert faculty and robust industry partnerships, the university provides a comprehensive education that prepares students for successful careers in cybersecurity.",tag:"Academic Partner",link:"https://sastra.edu/"},{image:"/images/Ec_Council.webp",description:"EC-Council is the leading certification body in the cybersecurity field, known for its expertise in various domains of information security. Notably, they offer widely respected certifications such as Certified Ethical Hacker (CEH) , Certified Penetration Testing Professional (CPENT) and much more. Their programs have significantly contributed to the careers of numerous cybersecurity professionals, equipping them with essential skills and knowledge for success in the industry.",tag:"Golden Sponsor",link:"https://www.eccouncil.org/",tagtype:"gold"},{image:"/images/offsec.webp",description:"OffSec is the leading provider of cybersecurity training, empowering individuals and organizations to fight cyber threats with indispensable cybersecurity skills and resources.It offers a wide range of written content, videos, and hands-on exercises, tailored to meet the needs of learners at all skill levels. With over 4,000 hands-on labs, learners can practice and develop their skills, making them more prepared for a cyber attack in the real world.",tag:"Silver Sponsor",link:"https://www.offsec.com/",tagtype:"silver"},{image:"/images/alteredsecurity.webp",description:"Altered Security is an edtech company focused on hands-on learning through its red team training platform and cyber ranges. They are experts in red team training, InfoSec education, and cyber ranges. They pioneered affordable red team labs and have trained over 25,000 information security professionals from more than 130 countries around the globe through their in-person and online training programs. Their hands-on certifications are industry-recognized and highly sought after by professionals and organizations looking to demonstrate skills.",tag:"Silver Sponsor",link:"https://alteredsecurity.com/",tagtype:"silver"},{image:"/images/Sifylogo.webp",description:"Sify Technologies, a Fortune 500 company, is the largest ICT service and solutions provider in India. Committed to innovation, Sify addresses the evolving ICT needs of businesses across all sectors. They offer a wide range of services, including cloud solutions, cybersecurity, and data center management, empowering organizations to enhance efficiency and remain competitive in today’s digital landscape.",tag:"Platform Partner",link:"https://www.sifytechnologies.com/",tagtype:"green"},{image:"/images/sqrx.webp",description:"SquareX (SQRX) is a cybersecurity platform focused on protecting users from web-based threats like malware and phishing attacks. It offers features such as disposable browsing, file isolation, and attack visualization, helping users interact safely with potentially harmful content. Using AI-driven threat detection, SquareX ensures secure browsing without complex solutions. The top 10 teams from India will receive exclusive swag and goodies from SquareX!",tag:"Browser Security Partner",link:"https://sqrx.com/",tagtype:"sqrx"}],q={sponcers:x};export{L as _,I as a,q as s};
