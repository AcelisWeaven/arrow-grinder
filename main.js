(()=>{"use strict";var e,o,t,n,r,a,i,s,l,c,d,p,m,b,f={705:e=>{e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var t="",n=void 0!==o[5];return o[4]&&(t+="@supports (".concat(o[4],") {")),o[2]&&(t+="@media ".concat(o[2]," {")),n&&(t+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),t+=e(o),n&&(t+="}"),o[2]&&(t+="}"),o[4]&&(t+="}"),t})).join("")},o.i=function(e,t,n,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),o.push(d))}},o}},738:e=>{e.exports=function(e){return e[1]}},562:()=>{function e(e,o,t){o.forEach((function(o){return e.addEventListener(o,t)}))}document.addEventListener("DOMContentLoaded",(function(){var o=0,t=document.querySelectorAll(".points"),n="key-",r=document.querySelector(".keys-container"),a=document.querySelector(".key-selector"),i=[{score:0,speed:800,message:"",points:1,keys:1},{score:3,speed:750,message:"You've got it!",points:2,keys:2},{score:20,speed:670,message:"Keep going!",points:5,keys:3},{score:70,speed:620,message:"You're doing great!",points:7,keys:3},{score:150,speed:560,message:"You rock!",points:10,keys:3},{score:300,speed:510,message:"Don't stop!",points:12,keys:4},{score:500,speed:490,message:"Tricky!",points:15,keys:4},{score:760,speed:465,message:"Great!",points:17,keys:4},{score:1100,speed:440,message:"I like your style!",points:20,keys:4},{score:1500,speed:390,message:"Awesome!",points:22,keys:4},{score:2e3,speed:360,message:"Yeah!!",points:25,keys:4},{score:2700,speed:330,message:"How do you do that?",points:27,keys:4},{score:3500,speed:310,message:"...how?",points:30,keys:4},{score:4300,speed:290,message:"Don't ever stop!!",points:32,keys:4},{score:5500,speed:280,message:"I'm really impressed.",points:35,keys:4},{score:7e3,speed:270,message:"Arrow hero!",points:40,keys:4},{score:1e4,speed:260,message:"You're really still here?",points:40,keys:4},{score:10500,speed:250,message:"That's incredible!",points:40,keys:4}],s=i[0],l=!1,c=5e3,d=c,p=[],m=localStorage.getItem("bestScore"),b=document.querySelector(".mobile-controls"),f=document.querySelector("body"),u=document.querySelector(".level-message");function g(e){if("paused"!==l&&function(e){var o=p.indexOf(e);o>-1&&p.splice(o,1)}(e),"end"!==l&&"paused"!==l&&"restart"!==l){var b=["key-right","key-left","key-down","key-up"][Math.floor(Math.random()*s.keys)],f=r.querySelector(".idle");null===f?((f=document.createElement("div")).classList.add("key",b),f.onanimationend=function(){if("end"!==l&&"restart"!==l&&!f.classList.contains("idle")){f.classList.contains(n)?(d=Math.min(d+200,c),function(e){e<1&&(e=1),e=Math.floor(e),o+=e,a.classList.add("bump"),a.onanimationend=function(){a.classList.remove("bump")},t.forEach((function(e){e.textContent=o,e.classList.add("bump"),e.onanimationend=function(){e.classList.remove("bump")}}));var n=document.createElement("div");n.classList.add("ding"),n.textContent="+".concat(e),n.onanimationend=function(){n.remove()},a.appendChild(n)}(s.points)):(d-=1e3,a.classList.add("bad"),a.onanimationend=function(){a.classList.remove("bad")}),function(){var e=s;for(var t in i){var n=i[t];if(o>=n.score)s=n;else if(o<n.score)break}s.speed!==e.speed&&(u.textContent=s.message,u.classList.add("show"),u.onanimationend=function(){u.classList.remove("show")})}();var e=100*d/c,r=document.querySelector(".percent");r.style.width=e+"%",e<20?r.classList.add("low"):e<60?(r.classList.add("medium"),r.classList.remove("low")):r.classList.remove("low","medium"),d<=0&&"running"===l&&function(){l="end",document.querySelectorAll(".key").forEach((function(e){return e.classList.add("hide")}));var e=document.querySelector(".key-selector-container");e.classList.add("hide"),e.classList.remove("show");var t=document.querySelector(".results");t.classList.add("show"),t.classList.remove("hide");var n=document.querySelector(".points-container");n.classList.add("hide"),n.classList.remove("show"),document.querySelector(".percent").style.width="0%",document.querySelector(".pause-btn").textContent="Restart",o>m&&(m=o,sessionStorage.setItem("bestScore",m),document.querySelector(".best-points .value").textContent=m,document.querySelector(".best").style.display="block")}(),f.classList.add("idle"),f.classList.remove("key-up","key-down","key-left","key-right")}},r.appendChild(f)):(f.classList.remove("idle"),f.classList.add(b)),h(s.speed)}}function h(e){var o={delay:e,started:(new Date).getTime()};o.interval=setTimeout(g,e,o),p.push(o)}function x(o,t){e(b.querySelector(o),["touchstart","click"],(function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:t}))}))}document.onkeydown=function(e){if(32===e.keyCode&&(e.preventDefault(),"running"===l||"paused"===l?(l="running"===l?"paused":"running",document.querySelectorAll(".key").forEach((function(e){return e.classList.toggle("paused","paused"===l)})),document.querySelector(".pause").classList.toggle("show","paused"===l),"paused"===l?function(){var e=new Date;for(var o in p){var t=p[o];t.delay-=e.getTime()-t.started,t.started=null,clearInterval(t.interval)}}():"running"===l&&function(){var e=new Date;for(var o in p){var t=p[o];t.started=e.getTime(),t.interval=setTimeout(g,t.delay,t)}}()):"end"===l&&function(){l="restart",o=0,d=c=5e3,s=i[0],""!==n&&a.classList.remove("s-"+n),n="",r.querySelectorAll(".key").forEach((function(e){e.classList.remove("key-up","key-down","key-left","key-right","hide"),e.classList.add("idle")}));var e=document.querySelector(".key-selector-container");e.classList.add("show"),e.classList.remove("hide");var m=document.querySelector(".results");m.classList.add("hide"),m.classList.remove("show");var b=document.querySelector(".points-container");b.classList.add("show"),b.classList.remove("hide"),setTimeout((function(){for(var e in p){var n=p[e];clearInterval(n.interval)}p=[],t.forEach((function(e){return e.textContent=o}));var r=document.querySelector(".percent");r.style.width="100%",r.classList.remove("low","medium"),setTimeout((function(){l="running",document.querySelectorAll(".key").forEach((function(e){return e.classList.add("remove")})),document.querySelector(".pause-btn").textContent="Pause",h(1)}),950)}),1e3)}()),(e.keyCode>=37&&e.keyCode<=40||e.keyCode>=72&&e.keyCode<=76)&&"paused"!==l&&"restart"!==l){if(e.preventDefault(),!1===l)return l="running",document.querySelector(".points-container").classList.add("show"),document.querySelector(".helper-container").classList.add("hide"),setTimeout((function(){var e=document.querySelector(".key-selector");e.classList.add("show","fade"),e.onanimationend=function(){return e.classList.remove("fade")}}),500),h(1e3),document.querySelector(".percent").style.width="100%",!1;switch(""!==n&&a.classList.remove("s-"+n),e.keyCode){case 37:case 72:n="key-left";break;case 38:case 75:n="key-up";break;case 39:case 76:n="key-right";break;case 40:case 74:n="key-down"}a.classList.add("s-"+n)}},m&&(document.querySelector(".best-points .value").textContent=m,document.querySelector(".best").style.display="block"),x(".key-left",37),x(".key-up",38),x(".key-right",39),x(".key-down",40),b.querySelector(".pause-btn").ontouchstart=function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:32}))},f.classList.toggle("colorblind","yes"===localStorage.getItem("colorblind")),e(document.querySelector(".colorblind-btn"),["click","touchstart"],(function(){f.classList.toggle("colorblind",!f.classList.contains("colorblind")),localStorage.setItem("colorblind",f.classList.contains("colorblind")?"yes":"no")}))}))},604:(e,o,t)=>{t.d(o,{Z:()=>s});var n=t(738),r=t.n(n),a=t(705),i=t.n(a)()(r());i.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after{content:"";content:none}q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@keyframes fadeout{from{opacity:1}to{transform:scale(0.5);opacity:0}}@keyframes fadein{from{transform:scale(1.5);opacity:0}to{opacity:1}}@keyframes reversedfadein{0%{opacity:0}50%{opacity:1}100%{transform:scale(1.2);opacity:0}}@keyframes lowfadeinwithdelay{0%{opacity:0}40%{transform:scale(0.7);opacity:0}100%{opacity:1}}@keyframes orbit{0%{transform:translateY(250%) rotate(0deg) translateY(-250%) rotate(0deg) scale(0.1)}20%{transform:translateY(250%) rotate(-72deg) translateY(-250%) rotate(72deg) scale(1)}96%{transform:translateY(250%) rotate(-359deg) translateY(-250%) rotate(359deg) scale(1)}100%{transform:translateY(250%) rotate(-359deg) translateY(-250%) rotate(359deg) scale(0.3)}}@keyframes mobile-orbit{0%{transform:translateY(150%) rotate(0deg) translateY(-150%) rotate(0deg) scale(0.1)}20%{transform:translateY(150%) rotate(-72deg) translateY(-150%) rotate(72deg) scale(1)}96%{transform:translateY(150%) rotate(-359deg) translateY(-150%) rotate(359deg) scale(1)}100%{transform:translateY(150%) rotate(-359deg) translateY(-150%) rotate(359deg) scale(0.3)}}@keyframes lowbump{50%{transform:scale(1.1)}100%{transform:scale(1)}}@keyframes bump{50%{transform:scale(2)}100%{transform:scale(1)}}@keyframes selector-bump{50%{transform:scale(1.2)}100%{transform:scale(1)}}@keyframes selector-bad{0%{background-color:rgba(0,255,0,0)}50%{background-color:rgba(255,0,0,.2);transform:scale(0.95) rotate(1deg)}100%{background-color:rgba(0,255,0,0);transform:scale(1)}}@keyframes mobile-selector-bad{0%{background-color:#fff}50%{background-color:#ffb6c3}100%{background-color:#fff}}@keyframes ding{0%{opacity:1}30%{opacity:1}100%{opacity:0;transform:translateY(-30px)}}@keyframes color-arrow{0%,10%{color:#ff5252;transform:rotate(0deg) translateY(-5px)}15%,35%{color:#4d72ec;transform:rotate(90deg) translateY(-5px)}40%,60%{color:#ffc107;transform:rotate(180deg) translateY(-5px)}65%,85%{color:#58af4b;transform:rotate(270deg) translateY(-5px)}90%,100%{color:#ff5252;transform:rotate(359deg) translateY(-5px)}}body{font-family:"Inconsolata",monospace;text-align:center;background-color:#fff;padding-top:20px;color:#303030;border-top:1px solid #4b36bc;margin:0}body h1,body h2,body h3{font-weight:bold}body h1{font-size:16pt;margin-top:23px;margin-bottom:15px}body h2{font-size:14pt;margin-top:23px;margin-bottom:13px}body h3{font-size:12pt;margin-top:6px;margin-bottom:11px}body em{font-style:italic}body a{text-decoration:none;font-weight:bold}body strong{font-weight:bold}body i{padding-left:1px}body hr{border:none;border-top:1px solid #8b8b8b;margin-top:40px}.mobile{max-width:370px;margin:0 auto 20px auto;text-align:left;border-radius:5px;background-color:rgba(0,0,0,.5);padding:15px 10px;color:#fff}.mobile .centered{text-align:center}.mobile a{color:#fff}.mobile p{padding-bottom:10px}.mobile ul{text-align:center}.mobile ul li{padding:5px 20px;margin:5px 0;display:inline-block;background-color:rgba(255,255,255,.1)}.container{max-width:390px;background-color:#f0f0f0;border-radius:5px;height:390px;position:relative;margin:0 auto 10px auto;padding:0;user-select:text}.container .key-selector-container{padding:10px}.container .key-selector-container.hide{animation:fadeout 1s 1;opacity:0}.container .key-selector-container.show{animation:fadein 1s 1;opacity:1}.container .key-selector-container .key-selector{position:absolute;margin:0 auto;left:0;right:0;width:64px;border-radius:5px;height:64px;opacity:0;border-width:5px;border-style:solid;border-left-color:#58af4b;border-top-color:#ff5252;border-right-color:#4b36bc;border-bottom-color:#ffc107}.container .key-selector-container .key-selector.show{opacity:.8}.container .key-selector-container .key-selector.fade{animation:fadein 1s;transform-origin:50% 0}.container .key-selector-container .key-selector.bump{animation:selector-bump .25s 1 ease-in-out}.container .key-selector-container .key-selector.bad{animation:selector-bad .2s 1 linear}.container .key-selector-container .key-selector::after{margin:5px;background-color:#f0f0f0;opacity:.8}.container .key-selector-container .key-selector.s-key-left::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:54px;width:54px;height:54px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#58af4b;color:#58af4b;content:"";padding-right:5px;width:49px;border:none}.container .key-selector-container .key-selector.s-key-up::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:54px;width:54px;height:54px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#ff5252;color:#ff5252;content:"";padding-bottom:5px;line-height:49px;height:49px;border:none}.container .key-selector-container .key-selector.s-key-right::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:54px;width:54px;height:54px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#4b36bc;color:#4b36bc;content:"";padding-left:5px;width:49px;border:none}.container .key-selector-container .key-selector.s-key-down::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:54px;width:54px;height:54px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#ffc107;color:#ffc107;content:"";padding-top:5px;line-height:49px;height:49px;border:none}.container .key-selector-container .key-selector .ding{position:absolute;top:0;left:0;right:0;margin:0 auto;font-family:"Inconsolata",monospace;font-size:15pt;animation:ding .5s 1 ease-out;opacity:0;text-shadow:3px 0 0 #fff,0 -3px 0 #fff,0 3px 0 #fff,-3px 0 0 #fff}.container .logo{position:relative;width:88px;height:88px;margin:0 auto 20px auto;background-color:rgba(255,255,255,.9);border-radius:10px;border-width:20px;border-style:solid;border-left-color:#58af4b;border-top-color:#ff5252;border-right-color:#4d72ec;border-bottom-color:#ffc107;opacity:.6}.container .logo::after{position:absolute;top:0;right:0;left:0;font:normal normal normal 64px/1 FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);color:#ff5252;content:"";line-height:88px;animation:color-arrow 6s infinite ease-out}.container .key{position:absolute;margin:2px auto;left:0;right:0;width:60px;height:60px;animation:orbit 2s 1 linear;top:15px}.container .key.paused,.container .key.remove::after{animation-play-state:paused}.container .key.idle{animation:none;display:none}.container .key.hide::after{animation:fadeout 1s 1;opacity:0}.container .key.key-left::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:54px;width:54px;height:54px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#58af4b;color:#58af4b;content:"";padding-right:5px;width:49px}.container .key.key-up::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:54px;width:54px;height:54px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#ff5252;color:#ff5252;content:"";padding-bottom:5px;line-height:49px;height:49px}.container .key.key-right::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:54px;width:54px;height:54px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#4b36bc;color:#4b36bc;content:"";padding-left:5px;width:49px}.container .key.key-down::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:54px;width:54px;height:54px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#ffc107;color:#ffc107;content:"";padding-top:5px;line-height:49px;height:49px}.container .key::after{background-color:#fff}.container .level-message{display:none;position:absolute;left:0;top:0;line-height:390px;width:100%;height:100%;font-size:17px}.container .level-message.show{display:block;animation:reversedfadein 1s}.container .helper-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0}.container .helper-container.hide{animation:fadeout 1s;opacity:0}.container .helper-container .top{text-align:left}.container .helper-container .top .colorblind-btn{padding:12px}.container .helper-container .top .colorblind-btn .icon::before{content:""}.container .helper-container .top .colorblind-btn .help{display:none}.container .helper-container .top .colorblind-btn .help::after{content:" off"}.container .helper-container .top .colorblind-btn:hover{cursor:pointer;background-color:rgba(0,0,0,.1)}.container .helper-container .top .colorblind-btn:hover .icon{color:#4e4e4e}.container .helper-container .top .colorblind-btn:hover .help{display:inline-block}.container .helper-container .bottom{position:absolute;bottom:170px;left:0;right:0;max-width:390px;margin:0 auto}.container .helper-container .bottom .text{position:absolute;left:0;right:0;top:140px;max-width:292.5px;margin:0 auto;font-size:14pt;color:rgba(0,0,0,.7)}.container .helper-container .bottom .key{top:0;opacity:1;animation:none}.container .helper-container .bottom .key::after{animation:lowbump .8s infinite ease-out}.container .helper-container .bottom .key.key-left::after{top:70px;right:70px}.container .helper-container .bottom .key.key-up::after{top:0}.container .helper-container .bottom .key.key-down::after{top:70px}.container .helper-container .bottom .key.key-right::after{top:70px;right:0;left:70px}.container .results{position:absolute;display:none;top:0;left:0;margin:0;padding:0;width:100%;height:100%;background-color:rgba(0,0,0,.05);border-radius:5px;opacity:0}.container .results.show{display:table;animation:lowfadeinwithdelay 1.8s ease-in-out;opacity:1}.container .results.hide{display:table;animation:fadeout .8s ease-in-out;opacity:0}.container .results .results-container{display:table-cell;vertical-align:middle}.container .results .results-container .results-content{margin-left:auto;margin-right:auto}.container .results .results-container .results-content p{animation:lowbump .8s infinite ease-out}.container .pause{position:absolute;display:none;top:0;left:0;width:100%;height:100%;background-color:#cacaca;border-radius:5px}.container .pause.show{display:table}.container .pause .pause-container{display:table-cell;vertical-align:middle}.container .pause .pause-container .pause-content{margin-left:auto;margin-right:auto}.container .pause .pause-container .pause-content p{animation:lowbump .8s infinite ease-out}.container .total{position:absolute;max-width:390px;border-radius:0 0 5px 5px;margin:0 auto;left:0;right:0;bottom:0}.container .total .percent{height:6px;margin:0 auto;transition:width .2s ease-in-out,background-color .2s linear;background-color:#00db00;border-radius:5px}.container .total .percent.medium{background-color:#ffd000}.container .total .percent.low{background-color:#ff392d}.points-container{max-width:410px;text-align:center;font-family:"Inconsolata",monospace;margin:0 auto 20px auto;opacity:0}.points-container .points{display:inline-block}.points-container .points.bump{animation:selector-bump .3s 1 ease-in-out}.points-container.hide{animation:fadeout .5s ease-out;opacity:0}.points-container.show{animation:fadein .5s ease-out;opacity:1}.best{max-width:390px;margin:0 auto;text-align:right;padding-right:5px;font-size:16px}.best .best-points{font-weight:bold}.banner{display:inline-block;margin-top:30px}.about{max-width:370px;margin:0 auto;text-align:justify;font-size:16px;padding-top:20px}.about p{padding-top:10px;padding-bottom:10px}.about .prim{color:#3f3e40;font-weight:bold}.about .sec{color:#3f3e40;font-weight:bold}.about .third{color:#ff5252;font-weight:bold}.about .key-up{display:inline-block}.about .key-up::after{font:normal normal normal 10.5px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:17px;width:17px;height:17px;border-radius:5px;border-style:solid;border-width:1px 2px 3px 2px;border-color:#ff5252;color:#ff5252;content:"";padding-bottom:0;line-height:17px;height:17px;position:relative}.about .tiny{font-size:12px}.about .share{padding-bottom:20px;padding-top:10px;text-align:center;min-height:30px}.about .share.big{min-height:100px}.about .share .reddit-share-button{top:-3px;vertical-align:middle;padding-bottom:6px}.about .share .fb-share-button{top:-3px}.about .share .reddit-share-button{vertical-align:top}.about .footer{text-align:right}.mobile-controls{position:relative;display:none;max-width:390px;margin:0 auto;user-select:none}.mobile-controls .top{text-align:center;padding-bottom:10px}.mobile-controls .top .key-up{display:inline-block}.mobile-controls .top .key-up::after{font:normal normal normal 37.5px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:69px;width:69px;height:69px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#ff5252;color:#ff5252;content:"";padding-bottom:5px;line-height:64px;height:64px;position:relative}.mobile-controls .bottom{text-align:center;padding-bottom:10px}.mobile-controls .bottom .key-left{display:inline-block}.mobile-controls .bottom .key-left::after{font:normal normal normal 37.5px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:69px;width:69px;height:69px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#58af4b;color:#58af4b;content:"";padding-right:5px;width:64px;position:relative}.mobile-controls .bottom .key-down{display:inline-block}.mobile-controls .bottom .key-down::after{font:normal normal normal 37.5px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:69px;width:69px;height:69px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#ffc107;color:#ffc107;content:"";padding-top:5px;line-height:64px;height:64px;position:relative}.mobile-controls .bottom .key-right{display:inline-block}.mobile-controls .bottom .key-right::after{font:normal normal normal 37.5px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:69px;width:69px;height:69px;border-radius:5px;border-style:solid;border-width:2px 3px 4px 3px;border-color:#4b36bc;color:#4b36bc;content:"";padding-left:5px;width:64px;position:relative}.mobile-controls .pause-btn{position:absolute;top:0;right:0;background-color:rgba(0,0,0,.1);padding:13px 17px;margin-right:7px;border-radius:5px}.colorblind .helper-container .top .colorblind-btn .icon::before{content:""}.colorblind .helper-container .top .colorblind-btn .help{display:inline-block}.colorblind .helper-container .top .colorblind-btn .help::after{content:" on"}.colorblind .helper-container .top .colorblind-btn:hover{cursor:pointer}.colorblind .helper-container .top .colorblind-btn:hover .icon{color:#4e4e4e}.colorblind .key.key-left::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:52px;width:52px;height:52px;border-radius:5px;border-style:solid;border-width:3px 4px 5px 4px;border-color:#58af4b;color:#58af4b;content:"";padding-right:5px;width:47px;color:#000;border-color:#3a3a3a;border-bottom-color:#e7e7e7;border-top-color:#e7e7e7;border-style:dashed;background-color:#badfb4}.colorblind .key.key-up::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:52px;width:52px;height:52px;border-radius:5px;border-style:solid;border-width:3px 4px 5px 4px;border-color:#ff5252;color:#ff5252;content:"";padding-bottom:5px;line-height:47px;height:47px;color:#000;border-color:#000;background-color:#ffebeb}.colorblind .key.key-right::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:52px;width:52px;height:52px;border-radius:5px;border-style:solid;border-width:3px 4px 5px 4px;border-color:#4b36bc;color:#4b36bc;content:"";padding-left:5px;width:47px;color:#000;border-color:#3a3a3a;border-left-color:#e7e7e7;border-right-color:#e7e7e7;border-width:4px;background-color:#d3cdf1}.colorblind .key.key-down::after{font:normal normal normal 30px FontAwesome;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0);position:absolute;text-align:center;display:block;transform-origin:50% 50%;line-height:52px;width:52px;height:52px;border-radius:5px;border-style:solid;border-width:3px 4px 5px 4px;border-color:#ffc107;color:#ffc107;content:"";padding-top:5px;line-height:47px;height:47px;color:#000;border-color:#e7e7e7;border-width:4px;background-color:#ffe7a0}.colorblind .key-selector-container .key-selector{border-left-style:dashed}@media(min-width: 1024px){.desktop-only{display:block}.not-desktop{display:none}}@media(max-width: 1024px){.mobile-controls{display:block}.helper-container .key{display:none}.desktop-only{display:none}.not-desktop{display:block}.container .img-logo{height:80px}}@media(max-width: 480px){body{padding-top:0}body h1{margin-top:5px}.container{height:273px;margin-top:0}.container .key-selector-container .key-selector.bump{animation:none}.container .key-selector-container .key-selector.bad{animation:mobile-selector-bad .2s 1 linear}.container .key{backface-visibility:hidden;animation:mobile-orbit 2s 1 linear;opacity:1}.about{padding-left:15px;padding-right:15px}}',""]);const s=i},379:e=>{var o=[];function t(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=n.base?l[0]+n.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var m=t(p),b={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)o[m].references++,o[m].updater(b);else{var f=r(b,n);n.byIndex=s,o.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,o){var t=o.domAPI(o);return t.update(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap&&o.supports===e.supports&&o.layer===e.layer)return;t.update(e=o)}else t.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);o[s].references--}for(var l=n(e,r),c=0;c<a.length;c++){var d=t(a[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}a=l}}},569:e=>{var o={};e.exports=function(e,t){var n=function(e){if(void 0===o[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}o[e]=t}return o[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var o=document.createElement("style");return e.setAttributes(o,e.attributes),e.insert(o,e.options),o}},565:(e,o,t)=>{e.exports=function(e){var o=t.nc;o&&e.setAttribute("nonce",o)}},795:e=>{e.exports=function(e){var o=e.insertStyleElement(e);return{update:function(t){!function(e,o,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,r&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),o.styleTagTransform(n,e,o.options)}(o,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)}}}},589:e=>{e.exports=function(e,o){if(o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}}},u={};function g(e){var o=u[e];if(void 0!==o)return o.exports;var t=u[e]={id:e,exports:{}};return f[e](t,t.exports,g),t.exports}g.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return g.d(o,{a:o}),o},g.d=(e,o)=>{for(var t in o)g.o(o,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},g.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),e=g(379),o=g.n(e),t=g(795),n=g.n(t),r=g(569),a=g.n(r),i=g(565),s=g.n(i),l=g(216),c=g.n(l),d=g(589),p=g.n(d),m=g(604),(b={}).styleTagTransform=p(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=n(),b.insertStyleElement=c(),o()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals,g(562)})();