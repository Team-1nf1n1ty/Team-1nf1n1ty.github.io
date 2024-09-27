import{_ as m,c as l,b as f,w as T,a as e,n as r,g as n,i as c,F as h,r as _,j as d,T as y,o as a,d as v}from"./entry.7ca69ddb.js";import{_ as g,s as F,a as C}from"./sponcers.e78a9ebb.js";const b=""+globalThis.__publicAssetsURL("images/ironCTF.webp");const w={components:{Countdown:g},data(){return{targetDate:new Date("2024-10-05T11:00:00+05:30"),CTFEndDate:new Date("2024-10-06T11:00:00+05:30"),ctfStarted:!1,ctfEnded:!1,sponcers:F}},methods:{handleCTFstart(){this.ctfStarted=!0},handleCTFend(){this.ctfEnded=!0}}},D={class:"eventcontainer"},k=e("div",{class:"main"},[e("h1",{class:"heading"},"Welcome to the First Edition of IRON CTF!"),e("img",{class:"imgCenter",src:b,alt:"Logo"})],-1),S={class:"countdown-flex"},E=d('<div class="buttons-stack"><a target="_blank" href="https://ctf.1nf1n1ty.team/register" class="center"><button class="btn-nav large"> Register For CTF ➜ </button></a><a target="_blank" href="https://ctftime.org/event/2497" class="center"><button class="btn-nav large"> CTFtime ➜ </button></a></div><p class="info para">Team 1nf1n1ty from SASTRA Deemed University is excited to invite you to our first IRON CTF (Intrusion Reconnaissance and Offensive Navigation Capture The Flag). Whether you&#39;re a first time participant or a seasoned hacker, this jeopardy-style CTF promises to challenge and excite. </p><p class="info para"> Test your skills in categories like Web Exploitation, Cryptography, Reverse Engineering, PWN, OSINT, Forensics, Mobile Security, Game Hacking, and more. The event is open to all, so don&#39;t miss the chance to prove your mettle and connect with like-minded enthusiasts. </p><p class="info para center bold"> Join us for an unforgettable experience we can&#39;t wait to see you in action! </p><section><h3 class="smallheading">Details</h3><p class="info"><li class="info"> Duration: 24 hours </li><li class="info"> Format: Jeopardy style </li><li class="info"> Mode: Online </li><li class="info"> Team Size: Up to 4 players </li><li class="info"> Start Time: Oct 5th 2024 11:00AM IST </li><li class="info"> End Time: Oct 6th 2024 11:00AM IST </li></p></section>',5),x=e("h3",{class:"smallheading"},"Sponsors",-1),N={class:"sponcer-holder"},R=d('<section><h3 class="smallheading">Rules</h3><div class="info"><p>Welcome to the IRON CTF! To ensure a fair and enjoyable experience for everyone, please carefully read and follow these rules:</p><span><h2>1. Team Composition:</h2><li class="rule">Each team is limited to a maximum of 4 members.</li><li class="rule">Teams must provide a valid email address, which will serve as the primary point of contact. </li></span><span><h2>2. Fair Play:</h2><li class="rule"><strong>No attacks on CTF infrastructure.</strong> Do not attempt any Denial of Service (DoS), Distributed Denial of Service (DDoS), automated scanning, or generating excessive traffic on any challenges or contest infrastructure.</li><li class="rule"><strong>Prohibited Tools:</strong> The use of automated tools such as <strong>Nikto</strong>, <strong>Zap</strong>, <strong>SQLmap</strong>, or similar tools is strictly forbidden. These tools are ineffective for this CTF and could result in a ban. </li></span><span><h2>3. Flag Sharing and Discussion:</h2><li class="rule"><strong>No sharing of flags or solutions</strong> during the CTF. This ensures everyone can enjoy the challenges.</li><li class="rule"><strong>No discussions</strong> about solutions or hints that could help others solve a challenge.</li></span><span><h2>4. Scoring and Ties:</h2><li class="rule">Each challenge uses <strong>dynamic scoring</strong>, meaning the points awarded will vary based on how many teams solve the challenge.</li><li class="rule">Points are awarded upon successfully submitting the correct flag.</li><li class="rule"><strong>In the event of a tie, the scoreboard is final.</strong></li></span><span><h2>5. Final Decision and Disqualification:</h2><li class="rule">The organizers decisions are final in all matters related to the CTF.</li><li class="rule">Organizers reserve the right to disqualify any team for violating the rules or engaging in prohibited activities.</li></span><span><h2>6. Communication and Updates:</h2><li class="rule">For any queries, join our <a href="https://discord.gg/e6yRKphmuU">Discord server</a>. CTF organizers and challenge authors will be highlighted on Discord.</li><li class="rule">All updates will be posted on the CTF portal&#39;s Announcements page, on <a href="https://discord.gg/e6yRKphmuU">Discord</a>, and on our <a href="https://www.instagram.com/team_1nf1n1ty/">Instagram</a>.</li><li class="rule">Hints (if released) will be posted on the Announcements page or in the challenge description.</li></span><span><h2>7. Flag Format:</h2><li class="rule">Unless stated otherwise, flags will follow the format: <strong>ironCTF{...}</strong>. </li></span><span><h2>8. Acknowledgment:</h2><li class="rule">By participating in the contest, you agree to have read and fully adhere to these rules. </li></span><p class="info">Thank you for taking the time to read through the rules. Happy hacking!</p></div></section><h3 class="smallheading">Prizes</h3><p class="info"> TBA </p>',3);function A(I,O,U,z,s,o){const u=y,i=g,p=C;return a(),l(h,null,[f(u,null,{default:T(()=>[v("IRON CTF 2024")]),_:1}),e("main",D,[k,e("div",S,[e("span",{class:r({small:s.ctfEnded})},[s.ctfStarted?(a(),n(i,{key:0,targetDate:s.CTFEndDate,endMessage:"The CTF is over.",onEnd:o.handleCTFend},null,8,["targetDate","onEnd"])):c("",!0)],2),e("span",{class:r({small:s.ctfStarted})},[s.ctfEnded?c("",!0):(a(),n(i,{key:0,targetDate:s.targetDate,endMessage:"CTF has started!",onEnd:o.handleCTFstart},null,8,["targetDate","onEnd"]))],2)]),E,e("section",null,[x,e("div",N,[(a(!0),l(h,null,_(s.sponcers.sponcers,t=>(a(),n(p,{data:t.description,name:t.name,image:t.image,key:s.sponcers.name,tag:t.tag,tagtype:t.tagtype,link:t.link},null,8,["data","name","image","tag","tagtype","link"]))),128))])]),R])],64)}const j=m(w,[["render",A]]);export{j as default};
