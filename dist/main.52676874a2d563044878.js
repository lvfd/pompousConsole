(()=>{var t,e={7960:(t,e,n)=>{"use strict";n(7723);var r=n(5119),a=n(511),o=n(3076);const i=n.p+"asset/images/216ca49ca40e94044026.svg";n(8242),n(8118);var c=n(2395),s=n.n(c),d=n(5758),l=n.n(d);n(9079),n(4766);var u=n(7944),p=n(8135);function f(t){l().ajax({type:"GET",dataType:"json",url:t.api,error:function(t){return console.error(t)},success:function(e){var n=document.getElementById(t.id);new u.ZP(n,{type:"bar",data:{labels:function(e){var n=[];return e.progress[t.id].data.forEach((function(t){return n.push(t.description)})),n}(e),datasets:[{label:"完成率",data:function(e){var n=[];return e.progress[t.id].data.forEach((function(t){return n.push(t.value)})),n}(e),barThickness:20}]},options:{aspectRatio:function(t){return 3===t.chart.data.datasets[0].data.length?1:5/4},indexAxis:"y",layout:{padding:10},plugins:{datalabels:{anchor:"end",align:function(t){var e=t.dataIndex;return t.dataset.data[e]<.8?"end":"start"},color:"#FE777B",formatter:function(t){return Math.round(100*t)+"%"}},title:{align:"start",display:!0,font:{size:16},text:e.progress[t.id].description},tooltip:{callbacks:{label:function(t){var e=t.dataset.label||"";return e&&(e+=": "),null!==t.parsed.x&&(e+=Math.round(100*t.parsed.x)+"%"),e}}}},scales:{x:{suggestedMin:0,suggestedMax:1,ticks:{stepSize:.1,callback:function(t){return Math.floor(100*t)+"%"}}},y:{ticks:{labelOffset:-20,mirror:!0}}}}})}})}function h(t){l().ajax({type:"GET",dataType:"json",url:t.api,error:function(t){return console.error(t)},success:function(e){var n=document.getElementById(t.id);new u.ZP(n,{type:"pie",data:{datasets:[{label:"商密笔数",backgroundColor:function(t){return t.dataIndex>0?"rgba(0,0,0,0)":"rgb(3,78,162)"},borderWidth:0,data:function(e){var n=e.finished[t.id].ready;return[n,e.finished[t.id].total-n]}(e),datalabels:{align:"end",anchor:"end",display:function(t){return t.dataIndex<1},font:{size:10},formatter:function(t,e){return[e.chart.data.datasets[0].label,t]},offset:0,textAlign:"center"},weight:.5},{label:"总笔数",backgroundColor:"rgb(250,166,26)",borderWidth:0,data:[e.finished[t.id].total],datalabels:{anchor:"start",color:function(t){var e=t.dataIndex;return 0==t.dataset.data[e]?"black":"white"},font:{size:10},formatter:function(t,e){return[e.chart.data.datasets[1].label,t]},textAlign:"center"}}]},options:{aspectRatio:2/3,layout:{padding:{top:10,bottom:40,left:10,right:60}},plugins:{subtitle:{align:"start",display:!0,font:{size:14},text:function(e){var n=e.finished[t.id].ready/e.finished[t.id].total;return"完成率: ".concat(isNaN(n)?"-- ":Math.round(100*n),"%")}(e)},title:{align:"start",display:!0,font:{size:16},text:e.finished[t.id].description},tooltip:{filter:function(t){return t.dataIndex<1}}}}})}})}u.ZP.register(p.Z),u.ZP.defaults.set("plugins.datalabels",{}),document.write('\n\t<link type="text/css" rel="stylesheet" href="'.concat(r,'">\n\t<script type="text/javascript" src="').concat(o,'"><\/script>\n\t<script type="text/javascript" src="').concat(a,'"><\/script>\n\t')),window.addEventListener("DOMContentLoaded",(function(){var t,e,n=document.getElementById("api").value,r=document.getElementById("staticData").value;try{(function(t){try{if(!t||!t.url)throw new Error("缺参数");var e=t.nodes?t.nodes:".uk-logo";document.querySelectorAll(e).forEach((function(e){e.innerHTML="";var n=document.createElement("img");n.src=t.url,n.setAttribute("uk-svg",""),n.style.height="1.5em",n.style.width="auto",e.appendChild(n);var r=document.createElement("span");r.innerText=t.after?t.after:"一些文字",e.appendChild(r)}))}catch(t){console.error(t,t.stack)}})({url:i,after:"商密改造作战大屏"}),function(){try{var t=document.querySelector("#mtime");t.innerHTML="";var e=document.querySelector("#mdate");function n(){var n=s()();t.innerText=n.format("HH:mm:ss"),0===n.hour()&&0===n.minute()&&(e.innerText=n.format("YYYY-MM-DD"))}e.innerHTML="",t.innerText=s()().format("HH:mm:ss"),e.innerText=s()().format("YYYY-MM-DD"),window.setInterval(n,1e3)}catch(r){console.error(r,r.stack)}}(),t={api:n},l().ajax({type:"GET",dataType:"json",url:t.api,error:function(t){return console.error(t)},success:function(t){try{var e=document.createElement("span"),n=document.createElement("span"),r=document.createElement("span"),a=document.createElement("span"),o=document.createElement("span"),i=document.createElement("span");e.innerText=t.finished.date,n.innerText="".concat(t.finished.recharge.ready,"笔"),r.innerText="".concat(t.finished.distill.ready,"笔"),a.innerText="".concat(t.finished.account.ready,"笔"),o.innerText="".concat(t.finished.withoutaccount.ready,"笔"),i.innerText="".concat(t.finished.transfer.ready,"笔"),document.getElementById("rdate").appendChild(e),document.getElementById("rrecharge").appendChild(n),document.getElementById("rdistill").appendChild(r),document.getElementById("raccount").appendChild(a),document.getElementById("rwithoutaccount").appendChild(o),document.getElementById("rtransfer").appendChild(i)}catch(t){console.error(t,t.stack)}}}),function(t){l().ajax({type:"GET",url:t.api,error:function(t){return console.error(t)},success:function(t){document.getElementById("broadcast").innerText=JSON.parse(t).broadcast}})}({api:r})}catch(t){console.error(t,t.stack)}f({id:"cli2sys",api:n}),f({id:"sys2sys",api:n}),f({id:"common",api:n}),h({id:"recharge",api:n}),h({id:"account",api:n}),h({id:"distill",api:n}),h({id:"withoutaccount",api:n}),h({id:"transfer",api:n}),e={id:"percentage",api:n,wrap:"percentageStyleTrigger"},l().ajax({type:"GET",dataType:"json",url:e.api,error:function(t){return console.error(t)},success:function(t){var n=e.wrap?document.getElementById(e.wrap):null;n&&(n.style.height="50vh",n.style.width=10*t.percentage.length+"%");var r=document.getElementById(e.id);new u.ZP(r,{type:"line",data:{labels:function(t){var e=[];return t.percentage.forEach((function(t){return e.push(t.date)})),e}(t),datasets:[{label:"占比",data:function(t){var e=[];return t.percentage.forEach((function(t){return e.push(t.value)})),e}(t),tension:.1}]},options:{layout:{padding:20},maintainAspectRatio:!n,plugins:{datalabels:{align:"top",formatter:function(t){return Math.round(t)+"%"}},legend:{display:!1},title:{align:"start",display:!0,font:{size:16,lineHeight:3},text:"占比进度"},tooltip:{callbacks:{label:function(t){var e=t.dataset.label||"";return e&&(e+=": "),null!==t.parsed.y&&(e+=Math.round(t.parsed.y)+"%"),e}}}},scales:{y:{ticks:{callback:function(t){return t+"%"}}}}}})}})}))},4301:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=4301,t.exports=e}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,t=[],r.O=(e,n,a,o)=>{if(!n){var i=1/0;for(l=0;l<t.length;l++){for(var[n,a,o]=t[l],c=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((t=>r.O[t](n[s])))?n.splice(s--,1):(c=!1,o<i&&(i=o));if(c){t.splice(l--,1);var d=a();void 0!==d&&(e=d)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,a,o]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t={179:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var a,o,[i,c,s]=n,d=0;if(i.some((e=>0!==t[e]))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(s)var l=s(r)}for(e&&e(n);d<i.length;d++)o=i[d],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},n=self.webpackChunk_lyufudi_pompous_console=self.webpackChunk_lyufudi_pompous_console||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var a=r.O(void 0,[164,729,977],(()=>r(7960)));a=r.O(a)})();
//# sourceMappingURL=main.52676874a2d563044878.js.map