import{_ as d,s as u,a as p}from"./sponcers.a5956218.js";import{_ as m,c as r,a as t,n as c,g as n,i as h,F as f,r as _,j as o,o as a}from"./entry.ac641836.js";const y=""+globalThis.__publicAssetsURL("images/1nf1n1ty.webp");const T={components:{Countdown:d},data(){return{targetDate:new Date("2024-10-05T11:00:00+05:30"),CTFEndDate:new Date("2024-10-06T11:00:00+05:30"),ctfStarted:!1,ctfEnded:!1,sponcers:u}},methods:{handleCTFstart(){this.ctfStarted=!0},handleCTFend(){this.ctfEnded=!0}}},v={class:"eventcontainer"},F=o('<div class="main"><h1 class="heading">Welcome to the First Edition of IRON CTF!</h1><img class="imgCenter" src="'+y+'" alt="Logo"></div><p class="info para">Team 1nf1n1ty from SASTRA Deemed University is excited to invite you to our first IRON CTF (Intrusion Reconnaissance and Offensive Navigation Capture The Flag). Whether you&#39;re a first time participant or a seasoned hacker, this jeopardy-style CTF promises to challenge and excite. </p><p class="info para"> Test your skills in categories like Web Exploitation, Cryptography, Reverse Engineering, PWN, OSINT, Forensics, Mobile Security, Game Hacking, and more. The event is open to all, so don&#39;t miss the chance to prove your mettle and connect with like-minded enthusiasts. </p><p class="info para center bold"> Join us for an unforgettable experience we can&#39;t wait to see you in action! </p>',4),b={class:"countdown-flex"},C=o('<div class="buttons-stack"><a target="_blank" href="https://ctf.1nf1n1ty.team/register" class="center"><button class="btn-nav large"> Register For CTF ➜ </button></a><a target="_blank" href="https://discord.gg/e6yRKphmuU" class="center"><button class="btn-nav large"> CTF Discord ➜ </button></a><a target="_blank" href="https://ctftime.org/team/151859" class="center"><button class="btn-nav large"> CTFtime ➜ </button></a></div><section><h3 class="smallheading">Details</h3><p class="info"><li class="info"> Duration: 24 hours </li><li class="info"> Format: Jeopardy style </li><li class="info"> Mode: Online </li><li class="info"> Team Size: Up to 4 players </li><li class="info"> Start Time: Oct 5th 2024 11:00AM IST </li><li class="info"> End Time: Oct 6th 2024 11:00AM IST </li></p></section>',2),D=t("h3",{class:"smallheading"},"Sponsors",-1),w={class:"sponcer-holder"},k=o('<section><h3 class="smallheading">Rules</h3><div class="info"><p>Welcome to the IRON CTF! To ensure a fair and enjoyable experience for everyone, please carefully read and follow these rules:</p><span><h2>1. Team Composition:</h2><li class="rule">Each team is limited to a maximum of 4 members.</li><li class="rule">Teams must provide a valid email address, which will serve as the primary point of contact. </li></span><span><h2>2. Fair Play:</h2><li class="rule"><strong>No attacks on CTF infrastructure.</strong> Do not attempt any Denial of Service (DoS), Distributed Denial of Service (DDoS), automated scanning, or generating excessive traffic on any challenges or contest infrastructure.</li><li class="rule"><strong>Prohibited Tools:</strong> The use of automated tools such as <strong>Nikto</strong>, <strong>Zap</strong>, <strong>SQLmap</strong>, or similar tools is strictly forbidden. These tools are ineffective for this CTF and could result in a ban. </li></span><span><h2>3. Flag Sharing and Discussion:</h2><li class="rule"><strong>No sharing of flags or solutions</strong> during the CTF. This ensures everyone can enjoy the challenges.</li><li class="rule"><strong>No discussions</strong> about solutions or hints that could help others solve a challenge.</li></span><span><h2>4. Scoring and Ties:</h2><li class="rule">Each challenge uses <strong>dynamic scoring</strong>, meaning the points awarded will vary based on how many teams solve the challenge.</li><li class="rule">Points are awarded upon successfully submitting the correct flag.</li><li class="rule"><strong>In the event of a tie, the scoreboard is final.</strong></li></span><span><h2>5. Final Decision and Disqualification:</h2><li class="rule">The organizers decisions are final in all matters related to the CTF.</li><li class="rule">Organizers reserve the right to disqualify any team for violating the rules or engaging in prohibited activities.</li></span><span><h2>6. Communication and Updates:</h2><li class="rule">For any queries, join our <a href="https://discord.gg/e6yRKphmuU">Discord server</a>. CTF organizers and challenge authors will be highlighted on Discord.</li><li class="rule">All updates will be posted on the CTF portal&#39;s Announcements page, on <a href="https://discord.gg/e6yRKphmuU">Discord</a>, and on our <a href="https://www.instagram.com/team_1nf1n1ty/">Instagram</a>.</li><li class="rule">Hints (if released) will be posted on the Announcements page or in the challenge description.</li></span><span><h2>7. Flag Format:</h2><li class="rule">Unless stated otherwise, flags will follow the format: <strong>ironCTF{...}</strong>. </li></span><span><h2>8. Acknowledgment:</h2><li class="rule">By participating in the contest, you agree to have read and fully adhere to these rules. </li></span><p class="info">Thank you for taking the time to read through the rules. Happy hacking!</p></div></section><h3 class="smallheading">Prizes</h3><p class="info"> TBA </p>',3);function S(E,x,N,R,e,i){const l=d,g=p;return a(),r("main",v,[F,t("div",b,[t("span",{class:c({small:e.ctfEnded})},[e.ctfStarted?(a(),n(l,{key:0,targetDate:e.CTFEndDate,endMessage:"The CTF is over.",onEnd:i.handleCTFend},null,8,["targetDate","onEnd"])):h("",!0)],2),t("span",{class:c({small:e.ctfStarted})},[e.ctfEnded?h("",!0):(a(),n(l,{key:0,targetDate:e.targetDate,endMessage:"CTF has started!",onEnd:i.handleCTFstart},null,8,["targetDate","onEnd"]))],2)]),C,t("section",null,[D,t("div",w,[(a(!0),r(f,null,_(e.sponcers.sponcers,s=>(a(),n(g,{data:s.description,name:s.name,image:s.image,tag:s.tag,tagtype:s.tagtype,link:s.link},null,8,["data","name","image","tag","tagtype","link"]))),256))])]),k])}const O=m(T,[["render",S]]);export{O as default};
