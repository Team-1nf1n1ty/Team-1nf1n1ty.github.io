import{_ as l,o as a,c as n,t as i,a as r,n as u,i as g}from"./entry.647e23ab.js";const h={props:{targetDate:{type:Date,required:!0},endMessage:{type:String,default:"CTF has started!!"},onEnd:{type:Function,default:()=>{}}},data(){return{timeLeft:{total:0,days:0,hours:0,minutes:0,seconds:0}}},computed:{formattedTime(){const{days:t,hours:s,minutes:e,seconds:c}=this.timeLeft;return`${t}d ${s}h ${e}m ${c}s`}},mounted(){this.calculateTimeLeft(),this.startCountdown()},methods:{calculateTimeLeft(){const t=new Date().getTime(),e=new Date(this.targetDate).getTime()-t;e>0?(this.timeLeft.total=e,this.timeLeft.days=Math.floor(e/(1e3*60*60*24)),this.timeLeft.hours=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),this.timeLeft.minutes=Math.floor(e%(1e3*60*60)/(1e3*60)),this.timeLeft.seconds=Math.floor(e%(1e3*60)/1e3)):this.timeLeft.total=0},startCountdown(){this.interval=setInterval(()=>{this.calculateTimeLeft(),this.timeLeft.total<=0&&(clearInterval(this.interval),this.onEnd())},1e3)}},beforeDestroy(){clearInterval(this.interval)}},m={class:"timer"},_={key:0},p={key:1};function f(t,s,e,c,o,d){return a(),n("div",m,[o.timeLeft.total>0?(a(),n("p",_,i(d.formattedTime),1)):(a(),n("p",p,i(e.endMessage),1))])}const $=l(h,[["render",f],["__scopeId","data-v-c49d0200"]]);const y={name:"card",props:["name","image","data","tag","link","tagtype"],data(){return{getImage:()=>`${this.image}`,getLink:()=>`${this.link}`}}},k=["href"],v={class:"sponsor-card"},w=["src","alt"],L={class:"sponsor-name"},b={class:"description"};function T(t,s,e,c,o,d){return a(),n("a",{target:"_blank",href:o.getLink()},[r("div",v,[e.tag?(a(),n("span",{key:0,class:u(["tag",e.tagtype=="gold"?"tag-gold":""])},i(e.tag),3)):g("",!0),r("img",{class:"sponsor-img",src:o.getImage(),alt:e.name,loading:"lazy"},null,8,w),r("span",L,i(e.name),1),r("span",b,i(e.data),1)])],8,k)}const D=l(y,[["render",T]]),C=[{image:"/images/sastra.webp",description:"SASTRA Deemed University stands out for its strong focus on cybersecurity education, offering B.Tech and M.Tech programs designed to tackle modern challenges in the field. Equipped with advanced labs, cutting-edge research, and a curriculum aligned with industry needs, SASTRA ensures students gain both theoretical knowledge and practical skills. With expert faculty and robust industry partnerships, the university provides a comprehensive education that prepares students for successful careers in cybersecurity.",tag:"Academic Partner",link:"https://sastra.edu/"},{image:"/images/Ec_Council.webp",description:"EC-Council is a globally recognized leader in cybersecurity certification, training, and education. Best known for their flagship certification, Certified Ethical Hacker (CEH), they provide industry-leading programs that equip individuals and organizations with the skills needed to tackle today's cybersecurity challenges. Trusted by governments, corporations, and learning institutions worldwide, making them a trusted partner for cybersecurity professionals across the globe.",tag:"Golden Sponsor",link:"https://www.eccouncil.org/",tagtype:"gold"}],E={sponcers:C};export{$ as _,D as a,E as s};
