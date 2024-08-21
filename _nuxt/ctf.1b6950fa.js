import{_,o as a,c as l,t as d,a as s,n as h,g as f,h as m,d as u,i as g}from"./entry.74a6a42f.js";const T={props:{targetDate:{type:Date,required:!0},endMessage:{type:String,default:"CTF has started!!"},onEnd:{type:Function,default:()=>{}}},data(){return{timeLeft:{total:0,days:0,hours:0,minutes:0,seconds:0}}},computed:{formattedTime(){const{days:n,hours:o,minutes:t,seconds:r}=this.timeLeft;return`${n}d ${o}h ${t}m ${r}s`}},mounted(){this.calculateTimeLeft(),this.startCountdown()},methods:{calculateTimeLeft(){const n=new Date().getTime(),t=new Date(this.targetDate).getTime()-n;t>0?(this.timeLeft.total=t,this.timeLeft.days=Math.floor(t/(1e3*60*60*24)),this.timeLeft.hours=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),this.timeLeft.minutes=Math.floor(t%(1e3*60*60)/(1e3*60)),this.timeLeft.seconds=Math.floor(t%(1e3*60)/1e3)):this.timeLeft.total=0},startCountdown(){this.interval=setInterval(()=>{this.calculateTimeLeft(),this.timeLeft.total<=0&&(clearInterval(this.interval),this.onEnd())},1e3)}},beforeDestroy(){clearInterval(this.interval)}},y={class:"timer"},v={key:0},C={key:1};function D(n,o,t,r,e,i){return a(),l("div",y,[e.timeLeft.total>0?(a(),l("p",v,d(i.formattedTime),1)):(a(),l("p",C,d(t.endMessage),1))])}const p=_(T,[["render",D],["__scopeId","data-v-c49d0200"]]),F=""+globalThis.__publicAssetsURL("images/1nf1n1ty.webp");const b={components:{Countdown:p},data(){return{targetDate:new Date("2024-10-05T11:00:00+05:30"),CTFEndDate:new Date("2024-10-06T11:00:00+05:30"),ctfStarted:!1,ctfEnded:!1}},methods:{handleCTFstart(){this.ctfStarted=!0},handleCTFend(){this.ctfEnded=!0}}},E={class:"eventcontainer"},L=s("div",{class:"main"},[s("h1",{class:"heading"},"Welcome to 1nf1n1ty CTF 2024"),s("img",{class:"imgCenter",src:F,alt:"Logo"})],-1),k=s("p",{class:"info"},[u(" Team 1nf1n1ty from SASTRA Deemed to be university invites all hackers, enthusiasts to participate in the "),s("b",null,"1nf1n1ty CTF 2024"),u(" ! This is a 24-Hours Jeopardy-style Capture The Flag competition will challenge your skills across multiple categories including Web Exploitation, Reverse Engineering, Binary Exploitation, Cryptography, Forensics, Game Hacking, Android Hacking, OSINT and more. ")],-1),w={class:"countdown-flex"},S=g('<div class="buttons-stack"><a target="_blank" href="https://ctf.1nf1n1ty.team/register" class="center"><button class="btn-nav large"> Register For CTF ➜ </button></a><a target="_blank" href="https://discord.gg/e6yRKphmuU" class="center"><button class="btn-nav large"> CTF Discord ➜ </button></a></div><h3 class="smallheading">Details</h3><p class="info"><li class="info"> Date: October 5th, 2024 </li><li class="info"> Duration: 24 hours </li><li class="info"> Format: Jeopardy style </li><li class="info"> Location: Online </li><li class="info"> Team Size: Up to 4 players </li></p><h3 class="smallheading">Rules</h3><p class="info"> TBA </p><h3 class="smallheading">Prizes</h3><p class="info"> TBA </p><h3 class="smallheading">Sponsors</h3><p class="info">TBA</p>',9);function x(n,o,t,r,e,i){const c=p;return a(),l("main",E,[L,k,s("div",w,[s("span",{class:h({small:e.ctfEnded})},[e.ctfStarted?(a(),f(c,{key:0,targetDate:e.CTFEndDate,endMessage:"The CTF is over.",onEnd:i.handleCTFend},null,8,["targetDate","onEnd"])):m("",!0)],2),s("span",{class:h({small:e.ctfStarted})},[e.ctfEnded?m("",!0):(a(),f(c,{key:0,targetDate:e.targetDate,endMessage:"CTF has started!",onEnd:i.handleCTFstart},null,8,["targetDate","onEnd"]))],2)]),S])}const M=_(b,[["render",x]]);export{M as default};
